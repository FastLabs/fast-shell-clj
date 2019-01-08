(ns ^:figwheel-hooks fast-shell.app
  (:require
    [goog.dom :as gdom]
    [fast-shell.events :as events]
    [fast-shell.views :as views]
    [fast-shell.config :as config]
    [reagent.core :as reagent :refer [atom]]))

(config/is-dev-mode?)

(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (reagent/render-component [views/main-panel] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (prn "Reload 2")
  (mount-app-element))
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)


