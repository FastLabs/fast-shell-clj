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
(s/def ::all-inst (s/coll-of ::session))

(s/def ::sessions (s/keys :req [::inst-count]
                          :opt [::all-inst]))


(defn new-session
  [inst-id {:keys [::app/id]}]
  {::id [inst-id id]})



(defn scan-sessions
  "Finds all sessions for a particular application"
  [sessions {:keys [::app/id]}]
  (filter #(= (second (::id %)) id) sessions))

(defn- gen-id
  [{:keys [::inst-count]}]
  (inc inst-count))


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

(defn simple []
  (println "simple"))
