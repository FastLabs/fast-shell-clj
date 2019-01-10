(ns app.subs
  (:require [re-frame.core :as rf]
            [app.core :as app]))

;;TODO: subscriptions should be namespaced as well

(rf/reg-sub
  ;;TODO: review this subscription
  :app-name
  (fn [db _]
    (::app/name db)))

(rf/reg-sub :app-list
            (fn [{:keys [::app/auto-start] :as db} _]
              (let [apps (vals (get-in db [::app/store ::app/store-content]))]
                (filter #(not (contains? auto-start (get % ::app/id))) apps))))