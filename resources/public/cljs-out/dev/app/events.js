// Compiled by ClojureScript 1.10.439 {}
goog.provide('app.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.core');
goog.require('session.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"start-app","start-app",794141462),(function (db,p__9495){
var vec__9496 = p__9495;
var _ = cljs.core.nth.call(null,vec__9496,(0),null);
var app_id = cljs.core.nth.call(null,vec__9496,(1),null);
var activate_QMARK_ = cljs.core.nth.call(null,vec__9496,(2),null);
var app_meta = app.core.find_by_id.call(null,db,app_id);
var db_SINGLEQUOTE_ = session.core.add_new_session.call(null,db,app_meta);
if(cljs.core.truth_(activate_QMARK_)){
return session.core.activate_session.call(null,db_SINGLEQUOTE_,new cljs.core.Keyword("session.core","last-created","session.core/last-created",1299463620).cljs$core$IFn$_invoke$arity$1(db_SINGLEQUOTE_));
} else {
return db_SINGLEQUOTE_;
}
}));

//# sourceMappingURL=events.js.map
