// Compiled by ClojureScript 1.10.439 {}
goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.call(null,(0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_.call(null,re_frame.trace.id,(0));
});

/** @define {boolean} */
goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.call(null,(0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/Day8/re-frame-10x#installation.");
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.call(null,re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.call(null,re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9631){
var map__9632 = p__9631;
var map__9632__$1 = (((((!((map__9632 == null))))?(((((map__9632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9632):map__9632);
var operation = cljs.core.get.call(null,map__9632__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__9632__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__9632__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__9632__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4047__auto__ = child_of;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now.call(null)], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce.call(null,(function re_frame$trace$tracing_cb_debounced(){
var seq__9634_9646 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__9635_9647 = null;
var count__9636_9648 = (0);
var i__9637_9649 = (0);
while(true){
if((i__9637_9649 < count__9636_9648)){
var vec__9638_9650 = cljs.core._nth.call(null,chunk__9635_9647,i__9637_9649);
var k_9651 = cljs.core.nth.call(null,vec__9638_9650,(0),null);
var cb_9652 = cljs.core.nth.call(null,vec__9638_9650,(1),null);
try{cb_9652.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9641){var e_9653 = e9641;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9651,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9653);
}

var G__9654 = seq__9634_9646;
var G__9655 = chunk__9635_9647;
var G__9656 = count__9636_9648;
var G__9657 = (i__9637_9649 + (1));
seq__9634_9646 = G__9654;
chunk__9635_9647 = G__9655;
count__9636_9648 = G__9656;
i__9637_9649 = G__9657;
continue;
} else {
var temp__5720__auto___9658 = cljs.core.seq.call(null,seq__9634_9646);
if(temp__5720__auto___9658){
var seq__9634_9659__$1 = temp__5720__auto___9658;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9634_9659__$1)){
var c__4461__auto___9660 = cljs.core.chunk_first.call(null,seq__9634_9659__$1);
var G__9661 = cljs.core.chunk_rest.call(null,seq__9634_9659__$1);
var G__9662 = c__4461__auto___9660;
var G__9663 = cljs.core.count.call(null,c__4461__auto___9660);
var G__9664 = (0);
seq__9634_9646 = G__9661;
chunk__9635_9647 = G__9662;
count__9636_9648 = G__9663;
i__9637_9649 = G__9664;
continue;
} else {
var vec__9642_9665 = cljs.core.first.call(null,seq__9634_9659__$1);
var k_9666 = cljs.core.nth.call(null,vec__9642_9665,(0),null);
var cb_9667 = cljs.core.nth.call(null,vec__9642_9665,(1),null);
try{cb_9667.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9645){var e_9668 = e9645;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9666,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9668);
}

var G__9669 = cljs.core.next.call(null,seq__9634_9659__$1);
var G__9670 = null;
var G__9671 = (0);
var G__9672 = (0);
seq__9634_9646 = G__9669;
chunk__9635_9647 = G__9670;
count__9636_9648 = G__9671;
i__9637_9649 = G__9672;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_.call(null,re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref.call(null,re_frame.trace.next_delivery) - (25)) < now)){
re_frame.trace.schedule_debounce.call(null);

return cljs.core.reset_BANG_.call(null,re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=trace.js.map
