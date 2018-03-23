(ns fast-shell.repl-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [app.core-test]
            [session.core-test]))


(defn run-all []
  (prn "running all tests")
  (run-tests 'app.core-test
             'session.core-test))


(defn ^:export init []
  (enable-console-print!)
  (run-all))



