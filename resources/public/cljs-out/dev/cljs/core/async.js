// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12105 = arguments.length;
switch (G__12105) {
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

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12106 = (function (f,blockable,meta12107){
this.f = f;
this.blockable = blockable;
this.meta12107 = meta12107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12108,meta12107__$1){
var self__ = this;
var _12108__$1 = this;
return (new cljs.core.async.t_cljs$core$async12106(self__.f,self__.blockable,meta12107__$1));
});

cljs.core.async.t_cljs$core$async12106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12108){
var self__ = this;
var _12108__$1 = this;
return self__.meta12107;
});

cljs.core.async.t_cljs$core$async12106.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12106.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12106.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12107","meta12107",-798120443,null)], null);
});

cljs.core.async.t_cljs$core$async12106.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12106.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12106";

cljs.core.async.t_cljs$core$async12106.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async12106");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12106.
 */
cljs.core.async.__GT_t_cljs$core$async12106 = (function cljs$core$async$__GT_t_cljs$core$async12106(f__$1,blockable__$1,meta12107){
return (new cljs.core.async.t_cljs$core$async12106(f__$1,blockable__$1,meta12107));
});

}

return (new cljs.core.async.t_cljs$core$async12106(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
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
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
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
var G__12112 = arguments.length;
switch (G__12112) {
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

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__12115 = arguments.length;
switch (G__12115) {
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

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
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
var G__12118 = arguments.length;
switch (G__12118) {
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

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_12120 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12120);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12120,ret){
return (function (){
return fn1.call(null,val_12120);
});})(val_12120,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__12122 = arguments.length;
switch (G__12122) {
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

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5718__auto__)){
var ret = temp__5718__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5718__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5718__auto__)){
var retb = temp__5718__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5718__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5718__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4518__auto___12124 = n;
var x_12125 = (0);
while(true){
if((x_12125 < n__4518__auto___12124)){
(a[x_12125] = (0));

var G__12126 = (x_12125 + (1));
x_12125 = G__12126;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__12127 = (i + (1));
i = G__12127;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12128 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12128 = (function (flag,meta12129){
this.flag = flag;
this.meta12129 = meta12129;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12130,meta12129__$1){
var self__ = this;
var _12130__$1 = this;
return (new cljs.core.async.t_cljs$core$async12128(self__.flag,meta12129__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12128.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12130){
var self__ = this;
var _12130__$1 = this;
return self__.meta12129;
});})(flag))
;

cljs.core.async.t_cljs$core$async12128.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12128.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12128.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12128.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12128.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12129","meta12129",-1808447443,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12128.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12128.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12128";

cljs.core.async.t_cljs$core$async12128.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async12128");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12128.
 */
cljs.core.async.__GT_t_cljs$core$async12128 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12128(flag__$1,meta12129){
return (new cljs.core.async.t_cljs$core$async12128(flag__$1,meta12129));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12128(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12131 = (function (flag,cb,meta12132){
this.flag = flag;
this.cb = cb;
this.meta12132 = meta12132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12133,meta12132__$1){
var self__ = this;
var _12133__$1 = this;
return (new cljs.core.async.t_cljs$core$async12131(self__.flag,self__.cb,meta12132__$1));
});

cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12133){
var self__ = this;
var _12133__$1 = this;
return self__.meta12132;
});

cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12132","meta12132",2057565120,null)], null);
});

cljs.core.async.t_cljs$core$async12131.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12131.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12131";

cljs.core.async.t_cljs$core$async12131.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async12131");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12131.
 */
cljs.core.async.__GT_t_cljs$core$async12131 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12131(flag__$1,cb__$1,meta12132){
return (new cljs.core.async.t_cljs$core$async12131(flag__$1,cb__$1,meta12132));
});

}

