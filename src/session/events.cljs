(ns session.events
  (:require [session.core :as session]
            [re-frame.core :as rf]))

;;TODO: move to namespaced events ?

(rf/reg-event-db
  :dispose-session
  (fn [db [_ session-id]]
    (session/dispose-session db session-id)))

(rf/reg-event-db
  :activate-session
  (fn [db [_ session-id]]
    (session/activate-session db session-id true)))
