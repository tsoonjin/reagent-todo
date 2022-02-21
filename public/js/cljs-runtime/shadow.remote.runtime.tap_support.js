goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__38502,p__38503){
var map__38504 = p__38502;
var map__38504__$1 = (((((!((map__38504 == null))))?(((((map__38504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38504):map__38504);
var svc = map__38504__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38504__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38504__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38504__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38505 = p__38503;
var map__38505__$1 = (((((!((map__38505 == null))))?(((((map__38505.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38505.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38505):map__38505);
var msg = map__38505__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38505__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38505__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__38517,p__38518){
var map__38520 = p__38517;
var map__38520__$1 = (((((!((map__38520 == null))))?(((((map__38520.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38520.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38520):map__38520);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38520__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__38521 = p__38518;
var map__38521__$1 = (((((!((map__38521 == null))))?(((((map__38521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38521):map__38521);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38521__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__38532,p__38533){
var map__38534 = p__38532;
var map__38534__$1 = (((((!((map__38534 == null))))?(((((map__38534.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38534.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38534):map__38534);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38534__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__38535 = p__38533;
var map__38535__$1 = (((((!((map__38535 == null))))?(((((map__38535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38535):map__38535);
var msg = map__38535__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38535__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__38545,tid){
var map__38546 = p__38545;
var map__38546__$1 = (((((!((map__38546 == null))))?(((((map__38546.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38546.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38546):map__38546);
var svc = map__38546__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38546__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__38557 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__38558 = null;
var count__38559 = (0);
var i__38560 = (0);
while(true){
if((i__38560 < count__38559)){
var vec__38571 = chunk__38558.cljs$core$IIndexed$_nth$arity$2(null,i__38560);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38571,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38587 = seq__38557;
var G__38588 = chunk__38558;
var G__38589 = count__38559;
var G__38590 = (i__38560 + (1));
seq__38557 = G__38587;
chunk__38558 = G__38588;
count__38559 = G__38589;
i__38560 = G__38590;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38557);
if(temp__5735__auto__){
var seq__38557__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38557__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38557__$1);
var G__38591 = cljs.core.chunk_rest(seq__38557__$1);
var G__38592 = c__4556__auto__;
var G__38593 = cljs.core.count(c__4556__auto__);
var G__38594 = (0);
seq__38557 = G__38591;
chunk__38558 = G__38592;
count__38559 = G__38593;
i__38560 = G__38594;
continue;
} else {
var vec__38577 = cljs.core.first(seq__38557__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38577,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38577,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__38595 = cljs.core.next(seq__38557__$1);
var G__38596 = null;
var G__38597 = (0);
var G__38598 = (0);
seq__38557 = G__38595;
chunk__38558 = G__38596;
count__38559 = G__38597;
i__38560 = G__38598;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__38548_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__38548_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__38549_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__38549_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__38550_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__38550_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__38551_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__38551_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__38580){
var map__38581 = p__38580;
var map__38581__$1 = (((((!((map__38581 == null))))?(((((map__38581.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38581.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38581):map__38581);
var svc = map__38581__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38581__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
