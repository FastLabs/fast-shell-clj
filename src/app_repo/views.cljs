(ns app-repo.views
  (:require [re-frame.core :as rf]
            [app.core :as app]
            [util.dom-handlers :refer [on-click]]))

(defn app-list
  [apps]
  [:ul (for [{:keys [::app/id ::app/name]} apps]
         ^{:key id} [:li {:style    {:cursor :pointer}
                          :on-click (on-click #(app/start-app id))}
                     name])])

(defn app-repo-render-fn
 [_ _]
 (let [apps @(rf/subscribe [:app-list])]
   [:div [:div
          [:span "Application Repository"]
          [:div [app-list apps]]]]))
