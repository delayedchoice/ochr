// Compiled by ClojureScript 1.10.520 {}
goog.provide('zprint.sutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('cljs.reader');
/**
 * The string value of this sexpr.
 */
zprint.sutil.sstring = (function zprint$sutil$sstring(sexpr){
return cljs.core.pr_str.call(null,sexpr);
});
/**
 * Does pr-str.
 */
zprint.sutil.snumstr = (function zprint$sutil$snumstr(zloc,hex_QMARK_,shift_seq){
return cljs.core.pr_str.call(null,zloc);
});
/**
 * Return a seq of everything after this. Maps get
 *   special handling here, as a seq of a map is a bunch
 *   of map elements, which are pretty much vectors of
 *   [k v] pairs.
 */
zprint.sutil.sseqnws = (function zprint$sutil$sseqnws(sexpr){
if(cljs.core.map_QMARK_.call(null,sexpr)){
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.seq.call(null,sexpr));
} else {
return cljs.core.seq.call(null,sexpr);
}
});
/**
 * Map a function of all of the elements to ther right
 *   of this.
 */
zprint.sutil.smap_right = (function zprint$sutil$smap_right(zfn,sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.mapv.call(null,zfn,cljs.core.next.call(null,sexpr));
} else {
return null;
}
});
/**
 * Considering the current sexpr a collection, move down into it and
 *   take n non-whitespace elements, dropping the rest.  Then append the
 *   given element to the end.
 */
zprint.sutil.stake_append = (function zprint$sutil$stake_append(n,sexpr,end_sexpr){
return cljs.core.concat.call(null,cljs.core.take.call(null,n,sexpr),(new cljs.core.List(null,end_sexpr,null,(1),null)));
});
/**
 * Take the various inputs and come up with a style.  But we
 *   don't do focus, so that's easy.
 */
zprint.sutil.sfocus_style = (function zprint$sutil$sfocus_style(style,_,sexpr){
return style;
});
/**
 * Find the nthnext of this sexpr.
 */
zprint.sutil.snthnext = (function zprint$sutil$snthnext(sexpr,n){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.nthnext.call(null,sexpr,n);
} else {
return null;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.sutil.sfind = (function zprint$sutil$sfind(zthing_QMARK_,sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
var sloc = sexpr;
var i = (0);
while(true){
if(cljs.core.truth_(sloc)){
if(cljs.core.truth_(zthing_QMARK_.call(null,cljs.core.first.call(null,sloc)))){
return i;
} else {
var G__38601 = cljs.core.next.call(null,sloc);
var G__38602 = (i + (1));
sloc = G__38601;
i = G__38602;
continue;
}
} else {
return null;
}
break;
}
} else {
return null;
}
});
/**
 * How many children does sexpr have?
 */
zprint.sutil.scount = (function zprint$sutil$scount(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.count.call(null,sexpr);
} else {
return (0);
}
});
/**
 * Return a vector containing the return of applying a function to
 *   every element inside of sexpr.
 */
zprint.sutil.smap = (function zprint$sutil$smap(zfn,sexpr){
var v = ((cljs.core.coll_QMARK_.call(null,sexpr))?cljs.core.mapv.call(null,zfn,sexpr):cljs.core.PersistentVector.EMPTY);
return v;
});
/**
 * Is this an anonymous fn?
 */
zprint.sutil.sfn_QMARK_ = (function zprint$sutil$sfn_QMARK_(sexpr){
return cljs.core.fn_QMARK_.call(null,sexpr);
});
/**
 * Is this the focus.  It is possible that this could
 *   be implemented with path's and such, but that is not a goal
 *   at this point.
 */
zprint.sutil.sfocus = (function zprint$sutil$sfocus(sexpr,fsexpr){
return null;
});
/**
 * This is inherently impossible, as we don't have
 *   an up capability.  But we could build one as we
 *   go down which would give us an up capability (or
 *   at least we would always know where we were).  An
 *   interesting idea, but for now, return essentially
 *   nothing.
 */
zprint.sutil.sfind_root_and_path = (function zprint$sutil$sfind_root_and_path(sexpr){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["root",cljs.core.PersistentVector.EMPTY], null);
});
/**
 * Return true if this is whitespace.  But as we
 *   don't have any whitespace in regular s-expressions,
 *   we will always return false.
 */
