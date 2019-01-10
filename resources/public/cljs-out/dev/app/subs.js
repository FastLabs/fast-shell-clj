// Compiled by ClojureScript 1.10.439 {}
goog.provide('app.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"app-name","app-name",-268811251),(function (db,_){
return new cljs.core.Keyword("app.core","name","app.core/name",-1429873787).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword(null,"app-list","app-list",108028374),(function (p__9478,_){
var map__9479 = p__9478;
var map__9479__$1 = (((((!((map__9479 == null))))?(((((map__9479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9479):map__9479);
var db = map__9479__$1;
var auto_start = cljs.core.get.call(null,map__9479__$1,new cljs.core.Keyword("app.core","auto-start","app.core/auto-start",929297034));
var apps = cljs.core.vals.call(null,cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717)], null)));
return cljs.core.filter.call(null,((function (apps,map__9479,map__9479__$1,db,auto_start){
return (function (p1__9477_SHARP_){
return (!(cljs.core.contains_QMARK_.call(null,auto_start,cljs.core.get.call(null,p1__9477_SHARP_,new cljs.core.Keyword("app.core","id","app.core/id",1721650920)))));
});})(apps,map__9479,map__9479__$1,db,auto_start))
,apps);
}));

//# sourceMappingURL=subs.js.map
