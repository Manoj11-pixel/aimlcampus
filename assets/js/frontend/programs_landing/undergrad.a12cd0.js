!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="39467237-3e51-45da-a0b1-9ba4af11c5ca",e._sentryDebugIdIdentifier="sentry-dbid-39467237-3e51-45da-a0b1-9ba4af11c5ca")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"db086200f718138aa73bffbb900b8feeeccac433"},function(e){function t(t){for(var i,r,o=t[0],s=t[1],u=t[2],d=0,f=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(c,r)&&c[r]&&f.push(c[r][0]),c[r]=0;for(i in s)Object.prototype.hasOwnProperty.call(s,i)&&(e[i]=s[i]);for(l&&l(t);f.length;)f.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],i=!0,o=1;o<n.length;o++){var s=n[o];0!==c[s]&&(i=!1)}i&&(a.splice(t--,1),e=r(r.s=n[0]))}return e}var i={},c={187:0},a=[];function r(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=i,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)r.d(n,i,function(t){return e[t]}.bind(null,i));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="https://assets-v2.scaler.com/packs/";var o=window.webpackJsonp=window.webpackJsonp||[],s=o.push.bind(o);o.push=t,o=o.slice();for(var u=0;u<o.length;u++)t(o[u]);var l=s;a.push(["R47i",0,1,3,5,315,2,4,33]),n()}({"2cR6":function(e,t,n){"use strict";var i=document.querySelector(".curriculum__phase-desc-container"),c={root:i,rootMargin:"0px",threshold:.25},a=document.querySelectorAll(".curriculum__phase-brief"),r=document.querySelectorAll(".curriculum__phase-brief-mobile"),o=document.querySelectorAll(".curriculum__phase-desc-mobile"),s={},u=function(e){window.innerWidth>=1280&&e.forEach((function(e){var t;e.isIntersecting&&(a.forEach((function(e){e.classList.remove("curriculum__phase-brief--active")})),null===(t=s[e.target.id])||void 0===t||t.classList.add("curriculum__phase-brief--active"))}))};t.a={initialize:function(){if(window.innerWidth>=1280){var e=new IntersectionObserver(u,c),t=document.querySelectorAll(".curriculum__phase-desc");t.forEach((function(t,n){s[t.id]=a[n],e.observe(t)})),a.forEach((function(e,n){e.addEventListener("click",(function(){i.scrollTop=t[n].offsetTop-i.offsetTop}))}))}else{var n;r.forEach((function(e,t){e.addEventListener("click",(function(){r.forEach((function(e){var t=e.querySelector(".icon-chevron-down"),n=e.querySelector(".icon-chevron-up");null==n||n.classList.add("hidden"),null==t||t.classList.remove("hidden")}));var n=e.querySelector(".icon-chevron-down"),i=e.querySelector(".icon-chevron-up");null==n||n.classList.add("hidden"),null==i||i.classList.remove("hidden"),t<o.length&&(o[t].classList.contains("hidden")?o[t].classList.remove("hidden"):(o[t].classList.add("hidden"),null==n||n.classList.remove("hidden"),null==i||i.classList.add("hidden")))}))})),null===(n=r[0])||void 0===n||n.click()}}}},"5Yfn":function(e,t,n){"use strict";function i(e){var t=window.getComputedStyle(e);return parseInt(t.getPropertyValue("transform").match(/matrix.*\((.+)\)/)[1].split(", ")[4],10)}function c(e,t){e.style.transform="translateX(".concat(t,"px)")}function a(e){var t=document.querySelector(".".concat(e,"__prev")),n=document.querySelector(".".concat(e,"__next")),a=document.querySelector(".".concat(e,"__images")),r=document.querySelector(".".concat(e,"__image")),o=document.querySelectorAll(".".concat(e,"__image"));if(r){var s=r.clientWidth+16+1,u=o.length-5,l=s*u;n.addEventListener("click",(function(){var e=i(a)-s;e<=-(l+1)&&n.classList.add("hidden"),e<=-(s-1)&&t.classList.remove("hidden"),c(a,e)})),t.addEventListener("click",(function(){var e=i(a),r=e+s;r>=-(l+1)&&n.classList.remove("hidden"),e>=-(s+1)&&t.classList.add("hidden"),c(a,r)}))}}t.a={initialize:function(){a("micro-campus"),a("hostel"),a("facilities")}}},"8BTH":function(e,t,n){"use strict";function i(){document.documentElement.classList.add("cannot-touch"),document.addEventListener("touchstart",(function e(){window.__CAN_TOUCH__=!0,document.documentElement.classList.remove("cannot-touch"),document.documentElement.classList.add("can-touch"),document.removeEventListener("touchstart",e,!1)}),!1)}n.d(t,"a",(function(){return i}))},"8RGR":function(e,t,n){"use strict";var i=n("butC"),c=n("MkmS"),a=n.n(c),r=n("FRir"),o=n("gAlz"),s="referral",u="".concat(s,"__button");t.a={initialize:function(){var e=document.querySelector(".".concat(u)),t=document.querySelector(".".concat(s));e&&e.addEventListener("click",Object(i.a)(a.a.mark((function n(){return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if("false"!==t.dataset.phoneVerified){n.next=4;break}r.a.error("Phone Number not verified."),n.next=18;break;case 4:return e.disabled=!0,n.prev=5,n.next=8,Object(o.a)("POST","/invite-friends/request-callback",{callback_type:"callback_requested",remarks:"Requested Callback from - UG_REFERRAL UG landing page"});case 8:n.sent.success?(r.a.success("Our team will reach out to you!"),t.style.display="none"):r.a.error("Some error occurred, please try again"),n.next=15;break;case 12:n.prev=12,n.t0=n.catch(5),r.a.error("Some error occurred, please try again");case 15:return n.prev=15,e.disabled=!1,n.finish(15);case 18:case"end":return n.stop()}}),n,null,[[5,12,15,18]])}))))}}},PJHb:function(e,t,n){"use strict";var i=document.querySelectorAll(".".concat("video-embedding")),c=function(e){if(e&&"VIDEO"===e.tagName)try{e.play()}catch(e){}};t.a={initialize:function(){i.forEach((function(e){return c(e)}))}}},R47i:function(e,t,n){"use strict";n.r(t);var i=n("RUa/"),c=n("8BTH"),a=n("GTbB"),r=n("PJHb"),o=n("W0PK"),s=n("2cR6"),u=n("2/eO"),l=n("k5BP"),d=n("m4Uv"),f=n("SZqt"),m=n("o/5V"),v=n("j4gs"),p=n("vuml"),h=n("G41i"),b=n("7KRb"),y=n("8RGR"),g=n("g5NP"),w=n("XwOF"),_=n("nvkq"),L=n("5Yfn"),S=n("SVOY"),E=n("hjLG"),q=n("R1bl"),z=n("bP8M"),k=n("wLD4");window.addEventListener("load",(function(){Object(c.a)(),Object(i.r)()&&(window.header=new a.m("main-site-header",{inPageLinks:!0,sticky:!0})),a.b.initialize(),a.f.initialize(),a.e.initialize(),a.q.initialize(),a.B.initialize(),a.w.initialize(),a.u.initialize(),r.a.initialize(),h.a.initialize(),p.a.initialize(),s.a.initialize(),m.a.initialize(),f.a.initialize(),g.a.initialize(),d.a.initialize(),y.a.initialize(),z.a.initialize(),l.a.initialize(),o.a.initialize(),L.a.initialize(),S.a.initialize(),w.a.initialize(),u.a.initialize(),new q.a("waitlist-modal","waitlist-login-mobile"),_.a.initialize(),v.a.initialize(),b.a.initialize(),E.a.initialize(),k.a.initialize()})),window.addEventListener("tracking_initialized",(function(){var e;null===(e=window.TrackingHelper)||void 0===e||e.setContext("mix_panel_data",{product:"scaler_school_of_technology",subproduct:"home"})}))},SVOY:function(e,t,n){"use strict";var i="".concat("video_library","__yt-video"),c="".concat("video_library","__yt-overlay"),a=document.querySelectorAll(".".concat(i));t.a={initialize:function(){a.forEach((function(e){e.addEventListener("click",(function(){var t=e.parentNode,n=null==t?void 0:t.querySelector(".".concat(c));null==n||n.classList.add("hidden")}))}))}}},SZqt:function(e,t,n){"use strict";var i="".concat("faq","__content--active"),c="".concat("faq","__outer-heading"),a=document.querySelectorAll(".".concat(c)),r=function(e,t){e.classList.contains("is-expanded")?t.classList.add(i):t.classList.remove(i)};t.a={initialize:function(){a.forEach((function(e){var t=e.parentElement;t&&t.addEventListener("click",(function(){return r(e,t)}))}))}}},XwOF:function(e,t,n){"use strict";var i=document.querySelector(".".concat("guidance-super-mentor","__cards")),c=document.querySelector(".".concat("guidance-super-mentor","__btn.").concat("guidance-super-mentor","__btn--prev")),a=document.querySelector(".".concat("guidance-super-mentor","__btn.").concat("guidance-super-mentor","__btn--next")),r=document.querySelector(".super-mentor-card__container").clientWidth+16+1,o=3*r;function s(e){var t=window.getComputedStyle(e);return parseInt(t.getPropertyValue("transform").match(/matrix.*\((.+)\)/)[1].split(", ")[4],10)}function u(e,t){e.style.transform="translateX(".concat(t,"px)")}t.a={initialize:function(){a.addEventListener("click",(function(){var e=s(i)-r;e<=-(o+1)&&a.classList.add("hidden"),e<=-(r-1)&&c.classList.remove("hidden"),u(i,e)})),c.addEventListener("click",(function(){var e=s(i),t=e+r;t>=-(o+1)&&a.classList.remove("hidden"),e>=-(r+1)&&c.classList.add("hidden"),u(i,t)}))}}},g5NP:function(e,t,n){"use strict";var i=n("RUa/");t.a={initialize:function(){window.addEventListener("scroll",(function(){var e=document.querySelector(".header__nav-item--active");Object(i.o)()?null==e||e.scrollIntoView(!0):null==e||e.scrollIntoView({behavior:"smooth",inline:"center"})}))}}},gAlz:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var i=n("7cf5"),c=n("butC"),a=n("0csS"),r=n.n(a),o=n("9zAL");function s(e){var t=[];return Object.keys(e).forEach((function(n){t.push("".concat(n,"=").concat(e[n]))})),t.join("&")}function u(e){return l.apply(this,arguments)}function l(){return(l=Object(c.a)(r.a.mark((function e(t){var n,i;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=null,e.prev=1,e.next=4,t.json();case 4:n=e.sent,e.next=9;break;case 7:e.prev=7,e.t0=e.catch(1);case 9:if(!t.ok){e.next=13;break}return e.abrupt("return",n);case 13:throw(i=new Error(t.statusText)).isFromServer=!0,i.response=t,i.responseJson=n,i;case 18:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}function d(e,t){return f.apply(this,arguments)}function f(){return(f=Object(c.a)(r.a.mark((function e(t,n){var c,a,l,d,f,m,v,p,h,b,y=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=y.length>2&&void 0!==y[2]?y[2]:null,a=y.length>3&&void 0!==y[3]?y[3]:{},l={Accept:"application/json","Content-Type":"application/json","X-Requested-With":"XMLHttpRequest"},(d=document.querySelector('meta[name="csrf-token"]'))&&(l["X-CSRF-Token"]=d.content),f={method:t},c&&("FormData"===a.dataType?(delete l["Content-Type"],f.body=c):f.body=JSON.stringify(c)),m=a.headers,v=a.params,p=Object(i.a)(a,["headers","params"]),(h=Object.assign(f,{headers:Object.assign(l,m)},{credentials:"same-origin"},p)).referrer=Object(o.a)(),v&&(n+="?".concat(s(v))),e.next=13,fetch(n,h);case 13:return b=e.sent,e.abrupt("return",u(b));case 15:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},hjLG:function(e,t,n){"use strict";var i=n("q8Yx"),c=function(e){var t=document.querySelector("#".concat(e,".video-modal iframe"));t&&t.contentWindow.postMessage('{"event": "command", "func": "pauseVideo", "args": ""}',"*")};t.a={initialize:function(){i.b.on("backdrop:dismissed",c)}}},j4gs:function(e,t,n){"use strict";var i=n("q8Yx"),c=n("gOfx"),a="ug-exit-intent-modal",r="event-exit-intent-modal",o=".ug-exit-intent-modal__call-button",s=document.getElementById(a);function u(){return!sessionStorage.getItem(a)}function l(){sessionStorage.setItem(a,"true")}function d(e){(function(e){return!e.toElement&&!e.relatedTarget&&e.clientY<10})(e)&&(document.removeEventListener("mouseout",d),i.a.open(a,!0))}function f(e){e===a&&l()}function m(e){e===a&&(i.a.close(a),l())}function v(){Object(c.a)()?u&&s.classList.contains(r)&&setTimeout((function(){i.a.open(a,!0),l()}),15e3):document.addEventListener("mouseout",d)}t.a={initialize:function(){var e;null===(e=document.querySelector(o))||void 0===e||e.addEventListener("click",(function(){m(a)})),s&&u()&&(v(),i.b.on("open",f),i.b.on("dismissed",m))}}},m4Uv:function(e,t,n){"use strict";var i=function(e,t){e&&t&&t.addEventListener("click",(function(){if(!e.querySelector("iframe")){var n=function(e){var t=document.createElement("iframe");return t.width=e.width,t.height=e.height,t.setAttribute("allowfullscreen",""),t.setAttribute("frameborder","0"),t.setAttribute("allow","autoplay"),t}(t);t.classList.add("hidden"),e.appendChild(n),function(e,t,n){e.appendChild(t),function(e,t){t.setAttribute("src","".concat(e,"?autoplay=1&rel=0"))}(n,t)}(e,n,t.dataset.url)}}))};t.a={initialize:function(){document.querySelectorAll(".yt-video-embedding").forEach((function(e){return i(e,e.querySelector(":scope > img"))}))}}},nvkq:function(e,t,n){"use strict";var i=function(){var e,t=new URLSearchParams(window.location.search).get("open-waitlist-form");return(null===(e=window.GTMData)||void 0===e?void 0:e.isLoggedIn)&&"true"===sessionStorage.sstRegistration&&"true"===t};t.a={initialize:function(){if(i()){var e,t=window.GTMData,n=t.email,c=t.isNewUser;null===(e=window.GTMtracker)||void 0===e||e.trackEvent("loginWithPhoneFormatter",{email:n,newUser:c})}sessionStorage.removeItem("sstRegistration")}}},"o/5V":function(e,t,n){"use strict";var i=n("RUa/"),c="".concat("glance-card","__wrapper"),a="".concat("glance-card","__toggle"),r="".concat("glance-card","__content-mobile"),o=document.querySelectorAll(".".concat(c)),s="".concat(r,"--inactive"),u="".concat(r,"--active"),l=function(e){if(Object(i.m)()){var t=e.querySelector(".".concat(a)),n=e.querySelector(".".concat(r)),c=e.querySelector(".".concat("glance-card"));t.classList.contains("icon-chevron-down")?(t.classList.remove("icon-chevron-down"),t.classList.add("icon-chevron-up"),n.classList.add(u),n.classList.remove(s),setTimeout((function(){n.style.height="auto"}),200),c.classList.add("active")):(t.classList.add("icon-chevron-down"),t.classList.remove("icon-chevron-up"),n.classList.remove(u),n.classList.add(s),c.classList.remove("active"))}};t.a={initialize:function(){o.forEach((function(e){e.addEventListener("click",(function(){return l(e)}))}))}}},wLD4:function(e,t,n){"use strict";var i=n("Z/sY"),c=n.n(i),a="f-action",r="f-action--active";function o(){return window.pageYOffset||document.documentElement.scrollTop}t.a={initialize:function(){var e=document.querySelector(".".concat(a));if(e){var t=e.getAttribute("data-target"),n=document.getElementById(t),i=o(),s=null,u=c()((function(){var t=o();t<(n?window.pageYOffset+n.getBoundingClientRect().top+n.offsetHeight:window.innerHeight)?(clearTimeout(s),e.classList.remove(r)):t>i&&(s=setTimeout((function(){e.classList.add(r)}),300)),i=t}),300);window.addEventListener("scroll",u)}}}}});
//# sourceMappingURL=undergrad.a12cd0.js.map