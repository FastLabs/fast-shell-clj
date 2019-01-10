// Compiled by ClojureScript 1.10.439 {}
goog.provide('app_repo.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.core');
goog.require('util.dom_handlers');
app_repo.views.app_list = (function app_repo$views$app_list(apps){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4434__auto__ = (function app_repo$views$app_list_$_iter__14623(s__14624){
return (new cljs.core.LazySeq(null,(function (){
var s__14624__$1 = s__14624;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__14624__$1);
if(temp__5720__auto__){
var s__14624__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14624__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__14624__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__14626 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__14625 = (0);
while(true){
if((i__14625 < size__4433__auto__)){
var map__14627 = cljs.core._nth.call(null,c__4432__auto__,i__14625);
var map__14627__$1 = (((((!((map__14627 == null))))?(((((map__14627.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14627.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14627):map__14627);
var id = cljs.core.get.call(null,map__14627__$1,new cljs.core.Keyword("app.core","id","app.core/id",1721650920));
var name = cljs.core.get.call(null,map__14627__$1,new cljs.core.Keyword("app.core","name","app.core/name",-1429873787));
cljs.core.chunk_append.call(null,b__14626,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),util.dom_handlers.on_click.call(null,((function (i__14625,map__14627,map__14627__$1,id,name,c__4432__auto__,size__4433__auto__,b__14626,s__14624__$2,temp__5720__auto__){
return (function (){
return app.core.start_app.call(null,id);
});})(i__14625,map__14627,map__14627__$1,id,name,c__4432__auto__,size__4433__auto__,b__14626,s__14624__$2,temp__5720__auto__))
)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)));

var G__14631 = (i__14625 + (1));
i__14625 = G__14631;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14626),app_repo$views$app_list_$_iter__14623.call(null,cljs.core.chunk_rest.call(null,s__14624__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14626),null);
}
} else {
var map__14629 = cljs.core.first.call(null,s__14624__$2);
var map__14629__$1 = (((((!((map__14629 == null))))?(((((map__14629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14629):map__14629);
var id = cljs.core.get.call(null,map__14629__$1,new cljs.core.Keyword("app.core","id","app.core/id",1721650920));
var name = cljs.core.get.call(null,map__14629__$1,new cljs.core.Keyword("app.core","name","app.core/name",-1429873787));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"pointer","pointer",85071187)], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),util.dom_handlers.on_click.call(null,((function (map__14629,map__14629__$1,id,name,s__14624__$2,temp__5720__auto__){
return (function (){
return app.core.start_app.call(null,id);
});})(map__14629,map__14629__$1,id,name,s__14624__$2,temp__5720__auto__))
)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),id], null)),app_repo$views$app_list_$_iter__14623.call(null,cljs.core.rest.call(null,s__14624__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,apps);
})()], null);
});

//# sourceMappingURL=views.js.map
