(()=>{"use strict";var e={208:(e,n,t)=>{t.d(n,{A:()=>p});var r=t(601),o=t.n(r),i=t(314),a=t.n(i),s=t(417),c=t.n(s),l=new URL(t(392),t.b),u=a()(o()),d=c()(l);u.push([e.id,`@font-face {\n  font-family: shipment;\n  src: url(${d});\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  width: 100vw;\n  margin: 0;\n}\n\nheader {\n  background-color: black;\n  background-size: cover;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  max-height: 60px;\n}\n\n.header-text {\n  font-family: shipment;\n  font-size: 5rem;\n  color: #bb4430;\n}\n\nmain {\n  display: flex;\n  flex-direction: column;\n  background-color: #efe6dd;\n}\n\n.board-containers {\n  display: flex;\n  padding: 30px;\n  gap: 10rem;\n  justify-content: center;\n}\n\n.player-board-container,\n.computer-board-container {\n  width: 500px;\n  height: 500px;\n  display: flex;\n  flex-direction: column;\n}\n\n.player-board-top,\n.computer-board-top {\n  display: flex;\n  height: 50px;\n  width: 500px;\n}\n\n.empty-div {\n  height: 50px;\n  width: 50px;\n}\n\n.player-board-number-container,\n.computer-board-number-container {\n  display: flex;\n  align-items: center;\n  height: 50px;\n  width: 450px;\n}\n\n.player-board-bot,\n.computer-board-bot {\n  display: flex;\n  height: 450px;\n  width: 500px;\n}\n\n.player-board-letter-container,\n.computer-board-letter-container {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  height: 450x;\n  width: 50px;\n}\n\n.player-board-letter-container > div,\n.player-board-number-container > div,\n.computer-board-letter-container > div,\n.computer-board-number-container > div {\n  font-size: 1.2rem;\n  font-weight: bold;\n  width: 45px;\n  height: 45px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.player-board,\n.computer-board {\n  width: 450px;\n  height: 450px;\n  display: grid;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  border: solid 1px black;\n  background-color: lightcyan;\n}\n\n.player-board > div,\n.computer-board > div {\n  border: solid 1px black;\n}\n\n.board-and-text {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.main-player-texts {\n  font-size: 1.5rem;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: bold;\n}\n\n.afloat {\n  background-color: green;\n}\n\n.hit {\n  background-color: #bb4430;\n}\n\n.miss {\n  background-color: grey;\n}\n\n.sunk {\n  background-color: lightcoral;\n}\n\nfooter {\n  background-color: black;\n  color: white;\n  min-height: 65px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1.2rem;\n}\n`,""]);const p=u},314:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(a[c]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&a[u[0]]||(void 0!==i&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=i),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},417:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var c=e[s],l=r.base?c[0]+r.base:c[0],u=i[l]||0,d="".concat(l," ").concat(u);i[l]=u+1;var p=t(d),h={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==p)n[p].references++,n[p].updater(h);else{var f=o(h,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var c=r(e,o),l=0;l<i.length;l++){var u=t(i[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}i=c}}},659:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},540:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},56:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},113:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},392:(e,n,t)=>{e.exports=t.p+"ff7945571e7aab717bfa.ttf"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&(!e||!/^http(s?):/.test(e));)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(72),n=t.n(e),r=t(825),o=t.n(r),i=t(659),a=t.n(i),s=t(56),c=t.n(s),l=t(540),u=t.n(l),d=t(113),p=t.n(d),h=t(208),f={};f.styleTagTransform=p(),f.setAttributes=c(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=u(),n()(h.A,f),h.A&&h.A.locals&&h.A.locals;const m=document.querySelector(".player-board"),g=document.querySelector(".computer-board"),b=["A","B","C","D","E","F","G","H","I","J"];function y(e){for(let n=0;n<10;n+=1)for(let t=1;t<=10;t+=1){const r=document.createElement("div");r.setAttribute("coordinate",`${b[n]}${t}`),r.setAttribute("boardName",e),"player"===e?m.appendChild(r):g.appendChild(r)}}class v{constructor(e){this.name=e}attack(e,n){n.receiveAttack(e)}static getRandomValueNotInArr(e,n){let t;do{t=n[Math.floor(Math.random()*n.length)]}while(e.includes(t));return t}computerAttack(e){const{allGuesses:n}=e,t=e.boardArr,r=v.getRandomValueNotInArr(n,t);e.receiveAttack(r)}}function x(e){return new v(e)}const w=["A","B","C","D","E","F","G","H","I","J"];class A{constructor(e){this.name=e,this.boardArr=[],this.placedShips=[],this.missedShots=[],this.hitShots=[],this.allGuesses=[],(()=>{for(let e=0;e<10;e+=1)for(let n=1;n<=10;n+=1)this.boardArr.push(`${w[e]}${n}`)})()}static interveningNums(e,n){return Math.abs(e-n)-1}static getAllCells(e,n){const t=[],r=e[0],o=e[1],i=r.charAt(0),a=parseInt(r.substring(1),10),s=o.charAt(0),c=parseInt(o.substring(1),10);if(i===s&&a!==c){const e=A.interveningNums(c,a);if(2+e===n){t.push(r);let n=a;for(let r=0;r<e;r+=1)n+=1,t.push(`${i}${n}`);return t.push(o),t}}else if(i!==s&&a===c){const e=w.indexOf(i),c=w.indexOf(s),l=A.interveningNums(c,e);if(2+l===n){t.push(r);let e=w.indexOf(i);for(let n=0;n<l;n+=1)e+=1,t.push(`${w[e]}${a}`);return t.push(o),t}}return!1}getShips(){const e=[];return this.placedShips.forEach((n=>{const t=n.coordinates,r=A.getAllCells(t,n.length);e.push(r)})),e}isOccupied(e,n){const t=this.getShips();return 0!==t.length&&A.getAllCells(e,n).some((e=>t.flat().includes(e)))}static isLegal(e,n){return!1!==A.getAllCells(e,n)}placeShip(e,n){!1!==A.isLegal(n,e.length)&&!1===this.isOccupied(n,e.length)&&(e.updateCoordinates(n),this.placedShips.push(e))}getShipFromCoordinate(e){let n;return this.placedShips.forEach((t=>{A.getAllCells(t.coordinates,t.length).includes(e)&&(n=t)})),n}receiveAttack(e){return!0===this.getShips().flat().includes(e)?(this.getShipFromCoordinate(e).hit(),this.hitShots.push(e),this.allGuesses.push(e),!0):(this.missedShots.push(e),this.allGuesses.push(e),!1)}allSunk(){const e=this.placedShips,n=[];return e.forEach((e=>{n.push(e.sunk)})),n.every((e=>!0===e))}}function S(e){return new A(e)}class k{constructor(e){this.name=e,this.length=null,this.hits=0,this.sunk=!1,this.coordinates=[],(()=>{switch(this.name){case"Destroyer":this.length=2;break;case"Submarine":case"Cruiser":this.length=3;break;case"Battleship":this.length=4;break;case"Carrier":this.length=5;break;default:throw Error("no valid name or length present")}})()}isSunk(){this.hits===this.length&&(this.sunk=!0)}hit(){this.hits+=1,this.isSunk()}updateCoordinates(e){this.coordinates.push(...e)}}const C=[["A5","E5"],["C2","D2"],["G1","G4"],["G6","I6"],["E8","E10"]],E=[["F8","J8"],["H2","I2"],["B7","B10"],["F3","F5"],["H5","J5"]];function $(e,n){const t=[new k("Carrier"),new k("Destroyer"),new k("Battleship"),new k("Submarine"),new k("Cruiser")];if("player"===e.name)for(let n=0;n<t.length;n+=1)e.placeShip(t[n],C[n]);else if("cpu"===e.name)for(let n=0;n<t.length;n+=1)e.placeShip(t[n],E[n])}const I=[],N=[];function j(e){const n=e.name,t=e,{placedShips:r}=t;r.forEach((e=>{A.getAllCells(e.coordinates,e.length).forEach((t=>{!function(e,n,t){document.querySelector(`[coordinate=${e}][boardName=${n}]`);const r={};r.cell=e,r.boardName=n,r.ship=t,"player"===n?I.push(r):N.push(r)}(t,n,e)}))}))}const M=[],T=[];function F(e){M.push(e)}function G(e){T.push(e)}y("player"),y("cpu"),function(){const e="player",n=x(e),t=x("cpu");F(n),F(t);const r=S(e),o=S("cpu");G(r),G(o),$(r),$(o),j(r),j(o),function(e){const n=e,{placedShips:t}=n;t.forEach((n=>{A.getAllCells(n.coordinates,n.length).forEach((n=>{const t=function(e,n){return document.querySelector(`[coordinate=${e}][boardName=${n}]`)}(n,e.name);!function(e){e.classList.add("afloat")}(t)}))}))}(r),document.addEventListener("click",(e=>{e.target.hasAttribute("boardname")&&"cpu"===e.target.getAttribute("boardname")&&function(e,n){{const n=e.getAttribute("coordinate");if(!T[1].allGuesses.includes(n)){const t=T[1].receiveAttack(n);console.log(T[1]),!0===t?function(e){e.classList.add("hit")}(e):function(e){e.classList.add("miss")}(e)}}}(e.target)}))}()})()})();