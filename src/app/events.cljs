(ns app.events
  (:require [re-frame.core :as rf]
            [app.core :as app]
            [session.core :as session]))

(rf/reg-event-db
  :start-app
  (fn [db [_ app-id activate?]]
    (let [app-meta (app/find-by-id db app-id)
          db' (session/add-new-session db app-meta)]
      (if activate?
        (session/activate-session db' (::session/last-created db'))
        db'))))
