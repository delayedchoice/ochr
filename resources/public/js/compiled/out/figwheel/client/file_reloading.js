// Compiled by ClojureScript 1.10.520 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined')){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4131__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__4131__auto__){
return or__4131__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4131__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__42776_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__42776_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependency_data !== 'undefined')){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__42777 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__42778 = null;
var count__42779 = (0);
var i__42780 = (0);
while(true){
if((i__42780 < count__42779)){
var n = cljs.core._nth.call(null,chunk__42778,i__42780);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__42781 = seq__42777;
var G__42782 = chunk__42778;
var G__42783 = count__42779;
var G__42784 = (i__42780 + (1));
seq__42777 = G__42781;
chunk__42778 = G__42782;
count__42779 = G__42783;
i__42780 = G__42784;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42777);
if(temp__5735__auto__){
var seq__42777__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42777__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42777__$1);
var G__42785 = cljs.core.chunk_rest.call(null,seq__42777__$1);
var G__42786 = c__4550__auto__;
var G__42787 = cljs.core.count.call(null,c__4550__auto__);
var G__42788 = (0);
seq__42777 = G__42785;
chunk__42778 = G__42786;
count__42779 = G__42787;
i__42780 = G__42788;
continue;
} else {
var n = cljs.core.first.call(null,seq__42777__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__42789 = cljs.core.next.call(null,seq__42777__$1);
var G__42790 = null;
var G__42791 = (0);
var G__42792 = (0);
seq__42777 = G__42789;
chunk__42778 = G__42790;
count__42779 = G__42791;
i__42780 = G__42792;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__42793){
var vec__42794 = p__42793;
var _ = cljs.core.nth.call(null,vec__42794,(0),null);
var v = cljs.core.nth.call(null,vec__42794,(1),null);
var and__4120__auto__ = v;
if(cljs.core.truth_(and__4120__auto__)){
return v.call(null,dep);
} else {
return and__4120__auto__;
}
}),cljs.core.filter.call(null,(function (p__42797){
var vec__42798 = p__42797;
var k = cljs.core.nth.call(null,vec__42798,(0),null);
var v = cljs.core.nth.call(null,vec__42798,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__42810_42818 = cljs.core.seq.call(null,deps);
var chunk__42811_42819 = null;
var count__42812_42820 = (0);
var i__42813_42821 = (0);
while(true){
if((i__42813_42821 < count__42812_42820)){
var dep_42822 = cljs.core._nth.call(null,chunk__42811_42819,i__42813_42821);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_42822;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_42822));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_42822,(depth + (1)),state);
} else {
}


var G__42823 = seq__42810_42818;
var G__42824 = chunk__42811_42819;
var G__42825 = count__42812_42820;
var G__42826 = (i__42813_42821 + (1));
seq__42810_42818 = G__42823;
chunk__42811_42819 = G__42824;
count__42812_42820 = G__42825;
i__42813_42821 = G__42826;
continue;
} else {
var temp__5735__auto___42827 = cljs.core.seq.call(null,seq__42810_42818);
if(temp__5735__auto___42827){
var seq__42810_42828__$1 = temp__5735__auto___42827;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42810_42828__$1)){
var c__4550__auto___42829 = cljs.core.chunk_first.call(null,seq__42810_42828__$1);
var G__42830 = cljs.core.chunk_rest.call(null,seq__42810_42828__$1);
var G__42831 = c__4550__auto___42829;
var G__42832 = cljs.core.count.call(null,c__4550__auto___42829);
var G__42833 = (0);
seq__42810_42818 = G__42830;
chunk__42811_42819 = G__42831;
count__42812_42820 = G__42832;
i__42813_42821 = G__42833;
continue;
} else {
var dep_42834 = cljs.core.first.call(null,seq__42810_42828__$1);
if(cljs.core.truth_((function (){var and__4120__auto__ = dep_42834;
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_42834));
} else {
return and__4120__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_42834,(depth + (1)),state);
} else {
}


var G__42835 = cljs.core.next.call(null,seq__42810_42828__$1);
var G__42836 = null;
var G__42837 = (0);
var G__42838 = (0);
seq__42810_42818 = G__42835;
chunk__42811_42819 = G__42836;
count__42812_42820 = G__42837;
i__42813_42821 = G__42838;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__42814){
var vec__42815 = p__42814;
var seq__42816 = cljs.core.seq.call(null,vec__42815);
var first__42817 = cljs.core.first.call(null,seq__42816);
var seq__42816__$1 = cljs.core.next.call(null,seq__42816);
var x = first__42817;
var xs = seq__42816__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__42815,seq__42816,first__42817,seq__42816__$1,x,xs,get_deps__$1){
return (function (p1__42801_SHARP_){
return clojure.set.difference.call(null,p1__42801_SHARP_,x);
});})(vec__42815,seq__42816,first__42817,seq__42816__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__42839 = cljs.core.seq.call(null,provides);
var chunk__42840 = null;
var count__42841 = (0);
var i__42842 = (0);
while(true){
if((i__42842 < count__42841)){
var prov = cljs.core._nth.call(null,chunk__42840,i__42842);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42851_42859 = cljs.core.seq.call(null,requires);
var chunk__42852_42860 = null;
var count__42853_42861 = (0);
var i__42854_42862 = (0);
while(true){
if((i__42854_42862 < count__42853_42861)){
var req_42863 = cljs.core._nth.call(null,chunk__42852_42860,i__42854_42862);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42863,prov);


var G__42864 = seq__42851_42859;
var G__42865 = chunk__42852_42860;
var G__42866 = count__42853_42861;
var G__42867 = (i__42854_42862 + (1));
seq__42851_42859 = G__42864;
chunk__42852_42860 = G__42865;
count__42853_42861 = G__42866;
i__42854_42862 = G__42867;
continue;
} else {
var temp__5735__auto___42868 = cljs.core.seq.call(null,seq__42851_42859);
if(temp__5735__auto___42868){
var seq__42851_42869__$1 = temp__5735__auto___42868;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42851_42869__$1)){
var c__4550__auto___42870 = cljs.core.chunk_first.call(null,seq__42851_42869__$1);
var G__42871 = cljs.core.chunk_rest.call(null,seq__42851_42869__$1);
var G__42872 = c__4550__auto___42870;
var G__42873 = cljs.core.count.call(null,c__4550__auto___42870);
var G__42874 = (0);
seq__42851_42859 = G__42871;
chunk__42852_42860 = G__42872;
count__42853_42861 = G__42873;
i__42854_42862 = G__42874;
continue;
} else {
var req_42875 = cljs.core.first.call(null,seq__42851_42869__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42875,prov);


var G__42876 = cljs.core.next.call(null,seq__42851_42869__$1);
var G__42877 = null;
var G__42878 = (0);
var G__42879 = (0);
seq__42851_42859 = G__42876;
chunk__42852_42860 = G__42877;
count__42853_42861 = G__42878;
i__42854_42862 = G__42879;
continue;
}
} else {
}
}
break;
}


var G__42880 = seq__42839;
var G__42881 = chunk__42840;
var G__42882 = count__42841;
var G__42883 = (i__42842 + (1));
seq__42839 = G__42880;
chunk__42840 = G__42881;
count__42841 = G__42882;
i__42842 = G__42883;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__42839);
if(temp__5735__auto__){
var seq__42839__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42839__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__42839__$1);
var G__42884 = cljs.core.chunk_rest.call(null,seq__42839__$1);
var G__42885 = c__4550__auto__;
var G__42886 = cljs.core.count.call(null,c__4550__auto__);
var G__42887 = (0);
seq__42839 = G__42884;
chunk__42840 = G__42885;
count__42841 = G__42886;
i__42842 = G__42887;
continue;
} else {
var prov = cljs.core.first.call(null,seq__42839__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__42855_42888 = cljs.core.seq.call(null,requires);
var chunk__42856_42889 = null;
var count__42857_42890 = (0);
var i__42858_42891 = (0);
while(true){
if((i__42858_42891 < count__42857_42890)){
var req_42892 = cljs.core._nth.call(null,chunk__42856_42889,i__42858_42891);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42892,prov);


var G__42893 = seq__42855_42888;
var G__42894 = chunk__42856_42889;
var G__42895 = count__42857_42890;
var G__42896 = (i__42858_42891 + (1));
seq__42855_42888 = G__42893;
chunk__42856_42889 = G__42894;
count__42857_42890 = G__42895;
i__42858_42891 = G__42896;
continue;
} else {
var temp__5735__auto___42897__$1 = cljs.core.seq.call(null,seq__42855_42888);
if(temp__5735__auto___42897__$1){
var seq__42855_42898__$1 = temp__5735__auto___42897__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42855_42898__$1)){
var c__4550__auto___42899 = cljs.core.chunk_first.call(null,seq__42855_42898__$1);
var G__42900 = cljs.core.chunk_rest.call(null,seq__42855_42898__$1);
var G__42901 = c__4550__auto___42899;
var G__42902 = cljs.core.count.call(null,c__4550__auto___42899);
var G__42903 = (0);
seq__42855_42888 = G__42900;
chunk__42856_42889 = G__42901;
count__42857_42890 = G__42902;
i__42858_42891 = G__42903;
continue;
} else {
var req_42904 = cljs.core.first.call(null,seq__42855_42898__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_42904,prov);


var G__42905 = cljs.core.next.call(null,seq__42855_42898__$1);
var G__42906 = null;
var G__42907 = (0);
var G__42908 = (0);
seq__42855_42888 = G__42905;
chunk__42856_42889 = G__42906;
count__42857_42890 = G__42907;
i__42858_42891 = G__42908;
continue;
}
} else {
}
}
break;
}


