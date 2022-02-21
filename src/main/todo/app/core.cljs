(ns todo.app.core
  (:require
    [reagent.dom :as rdom]
    [todo.ui.view :as view]))

(defn app []
  [:div
   [:section.todoapp
    [view/task-entry]
    [:div
     [:div "Task List"]
     [:div "Footer control"]]
    ]
   [:footer.info
    [:p "Copyright 2022"]]])

(defn render []
  (rdom/render [app] (.getElementById js/document "root")))

(defn ^:export main []
  (render))

(defn ^:dev/after-load reload! []
  (render))
