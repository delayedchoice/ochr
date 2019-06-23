// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.util');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color');
goog.require('day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42134 = arguments.length;
var i__4731__auto___42135 = (0);
while(true){
if((i__4731__auto___42135 < len__4730__auto___42134)){
args__4736__auto__.push((arguments[i__4731__auto___42135]));

var G__42136 = (i__4731__auto___42135 + (1));
i__4731__auto___42135 = G__42136;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if((!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol)))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__42137__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__42137 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__42138__i = 0, G__42138__a = new Array(arguments.length -  0);
while (G__42138__i < G__42138__a.length) {G__42138__a[G__42138__i] = arguments[G__42138__i + 0]; ++G__42138__i;}
  children = new cljs.core.IndexedSeq(G__42138__a,0,null);
} 
return G__42137__delegate.call(this,children);};
G__42137.cljs$lang$maxFixedArity = 0;
G__42137.cljs$lang$applyTo = (function (arglist__42139){
var children = cljs.core.seq(arglist__42139);
return G__42137__delegate(children);
});
G__42137.cljs$core$IFn$_invoke$arity$variadic = G__42137__delegate;
return G__42137;
})()
;
}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq42132){
var G__42133 = cljs.core.first.call(null,seq42132);
var seq42132__$1 = cljs.core.next.call(null,seq42132);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42133,seq42132__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.cssfn = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__42140__delegate = function (args){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__42140 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42141__i = 0, G__42141__a = new Array(arguments.length -  0);
while (G__42141__i < G__42141__a.length) {G__42141__a[G__42141__i] = arguments[G__42141__i + 0]; ++G__42141__i;}
  args = new cljs.core.IndexedSeq(G__42141__a,0,null);
} 
return G__42140__delegate.call(this,args);};
G__42140.cljs$lang$maxFixedArity = 0;
G__42140.cljs$lang$applyTo = (function (arglist__42142){
var args = cljs.core.seq(arglist__42142);
return G__42140__delegate(args);
});
G__42140.cljs$core$IFn$_invoke$arity$variadic = G__42140__delegate;
return G__42140;
})()
;
});
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42144 = arguments.length;
var i__4731__auto___42145 = (0);
while(true){
if((i__4731__auto___42145 < len__4730__auto___42144)){
args__4736__auto__.push((arguments[i__4731__auto___42145]));

var G__42146 = (i__4731__auto___42145 + (1));
i__4731__auto___42145 = G__42146;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((0) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((0)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq42143){
var self__4718__auto__ = this;
return self__4718__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42143));
});

/**
 * Create a CSS @import rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__42150 = arguments.length;
switch (G__42150) {
case 1:
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4751__auto__ = [];
var len__4730__auto___42152 = arguments.length;
var i__4731__auto___42153 = (0);
while(true){
if((i__4731__auto___42153 < len__4730__auto___42152)){
args_arr__4751__auto__.push((arguments[i__4731__auto___42153]));

var G__42154 = (i__4731__auto___42153 + (1));
i__4731__auto___42153 = G__42154;
continue;
} else {
}
break;
}

var argseq__4752__auto__ = (new cljs.core.IndexedSeq(args_arr__4751__auto__.slice((1)),(0),null));
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4752__auto__);

}
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq42148){
var G__42149 = cljs.core.first.call(null,seq42148);
var seq42148__$1 = cljs.core.next.call(null,seq42148);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42149,seq42148__$1);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42157 = arguments.length;
var i__4731__auto___42158 = (0);
while(true){
if((i__4731__auto___42158 < len__4730__auto___42157)){
args__4736__auto__.push((arguments[i__4731__auto___42158]));

var G__42159 = (i__4731__auto___42158 + (1));
i__4731__auto___42158 = G__42159;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq42155){
var G__42156 = cljs.core.first.call(null,seq42155);
var seq42155__$1 = cljs.core.next.call(null,seq42155);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42156,seq42155__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4736__auto__ = [];
var len__4730__auto___42162 = arguments.length;
var i__4731__auto___42163 = (0);
while(true){
if((i__4731__auto___42163 < len__4730__auto___42162)){
args__4736__auto__.push((arguments[i__4731__auto___42163]));

var G__42164 = (i__4731__auto___42163 + (1));
i__4731__auto___42163 = G__42164;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq42160){
var G__42161 = cljs.core.first.call(null,seq42160);
var seq42160__$1 = cljs.core.next.call(null,seq42160);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42161,seq42160__$1);
});

/**
 * Create a color from RGB values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.rgb = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.stylesheet.hsl = (function day8$re_frame_10x$inlined_deps$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return day8.re_frame_10x.inlined_deps.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1561299756366
