!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=41)}({41:function(e,t,n){e.exports=n(42)},42:function(e,t){var n=document.getElementById("navbar"),r=document.getElementById("about-me");function o(){return document.getElementsByClassName("nav-item").length>=1?(window.innerWidth<760?Array.from(document.getElementsByClassName("navbar-brand")).forEach((function(e){return e.setAttribute("style","display: none")})):Array.from(document.getElementsByClassName("navbar-brand")).forEach((function(e){return e.setAttribute("style","display: visible")})),!0):(0===document.getElementsByClassName("nav-item").length&&Array.from(document.getElementsByClassName("navbar-brand")).forEach((function(e){return e.style.margin="0"})),!1)}window.onload=function(){null!=r?n.classList.add("sticky-top"):n.classList.add("fixed-top"),o()&&window.addEventListener("resize",(function(){o()}))}}});