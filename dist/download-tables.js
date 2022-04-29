(()=>{var ge=(C=>typeof require!="undefined"?require:typeof Proxy!="undefined"?new Proxy(C,{get:(d,k)=>(typeof require!="undefined"?require:d)[k]}):C)(function(C){if(typeof require!="undefined")return require.apply(this,arguments);throw new Error('Dynamic require of "'+C+'" is not supported')});var _e=(C,d)=>()=>(d||C((d={exports:{}}).exports,d),d.exports);var me=_e((oe,ue)=>{(function(C,d){typeof define=="function"&&define.amd?define([],d):typeof ue=="object"&&typeof oe<"u"?ue.exports=d():C.Papa=d()})(oe,function C(){"use strict";var d=typeof self<"u"?self:typeof window<"u"?window:d!==void 0?d:{},k=!d.document&&!!d.postMessage,G=k&&/blob:/i.test((d.location||{}).protocol),J={},B=0,u={parse:function(t,e){var n=(e=e||{}).dynamicTyping||!1;if(m(n)&&(e.dynamicTypingFunction=n,n={}),e.dynamicTyping=n,e.transform=!!m(e.transform)&&e.transform,e.worker&&u.WORKERS_SUPPORTED){var r=function(){if(!u.WORKERS_SUPPORTED)return!1;var c=(T=d.URL||d.webkitURL||null,w=C.toString(),u.BLOB_URL||(u.BLOB_URL=T.createObjectURL(new Blob(["(",w,")();"],{type:"text/javascript"})))),p=new d.Worker(c),T,w;return p.onmessage=ve,p.id=B++,J[p.id]=p}();return r.userStep=e.step,r.userChunk=e.chunk,r.userComplete=e.complete,r.userError=e.error,e.step=m(e.step),e.chunk=m(e.chunk),e.complete=m(e.complete),e.error=m(e.error),delete e.worker,void r.postMessage({input:t,config:e,workerId:r.id})}var s=null;return u.NODE_STREAM_INPUT,typeof t=="string"?s=e.download?new X(e):new Z(e):t.readable===!0&&m(t.read)&&m(t.on)?s=new V(e):(d.File&&t instanceof File||t instanceof Object)&&(s=new $(e)),s.stream(t)},unparse:function(t,e){var n=!1,r=!0,s=",",c=`\r
`,p='"',T=p+p,w=!1,a=null,R=!1;(function(){if(typeof e=="object"){if(typeof e.delimiter!="string"||u.BAD_DELIMITERS.filter(function(i){return e.delimiter.indexOf(i)!==-1}).length||(s=e.delimiter),(typeof e.quotes=="boolean"||typeof e.quotes=="function"||Array.isArray(e.quotes))&&(n=e.quotes),typeof e.skipEmptyLines!="boolean"&&typeof e.skipEmptyLines!="string"||(w=e.skipEmptyLines),typeof e.newline=="string"&&(c=e.newline),typeof e.quoteChar=="string"&&(p=e.quoteChar),typeof e.header=="boolean"&&(r=e.header),Array.isArray(e.columns)){if(e.columns.length===0)throw new Error("Option columns is empty");a=e.columns}e.escapeChar!==void 0&&(T=e.escapeChar+p),(typeof e.escapeFormulae=="boolean"||e.escapeFormulae instanceof RegExp)&&(R=e.escapeFormulae instanceof RegExp?e.escapeFormulae:/^[=+\-@\t\r].*$/)}})();var h=new RegExp(te(p),"g");if(typeof t=="string"&&(t=JSON.parse(t)),Array.isArray(t)){if(!t.length||Array.isArray(t[0]))return U(null,t,w);if(typeof t[0]=="object")return U(a||Object.keys(t[0]),t,w)}else if(typeof t=="object")return typeof t.data=="string"&&(t.data=JSON.parse(t.data)),Array.isArray(t.data)&&(t.fields||(t.fields=t.meta&&t.meta.fields||a),t.fields||(t.fields=Array.isArray(t.data[0])?t.fields:typeof t.data[0]=="object"?Object.keys(t.data[0]):[]),Array.isArray(t.data[0])||typeof t.data[0]=="object"||(t.data=[t.data])),U(t.fields||[],t.data||[],w);throw new Error("Unable to serialize unrecognized input");function U(i,y,A){var b="";typeof i=="string"&&(i=JSON.parse(i)),typeof y=="string"&&(y=JSON.parse(y));var I=Array.isArray(i)&&0<i.length,O=!Array.isArray(y[0]);if(I&&r){for(var x=0;x<i.length;x++)0<x&&(b+=s),b+=D(i[x],x);0<y.length&&(b+=c)}for(var o=0;o<y.length;o++){var _=I?i.length:y[o].length,v=!1,S=I?Object.keys(y[o]).length===0:y[o].length===0;if(A&&!I&&(v=A==="greedy"?y[o].join("").trim()==="":y[o].length===1&&y[o][0].length===0),A==="greedy"&&I){for(var l=[],g=0;g<_;g++){var E=O?i[g]:g;l.push(y[o][E])}v=l.join("").trim()===""}if(!v){for(var f=0;f<_;f++){0<f&&!S&&(b+=s);var K=I&&O?i[f]:f;b+=D(y[o][K],f)}o<y.length-1&&(!A||0<_&&!S)&&(b+=c)}}return b}function D(i,y){if(i==null)return"";if(i.constructor===Date)return JSON.stringify(i).slice(1,25);var A=!1;R&&typeof i=="string"&&R.test(i)&&(i="'"+i,A=!0);var b=i.toString().replace(h,T);return(A=A||n===!0||typeof n=="function"&&n(i,y)||Array.isArray(n)&&n[y]||function(I,O){for(var x=0;x<O.length;x++)if(-1<I.indexOf(O[x]))return!0;return!1}(b,u.BAD_DELIMITERS)||-1<b.indexOf(s)||b.charAt(0)===" "||b.charAt(b.length-1)===" ")?p+b+p:b}}};if(u.RECORD_SEP=String.fromCharCode(30),u.UNIT_SEP=String.fromCharCode(31),u.BYTE_ORDER_MARK="\uFEFF",u.BAD_DELIMITERS=["\r",`
`,'"',u.BYTE_ORDER_MARK],u.WORKERS_SUPPORTED=!k&&!!d.Worker,u.NODE_STREAM_INPUT=1,u.LocalChunkSize=10485760,u.RemoteChunkSize=5242880,u.DefaultDelimiter=",",u.Parser=se,u.ParserHandle=de,u.NetworkStreamer=X,u.FileStreamer=$,u.StringStreamer=Z,u.ReadableStreamStreamer=V,d.jQuery){var Y=d.jQuery;Y.fn.parse=function(t){var e=t.config||{},n=[];return this.each(function(c){if(!(Y(this).prop("tagName").toUpperCase()==="INPUT"&&Y(this).attr("type").toLowerCase()==="file"&&d.FileReader)||!this.files||this.files.length===0)return!0;for(var p=0;p<this.files.length;p++)n.push({file:this.files[p],inputElem:this,instanceConfig:Y.extend({},e)})}),r(),this;function r(){if(n.length!==0){var c,p,T,w,a=n[0];if(m(t.before)){var R=t.before(a.file,a.inputElem);if(typeof R=="object"){if(R.action==="abort")return c="AbortError",p=a.file,T=a.inputElem,w=R.reason,void(m(t.error)&&t.error({name:c},p,T,w));if(R.action==="skip")return void s();typeof R.config=="object"&&(a.instanceConfig=Y.extend(a.instanceConfig,R.config))}else if(R==="skip")return void s()}var h=a.instanceConfig.complete;a.instanceConfig.complete=function(U){m(h)&&h(U,a.file,a.inputElem),s()},u.parse(a.file,a.instanceConfig)}else m(t.complete)&&t.complete()}function s(){n.splice(0,1),r()}}}function z(t){this._handle=null,this._finished=!1,this._completed=!1,this._halted=!1,this._input=null,this._baseIndex=0,this._partialLine="",this._rowCount=0,this._start=0,this._nextChunk=null,this.isFirstChunk=!0,this._completeResults={data:[],errors:[],meta:{}},function(e){var n=ae(e);n.chunkSize=parseInt(n.chunkSize),e.step||e.chunk||(n.chunkSize=null),this._handle=new de(n),(this._handle.streamer=this)._config=n}.call(this,t),this.parseChunk=function(e,n){if(this.isFirstChunk&&m(this._config.beforeFirstChunk)){var r=this._config.beforeFirstChunk(e);r!==void 0&&(e=r)}this.isFirstChunk=!1,this._halted=!1;var s=this._partialLine+e;this._partialLine="";var c=this._handle.parse(s,this._baseIndex,!this._finished);if(!this._handle.paused()&&!this._handle.aborted()){var p=c.meta.cursor;this._finished||(this._partialLine=s.substring(p-this._baseIndex),this._baseIndex=p),c&&c.data&&(this._rowCount+=c.data.length);var T=this._finished||this._config.preview&&this._rowCount>=this._config.preview;if(G)d.postMessage({results:c,workerId:u.WORKER_ID,finished:T});else if(m(this._config.chunk)&&!n){if(this._config.chunk(c,this._handle),this._handle.paused()||this._handle.aborted())return void(this._halted=!0);c=void 0,this._completeResults=void 0}return this._config.step||this._config.chunk||(this._completeResults.data=this._completeResults.data.concat(c.data),this._completeResults.errors=this._completeResults.errors.concat(c.errors),this._completeResults.meta=c.meta),this._completed||!T||!m(this._config.complete)||c&&c.meta.aborted||(this._config.complete(this._completeResults,this._input),this._completed=!0),T||c&&c.meta.paused||this._nextChunk(),c}this._halted=!0},this._sendError=function(e){m(this._config.error)?this._config.error(e):G&&this._config.error&&d.postMessage({workerId:u.WORKER_ID,error:e,finished:!1})}}function X(t){var e;(t=t||{}).chunkSize||(t.chunkSize=u.RemoteChunkSize),z.call(this,t),this._nextChunk=k?function(){this._readChunk(),this._chunkLoaded()}:function(){this._readChunk()},this.stream=function(n){this._input=n,this._nextChunk()},this._readChunk=function(){if(this._finished)this._chunkLoaded();else{if(e=new XMLHttpRequest,this._config.withCredentials&&(e.withCredentials=this._config.withCredentials),k||(e.onload=H(this._chunkLoaded,this),e.onerror=H(this._chunkError,this)),e.open(this._config.downloadRequestBody?"POST":"GET",this._input,!k),this._config.downloadRequestHeaders){var n=this._config.downloadRequestHeaders;for(var r in n)e.setRequestHeader(r,n[r])}if(this._config.chunkSize){var s=this._start+this._config.chunkSize-1;e.setRequestHeader("Range","bytes="+this._start+"-"+s)}try{e.send(this._config.downloadRequestBody)}catch(c){this._chunkError(c.message)}k&&e.status===0&&this._chunkError()}},this._chunkLoaded=function(){e.readyState===4&&(e.status<200||400<=e.status?this._chunkError():(this._start+=this._config.chunkSize?this._config.chunkSize:e.responseText.length,this._finished=!this._config.chunkSize||this._start>=function(n){var r=n.getResponseHeader("Content-Range");return r===null?-1:parseInt(r.substring(r.lastIndexOf("/")+1))}(e),this.parseChunk(e.responseText)))},this._chunkError=function(n){var r=e.statusText||n;this._sendError(new Error(r))}}function $(t){var e,n;(t=t||{}).chunkSize||(t.chunkSize=u.LocalChunkSize),z.call(this,t);var r=typeof FileReader<"u";this.stream=function(s){this._input=s,n=s.slice||s.webkitSlice||s.mozSlice,r?((e=new FileReader).onload=H(this._chunkLoaded,this),e.onerror=H(this._chunkError,this)):e=new FileReaderSync,this._nextChunk()},this._nextChunk=function(){this._finished||this._config.preview&&!(this._rowCount<this._config.preview)||this._readChunk()},this._readChunk=function(){var s=this._input;if(this._config.chunkSize){var c=Math.min(this._start+this._config.chunkSize,this._input.size);s=n.call(s,this._start,c)}var p=e.readAsText(s,this._config.encoding);r||this._chunkLoaded({target:{result:p}})},this._chunkLoaded=function(s){this._start+=this._config.chunkSize,this._finished=!this._config.chunkSize||this._start>=this._input.size,this.parseChunk(s.target.result)},this._chunkError=function(){this._sendError(e.error)}}function Z(t){var e;z.call(this,t=t||{}),this.stream=function(n){return e=n,this._nextChunk()},this._nextChunk=function(){if(!this._finished){var n,r=this._config.chunkSize;return r?(n=e.substring(0,r),e=e.substring(r)):(n=e,e=""),this._finished=!e,this.parseChunk(n)}}}function V(t){z.call(this,t=t||{});var e=[],n=!0,r=!1;this.pause=function(){z.prototype.pause.apply(this,arguments),this._input.pause()},this.resume=function(){z.prototype.resume.apply(this,arguments),this._input.resume()},this.stream=function(s){this._input=s,this._input.on("data",this._streamData),this._input.on("end",this._streamEnd),this._input.on("error",this._streamError)},this._checkIsFinished=function(){r&&e.length===1&&(this._finished=!0)},this._nextChunk=function(){this._checkIsFinished(),e.length?this.parseChunk(e.shift()):n=!0},this._streamData=H(function(s){try{e.push(typeof s=="string"?s:s.toString(this._config.encoding)),n&&(n=!1,this._checkIsFinished(),this.parseChunk(e.shift()))}catch(c){this._streamError(c)}},this),this._streamError=H(function(s){this._streamCleanUp(),this._sendError(s)},this),this._streamEnd=H(function(){this._streamCleanUp(),r=!0,this._streamData("")},this),this._streamCleanUp=H(function(){this._input.removeListener("data",this._streamData),this._input.removeListener("end",this._streamEnd),this._input.removeListener("error",this._streamError)},this)}function de(t){var e,n,r,s=Math.pow(2,53),c=-s,p=/^\s*-?(\d+\.?|\.\d+|\d+\.\d+)([eE][-+]?\d+)?\s*$/,T=/^(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))$/,w=this,a=0,R=0,h=!1,U=!1,D=[],i={data:[],errors:[],meta:{}};if(m(t.step)){var y=t.step;t.step=function(o){if(i=o,I())b();else{if(b(),i.data.length===0)return;a+=o.data.length,t.preview&&a>t.preview?n.abort():(i.data=i.data[0],y(i,w))}}}function A(o){return t.skipEmptyLines==="greedy"?o.join("").trim()==="":o.length===1&&o[0].length===0}function b(){return i&&r&&(x("Delimiter","UndetectableDelimiter","Unable to auto-detect delimiting character; defaulted to '"+u.DefaultDelimiter+"'"),r=!1),t.skipEmptyLines&&(i.data=i.data.filter(function(o){return!A(o)})),I()&&function(){if(!i)return;function o(v,S){m(t.transformHeader)&&(v=t.transformHeader(v,S)),D.push(v)}if(Array.isArray(i.data[0])){for(var _=0;I()&&_<i.data.length;_++)i.data[_].forEach(o);i.data.splice(0,1)}else i.data.forEach(o)}(),function(){if(!i||!t.header&&!t.dynamicTyping&&!t.transform)return i;function o(v,S){var l,g=t.header?{}:[];for(l=0;l<v.length;l++){var E=l,f=v[l];t.header&&(E=l>=D.length?"__parsed_extra":D[l]),t.transform&&(f=t.transform(f,E)),f=O(E,f),E==="__parsed_extra"?(g[E]=g[E]||[],g[E].push(f)):g[E]=f}return t.header&&(l>D.length?x("FieldMismatch","TooManyFields","Too many fields: expected "+D.length+" fields but parsed "+l,R+S):l<D.length&&x("FieldMismatch","TooFewFields","Too few fields: expected "+D.length+" fields but parsed "+l,R+S)),g}var _=1;return!i.data.length||Array.isArray(i.data[0])?(i.data=i.data.map(o),_=i.data.length):i.data=o(i.data,0),t.header&&i.meta&&(i.meta.fields=D),R+=_,i}()}function I(){return t.header&&D.length===0}function O(o,_){return v=o,t.dynamicTypingFunction&&t.dynamicTyping[v]===void 0&&(t.dynamicTyping[v]=t.dynamicTypingFunction(v)),(t.dynamicTyping[v]||t.dynamicTyping)===!0?_==="true"||_==="TRUE"||_!=="false"&&_!=="FALSE"&&(function(S){if(p.test(S)){var l=parseFloat(S);if(c<l&&l<s)return!0}return!1}(_)?parseFloat(_):T.test(_)?new Date(_):_===""?null:_):_;var v}function x(o,_,v,S){var l={type:o,code:_,message:v};S!==void 0&&(l.row=S),i.errors.push(l)}this.parse=function(o,_,v){var S=t.quoteChar||'"';if(t.newline||(t.newline=function(E,f){E=E.substring(0,1048576);var K=new RegExp(te(f)+"([^]*?)"+te(f),"gm"),q=(E=E.replace(K,"")).split("\r"),M=E.split(`
`),W=1<M.length&&M[0].length<q[0].length;if(q.length===1||W)return`
`;for(var N=0,j=0;j<q.length;j++)q[j][0]===`
`&&N++;return N>=q.length/2?`\r
`:"\r"}(o,S)),r=!1,t.delimiter)m(t.delimiter)&&(t.delimiter=t.delimiter(o),i.meta.delimiter=t.delimiter);else{var l=function(E,f,K,q,M){var W,N,j,L;M=M||[",","	","|",";",u.RECORD_SEP,u.UNIT_SEP];for(var Q=0;Q<M.length;Q++){var F=M[Q],ee=0,P=0,pe=0;j=void 0;for(var ne=new se({comments:q,delimiter:F,newline:f,preview:10}).parse(E),re=0;re<ne.data.length;re++)if(K&&A(ne.data[re]))pe++;else{var ie=ne.data[re].length;P+=ie,j!==void 0?0<ie&&(ee+=Math.abs(ie-j),j=ie):j=ie}0<ne.data.length&&(P/=ne.data.length-pe),(N===void 0||ee<=N)&&(L===void 0||L<P)&&1.99<P&&(N=ee,W=F,L=P)}return{successful:!!(t.delimiter=W),bestDelimiter:W}}(o,t.newline,t.skipEmptyLines,t.comments,t.delimitersToGuess);l.successful?t.delimiter=l.bestDelimiter:(r=!0,t.delimiter=u.DefaultDelimiter),i.meta.delimiter=t.delimiter}var g=ae(t);return t.preview&&t.header&&g.preview++,e=o,n=new se(g),i=n.parse(e,_,v),b(),h?{meta:{paused:!0}}:i||{meta:{paused:!1}}},this.paused=function(){return h},this.pause=function(){h=!0,n.abort(),e=m(t.chunk)?"":e.substring(n.getCharIndex())},this.resume=function(){w.streamer._halted?(h=!1,w.streamer.parseChunk(e,!0)):setTimeout(w.resume,3)},this.aborted=function(){return U},this.abort=function(){U=!0,n.abort(),i.meta.aborted=!0,m(t.complete)&&t.complete(i),e=""}}function te(t){return t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function se(t){var e,n=(t=t||{}).delimiter,r=t.newline,s=t.comments,c=t.step,p=t.preview,T=t.fastMode,w=e=t.quoteChar===void 0||t.quoteChar===null?'"':t.quoteChar;if(t.escapeChar!==void 0&&(w=t.escapeChar),(typeof n!="string"||-1<u.BAD_DELIMITERS.indexOf(n))&&(n=","),s===n)throw new Error("Comment character same as delimiter");s===!0?s="#":(typeof s!="string"||-1<u.BAD_DELIMITERS.indexOf(s))&&(s=!1),r!==`
`&&r!=="\r"&&r!==`\r
`&&(r=`
`);var a=0,R=!1;this.parse=function(h,U,D){if(typeof h!="string")throw new Error("Input must be a string");var i=h.length,y=n.length,A=r.length,b=s.length,I=m(c),O=[],x=[],o=[],_=a=0;if(!h)return L();if(T||T!==!1&&h.indexOf(e)===-1){for(var v=h.split(r),S=0;S<v.length;S++){if(o=v[S],a+=o.length,S!==v.length-1)a+=r.length;else if(D)return L();if(!s||o.substring(0,b)!==s){if(I){if(O=[],M(o.split(n)),Q(),R)return L()}else M(o.split(n));if(p&&p<=S)return O=O.slice(0,p),L(!0)}}return L()}for(var l=h.indexOf(n,a),g=h.indexOf(r,a),E=new RegExp(te(w)+te(e),"g"),f=h.indexOf(e,a);;)if(h[a]!==e)if(s&&o.length===0&&h.substring(a,a+b)===s){if(g===-1)return L();a=g+A,g=h.indexOf(r,a),l=h.indexOf(n,a)}else if(l!==-1&&(l<g||g===-1))o.push(h.substring(a,l)),a=l+y,l=h.indexOf(n,a);else{if(g===-1)break;if(o.push(h.substring(a,g)),j(g+A),I&&(Q(),R))return L();if(p&&O.length>=p)return L(!0)}else for(f=a,a++;;){if((f=h.indexOf(e,f+1))===-1)return D||x.push({type:"Quotes",code:"MissingQuotes",message:"Quoted field unterminated",row:O.length,index:a}),N();if(f===i-1)return N(h.substring(a,f).replace(E,e));if(e!==w||h[f+1]!==w){if(e===w||f===0||h[f-1]!==w){l!==-1&&l<f+1&&(l=h.indexOf(n,f+1)),g!==-1&&g<f+1&&(g=h.indexOf(r,f+1));var K=W(g===-1?l:Math.min(l,g));if(h.substr(f+1+K,y)===n){o.push(h.substring(a,f).replace(E,e)),h[a=f+1+K+y]!==e&&(f=h.indexOf(e,a)),l=h.indexOf(n,a),g=h.indexOf(r,a);break}var q=W(g);if(h.substring(f+1+q,f+1+q+A)===r){if(o.push(h.substring(a,f).replace(E,e)),j(f+1+q+A),l=h.indexOf(n,a),f=h.indexOf(e,a),I&&(Q(),R))return L();if(p&&O.length>=p)return L(!0);break}x.push({type:"Quotes",code:"InvalidQuotes",message:"Trailing quote on quoted field is malformed",row:O.length,index:a}),f++}}else f++}return N();function M(F){O.push(F),_=a}function W(F){var ee=0;if(F!==-1){var P=h.substring(f+1,F);P&&P.trim()===""&&(ee=P.length)}return ee}function N(F){return D||(F===void 0&&(F=h.substring(a)),o.push(F),a=i,M(o),I&&Q()),L()}function j(F){a=F,M(o),o=[],g=h.indexOf(r,a)}function L(F){return{data:O,errors:x,meta:{delimiter:n,linebreak:r,aborted:R,truncated:!!F,cursor:_+(U||0)}}}function Q(){c(L()),O=[],x=[]}},this.abort=function(){R=!0},this.getCharIndex=function(){return a}}function ve(t){var e=t.data,n=J[e.workerId],r=!1;if(e.error)n.userError(e.error,e.file);else if(e.results&&e.results.data){var s={abort:function(){r=!0,ce(e.workerId,{data:[],errors:[],meta:{aborted:!0}})},pause:le,resume:le};if(m(n.userStep)){for(var c=0;c<e.results.data.length&&(n.userStep({data:e.results.data[c],errors:e.results.errors,meta:e.results.meta},s),!r);c++);delete e.results}else m(n.userChunk)&&(n.userChunk(e.results,s,e.file),delete e.results)}e.finished&&!r&&ce(e.workerId,e.results)}function ce(t,e){var n=J[t];m(n.userComplete)&&n.userComplete(e),n.terminate(),delete J[t]}function le(){throw new Error("Not implemented.")}function ae(t){if(typeof t!="object"||t===null)return t;var e=Array.isArray(t)?[]:{};for(var n in t)e[n]=ae(t[n]);return e}function H(t,e){return function(){t.apply(e,arguments)}}function m(t){return typeof t=="function"}return G&&(d.onmessage=function(t){var e=t.data;if(u.WORKER_ID===void 0&&e&&(u.WORKER_ID=e.workerId),typeof e.input=="string")d.postMessage({workerId:u.WORKER_ID,results:u.parse(e.input,e.config),finished:!0});else if(d.File&&e.input instanceof File||e.input instanceof Object){var n=u.parse(e.input,e.config);n&&d.postMessage({workerId:u.WORKER_ID,results:n,finished:!0})}}),(X.prototype=Object.create(z.prototype)).constructor=X,($.prototype=Object.create(z.prototype)).constructor=$,(Z.prototype=Object.create(Z.prototype)).constructor=Z,(V.prototype=Object.create(z.prototype)).constructor=V,u})});var Se=_e((xe,he)=>{var ke=me(),we=fe("fs"),be=fe("path"),Ee=fe("jsdom");function fe(C){try{return ge(C)}catch{return null}}function Ce(C,d){let k=C.toString();for(;k.length<d;)k="0"+k;return k}function Re(C,d){if(typeof window<"u"){let k=document.createElement("a");k.href="data:text/plain;charset=utf-8,"+encodeURIComponent(C),k.download=d,k.dispatchEvent(new MouseEvent("click"))}else{let k=process.cwd();we.writeFileSync(be.join(k,d),C,"utf8")}}function ye(C,d){d=d||"";let k=(()=>{if(!C)return document;try{let B=document.implementation.createDocumentType("html","",""),u=document.implementation.createDocument("","html",B);return u.documentElement.innerHTML=C,u}catch{}try{return new Ee.JSDOM(C).window.document}catch{}return null})();if(!k)throw new Error("In Node (but not necessarily in the browser), an HTML string must be passed into the `downloadTables` function!");let G=Array.from(k.getElementsByTagName("table")),J=[];return G.forEach((B,u)=>{let z=Array.from(B.getElementsByTagName("tr")).map(Z=>Array.from(Z.children).map(V=>V.textContent)),X={quotes:!0,quoteChar:'"',escapeChar:'"',delimiter:",",header:!0,newline:`\r
`,skipEmptyLines:!1,columns:null},$=d+"table-"+Ce(u,G.length.toString().length)+".csv";Re(ke.unparse(z,X),$),J.push($)}),J}typeof he<"u"&&(he.exports=ye);typeof window<"u"&&(window.downloadTables=ye)});Se();})();
/* @license
Papa Parse
v5.3.2
https://github.com/mholt/PapaParse
License: MIT
*/
