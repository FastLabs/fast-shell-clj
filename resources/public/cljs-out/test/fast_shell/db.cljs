(ns fast-shell.db
  (:require [cljs.spec.alpha :as s]
            [session.core :as session]
            [app.core :as app]))

(s/def ::name string?)

(s/def ::shell-db (s/keys :req [::name
                                ::app/store
                                ::session/instances]))
(def default-db
  {::name              "Fast Shell Container"
   ::app/store         {::app/store-content {}
                        ::app/store-cfg     {}}
   ::session/inst-count {}
   ::session/instances {}})
