(function(e){function n(n){for(var r,a,u=n[0],i=n[1],d=n[2],l=0,s=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(c,a)&&c[a]&&s.push(c[a][0]),c[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);b&&b(n);while(s.length)s.shift()();return o.push.apply(o,d||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==c[i]&&(r=!1)}r&&(o.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},c={app:0},o=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0d63f1":"80f23fcc","chunk-2d0e5e97":"8d66fd27","chunk-2d212c30":"511edab2","chunk-2d2304e2":"16d2fa77","chunk-41deba8a":"803f682b","chunk-2d2086b7":"29702790","chunk-2d21de4f":"de6ac3e0","chunk-2d2261a6":"e625fbd0","chunk-b245d8b8":"373a5935"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=c[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=c[e]=[n,r]}));n.push(t[2]=r);var o,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var d=new Error;o=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=c[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),o=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,t[1](d)}c[e]=void 0}};var l=setTimeout((function(){o({type:"timeout",target:i})}),12e4);i.onerror=i.onload=o,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/vue-week6/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var b=d;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d"),t("159b"),t("b64b");var r=t("7a23"),c=t("bc3a"),o=t.n(c),a=t("2106"),u=t.n(a),i=t("9062"),d=t.n(i),l=(t("e40d"),t("7bb1")),b=t("3aa8"),s=t("cbdf"),p=t("9457");function f(e,n){var t=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(t)}t("bfae");const h={};h.render=f;var v=h,m=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),O={class:"container"},j={class:"navbar navbar-expand-lg navbar-light bg-warning"},k={class:"collapse navbar-collapse",id:"navbarText"},g={class:"navbar-nav mr-auto"},y={class:"nav-item active"},w=Object(r["createTextVNode"])("產品列表"),x={class:"nav-item active"},N=Object(r["createTextVNode"])("購物車"),V={class:"nav-item active"},P=Object(r["createTextVNode"])("登入後台");function _(e,n,t,c,o,a){var u=Object(r["resolveComponent"])("router-link"),i=Object(r["resolveComponent"])("router-view");return Object(r["openBlock"])(),Object(r["createBlock"])(r["Fragment"],null,[Object(r["createVNode"])("div",O,[Object(r["createVNode"])("nav",j,[Object(r["createVNode"])("div",k,[Object(r["createVNode"])("ul",g,[Object(r["createVNode"])("li",y,[Object(r["createVNode"])(u,{to:"/products",class:"nav-link"},{default:Object(r["withCtx"])((function(){return[w]})),_:1})]),Object(r["createVNode"])("li",x,[Object(r["createVNode"])(u,{to:"/cart",class:"nav-link"},{default:Object(r["withCtx"])((function(){return[N]})),_:1})]),Object(r["createVNode"])("li",V,[Object(r["createVNode"])(u,{to:"/login",class:"nav-link"},{default:Object(r["withCtx"])((function(){return[P]})),_:1})])])])])]),Object(r["createVNode"])(i)],64)}var T={};T.render=_;var C=T,M=[{path:"/",name:"Home",component:C,children:[{path:"products",component:function(){return Promise.all([t.e("chunk-41deba8a"),t.e("chunk-2d2261a6")]).then(t.bind(null,"e6dc"))}},{path:"product/:id",component:function(){return Promise.all([t.e("chunk-41deba8a"),t.e("chunk-2d21de4f")]).then(t.bind(null,"d2f1"))}},{path:"cart",component:function(){return Promise.all([t.e("chunk-41deba8a"),t.e("chunk-b245d8b8")]).then(t.bind(null,"b789"))}},{path:"login",component:function(){return Promise.all([t.e("chunk-41deba8a"),t.e("chunk-2d2086b7")]).then(t.bind(null,"a55b"))}}]},{path:"/admin",component:function(){return t.e("chunk-2d0d63f1").then(t.bind(null,"7277"))},children:[{path:"products",component:function(){return t.e("chunk-2d212c30").then(t.bind(null,"aa93"))}},{path:"orders",component:function(){return t.e("chunk-2d2304e2").then(t.bind(null,"ec5c"))}}]},{path:"/:pathMatch(.*)*",component:function(){return t.e("chunk-2d0e5e97").then(t.bind(null,"9703"))}}],E=Object(m["a"])({history:Object(m["b"])(),routes:M}),S=E;Object.keys(b["a"]).forEach((function(e){Object(l["e"])(e,b["a"][e])})),Object(l["d"])({generateMessage:Object(s["a"])({zh_TW:p}),validateOnInput:!0}),Object(s["b"])("zh_TW");var B=Object(r["createApp"])(v);B.use(S),B.use(u.a,o.a),B.component("Loading",d.a),B.component("Form",l["c"]),B.component("Field",l["b"]),B.component("ErrorMessage",l["a"]),B.mount("#app")},5780:function(e,n,t){},bfae:function(e,n,t){"use strict";t("5780")}});
//# sourceMappingURL=app.b85015f0.js.map