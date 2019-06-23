// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler');
/**
 * Convert a variable number of Clojure data structure to a string of
 *   CSS. The first argument may be a list of flags for the compiler.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$core$css(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42078 = arguments.length;
var i__4731__auto___42079 = (0);
while(true){
if((i__4731__auto___42079 < len__4730__auto___42078)){
args__4736__auto__.push((arguments[i__4731__auto___42079]));

var G__42080 = (i__4731__auto___42079 + (1));
i__4731__auto___42079 = G__42080;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$core$IFn$_invoke$arity$variadic = (function (rules){
return cljs.core.apply.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_css,rules);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.css.cljs$lang$applyTo = (function (seq42077){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42077));
});

/**
 * Convert a variable number of maps into a string of CSS for use with
 *   the HTML `style` attribute.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$core$style(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42082 = arguments.length;
var i__4731__auto___42083 = (0);
while(true){
if((i__4731__auto___42083 < len__4730__auto___42082)){
args__4736__auto__.push((arguments[i__4731__auto___42083]));

var G__42084 = (i__4731__auto___42083 + (1));
i__4731__auto___42083 = G__42084;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$core$IFn$_invoke$arity$variadic = (function (maps){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.compiler.compile_style.call(null,maps);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.core.style.cljs$lang$applyTo = (function (seq42081){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42081));
});


//# sourceMappingURL=core.js.map?rel=1561299756147