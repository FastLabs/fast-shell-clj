(ns util.dom-handlers)

(defn on-text-change [on-change-handler]
  (fn [ev]
    (.preventDefault ev)
    (on-change-handler (-> ev .-target .-value))))

(defn on-click [on-click-handler]
  (fn [ev]
    (.preventDefault ev)
    (on-click-handler)))
