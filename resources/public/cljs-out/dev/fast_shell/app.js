// Compiled by ClojureScript 1.10.439 {}
goog.provide('fast_shell.app');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.core');
goog.require('app.events');
goog.require('app.subs');
goog.require('app_repo.events');
goog.require('session.events');
goog.require('session.subs');
goog.require('goog.dom');
goog.require('fast_shell.core');
goog.require('fast_shell.views');
goog.require('fast_shell.subs');
goog.require('fast_shell.events');
goog.require('fast_shell.config');
goog.require('reagent.core');
fast_shell.config.is_dev_mode_QMARK_.call(null);
fast_shell.app.start_app_repo = (function fast_shell$app$start_app_repo(){
var apps = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),"app-repo",new cljs.core.Keyword("app.core","name","app.core/name",-1429873787),"Application Repository",new cljs.core.Keyword("app.core","render-fn","app.core/render-fn",-761103790),fast_shell.views.app_repo_render_fn], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),"user-admin",new cljs.core.Keyword("app.core","name","app.core/name",-1429873787),"User Admin",new cljs.core.Keyword("app.core","render-fn","app.core/render-fn",-761103790),fast_shell.views.user_admin_render_fn], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),"remote-app",new cljs.core.Keyword("app.core","name","app.core/name",-1429873787),"Simple Remote App",new cljs.core.Keyword("app.core","location","app.core/location",-1583731608),"http://localhost:9500/apps/simpleapp.html",new cljs.core.Keyword("app.core","render-fn","app.core/render-fn",-761103790),fast_shell.views.iframe_render_fn], null)], null);
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.core","initialize-db","fast-shell.core/initialize-db",-577640946)], null));

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"load-apps","load-apps",155469488),apps], null));

return app.core.start_app.call(null,"app-repo",false);
});
fast_shell.app.get_app_element = (function fast_shell$app$get_app_element(){
return goog.dom.getElement("app");
});
fast_shell.app.mount = (function fast_shell$app$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fast_shell.views.container_view], null),el);
});
fast_shell.app.mount_app_element = (function fast_shell$app$mount_app_element(){
var temp__5720__auto__ = fast_shell.app.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
fast_shell.app.start_app_repo.call(null);

return fast_shell.app.mount.call(null,el);
} else {
return null;
}
});
fast_shell.app.mount_app_element.call(null);
fast_shell.app.on_reload = (function fast_shell$app$on_reload(){
cljs.core.prn.call(null,"Reload 2");

return fast_shell.app.mount_app_element.call(null);
});

//# sourceMappingURL=app.js.map
