import{r as h,a,o as s,c as f,w as r,v as c,b as i,d,e as u,f as l,t as g}from"./index-c6fb1e42.js";import v from"./Home-6c122594.js";import{_ as x}from"./_plugin-vue_export-helper-c27b6911.js";const y={name:"Index",components:{Home:v},props:{code:{type:String,default:""},redirect:{type:String,default:"/"}},setup(){return{state:h({info:""})}},mounted(){this.code.length>0&&this.$http.get("/wechat/login?code="+this.code+"&trial=1").then(t=>{this.$store.auth(t),this.$router.replace(this.redirect)}).catch(t=>{t.rtn!=996&&(this.state.info=t.msg)});let e=this.$store.state.scrollInfo,n=e&&e.tag=="index"?e.top:0;n>500&&setTimeout(()=>{document.querySelector("#container").scrollTo(0,n)},1e3)},beforeRouteLeave(e,n,t){let o={tag:"index",top:document.querySelector("#container").scrollTop};this.$store.setScrollInfo(o),t()}},S={key:0,class:"loading"};function I(e,n,t,o,k,w){const _=a("van-loading"),p=a("van-empty"),m=a("home");return t.code.length>0?(s(),f("div",S,[r(i(_,{size:"64",vertical:""},{default:d(()=>[l("正在登录中 ...")]),_:1},512),[[c,o.state.info.length==0]]),r(i(p,{image:"error"},{default:d(()=>[l(g(o.state.info),1)]),_:1},512),[[c,o.state.info.length>0]])])):(s(),u(m,{key:1,production:!0}))}const B=x(y,[["render",I],["__scopeId","data-v-27626d26"]]);export{B as default};
