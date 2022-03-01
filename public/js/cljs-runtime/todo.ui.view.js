goog.provide('todo.ui.view');
todo.ui.view.todo_input = (function todo$ui$view$todo_input(add_fn){
var input_text = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var update_text = (function (p1__28099_SHARP_){
return cljs.core.reset_BANG_(input_text,p1__28099_SHARP_);
});
var stop = (function (){
return cljs.core.reset_BANG_(input_text,"");
});
var save = (function (){
var trimmed_text = clojure.string.trim(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(input_text)));
if((!(cljs.core.empty_QMARK_(trimmed_text)))){
(add_fn.cljs$core$IFn$_invoke$arity$1 ? add_fn.cljs$core$IFn$_invoke$arity$1(trimmed_text) : add_fn.call(null,trimmed_text));
} else {
}

return stop();
});
var key_pressed = (function (p1__28100_SHARP_){
var G__28103 = p1__28100_SHARP_;
switch (G__28103) {
case "Enter":
return save();

break;
case "Esc":
return stop();

break;
case "Escape":
return stop();

break;
default:
return null;

}
});
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"class","class",-2030961996),"new-todo",new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Add todo",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(input_text),new cljs.core.Keyword(null,"on-blur","on-blur",814300747),save,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__28101_SHARP_){
return update_text(p1__28101_SHARP_.target.value);
}),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (p1__28102_SHARP_){
return key_pressed(p1__28102_SHARP_.key);
})], null)], null);
});
});
todo.ui.view.task_entry = (function todo$ui$view$task_entry(add_fn){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"header.header","header.header",1073294241),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"todos"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.ui.view.todo_input,add_fn], null)], null);
});
todo.ui.view.todo_item = (function todo$ui$view$todo_item(todo__$1,delete_fn){
var map__28104 = todo__$1;
var map__28104__$1 = (((((!((map__28104 == null))))?(((((map__28104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__28104):map__28104);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28104__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28104__$1,new cljs.core.Keyword(null,"title","title",636505583));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.view","div.view",-1680900976),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.destroy","button.destroy",1044866871),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return (delete_fn.cljs$core$IFn$_invoke$arity$1 ? delete_fn.cljs$core$IFn$_invoke$arity$1(id) : delete_fn.call(null,id));
})], null)], null)], null)], null);
});
todo.ui.view.task_list = (function todo$ui$view$task_list(todos,delete_fn){
var items = cljs.core.vals(cljs.core.deref(todos));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"section.main","section.main",548517124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.todo-list","ul.todo-list",461840379),(function (){var iter__4529__auto__ = (function todo$ui$view$task_list_$_iter__28106(s__28107){
return (new cljs.core.LazySeq(null,(function (){
var s__28107__$1 = s__28107;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__28107__$1);
if(temp__5735__auto__){
var s__28107__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28107__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__28107__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__28109 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__28108 = (0);
while(true){
if((i__28108 < size__4528__auto__)){
var todo__$1 = cljs.core._nth(c__4527__auto__,i__28108);
cljs.core.chunk_append(b__28109,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.ui.view.todo_item,todo__$1,delete_fn], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)));

var G__28111 = (i__28108 + (1));
i__28108 = G__28111;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28109),todo$ui$view$task_list_$_iter__28106(cljs.core.chunk_rest(s__28107__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28109),null);
}
} else {
var todo__$1 = cljs.core.first(s__28107__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [todo.ui.view.todo_item,todo__$1,delete_fn], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(todo__$1)], null)),todo$ui$view$task_list_$_iter__28106(cljs.core.rest(s__28107__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(items);
})()], null)], null);
});
todo.ui.view.footer_controls = (function todo$ui$view$footer_controls(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"footer.footer","footer.footer",1361475645),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Footer controls"], null)], null);
});

//# sourceMappingURL=todo.ui.view.js.map
