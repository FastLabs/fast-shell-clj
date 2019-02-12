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

(defn- gen-session-new [app-meta session-postfix]
  (-> {::status :pending}
      (gen-session-id app-meta session-postfix)
      (gen-session-title app-meta)))

(defn next-app-session
  [db {:keys [::app/id] :as app-meta}]
  (->> (get-in db [::inst-count id] 0)
       inc
       (gen-session-new app-meta)))

(defn activate-session
  [db session-id active-flag]
  (if active-flag
    (assoc db ::active session-id)
    db))



(defn- session-config
  "Configures the session based on startup request options.
   By default the application will be closeable unless is requested otherwise."
  [session opts]
  (-> {:closeable? true}
      (merge (dissoc opts [:activate?]))
      (merge session)))

(defn register-session
  "Register a new session within the application"
  [db session {:keys [activate?] :as opts}]
  (let [new-session (session-config session opts)
        [app-id inst-id :as new-session-id] (::id new-session)]
    (-> db
        (assoc-in [::instances new-session-id] new-session)
        (assoc-in [::inst-count app-id] inst-id)
        (activate-session new-session-id activate?))))


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
