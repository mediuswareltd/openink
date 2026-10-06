(()=>{var Mt=window,xt=Mt.ShadowRoot&&(Mt.ShadyCSS===void 0||Mt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,ei=Symbol(),as=new WeakMap,qe=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==ei)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(xt&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=as.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&as.set(t,e))}return e}toString(){return this.cssText}},ls=n=>new qe(typeof n=="string"?n:n+"",void 0,ei),M=(n,...e)=>{let t=n.length===1?n[0]:e.reduce(((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1]),n[0]);return new qe(t,n,ei)},ti=(n,e)=>{xt?n.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((t=>{let i=document.createElement("style"),s=Mt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}))},kt=xt?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return ls(t)})(n):n;var ii,_t=window,hs=_t.trustedTypes,fo=hs?hs.emptyScript:"",cs=_t.reactiveElementPolyfillSupport,oi={toAttribute(n,e){switch(e){case Boolean:n=n?fo:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},ds=(n,e)=>e!==n&&(e==e||n==n),si={attribute:!0,type:String,converter:oi,reflect:!1,hasChanged:ds},ni="finalized",re=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach(((t,i)=>{let s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))})),e}static createProperty(e,t=si){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){let o=this[e];this[t]=s,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||si}static finalize(){if(this.hasOwnProperty(ni))return!1;this[ni]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(kt(s))}else e!==void 0&&t.push(kt(e));return t}static _$Ep(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((t=>t(this)))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ti(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=si){var s;let o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){let r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:oi).toAttribute(t,i.type);this._$El=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(e,t){var i;let s=this.constructor,o=s._$Ev.get(e);if(o!==void 0&&this._$El!==o){let r=s.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:oi;this._$El=o,this[o]=a.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||ds)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((s,o)=>this[o]=s)),this._$Ei=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach((s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)})),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach((i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};re[ni]=!0,re.elementProperties=new Map,re.elementStyles=[],re.shadowRootOptions={mode:"open"},cs?.({ReactiveElement:re}),((ii=_t.reactiveElementVersions)!==null&&ii!==void 0?ii:_t.reactiveElementVersions=[]).push("1.6.3");var ri,St=window,Oe=St.trustedTypes,ps=Oe?Oe.createPolicy("lit-html",{createHTML:n=>n}):void 0,li="$lit$",ce=`lit$${(Math.random()+"").slice(9)}$`,ys="?"+ce,mo=`<${ys}>`,ve=document,Fe=()=>ve.createComment(""),Ge=n=>n===null||typeof n!="object"&&typeof n!="function",ws=Array.isArray,go=n=>ws(n)||typeof n?.[Symbol.iterator]=="function",ai=`[ 	
\f\r]`,Ue=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,us=/-->/g,fs=/>/g,me=RegExp(`>|${ai}(?:([^\\s"'>=/]+)(${ai}*=${ai}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ms=/'/g,gs=/"/g,Ms=/^(?:script|style|textarea|title)$/i,xs=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),x=xs(1),Go=xs(2),be=Symbol.for("lit-noChange"),j=Symbol.for("lit-nothing"),vs=new WeakMap,ge=ve.createTreeWalker(ve,129,null,!1);function ks(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ps!==void 0?ps.createHTML(e):e}var vo=(n,e)=>{let t=n.length-1,i=[],s,o=e===2?"<svg>":"",r=Ue;for(let a=0;a<t;a++){let l=n[a],h,c,f=-1,d=0;for(;d<l.length&&(r.lastIndex=d,c=r.exec(l),c!==null);)d=r.lastIndex,r===Ue?c[1]==="!--"?r=us:c[1]!==void 0?r=fs:c[2]!==void 0?(Ms.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=me):c[3]!==void 0&&(r=me):r===me?c[0]===">"?(r=s??Ue,f=-1):c[1]===void 0?f=-2:(f=r.lastIndex-c[2].length,h=c[1],r=c[3]===void 0?me:c[3]==='"'?gs:ms):r===gs||r===ms?r=me:r===us||r===fs?r=Ue:(r=me,s=void 0);let u=r===me&&n[a+1].startsWith("/>")?" ":"";o+=r===Ue?l+mo:f>=0?(i.push(h),l.slice(0,f)+li+l.slice(f)+ce+u):l+ce+(f===-2?(i.push(void 0),a):u)}return[ks(n,o+(n[t]||"<?>")+(e===2?"</svg>":"")),i]},Ze=class n{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0,a=e.length-1,l=this.parts,[h,c]=vo(e,t);if(this.el=n.createElement(h,i),ge.currentNode=this.el.content,t===2){let f=this.el.content,d=f.firstChild;d.remove(),f.append(...d.childNodes)}for(;(s=ge.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){let f=[];for(let d of s.getAttributeNames())if(d.endsWith(li)||d.startsWith(ce)){let u=c[r++];if(f.push(d),u!==void 0){let p=s.getAttribute(u.toLowerCase()+li).split(ce),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:g[2],strings:p,ctor:g[1]==="."?ci:g[1]==="?"?di:g[1]==="@"?pi:Ae})}else l.push({type:6,index:o})}for(let d of f)s.removeAttribute(d)}if(Ms.test(s.tagName)){let f=s.textContent.split(ce),d=f.length-1;if(d>0){s.textContent=Oe?Oe.emptyScript:"";for(let u=0;u<d;u++)s.append(f[u],Fe()),ge.nextNode(),l.push({type:2,index:++o});s.append(f[d],Fe())}}}else if(s.nodeType===8)if(s.data===ys)l.push({type:2,index:o});else{let f=-1;for(;(f=s.data.indexOf(ce,f+1))!==-1;)l.push({type:7,index:o}),f+=ce.length-1}o++}}static createElement(e,t){let i=ve.createElement("template");return i.innerHTML=e,i}};function Ee(n,e,t=n,i){var s,o,r,a;if(e===be)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl,h=Ge(e)?void 0:e._$litDirective$;return l?.constructor!==h&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((r=(a=t)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Ee(n,l._$AS(n,e.values),l,i)),e}var hi=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:s}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:ve).importNode(i,!0);ge.currentNode=o;let r=ge.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new Qe(r,r.nextSibling,this,e):h.type===1?c=new h.ctor(r,h.name,h.strings,this,e):h.type===6&&(c=new ui(r,this,e)),this._$AV.push(c),h=s[++l]}a!==h?.index&&(r=ge.nextNode(),a++)}return ge.currentNode=ve,o}v(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Qe=class n{constructor(e,t,i,s){var o;this.type=2,this._$AH=j,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Ee(this,e,t),Ge(e)?e===j||e==null||e===""?(this._$AH!==j&&this._$AR(),this._$AH=j):e!==this._$AH&&e!==be&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):go(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==j&&Ge(this._$AH)?this._$AA.nextSibling.data=e:this.$(ve.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ze.createElement(ks(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(i);else{let r=new hi(o,this),a=r.u(this.options);r.v(i),this.$(a),this._$AH=r}}_$AC(e){let t=vs.get(e.strings);return t===void 0&&vs.set(e.strings,t=new Ze(e)),t}T(e){ws(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let o of e)s===t.length?t.push(i=new n(this.k(Fe()),this.k(Fe()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ae=class{constructor(e,t,i,s,o){this.type=1,this._$AH=j,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=j}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){let o=this.strings,r=!1;if(o===void 0)e=Ee(this,e,t,0),r=!Ge(e)||e!==this._$AH&&e!==be,r&&(this._$AH=e);else{let a=e,l,h;for(e=o[0],l=0;l<o.length-1;l++)h=Ee(this,a[i+l],t,l),h===be&&(h=this._$AH[l]),r||(r=!Ge(h)||h!==this._$AH[l]),h===j?e=j:e!==j&&(e+=(h??"")+o[l+1]),this._$AH[l]=h}r&&!s&&this.j(e)}j(e){e===j?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},ci=class extends Ae{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===j?void 0:e}},bo=Oe?Oe.emptyScript:"",di=class extends Ae{constructor(){super(...arguments),this.type=4}j(e){e&&e!==j?this.element.setAttribute(this.name,bo):this.element.removeAttribute(this.name)}},pi=class extends Ae{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=Ee(this,e,t,0))!==null&&i!==void 0?i:j)===be)return;let s=this._$AH,o=e===j&&s!==j||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==j&&(s===j||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},ui=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ee(this,e)}};var bs=St.litHtmlPolyfillSupport;bs?.(Ze,Qe),((ri=St.litHtmlVersions)!==null&&ri!==void 0?ri:St.litHtmlVersions=[]).push("2.8.0");var _s=(n,e,t)=>{var i,s;let o=(i=t?.renderBefore)!==null&&i!==void 0?i:e,r=o._$litPart$;if(r===void 0){let a=(s=t?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new Qe(e.insertBefore(Fe(),a),a,void 0,t??{})}return r._$AI(n),r};var fi,mi;var D=class extends re{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=_s(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return be}};D.finalized=!0,D._$litElement$=!0,(fi=globalThis.litElementHydrateSupport)===null||fi===void 0||fi.call(globalThis,{LitElement:D});var Ss=globalThis.litElementPolyfillSupport;Ss?.({LitElement:D});((mi=globalThis.litElementVersions)!==null&&mi!==void 0?mi:globalThis.litElementVersions=[]).push("3.3.3");var k=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{let{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(t,r)}}})(n,e);var yo=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},wo=(n,e,t)=>{e.constructor.createProperty(t,n)};function m(n){return(e,t)=>t!==void 0?wo(n,e,t):yo(n,e)}function $s(n){return m({...n,state:!0})}var ye=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){let o=(s=t.originalKey)!==null&&s!==void 0?s:t.key,r=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:{...t,key:o};return n!=null&&(r.finisher=function(a){n(a,o)}),r}{let o=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n?.(o,i)}};function R(n,e){return ye({descriptor:t=>{let i={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){let s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var o,r;return this[s]===void 0&&(this[s]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&r!==void 0?r:null),this[s]}}return i}})}var gi,Mn=((gi=window.HTMLSlotElement)===null||gi===void 0?void 0:gi.prototype.assignedElements)!=null?(n,e)=>n.assignedElements(e):(n,e)=>n.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));var Mo=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},xo=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},$=M`
:host {
  opacity: 0;
}
:host(.wired-rendered) {
  opacity: 1;
}
#overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
}
svg {
  display: block;
}
path {
  stroke: currentColor;
  stroke-width: 0.7;
  fill: transparent;
}
.hidden {
  display: none !important;
}
`,S=class extends D{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){let t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}fire(e,t){Ke(this,e,t)}};Mo([R("svg"),xo("design:type",SVGSVGElement)],S.prototype,"svg",void 0);function Rs(){return Math.floor(Math.random()*2**31)}function Ke(n,e,t){n.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:t}))}function $t(n,e,t){if(n&&n.length){let[i,s]=e,o=Math.PI/180*t,r=Math.cos(o),a=Math.sin(o);n.forEach(l=>{let[h,c]=l;l[0]=(h-i)*r-(c-s)*a+i,l[1]=(h-i)*a+(c-s)*r+s})}}function Os(n,e,t){let i=[];n.forEach(s=>i.push(...s)),$t(i,e,t)}function ae(n){let e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Es(n,e,t,i){let s=e[1]-n[1],o=n[0]-e[0],r=s*n[0]+o*n[1],a=i[1]-t[1],l=t[0]-i[0],h=a*t[0]+l*t[1],c=s*l-a*o;return c?[(l*r-o*h)/c,(s*h-a*r)/c]:null}function Rt(n,e,t){let i=n.length;if(i<3)return!1;let s=[Number.MAX_SAFE_INTEGER,t],o=[e,t],r=0;for(let a=0;a<i;a++){let l=n[a],h=n[(a+1)%i];if(vi(l,h,o,s)){if(Xe(l,o,h)===0)return Ye(l,o,h);r++}}return r%2===1}function Ye(n,e,t){return e[0]<=Math.max(n[0],t[0])&&e[0]>=Math.min(n[0],t[0])&&e[1]<=Math.max(n[1],t[1])&&e[1]>=Math.min(n[1],t[1])}function Xe(n,e,t){let i=(e[1]-n[1])*(t[0]-e[0])-(e[0]-n[0])*(t[1]-e[1]);return i===0?0:i>0?1:2}function vi(n,e,t,i){let s=Xe(n,e,t),o=Xe(n,e,i),r=Xe(t,i,n),a=Xe(t,i,e);return!!(s!==o&&r!==a||s===0&&Ye(n,t,e)||o===0&&Ye(n,i,e)||r===0&&Ye(t,n,i)||a===0&&Ye(t,e,i))}function Je(n,e){let t=[0,0],i=Math.round(e.hachureAngle+90);i&&$t(n,t,i);let s=ko(n,e);return i&&($t(n,t,-i),Os(s,t,-i)),s}function ko(n,e){let t=[...n];t[0].join(",")!==t[t.length-1].join(",")&&t.push([t[0][0],t[0][1]]);let i=[];if(t&&t.length>2){let s=e.hachureGap;s<0&&(s=e.strokeWidth*4),s=Math.max(s,.1);let o=[];for(let l=0;l<t.length-1;l++){let h=t[l],c=t[l+1];if(h[1]!==c[1]){let f=Math.min(h[1],c[1]);o.push({ymin:f,ymax:Math.max(h[1],c[1]),x:f===h[1]?h[0]:c[0],islope:(c[0]-h[0])/(c[1]-h[1])})}}if(o.sort((l,h)=>l.ymin<h.ymin?-1:l.ymin>h.ymin?1:l.x<h.x?-1:l.x>h.x?1:l.ymax===h.ymax?0:(l.ymax-h.ymax)/Math.abs(l.ymax-h.ymax)),!o.length)return i;let r=[],a=o[0].ymin;for(;r.length||o.length;){if(o.length){let l=-1;for(let c=0;c<o.length&&!(o[c].ymin>a);c++)l=c;o.splice(0,l+1).forEach(c=>{r.push({s:a,edge:c})})}if(r=r.filter(l=>!(l.edge.ymax<=a)),r.sort((l,h)=>l.edge.x===h.edge.x?0:(l.edge.x-h.edge.x)/Math.abs(l.edge.x-h.edge.x)),r.length>1)for(let l=0;l<r.length;l=l+2){let h=l+1;if(h>=r.length)break;let c=r[l].edge,f=r[h].edge;i.push([[Math.round(c.x),a],[Math.round(f.x),a]])}a+=s,r.forEach(l=>{l.edge.x=l.edge.x+s*l.edge.islope})}}return i}var Ce=class{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,i=!1){let s=Je(e,t);if(i){let r=this.connectingLines(e,s);s=s.concat(r)}return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){let i=[];for(let s of e)i.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],t));return i}connectingLines(e,t){let i=[];if(t.length>1)for(let s=1;s<t.length;s++){let o=t[s-1];if(ae(o)<3)continue;let a=[t[s][0],o[1]];if(ae(a)>3){let l=this.splitOnIntersections(e,a);i.push(...l)}}return i}midPointInPolygon(e,t){return Rt(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){let i=Math.max(5,ae(t)*.1),s=[];for(let o=0;o<e.length;o++){let r=e[o],a=e[(o+1)%e.length];if(vi(r,a,...t)){let l=Es(r,a,t[0],t[1]);if(l){let h=ae([l,t[0]]),c=ae([l,t[1]]);h>i&&c>i&&s.push({point:l,distance:h})}}}if(s.length>1){let o=s.sort((l,h)=>l.distance-h.distance).map(l=>l.point);if(Rt(e,...t[0])||o.shift(),Rt(e,...t[1])||o.pop(),o.length<=1)return this.midPointInPolygon(e,t)?[t]:[];let r=[t[0],...o,t[1]],a=[];for(let l=0;l<r.length-1;l+=2){let h=[r[l],r[l+1]];this.midPointInPolygon(e,h)&&a.push(h)}return a}else return this.midPointInPolygon(e,t)?[t]:[]}};var et=class extends Ce{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}};var Ot=class{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}};function yi(n,e,t,i,s){return{type:"path",ops:tt(n,e,t,i,s)}}function Ro(n,e,t){let i=(n||[]).length;if(i>2){let s=[];for(let o=0;o<i-1;o++)s.push(...tt(n[o][0],n[o][1],n[o+1][0],n[o+1][1],t));return e&&s.push(...tt(n[i-1][0],n[i-1][1],n[0][0],n[0][1],t)),{type:"path",ops:s}}else if(i===2)return yi(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function wi(n,e){return Ro(n,!0,e)}function zs(n,e,t,i,s){let o=[[n,e],[n+t,e],[n+t,e+i],[n,e+i]];return wi(o,s)}function Mi(n,e,t,i,s){let o=xi(t,i,s);return Oo(n,e,s,o).opset}function xi(n,e,t){let i=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),s=Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*i),o=Math.PI*2/s,r=Math.abs(n/2),a=Math.abs(e/2),l=1-t.curveFitting;return r+=z(r*l,t),a+=z(a*l,t),{increment:o,rx:r,ry:a}}function Oo(n,e,t,i){let[s,o]=Ps(i.increment,n,e,i.rx,i.ry,1,i.increment*bi(.1,bi(.4,1,t),t),t),r=Cs(s,null,t);if(!t.disableMultiStroke){let[a]=Ps(i.increment,n,e,i.rx,i.ry,1.5,0,t),l=Cs(a,null,t);r=r.concat(l)}return{estimatedPoints:o,opset:{type:"path",ops:r}}}function Ls(n,e,t,i,s){return tt(n,e,t,i,s,!0)}function Is(n){return n.randomizer||(n.randomizer=new Ot(n.seed||0)),n.randomizer.next()}function bi(n,e,t,i=1){return t.roughness*i*(Is(t)*(e-n)+n)}function z(n,e,t=1){return bi(-n,n,e,t)}function tt(n,e,t,i,s,o=!1){let r=o?s.disableMultiStrokeFill:s.disableMultiStroke,a=As(n,e,t,i,s,!0,!1);if(r)return a;let l=As(n,e,t,i,s,!0,!0);return a.concat(l)}function As(n,e,t,i,s,o,r){let a=Math.pow(n-t,2)+Math.pow(e-i,2),l=Math.sqrt(a),h=1;l<200?h=1:l>500?h=.4:h=-.0016668*l+1.233334;let c=s.maxRandomnessOffset||0;c*c*100>a&&(c=l/10);let f=c/2,d=.2+Is(s)*.2,u=s.bowing*s.maxRandomnessOffset*(i-e)/200,p=s.bowing*s.maxRandomnessOffset*(n-t)/200;u=z(u,s,h),p=z(p,s,h);let g=[],v=()=>z(f,s,h),b=()=>z(c,s,h);return o&&(r?g.push({op:"move",data:[n+v(),e+v()]}):g.push({op:"move",data:[n+z(c,s,h),e+z(c,s,h)]})),r?g.push({op:"bcurveTo",data:[u+n+(t-n)*d+v(),p+e+(i-e)*d+v(),u+n+2*(t-n)*d+v(),p+e+2*(i-e)*d+v(),t+v(),i+v()]}):g.push({op:"bcurveTo",data:[u+n+(t-n)*d+b(),p+e+(i-e)*d+b(),u+n+2*(t-n)*d+b(),p+e+2*(i-e)*d+b(),t+b(),i+b()]}),g}function Cs(n,e,t){let i=n.length,s=[];if(i>3){let o=[],r=1-t.curveTightness;s.push({op:"move",data:[n[1][0],n[1][1]]});for(let a=1;a+2<i;a++){let l=n[a];o[0]=[l[0],l[1]],o[1]=[l[0]+(r*n[a+1][0]-r*n[a-1][0])/6,l[1]+(r*n[a+1][1]-r*n[a-1][1])/6],o[2]=[n[a+1][0]+(r*n[a][0]-r*n[a+2][0])/6,n[a+1][1]+(r*n[a][1]-r*n[a+2][1])/6],o[3]=[n[a+1][0],n[a+1][1]],s.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(e&&e.length===2){let a=t.maxRandomnessOffset;s.push({op:"lineTo",data:[e[0]+z(a,t),e[1]+z(a,t)]})}}else i===3?(s.push({op:"move",data:[n[1][0],n[1][1]]}),s.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):i===2&&s.push(...tt(n[0][0],n[0][1],n[1][0],n[1][1],t));return s}function Ps(n,e,t,i,s,o,r,a){let l=[],h=[],c=z(.5,a)-Math.PI/2;h.push([z(o,a)+e+.9*i*Math.cos(c-n),z(o,a)+t+.9*s*Math.sin(c-n)]);for(let f=c;f<Math.PI*2+c-.01;f=f+n){let d=[z(o,a)+e+i*Math.cos(f),z(o,a)+t+s*Math.sin(f)];l.push(d),h.push(d)}return h.push([z(o,a)+e+i*Math.cos(c+Math.PI*2+r*.5),z(o,a)+t+s*Math.sin(c+Math.PI*2+r*.5)]),h.push([z(o,a)+e+.98*i*Math.cos(c+r),z(o,a)+t+.98*s*Math.sin(c+r)]),h.push([z(o,a)+e+.9*i*Math.cos(c+r*.5),z(o,a)+t+.9*s*Math.sin(c+r*.5)]),[h,l]}var Eo={randOffset(n,e){return n},randOffsetWithRange(n,e,t){return(n+e)/2},ellipse(n,e,t,i,s){return Mi(n,e,t,i,s)},doubleLineOps(n,e,t,i,s){return Ls(n,e,t,i,s)}};function Pe(n){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:n}}function Ao(n,e){let t="";for(let i of n.ops){let s=i.data;switch(i.op){case"move":if(e&&t)break;t+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `;break}}return t.trim()}function oe(n,e){let t=document.createElementNS("http://www.w3.org/2000/svg",n);if(e)for(let i in e)t.setAttributeNS(null,i,e[i]);return t}function it(n,e,t=!1){let i=oe("path",{d:Ao(n,t)});return e&&e.appendChild(i),i}function C(n,e,t,i,s,o){return it(zs(e+2,t+2,i-4,s-4,Pe(o)),n)}function O(n,e,t,i,s,o){return it(yi(e,t,i,s,Pe(o)),n)}function js(n,e,t){return it(wi(e,Pe(t)),n,!0)}function F(n,e,t,i,s,o){return i=Math.max(i>10?i-4:i-1,1),s=Math.max(s>10?s-4:s-1,1),it(Mi(e,t,i,s,Pe(o)),n)}function we(n,e){let i=new et(Eo).fillPolygon(n,Pe(e));return it(i,null)}function ze(n,e,t,i,s){let o=Pe(s),r=xi(t,i,o),a=[],l=0;for(;l<=Math.PI*2;)a.push([n+r.rx*Math.cos(l),e+r.ry*Math.sin(l)]),l+=r.increment;return we(a,s)}var Et=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},At=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},st=class extends S{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[$,M`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
      `]}render(){return x`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){let e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}return this.lastSize}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};C(e,0,0,s.width,s.height,this.seed);for(let o=1;o<i;o++)O(e,o*2,s.height+o*2,s.width+o*2,s.height+o*2,this.seed).style.opacity=`${(75-o*10)/100}`,O(e,s.width+o*2,s.height+o*2,s.width+o*2,o*2,this.seed).style.opacity=`${(75-o*10)/100}`,O(e,o*2,s.height+o*2,s.width+o*2,s.height+o*2,this.seed).style.opacity=`${(75-o*10)/100}`,O(e,s.width+o*2,s.height+o*2,s.width+o*2,o*2,this.seed).style.opacity=`${(75-o*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};Et([m({type:Number}),At("design:type",Object)],st.prototype,"elevation",void 0);Et([m({type:Boolean,reflect:!0}),At("design:type",Object)],st.prototype,"disabled",void 0);Et([R("button"),At("design:type",HTMLButtonElement)],st.prototype,"button",void 0);st=Et([k("wired-button"),At("design:paramtypes",[])],st);var ki=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},_i=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Le=class extends S{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[$,M`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
        path.cardFill {
          stroke-width: 3.5;
          stroke: var(--wired-card-background-fill);
        }
        path {
          stroke: var(--wired-card-background-fill, currentColor);
        }
      `]}render(){return x`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){let t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){let e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};if(this.fill&&this.fill.trim()){let o=we([[2,2],[s.width-4,2],[s.width-2,s.height-4],[2,s.height-4]],this.seed);o.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(o)}C(e,2,2,s.width-4,s.height-4,this.seed);for(let o=1;o<i;o++)O(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`}};ki([m({type:Number}),_i("design:type",Object)],Le.prototype,"elevation",void 0);ki([m({type:String}),_i("design:type",String)],Le.prototype,"fill",void 0);Le=ki([k("wired-card"),_i("design:paramtypes",[])],Le);var ot=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ct=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Ie=class extends S{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[$,M`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-checkbox-icon-color, currentColor);
        stroke-width: var(--wired-checkbox-default-swidth, 0.7);
      }
      g path {
        stroke-width: 2.5;
      }
      #container.focused {
        --wired-checkbox-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return x`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){C(e,0,0,t[0],t[1],this.seed),this.svgCheck=oe("g"),e.appendChild(this.svgCheck),O(this.svgCheck,t[0]*.3,t[1]*.4,t[0]*.5,t[1]*.7,this.seed),O(this.svgCheck,t[0]*.5,t[1]*.7,t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};ot([m({type:Boolean}),Ct("design:type",Object)],Ie.prototype,"checked",void 0);ot([m({type:Boolean,reflect:!0}),Ct("design:type",Object)],Ie.prototype,"disabled",void 0);ot([$s(),Ct("design:type",Object)],Ie.prototype,"focused",void 0);ot([R("input"),Ct("design:type",HTMLInputElement)],Ie.prototype,"input",void 0);Ie=ot([k("wired-checkbox")],Ie);var Pt=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Si=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},nt=class extends S{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[$,M`
      :host {
        display: inline-block;
        font-size: 14px;
        text-align: left;
      }
      button {
        cursor: pointer;
        outline: none;
        overflow: hidden;
        color: inherit;
        user-select: none;
        position: relative;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        letter-spacing: 1.25px;
        padding: 1px 10px;
        min-height: 36px;
        text-transform: inherit;
        background: none;
        border: none;
        transition: background-color 0.3s ease, color 0.3s ease;
        width: 100%;
        box-sizing: border-box;
        white-space: nowrap;
      }
      button.selected {
        color: var(--wired-item-selected-color, #fff);
      }
      button::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: currentColor;
        opacity: 0;
      }
      button span {
        display: inline-block;
        transition: transform 0.2s ease;
        position: relative;
      }
      button:active span {
        transform: scale(1.02);
      }
      #overlay {
        display: none;
      }
      button.selected #overlay {
        display: block;
      }
      svg path {
        stroke: var(--wired-item-selected-bg, #000);
        stroke-width: 2.75;
        fill: transparent;
        transition: transform 0.05s ease;
      }
      @media (hover: hover) {
        button:hover::before {
          opacity: 0.05;
        }
      }
      `]}render(){return x`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){let i=we([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(i)}};Pt([m(),Si("design:type",Object)],nt.prototype,"value",void 0);Pt([m(),Si("design:type",Object)],nt.prototype,"name",void 0);Pt([m({type:Boolean}),Si("design:type",Object)],nt.prototype,"selected",void 0);nt=Pt([k("wired-item")],nt);var je=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},rt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Me=class extends D{constructor(){super(...arguments),this.disabled=!1,this.seed=Rs(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return M`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        outline: none;
        opacity: 0;
      }
    
      :host(.wired-disabled) {
        opacity: 0.5 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.02);
      }
      
      :host(.wired-rendered) {
        opacity: 1;
      }
  
      :host(:focus) path {
        stroke-width: 1.5;
      }
    
      #container {
        white-space: nowrap;
        position: relative;
      }
    
      .inline {
        display: inline-block;
        vertical-align: top
      }
    
      #textPanel {
        min-width: 90px;
        min-height: 18px;
        padding: 8px;
      }
    
      #dropPanel {
        width: 34px;
        cursor: pointer;
      }
    
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
    
      svg {
        display: block;
      }
    
      path {
        stroke: currentColor;
        stroke-width: 0.7;
        fill: transparent;
      }
    
      #card {
        display: block;
        position: absolute;
        background: var(--wired-combo-popup-bg, white);
        z-index: 1;
        box-shadow: 1px 5px 15px -6px rgba(0, 0, 0, 0.8);
        padding: 8px;
      }
  
      ::slotted(wired-item) {
        display: block;
      }
    `}render(){return x`
    <div id="container" @click="${this.onCombo}">
      <div id="textPanel" class="inline">
        <span>${this.value&&this.value.text}</span>
      </div>
      <div id="dropPanel" class="inline"></div>
      <div class="overlay">
        <svg></svg>
      </div>
    </div>
    <wired-card id="card" tabindex="-1" role="listbox" @mousedown="${this.onItemClick}" @touchstart="${this.onItemClick}" style="display: none;">
      <slot id="slot"></slot>
    </wired-card>
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();let t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);let i=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${i.width}`),t.setAttribute("height",`${i.height}`);let s=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=s.height+"px",C(t,0,0,s.width,s.height,this.seed);let o=s.width-4;C(t,o,0,34,s.height,this.seed);let r=Math.max(0,Math.abs((s.height-24)/2)),a=js(t,[[o+8,5+r],[o+26,5+r],[o+17,r+Math.min(s.height,18)]],this.seed);if(a.style.fill="currentColor",a.style.pointerEvents=this.disabled?"none":"auto",a.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];let l=this.shadowRoot.getElementById("slot").assignedNodes();if(l&&l.length)for(let h=0;h<l.length;h++){let c=l[h];c.tagName==="WIRED-ITEM"&&(c.setAttribute("role","option"),this.itemNodes.push(c))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));let t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let i=null;for(let s=0;s<t.length;s++){let o=t[s];if(o.tagName==="WIRED-ITEM"){let r=o.value||o.getAttribute("value")||"";if(this.selected&&r===this.selected){i=o;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(i=>i.nodeType===Node.ELEMENT_NODE).forEach(i=>{let s=i;s.requestUpdate&&s.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Ke(this,"selected",{selected:this.selected})}selectPrevious(){let e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){let e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};je([m({type:Object}),rt("design:type",Object)],Me.prototype,"value",void 0);je([m({type:String,reflect:!0}),rt("design:type",String)],Me.prototype,"selected",void 0);je([m({type:Boolean,reflect:!0}),rt("design:type",Object)],Me.prototype,"disabled",void 0);je([R("svg"),rt("design:type",SVGSVGElement)],Me.prototype,"svg",void 0);je([R("#card"),rt("design:type",HTMLDivElement)],Me.prototype,"card",void 0);Me=je([k("wired-combo")],Me);var zt=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},$i=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},at=class extends D{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return M`
      #container {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
        z-index: var(--wired-dialog-z-index, 100);
      }
      #container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0,0,0,0.4);
        opacity: 0;
        transition: opacity 0.5s ease;
      }
      #overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0;
        transform: translateY(150px);
        transition: transform 0.5s ease, opacity 0.5s ease;
      }
      .layout.vertical {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      }
      .flex {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      }
      wired-card {
        display: inline-block;
        background: white;
        text-align: left;
      }

      :host([open]) #container {
        pointer-events: auto;
      }
      :host([open]) #container::before {
        opacity: 1;
      }
      :host([open]) #overlay {
        opacity: 1;
        transform: none;
      }
    `}render(){return x`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};zt([m({type:Number}),$i("design:type",Object)],at.prototype,"elevation",void 0);zt([m({type:Boolean,reflect:!0}),$i("design:type",Object)],at.prototype,"open",void 0);zt([R("wired-card"),$i("design:type",Le)],at.prototype,"card",void 0);at=zt([k("wired-dialog")],at);var Ts=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Co=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Ri=class extends S{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[$,M`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return x`<svg></svg>`}canvasSize(){let e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,t*6]}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5);for(let s=0;s<i;s++)O(e,0,s*6+3,t[0],s*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};Ts([m({type:Number}),Co("design:type",Object)],Ri.prototype,"elevation",void 0);Ri=Ts([k("wired-divider")],Ri);var Oi=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Bs=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Lt=class extends S{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[$,M`
        :host {
          display: inline-block;
          font-size: 14px;
          color: #fff;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 16px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
          transition: transform 0.2s ease, opacity 0.2s ease;
          opacity: 0.85;
        }
        path {
          stroke: var(--wired-fab-bg-color, #018786);
          stroke-width: 3;
          fill: transparent;
        }

        button:focus ::slotted(*) {
          opacity: 1;
        }
        button:active ::slotted(*) {
          opacity: 1;
          transform: scale(1.15);
        }
      `]}render(){return x`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){let e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){let i=Math.min(t[0],t[1]),s=ze(i/2,i/2,i,i,this.seed);e.appendChild(s)}};Oi([m({type:Boolean,reflect:!0}),Bs("design:type",Object)],Lt.prototype,"disabled",void 0);Oi([R("button"),Bs("design:type",HTMLButtonElement)],Lt.prototype,"button",void 0);Lt=Oi([k("wired-fab")],Lt);var Ei=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Hs=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},It=class extends S{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[$,M`
        :host {
          display: inline-block;
          font-size: 14px;
        }
        path {
          transition: transform 0.05s ease;
        }
        button {
          position: relative;
          user-select: none;
          border: none;
          background: none;
          font-family: inherit;
          font-size: inherit;
          cursor: pointer;
          letter-spacing: 1.25px;
          text-transform: uppercase;
          text-align: center;
          padding: 10px;
          color: inherit;
          outline: none;
          border-radius: 50%;
        }
        button[disabled] {
          opacity: 0.6 !important;
          background: rgba(0, 0, 0, 0.07);
          cursor: default;
          pointer-events: none;
        }
        button:active path {
          transform: scale(0.97) translate(1.5%, 1.5%);
        }
        button:focus path {
          stroke-width: 1.5;
        }
        button::-moz-focus-inner {
          border: 0;
        }
        button ::slotted(*) {
          position: relative;
          font-size: var(--wired-icon-size, 24px);
        }
      `]}render(){return x`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){let e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){let i=Math.min(t[0],t[1]);e.setAttribute("width",`${i}`),e.setAttribute("height",`${i}`),F(e,i/2,i/2,i,i,this.seed)}};Ei([m({type:Boolean,reflect:!0}),Hs("design:type",Object)],It.prototype,"disabled",void 0);Ei([R("button"),Hs("design:type",HTMLButtonElement)],It.prototype,"button",void 0);It=Ei([k("wired-icon-button")],It);var Ai=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ci=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Po="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",jt=class extends S{constructor(){super(),this.elevation=1,this.src=Po,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[$,M`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px;
        }
        img {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
      `]}render(){return x`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){let e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};C(e,2,2,s.width-4,s.height-4,this.seed);for(let o=1;o<i;o++)O(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,O(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`}};Ai([m({type:Number}),Ci("design:type",Object)],jt.prototype,"elevation",void 0);Ai([m({type:String}),Ci("design:type",String)],jt.prototype,"src",void 0);jt=Ai([k("wired-image"),Ci("design:paramtypes",[])],jt);var T=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},B=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},L=class extends S{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[$,M`
        :host {
          display: inline-block;
          position: relative;
          padding: 5px;
          font-family: sans-serif;
          width: 150px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        input:focus + div path {
          stroke-width: 1.5;
        }
      `]}render(){return x`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){let e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){let t=this.input;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};T([m({type:Boolean,reflect:!0}),B("design:type",Object)],L.prototype,"disabled",void 0);T([m({type:String}),B("design:type",Object)],L.prototype,"placeholder",void 0);T([m({type:String}),B("design:type",String)],L.prototype,"name",void 0);T([m({type:String}),B("design:type",String)],L.prototype,"min",void 0);T([m({type:String}),B("design:type",String)],L.prototype,"max",void 0);T([m({type:String}),B("design:type",String)],L.prototype,"step",void 0);T([m({type:String}),B("design:type",Object)],L.prototype,"type",void 0);T([m({type:String}),B("design:type",Object)],L.prototype,"autocomplete",void 0);T([m({type:String}),B("design:type",Object)],L.prototype,"autocapitalize",void 0);T([m({type:String}),B("design:type",Object)],L.prototype,"autocorrect",void 0);T([m({type:Boolean}),B("design:type",Object)],L.prototype,"required",void 0);T([m({type:Boolean}),B("design:type",Object)],L.prototype,"autofocus",void 0);T([m({type:Boolean}),B("design:type",Object)],L.prototype,"readonly",void 0);T([m({type:Number}),B("design:type",Number)],L.prototype,"minlength",void 0);T([m({type:Number}),B("design:type",Number)],L.prototype,"maxlength",void 0);T([m({type:Number}),B("design:type",Number)],L.prototype,"size",void 0);T([R("input"),B("design:type",HTMLInputElement)],L.prototype,"textInput",void 0);L=T([k("wired-input"),B("design:paramtypes",[])],L);var lt=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Tt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Te=class extends S{constructor(){super(...arguments),this.elevation=1}static get styles(){return[$,M`
        :host {
          display: inline-block;
          position: relative;
        }
        a, a:hover, a:visited {
          color: inherit;
          outline: none;
          display: inline-block;
          white-space: nowrap;
          text-decoration: none;
          border: none;
        }
        path {
          stroke: var(--wired-link-decoration-color, blue);
          stroke-opacity: 0.45;
        }
        a:focus path {
          stroke-opacity: 1;
        }
      `]}render(){return x`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){let e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width,s=e.height+(t-1)*2;return[i,s]}return this.lastSize}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5),s={width:t[0],height:t[1]-(i-1)*2};for(let o=0;o<i;o++)O(e,0,s.height+o*2-2,s.width,s.height+o*2-2,this.seed),O(e,0,s.height+o*2-2,s.width,s.height+o*2-2,this.seed)}};lt([m({type:Number}),Tt("design:type",Object)],Te.prototype,"elevation",void 0);lt([m({type:String}),Tt("design:type",String)],Te.prototype,"href",void 0);lt([m({type:String}),Tt("design:type",String)],Te.prototype,"target",void 0);lt([R("a"),Tt("design:type",HTMLAnchorElement)],Te.prototype,"anchor",void 0);Te=lt([k("wired-link")],Te);var Bt=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Pi=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},ht=class extends S{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[$,M`
      :host {
        display: inline-block;
        font-family: inherit;
        position: relative;
        padding: 5px;
        outline: none;
      }
      :host(:focus) path {
        stroke-width: 1.5;
      }
      ::slotted(wired-item) {
        display: block;
      }
      :host(.wired-horizontal) ::slotted(wired-item) {
        display: inline-block;
      }
      `]}render(){return x`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];let e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){let i=e[t];i.tagName==="WIRED-ITEM"&&(i.setAttribute("role","option"),this.itemNodes.push(i))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));let t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let i=null;for(let s=0;s<t.length;s++){let o=t[s];if(o.tagName==="WIRED-ITEM"){let r=o.value||"";if(this.selected&&r===this.selected){i=o;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){let e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){let e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,0,0,t[0],t[1],this.seed)}};Bt([m({type:Object}),Pi("design:type",Object)],ht.prototype,"value",void 0);Bt([m({type:String}),Pi("design:type",String)],ht.prototype,"selected",void 0);Bt([m({type:Boolean}),Pi("design:type",Object)],ht.prototype,"horizontal",void 0);ht=Bt([k("wired-listbox")],ht);var ct=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ht=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},de=class extends S{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[$,M`
      :host {
        display: inline-block;
        position: relative;
        width: 400px;
        height: 42px;
        font-family: sans-serif;
      }
      .labelContainer {
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .progressLabel {
        color: var(--wired-progress-label-color, #000);
        font-size: var(--wired-progress-font-size, 14px);
        background: var(--wired-progress-label-background, rgba(255,255,255,0.9));
        padding: 2px 6px;
        border-radius: 4px;
        letter-spacing: 1.25px;
      }
      path.progbox {
        stroke: var(--wired-progress-color, rgba(0, 0, 200, 0.8));
        stroke-width: 2.75;
        fill: none;
      }
      .overlay {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        pointer-events: none;
      }
      `]}render(){return x`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0,t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);let i=t.width*Math.max(0,Math.min(e,100));this.progBox=we([[0,0],[i,0],[i,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};ct([m({type:Number}),Ht("design:type",Object)],de.prototype,"value",void 0);ct([m({type:Number}),Ht("design:type",Object)],de.prototype,"min",void 0);ct([m({type:Number}),Ht("design:type",Object)],de.prototype,"max",void 0);ct([m({type:Boolean}),Ht("design:type",Object)],de.prototype,"percentage",void 0);de=ct([k("wired-progress")],de);var Be=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},dt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},xe=class extends S{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[$,M`
      :host {
        display: inline-block;
        font-family: inherit;
      }
      :host([disabled]) {
        opacity: 0.6 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }

      #container {
        display: flex;
        flex-direction: row;
        position: relative;
        user-select: none;
        min-height: 24px;
        cursor: pointer;
      }
      span {
        margin-left: 1.5ex;
        line-height: 24px;
      }
      input {
        opacity: 0;
      }
      path {
        stroke: var(--wired-radio-icon-color, currentColor);
        stroke-width: var(--wired-radio-default-swidth, 0.7);
      }
      g path {
        stroke-width: 0;
        fill: var(--wired-radio-icon-color, currentColor);
      }
      #container.focused {
        --wired-radio-default-swidth: 1.5;
      }
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return x`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){F(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=oe("g"),e.appendChild(this.svgCheck);let i=Math.max(t[0]*.6,5),s=Math.max(t[1]*.6,5);F(this.svgCheck,t[0]/2,t[1]/2,i,s,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Be([m({type:Boolean}),dt("design:type",Object)],xe.prototype,"checked",void 0);Be([m({type:Boolean,reflect:!0}),dt("design:type",Object)],xe.prototype,"disabled",void 0);Be([m({type:String}),dt("design:type",String)],xe.prototype,"name",void 0);Be([m(),dt("design:type",Object)],xe.prototype,"focused",void 0);Be([R("input"),dt("design:type",HTMLInputElement)],xe.prototype,"input",void 0);xe=Be([k("wired-radio")],xe);var Ns=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},zo=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},zi=class extends D{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return M`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return x`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){let t=e.detail.checked,i=e.target,s=i.name||"";t?(this.selected=t&&s||"",this.fireSelected()):i.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){let t=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],t&&t.length)for(let i=0;i<t.length;i++){let s=t[i];if(s.tagName==="WIRED-RADIO"){this.radioNodes.push(s);let o=s.name||"";this.selected&&o===this.selected?s.checked=!0:s.checked=!1}}}selectPrevious(){let e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){i=s;break}i<0?t=e[0]:(i--,i<0&&(i=e.length-1),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){let e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){i=s;break}i<0?t=e[0]:(i++,i>=e.length&&(i=0),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){Ke(this,"selected",{selected:this.selected})}};Ns([m({type:String}),zo("design:type",String)],zi.prototype,"selected",void 0);zi=Ns([k("wired-radio-group")],zi);var ke=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},He=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},pe=class extends S{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[$,M`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px 40px 10px 5px;
          font-family: sans-serif;
          width: 180px;
          outline: none;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        input {
          display: block;
          width: 100%;
          box-sizing: border-box;
          outline: none;
          border: none;
          font-family: inherit;
          font-size: inherit;
          font-weight: inherit;
          color: inherit;
          padding: 6px;
        }
        
        input[type=search]::-ms-clear {  display: none; width : 0; height: 0; }
        input[type=search]::-ms-reveal {  display: none; width : 0; height: 0; }
        input[type="search"]::-webkit-search-decoration,
        input[type="search"]::-webkit-search-cancel-button,
        input[type="search"]::-webkit-search-results-button,
        input[type="search"]::-webkit-search-results-decoration {
          display: none;
        }

        .thicker path {
          stroke-width: 1.5;
        }

        button {
          position: absolute;
          top: 0;
          right: 2px;
          width: 32px;
          height: 100%;
          box-sizing: border-box;
          background: none;
          border: none;
          cursor: pointer;
          outline: none;
          opacity: 0;
        }
      `]}render(){return x`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){let e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){let t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=oe("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),F(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),O(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=oe("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),O(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),O(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};ke([m({type:Boolean,reflect:!0}),He("design:type",Object)],pe.prototype,"disabled",void 0);ke([m({type:String}),He("design:type",Object)],pe.prototype,"placeholder",void 0);ke([m({type:String}),He("design:type",Object)],pe.prototype,"autocomplete",void 0);ke([m({type:String}),He("design:type",Object)],pe.prototype,"autocorrect",void 0);ke([m({type:Boolean}),He("design:type",Object)],pe.prototype,"autofocus",void 0);ke([R("input"),He("design:type",HTMLInputElement)],pe.prototype,"textInput",void 0);pe=ke([k("wired-search-input")],pe);var Ne=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},pt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},le=class extends S{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[$,M`
      :host {
        display: inline-block;
        position: relative;
        width: 300px;
        box-sizing: border-box;
      }
      :host([disabled]) {
        opacity: 0.45 !important;
        cursor: default;
        pointer-events: none;
        background: rgba(0, 0, 0, 0.07);
        border-radius: 5px;
      }
      input[type=range] {
        width: 100%;
        height: 40px;
        box-sizing: border-box;
        margin: 0;
        -webkit-appearance: none;
        background: transparent;
        outline: none;
        position: relative;
      }
      input[type=range]:focus {
        outline: none;
      }
      input[type=range]::-ms-track {
        width: 100%;
        cursor: pointer;
        background: transparent;
        border-color: transparent;
        color: transparent;
      }
      input[type=range]::-moz-focus-outer {
        outline: none;
        border: 0;
      }
      input[type=range]::-moz-range-thumb {
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        margin: 0;
        height: 20px;
        width: 20px;
        line-height: 1;
      }
      input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border-radius: 50px;
        background: none;
        cursor: pointer;
        border: none;
        height: 20px;
        width: 20px;
        margin: 0;
        line-height: 1;
      }
      .knob{
        fill: var(--wired-slider-knob-color, rgb(51, 103, 214));
        stroke: var(--wired-slider-knob-color, rgb(51, 103, 214));
      }
      .bar {
        stroke: var(--wired-slider-bar-color, rgb(0, 0, 0));
      }
      input:focus + div svg .knob {
        stroke: var(--wired-slider-knob-outline-color, #000);
        fill-opacity: 0.8;
      }
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return x`
    <div id="container">
      <input type="range" 
        min="${this.min}"
        max="${this.max}"
        step="${this.step}"
        ?disabled="${this.disabled}"
        @input="${this.onInput}">
      <div id="overlay">
        <svg></svg>
      </div>
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];let i=Math.round(t[1]/2);O(e,0,i,t[0],i,this.seed).classList.add("bar"),this.knob=F(e,10,i,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){let e=+this.input.value,t=Math.max(this.step,this.max-this.min),i=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${i*(this.canvasWidth-20)}px)`)}}};Ne([m({type:Number}),pt("design:type",Object)],le.prototype,"min",void 0);Ne([m({type:Number}),pt("design:type",Object)],le.prototype,"max",void 0);Ne([m({type:Number}),pt("design:type",Object)],le.prototype,"step",void 0);Ne([m({type:Boolean,reflect:!0}),pt("design:type",Object)],le.prototype,"disabled",void 0);Ne([R("input"),pt("design:type",HTMLInputElement)],le.prototype,"input",void 0);le=Ne([k("wired-slider")],le);var Li=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ws=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Nt=class extends S{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[$,M`
        :host {
          display: inline-block;
          position: relative;
        }
        path {
          stroke: currentColor;
          stroke-opacity: 0.65;
          stroke-width: 1.5;
          fill: none;
        }
        .knob {
          stroke-width: 2.8 !important;
          stroke-opacity: 1;
        }
      `]}render(){return x`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){F(e,t[0]/2,t[1]/2,Math.floor(t[0]*.8),Math.floor(.8*t[1]),this.seed),this.knob=ze(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){let e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};Li([m({type:Boolean}),Ws("design:type",Object)],Nt.prototype,"spinning",void 0);Li([m({type:Number}),Ws("design:type",Object)],Nt.prototype,"duration",void 0);Nt=Li([k("wired-spinner")],Nt);var Ii=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},ji=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Wt=class extends S{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[$,M`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return x`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-4,t[1]-4,this.seed)}};Ii([m({type:String}),ji("design:type",Object)],Wt.prototype,"name",void 0);Ii([m({type:String}),ji("design:type",Object)],Wt.prototype,"label",void 0);Wt=Ii([k("wired-tab"),ji("design:paramtypes",[])],Wt);var Ti=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ds=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Dt=class extends D{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[$,M`
        :host {
          display: block;
          opacity: 1;
        }
        ::slotted(.hidden) {
          display: none !important;
        }
    
        :host ::slotted(.hidden) {
          display: none !important;
        }
        #bar {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
        }
      `]}render(){return x`
    <div id="bar">
      ${this.pages.map(e=>x`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){let e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){let i=e[t];if(i.nodeType===Node.ELEMENT_NODE&&i.tagName.toLowerCase()==="wired-tab"){let s=i;this.pages.push(s);let o=s.getAttribute("name")||"";o&&o.trim().split(" ").forEach(r=>{r&&this.pageMap.set(r,s)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){let e=this.getElement();for(let t=0;t<this.pages.length;t++){let i=this.pages[t];i===e?i.classList.remove("hidden"):i.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){let e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){let e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};Ti([m({type:String}),Ds("design:type",String)],Dt.prototype,"selected",void 0);Ti([R("slot"),Ds("design:type",HTMLSlotElement)],Dt.prototype,"slotElement",void 0);Dt=Ti([k("wired-tabs")],Dt);var G=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Y=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},q=class extends S{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[$,M`
        :host {
          display: inline-block;
          position: relative;
          font-family: sans-serif;
          width: 400px;
          outline: none;
          padding: 4px;
        }
        :host([disabled]) {
          opacity: 0.6 !important;
          cursor: default;
          pointer-events: none;
        }
        :host([disabled]) svg {
          background: rgba(0, 0, 0, 0.07);
        }
        textarea {
          position: relative;
          outline: none;
          border: none;
          resize: none;
          background: inherit;
          color: inherit;
          width: 100%;
          font-size: inherit;
          font-family: inherit;
          line-height: inherit;
          text-align: inherit;
          padding: 10px;
          box-sizing: border-box;
        }
      `]}render(){return x`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){let e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){let t=this.textarea;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};G([m({type:Boolean,reflect:!0}),Y("design:type",Object)],q.prototype,"disabled",void 0);G([m({type:Number}),Y("design:type",Object)],q.prototype,"rows",void 0);G([m({type:Number}),Y("design:type",Object)],q.prototype,"maxrows",void 0);G([m({type:String}),Y("design:type",Object)],q.prototype,"autocomplete",void 0);G([m({type:Boolean}),Y("design:type",Object)],q.prototype,"autofocus",void 0);G([m({type:String}),Y("design:type",Object)],q.prototype,"inputmode",void 0);G([m({type:String}),Y("design:type",Object)],q.prototype,"placeholder",void 0);G([m({type:Boolean}),Y("design:type",Object)],q.prototype,"required",void 0);G([m({type:Boolean}),Y("design:type",Object)],q.prototype,"readonly",void 0);G([m({type:Number}),Y("design:type",Number)],q.prototype,"minlength",void 0);G([m({type:Number}),Y("design:type",Number)],q.prototype,"maxlength",void 0);G([R("textarea"),Y("design:type",HTMLTextAreaElement)],q.prototype,"textareaInput",void 0);q=G([k("wired-textarea")],q);var Vt=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Bi=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},ut=class extends S{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[$,M`
      :host {
        display: inline-block;
        cursor: pointer;
        position: relative;
        outline: none;
      }
      :host([disabled]) {
        opacity: 0.4 !important;
        cursor: default;
        pointer-events: none;
      }
      :host([disabled]) svg {
        background: rgba(0, 0, 0, 0.07);
      }
      input {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        cursor: pointer;
        opacity: 0;
      }
      .knob {
        transition: transform 0.3s ease;
      }
      .knob path {
        stroke-width: 0.7;
      }
      .knob.checked {
        transform: translateX(48px);
      }
      path.knobfill {
        stroke-width: 3 !important;
        fill: transparent;
      }
      .knob.unchecked path.knobfill {
        stroke: var(--wired-toggle-off-color, gray);
      }
      .knob.checked path.knobfill {
        stroke: var(--wired-toggle-on-color, rgb(63, 81, 181));
      }
      `]}render(){return x`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){C(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=oe("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);let s=ze(16,16,32,32,this.seed);s.classList.add("knobfill"),this.knob.appendChild(s),F(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){let e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};Vt([m({type:Boolean}),Bi("design:type",Object)],ut.prototype,"checked",void 0);Vt([m({type:Boolean,reflect:!0}),Bi("design:type",Object)],ut.prototype,"disabled",void 0);Vt([R("input"),Bi("design:type",HTMLInputElement)],ut.prototype,"input",void 0);ut=Vt([k("wired-toggle")],ut);var J=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},ee=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},X=class extends S{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[$,M`
        :host {
          display: inline-block;
          position: relative;
          line-height: 1;
          padding: 3px 3px 68px;
          --wired-progress-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
          --wired-slider-knob-color: var(--wired-video-highlight-color, rgb(51, 103, 214));
        }
        video {
          display: block;
          box-sizing: border-box;
          max-width: 100%;
          max-height: 100%;
        }
        path {
          stroke-width: 1;
        }
        #controls {
          position: absolute;
          pointer-events: auto;
          left: 0;
          bottom: 0;
          width: 100%;
          box-sizing: border-box;
          height: 70px;
        }
        .layout.horizontal {
          display: -ms-flexbox;
          display: -webkit-flex;
          display: flex;
          -ms-flex-direction: row;
          -webkit-flex-direction: row;
          flex-direction: row;
          -ms-flex-align: center;
          -webkit-align-items: center;
          align-items: center;
          padding: 5px 10px;
        }
        .flex {
          -ms-flex: 1 1 0.000000001px;
          -webkit-flex: 1;
          flex: 1;
          -webkit-flex-basis: 0.000000001px;
          flex-basis: 0.000000001px;
        }
        wired-progress {
          display: block;
          width: 100%;
          box-sizing: border-box;
          height: 20px;
          --wired-progress-label-color: transparent;
          --wired-progress-label-background: transparent;
        }
        wired-icon-button span {
          font-size: 16px;
          line-height: 16px;
          width: 16px;
          height: 16px;
          padding: 0px;
          font-family: sans-serif;
          display: inline-block;
        }
        #timeDisplay {
          padding: 0 20px 0 8px;
          font-size: 13px;
        }
        wired-slider {
          display: block;
          max-width: 200px;
          margin: 0 6px 0 auto;
        }
      `]}render(){return x`
    <video 
      .autoplay="${this.autoplay}"
      .loop="${this.loop}"
      .muted="${this.muted}"
      .playsinline="${this.playsinline}"
      src="${this.src}"
      @play="${()=>this.playing=!0}"
      @pause="${()=>this.playing=!1}"
      @canplay="${this.canPlay}"
      @timeupdate="${this.updateTime}">
    </video>
    <div id="overlay">
      <svg></svg>
    </div>
    <div id="controls">
      <wired-progress></wired-progress>
      <div class="horizontal layout center">
        <wired-icon-button @click="${this.togglePause}">
          <span>${this.playing?"||":"\u25B6"}</span>
        </wired-icon-button>
        <div id="timeDisplay">${this.timeDisplay}</div>
        <div class="flex">
          <wired-slider @change="${this.volumeChange}"></wired-slider>
        </div>
        <div style="width: 24px; height: 24px;">
          <svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g><path style="stroke: none; fill: currentColor;" d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"></path></g></svg>
        </div>
      </div>
    </div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){let t=Math.floor(e/60),i=Math.round(e-t*60);return`${t}:${i}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};J([m({type:String}),ee("design:type",Object)],X.prototype,"src",void 0);J([m({type:Boolean}),ee("design:type",Object)],X.prototype,"autoplay",void 0);J([m({type:Boolean}),ee("design:type",Object)],X.prototype,"loop",void 0);J([m({type:Boolean}),ee("design:type",Object)],X.prototype,"muted",void 0);J([m({type:Boolean}),ee("design:type",Object)],X.prototype,"playsinline",void 0);J([m(),ee("design:type",Object)],X.prototype,"playing",void 0);J([m(),ee("design:type",Object)],X.prototype,"timeDisplay",void 0);J([R("wired-progress"),ee("design:type",de)],X.prototype,"progressBar",void 0);J([R("wired-slider"),ee("design:type",le)],X.prototype,"slider",void 0);J([R("video"),ee("design:type",HTMLVideoElement)],X.prototype,"video",void 0);X=J([k("wired-video"),ee("design:paramtypes",[])],X);function Hi(n,e,t){if(n&&n.length){let[i,s]=e,o=Math.PI/180*t,r=Math.cos(o),a=Math.sin(o);n.forEach(l=>{let[h,c]=l;l[0]=(h-i)*r-(c-s)*a+i,l[1]=(h-i)*a+(c-s)*r+s})}}function ue(n){let e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Lo(n,e,t,i){let s=e[1]-n[1],o=n[0]-e[0],r=s*n[0]+o*n[1],a=i[1]-t[1],l=t[0]-i[0],h=a*t[0]+l*t[1],c=s*l-a*o;return c?[(l*r-o*h)/c,(s*h-a*r)/c]:null}function Ni(n,e,t){let i=n.length;if(i<3)return!1;let s=[Number.MAX_SAFE_INTEGER,t],o=[e,t],r=0;for(let a=0;a<i;a++){let l=n[a],h=n[(a+1)%i];if(Ys(l,h,o,s)){if(bt(l,o,h)===0)return vt(l,o,h);r++}}return r%2==1}function vt(n,e,t){return e[0]<=Math.max(n[0],t[0])&&e[0]>=Math.min(n[0],t[0])&&e[1]<=Math.max(n[1],t[1])&&e[1]>=Math.min(n[1],t[1])}function bt(n,e,t){let i=(e[1]-n[1])*(t[0]-e[0])-(e[0]-n[0])*(t[1]-e[1]);return i===0?0:i>0?1:2}function Ys(n,e,t,i){let s=bt(n,e,t),o=bt(n,e,i),r=bt(t,i,n),a=bt(t,i,e);return s!==o&&r!==a||!(s!==0||!vt(n,t,e))||!(o!==0||!vt(n,i,e))||!(r!==0||!vt(t,n,i))||!(a!==0||!vt(t,e,i))}function Yt(n,e){let t=[0,0],i=Math.round(e.hachureAngle+90);i&&Hi(n,t,i);let s=(function(o,r){let a=[...o];a[0].join(",")!==a[a.length-1].join(",")&&a.push([a[0][0],a[0][1]]);let l=[];if(a&&a.length>2){let h=r.hachureGap;h<0&&(h=4*r.strokeWidth),h=Math.max(h,.1);let c=[];for(let u=0;u<a.length-1;u++){let p=a[u],g=a[u+1];if(p[1]!==g[1]){let v=Math.min(p[1],g[1]);c.push({ymin:v,ymax:Math.max(p[1],g[1]),x:v===p[1]?p[0]:g[0],islope:(g[0]-p[0])/(g[1]-p[1])})}}if(c.sort((u,p)=>u.ymin<p.ymin?-1:u.ymin>p.ymin?1:u.x<p.x?-1:u.x>p.x?1:u.ymax===p.ymax?0:(u.ymax-p.ymax)/Math.abs(u.ymax-p.ymax)),!c.length)return l;let f=[],d=c[0].ymin;for(;f.length||c.length;){if(c.length){let u=-1;for(let p=0;p<c.length&&!(c[p].ymin>d);p++)u=p;c.splice(0,u+1).forEach(p=>{f.push({s:d,edge:p})})}if(f=f.filter(u=>!(u.edge.ymax<=d)),f.sort((u,p)=>u.edge.x===p.edge.x?0:(u.edge.x-p.edge.x)/Math.abs(u.edge.x-p.edge.x)),f.length>1)for(let u=0;u<f.length;u+=2){let p=u+1;if(p>=f.length)break;let g=f[u].edge,v=f[p].edge;l.push([[Math.round(g.x),d],[Math.round(v.x),d]])}d+=h,f.forEach(u=>{u.edge.x=u.edge.x+h*u.edge.islope})}}return l})(n,e);return i&&(Hi(n,t,-i),(function(o,r,a){let l=[];o.forEach(h=>l.push(...h)),Hi(l,r,a)})(s,t,-i)),s}var yt=class{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,i=!1){let s=Yt(e,t);if(i){let o=this.connectingLines(e,s);s=s.concat(o)}return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){let i=[];for(let s of e)i.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],t));return i}connectingLines(e,t){let i=[];if(t.length>1)for(let s=1;s<t.length;s++){let o=t[s-1];if(ue(o)<3)continue;let r=[t[s][0],o[1]];if(ue(r)>3){let a=this.splitOnIntersections(e,r);i.push(...a)}}return i}midPointInPolygon(e,t){return Ni(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){let i=Math.max(5,.1*ue(t)),s=[];for(let o=0;o<e.length;o++){let r=e[o],a=e[(o+1)%e.length];if(Ys(r,a,...t)){let l=Lo(r,a,t[0],t[1]);if(l){let h=ue([l,t[0]]),c=ue([l,t[1]]);h>i&&c>i&&s.push({point:l,distance:h})}}}if(s.length>1){let o=s.sort((l,h)=>l.distance-h.distance).map(l=>l.point);if(Ni(e,...t[0])||o.shift(),Ni(e,...t[1])||o.pop(),o.length<=1)return this.midPointInPolygon(e,t)?[t]:[];let r=[t[0],...o,t[1]],a=[];for(let l=0;l<r.length-1;l+=2){let h=[r[l],r[l+1]];this.midPointInPolygon(e,h)&&a.push(h)}return a}return this.midPointInPolygon(e,t)?[t]:[]}},Di=class extends yt{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}},Vi=class extends yt{fillPolygon(e,t){let i=this._fillPolygon(e,t),s=Object.assign({},t,{hachureAngle:t.hachureAngle+90}),o=this._fillPolygon(e,s);return i.ops=i.ops.concat(o.ops),i}},qi=class{constructor(e){this.helper=e}fillPolygon(e,t){let i=Yt(e,t=Object.assign({},t,{curveStepCount:4,hachureAngle:0,roughness:1}));return this.dotsOnLines(i,t)}dotsOnLines(e,t){let i=[],s=t.hachureGap;s<0&&(s=4*t.strokeWidth),s=Math.max(s,.1);let o=t.fillWeight;o<0&&(o=t.strokeWidth/2);let r=s/4;for(let a of e){let l=ue(a),h=l/s,c=Math.ceil(h)-1,f=l-c*s,d=(a[0][0]+a[1][0])/2-s/4,u=Math.min(a[0][1],a[1][1]);for(let p=0;p<c;p++){let g=u+f+p*s,v=this.helper.randOffsetWithRange(d-r,d+r,t),b=this.helper.randOffsetWithRange(g-r,g+r,t),y=this.helper.ellipse(v,b,o,o,t);i.push(...y.ops)}}return{type:"fillSketch",ops:i}}},Ui=class{constructor(e){this.helper=e}fillPolygon(e,t){let i=Yt(e,t);return{type:"fillSketch",ops:this.dashedLine(i,t)}}dashedLine(e,t){let i=t.dashOffset<0?t.hachureGap<0?4*t.strokeWidth:t.hachureGap:t.dashOffset,s=t.dashGap<0?t.hachureGap<0?4*t.strokeWidth:t.hachureGap:t.dashGap,o=[];return e.forEach(r=>{let a=ue(r),l=Math.floor(a/(i+s)),h=(a+s-l*(i+s))/2,c=r[0],f=r[1];c[0]>f[0]&&(c=r[1],f=r[0]);let d=Math.atan((f[1]-c[1])/(f[0]-c[0]));for(let u=0;u<l;u++){let p=u*(i+s),g=p+i,v=[c[0]+p*Math.cos(d)+h*Math.cos(d),c[1]+p*Math.sin(d)+h*Math.sin(d)],b=[c[0]+g*Math.cos(d)+h*Math.cos(d),c[1]+g*Math.sin(d)+h*Math.sin(d)];o.push(...this.helper.doubleLineOps(v[0],v[1],b[0],b[1],t))}}),o}},Fi=class{constructor(e){this.helper=e}fillPolygon(e,t){let i=t.hachureGap<0?4*t.strokeWidth:t.hachureGap,s=t.zigzagOffset<0?i:t.zigzagOffset,o=Yt(e,t=Object.assign({},t,{hachureGap:i+s}));return{type:"fillSketch",ops:this.zigzagLines(o,s,t)}}zigzagLines(e,t,i){let s=[];return e.forEach(o=>{let r=ue(o),a=Math.round(r/(2*t)),l=o[0],h=o[1];l[0]>h[0]&&(l=o[1],h=o[0]);let c=Math.atan((h[1]-l[1])/(h[0]-l[0]));for(let f=0;f<a;f++){let d=2*f*t,u=2*(f+1)*t,p=Math.sqrt(2*Math.pow(t,2)),g=[l[0]+d*Math.cos(c),l[1]+d*Math.sin(c)],v=[l[0]+u*Math.cos(c),l[1]+u*Math.sin(c)],b=[g[0]+p*Math.cos(c+Math.PI/4),g[1]+p*Math.sin(c+Math.PI/4)];s.push(...this.helper.doubleLineOps(g[0],g[1],b[0],b[1],i),...this.helper.doubleLineOps(b[0],b[1],v[0],v[1],i))}}),s}},U={},Gi=class{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}},qt={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function Wi(n,e){return n.type===e}function Zi(n){let e=[],t=(function(r){let a=new Array;for(;r!=="";)if(r.match(/^([ \t\r\n,]+)/))r=r.substr(RegExp.$1.length);else if(r.match(/^([aAcChHlLmMqQsStTvVzZ])/))a[a.length]={type:0,text:RegExp.$1},r=r.substr(RegExp.$1.length);else{if(!r.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];a[a.length]={type:1,text:""+parseFloat(RegExp.$1)},r=r.substr(RegExp.$1.length)}return a[a.length]={type:2,text:""},a})(n),i="BOD",s=0,o=t[s];for(;!Wi(o,2);){let r=0,a=[];if(i==="BOD"){if(o.text!=="M"&&o.text!=="m")return Zi("M0,0"+n);s++,r=qt[o.text],i=o.text}else Wi(o,1)?r=qt[i]:(s++,r=qt[o.text],i=o.text);if(!(s+r<t.length))throw new Error("Path data ended short");for(let l=s;l<s+r;l++){let h=t[l];if(!Wi(h,1))throw new Error("Param not a number: "+i+","+h.text);a[a.length]=+h.text}if(typeof qt[i]!="number")throw new Error("Bad segment: "+i);{let l={key:i,data:a};e.push(l),s+=r,o=t[s],i==="M"&&(i="L"),i==="m"&&(i="l")}}return e}function Vs(n){let e=0,t=0,i=0,s=0,o=[];for(let{key:r,data:a}of n)switch(r){case"M":o.push({key:"M",data:[...a]}),[e,t]=a,[i,s]=a;break;case"m":e+=a[0],t+=a[1],o.push({key:"M",data:[e,t]}),i=e,s=t;break;case"L":o.push({key:"L",data:[...a]}),[e,t]=a;break;case"l":e+=a[0],t+=a[1],o.push({key:"L",data:[e,t]});break;case"C":o.push({key:"C",data:[...a]}),e=a[4],t=a[5];break;case"c":{let l=a.map((h,c)=>c%2?h+t:h+e);o.push({key:"C",data:l}),e=l[4],t=l[5];break}case"Q":o.push({key:"Q",data:[...a]}),e=a[2],t=a[3];break;case"q":{let l=a.map((h,c)=>c%2?h+t:h+e);o.push({key:"Q",data:l}),e=l[2],t=l[3];break}case"A":o.push({key:"A",data:[...a]}),e=a[5],t=a[6];break;case"a":e+=a[5],t+=a[6],o.push({key:"A",data:[a[0],a[1],a[2],a[3],a[4],e,t]});break;case"H":o.push({key:"H",data:[...a]}),e=a[0];break;case"h":e+=a[0],o.push({key:"H",data:[e]});break;case"V":o.push({key:"V",data:[...a]}),t=a[0];break;case"v":t+=a[0],o.push({key:"V",data:[t]});break;case"S":o.push({key:"S",data:[...a]}),e=a[2],t=a[3];break;case"s":{let l=a.map((h,c)=>c%2?h+t:h+e);o.push({key:"S",data:l}),e=l[2],t=l[3];break}case"T":o.push({key:"T",data:[...a]}),e=a[0],t=a[1];break;case"t":e+=a[0],t+=a[1],o.push({key:"T",data:[e,t]});break;case"Z":case"z":o.push({key:"Z",data:[]}),e=i,t=s}return o}function qs(n){let e=[],t="",i=0,s=0,o=0,r=0,a=0,l=0;for(let{key:h,data:c}of n){switch(h){case"M":e.push({key:"M",data:[...c]}),[i,s]=c,[o,r]=c;break;case"C":e.push({key:"C",data:[...c]}),i=c[4],s=c[5],a=c[2],l=c[3];break;case"L":e.push({key:"L",data:[...c]}),[i,s]=c;break;case"H":i=c[0],e.push({key:"L",data:[i,s]});break;case"V":s=c[0],e.push({key:"L",data:[i,s]});break;case"S":{let f=0,d=0;t==="C"||t==="S"?(f=i+(i-a),d=s+(s-l)):(f=i,d=s),e.push({key:"C",data:[f,d,...c]}),a=c[0],l=c[1],i=c[2],s=c[3];break}case"T":{let[f,d]=c,u=0,p=0;t==="Q"||t==="T"?(u=i+(i-a),p=s+(s-l)):(u=i,p=s);let g=i+2*(u-i)/3,v=s+2*(p-s)/3,b=f+2*(u-f)/3,y=d+2*(p-d)/3;e.push({key:"C",data:[g,v,b,y,f,d]}),a=u,l=p,i=f,s=d;break}case"Q":{let[f,d,u,p]=c,g=i+2*(f-i)/3,v=s+2*(d-s)/3,b=u+2*(f-u)/3,y=p+2*(d-p)/3;e.push({key:"C",data:[g,v,b,y,u,p]}),a=f,l=d,i=u,s=p;break}case"A":{let f=Math.abs(c[0]),d=Math.abs(c[1]),u=c[2],p=c[3],g=c[4],v=c[5],b=c[6];f===0||d===0?(e.push({key:"C",data:[i,s,v,b,v,b]}),i=v,s=b):(i!==v||s!==b)&&(Xs(i,s,v,b,f,d,u,p,g).forEach((function(y){e.push({key:"C",data:y})})),i=v,s=b);break}case"Z":e.push({key:"Z",data:[]}),i=o,s=r}t=h}return e}function ft(n,e,t){return[n*Math.cos(t)-e*Math.sin(t),n*Math.sin(t)+e*Math.cos(t)]}function Xs(n,e,t,i,s,o,r,a,l,h){let c=(f=r,Math.PI*f/180);var f;let d=[],u=0,p=0,g=0,v=0;if(h)[u,p,g,v]=h;else{[n,e]=ft(n,e,-c),[t,i]=ft(t,i,-c);let K=(n-t)/2,I=(e-i)/2,se=K*K/(s*s)+I*I/(o*o);se>1&&(se=Math.sqrt(se),s*=se,o*=se);let $e=s*s,Re=o*o,po=$e*Re-$e*I*I-Re*K*K,uo=$e*I*I+Re*K*K,rs=(a===l?-1:1)*Math.sqrt(Math.abs(po/uo));g=rs*s*I/o+(n+t)/2,v=rs*-o*K/s+(e+i)/2,u=Math.asin(parseFloat(((e-v)/o).toFixed(9))),p=Math.asin(parseFloat(((i-v)/o).toFixed(9))),n<g&&(u=Math.PI-u),t<g&&(p=Math.PI-p),u<0&&(u=2*Math.PI+u),p<0&&(p=2*Math.PI+p),l&&u>p&&(u-=2*Math.PI),!l&&p>u&&(p-=2*Math.PI)}let b=p-u;if(Math.abs(b)>120*Math.PI/180){let K=p,I=t,se=i;p=l&&p>u?u+120*Math.PI/180*1:u+120*Math.PI/180*-1,d=Xs(t=g+s*Math.cos(p),i=v+o*Math.sin(p),I,se,s,o,r,0,l,[p,K,g,v])}b=p-u;let y=Math.cos(u),A=Math.sin(u),P=Math.cos(p),E=Math.sin(p),N=Math.tan(b/4),Q=4/3*s*N,V=4/3*o*N,ne=[n,e],W=[n+Q*A,e-V*y],ie=[t+Q*E,i-V*P],ns=[t,i];if(W[0]=2*ne[0]-W[0],W[1]=2*ne[1]-W[1],h)return[W,ie,ns].concat(d);{d=[W,ie,ns].concat(d);let K=[];for(let I=0;I<d.length;I+=3){let se=ft(d[I][0],d[I][1],c),$e=ft(d[I+1][0],d[I+1][1],c),Re=ft(d[I+2][0],d[I+2][1],c);K.push([se[0],se[1],$e[0],$e[1],Re[0],Re[1]])}return K}}var Io={randOffset:function(n,e){return w(n,e)},randOffsetWithRange:function(n,e,t){return Zt(n,e,t)},ellipse:function(n,e,t,i,s){let o=eo(t,i,s);return Qi(n,e,s,o).opset},doubleLineOps:function(n,e,t,i,s){return he(n,e,t,i,s,!0)}};function Js(n,e,t,i,s){return{type:"path",ops:he(n,e,t,i,s)}}function Ft(n,e,t){let i=(n||[]).length;if(i>2){let s=[];for(let o=0;o<i-1;o++)s.push(...he(n[o][0],n[o][1],n[o+1][0],n[o+1][1],t));return e&&s.push(...he(n[i-1][0],n[i-1][1],n[0][0],n[0][1],t)),{type:"path",ops:s}}return i===2?Js(n[0][0],n[0][1],n[1][0],n[1][1],t):{type:"path",ops:[]}}function jo(n,e,t,i,s){return(function(o,r){return Ft(o,!0,r)})([[n,e],[n+t,e],[n+t,e+i],[n,e+i]],s)}function To(n,e){let t=Gs(n,1*(1+.2*e.roughness),e);if(!e.disableMultiStroke){let i=Gs(n,1.5*(1+.22*e.roughness),(function(s){let o=Object.assign({},s);return o.randomizer=void 0,s.seed&&(o.seed=s.seed+1),o})(e));t=t.concat(i)}return{type:"path",ops:t}}function eo(n,e,t){let i=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),s=Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*i),o=2*Math.PI/s,r=Math.abs(n/2),a=Math.abs(e/2),l=1-t.curveFitting;return r+=w(r*l,t),a+=w(a*l,t),{increment:o,rx:r,ry:a}}function Qi(n,e,t,i){let[s,o]=Zs(i.increment,n,e,i.rx,i.ry,1,i.increment*Zt(.1,Zt(.4,1,t),t),t),r=Qt(s,null,t);if(!t.disableMultiStroke){let[a]=Zs(i.increment,n,e,i.rx,i.ry,1.5,0,t),l=Qt(a,null,t);r=r.concat(l)}return{estimatedPoints:o,opset:{type:"path",ops:r}}}function Us(n,e,t,i,s,o,r,a,l){let h=n,c=e,f=Math.abs(t/2),d=Math.abs(i/2);f+=w(.01*f,l),d+=w(.01*d,l);let u=s,p=o;for(;u<0;)u+=2*Math.PI,p+=2*Math.PI;p-u>2*Math.PI&&(u=0,p=2*Math.PI);let g=2*Math.PI/l.curveStepCount,v=Math.min(g/2,(p-u)/2),b=Qs(v,h,c,f,d,u,p,1,l);if(!l.disableMultiStroke){let y=Qs(v,h,c,f,d,u,p,1.5,l);b.push(...y)}return r&&(a?b.push(...he(h,c,h+f*Math.cos(u),c+d*Math.sin(u),l),...he(h,c,h+f*Math.cos(p),c+d*Math.sin(p),l)):b.push({op:"lineTo",data:[h,c]},{op:"lineTo",data:[h+f*Math.cos(u),c+d*Math.sin(u)]})),{type:"path",ops:b}}function mt(n,e){let t=[];if(n.length){let i=e.maxRandomnessOffset||0,s=n.length;if(s>2){t.push({op:"move",data:[n[0][0]+w(i,e),n[0][1]+w(i,e)]});for(let o=1;o<s;o++)t.push({op:"lineTo",data:[n[o][0]+w(i,e),n[o][1]+w(i,e)]})}}return{type:"fillPath",ops:t}}function _e(n,e){return(function(t,i){let s=t.fillStyle||"hachure";if(!U[s])switch(s){case"zigzag":U[s]||(U[s]=new Di(i));break;case"cross-hatch":U[s]||(U[s]=new Vi(i));break;case"dots":U[s]||(U[s]=new qi(i));break;case"dashed":U[s]||(U[s]=new Ui(i));break;case"zigzag-line":U[s]||(U[s]=new Fi(i));break;default:s="hachure",U[s]||(U[s]=new yt(i))}return U[s]})(e,Io).fillPolygon(n,e)}function to(n){return n.randomizer||(n.randomizer=new Gi(n.seed||0)),n.randomizer.next()}function Zt(n,e,t,i=1){return t.roughness*i*(to(t)*(e-n)+n)}function w(n,e,t=1){return Zt(-n,n,e,t)}function he(n,e,t,i,s,o=!1){let r=o?s.disableMultiStrokeFill:s.disableMultiStroke,a=Fs(n,e,t,i,s,!0,!1);if(r)return a;let l=Fs(n,e,t,i,s,!0,!0);return a.concat(l)}function Fs(n,e,t,i,s,o,r){let a=Math.pow(n-t,2)+Math.pow(e-i,2),l=Math.sqrt(a),h=1;h=l<200?1:l>500?.4:-.0016668*l+1.233334;let c=s.maxRandomnessOffset||0;c*c*100>a&&(c=l/10);let f=c/2,d=.2+.2*to(s),u=s.bowing*s.maxRandomnessOffset*(i-e)/200,p=s.bowing*s.maxRandomnessOffset*(n-t)/200;u=w(u,s,h),p=w(p,s,h);let g=[],v=()=>w(f,s,h),b=()=>w(c,s,h);return o&&(r?g.push({op:"move",data:[n+v(),e+v()]}):g.push({op:"move",data:[n+w(c,s,h),e+w(c,s,h)]})),r?g.push({op:"bcurveTo",data:[u+n+(t-n)*d+v(),p+e+(i-e)*d+v(),u+n+2*(t-n)*d+v(),p+e+2*(i-e)*d+v(),t+v(),i+v()]}):g.push({op:"bcurveTo",data:[u+n+(t-n)*d+b(),p+e+(i-e)*d+b(),u+n+2*(t-n)*d+b(),p+e+2*(i-e)*d+b(),t+b(),i+b()]}),g}function Gs(n,e,t){let i=[];i.push([n[0][0]+w(e,t),n[0][1]+w(e,t)]),i.push([n[0][0]+w(e,t),n[0][1]+w(e,t)]);for(let s=1;s<n.length;s++)i.push([n[s][0]+w(e,t),n[s][1]+w(e,t)]),s===n.length-1&&i.push([n[s][0]+w(e,t),n[s][1]+w(e,t)]);return Qt(i,null,t)}function Qt(n,e,t){let i=n.length,s=[];if(i>3){let o=[],r=1-t.curveTightness;s.push({op:"move",data:[n[1][0],n[1][1]]});for(let a=1;a+2<i;a++){let l=n[a];o[0]=[l[0],l[1]],o[1]=[l[0]+(r*n[a+1][0]-r*n[a-1][0])/6,l[1]+(r*n[a+1][1]-r*n[a-1][1])/6],o[2]=[n[a+1][0]+(r*n[a][0]-r*n[a+2][0])/6,n[a+1][1]+(r*n[a][1]-r*n[a+2][1])/6],o[3]=[n[a+1][0],n[a+1][1]],s.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(e&&e.length===2){let a=t.maxRandomnessOffset;s.push({op:"lineTo",data:[e[0]+w(a,t),e[1]+w(a,t)]})}}else i===3?(s.push({op:"move",data:[n[1][0],n[1][1]]}),s.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):i===2&&s.push(...he(n[0][0],n[0][1],n[1][0],n[1][1],t));return s}function Zs(n,e,t,i,s,o,r,a){let l=[],h=[],c=w(.5,a)-Math.PI/2;h.push([w(o,a)+e+.9*i*Math.cos(c-n),w(o,a)+t+.9*s*Math.sin(c-n)]);for(let f=c;f<2*Math.PI+c-.01;f+=n){let d=[w(o,a)+e+i*Math.cos(f),w(o,a)+t+s*Math.sin(f)];l.push(d),h.push(d)}return h.push([w(o,a)+e+i*Math.cos(c+2*Math.PI+.5*r),w(o,a)+t+s*Math.sin(c+2*Math.PI+.5*r)]),h.push([w(o,a)+e+.98*i*Math.cos(c+r),w(o,a)+t+.98*s*Math.sin(c+r)]),h.push([w(o,a)+e+.9*i*Math.cos(c+.5*r),w(o,a)+t+.9*s*Math.sin(c+.5*r)]),[h,l]}function Qs(n,e,t,i,s,o,r,a,l){let h=o+w(.1,l),c=[];c.push([w(a,l)+e+.9*i*Math.cos(h-n),w(a,l)+t+.9*s*Math.sin(h-n)]);for(let f=h;f<=r;f+=n)c.push([w(a,l)+e+i*Math.cos(f),w(a,l)+t+s*Math.sin(f)]);return c.push([e+i*Math.cos(r),t+s*Math.sin(r)]),c.push([e+i*Math.cos(r),t+s*Math.sin(r)]),Qt(c,null,l)}function Bo(n,e,t,i,s,o,r,a){let l=[],h=[a.maxRandomnessOffset||1,(a.maxRandomnessOffset||1)+.3],c=[0,0],f=a.disableMultiStroke?1:2;for(let d=0;d<f;d++)d===0?l.push({op:"move",data:[r[0],r[1]]}):l.push({op:"move",data:[r[0]+w(h[0],a),r[1]+w(h[0],a)]}),c=[s+w(h[d],a),o+w(h[d],a)],l.push({op:"bcurveTo",data:[n+w(h[d],a),e+w(h[d],a),t+w(h[d],a),i+w(h[d],a),c[0],c[1]]});return l}function gt(n){return[...n]}function Gt(n,e){return Math.pow(n[0]-e[0],2)+Math.pow(n[1]-e[1],2)}function Ho(n,e,t){let i=Gt(e,t);if(i===0)return Gt(n,e);let s=((n[0]-e[0])*(t[0]-e[0])+(n[1]-e[1])*(t[1]-e[1]))/i;return s=Math.max(0,Math.min(1,s)),Gt(n,Se(e,t,s))}function Se(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t]}function Ki(n,e,t,i){let s=i||[];if((function(a,l){let h=a[l+0],c=a[l+1],f=a[l+2],d=a[l+3],u=3*c[0]-2*h[0]-d[0];u*=u;let p=3*c[1]-2*h[1]-d[1];p*=p;let g=3*f[0]-2*d[0]-h[0];g*=g;let v=3*f[1]-2*d[1]-h[1];return v*=v,u<g&&(u=g),p<v&&(p=v),u+p})(n,e)<t){let a=n[e+0];s.length?(o=s[s.length-1],r=a,Math.sqrt(Gt(o,r))>1&&s.push(a)):s.push(a),s.push(n[e+3])}else{let l=n[e+0],h=n[e+1],c=n[e+2],f=n[e+3],d=Se(l,h,.5),u=Se(h,c,.5),p=Se(c,f,.5),g=Se(d,u,.5),v=Se(u,p,.5),b=Se(g,v,.5);Ki([l,d,g,b],0,t,s),Ki([b,v,p,f],0,t,s)}var o,r;return s}function No(n,e){return Kt(n,0,n.length,e)}function Kt(n,e,t,i,s){let o=s||[],r=n[e],a=n[t-1],l=0,h=1;for(let c=e+1;c<t-1;++c){let f=Ho(n[c],r,a);f>l&&(l=f,h=c)}return Math.sqrt(l)>i?(Kt(n,e,h+1,i,o),Kt(n,h,t,i,o)):(o.length||o.push(r),o.push(a)),o}function Ks(n,e=.15,t){let i=[],s=(n.length-1)/3;for(let o=0;o<s;o++)Ki(n,3*o,e,i);return t&&t>0?Kt(i,0,i.length,t):i}var Z="none",We=class{constructor(e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1},this.config=e||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(e){return e?Object.assign({},this.defaultOptions,e):this.defaultOptions}_d(e,t,i){return{shape:e,sets:t||[],options:i||this.defaultOptions}}line(e,t,i,s,o){let r=this._o(o);return this._d("line",[Js(e,t,i,s,r)],r)}rectangle(e,t,i,s,o){let r=this._o(o),a=[],l=jo(e,t,i,s,r);if(r.fill){let h=[[e,t],[e+i,t],[e+i,t+s],[e,t+s]];r.fillStyle==="solid"?a.push(mt(h,r)):a.push(_e(h,r))}return r.stroke!==Z&&a.push(l),this._d("rectangle",a,r)}ellipse(e,t,i,s,o){let r=this._o(o),a=[],l=eo(i,s,r),h=Qi(e,t,r,l);if(r.fill)if(r.fillStyle==="solid"){let c=Qi(e,t,r,l).opset;c.type="fillPath",a.push(c)}else a.push(_e(h.estimatedPoints,r));return r.stroke!==Z&&a.push(h.opset),this._d("ellipse",a,r)}circle(e,t,i,s){let o=this.ellipse(e,t,i,i,s);return o.shape="circle",o}linearPath(e,t){let i=this._o(t);return this._d("linearPath",[Ft(e,!1,i)],i)}arc(e,t,i,s,o,r,a=!1,l){let h=this._o(l),c=[],f=Us(e,t,i,s,o,r,a,!0,h);if(a&&h.fill)if(h.fillStyle==="solid"){let d=Us(e,t,i,s,o,r,!0,!1,h);d.type="fillPath",c.push(d)}else c.push((function(d,u,p,g,v,b,y){let A=d,P=u,E=Math.abs(p/2),N=Math.abs(g/2);E+=w(.01*E,y),N+=w(.01*N,y);let Q=v,V=b;for(;Q<0;)Q+=2*Math.PI,V+=2*Math.PI;V-Q>2*Math.PI&&(Q=0,V=2*Math.PI);let ne=(V-Q)/y.curveStepCount,W=[];for(let ie=Q;ie<=V;ie+=ne)W.push([A+E*Math.cos(ie),P+N*Math.sin(ie)]);return W.push([A+E*Math.cos(V),P+N*Math.sin(V)]),W.push([A,P]),_e(W,y)})(e,t,i,s,o,r,h));return h.stroke!==Z&&c.push(f),this._d("arc",c,h)}curve(e,t){let i=this._o(t),s=[],o=To(e,i);if(i.fill&&i.fill!==Z&&e.length>=3){let r=Ks((function(a,l=0){let h=a.length;if(h<3)throw new Error("A curve must have at least three points.");let c=[];if(h===3)c.push(gt(a[0]),gt(a[1]),gt(a[2]),gt(a[2]));else{let f=[];f.push(a[0],a[0]);for(let p=1;p<a.length;p++)f.push(a[p]),p===a.length-1&&f.push(a[p]);let d=[],u=1-l;c.push(gt(f[0]));for(let p=1;p+2<f.length;p++){let g=f[p];d[0]=[g[0],g[1]],d[1]=[g[0]+(u*f[p+1][0]-u*f[p-1][0])/6,g[1]+(u*f[p+1][1]-u*f[p-1][1])/6],d[2]=[f[p+1][0]+(u*f[p][0]-u*f[p+2][0])/6,f[p+1][1]+(u*f[p][1]-u*f[p+2][1])/6],d[3]=[f[p+1][0],f[p+1][1]],c.push(d[1],d[2],d[3])}}return c})(e),10,(1+i.roughness)/2);i.fillStyle==="solid"?s.push(mt(r,i)):s.push(_e(r,i))}return i.stroke!==Z&&s.push(o),this._d("curve",s,i)}polygon(e,t){let i=this._o(t),s=[],o=Ft(e,!0,i);return i.fill&&(i.fillStyle==="solid"?s.push(mt(e,i)):s.push(_e(e,i))),i.stroke!==Z&&s.push(o),this._d("polygon",s,i)}path(e,t){let i=this._o(t),s=[];if(!e)return this._d("path",s,i);e=(e||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");let o=i.fill&&i.fill!=="transparent"&&i.fill!==Z,r=i.stroke!==Z,a=!!(i.simplification&&i.simplification<1),l=(function(h,c,f){let d=qs(Vs(Zi(h))),u=[],p=[],g=[0,0],v=[],b=()=>{v.length>=4&&p.push(...Ks(v,c)),v=[]},y=()=>{b(),p.length&&(u.push(p),p=[])};for(let{key:P,data:E}of d)switch(P){case"M":y(),g=[E[0],E[1]],p.push(g);break;case"L":b(),p.push([E[0],E[1]]);break;case"C":if(!v.length){let N=p.length?p[p.length-1]:g;v.push([N[0],N[1]])}v.push([E[0],E[1]]),v.push([E[2],E[3]]),v.push([E[4],E[5]]);break;case"Z":b(),p.push([g[0],g[1]])}if(y(),!f)return u;let A=[];for(let P of u){let E=No(P,f);E.length&&A.push(E)}return A})(e,1,a?4-4*i.simplification:(1+i.roughness)/2);if(o)if(i.combineNestedSvgPaths){let h=[];l.forEach(c=>h.push(...c)),i.fillStyle==="solid"?s.push(mt(h,i)):s.push(_e(h,i))}else l.forEach(h=>{i.fillStyle==="solid"?s.push(mt(h,i)):s.push(_e(h,i))});return r&&(a?l.forEach(h=>{s.push(Ft(h,!1,i))}):s.push((function(h,c){let f=qs(Vs(Zi(h))),d=[],u=[0,0],p=[0,0];for(let{key:g,data:v}of f)switch(g){case"M":{let b=1*(c.maxRandomnessOffset||0);d.push({op:"move",data:v.map(y=>y+w(b,c))}),p=[v[0],v[1]],u=[v[0],v[1]];break}case"L":d.push(...he(p[0],p[1],v[0],v[1],c)),p=[v[0],v[1]];break;case"C":{let[b,y,A,P,E,N]=v;d.push(...Bo(b,y,A,P,E,N,p,c)),p=[E,N];break}case"Z":d.push(...he(p[0],p[1],u[0],u[1],c)),p=[u[0],u[1]]}return{type:"path",ops:d}})(e,i))),this._d("path",s,i)}opsToPath(e){let t="";for(let i of e.ops){let s=i.data;switch(i.op){case"move":t+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `}}return t.trim()}toPaths(e){let t=e.sets||[],i=e.options||this.defaultOptions,s=[];for(let o of t){let r=null;switch(o.type){case"path":r={d:this.opsToPath(o),stroke:i.stroke,strokeWidth:i.strokeWidth,fill:Z};break;case"fillPath":r={d:this.opsToPath(o),stroke:Z,strokeWidth:0,fill:i.fill||Z};break;case"fillSketch":r=this.fillSketch(o,i)}r&&s.push(r)}return s}fillSketch(e,t){let i=t.fillWeight;return i<0&&(i=t.strokeWidth/2),{d:this.opsToPath(e),stroke:t.fill||Z,strokeWidth:i,fill:Z}}},Yi=class{constructor(e,t){this.canvas=e,this.ctx=this.canvas.getContext("2d"),this.gen=new We(t)}draw(e){let t=e.sets||[],i=e.options||this.getDefaultOptions(),s=this.ctx;for(let o of t)switch(o.type){case"path":s.save(),s.strokeStyle=i.stroke==="none"?"transparent":i.stroke,s.lineWidth=i.strokeWidth,i.strokeLineDash&&s.setLineDash(i.strokeLineDash),i.strokeLineDashOffset&&(s.lineDashOffset=i.strokeLineDashOffset),this._drawToContext(s,o),s.restore();break;case"fillPath":s.save(),s.fillStyle=i.fill||"";let r=e.shape==="curve"||e.shape==="polygon"?"evenodd":"nonzero";this._drawToContext(s,o,r),s.restore();break;case"fillSketch":this.fillSketch(s,o,i)}}fillSketch(e,t,i){let s=i.fillWeight;s<0&&(s=i.strokeWidth/2),e.save(),i.fillLineDash&&e.setLineDash(i.fillLineDash),i.fillLineDashOffset&&(e.lineDashOffset=i.fillLineDashOffset),e.strokeStyle=i.fill||"",e.lineWidth=s,this._drawToContext(e,t),e.restore()}_drawToContext(e,t,i="nonzero"){e.beginPath();for(let s of t.ops){let o=s.data;switch(s.op){case"move":e.moveTo(o[0],o[1]);break;case"bcurveTo":e.bezierCurveTo(o[0],o[1],o[2],o[3],o[4],o[5]);break;case"lineTo":e.lineTo(o[0],o[1])}}t.type==="fillPath"?e.fill(i):e.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(e,t,i,s,o){let r=this.gen.line(e,t,i,s,o);return this.draw(r),r}rectangle(e,t,i,s,o){let r=this.gen.rectangle(e,t,i,s,o);return this.draw(r),r}ellipse(e,t,i,s,o){let r=this.gen.ellipse(e,t,i,s,o);return this.draw(r),r}circle(e,t,i,s){let o=this.gen.circle(e,t,i,s);return this.draw(o),o}linearPath(e,t){let i=this.gen.linearPath(e,t);return this.draw(i),i}polygon(e,t){let i=this.gen.polygon(e,t);return this.draw(i),i}arc(e,t,i,s,o,r,a=!1,l){let h=this.gen.arc(e,t,i,s,o,r,a,l);return this.draw(h),h}curve(e,t){let i=this.gen.curve(e,t);return this.draw(i),i}path(e,t){let i=this.gen.path(e,t);return this.draw(i),i}},Ut="http://www.w3.org/2000/svg",Xi=class{constructor(e,t){this.svg=e,this.gen=new We(t)}draw(e){let t=e.sets||[],i=e.options||this.getDefaultOptions(),s=this.svg.ownerDocument||window.document,o=s.createElementNS(Ut,"g");for(let r of t){let a=null;switch(r.type){case"path":a=s.createElementNS(Ut,"path"),a.setAttribute("d",this.opsToPath(r)),a.setAttribute("stroke",i.stroke),a.setAttribute("stroke-width",i.strokeWidth+""),a.setAttribute("fill","none"),i.strokeLineDash&&a.setAttribute("stroke-dasharray",i.strokeLineDash.join(" ").trim()),i.strokeLineDashOffset&&a.setAttribute("stroke-dashoffset",""+i.strokeLineDashOffset);break;case"fillPath":a=s.createElementNS(Ut,"path"),a.setAttribute("d",this.opsToPath(r)),a.setAttribute("stroke","none"),a.setAttribute("stroke-width","0"),a.setAttribute("fill",i.fill||""),e.shape!=="curve"&&e.shape!=="polygon"||a.setAttribute("fill-rule","evenodd");break;case"fillSketch":a=this.fillSketch(s,r,i)}a&&o.appendChild(a)}return o}fillSketch(e,t,i){let s=i.fillWeight;s<0&&(s=i.strokeWidth/2);let o=e.createElementNS(Ut,"path");return o.setAttribute("d",this.opsToPath(t)),o.setAttribute("stroke",i.fill||""),o.setAttribute("stroke-width",s+""),o.setAttribute("fill","none"),i.fillLineDash&&o.setAttribute("stroke-dasharray",i.fillLineDash.join(" ").trim()),i.fillLineDashOffset&&o.setAttribute("stroke-dashoffset",""+i.fillLineDashOffset),o}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(e){return this.gen.opsToPath(e)}line(e,t,i,s,o){let r=this.gen.line(e,t,i,s,o);return this.draw(r)}rectangle(e,t,i,s,o){let r=this.gen.rectangle(e,t,i,s,o);return this.draw(r)}ellipse(e,t,i,s,o){let r=this.gen.ellipse(e,t,i,s,o);return this.draw(r)}circle(e,t,i,s){let o=this.gen.circle(e,t,i,s);return this.draw(o)}linearPath(e,t){let i=this.gen.linearPath(e,t);return this.draw(i)}polygon(e,t){let i=this.gen.polygon(e,t);return this.draw(i)}arc(e,t,i,s,o,r,a=!1,l){let h=this.gen.arc(e,t,i,s,o,r,a,l);return this.draw(h)}curve(e,t){let i=this.gen.curve(e,t);return this.draw(i)}path(e,t){let i=this.gen.path(e,t);return this.draw(i)}},Wo={canvas:(n,e)=>new Yi(n,e),svg:(n,e)=>new Xi(n,e),generator:n=>new We(n),newSeed:()=>We.newSeed()},De=Wo;var Ji=class extends HTMLElement{connectedCallback(){let e=+this.getAttribute("h")||120,t=this.hasAttribute("round")?`width:${e}px;flex:none;`:"";this.style.cssText+=`display:block;position:relative;height:${e}px;--oi-w:${Math.round(e*4/3)}px;${t}`;let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.style.cssText="position:absolute;inset:0;width:100%;height:100%",this.prepend(i);let s=()=>{let r=this.clientWidth;if(!r)return;i.replaceChildren(),i.setAttribute("viewBox",`0 0 ${r} ${e}`);let a=getComputedStyle(this),l=a.getPropertyValue("--oi-stroke").trim()||"#8a8a85",h=a.getPropertyValue("--oi-fill").trim()||"#f3f1ea",c=a.getPropertyValue("--accent").trim()||"#c2410c",f=a.getPropertyValue("--paper").trim()||"#fdfcf8",d=De.svg(i),u={roughness:1.6,stroke:l,seed:7},p={roughness:1.6,stroke:a.getPropertyValue("--oi-line").trim()||"#cfcfc8",seed:3},g={...u,stroke:c,fill:c,fillStyle:"solid"};if(this.hasAttribute("round"))i.appendChild(d.circle(r/2,e/2,Math.min(r,e)-6,{...u,fill:h,fillStyle:"solid"}));else{let b=this.hasAttribute("upload")?{strokeLineDash:[8,6]}:{};i.appendChild(d.rectangle(3,3,r-6,e-6,{...u,...b,fill:h,fillStyle:"hachure",hachureGap:12,fillWeight:.6})),this.hasAttribute("cross")&&(i.appendChild(d.line(3,3,r-3,e-3,p)),i.appendChild(d.line(r-3,3,3,e-3,p)))}if(this.hasAttribute("pin")){let b=e*.38;i.appendChild(d.circle(r/2,b,22,g)),i.appendChild(d.line(r/2,b+10,r/2,b+24,{...u,stroke:c,strokeWidth:2}))}if(this.hasAttribute("play")){let b=e*.42;i.appendChild(d.circle(r/2,b,Math.min(56,e*.4),{...u,stroke:c,fill:f,fillStyle:"solid",strokeWidth:2})),i.appendChild(d.polygon([[r/2-7,b-10],[r/2-7,b+10],[r/2+11,b]],g))}if(this.hasAttribute("upload")){let b=e*.38;i.appendChild(d.line(r/2,b+14,r/2,b-14,{...u,strokeWidth:2.2})),i.appendChild(d.linearPath([[r/2-11,b-3],[r/2,b-15],[r/2+11,b-3]],{...u,strokeWidth:2.2}))}let v=+this.getAttribute("dots");if(v>0){let b=e-16;for(let y=0;y<v;y++){let A=r/2+(y-(v-1)/2)*16;i.appendChild(d.circle(A,b,7,y===0?{...u,stroke:c,fill:c,fillStyle:"solid"}:{...u,fill:f,fillStyle:"solid"}))}for(let y of[-1,1]){let A=y<0?22:r-22;i.appendChild(d.circle(A,e/2,26,{...u,fill:f,fillStyle:"solid"})),i.appendChild(d.linearPath([[A-y*3,e/2-6],[A+y*3,e/2],[A-y*3,e/2+6]],{...u,strokeWidth:1.8}))}}};this.draw=s,s(),new ResizeObserver(s).observe(this);let o=this.getAttribute("label");if(o){let r=document.createElement("span");r.className="ph-label",r.textContent=o,this.appendChild(r)}}};customElements.get("oi-placeholder")||customElements.define("oi-placeholder",Ji);var _=(n,e,t=1)=>`M${n-t} ${e}a${t} ${t} 0 1 0 ${2*t} 0a${t} ${t} 0 1 0 ${-2*t} 0`,fe=(n,e,t,i,s)=>`M${n+s} ${e}h${t-2*s}a${s} ${s} 0 0 1 ${s} ${s}v${i-2*s}a${s} ${s} 0 0 1 ${-s} ${s}h${2*s-t}a${s} ${s} 0 0 1 ${-s} ${-s}v${2*s-i}a${s} ${s} 0 0 1 ${s} ${-s}z`,es={home:["M3 11.5L12 3l9 8.5","M5.5 10v10.5h13V10","M10 20.5v-6h4v6"],search:["M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z","M16 16l5 5"],heart:["M12 20.5C5 15 3 11.5 3 8.6A4.6 4.6 0 0 1 12 7A4.6 4.6 0 0 1 21 8.6c0 2.9-2 6.4-9 11.9z"],comment:["M4 5h16v11H10l-4 4v-4H4z"],share:["M21 3L3 10.5l7 2.5 2.5 7z","M10 13L21 3"],bookmark:["M6 3h12v18l-6-4.5L6 21z"],plus:["M12 4v16M4 12h16"],bell:["M6 16.5V11a6 6 0 0 1 12 0v5.5l2 2H4z","M10 21h4"],user:["M12 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z","M4 21c0-4.5 3.6-7 8-7s8 2.5 8 7"],users:["M9 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z","M2 20c0-4 3-6 7-6s7 2 7 6","M16 4.5a3.3 3.3 0 0 1 0 6.3","M18 14.5c2.5.6 4 2.4 4 5.5"],mail:["M3 5.5h18v13H3z","M3 6l9 7 9-7"],settings:["M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z","M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3","M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"],camera:["M3 8h4l2-3h6l2 3h4v12H3z","M12 10.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"],image:["M3 5h18v14H3z","M3 17l6-6 5 5 3-3 4 4",_(8.5,9.5,1.5)],video:["M3 6h13v12H3z","M16 10l5-3v10l-5-3"],star:["M12 3l2.7 5.9 6.3.7-4.7 4.3 1.3 6.3L12 17l-5.6 3.2 1.3-6.3L3 9.6l6.3-.7z"],menu:["M4 6h16M4 12h16M4 18h16"],more:[_(5,12),_(12,12),_(19,12)],close:["M5 5l14 14M19 5L5 19"],check:["M4 12.5l5 5L20 6.5"],"arrow-right":["M4 12h16M14 6l6 6-6 6"],"arrow-left":["M20 12H4M10 6l-6 6 6 6"],"chevron-down":["M6 9l6 6 6-6"],"chevron-right":["M9 6l6 6-6 6"],play:["M7 4l13 8-13 8z"],pin:["M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z","M12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],trash:["M4 7h16M9 7V4h6v3","M6 7l1 14h10l1-14"],edit:["M4 20l1-5L16 4l4 4L9 19z","M14 6l4 4"],upload:["M12 16V4M6 10l6-6 6 6","M4 20h16"],download:["M12 4v12M6 10l6 6 6-6","M4 20h16"],lock:["M6 11h12v10H6z","M8.5 11V8a3.5 3.5 0 0 1 7 0v3"],cart:["M3 4h3l2.5 11h10L21 7H7",_(10,20),_(18,20)],chart:["M4 4v16h16","M8 15v-4M12 15V8M16 15v-6"],calendar:["M4 6h16v14H4z","M4 10h16M8 3v4M16 3v4"],filter:["M3 5h18l-7 8v6l-4-2v-4z"],info:["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z","M12 11v6",_(12,7.5,.6)],send:["M3 11l18-8-8 18-2-8z"],minus:["M4 12h16"],"arrow-up":["M12 20V4M6 10l6-6 6 6"],"arrow-down":["M12 4v16M6 14l6 6 6-6"],"chevron-up":["M6 15l6-6 6 6"],"chevron-left":["M15 6l-6 6 6 6"],external:["M14 4h6v6","M20 4l-9 9","M18 14v6H4V6h6"],link:["M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1","M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"],refresh:["M20 12a8 8 0 1 1-2.3-5.7","M20 3.5V8h-4.5"],login:["M15 4h5v16h-5","M10 8l4 4-4 4","M14 12H3"],logout:["M9 4H4v16h5","M16 8l4 4-4 4","M20 12H9"],grid:["M4 4h7v7H4z","M13 4h7v7h-7z","M4 13h7v7H4z","M13 13h7v7h-7z"],list:["M9 6h12M9 12h12M9 18h12",_(4.5,6),_(4.5,12),_(4.5,18)],pause:["M7 4h3v16H7z","M14 4h3v16h-3z"],"check-circle":[_(12,12,9),"M8 12.5l3 3 5-6"],warning:["M12 3L2 20h20z","M12 10v4",_(12,17,.6)],help:[_(12,12,9),"M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7v.5",_(12,17,.6)],eye:["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z",_(12,12,3)],"eye-off":["M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z",_(12,12,3),"M4 4l16 16"],unlock:["M6 11h12v10H6z","M8.5 11V8a3.5 3.5 0 0 1 6.8-1.2"],key:[_(7.5,16.5,4),"M10.5 13.5L20 4","M16.5 7.5l2.5 2.5","M18.5 5.5l2 2"],"thumbs-up":["M7 10v11H3V10z","M7 10l4-8a2.5 2.5 0 0 1 3 2.5V9h5.5a2 2 0 0 1 2 2.3l-1.4 8A2 2 0 0 1 18 21H7"],smile:[_(12,12,9),"M8 14.5a5 5 0 0 0 8 0",_(9,9.5,.6),_(15,9.5,.6)],flag:["M5 21V4","M5 4h12l-2.5 4.5L17 13H5"],zap:["M13 2L4 14h7l-1 8 9-12h-7z"],phone:["M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"],inbox:["M3 13l3-8h12l3 8v6H3z","M3 13h5l1 3h6l1-3h5"],paperclip:["M20 11l-8.5 8.5a5 5 0 0 1-7-7L13 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L14 7"],mic:[fe(9,2,6,12,3),"M5 11a7 7 0 0 0 14 0","M12 18v4M8 22h8"],volume:["M4 9h4l5-4v14l-5-4H4z","M16 9a4 4 0 0 1 0 6","M18.5 6.5a7.5 7.5 0 0 1 0 11"],music:["M9 18V5l12-2v13",_(6,18,3),_(18,16,3)],wifi:["M2 8.5a15 15 0 0 1 20 0","M5 12a10 10 0 0 1 14 0","M8.5 15.5a5 5 0 0 1 7 0",_(12,19)],hash:["M4 9h16M4 15h16","M10 3L8 21M16 3l-2 18"],at:[_(12,12,4),"M16 8v5a2.5 2.5 0 0 0 5 0v-1a9 9 0 1 0-3.5 7.1"],rss:["M5 11a8 8 0 0 1 8 8","M5 5a14 14 0 0 1 14 14",_(6,18,1.2)],file:["M5 2h9l5 5v15H5z","M14 2v5h5"],folder:["M3 5h6l2 3h10v12H3z"],copy:["M9 9h11v11H9z","M5 15H4V4h11v1"],book:["M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4z","M20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"],briefcase:["M3 7h18v13H3z","M9 7V4h6v3","M3 13h18"],printer:["M6 9V3h12v6","M6 17H3V9h18v8h-3","M6 14h12v7H6z"],code:["M8 7l-5 5 5 5","M16 7l5 5-5 5","M14 4l-4 16"],clock:[_(12,12,9),"M12 7v5l3.5 2"],bag:["M4 7h16l-1 14H5z","M8.5 10V6a3.5 3.5 0 0 1 7 0v4"],tag:["M3 3h8l10 10-8 8L3 11z",_(7.5,7.5,1.5)],gift:["M3 8h18v4H3z","M5 12v9h14v-9","M12 8v13","M12 8C10 4 6.5 4.5 7.5 7c.5 1 2.5 1 4.5 1z","M12 8c2-4 5.5-3.5 4.5-1-.5 1-2.5 1-4.5 1z"],"credit-card":["M2 6h20v13H2z","M2 10h20","M5 15h4"],dollar:["M12 2v20","M17 6H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"],truck:["M2 5h12v11H2z","M14 9h4l4 4v3h-8",_(6,18,2),_(18,18,2)],globe:[_(12,12,9),"M3 12h18","M12 3a4.5 9 0 0 1 0 18a4.5 9 0 0 1 0-18"],map:["M3 6l6-2 6 2 6-2v14l-6 2-6-2-6 2z","M9 4v14M15 6v14"],sun:[_(12,12,4),"M12 2v2M12 20v2M2 12h2M20 12h2","M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"],moon:["M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z"],cloud:["M7 19a5 5 0 0 1-.5-10A6 6 0 0 1 18 9a5 5 0 0 1 0 10z"],facebook:[_(12,12,9),"M15.5 8H14a2 2 0 0 0-2 2v11","M9.5 13h5"],x:["M4 4h4.5L20 20h-4.5z","M20 4l-6.5 7.5M10.5 13.5L4 20"],instagram:[fe(3,3,18,18,5),_(12,12,4),_(17,7,.7)],linkedin:[fe(3,3,18,18,2),"M7.5 10.5v6",_(7.5,7.5,.8),"M11 16.5v-6M11 13a2.5 2.5 0 0 1 5 0v3.5"],youtube:[fe(2,5,20,14,4),"M10 9l5 3-5 3z"],github:["M8 21v-3.5c-3.5-.5-5-2.5-5-6 0-1.3.4-2.4 1.2-3.3-.3-1.2-.2-2.4.3-3.7 1.4 0 2.6.7 3.7 1.5a10 10 0 0 1 7.6 0c1.1-.8 2.3-1.5 3.7-1.5.5 1.3.6 2.5.3 3.7.8.9 1.2 2 1.2 3.3 0 3.5-1.5 5.5-5 6V21","M8 18.5c-2.5.5-3.5-1-4.5-2"],tiktok:["M14 3v12.5a3.5 3.5 0 1 1-3.5-3.5","M14 3c.5 2.5 2.5 4.5 5 4.5"],whatsapp:["M4.6 16.3A8.5 8.5 0 1 1 7.8 19.4L3.5 20.5z","M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.5-2-1-1 .8c-1-.5-2-1.5-2.5-2.5l.8-1-1-2z"],telegram:[_(12,12,9),"M6.5 12L17 7.5 15 17l-4.5-3.5z","M10.5 13.5L14 10.5"],discord:["M5 17c0-4 1-7.5 3-10.5 1.2-.5 2.5-.8 3-.8l.5 1h1l.5-1c.5 0 1.8.3 3 .8 2 3 3 6.5 3 10.5-1.3 1.2-2.8 1.8-4.2 2.2l-1-2c-1.3.3-3.3.3-4.6 0l-1 2C7.8 18.8 6.3 18.2 5 17z",_(9.5,13,1.2),_(14.5,13,1.2)],pinterest:[_(12,12,9),"M9 13c-.7-.8-1-1.7-1-2.8a4 4 0 0 1 8 .3c0 2.5-1.5 4.5-3.5 4.5-1 0-1.8-.6-1.6-1.6l.8-3.4","M11.5 12l-2 9"],reddit:["M3.5 14a8.5 5.5 0 1 0 17 0a8.5 5.5 0 1 0-17 0","M12 8.5l1.5-5 4 1",_(18.5,4.5,1.3),_(9,13.5,.9),_(15,13.5,.9),"M9 16.5c1.8 1.2 4.2 1.2 6 0"],snapchat:["M12 3c3 0 5 2.2 5 5v2.5l2-.5c.5 0 .8.6.3 1l-2.3 1.3c.6 2 2 3.3 4 3.8-.3.8-1.5 1-2.5 1.2l-.5 1.4-2-.2c-1 .3-2 1.5-4 1.5s-3-1.2-4-1.5l-2 .2-.5-1.4c-1-.2-2.2-.4-2.5-1.2 2-.5 3.4-1.8 4-3.8L4.7 11c-.5-.4-.2-1 .3-1l2 .5V8c0-2.8 2-5 5-5z"],slack:[fe(8.5,2,3,9,1.5),fe(13,8.5,9,3,1.5),fe(12.5,13,3,9,1.5),fe(2,12.5,9,3,1.5)],spotify:[_(12,12,9),"M7 9.5c3.5-1 7.5-.7 10.5 1","M7.5 12.8c3-.8 6-.5 8.5 1","M8 15.8c2.5-.6 4.5-.4 6.5.7"],apple:["M12 7.5c1-.6 2-.9 3-.9 2 0 3.5 1 4.3 2.4-1.7 1-2.6 2.6-2.3 4.6.2 1.5 1 2.6 2.3 3.2-.8 2.3-2.4 4.7-4.3 4.7-1 0-1.8-.6-3-.6s-2 .6-3 .6c-2.3 0-5-4.5-5-8.5 0-3.2 2-5.4 4.5-5.4 1.3 0 2.5.6 3.5.9z","M12 6.5c0-2 1.3-3.5 3.3-3.8 0 2-1.3 3.6-3.3 3.8z"],google:["M20 12h-8","M20 12a8 8 0 1 1-2.3-5.7"],microsoft:["M3 3h8.5v8.5H3z","M12.5 3H21v8.5h-8.5z","M3 12.5h8.5V21H3z","M12.5 12.5H21V21h-8.5z"],dribbble:[_(12,12,9),"M3.2 10.5c6 .5 11.5-1.5 14-5.5","M8.5 3.7c3.5 4 6 10 7 16.5","M5.5 18.5c2.5-4 7-6 15.3-4.2"],twitch:["M4 6l1.5-3H20v11l-4 4h-4l-3 3v-3H4z","M11 7v4M15 7v4"]},Uh=Object.keys(es);var ts=class extends HTMLElement{connectedCallback(){let e=es[this.getAttribute("name")];if(!e)return;let t=+this.getAttribute("size")||22;this.style.cssText+=`display:inline-block;vertical-align:middle;width:${t}px;height:${t}px;line-height:0`;let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 24 24"),i.setAttribute("width",t),i.setAttribute("height",t);let s=De.svg(i),o=this.hasAttribute("filled");for(let r of e)i.appendChild(s.path(r,{roughness:.9,strokeWidth:1.6,stroke:"currentColor",seed:11,...o?{fill:"currentColor",fillStyle:"solid"}:{}}));this.replaceChildren(i)}};customElements.get("oi-icon")||customElements.define("oi-icon",ts);var io={line:[3,5,4,7,6,9,8],area:[3,5,4,7,6,9,8],bar:[5,8,3,9,6,7],pie:[40,30,20,10],donut:[40,30,20,10]},is=class extends HTMLElement{connectedCallback(){let e=+this.getAttribute("h")||200,t=this.getAttribute("kind")||"line",i=(this.getAttribute("values")||"").split(",").map(l=>l.trim()).filter(Boolean).map(Number).filter(Number.isFinite),s=i.length?i:io[t]||io.line;this.style.cssText+=`display:block;position:relative;height:${e}px;--oi-w:${Math.round(e*4/3)}px`;let o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.style.cssText="position:absolute;inset:0;width:100%;height:100%",this.prepend(o);let r=()=>{let l=this.clientWidth;if(!l)return;o.replaceChildren(),o.setAttribute("viewBox",`0 0 ${l} ${e}`);let h=getComputedStyle(this),c=h.getPropertyValue("--oi-stroke").trim()||"#8a8a85",f=h.getPropertyValue("--oi-chart").trim()||h.getPropertyValue("--accent").trim()||"#c2410c",d=De.svg(o),u={roughness:1.4,stroke:c,seed:5},p=Math.max(...s,1),g={l:34,r:12,t:14,b:26},v=l-g.l-g.r,b=e-g.t-g.b;if(t==="pie"||t==="donut"){let y=Math.min(l,e)/2-8,A=l/2,P=e/2,E=s.reduce((V,ne)=>V+ne,0)||1,N=-Math.PI/2,Q=[f,c,"#cfcfc8","#e7e5dc","#b8b5a8"];s.forEach((V,ne)=>{let W=Math.max(V,0)/E*Math.PI*2,ie={...u,fill:Q[ne%Q.length],fillStyle:ne===0?"solid":"hachure",hachureGap:6,fillWeight:1};W>=Math.PI*2-.001?o.appendChild(d.circle(A,P,y*2,ie)):W>.01&&o.appendChild(d.arc(A,P,y*2,y*2,N,N+W,!0,ie)),N+=W}),t==="donut"&&o.appendChild(d.circle(A,P,y,{...u,fill:h.getPropertyValue("--paper").trim()||"#fdfcf8",fillStyle:"solid"}));return}o.appendChild(d.line(g.l,g.t,g.l,g.t+b,u)),o.appendChild(d.line(g.l,g.t+b,g.l+v,g.t+b,u));for(let y=1;y<=3;y++)o.appendChild(d.line(g.l,g.t+b*y/4,g.l+v,g.t+b*y/4,{...u,stroke:"#d8d6cc",roughness:.8}));if(t==="bar"){let y=v/s.length;s.forEach((A,P)=>{let E=A/p*b;o.appendChild(d.rectangle(g.l+P*y+y*.18,g.t+b-E,y*.64,E,{...u,stroke:f,fill:f,fillStyle:"hachure",hachureGap:5,fillWeight:1.2}))})}else{let y=s.map((A,P)=>[g.l+P/Math.max(s.length-1,1)*v,g.t+b-A/p*b]);t==="area"&&o.appendChild(d.polygon([[y[0][0],g.t+b],...y,[y.at(-1)[0],g.t+b]],{roughness:1,stroke:"none",fill:f,fillStyle:"hachure",hachureGap:7,fillWeight:.8,seed:2})),o.appendChild(d.linearPath(y,{...u,stroke:f,strokeWidth:2.2})),y.forEach(([A,P])=>o.appendChild(d.circle(A,P,6,{...u,stroke:f,fill:f,fillStyle:"solid"})))}};this.draw=r,r(),new ResizeObserver(r).observe(this);let a=this.getAttribute("label");if(a){let l=document.createElement("span");l.className="ph-label ph-corner",l.textContent=a,this.appendChild(l)}}};customElements.get("oi-chart")||customElements.define("oi-chart",is);var H=(n,e=document)=>[...e.querySelectorAll(n)],Ve=window.OPENINK||{languages:[],first:""};function te(){requestAnimationFrame(()=>H("*").forEach(n=>{typeof n.wiredRender=="function"&&n.offsetParent!==null&&n.wiredRender()}))}var so;window.addEventListener("resize",()=>{clearTimeout(so),so=setTimeout(te,150)});function Xt(n,{remember:e=!0}={}){let t=document.getElementById(n);!t||!t.classList.contains("screen")||(H(".screen").forEach(i=>i.classList.remove("on")),t.classList.add("on"),H("header nav").forEach(i=>i.hidden=i.dataset.nav!==t.dataset.nav),document.title=t.dataset.title+" \xB7 "+document.title.split(" \xB7 ").pop(),e&&history.replaceState(null,"","#"+n),window.scrollTo({top:0}),te())}function wt(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("show"),clearTimeout(wt.timer),wt.timer=setTimeout(()=>e.classList.remove("show"),2200)}function oo(){window.addEventListener("hashchange",()=>Xt(location.hash.slice(1))),Xt(location.hash.slice(1)||Ve.first,{remember:!1})}var no="openink_lang";function ss(n){document.documentElement.lang=n;try{localStorage.setItem(no,n)}catch{}H("[data-lang]").forEach(e=>e.classList.toggle("on",e.dataset.lang===n)),H("*").forEach(e=>{for(let t of e.attributes){let i=t.name.match(/^data-(.+)-([a-z]{2,3})$/i);i&&i[2]===n&&i[1]!=="lang"&&e.setAttribute(i[1],t.value)}}),te()}function ro(){if(!Ve.languages.length)return;let n=null;try{n=localStorage.getItem(no)}catch{}ss(Ve.languages.includes(n)?n:Ve.languages[0])}var Do=18240/25.4;function ao(){document.documentElement.classList.add("oi-print");let n=H(".screen");n.forEach(ho);let e=document.documentElement.scrollHeight,t=n.map((i,s)=>{let o=i.getBoundingClientRect(),r=o.top+scrollY,a=(s===0?r:0)+(s===n.length-1?e-(r+o.height):0),l=(Do-a)*.97;return{zoom:o.height>l?Math.max(l/o.height,.3):1,width:o.width}});H("*").forEach(i=>i.wiredRender?i.wiredRender(!0):i.draw?.()),n.forEach((i,s)=>{let{zoom:o,width:r}=t[s];o!==1&&(Object.assign(i.style,{zoom:String(o),width:`${r}px`,marginInline:"auto"}),H("*",i).forEach(a=>a.canvasSize&&a.lastSize&&(a.lastSize=a.canvasSize())))})}function lo(){document.documentElement.classList.remove("oi-print"),H(".screen").forEach(ho),te()}var ho=n=>Object.assign(n.style,{zoom:"",width:"",marginInline:""});function co(){window.addEventListener("beforeprint",ao),window.addEventListener("afterprint",lo),window.openink={...window.openink,preparePrint:ao,endPrint:lo}}function os(n,e){n.forEach(t=>{t.classList.toggle("on",t===e),t.setAttribute("elevation",t===e?3:1)})}var Jt=()=>H(".modal.on").forEach(n=>n.classList.remove("on"));document.addEventListener("click",n=>{let e=n.target.closest("[data-lang]");if(e)return ss(e.dataset.lang);n.target.closest("[data-close]")&&Jt();let t=n.target.closest("[data-open]");t&&(Jt(),document.querySelector(`.modal[data-modal="${CSS.escape(t.dataset.open)}"]`)?.classList.add("on"),te());let i=n.target.closest("[data-chips] .chip");i&&(os(H(".chip",i.parentElement),i),wt("Results updated"));let s=n.target.closest("[data-tabs] .tab");if(s){let l=s.closest("[data-tabs]");os(H(".tab",l),s),H(".tab-panel",l).forEach(h=>h.classList.toggle("on",h.dataset.panel===s.dataset.tab)),te()}let o=n.target.closest(".tabbar .tab-item");o&&os(H(".tab-item",o.parentElement),o);let r=n.target.closest("[data-go]");r&&(Jt(),Xt(r.dataset.go));let a=n.target.closest("[data-toast]");a&&wt(a.dataset.toast)});document.addEventListener("keydown",n=>n.key==="Escape"&&Jt());document.addEventListener("toggle",n=>n.target.tagName==="DETAILS"&&te(),!0);window.addEventListener("DOMContentLoaded",()=>{ro(),oo(),co()});})();
/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
lit-html/lit-html.js:
lit-element/lit-element.js:
@lit/reactive-element/decorators/custom-element.js:
@lit/reactive-element/decorators/property.js:
@lit/reactive-element/decorators/state.js:
@lit/reactive-element/decorators/base.js:
@lit/reactive-element/decorators/event-options.js:
@lit/reactive-element/decorators/query.js:
@lit/reactive-element/decorators/query-all.js:
@lit/reactive-element/decorators/query-async.js:
@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/
