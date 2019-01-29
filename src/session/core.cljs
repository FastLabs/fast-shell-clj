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
  (-> {::status :pending}
      (gen-session-id app-meta session-postfix)
      (gen-session-title app-meta)))

(defn- next-app-session
  [db {:keys [::app/id]}]
  (->> (get-in db [::inst-count id] 0)
       inc))

(defn add-new-session
  "Creates a new session"
  [db app-meta]
  (let [session-postfix (next-app-session db app-meta)
        new-session (gen-session-new app-meta session-postfix)
        new-session-id (::id new-session)]
    (-> db
        (assoc-in [::instances new-session-id] new-session)
        (assoc-in [::inst-count (::app/id app-meta)] session-postfix)
        (assoc ::last-created new-session-id))))

(defn activate-session
  [db session-id]
  (prn "Activate Session" session-id)
  (assoc db ::active session-id))

(defn dispose-session
  ;;TODO: review this as per re-frame tutorial from lisp-cast
  [{:keys [::instances] :as db} session-id]
  (prn "Dispose session" session-id)
  (->> session-id
       (dissoc instances)
       (assoc db ::instances)))


(defn app-id
  [session]
  (first (::id session)))
