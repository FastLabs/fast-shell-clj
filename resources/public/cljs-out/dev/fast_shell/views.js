// Compiled by ClojureScript 1.10.439 {}
goog.provide('fast_shell.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('app.core');
goog.require('fast_shell.core');
goog.require('session.core');
goog.require('session.views');
goog.require('app.views');
goog.require('app_repo.views');
fast_shell.views.app_repo_render_fn = (function fast_shell$views$app_repo_render_fn(_,___$1){
var apps = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"app-list","app-list",108028374)], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"Application Repository"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app_repo.views.app_list,apps], null)], null)], null)], null);
});
fast_shell.views.user_admin_render_fn = (function fast_shell$views$user_admin_render_fn(_,___$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"User Administration app"], null);
});
fast_shell.views.iframe_render_fn = (function fast_shell$views$iframe_render_fn(session__$1,p__14398){
var map__14399 = p__14398;
var map__14399__$1 = (((((!((map__14399 == null))))?(((((map__14399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14399):map__14399);
var app_meta = map__14399__$1;
var location = cljs.core.get.call(null,map__14399__$1,new cljs.core.Keyword("app.core","location","app.core/location",-1583731608));
var id = cljs.core.get.call(null,map__14399__$1,new cljs.core.Keyword("app.core","id","app.core/id",1721650920));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"weight","weight",-1262796205),"100%"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"iframe","iframe",884422026),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),["ifr-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''),new cljs.core.Keyword(null,"src","src",-1651076051),location], null)], null)], null);
});
fast_shell.views.container_view = (function fast_shell$views$container_view(){
var app_sessions = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","app-sessions","session.core/app-sessions",1218368478)], null)));
var app_title = cljs.core.deref.call(null,re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.core","title","fast-shell.core/title",-282614499)], null)));
cljs.core.prn.call(null,"Render Application Sessions for ",app_title);

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),app_title], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h3","h3",2067611163),"Application Instances"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [session.views.session_selector,app_sessions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.views.app_viewport,app_sessions], null)], null)], null)], null);
});

//# sourceMappingURL=views.js.map
