// Compiled by ClojureScript 1.10.339 {}
goog.provide('openfin.core');
goog.require('cljs.core');
openfin.core.system = fin.desktop.System;
openfin.core.application = fin.desktop.Application;
openfin.core.version = (function openfin$core$version(){
return openfin.core.system.getVersion((function (p1__16413_SHARP_){
return cljs.core.prn.call(null,p1__16413_SHARP_);
}));
});
openfin.core.current_app = (function openfin$core$current_app(){
return openfin.core.application.getCurrent();
});
openfin.core.dev_tools = (function openfin$core$dev_tools(){
var app__$1 = openfin.core.current_app.call(null);
cljs.core.prn.call(null,openfin.core.current_app);

return openfin.core.system.showDeveloperTools(app__$1.uuid,app__$1.uuid);
});

//# sourceMappingURL=core.js.map
