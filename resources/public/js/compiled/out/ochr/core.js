// Compiled by ClojureScript 1.10.520 {}
goog.provide('ochr.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('ochr.events');
goog.require('ochr.routes');
goog.require('ochr.views');
goog.require('ochr.config');
goog.require('day8.re_frame.http_fx');
ochr.core.dev_setup = (function ochr$core$dev_setup(){
if(ochr.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
ochr.core.mount_root = (function ochr$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ochr.views.main_panel], null),document.getElementById("app"));
});
ochr.core.init = (function ochr$core$init(){
ochr.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ochr.events","initialize-db","ochr.events/initialize-db",1205008007)], null));

ochr.core.dev_setup.call(null);

return ochr.core.mount_root.call(null);
});
goog.exportSymbol('ochr.core.init', ochr.core.init);

//# sourceMappingURL=core.js.map?rel=1561301725164
