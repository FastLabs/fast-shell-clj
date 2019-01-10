(ns app.core-test
  (:require [app.core :as app]
            [fast-shell.core :as shell]
            [cljs.test :refer-macros [deftest testing is]]
            [cljs.spec.alpha :as s]
            [fast-shell.core :as db]))

(deftest app-meta-test
  (let [app-meta (app/new-app-meta "app-1" "simple app")]
    (testing "mandatory application fields"
      (is (s/valid? ::app/meta app-meta)))

    (testing "save new app-meta in repository"
      (let [app-db db/default-db
            app-db' (app/add-new-meta app-db app-meta)
            store-content (get-in app-db' [::app/store ::app/store-content])]
        (is (= 1 (count store-content)))))

    (testing "find application meta by id"
      (let [app-db (app/add-new-meta db/default-db app-meta)
            found (app/find-by-id app-db "app-1")]
        (is (= found app-meta))))))
