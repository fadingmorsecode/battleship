(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>f});var r=n(601),o=n.n(r),a=n(314),i=n.n(a),s=n(417),c=n.n(s),l=new URL(n(392),n.b),u=new URL(n(410),n.b),d=i()(o()),p=c()(l),h=c()(u);d.push([e.id,`@font-face {\n  font-family: shipment;\n  src: url(${p});\n}\n\n@font-face {\n  font-family: jersey;\n  src: url(${h});\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  height: 100vh;\n  margin: 0;\n}\n\nheader {\n  background-color: #cdb4db;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  height: 50px;\n}\n\n.header-text {\n  font-family: shipment;\n  font-size: 3rem;\n  color: black;\n  margin: 0;\n  padding: 0;\n}\n\nmain {\n  display: flex;\n  flex-grow: 1;\n  justify-content: center;\n  align-items: center;\n  background-color: whitesmoke;\n}\n\n.board-containers {\n  display: flex;\n  padding: 30px;\n  gap: 2rem;\n  justify-content: center;\n}\n\n.middle-container {\n  max-width: auto;\n  display: flex;\n  gap: 30px;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.middle-container p {\n  font-size: 1.8rem;\n  margin: 0;\n  font-family: jersey, Arial, Helvetica, sans-serif;\n}\n\n.middle-container button:hover {\n  cursor: pointer;\n}\n\n.draggable-ship {\n  display: flex;\n}\n\n.column {\n  flex-direction: column;\n}\n\n.draggable-ship div {\n  border: solid 1px black;\n  background-color: grey;\n  border-radius: 5px;\n  width: 43px;\n  height: 43px;\n}\n\n.draggable-ships-container {\n  min-height: 350px;\n  width: 350px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.middle-container button {\n  width: 120px;\n  width: 8rem;\n  height: 2rem;\n  background-color: #ffc8dd;\n  border-radius: 5px;\n  font-size: 1.3rem;\n  font-family: jersey, Arial, Helvetica, sans-serif;\n}\n\n.dynamic-info-text {\n  width: 150px;\n  text-align: center;\n  font-size: 1.4rem;\n  font-family: jersey, Arial, Helvetica, sans-serif;\n}\n\n.player-board,\n.computer-board {\n  width: 450px;\n  height: 450px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  background-color: #a2d2ff;\n  border: solid 8px gray;\n  border-radius: 5px;\n}\n\n.player-board > div,\n.computer-board > div {\n  border: solid 1px black;\n  border-radius: 5px;\n}\n\n.computer-board > div:hover {\n  transform: scale(1.2);\n  border-color: red;\n}\n\n.board-and-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-player-texts {\n  font-size: 2.5rem;\n  font-family: jersey, Arial, Helvetica, sans-serif;\n  font-weight: bold;\n  margin: 0;\n}\n\n.afloat {\n  background-color: grey;\n}\n\n.hit {\n  background-color: #bb4430;\n}\n\n.miss {\n  background-color: white;\n}\n\n.sunk {\n  background-color: black;\n  color: white;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 2.3rem;\n}\n\nfooter {\n  background-color: #cdb4db;\n  color: black;\n  height: 50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n  font-family: jersey, Arial, Helvetica, sans-serif;\n}\n`,""]);const f=d},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),t.push(u))}},t}},417:e=>{e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]|(%20)/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var a={},i=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var p=n(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)t[p].references++,t[p].updater(h);else{var f=o(h,r);r.byIndex=s,t.splice(s,0,{identifier:d,updater:f,references:1})}i.push(d)}return i}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var s=n(a[i]);t[s].references--}for(var c=r(e,o),l=0;l<a.length;l++){var u=n(a[l]);0===t[u].references&&(t[u].updater(),t.splice(u,1))}a=c}}},659:e=>{var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var a=n.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},410:(e,t,n)=>{e.exports=n.p+"e27466ea70742643a529.ttf"},392:(e,t,n)=>{e.exports=n.p+"ff7945571e7aab717bfa.ttf"}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var e=n(72),t=n.n(e),r=n(825),o=n.n(r),a=n(659),i=n.n(a),s=n(56),c=n.n(s),l=n(540),u=n.n(l),d=n(113),p=n.n(d),h=n(208),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=i().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),t()(h.A,f),h.A&&h.A.locals&&h.A.locals;const m=document.querySelector(".player-board"),g=document.querySelector(".computer-board"),b=["A","B","C","D","E","F","G","H","I","J"];function y(e){for(let t=0;t<10;t+=1)for(let n=1;n<=10;n+=1){const r=document.createElement("div");r.setAttribute("coordinate",`${b[t]}${n}`),r.setAttribute("boardName",e),"player"===e?(r.classList.add("drop-zone"),m.appendChild(r)):g.appendChild(r)}}class v{constructor(e){this.name=e}attack(e,t){return t.receiveAttack(e)}static getRandomValueNotInArr(e,t){let n;do{n=t[Math.floor(Math.random()*t.length)]}while(e.includes(n));return n}computerAttack(e){const{allGuesses:t}=e,n=e.boardArr,r=v.getRandomValueNotInArr(t,n);return{successful:e.receiveAttack(r),coordinate:r}}}function x(e){return new v(e)}const w=["A","B","C","D","E","F","G","H","I","J"];class A{constructor(e){this.name=e,this.boardArr=[],this.placedShips=[],this.missedShots=[],this.hitShots=[],this.allGuesses=[],(()=>{for(let e=0;e<10;e+=1)for(let t=1;t<=10;t+=1)this.boardArr.push(`${w[e]}${t}`)})()}static interveningNums(e,t){return Math.abs(e-t)-1}static getAllCells(e,t){const n=[],r=e[0],o=e[1],a=r.charAt(0),i=parseInt(r.substring(1),10),s=o.charAt(0),c=parseInt(o.substring(1),10);if(a===s&&i!==c&&c<11){const e=A.interveningNums(c,i);if(2+e===t){n.push(r);let t=i;for(let r=0;r<e;r+=1)t+=1,n.push(`${a}${t}`);return n.push(o),n}}else if(a!==s&&i===c){const e=w.indexOf(a),c=w.indexOf(s),l=A.interveningNums(c,e);if(2+l===t){n.push(r);let e=w.indexOf(a);for(let t=0;t<l;t+=1)e+=1,n.push(`${w[e]}${i}`);return n.push(o),n}}return!1}getShips(){const e=[];return this.placedShips.forEach((t=>{const n=t.coordinates,r=A.getAllCells(n,t.length);e.push(r)})),e}isOccupied(e,t){const n=this.getShips();return 0!==n.length&&A.getAllCells(e,t).some((e=>n.flat().includes(e)))}static isLegal(e,t){return!1!==A.getAllCells(e,t)}placeShip(e,t,n){return!1!==A.isLegal(t,e.length)&&!1===this.isOccupied(t,e.length)&&(e.updateCoordinates(t),this.placedShips.push(e),e.addOwner(n),!0)}getShipFromCoordinate(e){let t;return this.placedShips.forEach((n=>{A.getAllCells(n.coordinates,n.length).includes(e)&&(t=n)})),t}receiveAttack(e){return!0===this.getShips().flat().includes(e)?(this.getShipFromCoordinate(e).hit(),this.hitShots.push(e),this.allGuesses.push(e),!0):(this.missedShots.push(e),this.allGuesses.push(e),!1)}allSunk(){const e=this.placedShips,t=[];return e.forEach((e=>{t.push(e.sunk)})),t.every((e=>!0===e))}}function S(e){return new A(e)}class C{constructor(e){this.name=e,this.length=null,this.hits=0,this.sunk=!1,this.coordinates=[],this.owner=null,(()=>{switch(this.name){case"Destroyer":this.length=2;break;case"Submarine":case"Cruiser":this.length=3;break;case"Battleship":this.length=4;break;case"Carrier":this.length=5;break;default:throw Error("no valid name or length present")}})()}getDomCells(){const e=[],t=A.getAllCells(this.coordinates,this.length);let n;return"cpu"===this.owner.name?n=document.querySelectorAll('[boardName="cpu"]'):"player"===this.owner.name&&(n=document.querySelectorAll('[boardName="player"]')),n.forEach((n=>{t.forEach((t=>{n.hasAttribute("coordinate")&&n.getAttribute("coordinate")===t&&e.push(n)}))})),e}toggleSunkClass(){this.getDomCells().forEach((e=>{e.classList.add("sunk"),e.textContent="☠︎︎"}))}isSunk(){this.hits===this.length&&(this.sunk=!0,this.toggleSunkClass())}hit(){this.hits+=1,this.isSunk()}updateCoordinates(e){this.coordinates.push(...e)}addOwner(e){this.owner=e}}const k=Array.from(w),E=[new C("Carrier"),new C("Destroyer"),new C("Battleship"),new C("Submarine"),new C("Cruiser")];function $(e){return Math.floor(Math.random()*e)}const L=[],j=[];function I(e){L.push(e)}function q(e){j.push(e)}let N,T="player",D=0;function M(){return 0===D?"Attack your enemy":"player"===T?"Your turn to attack":"computer"===T?"Enemy is attacking":void 0}function O(){D+=1,T="player"===T?"computer":"player"}function H(e){document.querySelector(".dynamic-info-text").textContent=e}function z(e){N=!1,H("player"===e?"You win!":"You lose!")}function B(e){return!0===e.allSunk()}function G(e){e.classList.add("miss")}function F(e){e.classList.add("hit")}function P(){document.addEventListener("click",(e=>{e.target.hasAttribute("boardname")&&"cpu"===e.target.getAttribute("boardname")&&"player"===T&&!0===N&&async function(e,t){{const t=e.getAttribute("coordinate");if(!j[1].allGuesses.includes(t)){if(!0===L[0].attack(t,j[1])?F(e):G(e),!0===B(j[1]))return void z("player");if(O(),H(M()),await async function(){await new Promise((e=>{setTimeout(e,400)}))}(),"allSunk"===function(){const e=L[1].computerAttack(j[0]),t=function(e){let t;return document.querySelectorAll('[boardName="player"]').forEach((n=>{n.hasAttribute("coordinate")&&n.getAttribute("coordinate")===e&&(t=n)})),t}(e.coordinate);if(!0===e.successful?F(t):!0!==e.successful&&G(t),!0===B(j[0]))return z("computer"),"allSunk"}())return;O(),H(M())}}}(e.target)}))}function R(e){const t=e,{placedShips:n}=t;n.forEach((t=>{A.getAllCells(t.coordinates,t.length).forEach((t=>{const n=function(e,t){return document.querySelector(`[coordinate=${e}][boardName=${t}]`)}(t,e.name);!function(e){e.classList.add("afloat")}(n)}))}))}const U=document.querySelector(".middle-container");function J(){return new Promise((e=>{!function(){const e=document.getElementById("ship-rotate-btn"),t=document.querySelector(".draggable-ship");e.addEventListener("click",(()=>{t.classList.toggle("column")}))}();const t=document.querySelector(".draggable-ship");t.addEventListener("dragstart",(e=>{e.dataTransfer.setData("text/plain",t.id)})),document.querySelectorAll(".drop-zone").forEach((t=>{t.addEventListener("dragover",(e=>{e.preventDefault()})),t.addEventListener("drop",(n=>{n.preventDefault();const r=n.dataTransfer.getData("text/plain"),o=(document.getElementById(r),t.getAttribute("coordinate"));e(o)}))}))}))}function _(e,t){return new Promise((async n=>{!function(e){const t=document.createElement("p");t.textContent="Drag your ships to the board";const n=document.createElement("div");n.classList.add("draggable-ships-container");const r=document.createElement("div");r.classList.add("draggable-ship"),r.setAttribute("draggable",!0),r.setAttribute("id",e.name);for(let t=0;t<e.length;t+=1){const e=document.createElement("div");r.appendChild(e)}const o=document.createElement("button");o.setAttribute("id","ship-rotate-btn"),o.textContent="Rotate",U.appendChild(t),U.appendChild(n),n.appendChild(r),U.appendChild(o)}(t),await async function r(o){o||(o=await J());const a=function(e,t){const n=[],r=["A","B","C","D","E","F","G","H","I","J"],o=document.querySelector(".draggable-ship").classList.contains("column"),a=e.charAt(0),i=parseInt(e.substring(1),10);if(!0!==o){const r=i+t.length-1;return r>10?"invalid":(n.push(`${e}`,`${a}${r}`),n)}const s=r.indexOf(a)+t.length-1;if(s>9)return"invalid";const c=r[s];return n.push(`${e}`,`${c}${i}`),n}(o,t);let i;"invalid"!==a&&(i=await e.placeShip(t,a,e)),i?(function(){for(;U.firstChild;)U.removeChild(U.lastChild)}(),n()):await r(await J())}()}))}async function Y(){const e="player",t=x(e),n=x("cpu");I(t),I(n);const r=S(e),o=S("cpu");var a;q(r),q(o),await async function(e){const t=[new C("Carrier"),new C("Destroyer"),new C("Battleship"),new C("Submarine"),new C("Cruiser")];await _(e,t[0]),R(e),await _(e,t[1]),R(e),await _(e,t[2]),R(e),await _(e,t[3]),R(e),await _(e,t[4]),R(e)}(r),a=o,E.forEach((e=>{!function(e,t){!function n(){const r=e.placeShip(t,function(e){const t=[];let n,r,o,a;if(0===$(2)){const i=$(11);return n=k[i],o=n,r=$(11)+1,a=r+e.length-1,t.push(`${n}${r}`),t.push(`${o}${a}`),t}const i=$(11);n=k[i];const s=i+e.length-1;return o=k[s],r=$(11)+1,a=r,t.push(`${n}${r}`),t.push(`${o}${a}`),t}(t),e);!0!==r&&n()}()}(a,e)})),console.log(a),N=!0,P(),function(){const e=document.querySelector(".middle-container"),t=document.createElement("p");t.classList.add("dynamic-info-text"),e.appendChild(t)}(),H(M())}document.addEventListener("click",(e=>{e.target.matches(".start-game-btn")&&(document.querySelector(".start-game-btn").remove(),Y())})),y("player"),y("cpu"),function(){const e=document.querySelector(".middle-container"),t=document.createElement("button");t.textContent="Start Game",t.classList.add("start-game-btn"),e.appendChild(t)}()})()})();