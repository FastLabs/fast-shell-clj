// Compiled by ClojureScript 1.10.339 {}
goog.provide('fast_shell.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('fast_shell.events');
goog.require('fast_shell.views');
goog.require('fast_shell.config');
fast_shell.core.dev_setup = (function fast_shell$core$dev_setup(){
if(fast_shell.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
fast_shell.core.mount_root = (function fast_shell$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fast_shell.views.main_panel], null),document.getElementById("app"));
});
fast_shell.core.init = (function fast_shell$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.events","initialize-db","fast-shell.events/initialize-db",-1547392056)], null));

fast_shell.core.dev_setup.call(null);

return fast_shell.core.mount_root.call(null);
});
goog.exportSymbol('fast_shell.core.init', fast_shell.core.init);

//# sourceMappingURL=core.js.map
