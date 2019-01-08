// Compiled by ClojureScript 1.10.339 {}
goog.provide('re_com.typeahead');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('re_com.misc');
goog.require('re_com.util');
goog.require('re_com.popover');
goog.require('re_com.box');
goog.require('re_com.validate');
goog.require('reagent.core');
goog.require('goog.events.KeyCodes');

/**
 * Return an initial value for the typeahead state, given `args`.
 */
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__15096){
var map__15097 = p__15096;
var map__15097__$1 = ((((!((map__15097 == null)))?(((((map__15097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15097):map__15097);
var args = map__15097__$1;
var on_change = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var data_source = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__15097__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__15099 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__3949__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__15099,external_model_value);
} else {
return G__15099;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__15100,event){
var map__15101 = p__15100;
var map__15101__$1 = ((((!((map__15101 == null)))?(((((map__15101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15101):map__15101);
var state = map__15101__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__15101__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__15101__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__15103 = event;
var G__15103__$1 = (((G__15103 instanceof cljs.core.Keyword))?G__15103.fqn:null);
switch (G__15103__$1) {
case "input-text-blurred":
var and__3938__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__3938__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__3938__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
return cljs.core.not.call(null,(function (){var or__3949__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return rigid_QMARK___$1;
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15103__$1)].join('')));

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__15105,event){
var map__15106 = p__15105;
var map__15106__$1 = ((((!((map__15106 == null)))?(((((map__15106.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15106.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15106):map__15106);
var state = map__15106__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__15106__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__15108 = event;
var G__15108__$1 = (((G__15108 instanceof cljs.core.Keyword))?G__15108.fqn:null);
switch (G__15108__$1) {
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
default:
return false;

}
});
/**
 * Change the `typeahead` `model` value to `new-value`
 */
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__15110,new_value){
var map__15111 = p__15110;
var map__15111__$1 = ((((!((map__15111 == null)))?(((((map__15111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15111):map__15111);
var state = map__15111__$1;
var on_change = cljs.core.get.call(null,map__15111__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__15113,suggestion){
var map__15114 = p__15113;
var map__15114__$1 = ((((!((map__15114 == null)))?(((((map__15114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15114):map__15114);
var state = map__15114__$1;
var suggestion_to_string = cljs.core.get.call(null,map__15114__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__15116 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__15116,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__15116;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__15117,index){
var map__15118 = p__15117;
var map__15118__$1 = ((((!((map__15118 == null)))?(((((map__15118.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15118.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15118):map__15118);
var state = map__15118__$1;
var suggestions = cljs.core.get.call(null,map__15118__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__15120 = state;
var G__15120__$1 = cljs.core.assoc.call(null,G__15120,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__15120__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__15120__$1,suggestion):G__15120__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__15120__$2,suggestion);
} else {
return G__15120__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__15121,index){
var map__15122 = p__15121;
var map__15122__$1 = ((((!((map__15122 == null)))?(((((map__15122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15122):map__15122);
var state = map__15122__$1;
var suggestions = cljs.core.get.call(null,map__15122__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__15124){
var map__15125 = p__15124;
var map__15125__$1 = ((((!((map__15125 == null)))?(((((map__15125.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15125.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15125):map__15125);
var state = map__15125__$1;
var suggestion_active_index = cljs.core.get.call(null,map__15125__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__15127 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__15127,suggestion_active_index);
} else {
return G__15127;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__15128){
var map__15129 = p__15128;
var map__15129__$1 = ((((!((map__15129 == null)))?(((((map__15129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15129):map__15129);
var state = map__15129__$1;
var suggestions = cljs.core.get.call(null,map__15129__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__15129__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__15131 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__15131,re_com.typeahead.wrap.call(null,((function (){var or__3949__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__15131;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__15132){
var map__15133 = p__15132;
var map__15133__$1 = ((((!((map__15133 == null)))?(((((map__15133.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15133.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15133):map__15133);
var state = map__15133__$1;
var suggestions = cljs.core.get.call(null,map__15133__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__15133__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__15135 = state;
if(cljs.core.truth_(suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__15135,re_com.typeahead.wrap.call(null,((function (){var or__3949__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__15135;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__15136 = state;
var G__15136__$1 = re_com.typeahead.clear_suggestions.call(null,G__15136)
;
var G__15136__$2 = cljs.core.assoc.call(null,G__15136__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__15136__$2,null);
} else {
return G__15136__$2;
}
});
/**
 * Update state when new suggestions are available
 */
re_com.typeahead.got_suggestions = (function re_com$typeahead$got_suggestions(state,suggestions){
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),suggestions,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),null);
});
/**
 * Update state when the `input-text` is about to lose focus.
 */
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__15137){
var map__15138 = p__15137;
var map__15138__$1 = ((((!((map__15138 == null)))?(((((map__15138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15138):map__15138);
var state = map__15138__$1;
var input_text = cljs.core.get.call(null,map__15138__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__15138__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var G__15140 = state;
if(cljs.core.truth_((function (){var and__3938__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__3938__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__3938__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,G__15140,input_text);
} else {
return G__15140;
}
});
/**
 * Update `state` given a new `data-source`. Resets the typeahead since any existing suggestions
 *   came from the old `data-source`.
 */
re_com.typeahead.change_data_source = (function re_com$typeahead$change_data_source(state,data_source){
return cljs.core.assoc.call(null,re_com.typeahead.reset_typeahead.call(null,state),new cljs.core.Keyword(null,"data-source","data-source",-658934676),data_source);
});
/**
 * Update state when the external model value has changed.
 */
re_com.typeahead.external_model_changed = (function re_com$typeahead$external_model_changed(state,new_value){
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,state,new_value),new_value));
});
/**
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5718__auto__ = data_source.call(null,text,(function (p1__15141_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__15141_SHARP_);
}));
if(cljs.core.truth_(temp__5718__auto__)){
var return_value = temp__5718__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__12802__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto__){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto__){
return (function (state_15158){
var state_val_15159 = (state_15158[(1)]);
if((state_val_15159 === (1))){
var state_15158__$1 = state_15158;
var statearr_15160_15172 = state_15158__$1;
(statearr_15160_15172[(2)] = null);

(statearr_15160_15172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (2))){
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15158__$1,(4),c_search);
} else {
if((state_val_15159 === (3))){
var inst_15156 = (state_15158[(2)]);
var state_15158__$1 = state_15158;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15158__$1,inst_15156);
} else {
if((state_val_15159 === (4))){
var inst_15144 = (state_15158[(7)]);
var inst_15144__$1 = (state_15158[(2)]);
var inst_15145 = cljs.core.deref.call(null,state_atom);
var inst_15146 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_15145);
var inst_15147 = cljs.core._EQ_.call(null,"",inst_15144__$1);
var state_15158__$1 = (function (){var statearr_15161 = state_15158;
(statearr_15161[(8)] = inst_15146);

(statearr_15161[(7)] = inst_15144__$1);

return statearr_15161;
})();
if(inst_15147){
var statearr_15162_15173 = state_15158__$1;
(statearr_15162_15173[(1)] = (5));

} else {
var statearr_15163_15174 = state_15158__$1;
(statearr_15163_15174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (5))){
var inst_15149 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var state_15158__$1 = state_15158;
var statearr_15164_15175 = state_15158__$1;
(statearr_15164_15175[(2)] = inst_15149);

(statearr_15164_15175[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (6))){
var inst_15146 = (state_15158[(8)]);
var inst_15144 = (state_15158[(7)]);
var inst_15151 = re_com.typeahead.search_data_source_BANG_.call(null,inst_15146,state_atom,inst_15144);
var state_15158__$1 = state_15158;
var statearr_15165_15176 = state_15158__$1;
(statearr_15165_15176[(2)] = inst_15151);

(statearr_15165_15176[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15159 === (7))){
var inst_15153 = (state_15158[(2)]);
var state_15158__$1 = (function (){var statearr_15166 = state_15158;
(statearr_15166[(9)] = inst_15153);

return statearr_15166;
})();
var statearr_15167_15177 = state_15158__$1;
(statearr_15167_15177[(2)] = null);

(statearr_15167_15177[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__12802__auto__))
;
return ((function (switch__12711__auto__,c__12802__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto____0 = (function (){
var statearr_15168 = [null,null,null,null,null,null,null,null,null,null];
(statearr_15168[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto__);

(statearr_15168[(1)] = (1));

return statearr_15168;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto____1 = (function (state_15158){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_15158);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e15169){if((e15169 instanceof Object)){
var ex__12715__auto__ = e15169;
var statearr_15170_15178 = state_15158;
(statearr_15170_15178[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15179 = state_15158;
state_15158 = G__15179;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto__ = function(state_15158){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto____1.call(this,state_15158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto__))
})();
var state__12804__auto__ = (function (){var statearr_15171 = f__12803__auto__.call(null);
(statearr_15171[(6)] = c__12802__auto__);

return statearr_15171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto__))
);

return c__12802__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__15181 = cljs.core.deref.call(null,state_atom);
var map__15181__$1 = ((((!((map__15181 == null)))?(((((map__15181.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15181.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15181):map__15181);
var state = map__15181__$1;
var input_text = cljs.core.get.call(null,map__15181__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__15181__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
if(clojure.string.blank_QMARK_.call(null,new_text)){
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);
}

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__15181,map__15181__$1,state,input_text,c_input){
return (function (p1__15180_SHARP_){
var G__15183 = p1__15180_SHARP_;
var G__15183__$1 = cljs.core.assoc.call(null,G__15183,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__15183__$1,new_text);
} else {
return G__15183__$1;
}
});})(map__15181,map__15181__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__15184 = cljs.core._EQ_;
var expr__15185 = event.which;
if(cljs.core.truth_(pred__15184.call(null,goog.events.KeyCodes.UP,expr__15185))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__15184.call(null,goog.events.KeyCodes.DOWN,expr__15185))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__15184.call(null,goog.events.KeyCodes.ENTER,expr__15185))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__15184.call(null,goog.events.KeyCodes.ESC,expr__15185))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
} else {
if(cljs.core.truth_(pred__15184.call(null,goog.events.KeyCodes.TAB,expr__15185))){
if(cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,state_atom))))){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);

return event.preventDefault();
} else {
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
}
} else {
return true;
}
}
}
}
}
});
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 18, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"The initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"After receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"When a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4534__auto__ = [];
var len__4531__auto___15209 = arguments.length;
var i__4532__auto___15210 = (0);
while(true){
if((i__4532__auto___15210 < len__4531__auto___15209)){
args__4534__auto__.push((arguments[i__4532__auto___15210]));

var G__15211 = (i__4532__auto___15210 + (1));
i__4532__auto___15210 = G__15211;
continue;
} else {
}
break;
}

var argseq__4535__auto__ = ((((0) < args__4534__auto__.length))?(new cljs.core.IndexedSeq(args__4534__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4535__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__15189){
var map__15190 = p__15189;
var map__15190__$1 = ((((!((map__15190 == null)))?(((((map__15190.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15190.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15190):map__15190);
var args = map__15190__$1;
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__15192 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__15192__$1 = ((((!((map__15192 == null)))?(((((map__15192.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15192.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15192):map__15192);
var state = map__15192__$1;
var c_search = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__15192__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args){
return (function() { 
var G__15212__delegate = function (p__15194){
var map__15195 = p__15194;
var map__15195__$1 = ((((!((map__15195 == null)))?(((((map__15195.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15195.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15195):map__15195);
var args__$1 = map__15195__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var _on_change = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var status = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var _attr = cljs.core.get.call(null,map__15195__$1,new cljs.core.Keyword(null,"_attr","_attr",299438964));
if(cljs.core.truth_(((!(goog.DEBUG))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead")))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__15197 = cljs.core.deref.call(null,state_atom);
var map__15197__$1 = ((((!((map__15197 == null)))?(((((map__15197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15197):map__15197);
var state__$1 = map__15197__$1;
var suggestions = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var external_model = cljs.core.get.call(null,map__15197__$1,new cljs.core.Keyword(null,"external-model","external-model",506095421));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var latest_external_model = re_com.util.deref_or_value.call(null,model);
var width__$1 = (function (){var or__3949__auto__ = width;
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

if(cljs.core.not_EQ_.call(null,latest_external_model,external_model)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.external_model_changed,latest_external_model);
} else {
}

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom)], null)], null),(cljs.core.truth_((function (){var or__3949__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__3949__auto__)){
return or__3949__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4324__auto__ = ((function (map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args){
return (function re_com$typeahead$iter__15199(s__15200){
return (new cljs.core.LazySeq(null,((function (map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args){
return (function (){
var s__15200__$1 = s__15200;
while(true){
var temp__5720__auto__ = cljs.core.seq.call(null,s__15200__$1);
if(temp__5720__auto__){
var s__15200__$2 = temp__5720__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__15200__$2)){
var c__4322__auto__ = cljs.core.chunk_first.call(null,s__15200__$2);
var size__4323__auto__ = cljs.core.count.call(null,c__4322__auto__);
var b__15202 = cljs.core.chunk_buffer.call(null,size__4323__auto__);
if((function (){var i__15201 = (0);
while(true){
if((i__15201 < size__4323__auto__)){
var vec__15203 = cljs.core._nth.call(null,c__4322__auto__,i__15201);
var i = cljs.core.nth.call(null,vec__15203,(0),null);
var s = cljs.core.nth.call(null,vec__15203,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__15202,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__15201,selected_QMARK_,vec__15203,i,s,c__4322__auto__,size__4323__auto__,b__15202,s__15200__$2,temp__5720__auto__,map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__15201,selected_QMARK_,vec__15203,i,s,c__4322__auto__,size__4323__auto__,b__15202,s__15200__$2,temp__5720__auto__,map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__15201,selected_QMARK_,vec__15203,i,s,c__4322__auto__,size__4323__auto__,b__15202,s__15200__$2,temp__5720__auto__,map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args){
return (function (p1__15187_SHARP_){
p1__15187_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__15201,selected_QMARK_,vec__15203,i,s,c__4322__auto__,size__4323__auto__,b__15202,s__15200__$2,temp__5720__auto__,map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__15213 = (i__15201 + (1));
i__15201 = G__15213;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15202),re_com$typeahead$iter__15199.call(null,cljs.core.chunk_rest.call(null,s__15200__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15202),null);
}
} else {
var vec__15206 = cljs.core.first.call(null,s__15200__$2);
var i = cljs.core.nth.call(null,vec__15206,(0),null);
var s = cljs.core.nth.call(null,vec__15206,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((selected_QMARK_)?" active":null))].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__15206,i,s,s__15200__$2,temp__5720__auto__,map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__15206,i,s,s__15200__$2,temp__5720__auto__,map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__15206,i,s,s__15200__$2,temp__5720__auto__,map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args){
return (function (p1__15187_SHARP_){
p1__15187_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__15206,i,s,s__15200__$2,temp__5720__auto__,map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__15199.call(null,cljs.core.rest.call(null,s__15200__$2)));
}
} else {
return null;
}
break;
}
});})(map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args))
,null,null));
});})(map__15197,map__15197__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,external_model,last_data_source,latest_external_model,width__$1,map__15195,map__15195__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,status,class$,_attr,map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args))
;
return iter__4324__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__15212 = function (var_args){
var p__15194 = null;
if (arguments.length > 0) {
var G__15214__i = 0, G__15214__a = new Array(arguments.length -  0);
while (G__15214__i < G__15214__a.length) {G__15214__a[G__15214__i] = arguments[G__15214__i + 0]; ++G__15214__i;}
  p__15194 = new cljs.core.IndexedSeq(G__15214__a,0,null);
} 
return G__15212__delegate.call(this,p__15194);};
G__15212.cljs$lang$maxFixedArity = 0;
G__15212.cljs$lang$applyTo = (function (arglist__15215){
var p__15194 = cljs.core.seq(arglist__15215);
return G__15212__delegate(p__15194);
});
G__15212.cljs$core$IFn$_invoke$arity$variadic = G__15212__delegate;
return G__15212;
})()
;
;})(map__15192,map__15192__$1,state,c_search,c_input,state_atom,input_text_model,map__15190,map__15190__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq15188){
var self__4519__auto__ = this;
return self__4519__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq15188));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__12802__auto___15296 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__12802__auto___15296,out){
return (function (){
var f__12803__auto__ = (function (){var switch__12711__auto__ = ((function (c__12802__auto___15296,out){
return (function (state_15266){
var state_val_15267 = (state_15266[(1)]);
if((state_val_15267 === (7))){
var inst_15221 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15268_15297 = state_15266__$1;
(statearr_15268_15297[(2)] = inst_15221);

(statearr_15268_15297[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (1))){
var inst_15216 = null;
var state_15266__$1 = (function (){var statearr_15269 = state_15266;
(statearr_15269[(7)] = inst_15216);

return statearr_15269;
})();
var statearr_15270_15298 = state_15266__$1;
(statearr_15270_15298[(2)] = null);

(statearr_15270_15298[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (4))){
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15266__$1,(7),in$);
} else {
if((state_val_15267 === (15))){
var inst_15251 = (state_15266[(2)]);
var state_15266__$1 = (function (){var statearr_15271 = state_15266;
(statearr_15271[(8)] = inst_15251);

return statearr_15271;
})();
var statearr_15272_15299 = state_15266__$1;
(statearr_15272_15299[(2)] = null);

(statearr_15272_15299[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (13))){
var inst_15239 = (state_15266[(9)]);
var inst_15253 = cljs.core._EQ_.call(null,inst_15239,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_15266__$1 = state_15266;
if(inst_15253){
var statearr_15273_15300 = state_15266__$1;
(statearr_15273_15300[(1)] = (16));

} else {
var statearr_15274_15301 = state_15266__$1;
(statearr_15274_15301[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (6))){
var inst_15225 = (state_15266[(10)]);
var inst_15224 = (state_15266[(2)]);
var inst_15225__$1 = cljs.core.async.timeout.call(null,ms);
var inst_15233 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_15234 = [in$,inst_15225__$1];
var inst_15235 = (new cljs.core.PersistentVector(null,2,(5),inst_15233,inst_15234,null));
var state_15266__$1 = (function (){var statearr_15275 = state_15266;
(statearr_15275[(11)] = inst_15224);

(statearr_15275[(10)] = inst_15225__$1);

return statearr_15275;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15266__$1,(8),inst_15235);
} else {
if((state_val_15267 === (17))){
var state_15266__$1 = state_15266;
var statearr_15276_15302 = state_15266__$1;
(statearr_15276_15302[(2)] = null);

(statearr_15276_15302[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (3))){
var inst_15264 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15266__$1,inst_15264);
} else {
if((state_val_15267 === (12))){
var inst_15224 = (state_15266[(11)]);
var state_15266__$1 = state_15266;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15266__$1,(15),out,inst_15224);
} else {
if((state_val_15267 === (2))){
var inst_15216 = (state_15266[(7)]);
var inst_15218 = (inst_15216 == null);
var state_15266__$1 = state_15266;
if(cljs.core.truth_(inst_15218)){
var statearr_15277_15303 = state_15266__$1;
(statearr_15277_15303[(1)] = (4));

} else {
var statearr_15278_15304 = state_15266__$1;
(statearr_15278_15304[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (11))){
var inst_15261 = (state_15266[(2)]);
var inst_15216 = inst_15261;
var state_15266__$1 = (function (){var statearr_15279 = state_15266;
(statearr_15279[(7)] = inst_15216);

return statearr_15279;
})();
var statearr_15280_15305 = state_15266__$1;
(statearr_15280_15305[(2)] = null);

(statearr_15280_15305[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (9))){
var inst_15237 = (state_15266[(12)]);
var inst_15245 = cljs.core.nth.call(null,inst_15237,(0),null);
var inst_15246 = cljs.core.nth.call(null,inst_15237,(1),null);
var state_15266__$1 = (function (){var statearr_15281 = state_15266;
(statearr_15281[(13)] = inst_15246);

return statearr_15281;
})();
var statearr_15282_15306 = state_15266__$1;
(statearr_15282_15306[(2)] = inst_15245);

(statearr_15282_15306[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (5))){
var inst_15216 = (state_15266[(7)]);
var state_15266__$1 = state_15266;
var statearr_15283_15307 = state_15266__$1;
(statearr_15283_15307[(2)] = inst_15216);

(statearr_15283_15307[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (14))){
var inst_15259 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15284_15308 = state_15266__$1;
(statearr_15284_15308[(2)] = inst_15259);

(statearr_15284_15308[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (16))){
var inst_15238 = (state_15266[(14)]);
var state_15266__$1 = state_15266;
var statearr_15285_15309 = state_15266__$1;
(statearr_15285_15309[(2)] = inst_15238);

(statearr_15285_15309[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (10))){
var inst_15225 = (state_15266[(10)]);
var inst_15239 = (state_15266[(9)]);
var inst_15248 = cljs.core._EQ_.call(null,inst_15239,inst_15225);
var state_15266__$1 = state_15266;
if(inst_15248){
var statearr_15286_15310 = state_15266__$1;
(statearr_15286_15310[(1)] = (12));

} else {
var statearr_15287_15311 = state_15266__$1;
(statearr_15287_15311[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (18))){
var inst_15257 = (state_15266[(2)]);
var state_15266__$1 = state_15266;
var statearr_15288_15312 = state_15266__$1;
(statearr_15288_15312[(2)] = inst_15257);

(statearr_15288_15312[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15267 === (8))){
var inst_15237 = (state_15266[(12)]);
var inst_15239 = (state_15266[(9)]);
var inst_15237__$1 = (state_15266[(2)]);
var inst_15238 = cljs.core.nth.call(null,inst_15237__$1,(0),null);
var inst_15239__$1 = cljs.core.nth.call(null,inst_15237__$1,(1),null);
var inst_15240 = cljs.core._EQ_.call(null,inst_15239__$1,in$);
var state_15266__$1 = (function (){var statearr_15289 = state_15266;
(statearr_15289[(14)] = inst_15238);

(statearr_15289[(12)] = inst_15237__$1);

(statearr_15289[(9)] = inst_15239__$1);

return statearr_15289;
})();
if(inst_15240){
var statearr_15290_15313 = state_15266__$1;
(statearr_15290_15313[(1)] = (9));

} else {
var statearr_15291_15314 = state_15266__$1;
(statearr_15291_15314[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__12802__auto___15296,out))
;
return ((function (switch__12711__auto__,c__12802__auto___15296,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__12712__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__12712__auto____0 = (function (){
var statearr_15292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15292[(0)] = re_com$typeahead$debounce_$_state_machine__12712__auto__);

(statearr_15292[(1)] = (1));

return statearr_15292;
});
var re_com$typeahead$debounce_$_state_machine__12712__auto____1 = (function (state_15266){
while(true){
var ret_value__12713__auto__ = (function (){try{while(true){
var result__12714__auto__ = switch__12711__auto__.call(null,state_15266);
if(cljs.core.keyword_identical_QMARK_.call(null,result__12714__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__12714__auto__;
}
break;
}
}catch (e15293){if((e15293 instanceof Object)){
var ex__12715__auto__ = e15293;
var statearr_15294_15315 = state_15266;
(statearr_15294_15315[(5)] = ex__12715__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15266);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15293;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__12713__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15316 = state_15266;
state_15266 = G__15316;
continue;
} else {
return ret_value__12713__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__12712__auto__ = function(state_15266){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__12712__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__12712__auto____1.call(this,state_15266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__12712__auto____0;
re_com$typeahead$debounce_$_state_machine__12712__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__12712__auto____1;
return re_com$typeahead$debounce_$_state_machine__12712__auto__;
})()
;})(switch__12711__auto__,c__12802__auto___15296,out))
})();
var state__12804__auto__ = (function (){var statearr_15295 = f__12803__auto__.call(null);
(statearr_15295[(6)] = c__12802__auto___15296);

return statearr_15295;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__12804__auto__);
});})(c__12802__auto___15296,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map
