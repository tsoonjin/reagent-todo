(ns todo.ui.view
  (:require [reagent.core :as r]))

(defn todo-input [add-fn]
  (let [input-text (r/atom "")
        update-text #(reset! input-text %)
        stop #(reset! input-text "")
        save #(do (add-fn @input-text) (stop))
        key-pressed #(case % "Enter" (save) "Esc" (stop) "Escape" (stop) nil)]
    (fn []
      [:input {:class "new-todo"
               :placeholder "Add todo"
               :type "text"
               :value @input-text
               :on-blur save
               :on-change #(update-text (.. % -target -value))
               :on-key-down #(key-pressed (.. % -key))}]
      )
    ))

(defn task-entry
  [add-fn]
  [:header.header
  [:h1 "todos"]
  [todo-input add-fn]])

(defn todo-item [{:keys [title]}]
  [:li
   [:div.view
    [:label title]]]
)

(defn task-list [todos]
  (let [items (vals @todos)]
  [:section.main
   [:ul.todo-list
    (for [todo items]
     ^{:key (:id todo)} [todo-item todo])]]
  ))

(defn footer-controls []
  [:footer.footer
   [:div "Footer controls"]])

