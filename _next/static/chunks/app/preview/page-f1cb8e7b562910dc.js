(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[639],{8794:function(e,t,n){"use strict";n.d(t,{n:function(){return s}});var r,i,o=n(2265),a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},s=(0,o.createContext)(void 0),l="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.9/MathJax.js?config=TeX-MML-AM_CHTML",u="https://cdnjs.cloudflare.com/ajax/libs/mathjax/3.2.2/es5/tex-mml-chtml.js";t.Z=function(e){var t=e.config,n=e.version,n=void 0===n?3:n,c=e.src,c=void 0===c?2===n?l:u:c,d=e.onStartup,p=e.onLoad,h=e.onError,f=e.typesettingOptions,v=e.renderMode,v=void 0===v?"post":v,m=e.hideUntilTypeset,e=e.children,x=(0,o.useContext)(s);if(void 0!==(null==x?void 0:x.version)&&(null==x?void 0:x.version)!==n)throw Error("Cannot nest MathJaxContexts with different versions. MathJaxContexts should not be nested at all but if they are, they cannot have different versions. Stick with one version of MathJax in your app and avoid using more than one MathJaxContext.");if(2===n&&void 0!==i||3===n&&void 0!==r)throw Error("Cannot use MathJax versions 2 and 3 simultaneously in the same app due to how MathJax is set up in the browser; either you have multiple MathJaxContexts with different versions or you have mounted and unmounted MathJaxContexts with different versions. Please stick with one version of MathJax in your app. File an issue in the project Github page if you need this feature.");var y=(0,o.useRef)(x),x=(0,o.useRef)((null==x?void 0:x.version)||null);if(null===x.current)x.current=n;else if(x.current!==n)throw Error("Cannot change version of MathJax in a MathJaxContext after it has mounted. Reload the page with a new version when this must happen.");var g=c||(2===n?l:u);function w(e,n){t&&(window.MathJax=t);var r=document.createElement("script");r.type="text/javascript",r.src=g,r.async=!1,r.addEventListener("load",function(){var t=window.MathJax;d&&d(t),e(t),p&&p()}),r.addEventListener("error",function(e){return n(e)}),document.getElementsByTagName("head")[0].appendChild(r)}return void 0===y.current&&(x={typesettingOptions:f,renderMode:v,hideUntilTypeset:m},2===n?void 0===r&&("undefined"!=typeof window?(r=new Promise(w)).catch(function(e){if(!h)throw Error("Failed to download MathJax version 2 from '".concat(g,"' due to: ").concat(e));h(e)}):(r=Promise.reject()).catch(function(e){})):void 0===i&&("undefined"!=typeof window?(i=new Promise(w)).catch(function(e){if(!h)throw Error("Failed to download MathJax version 3 from '".concat(g,"' due to: ").concat(e));h(e)}):(i=Promise.reject()).catch(function(e){})),y.current=a(a({},x),2===n?{version:2,promise:r}:{version:3,promise:i})),o.createElement(s.Provider,{value:y.current},e)}},166:function(e,t,n){"use strict";var r=n(2265),i=n(8794),o=function(){return(o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)},a=function(e,t){var n={};for(i in e)Object.prototype.hasOwnProperty.call(e,i)&&0>t.indexOf(i)&&(n[i]=e[i]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var r=0,i=Object.getOwnPropertySymbols(e);r<i.length;r++)0>t.indexOf(i[r])&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]]);return n},s=function(e){return"Typesetting failed: ".concat(void 0!==e.message?e.message:e.toString())};t.Z=function(e){function t(){var e;"every"===w&&O&&"post"===b&&null!==y.current&&(y.current.style.visibility=null!=(e=null==(e=m.style)?void 0:e.visibility)?e:"visible"),E.current||("first"===w&&null!==y.current&&(y.current.style.visibility="visible"),u&&u(),E.current=!0),c&&c(),C.current=!1}var n=e.inline,l=void 0!==n&&n,n=e.hideUntilTypeset,u=e.onInitTypeset,c=e.onTypeset,d=e.text,p=e.dynamic,h=e.typesettingOptions,f=e.renderMode,v=e.children,m=a(e,["inline","hideUntilTypeset","onInitTypeset","onTypeset","text","dynamic","typesettingOptions","renderMode","children"]),x=(0,r.useRef)(""),y=(0,r.useRef)(null),g=(0,r.useContext)(i.n),w=null!=n?n:null==g?void 0:g.hideUntilTypeset,b=null!=f?f:null==g?void 0:g.renderMode,j=null!=h?h:null==g?void 0:g.typesettingOptions,O=!1!==p&&(p||!1),E=(0,r.useRef)(!1),C=(0,r.useRef)(!1);return!C.current&&null!==y.current&&O&&"every"===w&&"post"===b&&(y.current.style.visibility="hidden"),("undefined"!=typeof window?r.useLayoutEffect:r.useEffect)(function(){if((O||!E.current)&&null!==y.current){if(!g)throw Error("MathJax was not loaded, did you use the MathJax component outside of a MathJaxContext?");if("pre"===b){if(!("string"==typeof d&&0<d.length))throw Error("Render mode 'pre' requires text prop to be set and non-empty, which was currently \"".concat(d,'"'));if(!h||!h.fn)throw Error("Render mode 'pre' requires 'typesettingOptions' prop with 'fn' property to be set on MathJax element or in the MathJaxContext");if(2===g.version)throw Error("Render mode 'pre' only available with MathJax 3, and version 2 is currently in use")}"post"!==b&&d===x.current||C.current||(C.current=!0,3===g.version?g.promise.then(function(e){var n;"pre"===b?(n=function(n){x.current=d,e.startup.document.clear(),e.startup.document.updateDocument(),null!==y.current&&(y.current.innerHTML=n.outerHTML),t()},h.fn.endsWith("Promise")?e.startup.promise.then(function(){return e[j.fn](d,o(o({},(null==j?void 0:j.options)||{}),{display:!l}))}).then(n).catch(function(e){throw t(),Error(s(e))}):e.startup.promise.then(function(){n(e[j.fn](d,o(o({},(null==j?void 0:j.options)||{}),{display:!l})))}).catch(function(e){throw t(),Error(s(e))})):e.startup.promise.then(function(){return e.typesetClear([y.current]),e.typesetPromise([y.current])}).then(t).catch(function(e){throw t(),Error(s(e))})}).catch(function(e){throw t(),Error(s(e))}):g.promise.then(function(e){e.Hub.Queue(["Typeset",e.Hub,y.current]),e.Hub.Queue(t)}).catch(function(e){throw t(),Error(s(e))}))}}),r.createElement("span",o({},m,{style:o(o({display:l?"inline":"block"},m.style),{visibility:w?"hidden":null==(e=m.style)?void 0:e.visibility}),ref:y}),v)}},24093:function(e,t,n){Promise.resolve().then(n.bind(n,64622))},64622:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return f}});var r=n(57437),i=n(15857),o=n(44515),a=n(8794),s=n(72418),l=n.n(s),u=n(2265);let c=RegExp("<div>\\s*Evaluate","is"),d=RegExp("<div>\\s*Check","is"),p=RegExp("<div>\\s*Choices([^>]*)<\\/div>","is");function h(e,t){e=(0,o.sg)(e);let n=[],r=[c,d,p],i=-1;for(;e;){let o;let a=i;i=-1;for(let t=0;t<r.length;t++){let n=r[t];n.lastIndex=0;let a=n.exec(e);if(a&&((!o||a.index<o.index)&&(o=a,i=t),o&&!o.index))break}if(o){if(n.push(e.substring(0,o.index)),0===i)n.push("<div class='".concat(l().previewEvaluate,"'>")),n.push(o[0].substring(5));else if(1===i)n.push("<div class='".concat(l().previewCheck,"'>")),n.push(o[0].substring(5));else if(2===i){let e=function(e){let t=[],n=/^\s*([a-e]|\([a-e]\))\./gim,r=0;for(;;){let i=n.exec(e);if(!i)break;let o=e.substring(r,i.index);/^\s*$/.test(o)||t.push(o),t.push(i[1].toUpperCase()),r=i.index+i[0].length}let i=e.substring(r);/^\s*$/.test(i)||t.push(i);let o=[],a=["a","b","c","d","e","A","B","C","D","E","(a)","(b)","(c)","(d)","(e)","(A)","(B)","(C)","(D)","(E)"];for(let e=0;e<t.length;e++){let n=t[e];a.includes(n)?(o.push(n),e+1<t.length&&!a.includes(t[e+1])?(o.push(t[e+1]),e++):o.push("")):o.push("",n)}return o}(o[1]);n.push('<table class="table-auto '.concat(l().previewChoices,'">')),n.push('<caption class="font-bold">Choices</caption>'),n.push("<tbody>");for(let t=0;t<e.length;t+=2){let r=e[t],i="";r.length>1&&(r=r[1],i="Correct");let o=e[t+1];n.push("<tr>"),n.push("<td>".concat(r,"</td>\n")),n.push("<td>".concat(o,"</td>\n")),n.push("<td>".concat(i,"</td>\n")),n.push("</tr>\n")}n.push("</tbody>"),n.push("</table>")}e=e.substring(o.index+o[0].length)}else n.push(e),0!==a||/if[^=]*=/.test(e)||t.push("if/= not found in '".concat(e.substring(0,100),"'")),e=""}return n.join("")}function f(){let[e,t]=(0,u.useState)(""),[n,o]=(0,u.useState)(""),[s,c]=(0,u.useState)(""),[d,p]=(0,u.useState)("001.txt"),f=()=>!!d||(alert("No current file name set"),!1),v=async(e,n)=>{if(null==n||n.preventDefault(),f())try{let n=await fetch("/previewApi",{method:"POST",body:JSON.stringify({fileName:d,inc:e})}),r=await n.json();if(r.error)alert(r.error);else{r=r.data,console.log("Successfully loaded code from file at ".concat(r.fileName)),t(r.text),e&&p(r.fileName);let n=[];c(h(r.text,n)),o(n.join("; "))}}catch(e){console.log(e),alert(e.message)}},m=async t=>{if(null==t||t.preventDefault(),!f())return!1;try{let t=await fetch("/previewApi",{method:"POST",body:JSON.stringify({fileName:d,text:e})}),n=await t.json();if(!n.error)return n=n.data,console.log("Saved current input code to ".concat(n.fileName)),!0;alert(n.error)}catch(e){return console.log(e),alert(e.message),!1}},x=async e=>{e.preventDefault(),await m(null)&&await v(1,null)};return(0,r.jsx)(a.Z,{config:{chtml:{displayAlign:"left"}},children:(0,r.jsxs)("div",{className:"p-3",children:[(0,r.jsx)("h1",{className:"font-bold",children:"Math Preview Tool"}),(0,r.jsxs)("div",{className:"flex gap-3",children:[(0,r.jsxs)("div",{className:"flex-grow w-1/2 h-full",children:[(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Filename:"})," ",d]}),(0,r.jsxs)("p",{children:[(0,r.jsx)("strong",{children:"Actions: "}),(0,r.jsx)("a",{className:"underline text-blue-600",href:"#",onClick:x,children:"Save/Next"}),(0,r.jsx)("span",{children:" | "}),(0,r.jsx)("a",{className:"underline text-blue-600",href:"#",onClick:m,children:"Save"}),(0,r.jsx)("span",{children:" | "}),(0,r.jsx)("a",{className:"underline text-blue-600",href:"#",onClick:e=>v(0,e),children:"Reload"}),(0,r.jsx)("span",{children:" | "}),(0,r.jsx)("a",{className:"underline text-blue-600",href:"#",onClick:e=>v(-1,e),children:"Previous"}),(0,r.jsx)("span",{children:" | "}),(0,r.jsx)("a",{className:"underline text-blue-600",href:"#",onClick:e=>v(1,e),children:"Next"})]}),(0,r.jsx)("h2",{className:"font-bold",children:"Input"}),(0,r.jsx)("div",{children:(0,r.jsx)("textarea",{className:l().textArea,rows:20,name:"text",value:e,onChange:function(e){let n=e.target.value;t(n);try{let e=[];n=h(n,e),c(n),o(e.join("; "))}catch(e){console.log(e),alert(e.message)}}})})]}),(0,r.jsxs)("div",{className:"flex-grow w-1/2 h-full",children:[!n&&(0,r.jsx)("h2",{className:"font-bold",children:"Output"}),n&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h2",{className:"font-bold",children:"Output Error"}),(0,r.jsx)("p",{className:l().previewError,children:n})]}),s&&(0,r.jsx)("div",{className:l().previewOutput,children:(0,r.jsx)(i.Z,{snippet:s})})]})]})]})})}},15857:function(e,t,n){"use strict";var r=n(57437),i=n(44515),o=n(166);n(2265),t.Z=e=>{let{snippet:t}=e;return(0,r.jsx)(o.Z,{dynamic:!0,dangerouslySetInnerHTML:{__html:(0,i.sg)(t)}})}},44515:function(e,t,n){"use strict";n.d(t,{w8:function(){return i},Pd:function(){return s},sg:function(){return c},FW:function(){return l}});var r=JSON.parse('{"e":[["amp",38],["lt",60],["gt",62],["nbsp",160],["iexcl",161],["cent",162],["pound",163],["curren",164],["yen",165],["brvbar",166],["sect",167],["uml",168],["copy",169],["ordf",170],["laquo",171],["not",172],["shy",173],["reg",174],["macr",175],["deg",176],["plusmn",177],["sup2",178],["sup3",179],["acute",180],["micro",181],["para",182],["middot",183],["cedil",184],["sup1",185],["ordm",186],["raquo",187],["frac14",188],["frac12",189],["frac34",190],["iquest",191],["Agrave",192],["Aacute",193],["Acirc",194],["Atilde",195],["Auml",196],["Aring",197],["AElig",198],["Ccedil",199],["Egrave",200],["Eacute",201],["Ecirc",202],["Euml",203],["Igrave",204],["Iacute",205],["Icirc",206],["Iuml",207],["ETH",208],["Ntilde",209],["Ograve",210],["Oacute",211],["Ocirc",212],["Otilde",213],["Ouml",214],["times",215],["Oslash",216],["Ugrave",217],["Uacute",218],["Ucirc",219],["Uuml",220],["Yacute",221],["THORN",222],["szlig",223],["agrave",224],["aacute",225],["acirc",226],["atilde",227],["auml",228],["aring",229],["aelig",230],["ccedil",231],["egrave",232],["eacute",233],["ecirc",234],["euml",235],["igrave",236],["iacute",237],["icirc",238],["iuml",239],["eth",240],["ntilde",241],["ograve",242],["oacute",243],["ocirc",244],["otilde",245],["ouml",246],["divide",247],["oslash",248],["ugrave",249],["uacute",250],["ucirc",251],["uuml",252],["yacute",253],["thorn",254],["yuml",255],["fnof",402],["Alpha",913],["Beta",914],["Gamma",915],["Delta",916],["Epsilon",917],["Zeta",918],["Eta",919],["Theta",920],["Iota",921],["Kappa",922],["Lambda",923],["Mu",924],["Nu",925],["Xi",926],["Omicron",927],["Pi",928],["Rho",929],["Sigma",931],["Tau",932],["Upsilon",933],["Phi",934],["Chi",935],["Psi",936],["Omega",937],["alpha",945],["beta",946],["gamma",947],["delta",948],["epsilon",949],["zeta",950],["eta",951],["theta",952],["iota",953],["kappa",954],["lambda",955],["mu",956],["nu",957],["xi",958],["omicron",959],["pi",960],["rho",961],["sigmaf",962],["sigma",963],["tau",964],["upsilon",965],["phi",966],["chi",967],["psi",968],["omega",969],["thetasym",977],["upsih",978],["piv",982]]}');let i=e=>{let t=new FileReader;return t.readAsDataURL(e),new Promise(e=>{t.onloadend=()=>{e(t.result)}})},o="questionBankIndices";function a(){let e=function(){let e=localStorage.getItem(o);return e?JSON.parse(e):{}}(),t=new Date,n=new Date(t.getTime()-2592e5).toISOString(),r={...e};for(let[t,i]of Object.entries(e))new Date(i.lastUpdated)<new Date(n)&&delete r[t];return r}function s(e){var t;let n=a();return null===(t=n[e])||void 0===t?void 0:t.index}function l(e,t){let n=a();n[e]={index:t,lastUpdated:new Date().toISOString()},localStorage.setItem(o,JSON.stringify(n))}let u=/&(?:#(\d{1,9})|#x([0-9a-fA-F]{1,7})|([^#0-9][^&;]+));/g;function c(e){let t;if(!e)return"";let n=[],i=0;for(u.lastIndex=0;null!==(t=u.exec(e));){n.push(e.substring(i,t.index));let o=t[1],a=t[2],s=t[3];if(o){let e=parseInt(o);n.push(String.fromCharCode(e))}else if(a){let e=parseInt(a,16);n.push(String.fromCharCode(e))}else{let e=r.e.find(e=>e[0]===s);if(e){let t=Number(e[1]);n.push(String.fromCharCode(t))}else n.push(t[0])}i=t.index+t[0].length}return n.length?(n.push(e.substring(i)),n.join("")):e}},72418:function(e){e.exports={previewEvaluate:"preview_previewEvaluate__Qkqtz",previewCheck:"preview_previewCheck__OYSd_",previewChoices:"preview_previewChoices__N62wq",textArea:"preview_textArea__y8dCc",previewOutput:"preview_previewOutput__JfWen",previewError:"preview_previewError__s_i4P"}},30622:function(e,t,n){"use strict";var r=n(2265),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,o={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)a.call(t,r)&&!l.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:i,type:e,key:u,ref:c,props:o,_owner:s.current}}t.Fragment=o,t.jsx=u,t.jsxs=u},57437:function(e,t,n){"use strict";e.exports=n(30622)}},function(e){e.O(0,[971,472,744],function(){return e(e.s=24093)}),_N_E=e.O()}]);