(ns app.views
  (:require [app.core :as app]
            [re-frame.core :as rf]
            [session.core :as session]))

(defn- app-btn [{:keys [::session/id]}]
  [:span {:style    {:cursor "pointer"}
          :on-click #(rf/dispatch [:dispose-session id])} "[close]"])

(defn- action-bar [{:keys [closeable?] :as session}]
  [:div {:class-name "col-lg-7 col-md-7 col-sm-12"}
   [:div {:style {:position "absolute" :right 10}}
    (if closeable? [app-btn session] [:span])]])

(defn- breadcrumb []
  [:ul {:class-name "breadcrumb padding-0"} [:li "@"]])

(defn- container-header [session app-meta]
  [:div.block-header
   [:div.row.clearfix
    [:div {:class-name "col-lg-5 col-md-5 col-sm-12"}
      [:h2 (::session/title session)]]
      ;[breadcrumb] - I don't think at the moment breadcrumb is necessary
    [action-bar session]]])

(defn app-container
  [session app-meta visible?]
  (let [display (if visible? :block :none)]
    [:div.app-view-panel {:style {:display display}}
     [container-header session app-meta]
     [:div.app-view-panel [(::app/render-fn app-meta) session app-meta]]]))

(defn app-viewport
  [sessions]
  [:div.app-view-panel.container-fluid
   (for [[session app-meta selected?] sessions]
     (let [session-id (::session/id session)]
       ^{:key (str "app-view-" session-id)} [app-container session app-meta selected?]))])