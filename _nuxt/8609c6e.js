(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{462:function(t,e,n){"use strict";n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return m})),n.d(e,"a",(function(){return y})),n.d(e,"b",(function(){return x}));n(35);var o=n(76);function r(){for(var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length,o=new Array(n>1?n-1:0),r=1;r<n;r++)o[r-1]=arguments[r];return(t=Array()).concat.apply(t,[e].concat(o))}function c(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top center 0",n=arguments.length>2?arguments[2]:void 0;return{name:t,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:e}},render:function(e,n){var c="transition".concat(n.props.group?"-group":""),data={props:{name:t,mode:n.props.mode},on:{beforeEnter:function(t){t.style.transformOrigin=n.props.origin,t.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(data.on.leave=r(data.on.leave,(function(t){var e=t.offsetTop,n=t.offsetLeft,o=t.offsetWidth,r=t.offsetHeight;t._transitionInitialStyles={position:t.style.position,top:t.style.top,left:t.style.left,width:t.style.width,height:t.style.height},t.style.position="absolute",t.style.top=e+"px",t.style.left=n+"px",t.style.width=o+"px",t.style.height=r+"px"})),data.on.afterLeave=r(data.on.afterLeave,(function(t){if(t&&t._transitionInitialStyles){var e=t._transitionInitialStyles,n=e.position,o=e.top,r=e.left,c=e.width,l=e.height;delete t._transitionInitialStyles,t.style.position=n||"",t.style.top=o||"",t.style.left=r||"",t.style.width=c||"",t.style.height=l||""}}))),n.props.hideOnLeave&&(data.on.leave=r(data.on.leave,(function(t){t.style.setProperty("display","none","important")}))),e(c,Object(o.a)(n.data,data),n.children)}}}function l(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"in-out";return{name:t,functional:!0,props:{mode:{type:String,default:n}},render:function(n,r){return n("transition",Object(o.a)(r.data,{props:{name:t},on:e}),r.children)}}}var h=n(2),v=n(1),d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=e?"width":"height",o="offset".concat(Object(v.s)(n));return{beforeEnter:function(t){t._parent=t.parentNode,t._initialStyle=Object(h.a)({transition:t.style.transition,overflow:t.style.overflow},n,t.style[n])},enter:function(e){var r=e._initialStyle;e.style.setProperty("transition","none","important"),e.style.overflow="hidden";var c="".concat(e[o],"px");e.style[n]="0",e.offsetHeight,e.style.transition=r.transition,t&&e._parent&&e._parent.classList.add(t),requestAnimationFrame((function(){e.style[n]=c}))},afterEnter:c,enterCancelled:c,leave:function(t){t._initialStyle=Object(h.a)({transition:"",overflow:t.style.overflow},n,t.style[n]),t.style.overflow="hidden",t.style[n]="".concat(t[o],"px"),t.offsetHeight,requestAnimationFrame((function(){return t.style[n]="0"}))},afterLeave:r,leaveCancelled:r};function r(e){t&&e._parent&&e._parent.classList.remove(t),c(e)}function c(t){var e=t._initialStyle[n];t.style.overflow=t._initialStyle.overflow,null!=e&&(t.style[n]=e),delete t._initialStyle}},f=(c("carousel-transition"),c("carousel-reverse-transition"),c("tab-transition"),c("tab-reverse-transition"),c("menu-transition"),c("fab-transition","center center","out-in"),c("dialog-transition"),c("dialog-bottom-transition"),c("dialog-top-transition"),c("fade-transition")),m=(c("scale-transition"),c("scroll-x-transition"),c("scroll-x-reverse-transition"),c("scroll-y-transition"),c("scroll-y-reverse-transition"),c("slide-x-transition")),y=(c("slide-x-reverse-transition"),c("slide-y-transition"),c("slide-y-reverse-transition"),l("expand-transition",d())),x=l("expand-x-transition",d("",!0))},463:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(27).default)("197fcea4",content,!0,{sourceMap:!1})},464:function(t,e,n){var o=n(26)(!1);o.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),o.push([t.i,'.v-chip:not(.v-chip--outlined).accent,.v-chip:not(.v-chip--outlined).error,.v-chip:not(.v-chip--outlined).info,.v-chip:not(.v-chip--outlined).primary,.v-chip:not(.v-chip--outlined).secondary,.v-chip:not(.v-chip--outlined).success,.v-chip:not(.v-chip--outlined).warning{color:#fff}.theme--light.v-chip{border-color:rgba(0,0,0,.12);color:rgba(0,0,0,.87)}.theme--light.v-chip:not(.v-chip--active){background:#e0e0e0}.theme--light.v-chip:hover:before{opacity:.04}.theme--light.v-chip--active:before,.theme--light.v-chip--active:hover:before,.theme--light.v-chip:focus:before{opacity:.12}.theme--light.v-chip--active:focus:before{opacity:.16}.theme--dark.v-chip{border-color:hsla(0,0%,100%,.12);color:#fff}.theme--dark.v-chip:not(.v-chip--active){background:#555}.theme--dark.v-chip:hover:before{opacity:.08}.theme--dark.v-chip--active:before,.theme--dark.v-chip--active:hover:before,.theme--dark.v-chip:focus:before{opacity:.24}.theme--dark.v-chip--active:focus:before{opacity:.32}.v-chip{align-items:center;cursor:default;display:inline-flex;line-height:20px;max-width:100%;outline:none;overflow:hidden;padding:0 12px;position:relative;text-decoration:none;transition-duration:.28s;transition-property:box-shadow,opacity;transition-timing-function:cubic-bezier(.4,0,.2,1);vertical-align:middle;white-space:nowrap}.v-chip:before{background-color:currentColor;bottom:0;border-radius:inherit;content:"";left:0;opacity:0;position:absolute;pointer-events:none;right:0;top:0}.v-chip .v-avatar{height:24px!important;min-width:24px!important;width:24px!important}.v-chip .v-icon{font-size:24px}.v-application--is-ltr .v-chip .v-avatar--left,.v-application--is-ltr .v-chip .v-icon--left{margin-left:-6px;margin-right:6px}.v-application--is-ltr .v-chip .v-avatar--right,.v-application--is-ltr .v-chip .v-icon--right,.v-application--is-rtl .v-chip .v-avatar--left,.v-application--is-rtl .v-chip .v-icon--left{margin-left:6px;margin-right:-6px}.v-application--is-rtl .v-chip .v-avatar--right,.v-application--is-rtl .v-chip .v-icon--right{margin-left:-6px;margin-right:6px}.v-chip:not(.v-chip--no-color) .v-icon{color:inherit}.v-chip .v-chip__close.v-icon{font-size:18px;max-height:18px;max-width:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-application--is-ltr .v-chip .v-chip__close.v-icon.v-icon--right{margin-right:-4px}.v-application--is-rtl .v-chip .v-chip__close.v-icon.v-icon--right{margin-left:-4px}.v-chip .v-chip__close.v-icon:active,.v-chip .v-chip__close.v-icon:focus,.v-chip .v-chip__close.v-icon:hover{opacity:.72}.v-chip .v-chip__content{align-items:center;display:inline-flex;height:100%;max-width:100%}.v-chip--active .v-icon{color:inherit}.v-chip--link:before{transition:opacity .3s cubic-bezier(.25,.8,.5,1)}.v-chip--link:focus:before{opacity:.32}.v-chip--clickable{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip--clickable:active{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-chip--disabled{opacity:.4;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-chip__filter{max-width:24px}.v-chip__filter.v-icon{color:inherit}.v-chip__filter.expand-x-transition-enter,.v-chip__filter.expand-x-transition-leave-active{margin:0}.v-chip--pill .v-chip__filter{margin-right:0 16px 0 0}.v-chip--pill .v-avatar{height:32px!important;width:32px!important}.v-application--is-ltr .v-chip--pill .v-avatar--left{margin-left:-12px}.v-application--is-ltr .v-chip--pill .v-avatar--right,.v-application--is-rtl .v-chip--pill .v-avatar--left{margin-right:-12px}.v-application--is-rtl .v-chip--pill .v-avatar--right{margin-left:-12px}.v-chip--label{border-radius:8px!important}.v-chip.v-chip--outlined{border-width:thin;border-style:solid}.v-chip.v-chip--outlined.v-chip--active:before{opacity:.08}.v-chip.v-chip--outlined .v-icon{color:inherit}.v-chip.v-chip--outlined.v-chip.v-chip{background-color:transparent!important}.v-chip.v-chip--selected{background:transparent}.v-chip.v-chip--selected:after{opacity:.28}.v-chip.v-size--x-small{border-radius:8px;font-size:10px;height:16px}.v-chip.v-size--small{border-radius:11px;font-size:12px;height:22px}.v-chip.v-size--default{border-radius:16px;font-size:14px;height:32px}.v-chip.v-size--large{border-radius:27px;font-size:16px;height:54px}.v-chip.v-size--x-large{border-radius:33px;font-size:18px;height:66px}',""]),t.exports=o},472:function(t,e,n){"use strict";n(13),n(11),n(21),n(16),n(22);var o=n(15),r=n(2),c=(n(5),n(17),n(463),n(36)),l=n(462),h=n(198),v=n(91),d=n(199),f=n(73),m=n(129),y=n(162),x=n(134),_=n(18);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function C(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(v.a,x.a,y.a,f.a,Object(d.a)("chipGroup"),Object(m.b)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return C(C(C(C({"v-chip":!0},y.a.options.computed.classes.call(this)),{},{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses),this.sizeableClasses),this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(y.a.options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this;[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]].forEach((function(e){var n=Object(o.a)(e,2),r=n[0],c=n[1];t.$attrs.hasOwnProperty(r)&&Object(_.a)(r,c,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(h.a,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(l.b,t)},genClose:function(){var t=this;return this.$createElement(h.a,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],n=this.generateRouteLink(),o=n.tag,data=n.data;data.attrs=C(C({},data.attrs),{},{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:data.attrs.tabindex}),data.directives.push({name:"show",value:this.active}),data=this.setBackgroundColor(this.color,data);var r=this.textColor||this.outlined&&this.color;return t(o,this.setTextColor(r,data),e)}})},594:function(t,e,n){"use strict";n.r(e);var o={name:"UiChip",data:function(){return{}},methods:{}},r=n(53),c=n(62),l=n.n(c),h=n(472),v=n(453),d=n(459),f=n(191),m=n(455),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mini-spacer"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"ui-title font-weight-bold"},[t._v("\n              Chip\n            ")]),t._v(" "),n("p",[t._v("\n              Here you can check Demos we created based on WrapKit. Its quite\n              easy to Create your own dream website & dashboard in No-time.\n            ")])])])],1)],1)],1),t._v(" "),n("div",[n("v-container",[n("div",{staticClass:"text-center"},[n("v-chip",{staticClass:"ma-2"},[t._v("\n          Default\n        ")]),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"primary"}},[t._v("\n          primary\n        ")]),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"accent"}},[t._v("\n          accent\n        ")]),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"secondary"}},[t._v("\n          secondary\n        ")]),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"error","text-color":"white"}},[t._v("\n          error\n        ")]),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"success","text-color":"white"}},[t._v("\n          success\n        ")]),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"warning","text-color":"white"}},[t._v("\n          warning\n        ")])],1),t._v(" "),n("div",{staticClass:"text-center mt-12"},[n("v-chip",{staticClass:"ma-2",attrs:{color:"primary",label:""}},[t._v("\n          Label\n        ")]),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"accent",label:""}},[t._v("\n          Label\n        ")]),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"warning",label:"","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-label\n          ")]),t._v("\n          Tags\n        ")],1),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{color:"error",label:""}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-account-circle-outline\n          ")]),t._v("\n          John Leider\n        ")],1),t._v(" "),n("v-chip",{staticClass:"ma-2",attrs:{close:"",color:"success",label:"","text-color":"white"}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-twitter\n          ")]),t._v("\n          New Tweets\n        ")],1)],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;l()(component,{VChip:h.a,VCol:v.a,VContainer:d.a,VIcon:f.a,VRow:m.a})}}]);