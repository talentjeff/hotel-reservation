(self["webpackChunkmy_project"]=self["webpackChunkmy_project"]||[]).push([[8111],{80312:function(t,e,n){var i=n(9692);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=n(56).Z;a("0b756280",i,!0,{sourceMap:!1,shadowMode:!1})},23508:function(t,e,n){var i=n(16425);i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.id,i,""]]),i.locals&&(t.exports=i.locals);var a=n(56).Z;a("663c8204",i,!0,{sourceMap:!1,shadowMode:!1})},78111:function(t,e,n){"use strict";n.d(e,{Z:function(){return y}});var i,a,r,o={uniIcons:n(37446).Z},s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-navbar",class:{"uni-dark":t.dark,"uni-nvue-fixed":t.fixed}},[n("v-uni-view",{staticClass:"uni-navbar__content",class:{"uni-navbar--fixed":t.fixed,"uni-navbar--shadow":t.shadow,"uni-navbar--border":t.border},style:{"background-color":t.themeBgColor}},[t.statusBar?n("status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__header",style:{color:t.themeColor,backgroundColor:t.themeBgColor,height:t.navbarHeight}},[n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-left",style:{width:t.leftIconWidth},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickLeft.apply(void 0,arguments)}}},[t._t("left",[t.leftIcon.length>0?n("v-uni-view",{staticClass:"uni-navbar__content_view"},[n("uni-icons",{attrs:{color:t.themeColor,type:t.leftIcon,size:"20"}})],1):t._e(),t.leftText.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text",class:{"uni-navbar-btn-icon-left":!t.leftIcon.length>0}},[n("v-uni-text",{style:{color:t.themeColor,fontSize:"12px"}},[t._v(t._s(t.leftText))])],1):t._e()])],2),n("v-uni-view",{staticClass:"uni-navbar__header-container ",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickTitle.apply(void 0,arguments)}}},[t._t("default",[t.title.length>0?n("v-uni-view",{staticClass:"uni-navbar__header-container-inner"},[n("v-uni-text",{staticClass:"uni-nav-bar-text uni-ellipsis-1",style:{color:t.themeColor}},[t._v(t._s(t.title))])],1):t._e()])],2),n("v-uni-view",{staticClass:"uni-navbar__header-btns uni-navbar__header-btns-right",style:{width:t.rightIconWidth},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClickRight.apply(void 0,arguments)}}},[t._t("right",[t.rightIcon.length?n("v-uni-view",[n("uni-icons",{attrs:{color:t.themeColor,type:t.rightIcon,size:"22"}})],1):t._e(),t.rightText.length&&!t.rightIcon.length?n("v-uni-view",{staticClass:"uni-navbar-btn-text"},[n("v-uni-text",{staticClass:"uni-nav-bar-right-text",style:{color:t.themeColor}},[t._v(t._s(t.rightText))])],1):t._e()])],2)],1)],1),t.fixed?n("v-uni-view",{staticClass:"uni-navbar__placeholder"},[t.statusBar?n("status-bar"):t._e(),n("v-uni-view",{staticClass:"uni-navbar__placeholder-view",style:{height:t.navbarHeight}})],1):t._e()],1)},l=[],u=(n(79288),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"uni-status-bar",style:{height:t.statusBarHeight}},[t._t("default")],2)}),d=[],c={name:"UniStatusBar",data:function(){return{statusBarHeight:20}},mounted:function(){this.statusBarHeight=uni.getSystemInfoSync().statusBarHeight+"px"}},h=c,f=(n(23508),n(69453)),v=(0,f.Z)(h,u,d,!1,null,"90ccf07e",null,!1,i,a),p=v.exports,b=function(t){return"number"===typeof t?t+"px":t},g={name:"UniNavBar",components:{statusBar:p},emits:["clickLeft","clickRight","clickTitle"],props:{dark:{type:Boolean,default:!1},title:{type:String,default:""},leftText:{type:String,default:""},rightText:{type:String,default:""},leftIcon:{type:String,default:""},rightIcon:{type:String,default:""},fixed:{type:[Boolean,String],default:!1},color:{type:String,default:""},backgroundColor:{type:String,default:""},statusBar:{type:[Boolean,String],default:!1},shadow:{type:[Boolean,String],default:!1},border:{type:[Boolean,String],default:!0},height:{type:[Number,String],default:44},leftWidth:{type:[Number,String],default:60},rightWidth:{type:[Number,String],default:60},stat:{type:[Boolean,String],default:""}},computed:{themeBgColor:function(){return this.dark?this.backgroundColor?this.backgroundColor:this.dark?"#333":"#FFF":this.backgroundColor||"#FFF"},themeColor:function(){return this.dark?this.color?this.color:this.dark?"#fff":"#333":this.color||"#333"},navbarHeight:function(){return b(this.height)},leftIconWidth:function(){return b(this.leftWidth)},rightIconWidth:function(){return b(this.rightWidth)}},mounted:function(){uni.report&&this.stat&&""!==this.title&&uni.report("title",this.title)},methods:{onClickLeft:function(){this.$emit("clickLeft")},onClickRight:function(){this.$emit("clickRight")},onClickTitle:function(){this.$emit("clickTitle")}}},_=g,x=(n(80312),(0,f.Z)(_,s,l,!1,null,"db825918",null,!1,o,r)),y=x.exports},9692:function(t,e,n){"use strict";n.r(e);var i=n(43481),a=n.n(i),r=n(2400),o=n.n(r),s=o()(a());s.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-nav-bar-text[data-v-db825918]{font-size:14px}.uni-nav-bar-right-text[data-v-db825918]{font-size:12px}.uni-navbar__content[data-v-db825918]{position:relative;background-color:initial}.uni-navbar-btn-text[data-v-db825918]{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;line-height:12px}.uni-navbar__header[data-v-db825918]{display:flex;padding:0 10px;flex-direction:row;height:44px;font-size:12px}.uni-navbar__header-btns[data-v-db825918]{overflow:hidden;display:flex;flex-wrap:nowrap;flex-direction:row;width:%?120?%;justify-content:center;align-items:center;cursor:pointer}.uni-navbar__header-btns-left[data-v-db825918]{display:flex;width:%?120?%;justify-content:flex-start;align-items:center}.uni-navbar__header-btns-right[data-v-db825918]{display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-navbar__header-container[data-v-db825918]{display:flex;flex:1;padding:0 10px;overflow:hidden}.uni-navbar__header-container-inner[data-v-db825918]{display:flex;flex:1;flex-direction:row;align-items:center;justify-content:center;font-size:12px;overflow:hidden}.uni-navbar__placeholder-view[data-v-db825918]{height:44px}.uni-navbar--fixed[data-v-db825918]{position:fixed;z-index:998;left:var(--window-left);right:var(--window-right)}.uni-navbar--shadow[data-v-db825918]{box-shadow:0 1px 6px #ccc}.uni-navbar--border[data-v-db825918]{border-bottom-width:%?1?%;border-bottom-style:solid;border-bottom-color:#eee}.uni-ellipsis-1[data-v-db825918]{overflow:hidden;white-space:nowrap;text-overflow:ellipsis}',""]),e["default"]=s},16425:function(t,e,n){"use strict";n.r(e);var i=n(43481),a=n.n(i),r=n(2400),o=n.n(r),s=o()(a());s.push([t.id,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-status-bar[data-v-90ccf07e]{height:20px}',""]),e["default"]=s}}]);