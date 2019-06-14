(ns app.events
  (:require [re-frame.core :as rf]
            [app.core :as app]
            [app-store.core :as store]
            [fast-shell.views :as shell-view]
            [fast-shell.core :as shell]
            [session.core :as session]))

;TODO: move to session namespace
(rf/reg-event-db
  :start-app
  (fn [db [_ app-id opts]]
    (let [app-meta (store/find-app-by-id db app-id)
          session (session/next-app-session db app-meta)]
      (session/register-session db session opts))))
;TODO: move to session namespace
(rf/reg-event-db
  :app-status-update
  (fn [db [_ app-id status]]
    (assoc-in db [::session/instances app-id ::session/status] status)))

(defn detect-renderer
  [{:keys [::app/launcher] :as app-meta}]
  (if (contains? launcher ::app/url)
    (update-in app-meta [::app/launcher ::app/render-fn]  shell-view/iframe-render-fn)
    app-meta))

(defn auto-start-events
  [apps]
  (->> apps
    (filter #(get-in % [::app/options :startup-run?]))
    (map (fn [app]
           [:start-app
            (::app/id app)
            (merge {:activate? false} (::app/options app))]))))

(rf/reg-event-fx
  ::new-meta
  (fn [{:keys [db]} [_ new-meta]]
    (let [db' (->> new-meta
               (map detect-renderer)
               (store/add-new-meta db))]
        {:db db'
         :dispatch-n (conj (auto-start-events new-meta)
                           [::shell/status :ok])})))
