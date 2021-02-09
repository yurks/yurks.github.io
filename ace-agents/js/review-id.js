(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["review-id"],{"1f09":function(t,e,a){},3129:function(t,e,a){"use strict";a("a630"),a("c975"),a("d81d"),a("ac1f"),a("3ca3"),a("5319"),a("1276");var i=a("3835"),n=a("5530"),r=(a("1f09"),a("c995")),s=a("24b2"),o=a("7560"),l=a("58df"),c=a("80d2");e["a"]=Object(l["a"])(r["a"],s["a"],o["a"]).extend({name:"VSkeletonLoader",props:{boilerplate:Boolean,loading:Boolean,tile:Boolean,transition:String,type:String,types:{type:Object,default:function(){return{}}}},computed:{attrs:function(){return this.isLoading?this.boilerplate?{}:Object(n["a"])({"aria-busy":!0,"aria-live":"polite",role:"alert"},this.$attrs):this.$attrs},classes:function(){return Object(n["a"])(Object(n["a"])({"v-skeleton-loader--boilerplate":this.boilerplate,"v-skeleton-loader--is-loading":this.isLoading,"v-skeleton-loader--tile":this.tile},this.themeClasses),this.elevationClasses)},isLoading:function(){return!("default"in this.$scopedSlots)||this.loading},rootTypes:function(){return Object(n["a"])({actions:"button@2",article:"heading, paragraph",avatar:"avatar",button:"button",card:"image, card-heading","card-avatar":"image, list-item-avatar","card-heading":"heading",chip:"chip","date-picker":"list-item, card-heading, divider, date-picker-options, date-picker-days, actions","date-picker-options":"text, avatar@2","date-picker-days":"avatar@28",heading:"heading",image:"image","list-item":"text","list-item-avatar":"avatar, text","list-item-two-line":"sentences","list-item-avatar-two-line":"avatar, sentences","list-item-three-line":"paragraph","list-item-avatar-three-line":"avatar, paragraph",paragraph:"text@3",sentences:"text@2",table:"table-heading, table-thead, table-tbody, table-tfoot","table-heading":"heading, text","table-thead":"heading@6","table-tbody":"table-row-divider@6","table-row-divider":"table-row, divider","table-row":"table-cell@6","table-cell":"text","table-tfoot":"text@2, avatar@2",text:"text"},this.types)}},methods:{genBone:function(t,e){return this.$createElement("div",{staticClass:"v-skeleton-loader__".concat(t," v-skeleton-loader__bone")},e)},genBones:function(t){var e=this,a=t.split("@"),n=Object(i["a"])(a,2),r=n[0],s=n[1],o=function(){return e.genStructure(r)};return Array.from({length:s}).map(o)},genStructure:function(t){var e=[];t=t||this.type||"";var a=this.rootTypes[t]||"";if(t===a);else{if(t.indexOf(",")>-1)return this.mapBones(t);if(t.indexOf("@")>-1)return this.genBones(t);a.indexOf(",")>-1?e=this.mapBones(a):a.indexOf("@")>-1?e=this.genBones(a):a&&e.push(this.genStructure(a))}return[this.genBone(t,e)]},genSkeleton:function(){var t=[];return this.isLoading?t.push(this.genStructure()):t.push(Object(c["s"])(this)),this.transition?this.$createElement("transition",{props:{name:this.transition},on:{afterEnter:this.resetStyles,beforeEnter:this.onBeforeEnter,beforeLeave:this.onBeforeLeave,leaveCancelled:this.resetStyles}},t):t},mapBones:function(t){return t.replace(/\s/g,"").split(",").map(this.genStructure)},onBeforeEnter:function(t){this.resetStyles(t),this.isLoading&&(t._initialStyle={display:t.style.display,transition:t.style.transition},t.style.setProperty("transition","none","important"))},onBeforeLeave:function(t){t.style.setProperty("display","none","important")},resetStyles:function(t){t._initialStyle&&(t.style.display=t._initialStyle.display||"",t.style.transition=t._initialStyle.transition,delete t._initialStyle)}},render:function(t){return t("div",{staticClass:"v-skeleton-loader",attrs:this.attrs,on:this.$listeners,class:this.classes,style:this.isLoading?this.measurableStyles:void 0},[this.genSkeleton()])}})},"615b":function(t,e,a){},"77aa":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("data-loader",{attrs:{handler:t.loadItem},scopedSlots:t._u([{key:"loading",fn:function(){return[a("v-card",[a("v-skeleton-loader",{attrs:{type:"article,actions"}})],1)]},proxy:!0},{key:"default",fn:function(e){var i=e.data;void 0===i&&(i={});var n=i.review;return[a("v-card",[a("v-card-text",[t._v(" "+t._s(n)+" ")])],1)]}}])})],1)},n=[],r=a("5530"),s={name:"QueueItem",components:{},data:function(){return{dialog:!0}},methods:{loadItem:function(){return console.log(this.$route),this.$store.dispatch("api/request",{apiGetReviewItem:{params:Object(r["a"])({},this.$route.params)}})}}},o=s,l=a("2877"),c=a("8130"),d=a.n(c),u=a("6544"),h=a.n(u),p=a("b0af"),v=a("99d9"),f=a("3129"),g=Object(l["a"])(o,i,n,!1,null,null,null);"function"===typeof d.a&&d()(g);e["default"]=g.exports;h()(g,{VCard:p["a"],VCardText:v["b"],VSkeletonLoader:f["a"]})},8130:function(t,e){},"99d9":function(t,e,a){"use strict";a.d(e,"a",(function(){return r})),a.d(e,"b",(function(){return o})),a.d(e,"c",(function(){return l}));var i=a("b0af"),n=a("80d2"),r=Object(n["i"])("v-card__actions"),s=Object(n["i"])("v-card__subtitle"),o=Object(n["i"])("v-card__text"),l=Object(n["i"])("v-card__title");i["a"]},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var i=a("5530"),n=(a("615b"),a("10d2")),r=a("297c"),s=a("1c87"),o=a("58df");e["a"]=Object(o["a"])(r["a"],s["a"],n["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return Object(i["a"])(Object(i["a"])({"v-card":!0},s["a"].options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},n["a"].options.computed.classes.call(this))},styles:function(){var t=Object(i["a"])({},n["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=r["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,i=e.data;return i.style=this.styles,this.isClickable&&(i.attrs=i.attrs||{},i.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,i),[this.genProgress(),this.$slots.default])}})}}]);
//# sourceMappingURL=review-id.js.map