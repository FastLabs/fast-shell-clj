(ns session.core-test
  (:require [cljs.test :refer-macros [testing deftest is]]
            [cljs.spec.alpha :as s]
            [app.core :as app]
            [session.core :as ses]))

(deftest session-actions
 (let [app-meta (app/new-app-meta "app-1" "hello world")]
   (testing "create new session"
     (let [app-session (ses/new-session 1 app-meta)]
       (is (s/valid? ::ses/session app-session))
       (is (= {::ses/id [1 "app-1"]} app-session))))

   (testing "find app sessions"
     (let [sessions [(ses/new-session 1 app-meta)
                     (ses/new-session 2 (app/new-app-meta "app-2" "good buy"))]
           found (ses/scan-sessions sessions app-meta)]
       (is (= 1 (count found)))
       (is (= [1 "app-1"] (::ses/id (first found))))))

   (testing "start first session"
     (let [sessions-before {::ses/inst-count 0
                            ::ses/all-inst   []}
           sessions-after (ses/start-session sessions-before app-meta)]
       (is (s/valid? ::ses/sessions sessions-before))
       (is (s/valid? ::ses/sessions sessions-after))
       (is (= {::ses/inst-count 1
               ::ses/all-inst [{::ses/id [1 "app-1"]}]}))))

   (testing "start second session when first active"
     (let [{:keys [::ses/id] :as session} (ses/new-session 1 app-meta)
           s-map {::ses/inst-count 1
                  ::ses/all-inst   [session]}]
       (is (s/valid? ::ses/sessions s-map))
       (let [{:keys [::ses/all-inst]} (ses/start-session s-map app-meta)]
         (is (= 2 (count (ses/scan-sessions all-inst app-meta)))))))

   (testing "disable current active session"
    (let [session-1 {::ses/id [1 "app-1"]}
          session-2 {::ses/id [2 "app-1"]}
          session-3 {::ses/id [3 "app-1"]}
          sessions {::ses/inst-count 3
                    ::ses/all-inst [session-1 session-2 session-3]}
          less-1 (ses/destroy-session sessions [1 "app-1"])]
      (is (s/valid? ::ses/sessions sessions))
      (is (s/valid? ::ses/sessions less-1))))))


;;TODO: this is redundant for session management, view manager should be aware of how the sessions are rendered
(deftest close-tab-test
  (testing "second tab is active and not more tabs to the left"
    (let [tabs [{::ses/id 1}
                {::ses/id 2 ::ses/active? true}]]
      (is (= [{::ses/id 2 ::ses/active? true}]
             (ses/close-by-id tabs 1)))))

  (testing "close the only tab"
    (let [tabs [{::ses/id 1 ::ses/active? true}]]
      (is (empty? (ses/close-by-id tabs 1)))))

  (testing "close fist tab which is active"
    (let [tabs [{::ses/id 1 ::ses/active? true}
                {::ses/id 2}]]
      (is (= [{::ses/id 2 ::ses/active? true}]
             (ses/close-by-id tabs 1)))))

  (testing "close last tab when active"
    (let [tabs [{::ses/id 1}
                {::ses/id 2 ::ses/active? true}]]
      (is (= [{::ses/id 1 ::ses/active? true}]
             (ses/close-by-id tabs 2)))))

  (testing "close active tab in the middle"
    (let [tabs [{::ses/id 1}
                {::ses/id 2 ::ses/active? true}
                {::ses/id 3}]]
      (is (= [{::ses/id 1}
              {::ses/id 3 ::ses/active? true}]
             (ses/close-by-id tabs 2)))))

  (testing "more than 2 tabs on right"
    (let [tabs [{::ses/id 1}
                {::ses/id 2 ::ses/active? true}
                {::ses/id 3}
                {::ses/id 4}]]
      (is (= [{::ses/id 1}
              {::ses/id 3 ::ses/active? true}
              {::ses/id 4}]
             (ses/close-by-id tabs 2))))))




