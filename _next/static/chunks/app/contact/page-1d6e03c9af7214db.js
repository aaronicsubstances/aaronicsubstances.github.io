(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[327],{14505:function(e,t,r){"use strict";r.d(t,{ZP:function(){return a}});var n=r(2265);let s=({color:e="currentColor",direction:t="left",distance:r="md",duration:s=.4,easing:o="cubic-bezier(0, 0, 0, 1)",hideOutline:a=!0,label:l,lines:i=3,onToggle:c,render:f,rounded:d=!1,size:u=32,toggle:p,toggled:m})=>{let[x,h]=(0,n.useState)(!1),b=Math.max(12,Math.min(48,u)),g=b/12,v=Math.round(g),y=b/(i*(("lg"===r?.25:"sm"===r?.75:.5)+(3===i?1:1.25))),$=Math.round(y),_=v*i+$*(i-1),w=(g-v+(y-$))/(3===i?1:2),k=parseFloat((b/(3===i?"lg"===r?4.0425:"sm"===r?5.1625:4.6325:"lg"===r?6.7875:"sm"===r?8.4875:7.6675)-w/(4/3)).toFixed(2)),O=Math.max(0,s),j={cursor:"pointer",height:"48px",position:"relative",transition:`${O}s ${o}`,userSelect:"none",width:"48px"},E={background:e,height:`${v}px`,left:`${Math.round((48-b)/2)}px`,position:"absolute"};a&&(j.outline="none"),d&&(E.borderRadius="9em");let N=p||h,S=void 0!==m?m:x;return f({barHeight:v,barStyles:E,burgerStyles:j,easing:o,handler:()=>{N(!S),"function"==typeof c&&c(!S)},isLeft:"left"===t,isToggled:S,label:l,margin:$,move:k,time:O,topOffset:Math.round((48-_)/2),width:b})};function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}var a=e=>n.createElement(s,o({},e,{render:e=>n.createElement("div",{className:"hamburger-react","aria-label":e.label,"aria-expanded":e.isToggled,onClick:e.handler,onKeyUp:t=>"Enter"===t.key&&e.handler(),role:"button",style:{...e.burgerStyles,transform:`${e.isToggled?`rotate(${90*(e.isLeft?-1:1)}deg)`:"none"}`},tabIndex:0},n.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?-1:1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${e.move}px)`:"none"}`}}),n.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+e.barHeight+e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?"scaleX(0)":"none"}`}}),n.createElement("div",{style:{...e.barStyles,width:`${e.width}px`,top:`${e.topOffset+2*e.barHeight+2*e.margin}px`,transition:`${e.time}s ${e.easing}`,transform:`${e.isToggled?`rotate(${45*(e.isLeft?1:-1)}deg) translate(${e.move*(e.isLeft?-1:1)}px, ${-1*e.move}px)`:"none"}`}}))}))},81095:function(e,t,r){Promise.resolve().then(r.bind(r,56008))},56008:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return c}});var n=r(57437),s=r(61396),o=r.n(s),a=r(2265),l=r(14505),i=r(24033);function c(e){let{title:t,showBackButton:r=!1,backLink:s="/",rightComponent:c}=e,[f,d]=(0,a.useState)(!1),[u,p]=(0,a.useState)(!0);(0,a.useEffect)(()=>{f?p(!1):setTimeout(()=>{p(!0)},490)},[f]);let m=(0,i.useRouter)(),x=(0,i.usePathname)(),h=e=>{x!==e&&m.push(e),d(!1)};return(0,n.jsxs)("div",{className:"h-12 overflow-hidden flex flex-row space-x-2 items-center p-2 pl-5 border-b relative",children:[r&&(0,n.jsx)(o(),{href:s,className:"flex flex-col justify-center items-center",children:(0,n.jsx)("i",{className:"fas fa-arrow-left text-md"})}),(0,n.jsx)("h1",{className:"text-center font-bold  text-lg absolute top-[50%] translate-y-[-50%] translate-x-[50%] ".concat(c?"left-[0%] pl-0":"right-[50%] "),children:t}),(0,n.jsx)("div",{className:"flex-grow"}),c||(0,n.jsx)("div",{children:(0,n.jsx)(l.ZP,{toggled:f,toggle:d,label:"Show menu",size:24,hideOutline:!0,rounded:!0,color:"#000000"})}),!u&&(0,n.jsx)("div",{className:"\n          fixed \n          top-12 \n          bottom-0 \n          left-0 \n          right-0\n          w-screen\n          h-screen \n          flex \n          flex-col \n          items-center \n          py-10\n          text-black\n\n          z-50\n        ".concat(f?"fade-in":"fade-out","\n\n        "),style:{backdropFilter:"blur(30px)",backgroundColor:"rgba(255, 255, 255, 1)"},children:(0,n.jsx)("button",{onClick:()=>h("/tests"),className:"mb-4 border-2 border-black p-1 px-10 rounded-full",children:(0,n.jsxs)("span",{className:"flex items-center font-semibold",children:[(0,n.jsx)("i",{className:"fas fa-bookmark text-md mr-2"}),"All Tests"]})})})]})}},30622:function(e,t,r){"use strict";var n=r(2265),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var n,o={},c=null,f=null;for(n in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(f=t.ref),t)a.call(t,n)&&!i.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:s,type:e,key:c,ref:f,props:o,_owner:l.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},57437:function(e,t,r){"use strict";e.exports=r(30622)},61396:function(e,t,r){e.exports=r(68326)},24033:function(e,t,r){e.exports=r(50094)}},function(e){e.O(0,[326,971,472,744],function(){return e(e.s=81095)}),_N_E=e.O()}]);