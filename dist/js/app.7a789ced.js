(function(){"use strict";var e={7189:function(e,t,n){var r=n(9963),o=(n(7658),n(6252)),a=n(2262),l=n(3577);const i={class:"backbone"},s={class:"backbone__content"};var u={__name:"WordInformation",props:{word:String,definition:Array},setup(e){const t=e,n=(0,o.Fl)((()=>{let e=[];return t.definition.forEach((t=>{e.push({speechPart:t.partOfSpeech,definition:t.definitions[0].definition})})),e}));return(e,r)=>((0,o.wg)(),(0,o.iD)("div",i,[(0,o._)("ul",s,[(0,o._)("button",{class:"backbone__close",onClick:r[0]||(r[0]=t=>e.$emit("togglePopup"))}," X "),(0,o._)("h2",null,(0,l.zw)((0,a.SU)(t).word),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,a.SU)(n),(e=>((0,o.wg)(),(0,o.iD)("li",{key:e.speechPart},[(0,o._)("h3",null,(0,l.zw)(e.speechPart),1),(0,o._)("p",null,(0,l.zw)(e.definition),1)])))),128))])]))}},c=n(3744);const d=(0,c.Z)(u,[["__scopeId","data-v-280b0614"]]);var v=d,p=n(6154);async function f(e){console.log(e);let t="https://api.dictionaryapi.dev/api/v2/entries/en/"+e,n=(0,a.iH)(null),r=(0,a.iH)(""),o=(0,a.iH)(!0);try{const e=await p.Z.get(t);n.value=e.data}catch(l){r.value=l.message,console.log(l)}finally{o.value=!1}return{data:n,errorMessage:r,isLoading:o}}const w=(0,o._)("label",{for:"providingText"}," Filter words: ",-1),_=(0,o._)("br",null,null,-1),g={key:0},h={class:"words"},b=["onClick"],m={class:"words__number"};var y={__name:"OutputWords",props:{words:Array},setup(e){const t=e,n=(0,a.iH)(!1);let i=(0,a.iH)("");const s=(0,a.iH)(""),u=(0,a.iH)(null),c=(0,a.iH)(!1);(0,o.YP)(i,(async()=>{if(""!=i.value){const{data:e,errorMessage:t}=await f(i.value);t.value?c.value=!0:(c.value=!1,console.log(e.value[0].word,e.value[0].meanings),s.value=e.value[0].word,u.value=e.value[0].meanings,d())}i.value=""}));const d=()=>{n.value=!n.value},p=(0,a.iH)(""),y=(e,t)=>t.count-e.count,k=e=>e.filter((e=>e.name.toLowerCase().includes(p.value.toLowerCase())));let x=(0,o.Fl)((()=>{let e=t.words.sort(y);return k(e)}));return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[w,_,(0,o.wy)((0,o._)("input",{type:"text","onUpdate:modelValue":t[0]||(t[0]=e=>p.value=e),class:"providingText",id:"providingText",name:"providingText"},null,512),[[r.nr,p.value]]),c.value?((0,o.wg)(),(0,o.iD)("div",g," couldnt find your word :( try another one ")):(0,o.kq)("",!0),(0,o._)("ul",h,[(0,o._)("li",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)((0,a.SU)(x),(e=>((0,o.wg)(),(0,o.iD)("button",{class:"words__item",onClick:t=>(0,a.dq)(i)?i.value=e.name:i=e.name,key:e},[(0,o._)("span",m,(0,l.zw)(e.count),1),(0,o.Uk)(" "+(0,l.zw)(e.name),1)],8,b)))),128))])]),n.value?((0,o.wg)(),(0,o.j4)(v,{key:1,onTogglePopup:d,word:s.value,definition:u.value},null,8,["word","definition"])):(0,o.kq)("",!0)],64))}};const k=y;var x=k;const H=e=>((0,o.dD)("data-v-17a5a746"),e=e(),(0,o.Cn)(),e),O={class:"behind"},C=H((()=>(0,o._)("div",{class:"spinner"},null,-1))),S=H((()=>(0,o._)("h3",null,"Preparing data, This may take a while",-1))),D=[C,S];function P(e,t){return(0,o.wg)(),(0,o.iD)("div",O,D)}const T={},j=(0,c.Z)(T,[["render",P],["__scopeId","data-v-17a5a746"]]);var U=j;const q=(0,o._)("header",{class:"header"},[(0,o._)("h1",{class:"appname"}," Word Splitter "),(0,o._)("p",{class:"subtitle"},"Extract and count words used in the text the easy way !")],-1),z=(0,o._)("label",{class:"text-provider__label",for:"text-to-edit"},"Enter your text here:",-1),L=(0,o._)("button",{class:"text-provider__bttn"},"Split & count",-1);var W={__name:"App",setup(e){const t=e=>new Promise((t=>setTimeout(t,e))),n=(0,a.iH)(null);let l=(0,a.iH)([]);const i=(0,a.iH)(!1),s=e=>e.replace(/\W/g," ").replace(/\s\s+/g," ").trim(),u=e=>s(e).split(" "),c=e=>{for(let t=0;t<e.length;t++){let n=l.value.find((n=>n.name.toLowerCase()===e[t].toLowerCase()));n?n.count++:l.value.push({name:e[t],count:1})}i.value=!1},d=async e=>{i.value=!0,await t(10),v(e)},v=e=>{console.log(i.value),l.value.splice(0);let t=u(e);c(t)},p=()=>{l.value.splice(0)};return(e,t)=>((0,o.wg)(),(0,o.iD)(o.HY,null,[q,(0,a.SU)(i)?((0,o.wg)(),(0,o.j4)(U,{key:0})):(0,o.kq)("",!0),(0,o._)("form",{class:"text-provider",name:"text-provider",onSubmit:t[0]||(t[0]=(0,r.iM)((e=>d((0,a.SU)(n).value)),["prevent"]))},[z,(0,o._)("textarea",{spellcheck:"false",ref_key:"area",ref:n,required:"",class:"text-provider__area",name:"text-to-edit",id:"text-to-edit"},null,512),(0,o._)("div",{class:"bttn-wrapper"},[L,(0,o._)("button",{type:"reset",class:"text-provider__bttn",onClick:p},"Reset")])],32),(0,o.Wm)(x,{words:(0,a.SU)(l)},null,8,["words"])],64))}};const Y=W;var E=Y;(0,r.ri)(E).mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var l=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var i=!0,s=0;s<r.length;s++)(!1&a||l>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[s])}))?r.splice(s--,1):(i=!1,a<l&&(l=a));if(i){e.splice(c--,1);var u=o();void 0!==u&&(t=u)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={143:0};n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,l=r[0],i=r[1],s=r[2],u=0;if(l.some((function(t){return 0!==e[t]}))){for(o in i)n.o(i,o)&&(n.m[o]=i[o]);if(s)var c=s(n)}for(t&&t(r);u<l.length;u++)a=l[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkword_splitter"]=self["webpackChunkword_splitter"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(7189)}));r=n.O(r)})();
//# sourceMappingURL=app.7a789ced.js.map