Array.prototype.findIndex||Object.defineProperty(Array.prototype,"findIndex",{value:function(r){"use strict";if(null==this)throw new TypeError("Array.prototype.findIndex called on null or undefined");if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var e,o=Object(this),t=o.length>>>0,n=arguments[1],i=0;i<t;i++)if(e=o[i],r.call(n,e,i,o))return i;return-1},enumerable:!1,configurable:!1,writable:!1}),Array.from||(Array.from=function(){function l(r){return"function"==typeof r||"[object Function]"===e.call(r)}function c(r){var e=function(r){var e=Number(r);return isNaN(e)?0:0!==e&&isFinite(e)?(0<e?1:-1)*Math.floor(Math.abs(e)):e}(r);return Math.min(Math.max(e,0),o)}var e=Object.prototype.toString,o=Math.pow(2,53)-1;return function(r,e,o){var t=Object(r);if(null==r)throw new TypeError("Array.from requires an array-like object - not null or undefined");var n,i=1<arguments.length?e:void 0;if(void 0!==i){if(!l(i))throw new TypeError("Array.from: when provided, the second argument must be a function");2<arguments.length&&(n=o)}for(var a,f=c(t.length),u=l(this)?Object(new this(f)):new Array(f),d=0;d<f;)a=t[d],u[d]=i?void 0===n?i(a,d):i.call(n,a,d):a,d+=1;return u.length=f,u}}()),Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(r){if(null==this)throw new TypeError('"this" is null or not defined');var e=Object(this),o=e.length>>>0;if("function"!=typeof r)throw new TypeError("predicate must be a function");for(var t=arguments[1],n=0;n<o;){var i=e[n];if(r.call(t,i,n,e))return i;n++}}}),void 0===window.OscillatorNode&&(window.OscillatorNode={},window.OscillatorNode.prototype={}),void 0===window.AudioBufferSourceNode&&(window.AudioBufferSourceNode={},window.AudioBufferSourceNode.prototype={});