return (new cljs.core.async.t_cljs$core$async12131(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12134_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12134_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12135_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12135_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4047__auto__ = wport;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12136 = (i + (1));
i = G__12136;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4047__auto__ = ret;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__4036__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4036__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4036__auto__;
}
})();
if(cljs.core.truth_(temp__5720__auto__)){
var got = temp__5720__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
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
var args__4647__auto__ = [];
var len__4641__auto___12142 = arguments.length;
var i__4642__auto___12143 = (0);
while(true){
if((i__4642__auto___12143 < len__4641__auto___12142)){
args__4647__auto__.push((arguments[i__4642__auto___12143]));

var G__12144 = (i__4642__auto___12143 + (1));
i__4642__auto___12143 = G__12144;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12139){
var map__12140 = p__12139;
var map__12140__$1 = (((((!((map__12140 == null))))?(((((map__12140.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12140.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12140):map__12140);
var opts = map__12140__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12137){
var G__12138 = cljs.core.first.call(null,seq12137);
var seq12137__$1 = cljs.core.next.call(null,seq12137);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12138,seq12137__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
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
var G__12146 = arguments.length;
switch (G__12146) {
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

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__10181__auto___12192 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___12192){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___12192){
return (function (state_12170){
var state_val_12171 = (state_12170[(1)]);
if((state_val_12171 === (7))){
var inst_12166 = (state_12170[(2)]);
var state_12170__$1 = state_12170;
var statearr_12172_12193 = state_12170__$1;
(statearr_12172_12193[(2)] = inst_12166);

(statearr_12172_12193[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (1))){
var state_12170__$1 = state_12170;
var statearr_12173_12194 = state_12170__$1;
(statearr_12173_12194[(2)] = null);

(statearr_12173_12194[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (4))){
var inst_12149 = (state_12170[(7)]);
var inst_12149__$1 = (state_12170[(2)]);
var inst_12150 = (inst_12149__$1 == null);
var state_12170__$1 = (function (){var statearr_12174 = state_12170;
(statearr_12174[(7)] = inst_12149__$1);

return statearr_12174;
})();
if(cljs.core.truth_(inst_12150)){
var statearr_12175_12195 = state_12170__$1;
(statearr_12175_12195[(1)] = (5));

} else {
var statearr_12176_12196 = state_12170__$1;
(statearr_12176_12196[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (13))){
var state_12170__$1 = state_12170;
var statearr_12177_12197 = state_12170__$1;
(statearr_12177_12197[(2)] = null);

(statearr_12177_12197[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (6))){
var inst_12149 = (state_12170[(7)]);
var state_12170__$1 = state_12170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12170__$1,(11),to,inst_12149);
} else {
if((state_val_12171 === (3))){
var inst_12168 = (state_12170[(2)]);
var state_12170__$1 = state_12170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12170__$1,inst_12168);
} else {
if((state_val_12171 === (12))){
var state_12170__$1 = state_12170;
var statearr_12178_12198 = state_12170__$1;
(statearr_12178_12198[(2)] = null);

(statearr_12178_12198[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (2))){
var state_12170__$1 = state_12170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12170__$1,(4),from);
} else {
if((state_val_12171 === (11))){
var inst_12159 = (state_12170[(2)]);
var state_12170__$1 = state_12170;
if(cljs.core.truth_(inst_12159)){
var statearr_12179_12199 = state_12170__$1;
(statearr_12179_12199[(1)] = (12));

} else {
var statearr_12180_12200 = state_12170__$1;
(statearr_12180_12200[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (9))){
var state_12170__$1 = state_12170;
var statearr_12181_12201 = state_12170__$1;
(statearr_12181_12201[(2)] = null);

(statearr_12181_12201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (5))){
var state_12170__$1 = state_12170;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12182_12202 = state_12170__$1;
(statearr_12182_12202[(1)] = (8));

} else {
var statearr_12183_12203 = state_12170__$1;
(statearr_12183_12203[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (14))){
var inst_12164 = (state_12170[(2)]);
var state_12170__$1 = state_12170;
var statearr_12184_12204 = state_12170__$1;
(statearr_12184_12204[(2)] = inst_12164);

(statearr_12184_12204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (10))){
var inst_12156 = (state_12170[(2)]);
var state_12170__$1 = state_12170;
var statearr_12185_12205 = state_12170__$1;
(statearr_12185_12205[(2)] = inst_12156);

(statearr_12185_12205[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12171 === (8))){
var inst_12153 = cljs.core.async.close_BANG_.call(null,to);
var state_12170__$1 = state_12170;
var statearr_12186_12206 = state_12170__$1;
(statearr_12186_12206[(2)] = inst_12153);

(statearr_12186_12206[(1)] = (10));


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
});})(c__10181__auto___12192))
;
return ((function (switch__10014__auto__,c__10181__auto___12192){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_12187 = [null,null,null,null,null,null,null,null];
(statearr_12187[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_12187[(1)] = (1));

return statearr_12187;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_12170){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12188){if((e12188 instanceof Object)){
var ex__10018__auto__ = e12188;
var statearr_12189_12207 = state_12170;
(statearr_12189_12207[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12208 = state_12170;
state_12170 = G__12208;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_12170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_12170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___12192))
})();
var state__10183__auto__ = (function (){var statearr_12190 = f__10182__auto__.call(null);
(statearr_12190[(6)] = c__10181__auto___12192);

return statearr_12190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___12192))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__12209){
var vec__12210 = p__12209;
var v = cljs.core.nth.call(null,vec__12210,(0),null);
var p = cljs.core.nth.call(null,vec__12210,(1),null);
var job = vec__12210;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__10181__auto___12381 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___12381,res,vec__12210,v,p,job,jobs,results){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___12381,res,vec__12210,v,p,job,jobs,results){
return (function (state_12217){
var state_val_12218 = (state_12217[(1)]);
if((state_val_12218 === (1))){
var state_12217__$1 = state_12217;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12217__$1,(2),res,v);
} else {
if((state_val_12218 === (2))){
var inst_12214 = (state_12217[(2)]);
var inst_12215 = cljs.core.async.close_BANG_.call(null,res);
var state_12217__$1 = (function (){var statearr_12219 = state_12217;
(statearr_12219[(7)] = inst_12214);

return statearr_12219;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12217__$1,inst_12215);
} else {
return null;
}
}
});})(c__10181__auto___12381,res,vec__12210,v,p,job,jobs,results))
;
return ((function (switch__10014__auto__,c__10181__auto___12381,res,vec__12210,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_12220 = [null,null,null,null,null,null,null,null];
(statearr_12220[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_12220[(1)] = (1));

return statearr_12220;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_12217){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12221){if((e12221 instanceof Object)){
var ex__10018__auto__ = e12221;
var statearr_12222_12382 = state_12217;
(statearr_12222_12382[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12221;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12383 = state_12217;
state_12217 = G__12383;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_12217){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_12217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___12381,res,vec__12210,v,p,job,jobs,results))
})();
var state__10183__auto__ = (function (){var statearr_12223 = f__10182__auto__.call(null);
(statearr_12223[(6)] = c__10181__auto___12381);

return statearr_12223;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___12381,res,vec__12210,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12224){
var vec__12225 = p__12224;
var v = cljs.core.nth.call(null,vec__12225,(0),null);
var p = cljs.core.nth.call(null,vec__12225,(1),null);
var job = vec__12225;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4518__auto___12384 = n;
var __12385 = (0);
while(true){
if((__12385 < n__4518__auto___12384)){
var G__12228_12386 = type;
var G__12228_12387__$1 = (((G__12228_12386 instanceof cljs.core.Keyword))?G__12228_12386.fqn:null);
switch (G__12228_12387__$1) {
case "compute":
var c__10181__auto___12389 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12385,c__10181__auto___12389,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (__12385,c__10181__auto___12389,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async){
return (function (state_12241){
var state_val_12242 = (state_12241[(1)]);
if((state_val_12242 === (1))){
var state_12241__$1 = state_12241;
var statearr_12243_12390 = state_12241__$1;
(statearr_12243_12390[(2)] = null);

(statearr_12243_12390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (2))){
var state_12241__$1 = state_12241;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12241__$1,(4),jobs);
} else {
if((state_val_12242 === (3))){
var inst_12239 = (state_12241[(2)]);
var state_12241__$1 = state_12241;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12241__$1,inst_12239);
} else {
if((state_val_12242 === (4))){
var inst_12231 = (state_12241[(2)]);
var inst_12232 = process.call(null,inst_12231);
var state_12241__$1 = state_12241;
if(cljs.core.truth_(inst_12232)){
var statearr_12244_12391 = state_12241__$1;
(statearr_12244_12391[(1)] = (5));

} else {
var statearr_12245_12392 = state_12241__$1;
(statearr_12245_12392[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (5))){
var state_12241__$1 = state_12241;
var statearr_12246_12393 = state_12241__$1;
(statearr_12246_12393[(2)] = null);

(statearr_12246_12393[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (6))){
var state_12241__$1 = state_12241;
var statearr_12247_12394 = state_12241__$1;
(statearr_12247_12394[(2)] = null);

(statearr_12247_12394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12242 === (7))){
var inst_12237 = (state_12241[(2)]);
var state_12241__$1 = state_12241;
var statearr_12248_12395 = state_12241__$1;
(statearr_12248_12395[(2)] = inst_12237);

(statearr_12248_12395[(1)] = (3));


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
});})(__12385,c__10181__auto___12389,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async))
;
return ((function (__12385,switch__10014__auto__,c__10181__auto___12389,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_12249 = [null,null,null,null,null,null,null];
(statearr_12249[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_12249[(1)] = (1));

return statearr_12249;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_12241){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12241);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12250){if((e12250 instanceof Object)){
var ex__10018__auto__ = e12250;
var statearr_12251_12396 = state_12241;
(statearr_12251_12396[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12250;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12397 = state_12241;
state_12241 = G__12397;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_12241){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_12241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(__12385,switch__10014__auto__,c__10181__auto___12389,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async))
})();
var state__10183__auto__ = (function (){var statearr_12252 = f__10182__auto__.call(null);
(statearr_12252[(6)] = c__10181__auto___12389);

return statearr_12252;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(__12385,c__10181__auto___12389,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async))
);


break;
case "async":
var c__10181__auto___12398 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__12385,c__10181__auto___12398,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (__12385,c__10181__auto___12398,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async){
return (function (state_12265){
var state_val_12266 = (state_12265[(1)]);
if((state_val_12266 === (1))){
var state_12265__$1 = state_12265;
var statearr_12267_12399 = state_12265__$1;
(statearr_12267_12399[(2)] = null);

(statearr_12267_12399[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (2))){
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12265__$1,(4),jobs);
} else {
if((state_val_12266 === (3))){
var inst_12263 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12265__$1,inst_12263);
} else {
if((state_val_12266 === (4))){
var inst_12255 = (state_12265[(2)]);
var inst_12256 = async.call(null,inst_12255);
var state_12265__$1 = state_12265;
if(cljs.core.truth_(inst_12256)){
var statearr_12268_12400 = state_12265__$1;
(statearr_12268_12400[(1)] = (5));

} else {
var statearr_12269_12401 = state_12265__$1;
(statearr_12269_12401[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (5))){
var state_12265__$1 = state_12265;
var statearr_12270_12402 = state_12265__$1;
(statearr_12270_12402[(2)] = null);

(statearr_12270_12402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (6))){
var state_12265__$1 = state_12265;
var statearr_12271_12403 = state_12265__$1;
(statearr_12271_12403[(2)] = null);

(statearr_12271_12403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12266 === (7))){
var inst_12261 = (state_12265[(2)]);
var state_12265__$1 = state_12265;
var statearr_12272_12404 = state_12265__$1;
(statearr_12272_12404[(2)] = inst_12261);

(statearr_12272_12404[(1)] = (3));


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
});})(__12385,c__10181__auto___12398,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async))
;
return ((function (__12385,switch__10014__auto__,c__10181__auto___12398,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_12273 = [null,null,null,null,null,null,null];
(statearr_12273[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_12273[(1)] = (1));

return statearr_12273;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_12265){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12265);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12274){if((e12274 instanceof Object)){
var ex__10018__auto__ = e12274;
var statearr_12275_12405 = state_12265;
(statearr_12275_12405[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12406 = state_12265;
state_12265 = G__12406;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_12265){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_12265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(__12385,switch__10014__auto__,c__10181__auto___12398,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async))
})();
var state__10183__auto__ = (function (){var statearr_12276 = f__10182__auto__.call(null);
(statearr_12276[(6)] = c__10181__auto___12398);

return statearr_12276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(__12385,c__10181__auto___12398,G__12228_12386,G__12228_12387__$1,n__4518__auto___12384,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12228_12387__$1)].join('')));

}

var G__12407 = (__12385 + (1));
__12385 = G__12407;
continue;
} else {
}
break;
}

var c__10181__auto___12408 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___12408,jobs,results,process,async){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___12408,jobs,results,process,async){
return (function (state_12298){
var state_val_12299 = (state_12298[(1)]);
if((state_val_12299 === (7))){
var inst_12294 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
var statearr_12300_12409 = state_12298__$1;
(statearr_12300_12409[(2)] = inst_12294);

(statearr_12300_12409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (1))){
var state_12298__$1 = state_12298;
var statearr_12301_12410 = state_12298__$1;
(statearr_12301_12410[(2)] = null);

(statearr_12301_12410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (4))){
var inst_12279 = (state_12298[(7)]);
var inst_12279__$1 = (state_12298[(2)]);
var inst_12280 = (inst_12279__$1 == null);
var state_12298__$1 = (function (){var statearr_12302 = state_12298;
(statearr_12302[(7)] = inst_12279__$1);

return statearr_12302;
})();
if(cljs.core.truth_(inst_12280)){
var statearr_12303_12411 = state_12298__$1;
(statearr_12303_12411[(1)] = (5));

} else {
var statearr_12304_12412 = state_12298__$1;
(statearr_12304_12412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (6))){
var inst_12279 = (state_12298[(7)]);
var inst_12284 = (state_12298[(8)]);
var inst_12284__$1 = cljs.core.async.chan.call(null,(1));
var inst_12285 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_12286 = [inst_12279,inst_12284__$1];
var inst_12287 = (new cljs.core.PersistentVector(null,2,(5),inst_12285,inst_12286,null));
var state_12298__$1 = (function (){var statearr_12305 = state_12298;
(statearr_12305[(8)] = inst_12284__$1);

return statearr_12305;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12298__$1,(8),jobs,inst_12287);
} else {
if((state_val_12299 === (3))){
var inst_12296 = (state_12298[(2)]);
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12298__$1,inst_12296);
} else {
if((state_val_12299 === (2))){
var state_12298__$1 = state_12298;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12298__$1,(4),from);
} else {
if((state_val_12299 === (9))){
var inst_12291 = (state_12298[(2)]);
var state_12298__$1 = (function (){var statearr_12306 = state_12298;
(statearr_12306[(9)] = inst_12291);

return statearr_12306;
})();
var statearr_12307_12413 = state_12298__$1;
(statearr_12307_12413[(2)] = null);

(statearr_12307_12413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (5))){
var inst_12282 = cljs.core.async.close_BANG_.call(null,jobs);
var state_12298__$1 = state_12298;
var statearr_12308_12414 = state_12298__$1;
(statearr_12308_12414[(2)] = inst_12282);

(statearr_12308_12414[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12299 === (8))){
var inst_12284 = (state_12298[(8)]);
var inst_12289 = (state_12298[(2)]);
var state_12298__$1 = (function (){var statearr_12309 = state_12298;
(statearr_12309[(10)] = inst_12289);

return statearr_12309;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12298__$1,(9),results,inst_12284);
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
});})(c__10181__auto___12408,jobs,results,process,async))
;
return ((function (switch__10014__auto__,c__10181__auto___12408,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_12310 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_12310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_12310[(1)] = (1));

return statearr_12310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_12298){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12298);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12311){if((e12311 instanceof Object)){
var ex__10018__auto__ = e12311;
var statearr_12312_12415 = state_12298;
(statearr_12312_12415[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12416 = state_12298;
state_12298 = G__12416;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_12298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_12298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___12408,jobs,results,process,async))
})();
var state__10183__auto__ = (function (){var statearr_12313 = f__10182__auto__.call(null);
(statearr_12313[(6)] = c__10181__auto___12408);

return statearr_12313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___12408,jobs,results,process,async))
);


var c__10181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto__,jobs,results,process,async){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto__,jobs,results,process,async){
return (function (state_12351){
var state_val_12352 = (state_12351[(1)]);
if((state_val_12352 === (7))){
var inst_12347 = (state_12351[(2)]);
var state_12351__$1 = state_12351;
var statearr_12353_12417 = state_12351__$1;
(statearr_12353_12417[(2)] = inst_12347);

(statearr_12353_12417[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (20))){
var state_12351__$1 = state_12351;
var statearr_12354_12418 = state_12351__$1;
(statearr_12354_12418[(2)] = null);

(statearr_12354_12418[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (1))){
var state_12351__$1 = state_12351;
var statearr_12355_12419 = state_12351__$1;
(statearr_12355_12419[(2)] = null);

(statearr_12355_12419[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (4))){
var inst_12316 = (state_12351[(7)]);
var inst_12316__$1 = (state_12351[(2)]);
var inst_12317 = (inst_12316__$1 == null);
var state_12351__$1 = (function (){var statearr_12356 = state_12351;
(statearr_12356[(7)] = inst_12316__$1);

return statearr_12356;
})();
if(cljs.core.truth_(inst_12317)){
var statearr_12357_12420 = state_12351__$1;
(statearr_12357_12420[(1)] = (5));

} else {
var statearr_12358_12421 = state_12351__$1;
(statearr_12358_12421[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (15))){
var inst_12329 = (state_12351[(8)]);
var state_12351__$1 = state_12351;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12351__$1,(18),to,inst_12329);
} else {
if((state_val_12352 === (21))){
var inst_12342 = (state_12351[(2)]);
var state_12351__$1 = state_12351;
var statearr_12359_12422 = state_12351__$1;
(statearr_12359_12422[(2)] = inst_12342);

(statearr_12359_12422[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (13))){
var inst_12344 = (state_12351[(2)]);
var state_12351__$1 = (function (){var statearr_12360 = state_12351;
(statearr_12360[(9)] = inst_12344);

return statearr_12360;
})();
var statearr_12361_12423 = state_12351__$1;
(statearr_12361_12423[(2)] = null);

(statearr_12361_12423[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (6))){
var inst_12316 = (state_12351[(7)]);
var state_12351__$1 = state_12351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12351__$1,(11),inst_12316);
} else {
if((state_val_12352 === (17))){
var inst_12337 = (state_12351[(2)]);
var state_12351__$1 = state_12351;
if(cljs.core.truth_(inst_12337)){
var statearr_12362_12424 = state_12351__$1;
(statearr_12362_12424[(1)] = (19));

} else {
var statearr_12363_12425 = state_12351__$1;
(statearr_12363_12425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (3))){
var inst_12349 = (state_12351[(2)]);
var state_12351__$1 = state_12351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12351__$1,inst_12349);
} else {
if((state_val_12352 === (12))){
var inst_12326 = (state_12351[(10)]);
var state_12351__$1 = state_12351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12351__$1,(14),inst_12326);
} else {
if((state_val_12352 === (2))){
var state_12351__$1 = state_12351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12351__$1,(4),results);
} else {
if((state_val_12352 === (19))){
var state_12351__$1 = state_12351;
var statearr_12364_12426 = state_12351__$1;
(statearr_12364_12426[(2)] = null);

(statearr_12364_12426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (11))){
var inst_12326 = (state_12351[(2)]);
var state_12351__$1 = (function (){var statearr_12365 = state_12351;
(statearr_12365[(10)] = inst_12326);

return statearr_12365;
})();
var statearr_12366_12427 = state_12351__$1;
(statearr_12366_12427[(2)] = null);

(statearr_12366_12427[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (9))){
var state_12351__$1 = state_12351;
var statearr_12367_12428 = state_12351__$1;
(statearr_12367_12428[(2)] = null);

(statearr_12367_12428[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (5))){
var state_12351__$1 = state_12351;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12368_12429 = state_12351__$1;
(statearr_12368_12429[(1)] = (8));

} else {
var statearr_12369_12430 = state_12351__$1;
(statearr_12369_12430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (14))){
var inst_12329 = (state_12351[(8)]);
var inst_12331 = (state_12351[(11)]);
var inst_12329__$1 = (state_12351[(2)]);
var inst_12330 = (inst_12329__$1 == null);
var inst_12331__$1 = cljs.core.not.call(null,inst_12330);
var state_12351__$1 = (function (){var statearr_12370 = state_12351;
(statearr_12370[(8)] = inst_12329__$1);

(statearr_12370[(11)] = inst_12331__$1);

return statearr_12370;
})();
if(inst_12331__$1){
var statearr_12371_12431 = state_12351__$1;
(statearr_12371_12431[(1)] = (15));

} else {
var statearr_12372_12432 = state_12351__$1;
(statearr_12372_12432[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (16))){
var inst_12331 = (state_12351[(11)]);
var state_12351__$1 = state_12351;
var statearr_12373_12433 = state_12351__$1;
(statearr_12373_12433[(2)] = inst_12331);

(statearr_12373_12433[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (10))){
var inst_12323 = (state_12351[(2)]);
var state_12351__$1 = state_12351;
var statearr_12374_12434 = state_12351__$1;
(statearr_12374_12434[(2)] = inst_12323);

(statearr_12374_12434[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (18))){
var inst_12334 = (state_12351[(2)]);
var state_12351__$1 = state_12351;
var statearr_12375_12435 = state_12351__$1;
(statearr_12375_12435[(2)] = inst_12334);

(statearr_12375_12435[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12352 === (8))){
var inst_12320 = cljs.core.async.close_BANG_.call(null,to);
var state_12351__$1 = state_12351;
var statearr_12376_12436 = state_12351__$1;
(statearr_12376_12436[(2)] = inst_12320);

(statearr_12376_12436[(1)] = (10));


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
});})(c__10181__auto__,jobs,results,process,async))
;
return ((function (switch__10014__auto__,c__10181__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_12377 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12377[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__);

(statearr_12377[(1)] = (1));

return statearr_12377;
});
var cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1 = (function (state_12351){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12378){if((e12378 instanceof Object)){
var ex__10018__auto__ = e12378;
var statearr_12379_12437 = state_12351;
(statearr_12379_12437[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12378;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12438 = state_12351;
state_12351 = G__12438;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__ = function(state_12351){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1.call(this,state_12351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto__,jobs,results,process,async))
})();
var state__10183__auto__ = (function (){var statearr_12380 = f__10182__auto__.call(null);
(statearr_12380[(6)] = c__10181__auto__);

return statearr_12380;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto__,jobs,results,process,async))
);

return c__10181__auto__;
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
var G__12440 = arguments.length;
switch (G__12440) {
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

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

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
var G__12443 = arguments.length;
switch (G__12443) {
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

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

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
var G__12446 = arguments.length;
switch (G__12446) {
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

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__10181__auto___12495 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___12495,tc,fc){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___12495,tc,fc){
return (function (state_12472){
var state_val_12473 = (state_12472[(1)]);
if((state_val_12473 === (7))){
var inst_12468 = (state_12472[(2)]);
var state_12472__$1 = state_12472;
var statearr_12474_12496 = state_12472__$1;
(statearr_12474_12496[(2)] = inst_12468);

(statearr_12474_12496[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (1))){
var state_12472__$1 = state_12472;
var statearr_12475_12497 = state_12472__$1;
(statearr_12475_12497[(2)] = null);

(statearr_12475_12497[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (4))){
var inst_12449 = (state_12472[(7)]);
var inst_12449__$1 = (state_12472[(2)]);
var inst_12450 = (inst_12449__$1 == null);
var state_12472__$1 = (function (){var statearr_12476 = state_12472;
(statearr_12476[(7)] = inst_12449__$1);

return statearr_12476;
})();
if(cljs.core.truth_(inst_12450)){
var statearr_12477_12498 = state_12472__$1;
(statearr_12477_12498[(1)] = (5));

} else {
var statearr_12478_12499 = state_12472__$1;
(statearr_12478_12499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (13))){
var state_12472__$1 = state_12472;
var statearr_12479_12500 = state_12472__$1;
(statearr_12479_12500[(2)] = null);

(statearr_12479_12500[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (6))){
var inst_12449 = (state_12472[(7)]);
var inst_12455 = p.call(null,inst_12449);
var state_12472__$1 = state_12472;
if(cljs.core.truth_(inst_12455)){
var statearr_12480_12501 = state_12472__$1;
(statearr_12480_12501[(1)] = (9));

} else {
var statearr_12481_12502 = state_12472__$1;
(statearr_12481_12502[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (3))){
var inst_12470 = (state_12472[(2)]);
var state_12472__$1 = state_12472;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12472__$1,inst_12470);
} else {
if((state_val_12473 === (12))){
var state_12472__$1 = state_12472;
var statearr_12482_12503 = state_12472__$1;
(statearr_12482_12503[(2)] = null);

(statearr_12482_12503[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (2))){
var state_12472__$1 = state_12472;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12472__$1,(4),ch);
} else {
if((state_val_12473 === (11))){
var inst_12449 = (state_12472[(7)]);
var inst_12459 = (state_12472[(2)]);
var state_12472__$1 = state_12472;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12472__$1,(8),inst_12459,inst_12449);
} else {
if((state_val_12473 === (9))){
var state_12472__$1 = state_12472;
var statearr_12483_12504 = state_12472__$1;
(statearr_12483_12504[(2)] = tc);

(statearr_12483_12504[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (5))){
var inst_12452 = cljs.core.async.close_BANG_.call(null,tc);
var inst_12453 = cljs.core.async.close_BANG_.call(null,fc);
var state_12472__$1 = (function (){var statearr_12484 = state_12472;
(statearr_12484[(8)] = inst_12452);

return statearr_12484;
})();
var statearr_12485_12505 = state_12472__$1;
(statearr_12485_12505[(2)] = inst_12453);

(statearr_12485_12505[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (14))){
var inst_12466 = (state_12472[(2)]);
var state_12472__$1 = state_12472;
var statearr_12486_12506 = state_12472__$1;
(statearr_12486_12506[(2)] = inst_12466);

(statearr_12486_12506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (10))){
var state_12472__$1 = state_12472;
var statearr_12487_12507 = state_12472__$1;
(statearr_12487_12507[(2)] = fc);

(statearr_12487_12507[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12473 === (8))){
var inst_12461 = (state_12472[(2)]);
var state_12472__$1 = state_12472;
if(cljs.core.truth_(inst_12461)){
var statearr_12488_12508 = state_12472__$1;
(statearr_12488_12508[(1)] = (12));

} else {
var statearr_12489_12509 = state_12472__$1;
(statearr_12489_12509[(1)] = (13));

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
});})(c__10181__auto___12495,tc,fc))
;
return ((function (switch__10014__auto__,c__10181__auto___12495,tc,fc){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_12490 = [null,null,null,null,null,null,null,null,null];
(statearr_12490[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_12490[(1)] = (1));

return statearr_12490;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_12472){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12472);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12491){if((e12491 instanceof Object)){
var ex__10018__auto__ = e12491;
var statearr_12492_12510 = state_12472;
(statearr_12492_12510[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12491;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12511 = state_12472;
state_12472 = G__12511;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_12472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_12472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___12495,tc,fc))
})();
var state__10183__auto__ = (function (){var statearr_12493 = f__10182__auto__.call(null);
(statearr_12493[(6)] = c__10181__auto___12495);

return statearr_12493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___12495,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__10181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto__){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto__){
return (function (state_12532){
var state_val_12533 = (state_12532[(1)]);
if((state_val_12533 === (7))){
var inst_12528 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12534_12552 = state_12532__$1;
(statearr_12534_12552[(2)] = inst_12528);

(statearr_12534_12552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (1))){
var inst_12512 = init;
var state_12532__$1 = (function (){var statearr_12535 = state_12532;
(statearr_12535[(7)] = inst_12512);

return statearr_12535;
})();
var statearr_12536_12553 = state_12532__$1;
(statearr_12536_12553[(2)] = null);

(statearr_12536_12553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (4))){
var inst_12515 = (state_12532[(8)]);
var inst_12515__$1 = (state_12532[(2)]);
var inst_12516 = (inst_12515__$1 == null);
var state_12532__$1 = (function (){var statearr_12537 = state_12532;
(statearr_12537[(8)] = inst_12515__$1);

return statearr_12537;
})();
if(cljs.core.truth_(inst_12516)){
var statearr_12538_12554 = state_12532__$1;
(statearr_12538_12554[(1)] = (5));

} else {
var statearr_12539_12555 = state_12532__$1;
(statearr_12539_12555[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (6))){
var inst_12515 = (state_12532[(8)]);
var inst_12512 = (state_12532[(7)]);
var inst_12519 = (state_12532[(9)]);
var inst_12519__$1 = f.call(null,inst_12512,inst_12515);
var inst_12520 = cljs.core.reduced_QMARK_.call(null,inst_12519__$1);
var state_12532__$1 = (function (){var statearr_12540 = state_12532;
(statearr_12540[(9)] = inst_12519__$1);

return statearr_12540;
})();
if(inst_12520){
var statearr_12541_12556 = state_12532__$1;
(statearr_12541_12556[(1)] = (8));

} else {
var statearr_12542_12557 = state_12532__$1;
(statearr_12542_12557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (3))){
var inst_12530 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12532__$1,inst_12530);
} else {
if((state_val_12533 === (2))){
var state_12532__$1 = state_12532;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12532__$1,(4),ch);
} else {
if((state_val_12533 === (9))){
var inst_12519 = (state_12532[(9)]);
var inst_12512 = inst_12519;
var state_12532__$1 = (function (){var statearr_12543 = state_12532;
(statearr_12543[(7)] = inst_12512);

return statearr_12543;
})();
var statearr_12544_12558 = state_12532__$1;
(statearr_12544_12558[(2)] = null);

(statearr_12544_12558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (5))){
var inst_12512 = (state_12532[(7)]);
var state_12532__$1 = state_12532;
var statearr_12545_12559 = state_12532__$1;
(statearr_12545_12559[(2)] = inst_12512);

(statearr_12545_12559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (10))){
var inst_12526 = (state_12532[(2)]);
var state_12532__$1 = state_12532;
var statearr_12546_12560 = state_12532__$1;
(statearr_12546_12560[(2)] = inst_12526);

(statearr_12546_12560[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12533 === (8))){
var inst_12519 = (state_12532[(9)]);
var inst_12522 = cljs.core.deref.call(null,inst_12519);
var state_12532__$1 = state_12532;
var statearr_12547_12561 = state_12532__$1;
(statearr_12547_12561[(2)] = inst_12522);

(statearr_12547_12561[(1)] = (10));


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
});})(c__10181__auto__))
;
return ((function (switch__10014__auto__,c__10181__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__10015__auto__ = null;
var cljs$core$async$reduce_$_state_machine__10015__auto____0 = (function (){
var statearr_12548 = [null,null,null,null,null,null,null,null,null,null];
(statearr_12548[(0)] = cljs$core$async$reduce_$_state_machine__10015__auto__);

(statearr_12548[(1)] = (1));

return statearr_12548;
});
var cljs$core$async$reduce_$_state_machine__10015__auto____1 = (function (state_12532){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12532);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12549){if((e12549 instanceof Object)){
var ex__10018__auto__ = e12549;
var statearr_12550_12562 = state_12532;
(statearr_12550_12562[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12532);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12549;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12563 = state_12532;
state_12532 = G__12563;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__10015__auto__ = function(state_12532){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__10015__auto____1.call(this,state_12532);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__10015__auto____0;
cljs$core$async$reduce_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__10015__auto____1;
return cljs$core$async$reduce_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto__))
})();
var state__10183__auto__ = (function (){var statearr_12551 = f__10182__auto__.call(null);
(statearr_12551[(6)] = c__10181__auto__);

return statearr_12551;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto__))
);

return c__10181__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__10181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto__,f__$1){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto__,f__$1){
return (function (state_12569){
var state_val_12570 = (state_12569[(1)]);
if((state_val_12570 === (1))){
var inst_12564 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_12569__$1 = state_12569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12569__$1,(2),inst_12564);
} else {
if((state_val_12570 === (2))){
var inst_12566 = (state_12569[(2)]);
var inst_12567 = f__$1.call(null,inst_12566);
var state_12569__$1 = state_12569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12569__$1,inst_12567);
} else {
return null;
}
}
});})(c__10181__auto__,f__$1))
;
return ((function (switch__10014__auto__,c__10181__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__10015__auto__ = null;
var cljs$core$async$transduce_$_state_machine__10015__auto____0 = (function (){
var statearr_12571 = [null,null,null,null,null,null,null];
(statearr_12571[(0)] = cljs$core$async$transduce_$_state_machine__10015__auto__);

(statearr_12571[(1)] = (1));

return statearr_12571;
});
var cljs$core$async$transduce_$_state_machine__10015__auto____1 = (function (state_12569){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12572){if((e12572 instanceof Object)){
var ex__10018__auto__ = e12572;
var statearr_12573_12575 = state_12569;
(statearr_12573_12575[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12572;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12576 = state_12569;
state_12569 = G__12576;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__10015__auto__ = function(state_12569){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__10015__auto____1.call(this,state_12569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__10015__auto____0;
cljs$core$async$transduce_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__10015__auto____1;
return cljs$core$async$transduce_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto__,f__$1))
})();
var state__10183__auto__ = (function (){var statearr_12574 = f__10182__auto__.call(null);
(statearr_12574[(6)] = c__10181__auto__);

return statearr_12574;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto__,f__$1))
);

return c__10181__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__12578 = arguments.length;
switch (G__12578) {
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

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__10181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto__){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto__){
return (function (state_12603){
var state_val_12604 = (state_12603[(1)]);
if((state_val_12604 === (7))){
var inst_12585 = (state_12603[(2)]);
var state_12603__$1 = state_12603;
var statearr_12605_12626 = state_12603__$1;
(statearr_12605_12626[(2)] = inst_12585);

(statearr_12605_12626[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (1))){
var inst_12579 = cljs.core.seq.call(null,coll);
var inst_12580 = inst_12579;
var state_12603__$1 = (function (){var statearr_12606 = state_12603;
(statearr_12606[(7)] = inst_12580);

return statearr_12606;
})();
var statearr_12607_12627 = state_12603__$1;
(statearr_12607_12627[(2)] = null);

(statearr_12607_12627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (4))){
var inst_12580 = (state_12603[(7)]);
var inst_12583 = cljs.core.first.call(null,inst_12580);
var state_12603__$1 = state_12603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12603__$1,(7),ch,inst_12583);
} else {
if((state_val_12604 === (13))){
var inst_12597 = (state_12603[(2)]);
var state_12603__$1 = state_12603;
var statearr_12608_12628 = state_12603__$1;
(statearr_12608_12628[(2)] = inst_12597);

(statearr_12608_12628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (6))){
var inst_12588 = (state_12603[(2)]);
var state_12603__$1 = state_12603;
if(cljs.core.truth_(inst_12588)){
var statearr_12609_12629 = state_12603__$1;
(statearr_12609_12629[(1)] = (8));

} else {
var statearr_12610_12630 = state_12603__$1;
(statearr_12610_12630[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (3))){
var inst_12601 = (state_12603[(2)]);
var state_12603__$1 = state_12603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12603__$1,inst_12601);
} else {
if((state_val_12604 === (12))){
var state_12603__$1 = state_12603;
var statearr_12611_12631 = state_12603__$1;
(statearr_12611_12631[(2)] = null);

(statearr_12611_12631[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (2))){
var inst_12580 = (state_12603[(7)]);
var state_12603__$1 = state_12603;
if(cljs.core.truth_(inst_12580)){
var statearr_12612_12632 = state_12603__$1;
(statearr_12612_12632[(1)] = (4));

} else {
var statearr_12613_12633 = state_12603__$1;
(statearr_12613_12633[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (11))){
var inst_12594 = cljs.core.async.close_BANG_.call(null,ch);
var state_12603__$1 = state_12603;
var statearr_12614_12634 = state_12603__$1;
(statearr_12614_12634[(2)] = inst_12594);

(statearr_12614_12634[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (9))){
var state_12603__$1 = state_12603;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12615_12635 = state_12603__$1;
(statearr_12615_12635[(1)] = (11));

} else {
var statearr_12616_12636 = state_12603__$1;
(statearr_12616_12636[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (5))){
var inst_12580 = (state_12603[(7)]);
var state_12603__$1 = state_12603;
var statearr_12617_12637 = state_12603__$1;
(statearr_12617_12637[(2)] = inst_12580);

(statearr_12617_12637[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (10))){
var inst_12599 = (state_12603[(2)]);
var state_12603__$1 = state_12603;
var statearr_12618_12638 = state_12603__$1;
(statearr_12618_12638[(2)] = inst_12599);

(statearr_12618_12638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12604 === (8))){
var inst_12580 = (state_12603[(7)]);
var inst_12590 = cljs.core.next.call(null,inst_12580);
var inst_12580__$1 = inst_12590;
var state_12603__$1 = (function (){var statearr_12619 = state_12603;
(statearr_12619[(7)] = inst_12580__$1);

return statearr_12619;
})();
var statearr_12620_12639 = state_12603__$1;
(statearr_12620_12639[(2)] = null);

(statearr_12620_12639[(1)] = (2));


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
});})(c__10181__auto__))
;
return ((function (switch__10014__auto__,c__10181__auto__){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_12621 = [null,null,null,null,null,null,null,null];
(statearr_12621[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_12621[(1)] = (1));

return statearr_12621;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_12603){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12622){if((e12622 instanceof Object)){
var ex__10018__auto__ = e12622;
var statearr_12623_12640 = state_12603;
(statearr_12623_12640[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12641 = state_12603;
state_12603 = G__12641;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_12603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_12603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto__))
})();
var state__10183__auto__ = (function (){var statearr_12624 = f__10182__auto__.call(null);
(statearr_12624[(6)] = c__10181__auto__);

return statearr_12624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto__))
);

return c__10181__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4347__auto__ = (((_ == null))?null:_);
var m__4348__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,_);
} else {
var m__4348__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12642 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12642 = (function (ch,cs,meta12643){
this.ch = ch;
this.cs = cs;
this.meta12643 = meta12643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12644,meta12643__$1){
var self__ = this;
var _12644__$1 = this;
return (new cljs.core.async.t_cljs$core$async12642(self__.ch,self__.cs,meta12643__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12644){
var self__ = this;
var _12644__$1 = this;
return self__.meta12643;
});})(cs))
;

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12642.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async12642.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta12643","meta12643",-960842286,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async12642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12642";

cljs.core.async.t_cljs$core$async12642.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async12642");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12642.
 */
cljs.core.async.__GT_t_cljs$core$async12642 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async12642(ch__$1,cs__$1,meta12643){
return (new cljs.core.async.t_cljs$core$async12642(ch__$1,cs__$1,meta12643));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async12642(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__10181__auto___12864 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___12864,cs,m,dchan,dctr,done){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___12864,cs,m,dchan,dctr,done){
return (function (state_12779){
var state_val_12780 = (state_12779[(1)]);
if((state_val_12780 === (7))){
var inst_12775 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
var statearr_12781_12865 = state_12779__$1;
(statearr_12781_12865[(2)] = inst_12775);

(statearr_12781_12865[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (20))){
var inst_12678 = (state_12779[(7)]);
var inst_12690 = cljs.core.first.call(null,inst_12678);
var inst_12691 = cljs.core.nth.call(null,inst_12690,(0),null);
var inst_12692 = cljs.core.nth.call(null,inst_12690,(1),null);
var state_12779__$1 = (function (){var statearr_12782 = state_12779;
(statearr_12782[(8)] = inst_12691);

return statearr_12782;
})();
if(cljs.core.truth_(inst_12692)){
var statearr_12783_12866 = state_12779__$1;
(statearr_12783_12866[(1)] = (22));

} else {
var statearr_12784_12867 = state_12779__$1;
(statearr_12784_12867[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (27))){
var inst_12722 = (state_12779[(9)]);
var inst_12727 = (state_12779[(10)]);
var inst_12720 = (state_12779[(11)]);
var inst_12647 = (state_12779[(12)]);
var inst_12727__$1 = cljs.core._nth.call(null,inst_12720,inst_12722);
var inst_12728 = cljs.core.async.put_BANG_.call(null,inst_12727__$1,inst_12647,done);
var state_12779__$1 = (function (){var statearr_12785 = state_12779;
(statearr_12785[(10)] = inst_12727__$1);

return statearr_12785;
})();
if(cljs.core.truth_(inst_12728)){
var statearr_12786_12868 = state_12779__$1;
(statearr_12786_12868[(1)] = (30));

} else {
var statearr_12787_12869 = state_12779__$1;
(statearr_12787_12869[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (1))){
var state_12779__$1 = state_12779;
var statearr_12788_12870 = state_12779__$1;
(statearr_12788_12870[(2)] = null);

(statearr_12788_12870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (24))){
var inst_12678 = (state_12779[(7)]);
var inst_12697 = (state_12779[(2)]);
var inst_12698 = cljs.core.next.call(null,inst_12678);
var inst_12656 = inst_12698;
var inst_12657 = null;
var inst_12658 = (0);
var inst_12659 = (0);
var state_12779__$1 = (function (){var statearr_12789 = state_12779;
(statearr_12789[(13)] = inst_12657);

(statearr_12789[(14)] = inst_12656);

(statearr_12789[(15)] = inst_12697);

(statearr_12789[(16)] = inst_12658);

(statearr_12789[(17)] = inst_12659);

return statearr_12789;
})();
var statearr_12790_12871 = state_12779__$1;
(statearr_12790_12871[(2)] = null);

(statearr_12790_12871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (39))){
var state_12779__$1 = state_12779;
var statearr_12794_12872 = state_12779__$1;
(statearr_12794_12872[(2)] = null);

(statearr_12794_12872[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (4))){
var inst_12647 = (state_12779[(12)]);
var inst_12647__$1 = (state_12779[(2)]);
var inst_12648 = (inst_12647__$1 == null);
var state_12779__$1 = (function (){var statearr_12795 = state_12779;
(statearr_12795[(12)] = inst_12647__$1);

return statearr_12795;
})();
if(cljs.core.truth_(inst_12648)){
var statearr_12796_12873 = state_12779__$1;
(statearr_12796_12873[(1)] = (5));

} else {
var statearr_12797_12874 = state_12779__$1;
(statearr_12797_12874[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (15))){
var inst_12657 = (state_12779[(13)]);
var inst_12656 = (state_12779[(14)]);
var inst_12658 = (state_12779[(16)]);
var inst_12659 = (state_12779[(17)]);
var inst_12674 = (state_12779[(2)]);
var inst_12675 = (inst_12659 + (1));
var tmp12791 = inst_12657;
var tmp12792 = inst_12656;
var tmp12793 = inst_12658;
var inst_12656__$1 = tmp12792;
var inst_12657__$1 = tmp12791;
var inst_12658__$1 = tmp12793;
var inst_12659__$1 = inst_12675;
var state_12779__$1 = (function (){var statearr_12798 = state_12779;
(statearr_12798[(13)] = inst_12657__$1);

(statearr_12798[(14)] = inst_12656__$1);

(statearr_12798[(18)] = inst_12674);

(statearr_12798[(16)] = inst_12658__$1);

(statearr_12798[(17)] = inst_12659__$1);

return statearr_12798;
})();
var statearr_12799_12875 = state_12779__$1;
(statearr_12799_12875[(2)] = null);

(statearr_12799_12875[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (21))){
var inst_12701 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
var statearr_12803_12876 = state_12779__$1;
(statearr_12803_12876[(2)] = inst_12701);

(statearr_12803_12876[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (31))){
var inst_12727 = (state_12779[(10)]);
var inst_12731 = done.call(null,null);
var inst_12732 = cljs.core.async.untap_STAR_.call(null,m,inst_12727);
var state_12779__$1 = (function (){var statearr_12804 = state_12779;
(statearr_12804[(19)] = inst_12731);

return statearr_12804;
})();
var statearr_12805_12877 = state_12779__$1;
(statearr_12805_12877[(2)] = inst_12732);

(statearr_12805_12877[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (32))){
var inst_12722 = (state_12779[(9)]);
var inst_12721 = (state_12779[(20)]);
var inst_12719 = (state_12779[(21)]);
var inst_12720 = (state_12779[(11)]);
var inst_12734 = (state_12779[(2)]);
var inst_12735 = (inst_12722 + (1));
var tmp12800 = inst_12721;
var tmp12801 = inst_12719;
var tmp12802 = inst_12720;
var inst_12719__$1 = tmp12801;
var inst_12720__$1 = tmp12802;
var inst_12721__$1 = tmp12800;
var inst_12722__$1 = inst_12735;
var state_12779__$1 = (function (){var statearr_12806 = state_12779;
(statearr_12806[(9)] = inst_12722__$1);

(statearr_12806[(20)] = inst_12721__$1);

(statearr_12806[(21)] = inst_12719__$1);

(statearr_12806[(22)] = inst_12734);

(statearr_12806[(11)] = inst_12720__$1);

return statearr_12806;
})();
var statearr_12807_12878 = state_12779__$1;
(statearr_12807_12878[(2)] = null);

(statearr_12807_12878[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (40))){
var inst_12747 = (state_12779[(23)]);
var inst_12751 = done.call(null,null);
var inst_12752 = cljs.core.async.untap_STAR_.call(null,m,inst_12747);
var state_12779__$1 = (function (){var statearr_12808 = state_12779;
(statearr_12808[(24)] = inst_12751);

return statearr_12808;
})();
var statearr_12809_12879 = state_12779__$1;
(statearr_12809_12879[(2)] = inst_12752);

(statearr_12809_12879[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (33))){
var inst_12738 = (state_12779[(25)]);
var inst_12740 = cljs.core.chunked_seq_QMARK_.call(null,inst_12738);
var state_12779__$1 = state_12779;
if(inst_12740){
var statearr_12810_12880 = state_12779__$1;
(statearr_12810_12880[(1)] = (36));

} else {
var statearr_12811_12881 = state_12779__$1;
(statearr_12811_12881[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (13))){
var inst_12668 = (state_12779[(26)]);
var inst_12671 = cljs.core.async.close_BANG_.call(null,inst_12668);
var state_12779__$1 = state_12779;
var statearr_12812_12882 = state_12779__$1;
(statearr_12812_12882[(2)] = inst_12671);

(statearr_12812_12882[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (22))){
var inst_12691 = (state_12779[(8)]);
var inst_12694 = cljs.core.async.close_BANG_.call(null,inst_12691);
var state_12779__$1 = state_12779;
var statearr_12813_12883 = state_12779__$1;
(statearr_12813_12883[(2)] = inst_12694);

(statearr_12813_12883[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (36))){
var inst_12738 = (state_12779[(25)]);
var inst_12742 = cljs.core.chunk_first.call(null,inst_12738);
var inst_12743 = cljs.core.chunk_rest.call(null,inst_12738);
var inst_12744 = cljs.core.count.call(null,inst_12742);
var inst_12719 = inst_12743;
var inst_12720 = inst_12742;
var inst_12721 = inst_12744;
var inst_12722 = (0);
var state_12779__$1 = (function (){var statearr_12814 = state_12779;
(statearr_12814[(9)] = inst_12722);

(statearr_12814[(20)] = inst_12721);

(statearr_12814[(21)] = inst_12719);

(statearr_12814[(11)] = inst_12720);

return statearr_12814;
})();
var statearr_12815_12884 = state_12779__$1;
(statearr_12815_12884[(2)] = null);

(statearr_12815_12884[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (41))){
var inst_12738 = (state_12779[(25)]);
var inst_12754 = (state_12779[(2)]);
var inst_12755 = cljs.core.next.call(null,inst_12738);
var inst_12719 = inst_12755;
var inst_12720 = null;
var inst_12721 = (0);
var inst_12722 = (0);
var state_12779__$1 = (function (){var statearr_12816 = state_12779;
(statearr_12816[(9)] = inst_12722);

(statearr_12816[(27)] = inst_12754);

(statearr_12816[(20)] = inst_12721);

(statearr_12816[(21)] = inst_12719);

(statearr_12816[(11)] = inst_12720);

return statearr_12816;
})();
var statearr_12817_12885 = state_12779__$1;
(statearr_12817_12885[(2)] = null);

(statearr_12817_12885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (43))){
var state_12779__$1 = state_12779;
var statearr_12818_12886 = state_12779__$1;
(statearr_12818_12886[(2)] = null);

(statearr_12818_12886[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (29))){
var inst_12763 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
var statearr_12819_12887 = state_12779__$1;
(statearr_12819_12887[(2)] = inst_12763);

(statearr_12819_12887[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (44))){
var inst_12772 = (state_12779[(2)]);
var state_12779__$1 = (function (){var statearr_12820 = state_12779;
(statearr_12820[(28)] = inst_12772);

return statearr_12820;
})();
var statearr_12821_12888 = state_12779__$1;
(statearr_12821_12888[(2)] = null);

(statearr_12821_12888[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (6))){
var inst_12711 = (state_12779[(29)]);
var inst_12710 = cljs.core.deref.call(null,cs);
var inst_12711__$1 = cljs.core.keys.call(null,inst_12710);
var inst_12712 = cljs.core.count.call(null,inst_12711__$1);
var inst_12713 = cljs.core.reset_BANG_.call(null,dctr,inst_12712);
var inst_12718 = cljs.core.seq.call(null,inst_12711__$1);
var inst_12719 = inst_12718;
var inst_12720 = null;
var inst_12721 = (0);
var inst_12722 = (0);
var state_12779__$1 = (function (){var statearr_12822 = state_12779;
(statearr_12822[(9)] = inst_12722);

(statearr_12822[(29)] = inst_12711__$1);

(statearr_12822[(20)] = inst_12721);

(statearr_12822[(21)] = inst_12719);

(statearr_12822[(30)] = inst_12713);

(statearr_12822[(11)] = inst_12720);

return statearr_12822;
})();
var statearr_12823_12889 = state_12779__$1;
(statearr_12823_12889[(2)] = null);

(statearr_12823_12889[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (28))){
var inst_12738 = (state_12779[(25)]);
var inst_12719 = (state_12779[(21)]);
var inst_12738__$1 = cljs.core.seq.call(null,inst_12719);
var state_12779__$1 = (function (){var statearr_12824 = state_12779;
(statearr_12824[(25)] = inst_12738__$1);

return statearr_12824;
})();
if(inst_12738__$1){
var statearr_12825_12890 = state_12779__$1;
(statearr_12825_12890[(1)] = (33));

} else {
var statearr_12826_12891 = state_12779__$1;
(statearr_12826_12891[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (25))){
var inst_12722 = (state_12779[(9)]);
var inst_12721 = (state_12779[(20)]);
var inst_12724 = (inst_12722 < inst_12721);
var inst_12725 = inst_12724;
var state_12779__$1 = state_12779;
if(cljs.core.truth_(inst_12725)){
var statearr_12827_12892 = state_12779__$1;
(statearr_12827_12892[(1)] = (27));

} else {
var statearr_12828_12893 = state_12779__$1;
(statearr_12828_12893[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (34))){
var state_12779__$1 = state_12779;
var statearr_12829_12894 = state_12779__$1;
(statearr_12829_12894[(2)] = null);

(statearr_12829_12894[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (17))){
var state_12779__$1 = state_12779;
var statearr_12830_12895 = state_12779__$1;
(statearr_12830_12895[(2)] = null);

(statearr_12830_12895[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (3))){
var inst_12777 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12779__$1,inst_12777);
} else {
if((state_val_12780 === (12))){
var inst_12706 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
var statearr_12831_12896 = state_12779__$1;
(statearr_12831_12896[(2)] = inst_12706);

(statearr_12831_12896[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (2))){
var state_12779__$1 = state_12779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12779__$1,(4),ch);
} else {
if((state_val_12780 === (23))){
var state_12779__$1 = state_12779;
var statearr_12832_12897 = state_12779__$1;
(statearr_12832_12897[(2)] = null);

(statearr_12832_12897[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (35))){
var inst_12761 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
var statearr_12833_12898 = state_12779__$1;
(statearr_12833_12898[(2)] = inst_12761);

(statearr_12833_12898[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (19))){
var inst_12678 = (state_12779[(7)]);
var inst_12682 = cljs.core.chunk_first.call(null,inst_12678);
var inst_12683 = cljs.core.chunk_rest.call(null,inst_12678);
var inst_12684 = cljs.core.count.call(null,inst_12682);
var inst_12656 = inst_12683;
var inst_12657 = inst_12682;
var inst_12658 = inst_12684;
var inst_12659 = (0);
var state_12779__$1 = (function (){var statearr_12834 = state_12779;
(statearr_12834[(13)] = inst_12657);

(statearr_12834[(14)] = inst_12656);

(statearr_12834[(16)] = inst_12658);

(statearr_12834[(17)] = inst_12659);

return statearr_12834;
})();
var statearr_12835_12899 = state_12779__$1;
(statearr_12835_12899[(2)] = null);

(statearr_12835_12899[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (11))){
var inst_12678 = (state_12779[(7)]);
var inst_12656 = (state_12779[(14)]);
var inst_12678__$1 = cljs.core.seq.call(null,inst_12656);
var state_12779__$1 = (function (){var statearr_12836 = state_12779;
(statearr_12836[(7)] = inst_12678__$1);

return statearr_12836;
})();
if(inst_12678__$1){
var statearr_12837_12900 = state_12779__$1;
(statearr_12837_12900[(1)] = (16));

} else {
var statearr_12838_12901 = state_12779__$1;
(statearr_12838_12901[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (9))){
var inst_12708 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
var statearr_12839_12902 = state_12779__$1;
(statearr_12839_12902[(2)] = inst_12708);

(statearr_12839_12902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (5))){
var inst_12654 = cljs.core.deref.call(null,cs);
var inst_12655 = cljs.core.seq.call(null,inst_12654);
var inst_12656 = inst_12655;
var inst_12657 = null;
var inst_12658 = (0);
var inst_12659 = (0);
var state_12779__$1 = (function (){var statearr_12840 = state_12779;
(statearr_12840[(13)] = inst_12657);

(statearr_12840[(14)] = inst_12656);

(statearr_12840[(16)] = inst_12658);

(statearr_12840[(17)] = inst_12659);

return statearr_12840;
})();
var statearr_12841_12903 = state_12779__$1;
(statearr_12841_12903[(2)] = null);

(statearr_12841_12903[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (14))){
var state_12779__$1 = state_12779;
var statearr_12842_12904 = state_12779__$1;
(statearr_12842_12904[(2)] = null);

(statearr_12842_12904[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (45))){
var inst_12769 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
var statearr_12843_12905 = state_12779__$1;
(statearr_12843_12905[(2)] = inst_12769);

(statearr_12843_12905[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (26))){
var inst_12711 = (state_12779[(29)]);
var inst_12765 = (state_12779[(2)]);
var inst_12766 = cljs.core.seq.call(null,inst_12711);
var state_12779__$1 = (function (){var statearr_12844 = state_12779;
(statearr_12844[(31)] = inst_12765);

return statearr_12844;
})();
if(inst_12766){
var statearr_12845_12906 = state_12779__$1;
(statearr_12845_12906[(1)] = (42));

} else {
var statearr_12846_12907 = state_12779__$1;
(statearr_12846_12907[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (16))){
var inst_12678 = (state_12779[(7)]);
var inst_12680 = cljs.core.chunked_seq_QMARK_.call(null,inst_12678);
var state_12779__$1 = state_12779;
if(inst_12680){
var statearr_12847_12908 = state_12779__$1;
(statearr_12847_12908[(1)] = (19));

} else {
var statearr_12848_12909 = state_12779__$1;
(statearr_12848_12909[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (38))){
var inst_12758 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
var statearr_12849_12910 = state_12779__$1;
(statearr_12849_12910[(2)] = inst_12758);

(statearr_12849_12910[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (30))){
var state_12779__$1 = state_12779;
var statearr_12850_12911 = state_12779__$1;
(statearr_12850_12911[(2)] = null);

(statearr_12850_12911[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (10))){
var inst_12657 = (state_12779[(13)]);
var inst_12659 = (state_12779[(17)]);
var inst_12667 = cljs.core._nth.call(null,inst_12657,inst_12659);
var inst_12668 = cljs.core.nth.call(null,inst_12667,(0),null);
var inst_12669 = cljs.core.nth.call(null,inst_12667,(1),null);
var state_12779__$1 = (function (){var statearr_12851 = state_12779;
(statearr_12851[(26)] = inst_12668);

return statearr_12851;
})();
if(cljs.core.truth_(inst_12669)){
var statearr_12852_12912 = state_12779__$1;
(statearr_12852_12912[(1)] = (13));

} else {
var statearr_12853_12913 = state_12779__$1;
(statearr_12853_12913[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (18))){
var inst_12704 = (state_12779[(2)]);
var state_12779__$1 = state_12779;
var statearr_12854_12914 = state_12779__$1;
(statearr_12854_12914[(2)] = inst_12704);

(statearr_12854_12914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (42))){
var state_12779__$1 = state_12779;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12779__$1,(45),dchan);
} else {
if((state_val_12780 === (37))){
var inst_12738 = (state_12779[(25)]);
var inst_12747 = (state_12779[(23)]);
var inst_12647 = (state_12779[(12)]);
var inst_12747__$1 = cljs.core.first.call(null,inst_12738);
var inst_12748 = cljs.core.async.put_BANG_.call(null,inst_12747__$1,inst_12647,done);
var state_12779__$1 = (function (){var statearr_12855 = state_12779;
(statearr_12855[(23)] = inst_12747__$1);

return statearr_12855;
})();
if(cljs.core.truth_(inst_12748)){
var statearr_12856_12915 = state_12779__$1;
(statearr_12856_12915[(1)] = (39));

} else {
var statearr_12857_12916 = state_12779__$1;
(statearr_12857_12916[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12780 === (8))){
var inst_12658 = (state_12779[(16)]);
var inst_12659 = (state_12779[(17)]);
var inst_12661 = (inst_12659 < inst_12658);
var inst_12662 = inst_12661;
var state_12779__$1 = state_12779;
if(cljs.core.truth_(inst_12662)){
var statearr_12858_12917 = state_12779__$1;
(statearr_12858_12917[(1)] = (10));

} else {
var statearr_12859_12918 = state_12779__$1;
(statearr_12859_12918[(1)] = (11));

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
});})(c__10181__auto___12864,cs,m,dchan,dctr,done))
;
return ((function (switch__10014__auto__,c__10181__auto___12864,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__10015__auto__ = null;
var cljs$core$async$mult_$_state_machine__10015__auto____0 = (function (){
var statearr_12860 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_12860[(0)] = cljs$core$async$mult_$_state_machine__10015__auto__);

(statearr_12860[(1)] = (1));

return statearr_12860;
});
var cljs$core$async$mult_$_state_machine__10015__auto____1 = (function (state_12779){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_12779);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e12861){if((e12861 instanceof Object)){
var ex__10018__auto__ = e12861;
var statearr_12862_12919 = state_12779;
(statearr_12862_12919[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12779);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12861;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12920 = state_12779;
state_12779 = G__12920;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__10015__auto__ = function(state_12779){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__10015__auto____1.call(this,state_12779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__10015__auto____0;
cljs$core$async$mult_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__10015__auto____1;
return cljs$core$async$mult_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___12864,cs,m,dchan,dctr,done))
})();
var state__10183__auto__ = (function (){var statearr_12863 = f__10182__auto__.call(null);
(statearr_12863[(6)] = c__10181__auto___12864);

return statearr_12863;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___12864,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__12922 = arguments.length;
switch (G__12922) {
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

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m);
} else {
var m__4348__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,state_map);
} else {
var m__4348__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4347__auto__ = (((m == null))?null:m);
var m__4348__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,m,mode);
} else {
var m__4348__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4647__auto__ = [];
var len__4641__auto___12934 = arguments.length;
var i__4642__auto___12935 = (0);
while(true){
if((i__4642__auto___12935 < len__4641__auto___12934)){
args__4647__auto__.push((arguments[i__4642__auto___12935]));

var G__12936 = (i__4642__auto___12935 + (1));
i__4642__auto___12935 = G__12936;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((3) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4648__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__12928){
var map__12929 = p__12928;
var map__12929__$1 = (((((!((map__12929 == null))))?(((((map__12929.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12929.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12929):map__12929);
var opts = map__12929__$1;
var statearr_12931_12937 = state;
(statearr_12931_12937[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__12929,map__12929__$1,opts){
return (function (val){
var statearr_12932_12938 = state;
(statearr_12932_12938[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__12929,map__12929__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_12933_12939 = state;
(statearr_12933_12939[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq12924){
var G__12925 = cljs.core.first.call(null,seq12924);
var seq12924__$1 = cljs.core.next.call(null,seq12924);
var G__12926 = cljs.core.first.call(null,seq12924__$1);
var seq12924__$2 = cljs.core.next.call(null,seq12924__$1);
var G__12927 = cljs.core.first.call(null,seq12924__$2);
var seq12924__$3 = cljs.core.next.call(null,seq12924__$2);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12925,G__12926,G__12927,seq12924__$3);
});

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
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12940 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12940 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12941){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12941 = meta12941;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12942,meta12941__$1){
var self__ = this;
var _12942__$1 = this;
return (new cljs.core.async.t_cljs$core$async12940(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12941__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12942){
var self__ = this;
var _12942__$1 = this;
return self__.meta12941;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12940.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12940.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta12941","meta12941",-2142269891,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async12940.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12940.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12940";

cljs.core.async.t_cljs$core$async12940.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async12940");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12940.
 */
cljs.core.async.__GT_t_cljs$core$async12940 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async12940(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12941){
return (new cljs.core.async.t_cljs$core$async12940(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12941));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async12940(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10181__auto___13104 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___13104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___13104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13044){
var state_val_13045 = (state_13044[(1)]);
if((state_val_13045 === (7))){
var inst_12959 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13046_13105 = state_13044__$1;
(statearr_13046_13105[(2)] = inst_12959);

(statearr_13046_13105[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (20))){
var inst_12971 = (state_13044[(7)]);
var state_13044__$1 = state_13044;
var statearr_13047_13106 = state_13044__$1;
(statearr_13047_13106[(2)] = inst_12971);

(statearr_13047_13106[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (27))){
var state_13044__$1 = state_13044;
var statearr_13048_13107 = state_13044__$1;
(statearr_13048_13107[(2)] = null);

(statearr_13048_13107[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (1))){
var inst_12946 = (state_13044[(8)]);
var inst_12946__$1 = calc_state.call(null);
var inst_12948 = (inst_12946__$1 == null);
var inst_12949 = cljs.core.not.call(null,inst_12948);
var state_13044__$1 = (function (){var statearr_13049 = state_13044;
(statearr_13049[(8)] = inst_12946__$1);

return statearr_13049;
})();
if(inst_12949){
var statearr_13050_13108 = state_13044__$1;
(statearr_13050_13108[(1)] = (2));

} else {
var statearr_13051_13109 = state_13044__$1;
(statearr_13051_13109[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (24))){
var inst_12995 = (state_13044[(9)]);
var inst_13004 = (state_13044[(10)]);
var inst_13018 = (state_13044[(11)]);
var inst_13018__$1 = inst_12995.call(null,inst_13004);
var state_13044__$1 = (function (){var statearr_13052 = state_13044;
(statearr_13052[(11)] = inst_13018__$1);

return statearr_13052;
})();
if(cljs.core.truth_(inst_13018__$1)){
var statearr_13053_13110 = state_13044__$1;
(statearr_13053_13110[(1)] = (29));

} else {
var statearr_13054_13111 = state_13044__$1;
(statearr_13054_13111[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (4))){
var inst_12962 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
if(cljs.core.truth_(inst_12962)){
var statearr_13055_13112 = state_13044__$1;
(statearr_13055_13112[(1)] = (8));

} else {
var statearr_13056_13113 = state_13044__$1;
(statearr_13056_13113[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (15))){
var inst_12989 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
if(cljs.core.truth_(inst_12989)){
var statearr_13057_13114 = state_13044__$1;
(statearr_13057_13114[(1)] = (19));

} else {
var statearr_13058_13115 = state_13044__$1;
(statearr_13058_13115[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (21))){
var inst_12994 = (state_13044[(12)]);
var inst_12994__$1 = (state_13044[(2)]);
var inst_12995 = cljs.core.get.call(null,inst_12994__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12996 = cljs.core.get.call(null,inst_12994__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12997 = cljs.core.get.call(null,inst_12994__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13044__$1 = (function (){var statearr_13059 = state_13044;
(statearr_13059[(9)] = inst_12995);

(statearr_13059[(12)] = inst_12994__$1);

(statearr_13059[(13)] = inst_12996);

return statearr_13059;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13044__$1,(22),inst_12997);
} else {
if((state_val_13045 === (31))){
var inst_13026 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
if(cljs.core.truth_(inst_13026)){
var statearr_13060_13116 = state_13044__$1;
(statearr_13060_13116[(1)] = (32));

} else {
var statearr_13061_13117 = state_13044__$1;
(statearr_13061_13117[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (32))){
var inst_13003 = (state_13044[(14)]);
var state_13044__$1 = state_13044;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13044__$1,(35),out,inst_13003);
} else {
if((state_val_13045 === (33))){
var inst_12994 = (state_13044[(12)]);
var inst_12971 = inst_12994;
var state_13044__$1 = (function (){var statearr_13062 = state_13044;
(statearr_13062[(7)] = inst_12971);

return statearr_13062;
})();
var statearr_13063_13118 = state_13044__$1;
(statearr_13063_13118[(2)] = null);

(statearr_13063_13118[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (13))){
var inst_12971 = (state_13044[(7)]);
var inst_12978 = inst_12971.cljs$lang$protocol_mask$partition0$;
var inst_12979 = (inst_12978 & (64));
var inst_12980 = inst_12971.cljs$core$ISeq$;
var inst_12981 = (cljs.core.PROTOCOL_SENTINEL === inst_12980);
var inst_12982 = ((inst_12979) || (inst_12981));
var state_13044__$1 = state_13044;
if(cljs.core.truth_(inst_12982)){
var statearr_13064_13119 = state_13044__$1;
(statearr_13064_13119[(1)] = (16));

} else {
var statearr_13065_13120 = state_13044__$1;
(statearr_13065_13120[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (22))){
var inst_13003 = (state_13044[(14)]);
var inst_13004 = (state_13044[(10)]);
var inst_13002 = (state_13044[(2)]);
var inst_13003__$1 = cljs.core.nth.call(null,inst_13002,(0),null);
var inst_13004__$1 = cljs.core.nth.call(null,inst_13002,(1),null);
var inst_13005 = (inst_13003__$1 == null);
var inst_13006 = cljs.core._EQ_.call(null,inst_13004__$1,change);
var inst_13007 = ((inst_13005) || (inst_13006));
var state_13044__$1 = (function (){var statearr_13066 = state_13044;
(statearr_13066[(14)] = inst_13003__$1);

(statearr_13066[(10)] = inst_13004__$1);

return statearr_13066;
})();
if(cljs.core.truth_(inst_13007)){
var statearr_13067_13121 = state_13044__$1;
(statearr_13067_13121[(1)] = (23));

} else {
var statearr_13068_13122 = state_13044__$1;
(statearr_13068_13122[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (36))){
var inst_12994 = (state_13044[(12)]);
var inst_12971 = inst_12994;
var state_13044__$1 = (function (){var statearr_13069 = state_13044;
(statearr_13069[(7)] = inst_12971);

return statearr_13069;
})();
var statearr_13070_13123 = state_13044__$1;
(statearr_13070_13123[(2)] = null);

(statearr_13070_13123[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (29))){
var inst_13018 = (state_13044[(11)]);
var state_13044__$1 = state_13044;
var statearr_13071_13124 = state_13044__$1;
(statearr_13071_13124[(2)] = inst_13018);

(statearr_13071_13124[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (6))){
var state_13044__$1 = state_13044;
var statearr_13072_13125 = state_13044__$1;
(statearr_13072_13125[(2)] = false);

(statearr_13072_13125[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (28))){
var inst_13014 = (state_13044[(2)]);
var inst_13015 = calc_state.call(null);
var inst_12971 = inst_13015;
var state_13044__$1 = (function (){var statearr_13073 = state_13044;
(statearr_13073[(7)] = inst_12971);

(statearr_13073[(15)] = inst_13014);

return statearr_13073;
})();
var statearr_13074_13126 = state_13044__$1;
(statearr_13074_13126[(2)] = null);

(statearr_13074_13126[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (25))){
var inst_13040 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13075_13127 = state_13044__$1;
(statearr_13075_13127[(2)] = inst_13040);

(statearr_13075_13127[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (34))){
var inst_13038 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13076_13128 = state_13044__$1;
(statearr_13076_13128[(2)] = inst_13038);

(statearr_13076_13128[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (17))){
var state_13044__$1 = state_13044;
var statearr_13077_13129 = state_13044__$1;
(statearr_13077_13129[(2)] = false);

(statearr_13077_13129[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (3))){
var state_13044__$1 = state_13044;
var statearr_13078_13130 = state_13044__$1;
(statearr_13078_13130[(2)] = false);

(statearr_13078_13130[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (12))){
var inst_13042 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13044__$1,inst_13042);
} else {
if((state_val_13045 === (2))){
var inst_12946 = (state_13044[(8)]);
var inst_12951 = inst_12946.cljs$lang$protocol_mask$partition0$;
var inst_12952 = (inst_12951 & (64));
var inst_12953 = inst_12946.cljs$core$ISeq$;
var inst_12954 = (cljs.core.PROTOCOL_SENTINEL === inst_12953);
var inst_12955 = ((inst_12952) || (inst_12954));
var state_13044__$1 = state_13044;
if(cljs.core.truth_(inst_12955)){
var statearr_13079_13131 = state_13044__$1;
(statearr_13079_13131[(1)] = (5));

} else {
var statearr_13080_13132 = state_13044__$1;
(statearr_13080_13132[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (23))){
var inst_13003 = (state_13044[(14)]);
var inst_13009 = (inst_13003 == null);
var state_13044__$1 = state_13044;
if(cljs.core.truth_(inst_13009)){
var statearr_13081_13133 = state_13044__$1;
(statearr_13081_13133[(1)] = (26));

} else {
var statearr_13082_13134 = state_13044__$1;
(statearr_13082_13134[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (35))){
var inst_13029 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
if(cljs.core.truth_(inst_13029)){
var statearr_13083_13135 = state_13044__$1;
(statearr_13083_13135[(1)] = (36));

} else {
var statearr_13084_13136 = state_13044__$1;
(statearr_13084_13136[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (19))){
var inst_12971 = (state_13044[(7)]);
var inst_12991 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12971);
var state_13044__$1 = state_13044;
var statearr_13085_13137 = state_13044__$1;
(statearr_13085_13137[(2)] = inst_12991);

(statearr_13085_13137[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (11))){
var inst_12971 = (state_13044[(7)]);
var inst_12975 = (inst_12971 == null);
var inst_12976 = cljs.core.not.call(null,inst_12975);
var state_13044__$1 = state_13044;
if(inst_12976){
var statearr_13086_13138 = state_13044__$1;
(statearr_13086_13138[(1)] = (13));

} else {
var statearr_13087_13139 = state_13044__$1;
(statearr_13087_13139[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (9))){
var inst_12946 = (state_13044[(8)]);
var state_13044__$1 = state_13044;
var statearr_13088_13140 = state_13044__$1;
(statearr_13088_13140[(2)] = inst_12946);

(statearr_13088_13140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (5))){
var state_13044__$1 = state_13044;
var statearr_13089_13141 = state_13044__$1;
(statearr_13089_13141[(2)] = true);

(statearr_13089_13141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (14))){
var state_13044__$1 = state_13044;
var statearr_13090_13142 = state_13044__$1;
(statearr_13090_13142[(2)] = false);

(statearr_13090_13142[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (26))){
var inst_13004 = (state_13044[(10)]);
var inst_13011 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13004);
var state_13044__$1 = state_13044;
var statearr_13091_13143 = state_13044__$1;
(statearr_13091_13143[(2)] = inst_13011);

(statearr_13091_13143[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (16))){
var state_13044__$1 = state_13044;
var statearr_13092_13144 = state_13044__$1;
(statearr_13092_13144[(2)] = true);

(statearr_13092_13144[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (38))){
var inst_13034 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13093_13145 = state_13044__$1;
(statearr_13093_13145[(2)] = inst_13034);

(statearr_13093_13145[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (30))){
var inst_12995 = (state_13044[(9)]);
var inst_13004 = (state_13044[(10)]);
var inst_12996 = (state_13044[(13)]);
var inst_13021 = cljs.core.empty_QMARK_.call(null,inst_12995);
var inst_13022 = inst_12996.call(null,inst_13004);
var inst_13023 = cljs.core.not.call(null,inst_13022);
var inst_13024 = ((inst_13021) && (inst_13023));
var state_13044__$1 = state_13044;
var statearr_13094_13146 = state_13044__$1;
(statearr_13094_13146[(2)] = inst_13024);

(statearr_13094_13146[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (10))){
var inst_12946 = (state_13044[(8)]);
var inst_12967 = (state_13044[(2)]);
var inst_12968 = cljs.core.get.call(null,inst_12967,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_12969 = cljs.core.get.call(null,inst_12967,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_12970 = cljs.core.get.call(null,inst_12967,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_12971 = inst_12946;
var state_13044__$1 = (function (){var statearr_13095 = state_13044;
(statearr_13095[(16)] = inst_12969);

(statearr_13095[(17)] = inst_12968);

(statearr_13095[(18)] = inst_12970);

(statearr_13095[(7)] = inst_12971);

return statearr_13095;
})();
var statearr_13096_13147 = state_13044__$1;
(statearr_13096_13147[(2)] = null);

(statearr_13096_13147[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (18))){
var inst_12986 = (state_13044[(2)]);
var state_13044__$1 = state_13044;
var statearr_13097_13148 = state_13044__$1;
(statearr_13097_13148[(2)] = inst_12986);

(statearr_13097_13148[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (37))){
var state_13044__$1 = state_13044;
var statearr_13098_13149 = state_13044__$1;
(statearr_13098_13149[(2)] = null);

(statearr_13098_13149[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13045 === (8))){
var inst_12946 = (state_13044[(8)]);
var inst_12964 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12946);
var state_13044__$1 = state_13044;
var statearr_13099_13150 = state_13044__$1;
(statearr_13099_13150[(2)] = inst_12964);

(statearr_13099_13150[(1)] = (10));


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
});})(c__10181__auto___13104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__10014__auto__,c__10181__auto___13104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__10015__auto__ = null;
var cljs$core$async$mix_$_state_machine__10015__auto____0 = (function (){
var statearr_13100 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13100[(0)] = cljs$core$async$mix_$_state_machine__10015__auto__);

(statearr_13100[(1)] = (1));

return statearr_13100;
});
var cljs$core$async$mix_$_state_machine__10015__auto____1 = (function (state_13044){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13044);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13101){if((e13101 instanceof Object)){
var ex__10018__auto__ = e13101;
var statearr_13102_13151 = state_13044;
(statearr_13102_13151[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13044);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13152 = state_13044;
state_13044 = G__13152;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__10015__auto__ = function(state_13044){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__10015__auto____1.call(this,state_13044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__10015__auto____0;
cljs$core$async$mix_$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__10015__auto____1;
return cljs$core$async$mix_$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___13104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__10183__auto__ = (function (){var statearr_13103 = f__10182__auto__.call(null);
(statearr_13103[(6)] = c__10181__auto___13104);

return statearr_13103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___13104,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
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
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4348__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v,ch);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13154 = arguments.length;
switch (G__13154) {
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

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4347__auto__ = (((p == null))?null:p);
var m__4348__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4347__auto__)]);
if((!((m__4348__auto__ == null)))){
return m__4348__auto__.call(null,p,v);
} else {
var m__4348__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4348__auto____$1 == null)))){
return m__4348__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


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
var G__13158 = arguments.length;
switch (G__13158) {
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

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4047__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4047__auto__,mults){
return (function (p1__13156_SHARP_){
if(cljs.core.truth_(p1__13156_SHARP_.call(null,topic))){
return p1__13156_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13156_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4047__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13159 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13159 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13160){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13160 = meta13160;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13161,meta13160__$1){
var self__ = this;
var _13161__$1 = this;
return (new cljs.core.async.t_cljs$core$async13159(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13160__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13161){
var self__ = this;
var _13161__$1 = this;
return self__.meta13160;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5720__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5720__auto__)){
var m = temp__5720__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13159.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13159.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13160","meta13160",1105733710,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13159.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13159.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13159";

cljs.core.async.t_cljs$core$async13159.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async13159");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13159.
 */
cljs.core.async.__GT_t_cljs$core$async13159 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13160){
return (new cljs.core.async.t_cljs$core$async13159(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13160));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13159(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__10181__auto___13279 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___13279,mults,ensure_mult,p){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___13279,mults,ensure_mult,p){
return (function (state_13233){
var state_val_13234 = (state_13233[(1)]);
if((state_val_13234 === (7))){
var inst_13229 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
var statearr_13235_13280 = state_13233__$1;
(statearr_13235_13280[(2)] = inst_13229);

(statearr_13235_13280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (20))){
var state_13233__$1 = state_13233;
var statearr_13236_13281 = state_13233__$1;
(statearr_13236_13281[(2)] = null);

(statearr_13236_13281[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (1))){
var state_13233__$1 = state_13233;
var statearr_13237_13282 = state_13233__$1;
(statearr_13237_13282[(2)] = null);

(statearr_13237_13282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (24))){
var inst_13212 = (state_13233[(7)]);
var inst_13221 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13212);
var state_13233__$1 = state_13233;
var statearr_13238_13283 = state_13233__$1;
(statearr_13238_13283[(2)] = inst_13221);

(statearr_13238_13283[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (4))){
var inst_13164 = (state_13233[(8)]);
var inst_13164__$1 = (state_13233[(2)]);
var inst_13165 = (inst_13164__$1 == null);
var state_13233__$1 = (function (){var statearr_13239 = state_13233;
(statearr_13239[(8)] = inst_13164__$1);

return statearr_13239;
})();
if(cljs.core.truth_(inst_13165)){
var statearr_13240_13284 = state_13233__$1;
(statearr_13240_13284[(1)] = (5));

} else {
var statearr_13241_13285 = state_13233__$1;
(statearr_13241_13285[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (15))){
var inst_13206 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
var statearr_13242_13286 = state_13233__$1;
(statearr_13242_13286[(2)] = inst_13206);

(statearr_13242_13286[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (21))){
var inst_13226 = (state_13233[(2)]);
var state_13233__$1 = (function (){var statearr_13243 = state_13233;
(statearr_13243[(9)] = inst_13226);

return statearr_13243;
})();
var statearr_13244_13287 = state_13233__$1;
(statearr_13244_13287[(2)] = null);

(statearr_13244_13287[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (13))){
var inst_13188 = (state_13233[(10)]);
var inst_13190 = cljs.core.chunked_seq_QMARK_.call(null,inst_13188);
var state_13233__$1 = state_13233;
if(inst_13190){
var statearr_13245_13288 = state_13233__$1;
(statearr_13245_13288[(1)] = (16));

} else {
var statearr_13246_13289 = state_13233__$1;
(statearr_13246_13289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (22))){
var inst_13218 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
if(cljs.core.truth_(inst_13218)){
var statearr_13247_13290 = state_13233__$1;
(statearr_13247_13290[(1)] = (23));

} else {
var statearr_13248_13291 = state_13233__$1;
(statearr_13248_13291[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (6))){
var inst_13212 = (state_13233[(7)]);
var inst_13164 = (state_13233[(8)]);
var inst_13214 = (state_13233[(11)]);
var inst_13212__$1 = topic_fn.call(null,inst_13164);
var inst_13213 = cljs.core.deref.call(null,mults);
var inst_13214__$1 = cljs.core.get.call(null,inst_13213,inst_13212__$1);
var state_13233__$1 = (function (){var statearr_13249 = state_13233;
(statearr_13249[(7)] = inst_13212__$1);

(statearr_13249[(11)] = inst_13214__$1);

return statearr_13249;
})();
if(cljs.core.truth_(inst_13214__$1)){
var statearr_13250_13292 = state_13233__$1;
(statearr_13250_13292[(1)] = (19));

} else {
var statearr_13251_13293 = state_13233__$1;
(statearr_13251_13293[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (25))){
var inst_13223 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
var statearr_13252_13294 = state_13233__$1;
(statearr_13252_13294[(2)] = inst_13223);

(statearr_13252_13294[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (17))){
var inst_13188 = (state_13233[(10)]);
var inst_13197 = cljs.core.first.call(null,inst_13188);
var inst_13198 = cljs.core.async.muxch_STAR_.call(null,inst_13197);
var inst_13199 = cljs.core.async.close_BANG_.call(null,inst_13198);
var inst_13200 = cljs.core.next.call(null,inst_13188);
var inst_13174 = inst_13200;
var inst_13175 = null;
var inst_13176 = (0);
var inst_13177 = (0);
var state_13233__$1 = (function (){var statearr_13253 = state_13233;
(statearr_13253[(12)] = inst_13176);

(statearr_13253[(13)] = inst_13174);

(statearr_13253[(14)] = inst_13199);

(statearr_13253[(15)] = inst_13175);

(statearr_13253[(16)] = inst_13177);

return statearr_13253;
})();
var statearr_13254_13295 = state_13233__$1;
(statearr_13254_13295[(2)] = null);

(statearr_13254_13295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (3))){
var inst_13231 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13233__$1,inst_13231);
} else {
if((state_val_13234 === (12))){
var inst_13208 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
var statearr_13255_13296 = state_13233__$1;
(statearr_13255_13296[(2)] = inst_13208);

(statearr_13255_13296[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (2))){
var state_13233__$1 = state_13233;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13233__$1,(4),ch);
} else {
if((state_val_13234 === (23))){
var state_13233__$1 = state_13233;
var statearr_13256_13297 = state_13233__$1;
(statearr_13256_13297[(2)] = null);

(statearr_13256_13297[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (19))){
var inst_13164 = (state_13233[(8)]);
var inst_13214 = (state_13233[(11)]);
var inst_13216 = cljs.core.async.muxch_STAR_.call(null,inst_13214);
var state_13233__$1 = state_13233;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13233__$1,(22),inst_13216,inst_13164);
} else {
if((state_val_13234 === (11))){
var inst_13188 = (state_13233[(10)]);
var inst_13174 = (state_13233[(13)]);
var inst_13188__$1 = cljs.core.seq.call(null,inst_13174);
var state_13233__$1 = (function (){var statearr_13257 = state_13233;
(statearr_13257[(10)] = inst_13188__$1);

return statearr_13257;
})();
if(inst_13188__$1){
var statearr_13258_13298 = state_13233__$1;
(statearr_13258_13298[(1)] = (13));

} else {
var statearr_13259_13299 = state_13233__$1;
(statearr_13259_13299[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (9))){
var inst_13210 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
var statearr_13260_13300 = state_13233__$1;
(statearr_13260_13300[(2)] = inst_13210);

(statearr_13260_13300[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (5))){
var inst_13171 = cljs.core.deref.call(null,mults);
var inst_13172 = cljs.core.vals.call(null,inst_13171);
var inst_13173 = cljs.core.seq.call(null,inst_13172);
var inst_13174 = inst_13173;
var inst_13175 = null;
var inst_13176 = (0);
var inst_13177 = (0);
var state_13233__$1 = (function (){var statearr_13261 = state_13233;
(statearr_13261[(12)] = inst_13176);

(statearr_13261[(13)] = inst_13174);

(statearr_13261[(15)] = inst_13175);

(statearr_13261[(16)] = inst_13177);

return statearr_13261;
})();
var statearr_13262_13301 = state_13233__$1;
(statearr_13262_13301[(2)] = null);

(statearr_13262_13301[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (14))){
var state_13233__$1 = state_13233;
var statearr_13266_13302 = state_13233__$1;
(statearr_13266_13302[(2)] = null);

(statearr_13266_13302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (16))){
var inst_13188 = (state_13233[(10)]);
var inst_13192 = cljs.core.chunk_first.call(null,inst_13188);
var inst_13193 = cljs.core.chunk_rest.call(null,inst_13188);
var inst_13194 = cljs.core.count.call(null,inst_13192);
var inst_13174 = inst_13193;
var inst_13175 = inst_13192;
var inst_13176 = inst_13194;
var inst_13177 = (0);
var state_13233__$1 = (function (){var statearr_13267 = state_13233;
(statearr_13267[(12)] = inst_13176);

(statearr_13267[(13)] = inst_13174);

(statearr_13267[(15)] = inst_13175);

(statearr_13267[(16)] = inst_13177);

return statearr_13267;
})();
var statearr_13268_13303 = state_13233__$1;
(statearr_13268_13303[(2)] = null);

(statearr_13268_13303[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (10))){
var inst_13176 = (state_13233[(12)]);
var inst_13174 = (state_13233[(13)]);
var inst_13175 = (state_13233[(15)]);
var inst_13177 = (state_13233[(16)]);
var inst_13182 = cljs.core._nth.call(null,inst_13175,inst_13177);
var inst_13183 = cljs.core.async.muxch_STAR_.call(null,inst_13182);
var inst_13184 = cljs.core.async.close_BANG_.call(null,inst_13183);
var inst_13185 = (inst_13177 + (1));
var tmp13263 = inst_13176;
var tmp13264 = inst_13174;
var tmp13265 = inst_13175;
var inst_13174__$1 = tmp13264;
var inst_13175__$1 = tmp13265;
var inst_13176__$1 = tmp13263;
var inst_13177__$1 = inst_13185;
var state_13233__$1 = (function (){var statearr_13269 = state_13233;
(statearr_13269[(17)] = inst_13184);

(statearr_13269[(12)] = inst_13176__$1);

(statearr_13269[(13)] = inst_13174__$1);

(statearr_13269[(15)] = inst_13175__$1);

(statearr_13269[(16)] = inst_13177__$1);

return statearr_13269;
})();
var statearr_13270_13304 = state_13233__$1;
(statearr_13270_13304[(2)] = null);

(statearr_13270_13304[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (18))){
var inst_13203 = (state_13233[(2)]);
var state_13233__$1 = state_13233;
var statearr_13271_13305 = state_13233__$1;
(statearr_13271_13305[(2)] = inst_13203);

(statearr_13271_13305[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13234 === (8))){
var inst_13176 = (state_13233[(12)]);
var inst_13177 = (state_13233[(16)]);
var inst_13179 = (inst_13177 < inst_13176);
var inst_13180 = inst_13179;
var state_13233__$1 = state_13233;
if(cljs.core.truth_(inst_13180)){
var statearr_13272_13306 = state_13233__$1;
(statearr_13272_13306[(1)] = (10));

} else {
var statearr_13273_13307 = state_13233__$1;
(statearr_13273_13307[(1)] = (11));

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
});})(c__10181__auto___13279,mults,ensure_mult,p))
;
return ((function (switch__10014__auto__,c__10181__auto___13279,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_13274 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13274[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_13274[(1)] = (1));

return statearr_13274;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_13233){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13233);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13275){if((e13275 instanceof Object)){
var ex__10018__auto__ = e13275;
var statearr_13276_13308 = state_13233;
(statearr_13276_13308[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13233);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13275;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13309 = state_13233;
state_13233 = G__13309;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_13233){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_13233);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___13279,mults,ensure_mult,p))
})();
var state__10183__auto__ = (function (){var statearr_13277 = f__10182__auto__.call(null);
(statearr_13277[(6)] = c__10181__auto___13279);

return statearr_13277;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___13279,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__13311 = arguments.length;
switch (G__13311) {
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

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__13314 = arguments.length;
switch (G__13314) {
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

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

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
var G__13317 = arguments.length;
switch (G__13317) {
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

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__10181__auto___13384 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___13384,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___13384,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13356){
var state_val_13357 = (state_13356[(1)]);
if((state_val_13357 === (7))){
var state_13356__$1 = state_13356;
var statearr_13358_13385 = state_13356__$1;
(statearr_13358_13385[(2)] = null);

(statearr_13358_13385[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (1))){
var state_13356__$1 = state_13356;
var statearr_13359_13386 = state_13356__$1;
(statearr_13359_13386[(2)] = null);

(statearr_13359_13386[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (4))){
var inst_13320 = (state_13356[(7)]);
var inst_13322 = (inst_13320 < cnt);
var state_13356__$1 = state_13356;
if(cljs.core.truth_(inst_13322)){
var statearr_13360_13387 = state_13356__$1;
(statearr_13360_13387[(1)] = (6));

} else {
var statearr_13361_13388 = state_13356__$1;
(statearr_13361_13388[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (15))){
var inst_13352 = (state_13356[(2)]);
var state_13356__$1 = state_13356;
var statearr_13362_13389 = state_13356__$1;
(statearr_13362_13389[(2)] = inst_13352);

(statearr_13362_13389[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (13))){
var inst_13345 = cljs.core.async.close_BANG_.call(null,out);
var state_13356__$1 = state_13356;
var statearr_13363_13390 = state_13356__$1;
(statearr_13363_13390[(2)] = inst_13345);

(statearr_13363_13390[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (6))){
var state_13356__$1 = state_13356;
var statearr_13364_13391 = state_13356__$1;
(statearr_13364_13391[(2)] = null);

(statearr_13364_13391[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (3))){
var inst_13354 = (state_13356[(2)]);
var state_13356__$1 = state_13356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13356__$1,inst_13354);
} else {
if((state_val_13357 === (12))){
var inst_13342 = (state_13356[(8)]);
var inst_13342__$1 = (state_13356[(2)]);
var inst_13343 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13342__$1);
var state_13356__$1 = (function (){var statearr_13365 = state_13356;
(statearr_13365[(8)] = inst_13342__$1);

return statearr_13365;
})();
if(cljs.core.truth_(inst_13343)){
var statearr_13366_13392 = state_13356__$1;
(statearr_13366_13392[(1)] = (13));

} else {
var statearr_13367_13393 = state_13356__$1;
(statearr_13367_13393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (2))){
var inst_13319 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_13320 = (0);
var state_13356__$1 = (function (){var statearr_13368 = state_13356;
(statearr_13368[(7)] = inst_13320);

(statearr_13368[(9)] = inst_13319);

return statearr_13368;
})();
var statearr_13369_13394 = state_13356__$1;
(statearr_13369_13394[(2)] = null);

(statearr_13369_13394[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (11))){
var inst_13320 = (state_13356[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13356,(10),Object,null,(9));
var inst_13329 = chs__$1.call(null,inst_13320);
var inst_13330 = done.call(null,inst_13320);
var inst_13331 = cljs.core.async.take_BANG_.call(null,inst_13329,inst_13330);
var state_13356__$1 = state_13356;
var statearr_13370_13395 = state_13356__$1;
(statearr_13370_13395[(2)] = inst_13331);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13356__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (9))){
var inst_13320 = (state_13356[(7)]);
var inst_13333 = (state_13356[(2)]);
var inst_13334 = (inst_13320 + (1));
var inst_13320__$1 = inst_13334;
var state_13356__$1 = (function (){var statearr_13371 = state_13356;
(statearr_13371[(7)] = inst_13320__$1);

(statearr_13371[(10)] = inst_13333);

return statearr_13371;
})();
var statearr_13372_13396 = state_13356__$1;
(statearr_13372_13396[(2)] = null);

(statearr_13372_13396[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (5))){
var inst_13340 = (state_13356[(2)]);
var state_13356__$1 = (function (){var statearr_13373 = state_13356;
(statearr_13373[(11)] = inst_13340);

return statearr_13373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13356__$1,(12),dchan);
} else {
if((state_val_13357 === (14))){
var inst_13342 = (state_13356[(8)]);
var inst_13347 = cljs.core.apply.call(null,f,inst_13342);
var state_13356__$1 = state_13356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13356__$1,(16),out,inst_13347);
} else {
if((state_val_13357 === (16))){
var inst_13349 = (state_13356[(2)]);
var state_13356__$1 = (function (){var statearr_13374 = state_13356;
(statearr_13374[(12)] = inst_13349);

return statearr_13374;
})();
var statearr_13375_13397 = state_13356__$1;
(statearr_13375_13397[(2)] = null);

(statearr_13375_13397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (10))){
var inst_13324 = (state_13356[(2)]);
var inst_13325 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_13356__$1 = (function (){var statearr_13376 = state_13356;
(statearr_13376[(13)] = inst_13324);

return statearr_13376;
})();
var statearr_13377_13398 = state_13356__$1;
(statearr_13377_13398[(2)] = inst_13325);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13356__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13357 === (8))){
var inst_13338 = (state_13356[(2)]);
var state_13356__$1 = state_13356;
var statearr_13378_13399 = state_13356__$1;
(statearr_13378_13399[(2)] = inst_13338);

(statearr_13378_13399[(1)] = (5));


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
});})(c__10181__auto___13384,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__10014__auto__,c__10181__auto___13384,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_13379 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13379[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_13379[(1)] = (1));

return statearr_13379;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_13356){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13380){if((e13380 instanceof Object)){
var ex__10018__auto__ = e13380;
var statearr_13381_13400 = state_13356;
(statearr_13381_13400[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13401 = state_13356;
state_13356 = G__13401;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_13356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_13356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___13384,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__10183__auto__ = (function (){var statearr_13382 = f__10182__auto__.call(null);
(statearr_13382[(6)] = c__10181__auto___13384);

return statearr_13382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___13384,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__13404 = arguments.length;
switch (G__13404) {
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

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10181__auto___13458 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___13458,out){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___13458,out){
return (function (state_13436){
var state_val_13437 = (state_13436[(1)]);
if((state_val_13437 === (7))){
var inst_13415 = (state_13436[(7)]);
var inst_13416 = (state_13436[(8)]);
var inst_13415__$1 = (state_13436[(2)]);
var inst_13416__$1 = cljs.core.nth.call(null,inst_13415__$1,(0),null);
var inst_13417 = cljs.core.nth.call(null,inst_13415__$1,(1),null);
var inst_13418 = (inst_13416__$1 == null);
var state_13436__$1 = (function (){var statearr_13438 = state_13436;
(statearr_13438[(7)] = inst_13415__$1);

(statearr_13438[(8)] = inst_13416__$1);

(statearr_13438[(9)] = inst_13417);

return statearr_13438;
})();
if(cljs.core.truth_(inst_13418)){
var statearr_13439_13459 = state_13436__$1;
(statearr_13439_13459[(1)] = (8));

} else {
var statearr_13440_13460 = state_13436__$1;
(statearr_13440_13460[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13437 === (1))){
var inst_13405 = cljs.core.vec.call(null,chs);
var inst_13406 = inst_13405;
var state_13436__$1 = (function (){var statearr_13441 = state_13436;
(statearr_13441[(10)] = inst_13406);

return statearr_13441;
})();
var statearr_13442_13461 = state_13436__$1;
(statearr_13442_13461[(2)] = null);

(statearr_13442_13461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13437 === (4))){
var inst_13406 = (state_13436[(10)]);
var state_13436__$1 = state_13436;
return cljs.core.async.ioc_alts_BANG_.call(null,state_13436__$1,(7),inst_13406);
} else {
if((state_val_13437 === (6))){
var inst_13432 = (state_13436[(2)]);
var state_13436__$1 = state_13436;
var statearr_13443_13462 = state_13436__$1;
(statearr_13443_13462[(2)] = inst_13432);

(statearr_13443_13462[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13437 === (3))){
var inst_13434 = (state_13436[(2)]);
var state_13436__$1 = state_13436;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13436__$1,inst_13434);
} else {
if((state_val_13437 === (2))){
var inst_13406 = (state_13436[(10)]);
var inst_13408 = cljs.core.count.call(null,inst_13406);
var inst_13409 = (inst_13408 > (0));
var state_13436__$1 = state_13436;
if(cljs.core.truth_(inst_13409)){
var statearr_13445_13463 = state_13436__$1;
(statearr_13445_13463[(1)] = (4));

} else {
var statearr_13446_13464 = state_13436__$1;
(statearr_13446_13464[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13437 === (11))){
var inst_13406 = (state_13436[(10)]);
var inst_13425 = (state_13436[(2)]);
var tmp13444 = inst_13406;
var inst_13406__$1 = tmp13444;
var state_13436__$1 = (function (){var statearr_13447 = state_13436;
(statearr_13447[(10)] = inst_13406__$1);

(statearr_13447[(11)] = inst_13425);

return statearr_13447;
})();
var statearr_13448_13465 = state_13436__$1;
(statearr_13448_13465[(2)] = null);

(statearr_13448_13465[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13437 === (9))){
var inst_13416 = (state_13436[(8)]);
var state_13436__$1 = state_13436;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13436__$1,(11),out,inst_13416);
} else {
if((state_val_13437 === (5))){
var inst_13430 = cljs.core.async.close_BANG_.call(null,out);
var state_13436__$1 = state_13436;
var statearr_13449_13466 = state_13436__$1;
(statearr_13449_13466[(2)] = inst_13430);

(statearr_13449_13466[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13437 === (10))){
var inst_13428 = (state_13436[(2)]);
var state_13436__$1 = state_13436;
var statearr_13450_13467 = state_13436__$1;
(statearr_13450_13467[(2)] = inst_13428);

(statearr_13450_13467[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13437 === (8))){
var inst_13415 = (state_13436[(7)]);
var inst_13416 = (state_13436[(8)]);
var inst_13406 = (state_13436[(10)]);
var inst_13417 = (state_13436[(9)]);
var inst_13420 = (function (){var cs = inst_13406;
var vec__13411 = inst_13415;
var v = inst_13416;
var c = inst_13417;
return ((function (cs,vec__13411,v,c,inst_13415,inst_13416,inst_13406,inst_13417,state_val_13437,c__10181__auto___13458,out){
return (function (p1__13402_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__13402_SHARP_);
});
;})(cs,vec__13411,v,c,inst_13415,inst_13416,inst_13406,inst_13417,state_val_13437,c__10181__auto___13458,out))
})();
var inst_13421 = cljs.core.filterv.call(null,inst_13420,inst_13406);
var inst_13406__$1 = inst_13421;
var state_13436__$1 = (function (){var statearr_13451 = state_13436;
(statearr_13451[(10)] = inst_13406__$1);

return statearr_13451;
})();
var statearr_13452_13468 = state_13436__$1;
(statearr_13452_13468[(2)] = null);

(statearr_13452_13468[(1)] = (2));


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
});})(c__10181__auto___13458,out))
;
return ((function (switch__10014__auto__,c__10181__auto___13458,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_13453 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13453[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_13453[(1)] = (1));

return statearr_13453;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_13436){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13436);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13454){if((e13454 instanceof Object)){
var ex__10018__auto__ = e13454;
var statearr_13455_13469 = state_13436;
(statearr_13455_13469[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13436);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13470 = state_13436;
state_13436 = G__13470;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_13436){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_13436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___13458,out))
})();
var state__10183__auto__ = (function (){var statearr_13456 = f__10182__auto__.call(null);
(statearr_13456[(6)] = c__10181__auto___13458);

return statearr_13456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___13458,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__13472 = arguments.length;
switch (G__13472) {
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

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10181__auto___13517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___13517,out){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___13517,out){
return (function (state_13496){
var state_val_13497 = (state_13496[(1)]);
if((state_val_13497 === (7))){
var inst_13478 = (state_13496[(7)]);
var inst_13478__$1 = (state_13496[(2)]);
var inst_13479 = (inst_13478__$1 == null);
var inst_13480 = cljs.core.not.call(null,inst_13479);
var state_13496__$1 = (function (){var statearr_13498 = state_13496;
(statearr_13498[(7)] = inst_13478__$1);

return statearr_13498;
})();
if(inst_13480){
var statearr_13499_13518 = state_13496__$1;
(statearr_13499_13518[(1)] = (8));

} else {
var statearr_13500_13519 = state_13496__$1;
(statearr_13500_13519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13497 === (1))){
var inst_13473 = (0);
var state_13496__$1 = (function (){var statearr_13501 = state_13496;
(statearr_13501[(8)] = inst_13473);

return statearr_13501;
})();
var statearr_13502_13520 = state_13496__$1;
(statearr_13502_13520[(2)] = null);

(statearr_13502_13520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13497 === (4))){
var state_13496__$1 = state_13496;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13496__$1,(7),ch);
} else {
if((state_val_13497 === (6))){
var inst_13491 = (state_13496[(2)]);
var state_13496__$1 = state_13496;
var statearr_13503_13521 = state_13496__$1;
(statearr_13503_13521[(2)] = inst_13491);

(statearr_13503_13521[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13497 === (3))){
var inst_13493 = (state_13496[(2)]);
var inst_13494 = cljs.core.async.close_BANG_.call(null,out);
var state_13496__$1 = (function (){var statearr_13504 = state_13496;
(statearr_13504[(9)] = inst_13493);

return statearr_13504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13496__$1,inst_13494);
} else {
if((state_val_13497 === (2))){
var inst_13473 = (state_13496[(8)]);
var inst_13475 = (inst_13473 < n);
var state_13496__$1 = state_13496;
if(cljs.core.truth_(inst_13475)){
var statearr_13505_13522 = state_13496__$1;
(statearr_13505_13522[(1)] = (4));

} else {
var statearr_13506_13523 = state_13496__$1;
(statearr_13506_13523[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13497 === (11))){
var inst_13473 = (state_13496[(8)]);
var inst_13483 = (state_13496[(2)]);
var inst_13484 = (inst_13473 + (1));
var inst_13473__$1 = inst_13484;
var state_13496__$1 = (function (){var statearr_13507 = state_13496;
(statearr_13507[(10)] = inst_13483);

(statearr_13507[(8)] = inst_13473__$1);

return statearr_13507;
})();
var statearr_13508_13524 = state_13496__$1;
(statearr_13508_13524[(2)] = null);

(statearr_13508_13524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13497 === (9))){
var state_13496__$1 = state_13496;
var statearr_13509_13525 = state_13496__$1;
(statearr_13509_13525[(2)] = null);

(statearr_13509_13525[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13497 === (5))){
var state_13496__$1 = state_13496;
var statearr_13510_13526 = state_13496__$1;
(statearr_13510_13526[(2)] = null);

(statearr_13510_13526[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13497 === (10))){
var inst_13488 = (state_13496[(2)]);
var state_13496__$1 = state_13496;
var statearr_13511_13527 = state_13496__$1;
(statearr_13511_13527[(2)] = inst_13488);

(statearr_13511_13527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13497 === (8))){
var inst_13478 = (state_13496[(7)]);
var state_13496__$1 = state_13496;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13496__$1,(11),out,inst_13478);
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
});})(c__10181__auto___13517,out))
;
return ((function (switch__10014__auto__,c__10181__auto___13517,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_13512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13512[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_13512[(1)] = (1));

return statearr_13512;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_13496){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13496);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13513){if((e13513 instanceof Object)){
var ex__10018__auto__ = e13513;
var statearr_13514_13528 = state_13496;
(statearr_13514_13528[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13496);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13513;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13529 = state_13496;
state_13496 = G__13529;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_13496){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_13496);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___13517,out))
})();
var state__10183__auto__ = (function (){var statearr_13515 = f__10182__auto__.call(null);
(statearr_13515[(6)] = c__10181__auto___13517);

return statearr_13515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___13517,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13531 = (function (f,ch,meta13532){
this.f = f;
this.ch = ch;
this.meta13532 = meta13532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13533,meta13532__$1){
var self__ = this;
var _13533__$1 = this;
return (new cljs.core.async.t_cljs$core$async13531(self__.f,self__.ch,meta13532__$1));
});

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13533){
var self__ = this;
var _13533__$1 = this;
return self__.meta13532;
});

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13534 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13534 = (function (f,ch,meta13532,_,fn1,meta13535){
this.f = f;
this.ch = ch;
this.meta13532 = meta13532;
this._ = _;
this.fn1 = fn1;
this.meta13535 = meta13535;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_13536,meta13535__$1){
var self__ = this;
var _13536__$1 = this;
return (new cljs.core.async.t_cljs$core$async13534(self__.f,self__.ch,self__.meta13532,self__._,self__.fn1,meta13535__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_13536){
var self__ = this;
var _13536__$1 = this;
return self__.meta13535;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async13534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__13530_SHARP_){
return f1.call(null,(((p1__13530_SHARP_ == null))?null:self__.f.call(null,p1__13530_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async13534.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13532","meta13532",929245815,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async13531","cljs.core.async/t_cljs$core$async13531",-435877576,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta13535","meta13535",-691485404,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async13534.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13534.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13534";

cljs.core.async.t_cljs$core$async13534.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async13534");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13534.
 */
cljs.core.async.__GT_t_cljs$core$async13534 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13534(f__$1,ch__$1,meta13532__$1,___$2,fn1__$1,meta13535){
return (new cljs.core.async.t_cljs$core$async13534(f__$1,ch__$1,meta13532__$1,___$2,fn1__$1,meta13535));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async13534(self__.f,self__.ch,self__.meta13532,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4036__auto__ = ret;
if(cljs.core.truth_(and__4036__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4036__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async13531.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13532","meta13532",929245815,null)], null);
});

cljs.core.async.t_cljs$core$async13531.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13531.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13531";

cljs.core.async.t_cljs$core$async13531.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async13531");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13531.
 */
cljs.core.async.__GT_t_cljs$core$async13531 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async13531(f__$1,ch__$1,meta13532){
return (new cljs.core.async.t_cljs$core$async13531(f__$1,ch__$1,meta13532));
});

}

return (new cljs.core.async.t_cljs$core$async13531(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13537 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13537 = (function (f,ch,meta13538){
this.f = f;
this.ch = ch;
this.meta13538 = meta13538;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13539,meta13538__$1){
var self__ = this;
var _13539__$1 = this;
return (new cljs.core.async.t_cljs$core$async13537(self__.f,self__.ch,meta13538__$1));
});

cljs.core.async.t_cljs$core$async13537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13539){
var self__ = this;
var _13539__$1 = this;
return self__.meta13538;
});

cljs.core.async.t_cljs$core$async13537.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13537.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13537.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13537.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13537.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13537.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async13537.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13538","meta13538",-2045312889,null)], null);
});

cljs.core.async.t_cljs$core$async13537.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13537.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13537";

cljs.core.async.t_cljs$core$async13537.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async13537");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13537.
 */
cljs.core.async.__GT_t_cljs$core$async13537 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async13537(f__$1,ch__$1,meta13538){
return (new cljs.core.async.t_cljs$core$async13537(f__$1,ch__$1,meta13538));
});

}

return (new cljs.core.async.t_cljs$core$async13537(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13540 = (function (p,ch,meta13541){
this.p = p;
this.ch = ch;
this.meta13541 = meta13541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13542,meta13541__$1){
var self__ = this;
var _13542__$1 = this;
return (new cljs.core.async.t_cljs$core$async13540(self__.p,self__.ch,meta13541__$1));
});

cljs.core.async.t_cljs$core$async13540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13542){
var self__ = this;
var _13542__$1 = this;
return self__.meta13541;
});

cljs.core.async.t_cljs$core$async13540.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13540.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13540.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async13540.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13540.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async13540.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13540.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async13540.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta13541","meta13541",-1769083575,null)], null);
});

cljs.core.async.t_cljs$core$async13540.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13540.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13540";

cljs.core.async.t_cljs$core$async13540.cljs$lang$ctorPrWriter = (function (this__4290__auto__,writer__4291__auto__,opt__4292__auto__){
return cljs.core._write.call(null,writer__4291__auto__,"cljs.core.async/t_cljs$core$async13540");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13540.
 */
cljs.core.async.__GT_t_cljs$core$async13540 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async13540(p__$1,ch__$1,meta13541){
return (new cljs.core.async.t_cljs$core$async13540(p__$1,ch__$1,meta13541));
});

}

return (new cljs.core.async.t_cljs$core$async13540(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__13544 = arguments.length;
switch (G__13544) {
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

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10181__auto___13584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___13584,out){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___13584,out){
return (function (state_13565){
var state_val_13566 = (state_13565[(1)]);
if((state_val_13566 === (7))){
var inst_13561 = (state_13565[(2)]);
var state_13565__$1 = state_13565;
var statearr_13567_13585 = state_13565__$1;
(statearr_13567_13585[(2)] = inst_13561);

(statearr_13567_13585[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (1))){
var state_13565__$1 = state_13565;
var statearr_13568_13586 = state_13565__$1;
(statearr_13568_13586[(2)] = null);

(statearr_13568_13586[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (4))){
var inst_13547 = (state_13565[(7)]);
var inst_13547__$1 = (state_13565[(2)]);
var inst_13548 = (inst_13547__$1 == null);
var state_13565__$1 = (function (){var statearr_13569 = state_13565;
(statearr_13569[(7)] = inst_13547__$1);

return statearr_13569;
})();
if(cljs.core.truth_(inst_13548)){
var statearr_13570_13587 = state_13565__$1;
(statearr_13570_13587[(1)] = (5));

} else {
var statearr_13571_13588 = state_13565__$1;
(statearr_13571_13588[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (6))){
var inst_13547 = (state_13565[(7)]);
var inst_13552 = p.call(null,inst_13547);
var state_13565__$1 = state_13565;
if(cljs.core.truth_(inst_13552)){
var statearr_13572_13589 = state_13565__$1;
(statearr_13572_13589[(1)] = (8));

} else {
var statearr_13573_13590 = state_13565__$1;
(statearr_13573_13590[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (3))){
var inst_13563 = (state_13565[(2)]);
var state_13565__$1 = state_13565;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13565__$1,inst_13563);
} else {
if((state_val_13566 === (2))){
var state_13565__$1 = state_13565;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13565__$1,(4),ch);
} else {
if((state_val_13566 === (11))){
var inst_13555 = (state_13565[(2)]);
var state_13565__$1 = state_13565;
var statearr_13574_13591 = state_13565__$1;
(statearr_13574_13591[(2)] = inst_13555);

(statearr_13574_13591[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (9))){
var state_13565__$1 = state_13565;
var statearr_13575_13592 = state_13565__$1;
(statearr_13575_13592[(2)] = null);

(statearr_13575_13592[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (5))){
var inst_13550 = cljs.core.async.close_BANG_.call(null,out);
var state_13565__$1 = state_13565;
var statearr_13576_13593 = state_13565__$1;
(statearr_13576_13593[(2)] = inst_13550);

(statearr_13576_13593[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (10))){
var inst_13558 = (state_13565[(2)]);
var state_13565__$1 = (function (){var statearr_13577 = state_13565;
(statearr_13577[(8)] = inst_13558);

return statearr_13577;
})();
var statearr_13578_13594 = state_13565__$1;
(statearr_13578_13594[(2)] = null);

(statearr_13578_13594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13566 === (8))){
var inst_13547 = (state_13565[(7)]);
var state_13565__$1 = state_13565;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13565__$1,(11),out,inst_13547);
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
});})(c__10181__auto___13584,out))
;
return ((function (switch__10014__auto__,c__10181__auto___13584,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_13579 = [null,null,null,null,null,null,null,null,null];
(statearr_13579[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_13579[(1)] = (1));

return statearr_13579;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_13565){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13565);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13580){if((e13580 instanceof Object)){
var ex__10018__auto__ = e13580;
var statearr_13581_13595 = state_13565;
(statearr_13581_13595[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13565);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13596 = state_13565;
state_13565 = G__13596;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_13565){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_13565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___13584,out))
})();
var state__10183__auto__ = (function (){var statearr_13582 = f__10182__auto__.call(null);
(statearr_13582[(6)] = c__10181__auto___13584);

return statearr_13582;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___13584,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__13598 = arguments.length;
switch (G__13598) {
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

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__10181__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto__){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto__){
return (function (state_13661){
var state_val_13662 = (state_13661[(1)]);
if((state_val_13662 === (7))){
var inst_13657 = (state_13661[(2)]);
var state_13661__$1 = state_13661;
var statearr_13663_13701 = state_13661__$1;
(statearr_13663_13701[(2)] = inst_13657);

(statearr_13663_13701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (20))){
var inst_13627 = (state_13661[(7)]);
var inst_13638 = (state_13661[(2)]);
var inst_13639 = cljs.core.next.call(null,inst_13627);
var inst_13613 = inst_13639;
var inst_13614 = null;
var inst_13615 = (0);
var inst_13616 = (0);
var state_13661__$1 = (function (){var statearr_13664 = state_13661;
(statearr_13664[(8)] = inst_13638);

(statearr_13664[(9)] = inst_13615);

(statearr_13664[(10)] = inst_13616);

(statearr_13664[(11)] = inst_13614);

(statearr_13664[(12)] = inst_13613);

return statearr_13664;
})();
var statearr_13665_13702 = state_13661__$1;
(statearr_13665_13702[(2)] = null);

(statearr_13665_13702[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (1))){
var state_13661__$1 = state_13661;
var statearr_13666_13703 = state_13661__$1;
(statearr_13666_13703[(2)] = null);

(statearr_13666_13703[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (4))){
var inst_13602 = (state_13661[(13)]);
var inst_13602__$1 = (state_13661[(2)]);
var inst_13603 = (inst_13602__$1 == null);
var state_13661__$1 = (function (){var statearr_13667 = state_13661;
(statearr_13667[(13)] = inst_13602__$1);

return statearr_13667;
})();
if(cljs.core.truth_(inst_13603)){
var statearr_13668_13704 = state_13661__$1;
(statearr_13668_13704[(1)] = (5));

} else {
var statearr_13669_13705 = state_13661__$1;
(statearr_13669_13705[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (15))){
var state_13661__$1 = state_13661;
var statearr_13673_13706 = state_13661__$1;
(statearr_13673_13706[(2)] = null);

(statearr_13673_13706[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (21))){
var state_13661__$1 = state_13661;
var statearr_13674_13707 = state_13661__$1;
(statearr_13674_13707[(2)] = null);

(statearr_13674_13707[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (13))){
var inst_13615 = (state_13661[(9)]);
var inst_13616 = (state_13661[(10)]);
var inst_13614 = (state_13661[(11)]);
var inst_13613 = (state_13661[(12)]);
var inst_13623 = (state_13661[(2)]);
var inst_13624 = (inst_13616 + (1));
var tmp13670 = inst_13615;
var tmp13671 = inst_13614;
var tmp13672 = inst_13613;
var inst_13613__$1 = tmp13672;
var inst_13614__$1 = tmp13671;
var inst_13615__$1 = tmp13670;
var inst_13616__$1 = inst_13624;
var state_13661__$1 = (function (){var statearr_13675 = state_13661;
(statearr_13675[(14)] = inst_13623);

(statearr_13675[(9)] = inst_13615__$1);

(statearr_13675[(10)] = inst_13616__$1);

(statearr_13675[(11)] = inst_13614__$1);

(statearr_13675[(12)] = inst_13613__$1);

return statearr_13675;
})();
var statearr_13676_13708 = state_13661__$1;
(statearr_13676_13708[(2)] = null);

(statearr_13676_13708[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (22))){
var state_13661__$1 = state_13661;
var statearr_13677_13709 = state_13661__$1;
(statearr_13677_13709[(2)] = null);

(statearr_13677_13709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (6))){
var inst_13602 = (state_13661[(13)]);
var inst_13611 = f.call(null,inst_13602);
var inst_13612 = cljs.core.seq.call(null,inst_13611);
var inst_13613 = inst_13612;
var inst_13614 = null;
var inst_13615 = (0);
var inst_13616 = (0);
var state_13661__$1 = (function (){var statearr_13678 = state_13661;
(statearr_13678[(9)] = inst_13615);

(statearr_13678[(10)] = inst_13616);

(statearr_13678[(11)] = inst_13614);

(statearr_13678[(12)] = inst_13613);

return statearr_13678;
})();
var statearr_13679_13710 = state_13661__$1;
(statearr_13679_13710[(2)] = null);

(statearr_13679_13710[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (17))){
var inst_13627 = (state_13661[(7)]);
var inst_13631 = cljs.core.chunk_first.call(null,inst_13627);
var inst_13632 = cljs.core.chunk_rest.call(null,inst_13627);
var inst_13633 = cljs.core.count.call(null,inst_13631);
var inst_13613 = inst_13632;
var inst_13614 = inst_13631;
var inst_13615 = inst_13633;
var inst_13616 = (0);
var state_13661__$1 = (function (){var statearr_13680 = state_13661;
(statearr_13680[(9)] = inst_13615);

(statearr_13680[(10)] = inst_13616);

(statearr_13680[(11)] = inst_13614);

(statearr_13680[(12)] = inst_13613);

return statearr_13680;
})();
var statearr_13681_13711 = state_13661__$1;
(statearr_13681_13711[(2)] = null);

(statearr_13681_13711[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (3))){
var inst_13659 = (state_13661[(2)]);
var state_13661__$1 = state_13661;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13661__$1,inst_13659);
} else {
if((state_val_13662 === (12))){
var inst_13647 = (state_13661[(2)]);
var state_13661__$1 = state_13661;
var statearr_13682_13712 = state_13661__$1;
(statearr_13682_13712[(2)] = inst_13647);

(statearr_13682_13712[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (2))){
var state_13661__$1 = state_13661;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13661__$1,(4),in$);
} else {
if((state_val_13662 === (23))){
var inst_13655 = (state_13661[(2)]);
var state_13661__$1 = state_13661;
var statearr_13683_13713 = state_13661__$1;
(statearr_13683_13713[(2)] = inst_13655);

(statearr_13683_13713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (19))){
var inst_13642 = (state_13661[(2)]);
var state_13661__$1 = state_13661;
var statearr_13684_13714 = state_13661__$1;
(statearr_13684_13714[(2)] = inst_13642);

(statearr_13684_13714[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (11))){
var inst_13627 = (state_13661[(7)]);
var inst_13613 = (state_13661[(12)]);
var inst_13627__$1 = cljs.core.seq.call(null,inst_13613);
var state_13661__$1 = (function (){var statearr_13685 = state_13661;
(statearr_13685[(7)] = inst_13627__$1);

return statearr_13685;
})();
if(inst_13627__$1){
var statearr_13686_13715 = state_13661__$1;
(statearr_13686_13715[(1)] = (14));

} else {
var statearr_13687_13716 = state_13661__$1;
(statearr_13687_13716[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (9))){
var inst_13649 = (state_13661[(2)]);
var inst_13650 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_13661__$1 = (function (){var statearr_13688 = state_13661;
(statearr_13688[(15)] = inst_13649);

return statearr_13688;
})();
if(cljs.core.truth_(inst_13650)){
var statearr_13689_13717 = state_13661__$1;
(statearr_13689_13717[(1)] = (21));

} else {
var statearr_13690_13718 = state_13661__$1;
(statearr_13690_13718[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (5))){
var inst_13605 = cljs.core.async.close_BANG_.call(null,out);
var state_13661__$1 = state_13661;
var statearr_13691_13719 = state_13661__$1;
(statearr_13691_13719[(2)] = inst_13605);

(statearr_13691_13719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (14))){
var inst_13627 = (state_13661[(7)]);
var inst_13629 = cljs.core.chunked_seq_QMARK_.call(null,inst_13627);
var state_13661__$1 = state_13661;
if(inst_13629){
var statearr_13692_13720 = state_13661__$1;
(statearr_13692_13720[(1)] = (17));

} else {
var statearr_13693_13721 = state_13661__$1;
(statearr_13693_13721[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (16))){
var inst_13645 = (state_13661[(2)]);
var state_13661__$1 = state_13661;
var statearr_13694_13722 = state_13661__$1;
(statearr_13694_13722[(2)] = inst_13645);

(statearr_13694_13722[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13662 === (10))){
var inst_13616 = (state_13661[(10)]);
var inst_13614 = (state_13661[(11)]);
var inst_13621 = cljs.core._nth.call(null,inst_13614,inst_13616);
var state_13661__$1 = state_13661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13661__$1,(13),out,inst_13621);
} else {
if((state_val_13662 === (18))){
var inst_13627 = (state_13661[(7)]);
var inst_13636 = cljs.core.first.call(null,inst_13627);
var state_13661__$1 = state_13661;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13661__$1,(20),out,inst_13636);
} else {
if((state_val_13662 === (8))){
var inst_13615 = (state_13661[(9)]);
var inst_13616 = (state_13661[(10)]);
var inst_13618 = (inst_13616 < inst_13615);
var inst_13619 = inst_13618;
var state_13661__$1 = state_13661;
if(cljs.core.truth_(inst_13619)){
var statearr_13695_13723 = state_13661__$1;
(statearr_13695_13723[(1)] = (10));

} else {
var statearr_13696_13724 = state_13661__$1;
(statearr_13696_13724[(1)] = (11));

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
});})(c__10181__auto__))
;
return ((function (switch__10014__auto__,c__10181__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____0 = (function (){
var statearr_13697 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13697[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__);

(statearr_13697[(1)] = (1));

return statearr_13697;
});
var cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____1 = (function (state_13661){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13661);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13698){if((e13698 instanceof Object)){
var ex__10018__auto__ = e13698;
var statearr_13699_13725 = state_13661;
(statearr_13699_13725[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13661);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13698;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13726 = state_13661;
state_13661 = G__13726;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__ = function(state_13661){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____1.call(this,state_13661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__10015__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto__))
})();
var state__10183__auto__ = (function (){var statearr_13700 = f__10182__auto__.call(null);
(statearr_13700[(6)] = c__10181__auto__);

return statearr_13700;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto__))
);

return c__10181__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__13728 = arguments.length;
switch (G__13728) {
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

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__13731 = arguments.length;
switch (G__13731) {
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

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__13734 = arguments.length;
switch (G__13734) {
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

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10181__auto___13781 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___13781,out){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___13781,out){
return (function (state_13758){
var state_val_13759 = (state_13758[(1)]);
if((state_val_13759 === (7))){
var inst_13753 = (state_13758[(2)]);
var state_13758__$1 = state_13758;
var statearr_13760_13782 = state_13758__$1;
(statearr_13760_13782[(2)] = inst_13753);

(statearr_13760_13782[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13759 === (1))){
var inst_13735 = null;
var state_13758__$1 = (function (){var statearr_13761 = state_13758;
(statearr_13761[(7)] = inst_13735);

return statearr_13761;
})();
var statearr_13762_13783 = state_13758__$1;
(statearr_13762_13783[(2)] = null);

(statearr_13762_13783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13759 === (4))){
var inst_13738 = (state_13758[(8)]);
var inst_13738__$1 = (state_13758[(2)]);
var inst_13739 = (inst_13738__$1 == null);
var inst_13740 = cljs.core.not.call(null,inst_13739);
var state_13758__$1 = (function (){var statearr_13763 = state_13758;
(statearr_13763[(8)] = inst_13738__$1);

return statearr_13763;
})();
if(inst_13740){
var statearr_13764_13784 = state_13758__$1;
(statearr_13764_13784[(1)] = (5));

} else {
var statearr_13765_13785 = state_13758__$1;
(statearr_13765_13785[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13759 === (6))){
var state_13758__$1 = state_13758;
var statearr_13766_13786 = state_13758__$1;
(statearr_13766_13786[(2)] = null);

(statearr_13766_13786[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13759 === (3))){
var inst_13755 = (state_13758[(2)]);
var inst_13756 = cljs.core.async.close_BANG_.call(null,out);
var state_13758__$1 = (function (){var statearr_13767 = state_13758;
(statearr_13767[(9)] = inst_13755);

return statearr_13767;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13758__$1,inst_13756);
} else {
if((state_val_13759 === (2))){
var state_13758__$1 = state_13758;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13758__$1,(4),ch);
} else {
if((state_val_13759 === (11))){
var inst_13738 = (state_13758[(8)]);
var inst_13747 = (state_13758[(2)]);
var inst_13735 = inst_13738;
var state_13758__$1 = (function (){var statearr_13768 = state_13758;
(statearr_13768[(10)] = inst_13747);

(statearr_13768[(7)] = inst_13735);

return statearr_13768;
})();
var statearr_13769_13787 = state_13758__$1;
(statearr_13769_13787[(2)] = null);

(statearr_13769_13787[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13759 === (9))){
var inst_13738 = (state_13758[(8)]);
var state_13758__$1 = state_13758;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13758__$1,(11),out,inst_13738);
} else {
if((state_val_13759 === (5))){
var inst_13738 = (state_13758[(8)]);
var inst_13735 = (state_13758[(7)]);
var inst_13742 = cljs.core._EQ_.call(null,inst_13738,inst_13735);
var state_13758__$1 = state_13758;
if(inst_13742){
var statearr_13771_13788 = state_13758__$1;
(statearr_13771_13788[(1)] = (8));

} else {
var statearr_13772_13789 = state_13758__$1;
(statearr_13772_13789[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13759 === (10))){
var inst_13750 = (state_13758[(2)]);
var state_13758__$1 = state_13758;
var statearr_13773_13790 = state_13758__$1;
(statearr_13773_13790[(2)] = inst_13750);

(statearr_13773_13790[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13759 === (8))){
var inst_13735 = (state_13758[(7)]);
var tmp13770 = inst_13735;
var inst_13735__$1 = tmp13770;
var state_13758__$1 = (function (){var statearr_13774 = state_13758;
(statearr_13774[(7)] = inst_13735__$1);

return statearr_13774;
})();
var statearr_13775_13791 = state_13758__$1;
(statearr_13775_13791[(2)] = null);

(statearr_13775_13791[(1)] = (2));


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
});})(c__10181__auto___13781,out))
;
return ((function (switch__10014__auto__,c__10181__auto___13781,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_13776 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13776[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_13776[(1)] = (1));

return statearr_13776;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_13758){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13777){if((e13777 instanceof Object)){
var ex__10018__auto__ = e13777;
var statearr_13778_13792 = state_13758;
(statearr_13778_13792[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13777;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13793 = state_13758;
state_13758 = G__13793;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_13758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_13758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___13781,out))
})();
var state__10183__auto__ = (function (){var statearr_13779 = f__10182__auto__.call(null);
(statearr_13779[(6)] = c__10181__auto___13781);

return statearr_13779;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___13781,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__13795 = arguments.length;
switch (G__13795) {
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

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10181__auto___13861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___13861,out){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___13861,out){
return (function (state_13833){
var state_val_13834 = (state_13833[(1)]);
if((state_val_13834 === (7))){
var inst_13829 = (state_13833[(2)]);
var state_13833__$1 = state_13833;
var statearr_13835_13862 = state_13833__$1;
(statearr_13835_13862[(2)] = inst_13829);

(statearr_13835_13862[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (1))){
var inst_13796 = (new Array(n));
var inst_13797 = inst_13796;
var inst_13798 = (0);
var state_13833__$1 = (function (){var statearr_13836 = state_13833;
(statearr_13836[(7)] = inst_13797);

(statearr_13836[(8)] = inst_13798);

return statearr_13836;
})();
var statearr_13837_13863 = state_13833__$1;
(statearr_13837_13863[(2)] = null);

(statearr_13837_13863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (4))){
var inst_13801 = (state_13833[(9)]);
var inst_13801__$1 = (state_13833[(2)]);
var inst_13802 = (inst_13801__$1 == null);
var inst_13803 = cljs.core.not.call(null,inst_13802);
var state_13833__$1 = (function (){var statearr_13838 = state_13833;
(statearr_13838[(9)] = inst_13801__$1);

return statearr_13838;
})();
if(inst_13803){
var statearr_13839_13864 = state_13833__$1;
(statearr_13839_13864[(1)] = (5));

} else {
var statearr_13840_13865 = state_13833__$1;
(statearr_13840_13865[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (15))){
var inst_13823 = (state_13833[(2)]);
var state_13833__$1 = state_13833;
var statearr_13841_13866 = state_13833__$1;
(statearr_13841_13866[(2)] = inst_13823);

(statearr_13841_13866[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (13))){
var state_13833__$1 = state_13833;
var statearr_13842_13867 = state_13833__$1;
(statearr_13842_13867[(2)] = null);

(statearr_13842_13867[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (6))){
var inst_13798 = (state_13833[(8)]);
var inst_13819 = (inst_13798 > (0));
var state_13833__$1 = state_13833;
if(cljs.core.truth_(inst_13819)){
var statearr_13843_13868 = state_13833__$1;
(statearr_13843_13868[(1)] = (12));

} else {
var statearr_13844_13869 = state_13833__$1;
(statearr_13844_13869[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (3))){
var inst_13831 = (state_13833[(2)]);
var state_13833__$1 = state_13833;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13833__$1,inst_13831);
} else {
if((state_val_13834 === (12))){
var inst_13797 = (state_13833[(7)]);
var inst_13821 = cljs.core.vec.call(null,inst_13797);
var state_13833__$1 = state_13833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13833__$1,(15),out,inst_13821);
} else {
if((state_val_13834 === (2))){
var state_13833__$1 = state_13833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13833__$1,(4),ch);
} else {
if((state_val_13834 === (11))){
var inst_13813 = (state_13833[(2)]);
var inst_13814 = (new Array(n));
var inst_13797 = inst_13814;
var inst_13798 = (0);
var state_13833__$1 = (function (){var statearr_13845 = state_13833;
(statearr_13845[(7)] = inst_13797);

(statearr_13845[(8)] = inst_13798);

(statearr_13845[(10)] = inst_13813);

return statearr_13845;
})();
var statearr_13846_13870 = state_13833__$1;
(statearr_13846_13870[(2)] = null);

(statearr_13846_13870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (9))){
var inst_13797 = (state_13833[(7)]);
var inst_13811 = cljs.core.vec.call(null,inst_13797);
var state_13833__$1 = state_13833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13833__$1,(11),out,inst_13811);
} else {
if((state_val_13834 === (5))){
var inst_13801 = (state_13833[(9)]);
var inst_13797 = (state_13833[(7)]);
var inst_13798 = (state_13833[(8)]);
var inst_13806 = (state_13833[(11)]);
var inst_13805 = (inst_13797[inst_13798] = inst_13801);
var inst_13806__$1 = (inst_13798 + (1));
var inst_13807 = (inst_13806__$1 < n);
var state_13833__$1 = (function (){var statearr_13847 = state_13833;
(statearr_13847[(12)] = inst_13805);

(statearr_13847[(11)] = inst_13806__$1);

return statearr_13847;
})();
if(cljs.core.truth_(inst_13807)){
var statearr_13848_13871 = state_13833__$1;
(statearr_13848_13871[(1)] = (8));

} else {
var statearr_13849_13872 = state_13833__$1;
(statearr_13849_13872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (14))){
var inst_13826 = (state_13833[(2)]);
var inst_13827 = cljs.core.async.close_BANG_.call(null,out);
var state_13833__$1 = (function (){var statearr_13851 = state_13833;
(statearr_13851[(13)] = inst_13826);

return statearr_13851;
})();
var statearr_13852_13873 = state_13833__$1;
(statearr_13852_13873[(2)] = inst_13827);

(statearr_13852_13873[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (10))){
var inst_13817 = (state_13833[(2)]);
var state_13833__$1 = state_13833;
var statearr_13853_13874 = state_13833__$1;
(statearr_13853_13874[(2)] = inst_13817);

(statearr_13853_13874[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13834 === (8))){
var inst_13797 = (state_13833[(7)]);
var inst_13806 = (state_13833[(11)]);
var tmp13850 = inst_13797;
var inst_13797__$1 = tmp13850;
var inst_13798 = inst_13806;
var state_13833__$1 = (function (){var statearr_13854 = state_13833;
(statearr_13854[(7)] = inst_13797__$1);

(statearr_13854[(8)] = inst_13798);

return statearr_13854;
})();
var statearr_13855_13875 = state_13833__$1;
(statearr_13855_13875[(2)] = null);

(statearr_13855_13875[(1)] = (2));


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
});})(c__10181__auto___13861,out))
;
return ((function (switch__10014__auto__,c__10181__auto___13861,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_13856 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13856[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_13856[(1)] = (1));

return statearr_13856;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_13833){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13857){if((e13857 instanceof Object)){
var ex__10018__auto__ = e13857;
var statearr_13858_13876 = state_13833;
(statearr_13858_13876[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13857;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13877 = state_13833;
state_13833 = G__13877;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_13833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_13833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___13861,out))
})();
var state__10183__auto__ = (function (){var statearr_13859 = f__10182__auto__.call(null);
(statearr_13859[(6)] = c__10181__auto___13861);

return statearr_13859;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___13861,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__13879 = arguments.length;
switch (G__13879) {
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

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__10181__auto___13949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__10181__auto___13949,out){
return (function (){
var f__10182__auto__ = (function (){var switch__10014__auto__ = ((function (c__10181__auto___13949,out){
return (function (state_13921){
var state_val_13922 = (state_13921[(1)]);
if((state_val_13922 === (7))){
var inst_13917 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
var statearr_13923_13950 = state_13921__$1;
(statearr_13923_13950[(2)] = inst_13917);

(statearr_13923_13950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (1))){
var inst_13880 = [];
var inst_13881 = inst_13880;
var inst_13882 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_13921__$1 = (function (){var statearr_13924 = state_13921;
(statearr_13924[(7)] = inst_13882);

(statearr_13924[(8)] = inst_13881);

return statearr_13924;
})();
var statearr_13925_13951 = state_13921__$1;
(statearr_13925_13951[(2)] = null);

(statearr_13925_13951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (4))){
var inst_13885 = (state_13921[(9)]);
var inst_13885__$1 = (state_13921[(2)]);
var inst_13886 = (inst_13885__$1 == null);
var inst_13887 = cljs.core.not.call(null,inst_13886);
var state_13921__$1 = (function (){var statearr_13926 = state_13921;
(statearr_13926[(9)] = inst_13885__$1);

return statearr_13926;
})();
if(inst_13887){
var statearr_13927_13952 = state_13921__$1;
(statearr_13927_13952[(1)] = (5));

} else {
var statearr_13928_13953 = state_13921__$1;
(statearr_13928_13953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (15))){
var inst_13911 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
var statearr_13929_13954 = state_13921__$1;
(statearr_13929_13954[(2)] = inst_13911);

(statearr_13929_13954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (13))){
var state_13921__$1 = state_13921;
var statearr_13930_13955 = state_13921__$1;
(statearr_13930_13955[(2)] = null);

(statearr_13930_13955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (6))){
var inst_13881 = (state_13921[(8)]);
var inst_13906 = inst_13881.length;
var inst_13907 = (inst_13906 > (0));
var state_13921__$1 = state_13921;
if(cljs.core.truth_(inst_13907)){
var statearr_13931_13956 = state_13921__$1;
(statearr_13931_13956[(1)] = (12));

} else {
var statearr_13932_13957 = state_13921__$1;
(statearr_13932_13957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (3))){
var inst_13919 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13921__$1,inst_13919);
} else {
if((state_val_13922 === (12))){
var inst_13881 = (state_13921[(8)]);
var inst_13909 = cljs.core.vec.call(null,inst_13881);
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13921__$1,(15),out,inst_13909);
} else {
if((state_val_13922 === (2))){
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13921__$1,(4),ch);
} else {
if((state_val_13922 === (11))){
var inst_13885 = (state_13921[(9)]);
var inst_13889 = (state_13921[(10)]);
var inst_13899 = (state_13921[(2)]);
var inst_13900 = [];
var inst_13901 = inst_13900.push(inst_13885);
var inst_13881 = inst_13900;
var inst_13882 = inst_13889;
var state_13921__$1 = (function (){var statearr_13933 = state_13921;
(statearr_13933[(11)] = inst_13899);

(statearr_13933[(7)] = inst_13882);

(statearr_13933[(8)] = inst_13881);

(statearr_13933[(12)] = inst_13901);

return statearr_13933;
})();
var statearr_13934_13958 = state_13921__$1;
(statearr_13934_13958[(2)] = null);

(statearr_13934_13958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (9))){
var inst_13881 = (state_13921[(8)]);
var inst_13897 = cljs.core.vec.call(null,inst_13881);
var state_13921__$1 = state_13921;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13921__$1,(11),out,inst_13897);
} else {
if((state_val_13922 === (5))){
var inst_13885 = (state_13921[(9)]);
var inst_13882 = (state_13921[(7)]);
var inst_13889 = (state_13921[(10)]);
var inst_13889__$1 = f.call(null,inst_13885);
var inst_13890 = cljs.core._EQ_.call(null,inst_13889__$1,inst_13882);
var inst_13891 = cljs.core.keyword_identical_QMARK_.call(null,inst_13882,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_13892 = ((inst_13890) || (inst_13891));
var state_13921__$1 = (function (){var statearr_13935 = state_13921;
(statearr_13935[(10)] = inst_13889__$1);

return statearr_13935;
})();
if(cljs.core.truth_(inst_13892)){
var statearr_13936_13959 = state_13921__$1;
(statearr_13936_13959[(1)] = (8));

} else {
var statearr_13937_13960 = state_13921__$1;
(statearr_13937_13960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (14))){
var inst_13914 = (state_13921[(2)]);
var inst_13915 = cljs.core.async.close_BANG_.call(null,out);
var state_13921__$1 = (function (){var statearr_13939 = state_13921;
(statearr_13939[(13)] = inst_13914);

return statearr_13939;
})();
var statearr_13940_13961 = state_13921__$1;
(statearr_13940_13961[(2)] = inst_13915);

(statearr_13940_13961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (10))){
var inst_13904 = (state_13921[(2)]);
var state_13921__$1 = state_13921;
var statearr_13941_13962 = state_13921__$1;
(statearr_13941_13962[(2)] = inst_13904);

(statearr_13941_13962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13922 === (8))){
var inst_13885 = (state_13921[(9)]);
var inst_13881 = (state_13921[(8)]);
var inst_13889 = (state_13921[(10)]);
var inst_13894 = inst_13881.push(inst_13885);
var tmp13938 = inst_13881;
var inst_13881__$1 = tmp13938;
var inst_13882 = inst_13889;
var state_13921__$1 = (function (){var statearr_13942 = state_13921;
(statearr_13942[(7)] = inst_13882);

(statearr_13942[(8)] = inst_13881__$1);

(statearr_13942[(14)] = inst_13894);

return statearr_13942;
})();
var statearr_13943_13963 = state_13921__$1;
(statearr_13943_13963[(2)] = null);

(statearr_13943_13963[(1)] = (2));


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
});})(c__10181__auto___13949,out))
;
return ((function (switch__10014__auto__,c__10181__auto___13949,out){
return (function() {
var cljs$core$async$state_machine__10015__auto__ = null;
var cljs$core$async$state_machine__10015__auto____0 = (function (){
var statearr_13944 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13944[(0)] = cljs$core$async$state_machine__10015__auto__);

(statearr_13944[(1)] = (1));

return statearr_13944;
});
var cljs$core$async$state_machine__10015__auto____1 = (function (state_13921){
while(true){
var ret_value__10016__auto__ = (function (){try{while(true){
var result__10017__auto__ = switch__10014__auto__.call(null,state_13921);
if(cljs.core.keyword_identical_QMARK_.call(null,result__10017__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__10017__auto__;
}
break;
}
}catch (e13945){if((e13945 instanceof Object)){
var ex__10018__auto__ = e13945;
var statearr_13946_13964 = state_13921;
(statearr_13946_13964[(5)] = ex__10018__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13921);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10016__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13965 = state_13921;
state_13921 = G__13965;
continue;
} else {
return ret_value__10016__auto__;
}
break;
}
});
cljs$core$async$state_machine__10015__auto__ = function(state_13921){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__10015__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__10015__auto____1.call(this,state_13921);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__10015__auto____0;
cljs$core$async$state_machine__10015__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__10015__auto____1;
return cljs$core$async$state_machine__10015__auto__;
})()
;})(switch__10014__auto__,c__10181__auto___13949,out))
})();
var state__10183__auto__ = (function (){var statearr_13947 = f__10182__auto__.call(null);
(statearr_13947[(6)] = c__10181__auto___13949);

return statearr_13947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10183__auto__);
});})(c__10181__auto___13949,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
