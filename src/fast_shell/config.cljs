(ns fast-shell.config)

(def debug?
  ^boolean goog.DEBUG)

(defn is-dev-mode? []
  (when debug?
    (enable-console-print!)
    (println "Dev mode")))
