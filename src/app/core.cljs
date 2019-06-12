(ns app.core
  (:require [cljs.spec.alpha :as s]
            [re-frame.core :as rf]))

(s/def ::id string?)
(s/def ::name string?)
(s/def ::description string?)
(s/def ::launcher map?)

(s/def ::meta (s/keys :req [::id ::name ::launcher]
                      :opt [::description]))

(s/def ::store-cfg map?)
(s/def ::store-content (s/map-of ::id ::meta))

(s/def ::store (s/keys :req [::store-content ::store-cfg]))

(defn new-app-meta [app-id app-name]
  {::id   app-id
   ::name app-name})

(defn add-new-meta
  [db apps]
  (reduce (fn [db' {:keys [::id] :as app}]
            (assoc-in db' [::store ::store-content id] app)) db apps))


(defn find-by-id
  [db app-id]
  (get-in db [::store ::store-content app-id]))

;;TODO: review this if i ned this or just to generate the event
(defn start-app
  [app-id & {:as options}]
  (rf/dispatch [:start-app app-id (merge {:activate? true} options)]))
