(ns openfin.views
  (:require [openfin.core :as of]))

(defn app-fin-test []
  [:div
   [:button {:on-click #(of/version)} "OpenFinn Version"]
   [:button {:on-click #(of/dev-tools)} "Dev tools"]])