(ns fast-shell.subs
  (:require [re-frame.core :as re-frame]
            [fast-shell.db :as app-db]
            [session.core :as ses]))

(re-frame/reg-sub
 ::name
 (fn [db]
   (::app-db/name db)))

(re-frame/reg-sub
  ::sessions
  (fn [{:keys [::ses/instances] :as db}]
    instances))

