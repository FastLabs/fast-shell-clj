(defproject fast-shell-clj "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [cljsjs/react "15.3.1-0"]
                 [cljsjs/react-dom "15.3.1-0"]
                 [reagent "0.7.0"]
                 [re-frame "0.10.2"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj" "src/cljc"]
  :test-paths ["test/clj" "test/cljs"]

  :figwheel {:css-dirs   ["resources/public/css"]
             :nrepl-port 7888
             :repl       false}

  :profiles
  {:dev
              {:dependencies  [[binaryage/devtools "0.9.9"]
                               [lein-doo "0.1.8"]
                               [devcards "0.2.4"]
                               [figwheel-sidecar "0.5.15"]
                               [com.cemerick/piggieback "0.2.2"]]
               :plugins       [[lein-figwheel "0.5.15"]
                               [lein-cljsbuild "1.1.7" :exclusions [[org.clojure/clojure]]]
                               [lein-doo "0.1.8"]]
               :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]}

   :test-fig  [:dev]
   :dev-cards [:dev]}


  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "fast-shell.core/mount-root"}

     :compiler     {:main                 fast-shell.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :optimizations        :none
                    :preloads             [devtools.preload]
                    :external-config      {:devtools/config {:features-to-install :all}}}}

    {:id           "dev-cards"
     :source-paths ["src/cljs" "cards"]
     :figwheel     {:devcards    true
                    :open-urls   ["http://localhost:3449/cards.html"]}
     :compiler     {:main                 "fast-cards.core"
                    :asset-path           "js/compiled/devcards_out"
                    :output-to            "resources/public/js/compiled/dev_world_devcards.js"
                    :output-dir           "resources/public/js/compiled/devcards_out"
                    :source-map-timestamp true}}

    {:id           "test-fig"
     :source-paths ["src/cljs" "test/cljs"]
     :figwheel     {:on-jsload "fast-shell.repl-runner/run-all"}

     :compiler     {:main                 fast-shell.repl-runner
                    :output-to            "resources/public/js/compiled/alltests.js"
                    :output-dir           "resources/public/js/compiled/fig-test/out"
                    :asset-path           "js/compiled/fig-test/out"
                    :source-map-timestamp true
                    :optimizations        :none
                    :preloads             [devtools.preload]
                    :external-config      {:devtools/config {:features-to-install :all}}}}

    {:id           "test"
     :source-paths ["src/cljs" "test/cljs"]
     :compiler     {:output-to     "resources/public/js/compiled/test.js"
                    :output-dir    "resources/public/js/compiled/test/out"
                    :main          fast-shell.doo-runner
                    :optimizations :none}}


    {:id           "min"
     :source-paths ["src/cljs"]
     :compiler     {:main            fast-shell.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}]})
