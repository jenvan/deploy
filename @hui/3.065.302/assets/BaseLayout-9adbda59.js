import{a as d,o as T,c as S,w as c,v as u,b as s,d as a,y as _,h as n,j as r,t as f,T as B,g as F,z as L,f as b}from"./index-7c5e1bcf.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const h={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:{type:String,default:""},subtitle:{type:String,default:""},height:{type:String,default:"80px"},bg:{type:String,default:"#FFF"},fg:{type:String,default:"#000"}},setup(){return{isTop:F(!0)}},mounted(){typeof this.$route.query.invite<"u"&&this.$store.setInviteCode(this.$route.query.invite)},computed:{isFixed(){return this.navbar=="auto"&&this.height!="0"}},methods:{onClickLeft(){this.noback||(this.$emit("click-back"),setTimeout(t=>{if(t==this.$route)return window&&window.history.length>1?this.$router.back():this.$router.push("/")},200,this.$route))},onClickRight(){return this.$emit("click-more")}}},g=()=>{L(t=>({a91dada8:t.bg,"4d1a3ae4":t.height,a91dacb0:t.fg}))},m=h.setup;h.setup=m?(t,i)=>(g(),m(t,i)):g;const V=h,R={class:"back"},j={class:"head"},x={class:"more"},$={class:"subtitle"},q={class:"extra"};function z(t,i,e,o,D,l){const k=d("van-icon"),p=d("van-nav-bar"),y=d("van-sticky"),v=d("van-col"),C=d("van-row");return T(),S("div",{class:_({container:!0,hasBar:t.$store.state.showTabbar,fixed:l.isFixed})},[c(s(y,{onChange:i[0]||(i[0]=w=>o.isTop=!o.isTop)},{default:a(()=>[s(p,{class:_(["navbar",{notTop:!o.isTop,autoNav:e.navbar=="auto"}]),border:!1,onClickLeft:l.onClickLeft,onClickRight:l.onClickRight},{left:a(()=>[c(n("div",R,[r(t.$slots,"back",{},()=>[s(k,{name:"arrow-left"})],!0)],512),[[u,!e.noback]])]),title:a(()=>[n("div",j,[r(t.$slots,"head",{},()=>[b(f(o.isTop&&e.height!="0"?"":e.title),1)],!0)])]),right:a(()=>[n("div",x,[r(t.$slots,"more",{},void 0,!0)])]),_:3},8,["class","onClickLeft","onClickRight"])]),_:3},512),[[u,e.navbar!="hide"]]),n("div",{class:_(["page",{notTop:!o.isTop,hideNav:e.navbar=="hide",autoNav:e.navbar=="auto"}])},[s(B,{name:"van-slide-down"},{default:a(()=>[c(s(C,{justify:"space-between",align:"center",class:"outline"},{default:a(()=>[s(v,{span:"16"},{default:a(()=>[n("div",{class:"title",onClick:i[1]||(i[1]=w=>t.$emit("click-title"))},[r(t.$slots,"title",{},()=>[b(f(e.title),1)],!0),n("div",$,f(e.subtitle),1)])]),_:3}),s(v,{span:"8"},{default:a(()=>[n("div",q,[r(t.$slots,"extra",{},void 0,!0)])]),_:3})]),_:3},512),[[u,e.navbar!="hide"&&o.isTop&&!l.isFixed]])]),_:3}),r(t.$slots,"default",{},void 0,!0)],2)],2)}const A=N(V,[["render",z],["__scopeId","data-v-0de1ef4d"]]);export{A as B};
