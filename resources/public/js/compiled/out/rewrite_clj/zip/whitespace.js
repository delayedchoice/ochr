// Compiled by ClojureScript 1.10.520 {}
goog.provide('rewrite_clj.zip.whitespace');
goog.require('cljs.core');
goog.require('rewrite_clj.node');
goog.require('clojure.zip');
rewrite_clj.zip.whitespace.whitespace_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_QMARK_(zloc){
var G__37528 = zloc;
var G__37528__$1 = (((G__37528 == null))?null:clojure.zip.node.call(null,G__37528));
if((G__37528__$1 == null)){
return null;
} else {
return rewrite_clj.node.whitespace_QMARK_.call(null,G__37528__$1);
}
});
rewrite_clj.zip.whitespace.linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$linebreak_QMARK_(zloc){
var G__37529 = zloc;
var G__37529__$1 = (((G__37529 == null))?null:clojure.zip.node.call(null,G__37529));
if((G__37529__$1 == null)){
return null;
} else {
return rewrite_clj.node.linebreak_QMARK_.call(null,G__37529__$1);
}
});
rewrite_clj.zip.whitespace.comment_QMARK_ = (function rewrite_clj$zip$whitespace$comment_QMARK_(zloc){
var G__37530 = zloc;
var G__37530__$1 = (((G__37530 == null))?null:clojure.zip.node.call(null,G__37530));
if((G__37530__$1 == null)){
return null;
} else {
return rewrite_clj.node.comment_QMARK_.call(null,G__37530__$1);
}
});
rewrite_clj.zip.whitespace.whitespace_not_linebreak_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_not_linebreak_QMARK_(zloc){
var and__4120__auto__ = rewrite_clj.zip.whitespace.whitespace_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,rewrite_clj.zip.whitespace.linebreak_QMARK_.call(null,zloc));
} else {
return and__4120__auto__;
}
});
rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_ = (function rewrite_clj$zip$whitespace$whitespace_or_comment_QMARK_(zloc){
var G__37531 = zloc;
var G__37531__$1 = (((G__37531 == null))?null:clojure.zip.node.call(null,G__37531));
if((G__37531__$1 == null)){
return null;
} else {
return rewrite_clj.node.whitespace_or_comment_QMARK_.call(null,G__37531__$1);
}
});
/**
 * Perform the given movement while the given predicate returns true.
 */
rewrite_clj.zip.whitespace.skip = (function rewrite_clj$zip$whitespace$skip(f,p_QMARK_,zloc){
return cljs.core.first.call(null,cljs.core.drop_while.call(null,p_QMARK_,cljs.core.take_while.call(null,cljs.core.complement.call(null,clojure.zip.end_QMARK_),cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,f,zloc)))));
});
/**
 * Perform the given movement (default: `z/right`) until a non-whitespace/
 * non-comment node is encountered.
 */
rewrite_clj.zip.whitespace.skip_whitespace = (function rewrite_clj$zip$whitespace$skip_whitespace(var_args){
var G__37533 = arguments.length;
switch (G__37533) {
case 1:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.right,zloc);
});

rewrite_clj.zip.whitespace.skip_whitespace.cljs$core$IFn$_invoke$arity$2 = (function (f,zloc){
return rewrite_clj.zip.whitespace.skip.call(null,f,rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_,zloc);
});

rewrite_clj.zip.whitespace.skip_whitespace.cljs$lang$maxFixedArity = 2;

/**
 * Move left until a non-whitespace/non-comment node is encountered.
 */
rewrite_clj.zip.whitespace.skip_whitespace_left = (function rewrite_clj$zip$whitespace$skip_whitespace_left(zloc){
return rewrite_clj.zip.whitespace.skip_whitespace.call(null,clojure.zip.left,zloc);
});
/**
 * Prepend a whitespace node representing the given number of spaces (default: 1).
 */
rewrite_clj.zip.whitespace.prepend_space = (function rewrite_clj$zip$whitespace$prepend_space(var_args){
var G__37536 = arguments.length;
switch (G__37536) {
case 1:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_space.call(null,zloc,(1));
});

rewrite_clj.zip.whitespace.prepend_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_left.call(null,zloc,rewrite_clj.node.spaces.call(null,n));
});

rewrite_clj.zip.whitespace.prepend_space.cljs$lang$maxFixedArity = 2;

/**
 * Append a whitespace node representing the given number of spaces (default: 1).
 */
rewrite_clj.zip.whitespace.append_space = (function rewrite_clj$zip$whitespace$append_space(var_args){
var G__37539 = arguments.length;
switch (G__37539) {
case 1:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_space.call(null,zloc,(1));
});

rewrite_clj.zip.whitespace.append_space.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_right.call(null,zloc,rewrite_clj.node.spaces.call(null,n));
});

rewrite_clj.zip.whitespace.append_space.cljs$lang$maxFixedArity = 2;

/**
 * Prepend a newlines node representing the given number of newlines (default: 1).
 */
rewrite_clj.zip.whitespace.prepend_newline = (function rewrite_clj$zip$whitespace$prepend_newline(var_args){
var G__37542 = arguments.length;
switch (G__37542) {
case 1:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.prepend_newline.call(null,zloc,(1));
});

rewrite_clj.zip.whitespace.prepend_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_left.call(null,zloc,rewrite_clj.node.newlines.call(null,n));
});

rewrite_clj.zip.whitespace.prepend_newline.cljs$lang$maxFixedArity = 2;

/**
 * Append a newline node representing the given number of newlines (default: 1).
 */
rewrite_clj.zip.whitespace.append_newline = (function rewrite_clj$zip$whitespace$append_newline(var_args){
var G__37545 = arguments.length;
switch (G__37545) {
case 1:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$1 = (function (zloc){
return rewrite_clj.zip.whitespace.append_newline.call(null,zloc,(1));
});

rewrite_clj.zip.whitespace.append_newline.cljs$core$IFn$_invoke$arity$2 = (function (zloc,n){
return clojure.zip.insert_right.call(null,zloc,rewrite_clj.node.newlines.call(null,n));
});

rewrite_clj.zip.whitespace.append_newline.cljs$lang$maxFixedArity = 2;


//# sourceMappingURL=whitespace.js.map?rel=1561299750363
