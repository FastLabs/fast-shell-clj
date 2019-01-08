(ns fast-shell.events
  (:require [re-frame.core :as re-frame]
            [fast-shell.db :as db]
            [app.core :as app]))

(re-frame/reg-event-db
  ::initialize-db
  (fn [_ _]
    db/default-db))

(re-frame/reg-event-db
  ::new-app-meta
  (fn [{:keys [::app/store] :as db} [_ app-meta]]
    (app/add-new-meta db app-meta)))

