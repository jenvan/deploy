import{o as T,c as S,w as c,v as u,a as s,b as a,x as _,j as n,l as r,t as h,T as B,s as F,y as L,h as l,i as b}from"./index-397e0fa6.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const v={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:{type:String,default:""},subtitle:{type:String,default:""},height:{type:String,default:"80px"},bg:{type:String,default:"#FFF"},fg:{type:String,default:"#000"}},setup(){return{isTop:F(!0)}},mounted(){typeof this.$route.query.invite<"u"&&this.$store.setInviteCode(this.$route.query.invite)},computed:{isFixed(){return this.navbar=="auto"&&this.height!="0"}},methods:{onClickLeft(){this.noback||(this.$emit("click-back"),setTimeout(t=>{if(t==this.$route)return window&&window.history.length>1?this.$router.back():this.$router.push("/")},200,this.$route))},onClickRight(){return this.$emit("click-more")}}},g=()=>{L(t=>({"1d24e401":t.fg,"1d24e385":t.bg,"7b9fc867":t.height}))},m=v.setup;v.setup=m?(t,i)=>(g(),m(t,i)):g;const V=v,x={class:"back"},R={class:"head"},j={class:"more"},$={class:"subtitle"},q={class:"extra"};function D(t,i,e,o,I,d){const k=l("van-icon"),p=l("van-nav-bar"),y=l("van-sticky"),f=l("van-col"),C=l("van-row");return T(),S("div",{class:_({container:!0,hasBar:t.$store.state.showTabbar,fixed:d.isFixed})},[c(s(y,{onChange:i[0]||(i[0]=w=>o.isTop=!o.isTop)},{default:a(()=>[s(p,{class:_(["navbar",{notTop:!o.isTop,autoNav:e.navbar=="auto"}]),border:!1,onClickLeft:d.onClickLeft,onClickRight:d.onClickRight},{left:a(()=>[c(n("div",x,[r(t.$slots,"back",{},()=>[s(k,{name:"arrow-left"})],!0)],512),[[u,!e.noback]])]),title:a(()=>[n("div",R,[r(t.$slots,"head",{},()=>[b(h(o.isTop&&e.height!="0"?"":e.title),1)],!0)])]),right:a(()=>[n("div",j,[r(t.$slots,"more",{},void 0,!0)])]),_:3},8,["class","onClickLeft","onClickRight"])]),_:3},512),[[u,e.navbar!="hide"]]),n("div",{class:_(["page",{notTop:!o.isTop,hideNav:e.navbar=="hide",autoNav:e.navbar=="auto"}])},[s(B,{name:"van-slide-down"},{default:a(()=>[c(s(C,{justify:"space-between",align:"center",class:"outline"},{default:a(()=>[s(f,{span:"16"},{default:a(()=>[n("div",{class:"title",onClick:i[1]||(i[1]=w=>t.$emit("click-title"))},[r(t.$slots,"title",{},()=>[b(h(e.title),1)],!0),n("div",$,h(e.subtitle),1)])]),_:3}),s(f,{span:"8"},{default:a(()=>[n("div",q,[r(t.$slots,"extra",{},void 0,!0)])]),_:3})]),_:3},512),[[u,e.navbar!="hide"&&o.isTop&&!d.isFixed]])]),_:3}),r(t.$slots,"default",{},void 0,!0)],2)],2)}const A=N(V,[["render",D],["__scopeId","data-v-5e2b4729"]]);export{A as B};
