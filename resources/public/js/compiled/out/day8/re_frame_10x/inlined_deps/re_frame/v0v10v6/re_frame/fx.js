// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (day8.re-frame-10x.inlined-deps.re-frame.v0v10v6.re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.register_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v10v6$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__39720 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__39721 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__39721;

try{try{var seq__39722 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39723 = null;
var count__39724 = (0);
var i__39725 = (0);
while(true){
if((i__39725 < count__39724)){
var vec__39732 = cljs.core._nth.call(null,chunk__39723,i__39725);
var effect_key = cljs.core.nth.call(null,vec__39732,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39732,(1),null);
var temp__5733__auto___39754 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39754)){
var effect_fn_39755 = temp__5733__auto___39754;
effect_fn_39755.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39756 = seq__39722;
var G__39757 = chunk__39723;
var G__39758 = count__39724;
var G__39759 = (i__39725 + (1));
seq__39722 = G__39756;
chunk__39723 = G__39757;
count__39724 = G__39758;
i__39725 = G__39759;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39722);
if(temp__5735__auto__){
var seq__39722__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39722__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39722__$1);
var G__39760 = cljs.core.chunk_rest.call(null,seq__39722__$1);
var G__39761 = c__4550__auto__;
var G__39762 = cljs.core.count.call(null,c__4550__auto__);
var G__39763 = (0);
seq__39722 = G__39760;
chunk__39723 = G__39761;
count__39724 = G__39762;
i__39725 = G__39763;
continue;
} else {
var vec__39735 = cljs.core.first.call(null,seq__39722__$1);
var effect_key = cljs.core.nth.call(null,vec__39735,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39735,(1),null);
var temp__5733__auto___39764 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39764)){
var effect_fn_39765 = temp__5733__auto___39764;
effect_fn_39765.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39766 = cljs.core.next.call(null,seq__39722__$1);
var G__39767 = null;
var G__39768 = (0);
var G__39769 = (0);
seq__39722 = G__39766;
chunk__39723 = G__39767;
count__39724 = G__39768;
i__39725 = G__39769;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__39512__auto___39770 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null);
var duration__39513__auto___39771 = (end__39512__auto___39770 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__39513__auto___39771,new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.now.call(null)));

