(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[4798],{84766:function(t,e,i){var n=i(18840);n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.id,n,""]]),n.locals&&(t.exports=n.locals);var a=i(56).Z;a("2643fe34",n,!0,{sourceMap:!1,shadowMode:!1})},91742:function(t,e,i){"use strict";var n;i.d(e,{Z:function(){return v}});var a,o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"common-page-head"},[i("v-uni-view",{staticClass:"common-page-head-title"},[t._v(t._s(t.title))])],1)},l=[],s={name:"page-head",props:{title:{type:String,default:""}}},r=s,c=i(69453),u=(0,c.Z)(r,o,l,!1,null,null,null,!1,n,a),v=u.exports},5022:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return v}});var n,a={pageHead:i(91742).Z},o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("page-head",{attrs:{title:t.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"movable block"},[i("v-uni-movable-area",[i("v-uni-movable-view",{staticClass:"target",attrs:{direction:"all"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.getNodeInfo.apply(void 0,arguments)}}},[t._v("Drag")])],1)],1),i("v-uni-view",{staticClass:"movable"},[i("v-uni-view",{staticClass:"info"},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n},[i("v-uni-text",{staticClass:"b"},[t._v(t._s(e.key))]),i("v-uni-text",{staticClass:"span"},[t._v(t._s(e.val))])],1)})),1)],1)],1)],1)},l=[],s=(i(64043),i(70560),{data:function(){return{title:"createSelectorQuery",top:0,left:"0px",info:[]}},onReady:function(){this.getNodeInfo()},methods:{setPosition:function(){this.left=Math.random()*uni.upx2px(320)+"px",this.top=Math.random()*uni.upx2px(320)+"px",this.getNodeInfo()},getNodeInfo:function(){var t=this;uni.createSelectorQuery().select(".target").boundingClientRect().exec((function(e){var i=e[0];if(i){var n=["left","right","top","bottom","width","height"],a=[];for(var o in n){var l=n[o];a.push({key:l,val:i[l]})}t.info=a}}))}}}),r=s,c=(i(84766),i(69453)),u=(0,c.Z)(r,o,l,!1,null,"5e600282",null,!1,a,n),v=u.exports},18840:function(t,e,i){"use strict";i.r(e);var n=i(43481),a=i.n(n),o=i(2400),l=i.n(o),s=l()(a());s.push([t.id,".movable[data-v-5e600282]{display:flex;justify-content:center}.block[data-v-5e600282]{height:%?400?%;width:%?400?%;background-color:#fff;border:1px solid #ccc;position:relative;margin:0 auto;margin-bottom:%?30?%}uni-movable-area[data-v-5e600282]{height:%?400?%;width:%?400?%;position:relative}.target[data-v-5e600282]{height:%?80?%;width:%?80?%;line-height:%?80?%;text-align:center;color:#fff;background-color:#4cd964;font-size:%?28?%;position:absolute}.info[data-v-5e600282]{display:flex;flex-direction:column;justify-content:center;align-items:center}.b[data-v-5e600282]{font-weight:700;width:%?150?%;display:inline-block}.span[data-v-5e600282]{width:%?100?%;display:inline-block}",""]),e["default"]=s}}]);