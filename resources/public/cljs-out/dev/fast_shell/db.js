// Compiled by ClojureScript 1.10.339 {}
goog.provide('fast_shell.db');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('session.core');
goog.require('app.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("fast-shell.db","shell-db","fast-shell.db/shell-db",-1204438243),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500),new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__8971){
return cljs.core.map_QMARK_.call(null,G__8971);
}),(function (G__8971){
return cljs.core.contains_QMARK_.call(null,G__8971,new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500));
}),(function (G__8971){
return cljs.core.contains_QMARK_.call(null,G__8971,new cljs.core.Keyword("app.core","store","app.core/store",-1660915894));
}),(function (G__8971){
return cljs.core.contains_QMARK_.call(null,G__8971,new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492));
})], null),(function (G__8971){
return ((cljs.core.map_QMARK_.call(null,G__8971)) && (cljs.core.contains_QMARK_.call(null,G__8971,new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500))) && (cljs.core.contains_QMARK_.call(null,G__8971,new cljs.core.Keyword("app.core","store","app.core/store",-1660915894))) && (cljs.core.contains_QMARK_.call(null,G__8971,new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500),new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500),new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500),new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("app.core","store","app.core/store",-1660915894))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492)))], null),null])));
fast_shell.db.default_db = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("fast-shell.db","name","fast-shell.db/name",-39354500),"Fast Shell Container",new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("app.core","store-cfg","app.core/store-cfg",2019867860),cljs.core.PersistentArrayMap.EMPTY], null),new cljs.core.Keyword("session.core","inst-count","session.core/inst-count",798952432),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492),cljs.core.PersistentArrayMap.EMPTY], null);

//# sourceMappingURL=db.js.map