zprint.sutil.swhitespace_QMARK_ = (function zprint$sutil$swhitespace_QMARK_(sexpr){
return null;
});
/**
 * Do the first thing, with the right amount of arguments.
 */
zprint.sutil.sfirst = (function zprint$sutil$sfirst(sexpr){
return cljs.core.first.call(null,sexpr);
});
/**
 * Do the second thing, with the right amount of arguments.
 */
zprint.sutil.ssecond = (function zprint$sutil$ssecond(sexpr){
return cljs.core.second.call(null,sexpr);
});
/**
 * Define a third since we need one, and znth isn't really nth.
 */
zprint.sutil.sthird = (function zprint$sutil$sthird(sexpr){
return cljs.core.nth.call(null,sexpr,(2));
});
/**
 * Define a fourth since we need one, and znth isn't really nth.
 */
zprint.sutil.sfourth = (function zprint$sutil$sfourth(sexpr){
return cljs.core.nth.call(null,sexpr,(3));
});
/**
 * A list? that includes cons.
 */
zprint.sutil.slist_QMARK_ = (function zprint$sutil$slist_QMARK_(sexpr){
return ((cljs.core.list_QMARK_.call(null,sexpr)) || (cljs.core.seq_QMARK_.call(null,sexpr)));
});
/**
 * last which can take two arguments.
 */
zprint.sutil.slast = (function zprint$sutil$slast(sexpr){
if(cljs.core.coll_QMARK_.call(null,sexpr)){
return cljs.core.last.call(null,sexpr);
} else {
return sexpr;
}
});
/**
 * Is this an array?
 */
zprint.sutil.sarray_QMARK_ = (function zprint$sutil$sarray_QMARK_(x){
if(cljs.core.truth_(x)){
return cljs.core.array_QMARK_.call(null,x);
} else {
return null;
}
});
/**
 * Is this an atom?
 */
zprint.sutil.satom_QMARK_ = (function zprint$sutil$satom_QMARK_(x){
if(cljs.core.truth_(x)){
return null;
} else {
return null;
}
});
/**
 * Deref this thing.
 */
zprint.sutil.sderef = (function zprint$sutil$sderef(x){
return cljs.core.deref.call(null,x);
});
/**
 * Blow an array out into a vector.
 */
zprint.sutil.sexpandarray = (function zprint$sutil$sexpandarray(a){
return cljs.core.mapv.call(null,cljs.core.identity,a);
});
/**
 * Is this a namespace?
 */
zprint.sutil.sns_QMARK_ = (function zprint$sutil$sns_QMARK_(x){
if((x instanceof cljs.core.Symbol)){
return cljs.core.find_ns.call(null,x);
} else {
return null;
}
});
/**
 * Turn something whose pr-str starts with #object into a vector.
 *   obj is the thing that prints as #object, and val is its value.
 *   Two forms, one with and one w/out val.  val could be nil, or
 *   anything, so there isn't a particularly good sentinal here.
 */
zprint.sutil.sobj_to_vec = (function zprint$sutil$sobj_to_vec(var_args){
var G__38604 = arguments.length;
switch (G__38604) {
case 2:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$2 = (function (obj,val){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),val], null);
});

