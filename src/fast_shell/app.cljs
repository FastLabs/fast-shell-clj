(ns ^:figwheel-hooks fast-shell.app
  (:require
    [re-frame.core :as rf]
    [app.core :as app]
    [app.events]
    [app.subs]
    [session.events]
    [session.subs]
    [goog.dom :as gdom]
    [fast-shell.core :as shell]
    [fast-shell.views :as views]
    [fast-shell.event-bus :as event-bus]
    [app.server.core :as server]
    [fast-shell.subs]
    [fast-shell.events]
    [nav.core]
    [fast-shell.config :as config]
    [reagent.core :as reagent]))

(config/is-dev-mode?)

(defn init-app-repo
  []
  (rf/dispatch [::shell/initialize-db]))

(defn mount [el]
  (reagent/render-component [views/container-view] el))

(defn ^:after-load mount-app-element []
  (when-let [el (gdom/getElement "app")]
    (event-bus/listen-events)
    (mount el)
    (init-app-repo)))


(defn ^:export init []
  (prn "Application loaded")
  (mount-app-element))
