(ns fast-shell.db-test
  (:require [app.core :as app]
            [fast-shell.db :as shell]
            [cljs.test :refer-macros [deftest testing is]]
            [cljs.spec.alpha :as s]))


'(deftest shell-db-test
   (testing "application database initialization"
     (is (s/valid? ::shell/shell-db shell/default-db))))



