(ns ochr.views
  (:require
   [re-frame.core :as re-frame]
   [re-com.core :as re-com]
   [ochr.events :as events]
   [ochr.subs :as subs]
   ))


;; home

(defn home-title []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :label (str "Hello from " @name ". This is the Home Page.")
     :level :level1]))

(defn link-to-about-page []
  [re-com/hyperlink-href
   :label "go to About Page"
   :href "#/about"])

(defn home-panel []
  (let [result (re-frame/subscribe [::subs/http-result])] 
    [re-com/v-box
    :gap "1em"
    :children [[home-title]
               [:input {:type "file" 
                        :id "file" 
                        :name "file" 
                        :on-change #(re-frame/dispatch [::events/upload (-> % .-target .-files (aget 0))])}]

               [link-to-about-page]
               [re-com/label :label result ]]]))

(defn http-result []
  (let [name (re-frame/subscribe [::subs/name])]
    [re-com/title
     :label (str"Hello from " @name ". This is the Home Page.")
     :level :level1]))


;; about

(defn about-title []
  [re-com/title
   :label "This is the About Page."
   :level :level1])

(defn link-to-home-page []
  [re-com/hyperlink-href
   :label "go to Home Page"
   :href "#/"])

(defn about-panel []
  [re-com/v-box
   :gap "1em"
   :children [[about-title]
              [link-to-home-page]]])


;; main

(defn- panels [panel-name]
  (case panel-name
    :home-panel [home-panel]
    :about-panel [about-panel]
    [:div]))

(defn show-panel [panel-name]
  [panels panel-name])

(defn main-panel []
  (let [active-panel (re-frame/subscribe [::subs/active-panel])]
    [re-com/v-box
     :height "100%"
     :children [[panels @active-panel]]]))
