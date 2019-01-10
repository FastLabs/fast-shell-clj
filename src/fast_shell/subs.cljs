(ns fast-shell.subs
  (:require [re-frame.core :as rf]
            [fast-shell.core :as shell]))


(rf/reg-sub
  ::shell/title
  (fn [db]
    (::shell/title db)))
