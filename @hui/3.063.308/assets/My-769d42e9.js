import{l as J,g as V,r as K,m as O,q as Q,a as r,o as g,e as z,d as e,b as t,u as F,h as c,t as i,f as u,c as $,i as B,F as M,s as R,w as W,v as X,p as Z,k as ee}from"./index-25bfebe4.js";import{B as te}from"./BaseLayout-e3e4e3af.js";import{_ as ae}from"./_plugin-vue_export-helper-c27b6911.js";const C=m=>(Z("data-v-99a90cd5"),m=m(),ee(),m),ne={class:"title"},oe={class:"label"},se=C(()=>c("div",{class:"link"},"安全退出",-1)),le={class:"box"},re={class:"list"},ce=C(()=>c("div",{class:"dt"},"按日期筛选",-1)),ie={class:"type"},de={class:"fee"},pe=C(()=>c("span",{class:"symbol"},"￥",-1)),_e={class:"flag"},ue={__name:"My",setup(m){const{$router:S,$store:v,$http:h,$toast:I}=J().appContext.config.globalProperties,b=V(0),j={order:"推广明细",property:"资金明细"},D=new Date,p=V([new Date(D.getTime()-30*24*3600*1e3),D]),a=K({calendar:!1,type:!1,property:{balance:0,reward:0,freeze:0},record:{total:0,amount:0,list:[]}});O(p,(n,s)=>{a.calendar=!1,k()}),Q(()=>{h.get("/zhs/property").then(n=>{a.property=n}),k()});function w(n){if(_.isArray(n))return _.map(n,w).join(" ~ ");var s=typeof n=="object"?new Date(n):new Date,f=s.getFullYear(),d=""+(s.getMonth()+1),l=""+s.getDate();return d.length<2&&(d="0"+d),l.length<2&&(l="0"+l),[f,d,l].join("-")}function k(){h.get("/zhs/list?type="+b.value+"&dt="+w(p.value)).then(n=>{a.record=n})}function N(n){return typeof n.status<"u"?["已下单","已付款","已完成","已退款","已结算佣金"][n.status]||"-":typeof n.type<"u"?{transfer:"转账",deposit:"充值",consume:"消费",reward:"收入",withdrawal:"提现"}[n.type]||"-":""}function U(){h.get("/user/logout").then(()=>{v.auth(null),S.push("/union")})}function E(){I("为避免手续费，请余额超过 50元 时再申请提现")}return(n,s)=>{const f=r("van-icon"),d=r("van-image"),l=r("van-cell"),L=r("van-button"),x=r("van-col"),T=r("van-row"),q=r("van-tab"),A=r("van-tabs"),P=r("van-switch"),Y=r("van-sticky"),G=r("van-empty"),H=r("van-calendar");return g(),z(te,{title:"个人中心",bg:"linear-gradient(180deg, var(--van-primary-color), var(--van-primary-color) 100px, #F6F6F6 200px, #F6F6F6)",fg:"#FFF",height:"80"},{more:e(()=>[t(f,{name:"service "})]),title:e(()=>[t(l,{class:"profile",border:!1},{icon:e(()=>[t(d,{class:"avatar",src:F(v).avatar,"error-icon":"contact",round:""},null,8,["src"])]),title:e(()=>[c("div",ne,i(F(v).nickname),1)]),label:e(()=>[c("div",oe,i(F(v).mobile),1)]),_:1})]),extra:e(()=>[c("div",{class:"extra",onClick:U},[t(f,{name:"shield-o",size:"24"},{default:e(()=>[u(" ")]),_:1}),se])]),default:e(()=>[c("div",le,[t(T,{justify:"space-between",gutter:"2"},{default:e(()=>[t(x,{span:"24"},{default:e(()=>[t(l,{title:"账户余额（元）",label:a.property.balance},{extra:e(()=>[t(L,{type:"primary",size:"small",onClick:E},{default:e(()=>[u("提现")]),_:1})]),_:1},8,["label"])]),_:1}),t(x,{span:"12"},{default:e(()=>[t(l,{title:"预估待结算（元）",label:a.property.freeze},null,8,["label"])]),_:1}),t(x,{span:"12"},{default:e(()=>[t(l,{title:"累计总结算（元）",label:a.property.reward},null,8,["label"])]),_:1})]),_:1})]),c("div",re,[t(Y,{"offset-top":45},{default:e(()=>[t(A,{class:"tabs",active:b.value,"onUpdate:active":s[0]||(s[0]=o=>b.value=o),type:"card",onChange:k},{default:e(()=>[(g(),$(M,null,B(j,(o,y)=>t(q,{key:y,name:y.toString(),title:o},null,8,["name","title"])),64))]),_:1},8,["active"]),t(l,{class:"filter",icon:"calendar-o",label:w(p.value),border:!1,onClick:s[2]||(s[2]=R(o=>a.calendar=!0,["stop"]))},{title:e(()=>[ce]),value:e(()=>[t(P,{modelValue:a.type,"onUpdate:modelValue":s[1]||(s[1]=o=>a.type=o),size:"14"},null,8,["modelValue"]),c("div",ie,i(a.type?"单":"多")+"日",1)]),_:1},8,["label"]),t(l,{class:"stat",icon:"chart-trending-o"},{title:e(()=>[u("共 "+i(a.record.total||0)+" 笔，合计 "+i(a.record.amount||0)+" 元",1)]),_:1})]),_:1}),(g(!0),$(M,null,B(a.record.list,(o,y)=>(g(),z(l,{class:"item",key:y,title:o.dt,label:o.remark,onClick:me=>n.$copy(o.remark)},{value:e(()=>[c("div",de,[pe,u(i(o.amount),1)]),c("div",_e,i(N(o)),1)]),_:2},1032,["title","label","onClick"]))),128)),W(t(G,null,{default:e(()=>[u("暂无记录")]),_:1},512),[[X,!a.record||a.record.total==0]])]),t(H,{show:a.calendar,"onUpdate:show":s[3]||(s[3]=o=>a.calendar=o),type:a.type?"single":"range","max-range":366,"min-date":new Date("2022/01/01"),"max-date":new Date,"default-date":p.value,"show-confirm":!1,onConfirm:s[4]||(s[4]=o=>p.value=o)},null,8,["show","type","min-date","max-date","default-date"])]),_:1})}}},ge=ae(ue,[["__scopeId","data-v-99a90cd5"]]);export{ge as default};
