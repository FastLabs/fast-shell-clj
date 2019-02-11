(ns session.views
  (:require [re-frame.core :as rf]
            [session.core :as session]
            [app.core :as app]
            [re-frame.core :as rf]
            [util.dom-handlers :refer [on-click]]))


;TODO: remove this once the functionality is
(defn session-selector
  [sessions]
  [:ul
   (for [[{:keys [::session/id ::session/title]} _ selected?] sessions]
     ^{:key id} [:li {:style {:cursor      :pointer
                              :font-weight (if selected? :bold :normal)}}
                 [:div
                  [:span {:on-click (on-click #(rf/dispatch [:activate-session id]))} (str id " : " title)]
                  [:span {:style    {:margin-left 10}
                          :on-click (on-click #(rf/dispatch [:dispose-session id]))} "[close]"]]])])


(defn session-toggle
  [{:keys [::session/id]} {:keys [::app/icon] :as app-meta}]
  [:li
   [:a {:href     "#"
        :title    (::app/name app-meta)
        :on-click (on-click #(rf/dispatch [:activate-session id]))}
    [:i.zmdi {:class icon}]]])

(defn session-bar
  [session-specs]
  [:ul.menu_list
   (for [[session app-meta] session-specs]
     ^{:key (str "ses-toggle" (::session/id session))}
     [session-toggle session app-meta])])