(ns app.subs
  (:require [re-frame.core :as rf]
            [app-store.core :as store]
            [app.core :as app]))

(defn- visible-launcher?
  [app-meta]
  (not (get-in app-meta [::app/options :startup-run?] false)))

(rf/reg-sub
  :app-list
  (fn [{:keys [::store/content]} _]
    (->> (::store/apps content)
         vals
         (filter visible-launcher?))))
