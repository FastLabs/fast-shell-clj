(ns nav.core
  (:require [goog.events :as events]
            [goog.history.EventType :as EventType])
  (:import goog.history.Html5History))


(when (.isSupported Html5History)
      (let [h (Html5History.)]
        (prn "-> History Initialized")
        (events/listen h EventType/NAVIGATE #(prn (.-token %)))
        (doto h (.setEnabled true))))