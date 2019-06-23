// Compiled by ClojureScript 1.10.520 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR__orig_val__30283 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__30284 = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__30284;

try{try{var seq__30285 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__30286 = null;
var count__30287 = (0);
var i__30288 = (0);
while(true){
if((i__30288 < count__30287)){
var vec__30295 = cljs.core._nth.call(null,chunk__30286,i__30288);
var effect_key = cljs.core.nth.call(null,vec__30295,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30295,(1),null);
var temp__5733__auto___30317 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30317)){
var effect_fn_30318 = temp__5733__auto___30317;
effect_fn_30318.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30319 = seq__30285;
var G__30320 = chunk__30286;
var G__30321 = count__30287;
var G__30322 = (i__30288 + (1));
seq__30285 = G__30319;
chunk__30286 = G__30320;
count__30287 = G__30321;
i__30288 = G__30322;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30285);
if(temp__5735__auto__){
var seq__30285__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30285__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30285__$1);
var G__30323 = cljs.core.chunk_rest.call(null,seq__30285__$1);
var G__30324 = c__4550__auto__;
var G__30325 = cljs.core.count.call(null,c__4550__auto__);
var G__30326 = (0);
seq__30285 = G__30323;
chunk__30286 = G__30324;
count__30287 = G__30325;
i__30288 = G__30326;
continue;
} else {
var vec__30298 = cljs.core.first.call(null,seq__30285__$1);
var effect_key = cljs.core.nth.call(null,vec__30298,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30298,(1),null);
var temp__5733__auto___30327 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30327)){
var effect_fn_30328 = temp__5733__auto___30327;
effect_fn_30328.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30329 = cljs.core.next.call(null,seq__30285__$1);
var G__30330 = null;
var G__30331 = (0);
var G__30332 = (0);
seq__30285 = G__30329;
chunk__30286 = G__30330;
count__30287 = G__30331;
i__30288 = G__30332;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__27141__auto___30333 = re_frame.interop.now.call(null);
var duration__27142__auto___30334 = (end__27141__auto___30333 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__27142__auto___30334,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__27141__auto___30333);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__30283;
}} else {
var seq__30301 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__30302 = null;
var count__30303 = (0);
var i__30304 = (0);
while(true){
if((i__30304 < count__30303)){
var vec__30311 = cljs.core._nth.call(null,chunk__30302,i__30304);
var effect_key = cljs.core.nth.call(null,vec__30311,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30311,(1),null);
var temp__5733__auto___30335 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30335)){
var effect_fn_30336 = temp__5733__auto___30335;
effect_fn_30336.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30337 = seq__30301;
var G__30338 = chunk__30302;
var G__30339 = count__30303;
var G__30340 = (i__30304 + (1));
seq__30301 = G__30337;
chunk__30302 = G__30338;
count__30303 = G__30339;
i__30304 = G__30340;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30301);
if(temp__5735__auto__){
var seq__30301__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30301__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30301__$1);
var G__30341 = cljs.core.chunk_rest.call(null,seq__30301__$1);
var G__30342 = c__4550__auto__;
var G__30343 = cljs.core.count.call(null,c__4550__auto__);
var G__30344 = (0);
seq__30301 = G__30341;
chunk__30302 = G__30342;
count__30303 = G__30343;
i__30304 = G__30344;
continue;
} else {
var vec__30314 = cljs.core.first.call(null,seq__30301__$1);
var effect_key = cljs.core.nth.call(null,vec__30314,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30314,(1),null);
var temp__5733__auto___30345 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___30345)){
var effect_fn_30346 = temp__5733__auto___30345;
effect_fn_30346.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__30347 = cljs.core.next.call(null,seq__30301__$1);
var G__30348 = null;
var G__30349 = (0);
var G__30350 = (0);
seq__30301 = G__30347;
chunk__30302 = G__30348;
count__30303 = G__30349;
i__30304 = G__30350;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__30351 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30352 = null;
var count__30353 = (0);
var i__30354 = (0);
while(true){
if((i__30354 < count__30353)){
var map__30359 = cljs.core._nth.call(null,chunk__30352,i__30354);
var map__30359__$1 = (((((!((map__30359 == null))))?(((((map__30359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30359):map__30359);
var effect = map__30359__$1;
var ms = cljs.core.get.call(null,map__30359__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30359__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30351,chunk__30352,count__30353,i__30354,map__30359,map__30359__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30351,chunk__30352,count__30353,i__30354,map__30359,map__30359__$1,effect,ms,dispatch))
,ms);
}


var G__30363 = seq__30351;
var G__30364 = chunk__30352;
var G__30365 = count__30353;
var G__30366 = (i__30354 + (1));
seq__30351 = G__30363;
chunk__30352 = G__30364;
count__30353 = G__30365;
i__30354 = G__30366;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30351);
if(temp__5735__auto__){
var seq__30351__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30351__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30351__$1);
var G__30367 = cljs.core.chunk_rest.call(null,seq__30351__$1);
var G__30368 = c__4550__auto__;
var G__30369 = cljs.core.count.call(null,c__4550__auto__);
var G__30370 = (0);
seq__30351 = G__30367;
chunk__30352 = G__30368;
count__30353 = G__30369;
i__30354 = G__30370;
continue;
} else {
var map__30361 = cljs.core.first.call(null,seq__30351__$1);
var map__30361__$1 = (((((!((map__30361 == null))))?(((((map__30361.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30361.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30361):map__30361);
var effect = map__30361__$1;
var ms = cljs.core.get.call(null,map__30361__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30361__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30351,chunk__30352,count__30353,i__30354,map__30361,map__30361__$1,effect,ms,dispatch,seq__30351__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__30351,chunk__30352,count__30353,i__30354,map__30361,map__30361__$1,effect,ms,dispatch,seq__30351__$1,temp__5735__auto__))
,ms);
}


var G__30371 = cljs.core.next.call(null,seq__30351__$1);
var G__30372 = null;
var G__30373 = (0);
var G__30374 = (0);
seq__30351 = G__30371;
chunk__30352 = G__30372;
count__30353 = G__30373;
i__30354 = G__30374;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_.call(null,value)))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__30375 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30376 = null;
var count__30377 = (0);
var i__30378 = (0);
while(true){
if((i__30378 < count__30377)){
var event = cljs.core._nth.call(null,chunk__30376,i__30378);
re_frame.router.dispatch.call(null,event);


var G__30379 = seq__30375;
var G__30380 = chunk__30376;
var G__30381 = count__30377;
var G__30382 = (i__30378 + (1));
seq__30375 = G__30379;
chunk__30376 = G__30380;
count__30377 = G__30381;
i__30378 = G__30382;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30375);
if(temp__5735__auto__){
var seq__30375__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30375__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30375__$1);
var G__30383 = cljs.core.chunk_rest.call(null,seq__30375__$1);
var G__30384 = c__4550__auto__;
var G__30385 = cljs.core.count.call(null,c__4550__auto__);
var G__30386 = (0);
seq__30375 = G__30383;
chunk__30376 = G__30384;
count__30377 = G__30385;
i__30378 = G__30386;
continue;
} else {
var event = cljs.core.first.call(null,seq__30375__$1);
re_frame.router.dispatch.call(null,event);


var G__30387 = cljs.core.next.call(null,seq__30375__$1);
var G__30388 = null;
var G__30389 = (0);
var G__30390 = (0);
seq__30375 = G__30387;
chunk__30376 = G__30388;
count__30377 = G__30389;
i__30378 = G__30390;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__30391 = cljs.core.seq.call(null,value);
var chunk__30392 = null;
var count__30393 = (0);
var i__30394 = (0);
while(true){
if((i__30394 < count__30393)){
var event = cljs.core._nth.call(null,chunk__30392,i__30394);
clear_event.call(null,event);


var G__30395 = seq__30391;
var G__30396 = chunk__30392;
var G__30397 = count__30393;
var G__30398 = (i__30394 + (1));
seq__30391 = G__30395;
chunk__30392 = G__30396;
count__30393 = G__30397;
i__30394 = G__30398;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__30391);
if(temp__5735__auto__){
var seq__30391__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30391__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__30391__$1);
var G__30399 = cljs.core.chunk_rest.call(null,seq__30391__$1);
var G__30400 = c__4550__auto__;
var G__30401 = cljs.core.count.call(null,c__4550__auto__);
var G__30402 = (0);
seq__30391 = G__30399;
chunk__30392 = G__30400;
count__30393 = G__30401;
i__30394 = G__30402;
continue;
} else {
var event = cljs.core.first.call(null,seq__30391__$1);
clear_event.call(null,event);


var G__30403 = cljs.core.next.call(null,seq__30391__$1);
var G__30404 = null;
var G__30405 = (0);
var G__30406 = (0);
seq__30391 = G__30403;
chunk__30392 = G__30404;
count__30393 = G__30405;
i__30394 = G__30406;
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
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref.call(null,re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1561299743600
