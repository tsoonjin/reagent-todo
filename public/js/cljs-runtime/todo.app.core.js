goog.provide('todo.app.core');
todo.app.core.init_todos = new cljs.core.PersistentArrayMap(null, 2, [(2),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(2),new cljs.core.Keyword(null,"title","title",636505583),"Clean cpu",new cljs.core.Keyword(null,"done","done",-889844188),false], null),(1),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),(1),new cljs.core.Keyword(null,"title","title",636505583),"Do homework",new cljs.core.Keyword(null,"done","done",-889844188),false], null)], null);
todo.app.core.init_todos_sorted = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),todo.app.core.init_todos);
if((typeof todo !== 'undefined') && (typeof todo.app !== 'undefined') && (typeof todo.app.core !== 'undefined') && (typeof todo.app.core.todos !== 'undefined')){
} else {
todo.app.core.todos = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(todo.app.core.init_todos_sorted);
}
if((typeof todo !== 'undefined') && (typeof todo.app !== 'undefined') && (typeof todo.app.core !== 'undefined') && (typeof todo.app.core.todo_id !== 'undefined')){
} else {
todo.app.core.todo_id = reagent.core.atom.cljs$core$IFn$_invoke$arity$1((3));
}
cljs.core.add_watch(todo.app.core.todos,new cljs.core.Keyword(null,"todos","todos",630308868),(function (key,_atom,_old_state,new_state){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["---",key,"atom changed ---"], 0));

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_state], 0));
}));
todo.app.core.add_todo = (function todo$app$core$add_todo(text){
var id = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(todo.app.core.todo_id,cljs.core.inc);
var new_todo = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"title","title",636505583),text,new cljs.core.Keyword(null,"done","done",-889844188),false], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(todo.app.core.todos,cljs.core.assoc,id,new_todo);
});
todo.app.core.delete_todo = (function todo$app$core$delete_todo(id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(todo.app.core.todos,cljs.core.dissoc,id);
});
todo.app.core.app = (function todo$app$core$app(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.todoapp","section.todoapp",61469282),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.ui.view.task_entry,todo.app.core.add_todo,todo.app.core.delete_todo], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.ui.view.task_list,todo.app.core.todos,todo.app.core.delete_todo], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.ui.view.footer_controls], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.info","footer.info",-868940546),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Copyright 2022"], null)], null)], null);
});
todo.app.core.render = (function todo$app$core$render(){
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.app.core.app], null),document.getElementById("root"));
});
todo.app.core.main = (function todo$app$core$main(){
return todo.app.core.render();
});
goog.exportSymbol('todo.app.core.main', todo.app.core.main);
todo.app.core.reload_BANG_ = (function todo$app$core$reload_BANG_(){
return todo.app.core.render();
});

//# sourceMappingURL=todo.app.core.js.map
