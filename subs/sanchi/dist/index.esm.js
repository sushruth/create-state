import{useEffect as R,useReducer as w,useRef as y}from"react";var O=r=>r+1;function D({init:r,reducer:p}){let s=new Map,n=new Map,c={_state:r,get state(){return this._state},set state(e){this._state=e;for(let t of s.keys()){let u=s.get(t),i=n.get(t),f=t(this._state);u&&f!=i&&(n.set(t,f),u())}}};function d(){return c.state}async function o(e){let t=await p(e,d,o);c.state=t}function l(e){s.delete(e),n.delete(e)}function S(e){let t=y(e),[,u]=w(O,0),i=t.current(c.state);return s.has(t.current)||s.set(t.current,u),n.has(t.current)||n.set(t.current,i),R(()=>()=>l(t.current),[]),i}return[o,S,d]}var m="__REDUX_DEVTOOLS_EXTENSION__",a=(()=>{try{return window[m]||window.top[m]}catch{console.warn("Could not find Redux Devtools extension");return}})(),h=0;function g({init:r,reducer:p,name:s,replacer:n,reviver:c}){return a==null||a.connect({name:s||`ProxyState ${h++}`,serialize:{replacer:n,reviver:c},features:{persist:!1,export:!0,import:"custom",jump:!1,skip:!1,reorder:!1,dispatch:!0,test:!0}}),a==null||a.send("INIT",r),{reducer:async(o,l,S)=>{Object.assign(o,{startTime:new Date().toISOString()});let e=await p(o,l,S);return Object.assign(o,{endTime:new Date().toISOString()}),a==null||a.send(o,e),e},init:r}}export{g as addDevtools,D as createState};