(ns fast-shell.runner
  (:require [doo.runner :refer-macros [doo-tests]]
            [app.core-test]))

(doo-tests 'app.core-test)
