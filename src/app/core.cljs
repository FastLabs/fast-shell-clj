(ns app.core
  (:require [cljs.spec.alpha :as s]
            [re-frame.core :as rf]))

(s/def ::id string?)
(s/def ::name string?)
(s/def ::description string?)

(s/def ::meta (s/keys :req [::id ::name]
                      :opt [::description]))

(s/def ::store-cfg map?)
(s/def ::store-content (s/map-of ::id ::meta))

(s/def ::store (s/keys :req [::store-content ::store-cfg]))

(defn new-app-meta [app-id app-name]
  {::id   app-id
   ::name app-name})

(defn add-new-meta
  [db {:keys [::id] :as app-meta}]
  (prn (str "register new application meta: " id))
  (assoc-in db [::store ::store-content id] app-meta))


(defn find-by-id
  [db app-id]
  (let [store-content (get-in db [::store ::store-content])]
    (get store-content app-id)))

(defn start-app
  ([app-id activate?]
   (rf/dispatch [:start-app app-id activate?]))
  ([app-id]
   (start-app app-id true)))
