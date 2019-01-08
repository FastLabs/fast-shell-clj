(ns session.core
  (:require [app.core :as app]
            [cljs.spec.alpha :as s]))


(s/def ::id (s/cat :session-id int? :app-id ::app/id))
(s/def ::attributes map?)
(s/def ::title string?)

(s/def ::session (s/keys :req [::id ::title]
                         :opt [::attributes]))

(s/def ::ins-count (s/map-of ::app/id int?))
(s/def ::instances (s/map-of ::id ::session))

(defn- gen-session-title
  [session app-meta]
  (assoc session ::title (::app/name app-meta)))

(defn- gen-session-id
  [session app-meta session-postfix]
  (let [ses-id [(::app/id app-meta) session-postfix]]
    (assoc session ::id ses-id)))

(defn gen-session-new [app-meta session-postfix]
  (-> {}
      (gen-session-id app-meta session-postfix)
      (gen-session-title app-meta)))

(defn add-new-session
  "Creates a new session"
  [db app-id]
  (let [app-meta (app/find-by-id db app-id)
        app-inst-count (get-in db [::inst-count app-id] 0)
        session-postfix (inc app-inst-count)
        new-session (gen-session-new app-meta session-postfix)]
    (-> db
        (assoc-in [::instances (::id new-session)] new-session)
        (assoc-in [::inst-count app-id] session-postfix))))


(defn destroy-session
  [db session-id]
  (let [instances (::instances db)]
    (->> (dissoc instances session-id)
         (assoc db ::instances))))


(defn app-sessions
  [db app-id]
  (get-in db [::instances app-id ::all-inst]))

(defn- app-session-pair [app-store all-inst]
  (->> all-inst
       (map (fn [[[_ app-id] session]] [(get app-store app-id) session]))
       first))

(defn sessions-view
  [{:keys [::instances ::app/store] :as db}]
  (prn instances)
  (->> instances
       (map (fn [[_ ses-detail]]
              (app-session-pair (get store ::app/store-content) (get ses-detail ::all-inst))))))


