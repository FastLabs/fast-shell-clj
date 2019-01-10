(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [app.core-test] [fast-shell.db-test] [fast-shell.event-test] [session.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote app.core-test) (quote fast-shell.db-test) (quote fast-shell.event-test) (quote session.core-test))