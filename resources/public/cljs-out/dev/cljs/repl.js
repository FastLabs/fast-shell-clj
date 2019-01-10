// Compiled by ClojureScript 1.10.439 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__16832){
var map__16833 = p__16832;
var map__16833__$1 = (((((!((map__16833 == null))))?(((((map__16833.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16833.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16833):map__16833);
var m = map__16833__$1;
var n = cljs.core.get.call(null,map__16833__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__16833__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4047__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5720__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5720__auto__)){
var ns = temp__5720__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16837_16885 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16838_16886 = null;
var count__16839_16887 = (0);
var i__16840_16888 = (0);
while(true){
if((i__16840_16888 < count__16839_16887)){
var f_16889 = cljs.core._nth.call(null,chunk__16838_16886,i__16840_16888);
cljs.core.println.call(null,"  ",f_16889);


var G__16891 = seq__16837_16885;
var G__16892 = chunk__16838_16886;
var G__16893 = count__16839_16887;
var G__16894 = (i__16840_16888 + (1));
seq__16837_16885 = G__16891;
chunk__16838_16886 = G__16892;
count__16839_16887 = G__16893;
i__16840_16888 = G__16894;
continue;
} else {
var temp__5720__auto___16895 = cljs.core.seq.call(null,seq__16837_16885);
if(temp__5720__auto___16895){
var seq__16837_16896__$1 = temp__5720__auto___16895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16837_16896__$1)){
var c__4461__auto___16897 = cljs.core.chunk_first.call(null,seq__16837_16896__$1);
var G__16898 = cljs.core.chunk_rest.call(null,seq__16837_16896__$1);
var G__16899 = c__4461__auto___16897;
var G__16900 = cljs.core.count.call(null,c__4461__auto___16897);
var G__16901 = (0);
seq__16837_16885 = G__16898;
chunk__16838_16886 = G__16899;
count__16839_16887 = G__16900;
i__16840_16888 = G__16901;
continue;
} else {
var f_16903 = cljs.core.first.call(null,seq__16837_16896__$1);
cljs.core.println.call(null,"  ",f_16903);


var G__16904 = cljs.core.next.call(null,seq__16837_16896__$1);
var G__16905 = null;
var G__16906 = (0);
var G__16907 = (0);
seq__16837_16885 = G__16904;
chunk__16838_16886 = G__16905;
count__16839_16887 = G__16906;
i__16840_16888 = G__16907;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_16908 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4047__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_16908);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_16908)))?cljs.core.second.call(null,arglists_16908):arglists_16908));
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

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__16845_16914 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__16846_16915 = null;
var count__16847_16916 = (0);
var i__16848_16917 = (0);
while(true){
if((i__16848_16917 < count__16847_16916)){
var vec__16849_16918 = cljs.core._nth.call(null,chunk__16846_16915,i__16848_16917);
var name_16919 = cljs.core.nth.call(null,vec__16849_16918,(0),null);
var map__16852_16920 = cljs.core.nth.call(null,vec__16849_16918,(1),null);
var map__16852_16921__$1 = (((((!((map__16852_16920 == null))))?(((((map__16852_16920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16852_16920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16852_16920):map__16852_16920);
var doc_16922 = cljs.core.get.call(null,map__16852_16921__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16923 = cljs.core.get.call(null,map__16852_16921__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16919);

cljs.core.println.call(null," ",arglists_16923);

if(cljs.core.truth_(doc_16922)){
cljs.core.println.call(null," ",doc_16922);
} else {
}


var G__16932 = seq__16845_16914;
var G__16933 = chunk__16846_16915;
var G__16934 = count__16847_16916;
var G__16935 = (i__16848_16917 + (1));
seq__16845_16914 = G__16932;
chunk__16846_16915 = G__16933;
count__16847_16916 = G__16934;
i__16848_16917 = G__16935;
continue;
} else {
var temp__5720__auto___16940 = cljs.core.seq.call(null,seq__16845_16914);
if(temp__5720__auto___16940){
var seq__16845_16941__$1 = temp__5720__auto___16940;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16845_16941__$1)){
var c__4461__auto___16942 = cljs.core.chunk_first.call(null,seq__16845_16941__$1);
var G__16943 = cljs.core.chunk_rest.call(null,seq__16845_16941__$1);
var G__16944 = c__4461__auto___16942;
var G__16945 = cljs.core.count.call(null,c__4461__auto___16942);
var G__16946 = (0);
seq__16845_16914 = G__16943;
chunk__16846_16915 = G__16944;
count__16847_16916 = G__16945;
i__16848_16917 = G__16946;
continue;
} else {
var vec__16858_16947 = cljs.core.first.call(null,seq__16845_16941__$1);
var name_16948 = cljs.core.nth.call(null,vec__16858_16947,(0),null);
var map__16861_16949 = cljs.core.nth.call(null,vec__16858_16947,(1),null);
var map__16861_16950__$1 = (((((!((map__16861_16949 == null))))?(((((map__16861_16949.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16861_16949.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16861_16949):map__16861_16949);
var doc_16951 = cljs.core.get.call(null,map__16861_16950__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_16952 = cljs.core.get.call(null,map__16861_16950__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_16948);

cljs.core.println.call(null," ",arglists_16952);

if(cljs.core.truth_(doc_16951)){
cljs.core.println.call(null," ",doc_16951);
} else {
}


var G__16957 = cljs.core.next.call(null,seq__16845_16941__$1);
var G__16958 = null;
var G__16959 = (0);
var G__16960 = (0);
seq__16845_16914 = G__16957;
chunk__16846_16915 = G__16958;
count__16847_16916 = G__16959;
i__16848_16917 = G__16960;
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
var temp__5720__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5720__auto__)){
var fnspec = temp__5720__auto__;
cljs.core.print.call(null,"Spec");

var seq__16870 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__16871 = null;
var count__16872 = (0);
var i__16873 = (0);
while(true){
if((i__16873 < count__16872)){
var role = cljs.core._nth.call(null,chunk__16871,i__16873);
var temp__5720__auto___16963__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___16963__$1)){
var spec_16964 = temp__5720__auto___16963__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16964));
} else {
}


var G__16966 = seq__16870;
var G__16967 = chunk__16871;
var G__16968 = count__16872;
var G__16969 = (i__16873 + (1));
seq__16870 = G__16966;
chunk__16871 = G__16967;
count__16872 = G__16968;
i__16873 = G__16969;
continue;
} else {
var temp__5720__auto____$1 = cljs.core.seq.call(null,seq__16870);
if(temp__5720__auto____$1){
var seq__16870__$1 = temp__5720__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__16870__$1)){
var c__4461__auto__ = cljs.core.chunk_first.call(null,seq__16870__$1);
var G__16974 = cljs.core.chunk_rest.call(null,seq__16870__$1);
var G__16975 = c__4461__auto__;
var G__16976 = cljs.core.count.call(null,c__4461__auto__);
var G__16977 = (0);
seq__16870 = G__16974;
chunk__16871 = G__16975;
count__16872 = G__16976;
i__16873 = G__16977;
continue;
} else {
var role = cljs.core.first.call(null,seq__16870__$1);
var temp__5720__auto___16979__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5720__auto___16979__$2)){
var spec_16984 = temp__5720__auto___16979__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_16984));
} else {
}


var G__16986 = cljs.core.next.call(null,seq__16870__$1);
var G__16987 = null;
var G__16988 = (0);
var G__16989 = (0);
seq__16870 = G__16986;
chunk__16871 = G__16987;
count__16872 = G__16988;
i__16873 = G__16989;
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
