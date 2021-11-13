!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=36)}([function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(2);var o=n(14),i=n(24);var s=n(9),a=n(26);function c(e){return 0===e.length?a.a:1===e.length?e[0]:function(t){return e.reduce((function(e,t){return t(e)}),t)}}var u=n(6),l=function(){function e(e){this._isScalar=!1,e&&(this._subscribe=e)}return e.prototype.lift=function(t){var n=new e;return n.source=this,n.operator=t,n},e.prototype.subscribe=function(e,t,n){var s=this.operator,a=function(e,t,n){if(e){if(e instanceof r.a)return e;if(e[o.a])return e[o.a]()}return e||t||n?new r.a(e,t,n):new r.a(i.a)}(e,t,n);if(s?a.add(s.call(a,this.source)):a.add(this.source||u.a.useDeprecatedSynchronousErrorHandling&&!a.syncErrorThrowable?this._subscribe(a):this._trySubscribe(a)),u.a.useDeprecatedSynchronousErrorHandling&&a.syncErrorThrowable&&(a.syncErrorThrowable=!1,a.syncErrorThrown))throw a.syncErrorValue;return a},e.prototype._trySubscribe=function(e){try{return this._subscribe(e)}catch(t){u.a.useDeprecatedSynchronousErrorHandling&&(e.syncErrorThrown=!0,e.syncErrorValue=t),!function(e){for(;e;){var t=e,n=t.closed,o=t.destination,i=t.isStopped;if(n||i)return!1;e=o&&o instanceof r.a?o:null}return!0}(e)?console.warn(t):e.error(t)}},e.prototype.forEach=function(e,t){var n=this;return new(t=d(t))((function(t,r){var o;o=n.subscribe((function(t){try{e(t)}catch(e){r(e),o&&o.unsubscribe()}}),r,t)}))},e.prototype._subscribe=function(e){var t=this.source;return t&&t.subscribe(e)},e.prototype[s.a]=function(){return this},e.prototype.pipe=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return 0===e.length?this:c(e)(this)},e.prototype.toPromise=function(e){var t=this;return new(e=d(e))((function(e,n){var r;t.subscribe((function(e){return r=e}),(function(e){return n(e)}),(function(){return e(r)}))}))},e.create=function(t){return new e(t)},e}();function d(e){if(e||(e=u.a.Promise||Promise),!e)throw new Error("no Promise impl found");return e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(0),o=n(15),i=n(24),s=n(3),a=n(14),c=n(6),u=n(11),l=function(e){function t(n,r,o){var s=e.call(this)||this;switch(s.syncErrorValue=null,s.syncErrorThrown=!1,s.syncErrorThrowable=!1,s.isStopped=!1,arguments.length){case 0:s.destination=i.a;break;case 1:if(!n){s.destination=i.a;break}if("object"==typeof n){n instanceof t?(s.syncErrorThrowable=n.syncErrorThrowable,s.destination=n,n.add(s)):(s.syncErrorThrowable=!0,s.destination=new d(s,n));break}default:s.syncErrorThrowable=!0,s.destination=new d(s,n,r,o)}return s}return r.a(t,e),t.prototype[a.a]=function(){return this},t.create=function(e,n,r){var o=new t(e,n,r);return o.syncErrorThrowable=!1,o},t.prototype.next=function(e){this.isStopped||this._next(e)},t.prototype.error=function(e){this.isStopped||(this.isStopped=!0,this._error(e))},t.prototype.complete=function(){this.isStopped||(this.isStopped=!0,this._complete())},t.prototype.unsubscribe=function(){this.closed||(this.isStopped=!0,e.prototype.unsubscribe.call(this))},t.prototype._next=function(e){this.destination.next(e)},t.prototype._error=function(e){this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.destination.complete(),this.unsubscribe()},t.prototype._unsubscribeAndRecycle=function(){var e=this._parentOrParents;return this._parentOrParents=null,this.unsubscribe(),this.closed=!1,this.isStopped=!1,this._parentOrParents=e,this},t}(s.a),d=function(e){function t(t,n,r,s){var a,c=e.call(this)||this;c._parentSubscriber=t;var u=c;return Object(o.a)(n)?a=n:n&&(a=n.next,r=n.error,s=n.complete,n!==i.a&&(u=Object.create(n),Object(o.a)(u.unsubscribe)&&c.add(u.unsubscribe.bind(u)),u.unsubscribe=c.unsubscribe.bind(c))),c._context=u,c._next=a,c._error=r,c._complete=s,c}return r.a(t,e),t.prototype.next=function(e){if(!this.isStopped&&this._next){var t=this._parentSubscriber;c.a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?this.__tryOrSetError(t,this._next,e)&&this.unsubscribe():this.__tryOrUnsub(this._next,e)}},t.prototype.error=function(e){if(!this.isStopped){var t=this._parentSubscriber,n=c.a.useDeprecatedSynchronousErrorHandling;if(this._error)n&&t.syncErrorThrowable?(this.__tryOrSetError(t,this._error,e),this.unsubscribe()):(this.__tryOrUnsub(this._error,e),this.unsubscribe());else if(t.syncErrorThrowable)n?(t.syncErrorValue=e,t.syncErrorThrown=!0):Object(u.a)(e),this.unsubscribe();else{if(this.unsubscribe(),n)throw e;Object(u.a)(e)}}},t.prototype.complete=function(){var e=this;if(!this.isStopped){var t=this._parentSubscriber;if(this._complete){var n=function(){return e._complete.call(e._context)};c.a.useDeprecatedSynchronousErrorHandling&&t.syncErrorThrowable?(this.__tryOrSetError(t,n),this.unsubscribe()):(this.__tryOrUnsub(n),this.unsubscribe())}else this.unsubscribe()}},t.prototype.__tryOrUnsub=function(e,t){try{e.call(this._context,t)}catch(e){if(this.unsubscribe(),c.a.useDeprecatedSynchronousErrorHandling)throw e;Object(u.a)(e)}},t.prototype.__tryOrSetError=function(e,t,n){if(!c.a.useDeprecatedSynchronousErrorHandling)throw new Error("bad call");try{t.call(this._context,n)}catch(t){return c.a.useDeprecatedSynchronousErrorHandling?(e.syncErrorValue=t,e.syncErrorThrown=!0,!0):(Object(u.a)(t),!0)}return!1},t.prototype._unsubscribe=function(){var e=this._parentSubscriber;this._context=null,this._parentSubscriber=null,e.unsubscribe()},t}(l)},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(18),o=n(25),i=n(15),s=function(){function e(e){return Error.call(this),this.message=e?e.length+" errors occurred during unsubscription:\n"+e.map((function(e,t){return t+1+") "+e.toString()})).join("\n  "):"",this.name="UnsubscriptionError",this.errors=e,this}return e.prototype=Object.create(Error.prototype),e}(),a=function(){function e(e){this.closed=!1,this._parentOrParents=null,this._subscriptions=null,e&&(this._ctorUnsubscribe=!0,this._unsubscribe=e)}var t;return e.prototype.unsubscribe=function(){var t;if(!this.closed){var n=this._parentOrParents,a=this._ctorUnsubscribe,u=this._unsubscribe,l=this._subscriptions;if(this.closed=!0,this._parentOrParents=null,this._subscriptions=null,n instanceof e)n.remove(this);else if(null!==n)for(var d=0;d<n.length;++d){n[d].remove(this)}if(Object(i.a)(u)){a&&(this._unsubscribe=void 0);try{u.call(this)}catch(e){t=e instanceof s?c(e.errors):[e]}}if(Object(r.a)(l)){d=-1;for(var h=l.length;++d<h;){var f=l[d];if(Object(o.a)(f))try{f.unsubscribe()}catch(e){t=t||[],e instanceof s?t=t.concat(c(e.errors)):t.push(e)}}}if(t)throw new s(t)}},e.prototype.add=function(t){var n=t;if(!t)return e.EMPTY;switch(typeof t){case"function":n=new e(t);case"object":if(n===this||n.closed||"function"!=typeof n.unsubscribe)return n;if(this.closed)return n.unsubscribe(),n;if(!(n instanceof e)){var r=n;(n=new e)._subscriptions=[r]}break;default:throw new Error("unrecognized teardown "+t+" added to Subscription.")}var o=n._parentOrParents;if(null===o)n._parentOrParents=this;else if(o instanceof e){if(o===this)return n;n._parentOrParents=[o,this]}else{if(-1!==o.indexOf(this))return n;o.push(this)}var i=this._subscriptions;return null===i?this._subscriptions=[n]:i.push(n),n},e.prototype.remove=function(e){var t=this._subscriptions;if(t){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}},e.EMPTY=((t=new e).closed=!0,t),e}();function c(e){return e.reduce((function(e,t){return e.concat(t instanceof s?t.errors:t)}),[])}},function(e,t,n){"use strict";n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return u}));var r=n(0),o=n(2),i=n(1),s=n(10),a=function(e){function t(t){var n=e.call(this)||this;return n.parent=t,n}return r.a(t,e),t.prototype._next=function(e){this.parent.notifyNext(e)},t.prototype._error=function(e){this.parent.notifyError(e),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(),this.unsubscribe()},t}(o.a),c=(o.a,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return r.a(t,e),t.prototype.notifyNext=function(e){this.destination.next(e)},t.prototype.notifyError=function(e){this.destination.error(e)},t.prototype.notifyComplete=function(){this.destination.complete()},t}(o.a));o.a;function u(e,t){if(!t.closed){if(e instanceof i.a)return e.subscribe(t);var n;try{n=Object(s.a)(e)(t)}catch(e){t.error(e)}return n}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),"undefined"==typeof window?t.browser={}:t.browser=n(34)},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=!1,o={Promise:void 0,set useDeprecatedSynchronousErrorHandling(e){e&&(new Error).stack;r=e},get useDeprecatedSynchronousErrorHandling(){return r}}},function(e,t,n){"use strict";function r(e){return e&&"function"==typeof e.schedule}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return d}));var r=n(0),o=n(1),i=n(2),s=n(3),a=n(13),c=n(31),u=n(14),l=function(e){function t(t){var n=e.call(this,t)||this;return n.destination=t,n}return r.a(t,e),t}(i.a),d=function(e){function t(){var t=e.call(this)||this;return t.observers=[],t.closed=!1,t.isStopped=!1,t.hasError=!1,t.thrownError=null,t}return r.a(t,e),t.prototype[u.a]=function(){return new l(this)},t.prototype.lift=function(e){var t=new h(this,this);return t.operator=e,t},t.prototype.next=function(e){if(this.closed)throw new a.a;if(!this.isStopped)for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].next(e)},t.prototype.error=function(e){if(this.closed)throw new a.a;this.hasError=!0,this.thrownError=e,this.isStopped=!0;for(var t=this.observers,n=t.length,r=t.slice(),o=0;o<n;o++)r[o].error(e);this.observers.length=0},t.prototype.complete=function(){if(this.closed)throw new a.a;this.isStopped=!0;for(var e=this.observers,t=e.length,n=e.slice(),r=0;r<t;r++)n[r].complete();this.observers.length=0},t.prototype.unsubscribe=function(){this.isStopped=!0,this.closed=!0,this.observers=null},t.prototype._trySubscribe=function(t){if(this.closed)throw new a.a;return e.prototype._trySubscribe.call(this,t)},t.prototype._subscribe=function(e){if(this.closed)throw new a.a;return this.hasError?(e.error(this.thrownError),s.a.EMPTY):this.isStopped?(e.complete(),s.a.EMPTY):(this.observers.push(e),new c.a(this,e))},t.prototype.asObservable=function(){var e=new o.a;return e.source=this,e},t.create=function(e,t){return new h(e,t)},t}(o.a),h=function(e){function t(t,n){var r=e.call(this)||this;return r.destination=t,r.source=n,r}return r.a(t,e),t.prototype.next=function(e){var t=this.destination;t&&t.next&&t.next(e)},t.prototype.error=function(e){var t=this.destination;t&&t.error&&this.destination.error(e)},t.prototype.complete=function(){var e=this.destination;e&&e.complete&&this.destination.complete()},t.prototype._subscribe=function(e){return this.source?this.source.subscribe(e):s.a.EMPTY},t}(d)},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return"function"==typeof Symbol&&Symbol.observable||"@@observable"}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var r=n(28),o=n(11),i=n(12),s=n(9),a=n(27),c=n(29),u=n(25),l=function(e){if(e&&"function"==typeof e[s.a])return l=e,function(e){var t=l[s.a]();if("function"!=typeof t.subscribe)throw new TypeError("Provided object does not correctly implement Symbol.observable");return t.subscribe(e)};if(Object(a.a)(e))return Object(r.a)(e);if(Object(c.a)(e))return n=e,function(e){return n.then((function(t){e.closed||(e.next(t),e.complete())}),(function(t){return e.error(t)})).then(null,o.a),e};if(e&&"function"==typeof e[i.a])return t=e,function(e){for(var n=t[i.a]();;){var r=void 0;try{r=n.next()}catch(t){return e.error(t),e}if(r.done){e.complete();break}if(e.next(r.value),e.closed)break}return"function"==typeof n.return&&e.add((function(){n.return&&n.return()})),e};var t,n,l,d=Object(u.a)(e)?"an invalid object":"'"+e+"'";throw new TypeError("You provided "+d+" where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.")}},function(e,t,n){"use strict";function r(e){setTimeout((function(){throw e}),0)}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}n.d(t,"a",(function(){return o}));var o=r()},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){function e(){return Error.call(this),this.message="object unsubscribed",this.name="ObjectUnsubscribedError",this}return e.prototype=Object.create(Error.prototype),e}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return"function"==typeof Symbol?Symbol("rxSubscriber"):"@@rxSubscriber_"+Math.random()}()},function(e,t,n){"use strict";function r(e){return"function"==typeof e}n.d(t,"a",(function(){return r}))},,,function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(){return Array.isArray||function(e){return e&&"number"==typeof e.length}}()},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(1),o=n(3);function i(e,t){return new r.a((function(n){var r=new o.a,i=0;return r.add(t.schedule((function(){i!==e.length?(n.next(e[i++]),n.closed||r.add(this.schedule())):n.complete()}))),r}))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),o=n(2);function i(e,t){return function(n){if("function"!=typeof e)throw new TypeError("argument is not a function. Are you looking for `mapTo()`?");return n.lift(new s(e,t))}}var s=function(){function e(e,t){this.project=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new a(e,this.project,this.thisArg))},e}(),a=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.project=n,o.count=0,o.thisArg=r||o,o}return r.a(t,e),t.prototype._next=function(e){var t;try{t=this.project.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(o.a)},function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(1),o=n(28),i=n(19);function s(e,t){return t?Object(i.a)(e,t):new r.a(Object(o.a)(e))}},function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return gi})),n.d(t,"b",(function(){return Us}));var r=n(8),o=n(3),i=n(1),s=n(37),a=n(38);
/**
 * @license Angular v11.2.14
 * (c) 2010-2021 Google LLC. https://angular.io/
 * License: MIT
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function c(e){for(let t in e)if(e[t]===c)return t;throw Error("Could not find renamed property on target object.")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function u(e){if("string"==typeof e)return e;if(Array.isArray(e))return"["+e.map(u).join(", ")+"]";if(null==e)return""+e;if(e.overriddenName)return""+e.overriddenName;if(e.name)return""+e.name;const t=e.toString();if(null==t)return""+t;const n=t.indexOf("\n");return-1===n?t:t.substring(0,n)}function l(e,t){return null==e||""===e?null===t?"":t:null==t||""===t?e:e+" "+t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const d=c({__forward_ref__:c});function h(e){return e.__forward_ref__=h,e.toString=function(){return u(this())},e}function f(e){return p(e)?e():e}function p(e){return"function"==typeof e&&e.hasOwnProperty(d)&&e.__forward_ref__===h}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class g extends Error{constructor(e,t){super(v(e,t)),this.code=e}}const m=new Set(["100","200","201","300","301","302"]);function v(e,t){let n=`${e?`NG0${e}: `:""}${t}`;return ngDevMode&&m.has(e)&&(n=`${n}. Find more at https://angular.io/errors/NG0${e}`),n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function y(e){return"string"==typeof e?e:null==e?"":String(e)}function b(e){return"function"==typeof e?e.name||e.toString():"object"==typeof e&&null!=e&&"function"==typeof e.type?e.type.name||e.type.toString():y(e)}function _(e,t){const n=t?`. Dependency path: ${t.join(" > ")} > ${e}`:"";throw new g("200",`Circular dependency in DI detected for ${e}${n}`)}function w(e,t){const n=t?" in "+t:"";throw new g("201",`No provider for ${b(e)} found${n}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function x(e,t){"number"!=typeof e&&j(t,typeof e,"number","===")}function A(e,t){"string"!=typeof e&&j(t,null===e?"null":typeof e,"string","===")}function C(e,t,n){e!=t&&j(n,e,t,"==")}function k(e,t,n){e==t&&j(n,e,t,"!=")}function E(e,t,n){e!==t&&j(n,e,t,"===")}function T(e,t,n){e===t&&j(n,e,t,"!==")}function D(e,t,n){e<t||j(n,e,t,"<")}function I(e,t,n){e>t||j(n,e,t,">")}function O(e,t,n){e>=t||j(n,e,t,">=")}function M(e,t){null==e&&j(t,e,null,"!=")}function j(e,t,n,r){throw new Error("ASSERTION ERROR: "+e+(null==r?"":` [Expected=> ${n} ${r} ${t} <=Actual]`))}function S(e){"undefined"!=typeof Node&&e instanceof Node||"object"==typeof e&&null!=e&&"WebWorkerRenderNode"===e.constructor.name||j("The provided value must be an instance of a DOM Node but got "+u(e))}function N(e,t){M(e,"Array must be defined.");const n=e.length;(t<0||t>=n)&&j(`Index expected to be less than ${n} but got ${t}`)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function P(e){return{token:e.token,providedIn:e.providedIn||null,factory:e.factory,value:void 0}}function R(e){return{providers:e.providers||[],imports:e.imports||[]}}function V(e){return F(e,H)||F(e,L)}function F(e,t){return e.hasOwnProperty(t)?e[t]:null}const H=c({"ɵprov":c}),L=(c({"ɵinj":c}),c({ngInjectableDef:c}));c({ngInjectorDef:c});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var $;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let B;function U(e){const t=B;return B=e,t}function Z(e,t,n){const r=V(e);return r&&"root"==r.providedIn?void 0===r.value?r.value=r.factory():r.value:n&$.Optional?null:void 0!==t?t:void w(u(e),"Injector")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function z(e){return{toString:e}.toString()}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var q,W,Q;!function(e){e[e.Default=0]="Default",e[e.Host=1]="Host",e[e.Self=2]="Self",e[e.SkipSelf=4]="SkipSelf",e[e.Optional=8]="Optional"}($||($={})),function(e){e[e.OnPush=0]="OnPush",e[e.Default=1]="Default"}(q||(q={})),function(e){e[e.CheckOnce=0]="CheckOnce",e[e.Checked=1]="Checked",e[e.CheckAlways=2]="CheckAlways",e[e.Detached=3]="Detached",e[e.Errored=4]="Errored",e[e.Destroyed=5]="Destroyed"}(W||(W={})),function(e){e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}(Q||(Q={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const K="undefined"!=typeof globalThis&&globalThis,G="undefined"!=typeof window&&window,Y="undefined"!=typeof self&&"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&self,J=K||void 0!==e&&e||G||Y;function X(){return!("undefined"!=typeof ngDevMode&&!ngDevMode)&&("object"!=typeof ngDevMode&&
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){const e="undefined"!=typeof location?location.toString():"",t={namedConstructors:-1!=e.indexOf("ngDevMode=namedConstructors"),firstCreatePass:0,tNode:0,tView:0,rendererCreateTextNode:0,rendererSetText:0,rendererCreateElement:0,rendererAddEventListener:0,rendererSetAttribute:0,rendererRemoveAttribute:0,rendererSetProperty:0,rendererSetClassName:0,rendererAddClass:0,rendererRemoveClass:0,rendererSetStyle:0,rendererRemoveStyle:0,rendererDestroy:0,rendererDestroyNode:0,rendererMoveNode:0,rendererRemoveNode:0,rendererAppendChild:0,rendererInsertBefore:0,rendererCreateComment:0},n=-1===e.indexOf("ngDevMode=false");J.ngDevMode=n&&t}(),"undefined"!=typeof ngDevMode&&!!ngDevMode)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ee={},te=[];("undefined"==typeof ngDevMode||ngDevMode)&&X()&&(Object.freeze(ee),Object.freeze(te))
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const ne=[];("undefined"==typeof ngDevMode||ngDevMode)&&X()&&Object.freeze(ne)
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const re=c({"ɵcmp":c}),oe=(c({"ɵdir":c}),c({"ɵpipe":c}),c({"ɵmod":c}),c({"ɵloc":c}),c({"ɵfac":c})),ie=c({__NG_ELEMENT_ID__:c});function se(e){return e[re]||null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ae=["Root","Component","Embedded"];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ce(e){return Array.isArray(e)&&"object"==typeof e[1]}function ue(e){return Array.isArray(e)&&!0===e[1]}function le(e){return 2==(2&e.flags)}function de(e){return null!==e.template}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function he(e,t){fe(e,t[1])}function fe(e,t){pe(e),e.hasOwnProperty("tView_")&&C(e.tView_,t,"This TNode does not belong to this TView.")}function pe(e){M(e,"TNode must be defined"),e&&"object"==typeof e&&e.hasOwnProperty("directiveStylingLast")||j("Not of type TNode, got: "+e)}function ge(e,t="Type passed in is not ComponentType, it does not have 'ɵcmp' property."){se(e)||j(t)}function me(e){M(e,"LContainer must be defined"),C(ue(e),!0,"Expecting LContainer")}function ve(e){e&&C(ce(e),!0,"Expecting LView or undefined or null")}function ye(e){M(e,"LView must be defined"),C(ce(e),!0,"Expecting LView")}function be(e,t){C(e.firstCreatePass,!0,t||"Should only be called in first create pass.")}function _e(e,t){C(e.firstUpdatePass,!0,t||"Should only be called in first update pass.")}function we(e,t){xe(e[1].expandoStartIndex,e.length,t)}function xe(e,t,n){e<=n&&n<t||j(`Index out of range (expecting ${e} <= ${n} < ${t})`)}function Ae(e,t){M(e,t||"Component views should always have a parent view (component's host view)")}function Ce(e,t){we(e,t),we(e,t+8),x(e[t+0],"injectorIndex should point to a bloom filter"),x(e[t+1],"injectorIndex should point to a bloom filter"),x(e[t+2],"injectorIndex should point to a bloom filter"),x(e[t+3],"injectorIndex should point to a bloom filter"),x(e[t+4],"injectorIndex should point to a bloom filter"),x(e[t+5],"injectorIndex should point to a bloom filter"),x(e[t+6],"injectorIndex should point to a bloom filter"),x(e[t+7],"injectorIndex should point to a bloom filter"),x(e[t+8],"injectorIndex should point to parent injector")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ke(e,t){const n=e.hasOwnProperty(oe);if(!n&&!0===t&&ngDevMode)throw new Error(`Type ${u(e)} does not have 'ɵfac' property.`);return n?e[oe]:null}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ee{constructor(e,t,n){this.previousValue=e,this.currentValue=t,this.firstChange=n}isFirstChange(){return this.firstChange}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Te(){return De}function De(e){return e.type.prototype.ngOnChanges&&(e.setInput=Oe),Ie}function Ie(){const e=Me(this),t=null==e?void 0:e.current;if(t){const n=e.previous;if(n===ee)e.previous=t;else for(let e in t)n[e]=t[e];e.current=null,this.ngOnChanges(t)}}function Oe(e,t,n,r){const o=Me(e)||function(e,t){return e.__ngSimpleChanges__=t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(e,{previous:ee,current:null}),i=o.current||(o.current={}),s=o.previous,a=this.declaredInputs[n],c=s[a];i[a]=new Ee(c&&c.currentValue,t,s===ee),e[r]=t}Te.ngInherit=!0;function Me(e){return e.__ngSimpleChanges__||null}let je=null;const Se=function(e,t,n){null!=je&&je(e,t,n)};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Ne=void 0;function Pe(){return void 0!==Ne?Ne:"undefined"!=typeof document?document:void 0}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Re;function Ve(e){return!!e.listen}!function(e){e[e.Important=1]="Important",e[e.DashCase=2]="DashCase"}(Re||(Re={}));const Fe={createRenderer:(e,t)=>Pe()};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function He(e){for(;Array.isArray(e);)e=e[0];return e}function Le(e,t){ngDevMode&&he(e,t),ngDevMode&&N(t,e.index);const n=He(t[e.index]);return ngDevMode&&!Ve(t[11])&&S(n),n}function $e(e,t){ngDevMode&&I(t,-1,"wrong index for TNode"),ngDevMode&&D(t,e.data.length,"wrong index for TNode");const n=e.data[t];return ngDevMode&&null!==n&&pe(n),n}function Be(e,t){ngDevMode&&N(t,e);const n=t[e];return ce(n)?n:n[0]}function Ue(e){return ngDevMode&&M(e,"Target expected"),e.__ngContext__||null}function Ze(e){const t=Ue(e);return t?Array.isArray(t)?t:t.lView:null}function ze(e){return 4==(4&e[2])}function qe(e){return 128==(128&e[2])}function We(e){e[18]=0}function Qe(e,t){e[5]+=t;let n=e,r=e[3];for(;null!==r&&(1===t&&1===n[5]||-1===t&&0===n[5]);)r[5]+=t,n=r,r=r[3]}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ke={lFrame:ft(null),bindingsEnabled:!0,isInCheckNoChangesMode:!1};function Ge(){return Ke.lFrame.lView}function Ye(){return Ke.lFrame.tView}function Je(){let e=Xe();for(;null!==e&&64===e.type;)e=e.parent;return e}function Xe(){return Ke.lFrame.currentTNode}function et(){const e=Ke.lFrame,t=e.currentTNode;return e.isParent?t:t.parent}function tt(e,t){ngDevMode&&e&&fe(e,Ke.lFrame.tView);const n=Ke.lFrame;n.currentTNode=e,n.isParent=t}function nt(){return Ke.lFrame.isParent}function rt(){return Ke.isInCheckNoChangesMode}function ot(e){Ke.isInCheckNoChangesMode=e}function it(e){return Ke.lFrame.bindingIndex=e}function st(e,t){const n=Ke.lFrame;n.bindingIndex=n.bindingRootIndex=e,at(t)}function at(e){Ke.lFrame.currentDirectiveIndex=e}function ct(e){Ke.lFrame.currentQueryIndex=e}function ut(e){const t=e[1];return 2===t.type?(ngDevMode&&M(t.declTNode,"Embedded TNodes should have declaration parents."),t.declTNode):1===t.type?e[6]:null}function lt(e,t,n){if(ngDevMode&&ve(e),n&$.SkipSelf){ngDevMode&&fe(t,e[1]);let r=t,o=e;for(;!(ngDevMode&&M(r,"Parent TNode should be defined"),r=r.parent,null!==r||n&$.Host||(r=ut(o),null===r)||(ngDevMode&&M(o,"Parent LView should be defined"),o=o[15],10&r.type)););if(null===r)return!1;t=r,e=o}ngDevMode&&he(t,e);const r=Ke.lFrame=ht();return r.currentTNode=t,r.lView=e,!0}function dt(e){ngDevMode&&k(e[0],e[1],"????"),ngDevMode&&ve(e);const t=ht();ngDevMode&&(C(t.isParent,!0,"Expected clean LFrame"),C(t.lView,null,"Expected clean LFrame"),C(t.tView,null,"Expected clean LFrame"),C(t.selectedIndex,-1,"Expected clean LFrame"),C(t.elementDepthCount,0,"Expected clean LFrame"),C(t.currentDirectiveIndex,-1,"Expected clean LFrame"),C(t.currentNamespace,null,"Expected clean LFrame"),C(t.bindingRootIndex,-1,"Expected clean LFrame"),C(t.currentQueryIndex,0,"Expected clean LFrame"));const n=e[1];Ke.lFrame=t,ngDevMode&&n.firstChild&&fe(n.firstChild,n),t.currentTNode=n.firstChild,t.lView=e,t.tView=n,t.contextLView=e,t.bindingIndex=n.bindingStartIndex,t.inI18n=!1}function ht(){const e=Ke.lFrame,t=null===e?null:e.child;return null===t?ft(e):t}function ft(e){const t={currentTNode:null,isParent:!0,lView:null,tView:null,selectedIndex:-1,contextLView:null,elementDepthCount:0,currentNamespace:null,currentDirectiveIndex:-1,bindingRootIndex:-1,bindingIndex:-1,currentQueryIndex:0,parent:e,child:null,inI18n:!1};return null!==e&&(e.child=t),t}function pt(){const e=Ke.lFrame;return Ke.lFrame=e.parent,e.currentTNode=null,e.lView=null,e}const gt=pt;function mt(){const e=pt();e.isParent=!0,e.tView=null,e.selectedIndex=-1,e.contextLView=null,e.elementDepthCount=0,e.currentDirectiveIndex=-1,e.currentNamespace=null,e.bindingRootIndex=-1,e.bindingIndex=-1,e.currentQueryIndex=0}function vt(){return Ke.lFrame.selectedIndex}function yt(e){ngDevMode&&-1!==e&&O(e,20,"Index must be past HEADER_OFFSET (or -1)."),ngDevMode&&D(e,Ke.lFrame.lView.length,"Can't set index passed end of LView"),Ke.lFrame.selectedIndex=e}function bt(e,t){ngDevMode&&be(e);for(let n=t.directiveStart,r=t.directiveEnd;n<r;n++){const t=e.data[n];ngDevMode&&M(t,"Expecting DirectiveDef");const r=t.type.prototype,{ngAfterContentInit:o,ngAfterContentChecked:i,ngAfterViewInit:s,ngAfterViewChecked:a,ngOnDestroy:c}=r;o&&(e.contentHooks||(e.contentHooks=[])).push(-n,o),i&&((e.contentHooks||(e.contentHooks=[])).push(n,i),(e.contentCheckHooks||(e.contentCheckHooks=[])).push(n,i)),s&&(e.viewHooks||(e.viewHooks=[])).push(-n,s),a&&((e.viewHooks||(e.viewHooks=[])).push(n,a),(e.viewCheckHooks||(e.viewCheckHooks=[])).push(n,a)),null!=c&&(e.destroyHooks||(e.destroyHooks=[])).push(n,c)}}function _t(e,t,n){At(e,t,3,n)}function wt(e,t,n,r){ngDevMode&&k(n,3,"Init pre-order hooks should not be called more than once"),(3&e[2])===n&&At(e,t,n,r)}function xt(e,t){ngDevMode&&k(t,3,"Init hooks phase should not be incremented after all init hooks have been run.");let n=e[2];(3&n)===t&&(n&=2047,n+=1,e[2]=n)}function At(e,t,n,r){ngDevMode&&C(rt(),!1,"Hooks should never be run when in check no changes mode.");const o=void 0!==r?65535&e[18]:0,i=null!=r?r:-1,s=t.length-1;let a=0;for(let c=o;c<s;c++){if("number"==typeof t[c+1]){if(a=t[c],null!=r&&a>=r)break}else{t[c]<0&&(e[18]+=65536),(a<i||-1==i)&&(Ct(e,n,t,c),e[18]=(4294901760&e[18])+c+2),c++}}}function Ct(e,t,n,r){const o=n[r]<0,i=n[r+1],s=e[o?-n[r]:n[r]];if(o){if(e[2]>>11<e[18]>>16&&(3&e[2])===t){e[2]+=2048,Se(4,s,i);try{i.call(s)}finally{Se(5,s,i)}}}else{Se(4,s,i);try{i.call(s)}finally{Se(5,s,i)}}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class kt{constructor(e,t,n){this.factory=e,this.resolving=!1,ngDevMode&&M(e,"Factory not specified"),ngDevMode&&C(typeof e,"function","Expected factory function."),this.canSeeViewProviders=t,this.injectImpl=n}}function Et(e){let t="";return 1&e&&(t+="|Text"),2&e&&(t+="|Element"),4&e&&(t+="|Container"),8&e&&(t+="|ElementContainer"),16&e&&(t+="|Projection"),32&e&&(t+="|IcuContainer"),64&e&&(t+="|Placeholder"),t.length>0?t.substring(1):t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Tt(e,t,n){M(e,"should be called with a TNode"),0==(e.type&t)&&j(n||`Expected [${Et(t)}] but got ${Et(e.type)}.`)}function Dt(e,t,n){const r=Ve(e);let o=0;for(;o<n.length;){const i=n[o];if("number"==typeof i){if(0!==i)break;o++;const s=n[o++],a=n[o++],c=n[o++];ngDevMode&&ngDevMode.rendererSetAttribute++,r?e.setAttribute(t,a,c,s):t.setAttributeNS(s,a,c)}else{const s=i,a=n[++o];ngDevMode&&ngDevMode.rendererSetAttribute++,It(s)?r&&e.setProperty(t,s,a):r?e.setAttribute(t,s,a):t.setAttribute(s,a),o++}}return o}function It(e){return 64===e.charCodeAt(0)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ot(e){return-1!==e}function Mt(e){ngDevMode&&x(e,"Number expected"),ngDevMode&&k(e,-1,"Not a valid state.");return ngDevMode&&I(32767&e,20,"Parent injector must be pointing past HEADER_OFFSET."),32767&e}function jt(e,t){let n=e>>16;let r=t;for(;n>0;)r=r[15],n--;return r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */let St=!0;function Nt(e){const t=St;return St=e,t}let Pt=0;function Rt(e,t){const n=Ft(e,t);if(-1!==n)return n;const r=t[1];r.firstCreatePass&&(e.injectorIndex=t.length,Vt(r.data,e),Vt(t,null),Vt(r.blueprint,null));const o=Ht(e,t),i=e.injectorIndex;if(Ot(o)){const e=Mt(o),n=jt(o,t),r=n[1].data;for(let o=0;o<8;o++)t[i+o]=n[e+o]|r[e+o]}return t[i+8]=o,i}function Vt(e,t){e.push(0,0,0,0,0,0,0,0,t)}function Ft(e,t){return-1===e.injectorIndex||e.parent&&e.parent.injectorIndex===e.injectorIndex||null===t[e.injectorIndex+8]?-1:(ngDevMode&&N(t,e.injectorIndex),e.injectorIndex)}function Ht(e,t){if(e.parent&&-1!==e.parent.injectorIndex)return e.parent.injectorIndex;let n=0,r=null,o=t;for(;null!==o;){const e=o[1],t=e.type;if(2===t?(ngDevMode&&M(e.declTNode,"Embedded TNodes should have declaration parents."),r=e.declTNode):1===t?r=o[6]:(ngDevMode&&C(e.type,0,"Root type expected"),r=null),null===r)return-1;if(ngDevMode&&r&&he(r,o[15]),n++,o=o[15],-1!==r.injectorIndex)return r.injectorIndex|n<<16}return-1}function Lt(e,t,n){!function(e,t,n){let r;ngDevMode&&C(t.firstCreatePass,!0,"expected firstCreatePass to be true"),"string"==typeof n?r=n.charCodeAt(0)||0:n.hasOwnProperty(ie)&&(r=n[ie]),null==r&&(r=n[ie]=Pt++);const o=255&r,i=1<<o;t.data[e+(o>>5)]|=i}(e,t,n)}function $t(e,t,n){if(n&$.Optional)return e;w(t,"NodeInjector")}function Bt(e,t,n,r){if(n&$.Optional&&void 0===r&&(r=null),0==(n&($.Self|$.Host))){const o=e[9],i=U(void 0);try{return o?o.get(t,r,n&$.Optional):Z(t,r,n&$.Optional)}finally{U(i)}}return $t(r,t,n)}function Ut(e,t,n,r=$.Default,o){if(null!==e){const i=function(e){if(ngDevMode&&M(e,"token must be defined"),"string"==typeof e)return e.charCodeAt(0)||0;const t=e.hasOwnProperty(ie)?e[ie]:void 0;return"number"==typeof t?t>=0?255&t:(ngDevMode&&C(t,-1,"Expecting to get Special Injector Id"),zt):t}(n);if("function"==typeof i){if(!lt(t,e,r))return r&$.Host?$t(o,n,r):Bt(t,n,r,o);try{const e=i();if(null!=e||r&$.Optional)return e;w(n)}finally{gt()}}else if("number"==typeof i){let o=null,s=Ft(e,t),a=-1,c=r&$.Host?t[16][6]:null;for((-1===s||r&$.SkipSelf)&&(a=-1===s?Ht(e,t):t[s+8],-1!==a&&Gt(r,!1)?(o=t[1],s=Mt(a),t=jt(a,t)):s=-1);-1!==s;){ngDevMode&&Ce(t,s);const e=t[1];if(ngDevMode&&he(e.data[s+8],t),Kt(i,s,e.data)){const e=qt(s,t,n,o,r,c);if(e!==Zt)return e}a=t[s+8],-1!==a&&Gt(r,t[1].data[s+8]===c)&&Kt(i,s,t)?(o=e,s=Mt(a),t=jt(a,t)):s=-1}}}return Bt(t,n,r,o)}const Zt={};function zt(){return new Yt(Je(),Ge())}function qt(e,t,n,r,o,i){const s=t[1],a=s.data[e+8],c=Wt(a,s,n,null==r?le(a)&&St:r!=s&&0!=(3&a.type),o&$.Host&&i===a);return null!==c?Qt(t,s,c,a):Zt}function Wt(e,t,n,r,o){const i=e.providerIndexes,s=t.data,a=1048575&i,c=e.directiveStart,u=e.directiveEnd,l=i>>20,d=o?a+l:u;for(let e=r?a:a+l;e<d;e++){const t=s[e];if(e<c&&n===t||e>=c&&t.type===n)return e}if(o){const e=s[c];if(e&&de(e)&&e.type===n)return c}return null}function Qt(e,t,n,r){let o=e[n];const i=t.data;if(o instanceof kt){const s=o;s.resolving&&_(b(i[n]));const a=Nt(s.canSeeViewProviders);s.resolving=!0;const c=s.injectImpl?U(s.injectImpl):null,u=lt(e,r,$.Default);ngDevMode&&C(u,!0,"Because flags do not contain `SkipSelf' we expect this to always succeed.");try{o=e[n]=s.factory(void 0,i,e,r),t.firstCreatePass&&n>=r.directiveStart&&(ngDevMode&&function(e){void 0!==e.type&&null!=e.selectors&&void 0!==e.inputs||j("Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.")}(i[n]),
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e,t,n){ngDevMode&&be(n);const{ngOnChanges:r,ngOnInit:o,ngDoCheck:i}=t.type.prototype;if(r){const r=De(t);(n.preOrderHooks||(n.preOrderHooks=[])).push(e,r),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,r)}o&&(n.preOrderHooks||(n.preOrderHooks=[])).push(0-e,o),i&&((n.preOrderHooks||(n.preOrderHooks=[])).push(e,i),(n.preOrderCheckHooks||(n.preOrderCheckHooks=[])).push(e,i))}(n,i[n],t))}finally{null!==c&&U(c),Nt(a),s.resolving=!1,gt()}}return o}function Kt(e,t,n){const r=1<<e;return!!(n[t+(e>>5)]&r)}function Gt(e,t){return!(e&$.Self||e&$.Host&&t)}class Yt{constructor(e,t){this._tNode=e,this._lView=t}get(e,t){return Ut(this._tNode,this._lView,e,void 0,t)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Jt="__annotations__",Xt="__parameters__",en="__prop__metadata__";function tn(e,t,n,r,o){return z(()=>{const i=nn(t);function s(...e){if(this instanceof s)return i.call(this,...e),this;const t=new s(...e);return function(n){o&&o(n,...e);return(n.hasOwnProperty(Jt)?n[Jt]:Object.defineProperty(n,Jt,{value:[]})[Jt]).push(t),r&&r(n),n}}return n&&(s.prototype=Object.create(n.prototype)),s.prototype.ngMetadataName=e,s.annotationCls=s,s})}function nn(e){return function(...t){if(e){const n=e(...t);for(const e in n)this[e]=n[e]}}}function rn(e,t,n){return z(()=>{const r=nn(t);function o(...e){if(this instanceof o)return r.apply(this,e),this;const t=new o(...e);return n.annotation=t,n;function n(e,n,r){const o=e.hasOwnProperty(Xt)?e[Xt]:Object.defineProperty(e,Xt,{value:[]})[Xt];for(;o.length<=r;)o.push(null);return(o[r]=o[r]||[]).push(t),e}}return n&&(o.prototype=Object.create(n.prototype)),o.prototype.ngMetadataName=e,o.annotationCls=o,o})}function on(e,t,n,r){return z(()=>{const o=nn(t);function i(...e){if(this instanceof i)return o.apply(this,e),this;const t=new i(...e);return function(n,o){const i=n.constructor,s=i.hasOwnProperty(en)?i[en]:Object.defineProperty(i,en,{value:{}})[en];s[o]=s.hasOwnProperty(o)&&s[o]||[],s[o].unshift(t),r&&r(n,o,...e)}}return n&&(i.prototype=Object.create(n.prototype)),i.prototype.ngMetadataName=e,i.annotationCls=i,i})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */rn("Attribute",e=>({attributeName:e}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class sn{constructor(e,t){this._desc=e,this.ngMetadataName="InjectionToken",this.ɵprov=void 0,"number"==typeof t?(("undefined"==typeof ngDevMode||ngDevMode)&&D(t,0,"Only negative numbers are supported here"),this.__NG_ELEMENT_ID__=t):void 0!==t&&(this.ɵprov=P({token:this,providedIn:t.providedIn||"root",factory:t.factory}))}toString(){return"InjectionToken "+this._desc}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */new sn("AnalyzeForEntryComponents");class an{}on("ContentChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!1,descendants:!1,emitDistinctChangesOnly:!1},t),an),on("ContentChild",(e,t={})=>Object.assign({selector:e,first:!0,isViewQuery:!1,descendants:!0},t),an),on("ViewChildren",(e,t={})=>Object.assign({selector:e,first:!1,isViewQuery:!0,descendants:!0,emitDistinctChangesOnly:!1},t),an),on("ViewChild",(e,t)=>Object.assign({selector:e,first:!0,isViewQuery:!0,descendants:!0},t),an);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var cn,un,ln;!function(e){e[e.Token=0]="Token",e[e.Attribute=1]="Attribute",e[e.ChangeDetectorRef=2]="ChangeDetectorRef",e[e.Invalid=3]="Invalid"}(cn||(cn={})),function(e){e[e.Directive=0]="Directive",e[e.Component=1]="Component",e[e.Injectable=2]="Injectable",e[e.Pipe=3]="Pipe",e[e.NgModule=4]="NgModule"}(un||(un={})),function(e){e[e.Emulated=0]="Emulated",e[e.None=2]="None",e[e.ShadowDom=3]="ShadowDom"}(ln||(ln={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const dn=Function;function hn(e){return"function"==typeof e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function fn(e,t){return t>=e.length-1?e.pop():e.splice(t,1)[0]}function pn(e,t){const n=[];for(let r=0;r<e;r++)n.push(t);return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const gn=/^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|[^()]+\(arguments\))\)/,mn=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/,vn=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/,yn=/^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{\s*super\(\.\.\.arguments\)/;class bn{constructor(e){this._reflect=e||J.Reflect}isReflectionEnabled(){return!0}factory(e){return(...t)=>new e(...t)}_zipTypesAndAnnotations(e,t){let n;n=pn(void 0===e?t.length:e.length);for(let r=0;r<n.length;r++)void 0===e?n[r]=[]:e[r]&&e[r]!=Object?n[r]=[e[r]]:n[r]=[],t&&null!=t[r]&&(n[r]=n[r].concat(t[r]));return n}_ownParameters(e,t){if(function(e){return gn.test(e)||yn.test(e)||mn.test(e)&&!vn.test(e)}(e.toString()))return null;if(e.parameters&&e.parameters!==t.parameters)return e.parameters;const n=e.ctorParameters;if(n&&n!==t.ctorParameters){const e="function"==typeof n?n():n,t=e.map(e=>e&&e.type),r=e.map(e=>e&&_n(e.decorators));return this._zipTypesAndAnnotations(t,r)}const r=e.hasOwnProperty(Xt)&&e[Xt],o=this._reflect&&this._reflect.getOwnMetadata&&this._reflect.getOwnMetadata("design:paramtypes",e);return o||r?this._zipTypesAndAnnotations(o,r):pn(e.length)}parameters(e){if(!hn(e))return[];const t=wn(e);let n=this._ownParameters(e,t);return n||t===Object||(n=this.parameters(t)),n||[]}_ownAnnotations(e,t){if(e.annotations&&e.annotations!==t.annotations){let t=e.annotations;return"function"==typeof t&&t.annotations&&(t=t.annotations),t}return e.decorators&&e.decorators!==t.decorators?_n(e.decorators):e.hasOwnProperty(Jt)?e[Jt]:null}annotations(e){if(!hn(e))return[];const t=wn(e),n=this._ownAnnotations(e,t)||[];return(t!==Object?this.annotations(t):[]).concat(n)}_ownPropMetadata(e,t){if(e.propMetadata&&e.propMetadata!==t.propMetadata){let t=e.propMetadata;return"function"==typeof t&&t.propMetadata&&(t=t.propMetadata),t}if(e.propDecorators&&e.propDecorators!==t.propDecorators){const t=e.propDecorators,n={};return Object.keys(t).forEach(e=>{n[e]=_n(t[e])}),n}return e.hasOwnProperty(en)?e[en]:null}propMetadata(e){if(!hn(e))return{};const t=wn(e),n={};if(t!==Object){const e=this.propMetadata(t);Object.keys(e).forEach(t=>{n[t]=e[t]})}const r=this._ownPropMetadata(e,t);return r&&Object.keys(r).forEach(e=>{const t=[];n.hasOwnProperty(e)&&t.push(...n[e]),t.push(...r[e]),n[e]=t}),n}ownPropMetadata(e){return hn(e)&&this._ownPropMetadata(e,wn(e))||{}}hasLifecycleHook(e,t){return e instanceof dn&&t in e.prototype}guards(e){return{}}getter(e){return new Function("o","return o."+e+";")}setter(e){return new Function("o","v","return o."+e+" = v;")}method(e){return new Function("o","args",`if (!o.${e}) throw new Error('"${e}" is undefined');\n        return o.${e}.apply(o, args);`)}importUri(e){return"object"==typeof e&&e.filePath?e.filePath:"./"+u(e)}resourceUri(e){return"./"+u(e)}resolveIdentifier(e,t,n,r){return r}resolveEnum(e,t){return e[t]}}function _n(e){return e?e.map(e=>new(0,e.type.annotationCls)(...e.args?e.args:[])):[]}function wn(e){const t=e.prototype?Object.getPrototypeOf(e.prototype):null;return(t?t.constructor:null)||Object}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const xn={},An=/\n/gm,Cn=c({provide:String,useValue:c});let kn=void 0;function En(e){const t=kn;return kn=e,t}function Tn(e,t=$.Default){if(void 0===kn)throw new Error("inject() must be called from an injection context");return null===kn?Z(e,void 0,t):kn.get(e,t&$.Optional?null:void 0,t)}function Dn(e,t=$.Default){return(B||Tn)(f(e),t)}function In(e){const t=[];for(let n=0;n<e.length;n++){const r=f(e[n]);if(Array.isArray(r)){if(0===r.length)throw new Error("Arguments array must have arguments.");let e=void 0,n=$.Default;for(let t=0;t<r.length;t++){const o=r[t],i=o.__NG_DI_FLAG__;"number"==typeof i?-1===i?e=o.token:n|=i:e=o}t.push(Dn(e,n))}else t.push(Dn(r))}return t}function On(e,t){return e.__NG_DI_FLAG__=t,e.prototype.__NG_DI_FLAG__=t,e}function Mn(e,t,n,r){const o=e.ngTempTokenPath;throw t.__source&&o.unshift(t.__source),e.message=jn("\n"+e.message,o,n,r),e.ngTokenPath=o,e.ngTempTokenPath=null,e}function jn(e,t,n,r=null){e=e&&"\n"===e.charAt(0)&&"ɵ"==e.charAt(1)?e.substr(2):e;let o=u(t);if(Array.isArray(t))o=t.map(u).join(" -> ");else if("object"==typeof t){let e=[];for(let n in t)if(t.hasOwnProperty(n)){let r=t[n];e.push(n+":"+("string"==typeof r?JSON.stringify(r):u(r)))}o=`{${e.join(", ")}}`}return`${n}${r?"("+r+")":""}[${o}]: ${e.replace(An,"\n  ")}`}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Sn=On(rn("Inject",e=>({token:e})),-1),Nn=On(rn("Optional"),8),Pn=On(rn("Self"),2),Rn=On(rn("SkipSelf"),4);On(rn("Host"),1);new Map;new Set;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let Vn;function Fn(){if(void 0===Vn&&(Vn=null,J.trustedTypes))try{Vn=J.trustedTypes.createPolicy("angular",{createHTML:e=>e,createScript:e=>e,createScriptURL:e=>e})}catch(e){}return Vn}function Hn(...e){if("undefined"==typeof ngDevMode)throw new Error("newTrustedFunctionForDev should never be called in production");if(!J.trustedTypes)return new Function(...e);const t=`(function anonymous(${e.slice(0,-1).join(",")}\n) { ${e[e.length-1]}\n})`,n=J.eval((r=t,(null===(o=Fn())||void 0===o?void 0:o.createScript(r))||r));var r,o;return void 0===n.bind?new Function(...e):(n.toString=()=>t,n.bind(J))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Ln(e){const t={};for(const n of e.split(","))t[n]=!0;return t}function $n(...e){const t={};for(const n of e)for(const e in n)n.hasOwnProperty(e)&&(t[e]=!0);return t}const Bn=Ln("area,br,col,hr,img,wbr"),Un=Ln("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),Zn=Ln("rp,rt"),zn=$n(Zn,Un),qn=$n(Un,Ln("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")),Wn=$n(Zn,Ln("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")),Qn=($n(Bn,qn,Wn,zn),Ln("background,cite,href,itemtype,longdesc,poster,src,xlink:href")),Kn=Ln("srcset"),Gn=Ln("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"),Yn=Ln("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext");$n(Qn,Kn,Gn,Yn),Ln("script,style,template");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var Jn;!function(e){e[e.NONE=0]="NONE",e[e.HTML=1]="HTML",e[e.STYLE=2]="STYLE",e[e.SCRIPT=3]="SCRIPT",e[e.URL=4]="URL",e[e.RESOURCE_URL=5]="RESOURCE_URL"}(Jn||(Jn={}));function Xn(e){return e.ngDebugContext}function er(e){return e.ngOriginalError}function tr(e,...t){e.error(...t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class nr{constructor(){this._console=console}handleError(e){const t=this._findOriginalError(e),n=this._findContext(e),r=function(e){return e.ngErrorLogger||tr}(e);r(this._console,"ERROR",e),t&&r(this._console,"ORIGINAL ERROR",t),n&&r(this._console,"ERROR CONTEXT",n)}_findContext(e){return e?Xn(e)?Xn(e):this._findContext(er(e)):null}_findOriginalError(e){let t=er(e);for(;t&&er(t);)t=er(t);return t}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function rr(e){if(!ngDevMode)throw new Error("Looks like we are in 'prod mode', but we are creating a named Array type, which is wrong! Check your code");try{return Hn("Array",`return class ${e} extends Array{}`)(Array)}catch(e){return Array}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function or(e,t){e.__ngContext__=t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const ir=("undefined"!=typeof requestAnimationFrame&&requestAnimationFrame||setTimeout).bind(J);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
var sr;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let ar;function cr(e,t){return ar(e,t)}!function(e){e[e.Important=1]="Important",e[e.DashCase=2]="DashCase"}(sr||(sr={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function ur(e){ngDevMode&&ye(e);const t=e[3];return ue(t)?t[3]:t}function lr(e){return hr(e[13])}function dr(e){return hr(e[4])}function hr(e){for(;null!==e&&!ue(e);)e=e[4];return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function fr(e,t,n,r,o){if(null!=r){let i,s=!1;ue(r)?i=r:ce(r)&&(s=!0,ngDevMode&&M(r[0],"HOST must be defined for a component LView"),r=r[0]);const a=He(r);ngDevMode&&!Ve(t)&&S(a),0===e&&null!==n?null==o?_r(t,n,a):br(t,n,a,o||null,!0):1===e&&null!==n?br(t,n,a,o||null,!0):2===e?Ar(t,a,s):3===e&&(ngDevMode&&ngDevMode.rendererDestroyNode++,t.destroyNode(a)),null!=i&&function(e,t,n,r,o){ngDevMode&&me(n);const i=n[7],s=He(n);i!==s&&fr(t,e,r,i,o);for(let o=10;o<n.length;o++){const s=n[o];kr(s[1],s,e,t,r,i)}}(t,e,i,n,o)}}function pr(e,t,n){return ngDevMode&&ngDevMode.rendererCreateElement++,Ve(e)?e.createElement(t,n):null===n?e.createElement(t):e.createElementNS(n,t)}function gr(e,t){ngDevMode&&me(e),ngDevMode&&M(e[9],"A projected view should belong to a non-empty projected views collection");const n=e[9],r=n.indexOf(t),o=t[3];ngDevMode&&me(o),1024&t[2]&&(t[2]&=-1025,Qe(o,-1)),n.splice(r,1)}function mr(e,t){if(e.length<=10)return;const n=10+t,r=e[n];if(r){const i=r[17];null!==i&&i!==e&&gr(i,r),t>0&&(e[n-1][4]=r[4]);const s=fn(e,10+t);kr(r[1],o=r,o[11],2,null,null),o[0]=null,o[6]=null;const a=s[19];null!==a&&a.detachView(s[1]),r[3]=null,r[4]=null,r[2]&=-129}var o;return r}function vr(e,t){if(!(256&t[2])){const n=t[11];Ve(n)&&n.destroyNode&&kr(e,t,n,3,null,null),function(e){let t=e[13];if(!t)return yr(e[1],e);for(;t;){let n=null;if(ce(t))n=t[13];else{ngDevMode&&me(t);const e=t[10];e&&(n=e)}if(!n){for(;t&&!t[4]&&t!==e;)ce(t)&&yr(t[1],t),t=t[3];null===t&&(t=e),ce(t)&&yr(t[1],t),n=t&&t[4]}t=n}}(t)}}function yr(e,t){if(!(256&t[2])){t[2]&=-129,t[2]|=256,function(e,t){let n;if(null!=e&&null!=(n=e.destroyHooks))for(let e=0;e<n.length;e+=2){const r=t[n[e]];if(!(r instanceof kt)){const t=n[e+1];if(Array.isArray(t))for(let e=0;e<t.length;e+=2){const n=r[t[e]],o=t[e+1];Se(4,n,o);try{o.call(n)}finally{Se(5,n,o)}}else{Se(4,r,t);try{t.call(r)}finally{Se(5,r,t)}}}}}(e,t),function(e,t){const n=e.cleanup,r=t[7];let o=-1;if(null!==n)for(let e=0;e<n.length-1;e+=2)if("string"==typeof n[e]){const i=n[e+1],s="function"==typeof i?i(t):He(t[i]),a=r[o=n[e+2]],c=n[e+3];"boolean"==typeof c?s.removeEventListener(n[e],a,c):c>=0?r[o=c]():r[o=-c].unsubscribe(),e+=2}else{const t=r[o=n[e+1]];n[e].call(t)}if(null!==r){for(let e=o+1;e<r.length;e++){const t=r[e];ngDevMode&&(s="Expecting instance cleanup function.","function"!=typeof(i=t)&&j(s,null===i?"null":typeof i,"function","===")),t()}t[7]=null}var i,s}(e,t),1===t[1].type&&Ve(t[11])&&(ngDevMode&&ngDevMode.rendererDestroy++,t[11].destroy());const n=t[17];if(null!==n&&ue(t[3])){n!==t[3]&&gr(n,t);const r=t[19];null!==r&&r.detachView(e)}}}function br(e,t,n,r,o){ngDevMode&&ngDevMode.rendererInsertBefore++,Ve(e)?e.insertBefore(t,n,r,o):t.insertBefore(n,r,o)}function _r(e,t,n){ngDevMode&&ngDevMode.rendererAppendChild++,ngDevMode&&M(t,"parent node must be defined"),Ve(e)?e.appendChild(t,n):t.appendChild(n)}function wr(e,t){return Ve(e)?e.parentNode(t):t.parentNode}function xr(e,t){if(null!==t){const n=e[16][6],r=t.projection;return ngDevMode&&function(e,t){M(e[16],"Component views should exist."),M(e[16][6].projection,t||"Components with projection nodes (<ng-content>) must have projection slots defined.")}(e),n.projection[r]}return null}function Ar(e,t,n){ngDevMode&&ngDevMode.rendererRemoveNode++;const r=wr(e,t);r&&function(e,t,n,r){Ve(e)?e.removeChild(t,n,r):t.removeChild(n)}(e,r,t,n)}function Cr(e,t,n,r,o,i,s){for(;null!=n;){ngDevMode&&he(n,r),ngDevMode&&Tt(n,63);const a=r[n.index],c=n.type;if(s&&0===t&&(a&&or(He(a),r),n.flags|=4),64!=(64&n.flags))if(8&c)Cr(e,t,n.child,r,o,i,!1),fr(t,e,o,a,i);else if(32&c){const s=cr(n,r);let c;for(;c=s();)fr(t,e,o,c,i);fr(t,e,o,a,i)}else 16&c?Er(e,t,r,n,o,i):(ngDevMode&&Tt(n,7),fr(t,e,o,a,i));n=s?n.projectionNext:n.next}}function kr(e,t,n,r,o,i){Cr(n,r,e.firstChild,t,o,i,!1)}function Er(e,t,n,r,o,i){const s=n[16],a=s[6];ngDevMode&&C(typeof r.projection,"number","expecting projection index");const c=a.projection[r.projection];if(Array.isArray(c))for(let n=0;n<c.length;n++){fr(t,e,o,c[n],i)}else{Cr(e,t,c,s[3],o,i,!0)}}function Tr(e,t,n){ngDevMode&&A(n,"'newValue' should be a string"),Ve(e)?e.setAttribute(t,"style",n):t.style.cssText=n,ngDevMode&&ngDevMode.rendererSetStyle++}function Dr(e,t,n){ngDevMode&&A(n,"'newValue' should be a string"),Ve(e)?""===n?e.removeAttribute(t,"class"):e.setAttribute(t,"class",n):t.className=n,ngDevMode&&ngDevMode.rendererSetClassName++}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ir(e){return 0==(1&e)}function Or(e,t){return e?":not("+t.trim()+")":t}function Mr(e){let t=e[0],n=1,r=2,o="",i=!1;for(;n<e.length;){let s=e[n];if("string"==typeof s)if(2&r){const t=e[++n];o+="["+s+(t.length>0?'="'+t+'"':"")+"]"}else 8&r?o+="."+s:4&r&&(o+=" "+s);else""===o||Ir(s)||(t+=Or(i,o),o=""),r=s,i=i||!Ir(r);n++}return""!==o&&(t+=Or(i,o)),t}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const jr="undefined"==typeof ngDevMode||ngDevMode?{__brand__:"NO_CHANGE"}:{};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Sr(e,t,n,r){if(ngDevMode&&function(e,t){xe(20,e[1].bindingStartIndex,t)}(t,n),!r){if(3==(3&t[2])){const r=e.preOrderCheckHooks;null!==r&&_t(t,r,n)}else{const r=e.preOrderHooks;null!==r&&wt(t,r,0,n)}}yt(n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Nr(e){return ngDevMode&&x(e,"expected number"),e>>17&32767}function Pr(e){return ngDevMode&&x(e,"expected number"),2==(2&e)}function Rr(e){return ngDevMode&&x(e,"expected number"),(131068&e)>>2}function Vr(e){return ngDevMode&&x(e,"expected number"),1==(1&e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Fr(e,t){if(!ngDevMode)throw new Error("This method should be guarded with `ngDevMode` so that it can be tree shaken in production!");Object.defineProperty(e,"debug",{value:t,enumerable:!1})}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Hr=("undefined"==typeof ngDevMode||!!ngDevMode)&&X();let Lr,$r,Br;function Ur(e){return function(e,t){switch(e){case 0:return void 0===Br&&(Br=new(rr("LRootView"))),Br;case 1:void 0===Lr&&(Lr=new Map);let e=Lr.get(t);return void 0===e&&(e=new(rr("LComponentView"+Zr(t))),Lr.set(t,e)),e;case 2:void 0===$r&&($r=new Map);let n=$r.get(t);return void 0===n&&(n=new(rr("LEmbeddedView"+Zr(t))),$r.set(t,n)),n}}(e.type,e.template&&e.template.name).concat(e.blueprint)}function Zr(e){if(null==e)return"";const t=e.lastIndexOf("_Template");return"_"+(-1===t?e:e.substr(0,t))}const zr=class{constructor(e,t,n,r,o,i,s,a,c,u,l,d,h,f,p,g,m,v,y,b,_,w,x,A,C,k,E,T,D,I,O,M){this.tView_=e,this.type=t,this.index=n,this.insertBeforeIndex=r,this.injectorIndex=o,this.directiveStart=i,this.directiveEnd=s,this.directiveStylingLast=a,this.propertyBindings=c,this.flags=u,this.providerIndexes=l,this.value=d,this.attrs=h,this.mergedAttrs=f,this.localNames=p,this.initialInputs=g,this.inputs=m,this.outputs=v,this.tViews=y,this.next=b,this.projectionNext=_,this.child=w,this.parent=x,this.projection=A,this.styles=C,this.stylesWithoutHost=k,this.residualStyles=E,this.classes=T,this.classesWithoutHost=D,this.residualClasses=I,this.classBindings=O,this.styleBindings=M}debugNodeInjectorPath(e){const t=[];let n=Ft(this,e);if(-1===n){const t=Ht(this,e);-1!==t&&(n=Mt(t),e=jt(t,e))}for(;-1!==n;){ngDevMode&&Ce(e,n);const r=e[1].data[n+8];t.push(so(r,e));const o=e[n+8];-1===o?n=-1:(n=Mt(o),e=jt(o,e))}return t}get type_(){return Et(this.type)||`TNodeType.?${this.type}?`}get flags_(){const e=[];return 16&this.flags&&e.push("TNodeFlags.hasClassInput"),8&this.flags&&e.push("TNodeFlags.hasContentQuery"),32&this.flags&&e.push("TNodeFlags.hasStyleInput"),128&this.flags&&e.push("TNodeFlags.hasHostBindings"),2&this.flags&&e.push("TNodeFlags.isComponentHost"),1&this.flags&&e.push("TNodeFlags.isDirectiveHost"),64&this.flags&&e.push("TNodeFlags.isDetached"),4&this.flags&&e.push("TNodeFlags.isProjected"),e.join("|")}get template_(){if(1&this.type)return this.value;const e=[],t="string"==typeof this.value&&this.value||this.type_;if(e.push("<",t),this.flags&&e.push(" ",this.flags_),this.attrs)for(let t=0;t<this.attrs.length;){const n=this.attrs[t++];if("number"==typeof n)break;const r=this.attrs[t++];e.push(" ",n,'="',r,'"')}return e.push(">"),Wr(this.child,e),e.push("</",t,">"),e.join("")}get styleBindings_(){return qr(this,!1)}get classBindings_(){return qr(this,!0)}get providerIndexStart_(){return 1048575&this.providerIndexes}get providerIndexEnd_(){return this.providerIndexStart_+(this.providerIndexes>>>20)}};function qr(e,t){const n=e.tView_.data,r=[],o=t?e.classBindings:e.styleBindings,i=Nr(o),s=Rr(o);let a=0!==s,c=a?s:i;for(;0!==c;){const e=n[c],t=n[c+1];r.unshift({key:e,index:c,isTemplate:a,prevDuplicate:Pr(t),nextDuplicate:Vr(t),nextIndex:Rr(t),prevIndex:Nr(t)}),c===i&&(a=!1),c=Nr(t)}return r.push((t?e.residualClasses:e.residualStyles)||null),r}function Wr(e,t){for(;e;)t.push(e.template_),e=e.next}const Qr=Hr&&rr("TViewData")||null;let Kr;const Gr=Hr&&rr("LViewBlueprint")||null,Yr=(Hr&&rr("MatchesArray"),Hr&&rr("TViewComponents")||null),Jr=(Hr&&rr("TNodeLocalNames"),Hr&&rr("TNodeInitialInputs"),Hr&&rr("TNodeInitialData"),Hr&&rr("LCleanup")||null),Xr=Hr&&rr("TCleanup")||null;function eo(e){if(e){const t=e.debug;return M(t,"Object does not have a debug representation."),t}return e}function to(e,t=!1){const n=He(e);if(n)switch(n.nodeType){case Node.TEXT_NODE:return n.textContent;case Node.COMMENT_NODE:return`\x3c!--${n.textContent}--\x3e`;case Node.ELEMENT_NODE:const e=n.outerHTML;if(t)return e;{const t=">"+n.innerHTML+"<";return e.split(t)[0]+">"}}return null}class no{constructor(e){this._raw_lView=e}get flags(){const e=this._raw_lView[2];return{__raw__flags__:e,initPhaseState:3&e,creationMode:!!(4&e),firstViewPass:!!(8&e),checkAlways:!!(16&e),dirty:!!(64&e),attached:!!(128&e),destroyed:!!(256&e),isRoot:!!(512&e),indexWithinInitPhase:e>>11}}get parent(){return eo(this._raw_lView[3])}get hostHTML(){return to(this._raw_lView[0],!0)}get html(){return(this.nodes||[]).map(ro).join("")}get context(){return this._raw_lView[8]}get nodes(){const e=this._raw_lView;return io(e[1].firstChild,e)}get template(){return this.tView.template_}get tView(){return this._raw_lView[1]}get cleanup(){return this._raw_lView[7]}get injector(){return this._raw_lView[9]}get rendererFactory(){return this._raw_lView[10]}get renderer(){return this._raw_lView[11]}get sanitizer(){return this._raw_lView[12]}get childHead(){return eo(this._raw_lView[13])}get next(){return eo(this._raw_lView[4])}get childTail(){return eo(this._raw_lView[14])}get declarationView(){return eo(this._raw_lView[15])}get queries(){return this._raw_lView[19]}get tHost(){return this._raw_lView[6]}get decls(){return oo(this.tView,this._raw_lView,20,this.tView.bindingStartIndex)}get vars(){return oo(this.tView,this._raw_lView,this.tView.bindingStartIndex,this.tView.expandoStartIndex)}get expando(){return oo(this.tView,this._raw_lView,this.tView.expandoStartIndex,this._raw_lView.length)}get childViews(){const e=[];let t=this.childHead;for(;t;)e.push(t),t=t.next;return e}}function ro(e){if("ElementContainer"===e.type)return(e.children||[]).map(ro).join("");if("IcuContainer"===e.type)throw new Error("Not implemented");return to(e.native,!0)||""}function oo(e,t,n,r){let o=[];for(let i=n;i<r;i++)o.push({index:i,t:e.data[i],l:t[i]});return{start:n,end:r,length:r-n,content:o}}function io(e,t){if(e){const n=[];let r=e;for(;r;)n.push(so(r,t)),r=r.next;return n}return[]}function so(e,t){const n=He(t[e.index]),r=[],o=[],i=t[1];for(let n=e.directiveStart;n<e.directiveEnd;n++){const e=i.data[n];r.push(e.type),o.push(t[n])}return{html:to(n),type:Et(e.type),tNode:e,native:n,children:io(e.child,t),factories:r,instances:o,injector:ao(e,i,t),get injectorResolutionPath(){return e.debugNodeInjectorPath(t)}}}function ao(e,t,n){const r=[];for(let n=e.providerIndexStart_;n<e.providerIndexEnd_;n++)r.push(t.data[n]);const o=[];for(let n=e.providerIndexEnd_;n<e.directiveEnd;n++)o.push(t.data[n]);return{bloom:uo(n,e.injectorIndex),cumulativeBloom:uo(t.data,e.injectorIndex),providers:o,viewProviders:r,parentInjectorIndex:n[e.providerIndexStart_-1]}}function co(e,t){const n=e[t];if("number"!=typeof n)return"????????";const r="00000000"+n.toString(2);return r.substring(r.length-8)}function uo(e,t){return t<0?"NO_NODE_INJECTOR":`${co(e,t+7)}_${co(e,t+6)}_${co(e,t+5)}_${co(e,t+4)}_${co(e,t+3)}_${co(e,t+2)}_${co(e,t+1)}_${co(e,t+0)}`}const lo=Promise.resolve(null);function ho(e,t){const n=e.contentQueries;if(null!==n)for(let r=0;r<n.length;r+=2){const o=n[r],i=n[r+1];if(-1!==i){const n=e.data[i];ngDevMode&&M(n,"DirectiveDef not found."),ngDevMode&&M(n.contentQueries,"contentQueries function should be defined"),ct(o),n.contentQueries(2,t[i],i)}}}function fo(e,t,n,r,o,i,s,a,c,u){const l=ngDevMode?Ur(t):t.blueprint.slice();return l[0]=o,l[2]=140|r,We(l),ngDevMode&&t.declTNode&&e&&he(t.declTNode,e),l[3]=l[15]=e,l[8]=n,l[10]=s||e&&e[10],ngDevMode&&M(l[10],"RendererFactory is required"),l[11]=a||e&&e[11],ngDevMode&&M(l[11],"Renderer is required"),l[12]=c||e&&e[12]||null,l[9]=u||e&&e[9]||null,l[6]=i,ngDevMode&&C(2!=t.type||null!==e,!0,"Embedded views must have parentLView"),l[16]=2==t.type?e[16]:l,ngDevMode&&function(e){Fr(e,new no(e))}(l),l}function po(e,t,n,r,o){ngDevMode&&0!==t&&O(t,20,"TNodes can't be in the LView header."),ngDevMode&&function(e){2!==e&&1!==e&&4!==e&&8!==e&&32!==e&&16!==e&&64!==e&&j(`Expected TNodeType to have only a single type selected, but got ${Et(e)}.`)}(n);let i=e.data[t];if(null===i)i=go(e,t,n,r,o),Ke.lFrame.inI18n&&(i.flags|=64);else if(64&i.type){i.type=n,i.value=r,i.attrs=o;const s=et();i.injectorIndex=null===s?-1:s.injectorIndex,ngDevMode&&fe(i,e),ngDevMode&&C(t,i.index,"Expecting same index")}return tt(i,!0),i}function go(e,t,n,r,o){const i=Xe(),s=nt(),a=s?i:i&&i.parent,c=e.data[t]=function(e,t,n,r,o,i){ngDevMode&&0!==r&&O(r,20,"TNodes can't be in the LView header."),ngDevMode&&T(i,void 0,"'undefined' is not valid value for 'attrs'"),ngDevMode&&ngDevMode.tNode++,ngDevMode&&t&&fe(t,e);let s=t?t.injectorIndex:-1;const a=ngDevMode?new zr(e,n,r,null,s,-1,-1,-1,null,0,0,o,i,null,null,void 0,null,null,null,null,null,null,t,null,null,null,void 0,null,null,void 0,0,0):{type:n,index:r,insertBeforeIndex:null,injectorIndex:s,directiveStart:-1,directiveEnd:-1,directiveStylingLast:-1,propertyBindings:null,flags:0,providerIndexes:0,value:o,attrs:i,mergedAttrs:null,localNames:null,initialInputs:void 0,inputs:null,outputs:null,tViews:null,next:null,projectionNext:null,child:null,parent:t,projection:null,styles:null,stylesWithoutHost:null,residualStyles:void 0,classes:null,classesWithoutHost:null,residualClasses:void 0,classBindings:0,styleBindings:0};ngDevMode&&Object.seal(a);return a}(e,a,n,t,r,o);return null===e.firstChild&&(e.firstChild=c),null!==i&&(s?null==i.child&&null!==c.parent&&(i.child=c):null===i.next&&(i.next=c)),c}function mo(e,t,n,r){if(0===n)return-1;ngDevMode&&(be(e),E(e,t[1],"`LView` must be associated with `TView`!"),C(e.data.length,t.length,"Expecting LView to be same size as TView"),C(e.data.length,e.blueprint.length,"Expecting Blueprint to be same size as TView"),_e(e));const o=t.length;for(let o=0;o<n;o++)t.push(r),e.blueprint.push(r),e.data.push(null);return o}function vo(e,t,n){ngDevMode&&C(ze(t),!0,"Should be run in creation mode"),dt(t);try{const r=e.viewQuery;null!==r&&Fo(1,r,n);const o=e.template;null!==o&&_o(e,t,o,1,n),e.firstCreatePass&&(e.firstCreatePass=!1),e.staticContentQueries&&ho(e,t),e.staticViewQueries&&Fo(2,e.viewQuery,n);const i=e.components;null!==i&&function(e,t){for(let n=0;n<t.length;n++)jo(e,t[n])}(t,i)}catch(t){throw e.firstCreatePass&&(e.incompleteFirstPass=!0),t}finally{t[2]&=-5,mt()}}function yo(e,t,n,r){ngDevMode&&C(ze(t),!1,"Should be run in update mode");const o=t[2];if(256==(256&o))return;dt(t);const i=rt();try{We(t),it(e.bindingStartIndex),null!==n&&_o(e,t,n,2,r);const s=3==(3&o);if(!i)if(s){const n=e.preOrderCheckHooks;null!==n&&_t(t,n,null)}else{const n=e.preOrderHooks;null!==n&&wt(t,n,0,null),xt(t,0)}if(function(e){for(let t=lr(e);null!==t;t=dr(t)){if(!t[2])continue;const e=t[9];ngDevMode&&M(e,"Transplanted View flags set but missing MOVED_VIEWS");for(let t=0;t<e.length;t++){const n=e[t],r=n[3];ngDevMode&&me(r),0==(1024&n[2])&&Qe(r,1),n[2]|=1024}}}(t),function(e){for(let t=lr(e);null!==t;t=dr(t))for(let e=10;e<t.length;e++){const n=t[e],r=n[1];ngDevMode&&M(r,"TView must be allocated"),qe(n)&&yo(r,n,r.template,n[8])}}(t),null!==e.contentQueries&&ho(e,t),!i)if(s){const n=e.contentCheckHooks;null!==n&&_t(t,n)}else{const n=e.contentHooks;null!==n&&wt(t,n,1),xt(t,1)}!function(e,t){const n=e.hostBindingOpCodes;if(null!==n)try{for(let e=0;e<n.length;e++){const r=n[e];if(r<0)yt(~r);else{const o=r,i=n[++e],s=n[++e];st(i,o);s(2,t[o])}}}finally{yt(-1)}}(e,t);const a=e.components;null!==a&&function(e,t){for(let n=0;n<t.length;n++)Mo(e,t[n])}(t,a);const c=e.viewQuery;if(null!==c&&Fo(2,c,r),!i)if(s){const n=e.viewCheckHooks;null!==n&&_t(t,n)}else{const n=e.viewHooks;null!==n&&wt(t,n,2),xt(t,2)}!0===e.firstUpdatePass&&(e.firstUpdatePass=!1),i||(t[2]&=-73),1024&t[2]&&(t[2]&=-1025,Qe(t[3],-1))}finally{mt()}}function bo(e,t,n,r){const o=t[10],i=!rt(),s=ze(t);try{i&&!s&&o.begin&&o.begin(),s&&vo(e,t,r),yo(e,t,n,r)}finally{i&&!s&&o.end&&o.end()}}function _o(e,t,n,r,o){const i=vt(),s=2&r;try{yt(-1),s&&t.length>20&&Sr(e,t,20,rt());Se(s?2:0,o),n(r,o)}finally{yt(i);Se(s?3:1,o)}}function wo(e){const t=e.tView;if(null===t||t.incompleteFirstPass){const t=null;return e.tView=xo(1,t,e.template,e.decls,e.vars,e.directiveDefs,e.pipeDefs,e.viewQuery,e.schemas,e.consts)}return t}function xo(e,t,n,r,o,i,s,a,c,u){ngDevMode&&ngDevMode.tView++;const l=20+r,d=l+o,h=function(e,t){const n=ngDevMode?new Gr:[];for(let r=0;r<t;r++)n.push(r<e?null:jr);return n}(l,d),f="function"==typeof u?u():u,p=h[1]=ngDevMode?new class{constructor(e,t,n,r,o,i,s,a,c,u,l,d,h,f,p,g,m,v,y,b,_,w,x,A,C,k,E,T,D,I,O,M){this.type=e,this.blueprint=t,this.template=n,this.queries=r,this.viewQuery=o,this.declTNode=i,this.data=s,this.bindingStartIndex=a,this.expandoStartIndex=c,this.hostBindingOpCodes=u,this.firstCreatePass=l,this.firstUpdatePass=d,this.staticViewQueries=h,this.staticContentQueries=f,this.preOrderHooks=p,this.preOrderCheckHooks=g,this.contentHooks=m,this.contentCheckHooks=v,this.viewHooks=y,this.viewCheckHooks=b,this.destroyHooks=_,this.cleanup=w,this.contentQueries=x,this.components=A,this.directiveRegistry=C,this.pipeRegistry=k,this.firstChild=E,this.schemas=T,this.consts=D,this.incompleteFirstPass=I,this._decls=O,this._vars=M}get template_(){const e=[];return Wr(this.firstChild,e),e.join("")}get type_(){return ae[this.type]||`TViewType.?${this.type}?`}}(e,h,n,null,a,t,(g=h,void 0===Kr&&(Kr=new Qr),Kr.concat(g)).fill(null,l),l,d,null,!0,!0,!1,!1,null,null,null,null,null,null,null,null,null,null,"function"==typeof i?i():i,"function"==typeof s?s():s,null,c,f,!1,r,o):{type:e,blueprint:h,template:n,queries:null,viewQuery:a,declTNode:t,data:h.slice().fill(null,l),bindingStartIndex:l,expandoStartIndex:d,hostBindingOpCodes:null,firstCreatePass:!0,firstUpdatePass:!0,staticViewQueries:!1,staticContentQueries:!1,preOrderHooks:null,preOrderCheckHooks:null,contentHooks:null,contentCheckHooks:null,viewHooks:null,viewCheckHooks:null,destroyHooks:null,cleanup:null,contentQueries:null,components:null,directiveRegistry:"function"==typeof i?i():i,pipeRegistry:"function"==typeof s?s():s,firstChild:null,schemas:c,consts:f,incompleteFirstPass:!1};var g;return ngDevMode&&Object.seal(p),p}function Ao(e,t){return new Error(`Renderer: ${e} [${b(t)}]`)}function Co(e,t,n){if(Ve(e)){const r=n===Q.ShadowDom;return e.selectRootElement(t,r)}let r="string"==typeof t?e.querySelector(t):t;return ngDevMode&&function(e,t){if(!e)throw Ao("string"==typeof t?"Host node with selector not found:":"Host node is required:",t)}(r,t),r.textContent="",r}function ko(e,t,n,r){const o=Lo(t);null===n?(ngDevMode&&Object.freeze($o(e)),o.push(r)):(o.push(n),e.firstCreatePass&&$o(e).push(r,o.length-1))}function Eo(e,t,n,r,o,i){ngDevMode&&be(e);const s=i.hostBindings;if(s){let n=e.hostBindingOpCodes;null===n&&(n=e.hostBindingOpCodes=[]);const i=~t.index;(function(e){let t=e.length;for(;t>0;){const n=e[--t];if("number"==typeof n&&n<0)return n}return 0})(n)!=i&&n.push(i),n.push(r,o,s)}}function To(e,t){null!==e.hostBindings&&e.hostBindings(1,t)}function Do(e,t){ngDevMode&&be(e),t.flags|=2,(e.components||(e.components=ngDevMode?new Yr:[])).push(t.index)}function Io(e,t,n){ngDevMode&&k(n,e.directiveEnd-e.directiveStart,"Reached the max number of directives"),e.flags|=1,e.directiveStart=t,e.directiveEnd=t+n,e.providerIndexes=t}function Oo(e,t,n,r,o){ngDevMode&&O(r,20,"Must be in Expando section"),e.data[r]=o;const i=o.factory||(o.factory=ke(o.type,!0)),s=new kt(i,de(o),null);e.blueprint[r]=s,n[r]=s,Eo(e,t,0,r,mo(e,n,o.hostVars,jr),o)}("undefined"==typeof ngDevMode||ngDevMode)&&X()&&rr("LContainer");function Mo(e,t){ngDevMode&&C(ze(e),!1,"Should be run in update mode");const n=Be(t,e);if(qe(n)){const e=n[1];80&n[2]?yo(e,n,e.template,n[8]):n[5]>0&&function e(t){for(let n=lr(t);null!==n;n=dr(n))for(let t=10;t<n.length;t++){const r=n[t];if(1024&r[2]){const e=r[1];ngDevMode&&M(e,"TView must be allocated"),yo(e,r,e.template,r[8])}else r[5]>0&&e(r)}const n=t[1].components;if(null!==n)for(let r=0;r<n.length;r++){const o=Be(n[r],t);qe(o)&&o[5]>0&&e(o)}}(n)}}function jo(e,t){ngDevMode&&C(ze(e),!0,"Should be run in creation mode");const n=Be(t,e),r=n[1];!function(e,t){for(let n=t.length;n<e.blueprint.length;n++)t.push(e.blueprint[n])}(r,n),vo(r,n,n[8])}function So(e,t){return e[13]?e[14][4]=t:e[13]=t,e[14]=t,t}function No(e){for(;e;){e[2]|=64;const t=ur(e);if(0!=(512&e[2])&&!t)return e;e=t}return null}function Po(e){for(let t=0;t<e.components.length;t++){const n=e.components[t],r=Ze(n),o=r[1];bo(o,r,o.template,n)}}function Ro(e,t,n){const r=t[10];r.begin&&r.begin();try{yo(e,t,e.template,n)}catch(e){throw Bo(t,e),e}finally{r.end&&r.end()}}function Vo(e){Po(e[8])}function Fo(e,t,n){ngDevMode&&M(t,"View queries function to execute must be defined."),ct(0),t(e,n)}const Ho=lo;function Lo(e){return e[7]||(e[7]=ngDevMode?new Jr:[])}function $o(e){return e.cleanup||(e.cleanup=ngDevMode?new Xr:[])}function Bo(e,t){const n=e[9],r=n?n.get(nr,null):null;r&&r.handleError(t)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Uo(e,t,n){ngDevMode&&be(Ye(),"Expecting to be called in first template pass only");let r=n?e.styles:null,o=n?e.classes:null,i=0;if(null!==t)for(let e=0;e<t.length;e++){const n=t[e];if("number"==typeof n)i=n;else if(1==i)o=l(o,n);else if(2==i){r=l(r,n+": "+t[++e]+";")}}n?e.styles=r:e.stylesWithoutHost=r,n?e.classes=o:e.classesWithoutHost=o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Zo=new sn("INJECTOR",-1);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class zo{get(e,t=xn){if(t===xn){const t=new Error(`NullInjectorError: No provider for ${u(e)}!`);throw t.name="NullInjectorError",t}return t}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const qo=new sn("Set Injector scope.");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Wo=
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e,t,n){return new Xo(e,t,n)};class Qo{static create(e,t){return Array.isArray(e)?Wo(e,t,""):Wo(e.providers,e.parent,e.name||"")}}Qo.THROW_IF_NOT_FOUND=xn,Qo.NULL=new zo,Qo.ɵprov=P({token:Qo,providedIn:"any",factory:()=>Dn(Zo)}),Qo.__NG_ELEMENT_ID__=-1;const Ko=function(e){return e},Go=[],Yo=Ko,Jo=function(){return Array.prototype.slice.call(arguments)};class Xo{constructor(e,t=Qo.NULL,n=null){this.parent=t,this.source=n;const r=this._records=new Map;r.set(Qo,{token:Qo,fn:Ko,deps:Go,value:this,useNew:!1}),r.set(Zo,{token:Zo,fn:Ko,deps:Go,value:this,useNew:!1}),this.scope=function e(t,n){let r=null;if(n)if(n=f(n),Array.isArray(n))for(let o=0;o<n.length;o++)r=e(t,n[o])||r;else{if("function"==typeof n)throw ri("Function/Class not supported",n);if(!n||"object"!=typeof n||!n.provide)throw ri("Unexpected provider",n);{let e=f(n.provide);const o=ei(n);if(!0===n.multi){let r=t.get(e);if(r){if(r.fn!==Jo)throw ti(e)}else t.set(e,r={token:n.provide,deps:[],useNew:!1,fn:Jo,value:Go});e=n,r.deps.push({token:e,options:6})}const i=t.get(e);if(i&&i.fn==Jo)throw ti(e);e===qo&&(r=o.value),t.set(e,o)}}return r}(r,e)}get(e,t,n=$.Default){const r=this._records;let o=r.get(e);if(void 0===o){const t=V(e);if(t){const n=t&&t.providedIn;("any"===n||null!=n&&n===this.scope)&&r.set(e,o=ei({provide:e,useFactory:t.factory,deps:Go}))}void 0===o&&r.set(e,null)}let i=En(this);try{return ni(e,o,r,this.parent,t,n)}catch(t){return Mn(t,e,"StaticInjectorError",this.source)}finally{En(i)}}toString(){const e=[];return this._records.forEach((t,n)=>e.push(u(n))),`StaticInjector[${e.join(", ")}]`}}function ei(e){const t=function(e){let t=Go;const n=e.deps;if(n&&n.length){t=[];for(let e=0;e<n.length;e++){let r=6,o=f(n[e]);if(Array.isArray(o))for(let e=0,t=o;e<t.length;e++){const n=t[e];n instanceof Nn||n==Nn?r|=1:n instanceof Rn||n==Rn?r&=-3:n instanceof Pn||n==Pn?r&=-5:o=n instanceof Sn?n.token:f(n)}t.push({token:o,options:r})}}else if(e.useExisting){const n=f(e.useExisting);t=[{token:n,options:6}]}else if(!n&&!(Cn in e))throw ri("'deps' required",e);return t}(e);let n=Ko,r=Go,o=!1,i=f(e.provide);if(Cn in e)r=e.useValue;else if(e.useFactory)n=e.useFactory;else if(e.useExisting);else if(e.useClass)o=!0,n=f(e.useClass);else{if("function"!=typeof i)throw ri("StaticProvider does not have [useValue|useFactory|useExisting|useClass] or [provide] is not newable",e);o=!0,n=i}return{deps:t,fn:n,useNew:o,value:r}}function ti(e){return ri("Cannot mix multi providers and regular providers",e)}function ni(e,t,n,r,o,i){try{return function(e,t,n,r,o,i){let s;if(!t||i&$.SkipSelf)s=i&$.Self?i&$.Optional?Qo.NULL.get(e,void 0!==o?o:null):Qo.NULL.get(e,o):r.get(e,o,$.Default);else{if(s=t.value,s==Yo)throw Error("ɵCircular dependency");if(s===Go){t.value=Yo;let e=void 0,o=t.useNew,i=t.fn,a=t.deps,c=Go;if(a.length){c=[];for(let e=0;e<a.length;e++){const t=a[e],o=t.options,i=2&o?n.get(t.token):void 0;c.push(ni(t.token,i,n,i||4&o?r:Qo.NULL,1&o?null:Qo.THROW_IF_NOT_FOUND,$.Default))}}t.value=s=o?new i(...c):i.apply(e,c)}}return s}(e,t,n,r,o,i)}catch(n){n instanceof Error||(n=new Error(n));throw(n.ngTempTokenPath=n.ngTempTokenPath||[]).unshift(e),t&&t.value==Yo&&(t.value=Go),n}}function ri(e,t){return new Error(jn(e,t,"StaticInjectorError"))}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function oi(e,t,n,r,o,i){const s=n[1];ngDevMode&&N(n,20),n[20]=e;const a=po(s,20,2,"#host",null),c=a.mergedAttrs=t.hostAttrs;null!==c&&(Uo(a,c,!0),null!==e&&(Dt(o,e,c),null!==a.classes&&Dr(o,e,a.classes),null!==a.styles&&Tr(o,e,a.styles)));const u=r.createRenderer(e,t),l=fo(n,wo(t),null,t.onPush?64:16,n[20],a,r,u,i||null,null);return s.firstCreatePass&&(Lt(Rt(a,n),s,t.type),Do(s,a),Io(a,n.length,1)),So(n,l),n[20]=l}function ii(e,t,n,r,o){const i=n[1],s=function(e,t,n){const r=Je();if(e.firstCreatePass){n.providersResolver&&n.providersResolver(n);const o=mo(e,t,1,null);ngDevMode&&C(o,r.directiveStart,"Because this is a root component the allocated expando should match the TNode component."),Oo(e,r,t,o,n)}const o=Qt(t,e,r.directiveStart,r);or(o,t);const i=Le(r,t);return i&&or(i,t),o}(i,n,t);if(r.components.push(s),e[8]=s,o&&o.forEach(e=>e(s,t)),t.contentQueries){const e=Je();ngDevMode&&M(e,"TNode expected"),t.contentQueries(1,s,e.directiveStart)}const a=Je();if(ngDevMode&&M(a,"tNode should have been already created"),i.firstCreatePass&&(null!==t.hostBindings||null!==t.hostAttrs)){yt(a.index);Eo(n[1],a,0,a.directiveStart,a.directiveEnd,t),To(t,s)}return s}function si(e,t){return{components:[],scheduler:e||ir,clean:Ho,playerHandler:t||null,flags:0}}function ai(e,t){const n=Ze(e);ngDevMode&&M(n,"LView is required");const r=n[1],o=Je();ngDevMode&&M(o,"TNode is required"),bt(r,o)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
let ci=null;function ui(){if(!ci){const e=J.Symbol;if(e&&e.iterator)ci=e.iterator;else{const e=Object.getOwnPropertyNames(Map.prototype);for(let t=0;t<e.length;++t){const n=e[t];"entries"!==n&&"size"!==n&&Map.prototype[n]===Map.prototype.entries&&(ci=n)}}}return ci}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function li(e){return!!di(e)&&(Array.isArray(e)||!(e instanceof Map)&&ui()in e)}function di(e){return null!==e&&("function"==typeof e||"object"==typeof e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */c({provide:String,useValue:c});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const hi=c({provide:String,useValue:c}),fi=[];function pi(e,t){if(!t){const t=(new bn).parameters(e);return()=>new e(...In(t))}if(hi in t){const e=t;return()=>e.useValue}if(t.useExisting){const e=t;return()=>Dn(f(e.useExisting))}if(t.useFactory){const e=t;return()=>e.useFactory(...In(e.deps||fi))}if(t.useClass){const n=t;let r=t.deps;if(!r){const t=new bn;r=t.parameters(e)}return()=>new(f(n.useClass))(...In(r))}{let n=t.deps;if(!n){const t=new bn;n=t.parameters(e)}return()=>new e(...In(n))}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const gi=tn("Injectable",void 0,void 0,void 0,(e,t)=>mi(e,t));const mi=function(e,t){t&&void 0!==t.providedIn&&!V(e)&&(e.ɵprov=P({token:e,providedIn:t.providedIn,factory:pi(e,t)}))};function vi(e){if(e.length>1){return" ("+
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(e){const t=[];for(let n=0;n<e.length;++n){if(t.indexOf(e[n])>-1)return t.push(e[n]),t;t.push(e[n])}return t}(e.slice().reverse()).map(e=>u(e.token)).join(" -> ")+")"}return""}function yi(e,t,n,r){const o=[t],i=n(o),s=r?function(e,t){const n=`${e} caused by: ${t instanceof Error?t.message:t}`,r=Error(n);return r.ngOriginalError=t,r}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(i,r):Error(i);return s.addKey=bi,s.keys=o,s.injectors=[e],s.constructResolvingMessage=n,s.ngOriginalError=r,s}function bi(e,t){this.injectors.push(e),this.keys.push(t),this.message=this.constructResolvingMessage(this.keys)}function _i(e,t){const n=[];for(let e=0,r=t.length;e<r;e++){const r=t[e];r&&0!=r.length?n.push(r.map(u).join(" ")):n.push("?")}return Error("Cannot resolve all parameters for '"+u(e)+"'("+n.join(", ")+"). Make sure that all the parameters are decorated with Inject or have valid type annotations and that '"+u(e)+"' is decorated with Injectable.")}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class wi{constructor(e,t){if(this.token=e,this.id=t,!e)throw new Error("Token must be defined!");this.displayName=u(this.token)}static get(e){return xi.get(f(e))}static get numberOfKeys(){return xi.numberOfKeys}}const xi=new class{constructor(){this._allKeys=new Map}get(e){if(e instanceof wi)return e;if(this._allKeys.has(e))return this._allKeys.get(e);const t=new wi(e,wi.numberOfKeys);return this._allKeys.set(e,t),t}get numberOfKeys(){return this._allKeys.size}};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Ai=new class{constructor(e){this.reflectionCapabilities=e}updateCapabilities(e){this.reflectionCapabilities=e}factory(e){return this.reflectionCapabilities.factory(e)}parameters(e){return this.reflectionCapabilities.parameters(e)}annotations(e){return this.reflectionCapabilities.annotations(e)}propMetadata(e){return this.reflectionCapabilities.propMetadata(e)}hasLifecycleHook(e,t){return this.reflectionCapabilities.hasLifecycleHook(e,t)}getter(e){return this.reflectionCapabilities.getter(e)}setter(e){return this.reflectionCapabilities.setter(e)}method(e){return this.reflectionCapabilities.method(e)}importUri(e){return this.reflectionCapabilities.importUri(e)}resourceUri(e){return this.reflectionCapabilities.resourceUri(e)}resolveIdentifier(e,t,n,r){return this.reflectionCapabilities.resolveIdentifier(e,t,n,r)}resolveEnum(e,t){return this.reflectionCapabilities.resolveEnum(e,t)}}(new bn);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class Ci{constructor(e,t,n){this.key=e,this.optional=t,this.visibility=n}static fromKey(e){return new Ci(e,!1,null)}}const ki=[];class Ei{constructor(e,t,n){this.key=e,this.resolvedFactories=t,this.multiProvider=n,this.resolvedFactory=this.resolvedFactories[0]}}class Ti{constructor(e,t){this.factory=e,this.dependencies=t}}function Di(e){let t,n;if(e.useClass){const r=f(e.useClass);t=Ai.factory(r),n=Mi(r)}else e.useExisting?(t=e=>e,n=[Ci.fromKey(wi.get(e.useExisting))]):e.useFactory?(t=e.useFactory,n=function(e,t){if(t){const n=t.map(e=>[e]);return t.map(t=>ji(e,t,n))}return Mi(e)}(e.useFactory,e.deps)):(t=()=>e.useValue,n=ki);return new Ti(t,n)}function Ii(e){return new Ei(wi.get(e.provide),[Di(e)],e.multi||!1)}function Oi(e){const t=function(e,t){for(let n=0;n<e.length;n++){const r=e[n],o=t.get(r.key.id);if(o){if(r.multiProvider!==o.multiProvider)throw Error(`Cannot mix multi providers and regular providers, got: ${o} ${r}`);if(r.multiProvider)for(let e=0;e<r.resolvedFactories.length;e++)o.resolvedFactories.push(r.resolvedFactories[e]);else t.set(r.key.id,r)}else{let e;e=r.multiProvider?new Ei(r.key,r.resolvedFactories.slice(),r.multiProvider):r,t.set(r.key.id,e)}}return t}(function e(t,n){return t.forEach(t=>{if(t instanceof dn)n.push({provide:t,useClass:t});else if(t&&"object"==typeof t&&void 0!==t.provide)n.push(t);else{if(!Array.isArray(t))throw Error("Invalid provider - only instances of Provider and Type are allowed, got: "+t);e(t,n)}}),n}(e,[]).map(Ii),new Map);return Array.from(t.values())}function Mi(e){const t=Ai.parameters(e);if(!t)return[];if(t.some(e=>null==e))throw _i(e,t);return t.map(n=>ji(e,n,t))}function ji(e,t,n){let r=null,o=!1;if(!Array.isArray(t))return Si(t instanceof Sn?t.token:t,o,null);let i=null;for(let e=0;e<t.length;++e){const n=t[e];n instanceof dn?r=n:n instanceof Sn?r=n.token:n instanceof Nn?o=!0:n instanceof Pn||n instanceof Rn?i=n:n instanceof sn&&(r=n)}if(r=f(r),null!=r)return Si(r,o,i);throw _i(e,n)}function Si(e,t,n){return new Ci(wi.get(e),t,n)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const Ni={};class Pi{static resolve(e){return Oi(e)}static resolveAndCreate(e,t){const n=Pi.resolve(e);return Pi.fromResolvedProviders(n,t)}static fromResolvedProviders(e,t){return new Ri(e,t)}}class Ri{constructor(e,t){this._constructionCounter=0,this._providers=e,this.parent=t||null;const n=e.length;this.keyIds=[],this.objs=[];for(let t=0;t<n;t++)this.keyIds[t]=e[t].key.id,this.objs[t]=Ni}get(e,t=xn){return this._getByKey(wi.get(e),null,t)}resolveAndCreateChild(e){const t=Pi.resolve(e);return this.createChildFromResolved(t)}createChildFromResolved(e){const t=new Ri(e);return t.parent=this,t}resolveAndInstantiate(e){return this.instantiateResolved(Pi.resolve([e])[0])}instantiateResolved(e){return this._instantiateProvider(e)}getProviderAtIndex(e){if(e<0||e>=this._providers.length)throw function(e){return Error(`Index ${e} is out-of-bounds.`)}(e);return this._providers[e]}_new(e){if(this._constructionCounter++>this._getMaxNumberOfObjects())throw t=this,n=e.key,yi(t,n,(function(e){return"Cannot instantiate cyclic dependency!"+vi(e)}));var t,n;return this._instantiateProvider(e)}_getMaxNumberOfObjects(){return this.objs.length}_instantiateProvider(e){if(e.multiProvider){const t=[];for(let n=0;n<e.resolvedFactories.length;++n)t[n]=this._instantiate(e,e.resolvedFactories[n]);return t}return this._instantiate(e,e.resolvedFactories[0])}_instantiate(e,t){const n=t.factory;let r,o;try{r=t.dependencies.map(e=>this._getByReflectiveDependency(e))}catch(t){throw t.addKey&&t.addKey(this,e.key),t}try{o=n(...r)}catch(t){throw i=this,s=t,t.stack,a=e.key,yi(i,a,(function(e){const t=u(e[0].token);return`${s.message}: Error during instantiation of ${t}!${vi(e)}.`}),s)}var i,s,a;return o}_getByReflectiveDependency(e){return this._getByKey(e.key,e.visibility,e.optional?null:xn)}_getByKey(e,t,n){return e===Ri.INJECTOR_KEY?this:t instanceof Pn?this._getByKeySelf(e,n):this._getByKeyDefault(e,n,t)}_getObjByKeyId(e){for(let t=0;t<this.keyIds.length;t++)if(this.keyIds[t]===e)return this.objs[t]===Ni&&(this.objs[t]=this._new(this._providers[t])),this.objs[t];return Ni}_throwOrNull(e,t){if(t!==xn)return t;throw function(e,t){return yi(e,t,(function(e){return`No provider for ${u(e[0].token)}!${vi(e)}`}))}(this,e)}_getByKeySelf(e,t){const n=this._getObjByKeyId(e.id);return n!==Ni?n:this._throwOrNull(e,t)}_getByKeyDefault(e,t,n){let r;for(r=n instanceof Rn?this.parent:this;r instanceof Ri;){const t=r,n=t._getObjByKeyId(e.id);if(n!==Ni)return n;r=t.parent}return null!==r?r.get(e.token,t):this._throwOrNull(e,t)}get displayName(){return`ReflectiveInjector(providers: [${function(e,t){const n=[];for(let r=0;r<e._providers.length;++r)n[r]=t(e.getProviderAtIndex(r));return n}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */(this,e=>' "'+e.key.displayName+'" ').join(", ")}])`}toString(){return this.displayName}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function Vi(e){return!!e&&"function"==typeof e.then}Ri.INJECTOR_KEY=wi.get(Qo);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"undefined"==typeof ngI18nClosureMode&&(J.ngI18nClosureMode="undefined"!=typeof goog&&"function"==typeof goog.getMsg);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */var Fi;!function(e){e[e.LocaleId=0]="LocaleId",e[e.DayPeriodsFormat=1]="DayPeriodsFormat",e[e.DayPeriodsStandalone=2]="DayPeriodsStandalone",e[e.DaysFormat=3]="DaysFormat",e[e.DaysStandalone=4]="DaysStandalone",e[e.MonthsFormat=5]="MonthsFormat",e[e.MonthsStandalone=6]="MonthsStandalone",e[e.Eras=7]="Eras",e[e.FirstDayOfWeek=8]="FirstDayOfWeek",e[e.WeekendRange=9]="WeekendRange",e[e.DateFormat=10]="DateFormat",e[e.TimeFormat=11]="TimeFormat",e[e.DateTimeFormat=12]="DateTimeFormat",e[e.NumberSymbols=13]="NumberSymbols",e[e.NumberFormats=14]="NumberFormats",e[e.CurrencyCode=15]="CurrencyCode",e[e.CurrencySymbol=16]="CurrencySymbol",e[e.CurrencyName=17]="CurrencyName",e[e.Currencies=18]="Currencies",e[e.Directionality=19]="Directionality",e[e.PluralCase=20]="PluralCase",e[e.ExtraData=21]="ExtraData"}(Fi||(Fi={}));var Hi;!function(e){e[e.SHIFT=2]="SHIFT",e[e.APPEND_EAGERLY=1]="APPEND_EAGERLY",e[e.COMMENT=2]="COMMENT"}(Hi||(Hi={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Li{}class $i{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Bi(e){const t=Error(`No component factory found for ${u(e)}. Did you add it to @NgModule.entryComponents?`);return t[Ui]=e,t}const Ui="ngComponent";class Zi{}Zi.NULL=new class{resolveComponentFactory(e){throw Bi(e)}};class zi extends $i{constructor(e,t){super(),this.factory=e,this.ngModule=t,this.selector=e.selector,this.componentType=e.componentType,this.ngContentSelectors=e.ngContentSelectors,this.inputs=e.inputs,this.outputs=e.outputs}create(e,t,n,r){return this.factory.create(e,t,n,r||this.ngModule)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function qi(...e){}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Wi(e,t){return new Ki(Le(e,t))}const Qi=qi;class Ki{constructor(e){this.nativeElement=e}}Ki.__NG_ELEMENT_ID__=Qi;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new sn("Renderer2Interceptor");class Gi{}class Yi{}Yi.__NG_ELEMENT_ID__=()=>Ji();const Ji=qi;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Xi{}Xi.ɵprov=P({token:Xi,providedIn:"root",factory:()=>null});const es=new
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class{constructor(e){this.full=e,this.major=e.split(".")[0],this.minor=e.split(".")[1],this.patch=e.split(".").slice(2).join(".")}}("11.2.14");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ts{constructor(){}supports(e){return li(e)}create(e){return new rs(e)}}const ns=(e,t)=>t;class rs{constructor(e){this.length=0,this._linkedRecords=null,this._unlinkedRecords=null,this._previousItHead=null,this._itHead=null,this._itTail=null,this._additionsHead=null,this._additionsTail=null,this._movesHead=null,this._movesTail=null,this._removalsHead=null,this._removalsTail=null,this._identityChangesHead=null,this._identityChangesTail=null,this._trackByFn=e||ns}forEachItem(e){let t;for(t=this._itHead;null!==t;t=t._next)e(t)}forEachOperation(e){let t=this._itHead,n=this._removalsHead,r=0,o=null;for(;t||n;){const i=!n||t&&t.currentIndex<as(n,r,o)?t:n,s=as(i,r,o),a=i.currentIndex;if(i===n)r--,n=n._nextRemoved;else if(t=t._next,null==i.previousIndex)r++;else{o||(o=[]);const e=s-r,t=a-r;if(e!=t){for(let n=0;n<e;n++){const r=n<o.length?o[n]:o[n]=0,i=r+n;t<=i&&i<e&&(o[n]=r+1)}o[i.previousIndex]=t-e}}s!==a&&e(i,s,a)}}forEachPreviousItem(e){let t;for(t=this._previousItHead;null!==t;t=t._nextPrevious)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachMovedItem(e){let t;for(t=this._movesHead;null!==t;t=t._nextMoved)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}forEachIdentityChange(e){let t;for(t=this._identityChangesHead;null!==t;t=t._nextIdentityChange)e(t)}diff(e){if(null==e&&(e=[]),!li(e))throw new Error(`Error trying to diff '${u(e)}'. Only arrays and iterables are allowed`);return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t,n,r,o=this._itHead,i=!1;if(Array.isArray(e)){this.length=e.length;for(let t=0;t<this.length;t++)n=e[t],r=this._trackByFn(t,n),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,n,r,t)),Object.is(o.item,n)||this._addIdentityChange(o,n)):(o=this._mismatch(o,n,r,t),i=!0),o=o._next}else t=0,function(e,t){if(Array.isArray(e))for(let n=0;n<e.length;n++)t(e[n]);else{const n=e[ui()]();let r;for(;!(r=n.next()).done;)t(r.value)}}(e,e=>{r=this._trackByFn(t,e),null!==o&&Object.is(o.trackById,r)?(i&&(o=this._verifyReinsertion(o,e,r,t)),Object.is(o.item,e)||this._addIdentityChange(o,e)):(o=this._mismatch(o,e,r,t),i=!0),o=o._next,t++}),this.length=t;return this._truncate(o),this.collection=e,this.isDirty}get isDirty(){return null!==this._additionsHead||null!==this._movesHead||null!==this._removalsHead||null!==this._identityChangesHead}_reset(){if(this.isDirty){let e;for(e=this._previousItHead=this._itHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._additionsHead;null!==e;e=e._nextAdded)e.previousIndex=e.currentIndex;for(this._additionsHead=this._additionsTail=null,e=this._movesHead;null!==e;e=e._nextMoved)e.previousIndex=e.currentIndex;this._movesHead=this._movesTail=null,this._removalsHead=this._removalsTail=null,this._identityChangesHead=this._identityChangesTail=null}}_mismatch(e,t,n,r){let o;return null===e?o=this._itTail:(o=e._prev,this._remove(e)),null!==(e=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._reinsertAfter(e,o,r)):null!==(e=null===this._linkedRecords?null:this._linkedRecords.get(n,r))?(Object.is(e.item,t)||this._addIdentityChange(e,t),this._moveAfter(e,o,r)):e=this._addAfter(new os(t,n),o,r),e}_verifyReinsertion(e,t,n,r){let o=null===this._unlinkedRecords?null:this._unlinkedRecords.get(n,null);return null!==o?e=this._reinsertAfter(o,e._prev,r):e.currentIndex!=r&&(e.currentIndex=r,this._addToMoves(e,r)),e}_truncate(e){for(;null!==e;){const t=e._next;this._addToRemovals(this._unlink(e)),e=t}null!==this._unlinkedRecords&&this._unlinkedRecords.clear(),null!==this._additionsTail&&(this._additionsTail._nextAdded=null),null!==this._movesTail&&(this._movesTail._nextMoved=null),null!==this._itTail&&(this._itTail._next=null),null!==this._removalsTail&&(this._removalsTail._nextRemoved=null),null!==this._identityChangesTail&&(this._identityChangesTail._nextIdentityChange=null)}_reinsertAfter(e,t,n){null!==this._unlinkedRecords&&this._unlinkedRecords.remove(e);const r=e._prevRemoved,o=e._nextRemoved;return null===r?this._removalsHead=o:r._nextRemoved=o,null===o?this._removalsTail=r:o._prevRemoved=r,this._insertAfter(e,t,n),this._addToMoves(e,n),e}_moveAfter(e,t,n){return this._unlink(e),this._insertAfter(e,t,n),this._addToMoves(e,n),e}_addAfter(e,t,n){return this._insertAfter(e,t,n),null===this._additionsTail?this._additionsTail=this._additionsHead=e:this._additionsTail=this._additionsTail._nextAdded=e,e}_insertAfter(e,t,n){const r=null===t?this._itHead:t._next;return e._next=r,e._prev=t,null===r?this._itTail=e:r._prev=e,null===t?this._itHead=e:t._next=e,null===this._linkedRecords&&(this._linkedRecords=new ss),this._linkedRecords.put(e),e.currentIndex=n,e}_remove(e){return this._addToRemovals(this._unlink(e))}_unlink(e){null!==this._linkedRecords&&this._linkedRecords.remove(e);const t=e._prev,n=e._next;return null===t?this._itHead=n:t._next=n,null===n?this._itTail=t:n._prev=t,e}_addToMoves(e,t){return e.previousIndex===t||(null===this._movesTail?this._movesTail=this._movesHead=e:this._movesTail=this._movesTail._nextMoved=e),e}_addToRemovals(e){return null===this._unlinkedRecords&&(this._unlinkedRecords=new ss),this._unlinkedRecords.put(e),e.currentIndex=null,e._nextRemoved=null,null===this._removalsTail?(this._removalsTail=this._removalsHead=e,e._prevRemoved=null):(e._prevRemoved=this._removalsTail,this._removalsTail=this._removalsTail._nextRemoved=e),e}_addIdentityChange(e,t){return e.item=t,null===this._identityChangesTail?this._identityChangesTail=this._identityChangesHead=e:this._identityChangesTail=this._identityChangesTail._nextIdentityChange=e,e}}class os{constructor(e,t){this.item=e,this.trackById=t,this.currentIndex=null,this.previousIndex=null,this._nextPrevious=null,this._prev=null,this._next=null,this._prevDup=null,this._nextDup=null,this._prevRemoved=null,this._nextRemoved=null,this._nextAdded=null,this._nextMoved=null,this._nextIdentityChange=null}}class is{constructor(){this._head=null,this._tail=null}add(e){null===this._head?(this._head=this._tail=e,e._nextDup=null,e._prevDup=null):(this._tail._nextDup=e,e._prevDup=this._tail,e._nextDup=null,this._tail=e)}get(e,t){let n;for(n=this._head;null!==n;n=n._nextDup)if((null===t||t<=n.currentIndex)&&Object.is(n.trackById,e))return n;return null}remove(e){const t=e._prevDup,n=e._nextDup;return null===t?this._head=n:t._nextDup=n,null===n?this._tail=t:n._prevDup=t,null===this._head}}class ss{constructor(){this.map=new Map}put(e){const t=e.trackById;let n=this.map.get(t);n||(n=new is,this.map.set(t,n)),n.add(e)}get(e,t){const n=e,r=this.map.get(n);return r?r.get(e,t):null}remove(e){const t=e.trackById;return this.map.get(t).remove(e)&&this.map.delete(t),e}get isEmpty(){return 0===this.map.size}clear(){this.map.clear()}}function as(e,t,n){const r=e.previousIndex;if(null===r)return r;let o=0;return n&&r<n.length&&(o=n[r]),r+t+o}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class cs{constructor(){}supports(e){return e instanceof Map||di(e)}create(){return new us}}class us{constructor(){this._records=new Map,this._mapHead=null,this._appendAfter=null,this._previousMapHead=null,this._changesHead=null,this._changesTail=null,this._additionsHead=null,this._additionsTail=null,this._removalsHead=null,this._removalsTail=null}get isDirty(){return null!==this._additionsHead||null!==this._changesHead||null!==this._removalsHead}forEachItem(e){let t;for(t=this._mapHead;null!==t;t=t._next)e(t)}forEachPreviousItem(e){let t;for(t=this._previousMapHead;null!==t;t=t._nextPrevious)e(t)}forEachChangedItem(e){let t;for(t=this._changesHead;null!==t;t=t._nextChanged)e(t)}forEachAddedItem(e){let t;for(t=this._additionsHead;null!==t;t=t._nextAdded)e(t)}forEachRemovedItem(e){let t;for(t=this._removalsHead;null!==t;t=t._nextRemoved)e(t)}diff(e){if(e){if(!(e instanceof Map||di(e)))throw new Error(`Error trying to diff '${u(e)}'. Only maps and objects are allowed`)}else e=new Map;return this.check(e)?this:null}onDestroy(){}check(e){this._reset();let t=this._mapHead;if(this._appendAfter=null,this._forEach(e,(e,n)=>{if(t&&t.key===n)this._maybeAddToChanges(t,e),this._appendAfter=t,t=t._next;else{const r=this._getOrCreateRecordForKey(n,e);t=this._insertBeforeOrAppend(t,r)}}),t){t._prev&&(t._prev._next=null),this._removalsHead=t;for(let e=t;null!==e;e=e._nextRemoved)e===this._mapHead&&(this._mapHead=null),this._records.delete(e.key),e._nextRemoved=e._next,e.previousValue=e.currentValue,e.currentValue=null,e._prev=null,e._next=null}return this._changesTail&&(this._changesTail._nextChanged=null),this._additionsTail&&(this._additionsTail._nextAdded=null),this.isDirty}_insertBeforeOrAppend(e,t){if(e){const n=e._prev;return t._next=e,t._prev=n,e._prev=t,n&&(n._next=t),e===this._mapHead&&(this._mapHead=t),this._appendAfter=e,e}return this._appendAfter?(this._appendAfter._next=t,t._prev=this._appendAfter):this._mapHead=t,this._appendAfter=t,null}_getOrCreateRecordForKey(e,t){if(this._records.has(e)){const n=this._records.get(e);this._maybeAddToChanges(n,t);const r=n._prev,o=n._next;return r&&(r._next=o),o&&(o._prev=r),n._next=null,n._prev=null,n}const n=new ls(e);return this._records.set(e,n),n.currentValue=t,this._addToAdditions(n),n}_reset(){if(this.isDirty){let e;for(this._previousMapHead=this._mapHead,e=this._previousMapHead;null!==e;e=e._next)e._nextPrevious=e._next;for(e=this._changesHead;null!==e;e=e._nextChanged)e.previousValue=e.currentValue;for(e=this._additionsHead;null!=e;e=e._nextAdded)e.previousValue=e.currentValue;this._changesHead=this._changesTail=null,this._additionsHead=this._additionsTail=null,this._removalsHead=null}}_maybeAddToChanges(e,t){Object.is(t,e.currentValue)||(e.previousValue=e.currentValue,e.currentValue=t,this._addToChanges(e))}_addToAdditions(e){null===this._additionsHead?this._additionsHead=this._additionsTail=e:(this._additionsTail._nextAdded=e,this._additionsTail=e)}_addToChanges(e){null===this._changesHead?this._changesHead=this._changesTail=e:(this._changesTail._nextChanged=e,this._changesTail=e)}_forEach(e,t){e instanceof Map?e.forEach(t):Object.keys(e).forEach(n=>t(e[n],n))}}class ls{constructor(e){this.key=e,this.previousValue=null,this.currentValue=null,this._nextPrevious=null,this._next=null,this._prev=null,this._nextAdded=null,this._nextRemoved=null,this._nextChanged=null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function ds(){return new hs([new ts])}class hs{constructor(e){this.factories=e}static create(e,t){if(null!=t){const n=t.factories.slice();e=e.concat(n)}return new hs(e)}static extend(e){return{provide:hs,useFactory:t=>hs.create(e,t||ds()),deps:[[hs,new Rn,new Nn]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(null!=t)return t;throw new Error(`Cannot find a differ supporting object '${e}' of type '${n=e,n.name||typeof n}'`);var n;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}}function fs(){return new ps([new cs])}hs.ɵprov=P({token:hs,providedIn:"root",factory:ds});class ps{constructor(e){this.factories=e}static create(e,t){if(t){const n=t.factories.slice();e=e.concat(n)}return new ps(e)}static extend(e){return{provide:ps,useFactory:t=>ps.create(e,t||fs()),deps:[[ps,new Rn,new Nn]]}}find(e){const t=this.factories.find(t=>t.supports(e));if(t)return t;throw new Error(`Cannot find a differ supporting object '${e}'`)}}ps.ɵprov=P({token:ps,providedIn:"root",factory:fs});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class gs{constructor(e,t){this._lView=e,this._cdRefInjectingView=t,this._appRef=null,this._attachedToViewContainer=!1}get rootNodes(){const e=this._lView,t=e[1];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
return function e(t,n,r,o,i=!1){for(;null!==r;){ngDevMode&&Tt(r,63);const s=n[r.index];if(null!==s&&o.push(He(s)),ue(s))for(let t=10;t<s.length;t++){const n=s[t],r=n[1].firstChild;null!==r&&e(n[1],n,r,o)}const a=r.type;if(8&a)e(t,n,r.child,o);else if(32&a){const e=cr(r,n);let t;for(;t=e();)o.push(t)}else if(16&a){const t=xr(n,r);if(Array.isArray(t))o.push(...t);else{const r=ur(n[16]);ngDevMode&&Ae(r),e(r[1],r,t,o,!0)}}r=i?r.projectionNext:r.next}return o}(t,e,t.firstChild,[])}get context(){return this._lView[8]}get destroyed(){return 256==(256&this._lView[2])}destroy(){if(this._appRef)this._appRef.detachView(this);else if(this._attachedToViewContainer){const e=this._lView[3];if(ue(e)){const t=e[8],n=t?t.indexOf(this):-1;n>-1&&(ngDevMode&&C(n,e.indexOf(this._lView)-10,"An attached view should be in the same position within its container as its ViewRef in the VIEW_REFS array."),mr(e,n),fn(t,n))}this._attachedToViewContainer=!1}vr(this._lView[1],this._lView)}onDestroy(e){ko(this._lView[1],this._lView,null,e)}markForCheck(){No(this._cdRefInjectingView||this._lView)}detach(){this._lView[2]&=-129}reattach(){this._lView[2]|=128}detectChanges(){Ro(this._lView[1],this._lView,this.context)}checkNoChanges(){!function(e,t,n){ot(!0);try{Ro(e,t,n)}finally{ot(!1)}}(this._lView[1],this._lView,this.context)}attachToViewContainerRef(){if(this._appRef)throw new Error("This view is already attached directly to the ApplicationRef!");this._attachedToViewContainer=!0}detachFromAppRef(){var e,t;this._appRef=null,e=this._lView[1],t=this._lView,kr(e,t,t[11],2,null,null)}attachToAppRef(e){if(this._attachedToViewContainer)throw new Error("This view is already attached to a ViewContainer!");this._appRef=e}}class ms extends gs{constructor(e){super(e),this._view=e}detectChanges(){Vo(this._view)}checkNoChanges(){!function(e){ot(!0);try{Vo(e)}finally{ot(!1)}}(this._view)}get context(){return null}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const vs=qi;class ys{}ys.__NG_ELEMENT_ID__=vs,ys.__ChangeDetectorRef__=!0;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const bs=[new cs],_s=[new ts],ws=new hs(_s),xs=new ps(bs),As=qi;class Cs{}Cs.__NG_ELEMENT_ID__=As;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class ks{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Es=qi;class Ts{}Ts.__NG_ELEMENT_ID__=Es;const Ds=new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Is(e){let t=Ds.get(e);return t||(t=u(e)+"_"+Ds.size,Ds.set(e,t)),t}new WeakMap;Is(Qo),Is(Zo),Is(ks);
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Is(Yi),Is(Ki),Is(Ts),Is(Cs),Is(ys),Is(Qo),Is(Zo);const Os={};
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Ms extends Zi{constructor(e){super(),this.ngModule=e}resolveComponentFactory(e){ngDevMode&&ge(e);const t=se(e);return new Ns(t,this.ngModule)}}function js(e){const t=[];for(let n in e)if(e.hasOwnProperty(n)){const r=e[n];t.push({propName:r,templateName:n})}return t}const Ss=new sn("SCHEDULER_TOKEN",{providedIn:"root",factory:()=>ir});class Ns extends $i{constructor(e,t){super(),this.componentDef=e,this.ngModule=t,this.componentType=e.type,this.selector=e.selectors.map(Mr).join(","),this.ngContentSelectors=e.ngContentSelectors?e.ngContentSelectors:[],this.isBoundToModule=!!t}get inputs(){return js(this.componentDef.inputs)}get outputs(){return js(this.componentDef.outputs)}create(e,t,n,r){const o=(r=r||this.ngModule)?function(e,t){return{get:(n,r,o)=>{const i=e.get(n,Os,o);return i!==Os||r===Os?i:t.get(n,r,o)}}}(e,r.injector):e,i=o.get(Gi,Fe),s=o.get(Xi,null),a=i.createRenderer(null,this.componentDef),c=this.componentDef.selectors[0][0]||"div",u=n?Co(a,n,this.componentDef.encapsulation):pr(i.createRenderer(null,this.componentDef),c,function(e){const t=e.toLowerCase();return"svg"===t?"http://www.w3.org/2000/svg":"math"===t?"http://www.w3.org/1998/MathML/":null}(c)),l=this.componentDef.onPush?576:528,d=si(),h=xo(0,null,null,1,0,null,null,null,null,null),f=fo(null,h,d,l,null,null,i,a,s,o);let p,g;dt(f);try{const e=oi(u,this.componentDef,f,i,a);if(u)if(n)Dt(a,u,["ng-version",es.full]);else{const{attrs:e,classes:t}=function(e){const t=[],n=[];let r=1,o=2;for(;r<e.length;){let i=e[r];if("string"==typeof i)2===o?""!==i&&t.push(i,e[++r]):8===o&&n.push(i);else{if(!Ir(o))break;o=i}r++}return{attrs:t,classes:n}}(this.componentDef.selectors[0]);e&&Dt(a,u,e),t&&t.length>0&&Dr(a,u,t.join(" "))}if(g=$e(h,20),void 0!==t){const e=g.projection=[];for(let n=0;n<this.ngContentSelectors.length;n++){const r=t[n];e.push(null!=r?Array.from(r):null)}}p=ii(e,this.componentDef,f,d,[ai]),vo(h,f,null)}finally{mt()}return new Ps(this.componentType,p,Wi(g,f),f,g)}}new Ms;class Ps extends Li{constructor(e,t,n,r,o){super(),this.location=n,this._rootLView=r,this._tNode=o,this.instance=t,this.hostView=this.changeDetectorRef=new ms(r),this.componentType=e}get injector(){return new Yt(this._tNode,this._rootLView)}destroy(){this.hostView.destroy()}onDestroy(e){this.hostView.onDestroy(e)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
new Map;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Rs extends r.a{constructor(e=!1){super(),this.__isAsync=e}emit(e){super.next(e)}subscribe(e,t,n){var r,i,s;let a=e,c=t||(()=>null),u=n;if(e&&"object"==typeof e){const t=e;a=null===(r=t.next)||void 0===r?void 0:r.bind(t),c=null===(i=t.error)||void 0===i?void 0:i.bind(t),u=null===(s=t.complete)||void 0===s?void 0:s.bind(t)}this.__isAsync&&(c=Vs(c),a&&(a=Vs(a)),u&&(u=Vs(u)));const l=super.subscribe({next:a,error:c,complete:u});return e instanceof o.a&&e.add(l),l}}function Vs(e){return t=>{setTimeout(e,void 0,t)}}const Fs=Rs;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */new WeakMap,new WeakMap;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Hs=tn("Directive",(e={})=>e,void 0,void 0,(e,t)=>$s(e,t)),Ls=(tn("Component",(e={})=>Object.assign({changeDetection:q.Default},e),Hs,void 0,(e,t)=>Ls(e,t)),tn("Pipe",e=>Object.assign({pure:!0},e),void 0,void 0,(e,t)=>Bs(e,t)),on("Input",e=>({bindingPropertyName:e})),on("Output",e=>({bindingPropertyName:e})),on("HostBinding",e=>({hostPropertyName:e})),on("HostListener",(e,t)=>({eventName:e,args:t})),qi),$s=qi,Bs=qi,Us=tn("NgModule",e=>e,void 0,void 0,(e,t)=>Zs(e,t));const Zs=function(e,t){let n=t&&t.imports||[];t&&t.exports&&(n=[...n,t.exports]);const r=e;r.ɵfac=pi(e,{useClass:e}),r.ɵinj=R({providers:t&&t.providers,imports:n})},zs=new sn("Application Initializer");class qs{constructor(e){this.appInits=e,this.resolve=qi,this.reject=qi,this.initialized=!1,this.done=!1,this.donePromise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}runInitializers(){if(this.initialized)return;const e=[],t=()=>{this.done=!0,this.resolve()};if(this.appInits)for(let t=0;t<this.appInits.length;t++){const n=this.appInits[t]();Vi(n)&&e.push(n)}Promise.all(e).then(()=>{t()}).catch(e=>{this.reject(e)}),0===e.length&&t(),this.initialized=!0}}qs.decorators=[{type:gi}],qs.ctorParameters=()=>[{type:Array,decorators:[{type:Sn,args:[zs]},{type:Nn}]}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */;const Ws={provide:new sn("AppId"),useFactory:function(){return`${Qs()}${Qs()}${Qs()}`},deps:[]};function Qs(){return String.fromCharCode(97+Math.floor(25*Math.random()))}const Ks=new sn("Platform Initializer"),Gs=new sn("Platform ID"),Ys=new sn("appBootstrapListener");new sn("Application Packages Root URL");
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class Js{log(e){console.log(e)}warn(e){console.warn(e)}}Js.decorators=[{type:gi}];
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
const Xs=new sn("LocaleId"),ea=new sn("DefaultCurrencyCode");new sn("Translations"),new sn("TranslationsFormat");var ta;!function(e){e[e.Error=0]="Error",e[e.Warning=1]="Warning",e[e.Ignore=2]="Ignore"}(ta||(ta={}));function na(){throw new Error("Runtime compiler is not loaded")}const ra=na,oa=na,ia=na,sa=na;class aa{constructor(){this.compileModuleSync=ra,this.compileModuleAsync=oa,this.compileModuleAndAllComponentsSync=ia,this.compileModuleAndAllComponentsAsync=sa}clearCache(){}clearCacheFor(e){}getModuleId(e){}}aa.decorators=[{type:gi}];new sn("compilerOptions");class ca{}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */const ua=Promise.resolve(0);function la(e){"undefined"==typeof Zone?ua.then(()=>{e&&e.apply(null,null)}):Zone.current.scheduleMicroTask("scheduleMicrotask",e)}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
class da{constructor({enableLongStackTrace:e=!1,shouldCoalesceEventChangeDetection:t=!1,shouldCoalesceRunChangeDetection:n=!1}){if(this.hasPendingMacrotasks=!1,this.hasPendingMicrotasks=!1,this.isStable=!0,this.onUnstable=new Fs(!1),this.onMicrotaskEmpty=new Fs(!1),this.onStable=new Fs(!1),this.onError=new Fs(!1),"undefined"==typeof Zone)throw new Error("In this configuration Angular requires Zone.js");Zone.assertZonePatched();const r=this;r._nesting=0,r._outer=r._inner=Zone.current,Zone.TaskTrackingZoneSpec&&(r._inner=r._inner.fork(new Zone.TaskTrackingZoneSpec)),e&&Zone.longStackTraceZoneSpec&&(r._inner=r._inner.fork(Zone.longStackTraceZoneSpec)),r.shouldCoalesceEventChangeDetection=!n&&t,r.shouldCoalesceRunChangeDetection=n,r.lastRequestAnimationFrameId=-1,r.nativeRequestAnimationFrame=function(){let e=J.requestAnimationFrame,t=J.cancelAnimationFrame;if("undefined"!=typeof Zone&&e&&t){const n=e[Zone.__symbol__("OriginalDelegate")];n&&(e=n);const r=t[Zone.__symbol__("OriginalDelegate")];r&&(t=r)}return{nativeRequestAnimationFrame:e,nativeCancelAnimationFrame:t}}().nativeRequestAnimationFrame,function(e){const t=()=>{!function(e){if(-1!==e.lastRequestAnimationFrameId)return;e.lastRequestAnimationFrameId=e.nativeRequestAnimationFrame.call(J,()=>{e.fakeTopEventTask||(e.fakeTopEventTask=Zone.root.scheduleEventTask("fakeTopEventTask",()=>{e.lastRequestAnimationFrameId=-1,pa(e),fa(e)},void 0,()=>{},()=>{})),e.fakeTopEventTask.invoke()}),pa(e)}(e)};e._inner=e._inner.fork({name:"angular",properties:{isAngularZone:!0},onInvokeTask:(n,r,o,i,s,a)=>{try{return ga(e),n.invokeTask(o,i,s,a)}finally{(e.shouldCoalesceEventChangeDetection&&"eventTask"===i.type||e.shouldCoalesceRunChangeDetection)&&t(),ma(e)}},onInvoke:(n,r,o,i,s,a,c)=>{try{return ga(e),n.invoke(o,i,s,a,c)}finally{e.shouldCoalesceRunChangeDetection&&t(),ma(e)}},onHasTask:(t,n,r,o)=>{t.hasTask(r,o),n===r&&("microTask"==o.change?(e._hasPendingMicrotasks=o.microTask,pa(e),fa(e)):"macroTask"==o.change&&(e.hasPendingMacrotasks=o.macroTask))},onHandleError:(t,n,r,o)=>(t.handleError(r,o),e.runOutsideAngular(()=>e.onError.emit(o)),!1)})}(r)}static isInAngularZone(){return!0===Zone.current.get("isAngularZone")}static assertInAngularZone(){if(!da.isInAngularZone())throw new Error("Expected to be in Angular Zone, but it is not!")}static assertNotInAngularZone(){if(da.isInAngularZone())throw new Error("Expected to not be in Angular Zone, but it is!")}run(e,t,n){return this._inner.run(e,t,n)}runTask(e,t,n,r){const o=this._inner,i=o.scheduleEventTask("NgZoneEvent: "+r,e,ha,qi,qi);try{return o.runTask(i,t,n)}finally{o.cancelTask(i)}}runGuarded(e,t,n){return this._inner.runGuarded(e,t,n)}runOutsideAngular(e){return this._outer.run(e)}}const ha={};function fa(e){if(0==e._nesting&&!e.hasPendingMicrotasks&&!e.isStable)try{e._nesting++,e.onMicrotaskEmpty.emit(null)}finally{if(e._nesting--,!e.hasPendingMicrotasks)try{e.runOutsideAngular(()=>e.onStable.emit(null))}finally{e.isStable=!0}}}function pa(e){e._hasPendingMicrotasks||(e.shouldCoalesceEventChangeDetection||e.shouldCoalesceRunChangeDetection)&&-1!==e.lastRequestAnimationFrameId?e.hasPendingMicrotasks=!0:e.hasPendingMicrotasks=!1}function ga(e){e._nesting++,e.isStable&&(e.isStable=!1,e.onUnstable.emit(null))}function ma(e){e._nesting--,fa(e)}class va{constructor(){this.hasPendingMicrotasks=!1,this.hasPendingMacrotasks=!1,this.isStable=!0,this.onUnstable=new Fs,this.onMicrotaskEmpty=new Fs,this.onStable=new Fs,this.onError=new Fs}run(e,t,n){return e.apply(t,n)}runGuarded(e,t,n){return e.apply(t,n)}runOutsideAngular(e){return e()}runTask(e,t,n,r){return e.apply(t,n)}}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */class ya{constructor(e){this._ngZone=e,this._pendingCount=0,this._isZoneStable=!0,this._didWork=!1,this._callbacks=[],this.taskTrackingZone=null,this._watchAngularEvents(),e.run(()=>{this.taskTrackingZone="undefined"==typeof Zone?null:Zone.current.get("TaskTrackingZone")})}_watchAngularEvents(){this._ngZone.onUnstable.subscribe({next:()=>{this._didWork=!0,this._isZoneStable=!1}}),this._ngZone.runOutsideAngular(()=>{this._ngZone.onStable.subscribe({next:()=>{da.assertNotInAngularZone(),la(()=>{this._isZoneStable=!0,this._runCallbacksIfReady()})}})})}increasePendingRequestCount(){return this._pendingCount+=1,this._didWork=!0,this._pendingCount}decreasePendingRequestCount(){if(this._pendingCount-=1,this._pendingCount<0)throw new Error("pending async requests below zero");return this._runCallbacksIfReady(),this._pendingCount}isStable(){return this._isZoneStable&&0===this._pendingCount&&!this._ngZone.hasPendingMacrotasks}_runCallbacksIfReady(){if(this.isStable())la(()=>{for(;0!==this._callbacks.length;){let e=this._callbacks.pop();clearTimeout(e.timeoutId),e.doneCb(this._didWork)}this._didWork=!1});else{let e=this.getPendingTasks();this._callbacks=this._callbacks.filter(t=>!t.updateCb||!t.updateCb(e)||(clearTimeout(t.timeoutId),!1)),this._didWork=!0}}getPendingTasks(){return this.taskTrackingZone?this.taskTrackingZone.macroTasks.map(e=>({source:e.source,creationLocation:e.creationLocation,data:e.data})):[]}addCallback(e,t,n){let r=-1;t&&t>0&&(r=setTimeout(()=>{this._callbacks=this._callbacks.filter(e=>e.timeoutId!==r),e(this._didWork,this.getPendingTasks())},t)),this._callbacks.push({doneCb:e,timeoutId:r,updateCb:n})}whenStable(e,t,n){if(n&&!this.taskTrackingZone)throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?');this.addCallback(e,t,n),this._runCallbacksIfReady()}getPendingRequestCount(){return this._pendingCount}findProviders(e,t,n){return[]}}ya.decorators=[{type:gi}],ya.ctorParameters=()=>[{type:da}];class ba{constructor(){this._applications=new Map,wa.addToWindow(this)}registerApplication(e,t){this._applications.set(e,t)}unregisterApplication(e){this._applications.delete(e)}unregisterAllApplications(){this._applications.clear()}getTestability(e){return this._applications.get(e)||null}getAllTestabilities(){return Array.from(this._applications.values())}getAllRootElements(){return Array.from(this._applications.keys())}findTestabilityInTree(e,t=!0){return wa.findTestabilityInTree(this,e,t)}}ba.decorators=[{type:gi}],ba.ctorParameters=()=>[];let _a,wa=new class{addToWindow(e){}findTestabilityInTree(e,t,n){return null}},xa=!0,Aa=!1;
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */function Ca(){return Aa=!0,xa}let ka=function(e,t,n){const r=e.get(ca);return r.createCompiler([t]).compileModuleAsync(n)};let Ea=function(){},Ta=function(e){return e instanceof zi};const Da=new sn("AllowMultipleToken");function Ia(){return _a&&!_a.destroyed?_a:null}class Oa{constructor(e){this._injector=e,this._modules=[],this._destroyListeners=[],this._destroyed=!1}bootstrapModuleFactory(e,t){const n=function(e,t){let n;n="noop"===e?new va:("zone.js"===e?void 0:e)||new da({enableLongStackTrace:Ca(),shouldCoalesceEventChangeDetection:!!(null==t?void 0:t.ngZoneEventCoalescing),shouldCoalesceRunChangeDetection:!!(null==t?void 0:t.ngZoneRunCoalescing)});return n}(t?t.ngZone:void 0,{ngZoneEventCoalescing:t&&t.ngZoneEventCoalescing||!1,ngZoneRunCoalescing:t&&t.ngZoneRunCoalescing||!1}),r=[{provide:da,useValue:n}];return n.run(()=>{const t=Qo.create({providers:r,parent:this.injector,name:e.moduleType.name}),o=e.create(t),i=o.injector.get(nr,null);if(!i)throw new Error("No ErrorHandler. Is platform module (BrowserModule) included?");return n.runOutsideAngular(()=>{const e=n.onError.subscribe({next:e=>{i.handleError(e)}});o.onDestroy(()=>{Sa(this._modules,o),e.unsubscribe()})}),function(e,t,n){try{const r=n();return Vi(r)?r.catch(n=>{throw t.runOutsideAngular(()=>e.handleError(n)),n}):r}catch(n){throw t.runOutsideAngular(()=>e.handleError(n)),n}}(i,n,()=>{const e=o.injector.get(qs);return e.runInitializers(),e.donePromise.then(()=>(this._moduleDoBootstrap(o),o))})})}bootstrapModule(e,t=[]){const n=Ma({},t);return ka(this.injector,n,e).then(e=>this.bootstrapModuleFactory(e,n))}_moduleDoBootstrap(e){const t=e.injector.get(ja);if(e._bootstrapComponents.length>0)e._bootstrapComponents.forEach(e=>t.bootstrap(e));else{if(!e.instance.ngDoBootstrap)throw new Error(`The module ${u(e.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);e.instance.ngDoBootstrap(t)}this._modules.push(e)}onDestroy(e){this._destroyListeners.push(e)}get injector(){return this._injector}destroy(){if(this._destroyed)throw new Error("The platform has already been destroyed!");this._modules.slice().forEach(e=>e.destroy()),this._destroyListeners.forEach(e=>e()),this._destroyed=!0}get destroyed(){return this._destroyed}}function Ma(e,t){return e=Array.isArray(t)?t.reduce(Ma,e):Object.assign(Object.assign({},e),t)}Oa.decorators=[{type:gi}],Oa.ctorParameters=()=>[{type:Qo}];class ja{constructor(e,t,n,r,o){this._zone=e,this._injector=t,this._exceptionHandler=n,this._componentFactoryResolver=r,this._initStatus=o,this._bootstrapListeners=[],this._views=[],this._runningTick=!1,this._stable=!0,this.componentTypes=[],this.components=[],this._onMicrotaskEmptySubscription=this._zone.onMicrotaskEmpty.subscribe({next:()=>{this._zone.run(()=>{this.tick()})}});const c=new i.a(e=>{this._stable=this._zone.isStable&&!this._zone.hasPendingMacrotasks&&!this._zone.hasPendingMicrotasks,this._zone.runOutsideAngular(()=>{e.next(this._stable),e.complete()})}),u=new i.a(e=>{let t;this._zone.runOutsideAngular(()=>{t=this._zone.onStable.subscribe(()=>{da.assertNotInAngularZone(),la(()=>{this._stable||this._zone.hasPendingMacrotasks||this._zone.hasPendingMicrotasks||(this._stable=!0,e.next(!0))})})});const n=this._zone.onUnstable.subscribe(()=>{da.assertInAngularZone(),this._stable&&(this._stable=!1,this._zone.runOutsideAngular(()=>{e.next(!1)}))});return()=>{t.unsubscribe(),n.unsubscribe()}});this.isStable=Object(s.a)(c,u.pipe(Object(a.a)()))}bootstrap(e,t){if(!this._initStatus.done)throw new Error("Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module.");let n;n=e instanceof $i?e:this._componentFactoryResolver.resolveComponentFactory(e),this.componentTypes.push(n.componentType);const r=Ta(n)?void 0:this._injector.get(ks),o=t||n.selector,i=n.create(Qo.NULL,[],o,r),s=i.location.nativeElement,a=i.injector.get(ya,null),c=a&&i.injector.get(ba);if(a&&c&&c.registerApplication(s,a),i.onDestroy(()=>{this.detachView(i.hostView),Sa(this.components,i),c&&c.unregisterApplication(s)}),this._loadComponent(i),("undefined"==typeof ngDevMode||ngDevMode)&&Ca()){this._injector.get(Js).log("Angular is running in development mode. Call enableProdMode() to enable production mode.")}return i}tick(){if(this._runningTick)throw new Error("ApplicationRef.tick is called recursively");try{this._runningTick=!0;for(let e of this._views)e.detectChanges();if(("undefined"==typeof ngDevMode||ngDevMode)&&Ca())for(let e of this._views)e.checkNoChanges()}catch(e){this._zone.runOutsideAngular(()=>this._exceptionHandler.handleError(e))}finally{this._runningTick=!1}}attachView(e){const t=e;this._views.push(t),t.attachToAppRef(this)}detachView(e){const t=e;Sa(this._views,t),t.detachFromAppRef()}_loadComponent(e){this.attachView(e.hostView),this.tick(),this.components.push(e);this._injector.get(Ys,[]).concat(this._bootstrapListeners).forEach(t=>t(e))}ngOnDestroy(){this._views.slice().forEach(e=>e.destroy()),this._onMicrotaskEmptySubscription.unsubscribe()}get viewCount(){return this._views.length}}function Sa(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}ja.decorators=[{type:gi}],ja.ctorParameters=()=>[{type:da},{type:Qo},{type:nr},{type:Zi},{type:qs}];class Na{}const Pa={factoryPathPrefix:"",factoryPathSuffix:".ngfactory"};class Ra{constructor(e,t){this._compiler=e,this._config=t||Pa}load(e){return this._compiler instanceof aa?this.loadFactory(e):this.loadAndCompile(e)}loadAndCompile(e){let[t,r]=e.split("#");return void 0===r&&(r="default"),n(32)(t).then(e=>e[r]).then(e=>Va(e,t,r)).then(e=>this._compiler.compileModuleAsync(e))}loadFactory(e){let[t,r]=e.split("#"),o="NgFactory";return void 0===r&&(r="default",o=""),n(32)(this._config.factoryPathPrefix+t+this._config.factoryPathSuffix).then(e=>e[r+o]).then(e=>Va(e,t,r))}}function Va(e,t,n){if(!e)throw new Error(`Cannot find '${n}' in '${t}'`);return e}
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */Ra.decorators=[{type:gi}],Ra.ctorParameters=()=>[{type:aa},{type:Na,decorators:[{type:Nn}]}];new Map;!function(e,t,n=[]){const r="Platform: "+t,o=new sn(r)}(null,"core",[{provide:Gs,useValue:"unknown"},{provide:Oa,deps:[Qo]},{provide:ba,deps:[]},{provide:Js,deps:[]}]);const Fa=[{provide:ja,useClass:ja,deps:[da,Qo,nr,Zi,qs]},{provide:Ss,deps:[da],useFactory:function(e){let t=[];return e.onStable.subscribe(()=>{for(;t.length;)t.pop()()}),function(e){t.push(e)}}},{provide:qs,useClass:qs,deps:[[new Nn,zs]]},{provide:aa,useClass:aa,deps:[]},Ws,{provide:hs,useFactory:
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
function(){return ws},deps:[]},{provide:ps,useFactory:function(){return xs},deps:[]},{provide:Xs,useFactory:function(e){return e=e||("undefined"!=typeof ngI18nClosureMode&&ngI18nClosureMode&&"undefined"!=typeof goog&&"en"!==goog.LOCALE?goog.LOCALE:"en-US")},deps:[[new Sn(Xs),new Nn,new Rn]]},{provide:ea,useValue:"USD"}];class Ha{constructor(e){}}var La;Ha.decorators=[{type:Us,args:[{providers:Fa}]}],Ha.ctorParameters=()=>[{type:ja}]
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */,function(e){e[e.CreateViewNodes=0]="CreateViewNodes",e[e.CheckNoChanges=1]="CheckNoChanges",e[e.CheckNoChangesProjectedViews=2]="CheckNoChangesProjectedViews",e[e.CheckAndUpdate=3]="CheckAndUpdate",e[e.CheckAndUpdateProjectedViews=4]="CheckAndUpdateProjectedViews",e[e.Destroy=5]="Destroy"}(La||(La={}));new Map,new Map,new Map;var $a;!function(e){e[e.create=0]="create",e[e.detectChanges=1]="detectChanges",e[e.checkNoChanges=2]="checkNoChanges",e[e.destroy=3]="destroy",e[e.handleEvent=4]="handleEvent"}($a||($a={}));
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
"undefined"!=typeof ngDevMode&&ngDevMode&&(J.$localize=J.$localize||function(){throw new Error("It looks like your application or one of its dependencies is using i18n.\nAngular 9 introduced a global `$localize()` function that needs to be loaded.\nPlease run `ng add @angular/localize` from the Angular CLI.\n(For non-CLI projects, add `import '@angular/localize/init';` to your `polyfills.ts` file.\nFor server-side rendering applications add the import to your `main.server.ts` file.)")});
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */}).call(this,n(35))},function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var r=n(1),o=n(10),i=n(3),s=n(9);var a=n(19),c=n(12);var u=n(29),l=n(27);function d(e,t){if(null!=e){if(function(e){return e&&"function"==typeof e[s.a]}(e))return function(e,t){return new r.a((function(n){var r=new i.a;return r.add(t.schedule((function(){var o=e[s.a]();r.add(o.subscribe({next:function(e){r.add(t.schedule((function(){return n.next(e)})))},error:function(e){r.add(t.schedule((function(){return n.error(e)})))},complete:function(){r.add(t.schedule((function(){return n.complete()})))}}))}))),r}))}(e,t);if(Object(u.a)(e))return function(e,t){return new r.a((function(n){var r=new i.a;return r.add(t.schedule((function(){return e.then((function(e){r.add(t.schedule((function(){n.next(e),r.add(t.schedule((function(){return n.complete()})))})))}),(function(e){r.add(t.schedule((function(){return n.error(e)})))}))}))),r}))}(e,t);if(Object(l.a)(e))return Object(a.a)(e,t);if(function(e){return e&&"function"==typeof e[c.a]}(e)||"string"==typeof e)return function(e,t){if(!e)throw new Error("Iterable cannot be null");return new r.a((function(n){var r,o=new i.a;return o.add((function(){r&&"function"==typeof r.return&&r.return()})),o.add(t.schedule((function(){r=e[c.a](),o.add(t.schedule((function(){if(!n.closed){var e,t;try{var o=r.next();e=o.value,t=o.done}catch(e){return void n.error(e)}t?n.complete():(n.next(e),this.schedule())}})))}))),o}))}(e,t)}throw new TypeError((null!==e&&typeof e||e)+" is not observable")}function h(e,t){return t?d(e,t):e instanceof r.a?e:new r.a(Object(o.a)(e))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(6),o=n(11),i={closed:!0,next:function(e){},error:function(e){if(r.a.useDeprecatedSynchronousErrorHandling)throw e;Object(o.a)(e)},complete:function(){}}},function(e,t,n){"use strict";function r(e){return null!==e&&"object"==typeof e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";function r(e){return e}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return e&&"number"==typeof e.length&&"function"!=typeof e}},function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){return function(t){for(var n=0,r=e.length;n<r&&!t.closed;n++)t.next(e[n]);t.complete()}}},function(e,t,n){"use strict";function r(e){return!!e&&"function"!=typeof e.subscribe&&"function"==typeof e.then}n.d(t,"a",(function(){return r}))},function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(33),o=n(26);function i(e){return void 0===e&&(e=Number.POSITIVE_INFINITY),Object(r.a)(o.a,e)}},function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(0),o=function(e){function t(t,n){var r=e.call(this)||this;return r.subject=t,r.subscriber=n,r.closed=!1,r}return r.a(t,e),t.prototype.unsubscribe=function(){if(!this.closed){this.closed=!0;var e=this.subject,t=e.observers;if(this.subject=null,t&&0!==t.length&&!e.isStopped&&!e.closed){var n=t.indexOf(this.subscriber);-1!==n&&t.splice(n,1)}}},t}(n(3).a)},function(e,t){function n(e){return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}))}n.keys=function(){return[]},n.resolve=n,e.exports=n,n.id=32},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(0),o=n(20),i=n(23),s=n(4);function a(e,t,n){return void 0===n&&(n=Number.POSITIVE_INFINITY),"function"==typeof t?function(r){return r.pipe(a((function(n,r){return Object(i.a)(e(n,r)).pipe(Object(o.a)((function(e,o){return t(n,e,r,o)})))}),n))}:("number"==typeof t&&(n=t),function(t){return t.lift(new c(e,n))})}var c=function(){function e(e,t){void 0===t&&(t=Number.POSITIVE_INFINITY),this.project=e,this.concurrent=t}return e.prototype.call=function(e,t){return t.subscribe(new u(e,this.project,this.concurrent))},e}(),u=function(e){function t(t,n,r){void 0===r&&(r=Number.POSITIVE_INFINITY);var o=e.call(this,t)||this;return o.project=n,o.concurrent=r,o.hasCompleted=!1,o.buffer=[],o.active=0,o.index=0,o}return r.a(t,e),t.prototype._next=function(e){this.active<this.concurrent?this._tryNext(e):this.buffer.push(e)},t.prototype._tryNext=function(e){var t,n=this.index++;try{t=this.project(e,n)}catch(e){return void this.destination.error(e)}this.active++,this._innerSub(t)},t.prototype._innerSub=function(e){var t=new s.a(this),n=this.destination;n.add(t);var r=Object(s.c)(e,t);r!==t&&n.add(r)},t.prototype._complete=function(){this.hasCompleted=!0,0===this.active&&0===this.buffer.length&&this.destination.complete(),this.unsubscribe()},t.prototype.notifyNext=function(e){this.destination.next(e)},t.prototype.notifyComplete=function(){var e=this.buffer;this.active--,e.length>0?this._next(e.shift()):0===this.active&&this.hasCompleted&&this.destination.complete()},t}(s.b)},function(e,t,n){var r,o,i;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,o=[e],void 0===(i="function"==typeof(r=function(e){"use strict";if("undefined"==typeof browser||Object.getPrototypeOf(browser)!==Object.prototype){const t="The message port closed before a response was received.",n="Returning a Promise is the preferred way to send a reply from an onMessage/onMessageExternal listener, as the sendResponse will be removed from the specs (See https://developer.mozilla.org/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)",r=e=>{const r={alarms:{clear:{minArgs:0,maxArgs:1},clearAll:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getAll:{minArgs:0,maxArgs:0}},bookmarks:{create:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},getChildren:{minArgs:1,maxArgs:1},getRecent:{minArgs:1,maxArgs:1},getSubTree:{minArgs:1,maxArgs:1},getTree:{minArgs:0,maxArgs:0},move:{minArgs:2,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeTree:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}},browserAction:{disable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},enable:{minArgs:0,maxArgs:1,fallbackToNoCallback:!0},getBadgeBackgroundColor:{minArgs:1,maxArgs:1},getBadgeText:{minArgs:1,maxArgs:1},getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},openPopup:{minArgs:0,maxArgs:0},setBadgeBackgroundColor:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setBadgeText:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},browsingData:{remove:{minArgs:2,maxArgs:2},removeCache:{minArgs:1,maxArgs:1},removeCookies:{minArgs:1,maxArgs:1},removeDownloads:{minArgs:1,maxArgs:1},removeFormData:{minArgs:1,maxArgs:1},removeHistory:{minArgs:1,maxArgs:1},removeLocalStorage:{minArgs:1,maxArgs:1},removePasswords:{minArgs:1,maxArgs:1},removePluginData:{minArgs:1,maxArgs:1},settings:{minArgs:0,maxArgs:0}},commands:{getAll:{minArgs:0,maxArgs:0}},contextMenus:{remove:{minArgs:1,maxArgs:1},removeAll:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},cookies:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:1,maxArgs:1},getAllCookieStores:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},devtools:{inspectedWindow:{eval:{minArgs:1,maxArgs:2,singleCallbackArg:!1}},panels:{create:{minArgs:3,maxArgs:3,singleCallbackArg:!0}}},downloads:{cancel:{minArgs:1,maxArgs:1},download:{minArgs:1,maxArgs:1},erase:{minArgs:1,maxArgs:1},getFileIcon:{minArgs:1,maxArgs:2},open:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},pause:{minArgs:1,maxArgs:1},removeFile:{minArgs:1,maxArgs:1},resume:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},extension:{isAllowedFileSchemeAccess:{minArgs:0,maxArgs:0},isAllowedIncognitoAccess:{minArgs:0,maxArgs:0}},history:{addUrl:{minArgs:1,maxArgs:1},deleteAll:{minArgs:0,maxArgs:0},deleteRange:{minArgs:1,maxArgs:1},deleteUrl:{minArgs:1,maxArgs:1},getVisits:{minArgs:1,maxArgs:1},search:{minArgs:1,maxArgs:1}},i18n:{detectLanguage:{minArgs:1,maxArgs:1},getAcceptLanguages:{minArgs:0,maxArgs:0}},identity:{launchWebAuthFlow:{minArgs:1,maxArgs:1}},idle:{queryState:{minArgs:1,maxArgs:1}},management:{get:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},getSelf:{minArgs:0,maxArgs:0},setEnabled:{minArgs:2,maxArgs:2},uninstallSelf:{minArgs:0,maxArgs:1}},notifications:{clear:{minArgs:1,maxArgs:1},create:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:0},getPermissionLevel:{minArgs:0,maxArgs:0},update:{minArgs:2,maxArgs:2}},pageAction:{getPopup:{minArgs:1,maxArgs:1},getTitle:{minArgs:1,maxArgs:1},hide:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setIcon:{minArgs:1,maxArgs:1},setPopup:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},setTitle:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0},show:{minArgs:1,maxArgs:1,fallbackToNoCallback:!0}},permissions:{contains:{minArgs:1,maxArgs:1},getAll:{minArgs:0,maxArgs:0},remove:{minArgs:1,maxArgs:1},request:{minArgs:1,maxArgs:1}},runtime:{getBackgroundPage:{minArgs:0,maxArgs:0},getPlatformInfo:{minArgs:0,maxArgs:0},openOptionsPage:{minArgs:0,maxArgs:0},requestUpdateCheck:{minArgs:0,maxArgs:0},sendMessage:{minArgs:1,maxArgs:3},sendNativeMessage:{minArgs:2,maxArgs:2},setUninstallURL:{minArgs:1,maxArgs:1}},sessions:{getDevices:{minArgs:0,maxArgs:1},getRecentlyClosed:{minArgs:0,maxArgs:1},restore:{minArgs:0,maxArgs:1}},storage:{local:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}},managed:{get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1}},sync:{clear:{minArgs:0,maxArgs:0},get:{minArgs:0,maxArgs:1},getBytesInUse:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}}},tabs:{captureVisibleTab:{minArgs:0,maxArgs:2},create:{minArgs:1,maxArgs:1},detectLanguage:{minArgs:0,maxArgs:1},discard:{minArgs:0,maxArgs:1},duplicate:{minArgs:1,maxArgs:1},executeScript:{minArgs:1,maxArgs:2},get:{minArgs:1,maxArgs:1},getCurrent:{minArgs:0,maxArgs:0},getZoom:{minArgs:0,maxArgs:1},getZoomSettings:{minArgs:0,maxArgs:1},highlight:{minArgs:1,maxArgs:1},insertCSS:{minArgs:1,maxArgs:2},move:{minArgs:2,maxArgs:2},query:{minArgs:1,maxArgs:1},reload:{minArgs:0,maxArgs:2},remove:{minArgs:1,maxArgs:1},removeCSS:{minArgs:1,maxArgs:2},sendMessage:{minArgs:2,maxArgs:3},setZoom:{minArgs:1,maxArgs:2},setZoomSettings:{minArgs:1,maxArgs:2},update:{minArgs:1,maxArgs:2}},topSites:{get:{minArgs:0,maxArgs:0}},webNavigation:{getAllFrames:{minArgs:1,maxArgs:1},getFrame:{minArgs:1,maxArgs:1}},webRequest:{handlerBehaviorChanged:{minArgs:0,maxArgs:0}},windows:{create:{minArgs:0,maxArgs:1},get:{minArgs:1,maxArgs:2},getAll:{minArgs:0,maxArgs:1},getCurrent:{minArgs:0,maxArgs:1},getLastFocused:{minArgs:0,maxArgs:1},remove:{minArgs:1,maxArgs:1},update:{minArgs:2,maxArgs:2}}};if(0===Object.keys(r).length)throw new Error("api-metadata.json has not been included in browser-polyfill");class o extends WeakMap{constructor(e,t){super(t),this.createItem=e}get(e){return this.has(e)||this.set(e,this.createItem(e)),super.get(e)}}const i=(t,n)=>(...r)=>{e.runtime.lastError?t.reject(e.runtime.lastError):n.singleCallbackArg||r.length<=1&&!1!==n.singleCallbackArg?t.resolve(r[0]):t.resolve(r)},s=e=>1==e?"argument":"arguments",a=(e,t,n)=>new Proxy(t,{apply:(t,r,o)=>n.call(r,e,...o)});let c=Function.call.bind(Object.prototype.hasOwnProperty);const u=(e,t={},n={})=>{let r=Object.create(null),o={has:(t,n)=>n in e||n in r,get(o,l,d){if(l in r)return r[l];if(!(l in e))return;let h=e[l];if("function"==typeof h)if("function"==typeof t[l])h=a(e,e[l],t[l]);else if(c(n,l)){let t=((e,t)=>function(n,...r){if(r.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${r.length}`);if(r.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${r.length}`);return new Promise((o,s)=>{if(t.fallbackToNoCallback)try{n[e](...r,i({resolve:o,reject:s},t))}catch(i){console.warn(e+" API method doesn't seem to support the callback parameter, falling back to call it without a callback: ",i),n[e](...r),t.fallbackToNoCallback=!1,t.noCallback=!0,o()}else t.noCallback?(n[e](...r),o()):n[e](...r,i({resolve:o,reject:s},t))})})(l,n[l]);h=a(e,e[l],t)}else h=h.bind(e);else if("object"==typeof h&&null!==h&&(c(t,l)||c(n,l)))h=u(h,t[l],n[l]);else{if(!c(n,"*"))return Object.defineProperty(r,l,{configurable:!0,enumerable:!0,get:()=>e[l],set(t){e[l]=t}}),h;h=u(h,t[l],n["*"])}return r[l]=h,h},set:(t,n,o,i)=>(n in r?r[n]=o:e[n]=o,!0),defineProperty:(e,t,n)=>Reflect.defineProperty(r,t,n),deleteProperty:(e,t)=>Reflect.deleteProperty(r,t)},l=Object.create(e);return new Proxy(l,o)},l=e=>({addListener(t,n,...r){t.addListener(e.get(n),...r)},hasListener:(t,n)=>t.hasListener(e.get(n)),removeListener(t,n){t.removeListener(e.get(n))}});let d=!1;const h=new o(e=>"function"!=typeof e?e:function(t,r,o){let i,s,a=!1,c=new Promise(e=>{i=function(t){d||(console.warn(n,(new Error).stack),d=!0),a=!0,e(t)}});try{s=e(t,r,i)}catch(e){s=Promise.reject(e)}const u=!0!==s&&(l=s)&&"object"==typeof l&&"function"==typeof l.then;var l;if(!0!==s&&!u&&!a)return!1;const h=e=>{e.then(e=>{o(e)},e=>{let t;t=e&&(e instanceof Error||"string"==typeof e.message)?e.message:"An unexpected error occurred",o({__mozWebExtensionPolyfillReject__:!0,message:t})}).catch(e=>{console.error("Failed to send onMessage rejected reply",e)})};return h(u?s:c),!0}),f=({reject:n,resolve:r},o)=>{e.runtime.lastError?e.runtime.lastError.message===t?r():n(e.runtime.lastError):o&&o.__mozWebExtensionPolyfillReject__?n(new Error(o.message)):r(o)},p=(e,t,n,...r)=>{if(r.length<t.minArgs)throw new Error(`Expected at least ${t.minArgs} ${s(t.minArgs)} for ${e}(), got ${r.length}`);if(r.length>t.maxArgs)throw new Error(`Expected at most ${t.maxArgs} ${s(t.maxArgs)} for ${e}(), got ${r.length}`);return new Promise((e,t)=>{const o=f.bind(null,{resolve:e,reject:t});r.push(o),n.sendMessage(...r)})},g={runtime:{onMessage:l(h),onMessageExternal:l(h),sendMessage:p.bind(null,"sendMessage",{minArgs:1,maxArgs:3})},tabs:{sendMessage:p.bind(null,"sendMessage",{minArgs:2,maxArgs:3})}},m={clear:{minArgs:1,maxArgs:1},get:{minArgs:1,maxArgs:1},set:{minArgs:1,maxArgs:1}};return r.privacy={network:{"*":m},services:{"*":m},websites:{"*":m}},u(e,g,r)};if("object"!=typeof chrome||!chrome||!chrome.runtime||!chrome.runtime.id)throw new Error("This script should only be loaded in a browser extension.");e.exports=r(chrome)}else e.exports=browser})?r.apply(t,o):r)||(e.exports=i)},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n},function(e,t,n){"use strict";n.r(t);var r,o=n(5);!function(e){e.Chrome="Chrome",e.Decentr="Decentr",e.Edge="Edge",e.Firefox="Firefox",e.IE="IE",e.Opera="Opera",e.Safari="Safari",e.Samsung="Samsung",e.Unknown="Unknown"}(r||(r={}));var i=n(1),s=n(23),a=new i.a((function(e){return e.complete()}));function c(e){return e?function(e){return new i.a((function(t){return e.schedule((function(){return t.complete()}))}))}(e):a}function u(e){return new i.a((function(t){var n;try{n=e()}catch(e){return void t.error(e)}return(n?Object(s.a)(n):c()).subscribe(t)}))}var l=n(33),d=n(7),h=n(21),f=n(19);function p(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[e.length-1];return Object(d.a)(n)?(e.pop(),Object(f.a)(e,n)):Object(h.a)(e)}var g=n(30);function m(){return Object(g.a)(1)}function v(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return m()(p.apply(void 0,e))}function y(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e[e.length-1];return Object(d.a)(n)?(e.pop(),function(t){return v(e,t,n)}):function(t){return v(e,t)}}var b=n(20);const _=(()=>{const e=window.navigator.userAgent;return e.indexOf("Decentr")>-1?r.Decentr:e.indexOf("Firefox")>-1?r.Firefox:e.indexOf("SamsungBrowser")>-1?r.Samsung:e.indexOf("Opera")>-1||e.indexOf("OPR")>-1?r.Opera:e.indexOf("Trident")>-1?r.IE:e.indexOf("Edge")>-1?r.Edge:e.indexOf("Chrome")>-1?r.Chrome:e.indexOf("Safari")>-1?r.Safari:r.Unknown})();var w;!function(e){e.UnknownBrowser="Unknown browser"}(w||(w={}));const x=()=>u(()=>(e=>{switch(_){case r.Decentr:case r.Chrome:return new Promise(t=>{chrome.proxy.settings.get(e,t)});case r.Firefox:return o.browser.proxy.settings.get({});default:throw new Error(w.UnknownBrowser)}})({})).pipe(Object(l.a)(e=>new i.a(e=>{const t=t=>e.next(t);return o.browser.proxy.settings.onChange.addListener(t),()=>o.browser.proxy.settings.onChange.removeListener(t)}).pipe(y(e))),Object(b.a)(e=>{var t,n,o,i,s,a,c,u;return Object.assign(Object.assign(Object.assign({levelOfControl:e.levelOfControl},_===r.Chrome&&(null===(n=null===(t=e.value)||void 0===t?void 0:t.rules)||void 0===n?void 0:n.singleProxy)),_===r.Decentr&&(null===(i=null===(o=e.value)||void 0===o?void 0:o.rules)||void 0===i?void 0:i.singleProxy)),_===r.Firefox&&"controlled_by_this_extension"===e.levelOfControl&&{host:null===(a=null===(s=e.value)||void 0===s?void 0:s.http)||void 0===a?void 0:a.split(":")[0],port:null===(u=null===(c=e.value)||void 0===c?void 0:c.http)||void 0===u?void 0:u.split(":")[1]})})),A=()=>x().pipe(Object(b.a)(e=>"controlled_by_this_extension"===e.levelOfControl)),C=()=>(()=>{switch(_){case r.Decentr:case r.Chrome:return new Promise(e=>{chrome.proxy.settings.clear({},e)});default:return o.browser.proxy.settings.clear({})}})();function k(e,t){function n(){return!n.pred.apply(n.thisArg,arguments)}return n.pred=e,n.thisArg=t,n}var E=n(10),T=n(0),D=n(2);function I(e,t){return function(n){return n.lift(new O(e,t))}}var O=function(){function e(e,t){this.predicate=e,this.thisArg=t}return e.prototype.call=function(e,t){return t.subscribe(new M(e,this.predicate,this.thisArg))},e}(),M=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.predicate=n,o.thisArg=r,o.count=0,o}return T.a(t,e),t.prototype._next=function(e){var t;try{t=this.predicate.call(this.thisArg,e,this.count++)}catch(e){return void this.destination.error(e)}t&&this.destination.next(e)},t}(D.a);var j=n(4);var S=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){var n=new N(e),r=Object(j.c)(this.notifier,new j.a(n));return r&&!n.seenValue?(n.add(r),t.subscribe(n)):n},e}(),N=function(e){function t(t){var n=e.call(this,t)||this;return n.seenValue=!1,n}return T.a(t,e),t.prototype.notifyNext=function(){this.seenValue=!0,this.complete()},t.prototype.notifyComplete=function(){},t}(j.b),P=n(8);var R=function(){function e(e){this.notifier=e}return e.prototype.call=function(e,t){return t.subscribe(new V(e,this.notifier,t))},e}(),V=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.notifier=n,o.source=r,o.sourceIsBeingSubscribedTo=!0,o}return T.a(t,e),t.prototype.notifyNext=function(){this.sourceIsBeingSubscribedTo=!0,this.source.subscribe(this)},t.prototype.notifyComplete=function(){if(!1===this.sourceIsBeingSubscribedTo)return e.prototype.complete.call(this)},t.prototype.complete=function(){if(this.sourceIsBeingSubscribedTo=!1,!this.isStopped){if(this.retries||this.subscribeToRetries(),!this.retriesSubscription||this.retriesSubscription.closed)return e.prototype.complete.call(this);this._unsubscribeAndRecycle(),this.notifications.next(void 0)}},t.prototype._unsubscribe=function(){var e=this.notifications,t=this.retriesSubscription;e&&(e.unsubscribe(),this.notifications=void 0),t&&(t.unsubscribe(),this.retriesSubscription=void 0),this.retries=void 0},t.prototype._unsubscribeAndRecycle=function(){var t=this._unsubscribe;return this._unsubscribe=null,e.prototype._unsubscribeAndRecycle.call(this),this._unsubscribe=t,this},t.prototype.subscribeToRetries=function(){var t;this.notifications=new P.a;try{t=(0,this.notifier)(this.notifications)}catch(t){return e.prototype.complete.call(this)}this.retries=t,this.retriesSubscription=Object(j.c)(t,new j.a(this))},t}(j.b);const F={username:"user-decentr",password:"D>$en!rsdj343vs1p[db#"},H=()=>{const[e,t]=(n=A(),[I(r=Boolean,s)(new i.a(Object(E.a)(n))),I(k(r,s))(new i.a(Object(E.a)(n)))]);var n,r,s,a;return(()=>{const e=o.browser.webRequest.onAuthRequired,t=()=>({authCredentials:F});return new i.a(()=>(e.addListener(t,{urls:["<all_urls>"]},["blocking"]),()=>e.removeListener(t)))})().pipe((a=t,function(e){return e.lift(new S(a))}),function(e){return function(t){return t.lift(new R(e))}}(()=>e))};var L=n(3),$=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r.pending=!1,r}return T.a(t,e),t.prototype.schedule=function(e,t){if(void 0===t&&(t=0),this.closed)return this;this.state=e;var n=this.id,r=this.scheduler;return null!=n&&(this.id=this.recycleAsyncId(r,n,t)),this.pending=!0,this.delay=t,this.id=this.id||this.requestAsyncId(r,this.id,t),this},t.prototype.requestAsyncId=function(e,t,n){return void 0===n&&(n=0),setInterval(e.flush.bind(e,this),n)},t.prototype.recycleAsyncId=function(e,t,n){if(void 0===n&&(n=0),null!==n&&this.delay===n&&!1===this.pending)return t;clearInterval(t)},t.prototype.execute=function(e,t){if(this.closed)return new Error("executing a cancelled action");this.pending=!1;var n=this._execute(e,t);if(n)return n;!1===this.pending&&null!=this.id&&(this.id=this.recycleAsyncId(this.scheduler,this.id,null))},t.prototype._execute=function(e,t){var n=!1,r=void 0;try{this.work(e)}catch(e){n=!0,r=!!e&&e||new Error(e)}if(n)return this.unsubscribe(),r},t.prototype._unsubscribe=function(){var e=this.id,t=this.scheduler,n=t.actions,r=n.indexOf(this);this.work=null,this.state=null,this.pending=!1,this.scheduler=null,-1!==r&&n.splice(r,1),null!=e&&(this.id=this.recycleAsyncId(t,e,null)),this.delay=null},t}(function(e){function t(t,n){return e.call(this)||this}return T.a(t,e),t.prototype.schedule=function(e,t){return void 0===t&&(t=0),this},t}(L.a)),B=function(){function e(t,n){void 0===n&&(n=e.now),this.SchedulerAction=t,this.now=n}return e.prototype.schedule=function(e,t,n){return void 0===t&&(t=0),new this.SchedulerAction(this,e).schedule(n,t)},e.now=function(){return Date.now()},e}(),U=function(e){function t(n,r){void 0===r&&(r=B.now);var o=e.call(this,n,(function(){return t.delegate&&t.delegate!==o?t.delegate.now():r()}))||this;return o.actions=[],o.active=!1,o.scheduled=void 0,o}return T.a(t,e),t.prototype.schedule=function(n,r,o){return void 0===r&&(r=0),t.delegate&&t.delegate!==this?t.delegate.schedule(n,r,o):e.prototype.schedule.call(this,n,r,o)},t.prototype.flush=function(e){var t=this.actions;if(this.active)t.push(e);else{var n;this.active=!0;do{if(n=e.execute(e.state,e.delay))break}while(e=t.shift());if(this.active=!1,n){for(;e=t.shift();)e.unsubscribe();throw n}}},t}(B),Z=new U($),z=n(18);function q(e){return!Object(z.a)(e)&&e-parseFloat(e)+1>=0}function W(e){var t=e.index,n=e.period,r=e.subscriber;if(r.next(t),!r.closed){if(-1===n)return r.complete();e.index=t+1,this.schedule(e,n)}}var Q=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return T.a(t,e),t.prototype.notifyNext=function(e,t,n,r,o){this.destination.next(t)},t.prototype.notifyError=function(e,t){this.destination.error(e)},t.prototype.notifyComplete=function(e){this.destination.complete()},t}(D.a),K=function(e){function t(t,n,r){var o=e.call(this)||this;return o.parent=t,o.outerValue=n,o.outerIndex=r,o.index=0,o}return T.a(t,e),t.prototype._next=function(e){this.parent.notifyNext(this.outerValue,e,this.outerIndex,this.index++,this)},t.prototype._error=function(e){this.parent.notifyError(e,this),this.unsubscribe()},t.prototype._complete=function(){this.parent.notifyComplete(this),this.unsubscribe()},t}(D.a);function G(e,t,n,r,o){if(void 0===o&&(o=new K(e,n,r)),!o.closed)return t instanceof i.a?t.subscribe(o):Object(E.a)(t)(o)}var Y={};var J=function(){function e(e){this.resultSelector=e}return e.prototype.call=function(e,t){return t.subscribe(new X(e,this.resultSelector))},e}(),X=function(e){function t(t,n){var r=e.call(this,t)||this;return r.resultSelector=n,r.active=0,r.values=[],r.observables=[],r}return T.a(t,e),t.prototype._next=function(e){this.values.push(Y),this.observables.push(e)},t.prototype._complete=function(){var e=this.observables,t=e.length;if(0===t)this.destination.complete();else{this.active=t,this.toRespond=t;for(var n=0;n<t;n++){var r=e[n];this.add(G(this,r,void 0,n))}}},t.prototype.notifyComplete=function(e){0==(this.active-=1)&&this.destination.complete()},t.prototype.notifyNext=function(e,t,n){var r=this.values,o=r[n],i=this.toRespond?o===Y?--this.toRespond:this.toRespond:0;r[n]=t,0===i&&(this.resultSelector?this._tryResultSelector(r):this.destination.next(r.slice()))},t.prototype._tryResultSelector=function(e){var t;try{t=this.resultSelector.apply(this,e)}catch(e){return void this.destination.error(e)}this.destination.next(t)},t}(Q),ee=n(37);function te(e,t){return"function"==typeof t?function(n){return n.pipe(te((function(n,r){return Object(s.a)(e(n,r)).pipe(Object(b.a)((function(e,o){return t(n,e,r,o)})))})))}:function(t){return t.lift(new ne(e))}}var ne=function(){function e(e){this.project=e}return e.prototype.call=function(e,t){return t.subscribe(new re(e,this.project))},e}(),re=function(e){function t(t,n){var r=e.call(this,t)||this;return r.project=n,r.index=0,r}return T.a(t,e),t.prototype._next=function(e){var t,n=this.index++;try{t=this.project(e,n)}catch(e){return void this.destination.error(e)}this._innerSub(t)},t.prototype._innerSub=function(e){var t=this.innerSubscription;t&&t.unsubscribe();var n=new j.a(this),r=this.destination;r.add(n),this.innerSubscription=Object(j.c)(e,n),this.innerSubscription!==n&&r.add(this.innerSubscription)},t.prototype._complete=function(){var t=this.innerSubscription;t&&!t.closed||e.prototype._complete.call(this),this.unsubscribe()},t.prototype._unsubscribe=function(){this.innerSubscription=void 0},t.prototype.notifyComplete=function(){this.innerSubscription=void 0,this.isStopped&&e.prototype._complete.call(this)},t.prototype.notifyNext=function(e){this.destination.next(e)},t}(j.b);function oe(){}var ie=n(15);var se=function(){function e(e,t,n){this.nextOrObserver=e,this.error=t,this.complete=n}return e.prototype.call=function(e,t){return t.subscribe(new ae(e,this.nextOrObserver,this.error,this.complete))},e}(),ae=function(e){function t(t,n,r,o){var i=e.call(this,t)||this;return i._tapNext=oe,i._tapError=oe,i._tapComplete=oe,i._tapError=r||oe,i._tapComplete=o||oe,Object(ie.a)(n)?(i._context=i,i._tapNext=n):n&&(i._context=n,i._tapNext=n.next||oe,i._tapError=n.error||oe,i._tapComplete=n.complete||oe),i}return T.a(t,e),t.prototype._next=function(e){try{this._tapNext.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.next(e)},t.prototype._error=function(e){try{this._tapError.call(this._context,e)}catch(e){return void this.destination.error(e)}this.destination.error(e)},t.prototype._complete=function(){try{this._tapComplete.call(this._context)}catch(e){return void this.destination.error(e)}return this.destination.complete()},t}(D.a),ce=n(38);var ue=function(){function e(e){this.value=e}return e.prototype.call=function(e,t){return t.subscribe(new le(e,this.value))},e}(),le=function(e){function t(t,n){var r=e.call(this,t)||this;return r.value=n,r}return T.a(t,e),t.prototype._next=function(e){this.destination.next(this.value)},t}(D.a);function de(e){return function(t){var n=new he(e),r=t.lift(n);return n.caught=r}}var he=function(){function e(e){this.selector=e}return e.prototype.call=function(e,t){return t.subscribe(new fe(e,this.selector,this.caught))},e}(),fe=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.selector=n,o.caught=r,o}return T.a(t,e),t.prototype.error=function(t){if(!this.isStopped){var n=void 0;try{n=this.selector(t,this.caught)}catch(t){return void e.prototype.error.call(this,t)}this._unsubscribeAndRecycle();var r=new j.a(this);this.add(r);var o=Object(j.c)(n,r);o!==r&&this.add(o)}},t}(j.b);function pe(e,t,n,r){var o,i=arguments.length,s=i<3?t:null===r?r=Object.getOwnPropertyDescriptor(t,n):r;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)s=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)(o=e[a])&&(s=(i<3?o(s):i>3?o(t,n,s):o(t,n))||s);return i>3&&s&&Object.defineProperty(t,n,s),s}function ge(e,t,n,r){return new(n||(n=Promise))((function(o,i){function s(e){try{c(r.next(e))}catch(e){i(e)}}function a(e){try{c(r.throw(e))}catch(e){i(e)}}function c(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}c((r=r.apply(e,t||[])).next())}))}Object.create;Object.create;var me=n(22);var ve,ye=function(){function e(e,t){this.notifier=e,this.source=t}return e.prototype.call=function(e,t){return t.subscribe(new be(e,this.notifier,this.source))},e}(),be=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.notifier=n,o.source=r,o}return T.a(t,e),t.prototype.error=function(t){if(!this.isStopped){var n=this.errors,r=this.retries,o=this.retriesSubscription;if(r)this.errors=void 0,this.retriesSubscription=void 0;else{n=new P.a;try{r=(0,this.notifier)(n)}catch(t){return e.prototype.error.call(this,t)}o=Object(j.c)(r,new j.a(this))}this._unsubscribeAndRecycle(),this.errors=n,this.retries=r,this.retriesSubscription=o,n.next(t)}},t.prototype._unsubscribe=function(){var e=this.errors,t=this.retriesSubscription;e&&(e.unsubscribe(),this.errors=void 0),t&&(t.unsubscribe(),this.retriesSubscription=void 0),this.retries=void 0},t.prototype.notifyNext=function(){var e=this._unsubscribe;this._unsubscribe=null,this._unsubscribeAndRecycle(),this._unsubscribe=e,this.source.subscribe(this)},t}(j.b);function _e(e){var t=e.error;e.subscriber.error(t)}ve||(ve={});var we=function(){function e(e,t,n){this.kind=e,this.value=t,this.error=n,this.hasValue="N"===e}return e.prototype.observe=function(e){switch(this.kind){case"N":return e.next&&e.next(this.value);case"E":return e.error&&e.error(this.error);case"C":return e.complete&&e.complete()}},e.prototype.do=function(e,t,n){switch(this.kind){case"N":return e&&e(this.value);case"E":return t&&t(this.error);case"C":return n&&n()}},e.prototype.accept=function(e,t,n){return e&&"function"==typeof e.next?this.observe(e):this.do(e,t,n)},e.prototype.toObservable=function(){var e,t;switch(this.kind){case"N":return p(this.value);case"E":return e=this.error,t?new i.a((function(n){return t.schedule(_e,0,{error:e,subscriber:n})})):new i.a((function(t){return t.error(e)}));case"C":return c()}throw new Error("unexpected notification kind value")},e.createNext=function(t){return void 0!==t?new e("N",t):e.undefinedValueNotification},e.createError=function(t){return new e("E",void 0,t)},e.createComplete=function(){return e.completeNotification},e.completeNotification=new e("C"),e.undefinedValueNotification=new e("N",void 0),e}();function xe(e,t){void 0===t&&(t=Z);var n,r=(n=e)instanceof Date&&!isNaN(+n)?+e-t.now():Math.abs(e);return function(e){return e.lift(new Ae(r,t))}}var Ae=function(){function e(e,t){this.delay=e,this.scheduler=t}return e.prototype.call=function(e,t){return t.subscribe(new Ce(e,this.delay,this.scheduler))},e}(),Ce=function(e){function t(t,n,r){var o=e.call(this,t)||this;return o.delay=n,o.scheduler=r,o.queue=[],o.active=!1,o.errored=!1,o}return T.a(t,e),t.dispatch=function(e){for(var t=e.source,n=t.queue,r=e.scheduler,o=e.destination;n.length>0&&n[0].time-r.now()<=0;)n.shift().notification.observe(o);if(n.length>0){var i=Math.max(0,n[0].time-r.now());this.schedule(e,i)}else this.unsubscribe(),t.active=!1},t.prototype._schedule=function(e){this.active=!0,this.destination.add(e.schedule(t.dispatch,this.delay,{source:this,destination:this.destination,scheduler:e}))},t.prototype.scheduleNotification=function(e){if(!0!==this.errored){var t=this.scheduler,n=new ke(t.now()+this.delay,e);this.queue.push(n),!1===this.active&&this._schedule(t)}},t.prototype._next=function(e){this.scheduleNotification(we.createNext(e))},t.prototype._error=function(e){this.errored=!0,this.queue=[],this.destination.error(e),this.unsubscribe()},t.prototype._complete=function(){this.scheduleNotification(we.createComplete()),this.unsubscribe()},t}(D.a),ke=function(){return function(e,t){this.time=e,this.notification=t}}(),Ee=function(){function e(){return Error.call(this),this.message="argument out of range",this.name="ArgumentOutOfRangeError",this}return e.prototype=Object.create(Error.prototype),e}();function Te(e){return function(t){return 0===e?c():t.lift(new De(e))}}var De=function(){function e(e){if(this.total=e,this.total<0)throw new Ee}return e.prototype.call=function(e,t){return t.subscribe(new Ie(e,this.total))},e}(),Ie=function(e){function t(t,n){var r=e.call(this,t)||this;return r.total=n,r.count=0,r}return T.a(t,e),t.prototype._next=function(e){var t=this.total,n=++this.count;n<=t&&(this.destination.next(e),n===t&&(this.destination.complete(),this.unsubscribe()))},t}(D.a);function Oe(e,t){return function(n){for(var r=n,o=0;o<t;o++){var i=null!=r?r[e[o]]:void 0;if(void 0===i)return;r=i}return r}}var Me=function(e){function t(t,n){var r=e.call(this,t,n)||this;return r.scheduler=t,r.work=n,r}return T.a(t,e),t.prototype.schedule=function(t,n){return void 0===n&&(n=0),n>0?e.prototype.schedule.call(this,t,n):(this.delay=n,this.state=t,this.scheduler.flush(this),this)},t.prototype.execute=function(t,n){return n>0||this.closed?e.prototype.execute.call(this,t,n):this._execute(t,n)},t.prototype.requestAsyncId=function(t,n,r){return void 0===r&&(r=0),null!==r&&r>0||null===r&&this.delay>0?e.prototype.requestAsyncId.call(this,t,n,r):t.flush(this)},t}($),je=new(function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return T.a(t,e),t}(U))(Me);var Se=function(e){function t(t,n,r){void 0===r&&(r=0);var o=e.call(this,t)||this;return o.scheduler=n,o.delay=r,o}return T.a(t,e),t.dispatch=function(e){var t=e.notification,n=e.destination;t.observe(n),this.unsubscribe()},t.prototype.scheduleMessage=function(e){this.destination.add(this.scheduler.schedule(t.dispatch,this.delay,new Ne(e,this.destination)))},t.prototype._next=function(e){this.scheduleMessage(we.createNext(e))},t.prototype._error=function(e){this.scheduleMessage(we.createError(e)),this.unsubscribe()},t.prototype._complete=function(){this.scheduleMessage(we.createComplete()),this.unsubscribe()},t}(D.a),Ne=function(){return function(e,t){this.notification=e,this.destination=t}}(),Pe=n(13),Re=n(31),Ve=function(e){function t(t,n,r){void 0===t&&(t=Number.POSITIVE_INFINITY),void 0===n&&(n=Number.POSITIVE_INFINITY);var o=e.call(this)||this;return o.scheduler=r,o._events=[],o._infiniteTimeWindow=!1,o._bufferSize=t<1?1:t,o._windowTime=n<1?1:n,n===Number.POSITIVE_INFINITY?(o._infiniteTimeWindow=!0,o.next=o.nextInfiniteTimeWindow):o.next=o.nextTimeWindow,o}return T.a(t,e),t.prototype.nextInfiniteTimeWindow=function(t){if(!this.isStopped){var n=this._events;n.push(t),n.length>this._bufferSize&&n.shift()}e.prototype.next.call(this,t)},t.prototype.nextTimeWindow=function(t){this.isStopped||(this._events.push(new Fe(this._getNow(),t)),this._trimBufferThenGetEvents()),e.prototype.next.call(this,t)},t.prototype._subscribe=function(e){var t,n=this._infiniteTimeWindow,r=n?this._events:this._trimBufferThenGetEvents(),o=this.scheduler,i=r.length;if(this.closed)throw new Pe.a;if(this.isStopped||this.hasError?t=L.a.EMPTY:(this.observers.push(e),t=new Re.a(this,e)),o&&e.add(e=new Se(e,o)),n)for(var s=0;s<i&&!e.closed;s++)e.next(r[s]);else for(s=0;s<i&&!e.closed;s++)e.next(r[s].value);return this.hasError?e.error(this.thrownError):this.isStopped&&e.complete(),t},t.prototype._getNow=function(){return(this.scheduler||je).now()},t.prototype._trimBufferThenGetEvents=function(){for(var e=this._getNow(),t=this._bufferSize,n=this._windowTime,r=this._events,o=r.length,i=0;i<o&&!(e-r[i].time<n);)i++;return o>t&&(i=Math.max(i,o-t)),i>0&&r.splice(0,i),r},t}(P.a),Fe=function(){return function(e,t){this.time=e,this.value=t}}();let He=class{constructor(e){this.environment=e}getConfig(){const e=Date.now(),t={"Cache-Control":"no-cache",Pragma:"no-cache",Expires:"0"};return u(()=>fetch(`${this.environment.config}?${e}`,{headers:t}).then(e=>e.json()))}};He=pe([Object(me.a)()],He);let Le=class{constructor(e){this.environment=e,this.config$=new Ve(1),this.configApiService=new He(this.environment)}getConfig(){var e;return this.pendingConfig||(this.pendingConfig=!0,this.configApiService.getConfig().pipe((e=e=>e.pipe(xe(500),Te(5)),function(t){return t.lift(new ye(e,t))})).subscribe(e=>this.config$.next(e),e=>this.config$.error(e))),this.config$.pipe(I(e=>!!e),Te(1))}forceUpdate(){this.config$.next(void 0),this.pendingConfig=!1}getVPNSettings(){return this.getConfig().pipe(function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=e.length;if(0===n)throw new Error("list of properties cannot be empty.");return function(t){return Object(b.a)(Oe(e,n))(t)}}("vpn"))}};Le=pe([Object(me.a)()],Le);let $e=class{};$e=pe([Object(me.b)({providers:[He,Le]})],$e);var Be=new Le({config:"https://public.decentr.xyz/config.json",production:!0});const Ue=(e,t=8e3)=>ge(void 0,void 0,void 0,(function*(){const n=new AbortController,r=setTimeout(()=>n.abort(),t),o=yield fetch(`http://${e}?${Date.now()}`,{signal:n.signal});return clearTimeout(r),o})),Ze=()=>{const e=A().pipe(te(e=>e?function(e,t,n){void 0===e&&(e=0);var r=-1;return q(t)?r=Number(t)<1?1:Number(t):Object(d.a)(t)&&(n=t),Object(d.a)(n)||(n=Z),new i.a((function(t){var o=q(e)?e:+e-n.now();return n.schedule(W,o,{index:0,period:r,subscriber:t})}))}(0,2e3):a),(t=()=>Be.forceUpdate(),function(e){return e.lift(new se(t,n,r))}),y(void 0),Object(ce.a)());var t,n,r;const o=(e,t)=>[e,t].join(":"),s=e.pipe(te(()=>Be.getVPNSettings()),I(e=>!e.enabled)),c=e.pipe(te(()=>function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=void 0,r=void 0;return Object(d.a)(e[e.length-1])&&(r=e.pop()),"function"==typeof e[e.length-1]&&(n=e.pop()),1===e.length&&Object(z.a)(e[0])&&(e=e[0]),Object(h.a)(e,r).lift(new J(n))}([x(),Be.getVPNSettings().pipe(Object(b.a)(e=>e.servers||[]))])),I(([e,t])=>t.every(t=>o(e.host,e.port)!==o(t.address,t.port)))),u=e.pipe(te(()=>x()),I(e=>!!e.host),Object(l.a)(e=>Ue(e.host)),(f=!1,function(e){return e.lift(new ue(f))}),de(()=>p(!0)),I(Boolean));var f;return Object(ee.a)(s,c,u).pipe(Object(l.a)(()=>C()))},ze=()=>Object(ee.a)(new i.a(e=>{const t=t=>{"net::ERR_TIMED_OUT"===t.error&&e.next()},n=o.browser.webRequest.onErrorOccurred;return n.addListener(t,{urls:["<all_urls>"]}),()=>n.removeListener(t)}),new i.a(e=>{const t=()=>e.next(),n=o.browser.proxy.onError||o.browser.proxy.onProxyError;return n.addListener(t),()=>n.removeListener(t)})).pipe(te(()=>x().pipe(Te(1))),I(e=>"controlled_by_this_extension"===e.levelOfControl),Object(l.a)(e=>Ue(e.host)),I(e=>!e.ok),de(()=>p(void 0)),Object(l.a)(()=>C())),qe={16:"assets/icons/16_active.png",32:"assets/icons/32_active.png"},We={16:"assets/icons/16.png",32:"assets/icons/32.png"},Qe=()=>A().pipe(Object(l.a)(e=>{return t=e?qe:We,o.browser.browserAction.setIcon({path:t});var t}));C(),H().subscribe(),ze().subscribe(),Ze().subscribe(),Qe().subscribe()},function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(1),o=n(7),i=n(30),s=n(21);function a(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];var n=Number.POSITIVE_INFINITY,a=null,c=e[e.length-1];return Object(o.a)(c)?(a=e.pop(),e.length>1&&"number"==typeof e[e.length-1]&&(n=e.pop())):"number"==typeof c&&(n=e.pop()),null===a&&1===e.length&&e[0]instanceof r.a?e[0]:Object(i.a)(n)(Object(s.a)(e,a))}},function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(0),o=n(8),i=n(1),s=n(2),a=n(3);function c(){return function(e){return e.lift(new u(e))}}var u=function(){function e(e){this.connectable=e}return e.prototype.call=function(e,t){var n=this.connectable;n._refCount++;var r=new l(e,n),o=t.subscribe(r);return r.closed||(r.connection=n.connect()),o},e}(),l=function(e){function t(t,n){var r=e.call(this,t)||this;return r.connectable=n,r}return r.a(t,e),t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._refCount;if(t<=0)this.connection=null;else if(e._refCount=t-1,t>1)this.connection=null;else{var n=this.connection,r=e._connection;this.connection=null,!r||n&&r!==n||r.unsubscribe()}}else this.connection=null},t}(s.a),d=function(e){function t(t,n){var r=e.call(this)||this;return r.source=t,r.subjectFactory=n,r._refCount=0,r._isComplete=!1,r}return r.a(t,e),t.prototype._subscribe=function(e){return this.getSubject().subscribe(e)},t.prototype.getSubject=function(){var e=this._subject;return e&&!e.isStopped||(this._subject=this.subjectFactory()),this._subject},t.prototype.connect=function(){var e=this._connection;return e||(this._isComplete=!1,(e=this._connection=new a.a).add(this.source.subscribe(new f(this.getSubject(),this))),e.closed&&(this._connection=null,e=a.a.EMPTY)),e},t.prototype.refCount=function(){return c()(this)},t}(i.a),h=function(){var e=d.prototype;return{operator:{value:null},_refCount:{value:0,writable:!0},_subject:{value:null,writable:!0},_connection:{value:null,writable:!0},_subscribe:{value:e._subscribe},_isComplete:{value:e._isComplete,writable:!0},getSubject:{value:e.getSubject},connect:{value:e.connect},refCount:{value:e.refCount}}}(),f=function(e){function t(t,n){var r=e.call(this,t)||this;return r.connectable=n,r}return r.a(t,e),t.prototype._error=function(t){this._unsubscribe(),e.prototype._error.call(this,t)},t.prototype._complete=function(){this.connectable._isComplete=!0,this._unsubscribe(),e.prototype._complete.call(this)},t.prototype._unsubscribe=function(){var e=this.connectable;if(e){this.connectable=null;var t=e._connection;e._refCount=0,e._subject=null,e._connection=null,t&&t.unsubscribe()}},t}(o.b);s.a;var p=function(){function e(e,t){this.subjectFactory=e,this.selector=t}return e.prototype.call=function(e,t){var n=this.selector,r=this.subjectFactory(),o=n(r).subscribe(e);return o.add(t.subscribe(r)),o},e}();function g(){return new o.a}function m(){return function(e){return c()((t=g,function(e){var r;if(r="function"==typeof t?t:function(){return t},"function"==typeof n)return e.lift(new p(r,n));var o=Object.create(e,h);return o.source=e,o.subjectFactory=r,o})(e));var t,n}}}]);