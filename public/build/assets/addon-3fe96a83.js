function l(s,e,t,n,r,c,d,m){var i=typeof s=="function"?s.options:s;e&&(i.render=e,i.staticRenderFns=t,i._compiled=!0),n&&(i.functional=!0),c&&(i._scopeId="data-v-"+c);var o;if(d?(o=function(a){a=a||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,!a&&typeof __VUE_SSR_CONTEXT__<"u"&&(a=__VUE_SSR_CONTEXT__),r&&r.call(this,a),a&&a._registeredComponents&&a._registeredComponents.add(d)},i._ssrRegister=o):r&&(o=m?function(){r.call(this,(i.functional?this.parent:this).$root.$options.shadowRoot)}:r),o)if(i.functional){i._injectStyles=o;var p=i.render;i.render=function(v,_){return o.call(_),p(v,_)}}else{var u=i.beforeCreate;i.beforeCreate=u?[].concat(u,o):[o]}return{exports:s,options:i}}const f={props:{initialValues:{type:Object,default:()=>({id:null,name:"",redirect:""})}},data(){return{values:this.initialValues,errors:{}}},methods:{save(){const s=this.values.id?"put":"post",e=this.values.id?passport_url(`clients/${this.values.id}`):passport_url("clients");this.$axios[s](e,this.values).then(t=>{this.$toast.success(this.values.id?__("Client updated successfully"):__("Client created successfully")),this.$emit("saved")}).catch(t=>{this.$toast.error(t.response.data.message),this.errors=t.response.data.errors})}}};var h=function(){var e=this,t=e._self._c;return t("div",[t("modal",{attrs:{name:"passport-client-form"}},[t("header",{staticClass:"text-lg font-semibold px-5 py-3 bg-gray-200 rounded-t-lg flex items-center justify-between border-b"},[e._v(" "+e._s(e.values.id?e.__("Edit Client"):e.__("Create Client"))+" ")]),t("div",{staticClass:"publish-fields p-2"},[t("div",{staticClass:"form-group w-full"},[t("label",{domProps:{textContent:e._s(e.__("Name"))}}),t("div",{staticClass:"flex items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.values.name,expression:"values.name"}],staticClass:"input-text",attrs:{type:"text"},domProps:{value:e.values.name},on:{input:function(n){n.target.composing||e.$set(e.values,"name",n.target.value)}}})]),e.errors.name?t("small",{staticClass:"help-block text-red-500 mt-2 mb-0",domProps:{textContent:e._s(e.errors.name[0])}}):e._e()]),t("div",{staticClass:"form-group w-full"},[t("label",{domProps:{textContent:e._s(e.__("Redirect URL"))}}),t("div",{staticClass:"flex items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.values.redirect,expression:"values.redirect"}],staticClass:"input-text",attrs:{type:"url"},domProps:{value:e.values.redirect},on:{input:function(n){n.target.composing||e.$set(e.values,"redirect",n.target.value)}}})]),e.errors.redirect?t("small",{staticClass:"help-block text-red-500 mt-2 mb-0",domProps:{textContent:e._s(e.errors.redirect[0])}}):e._e()])]),t("div",{staticClass:"px-5 py-3 bg-gray-200 rounded-b-lg border-t flex items-center justify-end text-sm"},[t("button",{staticClass:"text-gray hover:text-gray-900",on:{click:function(n){return e.$emit("closed")}}},[e._v(e._s(e.__("Cancel")))]),t("button",{staticClass:"ml-4 btn-primary",on:{click:e.save}},[e._v(e._s(e.__("Save")))])])])],1)},C=[],g=l(f,h,C,!1,null,null,null,null);const b=g.exports,k={components:{ClientForm:b},data(){return{initializing:!0,loading:!0,clients:[],showClient:!1,clientValues:void 0}},mounted(){this.loadClients()},methods:{loadClients(){this.loading=!0,this.$axios.get(passport_url("clients")).then(s=>{this.clients=s.data,this.loading=!1,this.initializing=!1}).catch(s=>{this.$toast.error(s.response?s.response.data.message:__("Something went wrong"),{duration:null})})},deleteClient(s){this.$axios.delete(passport_url(`clients/${s.id}`)).then(e=>{this.loadClients()}).catch(e=>{this.$toast.error(e.response?e.response.data.message:__("Something went wrong"),{duration:null})})},createClient(){this.showClient=!0},editClient(s){this.clientValues={id:s.id,name:s.name,redirect:s.redirect},this.showClient=!0},closeClient(){this.clientValues=void 0,this.showClient=!1,this.loadClients()}}};var x=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"flex items-end justify-between mb-4"},[t("h2",[e._v(e._s(e.__("OAuth Clients")))]),t("button",{staticClass:"btn btn-sm btn-primary px-3",on:{click:e.createClient}},[e._v("Create Client")])]),t("div",{staticClass:"card p-0"},[e.initializing?t("div",{staticClass:"flex items-center justify-center text-center py-16"},[t("loading-graphic",{attrs:{inline:!0}})],1):e._e(),e.clients.length?e._e():t("div",{staticClass:"flex items-center justify-center text-center py-16 text-gray-700"},[e._v(" "+e._s(e.__("No clients"))+" ")]),!e.initializing&&e.clients.length?t("table",{staticClass:"data-table"},[e._m(0),t("tbody",e._l(e.clients,function(n){return t("tr",{key:n.id},[t("td",[e._v(" "+e._s(n.id)+" ")]),t("td",[e._v(" "+e._s(n.name)+" ")]),t("td",[e._v(" "+e._s(n.secret)+" ")]),t("td",{staticClass:"flex justify-end"},[t("dropdown-list",[t("dropdown-item",{attrs:{text:e.__("Edit")},on:{click:function(r){return e.editClient(n)}}}),t("dropdown-item",{staticClass:"warning",attrs:{text:e.__("Delete")},on:{click:function(r){return e.deleteClient(n)}}})],1)],1)])}),0)]):e._e()]),e.showClient?t("ClientForm",{attrs:{"initial-values":e.clientValues},on:{saved:e.closeClient,closed:e.closeClient}}):e._e()],1)},w=[function(){var s=this,e=s._self._c;return e("thead",[e("tr",[e("th",[s._v("ID")]),e("th",[s._v("Name")]),e("th",[s._v("Secret")]),e("th")])])}],y=l(k,x,w,!1,null,null,null,null);const $=y.exports,T={data(){return{values:{id:null,name:""},errors:{}}},methods:{save(){const s="post",e=passport_url("personal-access-tokens");this.$axios[s](e,this.values).then(t=>{this.$toast.success(__("Token created successfully")),this.$emit("saved",t.data)}).catch(t=>{this.$toast.error(t.response.data.message),this.errors=t.response.data.errors})}}};var N=function(){var e=this,t=e._self._c;return t("div",[t("modal",{attrs:{name:"passport-token-form"}},[t("header",{staticClass:"text-lg font-semibold px-5 py-3 bg-gray-200 rounded-t-lg flex items-center justify-between border-b"},[e._v(" "+e._s(e.__("Create Token"))+" ")]),t("div",{staticClass:"publish-fields p-2"},[t("div",{staticClass:"form-group w-full"},[t("label",{domProps:{textContent:e._s(e.__("Name"))}}),t("div",{staticClass:"flex items-center"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.values.name,expression:"values.name"}],staticClass:"input-text",attrs:{type:"text"},domProps:{value:e.values.name},on:{input:function(n){n.target.composing||e.$set(e.values,"name",n.target.value)}}})]),e.errors.name?t("small",{staticClass:"help-block text-red-500 mt-2 mb-0",domProps:{textContent:e._s(e.errors.name[0])}}):e._e()])]),t("div",{staticClass:"px-5 py-3 bg-gray-200 rounded-b-lg border-t flex items-center justify-end text-sm"},[t("button",{staticClass:"text-gray hover:text-gray-900",on:{click:function(n){return e.$emit("closed")}}},[e._v(e._s(e.__("Cancel")))]),t("button",{staticClass:"ml-4 btn-primary",on:{click:e.save}},[e._v(e._s(e.__("Save")))])])])],1)},j=[],S=l(T,N,j,!1,null,null,null,null);const R=S.exports,F={props:{token:{type:Object,required:!0}}};var P=function(){var e=this,t=e._self._c;return t("div",[t("modal",{attrs:{name:"passport-token-view"}},[t("header",{staticClass:"text-lg font-semibold px-5 py-3 bg-gray-200 rounded-t-lg flex items-center justify-between border-b"},[e._v(" "+e._s(e.__("Token Created"))+" ")]),t("div",{staticClass:"p-4"},[t("p",{staticClass:"text-sm"},[e._v("Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit placeat perferendis debitis quaerat recusandae quisquam minus facilis est pariatur ullam. Cum debitis voluptates magnam, illum est illo repellendus asperiores veniam:")]),t("div",{staticClass:"input-text h-auto text-sm font-mono break-all mt-4"},[e._v(" "+e._s(e.token.accessToken)+" ")])]),t("div",{staticClass:"px-5 py-3 bg-gray-200 rounded-b-lg border-t flex items-center justify-end text-sm"},[t("button",{staticClass:"ml-4 btn-primary",on:{click:function(n){return e.$emit("closed")}}},[e._v(e._s(e.__("OK")))])])])],1)},V=[],z=l(F,P,V,!1,null,null,null,null);const O=z.exports,q={components:{TokenForm:R,TokenView:O},data(){return{initializing:!0,loading:!0,tokens:[],showToken:!1,showNewToken:!1,newToken:null}},mounted(){this.loadTokens()},methods:{loadTokens(){this.loading=!0,this.$axios.get(passport_url("personal-access-tokens")).then(s=>{this.tokens=s.data,this.loading=!1,this.initializing=!1}).catch(s=>{this.$toast.error(s.response?s.response.data.message:__("Something went wrong"),{duration:null})})},deleteToken(s){this.$axios.delete(passport_url(`personal-access-tokens/${s.id}`)).then(e=>{this.loadTokens()}).catch(e=>{this.$toast.error(e.response?e.response.data.message:__("Something went wrong"),{duration:null})})},createToken(){this.showToken=!0},closeToken(){this.showToken=!1,this.loadTokens()},viewNewToken(s){this.newToken=s,this.showToken=!1,this.showNewToken=!0,this.loadTokens()},closeNewToken(){this.showNewToken=!1,this.newToken=null}}};var L=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"flex items-end justify-between mb-4"},[t("h2",[e._v(e._s(e.__("Personal Access Tokens")))]),t("button",{staticClass:"btn btn-sm btn-primary px-3",on:{click:e.createToken}},[e._v("Create Token")])]),t("div",{staticClass:"card p-0"},[e.initializing?t("div",{staticClass:"flex items-center justify-center text-center py-16"},[t("loading-graphic",{attrs:{inline:!0}})],1):e._e(),e.tokens.length?e._e():t("div",{staticClass:"flex items-center justify-center text-center py-16 text-gray-700"},[e._v(" "+e._s(e.__("No tokens"))+" ")]),!e.initializing&&e.tokens.length?t("table",{staticClass:"data-table"},[e._m(0),t("tbody",e._l(e.tokens,function(n){return t("tr",{key:n.id},[t("td",[e._v(" "+e._s(n.name)+" ")]),t("td",{staticClass:"flex justify-end"},[t("dropdown-list",[t("dropdown-item",{staticClass:"warning",attrs:{text:e.__("Delete")},on:{click:function(r){return e.deleteToken(n)}}})],1)],1)])}),0)]):e._e()]),e.showToken?t("TokenForm",{on:{saved:e.viewNewToken,closed:e.closeToken}}):e._e(),e.showNewToken?t("TokenView",{attrs:{token:e.newToken},on:{closed:e.closeNewToken}}):e._e()],1)},D=[function(){var s=this,e=s._self._c;return e("thead",[e("tr",[e("th",[s._v("Name")]),e("th")])])}],E=l(q,L,D,!1,null,null,null,null);const U=E.exports;Statamic.booting(()=>{Statamic.component("passport-client-listing",$),Statamic.component("passport-token-listing",U)});window.passport_url=function(s){return s=Statamic.$config.get("passport.url")+"/"+s,tidy_url(s)};
