// Compiled by ClojureScript 1.10.339 {}
goog.provide('fast_shell.subs');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('fast_shell.db');
goog.require('session.core');
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("fast-shell.subs","name","fast-shell.subs/name",-1126951569),(function (db){
return new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500).cljs$core$IFn$_invoke$arity$1(db);
}));
re_frame.core.reg_sub.call(null,new cljs.core.Keyword("fast-shell.subs","sessions","fast-shell.subs/sessions",-2011108202),(function (p__16386){
var map__16387 = p__16386;
var map__16387__$1 = ((((!((map__16387 == null)))?(((((map__16387.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16387.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16387):map__16387);
var db = map__16387__$1;
var instances = cljs.core.get.call(null,map__16387__$1,new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492));
return instances;
}));

//# sourceMappingURL=subs.js.map
