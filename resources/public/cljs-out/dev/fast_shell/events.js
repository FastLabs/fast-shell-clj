// Compiled by ClojureScript 1.10.339 {}
goog.provide('fast_shell.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('fast_shell.db');
goog.require('app.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("fast-shell.events","initialize-db","fast-shell.events/initialize-db",-1547392056),(function (_,___$1){
return fast_shell.db.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("fast-shell.events","new-app-meta","fast-shell.events/new-app-meta",959977262),(function (p__9979,p__9980){
var map__9981 = p__9979;
var map__9981__$1 = ((((!((map__9981 == null)))?(((((map__9981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__9981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__9981):map__9981);
var db = map__9981__$1;
var store = cljs.core.get.call(null,map__9981__$1,new cljs.core.Keyword("app.core","store","app.core/store",-1660915894));
var vec__9982 = p__9980;
var _ = cljs.core.nth.call(null,vec__9982,(0),null);
var app_meta = cljs.core.nth.call(null,vec__9982,(1),null);
return app.core.add_new_meta.call(null,db,app_meta);
}));

//# sourceMappingURL=events.js.map
