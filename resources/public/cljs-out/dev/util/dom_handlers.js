// Compiled by ClojureScript 1.10.439 {}
goog.provide('util.dom_handlers');
goog.require('cljs.core');
util.dom_handlers.on_text_change = (function util$dom_handlers$on_text_change(on_change_handler){
return (function (ev){
ev.preventDefault();

return on_change_handler.call(null,ev.target.value);
});
});
util.dom_handlers.on_click = (function util$dom_handlers$on_click(on_click_handler){
return (function (ev){
ev.preventDefault();

return on_click_handler.call(null);
});
});

//# sourceMappingURL=dom_handlers.js.map
