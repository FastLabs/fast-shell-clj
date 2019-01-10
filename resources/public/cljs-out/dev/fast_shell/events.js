// Compiled by ClojureScript 1.10.439 {}
goog.provide('fast_shell.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('fast_shell.core');
goog.require('app.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("fast-shell.core","initialize-db","fast-shell.core/initialize-db",-577640946),(function (_,___$1){
cljs.core.prn.call(null,"------------------------");

return fast_shell.core.default_db;
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("fast-shell.events","new-app-meta","fast-shell.events/new-app-meta",959977262),(function (p__14405,p__14406){
var map__14407 = p__14405;
var map__14407__$1 = (((((!((map__14407 == null))))?(((((map__14407.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14407.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14407):map__14407);
var db = map__14407__$1;
var store = cljs.core.get.call(null,map__14407__$1,new cljs.core.Keyword("app.core","store","app.core/store",-1660915894));
var vec__14408 = p__14406;
var _ = cljs.core.nth.call(null,vec__14408,(0),null);
var app_meta = cljs.core.nth.call(null,vec__14408,(1),null);
return app.core.add_new_meta.call(null,db,app_meta);
}));

//# sourceMappingURL=events.js.map
