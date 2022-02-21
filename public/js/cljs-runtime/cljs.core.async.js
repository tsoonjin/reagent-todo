goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33178 = arguments.length;
switch (G__33178) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33186 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33186 = (function (f,blockable,meta33187){
this.f = f;
this.blockable = blockable;
this.meta33187 = meta33187;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33188,meta33187__$1){
var self__ = this;
var _33188__$1 = this;
return (new cljs.core.async.t_cljs$core$async33186(self__.f,self__.blockable,meta33187__$1));
}));

(cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33188){
var self__ = this;
var _33188__$1 = this;
return self__.meta33187;
}));

(cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33186.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33186.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33187","meta33187",1631319030,null)], null);
}));

(cljs.core.async.t_cljs$core$async33186.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33186.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33186");

(cljs.core.async.t_cljs$core$async33186.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33186");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33186.
 */
cljs.core.async.__GT_t_cljs$core$async33186 = (function cljs$core$async$__GT_t_cljs$core$async33186(f__$1,blockable__$1,meta33187){
return (new cljs.core.async.t_cljs$core$async33186(f__$1,blockable__$1,meta33187));
});

}

return (new cljs.core.async.t_cljs$core$async33186(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33256 = arguments.length;
switch (G__33256) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33288 = arguments.length;
switch (G__33288) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33301 = arguments.length;
switch (G__33301) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35230 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35230) : fn1.call(null,val_35230));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35230) : fn1.call(null,val_35230));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33314 = arguments.length;
switch (G__33314) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___35242 = n;
var x_35243 = (0);
while(true){
if((x_35243 < n__4613__auto___35242)){
(a[x_35243] = x_35243);

var G__35244 = (x_35243 + (1));
x_35243 = G__35244;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33329 = (function (flag,meta33330){
this.flag = flag;
this.meta33330 = meta33330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33331,meta33330__$1){
var self__ = this;
var _33331__$1 = this;
return (new cljs.core.async.t_cljs$core$async33329(self__.flag,meta33330__$1));
}));

(cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33331){
var self__ = this;
var _33331__$1 = this;
return self__.meta33330;
}));

(cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33329.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33330","meta33330",-151264032,null)], null);
}));

(cljs.core.async.t_cljs$core$async33329.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33329.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33329");

(cljs.core.async.t_cljs$core$async33329.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33329");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33329.
 */
cljs.core.async.__GT_t_cljs$core$async33329 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33329(flag__$1,meta33330){
return (new cljs.core.async.t_cljs$core$async33329(flag__$1,meta33330));
});

}

return (new cljs.core.async.t_cljs$core$async33329(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33354 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33354 = (function (flag,cb,meta33355){
this.flag = flag;
this.cb = cb;
this.meta33355 = meta33355;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33356,meta33355__$1){
var self__ = this;
var _33356__$1 = this;
return (new cljs.core.async.t_cljs$core$async33354(self__.flag,self__.cb,meta33355__$1));
}));

(cljs.core.async.t_cljs$core$async33354.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33356){
var self__ = this;
var _33356__$1 = this;
return self__.meta33355;
}));

(cljs.core.async.t_cljs$core$async33354.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33354.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33354.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33355","meta33355",-575974560,null)], null);
}));

(cljs.core.async.t_cljs$core$async33354.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33354.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33354");

(cljs.core.async.t_cljs$core$async33354.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33354");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33354.
 */
cljs.core.async.__GT_t_cljs$core$async33354 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33354(flag__$1,cb__$1,meta33355){
return (new cljs.core.async.t_cljs$core$async33354(flag__$1,cb__$1,meta33355));
});

}

