(ns todo.app.core
  (:require
    [reagent.core :as r]
    [reagent.dom :as rdom]
    [todo.ui.view :as view]))

;; -- App State --
(def init-todos {
                 3 {:id 3, :title "Clean cpu", :done false}
                 1 {:id 1, :title "Do homework", :done false}
                 })

(def init-todos-sorted (into (sorted-map) init-todos))

(defonce todos (r/atom init-todos-sorted))
(defonce todo-id (r/atom 3))
(add-watch todos :todos
           (fn [key _atom _old-state new-state]
             (println "---" key "atom changed ---")
             (println new-state)))

(defn add-todo [text]
  (let [id (swap! todo-id inc)
        new-todo {:id todo-id, :title text, :done false}]
    (swap! todos assoc id new-todo)))

(defn app []
  [:div
   [:section.todoapp
    [view/task-entry add-todo]
    [:div
     [view/task-list todos]
     [view/footer-controls]]
    ]
   [:footer.info
    [:p "Copyright 2022"]]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
