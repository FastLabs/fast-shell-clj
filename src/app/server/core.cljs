(ns app.server.core
  (:require [re-frame.core :as rf]
            [fast-shell.views :as views]
            [app-repo.views :as app-repo-view]
            [user-admin.views :as user-admin-view]
            [app.core :as app]
            [app.events :as app-event]))

(def local-apps [
                 {::app/id        "app-repo"
                  ::app/name      "Application Repository"
                  ::app/icon      "zmdi-search"
                  ::app/launcher  {::app/render-fn app-repo-view/app-repo-render-fn}
                  ::app/options   {:closeable? false
                                   :startup-run? true}}

                 {::app/id        "user-admin"
                  ::app/name      "User Admin"
                  ::app/icon      "zmdi-calendar"
                  ::app/launcher {::app/render-fn user-admin-view/user-admin-render-fn}}])


(def remote-apps [{::app/id        "remote-app"
                   ::app/name      "Simple Remote App"
                   ::app/icon      "zmdi-account-box-phone"
                   ::app/launcher  {::app/location "http://localhost:9500/apps/simpleapp.html"}}])


(defn- prepare-remote-app
  [meta-app]
  (assoc-in  meta-app [::app/launcher ::app/render-fn] views/iframe-render-fn))

;;TODO this is not a server concern
(rf/reg-event-fx
  ::apps-requested
  (fn [{:keys [db]} _]
    (prn "App requested")
    (let [a (map prepare-remote-app remote-apps)]
      {:db db
       :dispatch [::app-event/new-meta (concat a local-apps)]})))
