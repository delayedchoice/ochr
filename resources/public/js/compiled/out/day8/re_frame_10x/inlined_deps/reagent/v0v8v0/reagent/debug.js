// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug');
goog.require('cljs.core');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.has_console = (typeof console !== 'undefined');
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = false;
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__38942__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38942 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38943__i = 0, G__38943__a = new Array(arguments.length -  0);
while (G__38943__i < G__38943__a.length) {G__38943__a[G__38943__i] = arguments[G__38943__i + 0]; ++G__38943__i;}
  args = new cljs.core.IndexedSeq(G__38943__a,0,null);
} 
return G__38942__delegate.call(this,args);};
G__38942.cljs$lang$maxFixedArity = 0;
G__38942.cljs$lang$applyTo = (function (arglist__38944){
var args = cljs.core.seq(arglist__38944);
return G__38942__delegate(args);
});
G__38942.cljs$core$IFn$_invoke$arity$variadic = G__38942__delegate;
return G__38942;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__38945__delegate = function (args){
return cljs.core.swap_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__38945 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__38946__i = 0, G__38946__a = new Array(arguments.length -  0);
while (G__38946__i < G__38946__a.length) {G__38946__a[G__38946__i] = arguments[G__38946__i + 0]; ++G__38946__i;}
  args = new cljs.core.IndexedSeq(G__38946__a,0,null);
} 
return G__38945__delegate.call(this,args);};
G__38945.cljs$lang$maxFixedArity = 0;
G__38945.cljs$lang$applyTo = (function (arglist__38947){
var args = cljs.core.seq(arglist__38947);
return G__38945__delegate(args);
});
G__38945.cljs$core$IFn$_invoke$arity$variadic = G__38945__delegate;
return G__38945;
})()
;})(o))
;

return o;
})();
}
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.track_warnings = (function day8$re_frame_10x$inlined_deps$reagent$v0v8v0$reagent$debug$track_warnings(f){
day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.warnings,null);

day8.re_frame_10x.inlined_deps.reagent.v0v8v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1561299752309