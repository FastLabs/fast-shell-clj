// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__12862 = arguments.length;
switch (G__12862) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12863 = (function (f,blockable,meta12864){
this.f = f;
this.blockable = blockable;
this.meta12864 = meta12864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12865,meta12864__$1){
var self__ = this;
var _12865__$1 = this;
return (new cljs.core.async.t_cljs$core$async12863(self__.f,self__.blockable,meta12864__$1));
});

cljs.core.async.t_cljs$core$async12863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12865){
var self__ = this;
var _12865__$1 = this;
return self__.meta12864;
});

cljs.core.async.t_cljs$core$async12863.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12863.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12863.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async12863.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async12863.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta12864","meta12864",1434538478,null)], null);
});

cljs.core.async.t_cljs$core$async12863.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12863.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12863";

cljs.core.async.t_cljs$core$async12863.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async12863");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12863.
 */
cljs.core.async.__GT_t_cljs$core$async12863 = (function cljs$core$async$__GT_t_cljs$core$async12863(f__$1,blockable__$1,meta12864){
return (new cljs.core.async.t_cljs$core$async12863(f__$1,blockable__$1,meta12864));
});

}

return (new cljs.core.async.t_cljs$core$async12863(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
if(!((buff == null))){
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
var G__12869 = arguments.length;
switch (G__12869) {
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
var G__12872 = arguments.length;
switch (G__12872) {
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
var G__12875 = arguments.length;
switch (G__12875) {
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
var val_12877 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_12877);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_12877,ret){
return (function (){
return fn1.call(null,val_12877);
});})(val_12877,ret))
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
var G__12879 = arguments.length;
switch (G__12879) {
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
var n__4408__auto___12881 = n;
var x_12882 = (0);
while(true){
if((x_12882 < n__4408__auto___12881)){
(a[x_12882] = (0));

var G__12883 = (x_12882 + (1));
x_12882 = G__12883;
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

var G__12884 = (i + (1));
i = G__12884;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12885 = (function (flag,meta12886){
this.flag = flag;
this.meta12886 = meta12886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12887,meta12886__$1){
var self__ = this;
var _12887__$1 = this;
return (new cljs.core.async.t_cljs$core$async12885(self__.flag,meta12886__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async12885.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12887){
var self__ = this;
var _12887__$1 = this;
return self__.meta12886;
});})(flag))
;

cljs.core.async.t_cljs$core$async12885.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12885.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async12885.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12885.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async12885.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta12886","meta12886",-60525166,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async12885.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12885.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12885";

cljs.core.async.t_cljs$core$async12885.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async12885");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12885.
 */
cljs.core.async.__GT_t_cljs$core$async12885 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async12885(flag__$1,meta12886){
return (new cljs.core.async.t_cljs$core$async12885(flag__$1,meta12886));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async12885(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async12888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async12888 = (function (flag,cb,meta12889){
this.flag = flag;
this.cb = cb;
this.meta12889 = meta12889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async12888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12890,meta12889__$1){
var self__ = this;
var _12890__$1 = this;
return (new cljs.core.async.t_cljs$core$async12888(self__.flag,self__.cb,meta12889__$1));
});

cljs.core.async.t_cljs$core$async12888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12890){
var self__ = this;
var _12890__$1 = this;
return self__.meta12889;
});

cljs.core.async.t_cljs$core$async12888.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async12888.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async12888.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async12888.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async12888.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta12889","meta12889",-1276174978,null)], null);
});

cljs.core.async.t_cljs$core$async12888.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async12888.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async12888";

cljs.core.async.t_cljs$core$async12888.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async12888");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async12888.
 */
cljs.core.async.__GT_t_cljs$core$async12888 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async12888(flag__$1,cb__$1,meta12889){
return (new cljs.core.async.t_cljs$core$async12888(flag__$1,cb__$1,meta12889));
});

}

