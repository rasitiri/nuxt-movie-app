(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{185:function(t,e,n){"undefined"!=typeof self&&self,t.exports=function(t){var e={};function i(n){if(e[n])return e[n].exports;var r=e[n]={i:n,l:!1,exports:{}};return t[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e,i){},function(t,e,i){"use strict";i.r(e);var n="undefined"!=typeof window?window.HTMLElement:Object,r={mounted:function(){document.addEventListener("focusin",this.focusIn)},methods:{focusIn:function(t){if(this.isActive&&t.target!==this.$el&&!this.$el.contains(t.target)){var e=this.container?this.container:this.isFullPage?null:this.$el.parentElement;(this.isFullPage||e&&e.contains(t.target))&&(t.preventDefault(),this.$el.focus())}}},beforeDestroy:function(){document.removeEventListener("focusin",this.focusIn)}};function a(t,e,i,n,r,a,o,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=i,l._compiled=!0),n&&(l.functional=!0),a&&(l._scopeId="data-v-"+a),o?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},l._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var d=l.beforeCreate;l.beforeCreate=d?[].concat(d,u):[u]}return{exports:t,options:l}}var o=a({name:"spinner",props:{color:{type:String,default:"#000"},height:{type:Number,default:64},width:{type:Number,default:64}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",width:this.width,height:this.height,stroke:this.color}},[e("g",{attrs:{fill:"none","fill-rule":"evenodd"}},[e("g",{attrs:{transform:"translate(1 1)","stroke-width":"2"}},[e("circle",{attrs:{"stroke-opacity":".25",cx:"18",cy:"18",r:"18"}}),e("path",{attrs:{d:"M36 18c0-9.94-8.06-18-18-18"}},[e("animateTransform",{attrs:{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"0.8s",repeatCount:"indefinite"}})],1)])])])}),[],!1,null,null,null).exports,s=a({name:"dots",props:{color:{type:String,default:"#000"},height:{type:Number,default:240},width:{type:Number,default:60}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{viewBox:"0 0 120 30",xmlns:"http://www.w3.org/2000/svg",fill:this.color,width:this.width,height:this.height}},[e("circle",{attrs:{cx:"15",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"60",cy:"15",r:"9","fill-opacity":"0.3"}},[e("animate",{attrs:{attributeName:"r",from:"9",to:"9",begin:"0s",dur:"0.8s",values:"9;15;9",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"0.5",to:"0.5",begin:"0s",dur:"0.8s",values:".5;1;.5",calcMode:"linear",repeatCount:"indefinite"}})]),e("circle",{attrs:{cx:"105",cy:"15",r:"15"}},[e("animate",{attrs:{attributeName:"r",from:"15",to:"15",begin:"0s",dur:"0.8s",values:"15;9;15",calcMode:"linear",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"fill-opacity",from:"1",to:"1",begin:"0s",dur:"0.8s",values:"1;.5;1",calcMode:"linear",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,u=a({name:"bars",props:{color:{type:String,default:"#000"},height:{type:Number,default:40},width:{type:Number,default:40}}},(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",height:this.height,width:this.width,fill:this.color}},[e("rect",{attrs:{x:"0",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"10",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),e("rect",{attrs:{x:"20",y:"13",width:"4",height:"5"}},[e("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),e("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])])}),[],!1,null,null,null).exports,l=a({name:"vue-loading",mixins:[r],props:{active:Boolean,programmatic:Boolean,container:[Object,Function,n],isFullPage:{type:Boolean,default:!0},transition:{type:String,default:"fade"},canCancel:Boolean,onCancel:{type:Function,default:function(){}},color:String,backgroundColor:String,opacity:Number,width:Number,height:Number,zIndex:Number,loader:{type:String,default:"spinner"}},data:function(){return{isActive:this.active}},components:{Spinner:o,Dots:s,Bars:u},beforeMount:function(){this.programmatic&&(this.container?(this.isFullPage=!1,this.container.appendChild(this.$el)):document.body.appendChild(this.$el))},mounted:function(){this.programmatic&&(this.isActive=!0),document.addEventListener("keyup",this.keyPress)},methods:{cancel:function(){this.canCancel&&this.isActive&&(this.hide(),this.onCancel.apply(null,arguments))},hide:function(){var t=this;this.$emit("hide"),this.$emit("update:active",!1),this.programmatic&&(this.isActive=!1,setTimeout((function(){var e;t.$destroy(),void 0!==(e=t.$el).remove?e.remove():e.parentNode.removeChild(e)}),150))},keyPress:function(t){27===t.keyCode&&this.cancel()}},watch:{active:function(t){this.isActive=t}},beforeDestroy:function(){document.removeEventListener("keyup",this.keyPress)}},(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:t.transition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isActive,expression:"isActive"}],staticClass:"vld-overlay is-active",class:{"is-full-page":t.isFullPage},style:{zIndex:t.zIndex},attrs:{tabindex:"0","aria-busy":t.isActive,"aria-label":"Loading"}},[i("div",{staticClass:"vld-background",style:{background:t.backgroundColor,opacity:t.opacity},on:{click:function(e){return e.preventDefault(),t.cancel(e)}}}),i("div",{staticClass:"vld-icon"},[t._t("before"),t._t("default",[i(t.loader,{tag:"component",attrs:{color:t.color,width:t.width,height:t.height}})]),t._t("after")],2)])])}),[],!1,null,null,null).exports,c=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return{show:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,a={programmatic:!0},o=Object.assign({},e,n,a),s=new(t.extend(l))({el:document.createElement("div"),propsData:o}),u=Object.assign({},i,r);return Object.keys(u).map((function(t){s.$slots[t]=u[t]})),s}}};i(0),l.install=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=c(t,e,i);t.$loading=n,t.prototype.$loading=n},e.default=l}]).default},186:function(t,e,n){var content=n(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(49).default)("4eee6e6d",content,!0,{sourceMap:!1})},187:function(t,e,n){(e=n(48)(!1)).push([t.i,".vld-overlay{bottom:0;left:0;position:absolute;right:0;top:0;align-items:center;display:none;justify-content:center;overflow:hidden;z-index:9999}.vld-overlay.is-active{display:flex}.vld-overlay.is-full-page{z-index:9999;position:fixed}.vld-overlay .vld-background{bottom:0;left:0;position:absolute;right:0;top:0;background:#fff;opacity:.5}.vld-overlay .vld-icon,.vld-parent{position:relative}",""]),t.exports=e},198:function(t,e,n){"use strict";n.r(e);n(21);var r=n(2),o=n(185),l=n.n(o),c=(n(186),{components:{Loading:l.a},data:function(){return{movie:"",credits:"",isLoading:!0,fullPage:!0}},mounted:function(){this.getData(),this.getCredits()},methods:{getData:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/tv/".concat(t.$route.params.id,"?api_key=c26a114b77533a5023489c45b4fb3423"));case 2:n=e.sent,t.movie=n.data,t.isLoading=!1;case 5:case"end":return e.stop()}}),e)})))()},getCredits:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.get("/tv/".concat(t.$route.params.id,"/credits?api_key=c26a114b77533a5023489c45b4fb3423"));case 2:n=e.sent,t.credits=n.data.cast,t.isLoading=!1;case 5:case"end":return e.stop()}}),e)})))()}}}),d=n(15),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"border-b border-gray-800"},[n("div",{staticClass:"container mx-auto px-4 py-16 flex flex-col md:flex-row"},[n("div",{staticClass:"flex-none"},[n("img",{staticClass:"lg:w-3/4 64",attrs:{src:"https://image.tmdb.org/t/p/w500/"+t.movie.poster_path,alt:"poster"}})]),t._v(" "),n("div",[n("h2",{staticClass:"text-4xl mt-4 md:mt-0 font-semibold"},[t._v(t._s(t.movie.name))]),t._v(" "),n("div",{staticClass:"flex flex-wrap items-center text-gray-400 text-sm"},[n("svg",{staticClass:"fill-current text-orange-500 w-4",attrs:{viewBox:"0 0 24 24"}},[n("g",{attrs:{"data-name":"Layer 2"}},[n("path",{attrs:{d:"M17.56 21a1 1 0 01-.46-.11L12 18.22l-5.1 2.67a1 1 0 01-1.45-1.06l1-5.63-4.12-4a1 1 0 01-.25-1 1 1 0 01.81-.68l5.7-.83 2.51-5.13a1 1 0 011.8 0l2.54 5.12 5.7.83a1 1 0 01.81.68 1 1 0 01-.25 1l-4.12 4 1 5.63a1 1 0 01-.4 1 1 1 0 01-.62.18z","data-name":"star"}})])]),t._v(" "),n("span",{staticClass:"ml-1"},[t._v(t._s(t.movie.vote_average))]),t._v(" "),n("span",{staticClass:"mx-2"},[t._v("|")]),t._v(" "),n("span",[t._v(t._s(t.movie.first_air_date))]),t._v(" "),n("span",{staticClass:"mx-2"},[t._v("|")]),t._v(" "),n("span",[t._v("Sci-Fi")])]),t._v(" "),n("p",{staticClass:"text-gray-300 mt-8"},[t._v(t._s(t.movie.overview))]),t._v(" "),t._m(0)])])]),t._v(" "),t.isLoading?n("div",{staticClass:"flex items-center"},[n("div",{staticClass:"mx-auto"},[n("loading",{attrs:{active:t.isLoading,"is-full-page":"fullPage"},on:{"update:active":function(e){t.isLoading=e}}})],1)]):t._e(),t._v(" "),n("div",{staticClass:"movie-cast border-b border-gray-800"},[n("div",{staticClass:"container mx-auto px-4 py-16"},[n("h2",{staticClass:"text-4xl font-semibold"},[t._v("Cast")]),t._v(" "),n("div",{staticClass:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8"},t._l(t.credits,(function(e){return n("div",{key:e.id,staticClass:"mt-8"},[n("nuxt-link",{attrs:{to:"/people-detail/"+e.id}},[e.profile_path?n("img",{staticClass:"hover:opacity-75 transition ease-in-out duration-150",attrs:{src:"https://image.tmdb.org/t/p/w500/"+e.profile_path}}):n("img",{staticClass:"hover:opacity-75 transition ease-in-out duration-150",attrs:{src:"https://via.placeholder.com/500x750.png/5c615e/d9dedb?text="+e.name}})]),t._v(" "),n("div",{staticClass:"mt-2"},[n("nuxt-link",{staticClass:"text-lg mt-2 hover:text-gray:300",attrs:{to:"/people-detail/"+e.id}},[t._v(t._s(e.name))]),t._v(" "),n("div",{staticClass:"text-sm text-gray-400"},[t._v(t._s(e.character))])],1)],1)})),0)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"mt-12"},[e("h4",{staticClass:"text-white font-semibold"},[this._v("Featured Crew")]),this._v(" "),e("div",{staticClass:"flex mt-4"},[e("div",{staticClass:"mr-8"},[e("div",[this._v("Director")]),this._v(" "),e("div",{staticClass:"text-sm text-gray-400"},[this._v("Director")])])])])}],!1,null,null,null);e.default=component.exports}}]);