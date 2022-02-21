goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__37923){
var map__37924 = p__37923;
var map__37924__$1 = (((((!((map__37924 == null))))?(((((map__37924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37924):map__37924);
var m = map__37924__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37924__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37928_38147 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37929_38148 = null;
var count__37930_38149 = (0);
var i__37931_38150 = (0);
while(true){
if((i__37931_38150 < count__37930_38149)){
var f_38151 = chunk__37929_38148.cljs$core$IIndexed$_nth$arity$2(null,i__37931_38150);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38151], 0));


var G__38152 = seq__37928_38147;
var G__38153 = chunk__37929_38148;
var G__38154 = count__37930_38149;
var G__38155 = (i__37931_38150 + (1));
seq__37928_38147 = G__38152;
chunk__37929_38148 = G__38153;
count__37930_38149 = G__38154;
i__37931_38150 = G__38155;
continue;
} else {
var temp__5735__auto___38156 = cljs.core.seq(seq__37928_38147);
if(temp__5735__auto___38156){
var seq__37928_38157__$1 = temp__5735__auto___38156;
if(cljs.core.chunked_seq_QMARK_(seq__37928_38157__$1)){
var c__4556__auto___38158 = cljs.core.chunk_first(seq__37928_38157__$1);
var G__38159 = cljs.core.chunk_rest(seq__37928_38157__$1);
var G__38160 = c__4556__auto___38158;
var G__38161 = cljs.core.count(c__4556__auto___38158);
var G__38162 = (0);
seq__37928_38147 = G__38159;
chunk__37929_38148 = G__38160;
count__37930_38149 = G__38161;
i__37931_38150 = G__38162;
continue;
} else {
var f_38163 = cljs.core.first(seq__37928_38157__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_38163], 0));


var G__38164 = cljs.core.next(seq__37928_38157__$1);
var G__38165 = null;
var G__38166 = (0);
var G__38167 = (0);
seq__37928_38147 = G__38164;
chunk__37929_38148 = G__38165;
count__37930_38149 = G__38166;
i__37931_38150 = G__38167;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38168 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_38168], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_38168)))?cljs.core.second(arglists_38168):arglists_38168)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__37941_38174 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__37942_38175 = null;
var count__37943_38176 = (0);
var i__37944_38177 = (0);
while(true){
if((i__37944_38177 < count__37943_38176)){
var vec__37958_38178 = chunk__37942_38175.cljs$core$IIndexed$_nth$arity$2(null,i__37944_38177);
var name_38179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958_38178,(0),null);
var map__37961_38180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958_38178,(1),null);
var map__37961_38181__$1 = (((((!((map__37961_38180 == null))))?(((((map__37961_38180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37961_38180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37961_38180):map__37961_38180);
var doc_38182 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961_38181__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38183 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37961_38181__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38179], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38183], 0));

if(cljs.core.truth_(doc_38182)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38182], 0));
} else {
}


var G__38187 = seq__37941_38174;
var G__38188 = chunk__37942_38175;
var G__38189 = count__37943_38176;
var G__38190 = (i__37944_38177 + (1));
seq__37941_38174 = G__38187;
chunk__37942_38175 = G__38188;
count__37943_38176 = G__38189;
i__37944_38177 = G__38190;
continue;
} else {
var temp__5735__auto___38193 = cljs.core.seq(seq__37941_38174);
if(temp__5735__auto___38193){
var seq__37941_38194__$1 = temp__5735__auto___38193;
if(cljs.core.chunked_seq_QMARK_(seq__37941_38194__$1)){
var c__4556__auto___38195 = cljs.core.chunk_first(seq__37941_38194__$1);
var G__38197 = cljs.core.chunk_rest(seq__37941_38194__$1);
var G__38198 = c__4556__auto___38195;
var G__38199 = cljs.core.count(c__4556__auto___38195);
var G__38200 = (0);
seq__37941_38174 = G__38197;
chunk__37942_38175 = G__38198;
count__37943_38176 = G__38199;
i__37944_38177 = G__38200;
continue;
} else {
var vec__37964_38204 = cljs.core.first(seq__37941_38194__$1);
var name_38205 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37964_38204,(0),null);
var map__37967_38206 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37964_38204,(1),null);
var map__37967_38207__$1 = (((((!((map__37967_38206 == null))))?(((((map__37967_38206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37967_38206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__37967_38206):map__37967_38206);
var doc_38208 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967_38207__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38209 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37967_38207__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_38205], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_38209], 0));

if(cljs.core.truth_(doc_38208)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_38208], 0));
} else {
}


var G__38214 = cljs.core.next(seq__37941_38194__$1);
var G__38215 = null;
var G__38216 = (0);
var G__38217 = (0);
seq__37941_38174 = G__38214;
chunk__37942_38175 = G__38215;
count__37943_38176 = G__38216;
i__37944_38177 = G__38217;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__37971 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__37972 = null;
var count__37973 = (0);
var i__37974 = (0);
while(true){
if((i__37974 < count__37973)){
var role = chunk__37972.cljs$core$IIndexed$_nth$arity$2(null,i__37974);
var temp__5735__auto___38218__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38218__$1)){
var spec_38219 = temp__5735__auto___38218__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38219)], 0));
} else {
}


var G__38220 = seq__37971;
var G__38221 = chunk__37972;
var G__38222 = count__37973;
var G__38223 = (i__37974 + (1));
seq__37971 = G__38220;
chunk__37972 = G__38221;
count__37973 = G__38222;
i__37974 = G__38223;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__37971);
if(temp__5735__auto____$1){
var seq__37971__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__37971__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__37971__$1);
var G__38224 = cljs.core.chunk_rest(seq__37971__$1);
var G__38225 = c__4556__auto__;
var G__38226 = cljs.core.count(c__4556__auto__);
var G__38227 = (0);
seq__37971 = G__38224;
chunk__37972 = G__38225;
count__37973 = G__38226;
i__37974 = G__38227;
continue;
} else {
var role = cljs.core.first(seq__37971__$1);
var temp__5735__auto___38228__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___38228__$2)){
var spec_38229 = temp__5735__auto___38228__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_38229)], 0));
} else {
}


