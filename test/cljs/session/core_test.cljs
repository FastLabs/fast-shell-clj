(ns session.core-test
  (:require [cljs.test :refer-macros [testing deftest is]]
            [cljs.spec.alpha :as s]
            [fast-shell.db :as db]
            [app.core :as app]
            [session.core :as ses]))

(deftest new-session-management
  (let [app-meta (app/new-app-meta "app-1" "simple app")
        db (-> db/default-db
               (app/add-new-meta app-meta)
               (app/add-new-meta (app/new-app-meta "app-2" "second app")))]
    (prn db)
    (testing "create new session"
      (let [db' (ses/add-new-session db "app-1")
            {:keys [::ses/instances ::ses/inst-count]} db']
        (prn instances)
        (is (contains? instances ["app-1" 1]))
        (is (= (get inst-count "app-1") 1))
        (is (= instances {[ "app-1" 1] {::ses/id ["app-1" 1] ::ses/title "simple app"}}))))

    '(testing "more than one session for same app"
       (let [db' (-> db
                     (ses/add-new-session "app-1")
                     (ses/add-new-session "app-1"))
             {:keys [::ses/instances]} db']
         (is (contains? instances "app-1"))
         (let [{:keys [::ses/inst-count ::ses/all-inst]} (get instances "app-1")]
           (is (= inst-count 2))
           (is (= all-inst {[1 "app-1"] {::ses/id [1 "app-1"]}
                            [2 "app-1"] {::ses/id [2 "app-1"]}})))))
    '(testing "2 sessions of different apps"
       (let [db' (-> db
                     (ses/add-new-session "app-1")
                     (ses/add-new-session "app-2"))
             {:keys [::ses/instances]} db']
         (is (contains? instances "app-1"))
         (is (contains? instances "app-2"))
         (let [app-1 (get instances "app-1")
               app-2 (get instances "app-2")]
           (is (= 1 (get app-1 ::ses/inst-count)))
           (is (= 1 (get app-2 ::ses/inst-count)))
           (is (= (get app-1 ::ses/all-inst)
                  {[1 "app-1"] {::ses/id [1 "app-1"]}}))
           (is (= (get app-2 ::ses/all-inst)
                  {[1 "app-2"] {::ses/id [1 "app-2"]}})))))

    '(testing "destroy session -> the only available session"
       (let [db' (-> db
                     (ses/add-new-session "app-1")
                     (ses/add-new-session "app-2"))
             {:keys [::ses/instances]} (ses/destroy-session db' [1 "app-1"])]
         (is (empty? (get-in instances ["app-1" ::ses/all-inst])))))

    '(testing "destroy session -> a session from multiple"
       (let [db' (-> db
                     (ses/add-new-session "app-1")
                     (ses/add-new-session "app-1"))
             {:keys [::ses/instances]} (ses/destroy-session db' [1 "app-1"])]
         (is (nil? (get-in instances ["app-1" ::ses/all-inst [1 "app-1"]])))
         (is (not (nil? (get-in instances ["app-1" ::ses/all-inst [2 "app-1"]]))))))))

'(deftest session-lookup
   (let [db (-> db/default-db
                (app/add-new-meta (app/new-app-meta "app-1" "first app"))
                (app/add-new-meta (app/new-app-meta "app-2" "second app")))]
     (testing "find session by application id"
       (let [db' (ses/add-new-session db "app-1")]
         (is (contains? (ses/app-sessions db' "app-1") [1 "app-1"]))
         (is (not (contains? (ses/app-sessions db' "app-2") [1 "app-2"])))))))

'(deftest session-view-query
   (let [db (-> db/default-db
              (app/add-new-meta (app/new-app-meta "app-1" "first"))
              (app/add-new-meta (app/new-app-meta "app-2" "second")))]
     (testing "select session information for view: 2 applications 1 instance each"
       (let [db' (-> db
                     (ses/add-new-session "app-1")
                     (ses/add-new-session "app-2"))]
         (let [session-views (ses/sessions-view db')]
           (is (= 2 (count session-views)))
           (is (= [{::app/id "app-1" ::app/name "first"} {::ses/id [1 "app-1"]}] (first session-views)))
           (is (= [{::app/id "app-2" ::app/name "second"} {::ses/id [1 "app-2"]}] (second session-views))))))

     (testing "select session information for view: more than one instance "
       (let [db' (-> db
                     (ses/add-new-session "app-1")
                     (ses/add-new-session "app-2")
                     (ses/add-new-session "app-1"))
             session-views (ses/sessions-view db')]
         (is (= 2  (count session-views)))
         (let [[app-1-sessions app-2-sessions] session-views]
           (prn app-1-sessions)
           (prn "-------------")
           (prn app-2-sessions))))))





