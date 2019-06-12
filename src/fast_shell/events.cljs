(ns fast-shell.events
  (:require [re-frame.core :as rf]
            [fast-shell.core :as shell]
            [app.server.core :as server]))


(rf/reg-event-db
  ::shell/status
  (fn [db [_ status]]
    (prn "Shell Status set to: " status)
    (assoc db ::shell/satus status)))

(rf/reg-event-fx
  ::shell/initialize-db
  (fn [_ _]
    {:db shell/default-db
     :dispatch-n [[::shell/status :progress]
                  [::server/apps-requested]]}))
