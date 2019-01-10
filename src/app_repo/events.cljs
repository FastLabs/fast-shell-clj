(ns app-repo.events
  (:require [re-frame.core :as rf]
            [app.core :as app]))

(rf/reg-event-db
  :load-apps
  (fn [db [_ apps]]
    (reduce app/add-new-meta db apps)))
