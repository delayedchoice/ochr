// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__35465){
var vec__35466 = p__35465;
var success_QMARK_ = cljs.core.nth.call(null,vec__35466,(0),null);
var response = cljs.core.nth.call(null,vec__35466,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return on_success.call(null,response);
} else {
var details = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),goog.net.ErrorCode.getDebugMessage(xhrio.getLastErrorCode())], null),response);
return on_failure.call(null,details);
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__35471){
var map__35472 = p__35471;
var map__35472__$1 = (((((!((map__35472 == null))))?(((((map__35472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35472.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35472):map__35472);
var request = map__35472__$1;
var on_success = cljs.core.get.call(null,map__35472__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.call(null,map__35472__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"api","api",-899839580),api,new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.call(null,day8.re_frame.http_fx.ajax_xhrio_handler,((function (api,map__35472,map__35472__$1,request,on_success,on_failure){
return (function (p1__35469_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_success,p1__35469_SHARP_));
});})(api,map__35472,map__35472__$1,request,on_success,on_failure))
,((function (api,map__35472,map__35472__$1,request,on_success,on_failure){
return (function (p1__35470_SHARP_){
return re_frame.core.dispatch.call(null,cljs.core.conj.call(null,on_failure,p1__35470_SHARP_));
});})(api,map__35472,map__35472__$1,request,on_success,on_failure))
,api)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.Keyword(null,"on-failure","on-failure",842888245));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_.call(null,request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__35474 = cljs.core.seq.call(null,seq_request_maps);
var chunk__35475 = null;
var count__35476 = (0);
var i__35477 = (0);
while(true){
if((i__35477 < count__35476)){
var request__$1 = cljs.core._nth.call(null,chunk__35475,i__35477);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__35478 = seq__35474;
var G__35479 = chunk__35475;
var G__35480 = count__35476;
var G__35481 = (i__35477 + (1));
seq__35474 = G__35478;
chunk__35475 = G__35479;
count__35476 = G__35480;
i__35477 = G__35481;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__35474);
if(temp__5735__auto__){
var seq__35474__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35474__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__35474__$1);
var G__35482 = cljs.core.chunk_rest.call(null,seq__35474__$1);
var G__35483 = c__4550__auto__;
var G__35484 = cljs.core.count.call(null,c__4550__auto__);
var G__35485 = (0);
seq__35474 = G__35482;
chunk__35475 = G__35483;
count__35476 = G__35484;
i__35477 = G__35485;
continue;
} else {
var request__$1 = cljs.core.first.call(null,seq__35474__$1);
ajax.core.ajax_request.call(null,day8.re_frame.http_fx.request__GT_xhrio_options.call(null,request__$1));


var G__35486 = cljs.core.next.call(null,seq__35474__$1);
var G__35487 = null;
var G__35488 = (0);
var G__35489 = (0);
seq__35474 = G__35486;
chunk__35475 = G__35487;
count__35476 = G__35488;
i__35477 = G__35489;
continue;
}
} else {
return null;
}
}
break;
}
});
re_frame.core.reg_fx.call(null,new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),day8.re_frame.http_fx.http_effect);

//# sourceMappingURL=http_fx.js.map?rel=1561299747576
