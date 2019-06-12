(ns fast-shell.event-bus
  (:require [re-frame.core :as rf]))

(defonce subscribed? (atom false))

(defn- handle-app-msg
  [{:keys [appId instId status]}]
  (rf/dispatch [:app-status-update [appId (js/parseInt instId)] (keyword (.toLowerCase status))]))

(defn- post-msg-handler
  "Hales the event from a windowed application"
  [evt]
  (let [evt-data (-> evt .-data)]
    (prn "receied remote app event")
    (-> (.parse js/JSON evt-data)
        (js->clj :keywordize-keys true)
        handle-app-msg)))

(defn listen-events []
  (when-not @subscribed?
    (js/addEventListener "message" post-msg-handler)
    (prn "-> Subscribe window listener")
    (reset! subscribed? true)))

(rf/reg-event-fx
  :cross-app-com-in
  (fn [cofx [_ message]]
    (prn "Received event from app: " message)
    cofx))
