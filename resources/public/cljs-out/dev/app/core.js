// Compiled by ClojureScript 1.10.439 {}
goog.provide('app.core');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('re_frame.core');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("app.core","name","app.core/name",-1429873787),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("app.core","description","app.core/description",-537182004),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("app.core","meta","app.core/meta",71406464),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Keyword("app.core","name","app.core/name",-1429873787)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","description","app.core/description",-537182004)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__14586){
return cljs.core.map_QMARK_.call(null,G__14586);
}),(function (G__14586){
return cljs.core.contains_QMARK_.call(null,G__14586,new cljs.core.Keyword("app.core","id","app.core/id",1721650920));
}),(function (G__14586){
return cljs.core.contains_QMARK_.call(null,G__14586,new cljs.core.Keyword("app.core","name","app.core/name",-1429873787));
})], null),(function (G__14586){
return ((cljs.core.map_QMARK_.call(null,G__14586)) && (cljs.core.contains_QMARK_.call(null,G__14586,new cljs.core.Keyword("app.core","id","app.core/id",1721650920))) && (cljs.core.contains_QMARK_.call(null,G__14586,new cljs.core.Keyword("app.core","name","app.core/name",-1429873787))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","description","app.core/description",-537182004)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Keyword("app.core","name","app.core/name",-1429873787)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Keyword("app.core","name","app.core/name",-1429873787)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Keyword("app.core","name","app.core/name",-1429873787)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","description","app.core/description",-537182004)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("app.core","id","app.core/id",1721650920))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("app.core","name","app.core/name",-1429873787)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","description","app.core/description",-537182004)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("app.core","store-cfg","app.core/store-cfg",2019867860),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Keyword("app.core","meta","app.core/meta",71406464)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Keyword("app.core","meta","app.core/meta",71406464)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Keyword("app.core","meta","app.core/meta",71406464)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Keyword("app.core","meta","app.core/meta",71406464)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__14587){
return cljs.core.map_QMARK_.call(null,G__14587);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__7951__auto__,v__7952__auto__){
return cljs.core.nth.call(null,v__7952__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Keyword("app.core","meta","app.core/meta",71406464))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717),new cljs.core.Keyword("app.core","store-cfg","app.core/store-cfg",2019867860)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__14588){
return cljs.core.map_QMARK_.call(null,G__14588);
}),(function (G__14588){
return cljs.core.contains_QMARK_.call(null,G__14588,new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717));
}),(function (G__14588){
return cljs.core.contains_QMARK_.call(null,G__14588,new cljs.core.Keyword("app.core","store-cfg","app.core/store-cfg",2019867860));
})], null),(function (G__14588){
return ((cljs.core.map_QMARK_.call(null,G__14588)) && (cljs.core.contains_QMARK_.call(null,G__14588,new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717))) && (cljs.core.contains_QMARK_.call(null,G__14588,new cljs.core.Keyword("app.core","store-cfg","app.core/store-cfg",2019867860))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717),new cljs.core.Keyword("app.core","store-cfg","app.core/store-cfg",2019867860)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717),new cljs.core.Keyword("app.core","store-cfg","app.core/store-cfg",2019867860)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717),new cljs.core.Keyword("app.core","store-cfg","app.core/store-cfg",2019867860)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("app.core","store-cfg","app.core/store-cfg",2019867860)))], null),null])));
app.core.new_app_meta = (function app$core$new_app_meta(app_id,app_name){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),app_id,new cljs.core.Keyword("app.core","name","app.core/name",-1429873787),app_name], null);
});
app.core.add_new_meta = (function app$core$add_new_meta(db,p__14589){
var map__14590 = p__14589;
var map__14590__$1 = (((((!((map__14590 == null))))?(((((map__14590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__14590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14590):map__14590);
var app_meta = map__14590__$1;
var id = cljs.core.get.call(null,map__14590__$1,new cljs.core.Keyword("app.core","id","app.core/id",1721650920));
cljs.core.prn.call(null,["register new application meta: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join(''));

return cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717),id], null),app_meta);
});
app.core.find_by_id = (function app$core$find_by_id(db,app_id){
var store_content = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","store","app.core/store",-1660915894),new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717)], null));
return cljs.core.get.call(null,store_content,app_id);
});
app.core.start_app = (function app$core$start_app(var_args){
var G__14593 = arguments.length;
switch (G__14593) {
case 2:
return app.core.start_app.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.core.start_app.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

app.core.start_app.cljs$core$IFn$_invoke$arity$2 = (function (app_id,activate_QMARK_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-app","start-app",794141462),app_id,activate_QMARK_], null));
});

app.core.start_app.cljs$core$IFn$_invoke$arity$1 = (function (app_id){
return app.core.start_app.call(null,app_id,true);
});

app.core.start_app.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=core.js.map
