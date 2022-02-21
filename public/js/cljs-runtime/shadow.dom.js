goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_36078 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_36078(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_36079 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_36079(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35247 = coll;
var G__35248 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35247,G__35248) : shadow.dom.lazy_native_coll_seq.call(null,G__35247,G__35248));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35274 = arguments.length;
switch (G__35274) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35279 = arguments.length;
switch (G__35279) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35283 = arguments.length;
switch (G__35283) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35289 = arguments.length;
switch (G__35289) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35304 = arguments.length;
switch (G__35304) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35312 = arguments.length;
switch (G__35312) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35322){if((e35322 instanceof Object)){
var e = e35322;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35322;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__35331 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__35332 = null;
var count__35333 = (0);
var i__35334 = (0);
while(true){
if((i__35334 < count__35333)){
var el = chunk__35332.cljs$core$IIndexed$_nth$arity$2(null,i__35334);
var handler_36091__$1 = ((function (seq__35331,chunk__35332,count__35333,i__35334,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35331,chunk__35332,count__35333,i__35334,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36091__$1);


var G__36092 = seq__35331;
var G__36093 = chunk__35332;
var G__36094 = count__35333;
var G__36095 = (i__35334 + (1));
seq__35331 = G__36092;
chunk__35332 = G__36093;
count__35333 = G__36094;
i__35334 = G__36095;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35331);
if(temp__5735__auto__){
var seq__35331__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35331__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35331__$1);
var G__36097 = cljs.core.chunk_rest(seq__35331__$1);
var G__36098 = c__4556__auto__;
var G__36099 = cljs.core.count(c__4556__auto__);
var G__36100 = (0);
seq__35331 = G__36097;
chunk__35332 = G__36098;
count__35333 = G__36099;
i__35334 = G__36100;
continue;
} else {
var el = cljs.core.first(seq__35331__$1);
var handler_36104__$1 = ((function (seq__35331,chunk__35332,count__35333,i__35334,el,seq__35331__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__35331,chunk__35332,count__35333,i__35334,el,seq__35331__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_36104__$1);


var G__36106 = cljs.core.next(seq__35331__$1);
var G__36107 = null;
var G__36108 = (0);
var G__36109 = (0);
seq__35331 = G__36106;
chunk__35332 = G__36107;
count__35333 = G__36108;
i__35334 = G__36109;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__35351 = arguments.length;
switch (G__35351) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__35364 = cljs.core.seq(events);
var chunk__35365 = null;
var count__35366 = (0);
var i__35367 = (0);
while(true){
if((i__35367 < count__35366)){
var vec__35379 = chunk__35365.cljs$core$IIndexed$_nth$arity$2(null,i__35367);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35379,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35379,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36118 = seq__35364;
var G__36119 = chunk__35365;
var G__36120 = count__35366;
var G__36121 = (i__35367 + (1));
seq__35364 = G__36118;
chunk__35365 = G__36119;
count__35366 = G__36120;
i__35367 = G__36121;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35364);
if(temp__5735__auto__){
var seq__35364__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35364__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35364__$1);
var G__36122 = cljs.core.chunk_rest(seq__35364__$1);
var G__36123 = c__4556__auto__;
var G__36124 = cljs.core.count(c__4556__auto__);
var G__36125 = (0);
seq__35364 = G__36122;
chunk__35365 = G__36123;
count__35366 = G__36124;
i__35367 = G__36125;
continue;
} else {
var vec__35383 = cljs.core.first(seq__35364__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35383,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35383,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__36126 = cljs.core.next(seq__35364__$1);
var G__36127 = null;
var G__36128 = (0);
var G__36129 = (0);
seq__35364 = G__36126;
chunk__35365 = G__36127;
count__35366 = G__36128;
i__35367 = G__36129;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__35387 = cljs.core.seq(styles);
var chunk__35388 = null;
var count__35389 = (0);
var i__35390 = (0);
while(true){
if((i__35390 < count__35389)){
var vec__35407 = chunk__35388.cljs$core$IIndexed$_nth$arity$2(null,i__35390);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35407,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35407,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36132 = seq__35387;
var G__36133 = chunk__35388;
var G__36134 = count__35389;
var G__36135 = (i__35390 + (1));
seq__35387 = G__36132;
chunk__35388 = G__36133;
count__35389 = G__36134;
i__35390 = G__36135;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35387);
if(temp__5735__auto__){
var seq__35387__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35387__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35387__$1);
var G__36137 = cljs.core.chunk_rest(seq__35387__$1);
var G__36138 = c__4556__auto__;
var G__36139 = cljs.core.count(c__4556__auto__);
var G__36140 = (0);
seq__35387 = G__36137;
chunk__35388 = G__36138;
count__35389 = G__36139;
i__35390 = G__36140;
continue;
} else {
var vec__35413 = cljs.core.first(seq__35387__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35413,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35413,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__36142 = cljs.core.next(seq__35387__$1);
var G__36143 = null;
var G__36144 = (0);
var G__36145 = (0);
seq__35387 = G__36142;
chunk__35388 = G__36143;
count__35389 = G__36144;
i__35390 = G__36145;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__35421_36146 = key;
var G__35421_36147__$1 = (((G__35421_36146 instanceof cljs.core.Keyword))?G__35421_36146.fqn:null);
switch (G__35421_36147__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_36153 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_36153,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_36153,"aria-");
}
})())){
el.setAttribute(ks_36153,value);
} else {
(el[ks_36153] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__35443){
var map__35444 = p__35443;
var map__35444__$1 = (((((!((map__35444 == null))))?(((((map__35444.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35444.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35444):map__35444);
var props = map__35444__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35444__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__35447 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35447,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35447,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35447,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__35450 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__35450,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__35450;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__35455 = arguments.length;
switch (G__35455) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__35466){
var vec__35468 = p__35466;
var seq__35469 = cljs.core.seq(vec__35468);
var first__35470 = cljs.core.first(seq__35469);
var seq__35469__$1 = cljs.core.next(seq__35469);
var nn = first__35470;
var first__35470__$1 = cljs.core.first(seq__35469__$1);
var seq__35469__$2 = cljs.core.next(seq__35469__$1);
var np = first__35470__$1;
var nc = seq__35469__$2;
var node = vec__35468;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35472 = nn;
var G__35473 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35472,G__35473) : create_fn.call(null,G__35472,G__35473));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__35475 = nn;
var G__35476 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__35475,G__35476) : create_fn.call(null,G__35475,G__35476));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__35478 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35478,(1),null);
var seq__35482_36168 = cljs.core.seq(node_children);
var chunk__35483_36169 = null;
var count__35484_36170 = (0);
var i__35485_36171 = (0);
while(true){
if((i__35485_36171 < count__35484_36170)){
var child_struct_36172 = chunk__35483_36169.cljs$core$IIndexed$_nth$arity$2(null,i__35485_36171);
var children_36173 = shadow.dom.dom_node(child_struct_36172);
if(cljs.core.seq_QMARK_(children_36173)){
var seq__35508_36174 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36173));
var chunk__35510_36175 = null;
var count__35511_36176 = (0);
var i__35512_36177 = (0);
while(true){
if((i__35512_36177 < count__35511_36176)){
var child_36178 = chunk__35510_36175.cljs$core$IIndexed$_nth$arity$2(null,i__35512_36177);
if(cljs.core.truth_(child_36178)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36178);


var G__36179 = seq__35508_36174;
var G__36180 = chunk__35510_36175;
var G__36181 = count__35511_36176;
var G__36182 = (i__35512_36177 + (1));
seq__35508_36174 = G__36179;
chunk__35510_36175 = G__36180;
count__35511_36176 = G__36181;
i__35512_36177 = G__36182;
continue;
} else {
var G__36184 = seq__35508_36174;
var G__36185 = chunk__35510_36175;
var G__36186 = count__35511_36176;
var G__36187 = (i__35512_36177 + (1));
seq__35508_36174 = G__36184;
chunk__35510_36175 = G__36185;
count__35511_36176 = G__36186;
i__35512_36177 = G__36187;
continue;
}
} else {
var temp__5735__auto___36188 = cljs.core.seq(seq__35508_36174);
if(temp__5735__auto___36188){
var seq__35508_36189__$1 = temp__5735__auto___36188;
if(cljs.core.chunked_seq_QMARK_(seq__35508_36189__$1)){
var c__4556__auto___36190 = cljs.core.chunk_first(seq__35508_36189__$1);
var G__36192 = cljs.core.chunk_rest(seq__35508_36189__$1);
var G__36193 = c__4556__auto___36190;
var G__36194 = cljs.core.count(c__4556__auto___36190);
var G__36195 = (0);
seq__35508_36174 = G__36192;
chunk__35510_36175 = G__36193;
count__35511_36176 = G__36194;
i__35512_36177 = G__36195;
continue;
} else {
var child_36196 = cljs.core.first(seq__35508_36189__$1);
if(cljs.core.truth_(child_36196)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36196);


var G__36198 = cljs.core.next(seq__35508_36189__$1);
var G__36199 = null;
var G__36200 = (0);
var G__36201 = (0);
seq__35508_36174 = G__36198;
chunk__35510_36175 = G__36199;
count__35511_36176 = G__36200;
i__35512_36177 = G__36201;
continue;
} else {
var G__36203 = cljs.core.next(seq__35508_36189__$1);
var G__36204 = null;
var G__36205 = (0);
var G__36206 = (0);
seq__35508_36174 = G__36203;
chunk__35510_36175 = G__36204;
count__35511_36176 = G__36205;
i__35512_36177 = G__36206;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36173);
}


var G__36207 = seq__35482_36168;
var G__36208 = chunk__35483_36169;
var G__36209 = count__35484_36170;
var G__36210 = (i__35485_36171 + (1));
seq__35482_36168 = G__36207;
chunk__35483_36169 = G__36208;
count__35484_36170 = G__36209;
i__35485_36171 = G__36210;
continue;
} else {
var temp__5735__auto___36211 = cljs.core.seq(seq__35482_36168);
if(temp__5735__auto___36211){
var seq__35482_36212__$1 = temp__5735__auto___36211;
if(cljs.core.chunked_seq_QMARK_(seq__35482_36212__$1)){
var c__4556__auto___36213 = cljs.core.chunk_first(seq__35482_36212__$1);
var G__36214 = cljs.core.chunk_rest(seq__35482_36212__$1);
var G__36215 = c__4556__auto___36213;
var G__36216 = cljs.core.count(c__4556__auto___36213);
var G__36217 = (0);
seq__35482_36168 = G__36214;
chunk__35483_36169 = G__36215;
count__35484_36170 = G__36216;
i__35485_36171 = G__36217;
continue;
} else {
var child_struct_36218 = cljs.core.first(seq__35482_36212__$1);
var children_36219 = shadow.dom.dom_node(child_struct_36218);
if(cljs.core.seq_QMARK_(children_36219)){
var seq__35523_36220 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_36219));
var chunk__35525_36221 = null;
var count__35526_36222 = (0);
var i__35527_36223 = (0);
while(true){
if((i__35527_36223 < count__35526_36222)){
var child_36224 = chunk__35525_36221.cljs$core$IIndexed$_nth$arity$2(null,i__35527_36223);
if(cljs.core.truth_(child_36224)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36224);


var G__36226 = seq__35523_36220;
var G__36227 = chunk__35525_36221;
var G__36228 = count__35526_36222;
var G__36229 = (i__35527_36223 + (1));
seq__35523_36220 = G__36226;
chunk__35525_36221 = G__36227;
count__35526_36222 = G__36228;
i__35527_36223 = G__36229;
continue;
} else {
var G__36230 = seq__35523_36220;
var G__36231 = chunk__35525_36221;
var G__36232 = count__35526_36222;
var G__36233 = (i__35527_36223 + (1));
seq__35523_36220 = G__36230;
chunk__35525_36221 = G__36231;
count__35526_36222 = G__36232;
i__35527_36223 = G__36233;
continue;
}
} else {
var temp__5735__auto___36234__$1 = cljs.core.seq(seq__35523_36220);
if(temp__5735__auto___36234__$1){
var seq__35523_36235__$1 = temp__5735__auto___36234__$1;
if(cljs.core.chunked_seq_QMARK_(seq__35523_36235__$1)){
var c__4556__auto___36236 = cljs.core.chunk_first(seq__35523_36235__$1);
var G__36237 = cljs.core.chunk_rest(seq__35523_36235__$1);
var G__36238 = c__4556__auto___36236;
var G__36239 = cljs.core.count(c__4556__auto___36236);
var G__36240 = (0);
seq__35523_36220 = G__36237;
chunk__35525_36221 = G__36238;
count__35526_36222 = G__36239;
i__35527_36223 = G__36240;
continue;
} else {
var child_36241 = cljs.core.first(seq__35523_36235__$1);
if(cljs.core.truth_(child_36241)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_36241);


var G__36242 = cljs.core.next(seq__35523_36235__$1);
var G__36243 = null;
var G__36244 = (0);
var G__36245 = (0);
seq__35523_36220 = G__36242;
chunk__35525_36221 = G__36243;
count__35526_36222 = G__36244;
i__35527_36223 = G__36245;
continue;
} else {
var G__36246 = cljs.core.next(seq__35523_36235__$1);
var G__36247 = null;
var G__36248 = (0);
var G__36249 = (0);
seq__35523_36220 = G__36246;
chunk__35525_36221 = G__36247;
count__35526_36222 = G__36248;
i__35527_36223 = G__36249;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_36219);
}


var G__36250 = cljs.core.next(seq__35482_36212__$1);
var G__36251 = null;
var G__36252 = (0);
var G__36253 = (0);
seq__35482_36168 = G__36250;
chunk__35483_36169 = G__36251;
count__35484_36170 = G__36252;
i__35485_36171 = G__36253;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__35551 = cljs.core.seq(node);
var chunk__35552 = null;
var count__35553 = (0);
var i__35554 = (0);
while(true){
if((i__35554 < count__35553)){
var n = chunk__35552.cljs$core$IIndexed$_nth$arity$2(null,i__35554);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36265 = seq__35551;
var G__36266 = chunk__35552;
var G__36267 = count__35553;
var G__36268 = (i__35554 + (1));
seq__35551 = G__36265;
chunk__35552 = G__36266;
count__35553 = G__36267;
i__35554 = G__36268;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35551);
if(temp__5735__auto__){
var seq__35551__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35551__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35551__$1);
var G__36273 = cljs.core.chunk_rest(seq__35551__$1);
var G__36274 = c__4556__auto__;
var G__36275 = cljs.core.count(c__4556__auto__);
var G__36276 = (0);
seq__35551 = G__36273;
chunk__35552 = G__36274;
count__35553 = G__36275;
i__35554 = G__36276;
continue;
} else {
var n = cljs.core.first(seq__35551__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__36279 = cljs.core.next(seq__35551__$1);
var G__36280 = null;
var G__36281 = (0);
var G__36282 = (0);
seq__35551 = G__36279;
chunk__35552 = G__36280;
count__35553 = G__36281;
i__35554 = G__36282;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__35568 = arguments.length;
switch (G__35568) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__35577 = arguments.length;
switch (G__35577) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__35590 = arguments.length;
switch (G__35590) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36311 = arguments.length;
var i__4737__auto___36312 = (0);
while(true){
if((i__4737__auto___36312 < len__4736__auto___36311)){
args__4742__auto__.push((arguments[i__4737__auto___36312]));

var G__36315 = (i__4737__auto___36312 + (1));
i__4737__auto___36312 = G__36315;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__35606_36317 = cljs.core.seq(nodes);
var chunk__35607_36318 = null;
var count__35608_36319 = (0);
var i__35609_36320 = (0);
while(true){
if((i__35609_36320 < count__35608_36319)){
var node_36321 = chunk__35607_36318.cljs$core$IIndexed$_nth$arity$2(null,i__35609_36320);
fragment.appendChild(shadow.dom._to_dom(node_36321));


var G__36322 = seq__35606_36317;
var G__36323 = chunk__35607_36318;
var G__36324 = count__35608_36319;
var G__36325 = (i__35609_36320 + (1));
seq__35606_36317 = G__36322;
chunk__35607_36318 = G__36323;
count__35608_36319 = G__36324;
i__35609_36320 = G__36325;
continue;
} else {
var temp__5735__auto___36329 = cljs.core.seq(seq__35606_36317);
if(temp__5735__auto___36329){
var seq__35606_36331__$1 = temp__5735__auto___36329;
if(cljs.core.chunked_seq_QMARK_(seq__35606_36331__$1)){
var c__4556__auto___36333 = cljs.core.chunk_first(seq__35606_36331__$1);
var G__36334 = cljs.core.chunk_rest(seq__35606_36331__$1);
var G__36335 = c__4556__auto___36333;
var G__36336 = cljs.core.count(c__4556__auto___36333);
var G__36337 = (0);
seq__35606_36317 = G__36334;
chunk__35607_36318 = G__36335;
count__35608_36319 = G__36336;
i__35609_36320 = G__36337;
continue;
} else {
var node_36341 = cljs.core.first(seq__35606_36331__$1);
fragment.appendChild(shadow.dom._to_dom(node_36341));


var G__36343 = cljs.core.next(seq__35606_36331__$1);
var G__36344 = null;
var G__36345 = (0);
var G__36346 = (0);
seq__35606_36317 = G__36343;
chunk__35607_36318 = G__36344;
count__35608_36319 = G__36345;
i__35609_36320 = G__36346;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq35603){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq35603));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__35619_36348 = cljs.core.seq(scripts);
var chunk__35620_36349 = null;
var count__35621_36350 = (0);
var i__35622_36351 = (0);
while(true){
if((i__35622_36351 < count__35621_36350)){
var vec__35630_36352 = chunk__35620_36349.cljs$core$IIndexed$_nth$arity$2(null,i__35622_36351);
var script_tag_36353 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630_36352,(0),null);
var script_body_36354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35630_36352,(1),null);
eval(script_body_36354);


var G__36359 = seq__35619_36348;
var G__36360 = chunk__35620_36349;
var G__36361 = count__35621_36350;
var G__36362 = (i__35622_36351 + (1));
seq__35619_36348 = G__36359;
chunk__35620_36349 = G__36360;
count__35621_36350 = G__36361;
i__35622_36351 = G__36362;
continue;
} else {
var temp__5735__auto___36364 = cljs.core.seq(seq__35619_36348);
if(temp__5735__auto___36364){
var seq__35619_36365__$1 = temp__5735__auto___36364;
if(cljs.core.chunked_seq_QMARK_(seq__35619_36365__$1)){
var c__4556__auto___36366 = cljs.core.chunk_first(seq__35619_36365__$1);
var G__36367 = cljs.core.chunk_rest(seq__35619_36365__$1);
var G__36368 = c__4556__auto___36366;
var G__36369 = cljs.core.count(c__4556__auto___36366);
var G__36370 = (0);
seq__35619_36348 = G__36367;
chunk__35620_36349 = G__36368;
count__35621_36350 = G__36369;
i__35622_36351 = G__36370;
continue;
} else {
var vec__35633_36371 = cljs.core.first(seq__35619_36365__$1);
var script_tag_36372 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35633_36371,(0),null);
var script_body_36373 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35633_36371,(1),null);
eval(script_body_36373);


var G__36374 = cljs.core.next(seq__35619_36365__$1);
var G__36375 = null;
var G__36376 = (0);
var G__36377 = (0);
seq__35619_36348 = G__36374;
chunk__35620_36349 = G__36375;
count__35621_36350 = G__36376;
i__35622_36351 = G__36377;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__35637){
var vec__35638 = p__35637;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35638,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35638,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__35646 = arguments.length;
switch (G__35646) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__35666 = cljs.core.seq(style_keys);
var chunk__35667 = null;
var count__35668 = (0);
var i__35669 = (0);
while(true){
if((i__35669 < count__35668)){
var it = chunk__35667.cljs$core$IIndexed$_nth$arity$2(null,i__35669);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36399 = seq__35666;
var G__36400 = chunk__35667;
var G__36401 = count__35668;
var G__36402 = (i__35669 + (1));
seq__35666 = G__36399;
chunk__35667 = G__36400;
count__35668 = G__36401;
i__35669 = G__36402;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35666);
if(temp__5735__auto__){
var seq__35666__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35666__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__35666__$1);
var G__36404 = cljs.core.chunk_rest(seq__35666__$1);
var G__36405 = c__4556__auto__;
var G__36406 = cljs.core.count(c__4556__auto__);
var G__36407 = (0);
seq__35666 = G__36404;
chunk__35667 = G__36405;
count__35668 = G__36406;
i__35669 = G__36407;
continue;
} else {
var it = cljs.core.first(seq__35666__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__36408 = cljs.core.next(seq__35666__$1);
var G__36409 = null;
var G__36410 = (0);
var G__36411 = (0);
seq__35666 = G__36408;
chunk__35667 = G__36409;
count__35668 = G__36410;
i__35669 = G__36411;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35677,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35691 = k35677;
var G__35691__$1 = (((G__35691 instanceof cljs.core.Keyword))?G__35691.fqn:null);
switch (G__35691__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35677,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35701){
var vec__35702 = p__35701;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35702,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35702,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35676){
var self__ = this;
var G__35676__$1 = this;
return (new cljs.core.RecordIter((0),G__35676__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35678,other35679){
var self__ = this;
var this35678__$1 = this;
return (((!((other35679 == null)))) && ((this35678__$1.constructor === other35679.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35678__$1.x,other35679.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35678__$1.y,other35679.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35678__$1.__extmap,other35679.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35676){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35731 = cljs.core.keyword_identical_QMARK_;
var expr__35732 = k__4388__auto__;
if(cljs.core.truth_((pred__35731.cljs$core$IFn$_invoke$arity$2 ? pred__35731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__35732) : pred__35731.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__35732)))){
return (new shadow.dom.Coordinate(G__35676,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35731.cljs$core$IFn$_invoke$arity$2 ? pred__35731.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__35732) : pred__35731.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__35732)))){
return (new shadow.dom.Coordinate(self__.x,G__35676,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35676),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35676){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__35676,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__35681){
var extmap__4419__auto__ = (function (){var G__35749 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35681,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__35681)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35749);
} else {
return G__35749;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__35681),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__35681),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k35760,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__35770 = k35760;
var G__35770__$1 = (((G__35770 instanceof cljs.core.Keyword))?G__35770.fqn:null);
switch (G__35770__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k35760,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__35775){
var vec__35777 = p__35775;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35777,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35777,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__35759){
var self__ = this;
var G__35759__$1 = this;
return (new cljs.core.RecordIter((0),G__35759__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this35761,other35762){
var self__ = this;
var this35761__$1 = this;
return (((!((other35762 == null)))) && ((this35761__$1.constructor === other35762.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35761__$1.w,other35762.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35761__$1.h,other35762.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this35761__$1.__extmap,other35762.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__35759){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__35811 = cljs.core.keyword_identical_QMARK_;
var expr__35812 = k__4388__auto__;
if(cljs.core.truth_((pred__35811.cljs$core$IFn$_invoke$arity$2 ? pred__35811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__35812) : pred__35811.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__35812)))){
return (new shadow.dom.Size(G__35759,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__35811.cljs$core$IFn$_invoke$arity$2 ? pred__35811.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__35812) : pred__35811.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__35812)))){
return (new shadow.dom.Size(self__.w,G__35759,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__35759),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__35759){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__35759,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__35764){
var extmap__4419__auto__ = (function (){var G__35833 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__35764,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__35764)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__35833);
} else {
return G__35833;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__35764),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__35764),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__36510 = (i + (1));
var G__36511 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__36510;
ret = G__36511;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__35869){
var vec__35870 = p__35869;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35870,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35870,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__35878 = arguments.length;
switch (G__35878) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__36528 = ps;
var G__36529 = (i + (1));
el__$1 = G__36528;
i = G__36529;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__35914 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35914,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__35920_36535 = cljs.core.seq(props);
var chunk__35921_36536 = null;
var count__35922_36537 = (0);
var i__35923_36538 = (0);
while(true){
if((i__35923_36538 < count__35922_36537)){
var vec__35941_36539 = chunk__35921_36536.cljs$core$IIndexed$_nth$arity$2(null,i__35923_36538);
var k_36540 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35941_36539,(0),null);
var v_36541 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35941_36539,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_36540);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36540),v_36541);


var G__36543 = seq__35920_36535;
var G__36545 = chunk__35921_36536;
var G__36546 = count__35922_36537;
var G__36547 = (i__35923_36538 + (1));
seq__35920_36535 = G__36543;
chunk__35921_36536 = G__36545;
count__35922_36537 = G__36546;
i__35923_36538 = G__36547;
continue;
} else {
var temp__5735__auto___36551 = cljs.core.seq(seq__35920_36535);
if(temp__5735__auto___36551){
var seq__35920_36552__$1 = temp__5735__auto___36551;
if(cljs.core.chunked_seq_QMARK_(seq__35920_36552__$1)){
var c__4556__auto___36554 = cljs.core.chunk_first(seq__35920_36552__$1);
var G__36555 = cljs.core.chunk_rest(seq__35920_36552__$1);
var G__36556 = c__4556__auto___36554;
var G__36557 = cljs.core.count(c__4556__auto___36554);
var G__36558 = (0);
seq__35920_36535 = G__36555;
chunk__35921_36536 = G__36556;
count__35922_36537 = G__36557;
i__35923_36538 = G__36558;
continue;
} else {
var vec__35947_36561 = cljs.core.first(seq__35920_36552__$1);
var k_36562 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947_36561,(0),null);
var v_36563 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35947_36561,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_36562);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_36562),v_36563);


var G__36564 = cljs.core.next(seq__35920_36552__$1);
var G__36565 = null;
var G__36566 = (0);
var G__36567 = (0);
seq__35920_36535 = G__36564;
chunk__35921_36536 = G__36565;
count__35922_36537 = G__36566;
i__35923_36538 = G__36567;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__35962 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__35962,(1),null);
var seq__35965_36569 = cljs.core.seq(node_children);
var chunk__35967_36570 = null;
var count__35968_36571 = (0);
var i__35969_36572 = (0);
while(true){
if((i__35969_36572 < count__35968_36571)){
var child_struct_36576 = chunk__35967_36570.cljs$core$IIndexed$_nth$arity$2(null,i__35969_36572);
if((!((child_struct_36576 == null)))){
if(typeof child_struct_36576 === 'string'){
var text_36578 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36578),child_struct_36576].join(''));
} else {
var children_36579 = shadow.dom.svg_node(child_struct_36576);
if(cljs.core.seq_QMARK_(children_36579)){
var seq__36016_36580 = cljs.core.seq(children_36579);
var chunk__36018_36581 = null;
var count__36019_36582 = (0);
var i__36020_36583 = (0);
while(true){
if((i__36020_36583 < count__36019_36582)){
var child_36584 = chunk__36018_36581.cljs$core$IIndexed$_nth$arity$2(null,i__36020_36583);
if(cljs.core.truth_(child_36584)){
node.appendChild(child_36584);


var G__36586 = seq__36016_36580;
var G__36587 = chunk__36018_36581;
var G__36588 = count__36019_36582;
var G__36589 = (i__36020_36583 + (1));
seq__36016_36580 = G__36586;
chunk__36018_36581 = G__36587;
count__36019_36582 = G__36588;
i__36020_36583 = G__36589;
continue;
} else {
var G__36590 = seq__36016_36580;
var G__36591 = chunk__36018_36581;
var G__36592 = count__36019_36582;
var G__36593 = (i__36020_36583 + (1));
seq__36016_36580 = G__36590;
chunk__36018_36581 = G__36591;
count__36019_36582 = G__36592;
i__36020_36583 = G__36593;
continue;
}
} else {
var temp__5735__auto___36594 = cljs.core.seq(seq__36016_36580);
if(temp__5735__auto___36594){
var seq__36016_36595__$1 = temp__5735__auto___36594;
if(cljs.core.chunked_seq_QMARK_(seq__36016_36595__$1)){
var c__4556__auto___36596 = cljs.core.chunk_first(seq__36016_36595__$1);
var G__36597 = cljs.core.chunk_rest(seq__36016_36595__$1);
var G__36598 = c__4556__auto___36596;
var G__36599 = cljs.core.count(c__4556__auto___36596);
var G__36600 = (0);
seq__36016_36580 = G__36597;
chunk__36018_36581 = G__36598;
count__36019_36582 = G__36599;
i__36020_36583 = G__36600;
continue;
} else {
var child_36602 = cljs.core.first(seq__36016_36595__$1);
if(cljs.core.truth_(child_36602)){
node.appendChild(child_36602);


var G__36603 = cljs.core.next(seq__36016_36595__$1);
var G__36604 = null;
var G__36605 = (0);
var G__36606 = (0);
seq__36016_36580 = G__36603;
chunk__36018_36581 = G__36604;
count__36019_36582 = G__36605;
i__36020_36583 = G__36606;
continue;
} else {
var G__36607 = cljs.core.next(seq__36016_36595__$1);
var G__36608 = null;
var G__36609 = (0);
var G__36610 = (0);
seq__36016_36580 = G__36607;
chunk__36018_36581 = G__36608;
count__36019_36582 = G__36609;
i__36020_36583 = G__36610;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36579);
}
}


var G__36612 = seq__35965_36569;
var G__36613 = chunk__35967_36570;
var G__36614 = count__35968_36571;
var G__36615 = (i__35969_36572 + (1));
seq__35965_36569 = G__36612;
chunk__35967_36570 = G__36613;
count__35968_36571 = G__36614;
i__35969_36572 = G__36615;
continue;
} else {
var G__36619 = seq__35965_36569;
var G__36620 = chunk__35967_36570;
var G__36621 = count__35968_36571;
var G__36622 = (i__35969_36572 + (1));
seq__35965_36569 = G__36619;
chunk__35967_36570 = G__36620;
count__35968_36571 = G__36621;
i__35969_36572 = G__36622;
continue;
}
} else {
var temp__5735__auto___36624 = cljs.core.seq(seq__35965_36569);
if(temp__5735__auto___36624){
var seq__35965_36625__$1 = temp__5735__auto___36624;
if(cljs.core.chunked_seq_QMARK_(seq__35965_36625__$1)){
var c__4556__auto___36627 = cljs.core.chunk_first(seq__35965_36625__$1);
var G__36628 = cljs.core.chunk_rest(seq__35965_36625__$1);
var G__36629 = c__4556__auto___36627;
var G__36630 = cljs.core.count(c__4556__auto___36627);
var G__36631 = (0);
seq__35965_36569 = G__36628;
chunk__35967_36570 = G__36629;
count__35968_36571 = G__36630;
i__35969_36572 = G__36631;
continue;
} else {
var child_struct_36632 = cljs.core.first(seq__35965_36625__$1);
if((!((child_struct_36632 == null)))){
if(typeof child_struct_36632 === 'string'){
var text_36634 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_36634),child_struct_36632].join(''));
} else {
var children_36635 = shadow.dom.svg_node(child_struct_36632);
if(cljs.core.seq_QMARK_(children_36635)){
var seq__36037_36636 = cljs.core.seq(children_36635);
var chunk__36039_36637 = null;
var count__36040_36638 = (0);
var i__36041_36639 = (0);
while(true){
if((i__36041_36639 < count__36040_36638)){
var child_36641 = chunk__36039_36637.cljs$core$IIndexed$_nth$arity$2(null,i__36041_36639);
if(cljs.core.truth_(child_36641)){
node.appendChild(child_36641);


var G__36642 = seq__36037_36636;
var G__36643 = chunk__36039_36637;
var G__36644 = count__36040_36638;
var G__36645 = (i__36041_36639 + (1));
seq__36037_36636 = G__36642;
chunk__36039_36637 = G__36643;
count__36040_36638 = G__36644;
i__36041_36639 = G__36645;
continue;
} else {
var G__36646 = seq__36037_36636;
var G__36647 = chunk__36039_36637;
var G__36648 = count__36040_36638;
var G__36649 = (i__36041_36639 + (1));
seq__36037_36636 = G__36646;
chunk__36039_36637 = G__36647;
count__36040_36638 = G__36648;
i__36041_36639 = G__36649;
continue;
}
} else {
var temp__5735__auto___36650__$1 = cljs.core.seq(seq__36037_36636);
if(temp__5735__auto___36650__$1){
var seq__36037_36652__$1 = temp__5735__auto___36650__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36037_36652__$1)){
var c__4556__auto___36653 = cljs.core.chunk_first(seq__36037_36652__$1);
var G__36655 = cljs.core.chunk_rest(seq__36037_36652__$1);
var G__36656 = c__4556__auto___36653;
var G__36657 = cljs.core.count(c__4556__auto___36653);
var G__36658 = (0);
seq__36037_36636 = G__36655;
chunk__36039_36637 = G__36656;
count__36040_36638 = G__36657;
i__36041_36639 = G__36658;
continue;
} else {
var child_36659 = cljs.core.first(seq__36037_36652__$1);
if(cljs.core.truth_(child_36659)){
node.appendChild(child_36659);


var G__36660 = cljs.core.next(seq__36037_36652__$1);
var G__36661 = null;
var G__36662 = (0);
var G__36663 = (0);
seq__36037_36636 = G__36660;
chunk__36039_36637 = G__36661;
count__36040_36638 = G__36662;
i__36041_36639 = G__36663;
continue;
} else {
var G__36664 = cljs.core.next(seq__36037_36652__$1);
var G__36665 = null;
var G__36666 = (0);
var G__36667 = (0);
seq__36037_36636 = G__36664;
chunk__36039_36637 = G__36665;
count__36040_36638 = G__36666;
i__36041_36639 = G__36667;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_36635);
}
}


var G__36668 = cljs.core.next(seq__35965_36625__$1);
var G__36669 = null;
var G__36670 = (0);
var G__36671 = (0);
seq__35965_36569 = G__36668;
chunk__35967_36570 = G__36669;
count__35968_36571 = G__36670;
i__35969_36572 = G__36671;
continue;
} else {
var G__36672 = cljs.core.next(seq__35965_36625__$1);
var G__36673 = null;
var G__36674 = (0);
var G__36675 = (0);
seq__35965_36569 = G__36672;
chunk__35967_36570 = G__36673;
count__35968_36571 = G__36674;
i__35969_36572 = G__36675;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___36677 = arguments.length;
var i__4737__auto___36680 = (0);
while(true){
if((i__4737__auto___36680 < len__4736__auto___36677)){
args__4742__auto__.push((arguments[i__4737__auto___36680]));

var G__36681 = (i__4737__auto___36680 + (1));
i__4737__auto___36680 = G__36681;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq36053){
var G__36054 = cljs.core.first(seq36053);
var seq36053__$1 = cljs.core.next(seq36053);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36054,seq36053__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__36061 = arguments.length;
switch (G__36061) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__33066__auto___36689 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_36070){
var state_val_36071 = (state_36070[(1)]);
if((state_val_36071 === (1))){
var state_36070__$1 = state_36070;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_36070__$1,(2),once_or_cleanup);
} else {
if((state_val_36071 === (2))){
var inst_36067 = (state_36070[(2)]);
var inst_36068 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_36070__$1 = (function (){var statearr_36072 = state_36070;
(statearr_36072[(7)] = inst_36067);

return statearr_36072;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_36070__$1,inst_36068);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__32974__auto__ = null;
var shadow$dom$state_machine__32974__auto____0 = (function (){
var statearr_36073 = [null,null,null,null,null,null,null,null];
(statearr_36073[(0)] = shadow$dom$state_machine__32974__auto__);

(statearr_36073[(1)] = (1));

return statearr_36073;
});
var shadow$dom$state_machine__32974__auto____1 = (function (state_36070){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_36070);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e36074){var ex__32977__auto__ = e36074;
var statearr_36075_36693 = state_36070;
(statearr_36075_36693[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_36070[(4)]))){
var statearr_36076_36695 = state_36070;
(statearr_36076_36695[(1)] = cljs.core.first((state_36070[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36696 = state_36070;
state_36070 = G__36696;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
shadow$dom$state_machine__32974__auto__ = function(state_36070){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__32974__auto____0.call(this);
case 1:
return shadow$dom$state_machine__32974__auto____1.call(this,state_36070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__32974__auto____0;
shadow$dom$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__32974__auto____1;
return shadow$dom$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_36077 = f__33067__auto__();
(statearr_36077[(6)] = c__33066__auto___36689);

return statearr_36077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
