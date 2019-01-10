// Compiled by ClojureScript 1.10.439 {}
goog.provide('fast_shell.config');
goog.require('cljs.core');
fast_shell.config.debug_QMARK_ = goog.DEBUG;
fast_shell.config.is_dev_mode_QMARK_ = (function fast_shell$config$is_dev_mode_QMARK_(){
if(fast_shell.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"Dev mode");
} else {
return null;
}
});

//# sourceMappingURL=config.js.map
