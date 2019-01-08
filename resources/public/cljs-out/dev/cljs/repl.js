// Compiled by ClojureScript 1.10.339 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15968){
var map__15969 = p__15968;
var map__15969__$1 = ((((!((map__15969 == null)))?(((((map__15969.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15969.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15969):map__15969);
var m = map__15969__$1;
var n = cljs.core.get.call(null,map__15969__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15969__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15971_15993 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15972_15994 = null;
var count__15973_15995 = (0);
var i__15974_15996 = (0);
while(true){
if((i__15974_15996 < count__15973_15995)){
var f_15997 = cljs.core._nth.call(null,chunk__15972_15994,i__15974_15996);
cljs.core.println.call(null,"  ",f_15997);


var G__15998 = seq__15971_15993;
var G__15999 = chunk__15972_15994;
var G__16000 = count__15973_15995;
var G__16001 = (i__15974_15996 + (1));
seq__15971_15993 = G__15998;
chunk__15972_15994 = G__15999;
count__15973_15995 = G__16000;
i__15974_15996 = G__16001;
continue;
} else {
var temp__5720__auto___16002 = cljs.core.seq.call(null,seq__15971_15993);
if(temp__5720__auto___16002){
var seq__15971_16003__$1 = temp__5720__auto___16002;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15971_16003__$1)){
var c__4351__auto___16004 = cljs.core.chunk_first.call(null,seq__15971_16003__$1);
var G__16005 = cljs.core.chunk_rest.call(null,seq__15971_16003__$1);
var G__16006 = c__4351__auto___16004;
var G__16007 = cljs.core.count.call(null,c__4351__auto___16004);
var G__16008 = (0);
seq__15971_15993 = G__16005;
chunk__15972_15994 = G__16006;
count__15973_15995 = G__16007;
i__15974_15996 = G__16008;
continue;
} else {
var f_16009 = cljs.core.first.call(null,seq__15971_16003__$1);
cljs.core.println.call(null,"  ",f_16009);


var G__16010 = cljs.core.next.call(null,seq__15971_16003__$1);
var G__16011 = null;
var G__16012 = (0);
var G__16013 = (0);
seq__15971_15993 = G__16010;
chunk__15972_15994 = G__16011;
count__15973_15995 = G__16012;
i__15974_15996 = G__16013;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16014 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3949__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16014);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16014)))?cljs.core.second.call(null,arglists_16014):arglists_16014));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15975_16015 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15976_16016 = null;
var count__15977_16017 = (0);
var i__15978_16018 = (0);
while(true){
if((i__15978_16018 < count__15977_16017)){
var vec__15979_16019 = cljs.core._nth.call(null,chunk__15976_16016,i__15978_16018);
var name_16020 = cljs.core.nth.call(null,vec__15979_16019,(0),null);
var map__15982_16021 = cljs.core.nth.call(null,vec__15979_16019,(1),null);
var map__15982_16022__$1 = ((((!((map__15982_16021 == null)))?(((((map__15982_16021.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15982_16021.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15982_16021):map__15982_16021);
var doc_16023 = cljs.core.get.call(null,map__15982_16022__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16024 = cljs.core.get.call(null,map__15982_16022__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16020);

cljs.core.println.call(null," ",arglists_16024);

if(cljs.core.truth_(doc_16023)){
cljs.core.println.call(null," ",doc_16023);
} else {
}


var G__16025 = seq__15975_16015;
var G__16026 = chunk__15976_16016;
var G__16027 = count__15977_16017;
var G__16028 = (i__15978_16018 + (1));
seq__15975_16015 = G__16025;
chunk__15976_16016 = G__16026;
count__15977_16017 = G__16027;
i__15978_16018 = G__16028;
continue;
} else {
var temp__5720__auto___16029 = cljs.core.seq.call(null,seq__15975_16015);
if(temp__5720__auto___16029){
var seq__15975_16030__$1 = temp__5720__auto___16029;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15975_16030__$1)){
var c__4351__auto___16031 = cljs.core.chunk_first.call(null,seq__15975_16030__$1);
var G__16032 = cljs.core.chunk_rest.call(null,seq__15975_16030__$1);
var G__16033 = c__4351__auto___16031;
var G__16034 = cljs.core.count.call(null,c__4351__auto___16031);
var G__16035 = (0);
seq__15975_16015 = G__16032;
chunk__15976_16016 = G__16033;
count__15977_16017 = G__16034;
i__15978_16018 = G__16035;
continue;
} else {
var vec__15984_16036 = cljs.core.first.call(null,seq__15975_16030__$1);
var name_16037 = cljs.core.nth.call(null,vec__15984_16036,(0),null);
var map__15987_16038 = cljs.core.nth.call(null,vec__15984_16036,(1),null);
var map__15987_16039__$1 = ((((!((map__15987_16038 == null)))?(((((map__15987_16038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15987_16038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15987_16038):map__15987_16038);
var doc_16040 = cljs.core.get.call(null,map__15987_16039__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16041 = cljs.core.get.call(null,map__15987_16039__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16037);

cljs.core.println.call(null," ",arglists_16041);

if(cljs.core.truth_(doc_16040)){
cljs.core.println.call(null," ",doc_16040);
} else {
}


var G__16042 = cljs.core.next.call(null,seq__15975_16030__$1);
var G__16043 = null;
var G__16044 = (0);
var G__16045 = (0);
seq__15975_16015 = G__16042;
chunk__15976_16016 = G__16043;
count__15977_16017 = G__16044;
i__15978_16018 = G__16045;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__15989 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15990 = null;
var count__15991 = (0);
var i__15992 = (0);
while(true){
if((i__15992 < count__15991)){
var role = cljs.core._nth.call(null,chunk__15990,i__15992);
var temp__5720__auto___16046__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___16046__$1)){
var spec_16047 = temp__5720__auto___16046__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16047));
} else {
}


var G__16048 = seq__15989;
var G__16049 = chunk__15990;
var G__16050 = count__15991;
var G__16051 = (i__15992 + (1));
seq__15989 = G__16048;
chunk__15990 = G__16049;
count__15991 = G__16050;
i__15992 = G__16051;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__15989);
if(temp__5720__auto____$1){
var seq__15989__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15989__$1)){
var c__4351__auto__ = cljs.core.chunk_first.call(null,seq__15989__$1);
var G__16052 = cljs.core.chunk_rest.call(null,seq__15989__$1);
var G__16053 = c__4351__auto__;
var G__16054 = cljs.core.count.call(null,c__4351__auto__);
var G__16055 = (0);
seq__15989 = G__16052;
chunk__15990 = G__16053;
count__15991 = G__16054;
i__15992 = G__16055;
continue;
} else {
var role = cljs.core.first.call(null,seq__15989__$1);
var temp__5720__auto___16056__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___16056__$2)){
var spec_16057 = temp__5720__auto___16056__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16057));
} else {
}


var G__16058 = cljs.core.next.call(null,seq__15989__$1);
var G__16059 = null;
var G__16060 = (0);
var G__16061 = (0);
seq__15989 = G__16058;
chunk__15990 = G__16059;
count__15991 = G__16060;
i__15992 = G__16061;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map
