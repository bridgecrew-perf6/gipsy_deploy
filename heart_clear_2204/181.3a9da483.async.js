(self.webpackChunkheart_clear_2204=self.webpackChunkheart_clear_2204||[]).push([[181],{5626:function(r){function i(e,u){(u==null||u>e.length)&&(u=e.length);for(var s=0,n=new Array(u);s<u;s++)n[s]=e[s];return n}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},9329:function(r){function i(e){if(Array.isArray(e))return e}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},9558:function(r){function i(e,u){var s=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(s!=null){var n=[],t=!0,o=!1,a,l;try{for(s=s.call(e);!(t=(a=s.next()).done)&&(n.push(a.value),!(u&&n.length===u));t=!0);}catch(p){o=!0,l=p}finally{try{!t&&s.return!=null&&s.return()}finally{if(o)throw l}}return n}}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},9548:function(r){function i(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=i,r.exports.__esModule=!0,r.exports.default=r.exports},9875:function(r,i,e){var u=e(9329),s=e(9558),n=e(6562),t=e(9548);function o(a,l){return u(a)||s(a,l)||n(a,l)||t()}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports},6562:function(r,i,e){var u=e(5626);function s(n,t){if(!!n){if(typeof n=="string")return u(n,t);var o=Object.prototype.toString.call(n).slice(8,-1);if(o==="Object"&&n.constructor&&(o=n.constructor.name),o==="Map"||o==="Set")return Array.from(n);if(o==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return u(n,t)}}r.exports=s,r.exports.__esModule=!0,r.exports.default=r.exports},181:function(r,i,e){"use strict";e.r(i),e.d(i,{default:function(){return l}});var u=e(9875),s=e.n(u),n=e(3313),t=e.n(n),o=e(2322),a=function(f){var c=f.src,y=t().useRef(null),v=t().useState(!1),d=s()(v,2),b=d[0],x=d[1];return t().useEffect(function(){y.current&&(b?y.current.play():y.current.pause())},[b]),t().useEffect(function(){var h=function(){document.hidden&&x(!1)};return document.addEventListener("visibilitychange",h),function(){document.removeEventListener("visibilitychange",h)}},[]),(0,o.jsx)("span",{className:"music-control",onClick:function(){return x(function(g){return!g})},children:(0,o.jsx)("a",{className:b?"play":"stop",children:(0,o.jsx)("audio",{loop:!0,ref:y,children:(0,o.jsx)("source",{src:c,type:"audio/mpeg"})})})})},l=a},7320:function(r){"use strict";/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var i=Object.getOwnPropertySymbols,e=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function s(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function n(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var o={},a=0;a<10;a++)o["_"+String.fromCharCode(a)]=a;var l=Object.getOwnPropertyNames(o).map(function(f){return o[f]});if(l.join("")!=="0123456789")return!1;var p={};return"abcdefghijklmnopqrst".split("").forEach(function(f){p[f]=f}),Object.keys(Object.assign({},p)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}r.exports=n()?Object.assign:function(t,o){for(var a,l=s(t),p,f=1;f<arguments.length;f++){a=Object(arguments[f]);for(var c in a)e.call(a,c)&&(l[c]=a[c]);if(i){p=i(a);for(var y=0;y<p.length;y++)u.call(a,p[y])&&(l[p[y]]=a[p[y]])}}return l}},1837:function(r,i,e){"use strict";var u;/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */e(7320);var s=e(3313),n=60103;if(u=60107,typeof Symbol=="function"&&Symbol.for){var t=Symbol.for;n=t("react.element"),u=t("react.fragment")}var o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a=Object.prototype.hasOwnProperty,l={key:!0,ref:!0,__self:!0,__source:!0};function p(f,c,y){var v,d={},b=null,x=null;y!==void 0&&(b=""+y),c.key!==void 0&&(b=""+c.key),c.ref!==void 0&&(x=c.ref);for(v in c)a.call(c,v)&&!l.hasOwnProperty(v)&&(d[v]=c[v]);if(f&&f.defaultProps)for(v in c=f.defaultProps,c)d[v]===void 0&&(d[v]=c[v]);return{$$typeof:n,type:f,key:b,ref:x,props:d,_owner:o.current}}i.jsx=p,i.jsxs=p},2322:function(r,i,e){"use strict";r.exports=e(1837)}}]);
