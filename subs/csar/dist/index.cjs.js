"use strict";var h=Object.create;var c=Object.defineProperty;var D=Object.getOwnPropertyDescriptor;var P=Object.getOwnPropertyNames,A=Object.getOwnPropertySymbols,b=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var S=(t,e,o)=>e in t?c(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,m=(t,e)=>{for(var o in e||(e={}))y.call(e,o)&&S(t,o,e[o]);if(A)for(var o of A(e))j.call(e,o)&&S(t,o,e[o]);return t};var l=(t,e)=>{for(var o in e)c(t,o,{get:e[o],enumerable:!0})},u=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let r of P(e))!y.call(t,r)&&r!==o&&c(t,r,{get:()=>e[r],enumerable:!(a=D(e,r))||a.enumerable});return t};var C=(t,e,o)=>(o=t!=null?h(b(t)):{},u(e||!t||!t.__esModule?c(o,"default",{value:t,enumerable:!0}):o,t)),g=t=>u(c({},"__esModule",{value:!0}),t);var f=(t,e,o)=>new Promise((a,r)=>{var s=n=>{try{d(o.next(n))}catch(i){r(i)}},p=n=>{try{d(o.throw(n))}catch(i){r(i)}},d=n=>n.done?a(n.value):Promise.resolve(n.value).then(s,p);d((o=o.apply(t,e)).next())});var w={};l(w,{asyncRedux:()=>R,createAsyncState:()=>k});module.exports=g(w);var x=C(require("zustand"));function R(t,e){return(a,r)=>{function s(p){return f(this,null,function*(){a(yield t(p,r,s))})}return m({dispatch:s},e)}}function k(t,e){let o=(0,x.default)(R(t,e));return[o.getState().dispatch,o]}
//# sourceMappingURL=index.cjs.js.map