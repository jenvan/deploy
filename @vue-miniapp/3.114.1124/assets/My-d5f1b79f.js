import{s as G,k as $,r as H,u as J,x as K,a as r,o as g,e as z,d as e,b as t,y as b,g as i,t as c,f as u,c as B,i as M,F as S,l as O,w as Q,v as R,p as W,j as X}from"./index-a09e9ef5.js";import{B as Z}from"./BaseLayout-a4656176.js";import{_ as ee}from"./_plugin-vue_export-helper-c27b6911.js";const C=m=>(W("data-v-6105107a"),m=m(),X(),m),te={class:"title"},ae={class:"label"},ne=C(()=>i("div",{class:"link"},"安全退出",-1)),oe={class:"box"},se={class:"list"},le=C(()=>i("div",{class:"dt"},"按日期筛选",-1)),re={class:"type"},ie={class:"fee"},ce=C(()=>i("span",{class:"symbol"},"￥",-1)),de={class:"flag"},pe={__name:"My",setup(m){const{$router:D,$store:v,$http:h,$toast:_e}=G().appContext.config.globalProperties,w=$(0),j={order:"推广明细",property:"资金明细"},V=new Date,p=$([new Date(V.getTime()-30*24*3600*1e3),V]),a=H({calendar:!1,type:!1,property:{balance:0,reward:0,freeze:0},record:{total:0,amount:0,list:[]}});J(p,(s,n)=>{a.calendar=!1,k()}),K(()=>{h.get("/zhs/property").then(s=>{a.property=s}),k()});function x(s){if(_.isArray(s))return _.map(s,x).join(" ~ ");var n=typeof s=="object"?new Date(s):new Date,f=n.getFullYear(),d=""+(n.getMonth()+1),l=""+n.getDate();return d.length<2&&(d="0"+d),l.length<2&&(l="0"+l),[f,d,l].join("-")}function k(){h.get("/zhs/list?type="+w.value+"&dt="+x(p.value)).then(s=>{a.record=s})}function I(s){return typeof s.status<"u"?["已下单","已付款","已完成","已退款","已结算佣金"][s.status]||"-":typeof s.type<"u"?{transfer:"转账",deposit:"充值",consume:"消费",reward:"收入",withdrawal:"提现"}[s.type]||"-":""}function N(){h.get("/user/logout").then(()=>{v.auth(null),D.push("/union")})}return(s,n)=>{const f=r("van-icon"),d=r("van-image"),l=r("van-cell"),U=r("van-button"),F=r("van-col"),E=r("van-row"),L=r("van-tab"),T=r("van-tabs"),q=r("van-switch"),A=r("van-sticky"),P=r("van-empty"),Y=r("van-calendar");return g(),z(Z,{title:"个人中心",bg:"linear-gradient(180deg, var(--van-primary-color), var(--van-primary-color) 100px, #F6F6F6 200px, #F6F6F6)",fg:"#FFF",height:"80"},{more:e(()=>[t(f,{name:"question-o"})]),title:e(()=>[t(l,{class:"profile",border:!1},{icon:e(()=>[t(d,{class:"avatar",src:b(v).avatar,"error-icon":"contact",round:""},null,8,["src"])]),title:e(()=>[i("div",te,c(b(v).nickname),1)]),label:e(()=>[i("div",ae,c(b(v).mobile),1)]),_:1})]),extra:e(()=>[i("div",{class:"extra",onClick:N},[t(f,{name:"shield-o",size:"24"},{default:e(()=>[u(" ")]),_:1}),ne])]),default:e(()=>[i("div",oe,[t(E,{justify:"space-between",gutter:"2"},{default:e(()=>[t(F,{span:"24"},{default:e(()=>[t(l,{title:"账户余额（元）",label:a.property.balance},{extra:e(()=>[t(U,{type:"primary",size:"small",onClick:n[0]||(n[0]=o=>b(D).push("/wallet/withdraw"))},{default:e(()=>[u("提现")]),_:1})]),_:1},8,["label"])]),_:1}),t(F,{span:"12"},{default:e(()=>[t(l,{title:"预估待结算（元）",label:a.property.freeze},null,8,["label"])]),_:1}),t(F,{span:"12"},{default:e(()=>[t(l,{title:"累计总结算（元）",label:a.property.reward},null,8,["label"])]),_:1})]),_:1})]),i("div",se,[t(A,{"offset-top":45},{default:e(()=>[t(T,{class:"tabs",active:w.value,"onUpdate:active":n[1]||(n[1]=o=>w.value=o),type:"card",onChange:k},{default:e(()=>[(g(),B(S,null,M(j,(o,y)=>t(L,{key:y,name:y.toString(),title:o},null,8,["name","title"])),64))]),_:1},8,["active"]),t(l,{class:"filter",icon:"calendar-o",label:x(p.value),border:!1,onClick:n[3]||(n[3]=O(o=>a.calendar=!0,["stop"]))},{title:e(()=>[le]),value:e(()=>[t(q,{modelValue:a.type,"onUpdate:modelValue":n[2]||(n[2]=o=>a.type=o),size:"14"},null,8,["modelValue"]),i("div",re,c(a.type?"单":"多")+"日",1)]),_:1},8,["label"]),t(l,{class:"stat",icon:"chart-trending-o"},{title:e(()=>[u("共 "+c(a.record.total||0)+" 笔，合计 "+c(a.record.amount||0)+" 元",1)]),_:1})]),_:1}),(g(!0),B(S,null,M(a.record.list,(o,y)=>(g(),z(l,{class:"item",key:y,title:o.dt,label:o.remark,onClick:ue=>s.$copy(o.remark)},{value:e(()=>[i("div",ie,[ce,u(c(o.amount),1)]),i("div",de,c(I(o)),1)]),_:2},1032,["title","label","onClick"]))),128)),Q(t(P,null,{default:e(()=>[u("暂无记录")]),_:1},512),[[R,!a.record||a.record.total==0]])]),t(Y,{show:a.calendar,"onUpdate:show":n[4]||(n[4]=o=>a.calendar=o),type:a.type?"single":"range","max-range":366,"min-date":new Date("2022/01/01"),"max-date":new Date,"default-date":p.value,"show-confirm":!1,onConfirm:n[5]||(n[5]=o=>p.value=o)},null,8,["show","type","min-date","max-date","default-date"])]),_:1})}}},ye=ee(pe,[["__scopeId","data-v-6105107a"]]);export{ye as default};