var G__38230 = cljs.core.next(seq__37971__$1);
var G__38231 = null;
var G__38232 = (0);
var G__38233 = (0);
seq__37971 = G__38230;
chunk__37972 = G__38231;
count__37973 = G__38232;
i__37974 = G__38233;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__38234 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__38235 = cljs.core.ex_cause(t);
via = G__38234;
t = G__38235;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__38048 = datafied_throwable;
var map__38048__$1 = (((((!((map__38048 == null))))?(((((map__38048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38048):map__38048);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38048__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38048__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__38049 = cljs.core.last(via);
var map__38049__$1 = (((((!((map__38049 == null))))?(((((map__38049.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38049.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38049):map__38049);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38049__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38049__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38049__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__38050 = data;
var map__38050__$1 = (((((!((map__38050 == null))))?(((((map__38050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38050):map__38050);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38050__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__38051 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__38051__$1 = (((((!((map__38051 == null))))?(((((map__38051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38051):map__38051);
var top_data = map__38051__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38051__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__38070 = phase;
var G__38070__$1 = (((G__38070 instanceof cljs.core.Keyword))?G__38070.fqn:null);
switch (G__38070__$1) {
case "read-source":
var map__38071 = data;
var map__38071__$1 = (((((!((map__38071 == null))))?(((((map__38071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38071):map__38071);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38071__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38071__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__38081 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__38081__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38081,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38081);
var G__38081__$2 = (cljs.core.truth_((function (){var fexpr__38082 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38082.cljs$core$IFn$_invoke$arity$1 ? fexpr__38082.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38082.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38081__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38081__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38081__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38081__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__38083 = top_data;
var G__38083__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38083,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__38083);
var G__38083__$2 = (cljs.core.truth_((function (){var fexpr__38084 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38084.cljs$core$IFn$_invoke$arity$1 ? fexpr__38084.cljs$core$IFn$_invoke$arity$1(source) : fexpr__38084.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38083__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__38083__$1);
var G__38083__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38083__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38083__$2);
var G__38083__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38083__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38083__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38083__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38083__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__38089 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38089,(3),null);
var G__38092 = top_data;
var G__38092__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38092,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__38092);
var G__38092__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38092__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__38092__$1);
var G__38092__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38092__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__38092__$2);
var G__38092__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38092__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__38092__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38092__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__38092__$4;
}

break;
case "execution":
var vec__38093 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38093,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__38047_SHARP_){
var or__4126__auto__ = (p1__38047_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__38097 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__38097.cljs$core$IFn$_invoke$arity$1 ? fexpr__38097.cljs$core$IFn$_invoke$arity$1(p1__38047_SHARP_) : fexpr__38097.call(null,p1__38047_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__38098 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__38098__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38098,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__38098);
var G__38098__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38098__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__38098__$1);
var G__38098__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38098__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__38098__$2);
var G__38098__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38098__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__38098__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__38098__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__38098__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38070__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__38102){
var map__38103 = p__38102;
var map__38103__$1 = (((((!((map__38103 == null))))?(((((map__38103.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38103.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__38103):map__38103);
var triage_data = map__38103__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38103__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__38106 = phase;
var G__38106__$1 = (((G__38106 instanceof cljs.core.Keyword))?G__38106.fqn:null);
switch (G__38106__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__38107 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__38108 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38109 = loc;
var G__38110 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38111_38262 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38112_38263 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38113_38264 = true;
var _STAR_print_fn_STAR__temp_val__38114_38265 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38113_38264);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38114_38265);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38100_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38100_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38112_38263);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38111_38262);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38107,G__38108,G__38109,G__38110) : format.call(null,G__38107,G__38108,G__38109,G__38110));

break;
case "macroexpansion":
var G__38116 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__38117 = cause_type;
var G__38118 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38119 = loc;
var G__38120 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38116,G__38117,G__38118,G__38119,G__38120) : format.call(null,G__38116,G__38117,G__38118,G__38119,G__38120));

break;
case "compile-syntax-check":
var G__38121 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__38122 = cause_type;
var G__38123 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38124 = loc;
var G__38125 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38121,G__38122,G__38123,G__38124,G__38125) : format.call(null,G__38121,G__38122,G__38123,G__38124,G__38125));

break;
case "compilation":
var G__38126 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__38127 = cause_type;
var G__38128 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38129 = loc;
var G__38130 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38126,G__38127,G__38128,G__38129,G__38130) : format.call(null,G__38126,G__38127,G__38128,G__38129,G__38130));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__38131 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__38132 = symbol;
var G__38133 = loc;
var G__38134 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__38136_38271 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__38137_38272 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__38138_38273 = true;
var _STAR_print_fn_STAR__temp_val__38139_38274 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__38138_38273);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__38139_38274);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__38101_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38101_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__38137_38272);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__38136_38271);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__38131,G__38132,G__38133,G__38134) : format.call(null,G__38131,G__38132,G__38133,G__38134));
} else {
var G__38141 = "Execution error%s at %s(%s).\n%s\n";
var G__38142 = cause_type;
var G__38143 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__38144 = loc;
var G__38145 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__38141,G__38142,G__38143,G__38144,G__38145) : format.call(null,G__38141,G__38142,G__38143,G__38144,G__38145));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38106__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
