(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2886ba34"],{"057f":function(t,e,a){var r=a("fc6a"),i=a("241c").f,s={}.toString,n="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return i(t)}catch(e){return n.slice()}};t.exports.f=function(t){return n&&"[object Window]"==s.call(t)?o(t):i(r(t))}},5530:function(t,e,a){"use strict";a.d(e,"a",(function(){return s}));a("a4d3"),a("4de4"),a("4160"),a("e439"),a("dbb4"),a("b64b"),a("159b");function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function i(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?i(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}},"746f":function(t,e,a){var r=a("428f"),i=a("5135"),s=a("e538"),n=a("9bf2").f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});i(e,t)||n(e,t,{value:s.f(t)})}},a4d3:function(t,e,a){"use strict";var r=a("23e7"),i=a("da84"),s=a("d066"),n=a("c430"),o=a("83ab"),c=a("4930"),l=a("fdbf"),u=a("d039"),d=a("5135"),f=a("e8b5"),b=a("861d"),p=a("825a"),v=a("7b0b"),m=a("fc6a"),h=a("c04e"),g=a("5c6c"),y=a("7c73"),_=a("df75"),C=a("241c"),w=a("057f"),O=a("7418"),j=a("06cf"),x=a("9bf2"),S=a("d1e7"),P=a("9112"),k=a("6eeb"),$=a("5692"),q=a("f772"),E=a("d012"),D=a("90e3"),I=a("b622"),L=a("e538"),M=a("746f"),N=a("d44e"),J=a("69f3"),F=a("b727").forEach,T=q("hidden"),K="Symbol",Q="prototype",W=I("toPrimitive"),z=J.set,A=J.getterFor(K),B=Object[Q],H=i.Symbol,U=s("JSON","stringify"),G=j.f,R=x.f,V=w.f,X=S.f,Y=$("symbols"),Z=$("op-symbols"),tt=$("string-to-symbol-registry"),et=$("symbol-to-string-registry"),at=$("wks"),rt=i.QObject,it=!rt||!rt[Q]||!rt[Q].findChild,st=o&&u((function(){return 7!=y(R({},"a",{get:function(){return R(this,"a",{value:7}).a}})).a}))?function(t,e,a){var r=G(B,e);r&&delete B[e],R(t,e,a),r&&t!==B&&R(B,e,r)}:R,nt=function(t,e){var a=Y[t]=y(H[Q]);return z(a,{type:K,tag:t,description:e}),o||(a.description=e),a},ot=l?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof H},ct=function(t,e,a){t===B&&ct(Z,e,a),p(t);var r=h(e,!0);return p(a),d(Y,r)?(a.enumerable?(d(t,T)&&t[T][r]&&(t[T][r]=!1),a=y(a,{enumerable:g(0,!1)})):(d(t,T)||R(t,T,g(1,{})),t[T][r]=!0),st(t,r,a)):R(t,r,a)},lt=function(t,e){p(t);var a=m(e),r=_(a).concat(pt(a));return F(r,(function(e){o&&!dt.call(a,e)||ct(t,e,a[e])})),t},ut=function(t,e){return void 0===e?y(t):lt(y(t),e)},dt=function(t){var e=h(t,!0),a=X.call(this,e);return!(this===B&&d(Y,e)&&!d(Z,e))&&(!(a||!d(this,e)||!d(Y,e)||d(this,T)&&this[T][e])||a)},ft=function(t,e){var a=m(t),r=h(e,!0);if(a!==B||!d(Y,r)||d(Z,r)){var i=G(a,r);return!i||!d(Y,r)||d(a,T)&&a[T][r]||(i.enumerable=!0),i}},bt=function(t){var e=V(m(t)),a=[];return F(e,(function(t){d(Y,t)||d(E,t)||a.push(t)})),a},pt=function(t){var e=t===B,a=V(e?Z:m(t)),r=[];return F(a,(function(t){!d(Y,t)||e&&!d(B,t)||r.push(Y[t])})),r};if(c||(H=function(){if(this instanceof H)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=D(t),a=function(t){this===B&&a.call(Z,t),d(this,T)&&d(this[T],e)&&(this[T][e]=!1),st(this,e,g(1,t))};return o&&it&&st(B,e,{configurable:!0,set:a}),nt(e,t)},k(H[Q],"toString",(function(){return A(this).tag})),k(H,"withoutSetter",(function(t){return nt(D(t),t)})),S.f=dt,x.f=ct,j.f=ft,C.f=w.f=bt,O.f=pt,L.f=function(t){return nt(I(t),t)},o&&(R(H[Q],"description",{configurable:!0,get:function(){return A(this).description}}),n||k(B,"propertyIsEnumerable",dt,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:H}),F(_(at),(function(t){M(t)})),r({target:K,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var a=H(e);return tt[e]=a,et[a]=e,a},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!o},{create:ut,defineProperty:ct,defineProperties:lt,getOwnPropertyDescriptor:ft}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:bt,getOwnPropertySymbols:pt}),r({target:"Object",stat:!0,forced:u((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(v(t))}}),U){var vt=!c||u((function(){var t=H();return"[null]"!=U([t])||"{}"!=U({a:t})||"{}"!=U(Object(t))}));r({target:"JSON",stat:!0,forced:vt},{stringify:function(t,e,a){var r,i=[t],s=1;while(arguments.length>s)i.push(arguments[s++]);if(r=e,(b(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!ot(e))return e}),i[1]=e,U.apply(null,i)}})}H[Q][W]||P(H[Q],W,H[Q].valueOf),N(H,K),E[T]=!0},b64b:function(t,e,a){var r=a("23e7"),i=a("7b0b"),s=a("df75"),n=a("d039"),o=n((function(){s(1)}));r({target:"Object",stat:!0,forced:o},{keys:function(t){return s(i(t))}})},dbb4:function(t,e,a){var r=a("23e7"),i=a("83ab"),s=a("56ef"),n=a("fc6a"),o=a("06cf"),c=a("8418");r({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,a,r=n(t),i=o.f,l=s(r),u={},d=0;while(l.length>d)a=i(r,e=l[d++]),void 0!==a&&c(u,e,a);return u}})},e439:function(t,e,a){var r=a("23e7"),i=a("d039"),s=a("fc6a"),n=a("06cf").f,o=a("83ab"),c=i((function(){n(1)})),l=!o||c;r({target:"Object",stat:!0,forced:l,sham:!o},{getOwnPropertyDescriptor:function(t,e){return n(s(t),e)}})},e538:function(t,e,a){var r=a("b622");e.f=r},ea4a:function(t,e,a){"use strict";var r=a("fd38"),i=a.n(r);i.a},f89f:function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("FloatCart",{staticClass:"d-lg-none"}),a("div",{staticClass:"container mt-3"},[a("nav",{attrs:{"aria-label":"breadcrumb"}},[a("ol",{staticClass:"breadcrumb text-main bg-transparent\n          border-bottom border-main border-radius-0 p-0"},[a("li",{staticClass:"breadcrumb-item"},[a("router-link",{staticClass:"text-main",attrs:{to:"/"}},[t._v("首頁")])],1),a("li",{staticClass:"breadcrumb-item"},[a("a",{staticClass:"text-main",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.selectSwitch()}}},[t._v(" 菜單 ")])]),a("li",{staticClass:"breadcrumb-item"},[a("a",{staticClass:"text-main",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.selectSwitch(t.product.category)}}},[t._v(" "+t._s(t.product.category)+" ")])]),a("li",{staticClass:"breadcrumb-item",attrs:{"aria-current":"page"}},[t._v(t._s(t.product.title))])])]),a("div",{staticClass:"row my-3"},[a("div",{staticClass:"col-md-12 col-lg-4 mb-3 mb-lg-0",staticStyle:{"z-index":"1"}},[a("div",{staticClass:"sticky-top",staticStyle:{top:"20px"}},[a("h1",{staticClass:"h2"},[t._v(t._s(t.product.title))]),a("div",{staticClass:"d-flex justify-content-end align-items-end mb-3"},[a("del",{staticClass:"text-muted"},[t._v("售價 $"+t._s(t.product.origin_price))]),a("div",{staticClass:"h3 ml-auto mb-0 text-danger"},[a("small",[t._v("特價 $")]),a("strong",[t._v(t._s(t.product.price))])])]),a("div",{staticClass:"border-top pt-3 text-muted"},[a("p",[t._v(t._s(t.product.title)+" "+t._s(t.qty)+" "+t._s(t.product.unit))]),t.product.price>=200?a("p",[t._v("香脆薯條 "+t._s(t.qty)+" "+t._s(t.product.unit))]):t._e(),t.product.price>100?a("p",[t._v("$100 飲品或紅茶拿鐵(預設) "+t._s(t.qty)+" 杯")]):t._e()]),a("div",{staticClass:"input-group"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"qty"}],staticClass:"form-control mr-1",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.qty=e.target.multiple?a:a[0]}}},[a("option",{attrs:{value:"0",selected:"",disabled:""}},[t._v("請選擇數量")]),t._l(10,(function(e){return a("option",{key:e,domProps:{value:e}},[t._v(" 選購 "+t._s(e)+" "+t._s(t.product.unit)+" ")])}))],2),a("a",{staticClass:"btn btn-main",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.addtoCart(t.product.id,t.qty)}}},[t._v("加入購物車")])])])]),a("div",{staticClass:"col-md-12 col-lg-8"},[a("div",{staticClass:"bg-cover-c border-radius-5",staticStyle:{height:"600px"},style:{backgroundImage:"url("+t.product.imageUrl+")"}}),a("div",{staticClass:"row justify-content-center mt-5"},[a("div",{staticClass:"col-12 mb-3"},[a("h3",{staticClass:"text-center font-weight-bold pb-2"},[t._v("餐點介紹")]),a("p",{staticStyle:{"line-height":"30px"}},[t._v(" "+t._s(t.product.description)+" ")])]),t._m(0),t._m(1),t._m(2)])])])])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 col-md-10 col-lg-8 mb-3"},[a("h3",{staticClass:"text-center font-weight-bold pb-2"},[t._v("主廚介紹")]),a("div",{staticClass:"bg-cover-t border-radius-5",staticStyle:{height:"520px","background-image":"url('https://images.unsplash.com/photo-1559575003-fb4ee38a747d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80')"}})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 mt-3"},[a("h2",{staticClass:"h5"},[t._v("餐點主廚：Kojiro Shinomiya")]),a("p",{staticStyle:{"line-height":"30px"}},[t._v(" 從日本知名廚藝學校畢業、曾榮獲法國烹飪界最高榮譽的普魯斯波爾勳章、三星米奇林最佳推薦廚師， 有蔬菜料理魔術師之稱的主廚 Kojiro Shinomiya，餐點是由他精心設計出的菜單， 烹飪部份交給主廚從廚藝學校嚴格篩選出的優秀廚師去操刀， 使用的食材以及餐點水平主廚也是嚴格把關，讓您用餐開心也放心。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"col-12 mt-3 mb-3"},[a("h3",{staticClass:"text-center font-weight-bold pb-2"},[t._v("常見問答")]),a("h5",{staticStyle:{"line-height":"40px"}},[t._v("Ｑ：餐點飲料是自己加入購物車嗎？")]),a("p",{staticClass:"pb-2"},[t._v("Ａ：是的，如果忘記，會先預設為紅茶拿鐵，並在購買後將與您連絡做確認。")]),a("h5",{staticStyle:{"line-height":"40px"}},[t._v("Ｑ：配送日期和餐點的部份可以調整嗎？")]),a("p",{staticClass:"pb-2"},[t._v("Ａ：可以，購買後將與您連絡做確認，如果電話確認後須要做更改，可在前一天通知。")]),a("h5",{staticStyle:{"line-height":"40px"}},[t._v("Ｑ：對某些食材、香料過敏，或是餐點不符合個人口味，餐點可以做調整嗎？")]),a("p",{staticClass:"pb-2"},[t._v("Ａ：沒問題，購買後將與您連絡做確認，到時也請您詳細說明。")]),a("h5",{staticStyle:{"line-height":"40px"}},[t._v("Ｑ：我想問其他問題、想給些建議、想與我們合作。")]),a("p",[t._v("Ａ：非常歡迎，請將您的說明 mail 至我們的信箱或是電話聯絡。")]),a("p",[a("i",{staticClass:"far fa-envelope"}),t._v("：ggyy06059909@gmail.com")]),a("p",[a("i",{staticClass:"fas fa-headset"}),t._v("：0932653357")])])}],s=a("5530"),n=a("2f62"),o=a("fb81"),c={components:{FloatCart:o["a"]},data:function(){return{qty:0,productId:""}},methods:{getProductMoreContent:function(t){this.$store.dispatch("getProductMoreContent",t)},addtoCart:function(t,e){0!==e?this.$store.dispatch("addtoCart",{id:t,qty:e}):this.$store.dispatch("updateMessage",{message:"請選擇數量",status:"danger"})},selectSwitch:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"全部菜單";this.$store.dispatch("selectSwitch",t),this.$router.push("/product_list")}},computed:Object(s["a"])({},Object(n["c"])(["product"])),created:function(){this.productId=this.$route.params.productId,this.getProductMoreContent(this.productId)}},l=c,u=a("2877"),d=Object(u["a"])(l,r,i,!1,null,null,null);e["default"]=d.exports},fb81:function(t,e,a){"use strict";var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"jq-floatcart floatcart-block position-fixed bg-main"},[a("a",{staticClass:"my-1 my-lg-0",attrs:{"data-toggle":"modal","data-target":"#floatCartModal"}},[a("div",{staticClass:"nav_badge_block"},[a("i",{staticClass:"text-white fas fa-shopping-cart fa-lg"}),0!==t.cartLength?a("span",{staticClass:"badge badge-pill badge-danger position-absolute nav_badge"},[t._v(" "+t._s(t.cartLength)+" ")]):t._e()])])]),a("div",{staticClass:"modal fade",attrs:{id:"floatCartModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header",class:{"border-bottom-0":0!==t.cartLength}},[a("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLabel"}},[t._v("購物車清單")]),t._m(0)]),a("div",{staticClass:"modal-body",class:{"py-0":0!==t.cartLength}},[0===t.cartLength?a("h5",{staticClass:"text-center text-danger"},[t._v(" 購物車是空的！ ")]):a("table",{staticClass:"table"},t._l(t.cart.carts,(function(e){return a("tr",{key:e.id},[a("td",[a("a",{staticClass:"text-danger",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.removeCartItem(e.id)}}},[a("i",{staticClass:"fas fa-trash-alt"})])]),a("td",[t._v(t._s(e.product.title))]),a("td",[t._v(t._s(e.qty)+" "+t._s(e.product.unit))]),a("td",[t._v("$"+t._s(e.total))])])})),0)]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-main",attrs:{type:"button","data-dismiss":"modal"}},[t._v("繼續逛逛")]),0!==t.cartLength?a("router-link",{staticClass:"btn btn-danger",attrs:{to:"/create_order","data-dismiss":"modal"}},[t._v(" 結帳去 ")]):t._e()],1)])])])])},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],s=a("5530"),n=a("1157"),o=a.n(n),c=a("2f62"),l={data:function(){return{}},methods:Object(s["a"])({removeCartItem:function(t){this.$store.dispatch("removeCartItem",t)}},Object(c["b"])(["getCart"])),computed:Object(s["a"])({},Object(c["c"])(["cart","cartLength"])),mounted:function(){o()(window).scroll((function(){var t=o()(window).scrollTop();t>=66?o()(".jq-floatcart").addClass("showfloatcart"):o()(".jq-floatcart").removeClass("showfloatcart")}))},created:function(){var t=this;t.getCart()}},u=l,d=(a("ea4a"),a("2877")),f=Object(d["a"])(u,r,i,!1,null,"5ce06eae",null);e["a"]=f.exports},fd38:function(t,e,a){}}]);
//# sourceMappingURL=chunk-2886ba34.69abf7c5.js.map