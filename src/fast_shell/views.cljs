(ns fast-shell.views
  (:require [re-frame.core :as rf]
            [app.core :as app]
            [fast-shell.core :as shell]
            [session.core :as session]
            [session.views :refer [session-bar]]
            [app.views :as a-view]
            [app-repo.views :as repo-view]))

(defn app-repo-render-fn
  [_ _]
  (let [apps @(rf/subscribe [:app-list])]
    [:div [:div
           [:span "Application Repository"]
           [:div [repo-view/app-list apps]]]]))

(defn user-admin-render-fn
  [_ _]
  [:div "User Administration app"])

(defn iframe-render-fn
  [{:keys [::session/id]} {:keys [::app/location]}]
  (let [[app-id inst-id] id]
     [:iframe.app-iframe  {:id  (str "ifr-" app-id "$" inst-id)
                           :src location}]))

(defn container-view []

  (let [app-sessions @(rf/subscribe [::session/app-sessions])]
      [:div.app-view-panel
       [:aside.minileftbar  [session-bar app-sessions]]
       [:section.content [a-view/app-viewport app-sessions]]]))

