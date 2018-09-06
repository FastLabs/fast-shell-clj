(ns fast-shell.events
  (:require [re-frame.core :as re-frame]
            [fast-shell.db :as db]))

(re-frame/reg-event-db
 ::initialize-db
 (fn  [_ _]
   db/default-db))

(re-frame/reg-event-db
  ::new-app-meta
  (fn [db app-meta]))

