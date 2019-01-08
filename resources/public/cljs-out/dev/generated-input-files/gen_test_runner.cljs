(ns figwheel.main.generated.dev-auto-test-runner
  (:require [cljs.test :refer-macros [run-tests]]
            [cljs-test-display.core] [session.core-test] [fast-shell.event-test] [app.core-test]))

  (run-tests (cljs-test-display.core/init! "app-auto-testing") (quote session.core-test) (quote fast-shell.event-test) (quote app.core-test))