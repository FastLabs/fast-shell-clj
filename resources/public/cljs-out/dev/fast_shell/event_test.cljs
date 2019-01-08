(ns fast-shell.event-test
  (:require [clojure.test :refer-macros [deftest testing is]]
            [fast-shell.events :as ev]
            [app.core :as app]
            [fast-shell.db :as db]
            [re-frame.core :as re]))

(deftest app-meta-events
  (testing "register new application meta"
    (re/dispatch-sync [::ev/initialize-db])
    (re/dispatch [::ev/new-app-meta {::app/name "simple app"}])
    (is (= 1 1))))

(deftest app-session-events
  (test "creating new session"))