return (new cljs.core.async.t_cljs$core$async12888(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__12891_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12891_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12892_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12892_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3949__auto__ = wport;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return port;
}
})()], null));
} else {
var G__12893 = (i + (1));
i = G__12893;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3949__auto__ = ret;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5720__auto__ = (function (){var and__3938__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3938__auto__;
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
var args__4534__auto__ = [];
var len__4531__auto___12899 = arguments.length;
var i__4532__auto___12900 = (0);
while(true){
if((i__4532__auto___12900 < len__4531__auto___12899)){
args__4534__auto__.push((arguments[i__4532__auto___12900]));

var G__12901 = (i__4532__auto___12900 + (1));
i__4532__auto___12900 = G__12901;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((1) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4535__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__12896){
var map__12897 = p__12896;
var map__12897__$1 = ((((!((map__12897 == null)))?(((((map__12897.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__12897.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12897):map__12897);
var opts = map__12897__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq12894){
var G__12895 = cljs.core.first.call(null,seq12894);
var seq12894__$1 = cljs.core.next.call(null,seq12894);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__12895,seq12894__$1);
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
var G__12903 = arguments.length;
switch (G__12903) {
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
var c__12802__auto___12949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___12949){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___12949){
return (function (state_12927){
var state_val_12928 = (state_12927[(1)]);
if((state_val_12928 === (7))){
var inst_12923 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12929_12950 = state_12927__$1;
(statearr_12929_12950[(2)] = inst_12923);

(statearr_12929_12950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (1))){
var state_12927__$1 = state_12927;
var statearr_12930_12951 = state_12927__$1;
(statearr_12930_12951[(2)] = null);

(statearr_12930_12951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (4))){
var inst_12906 = (state_12927[(7)]);
var inst_12906__$1 = (state_12927[(2)]);
var inst_12907 = (inst_12906__$1 == null);
var state_12927__$1 = (function (){var statearr_12931 = state_12927;
(statearr_12931[(7)] = inst_12906__$1);

return statearr_12931;
})();
if(cljs.core.truth_(inst_12907)){
var statearr_12932_12952 = state_12927__$1;
(statearr_12932_12952[(1)] = (5));

} else {
var statearr_12933_12953 = state_12927__$1;
(statearr_12933_12953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (13))){
var state_12927__$1 = state_12927;
var statearr_12934_12954 = state_12927__$1;
(statearr_12934_12954[(2)] = null);

(statearr_12934_12954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (6))){
var inst_12906 = (state_12927[(7)]);
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12927__$1,(11),to,inst_12906);
} else {
if((state_val_12928 === (3))){
var inst_12925 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12927__$1,inst_12925);
} else {
if((state_val_12928 === (12))){
var state_12927__$1 = state_12927;
var statearr_12935_12955 = state_12927__$1;
(statearr_12935_12955[(2)] = null);

(statearr_12935_12955[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (2))){
var state_12927__$1 = state_12927;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12927__$1,(4),from);
} else {
if((state_val_12928 === (11))){
var inst_12916 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
if(cljs.core.truth_(inst_12916)){
var statearr_12936_12956 = state_12927__$1;
(statearr_12936_12956[(1)] = (12));

} else {
var statearr_12937_12957 = state_12927__$1;
(statearr_12937_12957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (9))){
var state_12927__$1 = state_12927;
var statearr_12938_12958 = state_12927__$1;
(statearr_12938_12958[(2)] = null);

(statearr_12938_12958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (5))){
var state_12927__$1 = state_12927;
if(cljs.core.truth_(close_QMARK_)){
var statearr_12939_12959 = state_12927__$1;
(statearr_12939_12959[(1)] = (8));

} else {
var statearr_12940_12960 = state_12927__$1;
(statearr_12940_12960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (14))){
var inst_12921 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12941_12961 = state_12927__$1;
(statearr_12941_12961[(2)] = inst_12921);

(statearr_12941_12961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (10))){
var inst_12913 = (state_12927[(2)]);
var state_12927__$1 = state_12927;
var statearr_12942_12962 = state_12927__$1;
(statearr_12942_12962[(2)] = inst_12913);

(statearr_12942_12962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12928 === (8))){
var inst_12910 = cljs.core.async.close_BANG_.call(null,to);
var state_12927__$1 = state_12927;
var statearr_12943_12963 = state_12927__$1;
(statearr_12943_12963[(2)] = inst_12910);

(statearr_12943_12963[(1)] = (10));


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
});})(c__12802__auto___12949))
;
return ((function (switch__12711__auto__,c__12802__auto___12949){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_12944 = [null,null,null,null,null,null,null,null];
(statearr_12944[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_12944[(1)] = (1));

return statearr_12944;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_12927){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_12927);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e12945){if((e12945 instanceof Object)){
var ex__12715__auto__ = e12945;
var statearr_12946_12964 = state_12927;
(statearr_12946_12964[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12927);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12945;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__12965 = state_12927;
state_12927 = G__12965;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_12927){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_12927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___12949))
})();
var state__12804__auto__ = (function (){var statearr_12947 = f__12803__auto__.call(null);
(statearr_12947[(6)] = c__12802__auto___12949);

return statearr_12947;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___12949))
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
return (function (p__12966){
var vec__12967 = p__12966;
var v = cljs.core.nth.call(null,vec__12967,(0),null);
var p = cljs.core.nth.call(null,vec__12967,(1),null);
var job = vec__12967;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__12802__auto___13138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___13138,res,vec__12967,v,p,job,jobs,results){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___13138,res,vec__12967,v,p,job,jobs,results){
return (function (state_12974){
var state_val_12975 = (state_12974[(1)]);
if((state_val_12975 === (1))){
var state_12974__$1 = state_12974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12974__$1,(2),res,v);
} else {
if((state_val_12975 === (2))){
var inst_12971 = (state_12974[(2)]);
var inst_12972 = cljs.core.async.close_BANG_.call(null,res);
var state_12974__$1 = (function (){var statearr_12976 = state_12974;
(statearr_12976[(7)] = inst_12971);

return statearr_12976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12974__$1,inst_12972);
} else {
return null;
}
}
});})(c__12802__auto___13138,res,vec__12967,v,p,job,jobs,results))
;
return ((function (switch__12711__auto__,c__12802__auto___13138,res,vec__12967,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0 = (function (){
var statearr_12977 = [null,null,null,null,null,null,null,null];
(statearr_12977[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__);

(statearr_12977[(1)] = (1));

return statearr_12977;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1 = (function (state_12974){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_12974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e12978){if((e12978 instanceof Object)){
var ex__12715__auto__ = e12978;
var statearr_12979_13139 = state_12974;
(statearr_12979_13139[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e12978;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13140 = state_12974;
state_12974 = G__13140;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = function(state_12974){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1.call(this,state_12974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___13138,res,vec__12967,v,p,job,jobs,results))
})();
var state__12804__auto__ = (function (){var statearr_12980 = f__12803__auto__.call(null);
(statearr_12980[(6)] = c__12802__auto___13138);

return statearr_12980;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___13138,res,vec__12967,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__12981){
var vec__12982 = p__12981;
var v = cljs.core.nth.call(null,vec__12982,(0),null);
var p = cljs.core.nth.call(null,vec__12982,(1),null);
var job = vec__12982;
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
var n__4408__auto___13141 = n;
var __13142 = (0);
while(true){
if((__13142 < n__4408__auto___13141)){
var G__12985_13143 = type;
var G__12985_13144__$1 = (((G__12985_13143 instanceof cljs.core.Keyword))?G__12985_13143.fqn:null);
switch (G__12985_13144__$1) {
case "compute":
var c__12802__auto___13146 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13142,c__12802__auto___13146,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (__13142,c__12802__auto___13146,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async){
return (function (state_12998){
var state_val_12999 = (state_12998[(1)]);
if((state_val_12999 === (1))){
var state_12998__$1 = state_12998;
var statearr_13000_13147 = state_12998__$1;
(statearr_13000_13147[(2)] = null);

(statearr_13000_13147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (2))){
var state_12998__$1 = state_12998;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12998__$1,(4),jobs);
} else {
if((state_val_12999 === (3))){
var inst_12996 = (state_12998[(2)]);
var state_12998__$1 = state_12998;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12998__$1,inst_12996);
} else {
if((state_val_12999 === (4))){
var inst_12988 = (state_12998[(2)]);
var inst_12989 = process.call(null,inst_12988);
var state_12998__$1 = state_12998;
if(cljs.core.truth_(inst_12989)){
var statearr_13001_13148 = state_12998__$1;
(statearr_13001_13148[(1)] = (5));

} else {
var statearr_13002_13149 = state_12998__$1;
(statearr_13002_13149[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (5))){
var state_12998__$1 = state_12998;
var statearr_13003_13150 = state_12998__$1;
(statearr_13003_13150[(2)] = null);

(statearr_13003_13150[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (6))){
var state_12998__$1 = state_12998;
var statearr_13004_13151 = state_12998__$1;
(statearr_13004_13151[(2)] = null);

(statearr_13004_13151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_12999 === (7))){
var inst_12994 = (state_12998[(2)]);
var state_12998__$1 = state_12998;
var statearr_13005_13152 = state_12998__$1;
(statearr_13005_13152[(2)] = inst_12994);

(statearr_13005_13152[(1)] = (3));


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
});})(__13142,c__12802__auto___13146,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async))
;
return ((function (__13142,switch__12711__auto__,c__12802__auto___13146,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0 = (function (){
var statearr_13006 = [null,null,null,null,null,null,null];
(statearr_13006[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__);

(statearr_13006[(1)] = (1));

return statearr_13006;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1 = (function (state_12998){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_12998);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13007){if((e13007 instanceof Object)){
var ex__12715__auto__ = e13007;
var statearr_13008_13153 = state_12998;
(statearr_13008_13153[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12998);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13154 = state_12998;
state_12998 = G__13154;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = function(state_12998){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1.call(this,state_12998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__;
})()
;})(__13142,switch__12711__auto__,c__12802__auto___13146,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async))
})();
var state__12804__auto__ = (function (){var statearr_13009 = f__12803__auto__.call(null);
(statearr_13009[(6)] = c__12802__auto___13146);

return statearr_13009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(__13142,c__12802__auto___13146,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async))
);


break;
case "async":
var c__12802__auto___13155 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13142,c__12802__auto___13155,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (__13142,c__12802__auto___13155,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async){
return (function (state_13022){
var state_val_13023 = (state_13022[(1)]);
if((state_val_13023 === (1))){
var state_13022__$1 = state_13022;
var statearr_13024_13156 = state_13022__$1;
(statearr_13024_13156[(2)] = null);

(statearr_13024_13156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (2))){
var state_13022__$1 = state_13022;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13022__$1,(4),jobs);
} else {
if((state_val_13023 === (3))){
var inst_13020 = (state_13022[(2)]);
var state_13022__$1 = state_13022;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13022__$1,inst_13020);
} else {
if((state_val_13023 === (4))){
var inst_13012 = (state_13022[(2)]);
var inst_13013 = async.call(null,inst_13012);
var state_13022__$1 = state_13022;
if(cljs.core.truth_(inst_13013)){
var statearr_13025_13157 = state_13022__$1;
(statearr_13025_13157[(1)] = (5));

} else {
var statearr_13026_13158 = state_13022__$1;
(statearr_13026_13158[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (5))){
var state_13022__$1 = state_13022;
var statearr_13027_13159 = state_13022__$1;
(statearr_13027_13159[(2)] = null);

(statearr_13027_13159[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (6))){
var state_13022__$1 = state_13022;
var statearr_13028_13160 = state_13022__$1;
(statearr_13028_13160[(2)] = null);

(statearr_13028_13160[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13023 === (7))){
var inst_13018 = (state_13022[(2)]);
var state_13022__$1 = state_13022;
var statearr_13029_13161 = state_13022__$1;
(statearr_13029_13161[(2)] = inst_13018);

(statearr_13029_13161[(1)] = (3));


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
});})(__13142,c__12802__auto___13155,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async))
;
return ((function (__13142,switch__12711__auto__,c__12802__auto___13155,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0 = (function (){
var statearr_13030 = [null,null,null,null,null,null,null];
(statearr_13030[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__);

(statearr_13030[(1)] = (1));

return statearr_13030;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1 = (function (state_13022){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13022);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13031){if((e13031 instanceof Object)){
var ex__12715__auto__ = e13031;
var statearr_13032_13162 = state_13022;
(statearr_13032_13162[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13031;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13163 = state_13022;
state_13022 = G__13163;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = function(state_13022){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1.call(this,state_13022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__;
})()
;})(__13142,switch__12711__auto__,c__12802__auto___13155,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async))
})();
var state__12804__auto__ = (function (){var statearr_13033 = f__12803__auto__.call(null);
(statearr_13033[(6)] = c__12802__auto___13155);

return statearr_13033;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(__13142,c__12802__auto___13155,G__12985_13143,G__12985_13144__$1,n__4408__auto___13141,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__12985_13144__$1)].join('')));

}

var G__13164 = (__13142 + (1));
__13142 = G__13164;
continue;
} else {
}
break;
}

var c__12802__auto___13165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___13165,jobs,results,process,async){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___13165,jobs,results,process,async){
return (function (state_13055){
var state_val_13056 = (state_13055[(1)]);
if((state_val_13056 === (7))){
var inst_13051 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
var statearr_13057_13166 = state_13055__$1;
(statearr_13057_13166[(2)] = inst_13051);

(statearr_13057_13166[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (1))){
var state_13055__$1 = state_13055;
var statearr_13058_13167 = state_13055__$1;
(statearr_13058_13167[(2)] = null);

(statearr_13058_13167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (4))){
var inst_13036 = (state_13055[(7)]);
var inst_13036__$1 = (state_13055[(2)]);
var inst_13037 = (inst_13036__$1 == null);
var state_13055__$1 = (function (){var statearr_13059 = state_13055;
(statearr_13059[(7)] = inst_13036__$1);

return statearr_13059;
})();
if(cljs.core.truth_(inst_13037)){
var statearr_13060_13168 = state_13055__$1;
(statearr_13060_13168[(1)] = (5));

} else {
var statearr_13061_13169 = state_13055__$1;
(statearr_13061_13169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (6))){
var inst_13041 = (state_13055[(8)]);
var inst_13036 = (state_13055[(7)]);
var inst_13041__$1 = cljs.core.async.chan.call(null,(1));
var inst_13042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13043 = [inst_13036,inst_13041__$1];
var inst_13044 = (new cljs.core.PersistentVector(null,2,(5),inst_13042,inst_13043,null));
var state_13055__$1 = (function (){var statearr_13062 = state_13055;
(statearr_13062[(8)] = inst_13041__$1);

return statearr_13062;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13055__$1,(8),jobs,inst_13044);
} else {
if((state_val_13056 === (3))){
var inst_13053 = (state_13055[(2)]);
var state_13055__$1 = state_13055;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13055__$1,inst_13053);
} else {
if((state_val_13056 === (2))){
var state_13055__$1 = state_13055;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13055__$1,(4),from);
} else {
if((state_val_13056 === (9))){
var inst_13048 = (state_13055[(2)]);
var state_13055__$1 = (function (){var statearr_13063 = state_13055;
(statearr_13063[(9)] = inst_13048);

return statearr_13063;
})();
var statearr_13064_13170 = state_13055__$1;
(statearr_13064_13170[(2)] = null);

(statearr_13064_13170[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (5))){
var inst_13039 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13055__$1 = state_13055;
var statearr_13065_13171 = state_13055__$1;
(statearr_13065_13171[(2)] = inst_13039);

(statearr_13065_13171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13056 === (8))){
var inst_13041 = (state_13055[(8)]);
var inst_13046 = (state_13055[(2)]);
var state_13055__$1 = (function (){var statearr_13066 = state_13055;
(statearr_13066[(10)] = inst_13046);

return statearr_13066;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13055__$1,(9),results,inst_13041);
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
});})(c__12802__auto___13165,jobs,results,process,async))
;
return ((function (switch__12711__auto__,c__12802__auto___13165,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0 = (function (){
var statearr_13067 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13067[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__);

(statearr_13067[(1)] = (1));

return statearr_13067;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1 = (function (state_13055){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13055);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13068){if((e13068 instanceof Object)){
var ex__12715__auto__ = e13068;
var statearr_13069_13172 = state_13055;
(statearr_13069_13172[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13055);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13173 = state_13055;
state_13055 = G__13173;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = function(state_13055){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1.call(this,state_13055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___13165,jobs,results,process,async))
})();
var state__12804__auto__ = (function (){var statearr_13070 = f__12803__auto__.call(null);
(statearr_13070[(6)] = c__12802__auto___13165);

return statearr_13070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___13165,jobs,results,process,async))
);


var c__12802__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto__,jobs,results,process,async){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto__,jobs,results,process,async){
return (function (state_13108){
var state_val_13109 = (state_13108[(1)]);
if((state_val_13109 === (7))){
var inst_13104 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
var statearr_13110_13174 = state_13108__$1;
(statearr_13110_13174[(2)] = inst_13104);

(statearr_13110_13174[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (20))){
var state_13108__$1 = state_13108;
var statearr_13111_13175 = state_13108__$1;
(statearr_13111_13175[(2)] = null);

(statearr_13111_13175[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (1))){
var state_13108__$1 = state_13108;
var statearr_13112_13176 = state_13108__$1;
(statearr_13112_13176[(2)] = null);

(statearr_13112_13176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (4))){
var inst_13073 = (state_13108[(7)]);
var inst_13073__$1 = (state_13108[(2)]);
var inst_13074 = (inst_13073__$1 == null);
var state_13108__$1 = (function (){var statearr_13113 = state_13108;
(statearr_13113[(7)] = inst_13073__$1);

return statearr_13113;
})();
if(cljs.core.truth_(inst_13074)){
var statearr_13114_13177 = state_13108__$1;
(statearr_13114_13177[(1)] = (5));

} else {
var statearr_13115_13178 = state_13108__$1;
(statearr_13115_13178[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (15))){
var inst_13086 = (state_13108[(8)]);
var state_13108__$1 = state_13108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13108__$1,(18),to,inst_13086);
} else {
if((state_val_13109 === (21))){
var inst_13099 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
var statearr_13116_13179 = state_13108__$1;
(statearr_13116_13179[(2)] = inst_13099);

(statearr_13116_13179[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (13))){
var inst_13101 = (state_13108[(2)]);
var state_13108__$1 = (function (){var statearr_13117 = state_13108;
(statearr_13117[(9)] = inst_13101);

return statearr_13117;
})();
var statearr_13118_13180 = state_13108__$1;
(statearr_13118_13180[(2)] = null);

(statearr_13118_13180[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (6))){
var inst_13073 = (state_13108[(7)]);
var state_13108__$1 = state_13108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13108__$1,(11),inst_13073);
} else {
if((state_val_13109 === (17))){
var inst_13094 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
if(cljs.core.truth_(inst_13094)){
var statearr_13119_13181 = state_13108__$1;
(statearr_13119_13181[(1)] = (19));

} else {
var statearr_13120_13182 = state_13108__$1;
(statearr_13120_13182[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (3))){
var inst_13106 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13108__$1,inst_13106);
} else {
if((state_val_13109 === (12))){
var inst_13083 = (state_13108[(10)]);
var state_13108__$1 = state_13108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13108__$1,(14),inst_13083);
} else {
if((state_val_13109 === (2))){
var state_13108__$1 = state_13108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13108__$1,(4),results);
} else {
if((state_val_13109 === (19))){
var state_13108__$1 = state_13108;
var statearr_13121_13183 = state_13108__$1;
(statearr_13121_13183[(2)] = null);

(statearr_13121_13183[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (11))){
var inst_13083 = (state_13108[(2)]);
var state_13108__$1 = (function (){var statearr_13122 = state_13108;
(statearr_13122[(10)] = inst_13083);

return statearr_13122;
})();
var statearr_13123_13184 = state_13108__$1;
(statearr_13123_13184[(2)] = null);

(statearr_13123_13184[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (9))){
var state_13108__$1 = state_13108;
var statearr_13124_13185 = state_13108__$1;
(statearr_13124_13185[(2)] = null);

(statearr_13124_13185[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (5))){
var state_13108__$1 = state_13108;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13125_13186 = state_13108__$1;
(statearr_13125_13186[(1)] = (8));

} else {
var statearr_13126_13187 = state_13108__$1;
(statearr_13126_13187[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (14))){
var inst_13086 = (state_13108[(8)]);
var inst_13088 = (state_13108[(11)]);
var inst_13086__$1 = (state_13108[(2)]);
var inst_13087 = (inst_13086__$1 == null);
var inst_13088__$1 = cljs.core.not.call(null,inst_13087);
var state_13108__$1 = (function (){var statearr_13127 = state_13108;
(statearr_13127[(8)] = inst_13086__$1);

(statearr_13127[(11)] = inst_13088__$1);

return statearr_13127;
})();
if(inst_13088__$1){
var statearr_13128_13188 = state_13108__$1;
(statearr_13128_13188[(1)] = (15));

} else {
var statearr_13129_13189 = state_13108__$1;
(statearr_13129_13189[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (16))){
var inst_13088 = (state_13108[(11)]);
var state_13108__$1 = state_13108;
var statearr_13130_13190 = state_13108__$1;
(statearr_13130_13190[(2)] = inst_13088);

(statearr_13130_13190[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (10))){
var inst_13080 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
var statearr_13131_13191 = state_13108__$1;
(statearr_13131_13191[(2)] = inst_13080);

(statearr_13131_13191[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (18))){
var inst_13091 = (state_13108[(2)]);
var state_13108__$1 = state_13108;
var statearr_13132_13192 = state_13108__$1;
(statearr_13132_13192[(2)] = inst_13091);

(statearr_13132_13192[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13109 === (8))){
var inst_13077 = cljs.core.async.close_BANG_.call(null,to);
var state_13108__$1 = state_13108;
var statearr_13133_13193 = state_13108__$1;
(statearr_13133_13193[(2)] = inst_13077);

(statearr_13133_13193[(1)] = (10));


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
});})(c__12802__auto__,jobs,results,process,async))
;
return ((function (switch__12711__auto__,c__12802__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0 = (function (){
var statearr_13134 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13134[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__);

(statearr_13134[(1)] = (1));

return statearr_13134;
});
var cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1 = (function (state_13108){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13135){if((e13135 instanceof Object)){
var ex__12715__auto__ = e13135;
var statearr_13136_13194 = state_13108;
(statearr_13136_13194[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13135;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13195 = state_13108;
state_13108 = G__13195;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__ = function(state_13108){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1.call(this,state_13108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__12712__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto__,jobs,results,process,async))
})();
var state__12804__auto__ = (function (){var statearr_13137 = f__12803__auto__.call(null);
(statearr_13137[(6)] = c__12802__auto__);

return statearr_13137;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto__,jobs,results,process,async))
);

return c__12802__auto__;
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
var G__13197 = arguments.length;
switch (G__13197) {
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
var G__13200 = arguments.length;
switch (G__13200) {
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
var G__13203 = arguments.length;
switch (G__13203) {
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
var c__12802__auto___13252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___13252,tc,fc){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___13252,tc,fc){
return (function (state_13229){
var state_val_13230 = (state_13229[(1)]);
if((state_val_13230 === (7))){
var inst_13225 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
var statearr_13231_13253 = state_13229__$1;
(statearr_13231_13253[(2)] = inst_13225);

(statearr_13231_13253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (1))){
var state_13229__$1 = state_13229;
var statearr_13232_13254 = state_13229__$1;
(statearr_13232_13254[(2)] = null);

(statearr_13232_13254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (4))){
var inst_13206 = (state_13229[(7)]);
var inst_13206__$1 = (state_13229[(2)]);
var inst_13207 = (inst_13206__$1 == null);
var state_13229__$1 = (function (){var statearr_13233 = state_13229;
(statearr_13233[(7)] = inst_13206__$1);

return statearr_13233;
})();
if(cljs.core.truth_(inst_13207)){
var statearr_13234_13255 = state_13229__$1;
(statearr_13234_13255[(1)] = (5));

} else {
var statearr_13235_13256 = state_13229__$1;
(statearr_13235_13256[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (13))){
var state_13229__$1 = state_13229;
var statearr_13236_13257 = state_13229__$1;
(statearr_13236_13257[(2)] = null);

(statearr_13236_13257[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (6))){
var inst_13206 = (state_13229[(7)]);
var inst_13212 = p.call(null,inst_13206);
var state_13229__$1 = state_13229;
if(cljs.core.truth_(inst_13212)){
var statearr_13237_13258 = state_13229__$1;
(statearr_13237_13258[(1)] = (9));

} else {
var statearr_13238_13259 = state_13229__$1;
(statearr_13238_13259[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (3))){
var inst_13227 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13229__$1,inst_13227);
} else {
if((state_val_13230 === (12))){
var state_13229__$1 = state_13229;
var statearr_13239_13260 = state_13229__$1;
(statearr_13239_13260[(2)] = null);

(statearr_13239_13260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (2))){
var state_13229__$1 = state_13229;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13229__$1,(4),ch);
} else {
if((state_val_13230 === (11))){
var inst_13206 = (state_13229[(7)]);
var inst_13216 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13229__$1,(8),inst_13216,inst_13206);
} else {
if((state_val_13230 === (9))){
var state_13229__$1 = state_13229;
var statearr_13240_13261 = state_13229__$1;
(statearr_13240_13261[(2)] = tc);

(statearr_13240_13261[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (5))){
var inst_13209 = cljs.core.async.close_BANG_.call(null,tc);
var inst_13210 = cljs.core.async.close_BANG_.call(null,fc);
var state_13229__$1 = (function (){var statearr_13241 = state_13229;
(statearr_13241[(8)] = inst_13209);

return statearr_13241;
})();
var statearr_13242_13262 = state_13229__$1;
(statearr_13242_13262[(2)] = inst_13210);

(statearr_13242_13262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (14))){
var inst_13223 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
var statearr_13243_13263 = state_13229__$1;
(statearr_13243_13263[(2)] = inst_13223);

(statearr_13243_13263[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (10))){
var state_13229__$1 = state_13229;
var statearr_13244_13264 = state_13229__$1;
(statearr_13244_13264[(2)] = fc);

(statearr_13244_13264[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13230 === (8))){
var inst_13218 = (state_13229[(2)]);
var state_13229__$1 = state_13229;
if(cljs.core.truth_(inst_13218)){
var statearr_13245_13265 = state_13229__$1;
(statearr_13245_13265[(1)] = (12));

} else {
var statearr_13246_13266 = state_13229__$1;
(statearr_13246_13266[(1)] = (13));

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
});})(c__12802__auto___13252,tc,fc))
;
return ((function (switch__12711__auto__,c__12802__auto___13252,tc,fc){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_13247 = [null,null,null,null,null,null,null,null,null];
(statearr_13247[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_13247[(1)] = (1));

return statearr_13247;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_13229){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13248){if((e13248 instanceof Object)){
var ex__12715__auto__ = e13248;
var statearr_13249_13267 = state_13229;
(statearr_13249_13267[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13248;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13268 = state_13229;
state_13229 = G__13268;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_13229){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_13229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___13252,tc,fc))
})();
var state__12804__auto__ = (function (){var statearr_13250 = f__12803__auto__.call(null);
(statearr_13250[(6)] = c__12802__auto___13252);

return statearr_13250;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___13252,tc,fc))
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
var c__12802__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto__){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto__){
return (function (state_13289){
var state_val_13290 = (state_13289[(1)]);
if((state_val_13290 === (7))){
var inst_13285 = (state_13289[(2)]);
var state_13289__$1 = state_13289;
var statearr_13291_13309 = state_13289__$1;
(statearr_13291_13309[(2)] = inst_13285);

(statearr_13291_13309[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (1))){
var inst_13269 = init;
var state_13289__$1 = (function (){var statearr_13292 = state_13289;
(statearr_13292[(7)] = inst_13269);

return statearr_13292;
})();
var statearr_13293_13310 = state_13289__$1;
(statearr_13293_13310[(2)] = null);

(statearr_13293_13310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (4))){
var inst_13272 = (state_13289[(8)]);
var inst_13272__$1 = (state_13289[(2)]);
var inst_13273 = (inst_13272__$1 == null);
var state_13289__$1 = (function (){var statearr_13294 = state_13289;
(statearr_13294[(8)] = inst_13272__$1);

return statearr_13294;
})();
if(cljs.core.truth_(inst_13273)){
var statearr_13295_13311 = state_13289__$1;
(statearr_13295_13311[(1)] = (5));

} else {
var statearr_13296_13312 = state_13289__$1;
(statearr_13296_13312[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (6))){
var inst_13276 = (state_13289[(9)]);
var inst_13272 = (state_13289[(8)]);
var inst_13269 = (state_13289[(7)]);
var inst_13276__$1 = f.call(null,inst_13269,inst_13272);
var inst_13277 = cljs.core.reduced_QMARK_.call(null,inst_13276__$1);
var state_13289__$1 = (function (){var statearr_13297 = state_13289;
(statearr_13297[(9)] = inst_13276__$1);

return statearr_13297;
})();
if(inst_13277){
var statearr_13298_13313 = state_13289__$1;
(statearr_13298_13313[(1)] = (8));

} else {
var statearr_13299_13314 = state_13289__$1;
(statearr_13299_13314[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (3))){
var inst_13287 = (state_13289[(2)]);
var state_13289__$1 = state_13289;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13289__$1,inst_13287);
} else {
if((state_val_13290 === (2))){
var state_13289__$1 = state_13289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13289__$1,(4),ch);
} else {
if((state_val_13290 === (9))){
var inst_13276 = (state_13289[(9)]);
var inst_13269 = inst_13276;
var state_13289__$1 = (function (){var statearr_13300 = state_13289;
(statearr_13300[(7)] = inst_13269);

return statearr_13300;
})();
var statearr_13301_13315 = state_13289__$1;
(statearr_13301_13315[(2)] = null);

(statearr_13301_13315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (5))){
var inst_13269 = (state_13289[(7)]);
var state_13289__$1 = state_13289;
var statearr_13302_13316 = state_13289__$1;
(statearr_13302_13316[(2)] = inst_13269);

(statearr_13302_13316[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (10))){
var inst_13283 = (state_13289[(2)]);
var state_13289__$1 = state_13289;
var statearr_13303_13317 = state_13289__$1;
(statearr_13303_13317[(2)] = inst_13283);

(statearr_13303_13317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13290 === (8))){
var inst_13276 = (state_13289[(9)]);
var inst_13279 = cljs.core.deref.call(null,inst_13276);
var state_13289__$1 = state_13289;
var statearr_13304_13318 = state_13289__$1;
(statearr_13304_13318[(2)] = inst_13279);

(statearr_13304_13318[(1)] = (10));


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
});})(c__12802__auto__))
;
return ((function (switch__12711__auto__,c__12802__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__12712__auto__ = null;
var cljs$core$async$reduce_$_state_machine__12712__auto____0 = (function (){
var statearr_13305 = [null,null,null,null,null,null,null,null,null,null];
(statearr_13305[(0)] = cljs$core$async$reduce_$_state_machine__12712__auto__);

(statearr_13305[(1)] = (1));

return statearr_13305;
});
var cljs$core$async$reduce_$_state_machine__12712__auto____1 = (function (state_13289){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13306){if((e13306 instanceof Object)){
var ex__12715__auto__ = e13306;
var statearr_13307_13319 = state_13289;
(statearr_13307_13319[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13320 = state_13289;
state_13289 = G__13320;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__12712__auto__ = function(state_13289){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__12712__auto____1.call(this,state_13289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__12712__auto____0;
cljs$core$async$reduce_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__12712__auto____1;
return cljs$core$async$reduce_$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto__))
})();
var state__12804__auto__ = (function (){var statearr_13308 = f__12803__auto__.call(null);
(statearr_13308[(6)] = c__12802__auto__);

return statearr_13308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto__))
);

return c__12802__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__12802__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto__,f__$1){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto__,f__$1){
return (function (state_13326){
var state_val_13327 = (state_13326[(1)]);
if((state_val_13327 === (1))){
var inst_13321 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_13326__$1 = state_13326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13326__$1,(2),inst_13321);
} else {
if((state_val_13327 === (2))){
var inst_13323 = (state_13326[(2)]);
var inst_13324 = f__$1.call(null,inst_13323);
var state_13326__$1 = state_13326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13326__$1,inst_13324);
} else {
return null;
}
}
});})(c__12802__auto__,f__$1))
;
return ((function (switch__12711__auto__,c__12802__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__12712__auto__ = null;
var cljs$core$async$transduce_$_state_machine__12712__auto____0 = (function (){
var statearr_13328 = [null,null,null,null,null,null,null];
(statearr_13328[(0)] = cljs$core$async$transduce_$_state_machine__12712__auto__);

(statearr_13328[(1)] = (1));

return statearr_13328;
});
var cljs$core$async$transduce_$_state_machine__12712__auto____1 = (function (state_13326){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13329){if((e13329 instanceof Object)){
var ex__12715__auto__ = e13329;
var statearr_13330_13332 = state_13326;
(statearr_13330_13332[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13333 = state_13326;
state_13326 = G__13333;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__12712__auto__ = function(state_13326){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__12712__auto____1.call(this,state_13326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__12712__auto____0;
cljs$core$async$transduce_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__12712__auto____1;
return cljs$core$async$transduce_$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto__,f__$1))
})();
var state__12804__auto__ = (function (){var statearr_13331 = f__12803__auto__.call(null);
(statearr_13331[(6)] = c__12802__auto__);

return statearr_13331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto__,f__$1))
);

return c__12802__auto__;
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
var G__13335 = arguments.length;
switch (G__13335) {
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
var c__12802__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto__){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto__){
return (function (state_13360){
var state_val_13361 = (state_13360[(1)]);
if((state_val_13361 === (7))){
var inst_13342 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
var statearr_13362_13383 = state_13360__$1;
(statearr_13362_13383[(2)] = inst_13342);

(statearr_13362_13383[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (1))){
var inst_13336 = cljs.core.seq.call(null,coll);
var inst_13337 = inst_13336;
var state_13360__$1 = (function (){var statearr_13363 = state_13360;
(statearr_13363[(7)] = inst_13337);

return statearr_13363;
})();
var statearr_13364_13384 = state_13360__$1;
(statearr_13364_13384[(2)] = null);

(statearr_13364_13384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (4))){
var inst_13337 = (state_13360[(7)]);
var inst_13340 = cljs.core.first.call(null,inst_13337);
var state_13360__$1 = state_13360;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13360__$1,(7),ch,inst_13340);
} else {
if((state_val_13361 === (13))){
var inst_13354 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
var statearr_13365_13385 = state_13360__$1;
(statearr_13365_13385[(2)] = inst_13354);

(statearr_13365_13385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (6))){
var inst_13345 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
if(cljs.core.truth_(inst_13345)){
var statearr_13366_13386 = state_13360__$1;
(statearr_13366_13386[(1)] = (8));

} else {
var statearr_13367_13387 = state_13360__$1;
(statearr_13367_13387[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (3))){
var inst_13358 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13360__$1,inst_13358);
} else {
if((state_val_13361 === (12))){
var state_13360__$1 = state_13360;
var statearr_13368_13388 = state_13360__$1;
(statearr_13368_13388[(2)] = null);

(statearr_13368_13388[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (2))){
var inst_13337 = (state_13360[(7)]);
var state_13360__$1 = state_13360;
if(cljs.core.truth_(inst_13337)){
var statearr_13369_13389 = state_13360__$1;
(statearr_13369_13389[(1)] = (4));

} else {
var statearr_13370_13390 = state_13360__$1;
(statearr_13370_13390[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (11))){
var inst_13351 = cljs.core.async.close_BANG_.call(null,ch);
var state_13360__$1 = state_13360;
var statearr_13371_13391 = state_13360__$1;
(statearr_13371_13391[(2)] = inst_13351);

(statearr_13371_13391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (9))){
var state_13360__$1 = state_13360;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13372_13392 = state_13360__$1;
(statearr_13372_13392[(1)] = (11));

} else {
var statearr_13373_13393 = state_13360__$1;
(statearr_13373_13393[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (5))){
var inst_13337 = (state_13360[(7)]);
var state_13360__$1 = state_13360;
var statearr_13374_13394 = state_13360__$1;
(statearr_13374_13394[(2)] = inst_13337);

(statearr_13374_13394[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (10))){
var inst_13356 = (state_13360[(2)]);
var state_13360__$1 = state_13360;
var statearr_13375_13395 = state_13360__$1;
(statearr_13375_13395[(2)] = inst_13356);

(statearr_13375_13395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13361 === (8))){
var inst_13337 = (state_13360[(7)]);
var inst_13347 = cljs.core.next.call(null,inst_13337);
var inst_13337__$1 = inst_13347;
var state_13360__$1 = (function (){var statearr_13376 = state_13360;
(statearr_13376[(7)] = inst_13337__$1);

return statearr_13376;
})();
var statearr_13377_13396 = state_13360__$1;
(statearr_13377_13396[(2)] = null);

(statearr_13377_13396[(1)] = (2));


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
});})(c__12802__auto__))
;
return ((function (switch__12711__auto__,c__12802__auto__){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_13378 = [null,null,null,null,null,null,null,null];
(statearr_13378[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_13378[(1)] = (1));

return statearr_13378;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_13360){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13360);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13379){if((e13379 instanceof Object)){
var ex__12715__auto__ = e13379;
var statearr_13380_13397 = state_13360;
(statearr_13380_13397[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13360);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13379;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13398 = state_13360;
state_13360 = G__13398;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_13360){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_13360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto__))
})();
var state__12804__auto__ = (function (){var statearr_13381 = f__12803__auto__.call(null);
(statearr_13381[(6)] = c__12802__auto__);

return statearr_13381;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto__))
);

return c__12802__auto__;
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
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4243__auto__ = (((_ == null))?null:_);
var m__4244__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,_);
} else {
var m__4244__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,_);
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
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13399 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13399 = (function (ch,cs,meta13400){
this.ch = ch;
this.cs = cs;
this.meta13400 = meta13400;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13399.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13401,meta13400__$1){
var self__ = this;
var _13401__$1 = this;
return (new cljs.core.async.t_cljs$core$async13399(self__.ch,self__.cs,meta13400__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async13399.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13401){
var self__ = this;
var _13401__$1 = this;
return self__.meta13400;
});})(cs))
;

cljs.core.async.t_cljs$core$async13399.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13399.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async13399.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13399.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13399.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13399.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async13399.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta13400","meta13400",-826293380,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async13399.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13399.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13399";

cljs.core.async.t_cljs$core$async13399.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async13399");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13399.
 */
cljs.core.async.__GT_t_cljs$core$async13399 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async13399(ch__$1,cs__$1,meta13400){
return (new cljs.core.async.t_cljs$core$async13399(ch__$1,cs__$1,meta13400));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async13399(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__12802__auto___13621 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___13621,cs,m,dchan,dctr,done){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___13621,cs,m,dchan,dctr,done){
return (function (state_13536){
var state_val_13537 = (state_13536[(1)]);
if((state_val_13537 === (7))){
var inst_13532 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13538_13622 = state_13536__$1;
(statearr_13538_13622[(2)] = inst_13532);

(statearr_13538_13622[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (20))){
var inst_13435 = (state_13536[(7)]);
var inst_13447 = cljs.core.first.call(null,inst_13435);
var inst_13448 = cljs.core.nth.call(null,inst_13447,(0),null);
var inst_13449 = cljs.core.nth.call(null,inst_13447,(1),null);
var state_13536__$1 = (function (){var statearr_13539 = state_13536;
(statearr_13539[(8)] = inst_13448);

return statearr_13539;
})();
if(cljs.core.truth_(inst_13449)){
var statearr_13540_13623 = state_13536__$1;
(statearr_13540_13623[(1)] = (22));

} else {
var statearr_13541_13624 = state_13536__$1;
(statearr_13541_13624[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (27))){
var inst_13479 = (state_13536[(9)]);
var inst_13477 = (state_13536[(10)]);
var inst_13484 = (state_13536[(11)]);
var inst_13404 = (state_13536[(12)]);
var inst_13484__$1 = cljs.core._nth.call(null,inst_13477,inst_13479);
var inst_13485 = cljs.core.async.put_BANG_.call(null,inst_13484__$1,inst_13404,done);
var state_13536__$1 = (function (){var statearr_13542 = state_13536;
(statearr_13542[(11)] = inst_13484__$1);

return statearr_13542;
})();
if(cljs.core.truth_(inst_13485)){
var statearr_13543_13625 = state_13536__$1;
(statearr_13543_13625[(1)] = (30));

} else {
var statearr_13544_13626 = state_13536__$1;
(statearr_13544_13626[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (1))){
var state_13536__$1 = state_13536;
var statearr_13545_13627 = state_13536__$1;
(statearr_13545_13627[(2)] = null);

(statearr_13545_13627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (24))){
var inst_13435 = (state_13536[(7)]);
var inst_13454 = (state_13536[(2)]);
var inst_13455 = cljs.core.next.call(null,inst_13435);
var inst_13413 = inst_13455;
var inst_13414 = null;
var inst_13415 = (0);
var inst_13416 = (0);
var state_13536__$1 = (function (){var statearr_13546 = state_13536;
(statearr_13546[(13)] = inst_13454);

(statearr_13546[(14)] = inst_13415);

(statearr_13546[(15)] = inst_13413);

(statearr_13546[(16)] = inst_13414);

(statearr_13546[(17)] = inst_13416);

return statearr_13546;
})();
var statearr_13547_13628 = state_13536__$1;
(statearr_13547_13628[(2)] = null);

(statearr_13547_13628[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (39))){
var state_13536__$1 = state_13536;
var statearr_13551_13629 = state_13536__$1;
(statearr_13551_13629[(2)] = null);

(statearr_13551_13629[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (4))){
var inst_13404 = (state_13536[(12)]);
var inst_13404__$1 = (state_13536[(2)]);
var inst_13405 = (inst_13404__$1 == null);
var state_13536__$1 = (function (){var statearr_13552 = state_13536;
(statearr_13552[(12)] = inst_13404__$1);

return statearr_13552;
})();
if(cljs.core.truth_(inst_13405)){
var statearr_13553_13630 = state_13536__$1;
(statearr_13553_13630[(1)] = (5));

} else {
var statearr_13554_13631 = state_13536__$1;
(statearr_13554_13631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (15))){
var inst_13415 = (state_13536[(14)]);
var inst_13413 = (state_13536[(15)]);
var inst_13414 = (state_13536[(16)]);
var inst_13416 = (state_13536[(17)]);
var inst_13431 = (state_13536[(2)]);
var inst_13432 = (inst_13416 + (1));
var tmp13548 = inst_13415;
var tmp13549 = inst_13413;
var tmp13550 = inst_13414;
var inst_13413__$1 = tmp13549;
var inst_13414__$1 = tmp13550;
var inst_13415__$1 = tmp13548;
var inst_13416__$1 = inst_13432;
var state_13536__$1 = (function (){var statearr_13555 = state_13536;
(statearr_13555[(14)] = inst_13415__$1);

(statearr_13555[(15)] = inst_13413__$1);

(statearr_13555[(16)] = inst_13414__$1);

(statearr_13555[(17)] = inst_13416__$1);

(statearr_13555[(18)] = inst_13431);

return statearr_13555;
})();
var statearr_13556_13632 = state_13536__$1;
(statearr_13556_13632[(2)] = null);

(statearr_13556_13632[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (21))){
var inst_13458 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13560_13633 = state_13536__$1;
(statearr_13560_13633[(2)] = inst_13458);

(statearr_13560_13633[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (31))){
var inst_13484 = (state_13536[(11)]);
var inst_13488 = done.call(null,null);
var inst_13489 = cljs.core.async.untap_STAR_.call(null,m,inst_13484);
var state_13536__$1 = (function (){var statearr_13561 = state_13536;
(statearr_13561[(19)] = inst_13488);

return statearr_13561;
})();
var statearr_13562_13634 = state_13536__$1;
(statearr_13562_13634[(2)] = inst_13489);

(statearr_13562_13634[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (32))){
var inst_13479 = (state_13536[(9)]);
var inst_13477 = (state_13536[(10)]);
var inst_13478 = (state_13536[(20)]);
var inst_13476 = (state_13536[(21)]);
var inst_13491 = (state_13536[(2)]);
var inst_13492 = (inst_13479 + (1));
var tmp13557 = inst_13477;
var tmp13558 = inst_13478;
var tmp13559 = inst_13476;
var inst_13476__$1 = tmp13559;
var inst_13477__$1 = tmp13557;
var inst_13478__$1 = tmp13558;
var inst_13479__$1 = inst_13492;
var state_13536__$1 = (function (){var statearr_13563 = state_13536;
(statearr_13563[(9)] = inst_13479__$1);

(statearr_13563[(10)] = inst_13477__$1);

(statearr_13563[(22)] = inst_13491);

(statearr_13563[(20)] = inst_13478__$1);

(statearr_13563[(21)] = inst_13476__$1);

return statearr_13563;
})();
var statearr_13564_13635 = state_13536__$1;
(statearr_13564_13635[(2)] = null);

(statearr_13564_13635[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (40))){
var inst_13504 = (state_13536[(23)]);
var inst_13508 = done.call(null,null);
var inst_13509 = cljs.core.async.untap_STAR_.call(null,m,inst_13504);
var state_13536__$1 = (function (){var statearr_13565 = state_13536;
(statearr_13565[(24)] = inst_13508);

return statearr_13565;
})();
var statearr_13566_13636 = state_13536__$1;
(statearr_13566_13636[(2)] = inst_13509);

(statearr_13566_13636[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (33))){
var inst_13495 = (state_13536[(25)]);
var inst_13497 = cljs.core.chunked_seq_QMARK_.call(null,inst_13495);
var state_13536__$1 = state_13536;
if(inst_13497){
var statearr_13567_13637 = state_13536__$1;
(statearr_13567_13637[(1)] = (36));

} else {
var statearr_13568_13638 = state_13536__$1;
(statearr_13568_13638[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (13))){
var inst_13425 = (state_13536[(26)]);
var inst_13428 = cljs.core.async.close_BANG_.call(null,inst_13425);
var state_13536__$1 = state_13536;
var statearr_13569_13639 = state_13536__$1;
(statearr_13569_13639[(2)] = inst_13428);

(statearr_13569_13639[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (22))){
var inst_13448 = (state_13536[(8)]);
var inst_13451 = cljs.core.async.close_BANG_.call(null,inst_13448);
var state_13536__$1 = state_13536;
var statearr_13570_13640 = state_13536__$1;
(statearr_13570_13640[(2)] = inst_13451);

(statearr_13570_13640[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (36))){
var inst_13495 = (state_13536[(25)]);
var inst_13499 = cljs.core.chunk_first.call(null,inst_13495);
var inst_13500 = cljs.core.chunk_rest.call(null,inst_13495);
var inst_13501 = cljs.core.count.call(null,inst_13499);
var inst_13476 = inst_13500;
var inst_13477 = inst_13499;
var inst_13478 = inst_13501;
var inst_13479 = (0);
var state_13536__$1 = (function (){var statearr_13571 = state_13536;
(statearr_13571[(9)] = inst_13479);

(statearr_13571[(10)] = inst_13477);

(statearr_13571[(20)] = inst_13478);

(statearr_13571[(21)] = inst_13476);

return statearr_13571;
})();
var statearr_13572_13641 = state_13536__$1;
(statearr_13572_13641[(2)] = null);

(statearr_13572_13641[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (41))){
var inst_13495 = (state_13536[(25)]);
var inst_13511 = (state_13536[(2)]);
var inst_13512 = cljs.core.next.call(null,inst_13495);
var inst_13476 = inst_13512;
var inst_13477 = null;
var inst_13478 = (0);
var inst_13479 = (0);
var state_13536__$1 = (function (){var statearr_13573 = state_13536;
(statearr_13573[(9)] = inst_13479);

(statearr_13573[(10)] = inst_13477);

(statearr_13573[(27)] = inst_13511);

(statearr_13573[(20)] = inst_13478);

(statearr_13573[(21)] = inst_13476);

return statearr_13573;
})();
var statearr_13574_13642 = state_13536__$1;
(statearr_13574_13642[(2)] = null);

(statearr_13574_13642[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (43))){
var state_13536__$1 = state_13536;
var statearr_13575_13643 = state_13536__$1;
(statearr_13575_13643[(2)] = null);

(statearr_13575_13643[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (29))){
var inst_13520 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13576_13644 = state_13536__$1;
(statearr_13576_13644[(2)] = inst_13520);

(statearr_13576_13644[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (44))){
var inst_13529 = (state_13536[(2)]);
var state_13536__$1 = (function (){var statearr_13577 = state_13536;
(statearr_13577[(28)] = inst_13529);

return statearr_13577;
})();
var statearr_13578_13645 = state_13536__$1;
(statearr_13578_13645[(2)] = null);

(statearr_13578_13645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (6))){
var inst_13468 = (state_13536[(29)]);
var inst_13467 = cljs.core.deref.call(null,cs);
var inst_13468__$1 = cljs.core.keys.call(null,inst_13467);
var inst_13469 = cljs.core.count.call(null,inst_13468__$1);
var inst_13470 = cljs.core.reset_BANG_.call(null,dctr,inst_13469);
var inst_13475 = cljs.core.seq.call(null,inst_13468__$1);
var inst_13476 = inst_13475;
var inst_13477 = null;
var inst_13478 = (0);
var inst_13479 = (0);
var state_13536__$1 = (function (){var statearr_13579 = state_13536;
(statearr_13579[(9)] = inst_13479);

(statearr_13579[(10)] = inst_13477);

(statearr_13579[(29)] = inst_13468__$1);

(statearr_13579[(20)] = inst_13478);

(statearr_13579[(21)] = inst_13476);

(statearr_13579[(30)] = inst_13470);

return statearr_13579;
})();
var statearr_13580_13646 = state_13536__$1;
(statearr_13580_13646[(2)] = null);

(statearr_13580_13646[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (28))){
var inst_13495 = (state_13536[(25)]);
var inst_13476 = (state_13536[(21)]);
var inst_13495__$1 = cljs.core.seq.call(null,inst_13476);
var state_13536__$1 = (function (){var statearr_13581 = state_13536;
(statearr_13581[(25)] = inst_13495__$1);

return statearr_13581;
})();
if(inst_13495__$1){
var statearr_13582_13647 = state_13536__$1;
(statearr_13582_13647[(1)] = (33));

} else {
var statearr_13583_13648 = state_13536__$1;
(statearr_13583_13648[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (25))){
var inst_13479 = (state_13536[(9)]);
var inst_13478 = (state_13536[(20)]);
var inst_13481 = (inst_13479 < inst_13478);
var inst_13482 = inst_13481;
var state_13536__$1 = state_13536;
if(cljs.core.truth_(inst_13482)){
var statearr_13584_13649 = state_13536__$1;
(statearr_13584_13649[(1)] = (27));

} else {
var statearr_13585_13650 = state_13536__$1;
(statearr_13585_13650[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (34))){
var state_13536__$1 = state_13536;
var statearr_13586_13651 = state_13536__$1;
(statearr_13586_13651[(2)] = null);

(statearr_13586_13651[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (17))){
var state_13536__$1 = state_13536;
var statearr_13587_13652 = state_13536__$1;
(statearr_13587_13652[(2)] = null);

(statearr_13587_13652[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (3))){
var inst_13534 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13536__$1,inst_13534);
} else {
if((state_val_13537 === (12))){
var inst_13463 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13588_13653 = state_13536__$1;
(statearr_13588_13653[(2)] = inst_13463);

(statearr_13588_13653[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (2))){
var state_13536__$1 = state_13536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13536__$1,(4),ch);
} else {
if((state_val_13537 === (23))){
var state_13536__$1 = state_13536;
var statearr_13589_13654 = state_13536__$1;
(statearr_13589_13654[(2)] = null);

(statearr_13589_13654[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (35))){
var inst_13518 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13590_13655 = state_13536__$1;
(statearr_13590_13655[(2)] = inst_13518);

(statearr_13590_13655[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (19))){
var inst_13435 = (state_13536[(7)]);
var inst_13439 = cljs.core.chunk_first.call(null,inst_13435);
var inst_13440 = cljs.core.chunk_rest.call(null,inst_13435);
var inst_13441 = cljs.core.count.call(null,inst_13439);
var inst_13413 = inst_13440;
var inst_13414 = inst_13439;
var inst_13415 = inst_13441;
var inst_13416 = (0);
var state_13536__$1 = (function (){var statearr_13591 = state_13536;
(statearr_13591[(14)] = inst_13415);

(statearr_13591[(15)] = inst_13413);

(statearr_13591[(16)] = inst_13414);

(statearr_13591[(17)] = inst_13416);

return statearr_13591;
})();
var statearr_13592_13656 = state_13536__$1;
(statearr_13592_13656[(2)] = null);

(statearr_13592_13656[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (11))){
var inst_13413 = (state_13536[(15)]);
var inst_13435 = (state_13536[(7)]);
var inst_13435__$1 = cljs.core.seq.call(null,inst_13413);
var state_13536__$1 = (function (){var statearr_13593 = state_13536;
(statearr_13593[(7)] = inst_13435__$1);

return statearr_13593;
})();
if(inst_13435__$1){
var statearr_13594_13657 = state_13536__$1;
(statearr_13594_13657[(1)] = (16));

} else {
var statearr_13595_13658 = state_13536__$1;
(statearr_13595_13658[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (9))){
var inst_13465 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13596_13659 = state_13536__$1;
(statearr_13596_13659[(2)] = inst_13465);

(statearr_13596_13659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (5))){
var inst_13411 = cljs.core.deref.call(null,cs);
var inst_13412 = cljs.core.seq.call(null,inst_13411);
var inst_13413 = inst_13412;
var inst_13414 = null;
var inst_13415 = (0);
var inst_13416 = (0);
var state_13536__$1 = (function (){var statearr_13597 = state_13536;
(statearr_13597[(14)] = inst_13415);

(statearr_13597[(15)] = inst_13413);

(statearr_13597[(16)] = inst_13414);

(statearr_13597[(17)] = inst_13416);

return statearr_13597;
})();
var statearr_13598_13660 = state_13536__$1;
(statearr_13598_13660[(2)] = null);

(statearr_13598_13660[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (14))){
var state_13536__$1 = state_13536;
var statearr_13599_13661 = state_13536__$1;
(statearr_13599_13661[(2)] = null);

(statearr_13599_13661[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (45))){
var inst_13526 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13600_13662 = state_13536__$1;
(statearr_13600_13662[(2)] = inst_13526);

(statearr_13600_13662[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (26))){
var inst_13468 = (state_13536[(29)]);
var inst_13522 = (state_13536[(2)]);
var inst_13523 = cljs.core.seq.call(null,inst_13468);
var state_13536__$1 = (function (){var statearr_13601 = state_13536;
(statearr_13601[(31)] = inst_13522);

return statearr_13601;
})();
if(inst_13523){
var statearr_13602_13663 = state_13536__$1;
(statearr_13602_13663[(1)] = (42));

} else {
var statearr_13603_13664 = state_13536__$1;
(statearr_13603_13664[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (16))){
var inst_13435 = (state_13536[(7)]);
var inst_13437 = cljs.core.chunked_seq_QMARK_.call(null,inst_13435);
var state_13536__$1 = state_13536;
if(inst_13437){
var statearr_13604_13665 = state_13536__$1;
(statearr_13604_13665[(1)] = (19));

} else {
var statearr_13605_13666 = state_13536__$1;
(statearr_13605_13666[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (38))){
var inst_13515 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13606_13667 = state_13536__$1;
(statearr_13606_13667[(2)] = inst_13515);

(statearr_13606_13667[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (30))){
var state_13536__$1 = state_13536;
var statearr_13607_13668 = state_13536__$1;
(statearr_13607_13668[(2)] = null);

(statearr_13607_13668[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (10))){
var inst_13414 = (state_13536[(16)]);
var inst_13416 = (state_13536[(17)]);
var inst_13424 = cljs.core._nth.call(null,inst_13414,inst_13416);
var inst_13425 = cljs.core.nth.call(null,inst_13424,(0),null);
var inst_13426 = cljs.core.nth.call(null,inst_13424,(1),null);
var state_13536__$1 = (function (){var statearr_13608 = state_13536;
(statearr_13608[(26)] = inst_13425);

return statearr_13608;
})();
if(cljs.core.truth_(inst_13426)){
var statearr_13609_13669 = state_13536__$1;
(statearr_13609_13669[(1)] = (13));

} else {
var statearr_13610_13670 = state_13536__$1;
(statearr_13610_13670[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (18))){
var inst_13461 = (state_13536[(2)]);
var state_13536__$1 = state_13536;
var statearr_13611_13671 = state_13536__$1;
(statearr_13611_13671[(2)] = inst_13461);

(statearr_13611_13671[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (42))){
var state_13536__$1 = state_13536;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13536__$1,(45),dchan);
} else {
if((state_val_13537 === (37))){
var inst_13504 = (state_13536[(23)]);
var inst_13495 = (state_13536[(25)]);
var inst_13404 = (state_13536[(12)]);
var inst_13504__$1 = cljs.core.first.call(null,inst_13495);
var inst_13505 = cljs.core.async.put_BANG_.call(null,inst_13504__$1,inst_13404,done);
var state_13536__$1 = (function (){var statearr_13612 = state_13536;
(statearr_13612[(23)] = inst_13504__$1);

return statearr_13612;
})();
if(cljs.core.truth_(inst_13505)){
var statearr_13613_13672 = state_13536__$1;
(statearr_13613_13672[(1)] = (39));

} else {
var statearr_13614_13673 = state_13536__$1;
(statearr_13614_13673[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13537 === (8))){
var inst_13415 = (state_13536[(14)]);
var inst_13416 = (state_13536[(17)]);
var inst_13418 = (inst_13416 < inst_13415);
var inst_13419 = inst_13418;
var state_13536__$1 = state_13536;
if(cljs.core.truth_(inst_13419)){
var statearr_13615_13674 = state_13536__$1;
(statearr_13615_13674[(1)] = (10));

} else {
var statearr_13616_13675 = state_13536__$1;
(statearr_13616_13675[(1)] = (11));

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
});})(c__12802__auto___13621,cs,m,dchan,dctr,done))
;
return ((function (switch__12711__auto__,c__12802__auto___13621,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__12712__auto__ = null;
var cljs$core$async$mult_$_state_machine__12712__auto____0 = (function (){
var statearr_13617 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13617[(0)] = cljs$core$async$mult_$_state_machine__12712__auto__);

(statearr_13617[(1)] = (1));

return statearr_13617;
});
var cljs$core$async$mult_$_state_machine__12712__auto____1 = (function (state_13536){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13536);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13618){if((e13618 instanceof Object)){
var ex__12715__auto__ = e13618;
var statearr_13619_13676 = state_13536;
(statearr_13619_13676[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13618;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13677 = state_13536;
state_13536 = G__13677;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__12712__auto__ = function(state_13536){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__12712__auto____1.call(this,state_13536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__12712__auto____0;
cljs$core$async$mult_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__12712__auto____1;
return cljs$core$async$mult_$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___13621,cs,m,dchan,dctr,done))
})();
var state__12804__auto__ = (function (){var statearr_13620 = f__12803__auto__.call(null);
(statearr_13620[(6)] = c__12802__auto___13621);

return statearr_13620;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___13621,cs,m,dchan,dctr,done))
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
var G__13679 = arguments.length;
switch (G__13679) {
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
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m);
} else {
var m__4244__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,state_map);
} else {
var m__4244__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4243__auto__ = (((m == null))?null:m);
var m__4244__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,m,mode);
} else {
var m__4244__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4534__auto__ = [];
var len__4531__auto___13691 = arguments.length;
var i__4532__auto___13692 = (0);
while(true){
if((i__4532__auto___13692 < len__4531__auto___13691)){
args__4534__auto__.push((arguments[i__4532__auto___13692]));

var G__13693 = (i__4532__auto___13692 + (1));
i__4532__auto___13692 = G__13693;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((3) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4535__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__13685){
var map__13686 = p__13685;
var map__13686__$1 = ((((!((map__13686 == null)))?(((((map__13686.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13686.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13686):map__13686);
var opts = map__13686__$1;
var statearr_13688_13694 = state;
(statearr_13688_13694[(1)] = cont_block);


var temp__5720__auto__ = cljs.core.async.do_alts.call(null,((function (map__13686,map__13686__$1,opts){
return (function (val){
var statearr_13689_13695 = state;
(statearr_13689_13695[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13686,map__13686__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5720__auto__)){
var cb = temp__5720__auto__;
var statearr_13690_13696 = state;
(statearr_13690_13696[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq13681){
var G__13682 = cljs.core.first.call(null,seq13681);
var seq13681__$1 = cljs.core.next.call(null,seq13681);
var G__13683 = cljs.core.first.call(null,seq13681__$1);
var seq13681__$2 = cljs.core.next.call(null,seq13681__$1);
var G__13684 = cljs.core.first.call(null,seq13681__$2);
var seq13681__$3 = cljs.core.next.call(null,seq13681__$2);
var self__4518__auto__ = this;
return self__4518__auto__.cljs$core$IFn$_invoke$arity$variadic(G__13682,G__13683,G__13684,seq13681__$3);
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
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13697 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13697 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13698){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13698 = meta13698;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13699,meta13698__$1){
var self__ = this;
var _13699__$1 = this;
return (new cljs.core.async.t_cljs$core$async13697(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13698__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13699){
var self__ = this;
var _13699__$1 = this;
return self__.meta13698;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13697.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async13697.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta13698","meta13698",556780691,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async13697.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13697.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13697";

cljs.core.async.t_cljs$core$async13697.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async13697");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13697.
 */
cljs.core.async.__GT_t_cljs$core$async13697 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async13697(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13698){
return (new cljs.core.async.t_cljs$core$async13697(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13698));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async13697(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12802__auto___13861 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___13861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___13861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_13801){
var state_val_13802 = (state_13801[(1)]);
if((state_val_13802 === (7))){
var inst_13716 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
var statearr_13803_13862 = state_13801__$1;
(statearr_13803_13862[(2)] = inst_13716);

(statearr_13803_13862[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (20))){
var inst_13728 = (state_13801[(7)]);
var state_13801__$1 = state_13801;
var statearr_13804_13863 = state_13801__$1;
(statearr_13804_13863[(2)] = inst_13728);

(statearr_13804_13863[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (27))){
var state_13801__$1 = state_13801;
var statearr_13805_13864 = state_13801__$1;
(statearr_13805_13864[(2)] = null);

(statearr_13805_13864[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (1))){
var inst_13703 = (state_13801[(8)]);
var inst_13703__$1 = calc_state.call(null);
var inst_13705 = (inst_13703__$1 == null);
var inst_13706 = cljs.core.not.call(null,inst_13705);
var state_13801__$1 = (function (){var statearr_13806 = state_13801;
(statearr_13806[(8)] = inst_13703__$1);

return statearr_13806;
})();
if(inst_13706){
var statearr_13807_13865 = state_13801__$1;
(statearr_13807_13865[(1)] = (2));

} else {
var statearr_13808_13866 = state_13801__$1;
(statearr_13808_13866[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (24))){
var inst_13761 = (state_13801[(9)]);
var inst_13775 = (state_13801[(10)]);
var inst_13752 = (state_13801[(11)]);
var inst_13775__$1 = inst_13752.call(null,inst_13761);
var state_13801__$1 = (function (){var statearr_13809 = state_13801;
(statearr_13809[(10)] = inst_13775__$1);

return statearr_13809;
})();
if(cljs.core.truth_(inst_13775__$1)){
var statearr_13810_13867 = state_13801__$1;
(statearr_13810_13867[(1)] = (29));

} else {
var statearr_13811_13868 = state_13801__$1;
(statearr_13811_13868[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (4))){
var inst_13719 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
if(cljs.core.truth_(inst_13719)){
var statearr_13812_13869 = state_13801__$1;
(statearr_13812_13869[(1)] = (8));

} else {
var statearr_13813_13870 = state_13801__$1;
(statearr_13813_13870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (15))){
var inst_13746 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
if(cljs.core.truth_(inst_13746)){
var statearr_13814_13871 = state_13801__$1;
(statearr_13814_13871[(1)] = (19));

} else {
var statearr_13815_13872 = state_13801__$1;
(statearr_13815_13872[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (21))){
var inst_13751 = (state_13801[(12)]);
var inst_13751__$1 = (state_13801[(2)]);
var inst_13752 = cljs.core.get.call(null,inst_13751__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13753 = cljs.core.get.call(null,inst_13751__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13754 = cljs.core.get.call(null,inst_13751__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_13801__$1 = (function (){var statearr_13816 = state_13801;
(statearr_13816[(13)] = inst_13753);

(statearr_13816[(12)] = inst_13751__$1);

(statearr_13816[(11)] = inst_13752);

return statearr_13816;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_13801__$1,(22),inst_13754);
} else {
if((state_val_13802 === (31))){
var inst_13783 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
if(cljs.core.truth_(inst_13783)){
var statearr_13817_13873 = state_13801__$1;
(statearr_13817_13873[(1)] = (32));

} else {
var statearr_13818_13874 = state_13801__$1;
(statearr_13818_13874[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (32))){
var inst_13760 = (state_13801[(14)]);
var state_13801__$1 = state_13801;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13801__$1,(35),out,inst_13760);
} else {
if((state_val_13802 === (33))){
var inst_13751 = (state_13801[(12)]);
var inst_13728 = inst_13751;
var state_13801__$1 = (function (){var statearr_13819 = state_13801;
(statearr_13819[(7)] = inst_13728);

return statearr_13819;
})();
var statearr_13820_13875 = state_13801__$1;
(statearr_13820_13875[(2)] = null);

(statearr_13820_13875[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (13))){
var inst_13728 = (state_13801[(7)]);
var inst_13735 = inst_13728.cljs$lang$protocol_mask$partition0$;
var inst_13736 = (inst_13735 & (64));
var inst_13737 = inst_13728.cljs$core$ISeq$;
var inst_13738 = (cljs.core.PROTOCOL_SENTINEL === inst_13737);
var inst_13739 = ((inst_13736) || (inst_13738));
var state_13801__$1 = state_13801;
if(cljs.core.truth_(inst_13739)){
var statearr_13821_13876 = state_13801__$1;
(statearr_13821_13876[(1)] = (16));

} else {
var statearr_13822_13877 = state_13801__$1;
(statearr_13822_13877[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (22))){
var inst_13761 = (state_13801[(9)]);
var inst_13760 = (state_13801[(14)]);
var inst_13759 = (state_13801[(2)]);
var inst_13760__$1 = cljs.core.nth.call(null,inst_13759,(0),null);
var inst_13761__$1 = cljs.core.nth.call(null,inst_13759,(1),null);
var inst_13762 = (inst_13760__$1 == null);
var inst_13763 = cljs.core._EQ_.call(null,inst_13761__$1,change);
var inst_13764 = ((inst_13762) || (inst_13763));
var state_13801__$1 = (function (){var statearr_13823 = state_13801;
(statearr_13823[(9)] = inst_13761__$1);

(statearr_13823[(14)] = inst_13760__$1);

return statearr_13823;
})();
if(cljs.core.truth_(inst_13764)){
var statearr_13824_13878 = state_13801__$1;
(statearr_13824_13878[(1)] = (23));

} else {
var statearr_13825_13879 = state_13801__$1;
(statearr_13825_13879[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (36))){
var inst_13751 = (state_13801[(12)]);
var inst_13728 = inst_13751;
var state_13801__$1 = (function (){var statearr_13826 = state_13801;
(statearr_13826[(7)] = inst_13728);

return statearr_13826;
})();
var statearr_13827_13880 = state_13801__$1;
(statearr_13827_13880[(2)] = null);

(statearr_13827_13880[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (29))){
var inst_13775 = (state_13801[(10)]);
var state_13801__$1 = state_13801;
var statearr_13828_13881 = state_13801__$1;
(statearr_13828_13881[(2)] = inst_13775);

(statearr_13828_13881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (6))){
var state_13801__$1 = state_13801;
var statearr_13829_13882 = state_13801__$1;
(statearr_13829_13882[(2)] = false);

(statearr_13829_13882[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (28))){
var inst_13771 = (state_13801[(2)]);
var inst_13772 = calc_state.call(null);
var inst_13728 = inst_13772;
var state_13801__$1 = (function (){var statearr_13830 = state_13801;
(statearr_13830[(7)] = inst_13728);

(statearr_13830[(15)] = inst_13771);

return statearr_13830;
})();
var statearr_13831_13883 = state_13801__$1;
(statearr_13831_13883[(2)] = null);

(statearr_13831_13883[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (25))){
var inst_13797 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
var statearr_13832_13884 = state_13801__$1;
(statearr_13832_13884[(2)] = inst_13797);

(statearr_13832_13884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (34))){
var inst_13795 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
var statearr_13833_13885 = state_13801__$1;
(statearr_13833_13885[(2)] = inst_13795);

(statearr_13833_13885[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (17))){
var state_13801__$1 = state_13801;
var statearr_13834_13886 = state_13801__$1;
(statearr_13834_13886[(2)] = false);

(statearr_13834_13886[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (3))){
var state_13801__$1 = state_13801;
var statearr_13835_13887 = state_13801__$1;
(statearr_13835_13887[(2)] = false);

(statearr_13835_13887[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (12))){
var inst_13799 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13801__$1,inst_13799);
} else {
if((state_val_13802 === (2))){
var inst_13703 = (state_13801[(8)]);
var inst_13708 = inst_13703.cljs$lang$protocol_mask$partition0$;
var inst_13709 = (inst_13708 & (64));
var inst_13710 = inst_13703.cljs$core$ISeq$;
var inst_13711 = (cljs.core.PROTOCOL_SENTINEL === inst_13710);
var inst_13712 = ((inst_13709) || (inst_13711));
var state_13801__$1 = state_13801;
if(cljs.core.truth_(inst_13712)){
var statearr_13836_13888 = state_13801__$1;
(statearr_13836_13888[(1)] = (5));

} else {
var statearr_13837_13889 = state_13801__$1;
(statearr_13837_13889[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (23))){
var inst_13760 = (state_13801[(14)]);
var inst_13766 = (inst_13760 == null);
var state_13801__$1 = state_13801;
if(cljs.core.truth_(inst_13766)){
var statearr_13838_13890 = state_13801__$1;
(statearr_13838_13890[(1)] = (26));

} else {
var statearr_13839_13891 = state_13801__$1;
(statearr_13839_13891[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (35))){
var inst_13786 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
if(cljs.core.truth_(inst_13786)){
var statearr_13840_13892 = state_13801__$1;
(statearr_13840_13892[(1)] = (36));

} else {
var statearr_13841_13893 = state_13801__$1;
(statearr_13841_13893[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (19))){
var inst_13728 = (state_13801[(7)]);
var inst_13748 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13728);
var state_13801__$1 = state_13801;
var statearr_13842_13894 = state_13801__$1;
(statearr_13842_13894[(2)] = inst_13748);

(statearr_13842_13894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (11))){
var inst_13728 = (state_13801[(7)]);
var inst_13732 = (inst_13728 == null);
var inst_13733 = cljs.core.not.call(null,inst_13732);
var state_13801__$1 = state_13801;
if(inst_13733){
var statearr_13843_13895 = state_13801__$1;
(statearr_13843_13895[(1)] = (13));

} else {
var statearr_13844_13896 = state_13801__$1;
(statearr_13844_13896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (9))){
var inst_13703 = (state_13801[(8)]);
var state_13801__$1 = state_13801;
var statearr_13845_13897 = state_13801__$1;
(statearr_13845_13897[(2)] = inst_13703);

(statearr_13845_13897[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (5))){
var state_13801__$1 = state_13801;
var statearr_13846_13898 = state_13801__$1;
(statearr_13846_13898[(2)] = true);

(statearr_13846_13898[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (14))){
var state_13801__$1 = state_13801;
var statearr_13847_13899 = state_13801__$1;
(statearr_13847_13899[(2)] = false);

(statearr_13847_13899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (26))){
var inst_13761 = (state_13801[(9)]);
var inst_13768 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13761);
var state_13801__$1 = state_13801;
var statearr_13848_13900 = state_13801__$1;
(statearr_13848_13900[(2)] = inst_13768);

(statearr_13848_13900[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (16))){
var state_13801__$1 = state_13801;
var statearr_13849_13901 = state_13801__$1;
(statearr_13849_13901[(2)] = true);

(statearr_13849_13901[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (38))){
var inst_13791 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
var statearr_13850_13902 = state_13801__$1;
(statearr_13850_13902[(2)] = inst_13791);

(statearr_13850_13902[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (30))){
var inst_13761 = (state_13801[(9)]);
var inst_13753 = (state_13801[(13)]);
var inst_13752 = (state_13801[(11)]);
var inst_13778 = cljs.core.empty_QMARK_.call(null,inst_13752);
var inst_13779 = inst_13753.call(null,inst_13761);
var inst_13780 = cljs.core.not.call(null,inst_13779);
var inst_13781 = ((inst_13778) && (inst_13780));
var state_13801__$1 = state_13801;
var statearr_13851_13903 = state_13801__$1;
(statearr_13851_13903[(2)] = inst_13781);

(statearr_13851_13903[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (10))){
var inst_13703 = (state_13801[(8)]);
var inst_13724 = (state_13801[(2)]);
var inst_13725 = cljs.core.get.call(null,inst_13724,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_13726 = cljs.core.get.call(null,inst_13724,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_13727 = cljs.core.get.call(null,inst_13724,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_13728 = inst_13703;
var state_13801__$1 = (function (){var statearr_13852 = state_13801;
(statearr_13852[(16)] = inst_13727);

(statearr_13852[(7)] = inst_13728);

(statearr_13852[(17)] = inst_13726);

(statearr_13852[(18)] = inst_13725);

return statearr_13852;
})();
var statearr_13853_13904 = state_13801__$1;
(statearr_13853_13904[(2)] = null);

(statearr_13853_13904[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (18))){
var inst_13743 = (state_13801[(2)]);
var state_13801__$1 = state_13801;
var statearr_13854_13905 = state_13801__$1;
(statearr_13854_13905[(2)] = inst_13743);

(statearr_13854_13905[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (37))){
var state_13801__$1 = state_13801;
var statearr_13855_13906 = state_13801__$1;
(statearr_13855_13906[(2)] = null);

(statearr_13855_13906[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13802 === (8))){
var inst_13703 = (state_13801[(8)]);
var inst_13721 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13703);
var state_13801__$1 = state_13801;
var statearr_13856_13907 = state_13801__$1;
(statearr_13856_13907[(2)] = inst_13721);

(statearr_13856_13907[(1)] = (10));


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
});})(c__12802__auto___13861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__12711__auto__,c__12802__auto___13861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__12712__auto__ = null;
var cljs$core$async$mix_$_state_machine__12712__auto____0 = (function (){
var statearr_13857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13857[(0)] = cljs$core$async$mix_$_state_machine__12712__auto__);

(statearr_13857[(1)] = (1));

return statearr_13857;
});
var cljs$core$async$mix_$_state_machine__12712__auto____1 = (function (state_13801){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13801);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e13858){if((e13858 instanceof Object)){
var ex__12715__auto__ = e13858;
var statearr_13859_13908 = state_13801;
(statearr_13859_13908[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13801);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13858;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13909 = state_13801;
state_13801 = G__13909;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__12712__auto__ = function(state_13801){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__12712__auto____1.call(this,state_13801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__12712__auto____0;
cljs$core$async$mix_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__12712__auto____1;
return cljs$core$async$mix_$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___13861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__12804__auto__ = (function (){var statearr_13860 = f__12803__auto__.call(null);
(statearr_13860[(6)] = c__12802__auto___13861);

return statearr_13860;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___13861,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4244__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v,ch);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__13911 = arguments.length;
switch (G__13911) {
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
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4243__auto__ = (((p == null))?null:p);
var m__4244__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4243__auto__)]);
if(!((m__4244__auto__ == null))){
return m__4244__auto__.call(null,p,v);
} else {
var m__4244__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4244__auto____$1 == null))){
return m__4244__auto____$1.call(null,p,v);
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
var G__13915 = arguments.length;
switch (G__13915) {
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
var or__3949__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3949__auto__,mults){
return (function (p1__13913_SHARP_){
if(cljs.core.truth_(p1__13913_SHARP_.call(null,topic))){
return p1__13913_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__13913_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3949__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async13916 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13916 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta13917){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta13917 = meta13917;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async13916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13918,meta13917__$1){
var self__ = this;
var _13918__$1 = this;
return (new cljs.core.async.t_cljs$core$async13916(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta13917__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13916.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13918){
var self__ = this;
var _13918__$1 = this;
return self__.meta13917;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13916.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13916.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13916.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async13916.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13916.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async13916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13916.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13916.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta13917","meta13917",847223262,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async13916.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13916.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13916";

cljs.core.async.t_cljs$core$async13916.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async13916");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async13916.
 */
cljs.core.async.__GT_t_cljs$core$async13916 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async13916(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13917){
return (new cljs.core.async.t_cljs$core$async13916(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta13917));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async13916(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__12802__auto___14036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___14036,mults,ensure_mult,p){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___14036,mults,ensure_mult,p){
return (function (state_13990){
var state_val_13991 = (state_13990[(1)]);
if((state_val_13991 === (7))){
var inst_13986 = (state_13990[(2)]);
var state_13990__$1 = state_13990;
var statearr_13992_14037 = state_13990__$1;
(statearr_13992_14037[(2)] = inst_13986);

(statearr_13992_14037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (20))){
var state_13990__$1 = state_13990;
var statearr_13993_14038 = state_13990__$1;
(statearr_13993_14038[(2)] = null);

(statearr_13993_14038[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (1))){
var state_13990__$1 = state_13990;
var statearr_13994_14039 = state_13990__$1;
(statearr_13994_14039[(2)] = null);

(statearr_13994_14039[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (24))){
var inst_13969 = (state_13990[(7)]);
var inst_13978 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13969);
var state_13990__$1 = state_13990;
var statearr_13995_14040 = state_13990__$1;
(statearr_13995_14040[(2)] = inst_13978);

(statearr_13995_14040[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (4))){
var inst_13921 = (state_13990[(8)]);
var inst_13921__$1 = (state_13990[(2)]);
var inst_13922 = (inst_13921__$1 == null);
var state_13990__$1 = (function (){var statearr_13996 = state_13990;
(statearr_13996[(8)] = inst_13921__$1);

return statearr_13996;
})();
if(cljs.core.truth_(inst_13922)){
var statearr_13997_14041 = state_13990__$1;
(statearr_13997_14041[(1)] = (5));

} else {
var statearr_13998_14042 = state_13990__$1;
(statearr_13998_14042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (15))){
var inst_13963 = (state_13990[(2)]);
var state_13990__$1 = state_13990;
var statearr_13999_14043 = state_13990__$1;
(statearr_13999_14043[(2)] = inst_13963);

(statearr_13999_14043[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (21))){
var inst_13983 = (state_13990[(2)]);
var state_13990__$1 = (function (){var statearr_14000 = state_13990;
(statearr_14000[(9)] = inst_13983);

return statearr_14000;
})();
var statearr_14001_14044 = state_13990__$1;
(statearr_14001_14044[(2)] = null);

(statearr_14001_14044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (13))){
var inst_13945 = (state_13990[(10)]);
var inst_13947 = cljs.core.chunked_seq_QMARK_.call(null,inst_13945);
var state_13990__$1 = state_13990;
if(inst_13947){
var statearr_14002_14045 = state_13990__$1;
(statearr_14002_14045[(1)] = (16));

} else {
var statearr_14003_14046 = state_13990__$1;
(statearr_14003_14046[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (22))){
var inst_13975 = (state_13990[(2)]);
var state_13990__$1 = state_13990;
if(cljs.core.truth_(inst_13975)){
var statearr_14004_14047 = state_13990__$1;
(statearr_14004_14047[(1)] = (23));

} else {
var statearr_14005_14048 = state_13990__$1;
(statearr_14005_14048[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (6))){
var inst_13921 = (state_13990[(8)]);
var inst_13969 = (state_13990[(7)]);
var inst_13971 = (state_13990[(11)]);
var inst_13969__$1 = topic_fn.call(null,inst_13921);
var inst_13970 = cljs.core.deref.call(null,mults);
var inst_13971__$1 = cljs.core.get.call(null,inst_13970,inst_13969__$1);
var state_13990__$1 = (function (){var statearr_14006 = state_13990;
(statearr_14006[(7)] = inst_13969__$1);

(statearr_14006[(11)] = inst_13971__$1);

return statearr_14006;
})();
if(cljs.core.truth_(inst_13971__$1)){
var statearr_14007_14049 = state_13990__$1;
(statearr_14007_14049[(1)] = (19));

} else {
var statearr_14008_14050 = state_13990__$1;
(statearr_14008_14050[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (25))){
var inst_13980 = (state_13990[(2)]);
var state_13990__$1 = state_13990;
var statearr_14009_14051 = state_13990__$1;
(statearr_14009_14051[(2)] = inst_13980);

(statearr_14009_14051[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (17))){
var inst_13945 = (state_13990[(10)]);
var inst_13954 = cljs.core.first.call(null,inst_13945);
var inst_13955 = cljs.core.async.muxch_STAR_.call(null,inst_13954);
var inst_13956 = cljs.core.async.close_BANG_.call(null,inst_13955);
var inst_13957 = cljs.core.next.call(null,inst_13945);
var inst_13931 = inst_13957;
var inst_13932 = null;
var inst_13933 = (0);
var inst_13934 = (0);
var state_13990__$1 = (function (){var statearr_14010 = state_13990;
(statearr_14010[(12)] = inst_13932);

(statearr_14010[(13)] = inst_13931);

(statearr_14010[(14)] = inst_13956);

(statearr_14010[(15)] = inst_13934);

(statearr_14010[(16)] = inst_13933);

return statearr_14010;
})();
var statearr_14011_14052 = state_13990__$1;
(statearr_14011_14052[(2)] = null);

(statearr_14011_14052[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (3))){
var inst_13988 = (state_13990[(2)]);
var state_13990__$1 = state_13990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13990__$1,inst_13988);
} else {
if((state_val_13991 === (12))){
var inst_13965 = (state_13990[(2)]);
var state_13990__$1 = state_13990;
var statearr_14012_14053 = state_13990__$1;
(statearr_14012_14053[(2)] = inst_13965);

(statearr_14012_14053[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (2))){
var state_13990__$1 = state_13990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13990__$1,(4),ch);
} else {
if((state_val_13991 === (23))){
var state_13990__$1 = state_13990;
var statearr_14013_14054 = state_13990__$1;
(statearr_14013_14054[(2)] = null);

(statearr_14013_14054[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (19))){
var inst_13921 = (state_13990[(8)]);
var inst_13971 = (state_13990[(11)]);
var inst_13973 = cljs.core.async.muxch_STAR_.call(null,inst_13971);
var state_13990__$1 = state_13990;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13990__$1,(22),inst_13973,inst_13921);
} else {
if((state_val_13991 === (11))){
var inst_13931 = (state_13990[(13)]);
var inst_13945 = (state_13990[(10)]);
var inst_13945__$1 = cljs.core.seq.call(null,inst_13931);
var state_13990__$1 = (function (){var statearr_14014 = state_13990;
(statearr_14014[(10)] = inst_13945__$1);

return statearr_14014;
})();
if(inst_13945__$1){
var statearr_14015_14055 = state_13990__$1;
(statearr_14015_14055[(1)] = (13));

} else {
var statearr_14016_14056 = state_13990__$1;
(statearr_14016_14056[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (9))){
var inst_13967 = (state_13990[(2)]);
var state_13990__$1 = state_13990;
var statearr_14017_14057 = state_13990__$1;
(statearr_14017_14057[(2)] = inst_13967);

(statearr_14017_14057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (5))){
var inst_13928 = cljs.core.deref.call(null,mults);
var inst_13929 = cljs.core.vals.call(null,inst_13928);
var inst_13930 = cljs.core.seq.call(null,inst_13929);
var inst_13931 = inst_13930;
var inst_13932 = null;
var inst_13933 = (0);
var inst_13934 = (0);
var state_13990__$1 = (function (){var statearr_14018 = state_13990;
(statearr_14018[(12)] = inst_13932);

(statearr_14018[(13)] = inst_13931);

(statearr_14018[(15)] = inst_13934);

(statearr_14018[(16)] = inst_13933);

return statearr_14018;
})();
var statearr_14019_14058 = state_13990__$1;
(statearr_14019_14058[(2)] = null);

(statearr_14019_14058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (14))){
var state_13990__$1 = state_13990;
var statearr_14023_14059 = state_13990__$1;
(statearr_14023_14059[(2)] = null);

(statearr_14023_14059[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (16))){
var inst_13945 = (state_13990[(10)]);
var inst_13949 = cljs.core.chunk_first.call(null,inst_13945);
var inst_13950 = cljs.core.chunk_rest.call(null,inst_13945);
var inst_13951 = cljs.core.count.call(null,inst_13949);
var inst_13931 = inst_13950;
var inst_13932 = inst_13949;
var inst_13933 = inst_13951;
var inst_13934 = (0);
var state_13990__$1 = (function (){var statearr_14024 = state_13990;
(statearr_14024[(12)] = inst_13932);

(statearr_14024[(13)] = inst_13931);

(statearr_14024[(15)] = inst_13934);

(statearr_14024[(16)] = inst_13933);

return statearr_14024;
})();
var statearr_14025_14060 = state_13990__$1;
(statearr_14025_14060[(2)] = null);

(statearr_14025_14060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (10))){
var inst_13932 = (state_13990[(12)]);
var inst_13931 = (state_13990[(13)]);
var inst_13934 = (state_13990[(15)]);
var inst_13933 = (state_13990[(16)]);
var inst_13939 = cljs.core._nth.call(null,inst_13932,inst_13934);
var inst_13940 = cljs.core.async.muxch_STAR_.call(null,inst_13939);
var inst_13941 = cljs.core.async.close_BANG_.call(null,inst_13940);
var inst_13942 = (inst_13934 + (1));
var tmp14020 = inst_13932;
var tmp14021 = inst_13931;
var tmp14022 = inst_13933;
var inst_13931__$1 = tmp14021;
var inst_13932__$1 = tmp14020;
var inst_13933__$1 = tmp14022;
var inst_13934__$1 = inst_13942;
var state_13990__$1 = (function (){var statearr_14026 = state_13990;
(statearr_14026[(12)] = inst_13932__$1);

(statearr_14026[(13)] = inst_13931__$1);

(statearr_14026[(17)] = inst_13941);

(statearr_14026[(15)] = inst_13934__$1);

(statearr_14026[(16)] = inst_13933__$1);

return statearr_14026;
})();
var statearr_14027_14061 = state_13990__$1;
(statearr_14027_14061[(2)] = null);

(statearr_14027_14061[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (18))){
var inst_13960 = (state_13990[(2)]);
var state_13990__$1 = state_13990;
var statearr_14028_14062 = state_13990__$1;
(statearr_14028_14062[(2)] = inst_13960);

(statearr_14028_14062[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13991 === (8))){
var inst_13934 = (state_13990[(15)]);
var inst_13933 = (state_13990[(16)]);
var inst_13936 = (inst_13934 < inst_13933);
var inst_13937 = inst_13936;
var state_13990__$1 = state_13990;
if(cljs.core.truth_(inst_13937)){
var statearr_14029_14063 = state_13990__$1;
(statearr_14029_14063[(1)] = (10));

} else {
var statearr_14030_14064 = state_13990__$1;
(statearr_14030_14064[(1)] = (11));

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
});})(c__12802__auto___14036,mults,ensure_mult,p))
;
return ((function (switch__12711__auto__,c__12802__auto___14036,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_14031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14031[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_14031[(1)] = (1));

return statearr_14031;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_13990){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_13990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e14032){if((e14032 instanceof Object)){
var ex__12715__auto__ = e14032;
var statearr_14033_14065 = state_13990;
(statearr_14033_14065[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14032;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14066 = state_13990;
state_13990 = G__14066;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_13990){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_13990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___14036,mults,ensure_mult,p))
})();
var state__12804__auto__ = (function (){var statearr_14034 = f__12803__auto__.call(null);
(statearr_14034[(6)] = c__12802__auto___14036);

return statearr_14034;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___14036,mults,ensure_mult,p))
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
var G__14068 = arguments.length;
switch (G__14068) {
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
var G__14071 = arguments.length;
switch (G__14071) {
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
var G__14074 = arguments.length;
switch (G__14074) {
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
var c__12802__auto___14141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14113){
var state_val_14114 = (state_14113[(1)]);
if((state_val_14114 === (7))){
var state_14113__$1 = state_14113;
var statearr_14115_14142 = state_14113__$1;
(statearr_14115_14142[(2)] = null);

(statearr_14115_14142[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (1))){
var state_14113__$1 = state_14113;
var statearr_14116_14143 = state_14113__$1;
(statearr_14116_14143[(2)] = null);

(statearr_14116_14143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (4))){
var inst_14077 = (state_14113[(7)]);
var inst_14079 = (inst_14077 < cnt);
var state_14113__$1 = state_14113;
if(cljs.core.truth_(inst_14079)){
var statearr_14117_14144 = state_14113__$1;
(statearr_14117_14144[(1)] = (6));

} else {
var statearr_14118_14145 = state_14113__$1;
(statearr_14118_14145[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (15))){
var inst_14109 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14119_14146 = state_14113__$1;
(statearr_14119_14146[(2)] = inst_14109);

(statearr_14119_14146[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (13))){
var inst_14102 = cljs.core.async.close_BANG_.call(null,out);
var state_14113__$1 = state_14113;
var statearr_14120_14147 = state_14113__$1;
(statearr_14120_14147[(2)] = inst_14102);

(statearr_14120_14147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (6))){
var state_14113__$1 = state_14113;
var statearr_14121_14148 = state_14113__$1;
(statearr_14121_14148[(2)] = null);

(statearr_14121_14148[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (3))){
var inst_14111 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14113__$1,inst_14111);
} else {
if((state_val_14114 === (12))){
var inst_14099 = (state_14113[(8)]);
var inst_14099__$1 = (state_14113[(2)]);
var inst_14100 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14099__$1);
var state_14113__$1 = (function (){var statearr_14122 = state_14113;
(statearr_14122[(8)] = inst_14099__$1);

return statearr_14122;
})();
if(cljs.core.truth_(inst_14100)){
var statearr_14123_14149 = state_14113__$1;
(statearr_14123_14149[(1)] = (13));

} else {
var statearr_14124_14150 = state_14113__$1;
(statearr_14124_14150[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (2))){
var inst_14076 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_14077 = (0);
var state_14113__$1 = (function (){var statearr_14125 = state_14113;
(statearr_14125[(9)] = inst_14076);

(statearr_14125[(7)] = inst_14077);

return statearr_14125;
})();
var statearr_14126_14151 = state_14113__$1;
(statearr_14126_14151[(2)] = null);

(statearr_14126_14151[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (11))){
var inst_14077 = (state_14113[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14113,(10),Object,null,(9));
var inst_14086 = chs__$1.call(null,inst_14077);
var inst_14087 = done.call(null,inst_14077);
var inst_14088 = cljs.core.async.take_BANG_.call(null,inst_14086,inst_14087);
var state_14113__$1 = state_14113;
var statearr_14127_14152 = state_14113__$1;
(statearr_14127_14152[(2)] = inst_14088);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14113__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (9))){
var inst_14077 = (state_14113[(7)]);
var inst_14090 = (state_14113[(2)]);
var inst_14091 = (inst_14077 + (1));
var inst_14077__$1 = inst_14091;
var state_14113__$1 = (function (){var statearr_14128 = state_14113;
(statearr_14128[(10)] = inst_14090);

(statearr_14128[(7)] = inst_14077__$1);

return statearr_14128;
})();
var statearr_14129_14153 = state_14113__$1;
(statearr_14129_14153[(2)] = null);

(statearr_14129_14153[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (5))){
var inst_14097 = (state_14113[(2)]);
var state_14113__$1 = (function (){var statearr_14130 = state_14113;
(statearr_14130[(11)] = inst_14097);

return statearr_14130;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14113__$1,(12),dchan);
} else {
if((state_val_14114 === (14))){
var inst_14099 = (state_14113[(8)]);
var inst_14104 = cljs.core.apply.call(null,f,inst_14099);
var state_14113__$1 = state_14113;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14113__$1,(16),out,inst_14104);
} else {
if((state_val_14114 === (16))){
var inst_14106 = (state_14113[(2)]);
var state_14113__$1 = (function (){var statearr_14131 = state_14113;
(statearr_14131[(12)] = inst_14106);

return statearr_14131;
})();
var statearr_14132_14154 = state_14113__$1;
(statearr_14132_14154[(2)] = null);

(statearr_14132_14154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (10))){
var inst_14081 = (state_14113[(2)]);
var inst_14082 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_14113__$1 = (function (){var statearr_14133 = state_14113;
(statearr_14133[(13)] = inst_14081);

return statearr_14133;
})();
var statearr_14134_14155 = state_14113__$1;
(statearr_14134_14155[(2)] = inst_14082);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14113__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14114 === (8))){
var inst_14095 = (state_14113[(2)]);
var state_14113__$1 = state_14113;
var statearr_14135_14156 = state_14113__$1;
(statearr_14135_14156[(2)] = inst_14095);

(statearr_14135_14156[(1)] = (5));


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
});})(c__12802__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__12711__auto__,c__12802__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_14136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14136[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_14136[(1)] = (1));

return statearr_14136;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_14113){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_14113);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e14137){if((e14137 instanceof Object)){
var ex__12715__auto__ = e14137;
var statearr_14138_14157 = state_14113;
(statearr_14138_14157[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14158 = state_14113;
state_14113 = G__14158;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_14113){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_14113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__12804__auto__ = (function (){var statearr_14139 = f__12803__auto__.call(null);
(statearr_14139[(6)] = c__12802__auto___14141);

return statearr_14139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___14141,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__14161 = arguments.length;
switch (G__14161) {
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
var c__12802__auto___14215 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___14215,out){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___14215,out){
return (function (state_14193){
var state_val_14194 = (state_14193[(1)]);
if((state_val_14194 === (7))){
var inst_14173 = (state_14193[(7)]);
var inst_14172 = (state_14193[(8)]);
var inst_14172__$1 = (state_14193[(2)]);
var inst_14173__$1 = cljs.core.nth.call(null,inst_14172__$1,(0),null);
var inst_14174 = cljs.core.nth.call(null,inst_14172__$1,(1),null);
var inst_14175 = (inst_14173__$1 == null);
var state_14193__$1 = (function (){var statearr_14195 = state_14193;
(statearr_14195[(7)] = inst_14173__$1);

(statearr_14195[(8)] = inst_14172__$1);

(statearr_14195[(9)] = inst_14174);

return statearr_14195;
})();
if(cljs.core.truth_(inst_14175)){
var statearr_14196_14216 = state_14193__$1;
(statearr_14196_14216[(1)] = (8));

} else {
var statearr_14197_14217 = state_14193__$1;
(statearr_14197_14217[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14194 === (1))){
var inst_14162 = cljs.core.vec.call(null,chs);
var inst_14163 = inst_14162;
var state_14193__$1 = (function (){var statearr_14198 = state_14193;
(statearr_14198[(10)] = inst_14163);

return statearr_14198;
})();
var statearr_14199_14218 = state_14193__$1;
(statearr_14199_14218[(2)] = null);

(statearr_14199_14218[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14194 === (4))){
var inst_14163 = (state_14193[(10)]);
var state_14193__$1 = state_14193;
return cljs.core.async.ioc_alts_BANG_.call(null,state_14193__$1,(7),inst_14163);
} else {
if((state_val_14194 === (6))){
var inst_14189 = (state_14193[(2)]);
var state_14193__$1 = state_14193;
var statearr_14200_14219 = state_14193__$1;
(statearr_14200_14219[(2)] = inst_14189);

(statearr_14200_14219[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14194 === (3))){
var inst_14191 = (state_14193[(2)]);
var state_14193__$1 = state_14193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14193__$1,inst_14191);
} else {
if((state_val_14194 === (2))){
var inst_14163 = (state_14193[(10)]);
var inst_14165 = cljs.core.count.call(null,inst_14163);
var inst_14166 = (inst_14165 > (0));
var state_14193__$1 = state_14193;
if(cljs.core.truth_(inst_14166)){
var statearr_14202_14220 = state_14193__$1;
(statearr_14202_14220[(1)] = (4));

} else {
var statearr_14203_14221 = state_14193__$1;
(statearr_14203_14221[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14194 === (11))){
var inst_14163 = (state_14193[(10)]);
var inst_14182 = (state_14193[(2)]);
var tmp14201 = inst_14163;
var inst_14163__$1 = tmp14201;
var state_14193__$1 = (function (){var statearr_14204 = state_14193;
(statearr_14204[(10)] = inst_14163__$1);

(statearr_14204[(11)] = inst_14182);

return statearr_14204;
})();
var statearr_14205_14222 = state_14193__$1;
(statearr_14205_14222[(2)] = null);

(statearr_14205_14222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14194 === (9))){
var inst_14173 = (state_14193[(7)]);
var state_14193__$1 = state_14193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14193__$1,(11),out,inst_14173);
} else {
if((state_val_14194 === (5))){
var inst_14187 = cljs.core.async.close_BANG_.call(null,out);
var state_14193__$1 = state_14193;
var statearr_14206_14223 = state_14193__$1;
(statearr_14206_14223[(2)] = inst_14187);

(statearr_14206_14223[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14194 === (10))){
var inst_14185 = (state_14193[(2)]);
var state_14193__$1 = state_14193;
var statearr_14207_14224 = state_14193__$1;
(statearr_14207_14224[(2)] = inst_14185);

(statearr_14207_14224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14194 === (8))){
var inst_14173 = (state_14193[(7)]);
var inst_14172 = (state_14193[(8)]);
var inst_14163 = (state_14193[(10)]);
var inst_14174 = (state_14193[(9)]);
var inst_14177 = (function (){var cs = inst_14163;
var vec__14168 = inst_14172;
var v = inst_14173;
var c = inst_14174;
return ((function (cs,vec__14168,v,c,inst_14173,inst_14172,inst_14163,inst_14174,state_val_14194,c__12802__auto___14215,out){
return (function (p1__14159_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__14159_SHARP_);
});
;})(cs,vec__14168,v,c,inst_14173,inst_14172,inst_14163,inst_14174,state_val_14194,c__12802__auto___14215,out))
})();
var inst_14178 = cljs.core.filterv.call(null,inst_14177,inst_14163);
var inst_14163__$1 = inst_14178;
var state_14193__$1 = (function (){var statearr_14208 = state_14193;
(statearr_14208[(10)] = inst_14163__$1);

return statearr_14208;
})();
var statearr_14209_14225 = state_14193__$1;
(statearr_14209_14225[(2)] = null);

(statearr_14209_14225[(1)] = (2));


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
});})(c__12802__auto___14215,out))
;
return ((function (switch__12711__auto__,c__12802__auto___14215,out){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_14210 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14210[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_14210[(1)] = (1));

return statearr_14210;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_14193){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_14193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e14211){if((e14211 instanceof Object)){
var ex__12715__auto__ = e14211;
var statearr_14212_14226 = state_14193;
(statearr_14212_14226[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14211;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14227 = state_14193;
state_14193 = G__14227;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_14193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_14193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___14215,out))
})();
var state__12804__auto__ = (function (){var statearr_14213 = f__12803__auto__.call(null);
(statearr_14213[(6)] = c__12802__auto___14215);

return statearr_14213;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___14215,out))
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
var G__14229 = arguments.length;
switch (G__14229) {
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
var c__12802__auto___14274 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___14274,out){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___14274,out){
return (function (state_14253){
var state_val_14254 = (state_14253[(1)]);
if((state_val_14254 === (7))){
var inst_14235 = (state_14253[(7)]);
var inst_14235__$1 = (state_14253[(2)]);
var inst_14236 = (inst_14235__$1 == null);
var inst_14237 = cljs.core.not.call(null,inst_14236);
var state_14253__$1 = (function (){var statearr_14255 = state_14253;
(statearr_14255[(7)] = inst_14235__$1);

return statearr_14255;
})();
if(inst_14237){
var statearr_14256_14275 = state_14253__$1;
(statearr_14256_14275[(1)] = (8));

} else {
var statearr_14257_14276 = state_14253__$1;
(statearr_14257_14276[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14254 === (1))){
var inst_14230 = (0);
var state_14253__$1 = (function (){var statearr_14258 = state_14253;
(statearr_14258[(8)] = inst_14230);

return statearr_14258;
})();
var statearr_14259_14277 = state_14253__$1;
(statearr_14259_14277[(2)] = null);

(statearr_14259_14277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14254 === (4))){
var state_14253__$1 = state_14253;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14253__$1,(7),ch);
} else {
if((state_val_14254 === (6))){
var inst_14248 = (state_14253[(2)]);
var state_14253__$1 = state_14253;
var statearr_14260_14278 = state_14253__$1;
(statearr_14260_14278[(2)] = inst_14248);

(statearr_14260_14278[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14254 === (3))){
var inst_14250 = (state_14253[(2)]);
var inst_14251 = cljs.core.async.close_BANG_.call(null,out);
var state_14253__$1 = (function (){var statearr_14261 = state_14253;
(statearr_14261[(9)] = inst_14250);

return statearr_14261;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14253__$1,inst_14251);
} else {
if((state_val_14254 === (2))){
var inst_14230 = (state_14253[(8)]);
var inst_14232 = (inst_14230 < n);
var state_14253__$1 = state_14253;
if(cljs.core.truth_(inst_14232)){
var statearr_14262_14279 = state_14253__$1;
(statearr_14262_14279[(1)] = (4));

} else {
var statearr_14263_14280 = state_14253__$1;
(statearr_14263_14280[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14254 === (11))){
var inst_14230 = (state_14253[(8)]);
var inst_14240 = (state_14253[(2)]);
var inst_14241 = (inst_14230 + (1));
var inst_14230__$1 = inst_14241;
var state_14253__$1 = (function (){var statearr_14264 = state_14253;
(statearr_14264[(10)] = inst_14240);

(statearr_14264[(8)] = inst_14230__$1);

return statearr_14264;
})();
var statearr_14265_14281 = state_14253__$1;
(statearr_14265_14281[(2)] = null);

(statearr_14265_14281[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14254 === (9))){
var state_14253__$1 = state_14253;
var statearr_14266_14282 = state_14253__$1;
(statearr_14266_14282[(2)] = null);

(statearr_14266_14282[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14254 === (5))){
var state_14253__$1 = state_14253;
var statearr_14267_14283 = state_14253__$1;
(statearr_14267_14283[(2)] = null);

(statearr_14267_14283[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14254 === (10))){
var inst_14245 = (state_14253[(2)]);
var state_14253__$1 = state_14253;
var statearr_14268_14284 = state_14253__$1;
(statearr_14268_14284[(2)] = inst_14245);

(statearr_14268_14284[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14254 === (8))){
var inst_14235 = (state_14253[(7)]);
var state_14253__$1 = state_14253;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14253__$1,(11),out,inst_14235);
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
});})(c__12802__auto___14274,out))
;
return ((function (switch__12711__auto__,c__12802__auto___14274,out){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_14269 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14269[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_14269[(1)] = (1));

return statearr_14269;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_14253){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_14253);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e14270){if((e14270 instanceof Object)){
var ex__12715__auto__ = e14270;
var statearr_14271_14285 = state_14253;
(statearr_14271_14285[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14253);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14270;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14286 = state_14253;
state_14253 = G__14286;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_14253){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_14253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___14274,out))
})();
var state__12804__auto__ = (function (){var statearr_14272 = f__12803__auto__.call(null);
(statearr_14272[(6)] = c__12802__auto___14274);

return statearr_14272;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___14274,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14288 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14288 = (function (f,ch,meta14289){
this.f = f;
this.ch = ch;
this.meta14289 = meta14289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14290,meta14289__$1){
var self__ = this;
var _14290__$1 = this;
return (new cljs.core.async.t_cljs$core$async14288(self__.f,self__.ch,meta14289__$1));
});

cljs.core.async.t_cljs$core$async14288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14290){
var self__ = this;
var _14290__$1 = this;
return self__.meta14289;
});

cljs.core.async.t_cljs$core$async14288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14291 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14291 = (function (f,ch,meta14289,_,fn1,meta14292){
this.f = f;
this.ch = ch;
this.meta14289 = meta14289;
this._ = _;
this.fn1 = fn1;
this.meta14292 = meta14292;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14293,meta14292__$1){
var self__ = this;
var _14293__$1 = this;
return (new cljs.core.async.t_cljs$core$async14291(self__.f,self__.ch,self__.meta14289,self__._,self__.fn1,meta14292__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14293){
var self__ = this;
var _14293__$1 = this;
return self__.meta14292;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async14291.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__14287_SHARP_){
return f1.call(null,(((p1__14287_SHARP_ == null))?null:self__.f.call(null,p1__14287_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async14291.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14289","meta14289",-626218483,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async14288","cljs.core.async/t_cljs$core$async14288",-1683656181,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta14292","meta14292",1083237550,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async14291.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14291.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14291";

cljs.core.async.t_cljs$core$async14291.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14291");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14291.
 */
cljs.core.async.__GT_t_cljs$core$async14291 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14291(f__$1,ch__$1,meta14289__$1,___$2,fn1__$1,meta14292){
return (new cljs.core.async.t_cljs$core$async14291(f__$1,ch__$1,meta14289__$1,___$2,fn1__$1,meta14292));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async14291(self__.f,self__.ch,self__.meta14289,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3938__auto__ = ret;
if(cljs.core.truth_(and__3938__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3938__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async14288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async14288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14289","meta14289",-626218483,null)], null);
});

cljs.core.async.t_cljs$core$async14288.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14288";

cljs.core.async.t_cljs$core$async14288.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14288");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14288.
 */
cljs.core.async.__GT_t_cljs$core$async14288 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async14288(f__$1,ch__$1,meta14289){
return (new cljs.core.async.t_cljs$core$async14288(f__$1,ch__$1,meta14289));
});

}

return (new cljs.core.async.t_cljs$core$async14288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14294 = (function (f,ch,meta14295){
this.f = f;
this.ch = ch;
this.meta14295 = meta14295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14296,meta14295__$1){
var self__ = this;
var _14296__$1 = this;
return (new cljs.core.async.t_cljs$core$async14294(self__.f,self__.ch,meta14295__$1));
});

cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14296){
var self__ = this;
var _14296__$1 = this;
return self__.meta14295;
});

cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async14294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14295","meta14295",-1202283930,null)], null);
});

cljs.core.async.t_cljs$core$async14294.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14294";

cljs.core.async.t_cljs$core$async14294.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14294");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14294.
 */
cljs.core.async.__GT_t_cljs$core$async14294 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async14294(f__$1,ch__$1,meta14295){
return (new cljs.core.async.t_cljs$core$async14294(f__$1,ch__$1,meta14295));
});

}

return (new cljs.core.async.t_cljs$core$async14294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async14297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14297 = (function (p,ch,meta14298){
this.p = p;
this.ch = ch;
this.meta14298 = meta14298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async14297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14299,meta14298__$1){
var self__ = this;
var _14299__$1 = this;
return (new cljs.core.async.t_cljs$core$async14297(self__.p,self__.ch,meta14298__$1));
});

cljs.core.async.t_cljs$core$async14297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14299){
var self__ = this;
var _14299__$1 = this;
return self__.meta14298;
});

cljs.core.async.t_cljs$core$async14297.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async14297.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async14297.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async14297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async14297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta14298","meta14298",1384387943,null)], null);
});

cljs.core.async.t_cljs$core$async14297.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14297";

cljs.core.async.t_cljs$core$async14297.cljs$lang$ctorPrWriter = (function (this__4192__auto__,writer__4193__auto__,opt__4194__auto__){
return cljs.core._write.call(null,writer__4193__auto__,"cljs.core.async/t_cljs$core$async14297");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async14297.
 */
cljs.core.async.__GT_t_cljs$core$async14297 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async14297(p__$1,ch__$1,meta14298){
return (new cljs.core.async.t_cljs$core$async14297(p__$1,ch__$1,meta14298));
});

}

return (new cljs.core.async.t_cljs$core$async14297(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__14301 = arguments.length;
switch (G__14301) {
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
var c__12802__auto___14341 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___14341,out){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___14341,out){
return (function (state_14322){
var state_val_14323 = (state_14322[(1)]);
if((state_val_14323 === (7))){
var inst_14318 = (state_14322[(2)]);
var state_14322__$1 = state_14322;
var statearr_14324_14342 = state_14322__$1;
(statearr_14324_14342[(2)] = inst_14318);

(statearr_14324_14342[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14323 === (1))){
var state_14322__$1 = state_14322;
var statearr_14325_14343 = state_14322__$1;
(statearr_14325_14343[(2)] = null);

(statearr_14325_14343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14323 === (4))){
var inst_14304 = (state_14322[(7)]);
var inst_14304__$1 = (state_14322[(2)]);
var inst_14305 = (inst_14304__$1 == null);
var state_14322__$1 = (function (){var statearr_14326 = state_14322;
(statearr_14326[(7)] = inst_14304__$1);

return statearr_14326;
})();
if(cljs.core.truth_(inst_14305)){
var statearr_14327_14344 = state_14322__$1;
(statearr_14327_14344[(1)] = (5));

} else {
var statearr_14328_14345 = state_14322__$1;
(statearr_14328_14345[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14323 === (6))){
var inst_14304 = (state_14322[(7)]);
var inst_14309 = p.call(null,inst_14304);
var state_14322__$1 = state_14322;
if(cljs.core.truth_(inst_14309)){
var statearr_14329_14346 = state_14322__$1;
(statearr_14329_14346[(1)] = (8));

} else {
var statearr_14330_14347 = state_14322__$1;
(statearr_14330_14347[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14323 === (3))){
var inst_14320 = (state_14322[(2)]);
var state_14322__$1 = state_14322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14322__$1,inst_14320);
} else {
if((state_val_14323 === (2))){
var state_14322__$1 = state_14322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14322__$1,(4),ch);
} else {
if((state_val_14323 === (11))){
var inst_14312 = (state_14322[(2)]);
var state_14322__$1 = state_14322;
var statearr_14331_14348 = state_14322__$1;
(statearr_14331_14348[(2)] = inst_14312);

(statearr_14331_14348[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14323 === (9))){
var state_14322__$1 = state_14322;
var statearr_14332_14349 = state_14322__$1;
(statearr_14332_14349[(2)] = null);

(statearr_14332_14349[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14323 === (5))){
var inst_14307 = cljs.core.async.close_BANG_.call(null,out);
var state_14322__$1 = state_14322;
var statearr_14333_14350 = state_14322__$1;
(statearr_14333_14350[(2)] = inst_14307);

(statearr_14333_14350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14323 === (10))){
var inst_14315 = (state_14322[(2)]);
var state_14322__$1 = (function (){var statearr_14334 = state_14322;
(statearr_14334[(8)] = inst_14315);

return statearr_14334;
})();
var statearr_14335_14351 = state_14322__$1;
(statearr_14335_14351[(2)] = null);

(statearr_14335_14351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14323 === (8))){
var inst_14304 = (state_14322[(7)]);
var state_14322__$1 = state_14322;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14322__$1,(11),out,inst_14304);
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
});})(c__12802__auto___14341,out))
;
return ((function (switch__12711__auto__,c__12802__auto___14341,out){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_14336 = [null,null,null,null,null,null,null,null,null];
(statearr_14336[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_14336[(1)] = (1));

return statearr_14336;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_14322){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_14322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e14337){if((e14337 instanceof Object)){
var ex__12715__auto__ = e14337;
var statearr_14338_14352 = state_14322;
(statearr_14338_14352[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14337;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14353 = state_14322;
state_14322 = G__14353;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_14322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_14322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___14341,out))
})();
var state__12804__auto__ = (function (){var statearr_14339 = f__12803__auto__.call(null);
(statearr_14339[(6)] = c__12802__auto___14341);

return statearr_14339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___14341,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__14355 = arguments.length;
switch (G__14355) {
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
var c__12802__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto__){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto__){
return (function (state_14418){
var state_val_14419 = (state_14418[(1)]);
if((state_val_14419 === (7))){
var inst_14414 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14420_14458 = state_14418__$1;
(statearr_14420_14458[(2)] = inst_14414);

(statearr_14420_14458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (20))){
var inst_14384 = (state_14418[(7)]);
var inst_14395 = (state_14418[(2)]);
var inst_14396 = cljs.core.next.call(null,inst_14384);
var inst_14370 = inst_14396;
var inst_14371 = null;
var inst_14372 = (0);
var inst_14373 = (0);
var state_14418__$1 = (function (){var statearr_14421 = state_14418;
(statearr_14421[(8)] = inst_14371);

(statearr_14421[(9)] = inst_14370);

(statearr_14421[(10)] = inst_14395);

(statearr_14421[(11)] = inst_14373);

(statearr_14421[(12)] = inst_14372);

return statearr_14421;
})();
var statearr_14422_14459 = state_14418__$1;
(statearr_14422_14459[(2)] = null);

(statearr_14422_14459[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (1))){
var state_14418__$1 = state_14418;
var statearr_14423_14460 = state_14418__$1;
(statearr_14423_14460[(2)] = null);

(statearr_14423_14460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (4))){
var inst_14359 = (state_14418[(13)]);
var inst_14359__$1 = (state_14418[(2)]);
var inst_14360 = (inst_14359__$1 == null);
var state_14418__$1 = (function (){var statearr_14424 = state_14418;
(statearr_14424[(13)] = inst_14359__$1);

return statearr_14424;
})();
if(cljs.core.truth_(inst_14360)){
var statearr_14425_14461 = state_14418__$1;
(statearr_14425_14461[(1)] = (5));

} else {
var statearr_14426_14462 = state_14418__$1;
(statearr_14426_14462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (15))){
var state_14418__$1 = state_14418;
var statearr_14430_14463 = state_14418__$1;
(statearr_14430_14463[(2)] = null);

(statearr_14430_14463[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (21))){
var state_14418__$1 = state_14418;
var statearr_14431_14464 = state_14418__$1;
(statearr_14431_14464[(2)] = null);

(statearr_14431_14464[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (13))){
var inst_14371 = (state_14418[(8)]);
var inst_14370 = (state_14418[(9)]);
var inst_14373 = (state_14418[(11)]);
var inst_14372 = (state_14418[(12)]);
var inst_14380 = (state_14418[(2)]);
var inst_14381 = (inst_14373 + (1));
var tmp14427 = inst_14371;
var tmp14428 = inst_14370;
var tmp14429 = inst_14372;
var inst_14370__$1 = tmp14428;
var inst_14371__$1 = tmp14427;
var inst_14372__$1 = tmp14429;
var inst_14373__$1 = inst_14381;
var state_14418__$1 = (function (){var statearr_14432 = state_14418;
(statearr_14432[(8)] = inst_14371__$1);

(statearr_14432[(9)] = inst_14370__$1);

(statearr_14432[(11)] = inst_14373__$1);

(statearr_14432[(12)] = inst_14372__$1);

(statearr_14432[(14)] = inst_14380);

return statearr_14432;
})();
var statearr_14433_14465 = state_14418__$1;
(statearr_14433_14465[(2)] = null);

(statearr_14433_14465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (22))){
var state_14418__$1 = state_14418;
var statearr_14434_14466 = state_14418__$1;
(statearr_14434_14466[(2)] = null);

(statearr_14434_14466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (6))){
var inst_14359 = (state_14418[(13)]);
var inst_14368 = f.call(null,inst_14359);
var inst_14369 = cljs.core.seq.call(null,inst_14368);
var inst_14370 = inst_14369;
var inst_14371 = null;
var inst_14372 = (0);
var inst_14373 = (0);
var state_14418__$1 = (function (){var statearr_14435 = state_14418;
(statearr_14435[(8)] = inst_14371);

(statearr_14435[(9)] = inst_14370);

(statearr_14435[(11)] = inst_14373);

(statearr_14435[(12)] = inst_14372);

return statearr_14435;
})();
var statearr_14436_14467 = state_14418__$1;
(statearr_14436_14467[(2)] = null);

(statearr_14436_14467[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (17))){
var inst_14384 = (state_14418[(7)]);
var inst_14388 = cljs.core.chunk_first.call(null,inst_14384);
var inst_14389 = cljs.core.chunk_rest.call(null,inst_14384);
var inst_14390 = cljs.core.count.call(null,inst_14388);
var inst_14370 = inst_14389;
var inst_14371 = inst_14388;
var inst_14372 = inst_14390;
var inst_14373 = (0);
var state_14418__$1 = (function (){var statearr_14437 = state_14418;
(statearr_14437[(8)] = inst_14371);

(statearr_14437[(9)] = inst_14370);

(statearr_14437[(11)] = inst_14373);

(statearr_14437[(12)] = inst_14372);

return statearr_14437;
})();
var statearr_14438_14468 = state_14418__$1;
(statearr_14438_14468[(2)] = null);

(statearr_14438_14468[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (3))){
var inst_14416 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14418__$1,inst_14416);
} else {
if((state_val_14419 === (12))){
var inst_14404 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14439_14469 = state_14418__$1;
(statearr_14439_14469[(2)] = inst_14404);

(statearr_14439_14469[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (2))){
var state_14418__$1 = state_14418;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14418__$1,(4),in$);
} else {
if((state_val_14419 === (23))){
var inst_14412 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14440_14470 = state_14418__$1;
(statearr_14440_14470[(2)] = inst_14412);

(statearr_14440_14470[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (19))){
var inst_14399 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14441_14471 = state_14418__$1;
(statearr_14441_14471[(2)] = inst_14399);

(statearr_14441_14471[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (11))){
var inst_14370 = (state_14418[(9)]);
var inst_14384 = (state_14418[(7)]);
var inst_14384__$1 = cljs.core.seq.call(null,inst_14370);
var state_14418__$1 = (function (){var statearr_14442 = state_14418;
(statearr_14442[(7)] = inst_14384__$1);

return statearr_14442;
})();
if(inst_14384__$1){
var statearr_14443_14472 = state_14418__$1;
(statearr_14443_14472[(1)] = (14));

} else {
var statearr_14444_14473 = state_14418__$1;
(statearr_14444_14473[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (9))){
var inst_14406 = (state_14418[(2)]);
var inst_14407 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_14418__$1 = (function (){var statearr_14445 = state_14418;
(statearr_14445[(15)] = inst_14406);

return statearr_14445;
})();
if(cljs.core.truth_(inst_14407)){
var statearr_14446_14474 = state_14418__$1;
(statearr_14446_14474[(1)] = (21));

} else {
var statearr_14447_14475 = state_14418__$1;
(statearr_14447_14475[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (5))){
var inst_14362 = cljs.core.async.close_BANG_.call(null,out);
var state_14418__$1 = state_14418;
var statearr_14448_14476 = state_14418__$1;
(statearr_14448_14476[(2)] = inst_14362);

(statearr_14448_14476[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (14))){
var inst_14384 = (state_14418[(7)]);
var inst_14386 = cljs.core.chunked_seq_QMARK_.call(null,inst_14384);
var state_14418__$1 = state_14418;
if(inst_14386){
var statearr_14449_14477 = state_14418__$1;
(statearr_14449_14477[(1)] = (17));

} else {
var statearr_14450_14478 = state_14418__$1;
(statearr_14450_14478[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (16))){
var inst_14402 = (state_14418[(2)]);
var state_14418__$1 = state_14418;
var statearr_14451_14479 = state_14418__$1;
(statearr_14451_14479[(2)] = inst_14402);

(statearr_14451_14479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14419 === (10))){
var inst_14371 = (state_14418[(8)]);
var inst_14373 = (state_14418[(11)]);
var inst_14378 = cljs.core._nth.call(null,inst_14371,inst_14373);
var state_14418__$1 = state_14418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14418__$1,(13),out,inst_14378);
} else {
if((state_val_14419 === (18))){
var inst_14384 = (state_14418[(7)]);
var inst_14393 = cljs.core.first.call(null,inst_14384);
var state_14418__$1 = state_14418;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14418__$1,(20),out,inst_14393);
} else {
if((state_val_14419 === (8))){
var inst_14373 = (state_14418[(11)]);
var inst_14372 = (state_14418[(12)]);
var inst_14375 = (inst_14373 < inst_14372);
var inst_14376 = inst_14375;
var state_14418__$1 = state_14418;
if(cljs.core.truth_(inst_14376)){
var statearr_14452_14480 = state_14418__$1;
(statearr_14452_14480[(1)] = (10));

} else {
var statearr_14453_14481 = state_14418__$1;
(statearr_14453_14481[(1)] = (11));

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
});})(c__12802__auto__))
;
return ((function (switch__12711__auto__,c__12802__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__12712__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__12712__auto____0 = (function (){
var statearr_14454 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14454[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__12712__auto__);

(statearr_14454[(1)] = (1));

return statearr_14454;
});
var cljs$core$async$mapcat_STAR__$_state_machine__12712__auto____1 = (function (state_14418){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_14418);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e14455){if((e14455 instanceof Object)){
var ex__12715__auto__ = e14455;
var statearr_14456_14482 = state_14418;
(statearr_14456_14482[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14418);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14483 = state_14418;
state_14418 = G__14483;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__12712__auto__ = function(state_14418){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__12712__auto____1.call(this,state_14418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__12712__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__12712__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto__))
})();
var state__12804__auto__ = (function (){var statearr_14457 = f__12803__auto__.call(null);
(statearr_14457[(6)] = c__12802__auto__);

return statearr_14457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto__))
);

return c__12802__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__14485 = arguments.length;
switch (G__14485) {
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
var G__14488 = arguments.length;
switch (G__14488) {
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
var G__14491 = arguments.length;
switch (G__14491) {
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
var c__12802__auto___14538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___14538,out){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___14538,out){
return (function (state_14515){
var state_val_14516 = (state_14515[(1)]);
if((state_val_14516 === (7))){
var inst_14510 = (state_14515[(2)]);
var state_14515__$1 = state_14515;
var statearr_14517_14539 = state_14515__$1;
(statearr_14517_14539[(2)] = inst_14510);

(statearr_14517_14539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (1))){
var inst_14492 = null;
var state_14515__$1 = (function (){var statearr_14518 = state_14515;
(statearr_14518[(7)] = inst_14492);

return statearr_14518;
})();
var statearr_14519_14540 = state_14515__$1;
(statearr_14519_14540[(2)] = null);

(statearr_14519_14540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (4))){
var inst_14495 = (state_14515[(8)]);
var inst_14495__$1 = (state_14515[(2)]);
var inst_14496 = (inst_14495__$1 == null);
var inst_14497 = cljs.core.not.call(null,inst_14496);
var state_14515__$1 = (function (){var statearr_14520 = state_14515;
(statearr_14520[(8)] = inst_14495__$1);

return statearr_14520;
})();
if(inst_14497){
var statearr_14521_14541 = state_14515__$1;
(statearr_14521_14541[(1)] = (5));

} else {
var statearr_14522_14542 = state_14515__$1;
(statearr_14522_14542[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (6))){
var state_14515__$1 = state_14515;
var statearr_14523_14543 = state_14515__$1;
(statearr_14523_14543[(2)] = null);

(statearr_14523_14543[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (3))){
var inst_14512 = (state_14515[(2)]);
var inst_14513 = cljs.core.async.close_BANG_.call(null,out);
var state_14515__$1 = (function (){var statearr_14524 = state_14515;
(statearr_14524[(9)] = inst_14512);

return statearr_14524;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14515__$1,inst_14513);
} else {
if((state_val_14516 === (2))){
var state_14515__$1 = state_14515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14515__$1,(4),ch);
} else {
if((state_val_14516 === (11))){
var inst_14495 = (state_14515[(8)]);
var inst_14504 = (state_14515[(2)]);
var inst_14492 = inst_14495;
var state_14515__$1 = (function (){var statearr_14525 = state_14515;
(statearr_14525[(7)] = inst_14492);

(statearr_14525[(10)] = inst_14504);

return statearr_14525;
})();
var statearr_14526_14544 = state_14515__$1;
(statearr_14526_14544[(2)] = null);

(statearr_14526_14544[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (9))){
var inst_14495 = (state_14515[(8)]);
var state_14515__$1 = state_14515;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14515__$1,(11),out,inst_14495);
} else {
if((state_val_14516 === (5))){
var inst_14492 = (state_14515[(7)]);
var inst_14495 = (state_14515[(8)]);
var inst_14499 = cljs.core._EQ_.call(null,inst_14495,inst_14492);
var state_14515__$1 = state_14515;
if(inst_14499){
var statearr_14528_14545 = state_14515__$1;
(statearr_14528_14545[(1)] = (8));

} else {
var statearr_14529_14546 = state_14515__$1;
(statearr_14529_14546[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (10))){
var inst_14507 = (state_14515[(2)]);
var state_14515__$1 = state_14515;
var statearr_14530_14547 = state_14515__$1;
(statearr_14530_14547[(2)] = inst_14507);

(statearr_14530_14547[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14516 === (8))){
var inst_14492 = (state_14515[(7)]);
var tmp14527 = inst_14492;
var inst_14492__$1 = tmp14527;
var state_14515__$1 = (function (){var statearr_14531 = state_14515;
(statearr_14531[(7)] = inst_14492__$1);

return statearr_14531;
})();
var statearr_14532_14548 = state_14515__$1;
(statearr_14532_14548[(2)] = null);

(statearr_14532_14548[(1)] = (2));


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
});})(c__12802__auto___14538,out))
;
return ((function (switch__12711__auto__,c__12802__auto___14538,out){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_14533 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14533[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_14533[(1)] = (1));

return statearr_14533;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_14515){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_14515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e14534){if((e14534 instanceof Object)){
var ex__12715__auto__ = e14534;
var statearr_14535_14549 = state_14515;
(statearr_14535_14549[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14550 = state_14515;
state_14515 = G__14550;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_14515){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_14515);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___14538,out))
})();
var state__12804__auto__ = (function (){var statearr_14536 = f__12803__auto__.call(null);
(statearr_14536[(6)] = c__12802__auto___14538);

return statearr_14536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___14538,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__14552 = arguments.length;
switch (G__14552) {
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
var c__12802__auto___14618 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___14618,out){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___14618,out){
return (function (state_14590){
var state_val_14591 = (state_14590[(1)]);
if((state_val_14591 === (7))){
var inst_14586 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14592_14619 = state_14590__$1;
(statearr_14592_14619[(2)] = inst_14586);

(statearr_14592_14619[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (1))){
var inst_14553 = (new Array(n));
var inst_14554 = inst_14553;
var inst_14555 = (0);
var state_14590__$1 = (function (){var statearr_14593 = state_14590;
(statearr_14593[(7)] = inst_14554);

(statearr_14593[(8)] = inst_14555);

return statearr_14593;
})();
var statearr_14594_14620 = state_14590__$1;
(statearr_14594_14620[(2)] = null);

(statearr_14594_14620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (4))){
var inst_14558 = (state_14590[(9)]);
var inst_14558__$1 = (state_14590[(2)]);
var inst_14559 = (inst_14558__$1 == null);
var inst_14560 = cljs.core.not.call(null,inst_14559);
var state_14590__$1 = (function (){var statearr_14595 = state_14590;
(statearr_14595[(9)] = inst_14558__$1);

return statearr_14595;
})();
if(inst_14560){
var statearr_14596_14621 = state_14590__$1;
(statearr_14596_14621[(1)] = (5));

} else {
var statearr_14597_14622 = state_14590__$1;
(statearr_14597_14622[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (15))){
var inst_14580 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14598_14623 = state_14590__$1;
(statearr_14598_14623[(2)] = inst_14580);

(statearr_14598_14623[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (13))){
var state_14590__$1 = state_14590;
var statearr_14599_14624 = state_14590__$1;
(statearr_14599_14624[(2)] = null);

(statearr_14599_14624[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (6))){
var inst_14555 = (state_14590[(8)]);
var inst_14576 = (inst_14555 > (0));
var state_14590__$1 = state_14590;
if(cljs.core.truth_(inst_14576)){
var statearr_14600_14625 = state_14590__$1;
(statearr_14600_14625[(1)] = (12));

} else {
var statearr_14601_14626 = state_14590__$1;
(statearr_14601_14626[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (3))){
var inst_14588 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14590__$1,inst_14588);
} else {
if((state_val_14591 === (12))){
var inst_14554 = (state_14590[(7)]);
var inst_14578 = cljs.core.vec.call(null,inst_14554);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14590__$1,(15),out,inst_14578);
} else {
if((state_val_14591 === (2))){
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14590__$1,(4),ch);
} else {
if((state_val_14591 === (11))){
var inst_14570 = (state_14590[(2)]);
var inst_14571 = (new Array(n));
var inst_14554 = inst_14571;
var inst_14555 = (0);
var state_14590__$1 = (function (){var statearr_14602 = state_14590;
(statearr_14602[(7)] = inst_14554);

(statearr_14602[(8)] = inst_14555);

(statearr_14602[(10)] = inst_14570);

return statearr_14602;
})();
var statearr_14603_14627 = state_14590__$1;
(statearr_14603_14627[(2)] = null);

(statearr_14603_14627[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (9))){
var inst_14554 = (state_14590[(7)]);
var inst_14568 = cljs.core.vec.call(null,inst_14554);
var state_14590__$1 = state_14590;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14590__$1,(11),out,inst_14568);
} else {
if((state_val_14591 === (5))){
var inst_14558 = (state_14590[(9)]);
var inst_14563 = (state_14590[(11)]);
var inst_14554 = (state_14590[(7)]);
var inst_14555 = (state_14590[(8)]);
var inst_14562 = (inst_14554[inst_14555] = inst_14558);
var inst_14563__$1 = (inst_14555 + (1));
var inst_14564 = (inst_14563__$1 < n);
var state_14590__$1 = (function (){var statearr_14604 = state_14590;
(statearr_14604[(12)] = inst_14562);

(statearr_14604[(11)] = inst_14563__$1);

return statearr_14604;
})();
if(cljs.core.truth_(inst_14564)){
var statearr_14605_14628 = state_14590__$1;
(statearr_14605_14628[(1)] = (8));

} else {
var statearr_14606_14629 = state_14590__$1;
(statearr_14606_14629[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (14))){
var inst_14583 = (state_14590[(2)]);
var inst_14584 = cljs.core.async.close_BANG_.call(null,out);
var state_14590__$1 = (function (){var statearr_14608 = state_14590;
(statearr_14608[(13)] = inst_14583);

return statearr_14608;
})();
var statearr_14609_14630 = state_14590__$1;
(statearr_14609_14630[(2)] = inst_14584);

(statearr_14609_14630[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (10))){
var inst_14574 = (state_14590[(2)]);
var state_14590__$1 = state_14590;
var statearr_14610_14631 = state_14590__$1;
(statearr_14610_14631[(2)] = inst_14574);

(statearr_14610_14631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14591 === (8))){
var inst_14563 = (state_14590[(11)]);
var inst_14554 = (state_14590[(7)]);
var tmp14607 = inst_14554;
var inst_14554__$1 = tmp14607;
var inst_14555 = inst_14563;
var state_14590__$1 = (function (){var statearr_14611 = state_14590;
(statearr_14611[(7)] = inst_14554__$1);

(statearr_14611[(8)] = inst_14555);

return statearr_14611;
})();
var statearr_14612_14632 = state_14590__$1;
(statearr_14612_14632[(2)] = null);

(statearr_14612_14632[(1)] = (2));


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
});})(c__12802__auto___14618,out))
;
return ((function (switch__12711__auto__,c__12802__auto___14618,out){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_14613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14613[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_14613[(1)] = (1));

return statearr_14613;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_14590){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_14590);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e14614){if((e14614 instanceof Object)){
var ex__12715__auto__ = e14614;
var statearr_14615_14633 = state_14590;
(statearr_14615_14633[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14614;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14634 = state_14590;
state_14590 = G__14634;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_14590){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_14590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___14618,out))
})();
var state__12804__auto__ = (function (){var statearr_14616 = f__12803__auto__.call(null);
(statearr_14616[(6)] = c__12802__auto___14618);

return statearr_14616;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___14618,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__14636 = arguments.length;
switch (G__14636) {
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
var c__12802__auto___14706 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___14706,out){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___14706,out){
return (function (state_14678){
var state_val_14679 = (state_14678[(1)]);
if((state_val_14679 === (7))){
var inst_14674 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14680_14707 = state_14678__$1;
(statearr_14680_14707[(2)] = inst_14674);

(statearr_14680_14707[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (1))){
var inst_14637 = [];
var inst_14638 = inst_14637;
var inst_14639 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_14678__$1 = (function (){var statearr_14681 = state_14678;
(statearr_14681[(7)] = inst_14638);

(statearr_14681[(8)] = inst_14639);

return statearr_14681;
})();
var statearr_14682_14708 = state_14678__$1;
(statearr_14682_14708[(2)] = null);

(statearr_14682_14708[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (4))){
var inst_14642 = (state_14678[(9)]);
var inst_14642__$1 = (state_14678[(2)]);
var inst_14643 = (inst_14642__$1 == null);
var inst_14644 = cljs.core.not.call(null,inst_14643);
var state_14678__$1 = (function (){var statearr_14683 = state_14678;
(statearr_14683[(9)] = inst_14642__$1);

return statearr_14683;
})();
if(inst_14644){
var statearr_14684_14709 = state_14678__$1;
(statearr_14684_14709[(1)] = (5));

} else {
var statearr_14685_14710 = state_14678__$1;
(statearr_14685_14710[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (15))){
var inst_14668 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14686_14711 = state_14678__$1;
(statearr_14686_14711[(2)] = inst_14668);

(statearr_14686_14711[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (13))){
var state_14678__$1 = state_14678;
var statearr_14687_14712 = state_14678__$1;
(statearr_14687_14712[(2)] = null);

(statearr_14687_14712[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (6))){
var inst_14638 = (state_14678[(7)]);
var inst_14663 = inst_14638.length;
var inst_14664 = (inst_14663 > (0));
var state_14678__$1 = state_14678;
if(cljs.core.truth_(inst_14664)){
var statearr_14688_14713 = state_14678__$1;
(statearr_14688_14713[(1)] = (12));

} else {
var statearr_14689_14714 = state_14678__$1;
(statearr_14689_14714[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (3))){
var inst_14676 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14678__$1,inst_14676);
} else {
if((state_val_14679 === (12))){
var inst_14638 = (state_14678[(7)]);
var inst_14666 = cljs.core.vec.call(null,inst_14638);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14678__$1,(15),out,inst_14666);
} else {
if((state_val_14679 === (2))){
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14678__$1,(4),ch);
} else {
if((state_val_14679 === (11))){
var inst_14642 = (state_14678[(9)]);
var inst_14646 = (state_14678[(10)]);
var inst_14656 = (state_14678[(2)]);
var inst_14657 = [];
var inst_14658 = inst_14657.push(inst_14642);
var inst_14638 = inst_14657;
var inst_14639 = inst_14646;
var state_14678__$1 = (function (){var statearr_14690 = state_14678;
(statearr_14690[(11)] = inst_14656);

(statearr_14690[(7)] = inst_14638);

(statearr_14690[(12)] = inst_14658);

(statearr_14690[(8)] = inst_14639);

return statearr_14690;
})();
var statearr_14691_14715 = state_14678__$1;
(statearr_14691_14715[(2)] = null);

(statearr_14691_14715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (9))){
var inst_14638 = (state_14678[(7)]);
var inst_14654 = cljs.core.vec.call(null,inst_14638);
var state_14678__$1 = state_14678;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14678__$1,(11),out,inst_14654);
} else {
if((state_val_14679 === (5))){
var inst_14642 = (state_14678[(9)]);
var inst_14646 = (state_14678[(10)]);
var inst_14639 = (state_14678[(8)]);
var inst_14646__$1 = f.call(null,inst_14642);
var inst_14647 = cljs.core._EQ_.call(null,inst_14646__$1,inst_14639);
var inst_14648 = cljs.core.keyword_identical_QMARK_.call(null,inst_14639,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_14649 = ((inst_14647) || (inst_14648));
var state_14678__$1 = (function (){var statearr_14692 = state_14678;
(statearr_14692[(10)] = inst_14646__$1);

return statearr_14692;
})();
if(cljs.core.truth_(inst_14649)){
var statearr_14693_14716 = state_14678__$1;
(statearr_14693_14716[(1)] = (8));

} else {
var statearr_14694_14717 = state_14678__$1;
(statearr_14694_14717[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (14))){
var inst_14671 = (state_14678[(2)]);
var inst_14672 = cljs.core.async.close_BANG_.call(null,out);
var state_14678__$1 = (function (){var statearr_14696 = state_14678;
(statearr_14696[(13)] = inst_14671);

return statearr_14696;
})();
var statearr_14697_14718 = state_14678__$1;
(statearr_14697_14718[(2)] = inst_14672);

(statearr_14697_14718[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (10))){
var inst_14661 = (state_14678[(2)]);
var state_14678__$1 = state_14678;
var statearr_14698_14719 = state_14678__$1;
(statearr_14698_14719[(2)] = inst_14661);

(statearr_14698_14719[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14679 === (8))){
var inst_14642 = (state_14678[(9)]);
var inst_14646 = (state_14678[(10)]);
var inst_14638 = (state_14678[(7)]);
var inst_14651 = inst_14638.push(inst_14642);
var tmp14695 = inst_14638;
var inst_14638__$1 = tmp14695;
var inst_14639 = inst_14646;
var state_14678__$1 = (function (){var statearr_14699 = state_14678;
(statearr_14699[(7)] = inst_14638__$1);

(statearr_14699[(8)] = inst_14639);

(statearr_14699[(14)] = inst_14651);

return statearr_14699;
})();
var statearr_14700_14720 = state_14678__$1;
(statearr_14700_14720[(2)] = null);

(statearr_14700_14720[(1)] = (2));


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
});})(c__12802__auto___14706,out))
;
return ((function (switch__12711__auto__,c__12802__auto___14706,out){
return (function() {
var cljs$core$async$state_machine__12712__auto__ = null;
var cljs$core$async$state_machine__12712__auto____0 = (function (){
var statearr_14701 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14701[(0)] = cljs$core$async$state_machine__12712__auto__);

(statearr_14701[(1)] = (1));

return statearr_14701;
});
var cljs$core$async$state_machine__12712__auto____1 = (function (state_14678){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_14678);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e14702){if((e14702 instanceof Object)){
var ex__12715__auto__ = e14702;
var statearr_14703_14721 = state_14678;
(statearr_14703_14721[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14678);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14702;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14722 = state_14678;
state_14678 = G__14722;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
cljs$core$async$state_machine__12712__auto__ = function(state_14678){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__12712__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__12712__auto____1.call(this,state_14678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__12712__auto____0;
cljs$core$async$state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__12712__auto____1;
return cljs$core$async$state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___14706,out))
})();
var state__12804__auto__ = (function (){var statearr_14704 = f__12803__auto__.call(null);
(statearr_14704[(6)] = c__12802__auto___14706);

return statearr_14704;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___14706,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map
