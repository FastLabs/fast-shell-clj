(ns fast-shell.core
  (:require [cljs.spec.alpha :as s]
            [session.core :as session]
            [app.core :as app]))

(s/def ::title string?)
(s/def ::status #{:ok :error :progress})

(s/def ::app-db (s/keys :req [::title
                              ::app/store
                              ::status
                              ::session/instances]))

(defonce default-db
  {::title              "Fast Shell Container"
   ::app/store          {::app/store-content {}
                         ::app/store-cfg     {::repo-app "app-repo"}}
   ::session/inst-count {}
   ::status :ok
   ::session/instances  {}})
