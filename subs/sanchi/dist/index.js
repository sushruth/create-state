(()=>{var y=Object.create;var m=Object.defineProperty;var O=Object.getOwnPropertyDescriptor;var h=Object.getOwnPropertyNames;var x=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var _=t=>m(t,"__esModule",{value:!0});var g=(t=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(t,{get:(r,s)=>(typeof require!="undefined"?require:r)[s]}):t)(function(t){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+t+'" is not supported')});var A=(t,r,s)=>{if(r&&typeof r=="object"||typeof r=="function")for(let e of h(r))!D.call(t,e)&&e!=="default"&&m(t,e,{get:()=>r[e],enumerable:!(s=O(r,e))||s.enumerable});return t},C=t=>A(_(m(t!=null?y(x(t)):{},"default",t&&t.__esModule&&"default"in t?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t);var u=C(g("react")),b=t=>t+1;function T({init:t,reducer:r}){let s=new Map,e=new Map,i={_state:t,get state(){return this._state},set state(n){this._state=n;for(let a of s.keys()){let p=s.get(a),d=e.get(a),R=a(this._state);p&&R!=d&&(e.set(a,R),p())}}};function l(){return i.state}async function c(n){let a=await r(n,l,c);i.state=a}function S(n){s.delete(n),e.delete(n)}function f(n){let a=(0,u.useRef)(n),[,p]=(0,u.useReducer)(b,0),d=a.current(i.state);return s.has(a.current)||s.set(a.current,p),e.has(a.current)||e.set(a.current,d),(0,u.useEffect)(()=>()=>S(a.current),[]),d}return[c,f,l]}var w="__REDUX_DEVTOOLS_EXTENSION__",o=(()=>{try{return window[w]||window.top[w]}catch{console.warn("Could not find Redux Devtools extension");return}})(),I=0;function M({init:t,reducer:r,name:s,replacer:e,reviver:i}){return o==null||o.connect({name:s||`ProxyState ${I++}`,serialize:{replacer:e,reviver:i},features:{persist:!1,export:!0,import:"custom",jump:!1,skip:!1,reorder:!1,dispatch:!0,test:!0}}),o==null||o.send("INIT",t),{reducer:async(c,S,f)=>{Object.assign(c,{startTime:new Date().toISOString()});let n=await r(c,S,f);return Object.assign(c,{endTime:new Date().toISOString()}),o==null||o.send(c,n),n},init:t}}})();
