// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29484){
var map__29485 = p__29484;
var map__29485__$1 = (((((!((map__29485 == null))))?(((((map__29485.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29485.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29485):map__29485);
var m = map__29485__$1;
var n = cljs.core.get.call(null,map__29485__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29485__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29487_29519 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29488_29520 = null;
var count__29489_29521 = (0);
var i__29490_29522 = (0);
while(true){
if((i__29490_29522 < count__29489_29521)){
var f_29523 = cljs.core._nth.call(null,chunk__29488_29520,i__29490_29522);
cljs.core.println.call(null,"  ",f_29523);


var G__29524 = seq__29487_29519;
var G__29525 = chunk__29488_29520;
var G__29526 = count__29489_29521;
var G__29527 = (i__29490_29522 + (1));
seq__29487_29519 = G__29524;
chunk__29488_29520 = G__29525;
count__29489_29521 = G__29526;
i__29490_29522 = G__29527;
continue;
} else {
var temp__5735__auto___29528 = cljs.core.seq.call(null,seq__29487_29519);
if(temp__5735__auto___29528){
var seq__29487_29529__$1 = temp__5735__auto___29528;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29487_29529__$1)){
var c__4550__auto___29530 = cljs.core.chunk_first.call(null,seq__29487_29529__$1);
var G__29531 = cljs.core.chunk_rest.call(null,seq__29487_29529__$1);
var G__29532 = c__4550__auto___29530;
var G__29533 = cljs.core.count.call(null,c__4550__auto___29530);
var G__29534 = (0);
seq__29487_29519 = G__29531;
chunk__29488_29520 = G__29532;
count__29489_29521 = G__29533;
i__29490_29522 = G__29534;
continue;
} else {
var f_29535 = cljs.core.first.call(null,seq__29487_29529__$1);
cljs.core.println.call(null,"  ",f_29535);


var G__29536 = cljs.core.next.call(null,seq__29487_29529__$1);
var G__29537 = null;
var G__29538 = (0);
var G__29539 = (0);
seq__29487_29519 = G__29536;
chunk__29488_29520 = G__29537;
count__29489_29521 = G__29538;
i__29490_29522 = G__29539;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29540 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29540);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29540)))?cljs.core.second.call(null,arglists_29540):arglists_29540));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__29491_29541 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29492_29542 = null;
var count__29493_29543 = (0);
var i__29494_29544 = (0);
while(true){
if((i__29494_29544 < count__29493_29543)){
var vec__29505_29545 = cljs.core._nth.call(null,chunk__29492_29542,i__29494_29544);
var name_29546 = cljs.core.nth.call(null,vec__29505_29545,(0),null);
var map__29508_29547 = cljs.core.nth.call(null,vec__29505_29545,(1),null);
var map__29508_29548__$1 = (((((!((map__29508_29547 == null))))?(((((map__29508_29547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29508_29547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29508_29547):map__29508_29547);
var doc_29549 = cljs.core.get.call(null,map__29508_29548__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29550 = cljs.core.get.call(null,map__29508_29548__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29546);

cljs.core.println.call(null," ",arglists_29550);

if(cljs.core.truth_(doc_29549)){
cljs.core.println.call(null," ",doc_29549);
} else {
}


var G__29551 = seq__29491_29541;
var G__29552 = chunk__29492_29542;
var G__29553 = count__29493_29543;
var G__29554 = (i__29494_29544 + (1));
seq__29491_29541 = G__29551;
chunk__29492_29542 = G__29552;
count__29493_29543 = G__29553;
i__29494_29544 = G__29554;
continue;
} else {
var temp__5735__auto___29555 = cljs.core.seq.call(null,seq__29491_29541);
if(temp__5735__auto___29555){
var seq__29491_29556__$1 = temp__5735__auto___29555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29491_29556__$1)){
var c__4550__auto___29557 = cljs.core.chunk_first.call(null,seq__29491_29556__$1);
var G__29558 = cljs.core.chunk_rest.call(null,seq__29491_29556__$1);
var G__29559 = c__4550__auto___29557;
var G__29560 = cljs.core.count.call(null,c__4550__auto___29557);
var G__29561 = (0);
seq__29491_29541 = G__29558;
chunk__29492_29542 = G__29559;
count__29493_29543 = G__29560;
i__29494_29544 = G__29561;
continue;
} else {
var vec__29510_29562 = cljs.core.first.call(null,seq__29491_29556__$1);
var name_29563 = cljs.core.nth.call(null,vec__29510_29562,(0),null);
var map__29513_29564 = cljs.core.nth.call(null,vec__29510_29562,(1),null);
var map__29513_29565__$1 = (((((!((map__29513_29564 == null))))?(((((map__29513_29564.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29513_29564.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29513_29564):map__29513_29564);
var doc_29566 = cljs.core.get.call(null,map__29513_29565__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29567 = cljs.core.get.call(null,map__29513_29565__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29563);

cljs.core.println.call(null," ",arglists_29567);

if(cljs.core.truth_(doc_29566)){
cljs.core.println.call(null," ",doc_29566);
} else {
}


var G__29568 = cljs.core.next.call(null,seq__29491_29556__$1);
var G__29569 = null;
var G__29570 = (0);
var G__29571 = (0);
seq__29491_29541 = G__29568;
chunk__29492_29542 = G__29569;
count__29493_29543 = G__29570;
i__29494_29544 = G__29571;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__29515 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29516 = null;
var count__29517 = (0);
var i__29518 = (0);
while(true){
if((i__29518 < count__29517)){
var role = cljs.core._nth.call(null,chunk__29516,i__29518);
var temp__5735__auto___29572__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29572__$1)){
var spec_29573 = temp__5735__auto___29572__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29573));
} else {
}


var G__29574 = seq__29515;
var G__29575 = chunk__29516;
var G__29576 = count__29517;
var G__29577 = (i__29518 + (1));
seq__29515 = G__29574;
chunk__29516 = G__29575;
count__29517 = G__29576;
i__29518 = G__29577;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__29515);
if(temp__5735__auto____$1){
var seq__29515__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29515__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__29515__$1);
var G__29578 = cljs.core.chunk_rest.call(null,seq__29515__$1);
var G__29579 = c__4550__auto__;
var G__29580 = cljs.core.count.call(null,c__4550__auto__);
var G__29581 = (0);
seq__29515 = G__29578;
chunk__29516 = G__29579;
count__29517 = G__29580;
i__29518 = G__29581;
continue;
} else {
var role = cljs.core.first.call(null,seq__29515__$1);
var temp__5735__auto___29582__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___29582__$2)){
var spec_29583 = temp__5735__auto___29582__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29583));
} else {
}


var G__29584 = cljs.core.next.call(null,seq__29515__$1);
var G__29585 = null;
var G__29586 = (0);
var G__29587 = (0);
seq__29515 = G__29584;
chunk__29516 = G__29585;
count__29517 = G__29586;
i__29518 = G__29587;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__29588 = cljs.core.conj.call(null,via,t);
var G__29589 = cljs.core.ex_cause.call(null,t);
via = G__29588;
t = G__29589;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__29592 = datafied_throwable;
var map__29592__$1 = (((((!((map__29592 == null))))?(((((map__29592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29592):map__29592);
var via = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__29592__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__29593 = cljs.core.last.call(null,via);
var map__29593__$1 = (((((!((map__29593 == null))))?(((((map__29593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29593):map__29593);
var type = cljs.core.get.call(null,map__29593__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__29593__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__29593__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__29594 = data;
var map__29594__$1 = (((((!((map__29594 == null))))?(((((map__29594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29594.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29594):map__29594);
var problems = cljs.core.get.call(null,map__29594__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__29594__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__29594__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__29595 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__29595__$1 = (((((!((map__29595 == null))))?(((((map__29595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29595):map__29595);
var top_data = map__29595__$1;
var source = cljs.core.get.call(null,map__29595__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__29600 = phase;
var G__29600__$1 = (((G__29600 instanceof cljs.core.Keyword))?G__29600.fqn:null);
switch (G__29600__$1) {
case "read-source":
var map__29601 = data;
var map__29601__$1 = (((((!((map__29601 == null))))?(((((map__29601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29601):map__29601);
var line = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29601__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__29603 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__29603__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29603,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29603);
var G__29603__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29603__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29603__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29603__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29603__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__29604 = top_data;
var G__29604__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__29604,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__29604);
var G__29604__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__29604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__29604__$1);
var G__29604__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29604__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29604__$2);
var G__29604__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29604__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29604__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29604__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29604__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__29605 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29605,(0),null);
var method = cljs.core.nth.call(null,vec__29605,(1),null);
var file = cljs.core.nth.call(null,vec__29605,(2),null);
var line = cljs.core.nth.call(null,vec__29605,(3),null);
var G__29608 = top_data;
var G__29608__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__29608,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__29608);
var G__29608__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__29608__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__29608__$1);
var G__29608__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__29608__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__29608__$2);
var G__29608__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__29608__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__29608__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__29608__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__29608__$4;
}

break;
case "execution":
var vec__29609 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__29609,(0),null);
var method = cljs.core.nth.call(null,vec__29609,(1),null);
var file = cljs.core.nth.call(null,vec__29609,(2),null);
var line = cljs.core.nth.call(null,vec__29609,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__29609,source__$1,method,file,line,G__29600,G__29600__$1,map__29592,map__29592__$1,via,trace,phase,map__29593,map__29593__$1,type,message,data,map__29594,map__29594__$1,problems,fn,caller,map__29595,map__29595__$1,top_data,source){
return (function (p1__29591_SHARP_){
var or__4131__auto__ = (p1__29591_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__29591_SHARP_);
}
});})(vec__29609,source__$1,method,file,line,G__29600,G__29600__$1,map__29592,map__29592__$1,via,trace,phase,map__29593,map__29593__$1,type,message,data,map__29594,map__29594__$1,problems,fn,caller,map__29595,map__29595__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__29612 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__29612__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__29612,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__29612);
var G__29612__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__29612__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__29612__$1);
var G__29612__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__29612__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__29612__$2);
var G__29612__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__29612__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__29612__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__29612__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__29612__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29600__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__29616){
var map__29617 = p__29616;
var map__29617__$1 = (((((!((map__29617 == null))))?(((((map__29617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29617):map__29617);
var triage_data = map__29617__$1;
var phase = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__29617__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__29619 = phase;
var G__29619__$1 = (((G__29619 instanceof cljs.core.Keyword))?G__29619.fqn:null);
switch (G__29619__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29620_29629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29621_29630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29622_29631 = true;
var _STAR_print_fn_STAR__temp_val__29623_29632 = ((function (_STAR_print_newline_STAR__orig_val__29620_29629,_STAR_print_fn_STAR__orig_val__29621_29630,_STAR_print_newline_STAR__temp_val__29622_29631,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29620_29629,_STAR_print_fn_STAR__orig_val__29621_29630,_STAR_print_newline_STAR__temp_val__29622_29631,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29622_29631;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29623_29632;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29620_29629,_STAR_print_fn_STAR__orig_val__29621_29630,_STAR_print_newline_STAR__temp_val__29622_29631,_STAR_print_fn_STAR__temp_val__29623_29632,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29620_29629,_STAR_print_fn_STAR__orig_val__29621_29630,_STAR_print_newline_STAR__temp_val__29622_29631,_STAR_print_fn_STAR__temp_val__29623_29632,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29614_SHARP_){
return cljs.core.dissoc.call(null,p1__29614_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29620_29629,_STAR_print_fn_STAR__orig_val__29621_29630,_STAR_print_newline_STAR__temp_val__29622_29631,_STAR_print_fn_STAR__temp_val__29623_29632,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29620_29629,_STAR_print_fn_STAR__orig_val__29621_29630,_STAR_print_newline_STAR__temp_val__29622_29631,_STAR_print_fn_STAR__temp_val__29623_29632,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29621_29630;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29620_29629;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__29624_29633 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__29625_29634 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__29626_29635 = true;
var _STAR_print_fn_STAR__temp_val__29627_29636 = ((function (_STAR_print_newline_STAR__orig_val__29624_29633,_STAR_print_fn_STAR__orig_val__29625_29634,_STAR_print_newline_STAR__temp_val__29626_29635,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__29624_29633,_STAR_print_fn_STAR__orig_val__29625_29634,_STAR_print_newline_STAR__temp_val__29626_29635,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__29626_29635;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__29627_29636;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__29624_29633,_STAR_print_fn_STAR__orig_val__29625_29634,_STAR_print_newline_STAR__temp_val__29626_29635,_STAR_print_fn_STAR__temp_val__29627_29636,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__29624_29633,_STAR_print_fn_STAR__orig_val__29625_29634,_STAR_print_newline_STAR__temp_val__29626_29635,_STAR_print_fn_STAR__temp_val__29627_29636,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__29615_SHARP_){
return cljs.core.dissoc.call(null,p1__29615_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__29624_29633,_STAR_print_fn_STAR__orig_val__29625_29634,_STAR_print_newline_STAR__temp_val__29626_29635,_STAR_print_fn_STAR__temp_val__29627_29636,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__29624_29633,_STAR_print_fn_STAR__orig_val__29625_29634,_STAR_print_newline_STAR__temp_val__29626_29635,_STAR_print_fn_STAR__temp_val__29627_29636,sb__4661__auto__,G__29619,G__29619__$1,loc,class_name,simple_class,cause_type,format,map__29617,map__29617__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__29625_29634;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__29624_29633;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29619__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map?rel=1561299743008
