// Compiled by ClojureScript 1.10.339 {}
goog.provide('fast_shell.app');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('fast_shell.events');
goog.require('fast_shell.views');
goog.require('fast_shell.config');
goog.require('reagent.core');
fast_shell.config.is_dev_mode_QMARK_.call(null);
fast_shell.app.get_app_element = (function fast_shell$app$get_app_element(){
return goog.dom.getElement("app");
});
fast_shell.app.mount = (function fast_shell$app$mount(el){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fast_shell.views.main_panel], null),el);
});
fast_shell.app.mount_app_element = (function fast_shell$app$mount_app_element(){
var temp__5720__auto__ = fast_shell.app.get_app_element.call(null);
if(cljs.core.truth_(temp__5720__auto__)){
var el = temp__5720__auto__;
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
