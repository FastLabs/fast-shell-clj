// Compiled by ClojureScript 1.10.439 {}
goog.provide('element.text');
goog.require('cljs.core');
element.text.search_box = (function element$text$search_box(var_args){
var args__4647__auto__ = [];
var len__4641__auto___8113 = arguments.length;
var i__4642__auto___8114 = (0);
while(true){
if((i__4642__auto___8114 < len__4641__auto___8113)){
args__4647__auto__.push((arguments[i__4642__auto___8114]));

var G__8115 = (i__4642__auto___8114 + (1));
i__4642__auto___8114 = G__8115;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return element.text.search_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

element.text.search_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__8110){
var map__8111 = p__8110;
var map__8111__$1 = (((((!((map__8111 == null))))?(((((map__8111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8111):map__8111);
var placeholder = cljs.core.get.call(null,map__8111__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_change = cljs.core.get.call(null,map__8111__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var input_attr = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(cljs.core.truth_(placeholder)?placeholder:"Search"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__8111,map__8111__$1,placeholder,on_change){
return (function (ev){
ev.stopPropagation();

return on_change.call(null,ev.target.value);
});})(map__8111,map__8111__$1,placeholder,on_change))
], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.control.has-icons-left","p.control.has-icons-left",-719079737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input.is-small","input.input.is-small",-1266825237),input_attr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-small.is-left","span.icon.is-small.is-left",-297495403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-search","i.fas.fa-search",916450186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)], null)], null);
});

element.text.search_box.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
element.text.search_box.cljs$lang$applyTo = (function (seq8109){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq8109));
});


//# sourceMappingURL=text.js.map
