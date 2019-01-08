(ns fast-shell.test-runner
  (:require [figwheel.main.testing :refer [run-tests-async]]
            [app.core-test]
            [session.core-test]))

(prn "running all tests")

(defn -main [& args]
  (run-tests-async 5000))
