// Compiled by ClojureScript 1.10.520 {}
goog.provide('ochr.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('ochr.db');
goog.require('ajax.core');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ochr.events","initialize-db","ochr.events/initialize-db",1205008007),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__31881__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__31882__auto__ = ochr.db.default_db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__31882__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__31882__auto__;
}catch (e32216){var e = e32216;
throw e;
}}):(function (_,___$1){
return ochr.db.default_db;
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ochr.events","set-active-panel","ochr.events/set-active-panel",-1871715119),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__32217){
var vec__32218 = p__32217;
var _ = cljs.core.nth.call(null,vec__32218,(0),null);
var active_panel = cljs.core.nth.call(null,vec__32218,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)));

var opts__31881__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__31882__auto__ = cljs.core.assoc.call(null,(function (){var opts__31881__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__31882__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__31882__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__31882__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var opts__31881__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__31882__auto__ = active_panel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__31882__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__31882__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__31882__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__31882__auto__;
}catch (e32221){var e = e32221;
throw e;
}}):(function (db,p__32222){
var vec__32223 = p__32222;
var _ = cljs.core.nth.call(null,vec__32223,(0),null);
var active_panel = cljs.core.nth.call(null,vec__32223,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
})));
re_frame.core.reg_event_fx.call(null,new cljs.core.Keyword("ochr.events","upload","ochr.events/upload",-1247076761),(function (p__32226,p__32227){
var map__32228 = p__32226;
var map__32228__$1 = (((((!((map__32228 == null))))?(((((map__32228.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32228.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32228):map__32228);
var db = cljs.core.get.call(null,map__32228__$1,new cljs.core.Keyword(null,"db","db",993250759));
var vec__32229 = p__32227;
var _ = cljs.core.nth.call(null,vec__32229,(0),null);
var file = cljs.core.nth.call(null,vec__32229,(1),null);
var form_data = (function (){var G__32233 = (new FormData());
G__32233.append("id","10");

G__32233.append("file",file,"filename.txt");

return G__32233;
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"show-twirly","show-twirly",1191467838),true),new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"uri","uri",-774711847),"http://locaolhost:3449/ochr",new cljs.core.Keyword(null,"timeout","timeout",-318625318),(8000),new cljs.core.Keyword(null,"body","body",-2049205669),form_data,new cljs.core.Keyword(null,"response-format","response-format",1664465322),ajax.core.json_response_format.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keywords?","keywords?",764949733),true], null)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ochr.events","good-upload","ochr.events/good-upload",-1550145337)], null),new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("ochr.events","bad-upload","ochr.events/bad-upload",-1488160320)], null)], null)], null);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ochr.events","good-upload","ochr.events/good-upload",-1550145337),(function (db,p__32234){
var vec__32235 = p__32234;
var _ = cljs.core.nth.call(null,vec__32235,(0),null);
var result = cljs.core.nth.call(null,vec__32235,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"http-result","http-result",-1011983391),result);
}));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("ochr.events","bad-upload","ochr.events/bad-upload",-1488160320),(function (db,p__32238){
var vec__32239 = p__32238;
var _ = cljs.core.nth.call(null,vec__32239,(0),null);
var result = cljs.core.nth.call(null,vec__32239,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"http-result","http-result",-1011983391),result);
}));

//# sourceMappingURL=events.js.map?rel=1561301725051
