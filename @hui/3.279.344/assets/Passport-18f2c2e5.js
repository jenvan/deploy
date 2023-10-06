import{r as x,s as f,f as B,b as o,h as d,o as C,a,w as s,v as l,j as m,i as r,t as p,p as I,q}from"./index-483f4384.js";import{B as W}from"./BaseLayout-5b09a48c.js";import{_ as z}from"./_plugin-vue_export-helper-c27b6911.js";const U={components:{BaseLayout:W},props:{action:{type:String,default:"login"},ucode:{type:String,default:""},subtitle:{type:String,default:""},redirect:{type:String,default:"/my"},autosso:{type:String,default:"1"}},setup(){const i=x({account:"",password:"",vcode:"",ucode:""}),e=f(null),t=f(0);return{state:i,timer:e,times:t}},created(){this.state.ucode=this.ucode},mounted(){this.action=="login"&&(this.$store.authorized&&this.$router.replace(this.redirect),(this.autosso!="0"||this.$mini)&&this.onWechat()),this.action=="logout"&&this.$http.post("/user/logout").then(()=>{this.$store.auth(null),this.$router.push(this.redirect)}),this.action=="bind"&&this.$mini&&this.onWechat()},unmounted(){!_.isEmpty(this.timer)&&clearInterval(this.timer)},computed:{invite(){return this.action=="invite"},title(){let i=this.action,e={login:"登录",register:"注册",changepassword:"找回密码",bind:"绑定账号"};return this.invite?"注册":typeof e[i]>"u"?"登录":e[i]},interval(){return this.times>0?" ("+this.times+")":""}},methods:{onBack:function(){return this.action=="bind"?this.$store.authorized?this.$router.back():this.$toast("请先绑定账号"):this.invite?this.$router.push("/"):this.$router.back()},onSend:function(){this.$http.post("/user/verify?mobile="+this.state.account).then(()=>{this.times=120,this.timer=setInterval(()=>{--this.times==0&&clearInterval(this.timer)},1e3)})},onSubmit:function(i){/^\d+$/.test(this.state.account)&&delete i.username||delete i.mobile;let e=this.action=="bind"?"/wechat/bindmobile":"/user/"+(this.action!="invite"?this.action:"register");this.$http.post(e,i).then(t=>{this.$store.auth(t),this.$router.push(this.redirect)})},onFailed(i){this.$toast("请按要求填写表单"),console.error("表单提交失败",i)},onWechat(){if(!this.$store.inWechat)return this.$toast("当前环境不支持微信授权登录");if(!this.$mini){let e=this.$host+"wechat/?host="+window.location.host+"&page="+this.redirect;return console.log(">>>",e),window.location.replace(e,!0)}let i=Math.random().toString(26).substr(3,8);return this.timer=setInterval(()=>{this.$http.get("/user/status?key="+i).then(e=>{typeof e!="object"||_.isEmpty(e)||(clearInterval(this.timer),this.$store.auth(e),this.$router.push(this.redirect))})},1e3),wx.miniProgram.navigateTo({url:"/pages/index/proxy?type=auth&key="+i})}}},j=i=>(I("data-v-db06def5"),i=i(),q(),i),N={class:"invite"},E=j(()=>m("br",null,null,-1)),L={class:"extra"},P={class:"extra"};function D(i,e,t,c,T,n){const y=d("van-icon"),w=d("van-image"),b=d("van-step"),k=d("van-steps"),v=d("van-button"),h=d("van-field"),g=d("router-link"),V=d("van-form"),S=d("van-empty"),F=d("BaseLayout");return C(),B(F,{title:n.title,subtitle:t.subtitle,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",navbar:n.invite?"auto":"show",height:n.invite?0:80,noback:t.action=="bind",onClickBack:n.onBack},{back:o(()=>[a(y,{name:n.invite?"wap-home-o":"arrow-left",size:"large"},null,8,["name"])]),default:o(()=>[s(m("div",N,[a(w,{src:"https://img.jiaopei123.com/fulishop/invite.jpg"}),a(k,{class:"step"},{default:o(()=>[a(b,null,{default:o(()=>[r("注册账号")]),_:1}),a(b,null,{default:o(()=>[r("关注公众号")]),_:1}),a(b,null,{default:o(()=>[r("登录使用")]),_:1})]),_:1})],512),[[l,n.invite]]),s(a(V,{class:"form",onSubmit:n.onSubmit,onFailed:n.onFailed},{default:o(()=>[s(a(h,{modelValue:c.state.account,"onUpdate:modelValue":e[0]||(e[0]=u=>c.state.account=u),name:"mobile",label:"手机号",placeholder:"请填写手机号",clearable:"",rules:[{required:t.action!="login",message:"支持大陆及港澳台手机号码"}]},{button:o(()=>[a(v,{class:"send",size:"small",type:"primary",disabled:n.interval.length>0,onClick:n.onSend},{default:o(()=>[r("发送验证码"+p(n.interval),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["modelValue","rules"]),[[l,t.action!="login"]]),s(a(h,{modelValue:c.state.vcode,"onUpdate:modelValue":e[1]||(e[1]=u=>c.state.vcode=u),name:"vcode",label:"验证码",placeholder:"请填写验证码",rules:[{required:t.action!="login",message:"请填写短信验证码"}]},null,8,["modelValue","rules"]),[[l,t.action!="login"]]),s(a(h,{modelValue:c.state.account,"onUpdate:modelValue":e[2]||(e[2]=u=>c.state.account=u),name:"username",label:"账号",clearable:"",placeholder:t.action=="login"?"手机号或用户名":"请填写用户名",rules:[{required:t.action=="login",message:"用户名以字母开头且长度不小于4"}]},null,8,["modelValue","placeholder","rules"]),[[l,t.action=="login"]]),s(a(h,{modelValue:c.state.password,"onUpdate:modelValue":e[3]||(e[3]=u=>c.state.password=u),type:"password",name:"password",label:"密码",clearable:"",placeholder:t.action=="changepassword"?"请填写新的密码":"请填写登录密码",rules:[{required:t.action!="bind",message:"包含字母和数字且长度不小于6"}]},null,8,["modelValue","placeholder","rules"]),[[l,t.action!="bind"]]),s(a(h,{modelValue:c.state.ucode,"onUpdate:modelValue":e[4]||(e[4]=u=>c.state.ucode=u),name:"ucode",label:"邀请码",placeholder:"没有可以不用填写"},null,8,["modelValue"]),[[l,n.invite]]),E,a(v,{block:"",type:"primary","native-type":"submit"},{default:o(()=>[r(p(n.title),1)]),_:1}),s(m("div",L,[r("没有账号？"),a(g,{class:"register",to:"/register?subtitle="+t.subtitle+"&redirect="+t.redirect},{default:o(()=>[r("注册")]),_:1},8,["to"]),a(g,{class:"right",to:"/changepassword?subtitle="+t.subtitle+"&redirect="+t.redirect},{default:o(()=>[r("忘记密码？")]),_:1},8,["to"])],512),[[l,!n.invite&&t.action=="login"]]),s(m("div",P,[r("已有账号？"),a(g,{class:"login",to:"/login?subtitle="+t.subtitle+"&redirect="+t.redirect},{default:o(()=>[r("登录")]),_:1},8,["to"])],512),[[l,!n.invite&&t.action=="register"]])]),_:1},8,["onSubmit","onFailed"]),[[l,t.action!="oauth"]]),s(a(v,{class:"wechat animate__animated animate__bounce animate__slow",round:"",block:"",icon:"https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_wx_logo.png",onClick:n.onWechat},{default:o(()=>[r("使用微信账号快捷授权")]),_:1},8,["onClick"]),[[l,i.$store.inWechat&&t.action!="bind"]]),s(a(S,{description:"仅支持在微信环境中使用"},null,512),[[l,!i.$store.inWechat&&t.action=="oauth"]])]),_:1},8,["title","subtitle","navbar","height","noback","onClickBack"])}const H=z(U,[["render",D],["__scopeId","data-v-db06def5"]]);export{H as default};
