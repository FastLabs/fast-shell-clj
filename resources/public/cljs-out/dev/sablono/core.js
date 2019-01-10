// Compiled by ClojureScript 1.10.439 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__15820__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__15817 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__15818 = cljs.core.seq.call(null,vec__15817);
var first__15819 = cljs.core.first.call(null,seq__15818);
var seq__15818__$1 = cljs.core.next.call(null,seq__15818);
var tag = first__15819;
var body = seq__15818__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args))], null),cljs.core.rest.call(null,body));
} else {
return cljs.core.into.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tag,cljs.core.first.call(null,args)], null),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__15820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__15821__i = 0, G__15821__a = new Array(arguments.length -  0);
while (G__15821__i < G__15821__a.length) {G__15821__a[G__15821__i] = arguments[G__15821__i + 0]; ++G__15821__i;}
  args = new cljs.core.IndexedSeq(G__15821__a,0,null);
} 
return G__15820__delegate.call(this,args);};
G__15820.cljs$lang$maxFixedArity = 0;
G__15820.cljs$lang$applyTo = (function (arglist__15822){
var args = cljs.core.seq(arglist__15822);
return G__15820__delegate(args);
});
G__15820.cljs$core$IFn$_invoke$arity$variadic = G__15820__delegate;
return G__15820;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__4434__auto__ = (function sablono$core$update_arglists_$_iter__15823(s__15824){
return (new cljs.core.LazySeq(null,(function (){
var s__15824__$1 = s__15824;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15824__$1);
if(temp__5720__auto__){
var s__15824__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15824__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__15824__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__15826 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__15825 = (0);
while(true){
if((i__15825 < size__4433__auto__)){
var args = cljs.core._nth.call(null,c__4432__auto__,i__15825);
cljs.core.chunk_append.call(null,b__15826,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__15827 = (i__15825 + (1));
i__15825 = G__15827;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15826),sablono$core$update_arglists_$_iter__15823.call(null,cljs.core.chunk_rest.call(null,s__15824__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15826),null);
}
} else {
var args = cljs.core.first.call(null,s__15824__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__15823.call(null,cljs.core.rest.call(null,s__15824__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__4647__auto__ = [];
var len__4641__auto___15833 = arguments.length;
var i__4642__auto___15834 = (0);
while(true){
if((i__4642__auto___15834 < len__4641__auto___15833)){
args__4647__auto__.push((arguments[i__4642__auto___15834]));

var G__15835 = (i__4642__auto___15834 + (1));
i__4642__auto___15834 = G__15835;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((0) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__4648__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__4434__auto__ = (function sablono$core$iter__15829(s__15830){
return (new cljs.core.LazySeq(null,(function (){
var s__15830__$1 = s__15830;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15830__$1);
if(temp__5720__auto__){
var s__15830__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15830__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__15830__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__15832 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__15831 = (0);
while(true){
if((i__15831 < size__4433__auto__)){
var style = cljs.core._nth.call(null,c__4432__auto__,i__15831);
cljs.core.chunk_append.call(null,b__15832,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__15836 = (i__15831 + (1));
i__15831 = G__15836;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15832),sablono$core$iter__15829.call(null,cljs.core.chunk_rest.call(null,s__15830__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15832),null);
}
} else {
var style = cljs.core.first.call(null,s__15830__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__15829.call(null,cljs.core.rest.call(null,s__15830__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
sablono.core.include_css.cljs$lang$applyTo = (function (seq15828){
var self__4629__auto__ = this;
return self__4629__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15828));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to15837 = (function sablono$core$link_to15837(var_args){
var args__4647__auto__ = [];
var len__4641__auto___15840 = arguments.length;
var i__4642__auto___15841 = (0);
while(true){
if((i__4642__auto___15841 < len__4641__auto___15840)){
args__4647__auto__.push((arguments[i__4642__auto___15841]));

var G__15842 = (i__4642__auto___15841 + (1));
i__4642__auto___15841 = G__15842;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to15837.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sablono.core.link_to15837.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to15837.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.link_to15837.cljs$lang$applyTo = (function (seq15838){
var G__15839 = cljs.core.first.call(null,seq15838);
var seq15838__$1 = cljs.core.next.call(null,seq15838);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15839,seq15838__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to15837);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to15843 = (function sablono$core$mail_to15843(var_args){
var args__4647__auto__ = [];
var len__4641__auto___15850 = arguments.length;
var i__4642__auto___15851 = (0);
while(true){
if((i__4642__auto___15851 < len__4641__auto___15850)){
args__4647__auto__.push((arguments[i__4642__auto___15851]));

var G__15852 = (i__4642__auto___15851 + (1));
i__4642__auto___15851 = G__15852;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to15843.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sablono.core.mail_to15843.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__15846){
var vec__15847 = p__15846;
var content = cljs.core.nth.call(null,vec__15847,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__4047__auto__ = content;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to15843.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.mail_to15843.cljs$lang$applyTo = (function (seq15844){
var G__15845 = cljs.core.first.call(null,seq15844);
var seq15844__$1 = cljs.core.next.call(null,seq15844);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15845,seq15844__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to15843);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list15853 = (function sablono$core$unordered_list15853(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__4434__auto__ = (function sablono$core$unordered_list15853_$_iter__15854(s__15855){
return (new cljs.core.LazySeq(null,(function (){
var s__15855__$1 = s__15855;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15855__$1);
if(temp__5720__auto__){
var s__15855__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15855__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__15855__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__15857 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__15856 = (0);
while(true){
if((i__15856 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__15856);
cljs.core.chunk_append.call(null,b__15857,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15858 = (i__15856 + (1));
i__15856 = G__15858;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15857),sablono$core$unordered_list15853_$_iter__15854.call(null,cljs.core.chunk_rest.call(null,s__15855__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15857),null);
}
} else {
var x = cljs.core.first.call(null,s__15855__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list15853_$_iter__15854.call(null,cljs.core.rest.call(null,s__15855__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list15853);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list15859 = (function sablono$core$ordered_list15859(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__4434__auto__ = (function sablono$core$ordered_list15859_$_iter__15860(s__15861){
return (new cljs.core.LazySeq(null,(function (){
var s__15861__$1 = s__15861;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15861__$1);
if(temp__5720__auto__){
var s__15861__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15861__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__15861__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__15863 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__15862 = (0);
while(true){
if((i__15862 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__15862);
cljs.core.chunk_append.call(null,b__15863,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__15864 = (i__15862 + (1));
i__15862 = G__15864;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15863),sablono$core$ordered_list15859_$_iter__15860.call(null,cljs.core.chunk_rest.call(null,s__15861__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15863),null);
}
} else {
var x = cljs.core.first.call(null,s__15861__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list15859_$_iter__15860.call(null,cljs.core.rest.call(null,s__15861__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list15859);
/**
 * Create an image element.
 */
sablono.core.image15865 = (function sablono$core$image15865(var_args){
var G__15867 = arguments.length;
switch (G__15867) {
case 1:
return sablono.core.image15865.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image15865.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image15865.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image15865.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image15865.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image15865);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__15869_SHARP_,p2__15870_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15869_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15870_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__15871_SHARP_,p2__15872_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__15871_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__15872_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(var_args){
var G__15874 = arguments.length;
switch (G__15874) {
case 2:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (type,name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.input_field_STAR_.cljs$core$IFn$_invoke$arity$3 = (function (type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4047__auto__ = value;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.input_field_STAR_.cljs$lang$maxFixedArity = 3;

/**
 * Creates a color input field.
 */
sablono.core.color_field15876 = (function sablono$core$color_field15876(var_args){
var G__15878 = arguments.length;
switch (G__15878) {
case 1:
return sablono.core.color_field15876.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field15876.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field15876.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15807__auto__);
});

sablono.core.color_field15876.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.color_field15876.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field15876);

/**
 * Creates a date input field.
 */
sablono.core.date_field15879 = (function sablono$core$date_field15879(var_args){
var G__15881 = arguments.length;
switch (G__15881) {
case 1:
return sablono.core.date_field15879.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field15879.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field15879.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15807__auto__);
});

sablono.core.date_field15879.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.date_field15879.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field15879);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field15882 = (function sablono$core$datetime_field15882(var_args){
var G__15884 = arguments.length;
switch (G__15884) {
case 1:
return sablono.core.datetime_field15882.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field15882.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field15882.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15807__auto__);
});

sablono.core.datetime_field15882.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.datetime_field15882.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field15882);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field15885 = (function sablono$core$datetime_local_field15885(var_args){
var G__15887 = arguments.length;
switch (G__15887) {
case 1:
return sablono.core.datetime_local_field15885.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field15885.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field15885.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15807__auto__);
});

sablono.core.datetime_local_field15885.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.datetime_local_field15885.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field15885);

/**
 * Creates a email input field.
 */
sablono.core.email_field15888 = (function sablono$core$email_field15888(var_args){
var G__15890 = arguments.length;
switch (G__15890) {
case 1:
return sablono.core.email_field15888.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field15888.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field15888.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15807__auto__);
});

sablono.core.email_field15888.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.email_field15888.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field15888);

/**
 * Creates a file input field.
 */
sablono.core.file_field15891 = (function sablono$core$file_field15891(var_args){
var G__15893 = arguments.length;
switch (G__15893) {
case 1:
return sablono.core.file_field15891.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field15891.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field15891.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15807__auto__);
});

sablono.core.file_field15891.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.file_field15891.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field15891);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field15894 = (function sablono$core$hidden_field15894(var_args){
var G__15896 = arguments.length;
switch (G__15896) {
case 1:
return sablono.core.hidden_field15894.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field15894.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field15894.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15807__auto__);
});

sablono.core.hidden_field15894.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.hidden_field15894.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field15894);

/**
 * Creates a month input field.
 */
sablono.core.month_field15897 = (function sablono$core$month_field15897(var_args){
var G__15899 = arguments.length;
switch (G__15899) {
case 1:
return sablono.core.month_field15897.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field15897.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field15897.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15807__auto__);
});

sablono.core.month_field15897.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.month_field15897.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field15897);

/**
 * Creates a number input field.
 */
sablono.core.number_field15900 = (function sablono$core$number_field15900(var_args){
var G__15902 = arguments.length;
switch (G__15902) {
case 1:
return sablono.core.number_field15900.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field15900.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field15900.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15807__auto__);
});

sablono.core.number_field15900.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.number_field15900.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field15900);

/**
 * Creates a password input field.
 */
sablono.core.password_field15903 = (function sablono$core$password_field15903(var_args){
var G__15905 = arguments.length;
switch (G__15905) {
case 1:
return sablono.core.password_field15903.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field15903.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field15903.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15807__auto__);
});

sablono.core.password_field15903.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.password_field15903.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field15903);

/**
 * Creates a range input field.
 */
sablono.core.range_field15906 = (function sablono$core$range_field15906(var_args){
var G__15908 = arguments.length;
switch (G__15908) {
case 1:
return sablono.core.range_field15906.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field15906.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field15906.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15807__auto__);
});

sablono.core.range_field15906.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.range_field15906.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field15906);

/**
 * Creates a search input field.
 */
sablono.core.search_field15909 = (function sablono$core$search_field15909(var_args){
var G__15911 = arguments.length;
switch (G__15911) {
case 1:
return sablono.core.search_field15909.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field15909.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field15909.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15807__auto__);
});

sablono.core.search_field15909.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.search_field15909.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field15909);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field15912 = (function sablono$core$tel_field15912(var_args){
var G__15914 = arguments.length;
switch (G__15914) {
case 1:
return sablono.core.tel_field15912.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field15912.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field15912.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15807__auto__);
});

sablono.core.tel_field15912.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.tel_field15912.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field15912);

/**
 * Creates a text input field.
 */
sablono.core.text_field15915 = (function sablono$core$text_field15915(var_args){
var G__15917 = arguments.length;
switch (G__15917) {
case 1:
return sablono.core.text_field15915.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field15915.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field15915.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15807__auto__);
});

sablono.core.text_field15915.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.text_field15915.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field15915);

/**
 * Creates a time input field.
 */
sablono.core.time_field15918 = (function sablono$core$time_field15918(var_args){
var G__15920 = arguments.length;
switch (G__15920) {
case 1:
return sablono.core.time_field15918.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field15918.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field15918.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15807__auto__);
});

sablono.core.time_field15918.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.time_field15918.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field15918);

/**
 * Creates a url input field.
 */
sablono.core.url_field15921 = (function sablono$core$url_field15921(var_args){
var G__15923 = arguments.length;
switch (G__15923) {
case 1:
return sablono.core.url_field15921.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field15921.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field15921.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15807__auto__);
});

sablono.core.url_field15921.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.url_field15921.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field15921);

/**
 * Creates a week input field.
 */
sablono.core.week_field15924 = (function sablono$core$week_field15924(var_args){
var G__15926 = arguments.length;
switch (G__15926) {
case 1:
return sablono.core.week_field15924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field15924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field15924.cljs$core$IFn$_invoke$arity$1 = (function (name__15807__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15807__auto__);
});

sablono.core.week_field15924.cljs$core$IFn$_invoke$arity$2 = (function (name__15807__auto__,value__15808__auto__){
return sablono.core.input_field_STAR_.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null)),name__15807__auto__,value__15808__auto__);
});

sablono.core.week_field15924.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field15924);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box15944 = (function sablono$core$check_box15944(var_args){
var G__15946 = arguments.length;
switch (G__15946) {
case 1:
return sablono.core.check_box15944.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box15944.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box15944.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box15944.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.check_box15944.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box15944.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box15944.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box15944);
/**
 * Creates a radio button.
 */
sablono.core.radio_button15948 = (function sablono$core$radio_button15948(var_args){
var G__15950 = arguments.length;
switch (G__15950) {
case 1:
return sablono.core.radio_button15948.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button15948.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button15948.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button15948.cljs$core$IFn$_invoke$arity$1 = (function (group){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group))], null)], null);
});

sablono.core.radio_button15948.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,sablono.util.as_str.call(null,group)),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button15948.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button15948.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button15948);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options15952 = (function sablono$core$select_options15952(coll){
var iter__4434__auto__ = (function sablono$core$select_options15952_$_iter__15953(s__15954){
return (new cljs.core.LazySeq(null,(function (){
var s__15954__$1 = s__15954;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15954__$1);
if(temp__5720__auto__){
var s__15954__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15954__$2)){
var c__4432__auto__ = cljs.core.chunk_first.call(null,s__15954__$2);
var size__4433__auto__ = cljs.core.count.call(null,c__4432__auto__);
var b__15956 = cljs.core.chunk_buffer.call(null,size__4433__auto__);
if((function (){var i__15955 = (0);
while(true){
if((i__15955 < size__4433__auto__)){
var x = cljs.core._nth.call(null,c__4432__auto__,i__15955);
cljs.core.chunk_append.call(null,b__15956,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15957 = x;
var text = cljs.core.nth.call(null,vec__15957,(0),null);
var val = cljs.core.nth.call(null,vec__15957,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15957,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options15952.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__15963 = (i__15955 + (1));
i__15955 = G__15963;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15956),sablono$core$select_options15952_$_iter__15953.call(null,cljs.core.chunk_rest.call(null,s__15954__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15956),null);
}
} else {
var x = cljs.core.first.call(null,s__15954__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__15960 = x;
var text = cljs.core.nth.call(null,vec__15960,(0),null);
var val = cljs.core.nth.call(null,vec__15960,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__15960,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options15952.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options15952_$_iter__15953.call(null,cljs.core.rest.call(null,s__15954__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4434__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options15952);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down15964 = (function sablono$core$drop_down15964(var_args){
var G__15966 = arguments.length;
switch (G__15966) {
case 2:
return sablono.core.drop_down15964.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down15964.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down15964.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down15964.call(null,name,options,null);
});

sablono.core.drop_down15964.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down15964.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down15964);
/**
 * Creates a text area element.
 */
sablono.core.text_area15968 = (function sablono$core$text_area15968(var_args){
var G__15970 = arguments.length;
switch (G__15970) {
case 1:
return sablono.core.text_area15968.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area15968.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area15968.cljs$core$IFn$_invoke$arity$1 = (function (name){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null)], null);
});

sablono.core.text_area15968.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__4047__auto__ = value;
if(cljs.core.truth_(or__4047__auto__)){
return or__4047__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area15968.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area15968);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label15972 = (function sablono$core$label15972(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label15972);
/**
 * Creates a submit button.
 */
sablono.core.submit_button15973 = (function sablono$core$submit_button15973(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button15973);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button15974 = (function sablono$core$reset_button15974(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button15974);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to15975 = (function sablono$core$form_to15975(var_args){
var args__4647__auto__ = [];
var len__4641__auto___15982 = arguments.length;
var i__4642__auto___15983 = (0);
while(true){
if((i__4642__auto___15983 < len__4641__auto___15982)){
args__4647__auto__.push((arguments[i__4642__auto___15983]));

var G__15984 = (i__4642__auto___15983 + (1));
i__4642__auto___15983 = G__15984;
continue;
} else {
}
break;
}

var argseq__4648__auto__ = ((((1) < args__4647__auto__.length))?(new cljs.core.IndexedSeq(args__4647__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to15975.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4648__auto__);
});

sablono.core.form_to15975.cljs$core$IFn$_invoke$arity$variadic = (function (p__15978,body){
var vec__15979 = p__15978;
var method = cljs.core.nth.call(null,vec__15979,(0),null);
var action = cljs.core.nth.call(null,vec__15979,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to15975.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
sablono.core.form_to15975.cljs$lang$applyTo = (function (seq15976){
var G__15977 = cljs.core.first.call(null,seq15976);
var seq15976__$1 = cljs.core.next.call(null,seq15976);
var self__4628__auto__ = this;
return self__4628__auto__.cljs$core$IFn$_invoke$arity$variadic(G__15977,seq15976__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to15975);

//# sourceMappingURL=core.js.map
