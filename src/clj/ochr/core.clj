(ns ochr.core
  (:require [clojure.java.io :as io ]
            [liberator.core :refer [resource defresource]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [compojure.core :refer [defroutes ANY]])
  (:import [net.sourceforge.tess4j Tesseract]
           [javax.imageio ImageIO]))

(def posts (ref []))

(defn get-text-from-image []
  (.doOCR (Tesseract.) (io/file "resources/test-image.png")))

(defroutes app
  (ANY "/ochr" []
       (resource
        :allowed-methods [:post]
        :available-media-types ["application/json"]
        :handle-created (fn [ctx] 
                          (let [_ (println (str "context-info-me: " (get-in ctx [:request])))
                                image (get-in ctx [:request :params "file" :tempfile])] 
                            (hash-map :data (.doOCR (Tesseract.) (ImageIO/read image)))))
        )))

(def handler 
  (-> app 
      wrap-params
      wrap-multipart-params))
