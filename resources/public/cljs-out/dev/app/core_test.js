// Compiled by ClojureScript 1.10.439 {}
goog.provide('app.core_test');
goog.require('cljs.core');
goog.require('app.core');
goog.require('fast_shell.core');
goog.require('cljs.test');
goog.require('cljs.spec.alpha');
app.core_test.app_meta_test = (function app$core_test$app_meta_test(){
return cljs.test.test_var.call(null,app.core_test.app_meta_test.cljs$lang$var);
});
app.core_test.app_meta_test.cljs$lang$test = (function (){
var app_meta = app.core.new_app_meta.call(null,"app-1","simple app");
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"mandatory application fields");

try{try{var values__8213__auto___14281 = (new cljs.core.List(null,new cljs.core.Keyword("app.core","meta","app.core/meta",71406464),(new cljs.core.List(null,app_meta,null,(1),null)),(2),null));
var result__8214__auto___14282 = cljs.core.apply.call(null,cljs.spec.alpha.valid_QMARK_,values__8213__auto___14281);
if(cljs.core.truth_(result__8214__auto___14282)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("s","valid?","s/valid?",1428119265,null),new cljs.core.Keyword("app.core","meta","app.core/meta",71406464),new cljs.core.Symbol(null,"app-meta","app-meta",-1624825989,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.spec.alpha.valid_QMARK_,values__8213__auto___14281),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("s","valid?","s/valid?",1428119265,null),new cljs.core.Keyword("app.core","meta","app.core/meta",71406464),new cljs.core.Symbol(null,"app-meta","app-meta",-1624825989,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol("s","valid?","s/valid?",1428119265,null),values__8213__auto___14281),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14278){var t__8258__auto___14283 = e14278;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol("s","valid?","s/valid?",1428119265,null),new cljs.core.Keyword("app.core","meta","app.core/meta",71406464),new cljs.core.Symbol(null,"app-meta","app-meta",-1624825989,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8258__auto___14283,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"save new app-meta in repository");

try{var app_db_14284 = fast_shell.core.default_db;
var app_db_SINGLEQUOTE__14285 = app.core.add_new_meta.call(null,app_db_14284,app_meta);
var store_content_14286 = cljs.core.get_in.call(null,app_db_SINGLEQUOTE__14285,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717)], null));
try{var values__8213__auto___14287 = (new cljs.core.List(null,(1),(new cljs.core.List(null,cljs.core.count.call(null,store_content_14286),null,(1),null)),(2),null));
var result__8214__auto___14288 = cljs.core.apply.call(null,cljs.core._EQ_,values__8213__auto___14287);
if(cljs.core.truth_(result__8214__auto___14288)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"store-content","store-content",-1114032808,null))),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8213__auto___14287),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"store-content","store-content",-1114032808,null))),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8213__auto___14287),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e14279){var t__8258__auto___14289 = e14279;
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),(1),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"store-content","store-content",-1114032808,null))),new cljs.core.Keyword(null,"actual","actual",107306363),t__8258__auto___14289,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}
cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.conj,"find application meta by id");

try{var app_db = app.core.add_new_meta.call(null,fast_shell.core.default_db,app_meta);
var found = app.core.find_by_id.call(null,app_db,"app-1");
try{var values__8213__auto__ = (new cljs.core.List(null,found,(new cljs.core.List(null,app_meta,null,(1),null)),(2),null));
var result__8214__auto__ = cljs.core.apply.call(null,cljs.core._EQ_,values__8213__auto__);
if(cljs.core.truth_(result__8214__auto__)){
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"found","found",1055831357,null),new cljs.core.Symbol(null,"app-meta","app-meta",-1624825989,null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons.call(null,cljs.core._EQ_,values__8213__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"found","found",1055831357,null),new cljs.core.Symbol(null,"app-meta","app-meta",-1624825989,null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8213__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8214__auto__;
}catch (e14280){var t__8258__auto__ = e14280;
return cljs.test.do_report.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"found","found",1055831357,null),new cljs.core.Symbol(null,"app-meta","app-meta",-1624825989,null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8258__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}}finally {cljs.test.update_current_env_BANG_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"testing-contexts","testing-contexts",-1485646523)], null),cljs.core.rest);
}});

app.core_test.app_meta_test.cljs$lang$var = new cljs.core.Var(function(){return app.core_test.app_meta_test;},new cljs.core.Symbol("app.core-test","app-meta-test","app.core-test/app-meta-test",-1769064702,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"app.core-test","app.core-test",1041560817,null),new cljs.core.Symbol(null,"app-meta-test","app-meta-test",808861073,null),"/Users/oleg/dev/hub/fast-shell-clj/test/app/core_test.cljs",23,1,8,8,cljs.core.List.EMPTY,null,(cljs.core.truth_(app.core_test.app_meta_test)?app.core_test.app_meta_test.cljs$lang$test:null)]));

//# sourceMappingURL=core_test.js.map
