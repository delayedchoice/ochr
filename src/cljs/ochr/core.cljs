(ns ochr.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [ochr.events :as events]
   [ochr.routes :as routes]
   [ochr.views :as views]
   [ochr.config :as config]
   [day8.re-frame.http-fx] 
   ))


(defn dev-setup []
  (when config/debug?
    (enable-console-print!)
    (println "dev mode")))

(defn mount-root []
  (re-frame/clear-subscription-cache!)
  (reagent/render [views/main-panel]
                  (.getElementById js/document "app")))

(defn ^:export init []
  (routes/app-routes)
  (re-frame/dispatch-sync [::events/initialize-db])
  (dev-setup)
  (mount-root))
