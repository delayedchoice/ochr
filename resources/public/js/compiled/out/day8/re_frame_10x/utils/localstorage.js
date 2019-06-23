// Compiled by ClojureScript 1.10.520 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__41905 = arguments.length;
switch (G__41905) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__41907 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__41908 = null;
var count__41909 = (0);
var i__41910 = (0);
while(true){
if((i__41910 < count__41909)){
var k = cljs.core._nth.call(null,chunk__41908,i__41910);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__41911 = seq__41907;
var G__41912 = chunk__41908;
var G__41913 = count__41909;
var G__41914 = (i__41910 + (1));
seq__41907 = G__41911;
chunk__41908 = G__41912;
count__41909 = G__41913;
i__41910 = G__41914;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq.call(null,seq__41907);
if(temp__5735__auto__){
var seq__41907__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41907__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__41907__$1);
var G__41915 = cljs.core.chunk_rest.call(null,seq__41907__$1);
var G__41916 = c__4550__auto__;
var G__41917 = cljs.core.count.call(null,c__4550__auto__);
var G__41918 = (0);
seq__41907 = G__41915;
chunk__41908 = G__41916;
count__41909 = G__41917;
i__41910 = G__41918;
continue;
} else {
var k = cljs.core.first.call(null,seq__41907__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__41919 = cljs.core.next.call(null,seq__41907__$1);
var G__41920 = null;
var G__41921 = (0);
var G__41922 = (0);
seq__41907 = G__41919;
chunk__41908 = G__41920;
count__41909 = G__41921;
i__41910 = G__41922;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1561299755682
