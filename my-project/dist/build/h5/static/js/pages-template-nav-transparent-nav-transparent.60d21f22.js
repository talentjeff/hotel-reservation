(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[6669],{1657:function(i,e,t){var n=t(24163);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[i.id,n,""]]),n.locals&&(i.exports=n.locals);var a=t(56).Z;a("31277bef",n,!0,{sourceMap:!1,shadowMode:!1})},31930:function(i,e,t){"use strict";var n;t.r(e),t.d(e,{default:function(){return o}});var a,s=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"page"},[i.showSwiper?i._e():t("v-uni-view",{staticClass:"img-view"},[t("v-uni-image",{attrs:{src:i.imgUrls[0]}})],1),i.showSwiper?t("v-uni-swiper",{attrs:{"indicator-dots":"true"}},i._l(i.imgUrls,(function(i,e){return t("v-uni-swiper-item",{key:e},[t("v-uni-image",{attrs:{src:i}})],1)})),1):i._e(),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[t("v-uni-view",[i._v("在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。")]),t("v-uni-view",[i._v("在微信小程序端，导航栏始终为不透明样式。")])],1),t("v-uni-view",{staticClass:"uni-title uni-common-mt"},[i._v("图片类型")])],1),t("v-uni-view",{staticClass:"uni-list"},[t("v-uni-radio-group",{on:{change:function(e){arguments[0]=e=i.$handleEvent(e),i.radioChange.apply(void 0,arguments)}}},i._l(i.items,(function(e,n){return t("v-uni-label",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[t("v-uni-view",[i._v(i._s(e.name))]),t("v-uni-view",[t("v-uni-radio",{attrs:{value:e.value,checked:e.checked}})],1)],1)})),1)],1),t("v-uni-view",{staticStyle:{height:"1000rpx"}})],1)},u=[],r={data:function(){return{showSwiper:!1,imgUrls:["../../../static/shuijiao.jpg","https://web-assets.dcloud.net.cn/unidoc/zh/muwu.jpg","https://web-assets.dcloud.net.cn/unidoc/zh/cbd.jpg"],items:[{value:"img",name:"静态图",checked:!0},{value:"swiper",name:"轮播图",checked:!1}]}},methods:{radioChange:function(i){this.showSwiper="swiper"===i.detail.value}}},c=r,v=(t(1657),t(69453)),l=(0,v.Z)(c,s,u,!1,null,"b07a8036",null,!1,n,a),o=l.exports},24163:function(i,e,t){"use strict";t.r(e);var n=t(43481),a=t.n(n),s=t(2400),u=t.n(s),r=u()(a());r.push([i.id,"uni-image[data-v-b07a8036],\nuni-swiper[data-v-b07a8036],\n.img-view[data-v-b07a8036]{width:%?750?%;width:100%;height:%?500?%}.page-section-title[data-v-b07a8036]{margin-top:%?50?%}",""]),e["default"]=r}}]);