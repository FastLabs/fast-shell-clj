(ns app.core
  (:require [cljs.spec.alpha :as s]
            [re-frame.core :as rf]))

(s/def ::id string?)
(s/def ::name string?)
(s/def ::description string?)
(s/def ::launcher map?)
(s/def ::options map?)

(s/def ::meta (s/keys :req [::id ::name ::launcher]
                      :opt [::description ::options]))

(defn new-app-meta [app-id app-name]
  {::id   app-id
   ::name app-name
   ::launcher {}})

;;TODO: review this if i ned this or just to generate the event
(defn start-app
  [app-id & {:as options}]
  (rf/dispatch [:start-app app-id (merge {:activate? true} options)]))
