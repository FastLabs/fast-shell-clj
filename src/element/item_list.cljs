(ns element.item-list
  (:require [element.text :as txt-el]))

(defn item-list [item {:keys [on-click]}]
  [:div (for [{:keys [id name] :as app} item]
          ^{:key (str "item-" id)} [:a.panel-block {:on-click #(on-click app)}
                                    [:span.panel-icon
                                     [:i.fas.fa-book {:aria-hidden true}]] name])])

(defn search-list [apps filter-handler click-handler]
  [:nav.panel
   [:p.panel-heading "Available applications"]
   [:div.panel-block
    [txt-el/search-box :on-change filter-handler]]
   [:p.panel-tabs
    [:a.is-active "all"]
    [:a "private"]]
   [item-list apps {:on-click click-handler}]
   [:div.panel-block (str "Total Items: " (count apps))]])  ;;TODO: make this nicer