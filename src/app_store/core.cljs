(ns app-store.core
  (:require [cljs.spec.alpha :as s]
            [app.core :as app]))

(s/def ::config map?)
(s/def ::apps (s/map-of ::app/id ::app/meta))
(s/def ::content (s/keys :req [::config ::apps]))


(defn add-new-meta
  [db apps]
  (reduce (fn [db' {:keys [::app/id] :as app}]
            (assoc-in db' [::content ::apps id] app)) db apps))

(defn find-app-by-id
  [db app-id]
  (get-in db [::content ::apps app-id]))
