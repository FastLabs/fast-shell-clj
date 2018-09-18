(ns session.core
  (:require [app.core :as app]
            #?(:clj
                     [clojure.spec.alpha :as s]
               :cljs [cljs.spec.alpha :as s])))


(s/def ::id (s/cat :session-id int? :app-id ::app/id))
(s/def ::attributes map?)
(s/def ::description string?)


(s/def ::session (s/keys :req [::id]
                         :opt [::description ::attributes]))

(s/def ::ins-count int?)
(s/def ::all-inst (s/map-of ::id ::session))

(s/def ::sessions (s/keys :req [::inst-count]
                          :opt [::all-inst]))

(s/def ::instances (s/map-of ::app/id ::sessions))

(defn scan-sessions
  "Finds all sessions for a particular application"
  [sessions {:keys [::app/id]}]
  (filter #(= (second (::id %)) id) sessions))

(defn- gen-id
  [{:keys [::inst-count]}]
  (inc inst-count))

(defn- empty-session
  []
  {::inst-count 0
   ::all-inst   {}})

(defn gen-session
  "Appends a new session to an existing set of sessions for same application"
  [sessions app-meta]
  (let [new-sessions (if (nil? sessions) (empty-session) sessions)
        {:keys [::inst-count ::all-inst]} new-sessions
        next-count (inc inst-count)
        new-session-id [next-count (get app-meta ::app/id)]
        new-session {::id new-session-id}]
    {::inst-count next-count
     ::all-inst   (assoc all-inst new-session-id new-session)}))


(defn new-session
  "Creates a new session"
  [db app-id]
  (let [app-meta (app/find-by-id db app-id)]
    (update-in db [::instances app-id] gen-session app-meta)))


;TODO - remove this. I changed the way this is done
(defn start-session
  "Appends a new created session "
  ([sessions app-meta]
   (start-session sessions app-meta (partial gen-id sessions)))
  ([{:keys [::inst-count ::all-inst]} app-meta s-id-gen]
   (let [new-count (s-id-gen)
         new-session (new-session new-count app-meta)
         {:keys [::id]} new-session]
     {::inst-count new-count
      ::all-inst   (conj all-inst new-session)})))

(defn destroy-session
  [{:keys [::all-inst] :as all-sessions} session-id]
  (assoc all-sessions ::all-inst (filter #(not (= (get % ::id) session-id)) all-inst)))

