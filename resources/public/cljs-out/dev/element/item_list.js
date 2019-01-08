// Compiled by ClojureScript 1.10.339 {}
goog.provide('element.item_list');
goog.require('cljs.core');
goog.require('element.text');
element.item_list.item_list = (function element$item_list$item_list(item,p__16368){
var map__16369 = p__16368;
var map__16369__$1 = ((((!((map__16369 == null)))?(((((map__16369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16369):map__16369);
var on_click = cljs.core.get.call(null,map__16369__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4324__auto__ = ((function (map__16369,map__16369__$1,on_click){
return (function element$item_list$item_list_$_iter__16371(s__16372){
return (new cljs.core.LazySeq(null,((function (map__16369,map__16369__$1,on_click){
return (function (){
var s__16372__$1 = s__16372;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__16372__$1);
if(temp__5720__auto__){
var s__16372__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16372__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__16372__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__16374 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__16373 = (0);
while(true){
if((i__16373 < size__4323__auto__)){
var map__16375 = cljs.core._nth.call(null,c__4322__auto__,i__16373);
var map__16375__$1 = ((((!((map__16375 == null)))?(((((map__16375.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16375.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16375):map__16375);
var app__$1 = map__16375__$1;
var id = cljs.core.get.call(null,map__16375__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__16375__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append.call(null,b__16374,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.panel-block","a.panel-block",1110080403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__16373,map__16375,map__16375__$1,app__$1,id,name,c__4322__auto__,size__4323__auto__,b__16374,s__16372__$2,temp__5720__auto__,map__16369,map__16369__$1,on_click){
return (function (){
return on_click.call(null,app__$1);
});})(i__16373,map__16375,map__16375__$1,app__$1,id,name,c__4322__auto__,size__4323__auto__,b__16374,s__16372__$2,temp__5720__auto__,map__16369,map__16369__$1,on_click))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon","span.panel-icon",1747807276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-book","i.fas.fa-book",-688567552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__16379 = (i__16373 + (1));
i__16373 = G__16379;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16374),element$item_list$item_list_$_iter__16371.call(null,cljs.core.chunk_rest.call(null,s__16372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16374),null);
}
} else {
var map__16377 = cljs.core.first.call(null,s__16372__$2);
var map__16377__$1 = ((((!((map__16377 == null)))?(((((map__16377.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16377.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16377):map__16377);
var app__$1 = map__16377__$1;
var id = cljs.core.get.call(null,map__16377__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__16377__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.panel-block","a.panel-block",1110080403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__16377,map__16377__$1,app__$1,id,name,s__16372__$2,temp__5720__auto__,map__16369,map__16369__$1,on_click){
return (function (){
return on_click.call(null,app__$1);
});})(map__16377,map__16377__$1,app__$1,id,name,s__16372__$2,temp__5720__auto__,map__16369,map__16369__$1,on_click))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon","span.panel-icon",1747807276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-book","i.fas.fa-book",-688567552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),element$item_list$item_list_$_iter__16371.call(null,cljs.core.rest.call(null,s__16372__$2)));
}
} else {
return null;
}
break;
}
});})(map__16369,map__16369__$1,on_click))
,null,null));
});})(map__16369,map__16369__$1,on_click))
;
return iter__4324__auto__.call(null,item);
})()], null);
});
element.item_list.search_list = (function element$item_list$search_list(apps,filter_handler,click_handler){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.panel","nav.panel",-933286493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.panel-heading","p.panel-heading",1850435418),"Available applications"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [element.text.search_box,new cljs.core.Keyword(null,"on-change","on-change",-732046149),filter_handler], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.panel-tabs","p.panel-tabs",-154022470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.is-active","a.is-active",637401121),"all"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"private"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [element.item_list.item_list,apps,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),["Total Items: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,apps))].join('')], null)], null);
});

//# sourceMappingURL=item_list.js.map
