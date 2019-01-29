(ns app.events
  (:require [re-frame.core :as rf]
            [app.core :as app]
            [session.core :as session]))

(defonce subscribed? (atom false))

(defn- handle-app-msg
  [{:keys [appId instId status] :as app-msg}]
  (rf/dispatch [:app-status-update [appId (js/parseInt instId)] (keyword (.toLowerCase status))]))

(defn- post-msg-handler
  "Hales the event from a windowed application"
  [evt]
  (let [evt-data (-> evt .-data)]
    (-> (.parse js/JSON evt-data)
     (js->clj :keywordize-keys true)
     handle-app-msg)))

(defn listen-events []
  (when-not @subscribed?
    (js/addEventListener "message" post-msg-handler)
    (prn "->> Subscribe window listener")
    (reset! subscribed? true)))

;todo: look to improve event subscription
(listen-events)

(rf/reg-event-db
  :start-app
  (fn [db [_ app-id activate?]]
    (let [app-meta (app/find-by-id db app-id)
          db' (session/add-new-session db app-meta)]
      (if activate?
        (session/activate-session db' (::session/last-created db'))
        db'))))

(rf/reg-event-db
  :app-status-update
  (fn [db [_ app-id status]]
    (prn "=======" app-id status)
    (assoc-in db [::session/instances app-id ::session/status] status)))

(rf/reg-event-fx
  :cross-app-com-in
  (fn [cofx [_ message]]
    (prn "Received event from app: " message)
    cofx))