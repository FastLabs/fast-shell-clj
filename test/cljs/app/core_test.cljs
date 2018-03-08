(ns app.core-test
  (:require [app.core :as app]
            [cljs.test :refer-macros [deftest testing is]]
            [cljs.spec.alpha :as s]))

(deftest app-meta-test
  (testing "mandatory application fields"
    (is (s/valid? ::app/meta (app/new-app "ap1" "hello world"))))
  (testing "one more test"
    (is (= 1 1))))

(deftest app-simple-test
  (testing "simple test"
    (is true)))
