import{o as l,c as d,j as c,l as C,F as g,k as b,n as p,t as m,r as $,f as w,b as n,h as o,a as i,i as F,w as E,v as U,p as D,q as O}from"./index-3fe47f94.js";import{B as R}from"./BaseLayout-175dd473.js";import{_ as S}from"./_plugin-vue_export-helper-c27b6911.js";const T={props:{number:{type:[String,Number],default:0},fg:{type:String,default:"#666"},bg:{type:String,default:"transparent"}},data(){return{list:[],nums:[0,1,2,3,4,5,6,7,8,9,"."]}},mounted(){this.scroll()},watch:{number(t,s){this.scroll()}},methods:{scroll(){let t=[];this.number.toString().split("").forEach(a=>{t.push({num:a,top:0})}),this.list=t;let s=parseFloat(getComputedStyle(document.getElementById("card")).height);this.list.forEach((a,e)=>{setTimeout(()=>{a.top=parseFloat(this.nums.join("").indexOf(a.num)*s)},e*200)})}}},W={id:"card"},q={class:"slot"},M={class:"slot"};function A(t,s,a,e,v,f){return l(),d("ul",W,[c("li",q,[C(t.$slots,"prepend",{},void 0,!0)]),(l(!0),d(g,null,b(v.list,(y,h)=>(l(),d("li",{class:"warp",key:h,style:p({background:a.bg})},[c("div",{class:"item",style:p({transition:"all 2.5s ease-in-out 0s",top:"-"+y.top+"px"})},[(l(!0),d(g,null,b(v.nums,(k,_)=>(l(),d("span",{key:_,style:p({color:a.fg})},m(k),5))),128))],4)],4))),128)),c("li",M,[C(t.$slots,"default",{},void 0,!0)])])}const G=S(T,[["render",A],["__scopeId","data-v-334f793b"]]);const H={components:{BaseLayout:R,NumberFlip:G},setup(){return{state:$({stat:{balance:0,freez:0,transfer:0,deposit:0,withdrawal:0,consume:0,reward:0},active:0,refreshing:!1,loading:!1,finished:!1,category:{all:"全部",reward:"收入",consume:"消费",deposit:"充值",withdrawal:"提现"},list:[],offset:0,limit:20})}},created(){this.onChange()},methods:{onChange(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad(),this.$http.get("/property/summary?subject=cash").then(t=>this.state.stat=t)},onLoad(){this.$http.get("/property/detail?subject=cash&type="+Object.keys(this.state.category)[this.state.active]+"&offset="+this.state.offset+"&limit="+this.state.limit).then(t=>{this.state.refreshing=!1,(t.length==0||t.length<this.state.limit)&&(this.state.finished=!0),this.state.loading=!1,this.state.offset+=t.length;for(let s in t){let a=t[s];this.state.list.push({...a,amount:a.amount.replace(/(\.\d\d)(\d+)$/,"$1"),subtotal:a.subtotal.replace(/(\.\d\d)(\d+)$/,"$1"),color:a.amount>0?"#090":"#F66"})}})}}},J=t=>(D("data-v-8feb3ee1"),t=t(),O(),t),K={class:"summary"},P=J(()=>c("span",{style:{color:"#CCC","font-size":"9px"}},"元",-1)),Q={class:"desc"},X={class:"toolbar"};function Y(t,s,a,e,v,f){const y=o("number-flip"),h=o("van-button"),k=o("van-empty"),_=o("van-cell"),x=o("van-cell-group"),B=o("van-list"),L=o("van-tab"),V=o("van-tabs"),z=o("van-pull-refresh"),I=o("BaseLayout");return l(),w(I,{title:"我的余额",bg:"#F9F9F9",height:"0",onClickBack:s[3]||(s[3]=u=>t.$router.push("/my"))},{default:n(()=>[c("div",K,[i(y,{number:e.state.stat.balance,fg:"#FFF",size:"22px"},{default:n(()=>[P]),_:1},8,["number"]),c("div",Q,"累计收入："+m(e.state.stat.reward)+" 元，累计消费："+m(Math.abs(e.state.stat.consume))+" 元",1)]),c("div",X,[i(h,{type:"primary",class:"btn",size:"small",block:"",plain:"",to:"/wallet/deposit"},{default:n(()=>[F("充值")]),_:1}),i(h,{type:"primary",class:"btn",size:"small",block:"",plain:"",to:"/wallet/withdrawal"},{default:n(()=>[F("提现")]),_:1})]),i(z,{class:"list",modelValue:e.state.refreshing,"onUpdate:modelValue":s[2]||(s[2]=u=>e.state.refreshing=u),onRefresh:f.onChange},{default:n(()=>[i(V,{active:e.state.active,"onUpdate:active":s[1]||(s[1]=u=>e.state.active=u),"offset-top":"45",sticky:"",swipeable:"",animated:"",onChange:f.onChange},{default:n(()=>[(l(!0),d(g,null,b(e.state.category,(u,N)=>(l(),w(L,{key:N,title:u},{default:n(()=>[i(B,{loading:e.state.loading,"onUpdate:loading":s[0]||(s[0]=r=>e.state.loading=r),finished:e.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:f.onLoad},{default:n(()=>[E(i(k,null,null,512),[[U,e.state.list.length==0]]),(l(!0),d(g,null,b(e.state.list,(r,j)=>(l(),w(x,{class:"block",border:!1,key:j,onClick:Z=>t.$toast(r.remark)},{default:n(()=>[i(_,{class:"item",border:!1,title:r.remark},{extra:n(()=>[c("span",{style:p({color:r.color})},m(r.amount)+" 元",5)]),_:2},1032,["title"]),i(_,{class:"dt",border:!1,title:r.dt,value:"余额："+r.subtotal+" 元"},null,8,["title","value"])]),_:2},1032,["onClick"]))),128))]),_:1},8,["loading","finished","onLoad"])]),_:2},1032,["title"]))),128))]),_:1},8,["active","onChange"])]),_:1},8,["modelValue","onRefresh"])]),_:1})}const at=S(H,[["render",Y],["__scopeId","data-v-8feb3ee1"]]);export{at as default};
