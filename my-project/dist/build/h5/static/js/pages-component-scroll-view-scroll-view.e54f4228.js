(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[5549],{94193:function(t,i,l){var e=l(64886);e.__esModule&&(e=e.default),"string"===typeof e&&(e=[[t.id,e,""]]),e.locals&&(t.exports=e.locals);var n=l(56).Z;n("45b989d2",e,!0,{sourceMap:!1,shadowMode:!1})},91742:function(t,i,l){"use strict";var e;l.d(i,{Z:function(){return v}});var n,o=function(){var t=this,i=t.$createElement,l=t._self._c||i;return l("v-uni-view",{staticClass:"common-page-head"},[l("v-uni-view",{staticClass:"common-page-head-title"},[t._v(t._s(t.title))])],1)},s=[],a={name:"page-head",props:{title:{type:String,default:""}}},c=a,r=l(69453),u=(0,r.Z)(c,o,s,!1,null,null,null,!1,e,n),v=u.exports},33850:function(t,i,l){"use strict";l.r(i),l.d(i,{default:function(){return v}});var e,n={pageHead:l(91742).Z},o=function(){var t=this,i=t.$createElement,l=t._self._c||i;return l("v-uni-view",[l("page-head",{attrs:{title:"scroll-view,区域滚动视图"}}),l("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[l("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Vertical Scroll"),l("v-uni-text",[t._v("\\n纵向滚动")])],1),l("v-uni-view",[l("v-uni-scroll-view",{staticClass:"scroll-Y",attrs:{"scroll-top":t.scrollTop,"scroll-y":"true"},on:{scrolltoupper:function(i){arguments[0]=i=t.$handleEvent(i),t.upper.apply(void 0,arguments)},scrolltolower:function(i){arguments[0]=i=t.$handleEvent(i),t.lower.apply(void 0,arguments)},scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[l("v-uni-view",{staticClass:"scroll-view-item uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),l("v-uni-view",{staticClass:"scroll-view-item uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),l("v-uni-view",{staticClass:"scroll-view-item uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),l("v-uni-view",{staticClass:"uni-link uni-center uni-common-mt",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goTop.apply(void 0,arguments)}}},[t._v("点击这里返回顶部")]),l("v-uni-view",{staticClass:"uni-title uni-common-mt"},[t._v("Horizontal Scroll"),l("v-uni-text",[t._v("\\n横向滚动")])],1),l("v-uni-view",[l("v-uni-scroll-view",{staticClass:"scroll-view_H",attrs:{"scroll-x":"true","scroll-left":"120"},on:{scroll:function(i){arguments[0]=i=t.$handleEvent(i),t.scroll.apply(void 0,arguments)}}},[l("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-red",attrs:{id:"demo1"}},[t._v("A")]),l("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-green",attrs:{id:"demo2"}},[t._v("B")]),l("v-uni-view",{staticClass:"scroll-view-item_H uni-bg-blue",attrs:{id:"demo3"}},[t._v("C")])],1)],1),l("v-uni-view",{staticClass:"uni-common-pb"})],1)],1)},s=[],a={data:function(){return{scrollTop:0,old:{scrollTop:0}}},methods:{upper:function(t){console.log(t)},lower:function(t){console.log(t)},scroll:function(t){console.log(t),this.old.scrollTop=t.detail.scrollTop},goTop:function(t){this.scrollTop=this.old.scrollTop,this.$nextTick((function(){this.scrollTop=0})),uni.showToast({icon:"none",title:"纵向滚动 scrollTop 值已被修改为 0"})}}},c=a,r=(l(94193),l(69453)),u=(0,r.Z)(c,o,s,!1,null,"5a471886",null,!1,n,e),v=u.exports},64886:function(t,i,l){"use strict";l.r(i);var e=l(43481),n=l.n(e),o=l(2400),s=l.n(o),a=s()(n());a.push([t.id,".scroll-Y[data-v-5a471886]{height:%?300?%}.scroll-view_H[data-v-5a471886]{white-space:nowrap;width:100%}.scroll-view-item[data-v-5a471886]{height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}.scroll-view-item_H[data-v-5a471886]{display:inline-block;width:100%;height:%?300?%;line-height:%?300?%;text-align:center;font-size:%?36?%}",""]),i["default"]=a}}]);