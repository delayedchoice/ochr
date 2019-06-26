(ns ochr.events
  (:require
   [re-frame.core :as re-frame]
   [ochr.db :as db]
   [ajax.core :as ajax]
   [day8.re-frame.tracing :refer-macros [fn-traced defn-traced]]
   ))

(re-frame/reg-event-db
 ::initialize-db
 (fn-traced [_ _]
   db/default-db))

(re-frame/reg-event-db
 ::set-active-panel
 (fn-traced [db [_ active-panel]]
   (assoc db :active-panel active-panel)))


(re-frame/reg-event-fx                             ;; note the trailing -fx
  ::upload                      ;; usage:  (dispatch [:handler-with-http])
  (fn [{:keys [db]} [_ file]]                    ;; the first param will be "world"
    (let [form-data (doto (js/FormData.)
                      (.append "id" "10")
                      (.append "file" file "filename.txt"))]
      {:db   (assoc db :show-twirly true)   ;; causes the twirly-waiting-dialog to show??
      :http-xhrio {:method          :post
                   :uri             "http://localhost:3449/ochr"
                   :timeout         80000                                           ;; optional see API docs
                   :body            form-data
                   :response-format (ajax/json-response-format {:keywords? true})  ;; IMPORTANT!: You must provide this.
                   :on-success      [::good-upload]
                   :on-failure      [::bad-upload]}})))


(re-frame/reg-event-db
  ::good-upload
  (fn [db [_ result]]
    (assoc db :http-result result)))

(re-frame/reg-event-db
  ::bad-upload
  (fn [db [_ result]]
    (assoc db :http-result result)))

