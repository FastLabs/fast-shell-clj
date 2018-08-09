(ns fast-shell.repl-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [app.core-test]
            [fast-shell.db-test]
            [session.core-test]))


(defn run-all []
  (.clear js/console)
  (prn "Running all tests")
  (run-tests 'app.core-test
             'session.core-test
             'fast-shell.db-test))


(defn ^:export init []
  (enable-console-print!)
  (run-all))



