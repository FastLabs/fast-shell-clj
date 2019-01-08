// Compiled by ClojureScript 1.10.339 {}
goog.provide('session.core');
goog.require('cljs.core');
goog.require('app.core');
goog.require('cljs.spec.alpha');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("session.core","id","session.core/id",-99006915),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","cat","cljs.spec.alpha/cat",-1471398329,null),new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword(null,"app-id","app-id",2035039555),new cljs.core.Keyword("app.core","id","app.core/id",1721650920)),cljs.spec.alpha.cat_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword(null,"app-id","app-id",2035039555)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,new cljs.core.Keyword("app.core","id","app.core/id",1721650920)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword("app.core","id","app.core/id",1721650920)], null)));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("session.core","attributes","session.core/attributes",657543269),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),cljs.core.map_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("session.core","title","session.core/title",1364310502),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("session.core","session","session.core/session",1731899992),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","id","session.core/id",-99006915),new cljs.core.Keyword("session.core","title","session.core/title",1364310502)], null),new cljs.core.Keyword(null,"opt","opt",-794706369),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","attributes","session.core/attributes",657543269)], null)),cljs.spec.alpha.map_spec_impl.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[null,null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__8952){
return cljs.core.map_QMARK_.call(null,G__8952);
}),(function (G__8952){
return cljs.core.contains_QMARK_.call(null,G__8952,new cljs.core.Keyword("session.core","id","session.core/id",-99006915));
}),(function (G__8952){
return cljs.core.contains_QMARK_.call(null,G__8952,new cljs.core.Keyword("session.core","title","session.core/title",1364310502));
})], null),(function (G__8952){
return ((cljs.core.map_QMARK_.call(null,G__8952)) && (cljs.core.contains_QMARK_.call(null,G__8952,new cljs.core.Keyword("session.core","id","session.core/id",-99006915))) && (cljs.core.contains_QMARK_.call(null,G__8952,new cljs.core.Keyword("session.core","title","session.core/title",1364310502))));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","attributes","session.core/attributes",657543269)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","id","session.core/id",-99006915),new cljs.core.Keyword("session.core","title","session.core/title",1364310502)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","id","session.core/id",-99006915),new cljs.core.Keyword("session.core","title","session.core/title",1364310502)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","id","session.core/id",-99006915),new cljs.core.Keyword("session.core","title","session.core/title",1364310502)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","attributes","session.core/attributes",657543269)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("session.core","id","session.core/id",-99006915))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword("session.core","title","session.core/title",1364310502)))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","attributes","session.core/attributes",657543269)], null)])));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("session.core","ins-count","session.core/ins-count",20305967),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Symbol(null,"int?","int?",1799729645,null)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920),cljs.core.int_QMARK_], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__8953){
return cljs.core.map_QMARK_.call(null,G__8953);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__7949__auto__,v__7950__auto__){
return cljs.core.nth.call(null,v__7950__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("app.core","id","app.core/id",1721650920),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null))], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("session.core","id","session.core/id",-99006915),new cljs.core.Keyword("session.core","session","session.core/session",1731899992)),cljs.spec.alpha.every_impl.call(null,cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","tuple","cljs.spec.alpha/tuple",-415901908,null),new cljs.core.Keyword("session.core","id","session.core/id",-99006915),new cljs.core.Keyword("session.core","session","session.core/session",1731899992)),cljs.spec.alpha.tuple_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","id","session.core/id",-99006915),new cljs.core.Keyword("session.core","session","session.core/session",1731899992)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","id","session.core/id",-99006915),new cljs.core.Keyword("session.core","session","session.core/session",1731899992)], null)),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__8954){
return cljs.core.map_QMARK_.call(null,G__8954);
}),new cljs.core.Keyword(null,"kind","kind",-717265803),cljs.core.map_QMARK_,new cljs.core.Keyword("cljs.spec.alpha","kfn","cljs.spec.alpha/kfn",672643897),(function (i__7949__auto__,v__7950__auto__){
return cljs.core.nth.call(null,v__7950__auto__,(0));
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","map-of","cljs.spec.alpha/map-of",153715093,null),new cljs.core.Keyword("session.core","id","session.core/id",-99006915),new cljs.core.Keyword("session.core","session","session.core/session",1731899992))], null),null));
session.core.gen_session_title = (function session$core$gen_session_title(session__$1,app_meta){
return cljs.core.assoc.call(null,session__$1,new cljs.core.Keyword("session.core","title","session.core/title",1364310502),new cljs.core.Keyword("app.core","name","app.core/name",-1429873787).cljs$core$IFn$_invoke$arity$1(app_meta));
});
session.core.gen_session_id = (function session$core$gen_session_id(session__$1,app_meta,session_postfix){
var ses_id = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.core","id","app.core/id",1721650920).cljs$core$IFn$_invoke$arity$1(app_meta),session_postfix], null);
return cljs.core.assoc.call(null,session__$1,new cljs.core.Keyword("session.core","id","session.core/id",-99006915),ses_id);
});
session.core.gen_session_new = (function session$core$gen_session_new(app_meta,session_postfix){
return session.core.gen_session_title.call(null,session.core.gen_session_id.call(null,cljs.core.PersistentArrayMap.EMPTY,app_meta,session_postfix),app_meta);
});
/**
 * Creates a new session
 */
session.core.add_new_session = (function session$core$add_new_session(db,app_id){
var app_meta = app.core.find_by_id.call(null,db,app_id);
var app_inst_count = cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","inst-count","session.core/inst-count",798952432),app_id], null),(0));
var session_postfix = (app_inst_count + (1));
var new_session = session.core.gen_session_new.call(null,app_meta,session_postfix);
return cljs.core.assoc_in.call(null,cljs.core.assoc_in.call(null,db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492),new cljs.core.Keyword("session.core","id","session.core/id",-99006915).cljs$core$IFn$_invoke$arity$1(new_session)], null),new_session),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","inst-count","session.core/inst-count",798952432),app_id], null),session_postfix);
});
session.core.destroy_session = (function session$core$destroy_session(db,session_id){
var instances = new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492).cljs$core$IFn$_invoke$arity$1(db);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492),cljs.core.dissoc.call(null,instances,session_id));
});
session.core.app_sessions = (function session$core$app_sessions(db,app_id){
return cljs.core.get_in.call(null,db,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492),app_id,new cljs.core.Keyword("session.core","all-inst","session.core/all-inst",2071521658)], null));
});
session.core.app_session_pair = (function session$core$app_session_pair(app_store,all_inst){
return cljs.core.first.call(null,cljs.core.map.call(null,(function (p__8955){
var vec__8956 = p__8955;
var vec__8959 = cljs.core.nth.call(null,vec__8956,(0),null);
var _ = cljs.core.nth.call(null,vec__8959,(0),null);
var app_id = cljs.core.nth.call(null,vec__8959,(1),null);
var session__$1 = cljs.core.nth.call(null,vec__8956,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,app_store,app_id),session__$1], null);
}),all_inst));
});
session.core.sessions_view = (function session$core$sessions_view(p__8962){
var map__8963 = p__8962;
var map__8963__$1 = ((((!((map__8963 == null)))?(((((map__8963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8963):map__8963);
var db = map__8963__$1;
var instances = cljs.core.get.call(null,map__8963__$1,new cljs.core.Keyword("session.core","instances","session.core/instances",-11767492));
var store = cljs.core.get.call(null,map__8963__$1,new cljs.core.Keyword("app.core","store","app.core/store",-1660915894));
cljs.core.prn.call(null,instances);

return cljs.core.map.call(null,((function (map__8963,map__8963__$1,db,instances,store){
return (function (p__8965){
var vec__8966 = p__8965;
var _ = cljs.core.nth.call(null,vec__8966,(0),null);
var ses_detail = cljs.core.nth.call(null,vec__8966,(1),null);
return session.core.app_session_pair.call(null,cljs.core.get.call(null,store,new cljs.core.Keyword("app.core","store-content","app.core/store-content",381559717)),cljs.core.get.call(null,ses_detail,new cljs.core.Keyword("session.core","all-inst","session.core/all-inst",2071521658)));
});})(map__8963,map__8963__$1,db,instances,store))
,instances);
});

//# sourceMappingURL=core.js.map
