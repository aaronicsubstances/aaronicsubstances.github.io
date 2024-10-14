"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{15857:function(e,t,n){var r=n(57437),i=n(34071),u=n(166);n(2265),t.Z=e=>{let{snippet:t}=e;return(0,r.jsx)(u.Z,{dynamic:!0,dangerouslySetInnerHTML:{__html:(0,i.sg)(t)}})}},54e3:function(e,t,n){n.d(t,{a:function(){return r}});let r="-1\x00-1"},34071:function(e,t,n){n.d(t,{M:function(){return A},O9:function(){return o},UO:function(){return c},V2:function(){return f},DL:function(){return p},ct:function(){return m},P7:function(){return d},Vx:function(){return g},h4:function(){return h},sg:function(){return E}});var r=n(54e3),i=n(41709),u=JSON.parse('{"e":[["amp",38],["lt",60],["gt",62],["nbsp",160],["iexcl",161],["cent",162],["pound",163],["curren",164],["yen",165],["brvbar",166],["sect",167],["uml",168],["copy",169],["ordf",170],["laquo",171],["not",172],["shy",173],["reg",174],["macr",175],["deg",176],["plusmn",177],["sup2",178],["sup3",179],["acute",180],["micro",181],["para",182],["middot",183],["cedil",184],["sup1",185],["ordm",186],["raquo",187],["frac14",188],["frac12",189],["frac34",190],["iquest",191],["Agrave",192],["Aacute",193],["Acirc",194],["Atilde",195],["Auml",196],["Aring",197],["AElig",198],["Ccedil",199],["Egrave",200],["Eacute",201],["Ecirc",202],["Euml",203],["Igrave",204],["Iacute",205],["Icirc",206],["Iuml",207],["ETH",208],["Ntilde",209],["Ograve",210],["Oacute",211],["Ocirc",212],["Otilde",213],["Ouml",214],["times",215],["Oslash",216],["Ugrave",217],["Uacute",218],["Ucirc",219],["Uuml",220],["Yacute",221],["THORN",222],["szlig",223],["agrave",224],["aacute",225],["acirc",226],["atilde",227],["auml",228],["aring",229],["aelig",230],["ccedil",231],["egrave",232],["eacute",233],["ecirc",234],["euml",235],["igrave",236],["iacute",237],["icirc",238],["iuml",239],["eth",240],["ntilde",241],["ograve",242],["oacute",243],["ocirc",244],["otilde",245],["ouml",246],["divide",247],["oslash",248],["ugrave",249],["uacute",250],["ucirc",251],["uuml",252],["yacute",253],["thorn",254],["yuml",255],["fnof",402],["Alpha",913],["Beta",914],["Gamma",915],["Delta",916],["Epsilon",917],["Zeta",918],["Eta",919],["Theta",920],["Iota",921],["Kappa",922],["Lambda",923],["Mu",924],["Nu",925],["Xi",926],["Omicron",927],["Pi",928],["Rho",929],["Sigma",931],["Tau",932],["Upsilon",933],["Phi",934],["Chi",935],["Psi",936],["Omega",937],["alpha",945],["beta",946],["gamma",947],["delta",948],["epsilon",949],["zeta",950],["eta",951],["theta",952],["iota",953],["kappa",954],["lambda",955],["mu",956],["nu",957],["xi",958],["omicron",959],["pi",960],["rho",961],["sigmaf",962],["sigma",963],["tau",964],["upsilon",965],["phi",966],["chi",967],["psi",968],["omega",969],["thetasym",977],["upsih",978],["piv",982]]}'),s=n(62067),a=n.n(s);let l="Unexpected, or Undefined",c=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pdf";return"alg-test-".concat(a()().utc().format("YYYYMMDDHHmmss"),".").concat(e)};function o(e,t,n,r){var i;let u=g(t?e.answer:n);if(!u)return"Parse error with: ".concat(t?e.answer:n);let s=(null===(i=e.numberInputTypes)||void 0===i?void 0:i.length)?e.numberInputTypes[0]:void 0,a="";return a=r?function(e,t){if(e.isNan)return l;let n=t||e.format,r=e.num;if("dec"===n||1===r.d&&"mix"!==n)return y(e);{let t=r.n,i=r.d;e.actualDenominator&&(t=(i=e.actualDenominator)*r.n/r.d);let u=r.s<0?"-":"";if("mix"===n){let e=t%i,n=(t-e)/i;return"".concat(u).concat(n," ").concat(e,"/").concat(i)}if("qr"!==n)return"".concat(u).concat(t,"/").concat(i);{let e=t%i,n=(t-e)/i;return"".concat(n," remainder ").concat(e)}}}(u,s):function(e,t){if(e.isNan)return l;let n=t||e.format,r=e.num,i="";if("dec"===n||1===r.d&&"mix"!==n){i=y(e);let t=i.indexOf("(");-1!==t&&(i=i.substring(0,t)+"\\overline{"+i.substring(t+1,i.length-1)+"}")}else{let t=r.n,u=r.d;e.actualDenominator&&(t=(u=e.actualDenominator)*r.n/r.d);let s=r.s<0?"-":"";if("mix"===n){let e=t%u,n=(t-e)/u;i="".concat(s).concat(n,"\\frac{").concat(e,"}{").concat(u,"}")}else if("qr"===n){let e=t%u,n=(t-e)/u;return"".concat(n," remainder ").concat(e)}else i="".concat(s,"\\frac{").concat(t,"}{").concat(u,"}")}return"\\("+i+"\\)"}(u,s),t&&e.acceptNanAnswer&&!u.isNan&&(a="".concat(l,", or ").concat(a)),a}function d(e,t){let n=0,r=0,i=0,u=e.map((e,u)=>{let s=p(e,t[u]);return"correct"===s.status?n++:"wrong"===s.status?r++:i++,s}),s=n/e.length*100;return{correctAnswersCount:n,percentage:s,counts:[{name:"Correct",value:n},{name:"Wrong",value:r},{name:"Skipped",value:i}].filter(e=>0!==e.value),perQuestionStatus:u,wrongAnswersCount:r,skippedAnswersCount:i}}function f(e,t){let n=e.numOfQuestionsAsked+t,r=Math.floor(100*n/e.totalQuestionCount),i=["Progress: ".concat(r,"% (").concat(n," answered correctly)")];return e.currentQuestionsIsLastSubset&&t===e.questions.length&&i.push("Congrats! You have correctly answered all questions in this test category."),i}function m(e,t,n){var r,i;if(!e.length)throw Error("received empty array");let u={testStartTime:new Date().getTime(),startFrom:(r=0,i=e.length,r||(r=0),i||(i=2147483647),Math.floor(Math.random()*(i-r))+r),corrections:[],numOfQuestionsAsked:0,lastTimeSubmitted:0,questions:[],questionIndices:[],currentQuestionsIsLastSubset:!1,totalQuestionCount:e.length};if(n){let t=JSON.parse(n);!t||!t.lastTimeSubmitted||t.startFrom<0||t.startFrom>=e.length||!t.corrections||t.corrections.filter(t=>t<0||t>=e.length).length||t.numOfQuestionsAsked<0||t.numOfQuestionsAsked>=e.length||(u.startFrom=t.startFrom,u.numOfQuestionsAsked=t.numOfQuestionsAsked,u.corrections=t.corrections,u.lastTimeSubmitted=t.lastTimeSubmitted)}if(u.corrections.length)for(let t of u.corrections)u.questions.push(e[t]),u.questionIndices.push(t);else{(!t||t<0)&&(t=10),t=Math.min(e.length-u.numOfQuestionsAsked,t);for(let n=0;n<t;n++){let t=(u.startFrom+u.numOfQuestionsAsked+n)%e.length;u.questions.push(e[t]),u.questionIndices.push(t)}}return u.numOfQuestionsAsked+u.questions.length>=e.length&&(u.currentQuestionsIsLastSubset=!0),u}function p(e,t){var n,i,u,s,a;if(t===r.a)return{status:"skipped",reason:"skipped"};if(""===t.trim())return{status:"skipped",reason:"no-answer"};if("mcq"===e.type)return t===e.answer?{status:"correct"}:{status:"wrong",reason:"wrong-answer"};let l=g(t),c=["cfr","mix","dec"];if((null===(n=e.numberInputTypes)||void 0===n?void 0:n.length)&&(c=e.numberInputTypes),!l||!l.isNan&&"int"!==l.format&&!c.includes(l.format))return{status:"wrong",reason:"invalid-format"};if(e.acceptNanAnswer&&l.isNan)return{status:"correct"};let o=g(e.answer);if(!o)return{status:"skipped",reason:"error"};if(o.isNan&&l.isNan)return{status:"correct"};if(s=o.num,a=l.num,s&&a?!s.equals(a):s!==a)return{status:"wrong",reason:"wrong-answer"};let d=!1;return((null===(i=e.expectedDenominators)||void 0===i?void 0:i.length)&&!e.expectedDenominators.includes(l.actualDenominator||0)&&(d=!0),(null===(u=e.expectedDps)||void 0===u?void 0:u.length)&&!e.expectedDps.includes(l.actualDp||0)&&(d=!0),d)?{status:"wrong",reason:"clumsy"}:{status:"correct"}}function h(e){if(!e||!e.length||e.includes("cfr")&&e.includes("mix")&&e.includes("dec")&&!e.includes("qr"))return"expected";if(!(e.includes("cfr")||e.includes("mix")||e.includes("dec")||e.includes("int")||e.includes("qr")))return"unexpected";let t=[];return e.includes("cfr")&&e.includes("mix")?t.push("fraction"):(e.includes("cfr")&&t.push("common fraction"),e.includes("mix")&&t.push("mixed fraction")),e.includes("qr")&&t.push("whole number-remainder"),e.includes("dec")&&t.push("decimal expansion"),!t.length&&e.includes("int")&&t.push("integer"),t.join(" or ")}function g(e){if(!e)return;if(e=e.trim().toLowerCase(),"unexpected".startsWith(e)||"undefined".startsWith(e))return{isNan:!0};let t=function(e){let t,n,r;if(e=e.trim(),null!==(r=w.exec(e)))t=new i.Z(r[1]);else if(null!==(r=N.exec(e)))n=r[1].length,t=new i.Z(e);else if(null!==(r=I.exec(e))){let e=r[1],n=r[2],i=r[3];t=O(e,n,i)}else{if(null===(r=q.exec(e)))return;let n=r[1],i=r[2],u=r[3];if(u.length>1){u=i[i.length-1];let e=Math.floor(i.length/2);for(let t=e;t>1;t--){let e=i.substring(i.length-t);if(i.endsWith(e+e)){u=e,i=i.substring(0,i.length-2*t);break}}}else u="";t=O(n,i,u)}let u=t.floor().equals(t.ceil())?"int":"dec";return{format:u,num:t,actualDp:n}}(e);return t||(t=function(e){let t,n;if(e=e.trim(),null!==(n=w.exec(e)))t=new i.Z(n[1]);else{if(null===(n=b.exec(e)))return;let r=Number(n[2]);if(0===r)t=new i.Z(n[1]);else{let e=r+1,u=Number(n[1])*e+r;t=new i.Z(u,e)}}let r=t.floor().equals(t.ceil())?"int":"qr";return{format:r,num:t}}(e)),t||(t=function(e){let t,n,r,u;if(e=e.trim(),null!==(u=w.exec(e)))t=new i.Z(u[1]),n="int";else if(null!==(u=x.exec(e))){let e=Number(u[1]),s=Number(u[2]);if(!s)return;r=s,t=new i.Z(e,s),n="cfr"}else{if(null===(u=v.exec(e)))return;let s=Number(u[1]),a=Number(u[2]),l=Number(u[3]);if(!l||a>=l)return;r=l,t=new i.Z(s),t=u[1].startsWith("-")?t.sub(new i.Z(a,l)):t.add(new i.Z(a,l)),n="mix"}return{format:n=t.floor().equals(t.ceil())?"int":n,num:t,actualDenominator:r}}(e)),t}let w=new RegExp(/^([+-]?\d+)\.*$/),x=new RegExp(/^([+-]?\d+)\/([+-]?\d+)$/),v=new RegExp(/^([+-]?\d+)\s+(\d+)\/(\d+)$/),b=new RegExp(/^(\d+)\s*(?:r|re|rem|rema|remai|remain|remaind|remainde|remainder)\s*(\d+)$/i),N=new RegExp(/^[+-]?\d*\.(\d+)$/),I=new RegExp(/^([+-]?\d*)\.(\d*)\((\d+)\)(\.*)$/),q=new RegExp(/^([+-]?\d*)\.(\d+)(\.*)$/);function O(e,t,n){if(e&&!/^[+-]?\d*$/.test(e))throw Error("wholePart argument is invalid");if(t&&!/^\d+$/.test(t))throw Error("noRepeat argument is invalid");if(n&&!/^\d+$/.test(n))throw Error("repeat argument is invalid");e?"-"===e?e="-0":"+"===e&&(e="0"):e="0",t||(t="");let r=e.startsWith("-")?-1n:1n,u=BigInt(e+t);u=u<0n?-u:u;let s=1n;if(n){let e=BigInt(n);u=u*(s=10n**BigInt(n.length)-1n)+e}t&&(s*=10n**BigInt(t.length));let a=function(e,t){for(e=e<0n?-e:e,t=t<0n?-t:t;t;){let n=e%t;e=t,t=n}return e}(u,s);u=u*r/a,s/=a;let l=new i.Z([Number(u),Number(s)]);return l}let k=/&(?:#(\d{1,9})|#x([0-9a-fA-F]{1,7})|([^#0-9][^&;]+));/g;function E(e){let t;if(!e)return"";let n=[],r=0;for(k.lastIndex=0;null!==(t=k.exec(e));){n.push(e.substring(r,t.index));let i=t[1],s=t[2],a=t[3];if(i){let e=parseInt(i);n.push(String.fromCharCode(e))}else if(s){let e=parseInt(s,16);n.push(String.fromCharCode(e))}else{let e=u.e.find(e=>e[0]===a);if(e){let t=Number(e[1]);n.push(String.fromCharCode(t))}else n.push(t[0])}r=t.index+t[0].length}return n.length?(n.push(e.substring(r)),n.join("")):e}function y(e){let t=function(e,t){t||(t=1),t<0&&(e=-e,t=-t);let n=e<0&&t>0||e>0&&t<0?-1:1;e=Math.abs(e),t=Math.abs(t);let r=[],i=new Map,u=e%t,s=(e-u)/t;for(;u&&!i.has(u);){i.set(u,r.length),u*=10;let e=u%t,n=(u-e)/t;r.push(n),u=e}let a="",l="";r.length&&(u||i.set(0,r.length),a=r.slice(0,i.get(u)).join(""),l=r.slice(i.get(u)).join(""));let c=["".concat(n<0?"-":"").concat(s),a,l];return c}(e.num.s*e.num.n,e.num.d),n=[t[0]];if((t[1]||t[2])&&n.push("."),t[1]&&n.push(t[1]),t[2])n.push("(".concat(t[2],")"));else if(e.actualDp){if(t[1].length){let r=e.actualDp-t[1].length;r>0&&n.push("0".repeat(r))}else n.push("."),n.push("0".repeat(e.actualDp))}return n.join("")}function A(e,t){if("skipped"===e){if("no-answer"===t)return"unanswered";if("error"===t)return"Error in Question"}if("wrong"===e){if("invalid-format"===t)return"Invalid Input";if("clumsy"===t)return"Clumsy Input"}return e}}}]);