(ns app.subs
  (:require [re-frame.core :as rf]
            [app.core :as app]))

(defn- visible-launcher?
  [app-meta]
  (not (get-in app-meta [::app/options :startup-run?] false)))

(rf/reg-sub
  :app-list
  (fn [{:keys [::app/store]} _]
    (->> (::app/store-content store)
         vals
         (filter visible-launcher?))))
