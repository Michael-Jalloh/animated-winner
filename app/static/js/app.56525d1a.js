(function(e){function t(t){for(var r,i,s=t[0],u=t[1],c=t[2],l=0,f=[];l<s.length;l++)i=s[l],a[i]&&f.push(a[i][0]),a[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);p&&p(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var u=n[i];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function i(e){return s.p+"../../backend/app/static/js/"+({about:"about"}[e]||e)+"."+{about:"2869d36e"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n=a[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise(function(t,r){n=a[e]=[t,r]});t.push(n[2]=r);var o,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e),o=function(t){u.onerror=u.onload=null,clearTimeout(c);var n=a[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+r+": "+o+")");i.type=r,i.request=o,n[1](i)}a[e]=void 0}};var c=setTimeout(function(){o({type:"timeout",target:u})},12e4);u.onerror=u.onload=o,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],c=u.push.bind(u);u.push=t,u=u.slice();for(var l=0;l<u.length;l++)t(u[l]);var p=c;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=(n("d1e7"),n("585e"),n("bb71"));n("da64");r["a"].use(a["a"],{iconfont:"md"});var o=n("8c4f"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("v-toolbar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"headline text-uppercase"},[n("span",{on:{click:function(t){e.push("/")}}},[e._v("Tech")]),n("span",{staticClass:"font-weight-light",on:{click:function(t){e.push("about")}}},[e._v("Solutions")])]),n("v-spacer"),n("v-btn",{attrs:{flat:""},on:{click:function(t){e.push("/login")}}},[n("span",{staticClass:"mr-2"},[e._v("Latest Release")])])],1),n("v-content",[n("router-view")],1)],1)},s=[],u={methods:{push:function(e){this.$router.push(e)}}},c=u,l=n("2877"),p=n("6544"),f=n.n(p),d=n("8336"),h=n("549c"),m=n("9910"),v=n("71d9"),g=n("2a7f"),b=Object(l["a"])(c,i,s,!1,null,null,null);b.options.__file="View.vue";var w=b.exports;f()(b,{VBtn:d["a"],VContent:h["a"],VSpacer:m["a"],VToolbar:v["a"],VToolbarTitle:g["a"]});var x=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-container",[r("v-layout",{attrs:{"text-xs-center":"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-img",{staticClass:"my-3",attrs:{src:n("cf05"),contain:"",height:"200"}})],1),r("v-flex",{attrs:{"mb-4":""}},[r("h1",{staticClass:"display-2 font-weight-bold mb-3"},[e._v("\n              Welcome to Tech Solutions\n          ")]),r("p",{staticClass:"subheading font-weight-regular"},[r("a",{attrs:{href:"https://tech-solutions.ltd",target:"_blank"}},[e._v("Company")])])])],1)],1)},k=[],y={data:function(){return{}}},T=y,_=n("a523"),E=n("0e8f"),j=n("adda"),O=n("a722"),S=Object(l["a"])(T,x,k,!1,null,null,null);S.options.__file="Home.vue";var C=S.exports;f()(S,{VContainer:_["a"],VFlex:E["a"],VImg:j["a"],VLayout:O["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{},[n("v-container",{attrs:{"grid-list-md":"","text-xs-center":""}},[n("h1",{on:{click:e.home}},[e._v("Login")]),n("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[n("v-flex",{attrs:{xs4:""}},[n("v-text-field",{attrs:{name:"name",label:"Username"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),n("v-flex",{attrs:{xs4:""}},[n("v-text-field",{attrs:{name:"name",label:"Password",type:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1),n("v-flex",{attrs:{xs12:""}},[n("v-btn",{attrs:{color:"primary"},on:{click:e.handleSumbit}},[e._v("Sign In")])],1)],1)],1)],1)},V=[],I=n("cebc"),L=n("2f62"),P={name:"login",data:function(){return{email:"",password:""}},computed:Object(I["a"])({},Object(L["c"])("auth",["authenticating","authenticationError","authenticationErrorCode"])),methods:Object(I["a"])({},Object(L["b"])("auth",["login"]),{handleSumbit:function(){""!=this.email&&""!=this.password&&(this.login({email:this.email,password:this.password}),this.password="")},home:function(){this.$router.push("/")},handleSumbitTest:function(){alert(this.email+" "+this.password)}})},q=P,H=n("2677"),$=Object(l["a"])(q,R,V,!1,null,null,null);$.options.__file="Login.vue";var M=$.exports;f()($,{VBtn:d["a"],VContainer:_["a"],VFlex:E["a"],VLayout:O["a"],VTextField:H["a"]});var A=n("0a0d"),F=n.n(A),W="access_token",B="refresh_token",J="expires",U={getToken:function(){return F()()>this.getExpireTime()?"":localStorage.getItem(W)},saveToken:function(e){localStorage.setItem(W,e)},removeItem:function(){localStorage.removeItem(W)},getRefreshToken:function(){return localStorage.getItem(B)},saveRefreshToken:function(e){localStorage.setItem(B,e)},removeRefreshToken:function(){localStorage.removeItem(B)},getExpireTime:function(){return localStorage.getItem(J)},saveExpireTime:function(e){localStorage.setItem(J,F()()+e)},removeExpireTime:function(){localStorage.removeItem(J)}};r["a"].use(o["a"]);var z=new o["a"]({mode:"history",base:"/",routes:[{path:"/",component:w,children:[{path:"/",name:"Home",component:C,meta:{public:!0}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f8b7"))}}]},{path:"/login",name:"Login",component:M,meta:{public:!0,onlyWhenLoggedOut:!0}}]});z.beforeEach(function(e,t,n){var r=e.matched.some(function(e){return e.meta.public}),a=e.matched.some(function(e){return e.meta.onlyWhenLoggedOut}),o=!!U.getToken();return r||o?o&&a?n("/"):void n():n({path:"/login",query:{redirect:e.fullPath}})});var D=z,G=(n("96cf"),n("3b8d")),K=(n("7f7f"),n("d225")),N=n("308d"),Q=n("6bb5"),X=n("4e2b"),Y=n("f28b"),Z=n("bc3a"),ee=n.n(Z),te={init:function(e){ee.a.defaults.baseURL=e},setHeader:function(){ee.a.defaults.headers.common={}},get:function(e){return ee.a.get(e)},post:function(e,t){return ee.a.post(e,t)},put:function(e,t){return ee.a.put(e,t)},delete:function(e){return ee.a.delete(e)},customeRequest:function(e){return ee()(e)}},ne=te,re=function(e){function t(e,n){var r;return Object(K["a"])(this,t),r=Object(N["a"])(this,Object(Q["a"])(t).call(this,n)),r.name=r.constructor.name,r.message=n,r.errorCode=e,r}return Object(X["a"])(t,e),t}(Object(Y["a"])(Error)),ae={login:function(){var e=Object(G["a"])(regeneratorRuntime.mark(function e(t,n){var r,a;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r={method:"post",url:"/login",data:{username:t,password:n}},e.prev=1,e.next=4,ne.customeRequest(r);case 4:return a=e.sent,U.saveToken(a.data["data"]["access_token"]),U.saveRefreshToken(a.data["data"]["refresh_token"]),U.saveExpireTime(a.data["data"]["expires"]),ne.setHeader(),e.abrupt("return",a.data["data"]["access_token"]);case 12:throw e.prev=12,e.t0=e["catch"](1),new re(e.t0.response.status,e.t0.response.data.details);case 15:case"end":return e.stop()}},e,this,[[1,12]])}));function t(t,n){return e.apply(this,arguments)}return t}(),refreshToken:function(){var e=Object(G["a"])(regeneratorRuntime.mark(function e(){var t,n,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return t=U.getRefreshToken(),n={method:"post",url:"/refresh-token",data:{refreshToken:t}},e.prev=2,e.next=5,ne.customeRequest(n);case 5:return r=e.sent,U.saveToken(r.data["data"]["access_token"]),ne.setHeader(),e.abrupt("return",r.data["data"]["access_token"]);case 11:throw e.prev=11,e.t0=e["catch"](2),new re(e.t0.response.status,e.t0.response.data.detail);case 14:case"end":return e.stop()}},e,this,[[2,11]])}));function t(){return e.apply(this,arguments)}return t}(),logout:function(){U.removeToken(),U.removeRefreshToken(),U.removeExpireTime(),ne.removeHeader()}},oe={authenticating:!1,accessToken:U.getToken(),authenticationErrorCode:0,authenticationError:""},ie={loggedIn:function(e){return!!e.accessToken},authenticationErrorCode:function(e){return e.authenticationErrorCode},authenticationError:function(e){return e.authenticationError},authenticating:function(e){return e.authenticating}},se={login:function(){var e=Object(G["a"])(regeneratorRuntime.mark(function e(t,n){var r,a,o,i;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=t.commit,a=n.email,o=n.password,r("loginRequest"),e.prev=3,e.next=6,ae.login(a,o);case 6:return i=e.sent,r("loginSuccess",i),D.push(D.history.current.query.redirect||"/"),e.abrupt("return",!0);case 12:return e.prev=12,e.t0=e["catch"](3),e.t0 instanceof re&&r("loginError",{errorCode:e.t0.errorCode,errorMessage:e.t0.message}),e.abrupt("return",!1);case 16:case"end":return e.stop()}},e,this,[[3,12]])}));function t(t,n){return e.apply(this,arguments)}return t}(),logout:function(e){var t=e.commit;ae.logout(),t("logoutSuccess"),D.push("/login")}},ue={loginRequest:function(e){e.authenticating=!0,e.authenticationError="",e.authenticationErrorCode=""},loginSuccess:function(e,t){e.accessToken=t,e.authenticating=!1},loginError:function(e,t){var n=t.errorCode,r=t.errorMessage;e.authenticating=!1,e.authenticationErrorCode=n,e.authenticationError=r},logoutSuccess:function(e){e.accessToken=""}},ce={namespaced:!0,state:oe,getters:ie,actions:se,mutations:ue};r["a"].use(L["a"]);var le=new L["a"].Store({modules:{auth:ce}}),pe=le,fe=(n("bf40"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-content",[n("router-view")],1)],1)}),de=[],he={name:"App",data:function(){return{}},methods:{}},me=he,ve=(n("5c0b"),n("7496")),ge=Object(l["a"])(me,fe,de,!1,null,null,null);ge.options.__file="App.vue";var be=ge.exports;f()(ge,{VApp:ve["a"],VContent:h["a"]});var we=location.protocol+location.host+"/api/v1/";ne.init(we),U.getToken&&ne.setHeader(),r["a"].config.productionTip=!1,new r["a"]({router:D,store:pe,render:function(e){return e(be)}}).$mount("#app")},"585e":function(e,t,n){},"5c0b":function(e,t,n){"use strict";var r=n("6879"),a=n.n(r);a.a},6879:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"../../backend/app/static/img/logo.f8aa5fbf.png"}});
//# sourceMappingURL=app.56525d1a.js.map