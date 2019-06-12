(ns fast-shell.views
  (:require [re-frame.core :as rf]
            [app.core :as app]
            [session.core :as session]
            [session.views :refer [session-bar]]
            [app.views :as a-view]))

(defn- frame-id
  [[app-id inst-id]]
  (str "ifr-" app-id "$" inst-id))

(defn iframe-render-fn
  [{:keys [::session/id]} {:keys [::app/launcher]}]
  [:iframe.app-iframe  {:id  (frame-id id)
                        :src (::app/location launcher)}])

(defn container-view []
  (let [ app-sessions @(rf/subscribe [::session/app-sessions])]
       [:div.app-view-panel
        [:aside.minileftbar  [session-bar app-sessions]]
        [:section.view.app-view-panel [a-view/app-viewport app-sessions]]]))
