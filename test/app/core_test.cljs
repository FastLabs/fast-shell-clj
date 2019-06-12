(ns app.core-test
  (:require [app.core :as app]
            [cljs.test :refer-macros [deftest testing is]]
            [cljs.spec.alpha :as s]
            [fast-shell.core :as db]))

(defn get-app-store-content [db]
  (get-in db [::app/store ::app/store-content]))

(deftest app-meta-test
  (let [app-meta (app/new-app-meta "app-1" "simple app")]
    (testing "mandatory application fields"
      (is (s/valid? ::app/meta app-meta)))

    (testing "save new app-meta in repository"
      (let [app-db (app/add-new-meta db/default-db [app-meta])
            store-content (get-app-store-content app-db)]
        (is (= 1 (count store-content)))
        (is (= app-meta (get store-content "app-1")))))

    (testing "save no app into repository"
      (let [db' (app/add-new-meta db/default-db [])]
        (is (= db' db/default-db))))

    (testing "save few app-meta into repository"
      (let [app-db (app/add-new-meta db/default-db
                                     [(app/new-app-meta "app-1" "simple app 1")
                                      (app/new-app-meta "app-2" "simple app 2")])
            store-content (get-app-store-content app-db)]
        (is (= 2 (count store-content)))
        (is (= {::app/id "app-1" ::app/name "simple app 1"} (app/find-by-id app-db "app-1")))
        (is (= {::app/id "app-2" ::app/name "simple app 2"} (app/find-by-id app-db "app-2")))))

    (testing "find application meta by id"
      (let [app-db (app/add-new-meta db/default-db [app-meta])
            found (app/find-by-id app-db "app-1")]
        (is (= found app-meta))))))
