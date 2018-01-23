(ns fast-shell.views
  (:require [re-frame.core :as re-frame]
            [fast-shell.subs :as subs]))


(defn main-panel []
  (let [name (re-frame/subscribe [::subs/name])]
    [:div "Hello from " @name]))
