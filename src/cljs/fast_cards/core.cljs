(ns fast-cards.core
  (:require [reagent.core :as reagent])
  (:require-macros
    [devcards.core :as dc :refer [defcard deftest]]))

(enable-console-print!)

(defcard first-card
         (reagent/render [:div
                          [:h1 "This is your first devcard!"]]))

(defn main []
  ;; conditionally start the app based on whether the #main-app-area
  ;; node is on the page
  (if-let [node (.getElementById js/document "main-app-area")]
    (reagent/render node [:div "This is working"])))

(main)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html