// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
goog.require('goog.string');
goog.require('goog.string.format');
/**
 * Formats a string using goog.string.format.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$format(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40139 = arguments.length;
var i__4731__auto___40140 = (0);
while(true){
if((i__4731__auto___40140 < len__4730__auto___40139)){
args__4736__auto__.push((arguments[i__4731__auto___40140]));

var G__40141 = (i__4731__auto___40140 + (1));
i__4731__auto___40140 = G__40141;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.call(null,goog.string.format,fmt,args);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.format.cljs$lang$applyTo = (function (seq40137){
var G__40138 = cljs.core.first.call(null,seq40137);
var seq40137__$1 = cljs.core.next.call(null,seq40137);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40138,seq40137__$1);
});


/**
 * @interface
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString = function(){};

/**
 * Convert a value into a string.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$to_str(this$){
if((((!((this$ == null)))) && ((!((this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1 == null)))))){
return this$.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1(this$);
} else {
var x__4433__auto__ = (((this$ == null))?null:this$);
var m__4434__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,this$);
} else {
var m__4431__auto__ = (day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"ToString.to-str",this$);
}
}
}
});

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.Keyword.prototype.day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$ToString$to_str$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.name.call(null,this$__$1);
});

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString,"_",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,"_",(function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
}));

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.ToString,"null",true);

goog.object.set(day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,"null",(function (this$){
return "";
}));
/**
 * Convert a variable number of values into strings.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$as_str(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40143 = arguments.length;
var i__4731__auto___40144 = (0);
while(true){
if((i__4731__auto___40144 < len__4730__auto___40143)){
args__4736__auto__.push((arguments[i__4731__auto___40144]));

var G__40145 = (i__4731__auto___40144 + (1));
i__4731__auto___40144 = G__40145;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,args));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.as_str.cljs$lang$applyTo = (function (seq40142){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40142));
});

/**
 * Convert a string to an integer with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$string__GT_int(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40152 = arguments.length;
var i__4731__auto___40153 = (0);
while(true){
if((i__4731__auto___40153 < len__4730__auto___40152)){
args__4736__auto__.push((arguments[i__4731__auto___40153]));

var G__40154 = (i__4731__auto___40153 + (1));
i__4731__auto___40153 = G__40154;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__40148){
var vec__40149 = p__40148;
var radix = cljs.core.nth.call(null,vec__40149,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return parseInt(s,radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.string__GT_int.cljs$lang$applyTo = (function (seq40146){
var G__40147 = cljs.core.first.call(null,seq40146);
var seq40146__$1 = cljs.core.next.call(null,seq40146);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40147,seq40146__$1);
});

/**
 * Convert an integer to a string with optional base.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$int__GT_string(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40161 = arguments.length;
var i__4731__auto___40162 = (0);
while(true){
if((i__4731__auto___40162 < len__4730__auto___40161)){
args__4736__auto__.push((arguments[i__4731__auto___40162]));

var G__40163 = (i__4731__auto___40162 + (1));
i__4731__auto___40162 = G__40163;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$core$IFn$_invoke$arity$variadic = (function (i,p__40157){
var vec__40158 = p__40157;
var radix = cljs.core.nth.call(null,vec__40158,(0),null);
var radix__$1 = (function (){var or__4131__auto__ = radix;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (10);
}
})();
return i.toString(radix__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.int__GT_string.cljs$lang$applyTo = (function (seq40155){
var G__40156 = cljs.core.first.call(null,seq40155);
var seq40155__$1 = cljs.core.next.call(null,seq40155);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40156,seq40155__$1);
});

/**
 * Return a space separated list of values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$space_join(xs){
return clojure.string.join.call(null," ",cljs.core.map.call(null,day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str,xs));
});
/**
 * Return a comma separated list of values. Subsequences are joined with
 * spaces.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.comma_join = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join(xs){
var ys = (function (){var iter__4523__auto__ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__40164(s__40165){
return (new cljs.core.LazySeq(null,(function (){
var s__40165__$1 = s__40165;
while(true){
var temp__5735__auto__ = cljs.core.seq.call(null,s__40165__$1);
if(temp__5735__auto__){
var s__40165__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__40165__$2)){
var c__4521__auto__ = cljs.core.chunk_first.call(null,s__40165__$2);
var size__4522__auto__ = cljs.core.count.call(null,c__4521__auto__);
var b__40167 = cljs.core.chunk_buffer.call(null,size__4522__auto__);
if((function (){var i__40166 = (0);
while(true){
if((i__40166 < size__4522__auto__)){
var x = cljs.core._nth.call(null,c__4521__auto__,i__40166);
cljs.core.chunk_append.call(null,b__40167,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join.call(null,x):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,x)));

var G__40168 = (i__40166 + (1));
i__40166 = G__40168;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40167),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__40164.call(null,cljs.core.chunk_rest.call(null,s__40165__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__40167),null);
}
} else {
var x = cljs.core.first.call(null,s__40165__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.space_join.call(null,x):day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,x)),day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$comma_join_$_iter__40164.call(null,cljs.core.rest.call(null,s__40165__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4523__auto__.call(null,xs);
})();
return clojure.string.join.call(null,", ",ys);
});
/**
 * Wrap a string with double quotes.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.wrap_quotes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$wrap_quotes(s){
return ["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),"\""].join('');
});
/**
 * True if `(map? x)` and `x` does not satisfy `clojure.lang.IRecord`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$hash_map_QMARK_(x){
return ((cljs.core.map_QMARK_.call(null,x)) && ((!(cljs.core.record_QMARK_.call(null,x)))));
});
/**
 * Alias to `vector?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.rule_QMARK_ = cljs.core.vector_QMARK_;
/**
 * Alias to `hash-map?`.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.declaration_QMARK_ = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.hash_map_QMARK_;
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_rule_QMARK_(x){
return (x instanceof day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule);
});
/**
 * True if `x` is a CSS `@media` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_media_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_media_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"media","media",-1066138403))));
});
/**
 * True if `x` is a CSS `@keyframes` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_keyframes_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_keyframes_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012))));
});
/**
 * True if `x` is a CSS `@import` rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_import_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$at_import_QMARK_(x){
return ((day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.at_rule_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"identifier","identifier",-805503498).cljs$core$IFn$_invoke$arity$1(x),new cljs.core.Keyword(null,"import","import",-1399500709))));
});
/**
 * Attach a CSS style prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.last.call(null,p__$1))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join('');
}
});
/**
 * Attach a CSS vendor prefix to s.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.vendor_prefix = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$vendor_prefix(p,s){
var p__$1 = day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.to_str.call(null,p);
if(cljs.core._EQ_.call(null,"-",cljs.core.first.call(null,p__$1))){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix.call(null,p__$1,s);
} else {
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.prefix.call(null,["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p__$1)].join(''),s);
}
});
/**
 * True if n is a natural number.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.natural_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$natural_QMARK_(n){
return ((cljs.core.integer_QMARK_.call(null,n)) && ((n > (0))));
});
/**
 * True if n is a number between a and b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.between_QMARK_ = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$between_QMARK_(n,a,b){
var bottom = (function (){var x__4222__auto__ = a;
var y__4223__auto__ = b;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
var top = (function (){var x__4219__auto__ = a;
var y__4220__auto__ = b;
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
})();
return (((n >= bottom)) && ((n <= top)));
});
/**
 * Return a number such that n is no less than a and no more than b.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.clip = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$clip(a,b,n){
var vec__40169 = (((a <= b))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [b,a], null));
var a__$1 = cljs.core.nth.call(null,vec__40169,(0),null);
var b__$1 = cljs.core.nth.call(null,vec__40169,(1),null);
var x__4219__auto__ = a__$1;
var y__4220__auto__ = (function (){var x__4222__auto__ = b__$1;
var y__4223__auto__ = n;
return ((x__4222__auto__ < y__4223__auto__) ? x__4222__auto__ : y__4223__auto__);
})();
return ((x__4219__auto__ > y__4220__auto__) ? x__4219__auto__ : y__4220__auto__);
});
/**
 * Return the average of two or more numbers.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$average(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40175 = arguments.length;
var i__4731__auto___40176 = (0);
while(true){
if((i__4731__auto___40176 < len__4730__auto___40175)){
args__4736__auto__.push((arguments[i__4731__auto___40176]));

var G__40177 = (i__4731__auto___40176 + (1));
i__4731__auto___40176 = G__40177;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((2) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((2)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$core$IFn$_invoke$arity$variadic = (function (n,m,more){
return (cljs.core.apply.call(null,cljs.core._PLUS_,n,m,more) / (2.0 + cljs.core.count.call(null,more)));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$lang$maxFixedArity = (2);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.average.cljs$lang$applyTo = (function (seq40172){
var G__40173 = cljs.core.first.call(null,seq40172);
var seq40172__$1 = cljs.core.next.call(null,seq40172);
var G__40174 = cljs.core.first.call(null,seq40172__$1);
var seq40172__$2 = cljs.core.next.call(null,seq40172__$1);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__40173,G__40174,seq40172__$2);
});

/**
 * All the ways to take one item from each sequence.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$cartesian_product(var_args){
var args__4736__auto__ = [];
var len__4730__auto___40179 = arguments.length;
var i__4731__auto___40180 = (0);
while(true){
if((i__4731__auto___40180 < len__4730__auto___40179)){
args__4736__auto__.push((arguments[i__4731__auto___40180]));

var G__40181 = (i__4731__auto___40180 + (1));
i__4731__auto___40180 = G__40181;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$core$IFn$_invoke$arity$variadic = (function (seqs){
var v_original_seqs = cljs.core.vec.call(null,seqs);
var step = ((function (v_original_seqs){
return (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$step(v_seqs){
var increment = ((function (v_original_seqs){
return (function (v_seqs__$1){
var i = (cljs.core.count.call(null,v_seqs__$1) - (1));
var v_seqs__$2 = v_seqs__$1;
while(true){
if(cljs.core._EQ_.call(null,i,(-1))){
return null;
} else {
var temp__5733__auto__ = cljs.core.next.call(null,v_seqs__$2.call(null,i));
if(temp__5733__auto__){
var rst = temp__5733__auto__;
return cljs.core.assoc.call(null,v_seqs__$2,i,rst);
} else {
var G__40182 = (i - (1));
var G__40183 = cljs.core.assoc.call(null,v_seqs__$2,i,v_original_seqs.call(null,i));
i = G__40182;
v_seqs__$2 = G__40183;
continue;
}
}
break;
}
});})(v_original_seqs))
;
if(cljs.core.truth_(v_seqs)){
return cljs.core.cons.call(null,cljs.core.map.call(null,cljs.core.first,v_seqs),(new cljs.core.LazySeq(null,((function (increment,v_original_seqs){
return (function (){
return day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$util$step.call(null,increment.call(null,v_seqs));
});})(increment,v_original_seqs))
,null,null)));
} else {
return null;
}
});})(v_original_seqs))
;
if(cljs.core.every_QMARK_.call(null,cljs.core.seq,seqs)){
return (new cljs.core.LazySeq(null,((function (v_original_seqs,step){
return (function (){
return step.call(null,v_original_seqs);
});})(v_original_seqs,step))
,null,null));
} else {
return null;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util.cartesian_product.cljs$lang$applyTo = (function (seq40178){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40178));
});


//# sourceMappingURL=util.js.map?rel=1561299753948
