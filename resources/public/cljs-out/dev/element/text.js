// Compiled by ClojureScript 1.10.339 {}
goog.provide('element.text');
goog.require('cljs.core');
element.text.search_box = (function element$text$search_box(var_args){
var args__4534__auto__ = [];
var len__4531__auto___16363 = arguments.length;
var i__4532__auto___16364 = (0);
while(true){
if((i__4532__auto___16364 < len__4531__auto___16363)){
args__4534__auto__.push((arguments[i__4532__auto___16364]));

var G__16365 = (i__4532__auto___16364 + (1));
i__4532__auto___16364 = G__16365;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return element.text.search_box.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

element.text.search_box.cljs$core$IFn$_invoke$arity$variadic = (function (p__16360){
var map__16361 = p__16360;
var map__16361__$1 = ((((!((map__16361 == null)))?(((((map__16361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__16361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16361):map__16361);
var placeholder = cljs.core.get.call(null,map__16361__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var on_change = cljs.core.get.call(null,map__16361__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var input_attr = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),(cljs.core.truth_(placeholder)?placeholder:"Search"),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (map__16361,map__16361__$1,placeholder,on_change){
return (function (ev){
ev.stopPropagation();

return on_change.call(null,ev.target.value);
});})(map__16361,map__16361__$1,placeholder,on_change))
], null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p.control.has-icons-left","p.control.has-icons-left",-719079737),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.input.is-small","input.input.is-small",-1266825237),input_attr], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.icon.is-small.is-left","span.icon.is-small.is-left",-297495403),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"i.fas.fa-search","i.fas.fa-search",916450186),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"aria-hidden","aria-hidden",399337029),true], null)], null)], null)], null);
});

element.text.search_box.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
element.text.search_box.cljs$lang$applyTo = (function (seq16359){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq16359));
});


//# sourceMappingURL=text.js.map
