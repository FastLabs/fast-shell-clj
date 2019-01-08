// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_9477 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__9478 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__9479 = null;
var count__9480 = (0);
var i__9481 = (0);
while(true){
if((i__9481 < count__9480)){
var vec__9482 = cljs.core._nth.call(null,chunk__9479,i__9481);
var effect_key = cljs.core.nth.call(null,vec__9482,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9482,(1),null);
var temp__5718__auto___9498 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___9498)){
var effect_fn_9499 = temp__5718__auto___9498;
effect_fn_9499.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9500 = seq__9478;
var G__9501 = chunk__9479;
var G__9502 = count__9480;
var G__9503 = (i__9481 + (1));
seq__9478 = G__9500;
chunk__9479 = G__9501;
count__9480 = G__9502;
i__9481 = G__9503;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9478);
if(temp__5720__auto__){
var seq__9478__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9478__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9478__$1);
var G__9504 = cljs.core.chunk_rest.call(null,seq__9478__$1);
var G__9505 = c__4351__auto__;
var G__9506 = cljs.core.count.call(null,c__4351__auto__);
var G__9507 = (0);
seq__9478 = G__9504;
chunk__9479 = G__9505;
count__9480 = G__9506;
i__9481 = G__9507;
continue;
} else {
var vec__9485 = cljs.core.first.call(null,seq__9478__$1);
var effect_key = cljs.core.nth.call(null,vec__9485,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9485,(1),null);
var temp__5718__auto___9508 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___9508)){
var effect_fn_9509 = temp__5718__auto___9508;
effect_fn_9509.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9510 = cljs.core.next.call(null,seq__9478__$1);
var G__9511 = null;
var G__9512 = (0);
var G__9513 = (0);
seq__9478 = G__9510;
chunk__9479 = G__9511;
count__9480 = G__9512;
i__9481 = G__9513;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__9076__auto___9514 = re_frame.interop.now.call(null);
var duration__9077__auto___9515 = (end__9076__auto___9514 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9077__auto___9515,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__9076__auto___9514);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_9477;
}} else {
var seq__9488 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__9489 = null;
var count__9490 = (0);
var i__9491 = (0);
while(true){
if((i__9491 < count__9490)){
var vec__9492 = cljs.core._nth.call(null,chunk__9489,i__9491);
var effect_key = cljs.core.nth.call(null,vec__9492,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9492,(1),null);
var temp__5718__auto___9516 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___9516)){
var effect_fn_9517 = temp__5718__auto___9516;
effect_fn_9517.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9518 = seq__9488;
var G__9519 = chunk__9489;
var G__9520 = count__9490;
var G__9521 = (i__9491 + (1));
seq__9488 = G__9518;
chunk__9489 = G__9519;
count__9490 = G__9520;
i__9491 = G__9521;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9488);
if(temp__5720__auto__){
var seq__9488__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9488__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9488__$1);
var G__9522 = cljs.core.chunk_rest.call(null,seq__9488__$1);
var G__9523 = c__4351__auto__;
var G__9524 = cljs.core.count.call(null,c__4351__auto__);
var G__9525 = (0);
seq__9488 = G__9522;
chunk__9489 = G__9523;
count__9490 = G__9524;
i__9491 = G__9525;
continue;
} else {
var vec__9495 = cljs.core.first.call(null,seq__9488__$1);
var effect_key = cljs.core.nth.call(null,vec__9495,(0),null);
var effect_value = cljs.core.nth.call(null,vec__9495,(1),null);
var temp__5718__auto___9526 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___9526)){
var effect_fn_9527 = temp__5718__auto___9526;
effect_fn_9527.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__9528 = cljs.core.next.call(null,seq__9488__$1);
var G__9529 = null;
var G__9530 = (0);
var G__9531 = (0);
seq__9488 = G__9528;
chunk__9489 = G__9529;
count__9490 = G__9530;
i__9491 = G__9531;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__9532 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__9533 = null;
var count__9534 = (0);
var i__9535 = (0);
while(true){
if((i__9535 < count__9534)){
var map__9536 = cljs.core._nth.call(null,chunk__9533,i__9535);
var map__9536__$1 = ((((!((map__9536 == null)))?(((((map__9536.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9536.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9536):map__9536);
var effect = map__9536__$1;
var ms = cljs.core.get.call(null,map__9536__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9536__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9532,chunk__9533,count__9534,i__9535,map__9536,map__9536__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9532,chunk__9533,count__9534,i__9535,map__9536,map__9536__$1,effect,ms,dispatch))
,ms);
}


var G__9540 = seq__9532;
var G__9541 = chunk__9533;
var G__9542 = count__9534;
var G__9543 = (i__9535 + (1));
seq__9532 = G__9540;
chunk__9533 = G__9541;
count__9534 = G__9542;
i__9535 = G__9543;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9532);
if(temp__5720__auto__){
var seq__9532__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9532__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9532__$1);
var G__9544 = cljs.core.chunk_rest.call(null,seq__9532__$1);
var G__9545 = c__4351__auto__;
var G__9546 = cljs.core.count.call(null,c__4351__auto__);
var G__9547 = (0);
seq__9532 = G__9544;
chunk__9533 = G__9545;
count__9534 = G__9546;
i__9535 = G__9547;
continue;
} else {
var map__9538 = cljs.core.first.call(null,seq__9532__$1);
var map__9538__$1 = ((((!((map__9538 == null)))?(((((map__9538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9538):map__9538);
var effect = map__9538__$1;
var ms = cljs.core.get.call(null,map__9538__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__9538__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__9532,chunk__9533,count__9534,i__9535,map__9538,map__9538__$1,effect,ms,dispatch,seq__9532__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__9532,chunk__9533,count__9534,i__9535,map__9538,map__9538__$1,effect,ms,dispatch,seq__9532__$1,temp__5720__auto__))
,ms);
}


var G__9548 = cljs.core.next.call(null,seq__9532__$1);
var G__9549 = null;
var G__9550 = (0);
var G__9551 = (0);
seq__9532 = G__9548;
chunk__9533 = G__9549;
count__9534 = G__9550;
i__9535 = G__9551;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__9552 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__9553 = null;
var count__9554 = (0);
var i__9555 = (0);
while(true){
if((i__9555 < count__9554)){
var event = cljs.core._nth.call(null,chunk__9553,i__9555);
re_frame.router.dispatch.call(null,event);


var G__9556 = seq__9552;
var G__9557 = chunk__9553;
var G__9558 = count__9554;
var G__9559 = (i__9555 + (1));
seq__9552 = G__9556;
chunk__9553 = G__9557;
count__9554 = G__9558;
i__9555 = G__9559;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9552);
if(temp__5720__auto__){
var seq__9552__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9552__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9552__$1);
var G__9560 = cljs.core.chunk_rest.call(null,seq__9552__$1);
var G__9561 = c__4351__auto__;
var G__9562 = cljs.core.count.call(null,c__4351__auto__);
var G__9563 = (0);
seq__9552 = G__9560;
chunk__9553 = G__9561;
count__9554 = G__9562;
i__9555 = G__9563;
continue;
} else {
var event = cljs.core.first.call(null,seq__9552__$1);
re_frame.router.dispatch.call(null,event);


var G__9564 = cljs.core.next.call(null,seq__9552__$1);
var G__9565 = null;
var G__9566 = (0);
var G__9567 = (0);
seq__9552 = G__9564;
chunk__9553 = G__9565;
count__9554 = G__9566;
i__9555 = G__9567;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__9568 = cljs.core.seq.call(null,value);
var chunk__9569 = null;
var count__9570 = (0);
var i__9571 = (0);
while(true){
if((i__9571 < count__9570)){
var event = cljs.core._nth.call(null,chunk__9569,i__9571);
clear_event.call(null,event);


var G__9572 = seq__9568;
var G__9573 = chunk__9569;
var G__9574 = count__9570;
var G__9575 = (i__9571 + (1));
seq__9568 = G__9572;
chunk__9569 = G__9573;
count__9570 = G__9574;
i__9571 = G__9575;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__9568);
if(temp__5720__auto__){
var seq__9568__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9568__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__9568__$1);
var G__9576 = cljs.core.chunk_rest.call(null,seq__9568__$1);
var G__9577 = c__4351__auto__;
var G__9578 = cljs.core.count.call(null,c__4351__auto__);
var G__9579 = (0);
seq__9568 = G__9576;
chunk__9569 = G__9577;
count__9570 = G__9578;
i__9571 = G__9579;
continue;
} else {
var event = cljs.core.first.call(null,seq__9568__$1);
clear_event.call(null,event);


var G__9580 = cljs.core.next.call(null,seq__9568__$1);
var G__9581 = null;
var G__9582 = (0);
var G__9583 = (0);
seq__9568 = G__9580;
chunk__9569 = G__9581;
count__9570 = G__9582;
i__9571 = G__9583;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
