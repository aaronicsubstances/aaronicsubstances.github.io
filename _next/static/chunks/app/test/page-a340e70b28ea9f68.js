(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[928],{53176:function(e,t,s){Promise.resolve().then(s.bind(s,1745))},1745:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return L}});var n=s(57437),l=s(2265);function r(){return(0,n.jsx)("div",{className:"py-12 mx-auto flex justify-center items-center flex-grow -m-12",children:(0,n.jsx)("i",{className:"fas fa-spinner fa-spin text-5xl"})})}var a=s(15857),i=s(34071);let o=e=>{let t=new FileReader;return t.readAsDataURL(e),new Promise(e=>{t.onloadend=()=>{e(t.result)}})},c="questionBankIndices";function d(){let e=function(){let e=localStorage.getItem(c);return e?JSON.parse(e):{}}(),t=new Date,s=new Date(t.getTime()-2592e5).toISOString(),n={...e};for(let[t,l]of Object.entries(e))new Date(l.lastUpdated)<new Date(s)&&delete n[t];return n}var x=s(62067),m=s.n(x),u=s(61396),f=s.n(u);function h(e){let{variant:t="contained",...s}=e;return(0,n.jsx)("button",{...s,className:"\n      font-bold \n\n     ".concat("outlined"===t?"border-2 border-black text-primary-1000 focus:bg-gray-200 hover:bg-gray-200":"\n        ".concat(s.disabled?"bg-primary-300 hover:bg-primary-200":"bg-primary-500","  hover:bg-primary-300 \n        "),"\n\n      p-2 px-8 \n      \n      transition-colors \n      duration-500 \n      rounded-full \n      text-center \n      flex \n      items-center \n      \n      justify-center ").concat(s.disabled?"text-gray-500 cursor-not-allowed":""," ").concat(s.className),children:s.children})}var p=s(45253),b=s(18768),j=s(16830),g=s(36612),w=e=>{let{text:t,onConfirm:s,onCancel:l,onClose:r,cancelButtonText:a,okText:i}=e;return(0,n.jsx)("div",{className:"fixed top-0 left-0 right-0 bottom-0 bg-gray-1000/20 backdrop-blur-sm p-4 py-8 flex flex-col  items-center",onClick:r,style:{zIndex:9999},children:(0,n.jsxs)("div",{className:"bg-white p-4 rounded-lg max-w-sm w-full mx-auto mt-",children:[(0,n.jsx)("p",{className:"text-md",children:t}),(0,n.jsxs)("div",{className:"flex justify-end mt-4",children:[l&&(0,n.jsx)(h,{className:"py-1 px-4 text-sm mr-2",variant:"outlined",onClick:l,children:a||"Cancel"}),s&&(0,n.jsx)(h,{className:"py-1 px-4 text-sm",variant:"outlined",onClick:s,children:i||"OK"})]})]})})};let v={correct:"#00C49F",wrong:"#FF8042",skipped:"#FFBB28"},y=Math.PI/180,N=e=>{let{cx:t,cy:s,midAngle:l,innerRadius:r,outerRadius:a,name:i,value:o}=e,c=r+(a-r)*3.2,d=t+c*Math.cos(-l*y);return(0,n.jsxs)("text",{x:d,y:s+c*Math.sin(-l*y),fill:v[i.toLowerCase()],textAnchor:d>t?"start":"end",dominantBaseline:"central",fontSize:"0.9rem",children:[o," ",i.toLowerCase()]})};function k(e){let{questions:t,answers:s,preambles:r={},closingRemark:c,progressRemark:d,timeTaken:x}=e,{correctAnswersCount:u,percentage:y,counts:k}=(0,l.useMemo)(()=>(0,i.P7)(t,s),[s,t]),[S,A]=(0,l.useState)(null),C=(0,l.useCallback)(async()=>{let e=await html2pdf().set({html2canvas:{scale:2,scrollY:0},filename:(0,i.UO)(),pagebreak:{mode:["css","legacy"]}}).from(document.getElementById("export")).toPdf().output("blob");return A(e),e},[]),T=(0,l.useCallback)(async e=>{var t,s,n;let l=null!==(t=null!=e?e:S)&&void 0!==t?t:await C();if(!l)return;let r=(await o(l)).split(",")[1];if(r){let e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=navigator.userAgent.toLowerCase().indexOf("CriOS")>-1||navigator.vendor.toLowerCase().indexOf("google")>-1,l=[];if(e){let e=null===(n=navigator)||void 0===n?void 0:null===(s=n.userAgent.match(/OS [\d_]+/i))||void 0===s?void 0:s[0].substr(3).split("_").map(e=>parseInt(e));Array.isArray(e)&&(l=e)}let a=(0,i.UO)(),o="application/pdf",c=atob(r),d=c.length,x=new ArrayBuffer(d),m=new Uint8Array(x);for(let e=0;e<d;e++)m[e]=c.charCodeAt(e);let u=document.createElement("a");try{let s,n="";e&&!t&&l[0]<=12?n=s="data:application/pdf;base64,"+r:(e&&!t&&(o="application/octet-stream"),s=new Blob([m],{type:o}),n=window.URL.createObjectURL(s)),u.setAttribute("href",n),u.setAttribute("target","_blank"),(e&&(l[0]>12||t)||!e)&&u.setAttribute("download",a);let i=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});u.dispatchEvent(i)}catch(e){console.log(e)}}},[C,S]);(0,l.useEffect)(()=>{setTimeout(()=>{C()},500)},[]);let O=(0,l.useMemo)(()=>m()().utc().format("DD MMM YYYY hh:mm a [GMT]"),[]),[I,q]=(0,l.useState)(""),R=async()=>{if(q(""),!navigator.share){q("Sorry, sharing is not supported on this browser! Please download the file and share manually instead.");return}let e=null;if(S&&(e=new File([S],(0,i.UO)(),{type:S.type})),!e||!navigator.canShare({files:[e]})){q("This browser may be preventing the sharing, so you may have to download and share manually, or retry sharing in a different browser.");return}try{await navigator.share({files:[e]})}catch(e){if("AbortError"===e.name)return;q("Sorry, there was a problem sharing this file on your browser. Please download and share manually instead.")}},F=e=>{let{isExportView:l=!1}=e;return(0,n.jsx)("div",{className:"flex flex-col justify-center items-center mx-4 ".concat(l?"w-full":""),children:t.map((e,o)=>{var c;let{status:d,reason:x}=(0,i.DL)(e,s[o]);return(0,n.jsxs)("div",{className:"".concat(l?"max-w-lg w-full":"max-w-xs"," w-full border rounded-lg mx-4 mb-4 p-4 ").concat("correct"===d?"bg-green-100 border-green-600":"wrong"===d?"bg-red-100 border-red-800":"bg-yellow-50 border-yellow-800"),children:[(0,n.jsxs)("h6",{className:"text-xs text-gray-600 text-center",children:["Question ",o+1," of ",t.length]}),e.preamble&&r[e.preamble]&&(0,n.jsx)("div",{className:"text-center text-md mt-4",children:(0,n.jsx)(a.Z,{snippet:r[e.preamble]})}),(0,n.jsx)("h1",{className:"text-md my-4 text-center",children:(0,n.jsx)(a.Z,{snippet:e.question})}),"mcq"===e.type?(0,n.jsx)(n.Fragment,{children:null===(c=e.choices)||void 0===c?void 0:c.map((t,r)=>(0,n.jsxs)("button",{className:"flex justify-center items-center relative max-w-".concat(l?"md":"xs"," mx-auto border rounded w-full mb-2 p-1 border-gray-500 transition-colors duration-200 ").concat(e.answer=="".concat(r)&&"correct"===d?"text-black bg-green-200":"wrong"===d&&s[o]=="".concat(r)?"text-black bg-red-200":""),children:[(0,n.jsx)(a.Z,{snippet:t}),(0,n.jsx)("span",{className:"absolute right-4",children:e.answer=="".concat(r)?(0,n.jsx)("i",{className:"fas fa-check text-green-600"}):"wrong"===d&&s[o]=="".concat(r)?(0,n.jsx)("i",{className:"fas fa-times text-red-600"}):null})]},r))}):(0,n.jsxs)("div",{className:"flex flex-col space-y-4 border-t ".concat("correct"===d?"border-green-200":"wrong"===d?"border-red-200":"border-yellow-800/10"," pt-4"),children:["correct"!==d&&(0,n.jsxs)("div",{className:"flex flex-col justify-center",children:[(0,n.jsx)("p",{className:"text-xs",children:"Correct Answer:"}),(0,n.jsx)("p",{className:"text-xl font-bold",children:(0,n.jsx)(a.Z,{snippet:(0,i.O9)(e,!0)})})]}),(0,n.jsxs)("div",{className:"flex flex-col",children:[(0,n.jsx)("p",{className:"text-xs",children:"Your Answer:"}),(0,n.jsx)("p",{className:"text-xl",children:"skipped"===d?null:"wrong"===d&&"invalid-format"===x?s[o]:(0,n.jsx)(a.Z,{snippet:(0,i.O9)(e,!1,s[o])})}),(0,n.jsxs)("h6",{className:"text-xs font-bold ".concat("correct"===d?"text-green-800":"wrong"===d?"text-red-900":"text-yellow-800"," capitalize"),children:["correct"===d?(0,n.jsx)("i",{className:"fas fa-check"}):"wrong"===d?(0,n.jsx)("i",{className:"fas fa-times"}):"skipped"===d?(0,n.jsx)("i",{className:"fas fa-question mr-1"}):null,(0,n.jsx)("span",{className:"ml-1",children:(0,i.M)(d,x)})]})]})]})]},o)})})};return(0,n.jsxs)("div",{className:"p-2 my-2",children:[(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"flex flex-col max-w-xs mx-auto justify-center items-center ",children:(0,n.jsx)(p.h,{minWidth:150,minHeight:300,className:"p-1 mb-2 mx-auto",children:(0,n.jsxs)(b.u,{children:[(0,n.jsx)(j.b,{animationDuration:1e3,data:k,innerRadius:65,outerRadius:75,fill:"#8884d8",paddingAngle:2,dataKey:"value",label:N,children:k.map((e,t)=>(0,n.jsx)(g.b,{fill:v[e.name.toLowerCase()]},"cell-".concat(t)))}),(0,n.jsxs)("text",{x:"50%",y:"118px",textAnchor:"middle",dominantBaseline:"middle",className:"font-bold text-2xl",children:[y.toFixed(0),"%"]}),(0,n.jsx)("text",{x:"50%",y:"151px",textAnchor:"middle",dominantBaseline:"middle",className:"text-sm text-gray-400 text-center",children:"Your Score"}),(0,n.jsxs)("text",{x:"50%",y:"181px",textAnchor:"middle",dominantBaseline:"middle",className:"text-md font-bold",children:[u," / ",t.length]})]})})}),(0,n.jsxs)("div",{className:"mx-4 mb-4 font-bold",children:[(0,n.jsxs)("p",{children:["Time Taken: ",Math.floor(x/1e3)+" s"]}),d&&(0,n.jsx)("p",{children:d[0]})]}),d&&d[1]&&(0,n.jsx)("p",{className:" mx-4 mb-4 font-bold border rounded-md p-4 bg-primary-100 border-primary-600 flex items-center space-x-4",children:(0,n.jsx)(a.Z,{snippet:d[1]})}),c&&(0,n.jsx)("p",{className:" mx-4 mb-4 font-bold border rounded-md p-4 bg-primary-100 border-primary-600 flex items-center space-x-4",children:(0,n.jsx)(a.Z,{snippet:c})}),(0,n.jsx)(F,{isExportView:!1})]}),(0,n.jsxs)("div",{className:"my-6 max-w-sm px-4 overflow-hidden w-full mx-auto",children:[(0,n.jsxs)("div",{className:"flex space-x-2",children:[(0,n.jsxs)("button",{onClick:()=>T(),className:"text-sm border-2 font-bold border-black rounded-full py-2 flex-grow",children:[(0,n.jsx)("i",{className:"fas fa-download mr-1"}),"Download"]}),(0,n.jsxs)("button",{onClick:R,className:"text-sm border-2 font-bold border-black rounded-full py-2 flex-grow",children:[(0,n.jsx)("i",{className:"fas fa-share mr-2"}),"Share"]})]}),(0,n.jsxs)(h,{onClick:()=>window.location.reload(),variant:"outlined",className:"w-full mt-4 text-sm",children:[(0,n.jsx)("i",{className:"fas fa-redo mr-2"}),"Try Again"]}),(0,n.jsx)(f(),{href:"/tests",children:(0,n.jsxs)(h,{className:"w-full mt-4 text-sm",children:[(0,n.jsx)("i",{className:"fas fa-arrow-left mr-2"}),"Back to All Tests"]})})]}),(0,n.jsx)("div",{className:"overflow-hidden max-h-0 min-w-0 px-4 w-full",children:(0,n.jsx)("div",{id:"export",className:"mx-auto w-full ",children:(0,n.jsxs)("div",{className:"flex flex-col justify-center items-center m-4 p-4 w-full",children:[(0,n.jsx)("h6",{className:"text-sm mb-4 px-16 mx-2",children:O}),(0,n.jsx)(p.h,{height:350,width:350,children:(0,n.jsxs)(b.u,{children:[(0,n.jsx)(j.b,{animationDuration:0,isAnimationActive:!1,data:k,innerRadius:70,outerRadius:80,fill:"#8884d8",paddingAngle:2,dataKey:"value",label:N,children:k.map((e,t)=>(0,n.jsx)(g.b,{fill:v[e.name.toLowerCase()]},"cell-".concat(t)))}),(0,n.jsxs)("text",{x:"50%",y:"42%",textAnchor:"middle",dominantBaseline:"middle",className:"font-bold text-3xl",children:[y.toFixed(0),"%"]}),(0,n.jsx)("text",{x:"50%",y:"52%",textAnchor:"middle",dominantBaseline:"middle",className:"text-sm text-gray-400 text-center",children:"Your Score"}),(0,n.jsxs)("text",{x:"50%",y:"61%",textAnchor:"middle",dominantBaseline:"middle",className:"text-md font-bold",children:[u," / ",t.length]})]})}),(0,n.jsxs)("div",{className:"mx-4 mb-4 font-bold",children:[(0,n.jsxs)("p",{children:["Time Taken: ",Math.floor(x/1e3)+" s"]}),d&&(0,n.jsx)("p",{children:d[0]})]}),d&&d[1]&&(0,n.jsx)("p",{className:" mx-4 mb-4 font-bold border rounded-md p-4 bg-primary-100 border-primary-600 flex items-center space-x-4",children:(0,n.jsx)(a.Z,{snippet:d[1]})}),c&&(0,n.jsx)("p",{className:" mx-4 mb-4 font-bold border rounded-md p-4 bg-primary-100 border-primary-600 flex items-center space-x-4",children:(0,n.jsx)(a.Z,{snippet:c})}),(0,n.jsx)(F,{isExportView:!0})]})})}),I&&(0,n.jsx)(w,{onConfirm:()=>q(""),onClose:()=>q(""),text:I})]})}var S=s(54e3);let A=(0,l.forwardRef)((e,t)=>(0,n.jsx)("input",{ref:t,...e,className:"w-full focus:ring-primary-500 rounded-md p-4 border "}));A.displayName="Input";var C=s(62597),T=s(48254),O=s(64011);function I(e){var t;let{question:s,preambles:r={},timeLimit:o,onSubmitAnswer:c,isLastQuestion:d,allowAutomaticDownload:x,setAllowAutomaticDownload:m}=e,[u,f]=(0,l.useState)(!1),p=(0,T.q)(0,{duration:600}),b=(0,T.q)(.7,{duration:600}),[j,g]=(0,l.useState)(-1),[w,v]=(0,l.useState)(""),[y,N]=(0,l.useState)(o),k=(0,l.useRef)(null),[I,q]=(0,l.useState)(!1),R=()=>{q(!0),setTimeout(()=>{q(!1)},100)},F=(0,l.useMemo)(()=>{var e;if("mcq"===s.type||""===w)return"";let t=(0,i.Vx)(w);return t?!t.isNan&&"int"!==t.format&&(null===(e=s.numberInputTypes)||void 0===e?void 0:e.length)&&!s.numberInputTypes.includes(t.format)?"Please enter an answer in ".concat((0,i.h4)(s.numberInputTypes)," format!"):"":"Please enter a valid input!"},[w,s.numberInputTypes,s.type]),M=function(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=w;"mcq"===s.type&&(t=-1===j?"":j.toString()),c(t,e),N(o),g(-1),v(""),R()},B=()=>{c(S.a,!1),N(o),g(-1),v(""),R()},D=(e,t)=>{p.set(0),b.set(.7),setTimeout(()=>{"skip"===e?B():M(t)},300)};return(0,l.useEffect)(()=>{y<=0&&D("submit",d)},[y]),(0,l.useEffect)(()=>{if(u){var e;null===(e=k.current)||void 0===e||e.focus()}},[u]),(0,l.useEffect)(()=>{var e;null===(e=k.current)||void 0===e||e.focus(),p.set(1),b.set(1);let t=setInterval(()=>{N(e=>e<=0?(clearInterval(t),0):e-1)},1e3);return()=>clearInterval(t)},[s]),(0,n.jsxs)(O.E.div,{className:"flex flex-col mt-4 items-center px-6 space-y-6",style:{opacity:p,scale:b},children:[(0,n.jsxs)("div",{className:"h-2 bg-gray-200 rounded-full mb-4 max-w-xs w-full",children:[(0,n.jsx)("div",{className:"min-h-full bg-primary-500 rounded-full w-full",style:I?{width:"".concat(y/o*100,"%")}:{width:"".concat(y/o*100,"%"),transitionProperty:"width",transitionDuration:"".concat(1e3,"ms"),transitionTimingFunction:"linear"}}),(0,n.jsxs)("h6",{className:"text-[0.8rem] text-center text-gray-500",children:[y.toFixed(0)," seconds remaining"]})]}),s.preamble&&r[s.preamble]&&(0,n.jsx)("div",{className:"bg-yellow-50 border border-gray-500 p-4 rounded-lg",children:(0,n.jsx)(a.Z,{snippet:r[s.preamble]})}),(0,n.jsx)("h1",{className:"text-center",children:(0,n.jsx)(a.Z,{snippet:s.question})}),"mcq"===s.type?(0,n.jsx)("div",{className:"flex flex-col w-full",children:null===(t=s.choices)||void 0===t?void 0:t.map((e,t)=>(0,n.jsx)("button",{className:"max-w-xs mx-auto border rounded w-full mb-4 p-2 border-gray-400 transition-colors duration-200 ".concat(j===t?"bg-primary-500":"bg-white"),onClick:()=>g(t),children:(0,n.jsx)(a.Z,{snippet:e})},e.toString()))}):(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault(),("mcq"===s.type?-1!==j:""!==w&&""===F)&&D("submit",!1)},className:"max-w-xs",children:[(0,n.jsx)(A,{placeholder:u?"Type your answer here...":void 0,value:w,onChange:e=>{e.target.value.length<=35&&v(e.target.value)},autoFocus:!0,readOnly:!u,ref:k,type:"text",maxLength:35}),(0,n.jsx)("p",{className:"text-red-500 text-sm place-self-start mt-1 ml-2 ".concat(F?"":"invisible"," "),children:F||"N/A"})]}),d&&!1,(0,n.jsxs)(C.Z,{className:"my-4",children:[(0,n.jsx)(h,{variant:"outlined",onClick:()=>D("skip"),children:"Skip"}),(0,n.jsx)(h,{disabled:!d&&("mcq"===s.type?-1===j:""===w||""!==F),onClick:()=>D("submit",!1),children:d?"Finish":"Next"})]}),"mcq"!==s.type&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)("div",{className:"flex flex-row items-center",children:[(0,n.jsx)("input",{type:"checkbox",className:"mr-2 text-lg",checked:u,onChange:e=>null==f?void 0:f(e.target.checked),id:"use-external-keyboard"}),(0,n.jsx)("label",{htmlFor:"use-external-keyboard",className:"block text-sm text-gray-700",children:"Use External Keyboard"})]}),(0,n.jsx)("div",{children:!u&&(0,n.jsx)("div",{className:"text-center max-w-prose",children:"\x000123456789.+-*/()AEN \b".split("").map(e=>(0,n.jsx)("button",{className:"font-bold bg-secondary-500 hover:bg-secondary-300 m-1 px-2 py-1 text-center ",onClick:()=>{"\x00"===e?v(""):"\b"===e?v(e=>e?e.substring(0,e.length-1):e):v(t=>t.length>=35?t:t+e)},children:" "===e?"[space]":"\b"===e?"[backspace]":"\x00"===e?"[clear]":e}))})})]})]})}function q(e){var t,s,r,o,x,m;let{data:u,onFinish:f,questionBankSource:p}=e,b=(0,l.useMemo)(()=>{let e=(0,i.ct)(u.questions,u.randomQuestionCount,function(e){var t;let s=d();return null===(t=s[e])||void 0===t?void 0:t.index}(p));return e},[u.questions,u.randomQuestionCount,p]),j=b.questions,[{answers:g,currentQuestionIndex:v,isFinished:y,timerRanOut:N,timeTaken:S},A]=(0,l.useState)({isFinished:!1,timerRanOut:!1,currentQuestionIndex:0,answers:j.map(()=>""),timeTaken:0}),C=(0,l.useMemo)(()=>{let e=(0,i.P7)(j,g);return e},[j,g]),[T,O]=(0,l.useState)("true"===localStorage.getItem("enableAutomaticDownload")),q=e=>{O(e),localStorage.setItem("enableAutomaticDownload",e.toString())},[R,F]=(0,l.useState)(!T),M=(0,l.useMemo)(()=>y&&!R&&!N,[y,R,N]);return(0,l.useEffect)(()=>{if(M){var e,t,s,n,l,r,a;let o=(0,i.P7)(j,g),c=JSON.stringify({timestamp:new Date().toISOString(),timeTaken:S,score:"".concat(o.percentage.toFixed(0),"% (").concat(o.correctAnswersCount,"/").concat(j.length,")"),correctAnswerCount:null!==(s=o.correctAnswersCount)&&void 0!==s?s:0,wrongAnswerCount:null!==(n=null===(e=o.counts.find(e=>"Wrong"===e.name))||void 0===e?void 0:e.value)&&void 0!==n?n:0,skippedQuestionCount:null!==(l=null===(t=o.counts.find(e=>"Skipped"===e.name))||void 0===t?void 0:t.value)&&void 0!==l?l:0,markedResults:j.map((e,t)=>{let{status:s,reason:n}=o.perQuestionStatus[t];return{question:e,userAnswer:"skipped"===s?"":"wrong"===s&&"invalid-format"===n?g[t]:(0,i.O9)(e,!1,g[t],!0),status:s,reason:n}}),preambles:u.preambles},null,2),d=btoa(c);if(d){let e=/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,t=navigator.userAgent.toLowerCase().indexOf("CriOS")>-1||navigator.vendor.toLowerCase().indexOf("google")>-1,s=[];if(e){let e=null===(a=navigator)||void 0===a?void 0:null===(r=a.userAgent.match(/OS [\d_]+/i))||void 0===r?void 0:r[0].substr(3).split("_").map(e=>parseInt(e));Array.isArray(e)&&(s=e)}let n=(0,i.UO)("txt"),l="text/plain",o=atob(d),c=o.length,x=new ArrayBuffer(c),m=new Uint8Array(x);for(let e=0;e<c;e++)m[e]=o.charCodeAt(e);let u=document.createElement("a");try{let r,a="";e&&!t&&s[0]<=12?a=r="data:text/plain;base64,"+d:(e&&!t&&(l="application/octet-stream"),r=new Blob([m],{type:l}),a=window.URL.createObjectURL(r)),u.setAttribute("href",a),u.setAttribute("target","_blank"),(e&&(s[0]>12||t)||!e)&&u.setAttribute("download",n);let i=new MouseEvent("click",{view:window,bubbles:!0,cancelable:!1});u.dispatchEvent(i)}catch(e){console.log(e)}}}},[M]),(0,n.jsxs)("div",{className:"flex-grow flex flex-col min-h-full",children:[u.openingRemarks&&!y&&(0,n.jsx)("p",{className:"text-md font-semibold text-center mt-4  w-fit mx-auto p-2 px-4 rounded-md",children:(0,n.jsx)(a.Z,{snippet:u.openingRemarks})}),(!y||N)&&(0,n.jsxs)("div",{className:"p-4 flex-grow flex flex-col",children:[(0,n.jsxs)("h1",{className:"text-sm text-center",children:["Question ",v+1," of ",j.length]}),(0,n.jsx)(I,{question:j[v],timeLimit:u.inputTimeWaitSecs||40,onSubmitAnswer:(e,t)=>{A(s=>{let n=JSON.parse(JSON.stringify({...s}));if(n.answers[n.currentQuestionIndex]=e,n.timerRanOut=t,n.currentQuestionIndex===j.length-1){n.isFinished=!0,n.timeTaken=new Date().getTime()-b.testStartTime;let e={startFrom:b.startFrom,lastTimeSubmitted:new Date().getTime(),numOfQuestionsAsked:b.numOfQuestionsAsked,corrections:[]},t=(0,i.P7)(j,n.answers);for(let s=0;s<t.perQuestionStatus.length;s++)"correct"===t.perQuestionStatus[s].status?e.numOfQuestionsAsked++:e.corrections.push(b.questionIndices[s]);(function(e,t){let s=d();s[e]={index:t,lastUpdated:new Date().toISOString()},localStorage.setItem(c,JSON.stringify(s))})(p,JSON.stringify(e)),f()}else n.currentQuestionIndex++;return n})},preambles:u.preambles,isLastQuestion:v===j.length-1,allowAutomaticDownload:T,setAllowAutomaticDownload:e=>{q(e),F(!e)}})]}),N&&(0,n.jsx)(w,{text:"Your time is up!",onClose:()=>A(e=>({...JSON.parse(JSON.stringify(e)),timerRanOut:!1})),onConfirm:()=>A(e=>({...JSON.parse(JSON.stringify(e)),timerRanOut:!1}))}),M&&(0,n.jsx)("div",{className:"p-4 flex-grow flex flex-col",children:C&&(0,n.jsxs)("div",{className:"flex-grow flex flex-col justify-center items-center space-y-10",children:[(0,n.jsxs)("section",{className:"w-fit",children:[(0,n.jsx)("h1",{className:"text-2xl font-bold text-center",children:"Score"}),(0,n.jsxs)("h3",{className:"text-4xl/10 font-bold text-center",children:[C.correctAnswersCount," / ",j.length]}),(0,n.jsxs)("p",{className:"text-lg font-semibold text-center text-black/80",children:["(",C.percentage.toFixed(0),"%)"]}),(0,n.jsx)("table",{className:"w-full mt-4 ",children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"text-left border-0 pr-4",children:"Correct Answers:"}),(0,n.jsx)("td",{className:"text-center font-bold border-0",children:null!==(o=null===(t=C.counts.find(e=>"Correct"===e.name))||void 0===t?void 0:t.value)&&void 0!==o?o:0})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"text-left border-0 pr-4",children:"Wrong Answers:"}),(0,n.jsx)("td",{className:"text-center font-bold border-0",children:null!==(x=null===(s=C.counts.find(e=>"Wrong"===e.name))||void 0===s?void 0:s.value)&&void 0!==x?x:0})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"text-left border-0 pr-4",children:"Skipped Questions:"}),(0,n.jsx)("td",{className:"text-center font-bold border-0",children:null!==(m=null===(r=C.counts.find(e=>"Skipped"===e.name))||void 0===r?void 0:r.value)&&void 0!==m?m:0})]})]})})]}),(0,n.jsxs)("div",{className:"flex flex-col space-y-4",children:[(0,n.jsx)(h,{onClick:()=>F(!0),children:"See Marked Results"}),(0,n.jsxs)(h,{variant:"outlined",onClick:()=>window.location.reload(),className:"text-md py-1",children:[(0,n.jsx)("i",{className:"fas fa-redo-alt mr-2"})," Try Again"]})]})]})}),R&&y&&!N&&(0,n.jsx)(k,{preambles:u.preambles,timeTaken:S,questions:j,answers:g,closingRemark:u.closingRemarks,progressRemark:(0,i.V2)(b,C.correctAnswersCount)})]})}var R=s(4943),F=s.n(R);function M(e){let{data:{questions:t,openingRemarks:s}}=e,[r,i]=(0,l.useState)([]),o=e=>{i(t=>t.includes(e)?t.filter(t=>t!==e):[...t,e])};return(0,n.jsxs)("div",{className:"m-6 p-4 space-y-6 mx-auto flex-shrink w-full",children:[s&&(0,n.jsx)("p",{className:"text-lg font-bold",children:(0,n.jsx)(a.Z,{snippet:s})}),(0,n.jsxs)("div",{className:"flex space-x-2 justify-center items center mx-auto",children:[(0,n.jsx)("button",{className:"text-xs px-4 w-full border rounded-full border-black/50 font-semibold p-1 disabled:text-black/40 disabled:border-black/40 disabled:cursor-not-allowed",onClick:()=>i(F()(0,t.length)),disabled:t.length===r.length,children:"Show Answers"}),(0,n.jsx)("button",{className:"text-xs px-4 w-full border rounded-full border-black/50 font-semibold p-1 disabled:text-black/40 disabled:border-black/40 disabled:cursor-not-allowed",onClick:()=>i([]),disabled:0===r.length,children:"Hide Answers"})]}),(0,n.jsx)("div",{children:t.map((e,s)=>(0,n.jsx)("div",{className:"p-2 px-4 w-full border ".concat(0===s?"rounded-t-md":"border-t-0"," border-black/20 border-b-").concat(s===t.length-1?"1 rounded-b-md":"0"),children:(0,n.jsxs)("h1",{className:"mb-2 flex space-x-2 w-full",children:[(0,n.jsxs)("span",{className:"font-bold",children:[s+1,"."]}),(0,n.jsxs)("span",{className:"flex flex-col flex-y-4 flex-grow",children:[(0,n.jsx)("div",{className:"text-md text-black font-semibold",children:(0,n.jsx)(a.Z,{snippet:e.question})}),(0,n.jsxs)("div",{className:"flex",children:[(0,n.jsx)("div",{className:"flex-grow"}),(0,n.jsx)("button",{onClick:()=>o(s),className:"text-sm p-0 px-4 w-fit text-right border float-right rounded-xl border-gray-600 ".concat(r.includes(s)?"bg-gray-100 ":""," overflow-hidden\n        "),children:r.includes(s)?"Hide answer":"Show answer"})]}),(0,n.jsxs)("div",{className:"text-md border rounded-lg bg-yellow-50 border-yellow-800 w-full flex flex-col space-x-2\n        ".concat(r.includes(s)?"max-h-100 opacity-100 py-3 mb-4 mt-2 p-3":"max-h-0 opacity-0 py-0 mb-0 p-0 mt-0","\n        overflow-hidden\n\n      "),children:[(0,n.jsx)("h6",{className:"text-md ml-2 font-bold",children:"Answer:"}),(0,n.jsx)(a.Z,{snippet:e.answer})]})]})]})},e.question+e.answer))}),(0,n.jsx)("div",{className:"max-w-xs flex flex-col space-y-2 justify-center items center mx-auto",children:(0,n.jsx)(f(),{href:"/tests",className:"w-full",children:(0,n.jsxs)(h,{className:"text-sm px-4 w-full",children:[(0,n.jsx)("i",{className:"fas fa-arrow-left pr-2"})," Back to All Tests"]})})})]})}var B=s(56008),D=s(8794),E=s(24033),P=s(48475),Z=s.n(P);function L(){let e=(0,E.useSearchParams)(),t=(0,E.useRouter)(),s=(0,l.useMemo)(()=>e.get("src"),[e]),[i,o]=(0,l.useState)(),[c,d]=(0,l.useState)(""),[x,m]=(0,l.useState)(5),u=(0,l.useCallback)(()=>{let e=setInterval(()=>{m(s=>0===s?(t.push("/tests"),clearInterval(e),s):s-1)},1e3);return()=>clearInterval(e)},[t]),f=(0,l.useCallback)(e=>{d(e),u()},[u]),[p,b]=(0,l.useState)();(0,l.useEffect)(()=>{s?fetch("/questionBanks/".concat(s,".json")).then(async e=>{if(e.ok)try{var t;let n=await e.json();if(!(null===(t=n.questions)||void 0===t?void 0:t.length)){f("Sorry, something went wrong! This test has no questions!");return}let l=await fetch("/links.json").then(e=>e.json()),r=l.sections.map(e=>e.links).flat().find(e=>e.questionBankUrl===s);r&&b({title:r.title,description:r.description}),"isTheory"in n&&!0===n.isTheory&&y(!0),o(n)}catch(e){f("Something went wrong!"),console.error(e)}else 404===e.status&&f("No such test!")}):t.push("/tests")},[t,f,s]);let[j,g]=(0,l.useState)(!1),[v,y]=(0,l.useState)(!1),N=(0,l.useMemo)(()=>i&&"isTheory"in i&&!0===i.isTheory,[i]),[k,S]=(0,l.useState)(!1);return(0,n.jsxs)(D.Z,{version:2,config:{"fast-preview":{disabled:!0},tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]],displayMath:[["$$","$$"],["\\[","\\]"]]},messageStyle:"none"},onStartup:e=>e.Hub.processSectionDelay=0,children:[(0,n.jsx)(Z(),{src:"https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",strategy:"afterInteractive"}),(0,n.jsxs)("div",{className:"min-h-full flex-grow flex flex-col mx-auto",children:[(0,n.jsx)(B.default,{title:"Test",showBackButton:!v||j||N||!1,backLink:"/tests",rightComponent:!v||j||N?null:(0,n.jsxs)("button",{className:"text-sm  font-semibold  mr-2 border-2 rounded-full px-4 text-red-600 border-red-600 flex flex-row items-center",onClick:()=>S(!0),children:["Cancel Test",(0,n.jsx)("i",{className:"fas fa-times pl-2"})]})}),k&&!j&&(0,n.jsx)(w,{onConfirm:()=>{t.push("/tests")},onCancel:()=>S(!1),onClose:()=>S(!1),text:"Are you sure you want to cancel this test? Your progress will not be saved.",cancelButtonText:"Continue Test",okText:"Cancel Test"}),c?(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center flex-grow px-6",children:[(0,n.jsx)("div",{children:c}),(0,n.jsxs)("div",{children:["Redirecting in ",x," seconds..."]})]}):i?(0,n.jsx)(n.Fragment,{children:v?"isTheory"in i&&!0===i.isTheory?(0,n.jsx)(M,{data:i,questionBankSource:s}):"isTheory"in i?null:(0,n.jsx)(q,{data:i,onFinish:()=>g(!0),questionBankSource:s}):(0,n.jsxs)("div",{className:"flex flex-col items-center justify-center flex-grow px-6",children:[(null==p?void 0:p.title)&&(0,n.jsx)("h1",{className:"text-xl font-bold",children:p.title}),(null==p?void 0:p.description)&&(0,n.jsx)("p",{children:p.description}),(0,n.jsx)("div",{children:i.extraDescription&&(0,n.jsx)(a.Z,{snippet:i.extraDescription})}),(0,n.jsx)(h,{onClick:()=>y(!0),className:"mt-8",children:"Start Test"})]})}):(0,n.jsx)(r,{})]})]})}},56008:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return c}});var n=s(57437),l=s(61396),r=s.n(l),a=s(2265),i=s(14505),o=s(24033);function c(e){let{title:t,showBackButton:s=!1,backLink:l="/",rightComponent:c}=e,[d,x]=(0,a.useState)(!1),[m,u]=(0,a.useState)(!0);(0,a.useEffect)(()=>{d?u(!1):setTimeout(()=>{u(!0)},490)},[d]);let f=(0,o.useRouter)(),h=(0,o.usePathname)(),p=e=>{h!==e&&f.push(e),x(!1)};return(0,n.jsxs)("div",{className:"h-12 overflow-hidden flex flex-row space-x-2 items-center p-2 pl-5 border-b relative",children:[s&&(0,n.jsx)(r(),{href:l,className:"flex flex-col justify-center items-center",children:(0,n.jsx)("i",{className:"fas fa-arrow-left text-md"})}),(0,n.jsx)("h1",{className:"text-center font-bold  text-lg absolute top-[50%] translate-y-[-50%] translate-x-[50%] ".concat(c?"left-[0%] pl-0":"right-[50%] "),children:t}),(0,n.jsx)("div",{className:"flex-grow"}),c||(0,n.jsx)("div",{children:(0,n.jsx)(i.ZP,{toggled:d,toggle:x,label:"Show menu",size:24,hideOutline:!0,rounded:!0,color:"#000000"})}),!m&&(0,n.jsx)("div",{className:"\n          fixed \n          top-12 \n          bottom-0 \n          left-0 \n          right-0\n          w-screen\n          h-screen \n          flex \n          flex-col \n          items-center \n          py-10\n          text-black\n\n          z-50\n        ".concat(d?"fade-in":"fade-out","\n\n        "),style:{backdropFilter:"blur(30px)",backgroundColor:"rgba(255, 255, 255, 1)"},children:(0,n.jsx)("button",{onClick:()=>p("/tests"),className:"mb-4 border-2 border-black p-1 px-10 rounded-full",children:(0,n.jsxs)("span",{className:"flex items-center font-semibold",children:[(0,n.jsx)("i",{className:"fas fa-bookmark text-md mr-2"}),"All Tests"]})})})]})}},62597:function(e,t,s){"use strict";var n=s(57437);s(2265),t.Z=e=>(0,n.jsx)("div",{className:"flex flex-row justify-between items-center ".concat(e.spacing?"space-x-".concat(e.spacing):"space-x-4"," ").concat(e.className),children:e.children})}},function(e){e.O(0,[990,326,952,204,38,857,971,472,744],function(){return e(e.s=53176)}),_N_E=e.O()}]);