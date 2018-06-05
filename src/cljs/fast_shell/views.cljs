(ns fast-shell.views
  (:require [re-frame.core :as re-frame]
            [re-com.core :refer [v-box modal-panel]]
            [fast-shell.subs :as subs]
            [reagent.core :as re]
            [openfin.core :as of]
            [element.app-menu :as app-menu]))

(def sessions [{}])


(defn session-toggle
  [{:keys [session-id app-meta]}]
  [:a.panel-block session-id])

(defn session-bar
  [app-sessions]
  [:div.panel
   [:p.panel-heading "Sessions"
    (for [{:keys [session-id] :as ses} app-sessions]
      ^{:key session-id} [session-toggle ses])]])

(defn app-canvas []
  [:div "App canvas"])

(defn app-shell []
  [:div.container.is-fluid
   [:div.level [:nav.level-left [session-bar sessions]]
    [:div.level-item [app-canvas]]]])

(defn app-fin-test []
  [:div
   [:button {:on-click #(of/version)} "OpenFinn Version"]
   [:button {:on-click #(of/dev-tools)} "Dev tools"]])

(defn app-modal [show-app]
  (prn "first app")
  (when @show-app
    [modal-panel  :child [app-menu/app-list]]))

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])
        show-app (re/atom false)]
    [:div [app-menu/app-menu show-app]
     [app-modal show-app]]))
;[app-fin-test]]))

