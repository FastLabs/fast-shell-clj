// Compiled by ClojureScript 1.10.339 {}
goog.provide('fast_shell.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_com.core');
goog.require('fast_shell.subs');
goog.require('reagent.core');
goog.require('element.app_menu');
fast_shell.views.sessions = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY], null);
fast_shell.views.session_toggle = (function fast_shell$views$session_toggle(p__15983){
var map__15984 = p__15983;
var map__15984__$1 = ((((!((map__15984 == null)))?(((((map__15984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15984):map__15984);
var session_id = cljs.core.get.call(null,map__15984__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var app_meta = cljs.core.get.call(null,map__15984__$1,new cljs.core.Keyword(null,"app-meta","app-meta",1029609780));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a.panel-block","a.panel-block",1110080403),session_id], null);
});
fast_shell.views.session_bar = (function fast_shell$views$session_bar(app_sessions){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.panel-heading","p.panel-heading",1850435418),"Sessions",(function (){var iter__4324__auto__ = (function fast_shell$views$session_bar_$_iter__15986(s__15987){
return (new cljs.core.LazySeq(null,(function (){
var s__15987__$1 = s__15987;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15987__$1);
if(temp__5720__auto__){
var s__15987__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15987__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15987__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15989 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15988 = (0);
while(true){
if((i__15988 < size__4323__auto__)){
var map__15990 = cljs.core._nth.call(null,c__4322__auto__,i__15988);
var map__15990__$1 = ((((!((map__15990 == null)))?(((((map__15990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15990):map__15990);
var ses = map__15990__$1;
var session_id = cljs.core.get.call(null,map__15990__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
cljs.core.chunk_append.call(null,b__15989,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fast_shell.views.session_toggle,ses], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),session_id], null)));

var G__15994 = (i__15988 + (1));
i__15988 = G__15994;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15989),fast_shell$views$session_bar_$_iter__15986.call(null,cljs.core.chunk_rest.call(null,s__15987__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15989),null);
}
} else {
var map__15992 = cljs.core.first.call(null,s__15987__$2);
var map__15992__$1 = ((((!((map__15992 == null)))?(((((map__15992.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15992.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15992):map__15992);
var ses = map__15992__$1;
var session_id = cljs.core.get.call(null,map__15992__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fast_shell.views.session_toggle,ses], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),session_id], null)),fast_shell$views$session_bar_$_iter__15986.call(null,cljs.core.rest.call(null,s__15987__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4324__auto__.call(null,app_sessions);
})()], null)], null);
});
fast_shell.views.app_canvas = (function fast_shell$views$app_canvas(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"App canvas"], null);
});
fast_shell.views.app_shell = (function fast_shell$views$app_shell(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container.is-fluid","div.container.is-fluid",1788970446),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level","div.level",-1180372721),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nav.level-left","nav.level-left",1910220286),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fast_shell.views.session_bar,fast_shell.views.sessions], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.level-item","div.level-item",-68610818),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [fast_shell.views.app_canvas], null)], null)], null)], null);
});
cljs.core.list(new cljs.core.Symbol(null,"defn","defn",-126010802,null),new cljs.core.Symbol(null,"app-fin-test","app-fin-test",-1791894175,null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("of","version","of/version",2065796040,null)))], null),"OpenFinn Version"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),cljs.core.PersistentVector.EMPTY,cljs.core.list(new cljs.core.Symbol("of","dev-tools","of/dev-tools",1391385941,null)))], null),"Dev tools"], null)], null));
fast_shell.views.app_modal = (function fast_shell$views$app_modal(show_app){
if(cljs.core.truth_(cljs.core.deref.call(null,show_app))){
cljs.core.prn.call(null,"Displaying app-store");

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.core.modal_panel,new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [element.app_menu.app_list,show_app], null)], null);
} else {
return null;
}
});
fast_shell.views.main_panel = (function fast_shell$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.subs","name","fast-shell.subs/name",-1126951569)], null));
var sessions = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("fast-shell.subs","sessions","fast-shell.subs/sessions",-2011108202)], null));
var show_app = reagent.core.atom.call(null,false);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [element.app_menu.app_menu,show_app,sessions], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [fast_shell.views.app_modal,show_app], null)], null);
});

//# sourceMappingURL=views.js.map
