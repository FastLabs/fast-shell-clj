(ns fast-cards.core
  (:require [reagent.core :as reagent]
            [element.item-list :as list-el]
            [devcards.core :refer-macros [defcard]]))


(enable-console-print!)

(defcard app-list-card
         (let [click-handler (fn [app] (prn app))
               filter-handler (fn [val] (prn val))

               apps (map (fn [id] {:id (str "app-" id) :name (str "app-" id)})
                         (range 10))
               card [list-el/search-list apps filter-handler click-handler]]
           (reagent/as-element card)))


(defcard side-menu
         (let [items []]
           (reagent/as-element [:aside.menu
                                [:ul.menu-list
                                 [:li [:a {:href "#"} "App1"]]
                                 [:li [:a {:href "#"} "App2"]]]])))


(defcard tab-view-card
         (let [card [:div
                     [:h1 "This is your first devcard!"]]]
           (reagent/as-element card)))

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
