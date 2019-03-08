(ns app-server.core
  (:require [compojure.core :refer [defroutes GET context]]
            [ring.middleware.defaults :refer [wrap-defaults api-defaults]]
            [ring.util.response :refer [response]]
            [ring.middleware.format :refer [wrap-restful-format]]))

(defn all-apps
  []
  [{:app-id "app-1"} {:app-id "app-2"} {:app-id "app-3"}])


(defroutes handler
  (->
    (context "/api/v1" []
      (GET "/apps" [] (response (all-apps)))
      (GET "/app/:app-id" [app-id] (response {:app-id (str "app->" app-id)})))
    (wrap-defaults api-defaults)
    wrap-restful-format))
