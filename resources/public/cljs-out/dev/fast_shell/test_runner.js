// Compiled by ClojureScript 1.10.339 {}
goog.provide('fast_shell.test_runner');
goog.require('cljs.core');
goog.require('figwheel.main.testing');
goog.require('app.core_test');
goog.require('session.core_test');
cljs.core.prn.call(null,"running all tests");
fast_shell.test_runner._main = (function fast_shell$test_runner$_main(var_args){
var args__4534__auto__ = [];
var len__4531__auto___10660 = arguments.length;
var i__4532__auto___10661 = (0);
while(true){
if((i__4532__auto___10661 < len__4531__auto___10660)){
args__4534__auto__.push((arguments[i__4532__auto___10661]));

var G__10662 = (i__4532__auto___10661 + (1));
i__4532__auto___10661 = G__10662;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return fast_shell.test_runner._main.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

fast_shell.test_runner._main.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.main.testing.system_exit_on_fail.call(null);

var reporter__5314__auto___10663 = new cljs.core.Keyword(null,"reporter","reporter",-805360621).cljs$core$IFn$_invoke$arity$1(cljs.test.empty_env.call(null));
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs-test-display.core","default","cljs-test-display.core/default",-853427213),null,new cljs.core.Keyword("cljs.test","default","cljs.test/default",-1581405322),null], null), null).call(null,reporter__5314__auto___10663))){
} else {
cljs.core._add_method.call(null,cljs.test.report,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reporter__5314__auto___10663,new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)], null),((function (reporter__5314__auto___10663){
return (function (m__5315__auto__){
return cljs.core.reset_BANG_.call(null,figwheel.main.testing.test_result_data,m__5315__auto__);
});})(reporter__5314__auto___10663))
);
}

cljs.test.run_block.call(null,(function (){var env10658 = cljs.test.empty_env.call(null);
var summary10659 = cljs.core.volatile_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"summary","summary",380847952),new cljs.core.Keyword(null,"fail","fail",1706214930),(0),new cljs.core.Keyword(null,"error","error",-978969032),(0),new cljs.core.Keyword(null,"pass","pass",1574159993),(0),new cljs.core.Keyword(null,"test","test",577538877),(0)], null));
return cljs.core.concat.call(null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
cljs.test.set_env_BANG_.call(null,env10658);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"session.core-test","session.core-test",-948680349,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10205__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663){
return (function (){
if((env__10205__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return session.core_test.new_session_management;},new cljs.core.Symbol("session.core-test","new-session-management","session.core-test/new-session-management",-1391928861,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"session.core-test","session.core-test",-948680349,null),new cljs.core.Symbol(null,"new-session-management","new-session-management",1981254971,null),"/Users/oleg/dev/hub/fast-shell-clj/test/session/core_test.cljs",(32),(1),(8),(8),cljs.core.List.EMPTY,null,(cljs.core.truth_(session.core_test.new_session_management)?session.core_test.new_session_management.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663){
return (function (){
if((env__10205__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663))
], null));
})());
});})(env10658,summary10659,reporter__5314__auto___10663))
,((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"session.core-test","session.core-test",-948680349,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env10658,summary10659,reporter__5314__auto___10663))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary10659,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10659),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env10658,summary10659,reporter__5314__auto___10663))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
cljs.test.set_env_BANG_.call(null,env10658);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fast-shell.event-test","fast-shell.event-test",-165116600,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10205__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663){
return (function (){
if((env__10205__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return fast_shell.event_test.app_meta_events;},new cljs.core.Symbol("fast-shell.event-test","app-meta-events","fast-shell.event-test/app-meta-events",939471478,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fast-shell.event-test","fast-shell.event-test",-165116600,null),new cljs.core.Symbol(null,"app-meta-events","app-meta-events",-304989814,null),"test/fast_shell/event_test.cljs",25,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(fast_shell.event_test.app_meta_events)?fast_shell.event_test.app_meta_events.cljs$lang$test:null)])),new cljs.core.Var(function(){return fast_shell.event_test.app_session_events;},new cljs.core.Symbol("fast-shell.event-test","app-session-events","fast-shell.event-test/app-session-events",1433280029,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fast-shell.event-test","fast-shell.event-test",-165116600,null),new cljs.core.Symbol(null,"app-session-events","app-session-events",1655924673,null),"test/fast_shell/event_test.cljs",28,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(fast_shell.event_test.app_session_events)?fast_shell.event_test.app_session_events.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663){
return (function (){
if((env__10205__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663))
], null));
})());
});})(env10658,summary10659,reporter__5314__auto___10663))
,((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"fast-shell.event-test","fast-shell.event-test",-165116600,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env10658,summary10659,reporter__5314__auto___10663))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary10659,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10659),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env10658,summary10659,reporter__5314__auto___10663))
], null)),cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
cljs.test.set_env_BANG_.call(null,env10658);

cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core-test","app.core-test",1041560817,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"begin-test-ns","begin-test-ns",-1701237033)], null));

return cljs.test.block.call(null,(function (){var env__10205__auto__ = cljs.test.get_current_env.call(null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663){
return (function (){
if((env__10205__auto__ == null)){
cljs.test.set_env_BANG_.call(null,cljs.test.empty_env.call(null));
} else {
}


return null;
});})(env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663))
], null),cljs.test.test_vars_block.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return app.core_test.app_meta_test;},new cljs.core.Symbol("app.core-test","app-meta-test","app.core-test/app-meta-test",-1769064702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core-test","app.core-test",1041560817,null),new cljs.core.Symbol(null,"app-meta-test","app-meta-test",808861073,null),"test/app/core_test.cljs",23,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.core_test.app_meta_test)?app.core_test.app_meta_test.cljs$lang$test:null)]))], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663){
return (function (){
if((env__10205__auto__ == null)){
return cljs.test.clear_env_BANG_.call(null);
} else {
return null;
}
});})(env__10205__auto__,env10658,summary10659,reporter__5314__auto___10663))
], null));
})());
});})(env10658,summary10659,reporter__5314__auto___10663))
,((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"app.core-test","app.core-test",1041560817,null),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-test-ns","end-test-ns",1620675645)], null));
});})(env10658,summary10659,reporter__5314__auto___10663))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
return cljs.core._vreset_BANG_.call(null,summary10659,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core._PLUS_).call(null,cljs.core._deref.call(null,summary10659),new cljs.core.Keyword(null,"report-counters","report-counters",-1702609242).cljs$core$IFn$_invoke$arity$1(cljs.test.get_and_clear_env_BANG_.call(null))));
});})(env10658,summary10659,reporter__5314__auto___10663))
], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (env10658,summary10659,reporter__5314__auto___10663){
return (function (){
cljs.test.set_env_BANG_.call(null,env10658);

cljs.test.do_report.call(null,cljs.core.deref.call(null,summary10659));

cljs.test.report.call(null,cljs.core.assoc.call(null,cljs.core.deref.call(null,summary10659),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"end-run-tests","end-run-tests",267300563)));

return cljs.test.clear_env_BANG_.call(null);
});})(env10658,summary10659,reporter__5314__auto___10663))
], null));
})());

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("figwheel.main.async-result","wait","figwheel.main.async-result/wait",-1374826133),(5000)], null);
});

fast_shell.test_runner._main.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
fast_shell.test_runner._main.cljs$lang$applyTo = (function (seq10657){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq10657));
});


//# sourceMappingURL=test_runner.js.map
