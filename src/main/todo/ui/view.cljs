(ns todo.ui.view
  (:require [reagent.core :as r] [clojure.string :as str]))

(defn todo-input [add-fn]
  (let [input-text (r/atom "")
        update-text #(reset! input-text %)
        stop #(reset! input-text "")
        save #(let [trimmed-text (-> @input-text str str/trim)] (if-not (empty? trimmed-text) (add-fn trimmed-text)) (stop))
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

(defn todo-item [todo delete-fn]
  (let [{:keys [id title]} todo]
    [:li
     [:div.view
      [:label title]
      [:button.destroy {:on-click #(delete-fn id)}]]]
    )
  )

(defn task-list [todos delete-fn]
  (let [items (vals @todos)]
  [:section.main
   [:ul.todo-list
    (for [todo items]
     ^{:key (:id todo)} [todo-item todo delete-fn])]]
  ))

(defn footer-controls []
  [:footer.footer
   [:div "Footer controls"]])

