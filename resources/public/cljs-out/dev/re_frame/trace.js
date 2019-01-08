// Compiled by ClojureScript 1.10.339 {}
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__9145){
var map__9146 = p__9145;
var map__9146__$1 = ((((!((map__9146 == null)))?(((((map__9146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9146):map__9146);
var operation = cljs.core.get.call(null,map__9146__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.call(null,map__9146__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.call(null,map__9146__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.call(null,map__9146__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id.call(null),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__3949__auto__ = child_of;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
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
var seq__9148_9160 = cljs.core.seq.call(null,cljs.core.deref.call(null,re_frame.trace.trace_cbs));
var chunk__9149_9161 = null;
var count__9150_9162 = (0);
var i__9151_9163 = (0);
while(true){
if((i__9151_9163 < count__9150_9162)){
var vec__9152_9164 = cljs.core._nth.call(null,chunk__9149_9161,i__9151_9163);
var k_9165 = cljs.core.nth.call(null,vec__9152_9164,(0),null);
var cb_9166 = cljs.core.nth.call(null,vec__9152_9164,(1),null);
try{cb_9166.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9155){var e_9167 = e9155;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9165,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9167);
}

var G__9168 = seq__9148_9160;
var G__9169 = chunk__9149_9161;
var G__9170 = count__9150_9162;
var G__9171 = (i__9151_9163 + (1));
seq__9148_9160 = G__9168;
chunk__9149_9161 = G__9169;
count__9150_9162 = G__9170;
i__9151_9163 = G__9171;
continue;
} else {
var temp__5720__auto___9172 = cljs.core.seq.call(null,seq__9148_9160);
if(temp__5720__auto___9172){
var seq__9148_9173__$1 = temp__5720__auto___9172;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__9148_9173__$1)){
var c__4351__auto___9174 = cljs.core.chunk_first.call(null,seq__9148_9173__$1);
var G__9175 = cljs.core.chunk_rest.call(null,seq__9148_9173__$1);
var G__9176 = c__4351__auto___9174;
var G__9177 = cljs.core.count.call(null,c__4351__auto___9174);
var G__9178 = (0);
seq__9148_9160 = G__9175;
chunk__9149_9161 = G__9176;
count__9150_9162 = G__9177;
i__9151_9163 = G__9178;
continue;
} else {
var vec__9156_9179 = cljs.core.first.call(null,seq__9148_9173__$1);
var k_9180 = cljs.core.nth.call(null,vec__9156_9179,(0),null);
var cb_9181 = cljs.core.nth.call(null,vec__9156_9179,(1),null);
try{cb_9181.call(null,cljs.core.deref.call(null,re_frame.trace.traces));
}catch (e9159){var e_9182 = e9159;
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k_9180,"while storing",cljs.core.deref.call(null,re_frame.trace.traces),e_9182);
}

var G__9183 = cljs.core.next.call(null,seq__9148_9173__$1);
var G__9184 = null;
var G__9185 = (0);
var G__9186 = (0);
seq__9148_9160 = G__9183;
chunk__9149_9161 = G__9184;
count__9150_9162 = G__9185;
i__9151_9163 = G__9186;
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
