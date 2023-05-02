(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function Mm(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var qd={exports:{}},os={},Yd={exports:{}},D={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ni=Symbol.for("react.element"),bm=Symbol.for("react.portal"),Um=Symbol.for("react.fragment"),Fm=Symbol.for("react.strict_mode"),jm=Symbol.for("react.profiler"),zm=Symbol.for("react.provider"),Bm=Symbol.for("react.context"),Wm=Symbol.for("react.forward_ref"),Vm=Symbol.for("react.suspense"),$m=Symbol.for("react.memo"),Hm=Symbol.for("react.lazy"),nc=Symbol.iterator;function Km(t){return t===null||typeof t!="object"?null:(t=nc&&t[nc]||t["@@iterator"],typeof t=="function"?t:null)}var Qd={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Jd=Object.assign,Xd={};function hr(t,e,n){this.props=t,this.context=e,this.refs=Xd,this.updater=n||Qd}hr.prototype.isReactComponent={};hr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};hr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Zd(){}Zd.prototype=hr.prototype;function Nl(t,e,n){this.props=t,this.context=e,this.refs=Xd,this.updater=n||Qd}var Al=Nl.prototype=new Zd;Al.constructor=Nl;Jd(Al,hr.prototype);Al.isPureReactComponent=!0;var rc=Array.isArray,ef=Object.prototype.hasOwnProperty,Ol={current:null},tf={key:!0,ref:!0,__self:!0,__source:!0};function nf(t,e,n){var r,i={},o=null,s=null;if(e!=null)for(r in e.ref!==void 0&&(s=e.ref),e.key!==void 0&&(o=""+e.key),e)ef.call(e,r)&&!tf.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Ni,type:t,key:o,ref:s,props:i,_owner:Ol.current}}function Gm(t,e){return{$$typeof:Ni,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function xl(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ni}function qm(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ic=/\/+/g;function Ms(t,e){return typeof t=="object"&&t!==null&&t.key!=null?qm(""+t.key):e.toString(36)}function ao(t,e,n,r,i){var o=typeof t;(o==="undefined"||o==="boolean")&&(t=null);var s=!1;if(t===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(t.$$typeof){case Ni:case bm:s=!0}}if(s)return s=t,i=i(s),t=r===""?"."+Ms(s,0):r,rc(i)?(n="",t!=null&&(n=t.replace(ic,"$&/")+"/"),ao(i,e,n,"",function(u){return u})):i!=null&&(xl(i)&&(i=Gm(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(ic,"$&/")+"/")+t)),e.push(i)),1;if(s=0,r=r===""?".":r+":",rc(t))for(var a=0;a<t.length;a++){o=t[a];var l=r+Ms(o,a);s+=ao(o,e,n,l,i)}else if(l=Km(t),typeof l=="function")for(t=l.call(t),a=0;!(o=t.next()).done;)o=o.value,l=r+Ms(o,a++),s+=ao(o,e,n,l,i);else if(o==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return s}function Wi(t,e,n){if(t==null)return t;var r=[],i=0;return ao(t,r,"","",function(o){return e.call(n,o,i++)}),r}function Ym(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var _e={current:null},lo={transition:null},Qm={ReactCurrentDispatcher:_e,ReactCurrentBatchConfig:lo,ReactCurrentOwner:Ol};D.Children={map:Wi,forEach:function(t,e,n){Wi(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Wi(t,function(){e++}),e},toArray:function(t){return Wi(t,function(e){return e})||[]},only:function(t){if(!xl(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};D.Component=hr;D.Fragment=Um;D.Profiler=jm;D.PureComponent=Nl;D.StrictMode=Fm;D.Suspense=Vm;D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Qm;D.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Jd({},t.props),i=t.key,o=t.ref,s=t._owner;if(e!=null){if(e.ref!==void 0&&(o=e.ref,s=Ol.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ef.call(e,l)&&!tf.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:Ni,type:t.type,key:i,ref:o,props:r,_owner:s}};D.createContext=function(t){return t={$$typeof:Bm,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:zm,_context:t},t.Consumer=t};D.createElement=nf;D.createFactory=function(t){var e=nf.bind(null,t);return e.type=t,e};D.createRef=function(){return{current:null}};D.forwardRef=function(t){return{$$typeof:Wm,render:t}};D.isValidElement=xl;D.lazy=function(t){return{$$typeof:Hm,_payload:{_status:-1,_result:t},_init:Ym}};D.memo=function(t,e){return{$$typeof:$m,type:t,compare:e===void 0?null:e}};D.startTransition=function(t){var e=lo.transition;lo.transition={};try{t()}finally{lo.transition=e}};D.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};D.useCallback=function(t,e){return _e.current.useCallback(t,e)};D.useContext=function(t){return _e.current.useContext(t)};D.useDebugValue=function(){};D.useDeferredValue=function(t){return _e.current.useDeferredValue(t)};D.useEffect=function(t,e){return _e.current.useEffect(t,e)};D.useId=function(){return _e.current.useId()};D.useImperativeHandle=function(t,e,n){return _e.current.useImperativeHandle(t,e,n)};D.useInsertionEffect=function(t,e){return _e.current.useInsertionEffect(t,e)};D.useLayoutEffect=function(t,e){return _e.current.useLayoutEffect(t,e)};D.useMemo=function(t,e){return _e.current.useMemo(t,e)};D.useReducer=function(t,e,n){return _e.current.useReducer(t,e,n)};D.useRef=function(t){return _e.current.useRef(t)};D.useState=function(t){return _e.current.useState(t)};D.useSyncExternalStore=function(t,e,n){return _e.current.useSyncExternalStore(t,e,n)};D.useTransition=function(){return _e.current.useTransition()};D.version="18.2.0";Yd.exports=D;var P=Yd.exports;const Ll=Mm(P);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Jm=P,Xm=Symbol.for("react.element"),Zm=Symbol.for("react.fragment"),eg=Object.prototype.hasOwnProperty,tg=Jm.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ng={key:!0,ref:!0,__self:!0,__source:!0};function rf(t,e,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(s=e.ref);for(r in e)eg.call(e,r)&&!ng.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Xm,type:t,key:o,ref:s,props:i,_owner:tg.current}}os.Fragment=Zm;os.jsx=rf;os.jsxs=rf;qd.exports=os;var g=qd.exports,Ea={},of={exports:{}},De={},sf={exports:{}},af={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(T,O){var x=T.length;T.push(O);e:for(;0<x;){var q=x-1>>>1,oe=T[q];if(0<i(oe,O))T[q]=O,T[x]=oe,x=q;else break e}}function n(T){return T.length===0?null:T[0]}function r(T){if(T.length===0)return null;var O=T[0],x=T.pop();if(x!==O){T[0]=x;e:for(var q=0,oe=T.length,zi=oe>>>1;q<zi;){var rn=2*(q+1)-1,Ds=T[rn],on=rn+1,Bi=T[on];if(0>i(Ds,x))on<oe&&0>i(Bi,Ds)?(T[q]=Bi,T[on]=x,q=on):(T[q]=Ds,T[rn]=x,q=rn);else if(on<oe&&0>i(Bi,x))T[q]=Bi,T[on]=x,q=on;else break e}}return O}function i(T,O){var x=T.sortIndex-O.sortIndex;return x!==0?x:T.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,a=s.now();t.unstable_now=function(){return s.now()-a}}var l=[],u=[],d=1,f=null,m=3,v=!1,_=!1,w=!1,A=typeof setTimeout=="function"?setTimeout:null,h=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function p(T){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=T)r(u),O.sortIndex=O.expirationTime,e(l,O);else break;O=n(u)}}function y(T){if(w=!1,p(T),!_)if(n(l)!==null)_=!0,xs(k);else{var O=n(u);O!==null&&Ls(y,O.startTime-T)}}function k(T,O){_=!1,w&&(w=!1,h(N),N=-1),v=!0;var x=m;try{for(p(O),f=n(l);f!==null&&(!(f.expirationTime>O)||T&&!Ve());){var q=f.callback;if(typeof q=="function"){f.callback=null,m=f.priorityLevel;var oe=q(f.expirationTime<=O);O=t.unstable_now(),typeof oe=="function"?f.callback=oe:f===n(l)&&r(l),p(O)}else r(l);f=n(l)}if(f!==null)var zi=!0;else{var rn=n(u);rn!==null&&Ls(y,rn.startTime-O),zi=!1}return zi}finally{f=null,m=x,v=!1}}var C=!1,R=null,N=-1,z=5,L=-1;function Ve(){return!(t.unstable_now()-L<z)}function Tr(){if(R!==null){var T=t.unstable_now();L=T;var O=!0;try{O=R(!0,T)}finally{O?Cr():(C=!1,R=null)}}else C=!1}var Cr;if(typeof c=="function")Cr=function(){c(Tr)};else if(typeof MessageChannel<"u"){var tc=new MessageChannel,Dm=tc.port2;tc.port1.onmessage=Tr,Cr=function(){Dm.postMessage(null)}}else Cr=function(){A(Tr,0)};function xs(T){R=T,C||(C=!0,Cr())}function Ls(T,O){N=A(function(){T(t.unstable_now())},O)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(T){T.callback=null},t.unstable_continueExecution=function(){_||v||(_=!0,xs(k))},t.unstable_forceFrameRate=function(T){0>T||125<T?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):z=0<T?Math.floor(1e3/T):5},t.unstable_getCurrentPriorityLevel=function(){return m},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(T){switch(m){case 1:case 2:case 3:var O=3;break;default:O=m}var x=m;m=O;try{return T()}finally{m=x}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(T,O){switch(T){case 1:case 2:case 3:case 4:case 5:break;default:T=3}var x=m;m=T;try{return O()}finally{m=x}},t.unstable_scheduleCallback=function(T,O,x){var q=t.unstable_now();switch(typeof x=="object"&&x!==null?(x=x.delay,x=typeof x=="number"&&0<x?q+x:q):x=q,T){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=x+oe,T={id:d++,callback:O,priorityLevel:T,startTime:x,expirationTime:oe,sortIndex:-1},x>q?(T.sortIndex=x,e(u,T),n(l)===null&&T===n(u)&&(w?(h(N),N=-1):w=!0,Ls(y,x-q))):(T.sortIndex=oe,e(l,T),_||v||(_=!0,xs(k))),T},t.unstable_shouldYield=Ve,t.unstable_wrapCallback=function(T){var O=m;return function(){var x=m;m=O;try{return T.apply(this,arguments)}finally{m=x}}}})(af);sf.exports=af;var rg=sf.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lf=P,Le=rg;function E(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var uf=new Set,ri={};function Pn(t,e){ir(t,e),ir(t+"Capture",e)}function ir(t,e){for(ri[t]=e,t=0;t<e.length;t++)uf.add(e[t])}var yt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ia=Object.prototype.hasOwnProperty,ig=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,oc={},sc={};function og(t){return Ia.call(sc,t)?!0:Ia.call(oc,t)?!1:ig.test(t)?sc[t]=!0:(oc[t]=!0,!1)}function sg(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function ag(t,e,n,r){if(e===null||typeof e>"u"||sg(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function we(t,e,n,r,i,o,s){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=o,this.removeEmptyString=s}var de={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){de[t]=new we(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];de[e]=new we(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){de[t]=new we(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){de[t]=new we(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){de[t]=new we(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){de[t]=new we(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){de[t]=new we(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){de[t]=new we(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){de[t]=new we(t,5,!1,t.toLowerCase(),null,!1,!1)});var Dl=/[\-:]([a-z])/g;function Ml(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Dl,Ml);de[e]=new we(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Dl,Ml);de[e]=new we(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Dl,Ml);de[e]=new we(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){de[t]=new we(t,1,!1,t.toLowerCase(),null,!1,!1)});de.xlinkHref=new we("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){de[t]=new we(t,1,!1,t.toLowerCase(),null,!0,!0)});function bl(t,e,n,r){var i=de.hasOwnProperty(e)?de[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(ag(e,n,i,r)&&(n=null),r||i===null?og(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var kt=lf.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Vi=Symbol.for("react.element"),Mn=Symbol.for("react.portal"),bn=Symbol.for("react.fragment"),Ul=Symbol.for("react.strict_mode"),ka=Symbol.for("react.profiler"),cf=Symbol.for("react.provider"),df=Symbol.for("react.context"),Fl=Symbol.for("react.forward_ref"),Sa=Symbol.for("react.suspense"),Ta=Symbol.for("react.suspense_list"),jl=Symbol.for("react.memo"),Pt=Symbol.for("react.lazy"),ff=Symbol.for("react.offscreen"),ac=Symbol.iterator;function Rr(t){return t===null||typeof t!="object"?null:(t=ac&&t[ac]||t["@@iterator"],typeof t=="function"?t:null)}var K=Object.assign,bs;function Fr(t){if(bs===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);bs=e&&e[1]||""}return`
`+bs+t}var Us=!1;function Fs(t,e){if(!t||Us)return"";Us=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,a=o.length-1;1<=s&&0<=a&&i[s]!==o[a];)a--;for(;1<=s&&0<=a;s--,a--)if(i[s]!==o[a]){if(s!==1||a!==1)do if(s--,a--,0>a||i[s]!==o[a]){var l=`
`+i[s].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=s&&0<=a);break}}}finally{Us=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Fr(t):""}function lg(t){switch(t.tag){case 5:return Fr(t.type);case 16:return Fr("Lazy");case 13:return Fr("Suspense");case 19:return Fr("SuspenseList");case 0:case 2:case 15:return t=Fs(t.type,!1),t;case 11:return t=Fs(t.type.render,!1),t;case 1:return t=Fs(t.type,!0),t;default:return""}}function Ca(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case bn:return"Fragment";case Mn:return"Portal";case ka:return"Profiler";case Ul:return"StrictMode";case Sa:return"Suspense";case Ta:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case df:return(t.displayName||"Context")+".Consumer";case cf:return(t._context.displayName||"Context")+".Provider";case Fl:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case jl:return e=t.displayName||null,e!==null?e:Ca(t.type)||"Memo";case Pt:e=t._payload,t=t._init;try{return Ca(t(e))}catch{}}return null}function ug(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ca(e);case 8:return e===Ul?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Gt(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function hf(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function cg(t){var e=hf(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function $i(t){t._valueTracker||(t._valueTracker=cg(t))}function pf(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=hf(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function To(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Ra(t,e){var n=e.checked;return K({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function lc(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Gt(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function mf(t,e){e=e.checked,e!=null&&bl(t,"checked",e,!1)}function Pa(t,e){mf(t,e);var n=Gt(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Na(t,e.type,n):e.hasOwnProperty("defaultValue")&&Na(t,e.type,Gt(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function uc(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Na(t,e,n){(e!=="number"||To(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var jr=Array.isArray;function qn(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Gt(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Aa(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(E(91));return K({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function cc(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(E(92));if(jr(n)){if(1<n.length)throw Error(E(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Gt(n)}}function gf(t,e){var n=Gt(e.value),r=Gt(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function dc(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function vf(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Oa(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?vf(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Hi,yf=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Hi=Hi||document.createElement("div"),Hi.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Hi.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ii(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Hr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},dg=["Webkit","ms","Moz","O"];Object.keys(Hr).forEach(function(t){dg.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Hr[e]=Hr[t]})});function _f(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Hr.hasOwnProperty(t)&&Hr[t]?(""+e).trim():e+"px"}function wf(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=_f(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var fg=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xa(t,e){if(e){if(fg[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(E(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(E(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(E(61))}if(e.style!=null&&typeof e.style!="object")throw Error(E(62))}}function La(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Da=null;function zl(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ma=null,Yn=null,Qn=null;function fc(t){if(t=xi(t)){if(typeof Ma!="function")throw Error(E(280));var e=t.stateNode;e&&(e=cs(e),Ma(t.stateNode,t.type,e))}}function Ef(t){Yn?Qn?Qn.push(t):Qn=[t]:Yn=t}function If(){if(Yn){var t=Yn,e=Qn;if(Qn=Yn=null,fc(t),e)for(t=0;t<e.length;t++)fc(e[t])}}function kf(t,e){return t(e)}function Sf(){}var js=!1;function Tf(t,e,n){if(js)return t(e,n);js=!0;try{return kf(t,e,n)}finally{js=!1,(Yn!==null||Qn!==null)&&(Sf(),If())}}function oi(t,e){var n=t.stateNode;if(n===null)return null;var r=cs(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(E(231,e,typeof n));return n}var ba=!1;if(yt)try{var Pr={};Object.defineProperty(Pr,"passive",{get:function(){ba=!0}}),window.addEventListener("test",Pr,Pr),window.removeEventListener("test",Pr,Pr)}catch{ba=!1}function hg(t,e,n,r,i,o,s,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(d){this.onError(d)}}var Kr=!1,Co=null,Ro=!1,Ua=null,pg={onError:function(t){Kr=!0,Co=t}};function mg(t,e,n,r,i,o,s,a,l){Kr=!1,Co=null,hg.apply(pg,arguments)}function gg(t,e,n,r,i,o,s,a,l){if(mg.apply(this,arguments),Kr){if(Kr){var u=Co;Kr=!1,Co=null}else throw Error(E(198));Ro||(Ro=!0,Ua=u)}}function Nn(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Cf(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function hc(t){if(Nn(t)!==t)throw Error(E(188))}function vg(t){var e=t.alternate;if(!e){if(e=Nn(t),e===null)throw Error(E(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return hc(i),t;if(o===r)return hc(i),e;o=o.sibling}throw Error(E(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,a=i.child;a;){if(a===n){s=!0,n=i,r=o;break}if(a===r){s=!0,r=i,n=o;break}a=a.sibling}if(!s){for(a=o.child;a;){if(a===n){s=!0,n=o,r=i;break}if(a===r){s=!0,r=o,n=i;break}a=a.sibling}if(!s)throw Error(E(189))}}if(n.alternate!==r)throw Error(E(190))}if(n.tag!==3)throw Error(E(188));return n.stateNode.current===n?t:e}function Rf(t){return t=vg(t),t!==null?Pf(t):null}function Pf(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Pf(t);if(e!==null)return e;t=t.sibling}return null}var Nf=Le.unstable_scheduleCallback,pc=Le.unstable_cancelCallback,yg=Le.unstable_shouldYield,_g=Le.unstable_requestPaint,Y=Le.unstable_now,wg=Le.unstable_getCurrentPriorityLevel,Bl=Le.unstable_ImmediatePriority,Af=Le.unstable_UserBlockingPriority,Po=Le.unstable_NormalPriority,Eg=Le.unstable_LowPriority,Of=Le.unstable_IdlePriority,ss=null,st=null;function Ig(t){if(st&&typeof st.onCommitFiberRoot=="function")try{st.onCommitFiberRoot(ss,t,void 0,(t.current.flags&128)===128)}catch{}}var qe=Math.clz32?Math.clz32:Tg,kg=Math.log,Sg=Math.LN2;function Tg(t){return t>>>=0,t===0?32:31-(kg(t)/Sg|0)|0}var Ki=64,Gi=4194304;function zr(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function No(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,o=t.pingedLanes,s=n&268435455;if(s!==0){var a=s&~i;a!==0?r=zr(a):(o&=s,o!==0&&(r=zr(o)))}else s=n&~i,s!==0?r=zr(s):o!==0&&(r=zr(o));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,o=e&-e,i>=o||i===16&&(o&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-qe(e),i=1<<n,r|=t[n],e&=~i;return r}function Cg(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rg(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,o=t.pendingLanes;0<o;){var s=31-qe(o),a=1<<s,l=i[s];l===-1?(!(a&n)||a&r)&&(i[s]=Cg(a,e)):l<=e&&(t.expiredLanes|=a),o&=~a}}function Fa(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function xf(){var t=Ki;return Ki<<=1,!(Ki&4194240)&&(Ki=64),t}function zs(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ai(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qe(e),t[e]=n}function Pg(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-qe(n),o=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~o}}function Wl(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-qe(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var U=0;function Lf(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Df,Vl,Mf,bf,Uf,ja=!1,qi=[],bt=null,Ut=null,Ft=null,si=new Map,ai=new Map,At=[],Ng="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function mc(t,e){switch(t){case"focusin":case"focusout":bt=null;break;case"dragenter":case"dragleave":Ut=null;break;case"mouseover":case"mouseout":Ft=null;break;case"pointerover":case"pointerout":si.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ai.delete(e.pointerId)}}function Nr(t,e,n,r,i,o){return t===null||t.nativeEvent!==o?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},e!==null&&(e=xi(e),e!==null&&Vl(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Ag(t,e,n,r,i){switch(e){case"focusin":return bt=Nr(bt,t,e,n,r,i),!0;case"dragenter":return Ut=Nr(Ut,t,e,n,r,i),!0;case"mouseover":return Ft=Nr(Ft,t,e,n,r,i),!0;case"pointerover":var o=i.pointerId;return si.set(o,Nr(si.get(o)||null,t,e,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ai.set(o,Nr(ai.get(o)||null,t,e,n,r,i)),!0}return!1}function Ff(t){var e=un(t.target);if(e!==null){var n=Nn(e);if(n!==null){if(e=n.tag,e===13){if(e=Cf(n),e!==null){t.blockedOn=e,Uf(t.priority,function(){Mf(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function uo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=za(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Da=r,n.target.dispatchEvent(r),Da=null}else return e=xi(n),e!==null&&Vl(e),t.blockedOn=n,!1;e.shift()}return!0}function gc(t,e,n){uo(t)&&n.delete(e)}function Og(){ja=!1,bt!==null&&uo(bt)&&(bt=null),Ut!==null&&uo(Ut)&&(Ut=null),Ft!==null&&uo(Ft)&&(Ft=null),si.forEach(gc),ai.forEach(gc)}function Ar(t,e){t.blockedOn===e&&(t.blockedOn=null,ja||(ja=!0,Le.unstable_scheduleCallback(Le.unstable_NormalPriority,Og)))}function li(t){function e(i){return Ar(i,t)}if(0<qi.length){Ar(qi[0],t);for(var n=1;n<qi.length;n++){var r=qi[n];r.blockedOn===t&&(r.blockedOn=null)}}for(bt!==null&&Ar(bt,t),Ut!==null&&Ar(Ut,t),Ft!==null&&Ar(Ft,t),si.forEach(e),ai.forEach(e),n=0;n<At.length;n++)r=At[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<At.length&&(n=At[0],n.blockedOn===null);)Ff(n),n.blockedOn===null&&At.shift()}var Jn=kt.ReactCurrentBatchConfig,Ao=!0;function xg(t,e,n,r){var i=U,o=Jn.transition;Jn.transition=null;try{U=1,$l(t,e,n,r)}finally{U=i,Jn.transition=o}}function Lg(t,e,n,r){var i=U,o=Jn.transition;Jn.transition=null;try{U=4,$l(t,e,n,r)}finally{U=i,Jn.transition=o}}function $l(t,e,n,r){if(Ao){var i=za(t,e,n,r);if(i===null)Qs(t,e,r,Oo,n),mc(t,r);else if(Ag(i,t,e,n,r))r.stopPropagation();else if(mc(t,r),e&4&&-1<Ng.indexOf(t)){for(;i!==null;){var o=xi(i);if(o!==null&&Df(o),o=za(t,e,n,r),o===null&&Qs(t,e,r,Oo,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Qs(t,e,r,null,n)}}var Oo=null;function za(t,e,n,r){if(Oo=null,t=zl(r),t=un(t),t!==null)if(e=Nn(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Cf(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Oo=t,null}function jf(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(wg()){case Bl:return 1;case Af:return 4;case Po:case Eg:return 16;case Of:return 536870912;default:return 16}default:return 16}}var xt=null,Hl=null,co=null;function zf(){if(co)return co;var t,e=Hl,n=e.length,r,i="value"in xt?xt.value:xt.textContent,o=i.length;for(t=0;t<n&&e[t]===i[t];t++);var s=n-t;for(r=1;r<=s&&e[n-r]===i[o-r];r++);return co=i.slice(t,1<r?1-r:void 0)}function fo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Yi(){return!0}function vc(){return!1}function Me(t){function e(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?Yi:vc,this.isPropagationStopped=vc,this}return K(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Yi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Yi)},persist:function(){},isPersistent:Yi}),e}var pr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Kl=Me(pr),Oi=K({},pr,{view:0,detail:0}),Dg=Me(Oi),Bs,Ws,Or,as=K({},Oi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gl,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Or&&(Or&&t.type==="mousemove"?(Bs=t.screenX-Or.screenX,Ws=t.screenY-Or.screenY):Ws=Bs=0,Or=t),Bs)},movementY:function(t){return"movementY"in t?t.movementY:Ws}}),yc=Me(as),Mg=K({},as,{dataTransfer:0}),bg=Me(Mg),Ug=K({},Oi,{relatedTarget:0}),Vs=Me(Ug),Fg=K({},pr,{animationName:0,elapsedTime:0,pseudoElement:0}),jg=Me(Fg),zg=K({},pr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Bg=Me(zg),Wg=K({},pr,{data:0}),_c=Me(Wg),Vg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},$g={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Hg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Kg(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Hg[t])?!!e[t]:!1}function Gl(){return Kg}var Gg=K({},Oi,{key:function(t){if(t.key){var e=Vg[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=fo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?$g[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gl,charCode:function(t){return t.type==="keypress"?fo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?fo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),qg=Me(Gg),Yg=K({},as,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wc=Me(Yg),Qg=K({},Oi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gl}),Jg=Me(Qg),Xg=K({},pr,{propertyName:0,elapsedTime:0,pseudoElement:0}),Zg=Me(Xg),ev=K({},as,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),tv=Me(ev),nv=[9,13,27,32],ql=yt&&"CompositionEvent"in window,Gr=null;yt&&"documentMode"in document&&(Gr=document.documentMode);var rv=yt&&"TextEvent"in window&&!Gr,Bf=yt&&(!ql||Gr&&8<Gr&&11>=Gr),Ec=String.fromCharCode(32),Ic=!1;function Wf(t,e){switch(t){case"keyup":return nv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Vf(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Un=!1;function iv(t,e){switch(t){case"compositionend":return Vf(e);case"keypress":return e.which!==32?null:(Ic=!0,Ec);case"textInput":return t=e.data,t===Ec&&Ic?null:t;default:return null}}function ov(t,e){if(Un)return t==="compositionend"||!ql&&Wf(t,e)?(t=zf(),co=Hl=xt=null,Un=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Bf&&e.locale!=="ko"?null:e.data;default:return null}}var sv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!sv[t.type]:e==="textarea"}function $f(t,e,n,r){Ef(r),e=xo(e,"onChange"),0<e.length&&(n=new Kl("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var qr=null,ui=null;function av(t){th(t,0)}function ls(t){var e=zn(t);if(pf(e))return t}function lv(t,e){if(t==="change")return e}var Hf=!1;if(yt){var $s;if(yt){var Hs="oninput"in document;if(!Hs){var Sc=document.createElement("div");Sc.setAttribute("oninput","return;"),Hs=typeof Sc.oninput=="function"}$s=Hs}else $s=!1;Hf=$s&&(!document.documentMode||9<document.documentMode)}function Tc(){qr&&(qr.detachEvent("onpropertychange",Kf),ui=qr=null)}function Kf(t){if(t.propertyName==="value"&&ls(ui)){var e=[];$f(e,ui,t,zl(t)),Tf(av,e)}}function uv(t,e,n){t==="focusin"?(Tc(),qr=e,ui=n,qr.attachEvent("onpropertychange",Kf)):t==="focusout"&&Tc()}function cv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return ls(ui)}function dv(t,e){if(t==="click")return ls(e)}function fv(t,e){if(t==="input"||t==="change")return ls(e)}function hv(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Qe=typeof Object.is=="function"?Object.is:hv;function ci(t,e){if(Qe(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!Ia.call(e,i)||!Qe(t[i],e[i]))return!1}return!0}function Cc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Rc(t,e){var n=Cc(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Cc(n)}}function Gf(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Gf(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function qf(){for(var t=window,e=To();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=To(t.document)}return e}function Yl(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function pv(t){var e=qf(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Gf(n.ownerDocument.documentElement,n)){if(r!==null&&Yl(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!t.extend&&o>r&&(i=r,r=o,o=i),i=Rc(n,o);var s=Rc(n,r);i&&s&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==s.node||t.focusOffset!==s.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),o>r?(t.addRange(e),t.extend(s.node,s.offset)):(e.setEnd(s.node,s.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var mv=yt&&"documentMode"in document&&11>=document.documentMode,Fn=null,Ba=null,Yr=null,Wa=!1;function Pc(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Wa||Fn==null||Fn!==To(r)||(r=Fn,"selectionStart"in r&&Yl(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Yr&&ci(Yr,r)||(Yr=r,r=xo(Ba,"onSelect"),0<r.length&&(e=new Kl("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Fn)))}function Qi(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var jn={animationend:Qi("Animation","AnimationEnd"),animationiteration:Qi("Animation","AnimationIteration"),animationstart:Qi("Animation","AnimationStart"),transitionend:Qi("Transition","TransitionEnd")},Ks={},Yf={};yt&&(Yf=document.createElement("div").style,"AnimationEvent"in window||(delete jn.animationend.animation,delete jn.animationiteration.animation,delete jn.animationstart.animation),"TransitionEvent"in window||delete jn.transitionend.transition);function us(t){if(Ks[t])return Ks[t];if(!jn[t])return t;var e=jn[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Yf)return Ks[t]=e[n];return t}var Qf=us("animationend"),Jf=us("animationiteration"),Xf=us("animationstart"),Zf=us("transitionend"),eh=new Map,Nc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Zt(t,e){eh.set(t,e),Pn(e,[t])}for(var Gs=0;Gs<Nc.length;Gs++){var qs=Nc[Gs],gv=qs.toLowerCase(),vv=qs[0].toUpperCase()+qs.slice(1);Zt(gv,"on"+vv)}Zt(Qf,"onAnimationEnd");Zt(Jf,"onAnimationIteration");Zt(Xf,"onAnimationStart");Zt("dblclick","onDoubleClick");Zt("focusin","onFocus");Zt("focusout","onBlur");Zt(Zf,"onTransitionEnd");ir("onMouseEnter",["mouseout","mouseover"]);ir("onMouseLeave",["mouseout","mouseover"]);ir("onPointerEnter",["pointerout","pointerover"]);ir("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Br="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(Br));function Ac(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,gg(r,e,void 0,t),t.currentTarget=null}function th(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var o=void 0;if(e)for(var s=r.length-1;0<=s;s--){var a=r[s],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==o&&i.isPropagationStopped())break e;Ac(i,a,u),o=l}else for(s=0;s<r.length;s++){if(a=r[s],l=a.instance,u=a.currentTarget,a=a.listener,l!==o&&i.isPropagationStopped())break e;Ac(i,a,u),o=l}}}if(Ro)throw t=Ua,Ro=!1,Ua=null,t}function B(t,e){var n=e[Ga];n===void 0&&(n=e[Ga]=new Set);var r=t+"__bubble";n.has(r)||(nh(e,t,2,!1),n.add(r))}function Ys(t,e,n){var r=0;e&&(r|=4),nh(n,t,r,e)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function di(t){if(!t[Ji]){t[Ji]=!0,uf.forEach(function(n){n!=="selectionchange"&&(yv.has(n)||Ys(n,!1,t),Ys(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ji]||(e[Ji]=!0,Ys("selectionchange",!1,e))}}function nh(t,e,n,r){switch(jf(e)){case 1:var i=xg;break;case 4:i=Lg;break;default:i=$l}n=i.bind(null,e,n,t),i=void 0,!ba||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Qs(t,e,n,r,i){var o=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&(l=s.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;s=s.return}for(;a!==null;){if(s=un(a),s===null)return;if(l=s.tag,l===5||l===6){r=o=s;continue e}a=a.parentNode}}r=r.return}Tf(function(){var u=o,d=zl(n),f=[];e:{var m=eh.get(t);if(m!==void 0){var v=Kl,_=t;switch(t){case"keypress":if(fo(n)===0)break e;case"keydown":case"keyup":v=qg;break;case"focusin":_="focus",v=Vs;break;case"focusout":_="blur",v=Vs;break;case"beforeblur":case"afterblur":v=Vs;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=yc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=bg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=Jg;break;case Qf:case Jf:case Xf:v=jg;break;case Zf:v=Zg;break;case"scroll":v=Dg;break;case"wheel":v=tv;break;case"copy":case"cut":case"paste":v=Bg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=wc}var w=(e&4)!==0,A=!w&&t==="scroll",h=w?m!==null?m+"Capture":null:m;w=[];for(var c=u,p;c!==null;){p=c;var y=p.stateNode;if(p.tag===5&&y!==null&&(p=y,h!==null&&(y=oi(c,h),y!=null&&w.push(fi(c,y,p)))),A)break;c=c.return}0<w.length&&(m=new v(m,_,null,n,d),f.push({event:m,listeners:w}))}}if(!(e&7)){e:{if(m=t==="mouseover"||t==="pointerover",v=t==="mouseout"||t==="pointerout",m&&n!==Da&&(_=n.relatedTarget||n.fromElement)&&(un(_)||_[_t]))break e;if((v||m)&&(m=d.window===d?d:(m=d.ownerDocument)?m.defaultView||m.parentWindow:window,v?(_=n.relatedTarget||n.toElement,v=u,_=_?un(_):null,_!==null&&(A=Nn(_),_!==A||_.tag!==5&&_.tag!==6)&&(_=null)):(v=null,_=u),v!==_)){if(w=yc,y="onMouseLeave",h="onMouseEnter",c="mouse",(t==="pointerout"||t==="pointerover")&&(w=wc,y="onPointerLeave",h="onPointerEnter",c="pointer"),A=v==null?m:zn(v),p=_==null?m:zn(_),m=new w(y,c+"leave",v,n,d),m.target=A,m.relatedTarget=p,y=null,un(d)===u&&(w=new w(h,c+"enter",_,n,d),w.target=p,w.relatedTarget=A,y=w),A=y,v&&_)t:{for(w=v,h=_,c=0,p=w;p;p=Ln(p))c++;for(p=0,y=h;y;y=Ln(y))p++;for(;0<c-p;)w=Ln(w),c--;for(;0<p-c;)h=Ln(h),p--;for(;c--;){if(w===h||h!==null&&w===h.alternate)break t;w=Ln(w),h=Ln(h)}w=null}else w=null;v!==null&&Oc(f,m,v,w,!1),_!==null&&A!==null&&Oc(f,A,_,w,!0)}}e:{if(m=u?zn(u):window,v=m.nodeName&&m.nodeName.toLowerCase(),v==="select"||v==="input"&&m.type==="file")var k=lv;else if(kc(m))if(Hf)k=fv;else{k=cv;var C=uv}else(v=m.nodeName)&&v.toLowerCase()==="input"&&(m.type==="checkbox"||m.type==="radio")&&(k=dv);if(k&&(k=k(t,u))){$f(f,k,n,d);break e}C&&C(t,m,u),t==="focusout"&&(C=m._wrapperState)&&C.controlled&&m.type==="number"&&Na(m,"number",m.value)}switch(C=u?zn(u):window,t){case"focusin":(kc(C)||C.contentEditable==="true")&&(Fn=C,Ba=u,Yr=null);break;case"focusout":Yr=Ba=Fn=null;break;case"mousedown":Wa=!0;break;case"contextmenu":case"mouseup":case"dragend":Wa=!1,Pc(f,n,d);break;case"selectionchange":if(mv)break;case"keydown":case"keyup":Pc(f,n,d)}var R;if(ql)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else Un?Wf(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(Bf&&n.locale!=="ko"&&(Un||N!=="onCompositionStart"?N==="onCompositionEnd"&&Un&&(R=zf()):(xt=d,Hl="value"in xt?xt.value:xt.textContent,Un=!0)),C=xo(u,N),0<C.length&&(N=new _c(N,t,null,n,d),f.push({event:N,listeners:C}),R?N.data=R:(R=Vf(n),R!==null&&(N.data=R)))),(R=rv?iv(t,n):ov(t,n))&&(u=xo(u,"onBeforeInput"),0<u.length&&(d=new _c("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=R))}th(f,e)})}function fi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function xo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=oi(t,n),o!=null&&r.unshift(fi(t,o,i)),o=oi(t,e),o!=null&&r.push(fi(t,o,i))),t=t.return}return r}function Ln(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Oc(t,e,n,r,i){for(var o=e._reactName,s=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=oi(n,o),l!=null&&s.unshift(fi(n,l,a))):i||(l=oi(n,o),l!=null&&s.push(fi(n,l,a)))),n=n.return}s.length!==0&&t.push({event:e,listeners:s})}var _v=/\r\n?/g,wv=/\u0000|\uFFFD/g;function xc(t){return(typeof t=="string"?t:""+t).replace(_v,`
`).replace(wv,"")}function Xi(t,e,n){if(e=xc(e),xc(t)!==e&&n)throw Error(E(425))}function Lo(){}var Va=null,$a=null;function Ha(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Ka=typeof setTimeout=="function"?setTimeout:void 0,Ev=typeof clearTimeout=="function"?clearTimeout:void 0,Lc=typeof Promise=="function"?Promise:void 0,Iv=typeof queueMicrotask=="function"?queueMicrotask:typeof Lc<"u"?function(t){return Lc.resolve(null).then(t).catch(kv)}:Ka;function kv(t){setTimeout(function(){throw t})}function Js(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),li(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);li(e)}function jt(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Dc(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mr=Math.random().toString(36).slice(2),et="__reactFiber$"+mr,hi="__reactProps$"+mr,_t="__reactContainer$"+mr,Ga="__reactEvents$"+mr,Sv="__reactListeners$"+mr,Tv="__reactHandles$"+mr;function un(t){var e=t[et];if(e)return e;for(var n=t.parentNode;n;){if(e=n[_t]||n[et]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Dc(t);t!==null;){if(n=t[et])return n;t=Dc(t)}return e}t=n,n=t.parentNode}return null}function xi(t){return t=t[et]||t[_t],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function zn(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(E(33))}function cs(t){return t[hi]||null}var qa=[],Bn=-1;function en(t){return{current:t}}function W(t){0>Bn||(t.current=qa[Bn],qa[Bn]=null,Bn--)}function j(t,e){Bn++,qa[Bn]=t.current,t.current=e}var qt={},ge=en(qt),Se=en(!1),yn=qt;function or(t,e){var n=t.type.contextTypes;if(!n)return qt;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=e[o];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Te(t){return t=t.childContextTypes,t!=null}function Do(){W(Se),W(ge)}function Mc(t,e,n){if(ge.current!==qt)throw Error(E(168));j(ge,e),j(Se,n)}function rh(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(E(108,ug(t)||"Unknown",i));return K({},n,r)}function Mo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||qt,yn=ge.current,j(ge,t),j(Se,Se.current),!0}function bc(t,e,n){var r=t.stateNode;if(!r)throw Error(E(169));n?(t=rh(t,e,yn),r.__reactInternalMemoizedMergedChildContext=t,W(Se),W(ge),j(ge,t)):W(Se),j(Se,n)}var ct=null,ds=!1,Xs=!1;function ih(t){ct===null?ct=[t]:ct.push(t)}function Cv(t){ds=!0,ih(t)}function tn(){if(!Xs&&ct!==null){Xs=!0;var t=0,e=U;try{var n=ct;for(U=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}ct=null,ds=!1}catch(i){throw ct!==null&&(ct=ct.slice(t+1)),Nf(Bl,tn),i}finally{U=e,Xs=!1}}return null}var Wn=[],Vn=0,bo=null,Uo=0,be=[],Ue=0,_n=null,dt=1,ft="";function sn(t,e){Wn[Vn++]=Uo,Wn[Vn++]=bo,bo=t,Uo=e}function oh(t,e,n){be[Ue++]=dt,be[Ue++]=ft,be[Ue++]=_n,_n=t;var r=dt;t=ft;var i=32-qe(r)-1;r&=~(1<<i),n+=1;var o=32-qe(e)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,dt=1<<32-qe(e)+i|n<<i|r,ft=o+t}else dt=1<<o|n<<i|r,ft=t}function Ql(t){t.return!==null&&(sn(t,1),oh(t,1,0))}function Jl(t){for(;t===bo;)bo=Wn[--Vn],Wn[Vn]=null,Uo=Wn[--Vn],Wn[Vn]=null;for(;t===_n;)_n=be[--Ue],be[Ue]=null,ft=be[--Ue],be[Ue]=null,dt=be[--Ue],be[Ue]=null}var xe=null,Ae=null,V=!1,Ge=null;function sh(t,e){var n=Fe(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Uc(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,xe=t,Ae=jt(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,xe=t,Ae=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=_n!==null?{id:dt,overflow:ft}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fe(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,xe=t,Ae=null,!0):!1;default:return!1}}function Ya(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Qa(t){if(V){var e=Ae;if(e){var n=e;if(!Uc(t,e)){if(Ya(t))throw Error(E(418));e=jt(n.nextSibling);var r=xe;e&&Uc(t,e)?sh(r,n):(t.flags=t.flags&-4097|2,V=!1,xe=t)}}else{if(Ya(t))throw Error(E(418));t.flags=t.flags&-4097|2,V=!1,xe=t}}}function Fc(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;xe=t}function Zi(t){if(t!==xe)return!1;if(!V)return Fc(t),V=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ha(t.type,t.memoizedProps)),e&&(e=Ae)){if(Ya(t))throw ah(),Error(E(418));for(;e;)sh(t,e),e=jt(e.nextSibling)}if(Fc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(E(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Ae=jt(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Ae=null}}else Ae=xe?jt(t.stateNode.nextSibling):null;return!0}function ah(){for(var t=Ae;t;)t=jt(t.nextSibling)}function sr(){Ae=xe=null,V=!1}function Xl(t){Ge===null?Ge=[t]:Ge.push(t)}var Rv=kt.ReactCurrentBatchConfig;function He(t,e){if(t&&t.defaultProps){e=K({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Fo=en(null),jo=null,$n=null,Zl=null;function eu(){Zl=$n=jo=null}function tu(t){var e=Fo.current;W(Fo),t._currentValue=e}function Ja(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Xn(t,e){jo=t,Zl=$n=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(ke=!0),t.firstContext=null)}function ze(t){var e=t._currentValue;if(Zl!==t)if(t={context:t,memoizedValue:e,next:null},$n===null){if(jo===null)throw Error(E(308));$n=t,jo.dependencies={lanes:0,firstContext:t}}else $n=$n.next=t;return e}var cn=null;function nu(t){cn===null?cn=[t]:cn.push(t)}function lh(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,nu(e)):(n.next=i.next,i.next=n),e.interleaved=n,wt(t,r)}function wt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Nt=!1;function ru(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uh(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function mt(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function zt(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,M&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,wt(t,n)}return i=r.interleaved,i===null?(e.next=e,nu(r)):(e.next=i.next,i.next=e),r.interleaved=e,wt(t,n)}function ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wl(t,n)}}function jc(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=e:o=o.next=e}else i=o=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zo(t,e,n,r){var i=t.updateQueue;Nt=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,s===null?o=u:s.next=u,s=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==s&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=l))}if(o!==null){var f=i.baseState;s=0,d=u=l=null,a=o;do{var m=a.lane,v=a.eventTime;if((r&m)===m){d!==null&&(d=d.next={eventTime:v,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,w=a;switch(m=e,v=n,w.tag){case 1:if(_=w.payload,typeof _=="function"){f=_.call(v,f,m);break e}f=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=w.payload,m=typeof _=="function"?_.call(v,f,m):_,m==null)break e;f=K({},f,m);break e;case 2:Nt=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,m=i.effects,m===null?i.effects=[a]:m.push(a))}else v={eventTime:v,lane:m,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=v,l=f):d=d.next=v,s|=m;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;m=a,a=m.next,m.next=null,i.lastBaseUpdate=m,i.shared.pending=null}}while(1);if(d===null&&(l=f),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=d,e=i.shared.interleaved,e!==null){i=e;do s|=i.lane,i=i.next;while(i!==e)}else o===null&&(i.shared.lanes=0);En|=s,t.lanes=s,t.memoizedState=f}}function zc(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(E(191,i));i.call(r)}}}var ch=new lf.Component().refs;function Xa(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:K({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var fs={isMounted:function(t){return(t=t._reactInternals)?Nn(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Wt(t),o=mt(r,i);o.payload=e,n!=null&&(o.callback=n),e=zt(t,o,i),e!==null&&(Ye(e,t,i,r),ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ye(),i=Wt(t),o=mt(r,i);o.tag=1,o.payload=e,n!=null&&(o.callback=n),e=zt(t,o,i),e!==null&&(Ye(e,t,i,r),ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ye(),r=Wt(t),i=mt(n,r);i.tag=2,e!=null&&(i.callback=e),e=zt(t,i,r),e!==null&&(Ye(e,t,r,n),ho(e,t,r))}};function Bc(t,e,n,r,i,o,s){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,o,s):e.prototype&&e.prototype.isPureReactComponent?!ci(n,r)||!ci(i,o):!0}function dh(t,e,n){var r=!1,i=qt,o=e.contextType;return typeof o=="object"&&o!==null?o=ze(o):(i=Te(e)?yn:ge.current,r=e.contextTypes,o=(r=r!=null)?or(t,i):qt),e=new e(n,o),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=fs,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=o),e}function Wc(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&fs.enqueueReplaceState(e,e.state,null)}function Za(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=ch,ru(t);var o=e.contextType;typeof o=="object"&&o!==null?i.context=ze(o):(o=Te(e)?yn:ge.current,i.context=or(t,o)),i.state=t.memoizedState,o=e.getDerivedStateFromProps,typeof o=="function"&&(Xa(t,e,o,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&fs.enqueueReplaceState(i,i.state,null),zo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function xr(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(E(309));var r=n.stateNode}if(!r)throw Error(E(147,t));var i=r,o=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===o?e.ref:(e=function(s){var a=i.refs;a===ch&&(a=i.refs={}),s===null?delete a[o]:a[o]=s},e._stringRef=o,e)}if(typeof t!="string")throw Error(E(284));if(!n._owner)throw Error(E(290,t))}return t}function eo(t,e){throw t=Object.prototype.toString.call(e),Error(E(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vc(t){var e=t._init;return e(t._payload)}function fh(t){function e(h,c){if(t){var p=h.deletions;p===null?(h.deletions=[c],h.flags|=16):p.push(c)}}function n(h,c){if(!t)return null;for(;c!==null;)e(h,c),c=c.sibling;return null}function r(h,c){for(h=new Map;c!==null;)c.key!==null?h.set(c.key,c):h.set(c.index,c),c=c.sibling;return h}function i(h,c){return h=Vt(h,c),h.index=0,h.sibling=null,h}function o(h,c,p){return h.index=p,t?(p=h.alternate,p!==null?(p=p.index,p<c?(h.flags|=2,c):p):(h.flags|=2,c)):(h.flags|=1048576,c)}function s(h){return t&&h.alternate===null&&(h.flags|=2),h}function a(h,c,p,y){return c===null||c.tag!==6?(c=oa(p,h.mode,y),c.return=h,c):(c=i(c,p),c.return=h,c)}function l(h,c,p,y){var k=p.type;return k===bn?d(h,c,p.props.children,y,p.key):c!==null&&(c.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pt&&Vc(k)===c.type)?(y=i(c,p.props),y.ref=xr(h,c,p),y.return=h,y):(y=_o(p.type,p.key,p.props,null,h.mode,y),y.ref=xr(h,c,p),y.return=h,y)}function u(h,c,p,y){return c===null||c.tag!==4||c.stateNode.containerInfo!==p.containerInfo||c.stateNode.implementation!==p.implementation?(c=sa(p,h.mode,y),c.return=h,c):(c=i(c,p.children||[]),c.return=h,c)}function d(h,c,p,y,k){return c===null||c.tag!==7?(c=pn(p,h.mode,y,k),c.return=h,c):(c=i(c,p),c.return=h,c)}function f(h,c,p){if(typeof c=="string"&&c!==""||typeof c=="number")return c=oa(""+c,h.mode,p),c.return=h,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Vi:return p=_o(c.type,c.key,c.props,null,h.mode,p),p.ref=xr(h,null,c),p.return=h,p;case Mn:return c=sa(c,h.mode,p),c.return=h,c;case Pt:var y=c._init;return f(h,y(c._payload),p)}if(jr(c)||Rr(c))return c=pn(c,h.mode,p,null),c.return=h,c;eo(h,c)}return null}function m(h,c,p,y){var k=c!==null?c.key:null;if(typeof p=="string"&&p!==""||typeof p=="number")return k!==null?null:a(h,c,""+p,y);if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Vi:return p.key===k?l(h,c,p,y):null;case Mn:return p.key===k?u(h,c,p,y):null;case Pt:return k=p._init,m(h,c,k(p._payload),y)}if(jr(p)||Rr(p))return k!==null?null:d(h,c,p,y,null);eo(h,p)}return null}function v(h,c,p,y,k){if(typeof y=="string"&&y!==""||typeof y=="number")return h=h.get(p)||null,a(c,h,""+y,k);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Vi:return h=h.get(y.key===null?p:y.key)||null,l(c,h,y,k);case Mn:return h=h.get(y.key===null?p:y.key)||null,u(c,h,y,k);case Pt:var C=y._init;return v(h,c,p,C(y._payload),k)}if(jr(y)||Rr(y))return h=h.get(p)||null,d(c,h,y,k,null);eo(c,y)}return null}function _(h,c,p,y){for(var k=null,C=null,R=c,N=c=0,z=null;R!==null&&N<p.length;N++){R.index>N?(z=R,R=null):z=R.sibling;var L=m(h,R,p[N],y);if(L===null){R===null&&(R=z);break}t&&R&&L.alternate===null&&e(h,R),c=o(L,c,N),C===null?k=L:C.sibling=L,C=L,R=z}if(N===p.length)return n(h,R),V&&sn(h,N),k;if(R===null){for(;N<p.length;N++)R=f(h,p[N],y),R!==null&&(c=o(R,c,N),C===null?k=R:C.sibling=R,C=R);return V&&sn(h,N),k}for(R=r(h,R);N<p.length;N++)z=v(R,h,N,p[N],y),z!==null&&(t&&z.alternate!==null&&R.delete(z.key===null?N:z.key),c=o(z,c,N),C===null?k=z:C.sibling=z,C=z);return t&&R.forEach(function(Ve){return e(h,Ve)}),V&&sn(h,N),k}function w(h,c,p,y){var k=Rr(p);if(typeof k!="function")throw Error(E(150));if(p=k.call(p),p==null)throw Error(E(151));for(var C=k=null,R=c,N=c=0,z=null,L=p.next();R!==null&&!L.done;N++,L=p.next()){R.index>N?(z=R,R=null):z=R.sibling;var Ve=m(h,R,L.value,y);if(Ve===null){R===null&&(R=z);break}t&&R&&Ve.alternate===null&&e(h,R),c=o(Ve,c,N),C===null?k=Ve:C.sibling=Ve,C=Ve,R=z}if(L.done)return n(h,R),V&&sn(h,N),k;if(R===null){for(;!L.done;N++,L=p.next())L=f(h,L.value,y),L!==null&&(c=o(L,c,N),C===null?k=L:C.sibling=L,C=L);return V&&sn(h,N),k}for(R=r(h,R);!L.done;N++,L=p.next())L=v(R,h,N,L.value,y),L!==null&&(t&&L.alternate!==null&&R.delete(L.key===null?N:L.key),c=o(L,c,N),C===null?k=L:C.sibling=L,C=L);return t&&R.forEach(function(Tr){return e(h,Tr)}),V&&sn(h,N),k}function A(h,c,p,y){if(typeof p=="object"&&p!==null&&p.type===bn&&p.key===null&&(p=p.props.children),typeof p=="object"&&p!==null){switch(p.$$typeof){case Vi:e:{for(var k=p.key,C=c;C!==null;){if(C.key===k){if(k=p.type,k===bn){if(C.tag===7){n(h,C.sibling),c=i(C,p.props.children),c.return=h,h=c;break e}}else if(C.elementType===k||typeof k=="object"&&k!==null&&k.$$typeof===Pt&&Vc(k)===C.type){n(h,C.sibling),c=i(C,p.props),c.ref=xr(h,C,p),c.return=h,h=c;break e}n(h,C);break}else e(h,C);C=C.sibling}p.type===bn?(c=pn(p.props.children,h.mode,y,p.key),c.return=h,h=c):(y=_o(p.type,p.key,p.props,null,h.mode,y),y.ref=xr(h,c,p),y.return=h,h=y)}return s(h);case Mn:e:{for(C=p.key;c!==null;){if(c.key===C)if(c.tag===4&&c.stateNode.containerInfo===p.containerInfo&&c.stateNode.implementation===p.implementation){n(h,c.sibling),c=i(c,p.children||[]),c.return=h,h=c;break e}else{n(h,c);break}else e(h,c);c=c.sibling}c=sa(p,h.mode,y),c.return=h,h=c}return s(h);case Pt:return C=p._init,A(h,c,C(p._payload),y)}if(jr(p))return _(h,c,p,y);if(Rr(p))return w(h,c,p,y);eo(h,p)}return typeof p=="string"&&p!==""||typeof p=="number"?(p=""+p,c!==null&&c.tag===6?(n(h,c.sibling),c=i(c,p),c.return=h,h=c):(n(h,c),c=oa(p,h.mode,y),c.return=h,h=c),s(h)):n(h,c)}return A}var ar=fh(!0),hh=fh(!1),Li={},at=en(Li),pi=en(Li),mi=en(Li);function dn(t){if(t===Li)throw Error(E(174));return t}function iu(t,e){switch(j(mi,e),j(pi,t),j(at,Li),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Oa(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Oa(e,t)}W(at),j(at,e)}function lr(){W(at),W(pi),W(mi)}function ph(t){dn(mi.current);var e=dn(at.current),n=Oa(e,t.type);e!==n&&(j(pi,t),j(at,n))}function ou(t){pi.current===t&&(W(at),W(pi))}var $=en(0);function Bo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Zs=[];function su(){for(var t=0;t<Zs.length;t++)Zs[t]._workInProgressVersionPrimary=null;Zs.length=0}var po=kt.ReactCurrentDispatcher,ea=kt.ReactCurrentBatchConfig,wn=0,H=null,ne=null,se=null,Wo=!1,Qr=!1,gi=0,Pv=0;function he(){throw Error(E(321))}function au(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Qe(t[n],e[n]))return!1;return!0}function lu(t,e,n,r,i,o){if(wn=o,H=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,po.current=t===null||t.memoizedState===null?xv:Lv,t=n(r,i),Qr){o=0;do{if(Qr=!1,gi=0,25<=o)throw Error(E(301));o+=1,se=ne=null,e.updateQueue=null,po.current=Dv,t=n(r,i)}while(Qr)}if(po.current=Vo,e=ne!==null&&ne.next!==null,wn=0,se=ne=H=null,Wo=!1,e)throw Error(E(300));return t}function uu(){var t=gi!==0;return gi=0,t}function Ze(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return se===null?H.memoizedState=se=t:se=se.next=t,se}function Be(){if(ne===null){var t=H.alternate;t=t!==null?t.memoizedState:null}else t=ne.next;var e=se===null?H.memoizedState:se.next;if(e!==null)se=e,ne=t;else{if(t===null)throw Error(E(310));ne=t,t={memoizedState:ne.memoizedState,baseState:ne.baseState,baseQueue:ne.baseQueue,queue:ne.queue,next:null},se===null?H.memoizedState=se=t:se=se.next=t}return se}function vi(t,e){return typeof e=="function"?e(t):e}function ta(t){var e=Be(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=ne,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=s=null,l=null,u=o;do{var d=u.lane;if((wn&d)===d)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,s=r):l=l.next=f,H.lanes|=d,En|=d}u=u.next}while(u!==null&&u!==o);l===null?s=r:l.next=a,Qe(r,e.memoizedState)||(ke=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do o=i.lane,H.lanes|=o,En|=o,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function na(t){var e=Be(),n=e.queue;if(n===null)throw Error(E(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,o=e.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=t(o,s.action),s=s.next;while(s!==i);Qe(o,e.memoizedState)||(ke=!0),e.memoizedState=o,e.baseQueue===null&&(e.baseState=o),n.lastRenderedState=o}return[o,r]}function mh(){}function gh(t,e){var n=H,r=Be(),i=e(),o=!Qe(r.memoizedState,i);if(o&&(r.memoizedState=i,ke=!0),r=r.queue,cu(_h.bind(null,n,r,t),[t]),r.getSnapshot!==e||o||se!==null&&se.memoizedState.tag&1){if(n.flags|=2048,yi(9,yh.bind(null,n,r,i,e),void 0,null),ae===null)throw Error(E(349));wn&30||vh(n,e,i)}return i}function vh(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yh(t,e,n,r){e.value=n,e.getSnapshot=r,wh(e)&&Eh(t)}function _h(t,e,n){return n(function(){wh(e)&&Eh(t)})}function wh(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Qe(t,n)}catch{return!0}}function Eh(t){var e=wt(t,1);e!==null&&Ye(e,t,1,-1)}function $c(t){var e=Ze();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:vi,lastRenderedState:t},e.queue=t,t=t.dispatch=Ov.bind(null,H,t),[e.memoizedState,t]}function yi(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=H.updateQueue,e===null?(e={lastEffect:null,stores:null},H.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function Ih(){return Be().memoizedState}function mo(t,e,n,r){var i=Ze();H.flags|=t,i.memoizedState=yi(1|e,n,void 0,r===void 0?null:r)}function hs(t,e,n,r){var i=Be();r=r===void 0?null:r;var o=void 0;if(ne!==null){var s=ne.memoizedState;if(o=s.destroy,r!==null&&au(r,s.deps)){i.memoizedState=yi(e,n,o,r);return}}H.flags|=t,i.memoizedState=yi(1|e,n,o,r)}function Hc(t,e){return mo(8390656,8,t,e)}function cu(t,e){return hs(2048,8,t,e)}function kh(t,e){return hs(4,2,t,e)}function Sh(t,e){return hs(4,4,t,e)}function Th(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Ch(t,e,n){return n=n!=null?n.concat([t]):null,hs(4,4,Th.bind(null,e,t),n)}function du(){}function Rh(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&au(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Ph(t,e){var n=Be();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&au(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Nh(t,e,n){return wn&21?(Qe(n,e)||(n=xf(),H.lanes|=n,En|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,ke=!0),t.memoizedState=n)}function Nv(t,e){var n=U;U=n!==0&&4>n?n:4,t(!0);var r=ea.transition;ea.transition={};try{t(!1),e()}finally{U=n,ea.transition=r}}function Ah(){return Be().memoizedState}function Av(t,e,n){var r=Wt(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Oh(t))xh(e,n);else if(n=lh(t,e,n,r),n!==null){var i=ye();Ye(n,t,r,i),Lh(n,e,r)}}function Ov(t,e,n){var r=Wt(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Oh(t))xh(e,i);else{var o=t.alternate;if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var s=e.lastRenderedState,a=o(s,n);if(i.hasEagerState=!0,i.eagerState=a,Qe(a,s)){var l=e.interleaved;l===null?(i.next=i,nu(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=lh(t,e,i,r),n!==null&&(i=ye(),Ye(n,t,r,i),Lh(n,e,r))}}function Oh(t){var e=t.alternate;return t===H||e!==null&&e===H}function xh(t,e){Qr=Wo=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Lh(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Wl(t,n)}}var Vo={readContext:ze,useCallback:he,useContext:he,useEffect:he,useImperativeHandle:he,useInsertionEffect:he,useLayoutEffect:he,useMemo:he,useReducer:he,useRef:he,useState:he,useDebugValue:he,useDeferredValue:he,useTransition:he,useMutableSource:he,useSyncExternalStore:he,useId:he,unstable_isNewReconciler:!1},xv={readContext:ze,useCallback:function(t,e){return Ze().memoizedState=[t,e===void 0?null:e],t},useContext:ze,useEffect:Hc,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,mo(4194308,4,Th.bind(null,e,t),n)},useLayoutEffect:function(t,e){return mo(4194308,4,t,e)},useInsertionEffect:function(t,e){return mo(4,2,t,e)},useMemo:function(t,e){var n=Ze();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=Ze();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Av.bind(null,H,t),[r.memoizedState,t]},useRef:function(t){var e=Ze();return t={current:t},e.memoizedState=t},useState:$c,useDebugValue:du,useDeferredValue:function(t){return Ze().memoizedState=t},useTransition:function(){var t=$c(!1),e=t[0];return t=Nv.bind(null,t[1]),Ze().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=H,i=Ze();if(V){if(n===void 0)throw Error(E(407));n=n()}else{if(n=e(),ae===null)throw Error(E(349));wn&30||vh(r,e,n)}i.memoizedState=n;var o={value:n,getSnapshot:e};return i.queue=o,Hc(_h.bind(null,r,o,t),[t]),r.flags|=2048,yi(9,yh.bind(null,r,o,n,e),void 0,null),n},useId:function(){var t=Ze(),e=ae.identifierPrefix;if(V){var n=ft,r=dt;n=(r&~(1<<32-qe(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=gi++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=Pv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Lv={readContext:ze,useCallback:Rh,useContext:ze,useEffect:cu,useImperativeHandle:Ch,useInsertionEffect:kh,useLayoutEffect:Sh,useMemo:Ph,useReducer:ta,useRef:Ih,useState:function(){return ta(vi)},useDebugValue:du,useDeferredValue:function(t){var e=Be();return Nh(e,ne.memoizedState,t)},useTransition:function(){var t=ta(vi)[0],e=Be().memoizedState;return[t,e]},useMutableSource:mh,useSyncExternalStore:gh,useId:Ah,unstable_isNewReconciler:!1},Dv={readContext:ze,useCallback:Rh,useContext:ze,useEffect:cu,useImperativeHandle:Ch,useInsertionEffect:kh,useLayoutEffect:Sh,useMemo:Ph,useReducer:na,useRef:Ih,useState:function(){return na(vi)},useDebugValue:du,useDeferredValue:function(t){var e=Be();return ne===null?e.memoizedState=t:Nh(e,ne.memoizedState,t)},useTransition:function(){var t=na(vi)[0],e=Be().memoizedState;return[t,e]},useMutableSource:mh,useSyncExternalStore:gh,useId:Ah,unstable_isNewReconciler:!1};function ur(t,e){try{var n="",r=e;do n+=lg(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:t,source:e,stack:i,digest:null}}function ra(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function el(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Mv=typeof WeakMap=="function"?WeakMap:Map;function Dh(t,e,n){n=mt(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ho||(Ho=!0,cl=r),el(t,e)},n}function Mh(t,e,n){n=mt(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){el(t,e)}}var o=t.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){el(t,e),typeof r!="function"&&(Bt===null?Bt=new Set([this]):Bt.add(this));var s=e.stack;this.componentDidCatch(e.value,{componentStack:s!==null?s:""})}),n}function Kc(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Mv;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=Yv.bind(null,t,e,n),e.then(t,t))}function Gc(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function qc(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=mt(-1,1),e.tag=2,zt(n,e,1))),n.lanes|=1),t)}var bv=kt.ReactCurrentOwner,ke=!1;function ve(t,e,n,r){e.child=t===null?hh(e,null,n,r):ar(e,t.child,n,r)}function Yc(t,e,n,r,i){n=n.render;var o=e.ref;return Xn(e,i),r=lu(t,e,n,r,o,i),n=uu(),t!==null&&!ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):(V&&n&&Ql(e),e.flags|=1,ve(t,e,r,i),e.child)}function Qc(t,e,n,r,i){if(t===null){var o=n.type;return typeof o=="function"&&!_u(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,bh(t,e,o,r,i)):(t=_o(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(o=t.child,!(t.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:ci,n(s,r)&&t.ref===e.ref)return Et(t,e,i)}return e.flags|=1,t=Vt(o,r),t.ref=e.ref,t.return=e,e.child=t}function bh(t,e,n,r,i){if(t!==null){var o=t.memoizedProps;if(ci(o,r)&&t.ref===e.ref)if(ke=!1,e.pendingProps=r=o,(t.lanes&i)!==0)t.flags&131072&&(ke=!0);else return e.lanes=t.lanes,Et(t,e,i)}return tl(t,e,n,r,i)}function Uh(t,e,n){var r=e.pendingProps,i=r.children,o=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},j(Kn,Pe),Pe|=n;else{if(!(n&1073741824))return t=o!==null?o.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,j(Kn,Pe),Pe|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,j(Kn,Pe),Pe|=r}else o!==null?(r=o.baseLanes|n,e.memoizedState=null):r=n,j(Kn,Pe),Pe|=r;return ve(t,e,i,n),e.child}function Fh(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function tl(t,e,n,r,i){var o=Te(n)?yn:ge.current;return o=or(e,o),Xn(e,i),n=lu(t,e,n,r,o,i),r=uu(),t!==null&&!ke?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Et(t,e,i)):(V&&r&&Ql(e),e.flags|=1,ve(t,e,n,i),e.child)}function Jc(t,e,n,r,i){if(Te(n)){var o=!0;Mo(e)}else o=!1;if(Xn(e,i),e.stateNode===null)go(t,e),dh(e,n,r),Za(e,n,r,i),r=!0;else if(t===null){var s=e.stateNode,a=e.memoizedProps;s.props=a;var l=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=ze(u):(u=Te(n)?yn:ge.current,u=or(e,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";f||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==r||l!==u)&&Wc(e,s,r,u),Nt=!1;var m=e.memoizedState;s.state=m,zo(e,r,s,i),l=e.memoizedState,a!==r||m!==l||Se.current||Nt?(typeof d=="function"&&(Xa(e,n,d,r),l=e.memoizedState),(a=Nt||Bc(e,n,a,r,m,l,u))?(f||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(e.flags|=4194308)):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),s.props=r,s.state=l,s.context=u,r=a):(typeof s.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{s=e.stateNode,uh(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:He(e.type,a),s.props=u,f=e.pendingProps,m=s.context,l=n.contextType,typeof l=="object"&&l!==null?l=ze(l):(l=Te(n)?yn:ge.current,l=or(e,l));var v=n.getDerivedStateFromProps;(d=typeof v=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(a!==f||m!==l)&&Wc(e,s,r,l),Nt=!1,m=e.memoizedState,s.state=m,zo(e,r,s,i);var _=e.memoizedState;a!==f||m!==_||Se.current||Nt?(typeof v=="function"&&(Xa(e,n,v,r),_=e.memoizedState),(u=Nt||Bc(e,n,u,r,m,_,l)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,_,l),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,_,l)),typeof s.componentDidUpdate=="function"&&(e.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=_),s.props=r,s.state=_,s.context=l,r=u):(typeof s.componentDidUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&m===t.memoizedState||(e.flags|=1024),r=!1)}return nl(t,e,n,r,o,i)}function nl(t,e,n,r,i,o){Fh(t,e);var s=(e.flags&128)!==0;if(!r&&!s)return i&&bc(e,n,!1),Et(t,e,o);r=e.stateNode,bv.current=e;var a=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&s?(e.child=ar(e,t.child,null,o),e.child=ar(e,null,a,o)):ve(t,e,a,o),e.memoizedState=r.state,i&&bc(e,n,!0),e.child}function jh(t){var e=t.stateNode;e.pendingContext?Mc(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Mc(t,e.context,!1),iu(t,e.containerInfo)}function Xc(t,e,n,r,i){return sr(),Xl(i),e.flags|=256,ve(t,e,n,r),e.child}var rl={dehydrated:null,treeContext:null,retryLane:0};function il(t){return{baseLanes:t,cachePool:null,transitions:null}}function zh(t,e,n){var r=e.pendingProps,i=$.current,o=!1,s=(e.flags&128)!==0,a;if((a=s)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(o=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),j($,i&1),t===null)return Qa(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(s=r.children,t=r.fallback,o?(r=e.mode,o=e.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=gs(s,r,0,null),t=pn(t,r,n,null),o.return=e,t.return=e,o.sibling=t,e.child=o,e.child.memoizedState=il(n),e.memoizedState=rl,t):fu(e,s));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return Uv(t,e,s,r,a,i,n);if(o){o=r.fallback,s=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(s&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=Vt(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Vt(a,o):(o=pn(o,s,n,null),o.flags|=2),o.return=e,r.return=e,r.sibling=o,e.child=r,r=o,o=e.child,s=t.child.memoizedState,s=s===null?il(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=t.childLanes&~n,e.memoizedState=rl,r}return o=t.child,t=o.sibling,r=Vt(o,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function fu(t,e){return e=gs({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function to(t,e,n,r){return r!==null&&Xl(r),ar(e,t.child,null,n),t=fu(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Uv(t,e,n,r,i,o,s){if(n)return e.flags&256?(e.flags&=-257,r=ra(Error(E(422))),to(t,e,s,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(o=r.fallback,i=e.mode,r=gs({mode:"visible",children:r.children},i,0,null),o=pn(o,i,s,null),o.flags|=2,r.return=e,o.return=e,r.sibling=o,e.child=r,e.mode&1&&ar(e,t.child,null,s),e.child.memoizedState=il(s),e.memoizedState=rl,o);if(!(e.mode&1))return to(t,e,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(E(419)),r=ra(o,r,void 0),to(t,e,s,r)}if(a=(s&t.childLanes)!==0,ke||a){if(r=ae,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,wt(t,i),Ye(r,t,i,-1))}return yu(),r=ra(Error(E(421))),to(t,e,s,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=Qv.bind(null,t),i._reactRetry=e,null):(t=o.treeContext,Ae=jt(i.nextSibling),xe=e,V=!0,Ge=null,t!==null&&(be[Ue++]=dt,be[Ue++]=ft,be[Ue++]=_n,dt=t.id,ft=t.overflow,_n=e),e=fu(e,r.children),e.flags|=4096,e)}function Zc(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Ja(t.return,e,n)}function ia(t,e,n,r,i){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function Bh(t,e,n){var r=e.pendingProps,i=r.revealOrder,o=r.tail;if(ve(t,e,r.children,n),r=$.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Zc(t,n,e);else if(t.tag===19)Zc(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(j($,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Bo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),ia(e,!1,i,n,o);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Bo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}ia(e,!0,n,null,o);break;case"together":ia(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function go(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Et(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),En|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(E(153));if(e.child!==null){for(t=e.child,n=Vt(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Vt(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Fv(t,e,n){switch(e.tag){case 3:jh(e),sr();break;case 5:ph(e);break;case 1:Te(e.type)&&Mo(e);break;case 4:iu(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;j(Fo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(j($,$.current&1),e.flags|=128,null):n&e.child.childLanes?zh(t,e,n):(j($,$.current&1),t=Et(t,e,n),t!==null?t.sibling:null);j($,$.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Bh(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),j($,$.current),r)break;return null;case 22:case 23:return e.lanes=0,Uh(t,e,n)}return Et(t,e,n)}var Wh,ol,Vh,$h;Wh=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ol=function(){};Vh=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,dn(at.current);var o=null;switch(n){case"input":i=Ra(t,i),r=Ra(t,r),o=[];break;case"select":i=K({},i,{value:void 0}),r=K({},r,{value:void 0}),o=[];break;case"textarea":i=Aa(t,i),r=Aa(t,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lo)}xa(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(s in a)a.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ri.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(s in a)!a.hasOwnProperty(s)||l&&l.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in l)l.hasOwnProperty(s)&&a[s]!==l[s]&&(n||(n={}),n[s]=l[s])}else n||(o||(o=[]),o.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(o=o||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(o=o||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ri.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&B("scroll",t),o||a===l||(o=[])):(o=o||[]).push(u,l))}n&&(o=o||[]).push("style",n);var u=o;(e.updateQueue=u)&&(e.flags|=4)}};$h=function(t,e,n,r){n!==r&&(e.flags|=4)};function Lr(t,e){if(!V)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function pe(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function jv(t,e,n){var r=e.pendingProps;switch(Jl(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return pe(e),null;case 1:return Te(e.type)&&Do(),pe(e),null;case 3:return r=e.stateNode,lr(),W(Se),W(ge),su(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Zi(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Ge!==null&&(hl(Ge),Ge=null))),ol(t,e),pe(e),null;case 5:ou(e);var i=dn(mi.current);if(n=e.type,t!==null&&e.stateNode!=null)Vh(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(E(166));return pe(e),null}if(t=dn(at.current),Zi(e)){r=e.stateNode,n=e.type;var o=e.memoizedProps;switch(r[et]=e,r[hi]=o,t=(e.mode&1)!==0,n){case"dialog":B("cancel",r),B("close",r);break;case"iframe":case"object":case"embed":B("load",r);break;case"video":case"audio":for(i=0;i<Br.length;i++)B(Br[i],r);break;case"source":B("error",r);break;case"img":case"image":case"link":B("error",r),B("load",r);break;case"details":B("toggle",r);break;case"input":lc(r,o),B("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},B("invalid",r);break;case"textarea":cc(r,o),B("invalid",r)}xa(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var a=o[s];s==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&Xi(r.textContent,a,t),i=["children",""+a]):ri.hasOwnProperty(s)&&a!=null&&s==="onScroll"&&B("scroll",r)}switch(n){case"input":$i(r),uc(r,o,!0);break;case"textarea":$i(r),dc(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Lo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=vf(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=s.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=s.createElement(n,{is:r.is}):(t=s.createElement(n),n==="select"&&(s=t,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):t=s.createElementNS(t,n),t[et]=e,t[hi]=r,Wh(t,e,!1,!1),e.stateNode=t;e:{switch(s=La(n,r),n){case"dialog":B("cancel",t),B("close",t),i=r;break;case"iframe":case"object":case"embed":B("load",t),i=r;break;case"video":case"audio":for(i=0;i<Br.length;i++)B(Br[i],t);i=r;break;case"source":B("error",t),i=r;break;case"img":case"image":case"link":B("error",t),B("load",t),i=r;break;case"details":B("toggle",t),i=r;break;case"input":lc(t,r),i=Ra(t,r),B("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=K({},r,{value:void 0}),B("invalid",t);break;case"textarea":cc(t,r),i=Aa(t,r),B("invalid",t);break;default:i=r}xa(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var l=a[o];o==="style"?wf(t,l):o==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&yf(t,l)):o==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ii(t,l):typeof l=="number"&&ii(t,""+l):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ri.hasOwnProperty(o)?l!=null&&o==="onScroll"&&B("scroll",t):l!=null&&bl(t,o,l,s))}switch(n){case"input":$i(t),uc(t,r,!1);break;case"textarea":$i(t),dc(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Gt(r.value));break;case"select":t.multiple=!!r.multiple,o=r.value,o!=null?qn(t,!!r.multiple,o,!1):r.defaultValue!=null&&qn(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return pe(e),null;case 6:if(t&&e.stateNode!=null)$h(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(E(166));if(n=dn(mi.current),dn(at.current),Zi(e)){if(r=e.stateNode,n=e.memoizedProps,r[et]=e,(o=r.nodeValue!==n)&&(t=xe,t!==null))switch(t.tag){case 3:Xi(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Xi(r.nodeValue,n,(t.mode&1)!==0)}o&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[et]=e,e.stateNode=r}return pe(e),null;case 13:if(W($),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(V&&Ae!==null&&e.mode&1&&!(e.flags&128))ah(),sr(),e.flags|=98560,o=!1;else if(o=Zi(e),r!==null&&r.dehydrated!==null){if(t===null){if(!o)throw Error(E(318));if(o=e.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(E(317));o[et]=e}else sr(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;pe(e),o=!1}else Ge!==null&&(hl(Ge),Ge=null),o=!0;if(!o)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||$.current&1?re===0&&(re=3):yu())),e.updateQueue!==null&&(e.flags|=4),pe(e),null);case 4:return lr(),ol(t,e),t===null&&di(e.stateNode.containerInfo),pe(e),null;case 10:return tu(e.type._context),pe(e),null;case 17:return Te(e.type)&&Do(),pe(e),null;case 19:if(W($),o=e.memoizedState,o===null)return pe(e),null;if(r=(e.flags&128)!==0,s=o.rendering,s===null)if(r)Lr(o,!1);else{if(re!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(s=Bo(t),s!==null){for(e.flags|=128,Lr(o,!1),r=s.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)o=n,t=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=t,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,t=s.dependencies,o.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return j($,$.current&1|2),e.child}t=t.sibling}o.tail!==null&&Y()>cr&&(e.flags|=128,r=!0,Lr(o,!1),e.lanes=4194304)}else{if(!r)if(t=Bo(s),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Lr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!V)return pe(e),null}else 2*Y()-o.renderingStartTime>cr&&n!==1073741824&&(e.flags|=128,r=!0,Lr(o,!1),e.lanes=4194304);o.isBackwards?(s.sibling=e.child,e.child=s):(n=o.last,n!==null?n.sibling=s:e.child=s,o.last=s)}return o.tail!==null?(e=o.tail,o.rendering=e,o.tail=e.sibling,o.renderingStartTime=Y(),e.sibling=null,n=$.current,j($,r?n&1|2:n&1),e):(pe(e),null);case 22:case 23:return vu(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Pe&1073741824&&(pe(e),e.subtreeFlags&6&&(e.flags|=8192)):pe(e),null;case 24:return null;case 25:return null}throw Error(E(156,e.tag))}function zv(t,e){switch(Jl(e),e.tag){case 1:return Te(e.type)&&Do(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return lr(),W(Se),W(ge),su(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ou(e),null;case 13:if(W($),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(E(340));sr()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return W($),null;case 4:return lr(),null;case 10:return tu(e.type._context),null;case 22:case 23:return vu(),null;case 24:return null;default:return null}}var no=!1,me=!1,Bv=typeof WeakSet=="function"?WeakSet:Set,S=null;function Hn(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){G(t,e,r)}else n.current=null}function sl(t,e,n){try{n()}catch(r){G(t,e,r)}}var ed=!1;function Wv(t,e){if(Va=Ao,t=qf(),Yl(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,a=-1,l=-1,u=0,d=0,f=t,m=null;t:for(;;){for(var v;f!==n||i!==0&&f.nodeType!==3||(a=s+i),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(v=f.firstChild)!==null;)m=f,f=v;for(;;){if(f===t)break t;if(m===n&&++u===i&&(a=s),m===o&&++d===r&&(l=s),(v=f.nextSibling)!==null)break;f=m,m=f.parentNode}f=v}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($a={focusedElem:t,selectionRange:n},Ao=!1,S=e;S!==null;)if(e=S,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,S=t;else for(;S!==null;){e=S;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var w=_.memoizedProps,A=_.memoizedState,h=e.stateNode,c=h.getSnapshotBeforeUpdate(e.elementType===e.type?w:He(e.type,w),A);h.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var p=e.stateNode.containerInfo;p.nodeType===1?p.textContent="":p.nodeType===9&&p.documentElement&&p.removeChild(p.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(E(163))}}catch(y){G(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,S=t;break}S=e.return}return _=ed,ed=!1,_}function Jr(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var o=i.destroy;i.destroy=void 0,o!==void 0&&sl(e,n,o)}i=i.next}while(i!==r)}}function ps(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function al(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Hh(t){var e=t.alternate;e!==null&&(t.alternate=null,Hh(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[et],delete e[hi],delete e[Ga],delete e[Sv],delete e[Tv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Kh(t){return t.tag===5||t.tag===3||t.tag===4}function td(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Kh(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ll(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lo));else if(r!==4&&(t=t.child,t!==null))for(ll(t,e,n),t=t.sibling;t!==null;)ll(t,e,n),t=t.sibling}function ul(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(ul(t,e,n),t=t.sibling;t!==null;)ul(t,e,n),t=t.sibling}var le=null,Ke=!1;function Ct(t,e,n){for(n=n.child;n!==null;)Gh(t,e,n),n=n.sibling}function Gh(t,e,n){if(st&&typeof st.onCommitFiberUnmount=="function")try{st.onCommitFiberUnmount(ss,n)}catch{}switch(n.tag){case 5:me||Hn(n,e);case 6:var r=le,i=Ke;le=null,Ct(t,e,n),le=r,Ke=i,le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):le.removeChild(n.stateNode));break;case 18:le!==null&&(Ke?(t=le,n=n.stateNode,t.nodeType===8?Js(t.parentNode,n):t.nodeType===1&&Js(t,n),li(t)):Js(le,n.stateNode));break;case 4:r=le,i=Ke,le=n.stateNode.containerInfo,Ke=!0,Ct(t,e,n),le=r,Ke=i;break;case 0:case 11:case 14:case 15:if(!me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&sl(n,e,s),i=i.next}while(i!==r)}Ct(t,e,n);break;case 1:if(!me&&(Hn(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){G(n,e,a)}Ct(t,e,n);break;case 21:Ct(t,e,n);break;case 22:n.mode&1?(me=(r=me)||n.memoizedState!==null,Ct(t,e,n),me=r):Ct(t,e,n);break;default:Ct(t,e,n)}}function nd(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Bv),e.forEach(function(r){var i=Jv.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function $e(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=t,s=e,a=s;e:for(;a!==null;){switch(a.tag){case 5:le=a.stateNode,Ke=!1;break e;case 3:le=a.stateNode.containerInfo,Ke=!0;break e;case 4:le=a.stateNode.containerInfo,Ke=!0;break e}a=a.return}if(le===null)throw Error(E(160));Gh(o,s,i),le=null,Ke=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){G(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)qh(e,t),e=e.sibling}function qh(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($e(e,t),Xe(t),r&4){try{Jr(3,t,t.return),ps(3,t)}catch(w){G(t,t.return,w)}try{Jr(5,t,t.return)}catch(w){G(t,t.return,w)}}break;case 1:$e(e,t),Xe(t),r&512&&n!==null&&Hn(n,n.return);break;case 5:if($e(e,t),Xe(t),r&512&&n!==null&&Hn(n,n.return),t.flags&32){var i=t.stateNode;try{ii(i,"")}catch(w){G(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var o=t.memoizedProps,s=n!==null?n.memoizedProps:o,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&mf(i,o),La(a,s);var u=La(a,o);for(s=0;s<l.length;s+=2){var d=l[s],f=l[s+1];d==="style"?wf(i,f):d==="dangerouslySetInnerHTML"?yf(i,f):d==="children"?ii(i,f):bl(i,d,f,u)}switch(a){case"input":Pa(i,o);break;case"textarea":gf(i,o);break;case"select":var m=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var v=o.value;v!=null?qn(i,!!o.multiple,v,!1):m!==!!o.multiple&&(o.defaultValue!=null?qn(i,!!o.multiple,o.defaultValue,!0):qn(i,!!o.multiple,o.multiple?[]:"",!1))}i[hi]=o}catch(w){G(t,t.return,w)}}break;case 6:if($e(e,t),Xe(t),r&4){if(t.stateNode===null)throw Error(E(162));i=t.stateNode,o=t.memoizedProps;try{i.nodeValue=o}catch(w){G(t,t.return,w)}}break;case 3:if($e(e,t),Xe(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{li(e.containerInfo)}catch(w){G(t,t.return,w)}break;case 4:$e(e,t),Xe(t);break;case 13:$e(e,t),Xe(t),i=t.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(mu=Y())),r&4&&nd(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(me=(u=me)||d,$e(e,t),me=u):$e(e,t),Xe(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!d&&t.mode&1)for(S=t,d=t.child;d!==null;){for(f=S=d;S!==null;){switch(m=S,v=m.child,m.tag){case 0:case 11:case 14:case 15:Jr(4,m,m.return);break;case 1:Hn(m,m.return);var _=m.stateNode;if(typeof _.componentWillUnmount=="function"){r=m,n=m.return;try{e=r,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(w){G(r,n,w)}}break;case 5:Hn(m,m.return);break;case 22:if(m.memoizedState!==null){id(f);continue}}v!==null?(v.return=m,S=v):id(f)}d=d.sibling}e:for(d=null,f=t;;){if(f.tag===5){if(d===null){d=f;try{i=f.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=f.stateNode,l=f.memoizedProps.style,s=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=_f("display",s))}catch(w){G(t,t.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){G(t,t.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$e(e,t),Xe(t),r&4&&nd(t);break;case 21:break;default:$e(e,t),Xe(t)}}function Xe(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Kh(n)){var r=n;break e}n=n.return}throw Error(E(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(ii(i,""),r.flags&=-33);var o=td(t);ul(t,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,a=td(t);ll(t,a,s);break;default:throw Error(E(161))}}catch(l){G(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Vv(t,e,n){S=t,Yh(t)}function Yh(t,e,n){for(var r=(t.mode&1)!==0;S!==null;){var i=S,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||no;if(!s){var a=i.alternate,l=a!==null&&a.memoizedState!==null||me;a=no;var u=me;if(no=s,(me=l)&&!u)for(S=i;S!==null;)s=S,l=s.child,s.tag===22&&s.memoizedState!==null?od(i):l!==null?(l.return=s,S=l):od(i);for(;o!==null;)S=o,Yh(o),o=o.sibling;S=i,no=a,me=u}rd(t)}else i.subtreeFlags&8772&&o!==null?(o.return=i,S=o):rd(t)}}function rd(t){for(;S!==null;){var e=S;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:me||ps(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!me)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:He(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=e.updateQueue;o!==null&&zc(e,o,r);break;case 3:var s=e.updateQueue;if(s!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}zc(e,s,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&li(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(E(163))}me||e.flags&512&&al(e)}catch(m){G(e,e.return,m)}}if(e===t){S=null;break}if(n=e.sibling,n!==null){n.return=e.return,S=n;break}S=e.return}}function id(t){for(;S!==null;){var e=S;if(e===t){S=null;break}var n=e.sibling;if(n!==null){n.return=e.return,S=n;break}S=e.return}}function od(t){for(;S!==null;){var e=S;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ps(4,e)}catch(l){G(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){G(e,i,l)}}var o=e.return;try{al(e)}catch(l){G(e,o,l)}break;case 5:var s=e.return;try{al(e)}catch(l){G(e,s,l)}}}catch(l){G(e,e.return,l)}if(e===t){S=null;break}var a=e.sibling;if(a!==null){a.return=e.return,S=a;break}S=e.return}}var $v=Math.ceil,$o=kt.ReactCurrentDispatcher,hu=kt.ReactCurrentOwner,je=kt.ReactCurrentBatchConfig,M=0,ae=null,X=null,ue=0,Pe=0,Kn=en(0),re=0,_i=null,En=0,ms=0,pu=0,Xr=null,Ie=null,mu=0,cr=1/0,ut=null,Ho=!1,cl=null,Bt=null,ro=!1,Lt=null,Ko=0,Zr=0,dl=null,vo=-1,yo=0;function ye(){return M&6?Y():vo!==-1?vo:vo=Y()}function Wt(t){return t.mode&1?M&2&&ue!==0?ue&-ue:Rv.transition!==null?(yo===0&&(yo=xf()),yo):(t=U,t!==0||(t=window.event,t=t===void 0?16:jf(t.type)),t):1}function Ye(t,e,n,r){if(50<Zr)throw Zr=0,dl=null,Error(E(185));Ai(t,n,r),(!(M&2)||t!==ae)&&(t===ae&&(!(M&2)&&(ms|=n),re===4&&Ot(t,ue)),Ce(t,r),n===1&&M===0&&!(e.mode&1)&&(cr=Y()+500,ds&&tn()))}function Ce(t,e){var n=t.callbackNode;Rg(t,e);var r=No(t,t===ae?ue:0);if(r===0)n!==null&&pc(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&pc(n),e===1)t.tag===0?Cv(sd.bind(null,t)):ih(sd.bind(null,t)),Iv(function(){!(M&6)&&tn()}),n=null;else{switch(Lf(r)){case 1:n=Bl;break;case 4:n=Af;break;case 16:n=Po;break;case 536870912:n=Of;break;default:n=Po}n=rp(n,Qh.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qh(t,e){if(vo=-1,yo=0,M&6)throw Error(E(327));var n=t.callbackNode;if(Zn()&&t.callbackNode!==n)return null;var r=No(t,t===ae?ue:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Go(t,r);else{e=r;var i=M;M|=2;var o=Xh();(ae!==t||ue!==e)&&(ut=null,cr=Y()+500,hn(t,e));do try{Gv();break}catch(a){Jh(t,a)}while(1);eu(),$o.current=o,M=i,X!==null?e=0:(ae=null,ue=0,e=re)}if(e!==0){if(e===2&&(i=Fa(t),i!==0&&(r=i,e=fl(t,i))),e===1)throw n=_i,hn(t,0),Ot(t,r),Ce(t,Y()),n;if(e===6)Ot(t,r);else{if(i=t.current.alternate,!(r&30)&&!Hv(i)&&(e=Go(t,r),e===2&&(o=Fa(t),o!==0&&(r=o,e=fl(t,o))),e===1))throw n=_i,hn(t,0),Ot(t,r),Ce(t,Y()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(E(345));case 2:an(t,Ie,ut);break;case 3:if(Ot(t,r),(r&130023424)===r&&(e=mu+500-Y(),10<e)){if(No(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){ye(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Ka(an.bind(null,t,Ie,ut),e);break}an(t,Ie,ut);break;case 4:if(Ot(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var s=31-qe(r);o=1<<s,s=e[s],s>i&&(i=s),r&=~o}if(r=i,r=Y()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*$v(r/1960))-r,10<r){t.timeoutHandle=Ka(an.bind(null,t,Ie,ut),r);break}an(t,Ie,ut);break;case 5:an(t,Ie,ut);break;default:throw Error(E(329))}}}return Ce(t,Y()),t.callbackNode===n?Qh.bind(null,t):null}function fl(t,e){var n=Xr;return t.current.memoizedState.isDehydrated&&(hn(t,e).flags|=256),t=Go(t,e),t!==2&&(e=Ie,Ie=n,e!==null&&hl(e)),t}function hl(t){Ie===null?Ie=t:Ie.push.apply(Ie,t)}function Hv(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Qe(o(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Ot(t,e){for(e&=~pu,e&=~ms,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qe(e),r=1<<n;t[n]=-1,e&=~r}}function sd(t){if(M&6)throw Error(E(327));Zn();var e=No(t,0);if(!(e&1))return Ce(t,Y()),null;var n=Go(t,e);if(t.tag!==0&&n===2){var r=Fa(t);r!==0&&(e=r,n=fl(t,r))}if(n===1)throw n=_i,hn(t,0),Ot(t,e),Ce(t,Y()),n;if(n===6)throw Error(E(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,an(t,Ie,ut),Ce(t,Y()),null}function gu(t,e){var n=M;M|=1;try{return t(e)}finally{M=n,M===0&&(cr=Y()+500,ds&&tn())}}function In(t){Lt!==null&&Lt.tag===0&&!(M&6)&&Zn();var e=M;M|=1;var n=je.transition,r=U;try{if(je.transition=null,U=1,t)return t()}finally{U=r,je.transition=n,M=e,!(M&6)&&tn()}}function vu(){Pe=Kn.current,W(Kn)}function hn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Ev(n)),X!==null)for(n=X.return;n!==null;){var r=n;switch(Jl(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Do();break;case 3:lr(),W(Se),W(ge),su();break;case 5:ou(r);break;case 4:lr();break;case 13:W($);break;case 19:W($);break;case 10:tu(r.type._context);break;case 22:case 23:vu()}n=n.return}if(ae=t,X=t=Vt(t.current,null),ue=Pe=e,re=0,_i=null,pu=ms=En=0,Ie=Xr=null,cn!==null){for(e=0;e<cn.length;e++)if(n=cn[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}cn=null}return t}function Jh(t,e){do{var n=X;try{if(eu(),po.current=Vo,Wo){for(var r=H.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Wo=!1}if(wn=0,se=ne=H=null,Qr=!1,gi=0,hu.current=null,n===null||n.return===null){re=1,_i=e,X=null;break}e:{var o=t,s=n.return,a=n,l=e;if(e=ue,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var m=d.alternate;m?(d.updateQueue=m.updateQueue,d.memoizedState=m.memoizedState,d.lanes=m.lanes):(d.updateQueue=null,d.memoizedState=null)}var v=Gc(s);if(v!==null){v.flags&=-257,qc(v,s,a,o,e),v.mode&1&&Kc(o,u,e),e=v,l=u;var _=e.updateQueue;if(_===null){var w=new Set;w.add(l),e.updateQueue=w}else _.add(l);break e}else{if(!(e&1)){Kc(o,u,e),yu();break e}l=Error(E(426))}}else if(V&&a.mode&1){var A=Gc(s);if(A!==null){!(A.flags&65536)&&(A.flags|=256),qc(A,s,a,o,e),Xl(ur(l,a));break e}}o=l=ur(l,a),re!==4&&(re=2),Xr===null?Xr=[o]:Xr.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,e&=-e,o.lanes|=e;var h=Dh(o,l,e);jc(o,h);break e;case 1:a=l;var c=o.type,p=o.stateNode;if(!(o.flags&128)&&(typeof c.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Bt===null||!Bt.has(p)))){o.flags|=65536,e&=-e,o.lanes|=e;var y=Mh(o,a,e);jc(o,y);break e}}o=o.return}while(o!==null)}ep(n)}catch(k){e=k,X===n&&n!==null&&(X=n=n.return);continue}break}while(1)}function Xh(){var t=$o.current;return $o.current=Vo,t===null?Vo:t}function yu(){(re===0||re===3||re===2)&&(re=4),ae===null||!(En&268435455)&&!(ms&268435455)||Ot(ae,ue)}function Go(t,e){var n=M;M|=2;var r=Xh();(ae!==t||ue!==e)&&(ut=null,hn(t,e));do try{Kv();break}catch(i){Jh(t,i)}while(1);if(eu(),M=n,$o.current=r,X!==null)throw Error(E(261));return ae=null,ue=0,re}function Kv(){for(;X!==null;)Zh(X)}function Gv(){for(;X!==null&&!yg();)Zh(X)}function Zh(t){var e=np(t.alternate,t,Pe);t.memoizedProps=t.pendingProps,e===null?ep(t):X=e,hu.current=null}function ep(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zv(n,e),n!==null){n.flags&=32767,X=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{re=6,X=null;return}}else if(n=jv(n,e,Pe),n!==null){X=n;return}if(e=e.sibling,e!==null){X=e;return}X=e=t}while(e!==null);re===0&&(re=5)}function an(t,e,n){var r=U,i=je.transition;try{je.transition=null,U=1,qv(t,e,n,r)}finally{je.transition=i,U=r}return null}function qv(t,e,n,r){do Zn();while(Lt!==null);if(M&6)throw Error(E(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(E(177));t.callbackNode=null,t.callbackPriority=0;var o=n.lanes|n.childLanes;if(Pg(t,o),t===ae&&(X=ae=null,ue=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ro||(ro=!0,rp(Po,function(){return Zn(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=je.transition,je.transition=null;var s=U;U=1;var a=M;M|=4,hu.current=null,Wv(t,n),qh(n,t),pv($a),Ao=!!Va,$a=Va=null,t.current=n,Vv(n),_g(),M=a,U=s,je.transition=o}else t.current=n;if(ro&&(ro=!1,Lt=t,Ko=i),o=t.pendingLanes,o===0&&(Bt=null),Ig(n.stateNode),Ce(t,Y()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ho)throw Ho=!1,t=cl,cl=null,t;return Ko&1&&t.tag!==0&&Zn(),o=t.pendingLanes,o&1?t===dl?Zr++:(Zr=0,dl=t):Zr=0,tn(),null}function Zn(){if(Lt!==null){var t=Lf(Ko),e=je.transition,n=U;try{if(je.transition=null,U=16>t?16:t,Lt===null)var r=!1;else{if(t=Lt,Lt=null,Ko=0,M&6)throw Error(E(331));var i=M;for(M|=4,S=t.current;S!==null;){var o=S,s=o.child;if(S.flags&16){var a=o.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(S=u;S!==null;){var d=S;switch(d.tag){case 0:case 11:case 15:Jr(8,d,o)}var f=d.child;if(f!==null)f.return=d,S=f;else for(;S!==null;){d=S;var m=d.sibling,v=d.return;if(Hh(d),d===u){S=null;break}if(m!==null){m.return=v,S=m;break}S=v}}}var _=o.alternate;if(_!==null){var w=_.child;if(w!==null){_.child=null;do{var A=w.sibling;w.sibling=null,w=A}while(w!==null)}}S=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,S=s;else e:for(;S!==null;){if(o=S,o.flags&2048)switch(o.tag){case 0:case 11:case 15:Jr(9,o,o.return)}var h=o.sibling;if(h!==null){h.return=o.return,S=h;break e}S=o.return}}var c=t.current;for(S=c;S!==null;){s=S;var p=s.child;if(s.subtreeFlags&2064&&p!==null)p.return=s,S=p;else e:for(s=c;S!==null;){if(a=S,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ps(9,a)}}catch(k){G(a,a.return,k)}if(a===s){S=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,S=y;break e}S=a.return}}if(M=i,tn(),st&&typeof st.onPostCommitFiberRoot=="function")try{st.onPostCommitFiberRoot(ss,t)}catch{}r=!0}return r}finally{U=n,je.transition=e}}return!1}function ad(t,e,n){e=ur(n,e),e=Dh(t,e,1),t=zt(t,e,1),e=ye(),t!==null&&(Ai(t,1,e),Ce(t,e))}function G(t,e,n){if(t.tag===3)ad(t,t,n);else for(;e!==null;){if(e.tag===3){ad(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Bt===null||!Bt.has(r))){t=ur(n,t),t=Mh(e,t,1),e=zt(e,t,1),t=ye(),e!==null&&(Ai(e,1,t),Ce(e,t));break}}e=e.return}}function Yv(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ye(),t.pingedLanes|=t.suspendedLanes&n,ae===t&&(ue&n)===n&&(re===4||re===3&&(ue&130023424)===ue&&500>Y()-mu?hn(t,0):pu|=n),Ce(t,e)}function tp(t,e){e===0&&(t.mode&1?(e=Gi,Gi<<=1,!(Gi&130023424)&&(Gi=4194304)):e=1);var n=ye();t=wt(t,e),t!==null&&(Ai(t,e,n),Ce(t,n))}function Qv(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),tp(t,n)}function Jv(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(E(314))}r!==null&&r.delete(e),tp(t,n)}var np;np=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Se.current)ke=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return ke=!1,Fv(t,e,n);ke=!!(t.flags&131072)}else ke=!1,V&&e.flags&1048576&&oh(e,Uo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;go(t,e),t=e.pendingProps;var i=or(e,ge.current);Xn(e,n),i=lu(null,e,r,t,i,n);var o=uu();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Te(r)?(o=!0,Mo(e)):o=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ru(e),i.updater=fs,e.stateNode=i,i._reactInternals=e,Za(e,r,t,n),e=nl(null,e,r,!0,o,n)):(e.tag=0,V&&o&&Ql(e),ve(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(go(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=Zv(r),t=He(r,t),i){case 0:e=tl(null,e,r,t,n);break e;case 1:e=Jc(null,e,r,t,n);break e;case 11:e=Yc(null,e,r,t,n);break e;case 14:e=Qc(null,e,r,He(r.type,t),n);break e}throw Error(E(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),tl(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Jc(t,e,r,i,n);case 3:e:{if(jh(e),t===null)throw Error(E(387));r=e.pendingProps,o=e.memoizedState,i=o.element,uh(t,e),zo(e,r,null,n);var s=e.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},e.updateQueue.baseState=o,e.memoizedState=o,e.flags&256){i=ur(Error(E(423)),e),e=Xc(t,e,r,n,i);break e}else if(r!==i){i=ur(Error(E(424)),e),e=Xc(t,e,r,n,i);break e}else for(Ae=jt(e.stateNode.containerInfo.firstChild),xe=e,V=!0,Ge=null,n=hh(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(sr(),r===i){e=Et(t,e,n);break e}ve(t,e,r,n)}e=e.child}return e;case 5:return ph(e),t===null&&Qa(e),r=e.type,i=e.pendingProps,o=t!==null?t.memoizedProps:null,s=i.children,Ha(r,i)?s=null:o!==null&&Ha(r,o)&&(e.flags|=32),Fh(t,e),ve(t,e,s,n),e.child;case 6:return t===null&&Qa(e),null;case 13:return zh(t,e,n);case 4:return iu(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=ar(e,null,r,n):ve(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),Yc(t,e,r,i,n);case 7:return ve(t,e,e.pendingProps,n),e.child;case 8:return ve(t,e,e.pendingProps.children,n),e.child;case 12:return ve(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value,j(Fo,r._currentValue),r._currentValue=s,o!==null)if(Qe(o.value,s)){if(o.children===i.children&&!Se.current){e=Et(t,e,n);break e}}else for(o=e.child,o!==null&&(o.return=e);o!==null;){var a=o.dependencies;if(a!==null){s=o.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(o.tag===1){l=mt(-1,n&-n),l.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?l.next=l:(l.next=d.next,d.next=l),u.pending=l}}o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Ja(o.return,n,e),a.lanes|=n;break}l=l.next}}else if(o.tag===10)s=o.type===e.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(E(341));s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Ja(s,n,e),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===e){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ve(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Xn(e,n),i=ze(i),r=r(i),e.flags|=1,ve(t,e,r,n),e.child;case 14:return r=e.type,i=He(r,e.pendingProps),i=He(r.type,i),Qc(t,e,r,i,n);case 15:return bh(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:He(r,i),go(t,e),e.tag=1,Te(r)?(t=!0,Mo(e)):t=!1,Xn(e,n),dh(e,r,i),Za(e,r,i,n),nl(null,e,r,!0,t,n);case 19:return Bh(t,e,n);case 22:return Uh(t,e,n)}throw Error(E(156,e.tag))};function rp(t,e){return Nf(t,e)}function Xv(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fe(t,e,n,r){return new Xv(t,e,n,r)}function _u(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Zv(t){if(typeof t=="function")return _u(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Fl)return 11;if(t===jl)return 14}return 2}function Vt(t,e){var n=t.alternate;return n===null?(n=Fe(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function _o(t,e,n,r,i,o){var s=2;if(r=t,typeof t=="function")_u(t)&&(s=1);else if(typeof t=="string")s=5;else e:switch(t){case bn:return pn(n.children,i,o,e);case Ul:s=8,i|=8;break;case ka:return t=Fe(12,n,e,i|2),t.elementType=ka,t.lanes=o,t;case Sa:return t=Fe(13,n,e,i),t.elementType=Sa,t.lanes=o,t;case Ta:return t=Fe(19,n,e,i),t.elementType=Ta,t.lanes=o,t;case ff:return gs(n,i,o,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case cf:s=10;break e;case df:s=9;break e;case Fl:s=11;break e;case jl:s=14;break e;case Pt:s=16,r=null;break e}throw Error(E(130,t==null?t:typeof t,""))}return e=Fe(s,n,e,i),e.elementType=t,e.type=r,e.lanes=o,e}function pn(t,e,n,r){return t=Fe(7,t,r,e),t.lanes=n,t}function gs(t,e,n,r){return t=Fe(22,t,r,e),t.elementType=ff,t.lanes=n,t.stateNode={isHidden:!1},t}function oa(t,e,n){return t=Fe(6,t,null,e),t.lanes=n,t}function sa(t,e,n){return e=Fe(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function ey(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=zs(0),this.expirationTimes=zs(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=zs(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function wu(t,e,n,r,i,o,s,a,l){return t=new ey(t,e,n,a,l),e===1?(e=1,o===!0&&(e|=8)):e=0,o=Fe(3,null,null,e),t.current=o,o.stateNode=t,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ru(o),t}function ty(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Mn,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function ip(t){if(!t)return qt;t=t._reactInternals;e:{if(Nn(t)!==t||t.tag!==1)throw Error(E(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Te(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(E(171))}if(t.tag===1){var n=t.type;if(Te(n))return rh(t,n,e)}return e}function op(t,e,n,r,i,o,s,a,l){return t=wu(n,r,!0,t,i,o,s,a,l),t.context=ip(null),n=t.current,r=ye(),i=Wt(n),o=mt(r,i),o.callback=e??null,zt(n,o,i),t.current.lanes=i,Ai(t,i,r),Ce(t,r),t}function vs(t,e,n,r){var i=e.current,o=ye(),s=Wt(i);return n=ip(n),e.context===null?e.context=n:e.pendingContext=n,e=mt(o,s),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=zt(i,e,s),t!==null&&(Ye(t,i,s,o),ho(t,i,s)),s}function qo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function ld(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Eu(t,e){ld(t,e),(t=t.alternate)&&ld(t,e)}function ny(){return null}var sp=typeof reportError=="function"?reportError:function(t){console.error(t)};function Iu(t){this._internalRoot=t}ys.prototype.render=Iu.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(E(409));vs(t,e,null,null)};ys.prototype.unmount=Iu.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;In(function(){vs(null,t,null,null)}),e[_t]=null}};function ys(t){this._internalRoot=t}ys.prototype.unstable_scheduleHydration=function(t){if(t){var e=bf();t={blockedOn:null,target:t,priority:e};for(var n=0;n<At.length&&e!==0&&e<At[n].priority;n++);At.splice(n,0,t),n===0&&Ff(t)}};function ku(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function _s(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function ud(){}function ry(t,e,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=qo(s);o.call(u)}}var s=op(e,r,t,0,null,!1,!1,"",ud);return t._reactRootContainer=s,t[_t]=s.current,di(t.nodeType===8?t.parentNode:t),In(),s}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=qo(l);a.call(u)}}var l=wu(t,0,!1,null,null,!1,!1,"",ud);return t._reactRootContainer=l,t[_t]=l.current,di(t.nodeType===8?t.parentNode:t),In(function(){vs(e,l,n,r)}),l}function ws(t,e,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var a=i;i=function(){var l=qo(s);a.call(l)}}vs(e,s,t,i)}else s=ry(n,e,t,i,r);return qo(s)}Df=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=zr(e.pendingLanes);n!==0&&(Wl(e,n|1),Ce(e,Y()),!(M&6)&&(cr=Y()+500,tn()))}break;case 13:In(function(){var r=wt(t,1);if(r!==null){var i=ye();Ye(r,t,1,i)}}),Eu(t,1)}};Vl=function(t){if(t.tag===13){var e=wt(t,134217728);if(e!==null){var n=ye();Ye(e,t,134217728,n)}Eu(t,134217728)}};Mf=function(t){if(t.tag===13){var e=Wt(t),n=wt(t,e);if(n!==null){var r=ye();Ye(n,t,e,r)}Eu(t,e)}};bf=function(){return U};Uf=function(t,e){var n=U;try{return U=t,e()}finally{U=n}};Ma=function(t,e,n){switch(e){case"input":if(Pa(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=cs(r);if(!i)throw Error(E(90));pf(r),Pa(r,i)}}}break;case"textarea":gf(t,n);break;case"select":e=n.value,e!=null&&qn(t,!!n.multiple,e,!1)}};kf=gu;Sf=In;var iy={usingClientEntryPoint:!1,Events:[xi,zn,cs,Ef,If,gu]},Dr={findFiberByHostInstance:un,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},oy={bundleType:Dr.bundleType,version:Dr.version,rendererPackageName:Dr.rendererPackageName,rendererConfig:Dr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Rf(t),t===null?null:t.stateNode},findFiberByHostInstance:Dr.findFiberByHostInstance||ny,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var io=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!io.isDisabled&&io.supportsFiber)try{ss=io.inject(oy),st=io}catch{}}De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iy;De.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ku(e))throw Error(E(200));return ty(t,e,null,n)};De.createRoot=function(t,e){if(!ku(t))throw Error(E(299));var n=!1,r="",i=sp;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=wu(t,1,!1,null,null,n,!1,r,i),t[_t]=e.current,di(t.nodeType===8?t.parentNode:t),new Iu(e)};De.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(E(188)):(t=Object.keys(t).join(","),Error(E(268,t)));return t=Rf(e),t=t===null?null:t.stateNode,t};De.flushSync=function(t){return In(t)};De.hydrate=function(t,e,n){if(!_s(e))throw Error(E(200));return ws(null,t,e,!0,n)};De.hydrateRoot=function(t,e,n){if(!ku(t))throw Error(E(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=sp;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),e=op(e,null,t,1,n??null,i,!1,o,s),t[_t]=e.current,di(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new ys(e)};De.render=function(t,e,n){if(!_s(e))throw Error(E(200));return ws(null,t,e,!1,n)};De.unmountComponentAtNode=function(t){if(!_s(t))throw Error(E(40));return t._reactRootContainer?(In(function(){ws(null,null,t,!1,function(){t._reactRootContainer=null,t[_t]=null})}),!0):!1};De.unstable_batchedUpdates=gu;De.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!_s(n))throw Error(E(200));if(t==null||t._reactInternals===void 0)throw Error(E(38));return ws(t,e,n,!1,r)};De.version="18.2.0-next-9e3b772b8-20220608";function ap(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ap)}catch(t){console.error(t)}}ap(),of.exports=De;var sy=of.exports,cd=sy;Ea.createRoot=cd.createRoot,Ea.hydrateRoot=cd.hydrateRoot;const ay="/reactWebPage/assets/logo-c5800411.jpg";/**
 * @remix-run/router v1.6.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function wi(){return wi=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},wi.apply(this,arguments)}var Dt;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Dt||(Dt={}));const dd="popstate";function ly(t){t===void 0&&(t={});function e(r,i){let{pathname:o,search:s,hash:a}=r.location;return pl("",{pathname:o,search:s,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Yo(i)}return cy(e,n,null,t)}function Z(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function Su(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function uy(){return Math.random().toString(36).substr(2,8)}function fd(t,e){return{usr:t.state,key:t.key,idx:e}}function pl(t,e,n,r){return n===void 0&&(n=null),wi({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?gr(e):e,{state:n,key:e&&e.key||r||uy()})}function Yo(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function gr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function cy(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,a=Dt.Pop,l=null,u=d();u==null&&(u=0,s.replaceState(wi({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function f(){a=Dt.Pop;let A=d(),h=A==null?null:A-u;u=A,l&&l({action:a,location:w.location,delta:h})}function m(A,h){a=Dt.Push;let c=pl(w.location,A,h);n&&n(c,A),u=d()+1;let p=fd(c,u),y=w.createHref(c);try{s.pushState(p,"",y)}catch{i.location.assign(y)}o&&l&&l({action:a,location:w.location,delta:1})}function v(A,h){a=Dt.Replace;let c=pl(w.location,A,h);n&&n(c,A),u=d();let p=fd(c,u),y=w.createHref(c);s.replaceState(p,"",y),o&&l&&l({action:a,location:w.location,delta:0})}function _(A){let h=i.location.origin!=="null"?i.location.origin:i.location.href,c=typeof A=="string"?A:Yo(A);return Z(h,"No window.location.(origin|href) available to create URL for href: "+c),new URL(c,h)}let w={get action(){return a},get location(){return t(i,s)},listen(A){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(dd,f),l=A,()=>{i.removeEventListener(dd,f),l=null}},createHref(A){return e(i,A)},createURL:_,encodeLocation(A){let h=_(A);return{pathname:h.pathname,search:h.search,hash:h.hash}},push:m,replace:v,go(A){return s.go(A)}};return w}var hd;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(hd||(hd={}));function dy(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?gr(e):e,i=Tu(r.pathname||"/",n);if(i==null)return null;let o=lp(t);fy(o);let s=null;for(let a=0;s==null&&a<o.length;++a)s=Ey(o[a],Sy(i));return s}function lp(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,a)=>{let l={relativePath:a===void 0?o.path||"":a,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};l.relativePath.startsWith("/")&&(Z(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=$t([r,l.relativePath]),d=n.concat(l);o.children&&o.children.length>0&&(Z(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),lp(o.children,e,d,u)),!(o.path==null&&!o.index)&&e.push({path:u,score:_y(u,o.index),routesMeta:d})};return t.forEach((o,s)=>{var a;if(o.path===""||!((a=o.path)!=null&&a.includes("?")))i(o,s);else for(let l of up(o.path))i(o,s,l)}),e}function up(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=up(r.join("/")),a=[];return a.push(...s.map(l=>l===""?o:[o,l].join("/"))),i&&a.push(...s),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function fy(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:wy(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const hy=/^:\w+$/,py=3,my=2,gy=1,vy=10,yy=-2,pd=t=>t==="*";function _y(t,e){let n=t.split("/"),r=n.length;return n.some(pd)&&(r+=yy),e&&(r+=my),n.filter(i=>!pd(i)).reduce((i,o)=>i+(hy.test(o)?py:o===""?gy:vy),r)}function wy(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function Ey(t,e){let{routesMeta:n}=t,r={},i="/",o=[];for(let s=0;s<n.length;++s){let a=n[s],l=s===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",d=Iy({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;o.push({params:r,pathname:$t([i,d.pathname]),pathnameBase:Py($t([i,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(i=$t([i,d.pathnameBase]))}return o}function Iy(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=ky(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,d,f)=>{if(d==="*"){let m=a[f]||"";s=o.slice(0,o.length-m.length).replace(/(.)\/+$/,"$1")}return u[d]=Ty(a[f]||"",d),u},{}),pathname:o,pathnameBase:s,pattern:t}}function ky(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),Su(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(s,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function Sy(t){try{return decodeURI(t)}catch(e){return Su(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Ty(t,e){try{return decodeURIComponent(t)}catch(n){return Su(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function Tu(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function Cy(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?gr(t):t;return{pathname:n?n.startsWith("/")?n:Ry(n,e):e,search:Ny(r),hash:Ay(i)}}function Ry(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function aa(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function cp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function dp(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=gr(t):(i=wi({},t),Z(!i.pathname||!i.pathname.includes("?"),aa("?","pathname","search",i)),Z(!i.pathname||!i.pathname.includes("#"),aa("#","pathname","hash",i)),Z(!i.search||!i.search.includes("#"),aa("#","search","hash",i)));let o=t===""||i.pathname==="",s=o?"/":i.pathname,a;if(r||s==null)a=n;else{let f=e.length-1;if(s.startsWith("..")){let m=s.split("/");for(;m[0]==="..";)m.shift(),f-=1;i.pathname=m.join("/")}a=f>=0?e[f]:"/"}let l=Cy(i,a),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||d)&&(l.pathname+="/"),l}const $t=t=>t.join("/").replace(/\/\/+/g,"/"),Py=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),Ny=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,Ay=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function Oy(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}/**
 * React Router v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Qo(){return Qo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Qo.apply(this,arguments)}const Cu=P.createContext(null),xy=P.createContext(null),vr=P.createContext(null),Es=P.createContext(null),yr=P.createContext({outlet:null,matches:[]}),fp=P.createContext(null);function Ly(t,e){let{relative:n}=e===void 0?{}:e;Di()||Z(!1);let{basename:r,navigator:i}=P.useContext(vr),{hash:o,pathname:s,search:a}=pp(t,{relative:n}),l=s;return r!=="/"&&(l=s==="/"?r:$t([r,s])),i.createHref({pathname:l,search:a,hash:o})}function Di(){return P.useContext(Es)!=null}function Is(){return Di()||Z(!1),P.useContext(Es).location}function hp(t){P.useContext(vr).static||P.useLayoutEffect(t)}function Dy(){return P.useContext(Cu)!=null?Gy():My()}function My(){Di()||Z(!1);let{basename:t,navigator:e}=P.useContext(vr),{matches:n}=P.useContext(yr),{pathname:r}=Is(),i=JSON.stringify(cp(n).map(a=>a.pathnameBase)),o=P.useRef(!1);return hp(()=>{o.current=!0}),P.useCallback(function(a,l){if(l===void 0&&(l={}),!o.current)return;if(typeof a=="number"){e.go(a);return}let u=dp(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:$t([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function pp(t,e){let{relative:n}=e===void 0?{}:e,{matches:r}=P.useContext(yr),{pathname:i}=Is(),o=JSON.stringify(cp(r).map(s=>s.pathnameBase));return P.useMemo(()=>dp(t,JSON.parse(o),i,n==="path"),[t,o,i,n])}function by(t,e){return Uy(t,e)}function Uy(t,e,n){Di()||Z(!1);let{navigator:r}=P.useContext(vr),{matches:i}=P.useContext(yr),o=i[i.length-1],s=o?o.params:{};o&&o.pathname;let a=o?o.pathnameBase:"/";o&&o.route;let l=Is(),u;if(e){var d;let w=typeof e=="string"?gr(e):e;a==="/"||(d=w.pathname)!=null&&d.startsWith(a)||Z(!1),u=w}else u=l;let f=u.pathname||"/",m=a==="/"?f:f.slice(a.length)||"/",v=dy(t,{pathname:m}),_=Wy(v&&v.map(w=>Object.assign({},w,{params:Object.assign({},s,w.params),pathname:$t([a,r.encodeLocation?r.encodeLocation(w.pathname).pathname:w.pathname]),pathnameBase:w.pathnameBase==="/"?a:$t([a,r.encodeLocation?r.encodeLocation(w.pathnameBase).pathname:w.pathnameBase])})),i,n);return e&&_?P.createElement(Es.Provider,{value:{location:Qo({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Dt.Pop}},_):_}function Fy(){let t=Ky(),e=Oy(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},o=null;return P.createElement(P.Fragment,null,P.createElement("h2",null,"Unexpected Application Error!"),P.createElement("h3",{style:{fontStyle:"italic"}},e),n?P.createElement("pre",{style:i},n):null,o)}const jy=P.createElement(Fy,null);class zy extends P.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?P.createElement(yr.Provider,{value:this.props.routeContext},P.createElement(fp.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function By(t){let{routeContext:e,match:n,children:r}=t,i=P.useContext(Cu);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),P.createElement(yr.Provider,{value:e},r)}function Wy(t,e,n){var r;if(e===void 0&&(e=[]),n===void 0&&(n=null),t==null){var i;if((i=n)!=null&&i.errors)t=n.matches;else return null}let o=t,s=(r=n)==null?void 0:r.errors;if(s!=null){let a=o.findIndex(l=>l.route.id&&(s==null?void 0:s[l.route.id]));a>=0||Z(!1),o=o.slice(0,Math.min(o.length,a+1))}return o.reduceRight((a,l,u)=>{let d=l.route.id?s==null?void 0:s[l.route.id]:null,f=null;n&&(f=l.route.errorElement||jy);let m=e.concat(o.slice(0,u+1)),v=()=>{let _;return d?_=f:l.route.element?_=l.route.element:_=a,P.createElement(By,{match:l,routeContext:{outlet:a,matches:m},children:_})};return n&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?P.createElement(zy,{location:n.location,revalidation:n.revalidation,component:f,error:d,children:v(),routeContext:{outlet:null,matches:m}}):v()},null)}var ml;(function(t){t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate"})(ml||(ml={}));var Ei;(function(t){t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId"})(Ei||(Ei={}));function Vy(t){let e=P.useContext(Cu);return e||Z(!1),e}function $y(t){let e=P.useContext(xy);return e||Z(!1),e}function Hy(t){let e=P.useContext(yr);return e||Z(!1),e}function mp(t){let e=Hy(),n=e.matches[e.matches.length-1];return n.route.id||Z(!1),n.route.id}function Ky(){var t;let e=P.useContext(fp),n=$y(Ei.UseRouteError),r=mp(Ei.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function Gy(){let{router:t}=Vy(ml.UseNavigateStable),e=mp(Ei.UseNavigateStable),n=P.useRef(!1);return hp(()=>{n.current=!0}),P.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,Qo({fromRouteId:e},o)))},[t,e])}function Wr(t){Z(!1)}function qy(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Dt.Pop,navigator:o,static:s=!1}=t;Di()&&Z(!1);let a=e.replace(/^\/*/,"/"),l=P.useMemo(()=>({basename:a,navigator:o,static:s}),[a,o,s]);typeof r=="string"&&(r=gr(r));let{pathname:u="/",search:d="",hash:f="",state:m=null,key:v="default"}=r,_=P.useMemo(()=>{let w=Tu(u,a);return w==null?null:{location:{pathname:w,search:d,hash:f,state:m,key:v},navigationType:i}},[a,u,d,f,m,v,i]);return _==null?null:P.createElement(vr.Provider,{value:l},P.createElement(Es.Provider,{children:n,value:_}))}function Yy(t){let{children:e,location:n}=t;return by(gl(e),n)}var md;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(md||(md={}));new Promise(()=>{});function gl(t,e){e===void 0&&(e=[]);let n=[];return P.Children.forEach(t,(r,i)=>{if(!P.isValidElement(r))return;let o=[...e,i];if(r.type===P.Fragment){n.push.apply(n,gl(r.props.children,o));return}r.type!==Wr&&Z(!1),!r.props.index||!r.props.children||Z(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=gl(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.11.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vl(){return vl=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},vl.apply(this,arguments)}function Qy(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,o;for(o=0;o<r.length;o++)i=r[o],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function Jy(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Xy(t,e){return t.button===0&&(!e||e==="_self")&&!Jy(t)}const Zy=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset"];function e0(t){let{basename:e,children:n,window:r}=t,i=P.useRef();i.current==null&&(i.current=ly({window:r,v5Compat:!0}));let o=i.current,[s,a]=P.useState({action:o.action,location:o.location});return P.useLayoutEffect(()=>o.listen(a),[o]),P.createElement(qy,{basename:e,children:n,location:s.location,navigationType:s.action,navigator:o})}const t0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",n0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,oo=P.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:o,replace:s,state:a,target:l,to:u,preventScrollReset:d}=e,f=Qy(e,Zy),{basename:m}=P.useContext(vr),v,_=!1;if(typeof u=="string"&&n0.test(u)&&(v=u,t0))try{let c=new URL(window.location.href),p=u.startsWith("//")?new URL(c.protocol+u):new URL(u),y=Tu(p.pathname,m);p.origin===c.origin&&y!=null?u=y+p.search+p.hash:_=!0}catch{}let w=Ly(u,{relative:i}),A=r0(u,{replace:s,state:a,target:l,preventScrollReset:d,relative:i});function h(c){r&&r(c),c.defaultPrevented||A(c)}return P.createElement("a",vl({},f,{href:v||w,onClick:_||o?r:h,ref:n,target:l}))});var gd;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(gd||(gd={}));var vd;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(vd||(vd={}));function r0(t,e){let{target:n,replace:r,state:i,preventScrollReset:o,relative:s}=e===void 0?{}:e,a=Dy(),l=Is(),u=pp(t,{relative:s});return P.useCallback(d=>{if(Xy(d,n)){d.preventDefault();let f=r!==void 0?r:Yo(l)===Yo(u);a(t,{replace:f,state:i,preventScrollReset:o,relative:s})}},[l,a,u,r,i,n,t,o,s])}function i0(){return g.jsx("nav",{className:"navbar navbar-expand-lg navbar-dark navbar-expand-md bg-primary",children:g.jsxs("div",{className:"container-fluid",children:[g.jsx("img",{className:"nav-item",src:ay,alt:"Logo",width:"70"}),g.jsxs("div",{className:"container-fluid.right",children:[g.jsx("button",{className:"navbar-toggler ms-auto",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation",children:g.jsx("span",{className:"navbar-toggler-icon"})}),g.jsx("div",{className:"collapse navbar-collapse",id:"navbarColor01",children:g.jsxs("ul",{className:"navbar-nav me-auto",children:[g.jsx("li",{className:"nav-item",children:g.jsx(oo,{className:"nav-link",to:"/","aria-current":"page",children:"Home"})}),g.jsx("li",{className:"nav-item",children:g.jsx(oo,{className:"nav-link",to:"/about",children:"About"})}),g.jsx("li",{className:"nav-item",children:g.jsx(oo,{className:"nav-link",to:"/contact",children:"Contact"})}),g.jsx("li",{className:"nav-item",children:g.jsx(oo,{className:"nav-link",to:"/login",children:"Login"})})]})})]})]})})}const o0="/reactWebPage/assets/IA-58955d21.jpg";function Ru(){return g.jsx("div",{class:"card container p-4 w-100",children:g.jsxs("div",{class:"main-header ",children:[g.jsx("img",{src:o0,class:"card-img-top",alt:"..."}),g.jsxs("div",{class:"card-body align-items-center",children:[g.jsx("h5",{class:"card-title",children:"LENGUAJES DE PROGRAMACIÓN"}),g.jsx("p",{class:"card-text",children:"Programación para el desarrollo de compentencias."})]})]})})}function s0(){return g.jsxs("div",{class:"card mb-3",children:[g.jsx("table",{children:g.jsxs("tbody",{children:[g.jsxs("tr",{children:[g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/arcss",target:"iframe_a",children:"Aplicación de hojas de estilo (CSS)"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/introjava",target:"iframe_a",children:"Introducción a Javascript"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/react",target:"iframe_a",children:"React"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/cliente",target:"iframe_a",children:"Manipulación de información en el lado del cliente"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/webapps",target:"iframe_a",children:"WebApps"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/nodejs",target:"iframe_a",children:"NodeJS. Comunicación síncrona y asíncrona"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/servidor",target:"iframe_a",children:"Javascript del lado del servidor"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/sockets",target:"iframe_a",children:"Sockets"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/conexiondb",target:"iframe_a",children:"Conexión con bases de datos"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/htmlcon",target:"iframe_a",children:"Html"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/creaapi",target:"iframe_a",children:"Creación de APIs"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/mvc",target:"iframe_a",children:"Qué es MVC"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/frameworks",target:"iframe_a",children:"Frameworks MVC populares en la actualidad"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/introspring",target:"iframe_a",children:"Introducción al desarrollo con Spring Frameworks"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/construspring",target:"iframe_a",children:"Construcción de servicios web con Spring"})})]}),g.jsxs("tr",{children:[g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/conectaspring",target:"iframe_a",children:"Conexión a bases de datos con Spring"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/webapp/vistas",target:"iframe_a",children:"Plantillas y generadores de vistas"})}),g.jsx("td",{children:g.jsx("a",{href:"http://www.easiercomp.com/Files/WebI.pdf",target:"iframe_a",children:"Información sobre el curso"})})]})]})}),g.jsx("table",{children:g.jsx("tr",{children:g.jsx("td",{class:"containerFrame",children:g.jsx("iframe",{class:"iframeExtend",src:"https://shulius.github.io/reactWebPage/",name:"iframe_a",title:"Iframe Example"})})})})]})}function Pu(){return g.jsx("div",{class:"list-group",children:g.jsx("footer",{class:"list-group-item list-group-item-action flex-column align-items-start active",children:g.jsx("div",{children:g.jsxs("div",{class:"col ml-auto",children:[g.jsx("h6",{class:"mb-1",children:"Copyright © Ms Ruben Darío Angel Correa. 2022"}),g.jsx("h6",{class:"mb-1",children:"Sabaneta, Antioquia, Colombia"}),g.jsx("h6",{class:"mb-1",children:"+573017871669"})]})})})})}function a0(){return g.jsxs(Ll.Fragment,{children:[g.jsx(Ru,{}),g.jsx(s0,{}),g.jsx(Pu,{})]})}function l0(){return g.jsx("div",{children:g.jsxs("div",{class:"jumbotron",children:[g.jsx("p",{}),g.jsx("h3",{children:"EasierComp.com."}),g.jsx("p",{}),g.jsxs("address",{children:["Ruben Dario Angel Correa. Representante legal. Sabaneta, Antioquia, Colombia.",g.jsx("abbr",{title:"Cellphone",children:"+573017871669"})]}),g.jsxs("address",{children:[g.jsx("strong",{children:"Soporte:"}),g.jsx("a",{href:"mailto:autoycontrolinfo@gmail.com",children:"autoycontrolinfo@gmail.com"}),g.jsx("strong",{children:"Marketing:"}),g.jsx("a",{href:"mailto:Marketing@example.com",children:"autoycontrolinfo@gmail.com"})]})]})})}function u0(){return g.jsxs("div",{children:[g.jsx(Ru,{}),g.jsx(l0,{}),g.jsx(Pu,{})]})}function c0(){return g.jsx("div",{class:"container p-4",children:g.jsxs("div",{class:"jumbotron text-dark",children:[g.jsx("h3",{children:g.jsx("p",{children:"EasierComp.com"})}),g.jsxs("address",{children:[g.jsx("p",{children:"Sabaneta, Antioquia, Colombia."}),g.jsxs("p",{children:["Ruben Darío Angel Correa. ",g.jsx("a",{href:"mailto:rangelcorrea@gmail.com",children:"rangelcorrea@gmail.com"})]}),g.jsx("strong",{children:"Support: "}),g.jsx("a",{href:"mailto:autoycontrolinfo@gmail.com",children:"autoycontrolinfo@gmail.com"})]})]})})}function d0(){return g.jsxs(Ll.Fragment,{children:[g.jsx(Ru,{}),g.jsx(c0,{}),g.jsx(Pu,{})]})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gp=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},f0=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const o=t[n++];e[r++]=String.fromCharCode((i&31)<<6|o&63)}else if(i>239&&i<365){const o=t[n++],s=t[n++],a=t[n++],l=((i&7)<<18|(o&63)<<12|(s&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const o=t[n++],s=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(o&63)<<6|s&63)}}return e.join("")},vp={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const o=t[i],s=i+1<t.length,a=s?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,d=o>>2,f=(o&3)<<4|a>>4;let m=(a&15)<<2|u>>6,v=u&63;l||(v=64,s||(m=64)),r.push(n[d],n[f],n[m],n[v])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(gp(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):f0(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const o=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,o==null||a==null||u==null||f==null)throw new h0;const m=o<<2|a>>4;if(r.push(m),u!==64){const v=a<<4&240|u>>2;if(r.push(v),f!==64){const _=u<<6&192|f;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class h0 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const p0=function(t){const e=gp(t);return vp.encodeByteArray(e,!0)},yp=function(t){return p0(t).replace(/\./g,"")},_p=function(t){try{return vp.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Jo(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!m0(n)||(t[n]=Jo(t[n],e[n]));return t}function m0(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g0(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v0=()=>g0().__FIREBASE_DEFAULTS__,y0=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},_0=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&_p(t[1]);return e&&JSON.parse(e)},Nu=()=>{try{return v0()||y0()||_0()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},w0=()=>{var t;return(t=Nu())===null||t===void 0?void 0:t.config},E0=t=>{var e;return(e=Nu())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I0{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function k0(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ee())}function wp(){var t;const e=(t=Nu())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function S0(){return typeof self=="object"&&self.self===self}function Ep(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Au(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ip(){const t=ee();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Xo(){try{return typeof indexedDB=="object"}catch{return!1}}function T0(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var o;e(((o=i.error)===null||o===void 0?void 0:o.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="FirebaseError";class Re extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=C0,Object.setPrototypeOf(this,Re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,An.prototype.create)}}class An{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,o=this.errors[e],s=o?R0(o,r):"Error",a=`${this.serviceName}: ${s} (${i}).`;return new Re(i,a,r)}}function R0(t,e){return t.replace(P0,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const P0=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function N0(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function yl(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const o=t[i],s=e[i];if(_d(o)&&_d(s)){if(!yl(o,s))return!1}else if(o!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function _d(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _r(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Gn(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,o]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(o)}}),e}function Vr(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function kp(t,e){const n=new A0(t,e);return n.subscribe.bind(n)}class A0{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");O0(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=la),i.error===void 0&&(i.error=la),i.complete===void 0&&(i.complete=la);const o=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),o}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function O0(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function la(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b(t){return t&&t._delegate?t._delegate:t}class Yt{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x0{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new I0;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(o){if(i)return null;throw o}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(D0(e))try{this.getOrInitializeService({instanceIdentifier:ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const o=this.getOrInitializeService({instanceIdentifier:i});r.resolve(o)}catch{}}}}clearInstance(e=ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ln){return this.instances.has(e)}getOptions(e=ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[o,s]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(o);r===a&&s.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),o=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;o.add(e),this.onInitCallbacks.set(i,o);const s=this.instances.get(i);return s&&e(s,i),()=>{o.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:L0(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ln){return this.component?this.component.multipleInstances?e:ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function L0(t){return t===ln?void 0:t}function D0(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new x0(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ou=[];var F;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(F||(F={}));const Sp={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},b0=F.INFO,U0={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},F0=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=U0[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xu{constructor(e){this.name=e,this._logLevel=b0,this._logHandler=F0,this._userLogHandler=null,Ou.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sp[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}function j0(t){Ou.forEach(e=>{e.setLogLevel(t)})}function z0(t,e){for(const n of Ou){let r=null;e&&e.level&&(r=Sp[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,o,...s)=>{const a=s.map(l=>{if(l==null)return null;if(typeof l=="string")return l;if(typeof l=="number"||typeof l=="boolean")return l.toString();if(l instanceof Error)return l.message;try{return JSON.stringify(l)}catch{return null}}).filter(l=>l).join(" ");o>=(r??i.logLevel)&&t({level:F[o].toLowerCase(),message:a,args:s,type:i.name})}}}const B0=(t,e)=>e.some(n=>t instanceof n);let wd,Ed;function W0(){return wd||(wd=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function V0(){return Ed||(Ed=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Tp=new WeakMap,_l=new WeakMap,Cp=new WeakMap,ua=new WeakMap,Lu=new WeakMap;function $0(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",o),t.removeEventListener("error",s)},o=()=>{n(Ht(t.result)),i()},s=()=>{r(t.error),i()};t.addEventListener("success",o),t.addEventListener("error",s)});return e.then(n=>{n instanceof IDBCursor&&Tp.set(n,t)}).catch(()=>{}),Lu.set(e,t),e}function H0(t){if(_l.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",s),t.removeEventListener("abort",s)},o=()=>{n(),i()},s=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",o),t.addEventListener("error",s),t.addEventListener("abort",s)});_l.set(t,e)}let wl={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return _l.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cp.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ht(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function K0(t){wl=t(wl)}function G0(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ca(this),e,...n);return Cp.set(r,e.sort?e.sort():[e]),Ht(r)}:V0().includes(t)?function(...e){return t.apply(ca(this),e),Ht(Tp.get(this))}:function(...e){return Ht(t.apply(ca(this),e))}}function q0(t){return typeof t=="function"?G0(t):(t instanceof IDBTransaction&&H0(t),B0(t,W0())?new Proxy(t,wl):t)}function Ht(t){if(t instanceof IDBRequest)return $0(t);if(ua.has(t))return ua.get(t);const e=q0(t);return e!==t&&(ua.set(t,e),Lu.set(e,t)),e}const ca=t=>Lu.get(t);function Y0(t,e,{blocked:n,upgrade:r,blocking:i,terminated:o}={}){const s=indexedDB.open(t,e),a=Ht(s);return r&&s.addEventListener("upgradeneeded",l=>{r(Ht(s.result),l.oldVersion,l.newVersion,Ht(s.transaction),l)}),n&&s.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{o&&l.addEventListener("close",()=>o()),i&&l.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),a}const Q0=["get","getKey","getAll","getAllKeys","count"],J0=["put","add","delete","clear"],da=new Map;function Id(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=J0.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Q0.includes(n)))return;const o=async function(s,...a){const l=this.transaction(s,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return da.set(e,o),o}K0(t=>({...t,get:(e,n,r)=>Id(e,n)||t.get(e,n,r),has:(e,n)=>!!Id(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X0{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Z0(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Z0(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const El="@firebase/app",kd="0.9.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new xu("@firebase/app"),e_="@firebase/app-compat",t_="@firebase/analytics-compat",n_="@firebase/analytics",r_="@firebase/app-check-compat",i_="@firebase/app-check",o_="@firebase/auth",s_="@firebase/auth-compat",a_="@firebase/database",l_="@firebase/database-compat",u_="@firebase/functions",c_="@firebase/functions-compat",d_="@firebase/installations",f_="@firebase/installations-compat",h_="@firebase/messaging",p_="@firebase/messaging-compat",m_="@firebase/performance",g_="@firebase/performance-compat",v_="@firebase/remote-config",y_="@firebase/remote-config-compat",__="@firebase/storage",w_="@firebase/storage-compat",E_="@firebase/firestore",I_="@firebase/firestore-compat",k_="firebase",S_="9.21.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qt="[DEFAULT]",T_={[El]:"fire-core",[e_]:"fire-core-compat",[n_]:"fire-analytics",[t_]:"fire-analytics-compat",[i_]:"fire-app-check",[r_]:"fire-app-check-compat",[o_]:"fire-auth",[s_]:"fire-auth-compat",[a_]:"fire-rtdb",[l_]:"fire-rtdb-compat",[u_]:"fire-fn",[c_]:"fire-fn-compat",[d_]:"fire-iid",[f_]:"fire-iid-compat",[h_]:"fire-fcm",[p_]:"fire-fcm-compat",[m_]:"fire-perf",[g_]:"fire-perf-compat",[v_]:"fire-rc",[y_]:"fire-rc-compat",[__]:"fire-gcs",[w_]:"fire-gcs-compat",[E_]:"fire-fst",[I_]:"fire-fst-compat","fire-js":"fire-js",[k_]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jt=new Map,Ii=new Map;function Zo(t,e){try{t.container.addComponent(e)}catch(n){kn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Rp(t,e){t.container.addOrOverwriteComponent(e)}function Sn(t){const e=t.name;if(Ii.has(e))return kn.debug(`There were multiple attempts to register component ${e}.`),!1;Ii.set(e,t);for(const n of Jt.values())Zo(n,t);return!0}function Pp(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function C_(t,e,n=Qt){Pp(t,e).clearInstance(n)}function R_(){Ii.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},gt=new An("app","Firebase",P_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let N_=class{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Yt("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw gt.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const On=S_;function Du(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Qt,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw gt.create("bad-app-name",{appName:String(i)});if(n||(n=w0()),!n)throw gt.create("no-options");const o=Jt.get(i);if(o){if(yl(n,o.options)&&yl(r,o.config))return o;throw gt.create("duplicate-app",{appName:i})}const s=new M0(i);for(const l of Ii.values())s.addComponent(l);const a=new N_(n,r,s);return Jt.set(i,a),a}function A_(t=Qt){const e=Jt.get(t);if(!e&&t===Qt)return Du();if(!e)throw gt.create("no-app",{appName:t});return e}function O_(){return Array.from(Jt.values())}async function Np(t){const e=t.name;Jt.has(e)&&(Jt.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function Kt(t,e,n){var r;let i=(r=T_[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const o=i.match(/\s|\//),s=e.match(/\s|\//);if(o||s){const a=[`Unable to register library "${i}" with version "${e}":`];o&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),o&&s&&a.push("and"),s&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),kn.warn(a.join(" "));return}Sn(new Yt(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Ap(t,e){if(t!==null&&typeof t!="function")throw gt.create("invalid-log-argument");z0(t,e)}function Op(t){j0(t)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x_="firebase-heartbeat-database",L_=1,ki="firebase-heartbeat-store";let fa=null;function xp(){return fa||(fa=Y0(x_,L_,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(ki)}}}).catch(t=>{throw gt.create("idb-open",{originalErrorMessage:t.message})})),fa}async function D_(t){try{return(await xp()).transaction(ki).objectStore(ki).get(Lp(t))}catch(e){if(e instanceof Re)kn.warn(e.message);else{const n=gt.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});kn.warn(n.message)}}}async function Sd(t,e){try{const r=(await xp()).transaction(ki,"readwrite");return await r.objectStore(ki).put(e,Lp(t)),r.done}catch(n){if(n instanceof Re)kn.warn(n.message);else{const r=gt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});kn.warn(r.message)}}}function Lp(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=1024,b_=30*24*60*60*1e3;class U_{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new j_(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Td();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const o=new Date(i.date).valueOf();return Date.now()-o<=b_}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Td(),{heartbeatsToSend:n,unsentEntries:r}=F_(this._heartbeatsCache.heartbeats),i=yp(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Td(){return new Date().toISOString().substring(0,10)}function F_(t,e=M_){const n=[];let r=t.slice();for(const i of t){const o=n.find(s=>s.agent===i.agent);if(o){if(o.dates.push(i.date),Cd(n)>e){o.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Cd(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class j_{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xo()?T0().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await D_(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Sd(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Cd(t){return yp(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z_(t){Sn(new Yt("platform-logger",e=>new X0(e),"PRIVATE")),Sn(new Yt("heartbeat",e=>new U_(e),"PRIVATE")),Kt(El,kd,t),Kt(El,kd,"esm2017"),Kt("fire-js","")}z_("");const B_=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Re,SDK_VERSION:On,_DEFAULT_ENTRY_NAME:Qt,_addComponent:Zo,_addOrOverwriteComponent:Rp,_apps:Jt,_clearComponents:R_,_components:Ii,_getProvider:Pp,_registerComponent:Sn,_removeServiceInstance:C_,deleteApp:Np,getApp:A_,getApps:O_,initializeApp:Du,onLog:Ap,registerVersion:Kt,setLogLevel:Op},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,n){this._delegate=e,this.firebase=n,Zo(e,new Yt("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Np(this._delegate)))}_getService(e,n=Qt){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=Qt){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Zo(this._delegate,e)}_addOrOverwriteComponent(e){Rp(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V_={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Rd=new An("app-compat","Firebase",V_);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(t){const e={},n={__esModule:!0,initializeApp:o,app:i,registerVersion:Kt,setLogLevel:Op,onLog:Ap,apps:null,SDK_VERSION:On,INTERNAL:{registerComponent:a,removeApp:r,useAsService:l,modularAPIs:B_}};n.default=n,Object.defineProperty(n,"apps",{get:s});function r(u){delete e[u]}function i(u){if(u=u||Qt,!yd(e,u))throw Rd.create("no-app",{appName:u});return e[u]}i.App=t;function o(u,d={}){const f=Du(u,d);if(yd(e,f.name))return e[f.name];const m=new t(f,n);return e[f.name]=m,m}function s(){return Object.keys(e).map(u=>e[u])}function a(u){const d=u.name,f=d.replace("-compat","");if(Sn(u)&&u.type==="PUBLIC"){const m=(v=i())=>{if(typeof v[f]!="function")throw Rd.create("invalid-app-argument",{appName:d});return v[f]()};u.serviceProps!==void 0&&Jo(m,u.serviceProps),n[f]=m,t.prototype[f]=function(...v){return this._getService.bind(this,d).apply(this,u.multipleInstances?v:[])}}return u.type==="PUBLIC"?n[f]:null}function l(u,d){return d==="serverAuth"?null:d}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dp(){const t=$_(W_);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:Dp,extendNamespace:e,createSubscribe:kp,ErrorFactory:An,deepExtend:Jo});function e(n){Jo(t,n)}return t}const H_=Dp();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=new xu("@firebase/app-compat"),K_="@firebase/app-compat",G_="0.2.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(t){Kt(K_,G_,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(S0()&&self.firebase!==void 0){Pd.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Pd.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const wr=H_;q_();var Y_="firebase",Q_="9.21.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */wr.registerVersion(Y_,Q_,"app-compat");function Mu(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Mr={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Dn={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J_(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance.",["missing-recaptcha-token"]:"The reCAPTCHA token is missing when sending request to the backend.",["invalid-recaptcha-token"]:"The reCAPTCHA token is invalid when sending request to the backend.",["invalid-recaptcha-action"]:"The reCAPTCHA action is invalid when sending request to the backend.",["recaptcha-not-enabled"]:"reCAPTCHA Enterprise integration is not enabled for this project.",["missing-client-type"]:"The reCAPTCHA client type is missing when sending request to the backend.",["missing-recaptcha-version"]:"The reCAPTCHA version is missing when sending request to the backend.",["invalid-req-type"]:"Invalid request parameters.",["invalid-recaptcha-version"]:"The reCAPTCHA version is invalid when sending request to the backend."}}function Mp(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const X_=J_,Z_=Mp,bp=new An("auth","Firebase",Mp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const es=new xu("@firebase/auth");function ew(t,...e){es.logLevel<=F.WARN&&es.warn(`Auth (${On}): ${t}`,...e)}function wo(t,...e){es.logLevel<=F.ERROR&&es.error(`Auth (${On}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(t,...e){throw bu(t,...e)}function ce(t,...e){return bu(t,...e)}function Up(t,e,n){const r=Object.assign(Object.assign({},Z_()),{[e]:n});return new An("auth","Firebase",r).create(e,{appName:t.name})}function Er(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&fe(t,"argument-error"),Up(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function bu(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return bp.create(t,...e)}function I(t,e,...n){if(!t)throw bu(e,...n)}function ot(t){const e="INTERNAL ASSERTION FAILED: "+t;throw wo(e),new Error(e)}function Je(t,e){t||ot(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Uu(){return Nd()==="http:"||Nd()==="https:"}function Nd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tw(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Uu()||Ep()||"connection"in navigator)?navigator.onLine:!0}function nw(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{constructor(e,n){this.shortDelay=e,this.longDelay=n,Je(n>e,"Short delay should be less than long delay!"),this.isMobile=k0()||Au()}get(){return tw()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fu(t,e){Je(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fp{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;ot("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;ot("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;ot("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rw={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iw=new Mi(3e4,6e4);function te(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ie(t,e,n,r,i={}){return jp(t,i,async()=>{let o={},s={};r&&(e==="GET"?s=r:o={body:JSON.stringify(r)});const a=_r(Object.assign({key:t.config.apiKey},s)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),Fp.fetch()(zp(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},o))})}async function jp(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},rw),e);try{const i=new ow(t),o=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const s=await o.json();if("needConfirmation"in s)throw $r(t,"account-exists-with-different-credential",s);if(o.ok&&!("errorMessage"in s))return s;{const a=o.ok?s.errorMessage:s.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw $r(t,"credential-already-in-use",s);if(l==="EMAIL_EXISTS")throw $r(t,"email-already-in-use",s);if(l==="USER_DISABLED")throw $r(t,"user-disabled",s);const d=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Up(t,d,u);fe(t,d)}}catch(i){if(i instanceof Re)throw i;fe(t,"network-request-failed",{message:String(i)})}}async function St(t,e,n,r,i={}){const o=await ie(t,e,n,r,i);return"mfaPendingCredential"in o&&fe(t,"multi-factor-auth-required",{_serverResponse:o}),o}function zp(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Fu(t.config,i):`${t.config.apiScheme}://${i}`}class ow{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ce(this.auth,"network-request-failed")),iw.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function $r(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ce(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sw(t,e){return ie(t,"POST","/v1/accounts:delete",e)}async function aw(t,e){return ie(t,"POST","/v1/accounts:update",e)}async function lw(t,e){return ie(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function uw(t,e=!1){const n=b(t),r=await n.getIdToken(e),i=ks(r);I(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const o=typeof i.firebase=="object"?i.firebase:void 0,s=o==null?void 0:o.sign_in_provider;return{claims:i,token:r,authTime:ei(ha(i.auth_time)),issuedAtTime:ei(ha(i.iat)),expirationTime:ei(ha(i.exp)),signInProvider:s||null,signInSecondFactor:(o==null?void 0:o.sign_in_second_factor)||null}}function ha(t){return Number(t)*1e3}function ks(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return wo("JWT malformed, contained fewer than 3 sections"),null;try{const i=_p(n);return i?JSON.parse(i):(wo("Failed to decode base64 JWT payload"),null)}catch(i){return wo("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function cw(t){const e=ks(t);return I(e,"internal-error"),I(typeof e.exp<"u","internal-error"),I(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Re&&dw(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function dw({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fw{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bp{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=ei(this.lastLoginAt),this.creationTime=ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(t){var e;const n=t.auth,r=await t.getIdToken(),i=await It(t,lw(n,{idToken:r}));I(i==null?void 0:i.users.length,n,"internal-error");const o=i.users[0];t._notifyReloadListener(o);const s=!((e=o.providerUserInfo)===null||e===void 0)&&e.length?mw(o.providerUserInfo):[],a=pw(t.providerData,s),l=t.isAnonymous,u=!(t.email&&o.passwordHash)&&!(a!=null&&a.length),d=l?u:!1,f={uid:o.localId,displayName:o.displayName||null,photoURL:o.photoUrl||null,email:o.email||null,emailVerified:o.emailVerified||!1,phoneNumber:o.phoneNumber||null,tenantId:o.tenantId||null,providerData:a,metadata:new Bp(o.createdAt,o.lastLoginAt),isAnonymous:d};Object.assign(t,f)}async function hw(t){const e=b(t);await Ti(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function pw(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function mw(t){return t.map(e=>{var{providerId:n}=e,r=Mu(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gw(t,e){const n=await jp(t,{},async()=>{const r=_r({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:o}=t.config,s=zp(t,i,"/v1/token",`key=${o}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Fp.fetch()(s,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){I(e.idToken,"internal-error"),I(typeof e.idToken<"u","internal-error"),I(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):cw(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return I(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:o}=await gw(e,n);this.updateTokensAndExpiration(r,i,Number(o))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:o}=n,s=new Ci;return r&&(I(typeof r=="string","internal-error",{appName:e}),s.refreshToken=r),i&&(I(typeof i=="string","internal-error",{appName:e}),s.accessToken=i),o&&(I(typeof o=="number","internal-error",{appName:e}),s.expirationTime=o),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ci,this.toJSON())}_performRefresh(){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(t,e){I(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class mn{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,o=Mu(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new fw(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=o.displayName||null,this.email=o.email||null,this.emailVerified=o.emailVerified||!1,this.phoneNumber=o.phoneNumber||null,this.photoURL=o.photoURL||null,this.isAnonymous=o.isAnonymous||!1,this.tenantId=o.tenantId||null,this.providerData=o.providerData?[...o.providerData]:[],this.metadata=new Bp(o.createdAt||void 0,o.lastLoginAt||void 0)}async getIdToken(e){const n=await It(this,this.stsTokenManager.getToken(this.auth,e));return I(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return uw(this,e)}reload(){return hw(this)}_assign(e){this!==e&&(I(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new mn(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){I(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ti(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await It(this,sw(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,o,s,a,l,u,d;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,m=(i=n.email)!==null&&i!==void 0?i:void 0,v=(o=n.phoneNumber)!==null&&o!==void 0?o:void 0,_=(s=n.photoURL)!==null&&s!==void 0?s:void 0,w=(a=n.tenantId)!==null&&a!==void 0?a:void 0,A=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,h=(u=n.createdAt)!==null&&u!==void 0?u:void 0,c=(d=n.lastLoginAt)!==null&&d!==void 0?d:void 0,{uid:p,emailVerified:y,isAnonymous:k,providerData:C,stsTokenManager:R}=n;I(p&&R,e,"internal-error");const N=Ci.fromJSON(this.name,R);I(typeof p=="string",e,"internal-error"),Rt(f,e.name),Rt(m,e.name),I(typeof y=="boolean",e,"internal-error"),I(typeof k=="boolean",e,"internal-error"),Rt(v,e.name),Rt(_,e.name),Rt(w,e.name),Rt(A,e.name),Rt(h,e.name),Rt(c,e.name);const z=new mn({uid:p,auth:e,email:m,emailVerified:y,displayName:f,isAnonymous:k,photoURL:_,phoneNumber:v,tenantId:w,stsTokenManager:N,createdAt:h,lastLoginAt:c});return C&&Array.isArray(C)&&(z.providerData=C.map(L=>Object.assign({},L))),A&&(z._redirectEventId=A),z}static async _fromIdTokenResponse(e,n,r=!1){const i=new Ci;i.updateFromServerResponse(n);const o=new mn({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ti(o),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ad=new Map;function Oe(t){Je(t instanceof Function,"Expected a class definition");let e=Ad.get(t);return e?(Je(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Ad.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Wp.type="NONE";const dr=Wp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gn(t,e,n){return`firebase:${t}:${e}:${n}`}class er{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:o}=this.auth;this.fullUserKey=gn(this.userKey,i.apiKey,o),this.fullPersistenceKey=gn("persistence",i.apiKey,o),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?mn._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new er(Oe(dr),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let o=i[0]||Oe(dr);const s=gn(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const d=await u._get(s);if(d){const f=mn._fromJSON(e,d);u!==o&&(a=f),o=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!o._shouldAllowMigration||!l.length?new er(o,e,r):(o=l[0],a&&await o._set(s,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==o)try{await u._remove(s)}catch{}})),new er(o,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Hp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Vp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Kp(e))return"Blackberry";if(Gp(e))return"Webos";if(ju(e))return"Safari";if((e.includes("chrome/")||$p(e))&&!e.includes("edge/"))return"Chrome";if(bi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Vp(t=ee()){return/firefox\//i.test(t)}function ju(t=ee()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function $p(t=ee()){return/crios\//i.test(t)}function Hp(t=ee()){return/iemobile/i.test(t)}function bi(t=ee()){return/android/i.test(t)}function Kp(t=ee()){return/blackberry/i.test(t)}function Gp(t=ee()){return/webos/i.test(t)}function Ir(t=ee()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function vw(t=ee()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function yw(t=ee()){var e;return Ir(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function _w(){return Ip()&&document.documentMode===10}function qp(t=ee()){return Ir(t)||bi(t)||Gp(t)||Kp(t)||/windows phone/i.test(t)||Hp(t)}function ww(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yp(t,e=[]){let n;switch(t){case"Browser":n=Od(ee());break;case"Worker":n=`${Od(ee())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${On}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ew(t){return(await ie(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}async function Qp(t,e){return ie(t,"GET","/v2/recaptchaConfig",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xd(t){return t!==void 0&&t.getResponse!==void 0}function Ld(t){return t!==void 0&&t.enterprise!==void 0}class Jp{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Iw(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function zu(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const o=ce("internal-error");o.customData=i,n(o)},r.type="text/javascript",r.charset="UTF-8",Iw().appendChild(r)})}function Xp(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const kw="https://www.google.com/recaptcha/enterprise.js?render=",Sw="recaptcha-enterprise",Tw="NO_RECAPTCHA";class Zp{constructor(e){this.type=Sw,this.auth=Q(e)}async verify(e="verify",n=!1){async function r(o){if(!n){if(o.tenantId==null&&o._agentRecaptchaConfig!=null)return o._agentRecaptchaConfig.siteKey;if(o.tenantId!=null&&o._tenantRecaptchaConfigs[o.tenantId]!==void 0)return o._tenantRecaptchaConfigs[o.tenantId].siteKey}return new Promise(async(s,a)=>{Qp(o,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(l=>{if(l.recaptchaKey===void 0)a(new Error("recaptcha Enterprise site key undefined"));else{const u=new Jp(l);return o.tenantId==null?o._agentRecaptchaConfig=u:o._tenantRecaptchaConfigs[o.tenantId]=u,s(u.siteKey)}}).catch(l=>{a(l)})})}function i(o,s,a){const l=window.grecaptcha;Ld(l)?l.enterprise.ready(()=>{l.enterprise.execute(o,{action:e}).then(u=>{s(u)}).catch(()=>{s(Tw)})}):a(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((o,s)=>{r(this.auth).then(a=>{if(!n&&Ld(window.grecaptcha))i(a,o,s);else{if(typeof window>"u"){s(new Error("RecaptchaVerifier is only supported in browser"));return}zu(kw+a).then(()=>{i(a,o,s)}).catch(l=>{s(l)})}}).catch(a=>{s(a)})})}}async function Xt(t,e,n,r=!1){const i=new Zp(t);let o;try{o=await i.verify(n)}catch{o=await i.verify(n,!0)}const s=Object.assign({},e);return r?Object.assign(s,{captchaResp:o}):Object.assign(s,{captchaResponse:o}),Object.assign(s,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(s,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),s}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cw{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=o=>new Promise((s,a)=>{try{const l=e(o);s(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rw{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Dd(this),this.idTokenSubscription=new Dd(this),this.beforeStateQueue=new Cw(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bp,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Oe(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await er.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,o=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const s=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!s||s===a)&&(l!=null&&l.user)&&(i=l.user,o=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(o)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(s))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return I(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ti(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=nw()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?b(e):null;return n&&I(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&I(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Oe(e))})}async initializeRecaptchaConfig(){const e=await Qp(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new Jp(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new Zp(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new An("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Oe(e)||this._popupRedirectResolver;I(n,this,"argument-error"),this.redirectPersistenceManager=await er.create(this,[Oe(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const o=typeof n=="function"?n:n.next.bind(n),s=this._isInitialized?Promise.resolve():this._initializationPromise;return I(s,this,"internal-error"),s.then(()=>o(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return I(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Yp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ew(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Q(t){return b(t)}class Dd{constructor(e){this.auth=e,this.observer=null,this.addObserver=kp(n=>this.observer=n)}get next(){return I(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pw(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Oe);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Nw(t,e,n){const r=Q(t);I(r._canInitEmulator,r,"emulator-config-failed"),I(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),o=em(e),{host:s,port:a}=Aw(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${o}//${s}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:s,port:a,protocol:o.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Ow()}function em(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Aw(t){const e=em(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const o=i[1];return{host:o,port:Md(r.substr(o.length+1))}}else{const[o,s]=r.split(":");return{host:o,port:Md(s)}}}function Md(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Ow(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return ot("not implemented")}_getIdTokenResponse(e){return ot("not implemented")}_linkToIdToken(e,n){return ot("not implemented")}_getReauthenticationResolver(e){return ot("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tm(t,e){return ie(t,"POST","/v1/accounts:resetPassword",te(t,e))}async function nm(t,e){return ie(t,"POST","/v1/accounts:update",e)}async function xw(t,e){return ie(t,"POST","/v1/accounts:update",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pa(t,e){return St(t,"POST","/v1/accounts:signInWithPassword",te(t,e))}async function Ss(t,e){return ie(t,"POST","/v1/accounts:sendOobCode",te(t,e))}async function Lw(t,e){return Ss(t,e)}async function ma(t,e){return Ss(t,e)}async function ga(t,e){return Ss(t,e)}async function Dw(t,e){return Ss(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mw(t,e){return St(t,"POST","/v1/accounts:signInWithEmailLink",te(t,e))}async function bw(t,e){return St(t,"POST","/v1/accounts:signInWithEmailLink",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ri extends kr{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ri(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ri(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=e._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Xt(e,r,"signInWithPassword");return pa(e,i)}else return pa(e,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const o=await Xt(e,r,"signInWithPassword");return pa(e,o)}else return Promise.reject(i)});case"emailLink":return Mw(e,{email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return nm(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bw(e,{idToken:n,email:this._email,oobCode:this._password});default:fe(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vt(t,e){return St(t,"POST","/v1/accounts:signInWithIdp",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uw="http://localhost";class lt extends kr{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new lt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):fe("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,o=Mu(n,["providerId","signInMethod"]);if(!r||!i)return null;const s=new lt(r,i);return s.idToken=o.idToken||void 0,s.accessToken=o.accessToken||void 0,s.secret=o.secret,s.nonce=o.nonce,s.pendingToken=o.pendingToken||null,s}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}buildRequest(){const e={requestUri:Uw,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_r(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fw(t,e){return ie(t,"POST","/v1/accounts:sendVerificationCode",te(t,e))}async function jw(t,e){return St(t,"POST","/v1/accounts:signInWithPhoneNumber",te(t,e))}async function zw(t,e){const n=await St(t,"POST","/v1/accounts:signInWithPhoneNumber",te(t,e));if(n.temporaryProof)throw $r(t,"account-exists-with-different-credential",n);return n}const Bw={USER_NOT_FOUND:"user-not-found"};async function Ww(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return St(t,"POST","/v1/accounts:signInWithPhoneNumber",te(t,n),Bw)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends kr{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,n){return new vn({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new vn({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return jw(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return zw(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ww(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o}=e;return!r&&!n&&!i&&!o?null:new vn({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vw(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $w(t){const e=Gn(Vr(t)).link,n=e?Gn(Vr(e)).deep_link_id:null,r=Gn(Vr(t)).deep_link_id;return(r?Gn(Vr(r)).link:null)||r||n||e||t}class Ts{constructor(e){var n,r,i,o,s,a;const l=Gn(Vr(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,d=(r=l.oobCode)!==null&&r!==void 0?r:null,f=Vw((i=l.mode)!==null&&i!==void 0?i:null);I(u&&d&&f,"argument-error"),this.apiKey=u,this.operation=f,this.code=d,this.continueUrl=(o=l.continueUrl)!==null&&o!==void 0?o:null,this.languageCode=(s=l.languageCode)!==null&&s!==void 0?s:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=$w(e);try{return new Ts(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn{constructor(){this.providerId=nn.PROVIDER_ID}static credential(e,n){return Ri._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Ts.parseLink(n);return I(r,"argument-error"),Ri._fromEmailAndCode(e,r.code,r.tenantId)}}nn.PROVIDER_ID="password";nn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";nn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Tt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class tr extends Sr{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return I("providerId"in n&&"signInMethod"in n,"argument-error"),lt._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return I(e.idToken||e.accessToken,"argument-error"),lt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return tr.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return tr.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:o,nonce:s,providerId:a}=e;if(!r&&!i&&!n&&!o||!a)return null;try{return new tr(a)._credential({idToken:n,accessToken:r,nonce:s,pendingToken:o})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt extends Sr{constructor(){super("facebook.com")}static credential(e){return lt._fromParams({providerId:tt.PROVIDER_ID,signInMethod:tt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return tt.credentialFromTaggedObject(e)}static credentialFromError(e){return tt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return tt.credential(e.oauthAccessToken)}catch{return null}}}tt.FACEBOOK_SIGN_IN_METHOD="facebook.com";tt.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return lt._fromParams({providerId:nt.PROVIDER_ID,signInMethod:nt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return nt.credentialFromTaggedObject(e)}static credentialFromError(e){return nt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return nt.credential(n,r)}catch{return null}}}nt.GOOGLE_SIGN_IN_METHOD="google.com";nt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rt extends Sr{constructor(){super("github.com")}static credential(e){return lt._fromParams({providerId:rt.PROVIDER_ID,signInMethod:rt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rt.credentialFromTaggedObject(e)}static credentialFromError(e){return rt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rt.credential(e.oauthAccessToken)}catch{return null}}}rt.GITHUB_SIGN_IN_METHOD="github.com";rt.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hw="http://localhost";class fr extends kr{constructor(e,n){super(e,e),this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return vt(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,vt(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,vt(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:o}=n;return!r||!i||!o||r!==i?null:new fr(r,o)}static _create(e,n){return new fr(e,n)}buildRequest(){return{requestUri:Hw,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kw="saml.";class ts extends Tt{constructor(e){I(e.startsWith(Kw),"argument-error"),super(e)}static credentialFromResult(e){return ts.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return ts.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=fr.fromJSON(e);return I(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return fr._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it extends Sr{constructor(){super("twitter.com")}static credential(e,n){return lt._fromParams({providerId:it.PROVIDER_ID,signInMethod:it.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return it.credentialFromTaggedObject(e)}static credentialFromError(e){return it.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return it.credential(n,r)}catch{return null}}}it.TWITTER_SIGN_IN_METHOD="twitter.com";it.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Eo(t,e){return St(t,"POST","/v1/accounts:signUp",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const o=await mn._fromIdTokenResponse(e,r,i),s=bd(r);return new We({user:o,providerId:s,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=bd(r);return new We({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function bd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gw(t){var e;const n=Q(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new We({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await Eo(n,{returnSecureToken:!0}),i=await We._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns extends Re{constructor(e,n,r,i){var o;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,ns.prototype),this.customData={appName:e.name,tenantId:(o=e.tenantId)!==null&&o!==void 0?o:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new ns(e,n,r,i)}}function rm(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(o=>{throw o.code==="auth/multi-factor-auth-required"?ns._fromErrorAndOperation(t,o,e,r):o})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function im(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qw(t,e){const n=b(t);await Cs(!0,n,e);const{providerUserInfo:r}=await aw(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=im(r||[]);return n.providerData=n.providerData.filter(o=>i.has(o.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Bu(t,e,n=!1){const r=await It(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return We._forOperation(t,"link",r)}async function Cs(t,e,n){await Ti(e);const r=im(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";I(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function om(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const o=await It(t,rm(r,i,e,t),n);I(o.idToken,r,"internal-error");const s=ks(o.idToken);I(s,r,"internal-error");const{sub:a}=s;return I(t.uid===a,r,"user-mismatch"),We._forOperation(t,i,o)}catch(o){throw(o==null?void 0:o.code)==="auth/user-not-found"&&fe(r,"user-mismatch"),o}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sm(t,e,n=!1){const r="signIn",i=await rm(t,r,e),o=await We._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(o.user),o}async function Rs(t,e){return sm(Q(t),e)}async function am(t,e){const n=b(t);return await Cs(!1,n,e.providerId),Bu(n,e)}async function lm(t,e){return om(b(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yw(t,e){return St(t,"POST","/v1/accounts:signInWithCustomToken",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qw(t,e){const n=Q(t),r=await Yw(n,{token:e,returnSecureToken:!0}),i=await We._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ui{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?Wu._fromServerResponse(e,n):"totpInfo"in n?Vu._fromServerResponse(e,n):fe(e,"internal-error")}}class Wu extends Ui{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new Wu(n)}}class Vu extends Ui{constructor(e){super("totp",e)}static _fromServerResponse(e,n){return new Vu(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(t,e,n){var r;I(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),I(typeof n.dynamicLinkDomain>"u"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(I(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(I(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Jw(t,e,n){var r;const i=Q(t),o={requestType:"PASSWORD_RESET",email:e,clientType:"CLIENT_TYPE_WEB"};if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const s=await Xt(i,o,"getOobCode",!0);n&&nr(i,s,n),await ma(i,s)}else n&&nr(i,o,n),await ma(i,o).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log("Password resets are protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the password reset flow.");const a=await Xt(i,o,"getOobCode",!0);n&&nr(i,a,n),await ma(i,a)}else return Promise.reject(s)})}async function Xw(t,e,n){await tm(b(t),{oobCode:e,newPassword:n})}async function Zw(t,e){await xw(b(t),{oobCode:e})}async function um(t,e){const n=b(t),r=await tm(n,{oobCode:e}),i=r.requestType;switch(I(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":I(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":I(r.mfaInfo,n,"internal-error");default:I(r.email,n,"internal-error")}let o=null;return r.mfaInfo&&(o=Ui._fromServerResponse(Q(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:o},operation:i}}async function eE(t,e){const{data:n}=await um(b(t),e);return n.email}async function tE(t,e,n){var r;const i=Q(t),o={returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"};let s;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const u=await Xt(i,o,"signUpPassword");s=Eo(i,u)}else s=Eo(i,o).catch(async u=>{if(u.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const d=await Xt(i,o,"signUpPassword");return Eo(i,d)}else return Promise.reject(u)});const a=await s.catch(u=>Promise.reject(u)),l=await We._fromIdTokenResponse(i,"signIn",a);return await i._updateCurrentUser(l.user),l}function nE(t,e,n){return Rs(b(t),nn.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rE(t,e,n){var r;const i=Q(t),o={requestType:"EMAIL_SIGNIN",email:e,clientType:"CLIENT_TYPE_WEB"};function s(a,l){I(l.handleCodeInApp,i,"argument-error"),l&&nr(i,a,l)}if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const a=await Xt(i,o,"getOobCode",!0);s(a,n),await ga(i,a)}else s(o,n),await ga(i,o).catch(async a=>{if(a.code==="auth/missing-recaptcha-token"){console.log("Email link sign-in is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const l=await Xt(i,o,"getOobCode",!0);s(l,n),await ga(i,l)}else return Promise.reject(a)})}function iE(t,e){const n=Ts.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function oE(t,e,n){const r=b(t),i=nn.credentialWithLink(e,n||Si());return I(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),Rs(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sE(t,e){return ie(t,"POST","/v1/accounts:createAuthUri",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aE(t,e){const n=Uu()?Si():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await sE(b(t),r);return i||[]}async function lE(t,e){const n=b(t),i={requestType:"VERIFY_EMAIL",idToken:await t.getIdToken()};e&&nr(n.auth,i,e);const{email:o}=await Lw(n.auth,i);o!==t.email&&await t.reload()}async function uE(t,e,n){const r=b(t),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await t.getIdToken(),newEmail:e};n&&nr(r.auth,o,n);const{email:s}=await Dw(r.auth,o);s!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cE(t,e){return ie(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dE(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=b(t),o={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},s=await It(r,cE(r.auth,o));r.displayName=s.displayName||null,r.photoURL=s.photoUrl||null;const a=r.providerData.find(({providerId:l})=>l==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(s)}function fE(t,e){return cm(b(t),e,null)}function hE(t,e){return cm(b(t),null,e)}async function cm(t,e,n){const{auth:r}=t,o={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(o.email=e),n&&(o.password=n);const s=await It(t,nm(r,o));await t._updateTokensIfNecessary(s,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pE(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},o=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t!=null&&t.idToken)){const s=(n=(e=ks(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(s){const a=s!=="anonymous"&&s!=="custom"?s:null;return new rr(o,a)}}if(!r)return null;switch(r){case"facebook.com":return new mE(o,i);case"github.com":return new gE(o,i);case"google.com":return new vE(o,i);case"twitter.com":return new yE(o,i,t.screenName||null);case"custom":case"anonymous":return new rr(o,null);default:return new rr(o,r,i)}}class rr{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class dm extends rr{constructor(e,n,r,i){super(e,n,r),this.username=i}}class mE extends rr{constructor(e,n){super(e,"facebook.com",n)}}class gE extends dm{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class vE extends rr{constructor(e,n){super(e,"google.com",n)}}class yE extends dm{constructor(e,n,r){super(e,"twitter.com",n,r)}}function _E(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:pE(n)}class fn{constructor(e,n,r){this.type=e,this.credential=n,this.auth=r}static _fromIdtoken(e,n){return new fn("enroll",e,n)}static _fromMfaPendingCredential(e){return new fn("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e!=null&&e.multiFactorSession){if(!((n=e.multiFactorSession)===null||n===void 0)&&n.pendingCredential)return fn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return fn._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=Q(e),i=n.customData._serverResponse,o=(i.mfaInfo||[]).map(a=>Ui._fromServerResponse(r,a));I(i.mfaPendingCredential,r,"internal-error");const s=fn._fromMfaPendingCredential(i.mfaPendingCredential);return new $u(s,o,async a=>{const l=await a._process(r,s);delete i.mfaInfo,delete i.mfaPendingCredential;const u=Object.assign(Object.assign({},i),{idToken:l.idToken,refreshToken:l.refreshToken});switch(n.operationType){case"signIn":const d=await We._fromIdTokenResponse(r,n.operationType,u);return await r._updateCurrentUser(d.user),d;case"reauthenticate":return I(n.user,r,"internal-error"),We._forOperation(n.user,n.operationType,u);default:fe(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function wE(t,e){var n;const r=b(t),i=e;return I(e.customData.operationType,r,"argument-error"),I((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),$u._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function EE(t,e){return ie(t,"POST","/v2/accounts/mfaEnrollment:start",te(t,e))}function IE(t,e){return ie(t,"POST","/v2/accounts/mfaEnrollment:finalize",te(t,e))}function kE(t,e){return ie(t,"POST","/v2/accounts/mfaEnrollment:withdraw",te(t,e))}class Hu{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Ui._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new Hu(e)}async getSession(){return fn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,n){const r=e,i=await this.getSession(),o=await It(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(o),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const i=await It(this.user,kE(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:o})=>o!==n),await this.user._updateTokensIfNecessary(i),await this.user.reload()}catch(i){throw i}}}const va=new WeakMap;function SE(t){const e=b(t);return va.has(e)||va.set(e,Hu._fromUser(e)),va.get(e)}const rs="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(rs,"1"),this.storage.removeItem(rs),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TE(){const t=ee();return ju(t)||Ir(t)}const CE=1e3,RE=10;class hm extends fm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=TE()&&ww(),this.fallbackToPolling=qp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((s,a,l)=>{this.notifyListeners(s,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const s=this.storage.getItem(r);if(e.newValue!==s)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const s=this.storage.getItem(r);!n&&this.localCache[r]===s||this.notifyListeners(r,s)},o=this.storage.getItem(r);_w()&&o!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,RE):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},CE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}hm.type="LOCAL";const Ku=hm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pm extends fm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}pm.type="SESSION";const Tn=pm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PE(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ps{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Ps(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:o}=n.data,s=this.handlersMap[i];if(!(s!=null&&s.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(s).map(async u=>u(n.origin,o)),l=await PE(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ps.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fi(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NE{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let o,s;return new Promise((a,l)=>{const u=Fi("",20);i.port1.start();const d=setTimeout(()=>{l(new Error("unsupported_event"))},r);s={messageChannel:i,onMessage(f){const m=f;if(m.data.eventId===u)switch(m.data.status){case"ack":clearTimeout(d),o=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(o),a(m.data.response);break;default:clearTimeout(d),clearTimeout(o),l(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{s&&this.removeMessageHandler(s)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(){return window}function AE(t){J().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gu(){return typeof J().WorkerGlobalScope<"u"&&typeof J().importScripts=="function"}async function OE(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xE(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function LE(){return Gu()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="firebaseLocalStorageDb",DE=1,is="firebaseLocalStorage",gm="fbase_key";class ji{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ns(t,e){return t.transaction([is],e?"readwrite":"readonly").objectStore(is)}function ME(){const t=indexedDB.deleteDatabase(mm);return new ji(t).toPromise()}function Il(){const t=indexedDB.open(mm,DE);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(is,{keyPath:gm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(is)?e(r):(r.close(),await ME(),e(await Il()))})})}async function Ud(t,e,n){const r=Ns(t,!0).put({[gm]:e,value:n});return new ji(r).toPromise()}async function bE(t,e){const n=Ns(t,!1).get(e),r=await new ji(n).toPromise();return r===void 0?null:r.value}function Fd(t,e){const n=Ns(t,!0).delete(e);return new ji(n).toPromise()}const UE=800,FE=3;class vm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Il(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>FE)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Gu()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ps._getInstance(LE()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await OE(),!this.activeServiceWorker)return;this.sender=new NE(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xE()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Il();return await Ud(e,rs,"1"),await Fd(e,rs),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Ud(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>bE(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Fd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const o=Ns(i,!1).getAll();return new ji(o).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:o}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(o)&&(this.notifyListeners(i,o),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),UE)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}vm.type="LOCAL";const Pi=vm;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jE(t,e){return ie(t,"POST","/v2/accounts/mfaSignIn:start",te(t,e))}function zE(t,e){return ie(t,"POST","/v2/accounts/mfaSignIn:finalize",te(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BE=500,WE=6e4,so=1e12;class VE{constructor(e){this.auth=e,this.counter=so,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new $E(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||so;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||so;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||so;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class $E{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;I(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=HE(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},WE)},BE))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function HE(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=Xp("rcb"),KE=new Mi(3e4,6e4),GE="https://www.google.com/recaptcha/api.js?";class qE{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=J().grecaptcha)===null||e===void 0)&&e.render)}load(e,n=""){return I(YE(n),e,"argument-error"),this.shouldResolveImmediately(n)&&xd(J().grecaptcha)?Promise.resolve(J().grecaptcha):new Promise((r,i)=>{const o=J().setTimeout(()=>{i(ce(e,"network-request-failed"))},KE.get());J()[ya]=()=>{J().clearTimeout(o),delete J()[ya];const a=J().grecaptcha;if(!a||!xd(a)){i(ce(e,"internal-error"));return}const l=a.render;a.render=(u,d)=>{const f=l(u,d);return this.counter++,f},this.hostLanguage=n,r(a)};const s=`${GE}?${_r({onload:ya,render:"explicit",hl:n})}`;zu(s).catch(()=>{clearTimeout(o),i(ce(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var n;return!!(!((n=J().grecaptcha)===null||n===void 0)&&n.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function YE(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class QE{async load(e){return new VE(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ym="recaptcha",JE={theme:"light",type:"image"};let XE=class{constructor(e,n=Object.assign({},JE),r){this.parameters=n,this.type=ym,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Q(r),this.isInvisible=this.parameters.size==="invisible",I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;I(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new QE:new qE,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const o=s=>{s&&(this.tokenChangeListeners.delete(o),i(s))};this.tokenChangeListeners.add(o),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){I(!this.parameters.sitekey,this.auth,"argument-error"),I(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),I(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=J()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){I(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){I(Uu()&&!Gu(),this.auth,"internal-error"),await ZE(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await Ew(this.auth);I(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return I(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function ZE(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qu{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=vn._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function eI(t,e,n){const r=Q(t),i=await As(r,e,b(n));return new qu(i,o=>Rs(r,o))}async function tI(t,e,n){const r=b(t);await Cs(!1,r,"phone");const i=await As(r.auth,e,b(n));return new qu(i,o=>am(r,o))}async function nI(t,e,n){const r=b(t),i=await As(r.auth,e,b(n));return new qu(i,o=>lm(r,o))}async function As(t,e,n){var r;const i=await n.verify();try{I(typeof i=="string",t,"argument-error"),I(n.type===ym,t,"argument-error");let o;if(typeof e=="string"?o={phoneNumber:e}:o=e,"session"in o){const s=o.session;if("phoneNumber"in o)return I(s.type==="enroll",t,"internal-error"),(await EE(t,{idToken:s.credential,phoneEnrollmentInfo:{phoneNumber:o.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{I(s.type==="signin",t,"internal-error");const a=((r=o.multiFactorHint)===null||r===void 0?void 0:r.uid)||o.multiFactorUid;return I(a,t,"missing-multi-factor-info"),(await jE(t,{mfaPendingCredential:s.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:s}=await Fw(t,{phoneNumber:o.phoneNumber,recaptchaToken:i});return s}}finally{n._reset()}}async function rI(t,e){await Bu(b(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cn=class Io{constructor(e){this.providerId=Io.PROVIDER_ID,this.auth=Q(e)}verifyPhoneNumber(e,n){return As(this.auth,e,b(n))}static credential(e,n){return vn._fromVerification(e,n)}static credentialFromResult(e){const n=e;return Io.credentialFromTaggedObject(n)}static credentialFromError(e){return Io.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?vn._fromTokenResponse(n,r):null}};Cn.PROVIDER_ID="phone";Cn.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xn(t,e){return e?Oe(e):(I(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu extends kr{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return vt(e,this._buildIdpRequest())}_linkToIdToken(e,n){return vt(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return vt(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function iI(t){return sm(t.auth,new Yu(t),t.bypassAuthState)}function oI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),om(n,new Yu(t),t.bypassAuthState)}async function sI(t){const{auth:e,user:n}=t;return I(n,e,"internal-error"),Bu(n,new Yu(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _m{constructor(e,n,r,i,o=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=o,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:o,error:s,type:a}=e;if(s){this.reject(s);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:o||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return iI;case"linkViaPopup":case"linkViaRedirect":return sI;case"reauthViaPopup":case"reauthViaRedirect":return oI;default:fe(this.auth,"internal-error")}}resolve(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Je(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=new Mi(2e3,1e4);async function lI(t,e,n){const r=Q(t);Er(t,e,Tt);const i=xn(r,n);return new ht(r,"signInViaPopup",e,i).executeNotNull()}async function uI(t,e,n){const r=b(t);Er(r.auth,e,Tt);const i=xn(r.auth,n);return new ht(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function cI(t,e,n){const r=b(t);Er(r.auth,e,Tt);const i=xn(r.auth,n);return new ht(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class ht extends _m{constructor(e,n,r,i,o){super(e,n,i,o),this.provider=r,this.authWindow=null,this.pollId=null,ht.currentPopupAction&&ht.currentPopupAction.cancel(),ht.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return I(e,this.auth,"internal-error"),e}async onExecution(){Je(this.filter.length===1,"Popup operations only handle one event");const e=Fi();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ce(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ce(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,ht.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ce(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,aI.get())};e()}}ht.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI="pendingRedirect",ti=new Map;class fI extends _m{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ti.get(this.auth._key());if(!e){try{const r=await hI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ti.set(this.auth._key(),e)}return this.bypassAuthState||ti.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function hI(t,e){const n=Em(e),r=wm(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function Qu(t,e){return wm(t)._set(Em(e),"true")}function pI(){ti.clear()}function Ju(t,e){ti.set(t._key(),e)}function wm(t){return Oe(t._redirectPersistence)}function Em(t){return gn(dI,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mI(t,e,n){return gI(t,e,n)}async function gI(t,e,n){const r=Q(t);Er(t,e,Tt),await r._initializationPromise;const i=xn(r,n);return await Qu(i,r),i._openRedirect(r,e,"signInViaRedirect")}function vI(t,e,n){return yI(t,e,n)}async function yI(t,e,n){const r=b(t);Er(r.auth,e,Tt),await r.auth._initializationPromise;const i=xn(r.auth,n);await Qu(i,r.auth);const o=await Im(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",o)}function _I(t,e,n){return wI(t,e,n)}async function wI(t,e,n){const r=b(t);Er(r.auth,e,Tt),await r.auth._initializationPromise;const i=xn(r.auth,n);await Cs(!1,r,e.providerId),await Qu(i,r.auth);const o=await Im(r);return i._openRedirect(r.auth,e,"linkViaRedirect",o)}async function EI(t,e){return await Q(t)._initializationPromise,Os(t,e,!1)}async function Os(t,e,n=!1){const r=Q(t),i=xn(r,e),s=await new fI(r,i,n).execute();return s&&!n&&(delete s.user._redirectEventId,await r._persistUserIfCurrent(s.user),await r._setRedirectUser(null,e)),s}async function Im(t){const e=Fi(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const II=10*60*1e3;class km{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!kI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Sm(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ce(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=II&&this.cachedEventUids.clear(),this.cachedEventUids.has(jd(e))}saveEventToCache(e){this.cachedEventUids.add(jd(e)),this.lastProcessedEventTime=Date.now()}}function jd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Sm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function kI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Sm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tm(t,e={}){return ie(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const SI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,TI=/^https?/;async function CI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Tm(t);for(const n of e)try{if(RI(n))return}catch{}fe(t,"unauthorized-domain")}function RI(t){const e=Si(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const s=new URL(t);return s.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&s.hostname===r}if(!TI.test(n))return!1;if(SI.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI=new Mi(3e4,6e4);function zd(){const t=J().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function NI(t){return new Promise((e,n)=>{var r,i,o;function s(){zd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{zd(),n(ce(t,"network-request-failed"))},timeout:PI.get()})}if(!((i=(r=J().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((o=J().gapi)===null||o===void 0)&&o.load)s();else{const a=Xp("iframefcb");return J()[a]=()=>{gapi.load?s():n(ce(t,"network-request-failed"))},zu(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw ko=null,e})}let ko=null;function AI(t){return ko=ko||NI(t),ko}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OI=new Mi(5e3,15e3),xI="__/auth/iframe",LI="emulator/auth/iframe",DI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},MI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function bI(t){const e=t.config;I(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Fu(e,LI):`https://${t.config.authDomain}/${xI}`,r={apiKey:e.apiKey,appName:t.name,v:On},i=MI.get(t.config.apiHost);i&&(r.eid=i);const o=t._getFrameworks();return o.length&&(r.fw=o.join(",")),`${n}?${_r(r).slice(1)}`}async function UI(t){const e=await AI(t),n=J().gapi;return I(n,t,"internal-error"),e.open({where:document.body,url:bI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:DI,dontclear:!0},r=>new Promise(async(i,o)=>{await r.restyle({setHideOnLeave:!1});const s=ce(t,"network-request-failed"),a=J().setTimeout(()=>{o(s)},OI.get());function l(){J().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{o(s)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},jI=500,zI=600,BI="_blank",WI="http://localhost";class Bd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function VI(t,e,n,r=jI,i=zI){const o=Math.max((window.screen.availHeight-i)/2,0).toString(),s=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},FI),{width:r.toString(),height:i.toString(),top:o,left:s}),u=ee().toLowerCase();n&&(a=$p(u)?BI:n),Vp(u)&&(e=e||WI,l.scrollbars="yes");const d=Object.entries(l).reduce((m,[v,_])=>`${m}${v}=${_},`,"");if(yw(u)&&a!=="_self")return $I(e||"",a),new Bd(null);const f=window.open(e||"",a,d);I(f,t,"popup-blocked");try{f.focus()}catch{}return new Bd(f)}function $I(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const HI="__/auth/handler",KI="emulator/auth/handler",GI=encodeURIComponent("fac");async function kl(t,e,n,r,i,o){I(t.config.authDomain,t,"auth-domain-config-required"),I(t.config.apiKey,t,"invalid-api-key");const s={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:On,eventId:i};if(e instanceof Tt){e.setDefaultLanguage(t.languageCode),s.providerId=e.providerId||"",N0(e.getCustomParameters())||(s.customParameters=JSON.stringify(e.getCustomParameters()));for(const[d,f]of Object.entries(o||{}))s[d]=f}if(e instanceof Sr){const d=e.getScopes().filter(f=>f!=="");d.length>0&&(s.scopes=d.join(","))}t.tenantId&&(s.tid=t.tenantId);const a=s;for(const d of Object.keys(a))a[d]===void 0&&delete a[d];const l=await t._getAppCheckToken(),u=l?`#${GI}=${encodeURIComponent(l)}`:"";return`${qI(t)}?${_r(a).slice(1)}${u}`}function qI({config:t}){return t.emulator?Fu(t,KI):`https://${t.authDomain}/${HI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a="webStorageSupport";class YI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tn,this._completeRedirectFn=Os,this._overrideRedirectResult=Ju}async _openPopup(e,n,r,i){var o;Je((o=this.eventManagers[e._key()])===null||o===void 0?void 0:o.manager,"_initialize() not called before _openPopup()");const s=await kl(e,n,r,Si(),i);return VI(e,s,Fi())}async _openRedirect(e,n,r,i){await this._originValidation(e);const o=await kl(e,n,r,Si(),i);return AE(o),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:o}=this.eventManagers[n];return i?Promise.resolve(i):(Je(o,"If manager is not set, promise should be"),o)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await UI(e),r=new km(e);return n.register("authEvent",i=>(I(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_a,{type:_a},i=>{var o;const s=(o=i==null?void 0:i[0])===null||o===void 0?void 0:o[_a];s!==void 0&&n(!!s),fe(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=CI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return qp()||ju()||Ir()}}const QI=YI;class JI{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return ot("unexpected MultiFactorSessionType")}}}class Xu extends JI{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xu(e)}_finalizeEnroll(e,n,r){return IE(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return zE(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Cm{constructor(){}static assertion(e){return Xu._fromCredential(e)}}Cm.FACTOR_ID="phone";var Wd="@firebase/auth",Vd="0.23.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){I(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ZI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ek(t){Sn(new Yt("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),o=e.getProvider("app-check-internal"),{apiKey:s,authDomain:a}=r.options;I(s&&!s.includes(":"),"invalid-api-key",{appName:r.name}),I(!(a!=null&&a.includes(":")),"argument-error",{appName:r.name});const l={apiKey:s,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Yp(t)},u=new Rw(r,i,o,l);return Pw(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Sn(new Yt("auth-internal",e=>{const n=Q(e.getProvider("auth").getImmediate());return(r=>new XI(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Kt(Wd,Vd,ZI(t)),Kt(Wd,Vd,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tk=5*60;E0("authIdTokenMaxAge");ek("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nk=2e3;async function rk(t,e,n){var r;const{BuildInfo:i}=Rn();Je(e.sessionId,"AuthEvent did not contain a session ID");const o=await lk(e.sessionId),s={};return Ir()?s.ibi=i.packageName:bi()?s.apn=i.packageName:fe(t,"operation-not-supported-in-this-environment"),i.displayName&&(s.appDisplayName=i.displayName),s.sessionId=o,kl(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,s)}async function ik(t){const{BuildInfo:e}=Rn(),n={};Ir()?n.iosBundleId=e.packageName:bi()?n.androidPackageName=e.packageName:fe(t,"operation-not-supported-in-this-environment"),await Tm(t,n)}function ok(t){const{cordova:e}=Rn();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,vw()?"_blank":"_system","location=yes"),n(i)})})}async function sk(t,e,n){const{cordova:r}=Rn();let i=()=>{};try{await new Promise((o,s)=>{let a=null;function l(){var f;o();const m=(f=r.plugins.browsertab)===null||f===void 0?void 0:f.close;typeof m=="function"&&m(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function u(){a||(a=window.setTimeout(()=>{s(ce(t,"redirect-cancelled-by-user"))},nk))}function d(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(l),document.addEventListener("resume",u,!1),bi()&&document.addEventListener("visibilitychange",d,!1),i=()=>{e.removePassiveListener(l),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",d,!1),a&&window.clearTimeout(a)}})}finally{i()}}function ak(t){var e,n,r,i,o,s,a,l,u,d;const f=Rn();I(typeof((e=f==null?void 0:f.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),I(typeof((n=f==null?void 0:f.BuildInfo)===null||n===void 0?void 0:n.packageName)<"u",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),I(typeof((o=(i=(r=f==null?void 0:f.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||o===void 0?void 0:o.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((l=(a=(s=f==null?void 0:f.cordova)===null||s===void 0?void 0:s.plugins)===null||a===void 0?void 0:a.browsertab)===null||l===void 0?void 0:l.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),I(typeof((d=(u=f==null?void 0:f.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||d===void 0?void 0:d.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function lk(t){const e=uk(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function uk(t){if(Je(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=20;class dk extends km{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function fk(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:mk(),postBody:null,tenantId:t.tenantId,error:ce(t,"no-auth-event")}}function hk(t,e){return Sl()._set(Tl(t),e)}async function $d(t){const e=await Sl()._get(Tl(t));return e&&await Sl()._remove(Tl(t)),e}function pk(t,e){var n,r;const i=vk(e);if(i.includes("/__/auth/callback")){const o=So(i),s=o.firebaseError?gk(decodeURIComponent(o.firebaseError)):null,a=(r=(n=s==null?void 0:s.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],l=a?ce(a):null;return l?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:l,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function mk(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<ck;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function Sl(){return Oe(Ku)}function Tl(t){return gn("authEvent",t.config.apiKey,t.name)}function gk(t){try{return JSON.parse(t)}catch{return null}}function vk(t){const e=So(t),n=e.link?decodeURIComponent(e.link):void 0,r=So(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return So(i).link||i||r||n||t}function So(t){if(!(t!=null&&t.includes("?")))return{};const[e,...n]=t.split("?");return Gn(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yk=500;class _k{constructor(){this._redirectPersistence=Tn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Os,this._overrideRedirectResult=Ju}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new dk(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){fe(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){ak(e);const o=await this._initialize(e);await o.initialized(),o.resetRedirect(),pI(),await this._originValidation(e);const s=fk(e,r,i);await hk(e,s);const a=await rk(e,s,n),l=await ok(a);return sk(e,o,l)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ik(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:o}=Rn(),s=setTimeout(async()=>{await $d(e),n.onEvent(Hd())},yk),a=async d=>{clearTimeout(s);const f=await $d(e);let m=null;f&&(d!=null&&d.url)&&(m=pk(f,d.url)),n.onEvent(m||Hd())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const l=i,u=`${o.packageName.toLowerCase()}://`;Rn().handleOpenURL=async d=>{if(d.toLowerCase().startsWith(u)&&a({url:d}),typeof l=="function")try{l(d)}catch(f){console.error(f)}}}}const wk=_k;function Hd(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ce("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t,e){Q(t)._logFramework(e)}var Ik="@firebase/auth-compat",kk="0.4.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sk=1e3;function ni(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function Tk(){return ni()==="http:"||ni()==="https:"}function Rm(t=ee()){return!!((ni()==="file:"||ni()==="ionic:"||ni()==="capacitor:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Ck(){return Au()||wp()}function Rk(){return Ip()&&(document==null?void 0:document.documentMode)===11}function Pk(t=ee()){return/Edge\/\d+/.test(t)}function Nk(t=ee()){return Rk()||Pk(t)}function Pm(){try{const t=self.localStorage,e=Fi();if(t)return t.setItem(e,"1"),t.removeItem(e),Nk()?Xo():!0}catch{return Zu()&&Xo()}return!1}function Zu(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function wa(){return(Tk()||Ep()||Rm())&&!Ck()&&Pm()&&!Zu()}function Nm(){return Rm()&&typeof document<"u"}async function Ak(){return Nm()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Sk);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function Ok(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne={LOCAL:"local",NONE:"none",SESSION:"session"},br=I,Am="persistence";function xk(t,e){if(br(Object.values(Ne).includes(e),t,"invalid-persistence-type"),Au()){br(e!==Ne.SESSION,t,"unsupported-persistence-type");return}if(wp()){br(e===Ne.NONE,t,"unsupported-persistence-type");return}if(Zu()){br(e===Ne.NONE||e===Ne.LOCAL&&Xo(),t,"unsupported-persistence-type");return}br(e===Ne.NONE||Pm(),t,"unsupported-persistence-type")}async function Cl(t){await t._initializationPromise;const e=Om(),n=gn(Am,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function Lk(t,e){const n=Om();if(!n)return[];const r=gn(Am,t,e);switch(n.getItem(r)){case Ne.NONE:return[dr];case Ne.LOCAL:return[Pi,Tn];case Ne.SESSION:return[Tn];default:return[]}}function Om(){var t;try{return((t=Ok())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dk=I;class Mt{constructor(){this.browserResolver=Oe(QI),this.cordovaResolver=Oe(wk),this.underlyingResolver=null,this._redirectPersistence=Tn,this._completeRedirectFn=Os,this._overrideRedirectResult=Ju}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Nm()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return Dk(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Ak();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(t){return t.unwrap()}function Mk(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bk(t){return Lm(t)}function Uk(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const i=e;i.resolver=new Fk(t,wE(t,e))}else if(r){const i=Lm(e),o=e;i&&(o.credential=i,o.tenantId=r.tenantId||void 0,o.email=r.email||void 0,o.phoneNumber=r.phoneNumber||void 0)}}function Lm(t){const{_tokenResponse:e}=t instanceof Re?t.customData:t;if(!e)return null;if(!(t instanceof Re)&&"temporaryProof"in e&&"phoneNumber"in e)return Cn.credentialFromResult(t);const n=e.providerId;if(!n||n===Mr.PASSWORD)return null;let r;switch(n){case Mr.GOOGLE:r=nt;break;case Mr.FACEBOOK:r=tt;break;case Mr.GITHUB:r=rt;break;case Mr.TWITTER:r=it;break;default:const{oauthIdToken:i,oauthAccessToken:o,oauthTokenSecret:s,pendingToken:a,nonce:l}=e;return!o&&!s&&!i&&!a?null:a?n.startsWith("saml.")?fr._create(n,a):lt._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:o}):new tr(n).credential({idToken:i,accessToken:o,rawNonce:l})}return t instanceof Re?r.credentialFromError(t):r.credentialFromResult(t)}function Ee(t,e){return e.catch(n=>{throw n instanceof Re&&Uk(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:bk(n),additionalUserInfo:_E(n),user:pt.getOrCreate(i)}})}async function Rl(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Ee(t,n.confirm(r))}}class Fk{constructor(e,n){this.resolver=n,this.auth=Mk(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ee(xm(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this._delegate=e,this.multiFactor=SE(e)}static getOrCreate(e){return pt.USER_MAP.has(e)||pt.USER_MAP.set(e,new pt(e)),pt.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ee(this.auth,am(this._delegate,e))}async linkWithPhoneNumber(e,n){return Rl(this.auth,tI(this._delegate,e,n))}async linkWithPopup(e){return Ee(this.auth,cI(this._delegate,e,Mt))}async linkWithRedirect(e){return await Cl(Q(this.auth)),_I(this._delegate,e,Mt)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ee(this.auth,lm(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Rl(this.auth,nI(this._delegate,e,n))}reauthenticateWithPopup(e){return Ee(this.auth,uI(this._delegate,e,Mt))}async reauthenticateWithRedirect(e){return await Cl(Q(this.auth)),vI(this._delegate,e,Mt)}sendEmailVerification(e){return lE(this._delegate,e)}async unlink(e){return await qw(this._delegate,e),this}updateEmail(e){return fE(this._delegate,e)}updatePassword(e){return hE(this._delegate,e)}updatePhoneNumber(e){return rI(this._delegate,e)}updateProfile(e){return dE(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return uE(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}pt.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=I;class Pl{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ur(r,"invalid-api-key",{appName:e.name}),Ur(r,"invalid-api-key",{appName:e.name});const i=typeof window<"u"?Mt:void 0;this._delegate=n.initialize({options:{persistence:jk(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(X_),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?pt.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){Nw(this._delegate,e,n)}applyActionCode(e){return Zw(this._delegate,e)}checkActionCode(e){return um(this._delegate,e)}confirmPasswordReset(e,n){return Xw(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Ee(this._delegate,tE(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return aE(this._delegate,e)}isSignInWithEmailLink(e){return iE(this._delegate,e)}async getRedirectResult(){Ur(wa(),this._delegate,"operation-not-supported-in-this-environment");const e=await EI(this._delegate,Mt);return e?Ee(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Ek(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:o,complete:s}=Kd(e,n,r);return this._delegate.onAuthStateChanged(i,o,s)}onIdTokenChanged(e,n,r){const{next:i,error:o,complete:s}=Kd(e,n,r);return this._delegate.onIdTokenChanged(i,o,s)}sendSignInLinkToEmail(e,n){return rE(this._delegate,e,n)}sendPasswordResetEmail(e,n){return Jw(this._delegate,e,n||void 0)}async setPersistence(e){xk(this._delegate,e);let n;switch(e){case Ne.SESSION:n=Tn;break;case Ne.LOCAL:n=await Oe(Pi)._isAvailable()?Pi:Ku;break;case Ne.NONE:n=dr;break;default:return fe("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ee(this._delegate,Gw(this._delegate))}signInWithCredential(e){return Ee(this._delegate,Rs(this._delegate,e))}signInWithCustomToken(e){return Ee(this._delegate,Qw(this._delegate,e))}signInWithEmailAndPassword(e,n){return Ee(this._delegate,nE(this._delegate,e,n))}signInWithEmailLink(e,n){return Ee(this._delegate,oE(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Rl(this._delegate,eI(this._delegate,e,n))}async signInWithPopup(e){return Ur(wa(),this._delegate,"operation-not-supported-in-this-environment"),Ee(this._delegate,lI(this._delegate,e,Mt))}async signInWithRedirect(e){return Ur(wa(),this._delegate,"operation-not-supported-in-this-environment"),await Cl(this._delegate),mI(this._delegate,e,Mt)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return eE(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Pl.Persistence=Ne;function Kd(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:s=>i(s&&pt.getOrCreate(s)),error:e,complete:n}}function jk(t,e){const n=Lk(t,e);if(typeof self<"u"&&!n.includes(Pi)&&n.push(Pi),typeof window<"u")for(const r of[Ku,Tn])n.includes(r)||n.push(r);return n.includes(dr)||n.push(dr),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ec{constructor(){this.providerId="phone",this._delegate=new Cn(xm(wr.auth()))}static credential(e,n){return Cn.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}ec.PHONE_SIGN_IN_METHOD=Cn.PHONE_SIGN_IN_METHOD;ec.PROVIDER_ID=Cn.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zk=I;class Bk{constructor(e,n,r=wr.app()){var i;zk((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new XE(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wk="auth-compat";function Vk(t){t.INTERNAL.registerComponent(new Yt(Wk,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Pl(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Dn.EMAIL_SIGNIN,PASSWORD_RESET:Dn.PASSWORD_RESET,RECOVER_EMAIL:Dn.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Dn.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Dn.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Dn.VERIFY_EMAIL}},EmailAuthProvider:nn,FacebookAuthProvider:tt,GithubAuthProvider:rt,GoogleAuthProvider:nt,OAuthProvider:tr,SAMLAuthProvider:ts,PhoneAuthProvider:ec,PhoneMultiFactorGenerator:Cm,RecaptchaVerifier:Bk,TwitterAuthProvider:it,Auth:Pl,AuthCredential:kr,Error:Re}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(Ik,kk)}Vk(wr);const Gd=wr.initializeApp({projectId:"primerproyectoreact-c83b7",appId:"1:388961035395:web:29755d6370e4c68ea967b6",storageBucket:"primerproyectoreact-c83b7.appspot.com",apiKey:"AIzaSyDz6pcp_RBtFr5MoWoK-1cXt2TBd-UCkL8",authDomain:"primerproyectoreact-c83b7.firebaseapp.com",messagingSenderId:"388961035395",measurementId:"G-7TTQYTQ0GW"});wr.auth();function $k(){const[t,e]=Ll.useState(!1),n=(o,s)=>{Gd.auth().createUserWithEmailAndPassword(o,s).then(a=>{window.alert("Usuario Creado",a),props.setUsuario(a)})},r=(o,s)=>{Gd.auth().signInWithEmailAndPassword(o,s).then(a=>{window.alert("Sesion iniciada con: "+o,a.user),props.setUsuario(a)})},i=o=>{o.preventDefault();const s=o.target.emailField.value,a=o.target.passwordField.value;t&&n(s,a),t||r(s,a)};return g.jsx("div",{className:"contenedor",children:g.jsxs("div",{className:"form-container",children:[g.jsx("h1",{children:t?"Regístrate":"Inicia sesión"}),g.jsxs("form",{onSubmit:i,children:[g.jsx("input",{type:"email",name:"",placeholder:"Email...",id:"emailField"}),g.jsx("br",{}),g.jsx("input",{type:"password",name:"",placeholder:"Password...",id:"passwordField"}),g.jsx("br",{}),g.jsx("button",{type:"submit",value:"",children:t?"Regístrate":"Inicia sesión"})]}),g.jsx("button",{className:"toggle-button",onClick:()=>e(!t),children:t?"¿Ya tienes cuenta? ¡Inicia sesión!":"¿No tienes cuenta? ¡Regístrate gratis!"})]})})}const Hk=Ea.createRoot(document.getElementById("root"));Hk.render(g.jsxs(e0,{children:[g.jsx(i0,{}),g.jsxs(Yy,{children:[g.jsx(Wr,{path:"/",element:g.jsx(a0,{})}),g.jsx(Wr,{path:"/about",element:g.jsx(u0,{})}),g.jsx(Wr,{path:"/contact",element:g.jsx(d0,{})}),g.jsx(Wr,{path:"/login",element:g.jsx($k,{})})]})]}));