day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__39512__auto___39770);
} else {
}
}}finally {day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__39720;
}} else {
var seq__39738 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__39739 = null;
var count__39740 = (0);
var i__39741 = (0);
while(true){
if((i__39741 < count__39740)){
var vec__39748 = cljs.core._nth.call(null,chunk__39739,i__39741);
var effect_key = cljs.core.nth.call(null,vec__39748,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39748,(1),null);
var temp__5733__auto___39772 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39772)){
var effect_fn_39773 = temp__5733__auto___39772;
effect_fn_39773.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39774 = seq__39738;
var G__39775 = chunk__39739;
var G__39776 = count__39740;
var G__39777 = (i__39741 + (1));
seq__39738 = G__39774;
chunk__39739 = G__39775;
count__39740 = G__39776;
i__39741 = G__39777;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39738);
if(temp__5735__auto__){
var seq__39738__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39738__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39738__$1);
var G__39778 = cljs.core.chunk_rest.call(null,seq__39738__$1);
var G__39779 = c__4550__auto__;
var G__39780 = cljs.core.count.call(null,c__4550__auto__);
var G__39781 = (0);
seq__39738 = G__39778;
chunk__39739 = G__39779;
count__39740 = G__39780;
i__39741 = G__39781;
continue;
} else {
var vec__39751 = cljs.core.first.call(null,seq__39738__$1);
var effect_key = cljs.core.nth.call(null,vec__39751,(0),null);
var effect_value = cljs.core.nth.call(null,vec__39751,(1),null);
var temp__5733__auto___39782 = day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.get_handler.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___39782)){
var effect_fn_39783 = temp__5733__auto___39782;
effect_fn_39783.call(null,effect_value);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__39784 = cljs.core.next.call(null,seq__39738__$1);
var G__39785 = null;
var G__39786 = (0);
var G__39787 = (0);
seq__39738 = G__39784;
chunk__39739 = G__39785;
count__39740 = G__39786;
i__39741 = G__39787;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__39788 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39789 = null;
var count__39790 = (0);
var i__39791 = (0);
while(true){
if((i__39791 < count__39790)){
var map__39796 = cljs.core._nth.call(null,chunk__39789,i__39791);
var map__39796__$1 = (((((!((map__39796 == null))))?(((((map__39796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39796):map__39796);
var effect = map__39796__$1;
var ms = cljs.core.get.call(null,map__39796__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39796__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39788,chunk__39789,count__39790,i__39791,map__39796,map__39796__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__39788,chunk__39789,count__39790,i__39791,map__39796,map__39796__$1,effect,ms,dispatch))
,ms);
}


var G__39800 = seq__39788;
var G__39801 = chunk__39789;
var G__39802 = count__39790;
var G__39803 = (i__39791 + (1));
seq__39788 = G__39800;
chunk__39789 = G__39801;
count__39790 = G__39802;
i__39791 = G__39803;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39788);
if(temp__5735__auto__){
var seq__39788__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39788__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39788__$1);
var G__39804 = cljs.core.chunk_rest.call(null,seq__39788__$1);
var G__39805 = c__4550__auto__;
var G__39806 = cljs.core.count.call(null,c__4550__auto__);
var G__39807 = (0);
seq__39788 = G__39804;
chunk__39789 = G__39805;
count__39790 = G__39806;
i__39791 = G__39807;
continue;
} else {
var map__39798 = cljs.core.first.call(null,seq__39788__$1);
var map__39798__$1 = (((((!((map__39798 == null))))?(((((map__39798.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39798.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39798):map__39798);
var effect = map__39798__$1;
var ms = cljs.core.get.call(null,map__39798__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__39798__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__39788,chunk__39789,count__39790,i__39791,map__39798,map__39798__$1,effect,ms,dispatch,seq__39788__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,dispatch);
});})(seq__39788,chunk__39789,count__39790,i__39791,map__39798,map__39798__$1,effect,ms,dispatch,seq__39788__$1,temp__5735__auto__))
,ms);
}


var G__39808 = cljs.core.next.call(null,seq__39788__$1);
var G__39809 = null;
var G__39810 = (0);
var G__39811 = (0);
seq__39788 = G__39808;
chunk__39789 = G__39809;
count__39790 = G__39810;
i__39791 = G__39811;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__39812 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__39813 = null;
var count__39814 = (0);
var i__39815 = (0);
while(true){
if((i__39815 < count__39814)){
var event = cljs.core._nth.call(null,chunk__39813,i__39815);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__39816 = seq__39812;
var G__39817 = chunk__39813;
var G__39818 = count__39814;
var G__39819 = (i__39815 + (1));
seq__39812 = G__39816;
chunk__39813 = G__39817;
count__39814 = G__39818;
i__39815 = G__39819;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39812);
if(temp__5735__auto__){
var seq__39812__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39812__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39812__$1);
var G__39820 = cljs.core.chunk_rest.call(null,seq__39812__$1);
var G__39821 = c__4550__auto__;
var G__39822 = cljs.core.count.call(null,c__4550__auto__);
var G__39823 = (0);
seq__39812 = G__39820;
chunk__39813 = G__39821;
count__39814 = G__39822;
i__39815 = G__39823;
continue;
} else {
var event = cljs.core.first.call(null,seq__39812__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.router.dispatch.call(null,event);


var G__39824 = cljs.core.next.call(null,seq__39812__$1);
var G__39825 = null;
var G__39826 = (0);
var G__39827 = (0);
seq__39812 = G__39824;
chunk__39813 = G__39825;
count__39814 = G__39826;
i__39815 = G__39827;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__39828 = cljs.core.seq.call(null,value);
var chunk__39829 = null;
var count__39830 = (0);
var i__39831 = (0);
while(true){
if((i__39831 < count__39830)){
var event = cljs.core._nth.call(null,chunk__39829,i__39831);
clear_event.call(null,event);


var G__39832 = seq__39828;
var G__39833 = chunk__39829;
var G__39834 = count__39830;
var G__39835 = (i__39831 + (1));
seq__39828 = G__39832;
chunk__39829 = G__39833;
count__39830 = G__39834;
i__39831 = G__39835;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__39828);
if(temp__5735__auto__){
var seq__39828__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39828__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__39828__$1);
var G__39836 = cljs.core.chunk_rest.call(null,seq__39828__$1);
var G__39837 = c__4550__auto__;
var G__39838 = cljs.core.count.call(null,c__4550__auto__);
var G__39839 = (0);
seq__39828 = G__39836;
chunk__39829 = G__39837;
count__39830 = G__39838;
i__39831 = G__39839;
continue;
} else {
var event = cljs.core.first.call(null,seq__39828__$1);
clear_event.call(null,event);


var G__39840 = cljs.core.next.call(null,seq__39828__$1);
var G__39841 = null;
var G__39842 = (0);
var G__39843 = (0);
seq__39828 = G__39840;
chunk__39829 = G__39841;
count__39830 = G__39842;
i__39831 = G__39843;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v10v6.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1561299753488
