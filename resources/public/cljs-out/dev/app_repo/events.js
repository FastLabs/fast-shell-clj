// Compiled by ClojureScript 1.10.439 {}
goog.provide('app_repo.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.core');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword(null,"load-apps","load-apps",155469488),(function (db,p__8744){
var vec__8745 = p__8744;
var _ = cljs.core.nth.call(null,vec__8745,(0),null);
var apps = cljs.core.nth.call(null,vec__8745,(1),null);
return cljs.core.reduce.call(null,app.core.add_new_meta,db,apps);
}));

//# sourceMappingURL=events.js.map
