(function(t){function e(e){for(var r,s,o=e[0],c=e[1],u=e[2],l=0,p=[];l<o.length;l++)s=o[l],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&p.push(i[s][0]),i[s]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);d&&d(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,s=1;s<n.length;s++){var o=n[s];0!==i[o]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},s={app:0},i={app:0},a=[];function o(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"26ed6fa5"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};s[t]?e.push(s[t]):0!==s[t]&&n[t]&&e.push(s[t]=new Promise((function(e,n){for(var r="css/"+({about:"about"}[t]||t)+"."+{about:"985bce55"}[t]+".css",i=c.p+r,a=document.getElementsByTagName("link"),o=0;o<a.length;o++){var u=a[o],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===i))return e()}var p=document.getElementsByTagName("style");for(o=0;o<p.length;o++){u=p[o],l=u.getAttribute("data-href");if(l===r||l===i)return e()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=e,d.onerror=function(e){var r=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete s[t],d.parentNode.removeChild(d),n(a)},d.href=i;var h=document.getElementsByTagName("head")[0];h.appendChild(d)})).then((function(){s[t]=0})));var r=i[t];if(0!==r)if(r)e.push(r[2]);else{var a=new Promise((function(e,n){r=i[t]=[e,n]}));e.push(r[2]=a);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=o(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),s=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+s+")",p.name="ChunkLoadError",p.type=r,p.request=s,n[1](p)}i[t]=void 0}};var d=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var d=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),s=n.n(r);s.a},"0eca":function(t,e,n){t.exports=n.p+"media/affection.66d9afbe.mp3"},"0f10":function(t,e,n){t.exports=n.p+"media/photograph.fa76e269.mp3"},4385:function(t,e,n){t.exports=n.p+"media/apocalypse.96cacaed.mp3"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[t._v("Home")]),t._v(" | "),n("router-link",{attrs:{to:"/about"}},[t._v("About")])],1),n("router-view")],1)},i=[],a=(n("034f"),n("2877")),o={},c=Object(a["a"])(o,s,i,!1,null,null,null),u=c.exports,l=n("9483");Object(l["a"])("".concat("/","/taivaas-music-player/service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var p=n("8c4f"),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("header",[t._m(0),n("h1",{staticClass:"title-main"},[t._v("Taivaas")]),n("div",{staticClass:"header-shadow",on:{click:t.displayPlaylist}},[n("i",{staticClass:"fas fa-bars"})])]),n("main",[n("section",{staticClass:"thumbnail"},[n("img",{attrs:{src:t.current.thumbnail,alt:""}})]),n("section",{staticClass:"player"},[n("div",{staticClass:"song-title"},[n("h2",[t._v(t._s(t.current.title))]),n("span",[t._v(t._s(t.current.artist))])]),n("div",{staticClass:"progress-container",attrs:{id:"progress-container"},on:{click:t.clickProgress}},[n("div",{staticClass:"progress",style:{width:t.progressWidth+"%"},attrs:{id:"progress"},on:{timeupdate:t.updateProgress}})]),n("div",{staticClass:"controls"},[n("button",{staticClass:"previous",on:{click:t.previous}},[n("i",{staticClass:"fas fa-backward"})]),t.isPlaying?n("button",{staticClass:"pause",on:{click:t.pause}},[n("i",{staticClass:"fas fa-pause"})]):n("button",{staticClass:"play",on:{click:t.play}},[n("i",{staticClass:"fas fa-play"})]),n("button",{staticClass:"next",on:{click:t.next}},[n("i",{staticClass:"fas fa-forward"})])])]),this.isPlaylist?n("section",{staticClass:"playlist"},[n("h3",[t._v("The Playlist")]),t._l(t.songs,(function(e){return n("button",{key:e.src,class:e.src==t.current.src?"song playing":"song",on:{click:function(n){return t.play(e)}}},[t._v(" "+t._s(e.title)+" ")])}))],2):t._e()])])},h=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"header-shadow"},[n("i",{staticClass:"fas fa-arrow-left"})])}],f={name:"Home",data:function(){return{current:{},index:0,isPlaying:!1,isPlaylist:!1,progressWidth:null,songs:[{title:"Affection",artist:"Cigrattes after Sex",thumbnail:"https://raw.githubusercontent.com/Sumer16/taivaas-music-player/gh-pages/img/thumbnail-1.ced213fb.jpg",src:n("0eca")},{title:"Apocalypse",artist:"Cigrattes after Sex",thumbnail:"https://raw.githubusercontent.com/Sumer16/taivaas-music-player/gh-pages/img/thumbnail-2.fc2290e1.jpg",src:n("4385")},{title:"Boom Clap",artist:"Charlie XCX",thumbnail:"https://raw.githubusercontent.com/Sumer16/taivaas-music-player/gh-pages/img/thumbnail-3.7e2dfde1.jpg",src:n("f74a")},{title:"Wake Me Up",artist:"Avicii",thumbnail:"https://raw.githubusercontent.com/Sumer16/taivaas-music-player/gh-pages/img/thumbnail-5.64926f5d.jpg",src:n("e7db")},{title:"Photograph",artist:"Ed Sheeren",thumbnail:"https://raw.githubusercontent.com/Sumer16/taivaas-music-player/gh-pages/img/thumbnail-4.c0d96e34.jpg",src:n("0f10")}],player:new Audio}},methods:{play:function(t){"undefined"!=typeof t.src&&(this.current=t,this.player.src=this.current.src),this.player.play(),this.player.addEventListener("ended",this.next),this.isPlaying=!0},pause:function(){this.player.pause(),this.isPlaying=!1},next:function(){this.index++,this.index>this.songs.length-1&&(this.index=0),this.current=this.songs[this.index],this.play(this.current)},previous:function(){this.index--,this.index<0&&(this.index=this.songs.length-1),this.current=this.songs[this.index],this.play(this.current)},updateProgress:function(){var t=this.player.duration,e=this.player.currentTime,n=e/t*100;this.progressWidth=n},clickProgress:function(t){var e=this.$el.children[1].children[1].children[1].clientWidth,n=t.offsetX,r=this.player.duration;this.player.currentTime=n/e*r,this.updateProgress()},displayPlaylist:function(){this.isPlaylist=!this.isPlaylist}},created:function(){this.current=this.songs[this.index],this.player.src=this.current.src},updated:function(){this.player.addEventListener("timeupdate",this.updateProgress)}},g=f,m=(n("cccb"),Object(a["a"])(g,d,h,!1,null,null,null)),v=m.exports;r["a"].use(p["a"]);var b=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}}],y=new p["a"]({mode:"history",base:"/",routes:b}),w=y,C=n("2f62");r["a"].use(C["a"]);var x=new C["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:w,store:x,render:function(t){return t(u)}}).$mount("#app")},"5ced":function(t,e,n){},"85ec":function(t,e,n){},cccb:function(t,e,n){"use strict";var r=n("5ced"),s=n.n(r);s.a},e7db:function(t,e,n){t.exports=n.p+"media/wake-me-up.8ebc1919.mp3"},f74a:function(t,e,n){t.exports=n.p+"media/boom-clap.d3df2025.mp3"}});
//# sourceMappingURL=app.eb056e6a.js.map