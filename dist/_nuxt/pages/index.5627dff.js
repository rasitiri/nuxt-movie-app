(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{182:function(t,e,r){"use strict";var n=r(4),o=r(19),l=r(22),c=r(117),d=r(64),f=r(10),v=r(47).f,h=r(65).f,m=r(9).f,y=r(183).trim,_=n.Number,x=_,w=_.prototype,C="Number"==l(r(82)(w)),N="trim"in String.prototype,S=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var r,n,o,l=(e=N?e.trim():y(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:n=2,o=49;break;case 79:case 111:n=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,n)}}return+e};if(!_(" 0o1")||!_("0b1")||_("+0x1")){_=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof _&&(C?f((function(){w.valueOf.call(r)})):"Number"!=l(r))?c(new x(S(e)),r,_):S(e)};for(var k,M=r(8)?v(x):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;M.length>E;E++)o(x,k=M[E])&&!o(_,k)&&m(_,k,h(x,k));_.prototype=w,w.constructor=_,r(11)(n,"Number",_)}},183:function(t,e,r){var n=r(6),o=r(23),l=r(10),c=r(184),d="["+c+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),h=function(t,e,r){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(m):c[t];r&&(o[r]=f),n(n.P+n.F*d,"String",o)},m=h.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=h},184:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},185:function(t,e,r){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function i(r){if(e[r])return e[r].exports;var n=e[r]={i:r,l:!1,exports:{}};return t[r].call(n.exports,n,n.exports,i),n.l=!0,n.exports}return i.m=t,i.c=e,i.d=function(t,e,r){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(r,n,function(e){return t[e]}.bind(null,n));return r},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var r="undefined"!=typeof window?window.HTMLElement:Object,n={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,i,r,n,a,o,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),r&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),n&&n.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):n&&(u=s?function(){n.call(this,this.$root.$options.shadowRoot)}:n),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=a({name:"vue-loading",mixins:[n],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,r],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:u},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a={programmatic:!0},o=Object.assign({},e,r,a),s=new(t.extend(l))({el:document.createElement("div"),propsData:o}),u=Object.assign({},i,n);return Object.keys(u).map((function(t){s.$slots[t]=u[t]})),s}}};i(0),l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=c(t,e,i);t.$loading=r,t.prototype.$loading=r},e.default=l}]).default},186:function(t,e,r){var content=r(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(49).default)("4eee6e6d",content,!0,{sourceMap:!1})},187:function(t,e,r){(e=r(48)(!1)).push([t.i,".vld-overlay{bottom:0;left:0;position:absolute;right:0;top:0;align-items:center;display:none;justify-content:center;overflow:hidden;z-index:9999}.vld-overlay.is-active{display:flex}.vld-overlay.is-full-page{z-index:9999;position:fixed}.vld-overlay .vld-background{bottom:0;left:0;position:absolute;right:0;top:0;background:#fff;opacity:.5}.vld-overlay .vld-icon,.vld-parent{position:relative}",""]),t.exports=e},188:function(t,e,r){"use strict";r.r(e);r(182);var n={props:{id:{type:Number,required:!0},posterPath:{type:String,required:!0},title:{type:String,required:!0},voteAverage:{type:Number,required:!0},releaseDate:{type:String,required:!0}}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-8"},[r("nuxt-link",{attrs:{to:"/movie-detail/"+t.id}},[r("img",{staticClass:"hover:opacity-75 transition ease-in-out duration-150",attrs:{src:"https://image.tmdb.org/t/p/w200/"+t.posterPath}})]),t._v(" "),r("div",{staticClass:"mt-2"},[r("nuxt-link",{staticClass:"mt-2 hover:text-gray-300",attrs:{to:"/movie-detail/"+t.id}},[r("div",{staticClass:"flex flex-wrap"},[t._v(t._s(t.title))])]),t._v(" "),r("div",{staticClass:"flex items-center text-gray-400 text-sm mt-1"},[r("svg",{staticClass:"fill-current text-orange-500 w-4",attrs:{viewBox:"0 0 24 24"}},[r("g",{attrs:{"data-name":"Layer 2"}},[r("path",{attrs:{d:"M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z","data-name":"star"}})])]),t._v(" "),r("span",{staticClass:"ml-1"},[t._v(t._s(t.voteAverage))]),t._v(" "),r("span",{staticClass:"mx-2"},[t._v("|")]),t._v(" "),r("span",[t._v(t._s(t.releaseDate))])]),t._v(" "),r("div",{staticClass:"text-gray-400 text-sm"},[t._v("Sci-Fi")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},189:function(t,e,r){"use strict";r.r(e);r(182);var n={props:{id:{type:Number,required:!0},posterPath:{type:String,required:!0},title:{type:String,required:!0},voteAverage:{type:Number,required:!0},releaseDate:{type:String,required:!0}}},o=r(15),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mt-8"},[r("nuxt-link",{attrs:{to:"/tv-show-detail/"+t.id}},[t.posterPath?r("img",{staticClass:"hover:opacity-75 transition ease-in-out duration-150",attrs:{src:"https://image.tmdb.org/t/p/w200/"+t.posterPath}}):r("img",{staticClass:"hover:opacity-75 transition ease-in-out duration-150",attrs:{src:"https://via.placeholder.com/200x300.png/5c615e/d9dedb?text="+t.title}})]),t._v(" "),r("div",{staticClass:"mt-2"},[r("nuxt-link",{staticClass:"mt-2 hover:text-gray-300",attrs:{to:"/tv-show-detail/"+t.id}},[r("div",{staticClass:"flex flex-wrap"},[t._v(t._s(t.title))])]),t._v(" "),r("div",{staticClass:"flex items-center text-gray-400 text-sm mt-1"},[r("svg",{staticClass:"fill-current text-orange-500 w-4",attrs:{viewBox:"0 0 24 24"}},[r("g",{attrs:{"data-name":"Layer 2"}},[r("path",{attrs:{d:"M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z","data-name":"star"}})])]),t._v(" "),r("span",{staticClass:"ml-1"},[t._v(t._s(t.voteAverage))]),t._v(" "),r("span",{staticClass:"mx-2"},[t._v("|")]),t._v(" "),r("span",[t._v(t._s(t.releaseDate))])]),t._v(" "),r("div",{staticClass:"text-gray-400 text-sm"},[t._v("Sci-Fi")])],1)],1)}),[],!1,null,null,null);e.default=component.exports},191:function(t,e,r){"use strict";r.r(e);r(21);var n=r(2),o={components:{MovieCard:r(188).default},data:function(){return{movies:""}},mounted:function(){this.getMovies()},methods:{getMovies:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/trending/movie/day?api_key=c26a114b77533a5023489c45b4fb3423");case 2:r=e.sent,t.movies=r.data.results;case 4:case"end":return e.stop()}}),e)})))()}}},l=r(15),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-20 pt-12"},[e("h1",{staticClass:"uppercase tracking-wider text-orange-500 text-lg font-semibold"},[this._v("\n    Popular Movies (Today)\n  ")]),this._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"},this._l(this.movies,(function(t){return e("movie-card",{key:t.id,attrs:{id:t.id,"poster-path":t.poster_path,title:t.title,"vote-average":t.vote_average,"release-date":t.release_date}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{MovieCard:r(188).default})},192:function(t,e,r){"use strict";r.r(e);r(21);var n=r(2),o={components:{TvShowCard:r(189).default},data:function(){return{tvshows:""}},mounted:function(){this.getMovies()},methods:{getMovies:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/trending/tv/day?api_key=c26a114b77533a5023489c45b4fb3423");case 2:r=e.sent,t.tvshows=r.data.results;case 4:case"end":return e.stop()}}),e)})))()}}},l=r(15),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"px-20 pt-12"},[e("h1",{staticClass:"uppercase border-t border-gray-800 pt-10 tracking-wider text-orange-500 text-lg font-semibold"},[this._v("\n    Popular TV Shows\n  ")]),this._v(" "),e("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"},this._l(this.tvshows,(function(t){return e("tv-show-card",{key:t.id,attrs:{id:t.id,"poster-path":t.poster_path,title:t.name,"vote-average":t.vote_average,"release-date":t.first_air_date}})})),1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{TvShowCard:r(189).default})},199:function(t,e,r){"use strict";r.r(e);r(21);var n=r(2),o=r(185),l=r.n(o),c=r(191),d=r(192),f=(r(186),{components:{movies:c.default,tvshows:d.default,Loading:l.a},data:function(){return{movies:"",isLoading:!0,fullPage:!0,opacity:.1}},mounted:function(){this.getMovies()},methods:{getMovies:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/trending/tv/week?api_key=c26a114b77533a5023489c45b4fb3423");case 2:r=e.sent,t.movies=r.data.results,t.isLoading=!1;case 5:case"end":return e.stop()}}),e)})))()}}}),v=r(15),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("movies"),t._v(" "),r("tvshows"),t._v(" "),r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"mx-auto"},[r("loading",{attrs:{opacity:t.opacity,active:t.isLoading,loader:"dots",color:"#fc8c03","is-full-page":t.fullPage},on:{"update:active":function(e){t.isLoading=e}}})],1)])],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Movies:r(191).default,Tvshows:r(192).default})}}]);