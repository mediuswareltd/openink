(()=>{var wt=window,xt=wt.ShadowRoot&&(wt.ShadyCSS===void 0||wt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Jt=Symbol(),rs=new WeakMap,Ve=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==Jt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(xt&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=rs.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&rs.set(t,e))}return e}toString(){return this.cssText}},as=n=>new Ve(typeof n=="string"?n:n+"",void 0,Jt),x=(n,...e)=>{let t=n.length===1?n[0]:e.reduce(((i,s,o)=>i+(r=>{if(r._$cssResult$===!0)return r.cssText;if(typeof r=="number")return r;throw Error("Value passed to 'css' function must be a 'css' function result: "+r+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(s)+n[o+1]),n[0]);return new Ve(t,n,Jt)},ei=(n,e)=>{xt?n.adoptedStyleSheets=e.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):e.forEach((t=>{let i=document.createElement("style"),s=wt.litNonce;s!==void 0&&i.setAttribute("nonce",s),i.textContent=t.cssText,n.appendChild(i)}))},kt=xt?n=>n:n=>n instanceof CSSStyleSheet?(e=>{let t="";for(let i of e.cssRules)t+=i.cssText;return as(t)})(n):n;var ti,Mt=window,ls=Mt.trustedTypes,uo=ls?ls.emptyScript:"",hs=Mt.reactiveElementPolyfillSupport,si={toAttribute(n,e){switch(e){case Boolean:n=n?uo:null;break;case Object:case Array:n=n==null?n:JSON.stringify(n)}return n},fromAttribute(n,e){let t=n;switch(e){case Boolean:t=n!==null;break;case Number:t=n===null?null:Number(n);break;case Object:case Array:try{t=JSON.parse(n)}catch{t=null}}return t}},cs=(n,e)=>e!==n&&(e==e||n==n),ii={attribute:!0,type:String,converter:si,reflect:!1,hasChanged:cs},oi="finalized",ne=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(e){var t;this.finalize(),((t=this.h)!==null&&t!==void 0?t:this.h=[]).push(e)}static get observedAttributes(){this.finalize();let e=[];return this.elementProperties.forEach(((t,i)=>{let s=this._$Ep(i,t);s!==void 0&&(this._$Ev.set(s,i),e.push(s))})),e}static createProperty(e,t=ii){if(t.state&&(t.attribute=!1),this.finalize(),this.elementProperties.set(e,t),!t.noAccessor&&!this.prototype.hasOwnProperty(e)){let i=typeof e=="symbol"?Symbol():"__"+e,s=this.getPropertyDescriptor(e,i,t);s!==void 0&&Object.defineProperty(this.prototype,e,s)}}static getPropertyDescriptor(e,t,i){return{get(){return this[t]},set(s){let o=this[e];this[t]=s,this.requestUpdate(e,o,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)||ii}static finalize(){if(this.hasOwnProperty(oi))return!1;this[oi]=!0;let e=Object.getPrototypeOf(this);if(e.finalize(),e.h!==void 0&&(this.h=[...e.h]),this.elementProperties=new Map(e.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let t=this.properties,i=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(let s of i)this.createProperty(s,t[s])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let i=new Set(e.flat(1/0).reverse());for(let s of i)t.unshift(kt(s))}else e!==void 0&&t.push(kt(e));return t}static _$Ep(e,t){let i=t.attribute;return i===!1?void 0:typeof i=="string"?i:typeof e=="string"?e.toLowerCase():void 0}_$Eu(){var e;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(e=this.constructor.h)===null||e===void 0||e.forEach((t=>t(this)))}addController(e){var t,i;((t=this._$ES)!==null&&t!==void 0?t:this._$ES=[]).push(e),this.renderRoot!==void 0&&this.isConnected&&((i=e.hostConnected)===null||i===void 0||i.call(e))}removeController(e){var t;(t=this._$ES)===null||t===void 0||t.splice(this._$ES.indexOf(e)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((e,t)=>{this.hasOwnProperty(t)&&(this._$Ei.set(t,this[t]),delete this[t])}))}createRenderRoot(){var e;let t=(e=this.shadowRoot)!==null&&e!==void 0?e:this.attachShadow(this.constructor.shadowRootOptions);return ei(t,this.constructor.elementStyles),t}connectedCallback(){var e;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$ES)===null||e===void 0||e.forEach((t=>{var i;return(i=t.hostConnected)===null||i===void 0?void 0:i.call(t)}))}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$ES)===null||e===void 0||e.forEach((t=>{var i;return(i=t.hostDisconnected)===null||i===void 0?void 0:i.call(t)}))}attributeChangedCallback(e,t,i){this._$AK(e,i)}_$EO(e,t,i=ii){var s;let o=this.constructor._$Ep(e,i);if(o!==void 0&&i.reflect===!0){let r=(((s=i.converter)===null||s===void 0?void 0:s.toAttribute)!==void 0?i.converter:si).toAttribute(t,i.type);this._$El=e,r==null?this.removeAttribute(o):this.setAttribute(o,r),this._$El=null}}_$AK(e,t){var i;let s=this.constructor,o=s._$Ev.get(e);if(o!==void 0&&this._$El!==o){let r=s.getPropertyOptions(o),a=typeof r.converter=="function"?{fromAttribute:r.converter}:((i=r.converter)===null||i===void 0?void 0:i.fromAttribute)!==void 0?r.converter:si;this._$El=o,this[o]=a.fromAttribute(t,r.type),this._$El=null}}requestUpdate(e,t,i){let s=!0;e!==void 0&&(((i=i||this.constructor.getPropertyOptions(e)).hasChanged||cs)(this[e],t)?(this._$AL.has(e)||this._$AL.set(e,t),i.reflect===!0&&this._$El!==e&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(e,i))):s=!1),!this.isUpdatePending&&s&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((s,o)=>this[o]=s)),this._$Ei=void 0);let t=!1,i=this._$AL;try{t=this.shouldUpdate(i),t?(this.willUpdate(i),(e=this._$ES)===null||e===void 0||e.forEach((s=>{var o;return(o=s.hostUpdate)===null||o===void 0?void 0:o.call(s)})),this.update(i)):this._$Ek()}catch(s){throw t=!1,this._$Ek(),s}t&&this._$AE(i)}willUpdate(e){}_$AE(e){var t;(t=this._$ES)===null||t===void 0||t.forEach((i=>{var s;return(s=i.hostUpdated)===null||s===void 0?void 0:s.call(i)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(e){return!0}update(e){this._$EC!==void 0&&(this._$EC.forEach(((t,i)=>this._$EO(i,this[i],t))),this._$EC=void 0),this._$Ek()}updated(e){}firstUpdated(e){}};ne[oi]=!0,ne.elementProperties=new Map,ne.elementStyles=[],ne.shadowRootOptions={mode:"open"},hs?.({ReactiveElement:ne}),((ti=Mt.reactiveElementVersions)!==null&&ti!==void 0?ti:Mt.reactiveElementVersions=[]).push("1.6.3");var ni,_t=window,Re=_t.trustedTypes,ds=Re?Re.createPolicy("lit-html",{createHTML:n=>n}):void 0,ai="$lit$",he=`lit$${(Math.random()+"").slice(9)}$`,vs="?"+he,fo=`<${vs}>`,me=document,Ue=()=>me.createComment(""),Fe=n=>n===null||typeof n!="object"&&typeof n!="function",ys=Array.isArray,mo=n=>ys(n)||typeof n?.[Symbol.iterator]=="function",ri=`[ 	
\f\r]`,qe=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ps=/-->/g,us=/>/g,ue=RegExp(`>|${ri}(?:([^\\s"'>=/]+)(${ri}*=${ri}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),fs=/'/g,ms=/"/g,ws=/^(?:script|style|textarea|title)$/i,xs=n=>(e,...t)=>({_$litType$:n,strings:e,values:t}),k=xs(1),Fo=xs(2),ge=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),gs=new WeakMap,fe=me.createTreeWalker(me,129,null,!1);function ks(n,e){if(!Array.isArray(n)||!n.hasOwnProperty("raw"))throw Error("invalid template strings array");return ds!==void 0?ds.createHTML(e):e}var go=(n,e)=>{let t=n.length-1,i=[],s,o=e===2?"<svg>":"",r=qe;for(let a=0;a<t;a++){let l=n[a],h,c,f=-1,d=0;for(;d<l.length&&(r.lastIndex=d,c=r.exec(l),c!==null);)d=r.lastIndex,r===qe?c[1]==="!--"?r=ps:c[1]!==void 0?r=us:c[2]!==void 0?(ws.test(c[2])&&(s=RegExp("</"+c[2],"g")),r=ue):c[3]!==void 0&&(r=ue):r===ue?c[0]===">"?(r=s??qe,f=-1):c[1]===void 0?f=-2:(f=r.lastIndex-c[2].length,h=c[1],r=c[3]===void 0?ue:c[3]==='"'?ms:fs):r===ms||r===fs?r=ue:r===ps||r===us?r=qe:(r=ue,s=void 0);let u=r===ue&&n[a+1].startsWith("/>")?" ":"";o+=r===qe?l+fo:f>=0?(i.push(h),l.slice(0,f)+ai+l.slice(f)+he+u):l+he+(f===-2?(i.push(void 0),a):u)}return[ks(n,o+(n[t]||"<?>")+(e===2?"</svg>":"")),i]},Ge=class n{constructor({strings:e,_$litType$:t},i){let s;this.parts=[];let o=0,r=0,a=e.length-1,l=this.parts,[h,c]=go(e,t);if(this.el=n.createElement(h,i),fe.currentNode=this.el.content,t===2){let f=this.el.content,d=f.firstChild;d.remove(),f.append(...d.childNodes)}for(;(s=fe.nextNode())!==null&&l.length<a;){if(s.nodeType===1){if(s.hasAttributes()){let f=[];for(let d of s.getAttributeNames())if(d.endsWith(ai)||d.startsWith(he)){let u=c[r++];if(f.push(d),u!==void 0){let p=s.getAttribute(u.toLowerCase()+ai).split(he),g=/([.?@])?(.*)/.exec(u);l.push({type:1,index:o,name:g[2],strings:p,ctor:g[1]==="."?hi:g[1]==="?"?ci:g[1]==="@"?di:Ee})}else l.push({type:6,index:o})}for(let d of f)s.removeAttribute(d)}if(ws.test(s.tagName)){let f=s.textContent.split(he),d=f.length-1;if(d>0){s.textContent=Re?Re.emptyScript:"";for(let u=0;u<d;u++)s.append(f[u],Ue()),fe.nextNode(),l.push({type:2,index:++o});s.append(f[d],Ue())}}}else if(s.nodeType===8)if(s.data===vs)l.push({type:2,index:o});else{let f=-1;for(;(f=s.data.indexOf(he,f+1))!==-1;)l.push({type:7,index:o}),f+=he.length-1}o++}}static createElement(e,t){let i=me.createElement("template");return i.innerHTML=e,i}};function Oe(n,e,t=n,i){var s,o,r,a;if(e===ge)return e;let l=i!==void 0?(s=t._$Co)===null||s===void 0?void 0:s[i]:t._$Cl,h=Fe(e)?void 0:e._$litDirective$;return l?.constructor!==h&&((o=l?._$AO)===null||o===void 0||o.call(l,!1),h===void 0?l=void 0:(l=new h(n),l._$AT(n,t,i)),i!==void 0?((r=(a=t)._$Co)!==null&&r!==void 0?r:a._$Co=[])[i]=l:t._$Cl=l),l!==void 0&&(e=Oe(n,l._$AS(n,e.values),l,i)),e}var li=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){var t;let{el:{content:i},parts:s}=this._$AD,o=((t=e?.creationScope)!==null&&t!==void 0?t:me).importNode(i,!0);fe.currentNode=o;let r=fe.nextNode(),a=0,l=0,h=s[0];for(;h!==void 0;){if(a===h.index){let c;h.type===2?c=new Ze(r,r.nextSibling,this,e):h.type===1?c=new h.ctor(r,h.name,h.strings,this,e):h.type===6&&(c=new pi(r,this,e)),this._$AV.push(c),h=s[++l]}a!==h?.index&&(r=fe.nextNode(),a++)}return fe.currentNode=me,o}v(e){let t=0;for(let i of this._$AV)i!==void 0&&(i.strings!==void 0?(i._$AI(e,i,t),t+=i.strings.length-2):i._$AI(e[t])),t++}},Ze=class n{constructor(e,t,i,s){var o;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=i,this.options=s,this._$Cp=(o=s?.isConnected)===null||o===void 0||o}get _$AU(){var e,t;return(t=(e=this._$AM)===null||e===void 0?void 0:e._$AU)!==null&&t!==void 0?t:this._$Cp}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=Oe(this,e,t),Fe(e)?e===I||e==null||e===""?(this._$AH!==I&&this._$AR(),this._$AH=I):e!==this._$AH&&e!==ge&&this._(e):e._$litType$!==void 0?this.g(e):e.nodeType!==void 0?this.$(e):mo(e)?this.T(e):this._(e)}k(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}$(e){this._$AH!==e&&(this._$AR(),this._$AH=this.k(e))}_(e){this._$AH!==I&&Fe(this._$AH)?this._$AA.nextSibling.data=e:this.$(me.createTextNode(e)),this._$AH=e}g(e){var t;let{values:i,_$litType$:s}=e,o=typeof s=="number"?this._$AC(e):(s.el===void 0&&(s.el=Ge.createElement(ks(s.h,s.h[0]),this.options)),s);if(((t=this._$AH)===null||t===void 0?void 0:t._$AD)===o)this._$AH.v(i);else{let r=new li(o,this),a=r.u(this.options);r.v(i),this.$(a),this._$AH=r}}_$AC(e){let t=gs.get(e.strings);return t===void 0&&gs.set(e.strings,t=new Ge(e)),t}T(e){ys(this._$AH)||(this._$AH=[],this._$AR());let t=this._$AH,i,s=0;for(let o of e)s===t.length?t.push(i=new n(this.k(Ue()),this.k(Ue()),this,this.options)):i=t[s],i._$AI(o),s++;s<t.length&&(this._$AR(i&&i._$AB.nextSibling,s),t.length=s)}_$AR(e=this._$AA.nextSibling,t){var i;for((i=this._$AP)===null||i===void 0||i.call(this,!1,!0,t);e&&e!==this._$AB;){let s=e.nextSibling;e.remove(),e=s}}setConnected(e){var t;this._$AM===void 0&&(this._$Cp=e,(t=this._$AP)===null||t===void 0||t.call(this,e))}},Ee=class{constructor(e,t,i,s,o){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=s,this.options=o,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,s){let o=this.strings,r=!1;if(o===void 0)e=Oe(this,e,t,0),r=!Fe(e)||e!==this._$AH&&e!==ge,r&&(this._$AH=e);else{let a=e,l,h;for(e=o[0],l=0;l<o.length-1;l++)h=Oe(this,a[i+l],t,l),h===ge&&(h=this._$AH[l]),r||(r=!Fe(h)||h!==this._$AH[l]),h===I?e=I:e!==I&&(e+=(h??"")+o[l+1]),this._$AH[l]=h}r&&!s&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},hi=class extends Ee{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===I?void 0:e}},bo=Re?Re.emptyScript:"",ci=class extends Ee{constructor(){super(...arguments),this.type=4}j(e){e&&e!==I?this.element.setAttribute(this.name,bo):this.element.removeAttribute(this.name)}},di=class extends Ee{constructor(e,t,i,s,o){super(e,t,i,s,o),this.type=5}_$AI(e,t=this){var i;if((e=(i=Oe(this,e,t,0))!==null&&i!==void 0?i:I)===ge)return;let s=this._$AH,o=e===I&&s!==I||e.capture!==s.capture||e.once!==s.once||e.passive!==s.passive,r=e!==I&&(s===I||o);o&&this.element.removeEventListener(this.name,this,s),r&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){var t,i;typeof this._$AH=="function"?this._$AH.call((i=(t=this.options)===null||t===void 0?void 0:t.host)!==null&&i!==void 0?i:this.element,e):this._$AH.handleEvent(e)}},pi=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Oe(this,e)}};var bs=_t.litHtmlPolyfillSupport;bs?.(Ge,Ze),((ni=_t.litHtmlVersions)!==null&&ni!==void 0?ni:_t.litHtmlVersions=[]).push("2.8.0");var Ms=(n,e,t)=>{var i,s;let o=(i=t?.renderBefore)!==null&&i!==void 0?i:e,r=o._$litPart$;if(r===void 0){let a=(s=t?.renderBefore)!==null&&s!==void 0?s:null;o._$litPart$=r=new Ze(e.insertBefore(Ue(),a),a,void 0,t??{})}return r._$AI(n),r};var ui,fi;var H=class extends ne{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var e,t;let i=super.createRenderRoot();return(e=(t=this.renderOptions).renderBefore)!==null&&e!==void 0||(t.renderBefore=i.firstChild),i}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=Ms(t,this.renderRoot,this.renderOptions)}connectedCallback(){var e;super.connectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!0)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this._$Do)===null||e===void 0||e.setConnected(!1)}render(){return ge}};H.finalized=!0,H._$litElement$=!0,(ui=globalThis.litElementHydrateSupport)===null||ui===void 0||ui.call(globalThis,{LitElement:H});var _s=globalThis.litElementPolyfillSupport;_s?.({LitElement:H});((fi=globalThis.litElementVersions)!==null&&fi!==void 0?fi:globalThis.litElementVersions=[]).push("3.3.3");var M=n=>e=>typeof e=="function"?((t,i)=>(customElements.define(t,i),i))(n,e):((t,i)=>{let{kind:s,elements:o}=i;return{kind:s,elements:o,finisher(r){customElements.define(t,r)}}})(n,e);var vo=(n,e)=>e.kind==="method"&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(t){t.createProperty(e.key,n)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){typeof e.initializer=="function"&&(this[e.key]=e.initializer.call(this))},finisher(t){t.createProperty(e.key,n)}},yo=(n,e,t)=>{e.constructor.createProperty(t,n)};function m(n){return(e,t)=>t!==void 0?yo(n,e,t):vo(n,e)}function Ss(n){return m({...n,state:!0})}var be=({finisher:n,descriptor:e})=>(t,i)=>{var s;if(i===void 0){let o=(s=t.originalKey)!==null&&s!==void 0?s:t.key,r=e!=null?{kind:"method",placement:"prototype",key:o,descriptor:e(t.key)}:{...t,key:o};return n!=null&&(r.finisher=function(a){n(a,o)}),r}{let o=t.constructor;e!==void 0&&Object.defineProperty(t,i,e(i)),n?.(o,i)}};function $(n,e){return be({descriptor:t=>{let i={get(){var s,o;return(o=(s=this.renderRoot)===null||s===void 0?void 0:s.querySelector(n))!==null&&o!==void 0?o:null},enumerable:!0,configurable:!0};if(e){let s=typeof t=="symbol"?Symbol():"__"+t;i.get=function(){var o,r;return this[s]===void 0&&(this[s]=(r=(o=this.renderRoot)===null||o===void 0?void 0:o.querySelector(n))!==null&&r!==void 0?r:null),this[s]}}return i}})}var mi,wn=((mi=window.HTMLSlotElement)===null||mi===void 0?void 0:mi.prototype.assignedElements)!=null?(n,e)=>n.assignedElements(e):(n,e)=>n.assignedNodes(e).filter((t=>t.nodeType===Node.ELEMENT_NODE));var wo=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},xo=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},S=x`
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
`,_=class extends H{constructor(){super(...arguments),this.lastSize=[0,0],this.seed=Math.floor(Math.random()*2**31)}updated(e){this.wiredRender()}wiredRender(e=!1){if(this.svg){let t=this.canvasSize();if(!e&&t[0]===this.lastSize[0]&&t[1]===this.lastSize[1])return;for(;this.svg.hasChildNodes();)this.svg.removeChild(this.svg.lastChild);this.svg.setAttribute("width",`${t[0]}`),this.svg.setAttribute("height",`${t[1]}`),this.draw(this.svg,t),this.lastSize=t,this.classList.add("wired-rendered")}}fire(e,t){Qe(this,e,t)}};wo([$("svg"),xo("design:type",SVGSVGElement)],_.prototype,"svg",void 0);function $s(){return Math.floor(Math.random()*2**31)}function Qe(n,e,t){n.dispatchEvent(new CustomEvent(e,{composed:!0,bubbles:!0,detail:t}))}function St(n,e,t){if(n&&n.length){let[i,s]=e,o=Math.PI/180*t,r=Math.cos(o),a=Math.sin(o);n.forEach(l=>{let[h,c]=l;l[0]=(h-i)*r-(c-s)*a+i,l[1]=(h-i)*a+(c-s)*r+s})}}function Rs(n,e,t){let i=[];n.forEach(s=>i.push(...s)),St(i,e,t)}function re(n){let e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function Os(n,e,t,i){let s=e[1]-n[1],o=n[0]-e[0],r=s*n[0]+o*n[1],a=i[1]-t[1],l=t[0]-i[0],h=a*t[0]+l*t[1],c=s*l-a*o;return c?[(l*r-o*h)/c,(s*h-a*r)/c]:null}function $t(n,e,t){let i=n.length;if(i<3)return!1;let s=[Number.MAX_SAFE_INTEGER,t],o=[e,t],r=0;for(let a=0;a<i;a++){let l=n[a],h=n[(a+1)%i];if(gi(l,h,o,s)){if(Ye(l,o,h)===0)return Ke(l,o,h);r++}}return r%2===1}function Ke(n,e,t){return e[0]<=Math.max(n[0],t[0])&&e[0]>=Math.min(n[0],t[0])&&e[1]<=Math.max(n[1],t[1])&&e[1]>=Math.min(n[1],t[1])}function Ye(n,e,t){let i=(e[1]-n[1])*(t[0]-e[0])-(e[0]-n[0])*(t[1]-e[1]);return i===0?0:i>0?1:2}function gi(n,e,t,i){let s=Ye(n,e,t),o=Ye(n,e,i),r=Ye(t,i,n),a=Ye(t,i,e);return!!(s!==o&&r!==a||s===0&&Ke(n,t,e)||o===0&&Ke(n,i,e)||r===0&&Ke(t,n,i)||a===0&&Ke(t,e,i))}function Xe(n,e){let t=[0,0],i=Math.round(e.hachureAngle+90);i&&St(n,t,i);let s=ko(n,e);return i&&(St(n,t,-i),Rs(s,t,-i)),s}function ko(n,e){let t=[...n];t[0].join(",")!==t[t.length-1].join(",")&&t.push([t[0][0],t[0][1]]);let i=[];if(t&&t.length>2){let s=e.hachureGap;s<0&&(s=e.strokeWidth*4),s=Math.max(s,.1);let o=[];for(let l=0;l<t.length-1;l++){let h=t[l],c=t[l+1];if(h[1]!==c[1]){let f=Math.min(h[1],c[1]);o.push({ymin:f,ymax:Math.max(h[1],c[1]),x:f===h[1]?h[0]:c[0],islope:(c[0]-h[0])/(c[1]-h[1])})}}if(o.sort((l,h)=>l.ymin<h.ymin?-1:l.ymin>h.ymin?1:l.x<h.x?-1:l.x>h.x?1:l.ymax===h.ymax?0:(l.ymax-h.ymax)/Math.abs(l.ymax-h.ymax)),!o.length)return i;let r=[],a=o[0].ymin;for(;r.length||o.length;){if(o.length){let l=-1;for(let c=0;c<o.length&&!(o[c].ymin>a);c++)l=c;o.splice(0,l+1).forEach(c=>{r.push({s:a,edge:c})})}if(r=r.filter(l=>!(l.edge.ymax<=a)),r.sort((l,h)=>l.edge.x===h.edge.x?0:(l.edge.x-h.edge.x)/Math.abs(l.edge.x-h.edge.x)),r.length>1)for(let l=0;l<r.length;l=l+2){let h=l+1;if(h>=r.length)break;let c=r[l].edge,f=r[h].edge;i.push([[Math.round(c.x),a],[Math.round(f.x),a]])}a+=s,r.forEach(l=>{l.edge.x=l.edge.x+s*l.edge.islope})}}return i}var Ce=class{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,i=!1){let s=Xe(e,t);if(i){let r=this.connectingLines(e,s);s=s.concat(r)}return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){let i=[];for(let s of e)i.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],t));return i}connectingLines(e,t){let i=[];if(t.length>1)for(let s=1;s<t.length;s++){let o=t[s-1];if(re(o)<3)continue;let a=[t[s][0],o[1]];if(re(a)>3){let l=this.splitOnIntersections(e,a);i.push(...l)}}return i}midPointInPolygon(e,t){return $t(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){let i=Math.max(5,re(t)*.1),s=[];for(let o=0;o<e.length;o++){let r=e[o],a=e[(o+1)%e.length];if(gi(r,a,...t)){let l=Os(r,a,t[0],t[1]);if(l){let h=re([l,t[0]]),c=re([l,t[1]]);h>i&&c>i&&s.push({point:l,distance:h})}}}if(s.length>1){let o=s.sort((l,h)=>l.distance-h.distance).map(l=>l.point);if($t(e,...t[0])||o.shift(),$t(e,...t[1])||o.pop(),o.length<=1)return this.midPointInPolygon(e,t)?[t]:[];let r=[t[0],...o,t[1]],a=[];for(let l=0;l<r.length-1;l+=2){let h=[r[l],r[l+1]];this.midPointInPolygon(e,h)&&a.push(h)}return a}else return this.midPointInPolygon(e,t)?[t]:[]}};var Je=class extends Ce{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}};var Rt=class{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}};function vi(n,e,t,i,s){return{type:"path",ops:et(n,e,t,i,s)}}function $o(n,e,t){let i=(n||[]).length;if(i>2){let s=[];for(let o=0;o<i-1;o++)s.push(...et(n[o][0],n[o][1],n[o+1][0],n[o+1][1],t));return e&&s.push(...et(n[i-1][0],n[i-1][1],n[0][0],n[0][1],t)),{type:"path",ops:s}}else if(i===2)return vi(n[0][0],n[0][1],n[1][0],n[1][1],t);return{type:"path",ops:[]}}function yi(n,e){return $o(n,!0,e)}function Ps(n,e,t,i,s){let o=[[n,e],[n+t,e],[n+t,e+i],[n,e+i]];return yi(o,s)}function wi(n,e,t,i,s){let o=xi(t,i,s);return Ro(n,e,s,o).opset}function xi(n,e,t){let i=Math.sqrt(Math.PI*2*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),s=Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*i),o=Math.PI*2/s,r=Math.abs(n/2),a=Math.abs(e/2),l=1-t.curveFitting;return r+=P(r*l,t),a+=P(a*l,t),{increment:o,rx:r,ry:a}}function Ro(n,e,t,i){let[s,o]=As(i.increment,n,e,i.rx,i.ry,1,i.increment*bi(.1,bi(.4,1,t),t),t),r=Cs(s,null,t);if(!t.disableMultiStroke){let[a]=As(i.increment,n,e,i.rx,i.ry,1.5,0,t),l=Cs(a,null,t);r=r.concat(l)}return{estimatedPoints:o,opset:{type:"path",ops:r}}}function zs(n,e,t,i,s){return et(n,e,t,i,s,!0)}function Ls(n){return n.randomizer||(n.randomizer=new Rt(n.seed||0)),n.randomizer.next()}function bi(n,e,t,i=1){return t.roughness*i*(Ls(t)*(e-n)+n)}function P(n,e,t=1){return bi(-n,n,e,t)}function et(n,e,t,i,s,o=!1){let r=o?s.disableMultiStrokeFill:s.disableMultiStroke,a=Es(n,e,t,i,s,!0,!1);if(r)return a;let l=Es(n,e,t,i,s,!0,!0);return a.concat(l)}function Es(n,e,t,i,s,o,r){let a=Math.pow(n-t,2)+Math.pow(e-i,2),l=Math.sqrt(a),h=1;l<200?h=1:l>500?h=.4:h=-.0016668*l+1.233334;let c=s.maxRandomnessOffset||0;c*c*100>a&&(c=l/10);let f=c/2,d=.2+Ls(s)*.2,u=s.bowing*s.maxRandomnessOffset*(i-e)/200,p=s.bowing*s.maxRandomnessOffset*(n-t)/200;u=P(u,s,h),p=P(p,s,h);let g=[],b=()=>P(f,s,h),v=()=>P(c,s,h);return o&&(r?g.push({op:"move",data:[n+b(),e+b()]}):g.push({op:"move",data:[n+P(c,s,h),e+P(c,s,h)]})),r?g.push({op:"bcurveTo",data:[u+n+(t-n)*d+b(),p+e+(i-e)*d+b(),u+n+2*(t-n)*d+b(),p+e+2*(i-e)*d+b(),t+b(),i+b()]}):g.push({op:"bcurveTo",data:[u+n+(t-n)*d+v(),p+e+(i-e)*d+v(),u+n+2*(t-n)*d+v(),p+e+2*(i-e)*d+v(),t+v(),i+v()]}),g}function Cs(n,e,t){let i=n.length,s=[];if(i>3){let o=[],r=1-t.curveTightness;s.push({op:"move",data:[n[1][0],n[1][1]]});for(let a=1;a+2<i;a++){let l=n[a];o[0]=[l[0],l[1]],o[1]=[l[0]+(r*n[a+1][0]-r*n[a-1][0])/6,l[1]+(r*n[a+1][1]-r*n[a-1][1])/6],o[2]=[n[a+1][0]+(r*n[a][0]-r*n[a+2][0])/6,n[a+1][1]+(r*n[a][1]-r*n[a+2][1])/6],o[3]=[n[a+1][0],n[a+1][1]],s.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(e&&e.length===2){let a=t.maxRandomnessOffset;s.push({op:"lineTo",data:[e[0]+P(a,t),e[1]+P(a,t)]})}}else i===3?(s.push({op:"move",data:[n[1][0],n[1][1]]}),s.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):i===2&&s.push(...et(n[0][0],n[0][1],n[1][0],n[1][1],t));return s}function As(n,e,t,i,s,o,r,a){let l=[],h=[],c=P(.5,a)-Math.PI/2;h.push([P(o,a)+e+.9*i*Math.cos(c-n),P(o,a)+t+.9*s*Math.sin(c-n)]);for(let f=c;f<Math.PI*2+c-.01;f=f+n){let d=[P(o,a)+e+i*Math.cos(f),P(o,a)+t+s*Math.sin(f)];l.push(d),h.push(d)}return h.push([P(o,a)+e+i*Math.cos(c+Math.PI*2+r*.5),P(o,a)+t+s*Math.sin(c+Math.PI*2+r*.5)]),h.push([P(o,a)+e+.98*i*Math.cos(c+r),P(o,a)+t+.98*s*Math.sin(c+r)]),h.push([P(o,a)+e+.9*i*Math.cos(c+r*.5),P(o,a)+t+.9*s*Math.sin(c+r*.5)]),[h,l]}var Oo={randOffset(n,e){return n},randOffsetWithRange(n,e,t){return(n+e)/2},ellipse(n,e,t,i,s){return wi(n,e,t,i,s)},doubleLineOps(n,e,t,i,s){return zs(n,e,t,i,s)}};function Ae(n){return{maxRandomnessOffset:2,roughness:1,bowing:.85,stroke:"#000",strokeWidth:1.5,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:3.5,hachureAngle:-41,hachureGap:5,dashOffset:-1,dashGap:-1,zigzagOffset:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1,seed:n}}function Eo(n,e){let t="";for(let i of n.ops){let s=i.data;switch(i.op){case"move":if(e&&t)break;t+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `;break}}return t.trim()}function se(n,e){let t=document.createElementNS("http://www.w3.org/2000/svg",n);if(e)for(let i in e)t.setAttributeNS(null,i,e[i]);return t}function tt(n,e,t=!1){let i=se("path",{d:Eo(n,t)});return e&&e.appendChild(i),i}function C(n,e,t,i,s,o){return tt(Ps(e+2,t+2,i-4,s-4,Ae(o)),n)}function R(n,e,t,i,s,o){return tt(vi(e,t,i,s,Ae(o)),n)}function Is(n,e,t){return tt(yi(e,Ae(t)),n,!0)}function U(n,e,t,i,s,o){return i=Math.max(i>10?i-4:i-1,1),s=Math.max(s>10?s-4:s-1,1),tt(wi(e,t,i,s,Ae(o)),n)}function ve(n,e){let i=new Je(Oo).fillPolygon(n,Ae(e));return tt(i,null)}function Pe(n,e,t,i,s){let o=Ae(s),r=xi(t,i,o),a=[],l=0;for(;l<=Math.PI*2;)a.push([n+r.rx*Math.cos(l),e+r.ry*Math.sin(l)]),l+=r.increment;return ve(a,s)}var Ot=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Et=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},it=class extends _{constructor(){super(),this.elevation=1,this.disabled=!1,this.roAttached=!1,window.ResizeObserver&&(this.ro=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[S,x`
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
      `]}render(){return k`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}focus(){this.button?this.button.focus():super.focus()}canvasSize(){if(this.button){let e=this.button.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}return this.lastSize}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};C(e,0,0,s.width,s.height,this.seed);for(let o=1;o<i;o++)R(e,o*2,s.height+o*2,s.width+o*2,s.height+o*2,this.seed).style.opacity=`${(75-o*10)/100}`,R(e,s.width+o*2,s.height+o*2,s.width+o*2,o*2,this.seed).style.opacity=`${(75-o*10)/100}`,R(e,o*2,s.height+o*2,s.width+o*2,s.height+o*2,this.seed).style.opacity=`${(75-o*10)/100}`,R(e,s.width+o*2,s.height+o*2,s.width+o*2,o*2,this.seed).style.opacity=`${(75-o*10)/100}`}updated(){super.updated(),this.roAttached||this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.button&&this.ro&&(this.ro.observe(this.button),this.roAttached=!0)}detachResizeListener(){this.button&&this.ro&&this.ro.unobserve(this.button),this.roAttached=!1}};Ot([m({type:Number}),Et("design:type",Object)],it.prototype,"elevation",void 0);Ot([m({type:Boolean,reflect:!0}),Et("design:type",Object)],it.prototype,"disabled",void 0);Ot([$("button"),Et("design:type",HTMLButtonElement)],it.prototype,"button",void 0);it=Ot([M("wired-button"),Et("design:paramtypes",[])],it);var ki=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Mi=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},ze=class extends _{constructor(){super(),this.elevation=1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[S,x`
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
      `]}render(){return k`
    <div id="overlay"><svg></svg></div>
    <div style="position: relative;">
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    `}updated(e){let t=e.has("fill");this.wiredRender(t),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){let e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};if(this.fill&&this.fill.trim()){let o=ve([[2,2],[s.width-4,2],[s.width-2,s.height-4],[2,s.height-4]],this.seed);o.classList.add("cardFill"),e.style.setProperty("--wired-card-background-fill",this.fill.trim()),e.appendChild(o)}C(e,2,2,s.width-4,s.height-4,this.seed);for(let o=1;o<i;o++)R(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,R(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`,R(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,R(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`}};ki([m({type:Number}),Mi("design:type",Object)],ze.prototype,"elevation",void 0);ki([m({type:String}),Mi("design:type",String)],ze.prototype,"fill",void 0);ze=ki([M("wired-card"),Mi("design:paramtypes",[])],ze);var st=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ct=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Le=class extends _{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[S,x`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return k`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){C(e,0,0,t[0],t[1],this.seed),this.svgCheck=se("g"),e.appendChild(this.svgCheck),R(this.svgCheck,t[0]*.3,t[1]*.4,t[0]*.5,t[1]*.7,this.seed),R(this.svgCheck,t[0]*.5,t[1]*.7,t[0]+5,-5,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};st([m({type:Boolean}),Ct("design:type",Object)],Le.prototype,"checked",void 0);st([m({type:Boolean,reflect:!0}),Ct("design:type",Object)],Le.prototype,"disabled",void 0);st([Ss(),Ct("design:type",Object)],Le.prototype,"focused",void 0);st([$("input"),Ct("design:type",HTMLInputElement)],Le.prototype,"input",void 0);Le=st([M("wired-checkbox")],Le);var At=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},_i=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},ot=class extends _{constructor(){super(...arguments),this.value="",this.name="",this.selected=!1}static get styles(){return[S,x`
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
      `]}render(){return k`
    <button class="${this.selected?"selected":""}">
      <div id="overlay"><svg></svg></div>
      <span><slot></slot></span>
    </button>`}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){let i=ve([[0,0],[t[0],0],[t[0],t[1]],[0,t[1]]],this.seed);e.appendChild(i)}};At([m(),_i("design:type",Object)],ot.prototype,"value",void 0);At([m(),_i("design:type",Object)],ot.prototype,"name",void 0);At([m({type:Boolean}),_i("design:type",Object)],ot.prototype,"selected",void 0);ot=At([M("wired-item")],ot);var Ie=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},nt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},ye=class extends H{constructor(){super(...arguments),this.disabled=!1,this.seed=$s(),this.cardShowing=!1,this.itemNodes=[]}static get styles(){return x`
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
    `}render(){return k`
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
    `}refreshDisabledState(){this.disabled?this.classList.add("wired-disabled"):this.classList.remove("wired-disabled"),this.tabIndex=this.disabled?-1:+(this.getAttribute("tabindex")||0)}firstUpdated(){this.setAttribute("role","combobox"),this.setAttribute("aria-haspopup","listbox"),this.refreshSelection(),this.addEventListener("blur",()=>{this.cardShowing&&this.setCardShowing(!1)}),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break;case 27:e.preventDefault(),this.cardShowing&&this.setCardShowing(!1);break;case 13:e.preventDefault(),this.setCardShowing(!this.cardShowing);break;case 32:e.preventDefault(),this.cardShowing||this.setCardShowing(!0);break}})}updated(e){e.has("disabled")&&this.refreshDisabledState();let t=this.svg;for(;t.hasChildNodes();)t.removeChild(t.lastChild);let i=this.shadowRoot.getElementById("container").getBoundingClientRect();t.setAttribute("width",`${i.width}`),t.setAttribute("height",`${i.height}`);let s=this.shadowRoot.getElementById("textPanel").getBoundingClientRect();this.shadowRoot.getElementById("dropPanel").style.minHeight=s.height+"px",C(t,0,0,s.width,s.height,this.seed);let o=s.width-4;C(t,o,0,34,s.height,this.seed);let r=Math.max(0,Math.abs((s.height-24)/2)),a=Is(t,[[o+8,5+r],[o+26,5+r],[o+17,r+Math.min(s.height,18)]],this.seed);if(a.style.fill="currentColor",a.style.pointerEvents=this.disabled?"none":"auto",a.style.cursor="pointer",this.classList.add("wired-rendered"),this.setAttribute("aria-expanded",`${this.cardShowing}`),!this.itemNodes.length){this.itemNodes=[];let l=this.shadowRoot.getElementById("slot").assignedNodes();if(l&&l.length)for(let h=0;h<l.length;h++){let c=l[h];c.tagName==="WIRED-ITEM"&&(c.setAttribute("role","option"),this.itemNodes.push(c))}}}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));let t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let i=null;for(let s=0;s<t.length;s++){let o=t[s];if(o.tagName==="WIRED-ITEM"){let r=o.value||o.getAttribute("value")||"";if(this.selected&&r===this.selected){i=o;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}setCardShowing(e){this.card&&(this.cardShowing=e,this.card.style.display=e?"":"none",e&&setTimeout(()=>{this.shadowRoot.getElementById("slot").assignedNodes().filter(i=>i.nodeType===Node.ELEMENT_NODE).forEach(i=>{let s=i;s.requestUpdate&&s.requestUpdate()})},10),this.setAttribute("aria-expanded",`${this.cardShowing}`))}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected(),setTimeout(()=>{this.setCardShowing(!1)})}fireSelected(){Qe(this,"selected",{selected:this.selected})}selectPrevious(){let e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){let e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}onCombo(e){e.stopPropagation(),this.setCardShowing(!this.cardShowing)}};Ie([m({type:Object}),nt("design:type",Object)],ye.prototype,"value",void 0);Ie([m({type:String,reflect:!0}),nt("design:type",String)],ye.prototype,"selected",void 0);Ie([m({type:Boolean,reflect:!0}),nt("design:type",Object)],ye.prototype,"disabled",void 0);Ie([$("svg"),nt("design:type",SVGSVGElement)],ye.prototype,"svg",void 0);Ie([$("#card"),nt("design:type",HTMLDivElement)],ye.prototype,"card",void 0);ye=Ie([M("wired-combo")],ye);var Pt=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Si=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},rt=class extends H{constructor(){super(...arguments),this.elevation=5,this.open=!1}static get styles(){return x`
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
    `}render(){return k`
    <div id="container">
      <div id="overlay" class="vertical layout">
        <div class="flex"></div>
        <div style="text-align: center; padding: 5px;">
          <wired-card .elevation="${this.elevation}"><slot></slot></wired-card>
        </div>
        <div class="flex"></div>
      </div>
    </div>
    `}updated(){this.card&&this.card.wiredRender(!0)}};Pt([m({type:Number}),Si("design:type",Object)],rt.prototype,"elevation",void 0);Pt([m({type:Boolean,reflect:!0}),Si("design:type",Object)],rt.prototype,"open",void 0);Pt([$("wired-card"),Si("design:type",ze)],rt.prototype,"card",void 0);rt=Pt([M("wired-dialog")],rt);var js=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Co=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},$i=class extends _{constructor(){super(...arguments),this.elevation=1,this.roAttached=!1}static get styles(){return[S,x`
        :host {
          display: block;
          position: relative;
        }
      `]}render(){return k`<svg></svg>`}canvasSize(){let e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5);return[e.width,t*6]}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5);for(let s=0;s<i;s++)R(e,0,s*6+3,t[0],s*6+3,this.seed)}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}};js([m({type:Number}),Co("design:type",Object)],$i.prototype,"elevation",void 0);$i=js([M("wired-divider")],$i);var Ri=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ts=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},zt=class extends _{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[S,x`
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
      `]}render(){return k`
    <button ?disabled="${this.disabled}">
      <div id="overlay">
        <svg></svg>
      </div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </button>
    `}canvasSize(){if(this.button){let e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){let i=Math.min(t[0],t[1]),s=Pe(i/2,i/2,i,i,this.seed);e.appendChild(s)}};Ri([m({type:Boolean,reflect:!0}),Ts("design:type",Object)],zt.prototype,"disabled",void 0);Ri([$("button"),Ts("design:type",HTMLButtonElement)],zt.prototype,"button",void 0);zt=Ri([M("wired-fab")],zt);var Oi=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Bs=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Lt=class extends _{constructor(){super(...arguments),this.disabled=!1}static get styles(){return[S,x`
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
      `]}render(){return k`
    <button ?disabled="${this.disabled}">
      <slot @slotchange="${this.wiredRender}"></slot>
      <div id="overlay">
        <svg></svg>
      </div>
    </button>
    `}canvasSize(){if(this.button){let e=this.button.getBoundingClientRect();return[e.width,e.height]}return this.lastSize}draw(e,t){let i=Math.min(t[0],t[1]);e.setAttribute("width",`${i}`),e.setAttribute("height",`${i}`),U(e,i/2,i/2,i,i,this.seed)}};Oi([m({type:Boolean,reflect:!0}),Bs("design:type",Object)],Lt.prototype,"disabled",void 0);Oi([$("button"),Bs("design:type",HTMLButtonElement)],Lt.prototype,"button",void 0);Lt=Oi([M("wired-icon-button")],Lt);var Ei=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ci=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Ao="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=",It=class extends _{constructor(){super(),this.elevation=1,this.src=Ao,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[S,x`
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
      `]}render(){return k`
    <img src="${this.src}">
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0})),this.roAttached=!0)}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler),this.roAttached=!1}canvasSize(){let e=this.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width+(t-1)*2,s=e.height+(t-1)*2;return[i,s]}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5),s={width:t[0]-(i-1)*2,height:t[1]-(i-1)*2};C(e,2,2,s.width-4,s.height-4,this.seed);for(let o=1;o<i;o++)R(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,R(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`,R(e,o*2,s.height-4+o*2,s.width-4+o*2,s.height-4+o*2,this.seed).style.opacity=`${(85-o*10)/100}`,R(e,s.width-4+o*2,s.height-4+o*2,s.width-4+o*2,o*2,this.seed).style.opacity=`${(85-o*10)/100}`}};Ei([m({type:Number}),Ci("design:type",Object)],It.prototype,"elevation",void 0);Ei([m({type:String}),Ci("design:type",String)],It.prototype,"src",void 0);It=Ei([M("wired-image"),Ci("design:paramtypes",[])],It);var j=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},T=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},z=class extends _{constructor(){super(),this.disabled=!1,this.placeholder="",this.type="text",this.autocomplete="",this.autocapitalize="",this.autocorrect="",this.required=!1,this.autofocus=!1,this.readonly=!1,this.roAttached=!1,window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender(!0)}))}static get styles(){return[S,x`
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
      `]}render(){return k`
    <input name="${this.name}" type="${this.type}" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      ?required="${this.required}" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" minlength="${this.minlength}"
      maxlength="${this.maxlength}" min="${this.min}" max="${this.max}" step="${this.step}" ?readonly="${this.readonly}"
      size="${this.size}" autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    `}get input(){return this.textInput}get value(){let e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){let t=this.input;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-2,t[1]-2,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}focus(){this.textInput?this.textInput.focus():super.focus()}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.roAttached||(this.textInput&&this.resizeObserver&&this.resizeObserver.observe(this.textInput),this.roAttached=!0)}detachResizeListener(){this.textInput&&this.resizeObserver&&this.resizeObserver.unobserve(this.textInput),this.roAttached=!1}};j([m({type:Boolean,reflect:!0}),T("design:type",Object)],z.prototype,"disabled",void 0);j([m({type:String}),T("design:type",Object)],z.prototype,"placeholder",void 0);j([m({type:String}),T("design:type",String)],z.prototype,"name",void 0);j([m({type:String}),T("design:type",String)],z.prototype,"min",void 0);j([m({type:String}),T("design:type",String)],z.prototype,"max",void 0);j([m({type:String}),T("design:type",String)],z.prototype,"step",void 0);j([m({type:String}),T("design:type",Object)],z.prototype,"type",void 0);j([m({type:String}),T("design:type",Object)],z.prototype,"autocomplete",void 0);j([m({type:String}),T("design:type",Object)],z.prototype,"autocapitalize",void 0);j([m({type:String}),T("design:type",Object)],z.prototype,"autocorrect",void 0);j([m({type:Boolean}),T("design:type",Object)],z.prototype,"required",void 0);j([m({type:Boolean}),T("design:type",Object)],z.prototype,"autofocus",void 0);j([m({type:Boolean}),T("design:type",Object)],z.prototype,"readonly",void 0);j([m({type:Number}),T("design:type",Number)],z.prototype,"minlength",void 0);j([m({type:Number}),T("design:type",Number)],z.prototype,"maxlength",void 0);j([m({type:Number}),T("design:type",Number)],z.prototype,"size",void 0);j([$("input"),T("design:type",HTMLInputElement)],z.prototype,"textInput",void 0);z=j([M("wired-input"),T("design:paramtypes",[])],z);var at=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},jt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},je=class extends _{constructor(){super(...arguments),this.elevation=1}static get styles(){return[S,x`
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
      `]}render(){return k`
    <a href="${this.href}" target="${this.target||""}">
      <slot></slot>
      <div id="overlay"><svg></svg></div>
    </a>
    `}focus(){this.anchor?this.anchor.focus():super.focus()}canvasSize(){if(this.anchor){let e=this.anchor.getBoundingClientRect(),t=Math.min(Math.max(1,this.elevation),5),i=e.width,s=e.height+(t-1)*2;return[i,s]}return this.lastSize}draw(e,t){let i=Math.min(Math.max(1,this.elevation),5),s={width:t[0],height:t[1]-(i-1)*2};for(let o=0;o<i;o++)R(e,0,s.height+o*2-2,s.width,s.height+o*2-2,this.seed),R(e,0,s.height+o*2-2,s.width,s.height+o*2-2,this.seed)}};at([m({type:Number}),jt("design:type",Object)],je.prototype,"elevation",void 0);at([m({type:String}),jt("design:type",String)],je.prototype,"href",void 0);at([m({type:String}),jt("design:type",String)],je.prototype,"target",void 0);at([$("a"),jt("design:type",HTMLAnchorElement)],je.prototype,"anchor",void 0);je=at([M("wired-link")],je);var Tt=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ai=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},lt=class extends _{constructor(){super(...arguments),this.horizontal=!1,this.itemNodes=[],this.itemClickHandler=this.onItemClick.bind(this)}static get styles(){return[S,x`
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
      `]}render(){return k`
    <slot id="slot" @slotchange="${()=>this.requestUpdate()}"></slot>
    <div id="overlay">
      <svg id="svg"></svg>
    </div>
    `}firstUpdated(){this.setAttribute("role","listbox"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.refreshSelection(),this.addEventListener("click",this.itemClickHandler),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){if(super.updated(),this.horizontal?this.classList.add("wired-horizontal"):this.classList.remove("wired-horizontal"),!this.itemNodes.length){this.itemNodes=[];let e=this.shadowRoot.getElementById("slot").assignedNodes();if(e&&e.length)for(let t=0;t<e.length;t++){let i=e[t];i.tagName==="WIRED-ITEM"&&(i.setAttribute("role","option"),this.itemNodes.push(i))}}}onItemClick(e){e.stopPropagation(),this.selected=e.target.value,this.refreshSelection(),this.fireSelected()}refreshSelection(){this.lastSelectedItem&&(this.lastSelectedItem.selected=!1,this.lastSelectedItem.removeAttribute("aria-selected"));let t=this.shadowRoot.getElementById("slot").assignedNodes();if(t){let i=null;for(let s=0;s<t.length;s++){let o=t[s];if(o.tagName==="WIRED-ITEM"){let r=o.value||"";if(this.selected&&r===this.selected){i=o;break}}}this.lastSelectedItem=i||void 0,this.lastSelectedItem&&(this.lastSelectedItem.selected=!0,this.lastSelectedItem.setAttribute("aria-selected","true")),i?this.value={value:i.value||"",text:i.textContent||""}:this.value=void 0}}fireSelected(){this.fire("selected",{selected:this.selected})}selectPrevious(){let e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}selectNext(){let e=this.itemNodes;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.lastSelectedItem){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].value||"",this.refreshSelection(),this.fireSelected()}}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,0,0,t[0],t[1],this.seed)}};Tt([m({type:Object}),Ai("design:type",Object)],lt.prototype,"value",void 0);Tt([m({type:String}),Ai("design:type",String)],lt.prototype,"selected",void 0);Tt([m({type:Boolean}),Ai("design:type",Object)],lt.prototype,"horizontal",void 0);lt=Tt([M("wired-listbox")],lt);var ht=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Bt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},ce=class extends _{constructor(){super(...arguments),this.value=0,this.min=0,this.max=100,this.percentage=!1}static get styles(){return[S,x`
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
      `]}render(){return k`
    <div id="overlay" class="overlay">
      <svg></svg>
    </div>
    <div class="overlay labelContainer">
      <div class="progressLabel">${this.getProgressLabel()}</div>
    </div>
    `}getProgressLabel(){return this.percentage?this.max===this.min?"%":Math.floor((this.value-this.min)/(this.max-this.min)*100)+"%":""+this.value}wiredRender(e=!1){super.wiredRender(e),this.refreshProgressFill()}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-2,t[1]-2,this.seed)}refreshProgressFill(){if(this.progBox&&(this.progBox.parentElement&&this.progBox.parentElement.removeChild(this.progBox),this.progBox=void 0),this.svg){let e=0,t=this.getBoundingClientRect();if(this.max>this.min){e=(this.value-this.min)/(this.max-this.min);let i=t.width*Math.max(0,Math.min(e,100));this.progBox=ve([[0,0],[i,0],[i,t.height],[0,t.height]],this.seed),this.svg.appendChild(this.progBox),this.progBox.classList.add("progbox")}}}};ht([m({type:Number}),Bt("design:type",Object)],ce.prototype,"value",void 0);ht([m({type:Number}),Bt("design:type",Object)],ce.prototype,"min",void 0);ht([m({type:Number}),Bt("design:type",Object)],ce.prototype,"max",void 0);ht([m({type:Boolean}),Bt("design:type",Object)],ce.prototype,"percentage",void 0);ce=ht([M("wired-progress")],ce);var Te=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},ct=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},we=class extends _{constructor(){super(...arguments),this.checked=!1,this.disabled=!1,this.focused=!1}static get styles(){return[S,x`
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
      `]}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshCheckVisibility()}render(){return k`
    <label id="container" class="${this.focused?"focused":""}">
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}" 
        @change="${this.onChange}"
        @focus="${()=>this.focused=!0}"
        @blur="${()=>this.focused=!1}">
      <span><slot></slot></span>
      <div id="overlay"><svg></svg></div>
    </label>
    `}onChange(){this.checked=this.input.checked,this.refreshCheckVisibility(),this.fire("change",{checked:this.checked})}canvasSize(){return[24,24]}draw(e,t){U(e,t[0]/2,t[1]/2,t[0],t[1],this.seed),this.svgCheck=se("g"),e.appendChild(this.svgCheck);let i=Math.max(t[0]*.6,5),s=Math.max(t[1]*.6,5);U(this.svgCheck,t[0]/2,t[1]/2,i,s,this.seed)}refreshCheckVisibility(){this.svgCheck&&(this.svgCheck.style.display=this.checked?"":"none")}};Te([m({type:Boolean}),ct("design:type",Object)],we.prototype,"checked",void 0);Te([m({type:Boolean,reflect:!0}),ct("design:type",Object)],we.prototype,"disabled",void 0);Te([m({type:String}),ct("design:type",String)],we.prototype,"name",void 0);Te([m(),ct("design:type",Object)],we.prototype,"focused",void 0);Te([$("input"),ct("design:type",HTMLInputElement)],we.prototype,"input",void 0);we=Te([M("wired-radio")],we);var Ns=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Po=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Pi=class extends H{constructor(){super(...arguments),this.radioNodes=[],this.checkListener=this.handleChecked.bind(this)}static get styles(){return x`
      :host {
        display: inline-block;
        font-family: inherit;
        outline: none;
      }
      :host ::slotted(*) {
        padding: var(--wired-radio-group-item-padding, 5px);
      }
    `}render(){return k`<slot id="slot" @slotchange="${this.slotChange}"></slot>`}connectedCallback(){super.connectedCallback(),this.addEventListener("change",this.checkListener)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("change",this.checkListener)}handleChecked(e){let t=e.detail.checked,i=e.target,s=i.name||"";t?(this.selected=t&&s||"",this.fireSelected()):i.checked=!0}slotChange(){this.requestUpdate()}firstUpdated(){this.setAttribute("role","radiogroup"),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){let t=this.shadowRoot.getElementById("slot").assignedNodes();if(this.radioNodes=[],t&&t.length)for(let i=0;i<t.length;i++){let s=t[i];if(s.tagName==="WIRED-RADIO"){this.radioNodes.push(s);let o=s.name||"";this.selected&&o===this.selected?s.checked=!0:s.checked=!1}}}selectPrevious(){let e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){i=s;break}i<0?t=e[0]:(i--,i<0&&(i=e.length-1),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}selectNext(){let e=this.radioNodes;if(e.length){let t=null,i=-1;if(this.selected){for(let s=0;s<e.length;s++)if(e[s].name===this.selected){i=s;break}i<0?t=e[0]:(i++,i>=e.length&&(i=0),t=e[i])}else t=e[0];t&&(t.focus(),this.selected=t.name,this.fireSelected())}}fireSelected(){Qe(this,"selected",{selected:this.selected})}};Ns([m({type:String}),Po("design:type",String)],Pi.prototype,"selected",void 0);Pi=Ns([M("wired-radio-group")],Pi);var xe=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Be=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},de=class extends _{constructor(){super(...arguments),this.disabled=!1,this.placeholder="",this.autocomplete="",this.autocorrect="",this.autofocus=!1}static get styles(){return[S,x`
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
      `]}render(){return k`
    <input type="search" placeholder="${this.placeholder}" ?disabled="${this.disabled}"
      autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" 
      autocapitalize="${this.autocapitalize}" autocorrect="${this.autocorrect}" 
      @change="${this.refire}" @input="${this.refire}">
    <div id="overlay">
      <svg></svg>
    </div>
    <button @click="${()=>this.value=""}"></button>
    `}get input(){return this.textInput}get value(){let e=this.input;return e&&e.value||""}set value(e){if(this.shadowRoot){let t=this.input;t&&(t.value=e),this.refreshIconState()}else this.pendingValue=e}wiredRender(e=!1){super.wiredRender(e),this.refreshIconState()}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-2,t[1]-2,this.seed),this.searchIcon=se("g"),this.searchIcon.classList.add("thicker"),e.appendChild(this.searchIcon),U(this.searchIcon,t[0]-30,(t[1]-30)/2+10,20,20,this.seed),R(this.searchIcon,t[0]-10,(t[1]-30)/2+30,t[0]-25,(t[1]-30)/2+15,this.seed),this.closeIcon=se("g"),this.closeIcon.classList.add("thicker"),e.appendChild(this.closeIcon),R(this.closeIcon,t[0]-33,(t[1]-30)/2+2,t[0]-7,(t[1]-30)/2+28,this.seed),R(this.closeIcon,t[0]-7,(t[1]-30)/2+2,t[0]-33,(t[1]-30)/2+28,this.seed)}refreshIconState(){this.searchIcon&&this.closeIcon&&(this.searchIcon.style.display=this.value.trim()?"none":"",this.closeIcon.style.display=this.value.trim()?"":"none")}refire(e){this.refreshIconState(),e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};xe([m({type:Boolean,reflect:!0}),Be("design:type",Object)],de.prototype,"disabled",void 0);xe([m({type:String}),Be("design:type",Object)],de.prototype,"placeholder",void 0);xe([m({type:String}),Be("design:type",Object)],de.prototype,"autocomplete",void 0);xe([m({type:String}),Be("design:type",Object)],de.prototype,"autocorrect",void 0);xe([m({type:Boolean}),Be("design:type",Object)],de.prototype,"autofocus",void 0);xe([$("input"),Be("design:type",HTMLInputElement)],de.prototype,"textInput",void 0);de=xe([M("wired-search-input")],de);var Ne=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},dt=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},ae=class extends _{constructor(){super(...arguments),this.min=0,this.max=100,this.step=1,this.disabled=!1,this.canvasWidth=300}static get styles(){return[S,x`
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
      `]}get value(){return this.input?+this.input.value:this.min}set value(e){this.input?this.input.value=`${e}`:this.pendingValue=e,this.updateThumbPosition()}firstUpdated(){this.value=this.pendingValue||+(this.getAttribute("value")||this.value||this.min),delete this.pendingValue}render(){return k`
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
    `}focus(){this.input?this.input.focus():super.focus()}onInput(e){e.stopPropagation(),this.updateThumbPosition(),this.input&&this.fire("change",{value:+this.input.value})}wiredRender(e=!1){super.wiredRender(e),this.updateThumbPosition()}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){this.canvasWidth=t[0];let i=Math.round(t[1]/2);R(e,0,i,t[0],i,this.seed).classList.add("bar"),this.knob=U(e,10,i,20,20,this.seed),this.knob.classList.add("knob")}updateThumbPosition(){if(this.input){let e=+this.input.value,t=Math.max(this.step,this.max-this.min),i=(e-this.min)/t;this.knob&&(this.knob.style.transform=`translateX(${i*(this.canvasWidth-20)}px)`)}}};Ne([m({type:Number}),dt("design:type",Object)],ae.prototype,"min",void 0);Ne([m({type:Number}),dt("design:type",Object)],ae.prototype,"max",void 0);Ne([m({type:Number}),dt("design:type",Object)],ae.prototype,"step",void 0);Ne([m({type:Boolean,reflect:!0}),dt("design:type",Object)],ae.prototype,"disabled",void 0);Ne([$("input"),dt("design:type",HTMLInputElement)],ae.prototype,"input",void 0);ae=Ne([M("wired-slider")],ae);var zi=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ws=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Nt=class extends _{constructor(){super(...arguments),this.spinning=!1,this.duration=1500,this.value=0,this.timerstart=0,this.frame=0}static get styles(){return[S,x`
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
      `]}render(){return k`<svg></svg>`}canvasSize(){return[76,76]}draw(e,t){U(e,t[0]/2,t[1]/2,Math.floor(t[0]*.8),Math.floor(.8*t[1]),this.seed),this.knob=Pe(0,0,20,20,this.seed),this.knob.classList.add("knob"),e.appendChild(this.knob),this.updateCursor()}updateCursor(){if(this.knob){let e=[Math.round(38+25*Math.cos(this.value*Math.PI*2)),Math.round(38+25*Math.sin(this.value*Math.PI*2))];this.knob.style.transform=`translate3d(${e[0]}px, ${e[1]}px, 0) rotateZ(${Math.round(this.value*360*2)}deg)`}}updated(){super.updated(),this.spinning?this.startSpinner():this.stopSpinner()}startSpinner(){this.stopSpinner(),this.value=0,this.timerstart=0,this.nextTick()}stopSpinner(){this.frame&&(window.cancelAnimationFrame(this.frame),this.frame=0)}nextTick(){this.frame=window.requestAnimationFrame(e=>this.tick(e))}tick(e){this.spinning?(this.timerstart||(this.timerstart=e),this.value=Math.min(1,(e-this.timerstart)/this.duration),this.updateCursor(),this.value>=1&&(this.value=0,this.timerstart=0),this.nextTick()):this.frame=0}};zi([m({type:Boolean}),Ws("design:type",Object)],Nt.prototype,"spinning",void 0);zi([m({type:Number}),Ws("design:type",Object)],Nt.prototype,"duration",void 0);Nt=zi([M("wired-spinner")],Nt);var Li=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ii=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Wt=class extends _{constructor(){super(),this.name="",this.label="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[S,x`
        :host {
          display: inline-block;
          position: relative;
          padding: 10px;
        }
      `]}render(){return k`
    <div>
      <slot @slotchange="${this.wiredRender}"></slot>
    </div>
    <div id="overlay"><svg></svg></div>
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-4,t[1]-4,this.seed)}};Li([m({type:String}),Ii("design:type",Object)],Wt.prototype,"name",void 0);Li([m({type:String}),Ii("design:type",Object)],Wt.prototype,"label",void 0);Wt=Li([M("wired-tab"),Ii("design:paramtypes",[])],Wt);var ji=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Hs=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Ht=class extends H{constructor(){super(...arguments),this.pages=[],this.pageMap=new Map}static get styles(){return[S,x`
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
      `]}render(){return k`
    <div id="bar">
      ${this.pages.map(e=>k`
      <wired-item role="tab" .value="${e.name}" .selected="${e.name===this.selected}" ?aria-selected="${e.name===this.selected}"
        @click="${()=>this.selected=e.name}">${e.label||e.name}</wired-item>
      `)}
    </div>
    <div>
      <slot @slotchange="${this.mapPages}"></slot>
    </div>
    `}mapPages(){if(this.pages=[],this.pageMap.clear(),this.slotElement){let e=this.slotElement.assignedNodes();if(e&&e.length){for(let t=0;t<e.length;t++){let i=e[t];if(i.nodeType===Node.ELEMENT_NODE&&i.tagName.toLowerCase()==="wired-tab"){let s=i;this.pages.push(s);let o=s.getAttribute("name")||"";o&&o.trim().split(" ").forEach(r=>{r&&this.pageMap.set(r,s)})}}this.selected||this.pages.length&&(this.selected=this.pages[0].name),this.requestUpdate()}}}firstUpdated(){this.mapPages(),this.tabIndex=+(this.getAttribute("tabindex")||0),this.addEventListener("keydown",e=>{switch(e.keyCode){case 37:case 38:e.preventDefault(),this.selectPrevious();break;case 39:case 40:e.preventDefault(),this.selectNext();break}})}updated(){let e=this.getElement();for(let t=0;t<this.pages.length;t++){let i=this.pages[t];i===e?i.classList.remove("hidden"):i.classList.add("hidden")}this.current=e||void 0,this.current&&this.current.wiredRender&&requestAnimationFrame(()=>requestAnimationFrame(()=>this.current.wiredRender()))}getElement(){let e;return this.selected&&(e=this.pageMap.get(this.selected)),e||(e=this.pages[0]),e||null}selectPrevious(){let e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0?t=0:t===0?t=e.length-1:t--,this.selected=e[t].name||""}}selectNext(){let e=this.pages;if(e.length){let t=-1;for(let i=0;i<e.length;i++)if(e[i]===this.current){t=i;break}t<0||t>=e.length-1?t=0:t++,this.selected=e[t].name||""}}};ji([m({type:String}),Hs("design:type",String)],Ht.prototype,"selected",void 0);ji([$("slot"),Hs("design:type",HTMLSlotElement)],Ht.prototype,"slotElement",void 0);Ht=ji([M("wired-tabs")],Ht);var F=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},K=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},V=class extends _{constructor(){super(...arguments),this.disabled=!1,this.rows=2,this.maxrows=0,this.autocomplete="",this.autofocus=!1,this.inputmode="",this.placeholder="",this.required=!1,this.readonly=!1}static get styles(){return[S,x`
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
      `]}render(){return k`
    <textarea id="textarea" autocomplete="${this.autocomplete}" ?autofocus="${this.autofocus}" inputmode="${this.inputmode}"
      placeholder="${this.placeholder}" ?readonly="${this.readonly}" ?required="${this.required}" ?disabled="${this.disabled}"
      rows="${this.rows}" minlength="${this.minlength}" maxlength="${this.maxlength}"
      @change="${this.refire}" @input="${this.refire}"></textarea>
    <div id="overlay">
      <svg></svg>
    </div>
    `}get textarea(){return this.textareaInput}get value(){let e=this.textarea;return e&&e.value||""}set value(e){if(this.shadowRoot){let t=this.textarea;if(t){t.value=e;return}}this.pendingValue=e}firstUpdated(){this.value=this.pendingValue||this.value||this.getAttribute("value")||"",delete this.pendingValue}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,4,4,t[0]-4,t[1]-4,this.seed)}refire(e){e.stopPropagation(),this.fire(e.type,{sourceEvent:e})}};F([m({type:Boolean,reflect:!0}),K("design:type",Object)],V.prototype,"disabled",void 0);F([m({type:Number}),K("design:type",Object)],V.prototype,"rows",void 0);F([m({type:Number}),K("design:type",Object)],V.prototype,"maxrows",void 0);F([m({type:String}),K("design:type",Object)],V.prototype,"autocomplete",void 0);F([m({type:Boolean}),K("design:type",Object)],V.prototype,"autofocus",void 0);F([m({type:String}),K("design:type",Object)],V.prototype,"inputmode",void 0);F([m({type:String}),K("design:type",Object)],V.prototype,"placeholder",void 0);F([m({type:Boolean}),K("design:type",Object)],V.prototype,"required",void 0);F([m({type:Boolean}),K("design:type",Object)],V.prototype,"readonly",void 0);F([m({type:Number}),K("design:type",Number)],V.prototype,"minlength",void 0);F([m({type:Number}),K("design:type",Number)],V.prototype,"maxlength",void 0);F([$("textarea"),K("design:type",HTMLTextAreaElement)],V.prototype,"textareaInput",void 0);V=F([M("wired-textarea")],V);var Dt=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},Ti=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},pt=class extends _{constructor(){super(...arguments),this.checked=!1,this.disabled=!1}static get styles(){return[S,x`
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
      `]}render(){return k`
    <div style="position: relative;">
      <svg></svg>
      <input type="checkbox" .checked="${this.checked}" ?disabled="${this.disabled}"  @change="${this.onChange}">
    </div>
    `}focus(){this.input?this.input.focus():super.focus()}wiredRender(e=!1){super.wiredRender(e),this.refreshKnob()}onChange(){this.checked=this.input.checked,this.refreshKnob(),this.fire("change",{checked:this.checked})}canvasSize(){return[80,34]}draw(e,t){C(e,16,8,t[0]-32,18,this.seed).classList.add("toggle-bar"),this.knob=se("g"),this.knob.classList.add("knob"),e.appendChild(this.knob);let s=Pe(16,16,32,32,this.seed);s.classList.add("knobfill"),this.knob.appendChild(s),U(this.knob,16,16,32,32,this.seed)}refreshKnob(){if(this.knob){let e=this.knob.classList;this.checked?(e.remove("unchecked"),e.add("checked")):(e.remove("checked"),e.add("unchecked"))}}};Dt([m({type:Boolean}),Ti("design:type",Object)],pt.prototype,"checked",void 0);Dt([m({type:Boolean,reflect:!0}),Ti("design:type",Object)],pt.prototype,"disabled",void 0);Dt([$("input"),Ti("design:type",HTMLInputElement)],pt.prototype,"input",void 0);pt=Dt([M("wired-toggle")],pt);var X=function(n,e,t,i){var s=arguments.length,o=s<3?e:i===null?i=Object.getOwnPropertyDescriptor(e,t):i,r;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")o=Reflect.decorate(n,e,t,i);else for(var a=n.length-1;a>=0;a--)(r=n[a])&&(o=(s<3?r(o):s>3?r(e,t,o):r(e,t))||o);return s>3&&o&&Object.defineProperty(e,t,o),o},J=function(n,e){if(typeof Reflect=="object"&&typeof Reflect.metadata=="function")return Reflect.metadata(n,e)},Y=class extends _{constructor(){super(),this.src="",this.autoplay=!1,this.loop=!1,this.muted=!1,this.playsinline=!1,this.playing=!1,this.timeDisplay="",window.ResizeObserver&&(this.resizeObserver=new window.ResizeObserver(()=>{this.svg&&this.wiredRender()}))}static get styles(){return[S,x`
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
      `]}render(){return k`
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
    `}updated(){super.updated(),this.attachResizeListener()}disconnectedCallback(){this.detachResizeListener()}attachResizeListener(){this.resizeObserver&&this.resizeObserver.observe?this.resizeObserver.observe(this):this.windowResizeHandler||(this.windowResizeHandler=()=>this.wiredRender(),window.addEventListener("resize",this.windowResizeHandler,{passive:!0}))}detachResizeListener(){this.resizeObserver&&this.resizeObserver.unobserve&&this.resizeObserver.unobserve(this),this.windowResizeHandler&&window.removeEventListener("resize",this.windowResizeHandler)}wiredRender(){super.wiredRender(),this.progressBar&&this.progressBar.wiredRender(!0)}canvasSize(){let e=this.getBoundingClientRect();return[e.width,e.height]}draw(e,t){C(e,2,2,t[0]-4,t[1]-4,this.seed)}updateTime(){this.video&&this.progressBar&&(this.progressBar.value=this.video.duration?Math.round(this.video.currentTime/this.video.duration*100):0,this.timeDisplay=`${this.getTimeDisplay(this.video.currentTime)} / ${this.getTimeDisplay(this.video.duration)}`)}getTimeDisplay(e){let t=Math.floor(e/60),i=Math.round(e-t*60);return`${t}:${i}`}togglePause(){this.video&&(this.playing?this.video.pause():this.video.play())}volumeChange(){this.video&&this.slider&&(this.video.volume=this.slider.value/100)}canPlay(){this.slider&&this.video&&(this.slider.value=this.video.volume*100)}};X([m({type:String}),J("design:type",Object)],Y.prototype,"src",void 0);X([m({type:Boolean}),J("design:type",Object)],Y.prototype,"autoplay",void 0);X([m({type:Boolean}),J("design:type",Object)],Y.prototype,"loop",void 0);X([m({type:Boolean}),J("design:type",Object)],Y.prototype,"muted",void 0);X([m({type:Boolean}),J("design:type",Object)],Y.prototype,"playsinline",void 0);X([m(),J("design:type",Object)],Y.prototype,"playing",void 0);X([m(),J("design:type",Object)],Y.prototype,"timeDisplay",void 0);X([$("wired-progress"),J("design:type",ce)],Y.prototype,"progressBar",void 0);X([$("wired-slider"),J("design:type",ae)],Y.prototype,"slider",void 0);X([$("video"),J("design:type",HTMLVideoElement)],Y.prototype,"video",void 0);Y=X([M("wired-video"),J("design:paramtypes",[])],Y);function Bi(n,e,t){if(n&&n.length){let[i,s]=e,o=Math.PI/180*t,r=Math.cos(o),a=Math.sin(o);n.forEach(l=>{let[h,c]=l;l[0]=(h-i)*r-(c-s)*a+i,l[1]=(h-i)*a+(c-s)*r+s})}}function pe(n){let e=n[0],t=n[1];return Math.sqrt(Math.pow(e[0]-t[0],2)+Math.pow(e[1]-t[1],2))}function zo(n,e,t,i){let s=e[1]-n[1],o=n[0]-e[0],r=s*n[0]+o*n[1],a=i[1]-t[1],l=t[0]-i[0],h=a*t[0]+l*t[1],c=s*l-a*o;return c?[(l*r-o*h)/c,(s*h-a*r)/c]:null}function Ni(n,e,t){let i=n.length;if(i<3)return!1;let s=[Number.MAX_SAFE_INTEGER,t],o=[e,t],r=0;for(let a=0;a<i;a++){let l=n[a],h=n[(a+1)%i];if(Ks(l,h,o,s)){if(bt(l,o,h)===0)return gt(l,o,h);r++}}return r%2==1}function gt(n,e,t){return e[0]<=Math.max(n[0],t[0])&&e[0]>=Math.min(n[0],t[0])&&e[1]<=Math.max(n[1],t[1])&&e[1]>=Math.min(n[1],t[1])}function bt(n,e,t){let i=(e[1]-n[1])*(t[0]-e[0])-(e[0]-n[0])*(t[1]-e[1]);return i===0?0:i>0?1:2}function Ks(n,e,t,i){let s=bt(n,e,t),o=bt(n,e,i),r=bt(t,i,n),a=bt(t,i,e);return s!==o&&r!==a||!(s!==0||!gt(n,t,e))||!(o!==0||!gt(n,i,e))||!(r!==0||!gt(t,n,i))||!(a!==0||!gt(t,e,i))}function Kt(n,e){let t=[0,0],i=Math.round(e.hachureAngle+90);i&&Bi(n,t,i);let s=(function(o,r){let a=[...o];a[0].join(",")!==a[a.length-1].join(",")&&a.push([a[0][0],a[0][1]]);let l=[];if(a&&a.length>2){let h=r.hachureGap;h<0&&(h=4*r.strokeWidth),h=Math.max(h,.1);let c=[];for(let u=0;u<a.length-1;u++){let p=a[u],g=a[u+1];if(p[1]!==g[1]){let b=Math.min(p[1],g[1]);c.push({ymin:b,ymax:Math.max(p[1],g[1]),x:b===p[1]?p[0]:g[0],islope:(g[0]-p[0])/(g[1]-p[1])})}}if(c.sort((u,p)=>u.ymin<p.ymin?-1:u.ymin>p.ymin?1:u.x<p.x?-1:u.x>p.x?1:u.ymax===p.ymax?0:(u.ymax-p.ymax)/Math.abs(u.ymax-p.ymax)),!c.length)return l;let f=[],d=c[0].ymin;for(;f.length||c.length;){if(c.length){let u=-1;for(let p=0;p<c.length&&!(c[p].ymin>d);p++)u=p;c.splice(0,u+1).forEach(p=>{f.push({s:d,edge:p})})}if(f=f.filter(u=>!(u.edge.ymax<=d)),f.sort((u,p)=>u.edge.x===p.edge.x?0:(u.edge.x-p.edge.x)/Math.abs(u.edge.x-p.edge.x)),f.length>1)for(let u=0;u<f.length;u+=2){let p=u+1;if(p>=f.length)break;let g=f[u].edge,b=f[p].edge;l.push([[Math.round(g.x),d],[Math.round(b.x),d]])}d+=h,f.forEach(u=>{u.edge.x=u.edge.x+h*u.edge.islope})}}return l})(n,e);return i&&(Bi(n,t,-i),(function(o,r,a){let l=[];o.forEach(h=>l.push(...h)),Bi(l,r,a)})(s,t,-i)),s}var vt=class{constructor(e){this.helper=e}fillPolygon(e,t){return this._fillPolygon(e,t)}_fillPolygon(e,t,i=!1){let s=Kt(e,t);if(i){let o=this.connectingLines(e,s);s=s.concat(o)}return{type:"fillSketch",ops:this.renderLines(s,t)}}renderLines(e,t){let i=[];for(let s of e)i.push(...this.helper.doubleLineOps(s[0][0],s[0][1],s[1][0],s[1][1],t));return i}connectingLines(e,t){let i=[];if(t.length>1)for(let s=1;s<t.length;s++){let o=t[s-1];if(pe(o)<3)continue;let r=[t[s][0],o[1]];if(pe(r)>3){let a=this.splitOnIntersections(e,r);i.push(...a)}}return i}midPointInPolygon(e,t){return Ni(e,(t[0][0]+t[1][0])/2,(t[0][1]+t[1][1])/2)}splitOnIntersections(e,t){let i=Math.max(5,.1*pe(t)),s=[];for(let o=0;o<e.length;o++){let r=e[o],a=e[(o+1)%e.length];if(Ks(r,a,...t)){let l=zo(r,a,t[0],t[1]);if(l){let h=pe([l,t[0]]),c=pe([l,t[1]]);h>i&&c>i&&s.push({point:l,distance:h})}}}if(s.length>1){let o=s.sort((l,h)=>l.distance-h.distance).map(l=>l.point);if(Ni(e,...t[0])||o.shift(),Ni(e,...t[1])||o.pop(),o.length<=1)return this.midPointInPolygon(e,t)?[t]:[];let r=[t[0],...o,t[1]],a=[];for(let l=0;l<r.length-1;l+=2){let h=[r[l],r[l+1]];this.midPointInPolygon(e,h)&&a.push(h)}return a}return this.midPointInPolygon(e,t)?[t]:[]}},Hi=class extends vt{fillPolygon(e,t){return this._fillPolygon(e,t,!0)}},Di=class extends vt{fillPolygon(e,t){let i=this._fillPolygon(e,t),s=Object.assign({},t,{hachureAngle:t.hachureAngle+90}),o=this._fillPolygon(e,s);return i.ops=i.ops.concat(o.ops),i}},Vi=class{constructor(e){this.helper=e}fillPolygon(e,t){let i=Kt(e,t=Object.assign({},t,{curveStepCount:4,hachureAngle:0,roughness:1}));return this.dotsOnLines(i,t)}dotsOnLines(e,t){let i=[],s=t.hachureGap;s<0&&(s=4*t.strokeWidth),s=Math.max(s,.1);let o=t.fillWeight;o<0&&(o=t.strokeWidth/2);let r=s/4;for(let a of e){let l=pe(a),h=l/s,c=Math.ceil(h)-1,f=l-c*s,d=(a[0][0]+a[1][0])/2-s/4,u=Math.min(a[0][1],a[1][1]);for(let p=0;p<c;p++){let g=u+f+p*s,b=this.helper.randOffsetWithRange(d-r,d+r,t),v=this.helper.randOffsetWithRange(g-r,g+r,t),y=this.helper.ellipse(b,v,o,o,t);i.push(...y.ops)}}return{type:"fillSketch",ops:i}}},qi=class{constructor(e){this.helper=e}fillPolygon(e,t){let i=Kt(e,t);return{type:"fillSketch",ops:this.dashedLine(i,t)}}dashedLine(e,t){let i=t.dashOffset<0?t.hachureGap<0?4*t.strokeWidth:t.hachureGap:t.dashOffset,s=t.dashGap<0?t.hachureGap<0?4*t.strokeWidth:t.hachureGap:t.dashGap,o=[];return e.forEach(r=>{let a=pe(r),l=Math.floor(a/(i+s)),h=(a+s-l*(i+s))/2,c=r[0],f=r[1];c[0]>f[0]&&(c=r[1],f=r[0]);let d=Math.atan((f[1]-c[1])/(f[0]-c[0]));for(let u=0;u<l;u++){let p=u*(i+s),g=p+i,b=[c[0]+p*Math.cos(d)+h*Math.cos(d),c[1]+p*Math.sin(d)+h*Math.sin(d)],v=[c[0]+g*Math.cos(d)+h*Math.cos(d),c[1]+g*Math.sin(d)+h*Math.sin(d)];o.push(...this.helper.doubleLineOps(b[0],b[1],v[0],v[1],t))}}),o}},Ui=class{constructor(e){this.helper=e}fillPolygon(e,t){let i=t.hachureGap<0?4*t.strokeWidth:t.hachureGap,s=t.zigzagOffset<0?i:t.zigzagOffset,o=Kt(e,t=Object.assign({},t,{hachureGap:i+s}));return{type:"fillSketch",ops:this.zigzagLines(o,s,t)}}zigzagLines(e,t,i){let s=[];return e.forEach(o=>{let r=pe(o),a=Math.round(r/(2*t)),l=o[0],h=o[1];l[0]>h[0]&&(l=o[1],h=o[0]);let c=Math.atan((h[1]-l[1])/(h[0]-l[0]));for(let f=0;f<a;f++){let d=2*f*t,u=2*(f+1)*t,p=Math.sqrt(2*Math.pow(t,2)),g=[l[0]+d*Math.cos(c),l[1]+d*Math.sin(c)],b=[l[0]+u*Math.cos(c),l[1]+u*Math.sin(c)],v=[g[0]+p*Math.cos(c+Math.PI/4),g[1]+p*Math.sin(c+Math.PI/4)];s.push(...this.helper.doubleLineOps(g[0],g[1],v[0],v[1],i),...this.helper.doubleLineOps(v[0],v[1],b[0],b[1],i))}}),s}},q={},Fi=class{constructor(e){this.seed=e}next(){return this.seed?(2**31-1&(this.seed=Math.imul(48271,this.seed)))/2**31:Math.random()}},Vt={A:7,a:7,C:6,c:6,H:1,h:1,L:2,l:2,M:2,m:2,Q:4,q:4,S:4,s:4,T:2,t:2,V:1,v:1,Z:0,z:0};function Wi(n,e){return n.type===e}function Gi(n){let e=[],t=(function(r){let a=new Array;for(;r!=="";)if(r.match(/^([ \t\r\n,]+)/))r=r.substr(RegExp.$1.length);else if(r.match(/^([aAcChHlLmMqQsStTvVzZ])/))a[a.length]={type:0,text:RegExp.$1},r=r.substr(RegExp.$1.length);else{if(!r.match(/^(([-+]?[0-9]+(\.[0-9]*)?|[-+]?\.[0-9]+)([eE][-+]?[0-9]+)?)/))return[];a[a.length]={type:1,text:""+parseFloat(RegExp.$1)},r=r.substr(RegExp.$1.length)}return a[a.length]={type:2,text:""},a})(n),i="BOD",s=0,o=t[s];for(;!Wi(o,2);){let r=0,a=[];if(i==="BOD"){if(o.text!=="M"&&o.text!=="m")return Gi("M0,0"+n);s++,r=Vt[o.text],i=o.text}else Wi(o,1)?r=Vt[i]:(s++,r=Vt[o.text],i=o.text);if(!(s+r<t.length))throw new Error("Path data ended short");for(let l=s;l<s+r;l++){let h=t[l];if(!Wi(h,1))throw new Error("Param not a number: "+i+","+h.text);a[a.length]=+h.text}if(typeof Vt[i]!="number")throw new Error("Bad segment: "+i);{let l={key:i,data:a};e.push(l),s+=r,o=t[s],i==="M"&&(i="L"),i==="m"&&(i="l")}}return e}function Ds(n){let e=0,t=0,i=0,s=0,o=[];for(let{key:r,data:a}of n)switch(r){case"M":o.push({key:"M",data:[...a]}),[e,t]=a,[i,s]=a;break;case"m":e+=a[0],t+=a[1],o.push({key:"M",data:[e,t]}),i=e,s=t;break;case"L":o.push({key:"L",data:[...a]}),[e,t]=a;break;case"l":e+=a[0],t+=a[1],o.push({key:"L",data:[e,t]});break;case"C":o.push({key:"C",data:[...a]}),e=a[4],t=a[5];break;case"c":{let l=a.map((h,c)=>c%2?h+t:h+e);o.push({key:"C",data:l}),e=l[4],t=l[5];break}case"Q":o.push({key:"Q",data:[...a]}),e=a[2],t=a[3];break;case"q":{let l=a.map((h,c)=>c%2?h+t:h+e);o.push({key:"Q",data:l}),e=l[2],t=l[3];break}case"A":o.push({key:"A",data:[...a]}),e=a[5],t=a[6];break;case"a":e+=a[5],t+=a[6],o.push({key:"A",data:[a[0],a[1],a[2],a[3],a[4],e,t]});break;case"H":o.push({key:"H",data:[...a]}),e=a[0];break;case"h":e+=a[0],o.push({key:"H",data:[e]});break;case"V":o.push({key:"V",data:[...a]}),t=a[0];break;case"v":t+=a[0],o.push({key:"V",data:[t]});break;case"S":o.push({key:"S",data:[...a]}),e=a[2],t=a[3];break;case"s":{let l=a.map((h,c)=>c%2?h+t:h+e);o.push({key:"S",data:l}),e=l[2],t=l[3];break}case"T":o.push({key:"T",data:[...a]}),e=a[0],t=a[1];break;case"t":e+=a[0],t+=a[1],o.push({key:"T",data:[e,t]});break;case"Z":case"z":o.push({key:"Z",data:[]}),e=i,t=s}return o}function Vs(n){let e=[],t="",i=0,s=0,o=0,r=0,a=0,l=0;for(let{key:h,data:c}of n){switch(h){case"M":e.push({key:"M",data:[...c]}),[i,s]=c,[o,r]=c;break;case"C":e.push({key:"C",data:[...c]}),i=c[4],s=c[5],a=c[2],l=c[3];break;case"L":e.push({key:"L",data:[...c]}),[i,s]=c;break;case"H":i=c[0],e.push({key:"L",data:[i,s]});break;case"V":s=c[0],e.push({key:"L",data:[i,s]});break;case"S":{let f=0,d=0;t==="C"||t==="S"?(f=i+(i-a),d=s+(s-l)):(f=i,d=s),e.push({key:"C",data:[f,d,...c]}),a=c[0],l=c[1],i=c[2],s=c[3];break}case"T":{let[f,d]=c,u=0,p=0;t==="Q"||t==="T"?(u=i+(i-a),p=s+(s-l)):(u=i,p=s);let g=i+2*(u-i)/3,b=s+2*(p-s)/3,v=f+2*(u-f)/3,y=d+2*(p-d)/3;e.push({key:"C",data:[g,b,v,y,f,d]}),a=u,l=p,i=f,s=d;break}case"Q":{let[f,d,u,p]=c,g=i+2*(f-i)/3,b=s+2*(d-s)/3,v=u+2*(f-u)/3,y=p+2*(d-p)/3;e.push({key:"C",data:[g,b,v,y,u,p]}),a=f,l=d,i=u,s=p;break}case"A":{let f=Math.abs(c[0]),d=Math.abs(c[1]),u=c[2],p=c[3],g=c[4],b=c[5],v=c[6];f===0||d===0?(e.push({key:"C",data:[i,s,b,v,b,v]}),i=b,s=v):(i!==b||s!==v)&&(Ys(i,s,b,v,f,d,u,p,g).forEach((function(y){e.push({key:"C",data:y})})),i=b,s=v);break}case"Z":e.push({key:"Z",data:[]}),i=o,s=r}t=h}return e}function ut(n,e,t){return[n*Math.cos(t)-e*Math.sin(t),n*Math.sin(t)+e*Math.cos(t)]}function Ys(n,e,t,i,s,o,r,a,l,h){let c=(f=r,Math.PI*f/180);var f;let d=[],u=0,p=0,g=0,b=0;if(h)[u,p,g,b]=h;else{[n,e]=ut(n,e,-c),[t,i]=ut(t,i,-c);let Q=(n-t)/2,L=(e-i)/2,ie=Q*Q/(s*s)+L*L/(o*o);ie>1&&(ie=Math.sqrt(ie),s*=ie,o*=ie);let Se=s*s,$e=o*o,co=Se*$e-Se*L*L-$e*Q*Q,po=Se*L*L+$e*Q*Q,ns=(a===l?-1:1)*Math.sqrt(Math.abs(co/po));g=ns*s*L/o+(n+t)/2,b=ns*-o*Q/s+(e+i)/2,u=Math.asin(parseFloat(((e-b)/o).toFixed(9))),p=Math.asin(parseFloat(((i-b)/o).toFixed(9))),n<g&&(u=Math.PI-u),t<g&&(p=Math.PI-p),u<0&&(u=2*Math.PI+u),p<0&&(p=2*Math.PI+p),l&&u>p&&(u-=2*Math.PI),!l&&p>u&&(p-=2*Math.PI)}let v=p-u;if(Math.abs(v)>120*Math.PI/180){let Q=p,L=t,ie=i;p=l&&p>u?u+120*Math.PI/180*1:u+120*Math.PI/180*-1,d=Ys(t=g+s*Math.cos(p),i=b+o*Math.sin(p),L,ie,s,o,r,0,l,[p,Q,g,b])}v=p-u;let y=Math.cos(u),E=Math.sin(u),A=Math.cos(p),O=Math.sin(p),N=Math.tan(v/4),Z=4/3*s*N,D=4/3*o*N,oe=[n,e],W=[n+Z*E,e-D*y],te=[t+Z*O,i-D*A],os=[t,i];if(W[0]=2*oe[0]-W[0],W[1]=2*oe[1]-W[1],h)return[W,te,os].concat(d);{d=[W,te,os].concat(d);let Q=[];for(let L=0;L<d.length;L+=3){let ie=ut(d[L][0],d[L][1],c),Se=ut(d[L+1][0],d[L+1][1],c),$e=ut(d[L+2][0],d[L+2][1],c);Q.push([ie[0],ie[1],Se[0],Se[1],$e[0],$e[1]])}return Q}}var Lo={randOffset:function(n,e){return w(n,e)},randOffsetWithRange:function(n,e,t){return Gt(n,e,t)},ellipse:function(n,e,t,i,s){let o=Js(t,i,s);return Zi(n,e,s,o).opset},doubleLineOps:function(n,e,t,i,s){return le(n,e,t,i,s,!0)}};function Xs(n,e,t,i,s){return{type:"path",ops:le(n,e,t,i,s)}}function Ut(n,e,t){let i=(n||[]).length;if(i>2){let s=[];for(let o=0;o<i-1;o++)s.push(...le(n[o][0],n[o][1],n[o+1][0],n[o+1][1],t));return e&&s.push(...le(n[i-1][0],n[i-1][1],n[0][0],n[0][1],t)),{type:"path",ops:s}}return i===2?Xs(n[0][0],n[0][1],n[1][0],n[1][1],t):{type:"path",ops:[]}}function Io(n,e,t,i,s){return(function(o,r){return Ut(o,!0,r)})([[n,e],[n+t,e],[n+t,e+i],[n,e+i]],s)}function jo(n,e){let t=Fs(n,1*(1+.2*e.roughness),e);if(!e.disableMultiStroke){let i=Fs(n,1.5*(1+.22*e.roughness),(function(s){let o=Object.assign({},s);return o.randomizer=void 0,s.seed&&(o.seed=s.seed+1),o})(e));t=t.concat(i)}return{type:"path",ops:t}}function Js(n,e,t){let i=Math.sqrt(2*Math.PI*Math.sqrt((Math.pow(n/2,2)+Math.pow(e/2,2))/2)),s=Math.max(t.curveStepCount,t.curveStepCount/Math.sqrt(200)*i),o=2*Math.PI/s,r=Math.abs(n/2),a=Math.abs(e/2),l=1-t.curveFitting;return r+=w(r*l,t),a+=w(a*l,t),{increment:o,rx:r,ry:a}}function Zi(n,e,t,i){let[s,o]=Gs(i.increment,n,e,i.rx,i.ry,1,i.increment*Gt(.1,Gt(.4,1,t),t),t),r=Zt(s,null,t);if(!t.disableMultiStroke){let[a]=Gs(i.increment,n,e,i.rx,i.ry,1.5,0,t),l=Zt(a,null,t);r=r.concat(l)}return{estimatedPoints:o,opset:{type:"path",ops:r}}}function qs(n,e,t,i,s,o,r,a,l){let h=n,c=e,f=Math.abs(t/2),d=Math.abs(i/2);f+=w(.01*f,l),d+=w(.01*d,l);let u=s,p=o;for(;u<0;)u+=2*Math.PI,p+=2*Math.PI;p-u>2*Math.PI&&(u=0,p=2*Math.PI);let g=2*Math.PI/l.curveStepCount,b=Math.min(g/2,(p-u)/2),v=Zs(b,h,c,f,d,u,p,1,l);if(!l.disableMultiStroke){let y=Zs(b,h,c,f,d,u,p,1.5,l);v.push(...y)}return r&&(a?v.push(...le(h,c,h+f*Math.cos(u),c+d*Math.sin(u),l),...le(h,c,h+f*Math.cos(p),c+d*Math.sin(p),l)):v.push({op:"lineTo",data:[h,c]},{op:"lineTo",data:[h+f*Math.cos(u),c+d*Math.sin(u)]})),{type:"path",ops:v}}function ft(n,e){let t=[];if(n.length){let i=e.maxRandomnessOffset||0,s=n.length;if(s>2){t.push({op:"move",data:[n[0][0]+w(i,e),n[0][1]+w(i,e)]});for(let o=1;o<s;o++)t.push({op:"lineTo",data:[n[o][0]+w(i,e),n[o][1]+w(i,e)]})}}return{type:"fillPath",ops:t}}function ke(n,e){return(function(t,i){let s=t.fillStyle||"hachure";if(!q[s])switch(s){case"zigzag":q[s]||(q[s]=new Hi(i));break;case"cross-hatch":q[s]||(q[s]=new Di(i));break;case"dots":q[s]||(q[s]=new Vi(i));break;case"dashed":q[s]||(q[s]=new qi(i));break;case"zigzag-line":q[s]||(q[s]=new Ui(i));break;default:s="hachure",q[s]||(q[s]=new vt(i))}return q[s]})(e,Lo).fillPolygon(n,e)}function eo(n){return n.randomizer||(n.randomizer=new Fi(n.seed||0)),n.randomizer.next()}function Gt(n,e,t,i=1){return t.roughness*i*(eo(t)*(e-n)+n)}function w(n,e,t=1){return Gt(-n,n,e,t)}function le(n,e,t,i,s,o=!1){let r=o?s.disableMultiStrokeFill:s.disableMultiStroke,a=Us(n,e,t,i,s,!0,!1);if(r)return a;let l=Us(n,e,t,i,s,!0,!0);return a.concat(l)}function Us(n,e,t,i,s,o,r){let a=Math.pow(n-t,2)+Math.pow(e-i,2),l=Math.sqrt(a),h=1;h=l<200?1:l>500?.4:-.0016668*l+1.233334;let c=s.maxRandomnessOffset||0;c*c*100>a&&(c=l/10);let f=c/2,d=.2+.2*eo(s),u=s.bowing*s.maxRandomnessOffset*(i-e)/200,p=s.bowing*s.maxRandomnessOffset*(n-t)/200;u=w(u,s,h),p=w(p,s,h);let g=[],b=()=>w(f,s,h),v=()=>w(c,s,h);return o&&(r?g.push({op:"move",data:[n+b(),e+b()]}):g.push({op:"move",data:[n+w(c,s,h),e+w(c,s,h)]})),r?g.push({op:"bcurveTo",data:[u+n+(t-n)*d+b(),p+e+(i-e)*d+b(),u+n+2*(t-n)*d+b(),p+e+2*(i-e)*d+b(),t+b(),i+b()]}):g.push({op:"bcurveTo",data:[u+n+(t-n)*d+v(),p+e+(i-e)*d+v(),u+n+2*(t-n)*d+v(),p+e+2*(i-e)*d+v(),t+v(),i+v()]}),g}function Fs(n,e,t){let i=[];i.push([n[0][0]+w(e,t),n[0][1]+w(e,t)]),i.push([n[0][0]+w(e,t),n[0][1]+w(e,t)]);for(let s=1;s<n.length;s++)i.push([n[s][0]+w(e,t),n[s][1]+w(e,t)]),s===n.length-1&&i.push([n[s][0]+w(e,t),n[s][1]+w(e,t)]);return Zt(i,null,t)}function Zt(n,e,t){let i=n.length,s=[];if(i>3){let o=[],r=1-t.curveTightness;s.push({op:"move",data:[n[1][0],n[1][1]]});for(let a=1;a+2<i;a++){let l=n[a];o[0]=[l[0],l[1]],o[1]=[l[0]+(r*n[a+1][0]-r*n[a-1][0])/6,l[1]+(r*n[a+1][1]-r*n[a-1][1])/6],o[2]=[n[a+1][0]+(r*n[a][0]-r*n[a+2][0])/6,n[a+1][1]+(r*n[a][1]-r*n[a+2][1])/6],o[3]=[n[a+1][0],n[a+1][1]],s.push({op:"bcurveTo",data:[o[1][0],o[1][1],o[2][0],o[2][1],o[3][0],o[3][1]]})}if(e&&e.length===2){let a=t.maxRandomnessOffset;s.push({op:"lineTo",data:[e[0]+w(a,t),e[1]+w(a,t)]})}}else i===3?(s.push({op:"move",data:[n[1][0],n[1][1]]}),s.push({op:"bcurveTo",data:[n[1][0],n[1][1],n[2][0],n[2][1],n[2][0],n[2][1]]})):i===2&&s.push(...le(n[0][0],n[0][1],n[1][0],n[1][1],t));return s}function Gs(n,e,t,i,s,o,r,a){let l=[],h=[],c=w(.5,a)-Math.PI/2;h.push([w(o,a)+e+.9*i*Math.cos(c-n),w(o,a)+t+.9*s*Math.sin(c-n)]);for(let f=c;f<2*Math.PI+c-.01;f+=n){let d=[w(o,a)+e+i*Math.cos(f),w(o,a)+t+s*Math.sin(f)];l.push(d),h.push(d)}return h.push([w(o,a)+e+i*Math.cos(c+2*Math.PI+.5*r),w(o,a)+t+s*Math.sin(c+2*Math.PI+.5*r)]),h.push([w(o,a)+e+.98*i*Math.cos(c+r),w(o,a)+t+.98*s*Math.sin(c+r)]),h.push([w(o,a)+e+.9*i*Math.cos(c+.5*r),w(o,a)+t+.9*s*Math.sin(c+.5*r)]),[h,l]}function Zs(n,e,t,i,s,o,r,a,l){let h=o+w(.1,l),c=[];c.push([w(a,l)+e+.9*i*Math.cos(h-n),w(a,l)+t+.9*s*Math.sin(h-n)]);for(let f=h;f<=r;f+=n)c.push([w(a,l)+e+i*Math.cos(f),w(a,l)+t+s*Math.sin(f)]);return c.push([e+i*Math.cos(r),t+s*Math.sin(r)]),c.push([e+i*Math.cos(r),t+s*Math.sin(r)]),Zt(c,null,l)}function To(n,e,t,i,s,o,r,a){let l=[],h=[a.maxRandomnessOffset||1,(a.maxRandomnessOffset||1)+.3],c=[0,0],f=a.disableMultiStroke?1:2;for(let d=0;d<f;d++)d===0?l.push({op:"move",data:[r[0],r[1]]}):l.push({op:"move",data:[r[0]+w(h[0],a),r[1]+w(h[0],a)]}),c=[s+w(h[d],a),o+w(h[d],a)],l.push({op:"bcurveTo",data:[n+w(h[d],a),e+w(h[d],a),t+w(h[d],a),i+w(h[d],a),c[0],c[1]]});return l}function mt(n){return[...n]}function Ft(n,e){return Math.pow(n[0]-e[0],2)+Math.pow(n[1]-e[1],2)}function Bo(n,e,t){let i=Ft(e,t);if(i===0)return Ft(n,e);let s=((n[0]-e[0])*(t[0]-e[0])+(n[1]-e[1])*(t[1]-e[1]))/i;return s=Math.max(0,Math.min(1,s)),Ft(n,Me(e,t,s))}function Me(n,e,t){return[n[0]+(e[0]-n[0])*t,n[1]+(e[1]-n[1])*t]}function Qi(n,e,t,i){let s=i||[];if((function(a,l){let h=a[l+0],c=a[l+1],f=a[l+2],d=a[l+3],u=3*c[0]-2*h[0]-d[0];u*=u;let p=3*c[1]-2*h[1]-d[1];p*=p;let g=3*f[0]-2*d[0]-h[0];g*=g;let b=3*f[1]-2*d[1]-h[1];return b*=b,u<g&&(u=g),p<b&&(p=b),u+p})(n,e)<t){let a=n[e+0];s.length?(o=s[s.length-1],r=a,Math.sqrt(Ft(o,r))>1&&s.push(a)):s.push(a),s.push(n[e+3])}else{let l=n[e+0],h=n[e+1],c=n[e+2],f=n[e+3],d=Me(l,h,.5),u=Me(h,c,.5),p=Me(c,f,.5),g=Me(d,u,.5),b=Me(u,p,.5),v=Me(g,b,.5);Qi([l,d,g,v],0,t,s),Qi([v,b,p,f],0,t,s)}var o,r;return s}function No(n,e){return Qt(n,0,n.length,e)}function Qt(n,e,t,i,s){let o=s||[],r=n[e],a=n[t-1],l=0,h=1;for(let c=e+1;c<t-1;++c){let f=Bo(n[c],r,a);f>l&&(l=f,h=c)}return Math.sqrt(l)>i?(Qt(n,e,h+1,i,o),Qt(n,h,t,i,o)):(o.length||o.push(r),o.push(a)),o}function Qs(n,e=.15,t){let i=[],s=(n.length-1)/3;for(let o=0;o<s;o++)Qi(n,3*o,e,i);return t&&t>0?Qt(i,0,i.length,t):i}var G="none",We=class{constructor(e){this.defaultOptions={maxRandomnessOffset:2,roughness:1,bowing:1,stroke:"#000",strokeWidth:1,curveTightness:0,curveFitting:.95,curveStepCount:9,fillStyle:"hachure",fillWeight:-1,hachureAngle:-41,hachureGap:-1,dashOffset:-1,dashGap:-1,zigzagOffset:-1,seed:0,combineNestedSvgPaths:!1,disableMultiStroke:!1,disableMultiStrokeFill:!1},this.config=e||{},this.config.options&&(this.defaultOptions=this._o(this.config.options))}static newSeed(){return Math.floor(Math.random()*2**31)}_o(e){return e?Object.assign({},this.defaultOptions,e):this.defaultOptions}_d(e,t,i){return{shape:e,sets:t||[],options:i||this.defaultOptions}}line(e,t,i,s,o){let r=this._o(o);return this._d("line",[Xs(e,t,i,s,r)],r)}rectangle(e,t,i,s,o){let r=this._o(o),a=[],l=Io(e,t,i,s,r);if(r.fill){let h=[[e,t],[e+i,t],[e+i,t+s],[e,t+s]];r.fillStyle==="solid"?a.push(ft(h,r)):a.push(ke(h,r))}return r.stroke!==G&&a.push(l),this._d("rectangle",a,r)}ellipse(e,t,i,s,o){let r=this._o(o),a=[],l=Js(i,s,r),h=Zi(e,t,r,l);if(r.fill)if(r.fillStyle==="solid"){let c=Zi(e,t,r,l).opset;c.type="fillPath",a.push(c)}else a.push(ke(h.estimatedPoints,r));return r.stroke!==G&&a.push(h.opset),this._d("ellipse",a,r)}circle(e,t,i,s){let o=this.ellipse(e,t,i,i,s);return o.shape="circle",o}linearPath(e,t){let i=this._o(t);return this._d("linearPath",[Ut(e,!1,i)],i)}arc(e,t,i,s,o,r,a=!1,l){let h=this._o(l),c=[],f=qs(e,t,i,s,o,r,a,!0,h);if(a&&h.fill)if(h.fillStyle==="solid"){let d=qs(e,t,i,s,o,r,!0,!1,h);d.type="fillPath",c.push(d)}else c.push((function(d,u,p,g,b,v,y){let E=d,A=u,O=Math.abs(p/2),N=Math.abs(g/2);O+=w(.01*O,y),N+=w(.01*N,y);let Z=b,D=v;for(;Z<0;)Z+=2*Math.PI,D+=2*Math.PI;D-Z>2*Math.PI&&(Z=0,D=2*Math.PI);let oe=(D-Z)/y.curveStepCount,W=[];for(let te=Z;te<=D;te+=oe)W.push([E+O*Math.cos(te),A+N*Math.sin(te)]);return W.push([E+O*Math.cos(D),A+N*Math.sin(D)]),W.push([E,A]),ke(W,y)})(e,t,i,s,o,r,h));return h.stroke!==G&&c.push(f),this._d("arc",c,h)}curve(e,t){let i=this._o(t),s=[],o=jo(e,i);if(i.fill&&i.fill!==G&&e.length>=3){let r=Qs((function(a,l=0){let h=a.length;if(h<3)throw new Error("A curve must have at least three points.");let c=[];if(h===3)c.push(mt(a[0]),mt(a[1]),mt(a[2]),mt(a[2]));else{let f=[];f.push(a[0],a[0]);for(let p=1;p<a.length;p++)f.push(a[p]),p===a.length-1&&f.push(a[p]);let d=[],u=1-l;c.push(mt(f[0]));for(let p=1;p+2<f.length;p++){let g=f[p];d[0]=[g[0],g[1]],d[1]=[g[0]+(u*f[p+1][0]-u*f[p-1][0])/6,g[1]+(u*f[p+1][1]-u*f[p-1][1])/6],d[2]=[f[p+1][0]+(u*f[p][0]-u*f[p+2][0])/6,f[p+1][1]+(u*f[p][1]-u*f[p+2][1])/6],d[3]=[f[p+1][0],f[p+1][1]],c.push(d[1],d[2],d[3])}}return c})(e),10,(1+i.roughness)/2);i.fillStyle==="solid"?s.push(ft(r,i)):s.push(ke(r,i))}return i.stroke!==G&&s.push(o),this._d("curve",s,i)}polygon(e,t){let i=this._o(t),s=[],o=Ut(e,!0,i);return i.fill&&(i.fillStyle==="solid"?s.push(ft(e,i)):s.push(ke(e,i))),i.stroke!==G&&s.push(o),this._d("polygon",s,i)}path(e,t){let i=this._o(t),s=[];if(!e)return this._d("path",s,i);e=(e||"").replace(/\n/g," ").replace(/(-\s)/g,"-").replace("/(ss)/g"," ");let o=i.fill&&i.fill!=="transparent"&&i.fill!==G,r=i.stroke!==G,a=!!(i.simplification&&i.simplification<1),l=(function(h,c,f){let d=Vs(Ds(Gi(h))),u=[],p=[],g=[0,0],b=[],v=()=>{b.length>=4&&p.push(...Qs(b,c)),b=[]},y=()=>{v(),p.length&&(u.push(p),p=[])};for(let{key:A,data:O}of d)switch(A){case"M":y(),g=[O[0],O[1]],p.push(g);break;case"L":v(),p.push([O[0],O[1]]);break;case"C":if(!b.length){let N=p.length?p[p.length-1]:g;b.push([N[0],N[1]])}b.push([O[0],O[1]]),b.push([O[2],O[3]]),b.push([O[4],O[5]]);break;case"Z":v(),p.push([g[0],g[1]])}if(y(),!f)return u;let E=[];for(let A of u){let O=No(A,f);O.length&&E.push(O)}return E})(e,1,a?4-4*i.simplification:(1+i.roughness)/2);if(o)if(i.combineNestedSvgPaths){let h=[];l.forEach(c=>h.push(...c)),i.fillStyle==="solid"?s.push(ft(h,i)):s.push(ke(h,i))}else l.forEach(h=>{i.fillStyle==="solid"?s.push(ft(h,i)):s.push(ke(h,i))});return r&&(a?l.forEach(h=>{s.push(Ut(h,!1,i))}):s.push((function(h,c){let f=Vs(Ds(Gi(h))),d=[],u=[0,0],p=[0,0];for(let{key:g,data:b}of f)switch(g){case"M":{let v=1*(c.maxRandomnessOffset||0);d.push({op:"move",data:b.map(y=>y+w(v,c))}),p=[b[0],b[1]],u=[b[0],b[1]];break}case"L":d.push(...le(p[0],p[1],b[0],b[1],c)),p=[b[0],b[1]];break;case"C":{let[v,y,E,A,O,N]=b;d.push(...To(v,y,E,A,O,N,p,c)),p=[O,N];break}case"Z":d.push(...le(p[0],p[1],u[0],u[1],c)),p=[u[0],u[1]]}return{type:"path",ops:d}})(e,i))),this._d("path",s,i)}opsToPath(e){let t="";for(let i of e.ops){let s=i.data;switch(i.op){case"move":t+=`M${s[0]} ${s[1]} `;break;case"bcurveTo":t+=`C${s[0]} ${s[1]}, ${s[2]} ${s[3]}, ${s[4]} ${s[5]} `;break;case"lineTo":t+=`L${s[0]} ${s[1]} `}}return t.trim()}toPaths(e){let t=e.sets||[],i=e.options||this.defaultOptions,s=[];for(let o of t){let r=null;switch(o.type){case"path":r={d:this.opsToPath(o),stroke:i.stroke,strokeWidth:i.strokeWidth,fill:G};break;case"fillPath":r={d:this.opsToPath(o),stroke:G,strokeWidth:0,fill:i.fill||G};break;case"fillSketch":r=this.fillSketch(o,i)}r&&s.push(r)}return s}fillSketch(e,t){let i=t.fillWeight;return i<0&&(i=t.strokeWidth/2),{d:this.opsToPath(e),stroke:t.fill||G,strokeWidth:i,fill:G}}},Ki=class{constructor(e,t){this.canvas=e,this.ctx=this.canvas.getContext("2d"),this.gen=new We(t)}draw(e){let t=e.sets||[],i=e.options||this.getDefaultOptions(),s=this.ctx;for(let o of t)switch(o.type){case"path":s.save(),s.strokeStyle=i.stroke==="none"?"transparent":i.stroke,s.lineWidth=i.strokeWidth,i.strokeLineDash&&s.setLineDash(i.strokeLineDash),i.strokeLineDashOffset&&(s.lineDashOffset=i.strokeLineDashOffset),this._drawToContext(s,o),s.restore();break;case"fillPath":s.save(),s.fillStyle=i.fill||"";let r=e.shape==="curve"||e.shape==="polygon"?"evenodd":"nonzero";this._drawToContext(s,o,r),s.restore();break;case"fillSketch":this.fillSketch(s,o,i)}}fillSketch(e,t,i){let s=i.fillWeight;s<0&&(s=i.strokeWidth/2),e.save(),i.fillLineDash&&e.setLineDash(i.fillLineDash),i.fillLineDashOffset&&(e.lineDashOffset=i.fillLineDashOffset),e.strokeStyle=i.fill||"",e.lineWidth=s,this._drawToContext(e,t),e.restore()}_drawToContext(e,t,i="nonzero"){e.beginPath();for(let s of t.ops){let o=s.data;switch(s.op){case"move":e.moveTo(o[0],o[1]);break;case"bcurveTo":e.bezierCurveTo(o[0],o[1],o[2],o[3],o[4],o[5]);break;case"lineTo":e.lineTo(o[0],o[1])}}t.type==="fillPath"?e.fill(i):e.stroke()}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}line(e,t,i,s,o){let r=this.gen.line(e,t,i,s,o);return this.draw(r),r}rectangle(e,t,i,s,o){let r=this.gen.rectangle(e,t,i,s,o);return this.draw(r),r}ellipse(e,t,i,s,o){let r=this.gen.ellipse(e,t,i,s,o);return this.draw(r),r}circle(e,t,i,s){let o=this.gen.circle(e,t,i,s);return this.draw(o),o}linearPath(e,t){let i=this.gen.linearPath(e,t);return this.draw(i),i}polygon(e,t){let i=this.gen.polygon(e,t);return this.draw(i),i}arc(e,t,i,s,o,r,a=!1,l){let h=this.gen.arc(e,t,i,s,o,r,a,l);return this.draw(h),h}curve(e,t){let i=this.gen.curve(e,t);return this.draw(i),i}path(e,t){let i=this.gen.path(e,t);return this.draw(i),i}},qt="http://www.w3.org/2000/svg",Yi=class{constructor(e,t){this.svg=e,this.gen=new We(t)}draw(e){let t=e.sets||[],i=e.options||this.getDefaultOptions(),s=this.svg.ownerDocument||window.document,o=s.createElementNS(qt,"g");for(let r of t){let a=null;switch(r.type){case"path":a=s.createElementNS(qt,"path"),a.setAttribute("d",this.opsToPath(r)),a.setAttribute("stroke",i.stroke),a.setAttribute("stroke-width",i.strokeWidth+""),a.setAttribute("fill","none"),i.strokeLineDash&&a.setAttribute("stroke-dasharray",i.strokeLineDash.join(" ").trim()),i.strokeLineDashOffset&&a.setAttribute("stroke-dashoffset",""+i.strokeLineDashOffset);break;case"fillPath":a=s.createElementNS(qt,"path"),a.setAttribute("d",this.opsToPath(r)),a.setAttribute("stroke","none"),a.setAttribute("stroke-width","0"),a.setAttribute("fill",i.fill||""),e.shape!=="curve"&&e.shape!=="polygon"||a.setAttribute("fill-rule","evenodd");break;case"fillSketch":a=this.fillSketch(s,r,i)}a&&o.appendChild(a)}return o}fillSketch(e,t,i){let s=i.fillWeight;s<0&&(s=i.strokeWidth/2);let o=e.createElementNS(qt,"path");return o.setAttribute("d",this.opsToPath(t)),o.setAttribute("stroke",i.fill||""),o.setAttribute("stroke-width",s+""),o.setAttribute("fill","none"),i.fillLineDash&&o.setAttribute("stroke-dasharray",i.fillLineDash.join(" ").trim()),i.fillLineDashOffset&&o.setAttribute("stroke-dashoffset",""+i.fillLineDashOffset),o}get generator(){return this.gen}getDefaultOptions(){return this.gen.defaultOptions}opsToPath(e){return this.gen.opsToPath(e)}line(e,t,i,s,o){let r=this.gen.line(e,t,i,s,o);return this.draw(r)}rectangle(e,t,i,s,o){let r=this.gen.rectangle(e,t,i,s,o);return this.draw(r)}ellipse(e,t,i,s,o){let r=this.gen.ellipse(e,t,i,s,o);return this.draw(r)}circle(e,t,i,s){let o=this.gen.circle(e,t,i,s);return this.draw(o)}linearPath(e,t){let i=this.gen.linearPath(e,t);return this.draw(i)}polygon(e,t){let i=this.gen.polygon(e,t);return this.draw(i)}arc(e,t,i,s,o,r,a=!1,l){let h=this.gen.arc(e,t,i,s,o,r,a,l);return this.draw(h)}curve(e,t){let i=this.gen.curve(e,t);return this.draw(i)}path(e,t){let i=this.gen.path(e,t);return this.draw(i)}},Wo={canvas:(n,e)=>new Ki(n,e),svg:(n,e)=>new Yi(n,e),generator:n=>new We(n),newSeed:()=>We.newSeed()},He=Wo;var Xi=class extends HTMLElement{connectedCallback(){let e=+this.getAttribute("h")||120,t=this.hasAttribute("round")?`width:${e}px;flex:none;`:"";this.style.cssText+=`display:block;position:relative;height:${e}px;--oi-w:${Math.round(e*4/3)}px;${t}`;let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.style.cssText="position:absolute;inset:0;width:100%;height:100%",this.prepend(i);let s=()=>{let r=this.clientWidth;if(!r)return;i.replaceChildren(),i.setAttribute("viewBox",`0 0 ${r} ${e}`);let a=getComputedStyle(this),l=a.getPropertyValue("--oi-stroke").trim()||"#8a8a85",h=a.getPropertyValue("--oi-fill").trim()||"#f3f1ea",c=a.getPropertyValue("--accent").trim()||"#c2410c",f=a.getPropertyValue("--paper").trim()||"#fdfcf8",d=He.svg(i),u={roughness:1.6,stroke:l,seed:7},p={roughness:1.6,stroke:a.getPropertyValue("--oi-line").trim()||"#cfcfc8",seed:3},g={...u,stroke:c,fill:c,fillStyle:"solid"};if(this.hasAttribute("round"))i.appendChild(d.circle(r/2,e/2,Math.min(r,e)-6,{...u,fill:h,fillStyle:"solid"}));else{let v=this.hasAttribute("upload")?{strokeLineDash:[8,6]}:{};i.appendChild(d.rectangle(3,3,r-6,e-6,{...u,...v,fill:h,fillStyle:"hachure",hachureGap:12,fillWeight:.6})),this.hasAttribute("cross")&&(i.appendChild(d.line(3,3,r-3,e-3,p)),i.appendChild(d.line(r-3,3,3,e-3,p)))}if(this.hasAttribute("pin")){let v=e*.38;i.appendChild(d.circle(r/2,v,22,g)),i.appendChild(d.line(r/2,v+10,r/2,v+24,{...u,stroke:c,strokeWidth:2}))}if(this.hasAttribute("play")){let v=e*.42;i.appendChild(d.circle(r/2,v,Math.min(56,e*.4),{...u,stroke:c,fill:f,fillStyle:"solid",strokeWidth:2})),i.appendChild(d.polygon([[r/2-7,v-10],[r/2-7,v+10],[r/2+11,v]],g))}if(this.hasAttribute("upload")){let v=e*.38;i.appendChild(d.line(r/2,v+14,r/2,v-14,{...u,strokeWidth:2.2})),i.appendChild(d.linearPath([[r/2-11,v-3],[r/2,v-15],[r/2+11,v-3]],{...u,strokeWidth:2.2}))}let b=+this.getAttribute("dots");if(b>0){let v=e-16;for(let y=0;y<b;y++){let E=r/2+(y-(b-1)/2)*16;i.appendChild(d.circle(E,v,7,y===0?{...u,stroke:c,fill:c,fillStyle:"solid"}:{...u,fill:f,fillStyle:"solid"}))}for(let y of[-1,1]){let E=y<0?22:r-22;i.appendChild(d.circle(E,e/2,26,{...u,fill:f,fillStyle:"solid"})),i.appendChild(d.linearPath([[E-y*3,e/2-6],[E+y*3,e/2],[E-y*3,e/2+6]],{...u,strokeWidth:1.8}))}}};this.draw=s,s(),new ResizeObserver(s).observe(this);let o=this.getAttribute("label");if(o){let r=document.createElement("span");r.className="ph-label",r.textContent=o,this.appendChild(r)}}};customElements.get("oi-placeholder")||customElements.define("oi-placeholder",Xi);var _e=(n,e,t=1)=>`M${n-t} ${e}a${t} ${t} 0 1 0 ${2*t} 0a${t} ${t} 0 1 0 ${-2*t} 0`,Ji={home:["M3 11.5L12 3l9 8.5","M5.5 10v10.5h13V10","M10 20.5v-6h4v6"],search:["M10.5 3a7.5 7.5 0 1 0 0 15 7.5 7.5 0 0 0 0-15z","M16 16l5 5"],heart:["M12 20.5C5 15 3 11.5 3 8.6A4.6 4.6 0 0 1 12 7A4.6 4.6 0 0 1 21 8.6c0 2.9-2 6.4-9 11.9z"],comment:["M4 5h16v11H10l-4 4v-4H4z"],share:["M21 3L3 10.5l7 2.5 2.5 7z","M10 13L21 3"],bookmark:["M6 3h12v18l-6-4.5L6 21z"],plus:["M12 4v16M4 12h16"],bell:["M6 16.5V11a6 6 0 0 1 12 0v5.5l2 2H4z","M10 21h4"],user:["M12 3.5a4 4 0 1 0 0 8 4 4 0 0 0 0-8z","M4 21c0-4.5 3.6-7 8-7s8 2.5 8 7"],users:["M9 4a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z","M2 20c0-4 3-6 7-6s7 2 7 6","M16 4.5a3.3 3.3 0 0 1 0 6.3","M18 14.5c2.5.6 4 2.4 4 5.5"],mail:["M3 5.5h18v13H3z","M3 6l9 7 9-7"],settings:["M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z","M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3","M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M5.3 18.7l2.1-2.1M16.6 7.4l2.1-2.1"],camera:["M3 8h4l2-3h6l2 3h4v12H3z","M12 10.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7z"],image:["M3 5h18v14H3z","M3 17l6-6 5 5 3-3 4 4",_e(8.5,9.5,1.5)],video:["M3 6h13v12H3z","M16 10l5-3v10l-5-3"],star:["M12 3l2.7 5.9 6.3.7-4.7 4.3 1.3 6.3L12 17l-5.6 3.2 1.3-6.3L3 9.6l6.3-.7z"],menu:["M4 6h16M4 12h16M4 18h16"],more:[_e(5,12),_e(12,12),_e(19,12)],close:["M5 5l14 14M19 5L5 19"],check:["M4 12.5l5 5L20 6.5"],"arrow-right":["M4 12h16M14 6l6 6-6 6"],"arrow-left":["M20 12H4M10 6l-6 6 6 6"],"chevron-down":["M6 9l6 6 6-6"],"chevron-right":["M9 6l6 6-6 6"],play:["M7 4l13 8-13 8z"],pin:["M12 21s7-6.2 7-11.5a7 7 0 0 0-14 0C5 14.8 12 21 12 21z","M12 7a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5z"],trash:["M4 7h16M9 7V4h6v3","M6 7l1 14h10l1-14"],edit:["M4 20l1-5L16 4l4 4L9 19z","M14 6l4 4"],upload:["M12 16V4M6 10l6-6 6 6","M4 20h16"],download:["M12 4v12M6 10l6 6 6-6","M4 20h16"],lock:["M6 11h12v10H6z","M8.5 11V8a3.5 3.5 0 0 1 7 0v3"],cart:["M3 4h3l2.5 11h10L21 7H7",_e(10,20),_e(18,20)],chart:["M4 4v16h16","M8 15v-4M12 15V8M16 15v-6"],calendar:["M4 6h16v14H4z","M4 10h16M8 3v4M16 3v4"],filter:["M3 5h18l-7 8v6l-4-2v-4z"],info:["M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18z","M12 11v6",_e(12,7.5,.6)],send:["M3 11l18-8-8 18-2-8z"]},qh=Object.keys(Ji);var es=class extends HTMLElement{connectedCallback(){let e=Ji[this.getAttribute("name")];if(!e)return;let t=+this.getAttribute("size")||22;this.style.cssText+=`display:inline-block;vertical-align:middle;width:${t}px;height:${t}px;line-height:0`;let i=document.createElementNS("http://www.w3.org/2000/svg","svg");i.setAttribute("viewBox","0 0 24 24"),i.setAttribute("width",t),i.setAttribute("height",t);let s=He.svg(i),o=this.hasAttribute("filled");for(let r of e)i.appendChild(s.path(r,{roughness:.9,strokeWidth:1.6,stroke:"currentColor",seed:11,...o?{fill:"currentColor",fillStyle:"solid"}:{}}));this.replaceChildren(i)}};customElements.get("oi-icon")||customElements.define("oi-icon",es);var to={line:[3,5,4,7,6,9,8],area:[3,5,4,7,6,9,8],bar:[5,8,3,9,6,7],pie:[40,30,20,10],donut:[40,30,20,10]},ts=class extends HTMLElement{connectedCallback(){let e=+this.getAttribute("h")||200,t=this.getAttribute("kind")||"line",i=(this.getAttribute("values")||"").split(",").map(l=>l.trim()).filter(Boolean).map(Number).filter(Number.isFinite),s=i.length?i:to[t]||to.line;this.style.cssText+=`display:block;position:relative;height:${e}px;--oi-w:${Math.round(e*4/3)}px`;let o=document.createElementNS("http://www.w3.org/2000/svg","svg");o.style.cssText="position:absolute;inset:0;width:100%;height:100%",this.prepend(o);let r=()=>{let l=this.clientWidth;if(!l)return;o.replaceChildren(),o.setAttribute("viewBox",`0 0 ${l} ${e}`);let h=getComputedStyle(this),c=h.getPropertyValue("--oi-stroke").trim()||"#8a8a85",f=h.getPropertyValue("--oi-chart").trim()||h.getPropertyValue("--accent").trim()||"#c2410c",d=He.svg(o),u={roughness:1.4,stroke:c,seed:5},p=Math.max(...s,1),g={l:34,r:12,t:14,b:26},b=l-g.l-g.r,v=e-g.t-g.b;if(t==="pie"||t==="donut"){let y=Math.min(l,e)/2-8,E=l/2,A=e/2,O=s.reduce((D,oe)=>D+oe,0)||1,N=-Math.PI/2,Z=[f,c,"#cfcfc8","#e7e5dc","#b8b5a8"];s.forEach((D,oe)=>{let W=Math.max(D,0)/O*Math.PI*2,te={...u,fill:Z[oe%Z.length],fillStyle:oe===0?"solid":"hachure",hachureGap:6,fillWeight:1};W>=Math.PI*2-.001?o.appendChild(d.circle(E,A,y*2,te)):W>.01&&o.appendChild(d.arc(E,A,y*2,y*2,N,N+W,!0,te)),N+=W}),t==="donut"&&o.appendChild(d.circle(E,A,y,{...u,fill:h.getPropertyValue("--paper").trim()||"#fdfcf8",fillStyle:"solid"}));return}o.appendChild(d.line(g.l,g.t,g.l,g.t+v,u)),o.appendChild(d.line(g.l,g.t+v,g.l+b,g.t+v,u));for(let y=1;y<=3;y++)o.appendChild(d.line(g.l,g.t+v*y/4,g.l+b,g.t+v*y/4,{...u,stroke:"#d8d6cc",roughness:.8}));if(t==="bar"){let y=b/s.length;s.forEach((E,A)=>{let O=E/p*v;o.appendChild(d.rectangle(g.l+A*y+y*.18,g.t+v-O,y*.64,O,{...u,stroke:f,fill:f,fillStyle:"hachure",hachureGap:5,fillWeight:1.2}))})}else{let y=s.map((E,A)=>[g.l+A/Math.max(s.length-1,1)*b,g.t+v-E/p*v]);t==="area"&&o.appendChild(d.polygon([[y[0][0],g.t+v],...y,[y.at(-1)[0],g.t+v]],{roughness:1,stroke:"none",fill:f,fillStyle:"hachure",hachureGap:7,fillWeight:.8,seed:2})),o.appendChild(d.linearPath(y,{...u,stroke:f,strokeWidth:2.2})),y.forEach(([E,A])=>o.appendChild(d.circle(E,A,6,{...u,stroke:f,fill:f,fillStyle:"solid"})))}};this.draw=r,r(),new ResizeObserver(r).observe(this);let a=this.getAttribute("label");if(a){let l=document.createElement("span");l.className="ph-label ph-corner",l.textContent=a,this.appendChild(l)}}};customElements.get("oi-chart")||customElements.define("oi-chart",ts);var B=(n,e=document)=>[...e.querySelectorAll(n)],De=window.OPENINK||{languages:[],first:""};function ee(){requestAnimationFrame(()=>B("*").forEach(n=>{typeof n.wiredRender=="function"&&n.offsetParent!==null&&n.wiredRender()}))}var io;window.addEventListener("resize",()=>{clearTimeout(io),io=setTimeout(ee,150)});function Yt(n,{remember:e=!0}={}){let t=document.getElementById(n);!t||!t.classList.contains("screen")||(B(".screen").forEach(i=>i.classList.remove("on")),t.classList.add("on"),B("header nav").forEach(i=>i.hidden=i.dataset.nav!==t.dataset.nav),document.title=t.dataset.title+" \xB7 "+document.title.split(" \xB7 ").pop(),e&&history.replaceState(null,"","#"+n),window.scrollTo({top:0}),ee())}function yt(n){let e=document.getElementById("toast");e.textContent=n,e.classList.add("show"),clearTimeout(yt.timer),yt.timer=setTimeout(()=>e.classList.remove("show"),2200)}function so(){window.addEventListener("hashchange",()=>Yt(location.hash.slice(1))),Yt(location.hash.slice(1)||De.first,{remember:!1})}var oo="openink_lang";function is(n){document.documentElement.lang=n;try{localStorage.setItem(oo,n)}catch{}B("[data-lang]").forEach(e=>e.classList.toggle("on",e.dataset.lang===n)),B("*").forEach(e=>{for(let t of e.attributes){let i=t.name.match(/^data-(.+)-([a-z]{2,3})$/i);i&&i[2]===n&&i[1]!=="lang"&&e.setAttribute(i[1],t.value)}}),ee()}function no(){if(!De.languages.length)return;let n=null;try{n=localStorage.getItem(oo)}catch{}is(De.languages.includes(n)?n:De.languages[0])}var Ho=18240/25.4;function ro(){document.documentElement.classList.add("oi-print");let n=B(".screen");n.forEach(lo);let e=document.documentElement.scrollHeight,t=n.map((i,s)=>{let o=i.getBoundingClientRect(),r=o.top+scrollY,a=(s===0?r:0)+(s===n.length-1?e-(r+o.height):0),l=(Ho-a)*.97;return{zoom:o.height>l?Math.max(l/o.height,.3):1,width:o.width}});B("*").forEach(i=>i.wiredRender?i.wiredRender(!0):i.draw?.()),n.forEach((i,s)=>{let{zoom:o,width:r}=t[s];o!==1&&(Object.assign(i.style,{zoom:String(o),width:`${r}px`,marginInline:"auto"}),B("*",i).forEach(a=>a.canvasSize&&a.lastSize&&(a.lastSize=a.canvasSize())))})}function ao(){document.documentElement.classList.remove("oi-print"),B(".screen").forEach(lo),ee()}var lo=n=>Object.assign(n.style,{zoom:"",width:"",marginInline:""});function ho(){window.addEventListener("beforeprint",ro),window.addEventListener("afterprint",ao),window.openink={...window.openink,preparePrint:ro,endPrint:ao}}function ss(n,e){n.forEach(t=>{t.classList.toggle("on",t===e),t.setAttribute("elevation",t===e?3:1)})}var Xt=()=>B(".modal.on").forEach(n=>n.classList.remove("on"));document.addEventListener("click",n=>{let e=n.target.closest("[data-lang]");if(e)return is(e.dataset.lang);n.target.closest("[data-close]")&&Xt();let t=n.target.closest("[data-open]");t&&(Xt(),document.querySelector(`.modal[data-modal="${CSS.escape(t.dataset.open)}"]`)?.classList.add("on"),ee());let i=n.target.closest("[data-chips] .chip");i&&(ss(B(".chip",i.parentElement),i),yt("Results updated"));let s=n.target.closest("[data-tabs] .tab");if(s){let l=s.closest("[data-tabs]");ss(B(".tab",l),s),B(".tab-panel",l).forEach(h=>h.classList.toggle("on",h.dataset.panel===s.dataset.tab)),ee()}let o=n.target.closest(".tabbar .tab-item");o&&ss(B(".tab-item",o.parentElement),o);let r=n.target.closest("[data-go]");r&&(Xt(),Yt(r.dataset.go));let a=n.target.closest("[data-toast]");a&&yt(a.dataset.toast)});document.addEventListener("keydown",n=>n.key==="Escape"&&Xt());document.addEventListener("toggle",n=>n.target.tagName==="DETAILS"&&ee(),!0);window.addEventListener("DOMContentLoaded",()=>{no(),so(),ho()});})();
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
