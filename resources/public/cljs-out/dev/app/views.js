// Compiled by ClojureScript 1.10.439 {}
goog.provide('app.views');
goog.require('cljs.core');
goog.require('app.core');
goog.require('session.core');
app.views.title = (function app$views$title(session__$1,app_meta){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("session.core","id","session.core/id",-99006915).cljs$core$IFn$_invoke$arity$1(session__$1)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("session.core","title","session.core/title",1364310502).cljs$core$IFn$_invoke$arity$1(session__$1))].join('')], null);
});
app.views.app_btn = (function app$views$app_btn(session__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"[close]"], null);
});
app.views.action_bar = (function app$views$action_bar(session__$1){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"inline","inline",1399884222)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.app_btn,session__$1], null)], null);
});
app.views.container_header = (function app$views$container_header(session__$1,app_meta){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.title,session__$1,app_meta], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.action_bar,session__$1], null)], null);
});
app.views.app_container = (function app$views$app_container(session__$1,app_meta,visible_QMARK_){
var display = (cljs.core.truth_(visible_QMARK_)?new cljs.core.Keyword(null,"block","block",664686210):new cljs.core.Keyword(null,"none","none",1333468478));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),display], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.container_header,session__$1,app_meta], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","render-fn","app.core/render-fn",-761103790).cljs$core$IFn$_invoke$arity$1(app_meta),session__$1,app_meta], null)], null)], null);
});
app.views.app_viewport = (function app$views$app_viewport(sessions){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4434__auto__ = (function app$views$app_viewport_$_iter__14608(s__14609){
return (new cljs.core.LazySeq(null,(function (){
var s__14609__$1 = s__14609;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__14609__$1);
if(temp__5720__auto__){
var s__14609__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14609__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__14609__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__14611 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__14610 = (0);
while(true){
if((i__14610 < size__4433__auto__)){
var vec__14612 = cljs.core._nth.call(null,c__4432__auto__,i__14610);
var session__$1 = cljs.core.nth.call(null,vec__14612,(0),null);
var app_meta = cljs.core.nth.call(null,vec__14612,(1),null);
var selected_QMARK_ = cljs.core.nth.call(null,vec__14612,(2),null);
cljs.core.chunk_append.call(null,b__14611,(function (){var session_id = new cljs.core.Keyword("session.core","id","session.core/id",-99006915).cljs$core$IFn$_invoke$arity$1(session__$1);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.app_container,session__$1,app_meta,selected_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["app-view-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session_id)].join('')], null));
})());

var G__14618 = (i__14610 + (1));
i__14610 = G__14618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14611),app$views$app_viewport_$_iter__14608.call(null,cljs.core.chunk_rest.call(null,s__14609__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14611),null);
}
} else {
var vec__14615 = cljs.core.first.call(null,s__14609__$2);
var session__$1 = cljs.core.nth.call(null,vec__14615,(0),null);
var app_meta = cljs.core.nth.call(null,vec__14615,(1),null);
var selected_QMARK_ = cljs.core.nth.call(null,vec__14615,(2),null);
return cljs.core.cons.call(null,(function (){var session_id = new cljs.core.Keyword("session.core","id","session.core/id",-99006915).cljs$core$IFn$_invoke$arity$1(session__$1);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.app_container,session__$1,app_meta,selected_QMARK_], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["app-view-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(session_id)].join('')], null));
})(),app$views$app_viewport_$_iter__14608.call(null,cljs.core.rest.call(null,s__14609__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,sessions);
})()], null)], null);
});

//# sourceMappingURL=views.js.map
