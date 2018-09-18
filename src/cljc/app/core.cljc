(ns app.core
  (:require #?(:clj  [clojure.spec.alpha :as s]
               :cljs [cljs.spec.alpha :as s])))

(s/def ::id string?)
(s/def ::name string?)
(s/def ::description string?)

(s/def ::meta (s/keys :req [::id ::name]
                      :opt [::description]))

(s/def ::store-cfg map?)
(s/def ::store-content (s/coll-of ::meta))

(s/def ::store (s/keys :req [::store-content ::store-cfg]))

(defn new-app-meta [app-id app-name]
  {::id   app-id
   ::name app-name})

(defn add-new-meta
  [db app-meta]
  (prn "register new application meta " (get app-meta ::name))
  (update-in db [::store ::store-content] (fn [store-content] (conj store-content app-meta))))

(defn find-by-id
  [db app-id]
  (let [store-content (get-in db [::store ::store-content])
        pred (fn [meta] (when (= (get meta ::id) app-id) meta))]
    (some pred store-content)))
