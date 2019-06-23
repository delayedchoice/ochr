// Compiled by ClojureScript 1.10.520 {}
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
re_com.typeahead.make_typeahead_state = (function re_com$typeahead$make_typeahead_state(p__34562){
var map__34563 = p__34562;
var map__34563__$1 = (((((!((map__34563 == null))))?(((((map__34563.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34563.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34563):map__34563);
var args = map__34563__$1;
var on_change = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var rigid_QMARK_ = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var data_source = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var suggestion_to_string = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var debounce_delay = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982));
var model = cljs.core.get.call(null,map__34563__$1,new cljs.core.Keyword(null,"model","model",331153215));
var external_model_value = re_com.util.deref_or_value.call(null,model);
var G__34565 = (function (){var c_input = cljs.core.async.chan.call(null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"c-search","c-search",1832536180),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"c-input","c-input",-1821004232),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"external-model","external-model",506095421),new cljs.core.Keyword(null,"model","model",331153215)],[false,(function (){var or__4131__auto__ = suggestion_to_string;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.str;
}
})(),false,"",rigid_QMARK_,data_source,immediate_model_update_QMARK_,re_com.typeahead.debounce.call(null,c_input,debounce_delay),change_on_blur_QMARK_,cljs.core.PersistentVector.EMPTY,c_input,on_change,re_com.util.deref_or_value.call(null,model),re_com.util.deref_or_value.call(null,model)]);
})();
if(cljs.core.truth_(external_model_value)){
return re_com.typeahead.display_suggestion.call(null,G__34565,external_model_value);
} else {
return G__34565;
}
});
/**
 * Should `event` update the `typeahead` `model`?
 */
