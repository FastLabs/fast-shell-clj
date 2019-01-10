// Compiled by ClojureScript 1.10.439 {}
goog.provide('session.events');
goog.require('cljs.core');
goog.require('session.core');
goog.require('re_frame.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"dispose-session","dispose-session",1575434918),(function (db,p__9483){
var vec__9484 = p__9483;
var _ = cljs.core.nth.call(null,vec__9484,(0),null);
var session_id = cljs.core.nth.call(null,vec__9484,(1),null);
return session.core.dispose_session.call(null,db,session_id);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"activate-session","activate-session",341544618),(function (db,p__9487){
var vec__9488 = p__9487;
var _ = cljs.core.nth.call(null,vec__9488,(0),null);
var session_id = cljs.core.nth.call(null,vec__9488,(1),null);
return session.core.activate_session.call(null,db,session_id);
}));

//# sourceMappingURL=events.js.map
