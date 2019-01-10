// Compiled by ClojureScript 1.10.439 {}
goog.provide('element.item_list');
goog.require('cljs.core');
goog.require('element.text');
element.item_list.item_list = (function element$item_list$item_list(item,p__9293){
var map__9294 = p__9293;
var map__9294__$1 = (((((!((map__9294 == null))))?(((((map__9294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9294):map__9294);
var on_click = cljs.core.get.call(null,map__9294__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(function (){var iter__4434__auto__ = ((function (map__9294,map__9294__$1,on_click){
return (function element$item_list$item_list_$_iter__9296(s__9297){
return (new cljs.core.LazySeq(null,((function (map__9294,map__9294__$1,on_click){
return (function (){
var s__9297__$1 = s__9297;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__9297__$1);
if(temp__5720__auto__){
var s__9297__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9297__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__9297__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__9299 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__9298 = (0);
while(true){
if((i__9298 < size__4433__auto__)){
var map__9300 = cljs.core._nth.call(null,c__4432__auto__,i__9298);
var map__9300__$1 = (((((!((map__9300 == null))))?(((((map__9300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9300):map__9300);
var app__$1 = map__9300__$1;
var id = cljs.core.get.call(null,map__9300__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__9300__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.chunk_append.call(null,b__9299,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.panel-block","a.panel-block",1110080403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__9298,map__9300,map__9300__$1,app__$1,id,name,c__4432__auto__,size__4433__auto__,b__9299,s__9297__$2,temp__5720__auto__,map__9294,map__9294__$1,on_click){
return (function (){
return on_click.call(null,app__$1);
});})(i__9298,map__9300,map__9300__$1,app__$1,id,name,c__4432__auto__,size__4433__auto__,b__9299,s__9297__$2,temp__5720__auto__,map__9294,map__9294__$1,on_click))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon","span.panel-icon",1747807276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-book","i.fas.fa-book",-688567552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)));

var G__9304 = (i__9298 + (1));
i__9298 = G__9304;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9299),element$item_list$item_list_$_iter__9296.call(null,cljs.core.chunk_rest.call(null,s__9297__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9299),null);
}
} else {
var map__9302 = cljs.core.first.call(null,s__9297__$2);
var map__9302__$1 = (((((!((map__9302 == null))))?(((((map__9302.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9302.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9302):map__9302);
var app__$1 = map__9302__$1;
var id = cljs.core.get.call(null,map__9302__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.call(null,map__9302__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.panel-block","a.panel-block",1110080403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__9302,map__9302__$1,app__$1,id,name,s__9297__$2,temp__5720__auto__,map__9294,map__9294__$1,on_click){
return (function (){
return on_click.call(null,app__$1);
});})(map__9302,map__9302__$1,app__$1,id,name,s__9297__$2,temp__5720__auto__,map__9294,map__9294__$1,on_click))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.panel-icon","span.panel-icon",1747807276),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-book","i.fas.fa-book",-688567552),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)], null),name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),["item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')], null)),element$item_list$item_list_$_iter__9296.call(null,cljs.core.rest.call(null,s__9297__$2)));
}
} else {
return null;
}
break;
}
});})(map__9294,map__9294__$1,on_click))
,null,null));
});})(map__9294,map__9294__$1,on_click))
;
return iter__4434__auto__.call(null,item);
})()], null);
});
element.item_list.search_list = (function element$item_list$search_list(apps,filter_handler,click_handler){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.panel","nav.panel",-933286493),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.panel-heading","p.panel-heading",1850435418),"Available applications"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [element.text.search_box,new cljs.core.Keyword(null,"on-change","on-change",-732046149),filter_handler], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.panel-tabs","p.panel-tabs",-154022470),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.is-active","a.is-active",637401121),"all"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),"private"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [element.item_list.item_list,apps,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_handler], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-block","div.panel-block",-846239824),["Total Items: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.count.call(null,apps))].join('')], null)], null);
});

//# sourceMappingURL=item_list.js.map
