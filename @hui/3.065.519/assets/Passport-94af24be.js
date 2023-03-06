import{r as F,g,a as d,o as B,e as C,d as o,b as a,w as l,v as s,h as m,f as r,t as f,p as x,k as q}from"./index-c6fb1e42.js";import{B as I}from"./BaseLayout-8caac4d6.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const z={components:{BaseLayout:I},props:{action:{type:String,default:"login"},ucode:{type:String,default:""},subtitle:{type:String,default:""},redirect:{type:String,default:"/my"},autosso:{type:String,default:"1"}},setup(){const e=F({account:"",password:"",vcode:"",ucode:""}),i=g(null),t=g(0);return{img,state:e,timer:i,times:t}},created(){this.state.ucode=this.ucode},mounted(){this.action=="login"&&(this.$store.authorized&&this.$router.replace(this.redirect),this.autosso!="0"&&this.onWechat()),this.action=="logout"&&this.$http.post("/user/logout").then(()=>{this.$store.auth(null),this.$router.push(this.redirect)})},computed:{invite(){return this.action=="invite"},title(){let e=this.action,i={login:"登录",register:"注册",changepassword:"找回密码",bind:"绑定账号"};return this.invite?"注册":typeof i[e]>"u"?"登录":i[e]},interval(){return this.times>0?" ("+this.times+")":""}},methods:{onBack:function(){return this.action=="bind"?this.$store.authorized?this.$router.back():this.$toast("请先绑定账号"):this.invite?this.$router.push("/"):this.$router.push("/my")},onSend:function(){this.$http.post("/user/verify?mobile="+this.state.account).then(()=>{this.times=120,this.timer=setInterval(()=>{--this.times==0&&clearInterval(this.timer)},1e3)})},onSubmit:function(e){/^\d+$/.test(this.state.account)&&delete e.username||delete e.mobile;let i=this.action=="bind"?"/wechat/bindmobile":"/user/"+(this.action!="invite"?this.action:"register");this.$http.post(i,e).then(t=>{this.$store.auth(t),this.$router.push(this.redirect)})},onFailed(e){this.$toast("请按要求填写表单"),console.error("表单提交失败",e)},onWechat(){if(!this.$store.inWechat)return this.$toast("当前环境不支持微信授权登录");let e=this.$host+"wechat/?host="+window.location.host+"&page="+this.redirect;return console.log(">>>",e),window.location.replace(e,!0)}}},U=e=>(x("data-v-dd97a2b2"),e=e(),q(),e),N={class:"invite"},L=U(()=>m("br",null,null,-1)),D={class:"extra"},P={class:"extra"};function j(e,i,t,c,E,n){const w=d("van-icon"),p=d("van-image"),_=d("van-step"),y=d("van-steps"),b=d("van-button"),h=d("van-field"),v=d("router-link"),k=d("van-form"),V=d("van-empty"),S=d("BaseLayout");return B(),C(S,{title:n.title,subtitle:t.subtitle,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",navbar:n.invite?"auto":"show",noback:t.action=="bind",onClickBack:n.onBack},{back:o(()=>[a(w,{name:n.invite?"wap-home-o":"arrow-left",size:"large"},null,8,["name"])]),default:o(()=>[l(m("div",N,[a(p,{src:"/assets/img/invite.jpg"}),a(y,{class:"step"},{default:o(()=>[a(_,null,{default:o(()=>[r("注册账号")]),_:1}),a(_,null,{default:o(()=>[r("关注公众号")]),_:1}),a(_,null,{default:o(()=>[r("登录使用")]),_:1})]),_:1})],512),[[s,n.invite]]),l(a(k,{class:"form",onSubmit:n.onSubmit,onFailed:n.onFailed},{default:o(()=>[l(a(h,{modelValue:c.state.account,"onUpdate:modelValue":i[0]||(i[0]=u=>c.state.account=u),name:"mobile",label:"手机号",placeholder:"请填写手机号",clearable:"",rules:[{required:t.action!="login",message:"支持大陆及港澳台手机号码"}]},{button:o(()=>[a(b,{class:"send",size:"small",type:"primary",disabled:n.interval.length>0,onClick:n.onSend},{default:o(()=>[r("发送验证码"+f(n.interval),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["modelValue","rules"]),[[s,t.action!="login"]]),l(a(h,{modelValue:c.state.vcode,"onUpdate:modelValue":i[1]||(i[1]=u=>c.state.vcode=u),name:"vcode",label:"验证码",placeholder:"请填写验证码",rules:[{required:t.action!="login",message:"请填写短信验证码"}]},null,8,["modelValue","rules"]),[[s,t.action!="login"]]),l(a(h,{modelValue:c.state.account,"onUpdate:modelValue":i[2]||(i[2]=u=>c.state.account=u),name:"username",label:"账号",clearable:"",placeholder:t.action=="login"?"手机号或用户名":"请填写用户名",rules:[{required:t.action=="login",message:"用户名以字母开头且长度不小于4"}]},null,8,["modelValue","placeholder","rules"]),[[s,t.action=="login"]]),l(a(h,{modelValue:c.state.password,"onUpdate:modelValue":i[3]||(i[3]=u=>c.state.password=u),type:"password",name:"password",label:"密码",clearable:"",placeholder:t.action=="changepassword"?"请填写新的密码":"请填写登录密码",rules:[{required:t.action!="bind",message:"包含字母和数字且长度不小于6"}]},null,8,["modelValue","placeholder","rules"]),[[s,t.action!="bind"]]),l(a(h,{modelValue:c.state.ucode,"onUpdate:modelValue":i[4]||(i[4]=u=>c.state.ucode=u),name:"ucode",label:"邀请码",placeholder:"没有可以不用填写"},null,8,["modelValue"]),[[s,n.invite]]),L,a(b,{block:"",type:"primary","native-type":"submit"},{default:o(()=>[r(f(n.title),1)]),_:1}),l(m("div",D,[r("没有账号？"),a(v,{class:"register",to:"/register?subtitle="+t.subtitle+"&redirect="+t.redirect},{default:o(()=>[r("注册")]),_:1},8,["to"]),a(v,{class:"right",to:"/changepassword?subtitle="+t.subtitle+"&redirect="+t.redirect},{default:o(()=>[r("忘记密码？")]),_:1},8,["to"])],512),[[s,!n.invite&&t.action=="login"]]),l(m("div",P,[r("已有账号？"),a(v,{class:"login",to:"/login?subtitle="+t.subtitle+"&redirect="+t.redirect},{default:o(()=>[r("登录")]),_:1},8,["to"])],512),[[s,!n.invite&&t.action=="register"]])]),_:1},8,["onSubmit","onFailed"]),[[s,t.action!="oauth"]]),l(a(b,{class:"wechat animate__animated animate__bounce animate__slow",round:"",block:"",icon:"https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_wx_logo.png",onClick:n.onWechat},{default:o(()=>[r("使用微信账号快捷授权")]),_:1},8,["onClick"]),[[s,e.$store.inWechat&&t.action!="bind"]]),l(a(V,{description:"仅支持在微信环境中使用"},null,512),[[s,!e.$store.inWechat&&t.action=="oauth"]])]),_:1},8,["title","subtitle","navbar","noback","onClickBack"])}const H=W(z,[["render",j],["__scopeId","data-v-dd97a2b2"]]);export{H as default};
