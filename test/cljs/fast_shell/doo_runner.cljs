(ns fast-shell.doo-runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [app.core-test]
            [session.core-test]))

(prn "running all tests")
(doo-tests 'app.core-test
           'session.core-test)