zprint.sutil.sobj_to_vec.cljs$core$IFn$_invoke$arity$1 = (function (obj){
var obj_term = clojure.string.split.call(null,clojure.string.replace.call(null,clojure.string.replace.call(null,cljs.core.pr_str.call(null,obj),/^\#object\[/,""),/\]$/,""),/ /,(3));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.reader.read_string.call(null,cljs.core.first.call(null,obj_term)),cljs.core.second.call(null,obj_term),cljs.reader.read_string.call(null,cljs.core.nth.call(null,obj_term,(2)))], null);
});

zprint.sutil.sobj_to_vec.cljs$lang$maxFixedArity = 2;

/**
 * Is this a promise?
 */
zprint.sutil.spromise_QMARK_ = (function zprint$sutil$spromise_QMARK_(x){
return null;
});
/**
 * Is this an agent?
 */
zprint.sutil.sagent_QMARK_ = (function zprint$sutil$sagent_QMARK_(x){
return null;
});
/**
 * Is this a constant?
 */
zprint.sutil.sconstant_QMARK_ = (function zprint$sutil$sconstant_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || (typeof x === 'string') || (typeof x === 'number') || (cljs.core._EQ_.call(null,"true",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))) || (cljs.core._EQ_.call(null,"false",cljs.core.str.cljs$core$IFn$_invoke$arity$1(x))));
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.sutil.slift_ns = (function zprint$sutil$slift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__38609 = cljs.core.first.call(null,pair_seq__$1);
var seq__38610 = cljs.core.seq.call(null,vec__38609);
var first__38611 = cljs.core.first.call(null,seq__38610);
var seq__38610__$1 = cljs.core.next.call(null,seq__38610);
var k = first__38611;
var rest_of_pair = seq__38610__$1;
var pair = vec__38609;
var current_ns = ((((rest_of_pair) && ((((k instanceof cljs.core.Keyword)) || ((k instanceof cljs.core.Symbol))))))?cljs.core.namespace.call(null,k):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.call(null,ns,current_ns)){
var G__38612 = ns;
var G__38613 = cljs.core.next.call(null,pair_seq__$1);
var G__38614 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns = G__38612;
pair_seq__$1 = G__38613;
out = G__38614;
continue;
} else {
return null;
}
} else {
var G__38615 = current_ns;
var G__38616 = cljs.core.next.call(null,pair_seq__$1);
var G__38617 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,strip_ns.call(null,k),rest_of_pair));
ns = G__38615;
pair_seq__$1 = G__38616;
out = G__38617;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__38618 = ns;
var G__38619 = cljs.core.next.call(null,pair_seq__$1);
var G__38620 = cljs.core.conj.call(null,out,pair);
ns = G__38618;
pair_seq__$1 = G__38619;
out = G__38620;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for s-expressions, then
 *   call the function of no arguments passed in.
 */
zprint.sutil.sredef_call = (function zprint$sutil$sredef_call(body_fn){
var zstring_orig_val__38621 = zprint.zfns.zstring;
var znumstr_orig_val__38622 = zprint.zfns.znumstr;
var zcomment_QMARK__orig_val__38623 = zprint.zfns.zcomment_QMARK_;
var zsexpr_orig_val__38624 = zprint.zfns.zsexpr;
var zseqnws_orig_val__38625 = zprint.zfns.zseqnws;
var zmap_right_orig_val__38626 = zprint.zfns.zmap_right;
var zfocus_style_orig_val__38627 = zprint.zfns.zfocus_style;
var zfirst_orig_val__38628 = zprint.zfns.zfirst;
var zfirst_no_comment_orig_val__38629 = zprint.zfns.zfirst_no_comment;
var zsecond_orig_val__38630 = zprint.zfns.zsecond;
var zthird_orig_val__38631 = zprint.zfns.zthird;
var zfourth_orig_val__38632 = zprint.zfns.zfourth;
var znthnext_orig_val__38633 = zprint.zfns.znthnext;
var zcount_orig_val__38634 = zprint.zfns.zcount;
var zmap_orig_val__38635 = zprint.zfns.zmap;
var zmap_w_nl_orig_val__38636 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK__orig_val__38637 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK__orig_val__38638 = zprint.zfns.zfn_obj_QMARK_;
var zfocus_orig_val__38639 = zprint.zfns.zfocus;
var zfind_path_orig_val__38640 = zprint.zfns.zfind_path;
var zwhitespace_QMARK__orig_val__38641 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK__orig_val__38642 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK__orig_val__38643 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK__orig_val__38644 = zprint.zfns.zmap_QMARK_;
var zset_QMARK__orig_val__38645 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK__orig_val__38646 = zprint.zfns.zcoll_QMARK_;
var zmeta_QMARK__orig_val__38647 = zprint.zfns.zmeta_QMARK_;
var zuneval_QMARK__orig_val__38648 = zprint.zfns.zuneval_QMARK_;
var ztag_orig_val__38649 = zprint.zfns.ztag;
var zlast_orig_val__38650 = zprint.zfns.zlast;
var zarray_QMARK__orig_val__38651 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK__orig_val__38652 = zprint.zfns.zatom_QMARK_;
var zderef_orig_val__38653 = zprint.zfns.zderef;
var zrecord_QMARK__orig_val__38654 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK__orig_val__38655 = zprint.zfns.zns_QMARK_;
var zobj_to_vec_orig_val__38656 = zprint.zfns.zobj_to_vec;
var zexpandarray_orig_val__38657 = zprint.zfns.zexpandarray;
var znewline_QMARK__orig_val__38658 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK__orig_val__38659 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all_orig_val__38660 = zprint.zfns.zmap_all;
var zfuture_QMARK__orig_val__38661 = zprint.zfns.zfuture_QMARK_;
var zpromise_QMARK__orig_val__38662 = zprint.zfns.zpromise_QMARK_;
var zkeyword_QMARK__orig_val__38663 = zprint.zfns.zkeyword_QMARK_;
var zdelay_QMARK__orig_val__38664 = zprint.zfns.zdelay_QMARK_;
var zconstant_QMARK__orig_val__38665 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK__orig_val__38666 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK__orig_val__38667 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq_orig_val__38668 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot_orig_val__38669 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK__orig_val__38670 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK__orig_val__38671 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK__orig_val__38672 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK__orig_val__38673 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns_orig_val__38674 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK__orig_val__38675 = zprint.zfns.zinlinecomment_QMARK_;
var zfind_orig_val__38676 = zprint.zfns.zfind;
var ztake_append_orig_val__38677 = zprint.zfns.ztake_append;
var zstring_temp_val__38678 = zprint.sutil.sstring;
var znumstr_temp_val__38679 = zprint.sutil.snumstr;
var zcomment_QMARK__temp_val__38680 = cljs.core.constantly.call(null,false);
var zsexpr_temp_val__38681 = cljs.core.identity;
var zseqnws_temp_val__38682 = zprint.sutil.sseqnws;
var zmap_right_temp_val__38683 = zprint.sutil.smap_right;
var zfocus_style_temp_val__38684 = zprint.sutil.sfocus_style;
var zfirst_temp_val__38685 = zprint.sutil.sfirst;
var zfirst_no_comment_temp_val__38686 = zprint.sutil.sfirst;
var zsecond_temp_val__38687 = zprint.sutil.ssecond;
var zthird_temp_val__38688 = zprint.sutil.sthird;
var zfourth_temp_val__38689 = zprint.sutil.sfourth;
var znthnext_temp_val__38690 = zprint.sutil.snthnext;
var zcount_temp_val__38691 = zprint.sutil.scount;
var zmap_temp_val__38692 = zprint.sutil.smap;
var zmap_w_nl_temp_val__38693 = zprint.sutil.smap;
var zanonfn_QMARK__temp_val__38694 = cljs.core.constantly.call(null,false);
var zfn_obj_QMARK__temp_val__38695 = cljs.core.fn_QMARK_;
var zfocus_temp_val__38696 = zprint.sutil.sfocus;
var zfind_path_temp_val__38697 = zprint.sutil.sfind_root_and_path;
var zwhitespace_QMARK__temp_val__38698 = zprint.sutil.swhitespace_QMARK_;
var zlist_QMARK__temp_val__38699 = zprint.sutil.slist_QMARK_;
var zvector_QMARK__temp_val__38700 = cljs.core.vector_QMARK_;
var zmap_QMARK__temp_val__38701 = cljs.core.map_QMARK_;
var zset_QMARK__temp_val__38702 = cljs.core.set_QMARK_;
var zcoll_QMARK__temp_val__38703 = cljs.core.coll_QMARK_;
var zmeta_QMARK__temp_val__38704 = cljs.core.constantly.call(null,false);
var zuneval_QMARK__temp_val__38705 = cljs.core.constantly.call(null,false);
var ztag_temp_val__38706 = cljs.core.constantly.call(null,null);
var zlast_temp_val__38707 = zprint.sutil.slast;
var zarray_QMARK__temp_val__38708 = zprint.sutil.sarray_QMARK_;
var zatom_QMARK__temp_val__38709 = zprint.sutil.satom_QMARK_;
var zderef_temp_val__38710 = zprint.sutil.sderef;
var zrecord_QMARK__temp_val__38711 = cljs.core.record_QMARK_;
var zns_QMARK__temp_val__38712 = cljs.core.constantly.call(null,false);
var zobj_to_vec_temp_val__38713 = zprint.sutil.sobj_to_vec;
var zexpandarray_temp_val__38714 = zprint.sutil.sexpandarray;
var znewline_QMARK__temp_val__38715 = cljs.core.constantly.call(null,false);
var zwhitespaceorcomment_QMARK__temp_val__38716 = cljs.core.constantly.call(null,false);
var zmap_all_temp_val__38717 = cljs.core.map;
var zfuture_QMARK__temp_val__38718 = cljs.core.constantly.call(null,false);
var zpromise_QMARK__temp_val__38719 = zprint.sutil.spromise_QMARK_;
var zkeyword_QMARK__temp_val__38720 = cljs.core.keyword_QMARK_;
var zdelay_QMARK__temp_val__38721 = cljs.core.delay_QMARK_;
var zconstant_QMARK__temp_val__38722 = zprint.sutil.sconstant_QMARK_;
var zagent_QMARK__temp_val__38723 = zprint.sutil.sagent_QMARK_;
var zreader_macro_QMARK__temp_val__38724 = cljs.core.constantly.call(null,false);
var zarray_to_shift_seq_temp_val__38725 = null;
var zdotdotdot_temp_val__38726 = cljs.core.constantly.call(null,new cljs.core.Symbol(null,"...","...",-1926939749,null));
var zsymbol_QMARK__temp_val__38727 = cljs.core.symbol_QMARK_;
var znil_QMARK__temp_val__38728 = cljs.core.nil_QMARK_;
var zreader_cond_w_symbol_QMARK__temp_val__38729 = cljs.core.constantly.call(null,false);
var zreader_cond_w_coll_QMARK__temp_val__38730 = cljs.core.constantly.call(null,false);
var zlift_ns_temp_val__38731 = zprint.sutil.slift_ns;
var zinlinecomment_QMARK__temp_val__38732 = cljs.core.constantly.call(null,false);
var zfind_temp_val__38733 = zprint.sutil.sfind;
var ztake_append_temp_val__38734 = zprint.sutil.stake_append;
zprint.zfns.zstring = zstring_temp_val__38678;

zprint.zfns.znumstr = znumstr_temp_val__38679;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__temp_val__38680;

zprint.zfns.zsexpr = zsexpr_temp_val__38681;

zprint.zfns.zseqnws = zseqnws_temp_val__38682;

zprint.zfns.zmap_right = zmap_right_temp_val__38683;

zprint.zfns.zfocus_style = zfocus_style_temp_val__38684;

zprint.zfns.zfirst = zfirst_temp_val__38685;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_temp_val__38686;

zprint.zfns.zsecond = zsecond_temp_val__38687;

zprint.zfns.zthird = zthird_temp_val__38688;

zprint.zfns.zfourth = zfourth_temp_val__38689;

zprint.zfns.znthnext = znthnext_temp_val__38690;

zprint.zfns.zcount = zcount_temp_val__38691;

zprint.zfns.zmap = zmap_temp_val__38692;

zprint.zfns.zmap_w_nl = zmap_w_nl_temp_val__38693;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__temp_val__38694;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__temp_val__38695;

zprint.zfns.zfocus = zfocus_temp_val__38696;

zprint.zfns.zfind_path = zfind_path_temp_val__38697;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__temp_val__38698;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__temp_val__38699;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__temp_val__38700;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__temp_val__38701;

zprint.zfns.zset_QMARK_ = zset_QMARK__temp_val__38702;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__temp_val__38703;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__temp_val__38704;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__temp_val__38705;

zprint.zfns.ztag = ztag_temp_val__38706;

zprint.zfns.zlast = zlast_temp_val__38707;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__temp_val__38708;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__temp_val__38709;

zprint.zfns.zderef = zderef_temp_val__38710;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__temp_val__38711;

zprint.zfns.zns_QMARK_ = zns_QMARK__temp_val__38712;

zprint.zfns.zobj_to_vec = zobj_to_vec_temp_val__38713;

zprint.zfns.zexpandarray = zexpandarray_temp_val__38714;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__temp_val__38715;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__temp_val__38716;

zprint.zfns.zmap_all = zmap_all_temp_val__38717;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__temp_val__38718;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__temp_val__38719;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__temp_val__38720;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__temp_val__38721;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__temp_val__38722;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__temp_val__38723;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__temp_val__38724;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_temp_val__38725;

zprint.zfns.zdotdotdot = zdotdotdot_temp_val__38726;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__temp_val__38727;

zprint.zfns.znil_QMARK_ = znil_QMARK__temp_val__38728;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__temp_val__38729;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__temp_val__38730;

zprint.zfns.zlift_ns = zlift_ns_temp_val__38731;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__temp_val__38732;

zprint.zfns.zfind = zfind_temp_val__38733;

zprint.zfns.ztake_append = ztake_append_temp_val__38734;

try{return body_fn.call(null);
}finally {zprint.zfns.ztake_append = ztake_append_orig_val__38677;

zprint.zfns.zfind = zfind_orig_val__38676;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK__orig_val__38675;

zprint.zfns.zlift_ns = zlift_ns_orig_val__38674;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK__orig_val__38673;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK__orig_val__38672;

zprint.zfns.znil_QMARK_ = znil_QMARK__orig_val__38671;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK__orig_val__38670;

zprint.zfns.zdotdotdot = zdotdotdot_orig_val__38669;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq_orig_val__38668;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK__orig_val__38667;

zprint.zfns.zagent_QMARK_ = zagent_QMARK__orig_val__38666;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK__orig_val__38665;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK__orig_val__38664;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK__orig_val__38663;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK__orig_val__38662;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK__orig_val__38661;

zprint.zfns.zmap_all = zmap_all_orig_val__38660;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK__orig_val__38659;

zprint.zfns.znewline_QMARK_ = znewline_QMARK__orig_val__38658;

zprint.zfns.zexpandarray = zexpandarray_orig_val__38657;

zprint.zfns.zobj_to_vec = zobj_to_vec_orig_val__38656;

zprint.zfns.zns_QMARK_ = zns_QMARK__orig_val__38655;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK__orig_val__38654;

zprint.zfns.zderef = zderef_orig_val__38653;

zprint.zfns.zatom_QMARK_ = zatom_QMARK__orig_val__38652;

zprint.zfns.zarray_QMARK_ = zarray_QMARK__orig_val__38651;

zprint.zfns.zlast = zlast_orig_val__38650;

zprint.zfns.ztag = ztag_orig_val__38649;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK__orig_val__38648;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK__orig_val__38647;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK__orig_val__38646;

zprint.zfns.zset_QMARK_ = zset_QMARK__orig_val__38645;

zprint.zfns.zmap_QMARK_ = zmap_QMARK__orig_val__38644;

zprint.zfns.zvector_QMARK_ = zvector_QMARK__orig_val__38643;

zprint.zfns.zlist_QMARK_ = zlist_QMARK__orig_val__38642;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK__orig_val__38641;

zprint.zfns.zfind_path = zfind_path_orig_val__38640;

zprint.zfns.zfocus = zfocus_orig_val__38639;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK__orig_val__38638;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK__orig_val__38637;

zprint.zfns.zmap_w_nl = zmap_w_nl_orig_val__38636;

zprint.zfns.zmap = zmap_orig_val__38635;

zprint.zfns.zcount = zcount_orig_val__38634;

zprint.zfns.znthnext = znthnext_orig_val__38633;

zprint.zfns.zfourth = zfourth_orig_val__38632;

zprint.zfns.zthird = zthird_orig_val__38631;

zprint.zfns.zsecond = zsecond_orig_val__38630;

zprint.zfns.zfirst_no_comment = zfirst_no_comment_orig_val__38629;

zprint.zfns.zfirst = zfirst_orig_val__38628;

zprint.zfns.zfocus_style = zfocus_style_orig_val__38627;

zprint.zfns.zmap_right = zmap_right_orig_val__38626;

zprint.zfns.zseqnws = zseqnws_orig_val__38625;

zprint.zfns.zsexpr = zsexpr_orig_val__38624;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK__orig_val__38623;

zprint.zfns.znumstr = znumstr_orig_val__38622;

zprint.zfns.zstring = zstring_orig_val__38621;
}});

//# sourceMappingURL=sutil.js.map?rel=1561299752036
