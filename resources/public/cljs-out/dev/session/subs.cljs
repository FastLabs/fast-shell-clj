(ns session.subs
  (:require [re-frame.core :as rf]
            [app.core :as app]
            [session.core :as session]))

(defn- session-app-meta
  [db session]
  (get-in db [::app/store ::app/store-content (session/app-id session)]))

(defn- session-active
  [{:keys [::session/active]} session]
  (= (::session/id session) active))

(rf/reg-sub
  ::session/app-sessions
  (fn [{:keys [::session/instances] :as db} _]
    (->> (vals instances)
         (map (fn [s-inst]
                [s-inst (session-app-meta db s-inst) (session-active db s-inst)])))))