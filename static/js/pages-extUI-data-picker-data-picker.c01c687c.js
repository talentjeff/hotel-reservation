(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[753],{81625:function(e,t,n){var a=n(73354);a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.id,a,""]]),a.locals&&(e.exports=a.locals);var i=n(56).Z;i("26156fa4",a,!0,{sourceMap:!1,shadowMode:!1})},7259:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var a,i={uniCard:n(54074).Z,uniSection:n(46726).Z,uniDataPicker:n(37112).Z},l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"container"},[n("uni-card",{attrs:{"is-full":!0,"is-shadow":!1}},[n("v-uni-text",{staticClass:"uni-h6"},[e._v("标签组件多用于商品分类、重点内容显示等场景。")])],1),n("uni-section",{attrs:{title:"本地数据",type:"line"}},[n("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[n("uni-data-picker",{attrs:{placeholder:"请选择班级","popup-title":"请选择",localdata:e.classDataTree},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onchange.apply(void 0,arguments)},nodeclick:function(t){arguments[0]=t=e.$handleEvent(t),e.onnodeclick.apply(void 0,arguments)},popupopened:function(t){arguments[0]=t=e.$handleEvent(t),e.onpopupopened.apply(void 0,arguments)},popupclosed:function(t){arguments[0]=t=e.$handleEvent(t),e.onpopupclosed.apply(void 0,arguments)}},model:{value:e.classValue,callback:function(t){e.classValue=t},expression:"classValue"}})],1)],1),n("uni-section",{attrs:{title:"自定义插槽",type:"line"}},[n("v-uni-view",{staticClass:"uni-px-5 uni-pb-5"},[n("uni-data-picker",{attrs:{title:"请选择",localdata:e.classDataTree},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.error;t.options;return[n("v-uni-view",{staticClass:"input-border"},[i?n("v-uni-view",{staticClass:"error"},[n("v-uni-text",[e._v(e._s(i))])],1):a.length?n("v-uni-view",{staticClass:"input-selected"},e._l(a,(function(t,a){return n("v-uni-view",{key:a,staticClass:"selected-item"},[n("v-uni-text",[e._v(e._s(t.text))])],1)})),1):n("v-uni-view",[n("v-uni-text",[e._v("请选择")])],1)],1)]}}]),model:{value:e.classValue,callback:function(t){e.classValue=t},expression:"classValue"}})],1)],1)],1)},o=[],s={data:function(){return{nation:"汉族",address:"110101",classValue:"1-2",classDataTree:[{text:"一年级",value:"1-0",children:[{text:"1.1班",value:"1-1"},{text:"1.2班",value:"1-2"}]},{text:"二年级",value:"2-0",children:[{text:"2.1班",value:"2-1"},{text:"2.2班",value:"2-2"}]},{text:"三年级",value:"3-0",disable:!0}]}},methods:{onnodeclick:function(e){console.log("nodeclick",e)},onpopupopened:function(e){console.log("onpopupopened")},onpopupclosed:function(e){console.log("onpopupclosed")},onchange:function(e){console.log("onchange",e.detail.value)}}},u=s,c=(n(81625),n(69453)),p=(0,c.Z)(u,l,o,!1,null,"29140695",null,!1,i,a),d=p.exports},73354:function(e,t,n){"use strict";n.r(t);var a=n(43481),i=n.n(a),l=n(2400),o=n.n(l),s=o()(i());s.push([e.id,".container[data-v-29140695]{\r\n\t/* padding: 0 15px; */\r\ndisplay:flex;max-width:500px;\r\nflex-direction:column}.title[data-v-29140695]{font-size:14px;font-weight:700;margin:20px 0 5px 0}.input-border[data-v-29140695]{border:1px solid #b3e5fc;border-radius:5px;padding:2px 4px}.input-selected[data-v-29140695]{\r\ndisplay:flex;\r\nflex-direction:row;line-height:2}.data-pickerview[data-v-29140695]{height:300px;border:1px solid #e5e5e5;border-radius:5px;\r\noverflow:hidden\n}",""]),t["default"]=s}}]);