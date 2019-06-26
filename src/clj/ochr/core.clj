(ns ochr.core
  (:require [clojure.java.io :as io ]
            [liberator.core :refer [resource defresource]]
            [ring.middleware.params :refer [wrap-params]]
            [ring.middleware.multipart-params :refer [wrap-multipart-params]]
            [compojure.core :refer [defroutes ANY]])
  (:import [net.sourceforge.tess4j Tesseract]
           [javax.imageio ImageIO]
           [java.awt.image BufferedImage]
           [java.awt Color]))

(def posts (ref []))

(defn get-text-from-image []
  (.doOCR (Tesseract.) (io/file "resources/test-image.png")))

(defn convert-to-grayscale [image]
  (let [height (.getHeight image)
        width (.getWidth image)
        new-image (BufferedImage. height width BufferedImage/TYPE_BYTE_GRAY )]
    (doseq [i (range (.getHeight image))
            j (range (.getWidth imag))]
     (let [c (Color. (.getRGB image j i))
           r (int (* (.getRed c) 0.299))
           g (int (* (.getGreen c) 0.587))
           b (int (* (.getBlue c) 0.114))
           new-color-value (+ r g b)
           new-color (Color. new-color-value new-color-value  new-color-value)

           ]
       (.setRGB new-image (- height i 1) j (.getRGB new-color))))
    (ImageIO/write new-image "jpg" (io/file "grayscale.jpg"))
    new-image)
  
 )

(defroutes app
  (ANY "/ochr" []
       (resource
        :allowed-methods [:post]
        :available-media-types ["application/json"]
        :handle-created (fn [ctx] 
                          (let [_ (println (str "context-info-me: " (get-in ctx [:request])))
                                image (get-in ctx [:request :params "file" :tempfile])
                                tess (doto (Tesseract.)
                                           (.setDatapath  "/usr/local/Cellar/tesseract-lang/4.0.0/share/tessdata/")
                                           (.setLanguage "cym")) ] 
                            (hash-map :data (.doOCR tess (convert-to-grayscale (ImageIO/read image))))))
        )))

(def handler 
  (-> app 
      wrap-params
      wrap-multipart-params))