var G__42909 = cljs.core.next.call(null,seq__42839__$1);
var G__42910 = null;
var G__42911 = (0);
var G__42912 = (0);
seq__42839 = G__42909;
chunk__42840 = G__42910;
count__42841 = G__42911;
i__42842 = G__42912;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__42913_42917 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__42914_42918 = null;
var count__42915_42919 = (0);
var i__42916_42920 = (0);
while(true){
if((i__42916_42920 < count__42915_42919)){
var ns_42921 = cljs.core._nth.call(null,chunk__42914_42918,i__42916_42920);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42921);


var G__42922 = seq__42913_42917;
var G__42923 = chunk__42914_42918;
var G__42924 = count__42915_42919;
var G__42925 = (i__42916_42920 + (1));
seq__42913_42917 = G__42922;
chunk__42914_42918 = G__42923;
count__42915_42919 = G__42924;
i__42916_42920 = G__42925;
continue;
} else {
var temp__5735__auto___42926 = cljs.core.seq.call(null,seq__42913_42917);
if(temp__5735__auto___42926){
var seq__42913_42927__$1 = temp__5735__auto___42926;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42913_42927__$1)){
var c__4550__auto___42928 = cljs.core.chunk_first.call(null,seq__42913_42927__$1);
var G__42929 = cljs.core.chunk_rest.call(null,seq__42913_42927__$1);
var G__42930 = c__4550__auto___42928;
var G__42931 = cljs.core.count.call(null,c__4550__auto___42928);
var G__42932 = (0);
seq__42913_42917 = G__42929;
chunk__42914_42918 = G__42930;
count__42915_42919 = G__42931;
i__42916_42920 = G__42932;
continue;
} else {
var ns_42933 = cljs.core.first.call(null,seq__42913_42927__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_42933);


var G__42934 = cljs.core.next.call(null,seq__42913_42927__$1);
var G__42935 = null;
var G__42936 = (0);
var G__42937 = (0);
seq__42913_42917 = G__42934;
chunk__42914_42918 = G__42935;
count__42915_42919 = G__42936;
i__42916_42920 = G__42937;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4131__auto__ = goog.require__;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__42938__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__42938 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__42939__i = 0, G__42939__a = new Array(arguments.length -  0);
while (G__42939__i < G__42939__a.length) {G__42939__a[G__42939__i] = arguments[G__42939__i + 0]; ++G__42939__i;}
  args = new cljs.core.IndexedSeq(G__42939__a,0,null);
} 
return G__42938__delegate.call(this,args);};
G__42938.cljs$lang$maxFixedArity = 0;
G__42938.cljs$lang$applyTo = (function (arglist__42940){
var args = cljs.core.seq(arglist__42940);
return G__42938__delegate(args);
});
G__42938.cljs$core$IFn$_invoke$arity$variadic = G__42938__delegate;
return G__42938;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined')){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = (((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.safeLoad !== 'undefined'))?(function (p1__42941_SHARP_,p2__42942_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42941_SHARP_)),p2__42942_SHARP_);
}):(((typeof goog !== 'undefined') && (typeof goog.net !== 'undefined') && (typeof goog.net.jsloader !== 'undefined') && (typeof goog.net.jsloader.load !== 'undefined'))?(function (p1__42943_SHARP_,p2__42944_SHARP_){
return goog.net.jsloader.load(cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__42943_SHARP_),p2__42944_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__42945 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__42945.addCallback(((function (G__42945){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__42945))
);

G__42945.addErrback(((function (G__42945){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__42945))
);

return G__42945;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e42946){if((e42946 instanceof Error)){
var e = e42946;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42946;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e42947){if((e42947 instanceof Error)){
var e = e42947;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e42947;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__42948 = cljs.core._EQ_;
var expr__42949 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__42948.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__42949))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__42948.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__42949))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__42948.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__42949))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__42948,expr__42949){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__42948,expr__42949))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__42951,callback){
var map__42952 = p__42951;
var map__42952__$1 = (((((!((map__42952 == null))))?(((((map__42952.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42952.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42952):map__42952);
var file_msg = map__42952__$1;
var request_url = cljs.core.get.call(null,map__42952__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__4131__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__42952,map__42952__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__42952,map__42952__$1,file_msg,request_url))
);
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_chan !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined')){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined')){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reloader_loop !== 'undefined')){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__){
return (function (state_42990){
var state_val_42991 = (state_42990[(1)]);
if((state_val_42991 === (7))){
var inst_42986 = (state_42990[(2)]);
var state_42990__$1 = state_42990;
var statearr_42992_43018 = state_42990__$1;
(statearr_42992_43018[(2)] = inst_42986);

(statearr_42992_43018[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (1))){
var state_42990__$1 = state_42990;
var statearr_42993_43019 = state_42990__$1;
(statearr_42993_43019[(2)] = null);

(statearr_42993_43019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (4))){
var inst_42956 = (state_42990[(7)]);
var inst_42956__$1 = (state_42990[(2)]);
var state_42990__$1 = (function (){var statearr_42994 = state_42990;
(statearr_42994[(7)] = inst_42956__$1);

return statearr_42994;
})();
if(cljs.core.truth_(inst_42956__$1)){
var statearr_42995_43020 = state_42990__$1;
(statearr_42995_43020[(1)] = (5));

} else {
var statearr_42996_43021 = state_42990__$1;
(statearr_42996_43021[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (15))){
var inst_42971 = (state_42990[(8)]);
var inst_42969 = (state_42990[(9)]);
var inst_42973 = inst_42971.call(null,inst_42969);
var state_42990__$1 = state_42990;
var statearr_42997_43022 = state_42990__$1;
(statearr_42997_43022[(2)] = inst_42973);

(statearr_42997_43022[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (13))){
var inst_42980 = (state_42990[(2)]);
var state_42990__$1 = state_42990;
var statearr_42998_43023 = state_42990__$1;
(statearr_42998_43023[(2)] = inst_42980);

(statearr_42998_43023[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (6))){
var state_42990__$1 = state_42990;
var statearr_42999_43024 = state_42990__$1;
(statearr_42999_43024[(2)] = null);

(statearr_42999_43024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (17))){
var inst_42977 = (state_42990[(2)]);
var state_42990__$1 = state_42990;
var statearr_43000_43025 = state_42990__$1;
(statearr_43000_43025[(2)] = inst_42977);

(statearr_43000_43025[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (3))){
var inst_42988 = (state_42990[(2)]);
var state_42990__$1 = state_42990;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42990__$1,inst_42988);
} else {
if((state_val_42991 === (12))){
var state_42990__$1 = state_42990;
var statearr_43001_43026 = state_42990__$1;
(statearr_43001_43026[(2)] = null);

(statearr_43001_43026[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (2))){
var state_42990__$1 = state_42990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42990__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_42991 === (11))){
var inst_42961 = (state_42990[(10)]);
var inst_42967 = figwheel.client.file_reloading.blocking_load.call(null,inst_42961);
var state_42990__$1 = state_42990;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42990__$1,(14),inst_42967);
} else {
if((state_val_42991 === (9))){
var inst_42961 = (state_42990[(10)]);
var state_42990__$1 = state_42990;
if(cljs.core.truth_(inst_42961)){
var statearr_43002_43027 = state_42990__$1;
(statearr_43002_43027[(1)] = (11));

} else {
var statearr_43003_43028 = state_42990__$1;
(statearr_43003_43028[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (5))){
var inst_42962 = (state_42990[(11)]);
var inst_42956 = (state_42990[(7)]);
var inst_42961 = cljs.core.nth.call(null,inst_42956,(0),null);
var inst_42962__$1 = cljs.core.nth.call(null,inst_42956,(1),null);
var state_42990__$1 = (function (){var statearr_43004 = state_42990;
(statearr_43004[(10)] = inst_42961);

(statearr_43004[(11)] = inst_42962__$1);

return statearr_43004;
})();
if(cljs.core.truth_(inst_42962__$1)){
var statearr_43005_43029 = state_42990__$1;
(statearr_43005_43029[(1)] = (8));

} else {
var statearr_43006_43030 = state_42990__$1;
(statearr_43006_43030[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (14))){
var inst_42961 = (state_42990[(10)]);
var inst_42971 = (state_42990[(8)]);
var inst_42969 = (state_42990[(2)]);
var inst_42970 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_42971__$1 = cljs.core.get.call(null,inst_42970,inst_42961);
var state_42990__$1 = (function (){var statearr_43007 = state_42990;
(statearr_43007[(8)] = inst_42971__$1);

(statearr_43007[(9)] = inst_42969);

return statearr_43007;
})();
if(cljs.core.truth_(inst_42971__$1)){
var statearr_43008_43031 = state_42990__$1;
(statearr_43008_43031[(1)] = (15));

} else {
var statearr_43009_43032 = state_42990__$1;
(statearr_43009_43032[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (16))){
var inst_42969 = (state_42990[(9)]);
var inst_42975 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_42969);
var state_42990__$1 = state_42990;
var statearr_43010_43033 = state_42990__$1;
(statearr_43010_43033[(2)] = inst_42975);

(statearr_43010_43033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (10))){
var inst_42982 = (state_42990[(2)]);
var state_42990__$1 = (function (){var statearr_43011 = state_42990;
(statearr_43011[(12)] = inst_42982);

return statearr_43011;
})();
var statearr_43012_43034 = state_42990__$1;
(statearr_43012_43034[(2)] = null);

(statearr_43012_43034[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42991 === (8))){
var inst_42962 = (state_42990[(11)]);
var inst_42964 = eval(inst_42962);
var state_42990__$1 = state_42990;
var statearr_43013_43035 = state_42990__$1;
(statearr_43013_43035[(2)] = inst_42964);

(statearr_43013_43035[(1)] = (10));


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
});})(c__32544__auto__))
;
return ((function (switch__32449__auto__,c__32544__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32450__auto__ = null;
var figwheel$client$file_reloading$state_machine__32450__auto____0 = (function (){
var statearr_43014 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43014[(0)] = figwheel$client$file_reloading$state_machine__32450__auto__);

(statearr_43014[(1)] = (1));

return statearr_43014;
});
var figwheel$client$file_reloading$state_machine__32450__auto____1 = (function (state_42990){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_42990);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e43015){if((e43015 instanceof Object)){
var ex__32453__auto__ = e43015;
var statearr_43016_43036 = state_42990;
(statearr_43016_43036[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42990);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43015;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43037 = state_42990;
state_42990 = G__43037;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32450__auto__ = function(state_42990){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32450__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32450__auto____1.call(this,state_42990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32450__auto____0;
figwheel$client$file_reloading$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32450__auto____1;
return figwheel$client$file_reloading$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__))
})();
var state__32546__auto__ = (function (){var statearr_43017 = f__32545__auto__.call(null);
(statearr_43017[(6)] = c__32544__auto__);

return statearr_43017;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__))
);

return c__32544__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__43039 = arguments.length;
switch (G__43039) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__43041,callback){
var map__43042 = p__43041;
var map__43042__$1 = (((((!((map__43042 == null))))?(((((map__43042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43042):map__43042);
var file_msg = map__43042__$1;
var namespace = cljs.core.get.call(null,map__43042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__43042,map__43042__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__43042,map__43042__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__43044){
var map__43045 = p__43044;
var map__43045__$1 = (((((!((map__43045 == null))))?(((((map__43045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43045):map__43045);
var file_msg = map__43045__$1;
var namespace = cljs.core.get.call(null,map__43045__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return (!((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null)));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__43047){
var map__43048 = p__43047;
var map__43048__$1 = (((((!((map__43048 == null))))?(((((map__43048.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43048.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43048):map__43048);
var file_msg = map__43048__$1;
var namespace = cljs.core.get.call(null,map__43048__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4120__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__4120__auto__){
var or__4131__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var or__4131__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4131__auto____$1)){
return or__4131__auto____$1;
} else {
var or__4131__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__4131__auto____$2)){
return or__4131__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__4120__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__43050,callback){
var map__43051 = p__43050;
var map__43051__$1 = (((((!((map__43051 == null))))?(((((map__43051.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43051.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43051):map__43051);
var file_msg = map__43051__$1;
var request_url = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__43051__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__32544__auto___43101 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___43101,out){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___43101,out){
return (function (state_43086){
var state_val_43087 = (state_43086[(1)]);
if((state_val_43087 === (1))){
var inst_43060 = cljs.core.seq.call(null,files);
var inst_43061 = cljs.core.first.call(null,inst_43060);
var inst_43062 = cljs.core.next.call(null,inst_43060);
var inst_43063 = files;
var state_43086__$1 = (function (){var statearr_43088 = state_43086;
(statearr_43088[(7)] = inst_43062);

(statearr_43088[(8)] = inst_43061);

(statearr_43088[(9)] = inst_43063);

return statearr_43088;
})();
var statearr_43089_43102 = state_43086__$1;
(statearr_43089_43102[(2)] = null);

(statearr_43089_43102[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (2))){
var inst_43069 = (state_43086[(10)]);
var inst_43063 = (state_43086[(9)]);
var inst_43068 = cljs.core.seq.call(null,inst_43063);
var inst_43069__$1 = cljs.core.first.call(null,inst_43068);
var inst_43070 = cljs.core.next.call(null,inst_43068);
var inst_43071 = (inst_43069__$1 == null);
var inst_43072 = cljs.core.not.call(null,inst_43071);
var state_43086__$1 = (function (){var statearr_43090 = state_43086;
(statearr_43090[(11)] = inst_43070);

(statearr_43090[(10)] = inst_43069__$1);

return statearr_43090;
})();
if(inst_43072){
var statearr_43091_43103 = state_43086__$1;
(statearr_43091_43103[(1)] = (4));

} else {
var statearr_43092_43104 = state_43086__$1;
(statearr_43092_43104[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (3))){
var inst_43084 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43086__$1,inst_43084);
} else {
if((state_val_43087 === (4))){
var inst_43069 = (state_43086[(10)]);
var inst_43074 = figwheel.client.file_reloading.reload_js_file.call(null,inst_43069);
var state_43086__$1 = state_43086;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43086__$1,(7),inst_43074);
} else {
if((state_val_43087 === (5))){
var inst_43080 = cljs.core.async.close_BANG_.call(null,out);
var state_43086__$1 = state_43086;
var statearr_43093_43105 = state_43086__$1;
(statearr_43093_43105[(2)] = inst_43080);

(statearr_43093_43105[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (6))){
var inst_43082 = (state_43086[(2)]);
var state_43086__$1 = state_43086;
var statearr_43094_43106 = state_43086__$1;
(statearr_43094_43106[(2)] = inst_43082);

(statearr_43094_43106[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43087 === (7))){
var inst_43070 = (state_43086[(11)]);
var inst_43076 = (state_43086[(2)]);
var inst_43077 = cljs.core.async.put_BANG_.call(null,out,inst_43076);
var inst_43063 = inst_43070;
var state_43086__$1 = (function (){var statearr_43095 = state_43086;
(statearr_43095[(9)] = inst_43063);

(statearr_43095[(12)] = inst_43077);

return statearr_43095;
})();
var statearr_43096_43107 = state_43086__$1;
(statearr_43096_43107[(2)] = null);

(statearr_43096_43107[(1)] = (2));


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
});})(c__32544__auto___43101,out))
;
return ((function (switch__32449__auto__,c__32544__auto___43101,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto____0 = (function (){
var statearr_43097 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43097[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto__);

(statearr_43097[(1)] = (1));

return statearr_43097;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto____1 = (function (state_43086){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_43086);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e43098){if((e43098 instanceof Object)){
var ex__32453__auto__ = e43098;
var statearr_43099_43108 = state_43086;
(statearr_43099_43108[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43086);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43098;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43109 = state_43086;
state_43086 = G__43109;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto__ = function(state_43086){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto____1.call(this,state_43086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___43101,out))
})();
var state__32546__auto__ = (function (){var statearr_43100 = f__32545__auto__.call(null);
(statearr_43100[(6)] = c__32544__auto___43101);

return statearr_43100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___43101,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__43110,opts){
var map__43111 = p__43110;
var map__43111__$1 = (((((!((map__43111 == null))))?(((((map__43111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43111):map__43111);
var eval_body = cljs.core.get.call(null,map__43111__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__43111__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4120__auto__ = eval_body;
if(cljs.core.truth_(and__4120__auto__)){
return typeof eval_body === 'string';
} else {
return and__4120__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e43113){var e = e43113;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5733__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__43114_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43114_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5733__auto__)){
var file_msg = temp__5733__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__43115){
var vec__43116 = p__43115;
var k = cljs.core.nth.call(null,vec__43116,(0),null);
var v = cljs.core.nth.call(null,vec__43116,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__43119){
var vec__43120 = p__43119;
var k = cljs.core.nth.call(null,vec__43120,(0),null);
var v = cljs.core.nth.call(null,vec__43120,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__43126,p__43127){
var map__43128 = p__43126;
var map__43128__$1 = (((((!((map__43128 == null))))?(((((map__43128.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43128.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43128):map__43128);
var opts = map__43128__$1;
var before_jsload = cljs.core.get.call(null,map__43128__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__43128__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__43128__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__43129 = p__43127;
var map__43129__$1 = (((((!((map__43129 == null))))?(((((map__43129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43129):map__43129);
var msg = map__43129__$1;
var files = cljs.core.get.call(null,map__43129__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__43129__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__43129__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_43283){
var state_val_43284 = (state_43283[(1)]);
if((state_val_43284 === (7))){
var inst_43143 = (state_43283[(7)]);
var inst_43146 = (state_43283[(8)]);
var inst_43145 = (state_43283[(9)]);
var inst_43144 = (state_43283[(10)]);
var inst_43151 = cljs.core._nth.call(null,inst_43144,inst_43146);
var inst_43152 = figwheel.client.file_reloading.eval_body.call(null,inst_43151,opts);
var inst_43153 = (inst_43146 + (1));
var tmp43285 = inst_43143;
var tmp43286 = inst_43145;
var tmp43287 = inst_43144;
var inst_43143__$1 = tmp43285;
var inst_43144__$1 = tmp43287;
var inst_43145__$1 = tmp43286;
var inst_43146__$1 = inst_43153;
var state_43283__$1 = (function (){var statearr_43288 = state_43283;
(statearr_43288[(7)] = inst_43143__$1);

(statearr_43288[(11)] = inst_43152);

(statearr_43288[(8)] = inst_43146__$1);

(statearr_43288[(9)] = inst_43145__$1);

(statearr_43288[(10)] = inst_43144__$1);

return statearr_43288;
})();
var statearr_43289_43372 = state_43283__$1;
(statearr_43289_43372[(2)] = null);

(statearr_43289_43372[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (20))){
var inst_43186 = (state_43283[(12)]);
var inst_43194 = figwheel.client.file_reloading.sort_files.call(null,inst_43186);
var state_43283__$1 = state_43283;
var statearr_43290_43373 = state_43283__$1;
(statearr_43290_43373[(2)] = inst_43194);

(statearr_43290_43373[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (27))){
var state_43283__$1 = state_43283;
var statearr_43291_43374 = state_43283__$1;
(statearr_43291_43374[(2)] = null);

(statearr_43291_43374[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (1))){
var inst_43135 = (state_43283[(13)]);
var inst_43132 = before_jsload.call(null,files);
var inst_43133 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_43134 = (function (){return ((function (inst_43135,inst_43132,inst_43133,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43123_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43123_SHARP_);
});
;})(inst_43135,inst_43132,inst_43133,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43135__$1 = cljs.core.filter.call(null,inst_43134,files);
var inst_43136 = cljs.core.not_empty.call(null,inst_43135__$1);
var state_43283__$1 = (function (){var statearr_43292 = state_43283;
(statearr_43292[(13)] = inst_43135__$1);

(statearr_43292[(14)] = inst_43133);

(statearr_43292[(15)] = inst_43132);

return statearr_43292;
})();
if(cljs.core.truth_(inst_43136)){
var statearr_43293_43375 = state_43283__$1;
(statearr_43293_43375[(1)] = (2));

} else {
var statearr_43294_43376 = state_43283__$1;
(statearr_43294_43376[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (24))){
var state_43283__$1 = state_43283;
var statearr_43295_43377 = state_43283__$1;
(statearr_43295_43377[(2)] = null);

(statearr_43295_43377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (39))){
var inst_43236 = (state_43283[(16)]);
var state_43283__$1 = state_43283;
var statearr_43296_43378 = state_43283__$1;
(statearr_43296_43378[(2)] = inst_43236);

(statearr_43296_43378[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (46))){
var inst_43278 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43297_43379 = state_43283__$1;
(statearr_43297_43379[(2)] = inst_43278);

(statearr_43297_43379[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (4))){
var inst_43180 = (state_43283[(2)]);
var inst_43181 = cljs.core.List.EMPTY;
var inst_43182 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_43181);
var inst_43183 = (function (){return ((function (inst_43180,inst_43181,inst_43182,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43124_SHARP_){
var and__4120__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__43124_SHARP_);
if(cljs.core.truth_(and__4120__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__43124_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__43124_SHARP_))));
} else {
return and__4120__auto__;
}
});
;})(inst_43180,inst_43181,inst_43182,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43184 = cljs.core.filter.call(null,inst_43183,files);
var inst_43185 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_43186 = cljs.core.concat.call(null,inst_43184,inst_43185);
var state_43283__$1 = (function (){var statearr_43298 = state_43283;
(statearr_43298[(17)] = inst_43182);

(statearr_43298[(12)] = inst_43186);

(statearr_43298[(18)] = inst_43180);

return statearr_43298;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_43299_43380 = state_43283__$1;
(statearr_43299_43380[(1)] = (16));

} else {
var statearr_43300_43381 = state_43283__$1;
(statearr_43300_43381[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (15))){
var inst_43170 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43301_43382 = state_43283__$1;
(statearr_43301_43382[(2)] = inst_43170);

(statearr_43301_43382[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (21))){
var inst_43196 = (state_43283[(19)]);
var inst_43196__$1 = (state_43283[(2)]);
var inst_43197 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_43196__$1);
var state_43283__$1 = (function (){var statearr_43302 = state_43283;
(statearr_43302[(19)] = inst_43196__$1);

return statearr_43302;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43283__$1,(22),inst_43197);
} else {
if((state_val_43284 === (31))){
var inst_43281 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43283__$1,inst_43281);
} else {
if((state_val_43284 === (32))){
var inst_43236 = (state_43283[(16)]);
var inst_43241 = inst_43236.cljs$lang$protocol_mask$partition0$;
var inst_43242 = (inst_43241 & (64));
var inst_43243 = inst_43236.cljs$core$ISeq$;
var inst_43244 = (cljs.core.PROTOCOL_SENTINEL === inst_43243);
var inst_43245 = ((inst_43242) || (inst_43244));
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43245)){
var statearr_43303_43383 = state_43283__$1;
(statearr_43303_43383[(1)] = (35));

} else {
var statearr_43304_43384 = state_43283__$1;
(statearr_43304_43384[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (40))){
var inst_43258 = (state_43283[(20)]);
var inst_43257 = (state_43283[(2)]);
var inst_43258__$1 = cljs.core.get.call(null,inst_43257,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_43259 = cljs.core.get.call(null,inst_43257,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_43260 = cljs.core.not_empty.call(null,inst_43258__$1);
var state_43283__$1 = (function (){var statearr_43305 = state_43283;
(statearr_43305[(21)] = inst_43259);

(statearr_43305[(20)] = inst_43258__$1);

return statearr_43305;
})();
if(cljs.core.truth_(inst_43260)){
var statearr_43306_43385 = state_43283__$1;
(statearr_43306_43385[(1)] = (41));

} else {
var statearr_43307_43386 = state_43283__$1;
(statearr_43307_43386[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (33))){
var state_43283__$1 = state_43283;
var statearr_43308_43387 = state_43283__$1;
(statearr_43308_43387[(2)] = false);

(statearr_43308_43387[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (13))){
var inst_43156 = (state_43283[(22)]);
var inst_43160 = cljs.core.chunk_first.call(null,inst_43156);
var inst_43161 = cljs.core.chunk_rest.call(null,inst_43156);
var inst_43162 = cljs.core.count.call(null,inst_43160);
var inst_43143 = inst_43161;
var inst_43144 = inst_43160;
var inst_43145 = inst_43162;
var inst_43146 = (0);
var state_43283__$1 = (function (){var statearr_43309 = state_43283;
(statearr_43309[(7)] = inst_43143);

(statearr_43309[(8)] = inst_43146);

(statearr_43309[(9)] = inst_43145);

(statearr_43309[(10)] = inst_43144);

return statearr_43309;
})();
var statearr_43310_43388 = state_43283__$1;
(statearr_43310_43388[(2)] = null);

(statearr_43310_43388[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (22))){
var inst_43199 = (state_43283[(23)]);
var inst_43204 = (state_43283[(24)]);
var inst_43200 = (state_43283[(25)]);
var inst_43196 = (state_43283[(19)]);
var inst_43199__$1 = (state_43283[(2)]);
var inst_43200__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43199__$1);
var inst_43201 = (function (){var all_files = inst_43196;
var res_SINGLEQUOTE_ = inst_43199__$1;
var res = inst_43200__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_43199,inst_43204,inst_43200,inst_43196,inst_43199__$1,inst_43200__$1,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__43125_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__43125_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_43199,inst_43204,inst_43200,inst_43196,inst_43199__$1,inst_43200__$1,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43202 = cljs.core.filter.call(null,inst_43201,inst_43199__$1);
var inst_43203 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_43204__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_43203);
var inst_43205 = cljs.core.not_empty.call(null,inst_43204__$1);
var state_43283__$1 = (function (){var statearr_43311 = state_43283;
(statearr_43311[(23)] = inst_43199__$1);

(statearr_43311[(24)] = inst_43204__$1);

(statearr_43311[(25)] = inst_43200__$1);

(statearr_43311[(26)] = inst_43202);

return statearr_43311;
})();
if(cljs.core.truth_(inst_43205)){
var statearr_43312_43389 = state_43283__$1;
(statearr_43312_43389[(1)] = (23));

} else {
var statearr_43313_43390 = state_43283__$1;
(statearr_43313_43390[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (36))){
var state_43283__$1 = state_43283;
var statearr_43314_43391 = state_43283__$1;
(statearr_43314_43391[(2)] = false);

(statearr_43314_43391[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (41))){
var inst_43258 = (state_43283[(20)]);
var inst_43262 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_43263 = cljs.core.map.call(null,inst_43262,inst_43258);
var inst_43264 = cljs.core.pr_str.call(null,inst_43263);
var inst_43265 = ["figwheel-no-load meta-data: ",inst_43264].join('');
var inst_43266 = figwheel.client.utils.log.call(null,inst_43265);
var state_43283__$1 = state_43283;
var statearr_43315_43392 = state_43283__$1;
(statearr_43315_43392[(2)] = inst_43266);

(statearr_43315_43392[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (43))){
var inst_43259 = (state_43283[(21)]);
var inst_43269 = (state_43283[(2)]);
var inst_43270 = cljs.core.not_empty.call(null,inst_43259);
var state_43283__$1 = (function (){var statearr_43316 = state_43283;
(statearr_43316[(27)] = inst_43269);

return statearr_43316;
})();
if(cljs.core.truth_(inst_43270)){
var statearr_43317_43393 = state_43283__$1;
(statearr_43317_43393[(1)] = (44));

} else {
var statearr_43318_43394 = state_43283__$1;
(statearr_43318_43394[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (29))){
var inst_43199 = (state_43283[(23)]);
var inst_43236 = (state_43283[(16)]);
var inst_43204 = (state_43283[(24)]);
var inst_43200 = (state_43283[(25)]);
var inst_43202 = (state_43283[(26)]);
var inst_43196 = (state_43283[(19)]);
var inst_43232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_43235 = (function (){var all_files = inst_43196;
var res_SINGLEQUOTE_ = inst_43199;
var res = inst_43200;
var files_not_loaded = inst_43202;
var dependencies_that_loaded = inst_43204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43199,inst_43236,inst_43204,inst_43200,inst_43202,inst_43196,inst_43232,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43234){
var map__43319 = p__43234;
var map__43319__$1 = (((((!((map__43319 == null))))?(((((map__43319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43319):map__43319);
var namespace = cljs.core.get.call(null,map__43319__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43199,inst_43236,inst_43204,inst_43200,inst_43202,inst_43196,inst_43232,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43236__$1 = cljs.core.group_by.call(null,inst_43235,inst_43202);
var inst_43238 = (inst_43236__$1 == null);
var inst_43239 = cljs.core.not.call(null,inst_43238);
var state_43283__$1 = (function (){var statearr_43321 = state_43283;
(statearr_43321[(28)] = inst_43232);

(statearr_43321[(16)] = inst_43236__$1);

return statearr_43321;
})();
if(inst_43239){
var statearr_43322_43395 = state_43283__$1;
(statearr_43322_43395[(1)] = (32));

} else {
var statearr_43323_43396 = state_43283__$1;
(statearr_43323_43396[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (44))){
var inst_43259 = (state_43283[(21)]);
var inst_43272 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_43259);
var inst_43273 = cljs.core.pr_str.call(null,inst_43272);
var inst_43274 = ["not required: ",inst_43273].join('');
var inst_43275 = figwheel.client.utils.log.call(null,inst_43274);
var state_43283__$1 = state_43283;
var statearr_43324_43397 = state_43283__$1;
(statearr_43324_43397[(2)] = inst_43275);

(statearr_43324_43397[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (6))){
var inst_43177 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43325_43398 = state_43283__$1;
(statearr_43325_43398[(2)] = inst_43177);

(statearr_43325_43398[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (28))){
var inst_43202 = (state_43283[(26)]);
var inst_43229 = (state_43283[(2)]);
var inst_43230 = cljs.core.not_empty.call(null,inst_43202);
var state_43283__$1 = (function (){var statearr_43326 = state_43283;
(statearr_43326[(29)] = inst_43229);

return statearr_43326;
})();
if(cljs.core.truth_(inst_43230)){
var statearr_43327_43399 = state_43283__$1;
(statearr_43327_43399[(1)] = (29));

} else {
var statearr_43328_43400 = state_43283__$1;
(statearr_43328_43400[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (25))){
var inst_43200 = (state_43283[(25)]);
var inst_43216 = (state_43283[(2)]);
var inst_43217 = cljs.core.not_empty.call(null,inst_43200);
var state_43283__$1 = (function (){var statearr_43329 = state_43283;
(statearr_43329[(30)] = inst_43216);

return statearr_43329;
})();
if(cljs.core.truth_(inst_43217)){
var statearr_43330_43401 = state_43283__$1;
(statearr_43330_43401[(1)] = (26));

} else {
var statearr_43331_43402 = state_43283__$1;
(statearr_43331_43402[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (34))){
var inst_43252 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43252)){
var statearr_43332_43403 = state_43283__$1;
(statearr_43332_43403[(1)] = (38));

} else {
var statearr_43333_43404 = state_43283__$1;
(statearr_43333_43404[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (17))){
var state_43283__$1 = state_43283;
var statearr_43334_43405 = state_43283__$1;
(statearr_43334_43405[(2)] = recompile_dependents);

(statearr_43334_43405[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (3))){
var state_43283__$1 = state_43283;
var statearr_43335_43406 = state_43283__$1;
(statearr_43335_43406[(2)] = null);

(statearr_43335_43406[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (12))){
var inst_43173 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43336_43407 = state_43283__$1;
(statearr_43336_43407[(2)] = inst_43173);

(statearr_43336_43407[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (2))){
var inst_43135 = (state_43283[(13)]);
var inst_43142 = cljs.core.seq.call(null,inst_43135);
var inst_43143 = inst_43142;
var inst_43144 = null;
var inst_43145 = (0);
var inst_43146 = (0);
var state_43283__$1 = (function (){var statearr_43337 = state_43283;
(statearr_43337[(7)] = inst_43143);

(statearr_43337[(8)] = inst_43146);

(statearr_43337[(9)] = inst_43145);

(statearr_43337[(10)] = inst_43144);

return statearr_43337;
})();
var statearr_43338_43408 = state_43283__$1;
(statearr_43338_43408[(2)] = null);

(statearr_43338_43408[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (23))){
var inst_43199 = (state_43283[(23)]);
var inst_43204 = (state_43283[(24)]);
var inst_43200 = (state_43283[(25)]);
var inst_43202 = (state_43283[(26)]);
var inst_43196 = (state_43283[(19)]);
var inst_43207 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_43209 = (function (){var all_files = inst_43196;
var res_SINGLEQUOTE_ = inst_43199;
var res = inst_43200;
var files_not_loaded = inst_43202;
var dependencies_that_loaded = inst_43204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43199,inst_43204,inst_43200,inst_43202,inst_43196,inst_43207,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43208){
var map__43339 = p__43208;
var map__43339__$1 = (((((!((map__43339 == null))))?(((((map__43339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43339):map__43339);
var request_url = cljs.core.get.call(null,map__43339__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43199,inst_43204,inst_43200,inst_43202,inst_43196,inst_43207,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43210 = cljs.core.reverse.call(null,inst_43204);
var inst_43211 = cljs.core.map.call(null,inst_43209,inst_43210);
var inst_43212 = cljs.core.pr_str.call(null,inst_43211);
var inst_43213 = figwheel.client.utils.log.call(null,inst_43212);
var state_43283__$1 = (function (){var statearr_43341 = state_43283;
(statearr_43341[(31)] = inst_43207);

return statearr_43341;
})();
var statearr_43342_43409 = state_43283__$1;
(statearr_43342_43409[(2)] = inst_43213);

(statearr_43342_43409[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (35))){
var state_43283__$1 = state_43283;
var statearr_43343_43410 = state_43283__$1;
(statearr_43343_43410[(2)] = true);

(statearr_43343_43410[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (19))){
var inst_43186 = (state_43283[(12)]);
var inst_43192 = figwheel.client.file_reloading.expand_files.call(null,inst_43186);
var state_43283__$1 = state_43283;
var statearr_43344_43411 = state_43283__$1;
(statearr_43344_43411[(2)] = inst_43192);

(statearr_43344_43411[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (11))){
var state_43283__$1 = state_43283;
var statearr_43345_43412 = state_43283__$1;
(statearr_43345_43412[(2)] = null);

(statearr_43345_43412[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (9))){
var inst_43175 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43346_43413 = state_43283__$1;
(statearr_43346_43413[(2)] = inst_43175);

(statearr_43346_43413[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (5))){
var inst_43146 = (state_43283[(8)]);
var inst_43145 = (state_43283[(9)]);
var inst_43148 = (inst_43146 < inst_43145);
var inst_43149 = inst_43148;
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43149)){
var statearr_43347_43414 = state_43283__$1;
(statearr_43347_43414[(1)] = (7));

} else {
var statearr_43348_43415 = state_43283__$1;
(statearr_43348_43415[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (14))){
var inst_43156 = (state_43283[(22)]);
var inst_43165 = cljs.core.first.call(null,inst_43156);
var inst_43166 = figwheel.client.file_reloading.eval_body.call(null,inst_43165,opts);
var inst_43167 = cljs.core.next.call(null,inst_43156);
var inst_43143 = inst_43167;
var inst_43144 = null;
var inst_43145 = (0);
var inst_43146 = (0);
var state_43283__$1 = (function (){var statearr_43349 = state_43283;
(statearr_43349[(7)] = inst_43143);

(statearr_43349[(32)] = inst_43166);

(statearr_43349[(8)] = inst_43146);

(statearr_43349[(9)] = inst_43145);

(statearr_43349[(10)] = inst_43144);

return statearr_43349;
})();
var statearr_43350_43416 = state_43283__$1;
(statearr_43350_43416[(2)] = null);

(statearr_43350_43416[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (45))){
var state_43283__$1 = state_43283;
var statearr_43351_43417 = state_43283__$1;
(statearr_43351_43417[(2)] = null);

(statearr_43351_43417[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (26))){
var inst_43199 = (state_43283[(23)]);
var inst_43204 = (state_43283[(24)]);
var inst_43200 = (state_43283[(25)]);
var inst_43202 = (state_43283[(26)]);
var inst_43196 = (state_43283[(19)]);
var inst_43219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_43221 = (function (){var all_files = inst_43196;
var res_SINGLEQUOTE_ = inst_43199;
var res = inst_43200;
var files_not_loaded = inst_43202;
var dependencies_that_loaded = inst_43204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43199,inst_43204,inst_43200,inst_43202,inst_43196,inst_43219,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__43220){
var map__43352 = p__43220;
var map__43352__$1 = (((((!((map__43352 == null))))?(((((map__43352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43352):map__43352);
var namespace = cljs.core.get.call(null,map__43352__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__43352__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43199,inst_43204,inst_43200,inst_43202,inst_43196,inst_43219,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43222 = cljs.core.map.call(null,inst_43221,inst_43200);
var inst_43223 = cljs.core.pr_str.call(null,inst_43222);
var inst_43224 = figwheel.client.utils.log.call(null,inst_43223);
var inst_43225 = (function (){var all_files = inst_43196;
var res_SINGLEQUOTE_ = inst_43199;
var res = inst_43200;
var files_not_loaded = inst_43202;
var dependencies_that_loaded = inst_43204;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43199,inst_43204,inst_43200,inst_43202,inst_43196,inst_43219,inst_43221,inst_43222,inst_43223,inst_43224,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_43199,inst_43204,inst_43200,inst_43202,inst_43196,inst_43219,inst_43221,inst_43222,inst_43223,inst_43224,state_val_43284,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_43226 = setTimeout(inst_43225,(10));
var state_43283__$1 = (function (){var statearr_43354 = state_43283;
(statearr_43354[(33)] = inst_43219);

(statearr_43354[(34)] = inst_43224);

return statearr_43354;
})();
var statearr_43355_43418 = state_43283__$1;
(statearr_43355_43418[(2)] = inst_43226);

(statearr_43355_43418[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (16))){
var state_43283__$1 = state_43283;
var statearr_43356_43419 = state_43283__$1;
(statearr_43356_43419[(2)] = reload_dependents);

(statearr_43356_43419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (38))){
var inst_43236 = (state_43283[(16)]);
var inst_43254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_43236);
var state_43283__$1 = state_43283;
var statearr_43357_43420 = state_43283__$1;
(statearr_43357_43420[(2)] = inst_43254);

(statearr_43357_43420[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (30))){
var state_43283__$1 = state_43283;
var statearr_43358_43421 = state_43283__$1;
(statearr_43358_43421[(2)] = null);

(statearr_43358_43421[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (10))){
var inst_43156 = (state_43283[(22)]);
var inst_43158 = cljs.core.chunked_seq_QMARK_.call(null,inst_43156);
var state_43283__$1 = state_43283;
if(inst_43158){
var statearr_43359_43422 = state_43283__$1;
(statearr_43359_43422[(1)] = (13));

} else {
var statearr_43360_43423 = state_43283__$1;
(statearr_43360_43423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (18))){
var inst_43190 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
if(cljs.core.truth_(inst_43190)){
var statearr_43361_43424 = state_43283__$1;
(statearr_43361_43424[(1)] = (19));

} else {
var statearr_43362_43425 = state_43283__$1;
(statearr_43362_43425[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (42))){
var state_43283__$1 = state_43283;
var statearr_43363_43426 = state_43283__$1;
(statearr_43363_43426[(2)] = null);

(statearr_43363_43426[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (37))){
var inst_43249 = (state_43283[(2)]);
var state_43283__$1 = state_43283;
var statearr_43364_43427 = state_43283__$1;
(statearr_43364_43427[(2)] = inst_43249);

(statearr_43364_43427[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43284 === (8))){
var inst_43143 = (state_43283[(7)]);
var inst_43156 = (state_43283[(22)]);
var inst_43156__$1 = cljs.core.seq.call(null,inst_43143);
var state_43283__$1 = (function (){var statearr_43365 = state_43283;
(statearr_43365[(22)] = inst_43156__$1);

return statearr_43365;
})();
if(inst_43156__$1){
var statearr_43366_43428 = state_43283__$1;
(statearr_43366_43428[(1)] = (10));

} else {
var statearr_43367_43429 = state_43283__$1;
(statearr_43367_43429[(1)] = (11));

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
});})(c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32449__auto__,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto____0 = (function (){
var statearr_43368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43368[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto__);

(statearr_43368[(1)] = (1));

return statearr_43368;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto____1 = (function (state_43283){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_43283);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e43369){if((e43369 instanceof Object)){
var ex__32453__auto__ = e43369;
var statearr_43370_43430 = state_43283;
(statearr_43370_43430[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43283);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43369;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43431 = state_43283;
state_43283 = G__43431;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto__ = function(state_43283){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto____1.call(this,state_43283);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32546__auto__ = (function (){var statearr_43371 = f__32545__auto__.call(null);
(statearr_43371[(6)] = c__32544__auto__);

return statearr_43371;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__,map__43128,map__43128__$1,opts,before_jsload,on_jsload,reload_dependents,map__43129,map__43129__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32544__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__43434,link){
var map__43435 = p__43434;
var map__43435__$1 = (((((!((map__43435 == null))))?(((((map__43435.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43435.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43435):map__43435);
var file = cljs.core.get.call(null,map__43435__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5735__auto__ = link.href;
if(cljs.core.truth_(temp__5735__auto__)){
var link_href = temp__5735__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5735__auto__,map__43435,map__43435__$1,file){
return (function (p1__43432_SHARP_,p2__43433_SHARP_){
if(cljs.core._EQ_.call(null,p1__43432_SHARP_,p2__43433_SHARP_)){
return p1__43432_SHARP_;
} else {
return false;
}
});})(link_href,temp__5735__auto__,map__43435,map__43435__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5735__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__43438){
var map__43439 = p__43438;
var map__43439__$1 = (((((!((map__43439 == null))))?(((((map__43439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43439):map__43439);
var match_length = cljs.core.get.call(null,map__43439__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__43439__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__43437_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__43437_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5735__auto__)){
var res = temp__5735__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__43441_SHARP_,p2__43442_SHARP_){
return cljs.core.assoc.call(null,p1__43441_SHARP_,cljs.core.get.call(null,p2__43442_SHARP_,key),p2__43442_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if((typeof figwheel !== 'undefined') && (typeof figwheel.client !== 'undefined') && (typeof figwheel.client.file_reloading !== 'undefined') && (typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined')){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5733__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5733__auto__)){
var link = temp__5733__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5733__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5733__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_43443 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_43443);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_43443);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__43444,p__43445){
var map__43446 = p__43444;
var map__43446__$1 = (((((!((map__43446 == null))))?(((((map__43446.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43446.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43446):map__43446);
var on_cssload = cljs.core.get.call(null,map__43446__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__43447 = p__43445;
var map__43447__$1 = (((((!((map__43447 == null))))?(((((map__43447.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43447.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43447):map__43447);
var files_msg = map__43447__$1;
var files = cljs.core.get.call(null,map__43447__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(figwheel.client.utils.html_env_QMARK_.call(null)){
var temp__5735__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5735__auto__)){
var f_datas = temp__5735__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1561299757396
