(ns fast-shell.events
  (:require [re-frame.core :as re-frame]
            [fast-shell.core :as shell]

            [app.core :as app]))

(re-frame/reg-event-db
  ::shell/initialize-db
  (fn [_ _]
    shell/default-db))

(re-frame/reg-event-db
  ::new-app-meta
  (fn [{:keys [::app/store] :as db} [_ app-meta]]
    (app/add-new-meta db app-meta)))

