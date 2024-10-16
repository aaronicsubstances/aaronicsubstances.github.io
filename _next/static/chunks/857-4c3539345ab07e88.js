"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[857],{15857:function(e,t,n){var r=n(57437),u=n(28594),i=n(166);n(2265),t.Z=e=>{let{snippet:t}=e;return(0,r.jsx)(i.Z,{dynamic:!0,dangerouslySetInnerHTML:{__html:(0,u.sg)(t)}})}},54e3:function(e,t,n){n.d(t,{a:function(){return r}});let r="-1\x00-1"},28594:function(e,t,n){n.d(t,{M:function(){return S},O9:function(){return w},UO:function(){return d},V2:function(){return h},DL:function(){return x},ct:function(){return p},P7:function(){return g},sg:function(){return q},b0:function(){return v}});var r=n(54e3),u=n(41709),i=JSON.parse('{"e":[["amp",38],["lt",60],["gt",62],["nbsp",160],["iexcl",161],["cent",162],["pound",163],["curren",164],["yen",165],["brvbar",166],["sect",167],["uml",168],["copy",169],["ordf",170],["laquo",171],["not",172],["shy",173],["reg",174],["macr",175],["deg",176],["plusmn",177],["sup2",178],["sup3",179],["acute",180],["micro",181],["para",182],["middot",183],["cedil",184],["sup1",185],["ordm",186],["raquo",187],["frac14",188],["frac12",189],["frac34",190],["iquest",191],["Agrave",192],["Aacute",193],["Acirc",194],["Atilde",195],["Auml",196],["Aring",197],["AElig",198],["Ccedil",199],["Egrave",200],["Eacute",201],["Ecirc",202],["Euml",203],["Igrave",204],["Iacute",205],["Icirc",206],["Iuml",207],["ETH",208],["Ntilde",209],["Ograve",210],["Oacute",211],["Ocirc",212],["Otilde",213],["Ouml",214],["times",215],["Oslash",216],["Ugrave",217],["Uacute",218],["Ucirc",219],["Uuml",220],["Yacute",221],["THORN",222],["szlig",223],["agrave",224],["aacute",225],["acirc",226],["atilde",227],["auml",228],["aring",229],["aelig",230],["ccedil",231],["egrave",232],["eacute",233],["ecirc",234],["euml",235],["igrave",236],["iacute",237],["icirc",238],["iuml",239],["eth",240],["ntilde",241],["ograve",242],["oacute",243],["ocirc",244],["otilde",245],["ouml",246],["divide",247],["oslash",248],["ugrave",249],["uacute",250],["ucirc",251],["uuml",252],["yacute",253],["thorn",254],["yuml",255],["fnof",402],["Alpha",913],["Beta",914],["Gamma",915],["Delta",916],["Epsilon",917],["Zeta",918],["Eta",919],["Theta",920],["Iota",921],["Kappa",922],["Lambda",923],["Mu",924],["Nu",925],["Xi",926],["Omicron",927],["Pi",928],["Rho",929],["Sigma",931],["Tau",932],["Upsilon",933],["Phi",934],["Chi",935],["Psi",936],["Omega",937],["alpha",945],["beta",946],["gamma",947],["delta",948],["epsilon",949],["zeta",950],["eta",951],["theta",952],["iota",953],["kappa",954],["lambda",955],["mu",956],["nu",957],["xi",958],["omicron",959],["pi",960],["rho",961],["sigmaf",962],["sigma",963],["tau",964],["upsilon",965],["phi",966],["chi",967],["psi",968],["omega",969],["thetasym",977],["upsih",978],["piv",982]]}'),s=n(62067),a=n.n(s);let o=new RegExp(/^([+-]?\d+)\.*$/),l=new RegExp(/^(\d+)\s*(?:r|re|rem|rema|remai|remain|remaind|remainde|remainder)\s*(\d+)$/),c=new RegExp(/^(\d+)\s*(?:\*|\u00D7)\s*(\d+)$/),f=new Map;f.set("qr",{parseAnswer:(e,t,n)=>(function(e){let t;if(null!==(t=o.exec(e))){let e=Number(t[1]);return{quotient:e,remainder:0}}if(null!==(t=l.exec(e))){let e=Number(t[1]),n=Number(t[2]);return{quotient:e,remainder:n,remainderPresent:!0}}})(n),formatAnswer:(e,t,n,r)=>n.remainderPresent?"".concat(n.quotient," rem ").concat(n.remainder):"".concat(n.quotient),getQuestionStatus:(e,t,n)=>t.quotient!==n.quotient||t.remainder!==n.remainder?{status:"wrong",reason:"wrong-answer"}:{status:"correct"}}),f.set("fac",{parseAnswer:(e,t,n)=>(function(e,t){let n;if(e){let n=t.split(",").map(e=>Number(e.trim()));for(let e of n)if(Number.isNaN(e))return;if(n.length<4||n.length%2)return;let r=n[0],u=!!n[1],i=n.slice(2);return{expected:e,targetNumber:r,moreFactors:u,factors:i}}if(null!==(n=c.exec(t))){let t=Number(n[1]),r=Number(n[2]);return{expected:e,targetNumber:0,moreFactors:!1,factors:[t,r]}}})(t,n),formatAnswer:(e,t,n,r)=>(function(e,t){if(!e)return"".concat(t.factors[0]," \xd7 ").concat(t.factors[1]);{let e=[];for(let n=0;n<t.factors.length;n+=2)e.push("".concat(t.factors[n]," \xd7 ").concat(t.factors[n+1]));return e.join(", ")+(t.moreFactors?", &hellip;":"")}})(t,n),getQuestionStatus:(e,t,n)=>n.factors[0]*n.factors[1]!==t.targetNumber?{status:"wrong",reason:"wrong-answer"}:1!==n.factors[0]&&1!=n.factors[1]||t.factors.includes(1)?{status:"correct"}:{status:"wrong",reason:"clumsy"}});let m="Unexpected, or Undefined",d=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"pdf";return"alg-test-".concat(a()().utc().format("YYYYMMDDHHmmss"),".").concat(e)};function p(e,t,n){var r,u;if(!e.length)throw Error("received empty array");let i={testStartTime:new Date().getTime(),startFrom:(r=0,u=e.length,r||(r=0),u||(u=2147483647),Math.floor(Math.random()*(u-r))+r),corrections:[],numOfQuestionsAsked:0,lastTimeSubmitted:0,questions:[],questionIndices:[],currentQuestionsIsLastSubset:!1,totalQuestionCount:e.length};if(n){let t=JSON.parse(n);!t||!t.lastTimeSubmitted||t.startFrom<0||t.startFrom>=e.length||!t.corrections||t.corrections.filter(t=>t<0||t>=e.length).length||t.numOfQuestionsAsked<0||t.numOfQuestionsAsked>=e.length||(i.startFrom=t.startFrom,i.numOfQuestionsAsked=t.numOfQuestionsAsked,i.corrections=t.corrections,i.lastTimeSubmitted=t.lastTimeSubmitted)}if(i.corrections.length)for(let t of i.corrections)i.questions.push(e[t]),i.questionIndices.push(t);else{(!t||t<0)&&(t=10),t=Math.min(e.length-i.numOfQuestionsAsked,t);for(let n=0;n<t;n++){let t=(i.startFrom+i.numOfQuestionsAsked+n)%e.length;i.questions.push(e[t]),i.questionIndices.push(t)}}return i.numOfQuestionsAsked+i.questions.length>=e.length&&(i.currentQuestionsIsLastSubset=!0),i}function g(e,t){let n=0,r=0,u=0,i=e.map((e,i)=>{let s=x(e,t[i]);return"correct"===s.status?n++:"wrong"===s.status?r++:u++,s}),s=n/e.length*100;return{correctAnswersCount:n,percentage:s,counts:[{name:"Correct",value:n},{name:"Wrong",value:r},{name:"Skipped",value:u}].filter(e=>0!==e.value),perQuestionStatus:i,wrongAnswersCount:r,skippedAnswersCount:u}}function h(e,t){let n=e.numOfQuestionsAsked+t,r=Math.floor(100*n/e.totalQuestionCount),u=["Progress: ".concat(r,"% (").concat(n," answered correctly)")];return e.currentQuestionsIsLastSubset&&t===e.questions.length&&u.push("Congrats! You have correctly answered all questions in this test category."),u}function w(e,t,n,r){let u=b(e,t,n);if(!u)return"Parse error with: ".concat(t?e.answer:n);let i=function(e,t,n,r){var u,i;if(n.isNan)return m;if((null===(u=e.numberInputTypes)||void 0===u?void 0:u.length)===1){let u=f.get(e.numberInputTypes[0]);if(u)return u.formatAnswer(e,t,n,r)}let s=(null===(i=e.numberInputTypes)||void 0===i?void 0:i.length)?e.numberInputTypes[0]:void 0;return r?function(e,t){let n=t||e.format,r=e.num;if("dec"===n||1===r.d)return D(e);{let t=r.n,u=r.d;e.actualDenominator&&(t=(u=e.actualDenominator)*r.n/r.d);let i=r.s<0?"-":"";if("mix"===n){let e=t%u,n=(t-e)/u;if(n)return"".concat(i).concat(n," ").concat(e,"/").concat(u)}return"".concat(i).concat(t,"/").concat(u)}}(n,s):function(e,t){let n=t||e.format,r=e.num,u="";if("dec"===n||1===r.d){u=D(e);let t=u.indexOf("(");-1!==t&&(u=u.substring(0,t)+"\\overline{"+u.substring(t+1,u.length-1)+"}")}else{let t=r.n,i=r.d;e.actualDenominator&&(t=(i=e.actualDenominator)*r.n/r.d);let s=r.s<0?"-":"";if("mix"===n){let e=t%i,n=(t-e)/i;n&&(u="".concat(s).concat(n,"\\frac{").concat(e,"}{").concat(i,"}"))}u||(u="".concat(s,"\\frac{").concat(t,"}{").concat(i,"}"))}return"\\("+u+"\\)"}(n,s)}(e,t,u,r);return t&&e.acceptNanAnswer&&!u.isNan&&(i="".concat(m,", or ").concat(i)),i}function b(e,t,n){var r;let i=t?e.answer:n;if(i){let n;if("unexpected".startsWith(i.trim().toLowerCase())||"undefined".startsWith(i.trim().toLowerCase()))return{isNan:!0};if((null===(r=e.numberInputTypes)||void 0===r?void 0:r.length)===1){let n=f.get(e.numberInputTypes[0]);if(n)return n.parseAnswer(e,t,i)}return(n=function(e){let t,n,r;if(e=e.trim(),null!==(r=I.exec(e)))t=new u.Z(r[1]);else if(null!==(r=T.exec(e)))n=r[1].length,t=new u.Z(e);else if(null!==(r=A.exec(e))){let e=r[1],n=r[2],u=r[3];t=O(e,n,u)}else{if(null===(r=E.exec(e)))return;let n=r[1],u=r[2],i=r[3];if(i.length>1){i=u[u.length-1];let e=Math.floor(u.length/2);for(let t=e;t>1;t--){let e=u.substring(u.length-t);if(u.endsWith(e+e)){i=e,u=u.substring(0,u.length-2*t);break}}}else i="";t=O(n,u,i)}let i=t.floor().equals(t.ceil())?"int":"dec";return{format:i,num:t,actualDp:n}}(i))||(n=function(e){let t,n,r,i;if(e=e.trim(),null!==(i=I.exec(e)))t=new u.Z(i[1]),n="int";else if(null!==(i=N.exec(e))){let e=Number(i[1]),s=Number(i[2]);if(!s)return;r=s,t=new u.Z(e,s),n="cfr"}else{if(null===(i=y.exec(e)))return;let s=Number(i[1]),a=Number(i[2]),o=Number(i[3]);if(!o||a>=o)return;r=o,t=new u.Z(s),t=i[1].startsWith("-")?t.sub(new u.Z(a,o)):t.add(new u.Z(a,o)),n="mix"}return{format:n=t.floor().equals(t.ceil())?"int":n,num:t,actualDenominator:r}}(i)),n}}function v(e,t){var n,r;if("mcq"===e.type||""===t)return"";let u=b(e,!1,t);if(!u)return"Please enter a valid input!";if((null===(n=e.numberInputTypes)||void 0===n?void 0:n.length)===1&&f.get(e.numberInputTypes[0]))return"";let i=["cfr","dec","mix"];return((null===(r=e.numberInputTypes)||void 0===r?void 0:r.length)&&(i=e.numberInputTypes),u.isNan||"int"===u.format||i.includes(u.format))?"":"Please enter an answer in ".concat(function(e){if(!e||!e.length||e.includes("cfr")&&e.includes("mix")&&e.includes("dec"))return"expected";if(!(e.includes("cfr")||e.includes("mix")||e.includes("dec")||e.includes("int")))return"unexpected";let t=[];return e.includes("cfr")&&e.includes("mix")?t.push("fraction"):(e.includes("cfr")&&t.push("common fraction"),e.includes("mix")&&t.push("mixed fraction")),e.includes("dec")&&t.push("decimal expansion"),!t.length&&e.includes("int")&&t.push("integer"),t.join(" or ")}(e.numberInputTypes)," format!")}function x(e,t){var n,u,i,s,a,o,l;if(t===r.a)return{status:"skipped",reason:"skipped"};if(""===t.trim())return{status:"skipped",reason:"no-answer"};if("mcq"===e.type)return t===e.answer?{status:"correct"}:{status:"wrong",reason:"wrong-answer"};let c=b(e,!1,t);if(!c)return{status:"wrong",reason:"invalid-format"};if((null===(n=e.numberInputTypes)||void 0===n?void 0:n.length)!==1||!f.get(e.numberInputTypes[0])){let t=["cfr","mix","dec"];if((null===(a=e.numberInputTypes)||void 0===a?void 0:a.length)&&(t=e.numberInputTypes),!c.isNan&&"int"!==c.format&&!t.includes(c.format))return{status:"wrong",reason:"invalid-format"}}if(e.acceptNanAnswer&&c.isNan)return{status:"correct"};let m=b(e,!0,e.answer);if(!m)return{status:"skipped",reason:"error"};if(m.isNan&&c.isNan)return{status:"correct"};if(m.isNan||c.isNan)return{status:"wrong",reason:"wrong-answer"};if((null===(u=e.numberInputTypes)||void 0===u?void 0:u.length)===1){let t=f.get(e.numberInputTypes[0]);if(t)return t.getQuestionStatus(e,m,c)}if(o=m.num,l=c.num,o&&l?!o.equals(l):o!==l)return{status:"wrong",reason:"wrong-answer"};let d=!1;return((null===(i=e.expectedDenominators)||void 0===i?void 0:i.length)&&!e.expectedDenominators.includes(c.actualDenominator||0)&&(d=!0),(null===(s=e.expectedDps)||void 0===s?void 0:s.length)&&!e.expectedDps.includes(c.actualDp||0)&&(d=!0),d)?{status:"wrong",reason:"clumsy"}:{status:"correct"}}let I=new RegExp(/^([+-]?\d+)\.*$/),N=new RegExp(/^([+-]?\d+)\/([+-]?\d+)$/),y=new RegExp(/^([+-]?\d+)\s+(\d+)\/(\d+)$/),T=new RegExp(/^[+-]?\d*\.(\d+)$/),A=new RegExp(/^([+-]?\d*)\.(\d*)\((\d+)\)(\.*)$/),E=new RegExp(/^([+-]?\d*)\.(\d+)(\.*)$/);function O(e,t,n){if(e&&!/^[+-]?\d*$/.test(e))throw Error("wholePart argument is invalid");if(t&&!/^\d+$/.test(t))throw Error("noRepeat argument is invalid");if(n&&!/^\d+$/.test(n))throw Error("repeat argument is invalid");e?"-"===e?e="-0":"+"===e&&(e="0"):e="0",t||(t="");let r=e.startsWith("-")?-1n:1n,i=BigInt(e+t);i=i<0n?-i:i;let s=1n;if(n){let e=BigInt(n);i=i*(s=10n**BigInt(n.length)-1n)+e}t&&(s*=10n**BigInt(t.length));let a=function(e,t){for(e=e<0n?-e:e,t=t<0n?-t:t;t;){let n=e%t;e=t,t=n}return e}(i,s);i=i*r/a,s/=a;let o=new u.Z([Number(i),Number(s)]);return o}let k=/&(?:#(\d{1,9})|#x([0-9a-fA-F]{1,7})|([^#0-9][^&;]+));/g;function q(e){let t;if(!e)return"";let n=[],r=0;for(k.lastIndex=0;null!==(t=k.exec(e));){n.push(e.substring(r,t.index));let u=t[1],s=t[2],a=t[3];if(u){let e=parseInt(u);n.push(String.fromCharCode(e))}else if(s){let e=parseInt(s,16);n.push(String.fromCharCode(e))}else{let e=i.e.find(e=>e[0]===a);if(e){let t=Number(e[1]);n.push(String.fromCharCode(t))}else n.push(t[0])}r=t.index+t[0].length}return n.length?(n.push(e.substring(r)),n.join("")):e}function D(e){let t=function(e,t){t||(t=1),t<0&&(e=-e,t=-t);let n=e<0&&t>0||e>0&&t<0?-1:1;e=Math.abs(e),t=Math.abs(t);let r=[],u=new Map,i=e%t,s=(e-i)/t;for(;i&&!u.has(i);){u.set(i,r.length),i*=10;let e=i%t,n=(i-e)/t;r.push(n),i=e}let a="",o="";r.length&&(i||u.set(0,r.length),a=r.slice(0,u.get(i)).join(""),o=r.slice(u.get(i)).join(""));let l=["".concat(n<0?"-":"").concat(s),a,o];return l}(e.num.s*e.num.n,e.num.d),n=[t[0]];if((t[1]||t[2])&&n.push("."),t[1]&&n.push(t[1]),t[2])n.push("(".concat(t[2],")"));else if(e.actualDp){if(t[1].length){let r=e.actualDp-t[1].length;r>0&&n.push("0".repeat(r))}else n.push("."),n.push("0".repeat(e.actualDp))}return n.join("")}function S(e,t){if("skipped"===e){if("no-answer"===t)return"unanswered";if("error"===t)return"Error in Question"}if("wrong"===e){if("invalid-format"===t)return"Invalid Input";if("clumsy"===t)return"Clumsy Input"}return e}}}]);