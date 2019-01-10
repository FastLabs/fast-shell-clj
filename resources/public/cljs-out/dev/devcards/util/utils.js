// Compiled by ClojureScript 1.10.439 {}
goog.provide('devcards.util.utils');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('cljs.pprint');
devcards.util.utils.html_env_QMARK_ = (function devcards$util$utils$html_env_QMARK_(){
var temp__5718__auto__ = goog.global.document;
if(cljs.core.truth_(temp__5718__auto__)){
var doc = temp__5718__auto__;
return goog.object.get(doc,"write");
} else {
return null;
}
});
devcards.util.utils.node_env_QMARK_ = (function devcards$util$utils$node_env_QMARK_(){
return (!((goog.nodeGlobalRequire == null)));
});
devcards.util.utils.pprint_str = (function devcards$util$utils$pprint_str(obj){
try{var sb__4572__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__8421_8425 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__8422_8426 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__8423_8427 = true;
var _STAR_print_fn_STAR__temp_val__8424_8428 = ((function (_STAR_print_newline_STAR__orig_val__8421_8425,_STAR_print_fn_STAR__orig_val__8422_8426,_STAR_print_newline_STAR__temp_val__8423_8427,sb__4572__auto__){
return (function (x__4573__auto__){
return sb__4572__auto__.append(x__4573__auto__);
});})(_STAR_print_newline_STAR__orig_val__8421_8425,_STAR_print_fn_STAR__orig_val__8422_8426,_STAR_print_newline_STAR__temp_val__8423_8427,sb__4572__auto__))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__8423_8427;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__8424_8428;

try{cljs.pprint.pprint.call(null,obj);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__8422_8426;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__8421_8425;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4572__auto__);
}catch (e8419){if((e8419 instanceof Error)){
var e1 = e8419;
try{return obj.toString();
}catch (e8420){if((e8420 instanceof Error)){
var e2 = e8420;
return "<<Un-printable Type>>";
} else {
throw e8420;

}
}} else {
throw e8419;

}
}});
devcards.util.utils.pprint_code = (function devcards$util$utils$pprint_code(code){
var _STAR_print_pprint_dispatch_STAR__orig_val__8429 = cljs.pprint._STAR_print_pprint_dispatch_STAR_;
var _STAR_print_pprint_dispatch_STAR__temp_val__8430 = cljs.pprint.code_dispatch;
cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__temp_val__8430;

try{return devcards.util.utils.pprint_str.call(null,code);
}finally {cljs.pprint._STAR_print_pprint_dispatch_STAR_ = _STAR_print_pprint_dispatch_STAR__orig_val__8429;
}});

//# sourceMappingURL=utils.js.map
