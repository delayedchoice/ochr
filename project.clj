(defproject ochr "0.1.0-SNAPSHOT"
  :dependencies [[org.clojure/clojure "1.10.1"]
                 [org.clojure/clojurescript "1.10.520"]
                 [reagent "0.8.1"]
                 [re-frame "0.10.6"]
                 [re-com "2.5.0"]
                 [secretary "1.2.3"]
                 [garden "1.3.9"]
                 [ns-tracker "0.4.0"]
                 [compojure "1.6.1"]
                 [yogthos/config "1.1.2"]
                 [ring "1.7.1"]
                 [net.sourceforge.tess4j/tess4j "4.3.1"]
                 [com.sun.xml.ws/jaxws-rt "2.3.1"] 
                 [liberator "0.15.1"]
                 [compojure "1.6.0"]
                 [ring/ring-core "1.6.3"]
                 [day8.re-frame/http-fx "0.1.6"]
                 ]
  :repl-options {:init-ns ochr.core}
  ;:ring {:handler ochr.core/handler}
  :plugins [[lein-ring "0.12.2"]
            [lein-cljsbuild "1.1.7"]
            [lein-garden "0.2.8"]]

  :min-lein-version "2.5.3"

  :source-paths ["src/clj" "src/cljs"]

  :clean-targets ^{:protect false} ["resources/public/js/compiled" "target"
                                    "test/js"
                                    "resources/public/css"]

  :figwheel {:css-dirs ["resources/public/css"]
             :ring-handler ochr.core/handler}

  :garden {:builds [{:id           "screen"
                     :source-paths ["src/clj"]
                     :stylesheet   ochr.css/screen
                     :compiler     {:output-to     "resources/public/css/screen.css"
                                    :pretty-print? true}}]}

  :profiles
  {:dev
   {:dependencies [[binaryage/devtools "0.9.10"]
                   [day8.re-frame/re-frame-10x "0.4.0"]
                   [day8.re-frame/tracing "0.5.1"]]

    :plugins      [[lein-figwheel "0.5.18"]
                   [lein-doo "0.1.8"]]}
   :prod { :dependencies [[day8.re-frame/tracing-stubs "0.5.1"]]}
   :uberjar {:source-paths ["env/prod/clj"]
             :dependencies [[day8.re-frame/tracing-stubs "0.5.1"]]
             :omit-source  true
             :main         ochr.server
             :aot          [ochr.server]
             :uberjar-name "ochr.jar"
             :prep-tasks   ["compile" ["cljsbuild" "once" "min"]["garden" "once"]]}
   }

  :cljsbuild
  {:builds
   [{:id           "dev"
     :source-paths ["src/cljs"]
     :figwheel     {:on-jsload "ochr.core/mount-root"
                    :open-urls [ "http://localhost:3449" ]}
     :compiler     {:main                 ochr.core
                    :output-to            "resources/public/js/compiled/app.js"
                    :output-dir           "resources/public/js/compiled/out"
                    :asset-path           "js/compiled/out"
                    :source-map-timestamp true
                    :preloads             [devtools.preload
                                           day8.re-frame-10x.preload]
                    :closure-defines      {"re_frame.trace.trace_enabled_QMARK_" true
                                           "day8.re_frame.tracing.trace_enabled_QMARK_" true}
                    :external-config      {:devtools/config {:features-to-install :all}}
                    }}

    {:id           "min"
     :source-paths ["src/cljs"]
     :jar true
     :compiler     {:main            ochr.core
                    :output-to       "resources/public/js/compiled/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}

    {:id           "test"
     :source-paths ["src/cljs" "test/cljs"]
     :compiler     {:main          ochr.runner
                    :output-to     "resources/public/js/compiled/test.js"
                    :output-dir    "resources/public/js/compiled/test/out"
                    :optimizations :none}}
    ]}
  )

;; never do this
    (require 'cemerick.pomegranate.aether)
    (cemerick.pomegranate.aether/register-wagon-factory!
     "http" #(org.apache.maven.wagon.providers.http.HttpWagon.))
