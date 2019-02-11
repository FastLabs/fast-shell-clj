(ns ^:figwheel-hooks fast-shell.app
  (:require
    [re-frame.core :as rf]
    [app.core :as app]
    [app.events]
    [app.subs]
    [app-repo.events]
    [session.events]
    [session.subs]
    [goog.dom :as gdom]
    [fast-shell.core :as shell]
    [fast-shell.views :as views]
    [fast-shell.subs]
    [fast-shell.events]
    [fast-shell.config :as config]
    [reagent.core :as reagent]))

(config/is-dev-mode?)

(defn init-app-repo
  []
  (let [apps [{::app/id        "app-repo"
               ::app/name      "Application Repository"
               ::app/icon      "zmdi-search"
               ::app/render-fn views/app-repo-render-fn}
              {::app/id        "user-admin"
               ::app/name      "User Admin"
               ::app/icon      "zmdi-calendar"
               ::app/render-fn views/user-admin-render-fn}
              {::app/id        "remote-app"
               ::app/name      "Simple Remote App"
               ::app/icon      "zmdi-account-box-phone"
               ::app/location  "http://localhost:9500/apps/simpleapp.html"
               ::app/render-fn views/iframe-render-fn}]]
    (rf/dispatch-sync [::shell/initialize-db])
    (rf/dispatch-sync [:load-apps apps])
    (app/start-app "app-repo" false)))



(defn get-app-element []
  (gdom/getElement "app"))

(defn mount [el]
  (reagent/render-component [views/container-view] el))

(defn mount-app-element []
  (when-let [el (get-app-element)]
    (init-app-repo)
    (mount el)))

;; conditionally start your application based on the presence of an "app" element
;; this is particularly helpful for testing this ns without launching the app
(mount-app-element)

;; specify reload hook with ^;after-load metadata
(defn ^:after-load on-reload []
  (prn "Reload")
  (mount-app-element))
;; optionally touch your app-state to force rerendering depending on
;; your application
;; (swap! app-state update-in [:__figwheel_counter] inc)


