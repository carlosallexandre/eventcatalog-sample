import{R as $,r as i}from"./index.BJb7hJaF.js";const fe=typeof document<"u"?$.useLayoutEffect:()=>{};function Ce(e){const n=i.useRef(null);return fe(()=>{n.current=e},[e]),i.useCallback((...t)=>{const r=n.current;return r?.(...t)},[])}const H=e=>{var n;return(n=e?.ownerDocument)!==null&&n!==void 0?n:document},w=e=>e&&"window"in e&&e.window===e?e:H(e).defaultView||window;function De(e){var n;return typeof window>"u"||window.navigator==null?!1:((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.brands.some(t=>e.test(t.brand)))||e.test(window.navigator.userAgent)}function He(e){var n;return typeof window<"u"&&window.navigator!=null?e.test(((n=window.navigator.userAgentData)===null||n===void 0?void 0:n.platform)||window.navigator.platform):!1}function pe(e){let n=null;return()=>(n==null&&(n=e()),n)}const Ie=pe(function(){return He(/^Mac/i)}),Me=pe(function(){return De(/Android/i)});function xe(e){return e.mozInputSource===0&&e.isTrusted?!0:Me()&&e.pointerType?e.type==="click"&&e.buttons===1:e.detail===0&&!e.pointerType}class Oe{isDefaultPrevented(){return this.nativeEvent.defaultPrevented}preventDefault(){this.defaultPrevented=!0,this.nativeEvent.preventDefault()}stopPropagation(){this.nativeEvent.stopPropagation(),this.isPropagationStopped=()=>!0}isPropagationStopped(){return!1}persist(){}constructor(n,t){this.nativeEvent=t,this.target=t.target,this.currentTarget=t.currentTarget,this.relatedTarget=t.relatedTarget,this.bubbles=t.bubbles,this.cancelable=t.cancelable,this.defaultPrevented=t.defaultPrevented,this.eventPhase=t.eventPhase,this.isTrusted=t.isTrusted,this.timeStamp=t.timeStamp,this.type=n}}function ve(e){let n=i.useRef({isFocused:!1,observer:null});fe(()=>{const r=n.current;return()=>{r.observer&&(r.observer.disconnect(),r.observer=null)}},[]);let t=Ce(r=>{e?.(r)});return i.useCallback(r=>{if(r.target instanceof HTMLButtonElement||r.target instanceof HTMLInputElement||r.target instanceof HTMLTextAreaElement||r.target instanceof HTMLSelectElement){n.current.isFocused=!0;let o=r.target,s=l=>{n.current.isFocused=!1,o.disabled&&t(new Oe("blur",l)),n.current.observer&&(n.current.observer.disconnect(),n.current.observer=null)};o.addEventListener("focusout",s,{once:!0}),n.current.observer=new MutationObserver(()=>{if(n.current.isFocused&&o.disabled){var l;(l=n.current.observer)===null||l===void 0||l.disconnect();let a=o===document.activeElement?null:document.activeElement;o.dispatchEvent(new FocusEvent("blur",{relatedTarget:a})),o.dispatchEvent(new FocusEvent("focusout",{bubbles:!0,relatedTarget:a}))}}),n.current.observer.observe(o,{attributes:!0,attributeFilter:["disabled"]})}},[t])}function Re(e){let{isDisabled:n,onFocus:t,onBlur:r,onFocusChange:o}=e;const s=i.useCallback(u=>{if(u.target===u.currentTarget)return r&&r(u),o&&o(!1),!0},[r,o]),l=ve(s),a=i.useCallback(u=>{const d=H(u.target);u.target===u.currentTarget&&d.activeElement===u.target&&(t&&t(u),o&&o(!0),l(u))},[o,t,l]);return{focusProps:{onFocus:!n&&(t||o||r)?a:void 0,onBlur:!n&&(r||o)?s:void 0}}}let I=null,V=new Set,C=new Map,P=!1,K=!1;const Ae={Tab:!0,Escape:!0};function Y(e,n){for(let t of V)t(e,n)}function je(e){return!(e.metaKey||!Ie()&&e.altKey||e.ctrlKey||e.key==="Control"||e.key==="Shift"||e.key==="Meta")}function O(e){P=!0,je(e)&&(I="keyboard",Y("keyboard",e))}function h(e){I="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&(P=!0,Y("pointer",e))}function be(e){xe(e)&&(P=!0,I="virtual")}function ge(e){e.target===window||e.target===document||(!P&&!K&&(I="virtual",Y("virtual",e)),P=!1,K=!1)}function me(){P=!1,K=!0}function _(e){if(typeof window>"u"||C.get(w(e)))return;const n=w(e),t=H(e);let r=n.HTMLElement.prototype.focus;n.HTMLElement.prototype.focus=function(){P=!0,r.apply(this,arguments)},t.addEventListener("keydown",O,!0),t.addEventListener("keyup",O,!0),t.addEventListener("click",be,!0),n.addEventListener("focus",ge,!0),n.addEventListener("blur",me,!1),typeof PointerEvent<"u"?(t.addEventListener("pointerdown",h,!0),t.addEventListener("pointermove",h,!0),t.addEventListener("pointerup",h,!0)):(t.addEventListener("mousedown",h,!0),t.addEventListener("mousemove",h,!0),t.addEventListener("mouseup",h,!0)),n.addEventListener("beforeunload",()=>{he(e)},{once:!0}),C.set(n,{focus:r})}const he=(e,n)=>{const t=w(e),r=H(e);n&&r.removeEventListener("DOMContentLoaded",n),C.has(t)&&(t.HTMLElement.prototype.focus=C.get(t).focus,r.removeEventListener("keydown",O,!0),r.removeEventListener("keyup",O,!0),r.removeEventListener("click",be,!0),t.removeEventListener("focus",ge,!0),t.removeEventListener("blur",me,!1),typeof PointerEvent<"u"?(r.removeEventListener("pointerdown",h,!0),r.removeEventListener("pointermove",h,!0),r.removeEventListener("pointerup",h,!0)):(r.removeEventListener("mousedown",h,!0),r.removeEventListener("mousemove",h,!0),r.removeEventListener("mouseup",h,!0)),C.delete(t))};function Be(e){const n=H(e);let t;return n.readyState!=="loading"?_(e):(t=()=>{_(e)},n.addEventListener("DOMContentLoaded",t)),()=>he(e,t)}typeof document<"u"&&Be();function $e(){return I!=="pointer"}const Ne=new Set(["checkbox","radio","range","color","file","image","button","submit","reset"]);function We(e,n,t){var r;const o=typeof window<"u"?w(t?.target).HTMLInputElement:HTMLInputElement,s=typeof window<"u"?w(t?.target).HTMLTextAreaElement:HTMLTextAreaElement,l=typeof window<"u"?w(t?.target).HTMLElement:HTMLElement,a=typeof window<"u"?w(t?.target).KeyboardEvent:KeyboardEvent;return e=e||t?.target instanceof o&&!Ne.has(t==null||(r=t.target)===null||r===void 0?void 0:r.type)||t?.target instanceof s||t?.target instanceof l&&t?.target.isContentEditable,!(e&&n==="keyboard"&&t instanceof a&&!Ae[t.key])}function Ue(e,n,t){_(),i.useEffect(()=>{let r=(o,s)=>{We(!!t?.isTextInput,o,s)&&e($e())};return V.add(r),()=>{V.delete(r)}},n)}function Ve(e){let{isDisabled:n,onBlurWithin:t,onFocusWithin:r,onFocusWithinChange:o}=e,s=i.useRef({isFocusWithin:!1}),l=i.useCallback(d=>{s.current.isFocusWithin&&!d.currentTarget.contains(d.relatedTarget)&&(s.current.isFocusWithin=!1,t&&t(d),o&&o(!1))},[t,o,s]),a=ve(l),u=i.useCallback(d=>{!s.current.isFocusWithin&&document.activeElement===d.target&&(r&&r(d),o&&o(!0),s.current.isFocusWithin=!0,a(d))},[r,o,a]);return n?{focusWithinProps:{onFocus:void 0,onBlur:void 0}}:{focusWithinProps:{onFocus:u,onBlur:l}}}let R=!1,N=0;function q(){R=!0,setTimeout(()=>{R=!1},50)}function ae(e){e.pointerType==="touch"&&q()}function Ke(){if(!(typeof document>"u"))return typeof PointerEvent<"u"?document.addEventListener("pointerup",ae):document.addEventListener("touchend",q),N++,()=>{N--,!(N>0)&&(typeof PointerEvent<"u"?document.removeEventListener("pointerup",ae):document.removeEventListener("touchend",q))}}function _e(e){let{onHoverStart:n,onHoverChange:t,onHoverEnd:r,isDisabled:o}=e,[s,l]=i.useState(!1),a=i.useRef({isHovered:!1,ignoreEmulatedMouseEvents:!1,pointerType:"",target:null}).current;i.useEffect(Ke,[]);let{hoverProps:u,triggerHoverEnd:d}=i.useMemo(()=>{let c=(f,b)=>{if(a.pointerType=b,o||b==="touch"||a.isHovered||!f.currentTarget.contains(f.target))return;a.isHovered=!0;let g=f.currentTarget;a.target=g,n&&n({type:"hoverstart",target:g,pointerType:b}),t&&t(!0),l(!0)},p=(f,b)=>{if(a.pointerType="",a.target=null,b==="touch"||!a.isHovered)return;a.isHovered=!1;let g=f.currentTarget;r&&r({type:"hoverend",target:g,pointerType:b}),t&&t(!1),l(!1)},v={};return typeof PointerEvent<"u"?(v.onPointerEnter=f=>{R&&f.pointerType==="mouse"||c(f,f.pointerType)},v.onPointerLeave=f=>{!o&&f.currentTarget.contains(f.target)&&p(f,f.pointerType)}):(v.onTouchStart=()=>{a.ignoreEmulatedMouseEvents=!0},v.onMouseEnter=f=>{!a.ignoreEmulatedMouseEvents&&!R&&c(f,"mouse"),a.ignoreEmulatedMouseEvents=!1},v.onMouseLeave=f=>{!o&&f.currentTarget.contains(f.target)&&p(f,"mouse")}),{hoverProps:v,triggerHoverEnd:p}},[n,t,r,o,a]);return i.useEffect(()=>{o&&d({currentTarget:a.target},a.pointerType)},[o]),{hoverProps:u,isHovered:s}}function qe(e={}){let{autoFocus:n=!1,isTextInput:t,within:r}=e,o=i.useRef({isFocused:!1,isFocusVisible:n||$e()}),[s,l]=i.useState(!1),[a,u]=i.useState(()=>o.current.isFocused&&o.current.isFocusVisible),d=i.useCallback(()=>u(o.current.isFocused&&o.current.isFocusVisible),[]),c=i.useCallback(f=>{o.current.isFocused=f,l(f),d()},[d]);Ue(f=>{o.current.isFocusVisible=f,d()},[],{isTextInput:t});let{focusProps:p}=Re({isDisabled:r,onFocusChange:c}),{focusWithinProps:v}=Ve({isDisabled:!r,onFocusWithinChange:c});return{isFocused:s,isFocusVisible:a,focusProps:r?v:p}}var Ge=Object.defineProperty,Ye=(e,n,t)=>n in e?Ge(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,W=(e,n,t)=>(Ye(e,typeof n!="symbol"?n+"":n,t),t);let ze=class{constructor(){W(this,"current",this.detect()),W(this,"handoffState","pending"),W(this,"currentId",0)}set(n){this.current!==n&&(this.handoffState="pending",this.currentId=0,this.current=n)}reset(){this.set(this.detect())}nextId(){return++this.currentId}get isServer(){return this.current==="server"}get isClient(){return this.current==="client"}detect(){return typeof window>"u"||typeof document>"u"?"server":"client"}handoff(){this.handoffState==="pending"&&(this.handoffState="complete")}get isHandoffComplete(){return this.handoffState==="complete"}},Ee=new ze;function ye(e){return Ee.isServer?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}function Xe(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(n=>setTimeout(()=>{throw n}))}function j(){let e=[],n={addEventListener(t,r,o,s){return t.addEventListener(r,o,s),n.add(()=>t.removeEventListener(r,o,s))},requestAnimationFrame(...t){let r=requestAnimationFrame(...t);return n.add(()=>cancelAnimationFrame(r))},nextFrame(...t){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...t))},setTimeout(...t){let r=setTimeout(...t);return n.add(()=>clearTimeout(r))},microTask(...t){let r={current:!0};return Xe(()=>{r.current&&t[0]()}),n.add(()=>{r.current=!1})},style(t,r,o){let s=t.style.getPropertyValue(r);return Object.assign(t.style,{[r]:o}),this.add(()=>{Object.assign(t.style,{[r]:s})})},group(t){let r=j();return t(r),this.add(()=>r.dispose())},add(t){return e.includes(t)||e.push(t),()=>{let r=e.indexOf(t);if(r>=0)for(let o of e.splice(r,1))o()}},dispose(){for(let t of e.splice(0))t()}};return n}function we(){let[e]=i.useState(j);return i.useEffect(()=>()=>e.dispose(),[e]),e}let A=(e,n)=>{Ee.isServer?i.useEffect(e,n):i.useLayoutEffect(e,n)};function Ze(e){let n=i.useRef(e);return A(()=>{n.current=e},[e]),n}let T=function(e){let n=Ze(e);return $.useCallback((...t)=>n.current(...t),[n])};function Je(e){let n=e.width/2,t=e.height/2;return{top:e.clientY-t,right:e.clientX+n,bottom:e.clientY+t,left:e.clientX-n}}function Qe(e,n){return!(!e||!n||e.right<n.left||e.left>n.right||e.bottom<n.top||e.top>n.bottom)}function et({disabled:e=!1}={}){let n=i.useRef(null),[t,r]=i.useState(!1),o=we(),s=T(()=>{n.current=null,r(!1),o.dispose()}),l=T(a=>{if(o.dispose(),n.current===null){n.current=a.currentTarget,r(!0);{let u=ye(a.currentTarget);o.addEventListener(u,"pointerup",s,!1),o.addEventListener(u,"pointermove",d=>{if(n.current){let c=Je(d);r(Qe(c,n.current.getBoundingClientRect()))}},!1),o.addEventListener(u,"pointercancel",s,!1)}}});return{pressed:t,pressProps:e?{}:{onPointerDown:l,onPointerUp:s,onClick:s}}}function se(...e){return Array.from(new Set(e.flatMap(n=>typeof n=="string"?n.split(" "):[]))).filter(Boolean).join(" ")}function M(e,n,...t){if(e in n){let o=n[e];return typeof o=="function"?o(...t):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(n).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,M),r}var G=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(G||{}),tt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(tt||{});function z({ourProps:e,theirProps:n,slot:t,defaultTag:r,features:o,visible:s=!0,name:l,mergeRefs:a}){a=a??nt;let u=Pe(n,e);if(s)return x(u,t,r,l,a);let d=o??0;if(d&2){let{static:c=!1,...p}=u;if(c)return x(p,t,r,l,a)}if(d&1){let{unmount:c=!0,...p}=u;return M(c?0:1,{0(){return null},1(){return x({...p,hidden:!0,style:{display:"none"}},t,r,l,a)}})}return x(u,t,r,l,a)}function x(e,n={},t,r,o){let{as:s=t,children:l,refName:a="ref",...u}=U(e,["unmount","static"]),d=e.ref!==void 0?{[a]:e.ref}:{},c=typeof l=="function"?l(n):l;"className"in u&&u.className&&typeof u.className=="function"&&(u.className=u.className(n)),u["aria-labelledby"]&&u["aria-labelledby"]===u.id&&(u["aria-labelledby"]=void 0);let p={};if(n){let v=!1,f=[];for(let[b,g]of Object.entries(n))typeof g=="boolean"&&(v=!0),g===!0&&f.push(b.replace(/([A-Z])/g,m=>`-${m.toLowerCase()}`));if(v){p["data-headlessui-state"]=f.join(" ");for(let b of f)p[`data-${b}`]=""}}if(s===i.Fragment&&(Object.keys(F(u)).length>0||Object.keys(F(p)).length>0))if(!i.isValidElement(c)||Array.isArray(c)&&c.length>1){if(Object.keys(F(u)).length>0)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(F(u)).concat(Object.keys(F(p))).map(v=>`  - ${v}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(v=>`  - ${v}`).join(`
`)].join(`
`))}else{let v=c.props,f=v?.className,b=typeof f=="function"?(...E)=>se(f(...E),u.className):se(f,u.className),g=b?{className:b}:{},m=Pe(c.props,F(U(u,["ref"])));for(let E in p)E in m&&delete p[E];return i.cloneElement(c,Object.assign({},m,p,d,{ref:o(c.ref,d.ref)},g))}return i.createElement(s,Object.assign({},U(u,["ref"]),s!==i.Fragment&&d,s!==i.Fragment&&p),c)}function Te(){let e=i.useRef([]),n=i.useCallback(t=>{for(let r of e.current)r!=null&&(typeof r=="function"?r(t):r.current=t)},[]);return(...t)=>{if(!t.every(r=>r==null))return e.current=t,n}}function nt(...e){return e.every(n=>n==null)?void 0:n=>{for(let t of e)t!=null&&(typeof t=="function"?t(n):t.current=n)}}function Pe(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];if(n.disabled||n["aria-disabled"])for(let r in t)/^(on(?:Click|Pointer|Mouse|Key)(?:Down|Up|Press)?)$/.test(r)&&(t[r]=[o=>{var s;return(s=o?.preventDefault)==null?void 0:s.call(o)}]);for(let r in t)Object.assign(n,{[r](o,...s){let l=t[r];for(let a of l){if((o instanceof Event||o?.nativeEvent instanceof Event)&&o.defaultPrevented)return;a(o,...s)}}});return n}function le(...e){if(e.length===0)return{};if(e.length===1)return e[0];let n={},t={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(t[o]!=null||(t[o]=[]),t[o].push(r[o])):n[o]=r[o];for(let r in t)Object.assign(n,{[r](...o){let s=t[r];for(let l of s)l?.(...o)}});return n}function X(e){var n;return Object.assign(i.forwardRef(e),{displayName:(n=e.displayName)!=null?n:e.name})}function F(e){let n=Object.assign({},e);for(let t in n)n[t]===void 0&&delete n[t];return n}function U(e,n=[]){let t=Object.assign({},e);for(let r of n)r in t&&delete t[r];return t}function rt(e){let n=e.parentElement,t=null;for(;n&&!(n instanceof HTMLFieldSetElement);)n instanceof HTMLLegendElement&&(t=n),n=n.parentElement;let r=n?.getAttribute("disabled")==="";return r&&ot(t)?!1:r}function ot(e){if(!e)return!1;let n=e.previousElementSibling;for(;n!==null;){if(n instanceof HTMLLegendElement)return!1;n=n.previousElementSibling}return!0}let Fe=Symbol();function ut(e,n=!0){return Object.assign(e,{[Fe]:n})}function Z(...e){let n=i.useRef(e);i.useEffect(()=>{n.current=e},[e]);let t=T(r=>{for(let o of n.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||r?.[Fe])?void 0:t}var L=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(L||{});let it=i.createContext(()=>{});function at({value:e,children:n}){return $.createElement(it.Provider,{value:e},n)}function ce(e){var n;if(e.type)return e.type;let t=(n=e.as)!=null?n:"button";if(typeof t=="string"&&t.toLowerCase()==="button")return"button"}function st(e,n){let[t,r]=i.useState(()=>ce(e));return A(()=>{r(ce(e))},[e.type,e.as]),A(()=>{t||n.current&&n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&r("button")},[t,n]),t}function lt(e){let n={called:!1};return(...t)=>{if(!n.called)return n.called=!0,e(...t)}}function ct(e=0){let[n,t]=i.useState(e),r=i.useCallback(u=>t(u),[n]),o=i.useCallback(u=>t(d=>d|u),[n]),s=i.useCallback(u=>(n&u)===u,[n]),l=i.useCallback(u=>t(d=>d&~u),[t]),a=i.useCallback(u=>t(d=>d^u),[t]);return{flags:n,setFlag:r,addFlag:o,hasFlag:s,removeFlag:l,toggleFlag:a}}var dt=(e=>(e[e.None=0]="None",e[e.Closed=1]="Closed",e[e.Enter=2]="Enter",e[e.Leave=4]="Leave",e))(dt||{});function ft(e){let n={};for(let t in e)e[t]===!0&&(n[`data-${t}`]="");return n}function pt(e,n,t,r){let[o,s]=i.useState(t),{hasFlag:l,addFlag:a,removeFlag:u}=ct(e&&o?3:0),d=i.useRef(!1),c=i.useRef(!1),p=we();return A(function v(){var f;if(!e)return;t&&s(!0);let b=n.current;return b?((f=void 0)==null||f.call(r,t),vt(b,{inFlight:d,prepare(){c.current?c.current=!1:c.current=d.current,d.current=!0,!c.current&&(t?(a(3),u(4)):(a(4),u(2)))},run(){c.current?t?(u(3),a(4)):(u(4),a(3)):t?u(1):a(1)},done(){var g;c.current&&typeof b.getAnimations=="function"&&b.getAnimations().length>0||(d.current=!1,u(7),t||s(!1),(g=void 0)==null||g.call(r,t))}})):t?(a(3),p.nextFrame(()=>v())):void 0},[e,t,n,p]),e?[o,{closed:l(1),enter:l(2),leave:l(4),transition:l(2)||l(4)}]:[t,{closed:void 0,enter:void 0,leave:void 0,transition:void 0}]}function vt(e,{prepare:n,run:t,done:r,inFlight:o}){let s=j();return gt(e,{prepare:n,inFlight:o}),s.nextFrame(()=>{s.add(bt(e,r)),t()}),s.dispose}function bt(e,n){let t=lt(n),r=j();if(!e)return r.dispose;let{transitionDuration:o,transitionDelay:s}=getComputedStyle(e),[l,a]=[o,s].map(d=>{let[c=0]=d.split(",").filter(Boolean).map(p=>p.includes("ms")?parseFloat(p):parseFloat(p)*1e3).sort((p,v)=>v-p);return c}),u=l+a;if(u!==0){let d=r.group(c=>{let p=c.setTimeout(()=>{t(),c.dispose()},u);c.addEventListener(e,"transitionrun",v=>{v.target===v.currentTarget&&(p(),c.addEventListener(e,"transitioncancel",f=>{f.target===f.currentTarget&&(t(),d())}))})});r.addEventListener(e,"transitionend",c=>{c.target===c.currentTarget&&(t(),r.dispose())})}else t();return r.dispose}function gt(e,{inFlight:n,prepare:t}){if(n!=null&&n.current){t();return}let r=e.style.transition;e.style.transition="none",t(),e.offsetHeight,e.style.transition=r}let B=i.createContext(null);B.displayName="OpenClosedContext";var D=(e=>(e[e.Open=1]="Open",e[e.Closed=2]="Closed",e[e.Closing=4]="Closing",e[e.Opening=8]="Opening",e))(D||{});function mt(){return i.useContext(B)}function ht({value:e,children:n}){return $.createElement(B.Provider,{value:e},n)}function $t({children:e}){return $.createElement(B.Provider,{value:null},e)}var de;let Et=(de=$.startTransition)!=null?de:function(e){e()};var yt=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(yt||{}),wt=(e=>(e[e.ToggleDisclosure=0]="ToggleDisclosure",e[e.CloseDisclosure=1]="CloseDisclosure",e[e.SetButtonId=2]="SetButtonId",e[e.SetPanelId=3]="SetPanelId",e[e.LinkPanel=4]="LinkPanel",e[e.UnlinkPanel=5]="UnlinkPanel",e))(wt||{});let Tt={0:e=>({...e,disclosureState:M(e.disclosureState,{0:1,1:0})}),1:e=>e.disclosureState===1?e:{...e,disclosureState:1},4(e){return e.linkedPanel===!0?e:{...e,linkedPanel:!0}},5(e){return e.linkedPanel===!1?e:{...e,linkedPanel:!1}},2(e,n){return e.buttonId===n.buttonId?e:{...e,buttonId:n.buttonId}},3(e,n){return e.panelId===n.panelId?e:{...e,panelId:n.panelId}}},J=i.createContext(null);J.displayName="DisclosureContext";function Q(e){let n=i.useContext(J);if(n===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Q),t}return n}let ee=i.createContext(null);ee.displayName="DisclosureAPIContext";function Le(e){let n=i.useContext(ee);if(n===null){let t=new Error(`<${e} /> is missing a parent <Disclosure /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(t,Le),t}return n}let te=i.createContext(null);te.displayName="DisclosurePanelContext";function Pt(){return i.useContext(te)}function Ft(e,n){return M(n.type,Tt,e,n)}let Lt=i.Fragment;function St(e,n){let{defaultOpen:t=!1,...r}=e,o=i.useRef(null),s=Z(n,ut(m=>{o.current=m},e.as===void 0||e.as===i.Fragment)),l=i.useRef(null),a=i.useRef(null),u=i.useReducer(Ft,{disclosureState:t?0:1,linkedPanel:!1,buttonRef:a,panelRef:l,buttonId:null,panelId:null}),[{disclosureState:d,buttonId:c},p]=u,v=T(m=>{p({type:1});let E=ye(o);if(!E||!c)return;let S=m?m instanceof HTMLElement?m:m.current instanceof HTMLElement?m.current:E.getElementById(c):E.getElementById(c);S?.focus()}),f=i.useMemo(()=>({close:v}),[v]),b=i.useMemo(()=>({open:d===0,close:v}),[d,v]),g={ref:s};return $.createElement(J.Provider,{value:u},$.createElement(ee.Provider,{value:f},$.createElement(at,{value:v},$.createElement(ht,{value:M(d,{0:D.Open,1:D.Closed})},z({ourProps:g,theirProps:r,slot:b,defaultTag:Lt,name:"Disclosure"})))))}let kt="button";function Ct(e,n){let t=i.useId(),{id:r=`headlessui-disclosure-button-${t}`,disabled:o=!1,autoFocus:s=!1,...l}=e,[a,u]=Q("Disclosure.Button"),d=Pt(),c=d===null?!1:d===a.panelId,p=i.useRef(null),v=Z(p,n,c?null:a.buttonRef),f=Te();i.useEffect(()=>{if(!c)return u({type:2,buttonId:r}),()=>{u({type:2,buttonId:null})}},[r,u,c]);let b=T(y=>{var k;if(c){if(a.disclosureState===1)return;switch(y.key){case L.Space:case L.Enter:y.preventDefault(),y.stopPropagation(),u({type:0}),(k=a.buttonRef.current)==null||k.focus();break}}else switch(y.key){case L.Space:case L.Enter:y.preventDefault(),y.stopPropagation(),u({type:0});break}}),g=T(y=>{switch(y.key){case L.Space:y.preventDefault();break}}),m=T(y=>{var k;rt(y.currentTarget)||o||(c?(u({type:0}),(k=a.buttonRef.current)==null||k.focus()):u({type:0}))}),{isFocusVisible:E,focusProps:S}=qe({autoFocus:s}),{isHovered:ne,hoverProps:re}=_e({isDisabled:o}),{pressed:oe,pressProps:ue}=et({disabled:o}),Se=i.useMemo(()=>({open:a.disclosureState===0,hover:ne,active:oe,disabled:o,focus:E,autofocus:s}),[a,ne,oe,E,o,s]),ie=st(e,p),ke=le(c?{ref:v,type:ie,disabled:o||void 0,autoFocus:s,onKeyDown:b,onClick:m}:{ref:v,id:r,type:ie,"aria-expanded":a.disclosureState===0,"aria-controls":a.linkedPanel?a.panelId:void 0,disabled:o||void 0,autoFocus:s,onKeyDown:b,onKeyUp:g,onClick:m},S,re,ue);return z({mergeRefs:f,ourProps:ke,theirProps:l,slot:Se,defaultTag:kt,name:"Disclosure.Button"})}let Dt="div",Ht=G.RenderStrategy|G.Static;function It(e,n){let t=i.useId(),{id:r=`headlessui-disclosure-panel-${t}`,transition:o=!1,...s}=e,[l,a]=Q("Disclosure.Panel"),{close:u}=Le("Disclosure.Panel"),d=Te(),c=Z(n,l.panelRef,m=>{Et(()=>a({type:m?4:5}))});i.useEffect(()=>(a({type:3,panelId:r}),()=>{a({type:3,panelId:null})}),[r,a]);let p=mt(),[v,f]=pt(o,l.panelRef,p!==null?(p&D.Open)===D.Open:l.disclosureState===0),b=i.useMemo(()=>({open:l.disclosureState===0,close:u}),[l.disclosureState,u]),g={ref:c,id:r,...ft(f)};return $.createElement($t,null,$.createElement(te.Provider,{value:l.panelId},z({mergeRefs:d,ourProps:g,theirProps:s,slot:b,defaultTag:Dt,features:Ht,visible:v,name:"Disclosure.Panel"})))}let Mt=X(St),xt=X(Ct),Ot=X(It),jt=Object.assign(Mt,{Button:xt,Panel:Ot});export{xt as C,Ot as I,jt as W};
