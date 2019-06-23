// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.18";
figwheel.client.js_stringify = (((((typeof JSON !== 'undefined')) && ((!((JSON.stringify == null))))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}catch (e43644){if((e43644 instanceof Error)){
var e = e43644;
return "Error: Unable to stringify";
} else {
throw e43644;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__43647 = arguments.length;
switch (G__43647) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__43645_SHARP_){
if(typeof p1__43645_SHARP_ === 'string'){
return p1__43645_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__43645_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43650 = arguments.length;
var i__4731__auto___43651 = (0);
while(true){
if((i__4731__auto___43651 < len__4730__auto___43650)){
args__4736__auto__.push((arguments[i__4731__auto___43651]));

var G__43652 = (i__4731__auto___43651 + (1));
i__4731__auto___43651 = G__43652;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq43649){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43649));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4736__auto__ = [];
var len__4730__auto___43654 = arguments.length;
var i__4731__auto___43655 = (0);
while(true){
if((i__4731__auto___43655 < len__4730__auto___43654)){
args__4736__auto__.push((arguments[i__4731__auto___43655]));

var G__43656 = (i__4731__auto___43655 + (1));
i__4731__auto___43655 = G__43656;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq43653){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43653));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),"Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",(cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF")].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__43657){
var map__43658 = p__43657;
var map__43658__$1 = (((((!((map__43658 == null))))?(((((map__43658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43658):map__43658);
var message = cljs.core.get.call(null,map__43658__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__43658__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4131__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4120__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4120__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4120__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__32544__auto___43737 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___43737,ch){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___43737,ch){
return (function (state_43709){
var state_val_43710 = (state_43709[(1)]);
if((state_val_43710 === (7))){
var inst_43705 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43711_43738 = state_43709__$1;
(statearr_43711_43738[(2)] = inst_43705);

(statearr_43711_43738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (1))){
var state_43709__$1 = state_43709;
var statearr_43712_43739 = state_43709__$1;
(statearr_43712_43739[(2)] = null);

(statearr_43712_43739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (4))){
var inst_43662 = (state_43709[(7)]);
var inst_43662__$1 = (state_43709[(2)]);
var state_43709__$1 = (function (){var statearr_43713 = state_43709;
(statearr_43713[(7)] = inst_43662__$1);

return statearr_43713;
})();
if(cljs.core.truth_(inst_43662__$1)){
var statearr_43714_43740 = state_43709__$1;
(statearr_43714_43740[(1)] = (5));

} else {
var statearr_43715_43741 = state_43709__$1;
(statearr_43715_43741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (15))){
var inst_43669 = (state_43709[(8)]);
var inst_43684 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43669);
var inst_43685 = cljs.core.first.call(null,inst_43684);
var inst_43686 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_43685);
var inst_43687 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43686)].join('');
var inst_43688 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_43687);
var state_43709__$1 = state_43709;
var statearr_43716_43742 = state_43709__$1;
(statearr_43716_43742[(2)] = inst_43688);

(statearr_43716_43742[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (13))){
var inst_43693 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43717_43743 = state_43709__$1;
(statearr_43717_43743[(2)] = inst_43693);

(statearr_43717_43743[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (6))){
var state_43709__$1 = state_43709;
var statearr_43718_43744 = state_43709__$1;
(statearr_43718_43744[(2)] = null);

(statearr_43718_43744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (17))){
var inst_43691 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43719_43745 = state_43709__$1;
(statearr_43719_43745[(2)] = inst_43691);

(statearr_43719_43745[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (3))){
var inst_43707 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43709__$1,inst_43707);
} else {
if((state_val_43710 === (12))){
var inst_43668 = (state_43709[(9)]);
var inst_43682 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_43668,opts);
var state_43709__$1 = state_43709;
if(inst_43682){
var statearr_43720_43746 = state_43709__$1;
(statearr_43720_43746[(1)] = (15));

} else {
var statearr_43721_43747 = state_43709__$1;
(statearr_43721_43747[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (2))){
var state_43709__$1 = state_43709;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43709__$1,(4),ch);
} else {
if((state_val_43710 === (11))){
var inst_43669 = (state_43709[(8)]);
var inst_43674 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_43675 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_43669);
var inst_43676 = cljs.core.async.timeout.call(null,(1000));
var inst_43677 = [inst_43675,inst_43676];
var inst_43678 = (new cljs.core.PersistentVector(null,2,(5),inst_43674,inst_43677,null));
var state_43709__$1 = state_43709;
return cljs.core.async.ioc_alts_BANG_.call(null,state_43709__$1,(14),inst_43678);
} else {
if((state_val_43710 === (9))){
var inst_43669 = (state_43709[(8)]);
var inst_43695 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_43696 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_43669);
var inst_43697 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43696);
var inst_43698 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43697)].join('');
var inst_43699 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_43698);
var state_43709__$1 = (function (){var statearr_43722 = state_43709;
(statearr_43722[(10)] = inst_43695);

return statearr_43722;
})();
var statearr_43723_43748 = state_43709__$1;
(statearr_43723_43748[(2)] = inst_43699);

(statearr_43723_43748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (5))){
var inst_43662 = (state_43709[(7)]);
var inst_43664 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_43665 = (new cljs.core.PersistentArrayMap(null,2,inst_43664,null));
var inst_43666 = (new cljs.core.PersistentHashSet(null,inst_43665,null));
var inst_43667 = figwheel.client.focus_msgs.call(null,inst_43666,inst_43662);
var inst_43668 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_43667);
var inst_43669 = cljs.core.first.call(null,inst_43667);
var inst_43670 = figwheel.client.autoload_QMARK_.call(null);
var state_43709__$1 = (function (){var statearr_43724 = state_43709;
(statearr_43724[(9)] = inst_43668);

(statearr_43724[(8)] = inst_43669);

return statearr_43724;
})();
if(cljs.core.truth_(inst_43670)){
var statearr_43725_43749 = state_43709__$1;
(statearr_43725_43749[(1)] = (8));

} else {
var statearr_43726_43750 = state_43709__$1;
(statearr_43726_43750[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (14))){
var inst_43680 = (state_43709[(2)]);
var state_43709__$1 = state_43709;
var statearr_43727_43751 = state_43709__$1;
(statearr_43727_43751[(2)] = inst_43680);

(statearr_43727_43751[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (16))){
var state_43709__$1 = state_43709;
var statearr_43728_43752 = state_43709__$1;
(statearr_43728_43752[(2)] = null);

(statearr_43728_43752[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (10))){
var inst_43701 = (state_43709[(2)]);
var state_43709__$1 = (function (){var statearr_43729 = state_43709;
(statearr_43729[(11)] = inst_43701);

return statearr_43729;
})();
var statearr_43730_43753 = state_43709__$1;
(statearr_43730_43753[(2)] = null);

(statearr_43730_43753[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43710 === (8))){
var inst_43668 = (state_43709[(9)]);
var inst_43672 = figwheel.client.reload_file_state_QMARK_.call(null,inst_43668,opts);
var state_43709__$1 = state_43709;
if(cljs.core.truth_(inst_43672)){
var statearr_43731_43754 = state_43709__$1;
(statearr_43731_43754[(1)] = (11));

} else {
var statearr_43732_43755 = state_43709__$1;
(statearr_43732_43755[(1)] = (12));

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
});})(c__32544__auto___43737,ch))
;
return ((function (switch__32449__auto__,c__32544__auto___43737,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32450__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32450__auto____0 = (function (){
var statearr_43733 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43733[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32450__auto__);

(statearr_43733[(1)] = (1));

return statearr_43733;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32450__auto____1 = (function (state_43709){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_43709);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e43734){if((e43734 instanceof Object)){
var ex__32453__auto__ = e43734;
var statearr_43735_43756 = state_43709;
(statearr_43735_43756[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43709);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43734;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43757 = state_43709;
state_43709 = G__43757;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32450__auto__ = function(state_43709){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32450__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32450__auto____1.call(this,state_43709);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32450__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32450__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___43737,ch))
})();
var state__32546__auto__ = (function (){var statearr_43736 = f__32545__auto__.call(null);
(statearr_43736[(6)] = c__32544__auto___43737);

return statearr_43736;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___43737,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__43758_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__43758_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(figwheel.client.utils.node_env_QMARK_.call(null)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_43764 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_43764){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__43760 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__43761 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__43762 = true;
var _STAR_print_fn_STAR__temp_val__43763 = ((function (_STAR_print_newline_STAR__orig_val__43760,_STAR_print_fn_STAR__orig_val__43761,_STAR_print_newline_STAR__temp_val__43762,sb,base_path_43764){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR__orig_val__43760,_STAR_print_fn_STAR__orig_val__43761,_STAR_print_newline_STAR__temp_val__43762,sb,base_path_43764))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__43762;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__43763;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
var result_value__$1 = (((!(typeof result_value === 'string')))?cljs.core.pr_str.call(null,result_value):result_value);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value__$1], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__43761;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__43760;
}}catch (e43759){if((e43759 instanceof Error)){
var e = e43759;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_43764], null));
} else {
var e = e43759;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_43764))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__43765){
var map__43766 = p__43765;
var map__43766__$1 = (((((!((map__43766 == null))))?(((((map__43766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43766):map__43766);
var opts = map__43766__$1;
var build_id = cljs.core.get.call(null,map__43766__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__43766,map__43766__$1,opts,build_id){
return (function (p__43768){
var vec__43769 = p__43768;
var seq__43770 = cljs.core.seq.call(null,vec__43769);
var first__43771 = cljs.core.first.call(null,seq__43770);
var seq__43770__$1 = cljs.core.next.call(null,seq__43770);
var map__43772 = first__43771;
var map__43772__$1 = (((((!((map__43772 == null))))?(((((map__43772.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43772.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43772):map__43772);
var msg = map__43772__$1;
var msg_name = cljs.core.get.call(null,map__43772__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43770__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__43769,seq__43770,first__43771,seq__43770__$1,map__43772,map__43772__$1,msg,msg_name,_,map__43766,map__43766__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__43769,seq__43770,first__43771,seq__43770__$1,map__43772,map__43772__$1,msg,msg_name,_,map__43766,map__43766__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__43766,map__43766__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__43774){
var vec__43775 = p__43774;
var seq__43776 = cljs.core.seq.call(null,vec__43775);
var first__43777 = cljs.core.first.call(null,seq__43776);
var seq__43776__$1 = cljs.core.next.call(null,seq__43776);
var map__43778 = first__43777;
var map__43778__$1 = (((((!((map__43778 == null))))?(((((map__43778.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43778.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43778):map__43778);
var msg = map__43778__$1;
var msg_name = cljs.core.get.call(null,map__43778__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43776__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__43780){
var map__43781 = p__43780;
var map__43781__$1 = (((((!((map__43781 == null))))?(((((map__43781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43781.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43781):map__43781);
var on_compile_warning = cljs.core.get.call(null,map__43781__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__43781__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__43781,map__43781__$1,on_compile_warning,on_compile_fail){
return (function (p__43783){
var vec__43784 = p__43783;
var seq__43785 = cljs.core.seq.call(null,vec__43784);
var first__43786 = cljs.core.first.call(null,seq__43785);
var seq__43785__$1 = cljs.core.next.call(null,seq__43785);
var map__43787 = first__43786;
var map__43787__$1 = (((((!((map__43787 == null))))?(((((map__43787.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43787.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43787):map__43787);
var msg = map__43787__$1;
var msg_name = cljs.core.get.call(null,map__43787__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__43785__$1;
var pred__43789 = cljs.core._EQ_;
var expr__43790 = msg_name;
if(cljs.core.truth_(pred__43789.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__43790))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__43789.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__43790))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__43781,map__43781__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__,msg_hist,msg_names,msg){
return (function (state_43879){
var state_val_43880 = (state_43879[(1)]);
if((state_val_43880 === (7))){
var inst_43799 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
if(cljs.core.truth_(inst_43799)){
var statearr_43881_43928 = state_43879__$1;
(statearr_43881_43928[(1)] = (8));

} else {
var statearr_43882_43929 = state_43879__$1;
(statearr_43882_43929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (20))){
var inst_43873 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43883_43930 = state_43879__$1;
(statearr_43883_43930[(2)] = inst_43873);

(statearr_43883_43930[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (27))){
var inst_43869 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43884_43931 = state_43879__$1;
(statearr_43884_43931[(2)] = inst_43869);

(statearr_43884_43931[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (1))){
var inst_43792 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_43879__$1 = state_43879;
if(cljs.core.truth_(inst_43792)){
var statearr_43885_43932 = state_43879__$1;
(statearr_43885_43932[(1)] = (2));

} else {
var statearr_43886_43933 = state_43879__$1;
(statearr_43886_43933[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (24))){
var inst_43871 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43887_43934 = state_43879__$1;
(statearr_43887_43934[(2)] = inst_43871);

(statearr_43887_43934[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (4))){
var inst_43877 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43879__$1,inst_43877);
} else {
if((state_val_43880 === (15))){
var inst_43875 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43888_43935 = state_43879__$1;
(statearr_43888_43935[(2)] = inst_43875);

(statearr_43888_43935[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (21))){
var inst_43828 = (state_43879[(2)]);
var inst_43829 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43830 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43829);
var state_43879__$1 = (function (){var statearr_43889 = state_43879;
(statearr_43889[(7)] = inst_43828);

return statearr_43889;
})();
var statearr_43890_43936 = state_43879__$1;
(statearr_43890_43936[(2)] = inst_43830);

(statearr_43890_43936[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (31))){
var inst_43858 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_43879__$1 = state_43879;
if(inst_43858){
var statearr_43891_43937 = state_43879__$1;
(statearr_43891_43937[(1)] = (34));

} else {
var statearr_43892_43938 = state_43879__$1;
(statearr_43892_43938[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (32))){
var inst_43867 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43893_43939 = state_43879__$1;
(statearr_43893_43939[(2)] = inst_43867);

(statearr_43893_43939[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (33))){
var inst_43854 = (state_43879[(2)]);
var inst_43855 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43856 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43855);
var state_43879__$1 = (function (){var statearr_43894 = state_43879;
(statearr_43894[(8)] = inst_43854);

return statearr_43894;
})();
var statearr_43895_43940 = state_43879__$1;
(statearr_43895_43940[(2)] = inst_43856);

(statearr_43895_43940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (13))){
var inst_43813 = figwheel.client.heads_up.clear.call(null);
var state_43879__$1 = state_43879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(16),inst_43813);
} else {
if((state_val_43880 === (22))){
var inst_43834 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43835 = figwheel.client.heads_up.append_warning_message.call(null,inst_43834);
var state_43879__$1 = state_43879;
var statearr_43896_43941 = state_43879__$1;
(statearr_43896_43941[(2)] = inst_43835);

(statearr_43896_43941[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (36))){
var inst_43865 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43897_43942 = state_43879__$1;
(statearr_43897_43942[(2)] = inst_43865);

(statearr_43897_43942[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (29))){
var inst_43845 = (state_43879[(2)]);
var inst_43846 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43847 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43846);
var state_43879__$1 = (function (){var statearr_43898 = state_43879;
(statearr_43898[(9)] = inst_43845);

return statearr_43898;
})();
var statearr_43899_43943 = state_43879__$1;
(statearr_43899_43943[(2)] = inst_43847);

(statearr_43899_43943[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (6))){
var inst_43794 = (state_43879[(10)]);
var state_43879__$1 = state_43879;
var statearr_43900_43944 = state_43879__$1;
(statearr_43900_43944[(2)] = inst_43794);

(statearr_43900_43944[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (28))){
var inst_43841 = (state_43879[(2)]);
var inst_43842 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43843 = figwheel.client.heads_up.display_warning.call(null,inst_43842);
var state_43879__$1 = (function (){var statearr_43901 = state_43879;
(statearr_43901[(11)] = inst_43841);

return statearr_43901;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(29),inst_43843);
} else {
if((state_val_43880 === (25))){
var inst_43839 = figwheel.client.heads_up.clear.call(null);
var state_43879__$1 = state_43879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(28),inst_43839);
} else {
if((state_val_43880 === (34))){
var inst_43860 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43879__$1 = state_43879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(37),inst_43860);
} else {
if((state_val_43880 === (17))){
var inst_43819 = (state_43879[(2)]);
var inst_43820 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43821 = figwheel.client.auto_jump_to_error.call(null,opts,inst_43820);
var state_43879__$1 = (function (){var statearr_43902 = state_43879;
(statearr_43902[(12)] = inst_43819);

return statearr_43902;
})();
var statearr_43903_43945 = state_43879__$1;
(statearr_43903_43945[(2)] = inst_43821);

(statearr_43903_43945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (3))){
var inst_43811 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_43879__$1 = state_43879;
if(inst_43811){
var statearr_43904_43946 = state_43879__$1;
(statearr_43904_43946[(1)] = (13));

} else {
var statearr_43905_43947 = state_43879__$1;
(statearr_43905_43947[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (12))){
var inst_43807 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43906_43948 = state_43879__$1;
(statearr_43906_43948[(2)] = inst_43807);

(statearr_43906_43948[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (2))){
var inst_43794 = (state_43879[(10)]);
var inst_43794__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_43879__$1 = (function (){var statearr_43907 = state_43879;
(statearr_43907[(10)] = inst_43794__$1);

return statearr_43907;
})();
if(cljs.core.truth_(inst_43794__$1)){
var statearr_43908_43949 = state_43879__$1;
(statearr_43908_43949[(1)] = (5));

} else {
var statearr_43909_43950 = state_43879__$1;
(statearr_43909_43950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (23))){
var inst_43837 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_43879__$1 = state_43879;
if(inst_43837){
var statearr_43910_43951 = state_43879__$1;
(statearr_43910_43951[(1)] = (25));

} else {
var statearr_43911_43952 = state_43879__$1;
(statearr_43911_43952[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (35))){
var state_43879__$1 = state_43879;
var statearr_43912_43953 = state_43879__$1;
(statearr_43912_43953[(2)] = null);

(statearr_43912_43953[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (19))){
var inst_43832 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_43879__$1 = state_43879;
if(inst_43832){
var statearr_43913_43954 = state_43879__$1;
(statearr_43913_43954[(1)] = (22));

} else {
var statearr_43914_43955 = state_43879__$1;
(statearr_43914_43955[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (11))){
var inst_43803 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43915_43956 = state_43879__$1;
(statearr_43915_43956[(2)] = inst_43803);

(statearr_43915_43956[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (9))){
var inst_43805 = figwheel.client.heads_up.clear.call(null);
var state_43879__$1 = state_43879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(12),inst_43805);
} else {
if((state_val_43880 === (5))){
var inst_43796 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_43879__$1 = state_43879;
var statearr_43916_43957 = state_43879__$1;
(statearr_43916_43957[(2)] = inst_43796);

(statearr_43916_43957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (14))){
var inst_43823 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_43879__$1 = state_43879;
if(inst_43823){
var statearr_43917_43958 = state_43879__$1;
(statearr_43917_43958[(1)] = (18));

} else {
var statearr_43918_43959 = state_43879__$1;
(statearr_43918_43959[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (26))){
var inst_43849 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_43879__$1 = state_43879;
if(inst_43849){
var statearr_43919_43960 = state_43879__$1;
(statearr_43919_43960[(1)] = (30));

} else {
var statearr_43920_43961 = state_43879__$1;
(statearr_43920_43961[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (16))){
var inst_43815 = (state_43879[(2)]);
var inst_43816 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43817 = figwheel.client.heads_up.display_exception.call(null,inst_43816);
var state_43879__$1 = (function (){var statearr_43921 = state_43879;
(statearr_43921[(13)] = inst_43815);

return statearr_43921;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(17),inst_43817);
} else {
if((state_val_43880 === (30))){
var inst_43851 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43852 = figwheel.client.heads_up.display_warning.call(null,inst_43851);
var state_43879__$1 = state_43879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(33),inst_43852);
} else {
if((state_val_43880 === (10))){
var inst_43809 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43922_43962 = state_43879__$1;
(statearr_43922_43962[(2)] = inst_43809);

(statearr_43922_43962[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (18))){
var inst_43825 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_43826 = figwheel.client.heads_up.display_exception.call(null,inst_43825);
var state_43879__$1 = state_43879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(21),inst_43826);
} else {
if((state_val_43880 === (37))){
var inst_43862 = (state_43879[(2)]);
var state_43879__$1 = state_43879;
var statearr_43923_43963 = state_43879__$1;
(statearr_43923_43963[(2)] = inst_43862);

(statearr_43923_43963[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43880 === (8))){
var inst_43801 = figwheel.client.heads_up.flash_loaded.call(null);
var state_43879__$1 = state_43879;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43879__$1,(11),inst_43801);
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
}
});})(c__32544__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32449__auto__,c__32544__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto____0 = (function (){
var statearr_43924 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43924[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto__);

(statearr_43924[(1)] = (1));

return statearr_43924;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto____1 = (function (state_43879){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_43879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e43925){if((e43925 instanceof Object)){
var ex__32453__auto__ = e43925;
var statearr_43926_43964 = state_43879;
(statearr_43926_43964[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43925;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43965 = state_43879;
state_43879 = G__43965;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto__ = function(state_43879){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto____1.call(this,state_43879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__,msg_hist,msg_names,msg))
})();
var state__32546__auto__ = (function (){var statearr_43927 = f__32545__auto__.call(null);
(statearr_43927[(6)] = c__32544__auto__);

return statearr_43927;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__,msg_hist,msg_names,msg))
);

return c__32544__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32544__auto___43994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___43994,ch){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___43994,ch){
return (function (state_43980){
var state_val_43981 = (state_43980[(1)]);
if((state_val_43981 === (1))){
var state_43980__$1 = state_43980;
var statearr_43982_43995 = state_43980__$1;
(statearr_43982_43995[(2)] = null);

(statearr_43982_43995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43981 === (2))){
var state_43980__$1 = state_43980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43980__$1,(4),ch);
} else {
if((state_val_43981 === (3))){
var inst_43978 = (state_43980[(2)]);
var state_43980__$1 = state_43980;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43980__$1,inst_43978);
} else {
if((state_val_43981 === (4))){
var inst_43968 = (state_43980[(7)]);
var inst_43968__$1 = (state_43980[(2)]);
var state_43980__$1 = (function (){var statearr_43983 = state_43980;
(statearr_43983[(7)] = inst_43968__$1);

return statearr_43983;
})();
if(cljs.core.truth_(inst_43968__$1)){
var statearr_43984_43996 = state_43980__$1;
(statearr_43984_43996[(1)] = (5));

} else {
var statearr_43985_43997 = state_43980__$1;
(statearr_43985_43997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43981 === (5))){
var inst_43968 = (state_43980[(7)]);
var inst_43970 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_43968);
var state_43980__$1 = state_43980;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43980__$1,(8),inst_43970);
} else {
if((state_val_43981 === (6))){
var state_43980__$1 = state_43980;
var statearr_43986_43998 = state_43980__$1;
(statearr_43986_43998[(2)] = null);

(statearr_43986_43998[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43981 === (7))){
var inst_43976 = (state_43980[(2)]);
var state_43980__$1 = state_43980;
var statearr_43987_43999 = state_43980__$1;
(statearr_43987_43999[(2)] = inst_43976);

(statearr_43987_43999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43981 === (8))){
var inst_43972 = (state_43980[(2)]);
var state_43980__$1 = (function (){var statearr_43988 = state_43980;
(statearr_43988[(8)] = inst_43972);

return statearr_43988;
})();
var statearr_43989_44000 = state_43980__$1;
(statearr_43989_44000[(2)] = null);

(statearr_43989_44000[(1)] = (2));


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
});})(c__32544__auto___43994,ch))
;
return ((function (switch__32449__auto__,c__32544__auto___43994,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32450__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32450__auto____0 = (function (){
var statearr_43990 = [null,null,null,null,null,null,null,null,null];
(statearr_43990[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32450__auto__);

(statearr_43990[(1)] = (1));

return statearr_43990;
});
var figwheel$client$heads_up_plugin_$_state_machine__32450__auto____1 = (function (state_43980){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_43980);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e43991){if((e43991 instanceof Object)){
var ex__32453__auto__ = e43991;
var statearr_43992_44001 = state_43980;
(statearr_43992_44001[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43980);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43991;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44002 = state_43980;
state_43980 = G__44002;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32450__auto__ = function(state_43980){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32450__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32450__auto____1.call(this,state_43980);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32450__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32450__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___43994,ch))
})();
var state__32546__auto__ = (function (){var statearr_43993 = f__32545__auto__.call(null);
(statearr_43993[(6)] = c__32544__auto___43994);

return statearr_43993;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___43994,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__){
return (function (state_44008){
var state_val_44009 = (state_44008[(1)]);
if((state_val_44009 === (1))){
var inst_44003 = cljs.core.async.timeout.call(null,(3000));
var state_44008__$1 = state_44008;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44008__$1,(2),inst_44003);
} else {
if((state_val_44009 === (2))){
var inst_44005 = (state_44008[(2)]);
var inst_44006 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_44008__$1 = (function (){var statearr_44010 = state_44008;
(statearr_44010[(7)] = inst_44005);

return statearr_44010;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44008__$1,inst_44006);
} else {
return null;
}
}
});})(c__32544__auto__))
;
return ((function (switch__32449__auto__,c__32544__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32450__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32450__auto____0 = (function (){
var statearr_44011 = [null,null,null,null,null,null,null,null];
(statearr_44011[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32450__auto__);

(statearr_44011[(1)] = (1));

return statearr_44011;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32450__auto____1 = (function (state_44008){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_44008);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e44012){if((e44012 instanceof Object)){
var ex__32453__auto__ = e44012;
var statearr_44013_44015 = state_44008;
(statearr_44013_44015[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44008);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44016 = state_44008;
state_44008 = G__44016;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32450__auto__ = function(state_44008){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32450__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32450__auto____1.call(this,state_44008);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32450__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32450__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__))
})();
var state__32546__auto__ = (function (){var statearr_44014 = f__32545__auto__.call(null);
(statearr_44014[(6)] = c__32544__auto__);

return statearr_44014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__))
);

return c__32544__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5735__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5735__auto__)){
var figwheel_version = temp__5735__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__,figwheel_version,temp__5735__auto__){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__,figwheel_version,temp__5735__auto__){
return (function (state_44023){
var state_val_44024 = (state_44023[(1)]);
if((state_val_44024 === (1))){
var inst_44017 = cljs.core.async.timeout.call(null,(2000));
var state_44023__$1 = state_44023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44023__$1,(2),inst_44017);
} else {
if((state_val_44024 === (2))){
var inst_44019 = (state_44023[(2)]);
var inst_44020 = ["Figwheel Client Version <strong>",figwheel.client._figwheel_version_,"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_44021 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_44020);
var state_44023__$1 = (function (){var statearr_44025 = state_44023;
(statearr_44025[(7)] = inst_44019);

return statearr_44025;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44023__$1,inst_44021);
} else {
return null;
}
}
});})(c__32544__auto__,figwheel_version,temp__5735__auto__))
;
return ((function (switch__32449__auto__,c__32544__auto__,figwheel_version,temp__5735__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto____0 = (function (){
var statearr_44026 = [null,null,null,null,null,null,null,null];
(statearr_44026[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto__);

(statearr_44026[(1)] = (1));

return statearr_44026;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto____1 = (function (state_44023){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_44023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e44027){if((e44027 instanceof Object)){
var ex__32453__auto__ = e44027;
var statearr_44028_44030 = state_44023;
(statearr_44028_44030[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e44027;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__44031 = state_44023;
state_44023 = G__44031;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto__ = function(state_44023){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto____1.call(this,state_44023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__,figwheel_version,temp__5735__auto__))
})();
var state__32546__auto__ = (function (){var statearr_44029 = f__32545__auto__.call(null);
(statearr_44029[(6)] = c__32544__auto__);

return statearr_44029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__,figwheel_version,temp__5735__auto__))
);

return c__32544__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__44032){
var map__44033 = p__44032;
var map__44033__$1 = (((((!((map__44033 == null))))?(((((map__44033.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44033.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44033):map__44033);
var file = cljs.core.get.call(null,map__44033__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__44033__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__44033__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__44035 = "";
var G__44035__$1 = (cljs.core.truth_(file)?[G__44035,"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__44035);
var G__44035__$2 = (cljs.core.truth_(line)?[G__44035__$1," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__44035__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = line;
if(cljs.core.truth_(and__4120__auto__)){
return column;
} else {
return and__4120__auto__;
}
})())){
return [G__44035__$2,", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__44035__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__44036){
var map__44037 = p__44036;
var map__44037__$1 = (((((!((map__44037 == null))))?(((((map__44037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44037):map__44037);
var ed = map__44037__$1;
var exception_data = cljs.core.get.call(null,map__44037__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__44037__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
var message_44040 = (function (){var G__44039 = cljs.core.apply.call(null,cljs.core.str,"Figwheel: Compile Exception ",figwheel.client.format_messages.call(null,exception_data));
if(cljs.core.truth_(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(exception_data))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__44039)," Error on ",figwheel.client.file_line_column.call(null,exception_data)].join('');
} else {
return G__44039;
}
})();
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),message_44040);

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__44041){
var map__44042 = p__44041;
var map__44042__$1 = (((((!((map__44042 == null))))?(((((map__44042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44042):map__44042);
var w = map__44042__$1;
var message = cljs.core.get.call(null,map__44042__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",figwheel.client.file_line_column.call(null,message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.config_defaults !== 'undefined')){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,362,362,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(figwheel.client.utils.html_env_QMARK_.call(null)){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = (((!(figwheel.client.utils.html_env_QMARK_.call(null))))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4120__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4120__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__44044 = cljs.core.seq.call(null,plugins);
var chunk__44045 = null;
var count__44046 = (0);
var i__44047 = (0);
while(true){
if((i__44047 < count__44046)){
var vec__44054 = cljs.core._nth.call(null,chunk__44045,i__44047);
var k = cljs.core.nth.call(null,vec__44054,(0),null);
var plugin = cljs.core.nth.call(null,vec__44054,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44060 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44044,chunk__44045,count__44046,i__44047,pl_44060,vec__44054,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_44060.call(null,msg_hist);
});})(seq__44044,chunk__44045,count__44046,i__44047,pl_44060,vec__44054,k,plugin))
);
} else {
}


var G__44061 = seq__44044;
var G__44062 = chunk__44045;
var G__44063 = count__44046;
var G__44064 = (i__44047 + (1));
seq__44044 = G__44061;
chunk__44045 = G__44062;
count__44046 = G__44063;
i__44047 = G__44064;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__44044);
if(temp__5735__auto__){
var seq__44044__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44044__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__44044__$1);
var G__44065 = cljs.core.chunk_rest.call(null,seq__44044__$1);
var G__44066 = c__4550__auto__;
var G__44067 = cljs.core.count.call(null,c__4550__auto__);
var G__44068 = (0);
seq__44044 = G__44065;
chunk__44045 = G__44066;
count__44046 = G__44067;
i__44047 = G__44068;
continue;
} else {
var vec__44057 = cljs.core.first.call(null,seq__44044__$1);
var k = cljs.core.nth.call(null,vec__44057,(0),null);
var plugin = cljs.core.nth.call(null,vec__44057,(1),null);
if(cljs.core.truth_(plugin)){
var pl_44069 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__44044,chunk__44045,count__44046,i__44047,pl_44069,vec__44057,k,plugin,seq__44044__$1,temp__5735__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_44069.call(null,msg_hist);
});})(seq__44044,chunk__44045,count__44046,i__44047,pl_44069,vec__44057,k,plugin,seq__44044__$1,temp__5735__auto__))
);
} else {
}


var G__44070 = cljs.core.next.call(null,seq__44044__$1);
var G__44071 = null;
var G__44072 = (0);
var G__44073 = (0);
seq__44044 = G__44070;
chunk__44045 = G__44071;
count__44046 = G__44072;
i__44047 = G__44073;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__44075 = arguments.length;
switch (G__44075) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.__figwheel_start_once__ !== 'undefined')){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__44076_44081 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__44077_44082 = null;
var count__44078_44083 = (0);
var i__44079_44084 = (0);
while(true){
if((i__44079_44084 < count__44078_44083)){
var msg_44085 = cljs.core._nth.call(null,chunk__44077_44082,i__44079_44084);
figwheel.client.socket.handle_incoming_message.call(null,msg_44085);


var G__44086 = seq__44076_44081;
var G__44087 = chunk__44077_44082;
var G__44088 = count__44078_44083;
var G__44089 = (i__44079_44084 + (1));
seq__44076_44081 = G__44086;
chunk__44077_44082 = G__44087;
count__44078_44083 = G__44088;
i__44079_44084 = G__44089;
continue;
} else {
var temp__5735__auto___44090 = cljs.core.seq.call(null,seq__44076_44081);
if(temp__5735__auto___44090){
var seq__44076_44091__$1 = temp__5735__auto___44090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__44076_44091__$1)){
var c__4550__auto___44092 = cljs.core.chunk_first.call(null,seq__44076_44091__$1);
var G__44093 = cljs.core.chunk_rest.call(null,seq__44076_44091__$1);
var G__44094 = c__4550__auto___44092;
var G__44095 = cljs.core.count.call(null,c__4550__auto___44092);
var G__44096 = (0);
seq__44076_44081 = G__44093;
chunk__44077_44082 = G__44094;
count__44078_44083 = G__44095;
i__44079_44084 = G__44096;
continue;
} else {
var msg_44097 = cljs.core.first.call(null,seq__44076_44091__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_44097);


var G__44098 = cljs.core.next.call(null,seq__44076_44091__$1);
var G__44099 = null;
var G__44100 = (0);
var G__44101 = (0);
seq__44076_44081 = G__44098;
chunk__44077_44082 = G__44099;
count__44078_44083 = G__44100;
i__44079_44084 = G__44101;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4736__auto__ = [];
var len__4730__auto___44106 = arguments.length;
var i__4731__auto___44107 = (0);
while(true){
if((i__4731__auto___44107 < len__4730__auto___44106)){
args__4736__auto__.push((arguments[i__4731__auto___44107]));

var G__44108 = (i__4731__auto___44107 + (1));
i__4731__auto___44107 = G__44108;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__44103){
var map__44104 = p__44103;
var map__44104__$1 = (((((!((map__44104 == null))))?(((((map__44104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44104):map__44104);
var opts = map__44104__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq44102){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq44102));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e44109){if((e44109 instanceof Error)){
var e = e44109;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e44109;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__44110){
var map__44111 = p__44110;
var map__44111__$1 = (((((!((map__44111 == null))))?(((((map__44111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__44111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__44111):map__44111);
var msg_name = cljs.core.get.call(null,map__44111__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1561299757860