(ns element.app-menu)

(defn app-menu [show-modal]
  [:aside.minileftbar {:id "minileftbar"}
   [:ul.menu_list
    [:li
     [:a.bars {}]
     [:a.navbar-brand {:href "#"} [:img {:src "images/logo.svg" :alt "Fast Shell"}]]]
    [:li
     [:a.btn_overlay.hidden-sm-down {:href "#"
                                     :on-click #(swap! show-modal not)}
      [:i.zmdi.zmdi-search]]]]])

(defn app-list
  []
  [:div
   [:button.btn.btn-primary.btn-icon.btn-icon-mini.btn-round
    [:i]]
   [:div.container]])

