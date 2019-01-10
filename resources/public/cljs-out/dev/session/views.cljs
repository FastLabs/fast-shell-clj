(ns session.views
  (:require [re-frame.core :as rf]
            [session.core :as session]
            [util.dom-handlers :refer [on-click]]))

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