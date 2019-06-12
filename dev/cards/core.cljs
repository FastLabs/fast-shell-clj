(ns cards.core
  (:require-macros [devcards.core :refer [defcard]])
  (:require [reagent.core :as reagent]
            [devcards.core :as dc]
            [element.item-list :as list-el]))


(enable-console-print!)

(defcard app-list-card
         (let [click-handler (fn [app] (prn app))
               filter-handler (fn [val] (prn val))

               apps (map (fn [id] {:id (str "app-" id) :name (str "app-" id)})
                         (range 3))
               card [list-el/search-list apps filter-handler click-handler]]
           (reagent/as-element card)))


(defcard side-menu
         (let [items [{:name "App1"} {:name "App2"}]]
           (reagent/as-element [:aside.menu
                                [:ul.menu-list
                                 (for [{:keys [name]} items]
                                  ^{:key name} [:li [:a {:href "#" :on-click #(prn "some")} name]])]])))



(defcard tab-view-card
         (let [card [:div
                     [:h1 "This is your first dev-card!"]]]
           (reagent/as-element card)))

(defn app-header
  [visible? app-title]
  [:div {:style {:position :relative}}
   [:div {:style {:position :absolute}}
    [:span#progress-bar
     [:i.zmdi.zmdi-spinner.zmdi-hc-spin]]]
   [:div {:style {:position :relative :left 20}}
         [:span app-title]]])

(defcard app-progress
         (let [app-title "First Application"]
           (reagent/as-element
             [:div {:style {:border 0 :border-style "dashed"}}
              [app-header true app-title]])))

(dc/start-devcard-ui!)

;; remember to run lein figwheel and then browse to
;; http://localhost:3449/cards.html
