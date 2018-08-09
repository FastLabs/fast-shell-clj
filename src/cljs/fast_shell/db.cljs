(ns fast-shell.db
  (:require [cljs.spec.alpha :as s]
            [app.core :as app]))

(s/def ::shell-db (s/keys :req [::app/store]))


(def default-db
  {:name "Fast Shell Container"
   ::app/store {::app/store-content ()
                ::app/store-cfg {}}})
