(ns fast-shell.core
  (:require [cljs.spec.alpha :as s]
            [session.core :as session]
            [app-store.core :as store]))

(s/def ::title string?)
(s/def ::status #{:ok :error :progress})

(s/def ::app-db (s/keys :req [::title
                              ::store/content
                              ::status
                              ::session/instances]))

(defonce default-db
  {::title              "Fast Shell Container1"
   ::store/content          {::store/apps {}
                             ::store/config     {::repo-app "app-repo"}}
   ::session/inst-count {}
   ::status :ok
   ::session/instances  {}})
