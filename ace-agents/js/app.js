(function(e){function t(t){for(var n,a,s=t[0],c=t[1],u=t[2],d=0,l=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&l.push(i[a][0]),i[a]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);p&&p(t);while(l.length)l.shift()();return o.push.apply(o,u||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var s=r[a];0!==i[s]&&(n=!1)}n&&(o.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},a={app:0},i={app:0},o=[];function s(e){return c.p+"js/"+({"dashboard-index~recordings-index~review-index":"dashboard-index~recordings-index~review-index","dashboard-index":"dashboard-index","recordings-index~review-index":"recordings-index~review-index","recordings-index":"recordings-index","review-index":"review-index",index:"index","review-id":"review-id"}[e]||e)+".js"}function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"dashboard-index~recordings-index~review-index":1,"recordings-index~review-index":1,"review-id":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise((function(t,r){for(var n="css/"+({"dashboard-index~recordings-index~review-index":"dashboard-index~recordings-index~review-index","dashboard-index":"dashboard-index","recordings-index~review-index":"recordings-index~review-index","recordings-index":"recordings-index","review-index":"review-index",index:"index","review-id":"review-id"}[e]||e)+".css",i=c.p+n,o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var u=o[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===n||d===i))return t()}var l=document.getElementsByTagName("style");for(s=0;s<l.length;s++){u=l[s],d=u.getAttribute("data-href");if(d===n||d===i)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var n=t&&t.target&&t.target.src||i,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],p.parentNode.removeChild(p),r(o)},p.href=i;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var n=i[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,r){n=i[e]=[t,r]}));t.push(n[2]=o);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var l=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(p);var r=i[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,r[1](l)}i[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:d})}),12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=d;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"4d39":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e");n["a"].prototype.$vars={appName:document.title,appApi:"http://sdaw01:6013/"};var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[e.$store.getters["auth/isGuest"]?e._e():r("app-drawer"),e.$store.getters["auth/isGuest"]?e._e():r("app-toolbar"),r("v-main",[r("v-container",{staticClass:"py-6 py-lg-8 px-2 px-md-5",attrs:{fluid:""}},[r("h2",{staticClass:"headline mb-5 px-4 px-md-0"},[e._v(e._s(e.title))]),r("router-view")],1)],1)],1)},i=[],o=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app-bar",{directives:[{name:"click-outside",rawName:"v-click-outside",value:function(){return e.searchVisibilitySet(!1)},expression:"() => searchVisibilitySet(false)"}],attrs:{app:"",dark:"",color:"tertiary"}},[r("v-app-bar-nav-icon",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.drawer.hidden,expression:"$store.state.drawer.hidden"}],on:{click:function(t){return e.$store.commit("drawer/setStatus",!0)}}}),r("app-logo",{directives:[{name:"show",rawName:"v-show",value:e.$store.state.drawer.collapsed||e.$store.state.drawer.hidden,expression:"$store.state.drawer.collapsed || $store.state.drawer.hidden"}],staticClass:"pl-1 pr-5"}),r("v-spacer",[r("v-slide-x-reverse-transition",[r("app-search",{directives:[{name:"show",rawName:"v-show",value:!e.searchCollapsed||e.searchVisible,expression:"!searchCollapsed || searchVisible"}],class:e.searchCollapsed?"this-overlay":void 0,attrs:{autofocus:e.searchCollapsed}})],1)],1),r("v-btn",{directives:[{name:"show",rawName:"v-show",value:e.searchCollapsed&&!e.searchVisible,expression:"searchCollapsed && !searchVisible"}],attrs:{icon:""},on:{click:function(t){return e.searchVisibilitySet(!e.searchVisible)}}},[r("v-icon",[e._v("mdi-magnify")])],1),r("v-btn",{staticClass:"ml-4",on:{click:function(t){return e.$store.dispatch("auth/signOut")}}},[e._v("Sign Out")])],1)},s=[],c=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"prj-logo text-truncate white--text",style:e.isDark?void 0:"font-weight: 500",attrs:{to:"/"}},[e._v("ACE AGENTS")])},u=[],d=r("7560"),l={name:"AppLogo",props:{dark:{type:Boolean,default:void 0},light:{type:Boolean,default:void 0}},mixins:[d["a"]]},p=l,f=(r("cb15"),r("2877")),m=Object(f["a"])(p,c,u,!1,null,null,null),v=m.exports,h=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"prj-search"},[r("v-text-field",e._b({attrs:{solo:"",flat:"",dense:"",light:!e.dark,"hide-details":"","full-width":"",placeholder:"Search Names, Emails, Reports, etc","prepend-inner-icon":"mdi-magnify"},on:{focus:e.onFocus,blur:e.onBlur}},"v-text-field",e.$attrs,!1))],1)},g=[],b={name:"AppSearch",data:function(){return{dark:!0}},methods:{onFocus:function(){console.log(111),this.dark=!1},onBlur:function(){this.dark=!0}}},w=b,x=(r("dd80"),r("6544")),k=r.n(x),y=r("8654"),_=Object(f["a"])(w,h,g,!1,null,null,null),O=_.exports;k()(_,{VTextField:y["a"]});var S={name:"AppToolbar",components:{AppLogo:v,AppSearch:O},data:function(){return{searchVisible:!1}},computed:{searchCollapsed:function(){return this.$vuetify.breakpoint.xs}},watch:{searchCollapsed:function(){this.searchVisibilitySet(!1)}},methods:{searchVisibilitySet:function(e){this.searchVisible=!!e}}},j=S,C=(r("7dc5"),r("40dc")),A=r("5bc1"),R=r("8336"),T=r("132d"),V=r("0789"),$=r("2fa4"),N=r("269a"),E=r.n(N),I=r("a293"),M=Object(f["a"])(j,o,s,!1,null,"4525b407",null),P=M.exports;k()(M,{VAppBar:C["a"],VAppBarNavIcon:A["a"],VBtn:R["a"],VIcon:T["a"],VSlideXReverseTransition:V["e"],VSpacer:$["a"]}),E()(M,{ClickOutside:I["a"]});var F=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-navigation-drawer",{ref:"drawer",attrs:{app:"",dark:"",color:"secondary","expand-on-hover":e.collapsed},on:{"update:mini-variant":e.onDrawerUpdateMini},model:{value:e.status,callback:function(t){e.status=t},expression:"status"}},[r("v-app-bar",{attrs:{color:"tertiary"}},[e.hidden?r("v-app-bar-nav-icon",{on:{click:e.toggle}},[r("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.status,expression:"status"}]},[e._v("mdi-close")])],1):r("v-app-bar-nav-icon",{on:{click:e.toggleMini}},[r("v-icon",{directives:[{name:"show",rawName:"v-show",value:e.collapsed,expression:"collapsed"}]},[e._v("mdi-backburger mdi-rotate-180")]),r("v-icon",{directives:[{name:"show",rawName:"v-show",value:!e.collapsed,expression:"!collapsed"}]},[e._v("mdi-menu")])],1),r("app-logo",{directives:[{name:"show",rawName:"v-show",value:!e.hidden,expression:"!hidden"}],staticClass:"ml-1"})],1),r("app-menu")],1)},G=[],U=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-list",[e._l(e.links,(function(t){var n=t[0],a=t[1],i=t[2];return r("v-list-item",{key:n,attrs:{link:"",to:i}},[r("v-list-item-icon",[r("v-icon",[e._v(e._s(n))])],1),r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(a))])],1)],1)})),r("v-divider"),r("v-list-group",{attrs:{color:"","prepend-icon":"mdi-pound"},scopedSlots:e._u([{key:"activator",fn:function(){return[r("v-list-item-title",[e._v("dev")])]},proxy:!0}])},[r("div",{staticClass:"pl-14"},[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[e._v("Dark Mode")])],1),r("v-list-item-action",[r("v-switch",{model:{value:e.$vuetify.theme.dark,callback:function(t){e.$set(e.$vuetify.theme,"dark",t)},expression:"$vuetify.theme.dark"}})],1)],1)],1)])],2)},B=[],L={name:"AppMenu",data:function(){return{links:[["mdi-chart-arc","Dashboard","/dashboard"],["mdi-format-list-checks","Review Queue","/review"],["mdi-shield-account-outline","Agents","/agents"],["mdi-file-cabinet","Reports","/reports"],["mdi-voicemail","Recordings","/recordings"],["mdi-speedometer","Source Performance","/performance"],["mdi-cog","Settings","/settings"]]}}},D=L,H=r("ce7e"),J=r("8860"),q=r("56b0"),Z=r("da13"),W=r("1800"),z=r("5d23"),Y=r("34c3"),Q=r("b73d"),X=Object(f["a"])(D,U,B,!1,null,null,null),K=X.exports;k()(X,{VDivider:H["a"],VIcon:T["a"],VList:J["a"],VListGroup:q["a"],VListItem:Z["a"],VListItemAction:W["a"],VListItemContent:z["a"],VListItemIcon:Y["a"],VListItemTitle:z["b"],VSwitch:Q["a"]});var ee={name:"AppDrawer",components:{AppLogo:v,AppMenu:K},data:function(){return{drawer:null}},beforeMount:function(){this.collapsed=this.isCollapsed,this.hidden=this.isHidden},computed:{isCollapsed:function(){return this.$vuetify.breakpoint.md},isHidden:function(){return this.$vuetify.breakpoint.mobile&&!this.isCollapsed},status:{get:function(){return this.$store.state.drawer.status},set:function(e){this.$store.commit("drawer/setStatus",e)}},collapsed:{get:function(){return this.$store.state.drawer.collapsed},set:function(e){this.$store.commit("drawer/setCollapsed",e)}},hidden:{get:function(){return this.$store.state.drawer.hidden},set:function(e){this.$store.commit("drawer/setHidden",e)}}},watch:{isCollapsed:function(e){this.collapsed=!!e},isHidden:function(e){this.hidden=!!e}},methods:{onDrawerUpdateMini:function(e){e&&(this.$refs.drawer.isMouseover=!1)},toggle:function(){this.status=!this.status},toggleMini:function(){this.collapsed=!this.collapsed}}},te=ee,re=r("f774"),ne=Object(f["a"])(te,F,G,!1,null,null,null),ae=ne.exports;k()(ne,{VAppBar:C["a"],VAppBarNavIcon:A["a"],VIcon:T["a"],VNavigationDrawer:re["a"]});var ie={name:"App",components:{AppToolbar:P,AppDrawer:ae},data:function(){return{cards:["Today","Yesterday"]}},computed:{title:function(){var e=this.$route.meta;return e&&e.title||""}}},oe=ie,se=r("7496"),ce=r("a523"),ue=r("f6c4"),de=Object(f["a"])(oe,a,i,!1,null,null,null),le=de.exports;k()(de,{VApp:se["a"],VContainer:ce["a"],VMain:ue["a"]});var pe=r("9483");Object(pe["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});var fe=r("bc3a"),me=r.n(fe),ve=r("2106"),he=r.n(ve);me.a.defaults.baseURL=n["a"].prototype.$vars.appApi,n["a"].use(he.a,me.a);r("99af");var ge=r("8c4f"),be=r("db39");n["a"].use(ge["a"]);var we=new ge["a"]({mode:"hash",base:"",routes:be["a"]}),xe=n["a"].prototype.$vars.appName;we.afterEach((function(e){var t=e.meta,r=t&&t.title;document.title="".concat(r?r+" - ":"").concat(xe)}));var ke=we,ye=r("2f62"),_e=r("bfa9"),Oe=function(){return{status:null,hidden:!1,collapsed:!1}},Se={},je={},Ce={setStatus:function(e,t){e.status=!!t},setCollapsed:function(e,t){e.collapsed=!!t},setHidden:function(e,t){e.hidden=!!t}},Ae={namespaced:!0,state:Oe,getters:Se,actions:je,mutations:Ce},Re=(r("45fc"),r("b0c0"),r("d3b7"),r("96cf"),r("1da1")),Te=function(e){return!!e.name&&e.meta&&!0===e.meta.guest},Ve="clientHome",$e="clientDashboard",Ne=!1;ke.beforeEach((function(e,t,r){if(!Ne)return Ne=!0,Ye.dispatch("auth/_signIn").catch((function(){})).finally((function(){return r()}));r()})),ke.beforeEach((function(e,t,r){var n=e.matched.some((function(e){return!Te(e)}));if(Ye.getters["auth/isGuest"]){if(n)return r({name:Ve})}else if(!n)return r({name:$e});r()}));var Ee=function(){return{user:null,token:null}},Ie={isGuest:function(e){return!e.user}},Me={_signIn:function(e,t){return Object(Re["a"])(regeneratorRuntime.mark((function r(){var n,a,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.state.token,e.getters.isGuest,a=e.commit,i=e.dispatch,o=t?t.token:n,o){r.next=4;break}return r.abrupt("return",Promise.reject(new Error("Unknown token")));case 4:return i("api/setToken",o,{root:!0}),r.next=7,i("fetchUser").catch((function(e){return i("_signOut").finally((function(){throw e}))}));case 7:return r.next=9,a("setToken",o);case 9:if(!Te(ke.currentRoute)){r.next=12;break}return r.next=12,ke.push({name:$e});case 12:case"end":return r.stop()}}),r)})))()},fetchUser:function(e){return Object(Re["a"])(regeneratorRuntime.mark((function t(){var r,n,a,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.next=3,n("api/request","apiGetUser",{root:!0});case 3:if(t.t0=t.sent,t.t0){t.next=6;break}t.t0={};case 6:if(a=t.t0,i=a.user,!i){t.next=13;break}return t.next=11,r("setUser",i);case 11:t.next=14;break;case 13:return t.abrupt("return",Promise.reject(new Error("Unable to fetch user data")));case 14:case"end":return t.stop()}}),t)})))()},signIn:function(e){var t=arguments;return Object(Re["a"])(regeneratorRuntime.mark((function r(){var n,a,i,o,s,c,u,d;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.getters.isGuest,e.commit,a=e.dispatch,i=t.length>1&&void 0!==t[1]?t[1]:{},o=i.u,s=i.p,!n){r.next=15;break}return r.next=5,a("api/request",{apiGetTokenTest:{username:o,password:s}},{root:!0});case 5:if(r.t0=r.sent,r.t0){r.next=8;break}r.t0={};case 8:if(c=r.t0,u=c.access_token,d=c.token_type,u&&"bearer"===d){r.next=13;break}return r.abrupt("return",Promise.reject(new Error("Unknown token")));case 13:return r.next=15,a("_signIn",{token:u});case 15:case"end":return r.stop()}}),r)})))()},_signOut:function(e){return Object(Re["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.commit,n=e.dispatch,t.next=3,r("setToken");case 3:return t.next=5,r("setUser");case 5:n("api/setToken",null,{root:!0});case 6:case"end":return t.stop()}}),t)})))()},signOut:function(e){return Object(Re["a"])(regeneratorRuntime.mark((function t(){var r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(r=e.getters.isGuest,n=e.dispatch,r){t.next=7;break}return t.next=4,n("_signOut");case 4:if(Te(ke.currentRoute)){t.next=7;break}return t.next=7,ke.push({name:Ve});case 7:case"end":return t.stop()}}),t)})))()}},Pe={setUser:function(e,t){e.user=t||null},setToken:function(e,t){e.token=t||null}},Fe={namespaced:!0,state:Ee,getters:Ie,actions:Me,mutations:Pe},Ge=(r("c975"),r("4fad"),r("3835")),Ue=r("53ca"),Be={apiGetToken:{url:"accounts/login",method:"post"},apiGetUser:{mock:{user:{id:"123"}}},apiGetRecordings:{url:"api/recordings",method:"post"},apiGetRecordingsSummary:"api/recordings/summary/mtd",apiGetRecordingsFilters:"api/recordings/filters",apiGetTokenTest:{mock:{access_token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1bmlxdWVfbmFtZSI6Im90ZW1ub3YiLCJuYmYiOjE2MTI4MjgzODksImV4cCI6MTYxMjkxNDc4OSwiaWF0IjoxNjEyODI4Mzg5LCJpc3MiOiJJc3N1ZXIiLCJhdWQiOiJBdWRpZW5jZUlkIn0.LJQBoa7Mo3N_TSMMIxWkLyhl1Hi_IwqGAxP0lFxM3T8",token_type:"bearer"}},apiGetSummaryActiveCalls:{mock:function(){return new Promise((function(e){return setTimeout((function(){return e({activeCalls:{live:1,hour:25,diff:"20%"}})}),1e3)}))}},apiGetSummaryAwaitingCalls:{mock:function(){return new Promise((function(e){return setTimeout((function(){return e({awaitingCalls:{urgent:1,queued:25,completed:25,diff:"75%"}})}),1600)}))}},apiGetSummaryAgentUsage:{mock:function(){return new Promise((function(e){return setTimeout((function(){return e({agentUsage:{available:10,spent:25,diff:"44%",chart:[{label:"Capacity",value:80}]}})}),1e3)}))}},apiGetSummarySources:{mock:function(){return new Promise((function(e){return setTimeout((function(){return e({sources:{chart:[{label:"Source A",value:44060},{label:"Source B",value:39070},{label:"Source C",value:34054},{label:"Source D",value:23090},{label:"Source E",value:13090}]}})}),3e3)}))}},apiGetSummaryTrends:{mock:function(){return new Promise((function(e){return setTimeout((function(){return e({trends:{graph:[{label:"Source A",y:[16e3,8e3,12e3,2e3,18e3,23e3,1e4],x:["2018-09-01","2018-10-01","2018-11-01","2018-12-01","2019-01-01","2019-02-01","2019-03-01"]},{label:"Source B",y:[20100,5e3,15e3,12e3,16e3,1e4,5e3],x:["2018-09-01","2018-10-01","2018-11-01","2018-12-01","2019-01-01","2019-02-01","2019-03-01"]}]}})}),2e3)}))}},apiGetReview:{mock:function(){return new Promise((function(e){var t=[{date:"1990-06-20 08:03:00",priority:"Urgent",defect:"Speak to Human",phone:"970-153-5545",email:"test@axd.com",duration:"0:35",status:"Needs Review"},{date:"1990-06-21 08:03:00",priority:"Medium",defect:"Dead-End",phone:"970-153-5545",email:"test@axd.com",duration:"0:15",status:"Reviewed"},{date:"1990-06-22 08:03:00",priority:"Low",defect:"Language Difficulty",phone:"970-153-5545",email:"test@axd.com",duration:"0:00",status:"Feedback Provided"},{date:"1990-06-23 08:03:00",priority:"Urgent",defect:"Speak to Human",phone:"970-153-5545",email:"test@axd.com",duration:"0:35",status:"Needs Review"},{date:"1990-06-24 08:03:00",priority:"Urgent",defect:"Speak to Human",phone:"970-153-5545",email:"test@axd.com",duration:"0:35",status:"Needs Review"},{date:"1990-06-25 08:03:00",priority:"Urgent",defect:"Speak to Human",phone:"970-153-5545",email:"test@axd.com",duration:"0:35",status:"Needs Review"},{date:"1990-06-26 08:03:00",priority:"Urgent",defect:"Speak to Human",phone:"970-153-5545",email:"test@axd.com",duration:"0:35",status:"Needs Review"},{date:"1990-06-27 08:03:00",priority:"Urgent",defect:"Speak to Human",phone:"970-153-5545",email:"test@axd.com",duration:"0:35",status:"Needs Review"},{date:"1990-06-28 08:03:00",priority:"Urgent",defect:"Speak to Human",phone:"970-153-5545",email:"test@axd.com",duration:"0:35",status:"Needs Review"},{date:"1990-06-29 08:03:00",priority:"Urgent",defect:"Speak to Human",phone:"970-153-5545",email:"test@axd.com",duration:"0:35",status:"Needs Review"},{date:"1990-06-30 08:03:00",priority:"Urgent",defect:"Speak to Human",phone:"970-153-5545",email:"test@axd.com",duration:"0:35",status:"Needs Review"}];setTimeout((function(){return e({reviews:t})}),1e3)}))}},apiGetReviewSummary:{mock:function(){return new Promise((function(e,t){if(0===Math.floor(Math.random()*Math.floor(3)))return setTimeout((function(){return e()}),1e3);var r=new Error("test error");r.$repeatable=!0,setTimeout((function(){return t(r)}),1500)}))}},apiGetReviewFilters:{mock:function(){var e={filters:{date:{min:"2021-02-01T18:19:06.836Z",max:"2021-03-08T18:19:06.836Z"},dispositions:["string"],sources:["string"],subSources:["string"]}};return new Promise((function(t,r){setTimeout((function(){return t(e)}),2e3)}))}},apiGetReviewItem:{mock:function(e){var t=e.params;return{review:{id:t.id,name:"Item Name"}}}}},Le=["put","post","delete","patch"],De={},He=function(){return{}},Je={},qe={request:function(e,t){return Object(Re["a"])(regeneratorRuntime.mark((function r(){var n,a,i,o,s,c,u;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n=e.dispatch,a=JSON.stringify(t),!De[a]){r.next=4;break}return r.abrupt("return",De[a]);case 4:if(t&&("string"===typeof t?i=t:"object"===Object(Ue["a"])(t)&&(Array.isArray(t)||(s=Object.entries(t)[0]||[],c=Object(Ge["a"])(s,2),i=c[0],o=c[1]))),u=Be[i]||{},u="string"===typeof u?{url:u,method:"get"}:Object.assign({},Be[i]),o&&(Le.indexOf(u.method)>=0?u.data=Object.assign({},u.data,o):u.params=Object.assign({},u.params,o)),!u.mock){r.next=12;break}if("function"!==typeof u.mock){r.next=11;break}return r.abrupt("return",u.mock(u));case 11:return r.abrupt("return",JSON.parse(JSON.stringify(u.mock)));case 12:if(u.url){r.next=14;break}return r.abrupt("return",Promise.reject(new Error("Unknown '".concat(i,"' request"))));case 14:return r.prev=14,De[a]=me.a.request(u).then((function(e){var t=e.data;return t})).catch((function(e){var t=e&&e.request&&e.request.status;if(401===t)return n("auth/signOut",void 0,{root:!0});throw e.$repeatable=0===t||408===t||t>=500,e})).finally((function(){delete De[a]})),r.next=18,De[a];case 18:return r.abrupt("return",r.sent);case 21:return r.prev=21,r.t0=r["catch"](14),r.abrupt("return",Promise.reject(r.t0));case 24:case"end":return r.stop()}}),r,null,[[14,21]])})))()},setToken:function(e,t){me.a.defaults.headers.common.Authorization=t?"Bearer ".concat(t):void 0}},Ze={},We={namespaced:!0,state:He,getters:Je,actions:qe,mutations:Ze};n["a"].use(ye["a"]);var ze=new _e["a"]({key:"state",reducer:function(e){var t=e.auth,r=t.token;return{auth:{token:r},access:(new Date).getTime()}}}),Ye=new ye["a"].Store({strict:!0,modules:{auth:Fe,drawer:Ae,api:We},plugins:[ze.plugin]}),Qe=r("f309");n["a"].use(Qe["a"]);var Xe=new Qe["a"]({breakpoint:{mobileBreakpoint:"sm"},theme:{options:{customProperties:!0},themes:{light:{primary:"#3b86ff",secondary:"#43425d",error:"#ff6565"},dark:{}},_themes_defs:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}}),Ke=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.busy?"app-client-loader--busy":void 0},[e._t("static-top"),e.error?e._t("error",[r("data-loader-error",{attrs:{error:e.error}})],{error:e.error}):e._e(),null===e.loadedOnce?e._t("loading",[e._v("loading...")]):!0===e.loadedOnce?[e._t("default",null,{data:e.data,busy:e.busy}),e.busy?e._t("busy"):e._e()]:e._e()],2)},et=[],tt={props:{handler:{type:[Function,Object]},okMessage:{type:String}},components:{},data:function(){return{message:null,error:null,loadedOnce:null,busy:!1,data:void 0}},created:function(){var e=this;return Object(Re["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:case"end":return t.stop()}}),t)})))()},methods:{load:function(){var e=arguments,t=this;return Object(Re["a"])(regeneratorRuntime.mark((function r(){var n,a,i,o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:for(n=e.length,a=new Array(n),i=0;i<n;i++)a[i]=e[i];if(!t.busy){r.next=3;break}return r.abrupt("return");case 3:return t.setError(),t.setMessage(),t.loadedOnce&&(t.busy=!0),o=function(){!0!==t.loadedOnce&&(t.loadedOnce=null),t.load.apply(t,a)},r.prev=7,r.next=10,Promise.resolve(t.handler?t.handler.apply(t,a):void 0).then((function(e){t.data=e,t.okMessage&&t.setMessage(t.okMessage)})).catch((function(e){return t.setError(e,null,o)}));case 10:r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](7),t.setError(r.t0,null,o);case 15:t.busy=!1,t.loadedOnce=t.loadedOnce||!t.error;case 17:case"end":return r.stop()}}),r,null,[[7,12]])})))()},setError:function(e,t,r){if(void 0!==e){var n=e||{},a=n.$repeatable,i=n.$actions;this.error={repeat:a?r:null,actions:t||i||null,message:e+""}}else this.error=null},setMessage:function(e){this.message=void 0===e?null:e},setBusy:function(e){this.busy=!!e}}},rt=tt,nt=Object(f["a"])(rt,Ke,et,!1,null,null,null),at=nt.exports,it=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"q-mb-md"},[r("v-alert",{attrs:{type:"error",dense:!(!e.error.actions&&!e.error.repeat)},scopedSlots:e._u([{key:"prepend",fn:function(){return[r("v-icon",{staticClass:"mr-4"},[e._v("mdi-alert")])]},proxy:!0},{key:"append",fn:function(){return[e.error.actions?r("v-btn",{staticClass:"ml-4",on:{click:e.error.actions.handler}},[e._v(e._s(e.error.actions.label))]):e._e(),e.error.repeat?r("v-btn",{staticClass:"ml-2",attrs:{icon:"",title:"Repeat"},on:{click:function(t){return e.error.repeat()}}},[r("v-icon",[e._v("mdi-refresh")])],1):e._e()]},proxy:!0}])},[e._v(" "+e._s(e.error.message||e.error||"")+" ")])],1)},ot=[],st={props:{error:{}}},ct=st,ut=r("0798"),dt=Object(f["a"])(ct,it,ot,!1,null,null,null),lt=dt.exports;k()(dt,{VAlert:ut["a"],VBtn:R["a"],VIcon:T["a"]}),n["a"].component("data-loader",at),n["a"].component("data-loader-error",lt);var pt=r("1321"),ft=r.n(pt);n["a"].use(ft.a),n["a"].component("apexchart",ft.a);var mt=r("7bb1"),vt=r("4c93");Object(mt["d"])("eager"),Object(mt["c"])("email",vt["c"]),Object(mt["c"])("required",vt["f"]),Object(mt["c"])("min",vt["e"]),Object(mt["c"])("max",vt["d"]),Object(mt["c"])("digits",vt["b"]),Object(mt["c"])("alpha_dash",vt["a"]);var ht=/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,32}$/;Object(mt["c"])("strong_password",(function(e){return ht.test(e)})),n["a"].component("ValidationProvider",mt["b"]);r("8fc0"),r("d5e8"),r("5363");n["a"].config.productionTip=!1,new n["a"]({router:ke,store:Ye,vuetify:Xe,render:function(e){return e(le)}}).$mount("#app")},"7dc5":function(e,t,r){"use strict";r("fad5")},"8fc0":function(e,t,r){},b94c:function(e,t,r){},cb15:function(e,t,r){"use strict";r("4d39")},dd80:function(e,t,r){"use strict";r("b94c")},fad5:function(e,t,r){}});
//# sourceMappingURL=app.js.map