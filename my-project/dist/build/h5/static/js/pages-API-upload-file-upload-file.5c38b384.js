(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[8232],{59219:function(e,t,a){var i=a(61779);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.id,i,""]]),i.locals&&(e.exports=i.locals);var n=a(56).Z;n("0f65b0dc",i,!0,{sourceMap:!1,shadowMode:!1})},91742:function(e,t,a){"use strict";var i;a.d(t,{Z:function(){return d}});var n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"common-page-head"},[a("v-uni-view",{staticClass:"common-page-head-title"},[e._v(e._s(e.title))])],1)},o=[],c={name:"page-head",props:{title:{type:String,default:""}}},l=c,u=a(69453),r=(0,u.Z)(l,s,o,!1,null,null,null,!1,i,n),d=r.exports},67333:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return d}});var i,n={pageHead:a(91742).Z},s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[a("v-uni-view",{staticClass:"demo"},[e.imageSrc?[a("v-uni-image",{staticClass:"image",attrs:{src:e.imageSrc,mode:"widthFix"}})]:[a("v-uni-view",{staticClass:"uni-hello-addfile",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.chooseImage.apply(void 0,arguments)}}},[e._v("+ 选择图片")])]],2)],1)],1)},o=[],c={data:function(){return{title:"uploadFile",imageSrc:""}},onUnload:function(){this.imageSrc=""},methods:{chooseImage:function(){var e=this;uni.chooseImage({count:1,sizeType:["compressed"],sourceType:["album"],success:function(t){console.log("chooseImage success, temp path is",t.tempFilePaths[0]);var a=t.tempFilePaths[0];uni.uploadFile({url:"https://unidemo.dcloud.net.cn/upload",filePath:a,fileType:"image",name:"data",success:function(t){console.log("uploadImage success, res is:",t),uni.showToast({title:"上传成功",icon:"success",duration:1e3}),e.imageSrc=a},fail:function(e){console.log("uploadImage fail",e),uni.showModal({content:e.errMsg,showCancel:!1})}})},fail:function(e){console.log("chooseImage fail",e)}})}}},l=c,u=(a(59219),a(69453)),r=(0,u.Z)(l,s,o,!1,null,"789a2834",null,!1,n,i),d=r.exports},61779:function(e,t,a){"use strict";a.r(t);var i=a(43481),n=a.n(i),s=a(2400),o=a.n(s),c=o()(n());c.push([e.id,".image[data-v-789a2834]{width:100%}.demo[data-v-789a2834]{background:#fff;padding:%?50?%}",""]),t["default"]=c}}]);