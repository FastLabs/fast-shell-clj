(ns fast-shell.views
  (:require [re-frame.core :as re-frame]
            [fast-shell.subs :as subs]
            [openfin.core :as of]))

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

(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div [:div "Hello again from " @name]
     [app-fin-test]]))

