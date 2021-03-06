(defproject fast-shell-clj "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.0"]
                 [org.clojure/clojurescript "1.10.516"]
                 [reagent "0.8.1"]
                 [re-frame "0.10.6"]
                 [devcards "0.2.6"]]

  :min-lein-version "2.7.1"

  :aliases {"fig"       ["trampoline" "run" "-m" "figwheel.main"]
            "fig:build" ["trampoline" "run" "-m" "figwheel.main" "-b" "dev" "-r"]
            "fig:min"   ["run" "-m" "figwheel.main" "-O" "advanced" "-bo" "dev"]
            "fig:test"  ["run" "-m" "figwheel.main" "-co" "test.cljs.edn" "-m" fast-shell.test-runner]}

  :profiles {:dev {:dependencies  [[com.bhauman/figwheel-main "0.2.0"]
                                   [com.bhauman/rebel-readline-cljs "0.1.4"]
                                   [compojure "1.6.1"]
                                   [ring-middleware-format "0.7.4"]
                                   [day8.re-frame/re-frame-10x "0.3.7" :exclusions [org.clojure/clojurescript]]]
                   :source-file [dev]
                   :source-paths ["dev"]
                   :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"]}})
