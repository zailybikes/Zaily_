(function(){'use strict';var r;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
var ba="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){if(a==Array.prototype||a==Object.prototype)return a;a[b]=c.value;return a};
function ea(a){a=["object"==typeof globalThis&&globalThis,a,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}throw Error("Cannot find global object");}
var fa=ea(this);function v(a,b){if(b)a:{var c=fa;a=a.split(".");for(var d=0;d<a.length-1;d++){var e=a[d];if(!(e in c))break a;c=c[e]}a=a[a.length-1];d=c[a];b=b(d);b!=d&&null!=b&&ba(c,a,{configurable:!0,writable:!0,value:b})}}
v("Symbol",function(a){function b(f){if(this instanceof b)throw new TypeError("Symbol is not a constructor");return new c(d+(f||"")+"_"+e++,f)}
function c(f,g){this.g=f;ba(this,"description",{configurable:!0,writable:!0,value:g})}
if(a)return a;c.prototype.toString=function(){return this.g};
var d="jscomp_symbol_"+(1E9*Math.random()>>>0)+"_",e=0;return b});
v("Symbol.iterator",function(a){if(a)return a;a=Symbol("Symbol.iterator");for(var b="Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "),c=0;c<b.length;c++){var d=fa[b[c]];"function"===typeof d&&"function"!=typeof d.prototype[a]&&ba(d.prototype,a,{configurable:!0,writable:!0,value:function(){return ha(aa(this))}})}return a});
function ha(a){a={next:a};a[Symbol.iterator]=function(){return this};
return a}
function w(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];if(b)return b.call(a);if("number"==typeof a.length)return{next:aa(a)};throw Error(String(a)+" is not an iterable or ArrayLike");}
function x(a){if(!(a instanceof Array)){a=w(a);for(var b,c=[];!(b=a.next()).done;)c.push(b.value);a=c}return a}
function ia(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ja="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ia(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ja});
var ka="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},la;
if("function"==typeof Object.setPrototypeOf)la=Object.setPrototypeOf;else{var oa;a:{var pa={a:!0},qa={};try{qa.__proto__=pa;oa=qa.a;break a}catch(a){}oa=!1}la=oa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ra=la;
function y(a,b){a.prototype=ka(b.prototype);a.prototype.constructor=a;if(ra)ra(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.na=b.prototype}
function sa(){this.H=!1;this.j=null;this.h=void 0;this.g=1;this.u=this.o=0;this.S=this.i=null}
function ta(a){if(a.H)throw new TypeError("Generator is already running");a.H=!0}
sa.prototype.M=function(a){this.h=a};
function ua(a,b){a.i={oc:b,zc:!0};a.g=a.o||a.u}
sa.prototype.return=function(a){this.i={return:a};this.g=this.u};
function A(a,b,c){a.g=c;return{value:b}}
sa.prototype.B=function(a){this.g=a};
function va(a,b,c){a.o=b;void 0!=c&&(a.u=c)}
function wa(a){a.o=0;var b=a.i.oc;a.i=null;return b}
function xa(a){var b=a.S.splice(0)[0];(b=a.i=a.i||b)?b.zc?a.g=a.o||a.u:void 0!=b.B&&a.u<b.B?(a.g=b.B,a.i=null):a.g=a.u:a.g=0}
function ya(a){this.g=new sa;this.h=a}
function za(a,b){ta(a.g);var c=a.g.j;if(c)return Aa(a,"return"in c?c["return"]:function(d){return{value:d,done:!0}},b,a.g.return);
a.g.return(b);return Ba(a)}
function Aa(a,b,c,d){try{var e=b.call(a.g.j,c);if(!(e instanceof Object))throw new TypeError("Iterator result "+e+" is not an object");if(!e.done)return a.g.H=!1,e;var f=e.value}catch(g){return a.g.j=null,ua(a.g,g),Ba(a)}a.g.j=null;d.call(a.g,f);return Ba(a)}
function Ba(a){for(;a.g.g;)try{var b=a.h(a.g);if(b)return a.g.H=!1,{value:b.value,done:!1}}catch(c){a.g.h=void 0,ua(a.g,c)}a.g.H=!1;if(a.g.i){b=a.g.i;a.g.i=null;if(b.zc)throw b.oc;return{value:b.return,done:!0}}return{value:void 0,done:!0}}
function Ca(a){this.next=function(b){ta(a.g);a.g.j?b=Aa(a,a.g.j.next,b,a.g.M):(a.g.M(b),b=Ba(a));return b};
this.throw=function(b){ta(a.g);a.g.j?b=Aa(a,a.g.j["throw"],b,a.g.M):(ua(a.g,b),b=Ba(a));return b};
this.return=function(b){return za(a,b)};
this[Symbol.iterator]=function(){return this}}
function Da(a){function b(d){return a.next(d)}
function c(d){return a.throw(d)}
return new Promise(function(d,e){function f(g){g.done?d(g.value):Promise.resolve(g.value).then(b,c).then(f,e)}
f(a.next())})}
function B(a){return Da(new Ca(new ya(a)))}
function Ea(){for(var a=Number(this),b=[],c=a;c<arguments.length;c++)b[c-a]=arguments[c];return b}
v("Reflect.setPrototypeOf",function(a){return a?a:ra?function(b,c){try{return ra(b,c),!0}catch(d){return!1}}:null});
v("Promise",function(a){function b(g){this.g=0;this.i=void 0;this.h=[];this.H=!1;var h=this.j();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.g=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.h=function(g){if(null==this.g){this.g=[];var h=this;this.i(function(){h.o()})}this.g.push(g)};
var e=fa.setTimeout;c.prototype.i=function(g){e(g,0)};
c.prototype.o=function(){for(;this.g&&this.g.length;){var g=this.g;this.g=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.j(l)}}}this.g=null};
c.prototype.j=function(g){this.i(function(){throw g;})};
b.prototype.j=function(){function g(l){return function(m){k||(k=!0,l.call(h,m))}}
var h=this,k=!1;return{resolve:g(this.gb),reject:g(this.o)}};
b.prototype.gb=function(g){if(g===this)this.o(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.ib(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.za(g):this.u(g)}};
b.prototype.za=function(g){var h=void 0;try{h=g.then}catch(k){this.o(k);return}"function"==typeof h?this.wb(h,g):this.u(g)};
b.prototype.o=function(g){this.M(2,g)};
b.prototype.u=function(g){this.M(1,g)};
b.prototype.M=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.i=h;2===this.g&&this.hb();this.S()};
b.prototype.hb=function(){var g=this;e(function(){if(g.oa()){var h=fa.console;"undefined"!==typeof h&&h.error(g.i)}},1)};
b.prototype.oa=function(){if(this.H)return!1;var g=fa.CustomEvent,h=fa.Event,k=fa.dispatchEvent;if("undefined"===typeof k)return!0;"function"===typeof g?g=new g("unhandledrejection",{cancelable:!0}):"function"===typeof h?g=new h("unhandledrejection",{cancelable:!0}):(g=fa.document.createEvent("CustomEvent"),g.initCustomEvent("unhandledrejection",!1,!0,g));g.promise=this;g.reason=this.i;return k(g)};
b.prototype.S=function(){if(null!=this.h){for(var g=0;g<this.h.length;++g)f.h(this.h[g]);this.h=null}};
var f=new c;b.prototype.ib=function(g){var h=this.j();g.zb(h.resolve,h.reject)};
b.prototype.wb=function(g,h){var k=this.j();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(q,p){return"function"==typeof q?function(t){try{l(q(t))}catch(u){m(u)}}:p}
var l,m,n=new b(function(q,p){l=q;m=p});
this.zb(k(g,l),k(h,m));return n};
b.prototype.catch=function(g){return this.then(void 0,g)};
b.prototype.zb=function(g,h){function k(){switch(l.g){case 1:g(l.i);break;case 2:h(l.i);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.h?f.h(k):this.h.push(k);this.H=!0};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=w(g),m=l.next();!m.done;m=l.next())d(m.value).zb(h,k)})};
b.all=function(g){var h=w(g),k=h.next();return k.done?d([]):new b(function(l,m){function n(t){return function(u){q[t]=u;p--;0==p&&l(q)}}
var q=[],p=0;do q.push(void 0),p++,d(k.value).zb(n(q.length-1),m),k=h.next();while(!k.done)})};
return b});
v("WeakMap",function(a){function b(k){this.g=(h+=Math.random()+1).toString();if(k){k=w(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ia(k,g)){var l=new c;ba(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(m){if(m instanceof c)return m;Object.isExtensible(m)&&e(m);return l(m)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),m=new a([[k,2],[l,3]]);if(2!=m.get(k)||3!=m.get(l))return!1;m.delete(k);m.set(l,4);return!m.has(k)&&4==m.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ia(k,g))throw Error("WeakMap key fail: "+k);k[g][this.g]=l;return this};
b.prototype.get=function(k){return d(k)&&ia(k,g)?k[g][this.g]:void 0};
b.prototype.has=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)};
b.prototype.delete=function(k){return d(k)&&ia(k,g)&&ia(k[g],this.g)?delete k[g][this.g]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h[1];return ha(function(){if(l){for(;l.head!=h[1];)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var m=h[0][l];if(m&&ia(h[0],l))for(h=0;h<m.length;h++){var n=m[h];if(k!==k&&n.key!==n.key||k===n.key)return{id:l,list:m,index:h,entry:n}}return{id:l,list:m,index:-1,entry:void 0}}
function e(h){this[0]={};this[1]=b();this.size=0;if(h){h=w(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(w([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),m=l.next();if(m.done||m.value[0]!=h||"s"!=m.value[1])return!1;m=l.next();return m.done||4!=m.value[0].x||"t"!=m.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this[0][l.id]=[]);l.entry?l.entry.value=k:(l.entry={next:this[1],previous:this[1].previous,head:this[1],key:h,value:k},l.list.push(l.entry),this[1].previous.next=l.entry,this[1].previous=l.entry,this.size++);return this};
e.prototype.delete=function(h){h=d(this,h);return h.entry&&h.list?(h.list.splice(h.index,1),h.list.length||delete this[0][h.id],h.entry.previous.next=h.entry.next,h.entry.next.previous=h.entry.previous,h.entry.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this[0]={};this[1]=this[1].previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).entry};
e.prototype.get=function(h){return(h=d(this,h).entry)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),m;!(m=l.next()).done;)m=m.value,h.call(k,m[1],m[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
function Ha(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"endsWith");b+="";void 0===c&&(c=d.length);c=Math.max(0,Math.min(c|0,d.length));for(var e=b.length;0<e&&0<c;)if(d[--c]!=b[--e])return!1;return 0>=e}});
v("Object.setPrototypeOf",function(a){return a||ra});
v("Array.prototype.find",function(a){return a?a:function(b,c){a:{var d=this;d instanceof String&&(d=String(d));for(var e=d.length,f=0;f<e;f++){var g=d[f];if(b.call(c,g,f,d)){b=g;break a}}b=void 0}return b}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=Ha(this,b,"startsWith");b+="";var e=d.length,f=b.length;c=Math.max(0,Math.min(c|0,d.length));for(var g=0;g<f&&c<e;)if(d[c++]!=b[g++])return!1;return g>=f}});
v("Number.isFinite",function(a){return a?a:function(b){return"number"!==typeof b?!1:!isNaN(b)&&Infinity!==b&&-Infinity!==b}});
v("Object.values",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push(b[d]);return c}});
v("Object.is",function(a){return a?a:function(b,c){return b===c?0!==b||1/b===1/c:b!==b&&c!==c}});
v("Array.prototype.includes",function(a){return a?a:function(b,c){var d=this;d instanceof String&&(d=String(d));var e=d.length;c=c||0;for(0>c&&(c=Math.max(c+e,0));c<e;c++){var f=d[c];if(f===b||Object.is(f,b))return!0}return!1}});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==Ha(this,b,"includes").indexOf(b,c||0)}});
v("Number.MAX_SAFE_INTEGER",function(){return 9007199254740991});
v("Number.isInteger",function(a){return a?a:function(b){return Number.isFinite(b)?b===Math.floor(b):!1}});
v("Number.isNaN",function(a){return a?a:function(b){return"number"===typeof b&&isNaN(b)}});
function Ia(a,b){a instanceof String&&(a+="");var c=0,d=!1,e={next:function(){if(!d&&c<a.length){var f=c++;return{value:b(f,a[f]),done:!1}}d=!0;return{done:!0,value:void 0}}};
e[Symbol.iterator]=function(){return e};
return e}
v("Array.prototype.entries",function(a){return a?a:function(){return Ia(this,function(b,c){return[b,c]})}});
v("Array.from",function(a){return a?a:function(b,c,d){c=null!=c?c:function(h){return h};
var e=[],f="undefined"!=typeof Symbol&&Symbol.iterator&&b[Symbol.iterator];if("function"==typeof f){b=f.call(b);for(var g=0;!(f=b.next()).done;)e.push(c.call(d,f.value,g++))}else for(f=b.length,g=0;g<f;g++)e.push(c.call(d,b[g],g));return e}});
v("Array.prototype.keys",function(a){return a?a:function(){return Ia(this,function(b){return b})}});
v("Array.prototype.values",function(a){return a?a:function(){return Ia(this,function(b,c){return c})}});
v("Set",function(a){function b(c){this.g=new Map;if(c){c=w(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.g.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(w([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
b.prototype.add=function(c){c=0===c?0:c;this.g.set(c,c);this.size=this.g.size;return this};
b.prototype.delete=function(c){c=this.g.delete(c);this.size=this.g.size;return c};
b.prototype.clear=function(){this.g.clear();this.size=0};
b.prototype.has=function(c){return this.g.has(c)};
b.prototype.entries=function(){return this.g.entries()};
b.prototype.values=function(){return this.g.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.g.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Object.entries",function(a){return a?a:function(b){var c=[],d;for(d in b)ia(b,d)&&c.push([d,b[d]]);return c}});/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var C=this||self;function D(a,b){a=a.split(".");b=b||C;for(var c=0;c<a.length;c++)if(b=b[a[c]],null==b)return null;return b}
function Ka(a){var b=typeof a;return"object"!=b?b:a?Array.isArray(a)?"array":b:"null"}
function La(a){var b=Ka(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Ma(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Na(a){return Object.prototype.hasOwnProperty.call(a,Oa)&&a[Oa]||(a[Oa]=++Pa)}
var Oa="closure_uid_"+(1E9*Math.random()>>>0),Pa=0;function Qa(a,b,c){return a.call.apply(a.bind,arguments)}
function Sa(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function Ta(a,b,c){Ta=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?Qa:Sa;return Ta.apply(null,arguments)}
function Ua(){return Date.now()}
function E(a,b){a=a.split(".");var c=C;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
function Va(a,b){function c(){}
c.prototype=b.prototype;a.na=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.ke=function(d,e,f){for(var g=Array(arguments.length-2),h=2;h<arguments.length;h++)g[h-2]=arguments[h];return b.prototype[e].apply(d,g)}}
function Wa(a){return a}
;function Xa(a,b){if(Error.captureStackTrace)Error.captureStackTrace(this,Xa);else{var c=Error().stack;c&&(this.stack=c)}a&&(this.message=String(a));void 0!==b&&(this.cause=b)}
Va(Xa,Error);Xa.prototype.name="CustomError";function Ya(a){a=a.url;var b=/[?&]dsh=1(&|$)/.test(a);this.i=!b&&/[?&]ae=1(&|$)/.test(a);this.j=!b&&/[?&]ae=2(&|$)/.test(a);if((this.g=/[?&]adurl=([^&]*)/.exec(a))&&this.g[1]){try{var c=decodeURIComponent(this.g[1])}catch(d){c=null}this.h=c}}
;function Za(){}
function $a(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var ab=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},bb=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)};
function cb(a,b){b=ab(a,b);var c;(c=0<=b)&&Array.prototype.splice.call(a,b,1);return c}
function fb(a){return Array.prototype.concat.apply([],arguments)}
function gb(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function hb(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(La(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function ib(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function mb(a){if(!a||"object"!==typeof a)return a;if("function"===typeof a.clone)return a.clone();if("undefined"!==typeof Map&&a instanceof Map)return new Map(a);if("undefined"!==typeof Set&&a instanceof Set)return new Set(a);if(a instanceof Date)return new Date(a.getTime());var b=Array.isArray(a)?[]:"function"!==typeof ArrayBuffer||"function"!==typeof ArrayBuffer.isView||!ArrayBuffer.isView(a)||a instanceof DataView?{}:new a.constructor(a.length),c;for(c in a)b[c]=mb(a[c]);return b}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;var pb;function qb(){}
function rb(a){return new qb(sb,a)}
var sb={};rb("");var tb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]},ub=/&/g,vb=/</g,wb=/>/g,xb=/"/g,yb=/'/g,zb=/\x00/g,Ab=/[\x00&<>"']/;function Bb(a){this.g=a}
Bb.prototype.toString=function(){return this.g.toString()};
var Cb={},Db=new Bb("about:invalid#zClosurez",Cb);var Eb,Fb=D("CLOSURE_FLAGS"),Gb=Fb&&Fb[610401301];Eb=null!=Gb?Gb:!1;function Hb(){var a=C.navigator;return a&&(a=a.userAgent)?a:""}
var Ib,Jb=C.navigator;Ib=Jb?Jb.userAgentData||null:null;function Kb(a){return Eb?Ib?Ib.brands.some(function(b){return(b=b.brand)&&-1!=b.indexOf(a)}):!1:!1}
function F(a){return-1!=Hb().indexOf(a)}
;function Lb(){return Eb?!!Ib&&0<Ib.brands.length:!1}
function Rb(){return Lb()?!1:F("Trident")||F("MSIE")}
function Sb(){return Lb()?Kb("Chromium"):(F("Chrome")||F("CriOS"))&&!(Lb()?0:F("Edge"))||F("Silk")}
;function Tb(a){this.g=a}
Tb.prototype.toString=function(){return this.g.toString()};function Ub(a){Ab.test(a)&&(-1!=a.indexOf("&")&&(a=a.replace(ub,"&amp;")),-1!=a.indexOf("<")&&(a=a.replace(vb,"&lt;")),-1!=a.indexOf(">")&&(a=a.replace(wb,"&gt;")),-1!=a.indexOf('"')&&(a=a.replace(xb,"&quot;")),-1!=a.indexOf("'")&&(a=a.replace(yb,"&#39;")),-1!=a.indexOf("\x00")&&(a=a.replace(zb,"&#0;")));return a}
;var Vb=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Wb(a){return a?decodeURI(a):a}
function Xb(a){return Wb(a.match(Vb)[3]||null)}
function Yb(a){var b=a.match(Vb);a=b[1];var c=b[2],d=b[3];b=b[4];var e="";a&&(e+=a+":");d&&(e+="//",c&&(e+=c+"@"),e+=d,b&&(e+=":"+b));return e}
function Zb(a,b,c){if(Array.isArray(b))for(var d=0;d<b.length;d++)Zb(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function $b(a){var b=[],c;for(c in a)Zb(c,a[c],b);return b.join("&")}
var ac=/#|$/;function bc(a,b){var c=a.search(ac);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.slice(d,-1!==e?e:0).replace(/\+/g," "))}
;function cc(a){C.setTimeout(function(){throw a;},0)}
;function dc(){return F("iPhone")&&!F("iPod")&&!F("iPad")}
;function ec(a){ec[" "](a);return a}
ec[" "]=function(){};var fc=Lb()?!1:F("Opera"),gc=Rb(),hc=F("Edge"),ic=F("Gecko")&&!(-1!=Hb().toLowerCase().indexOf("webkit")&&!F("Edge"))&&!(F("Trident")||F("MSIE"))&&!F("Edge"),jc=-1!=Hb().toLowerCase().indexOf("webkit")&&!F("Edge");function kc(){var a=C.document;return a?a.documentMode:void 0}
var lc;a:{var mc="",nc=function(){var a=Hb();if(ic)return/rv:([^\);]+)(\)|;)/.exec(a);if(hc)return/Edge\/([\d\.]+)/.exec(a);if(gc)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(jc)return/WebKit\/(\S+)/.exec(a);if(fc)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
nc&&(mc=nc?nc[1]:"");if(gc){var oc=kc();if(null!=oc&&oc>parseFloat(mc)){lc=String(oc);break a}}lc=mc}var pc=lc,qc;if(C.document&&gc){var rc=kc();qc=rc?rc:parseInt(pc,10)||void 0}else qc=void 0;var wc=qc;var xc=dc()||F("iPod"),yc=F("iPad");!F("Android")||Sb();Sb();var zc=F("Safari")&&!(Sb()||(Lb()?0:F("Coast"))||(Lb()?0:F("Opera"))||(Lb()?0:F("Edge"))||(Lb()?Kb("Microsoft Edge"):F("Edg/"))||(Lb()?Kb("Opera"):F("OPR"))||F("Firefox")||F("FxiOS")||F("Silk")||F("Android"))&&!(dc()||F("iPad")||F("iPod"));var Ac={},Bc=null;
function Cc(a,b){La(a);void 0===b&&(b=0);if(!Bc){Bc={};for(var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),d=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++){var f=c.concat(d[e].split(""));Ac[e]=f;for(var g=0;g<f.length;g++){var h=f[g];void 0===Bc[h]&&(Bc[h]=g)}}}b=Ac[b];c=Array(Math.floor(a.length/3));d=b[64]||"";for(e=f=0;f<a.length-2;f+=3){var k=a[f],l=a[f+1];h=a[f+2];g=b[k>>2];k=b[(k&3)<<4|l>>4];l=b[(l&15)<<2|h>>6];h=b[h&63];c[e++]=""+g+k+l+h}g=0;h=d;switch(a.length-
f){case 2:g=a[f+1],h=b[(g&15)<<2]||d;case 1:a=a[f],c[e]=""+b[a>>2]+b[(a&3)<<4|g>>4]+h+d}return c.join("")}
;var Dc="undefined"!==typeof Uint8Array,Ec=!gc&&"function"===typeof btoa;function Fc(a){return Array.prototype.slice.call(a)}
;var Gc="function"===typeof Symbol&&"symbol"===typeof Symbol()?Symbol():void 0;Math.max.apply(Math,x(Object.values({Xd:1,Vd:2,Ud:4,ae:8,Zd:16,Yd:32,Rd:64,be:128,Td:256,Sd:512,Wd:1024})));var Hc=Gc?function(a,b){a[Gc]|=b}:function(a,b){void 0!==a.ga?a.ga|=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Ic(a){var b=H(a);1!==(b&1)&&(Object.isFrozen(a)&&(a=Fc(a)),Jc(a,b|1))}
var Kc=Gc?function(a,b){a[Gc]&=~b}:function(a,b){void 0!==a.ga&&(a.ga&=~b)},H=Gc?function(a){return a[Gc]|0}:function(a){return a.ga|0},Lc=Gc?function(a){return a[Gc]}:function(a){return a.ga},Jc=Gc?function(a,b){a[Gc]=b}:function(a,b){void 0!==a.ga?a.ga=b:Object.defineProperties(a,{ga:{value:b,
configurable:!0,writable:!0,enumerable:!1}})};
function Mc(a,b){Object.isFrozen(a)&&(a=Fc(a));Jc(a,b);return a}
function Nc(a){Hc(a,1);return a}
function Oc(a,b){Jc(b,(a|0)&-255)}
function Pc(a,b){Jc(b,(a|34)&-221)}
function Qc(a){a=a>>11&1023;return 0===a?536870912:a}
;var Rc={};function Sc(a){return null!==a&&"object"===typeof a&&!Array.isArray(a)&&a.constructor===Object}
var Tc,Vc,Wc=[];Jc(Wc,39);Vc=Object.freeze(Wc);function Xc(a){if(a&2)throw Error();}
;function Yc(a,b){a.__closure__error__context__984382||(a.__closure__error__context__984382={});a.__closure__error__context__984382.severity=b}
;function Zc(){var a=Error();Yc(a,"incident");cc(a)}
function $c(){var a=Error();Yc(a,"warning");return a}
;function ad(a){return a.displayName||a.name||"unknown type name"}
function bd(a){if("boolean"!==typeof a)throw Error("Expected boolean but got "+Ka(a)+": "+a);return!!a}
var cd=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;function dd(a){return"number"===typeof a&&Number.isFinite(a)||!!a&&"string"===typeof a&&isFinite(a)}
function ed(a){if(!dd(a))throw $c();var b=typeof a;("number"===b?Number.isFinite(a):"string"!==b?0:cd.test(a))||Zc();"string"===typeof a?dd(a):dd(a);return a}
function fd(a){if(null!=a&&"string"!==typeof a)throw Error();return a}
function gd(a){return null==a||"string"===typeof a?a:void 0}
function hd(a,b){if(!(a instanceof b))throw Error("Expected instanceof "+ad(b)+" but got "+(a&&ad(a.constructor)));return a}
function id(a,b,c){var d=!1;if(null!=a&&"object"===typeof a&&!(d=Array.isArray(a))&&a.Yb===Rc)return a;if(d){var e=d=H(a);0===e&&(e|=c&32);e|=c&2;e!==d&&Jc(a,e);return new b(a)}}
;var jd;function I(a,b,c){null==a&&(a=jd);jd=void 0;if(null==a){var d=96;c?(a=[c],d|=512):a=[];b&&(d=d&-2095105|(b&1023)<<11)}else{if(!Array.isArray(a))throw Error();d=H(a);if(d&64)return a;d|=64;if(c&&(d|=512,c!==a[0]))throw Error();a:{c=a;var e=c.length;if(e){var f=e-1,g=c[f];if(Sc(g)){d|=256;b=+!!(d&512)-1;e=f-b;1024<=e&&(nd(c,b,g),e=1023);d=d&-2095105|(e&1023)<<11;break a}}b&&(g=+!!(d&512)-1,b=Math.max(b,e-g),1024<b&&(nd(c,g,{}),d|=256,b=1023),d=d&-2095105|(b&1023)<<11)}}Jc(a,d);return a}
function nd(a,b,c){for(var d=1023+b,e=a.length,f=d;f<e;f++){var g=a[f];null!=g&&g!==c&&(c[f-b]=g)}a.length=d+1;a[d]=c}
;function od(a,b){return pd(b)}
function pd(a){switch(typeof a){case "number":return isFinite(a)?a:String(a);case "boolean":return a?1:0;case "object":if(a&&!Array.isArray(a)&&Dc&&null!=a&&a instanceof Uint8Array){if(Ec){for(var b="",c=0,d=a.length-10240;c<d;)b+=String.fromCharCode.apply(null,a.subarray(c,c+=10240));b+=String.fromCharCode.apply(null,c?a.subarray(c):a);a=btoa(b)}else a=Cc(a);return a}}return a}
;function qd(a,b,c){a=Fc(a);var d=a.length,e=b&256?a[d-1]:void 0;d+=e?-1:0;for(b=b&512?1:0;b<d;b++)a[b]=c(a[b]);if(e){b=a[b]={};for(var f in e)b[f]=c(e[f])}return a}
function rd(a,b,c,d,e,f){if(null!=a){if(Array.isArray(a))a=e&&0==a.length&&H(a)&1?void 0:f&&H(a)&2?a:sd(a,b,c,void 0!==d,e,f);else if(Sc(a)){var g={},h;for(h in a)g[h]=rd(a[h],b,c,d,e,f);a=g}else a=b(a,d);return a}}
function sd(a,b,c,d,e,f){var g=d||c?H(a):0;d=d?!!(g&32):void 0;a=Fc(a);for(var h=0;h<a.length;h++)a[h]=rd(a[h],b,c,d,e,f);c&&c(g,a);return a}
function td(a){return a.Yb===Rc?a.toJSON():pd(a)}
;function ud(a,b,c){c=void 0===c?Pc:c;if(null!=a){if(Dc&&a instanceof Uint8Array)return b?a:new Uint8Array(a);if(Array.isArray(a)){var d=H(a);return d&2?a:!b||d&68||!(d&32||0===d)?sd(a,ud,d&4?Pc:c,!0,!1,!0):(Jc(a,d|34),a)}a.Yb===Rc&&(b=a.s,c=Lc(b),a=c&2?a:vd(a,b,c,!0));return a}}
function vd(a,b,c,d){a=a.constructor;b=wd(b,c,d);H(b);jd=b;b=new a(b);jd=void 0;return b}
function wd(a,b,c){var d=c||b&2?Pc:Oc,e=!!(b&32);a=qd(a,b,function(f){return ud(f,e,d)});
Hc(a,32|(c?2:0));return a}
;function xd(a,b){a=a.s;return yd(a,Lc(a),b)}
function yd(a,b,c,d){if(-1===c)return null;if(c>=Qc(b)){if(b&256)return a[a.length-1][c]}else{var e=a.length;if(d&&b&256&&(d=a[e-1][c],null!=d))return d;b=c+(+!!(b&512)-1);if(b<e)return a[b]}}
function zd(a,b,c){var d=a.s,e=Lc(d);Xc(e);Ad(d,e,b,c);return a}
function Ad(a,b,c,d,e){Sc(d);var f=Qc(b);if(c>=f||e){e=b;if(b&256)f=a[a.length-1];else{if(null==d)return;f=a[f+(+!!(b&512)-1)]={};e|=256}f[c]=d;e!==b&&Jc(a,e)}else a[c+(+!!(b&512)-1)]=d,b&256&&(a=a[a.length-1],c in a&&delete a[c])}
function Bd(a,b,c,d){var e=b&2,f=yd(a,b,c);Array.isArray(f)||(f=Vc);var g=H(f);g&1||Nc(f);if(e)g&2||Hc(f,34),d&1||Object.freeze(f);else{e=!(d&2);var h=g&2;d&1||!h?e&&g&32&&!h&&Kc(f,32):(f=Nc(Fc(f)),Ad(a,b,c,f))}return f}
function Cd(a,b,c,d){a=a.s;var e=Lc(a);Xc(e);(c=Dd(a,e,c))&&c!==b&&null!=d&&Ad(a,e,c);Ad(a,e,b,d)}
function Ed(a,b,c){a=a.s;return Dd(a,Lc(a),b)===c?c:-1}
function Dd(a,b,c){for(var d=0,e=0;e<c.length;e++){var f=c[e];null!=yd(a,b,f)&&(0!==d&&Ad(a,b,d),d=f)}return d}
function Fd(a,b,c){var d=void 0===d?!1:d;var e=a.s;var f=Lc(e),g=yd(e,f,c,d);b=id(g,b,f);b!==g&&null!=b&&Ad(e,f,c,b,d);e=b;if(null==e)return e;a=a.s;f=Lc(a);if(!(f&2)){g=e;b=g.s;var h=Lc(b);g=h&2?vd(g,b,h,!1):g;g!==e&&(e=g,Ad(a,f,c,e,d))}return e}
function J(a,b,c,d){null!=d?hd(d,b):d=void 0;return zd(a,c,d)}
function Gd(a,b,c,d,e){null!=e?hd(e,b):e=void 0;Cd(a,c,d,e)}
function Hd(a,b,c,d){a=a.s;var e=Lc(a);Xc(e);var f=!!(e&2),g=Bd(a,e,b,1);if(g!==Vc&&H(g)&4){if(f)f=H(g),g=Fc(g),Jc(g,f),Ad(a,e,b,g);else{f=Object.isFrozen(g);var h=H(g);var k=h&-35;f&&(g=Fc(g),h=0,Ad(a,e,b,g));h!==k&&Jc(g,k)}b=g}else{f=g;h=!!(e&2);k=!!(H(f)&2);g=f;!h&&k&&(f=Fc(f));h=e|(k?2:0);k=k||void 0;for(var l=0,m=0;l<f.length;l++){var n=id(f[l],c,h);void 0!==n&&(k=k||Lc(n.s)&2,f[m++]=n)}m<l&&(f.length=m);k=!k;h=H(f);l=h|5;k=k?l|8:l&-9;h!=k&&(f=Mc(f,k));g!==f&&Ad(a,e,b,f);b=f}c=null!=d?hd(d,c):
new c;b.push(c);H(c.s)&2&&Kc(b,8)}
function Id(a,b){var c=void 0===c?"":c;a=gd(xd(a,b));return null!=a?a:c}
function Jd(a,b){b=Ed(a,Kd,b);return gd(xd(a,b))}
function Ld(a,b,c){if(null!=c){if("number"!==typeof c)throw $c();Number.isFinite(c)||Zc()}zd(a,b,c)}
function Md(a,b,c){zd(a,b,null==c?c:ed(c))}
function K(a,b,c){return zd(a,b,fd(c))}
function Nd(a,b,c){null!=c&&(Number.isFinite(c)||Zc());return zd(a,b,c)}
;function L(a,b,c){this.s=I(a,b,c)}
L.prototype.toJSON=function(){if(Tc)var a=Od(this,this.s,!1);else a=sd(this.s,td,void 0,void 0,!1,!1),a=Od(this,a,!0);return a};
function Pd(a){Tc=!0;try{return JSON.stringify(a.toJSON(),od)}finally{Tc=!1}}
L.prototype.clone=function(){var a=this.s;return vd(this,a,Lc(a),!1)};
L.prototype.Yb=Rc;L.prototype.toString=function(){return Od(this,this.s,!1).toString()};
function Od(a,b,c){var d=a.constructor.ma,e=Lc(c?a.s:b),f=Qc(e);e=!1;if(d){if(!c){b=Fc(b);var g;if(b.length&&Sc(g=b[b.length-1]))for(e=0;e<d.length;e++)if(d[e]>=f){Object.assign(b[b.length-1]={},g);break}e=!0}g=b;c=!c;f=Lc(a.s);a=Qc(f);f=+!!(f&512)-1;for(var h,k,l=0;l<d.length;l++)if(k=d[l],k<a){k+=f;var m=g[k];null==m?g[k]=c?Vc:Nc([]):c&&m!==Vc&&Ic(m)}else h||(m=void 0,g.length&&Sc(m=g[g.length-1])?h=m:g.push(h={})),m=h[k],null==h[k]?h[k]=c?Vc:Nc([]):c&&m!==Vc&&Ic(m)}d=b.length;if(!d)return b;var n;
if(Sc(h=b[d-1])){a:{var q=h;g={};c=!1;for(var p in q)a=q[p],Array.isArray(a)&&a!=a&&(c=!0),null!=a?g[p]=a:c=!0;if(c){for(var t in g){q=g;break a}q=null}}q!=h&&(n=!0);d--}for(;0<d;d--){h=b[d-1];if(null!=h)break;var u=!0}if(!n&&!u)return b;var z;e?z=b:z=Array.prototype.slice.call(b,0,d);b=z;e&&(b.length=d);q&&b.push(q);return b}
;var Qd=window;rb("csi.gstatic.com");rb("googleads.g.doubleclick.net");rb("partner.googleadservices.com");rb("pubads.g.doubleclick.net");rb("securepubads.g.doubleclick.net");rb("tpc.googlesyndication.com");function Rd(a,b){this.width=a;this.height=b}
r=Rd.prototype;r.clone=function(){return new Rd(this.width,this.height)};
r.aspectRatio=function(){return this.width/this.height};
r.Sb=function(){return!(this.width*this.height)};
r.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
r.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
r.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Sd(){var a=document;var b="IFRAME";"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Td(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function Ud(a){var b=D("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(g){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||C.$googDebugFname||b}catch(g){e="Not available",c=!0}b=Vd(a);if(!(!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name)){c=a.message;if(null==
c){if(a.constructor&&a.constructor instanceof Function){if(a.constructor.name)c=a.constructor.name;else if(c=a.constructor,Wd[c])c=Wd[c];else{c=String(c);if(!Wd[c]){var f=/function\s+([^\(]+)/m.exec(c);Wd[c]=f?f[1]:"[Anonymous]"}c=Wd[c]}c='Unknown Error of type "'+c+'"'}else c="Unknown Error of unknown type";"function"===typeof a.toString&&Object.prototype.toString!==a.toString&&(c+=": "+a.toString())}return{message:c,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:b||"Not available"}}a.stack=
b;return{message:a.message,name:a.name,lineNumber:a.lineNumber,fileName:a.fileName,stack:a.stack}}
function Vd(a,b){b||(b={});b[Xd(a)]=!0;var c=a.stack||"";(a=a.cause)&&!b[Xd(a)]&&(c+="\nCaused by: ",a.stack&&0==a.stack.indexOf(a.toString())||(c+="string"===typeof a?a:a.message+"\n"),c+=Vd(a,b));return c}
function Xd(a){var b="";"function"===typeof a.toString&&(b=""+a);return b+a.stack}
var Wd={};/*

 SPDX-License-Identifier: Apache-2.0
*/
var Yd="function"===typeof URL;function Zd(){throw Error("unknown trace type");}
;function $d(a,b){a.removeAttribute("srcdoc");var c="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox allow-storage-access-by-user-activation".split(" ");a.setAttribute("sandbox","");for(var d=0;d<c.length;d++)a.sandbox.supports&&!a.sandbox.supports(c[d])||a.sandbox.add(c[d]);if(b instanceof Bb)b instanceof Bb&&b.constructor===Bb?b=b.g:(Ka(b),b="type_error:SafeUrl");else{b:if(Yd){try{var e=new URL(b)}catch(f){c="https:";break b}c=e.protocol}else c:{c=document.createElement("a");
try{c.href=b}catch(f){c=void 0;break c}c=c.protocol;c=":"===c||""===c?"https:":c}b="javascript:"!==c?b:void 0}void 0!==b&&(a.src=b)}
;function ae(a){this.pd=a}
function be(a){return new ae(function(b){return b.substr(0,a.length+1).toLowerCase()===a+":"})}
var ce=[be("data"),be("http"),be("https"),be("mailto"),be("ftp"),new ae(function(a){return/^[^:]*([/?#]|$)/.test(a)})];
function de(a,b){b=void 0===b?ce:b;for(var c=0;c<b.length;++c){var d=b[c];if(d instanceof ae&&d.pd(a))return new Bb(a,Cb)}}
function ee(a){var b=void 0===b?ce:b;return de(a,b)||Db}
;function fe(a){var b=ge;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a(b[c],c,b)}
function he(){var a=[];fe(function(b){a.push(b)});
return a}
var ge={Gd:"allow-forms",Hd:"allow-modals",Id:"allow-orientation-lock",Jd:"allow-pointer-lock",Kd:"allow-popups",Ld:"allow-popups-to-escape-sandbox",Md:"allow-presentation",Nd:"allow-same-origin",Od:"allow-scripts",Pd:"allow-top-navigation",Qd:"allow-top-navigation-by-user-activation"},ie=$a(function(){return he()});
function je(){var a=ke(),b={};bb(ie(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
function ke(){var a=void 0===a?document:a;return a.createElement("iframe")}
;var le=(new Date).getTime();function me(a){if(!a)return"";if(/^about:(?:blank|srcdoc)$/.test(a))return window.origin||"";a.startsWith("blob:")&&(a=a.substring(5));a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));c=a.substring(0,a.indexOf("://"));if(!c)throw Error("URI is missing protocol: "+a);if("http"!==c&&"https"!==c&&"chrome-extension"!==
c&&"moz-extension"!==c&&"file"!==c&&"android-app"!==c&&"chrome-search"!==c&&"chrome-untrusted"!==c&&"chrome"!==c&&"app"!==c&&"devtools"!==c)throw Error("Invalid URI scheme in origin: "+c);a="";var d=b.indexOf(":");if(-1!=d){var e=b.substring(d+1);b=b.substring(0,d);if("http"===c&&"80"!==e||"https"===c&&"443"!==e)a=":"+e}return c+"://"+b+a}
;function ne(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;m=l=0}
function b(n){for(var q=g,p=0;64>p;p+=4)q[p/4]=n[p]<<24|n[p+1]<<16|n[p+2]<<8|n[p+3];for(p=16;80>p;p++)n=q[p-3]^q[p-8]^q[p-14]^q[p-16],q[p]=(n<<1|n>>>31)&4294967295;n=e[0];var t=e[1],u=e[2],z=e[3],G=e[4];for(p=0;80>p;p++){if(40>p)if(20>p){var R=z^t&(u^z);var P=1518500249}else R=t^u^z,P=1859775393;else 60>p?(R=t&u|z&(t|u),P=2400959708):(R=t^u^z,P=3395469782);R=((n<<5|n>>>27)&4294967295)+R+G+P+q[p]&4294967295;G=z;z=u;u=(t<<30|t>>>2)&4294967295;t=n;n=R}e[0]=e[0]+n&4294967295;e[1]=e[1]+t&4294967295;e[2]=
e[2]+u&4294967295;e[3]=e[3]+z&4294967295;e[4]=e[4]+G&4294967295}
function c(n,q){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var p=[],t=0,u=n.length;t<u;++t)p.push(n.charCodeAt(t));n=p}q||(q=n.length);p=0;if(0==l)for(;p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64;for(;p<q;)if(f[l++]=n[p++],m++,64==l)for(l=0,b(f);p+64<q;)b(n.slice(p,p+64)),p+=64,m+=64}
function d(){var n=[],q=8*m;56>l?c(h,56-l):c(h,64-(l-56));for(var p=63;56<=p;p--)f[p]=q&255,q>>>=8;b(f);for(p=q=0;5>p;p++)for(var t=24;0<=t;t-=8)n[q++]=e[p]>>t&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,m;a();return{reset:a,update:c,digest:d,Yc:function(){for(var n=d(),q="",p=0;p<n.length;p++)q+="0123456789ABCDEF".charAt(Math.floor(n[p]/16))+"0123456789ABCDEF".charAt(n[p]%16);return q}}}
;function oe(a,b,c){var d=String(C.location.href);return d&&a&&b?[b,pe(me(d),a,c||null)].join(" "):null}
function pe(a,b,c){var d=[],e=[];if(1==(Array.isArray(c)?2:1))return e=[b,a],bb(d,function(h){e.push(h)}),qe(e.join(" "));
var f=[],g=[];bb(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];bb(d,function(h){e.push(h)});
a=qe(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function qe(a){var b=ne();b.update(a);return b.Yc().toLowerCase()}
;var re={};function se(a){this.g=a||{cookie:""}}
r=se.prototype;r.isEnabled=function(){if(!C.navigator.cookieEnabled)return!1;if(!this.Sb())return!0;this.set("TESTCOOKIESENABLED","1",{Vb:60});if("1"!==this.get("TESTCOOKIESENABLED"))return!1;this.remove("TESTCOOKIESENABLED");return!0};
r.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.re;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.Vb}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(Date.now()+1E3*h)).toUTCString();this.g.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+
e:"")};
r.get=function(a,b){for(var c=a+"=",d=(this.g.cookie||"").split(";"),e=0,f;e<d.length;e++){f=tb(d[e]);if(0==f.lastIndexOf(c,0))return f.slice(c.length);if(f==a)return""}return b};
r.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{Vb:0,path:b,domain:c});return d};
r.Sb=function(){return!this.g.cookie};
r.clear=function(){for(var a=(this.g.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=tb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var te=new se("undefined"==typeof document?null:document);function ue(a){return!!re.FPA_SAMESITE_PHASE2_MOD||!(void 0===a||!a)}
function ve(a,b,c,d){(a=C[a])||"undefined"===typeof document||(a=(new se(document)).get(b));return a?oe(a,c,d):null}
function we(a){var b=void 0===b?!1:b;var c=me(String(C.location.href)),d=[];var e=b;e=void 0===e?!1:e;var f=C.__SAPISID||C.__APISID||C.__3PSAPISID||C.__OVERRIDE_SID;ue(e)&&(f=f||C.__1PSAPISID);if(f)e=!0;else{if("undefined"!==typeof document){var g=new se(document);f=g.get("SAPISID")||g.get("APISID")||g.get("__Secure-3PAPISID")||g.get("SID")||g.get("OSID");ue(e)&&(f=f||g.get("__Secure-1PAPISID"))}e=!!f}e&&(e=(c=0==c.indexOf("https:")||0==c.indexOf("chrome-extension:")||0==c.indexOf("moz-extension:"))?
C.__SAPISID:C.__APISID,e||"undefined"===typeof document||(e=new se(document),e=e.get(c?"SAPISID":"APISID")||e.get("__Secure-3PAPISID")),(e=e?oe(e,c?"SAPISIDHASH":"APISIDHASH",a):null)&&d.push(e),c&&ue(b)&&((b=ve("__1PSAPISID","__Secure-1PAPISID","SAPISID1PHASH",a))&&d.push(b),(a=ve("__3PSAPISID","__Secure-3PAPISID","SAPISID3PHASH",a))&&d.push(a)));return 0==d.length?null:d.join(" ")}
;"undefined"!==typeof TextDecoder&&new TextDecoder;var xe="undefined"!==typeof TextEncoder?new TextEncoder:null,ye=xe?function(a){return xe.encode(a)}:function(a){for(var b=[],c=0,d=0;d<a.length;d++){var e=a.charCodeAt(d);
128>e?b[c++]=e:(2048>e?b[c++]=e>>6|192:(55296==(e&64512)&&d+1<a.length&&56320==(a.charCodeAt(d+1)&64512)?(e=65536+((e&1023)<<10)+(a.charCodeAt(++d)&1023),b[c++]=e>>18|240,b[c++]=e>>12&63|128):b[c++]=e>>12|224,b[c++]=e>>6&63|128),b[c++]=e&63|128)}a=new Uint8Array(b.length);for(c=0;c<a.length;c++)a[c]=b[c];return a};function ze(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Ae(){this.Ja=this.Ja;this.oa=this.oa}
Ae.prototype.Ja=!1;Ae.prototype.dispose=function(){this.Ja||(this.Ja=!0,this.sa())};
Ae.prototype.sa=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()};function Be(a,b){this.type=a;this.g=this.target=b;this.defaultPrevented=this.i=!1}
Be.prototype.stopPropagation=function(){this.i=!0};
Be.prototype.preventDefault=function(){this.defaultPrevented=!0};var Ce=function(){if(!C.addEventListener||!Object.defineProperty)return!1;var a=!1,b=Object.defineProperty({},"passive",{get:function(){a=!0}});
try{var c=function(){};
C.addEventListener("test",c,b);C.removeEventListener("test",c,b)}catch(d){}return a}();function De(a,b){Be.call(this,a?a.type:"");this.relatedTarget=this.g=this.target=null;this.button=this.screenY=this.screenX=this.clientY=this.clientX=0;this.key="";this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.state=null;this.pointerId=0;this.pointerType="";this.h=null;a&&this.init(a,b)}
Va(De,Be);var He={2:"touch",3:"pen",4:"mouse"};
De.prototype.init=function(a,b){var c=this.type=a.type,d=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;this.target=a.target||a.srcElement;this.g=b;if(b=a.relatedTarget){if(ic){a:{try{ec(b.nodeName);var e=!0;break a}catch(f){}e=!1}e||(b=null)}}else"mouseover"==c?b=a.fromElement:"mouseout"==c&&(b=a.toElement);this.relatedTarget=b;d?(this.clientX=void 0!==d.clientX?d.clientX:d.pageX,this.clientY=void 0!==d.clientY?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||
0):(this.clientX=void 0!==a.clientX?a.clientX:a.pageX,this.clientY=void 0!==a.clientY?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0);this.button=a.button;this.keyCode=a.keyCode||0;this.key=a.key||"";this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.pointerId=a.pointerId||0;this.pointerType="string"===typeof a.pointerType?a.pointerType:He[a.pointerType]||"";this.state=a.state;
this.h=a;a.defaultPrevented&&De.na.preventDefault.call(this)};
De.prototype.stopPropagation=function(){De.na.stopPropagation.call(this);this.h.stopPropagation?this.h.stopPropagation():this.h.cancelBubble=!0};
De.prototype.preventDefault=function(){De.na.preventDefault.call(this);var a=this.h;a.preventDefault?a.preventDefault():a.returnValue=!1};var Ie="closure_listenable_"+(1E6*Math.random()|0);var Je=0;function Ke(a,b,c,d,e){this.listener=a;this.proxy=null;this.src=b;this.type=c;this.capture=!!d;this.Db=e;this.key=++Je;this.tb=this.yb=!1}
function Le(a){a.tb=!0;a.listener=null;a.proxy=null;a.src=null;a.Db=null}
;function Me(a){this.src=a;this.listeners={};this.g=0}
Me.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.listeners[f];a||(a=this.listeners[f]=[],this.g++);var g=Ne(a,b,d,e);-1<g?(b=a[g],c||(b.yb=!1)):(b=new Ke(b,this.src,f,!!d,e),b.yb=c,a.push(b));return b};
Me.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.listeners))return!1;var e=this.listeners[a];b=Ne(e,b,c,d);return-1<b?(Le(e[b]),Array.prototype.splice.call(e,b,1),0==e.length&&(delete this.listeners[a],this.g--),!0):!1};
function Oe(a,b){var c=b.type;c in a.listeners&&cb(a.listeners[c],b)&&(Le(b),0==a.listeners[c].length&&(delete a.listeners[c],a.g--))}
function Ne(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.tb&&f.listener==b&&f.capture==!!c&&f.Db==d)return e}return-1}
;var Pe="closure_lm_"+(1E6*Math.random()|0),Qe={},Re=0;function Se(a,b,c,d,e){if(d&&d.once)Te(a,b,c,d,e);else if(Array.isArray(b))for(var f=0;f<b.length;f++)Se(a,b[f],c,d,e);else c=Ue(c),a&&a[Ie]?a.Na(b,c,Ma(d)?!!d.capture:!!d,e):Ve(a,b,c,!1,d,e)}
function Ve(a,b,c,d,e,f){if(!b)throw Error("Invalid event type");var g=Ma(e)?!!e.capture:!!e,h=We(a);h||(a[Pe]=h=new Me(a));c=h.add(b,c,d,g,f);if(!c.proxy){d=Xe();c.proxy=d;d.src=a;d.listener=c;if(a.addEventListener)Ce||(e=g),void 0===e&&(e=!1),a.addEventListener(b.toString(),d,e);else if(a.attachEvent)a.attachEvent(Ye(b.toString()),d);else if(a.addListener&&a.removeListener)a.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");Re++}}
function Xe(){function a(c){return b.call(a.src,a.listener,c)}
var b=Ze;return a}
function Te(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)Te(a,b[f],c,d,e);else c=Ue(c),a&&a[Ie]?a.g.add(String(b),c,!0,Ma(d)?!!d.capture:!!d,e):Ve(a,b,c,!0,d,e)}
function $e(a,b,c,d,e){if(Array.isArray(b))for(var f=0;f<b.length;f++)$e(a,b[f],c,d,e);else(d=Ma(d)?!!d.capture:!!d,c=Ue(c),a&&a[Ie])?a.g.remove(String(b),c,d,e):a&&(a=We(a))&&(b=a.listeners[b.toString()],a=-1,b&&(a=Ne(b,c,d,e)),(c=-1<a?b[a]:null)&&af(c))}
function af(a){if("number"!==typeof a&&a&&!a.tb){var b=a.src;if(b&&b[Ie])Oe(b.g,a);else{var c=a.type,d=a.proxy;b.removeEventListener?b.removeEventListener(c,d,a.capture):b.detachEvent?b.detachEvent(Ye(c),d):b.addListener&&b.removeListener&&b.removeListener(d);Re--;(c=We(b))?(Oe(c,a),0==c.g&&(c.src=null,b[Pe]=null)):Le(a)}}}
function Ye(a){return a in Qe?Qe[a]:Qe[a]="on"+a}
function Ze(a,b){if(a.tb)a=!0;else{b=new De(b,this);var c=a.listener,d=a.Db||a.src;a.yb&&af(a);a=c.call(d,b)}return a}
function We(a){a=a[Pe];return a instanceof Me?a:null}
var bf="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ue(a){if("function"===typeof a)return a;a[bf]||(a[bf]=function(b){return a.handleEvent(b)});
return a[bf]}
;function cf(){Ae.call(this);this.g=new Me(this);this.M=this;this.u=null}
Va(cf,Ae);cf.prototype[Ie]=!0;cf.prototype.addEventListener=function(a,b,c,d){Se(this,a,b,c,d)};
cf.prototype.removeEventListener=function(a,b,c,d){$e(this,a,b,c,d)};
function df(a,b){var c=a.u;if(c){var d=[];for(var e=1;c;c=c.u)d.push(c),++e}a=a.M;c=b.type||b;"string"===typeof b?b=new Be(b,a):b instanceof Be?b.target=b.target||a:(e=b,b=new Be(c,a),ob(b,e));e=!0;if(d)for(var f=d.length-1;!b.i&&0<=f;f--){var g=b.g=d[f];e=ef(g,c,!0,b)&&e}b.i||(g=b.g=a,e=ef(g,c,!0,b)&&e,b.i||(e=ef(g,c,!1,b)&&e));if(d)for(f=0;!b.i&&f<d.length;f++)g=b.g=d[f],e=ef(g,c,!1,b)&&e}
cf.prototype.sa=function(){cf.na.sa.call(this);if(this.g){var a=this.g,b=0,c;for(c in a.listeners){for(var d=a.listeners[c],e=0;e<d.length;e++)++b,Le(d[e]);delete a.listeners[c];a.g--}}this.u=null};
cf.prototype.Na=function(a,b,c,d){return this.g.add(String(a),b,!1,c,d)};
function ef(a,b,c,d){b=a.g.listeners[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.tb&&g.capture==c){var h=g.listener,k=g.Db||g.src;g.yb&&Oe(a.g,g);e=!1!==h.call(k,d)&&e}}return e&&!d.defaultPrevented}
;function ff(a){cf.call(this);var b=this;this.H=this.i=0;this.ha=null!=a?a:{qa:function(e,f){return setTimeout(e,f)},
ba:function(e){clearTimeout(e)}};
var c,d;this.h=null!=(d=null==(c=window.navigator)?void 0:c.onLine)?d:!0;this.j=function(){return B(function(e){return A(e,gf(b),0)})};
window.addEventListener("offline",this.j);window.addEventListener("online",this.j);this.H||hf(this)}
y(ff,cf);function jf(){var a=kf;ff.g||(ff.g=new ff(a));return ff.g}
ff.prototype.dispose=function(){window.removeEventListener("offline",this.j);window.removeEventListener("online",this.j);this.ha.ba(this.H);delete ff.g};
ff.prototype.ca=function(){return this.h};
function hf(a){a.H=a.ha.qa(function(){var b;return B(function(c){if(1==c.g)return a.h?(null==(b=window.navigator)?0:b.onLine)?c.B(3):A(c,gf(a),3):A(c,gf(a),3);hf(a);c.g=0})},3E4)}
function gf(a,b){return a.o?a.o:a.o=new Promise(function(c){var d,e,f,g;return B(function(h){switch(h.g){case 1:return d=window.AbortController?new window.AbortController:void 0,f=null==(e=d)?void 0:e.signal,g=!1,va(h,2,3),d&&(a.i=a.ha.qa(function(){d.abort()},b||2E4)),A(h,fetch("/generate_204",{method:"HEAD",
signal:f}),5);case 5:g=!0;case 3:h.S=[h.i];h.o=0;h.u=0;a.o=void 0;a.i&&(a.ha.ba(a.i),a.i=0);g!==a.h&&(a.h=g,a.h?df(a,"networkstatus-online"):df(a,"networkstatus-offline"));c(g);xa(h);break;case 2:wa(h),g=!1,h.B(3)}})})}
;function lf(){this.data=[];this.g=-1}
lf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&Number.isInteger(a)&&this.data[a]!==b&&(this.data[a]=b,this.g=-1)};
lf.prototype.get=function(a){return!!this.data[a]};
function mf(a){-1===a.g&&(a.g=a.data.reduce(function(b,c,d){return b+(c?Math.pow(2,d):0)},0));
return a.g}
;function nf(a){this.s=I(a)}
y(nf,L);function of(a){this.s=I(a)}
y(of,L);function pf(a,b){return K(a,2,b)}
function qf(a,b){return K(a,3,b)}
function rf(a,b){return K(a,4,b)}
function sf(a,b){return K(a,5,b)}
function tf(a,b){return K(a,9,b)}
function uf(a,b){var c=a.s,d=Lc(c);Xc(d);if(null!=b){for(var e=!!b.length,f=0;f<b.length;f++){var g=b[f];hd(g,nf);e=e&&!(H(g.s)&2)}f=H(b);g=f|1;g=(e?g|8:g&-9)|4;g!=f&&(b=Mc(b,g))}null==b&&(b=void 0);Ad(c,d,10,b);return a}
function vf(a,b){return zd(a,11,null==b?b:bd(b))}
function wf(a,b){return K(a,1,b)}
function xf(a,b){return zd(a,7,null==b?b:bd(b))}
of.ma=[10,6];var yf="platform platformVersion architecture model uaFullVersion bitness fullVersionList wow64".split(" ");function zf(a){var b;return null!=(b=a.google_tag_data)?b:a.google_tag_data={}}
function Af(a){var b,c;return"function"===typeof(null==(b=a.navigator)?void 0:null==(c=b.userAgentData)?void 0:c.getHighEntropyValues)}
function Bf(){var a=window;if(!Af(a))return null;var b=zf(a);if(b.uach_promise)return b.uach_promise;a=a.navigator.userAgentData.getHighEntropyValues(yf).then(function(c){null!=b.uach||(b.uach=c);return c});
return b.uach_promise=a}
function Cf(a){var b;return vf(uf(sf(pf(wf(rf(xf(tf(qf(new of,a.architecture||""),a.bitness||""),a.mobile||!1),a.model||""),a.platform||""),a.platformVersion||""),a.uaFullVersion||""),(null==(b=a.fullVersionList)?void 0:b.map(function(c){var d=new nf;d=K(d,1,c.brand);return K(d,2,c.version)}))||[]),a.wow64||!1)}
function Df(){var a,b;return null!=(b=null==(a=Bf())?void 0:a.then(function(c){return Cf(c)}))?b:null}
;function Ef(a,b){this.i=a;this.j=b;this.h=0;this.g=null}
Ef.prototype.get=function(){if(0<this.h){this.h--;var a=this.g;this.g=a.next;a.next=null}else a=this.i();return a};
function Ff(a,b){a.j(b);100>a.h&&(a.h++,b.next=a.g,a.g=b)}
;var Gf;function Hf(){var a=C.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!F("Presto")&&(a=function(){var e=Sd();e.style.display="none";document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=Ta(function(k){if(("*"==h||k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&!Rb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.lc;c.lc=null;e()}};
return function(e){d.next={lc:e};d=d.next;b.port2.postMessage(0)}}return function(e){C.setTimeout(e,0)}}
;function If(){this.h=this.g=null}
If.prototype.add=function(a,b){var c=Jf.get();c.set(a,b);this.h?this.h.next=c:this.g=c;this.h=c};
If.prototype.remove=function(){var a=null;this.g&&(a=this.g,this.g=this.g.next,this.g||(this.h=null),a.next=null);return a};
var Jf=new Ef(function(){return new Kf},function(a){return a.reset()});
function Kf(){this.next=this.scope=this.g=null}
Kf.prototype.set=function(a,b){this.g=a;this.scope=b;this.next=null};
Kf.prototype.reset=function(){this.next=this.scope=this.g=null};var Lf,Mf=!1,Nf=new If;function Of(a,b){Lf||Pf();Mf||(Lf(),Mf=!0);Nf.add(a,b)}
function Pf(){if(C.Promise&&C.Promise.resolve){var a=C.Promise.resolve(void 0);Lf=function(){a.then(Qf)}}else Lf=function(){var b=Qf;
"function"!==typeof C.setImmediate||C.Window&&C.Window.prototype&&(Lb()||!F("Edge"))&&C.Window.prototype.setImmediate==C.setImmediate?(Gf||(Gf=Hf()),Gf(b)):C.setImmediate(b)}}
function Qf(){for(var a;a=Nf.remove();){try{a.g.call(a.scope)}catch(b){cc(b)}Ff(Jf,a)}Mf=!1}
;function Rf(a,b){this.g=a[C.Symbol.iterator]();this.h=b}
Rf.prototype[Symbol.iterator]=function(){return this};
Rf.prototype.next=function(){var a=this.g.next();return{value:a.done?void 0:this.h.call(void 0,a.value),done:a.done}};
function Sf(a,b){return new Rf(a,b)}
;function Tf(){this.blockSize=-1}
;function Uf(){this.blockSize=-1;this.blockSize=64;this.g=[];this.o=[];this.u=[];this.i=[];this.i[0]=128;for(var a=1;a<this.blockSize;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
Va(Uf,Tf);Uf.prototype.reset=function(){this.g[0]=1732584193;this.g[1]=4023233417;this.g[2]=2562383102;this.g[3]=271733878;this.g[4]=3285377520;this.j=this.h=0};
function Vf(a,b,c){c||(c=0);var d=a.u;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.g[0];c=a.g[1];var g=a.g[2],h=a.g[3],k=a.g[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.g[0]=a.g[0]+b&4294967295;a.g[1]=a.g[1]+c&4294967295;a.g[2]=a.g[2]+g&4294967295;a.g[3]=a.g[3]+h&4294967295;a.g[4]=a.g[4]+k&4294967295}
Uf.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.blockSize,d=0,e=this.o,f=this.h;d<b;){if(0==f)for(;d<=c;)Vf(this,a,d),d+=this.blockSize;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.blockSize){Vf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.blockSize){Vf(this,e);f=0;break}}this.h=f;this.j+=b}};
Uf.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.blockSize-(this.h-56));for(var c=this.blockSize-1;56<=c;c--)this.o[c]=b&255,b/=256;Vf(this,this.o);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.g[c]>>d&255,++b;return a};function Wf(){}
Wf.prototype.next=function(){return Xf};
var Xf={done:!0,value:void 0};function Yf(a){return{value:a,done:!1}}
Wf.prototype.ia=function(){return this};function Zf(a){if(a instanceof $f||a instanceof ag||a instanceof bg)return a;if("function"==typeof a.next)return new $f(function(){return a});
if("function"==typeof a[Symbol.iterator])return new $f(function(){return a[Symbol.iterator]()});
if("function"==typeof a.ia)return new $f(function(){return a.ia()});
throw Error("Not an iterator or iterable.");}
function $f(a){this.h=a}
$f.prototype.ia=function(){return new ag(this.h())};
$f.prototype[Symbol.iterator]=function(){return new bg(this.h())};
$f.prototype.g=function(){return new bg(this.h())};
function ag(a){this.h=a}
y(ag,Wf);ag.prototype.next=function(){return this.h.next()};
ag.prototype[Symbol.iterator]=function(){return new bg(this.h)};
ag.prototype.g=function(){return new bg(this.h)};
function bg(a){$f.call(this,function(){return a});
this.i=a}
y(bg,$f);bg.prototype.next=function(){return this.i.next()};function cg(a,b){this.h={};this.g=[];this.i=this.size=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof cg)for(c=dg(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function dg(a){eg(a);return a.g.concat()}
r=cg.prototype;r.has=function(a){return fg(this.h,a)};
r.equals=function(a,b){if(this===a)return!0;if(this.size!=a.size)return!1;b=b||gg;eg(this);for(var c,d=0;c=this.g[d];d++)if(!b(this.get(c),a.get(c)))return!1;return!0};
function gg(a,b){return a===b}
r.Sb=function(){return 0==this.size};
r.clear=function(){this.h={};this.i=this.size=this.g.length=0};
r.remove=function(a){return this.delete(a)};
r.delete=function(a){return fg(this.h,a)?(delete this.h[a],--this.size,this.i++,this.g.length>2*this.size&&eg(this),!0):!1};
function eg(a){if(a.size!=a.g.length){for(var b=0,c=0;b<a.g.length;){var d=a.g[b];fg(a.h,d)&&(a.g[c++]=d);b++}a.g.length=c}if(a.size!=a.g.length){var e={};for(c=b=0;b<a.g.length;)d=a.g[b],fg(e,d)||(a.g[c++]=d,e[d]=1),b++;a.g.length=c}}
r.get=function(a,b){return fg(this.h,a)?this.h[a]:b};
r.set=function(a,b){fg(this.h,a)||(this.size+=1,this.g.push(a),this.i++);this.h[a]=b};
r.forEach=function(a,b){for(var c=dg(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
r.clone=function(){return new cg(this)};
r.keys=function(){return Zf(this.ia(!0)).g()};
r.values=function(){return Zf(this.ia(!1)).g()};
r.entries=function(){var a=this;return Sf(this.keys(),function(b){return[b,a.get(b)]})};
r.ia=function(a){eg(this);var b=0,c=this.i,d=this,e=new Wf;e.next=function(){if(c!=d.i)throw Error("The map has changed since the iterator was created");if(b>=d.g.length)return Xf;var f=d.g[b++];return Yf(a?f:d.h[f])};
return e};
function fg(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
;var hg=C.JSON.stringify;function ig(){var a=this;this.promise=new Promise(function(b,c){a.resolve=b;a.reject=c})}
;function jg(a){this.g=0;this.H=void 0;this.j=this.h=this.i=null;this.o=this.u=!1;if(a!=Za)try{var b=this;a.call(void 0,function(c){kg(b,2,c)},function(c){kg(b,3,c)})}catch(c){kg(this,3,c)}}
function lg(){this.next=this.context=this.h=this.i=this.g=null;this.j=!1}
lg.prototype.reset=function(){this.context=this.h=this.i=this.g=null;this.j=!1};
var mg=new Ef(function(){return new lg},function(a){a.reset()});
function ng(a,b,c){var d=mg.get();d.i=a;d.h=b;d.context=c;return d}
jg.prototype.then=function(a,b,c){return og(this,"function"===typeof a?a:null,"function"===typeof b?b:null,c)};
jg.prototype.$goog_Thenable=!0;jg.prototype.cancel=function(a){if(0==this.g){var b=new pg(a);Of(function(){qg(this,b)},this)}};
function qg(a,b){if(0==a.g)if(a.i){var c=a.i;if(c.h){for(var d=0,e=null,f=null,g=c.h;g&&(g.j||(d++,g.g==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.g&&1==d?qg(c,b):(f?(d=f,d.next==c.j&&(c.j=d),d.next=d.next.next):rg(c),sg(c,e,3,b)))}a.i=null}else kg(a,3,b)}
function tg(a,b){a.h||2!=a.g&&3!=a.g||ug(a);a.j?a.j.next=b:a.h=b;a.j=b}
function og(a,b,c,d){var e=ng(null,null,null);e.g=new jg(function(f,g){e.i=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.h=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof pg?g(h):f(k)}catch(l){g(l)}}:g});
e.g.i=a;tg(a,e);return e.g}
jg.prototype.S=function(a){this.g=0;kg(this,2,a)};
jg.prototype.oa=function(a){this.g=0;kg(this,3,a)};
function kg(a,b,c){if(0==a.g){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.g=1;a:{var d=c,e=a.S,f=a.oa;if(d instanceof jg){tg(d,ng(e||Za,f||null,a));var g=!0}else{if(d)try{var h=!!d.$goog_Thenable}catch(l){h=!1}else h=!1;if(h)d.then(e,f,a),g=!0;else{if(Ma(d))try{var k=d.then;if("function"===typeof k){vg(d,k,e,f,a);g=!0;break a}}catch(l){f.call(a,l);g=!0;break a}g=!1}}}g||(a.H=c,a.g=b,a.i=null,ug(a),3!=b||c instanceof pg||wg(a,c))}}
function vg(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function ug(a){a.u||(a.u=!0,Of(a.M,a))}
function rg(a){var b=null;a.h&&(b=a.h,a.h=b.next,b.next=null);a.h||(a.j=null);return b}
jg.prototype.M=function(){for(var a;a=rg(this);)sg(this,a,this.g,this.H);this.u=!1};
function sg(a,b,c,d){if(3==c&&b.h&&!b.j)for(;a&&a.o;a=a.i)a.o=!1;if(b.g)b.g.i=null,xg(b,c,d);else try{b.j?b.i.call(b.context):xg(b,c,d)}catch(e){yg.call(null,e)}Ff(mg,b)}
function xg(a,b,c){2==b?a.i.call(a.context,c):a.h&&a.h.call(a.context,c)}
function wg(a,b){a.o=!0;Of(function(){a.o&&yg.call(null,b)})}
var yg=cc;function pg(a){Xa.call(this,a)}
Va(pg,Xa);pg.prototype.name="cancel";function M(a){Ae.call(this);this.o=1;this.i=[];this.j=0;this.g=[];this.h={};this.u=!!a}
Va(M,Ae);r=M.prototype;r.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.o;this.g[e]=a;this.g[e+1]=b;this.g[e+2]=c;this.o=e+3;d.push(e);return e};
function zg(a,b,c){var d=Ag;if(a=d.h[a]){var e=d.g;(a=a.find(function(f){return e[f+1]==b&&e[f+2]==c}))&&d.vb(a)}}
r.vb=function(a){var b=this.g[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.g[a+1]=function(){}):(c&&cb(c,a),delete this.g[a],delete this.g[a+1],delete this.g[a+2])}return!!b};
r.eb=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.u)for(e=0;e<c.length;e++){var g=c[e];Bg(this.g[g+1],this.g[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f&&!this.Ja;e++)g=c[e],this.g[g+1].apply(this.g[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.vb(c)}}return 0!=e}return!1};
function Bg(a,b,c){Of(function(){a.apply(b,c)})}
r.clear=function(a){if(a){var b=this.h[a];b&&(b.forEach(this.vb,this),delete this.h[a])}else this.g.length=0,this.h={}};
r.sa=function(){M.na.sa.call(this);this.clear();this.i.length=0};function Cg(a){this.g=a}
Cg.prototype.set=function(a,b){void 0===b?this.g.remove(a):this.g.set(a,hg(b))};
Cg.prototype.get=function(a){try{var b=this.g.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Cg.prototype.remove=function(a){this.g.remove(a)};function Dg(a){this.g=a}
Va(Dg,Cg);function Eg(a){this.data=a}
function Fg(a){return void 0===a||a instanceof Eg?a:new Eg(a)}
Dg.prototype.set=function(a,b){Dg.na.set.call(this,a,Fg(b))};
Dg.prototype.h=function(a){a=Dg.na.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Dg.prototype.get=function(a){if(a=this.h(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Gg(a){this.g=a}
Va(Gg,Dg);Gg.prototype.set=function(a,b,c){if(b=Fg(b)){if(c){if(c<Ua()){Gg.prototype.remove.call(this,a);return}b.expiration=c}b.creation=Ua()}Gg.na.set.call(this,a,b)};
Gg.prototype.h=function(a){var b=Gg.na.h.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<Ua()||c&&c>Ua())Gg.prototype.remove.call(this,a);else return b}};function Hg(){}
;function Ig(){}
Va(Ig,Hg);Ig.prototype[Symbol.iterator]=function(){return Zf(this.ia(!0)).g()};
Ig.prototype.clear=function(){var a=Array.from(this);a=w(a);for(var b=a.next();!b.done;b=a.next())this.remove(b.value)};function Jg(a){this.g=a}
Va(Jg,Ig);r=Jg.prototype;r.set=function(a,b){try{this.g.setItem(a,b)}catch(c){if(0==this.g.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
r.get=function(a){a=this.g.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeItem(a)};
r.ia=function(a){var b=0,c=this.g,d=new Wf;d.next=function(){if(b>=c.length)return Xf;var e=c.key(b++);if(a)return Yf(e);e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Yf(e)};
return d};
r.clear=function(){this.g.clear()};
r.key=function(a){return this.g.key(a)};function Kg(){var a=null;try{a=window.localStorage||null}catch(b){}this.g=a}
Va(Kg,Jg);function Lg(a,b){this.h=a;this.g=null;var c;if(c=gc)c=!(9<=Number(wc));if(c){Mg||(Mg=new cg);this.g=Mg.get(a);this.g||(b?this.g=document.getElementById(b):(this.g=document.createElement("userdata"),this.g.addBehavior("#default#userData"),document.body.appendChild(this.g)),Mg.set(a,this.g));try{this.g.load(this.h)}catch(d){this.g=null}}}
Va(Lg,Ig);var Ng={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Mg=null;function Og(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Ng[b]})}
r=Lg.prototype;r.set=function(a,b){this.g.setAttribute(Og(a),b);Pg(this)};
r.get=function(a){a=this.g.getAttribute(Og(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
r.remove=function(a){this.g.removeAttribute(Og(a));Pg(this)};
r.ia=function(a){var b=0,c=this.g.XMLDocument.documentElement.attributes,d=new Wf;d.next=function(){if(b>=c.length)return Xf;var e=c[b++];if(a)return Yf(decodeURIComponent(e.nodeName.replace(/\./g,"%")).slice(1));e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return Yf(e)};
return d};
r.clear=function(){for(var a=this.g.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Pg(this)};
function Pg(a){try{a.g.save(a.h)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Qg(a,b){this.h=a;this.g=b+"::"}
Va(Qg,Ig);Qg.prototype.set=function(a,b){this.h.set(this.g+a,b)};
Qg.prototype.get=function(a){return this.h.get(this.g+a)};
Qg.prototype.remove=function(a){this.h.remove(this.g+a)};
Qg.prototype.ia=function(a){var b=this.h[Symbol.iterator](),c=this,d=new Wf;d.next=function(){var e=b.next();if(e.done)return e;for(e=e.value;e.slice(0,c.g.length)!=c.g;){e=b.next();if(e.done)return e;e=e.value}return Yf(a?e.slice(c.g.length):c.h.get(e))};
return d};/*

 (The MIT License)

 Copyright (C) 2014 by Vitaly Puzrin

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.

 -----------------------------------------------------------------------------
 Ported from zlib, which is under the following license
 https://github.com/madler/zlib/blob/master/zlib.h

 zlib.h -- interface of the 'zlib' general purpose compression library
   version 1.2.8, April 28th, 2013
   Copyright (C) 1995-2013 Jean-loup Gailly and Mark Adler
   This software is provided 'as-is', without any express or implied
   warranty.  In no event will the authors be held liable for any damages
   arising from the use of this software.
   Permission is granted to anyone to use this software for any purpose,
   including commercial applications, and to alter it and redistribute it
   freely, subject to the following restrictions:
   1. The origin of this software must not be misrepresented; you must not
      claim that you wrote the original software. If you use this software
      in a product, an acknowledgment in the product documentation would be
      appreciated but is not required.
   2. Altered source versions must be plainly marked as such, and must not be
      misrepresented as being the original software.
   3. This notice may not be removed or altered from any source distribution.
   Jean-loup Gailly        Mark Adler
   jloup@gzip.org          madler@alumni.caltech.edu
   The data format used by the zlib library is described by RFCs (Request for
   Comments) 1950 to 1952 in the files http://tools.ietf.org/html/rfc1950
   (zlib format), rfc1951 (deflate format) and rfc1952 (gzip format).
*/
var O={},Rg="undefined"!==typeof Uint8Array&&"undefined"!==typeof Uint16Array&&"undefined"!==typeof Int32Array;O.assign=function(a){for(var b=Array.prototype.slice.call(arguments,1);b.length;){var c=b.shift();if(c){if("object"!==typeof c)throw new TypeError(c+"must be non-object");for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(a[d]=c[d])}}return a};
O.dc=function(a,b){if(a.length===b)return a;if(a.subarray)return a.subarray(0,b);a.length=b;return a};
var Sg={Ta:function(a,b,c,d,e){if(b.subarray&&a.subarray)a.set(b.subarray(c,c+d),e);else for(var f=0;f<d;f++)a[e+f]=b[c+f]},
pc:function(a){var b,c;var d=c=0;for(b=a.length;d<b;d++)c+=a[d].length;var e=new Uint8Array(c);d=c=0;for(b=a.length;d<b;d++){var f=a[d];e.set(f,c);c+=f.length}return e}},Tg={Ta:function(a,b,c,d,e){for(var f=0;f<d;f++)a[e+f]=b[c+f]},
pc:function(a){return[].concat.apply([],a)}};
O.zd=function(){Rg?(O.Sa=Uint8Array,O.pa=Uint16Array,O.Nc=Int32Array,O.assign(O,Sg)):(O.Sa=Array,O.pa=Array,O.Nc=Array,O.assign(O,Tg))};
O.zd();var Ug=!0;try{new Uint8Array(1)}catch(a){Ug=!1}
function Vg(a){var b,c,d=a.length,e=0;for(b=0;b<d;b++){var f=a.charCodeAt(b);if(55296===(f&64512)&&b+1<d){var g=a.charCodeAt(b+1);56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)}e+=128>f?1:2048>f?2:65536>f?3:4}var h=new O.Sa(e);for(b=c=0;c<e;b++)f=a.charCodeAt(b),55296===(f&64512)&&b+1<d&&(g=a.charCodeAt(b+1),56320===(g&64512)&&(f=65536+(f-55296<<10)+(g-56320),b++)),128>f?h[c++]=f:(2048>f?h[c++]=192|f>>>6:(65536>f?h[c++]=224|f>>>12:(h[c++]=240|f>>>18,h[c++]=128|f>>>12&63),h[c++]=128|f>>>
6&63),h[c++]=128|f&63);return h}
;var Wg={};Wg=function(a,b,c,d){var e=a&65535|0;a=a>>>16&65535|0;for(var f;0!==c;){f=2E3<c?2E3:c;c-=f;do e=e+b[d++]|0,a=a+e|0;while(--f);e%=65521;a%=65521}return e|a<<16|0};for(var Xg={},Yg,Zg=[],$g=0;256>$g;$g++){Yg=$g;for(var ah=0;8>ah;ah++)Yg=Yg&1?3988292384^Yg>>>1:Yg>>>1;Zg[$g]=Yg}Xg=function(a,b,c,d){c=d+c;for(a^=-1;d<c;d++)a=a>>>8^Zg[(a^b[d])&255];return a^-1};var bh={};bh={2:"need dictionary",1:"stream end",0:"","-1":"file error","-2":"stream error","-3":"data error","-4":"insufficient memory","-5":"buffer error","-6":"incompatible version"};function ch(a){for(var b=a.length;0<=--b;)a[b]=0}
var dh=[0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0],eh=[0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13],fh=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,3,7],gh=[16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15],hh=Array(576);ch(hh);var ih=Array(60);ch(ih);var jh=Array(512);ch(jh);var kh=Array(256);ch(kh);var lh=Array(29);ch(lh);var mh=Array(30);ch(mh);function nh(a,b,c,d,e){this.Jc=a;this.cd=b;this.bd=c;this.Zc=d;this.td=e;this.uc=a&&a.length}
var oh,ph,qh;function rh(a,b){this.nc=a;this.ab=0;this.Ea=b}
function sh(a,b){a.K[a.pending++]=b&255;a.K[a.pending++]=b>>>8&255}
function th(a,b,c){a.O>16-c?(a.V|=b<<a.O&65535,sh(a,a.V),a.V=b>>16-a.O,a.O+=c-16):(a.V|=b<<a.O&65535,a.O+=c)}
function Ph(a,b,c){th(a,c[2*b],c[2*b+1])}
function Qh(a,b){var c=0;do c|=a&1,a>>>=1,c<<=1;while(0<--b);return c>>>1}
function Rh(a,b,c){var d=Array(16),e=0,f;for(f=1;15>=f;f++)d[f]=e=e+c[f-1]<<1;for(c=0;c<=b;c++)e=a[2*c+1],0!==e&&(a[2*c]=Qh(d[e]++,e))}
function Sh(a){var b;for(b=0;286>b;b++)a.X[2*b]=0;for(b=0;30>b;b++)a.Ka[2*b]=0;for(b=0;19>b;b++)a.R[2*b]=0;a.X[512]=1;a.xa=a.fb=0;a.da=a.matches=0}
function Th(a){8<a.O?sh(a,a.V):0<a.O&&(a.K[a.pending++]=a.V);a.V=0;a.O=0}
function Uh(a,b,c){Th(a);sh(a,c);sh(a,~c);O.Ta(a.K,a.window,b,c,a.pending);a.pending+=c}
function Vh(a,b,c,d){var e=2*b,f=2*c;return a[e]<a[f]||a[e]===a[f]&&d[b]<=d[c]}
function Wh(a,b,c){for(var d=a.L[c],e=c<<1;e<=a.wa;){e<a.wa&&Vh(b,a.L[e+1],a.L[e],a.depth)&&e++;if(Vh(b,d,a.L[e],a.depth))break;a.L[c]=a.L[e];c=e;e<<=1}a.L[c]=d}
function Xh(a,b,c){var d=0;if(0!==a.da){do{var e=a.K[a.nb+2*d]<<8|a.K[a.nb+2*d+1];var f=a.K[a.Ub+d];d++;if(0===e)Ph(a,f,b);else{var g=kh[f];Ph(a,g+256+1,b);var h=dh[g];0!==h&&(f-=lh[g],th(a,f,h));e--;g=256>e?jh[e]:jh[256+(e>>>7)];Ph(a,g,c);h=eh[g];0!==h&&(e-=mh[g],th(a,e,h))}}while(d<a.da)}Ph(a,256,b)}
function Yh(a,b){var c=b.nc,d=b.Ea.Jc,e=b.Ea.uc,f=b.Ea.Zc,g,h=-1;a.wa=0;a.Wa=573;for(g=0;g<f;g++)0!==c[2*g]?(a.L[++a.wa]=h=g,a.depth[g]=0):c[2*g+1]=0;for(;2>a.wa;){var k=a.L[++a.wa]=2>h?++h:0;c[2*k]=1;a.depth[k]=0;a.xa--;e&&(a.fb-=d[2*k+1])}b.ab=h;for(g=a.wa>>1;1<=g;g--)Wh(a,c,g);k=f;do g=a.L[1],a.L[1]=a.L[a.wa--],Wh(a,c,1),d=a.L[1],a.L[--a.Wa]=g,a.L[--a.Wa]=d,c[2*k]=c[2*g]+c[2*d],a.depth[k]=(a.depth[g]>=a.depth[d]?a.depth[g]:a.depth[d])+1,c[2*g+1]=c[2*d+1]=k,a.L[1]=k++,Wh(a,c,1);while(2<=a.wa);a.L[--a.Wa]=
a.L[1];g=b.nc;k=b.ab;d=b.Ea.Jc;e=b.Ea.uc;f=b.Ea.cd;var l=b.Ea.bd,m=b.Ea.td,n,q=0;for(n=0;15>=n;n++)a.ra[n]=0;g[2*a.L[a.Wa]+1]=0;for(b=a.Wa+1;573>b;b++){var p=a.L[b];n=g[2*g[2*p+1]+1]+1;n>m&&(n=m,q++);g[2*p+1]=n;if(!(p>k)){a.ra[n]++;var t=0;p>=l&&(t=f[p-l]);var u=g[2*p];a.xa+=u*(n+t);e&&(a.fb+=u*(d[2*p+1]+t))}}if(0!==q){do{for(n=m-1;0===a.ra[n];)n--;a.ra[n]--;a.ra[n+1]+=2;a.ra[m]--;q-=2}while(0<q);for(n=m;0!==n;n--)for(p=a.ra[n];0!==p;)d=a.L[--b],d>k||(g[2*d+1]!==n&&(a.xa+=(n-g[2*d+1])*g[2*d],g[2*
d+1]=n),p--)}Rh(c,h,a.ra)}
function Zh(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);b[2*(c+1)+1]=65535;for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];++g<h&&l===f||(g<k?a.R[2*l]+=g:0!==l?(l!==e&&a.R[2*l]++,a.R[32]++):10>=g?a.R[34]++:a.R[36]++,g=0,e=l,0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4))}}
function $h(a,b,c){var d,e=-1,f=b[1],g=0,h=7,k=4;0===f&&(h=138,k=3);for(d=0;d<=c;d++){var l=f;f=b[2*(d+1)+1];if(!(++g<h&&l===f)){if(g<k){do Ph(a,l,a.R);while(0!==--g)}else 0!==l?(l!==e&&(Ph(a,l,a.R),g--),Ph(a,16,a.R),th(a,g-3,2)):10>=g?(Ph(a,17,a.R),th(a,g-3,3)):(Ph(a,18,a.R),th(a,g-11,7));g=0;e=l;0===f?(h=138,k=3):l===f?(h=6,k=3):(h=7,k=4)}}}
function ai(a){var b=4093624447,c;for(c=0;31>=c;c++,b>>>=1)if(b&1&&0!==a.X[2*c])return 0;if(0!==a.X[18]||0!==a.X[20]||0!==a.X[26])return 1;for(c=32;256>c;c++)if(0!==a.X[2*c])return 1;return 0}
var bi=!1;function ci(a,b,c){a.K[a.nb+2*a.da]=b>>>8&255;a.K[a.nb+2*a.da+1]=b&255;a.K[a.Ub+a.da]=c&255;a.da++;0===b?a.X[2*c]++:(a.matches++,b--,a.X[2*(kh[c]+256+1)]++,a.Ka[2*(256>b?jh[b]:jh[256+(b>>>7)])]++);return a.da===a.qb-1}
;function di(a,b){a.msg=bh[b];return b}
function ei(a){for(var b=a.length;0<=--b;)a[b]=0}
function fi(a){var b=a.state,c=b.pending;c>a.F&&(c=a.F);0!==c&&(O.Ta(a.output,b.K,b.sb,c,a.bb),a.bb+=c,b.sb+=c,a.ec+=c,a.F-=c,b.pending-=c,0===b.pending&&(b.sb=0))}
function Q(a,b){var c=0<=a.Z?a.Z:-1,d=a.l-a.Z,e=0;if(0<a.level){2===a.C.Pb&&(a.C.Pb=ai(a));Yh(a,a.Fb);Yh(a,a.Bb);Zh(a,a.X,a.Fb.ab);Zh(a,a.Ka,a.Bb.ab);Yh(a,a.jc);for(e=18;3<=e&&0===a.R[2*gh[e]+1];e--);a.xa+=3*(e+1)+14;var f=a.xa+3+7>>>3;var g=a.fb+3+7>>>3;g<=f&&(f=g)}else f=g=d+5;if(d+4<=f&&-1!==c)th(a,b?1:0,3),Uh(a,c,d);else if(4===a.strategy||g===f)th(a,2+(b?1:0),3),Xh(a,hh,ih);else{th(a,4+(b?1:0),3);c=a.Fb.ab+1;d=a.Bb.ab+1;e+=1;th(a,c-257,5);th(a,d-1,5);th(a,e-4,4);for(f=0;f<e;f++)th(a,a.R[2*gh[f]+
1],3);$h(a,a.X,c-1);$h(a,a.Ka,d-1);Xh(a,a.X,a.Ka)}Sh(a);b&&Th(a);a.Z=a.l;fi(a.C)}
function S(a,b){a.K[a.pending++]=b}
function gi(a,b){a.K[a.pending++]=b>>>8&255;a.K[a.pending++]=b&255}
function hi(a,b){var c=a.Ac,d=a.l,e=a.aa,f=a.Bc,g=a.l>a.T-262?a.l-(a.T-262):0,h=a.window,k=a.Ga,l=a.la,m=a.l+258,n=h[d+e-1],q=h[d+e];a.aa>=a.sc&&(c>>=2);f>a.m&&(f=a.m);do{var p=b;if(h[p+e]===q&&h[p+e-1]===n&&h[p]===h[d]&&h[++p]===h[d+1]){d+=2;for(p++;h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&h[++d]===h[++p]&&d<m;);p=258-(m-d);d=m-258;if(p>e){a.Za=b;e=p;if(p>=f)break;n=h[d+e-1];q=h[d+e]}}}while((b=l[b&k])>g&&0!==--c);return e<=
a.m?e:a.m}
function ii(a){var b=a.T,c;do{var d=a.Lc-a.m-a.l;if(a.l>=b+(b-262)){O.Ta(a.window,a.window,b,b,0);a.Za-=b;a.l-=b;a.Z-=b;var e=c=a.Eb;do{var f=a.head[--e];a.head[e]=f>=b?f-b:0}while(--c);e=c=b;do f=a.la[--e],a.la[e]=f>=b?f-b:0;while(--c);d+=b}if(0===a.C.U)break;e=a.C;c=a.window;f=a.l+a.m;var g=e.U;g>d&&(g=d);0===g?c=0:(e.U-=g,O.Ta(c,e.input,e.Qa,g,f),1===e.state.wrap?e.A=Wg(e.A,c,g,f):2===e.state.wrap&&(e.A=Xg(e.A,c,g,f)),e.Qa+=g,e.Ra+=g,c=g);a.m+=c;if(3<=a.m+a.Y)for(d=a.l-a.Y,a.D=a.window[d],a.D=
(a.D<<a.va^a.window[d+1])&a.ta;a.Y&&!(a.D=(a.D<<a.va^a.window[d+3-1])&a.ta,a.la[d&a.Ga]=a.head[a.D],a.head[a.D]=d,d++,a.Y--,3>a.m+a.Y););}while(262>a.m&&0!==a.C.U)}
function ji(a,b){for(var c;;){if(262>a.m){ii(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l);0!==c&&a.l-c<=a.T-262&&(a.G=hi(a,c));if(3<=a.G)if(c=ci(a,a.l-a.Za,a.G-3),a.m-=a.G,a.G<=a.Wb&&3<=a.m){a.G--;do a.l++,a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l;while(0!==--a.G);a.l++}else a.l+=a.G,a.G=0,a.D=a.window[a.l],a.D=(a.D<<a.va^a.window[a.l+1])&a.ta;else c=ci(a,0,a.window[a.l]),
a.m--,a.l++;if(c&&(Q(a,!1),0===a.C.F))return 1}a.Y=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.C.F?3:4):a.da&&(Q(a,!1),0===a.C.F)?1:2}
function ki(a,b){for(var c,d;;){if(262>a.m){ii(a);if(262>a.m&&0===b)return 1;if(0===a.m)break}c=0;3<=a.m&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,c=a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l);a.aa=a.G;a.Ec=a.Za;a.G=2;0!==c&&a.aa<a.Wb&&a.l-c<=a.T-262&&(a.G=hi(a,c),5>=a.G&&(1===a.strategy||3===a.G&&4096<a.l-a.Za)&&(a.G=2));if(3<=a.aa&&a.G<=a.aa){d=a.l+a.m-3;c=ci(a,a.l-1-a.Ec,a.aa-3);a.m-=a.aa-1;a.aa-=2;do++a.l<=d&&(a.D=(a.D<<a.va^a.window[a.l+3-1])&a.ta,a.la[a.l&a.Ga]=a.head[a.D],a.head[a.D]=a.l);while(0!==
--a.aa);a.Oa=0;a.G=2;a.l++;if(c&&(Q(a,!1),0===a.C.F))return 1}else if(a.Oa){if((c=ci(a,0,a.window[a.l-1]))&&Q(a,!1),a.l++,a.m--,0===a.C.F)return 1}else a.Oa=1,a.l++,a.m--}a.Oa&&(ci(a,0,a.window[a.l-1]),a.Oa=0);a.Y=2>a.l?a.l:2;return 4===b?(Q(a,!0),0===a.C.F?3:4):a.da&&(Q(a,!1),0===a.C.F)?1:2}
function li(a,b){for(var c,d,e,f=a.window;;){if(258>=a.m){ii(a);if(258>=a.m&&0===b)return 1;if(0===a.m)break}a.G=0;if(3<=a.m&&0<a.l&&(d=a.l-1,c=f[d],c===f[++d]&&c===f[++d]&&c===f[++d])){for(e=a.l+258;c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&c===f[++d]&&d<e;);a.G=258-(e-d);a.G>a.m&&(a.G=a.m)}3<=a.G?(c=ci(a,1,a.G-3),a.m-=a.G,a.l+=a.G,a.G=0):(c=ci(a,0,a.window[a.l]),a.m--,a.l++);if(c&&(Q(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(Q(a,!0),0===a.C.F?3:4):a.da&&
(Q(a,!1),0===a.C.F)?1:2}
function mi(a,b){for(var c;;){if(0===a.m&&(ii(a),0===a.m)){if(0===b)return 1;break}a.G=0;c=ci(a,0,a.window[a.l]);a.m--;a.l++;if(c&&(Q(a,!1),0===a.C.F))return 1}a.Y=0;return 4===b?(Q(a,!0),0===a.C.F?3:4):a.da&&(Q(a,!1),0===a.C.F)?1:2}
function ni(a,b,c,d,e){this.fd=a;this.sd=b;this.vd=c;this.rd=d;this.dd=e}
var oi;oi=[new ni(0,0,0,0,function(a,b){var c=65535;for(c>a.ea-5&&(c=a.ea-5);;){if(1>=a.m){ii(a);if(0===a.m&&0===b)return 1;if(0===a.m)break}a.l+=a.m;a.m=0;var d=a.Z+c;if(0===a.l||a.l>=d)if(a.m=a.l-d,a.l=d,Q(a,!1),0===a.C.F)return 1;if(a.l-a.Z>=a.T-262&&(Q(a,!1),0===a.C.F))return 1}a.Y=0;if(4===b)return Q(a,!0),0===a.C.F?3:4;a.l>a.Z&&Q(a,!1);return 1}),
new ni(4,4,8,4,ji),new ni(4,5,16,8,ji),new ni(4,6,32,32,ji),new ni(4,4,16,16,ki),new ni(8,16,32,32,ki),new ni(8,16,128,128,ki),new ni(8,32,128,256,ki),new ni(32,128,258,1024,ki),new ni(32,258,258,4096,ki)];
function pi(){this.C=null;this.status=0;this.K=null;this.wrap=this.pending=this.sb=this.ea=0;this.v=null;this.fa=0;this.method=8;this.Xa=-1;this.Ga=this.fc=this.T=0;this.window=null;this.Lc=0;this.head=this.la=null;this.Bc=this.sc=this.strategy=this.level=this.Wb=this.Ac=this.aa=this.m=this.Za=this.l=this.Oa=this.Ec=this.G=this.Z=this.va=this.ta=this.Qb=this.Eb=this.D=0;this.X=new O.pa(1146);this.Ka=new O.pa(122);this.R=new O.pa(78);ei(this.X);ei(this.Ka);ei(this.R);this.jc=this.Bb=this.Fb=null;this.ra=
new O.pa(16);this.L=new O.pa(573);ei(this.L);this.Wa=this.wa=0;this.depth=new O.pa(573);ei(this.depth);this.O=this.V=this.Y=this.matches=this.fb=this.xa=this.nb=this.da=this.qb=this.Ub=0}
function qi(a,b){if(!a||!a.state||5<b||0>b)return a?di(a,-2):-2;var c=a.state;if(!a.output||!a.input&&0!==a.U||666===c.status&&4!==b)return di(a,0===a.F?-5:-2);c.C=a;var d=c.Xa;c.Xa=b;if(42===c.status)if(2===c.wrap)a.A=0,S(c,31),S(c,139),S(c,8),c.v?(S(c,(c.v.text?1:0)+(c.v.Ca?2:0)+(c.v.Ba?4:0)+(c.v.name?8:0)+(c.v.comment?16:0)),S(c,c.v.time&255),S(c,c.v.time>>8&255),S(c,c.v.time>>16&255),S(c,c.v.time>>24&255),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,c.v.qe&255),c.v.Ba&&c.v.Ba.length&&(S(c,
c.v.Ba.length&255),S(c,c.v.Ba.length>>8&255)),c.v.Ca&&(a.A=Xg(a.A,c.K,c.pending,0)),c.fa=0,c.status=69):(S(c,0),S(c,0),S(c,0),S(c,0),S(c,0),S(c,9===c.level?2:2<=c.strategy||2>c.level?4:0),S(c,3),c.status=113);else{var e=8+(c.fc-8<<4)<<8;e|=(2<=c.strategy||2>c.level?0:6>c.level?1:6===c.level?2:3)<<6;0!==c.l&&(e|=32);c.status=113;gi(c,e+(31-e%31));0!==c.l&&(gi(c,a.A>>>16),gi(c,a.A&65535));a.A=1}if(69===c.status)if(c.v.Ba){for(e=c.pending;c.fa<(c.v.Ba.length&65535)&&(c.pending!==c.ea||(c.v.Ca&&c.pending>
e&&(a.A=Xg(a.A,c.K,c.pending-e,e)),fi(a),e=c.pending,c.pending!==c.ea));)S(c,c.v.Ba[c.fa]&255),c.fa++;c.v.Ca&&c.pending>e&&(a.A=Xg(a.A,c.K,c.pending-e,e));c.fa===c.v.Ba.length&&(c.fa=0,c.status=73)}else c.status=73;if(73===c.status)if(c.v.name){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ca&&c.pending>e&&(a.A=Xg(a.A,c.K,c.pending-e,e)),fi(a),e=c.pending,c.pending===c.ea)){var f=1;break}f=c.fa<c.v.name.length?c.v.name.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Ca&&c.pending>e&&(a.A=Xg(a.A,c.K,c.pending-
e,e));0===f&&(c.fa=0,c.status=91)}else c.status=91;if(91===c.status)if(c.v.comment){e=c.pending;do{if(c.pending===c.ea&&(c.v.Ca&&c.pending>e&&(a.A=Xg(a.A,c.K,c.pending-e,e)),fi(a),e=c.pending,c.pending===c.ea)){f=1;break}f=c.fa<c.v.comment.length?c.v.comment.charCodeAt(c.fa++)&255:0;S(c,f)}while(0!==f);c.v.Ca&&c.pending>e&&(a.A=Xg(a.A,c.K,c.pending-e,e));0===f&&(c.status=103)}else c.status=103;103===c.status&&(c.v.Ca?(c.pending+2>c.ea&&fi(a),c.pending+2<=c.ea&&(S(c,a.A&255),S(c,a.A>>8&255),a.A=0,
c.status=113)):c.status=113);if(0!==c.pending){if(fi(a),0===a.F)return c.Xa=-1,0}else if(0===a.U&&(b<<1)-(4<b?9:0)<=(d<<1)-(4<d?9:0)&&4!==b)return di(a,-5);if(666===c.status&&0!==a.U)return di(a,-5);if(0!==a.U||0!==c.m||0!==b&&666!==c.status){d=2===c.strategy?mi(c,b):3===c.strategy?li(c,b):oi[c.level].dd(c,b);if(3===d||4===d)c.status=666;if(1===d||3===d)return 0===a.F&&(c.Xa=-1),0;if(2===d&&(1===b?(th(c,2,3),Ph(c,256,hh),16===c.O?(sh(c,c.V),c.V=0,c.O=0):8<=c.O&&(c.K[c.pending++]=c.V&255,c.V>>=8,c.O-=
8)):5!==b&&(th(c,0,3),Uh(c,0,0),3===b&&(ei(c.head),0===c.m&&(c.l=0,c.Z=0,c.Y=0))),fi(a),0===a.F))return c.Xa=-1,0}if(4!==b)return 0;if(0>=c.wrap)return 1;2===c.wrap?(S(c,a.A&255),S(c,a.A>>8&255),S(c,a.A>>16&255),S(c,a.A>>24&255),S(c,a.Ra&255),S(c,a.Ra>>8&255),S(c,a.Ra>>16&255),S(c,a.Ra>>24&255)):(gi(c,a.A>>>16),gi(c,a.A&65535));fi(a);0<c.wrap&&(c.wrap=-c.wrap);return 0!==c.pending?0:1}
;var ri={};ri=function(){this.input=null;this.Ra=this.U=this.Qa=0;this.output=null;this.ec=this.F=this.bb=0;this.msg="";this.state=null;this.Pb=2;this.A=0};var si=Object.prototype.toString;
function ti(a){if(!(this instanceof ti))return new ti(a);a=this.options=O.assign({level:-1,method:8,chunkSize:16384,Ha:15,ud:8,strategy:0,Fa:""},a||{});a.raw&&0<a.Ha?a.Ha=-a.Ha:a.gd&&0<a.Ha&&16>a.Ha&&(a.Ha+=16);this.err=0;this.msg="";this.ended=!1;this.chunks=[];this.C=new ri;this.C.F=0;var b=this.C;var c=a.level,d=a.method,e=a.Ha,f=a.ud,g=a.strategy;if(b){var h=1;-1===c&&(c=6);0>e?(h=0,e=-e):15<e&&(h=2,e-=16);if(1>f||9<f||8!==d||8>e||15<e||0>c||9<c||0>g||4<g)b=di(b,-2);else{8===e&&(e=9);var k=new pi;
b.state=k;k.C=b;k.wrap=h;k.v=null;k.fc=e;k.T=1<<k.fc;k.Ga=k.T-1;k.Qb=f+7;k.Eb=1<<k.Qb;k.ta=k.Eb-1;k.va=~~((k.Qb+3-1)/3);k.window=new O.Sa(2*k.T);k.head=new O.pa(k.Eb);k.la=new O.pa(k.T);k.qb=1<<f+6;k.ea=4*k.qb;k.K=new O.Sa(k.ea);k.nb=1*k.qb;k.Ub=3*k.qb;k.level=c;k.strategy=g;k.method=d;if(b&&b.state){b.Ra=b.ec=0;b.Pb=2;c=b.state;c.pending=0;c.sb=0;0>c.wrap&&(c.wrap=-c.wrap);c.status=c.wrap?42:113;b.A=2===c.wrap?0:1;c.Xa=0;if(!bi){d=Array(16);for(f=g=0;28>f;f++)for(lh[f]=g,e=0;e<1<<dh[f];e++)kh[g++]=
f;kh[g-1]=f;for(f=g=0;16>f;f++)for(mh[f]=g,e=0;e<1<<eh[f];e++)jh[g++]=f;for(g>>=7;30>f;f++)for(mh[f]=g<<7,e=0;e<1<<eh[f]-7;e++)jh[256+g++]=f;for(e=0;15>=e;e++)d[e]=0;for(e=0;143>=e;)hh[2*e+1]=8,e++,d[8]++;for(;255>=e;)hh[2*e+1]=9,e++,d[9]++;for(;279>=e;)hh[2*e+1]=7,e++,d[7]++;for(;287>=e;)hh[2*e+1]=8,e++,d[8]++;Rh(hh,287,d);for(e=0;30>e;e++)ih[2*e+1]=5,ih[2*e]=Qh(e,5);oh=new nh(hh,dh,257,286,15);ph=new nh(ih,eh,0,30,15);qh=new nh([],fh,0,19,7);bi=!0}c.Fb=new rh(c.X,oh);c.Bb=new rh(c.Ka,ph);c.jc=new rh(c.R,
qh);c.V=0;c.O=0;Sh(c);c=0}else c=di(b,-2);0===c&&(b=b.state,b.Lc=2*b.T,ei(b.head),b.Wb=oi[b.level].sd,b.sc=oi[b.level].fd,b.Bc=oi[b.level].vd,b.Ac=oi[b.level].rd,b.l=0,b.Z=0,b.m=0,b.Y=0,b.G=b.aa=2,b.Oa=0,b.D=0);b=c}}else b=-2;if(0!==b)throw Error(bh[b]);a.header&&(b=this.C)&&b.state&&2===b.state.wrap&&(b.state.v=a.header);if(a.ob){var l;"string"===typeof a.ob?l=Vg(a.ob):"[object ArrayBuffer]"===si.call(a.ob)?l=new Uint8Array(a.ob):l=a.ob;a=this.C;f=l;g=f.length;if(a&&a.state)if(l=a.state,b=l.wrap,
2===b||1===b&&42!==l.status||l.m)b=-2;else{1===b&&(a.A=Wg(a.A,f,g,0));l.wrap=0;g>=l.T&&(0===b&&(ei(l.head),l.l=0,l.Z=0,l.Y=0),c=new O.Sa(l.T),O.Ta(c,f,g-l.T,l.T,0),f=c,g=l.T);c=a.U;d=a.Qa;e=a.input;a.U=g;a.Qa=0;a.input=f;for(ii(l);3<=l.m;){f=l.l;g=l.m-2;do l.D=(l.D<<l.va^l.window[f+3-1])&l.ta,l.la[f&l.Ga]=l.head[l.D],l.head[l.D]=f,f++;while(--g);l.l=f;l.m=2;ii(l)}l.l+=l.m;l.Z=l.l;l.Y=l.m;l.m=0;l.G=l.aa=2;l.Oa=0;a.Qa=d;a.input=e;a.U=c;l.wrap=b;b=0}else b=-2;if(0!==b)throw Error(bh[b]);this.he=!0}}
ti.prototype.push=function(a,b){var c=this.C,d=this.options.chunkSize;if(this.ended)return!1;var e=b===~~b?b:!0===b?4:0;"string"===typeof a?c.input=Vg(a):"[object ArrayBuffer]"===si.call(a)?c.input=new Uint8Array(a):c.input=a;c.Qa=0;c.U=c.input.length;do{0===c.F&&(c.output=new O.Sa(d),c.bb=0,c.F=d);a=qi(c,e);if(1!==a&&0!==a)return ui(this,a),this.ended=!0,!1;if(0===c.F||0===c.U&&(4===e||2===e))if("string"===this.options.Fa){var f=O.dc(c.output,c.bb);b=f;f=f.length;if(65537>f&&(b.subarray&&Ug||!b.subarray))b=
String.fromCharCode.apply(null,O.dc(b,f));else{for(var g="",h=0;h<f;h++)g+=String.fromCharCode(b[h]);b=g}this.chunks.push(b)}else b=O.dc(c.output,c.bb),this.chunks.push(b)}while((0<c.U||0===c.F)&&1!==a);if(4===e)return(c=this.C)&&c.state?(d=c.state.status,42!==d&&69!==d&&73!==d&&91!==d&&103!==d&&113!==d&&666!==d?a=di(c,-2):(c.state=null,a=113===d?di(c,-3):0)):a=-2,ui(this,a),this.ended=!0,0===a;2===e&&(ui(this,0),c.F=0);return!0};
function ui(a,b){0===b&&(a.result="string"===a.options.Fa?a.chunks.join(""):O.pc(a.chunks));a.chunks=[];a.err=b;a.msg=a.C.msg}
;function vi(a){this.name=a}
;var wi=new vi("rawColdConfigGroup");var xi=new vi("rawHotConfigGroup");function yi(a){this.s=I(a)}
y(yi,L);yi.prototype.g=function(a){K(this,5,a)};function zi(a){this.s=I(a)}
y(zi,L);function Ai(a){this.s=I(a)}
y(Ai,L);Ai.ma=[2];function Bi(a){this.s=I(a)}
y(Bi,L);Bi.prototype.getPlayerType=function(){var a=0;a=void 0===a?0:a;var b=xd(this,36);return null!=b?b:a};
Bi.prototype.setHomeGroupInfo=function(a){return J(this,Ai,81,a)};
Bi.ma=[9,66,32,86,100,101];function Ci(a){this.s=I(a)}
y(Ci,L);Ci.prototype.getKey=function(){return Id(this,1)};
Ci.prototype.ja=function(){return Id(this,Ed(this,Di,2))};
var Di=[2,3,4,5,6];function Ei(a){this.s=I(a)}
y(Ei,L);Ei.ma=[15,26,28];function Fi(a){this.s=I(a)}
y(Fi,L);Fi.ma=[5];function Gi(a){this.s=I(a)}
y(Gi,L);function Hi(a){this.s=I(a)}
y(Hi,L);Hi.prototype.setSafetyMode=function(a){return Nd(this,5,a)};
Hi.ma=[12];function Ii(a){this.s=I(a)}
y(Ii,L);Ii.ma=[12];var Ji={ge:"WEB_DISPLAY_MODE_UNKNOWN",ce:"WEB_DISPLAY_MODE_BROWSER",ee:"WEB_DISPLAY_MODE_MINIMAL_UI",fe:"WEB_DISPLAY_MODE_STANDALONE",de:"WEB_DISPLAY_MODE_FULLSCREEN"};function Ki(a){this.s=I(a)}
y(Ki,L);Ki.prototype.getKey=function(){return Id(this,1)};
Ki.prototype.ja=function(){return Id(this,2)};function Li(a){this.s=I(a)}
y(Li,L);Li.ma=[4,5];function Mi(a){this.s=I(a)}
y(Mi,L);function Ni(a){this.s=I(a)}
y(Ni,L);var Oi=[2,3,4,5];function Pi(a){this.s=I(a)}
y(Pi,L);function Qi(a){this.s=I(a)}
y(Qi,L);function Ri(a){this.s=I(a)}
y(Ri,L);function Si(a){this.s=I(a)}
y(Si,L);Si.ma=[10,17];function Ti(a){this.s=I(a)}
y(Ti,L);function Ui(a){this.s=I(a)}
y(Ui,L);function Vi(a){this.s=I(a)}
y(Vi,L);function Wi(a){this.s=I(a,486)}
y(Wi,L);
var Xi=[2,3,5,6,7,11,13,20,21,22,23,24,28,32,37,45,59,72,73,74,76,78,79,80,85,91,97,100,102,105,111,117,119,126,127,136,146,148,151,156,157,158,159,163,164,168,176,177,178,179,184,188,189,190,191,193,194,195,196,197,198,199,200,201,202,203,204,205,206,208,209,215,219,222,225,226,227,229,232,233,234,240,241,244,247,248,249,251,254,255,256,257,258,259,260,261,266,270,272,278,288,291,293,300,304,308,309,310,311,313,314,319,320,321,323,324,327,328,330,331,332,334,337,338,340,344,348,350,351,352,353,354,
355,356,357,358,361,363,364,368,369,370,373,374,375,378,380,381,383,388,389,399,402,403,410,411,412,413,414,415,416,417,418,423,424,425,426,427,429,430,431,439,441,444,448,458,469,471,473,474,480,481,482,484,485];function Yi(a){this.s=I(a)}
y(Yi,L);function Zi(a){this.s=I(a)}
y(Zi,L);Zi.prototype.getPlaylistId=function(){return Jd(this,2)};
var Kd=[1,2];function $i(a){this.s=I(a)}
y($i,L);$i.ma=[3];var aj=C.window,bj,cj,dj=(null==aj?void 0:null==(bj=aj.yt)?void 0:bj.config_)||(null==aj?void 0:null==(cj=aj.ytcfg)?void 0:cj.data_)||{};E("yt.config_",dj);function ej(){var a=arguments;1<a.length?dj[a[0]]=a[1]:1===a.length&&Object.assign(dj,a[0])}
function T(a,b){return a in dj?dj[a]:b}
function fj(){return T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS")}
function gj(){var a=dj.EXPERIMENT_FLAGS;return a?a.web_disable_gel_stp_ecatcher_killswitch:void 0}
;var hj=[];function ij(a){hj.forEach(function(b){return b(a)})}
function jj(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){kj(b)}}:a}
function kj(a){var b=D("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0,void 0):(b=T("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0,void 0,void 0]),ej("ERRORS",b));ij(a)}
function lj(a,b,c,d,e){var f=D("yt.logging.errors.log");f?f(a,"WARNING",b,c,d,void 0,e):(f=T("ERRORS",[]),f.push([a,"WARNING",b,c,d,void 0,e]),ej("ERRORS",f))}
;function U(a){a=T("EXPERIMENT_FLAGS",{})[a];return"string"===typeof a&&"false"===a?!1:!!a}
function V(a,b){a=T("EXPERIMENT_FLAGS",{})[a];return void 0===a&&void 0!==b?b:Number(a||0)}
function mj(){for(var a=[],b=T("EXPERIMENTS_FORCED_FLAGS",{}),c=w(Object.keys(b)),d=c.next();!d.done;d=c.next())d=d.value,a.push({key:d,value:String(b[d])});c=T("EXPERIMENT_FLAGS",{});var e=w(Object.keys(c));for(d=e.next();!d.done;d=e.next())d=d.value,d.startsWith("force_")&&void 0===b[d]&&a.push({key:d,value:String(c[d])});return a}
;var nj=0;E("ytDomDomGetNextId",D("ytDomDomGetNextId")||function(){return++nj});var oj={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function pj(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in oj||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
pj.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
pj.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
pj.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=C.ytEventsEventsListeners||{};E("ytEventsEventsListeners",kb);var qj=C.ytEventsEventsCounter||{count:0};E("ytEventsEventsCounter",qj);
function rj(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ma(e[4])&&Ma(d)&&lb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
function sj(a){a&&("string"==typeof a&&(a=[a]),bb(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?tj()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
var tj=$a(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function uj(a,b,c){var d=void 0===d?{}:d;if(a&&(a.addEventListener||a.attachEvent)){var e=rj(a,b,c,d);if(!e){e=++qj.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new pj(h);if(!Td(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new pj(h);
h.currentTarget=a;return c.call(a,h)};
g=jj(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),tj()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);kb[e]=[a,b,c,g,d]}}}
;function vj(a,b){"function"===typeof a&&(a=jj(a));return window.setTimeout(a,b)}
function wj(a){"function"===typeof a&&(a=jj(a));return window.setInterval(a,250)}
;var xj=/^[\w.]*$/,yj={q:!0,search_query:!0};function zj(a,b){b=a.split(b);for(var c={},d=0,e=b.length;d<e;d++){var f=b[d].split("=");if(1==f.length&&f[0]||2==f.length)try{var g=Aj(f[0]||""),h=Aj(f[1]||"");g in c?Array.isArray(c[g])?hb(c[g],h):c[g]=[c[g],h]:c[g]=h}catch(n){var k=n,l=f[0],m=String(zj);k.args=[{key:l,value:f[1],query:a,method:Bj==m?"unchanged":m}];yj.hasOwnProperty(l)||lj(k)}}return c}
var Bj=String(zj);function Cj(a){var b=[];ib(a,function(c,d){var e=encodeURIComponent(String(d)),f;Array.isArray(c)?f=c:f=[c];bb(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function Dj(a){"?"==a.charAt(0)&&(a=a.substr(1));return zj(a,"&")}
function Ej(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Dj(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);b=a;a=$b(e);a?(c=b.indexOf("#"),0>c&&(c=b.length),f=b.indexOf("?"),0>f||f>c?(f=c,e=""):e=b.substring(f+1,c),b=[b.slice(0,f),e,b.slice(c)],c=b[1],b[1]=a?c?c+"&"+a:a:c,a=b[0]+(b[1]?"?"+b[1]:"")+b[2]):a=b;return a+d}
function Fj(a){if(!b)var b=window.location.href;var c=a.match(Vb)[1]||null,d=Xb(a);c&&d?(a=a.match(Vb),b=b.match(Vb),a=a[3]==b[3]&&a[1]==b[1]&&a[4]==b[4]):a=d?Xb(b)==d&&(Number(b.match(Vb)[4]||null)||null)==(Number(a.match(Vb)[4]||null)||null):!0;return a}
function Aj(a){return a&&a.match(xj)?a:decodeURIComponent(a.replace(/\+/g," "))}
;function Gj(a){var b=Hj;a=void 0===a?D("yt.ads.biscotti.lastId_")||"":a;var c=Object,d=c.assign,e={};e.dt=le;e.flash="0";a:{try{var f=b.g.top.location.href}catch(ca){f=2;break a}f=f?f===b.h.location.href?0:1:2}e=(e.frm=f,e);try{e.u_tz=-(new Date).getTimezoneOffset();var g=void 0===g?Qd:g;try{var h=g.history.length}catch(ca){h=0}e.u_his=h;var k;e.u_h=null==(k=Qd.screen)?void 0:k.height;var l;e.u_w=null==(l=Qd.screen)?void 0:l.width;var m;e.u_ah=null==(m=Qd.screen)?void 0:m.availHeight;var n;e.u_aw=
null==(n=Qd.screen)?void 0:n.availWidth;var q;e.u_cd=null==(q=Qd.screen)?void 0:q.colorDepth}catch(ca){}h=b.g;try{var p=h.screenX;var t=h.screenY}catch(ca){}try{var u=h.outerWidth;var z=h.outerHeight}catch(ca){}try{var G=h.innerWidth;var R=h.innerHeight}catch(ca){}try{var P=h.screenLeft;var Fa=h.screenTop}catch(ca){}try{G=h.innerWidth,R=h.innerHeight}catch(ca){}try{var Uc=h.screen.availWidth;var Ra=h.screen.availTop}catch(ca){}p=[P,Fa,p,t,Uc,Ra,u,z,G,R];t=b.g.top;try{var Ga=(t||window).document,da=
"CSS1Compat"==Ga.compatMode?Ga.documentElement:Ga.body;var ma=(new Rd(da.clientWidth,da.clientHeight)).round()}catch(ca){ma=new Rd(-12245933,-12245933)}Ga=ma;ma={};var na=void 0===na?C:na;da=new lf;"SVGElement"in na&&"createElementNS"in na.document&&da.set(0);t=je();t["allow-top-navigation-by-user-activation"]&&da.set(1);t["allow-popups-to-escape-sandbox"]&&da.set(2);na.crypto&&na.crypto.subtle&&da.set(3);"TextDecoder"in na&&"TextEncoder"in na&&da.set(4);na=mf(da);ma.bc=na;ma.bih=Ga.height;ma.biw=
Ga.width;ma.brdim=p.join();b=b.h;b=(ma.vis=b.prerendering?3:{visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[b.visibilityState||b.webkitVisibilityState||b.mozVisibilityState||""]||0,ma.wgl=!!Qd.WebGLRenderingContext,ma);c=d.call(c,e,b);c.ca_type="image";a&&(c.bid=a);return c}
var Hj=new function(){var a=window.document;this.g=window;this.h=a};
E("yt.ads_.signals_.getAdSignalsString",function(a){return Cj(Gj(a))});Ua();var Ij="XMLHttpRequest"in C?function(){return new XMLHttpRequest}:null;
function Jj(){if(!Ij)return null;var a=Ij();return"open"in a?a:null}
;var Kj="client_dev_domain client_dev_regex_map client_dev_root_url client_rollout_override expflag forcedCapability jsfeat jsmode mods".split(" ");x(Kj);var Lj={Authorization:"AUTHORIZATION","X-Goog-EOM-Visitor-Id":"EOM_VISITOR_DATA","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-Youtube-Domain-Admin-State":"DOMAIN_ADMIN_STATE","X-Youtube-Chrome-Connected":"CHROME_CONNECTED_HEADER","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Delegation-Context":"INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL",
"X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM","X-Goog-AuthUser":"SESSION_INDEX","X-Goog-PageId":"DELEGATED_SESSION_ID"},Mj="app debugcss debugjs expflag force_ad_params force_ad_encrypted force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" ").concat(x(Kj)),Nj=!1;
function Oj(a,b){b=void 0===b?{}:b;var c=Fj(a),d=U("web_ajax_ignore_global_headers_if_set"),e;for(e in Lj){var f=T(Lj[e]),g="X-Goog-AuthUser"===e||"X-Goog-PageId"===e;"X-Goog-Visitor-Id"!==e||f||(f=T("VISITOR_DATA"));!f||!c&&Xb(a)||d&&void 0!==b[e]||"TVHTML5_UNPLUGGED"===T("INNERTUBE_CLIENT_NAME")&&g||(b[e]=f)}c&&T("SESSION_INDEX")&&"TVHTML5_UNPLUGGED"!==T("INNERTUBE_CLIENT_NAME")&&(b["X-Yt-Auth-Test"]="test");"X-Goog-EOM-Visitor-Id"in b&&"X-Goog-Visitor-Id"in b&&delete b["X-Goog-Visitor-Id"];if(c||
!Xb(a))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());if(c||!Xb(a)){try{var h=(new Intl.DateTimeFormat).resolvedOptions().timeZone}catch(k){}h&&(b["X-YouTube-Time-Zone"]=h)}document.location.hostname.endsWith("youtubeeducation.com")||!c&&Xb(a)||(b["X-YouTube-Ad-Signals"]=Cj(Gj()));return b}
function Pj(a){var b=window.location.search,c=Xb(a);U("debug_handle_relative_url_for_query_forward_killswitch")||!c&&Fj(a)&&(c=document.location.hostname);var d=Wb(a.match(Vb)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Dj(b),f={};bb(Mj,function(g){e[g]&&(f[g]=e[g])});
return Ej(a,f||{},!1)}
function Qj(a,b){var c=b.format||"JSON";a=Rj(a,b);var d=Sj(a,b),e=!1,f=Tj(a,function(k){if(!e){e=!0;h&&window.clearTimeout(h);a:switch(k&&"status"in k?k.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var l=!0;break a;default:l=!1}var m=null,n=400<=k.status&&500>k.status,q=500<=k.status&&600>k.status;if(l||n||q)m=Uj(a,c,k,b.convertToSafeHtml);if(l)a:if(k&&204==k.status)l=!0;else{switch(c){case "XML":l=0==parseInt(m&&m.return_code,10);break a;case "RAW":l=!0;break a}l=
!!m}m=m||{};n=b.context||C;l?b.onSuccess&&b.onSuccess.call(n,k,m):b.onError&&b.onError.call(n,k,m);b.onFinish&&b.onFinish.call(n,k,m)}},b.method,d,b.headers,b.responseType,b.withCredentials);
d=b.timeout||0;if(b.onTimeout&&0<d){var g=b.onTimeout;var h=vj(function(){e||(e=!0,f.abort(),window.clearTimeout(h),g.call(b.context||C,f))},d)}return f}
function Rj(a,b){b.includeDomain&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=T("XSRF_FIELD_NAME");if(b=b.urlParams)b[c]&&delete b[c],a=Ej(a,b||{},!0);return a}
function Sj(a,b){var c=T("XSRF_FIELD_NAME"),d=T("XSRF_TOKEN"),e=b.postBody||"",f=b.postParams,g=T("XSRF_FIELD_NAME"),h;b.headers&&(h=b.headers["Content-Type"]);b.excludeXsrf||Xb(a)&&!b.withCredentials&&Xb(a)!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.postParams&&b.postParams[g]||(f||(f={}),f[c]=d);(U("ajax_parse_query_data_only_when_filled")&&f&&0<Object.keys(f).length||f)&&"string"===typeof e&&(e=Dj(e),ob(e,f),e=b.postBodyFormat&&"JSON"==b.postBodyFormat?
JSON.stringify(e):$b(e));if(!(a=e)&&(a=f)){a:{for(var k in f){f=!1;break a}f=!0}a=!f}!Nj&&a&&"POST"!=b.method&&(Nj=!0,kj(Error("AJAX request with postData should use POST")));return e}
function Uj(a,b,c,d){var e=null;switch(b){case "JSON":try{var f=c.responseText}catch(g){throw d=Error("Error reading responseText"),d.params=a,lj(d),g;}a=c.getResponseHeader("Content-Type")||"";f&&0<=a.indexOf("json")&&(")]}'\n"===f.substring(0,5)&&(f=f.substring(5)),e=JSON.parse(f));break;case "XML":if(a=(a=c.responseXML)?Vj(a):null)e={},bb(a.getElementsByTagName("*"),function(g){e[g.tagName]=Wj(g)})}d&&Xj(e);
return e}
function Xj(a){if(Ma(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=a[b];if(void 0===pb){var e=null;var f=C.trustedTypes;if(f&&f.createPolicy){try{e=f.createPolicy("goog#html",{createHTML:Wa,createScript:Wa,createScriptURL:Wa})}catch(g){C.console&&C.console.error(g.message)}pb=e}else pb=e}d=(e=pb)?e.createHTML(d):d;a[c]=new Tb(d)}else Xj(a[b])}}
function Vj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Wj(a){var b="";bb(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Yj(a,b){b.method="POST";b.postParams||(b.postParams={});return Qj(a,b)}
function Tj(a,b,c,d,e,f,g,h){function k(){4==(l&&"readyState"in l?l.readyState:0)&&b&&jj(b)(l)}
c=void 0===c?"GET":c;d=void 0===d?"":d;h=void 0===h?!1:h;var l=Jj();if(!l)return null;"onloadend"in l?l.addEventListener("loadend",k,!1):l.onreadystatechange=k;U("debug_forward_web_query_parameters")&&(a=Pj(a));l.open(c,a,!0);f&&(l.responseType=f);g&&(l.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Oj(a,e))for(var m in e)l.setRequestHeader(m,e[m]),"content-type"==m.toLowerCase()&&(c=!1);c&&l.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
h&&"setAttributionReporting"in XMLHttpRequest.prototype&&l.setAttributionReporting({eventSourceEligible:!0,triggerEligible:!1});l.send(d);return l}
;var Zj=[{Xb:function(a){return"Cannot read property '"+a.key+"'"},
Jb:{Error:[{regexp:/(Permission denied) to access property "([^']+)"/,groups:["reason","key"]}],TypeError:[{regexp:/Cannot read property '([^']+)' of (null|undefined)/,groups:["key","value"]},{regexp:/\u65e0\u6cd5\u83b7\u53d6\u672a\u5b9a\u4e49\u6216 (null|undefined) \u5f15\u7528\u7684\u5c5e\u6027\u201c([^\u201d]+)\u201d/,groups:["value","key"]},{regexp:/\uc815\uc758\ub418\uc9c0 \uc54a\uc74c \ub610\ub294 (null|undefined) \ucc38\uc870\uc778 '([^']+)' \uc18d\uc131\uc744 \uac00\uc838\uc62c \uc218 \uc5c6\uc2b5\ub2c8\ub2e4./,
groups:["value","key"]},{regexp:/No se puede obtener la propiedad '([^']+)' de referencia nula o sin definir/,groups:["key"]},{regexp:/Unable to get property '([^']+)' of (undefined or null) reference/,groups:["key","value"]},{regexp:/(null) is not an object \(evaluating '(?:([^.]+)\.)?([^']+)'\)/,groups:["value","base","key"]}]}},{Xb:function(a){return"Cannot call '"+a.key+"'"},
Jb:{TypeError:[{regexp:/(?:([^ ]+)?\.)?([^ ]+) is not a function/,groups:["base","key"]},{regexp:/([^ ]+) called on (null or undefined)/,groups:["key","value"]},{regexp:/Object (.*) has no method '([^ ]+)'/,groups:["base","key"]},{regexp:/Object doesn't support property or method '([^ ]+)'/,groups:["key"]},{regexp:/\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u306f '([^']+)' \u30d7\u30ed\u30d1\u30c6\u30a3\u307e\u305f\u306f\u30e1\u30bd\u30c3\u30c9\u3092\u30b5\u30dd\u30fc\u30c8\u3057\u3066\u3044\u307e\u305b\u3093/,
groups:["key"]},{regexp:/\uac1c\uccb4\uac00 '([^']+)' \uc18d\uc131\uc774\ub098 \uba54\uc11c\ub4dc\ub97c \uc9c0\uc6d0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4./,groups:["key"]}]}},{Xb:function(a){return a.key+" is not defined"},
Jb:{ReferenceError:[{regexp:/(.*) is not defined/,groups:["key"]},{regexp:/Can't find variable: (.*)/,groups:["key"]}]}}];var bk={Da:[],Aa:[{mb:ak,weight:500}]};function ak(a){if("JavaException"===a.name)return!0;a=a.stack;return a.includes("chrome://")||a.includes("chrome-extension://")||a.includes("moz-extension://")}
;function ck(){this.Aa=[];this.Da=[]}
var dk;function ek(){if(!dk){var a=dk=new ck;a.Da.length=0;a.Aa.length=0;bk.Da&&a.Da.push.apply(a.Da,bk.Da);bk.Aa&&a.Aa.push.apply(a.Aa,bk.Aa)}return dk}
;var fk=new M;function gk(a){function b(){return a.charCodeAt(d++)}
var c=a.length,d=0;do{var e=hk(b);if(Infinity===e)break;var f=e>>3;switch(e&7){case 0:e=hk(b);if(2===f)return e;break;case 1:if(2===f)return;d+=8;break;case 2:e=hk(b);if(2===f)return a.substr(d,e);d+=e;break;case 5:if(2===f)return;d+=4;break;default:return}}while(d<c)}
function hk(a){var b=a(),c=b&127;if(128>b)return c;b=a();c|=(b&127)<<7;if(128>b)return c;b=a();c|=(b&127)<<14;if(128>b)return c;b=a();return 128>b?c|(b&127)<<21:Infinity}
;function ik(a,b,c,d){if(a)if(Array.isArray(a)){var e=d;for(d=0;d<a.length&&!(a[d]&&(e+=jk(d,a[d],b,c),500<e));d++);d=e}else if("object"===typeof a)for(e in a){if(a[e]){var f=a[e];var g=b;var h=c;g="string"!==typeof f||"clickTrackingParams"!==e&&"trackingParams"!==e?0:(f=gk(atob(f.replace(/-/g,"+").replace(/_/g,"/"))))?jk(e+".ve",f,g,h):0;d+=g;d+=jk(e,a[e],b,c);if(500<d)break}}else c[b]=kk(a),d+=c[b].length;else c[b]=kk(a),d+=c[b].length;return d}
function jk(a,b,c,d){c+="."+a;a=kk(b);d[c]=a;return c.length+a.length}
function kk(a){try{return("string"===typeof a?a:String(JSON.stringify(a))).substr(0,500)}catch(b){return"unable to serialize "+typeof a+" ("+b.message+")"}}
;function lk(){}
;function mk(){if(!C.matchMedia)return"WEB_DISPLAY_MODE_UNKNOWN";try{return C.matchMedia("(display-mode: standalone)").matches?"WEB_DISPLAY_MODE_STANDALONE":C.matchMedia("(display-mode: minimal-ui)").matches?"WEB_DISPLAY_MODE_MINIMAL_UI":C.matchMedia("(display-mode: fullscreen)").matches?"WEB_DISPLAY_MODE_FULLSCREEN":C.matchMedia("(display-mode: browser)").matches?"WEB_DISPLAY_MODE_BROWSER":"WEB_DISPLAY_MODE_UNKNOWN"}catch(a){return"WEB_DISPLAY_MODE_UNKNOWN"}}
;function nk(a){switch(a){case "DESKTOP":return 1;case "UNKNOWN_PLATFORM":return 0;case "TV":return 2;case "GAME_CONSOLE":return 3;case "MOBILE":return 4;case "TABLET":return 5}}
;E("ytglobal.prefsUserPrefsPrefs_",D("ytglobal.prefsUserPrefsPrefs_")||{});var ok={bluetooth:"CONN_DISCO",cellular:"CONN_CELLULAR_UNKNOWN",ethernet:"CONN_WIFI",none:"CONN_NONE",wifi:"CONN_WIFI",wimax:"CONN_CELLULAR_4G",other:"CONN_UNKNOWN",unknown:"CONN_UNKNOWN","slow-2g":"CONN_CELLULAR_2G","2g":"CONN_CELLULAR_2G","3g":"CONN_CELLULAR_3G","4g":"CONN_CELLULAR_4G"},pk={CONN_DEFAULT:0,CONN_UNKNOWN:1,CONN_NONE:2,CONN_WIFI:3,CONN_CELLULAR_2G:4,CONN_CELLULAR_3G:5,CONN_CELLULAR_4G:6,CONN_CELLULAR_UNKNOWN:7,CONN_DISCO:8,CONN_CELLULAR_5G:9,CONN_WIFI_METERED:10,CONN_CELLULAR_5G_SA:11,
CONN_CELLULAR_5G_NSA:12,CONN_WIRED:30,CONN_INVALID:31},qk={EFFECTIVE_CONNECTION_TYPE_UNKNOWN:0,EFFECTIVE_CONNECTION_TYPE_OFFLINE:1,EFFECTIVE_CONNECTION_TYPE_SLOW_2G:2,EFFECTIVE_CONNECTION_TYPE_2G:3,EFFECTIVE_CONNECTION_TYPE_3G:4,EFFECTIVE_CONNECTION_TYPE_4G:5},rk={"slow-2g":"EFFECTIVE_CONNECTION_TYPE_SLOW_2G","2g":"EFFECTIVE_CONNECTION_TYPE_2G","3g":"EFFECTIVE_CONNECTION_TYPE_3G","4g":"EFFECTIVE_CONNECTION_TYPE_4G"};function sk(){var a=C.navigator;return a?a.connection:void 0}
;function tk(a){var b=Ea.apply(1,arguments);var c=Error.call(this,a);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.args=[].concat(x(b))}
y(tk,Error);function uk(){try{return vk(),!0}catch(a){return!1}}
function vk(){if(void 0!==T("DATASYNC_ID"))return T("DATASYNC_ID");throw new tk("Datasync ID not set","unknown");}
;function wk(){}
function xk(a,b){return kf.Ia(a,0,b)}
wk.prototype.qa=function(a,b){return this.Ia(a,1,b)};
wk.prototype.jb=function(a){var b=D("yt.scheduler.instance.addImmediateJob");b?b(a):a()};var yk=V("web_emulated_idle_callback_delay",300),zk=1E3/60-3,Ak=[8,5,4,3,2,1,0];
function Bk(a){a=void 0===a?{}:a;Ae.call(this);this.h=[];this.i={};this.hb=this.g=0;this.gb=this.o=!1;this.M=[];this.S=this.ib=!1;for(var b=w(Ak),c=b.next();!c.done;c=b.next())this.h[c.value]=[];this.j=0;this.Sc=a.timeout||1;this.H=zk;this.u=0;this.wb=this.wd.bind(this);this.Rc=this.Bd.bind(this);this.Oc=this.Tc.bind(this);this.Pc=this.hd.bind(this);this.Qc=this.xd.bind(this);this.hc=!!window.requestIdleCallback&&!!window.cancelIdleCallback&&!U("disable_scheduler_requestIdleCallback");(this.za=!1!==
a.useRaf&&!!window.requestAnimationFrame)&&document.addEventListener("visibilitychange",this.wb)}
y(Bk,Ae);r=Bk.prototype;r.jb=function(a){var b=Ua();Ck(a);a=Ua()-b;this.o||(this.H-=a)};
r.Ia=function(a,b,c){++this.hb;if(10===b)return this.jb(a),this.hb;var d=this.hb;this.i[d]=a;this.o&&!c?this.M.push({id:d,priority:b}):(this.h[b].push(d),this.gb||this.o||(0!==this.g&&Dk(this)!==this.u&&Ek(this),this.start()));return d};
r.ba=function(a){delete this.i[a]};
function Fk(a){a.M.length=0;for(var b=5;0<=b;b--)a.h[b].length=0;a.h[8].length=0;a.i={};Ek(a)}
function Dk(a){if(a.h[8].length){if(a.S)return 4;if(!document.hidden&&a.za)return 3}for(var b=5;b>=a.j;b--)if(0<a.h[b].length)return 0<b?!document.hidden&&a.za?3:2:1;return 0}
function Gk(a){var b=D("yt.logging.errors.log");b&&b(a)}
function Ck(a){try{a()}catch(b){Gk(b)}}
function Hk(a){for(var b=w(Ak),c=b.next();!c.done;c=b.next())if(a.h[c.value].length)return!0;return!1}
r.hd=function(a){var b=void 0;a&&(b=a.timeRemaining());this.ib=!0;Ik(this,b);this.ib=!1};
r.Bd=function(){Ik(this)};
r.Tc=function(){Jk(this)};
r.xd=function(a){this.S=!0;var b=Dk(this);4===b&&b!==this.u&&(Ek(this),this.start());Ik(this,void 0,a);this.S=!1};
r.wd=function(){document.hidden||Jk(this);this.g&&(Ek(this),this.start())};
function Jk(a){Ek(a);a.o=!0;for(var b=Ua(),c=a.h[8];c.length;){var d=c.shift(),e=a.i[d];delete a.i[d];e&&Ck(e)}Kk(a);a.o=!1;Hk(a)&&a.start();b=Ua()-b;a.H-=b}
function Kk(a){for(var b=0,c=a.M.length;b<c;b++){var d=a.M[b];a.h[d.priority].push(d.id)}a.M.length=0}
function Ik(a,b,c){a.S&&4===a.u&&a.g||Ek(a);a.o=!0;b=Ua()+(b||a.H);for(var d=a.h[5];d.length;){var e=d.shift(),f=a.i[e];delete a.i[e];if(f)try{f(c)}catch(l){Gk(l)}}for(d=a.h[4];d.length;)c=d.shift(),e=a.i[c],delete a.i[c],e&&Ck(e);d=a.ib?0:1;d=a.j>d?a.j:d;if(!(Ua()>=b)){do{a:{c=a;e=d;for(f=3;f>=e;f--)for(var g=c.h[f];g.length;){var h=g.shift(),k=c.i[h];delete c.i[h];if(k){c=k;break a}}c=null}c&&Ck(c)}while(c&&Ua()<b)}a.o=!1;Kk(a);a.H=zk;Hk(a)&&a.start()}
r.start=function(){this.gb=!1;if(0===this.g)switch(this.u=Dk(this),this.u){case 1:var a=this.Pc;this.g=this.hc?window.requestIdleCallback(a,{timeout:3E3}):window.setTimeout(a,yk);break;case 2:this.g=window.setTimeout(this.Rc,this.Sc);break;case 3:this.g=window.requestAnimationFrame(this.Qc);break;case 4:this.g=window.setTimeout(this.Oc,0)}};
function Ek(a){if(a.g){switch(a.u){case 1:var b=a.g;a.hc?window.cancelIdleCallback(b):window.clearTimeout(b);break;case 2:case 4:window.clearTimeout(a.g);break;case 3:window.cancelAnimationFrame(a.g)}a.g=0}}
r.sa=function(){Fk(this);Ek(this);this.za&&document.removeEventListener("visibilitychange",this.wb);Ae.prototype.sa.call(this)};var Lk=D("yt.scheduler.instance.timerIdMap_")||{},Mk=V("kevlar_tuner_scheduler_soft_state_timer_ms",800),Nk=0,Ok=0;function Pk(){var a=D("ytglobal.schedulerInstanceInstance_");if(!a||a.Ja)a=new Bk(T("scheduler")||{}),E("ytglobal.schedulerInstanceInstance_",a);return a}
function Qk(){Rk();var a=D("ytglobal.schedulerInstanceInstance_");a&&(ze(a),E("ytglobal.schedulerInstanceInstance_",null))}
function Rk(){Fk(Pk());for(var a in Lk)Lk.hasOwnProperty(a)&&delete Lk[Number(a)]}
function Sk(a,b,c){if(!c)return c=void 0===c,-Pk().Ia(a,b,c);var d=window.setTimeout(function(){var e=Pk().Ia(a,b);Lk[d]=e},c);
return d}
function Tk(a){Pk().jb(a)}
function Uk(a){var b=Pk();if(0>a)b.ba(-a);else{var c=Lk[a];c?(b.ba(c),delete Lk[a]):window.clearTimeout(a)}}
function Vk(){Wk()}
function Wk(){window.clearTimeout(Nk);Pk().start()}
function Xk(){var a=Pk();Ek(a);a.gb=!0;window.clearTimeout(Nk);Nk=window.setTimeout(Vk,Mk)}
function Yk(){window.clearTimeout(Ok);Ok=window.setTimeout(function(){Zk(0)},Mk)}
function Zk(a){Yk();var b=Pk();b.j=a;b.start()}
function $k(a){Yk();var b=Pk();b.j>a&&(b.j=a,b.start())}
function al(){window.clearTimeout(Ok);var a=Pk();a.j=0;a.start()}
;function bl(){wk.apply(this,arguments)}
y(bl,wk);function cl(){bl.g||(bl.g=new bl);return bl.g}
bl.prototype.Ia=function(a,b,c){void 0!==c&&Number.isNaN(Number(c))&&(c=void 0);var d=D("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):vj(a,c||0)};
bl.prototype.ba=function(a){if(void 0===a||!Number.isNaN(Number(a))){var b=D("yt.scheduler.instance.cancelJob");b?b(a):window.clearTimeout(a)}};
bl.prototype.start=function(){var a=D("yt.scheduler.instance.start");a&&a()};
var kf=cl();
U("web_scheduler_auto_init")&&!D("yt.scheduler.initialized")&&(E("yt.scheduler.instance.dispose",Qk),E("yt.scheduler.instance.addJob",Sk),E("yt.scheduler.instance.addImmediateJob",Tk),E("yt.scheduler.instance.cancelJob",Uk),E("yt.scheduler.instance.cancelAllJobs",Rk),E("yt.scheduler.instance.start",Wk),E("yt.scheduler.instance.pause",Xk),E("yt.scheduler.instance.setPriorityThreshold",Zk),E("yt.scheduler.instance.enablePriorityThreshold",$k),E("yt.scheduler.instance.clearPriorityThreshold",al),E("yt.scheduler.initialized",
!0));function dl(a){var b=new Kg;if(b.g)try{b.g.setItem("__sak","1");b.g.removeItem("__sak");var c=!0}catch(d){c=!1}else c=!1;(b=c?a?new Qg(b,a):b:null)||(a=new Lg(a||"UserDataSharedStore"),b=a.g?a:null);this.g=(a=b)?new Gg(a):null;this.h=document.domain||window.location.hostname}
dl.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.g)try{this.g.set(a,b,Date.now()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(hg(b))}catch(f){return}else e=escape(b);b=this.h;te.set(""+a,e,{Vb:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
dl.prototype.get=function(a,b){var c=void 0,d=!this.g;if(!d)try{c=this.g.get(a)}catch(e){d=!0}if(d&&(c=te.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
dl.prototype.remove=function(a){this.g&&this.g.remove(a);var b=this.h;te.remove(""+a,"/",void 0===b?"youtube.com":b)};var el=function(){var a;return function(){a||(a=new dl("ytidb"));return a}}();
function fl(){var a;return null==(a=el())?void 0:a.get("LAST_RESULT_ENTRY_KEY",!0)}
;var gl=[],hl=!1;function il(a){hl||(gl.push({type:"ERROR",payload:a}),10<gl.length&&gl.shift())}
function jl(a,b){hl||(gl.push({type:"EVENT",eventType:a,payload:b}),10<gl.length&&gl.shift())}
;function kl(a){if(0<=a.indexOf(":"))throw Error("Database name cannot contain ':'");}
function ll(a){return a.substr(0,a.indexOf(":"))||a}
;var ml=xc||yc;var nl={},ol=(nl.AUTH_INVALID="No user identifier specified.",nl.EXPLICIT_ABORT="Transaction was explicitly aborted.",nl.IDB_NOT_SUPPORTED="IndexedDB is not supported.",nl.MISSING_INDEX="Index not created.",nl.MISSING_OBJECT_STORES="Object stores not created.",nl.DB_DELETED_BY_MISSING_OBJECT_STORES="Database is deleted because expected object stores were not created.",nl.DB_REOPENED_BY_MISSING_OBJECT_STORES="Database is reopened because expected object stores were not created.",nl.UNKNOWN_ABORT="Transaction was aborted for unknown reasons.",
nl.QUOTA_EXCEEDED="The current transaction exceeded its quota limitations.",nl.QUOTA_MAYBE_EXCEEDED="The current transaction may have failed because of exceeding quota limitations.",nl.EXECUTE_TRANSACTION_ON_CLOSED_DB="Can't start a transaction on a closed database",nl.INCOMPATIBLE_DB_VERSION="The binary is incompatible with the database version",nl),pl={},ql=(pl.AUTH_INVALID="ERROR",pl.EXECUTE_TRANSACTION_ON_CLOSED_DB="WARNING",pl.EXPLICIT_ABORT="IGNORED",pl.IDB_NOT_SUPPORTED="ERROR",pl.MISSING_INDEX=
"WARNING",pl.MISSING_OBJECT_STORES="ERROR",pl.DB_DELETED_BY_MISSING_OBJECT_STORES="WARNING",pl.DB_REOPENED_BY_MISSING_OBJECT_STORES="WARNING",pl.QUOTA_EXCEEDED="WARNING",pl.QUOTA_MAYBE_EXCEEDED="WARNING",pl.UNKNOWN_ABORT="WARNING",pl.INCOMPATIBLE_DB_VERSION="WARNING",pl),rl={},sl=(rl.AUTH_INVALID=!1,rl.EXECUTE_TRANSACTION_ON_CLOSED_DB=!1,rl.EXPLICIT_ABORT=!1,rl.IDB_NOT_SUPPORTED=!1,rl.MISSING_INDEX=!1,rl.MISSING_OBJECT_STORES=!1,rl.DB_DELETED_BY_MISSING_OBJECT_STORES=!1,rl.DB_REOPENED_BY_MISSING_OBJECT_STORES=
!1,rl.QUOTA_EXCEEDED=!1,rl.QUOTA_MAYBE_EXCEEDED=!0,rl.UNKNOWN_ABORT=!0,rl.INCOMPATIBLE_DB_VERSION=!1,rl);function X(a,b,c,d,e){b=void 0===b?{}:b;c=void 0===c?ol[a]:c;d=void 0===d?ql[a]:d;e=void 0===e?sl[a]:e;tk.call(this,c,Object.assign({},{name:"YtIdbKnownError",isSw:void 0===self.document,isIframe:self!==self.top,type:a},b));this.type=a;this.message=c;this.level=d;this.g=e;Object.setPrototypeOf(this,X.prototype)}
y(X,tk);function tl(a,b){X.call(this,"MISSING_OBJECT_STORES",{expectedObjectStores:b,foundObjectStores:a},ol.MISSING_OBJECT_STORES);Object.setPrototypeOf(this,tl.prototype)}
y(tl,X);function ul(a,b){var c=Error.call(this);this.message=c.message;"stack"in c&&(this.stack=c.stack);this.index=a;this.objectStore=b;Object.setPrototypeOf(this,ul.prototype)}
y(ul,Error);var vl=["The database connection is closing","Can't start a transaction on a closed database","A mutation operation was attempted on a database that did not allow mutations"];
function wl(a,b,c,d){b=ll(b);var e=a instanceof Error?a:Error("Unexpected error: "+a);if(e instanceof X)return e;a={objectStoreNames:c,dbName:b,dbVersion:d};if("QuotaExceededError"===e.name)return new X("QUOTA_EXCEEDED",a);if(zc&&"UnknownError"===e.name)return new X("QUOTA_MAYBE_EXCEEDED",a);if(e instanceof ul)return new X("MISSING_INDEX",Object.assign({},a,{objectStore:e.objectStore,index:e.index}));if("InvalidStateError"===e.name&&vl.some(function(f){return e.message.includes(f)}))return new X("EXECUTE_TRANSACTION_ON_CLOSED_DB",
a);
if("AbortError"===e.name)return new X("UNKNOWN_ABORT",a,e.message);e.args=[Object.assign({},a,{name:"IdbError",pe:e.name})];e.level="WARNING";return e}
function xl(a,b,c){var d=fl();return new X("IDB_NOT_SUPPORTED",{context:{caller:a,publicName:b,version:c,hasSucceededOnce:null==d?void 0:d.hasSucceededOnce}})}
;function yl(a){if(!a)throw Error();throw a;}
function zl(a){return a}
function Al(a){this.g=a}
function Bl(a){function b(e){if("PENDING"===d.state.status){d.state={status:"REJECTED",reason:e};e=w(d.h);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
function c(e){if("PENDING"===d.state.status){d.state={status:"FULFILLED",value:e};e=w(d.g);for(var f=e.next();!f.done;f=e.next())f=f.value,f()}}
var d=this;this.state={status:"PENDING"};this.g=[];this.h=[];a=a.g;try{a(c,b)}catch(e){b(e)}}
Bl.resolve=function(a){return new Bl(new Al(function(b,c){a instanceof Bl?a.then(b,c):b(a)}))};
Bl.reject=function(a){return new Bl(new Al(function(b,c){c(a)}))};
Bl.prototype.then=function(a,b){var c=this,d=null!=a?a:zl,e=null!=b?b:yl;return new Bl(new Al(function(f,g){"PENDING"===c.state.status?(c.g.push(function(){Cl(c,c,d,f,g)}),c.h.push(function(){Dl(c,c,e,f,g)})):"FULFILLED"===c.state.status?Cl(c,c,d,f,g):"REJECTED"===c.state.status&&Dl(c,c,e,f,g)}))};
function El(a,b){a.then(void 0,b)}
function Cl(a,b,c,d,e){try{if("FULFILLED"!==a.state.status)throw Error("calling handleResolve before the promise is fulfilled.");var f=c(a.state.value);f instanceof Bl?Fl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Dl(a,b,c,d,e){try{if("REJECTED"!==a.state.status)throw Error("calling handleReject before the promise is rejected.");var f=c(a.state.reason);f instanceof Bl?Fl(a,b,f,d,e):d(f)}catch(g){e(g)}}
function Fl(a,b,c,d,e){b===c?e(new TypeError("Circular promise chain detected.")):c.then(function(f){f instanceof Bl?Fl(a,b,f,d,e):d(f)},function(f){e(f)})}
;function Gl(a,b,c){function d(){c(a.error);f()}
function e(){b(a.result);f()}
function f(){try{a.removeEventListener("success",e),a.removeEventListener("error",d)}catch(g){}}
a.addEventListener("success",e);a.addEventListener("error",d)}
function Hl(a){return new Promise(function(b,c){Gl(a,b,c)})}
function Il(a){return new Bl(new Al(function(b,c){Gl(a,b,c)}))}
;function Jl(a,b){return new Bl(new Al(function(c,d){function e(){var f=a?b(a):null;f?f.then(function(g){a=g;e()},d):c()}
e()}))}
;var Kl=window,Y=Kl.ytcsi&&Kl.ytcsi.now?Kl.ytcsi.now:Kl.performance&&Kl.performance.timing&&Kl.performance.now&&Kl.performance.timing.navigationStart?function(){return Kl.performance.timing.navigationStart+Kl.performance.now()}:function(){return(new Date).getTime()};function Ll(a,b){this.g=a;this.options=b;this.transactionCount=0;this.i=Math.round(Y());this.h=!1}
r=Ll.prototype;r.add=function(a,b,c){return Ml(this,[a],{mode:"readwrite",W:!0},function(d){return d.objectStore(a).add(b,c)})};
r.clear=function(a){return Ml(this,[a],{mode:"readwrite",W:!0},function(b){return b.objectStore(a).clear()})};
r.close=function(){this.g.close();var a;(null==(a=this.options)?0:a.closed)&&this.options.closed()};
function Nl(a,b,c){a=a.g.createObjectStore(b,c);return new Ol(a)}
r.delete=function(a,b){return Ml(this,[a],{mode:"readwrite",W:!0},function(c){return c.objectStore(a).delete(b)})};
r.get=function(a,b){return Ml(this,[a],{mode:"readonly",W:!0},function(c){return c.objectStore(a).get(b)})};
function Pl(a,b,c){return Ml(a,[b],{mode:"readwrite",W:!0},function(d){d=d.objectStore(b);return Il(d.g.put(c,void 0))})}
r.objectStoreNames=function(){return Array.from(this.g.objectStoreNames)};
function Ml(a,b,c,d){var e,f,g,h,k,l,m,n,q,p,t,u;return B(function(z){switch(z.g){case 1:var G={mode:"readonly",W:!1,tag:"IDB_TRANSACTION_TAG_UNKNOWN"};"string"===typeof c?G.mode=c:Object.assign(G,c);e=G;a.transactionCount++;f=e.W?3:1;g=0;case 2:if(h){z.B(4);break}g++;k=Math.round(Y());va(z,5);l=a.g.transaction(b,e.mode);G=new Ql(l);G=Rl(G,d);return A(z,G,7);case 7:return m=z.h,n=Math.round(Y()),Sl(a,k,n,g,void 0,b.join(),e),z.return(m);case 5:q=wa(z);p=Math.round(Y());t=wl(q,a.g.name,b.join(),a.g.version);
if((u=t instanceof X&&!t.g)||g>=f)Sl(a,k,p,g,t,b.join(),e),h=t;z.B(2);break;case 4:return z.return(Promise.reject(h))}})}
function Sl(a,b,c,d,e,f,g){b=c-b;e?(e instanceof X&&("QUOTA_EXCEEDED"===e.type||"QUOTA_MAYBE_EXCEEDED"===e.type)&&jl("QUOTA_EXCEEDED",{dbName:ll(a.g.name),objectStoreNames:f,transactionCount:a.transactionCount,transactionMode:g.mode}),e instanceof X&&"UNKNOWN_ABORT"===e.type&&(c-=a.i,0>c&&c>=Math.pow(2,31)&&(c=0),jl("TRANSACTION_UNEXPECTEDLY_ABORTED",{objectStoreNames:f,transactionDuration:b,transactionCount:a.transactionCount,dbDuration:c}),a.h=!0),Tl(a,!1,d,f,b,g.tag),il(e)):Tl(a,!0,d,f,b,g.tag)}
function Tl(a,b,c,d,e,f){jl("TRANSACTION_ENDED",{objectStoreNames:d,connectionHasUnknownAbortedTransaction:a.h,duration:e,isSuccessful:b,tryCount:c,tag:void 0===f?"IDB_TRANSACTION_TAG_UNKNOWN":f})}
r.getName=function(){return this.g.name};
function Ol(a){this.g=a}
r=Ol.prototype;r.add=function(a,b){return Il(this.g.add(a,b))};
r.autoIncrement=function(){return this.g.autoIncrement};
r.clear=function(){return Il(this.g.clear()).then(function(){})};
function Ul(a,b,c){a.g.createIndex(b,c,{unique:!1})}
function Vl(a,b){return Wl(a,{query:b},function(c){return c.delete().then(function(){return c.continue()})}).then(function(){})}
r.delete=function(a){return a instanceof IDBKeyRange?Vl(this,a):Il(this.g.delete(a))};
r.get=function(a){return Il(this.g.get(a))};
r.index=function(a){try{return new Xl(this.g.index(a))}catch(b){if(b instanceof Error&&"NotFoundError"===b.name)throw new ul(a,this.g.name);throw b;}};
r.getName=function(){return this.g.name};
r.keyPath=function(){return this.g.keyPath};
function Wl(a,b,c){a=a.g.openCursor(b.query,b.direction);return Yl(a).then(function(d){return Jl(d,c)})}
function Ql(a){var b=this;this.g=a;this.i=new Map;this.h=!1;this.done=new Promise(function(c,d){b.g.addEventListener("complete",function(){c()});
b.g.addEventListener("error",function(e){e.currentTarget===e.target&&d(b.g.error)});
b.g.addEventListener("abort",function(){var e=b.g.error;if(e)d(e);else if(!b.h){e=X;for(var f=b.g.objectStoreNames,g=[],h=0;h<f.length;h++){var k=f.item(h);if(null===k)throw Error("Invariant: item in DOMStringList is null");g.push(k)}e=new e("UNKNOWN_ABORT",{objectStoreNames:g.join(),dbName:b.g.db.name,mode:b.g.mode});d(e)}})})}
function Rl(a,b){var c=new Promise(function(d,e){try{El(b(a).then(function(f){d(f)}),e)}catch(f){e(f),a.abort()}});
return Promise.all([c,a.done]).then(function(d){return w(d).next().value})}
Ql.prototype.abort=function(){this.g.abort();this.h=!0;throw new X("EXPLICIT_ABORT");};
Ql.prototype.objectStore=function(a){a=this.g.objectStore(a);var b=this.i.get(a);b||(b=new Ol(a),this.i.set(a,b));return b};
function Xl(a){this.g=a}
r=Xl.prototype;r.delete=function(a){return Zl(this,{query:a},function(b){return b.delete().then(function(){return b.continue()})})};
r.get=function(a){return Il(this.g.get(a))};
r.getKey=function(a){return Il(this.g.getKey(a))};
r.keyPath=function(){return this.g.keyPath};
r.unique=function(){return this.g.unique};
function Zl(a,b,c){a=a.g.openCursor(void 0===b.query?null:b.query,void 0===b.direction?"next":b.direction);return Yl(a).then(function(d){return Jl(d,c)})}
function $l(a,b){this.request=a;this.cursor=b}
function Yl(a){return Il(a).then(function(b){return b?new $l(a,b):null})}
r=$l.prototype;r.advance=function(a){this.cursor.advance(a);return Yl(this.request)};
r.continue=function(a){this.cursor.continue(a);return Yl(this.request)};
r.delete=function(){return Il(this.cursor.delete()).then(function(){})};
r.getKey=function(){return this.cursor.key};
r.ja=function(){return this.cursor.value};
r.update=function(a){return Il(this.cursor.update(a))};function am(a,b,c){return new Promise(function(d,e){function f(){q||(q=new Ll(g.result,{closed:n}));return q}
var g=void 0!==b?self.indexedDB.open(a,b):self.indexedDB.open(a);var h=c.Vc,k=c.Wc,l=c.Ad,m=c.upgrade,n=c.closed,q;g.addEventListener("upgradeneeded",function(p){try{if(null===p.newVersion)throw Error("Invariant: newVersion on IDbVersionChangeEvent is null");if(null===g.transaction)throw Error("Invariant: transaction on IDbOpenDbRequest is null");p.dataLoss&&"none"!==p.dataLoss&&jl("IDB_DATA_CORRUPTED",{reason:p.dataLossMessage||"unknown reason",dbName:ll(a)});var t=f(),u=new Ql(g.transaction);m&&
m(t,function(z){return p.oldVersion<z&&p.newVersion>=z},u);
u.done.catch(function(z){e(z)})}catch(z){e(z)}});
g.addEventListener("success",function(){var p=g.result;k&&p.addEventListener("versionchange",function(){k(f())});
p.addEventListener("close",function(){jl("IDB_UNEXPECTEDLY_CLOSED",{dbName:ll(a),dbVersion:p.version});l&&l()});
d(f())});
g.addEventListener("error",function(){e(g.error)});
h&&g.addEventListener("blocked",function(){h()})})}
function bm(a,b,c){c=void 0===c?{}:c;return am(a,b,c)}
function cm(a,b){b=void 0===b?{}:b;var c,d,e,f;return B(function(g){if(1==g.g)return va(g,2),c=self.indexedDB.deleteDatabase(a),d=b,(e=d.Vc)&&c.addEventListener("blocked",function(){e()}),A(g,Hl(c),4);
if(2!=g.g)g.g=0,g.o=0;else throw f=wa(g),wl(f,a,"",-1);})}
;function dm(a,b){this.name=a;this.options=b;this.i=!0;this.o=this.j=0}
dm.prototype.h=function(a,b,c){c=void 0===c?{}:c;return bm(a,b,c)};
dm.prototype.delete=function(a){a=void 0===a?{}:a;return cm(this.name,a)};
function em(a,b){return new X("INCOMPATIBLE_DB_VERSION",{dbName:a.name,oldVersion:a.options.version,newVersion:b})}
function fm(a,b){if(!b)throw xl("openWithToken",ll(a.name));return gm(a)}
function gm(a){function b(){var f,g,h,k,l,m,n,q,p,t;return B(function(u){switch(u.g){case 1:return g=null!=(f=Error().stack)?f:"",va(u,2),A(u,a.h(a.name,a.options.version,d),4);case 4:h=u.h;for(var z=a.options,G=[],R=w(Object.keys(z.cb)),P=R.next();!P.done;P=R.next()){P=P.value;var Fa=z.cb[P],Uc=void 0===Fa.yd?Number.MAX_VALUE:Fa.yd;!(h.g.version>=Fa.kb)||h.g.version>=Uc||h.g.objectStoreNames.contains(P)||G.push(P)}k=G;if(0===k.length){u.B(5);break}l=Object.keys(a.options.cb);m=h.objectStoreNames();
if(a.o<V("ytidb_reopen_db_retries",0))return a.o++,h.close(),il(new X("DB_REOPENED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());if(!(a.j<V("ytidb_remake_db_retries",1))){u.B(6);break}a.j++;return A(u,a.delete(),7);case 7:return il(new X("DB_DELETED_BY_MISSING_OBJECT_STORES",{dbName:a.name,expectedObjectStores:l,foundObjectStores:m})),u.return(b());case 6:throw new tl(m,l);case 5:return u.return(h);case 2:n=wa(u);if(n instanceof DOMException?
"VersionError"!==n.name:"DOMError"in self&&n instanceof DOMError?"VersionError"!==n.name:!(n instanceof Object&&"message"in n)||"An attempt was made to open a database using a lower version than the existing version."!==n.message){u.B(8);break}return A(u,a.h(a.name,void 0,Object.assign({},d,{upgrade:void 0})),9);case 9:q=u.h;p=q.g.version;if(void 0!==a.options.version&&p>a.options.version+1)throw q.close(),a.i=!1,em(a,p);return u.return(q);case 8:throw c(),n instanceof Error&&!U("ytidb_async_stack_killswitch")&&
(n.stack=n.stack+"\n"+g.substring(g.indexOf("\n")+1)),wl(n,a.name,"",null!=(t=a.options.version)?t:-1);}})}
function c(){a.g===e&&(a.g=void 0)}
if(!a.i)throw em(a);if(a.g)return a.g;var d={Wc:function(f){f.close()},
closed:c,Ad:c,upgrade:a.options.upgrade};var e=b();a.g=e;return a.g}
;var hm=new dm("YtIdbMeta",{cb:{databases:{kb:1}},upgrade:function(a,b){b(1)&&Nl(a,"databases",{keyPath:"actualName"})}});
function im(a,b){var c;return B(function(d){if(1==d.g)return A(d,fm(hm,b),2);c=d.h;return d.return(Ml(c,["databases"],{W:!0,mode:"readwrite"},function(e){var f=e.objectStore("databases");return f.get(a.actualName).then(function(g){if(g?a.actualName!==g.actualName||a.publicName!==g.publicName||a.userIdentifier!==g.userIdentifier:1)return Il(f.g.put(a,void 0)).then(function(){})})}))})}
function jm(a,b){var c;return B(function(d){if(1==d.g)return a?A(d,fm(hm,b),2):d.return();c=d.h;return d.return(c.delete("databases",a))})}
function km(a,b){var c,d;return B(function(e){return 1==e.g?(c=[],A(e,fm(hm,b),2)):3!=e.g?(d=e.h,A(e,Ml(d,["databases"],{W:!0,mode:"readonly"},function(f){c.length=0;return Wl(f.objectStore("databases"),{},function(g){a(g.ja())&&c.push(g.ja());return g.continue()})}),3)):e.return(c)})}
function lm(a){return km(function(b){return"LogsDatabaseV2"===b.publicName&&void 0!==b.userIdentifier},a)}
;var Wm,Xm=new function(){}(new function(){});
function Ym(){var a,b,c,d;return B(function(e){switch(e.g){case 1:a=fl();if(null==(b=a)?0:b.hasSucceededOnce)return e.return(!0);var f;if(f=ml)f=/WebKit\/([0-9]+)/.exec(Hb()),f=!!(f&&600<=parseInt(f[1],10));f&&(f=/WebKit\/([0-9]+)/.exec(Hb()),f=!(f&&602<=parseInt(f[1],10)));if(f||hc)return e.return(!1);try{if(c=self,!(c.indexedDB&&c.IDBIndex&&c.IDBKeyRange&&c.IDBObjectStore))return e.return(!1)}catch(g){return e.return(!1)}if(!("IDBTransaction"in self&&"objectStoreNames"in IDBTransaction.prototype))return e.return(!1);
va(e,2);d={actualName:"yt-idb-test-do-not-use",publicName:"yt-idb-test-do-not-use",userIdentifier:void 0};return A(e,im(d,Xm),4);case 4:return A(e,jm("yt-idb-test-do-not-use",Xm),5);case 5:return e.return(!0);case 2:return wa(e),e.return(!1)}})}
function Zm(){if(void 0!==Wm)return Wm;hl=!0;return Wm=Ym().then(function(a){hl=!1;var b;if(null!=(b=el())&&b.g){var c;b={hasSucceededOnce:(null==(c=fl())?void 0:c.hasSucceededOnce)||a};var d;null==(d=el())||d.set("LAST_RESULT_ENTRY_KEY",b,2592E3,!0)}return a})}
function $m(){return D("ytglobal.idbToken_")||void 0}
function an(){var a=$m();return a?Promise.resolve(a):Zm().then(function(b){(b=b?Xm:void 0)&&E("ytglobal.idbToken_",b);return b})}
;new ig;function bn(a){if(!uk())throw a=new X("AUTH_INVALID",{dbName:a}),il(a),a;var b=vk();return{actualName:a+":"+b,publicName:a,userIdentifier:b}}
function cn(a,b,c,d){var e,f,g,h,k,l;return B(function(m){switch(m.g){case 1:return f=null!=(e=Error().stack)?e:"",A(m,an(),2);case 2:g=m.h;if(!g)throw h=xl("openDbImpl",a,b),U("ytidb_async_stack_killswitch")||(h.stack=h.stack+"\n"+f.substring(f.indexOf("\n")+1)),il(h),h;kl(a);k=c?{actualName:a,publicName:a,userIdentifier:void 0}:bn(a);va(m,3);return A(m,im(k,g),5);case 5:return A(m,bm(k.actualName,b,d),6);case 6:return m.return(m.h);case 3:return l=wa(m),va(m,7),A(m,jm(k.actualName,g),9);case 9:m.g=
8;m.o=0;break;case 7:wa(m);case 8:throw l;}})}
function dn(a,b,c){c=void 0===c?{}:c;return cn(a,b,!1,c)}
function en(a,b,c){c=void 0===c?{}:c;return cn(a,b,!0,c)}
function fn(a,b){b=void 0===b?{}:b;var c,d;return B(function(e){if(1==e.g)return A(e,an(),2);if(3!=e.g){c=e.h;if(!c)return e.return();kl(a);d=bn(a);return A(e,cm(d.actualName,b),3)}return A(e,jm(d.actualName,c),0)})}
function gn(a,b,c){a=a.map(function(d){return B(function(e){return 1==e.g?A(e,cm(d.actualName,b),2):A(e,jm(d.actualName,c),0)})});
return Promise.all(a).then(function(){})}
function hn(){var a=void 0===a?{}:a;var b,c;return B(function(d){if(1==d.g)return A(d,an(),2);if(3!=d.g){b=d.h;if(!b)return d.return();kl("LogsDatabaseV2");return A(d,lm(b),3)}c=d.h;return A(d,gn(c,a,b),0)})}
function jn(a,b){b=void 0===b?{}:b;var c;return B(function(d){if(1==d.g)return A(d,an(),2);if(3!=d.g){c=d.h;if(!c)return d.return();kl(a);return A(d,cm(a,b),3)}return A(d,jm(a,c),0)})}
;function kn(a,b){dm.call(this,a,b);this.options=b;kl(a)}
y(kn,dm);function ln(a,b){var c;return function(){c||(c=new kn(a,b));return c}}
kn.prototype.h=function(a,b,c){c=void 0===c?{}:c;return(this.options.Ob?en:dn)(a,b,Object.assign({},c))};
kn.prototype.delete=function(a){a=void 0===a?{}:a;return(this.options.Ob?jn:fn)(this.name,a)};
function mn(a,b){return ln(a,b)}
;var nn={},on=mn("ytGcfConfig",{cb:(nn.coldConfigStore={kb:1},nn.hotConfigStore={kb:1},nn),Ob:!1,upgrade:function(a,b){b(1)&&(Ul(Nl(a,"hotConfigStore",{keyPath:"key",autoIncrement:!0}),"hotTimestampIndex","timestamp"),Ul(Nl(a,"coldConfigStore",{keyPath:"key",autoIncrement:!0}),"coldTimestampIndex","timestamp"))},
version:1});function pn(a){return fm(on(),a)}
function qn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:return d={config:a,hashData:b,timestamp:Y()},A(g,pn(c),2);case 2:return e=g.h,A(g,e.clear("hotConfigStore"),3);case 3:return A(g,Pl(e,"hotConfigStore",d),4);case 4:return f=g.h,g.return(f)}})}
function rn(a,b,c,d){var e,f,g;return B(function(h){switch(h.g){case 1:return e={config:a,hashData:b,configData:c,timestamp:Y()},A(h,pn(d),2);case 2:return f=h.h,A(h,f.clear("coldConfigStore"),3);case 3:return A(h,Pl(f,"coldConfigStore",e),4);case 4:return g=h.h,h.return(g)}})}
function sn(a){var b,c;return B(function(d){return 1==d.g?A(d,pn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Ml(b,["coldConfigStore"],{mode:"readwrite",W:!0},function(e){return Zl(e.objectStore("coldConfigStore").index("coldTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
function tn(a){var b,c;return B(function(d){return 1==d.g?A(d,pn(a),2):3!=d.g?(b=d.h,c=void 0,A(d,Ml(b,["hotConfigStore"],{mode:"readwrite",W:!0},function(e){return Zl(e.objectStore("hotConfigStore").index("hotTimestampIndex"),{direction:"prev"},function(f){c=f.ja()})}),3)):d.return(c)})}
;function un(){Ae.call(this);this.h=[];this.g=[];var a=D("yt.gcf.config.hotUpdateCallbacks");a?(this.h=[].concat(x(a)),this.g=a):(this.g=[],E("yt.gcf.config.hotUpdateCallbacks",this.g))}
y(un,Ae);un.prototype.sa=function(){for(var a=w(this.h),b=a.next();!b.done;b=a.next()){var c=this.g;b=c.indexOf(b.value);0<=b&&c.splice(b,1)}this.h.length=0;Ae.prototype.sa.call(this)};function vn(){this.h=0;this.i=new un}
function wn(a,b,c){var d,e,f;return B(function(g){switch(g.g){case 1:if(!U("start_client_gcf")){g.B(0);break}c&&(a.j=c,E("yt.gcf.config.hotConfigGroup",a.j||null));a.g(b);d=$m();if(!d){g.B(3);break}if(c){g.B(4);break}return A(g,tn(d),5);case 5:e=g.h,c=null==(f=e)?void 0:f.config;case 4:return A(g,qn(c,b,d),3);case 3:if(c)for(var h=c,k=w(a.i.g),l=k.next();!l.done;l=k.next())l=l.value,l(h);g.g=0}})}
function xn(a,b,c){var d,e,f,g;return B(function(h){if(1==h.g){if(!U("start_client_gcf"))return h.B(0);a.coldHashData=b;E("yt.gcf.config.coldHashData",a.coldHashData||null);return(d=$m())?c?h.B(4):A(h,sn(d),5):h.B(0)}4!=h.g&&(e=h.h,c=null==(f=e)?void 0:f.config);if(!c)return h.B(0);g=c.configData;return A(h,rn(c,b,g,d),0)})}
vn.prototype.g=function(a){this.hotHashData=a;E("yt.gcf.config.hotHashData",this.hotHashData||null)};function yn(){return"INNERTUBE_API_KEY"in dj&&"INNERTUBE_API_VERSION"in dj}
function zn(){return{jd:T("INNERTUBE_API_KEY"),kd:T("INNERTUBE_API_VERSION"),Rb:T("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),vc:T("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),ld:T("INNERTUBE_CONTEXT_CLIENT_NAME",1),wc:T("INNERTUBE_CONTEXT_CLIENT_VERSION"),yc:T("INNERTUBE_CONTEXT_HL"),xc:T("INNERTUBE_CONTEXT_GL"),md:T("INNERTUBE_HOST_OVERRIDE")||"",od:!!T("INNERTUBE_USE_THIRD_PARTY_AUTH",!1),nd:!!T("INNERTUBE_OMIT_API_KEY_WHEN_AUTH_HEADER_IS_PRESENT",!1),appInstallData:T("SERIALIZED_CLIENT_CONFIG_DATA")}}
function An(a){var b={client:{hl:a.yc,gl:a.xc,clientName:a.vc,clientVersion:a.wc,configInfo:a.Rb}};navigator.userAgent&&(b.client.userAgent=String(navigator.userAgent));var c=C.devicePixelRatio;c&&1!=c&&(b.client.screenDensityFloat=String(c));c=T("EXPERIMENTS_TOKEN","");""!==c&&(b.client.experimentsToken=c);c=mj();0<c.length&&(b.request={internalExperimentFlags:c});Bn(a,void 0,b);Cn(void 0,b);Dn(void 0,b);En(a,void 0,b);Fn(void 0,b);U("start_client_gcf")&&Gn(void 0,b);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&
(b.user={onBehalfOfUser:T("DELEGATED_SESSION_ID")});!U("fill_delegate_context_in_gel_killswitch")&&(a=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(b.user=Object.assign({},b.user,{serializedDelegationContext:a}));a=Object;c=a.assign;for(var d=b.client,e={},f=w(Object.entries(Dj(T("DEVICE","")))),g=f.next();!g.done;g=f.next()){var h=w(g.value);g=h.next().value;h=h.next().value;"cbrand"===g?e.deviceMake=h:"cmodel"===g?e.deviceModel=h:"cbr"===g?e.browserName=h:"cbrver"===g?e.browserVersion=
h:"cos"===g?e.osName=h:"cosver"===g?e.osVersion=h:"cplatform"===g&&(e.platform=h)}b.client=c.call(a,d,e);return b}
function Bn(a,b,c){a=a.vc;if("WEB"===a||"MWEB"===a||1===a||2===a)if(b){c=Fd(b,zi,96)||new zi;var d=mk();d=Object.keys(Ji).indexOf(d);d=-1===d?null:d;null!==d&&Nd(c,3,d);J(b,zi,96,c)}else c&&(c.client.mainAppWebInfo=null!=(d=c.client.mainAppWebInfo)?d:{},c.client.mainAppWebInfo.webDisplayMode=mk())}
function Cn(a,b){var c=D("yt.embedded_player.embed_url");c&&(a?(b=Fd(a,Fi,7)||new Fi,K(b,4,c),J(a,Fi,7,b)):b&&(b.thirdParty={embedUrl:c}))}
function Dn(a,b){var c;if(U("web_log_memory_total_kbytes")&&(null==(c=C.navigator)?0:c.deviceMemory)){var d;c=null==(d=C.navigator)?void 0:d.deviceMemory;a?Md(a,95,1E6*c):b&&(b.client.memoryTotalKbytes=""+1E6*c)}}
function En(a,b,c){if(a.appInstallData)if(b){var d;c=null!=(d=Fd(b,yi,62))?d:new yi;K(c,6,a.appInstallData);J(b,yi,62,c)}else c&&(c.client.configInfo=c.client.configInfo||{},c.client.configInfo.appInstallData=a.appInstallData)}
function Fn(a,b){a:{var c=sk();if(c){var d=ok[c.type||"unknown"]||"CONN_UNKNOWN";c=ok[c.effectiveType||"unknown"]||"CONN_UNKNOWN";"CONN_CELLULAR_UNKNOWN"===d&&"CONN_UNKNOWN"!==c&&(d=c);if("CONN_UNKNOWN"!==d)break a;if("CONN_UNKNOWN"!==c){d=c;break a}}d=void 0}d&&(a?Nd(a,61,pk[d]):b&&(b.client.connectionType=d));U("web_log_effective_connection_type")&&(d=sk(),d=null!=d&&d.effectiveType?rk.hasOwnProperty(d.effectiveType)?rk[d.effectiveType]:"EFFECTIVE_CONNECTION_TYPE_UNKNOWN":void 0,d&&(a?Nd(a,94,qk[d]):
b&&(b.client.effectiveConnectionType=d)))}
function Hn(a,b,c){c=void 0===c?{}:c;var d={};T("EOM_VISITOR_DATA")?d={"X-Goog-EOM-Visitor-Id":T("EOM_VISITOR_DATA")}:d={"X-Goog-Visitor-Id":c.visitorData||T("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;b=c.je||T("AUTHORIZATION");if(!b)if(a)b="Bearer "+D("gapi.auth.getToken")().ie;else{lk.g||(lk.g=new lk);a={};if(c=we([]))a.Authorization=c,c=void 0,void 0===c&&(c=Number(T("SESSION_INDEX",0)),c=isNaN(c)?0:c),U("voice_search_auth_header_removal")||(a["X-Goog-AuthUser"]=
c.toString()),"INNERTUBE_HOST_OVERRIDE"in dj||(a["X-Origin"]=window.location.origin),"DELEGATED_SESSION_ID"in dj&&(a["X-Goog-PageId"]=T("DELEGATED_SESSION_ID"));U("pageid_as_header_web")||delete a["X-Goog-PageId"];d=Object.assign({},d,a)}b&&(d.Authorization=b);return d}
function Gn(a,b){if(!vn.g){var c=new vn;vn.g=c}c=vn.g;var d=Y()-c.h;if(0!==c.h&&d<V("send_config_hash_timer"))c=void 0;else{d=D("yt.gcf.config.coldConfigData");var e=D("yt.gcf.config.hotHashData"),f=D("yt.gcf.config.coldHashData");d&&e&&f&&(c.h=Y());c={coldConfigData:d,hotHashData:e,coldHashData:f}}if(e=c)if(c=e.coldConfigData,d=e.coldHashData,e=e.hotHashData,c&&d&&e)if(a){var g;b=null!=(g=Fd(a,yi,62))?g:new yi;K(b,1,c);K(b,3,d);b.g(e);J(a,yi,62,b)}else b&&(b.client.configInfo=b.client.configInfo||
{},b.client.configInfo.coldConfigData=c,b.client.configInfo.coldHashData=d,b.client.configInfo.hotHashData=e)}
;var In=D("ytPubsub2Pubsub2Instance")||new M;M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.vb;M.prototype.publish=M.prototype.eb;M.prototype.clear=M.prototype.clear;E("ytPubsub2Pubsub2Instance",In);E("ytPubsub2Pubsub2SubscribedKeys",D("ytPubsub2Pubsub2SubscribedKeys")||{});E("ytPubsub2Pubsub2TopicToKeys",D("ytPubsub2Pubsub2TopicToKeys")||{});E("ytPubsub2Pubsub2IsAsync",D("ytPubsub2Pubsub2IsAsync")||{});E("ytPubsub2Pubsub2SkipSubKey",null);function Jn(a,b,c){c=void 0===c?{sampleRate:.1}:c;Math.random()<Math.min(.02,c.sampleRate/100)&&(a={we:a,ue:b},(b=D("ytPubsub2Pubsub2Instance"))&&b.publish.call(b,"meta_logging_csi_event".toString(),"meta_logging_csi_event",a))}
;var Kn=V("max_body_size_to_compress",5E5),Ln=V("min_body_size_to_compress",500),Mn=!0,Nn=0,On=0,Pn=V("compression_performance_threshold_lr",250),Qn=V("slow_compressions_before_abandon_count",4);
function Rn(a,b,c,d){var e=Y(),f={startTime:e,ticks:{},infos:{}};if(Mn)try{try{var g=(new Blob(b.split(""))).size}catch(q){lj(q),g=null}if(null==g||!(g>Kn||g<Ln)){var h=ye(b);var k=k||{};k.gd=!0;var l=new ti(k);l.push(h,!0);if(l.err)throw l.msg||bh[l.err];var m=l.result;var n=Y();f.ticks.gelc=n;On++;U("disable_compression_due_to_performance_degredation")&&n-e>=Pn&&(Nn++,U("abandon_compression_after_N_slow_zips")?On===V("compression_disable_point")&&Nn>Qn&&(Mn=!1):Mn=!1);U("gel_compression_csi_killswitch")||
!U("log_gel_compression_latency")&&!U("log_gel_compression_latency_lr")||Jn("gel_compression",f,{sampleRate:.1});c.headers||(c.headers={});c.headers["Content-Encoding"]="gzip";c.postBody=m;c.postParams=void 0}d(a,c)}catch(q){lj(q),d(a,c)}else d(a,c)}
;function Sn(a){a=Object.assign({},a);delete a.Authorization;var b=we();if(b){var c=new Uf;c.update(T("INNERTUBE_API_KEY"));c.update(b);a.hash=Cc(c.digest(),3)}return a}
;var Tn;function Un(){Tn||(Tn=new dl("yt.innertube"));return Tn}
function Vn(a,b,c,d){if(d)return null;d=Un().get("nextId",!0)||1;var e=Un().get("requests",!0)||{};e[d]={method:a,request:b,authState:Sn(c),requestTime:Math.round(Y())};Un().set("nextId",d+1,86400,!0);Un().set("requests",e,86400,!0);return d}
function Wn(a){var b=Un().get("requests",!0)||{};delete b[a];Un().set("requests",b,86400,!0)}
function Xn(a){var b=Un().get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(Y())-d.requestTime)){var e=d.authState,f=Sn(Hn(!1));lb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(Y())),Yn(a,d.method,e,{}));delete b[c]}}Un().set("requests",b,86400,!0)}}
;function Zn(a){this.xb=this.g=!1;this.potentialEsfErrorCounter=this.h=0;this.handleError=function(){};
this.Va=function(){};
this.now=Date.now;this.pb=!1;var b;this.Kc=null!=(b=a.Kc)?b:100;var c;this.Ic=null!=(c=a.Ic)?c:1;var d;this.Gc=null!=(d=a.Gc)?d:2592E6;var e;this.Fc=null!=(e=a.Fc)?e:12E4;var f;this.Hc=null!=(f=a.Hc)?f:5E3;var g;this.I=null!=(g=a.I)?g:void 0;this.Cb=!!a.Cb;var h;this.Ab=null!=(h=a.Ab)?h:.1;var k;this.Kb=null!=(k=a.Kb)?k:10;a.handleError&&(this.handleError=a.handleError);a.Va&&(this.Va=a.Va);a.pb&&(this.pb=a.pb);a.xb&&(this.xb=a.xb);this.J=a.J;this.ha=a.ha;this.N=a.N;this.P=a.P;this.ya=a.ya;this.ac=
a.ac;this.Zb=a.Zb;$n(this)&&(!this.J||this.J("networkless_logging"))&&ao(this)}
function ao(a){$n(a)&&!a.pb&&(a.g=!0,a.Cb&&Math.random()<=a.Ab&&a.N.Xc(a.I),bo(a),a.P.ca()&&a.ub(),a.P.Na(a.ac,a.ub.bind(a)),a.P.Na(a.Zb,a.kc.bind(a)))}
r=Zn.prototype;r.writeThenSend=function(a,b){var c=this;b=void 0===b?{}:b;if($n(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.N.set(d,this.I).then(function(e){d.id=e;c.P.ca()&&co(c,d)}).catch(function(e){co(c,d);
eo(c,e)})}else this.ya(a,b)};
r.sendThenWrite=function(a,b,c){var d=this;b=void 0===b?{}:b;if($n(this)&&this.g){var e={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0};this.J&&this.J("nwl_skip_retry")&&(e.skipRetry=c);if(this.P.ca()||this.J&&this.J("nwl_aggressive_send_then_write")&&!e.skipRetry){if(!e.skipRetry){var f=b.onError?b.onError:function(){};
b.onError=function(g,h){return B(function(k){if(1==k.g)return A(k,d.N.set(e,d.I).catch(function(l){eo(d,l)}),2);
f(g,h);k.g=0})}}this.ya(a,b,e.skipRetry)}else this.N.set(e,this.I).catch(function(g){d.ya(a,b,e.skipRetry);
eo(d,g)})}else this.ya(a,b,this.J&&this.J("nwl_skip_retry")&&c)};
r.sendAndWrite=function(a,b){var c=this;b=void 0===b?{}:b;if($n(this)&&this.g){var d={url:a,options:b,timestamp:this.now(),status:"NEW",sendCount:0},e=!1,f=b.onSuccess?b.onSuccess:function(){};
d.options.onSuccess=function(g,h){void 0!==d.id?c.N.Ua(d.id,c.I):e=!0;c.P.Pa&&c.J&&c.J("vss_network_hint")&&c.P.Pa(!0);f(g,h)};
this.ya(d.url,d.options);this.N.set(d,this.I).then(function(g){d.id=g;e&&c.N.Ua(d.id,c.I)}).catch(function(g){eo(c,g)})}else this.ya(a,b)};
r.ub=function(){var a=this;if(!$n(this))throw Error("IndexedDB is not supported: throttleSend");this.h||(this.h=this.ha.qa(function(){var b;return B(function(c){if(1==c.g)return A(c,a.N.qc("NEW",a.I),2);if(3!=c.g)return b=c.h,b?A(c,co(a,b),3):(a.kc(),c.return());a.h&&(a.h=0,a.ub());c.g=0})},this.Kc))};
r.kc=function(){this.ha.ba(this.h);this.h=0};
function co(a,b){var c;return B(function(d){switch(d.g){case 1:if(!$n(a))throw Error("IndexedDB is not supported: immediateSend");if(void 0===b.id){d.B(2);break}return A(d,a.N.qd(b.id,a.I),3);case 3:(c=d.h)||a.Va(Error("The request cannot be found in the database."));case 2:if(fo(a,b,a.Gc)){d.B(4);break}a.Va(Error("Networkless Logging: Stored logs request expired age limit"));if(void 0===b.id){d.B(5);break}return A(d,a.N.Ua(b.id,a.I),5);case 5:return d.return();case 4:b.skipRetry||(b=go(a,b));if(!b){d.B(0);
break}if(!b.skipRetry||void 0===b.id){d.B(8);break}return A(d,a.N.Ua(b.id,a.I),8);case 8:a.ya(b.url,b.options,!!b.skipRetry),d.g=0}})}
function go(a,b){if(!$n(a))throw Error("IndexedDB is not supported: updateRequestHandlers");var c=b.options.onError?b.options.onError:function(){};
b.options.onError=function(e,f){var g,h,k,l;return B(function(m){switch(m.g){case 1:g=ho(f);(h=io(f))&&a.J&&a.J("web_enable_error_204")&&a.handleError(Error("Request failed due to compression"),b.url,f);if(!(a.J&&a.J("nwl_consider_error_code")&&g||a.J&&!a.J("nwl_consider_error_code")&&a.potentialEsfErrorCounter<=a.Kb)){m.B(2);break}if(!a.P.Nb){m.B(3);break}return A(m,a.P.Nb(),3);case 3:if(a.P.ca()){m.B(2);break}c(e,f);if(!a.J||!a.J("nwl_consider_error_code")||void 0===(null==(k=b)?void 0:k.id)){m.B(6);
break}return A(m,a.N.cc(b.id,a.I,!1),6);case 6:return m.return();case 2:if(a.J&&a.J("nwl_consider_error_code")&&!g&&a.potentialEsfErrorCounter>a.Kb)return m.return();a.potentialEsfErrorCounter++;if(void 0===(null==(l=b)?void 0:l.id)){m.B(8);break}return b.sendCount<a.Ic?A(m,a.N.cc(b.id,a.I,!0,h?!1:void 0),12):A(m,a.N.Ua(b.id,a.I),8);case 12:a.ha.qa(function(){a.P.ca()&&a.ub()},a.Hc);
case 8:c(e,f),m.g=0}})};
var d=b.options.onSuccess?b.options.onSuccess:function(){};
b.options.onSuccess=function(e,f){var g;return B(function(h){if(1==h.g)return void 0===(null==(g=b)?void 0:g.id)?h.B(2):A(h,a.N.Ua(b.id,a.I),2);a.P.Pa&&a.J&&a.J("vss_network_hint")&&a.P.Pa(!0);d(e,f);h.g=0})};
return b}
function fo(a,b,c){b=b.timestamp;return a.now()-b>=c?!1:!0}
function bo(a){if(!$n(a))throw Error("IndexedDB is not supported: retryQueuedRequests");a.N.qc("QUEUED",a.I).then(function(b){b&&!fo(a,b,a.Fc)?a.ha.qa(function(){return B(function(c){if(1==c.g)return void 0===b.id?c.B(2):A(c,a.N.cc(b.id,a.I),2);bo(a);c.g=0})}):a.P.ca()&&a.ub()})}
function eo(a,b){a.Mc&&!a.P.ca()?a.Mc(b):a.handleError(b)}
function $n(a){return!!a.I||a.xb}
function ho(a){var b;return(a=null==a?void 0:null==(b=a.error)?void 0:b.code)&&400<=a&&599>=a?!1:!0}
function io(a){var b;a=null==a?void 0:null==(b=a.error)?void 0:b.code;return!(400!==a&&415!==a)}
;var jo;
function ko(){if(jo)return jo();var a={};jo=mn("LogsDatabaseV2",{cb:(a.LogsRequestsStore={kb:2},a),Ob:!1,upgrade:function(b,c,d){c(2)&&Nl(b,"LogsRequestsStore",{keyPath:"id",autoIncrement:!0});c(3);c(5)&&(d=d.objectStore("LogsRequestsStore"),d.g.indexNames.contains("newRequest")&&d.g.deleteIndex("newRequest"),Ul(d,"newRequestV2",["status","interface","timestamp"]));c(7)&&b.g.objectStoreNames.contains("sapisid")&&b.g.deleteObjectStore("sapisid");c(9)&&b.g.objectStoreNames.contains("SWHealthLog")&&b.g.deleteObjectStore("SWHealthLog")},
version:9});return jo()}
;function lo(a){return fm(ko(),a)}
function mo(a,b){var c,d,e,f;return B(function(g){if(1==g.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_WRITE"},ticks:{}},A(g,lo(b),2);if(3!=g.g)return d=g.h,e=Object.assign({},a,{options:JSON.parse(JSON.stringify(a.options)),interface:T("INNERTUBE_CONTEXT_CLIENT_NAME",0)}),A(g,Pl(d,"LogsRequestsStore",e),3);f=g.h;c.ticks.tc=Y();no(c);return g.return(f)})}
function oo(a,b){var c,d,e,f,g,h,k;return B(function(l){if(1==l.g)return c={startTime:Y(),infos:{transactionType:"YT_IDB_TRANSACTION_TYPE_READ"},ticks:{}},A(l,lo(b),2);if(3!=l.g)return d=l.h,e=T("INNERTUBE_CONTEXT_CLIENT_NAME",0),f=[a,e,0],g=[a,e,Y()],h=IDBKeyRange.bound(f,g),k=void 0,A(l,Ml(d,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(m){return Zl(m.objectStore("LogsRequestsStore").index("newRequestV2"),{query:h,direction:"prev"},function(n){n.ja()&&(k=n.ja(),"NEW"===a&&(k.status="QUEUED",
n.update(k)))})}),3);
c.ticks.tc=Y();no(c);return l.return(k)})}
function po(a,b){var c;return B(function(d){if(1==d.g)return A(d,lo(b),2);c=d.h;return d.return(Ml(c,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){var f=e.objectStore("LogsRequestsStore");return f.get(a).then(function(g){if(g)return g.status="QUEUED",Il(f.g.put(g,void 0)).then(function(){return g})})}))})}
function qo(a,b,c,d){c=void 0===c?!0:c;var e;return B(function(f){if(1==f.g)return A(f,lo(b),2);e=f.h;return f.return(Ml(e,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(g){var h=g.objectStore("LogsRequestsStore");return h.get(a).then(function(k){return k?(k.status="NEW",c&&(k.sendCount+=1),void 0!==d&&(k.options.compress=d),Il(h.g.put(k,void 0)).then(function(){return k})):Bl.resolve(void 0)})}))})}
function ro(a,b){var c;return B(function(d){if(1==d.g)return A(d,lo(b),2);c=d.h;return d.return(c.delete("LogsRequestsStore",a))})}
function so(a){var b,c;return B(function(d){if(1==d.g)return A(d,lo(a),2);b=d.h;c=Y()-2592E6;return A(d,Ml(b,["LogsRequestsStore"],{mode:"readwrite",W:!0},function(e){return Wl(e.objectStore("LogsRequestsStore"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function to(){B(function(a){return A(a,hn(),0)})}
function no(a){U("nwl_csi_killswitch")||Jn("networkless_performance",a,{sampleRate:1})}
;var uo={accountStateChangeSignedIn:23,accountStateChangeSignedOut:24,delayedEventMetricCaptured:11,latencyActionBaselined:6,latencyActionInfo:7,latencyActionTicked:5,offlineTransferStatusChanged:2,offlineImageDownload:335,playbackStartStateChanged:9,systemHealthCaptured:3,mangoOnboardingCompleted:10,mangoPushNotificationReceived:230,mangoUnforkDbMigrationError:121,mangoUnforkDbMigrationSummary:122,mangoUnforkDbMigrationPreunforkDbVersionNumber:133,mangoUnforkDbMigrationPhoneMetadata:134,mangoUnforkDbMigrationPhoneStorage:135,
mangoUnforkDbMigrationStep:142,mangoAsyncApiMigrationEvent:223,mangoDownloadVideoResult:224,mangoHomepageVideoCount:279,mangoHomeV3State:295,mangoImageClientCacheHitEvent:273,sdCardStatusChanged:98,framesDropped:12,thumbnailHovered:13,deviceRetentionInfoCaptured:14,thumbnailLoaded:15,backToAppEvent:318,streamingStatsCaptured:17,offlineVideoShared:19,appCrashed:20,youThere:21,offlineStateSnapshot:22,mdxSessionStarted:25,mdxSessionConnected:26,mdxSessionDisconnected:27,bedrockResourceConsumptionSnapshot:28,
nextGenWatchWatchSwiped:29,kidsAccountsSnapshot:30,zeroStepChannelCreated:31,tvhtml5SearchCompleted:32,offlineSharePairing:34,offlineShareUnlock:35,mdxRouteDistributionSnapshot:36,bedrockRepetitiveActionTimed:37,unpluggedDegradationInfo:229,uploadMp4HeaderMoved:38,uploadVideoTranscoded:39,uploadProcessorStarted:46,uploadProcessorEnded:47,uploadProcessorReady:94,uploadProcessorRequirementPending:95,uploadProcessorInterrupted:96,uploadFrontendEvent:241,assetPackDownloadStarted:41,assetPackDownloaded:42,
assetPackApplied:43,assetPackDeleted:44,appInstallAttributionEvent:459,playbackSessionStopped:45,adBlockerMessagingShown:48,distributionChannelCaptured:49,dataPlanCpidRequested:51,detailedNetworkTypeCaptured:52,sendStateUpdated:53,receiveStateUpdated:54,sendDebugStateUpdated:55,receiveDebugStateUpdated:56,kidsErrored:57,mdxMsnSessionStatsFinished:58,appSettingsCaptured:59,mdxWebSocketServerHttpError:60,mdxWebSocketServer:61,startupCrashesDetected:62,coldStartInfo:435,offlinePlaybackStarted:63,liveChatMessageSent:225,
liveChatUserPresent:434,liveChatBeingModerated:457,liveCreationCameraUpdated:64,liveCreationEncodingCaptured:65,liveCreationError:66,liveCreationHealthUpdated:67,liveCreationVideoEffectsCaptured:68,liveCreationStageOccured:75,liveCreationBroadcastScheduled:123,liveCreationArchiveReplacement:149,liveCreationCostreamingConnection:421,liveCreationStreamWebrtcStats:288,mdxSessionRecoveryStarted:69,mdxSessionRecoveryCompleted:70,mdxSessionRecoveryStopped:71,visualElementShown:72,visualElementHidden:73,
visualElementGestured:78,visualElementStateChanged:208,screenCreated:156,playbackAssociated:202,visualElementAttached:215,playbackContextEvent:214,cloudCastingPlaybackStarted:74,webPlayerApiCalled:76,tvhtml5AccountDialogOpened:79,foregroundHeartbeat:80,foregroundHeartbeatScreenAssociated:111,kidsOfflineSnapshot:81,mdxEncryptionSessionStatsFinished:82,playerRequestCompleted:83,liteSchedulerStatistics:84,mdxSignIn:85,spacecastMetadataLookupRequested:86,spacecastBatchLookupRequested:87,spacecastSummaryRequested:88,
spacecastPlayback:89,spacecastDiscovery:90,tvhtml5LaunchUrlComponentChanged:91,mdxBackgroundPlaybackRequestCompleted:92,mdxBrokenAdditionalDataDeviceDetected:93,tvhtml5LocalStorage:97,tvhtml5DeviceStorageStatus:147,autoCaptionsAvailable:99,playbackScrubbingEvent:339,flexyState:100,interfaceOrientationCaptured:101,mainAppBrowseFragmentCache:102,offlineCacheVerificationFailure:103,offlinePlaybackExceptionDigest:217,vrCopresenceStats:104,vrCopresenceSyncStats:130,vrCopresenceCommsStats:137,vrCopresencePartyStats:153,
vrCopresenceEmojiStats:213,vrCopresenceEvent:141,vrCopresenceFlowTransitEvent:160,vrPlaybackEvent:345,kidsAgeGateTracking:105,offlineDelayAllowedTracking:106,mainAppAutoOfflineState:107,videoAsThumbnailDownload:108,videoAsThumbnailPlayback:109,liteShowMore:110,renderingError:118,kidsProfilePinGateTracking:119,abrTrajectory:124,scrollEvent:125,streamzIncremented:126,kidsProfileSwitcherTracking:127,kidsProfileCreationTracking:129,buyFlowStarted:136,mbsConnectionInitiated:138,mbsPlaybackInitiated:139,
mbsLoadChildren:140,liteProfileFetcher:144,mdxRemoteTransaction:146,reelPlaybackError:148,reachabilityDetectionEvent:150,mobilePlaybackEvent:151,courtsidePlayerStateChanged:152,musicPersistentCacheChecked:154,musicPersistentCacheCleared:155,playbackInterrupted:157,playbackInterruptionResolved:158,fixFopFlow:159,anrDetection:161,backstagePostCreationFlowEnded:162,clientError:163,gamingAccountLinkStatusChanged:164,liteHousewarming:165,buyFlowEvent:167,kidsParentalGateTracking:168,kidsSignedOutSettingsStatus:437,
kidsSignedOutPauseHistoryFixStatus:438,tvhtml5WatchdogViolation:444,ypcUpgradeFlow:169,yongleStudy:170,ypcUpdateFlowStarted:171,ypcUpdateFlowCancelled:172,ypcUpdateFlowSucceeded:173,ypcUpdateFlowFailed:174,liteGrowthkitPromo:175,paymentFlowStarted:341,transactionFlowShowPaymentDialog:405,transactionFlowStarted:176,transactionFlowSecondaryDeviceStarted:222,transactionFlowSecondaryDeviceSignedOutStarted:383,transactionFlowCancelled:177,transactionFlowPaymentCallBackReceived:387,transactionFlowPaymentSubmitted:460,
transactionFlowPaymentSucceeded:329,transactionFlowSucceeded:178,transactionFlowFailed:179,transactionFlowPlayBillingConnectionStartEvent:428,transactionFlowSecondaryDeviceSuccess:458,transactionFlowErrorEvent:411,liteVideoQualityChanged:180,watchBreakEnablementSettingEvent:181,watchBreakFrequencySettingEvent:182,videoEffectsCameraPerformanceMetrics:183,adNotify:184,startupTelemetry:185,playbackOfflineFallbackUsed:186,outOfMemory:187,ypcPauseFlowStarted:188,ypcPauseFlowCancelled:189,ypcPauseFlowSucceeded:190,
ypcPauseFlowFailed:191,uploadFileSelected:192,ypcResumeFlowStarted:193,ypcResumeFlowCancelled:194,ypcResumeFlowSucceeded:195,ypcResumeFlowFailed:196,adsClientStateChange:197,ypcCancelFlowStarted:198,ypcCancelFlowCancelled:199,ypcCancelFlowSucceeded:200,ypcCancelFlowFailed:201,ypcCancelFlowGoToPaymentProcessor:402,ypcDeactivateFlowStarted:320,ypcRedeemFlowStarted:203,ypcRedeemFlowCancelled:204,ypcRedeemFlowSucceeded:205,ypcRedeemFlowFailed:206,ypcFamilyCreateFlowStarted:258,ypcFamilyCreateFlowCancelled:259,
ypcFamilyCreateFlowSucceeded:260,ypcFamilyCreateFlowFailed:261,ypcFamilyManageFlowStarted:262,ypcFamilyManageFlowCancelled:263,ypcFamilyManageFlowSucceeded:264,ypcFamilyManageFlowFailed:265,restoreContextEvent:207,embedsAdEvent:327,autoplayTriggered:209,clientDataErrorEvent:210,experimentalVssValidation:211,tvhtml5TriggeredEvent:212,tvhtml5FrameworksFieldTrialResult:216,tvhtml5FrameworksFieldTrialStart:220,musicOfflinePreferences:218,watchTimeSegment:219,appWidthLayoutError:221,accountRegistryChange:226,
userMentionAutoCompleteBoxEvent:227,downloadRecommendationEnablementSettingEvent:228,musicPlaybackContentModeChangeEvent:231,offlineDbOpenCompleted:232,kidsFlowEvent:233,kidsFlowCorpusSelectedEvent:234,videoEffectsEvent:235,unpluggedOpsEogAnalyticsEvent:236,playbackAudioRouteEvent:237,interactionLoggingDebugModeError:238,offlineYtbRefreshed:239,kidsFlowError:240,musicAutoplayOnLaunchAttempted:242,deviceContextActivityEvent:243,deviceContextEvent:244,templateResolutionException:245,musicSideloadedPlaylistServiceCalled:246,
embedsStorageAccessNotChecked:247,embedsHasStorageAccessResult:248,embedsItpPlayedOnReload:249,embedsRequestStorageAccessResult:250,embedsShouldRequestStorageAccessResult:251,embedsRequestStorageAccessState:256,embedsRequestStorageAccessFailedState:257,embedsItpWatchLaterResult:266,searchSuggestDecodingPayloadFailure:252,siriShortcutActivated:253,tvhtml5KeyboardPerformance:254,latencyActionSpan:255,elementsLog:267,ytbFileOpened:268,tfliteModelError:269,apiTest:270,yongleUsbSetup:271,touStrikeInterstitialEvent:272,
liteStreamToSave:274,appBundleClientEvent:275,ytbFileCreationFailed:276,adNotifyFailure:278,ytbTransferFailed:280,blockingRequestFailed:281,liteAccountSelector:282,liteAccountUiCallbacks:283,dummyPayload:284,browseResponseValidationEvent:285,entitiesError:286,musicIosBackgroundFetch:287,mdxNotificationEvent:289,layersValidationError:290,musicPwaInstalled:291,liteAccountCleanup:292,html5PlayerHealthEvent:293,watchRestoreAttempt:294,liteAccountSignIn:296,notaireEvent:298,kidsVoiceSearchEvent:299,adNotifyFilled:300,
delayedEventDropped:301,analyticsSearchEvent:302,systemDarkThemeOptOutEvent:303,flowEvent:304,networkConnectivityBaselineEvent:305,ytbFileImported:306,downloadStreamUrlExpired:307,directSignInEvent:308,lyricImpressionEvent:309,accessibilityStateEvent:310,tokenRefreshEvent:311,genericAttestationExecution:312,tvhtml5VideoSeek:313,unpluggedAutoPause:314,scrubbingEvent:315,bedtimeReminderEvent:317,tvhtml5UnexpectedRestart:319,tvhtml5StabilityTraceEvent:478,tvhtml5OperationHealth:467,tvhtml5WatchKeyEvent:321,
voiceLanguageChanged:322,tvhtml5LiveChatStatus:323,parentToolsCorpusSelectedEvent:324,offerAdsEnrollmentInitiated:325,networkQualityIntervalEvent:326,deviceStartupMetrics:328,heartbeatActionPlayerTransitioned:330,tvhtml5Lifecycle:331,heartbeatActionPlayerHalted:332,adaptiveInlineMutedSettingEvent:333,mainAppLibraryLoadingState:334,thirdPartyLogMonitoringEvent:336,appShellAssetLoadReport:337,tvhtml5AndroidAttestation:338,tvhtml5StartupSoundEvent:340,iosBackgroundRefreshTask:342,iosBackgroundProcessingTask:343,
sliEventBatch:344,postImpressionEvent:346,musicSideloadedPlaylistExport:347,idbUnexpectedlyClosed:348,voiceSearchEvent:349,mdxSessionCastEvent:350,idbQuotaExceeded:351,idbTransactionEnded:352,idbTransactionAborted:353,tvhtml5KeyboardLogging:354,idbIsSupportedCompleted:355,creatorStudioMobileEvent:356,idbDataCorrupted:357,parentToolsAppChosenEvent:358,webViewBottomSheetResized:359,activeStateControllerScrollPerformanceSummary:360,navigatorValidation:361,mdxSessionHeartbeat:362,clientHintsPolyfillDiagnostics:363,
clientHintsPolyfillEvent:364,proofOfOriginTokenError:365,kidsAddedAccountSummary:366,musicWearableDevice:367,ypcRefundFlowEvent:368,tvhtml5PlaybackMeasurementEvent:369,tvhtml5WatermarkMeasurementEvent:370,clientExpGcfPropagationEvent:371,mainAppReferrerIntent:372,leaderLockEnded:373,leaderLockAcquired:374,googleHatsEvent:375,persistentLensLaunchEvent:376,parentToolsChildWelcomeChosenEvent:378,browseThumbnailPreloadEvent:379,finalPayload:380,mdxDialAdditionalDataUpdateEvent:381,webOrchestrationTaskLifecycleRecord:382,
startupSignalEvent:384,accountError:385,gmsDeviceCheckEvent:386,accountSelectorEvent:388,accountUiCallbacks:389,mdxDialAdditionalDataProbeEvent:390,downloadsSearchIcingApiStats:391,downloadsSearchIndexUpdatedEvent:397,downloadsSearchIndexSnapshot:398,dataPushClientEvent:392,kidsCategorySelectedEvent:393,mdxDeviceManagementSnapshotEvent:394,prefetchRequested:395,prefetchableCommandExecuted:396,gelDebuggingEvent:399,webLinkTtsPlayEnd:400,clipViewInvalid:401,persistentStorageStateChecked:403,cacheWipeoutEvent:404,
playerEvent:410,sfvEffectPipelineStartedEvent:412,sfvEffectPipelinePausedEvent:429,sfvEffectPipelineEndedEvent:413,sfvEffectChosenEvent:414,sfvEffectLoadedEvent:415,sfvEffectUserInteractionEvent:465,sfvEffectFirstFrameProcessedLatencyEvent:416,sfvEffectAggregatedFramesProcessedLatencyEvent:417,sfvEffectAggregatedFramesDroppedEvent:418,sfvEffectPipelineErrorEvent:430,sfvEffectGraphFrozenEvent:419,sfvEffectGlThreadBlockedEvent:420,mdeVideoChangedEvent:442,mdePlayerPerformanceMetrics:472,genericClientExperimentEvent:423,
homePreloadTaskScheduled:424,homePreloadTaskExecuted:425,homePreloadCacheHit:426,polymerPropertyChangedInObserver:427,applicationStarted:431,networkCronetRttBatch:432,networkCronetRttSummary:433,repeatChapterLoopEvent:436,seekCancellationEvent:462,lockModeTimeoutEvent:483,offlineTransferStarted:4,musicOfflineMixtapePreferencesChanged:16,mangoDailyNewVideosNotificationAttempt:40,mangoDailyNewVideosNotificationError:77,dtwsPlaybackStarted:112,dtwsTileFetchStarted:113,dtwsTileFetchCompleted:114,dtwsTileFetchStatusChanged:145,
dtwsKeyframeDecoderBufferSent:115,dtwsTileUnderflowedOnNonkeyframe:116,dtwsBackfillFetchStatusChanged:143,dtwsBackfillUnderflowed:117,dtwsAdaptiveLevelChanged:128,blockingVisitorIdTimeout:277,liteSocial:18,mobileJsInvocation:297,biscottiBasedDetection:439,coWatchStateChange:440,embedsVideoDataDidChange:441,shortsFirst:443,cruiseControlEvent:445,qoeClientLoggingContext:446,atvRecommendationJobExecuted:447,tvhtml5UserFeedback:448,producerProjectCreated:449,producerProjectOpened:450,producerProjectDeleted:451,
producerProjectElementAdded:453,producerProjectElementRemoved:454,tvhtml5ShowClockEvent:455,deviceCapabilityCheckMetrics:456,youtubeClearcutEvent:461,offlineBrowseFallbackEvent:463,getCtvTokenEvent:464,startupDroppedFramesSummary:466,screenshotEvent:468,miniAppPlayEvent:469,elementsDebugCounters:470,fontLoadEvent:471,webKillswitchReceived:473,webKillswitchExecuted:474,cameraOpenEvent:475,manualSmoothnessMeasurement:476,tvhtml5AppQualityEvent:477,polymerPropertyAccessEvent:479,miniAppSdkUsage:480,
cobaltTelemetryEvent:481,crossDevicePlayback:482,channelCreatedWithObakeImage:484,channelEditedWithObakeImage:485};var vo={},wo=mn("ServiceWorkerLogsDatabase",{cb:(vo.SWHealthLog={kb:1},vo),Ob:!0,upgrade:function(a,b){b(1)&&Ul(Nl(a,"SWHealthLog",{keyPath:"id",autoIncrement:!0}),"swHealthNewRequest",["interface","timestamp"])},
version:1});function xo(a){return fm(wo(),a)}
function yo(a){var b,c;B(function(d){if(1==d.g)return A(d,xo(a),2);b=d.h;c=Y()-2592E6;return A(d,Ml(b,["SWHealthLog"],{mode:"readwrite",W:!0},function(e){return Wl(e.objectStore("SWHealthLog"),{},function(f){if(f.ja().timestamp<=c)return f.delete().then(function(){return f.continue()})})}),0)})}
function zo(a){var b;return B(function(c){if(1==c.g)return A(c,xo(a),2);b=c.h;return A(c,b.clear("SWHealthLog"),0)})}
;var Ao={},Bo=0;function Co(a){var b=new Image,c=""+Bo++;Ao[c]=b;b.onload=b.onerror=function(){delete Ao[c]};
b.src=a}
;function Do(){this.g=new Map;this.h=!1}
function Eo(){if(!Do.g){var a=D("yt.networkRequestMonitor.instance")||new Do;E("yt.networkRequestMonitor.instance",a);Do.g=a}return Do.g}
Do.prototype.requestComplete=function(a,b){b&&(this.h=!0);a=this.removeParams(a);this.g.get(a)||this.g.set(a,b)};
Do.prototype.isEndpointCFR=function(a){a=this.removeParams(a);return(a=this.g.get(a))?!1:!1===a&&this.h?!0:null};
Do.prototype.removeParams=function(a){return a.split("?")[0]};
Do.prototype.removeParams=Do.prototype.removeParams;Do.prototype.isEndpointCFR=Do.prototype.isEndpointCFR;Do.prototype.requestComplete=Do.prototype.requestComplete;Do.getInstance=Eo;var Fo;function Go(){Fo||(Fo=new dl("yt.offline"));return Fo}
function Ho(a){if(U("offline_error_handling")){var b=Go().get("errors",!0)||{};b[a.message]={name:a.name,stack:a.stack};a.level&&(b[a.message].level=a.level);Go().set("errors",b,2592E3,!0)}}
;function Z(){cf.call(this);var a=this;this.i=!1;this.h=jf();this.h.Na("networkstatus-online",function(){if(a.i&&U("offline_error_handling")){var b=Go().get("errors",!0);if(b){for(var c in b)if(b[c]){var d=new tk(c,"sent via offline_errors");d.name=b[c].name;d.stack=b[c].stack;d.level=b[c].level;kj(d)}Go().set("errors",{},2592E3,!0)}}})}
y(Z,cf);function Io(){if(!Z.g){var a=D("yt.networkStatusManager.instance")||new Z;E("yt.networkStatusManager.instance",a);Z.g=a}return Z.g}
r=Z.prototype;r.ca=function(){return this.h.ca()};
r.Pa=function(a){this.h.h=a};
r.ed=function(){var a=window.navigator.onLine;return void 0===a?!0:a};
r.ad=function(){this.i=!0};
r.Na=function(a,b){return this.h.Na(a,b)};
r.Nb=function(a){a=gf(this.h,a);a.then(function(b){U("use_cfr_monitor")&&Eo().requestComplete("generate_204",b)});
return a};
Z.prototype.sendNetworkCheckRequest=Z.prototype.Nb;Z.prototype.listen=Z.prototype.Na;Z.prototype.enableErrorFlushing=Z.prototype.ad;Z.prototype.getWindowStatus=Z.prototype.ed;Z.prototype.networkStatusHint=Z.prototype.Pa;Z.prototype.isNetworkAvailable=Z.prototype.ca;Z.getInstance=Io;function Jo(a){a=void 0===a?{}:a;cf.call(this);var b=this;this.h=this.o=0;this.i=Io();var c=D("yt.networkStatusManager.instance.listen").bind(this.i);c&&(a.Mb?(this.Mb=a.Mb,c("networkstatus-online",function(){Ko(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){Ko(b,"publicytnetworkstatus-offline")})):(c("networkstatus-online",function(){df(b,"publicytnetworkstatus-online")}),c("networkstatus-offline",function(){df(b,"publicytnetworkstatus-offline")})))}
y(Jo,cf);Jo.prototype.ca=function(){var a=D("yt.networkStatusManager.instance.isNetworkAvailable");return a?a.bind(this.i)():!0};
Jo.prototype.Pa=function(a){var b=D("yt.networkStatusManager.instance.networkStatusHint").bind(this.i);b&&b(a)};
Jo.prototype.Nb=function(a){var b=this,c;return B(function(d){c=D("yt.networkStatusManager.instance.sendNetworkCheckRequest").bind(b.i);return U("skip_network_check_if_cfr")&&Eo().isEndpointCFR("generate_204")?d.return(new Promise(function(e){var f;b.Pa((null==(f=window.navigator)?void 0:f.onLine)||!0);e(b.ca())})):c?d.return(c(a)):d.return(!0)})};
function Ko(a,b){a.Mb?a.h?(kf.ba(a.o),a.o=kf.qa(function(){a.j!==b&&(df(a,b),a.j=b,a.h=Y())},a.Mb-(Y()-a.h))):(df(a,b),a.j=b,a.h=Y()):df(a,b)}
;var Lo;function Mo(){var a=Zn.call;Lo||(Lo=new Jo({ne:!0,me:!0}));a.call(Zn,this,{N:{Xc:so,Ua:ro,qc:oo,qd:po,cc:qo,set:mo},P:Lo,handleError:function(b,c,d){var e,f=null==d?void 0:null==(e=d.error)?void 0:e.code;if(400===f||415===f){var g;lj(new tk(b.message,c,null==d?void 0:null==(g=d.error)?void 0:g.code),void 0,void 0,void 0,!0)}else kj(b)},
Va:lj,ya:No,now:Y,Mc:Ho,ha:cl(),ac:"publicytnetworkstatus-online",Zb:"publicytnetworkstatus-offline",Cb:!0,Ab:.1,Kb:V("potential_esf_error_limit",10),J:U,pb:!(uk()&&"www.youtube-nocookie.com"!==Xb(document.location.toString()))});this.i=new ig;U("networkless_immediately_drop_all_requests")&&to();jn("LogsDatabaseV2")}
y(Mo,Zn);function Oo(){var a=D("yt.networklessRequestController.instance");a||(a=new Mo,E("yt.networklessRequestController.instance",a),U("networkless_logging")&&an().then(function(b){a.I=b;ao(a);a.i.resolve();a.Cb&&Math.random()<=a.Ab&&a.I&&yo(a.I);U("networkless_immediately_drop_sw_health_store")&&Po(a)}));
return a}
Mo.prototype.writeThenSend=function(a,b){b||(b={});uk()||(this.g=!1);Zn.prototype.writeThenSend.call(this,a,b)};
Mo.prototype.sendThenWrite=function(a,b,c){b||(b={});uk()||(this.g=!1);Zn.prototype.sendThenWrite.call(this,a,b,c)};
Mo.prototype.sendAndWrite=function(a,b){b||(b={});uk()||(this.g=!1);Zn.prototype.sendAndWrite.call(this,a,b)};
Mo.prototype.awaitInitialization=function(){return this.i.promise};
function Po(a){var b;B(function(c){if(!a.I)throw b=xl("clearSWHealthLogsDb"),b;return c.return(zo(a.I).catch(function(d){a.handleError(d)}))})}
function No(a,b,c){b=U("web_fp_via_jspb")?Object.assign({},b):b;U("use_cfr_monitor")&&Qo(a,b);if(U("use_request_time_ms_header"))b.headers&&(b.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));else{var d;if(null==(d=b.postParams)?0:d.requestTimeMs)b.postParams.requestTimeMs=Math.round(Y())}if(c&&0===Object.keys(b).length){var e=void 0===e?"":e;var f=void 0===f?!1:f;var g=void 0===g?!1:g;if(a)if(e)Tj(a,void 0,"POST",e);else if(T("USE_NET_AJAX_FOR_PING_TRANSPORT",!1))Tj(a,void 0,"GET",
"",void 0,void 0,f,g);else{b:{try{var h=new Ya({url:a});if(h.i&&h.h||h.j){var k=Wb(a.match(Vb)[5]||null);var l=!(!k||!k.endsWith("/aclk")||"1"!==bc(a,"ri"));break b}}catch(n){}l=!1}if(l){b:{try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,"")){var m=!0;break b}}catch(n){}m=!1}c=m?!0:!1}else c=!1;c||Co(a)}}else b.compress?b.postBody?("string"!==typeof b.postBody&&(b.postBody=JSON.stringify(b.postBody)),Rn(a,b.postBody,b,Qj)):Rn(a,JSON.stringify(b.postParams),b,Yj):
Qj(a,b)}
function Qo(a,b){var c=b.onError?b.onError:function(){};
b.onError=function(e,f){Eo().requestComplete(a,!1);c(e,f)};
var d=b.onSuccess?b.onSuccess:function(){};
b.onSuccess=function(e,f){Eo().requestComplete(a,!0);d(e,f)}}
;var Ro=C.ytNetworklessLoggingInitializationOptions||{isNwlInitialized:!1};E("ytNetworklessLoggingInitializationOptions",Ro);function So(a){var b=this;this.config_=null;a?this.config_=a:yn()&&(this.config_=zn());xk(function(){Xn(b)},5E3)}
So.prototype.isReady=function(){!this.config_&&yn()&&(this.config_=zn());return!!this.config_};
function Yn(a,b,c,d){function e(t){t=void 0===t?!1:t;var u;if(d.retry&&"www.youtube-nocookie.com"!=h&&(t||U("skip_ls_gel_retry")||"application/json"!==g.headers["Content-Type"]||(u=Vn(b,c,l,k)),u)){var z=g.onSuccess,G=g.onFetchSuccess;g.onSuccess=function(P,Fa){Wn(u);z(P,Fa)};
c.onFetchSuccess=function(P,Fa){Wn(u);G(P,Fa)}}try{if(t&&d.retry&&!d.networklessOptions.bypassNetworkless)g.method="POST",d.networklessOptions.writeThenSend?Oo().writeThenSend(p,g):Oo().sendAndWrite(p,g);
else if(d.compress)if(g.postBody){var R=g.postBody;"string"!==typeof R&&(R=JSON.stringify(g.postBody));Rn(p,R,g,Qj)}else Rn(p,JSON.stringify(g.postParams),g,Yj);else U("web_all_payloads_via_jspb")?Qj(p,g):Yj(p,g)}catch(P){if("InvalidAccessError"==P.name)u&&(Wn(u),u=0),lj(Error("An extension is blocking network request."));else throw P;}u&&xk(function(){Xn(a)},5E3)}
!T("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&lj(new tk("Missing VISITOR_DATA when sending innertube request.",b,c,d));if(!a.isReady()){var f=new tk("innertube xhrclient not ready",b,c,d);kj(f);throw f;}var g={headers:d.headers||{},method:"POST",postParams:c,postBody:d.postBody,postBodyFormat:d.postBodyFormat||"JSON",onTimeout:function(){d.onTimeout()},
onFetchTimeout:d.onTimeout,onSuccess:function(t,u){if(d.onSuccess)d.onSuccess(u)},
onFetchSuccess:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,u){if(d.onError)d.onError(u)},
onFetchError:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0,compress:d.compress};g.headers["Content-Type"]||(g.headers["Content-Type"]="application/json");var h="";(f=a.config_.md)&&(h=f);var k=a.config_.od||!1,l=Hn(k,h,d);Object.assign(g.headers,l);(f=g.headers.Authorization)&&!h&&k&&(g.headers["x-origin"]=window.location.origin);var m="/youtubei/"+a.config_.kd+"/"+b,n={alt:"json"},q=a.config_.nd&&f;q=q&&f.startsWith("Bearer");q||(n.key=a.config_.jd);var p=Ej(""+h+m,n||{},!0);D("ytNetworklessLoggingInitializationOptions")&&
Ro.isNwlInitialized?Zm().then(function(t){e(t)}):e(!1)}
;function To(){var a=D("_lact",window);return null==a?-1:Math.max(Date.now()-a,0)}
;var Uo=C.ytPubsubPubsubInstance||new M,Vo=C.ytPubsubPubsubSubscribedKeys||{},Wo=C.ytPubsubPubsubTopicToKeys||{},Xo=C.ytPubsubPubsubIsSynchronous||{};M.prototype.subscribe=M.prototype.subscribe;M.prototype.unsubscribeByKey=M.prototype.vb;M.prototype.publish=M.prototype.eb;M.prototype.clear=M.prototype.clear;E("ytPubsubPubsubInstance",Uo);E("ytPubsubPubsubTopicToKeys",Wo);E("ytPubsubPubsubIsSynchronous",Xo);E("ytPubsubPubsubSubscribedKeys",Vo);var Yo=Symbol("injectionDeps");function Zo(){this.key=vn}
function $o(){this.h=new Map;this.g=new Map}
$o.prototype.resolve=function(a){return a instanceof Zo?ap(this,a.key,[],!0):ap(this,a,[])};
function ap(a,b,c,d){d=void 0===d?!1:d;if(-1<c.indexOf(b))throw Error("Deps cycle for: "+b);if(a.g.has(b))return a.g.get(b);if(!a.h.has(b)){if(d)return;throw Error("No provider for: "+b);}d=a.h.get(b);c.push(b);if(void 0!==d.Ed)var e=d.Ed;else if(d.Dd)e=d[Yo]?bp(a,d[Yo],c):[],e=d.Dd.apply(d,x(e));else if(d.Cd){e=d.Cd;var f=e[Yo]?bp(a,e[Yo],c):[];e=new (Function.prototype.bind.apply(e,[null].concat(x(f))))}else throw Error("Could not resolve providers for: "+b);c.pop();d.te||a.g.set(b,e);return e}
function bp(a,b,c){return b?b.map(function(d){return d instanceof Zo?ap(a,d.key,c,!0):ap(a,d,c)}):[]}
;var cp;function dp(){cp||(cp=new $o);return cp}
;var ep=window;function fp(){var a,b;return"h5vcc"in ep&&(null==(a=ep.h5vcc.traceEvent)?0:a.traceBegin)&&(null==(b=ep.h5vcc.traceEvent)?0:b.traceEnd)?1:"performance"in ep&&ep.performance.mark&&ep.performance.measure?2:0}
function gp(a){switch(fp()){case 1:ep.h5vcc.traceEvent.traceBegin("YTLR",a);break;case 2:ep.performance.mark(a+"-start");break;case 0:break;default:Zd()}}
function hp(a){switch(fp()){case 1:ep.h5vcc.traceEvent.traceEnd("YTLR",a);break;case 2:var b=a+"-start",c=a+"-end";ep.performance.mark(c);ep.performance.measure(a,b,c);break;case 0:break;default:Zd()}}
;var ip=U("web_enable_lifecycle_monitoring")&&0!==fp(),jp=U("web_enable_lifecycle_monitoring");function kp(a){var b=this;var c=void 0===c?0:c;var d=void 0===d?cl():d;this.j=c;this.h=d;this.i=new ig;this.g=a;for(a={La:0};a.La<this.g.length;a={rb:a.rb,La:a.La},a.La++)a.rb=this.g[a.La],c=function(e){return function(){e.rb.Tb();b.g[e.La].Lb=!0;b.g.every(function(f){return!0===f.Lb})&&b.i.resolve()}}(a),d=this.h.Ia(c,lp(this,a.rb)),this.g[a.La]=Object.assign({},a.rb,{Tb:c,
jobId:d})}
function mp(a){var b=Array.from(a.g.keys()).sort(function(d,e){return lp(a,a.g[e])-lp(a,a.g[d])});
b=w(b);for(var c=b.next();!c.done;c=b.next())c=a.g[c.value],void 0===c.jobId||c.Lb||(a.h.ba(c.jobId),a.h.Ia(c.Tb,10))}
kp.prototype.cancel=function(){for(var a=w(this.g),b=a.next();!b.done;b=a.next())b=b.value,void 0===b.jobId||b.Lb||this.h.ba(b.jobId),b.Lb=!0;this.i.resolve()};
function lp(a,b){var c;return null!=(c=b.priority)?c:a.j}
;function np(a){this.state=a;this.i=[];this.o=void 0;this.H={};ip&&gp(this.state)}
np.prototype.install=function(a){this.i.push(a);return this};
function op(a){ip&&hp(a.state);var b=a.transitions.find(function(d){return Array.isArray(d.from)?d.from.find(function(e){return e===a.state&&"none"===d.Fa}):d.from===a.state&&"none"===d.Fa});
if(b){a.h&&(mp(a.h),a.h=void 0);jp&&console.groupCollapsed&&console.groupEnd&&(console.groupCollapsed("["+a.constructor.name+"] '"+a.state+"' to 'none'"),console.log("with message: ",void 0),console.groupEnd());a.state="none";ip&&gp(a.state);b=b.action.bind(a);var c=a.i.filter(function(d){return d.none}).map(function(d){return d.none});
b(pp(a,c),void 0)}else throw Error("no transition specified from "+a.state+" to none");}
function pp(a,b){var c=b.filter(function(e){return 10===qp(a,e)}),d=b.filter(function(e){return 10!==qp(a,e)});
return a.H.se?function(){var e=Ea.apply(0,arguments);return B(function(f){if(1==f.g)return A(f,a.oa.apply(a,[c].concat(x(e))),2);a.u.apply(a,[d].concat(x(e)));f.g=0})}:function(){var e=Ea.apply(0,arguments);
a.za.apply(a,[c].concat(x(e)));a.u.apply(a,[d].concat(x(e)))}}
np.prototype.za=function(a){for(var b=Ea.apply(1,arguments),c=cl(),d=w(a),e=d.next(),f={};!e.done;f={Ya:f.Ya},e=d.next())f.Ya=e.value,c.jb(function(g){return function(){rp(g.Ya.name);g.Ya.mb.apply(g.Ya,x(b));sp(g.Ya.name)}}(f))};
np.prototype.oa=function(a){var b=Ea.apply(1,arguments),c,d,e,f,g;return B(function(h){1==h.g&&(c=cl(),d=w(a),e=d.next(),f={});if(3!=h.g){if(e.done)return h.B(0);f.Ma=e.value;f.lb=void 0;g=function(k){return function(){rp(k.Ma.name);var l=k.Ma.mb.apply(k.Ma,x(b));"function"===typeof(null==l?void 0:l.then)?k.lb=l.then(function(){sp(k.Ma.name)}):sp(k.Ma.name)}}(f);
c.jb(g);return f.lb?A(h,f.lb,3):h.B(3)}f={Ma:f.Ma,lb:f.lb};e=d.next();return h.B(2)})};
np.prototype.u=function(a){var b=Ea.apply(1,arguments),c=this,d=a.map(function(e){return{Tb:function(){rp(e.name);e.mb.apply(e,x(b));sp(e.name)},
priority:qp(c,e)}});
d.length&&(this.h=new kp(d))};
function qp(a,b){var c,d;return null!=(d=null!=(c=a.o)?c:b.priority)?d:0}
function rp(a){ip&&a&&gp(a)}
function sp(a){ip&&a&&hp(a)}
fa.Object.defineProperties(np.prototype,{j:{configurable:!0,enumerable:!0,get:function(){return this.state}}});function tp(a){np.call(this,void 0===a?"none":a);this.g=null;this.o=10;this.transitions=[{from:"none",Fa:"application_navigating",action:this.M},{from:"application_navigating",Fa:"none",action:this.S},{from:"application_navigating",Fa:"application_navigating",action:function(){}},
{from:"none",Fa:"none",action:function(){}}]}
var up;y(tp,np);tp.prototype.M=function(a,b){var c=this;this.g=xk(function(){"application_navigating"===c.j&&op(c)},5E3);
a(null==b?void 0:b.event)};
tp.prototype.S=function(a,b){this.g&&(kf.ba(this.g),this.g=null);a(null==b?void 0:b.event)};
function vp(){up||(up=new tp);return up}
;function wp(){this.store={};this.g={}}
wp.prototype.storePayload=function(a,b){a=xp(a);this.store[a]?this.store[a].push(b):(this.g={},this.store[a]=[b]);return a};
wp.prototype.smartExtractMatchingEntries=function(a){if(!a.keys.length)return[];for(var b=yp(this,a.keys.splice(0,1)[0]),c=[],d=0;d<b.length;d++)this.store[b[d]]&&a.sizeLimit&&(this.store[b[d]].length<=a.sizeLimit?(c.push.apply(c,x(this.store[b[d]])),delete this.store[b[d]]):c.push.apply(c,x(this.store[b[d]].splice(0,a.sizeLimit))));(null==a?0:a.sizeLimit)&&c.length<(null==a?void 0:a.sizeLimit)&&(a.sizeLimit-=c.length,c.push.apply(c,x(this.smartExtractMatchingEntries(a))));return c};
wp.prototype.extractMatchingEntries=function(a){a=yp(this,a);for(var b=[],c=0;c<a.length;c++)this.store[a[c]]&&(b.push.apply(b,x(this.store[a[c]])),delete this.store[a[c]]);return b};
wp.prototype.getSequenceCount=function(a){a=yp(this,a);for(var b=0,c=0;c<a.length;c++){var d=void 0;b+=(null==(d=this.store[a[c]])?void 0:d.length)||0}return b};
function yp(a,b){var c=xp(b);if(a.g[c])return a.g[c];var d=Object.keys(a.store)||[];if(1>=d.length&&xp(b)===d[0])return d;for(var e=[],f=0;f<d.length;f++){var g=d[f].split("/");if(zp(b.auth,g[0])){var h=b.isJspb;zp(void 0===h?"undefined":h?"true":"false",g[1])&&zp(b.cttAuthInfo,g[2])&&(h=b.tier,h=void 0===h?"undefined":JSON.stringify(h),zp(h,g[3])&&e.push(d[f]))}}return a.g[c]=e}
function zp(a,b){return void 0===a||"undefined"===a?!0:a===b}
wp.prototype.getSequenceCount=wp.prototype.getSequenceCount;wp.prototype.extractMatchingEntries=wp.prototype.extractMatchingEntries;wp.prototype.smartExtractMatchingEntries=wp.prototype.smartExtractMatchingEntries;wp.prototype.storePayload=wp.prototype.storePayload;function xp(a){return[void 0===a.auth?"undefined":a.auth,void 0===a.isJspb?"undefined":a.isJspb,void 0===a.cttAuthInfo?"undefined":a.cttAuthInfo,void 0===a.tier?"undefined":a.tier].join("/")}
;var Ap=V("initial_gel_batch_timeout",2E3),Bp=V("gel_queue_timeout_max_ms",6E4),Cp=Math.pow(2,16)-1,Dp=V("gel_min_batch_size",5),Ep=void 0;function Fp(){this.j=this.g=this.h=0;this.i=!1}
var Gp=new Fp,Hp=new Fp,Ip=new Fp,Jp=new Fp,Kp,Lp=!0,Mp=C.ytLoggingTransportTokensToCttTargetIds_||{};E("ytLoggingTransportTokensToCttTargetIds_",Mp);var Np=C.ytLoggingTransportTokensToJspbCttTargetIds_||{};E("ytLoggingTransportTokensToJspbCttTargetIds_",Np);var Op={};function Pp(){var a=D("yt.logging.ims");a||(a=new wp,E("yt.logging.ims",a));return a}
function Qp(a,b){if("log_event"===a.endpoint){Rp(a);var c=Sp(a),d=Tp(a.payload)||"",e=Up(d),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=Vp(e.tier);if(400===f){Wp(a,b);return}}Op[c]=!0;e={cttAuthInfo:c,isJspb:!1,tier:f};Pp().storePayload(e,a.payload);Xp(b,c,!1,e,Yp(d))}}
function Zp(a,b,c){if("log_event"===b.endpoint){Rp(void 0,b);var d=Sp(b,!0),e=Up(a),f=200;if(e){if(!1===e.enabled&&!U("web_payload_policy_disabled_killswitch"))return;f=Vp(e.tier);if(400===f){$p(a,b,c);return}}Op[d]=!0;e={cttAuthInfo:d,isJspb:!0,tier:f};Pp().storePayload(e,b.payload.toJSON());Xp(c,d,!0,e,Yp(a))}}
function Xp(a,b,c,d,e){function f(){aq({writeThenSend:!0},U("flush_only_full_queue")?b:void 0,c,d.tier)}
c=void 0===c?!1:c;e=void 0===e?!1:e;a&&(Ep=new a);a=V("tvhtml5_logging_max_batch_ads_fork")||V("web_logging_max_batch")||100;var g=Y(),h=bq(c,d.tier),k=h.j;e&&(h.i=!0);e=0;d&&(e=Pp().getSequenceCount(d));1E3<=e?f():e>=a?Kp||(Kp=cq(function(){f();Kp=void 0},0)):10<=g-k&&(dq(c,d.tier),h.j=g)}
function Wp(a,b){if("log_event"===a.endpoint){Rp(a);var c=Sp(a),d=new Map;d.set(c,[a.payload]);var e=Tp(a.payload)||"";b&&(Ep=new b);return new jg(function(f,g){Ep&&Ep.isReady()?eq(d,Ep,f,g,{bypassNetworkless:!0},!0,Yp(e)):f()})}}
function $p(a,b,c){if("log_event"===b.endpoint){Rp(void 0,b);var d=Sp(b,!0),e=new Map;e.set(d,[b.payload.toJSON()]);c&&(Ep=new c);return new jg(function(f){Ep&&Ep.isReady()?fq(e,Ep,f,{bypassNetworkless:!0},!0,Yp(a)):f()})}}
function Sp(a,b){var c="";if(a.dangerousLogToVisitorSession)c="visitorOnlyApprovedKey";else if(a.cttAuthInfo){if(void 0===b?0:b){b=a.cttAuthInfo.token;c=a.cttAuthInfo;var d=new Zi;c.videoId?Cd(d,1,Kd,fd(c.videoId)):c.playlistId&&Cd(d,2,Kd,fd(c.playlistId));Np[b]=d}else b=a.cttAuthInfo,c={},b.videoId?c.videoId=b.videoId:b.playlistId&&(c.playlistId=b.playlistId),Mp[a.cttAuthInfo.token]=c;c=a.cttAuthInfo.token}return c}
function aq(a,b,c,d){a=void 0===a?{}:a;c=void 0===c?!1:c;new jg(function(e,f){var g=bq(c,d),h=g.i;g.i=!1;gq(g.h);gq(g.g);g.g=0;Ep&&Ep.isReady()?void 0===d&&U("enable_web_tiered_gel")?hq(e,f,a,b,c,300,h):hq(e,f,a,b,c,d,h):(dq(c,d),e())})}
function hq(a,b,c,d,e,f,g){var h=Ep;c=void 0===c?{}:c;e=void 0===e?!1:e;f=void 0===f?200:f;g=void 0===g?!1:g;var k=new Map,l=new Map,m={isJspb:e,cttAuthInfo:d,tier:f},n={isJspb:e,cttAuthInfo:d};if(void 0!==d)e?(b=U("enable_web_tiered_gel")?Pp().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Pp().extractMatchingEntries(n),k.set(d,b),fq(k,h,a,c,!1,g)):(k=U("enable_web_tiered_gel")?Pp().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Pp().extractMatchingEntries(n),l.set(d,k),eq(l,h,
a,b,c,!1,g));else if(e){b=w(Object.keys(Op));for(d=b.next();!d.done;d=b.next())l=d.value,f=U("enable_web_tiered_gel")?Pp().smartExtractMatchingEntries({keys:[m,n],sizeLimit:1E3}):Pp().extractMatchingEntries({isJspb:!0,cttAuthInfo:l}),0<f.length&&k.set(l,f),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Op[l];fq(k,h,a,c,!1,g)}else{k=w(Object.keys(Op));for(d=k.next();!d.done;d=k.next())m=d.value,n=U("enable_web_tiered_gel")?Pp().smartExtractMatchingEntries({keys:[{isJspb:!1,
cttAuthInfo:m,tier:f},{isJspb:!1,cttAuthInfo:m}],sizeLimit:1E3}):Pp().extractMatchingEntries({isJspb:!1,cttAuthInfo:m}),0<n.length&&l.set(m,n),(U("web_fp_via_jspb_and_json")&&c.writeThenSend||!U("web_fp_via_jspb_and_json"))&&delete Op[m];eq(l,h,a,b,c,!1,g)}}
function dq(a,b){function c(){aq({writeThenSend:!0},void 0,a,b)}
a=void 0===a?!1:a;b=void 0===b?200:b;var d=bq(a,b),e=d===Jp||d===Ip?5E3:Bp;U("web_gel_timeout_cap")&&!d.g&&(e=cq(function(){c()},e),d.g=e);
gq(d.h);e=T("LOGGING_BATCH_TIMEOUT",V("web_gel_debounce_ms",1E4));U("shorten_initial_gel_batch_timeout")&&Lp&&(e=Ap);e=cq(function(){0<V("gel_min_batch_size")?Pp().getSequenceCount({cttAuthInfo:void 0,isJspb:a,tier:b})>=Dp&&c():c()},e);
d.h=e}
function eq(a,b,c,d,e,f,g){e=void 0===e?{}:e;var h=Math.round(Y()),k=a.size,l=iq(g);a=w(a);var m=a.next();for(g={};!m.done;g={Gb:g.Gb,batchRequest:g.batchRequest,dangerousLogToVisitorSession:g.dangerousLogToVisitorSession,Ib:g.Ib,Hb:g.Hb},m=a.next()){var n=w(m.value);m=n.next().value;n=n.next().value;g.batchRequest=mb({context:An(b.config_||zn())});if(!La(n)&&!U("throw_err_when_logevent_malformed_killswitch")){d();break}g.batchRequest.events=n;(n=Mp[m])&&jq(g.batchRequest,m,n);delete Mp[m];g.dangerousLogToVisitorSession=
"visitorOnlyApprovedKey"===m;kq(g.batchRequest,h,g.dangerousLogToVisitorSession);lq(e);g.Ib=function(q){U("start_client_gcf")&&kf.qa(function(){return B(function(p){return A(p,mq(q),0)})});
k--;k||c()};
g.Gb=0;g.Hb=function(q){return function(){q.Gb++;if(e.bypassNetworkless&&1===q.Gb)try{Yn(b,l,q.batchRequest,nq({writeThenSend:!0},q.dangerousLogToVisitorSession,q.Ib,q.Hb,f)),Lp=!1}catch(p){kj(p),d()}k--;k||c()}}(g);
try{Yn(b,l,g.batchRequest,nq(e,g.dangerousLogToVisitorSession,g.Ib,g.Hb,f)),Lp=!1}catch(q){kj(q),d()}}}
function fq(a,b,c,d,e,f){d=void 0===d?{}:d;var g=Math.round(Y()),h={value:a.size},k=new Map([].concat(x(a)));k=w(k);for(var l=k.next();!l.done;l=k.next()){var m=w(l.value).next().value,n=a.get(m);l=new $i;var q=b.config_||zn(),p=new Ii,t=new Bi;K(t,1,q.yc);K(t,2,q.xc);Nd(t,16,q.ld);K(t,17,q.wc);if(q.Rb){var u=q.Rb,z=new yi;u.coldConfigData&&K(z,1,u.coldConfigData);u.appInstallData&&K(z,6,u.appInstallData);u.coldHashData&&K(z,3,u.coldHashData);u.hotHashData&&z.g(u.hotHashData);J(t,yi,62,z)}if((u=C.devicePixelRatio)&&
1!=u){if(null!=u&&"number"!==typeof u)throw Error("Value of float/double field must be a number, found "+typeof u+": "+u);zd(t,65,u)}u=T("EXPERIMENTS_TOKEN","");""!==u&&K(t,54,u);u=mj();if(0<u.length){z=new Ei;for(var G=0;G<u.length;G++){var R=new Ci;K(R,1,u[G].key);Cd(R,2,Di,fd(u[G].value));Hd(z,15,Ci,R)}J(p,Ei,5,z)}Bn(q,t);Cn(p);Dn(t);En(q,t);Fn(t);U("start_client_gcf")&&Gn(t);T("DELEGATED_SESSION_ID")&&!U("pageid_as_header_web")&&(q=new Hi,K(q,3,T("DELEGATED_SESSION_ID")));!U("fill_delegate_context_in_gel_killswitch")&&
(q=T("INNERTUBE_CONTEXT_SERIALIZED_DELEGATION_CONTEXT"))&&(u=Fd(p,Hi,3)||new Hi,q=K(u,18,q),J(p,Hi,3,q));q=t;u=w(Object.entries(Dj(T("DEVICE",""))));for(z=u.next();!z.done;z=u.next())G=w(z.value),z=G.next().value,G=G.next().value,"cbrand"===z?K(q,12,G):"cmodel"===z?K(q,13,G):"cbr"===z?K(q,87,G):"cbrver"===z?K(q,88,G):"cos"===z?K(q,18,G):"cosver"===z?K(q,19,G):"cplatform"===z&&Nd(q,42,nk(G));J(p,Bi,1,t);J(l,Ii,1,p);if(t=Np[m])a:{if(Jd(t,1))p=1;else if(t.getPlaylistId())p=2;else break a;J(l,Zi,4,t);
t=Fd(l,Ii,1)||new Ii;q=Fd(t,Hi,3)||new Hi;u=new Gi;K(u,2,m);Nd(u,1,p);Hd(q,12,Gi,u);J(t,Hi,3,q)}delete Np[m];m="visitorOnlyApprovedKey"===m;oq()||Md(l,2,g);!m&&(p=T("EVENT_ID"))&&(t=pq(),q=new Yi,K(q,1,p),Md(q,2,t),J(l,Yi,5,q));lq(d);if(n){p=[];for(t=0;t<n.length;t++)try{p.push(new Wi(n[t]))}catch(P){kj(new tk("Transport failed to deserialize "+String(n[t])))}n=p}else n=[];n=w(n);for(p=n.next();!p.done;p=n.next())Hd(l,3,Wi,p.value);n={startTime:Y(),ticks:{},infos:{}};l=Pd(l);n.ticks.geljspc=Y();U("log_jspb_serialize_latency")&&
Jn("gel_jspb_serialize",n,{sampleRate:.1});qq(l,b,c,d,e,f,m,h)}}
function qq(a,b,c,d,e,f,g,h){d=void 0===d?{}:d;h=void 0===h?{value:0}:h;f=iq(f);d=nq(d,g,function(k){U("start_client_gcf")&&kf.qa(function(){return B(function(l){return A(l,mq(k),0)})});
h.value--;h.value||c()},function(){h.value--;
h.value||c()},e);
d.headers["Content-Type"]="application/json+protobuf";d.postBodyFormat="JSPB";d.postBody=a;Yn(b,f,"",d);Lp=!1}
function lq(a){U("always_send_and_write")&&(a.writeThenSend=!1)}
function nq(a,b,c,d,e){a={retry:!0,onSuccess:c,onError:d,networklessOptions:a,dangerousLogToVisitorSession:b,le:!!e,headers:{},postBodyFormat:"",postBody:"",compress:U("compress_gel")||U("compress_gel_lr")};oq()&&(a.headers["X-Goog-Request-Time"]=JSON.stringify(Math.round(Y())));return a}
function kq(a,b,c){oq()||(a.requestTimeMs=String(b));U("unsplit_gel_payloads_in_logs")&&(a.unsplitGelPayloadsInLogs=!0);!c&&(b=T("EVENT_ID"))&&(c=pq(),a.serializedClientEventId={serializedEventId:b,clientCounter:String(c)})}
function pq(){var a=T("BATCH_CLIENT_COUNTER")||0;a||(a=Math.floor(Math.random()*Cp/2));a++;a>Cp&&(a=1);ej("BATCH_CLIENT_COUNTER",a);return a}
function jq(a,b,c){if(c.videoId)var d="VIDEO";else if(c.playlistId)d="PLAYLIST";else return;a.credentialTransferTokenTargetId=c;a.context=a.context||{};a.context.user=a.context.user||{};a.context.user.credentialTransferTokens=[{token:b,scope:d}]}
function Rp(a,b){if(D("yt.logging.transport.enableScrapingForTest")){var c=D("yt.logging.transport.scrapedPayloadsForTesting"),d=D("yt.logging.transport.payloadToScrape");b&&(b=D("yt.logging.transport.getScrapedPayloadFromClientEventsFunction").bind(b.payload)())&&c.push(b);if(d&&1<=d.length)for(b=0;b<d.length;b++)if(a&&a.payload[d[b]]){var e=void 0;c.push((null==(e=a)?void 0:e.payload)[d[b]])}E("yt.logging.transport.scrapedPayloadsForTesting",c)}}
function oq(){return U("use_request_time_ms_header")||U("lr_use_request_time_ms_header")}
function cq(a,b){return U("transport_use_scheduler")?U("logging_avoid_blocking_during_navigation")||U("lr_logging_avoid_blocking_during_navigation")?xk(function(){if("none"===vp().j)a();else{var c={};vp().install((c.none={mb:a},c))}},b):xk(a,b):vj(a,b)}
function gq(a){U("transport_use_scheduler")?kf.ba(a):window.clearTimeout(a)}
function mq(a){var b,c,d,e,f,g,h,k,l,m;return B(function(n){if(1==n.g){d=null==(b=a)?void 0:null==(c=b.responseContext)?void 0:c.globalConfigGroup;var q=d?d[xi.name]:void 0;e=q;g=null==(f=d)?void 0:f.hotHashData;q=d?d[wi.name]:void 0;h=q;l=null==(k=d)?void 0:k.coldHashData;return(m=dp().resolve(new Zo))?g?e?A(n,wn(m,g,e),2):A(n,wn(m,g),2):n.B(2):n.return()}return l?h?A(n,xn(m,l,h),0):A(n,xn(m,l),0):n.B(0)})}
function bq(a,b){b=void 0===b?200:b;return a?300===b?Jp:Hp:300===b?Ip:Gp}
function Up(a){if(U("enable_web_tiered_gel")){a=uo[a||""];var b,c;if(null==dp().resolve(new Zo))var d=void 0;else{var e=null!=(d=D("yt.gcf.config.hotConfigGroup"))?d:null;d=null==e?void 0:null==(b=e.loggingHotConfig)?void 0:null==(c=b.eventLoggingConfig)?void 0:c.payloadPolicies}if(b=d)for(c=0;c<b.length;c++)if(b[c].payloadNumber===a)return b[c]}}
function Tp(a){a=Object.keys(a);a=w(a);for(var b=a.next();!b.done;b=a.next())if(b=b.value,uo[b])return b}
function Vp(a){switch(a){case "DELAYED_EVENT_TIER_UNSPECIFIED":return 0;case "DELAYED_EVENT_TIER_DEFAULT":return 100;case "DELAYED_EVENT_TIER_DISPATCH_TO_EMPTY":return 200;case "DELAYED_EVENT_TIER_FAST":return 300;case "DELAYED_EVENT_TIER_IMMEDIATE":return 400;default:return 200}}
function Yp(a){return"gelDebuggingEvent"===a}
function iq(a){return(void 0===a?0:a)&&U("vss_through_gel_video_stats")?"video_stats":"log_event"}
;var rq=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",rq);
function sq(a,b,c,d){d=void 0===d?{}:d;var e={},f=Math.round(d.timestamp||Y());e.eventTimeMs=f<Number.MAX_SAFE_INTEGER?f:0;e[a]=b;a=To();e.context={lastActivityMs:String(d.timestamp||!isFinite(a)?-1:a)};d.sequenceGroup&&!U("web_gel_sequence_info_killswitch")&&(a=e.context,b=d.sequenceGroup,b={index:tq(b),groupKey:b},a.sequence=b,d.endOfSequence&&delete rq[d.sequenceGroup]);(d.sendIsolatedPayload?Wp:Qp)({endpoint:"log_event",payload:e,cttAuthInfo:d.cttAuthInfo,dangerousLogToVisitorSession:d.dangerousLogToVisitorSession},
c)}
function uq(a){aq(void 0,void 0,void 0===a?!1:a)}
function tq(a){rq[a]=a in rq?rq[a]+1:0;return rq[a]}
;var vq=[];function wq(a,b,c){c=void 0===c?{}:c;var d=So;T("ytLoggingEventsDefaultDisabled",!1)&&So===So&&(d=null);U("web_all_payloads_via_jspb")?(c.timestamp||(c.lact=To(),c.timestamp=Y()),vq.push({Cc:a,payload:b,options:c})):sq(a,b,d,c)}
;var xq=C.ytLoggingGelSequenceIdObj_||{};E("ytLoggingGelSequenceIdObj_",xq);function yq(a,b){var c=void 0;c=void 0===c?{}:c;var d=!1;T("ytLoggingEventsDefaultDisabled",!1)&&(d=!0);d=d?null:So;c=void 0===c?{}:c;var e=Math.round(c.timestamp||Y());Md(b,1,e<Number.MAX_SAFE_INTEGER?e:0);e=new Vi;if(c.lact)Md(e,1,isFinite(c.lact)?c.lact:-1);else if(c.timestamp)Md(e,1,-1);else{var f=To();Md(e,1,isFinite(f)?f:-1)}if(c.sequenceGroup&&!U("web_gel_sequence_info_killswitch")){f=c.sequenceGroup;var g=tq(f),h=new Ui;Md(h,2,g);K(h,1,f);J(e,Ui,3,h);c.endOfSequence&&delete xq[c.sequenceGroup]}J(b,
Vi,33,e);(c.sendIsolatedPayload?$p:Zp)(a,{endpoint:"log_event",payload:b,cttAuthInfo:c.cttAuthInfo,dangerousLogToVisitorSession:c.dangerousLogToVisitorSession},d)}
;var zq=new Set,Aq=0,Bq=0,Cq=0,Dq=[],Eq=["PhantomJS","Googlebot","TO STOP THIS SECURITY SCAN go/scan"];function Fq(a){try{zq.add(a.message)}catch(b){}Aq++}
function Gq(){for(var a=w(Eq),b=a.next();!b.done;b=a.next()){var c=Hb();if(c&&0<=c.toLowerCase().indexOf(b.value.toLowerCase()))return!0}return!1}
function Hq(a,b){var c=b.params||{};a={urlParams:{a:"logerror",t:"jserror",type:b.name,msg:b.message.substr(0,250),line:b.lineNumber,level:a,"client.name":c.name},postParams:{url:T("PAGE_NAME",window.location.href),file:b.fileName},method:"POST"};c.version&&(a["client.version"]=c.version);if(a.postParams){b.stack&&(a.postParams.stack=b.stack);b=w(Object.keys(c));for(var d=b.next();!d.done;d=b.next())d=d.value,a.postParams["client."+d]=c[d];if(c=T("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS"))for(b=w(Object.keys(c)),
d=b.next();!d.done;d=b.next())d=d.value,a.postParams[d]=c[d];c=T("SERVER_NAME");b=T("SERVER_VERSION");c&&b&&(a.postParams["server.name"]=c,a.postParams["server.version"]=b)}Qj(T("ECATCHER_REPORT_HOST","")+"/error_204",a)}
;function Iq(){var a;return B(function(b){return(a=Df())?b.return(a.then(function(c){c=Pd(c);for(var d=[],e=0,f=0;f<c.length;f++){var g=c.charCodeAt(f);255<g&&(d[e++]=g&255,g>>=8);d[e++]=g}return Cc(d,3)})):b.return(Promise.resolve(null))})}
;var Jq={};function Kq(a){return Jq[a]||(Jq[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var Lq={},Mq=[],Ag=new M,Nq={};function Oq(){for(var a=w(Mq),b=a.next();!b.done;b=a.next())b=b.value,b()}
function Pq(a,b){var c;"yt:"===a.tagName.toLowerCase().substr(0,3)?c=a.getAttribute(b):c=a?a.dataset?a.dataset[Kq(b)]:a.getAttribute("data-"+b):null;return c}
function Qq(a){Ag.eb.apply(Ag,arguments)}
;function Rq(a){this.g=a||{};a=[this.g,window.YTConfig||{}];for(var b=0;b<a.length;b++)a[b].host&&(a[b].host=a[b].host.toString().replace("http://","https://"))}
function Sq(a,b){a=[a.g,window.YTConfig||{}];for(var c=0;c<a.length;c++){var d=a[c][b];if(void 0!==d)return d}return null}
function Tq(a,b,c){Uq||(Uq={},Vq=new Set,uj(window,"message",function(d){a:if(Vq.has(d.origin)){try{var e=JSON.parse(d.data)}catch(g){break a}var f=Uq[e.id];f&&d.origin===f.Uc&&(d=f.Fd,d.H=!0,d.H&&(bb(d.u,d.sendMessage,d),d.u.length=0),d.ic(e))}}));
a=String(Sq(a,"host"));Uq[c]={Fd:b,Uc:a};Vq.add(a)}
var Uq=null,Vq=null;var Wq=window;
function Xq(a,b,c){this.o=this.g=this.h=null;this.i=0;this.H=!1;this.u=[];this.j=null;this.S={};if(!a)throw Error("YouTube player element ID required.");this.id=Na(this);this.M=c;c=document;if(a="string"===typeof a?c.getElementById(a):a)if(c="iframe"===a.tagName.toLowerCase(),b.host||(b.host=c?Yb(a.src):"https://www.youtube.com"),this.h=new Rq(b),c||(b=Yq(this,a),this.o=a,(c=a.parentNode)&&c.replaceChild(b,a),a=b),this.g=a,this.g.id||(this.g.id="widget"+Na(this.g)),Lq[this.g.id]=this,window.postMessage){this.j=
new M;Zq(this);b=Sq(this.h,"events");for(var d in b)b.hasOwnProperty(d)&&this.addEventListener(d,b[d]);for(var e in Nq)Nq.hasOwnProperty(e)&&$q(this,e)}}
r=Xq.prototype;r.setSize=function(a,b){this.g.width=a.toString();this.g.height=b.toString();return this};
r.getIframe=function(){return this.g};
r.ic=function(a){ar(this,a.event,a)};
r.addEventListener=function(a,b){var c=b;"string"===typeof b&&(c=function(){window[b].apply(window,arguments)});
if(!c)return this;this.j.subscribe(a,c);br(this,a);return this};
function $q(a,b){b=b.split(".");if(2===b.length){var c=b[1];a.M===b[0]&&br(a,c)}}
r.destroy=function(){this.g&&this.g.id&&(Lq[this.g.id]=null);ze(this.j);if(this.o){var a=this.g,b=a.parentNode;b&&b.replaceChild(this.o,a)}else(a=this.g)&&a.parentNode&&a.parentNode.removeChild(a);Uq&&(Uq[this.id]=null);this.h=null;a=this.g;for(var c in kb)kb[c][0]==a&&sj(c);this.o=this.g=null};
r.mc=function(){return{}};
function cr(a,b,c){c=c||[];c=Array.prototype.slice.call(c);b={event:"command",func:b,args:c};a.H?a.sendMessage(b):a.u.push(b)}
function ar(a,b,c){a.j.Ja||(c={target:a,data:c},a.j.eb(b,c),Qq(a.M+"."+b,c))}
function Yq(a,b){var c=document.createElement("iframe");b=b.attributes;for(var d=0,e=b.length;d<e;d++){var f=b[d].value;null!=f&&""!==f&&"null"!==f&&c.setAttribute(b[d].name,f)}c.setAttribute("frameBorder","0");c.setAttribute("allowfullscreen","1");c.setAttribute("allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share");c.setAttribute("title","YouTube "+Sq(a.h,"title"));(b=Sq(a.h,"width"))&&c.setAttribute("width",b.toString());(b=Sq(a.h,"height"))&&
c.setAttribute("height",b.toString());Wq.yt_embedsEnableIframeWithLazyLoad&&c.setAttribute("loading","lazy");var g=a.mc();g.enablejsapi=window.postMessage?1:0;window.location.host&&(g.origin=window.location.protocol+"//"+window.location.host);g.widgetid=a.id;window.location.href&&bb(["debugjs","debugcss"],function(k){var l=bc(window.location.href,k);null!==l&&(g[k]=l)});
var h=""+Sq(a.h,"host")+("/embed/"+Sq(a.h,"videoId"))+"?"+$b(g);Wq.yt_embedsEnableUaChProbe?Iq().then(function(k){var l=new URL(h),m=Number(l.searchParams.get("reloads"));isNaN(m)&&(m=0);l.searchParams.set("reloads",(m+1).toString());k&&l.searchParams.set("uach",k);l.searchParams.set("uats",Math.floor(window.performance.timeOrigin).toString());k=de(l.href).toString();$d(c,ee(k));c.sandbox.add("allow-presentation","allow-top-navigation");return k}):Wq.yt_embedsEnableIframeSrcWithIntent?($d(c,ee(h)),
c.sandbox.add("allow-presentation","allow-top-navigation")):c.src=h;
return c}
r.Dc=function(){this.g&&this.g.contentWindow?this.sendMessage({event:"listening"}):window.clearInterval(this.i)};
function Zq(a){Tq(a.h,a,a.id);a.i=wj(a.Dc.bind(a));uj(a.g,"load",function(){window.clearInterval(a.i);a.i=wj(a.Dc.bind(a))})}
function br(a,b){a.S[b]||(a.S[b]=!0,cr(a,"addEventListener",[b]))}
r.sendMessage=function(a){a.id=this.id;a.channel="widget";var b=JSON.stringify(a),c=[Yb(this.g.src||"").replace("http:","https:")];if(this.g.contentWindow)for(var d=0;d<c.length;d++)try{this.g.contentWindow.postMessage(b,c[d])}catch(sc){if(sc.name&&"SyntaxError"===sc.name){if(!(sc.message&&0<sc.message.indexOf("target origin ''"))){var e=void 0,f=sc;e=void 0===e?{}:e;e.name=T("INNERTUBE_CONTEXT_CLIENT_NAME",1);e.version=T("INNERTUBE_CONTEXT_CLIENT_VERSION");var g="WARNING",h=!1;g=void 0===g?"ERROR":
g;h=void 0===h?!1:h;if(f){f.hasOwnProperty("level")&&f.level&&(g=f.level);if(U("console_log_js_exceptions")){var k=f,l=[];l.push("Name: "+k.name);l.push("Message: "+k.message);k.hasOwnProperty("params")&&l.push("Error Params: "+JSON.stringify(k.params));k.hasOwnProperty("args")&&l.push("Error args: "+JSON.stringify(k.args));l.push("File name: "+k.fileName);l.push("Stacktrace: "+k.stack);window.console.log(l.join("\n"),k)}if(!(5<=Aq)){var m=void 0,n=void 0,q=f,p=e,t=Ud(q),u=t.message||"Unknown Error",
z=t.name||"UnknownError",G=t.stack||q.h||"Not available";if(G.startsWith(z+": "+u)){var R=G.split("\n");R.shift();G=R.join("\n")}var P=t.lineNumber||"Not available",Fa=t.fileName||"Not available",Uc=G,Ra=0;if(q.hasOwnProperty("args")&&q.args&&q.args.length)for(var Ga=0;Ga<q.args.length&&!(Ra=ik(q.args[Ga],"params."+Ga,p,Ra),500<=Ra);Ga++);else if(q.hasOwnProperty("params")&&q.params){var da=q.params;if("object"===typeof q.params)for(n in da){if(da[n]){var ma="params."+n,na=kk(da[n]);p[ma]=na;Ra+=
ma.length+na.length;if(500<Ra)break}}else p.params=kk(da)}if(Dq.length)for(var ca=0;ca<Dq.length&&!(Ra=ik(Dq[ca],"params.context."+ca,p,Ra),500<=Ra);ca++);navigator.vendor&&!p.hasOwnProperty("vendor")&&(p["device.vendor"]=navigator.vendor);var W={message:u,name:z,lineNumber:P,fileName:Fa,stack:Uc,params:p,sampleWeight:1},mm=Number(q.columnNumber);isNaN(mm)||(W.lineNumber=W.lineNumber+":"+mm);if("IGNORED"===q.level)m=0;else a:{for(var nm=ek(),om=w(nm.Da),uh=om.next();!uh.done;uh=om.next()){var pm=
uh.value;if(W.message&&W.message.match(pm.oe)){m=pm.weight;break a}}for(var qm=w(nm.Aa),vh=qm.next();!vh.done;vh=qm.next()){var rm=vh.value;if(rm.mb(W)){m=rm.weight;break a}}m=1}W.sampleWeight=m;for(var sm=w(Zj),wh=sm.next();!wh.done;wh=sm.next()){var xh=wh.value;if(xh.Jb[W.name])for(var tm=w(xh.Jb[W.name]),yh=tm.next();!yh.done;yh=tm.next()){var um=yh.value,Ee=W.message.match(um.regexp);if(Ee){W.params["params.error.original"]=Ee[0];for(var zh=um.groups,vm={},tc=0;tc<zh.length;tc++)vm[zh[tc]]=Ee[tc+
1],W.params["params.error."+zh[tc]]=Ee[tc+1];W.message=xh.Xb(vm);break}}}W.params||(W.params={});var wm=ek();W.params["params.errorServiceSignature"]="msg="+wm.Da.length+"&cb="+wm.Aa.length;W.params["params.serviceWorker"]="false";C.document&&C.document.querySelectorAll&&(W.params["params.fscripts"]=String(document.querySelectorAll("script:not([nonce])").length));rb("sample").constructor!==qb&&(W.params["params.fconst"]="true");var kd=W;window.yterr&&"function"===typeof window.yterr&&window.yterr(kd);
if(0!==kd.sampleWeight&&!zq.has(kd.message))if(h&&U("web_enable_error_204")){var xm=kd;Hq(void 0===g?"ERROR":g,xm);Fq(xm)}else{var Ah=void 0,Bh=void 0,ym=void 0,zm=void 0,Ch=void 0,N=kd,Mb=g;Mb=void 0===Mb?"ERROR":Mb;if("ERROR"===Mb){fk.eb("handleError",N);if(U("record_app_crashed_web")&&0===Cq&&1===N.sampleWeight)if(Cq++,U("errors_via_jspb")){var ir=new Ti;Ch=Nd(ir,1,1);if(!U("report_client_error_with_app_crash_ks")){var jr=new Si,kr=new Ri,lr=new Qi,mr=new Pi;var nr=K(mr,1,N.message);var or=J(lr,
Pi,3,nr);zm=J(kr,Qi,5,or);ym=J(jr,Ri,9,zm);J(Ch,Si,4,ym)}var Am=U("jspb_sparse_encoded_pivot")?new Wi([{}]):new Wi;Gd(Am,Ti,20,Xi,Ch);yq("appCrashed",Am)}else{var Bm={appCrashType:"APP_CRASH_TYPE_BREAKPAD"};U("report_client_error_with_app_crash_ks")||(Bm.systemHealth={crashData:{clientError:{logMessage:{message:N.message}}}});wq("appCrashed",Bm)}Bq++}else"WARNING"===Mb&&fk.eb("handleWarning",N);if(U("kevlar_gel_error_routing"))a:{var ld=Mb;if(U("errors_via_jspb")){if(Gq())Bh=void 0;else{var uc=new Mi;
K(uc,1,N.stack);N.fileName&&K(uc,4,N.fileName);var db=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):[];0!==db.length&&(1!==db.length||isNaN(Number(db[0]))?2!==db.length||isNaN(Number(db[0]))||isNaN(Number(db[1]))||(Ld(uc,2,Number(db[0])),Ld(uc,3,Number(db[1]))):Ld(uc,2,Number(db[0])));var Nb=new Pi;K(Nb,1,N.message);K(Nb,3,N.name);Ld(Nb,6,N.sampleWeight);"ERROR"===ld?Nd(Nb,2,2):"WARNING"===ld?Nd(Nb,2,1):Nd(Nb,2,0);var Dh=new Ni;zd(Dh,1,bd(!0));Gd(Dh,Mi,3,Oi,uc);var Ob=new Li;K(Ob,3,window.location.href);
for(var Cm=T("FEXP_EXPERIMENTS",[]),Eh=0;Eh<Cm.length;Eh++){var pr=ed(Cm[Eh]),Dm=Ob.s,qr=pr,Em=Lc(Dm);Xc(Em);Bd(Dm,Em,5,2).push(qr)}var Fh=fj();if(!gj()&&Fh)for(var Fm=w(Object.keys(Fh)),Pb=Fm.next();!Pb.done;Pb=Fm.next()){var Gm=Pb.value,Gh=new Ki;K(Gh,1,Gm);K(Gh,2,String(Fh[Gm]));Hd(Ob,4,Ki,Gh)}var Hh=N.params;if(Hh){var Hm=w(Object.keys(Hh));for(Pb=Hm.next();!Pb.done;Pb=Hm.next()){var Im=Pb.value,Ih=new Ki;K(Ih,1,"client."+Im);K(Ih,2,String(Hh[Im]));Hd(Ob,4,Ki,Ih)}}var Jm=T("SERVER_NAME"),Km=T("SERVER_VERSION");
if(Jm&&Km){var Jh=new Ki;K(Jh,1,"server.name");K(Jh,2,Jm);Hd(Ob,4,Ki,Jh);var Kh=new Ki;K(Kh,1,"server.version");K(Kh,2,Km);Hd(Ob,4,Ki,Kh)}var Fe=new Qi;J(Fe,Li,1,Ob);J(Fe,Ni,2,Dh);J(Fe,Pi,3,Nb);Bh=Fe}var Lm=Bh;if(!Lm)break a;var Mm=U("jspb_sparse_encoded_pivot")?new Wi([{}]):new Wi;Gd(Mm,Qi,163,Xi,Lm);yq("clientError",Mm)}else{var Ja=void 0;Ja=void 0===Ja?{}:Ja;if(Gq())Ah=void 0;else{var md={stackTrace:N.stack};N.fileName&&(md.filename=N.fileName);var eb=N.lineNumber&&N.lineNumber.split?N.lineNumber.split(":"):
[];0!==eb.length&&(1!==eb.length||isNaN(Number(eb[0]))?2!==eb.length||isNaN(Number(eb[0]))||isNaN(Number(eb[1]))||(md.lineNumber=Number(eb[0]),md.columnNumber=Number(eb[1])):md.lineNumber=Number(eb[0]));var Lh={level:"ERROR_LEVEL_UNKNOWN",message:N.message,errorClassName:N.name,sampleWeight:N.sampleWeight};"ERROR"===ld?Lh.level="ERROR_LEVEL_ERROR":"WARNING"===ld&&(Lh.level="ERROR_LEVEL_WARNNING");var rr={isObfuscated:!0,browserStackInfo:md};Ja.pageUrl=window.location.href;Ja.kvPairs=[];T("FEXP_EXPERIMENTS")&&
(Ja.experimentIds=T("FEXP_EXPERIMENTS"));var Mh=fj();if(!gj()&&Mh)for(var Nm=w(Object.keys(Mh)),Qb=Nm.next();!Qb.done;Qb=Nm.next()){var Om=Qb.value;Ja.kvPairs.push({key:Om,value:String(Mh[Om])})}var Nh=N.params;if(Nh){var Pm=w(Object.keys(Nh));for(Qb=Pm.next();!Qb.done;Qb=Pm.next()){var Qm=Qb.value;Ja.kvPairs.push({key:"client."+Qm,value:String(Nh[Qm])})}}var Rm=T("SERVER_NAME"),Sm=T("SERVER_VERSION");Rm&&Sm&&(Ja.kvPairs.push({key:"server.name",value:Rm}),Ja.kvPairs.push({key:"server.version",value:Sm}));
Ah={errorMetadata:Ja,stackTrace:rr,logMessage:Lh}}var Tm=Ah;if(!Tm)break a;wq("clientError",Tm)}if("ERROR"===ld||U("errors_flush_gel_always_killswitch"))b:{if(U("web_fp_via_jspb")){var Ge=!0;Ge=void 0===Ge?!1:Ge;var Um=vq;vq=[];if(Um)for(var Vm=w(Um),Oh=Vm.next();!Oh.done;Oh=Vm.next()){var vc=Oh.value;Ge?sq(vc.Cc,vc.payload,So,vc.options):wq(vc.Cc,vc.payload,vc.options)}uq(!0);if(!U("web_fp_via_jspb_and_json"))break b}uq()}}U("suppress_error_204_logging")||Hq(Mb,N);Fq(N)}}}}}else throw sc;}else console&&
console.warn&&console.warn("The YouTube player is not attached to the DOM. API calls should be made after the onReady event. See more: https://developers.google.com/youtube/iframe_api_reference#Events")};function dr(a){return(0===a.search("cue")||0===a.search("load"))&&"loadModule"!==a}
function er(a){return 0===a.search("get")||0===a.search("is")}
;function fr(a,b){Xq.call(this,a,Object.assign({title:"video player",videoId:"",width:640,height:360},b||{}),"player");this.ka={};this.playerInfo={};this.videoTitle=""}
y(fr,Xq);r=fr.prototype;r.mc=function(){var a=Sq(this.h,"playerVars");if(a){var b={},c;for(c in a)b[c]=a[c];a=b}else a={};window!==window.top&&document.referrer&&(a.widget_referrer=document.referrer.substring(0,256));if(c=Sq(this.h,"embedConfig")){if(Ma(c))try{c=JSON.stringify(c)}catch(d){console.error("Invalid embed config JSON",d)}a.embed_config=c}return a};
r.ic=function(a){var b=a.event;a=a.info;switch(b){case "apiInfoDelivery":if(Ma(a))for(var c in a)a.hasOwnProperty(c)&&(this.ka[c]=a[c]);break;case "infoDelivery":gr(this,a);break;case "initialDelivery":Ma(a)&&(window.clearInterval(this.i),this.playerInfo={},this.ka={},hr(this,a.apiInterface),gr(this,a));break;default:ar(this,b,a)}};
function gr(a,b){if(Ma(b)){for(var c in b)b.hasOwnProperty(c)&&(a.playerInfo[c]=b[c]);a.playerInfo.hasOwnProperty("videoData")&&(b=a.playerInfo.videoData,b.hasOwnProperty("title")&&b.title?(b=b.title,b!==a.videoTitle&&(a.videoTitle=b,a.g.setAttribute("title",b))):(a.videoTitle="",a.g.setAttribute("title","YouTube "+Sq(a.h,"title"))))}}
function hr(a,b){bb(b,function(c){this[c]||("getCurrentTime"===c?this[c]=function(){var d=this.playerInfo.currentTime;if(1===this.playerInfo.playerState){var e=(Date.now()/1E3-this.playerInfo.currentTimeLastUpdated_)*this.playerInfo.playbackRate;0<e&&(d+=Math.min(e,1))}return d}:dr(c)?this[c]=function(){this.playerInfo={};
this.ka={};cr(this,c,arguments);return this}:er(c)?this[c]=function(){var d=0;
0===c.search("get")?d=3:0===c.search("is")&&(d=2);return this.playerInfo[c.charAt(d).toLowerCase()+c.substr(d+1)]}:this[c]=function(){cr(this,c,arguments);
return this})},a)}
r.getVideoEmbedCode=function(){var a=Sq(this.h,"host")+("/embed/"+Sq(this.h,"videoId")),b=Number(Sq(this.h,"width")),c=Number(Sq(this.h,"height"));if(isNaN(b)||isNaN(c))throw Error("Invalid width or height property");b=Math.floor(b);c=Math.floor(c);var d=this.videoTitle;a=Ub(a);d=Ub(null!=d?d:"YouTube video player");return'<iframe width="'+b+'" height="'+c+'" src="'+a+'" title="'+(d+'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>')};
r.getOptions=function(a){return this.ka.namespaces?a?this.ka[a]?this.ka[a].options||[]:[]:this.ka.namespaces||[]:[]};
r.getOption=function(a,b){if(this.ka.namespaces&&a&&b&&this.ka[a])return this.ka[a][b]};
function sr(a){if("iframe"!==a.tagName.toLowerCase()){var b=Pq(a,"videoid");b&&(b={videoId:b,width:Pq(a,"width"),height:Pq(a,"height")},new fr(a,b))}}
;E("YT.PlayerState.UNSTARTED",-1);E("YT.PlayerState.ENDED",0);E("YT.PlayerState.PLAYING",1);E("YT.PlayerState.PAUSED",2);E("YT.PlayerState.BUFFERING",3);E("YT.PlayerState.CUED",5);E("YT.get",function(a){return Lq[a]});
E("YT.scan",Oq);E("YT.subscribe",function(a,b,c){Ag.subscribe(a,b,c);Nq[a]=!0;for(var d in Lq)Lq.hasOwnProperty(d)&&$q(Lq[d],a)});
E("YT.unsubscribe",function(a,b,c){zg(a,b,c)});
E("YT.Player",fr);Xq.prototype.destroy=Xq.prototype.destroy;Xq.prototype.setSize=Xq.prototype.setSize;Xq.prototype.getIframe=Xq.prototype.getIframe;Xq.prototype.addEventListener=Xq.prototype.addEventListener;fr.prototype.getVideoEmbedCode=fr.prototype.getVideoEmbedCode;fr.prototype.getOptions=fr.prototype.getOptions;fr.prototype.getOption=fr.prototype.getOption;
Mq.push(function(a){var b=a;b||(b=document);a=gb(b.getElementsByTagName("yt:player"));var c=b||document;if(c.querySelectorAll&&c.querySelector)b=c.querySelectorAll(".yt-player");else{var d;c=document;b=b||c;if(b.querySelectorAll&&b.querySelector)b=b.querySelectorAll(".yt-player");else if(b.getElementsByClassName){var e=b.getElementsByClassName("yt-player");b=e}else{e=b.getElementsByTagName("*");var f={};for(c=d=0;b=e[c];c++){var g=b.className,h;if(h="function"==typeof g.split)h=0<=ab(g.split(/\s+/),
"yt-player");h&&(f[d++]=b)}f.length=d;b=f}}b=gb(b);bb(fb(a,b),sr)});
"undefined"!=typeof YTConfig&&YTConfig.parsetags&&"onload"!=YTConfig.parsetags||Oq();var tr=C.onYTReady;tr&&tr();var ur=C.onYouTubeIframeAPIReady;ur&&ur();var vr=C.onYouTubePlayerAPIReady;vr&&vr();}).call(this);