return (new cljs.core.async.t_cljs$core$async33354(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33365_SHARP_){
var G__33372 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33365_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33372) : fret.call(null,G__33372));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33366_SHARP_){
var G__33375 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33366_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33375) : fret.call(null,G__33375));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35249 = (i + (1));
i = G__35249;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35251 = arguments.length;
var i__4737__auto___35252 = (0);
while(true){
if((i__4737__auto___35252 < len__4736__auto___35251)){
args__4742__auto__.push((arguments[i__4737__auto___35252]));

var G__35253 = (i__4737__auto___35252 + (1));
i__4737__auto___35252 = G__35253;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33381){
var map__33382 = p__33381;
var map__33382__$1 = (((((!((map__33382 == null))))?(((((map__33382.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33382.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33382):map__33382);
var opts = map__33382__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33379){
var G__33380 = cljs.core.first(seq33379);
var seq33379__$1 = cljs.core.next(seq33379);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33380,seq33379__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33391 = arguments.length;
switch (G__33391) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33066__auto___35255 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_33445){
var state_val_33446 = (state_33445[(1)]);
if((state_val_33446 === (7))){
var inst_33432 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33453_35256 = state_33445__$1;
(statearr_33453_35256[(2)] = inst_33432);

(statearr_33453_35256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (1))){
var state_33445__$1 = state_33445;
var statearr_33457_35258 = state_33445__$1;
(statearr_33457_35258[(2)] = null);

(statearr_33457_35258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (4))){
var inst_33415 = (state_33445[(7)]);
var inst_33415__$1 = (state_33445[(2)]);
var inst_33416 = (inst_33415__$1 == null);
var state_33445__$1 = (function (){var statearr_33464 = state_33445;
(statearr_33464[(7)] = inst_33415__$1);

return statearr_33464;
})();
if(cljs.core.truth_(inst_33416)){
var statearr_33465_35259 = state_33445__$1;
(statearr_33465_35259[(1)] = (5));

} else {
var statearr_33466_35260 = state_33445__$1;
(statearr_33466_35260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (13))){
var state_33445__$1 = state_33445;
var statearr_33467_35261 = state_33445__$1;
(statearr_33467_35261[(2)] = null);

(statearr_33467_35261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (6))){
var inst_33415 = (state_33445[(7)]);
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33445__$1,(11),to,inst_33415);
} else {
if((state_val_33446 === (3))){
var inst_33434 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33445__$1,inst_33434);
} else {
if((state_val_33446 === (12))){
var state_33445__$1 = state_33445;
var statearr_33470_35262 = state_33445__$1;
(statearr_33470_35262[(2)] = null);

(statearr_33470_35262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (2))){
var state_33445__$1 = state_33445;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33445__$1,(4),from);
} else {
if((state_val_33446 === (11))){
var inst_33425 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
if(cljs.core.truth_(inst_33425)){
var statearr_33471_35263 = state_33445__$1;
(statearr_33471_35263[(1)] = (12));

} else {
var statearr_33472_35265 = state_33445__$1;
(statearr_33472_35265[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (9))){
var state_33445__$1 = state_33445;
var statearr_33476_35266 = state_33445__$1;
(statearr_33476_35266[(2)] = null);

(statearr_33476_35266[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (5))){
var state_33445__$1 = state_33445;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33477_35267 = state_33445__$1;
(statearr_33477_35267[(1)] = (8));

} else {
var statearr_33478_35268 = state_33445__$1;
(statearr_33478_35268[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (14))){
var inst_33430 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33479_35270 = state_33445__$1;
(statearr_33479_35270[(2)] = inst_33430);

(statearr_33479_35270[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (10))){
var inst_33422 = (state_33445[(2)]);
var state_33445__$1 = state_33445;
var statearr_33480_35271 = state_33445__$1;
(statearr_33480_35271[(2)] = inst_33422);

(statearr_33480_35271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33446 === (8))){
var inst_33419 = cljs.core.async.close_BANG_(to);
var state_33445__$1 = state_33445;
var statearr_33481_35273 = state_33445__$1;
(statearr_33481_35273[(2)] = inst_33419);

(statearr_33481_35273[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_33483 = [null,null,null,null,null,null,null,null];
(statearr_33483[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_33483[(1)] = (1));

return statearr_33483;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_33445){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33445);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33485){var ex__32977__auto__ = e33485;
var statearr_33486_35275 = state_33445;
(statearr_33486_35275[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33445[(4)]))){
var statearr_33487_35276 = state_33445;
(statearr_33487_35276[(1)] = cljs.core.first((state_33445[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35277 = state_33445;
state_33445 = G__35277;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_33445){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_33445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_33488 = f__33067__auto__();
(statearr_33488[(6)] = c__33066__auto___35255);

return statearr_33488;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__33489){
var vec__33490 = p__33489;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33490,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33490,(1),null);
var job = vec__33490;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33066__auto___35281 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_33497){
var state_val_33498 = (state_33497[(1)]);
if((state_val_33498 === (1))){
var state_33497__$1 = state_33497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33497__$1,(2),res,v);
} else {
if((state_val_33498 === (2))){
var inst_33494 = (state_33497[(2)]);
var inst_33495 = cljs.core.async.close_BANG_(res);
var state_33497__$1 = (function (){var statearr_33500 = state_33497;
(statearr_33500[(7)] = inst_33494);

return statearr_33500;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33497__$1,inst_33495);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_33501 = [null,null,null,null,null,null,null,null];
(statearr_33501[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_33501[(1)] = (1));

return statearr_33501;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_33497){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33497);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33502){var ex__32977__auto__ = e33502;
var statearr_33503_35284 = state_33497;
(statearr_33503_35284[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33497[(4)]))){
var statearr_33504_35285 = state_33497;
(statearr_33504_35285[(1)] = cljs.core.first((state_33497[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35287 = state_33497;
state_33497 = G__35287;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_33497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_33497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_33505 = f__33067__auto__();
(statearr_33505[(6)] = c__33066__auto___35281);

return statearr_33505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33506){
var vec__33507 = p__33506;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33507,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33507,(1),null);
var job = vec__33507;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___35290 = n;
var __35291 = (0);
while(true){
if((__35291 < n__4613__auto___35290)){
var G__33510_35292 = type;
var G__33510_35293__$1 = (((G__33510_35292 instanceof cljs.core.Keyword))?G__33510_35292.fqn:null);
switch (G__33510_35293__$1) {
case "compute":
var c__33066__auto___35295 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35291,c__33066__auto___35295,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async){
return (function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = ((function (__35291,c__33066__auto___35295,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async){
return (function (state_33523){
var state_val_33524 = (state_33523[(1)]);
if((state_val_33524 === (1))){
var state_33523__$1 = state_33523;
var statearr_33525_35296 = state_33523__$1;
(statearr_33525_35296[(2)] = null);

(statearr_33525_35296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33524 === (2))){
var state_33523__$1 = state_33523;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33523__$1,(4),jobs);
} else {
if((state_val_33524 === (3))){
var inst_33521 = (state_33523[(2)]);
var state_33523__$1 = state_33523;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33523__$1,inst_33521);
} else {
if((state_val_33524 === (4))){
var inst_33513 = (state_33523[(2)]);
var inst_33514 = process(inst_33513);
var state_33523__$1 = state_33523;
if(cljs.core.truth_(inst_33514)){
var statearr_33526_35297 = state_33523__$1;
(statearr_33526_35297[(1)] = (5));

} else {
var statearr_33527_35299 = state_33523__$1;
(statearr_33527_35299[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33524 === (5))){
var state_33523__$1 = state_33523;
var statearr_33528_35300 = state_33523__$1;
(statearr_33528_35300[(2)] = null);

(statearr_33528_35300[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33524 === (6))){
var state_33523__$1 = state_33523;
var statearr_33529_35301 = state_33523__$1;
(statearr_33529_35301[(2)] = null);

(statearr_33529_35301[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33524 === (7))){
var inst_33519 = (state_33523[(2)]);
var state_33523__$1 = state_33523;
var statearr_33530_35303 = state_33523__$1;
(statearr_33530_35303[(2)] = inst_33519);

(statearr_33530_35303[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35291,c__33066__auto___35295,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async))
;
return ((function (__35291,switch__32973__auto__,c__33066__auto___35295,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_33540 = [null,null,null,null,null,null,null];
(statearr_33540[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_33540[(1)] = (1));

return statearr_33540;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_33523){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33523);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33543){var ex__32977__auto__ = e33543;
var statearr_33545_35305 = state_33523;
(statearr_33545_35305[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33523[(4)]))){
var statearr_33550_35307 = state_33523;
(statearr_33550_35307[(1)] = cljs.core.first((state_33523[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35308 = state_33523;
state_33523 = G__35308;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_33523){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_33523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
;})(__35291,switch__32973__auto__,c__33066__auto___35295,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async))
})();
var state__33068__auto__ = (function (){var statearr_33563 = f__33067__auto__();
(statearr_33563[(6)] = c__33066__auto___35295);

return statearr_33563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
});})(__35291,c__33066__auto___35295,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async))
);


break;
case "async":
var c__33066__auto___35309 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35291,c__33066__auto___35309,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async){
return (function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = ((function (__35291,c__33066__auto___35309,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async){
return (function (state_33590){
var state_val_33591 = (state_33590[(1)]);
if((state_val_33591 === (1))){
var state_33590__$1 = state_33590;
var statearr_33592_35310 = state_33590__$1;
(statearr_33592_35310[(2)] = null);

(statearr_33592_35310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33591 === (2))){
var state_33590__$1 = state_33590;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33590__$1,(4),jobs);
} else {
if((state_val_33591 === (3))){
var inst_33588 = (state_33590[(2)]);
var state_33590__$1 = state_33590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33590__$1,inst_33588);
} else {
if((state_val_33591 === (4))){
var inst_33577 = (state_33590[(2)]);
var inst_33581 = async(inst_33577);
var state_33590__$1 = state_33590;
if(cljs.core.truth_(inst_33581)){
var statearr_33593_35313 = state_33590__$1;
(statearr_33593_35313[(1)] = (5));

} else {
var statearr_33599_35314 = state_33590__$1;
(statearr_33599_35314[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33591 === (5))){
var state_33590__$1 = state_33590;
var statearr_33600_35315 = state_33590__$1;
(statearr_33600_35315[(2)] = null);

(statearr_33600_35315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33591 === (6))){
var state_33590__$1 = state_33590;
var statearr_33601_35316 = state_33590__$1;
(statearr_33601_35316[(2)] = null);

(statearr_33601_35316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33591 === (7))){
var inst_33586 = (state_33590[(2)]);
var state_33590__$1 = state_33590;
var statearr_33602_35317 = state_33590__$1;
(statearr_33602_35317[(2)] = inst_33586);

(statearr_33602_35317[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35291,c__33066__auto___35309,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async))
;
return ((function (__35291,switch__32973__auto__,c__33066__auto___35309,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_33603 = [null,null,null,null,null,null,null];
(statearr_33603[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_33603[(1)] = (1));

return statearr_33603;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_33590){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33590);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33604){var ex__32977__auto__ = e33604;
var statearr_33605_35319 = state_33590;
(statearr_33605_35319[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33590[(4)]))){
var statearr_33606_35320 = state_33590;
(statearr_33606_35320[(1)] = cljs.core.first((state_33590[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35321 = state_33590;
state_33590 = G__35321;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_33590){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_33590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
;})(__35291,switch__32973__auto__,c__33066__auto___35309,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async))
})();
var state__33068__auto__ = (function (){var statearr_33607 = f__33067__auto__();
(statearr_33607[(6)] = c__33066__auto___35309);

return statearr_33607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
});})(__35291,c__33066__auto___35309,G__33510_35292,G__33510_35293__$1,n__4613__auto___35290,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33510_35293__$1)].join('')));

}

var G__35323 = (__35291 + (1));
__35291 = G__35323;
continue;
} else {
}
break;
}

var c__33066__auto___35324 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_33630){
var state_val_33631 = (state_33630[(1)]);
if((state_val_33631 === (7))){
var inst_33626 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
var statearr_33632_35325 = state_33630__$1;
(statearr_33632_35325[(2)] = inst_33626);

(statearr_33632_35325[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (1))){
var state_33630__$1 = state_33630;
var statearr_33633_35326 = state_33630__$1;
(statearr_33633_35326[(2)] = null);

(statearr_33633_35326[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (4))){
var inst_33611 = (state_33630[(7)]);
var inst_33611__$1 = (state_33630[(2)]);
var inst_33612 = (inst_33611__$1 == null);
var state_33630__$1 = (function (){var statearr_33634 = state_33630;
(statearr_33634[(7)] = inst_33611__$1);

return statearr_33634;
})();
if(cljs.core.truth_(inst_33612)){
var statearr_33635_35327 = state_33630__$1;
(statearr_33635_35327[(1)] = (5));

} else {
var statearr_33636_35328 = state_33630__$1;
(statearr_33636_35328[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (6))){
var inst_33611 = (state_33630[(7)]);
var inst_33616 = (state_33630[(8)]);
var inst_33616__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33617 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33618 = [inst_33611,inst_33616__$1];
var inst_33619 = (new cljs.core.PersistentVector(null,2,(5),inst_33617,inst_33618,null));
var state_33630__$1 = (function (){var statearr_33637 = state_33630;
(statearr_33637[(8)] = inst_33616__$1);

return statearr_33637;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33630__$1,(8),jobs,inst_33619);
} else {
if((state_val_33631 === (3))){
var inst_33628 = (state_33630[(2)]);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33630__$1,inst_33628);
} else {
if((state_val_33631 === (2))){
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33630__$1,(4),from);
} else {
if((state_val_33631 === (9))){
var inst_33623 = (state_33630[(2)]);
var state_33630__$1 = (function (){var statearr_33638 = state_33630;
(statearr_33638[(9)] = inst_33623);

return statearr_33638;
})();
var statearr_33639_35330 = state_33630__$1;
(statearr_33639_35330[(2)] = null);

(statearr_33639_35330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (5))){
var inst_33614 = cljs.core.async.close_BANG_(jobs);
var state_33630__$1 = state_33630;
var statearr_33640_35335 = state_33630__$1;
(statearr_33640_35335[(2)] = inst_33614);

(statearr_33640_35335[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33631 === (8))){
var inst_33616 = (state_33630[(8)]);
var inst_33621 = (state_33630[(2)]);
var state_33630__$1 = (function (){var statearr_33641 = state_33630;
(statearr_33641[(10)] = inst_33621);

return statearr_33641;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33630__$1,(9),results,inst_33616);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_33642 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33642[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_33642[(1)] = (1));

return statearr_33642;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_33630){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33630);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33643){var ex__32977__auto__ = e33643;
var statearr_33644_35337 = state_33630;
(statearr_33644_35337[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33630[(4)]))){
var statearr_33645_35338 = state_33630;
(statearr_33645_35338[(1)] = cljs.core.first((state_33630[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35339 = state_33630;
state_33630 = G__35339;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_33630){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_33630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_33646 = f__33067__auto__();
(statearr_33646[(6)] = c__33066__auto___35324);

return statearr_33646;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


var c__33066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_33684){
var state_val_33685 = (state_33684[(1)]);
if((state_val_33685 === (7))){
var inst_33680 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
var statearr_33686_35340 = state_33684__$1;
(statearr_33686_35340[(2)] = inst_33680);

(statearr_33686_35340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (20))){
var state_33684__$1 = state_33684;
var statearr_33687_35341 = state_33684__$1;
(statearr_33687_35341[(2)] = null);

(statearr_33687_35341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (1))){
var state_33684__$1 = state_33684;
var statearr_33688_35342 = state_33684__$1;
(statearr_33688_35342[(2)] = null);

(statearr_33688_35342[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (4))){
var inst_33649 = (state_33684[(7)]);
var inst_33649__$1 = (state_33684[(2)]);
var inst_33650 = (inst_33649__$1 == null);
var state_33684__$1 = (function (){var statearr_33689 = state_33684;
(statearr_33689[(7)] = inst_33649__$1);

return statearr_33689;
})();
if(cljs.core.truth_(inst_33650)){
var statearr_33690_35343 = state_33684__$1;
(statearr_33690_35343[(1)] = (5));

} else {
var statearr_33691_35344 = state_33684__$1;
(statearr_33691_35344[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (15))){
var inst_33662 = (state_33684[(8)]);
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33684__$1,(18),to,inst_33662);
} else {
if((state_val_33685 === (21))){
var inst_33675 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
var statearr_33692_35345 = state_33684__$1;
(statearr_33692_35345[(2)] = inst_33675);

(statearr_33692_35345[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (13))){
var inst_33677 = (state_33684[(2)]);
var state_33684__$1 = (function (){var statearr_33693 = state_33684;
(statearr_33693[(9)] = inst_33677);

return statearr_33693;
})();
var statearr_33694_35347 = state_33684__$1;
(statearr_33694_35347[(2)] = null);

(statearr_33694_35347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (6))){
var inst_33649 = (state_33684[(7)]);
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33684__$1,(11),inst_33649);
} else {
if((state_val_33685 === (17))){
var inst_33670 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
if(cljs.core.truth_(inst_33670)){
var statearr_33695_35349 = state_33684__$1;
(statearr_33695_35349[(1)] = (19));

} else {
var statearr_33696_35350 = state_33684__$1;
(statearr_33696_35350[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (3))){
var inst_33682 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33684__$1,inst_33682);
} else {
if((state_val_33685 === (12))){
var inst_33659 = (state_33684[(10)]);
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33684__$1,(14),inst_33659);
} else {
if((state_val_33685 === (2))){
var state_33684__$1 = state_33684;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33684__$1,(4),results);
} else {
if((state_val_33685 === (19))){
var state_33684__$1 = state_33684;
var statearr_33697_35352 = state_33684__$1;
(statearr_33697_35352[(2)] = null);

(statearr_33697_35352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (11))){
var inst_33659 = (state_33684[(2)]);
var state_33684__$1 = (function (){var statearr_33698 = state_33684;
(statearr_33698[(10)] = inst_33659);

return statearr_33698;
})();
var statearr_33699_35353 = state_33684__$1;
(statearr_33699_35353[(2)] = null);

(statearr_33699_35353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (9))){
var state_33684__$1 = state_33684;
var statearr_33700_35354 = state_33684__$1;
(statearr_33700_35354[(2)] = null);

(statearr_33700_35354[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (5))){
var state_33684__$1 = state_33684;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33701_35355 = state_33684__$1;
(statearr_33701_35355[(1)] = (8));

} else {
var statearr_33702_35356 = state_33684__$1;
(statearr_33702_35356[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (14))){
var inst_33662 = (state_33684[(8)]);
var inst_33662__$1 = (state_33684[(2)]);
var inst_33663 = (inst_33662__$1 == null);
var inst_33664 = cljs.core.not(inst_33663);
var state_33684__$1 = (function (){var statearr_33703 = state_33684;
(statearr_33703[(8)] = inst_33662__$1);

return statearr_33703;
})();
if(inst_33664){
var statearr_33704_35357 = state_33684__$1;
(statearr_33704_35357[(1)] = (15));

} else {
var statearr_33705_35358 = state_33684__$1;
(statearr_33705_35358[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (16))){
var state_33684__$1 = state_33684;
var statearr_33706_35359 = state_33684__$1;
(statearr_33706_35359[(2)] = false);

(statearr_33706_35359[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (10))){
var inst_33656 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
var statearr_33707_35361 = state_33684__$1;
(statearr_33707_35361[(2)] = inst_33656);

(statearr_33707_35361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (18))){
var inst_33667 = (state_33684[(2)]);
var state_33684__$1 = state_33684;
var statearr_33708_35362 = state_33684__$1;
(statearr_33708_35362[(2)] = inst_33667);

(statearr_33708_35362[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33685 === (8))){
var inst_33653 = cljs.core.async.close_BANG_(to);
var state_33684__$1 = state_33684;
var statearr_33709_35363 = state_33684__$1;
(statearr_33709_35363[(2)] = inst_33653);

(statearr_33709_35363[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_33710 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33710[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__);

(statearr_33710[(1)] = (1));

return statearr_33710;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1 = (function (state_33684){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33684);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33711){var ex__32977__auto__ = e33711;
var statearr_33712_35368 = state_33684;
(statearr_33712_35368[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33684[(4)]))){
var statearr_33713_35369 = state_33684;
(statearr_33713_35369[(1)] = cljs.core.first((state_33684[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35373 = state_33684;
state_33684 = G__35373;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__ = function(state_33684){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1.call(this,state_33684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_33714 = f__33067__auto__();
(statearr_33714[(6)] = c__33066__auto__);

return statearr_33714;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));

return c__33066__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__33716 = arguments.length;
switch (G__33716) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__33718 = arguments.length;
switch (G__33718) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__33720 = arguments.length;
switch (G__33720) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33066__auto___35391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_33746){
var state_val_33747 = (state_33746[(1)]);
if((state_val_33747 === (7))){
var inst_33742 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
var statearr_33748_35396 = state_33746__$1;
(statearr_33748_35396[(2)] = inst_33742);

(statearr_33748_35396[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (1))){
var state_33746__$1 = state_33746;
var statearr_33749_35397 = state_33746__$1;
(statearr_33749_35397[(2)] = null);

(statearr_33749_35397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (4))){
var inst_33723 = (state_33746[(7)]);
var inst_33723__$1 = (state_33746[(2)]);
var inst_33724 = (inst_33723__$1 == null);
var state_33746__$1 = (function (){var statearr_33750 = state_33746;
(statearr_33750[(7)] = inst_33723__$1);

return statearr_33750;
})();
if(cljs.core.truth_(inst_33724)){
var statearr_33751_35398 = state_33746__$1;
(statearr_33751_35398[(1)] = (5));

} else {
var statearr_33752_35399 = state_33746__$1;
(statearr_33752_35399[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (13))){
var state_33746__$1 = state_33746;
var statearr_33753_35400 = state_33746__$1;
(statearr_33753_35400[(2)] = null);

(statearr_33753_35400[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (6))){
var inst_33723 = (state_33746[(7)]);
var inst_33729 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_33723) : p.call(null,inst_33723));
var state_33746__$1 = state_33746;
if(cljs.core.truth_(inst_33729)){
var statearr_33754_35404 = state_33746__$1;
(statearr_33754_35404[(1)] = (9));

} else {
var statearr_33755_35405 = state_33746__$1;
(statearr_33755_35405[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (3))){
var inst_33744 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33746__$1,inst_33744);
} else {
if((state_val_33747 === (12))){
var state_33746__$1 = state_33746;
var statearr_33760_35406 = state_33746__$1;
(statearr_33760_35406[(2)] = null);

(statearr_33760_35406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (2))){
var state_33746__$1 = state_33746;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33746__$1,(4),ch);
} else {
if((state_val_33747 === (11))){
var inst_33723 = (state_33746[(7)]);
var inst_33733 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33746__$1,(8),inst_33733,inst_33723);
} else {
if((state_val_33747 === (9))){
var state_33746__$1 = state_33746;
var statearr_33761_35410 = state_33746__$1;
(statearr_33761_35410[(2)] = tc);

(statearr_33761_35410[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (5))){
var inst_33726 = cljs.core.async.close_BANG_(tc);
var inst_33727 = cljs.core.async.close_BANG_(fc);
var state_33746__$1 = (function (){var statearr_33762 = state_33746;
(statearr_33762[(8)] = inst_33726);

return statearr_33762;
})();
var statearr_33763_35412 = state_33746__$1;
(statearr_33763_35412[(2)] = inst_33727);

(statearr_33763_35412[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (14))){
var inst_33740 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
var statearr_33764_35416 = state_33746__$1;
(statearr_33764_35416[(2)] = inst_33740);

(statearr_33764_35416[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (10))){
var state_33746__$1 = state_33746;
var statearr_33765_35417 = state_33746__$1;
(statearr_33765_35417[(2)] = fc);

(statearr_33765_35417[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33747 === (8))){
var inst_33735 = (state_33746[(2)]);
var state_33746__$1 = state_33746;
if(cljs.core.truth_(inst_33735)){
var statearr_33766_35418 = state_33746__$1;
(statearr_33766_35418[(1)] = (12));

} else {
var statearr_33767_35419 = state_33746__$1;
(statearr_33767_35419[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_33768 = [null,null,null,null,null,null,null,null,null];
(statearr_33768[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_33768[(1)] = (1));

return statearr_33768;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_33746){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33746);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33769){var ex__32977__auto__ = e33769;
var statearr_33770_35420 = state_33746;
(statearr_33770_35420[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33746[(4)]))){
var statearr_33771_35422 = state_33746;
(statearr_33771_35422[(1)] = cljs.core.first((state_33746[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35423 = state_33746;
state_33746 = G__35423;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_33746){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_33746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_33772 = f__33067__auto__();
(statearr_33772[(6)] = c__33066__auto___35391);

return statearr_33772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_33794){
var state_val_33795 = (state_33794[(1)]);
if((state_val_33795 === (7))){
var inst_33790 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33796_35425 = state_33794__$1;
(statearr_33796_35425[(2)] = inst_33790);

(statearr_33796_35425[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (1))){
var inst_33773 = init;
var inst_33774 = inst_33773;
var state_33794__$1 = (function (){var statearr_33797 = state_33794;
(statearr_33797[(7)] = inst_33774);

return statearr_33797;
})();
var statearr_33798_35426 = state_33794__$1;
(statearr_33798_35426[(2)] = null);

(statearr_33798_35426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (4))){
var inst_33777 = (state_33794[(8)]);
var inst_33777__$1 = (state_33794[(2)]);
var inst_33778 = (inst_33777__$1 == null);
var state_33794__$1 = (function (){var statearr_33799 = state_33794;
(statearr_33799[(8)] = inst_33777__$1);

return statearr_33799;
})();
if(cljs.core.truth_(inst_33778)){
var statearr_33800_35427 = state_33794__$1;
(statearr_33800_35427[(1)] = (5));

} else {
var statearr_33801_35428 = state_33794__$1;
(statearr_33801_35428[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (6))){
var inst_33781 = (state_33794[(9)]);
var inst_33774 = (state_33794[(7)]);
var inst_33777 = (state_33794[(8)]);
var inst_33781__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_33774,inst_33777) : f.call(null,inst_33774,inst_33777));
var inst_33782 = cljs.core.reduced_QMARK_(inst_33781__$1);
var state_33794__$1 = (function (){var statearr_33803 = state_33794;
(statearr_33803[(9)] = inst_33781__$1);

return statearr_33803;
})();
if(inst_33782){
var statearr_33805_35429 = state_33794__$1;
(statearr_33805_35429[(1)] = (8));

} else {
var statearr_33806_35430 = state_33794__$1;
(statearr_33806_35430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (3))){
var inst_33792 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33794__$1,inst_33792);
} else {
if((state_val_33795 === (2))){
var state_33794__$1 = state_33794;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33794__$1,(4),ch);
} else {
if((state_val_33795 === (9))){
var inst_33781 = (state_33794[(9)]);
var inst_33774 = inst_33781;
var state_33794__$1 = (function (){var statearr_33807 = state_33794;
(statearr_33807[(7)] = inst_33774);

return statearr_33807;
})();
var statearr_33808_35431 = state_33794__$1;
(statearr_33808_35431[(2)] = null);

(statearr_33808_35431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (5))){
var inst_33774 = (state_33794[(7)]);
var state_33794__$1 = state_33794;
var statearr_33809_35432 = state_33794__$1;
(statearr_33809_35432[(2)] = inst_33774);

(statearr_33809_35432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (10))){
var inst_33788 = (state_33794[(2)]);
var state_33794__$1 = state_33794;
var statearr_33810_35434 = state_33794__$1;
(statearr_33810_35434[(2)] = inst_33788);

(statearr_33810_35434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33795 === (8))){
var inst_33781 = (state_33794[(9)]);
var inst_33784 = cljs.core.deref(inst_33781);
var state_33794__$1 = state_33794;
var statearr_33811_35435 = state_33794__$1;
(statearr_33811_35435[(2)] = inst_33784);

(statearr_33811_35435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__32974__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32974__auto____0 = (function (){
var statearr_33812 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33812[(0)] = cljs$core$async$reduce_$_state_machine__32974__auto__);

(statearr_33812[(1)] = (1));

return statearr_33812;
});
var cljs$core$async$reduce_$_state_machine__32974__auto____1 = (function (state_33794){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33794);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33813){var ex__32977__auto__ = e33813;
var statearr_33814_35436 = state_33794;
(statearr_33814_35436[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33794[(4)]))){
var statearr_33815_35437 = state_33794;
(statearr_33815_35437[(1)] = cljs.core.first((state_33794[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35438 = state_33794;
state_33794 = G__35438;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32974__auto__ = function(state_33794){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32974__auto____1.call(this,state_33794);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32974__auto____0;
cljs$core$async$reduce_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32974__auto____1;
return cljs$core$async$reduce_$_state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_33816 = f__33067__auto__();
(statearr_33816[(6)] = c__33066__auto__);

return statearr_33816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));

return c__33066__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_33822){
var state_val_33823 = (state_33822[(1)]);
if((state_val_33823 === (1))){
var inst_33817 = cljs.core.async.reduce(f__$1,init,ch);
var state_33822__$1 = state_33822;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33822__$1,(2),inst_33817);
} else {
if((state_val_33823 === (2))){
var inst_33819 = (state_33822[(2)]);
var inst_33820 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_33819) : f__$1.call(null,inst_33819));
var state_33822__$1 = state_33822;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33822__$1,inst_33820);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__32974__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32974__auto____0 = (function (){
var statearr_33824 = [null,null,null,null,null,null,null];
(statearr_33824[(0)] = cljs$core$async$transduce_$_state_machine__32974__auto__);

(statearr_33824[(1)] = (1));

return statearr_33824;
});
var cljs$core$async$transduce_$_state_machine__32974__auto____1 = (function (state_33822){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33822);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33825){var ex__32977__auto__ = e33825;
var statearr_33826_35440 = state_33822;
(statearr_33826_35440[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33822[(4)]))){
var statearr_33827_35441 = state_33822;
(statearr_33827_35441[(1)] = cljs.core.first((state_33822[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35442 = state_33822;
state_33822 = G__35442;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32974__auto__ = function(state_33822){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32974__auto____1.call(this,state_33822);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32974__auto____0;
cljs$core$async$transduce_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32974__auto____1;
return cljs$core$async$transduce_$_state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_33828 = f__33067__auto__();
(statearr_33828[(6)] = c__33066__auto__);

return statearr_33828;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));

return c__33066__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__33830 = arguments.length;
switch (G__33830) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_33855){
var state_val_33856 = (state_33855[(1)]);
if((state_val_33856 === (7))){
var inst_33837 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
var statearr_33857_35451 = state_33855__$1;
(statearr_33857_35451[(2)] = inst_33837);

(statearr_33857_35451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (1))){
var inst_33831 = cljs.core.seq(coll);
var inst_33832 = inst_33831;
var state_33855__$1 = (function (){var statearr_33858 = state_33855;
(statearr_33858[(7)] = inst_33832);

return statearr_33858;
})();
var statearr_33859_35454 = state_33855__$1;
(statearr_33859_35454[(2)] = null);

(statearr_33859_35454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (4))){
var inst_33832 = (state_33855[(7)]);
var inst_33835 = cljs.core.first(inst_33832);
var state_33855__$1 = state_33855;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33855__$1,(7),ch,inst_33835);
} else {
if((state_val_33856 === (13))){
var inst_33849 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
var statearr_33864_35456 = state_33855__$1;
(statearr_33864_35456[(2)] = inst_33849);

(statearr_33864_35456[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (6))){
var inst_33840 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
if(cljs.core.truth_(inst_33840)){
var statearr_33865_35457 = state_33855__$1;
(statearr_33865_35457[(1)] = (8));

} else {
var statearr_33866_35458 = state_33855__$1;
(statearr_33866_35458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (3))){
var inst_33853 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33855__$1,inst_33853);
} else {
if((state_val_33856 === (12))){
var state_33855__$1 = state_33855;
var statearr_33867_35459 = state_33855__$1;
(statearr_33867_35459[(2)] = null);

(statearr_33867_35459[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (2))){
var inst_33832 = (state_33855[(7)]);
var state_33855__$1 = state_33855;
if(cljs.core.truth_(inst_33832)){
var statearr_33868_35460 = state_33855__$1;
(statearr_33868_35460[(1)] = (4));

} else {
var statearr_33869_35461 = state_33855__$1;
(statearr_33869_35461[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (11))){
var inst_33846 = cljs.core.async.close_BANG_(ch);
var state_33855__$1 = state_33855;
var statearr_33870_35463 = state_33855__$1;
(statearr_33870_35463[(2)] = inst_33846);

(statearr_33870_35463[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (9))){
var state_33855__$1 = state_33855;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33871_35464 = state_33855__$1;
(statearr_33871_35464[(1)] = (11));

} else {
var statearr_33872_35465 = state_33855__$1;
(statearr_33872_35465[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (5))){
var inst_33832 = (state_33855[(7)]);
var state_33855__$1 = state_33855;
var statearr_33873_35467 = state_33855__$1;
(statearr_33873_35467[(2)] = inst_33832);

(statearr_33873_35467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (10))){
var inst_33851 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
var statearr_33874_35471 = state_33855__$1;
(statearr_33874_35471[(2)] = inst_33851);

(statearr_33874_35471[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (8))){
var inst_33832 = (state_33855[(7)]);
var inst_33842 = cljs.core.next(inst_33832);
var inst_33832__$1 = inst_33842;
var state_33855__$1 = (function (){var statearr_33875 = state_33855;
(statearr_33875[(7)] = inst_33832__$1);

return statearr_33875;
})();
var statearr_33876_35474 = state_33855__$1;
(statearr_33876_35474[(2)] = null);

(statearr_33876_35474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_33877 = [null,null,null,null,null,null,null,null];
(statearr_33877[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_33877[(1)] = (1));

return statearr_33877;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_33855){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_33855);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e33878){var ex__32977__auto__ = e33878;
var statearr_33879_35481 = state_33855;
(statearr_33879_35481[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_33855[(4)]))){
var statearr_33880_35486 = state_33855;
(statearr_33880_35486[(1)] = cljs.core.first((state_33855[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35487 = state_33855;
state_33855 = G__35487;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_33855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_33855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_33885 = f__33067__auto__();
(statearr_33885[(6)] = c__33066__auto__);

return statearr_33885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));

return c__33066__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33887 = arguments.length;
switch (G__33887) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_35496 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_35496(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_35497 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_35497(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_35498 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_35498(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_35506 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_35506(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33892 = (function (ch,cs,meta33893){
this.ch = ch;
this.cs = cs;
this.meta33893 = meta33893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33894,meta33893__$1){
var self__ = this;
var _33894__$1 = this;
return (new cljs.core.async.t_cljs$core$async33892(self__.ch,self__.cs,meta33893__$1));
}));

(cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33894){
var self__ = this;
var _33894__$1 = this;
return self__.meta33893;
}));

(cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async33892.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async33892.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33893","meta33893",380520604,null)], null);
}));

(cljs.core.async.t_cljs$core$async33892.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33892.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33892");

(cljs.core.async.t_cljs$core$async33892.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async33892");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33892.
 */
cljs.core.async.__GT_t_cljs$core$async33892 = (function cljs$core$async$mult_$___GT_t_cljs$core$async33892(ch__$1,cs__$1,meta33893){
return (new cljs.core.async.t_cljs$core$async33892(ch__$1,cs__$1,meta33893));
});

}

return (new cljs.core.async.t_cljs$core$async33892(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33066__auto___35514 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_34047){
var state_val_34048 = (state_34047[(1)]);
if((state_val_34048 === (7))){
var inst_34043 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34049_35516 = state_34047__$1;
(statearr_34049_35516[(2)] = inst_34043);

(statearr_34049_35516[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (20))){
var inst_33932 = (state_34047[(7)]);
var inst_33948 = cljs.core.first(inst_33932);
var inst_33952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33948,(0),null);
var inst_33953 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33948,(1),null);
var state_34047__$1 = (function (){var statearr_34050 = state_34047;
(statearr_34050[(8)] = inst_33952);

return statearr_34050;
})();
if(cljs.core.truth_(inst_33953)){
var statearr_34051_35517 = state_34047__$1;
(statearr_34051_35517[(1)] = (22));

} else {
var statearr_34053_35518 = state_34047__$1;
(statearr_34053_35518[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (27))){
var inst_33981 = (state_34047[(9)]);
var inst_33899 = (state_34047[(10)]);
var inst_33983 = (state_34047[(11)]);
var inst_33991 = (state_34047[(12)]);
var inst_33991__$1 = cljs.core._nth(inst_33981,inst_33983);
var inst_33992 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_33991__$1,inst_33899,done);
var state_34047__$1 = (function (){var statearr_34055 = state_34047;
(statearr_34055[(12)] = inst_33991__$1);

return statearr_34055;
})();
if(cljs.core.truth_(inst_33992)){
var statearr_34056_35519 = state_34047__$1;
(statearr_34056_35519[(1)] = (30));

} else {
var statearr_34057_35520 = state_34047__$1;
(statearr_34057_35520[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (1))){
var state_34047__$1 = state_34047;
var statearr_34058_35521 = state_34047__$1;
(statearr_34058_35521[(2)] = null);

(statearr_34058_35521[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (24))){
var inst_33932 = (state_34047[(7)]);
var inst_33958 = (state_34047[(2)]);
var inst_33959 = cljs.core.next(inst_33932);
var inst_33908 = inst_33959;
var inst_33909 = null;
var inst_33910 = (0);
var inst_33911 = (0);
var state_34047__$1 = (function (){var statearr_34059 = state_34047;
(statearr_34059[(13)] = inst_33909);

(statearr_34059[(14)] = inst_33958);

(statearr_34059[(15)] = inst_33908);

(statearr_34059[(16)] = inst_33911);

(statearr_34059[(17)] = inst_33910);

return statearr_34059;
})();
var statearr_34063_35522 = state_34047__$1;
(statearr_34063_35522[(2)] = null);

(statearr_34063_35522[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (39))){
var state_34047__$1 = state_34047;
var statearr_34067_35529 = state_34047__$1;
(statearr_34067_35529[(2)] = null);

(statearr_34067_35529[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (4))){
var inst_33899 = (state_34047[(10)]);
var inst_33899__$1 = (state_34047[(2)]);
var inst_33900 = (inst_33899__$1 == null);
var state_34047__$1 = (function (){var statearr_34068 = state_34047;
(statearr_34068[(10)] = inst_33899__$1);

return statearr_34068;
})();
if(cljs.core.truth_(inst_33900)){
var statearr_34069_35531 = state_34047__$1;
(statearr_34069_35531[(1)] = (5));

} else {
var statearr_34070_35532 = state_34047__$1;
(statearr_34070_35532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (15))){
var inst_33909 = (state_34047[(13)]);
var inst_33908 = (state_34047[(15)]);
var inst_33911 = (state_34047[(16)]);
var inst_33910 = (state_34047[(17)]);
var inst_33927 = (state_34047[(2)]);
var inst_33928 = (inst_33911 + (1));
var tmp34064 = inst_33909;
var tmp34065 = inst_33908;
var tmp34066 = inst_33910;
var inst_33908__$1 = tmp34065;
var inst_33909__$1 = tmp34064;
var inst_33910__$1 = tmp34066;
var inst_33911__$1 = inst_33928;
var state_34047__$1 = (function (){var statearr_34071 = state_34047;
(statearr_34071[(13)] = inst_33909__$1);

(statearr_34071[(15)] = inst_33908__$1);

(statearr_34071[(18)] = inst_33927);

(statearr_34071[(16)] = inst_33911__$1);

(statearr_34071[(17)] = inst_33910__$1);

return statearr_34071;
})();
var statearr_34072_35533 = state_34047__$1;
(statearr_34072_35533[(2)] = null);

(statearr_34072_35533[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (21))){
var inst_33962 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34076_35534 = state_34047__$1;
(statearr_34076_35534[(2)] = inst_33962);

(statearr_34076_35534[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (31))){
var inst_33991 = (state_34047[(12)]);
var inst_33995 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_33991);
var state_34047__$1 = state_34047;
var statearr_34077_35536 = state_34047__$1;
(statearr_34077_35536[(2)] = inst_33995);

(statearr_34077_35536[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (32))){
var inst_33981 = (state_34047[(9)]);
var inst_33983 = (state_34047[(11)]);
var inst_33980 = (state_34047[(19)]);
var inst_33982 = (state_34047[(20)]);
var inst_33997 = (state_34047[(2)]);
var inst_33998 = (inst_33983 + (1));
var tmp34073 = inst_33981;
var tmp34074 = inst_33980;
var tmp34075 = inst_33982;
var inst_33980__$1 = tmp34074;
var inst_33981__$1 = tmp34073;
var inst_33982__$1 = tmp34075;
var inst_33983__$1 = inst_33998;
var state_34047__$1 = (function (){var statearr_34078 = state_34047;
(statearr_34078[(9)] = inst_33981__$1);

(statearr_34078[(11)] = inst_33983__$1);

(statearr_34078[(19)] = inst_33980__$1);

(statearr_34078[(20)] = inst_33982__$1);

(statearr_34078[(21)] = inst_33997);

return statearr_34078;
})();
var statearr_34079_35537 = state_34047__$1;
(statearr_34079_35537[(2)] = null);

(statearr_34079_35537[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (40))){
var inst_34013 = (state_34047[(22)]);
var inst_34017 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34013);
var state_34047__$1 = state_34047;
var statearr_34080_35538 = state_34047__$1;
(statearr_34080_35538[(2)] = inst_34017);

(statearr_34080_35538[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (33))){
var inst_34001 = (state_34047[(23)]);
var inst_34006 = cljs.core.chunked_seq_QMARK_(inst_34001);
var state_34047__$1 = state_34047;
if(inst_34006){
var statearr_34081_35539 = state_34047__$1;
(statearr_34081_35539[(1)] = (36));

} else {
var statearr_34082_35540 = state_34047__$1;
(statearr_34082_35540[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (13))){
var inst_33920 = (state_34047[(24)]);
var inst_33924 = cljs.core.async.close_BANG_(inst_33920);
var state_34047__$1 = state_34047;
var statearr_34083_35541 = state_34047__$1;
(statearr_34083_35541[(2)] = inst_33924);

(statearr_34083_35541[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (22))){
var inst_33952 = (state_34047[(8)]);
var inst_33955 = cljs.core.async.close_BANG_(inst_33952);
var state_34047__$1 = state_34047;
var statearr_34084_35543 = state_34047__$1;
(statearr_34084_35543[(2)] = inst_33955);

(statearr_34084_35543[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (36))){
var inst_34001 = (state_34047[(23)]);
var inst_34008 = cljs.core.chunk_first(inst_34001);
var inst_34009 = cljs.core.chunk_rest(inst_34001);
var inst_34010 = cljs.core.count(inst_34008);
var inst_33980 = inst_34009;
var inst_33981 = inst_34008;
var inst_33982 = inst_34010;
var inst_33983 = (0);
var state_34047__$1 = (function (){var statearr_34085 = state_34047;
(statearr_34085[(9)] = inst_33981);

(statearr_34085[(11)] = inst_33983);

(statearr_34085[(19)] = inst_33980);

(statearr_34085[(20)] = inst_33982);

return statearr_34085;
})();
var statearr_34086_35544 = state_34047__$1;
(statearr_34086_35544[(2)] = null);

(statearr_34086_35544[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (41))){
var inst_34001 = (state_34047[(23)]);
var inst_34019 = (state_34047[(2)]);
var inst_34020 = cljs.core.next(inst_34001);
var inst_33980 = inst_34020;
var inst_33981 = null;
var inst_33982 = (0);
var inst_33983 = (0);
var state_34047__$1 = (function (){var statearr_34087 = state_34047;
(statearr_34087[(9)] = inst_33981);

(statearr_34087[(11)] = inst_33983);

(statearr_34087[(19)] = inst_33980);

(statearr_34087[(20)] = inst_33982);

(statearr_34087[(25)] = inst_34019);

return statearr_34087;
})();
var statearr_34088_35545 = state_34047__$1;
(statearr_34088_35545[(2)] = null);

(statearr_34088_35545[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (43))){
var state_34047__$1 = state_34047;
var statearr_34089_35546 = state_34047__$1;
(statearr_34089_35546[(2)] = null);

(statearr_34089_35546[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (29))){
var inst_34028 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34090_35547 = state_34047__$1;
(statearr_34090_35547[(2)] = inst_34028);

(statearr_34090_35547[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (44))){
var inst_34040 = (state_34047[(2)]);
var state_34047__$1 = (function (){var statearr_34091 = state_34047;
(statearr_34091[(26)] = inst_34040);

return statearr_34091;
})();
var statearr_34092_35548 = state_34047__$1;
(statearr_34092_35548[(2)] = null);

(statearr_34092_35548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (6))){
var inst_33972 = (state_34047[(27)]);
var inst_33971 = cljs.core.deref(cs);
var inst_33972__$1 = cljs.core.keys(inst_33971);
var inst_33973 = cljs.core.count(inst_33972__$1);
var inst_33974 = cljs.core.reset_BANG_(dctr,inst_33973);
var inst_33979 = cljs.core.seq(inst_33972__$1);
var inst_33980 = inst_33979;
var inst_33981 = null;
var inst_33982 = (0);
var inst_33983 = (0);
var state_34047__$1 = (function (){var statearr_34093 = state_34047;
(statearr_34093[(9)] = inst_33981);

(statearr_34093[(28)] = inst_33974);

(statearr_34093[(11)] = inst_33983);

(statearr_34093[(19)] = inst_33980);

(statearr_34093[(20)] = inst_33982);

(statearr_34093[(27)] = inst_33972__$1);

return statearr_34093;
})();
var statearr_34094_35555 = state_34047__$1;
(statearr_34094_35555[(2)] = null);

(statearr_34094_35555[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (28))){
var inst_34001 = (state_34047[(23)]);
var inst_33980 = (state_34047[(19)]);
var inst_34001__$1 = cljs.core.seq(inst_33980);
var state_34047__$1 = (function (){var statearr_34095 = state_34047;
(statearr_34095[(23)] = inst_34001__$1);

return statearr_34095;
})();
if(inst_34001__$1){
var statearr_34096_35556 = state_34047__$1;
(statearr_34096_35556[(1)] = (33));

} else {
var statearr_34097_35557 = state_34047__$1;
(statearr_34097_35557[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (25))){
var inst_33983 = (state_34047[(11)]);
var inst_33982 = (state_34047[(20)]);
var inst_33985 = (inst_33983 < inst_33982);
var inst_33986 = inst_33985;
var state_34047__$1 = state_34047;
if(cljs.core.truth_(inst_33986)){
var statearr_34098_35558 = state_34047__$1;
(statearr_34098_35558[(1)] = (27));

} else {
var statearr_34099_35559 = state_34047__$1;
(statearr_34099_35559[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (34))){
var state_34047__$1 = state_34047;
var statearr_34100_35560 = state_34047__$1;
(statearr_34100_35560[(2)] = null);

(statearr_34100_35560[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (17))){
var state_34047__$1 = state_34047;
var statearr_34101_35561 = state_34047__$1;
(statearr_34101_35561[(2)] = null);

(statearr_34101_35561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (3))){
var inst_34045 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34047__$1,inst_34045);
} else {
if((state_val_34048 === (12))){
var inst_33967 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34103_35562 = state_34047__$1;
(statearr_34103_35562[(2)] = inst_33967);

(statearr_34103_35562[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (2))){
var state_34047__$1 = state_34047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34047__$1,(4),ch);
} else {
if((state_val_34048 === (23))){
var state_34047__$1 = state_34047;
var statearr_34104_35564 = state_34047__$1;
(statearr_34104_35564[(2)] = null);

(statearr_34104_35564[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (35))){
var inst_34026 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34105_35565 = state_34047__$1;
(statearr_34105_35565[(2)] = inst_34026);

(statearr_34105_35565[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (19))){
var inst_33932 = (state_34047[(7)]);
var inst_33936 = cljs.core.chunk_first(inst_33932);
var inst_33938 = cljs.core.chunk_rest(inst_33932);
var inst_33942 = cljs.core.count(inst_33936);
var inst_33908 = inst_33938;
var inst_33909 = inst_33936;
var inst_33910 = inst_33942;
var inst_33911 = (0);
var state_34047__$1 = (function (){var statearr_34106 = state_34047;
(statearr_34106[(13)] = inst_33909);

(statearr_34106[(15)] = inst_33908);

(statearr_34106[(16)] = inst_33911);

(statearr_34106[(17)] = inst_33910);

return statearr_34106;
})();
var statearr_34107_35566 = state_34047__$1;
(statearr_34107_35566[(2)] = null);

(statearr_34107_35566[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (11))){
var inst_33932 = (state_34047[(7)]);
var inst_33908 = (state_34047[(15)]);
var inst_33932__$1 = cljs.core.seq(inst_33908);
var state_34047__$1 = (function (){var statearr_34108 = state_34047;
(statearr_34108[(7)] = inst_33932__$1);

return statearr_34108;
})();
if(inst_33932__$1){
var statearr_34109_35569 = state_34047__$1;
(statearr_34109_35569[(1)] = (16));

} else {
var statearr_34110_35570 = state_34047__$1;
(statearr_34110_35570[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (9))){
var inst_33969 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34111_35571 = state_34047__$1;
(statearr_34111_35571[(2)] = inst_33969);

(statearr_34111_35571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (5))){
var inst_33906 = cljs.core.deref(cs);
var inst_33907 = cljs.core.seq(inst_33906);
var inst_33908 = inst_33907;
var inst_33909 = null;
var inst_33910 = (0);
var inst_33911 = (0);
var state_34047__$1 = (function (){var statearr_34112 = state_34047;
(statearr_34112[(13)] = inst_33909);

(statearr_34112[(15)] = inst_33908);

(statearr_34112[(16)] = inst_33911);

(statearr_34112[(17)] = inst_33910);

return statearr_34112;
})();
var statearr_34113_35572 = state_34047__$1;
(statearr_34113_35572[(2)] = null);

(statearr_34113_35572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (14))){
var state_34047__$1 = state_34047;
var statearr_34114_35573 = state_34047__$1;
(statearr_34114_35573[(2)] = null);

(statearr_34114_35573[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (45))){
var inst_34037 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34115_35575 = state_34047__$1;
(statearr_34115_35575[(2)] = inst_34037);

(statearr_34115_35575[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (26))){
var inst_33972 = (state_34047[(27)]);
var inst_34030 = (state_34047[(2)]);
var inst_34031 = cljs.core.seq(inst_33972);
var state_34047__$1 = (function (){var statearr_34116 = state_34047;
(statearr_34116[(29)] = inst_34030);

return statearr_34116;
})();
if(inst_34031){
var statearr_34117_35578 = state_34047__$1;
(statearr_34117_35578[(1)] = (42));

} else {
var statearr_34118_35579 = state_34047__$1;
(statearr_34118_35579[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (16))){
var inst_33932 = (state_34047[(7)]);
var inst_33934 = cljs.core.chunked_seq_QMARK_(inst_33932);
var state_34047__$1 = state_34047;
if(inst_33934){
var statearr_34123_35580 = state_34047__$1;
(statearr_34123_35580[(1)] = (19));

} else {
var statearr_34126_35581 = state_34047__$1;
(statearr_34126_35581[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (38))){
var inst_34023 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34134_35582 = state_34047__$1;
(statearr_34134_35582[(2)] = inst_34023);

(statearr_34134_35582[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (30))){
var state_34047__$1 = state_34047;
var statearr_34141_35583 = state_34047__$1;
(statearr_34141_35583[(2)] = null);

(statearr_34141_35583[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (10))){
var inst_33909 = (state_34047[(13)]);
var inst_33911 = (state_34047[(16)]);
var inst_33919 = cljs.core._nth(inst_33909,inst_33911);
var inst_33920 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33919,(0),null);
var inst_33921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_33919,(1),null);
var state_34047__$1 = (function (){var statearr_34146 = state_34047;
(statearr_34146[(24)] = inst_33920);

return statearr_34146;
})();
if(cljs.core.truth_(inst_33921)){
var statearr_34147_35585 = state_34047__$1;
(statearr_34147_35585[(1)] = (13));

} else {
var statearr_34148_35586 = state_34047__$1;
(statearr_34148_35586[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (18))){
var inst_33965 = (state_34047[(2)]);
var state_34047__$1 = state_34047;
var statearr_34149_35587 = state_34047__$1;
(statearr_34149_35587[(2)] = inst_33965);

(statearr_34149_35587[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (42))){
var state_34047__$1 = state_34047;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34047__$1,(45),dchan);
} else {
if((state_val_34048 === (37))){
var inst_34001 = (state_34047[(23)]);
var inst_33899 = (state_34047[(10)]);
var inst_34013 = (state_34047[(22)]);
var inst_34013__$1 = cljs.core.first(inst_34001);
var inst_34014 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34013__$1,inst_33899,done);
var state_34047__$1 = (function (){var statearr_34150 = state_34047;
(statearr_34150[(22)] = inst_34013__$1);

return statearr_34150;
})();
if(cljs.core.truth_(inst_34014)){
var statearr_34151_35589 = state_34047__$1;
(statearr_34151_35589[(1)] = (39));

} else {
var statearr_34152_35591 = state_34047__$1;
(statearr_34152_35591[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34048 === (8))){
var inst_33911 = (state_34047[(16)]);
var inst_33910 = (state_34047[(17)]);
var inst_33913 = (inst_33911 < inst_33910);
var inst_33914 = inst_33913;
var state_34047__$1 = state_34047;
if(cljs.core.truth_(inst_33914)){
var statearr_34154_35592 = state_34047__$1;
(statearr_34154_35592[(1)] = (10));

} else {
var statearr_34155_35593 = state_34047__$1;
(statearr_34155_35593[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__32974__auto__ = null;
var cljs$core$async$mult_$_state_machine__32974__auto____0 = (function (){
var statearr_34156 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34156[(0)] = cljs$core$async$mult_$_state_machine__32974__auto__);

(statearr_34156[(1)] = (1));

return statearr_34156;
});
var cljs$core$async$mult_$_state_machine__32974__auto____1 = (function (state_34047){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_34047);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e34159){var ex__32977__auto__ = e34159;
var statearr_34160_35595 = state_34047;
(statearr_34160_35595[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_34047[(4)]))){
var statearr_34161_35596 = state_34047;
(statearr_34161_35596[(1)] = cljs.core.first((state_34047[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35597 = state_34047;
state_34047 = G__35597;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32974__auto__ = function(state_34047){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32974__auto____1.call(this,state_34047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32974__auto____0;
cljs$core$async$mult_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32974__auto____1;
return cljs$core$async$mult_$_state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_34162 = f__33067__auto__();
(statearr_34162[(6)] = c__33066__auto___35514);

return statearr_34162;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34164 = arguments.length;
switch (G__34164) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_35600 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_35600(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_35601 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_35601(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_35602 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_35602(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_35605 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_35605(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_35610 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_35610(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___35612 = arguments.length;
var i__4737__auto___35613 = (0);
while(true){
if((i__4737__auto___35613 < len__4736__auto___35612)){
args__4742__auto__.push((arguments[i__4737__auto___35613]));

var G__35614 = (i__4737__auto___35613 + (1));
i__4737__auto___35613 = G__35614;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34233){
var map__34234 = p__34233;
var map__34234__$1 = (((((!((map__34234 == null))))?(((((map__34234.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34234.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34234):map__34234);
var opts = map__34234__$1;
var statearr_34244_35615 = state;
(statearr_34244_35615[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34245_35616 = state;
(statearr_34245_35616[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_34250_35617 = state;
(statearr_34250_35617[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34229){
var G__34230 = cljs.core.first(seq34229);
var seq34229__$1 = cljs.core.next(seq34229);
var G__34231 = cljs.core.first(seq34229__$1);
var seq34229__$2 = cljs.core.next(seq34229__$1);
var G__34232 = cljs.core.first(seq34229__$2);
var seq34229__$3 = cljs.core.next(seq34229__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34230,G__34231,G__34232,seq34229__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34252 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34252 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34253){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34253 = meta34253;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34254,meta34253__$1){
var self__ = this;
var _34254__$1 = this;
return (new cljs.core.async.t_cljs$core$async34252(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34253__$1));
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34254){
var self__ = this;
var _34254__$1 = this;
return self__.meta34253;
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34252.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34252.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34253","meta34253",-265979329,null)], null);
}));

(cljs.core.async.t_cljs$core$async34252.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34252.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34252");

(cljs.core.async.t_cljs$core$async34252.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34252");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34252.
 */
cljs.core.async.__GT_t_cljs$core$async34252 = (function cljs$core$async$mix_$___GT_t_cljs$core$async34252(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34253){
return (new cljs.core.async.t_cljs$core$async34252(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta34253));
});

}

return (new cljs.core.async.t_cljs$core$async34252(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33066__auto___35643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_34356){
var state_val_34357 = (state_34356[(1)]);
if((state_val_34357 === (7))){
var inst_34271 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34358_35645 = state_34356__$1;
(statearr_34358_35645[(2)] = inst_34271);

(statearr_34358_35645[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (20))){
var inst_34283 = (state_34356[(7)]);
var state_34356__$1 = state_34356;
var statearr_34359_35647 = state_34356__$1;
(statearr_34359_35647[(2)] = inst_34283);

(statearr_34359_35647[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (27))){
var state_34356__$1 = state_34356;
var statearr_34360_35648 = state_34356__$1;
(statearr_34360_35648[(2)] = null);

(statearr_34360_35648[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (1))){
var inst_34258 = (state_34356[(8)]);
var inst_34258__$1 = calc_state();
var inst_34260 = (inst_34258__$1 == null);
var inst_34261 = cljs.core.not(inst_34260);
var state_34356__$1 = (function (){var statearr_34361 = state_34356;
(statearr_34361[(8)] = inst_34258__$1);

return statearr_34361;
})();
if(inst_34261){
var statearr_34362_35650 = state_34356__$1;
(statearr_34362_35650[(1)] = (2));

} else {
var statearr_34363_35652 = state_34356__$1;
(statearr_34363_35652[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (24))){
var inst_34307 = (state_34356[(9)]);
var inst_34316 = (state_34356[(10)]);
var inst_34330 = (state_34356[(11)]);
var inst_34330__$1 = (inst_34307.cljs$core$IFn$_invoke$arity$1 ? inst_34307.cljs$core$IFn$_invoke$arity$1(inst_34316) : inst_34307.call(null,inst_34316));
var state_34356__$1 = (function (){var statearr_34364 = state_34356;
(statearr_34364[(11)] = inst_34330__$1);

return statearr_34364;
})();
if(cljs.core.truth_(inst_34330__$1)){
var statearr_34365_35653 = state_34356__$1;
(statearr_34365_35653[(1)] = (29));

} else {
var statearr_34366_35654 = state_34356__$1;
(statearr_34366_35654[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (4))){
var inst_34274 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
if(cljs.core.truth_(inst_34274)){
var statearr_34367_35655 = state_34356__$1;
(statearr_34367_35655[(1)] = (8));

} else {
var statearr_34368_35656 = state_34356__$1;
(statearr_34368_35656[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (15))){
var inst_34301 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
if(cljs.core.truth_(inst_34301)){
var statearr_34369_35657 = state_34356__$1;
(statearr_34369_35657[(1)] = (19));

} else {
var statearr_34370_35658 = state_34356__$1;
(statearr_34370_35658[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (21))){
var inst_34306 = (state_34356[(12)]);
var inst_34306__$1 = (state_34356[(2)]);
var inst_34307 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34306__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34308 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34306__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34309 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34306__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34356__$1 = (function (){var statearr_34371 = state_34356;
(statearr_34371[(13)] = inst_34308);

(statearr_34371[(12)] = inst_34306__$1);

(statearr_34371[(9)] = inst_34307);

return statearr_34371;
})();
return cljs.core.async.ioc_alts_BANG_(state_34356__$1,(22),inst_34309);
} else {
if((state_val_34357 === (31))){
var inst_34338 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
if(cljs.core.truth_(inst_34338)){
var statearr_34372_35659 = state_34356__$1;
(statearr_34372_35659[(1)] = (32));

} else {
var statearr_34373_35660 = state_34356__$1;
(statearr_34373_35660[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (32))){
var inst_34315 = (state_34356[(14)]);
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34356__$1,(35),out,inst_34315);
} else {
if((state_val_34357 === (33))){
var inst_34306 = (state_34356[(12)]);
var inst_34283 = inst_34306;
var state_34356__$1 = (function (){var statearr_34374 = state_34356;
(statearr_34374[(7)] = inst_34283);

return statearr_34374;
})();
var statearr_34375_35661 = state_34356__$1;
(statearr_34375_35661[(2)] = null);

(statearr_34375_35661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (13))){
var inst_34283 = (state_34356[(7)]);
var inst_34290 = inst_34283.cljs$lang$protocol_mask$partition0$;
var inst_34291 = (inst_34290 & (64));
var inst_34292 = inst_34283.cljs$core$ISeq$;
var inst_34293 = (cljs.core.PROTOCOL_SENTINEL === inst_34292);
var inst_34294 = ((inst_34291) || (inst_34293));
var state_34356__$1 = state_34356;
if(cljs.core.truth_(inst_34294)){
var statearr_34376_35662 = state_34356__$1;
(statearr_34376_35662[(1)] = (16));

} else {
var statearr_34377_35663 = state_34356__$1;
(statearr_34377_35663[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (22))){
var inst_34315 = (state_34356[(14)]);
var inst_34316 = (state_34356[(10)]);
var inst_34314 = (state_34356[(2)]);
var inst_34315__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34314,(0),null);
var inst_34316__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34314,(1),null);
var inst_34317 = (inst_34315__$1 == null);
var inst_34318 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34316__$1,change);
var inst_34319 = ((inst_34317) || (inst_34318));
var state_34356__$1 = (function (){var statearr_34378 = state_34356;
(statearr_34378[(14)] = inst_34315__$1);

(statearr_34378[(10)] = inst_34316__$1);

return statearr_34378;
})();
if(cljs.core.truth_(inst_34319)){
var statearr_34379_35664 = state_34356__$1;
(statearr_34379_35664[(1)] = (23));

} else {
var statearr_34380_35665 = state_34356__$1;
(statearr_34380_35665[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (36))){
var inst_34306 = (state_34356[(12)]);
var inst_34283 = inst_34306;
var state_34356__$1 = (function (){var statearr_34381 = state_34356;
(statearr_34381[(7)] = inst_34283);

return statearr_34381;
})();
var statearr_34382_35670 = state_34356__$1;
(statearr_34382_35670[(2)] = null);

(statearr_34382_35670[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (29))){
var inst_34330 = (state_34356[(11)]);
var state_34356__$1 = state_34356;
var statearr_34383_35673 = state_34356__$1;
(statearr_34383_35673[(2)] = inst_34330);

(statearr_34383_35673[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (6))){
var state_34356__$1 = state_34356;
var statearr_34384_35674 = state_34356__$1;
(statearr_34384_35674[(2)] = false);

(statearr_34384_35674[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (28))){
var inst_34326 = (state_34356[(2)]);
var inst_34327 = calc_state();
var inst_34283 = inst_34327;
var state_34356__$1 = (function (){var statearr_34385 = state_34356;
(statearr_34385[(7)] = inst_34283);

(statearr_34385[(15)] = inst_34326);

return statearr_34385;
})();
var statearr_34386_35675 = state_34356__$1;
(statearr_34386_35675[(2)] = null);

(statearr_34386_35675[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (25))){
var inst_34352 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34387_35680 = state_34356__$1;
(statearr_34387_35680[(2)] = inst_34352);

(statearr_34387_35680[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (34))){
var inst_34350 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34388_35682 = state_34356__$1;
(statearr_34388_35682[(2)] = inst_34350);

(statearr_34388_35682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (17))){
var state_34356__$1 = state_34356;
var statearr_34389_35683 = state_34356__$1;
(statearr_34389_35683[(2)] = false);

(statearr_34389_35683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (3))){
var state_34356__$1 = state_34356;
var statearr_34390_35687 = state_34356__$1;
(statearr_34390_35687[(2)] = false);

(statearr_34390_35687[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (12))){
var inst_34354 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34356__$1,inst_34354);
} else {
if((state_val_34357 === (2))){
var inst_34258 = (state_34356[(8)]);
var inst_34263 = inst_34258.cljs$lang$protocol_mask$partition0$;
var inst_34264 = (inst_34263 & (64));
var inst_34265 = inst_34258.cljs$core$ISeq$;
var inst_34266 = (cljs.core.PROTOCOL_SENTINEL === inst_34265);
var inst_34267 = ((inst_34264) || (inst_34266));
var state_34356__$1 = state_34356;
if(cljs.core.truth_(inst_34267)){
var statearr_34391_35688 = state_34356__$1;
(statearr_34391_35688[(1)] = (5));

} else {
var statearr_34392_35689 = state_34356__$1;
(statearr_34392_35689[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (23))){
var inst_34315 = (state_34356[(14)]);
var inst_34321 = (inst_34315 == null);
var state_34356__$1 = state_34356;
if(cljs.core.truth_(inst_34321)){
var statearr_34393_35690 = state_34356__$1;
(statearr_34393_35690[(1)] = (26));

} else {
var statearr_34394_35692 = state_34356__$1;
(statearr_34394_35692[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (35))){
var inst_34341 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
if(cljs.core.truth_(inst_34341)){
var statearr_34395_35693 = state_34356__$1;
(statearr_34395_35693[(1)] = (36));

} else {
var statearr_34396_35694 = state_34356__$1;
(statearr_34396_35694[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (19))){
var inst_34283 = (state_34356[(7)]);
var inst_34303 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34283);
var state_34356__$1 = state_34356;
var statearr_34397_35697 = state_34356__$1;
(statearr_34397_35697[(2)] = inst_34303);

(statearr_34397_35697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (11))){
var inst_34283 = (state_34356[(7)]);
var inst_34287 = (inst_34283 == null);
var inst_34288 = cljs.core.not(inst_34287);
var state_34356__$1 = state_34356;
if(inst_34288){
var statearr_34398_35699 = state_34356__$1;
(statearr_34398_35699[(1)] = (13));

} else {
var statearr_34399_35700 = state_34356__$1;
(statearr_34399_35700[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (9))){
var inst_34258 = (state_34356[(8)]);
var state_34356__$1 = state_34356;
var statearr_34400_35705 = state_34356__$1;
(statearr_34400_35705[(2)] = inst_34258);

(statearr_34400_35705[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (5))){
var state_34356__$1 = state_34356;
var statearr_34401_35706 = state_34356__$1;
(statearr_34401_35706[(2)] = true);

(statearr_34401_35706[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (14))){
var state_34356__$1 = state_34356;
var statearr_34402_35710 = state_34356__$1;
(statearr_34402_35710[(2)] = false);

(statearr_34402_35710[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (26))){
var inst_34316 = (state_34356[(10)]);
var inst_34323 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34316);
var state_34356__$1 = state_34356;
var statearr_34403_35711 = state_34356__$1;
(statearr_34403_35711[(2)] = inst_34323);

(statearr_34403_35711[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (16))){
var state_34356__$1 = state_34356;
var statearr_34404_35712 = state_34356__$1;
(statearr_34404_35712[(2)] = true);

(statearr_34404_35712[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (38))){
var inst_34346 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34405_35713 = state_34356__$1;
(statearr_34405_35713[(2)] = inst_34346);

(statearr_34405_35713[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (30))){
var inst_34308 = (state_34356[(13)]);
var inst_34307 = (state_34356[(9)]);
var inst_34316 = (state_34356[(10)]);
var inst_34333 = cljs.core.empty_QMARK_(inst_34307);
var inst_34334 = (inst_34308.cljs$core$IFn$_invoke$arity$1 ? inst_34308.cljs$core$IFn$_invoke$arity$1(inst_34316) : inst_34308.call(null,inst_34316));
var inst_34335 = cljs.core.not(inst_34334);
var inst_34336 = ((inst_34333) && (inst_34335));
var state_34356__$1 = state_34356;
var statearr_34406_35714 = state_34356__$1;
(statearr_34406_35714[(2)] = inst_34336);

(statearr_34406_35714[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (10))){
var inst_34258 = (state_34356[(8)]);
var inst_34279 = (state_34356[(2)]);
var inst_34280 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34279,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34281 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34279,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34282 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34279,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34283 = inst_34258;
var state_34356__$1 = (function (){var statearr_34407 = state_34356;
(statearr_34407[(16)] = inst_34280);

(statearr_34407[(7)] = inst_34283);

(statearr_34407[(17)] = inst_34282);

(statearr_34407[(18)] = inst_34281);

return statearr_34407;
})();
var statearr_34408_35716 = state_34356__$1;
(statearr_34408_35716[(2)] = null);

(statearr_34408_35716[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (18))){
var inst_34298 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34409_35720 = state_34356__$1;
(statearr_34409_35720[(2)] = inst_34298);

(statearr_34409_35720[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (37))){
var state_34356__$1 = state_34356;
var statearr_34410_35721 = state_34356__$1;
(statearr_34410_35721[(2)] = null);

(statearr_34410_35721[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (8))){
var inst_34258 = (state_34356[(8)]);
var inst_34276 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_34258);
var state_34356__$1 = state_34356;
var statearr_34411_35723 = state_34356__$1;
(statearr_34411_35723[(2)] = inst_34276);

(statearr_34411_35723[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__32974__auto__ = null;
var cljs$core$async$mix_$_state_machine__32974__auto____0 = (function (){
var statearr_34412 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34412[(0)] = cljs$core$async$mix_$_state_machine__32974__auto__);

(statearr_34412[(1)] = (1));

return statearr_34412;
});
var cljs$core$async$mix_$_state_machine__32974__auto____1 = (function (state_34356){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_34356);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e34413){var ex__32977__auto__ = e34413;
var statearr_34414_35727 = state_34356;
(statearr_34414_35727[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_34356[(4)]))){
var statearr_34415_35728 = state_34356;
(statearr_34415_35728[(1)] = cljs.core.first((state_34356[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35730 = state_34356;
state_34356 = G__35730;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32974__auto__ = function(state_34356){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32974__auto____1.call(this,state_34356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32974__auto____0;
cljs$core$async$mix_$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32974__auto____1;
return cljs$core$async$mix_$_state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_34416 = f__33067__auto__();
(statearr_34416[(6)] = c__33066__auto___35643);

return statearr_34416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_35738 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_35738(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_35742 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_35742(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_35744 = (function() {
var G__35745 = null;
var G__35745__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__35745__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__35745 = function(p,v){
switch(arguments.length){
case 1:
return G__35745__1.call(this,p);
case 2:
return G__35745__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__35745.cljs$core$IFn$_invoke$arity$1 = G__35745__1;
G__35745.cljs$core$IFn$_invoke$arity$2 = G__35745__2;
return G__35745;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34421 = arguments.length;
switch (G__34421) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35744(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_35744(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34427 = arguments.length;
switch (G__34427) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34424_SHARP_){
if(cljs.core.truth_((p1__34424_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34424_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34424_SHARP_.call(null,topic)))){
return p1__34424_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34424_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34430 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34431){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34431 = meta34431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34432,meta34431__$1){
var self__ = this;
var _34432__$1 = this;
return (new cljs.core.async.t_cljs$core$async34430(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34431__$1));
}));

(cljs.core.async.t_cljs$core$async34430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34432){
var self__ = this;
var _34432__$1 = this;
return self__.meta34431;
}));

(cljs.core.async.t_cljs$core$async34430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34430.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34430.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34430.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34430.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34431","meta34431",1395574762,null)], null);
}));

(cljs.core.async.t_cljs$core$async34430.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34430");

(cljs.core.async.t_cljs$core$async34430.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34430");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34430.
 */
cljs.core.async.__GT_t_cljs$core$async34430 = (function cljs$core$async$__GT_t_cljs$core$async34430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34431){
return (new cljs.core.async.t_cljs$core$async34430(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34431));
});

}

return (new cljs.core.async.t_cljs$core$async34430(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33066__auto___35772 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_34505){
var state_val_34506 = (state_34505[(1)]);
if((state_val_34506 === (7))){
var inst_34501 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34507_35776 = state_34505__$1;
(statearr_34507_35776[(2)] = inst_34501);

(statearr_34507_35776[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (20))){
var state_34505__$1 = state_34505;
var statearr_34508_35780 = state_34505__$1;
(statearr_34508_35780[(2)] = null);

(statearr_34508_35780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (1))){
var state_34505__$1 = state_34505;
var statearr_34509_35782 = state_34505__$1;
(statearr_34509_35782[(2)] = null);

(statearr_34509_35782[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (24))){
var inst_34484 = (state_34505[(7)]);
var inst_34493 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34484);
var state_34505__$1 = state_34505;
var statearr_34510_35785 = state_34505__$1;
(statearr_34510_35785[(2)] = inst_34493);

(statearr_34510_35785[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (4))){
var inst_34436 = (state_34505[(8)]);
var inst_34436__$1 = (state_34505[(2)]);
var inst_34437 = (inst_34436__$1 == null);
var state_34505__$1 = (function (){var statearr_34511 = state_34505;
(statearr_34511[(8)] = inst_34436__$1);

return statearr_34511;
})();
if(cljs.core.truth_(inst_34437)){
var statearr_34512_35787 = state_34505__$1;
(statearr_34512_35787[(1)] = (5));

} else {
var statearr_34513_35788 = state_34505__$1;
(statearr_34513_35788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (15))){
var inst_34478 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34514_35789 = state_34505__$1;
(statearr_34514_35789[(2)] = inst_34478);

(statearr_34514_35789[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (21))){
var inst_34498 = (state_34505[(2)]);
var state_34505__$1 = (function (){var statearr_34515 = state_34505;
(statearr_34515[(9)] = inst_34498);

return statearr_34515;
})();
var statearr_34516_35794 = state_34505__$1;
(statearr_34516_35794[(2)] = null);

(statearr_34516_35794[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (13))){
var inst_34460 = (state_34505[(10)]);
var inst_34462 = cljs.core.chunked_seq_QMARK_(inst_34460);
var state_34505__$1 = state_34505;
if(inst_34462){
var statearr_34517_35796 = state_34505__$1;
(statearr_34517_35796[(1)] = (16));

} else {
var statearr_34518_35797 = state_34505__$1;
(statearr_34518_35797[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (22))){
var inst_34490 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
if(cljs.core.truth_(inst_34490)){
var statearr_34519_35798 = state_34505__$1;
(statearr_34519_35798[(1)] = (23));

} else {
var statearr_34520_35801 = state_34505__$1;
(statearr_34520_35801[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (6))){
var inst_34436 = (state_34505[(8)]);
var inst_34484 = (state_34505[(7)]);
var inst_34486 = (state_34505[(11)]);
var inst_34484__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34436) : topic_fn.call(null,inst_34436));
var inst_34485 = cljs.core.deref(mults);
var inst_34486__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34485,inst_34484__$1);
var state_34505__$1 = (function (){var statearr_34521 = state_34505;
(statearr_34521[(7)] = inst_34484__$1);

(statearr_34521[(11)] = inst_34486__$1);

return statearr_34521;
})();
if(cljs.core.truth_(inst_34486__$1)){
var statearr_34522_35804 = state_34505__$1;
(statearr_34522_35804[(1)] = (19));

} else {
var statearr_34523_35805 = state_34505__$1;
(statearr_34523_35805[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (25))){
var inst_34495 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34524_35806 = state_34505__$1;
(statearr_34524_35806[(2)] = inst_34495);

(statearr_34524_35806[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (17))){
var inst_34460 = (state_34505[(10)]);
var inst_34469 = cljs.core.first(inst_34460);
var inst_34470 = cljs.core.async.muxch_STAR_(inst_34469);
var inst_34471 = cljs.core.async.close_BANG_(inst_34470);
var inst_34472 = cljs.core.next(inst_34460);
var inst_34446 = inst_34472;
var inst_34447 = null;
var inst_34448 = (0);
var inst_34449 = (0);
var state_34505__$1 = (function (){var statearr_34525 = state_34505;
(statearr_34525[(12)] = inst_34447);

(statearr_34525[(13)] = inst_34471);

(statearr_34525[(14)] = inst_34449);

(statearr_34525[(15)] = inst_34448);

(statearr_34525[(16)] = inst_34446);

return statearr_34525;
})();
var statearr_34526_35810 = state_34505__$1;
(statearr_34526_35810[(2)] = null);

(statearr_34526_35810[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (3))){
var inst_34503 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34505__$1,inst_34503);
} else {
if((state_val_34506 === (12))){
var inst_34480 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34527_35815 = state_34505__$1;
(statearr_34527_35815[(2)] = inst_34480);

(statearr_34527_35815[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (2))){
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34505__$1,(4),ch);
} else {
if((state_val_34506 === (23))){
var state_34505__$1 = state_34505;
var statearr_34528_35818 = state_34505__$1;
(statearr_34528_35818[(2)] = null);

(statearr_34528_35818[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (19))){
var inst_34436 = (state_34505[(8)]);
var inst_34486 = (state_34505[(11)]);
var inst_34488 = cljs.core.async.muxch_STAR_(inst_34486);
var state_34505__$1 = state_34505;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34505__$1,(22),inst_34488,inst_34436);
} else {
if((state_val_34506 === (11))){
var inst_34460 = (state_34505[(10)]);
var inst_34446 = (state_34505[(16)]);
var inst_34460__$1 = cljs.core.seq(inst_34446);
var state_34505__$1 = (function (){var statearr_34529 = state_34505;
(statearr_34529[(10)] = inst_34460__$1);

return statearr_34529;
})();
if(inst_34460__$1){
var statearr_34530_35821 = state_34505__$1;
(statearr_34530_35821[(1)] = (13));

} else {
var statearr_34531_35822 = state_34505__$1;
(statearr_34531_35822[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (9))){
var inst_34482 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34532_35825 = state_34505__$1;
(statearr_34532_35825[(2)] = inst_34482);

(statearr_34532_35825[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (5))){
var inst_34443 = cljs.core.deref(mults);
var inst_34444 = cljs.core.vals(inst_34443);
var inst_34445 = cljs.core.seq(inst_34444);
var inst_34446 = inst_34445;
var inst_34447 = null;
var inst_34448 = (0);
var inst_34449 = (0);
var state_34505__$1 = (function (){var statearr_34533 = state_34505;
(statearr_34533[(12)] = inst_34447);

(statearr_34533[(14)] = inst_34449);

(statearr_34533[(15)] = inst_34448);

(statearr_34533[(16)] = inst_34446);

return statearr_34533;
})();
var statearr_34534_35828 = state_34505__$1;
(statearr_34534_35828[(2)] = null);

(statearr_34534_35828[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (14))){
var state_34505__$1 = state_34505;
var statearr_34538_35829 = state_34505__$1;
(statearr_34538_35829[(2)] = null);

(statearr_34538_35829[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (16))){
var inst_34460 = (state_34505[(10)]);
var inst_34464 = cljs.core.chunk_first(inst_34460);
var inst_34465 = cljs.core.chunk_rest(inst_34460);
var inst_34466 = cljs.core.count(inst_34464);
var inst_34446 = inst_34465;
var inst_34447 = inst_34464;
var inst_34448 = inst_34466;
var inst_34449 = (0);
var state_34505__$1 = (function (){var statearr_34539 = state_34505;
(statearr_34539[(12)] = inst_34447);

(statearr_34539[(14)] = inst_34449);

(statearr_34539[(15)] = inst_34448);

(statearr_34539[(16)] = inst_34446);

return statearr_34539;
})();
var statearr_34540_35834 = state_34505__$1;
(statearr_34540_35834[(2)] = null);

(statearr_34540_35834[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (10))){
var inst_34447 = (state_34505[(12)]);
var inst_34449 = (state_34505[(14)]);
var inst_34448 = (state_34505[(15)]);
var inst_34446 = (state_34505[(16)]);
var inst_34454 = cljs.core._nth(inst_34447,inst_34449);
var inst_34455 = cljs.core.async.muxch_STAR_(inst_34454);
var inst_34456 = cljs.core.async.close_BANG_(inst_34455);
var inst_34457 = (inst_34449 + (1));
var tmp34535 = inst_34447;
var tmp34536 = inst_34448;
var tmp34537 = inst_34446;
var inst_34446__$1 = tmp34537;
var inst_34447__$1 = tmp34535;
var inst_34448__$1 = tmp34536;
var inst_34449__$1 = inst_34457;
var state_34505__$1 = (function (){var statearr_34541 = state_34505;
(statearr_34541[(12)] = inst_34447__$1);

(statearr_34541[(17)] = inst_34456);

(statearr_34541[(14)] = inst_34449__$1);

(statearr_34541[(15)] = inst_34448__$1);

(statearr_34541[(16)] = inst_34446__$1);

return statearr_34541;
})();
var statearr_34543_35840 = state_34505__$1;
(statearr_34543_35840[(2)] = null);

(statearr_34543_35840[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (18))){
var inst_34475 = (state_34505[(2)]);
var state_34505__$1 = state_34505;
var statearr_34544_35841 = state_34505__$1;
(statearr_34544_35841[(2)] = inst_34475);

(statearr_34544_35841[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34506 === (8))){
var inst_34449 = (state_34505[(14)]);
var inst_34448 = (state_34505[(15)]);
var inst_34451 = (inst_34449 < inst_34448);
var inst_34452 = inst_34451;
var state_34505__$1 = state_34505;
if(cljs.core.truth_(inst_34452)){
var statearr_34545_35845 = state_34505__$1;
(statearr_34545_35845[(1)] = (10));

} else {
var statearr_34546_35846 = state_34505__$1;
(statearr_34546_35846[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_34548 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34548[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_34548[(1)] = (1));

return statearr_34548;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_34505){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_34505);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e34549){var ex__32977__auto__ = e34549;
var statearr_34550_35851 = state_34505;
(statearr_34550_35851[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_34505[(4)]))){
var statearr_34551_35852 = state_34505;
(statearr_34551_35852[(1)] = cljs.core.first((state_34505[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35854 = state_34505;
state_34505 = G__35854;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_34505){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_34505);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_34552 = f__33067__auto__();
(statearr_34552[(6)] = c__33066__auto___35772);

return statearr_34552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__34554 = arguments.length;
switch (G__34554) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__34556 = arguments.length;
switch (G__34556) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__34558 = arguments.length;
switch (G__34558) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__33066__auto___35883 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_34602){
var state_val_34603 = (state_34602[(1)]);
if((state_val_34603 === (7))){
var state_34602__$1 = state_34602;
var statearr_34604_35885 = state_34602__$1;
(statearr_34604_35885[(2)] = null);

(statearr_34604_35885[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (1))){
var state_34602__$1 = state_34602;
var statearr_34605_35886 = state_34602__$1;
(statearr_34605_35886[(2)] = null);

(statearr_34605_35886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (4))){
var inst_34561 = (state_34602[(7)]);
var inst_34562 = (state_34602[(8)]);
var inst_34564 = (inst_34562 < inst_34561);
var state_34602__$1 = state_34602;
if(cljs.core.truth_(inst_34564)){
var statearr_34606_35889 = state_34602__$1;
(statearr_34606_35889[(1)] = (6));

} else {
var statearr_34607_35891 = state_34602__$1;
(statearr_34607_35891[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (15))){
var inst_34588 = (state_34602[(9)]);
var inst_34593 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_34588);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34602__$1,(17),out,inst_34593);
} else {
if((state_val_34603 === (13))){
var inst_34588 = (state_34602[(9)]);
var inst_34588__$1 = (state_34602[(2)]);
var inst_34589 = cljs.core.some(cljs.core.nil_QMARK_,inst_34588__$1);
var state_34602__$1 = (function (){var statearr_34608 = state_34602;
(statearr_34608[(9)] = inst_34588__$1);

return statearr_34608;
})();
if(cljs.core.truth_(inst_34589)){
var statearr_34609_35893 = state_34602__$1;
(statearr_34609_35893[(1)] = (14));

} else {
var statearr_34610_35894 = state_34602__$1;
(statearr_34610_35894[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (6))){
var state_34602__$1 = state_34602;
var statearr_34611_35895 = state_34602__$1;
(statearr_34611_35895[(2)] = null);

(statearr_34611_35895[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (17))){
var inst_34595 = (state_34602[(2)]);
var state_34602__$1 = (function (){var statearr_34613 = state_34602;
(statearr_34613[(10)] = inst_34595);

return statearr_34613;
})();
var statearr_34614_35899 = state_34602__$1;
(statearr_34614_35899[(2)] = null);

(statearr_34614_35899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (3))){
var inst_34600 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34602__$1,inst_34600);
} else {
if((state_val_34603 === (12))){
var _ = (function (){var statearr_34615 = state_34602;
(statearr_34615[(4)] = cljs.core.rest((state_34602[(4)])));

return statearr_34615;
})();
var state_34602__$1 = state_34602;
var ex34612 = (state_34602__$1[(2)]);
var statearr_34616_35901 = state_34602__$1;
(statearr_34616_35901[(5)] = ex34612);


if((ex34612 instanceof Object)){
var statearr_34617_35902 = state_34602__$1;
(statearr_34617_35902[(1)] = (11));

(statearr_34617_35902[(5)] = null);

} else {
throw ex34612;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (2))){
var inst_34560 = cljs.core.reset_BANG_(dctr,cnt);
var inst_34561 = cnt;
var inst_34562 = (0);
var state_34602__$1 = (function (){var statearr_34618 = state_34602;
(statearr_34618[(11)] = inst_34560);

(statearr_34618[(7)] = inst_34561);

(statearr_34618[(8)] = inst_34562);

return statearr_34618;
})();
var statearr_34619_35906 = state_34602__$1;
(statearr_34619_35906[(2)] = null);

(statearr_34619_35906[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (11))){
var inst_34567 = (state_34602[(2)]);
var inst_34568 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_34602__$1 = (function (){var statearr_34620 = state_34602;
(statearr_34620[(12)] = inst_34567);

return statearr_34620;
})();
var statearr_34621_35907 = state_34602__$1;
(statearr_34621_35907[(2)] = inst_34568);

(statearr_34621_35907[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (9))){
var inst_34562 = (state_34602[(8)]);
var _ = (function (){var statearr_34622 = state_34602;
(statearr_34622[(4)] = cljs.core.cons((12),(state_34602[(4)])));

return statearr_34622;
})();
var inst_34574 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_34562) : chs__$1.call(null,inst_34562));
var inst_34575 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_34562) : done.call(null,inst_34562));
var inst_34576 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_34574,inst_34575);
var ___$1 = (function (){var statearr_34623 = state_34602;
(statearr_34623[(4)] = cljs.core.rest((state_34602[(4)])));

return statearr_34623;
})();
var state_34602__$1 = state_34602;
var statearr_34624_35913 = state_34602__$1;
(statearr_34624_35913[(2)] = inst_34576);

(statearr_34624_35913[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (5))){
var inst_34586 = (state_34602[(2)]);
var state_34602__$1 = (function (){var statearr_34625 = state_34602;
(statearr_34625[(13)] = inst_34586);

return statearr_34625;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34602__$1,(13),dchan);
} else {
if((state_val_34603 === (14))){
var inst_34591 = cljs.core.async.close_BANG_(out);
var state_34602__$1 = state_34602;
var statearr_34626_35924 = state_34602__$1;
(statearr_34626_35924[(2)] = inst_34591);

(statearr_34626_35924[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (16))){
var inst_34598 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34627_35929 = state_34602__$1;
(statearr_34627_35929[(2)] = inst_34598);

(statearr_34627_35929[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (10))){
var inst_34562 = (state_34602[(8)]);
var inst_34579 = (state_34602[(2)]);
var inst_34580 = (inst_34562 + (1));
var inst_34562__$1 = inst_34580;
var state_34602__$1 = (function (){var statearr_34628 = state_34602;
(statearr_34628[(14)] = inst_34579);

(statearr_34628[(8)] = inst_34562__$1);

return statearr_34628;
})();
var statearr_34629_35936 = state_34602__$1;
(statearr_34629_35936[(2)] = null);

(statearr_34629_35936[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (8))){
var inst_34584 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34630_35938 = state_34602__$1;
(statearr_34630_35938[(2)] = inst_34584);

(statearr_34630_35938[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_34631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34631[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_34631[(1)] = (1));

return statearr_34631;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_34602){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_34602);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e34632){var ex__32977__auto__ = e34632;
var statearr_34633_35946 = state_34602;
(statearr_34633_35946[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_34602[(4)]))){
var statearr_34634_35952 = state_34602;
(statearr_34634_35952[(1)] = cljs.core.first((state_34602[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35954 = state_34602;
state_34602 = G__35954;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_34602){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_34602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_34635 = f__33067__auto__();
(statearr_34635[(6)] = c__33066__auto___35883);

return statearr_34635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__34638 = arguments.length;
switch (G__34638) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33066__auto___35971 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_34670){
var state_val_34671 = (state_34670[(1)]);
if((state_val_34671 === (7))){
var inst_34650 = (state_34670[(7)]);
var inst_34649 = (state_34670[(8)]);
var inst_34649__$1 = (state_34670[(2)]);
var inst_34650__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34649__$1,(0),null);
var inst_34651 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34649__$1,(1),null);
var inst_34652 = (inst_34650__$1 == null);
var state_34670__$1 = (function (){var statearr_34672 = state_34670;
(statearr_34672[(9)] = inst_34651);

(statearr_34672[(7)] = inst_34650__$1);

(statearr_34672[(8)] = inst_34649__$1);

return statearr_34672;
})();
if(cljs.core.truth_(inst_34652)){
var statearr_34673_35985 = state_34670__$1;
(statearr_34673_35985[(1)] = (8));

} else {
var statearr_34675_35986 = state_34670__$1;
(statearr_34675_35986[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (1))){
var inst_34639 = cljs.core.vec(chs);
var inst_34640 = inst_34639;
var state_34670__$1 = (function (){var statearr_34676 = state_34670;
(statearr_34676[(10)] = inst_34640);

return statearr_34676;
})();
var statearr_34677_35988 = state_34670__$1;
(statearr_34677_35988[(2)] = null);

(statearr_34677_35988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (4))){
var inst_34640 = (state_34670[(10)]);
var state_34670__$1 = state_34670;
return cljs.core.async.ioc_alts_BANG_(state_34670__$1,(7),inst_34640);
} else {
if((state_val_34671 === (6))){
var inst_34666 = (state_34670[(2)]);
var state_34670__$1 = state_34670;
var statearr_34678_35992 = state_34670__$1;
(statearr_34678_35992[(2)] = inst_34666);

(statearr_34678_35992[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (3))){
var inst_34668 = (state_34670[(2)]);
var state_34670__$1 = state_34670;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34670__$1,inst_34668);
} else {
if((state_val_34671 === (2))){
var inst_34640 = (state_34670[(10)]);
var inst_34642 = cljs.core.count(inst_34640);
var inst_34643 = (inst_34642 > (0));
var state_34670__$1 = state_34670;
if(cljs.core.truth_(inst_34643)){
var statearr_34680_36003 = state_34670__$1;
(statearr_34680_36003[(1)] = (4));

} else {
var statearr_34681_36004 = state_34670__$1;
(statearr_34681_36004[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (11))){
var inst_34640 = (state_34670[(10)]);
var inst_34659 = (state_34670[(2)]);
var tmp34679 = inst_34640;
var inst_34640__$1 = tmp34679;
var state_34670__$1 = (function (){var statearr_34682 = state_34670;
(statearr_34682[(11)] = inst_34659);

(statearr_34682[(10)] = inst_34640__$1);

return statearr_34682;
})();
var statearr_34683_36008 = state_34670__$1;
(statearr_34683_36008[(2)] = null);

(statearr_34683_36008[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (9))){
var inst_34650 = (state_34670[(7)]);
var state_34670__$1 = state_34670;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34670__$1,(11),out,inst_34650);
} else {
if((state_val_34671 === (5))){
var inst_34664 = cljs.core.async.close_BANG_(out);
var state_34670__$1 = state_34670;
var statearr_34684_36011 = state_34670__$1;
(statearr_34684_36011[(2)] = inst_34664);

(statearr_34684_36011[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (10))){
var inst_34662 = (state_34670[(2)]);
var state_34670__$1 = state_34670;
var statearr_34685_36014 = state_34670__$1;
(statearr_34685_36014[(2)] = inst_34662);

(statearr_34685_36014[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34671 === (8))){
var inst_34651 = (state_34670[(9)]);
var inst_34650 = (state_34670[(7)]);
var inst_34640 = (state_34670[(10)]);
var inst_34649 = (state_34670[(8)]);
var inst_34654 = (function (){var cs = inst_34640;
var vec__34645 = inst_34649;
var v = inst_34650;
var c = inst_34651;
return (function (p1__34636_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__34636_SHARP_);
});
})();
var inst_34655 = cljs.core.filterv(inst_34654,inst_34640);
var inst_34640__$1 = inst_34655;
var state_34670__$1 = (function (){var statearr_34686 = state_34670;
(statearr_34686[(10)] = inst_34640__$1);

return statearr_34686;
})();
var statearr_34687_36026 = state_34670__$1;
(statearr_34687_36026[(2)] = null);

(statearr_34687_36026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_34688 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34688[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_34688[(1)] = (1));

return statearr_34688;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_34670){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_34670);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e34689){var ex__32977__auto__ = e34689;
var statearr_34690_36031 = state_34670;
(statearr_34690_36031[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_34670[(4)]))){
var statearr_34691_36032 = state_34670;
(statearr_34691_36032[(1)] = cljs.core.first((state_34670[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36034 = state_34670;
state_34670 = G__36034;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_34670){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_34670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_34692 = f__33067__auto__();
(statearr_34692[(6)] = c__33066__auto___35971);

return statearr_34692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__34694 = arguments.length;
switch (G__34694) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33066__auto___36048 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_34718){
var state_val_34719 = (state_34718[(1)]);
if((state_val_34719 === (7))){
var inst_34700 = (state_34718[(7)]);
var inst_34700__$1 = (state_34718[(2)]);
var inst_34701 = (inst_34700__$1 == null);
var inst_34702 = cljs.core.not(inst_34701);
var state_34718__$1 = (function (){var statearr_34720 = state_34718;
(statearr_34720[(7)] = inst_34700__$1);

return statearr_34720;
})();
if(inst_34702){
var statearr_34721_36049 = state_34718__$1;
(statearr_34721_36049[(1)] = (8));

} else {
var statearr_34722_36050 = state_34718__$1;
(statearr_34722_36050[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (1))){
var inst_34695 = (0);
var state_34718__$1 = (function (){var statearr_34723 = state_34718;
(statearr_34723[(8)] = inst_34695);

return statearr_34723;
})();
var statearr_34724_36051 = state_34718__$1;
(statearr_34724_36051[(2)] = null);

(statearr_34724_36051[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (4))){
var state_34718__$1 = state_34718;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34718__$1,(7),ch);
} else {
if((state_val_34719 === (6))){
var inst_34713 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
var statearr_34725_36052 = state_34718__$1;
(statearr_34725_36052[(2)] = inst_34713);

(statearr_34725_36052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (3))){
var inst_34715 = (state_34718[(2)]);
var inst_34716 = cljs.core.async.close_BANG_(out);
var state_34718__$1 = (function (){var statearr_34727 = state_34718;
(statearr_34727[(9)] = inst_34715);

return statearr_34727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_34718__$1,inst_34716);
} else {
if((state_val_34719 === (2))){
var inst_34695 = (state_34718[(8)]);
var inst_34697 = (inst_34695 < n);
var state_34718__$1 = state_34718;
if(cljs.core.truth_(inst_34697)){
var statearr_34730_36055 = state_34718__$1;
(statearr_34730_36055[(1)] = (4));

} else {
var statearr_34731_36056 = state_34718__$1;
(statearr_34731_36056[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (11))){
var inst_34695 = (state_34718[(8)]);
var inst_34705 = (state_34718[(2)]);
var inst_34706 = (inst_34695 + (1));
var inst_34695__$1 = inst_34706;
var state_34718__$1 = (function (){var statearr_34733 = state_34718;
(statearr_34733[(8)] = inst_34695__$1);

(statearr_34733[(10)] = inst_34705);

return statearr_34733;
})();
var statearr_34734_36057 = state_34718__$1;
(statearr_34734_36057[(2)] = null);

(statearr_34734_36057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (9))){
var state_34718__$1 = state_34718;
var statearr_34735_36058 = state_34718__$1;
(statearr_34735_36058[(2)] = null);

(statearr_34735_36058[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (5))){
var state_34718__$1 = state_34718;
var statearr_34737_36059 = state_34718__$1;
(statearr_34737_36059[(2)] = null);

(statearr_34737_36059[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (10))){
var inst_34710 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
var statearr_34739_36062 = state_34718__$1;
(statearr_34739_36062[(2)] = inst_34710);

(statearr_34739_36062[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (8))){
var inst_34700 = (state_34718[(7)]);
var state_34718__$1 = state_34718;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34718__$1,(11),out,inst_34700);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_34740 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34740[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_34740[(1)] = (1));

return statearr_34740;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_34718){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_34718);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e34742){var ex__32977__auto__ = e34742;
var statearr_34744_36063 = state_34718;
(statearr_34744_36063[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_34718[(4)]))){
var statearr_34746_36064 = state_34718;
(statearr_34746_36064[(1)] = cljs.core.first((state_34718[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36065 = state_34718;
state_34718 = G__36065;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_34718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_34718);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_34747 = f__33067__auto__();
(statearr_34747[(6)] = c__33066__auto___36048);

return statearr_34747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34752 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34752 = (function (f,ch,meta34753){
this.f = f;
this.ch = ch;
this.meta34753 = meta34753;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34754,meta34753__$1){
var self__ = this;
var _34754__$1 = this;
return (new cljs.core.async.t_cljs$core$async34752(self__.f,self__.ch,meta34753__$1));
}));

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34754){
var self__ = this;
var _34754__$1 = this;
return self__.meta34753;
}));

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34766 = (function (f,ch,meta34753,_,fn1,meta34767){
this.f = f;
this.ch = ch;
this.meta34753 = meta34753;
this._ = _;
this.fn1 = fn1;
this.meta34767 = meta34767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34768,meta34767__$1){
var self__ = this;
var _34768__$1 = this;
return (new cljs.core.async.t_cljs$core$async34766(self__.f,self__.ch,self__.meta34753,self__._,self__.fn1,meta34767__$1));
}));

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34768){
var self__ = this;
var _34768__$1 = this;
return self__.meta34767;
}));

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async34766.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__34748_SHARP_){
var G__34769 = (((p1__34748_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__34748_SHARP_) : self__.f.call(null,p1__34748_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__34769) : f1.call(null,G__34769));
});
}));

(cljs.core.async.t_cljs$core$async34766.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34753","meta34753",-1589338998,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34752","cljs.core.async/t_cljs$core$async34752",-271116520,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34767","meta34767",789326499,null)], null);
}));

(cljs.core.async.t_cljs$core$async34766.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34766.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34766");

(cljs.core.async.t_cljs$core$async34766.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34766");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34766.
 */
cljs.core.async.__GT_t_cljs$core$async34766 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34766(f__$1,ch__$1,meta34753__$1,___$2,fn1__$1,meta34767){
return (new cljs.core.async.t_cljs$core$async34766(f__$1,ch__$1,meta34753__$1,___$2,fn1__$1,meta34767));
});

}

return (new cljs.core.async.t_cljs$core$async34766(self__.f,self__.ch,self__.meta34753,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__34775 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__34775) : self__.f.call(null,G__34775));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34752.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async34752.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34753","meta34753",-1589338998,null)], null);
}));

(cljs.core.async.t_cljs$core$async34752.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34752.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34752");

(cljs.core.async.t_cljs$core$async34752.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34752");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34752.
 */
cljs.core.async.__GT_t_cljs$core$async34752 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34752(f__$1,ch__$1,meta34753){
return (new cljs.core.async.t_cljs$core$async34752(f__$1,ch__$1,meta34753));
});

}

return (new cljs.core.async.t_cljs$core$async34752(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34779 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34779 = (function (f,ch,meta34780){
this.f = f;
this.ch = ch;
this.meta34780 = meta34780;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34781,meta34780__$1){
var self__ = this;
var _34781__$1 = this;
return (new cljs.core.async.t_cljs$core$async34779(self__.f,self__.ch,meta34780__$1));
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34781){
var self__ = this;
var _34781__$1 = this;
return self__.meta34780;
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34779.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async34779.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34780","meta34780",-2031132870,null)], null);
}));

(cljs.core.async.t_cljs$core$async34779.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34779.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34779");

(cljs.core.async.t_cljs$core$async34779.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34779");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34779.
 */
cljs.core.async.__GT_t_cljs$core$async34779 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34779(f__$1,ch__$1,meta34780){
return (new cljs.core.async.t_cljs$core$async34779(f__$1,ch__$1,meta34780));
});

}

return (new cljs.core.async.t_cljs$core$async34779(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34790 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34790 = (function (p,ch,meta34791){
this.p = p;
this.ch = ch;
this.meta34791 = meta34791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34792,meta34791__$1){
var self__ = this;
var _34792__$1 = this;
return (new cljs.core.async.t_cljs$core$async34790(self__.p,self__.ch,meta34791__$1));
}));

(cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34792){
var self__ = this;
var _34792__$1 = this;
return self__.meta34791;
}));

(cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async34790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34791","meta34791",652968503,null)], null);
}));

(cljs.core.async.t_cljs$core$async34790.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34790");

(cljs.core.async.t_cljs$core$async34790.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async34790");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34790.
 */
cljs.core.async.__GT_t_cljs$core$async34790 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34790(p__$1,ch__$1,meta34791){
return (new cljs.core.async.t_cljs$core$async34790(p__$1,ch__$1,meta34791));
});

}

return (new cljs.core.async.t_cljs$core$async34790(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34806 = arguments.length;
switch (G__34806) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33066__auto___36096 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_34830){
var state_val_34831 = (state_34830[(1)]);
if((state_val_34831 === (7))){
var inst_34826 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34835_36105 = state_34830__$1;
(statearr_34835_36105[(2)] = inst_34826);

(statearr_34835_36105[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (1))){
var state_34830__$1 = state_34830;
var statearr_34836_36111 = state_34830__$1;
(statearr_34836_36111[(2)] = null);

(statearr_34836_36111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (4))){
var inst_34812 = (state_34830[(7)]);
var inst_34812__$1 = (state_34830[(2)]);
var inst_34813 = (inst_34812__$1 == null);
var state_34830__$1 = (function (){var statearr_34837 = state_34830;
(statearr_34837[(7)] = inst_34812__$1);

return statearr_34837;
})();
if(cljs.core.truth_(inst_34813)){
var statearr_34838_36112 = state_34830__$1;
(statearr_34838_36112[(1)] = (5));

} else {
var statearr_34839_36113 = state_34830__$1;
(statearr_34839_36113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (6))){
var inst_34812 = (state_34830[(7)]);
var inst_34817 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34812) : p.call(null,inst_34812));
var state_34830__$1 = state_34830;
if(cljs.core.truth_(inst_34817)){
var statearr_34840_36114 = state_34830__$1;
(statearr_34840_36114[(1)] = (8));

} else {
var statearr_34844_36116 = state_34830__$1;
(statearr_34844_36116[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (3))){
var inst_34828 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34830__$1,inst_34828);
} else {
if((state_val_34831 === (2))){
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34830__$1,(4),ch);
} else {
if((state_val_34831 === (11))){
var inst_34820 = (state_34830[(2)]);
var state_34830__$1 = state_34830;
var statearr_34848_36130 = state_34830__$1;
(statearr_34848_36130[(2)] = inst_34820);

(statearr_34848_36130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (9))){
var state_34830__$1 = state_34830;
var statearr_34849_36131 = state_34830__$1;
(statearr_34849_36131[(2)] = null);

(statearr_34849_36131[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (5))){
var inst_34815 = cljs.core.async.close_BANG_(out);
var state_34830__$1 = state_34830;
var statearr_34850_36136 = state_34830__$1;
(statearr_34850_36136[(2)] = inst_34815);

(statearr_34850_36136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (10))){
var inst_34823 = (state_34830[(2)]);
var state_34830__$1 = (function (){var statearr_34851 = state_34830;
(statearr_34851[(8)] = inst_34823);

return statearr_34851;
})();
var statearr_34852_36141 = state_34830__$1;
(statearr_34852_36141[(2)] = null);

(statearr_34852_36141[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34831 === (8))){
var inst_34812 = (state_34830[(7)]);
var state_34830__$1 = state_34830;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34830__$1,(11),out,inst_34812);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_34861 = [null,null,null,null,null,null,null,null,null];
(statearr_34861[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_34861[(1)] = (1));

return statearr_34861;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_34830){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_34830);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e34862){var ex__32977__auto__ = e34862;
var statearr_34863_36151 = state_34830;
(statearr_34863_36151[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_34830[(4)]))){
var statearr_34864_36152 = state_34830;
(statearr_34864_36152[(1)] = cljs.core.first((state_34830[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36154 = state_34830;
state_34830 = G__36154;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_34830){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_34830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_34867 = f__33067__auto__();
(statearr_34867[(6)] = c__33066__auto___36096);

return statearr_34867;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34871 = arguments.length;
switch (G__34871) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33066__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_34936){
var state_val_34937 = (state_34936[(1)]);
if((state_val_34937 === (7))){
var inst_34932 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34938_36158 = state_34936__$1;
(statearr_34938_36158[(2)] = inst_34932);

(statearr_34938_36158[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (20))){
var inst_34901 = (state_34936[(7)]);
var inst_34912 = (state_34936[(2)]);
var inst_34914 = cljs.core.next(inst_34901);
var inst_34887 = inst_34914;
var inst_34888 = null;
var inst_34889 = (0);
var inst_34890 = (0);
var state_34936__$1 = (function (){var statearr_34939 = state_34936;
(statearr_34939[(8)] = inst_34912);

(statearr_34939[(9)] = inst_34888);

(statearr_34939[(10)] = inst_34890);

(statearr_34939[(11)] = inst_34887);

(statearr_34939[(12)] = inst_34889);

return statearr_34939;
})();
var statearr_34940_36160 = state_34936__$1;
(statearr_34940_36160[(2)] = null);

(statearr_34940_36160[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (1))){
var state_34936__$1 = state_34936;
var statearr_34941_36161 = state_34936__$1;
(statearr_34941_36161[(2)] = null);

(statearr_34941_36161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (4))){
var inst_34876 = (state_34936[(13)]);
var inst_34876__$1 = (state_34936[(2)]);
var inst_34877 = (inst_34876__$1 == null);
var state_34936__$1 = (function (){var statearr_34944 = state_34936;
(statearr_34944[(13)] = inst_34876__$1);

return statearr_34944;
})();
if(cljs.core.truth_(inst_34877)){
var statearr_34945_36163 = state_34936__$1;
(statearr_34945_36163[(1)] = (5));

} else {
var statearr_34947_36164 = state_34936__$1;
(statearr_34947_36164[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (15))){
var state_34936__$1 = state_34936;
var statearr_34951_36166 = state_34936__$1;
(statearr_34951_36166[(2)] = null);

(statearr_34951_36166[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (21))){
var state_34936__$1 = state_34936;
var statearr_34952_36167 = state_34936__$1;
(statearr_34952_36167[(2)] = null);

(statearr_34952_36167[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (13))){
var inst_34888 = (state_34936[(9)]);
var inst_34890 = (state_34936[(10)]);
var inst_34887 = (state_34936[(11)]);
var inst_34889 = (state_34936[(12)]);
var inst_34897 = (state_34936[(2)]);
var inst_34898 = (inst_34890 + (1));
var tmp34948 = inst_34888;
var tmp34949 = inst_34887;
var tmp34950 = inst_34889;
var inst_34887__$1 = tmp34949;
var inst_34888__$1 = tmp34948;
var inst_34889__$1 = tmp34950;
var inst_34890__$1 = inst_34898;
var state_34936__$1 = (function (){var statearr_34953 = state_34936;
(statearr_34953[(14)] = inst_34897);

(statearr_34953[(9)] = inst_34888__$1);

(statearr_34953[(10)] = inst_34890__$1);

(statearr_34953[(11)] = inst_34887__$1);

(statearr_34953[(12)] = inst_34889__$1);

return statearr_34953;
})();
var statearr_34958_36191 = state_34936__$1;
(statearr_34958_36191[(2)] = null);

(statearr_34958_36191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (22))){
var state_34936__$1 = state_34936;
var statearr_34967_36202 = state_34936__$1;
(statearr_34967_36202[(2)] = null);

(statearr_34967_36202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (6))){
var inst_34876 = (state_34936[(13)]);
var inst_34885 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_34876) : f.call(null,inst_34876));
var inst_34886 = cljs.core.seq(inst_34885);
var inst_34887 = inst_34886;
var inst_34888 = null;
var inst_34889 = (0);
var inst_34890 = (0);
var state_34936__$1 = (function (){var statearr_34976 = state_34936;
(statearr_34976[(9)] = inst_34888);

(statearr_34976[(10)] = inst_34890);

(statearr_34976[(11)] = inst_34887);

(statearr_34976[(12)] = inst_34889);

return statearr_34976;
})();
var statearr_34977_36225 = state_34936__$1;
(statearr_34977_36225[(2)] = null);

(statearr_34977_36225[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (17))){
var inst_34901 = (state_34936[(7)]);
var inst_34905 = cljs.core.chunk_first(inst_34901);
var inst_34906 = cljs.core.chunk_rest(inst_34901);
var inst_34907 = cljs.core.count(inst_34905);
var inst_34887 = inst_34906;
var inst_34888 = inst_34905;
var inst_34889 = inst_34907;
var inst_34890 = (0);
var state_34936__$1 = (function (){var statearr_34978 = state_34936;
(statearr_34978[(9)] = inst_34888);

(statearr_34978[(10)] = inst_34890);

(statearr_34978[(11)] = inst_34887);

(statearr_34978[(12)] = inst_34889);

return statearr_34978;
})();
var statearr_34979_36254 = state_34936__$1;
(statearr_34979_36254[(2)] = null);

(statearr_34979_36254[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (3))){
var inst_34934 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34936__$1,inst_34934);
} else {
if((state_val_34937 === (12))){
var inst_34922 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34980_36257 = state_34936__$1;
(statearr_34980_36257[(2)] = inst_34922);

(statearr_34980_36257[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (2))){
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34936__$1,(4),in$);
} else {
if((state_val_34937 === (23))){
var inst_34930 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34981_36259 = state_34936__$1;
(statearr_34981_36259[(2)] = inst_34930);

(statearr_34981_36259[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (19))){
var inst_34917 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34982_36264 = state_34936__$1;
(statearr_34982_36264[(2)] = inst_34917);

(statearr_34982_36264[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (11))){
var inst_34901 = (state_34936[(7)]);
var inst_34887 = (state_34936[(11)]);
var inst_34901__$1 = cljs.core.seq(inst_34887);
var state_34936__$1 = (function (){var statearr_34983 = state_34936;
(statearr_34983[(7)] = inst_34901__$1);

return statearr_34983;
})();
if(inst_34901__$1){
var statearr_34984_36283 = state_34936__$1;
(statearr_34984_36283[(1)] = (14));

} else {
var statearr_34985_36284 = state_34936__$1;
(statearr_34985_36284[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (9))){
var inst_34924 = (state_34936[(2)]);
var inst_34925 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_34936__$1 = (function (){var statearr_34986 = state_34936;
(statearr_34986[(15)] = inst_34924);

return statearr_34986;
})();
if(cljs.core.truth_(inst_34925)){
var statearr_34987_36288 = state_34936__$1;
(statearr_34987_36288[(1)] = (21));

} else {
var statearr_34988_36289 = state_34936__$1;
(statearr_34988_36289[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (5))){
var inst_34879 = cljs.core.async.close_BANG_(out);
var state_34936__$1 = state_34936;
var statearr_34989_36291 = state_34936__$1;
(statearr_34989_36291[(2)] = inst_34879);

(statearr_34989_36291[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (14))){
var inst_34901 = (state_34936[(7)]);
var inst_34903 = cljs.core.chunked_seq_QMARK_(inst_34901);
var state_34936__$1 = state_34936;
if(inst_34903){
var statearr_34990_36292 = state_34936__$1;
(statearr_34990_36292[(1)] = (17));

} else {
var statearr_34991_36293 = state_34936__$1;
(statearr_34991_36293[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (16))){
var inst_34920 = (state_34936[(2)]);
var state_34936__$1 = state_34936;
var statearr_34992_36299 = state_34936__$1;
(statearr_34992_36299[(2)] = inst_34920);

(statearr_34992_36299[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34937 === (10))){
var inst_34888 = (state_34936[(9)]);
var inst_34890 = (state_34936[(10)]);
var inst_34895 = cljs.core._nth(inst_34888,inst_34890);
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34936__$1,(13),out,inst_34895);
} else {
if((state_val_34937 === (18))){
var inst_34901 = (state_34936[(7)]);
var inst_34910 = cljs.core.first(inst_34901);
var state_34936__$1 = state_34936;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34936__$1,(20),out,inst_34910);
} else {
if((state_val_34937 === (8))){
var inst_34890 = (state_34936[(10)]);
var inst_34889 = (state_34936[(12)]);
var inst_34892 = (inst_34890 < inst_34889);
var inst_34893 = inst_34892;
var state_34936__$1 = state_34936;
if(cljs.core.truth_(inst_34893)){
var statearr_34993_36305 = state_34936__$1;
(statearr_34993_36305[(1)] = (10));

} else {
var statearr_34994_36309 = state_34936__$1;
(statearr_34994_36309[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____0 = (function (){
var statearr_34995 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34995[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__);

(statearr_34995[(1)] = (1));

return statearr_34995;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____1 = (function (state_34936){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_34936);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e34996){var ex__32977__auto__ = e34996;
var statearr_34997_36330 = state_34936;
(statearr_34997_36330[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_34936[(4)]))){
var statearr_34998_36339 = state_34936;
(statearr_34998_36339[(1)] = cljs.core.first((state_34936[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36347 = state_34936;
state_34936 = G__36347;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__ = function(state_34936){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____1.call(this,state_34936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32974__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_34999 = f__33067__auto__();
(statearr_34999[(6)] = c__33066__auto__);

return statearr_34999;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));

return c__33066__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35001 = arguments.length;
switch (G__35001) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35003 = arguments.length;
switch (G__35003) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35025 = arguments.length;
switch (G__35025) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33066__auto___36398 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_35049){
var state_val_35050 = (state_35049[(1)]);
if((state_val_35050 === (7))){
var inst_35044 = (state_35049[(2)]);
var state_35049__$1 = state_35049;
var statearr_35051_36403 = state_35049__$1;
(statearr_35051_36403[(2)] = inst_35044);

(statearr_35051_36403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (1))){
var inst_35026 = null;
var state_35049__$1 = (function (){var statearr_35052 = state_35049;
(statearr_35052[(7)] = inst_35026);

return statearr_35052;
})();
var statearr_35053_36415 = state_35049__$1;
(statearr_35053_36415[(2)] = null);

(statearr_35053_36415[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (4))){
var inst_35029 = (state_35049[(8)]);
var inst_35029__$1 = (state_35049[(2)]);
var inst_35030 = (inst_35029__$1 == null);
var inst_35031 = cljs.core.not(inst_35030);
var state_35049__$1 = (function (){var statearr_35054 = state_35049;
(statearr_35054[(8)] = inst_35029__$1);

return statearr_35054;
})();
if(inst_35031){
var statearr_35055_36418 = state_35049__$1;
(statearr_35055_36418[(1)] = (5));

} else {
var statearr_35056_36419 = state_35049__$1;
(statearr_35056_36419[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (6))){
var state_35049__$1 = state_35049;
var statearr_35057_36423 = state_35049__$1;
(statearr_35057_36423[(2)] = null);

(statearr_35057_36423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (3))){
var inst_35046 = (state_35049[(2)]);
var inst_35047 = cljs.core.async.close_BANG_(out);
var state_35049__$1 = (function (){var statearr_35058 = state_35049;
(statearr_35058[(9)] = inst_35046);

return statearr_35058;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35049__$1,inst_35047);
} else {
if((state_val_35050 === (2))){
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35049__$1,(4),ch);
} else {
if((state_val_35050 === (11))){
var inst_35029 = (state_35049[(8)]);
var inst_35038 = (state_35049[(2)]);
var inst_35026 = inst_35029;
var state_35049__$1 = (function (){var statearr_35059 = state_35049;
(statearr_35059[(7)] = inst_35026);

(statearr_35059[(10)] = inst_35038);

return statearr_35059;
})();
var statearr_35060_36433 = state_35049__$1;
(statearr_35060_36433[(2)] = null);

(statearr_35060_36433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (9))){
var inst_35029 = (state_35049[(8)]);
var state_35049__$1 = state_35049;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35049__$1,(11),out,inst_35029);
} else {
if((state_val_35050 === (5))){
var inst_35026 = (state_35049[(7)]);
var inst_35029 = (state_35049[(8)]);
var inst_35033 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35029,inst_35026);
var state_35049__$1 = state_35049;
if(inst_35033){
var statearr_35062_36436 = state_35049__$1;
(statearr_35062_36436[(1)] = (8));

} else {
var statearr_35063_36437 = state_35049__$1;
(statearr_35063_36437[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (10))){
var inst_35041 = (state_35049[(2)]);
var state_35049__$1 = state_35049;
var statearr_35064_36438 = state_35049__$1;
(statearr_35064_36438[(2)] = inst_35041);

(statearr_35064_36438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35050 === (8))){
var inst_35026 = (state_35049[(7)]);
var tmp35061 = inst_35026;
var inst_35026__$1 = tmp35061;
var state_35049__$1 = (function (){var statearr_35065 = state_35049;
(statearr_35065[(7)] = inst_35026__$1);

return statearr_35065;
})();
var statearr_35066_36446 = state_35049__$1;
(statearr_35066_36446[(2)] = null);

(statearr_35066_36446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_35067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35067[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_35067[(1)] = (1));

return statearr_35067;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_35049){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_35049);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e35068){var ex__32977__auto__ = e35068;
var statearr_35069_36454 = state_35049;
(statearr_35069_36454[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_35049[(4)]))){
var statearr_35070_36456 = state_35049;
(statearr_35070_36456[(1)] = cljs.core.first((state_35049[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36460 = state_35049;
state_35049 = G__36460;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_35049){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_35049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_35071 = f__33067__auto__();
(statearr_35071[(6)] = c__33066__auto___36398);

return statearr_35071;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35073 = arguments.length;
switch (G__35073) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33066__auto___36471 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_35111){
var state_val_35112 = (state_35111[(1)]);
if((state_val_35112 === (7))){
var inst_35107 = (state_35111[(2)]);
var state_35111__$1 = state_35111;
var statearr_35113_36477 = state_35111__$1;
(statearr_35113_36477[(2)] = inst_35107);

(statearr_35113_36477[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (1))){
var inst_35074 = (new Array(n));
var inst_35075 = inst_35074;
var inst_35076 = (0);
var state_35111__$1 = (function (){var statearr_35114 = state_35111;
(statearr_35114[(7)] = inst_35076);

(statearr_35114[(8)] = inst_35075);

return statearr_35114;
})();
var statearr_35115_36478 = state_35111__$1;
(statearr_35115_36478[(2)] = null);

(statearr_35115_36478[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (4))){
var inst_35079 = (state_35111[(9)]);
var inst_35079__$1 = (state_35111[(2)]);
var inst_35080 = (inst_35079__$1 == null);
var inst_35081 = cljs.core.not(inst_35080);
var state_35111__$1 = (function (){var statearr_35116 = state_35111;
(statearr_35116[(9)] = inst_35079__$1);

return statearr_35116;
})();
if(inst_35081){
var statearr_35117_36487 = state_35111__$1;
(statearr_35117_36487[(1)] = (5));

} else {
var statearr_35118_36488 = state_35111__$1;
(statearr_35118_36488[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (15))){
var inst_35101 = (state_35111[(2)]);
var state_35111__$1 = state_35111;
var statearr_35119_36489 = state_35111__$1;
(statearr_35119_36489[(2)] = inst_35101);

(statearr_35119_36489[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (13))){
var state_35111__$1 = state_35111;
var statearr_35120_36494 = state_35111__$1;
(statearr_35120_36494[(2)] = null);

(statearr_35120_36494[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (6))){
var inst_35076 = (state_35111[(7)]);
var inst_35097 = (inst_35076 > (0));
var state_35111__$1 = state_35111;
if(cljs.core.truth_(inst_35097)){
var statearr_35121_36498 = state_35111__$1;
(statearr_35121_36498[(1)] = (12));

} else {
var statearr_35122_36500 = state_35111__$1;
(statearr_35122_36500[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (3))){
var inst_35109 = (state_35111[(2)]);
var state_35111__$1 = state_35111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35111__$1,inst_35109);
} else {
if((state_val_35112 === (12))){
var inst_35075 = (state_35111[(8)]);
var inst_35099 = cljs.core.vec(inst_35075);
var state_35111__$1 = state_35111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35111__$1,(15),out,inst_35099);
} else {
if((state_val_35112 === (2))){
var state_35111__$1 = state_35111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35111__$1,(4),ch);
} else {
if((state_val_35112 === (11))){
var inst_35091 = (state_35111[(2)]);
var inst_35092 = (new Array(n));
var inst_35075 = inst_35092;
var inst_35076 = (0);
var state_35111__$1 = (function (){var statearr_35123 = state_35111;
(statearr_35123[(7)] = inst_35076);

(statearr_35123[(8)] = inst_35075);

(statearr_35123[(10)] = inst_35091);

return statearr_35123;
})();
var statearr_35124_36509 = state_35111__$1;
(statearr_35124_36509[(2)] = null);

(statearr_35124_36509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (9))){
var inst_35075 = (state_35111[(8)]);
var inst_35089 = cljs.core.vec(inst_35075);
var state_35111__$1 = state_35111;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35111__$1,(11),out,inst_35089);
} else {
if((state_val_35112 === (5))){
var inst_35076 = (state_35111[(7)]);
var inst_35084 = (state_35111[(11)]);
var inst_35079 = (state_35111[(9)]);
var inst_35075 = (state_35111[(8)]);
var inst_35083 = (inst_35075[inst_35076] = inst_35079);
var inst_35084__$1 = (inst_35076 + (1));
var inst_35085 = (inst_35084__$1 < n);
var state_35111__$1 = (function (){var statearr_35125 = state_35111;
(statearr_35125[(12)] = inst_35083);

(statearr_35125[(11)] = inst_35084__$1);

return statearr_35125;
})();
if(cljs.core.truth_(inst_35085)){
var statearr_35126_36521 = state_35111__$1;
(statearr_35126_36521[(1)] = (8));

} else {
var statearr_35127_36522 = state_35111__$1;
(statearr_35127_36522[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (14))){
var inst_35104 = (state_35111[(2)]);
var inst_35105 = cljs.core.async.close_BANG_(out);
var state_35111__$1 = (function (){var statearr_35129 = state_35111;
(statearr_35129[(13)] = inst_35104);

return statearr_35129;
})();
var statearr_35130_36527 = state_35111__$1;
(statearr_35130_36527[(2)] = inst_35105);

(statearr_35130_36527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (10))){
var inst_35095 = (state_35111[(2)]);
var state_35111__$1 = state_35111;
var statearr_35131_36530 = state_35111__$1;
(statearr_35131_36530[(2)] = inst_35095);

(statearr_35131_36530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35112 === (8))){
var inst_35084 = (state_35111[(11)]);
var inst_35075 = (state_35111[(8)]);
var tmp35128 = inst_35075;
var inst_35075__$1 = tmp35128;
var inst_35076 = inst_35084;
var state_35111__$1 = (function (){var statearr_35132 = state_35111;
(statearr_35132[(7)] = inst_35076);

(statearr_35132[(8)] = inst_35075__$1);

return statearr_35132;
})();
var statearr_35133_36534 = state_35111__$1;
(statearr_35133_36534[(2)] = null);

(statearr_35133_36534[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_35134 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35134[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_35134[(1)] = (1));

return statearr_35134;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_35111){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_35111);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e35136){var ex__32977__auto__ = e35136;
var statearr_35137_36542 = state_35111;
(statearr_35137_36542[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_35111[(4)]))){
var statearr_35138_36544 = state_35111;
(statearr_35138_36544[(1)] = cljs.core.first((state_35111[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36559 = state_35111;
state_35111 = G__36559;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_35111){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_35111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_35139 = f__33067__auto__();
(statearr_35139[(6)] = c__33066__auto___36471);

return statearr_35139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35141 = arguments.length;
switch (G__35141) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33066__auto___36577 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33067__auto__ = (function (){var switch__32973__auto__ = (function (state_35183){
var state_val_35184 = (state_35183[(1)]);
if((state_val_35184 === (7))){
var inst_35179 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35185_36585 = state_35183__$1;
(statearr_35185_36585[(2)] = inst_35179);

(statearr_35185_36585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (1))){
var inst_35142 = [];
var inst_35143 = inst_35142;
var inst_35144 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35183__$1 = (function (){var statearr_35186 = state_35183;
(statearr_35186[(7)] = inst_35144);

(statearr_35186[(8)] = inst_35143);

return statearr_35186;
})();
var statearr_35187_36601 = state_35183__$1;
(statearr_35187_36601[(2)] = null);

(statearr_35187_36601[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (4))){
var inst_35147 = (state_35183[(9)]);
var inst_35147__$1 = (state_35183[(2)]);
var inst_35148 = (inst_35147__$1 == null);
var inst_35149 = cljs.core.not(inst_35148);
var state_35183__$1 = (function (){var statearr_35188 = state_35183;
(statearr_35188[(9)] = inst_35147__$1);

return statearr_35188;
})();
if(inst_35149){
var statearr_35189_36623 = state_35183__$1;
(statearr_35189_36623[(1)] = (5));

} else {
var statearr_35190_36626 = state_35183__$1;
(statearr_35190_36626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (15))){
var inst_35173 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35191_36633 = state_35183__$1;
(statearr_35191_36633[(2)] = inst_35173);

(statearr_35191_36633[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (13))){
var state_35183__$1 = state_35183;
var statearr_35192_36640 = state_35183__$1;
(statearr_35192_36640[(2)] = null);

(statearr_35192_36640[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (6))){
var inst_35143 = (state_35183[(8)]);
var inst_35168 = inst_35143.length;
var inst_35169 = (inst_35168 > (0));
var state_35183__$1 = state_35183;
if(cljs.core.truth_(inst_35169)){
var statearr_35193_36651 = state_35183__$1;
(statearr_35193_36651[(1)] = (12));

} else {
var statearr_35194_36654 = state_35183__$1;
(statearr_35194_36654[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (3))){
var inst_35181 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35183__$1,inst_35181);
} else {
if((state_val_35184 === (12))){
var inst_35143 = (state_35183[(8)]);
var inst_35171 = cljs.core.vec(inst_35143);
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35183__$1,(15),out,inst_35171);
} else {
if((state_val_35184 === (2))){
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35183__$1,(4),ch);
} else {
if((state_val_35184 === (11))){
var inst_35151 = (state_35183[(10)]);
var inst_35147 = (state_35183[(9)]);
var inst_35161 = (state_35183[(2)]);
var inst_35162 = [];
var inst_35163 = inst_35162.push(inst_35147);
var inst_35143 = inst_35162;
var inst_35144 = inst_35151;
var state_35183__$1 = (function (){var statearr_35195 = state_35183;
(statearr_35195[(7)] = inst_35144);

(statearr_35195[(11)] = inst_35163);

(statearr_35195[(12)] = inst_35161);

(statearr_35195[(8)] = inst_35143);

return statearr_35195;
})();
var statearr_35196_36676 = state_35183__$1;
(statearr_35196_36676[(2)] = null);

(statearr_35196_36676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (9))){
var inst_35143 = (state_35183[(8)]);
var inst_35159 = cljs.core.vec(inst_35143);
var state_35183__$1 = state_35183;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35183__$1,(11),out,inst_35159);
} else {
if((state_val_35184 === (5))){
var inst_35144 = (state_35183[(7)]);
var inst_35151 = (state_35183[(10)]);
var inst_35147 = (state_35183[(9)]);
var inst_35151__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35147) : f.call(null,inst_35147));
var inst_35152 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35151__$1,inst_35144);
var inst_35153 = cljs.core.keyword_identical_QMARK_(inst_35144,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_35154 = ((inst_35152) || (inst_35153));
var state_35183__$1 = (function (){var statearr_35197 = state_35183;
(statearr_35197[(10)] = inst_35151__$1);

return statearr_35197;
})();
if(cljs.core.truth_(inst_35154)){
var statearr_35198_36685 = state_35183__$1;
(statearr_35198_36685[(1)] = (8));

} else {
var statearr_35199_36687 = state_35183__$1;
(statearr_35199_36687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (14))){
var inst_35176 = (state_35183[(2)]);
var inst_35177 = cljs.core.async.close_BANG_(out);
var state_35183__$1 = (function (){var statearr_35201 = state_35183;
(statearr_35201[(13)] = inst_35176);

return statearr_35201;
})();
var statearr_35202_36688 = state_35183__$1;
(statearr_35202_36688[(2)] = inst_35177);

(statearr_35202_36688[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (10))){
var inst_35166 = (state_35183[(2)]);
var state_35183__$1 = state_35183;
var statearr_35203_36690 = state_35183__$1;
(statearr_35203_36690[(2)] = inst_35166);

(statearr_35203_36690[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35184 === (8))){
var inst_35151 = (state_35183[(10)]);
var inst_35143 = (state_35183[(8)]);
var inst_35147 = (state_35183[(9)]);
var inst_35156 = inst_35143.push(inst_35147);
var tmp35200 = inst_35143;
var inst_35143__$1 = tmp35200;
var inst_35144 = inst_35151;
var state_35183__$1 = (function (){var statearr_35204 = state_35183;
(statearr_35204[(7)] = inst_35144);

(statearr_35204[(14)] = inst_35156);

(statearr_35204[(8)] = inst_35143__$1);

return statearr_35204;
})();
var statearr_35205_36694 = state_35183__$1;
(statearr_35205_36694[(2)] = null);

(statearr_35205_36694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__32974__auto__ = null;
var cljs$core$async$state_machine__32974__auto____0 = (function (){
var statearr_35206 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35206[(0)] = cljs$core$async$state_machine__32974__auto__);

(statearr_35206[(1)] = (1));

return statearr_35206;
});
var cljs$core$async$state_machine__32974__auto____1 = (function (state_35183){
while(true){
var ret_value__32975__auto__ = (function (){try{while(true){
var result__32976__auto__ = switch__32973__auto__(state_35183);
if(cljs.core.keyword_identical_QMARK_(result__32976__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32976__auto__;
}
break;
}
}catch (e35207){var ex__32977__auto__ = e35207;
var statearr_35208_36699 = state_35183;
(statearr_35208_36699[(2)] = ex__32977__auto__);


if(cljs.core.seq((state_35183[(4)]))){
var statearr_35209_36700 = state_35183;
(statearr_35209_36700[(1)] = cljs.core.first((state_35183[(4)])));

} else {
throw ex__32977__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__32975__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36703 = state_35183;
state_35183 = G__36703;
continue;
} else {
return ret_value__32975__auto__;
}
break;
}
});
cljs$core$async$state_machine__32974__auto__ = function(state_35183){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32974__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32974__auto____1.call(this,state_35183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32974__auto____0;
cljs$core$async$state_machine__32974__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32974__auto____1;
return cljs$core$async$state_machine__32974__auto__;
})()
})();
var state__33068__auto__ = (function (){var statearr_35211 = f__33067__auto__();
(statearr_35211[(6)] = c__33066__auto___36577);

return statearr_35211;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33068__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
