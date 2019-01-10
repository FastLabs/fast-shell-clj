// Compiled by ClojureScript 1.10.439 {}
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
var _STAR_current_trace_STAR__orig_val__14050 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__14051 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__14051;

try{try{var seq__14052 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14053 = null;
var count__14054 = (0);
var i__14055 = (0);
while(true){
if((i__14055 < count__14054)){
var vec__14056 = cljs.core._nth.call(null,chunk__14053,i__14055);
var effect_key = cljs.core.nth.call(null,vec__14056,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14056,(1),null);
var temp__5718__auto___14072 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14072)){
var effect_fn_14073 = temp__5718__auto___14072;
effect_fn_14073.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14074 = seq__14052;
var G__14075 = chunk__14053;
var G__14076 = count__14054;
var G__14077 = (i__14055 + (1));
seq__14052 = G__14074;
chunk__14053 = G__14075;
count__14054 = G__14076;
i__14055 = G__14077;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14052);
if(temp__5720__auto__){
var seq__14052__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14052__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__14052__$1);
var G__14078 = cljs.core.chunk_rest.call(null,seq__14052__$1);
var G__14079 = c__4461__auto__;
var G__14080 = cljs.core.count.call(null,c__4461__auto__);
var G__14081 = (0);
seq__14052 = G__14078;
chunk__14053 = G__14079;
count__14054 = G__14080;
i__14055 = G__14081;
continue;
} else {
var vec__14059 = cljs.core.first.call(null,seq__14052__$1);
var effect_key = cljs.core.nth.call(null,vec__14059,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14059,(1),null);
var temp__5718__auto___14082 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14082)){
var effect_fn_14083 = temp__5718__auto___14082;
effect_fn_14083.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14084 = cljs.core.next.call(null,seq__14052__$1);
var G__14085 = null;
var G__14086 = (0);
var G__14087 = (0);
seq__14052 = G__14084;
chunk__14053 = G__14085;
count__14054 = G__14086;
i__14055 = G__14087;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__9562__auto___14088 = re_frame.interop.now.call(null);
var duration__9563__auto___14089 = (end__9562__auto___14088 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__9563__auto___14089,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__9562__auto___14088);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__14050;
}} else {
var seq__14062 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__14063 = null;
var count__14064 = (0);
var i__14065 = (0);
while(true){
if((i__14065 < count__14064)){
var vec__14066 = cljs.core._nth.call(null,chunk__14063,i__14065);
var effect_key = cljs.core.nth.call(null,vec__14066,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14066,(1),null);
var temp__5718__auto___14090 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14090)){
var effect_fn_14091 = temp__5718__auto___14090;
effect_fn_14091.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14092 = seq__14062;
var G__14093 = chunk__14063;
var G__14094 = count__14064;
var G__14095 = (i__14065 + (1));
seq__14062 = G__14092;
chunk__14063 = G__14093;
count__14064 = G__14094;
i__14065 = G__14095;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14062);
if(temp__5720__auto__){
var seq__14062__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14062__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__14062__$1);
var G__14096 = cljs.core.chunk_rest.call(null,seq__14062__$1);
var G__14097 = c__4461__auto__;
var G__14098 = cljs.core.count.call(null,c__4461__auto__);
var G__14099 = (0);
seq__14062 = G__14096;
chunk__14063 = G__14097;
count__14064 = G__14098;
i__14065 = G__14099;
continue;
} else {
var vec__14069 = cljs.core.first.call(null,seq__14062__$1);
var effect_key = cljs.core.nth.call(null,vec__14069,(0),null);
var effect_value = cljs.core.nth.call(null,vec__14069,(1),null);
var temp__5718__auto___14100 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5718__auto___14100)){
var effect_fn_14101 = temp__5718__auto___14100;
effect_fn_14101.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__14102 = cljs.core.next.call(null,seq__14062__$1);
var G__14103 = null;
var G__14104 = (0);
var G__14105 = (0);
seq__14062 = G__14102;
chunk__14063 = G__14103;
count__14064 = G__14104;
i__14065 = G__14105;
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
var seq__14106 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14107 = null;
var count__14108 = (0);
var i__14109 = (0);
while(true){
if((i__14109 < count__14108)){
var map__14110 = cljs.core._nth.call(null,chunk__14107,i__14109);
var map__14110__$1 = (((((!((map__14110 == null))))?(((((map__14110.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14110.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14110):map__14110);
var effect = map__14110__$1;
var ms = cljs.core.get.call(null,map__14110__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14110__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14106,chunk__14107,count__14108,i__14109,map__14110,map__14110__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14106,chunk__14107,count__14108,i__14109,map__14110,map__14110__$1,effect,ms,dispatch))
,ms);
}


var G__14114 = seq__14106;
var G__14115 = chunk__14107;
var G__14116 = count__14108;
var G__14117 = (i__14109 + (1));
seq__14106 = G__14114;
chunk__14107 = G__14115;
count__14108 = G__14116;
i__14109 = G__14117;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14106);
if(temp__5720__auto__){
var seq__14106__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14106__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__14106__$1);
var G__14118 = cljs.core.chunk_rest.call(null,seq__14106__$1);
var G__14119 = c__4461__auto__;
var G__14120 = cljs.core.count.call(null,c__4461__auto__);
var G__14121 = (0);
seq__14106 = G__14118;
chunk__14107 = G__14119;
count__14108 = G__14120;
i__14109 = G__14121;
continue;
} else {
var map__14112 = cljs.core.first.call(null,seq__14106__$1);
var map__14112__$1 = (((((!((map__14112 == null))))?(((((map__14112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14112):map__14112);
var effect = map__14112__$1;
var ms = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__14112__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__14106,chunk__14107,count__14108,i__14109,map__14112,map__14112__$1,effect,ms,dispatch,seq__14106__$1,temp__5720__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__14106,chunk__14107,count__14108,i__14109,map__14112,map__14112__$1,effect,ms,dispatch,seq__14106__$1,temp__5720__auto__))
,ms);
}


var G__14122 = cljs.core.next.call(null,seq__14106__$1);
var G__14123 = null;
var G__14124 = (0);
var G__14125 = (0);
seq__14106 = G__14122;
chunk__14107 = G__14123;
count__14108 = G__14124;
i__14109 = G__14125;
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
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__14126 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__14127 = null;
var count__14128 = (0);
var i__14129 = (0);
while(true){
if((i__14129 < count__14128)){
var event = cljs.core._nth.call(null,chunk__14127,i__14129);
re_frame.router.dispatch.call(null,event);


var G__14130 = seq__14126;
var G__14131 = chunk__14127;
var G__14132 = count__14128;
var G__14133 = (i__14129 + (1));
seq__14126 = G__14130;
chunk__14127 = G__14131;
count__14128 = G__14132;
i__14129 = G__14133;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14126);
if(temp__5720__auto__){
var seq__14126__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14126__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__14126__$1);
var G__14134 = cljs.core.chunk_rest.call(null,seq__14126__$1);
var G__14135 = c__4461__auto__;
var G__14136 = cljs.core.count.call(null,c__4461__auto__);
var G__14137 = (0);
seq__14126 = G__14134;
chunk__14127 = G__14135;
count__14128 = G__14136;
i__14129 = G__14137;
continue;
} else {
var event = cljs.core.first.call(null,seq__14126__$1);
re_frame.router.dispatch.call(null,event);


var G__14138 = cljs.core.next.call(null,seq__14126__$1);
var G__14139 = null;
var G__14140 = (0);
var G__14141 = (0);
seq__14126 = G__14138;
chunk__14127 = G__14139;
count__14128 = G__14140;
i__14129 = G__14141;
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
var seq__14142 = cljs.core.seq.call(null,value);
var chunk__14143 = null;
var count__14144 = (0);
var i__14145 = (0);
while(true){
if((i__14145 < count__14144)){
var event = cljs.core._nth.call(null,chunk__14143,i__14145);
clear_event.call(null,event);


var G__14146 = seq__14142;
var G__14147 = chunk__14143;
var G__14148 = count__14144;
var G__14149 = (i__14145 + (1));
seq__14142 = G__14146;
chunk__14143 = G__14147;
count__14144 = G__14148;
i__14145 = G__14149;
continue;
} else {
var temp__5720__auto__ = cljs.core.seq.call(null,seq__14142);
if(temp__5720__auto__){
var seq__14142__$1 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14142__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__14142__$1);
var G__14150 = cljs.core.chunk_rest.call(null,seq__14142__$1);
var G__14151 = c__4461__auto__;
var G__14152 = cljs.core.count.call(null,c__4461__auto__);
var G__14153 = (0);
seq__14142 = G__14150;
chunk__14143 = G__14151;
count__14144 = G__14152;
i__14145 = G__14153;
continue;
} else {
var event = cljs.core.first.call(null,seq__14142__$1);
clear_event.call(null,event);


var G__14154 = cljs.core.next.call(null,seq__14142__$1);
var G__14155 = null;
var G__14156 = (0);
var G__14157 = (0);
seq__14142 = G__14154;
chunk__14143 = G__14155;
count__14144 = G__14156;
i__14145 = G__14157;
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
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map
