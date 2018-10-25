(ns session.core
  (:require [app.core :as app]
            #?(:clj
                     [clojure.spec.alpha :as s]
               :cljs [cljs.spec.alpha :as s])))


(s/def ::id (s/cat :session-id int? :app-id ::app/id))
(s/def ::attributes map?)
(s/def ::description string?)

;;TODO: replace description with title and make it required
(s/def ::session (s/keys :req [::id ::title]
                         :opt [::description ::attributes]))

(s/def ::ins-count int?)
(s/def ::all-inst (s/map-of ::id ::session))

(s/def ::sessions (s/keys :req [::inst-count]
                          :opt [::all-inst]))

(s/def ::instances (s/map-of ::app/id ::sessions))

(defn- session-container
  []
  {::inst-count 0
   ::all-inst   {}})

(defn gen-session
  "Appends a new session to an existing set of sessions for same application"
  [sessions app-meta]
  (let [new-sessions (if (nil? sessions) (session-container) sessions)
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


(defn destroy-session
  [db session-id]
  (let [[_ app-id] session-id
        app-ses-info (get-in db [::instances app-id])
        all-inst' (dissoc (get app-ses-info ::all-inst) session-id)
        app-session' (assoc app-ses-info ::all-inst all-inst')]
    (assoc-in db [::instances app-id] app-session')))

(defn app-sessions
  [db app-id]
  (get-in db [::instances app-id ::all-inst]))

(defn- app-session-pair [app-store all-inst]
  (->> all-inst
       (map (fn [[[_ app-id] session]] [ (get app-store app-id) session]))
       first))

(defn sessions-view
  [{:keys [::instances ::app/store] :as db}]
  (prn instances)
  (->> instances
       (map (fn [[_ ses-detail]]
              (app-session-pair (get store ::app/store-content) (get ses-detail ::all-inst))))))


