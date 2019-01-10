// Compiled by ClojureScript 1.10.439 {}
goog.provide('fast_shell.event_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('fast_shell.events');
goog.require('app.core');
goog.require('fast_shell.core');
goog.require('re_frame.core');
fast_shell.event_test.app_meta_events = (function fast_shell$event_test$app_meta_events(){
return cljs.test.test_var.call(null,fast_shell.event_test.app_meta_events.cljs$lang$var);
});
fast_shell.event_test.app_meta_events.cljs$lang$test = (function (){
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"register new application meta");

try{re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.events","initialize-db","fast-shell.events/initialize-db",-1547392056)], null));

re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.events","new-app-meta","fast-shell.events/new-app-meta",959977262),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.core","name","app.core/name",-1429873787),"simple app"], null)], null));

try{var values__8213__auto__ = (new cljs.core.List(null,(1),(new cljs.core.List(null,(1),null,(1),null)),(2),null));
var result__8214__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8213__auto__);
if(cljs.core.truth_(result__8214__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8213__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8213__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8214__auto__;
}catch (e14414){var t__8258__auto__ = e14414;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),(1)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8258__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

fast_shell.event_test.app_meta_events.cljs$lang$var = new cljs.core.Var(function(){return fast_shell.event_test.app_meta_events;},new cljs.core.Symbol("fast-shell.event-test","app-meta-events","fast-shell.event-test/app-meta-events",939471478,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fast-shell.event-test","fast-shell.event-test",-165116600,null),new cljs.core.Symbol(null,"app-meta-events","app-meta-events",-304989814,null),"test/fast_shell/event_test.cljs",25,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(fast_shell.event_test.app_meta_events)?fast_shell.event_test.app_meta_events.cljs$lang$test:null)]));
fast_shell.event_test.app_session_events = (function fast_shell$event_test$app_session_events(){
return cljs.test.test_var.call(null,fast_shell.event_test.app_session_events.cljs$lang$var);
});
fast_shell.event_test.app_session_events.cljs$lang$test = (function (){
return cljs.core.test.call(null,"creating new session");
});

fast_shell.event_test.app_session_events.cljs$lang$var = new cljs.core.Var(function(){return fast_shell.event_test.app_session_events;},new cljs.core.Symbol("fast-shell.event-test","app-session-events","fast-shell.event-test/app-session-events",1433280029,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"fast-shell.event-test","fast-shell.event-test",-165116600,null),new cljs.core.Symbol(null,"app-session-events","app-session-events",1655924673,null),"test/fast_shell/event_test.cljs",28,1,14,14,cljs.core.List.EMPTY,null,(cljs.core.truth_(fast_shell.event_test.app_session_events)?fast_shell.event_test.app_session_events.cljs$lang$test:null)]));

//# sourceMappingURL=event_test.js.map
