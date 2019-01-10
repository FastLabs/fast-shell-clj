// Compiled by ClojureScript 1.10.439 {}
goog.provide('session.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.core');
goog.require('session.core');
session.subs.session_app_meta = (function session$subs$session_app_meta(db,session__$1){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717),session.core.app_id.call(null,session__$1)], null));
});
session.subs.session_active = (function session$subs$session_active(p__14348,session__$1){
var map__14349 = p__14348;
var map__14349__$1 = (((((!((map__14349 == null))))?(((((map__14349.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14349.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14349):map__14349);
var active = cljs.core.get.call(null,map__14349__$1,new cljs.core.Keyword("session.core","active","session.core/active",614656445));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("session.core","id","session.core/id",-99006915).cljs$core$IFn$_invoke$arity$1(session__$1),active);
});
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("session.core","app-sessions","session.core/app-sessions",1218368478),(function (p__14351,_){
var map__14352 = p__14351;
var map__14352__$1 = (((((!((map__14352 == null))))?(((((map__14352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14352):map__14352);
var db = map__14352__$1;
var instances = cljs.core.get.call(null,map__14352__$1,new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492));
return cljs.core.map.call(null,((function (map__14352,map__14352__$1,db,instances){
return (function (s_inst){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [s_inst,session.subs.session_app_meta.call(null,db,s_inst),session.subs.session_active.call(null,db,s_inst)], null);
});})(map__14352,map__14352__$1,db,instances))
,cljs.core.vals.call(null,instances));
}));

//# sourceMappingURL=subs.js.map
