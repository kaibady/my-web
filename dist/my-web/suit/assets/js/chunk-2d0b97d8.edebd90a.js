(window["webpackJsonp_suit"]=window["webpackJsonp_suit"]||[]).push([["chunk-2d0b97d8"],{"32be":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("my-pro",{attrs:{menus:e.menus,mode:e.mode,title:"MyWeb v4.x","navbar-theme":e.navbarTheme,"sidebar-theme":e.sidebarTheme,fixed:e.fixed,collapsible:e.collapsible,rainbow:e.rainbow,"color-weak":e.colorWeak,tab:e.tab,breadcrumb:e.createBreadcrumb},scopedSlots:e._u([{key:"actions",fn:function(){return[a("UserAction",{attrs:{"dropdown-items":e.items,username:"Admin",extra:"超级管理员",avatar:{theme:"primary"}}}),a("IconAction",{attrs:{icon:"el-icon-message-solid",badge:12}}),a("IconAction",{attrs:{icon:"icon-poweroff",svg:""}})]},proxy:!0}])},[a("my-wrapper",{attrs:{title:"参数设置","sub-title":"子标题说明文字"}},[a("my-container",[a("el-form",{ref:"form",staticStyle:{padding:"20px"},attrs:{"label-width":"100px",size:"small"}},[a("el-form-item",{attrs:{label:"导航模式"}},[a("el-radio-group",{model:{value:e.mode,callback:function(t){e.mode=t},expression:"mode"}},[a("el-radio-button",{attrs:{label:"sidebar"}},[e._v("侧边菜单布局")]),a("el-radio-button",{attrs:{label:"navbar"}},[e._v("顶部菜单布局")]),a("el-radio-button",{attrs:{label:"both"}},[e._v("侧边+顶部菜单布局")])],1)],1),a("el-form-item",{attrs:{label:"侧边栏颜色"}},[a("el-radio-group",{model:{value:e.sidebarTheme,callback:function(t){e.sidebarTheme=t},expression:"sidebarTheme"}},[a("el-radio-button",{attrs:{label:"light"}},[e._v("浅色")]),a("el-radio-button",{attrs:{label:"dark"}},[e._v("深色")]),a("el-radio-button",{attrs:{label:"primary"}},[e._v("蓝色")]),a("el-radio-button",{attrs:{label:"gradual"}},[e._v("蓝色+渐变")]),a("el-radio-button",{attrs:{label:"black"}},[e._v("黑色")])],1)],1),a("el-form-item",{attrs:{label:"顶部颜色"}},[a("el-radio-group",{model:{value:e.navbarTheme,callback:function(t){e.navbarTheme=t},expression:"navbarTheme"}},[a("el-radio-button",{attrs:{label:"light"}},[e._v("浅色")]),a("el-radio-button",{attrs:{label:"dark"}},[e._v("深色")]),a("el-radio-button",{attrs:{label:"primary"}},[e._v("蓝色")]),a("el-radio-button",{attrs:{label:"gradual"}},[e._v("蓝色+渐变")]),a("el-radio-button",{attrs:{label:"black"}},[e._v("黑色")])],1)],1),a("el-form-item",{attrs:{label:"固定菜单栏"}},[a("el-switch",{model:{value:e.fixed,callback:function(t){e.fixed=t},expression:"fixed"}})],1),a("el-form-item",{attrs:{label:"开启折叠"}},[a("el-switch",{model:{value:e.collapsible,callback:function(t){e.collapsible=t},expression:"collapsible"}})],1),a("el-form-item",{attrs:{label:"开启导航Tab"}},[a("el-switch",{model:{value:e.tabEnabled,callback:function(t){e.tabEnabled=t},expression:"tabEnabled"}})],1),a("el-form-item",{attrs:{label:"开启面包屑"}},[a("el-switch",{model:{value:e.breadcrumbEnabled,callback:function(t){e.breadcrumbEnabled=t},expression:"breadcrumbEnabled"}})],1),a("el-form-item",{attrs:{label:"顶部彩虹边框"}},[a("el-switch",{model:{value:e.rainbow,callback:function(t){e.rainbow=t},expression:"rainbow"}})],1),a("el-form-item",{attrs:{label:"测试滚动条"}},[a("el-switch",{model:{value:e.scrollEnabled,callback:function(t){e.scrollEnabled=t},expression:"scrollEnabled"}})],1)],1),e.scrollEnabled?a("div",{staticStyle:{height:"1000px"}}):e._e()],1)],1)],1)},i=[],n=(a("1c8a"),a("a488"),a("b5e1")),o=(a("b4bd"),a("782d")),r=(a("25cd"),a("24e7"),a("b35b")),b=a.n(r),c=(a("41e0"),a("6ac5")),d=a.n(c),s=(a("72c1"),a("0d7b")),u=a.n(s),m=(a("3dce"),a("3787")),f=a.n(m),x=(a("4c8b"),a("4105")),p=a.n(x),h=(a("66ff"),a("4664")),v=a("2b0e"),k=(a("20cd"),h["a"]),w=k.IconAction,g=k.UserAction,_=[{icon:"el-icon-setting",text:"导航菜单一",index:"/one",badge:10},{icon:"el-icon-s-marketing",text:"导航菜单二",index:"/two",disabled:!0},{icon:"el-icon-s-data",text:"导航菜单三",index:"/three",badge:{value:123,max:9,type:"primary"},children:[{group:!0,title:"分组一",index:1,children:[{text:"选项一",icon:"el-icon-tickets",index:"/three/1",badge:{isDot:!0}},{text:"选项二",icon:"el-icon-tickets",index:"/three/2"}]},{group:!0,title:"分组二",index:2,children:[{text:"选项三",icon:"el-icon-tickets",index:"/three/3"},{text:"选项四",icon:"el-icon-tickets",index:"/three/4"}]}]},{icon:"el-icon-menu",text:"导航菜单四",index:"/four"},{icon:"el-icon-share",text:"导航菜单五",index:"/five",children:[{text:"选项一",icon:"el-icon-tickets",index:"/five/1"},{text:"选项二",icon:"el-icon-tickets",index:"/five/2"}]}],E={components:{MyPro:h["a"],IconAction:w,UserAction:g},data:function(){return{menus:_,mode:"sidebar",sidebarTheme:"light",navbarTheme:"light",fixed:!1,collapsible:!0,colorWeak:!1,rainbow:!0,tabEnabled:!0,breadcrumbEnabled:!1,scrollEnabled:!1,items:[{text:"个人信息",icon:"el-icon-setting"},{text:"退出",divided:!0}]}},computed:{tab:function(){return this.tabEnabled?{label:"首页",value:"/",icon:"el-icon-setting"}:null}},methods:{createBreadcrumb:function(){return this.breadcrumbEnabled?[{label:"首页",to:"/"},{label:"应用"},{label:"详情"}]:null}}};v["default"].use(p.a),v["default"].use(f.a),v["default"].use(u.a),v["default"].use(d.a),v["default"].use(b.a),v["default"].use(o["a"]),v["default"].use(h["a"]),v["default"].use(n["a"]);var y=E,T=a("2877"),A=Object(T["a"])(y,l,i,!1,null,"5210e286",null);t["default"]=A.exports}}]);