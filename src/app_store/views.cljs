(ns app-store.views
  (:require [re-frame.core :as rf]
            [app.core :as app]
            [util.dom-handlers :refer [on-click]]))

;;using gile item as style component
(defn app-tile
  [{:keys [::app/id ::app/name]}]
  [:div.col-lg-3.col-md-4.col-sm-12
   { :id (str "app-" id)
     :style {:cursor :pointer}
     :on-click (on-click #(app/start-app id))}
   [:div.card
    [:div.file
     [:div.hover]
     [:div.image]
     [:div.file-name [:p.m-b-5.text-muted name]]]]])

(defn app-list
  [apps]
  [:div.tab-content
   [:div.row.clearfix
    (for [{:keys [::app/id ] :as app} apps]
      ^{:key id} [app-tile app])]])

(defn app-repo-render-fn
 [_ _]
 (let [apps @(rf/subscribe [:app-list])]
   [:<> [:div.file_manager
         [:div.col-lg-12 [app-list apps]]]]))
