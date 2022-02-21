goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___39061 = arguments.length;
var i__4737__auto___39062 = (0);
while(true){
if((i__4737__auto___39062 < len__4736__auto___39061)){
args__4742__auto__.push((arguments[i__4737__auto___39062]));

var G__39063 = (i__4737__auto___39062 + (1));
i__4737__auto___39062 = G__39063;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38840){
var G__38841 = cljs.core.first(seq38840);
var seq38840__$1 = cljs.core.next(seq38840);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38841,seq38840__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38849 = cljs.core.seq(sources);
var chunk__38850 = null;
var count__38851 = (0);
var i__38852 = (0);
while(true){
if((i__38852 < count__38851)){
var map__38862 = chunk__38850.cljs$core$IIndexed$_nth$arity$2(null,i__38852);
var map__38862__$1 = (((((!((map__38862 == null))))?(((((map__38862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38862):map__38862);
var src = map__38862__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38862__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38862__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38862__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38862__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38866){var e_39071 = e38866;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39071);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39071.message)].join('')));
}

var G__39072 = seq__38849;
var G__39073 = chunk__38850;
var G__39074 = count__38851;
var G__39075 = (i__38852 + (1));
seq__38849 = G__39072;
chunk__38850 = G__39073;
count__38851 = G__39074;
i__38852 = G__39075;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38849);
if(temp__5735__auto__){
var seq__38849__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38849__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38849__$1);
var G__39078 = cljs.core.chunk_rest(seq__38849__$1);
var G__39079 = c__4556__auto__;
var G__39080 = cljs.core.count(c__4556__auto__);
var G__39081 = (0);
seq__38849 = G__39078;
chunk__38850 = G__39079;
count__38851 = G__39080;
i__38852 = G__39081;
continue;
} else {
var map__38875 = cljs.core.first(seq__38849__$1);
var map__38875__$1 = (((((!((map__38875 == null))))?(((((map__38875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38875.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38875):map__38875);
var src = map__38875__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38875__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38875__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38875__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38875__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38877){var e_39084 = e38877;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39084);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39084.message)].join('')));
}

var G__39085 = cljs.core.next(seq__38849__$1);
var G__39086 = null;
var G__39087 = (0);
var G__39088 = (0);
seq__38849 = G__39085;
chunk__38850 = G__39086;
count__38851 = G__39087;
i__38852 = G__39088;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38882 = cljs.core.seq(js_requires);
var chunk__38883 = null;
var count__38884 = (0);
var i__38885 = (0);
while(true){
if((i__38885 < count__38884)){
var js_ns = chunk__38883.cljs$core$IIndexed$_nth$arity$2(null,i__38885);
var require_str_39089 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39089);


var G__39090 = seq__38882;
var G__39091 = chunk__38883;
var G__39092 = count__38884;
var G__39093 = (i__38885 + (1));
seq__38882 = G__39090;
chunk__38883 = G__39091;
count__38884 = G__39092;
i__38885 = G__39093;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38882);
if(temp__5735__auto__){
var seq__38882__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38882__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38882__$1);
var G__39095 = cljs.core.chunk_rest(seq__38882__$1);
var G__39096 = c__4556__auto__;
var G__39097 = cljs.core.count(c__4556__auto__);
var G__39098 = (0);
seq__38882 = G__39095;
chunk__38883 = G__39096;
count__38884 = G__39097;
i__38885 = G__39098;
continue;
} else {
var js_ns = cljs.core.first(seq__38882__$1);
var require_str_39099 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39099);


var G__39100 = cljs.core.next(seq__38882__$1);
var G__39101 = null;
var G__39102 = (0);
var G__39103 = (0);
seq__38882 = G__39100;
chunk__38883 = G__39101;
count__38884 = G__39102;
i__38885 = G__39103;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38892){
var map__38893 = p__38892;
var map__38893__$1 = (((((!((map__38893 == null))))?(((((map__38893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38893):map__38893);
var msg = map__38893__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38893__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38893__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38895(s__38896){
return (new cljs.core.LazySeq(null,(function (){
var s__38896__$1 = s__38896;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__38896__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__38901 = cljs.core.first(xs__6292__auto__);
var map__38901__$1 = (((((!((map__38901 == null))))?(((((map__38901.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38901.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38901):map__38901);
var src = map__38901__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38901__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38901__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__38896__$1,map__38901,map__38901__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38893,map__38893__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38895_$_iter__38897(s__38898){
return (new cljs.core.LazySeq(null,((function (s__38896__$1,map__38901,map__38901__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38893,map__38893__$1,msg,info,reload_info){
return (function (){
var s__38898__$1 = s__38898;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__38898__$1);
if(temp__5735__auto____$1){
var s__38898__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38898__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__38898__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__38900 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__38899 = (0);
while(true){
if((i__38899 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__38899);
cljs.core.chunk_append(b__38900,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39110 = (i__38899 + (1));
i__38899 = G__39110;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38900),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38895_$_iter__38897(cljs.core.chunk_rest(s__38898__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38900),null);
}
} else {
var warning = cljs.core.first(s__38898__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38895_$_iter__38897(cljs.core.rest(s__38898__$2)));
}
} else {
return null;
}
break;
}
});})(s__38896__$1,map__38901,map__38901__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38893,map__38893__$1,msg,info,reload_info))
,null,null));
});})(s__38896__$1,map__38901,map__38901__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__38893,map__38893__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38895(cljs.core.rest(s__38896__$1)));
} else {
var G__39111 = cljs.core.rest(s__38896__$1);
s__38896__$1 = G__39111;
continue;
}
} else {
var G__39112 = cljs.core.rest(s__38896__$1);
s__38896__$1 = G__39112;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38905_39113 = cljs.core.seq(warnings);
var chunk__38906_39114 = null;
var count__38907_39115 = (0);
var i__38908_39116 = (0);
while(true){
if((i__38908_39116 < count__38907_39115)){
var map__38913_39117 = chunk__38906_39114.cljs$core$IIndexed$_nth$arity$2(null,i__38908_39116);
var map__38913_39118__$1 = (((((!((map__38913_39117 == null))))?(((((map__38913_39117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38913_39117.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38913_39117):map__38913_39117);
var w_39119 = map__38913_39118__$1;
var msg_39120__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913_39118__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39121 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913_39118__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39122 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913_39118__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39123 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913_39118__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39123)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39121),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39122),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39120__$1)].join(''));


var G__39124 = seq__38905_39113;
var G__39125 = chunk__38906_39114;
var G__39126 = count__38907_39115;
var G__39127 = (i__38908_39116 + (1));
seq__38905_39113 = G__39124;
chunk__38906_39114 = G__39125;
count__38907_39115 = G__39126;
i__38908_39116 = G__39127;
continue;
} else {
var temp__5735__auto___39128 = cljs.core.seq(seq__38905_39113);
if(temp__5735__auto___39128){
var seq__38905_39129__$1 = temp__5735__auto___39128;
if(cljs.core.chunked_seq_QMARK_(seq__38905_39129__$1)){
var c__4556__auto___39130 = cljs.core.chunk_first(seq__38905_39129__$1);
var G__39131 = cljs.core.chunk_rest(seq__38905_39129__$1);
var G__39132 = c__4556__auto___39130;
var G__39133 = cljs.core.count(c__4556__auto___39130);
var G__39134 = (0);
seq__38905_39113 = G__39131;
chunk__38906_39114 = G__39132;
count__38907_39115 = G__39133;
i__38908_39116 = G__39134;
continue;
} else {
var map__38915_39135 = cljs.core.first(seq__38905_39129__$1);
var map__38915_39136__$1 = (((((!((map__38915_39135 == null))))?(((((map__38915_39135.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38915_39135.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38915_39135):map__38915_39135);
var w_39137 = map__38915_39136__$1;
var msg_39138__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38915_39136__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39139 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38915_39136__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39140 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38915_39136__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39141 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38915_39136__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39141)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39139),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39140),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39138__$1)].join(''));


var G__39142 = cljs.core.next(seq__38905_39129__$1);
var G__39143 = null;
var G__39144 = (0);
var G__39145 = (0);
seq__38905_39113 = G__39142;
chunk__38906_39114 = G__39143;
count__38907_39115 = G__39144;
i__38908_39116 = G__39145;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38891_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38891_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38920){
var map__38921 = p__38920;
var map__38921__$1 = (((((!((map__38921 == null))))?(((((map__38921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38921):map__38921);
var msg = map__38921__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38921__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__38927 = cljs.core.seq(updates);
var chunk__38929 = null;
var count__38930 = (0);
var i__38931 = (0);
while(true){
if((i__38931 < count__38930)){
var path = chunk__38929.cljs$core$IIndexed$_nth$arity$2(null,i__38931);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38976_39147 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38981_39148 = null;
var count__38982_39149 = (0);
var i__38983_39150 = (0);
while(true){
if((i__38983_39150 < count__38982_39149)){
var node_39151 = chunk__38981_39148.cljs$core$IIndexed$_nth$arity$2(null,i__38983_39150);
if(cljs.core.not(node_39151.shadow$old)){
var path_match_39152 = shadow.cljs.devtools.client.browser.match_paths(node_39151.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39152)){
var new_link_39153 = (function (){var G__38994 = node_39151.cloneNode(true);
G__38994.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39152),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38994;
})();
(node_39151.shadow$old = true);

(new_link_39153.onload = ((function (seq__38976_39147,chunk__38981_39148,count__38982_39149,i__38983_39150,seq__38927,chunk__38929,count__38930,i__38931,new_link_39153,path_match_39152,node_39151,path,map__38921,map__38921__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39151);
});})(seq__38976_39147,chunk__38981_39148,count__38982_39149,i__38983_39150,seq__38927,chunk__38929,count__38930,i__38931,new_link_39153,path_match_39152,node_39151,path,map__38921,map__38921__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39152], 0));

goog.dom.insertSiblingAfter(new_link_39153,node_39151);


var G__39154 = seq__38976_39147;
var G__39155 = chunk__38981_39148;
var G__39156 = count__38982_39149;
var G__39157 = (i__38983_39150 + (1));
seq__38976_39147 = G__39154;
chunk__38981_39148 = G__39155;
count__38982_39149 = G__39156;
i__38983_39150 = G__39157;
continue;
} else {
var G__39159 = seq__38976_39147;
var G__39160 = chunk__38981_39148;
var G__39161 = count__38982_39149;
var G__39162 = (i__38983_39150 + (1));
seq__38976_39147 = G__39159;
chunk__38981_39148 = G__39160;
count__38982_39149 = G__39161;
i__38983_39150 = G__39162;
continue;
}
} else {
var G__39163 = seq__38976_39147;
var G__39164 = chunk__38981_39148;
var G__39165 = count__38982_39149;
var G__39166 = (i__38983_39150 + (1));
seq__38976_39147 = G__39163;
chunk__38981_39148 = G__39164;
count__38982_39149 = G__39165;
i__38983_39150 = G__39166;
continue;
}
} else {
var temp__5735__auto___39167 = cljs.core.seq(seq__38976_39147);
if(temp__5735__auto___39167){
var seq__38976_39168__$1 = temp__5735__auto___39167;
if(cljs.core.chunked_seq_QMARK_(seq__38976_39168__$1)){
var c__4556__auto___39169 = cljs.core.chunk_first(seq__38976_39168__$1);
var G__39170 = cljs.core.chunk_rest(seq__38976_39168__$1);
var G__39171 = c__4556__auto___39169;
var G__39172 = cljs.core.count(c__4556__auto___39169);
var G__39173 = (0);
seq__38976_39147 = G__39170;
chunk__38981_39148 = G__39171;
count__38982_39149 = G__39172;
i__38983_39150 = G__39173;
continue;
} else {
var node_39174 = cljs.core.first(seq__38976_39168__$1);
if(cljs.core.not(node_39174.shadow$old)){
var path_match_39175 = shadow.cljs.devtools.client.browser.match_paths(node_39174.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39175)){
var new_link_39177 = (function (){var G__38995 = node_39174.cloneNode(true);
G__38995.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39175),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38995;
})();
(node_39174.shadow$old = true);

(new_link_39177.onload = ((function (seq__38976_39147,chunk__38981_39148,count__38982_39149,i__38983_39150,seq__38927,chunk__38929,count__38930,i__38931,new_link_39177,path_match_39175,node_39174,seq__38976_39168__$1,temp__5735__auto___39167,path,map__38921,map__38921__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39174);
});})(seq__38976_39147,chunk__38981_39148,count__38982_39149,i__38983_39150,seq__38927,chunk__38929,count__38930,i__38931,new_link_39177,path_match_39175,node_39174,seq__38976_39168__$1,temp__5735__auto___39167,path,map__38921,map__38921__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39175], 0));

goog.dom.insertSiblingAfter(new_link_39177,node_39174);


var G__39178 = cljs.core.next(seq__38976_39168__$1);
var G__39179 = null;
var G__39180 = (0);
var G__39181 = (0);
seq__38976_39147 = G__39178;
chunk__38981_39148 = G__39179;
count__38982_39149 = G__39180;
i__38983_39150 = G__39181;
continue;
} else {
var G__39182 = cljs.core.next(seq__38976_39168__$1);
var G__39183 = null;
var G__39184 = (0);
var G__39185 = (0);
seq__38976_39147 = G__39182;
chunk__38981_39148 = G__39183;
count__38982_39149 = G__39184;
i__38983_39150 = G__39185;
continue;
}
} else {
var G__39187 = cljs.core.next(seq__38976_39168__$1);
var G__39188 = null;
var G__39189 = (0);
var G__39190 = (0);
seq__38976_39147 = G__39187;
chunk__38981_39148 = G__39188;
count__38982_39149 = G__39189;
i__38983_39150 = G__39190;
continue;
}
}
} else {
}
}
break;
}


var G__39191 = seq__38927;
var G__39192 = chunk__38929;
var G__39193 = count__38930;
var G__39194 = (i__38931 + (1));
seq__38927 = G__39191;
chunk__38929 = G__39192;
count__38930 = G__39193;
i__38931 = G__39194;
continue;
} else {
var G__39195 = seq__38927;
var G__39196 = chunk__38929;
var G__39197 = count__38930;
var G__39198 = (i__38931 + (1));
seq__38927 = G__39195;
chunk__38929 = G__39196;
count__38930 = G__39197;
i__38931 = G__39198;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__38927);
if(temp__5735__auto__){
var seq__38927__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38927__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__38927__$1);
var G__39199 = cljs.core.chunk_rest(seq__38927__$1);
var G__39200 = c__4556__auto__;
var G__39201 = cljs.core.count(c__4556__auto__);
var G__39202 = (0);
seq__38927 = G__39199;
chunk__38929 = G__39200;
count__38930 = G__39201;
i__38931 = G__39202;
continue;
} else {
var path = cljs.core.first(seq__38927__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38996_39203 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__39000_39204 = null;
var count__39001_39205 = (0);
var i__39002_39206 = (0);
while(true){
if((i__39002_39206 < count__39001_39205)){
var node_39207 = chunk__39000_39204.cljs$core$IIndexed$_nth$arity$2(null,i__39002_39206);
if(cljs.core.not(node_39207.shadow$old)){
var path_match_39208 = shadow.cljs.devtools.client.browser.match_paths(node_39207.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39208)){
var new_link_39209 = (function (){var G__39013 = node_39207.cloneNode(true);
G__39013.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39208),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39013;
})();
(node_39207.shadow$old = true);

(new_link_39209.onload = ((function (seq__38996_39203,chunk__39000_39204,count__39001_39205,i__39002_39206,seq__38927,chunk__38929,count__38930,i__38931,new_link_39209,path_match_39208,node_39207,path,seq__38927__$1,temp__5735__auto__,map__38921,map__38921__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39207);
});})(seq__38996_39203,chunk__39000_39204,count__39001_39205,i__39002_39206,seq__38927,chunk__38929,count__38930,i__38931,new_link_39209,path_match_39208,node_39207,path,seq__38927__$1,temp__5735__auto__,map__38921,map__38921__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39208], 0));

goog.dom.insertSiblingAfter(new_link_39209,node_39207);


var G__39210 = seq__38996_39203;
var G__39211 = chunk__39000_39204;
var G__39212 = count__39001_39205;
var G__39213 = (i__39002_39206 + (1));
seq__38996_39203 = G__39210;
chunk__39000_39204 = G__39211;
count__39001_39205 = G__39212;
i__39002_39206 = G__39213;
continue;
} else {
var G__39218 = seq__38996_39203;
var G__39219 = chunk__39000_39204;
var G__39220 = count__39001_39205;
var G__39221 = (i__39002_39206 + (1));
seq__38996_39203 = G__39218;
chunk__39000_39204 = G__39219;
count__39001_39205 = G__39220;
i__39002_39206 = G__39221;
continue;
}
} else {
var G__39223 = seq__38996_39203;
var G__39224 = chunk__39000_39204;
var G__39225 = count__39001_39205;
var G__39226 = (i__39002_39206 + (1));
seq__38996_39203 = G__39223;
chunk__39000_39204 = G__39224;
count__39001_39205 = G__39225;
i__39002_39206 = G__39226;
continue;
}
} else {
var temp__5735__auto___39231__$1 = cljs.core.seq(seq__38996_39203);
if(temp__5735__auto___39231__$1){
var seq__38996_39232__$1 = temp__5735__auto___39231__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38996_39232__$1)){
var c__4556__auto___39234 = cljs.core.chunk_first(seq__38996_39232__$1);
var G__39236 = cljs.core.chunk_rest(seq__38996_39232__$1);
var G__39237 = c__4556__auto___39234;
var G__39238 = cljs.core.count(c__4556__auto___39234);
var G__39239 = (0);
seq__38996_39203 = G__39236;
chunk__39000_39204 = G__39237;
count__39001_39205 = G__39238;
i__39002_39206 = G__39239;
continue;
} else {
var node_39245 = cljs.core.first(seq__38996_39232__$1);
if(cljs.core.not(node_39245.shadow$old)){
var path_match_39247 = shadow.cljs.devtools.client.browser.match_paths(node_39245.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39247)){
var new_link_39248 = (function (){var G__39016 = node_39245.cloneNode(true);
G__39016.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39247),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__39016;
})();
(node_39245.shadow$old = true);

(new_link_39248.onload = ((function (seq__38996_39203,chunk__39000_39204,count__39001_39205,i__39002_39206,seq__38927,chunk__38929,count__38930,i__38931,new_link_39248,path_match_39247,node_39245,seq__38996_39232__$1,temp__5735__auto___39231__$1,path,seq__38927__$1,temp__5735__auto__,map__38921,map__38921__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_39245);
});})(seq__38996_39203,chunk__39000_39204,count__39001_39205,i__39002_39206,seq__38927,chunk__38929,count__38930,i__38931,new_link_39248,path_match_39247,node_39245,seq__38996_39232__$1,temp__5735__auto___39231__$1,path,seq__38927__$1,temp__5735__auto__,map__38921,map__38921__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39247], 0));

goog.dom.insertSiblingAfter(new_link_39248,node_39245);


var G__39257 = cljs.core.next(seq__38996_39232__$1);
var G__39258 = null;
var G__39259 = (0);
var G__39260 = (0);
seq__38996_39203 = G__39257;
chunk__39000_39204 = G__39258;
count__39001_39205 = G__39259;
i__39002_39206 = G__39260;
continue;
} else {
var G__39261 = cljs.core.next(seq__38996_39232__$1);
var G__39262 = null;
var G__39263 = (0);
var G__39264 = (0);
seq__38996_39203 = G__39261;
chunk__39000_39204 = G__39262;
count__39001_39205 = G__39263;
i__39002_39206 = G__39264;
continue;
}
} else {
var G__39269 = cljs.core.next(seq__38996_39232__$1);
var G__39270 = null;
var G__39271 = (0);
var G__39272 = (0);
seq__38996_39203 = G__39269;
chunk__39000_39204 = G__39270;
count__39001_39205 = G__39271;
i__39002_39206 = G__39272;
continue;
}
}
} else {
}
}
break;
}


var G__39273 = cljs.core.next(seq__38927__$1);
var G__39274 = null;
var G__39275 = (0);
var G__39276 = (0);
seq__38927 = G__39273;
chunk__38929 = G__39274;
count__38930 = G__39275;
i__38931 = G__39276;
continue;
} else {
var G__39281 = cljs.core.next(seq__38927__$1);
var G__39282 = null;
var G__39283 = (0);
var G__39284 = (0);
seq__38927 = G__39281;
chunk__38929 = G__39282;
count__38930 = G__39283;
i__38931 = G__39284;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__39017){
var map__39018 = p__39017;
var map__39018__$1 = (((((!((map__39018 == null))))?(((((map__39018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39018):map__39018);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39018__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__39020){
var map__39021 = p__39020;
var map__39021__$1 = (((((!((map__39021 == null))))?(((((map__39021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39021):map__39021);
var _ = map__39021__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39021__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__39023,done,error){
var map__39024 = p__39023;
var map__39024__$1 = (((((!((map__39024 == null))))?(((((map__39024.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39024.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39024):map__39024);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39024__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__39026,done,error){
var map__39027 = p__39026;
var map__39027__$1 = (((((!((map__39027 == null))))?(((((map__39027.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39027.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39027):map__39027);
var msg = map__39027__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39027__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39027__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39027__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__39029){
var map__39030 = p__39029;
var map__39030__$1 = (((((!((map__39030 == null))))?(((((map__39030.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39030.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39030):map__39030);
var src = map__39030__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39030__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__39032 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__39032) : done.call(null,G__39032));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__39034){
var map__39035 = p__39034;
var map__39035__$1 = (((((!((map__39035 == null))))?(((((map__39035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39035.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39035):map__39035);
var msg__$1 = map__39035__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39035__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e39037){var ex = e39037;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__39038){
var map__39039 = p__39038;
var map__39039__$1 = (((((!((map__39039 == null))))?(((((map__39039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39039):map__39039);
var env = map__39039__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39039__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__39046){
var map__39047 = p__39046;
var map__39047__$1 = (((((!((map__39047 == null))))?(((((map__39047.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39047.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39047):map__39047);
var msg = map__39047__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39047__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__39051){
var map__39052 = p__39051;
var map__39052__$1 = (((((!((map__39052 == null))))?(((((map__39052.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39052.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39052):map__39052);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39052__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39052__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__39055){
var map__39056 = p__39055;
var map__39056__$1 = (((((!((map__39056 == null))))?(((((map__39056.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39056.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39056):map__39056);
var svc = map__39056__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39056__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
