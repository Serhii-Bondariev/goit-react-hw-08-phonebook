"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[676],{1676:(e,r,t)=>{t.r(r),t.d(r,{default:()=>Z});var n=t(2791),a=(t(7632),t(1418)),s=t.n(a);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},i.apply(this,arguments)}var o=t(3366);t(2176);function l(e){return"default"+e.charAt(0).toUpperCase()+e.substr(1)}function c(e){var r=function(e,r){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,r||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===typeof r?r:String(r)}function u(e,r){return Object.keys(r).reduce((function(t,a){var s,u=t,f=u[l(a)],p=u[a],d=(0,o.Z)(u,[l(a),a].map(c)),h=r[a],v=function(e,r,t){var a=(0,n.useRef)(void 0!==e),s=(0,n.useState)(r),i=s[0],o=s[1],l=void 0!==e,c=a.current;return a.current=l,!l&&c&&i!==r&&o(r),[l?e:i,(0,n.useCallback)((function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];t&&t.apply(void 0,[e].concat(n)),o(e)}),[t])]}(p,f,e[h]),m=v[0],g=v[1];return i({},d,((s={})[a]=m,s[h]=g,s))}),e)}function f(){var e=this.constructor.getDerivedStateFromProps(this.props,this.state);null!==e&&void 0!==e&&this.setState(e)}function p(e){this.setState(function(r){var t=this.constructor.getDerivedStateFromProps(e,r);return null!==t&&void 0!==t?t:null}.bind(this))}function d(e,r){try{var t=this.props,n=this.state;this.props=e,this.state=r,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(t,n)}finally{this.props=t,this.state=n}}f.__suppressDeprecationWarning=!0,p.__suppressDeprecationWarning=!0,d.__suppressDeprecationWarning=!0;var h=t(9007),v=t(162),m=t(7472),g=t(3329);const b=(0,m.Z)("h4");b.displayName="DivStyledAsH4";const y=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:n,as:a=b,...i}=e;return n=(0,v.vE)(n,"alert-heading"),(0,g.jsx)(a,{ref:r,className:s()(t,n),...i})}));y.displayName="AlertHeading";const w=y;t(8633),t(7904);t(5746),t(2803);t(9815);new WeakMap;var j=t(5341);const x=["onKeyDown"];const N=n.forwardRef(((e,r)=>{let{onKeyDown:t}=e,n=function(e,r){if(null==e)return{};var t,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)t=s[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,x);const[a]=(0,j.FT)(Object.assign({tagName:"a"},n)),s=(0,h.Z)((e=>{a.onKeyDown(e),null==t||t(e)}));return(i=n.href)&&"#"!==i.trim()&&"button"!==n.role?(0,g.jsx)("a",Object.assign({ref:r},n,{onKeyDown:t})):(0,g.jsx)("a",Object.assign({ref:r},n,a,{onKeyDown:s}));var i}));N.displayName="Anchor";const k=N,_=n.forwardRef(((e,r)=>{let{className:t,bsPrefix:n,as:a=k,...i}=e;return n=(0,v.vE)(n,"alert-link"),(0,g.jsx)(a,{ref:r,className:s()(t,n),...i})}));_.displayName="AlertLink";const O=_;var S=t(7898),D=t(473);const P=n.forwardRef(((e,r)=>{const{bsPrefix:t,show:n=!0,closeLabel:a="Close alert",closeVariant:i,className:o,children:l,variant:c="primary",onClose:f,dismissible:p,transition:d=S.Z,...m}=u(e,{show:"onClose"}),b=(0,v.vE)(t,"alert"),y=(0,h.Z)((e=>{f&&f(!1,e)})),w=!0===d?S.Z:d,j=(0,g.jsxs)("div",{role:"alert",...w?void 0:m,ref:r,className:s()(o,b,c&&"".concat(b,"-").concat(c),p&&"".concat(b,"-dismissible")),children:[p&&(0,g.jsx)(D.Z,{onClick:y,"aria-label":a,variant:i}),l]});return w?(0,g.jsx)(w,{unmountOnExit:!0,...m,ref:void 0,in:n,children:j}):n?j:null}));P.displayName="Alert";const C=Object.assign(P,{Link:O,Heading:w});var A=t(9434),E=t(9606);function Z(){const e=(0,A.v9)(E.wU),r=!(0,A.v9)(E.Qb)&&!e;return(0,g.jsx)("div",{className:"container mt-4",children:r?(0,g.jsxs)(C,{className:"text-center, mt-4, mb-4 ",variant:"warning",children:[(0,g.jsx)("h1",{children:"Hello!"}),(0,g.jsx)("p",{children:"Please, log in."})]}):(0,g.jsxs)(C,{variant:"success",children:[(0,g.jsx)("h1",{children:"Welcome!"}),(0,g.jsx)("p",{children:"You are already logged in."})]})})}},2176:e=>{e.exports=function(e,r,t,n,a,s,i,o){if(!e){var l;if(void 0===r)l=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var c=[t,n,a,s,i,o],u=0;(l=new Error(r.replace(/%s/g,(function(){return c[u++]})))).name="Invariant Violation"}throw l.framesToPop=1,l}}},7632:()=>{}}]);
//# sourceMappingURL=676.c8eeeed2.chunk.js.map