(self.webpackChunkheart_clear_2204=self.webpackChunkheart_clear_2204||[]).push([[181],{5626:function(r){function i(e,s){(s==null||s>e.length)&&(s=e.length);for(var u=0,n=new Array(s);u<s;u++)n[u]=e[u];return n}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},9329:function(r){function i(e){if(Array.isArray(e))return e}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},9558:function(r){function i(e,s){var u=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(u!=null){var n=[],t=!0,o=!1,a,l;try{for(u=u.call(e);!(t=(a=u.next()).done)&&(n.push(a.value),!(s&&n.length===s));t=!0);}catch(p){o=!0,l=p}finally{try{!t&&u.return!=null&&u.return()}finally{if(o)throw l}}return n}}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},9548:function(r){function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},9875:function(r,i,e){var s=e(9329),u=e(9558),n=e(6562),t=e(9548);function o(a,l){return s(a)||u(a,l)||n(a,l)||t()}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports},6562:function(r,i,e){var s=e(5626);function u(n,t){if(!!n){if(typeof n=="string")return s(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return s(n,t)}}r.exports=u,r.exports.__esModule=!0,r.exports.default=r.exports},181:function(r,i,e){"use strict";e.r(i),e.d(i,{default:function(){return l}});var s=e(9875),u=e.n(s),n=e(3313),t=e.n(n),o=e(2322),a=function(f){var c=f.src,y=t().useRef(null),d=t().useState(!1),b=u()(d,2),h=b[0],g=b[1];return t().useEffect(function(){if(y.current)if(h)y.current.play();else{y.current.pause();var x=document.querySelector(".music-control .tips"),v=x?.classList;v?.contains("showed")===!1&&(v.add("show"),setTimeout(function(){v.remove("show"),v.add("showed")},3e3))}},[h]),t().useEffect(function(){var x=function(){document.hidden&&g(!1)};return document.addEventListener("visibilitychange",x),function(){document.removeEventListener("visibilitychange",x)}},[]),(0,o.jsxs)("span",{className:"music-control",onClick:function(){return g(function(v){return!v})},children:[(0,o.jsx)("a",{className:h?"play":"stop",children:(0,o.jsx)("audio",{loop:!0,ref:y,children:(0,o.jsx)("source",{src:c,type:"audio/mpeg"})})}),(0,o.jsx)("div",{className:"tips",children:"\u8FD9\u91CC\u6709\u9996\u5C0F\u97F3\u4E50\u54E6\uFF5E"})]})},l=a},7320:function(r){"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function u(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function n(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var o={},a=0;a<10;a++)o["_"+String.fromCharCode(a)]=a;var l=Object.getOwnPropertyNames(o).map(function(f){return o[f]});if(l.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(f){p[f]=f}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}r.exports=n()?Object.assign:function(t,o){for(var a,l=u(t),p,f=1;f<arguments.length;f++){a=Object(arguments[f]);for(var c in a)e.call(a,c)&&(l[c]=a[c]);if(i){p=i(a);for(var y=0;y<p.length;y++)s.call(a,p[y])&&(l[p[y]]=a[p[y]])}}return l}},1837:function(r,i,e){"use strict";var s;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */e(7320);var u=e(3313),n=60103;if(s=60107,typeof Symbol=="function"&&Symbol.for){var t=Symbol.for;n=t("react.element"),s=t("react.fragment")}var o=u.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function p(f,c,y){var d,b={},h=null,g=null;y!==void 0&&(h=""+y),c.key!==void 0&&(h=""+c.key),c.ref!==void 0&&(g=c.ref);for(d in c)a.call(c,d)&&!l.hasOwnProperty(d)&&(b[d]=c[d]);if(f&&f.defaultProps)for(d in c=f.defaultProps,c)b[d]===void 0&&(b[d]=c[d]);return{$$typeof:n,type:f,key:h,ref:g,props:b,_owner:o.current}}i.jsx=p,i.jsxs=p},2322:function(r,i,e){"use strict";r.exports=e(1837)}}]);
