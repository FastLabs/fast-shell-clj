(ns fast-shell.views
  (:require [re-frame.core :as rf]
            [app.core :as app]
            [fast-shell.core :as shell]
            [session.core :as session]
            [session.views :as s-view]
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
    [:div {:style {:height "100%"
                   :weight "100%"}}
     [:iframe {:id  (str "ifr-" app-id "$" inst-id)
               :src location}]]))

(defn container-view []
  (let [app-sessions @(rf/subscribe [::session/app-sessions])
        app-title @(rf/subscribe [::shell/title])]
    (prn "Render Application Sessions for " app-title)
    [:div
     [:h2 app-title]
     [:div [:div [:h3 "Application Instances"]
            [s-view/session-selector app-sessions]
            [a-view/app-viewport app-sessions]]]]))

