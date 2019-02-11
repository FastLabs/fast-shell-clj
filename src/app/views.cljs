(ns app.views
  (:require [app.core :as app]
            [re-frame.core :as rf]
            [session.core :as session]))

(defn- title [session app-meta]
  [:span (str (::session/id session) (::session/title session))])

(defn- app-btn [{:keys [::session/id]}]
  [:span {:style {:cursor "pointer"}
          :on-click #(rf/dispatch [:dispose-session id])} "[close]"])

(defn- action-bar [session]
  [:div {:style {:display :inline}} [app-btn session]])

(defn- container-header [session app-meta]
  [:div [title session app-meta]
   [action-bar session]])

(defn app-container
  [session app-meta visible?]
  (let [display (if visible? :block :none)]
    [:div.app-view-panel {:style {:display display}}
     [container-header session app-meta]
     [:div.app-view-panel [(::app/render-fn app-meta) session app-meta]]]))

(defn app-viewport
  [sessions]
  [:div.app-view-panel
    (for [[session app-meta selected?] sessions]
      (let [session-id (::session/id session)]
        ^{:key (str "app-view-" session-id)} [app-container session app-meta selected?]))])