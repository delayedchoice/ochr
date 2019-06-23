// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__32604 = arguments.length;
switch (G__32604) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32605 = (function (f,blockable,meta32606){
this.f = f;
this.blockable = blockable;
this.meta32606 = meta32606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32607,meta32606__$1){
var self__ = this;
var _32607__$1 = this;
return (new cljs.core.async.t_cljs$core$async32605(self__.f,self__.blockable,meta32606__$1));
});

cljs.core.async.t_cljs$core$async32605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32607){
var self__ = this;
var _32607__$1 = this;
return self__.meta32606;
});

cljs.core.async.t_cljs$core$async32605.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32605.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async32605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32605.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta32606","meta32606",-1688842212,null)], null);
});

cljs.core.async.t_cljs$core$async32605.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32605.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32605";

cljs.core.async.t_cljs$core$async32605.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32605");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32605.
 */
cljs.core.async.__GT_t_cljs$core$async32605 = (function cljs$core$async$__GT_t_cljs$core$async32605(f__$1,blockable__$1,meta32606){
return (new cljs.core.async.t_cljs$core$async32605(f__$1,blockable__$1,meta32606));
});

}

return (new cljs.core.async.t_cljs$core$async32605(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__32611 = arguments.length;
switch (G__32611) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__32614 = arguments.length;
switch (G__32614) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__32617 = arguments.length;
switch (G__32617) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32619 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32619);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32619,ret){
return (function (){
return fn1.call(null,val_32619);
});})(val_32619,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__32621 = arguments.length;
switch (G__32621) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5733__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5733__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4607__auto___32623 = n;
var x_32624 = (0);
while(true){
if((x_32624 < n__4607__auto___32623)){
(a[x_32624] = (0));

var G__32625 = (x_32624 + (1));
x_32624 = G__32625;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__32626 = (i + (1));
i = G__32626;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32627 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32627 = (function (flag,meta32628){
this.flag = flag;
this.meta32628 = meta32628;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32629,meta32628__$1){
var self__ = this;
var _32629__$1 = this;
return (new cljs.core.async.t_cljs$core$async32627(self__.flag,meta32628__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32629){
var self__ = this;
var _32629__$1 = this;
return self__.meta32628;
});})(flag))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32627.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32627.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32628","meta32628",-456206605,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32627.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32627.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32627";

cljs.core.async.t_cljs$core$async32627.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32627");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32627.
 */
cljs.core.async.__GT_t_cljs$core$async32627 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32627(flag__$1,meta32628){
return (new cljs.core.async.t_cljs$core$async32627(flag__$1,meta32628));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32627(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async32630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32630 = (function (flag,cb,meta32631){
this.flag = flag;
this.cb = cb;
this.meta32631 = meta32631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32632,meta32631__$1){
var self__ = this;
var _32632__$1 = this;
return (new cljs.core.async.t_cljs$core$async32630(self__.flag,self__.cb,meta32631__$1));
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32632){
var self__ = this;
var _32632__$1 = this;
return self__.meta32631;
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32630.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32631","meta32631",1542743918,null)], null);
});

cljs.core.async.t_cljs$core$async32630.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32630.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32630";

cljs.core.async.t_cljs$core$async32630.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async32630");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async32630.
 */
cljs.core.async.__GT_t_cljs$core$async32630 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32630(flag__$1,cb__$1,meta32631){
return (new cljs.core.async.t_cljs$core$async32630(flag__$1,cb__$1,meta32631));
});

}

return (new cljs.core.async.t_cljs$core$async32630(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32633_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32633_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32634_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32634_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4131__auto__ = wport;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32635 = (i + (1));
i = G__32635;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4131__auto__ = ret;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4120__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4120__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4120__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___32641 = arguments.length;
var i__4731__auto___32642 = (0);
while(true){
if((i__4731__auto___32642 < len__4730__auto___32641)){
args__4736__auto__.push((arguments[i__4731__auto___32642]));

var G__32643 = (i__4731__auto___32642 + (1));
i__4731__auto___32642 = G__32643;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((1) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4737__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32638){
var map__32639 = p__32638;
var map__32639__$1 = (((((!((map__32639 == null))))?(((((map__32639.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32639.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32639):map__32639);
var opts = map__32639__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32636){
var G__32637 = cljs.core.first.call(null,seq32636);
var seq32636__$1 = cljs.core.next.call(null,seq32636);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__32637,seq32636__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__32645 = arguments.length;
switch (G__32645) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__32544__auto___32691 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___32691){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___32691){
return (function (state_32669){
var state_val_32670 = (state_32669[(1)]);
if((state_val_32670 === (7))){
var inst_32665 = (state_32669[(2)]);
var state_32669__$1 = state_32669;
var statearr_32671_32692 = state_32669__$1;
(statearr_32671_32692[(2)] = inst_32665);

(statearr_32671_32692[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (1))){
var state_32669__$1 = state_32669;
var statearr_32672_32693 = state_32669__$1;
(statearr_32672_32693[(2)] = null);

(statearr_32672_32693[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (4))){
var inst_32648 = (state_32669[(7)]);
var inst_32648__$1 = (state_32669[(2)]);
var inst_32649 = (inst_32648__$1 == null);
var state_32669__$1 = (function (){var statearr_32673 = state_32669;
(statearr_32673[(7)] = inst_32648__$1);

return statearr_32673;
})();
if(cljs.core.truth_(inst_32649)){
var statearr_32674_32694 = state_32669__$1;
(statearr_32674_32694[(1)] = (5));

} else {
var statearr_32675_32695 = state_32669__$1;
(statearr_32675_32695[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (13))){
var state_32669__$1 = state_32669;
var statearr_32676_32696 = state_32669__$1;
(statearr_32676_32696[(2)] = null);

(statearr_32676_32696[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (6))){
var inst_32648 = (state_32669[(7)]);
var state_32669__$1 = state_32669;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32669__$1,(11),to,inst_32648);
} else {
if((state_val_32670 === (3))){
var inst_32667 = (state_32669[(2)]);
var state_32669__$1 = state_32669;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32669__$1,inst_32667);
} else {
if((state_val_32670 === (12))){
var state_32669__$1 = state_32669;
var statearr_32677_32697 = state_32669__$1;
(statearr_32677_32697[(2)] = null);

(statearr_32677_32697[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (2))){
var state_32669__$1 = state_32669;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32669__$1,(4),from);
} else {
if((state_val_32670 === (11))){
var inst_32658 = (state_32669[(2)]);
var state_32669__$1 = state_32669;
if(cljs.core.truth_(inst_32658)){
var statearr_32678_32698 = state_32669__$1;
(statearr_32678_32698[(1)] = (12));

} else {
var statearr_32679_32699 = state_32669__$1;
(statearr_32679_32699[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (9))){
var state_32669__$1 = state_32669;
var statearr_32680_32700 = state_32669__$1;
(statearr_32680_32700[(2)] = null);

(statearr_32680_32700[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (5))){
var state_32669__$1 = state_32669;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32681_32701 = state_32669__$1;
(statearr_32681_32701[(1)] = (8));

} else {
var statearr_32682_32702 = state_32669__$1;
(statearr_32682_32702[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (14))){
var inst_32663 = (state_32669[(2)]);
var state_32669__$1 = state_32669;
var statearr_32683_32703 = state_32669__$1;
(statearr_32683_32703[(2)] = inst_32663);

(statearr_32683_32703[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (10))){
var inst_32655 = (state_32669[(2)]);
var state_32669__$1 = state_32669;
var statearr_32684_32704 = state_32669__$1;
(statearr_32684_32704[(2)] = inst_32655);

(statearr_32684_32704[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32670 === (8))){
var inst_32652 = cljs.core.async.close_BANG_.call(null,to);
var state_32669__$1 = state_32669;
var statearr_32685_32705 = state_32669__$1;
(statearr_32685_32705[(2)] = inst_32652);

(statearr_32685_32705[(1)] = (10));


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
});})(c__32544__auto___32691))
;
return ((function (switch__32449__auto__,c__32544__auto___32691){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_32686 = [null,null,null,null,null,null,null,null];
(statearr_32686[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_32686[(1)] = (1));

return statearr_32686;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_32669){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_32669);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e32687){if((e32687 instanceof Object)){
var ex__32453__auto__ = e32687;
var statearr_32688_32706 = state_32669;
(statearr_32688_32706[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32669);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32707 = state_32669;
state_32669 = G__32707;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_32669){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_32669);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___32691))
})();
var state__32546__auto__ = (function (){var statearr_32689 = f__32545__auto__.call(null);
(statearr_32689[(6)] = c__32544__auto___32691);

return statearr_32689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___32691))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__32708){
var vec__32709 = p__32708;
var v = cljs.core.nth.call(null,vec__32709,(0),null);
var p = cljs.core.nth.call(null,vec__32709,(1),null);
var job = vec__32709;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__32544__auto___32880 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___32880,res,vec__32709,v,p,job,jobs,results){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___32880,res,vec__32709,v,p,job,jobs,results){
return (function (state_32716){
var state_val_32717 = (state_32716[(1)]);
if((state_val_32717 === (1))){
var state_32716__$1 = state_32716;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32716__$1,(2),res,v);
} else {
if((state_val_32717 === (2))){
var inst_32713 = (state_32716[(2)]);
var inst_32714 = cljs.core.async.close_BANG_.call(null,res);
var state_32716__$1 = (function (){var statearr_32718 = state_32716;
(statearr_32718[(7)] = inst_32713);

return statearr_32718;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32716__$1,inst_32714);
} else {
return null;
}
}
});})(c__32544__auto___32880,res,vec__32709,v,p,job,jobs,results))
;
return ((function (switch__32449__auto__,c__32544__auto___32880,res,vec__32709,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0 = (function (){
var statearr_32719 = [null,null,null,null,null,null,null,null];
(statearr_32719[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__);

(statearr_32719[(1)] = (1));

return statearr_32719;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1 = (function (state_32716){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_32716);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e32720){if((e32720 instanceof Object)){
var ex__32453__auto__ = e32720;
var statearr_32721_32881 = state_32716;
(statearr_32721_32881[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32716);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32720;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32882 = state_32716;
state_32716 = G__32882;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = function(state_32716){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1.call(this,state_32716);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___32880,res,vec__32709,v,p,job,jobs,results))
})();
var state__32546__auto__ = (function (){var statearr_32722 = f__32545__auto__.call(null);
(statearr_32722[(6)] = c__32544__auto___32880);

return statearr_32722;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___32880,res,vec__32709,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32723){
var vec__32724 = p__32723;
var v = cljs.core.nth.call(null,vec__32724,(0),null);
var p = cljs.core.nth.call(null,vec__32724,(1),null);
var job = vec__32724;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4607__auto___32883 = n;
var __32884 = (0);
while(true){
if((__32884 < n__4607__auto___32883)){
var G__32727_32885 = type;
var G__32727_32886__$1 = (((G__32727_32885 instanceof cljs.core.Keyword))?G__32727_32885.fqn:null);
switch (G__32727_32886__$1) {
case "compute":
var c__32544__auto___32888 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32884,c__32544__auto___32888,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (__32884,c__32544__auto___32888,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async){
return (function (state_32740){
var state_val_32741 = (state_32740[(1)]);
if((state_val_32741 === (1))){
var state_32740__$1 = state_32740;
var statearr_32742_32889 = state_32740__$1;
(statearr_32742_32889[(2)] = null);

(statearr_32742_32889[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (2))){
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32740__$1,(4),jobs);
} else {
if((state_val_32741 === (3))){
var inst_32738 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32740__$1,inst_32738);
} else {
if((state_val_32741 === (4))){
var inst_32730 = (state_32740[(2)]);
var inst_32731 = process.call(null,inst_32730);
var state_32740__$1 = state_32740;
if(cljs.core.truth_(inst_32731)){
var statearr_32743_32890 = state_32740__$1;
(statearr_32743_32890[(1)] = (5));

} else {
var statearr_32744_32891 = state_32740__$1;
(statearr_32744_32891[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (5))){
var state_32740__$1 = state_32740;
var statearr_32745_32892 = state_32740__$1;
(statearr_32745_32892[(2)] = null);

(statearr_32745_32892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (6))){
var state_32740__$1 = state_32740;
var statearr_32746_32893 = state_32740__$1;
(statearr_32746_32893[(2)] = null);

(statearr_32746_32893[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32741 === (7))){
var inst_32736 = (state_32740[(2)]);
var state_32740__$1 = state_32740;
var statearr_32747_32894 = state_32740__$1;
(statearr_32747_32894[(2)] = inst_32736);

(statearr_32747_32894[(1)] = (3));


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
});})(__32884,c__32544__auto___32888,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async))
;
return ((function (__32884,switch__32449__auto__,c__32544__auto___32888,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0 = (function (){
var statearr_32748 = [null,null,null,null,null,null,null];
(statearr_32748[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__);

(statearr_32748[(1)] = (1));

return statearr_32748;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1 = (function (state_32740){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_32740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e32749){if((e32749 instanceof Object)){
var ex__32453__auto__ = e32749;
var statearr_32750_32895 = state_32740;
(statearr_32750_32895[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32749;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32896 = state_32740;
state_32740 = G__32896;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = function(state_32740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1.call(this,state_32740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__;
})()
;})(__32884,switch__32449__auto__,c__32544__auto___32888,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async))
})();
var state__32546__auto__ = (function (){var statearr_32751 = f__32545__auto__.call(null);
(statearr_32751[(6)] = c__32544__auto___32888);

return statearr_32751;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(__32884,c__32544__auto___32888,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async))
);


break;
case "async":
var c__32544__auto___32897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32884,c__32544__auto___32897,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (__32884,c__32544__auto___32897,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async){
return (function (state_32764){
var state_val_32765 = (state_32764[(1)]);
if((state_val_32765 === (1))){
var state_32764__$1 = state_32764;
var statearr_32766_32898 = state_32764__$1;
(statearr_32766_32898[(2)] = null);

(statearr_32766_32898[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (2))){
var state_32764__$1 = state_32764;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32764__$1,(4),jobs);
} else {
if((state_val_32765 === (3))){
var inst_32762 = (state_32764[(2)]);
var state_32764__$1 = state_32764;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32764__$1,inst_32762);
} else {
if((state_val_32765 === (4))){
var inst_32754 = (state_32764[(2)]);
var inst_32755 = async.call(null,inst_32754);
var state_32764__$1 = state_32764;
if(cljs.core.truth_(inst_32755)){
var statearr_32767_32899 = state_32764__$1;
(statearr_32767_32899[(1)] = (5));

} else {
var statearr_32768_32900 = state_32764__$1;
(statearr_32768_32900[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (5))){
var state_32764__$1 = state_32764;
var statearr_32769_32901 = state_32764__$1;
(statearr_32769_32901[(2)] = null);

(statearr_32769_32901[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (6))){
var state_32764__$1 = state_32764;
var statearr_32770_32902 = state_32764__$1;
(statearr_32770_32902[(2)] = null);

(statearr_32770_32902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32765 === (7))){
var inst_32760 = (state_32764[(2)]);
var state_32764__$1 = state_32764;
var statearr_32771_32903 = state_32764__$1;
(statearr_32771_32903[(2)] = inst_32760);

(statearr_32771_32903[(1)] = (3));


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
});})(__32884,c__32544__auto___32897,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async))
;
return ((function (__32884,switch__32449__auto__,c__32544__auto___32897,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0 = (function (){
var statearr_32772 = [null,null,null,null,null,null,null];
(statearr_32772[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__);

(statearr_32772[(1)] = (1));

return statearr_32772;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1 = (function (state_32764){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_32764);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e32773){if((e32773 instanceof Object)){
var ex__32453__auto__ = e32773;
var statearr_32774_32904 = state_32764;
(statearr_32774_32904[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32764);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32905 = state_32764;
state_32764 = G__32905;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = function(state_32764){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1.call(this,state_32764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__;
})()
;})(__32884,switch__32449__auto__,c__32544__auto___32897,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async))
})();
var state__32546__auto__ = (function (){var statearr_32775 = f__32545__auto__.call(null);
(statearr_32775[(6)] = c__32544__auto___32897);

return statearr_32775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(__32884,c__32544__auto___32897,G__32727_32885,G__32727_32886__$1,n__4607__auto___32883,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__32727_32886__$1)].join('')));

}

var G__32906 = (__32884 + (1));
__32884 = G__32906;
continue;
} else {
}
break;
}

var c__32544__auto___32907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___32907,jobs,results,process,async){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___32907,jobs,results,process,async){
return (function (state_32797){
var state_val_32798 = (state_32797[(1)]);
if((state_val_32798 === (7))){
var inst_32793 = (state_32797[(2)]);
var state_32797__$1 = state_32797;
var statearr_32799_32908 = state_32797__$1;
(statearr_32799_32908[(2)] = inst_32793);

(statearr_32799_32908[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (1))){
var state_32797__$1 = state_32797;
var statearr_32800_32909 = state_32797__$1;
(statearr_32800_32909[(2)] = null);

(statearr_32800_32909[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (4))){
var inst_32778 = (state_32797[(7)]);
var inst_32778__$1 = (state_32797[(2)]);
var inst_32779 = (inst_32778__$1 == null);
var state_32797__$1 = (function (){var statearr_32801 = state_32797;
(statearr_32801[(7)] = inst_32778__$1);

return statearr_32801;
})();
if(cljs.core.truth_(inst_32779)){
var statearr_32802_32910 = state_32797__$1;
(statearr_32802_32910[(1)] = (5));

} else {
var statearr_32803_32911 = state_32797__$1;
(statearr_32803_32911[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (6))){
var inst_32783 = (state_32797[(8)]);
var inst_32778 = (state_32797[(7)]);
var inst_32783__$1 = cljs.core.async.chan.call(null,(1));
var inst_32784 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32785 = [inst_32778,inst_32783__$1];
var inst_32786 = (new cljs.core.PersistentVector(null,2,(5),inst_32784,inst_32785,null));
var state_32797__$1 = (function (){var statearr_32804 = state_32797;
(statearr_32804[(8)] = inst_32783__$1);

return statearr_32804;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32797__$1,(8),jobs,inst_32786);
} else {
if((state_val_32798 === (3))){
var inst_32795 = (state_32797[(2)]);
var state_32797__$1 = state_32797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32797__$1,inst_32795);
} else {
if((state_val_32798 === (2))){
var state_32797__$1 = state_32797;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32797__$1,(4),from);
} else {
if((state_val_32798 === (9))){
var inst_32790 = (state_32797[(2)]);
var state_32797__$1 = (function (){var statearr_32805 = state_32797;
(statearr_32805[(9)] = inst_32790);

return statearr_32805;
})();
var statearr_32806_32912 = state_32797__$1;
(statearr_32806_32912[(2)] = null);

(statearr_32806_32912[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (5))){
var inst_32781 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32797__$1 = state_32797;
var statearr_32807_32913 = state_32797__$1;
(statearr_32807_32913[(2)] = inst_32781);

(statearr_32807_32913[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32798 === (8))){
var inst_32783 = (state_32797[(8)]);
var inst_32788 = (state_32797[(2)]);
var state_32797__$1 = (function (){var statearr_32808 = state_32797;
(statearr_32808[(10)] = inst_32788);

return statearr_32808;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32797__$1,(9),results,inst_32783);
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
});})(c__32544__auto___32907,jobs,results,process,async))
;
return ((function (switch__32449__auto__,c__32544__auto___32907,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0 = (function (){
var statearr_32809 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__);

(statearr_32809[(1)] = (1));

return statearr_32809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1 = (function (state_32797){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_32797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e32810){if((e32810 instanceof Object)){
var ex__32453__auto__ = e32810;
var statearr_32811_32914 = state_32797;
(statearr_32811_32914[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32915 = state_32797;
state_32797 = G__32915;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = function(state_32797){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1.call(this,state_32797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___32907,jobs,results,process,async))
})();
var state__32546__auto__ = (function (){var statearr_32812 = f__32545__auto__.call(null);
(statearr_32812[(6)] = c__32544__auto___32907);

return statearr_32812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___32907,jobs,results,process,async))
);


var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__,jobs,results,process,async){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__,jobs,results,process,async){
return (function (state_32850){
var state_val_32851 = (state_32850[(1)]);
if((state_val_32851 === (7))){
var inst_32846 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
var statearr_32852_32916 = state_32850__$1;
(statearr_32852_32916[(2)] = inst_32846);

(statearr_32852_32916[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (20))){
var state_32850__$1 = state_32850;
var statearr_32853_32917 = state_32850__$1;
(statearr_32853_32917[(2)] = null);

(statearr_32853_32917[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (1))){
var state_32850__$1 = state_32850;
var statearr_32854_32918 = state_32850__$1;
(statearr_32854_32918[(2)] = null);

(statearr_32854_32918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (4))){
var inst_32815 = (state_32850[(7)]);
var inst_32815__$1 = (state_32850[(2)]);
var inst_32816 = (inst_32815__$1 == null);
var state_32850__$1 = (function (){var statearr_32855 = state_32850;
(statearr_32855[(7)] = inst_32815__$1);

return statearr_32855;
})();
if(cljs.core.truth_(inst_32816)){
var statearr_32856_32919 = state_32850__$1;
(statearr_32856_32919[(1)] = (5));

} else {
var statearr_32857_32920 = state_32850__$1;
(statearr_32857_32920[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (15))){
var inst_32828 = (state_32850[(8)]);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32850__$1,(18),to,inst_32828);
} else {
if((state_val_32851 === (21))){
var inst_32841 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
var statearr_32858_32921 = state_32850__$1;
(statearr_32858_32921[(2)] = inst_32841);

(statearr_32858_32921[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (13))){
var inst_32843 = (state_32850[(2)]);
var state_32850__$1 = (function (){var statearr_32859 = state_32850;
(statearr_32859[(9)] = inst_32843);

return statearr_32859;
})();
var statearr_32860_32922 = state_32850__$1;
(statearr_32860_32922[(2)] = null);

(statearr_32860_32922[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (6))){
var inst_32815 = (state_32850[(7)]);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32850__$1,(11),inst_32815);
} else {
if((state_val_32851 === (17))){
var inst_32836 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
if(cljs.core.truth_(inst_32836)){
var statearr_32861_32923 = state_32850__$1;
(statearr_32861_32923[(1)] = (19));

} else {
var statearr_32862_32924 = state_32850__$1;
(statearr_32862_32924[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (3))){
var inst_32848 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32850__$1,inst_32848);
} else {
if((state_val_32851 === (12))){
var inst_32825 = (state_32850[(10)]);
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32850__$1,(14),inst_32825);
} else {
if((state_val_32851 === (2))){
var state_32850__$1 = state_32850;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32850__$1,(4),results);
} else {
if((state_val_32851 === (19))){
var state_32850__$1 = state_32850;
var statearr_32863_32925 = state_32850__$1;
(statearr_32863_32925[(2)] = null);

(statearr_32863_32925[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (11))){
var inst_32825 = (state_32850[(2)]);
var state_32850__$1 = (function (){var statearr_32864 = state_32850;
(statearr_32864[(10)] = inst_32825);

return statearr_32864;
})();
var statearr_32865_32926 = state_32850__$1;
(statearr_32865_32926[(2)] = null);

(statearr_32865_32926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (9))){
var state_32850__$1 = state_32850;
var statearr_32866_32927 = state_32850__$1;
(statearr_32866_32927[(2)] = null);

(statearr_32866_32927[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (5))){
var state_32850__$1 = state_32850;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32867_32928 = state_32850__$1;
(statearr_32867_32928[(1)] = (8));

} else {
var statearr_32868_32929 = state_32850__$1;
(statearr_32868_32929[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (14))){
var inst_32830 = (state_32850[(11)]);
var inst_32828 = (state_32850[(8)]);
var inst_32828__$1 = (state_32850[(2)]);
var inst_32829 = (inst_32828__$1 == null);
var inst_32830__$1 = cljs.core.not.call(null,inst_32829);
var state_32850__$1 = (function (){var statearr_32869 = state_32850;
(statearr_32869[(11)] = inst_32830__$1);

(statearr_32869[(8)] = inst_32828__$1);

return statearr_32869;
})();
if(inst_32830__$1){
var statearr_32870_32930 = state_32850__$1;
(statearr_32870_32930[(1)] = (15));

} else {
var statearr_32871_32931 = state_32850__$1;
(statearr_32871_32931[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (16))){
var inst_32830 = (state_32850[(11)]);
var state_32850__$1 = state_32850;
var statearr_32872_32932 = state_32850__$1;
(statearr_32872_32932[(2)] = inst_32830);

(statearr_32872_32932[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (10))){
var inst_32822 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
var statearr_32873_32933 = state_32850__$1;
(statearr_32873_32933[(2)] = inst_32822);

(statearr_32873_32933[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (18))){
var inst_32833 = (state_32850[(2)]);
var state_32850__$1 = state_32850;
var statearr_32874_32934 = state_32850__$1;
(statearr_32874_32934[(2)] = inst_32833);

(statearr_32874_32934[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32851 === (8))){
var inst_32819 = cljs.core.async.close_BANG_.call(null,to);
var state_32850__$1 = state_32850;
var statearr_32875_32935 = state_32850__$1;
(statearr_32875_32935[(2)] = inst_32819);

(statearr_32875_32935[(1)] = (10));


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
});})(c__32544__auto__,jobs,results,process,async))
;
return ((function (switch__32449__auto__,c__32544__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0 = (function (){
var statearr_32876 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32876[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__);

(statearr_32876[(1)] = (1));

return statearr_32876;
});
var cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1 = (function (state_32850){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_32850);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e32877){if((e32877 instanceof Object)){
var ex__32453__auto__ = e32877;
var statearr_32878_32936 = state_32850;
(statearr_32878_32936[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32850);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32877;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32937 = state_32850;
state_32850 = G__32937;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__ = function(state_32850){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1.call(this,state_32850);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__32450__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__,jobs,results,process,async))
})();
var state__32546__auto__ = (function (){var statearr_32879 = f__32545__auto__.call(null);
(statearr_32879[(6)] = c__32544__auto__);

return statearr_32879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__,jobs,results,process,async))
);

return c__32544__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__32939 = arguments.length;
switch (G__32939) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__32942 = arguments.length;
switch (G__32942) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__32945 = arguments.length;
switch (G__32945) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__32544__auto___32994 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___32994,tc,fc){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___32994,tc,fc){
return (function (state_32971){
var state_val_32972 = (state_32971[(1)]);
if((state_val_32972 === (7))){
var inst_32967 = (state_32971[(2)]);
var state_32971__$1 = state_32971;
var statearr_32973_32995 = state_32971__$1;
(statearr_32973_32995[(2)] = inst_32967);

(statearr_32973_32995[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (1))){
var state_32971__$1 = state_32971;
var statearr_32974_32996 = state_32971__$1;
(statearr_32974_32996[(2)] = null);

(statearr_32974_32996[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (4))){
var inst_32948 = (state_32971[(7)]);
var inst_32948__$1 = (state_32971[(2)]);
var inst_32949 = (inst_32948__$1 == null);
var state_32971__$1 = (function (){var statearr_32975 = state_32971;
(statearr_32975[(7)] = inst_32948__$1);

return statearr_32975;
})();
if(cljs.core.truth_(inst_32949)){
var statearr_32976_32997 = state_32971__$1;
(statearr_32976_32997[(1)] = (5));

} else {
var statearr_32977_32998 = state_32971__$1;
(statearr_32977_32998[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (13))){
var state_32971__$1 = state_32971;
var statearr_32978_32999 = state_32971__$1;
(statearr_32978_32999[(2)] = null);

(statearr_32978_32999[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (6))){
var inst_32948 = (state_32971[(7)]);
var inst_32954 = p.call(null,inst_32948);
var state_32971__$1 = state_32971;
if(cljs.core.truth_(inst_32954)){
var statearr_32979_33000 = state_32971__$1;
(statearr_32979_33000[(1)] = (9));

} else {
var statearr_32980_33001 = state_32971__$1;
(statearr_32980_33001[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (3))){
var inst_32969 = (state_32971[(2)]);
var state_32971__$1 = state_32971;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32971__$1,inst_32969);
} else {
if((state_val_32972 === (12))){
var state_32971__$1 = state_32971;
var statearr_32981_33002 = state_32971__$1;
(statearr_32981_33002[(2)] = null);

(statearr_32981_33002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (2))){
var state_32971__$1 = state_32971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32971__$1,(4),ch);
} else {
if((state_val_32972 === (11))){
var inst_32948 = (state_32971[(7)]);
var inst_32958 = (state_32971[(2)]);
var state_32971__$1 = state_32971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32971__$1,(8),inst_32958,inst_32948);
} else {
if((state_val_32972 === (9))){
var state_32971__$1 = state_32971;
var statearr_32982_33003 = state_32971__$1;
(statearr_32982_33003[(2)] = tc);

(statearr_32982_33003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (5))){
var inst_32951 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32952 = cljs.core.async.close_BANG_.call(null,fc);
var state_32971__$1 = (function (){var statearr_32983 = state_32971;
(statearr_32983[(8)] = inst_32951);

return statearr_32983;
})();
var statearr_32984_33004 = state_32971__$1;
(statearr_32984_33004[(2)] = inst_32952);

(statearr_32984_33004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (14))){
var inst_32965 = (state_32971[(2)]);
var state_32971__$1 = state_32971;
var statearr_32985_33005 = state_32971__$1;
(statearr_32985_33005[(2)] = inst_32965);

(statearr_32985_33005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (10))){
var state_32971__$1 = state_32971;
var statearr_32986_33006 = state_32971__$1;
(statearr_32986_33006[(2)] = fc);

(statearr_32986_33006[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32972 === (8))){
var inst_32960 = (state_32971[(2)]);
var state_32971__$1 = state_32971;
if(cljs.core.truth_(inst_32960)){
var statearr_32987_33007 = state_32971__$1;
(statearr_32987_33007[(1)] = (12));

} else {
var statearr_32988_33008 = state_32971__$1;
(statearr_32988_33008[(1)] = (13));

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
});})(c__32544__auto___32994,tc,fc))
;
return ((function (switch__32449__auto__,c__32544__auto___32994,tc,fc){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_32989 = [null,null,null,null,null,null,null,null,null];
(statearr_32989[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_32989[(1)] = (1));

return statearr_32989;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_32971){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_32971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e32990){if((e32990 instanceof Object)){
var ex__32453__auto__ = e32990;
var statearr_32991_33009 = state_32971;
(statearr_32991_33009[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33010 = state_32971;
state_32971 = G__33010;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_32971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_32971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___32994,tc,fc))
})();
var state__32546__auto__ = (function (){var statearr_32992 = f__32545__auto__.call(null);
(statearr_32992[(6)] = c__32544__auto___32994);

return statearr_32992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___32994,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__){
return (function (state_33031){
var state_val_33032 = (state_33031[(1)]);
if((state_val_33032 === (7))){
var inst_33027 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33033_33051 = state_33031__$1;
(statearr_33033_33051[(2)] = inst_33027);

(statearr_33033_33051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (1))){
var inst_33011 = init;
var state_33031__$1 = (function (){var statearr_33034 = state_33031;
(statearr_33034[(7)] = inst_33011);

return statearr_33034;
})();
var statearr_33035_33052 = state_33031__$1;
(statearr_33035_33052[(2)] = null);

(statearr_33035_33052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (4))){
var inst_33014 = (state_33031[(8)]);
var inst_33014__$1 = (state_33031[(2)]);
var inst_33015 = (inst_33014__$1 == null);
var state_33031__$1 = (function (){var statearr_33036 = state_33031;
(statearr_33036[(8)] = inst_33014__$1);

return statearr_33036;
})();
if(cljs.core.truth_(inst_33015)){
var statearr_33037_33053 = state_33031__$1;
(statearr_33037_33053[(1)] = (5));

} else {
var statearr_33038_33054 = state_33031__$1;
(statearr_33038_33054[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (6))){
var inst_33014 = (state_33031[(8)]);
var inst_33018 = (state_33031[(9)]);
var inst_33011 = (state_33031[(7)]);
var inst_33018__$1 = f.call(null,inst_33011,inst_33014);
var inst_33019 = cljs.core.reduced_QMARK_.call(null,inst_33018__$1);
var state_33031__$1 = (function (){var statearr_33039 = state_33031;
(statearr_33039[(9)] = inst_33018__$1);

return statearr_33039;
})();
if(inst_33019){
var statearr_33040_33055 = state_33031__$1;
(statearr_33040_33055[(1)] = (8));

} else {
var statearr_33041_33056 = state_33031__$1;
(statearr_33041_33056[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (3))){
var inst_33029 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33031__$1,inst_33029);
} else {
if((state_val_33032 === (2))){
var state_33031__$1 = state_33031;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33031__$1,(4),ch);
} else {
if((state_val_33032 === (9))){
var inst_33018 = (state_33031[(9)]);
var inst_33011 = inst_33018;
var state_33031__$1 = (function (){var statearr_33042 = state_33031;
(statearr_33042[(7)] = inst_33011);

return statearr_33042;
})();
var statearr_33043_33057 = state_33031__$1;
(statearr_33043_33057[(2)] = null);

(statearr_33043_33057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (5))){
var inst_33011 = (state_33031[(7)]);
var state_33031__$1 = state_33031;
var statearr_33044_33058 = state_33031__$1;
(statearr_33044_33058[(2)] = inst_33011);

(statearr_33044_33058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (10))){
var inst_33025 = (state_33031[(2)]);
var state_33031__$1 = state_33031;
var statearr_33045_33059 = state_33031__$1;
(statearr_33045_33059[(2)] = inst_33025);

(statearr_33045_33059[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33032 === (8))){
var inst_33018 = (state_33031[(9)]);
var inst_33021 = cljs.core.deref.call(null,inst_33018);
var state_33031__$1 = state_33031;
var statearr_33046_33060 = state_33031__$1;
(statearr_33046_33060[(2)] = inst_33021);

(statearr_33046_33060[(1)] = (10));


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
});})(c__32544__auto__))
;
return ((function (switch__32449__auto__,c__32544__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__32450__auto__ = null;
var cljs$core$async$reduce_$_state_machine__32450__auto____0 = (function (){
var statearr_33047 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33047[(0)] = cljs$core$async$reduce_$_state_machine__32450__auto__);

(statearr_33047[(1)] = (1));

return statearr_33047;
});
var cljs$core$async$reduce_$_state_machine__32450__auto____1 = (function (state_33031){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_33031);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e33048){if((e33048 instanceof Object)){
var ex__32453__auto__ = e33048;
var statearr_33049_33061 = state_33031;
(statearr_33049_33061[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33031);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33062 = state_33031;
state_33031 = G__33062;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__32450__auto__ = function(state_33031){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__32450__auto____1.call(this,state_33031);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__32450__auto____0;
cljs$core$async$reduce_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__32450__auto____1;
return cljs$core$async$reduce_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__))
})();
var state__32546__auto__ = (function (){var statearr_33050 = f__32545__auto__.call(null);
(statearr_33050[(6)] = c__32544__auto__);

return statearr_33050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__))
);

return c__32544__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__,f__$1){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__,f__$1){
return (function (state_33068){
var state_val_33069 = (state_33068[(1)]);
if((state_val_33069 === (1))){
var inst_33063 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33068__$1,(2),inst_33063);
} else {
if((state_val_33069 === (2))){
var inst_33065 = (state_33068[(2)]);
var inst_33066 = f__$1.call(null,inst_33065);
var state_33068__$1 = state_33068;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33068__$1,inst_33066);
} else {
return null;
}
}
});})(c__32544__auto__,f__$1))
;
return ((function (switch__32449__auto__,c__32544__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__32450__auto__ = null;
var cljs$core$async$transduce_$_state_machine__32450__auto____0 = (function (){
var statearr_33070 = [null,null,null,null,null,null,null];
(statearr_33070[(0)] = cljs$core$async$transduce_$_state_machine__32450__auto__);

(statearr_33070[(1)] = (1));

return statearr_33070;
});
var cljs$core$async$transduce_$_state_machine__32450__auto____1 = (function (state_33068){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_33068);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e33071){if((e33071 instanceof Object)){
var ex__32453__auto__ = e33071;
var statearr_33072_33074 = state_33068;
(statearr_33072_33074[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33068);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33075 = state_33068;
state_33068 = G__33075;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__32450__auto__ = function(state_33068){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__32450__auto____1.call(this,state_33068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__32450__auto____0;
cljs$core$async$transduce_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__32450__auto____1;
return cljs$core$async$transduce_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__,f__$1))
})();
var state__32546__auto__ = (function (){var statearr_33073 = f__32545__auto__.call(null);
(statearr_33073[(6)] = c__32544__auto__);

return statearr_33073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__,f__$1))
);

return c__32544__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__33077 = arguments.length;
switch (G__33077) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__){
return (function (state_33102){
var state_val_33103 = (state_33102[(1)]);
if((state_val_33103 === (7))){
var inst_33084 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33104_33125 = state_33102__$1;
(statearr_33104_33125[(2)] = inst_33084);

(statearr_33104_33125[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (1))){
var inst_33078 = cljs.core.seq.call(null,coll);
var inst_33079 = inst_33078;
var state_33102__$1 = (function (){var statearr_33105 = state_33102;
(statearr_33105[(7)] = inst_33079);

return statearr_33105;
})();
var statearr_33106_33126 = state_33102__$1;
(statearr_33106_33126[(2)] = null);

(statearr_33106_33126[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (4))){
var inst_33079 = (state_33102[(7)]);
var inst_33082 = cljs.core.first.call(null,inst_33079);
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33102__$1,(7),ch,inst_33082);
} else {
if((state_val_33103 === (13))){
var inst_33096 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33107_33127 = state_33102__$1;
(statearr_33107_33127[(2)] = inst_33096);

(statearr_33107_33127[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (6))){
var inst_33087 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
if(cljs.core.truth_(inst_33087)){
var statearr_33108_33128 = state_33102__$1;
(statearr_33108_33128[(1)] = (8));

} else {
var statearr_33109_33129 = state_33102__$1;
(statearr_33109_33129[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (3))){
var inst_33100 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33102__$1,inst_33100);
} else {
if((state_val_33103 === (12))){
var state_33102__$1 = state_33102;
var statearr_33110_33130 = state_33102__$1;
(statearr_33110_33130[(2)] = null);

(statearr_33110_33130[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (2))){
var inst_33079 = (state_33102[(7)]);
var state_33102__$1 = state_33102;
if(cljs.core.truth_(inst_33079)){
var statearr_33111_33131 = state_33102__$1;
(statearr_33111_33131[(1)] = (4));

} else {
var statearr_33112_33132 = state_33102__$1;
(statearr_33112_33132[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (11))){
var inst_33093 = cljs.core.async.close_BANG_.call(null,ch);
var state_33102__$1 = state_33102;
var statearr_33113_33133 = state_33102__$1;
(statearr_33113_33133[(2)] = inst_33093);

(statearr_33113_33133[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (9))){
var state_33102__$1 = state_33102;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33114_33134 = state_33102__$1;
(statearr_33114_33134[(1)] = (11));

} else {
var statearr_33115_33135 = state_33102__$1;
(statearr_33115_33135[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (5))){
var inst_33079 = (state_33102[(7)]);
var state_33102__$1 = state_33102;
var statearr_33116_33136 = state_33102__$1;
(statearr_33116_33136[(2)] = inst_33079);

(statearr_33116_33136[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (10))){
var inst_33098 = (state_33102[(2)]);
var state_33102__$1 = state_33102;
var statearr_33117_33137 = state_33102__$1;
(statearr_33117_33137[(2)] = inst_33098);

(statearr_33117_33137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33103 === (8))){
var inst_33079 = (state_33102[(7)]);
var inst_33089 = cljs.core.next.call(null,inst_33079);
var inst_33079__$1 = inst_33089;
var state_33102__$1 = (function (){var statearr_33118 = state_33102;
(statearr_33118[(7)] = inst_33079__$1);

return statearr_33118;
})();
var statearr_33119_33138 = state_33102__$1;
(statearr_33119_33138[(2)] = null);

(statearr_33119_33138[(1)] = (2));


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
});})(c__32544__auto__))
;
return ((function (switch__32449__auto__,c__32544__auto__){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_33120 = [null,null,null,null,null,null,null,null];
(statearr_33120[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_33120[(1)] = (1));

return statearr_33120;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_33102){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_33102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e33121){if((e33121 instanceof Object)){
var ex__32453__auto__ = e33121;
var statearr_33122_33139 = state_33102;
(statearr_33122_33139[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33121;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33140 = state_33102;
state_33102 = G__33140;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_33102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_33102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__))
})();
var state__32546__auto__ = (function (){var statearr_33123 = f__32545__auto__.call(null);
(statearr_33123[(6)] = c__32544__auto__);

return statearr_33123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__))
);

return c__32544__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4433__auto__ = (((_ == null))?null:_);
var m__4434__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,_);
} else {
var m__4431__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33141 = (function (ch,cs,meta33142){
this.ch = ch;
this.cs = cs;
this.meta33142 = meta33142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33143,meta33142__$1){
var self__ = this;
var _33143__$1 = this;
return (new cljs.core.async.t_cljs$core$async33141(self__.ch,self__.cs,meta33142__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33143){
var self__ = this;
var _33143__$1 = this;
return self__.meta33142;
});})(cs))
;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33141.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33141.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33142","meta33142",-683344679,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33141.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33141.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33141";

cljs.core.async.t_cljs$core$async33141.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33141");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33141.
 */
cljs.core.async.__GT_t_cljs$core$async33141 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33141(ch__$1,cs__$1,meta33142){
return (new cljs.core.async.t_cljs$core$async33141(ch__$1,cs__$1,meta33142));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33141(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__32544__auto___33363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___33363,cs,m,dchan,dctr,done){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___33363,cs,m,dchan,dctr,done){
return (function (state_33278){
var state_val_33279 = (state_33278[(1)]);
if((state_val_33279 === (7))){
var inst_33274 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33280_33364 = state_33278__$1;
(statearr_33280_33364[(2)] = inst_33274);

(statearr_33280_33364[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (20))){
var inst_33177 = (state_33278[(7)]);
var inst_33189 = cljs.core.first.call(null,inst_33177);
var inst_33190 = cljs.core.nth.call(null,inst_33189,(0),null);
var inst_33191 = cljs.core.nth.call(null,inst_33189,(1),null);
var state_33278__$1 = (function (){var statearr_33281 = state_33278;
(statearr_33281[(8)] = inst_33190);

return statearr_33281;
})();
if(cljs.core.truth_(inst_33191)){
var statearr_33282_33365 = state_33278__$1;
(statearr_33282_33365[(1)] = (22));

} else {
var statearr_33283_33366 = state_33278__$1;
(statearr_33283_33366[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (27))){
var inst_33146 = (state_33278[(9)]);
var inst_33226 = (state_33278[(10)]);
var inst_33221 = (state_33278[(11)]);
var inst_33219 = (state_33278[(12)]);
var inst_33226__$1 = cljs.core._nth.call(null,inst_33219,inst_33221);
var inst_33227 = cljs.core.async.put_BANG_.call(null,inst_33226__$1,inst_33146,done);
var state_33278__$1 = (function (){var statearr_33284 = state_33278;
(statearr_33284[(10)] = inst_33226__$1);

return statearr_33284;
})();
if(cljs.core.truth_(inst_33227)){
var statearr_33285_33367 = state_33278__$1;
(statearr_33285_33367[(1)] = (30));

} else {
var statearr_33286_33368 = state_33278__$1;
(statearr_33286_33368[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (1))){
var state_33278__$1 = state_33278;
var statearr_33287_33369 = state_33278__$1;
(statearr_33287_33369[(2)] = null);

(statearr_33287_33369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (24))){
var inst_33177 = (state_33278[(7)]);
var inst_33196 = (state_33278[(2)]);
var inst_33197 = cljs.core.next.call(null,inst_33177);
var inst_33155 = inst_33197;
var inst_33156 = null;
var inst_33157 = (0);
var inst_33158 = (0);
var state_33278__$1 = (function (){var statearr_33288 = state_33278;
(statearr_33288[(13)] = inst_33158);

(statearr_33288[(14)] = inst_33157);

(statearr_33288[(15)] = inst_33155);

(statearr_33288[(16)] = inst_33196);

(statearr_33288[(17)] = inst_33156);

return statearr_33288;
})();
var statearr_33289_33370 = state_33278__$1;
(statearr_33289_33370[(2)] = null);

(statearr_33289_33370[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (39))){
var state_33278__$1 = state_33278;
var statearr_33293_33371 = state_33278__$1;
(statearr_33293_33371[(2)] = null);

(statearr_33293_33371[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (4))){
var inst_33146 = (state_33278[(9)]);
var inst_33146__$1 = (state_33278[(2)]);
var inst_33147 = (inst_33146__$1 == null);
var state_33278__$1 = (function (){var statearr_33294 = state_33278;
(statearr_33294[(9)] = inst_33146__$1);

return statearr_33294;
})();
if(cljs.core.truth_(inst_33147)){
var statearr_33295_33372 = state_33278__$1;
(statearr_33295_33372[(1)] = (5));

} else {
var statearr_33296_33373 = state_33278__$1;
(statearr_33296_33373[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (15))){
var inst_33158 = (state_33278[(13)]);
var inst_33157 = (state_33278[(14)]);
var inst_33155 = (state_33278[(15)]);
var inst_33156 = (state_33278[(17)]);
var inst_33173 = (state_33278[(2)]);
var inst_33174 = (inst_33158 + (1));
var tmp33290 = inst_33157;
var tmp33291 = inst_33155;
var tmp33292 = inst_33156;
var inst_33155__$1 = tmp33291;
var inst_33156__$1 = tmp33292;
var inst_33157__$1 = tmp33290;
var inst_33158__$1 = inst_33174;
var state_33278__$1 = (function (){var statearr_33297 = state_33278;
(statearr_33297[(13)] = inst_33158__$1);

(statearr_33297[(18)] = inst_33173);

(statearr_33297[(14)] = inst_33157__$1);

(statearr_33297[(15)] = inst_33155__$1);

(statearr_33297[(17)] = inst_33156__$1);

return statearr_33297;
})();
var statearr_33298_33374 = state_33278__$1;
(statearr_33298_33374[(2)] = null);

(statearr_33298_33374[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (21))){
var inst_33200 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33302_33375 = state_33278__$1;
(statearr_33302_33375[(2)] = inst_33200);

(statearr_33302_33375[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (31))){
var inst_33226 = (state_33278[(10)]);
var inst_33230 = done.call(null,null);
var inst_33231 = cljs.core.async.untap_STAR_.call(null,m,inst_33226);
var state_33278__$1 = (function (){var statearr_33303 = state_33278;
(statearr_33303[(19)] = inst_33230);

return statearr_33303;
})();
var statearr_33304_33376 = state_33278__$1;
(statearr_33304_33376[(2)] = inst_33231);

(statearr_33304_33376[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (32))){
var inst_33218 = (state_33278[(20)]);
var inst_33221 = (state_33278[(11)]);
var inst_33219 = (state_33278[(12)]);
var inst_33220 = (state_33278[(21)]);
var inst_33233 = (state_33278[(2)]);
var inst_33234 = (inst_33221 + (1));
var tmp33299 = inst_33218;
var tmp33300 = inst_33219;
var tmp33301 = inst_33220;
var inst_33218__$1 = tmp33299;
var inst_33219__$1 = tmp33300;
var inst_33220__$1 = tmp33301;
var inst_33221__$1 = inst_33234;
var state_33278__$1 = (function (){var statearr_33305 = state_33278;
(statearr_33305[(20)] = inst_33218__$1);

(statearr_33305[(11)] = inst_33221__$1);

(statearr_33305[(12)] = inst_33219__$1);

(statearr_33305[(21)] = inst_33220__$1);

(statearr_33305[(22)] = inst_33233);

return statearr_33305;
})();
var statearr_33306_33377 = state_33278__$1;
(statearr_33306_33377[(2)] = null);

(statearr_33306_33377[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (40))){
var inst_33246 = (state_33278[(23)]);
var inst_33250 = done.call(null,null);
var inst_33251 = cljs.core.async.untap_STAR_.call(null,m,inst_33246);
var state_33278__$1 = (function (){var statearr_33307 = state_33278;
(statearr_33307[(24)] = inst_33250);

return statearr_33307;
})();
var statearr_33308_33378 = state_33278__$1;
(statearr_33308_33378[(2)] = inst_33251);

(statearr_33308_33378[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (33))){
var inst_33237 = (state_33278[(25)]);
var inst_33239 = cljs.core.chunked_seq_QMARK_.call(null,inst_33237);
var state_33278__$1 = state_33278;
if(inst_33239){
var statearr_33309_33379 = state_33278__$1;
(statearr_33309_33379[(1)] = (36));

} else {
var statearr_33310_33380 = state_33278__$1;
(statearr_33310_33380[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (13))){
var inst_33167 = (state_33278[(26)]);
var inst_33170 = cljs.core.async.close_BANG_.call(null,inst_33167);
var state_33278__$1 = state_33278;
var statearr_33311_33381 = state_33278__$1;
(statearr_33311_33381[(2)] = inst_33170);

(statearr_33311_33381[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (22))){
var inst_33190 = (state_33278[(8)]);
var inst_33193 = cljs.core.async.close_BANG_.call(null,inst_33190);
var state_33278__$1 = state_33278;
var statearr_33312_33382 = state_33278__$1;
(statearr_33312_33382[(2)] = inst_33193);

(statearr_33312_33382[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (36))){
var inst_33237 = (state_33278[(25)]);
var inst_33241 = cljs.core.chunk_first.call(null,inst_33237);
var inst_33242 = cljs.core.chunk_rest.call(null,inst_33237);
var inst_33243 = cljs.core.count.call(null,inst_33241);
var inst_33218 = inst_33242;
var inst_33219 = inst_33241;
var inst_33220 = inst_33243;
var inst_33221 = (0);
var state_33278__$1 = (function (){var statearr_33313 = state_33278;
(statearr_33313[(20)] = inst_33218);

(statearr_33313[(11)] = inst_33221);

(statearr_33313[(12)] = inst_33219);

(statearr_33313[(21)] = inst_33220);

return statearr_33313;
})();
var statearr_33314_33383 = state_33278__$1;
(statearr_33314_33383[(2)] = null);

(statearr_33314_33383[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (41))){
var inst_33237 = (state_33278[(25)]);
var inst_33253 = (state_33278[(2)]);
var inst_33254 = cljs.core.next.call(null,inst_33237);
var inst_33218 = inst_33254;
var inst_33219 = null;
var inst_33220 = (0);
var inst_33221 = (0);
var state_33278__$1 = (function (){var statearr_33315 = state_33278;
(statearr_33315[(20)] = inst_33218);

(statearr_33315[(11)] = inst_33221);

(statearr_33315[(12)] = inst_33219);

(statearr_33315[(21)] = inst_33220);

(statearr_33315[(27)] = inst_33253);

return statearr_33315;
})();
var statearr_33316_33384 = state_33278__$1;
(statearr_33316_33384[(2)] = null);

(statearr_33316_33384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (43))){
var state_33278__$1 = state_33278;
var statearr_33317_33385 = state_33278__$1;
(statearr_33317_33385[(2)] = null);

(statearr_33317_33385[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (29))){
var inst_33262 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33318_33386 = state_33278__$1;
(statearr_33318_33386[(2)] = inst_33262);

(statearr_33318_33386[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (44))){
var inst_33271 = (state_33278[(2)]);
var state_33278__$1 = (function (){var statearr_33319 = state_33278;
(statearr_33319[(28)] = inst_33271);

return statearr_33319;
})();
var statearr_33320_33387 = state_33278__$1;
(statearr_33320_33387[(2)] = null);

(statearr_33320_33387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (6))){
var inst_33210 = (state_33278[(29)]);
var inst_33209 = cljs.core.deref.call(null,cs);
var inst_33210__$1 = cljs.core.keys.call(null,inst_33209);
var inst_33211 = cljs.core.count.call(null,inst_33210__$1);
var inst_33212 = cljs.core.reset_BANG_.call(null,dctr,inst_33211);
var inst_33217 = cljs.core.seq.call(null,inst_33210__$1);
var inst_33218 = inst_33217;
var inst_33219 = null;
var inst_33220 = (0);
var inst_33221 = (0);
var state_33278__$1 = (function (){var statearr_33321 = state_33278;
(statearr_33321[(20)] = inst_33218);

(statearr_33321[(11)] = inst_33221);

(statearr_33321[(30)] = inst_33212);

(statearr_33321[(12)] = inst_33219);

(statearr_33321[(21)] = inst_33220);

(statearr_33321[(29)] = inst_33210__$1);

return statearr_33321;
})();
var statearr_33322_33388 = state_33278__$1;
(statearr_33322_33388[(2)] = null);

(statearr_33322_33388[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (28))){
var inst_33218 = (state_33278[(20)]);
var inst_33237 = (state_33278[(25)]);
var inst_33237__$1 = cljs.core.seq.call(null,inst_33218);
var state_33278__$1 = (function (){var statearr_33323 = state_33278;
(statearr_33323[(25)] = inst_33237__$1);

return statearr_33323;
})();
if(inst_33237__$1){
var statearr_33324_33389 = state_33278__$1;
(statearr_33324_33389[(1)] = (33));

} else {
var statearr_33325_33390 = state_33278__$1;
(statearr_33325_33390[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (25))){
var inst_33221 = (state_33278[(11)]);
var inst_33220 = (state_33278[(21)]);
var inst_33223 = (inst_33221 < inst_33220);
var inst_33224 = inst_33223;
var state_33278__$1 = state_33278;
if(cljs.core.truth_(inst_33224)){
var statearr_33326_33391 = state_33278__$1;
(statearr_33326_33391[(1)] = (27));

} else {
var statearr_33327_33392 = state_33278__$1;
(statearr_33327_33392[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (34))){
var state_33278__$1 = state_33278;
var statearr_33328_33393 = state_33278__$1;
(statearr_33328_33393[(2)] = null);

(statearr_33328_33393[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (17))){
var state_33278__$1 = state_33278;
var statearr_33329_33394 = state_33278__$1;
(statearr_33329_33394[(2)] = null);

(statearr_33329_33394[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (3))){
var inst_33276 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33278__$1,inst_33276);
} else {
if((state_val_33279 === (12))){
var inst_33205 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33330_33395 = state_33278__$1;
(statearr_33330_33395[(2)] = inst_33205);

(statearr_33330_33395[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (2))){
var state_33278__$1 = state_33278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33278__$1,(4),ch);
} else {
if((state_val_33279 === (23))){
var state_33278__$1 = state_33278;
var statearr_33331_33396 = state_33278__$1;
(statearr_33331_33396[(2)] = null);

(statearr_33331_33396[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (35))){
var inst_33260 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33332_33397 = state_33278__$1;
(statearr_33332_33397[(2)] = inst_33260);

(statearr_33332_33397[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (19))){
var inst_33177 = (state_33278[(7)]);
var inst_33181 = cljs.core.chunk_first.call(null,inst_33177);
var inst_33182 = cljs.core.chunk_rest.call(null,inst_33177);
var inst_33183 = cljs.core.count.call(null,inst_33181);
var inst_33155 = inst_33182;
var inst_33156 = inst_33181;
var inst_33157 = inst_33183;
var inst_33158 = (0);
var state_33278__$1 = (function (){var statearr_33333 = state_33278;
(statearr_33333[(13)] = inst_33158);

(statearr_33333[(14)] = inst_33157);

(statearr_33333[(15)] = inst_33155);

(statearr_33333[(17)] = inst_33156);

return statearr_33333;
})();
var statearr_33334_33398 = state_33278__$1;
(statearr_33334_33398[(2)] = null);

(statearr_33334_33398[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (11))){
var inst_33177 = (state_33278[(7)]);
var inst_33155 = (state_33278[(15)]);
var inst_33177__$1 = cljs.core.seq.call(null,inst_33155);
var state_33278__$1 = (function (){var statearr_33335 = state_33278;
(statearr_33335[(7)] = inst_33177__$1);

return statearr_33335;
})();
if(inst_33177__$1){
var statearr_33336_33399 = state_33278__$1;
(statearr_33336_33399[(1)] = (16));

} else {
var statearr_33337_33400 = state_33278__$1;
(statearr_33337_33400[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (9))){
var inst_33207 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33338_33401 = state_33278__$1;
(statearr_33338_33401[(2)] = inst_33207);

(statearr_33338_33401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (5))){
var inst_33153 = cljs.core.deref.call(null,cs);
var inst_33154 = cljs.core.seq.call(null,inst_33153);
var inst_33155 = inst_33154;
var inst_33156 = null;
var inst_33157 = (0);
var inst_33158 = (0);
var state_33278__$1 = (function (){var statearr_33339 = state_33278;
(statearr_33339[(13)] = inst_33158);

(statearr_33339[(14)] = inst_33157);

(statearr_33339[(15)] = inst_33155);

(statearr_33339[(17)] = inst_33156);

return statearr_33339;
})();
var statearr_33340_33402 = state_33278__$1;
(statearr_33340_33402[(2)] = null);

(statearr_33340_33402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (14))){
var state_33278__$1 = state_33278;
var statearr_33341_33403 = state_33278__$1;
(statearr_33341_33403[(2)] = null);

(statearr_33341_33403[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (45))){
var inst_33268 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33342_33404 = state_33278__$1;
(statearr_33342_33404[(2)] = inst_33268);

(statearr_33342_33404[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (26))){
var inst_33210 = (state_33278[(29)]);
var inst_33264 = (state_33278[(2)]);
var inst_33265 = cljs.core.seq.call(null,inst_33210);
var state_33278__$1 = (function (){var statearr_33343 = state_33278;
(statearr_33343[(31)] = inst_33264);

return statearr_33343;
})();
if(inst_33265){
var statearr_33344_33405 = state_33278__$1;
(statearr_33344_33405[(1)] = (42));

} else {
var statearr_33345_33406 = state_33278__$1;
(statearr_33345_33406[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (16))){
var inst_33177 = (state_33278[(7)]);
var inst_33179 = cljs.core.chunked_seq_QMARK_.call(null,inst_33177);
var state_33278__$1 = state_33278;
if(inst_33179){
var statearr_33346_33407 = state_33278__$1;
(statearr_33346_33407[(1)] = (19));

} else {
var statearr_33347_33408 = state_33278__$1;
(statearr_33347_33408[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (38))){
var inst_33257 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33348_33409 = state_33278__$1;
(statearr_33348_33409[(2)] = inst_33257);

(statearr_33348_33409[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (30))){
var state_33278__$1 = state_33278;
var statearr_33349_33410 = state_33278__$1;
(statearr_33349_33410[(2)] = null);

(statearr_33349_33410[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (10))){
var inst_33158 = (state_33278[(13)]);
var inst_33156 = (state_33278[(17)]);
var inst_33166 = cljs.core._nth.call(null,inst_33156,inst_33158);
var inst_33167 = cljs.core.nth.call(null,inst_33166,(0),null);
var inst_33168 = cljs.core.nth.call(null,inst_33166,(1),null);
var state_33278__$1 = (function (){var statearr_33350 = state_33278;
(statearr_33350[(26)] = inst_33167);

return statearr_33350;
})();
if(cljs.core.truth_(inst_33168)){
var statearr_33351_33411 = state_33278__$1;
(statearr_33351_33411[(1)] = (13));

} else {
var statearr_33352_33412 = state_33278__$1;
(statearr_33352_33412[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (18))){
var inst_33203 = (state_33278[(2)]);
var state_33278__$1 = state_33278;
var statearr_33353_33413 = state_33278__$1;
(statearr_33353_33413[(2)] = inst_33203);

(statearr_33353_33413[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (42))){
var state_33278__$1 = state_33278;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33278__$1,(45),dchan);
} else {
if((state_val_33279 === (37))){
var inst_33146 = (state_33278[(9)]);
var inst_33246 = (state_33278[(23)]);
var inst_33237 = (state_33278[(25)]);
var inst_33246__$1 = cljs.core.first.call(null,inst_33237);
var inst_33247 = cljs.core.async.put_BANG_.call(null,inst_33246__$1,inst_33146,done);
var state_33278__$1 = (function (){var statearr_33354 = state_33278;
(statearr_33354[(23)] = inst_33246__$1);

return statearr_33354;
})();
if(cljs.core.truth_(inst_33247)){
var statearr_33355_33414 = state_33278__$1;
(statearr_33355_33414[(1)] = (39));

} else {
var statearr_33356_33415 = state_33278__$1;
(statearr_33356_33415[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33279 === (8))){
var inst_33158 = (state_33278[(13)]);
var inst_33157 = (state_33278[(14)]);
var inst_33160 = (inst_33158 < inst_33157);
var inst_33161 = inst_33160;
var state_33278__$1 = state_33278;
if(cljs.core.truth_(inst_33161)){
var statearr_33357_33416 = state_33278__$1;
(statearr_33357_33416[(1)] = (10));

} else {
var statearr_33358_33417 = state_33278__$1;
(statearr_33358_33417[(1)] = (11));

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
});})(c__32544__auto___33363,cs,m,dchan,dctr,done))
;
return ((function (switch__32449__auto__,c__32544__auto___33363,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__32450__auto__ = null;
var cljs$core$async$mult_$_state_machine__32450__auto____0 = (function (){
var statearr_33359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33359[(0)] = cljs$core$async$mult_$_state_machine__32450__auto__);

(statearr_33359[(1)] = (1));

return statearr_33359;
});
var cljs$core$async$mult_$_state_machine__32450__auto____1 = (function (state_33278){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_33278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e33360){if((e33360 instanceof Object)){
var ex__32453__auto__ = e33360;
var statearr_33361_33418 = state_33278;
(statearr_33361_33418[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33419 = state_33278;
state_33278 = G__33419;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__32450__auto__ = function(state_33278){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__32450__auto____1.call(this,state_33278);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__32450__auto____0;
cljs$core$async$mult_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__32450__auto____1;
return cljs$core$async$mult_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___33363,cs,m,dchan,dctr,done))
})();
var state__32546__auto__ = (function (){var statearr_33362 = f__32545__auto__.call(null);
(statearr_33362[(6)] = c__32544__auto___33363);

return statearr_33362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___33363,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__33421 = arguments.length;
switch (G__33421) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m);
} else {
var m__4431__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,state_map);
} else {
var m__4431__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4433__auto__ = (((m == null))?null:m);
var m__4434__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,m,mode);
} else {
var m__4431__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4736__auto__ = [];
var len__4730__auto___33433 = arguments.length;
var i__4731__auto___33434 = (0);
while(true){
if((i__4731__auto___33434 < len__4730__auto___33433)){
args__4736__auto__.push((arguments[i__4731__auto___33434]));

var G__33435 = (i__4731__auto___33434 + (1));
i__4731__auto___33434 = G__33435;
continue;
} else {
}
break;
}

var argseq__4737__auto__ = ((((3) < args__4736__auto__.length))?(new cljs.core.IndexedSeq(args__4736__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4737__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33427){
var map__33428 = p__33427;
var map__33428__$1 = (((((!((map__33428 == null))))?(((((map__33428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33428):map__33428);
var opts = map__33428__$1;
var statearr_33430_33436 = state;
(statearr_33430_33436[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts.call(null,((function (map__33428,map__33428__$1,opts){
return (function (val){
var statearr_33431_33437 = state;
(statearr_33431_33437[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33428,map__33428__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_33432_33438 = state;
(statearr_33432_33438[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33423){
var G__33424 = cljs.core.first.call(null,seq33423);
var seq33423__$1 = cljs.core.next.call(null,seq33423);
var G__33425 = cljs.core.first.call(null,seq33423__$1);
var seq33423__$2 = cljs.core.next.call(null,seq33423__$1);
var G__33426 = cljs.core.first.call(null,seq33423__$2);
var seq33423__$3 = cljs.core.next.call(null,seq33423__$2);
var self__4717__auto__ = this;
return self__4717__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33424,G__33425,G__33426,seq33423__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_.call(null,solos))))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33439 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33439 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33440){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta33440 = meta33440;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33441,meta33440__$1){
var self__ = this;
var _33441__$1 = this;
return (new cljs.core.async.t_cljs$core$async33439(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33440__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33441){
var self__ = this;
var _33441__$1 = this;
return self__.meta33440;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33439.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33439.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33440","meta33440",1354243826,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33439.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33439.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33439";

cljs.core.async.t_cljs$core$async33439.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33439");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33439.
 */
cljs.core.async.__GT_t_cljs$core$async33439 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33439(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33440){
return (new cljs.core.async.t_cljs$core$async33439(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33440));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33439(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32544__auto___33603 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___33603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___33603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33543){
var state_val_33544 = (state_33543[(1)]);
if((state_val_33544 === (7))){
var inst_33458 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33545_33604 = state_33543__$1;
(statearr_33545_33604[(2)] = inst_33458);

(statearr_33545_33604[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (20))){
var inst_33470 = (state_33543[(7)]);
var state_33543__$1 = state_33543;
var statearr_33546_33605 = state_33543__$1;
(statearr_33546_33605[(2)] = inst_33470);

(statearr_33546_33605[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (27))){
var state_33543__$1 = state_33543;
var statearr_33547_33606 = state_33543__$1;
(statearr_33547_33606[(2)] = null);

(statearr_33547_33606[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (1))){
var inst_33445 = (state_33543[(8)]);
var inst_33445__$1 = calc_state.call(null);
var inst_33447 = (inst_33445__$1 == null);
var inst_33448 = cljs.core.not.call(null,inst_33447);
var state_33543__$1 = (function (){var statearr_33548 = state_33543;
(statearr_33548[(8)] = inst_33445__$1);

return statearr_33548;
})();
if(inst_33448){
var statearr_33549_33607 = state_33543__$1;
(statearr_33549_33607[(1)] = (2));

} else {
var statearr_33550_33608 = state_33543__$1;
(statearr_33550_33608[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (24))){
var inst_33517 = (state_33543[(9)]);
var inst_33494 = (state_33543[(10)]);
var inst_33503 = (state_33543[(11)]);
var inst_33517__$1 = inst_33494.call(null,inst_33503);
var state_33543__$1 = (function (){var statearr_33551 = state_33543;
(statearr_33551[(9)] = inst_33517__$1);

return statearr_33551;
})();
if(cljs.core.truth_(inst_33517__$1)){
var statearr_33552_33609 = state_33543__$1;
(statearr_33552_33609[(1)] = (29));

} else {
var statearr_33553_33610 = state_33543__$1;
(statearr_33553_33610[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (4))){
var inst_33461 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33461)){
var statearr_33554_33611 = state_33543__$1;
(statearr_33554_33611[(1)] = (8));

} else {
var statearr_33555_33612 = state_33543__$1;
(statearr_33555_33612[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (15))){
var inst_33488 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33488)){
var statearr_33556_33613 = state_33543__$1;
(statearr_33556_33613[(1)] = (19));

} else {
var statearr_33557_33614 = state_33543__$1;
(statearr_33557_33614[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (21))){
var inst_33493 = (state_33543[(12)]);
var inst_33493__$1 = (state_33543[(2)]);
var inst_33494 = cljs.core.get.call(null,inst_33493__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33495 = cljs.core.get.call(null,inst_33493__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33496 = cljs.core.get.call(null,inst_33493__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33543__$1 = (function (){var statearr_33558 = state_33543;
(statearr_33558[(13)] = inst_33495);

(statearr_33558[(10)] = inst_33494);

(statearr_33558[(12)] = inst_33493__$1);

return statearr_33558;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33543__$1,(22),inst_33496);
} else {
if((state_val_33544 === (31))){
var inst_33525 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33525)){
var statearr_33559_33615 = state_33543__$1;
(statearr_33559_33615[(1)] = (32));

} else {
var statearr_33560_33616 = state_33543__$1;
(statearr_33560_33616[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (32))){
var inst_33502 = (state_33543[(14)]);
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33543__$1,(35),out,inst_33502);
} else {
if((state_val_33544 === (33))){
var inst_33493 = (state_33543[(12)]);
var inst_33470 = inst_33493;
var state_33543__$1 = (function (){var statearr_33561 = state_33543;
(statearr_33561[(7)] = inst_33470);

return statearr_33561;
})();
var statearr_33562_33617 = state_33543__$1;
(statearr_33562_33617[(2)] = null);

(statearr_33562_33617[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (13))){
var inst_33470 = (state_33543[(7)]);
var inst_33477 = inst_33470.cljs$lang$protocol_mask$partition0$;
var inst_33478 = (inst_33477 & (64));
var inst_33479 = inst_33470.cljs$core$ISeq$;
var inst_33480 = (cljs.core.PROTOCOL_SENTINEL === inst_33479);
var inst_33481 = ((inst_33478) || (inst_33480));
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33481)){
var statearr_33563_33618 = state_33543__$1;
(statearr_33563_33618[(1)] = (16));

} else {
var statearr_33564_33619 = state_33543__$1;
(statearr_33564_33619[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (22))){
var inst_33502 = (state_33543[(14)]);
var inst_33503 = (state_33543[(11)]);
var inst_33501 = (state_33543[(2)]);
var inst_33502__$1 = cljs.core.nth.call(null,inst_33501,(0),null);
var inst_33503__$1 = cljs.core.nth.call(null,inst_33501,(1),null);
var inst_33504 = (inst_33502__$1 == null);
var inst_33505 = cljs.core._EQ_.call(null,inst_33503__$1,change);
var inst_33506 = ((inst_33504) || (inst_33505));
var state_33543__$1 = (function (){var statearr_33565 = state_33543;
(statearr_33565[(14)] = inst_33502__$1);

(statearr_33565[(11)] = inst_33503__$1);

return statearr_33565;
})();
if(cljs.core.truth_(inst_33506)){
var statearr_33566_33620 = state_33543__$1;
(statearr_33566_33620[(1)] = (23));

} else {
var statearr_33567_33621 = state_33543__$1;
(statearr_33567_33621[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (36))){
var inst_33493 = (state_33543[(12)]);
var inst_33470 = inst_33493;
var state_33543__$1 = (function (){var statearr_33568 = state_33543;
(statearr_33568[(7)] = inst_33470);

return statearr_33568;
})();
var statearr_33569_33622 = state_33543__$1;
(statearr_33569_33622[(2)] = null);

(statearr_33569_33622[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (29))){
var inst_33517 = (state_33543[(9)]);
var state_33543__$1 = state_33543;
var statearr_33570_33623 = state_33543__$1;
(statearr_33570_33623[(2)] = inst_33517);

(statearr_33570_33623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (6))){
var state_33543__$1 = state_33543;
var statearr_33571_33624 = state_33543__$1;
(statearr_33571_33624[(2)] = false);

(statearr_33571_33624[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (28))){
var inst_33513 = (state_33543[(2)]);
var inst_33514 = calc_state.call(null);
var inst_33470 = inst_33514;
var state_33543__$1 = (function (){var statearr_33572 = state_33543;
(statearr_33572[(15)] = inst_33513);

(statearr_33572[(7)] = inst_33470);

return statearr_33572;
})();
var statearr_33573_33625 = state_33543__$1;
(statearr_33573_33625[(2)] = null);

(statearr_33573_33625[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (25))){
var inst_33539 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33574_33626 = state_33543__$1;
(statearr_33574_33626[(2)] = inst_33539);

(statearr_33574_33626[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (34))){
var inst_33537 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33575_33627 = state_33543__$1;
(statearr_33575_33627[(2)] = inst_33537);

(statearr_33575_33627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (17))){
var state_33543__$1 = state_33543;
var statearr_33576_33628 = state_33543__$1;
(statearr_33576_33628[(2)] = false);

(statearr_33576_33628[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (3))){
var state_33543__$1 = state_33543;
var statearr_33577_33629 = state_33543__$1;
(statearr_33577_33629[(2)] = false);

(statearr_33577_33629[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (12))){
var inst_33541 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33543__$1,inst_33541);
} else {
if((state_val_33544 === (2))){
var inst_33445 = (state_33543[(8)]);
var inst_33450 = inst_33445.cljs$lang$protocol_mask$partition0$;
var inst_33451 = (inst_33450 & (64));
var inst_33452 = inst_33445.cljs$core$ISeq$;
var inst_33453 = (cljs.core.PROTOCOL_SENTINEL === inst_33452);
var inst_33454 = ((inst_33451) || (inst_33453));
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33454)){
var statearr_33578_33630 = state_33543__$1;
(statearr_33578_33630[(1)] = (5));

} else {
var statearr_33579_33631 = state_33543__$1;
(statearr_33579_33631[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (23))){
var inst_33502 = (state_33543[(14)]);
var inst_33508 = (inst_33502 == null);
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33508)){
var statearr_33580_33632 = state_33543__$1;
(statearr_33580_33632[(1)] = (26));

} else {
var statearr_33581_33633 = state_33543__$1;
(statearr_33581_33633[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (35))){
var inst_33528 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
if(cljs.core.truth_(inst_33528)){
var statearr_33582_33634 = state_33543__$1;
(statearr_33582_33634[(1)] = (36));

} else {
var statearr_33583_33635 = state_33543__$1;
(statearr_33583_33635[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (19))){
var inst_33470 = (state_33543[(7)]);
var inst_33490 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33470);
var state_33543__$1 = state_33543;
var statearr_33584_33636 = state_33543__$1;
(statearr_33584_33636[(2)] = inst_33490);

(statearr_33584_33636[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (11))){
var inst_33470 = (state_33543[(7)]);
var inst_33474 = (inst_33470 == null);
var inst_33475 = cljs.core.not.call(null,inst_33474);
var state_33543__$1 = state_33543;
if(inst_33475){
var statearr_33585_33637 = state_33543__$1;
(statearr_33585_33637[(1)] = (13));

} else {
var statearr_33586_33638 = state_33543__$1;
(statearr_33586_33638[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (9))){
var inst_33445 = (state_33543[(8)]);
var state_33543__$1 = state_33543;
var statearr_33587_33639 = state_33543__$1;
(statearr_33587_33639[(2)] = inst_33445);

(statearr_33587_33639[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (5))){
var state_33543__$1 = state_33543;
var statearr_33588_33640 = state_33543__$1;
(statearr_33588_33640[(2)] = true);

(statearr_33588_33640[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (14))){
var state_33543__$1 = state_33543;
var statearr_33589_33641 = state_33543__$1;
(statearr_33589_33641[(2)] = false);

(statearr_33589_33641[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (26))){
var inst_33503 = (state_33543[(11)]);
var inst_33510 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33503);
var state_33543__$1 = state_33543;
var statearr_33590_33642 = state_33543__$1;
(statearr_33590_33642[(2)] = inst_33510);

(statearr_33590_33642[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (16))){
var state_33543__$1 = state_33543;
var statearr_33591_33643 = state_33543__$1;
(statearr_33591_33643[(2)] = true);

(statearr_33591_33643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (38))){
var inst_33533 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33592_33644 = state_33543__$1;
(statearr_33592_33644[(2)] = inst_33533);

(statearr_33592_33644[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (30))){
var inst_33495 = (state_33543[(13)]);
var inst_33494 = (state_33543[(10)]);
var inst_33503 = (state_33543[(11)]);
var inst_33520 = cljs.core.empty_QMARK_.call(null,inst_33494);
var inst_33521 = inst_33495.call(null,inst_33503);
var inst_33522 = cljs.core.not.call(null,inst_33521);
var inst_33523 = ((inst_33520) && (inst_33522));
var state_33543__$1 = state_33543;
var statearr_33593_33645 = state_33543__$1;
(statearr_33593_33645[(2)] = inst_33523);

(statearr_33593_33645[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (10))){
var inst_33445 = (state_33543[(8)]);
var inst_33466 = (state_33543[(2)]);
var inst_33467 = cljs.core.get.call(null,inst_33466,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33468 = cljs.core.get.call(null,inst_33466,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33469 = cljs.core.get.call(null,inst_33466,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33470 = inst_33445;
var state_33543__$1 = (function (){var statearr_33594 = state_33543;
(statearr_33594[(16)] = inst_33468);

(statearr_33594[(17)] = inst_33469);

(statearr_33594[(7)] = inst_33470);

(statearr_33594[(18)] = inst_33467);

return statearr_33594;
})();
var statearr_33595_33646 = state_33543__$1;
(statearr_33595_33646[(2)] = null);

(statearr_33595_33646[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (18))){
var inst_33485 = (state_33543[(2)]);
var state_33543__$1 = state_33543;
var statearr_33596_33647 = state_33543__$1;
(statearr_33596_33647[(2)] = inst_33485);

(statearr_33596_33647[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (37))){
var state_33543__$1 = state_33543;
var statearr_33597_33648 = state_33543__$1;
(statearr_33597_33648[(2)] = null);

(statearr_33597_33648[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33544 === (8))){
var inst_33445 = (state_33543[(8)]);
var inst_33463 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33445);
var state_33543__$1 = state_33543;
var statearr_33598_33649 = state_33543__$1;
(statearr_33598_33649[(2)] = inst_33463);

(statearr_33598_33649[(1)] = (10));


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
});})(c__32544__auto___33603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__32449__auto__,c__32544__auto___33603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__32450__auto__ = null;
var cljs$core$async$mix_$_state_machine__32450__auto____0 = (function (){
var statearr_33599 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33599[(0)] = cljs$core$async$mix_$_state_machine__32450__auto__);

(statearr_33599[(1)] = (1));

return statearr_33599;
});
var cljs$core$async$mix_$_state_machine__32450__auto____1 = (function (state_33543){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_33543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e33600){if((e33600 instanceof Object)){
var ex__32453__auto__ = e33600;
var statearr_33601_33650 = state_33543;
(statearr_33601_33650[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33600;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33651 = state_33543;
state_33543 = G__33651;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__32450__auto__ = function(state_33543){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__32450__auto____1.call(this,state_33543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__32450__auto____0;
cljs$core$async$mix_$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__32450__auto____1;
return cljs$core$async$mix_$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___33603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__32546__auto__ = (function (){var statearr_33602 = f__32545__auto__.call(null);
(statearr_33602[(6)] = c__32544__auto___33603);

return statearr_33602;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___33603,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4431__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v,ch);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__33653 = arguments.length;
switch (G__33653) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4433__auto__ = (((p == null))?null:p);
var m__4434__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4433__auto__)]);
if((!((m__4434__auto__ == null)))){
return m__4434__auto__.call(null,p,v);
} else {
var m__4431__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4431__auto__ == null)))){
return m__4431__auto__.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__33657 = arguments.length;
switch (G__33657) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4131__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4131__auto__,mults){
return (function (p1__33655_SHARP_){
if(cljs.core.truth_(p1__33655_SHARP_.call(null,topic))){
return p1__33655_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__33655_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4131__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async33658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33658 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta33659){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta33659 = meta33659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33660,meta33659__$1){
var self__ = this;
var _33660__$1 = this;
return (new cljs.core.async.t_cljs$core$async33658(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta33659__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33660){
var self__ = this;
var _33660__$1 = this;
return self__.meta33659;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33658.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33658.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta33659","meta33659",-1021915730,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async33658.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33658.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33658";

cljs.core.async.t_cljs$core$async33658.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async33658");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33658.
 */
cljs.core.async.__GT_t_cljs$core$async33658 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async33658(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33659){
return (new cljs.core.async.t_cljs$core$async33658(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta33659));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async33658(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__32544__auto___33778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___33778,mults,ensure_mult,p){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___33778,mults,ensure_mult,p){
return (function (state_33732){
var state_val_33733 = (state_33732[(1)]);
if((state_val_33733 === (7))){
var inst_33728 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33734_33779 = state_33732__$1;
(statearr_33734_33779[(2)] = inst_33728);

(statearr_33734_33779[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (20))){
var state_33732__$1 = state_33732;
var statearr_33735_33780 = state_33732__$1;
(statearr_33735_33780[(2)] = null);

(statearr_33735_33780[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (1))){
var state_33732__$1 = state_33732;
var statearr_33736_33781 = state_33732__$1;
(statearr_33736_33781[(2)] = null);

(statearr_33736_33781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (24))){
var inst_33711 = (state_33732[(7)]);
var inst_33720 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33711);
var state_33732__$1 = state_33732;
var statearr_33737_33782 = state_33732__$1;
(statearr_33737_33782[(2)] = inst_33720);

(statearr_33737_33782[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (4))){
var inst_33663 = (state_33732[(8)]);
var inst_33663__$1 = (state_33732[(2)]);
var inst_33664 = (inst_33663__$1 == null);
var state_33732__$1 = (function (){var statearr_33738 = state_33732;
(statearr_33738[(8)] = inst_33663__$1);

return statearr_33738;
})();
if(cljs.core.truth_(inst_33664)){
var statearr_33739_33783 = state_33732__$1;
(statearr_33739_33783[(1)] = (5));

} else {
var statearr_33740_33784 = state_33732__$1;
(statearr_33740_33784[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (15))){
var inst_33705 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33741_33785 = state_33732__$1;
(statearr_33741_33785[(2)] = inst_33705);

(statearr_33741_33785[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (21))){
var inst_33725 = (state_33732[(2)]);
var state_33732__$1 = (function (){var statearr_33742 = state_33732;
(statearr_33742[(9)] = inst_33725);

return statearr_33742;
})();
var statearr_33743_33786 = state_33732__$1;
(statearr_33743_33786[(2)] = null);

(statearr_33743_33786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (13))){
var inst_33687 = (state_33732[(10)]);
var inst_33689 = cljs.core.chunked_seq_QMARK_.call(null,inst_33687);
var state_33732__$1 = state_33732;
if(inst_33689){
var statearr_33744_33787 = state_33732__$1;
(statearr_33744_33787[(1)] = (16));

} else {
var statearr_33745_33788 = state_33732__$1;
(statearr_33745_33788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (22))){
var inst_33717 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
if(cljs.core.truth_(inst_33717)){
var statearr_33746_33789 = state_33732__$1;
(statearr_33746_33789[(1)] = (23));

} else {
var statearr_33747_33790 = state_33732__$1;
(statearr_33747_33790[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (6))){
var inst_33663 = (state_33732[(8)]);
var inst_33713 = (state_33732[(11)]);
var inst_33711 = (state_33732[(7)]);
var inst_33711__$1 = topic_fn.call(null,inst_33663);
var inst_33712 = cljs.core.deref.call(null,mults);
var inst_33713__$1 = cljs.core.get.call(null,inst_33712,inst_33711__$1);
var state_33732__$1 = (function (){var statearr_33748 = state_33732;
(statearr_33748[(11)] = inst_33713__$1);

(statearr_33748[(7)] = inst_33711__$1);

return statearr_33748;
})();
if(cljs.core.truth_(inst_33713__$1)){
var statearr_33749_33791 = state_33732__$1;
(statearr_33749_33791[(1)] = (19));

} else {
var statearr_33750_33792 = state_33732__$1;
(statearr_33750_33792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (25))){
var inst_33722 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33751_33793 = state_33732__$1;
(statearr_33751_33793[(2)] = inst_33722);

(statearr_33751_33793[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (17))){
var inst_33687 = (state_33732[(10)]);
var inst_33696 = cljs.core.first.call(null,inst_33687);
var inst_33697 = cljs.core.async.muxch_STAR_.call(null,inst_33696);
var inst_33698 = cljs.core.async.close_BANG_.call(null,inst_33697);
var inst_33699 = cljs.core.next.call(null,inst_33687);
var inst_33673 = inst_33699;
var inst_33674 = null;
var inst_33675 = (0);
var inst_33676 = (0);
var state_33732__$1 = (function (){var statearr_33752 = state_33732;
(statearr_33752[(12)] = inst_33676);

(statearr_33752[(13)] = inst_33674);

(statearr_33752[(14)] = inst_33675);

(statearr_33752[(15)] = inst_33673);

(statearr_33752[(16)] = inst_33698);

return statearr_33752;
})();
var statearr_33753_33794 = state_33732__$1;
(statearr_33753_33794[(2)] = null);

(statearr_33753_33794[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (3))){
var inst_33730 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33732__$1,inst_33730);
} else {
if((state_val_33733 === (12))){
var inst_33707 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33754_33795 = state_33732__$1;
(statearr_33754_33795[(2)] = inst_33707);

(statearr_33754_33795[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (2))){
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33732__$1,(4),ch);
} else {
if((state_val_33733 === (23))){
var state_33732__$1 = state_33732;
var statearr_33755_33796 = state_33732__$1;
(statearr_33755_33796[(2)] = null);

(statearr_33755_33796[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (19))){
var inst_33663 = (state_33732[(8)]);
var inst_33713 = (state_33732[(11)]);
var inst_33715 = cljs.core.async.muxch_STAR_.call(null,inst_33713);
var state_33732__$1 = state_33732;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33732__$1,(22),inst_33715,inst_33663);
} else {
if((state_val_33733 === (11))){
var inst_33687 = (state_33732[(10)]);
var inst_33673 = (state_33732[(15)]);
var inst_33687__$1 = cljs.core.seq.call(null,inst_33673);
var state_33732__$1 = (function (){var statearr_33756 = state_33732;
(statearr_33756[(10)] = inst_33687__$1);

return statearr_33756;
})();
if(inst_33687__$1){
var statearr_33757_33797 = state_33732__$1;
(statearr_33757_33797[(1)] = (13));

} else {
var statearr_33758_33798 = state_33732__$1;
(statearr_33758_33798[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (9))){
var inst_33709 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33759_33799 = state_33732__$1;
(statearr_33759_33799[(2)] = inst_33709);

(statearr_33759_33799[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (5))){
var inst_33670 = cljs.core.deref.call(null,mults);
var inst_33671 = cljs.core.vals.call(null,inst_33670);
var inst_33672 = cljs.core.seq.call(null,inst_33671);
var inst_33673 = inst_33672;
var inst_33674 = null;
var inst_33675 = (0);
var inst_33676 = (0);
var state_33732__$1 = (function (){var statearr_33760 = state_33732;
(statearr_33760[(12)] = inst_33676);

(statearr_33760[(13)] = inst_33674);

(statearr_33760[(14)] = inst_33675);

(statearr_33760[(15)] = inst_33673);

return statearr_33760;
})();
var statearr_33761_33800 = state_33732__$1;
(statearr_33761_33800[(2)] = null);

(statearr_33761_33800[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (14))){
var state_33732__$1 = state_33732;
var statearr_33765_33801 = state_33732__$1;
(statearr_33765_33801[(2)] = null);

(statearr_33765_33801[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (16))){
var inst_33687 = (state_33732[(10)]);
var inst_33691 = cljs.core.chunk_first.call(null,inst_33687);
var inst_33692 = cljs.core.chunk_rest.call(null,inst_33687);
var inst_33693 = cljs.core.count.call(null,inst_33691);
var inst_33673 = inst_33692;
var inst_33674 = inst_33691;
var inst_33675 = inst_33693;
var inst_33676 = (0);
var state_33732__$1 = (function (){var statearr_33766 = state_33732;
(statearr_33766[(12)] = inst_33676);

(statearr_33766[(13)] = inst_33674);

(statearr_33766[(14)] = inst_33675);

(statearr_33766[(15)] = inst_33673);

return statearr_33766;
})();
var statearr_33767_33802 = state_33732__$1;
(statearr_33767_33802[(2)] = null);

(statearr_33767_33802[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (10))){
var inst_33676 = (state_33732[(12)]);
var inst_33674 = (state_33732[(13)]);
var inst_33675 = (state_33732[(14)]);
var inst_33673 = (state_33732[(15)]);
var inst_33681 = cljs.core._nth.call(null,inst_33674,inst_33676);
var inst_33682 = cljs.core.async.muxch_STAR_.call(null,inst_33681);
var inst_33683 = cljs.core.async.close_BANG_.call(null,inst_33682);
var inst_33684 = (inst_33676 + (1));
var tmp33762 = inst_33674;
var tmp33763 = inst_33675;
var tmp33764 = inst_33673;
var inst_33673__$1 = tmp33764;
var inst_33674__$1 = tmp33762;
var inst_33675__$1 = tmp33763;
var inst_33676__$1 = inst_33684;
var state_33732__$1 = (function (){var statearr_33768 = state_33732;
(statearr_33768[(12)] = inst_33676__$1);

(statearr_33768[(13)] = inst_33674__$1);

(statearr_33768[(14)] = inst_33675__$1);

(statearr_33768[(15)] = inst_33673__$1);

(statearr_33768[(17)] = inst_33683);

return statearr_33768;
})();
var statearr_33769_33803 = state_33732__$1;
(statearr_33769_33803[(2)] = null);

(statearr_33769_33803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (18))){
var inst_33702 = (state_33732[(2)]);
var state_33732__$1 = state_33732;
var statearr_33770_33804 = state_33732__$1;
(statearr_33770_33804[(2)] = inst_33702);

(statearr_33770_33804[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33733 === (8))){
var inst_33676 = (state_33732[(12)]);
var inst_33675 = (state_33732[(14)]);
var inst_33678 = (inst_33676 < inst_33675);
var inst_33679 = inst_33678;
var state_33732__$1 = state_33732;
if(cljs.core.truth_(inst_33679)){
var statearr_33771_33805 = state_33732__$1;
(statearr_33771_33805[(1)] = (10));

} else {
var statearr_33772_33806 = state_33732__$1;
(statearr_33772_33806[(1)] = (11));

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
});})(c__32544__auto___33778,mults,ensure_mult,p))
;
return ((function (switch__32449__auto__,c__32544__auto___33778,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_33773 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33773[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_33773[(1)] = (1));

return statearr_33773;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_33732){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_33732);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e33774){if((e33774 instanceof Object)){
var ex__32453__auto__ = e33774;
var statearr_33775_33807 = state_33732;
(statearr_33775_33807[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33732);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33774;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33808 = state_33732;
state_33732 = G__33808;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_33732){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_33732);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___33778,mults,ensure_mult,p))
})();
var state__32546__auto__ = (function (){var statearr_33776 = f__32545__auto__.call(null);
(statearr_33776[(6)] = c__32544__auto___33778);

return statearr_33776;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___33778,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__33810 = arguments.length;
switch (G__33810) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__33813 = arguments.length;
switch (G__33813) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__33816 = arguments.length;
switch (G__33816) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__32544__auto___33883 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___33883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___33883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_33855){
var state_val_33856 = (state_33855[(1)]);
if((state_val_33856 === (7))){
var state_33855__$1 = state_33855;
var statearr_33857_33884 = state_33855__$1;
(statearr_33857_33884[(2)] = null);

(statearr_33857_33884[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (1))){
var state_33855__$1 = state_33855;
var statearr_33858_33885 = state_33855__$1;
(statearr_33858_33885[(2)] = null);

(statearr_33858_33885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (4))){
var inst_33819 = (state_33855[(7)]);
var inst_33821 = (inst_33819 < cnt);
var state_33855__$1 = state_33855;
if(cljs.core.truth_(inst_33821)){
var statearr_33859_33886 = state_33855__$1;
(statearr_33859_33886[(1)] = (6));

} else {
var statearr_33860_33887 = state_33855__$1;
(statearr_33860_33887[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (15))){
var inst_33851 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
var statearr_33861_33888 = state_33855__$1;
(statearr_33861_33888[(2)] = inst_33851);

(statearr_33861_33888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (13))){
var inst_33844 = cljs.core.async.close_BANG_.call(null,out);
var state_33855__$1 = state_33855;
var statearr_33862_33889 = state_33855__$1;
(statearr_33862_33889[(2)] = inst_33844);

(statearr_33862_33889[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (6))){
var state_33855__$1 = state_33855;
var statearr_33863_33890 = state_33855__$1;
(statearr_33863_33890[(2)] = null);

(statearr_33863_33890[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (3))){
var inst_33853 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33855__$1,inst_33853);
} else {
if((state_val_33856 === (12))){
var inst_33841 = (state_33855[(8)]);
var inst_33841__$1 = (state_33855[(2)]);
var inst_33842 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33841__$1);
var state_33855__$1 = (function (){var statearr_33864 = state_33855;
(statearr_33864[(8)] = inst_33841__$1);

return statearr_33864;
})();
if(cljs.core.truth_(inst_33842)){
var statearr_33865_33891 = state_33855__$1;
(statearr_33865_33891[(1)] = (13));

} else {
var statearr_33866_33892 = state_33855__$1;
(statearr_33866_33892[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (2))){
var inst_33818 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_33819 = (0);
var state_33855__$1 = (function (){var statearr_33867 = state_33855;
(statearr_33867[(9)] = inst_33818);

(statearr_33867[(7)] = inst_33819);

return statearr_33867;
})();
var statearr_33868_33893 = state_33855__$1;
(statearr_33868_33893[(2)] = null);

(statearr_33868_33893[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (11))){
var inst_33819 = (state_33855[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33855,(10),Object,null,(9));
var inst_33828 = chs__$1.call(null,inst_33819);
var inst_33829 = done.call(null,inst_33819);
var inst_33830 = cljs.core.async.take_BANG_.call(null,inst_33828,inst_33829);
var state_33855__$1 = state_33855;
var statearr_33869_33894 = state_33855__$1;
(statearr_33869_33894[(2)] = inst_33830);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33855__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (9))){
var inst_33819 = (state_33855[(7)]);
var inst_33832 = (state_33855[(2)]);
var inst_33833 = (inst_33819 + (1));
var inst_33819__$1 = inst_33833;
var state_33855__$1 = (function (){var statearr_33870 = state_33855;
(statearr_33870[(10)] = inst_33832);

(statearr_33870[(7)] = inst_33819__$1);

return statearr_33870;
})();
var statearr_33871_33895 = state_33855__$1;
(statearr_33871_33895[(2)] = null);

(statearr_33871_33895[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (5))){
var inst_33839 = (state_33855[(2)]);
var state_33855__$1 = (function (){var statearr_33872 = state_33855;
(statearr_33872[(11)] = inst_33839);

return statearr_33872;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33855__$1,(12),dchan);
} else {
if((state_val_33856 === (14))){
var inst_33841 = (state_33855[(8)]);
var inst_33846 = cljs.core.apply.call(null,f,inst_33841);
var state_33855__$1 = state_33855;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33855__$1,(16),out,inst_33846);
} else {
if((state_val_33856 === (16))){
var inst_33848 = (state_33855[(2)]);
var state_33855__$1 = (function (){var statearr_33873 = state_33855;
(statearr_33873[(12)] = inst_33848);

return statearr_33873;
})();
var statearr_33874_33896 = state_33855__$1;
(statearr_33874_33896[(2)] = null);

(statearr_33874_33896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (10))){
var inst_33823 = (state_33855[(2)]);
var inst_33824 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_33855__$1 = (function (){var statearr_33875 = state_33855;
(statearr_33875[(13)] = inst_33823);

return statearr_33875;
})();
var statearr_33876_33897 = state_33855__$1;
(statearr_33876_33897[(2)] = inst_33824);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33855__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33856 === (8))){
var inst_33837 = (state_33855[(2)]);
var state_33855__$1 = state_33855;
var statearr_33877_33898 = state_33855__$1;
(statearr_33877_33898[(2)] = inst_33837);

(statearr_33877_33898[(1)] = (5));


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
});})(c__32544__auto___33883,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__32449__auto__,c__32544__auto___33883,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_33878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33878[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_33878[(1)] = (1));

return statearr_33878;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_33855){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_33855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e33879){if((e33879 instanceof Object)){
var ex__32453__auto__ = e33879;
var statearr_33880_33899 = state_33855;
(statearr_33880_33899[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33900 = state_33855;
state_33855 = G__33900;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_33855){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_33855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___33883,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__32546__auto__ = (function (){var statearr_33881 = f__32545__auto__.call(null);
(statearr_33881[(6)] = c__32544__auto___33883);

return statearr_33881;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___33883,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__33903 = arguments.length;
switch (G__33903) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32544__auto___33957 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___33957,out){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___33957,out){
return (function (state_33935){
var state_val_33936 = (state_33935[(1)]);
if((state_val_33936 === (7))){
var inst_33914 = (state_33935[(7)]);
var inst_33915 = (state_33935[(8)]);
var inst_33914__$1 = (state_33935[(2)]);
var inst_33915__$1 = cljs.core.nth.call(null,inst_33914__$1,(0),null);
var inst_33916 = cljs.core.nth.call(null,inst_33914__$1,(1),null);
var inst_33917 = (inst_33915__$1 == null);
var state_33935__$1 = (function (){var statearr_33937 = state_33935;
(statearr_33937[(7)] = inst_33914__$1);

(statearr_33937[(9)] = inst_33916);

(statearr_33937[(8)] = inst_33915__$1);

return statearr_33937;
})();
if(cljs.core.truth_(inst_33917)){
var statearr_33938_33958 = state_33935__$1;
(statearr_33938_33958[(1)] = (8));

} else {
var statearr_33939_33959 = state_33935__$1;
(statearr_33939_33959[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (1))){
var inst_33904 = cljs.core.vec.call(null,chs);
var inst_33905 = inst_33904;
var state_33935__$1 = (function (){var statearr_33940 = state_33935;
(statearr_33940[(10)] = inst_33905);

return statearr_33940;
})();
var statearr_33941_33960 = state_33935__$1;
(statearr_33941_33960[(2)] = null);

(statearr_33941_33960[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (4))){
var inst_33905 = (state_33935[(10)]);
var state_33935__$1 = state_33935;
return cljs.core.async.ioc_alts_BANG_.call(null,state_33935__$1,(7),inst_33905);
} else {
if((state_val_33936 === (6))){
var inst_33931 = (state_33935[(2)]);
var state_33935__$1 = state_33935;
var statearr_33942_33961 = state_33935__$1;
(statearr_33942_33961[(2)] = inst_33931);

(statearr_33942_33961[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (3))){
var inst_33933 = (state_33935[(2)]);
var state_33935__$1 = state_33935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33935__$1,inst_33933);
} else {
if((state_val_33936 === (2))){
var inst_33905 = (state_33935[(10)]);
var inst_33907 = cljs.core.count.call(null,inst_33905);
var inst_33908 = (inst_33907 > (0));
var state_33935__$1 = state_33935;
if(cljs.core.truth_(inst_33908)){
var statearr_33944_33962 = state_33935__$1;
(statearr_33944_33962[(1)] = (4));

} else {
var statearr_33945_33963 = state_33935__$1;
(statearr_33945_33963[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (11))){
var inst_33905 = (state_33935[(10)]);
var inst_33924 = (state_33935[(2)]);
var tmp33943 = inst_33905;
var inst_33905__$1 = tmp33943;
var state_33935__$1 = (function (){var statearr_33946 = state_33935;
(statearr_33946[(11)] = inst_33924);

(statearr_33946[(10)] = inst_33905__$1);

return statearr_33946;
})();
var statearr_33947_33964 = state_33935__$1;
(statearr_33947_33964[(2)] = null);

(statearr_33947_33964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (9))){
var inst_33915 = (state_33935[(8)]);
var state_33935__$1 = state_33935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33935__$1,(11),out,inst_33915);
} else {
if((state_val_33936 === (5))){
var inst_33929 = cljs.core.async.close_BANG_.call(null,out);
var state_33935__$1 = state_33935;
var statearr_33948_33965 = state_33935__$1;
(statearr_33948_33965[(2)] = inst_33929);

(statearr_33948_33965[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (10))){
var inst_33927 = (state_33935[(2)]);
var state_33935__$1 = state_33935;
var statearr_33949_33966 = state_33935__$1;
(statearr_33949_33966[(2)] = inst_33927);

(statearr_33949_33966[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33936 === (8))){
var inst_33905 = (state_33935[(10)]);
var inst_33914 = (state_33935[(7)]);
var inst_33916 = (state_33935[(9)]);
var inst_33915 = (state_33935[(8)]);
var inst_33919 = (function (){var cs = inst_33905;
var vec__33910 = inst_33914;
var v = inst_33915;
var c = inst_33916;
return ((function (cs,vec__33910,v,c,inst_33905,inst_33914,inst_33916,inst_33915,state_val_33936,c__32544__auto___33957,out){
return (function (p1__33901_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__33901_SHARP_);
});
;})(cs,vec__33910,v,c,inst_33905,inst_33914,inst_33916,inst_33915,state_val_33936,c__32544__auto___33957,out))
})();
var inst_33920 = cljs.core.filterv.call(null,inst_33919,inst_33905);
var inst_33905__$1 = inst_33920;
var state_33935__$1 = (function (){var statearr_33950 = state_33935;
(statearr_33950[(10)] = inst_33905__$1);

return statearr_33950;
})();
var statearr_33951_33967 = state_33935__$1;
(statearr_33951_33967[(2)] = null);

(statearr_33951_33967[(1)] = (2));


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
});})(c__32544__auto___33957,out))
;
return ((function (switch__32449__auto__,c__32544__auto___33957,out){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_33952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33952[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_33952[(1)] = (1));

return statearr_33952;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_33935){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_33935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e33953){if((e33953 instanceof Object)){
var ex__32453__auto__ = e33953;
var statearr_33954_33968 = state_33935;
(statearr_33954_33968[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33969 = state_33935;
state_33935 = G__33969;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_33935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_33935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___33957,out))
})();
var state__32546__auto__ = (function (){var statearr_33955 = f__32545__auto__.call(null);
(statearr_33955[(6)] = c__32544__auto___33957);

return statearr_33955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___33957,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__33971 = arguments.length;
switch (G__33971) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32544__auto___34016 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___34016,out){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___34016,out){
return (function (state_33995){
var state_val_33996 = (state_33995[(1)]);
if((state_val_33996 === (7))){
var inst_33977 = (state_33995[(7)]);
var inst_33977__$1 = (state_33995[(2)]);
var inst_33978 = (inst_33977__$1 == null);
var inst_33979 = cljs.core.not.call(null,inst_33978);
var state_33995__$1 = (function (){var statearr_33997 = state_33995;
(statearr_33997[(7)] = inst_33977__$1);

return statearr_33997;
})();
if(inst_33979){
var statearr_33998_34017 = state_33995__$1;
(statearr_33998_34017[(1)] = (8));

} else {
var statearr_33999_34018 = state_33995__$1;
(statearr_33999_34018[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (1))){
var inst_33972 = (0);
var state_33995__$1 = (function (){var statearr_34000 = state_33995;
(statearr_34000[(8)] = inst_33972);

return statearr_34000;
})();
var statearr_34001_34019 = state_33995__$1;
(statearr_34001_34019[(2)] = null);

(statearr_34001_34019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (4))){
var state_33995__$1 = state_33995;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33995__$1,(7),ch);
} else {
if((state_val_33996 === (6))){
var inst_33990 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
var statearr_34002_34020 = state_33995__$1;
(statearr_34002_34020[(2)] = inst_33990);

(statearr_34002_34020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (3))){
var inst_33992 = (state_33995[(2)]);
var inst_33993 = cljs.core.async.close_BANG_.call(null,out);
var state_33995__$1 = (function (){var statearr_34003 = state_33995;
(statearr_34003[(9)] = inst_33992);

return statearr_34003;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33995__$1,inst_33993);
} else {
if((state_val_33996 === (2))){
var inst_33972 = (state_33995[(8)]);
var inst_33974 = (inst_33972 < n);
var state_33995__$1 = state_33995;
if(cljs.core.truth_(inst_33974)){
var statearr_34004_34021 = state_33995__$1;
(statearr_34004_34021[(1)] = (4));

} else {
var statearr_34005_34022 = state_33995__$1;
(statearr_34005_34022[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (11))){
var inst_33972 = (state_33995[(8)]);
var inst_33982 = (state_33995[(2)]);
var inst_33983 = (inst_33972 + (1));
var inst_33972__$1 = inst_33983;
var state_33995__$1 = (function (){var statearr_34006 = state_33995;
(statearr_34006[(10)] = inst_33982);

(statearr_34006[(8)] = inst_33972__$1);

return statearr_34006;
})();
var statearr_34007_34023 = state_33995__$1;
(statearr_34007_34023[(2)] = null);

(statearr_34007_34023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (9))){
var state_33995__$1 = state_33995;
var statearr_34008_34024 = state_33995__$1;
(statearr_34008_34024[(2)] = null);

(statearr_34008_34024[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (5))){
var state_33995__$1 = state_33995;
var statearr_34009_34025 = state_33995__$1;
(statearr_34009_34025[(2)] = null);

(statearr_34009_34025[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (10))){
var inst_33987 = (state_33995[(2)]);
var state_33995__$1 = state_33995;
var statearr_34010_34026 = state_33995__$1;
(statearr_34010_34026[(2)] = inst_33987);

(statearr_34010_34026[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33996 === (8))){
var inst_33977 = (state_33995[(7)]);
var state_33995__$1 = state_33995;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33995__$1,(11),out,inst_33977);
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
});})(c__32544__auto___34016,out))
;
return ((function (switch__32449__auto__,c__32544__auto___34016,out){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_34011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34011[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_34011[(1)] = (1));

return statearr_34011;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_33995){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_33995);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e34012){if((e34012 instanceof Object)){
var ex__32453__auto__ = e34012;
var statearr_34013_34027 = state_33995;
(statearr_34013_34027[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33995);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34028 = state_33995;
state_33995 = G__34028;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_33995){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_33995);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___34016,out))
})();
var state__32546__auto__ = (function (){var statearr_34014 = f__32545__auto__.call(null);
(statearr_34014[(6)] = c__32544__auto___34016);

return statearr_34014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___34016,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34030 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34030 = (function (f,ch,meta34031){
this.f = f;
this.ch = ch;
this.meta34031 = meta34031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34032,meta34031__$1){
var self__ = this;
var _34032__$1 = this;
return (new cljs.core.async.t_cljs$core$async34030(self__.f,self__.ch,meta34031__$1));
});

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34032){
var self__ = this;
var _34032__$1 = this;
return self__.meta34031;
});

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34033 = (function (f,ch,meta34031,_,fn1,meta34034){
this.f = f;
this.ch = ch;
this.meta34031 = meta34031;
this._ = _;
this.fn1 = fn1;
this.meta34034 = meta34034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34035,meta34034__$1){
var self__ = this;
var _34035__$1 = this;
return (new cljs.core.async.t_cljs$core$async34033(self__.f,self__.ch,self__.meta34031,self__._,self__.fn1,meta34034__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34033.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34035){
var self__ = this;
var _34035__$1 = this;
return self__.meta34034;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34033.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34033.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34033.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34033.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34029_SHARP_){
return f1.call(null,(((p1__34029_SHARP_ == null))?null:self__.f.call(null,p1__34029_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34033.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34031","meta34031",165616303,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34030","cljs.core.async/t_cljs$core$async34030",-848530491,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34034","meta34034",1567245706,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34033.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34033.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34033";

cljs.core.async.t_cljs$core$async34033.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34033");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34033.
 */
cljs.core.async.__GT_t_cljs$core$async34033 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34033(f__$1,ch__$1,meta34031__$1,___$2,fn1__$1,meta34034){
return (new cljs.core.async.t_cljs$core$async34033(f__$1,ch__$1,meta34031__$1,___$2,fn1__$1,meta34034));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34033(self__.f,self__.ch,self__.meta34031,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4120__auto__ = ret;
if(cljs.core.truth_(and__4120__auto__)){
return (!((cljs.core.deref.call(null,ret) == null)));
} else {
return and__4120__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34030.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34031","meta34031",165616303,null)], null);
});

cljs.core.async.t_cljs$core$async34030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34030";

cljs.core.async.t_cljs$core$async34030.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34030");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34030.
 */
cljs.core.async.__GT_t_cljs$core$async34030 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34030(f__$1,ch__$1,meta34031){
return (new cljs.core.async.t_cljs$core$async34030(f__$1,ch__$1,meta34031));
});

}

return (new cljs.core.async.t_cljs$core$async34030(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34036 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34036 = (function (f,ch,meta34037){
this.f = f;
this.ch = ch;
this.meta34037 = meta34037;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34036.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34038,meta34037__$1){
var self__ = this;
var _34038__$1 = this;
return (new cljs.core.async.t_cljs$core$async34036(self__.f,self__.ch,meta34037__$1));
});

cljs.core.async.t_cljs$core$async34036.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34038){
var self__ = this;
var _34038__$1 = this;
return self__.meta34037;
});

cljs.core.async.t_cljs$core$async34036.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34036.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34036.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34036.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34036.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34036.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34036.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34037","meta34037",-111951592,null)], null);
});

cljs.core.async.t_cljs$core$async34036.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34036.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34036";

cljs.core.async.t_cljs$core$async34036.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34036");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34036.
 */
cljs.core.async.__GT_t_cljs$core$async34036 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34036(f__$1,ch__$1,meta34037){
return (new cljs.core.async.t_cljs$core$async34036(f__$1,ch__$1,meta34037));
});

}

return (new cljs.core.async.t_cljs$core$async34036(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async34039 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34039 = (function (p,ch,meta34040){
this.p = p;
this.ch = ch;
this.meta34040 = meta34040;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34041,meta34040__$1){
var self__ = this;
var _34041__$1 = this;
return (new cljs.core.async.t_cljs$core$async34039(self__.p,self__.ch,meta34040__$1));
});

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34041){
var self__ = this;
var _34041__$1 = this;
return self__.meta34040;
});

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34039.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34040","meta34040",-1340622196,null)], null);
});

cljs.core.async.t_cljs$core$async34039.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34039.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34039";

cljs.core.async.t_cljs$core$async34039.cljs$lang$ctorPrWriter = (function (this__4374__auto__,writer__4375__auto__,opt__4376__auto__){
return cljs.core._write.call(null,writer__4375__auto__,"cljs.core.async/t_cljs$core$async34039");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34039.
 */
cljs.core.async.__GT_t_cljs$core$async34039 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34039(p__$1,ch__$1,meta34040){
return (new cljs.core.async.t_cljs$core$async34039(p__$1,ch__$1,meta34040));
});

}

return (new cljs.core.async.t_cljs$core$async34039(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__34043 = arguments.length;
switch (G__34043) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32544__auto___34083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___34083,out){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___34083,out){
return (function (state_34064){
var state_val_34065 = (state_34064[(1)]);
if((state_val_34065 === (7))){
var inst_34060 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34066_34084 = state_34064__$1;
(statearr_34066_34084[(2)] = inst_34060);

(statearr_34066_34084[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (1))){
var state_34064__$1 = state_34064;
var statearr_34067_34085 = state_34064__$1;
(statearr_34067_34085[(2)] = null);

(statearr_34067_34085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (4))){
var inst_34046 = (state_34064[(7)]);
var inst_34046__$1 = (state_34064[(2)]);
var inst_34047 = (inst_34046__$1 == null);
var state_34064__$1 = (function (){var statearr_34068 = state_34064;
(statearr_34068[(7)] = inst_34046__$1);

return statearr_34068;
})();
if(cljs.core.truth_(inst_34047)){
var statearr_34069_34086 = state_34064__$1;
(statearr_34069_34086[(1)] = (5));

} else {
var statearr_34070_34087 = state_34064__$1;
(statearr_34070_34087[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (6))){
var inst_34046 = (state_34064[(7)]);
var inst_34051 = p.call(null,inst_34046);
var state_34064__$1 = state_34064;
if(cljs.core.truth_(inst_34051)){
var statearr_34071_34088 = state_34064__$1;
(statearr_34071_34088[(1)] = (8));

} else {
var statearr_34072_34089 = state_34064__$1;
(statearr_34072_34089[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (3))){
var inst_34062 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34064__$1,inst_34062);
} else {
if((state_val_34065 === (2))){
var state_34064__$1 = state_34064;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34064__$1,(4),ch);
} else {
if((state_val_34065 === (11))){
var inst_34054 = (state_34064[(2)]);
var state_34064__$1 = state_34064;
var statearr_34073_34090 = state_34064__$1;
(statearr_34073_34090[(2)] = inst_34054);

(statearr_34073_34090[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (9))){
var state_34064__$1 = state_34064;
var statearr_34074_34091 = state_34064__$1;
(statearr_34074_34091[(2)] = null);

(statearr_34074_34091[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (5))){
var inst_34049 = cljs.core.async.close_BANG_.call(null,out);
var state_34064__$1 = state_34064;
var statearr_34075_34092 = state_34064__$1;
(statearr_34075_34092[(2)] = inst_34049);

(statearr_34075_34092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (10))){
var inst_34057 = (state_34064[(2)]);
var state_34064__$1 = (function (){var statearr_34076 = state_34064;
(statearr_34076[(8)] = inst_34057);

return statearr_34076;
})();
var statearr_34077_34093 = state_34064__$1;
(statearr_34077_34093[(2)] = null);

(statearr_34077_34093[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34065 === (8))){
var inst_34046 = (state_34064[(7)]);
var state_34064__$1 = state_34064;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34064__$1,(11),out,inst_34046);
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
});})(c__32544__auto___34083,out))
;
return ((function (switch__32449__auto__,c__32544__auto___34083,out){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_34078 = [null,null,null,null,null,null,null,null,null];
(statearr_34078[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_34078[(1)] = (1));

return statearr_34078;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_34064){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_34064);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e34079){if((e34079 instanceof Object)){
var ex__32453__auto__ = e34079;
var statearr_34080_34094 = state_34064;
(statearr_34080_34094[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34064);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34079;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34095 = state_34064;
state_34064 = G__34095;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_34064){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_34064);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___34083,out))
})();
var state__32546__auto__ = (function (){var statearr_34081 = f__32545__auto__.call(null);
(statearr_34081[(6)] = c__32544__auto___34083);

return statearr_34081;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___34083,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34097 = arguments.length;
switch (G__34097) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__32544__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto__){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto__){
return (function (state_34160){
var state_val_34161 = (state_34160[(1)]);
if((state_val_34161 === (7))){
var inst_34156 = (state_34160[(2)]);
var state_34160__$1 = state_34160;
var statearr_34162_34200 = state_34160__$1;
(statearr_34162_34200[(2)] = inst_34156);

(statearr_34162_34200[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (20))){
var inst_34126 = (state_34160[(7)]);
var inst_34137 = (state_34160[(2)]);
var inst_34138 = cljs.core.next.call(null,inst_34126);
var inst_34112 = inst_34138;
var inst_34113 = null;
var inst_34114 = (0);
var inst_34115 = (0);
var state_34160__$1 = (function (){var statearr_34163 = state_34160;
(statearr_34163[(8)] = inst_34115);

(statearr_34163[(9)] = inst_34113);

(statearr_34163[(10)] = inst_34112);

(statearr_34163[(11)] = inst_34137);

(statearr_34163[(12)] = inst_34114);

return statearr_34163;
})();
var statearr_34164_34201 = state_34160__$1;
(statearr_34164_34201[(2)] = null);

(statearr_34164_34201[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (1))){
var state_34160__$1 = state_34160;
var statearr_34165_34202 = state_34160__$1;
(statearr_34165_34202[(2)] = null);

(statearr_34165_34202[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (4))){
var inst_34101 = (state_34160[(13)]);
var inst_34101__$1 = (state_34160[(2)]);
var inst_34102 = (inst_34101__$1 == null);
var state_34160__$1 = (function (){var statearr_34166 = state_34160;
(statearr_34166[(13)] = inst_34101__$1);

return statearr_34166;
})();
if(cljs.core.truth_(inst_34102)){
var statearr_34167_34203 = state_34160__$1;
(statearr_34167_34203[(1)] = (5));

} else {
var statearr_34168_34204 = state_34160__$1;
(statearr_34168_34204[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (15))){
var state_34160__$1 = state_34160;
var statearr_34172_34205 = state_34160__$1;
(statearr_34172_34205[(2)] = null);

(statearr_34172_34205[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (21))){
var state_34160__$1 = state_34160;
var statearr_34173_34206 = state_34160__$1;
(statearr_34173_34206[(2)] = null);

(statearr_34173_34206[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (13))){
var inst_34115 = (state_34160[(8)]);
var inst_34113 = (state_34160[(9)]);
var inst_34112 = (state_34160[(10)]);
var inst_34114 = (state_34160[(12)]);
var inst_34122 = (state_34160[(2)]);
var inst_34123 = (inst_34115 + (1));
var tmp34169 = inst_34113;
var tmp34170 = inst_34112;
var tmp34171 = inst_34114;
var inst_34112__$1 = tmp34170;
var inst_34113__$1 = tmp34169;
var inst_34114__$1 = tmp34171;
var inst_34115__$1 = inst_34123;
var state_34160__$1 = (function (){var statearr_34174 = state_34160;
(statearr_34174[(14)] = inst_34122);

(statearr_34174[(8)] = inst_34115__$1);

(statearr_34174[(9)] = inst_34113__$1);

(statearr_34174[(10)] = inst_34112__$1);

(statearr_34174[(12)] = inst_34114__$1);

return statearr_34174;
})();
var statearr_34175_34207 = state_34160__$1;
(statearr_34175_34207[(2)] = null);

(statearr_34175_34207[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (22))){
var state_34160__$1 = state_34160;
var statearr_34176_34208 = state_34160__$1;
(statearr_34176_34208[(2)] = null);

(statearr_34176_34208[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (6))){
var inst_34101 = (state_34160[(13)]);
var inst_34110 = f.call(null,inst_34101);
var inst_34111 = cljs.core.seq.call(null,inst_34110);
var inst_34112 = inst_34111;
var inst_34113 = null;
var inst_34114 = (0);
var inst_34115 = (0);
var state_34160__$1 = (function (){var statearr_34177 = state_34160;
(statearr_34177[(8)] = inst_34115);

(statearr_34177[(9)] = inst_34113);

(statearr_34177[(10)] = inst_34112);

(statearr_34177[(12)] = inst_34114);

return statearr_34177;
})();
var statearr_34178_34209 = state_34160__$1;
(statearr_34178_34209[(2)] = null);

(statearr_34178_34209[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (17))){
var inst_34126 = (state_34160[(7)]);
var inst_34130 = cljs.core.chunk_first.call(null,inst_34126);
var inst_34131 = cljs.core.chunk_rest.call(null,inst_34126);
var inst_34132 = cljs.core.count.call(null,inst_34130);
var inst_34112 = inst_34131;
var inst_34113 = inst_34130;
var inst_34114 = inst_34132;
var inst_34115 = (0);
var state_34160__$1 = (function (){var statearr_34179 = state_34160;
(statearr_34179[(8)] = inst_34115);

(statearr_34179[(9)] = inst_34113);

(statearr_34179[(10)] = inst_34112);

(statearr_34179[(12)] = inst_34114);

return statearr_34179;
})();
var statearr_34180_34210 = state_34160__$1;
(statearr_34180_34210[(2)] = null);

(statearr_34180_34210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (3))){
var inst_34158 = (state_34160[(2)]);
var state_34160__$1 = state_34160;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34160__$1,inst_34158);
} else {
if((state_val_34161 === (12))){
var inst_34146 = (state_34160[(2)]);
var state_34160__$1 = state_34160;
var statearr_34181_34211 = state_34160__$1;
(statearr_34181_34211[(2)] = inst_34146);

(statearr_34181_34211[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (2))){
var state_34160__$1 = state_34160;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34160__$1,(4),in$);
} else {
if((state_val_34161 === (23))){
var inst_34154 = (state_34160[(2)]);
var state_34160__$1 = state_34160;
var statearr_34182_34212 = state_34160__$1;
(statearr_34182_34212[(2)] = inst_34154);

(statearr_34182_34212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (19))){
var inst_34141 = (state_34160[(2)]);
var state_34160__$1 = state_34160;
var statearr_34183_34213 = state_34160__$1;
(statearr_34183_34213[(2)] = inst_34141);

(statearr_34183_34213[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (11))){
var inst_34112 = (state_34160[(10)]);
var inst_34126 = (state_34160[(7)]);
var inst_34126__$1 = cljs.core.seq.call(null,inst_34112);
var state_34160__$1 = (function (){var statearr_34184 = state_34160;
(statearr_34184[(7)] = inst_34126__$1);

return statearr_34184;
})();
if(inst_34126__$1){
var statearr_34185_34214 = state_34160__$1;
(statearr_34185_34214[(1)] = (14));

} else {
var statearr_34186_34215 = state_34160__$1;
(statearr_34186_34215[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (9))){
var inst_34148 = (state_34160[(2)]);
var inst_34149 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34160__$1 = (function (){var statearr_34187 = state_34160;
(statearr_34187[(15)] = inst_34148);

return statearr_34187;
})();
if(cljs.core.truth_(inst_34149)){
var statearr_34188_34216 = state_34160__$1;
(statearr_34188_34216[(1)] = (21));

} else {
var statearr_34189_34217 = state_34160__$1;
(statearr_34189_34217[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (5))){
var inst_34104 = cljs.core.async.close_BANG_.call(null,out);
var state_34160__$1 = state_34160;
var statearr_34190_34218 = state_34160__$1;
(statearr_34190_34218[(2)] = inst_34104);

(statearr_34190_34218[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (14))){
var inst_34126 = (state_34160[(7)]);
var inst_34128 = cljs.core.chunked_seq_QMARK_.call(null,inst_34126);
var state_34160__$1 = state_34160;
if(inst_34128){
var statearr_34191_34219 = state_34160__$1;
(statearr_34191_34219[(1)] = (17));

} else {
var statearr_34192_34220 = state_34160__$1;
(statearr_34192_34220[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (16))){
var inst_34144 = (state_34160[(2)]);
var state_34160__$1 = state_34160;
var statearr_34193_34221 = state_34160__$1;
(statearr_34193_34221[(2)] = inst_34144);

(statearr_34193_34221[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34161 === (10))){
var inst_34115 = (state_34160[(8)]);
var inst_34113 = (state_34160[(9)]);
var inst_34120 = cljs.core._nth.call(null,inst_34113,inst_34115);
var state_34160__$1 = state_34160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34160__$1,(13),out,inst_34120);
} else {
if((state_val_34161 === (18))){
var inst_34126 = (state_34160[(7)]);
var inst_34135 = cljs.core.first.call(null,inst_34126);
var state_34160__$1 = state_34160;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34160__$1,(20),out,inst_34135);
} else {
if((state_val_34161 === (8))){
var inst_34115 = (state_34160[(8)]);
var inst_34114 = (state_34160[(12)]);
var inst_34117 = (inst_34115 < inst_34114);
var inst_34118 = inst_34117;
var state_34160__$1 = state_34160;
if(cljs.core.truth_(inst_34118)){
var statearr_34194_34222 = state_34160__$1;
(statearr_34194_34222[(1)] = (10));

} else {
var statearr_34195_34223 = state_34160__$1;
(statearr_34195_34223[(1)] = (11));

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
});})(c__32544__auto__))
;
return ((function (switch__32449__auto__,c__32544__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__32450__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__32450__auto____0 = (function (){
var statearr_34196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34196[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__32450__auto__);

(statearr_34196[(1)] = (1));

return statearr_34196;
});
var cljs$core$async$mapcat_STAR__$_state_machine__32450__auto____1 = (function (state_34160){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_34160);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e34197){if((e34197 instanceof Object)){
var ex__32453__auto__ = e34197;
var statearr_34198_34224 = state_34160;
(statearr_34198_34224[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34160);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34197;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34225 = state_34160;
state_34160 = G__34225;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__32450__auto__ = function(state_34160){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__32450__auto____1.call(this,state_34160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__32450__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__32450__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto__))
})();
var state__32546__auto__ = (function (){var statearr_34199 = f__32545__auto__.call(null);
(statearr_34199[(6)] = c__32544__auto__);

return statearr_34199;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto__))
);

return c__32544__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34227 = arguments.length;
switch (G__34227) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__34230 = arguments.length;
switch (G__34230) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__34233 = arguments.length;
switch (G__34233) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32544__auto___34280 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___34280,out){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___34280,out){
return (function (state_34257){
var state_val_34258 = (state_34257[(1)]);
if((state_val_34258 === (7))){
var inst_34252 = (state_34257[(2)]);
var state_34257__$1 = state_34257;
var statearr_34259_34281 = state_34257__$1;
(statearr_34259_34281[(2)] = inst_34252);

(statearr_34259_34281[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (1))){
var inst_34234 = null;
var state_34257__$1 = (function (){var statearr_34260 = state_34257;
(statearr_34260[(7)] = inst_34234);

return statearr_34260;
})();
var statearr_34261_34282 = state_34257__$1;
(statearr_34261_34282[(2)] = null);

(statearr_34261_34282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (4))){
var inst_34237 = (state_34257[(8)]);
var inst_34237__$1 = (state_34257[(2)]);
var inst_34238 = (inst_34237__$1 == null);
var inst_34239 = cljs.core.not.call(null,inst_34238);
var state_34257__$1 = (function (){var statearr_34262 = state_34257;
(statearr_34262[(8)] = inst_34237__$1);

return statearr_34262;
})();
if(inst_34239){
var statearr_34263_34283 = state_34257__$1;
(statearr_34263_34283[(1)] = (5));

} else {
var statearr_34264_34284 = state_34257__$1;
(statearr_34264_34284[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (6))){
var state_34257__$1 = state_34257;
var statearr_34265_34285 = state_34257__$1;
(statearr_34265_34285[(2)] = null);

(statearr_34265_34285[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (3))){
var inst_34254 = (state_34257[(2)]);
var inst_34255 = cljs.core.async.close_BANG_.call(null,out);
var state_34257__$1 = (function (){var statearr_34266 = state_34257;
(statearr_34266[(9)] = inst_34254);

return statearr_34266;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34257__$1,inst_34255);
} else {
if((state_val_34258 === (2))){
var state_34257__$1 = state_34257;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34257__$1,(4),ch);
} else {
if((state_val_34258 === (11))){
var inst_34237 = (state_34257[(8)]);
var inst_34246 = (state_34257[(2)]);
var inst_34234 = inst_34237;
var state_34257__$1 = (function (){var statearr_34267 = state_34257;
(statearr_34267[(7)] = inst_34234);

(statearr_34267[(10)] = inst_34246);

return statearr_34267;
})();
var statearr_34268_34286 = state_34257__$1;
(statearr_34268_34286[(2)] = null);

(statearr_34268_34286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (9))){
var inst_34237 = (state_34257[(8)]);
var state_34257__$1 = state_34257;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34257__$1,(11),out,inst_34237);
} else {
if((state_val_34258 === (5))){
var inst_34234 = (state_34257[(7)]);
var inst_34237 = (state_34257[(8)]);
var inst_34241 = cljs.core._EQ_.call(null,inst_34237,inst_34234);
var state_34257__$1 = state_34257;
if(inst_34241){
var statearr_34270_34287 = state_34257__$1;
(statearr_34270_34287[(1)] = (8));

} else {
var statearr_34271_34288 = state_34257__$1;
(statearr_34271_34288[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (10))){
var inst_34249 = (state_34257[(2)]);
var state_34257__$1 = state_34257;
var statearr_34272_34289 = state_34257__$1;
(statearr_34272_34289[(2)] = inst_34249);

(statearr_34272_34289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34258 === (8))){
var inst_34234 = (state_34257[(7)]);
var tmp34269 = inst_34234;
var inst_34234__$1 = tmp34269;
var state_34257__$1 = (function (){var statearr_34273 = state_34257;
(statearr_34273[(7)] = inst_34234__$1);

return statearr_34273;
})();
var statearr_34274_34290 = state_34257__$1;
(statearr_34274_34290[(2)] = null);

(statearr_34274_34290[(1)] = (2));


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
});})(c__32544__auto___34280,out))
;
return ((function (switch__32449__auto__,c__32544__auto___34280,out){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_34275 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34275[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_34275[(1)] = (1));

return statearr_34275;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_34257){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_34257);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e34276){if((e34276 instanceof Object)){
var ex__32453__auto__ = e34276;
var statearr_34277_34291 = state_34257;
(statearr_34277_34291[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34276;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34292 = state_34257;
state_34257 = G__34292;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_34257){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_34257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___34280,out))
})();
var state__32546__auto__ = (function (){var statearr_34278 = f__32545__auto__.call(null);
(statearr_34278[(6)] = c__32544__auto___34280);

return statearr_34278;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___34280,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34294 = arguments.length;
switch (G__34294) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32544__auto___34360 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___34360,out){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___34360,out){
return (function (state_34332){
var state_val_34333 = (state_34332[(1)]);
if((state_val_34333 === (7))){
var inst_34328 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34334_34361 = state_34332__$1;
(statearr_34334_34361[(2)] = inst_34328);

(statearr_34334_34361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (1))){
var inst_34295 = (new Array(n));
var inst_34296 = inst_34295;
var inst_34297 = (0);
var state_34332__$1 = (function (){var statearr_34335 = state_34332;
(statearr_34335[(7)] = inst_34297);

(statearr_34335[(8)] = inst_34296);

return statearr_34335;
})();
var statearr_34336_34362 = state_34332__$1;
(statearr_34336_34362[(2)] = null);

(statearr_34336_34362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (4))){
var inst_34300 = (state_34332[(9)]);
var inst_34300__$1 = (state_34332[(2)]);
var inst_34301 = (inst_34300__$1 == null);
var inst_34302 = cljs.core.not.call(null,inst_34301);
var state_34332__$1 = (function (){var statearr_34337 = state_34332;
(statearr_34337[(9)] = inst_34300__$1);

return statearr_34337;
})();
if(inst_34302){
var statearr_34338_34363 = state_34332__$1;
(statearr_34338_34363[(1)] = (5));

} else {
var statearr_34339_34364 = state_34332__$1;
(statearr_34339_34364[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (15))){
var inst_34322 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34340_34365 = state_34332__$1;
(statearr_34340_34365[(2)] = inst_34322);

(statearr_34340_34365[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (13))){
var state_34332__$1 = state_34332;
var statearr_34341_34366 = state_34332__$1;
(statearr_34341_34366[(2)] = null);

(statearr_34341_34366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (6))){
var inst_34297 = (state_34332[(7)]);
var inst_34318 = (inst_34297 > (0));
var state_34332__$1 = state_34332;
if(cljs.core.truth_(inst_34318)){
var statearr_34342_34367 = state_34332__$1;
(statearr_34342_34367[(1)] = (12));

} else {
var statearr_34343_34368 = state_34332__$1;
(statearr_34343_34368[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (3))){
var inst_34330 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34332__$1,inst_34330);
} else {
if((state_val_34333 === (12))){
var inst_34296 = (state_34332[(8)]);
var inst_34320 = cljs.core.vec.call(null,inst_34296);
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34332__$1,(15),out,inst_34320);
} else {
if((state_val_34333 === (2))){
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34332__$1,(4),ch);
} else {
if((state_val_34333 === (11))){
var inst_34312 = (state_34332[(2)]);
var inst_34313 = (new Array(n));
var inst_34296 = inst_34313;
var inst_34297 = (0);
var state_34332__$1 = (function (){var statearr_34344 = state_34332;
(statearr_34344[(7)] = inst_34297);

(statearr_34344[(8)] = inst_34296);

(statearr_34344[(10)] = inst_34312);

return statearr_34344;
})();
var statearr_34345_34369 = state_34332__$1;
(statearr_34345_34369[(2)] = null);

(statearr_34345_34369[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (9))){
var inst_34296 = (state_34332[(8)]);
var inst_34310 = cljs.core.vec.call(null,inst_34296);
var state_34332__$1 = state_34332;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34332__$1,(11),out,inst_34310);
} else {
if((state_val_34333 === (5))){
var inst_34305 = (state_34332[(11)]);
var inst_34297 = (state_34332[(7)]);
var inst_34296 = (state_34332[(8)]);
var inst_34300 = (state_34332[(9)]);
var inst_34304 = (inst_34296[inst_34297] = inst_34300);
var inst_34305__$1 = (inst_34297 + (1));
var inst_34306 = (inst_34305__$1 < n);
var state_34332__$1 = (function (){var statearr_34346 = state_34332;
(statearr_34346[(11)] = inst_34305__$1);

(statearr_34346[(12)] = inst_34304);

return statearr_34346;
})();
if(cljs.core.truth_(inst_34306)){
var statearr_34347_34370 = state_34332__$1;
(statearr_34347_34370[(1)] = (8));

} else {
var statearr_34348_34371 = state_34332__$1;
(statearr_34348_34371[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (14))){
var inst_34325 = (state_34332[(2)]);
var inst_34326 = cljs.core.async.close_BANG_.call(null,out);
var state_34332__$1 = (function (){var statearr_34350 = state_34332;
(statearr_34350[(13)] = inst_34325);

return statearr_34350;
})();
var statearr_34351_34372 = state_34332__$1;
(statearr_34351_34372[(2)] = inst_34326);

(statearr_34351_34372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (10))){
var inst_34316 = (state_34332[(2)]);
var state_34332__$1 = state_34332;
var statearr_34352_34373 = state_34332__$1;
(statearr_34352_34373[(2)] = inst_34316);

(statearr_34352_34373[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34333 === (8))){
var inst_34305 = (state_34332[(11)]);
var inst_34296 = (state_34332[(8)]);
var tmp34349 = inst_34296;
var inst_34296__$1 = tmp34349;
var inst_34297 = inst_34305;
var state_34332__$1 = (function (){var statearr_34353 = state_34332;
(statearr_34353[(7)] = inst_34297);

(statearr_34353[(8)] = inst_34296__$1);

return statearr_34353;
})();
var statearr_34354_34374 = state_34332__$1;
(statearr_34354_34374[(2)] = null);

(statearr_34354_34374[(1)] = (2));


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
});})(c__32544__auto___34360,out))
;
return ((function (switch__32449__auto__,c__32544__auto___34360,out){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_34355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34355[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_34355[(1)] = (1));

return statearr_34355;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_34332){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_34332);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e34356){if((e34356 instanceof Object)){
var ex__32453__auto__ = e34356;
var statearr_34357_34375 = state_34332;
(statearr_34357_34375[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34332);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34356;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34376 = state_34332;
state_34332 = G__34376;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_34332){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_34332);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___34360,out))
})();
var state__32546__auto__ = (function (){var statearr_34358 = f__32545__auto__.call(null);
(statearr_34358[(6)] = c__32544__auto___34360);

return statearr_34358;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___34360,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34378 = arguments.length;
switch (G__34378) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__32544__auto___34448 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32544__auto___34448,out){
return (function (){
var f__32545__auto__ = (function (){var switch__32449__auto__ = ((function (c__32544__auto___34448,out){
return (function (state_34420){
var state_val_34421 = (state_34420[(1)]);
if((state_val_34421 === (7))){
var inst_34416 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34422_34449 = state_34420__$1;
(statearr_34422_34449[(2)] = inst_34416);

(statearr_34422_34449[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (1))){
var inst_34379 = [];
var inst_34380 = inst_34379;
var inst_34381 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34420__$1 = (function (){var statearr_34423 = state_34420;
(statearr_34423[(7)] = inst_34380);

(statearr_34423[(8)] = inst_34381);

return statearr_34423;
})();
var statearr_34424_34450 = state_34420__$1;
(statearr_34424_34450[(2)] = null);

(statearr_34424_34450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (4))){
var inst_34384 = (state_34420[(9)]);
var inst_34384__$1 = (state_34420[(2)]);
var inst_34385 = (inst_34384__$1 == null);
var inst_34386 = cljs.core.not.call(null,inst_34385);
var state_34420__$1 = (function (){var statearr_34425 = state_34420;
(statearr_34425[(9)] = inst_34384__$1);

return statearr_34425;
})();
if(inst_34386){
var statearr_34426_34451 = state_34420__$1;
(statearr_34426_34451[(1)] = (5));

} else {
var statearr_34427_34452 = state_34420__$1;
(statearr_34427_34452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (15))){
var inst_34410 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34428_34453 = state_34420__$1;
(statearr_34428_34453[(2)] = inst_34410);

(statearr_34428_34453[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (13))){
var state_34420__$1 = state_34420;
var statearr_34429_34454 = state_34420__$1;
(statearr_34429_34454[(2)] = null);

(statearr_34429_34454[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (6))){
var inst_34380 = (state_34420[(7)]);
var inst_34405 = inst_34380.length;
var inst_34406 = (inst_34405 > (0));
var state_34420__$1 = state_34420;
if(cljs.core.truth_(inst_34406)){
var statearr_34430_34455 = state_34420__$1;
(statearr_34430_34455[(1)] = (12));

} else {
var statearr_34431_34456 = state_34420__$1;
(statearr_34431_34456[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (3))){
var inst_34418 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34420__$1,inst_34418);
} else {
if((state_val_34421 === (12))){
var inst_34380 = (state_34420[(7)]);
var inst_34408 = cljs.core.vec.call(null,inst_34380);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34420__$1,(15),out,inst_34408);
} else {
if((state_val_34421 === (2))){
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34420__$1,(4),ch);
} else {
if((state_val_34421 === (11))){
var inst_34384 = (state_34420[(9)]);
var inst_34388 = (state_34420[(10)]);
var inst_34398 = (state_34420[(2)]);
var inst_34399 = [];
var inst_34400 = inst_34399.push(inst_34384);
var inst_34380 = inst_34399;
var inst_34381 = inst_34388;
var state_34420__$1 = (function (){var statearr_34432 = state_34420;
(statearr_34432[(11)] = inst_34400);

(statearr_34432[(12)] = inst_34398);

(statearr_34432[(7)] = inst_34380);

(statearr_34432[(8)] = inst_34381);

return statearr_34432;
})();
var statearr_34433_34457 = state_34420__$1;
(statearr_34433_34457[(2)] = null);

(statearr_34433_34457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (9))){
var inst_34380 = (state_34420[(7)]);
var inst_34396 = cljs.core.vec.call(null,inst_34380);
var state_34420__$1 = state_34420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34420__$1,(11),out,inst_34396);
} else {
if((state_val_34421 === (5))){
var inst_34384 = (state_34420[(9)]);
var inst_34388 = (state_34420[(10)]);
var inst_34381 = (state_34420[(8)]);
var inst_34388__$1 = f.call(null,inst_34384);
var inst_34389 = cljs.core._EQ_.call(null,inst_34388__$1,inst_34381);
var inst_34390 = cljs.core.keyword_identical_QMARK_.call(null,inst_34381,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34391 = ((inst_34389) || (inst_34390));
var state_34420__$1 = (function (){var statearr_34434 = state_34420;
(statearr_34434[(10)] = inst_34388__$1);

return statearr_34434;
})();
if(cljs.core.truth_(inst_34391)){
var statearr_34435_34458 = state_34420__$1;
(statearr_34435_34458[(1)] = (8));

} else {
var statearr_34436_34459 = state_34420__$1;
(statearr_34436_34459[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (14))){
var inst_34413 = (state_34420[(2)]);
var inst_34414 = cljs.core.async.close_BANG_.call(null,out);
var state_34420__$1 = (function (){var statearr_34438 = state_34420;
(statearr_34438[(13)] = inst_34413);

return statearr_34438;
})();
var statearr_34439_34460 = state_34420__$1;
(statearr_34439_34460[(2)] = inst_34414);

(statearr_34439_34460[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (10))){
var inst_34403 = (state_34420[(2)]);
var state_34420__$1 = state_34420;
var statearr_34440_34461 = state_34420__$1;
(statearr_34440_34461[(2)] = inst_34403);

(statearr_34440_34461[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34421 === (8))){
var inst_34384 = (state_34420[(9)]);
var inst_34380 = (state_34420[(7)]);
var inst_34388 = (state_34420[(10)]);
var inst_34393 = inst_34380.push(inst_34384);
var tmp34437 = inst_34380;
var inst_34380__$1 = tmp34437;
var inst_34381 = inst_34388;
var state_34420__$1 = (function (){var statearr_34441 = state_34420;
(statearr_34441[(7)] = inst_34380__$1);

(statearr_34441[(14)] = inst_34393);

(statearr_34441[(8)] = inst_34381);

return statearr_34441;
})();
var statearr_34442_34462 = state_34420__$1;
(statearr_34442_34462[(2)] = null);

(statearr_34442_34462[(1)] = (2));


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
});})(c__32544__auto___34448,out))
;
return ((function (switch__32449__auto__,c__32544__auto___34448,out){
return (function() {
var cljs$core$async$state_machine__32450__auto__ = null;
var cljs$core$async$state_machine__32450__auto____0 = (function (){
var statearr_34443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34443[(0)] = cljs$core$async$state_machine__32450__auto__);

(statearr_34443[(1)] = (1));

return statearr_34443;
});
var cljs$core$async$state_machine__32450__auto____1 = (function (state_34420){
while(true){
var ret_value__32451__auto__ = (function (){try{while(true){
var result__32452__auto__ = switch__32449__auto__.call(null,state_34420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32452__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32452__auto__;
}
break;
}
}catch (e34444){if((e34444 instanceof Object)){
var ex__32453__auto__ = e34444;
var statearr_34445_34463 = state_34420;
(statearr_34445_34463[(5)] = ex__32453__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32451__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34464 = state_34420;
state_34420 = G__34464;
continue;
} else {
return ret_value__32451__auto__;
}
break;
}
});
cljs$core$async$state_machine__32450__auto__ = function(state_34420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__32450__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__32450__auto____1.call(this,state_34420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__32450__auto____0;
cljs$core$async$state_machine__32450__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__32450__auto____1;
return cljs$core$async$state_machine__32450__auto__;
})()
;})(switch__32449__auto__,c__32544__auto___34448,out))
})();
var state__32546__auto__ = (function (){var statearr_34446 = f__32545__auto__.call(null);
(statearr_34446[(6)] = c__32544__auto___34448);

return statearr_34446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32546__auto__);
});})(c__32544__auto___34448,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1561299745983
