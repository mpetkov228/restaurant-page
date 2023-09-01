(()=>{"use strict";var e={890:(e,n,t)=>{t.d(n,{Z:()=>l});var r=t(81),o=t.n(r),a=t(645),s=t.n(a),i=t(667),c=t.n(i),d=new URL(t(201),t.b),p=s()(o()),u=c()(d);p.push([e.id,`* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;\n}\n\nbody {\n    display: flex;\n    min-height: 100vh;\n    flex-direction: column;\n    background-image: url(${u});\n    background-position: center;\n    background-repeat: no-repeat;\n    background-size: cover;\n    background-attachment: fixed;\n}\n\nheader {\n    padding: 0 20px;\n    background: white;\n    box-shadow: 1px 1px 1px gray;\n    position:sticky;\n    top: 0;\n}\n\nul {\n    list-style: none;\n    display: flex;\n    justify-content: center;\n    gap: 20px;\n}\n\nli {\n    font-size: 24px;\n    cursor: pointer;\n    padding: 20px;\n}\n\n.active {\n    background-color: black;\n    color: white;\n}\n\n#content {\n    flex: 1;\n}\n\n.container {\n    background-color: rgba(255, 255, 255, 0.747);\n    max-width: 800px;\n    margin: 60px auto;\n    padding: 20px;\n    border-radius: 5px;\n}\n\n.content-heading {\n    background-color: white;\n    padding: 10px;\n    border-radius: 10px;\n    border: 3px solid black;\n    width: 70%;\n    margin: 0 auto;\n}\n\n.content-info {\n    background-color: white;\n    padding: 15px;\n    border-radius: 10px;\n    border: 3px solid black;\n    width: 70%;\n    margin: 0 auto;\n    margin-top: 50px;\n    text-align: center;\n}\n\nh1 {\n    text-align: center;\n}\n\nimg {\n    width: 50%;\n    display: block;\n    margin: 0 auto;\n}\n\np {\n    margin-top: 15px;\n}\n\n.menu-card {\n    padding: 10px;\n}\n\n.menu-item {\n    border-radius: 5px;\n    margin-top: 15px;\n    margin-bottom: 10px;\n    min-width: 100px;\n    height: 238px;\n    object-fit: cover;\n\n}\n\n.credit-text {\n    font-size: 12px;\n    margin-top: 5px;\n}\n\nfooter {\n    text-align: center;\n    padding: 20px;\n    background: rgba(255, 255, 255, 0.753);\n    border-top: 1px solid gray;\n}`,""]);const l=p},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(r)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<e.length;d++){var p=[].concat(e[d]);r&&s[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},s=[],i=0;i<e.length;i++){var c=e[i],d=r.base?c[0]+r.base:c[0],p=a[d]||0,u="".concat(d," ").concat(p);a[d]=p+1;var l=t(u),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==l)n[l].references++,n[l].updater(h);else{var m=o(h,r);r.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var s=0;s<a.length;s++){var i=t(a[s]);n[i].references--}for(var c=r(e,o),d=0;d<a.length;d++){var p=t(a[d]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}a=c}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},201:(e,n,t)=>{e.exports=t.p+"ba0886d2a70d54a16761.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{function e(e,n){const t=document.createElement(e);return n.content&&(t.textContent=n.content),n.classes&&t.classList.add(...n.classes),n.src&&(t.src=n.src),t}function n(n,t){const r=e("div",{classes:["content-info"]}),o=e("h2",{content:t});r.appendChild(o);for(let t of n){const n=e("p",{content:t});r.appendChild(n)}return r}const r=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],o=[{name:"Cheeseburger",src:t.p+"ee89bfdedf9b599b6039.jpg",imgCredit:'Photo by <a href="https://unsplash.com/@phototastyfood?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Food Photographer</a> on <a href="https://unsplash.com/photos/E94j3rMcxlw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{name:"Double Cheeseburger",src:"../src/assets/burgers/double-cheese.jpg",imgCredit:'Photo by <a href="https://unsplash.com/@amir_v_ali?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">amirali mirhashemian</a> on <a href="https://unsplash.com/photos/sc5sTPMrVfk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{name:"Chicken Burger",src:"../src/assets/burgers/fried-chicken.jpg",imgCredit:'Photo by <a href="https://unsplash.com/@sultan1274?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Sultan Abdulrazzaq</a> on <a href="https://unsplash.com/photos/UDYjeBwFZf8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{name:"Veggie Burger",src:"../src/assets/burgers/veggie.jpg",imgCredit:'Photo by <a href="https://unsplash.com/@swimstaralex?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Alexander Sinn</a> on <a href="https://unsplash.com/photos/aDhU6A0IAbs?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{name:"Club Sandwich",src:"../src/assets/burgers/club-sandwich.jpg",imgCredit:'Photo by <a href="https://unsplash.com/@picoftasty?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Mae Mu</a> on <a href="https://unsplash.com/photos/IZ0LRt1khgM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'}],a=[{name:"French Fries",src:"../src/assets/sides/fries.jpg",imgCredit:'Photo by <a href="https://unsplash.com/@louishansel?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Louis Hansel</a> on <a href="https://unsplash.com/photos/vi0kZuoe0-8?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>'},{name:"Coleslaw",src:"../src/assets/sides/coleslaw.jpg",imgCredit:'Photo by <a href="https://pixabay.com/users/wow_pho-916237/">Wow_Pho</a> on <a href="https://pixabay.com/photos/appetizer-background-bowl-cabbage-1223853/">Pixabay</a>'}];function s(n){const t=e("div",{classes:["menu-card"]}),r=e("img",{src:n.src,classes:["menu-item"]}),o=e("h3",{content:n.name}),a=e("p",{classes:["credit-text"]});return a.innerHTML=n.imgCredit,t.appendChild(r),t.appendChild(o),t.appendChild(a),t}var i=t(379),c=t.n(i),d=t(795),p=t.n(d),u=t(569),l=t.n(u),h=t(565),m=t.n(h),f=t(216),g=t.n(f),b=t(589),y=t.n(b),v=t(890),x={};x.styleTagTransform=y(),x.setAttributes=m(),x.insert=l().bind(null,"head"),x.domAPI=p(),x.insertStyleElement=g(),c()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals;const C=document.getElementById("home"),_=document.getElementById("menu"),w=document.getElementById("contact"),T=document.getElementById("content"),k=document.querySelectorAll("li");function S(){!function(n){n.replaceChildren();const t=e("div",{classes:["container"]}),o=e("h1",{content:"Micky's Burgers",classes:["content-heading"]}),a=e("div",{classes:["content-info"]}),s=e("h2",{content:"Hours"});a.appendChild(s);for(let n of r){let t="8am - 10pm";"Saturday"!=n&&"Sunday"!=n||(t="10am - 10pm");const r=e("p",{content:`${n}: ${t}`});a.appendChild(r)}const i=e("div",{classes:["content-info"]}),c=e("h2",{content:"Location"});i.appendChild(c);const d=e("p",{content:"601 N 7th St, Sacramento, California"});i.appendChild(d),t.appendChild(o),t.appendChild(a),t.appendChild(i),n.appendChild(t)}(T),k.forEach((e=>e.classList.remove("active"))),C.classList.add("active")}C.addEventListener("click",S),_.addEventListener("click",(function(){(function(n){n.replaceChildren();const t=e("div",{classes:["container"]}),r=e("div",{classes:["content-info"]}),i=e("h2",{content:"Burgers"});r.appendChild(i);for(let e of o){const n=s(e);r.appendChild(n)}t.appendChild(r);const c=e("div",{classes:["content-info"]}),d=e("h2",{content:"Sides"});c.appendChild(d);for(let e of a){const n=s(e);c.appendChild(n)}t.appendChild(c),n.appendChild(t)})(T),k.forEach((e=>e.classList.remove("active"))),_.classList.add("active")})),w.addEventListener("click",(function(){(function(t){t.replaceChildren();const r=e("div",{classes:["container"]});r.style.paddingBottom="70px";const o=n(["+262-162-1585","+262-514-3214"],"Phone"),a=n(["mickysburgers@yahoo.com"],"Email");r.appendChild(o),r.appendChild(a),t.appendChild(r)})(T),k.forEach((e=>e.classList.remove("active"))),w.classList.add("active")})),S()})()})();