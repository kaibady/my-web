(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-18db6c5b"],{"06c5":function(t,e,n){t.exports=n("02bd")(93)},7014:function(t,e,n){"use strict";var i=n("eb76"),s=n.n(i);s.a},c562:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg"},[n("my-login",{attrs:{logo:t.logo,title:"MyUI演示系统",center:"",login:t.login},on:{success:t.handleSuccess}},[n("div",{attrs:{slot:"footer"},slot:"footer"},[t._v("任意账号和密码可登录")])]),n("Wave",{attrs:{width:"100%",height:"100%"}})],1)},s=[],o=(n("d3b7"),n("a17f"),n("a488"),n("b018")),c=n("2b0e"),r=n("f8ac"),u=n.n(r),a=n("2c74"),l={mixins:[Object(a["a"])()],components:{Wave:function(){return n.e("chunk-8be8d9d6").then(n.bind(null,"6348"))}},props:{logo:{type:String,default:u.a},urlQueryName:{type:String,default:"url"},defaultUrl:{type:String,default:"/"}},methods:{login:function(t){t.account,t.password;return new Promise((function(t,e){setTimeout((function(){t({id:123,token:"abc"})}),300)}))},handleSuccess:function(t){this.$access&&(this.$access.login(t),this.redirect())},isSelf:function(t){var e=this.$route,n=e.fullPath,i=e.path;return t===n||t===i||t===window.location.href},redirect:function(){var t=this.$route.query[this.urlQueryName]||this.defaultUrl,e=decodeURIComponent(t);if(!this.isSelf(e)){var n=/^http(s)?:\/\/.+/;n.test(e)?window.location.href=e:this.$router.push(e)}}},created:function(){this.$access&&this.$access.isLogin()&&this.redirect()}};c["default"].use(o["a"]);var d=l,f=(n("7014"),n("2877")),h=Object(f["a"])(d,i,s,!1,null,"381ece1c",null);e["default"]=h.exports},eb76:function(t,e,n){}}]);
//# sourceMappingURL=chunk-18db6c5b.73f0fbdc.js.map