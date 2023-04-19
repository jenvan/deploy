import{r as F,g,a as d,o as B,e as C,d as o,b as a,w as s,v as r,h as m,f as c,t as f,p as x,k as q}from"./index-23b488d2.js";import{B as I}from"./BaseLayout-f5ba0607.js";import{_ as W}from"./_plugin-vue_export-helper-c27b6911.js";const z="https://preview.fuchijihua.com/@hui/3.109.343/assets/invite-17735ed3.jpg";const U={components:{BaseLayout:I},props:{action:{type:String,default:"login"},ucode:{type:String,default:""},subtitle:{type:String,default:""},redirect:{type:String,default:"/my"},autosso:{type:String,default:"1"}},setup(){const t=F({account:"",password:"",vcode:"",ucode:""}),i=g(null),e=g(0);return{img:z,state:t,timer:i,times:e}},created(){this.state.ucode=this.ucode},mounted(){this.action=="login"&&(this.$store.authorized&&this.$router.replace(this.redirect),this.autosso!="0"&&this.onWechat()),this.action=="logout"&&this.$http.post("/user/logout").then(()=>{this.$store.auth(null),this.$router.push(this.redirect)})},computed:{invite(){return this.action=="invite"},title(){let t=this.action,i={login:"登录",register:"注册",changepassword:"找回密码",bind:"绑定账号"};return this.invite?"注册":typeof i[t]>"u"?"登录":i[t]},interval(){return this.times>0?" ("+this.times+")":""}},methods:{onBack:function(){return this.action=="bind"?this.$store.authorized?this.$router.back():this.$toast("请先绑定账号"):this.invite?this.$router.push("/"):this.$router.push("/my")},onSend:function(){this.$http.post("/user/verify?mobile="+this.state.account).then(()=>{this.times=120,this.timer=setInterval(()=>{--this.times==0&&clearInterval(this.timer)},1e3)})},onSubmit:function(t){/^\d+$/.test(this.state.account)&&delete t.username||delete t.mobile;let i=this.action=="bind"?"/wechat/bindmobile":"/user/"+(this.action!="invite"?this.action:"register");this.$http.post(i,t).then(e=>{this.$store.auth(e),this.$router.push(this.redirect)})},onFailed(t){this.$toast("请按要求填写表单"),console.error("表单提交失败",t)},onWechat(){if(!this.$store.inWechat)return this.$toast("当前环境不支持微信授权登录");let t=this.$host+"wechat/?host="+window.location.host+"&page="+this.redirect;return console.log(">>>",t),window.location.replace(t,!0)}}},N=t=>(x("data-v-ebe29db1"),t=t(),q(),t),L={class:"invite"},j=N(()=>m("br",null,null,-1)),D={class:"extra"},P={class:"extra"};function E(t,i,e,l,T,n){const w=d("van-icon"),p=d("van-image"),_=d("van-step"),y=d("van-steps"),b=d("van-button"),h=d("van-field"),v=d("router-link"),k=d("van-form"),V=d("van-empty"),S=d("BaseLayout");return B(),C(S,{title:n.title,subtitle:e.subtitle,bg:"linear-gradient(180deg, #EFF, #F9F9F9 10%, #F9F9F9)",navbar:n.invite?"auto":"show",height:n.invite?0:80,noback:e.action=="bind",onClickBack:n.onBack},{back:o(()=>[a(w,{name:n.invite?"wap-home-o":"arrow-left",size:"large"},null,8,["name"])]),default:o(()=>[s(m("div",L,[a(p,{src:l.img},null,8,["src"]),a(y,{class:"step"},{default:o(()=>[a(_,null,{default:o(()=>[c("注册账号")]),_:1}),a(_,null,{default:o(()=>[c("关注公众号")]),_:1}),a(_,null,{default:o(()=>[c("登录使用")]),_:1})]),_:1})],512),[[r,n.invite]]),s(a(k,{class:"form",onSubmit:n.onSubmit,onFailed:n.onFailed},{default:o(()=>[s(a(h,{modelValue:l.state.account,"onUpdate:modelValue":i[0]||(i[0]=u=>l.state.account=u),name:"mobile",label:"手机号",placeholder:"请填写手机号",clearable:"",rules:[{required:e.action!="login",message:"支持大陆及港澳台手机号码"}]},{button:o(()=>[a(b,{class:"send",size:"small",type:"primary",disabled:n.interval.length>0,onClick:n.onSend},{default:o(()=>[c("发送验证码"+f(n.interval),1)]),_:1},8,["disabled","onClick"])]),_:1},8,["modelValue","rules"]),[[r,e.action!="login"]]),s(a(h,{modelValue:l.state.vcode,"onUpdate:modelValue":i[1]||(i[1]=u=>l.state.vcode=u),name:"vcode",label:"验证码",placeholder:"请填写验证码",rules:[{required:e.action!="login",message:"请填写短信验证码"}]},null,8,["modelValue","rules"]),[[r,e.action!="login"]]),s(a(h,{modelValue:l.state.account,"onUpdate:modelValue":i[2]||(i[2]=u=>l.state.account=u),name:"username",label:"账号",clearable:"",placeholder:e.action=="login"?"手机号或用户名":"请填写用户名",rules:[{required:e.action=="login",message:"用户名以字母开头且长度不小于4"}]},null,8,["modelValue","placeholder","rules"]),[[r,e.action=="login"]]),s(a(h,{modelValue:l.state.password,"onUpdate:modelValue":i[3]||(i[3]=u=>l.state.password=u),type:"password",name:"password",label:"密码",clearable:"",placeholder:e.action=="changepassword"?"请填写新的密码":"请填写登录密码",rules:[{required:e.action!="bind",message:"包含字母和数字且长度不小于6"}]},null,8,["modelValue","placeholder","rules"]),[[r,e.action!="bind"]]),s(a(h,{modelValue:l.state.ucode,"onUpdate:modelValue":i[4]||(i[4]=u=>l.state.ucode=u),name:"ucode",label:"邀请码",placeholder:"没有可以不用填写"},null,8,["modelValue"]),[[r,n.invite]]),j,a(b,{block:"",type:"primary","native-type":"submit"},{default:o(()=>[c(f(n.title),1)]),_:1}),s(m("div",D,[c("没有账号？"),a(v,{class:"register",to:"/register?subtitle="+e.subtitle+"&redirect="+e.redirect},{default:o(()=>[c("注册")]),_:1},8,["to"]),a(v,{class:"right",to:"/changepassword?subtitle="+e.subtitle+"&redirect="+e.redirect},{default:o(()=>[c("忘记密码？")]),_:1},8,["to"])],512),[[r,!n.invite&&e.action=="login"]]),s(m("div",P,[c("已有账号？"),a(v,{class:"login",to:"/login?subtitle="+e.subtitle+"&redirect="+e.redirect},{default:o(()=>[c("登录")]),_:1},8,["to"])],512),[[r,!n.invite&&e.action=="register"]])]),_:1},8,["onSubmit","onFailed"]),[[r,e.action!="oauth"]]),s(a(b,{class:"wechat animate__animated animate__bounce animate__slow",round:"",block:"",icon:"https://open.weixin.qq.com/zh_CN/htmledition/res/assets/res-design-download/icon64_wx_logo.png",onClick:n.onWechat},{default:o(()=>[c("使用微信账号快捷授权")]),_:1},8,["onClick"]),[[r,t.$store.inWechat&&e.action!="bind"]]),s(a(V,{description:"仅支持在微信环境中使用"},null,512),[[r,!t.$store.inWechat&&e.action=="oauth"]])]),_:1},8,["title","subtitle","navbar","height","noback","onClickBack"])}const J=W(U,[["render",E],["__scopeId","data-v-ebe29db1"]]);export{J as default};
