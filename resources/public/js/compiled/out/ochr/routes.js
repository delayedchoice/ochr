// Compiled by ClojureScript 1.10.520 {}
goog.provide('ochr.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('ochr.events');
ochr.routes.hook_browser_navigation_BANG_ = (function ochr$routes$hook_browser_navigation_BANG_(){
var G__32244 = (new goog.History());
goog.events.listen(G__32244,goog.history.EventType.NAVIGATE,((function (G__32244){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__32244))
);

G__32244.setEnabled(true);

return G__32244;
});
ochr.routes.app_routes = (function ochr$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__31971__auto___32255 = (function (params__31972__auto__){
if(cljs.core.map_QMARK_.call(null,params__31972__auto__)){
var map__32245 = params__31972__auto__;
var map__32245__$1 = (((((!((map__32245 == null))))?(((((map__32245.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32245.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32245):map__32245);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ochr.events","set-active-panel","ochr.events/set-active-panel",-1871715119),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31972__auto__)){
var vec__32247 = params__31972__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ochr.events","set-active-panel","ochr.events/set-active-panel",-1871715119),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__31971__auto___32255);


var action__31971__auto___32256 = (function (params__31972__auto__){
if(cljs.core.map_QMARK_.call(null,params__31972__auto__)){
var map__32250 = params__31972__auto__;
var map__32250__$1 = (((((!((map__32250 == null))))?(((((map__32250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32250):map__32250);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ochr.events","set-active-panel","ochr.events/set-active-panel",-1871715119),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__31972__auto__)){
var vec__32252 = params__31972__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ochr.events","set-active-panel","ochr.events/set-active-panel",-1871715119),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__31971__auto___32256);


return ochr.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1561301725137
