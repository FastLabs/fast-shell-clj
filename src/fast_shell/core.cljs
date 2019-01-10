(ns fast-shell.core
  (:require [cljs.spec.alpha :as s]
            [session.core :as session]
            [app.core :as app]))

(s/def ::title string?)

(s/def ::app-db (s/keys :req [::title
                              ::app/store
                              ::session/instances]))
(def default-db
  {::title              "Fast Shell Container"
   ::app/auto-start     #{"app-repo"}
   ::app/always-running #{"app-repo"}
   ::app/store          {::app/store-content {}
                         ::app/store-cfg     {}}
   ::session/inst-count {}
   ::session/instances  {}})
