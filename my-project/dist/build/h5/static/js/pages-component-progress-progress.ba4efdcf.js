(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[8951],{9199:function(t,e,s){var r=s(16808);r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.id,r,""]]),r.locals&&(t.exports=r.locals);var i=s(56).Z;i("7624f864",r,!0,{sourceMap:!1,shadowMode:!1})},91742:function(t,e,s){"use strict";var r;s.d(e,{Z:function(){return p}});var i,n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",{staticClass:"common-page-head"},[s("v-uni-view",{staticClass:"common-page-head-title"},[t._v(t._s(t.title))])],1)},a=[],o={name:"page-head",props:{title:{type:String,default:""}}},c=o,u=s(69453),l=(0,u.Z)(c,n,a,!1,null,null,null,!1,r,i),p=l.exports},87264:function(t,e,s){"use strict";s.r(e),s.d(e,{default:function(){return p}});var r,i={pageHead:s(91742).Z,uniIcons:s(37446).Z},n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-uni-view",[s("page-head",{attrs:{title:t.title}}),s("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[0],"show-info":!0,"stroke-width":"3"}})],1),s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[1],"stroke-width":"3"}}),s("uni-icons",{staticClass:"progress-cancel",attrs:{type:"close",color:"#dd524d"}})],1),s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[2],"stroke-width":"3"}})],1),s("v-uni-view",{staticClass:"progress-box"},[s("v-uni-progress",{attrs:{percent:t.pgList[3],activeColor:"#10AEFF","stroke-width":"3"}})],1),s("v-uni-view",{staticClass:"progress-control"},[s("v-uni-button",{attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.setProgress.apply(void 0,arguments)}}},[t._v("设置进度")]),s("v-uni-button",{attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clearProgress.apply(void 0,arguments)}}},[t._v("清除进度")])],1)],1)],1)},a=[],o={data:function(){return{title:"progress",pgList:[0,0,0,0]}},methods:{setProgress:function(){this.pgList=[20,40,60,80]},clearProgress:function(){this.pgList=[0,0,0,0]}}},c=o,u=(s(9199),s(69453)),l=(0,u.Z)(c,n,a,!1,null,"99fae8ca",null,!1,i,r),p=l.exports},16808:function(t,e,s){"use strict";s.r(e);var r=s(43481),i=s.n(r),n=s(2400),a=s.n(n),o=a()(i());o.push([t.id,".progress-box[data-v-99fae8ca]{display:flex;height:%?50?%;margin-bottom:%?60?%}.uni-icon[data-v-99fae8ca]{line-height:1.5}.progress-cancel[data-v-99fae8ca]{margin-left:%?40?%}.progress-control uni-button[data-v-99fae8ca]{margin-top:%?20?%}",""]),e["default"]=o}}]);