// Compiled by ClojureScript 1.10.439 {}
goog.provide('session.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('session.core');
goog.require('util.dom_handlers');
session.views.session_selector = (function session$views$session_selector(sessions){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4434__auto__ = (function session$views$session_selector_$_iter__9449(s__9450){
return (new cljs.core.LazySeq(null,(function (){
var s__9450__$1 = s__9450;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9450__$1);
if(temp__5720__auto__){
var s__9450__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9450__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__9450__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__9452 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__9451 = (0);
while(true){
if((i__9451 < size__4433__auto__)){
var vec__9453 = cljs.core._nth.call(null,c__4432__auto__,i__9451);
var map__9456 = cljs.core.nth.call(null,vec__9453,(0),null);
var map__9456__$1 = (((((!((map__9456 == null))))?(((((map__9456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9456):map__9456);
var id = cljs.core.get.call(null,map__9456__$1,new cljs.core.Keyword("session.core","id","session.core/id",-99006915));
var title = cljs.core.get.call(null,map__9456__$1,new cljs.core.Keyword("session.core","title","session.core/title",1364310502));
var _ = cljs.core.nth.call(null,vec__9453,(1),null);
var selected_QMARK_ = cljs.core.nth.call(null,vec__9453,(2),null);
cljs.core.chunk_append.call(null,b__9452,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?new cljs.core.Keyword(null,"bold","bold",-116809535):new cljs.core.Keyword(null,"normal","normal",-1519123858))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),util.dom_handlers.on_click.call(null,((function (i__9451,vec__9453,map__9456,map__9456__$1,id,title,_,selected_QMARK_,c__4432__auto__,size__4433__auto__,b__9452,s__9450__$2,temp__5720__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-session","activate-session",341544618),id], null));
});})(i__9451,vec__9453,map__9456,map__9456__$1,id,title,_,selected_QMARK_,c__4432__auto__,size__4433__auto__,b__9452,s__9450__$2,temp__5720__auto__))
)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),util.dom_handlers.on_click.call(null,((function (i__9451,vec__9453,map__9456,map__9456__$1,id,title,_,selected_QMARK_,c__4432__auto__,size__4433__auto__,b__9452,s__9450__$2,temp__5720__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispose-session","dispose-session",1575434918),id], null));
});})(i__9451,vec__9453,map__9456,map__9456__$1,id,title,_,selected_QMARK_,c__4432__auto__,size__4433__auto__,b__9452,s__9450__$2,temp__5720__auto__))
)], null),"[close]"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__9463 = (i__9451 + (1));
i__9451 = G__9463;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9452),session$views$session_selector_$_iter__9449.call(null,cljs.core.chunk_rest.call(null,s__9450__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9452),null);
}
} else {
var vec__9458 = cljs.core.first.call(null,s__9450__$2);
var map__9461 = cljs.core.nth.call(null,vec__9458,(0),null);
var map__9461__$1 = (((((!((map__9461 == null))))?(((((map__9461.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9461.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9461):map__9461);
var id = cljs.core.get.call(null,map__9461__$1,new cljs.core.Keyword("session.core","id","session.core/id",-99006915));
var title = cljs.core.get.call(null,map__9461__$1,new cljs.core.Keyword("session.core","title","session.core/title",1364310502));
var _ = cljs.core.nth.call(null,vec__9458,(1),null);
var selected_QMARK_ = cljs.core.nth.call(null,vec__9458,(2),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(cljs.core.truth_(selected_QMARK_)?new cljs.core.Keyword(null,"bold","bold",-116809535):new cljs.core.Keyword(null,"normal","normal",-1519123858))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),util.dom_handlers.on_click.call(null,((function (vec__9458,map__9461,map__9461__$1,id,title,_,selected_QMARK_,s__9450__$2,temp__5720__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"activate-session","activate-session",341544618),id], null));
});})(vec__9458,map__9461,map__9461__$1,id,title,_,selected_QMARK_,s__9450__$2,temp__5720__auto__))
)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),(10)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),util.dom_handlers.on_click.call(null,((function (vec__9458,map__9461,map__9461__$1,id,title,_,selected_QMARK_,s__9450__$2,temp__5720__auto__){
return (function (){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dispose-session","dispose-session",1575434918),id], null));
});})(vec__9458,map__9461,map__9461__$1,id,title,_,selected_QMARK_,s__9450__$2,temp__5720__auto__))
)], null),"[close]"], null)], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),session$views$session_selector_$_iter__9449.call(null,cljs.core.rest.call(null,s__9450__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,sessions);
})()], null);
});

//# sourceMappingURL=views.js.map
