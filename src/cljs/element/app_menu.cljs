(ns element.app-menu)

(defn- toggle-app-menu [state]
  (swap! state not))

(defn app-menu [show-modal]
  [:aside.minileftbar {:id "minileftbar"}
   [:ul.menu_list
    [:li
     [:a.bars {}]
     [:a.navbar-brand {:href "#"} [:img {:src "images/logo.svg" :alt "Fast Shell"}]]]
    [:li
     [:a.btn_overlay.hidden-sm-down {:href     "#"
                                     :on-click #(toggle-app-menu show-modal)}
      [:i.zmdi.zmdi-search]]]]])

(defn app-list
  [show-modal]
  [:div {:style {:width 800 :height 600}}
   [:button.btn.btn-primary.btn-icon.btn-icon-mini.btn-round.btn-opn.btn.close {:on-click #(toggle-app-menu show-modal)}
    [:i.zmdi.zmdi-close]]
   [:div.container
    [:div.row.clearfix
     [:div.card
      [:div.body
       [:div.input-group.mb-0
        [:input.form-control {:type :text :placeholder "Search"}]
        [:span.input-group-addon
         [:i.zmdi.zmdi-search]]]]]
     [:div.card.links
      [:div.body
       [:div.row
        [:div.col-lg-3.col-md-6.col-sm-12
         [:h6 "App"]
         [:ul.list-unstyled
          [:li [:a {:href "#" :on-click #(prn "Starting application")} "Inbox"]]]]]]]

     [:div.row.clearfix]]]])



