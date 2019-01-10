(ns app.views
  (:require [app.core :as app]
            [session.core :as session]))

(defn- title [session app-meta]
  [:span (str (::session/id session) (::session/title session))])

(defn- app-btn [session]
  [:span "[close]"])

(defn- action-bar [session]
  [:div {:style {:display :inline}} [app-btn session]])

(defn- container-header [session app-meta]
  [:div [title session app-meta]
   [action-bar session]])

(defn app-container
  [session app-meta visible?]
  (let [display (if visible? :block :none)]
    [:div {:style {:display display}}
     [container-header session app-meta]
     [:div [(::app/render-fn app-meta) session app-meta]]]))

(defn app-viewport
  [sessions]
  [:div {:style {:width "100%" :height "100%" :border "1px solid"}} ;;TODO: if sessions is empty show empty viewport or default view
   [:div ;;TODO: do i need this div?
    (for [[session app-meta selected?] sessions]
      (let [session-id (::session/id session)]
        ^{:key (str "app-view-" session-id)} [app-container session app-meta selected?]))]])