re_com.typeahead.event_updates_model_QMARK_ = (function re_com$typeahead$event_updates_model_QMARK_(p__34566,event){
var map__34567 = p__34566;
var map__34567__$1 = (((((!((map__34567 == null))))?(((((map__34567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34567):map__34567);
var state = map__34567__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__34567__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var rigid_QMARK_ = cljs.core.get.call(null,map__34567__$1,new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118));
var immediate_model_update_QMARK_ = cljs.core.get.call(null,map__34567__$1,new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var immediate_model_update_QMARK___$1 = re_com.util.deref_or_value.call(null,immediate_model_update_QMARK_);
var rigid_QMARK___$1 = re_com.util.deref_or_value.call(null,rigid_QMARK_);
var G__34569 = event;
var G__34569__$1 = (((G__34569 instanceof cljs.core.Keyword))?G__34569.fqn:null);
switch (G__34569__$1) {
case "input-text-blurred":
var and__4120__auto__ = change_on_blur_QMARK___$1;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,rigid_QMARK___$1);
} else {
return and__4120__auto__;
}

break;
case "suggestion-activated":
return cljs.core.not.call(null,change_on_blur_QMARK___$1);

break;
case "input-text-changed":
var and__4120__auto__ = cljs.core.not.call(null,rigid_QMARK___$1);
if(and__4120__auto__){
var or__4131__auto__ = cljs.core.not.call(null,change_on_blur_QMARK___$1);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return immediate_model_update_QMARK___$1;
}
} else {
return and__4120__auto__;
}

break;
default:
return false;

}
});
/**
 * Should `event` cause the `input-text` value to be used to show the active suggestion?
 */
re_com.typeahead.event_displays_suggestion_QMARK_ = (function re_com$typeahead$event_displays_suggestion_QMARK_(p__34571,event){
var map__34572 = p__34571;
var map__34572__$1 = (((((!((map__34572 == null))))?(((((map__34572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34572):map__34572);
var state = map__34572__$1;
var change_on_blur_QMARK_ = cljs.core.get.call(null,map__34572__$1,new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925));
var change_on_blur_QMARK___$1 = re_com.util.deref_or_value.call(null,change_on_blur_QMARK_);
var G__34574 = event;
var G__34574__$1 = (((G__34574 instanceof cljs.core.Keyword))?G__34574.fqn:null);
switch (G__34574__$1) {
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
re_com.typeahead.update_model = (function re_com$typeahead$update_model(p__34576,new_value){
var map__34577 = p__34576;
var map__34577__$1 = (((((!((map__34577 == null))))?(((((map__34577.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34577.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34577):map__34577);
var state = map__34577__$1;
var on_change = cljs.core.get.call(null,map__34577__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
if(cljs.core.truth_(on_change)){
on_change.call(null,new_value);
} else {
}

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"model","model",331153215),new_value);
});
/**
 * Change the `input-text` `model` to the string representation of `suggestion`
 */
re_com.typeahead.display_suggestion = (function re_com$typeahead$display_suggestion(p__34579,suggestion){
var map__34580 = p__34579;
var map__34580__$1 = (((((!((map__34580 == null))))?(((((map__34580.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34580.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34580):map__34580);
var state = map__34580__$1;
var suggestion_to_string = cljs.core.get.call(null,map__34580__$1,new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962));
var suggestion_string = suggestion_to_string.call(null,suggestion);
var G__34582 = state;
if(cljs.core.truth_(suggestion_string)){
return cljs.core.assoc.call(null,G__34582,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),suggestion_string,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),true);
} else {
return G__34582;
}
});
re_com.typeahead.clear_suggestions = (function re_com$typeahead$clear_suggestions(state){
return cljs.core.dissoc.call(null,state,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618),new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
});
/**
 * Make the suggestion at `index` the active suggestion
 */
re_com.typeahead.activate_suggestion_by_index = (function re_com$typeahead$activate_suggestion_by_index(p__34583,index){
var map__34584 = p__34583;
var map__34584__$1 = (((((!((map__34584 == null))))?(((((map__34584.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34584.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34584):map__34584);
var state = map__34584__$1;
var suggestions = cljs.core.get.call(null,map__34584__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
var G__34586 = state;
var G__34586__$1 = cljs.core.assoc.call(null,G__34586,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728),index)
;
var G__34586__$2 = (cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))?re_com.typeahead.update_model.call(null,G__34586__$1,suggestion):G__34586__$1);
if(cljs.core.truth_(re_com.typeahead.event_displays_suggestion_QMARK_.call(null,state,new cljs.core.Keyword(null,"suggestion-activated","suggestion-activated",316961778)))){
return re_com.typeahead.display_suggestion.call(null,G__34586__$2,suggestion);
} else {
return G__34586__$2;
}
});
/**
 * Choose the suggestion at `index`
 */
re_com.typeahead.choose_suggestion_by_index = (function re_com$typeahead$choose_suggestion_by_index(p__34587,index){
var map__34588 = p__34587;
var map__34588__$1 = (((((!((map__34588 == null))))?(((((map__34588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34588):map__34588);
var state = map__34588__$1;
var suggestions = cljs.core.get.call(null,map__34588__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion = cljs.core.nth.call(null,suggestions,index);
return re_com.typeahead.clear_suggestions.call(null,re_com.typeahead.display_suggestion.call(null,re_com.typeahead.update_model.call(null,re_com.typeahead.activate_suggestion_by_index.call(null,state,index),suggestion),suggestion));
});
re_com.typeahead.choose_suggestion_active = (function re_com$typeahead$choose_suggestion_active(p__34590){
var map__34591 = p__34590;
var map__34591__$1 = (((((!((map__34591 == null))))?(((((map__34591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34591):map__34591);
var state = map__34591__$1;
var suggestion_active_index = cljs.core.get.call(null,map__34591__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__34593 = state;
if(cljs.core.truth_(suggestion_active_index)){
return re_com.typeahead.choose_suggestion_by_index.call(null,G__34593,suggestion_active_index);
} else {
return G__34593;
}
});
re_com.typeahead.wrap = (function re_com$typeahead$wrap(index,count){
return cljs.core.mod.call(null,(count + index),count);
});
re_com.typeahead.activate_suggestion_next = (function re_com$typeahead$activate_suggestion_next(p__34594){
var map__34595 = p__34594;
var map__34595__$1 = (((((!((map__34595 == null))))?(((((map__34595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34595):map__34595);
var state = map__34595__$1;
var suggestions = cljs.core.get.call(null,map__34595__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__34595__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__34597 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__34597,re_com.typeahead.wrap.call(null,((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (-1);
}
})() + (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__34597;
}
});
re_com.typeahead.activate_suggestion_prev = (function re_com$typeahead$activate_suggestion_prev(p__34598){
var map__34599 = p__34598;
var map__34599__$1 = (((((!((map__34599 == null))))?(((((map__34599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34599):map__34599);
var state = map__34599__$1;
var suggestions = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var suggestion_active_index = cljs.core.get.call(null,map__34599__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var G__34601 = state;
if(cljs.core.seq.call(null,suggestions)){
return re_com.typeahead.activate_suggestion_by_index.call(null,G__34601,re_com.typeahead.wrap.call(null,((function (){var or__4131__auto__ = suggestion_active_index;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (0);
}
})() - (1)),cljs.core.count.call(null,suggestions)));
} else {
return G__34601;
}
});
re_com.typeahead.reset_typeahead = (function re_com$typeahead$reset_typeahead(state){
var G__34602 = state;
var G__34602__$1 = re_com.typeahead.clear_suggestions.call(null,G__34602)
;
var G__34602__$2 = cljs.core.assoc.call(null,G__34602__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),false,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),"",new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__34602__$2,null);
} else {
return G__34602__$2;
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
re_com.typeahead.input_text_will_blur = (function re_com$typeahead$input_text_will_blur(p__34603){
var map__34604 = p__34603;
var map__34604__$1 = (((((!((map__34604 == null))))?(((((map__34604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34604):map__34604);
var state = map__34604__$1;
var input_text = cljs.core.get.call(null,map__34604__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var displaying_suggestion_QMARK_ = cljs.core.get.call(null,map__34604__$1,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862));
var model = cljs.core.get.call(null,map__34604__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_((function (){var and__4120__auto__ = cljs.core.not.call(null,displaying_suggestion_QMARK_);
if(and__4120__auto__){
return re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-blurred","input-text-blurred",-501892307));
} else {
return and__4120__auto__;
}
})())){
return re_com.typeahead.update_model.call(null,state,input_text);
} else {
return re_com.typeahead.clear_suggestions.call(null,cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),input_text));

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
 * Call the `data-source` fn with `text`, and then call `got-suggestions` with the result
 *   (asynchronously, if `data-source` does not return a truthy value).
 */
re_com.typeahead.search_data_source_BANG_ = (function re_com$typeahead$search_data_source_BANG_(data_source,state_atom,text){
var temp__5733__auto__ = data_source.call(null,text,(function (p1__34606_SHARP_){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,p1__34606_SHARP_);
}));
if(cljs.core.truth_(temp__5733__auto__)){
var return_value = temp__5733__auto__;
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,return_value);
} else {
return cljs.core.swap_BANG_.call(null,state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215),true);
}
});
/**
 * For every value arriving on the `c-search` channel, call `search-data-source!`.
 */
re_com.typeahead.search_data_source_loop_BANG_ = (function re_com$typeahead$search_data_source_loop_BANG_(state_atom,c_search){
var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__){
return (function (state_34624){
var state_val_34625 = (state_34624[(1)]);
if((state_val_34625 === (1))){
var state_34624__$1 = state_34624;
var statearr_34626_34639 = state_34624__$1;
(statearr_34626_34639[(2)] = null);

(statearr_34626_34639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34625 === (2))){
var state_34624__$1 = state_34624;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34624__$1,(4),c_search);
} else {
if((state_val_34625 === (3))){
var inst_34622 = (state_34624[(2)]);
var state_34624__$1 = state_34624;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34624__$1,inst_34622);
} else {
if((state_val_34625 === (4))){
var inst_34609 = (state_34624[(7)]);
var inst_34609__$1 = (state_34624[(2)]);
var inst_34610 = cljs.core.deref.call(null,state_atom);
var inst_34611 = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(inst_34610);
var inst_34612 = cljs.core._EQ_.call(null,"",inst_34609__$1);
var state_34624__$1 = (function (){var statearr_34627 = state_34624;
(statearr_34627[(8)] = inst_34611);

(statearr_34627[(7)] = inst_34609__$1);

return statearr_34627;
})();
if(inst_34612){
var statearr_34628_34640 = state_34624__$1;
(statearr_34628_34640[(1)] = (5));

} else {
var statearr_34629_34641 = state_34624__$1;
(statearr_34629_34641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34625 === (5))){
var inst_34611 = (state_34624[(8)]);
var inst_34614 = cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.reset_typeahead);
var inst_34615 = re_com.typeahead.search_data_source_BANG_.call(null,inst_34611,state_atom,"");
var state_34624__$1 = (function (){var statearr_34630 = state_34624;
(statearr_34630[(9)] = inst_34614);

return statearr_34630;
})();
var statearr_34631_34642 = state_34624__$1;
(statearr_34631_34642[(2)] = inst_34615);

(statearr_34631_34642[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34625 === (6))){
var inst_34611 = (state_34624[(8)]);
var inst_34609 = (state_34624[(7)]);
var inst_34617 = re_com.typeahead.search_data_source_BANG_.call(null,inst_34611,state_atom,inst_34609);
var state_34624__$1 = state_34624;
var statearr_34632_34643 = state_34624__$1;
(statearr_34632_34643[(2)] = inst_34617);

(statearr_34632_34643[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34625 === (7))){
var inst_34619 = (state_34624[(2)]);
var state_34624__$1 = (function (){var statearr_34633 = state_34624;
(statearr_34633[(10)] = inst_34619);

return statearr_34633;
})();
var statearr_34634_34644 = state_34624__$1;
(statearr_34634_34644[(2)] = null);

(statearr_34634_34644[(1)] = (2));


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
});})(c__32544__auto__))
;
return ((function (switch__32449__auto__,c__32544__auto__){
return (function() {
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto__ = null;
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto____0 = (function (){
var statearr_34635 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34635[(0)] = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto__);

(statearr_34635[(1)] = (1));

return statearr_34635;
});
var re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto____1 = (function (state_34624){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_34624);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e34636){if((e34636 instanceof Object)){
var ex__32453__auto__ = e34636;
var statearr_34637_34645 = state_34624;
(statearr_34637_34645[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34624);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34646 = state_34624;
state_34624 = G__34646;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto__ = function(state_34624){
switch(arguments.length){
case 0:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto____0.call(this);
case 1:
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto____1.call(this,state_34624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto____0;
re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto____1;
return re_com$typeahead$search_data_source_loop_BANG__$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__))
})();
var state__32546__auto__ = (function (){var statearr_34638 = f__32545__auto__.call(null);
(statearr_34638[(6)] = c__32544__auto__);

return statearr_34638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__))
);

return c__32544__auto__;
});
/**
 * Update state in response to `input-text` `on-change`, and put text on the `c-input` channel
 */
re_com.typeahead.input_text_on_change_BANG_ = (function re_com$typeahead$input_text_on_change_BANG_(state_atom,new_text){
var map__34648 = cljs.core.deref.call(null,state_atom);
var map__34648__$1 = (((((!((map__34648 == null))))?(((((map__34648.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34648.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34648):map__34648);
var state = map__34648__$1;
var input_text = cljs.core.get.call(null,map__34648__$1,new cljs.core.Keyword(null,"input-text","input-text",-1336297114));
var c_input = cljs.core.get.call(null,map__34648__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
if(cljs.core._EQ_.call(null,new_text,input_text)){
return state;
} else {
cljs.core.async.put_BANG_.call(null,c_input,new_text);

return cljs.core.swap_BANG_.call(null,state_atom,((function (map__34648,map__34648__$1,state,input_text,c_input){
return (function (p1__34647_SHARP_){
var G__34650 = p1__34647_SHARP_;
var G__34650__$1 = cljs.core.assoc.call(null,G__34650,new cljs.core.Keyword(null,"input-text","input-text",-1336297114),new_text,new cljs.core.Keyword(null,"displaying-suggestion?","displaying-suggestion?",1244493862),false)
;
if(cljs.core.truth_(re_com.typeahead.event_updates_model_QMARK_.call(null,state,new cljs.core.Keyword(null,"input-text-changed","input-text-changed",-1906799535)))){
return re_com.typeahead.update_model.call(null,G__34650__$1,new_text);
} else {
return G__34650__$1;
}
});})(map__34648,map__34648__$1,state,input_text,c_input))
);
}
});
re_com.typeahead.input_text_on_key_down_BANG_ = (function re_com$typeahead$input_text_on_key_down_BANG_(state_atom,event){
var pred__34651 = cljs.core._EQ_;
var expr__34652 = event.which;
if(cljs.core.truth_(pred__34651.call(null,goog.events.KeyCodes.UP,expr__34652))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_prev);
} else {
if(cljs.core.truth_(pred__34651.call(null,goog.events.KeyCodes.DOWN,expr__34652))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_next);
} else {
if(cljs.core.truth_(pred__34651.call(null,goog.events.KeyCodes.ENTER,expr__34652))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_active);
} else {
if(cljs.core.truth_(pred__34651.call(null,goog.events.KeyCodes.ESC,expr__34652))){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.got_suggestions,cljs.core.PersistentVector.EMPTY);
} else {
if(cljs.core.truth_(pred__34651.call(null,goog.events.KeyCodes.TAB,expr__34652))){
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
re_com.typeahead.typeahead_args_desc = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data-source","data-source",-658934676),new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"type","type",1174270348),"fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null)," supplies suggestion objects. This can either accept a single string argument (the search term), or a string and a callback. For the first case, the fn should return a collection of suggestion objects (which can be anything). For the second case, the fn should return ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil"], null),", and eventually result in a call to the callback with a collection of suggestion objects."], null)], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"string -> nil",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," controls when it is called. It is passed a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, invoke ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-change"], null)," when the user chooses a suggestion, otherwise invoke it on every change (navigating through suggestions with the mouse or keyboard, or if ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"rigid?"], null)," is also ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null),", invoke it on every character typed.)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"immediate-model-update?","immediate-model-update?",-2000005618),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"update model with currently entered text on every keystroke (similar to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":change-on-blur?"], null)," but no changes to model if mouse is over suggestions)"], null)], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),null,new cljs.core.Keyword(null,"type","type",1174270348),"object | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"the initial value of the typeahead (should match the suggestion objects returned by ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),")."]),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"debounce-delay","debounce-delay",-608187982),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),(250),new cljs.core.Keyword(null,"type","type",1174270348),"integer",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.integer_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"after receiving input, the typeahead will wait this many milliseconds without receiving new input before calling ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),"."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"render fn",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"override the rendering of the suggestion items by passing a fn that returns hiccup forms. The fn will receive two arguments: the search term, and the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"suggestion-to-string","suggestion-to-string",1991188962),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"suggestion -> string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"when a suggestion is chosen, the input-text value will be set to the result of calling this fn with the suggestion object."], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"rigid?","rigid?",-1498832118),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),true,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"If ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"false"], null)," the user will be allowed to choose arbitrary text input rather than a suggestion from ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":data-source"], null),". In this case, a string will be supplied in lieu of a suggestion object."], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"keyword",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.input_status_type_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"validation status. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),"nil/omitted"], null)," for normal status or one of: ",re_com.validate.input_status_types_list], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean",new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"when true, display an icon to match ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":status"], null)," (no icon for nil)"], null)], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"displayed in status icon's tooltip"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"background text shown when empty"], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),"250px",new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS width setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"standard CSS height setting for this input"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"default","default",-1987822328),false,new cljs.core.Keyword(null,"type","type",1174270348),"boolean | atom",new cljs.core.Keyword(null,"description","description",-1428560544),"if true, the user can't interact (input anything)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),cljs.core.string_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS class names, space separated (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"CSS style map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.css_style_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),"CSS styles to add or override (applies to the textbox)"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"required","required",1807647006),false,new cljs.core.Keyword(null,"type","type",1174270348),"HTML attr map",new cljs.core.Keyword(null,"validate-fn","validate-fn",1430169944),re_com.validate.html_attr_QMARK_,new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"HTML attributes, like ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":on-mouse-move"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"No ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":class"], null)," or ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"code","code",1586293142),":style"], null),"allowed (applies to ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.bold","span.bold",636457745),"the outer container"], null),", rather than the textbox)"], null)], null)], null);
/**
 * typeahead reagent component
 */
re_com.typeahead.typeahead = (function re_com$typeahead$typeahead(var_args){
var args__4736__auto__ = [];
var len__4730__auto___34676 = arguments.length;
var i__4731__auto___34677 = (0);
while(true){
if((i__4731__auto___34677 < len__4730__auto___34676)){
args__4736__auto__.push((arguments[i__4731__auto___34677]));

var G__34678 = (i__4731__auto___34677 + (1));
i__4731__auto___34677 = G__34678;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

re_com.typeahead.typeahead.cljs$core$IFn$_invoke$arity$variadic = (function (p__34656){
var map__34657 = p__34656;
var map__34657__$1 = (((((!((map__34657 == null))))?(((((map__34657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34657.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34657):map__34657);
var args = map__34657__$1;
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__34659 = re_com.typeahead.make_typeahead_state.call(null,args);
var map__34659__$1 = (((((!((map__34659 == null))))?(((((map__34659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34659):map__34659);
var state = map__34659__$1;
var c_search = cljs.core.get.call(null,map__34659__$1,new cljs.core.Keyword(null,"c-search","c-search",1832536180));
var c_input = cljs.core.get.call(null,map__34659__$1,new cljs.core.Keyword(null,"c-input","c-input",-1821004232));
var state_atom = reagent.core.atom.call(null,state);
var input_text_model = reagent.core.cursor.call(null,state_atom,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input-text","input-text",-1336297114)], null));
re_com.typeahead.search_data_source_loop_BANG_.call(null,state_atom,c_search);

return ((function (map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args){
return (function() { 
var G__34679__delegate = function (p__34661){
var map__34662 = p__34661;
var map__34662__$1 = (((((!((map__34662 == null))))?(((((map__34662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34662):map__34662);
var args__$1 = map__34662__$1;
var disabled_QMARK_ = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var status_icon_QMARK_ = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612));
var height = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var status_tooltip = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007));
var model = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"model","model",331153215));
var _debounce_delay = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"_debounce-delay","_debounce-delay",-1476744225));
var attr = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var _on_change = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"_on-change","_on-change",156649312));
var placeholder = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var render_suggestion = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"render-suggestion","render-suggestion",1472406503));
var _suggestion_to_string = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"_suggestion-to-string","_suggestion-to-string",795407399));
var width = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var data_source = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"data-source","data-source",-658934676));
var _rigid_QMARK_ = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"_rigid?","_rigid?",1424449294));
var style = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var _change_on_blur_QMARK_ = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"_change-on-blur?","_change-on-blur?",1219941073));
var _immediate_model_update_QMARK_ = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"_immediate-model-update?","_immediate-model-update?",1035374450));
var status = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var class$ = cljs.core.get.call(null,map__34662__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if((((!(goog.DEBUG)))?true:re_com.validate.validate_args.call(null,re_com.validate.extract_arg_data.call(null,re_com.typeahead.typeahead_args_desc),args__$1,"typeahead"))){
} else {
throw (new Error("Assert failed: (validate-args-macro typeahead-args-desc args \"typeahead\")"));
}

var map__34664 = cljs.core.deref.call(null,state_atom);
var map__34664__$1 = (((((!((map__34664 == null))))?(((((map__34664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34664):map__34664);
var state__$1 = map__34664__$1;
var suggestions = cljs.core.get.call(null,map__34664__$1,new cljs.core.Keyword(null,"suggestions","suggestions",-859472618));
var waiting_QMARK_ = cljs.core.get.call(null,map__34664__$1,new cljs.core.Keyword(null,"waiting?","waiting?",-2117257215));
var suggestion_active_index = cljs.core.get.call(null,map__34664__$1,new cljs.core.Keyword(null,"suggestion-active-index","suggestion-active-index",-1593564728));
var last_data_source = new cljs.core.Keyword(null,"data-source","data-source",-658934676).cljs$core$IFn$_invoke$arity$1(state__$1);
var width__$1 = (function (){var or__4131__auto__ = width;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "250px";
}
})();
if(cljs.core.not_EQ_.call(null,last_data_source,data_source)){
cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.change_data_source,data_source);
} else {
}

return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead",new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 27, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.input_text,new cljs.core.Keyword(null,"model","model",331153215),input_text_model,new cljs.core.Keyword(null,"class","class",-2030961996),class$,new cljs.core.Keyword(null,"style","style",-496642736),style,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),disabled_QMARK_,new cljs.core.Keyword(null,"status-icon?","status-icon?",1328423612),status_icon_QMARK_,new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-tooltip","status-tooltip",1912159007),status_tooltip,new cljs.core.Keyword(null,"width","width",-384071477),width__$1,new cljs.core.Keyword(null,"height","height",1025178622),height,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder,new cljs.core.Keyword(null,"on-change","on-change",-732046149),cljs.core.partial.call(null,re_com.typeahead.input_text_on_change_BANG_,state_atom),new cljs.core.Keyword(null,"change-on-blur?","change-on-blur?",854283925),false,new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),cljs.core.partial.call(null,re_com.typeahead.input_text_on_key_down_BANG_,state_atom),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),((function (map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args){
return (function (){
return cljs.core.List.EMPTY;
});})(map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args))
,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),((function (map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.input_text_will_blur);
});})(map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args))
], null)], null),(cljs.core.truth_((function (){var or__4131__auto__ = cljs.core.not_empty.call(null,suggestions);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return waiting_QMARK_;
}
})())?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.v_box,new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-suggestions-container",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(waiting_QMARK_)?new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"child","child",623967545),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.misc.throbber,new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"small","small",2133478704),new cljs.core.Keyword(null,"class","class",-2030961996),"rc-typeahead-throbber"], null)], null):null),(function (){var iter__4523__auto__ = ((function (map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args){
return (function re_com$typeahead$iter__34666(s__34667){
return (new cljs.core.LazySeq(null,((function (map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args){
return (function (){
var s__34667__$1 = s__34667;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__34667__$1);
if(temp__5735__auto__){
var s__34667__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__34667__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__34667__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__34669 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__34668 = (0);
while(true){
if((i__34668 < size__4522__auto__)){
var vec__34670 = cljs.core._nth.call(null,c__4521__auto__,i__34668);
var i = cljs.core.nth.call(null,vec__34670,(0),null);
var s = cljs.core.nth.call(null,vec__34670,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
cljs.core.chunk_append.call(null,b__34669,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (i__34668,selected_QMARK_,vec__34670,i,s,c__4521__auto__,size__4522__auto__,b__34669,s__34667__$2,temp__5735__auto__,map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(i__34668,selected_QMARK_,vec__34670,i,s,c__4521__auto__,size__4522__auto__,b__34669,s__34667__$2,temp__5735__auto__,map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (i__34668,selected_QMARK_,vec__34670,i,s,c__4521__auto__,size__4522__auto__,b__34669,s__34667__$2,temp__5735__auto__,map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args){
return (function (p1__34654_SHARP_){
p1__34654_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(i__34668,selected_QMARK_,vec__34670,i,s,c__4521__auto__,size__4522__auto__,b__34669,s__34667__$2,temp__5735__auto__,map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)));

var G__34680 = (i__34668 + (1));
i__34668 = G__34680;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34669),re_com$typeahead$iter__34666.call(null,cljs.core.chunk_rest.call(null,s__34667__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__34669),null);
}
} else {
var vec__34673 = cljs.core.first.call(null,s__34667__$2);
var i = cljs.core.nth.call(null,vec__34673,(0),null);
var s = cljs.core.nth.call(null,vec__34673,(1),null);
var selected_QMARK_ = cljs.core._EQ_.call(null,suggestion_active_index,i);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [re_com.box.box,new cljs.core.Keyword(null,"child","child",623967545),(cljs.core.truth_(render_suggestion)?render_suggestion.call(null,s):s),new cljs.core.Keyword(null,"class","class",-2030961996),["rc-typeahead-suggestion",((selected_QMARK_)?" active":null)].join(''),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((function (selected_QMARK_,vec__34673,i,s,s__34667__$2,temp__5735__auto__,map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args){
return (function (){
return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.activate_suggestion_by_index,i);
});})(selected_QMARK_,vec__34673,i,s,s__34667__$2,temp__5735__auto__,map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args))
,new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (selected_QMARK_,vec__34673,i,s,s__34667__$2,temp__5735__auto__,map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args){
return (function (p1__34654_SHARP_){
p1__34654_SHARP_.preventDefault();

return cljs.core.swap_BANG_.call(null,state_atom,re_com.typeahead.choose_suggestion_by_index,i);
});})(selected_QMARK_,vec__34673,i,s,s__34667__$2,temp__5735__auto__,map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args))
], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null)),re_com$typeahead$iter__34666.call(null,cljs.core.rest.call(null,s__34667__$2)));
}
} else {
return null;
}
break;
}
});})(map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args))
,null,null));
});})(map__34664,map__34664__$1,state__$1,suggestions,waiting_QMARK_,suggestion_active_index,last_data_source,width__$1,map__34662,map__34662__$1,args__$1,disabled_QMARK_,status_icon_QMARK_,height,status_tooltip,model,_debounce_delay,attr,_on_change,placeholder,render_suggestion,_suggestion_to_string,width,data_source,_rigid_QMARK_,style,_change_on_blur_QMARK_,_immediate_model_update_QMARK_,status,class$,map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args))
;
return iter__4523__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.range.call(null),suggestions));
})()], null)], null)], null):null)], null)], null);
};
var G__34679 = function (var_args){
var p__34661 = null;
if (arguments.length > 0) {
var G__34681__i = 0, G__34681__a = new Array(arguments.length -  0);
while (G__34681__i < G__34681__a.length) {G__34681__a[G__34681__i] = arguments[G__34681__i + 0]; ++G__34681__i;}
  p__34661 = new cljs.core.IndexedSeq(G__34681__a,0,null);
} 
return G__34679__delegate.call(this,p__34661);};
G__34679.cljs$lang$maxFixedArity = 0;
G__34679.cljs$lang$applyTo = (function (arglist__34682){
var p__34661 = cljs.core.seq(arglist__34682);
return G__34679__delegate(p__34661);
});
G__34679.cljs$core$IFn$_invoke$arity$variadic = G__34679__delegate;
return G__34679;
})()
;
;})(map__34659,map__34659__$1,state,c_search,c_input,state_atom,input_text_model,map__34657,map__34657__$1,args))
});

re_com.typeahead.typeahead.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
re_com.typeahead.typeahead.cljs$lang$applyTo = (function (seq34655){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34655));
});

/**
 * Return a channel which will receive a value from the `in` channel only
 *   if no further value is received on the `in` channel in the next `ms` milliseconds.
 */
re_com.typeahead.debounce = (function re_com$typeahead$debounce(in$,ms){
var out = cljs.core.async.chan.call(null);
var c__32544__auto___34763 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___34763,out){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___34763,out){
return (function (state_34733){
var state_val_34734 = (state_34733[(1)]);
if((state_val_34734 === (7))){
var inst_34688 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34735_34764 = state_34733__$1;
(statearr_34735_34764[(2)] = inst_34688);

(statearr_34735_34764[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (1))){
var inst_34683 = null;
var state_34733__$1 = (function (){var statearr_34736 = state_34733;
(statearr_34736[(7)] = inst_34683);

return statearr_34736;
})();
var statearr_34737_34765 = state_34733__$1;
(statearr_34737_34765[(2)] = null);

(statearr_34737_34765[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (4))){
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34733__$1,(7),in$);
} else {
if((state_val_34734 === (15))){
var inst_34718 = (state_34733[(2)]);
var state_34733__$1 = (function (){var statearr_34738 = state_34733;
(statearr_34738[(8)] = inst_34718);

return statearr_34738;
})();
var statearr_34739_34766 = state_34733__$1;
(statearr_34739_34766[(2)] = null);

(statearr_34739_34766[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (13))){
var inst_34706 = (state_34733[(9)]);
var inst_34720 = cljs.core._EQ_.call(null,inst_34706,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_34733__$1 = state_34733;
if(inst_34720){
var statearr_34740_34767 = state_34733__$1;
(statearr_34740_34767[(1)] = (16));

} else {
var statearr_34741_34768 = state_34733__$1;
(statearr_34741_34768[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (6))){
var inst_34692 = (state_34733[(10)]);
var inst_34691 = (state_34733[(2)]);
var inst_34692__$1 = cljs.core.async.timeout.call(null,ms);
var inst_34700 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34701 = [in$,inst_34692__$1];
var inst_34702 = (new cljs.core.PersistentVector(null,2,(5),inst_34700,inst_34701,null));
var state_34733__$1 = (function (){var statearr_34742 = state_34733;
(statearr_34742[(10)] = inst_34692__$1);

(statearr_34742[(11)] = inst_34691);

return statearr_34742;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34733__$1,(8),inst_34702);
} else {
if((state_val_34734 === (17))){
var state_34733__$1 = state_34733;
var statearr_34743_34769 = state_34733__$1;
(statearr_34743_34769[(2)] = null);

(statearr_34743_34769[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (3))){
var inst_34731 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34733__$1,inst_34731);
} else {
if((state_val_34734 === (12))){
var inst_34691 = (state_34733[(11)]);
var state_34733__$1 = state_34733;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34733__$1,(15),out,inst_34691);
} else {
if((state_val_34734 === (2))){
var inst_34683 = (state_34733[(7)]);
var inst_34685 = (inst_34683 == null);
var state_34733__$1 = state_34733;
if(cljs.core.truth_(inst_34685)){
var statearr_34744_34770 = state_34733__$1;
(statearr_34744_34770[(1)] = (4));

} else {
var statearr_34745_34771 = state_34733__$1;
(statearr_34745_34771[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (11))){
var inst_34728 = (state_34733[(2)]);
var inst_34683 = inst_34728;
var state_34733__$1 = (function (){var statearr_34746 = state_34733;
(statearr_34746[(7)] = inst_34683);

return statearr_34746;
})();
var statearr_34747_34772 = state_34733__$1;
(statearr_34747_34772[(2)] = null);

(statearr_34747_34772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (9))){
var inst_34704 = (state_34733[(12)]);
var inst_34712 = cljs.core.nth.call(null,inst_34704,(0),null);
var inst_34713 = cljs.core.nth.call(null,inst_34704,(1),null);
var state_34733__$1 = (function (){var statearr_34748 = state_34733;
(statearr_34748[(13)] = inst_34713);

return statearr_34748;
})();
var statearr_34749_34773 = state_34733__$1;
(statearr_34749_34773[(2)] = inst_34712);

(statearr_34749_34773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (5))){
var inst_34683 = (state_34733[(7)]);
var state_34733__$1 = state_34733;
var statearr_34750_34774 = state_34733__$1;
(statearr_34750_34774[(2)] = inst_34683);

(statearr_34750_34774[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (14))){
var inst_34726 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34751_34775 = state_34733__$1;
(statearr_34751_34775[(2)] = inst_34726);

(statearr_34751_34775[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (16))){
var inst_34705 = (state_34733[(14)]);
var state_34733__$1 = state_34733;
var statearr_34752_34776 = state_34733__$1;
(statearr_34752_34776[(2)] = inst_34705);

(statearr_34752_34776[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (10))){
var inst_34706 = (state_34733[(9)]);
var inst_34692 = (state_34733[(10)]);
var inst_34715 = cljs.core._EQ_.call(null,inst_34706,inst_34692);
var state_34733__$1 = state_34733;
if(inst_34715){
var statearr_34753_34777 = state_34733__$1;
(statearr_34753_34777[(1)] = (12));

} else {
var statearr_34754_34778 = state_34733__$1;
(statearr_34754_34778[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (18))){
var inst_34724 = (state_34733[(2)]);
var state_34733__$1 = state_34733;
var statearr_34755_34779 = state_34733__$1;
(statearr_34755_34779[(2)] = inst_34724);

(statearr_34755_34779[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34734 === (8))){
var inst_34704 = (state_34733[(12)]);
var inst_34706 = (state_34733[(9)]);
var inst_34704__$1 = (state_34733[(2)]);
var inst_34705 = cljs.core.nth.call(null,inst_34704__$1,(0),null);
var inst_34706__$1 = cljs.core.nth.call(null,inst_34704__$1,(1),null);
var inst_34707 = cljs.core._EQ_.call(null,inst_34706__$1,in$);
var state_34733__$1 = (function (){var statearr_34756 = state_34733;
(statearr_34756[(12)] = inst_34704__$1);

(statearr_34756[(9)] = inst_34706__$1);

(statearr_34756[(14)] = inst_34705);

return statearr_34756;
})();
if(inst_34707){
var statearr_34757_34780 = state_34733__$1;
(statearr_34757_34780[(1)] = (9));

} else {
var statearr_34758_34781 = state_34733__$1;
(statearr_34758_34781[(1)] = (10));

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
});})(c__32544__auto___34763,out))
;
return ((function (switch__32449__auto__,c__32544__auto___34763,out){
return (function() {
var re_com$typeahead$debounce_$_state_machine__32450__auto__ = null;
var re_com$typeahead$debounce_$_state_machine__32450__auto____0 = (function (){
var statearr_34759 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34759[(0)] = re_com$typeahead$debounce_$_state_machine__32450__auto__);

(statearr_34759[(1)] = (1));

return statearr_34759;
});
var re_com$typeahead$debounce_$_state_machine__32450__auto____1 = (function (state_34733){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_34733);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e34760){if((e34760 instanceof Object)){
var ex__32453__auto__ = e34760;
var statearr_34761_34782 = state_34733;
(statearr_34761_34782[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34733);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34783 = state_34733;
state_34733 = G__34783;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
re_com$typeahead$debounce_$_state_machine__32450__auto__ = function(state_34733){
switch(arguments.length){
case 0:
return re_com$typeahead$debounce_$_state_machine__32450__auto____0.call(this);
case 1:
return re_com$typeahead$debounce_$_state_machine__32450__auto____1.call(this,state_34733);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_com$typeahead$debounce_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = re_com$typeahead$debounce_$_state_machine__32450__auto____0;
re_com$typeahead$debounce_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = re_com$typeahead$debounce_$_state_machine__32450__auto____1;
return re_com$typeahead$debounce_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___34763,out))
})();
var state__32546__auto__ = (function (){var statearr_34762 = f__32545__auto__.call(null);
(statearr_34762[(6)] = c__32544__auto___34763);

return statearr_34762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___34763,out))
);


return out;
});

//# sourceMappingURL=typeahead.js.map?rel=1561299746406
