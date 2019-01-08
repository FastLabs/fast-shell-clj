(ns element.text)

(defn search-box
  [& {:keys [placeholder on-change]}]
  (let [input-attr {:type        :text
                    :placeholder (if placeholder placeholder "Search")
                    :on-change   (fn [ev] (.stopPropagation ev)
                                   (on-change (.-value (.-target ev))))}]
    [:p.control.has-icons-left
     [:input.input.is-small input-attr]
     [:span.icon.is-small.is-left
      [:i.fas.fa-search {:aria-hidden true}]]]))
