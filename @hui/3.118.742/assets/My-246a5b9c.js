import{z as E,s as D,r as L,A as P,B as Y,o as m,c as h,a as o,b as l,w as V,C as G,i as v,j as i,F as k,k as $,u as H,t as p,v as z,h as r,f as J,p as K,q as O}from"./index-c5cbf13c.js";import{_ as Q}from"./_plugin-vue_export-helper-c27b6911.js";const M=u=>(K("data-v-6c51eaeb"),u=u(),O(),u),R={class:"list"},W=M(()=>i("div",{class:"dt"},"按日期筛选",-1)),X={class:"type"},Z={class:"fee"},ee=M(()=>i("span",{class:"symbol"},"￥",-1)),te={class:"flag"},ae={__name:"My",setup(u){const{$router:S,$store:ne,$http:x,$toast:oe}=E().appContext.config.globalProperties,y=D(0),j={order:"推广明细",property:"佣金明细"},C=new Date,d=D([new Date(C.getTime()-30*24*3600*1e3),C]),e=L({calendar:!1,type:!1,property:{balance:0,reward:0,freeze:0},record:{total:0,amount:0,list:[]}});P(d,(n,t)=>{e.calendar=!1,b()}),Y(()=>{x.get("/zhs/property").then(n=>{e.property=n}),b()});function w(n){if(_.isArray(n))return _.map(n,w).join(" ~ ");var t=typeof n=="object"?new Date(n):new Date,g=t.getFullYear(),s=""+(t.getMonth()+1),c=""+t.getDate();return s.length<2&&(s="0"+s),c.length<2&&(c="0"+c),[g,s,c].join("-")}function b(){x.get("/zhs/list?type="+y.value+"&dt="+w(d.value)).then(n=>{e.record=n})}function B(n){return typeof n.status<"u"?["已下单","已付款","已完成","已退款","已结算佣金"][n.status]||"-":typeof n.type<"u"?{transfer:"转账",deposit:"充值",consume:"消费",reward:"收入",withdrawal:"提现"}[n.type]||"-":""}return(n,t)=>{const g=r("van-button"),s=r("van-cell"),c=r("van-col"),I=r("van-row"),F=r("van-tab"),N=r("van-tabs"),U=r("van-switch"),A=r("van-sticky"),T=r("van-empty"),q=r("van-calendar");return m(),h(k,null,[o(I,{class:"box",justify:"space-between",gutter:"2"},{default:l(()=>[V(o(c,{span:"24"},{default:l(()=>[o(s,{title:"账户余额（元）",label:e.property.balance},{extra:l(()=>[o(g,{type:"primary",size:"small",onClick:t[0]||(t[0]=a=>G(S).push("/wallet/withdraw"))},{default:l(()=>[v("提现")]),_:1})]),_:1},8,["label"])]),_:1},512),[[z,!1]]),o(c,{span:"12"},{default:l(()=>[o(s,{title:"待结算佣金（元）",label:e.property.freeze},null,8,["label"])]),_:1}),o(c,{span:"12"},{default:l(()=>[o(s,{title:"累计总结算（元）",label:e.property.reward},null,8,["label"])]),_:1})]),_:1}),i("div",R,[o(A,{"offset-top":45},{default:l(()=>[o(N,{class:"tabs",active:y.value,"onUpdate:active":t[1]||(t[1]=a=>y.value=a),type:"line",onChange:b},{default:l(()=>[(m(),h(k,null,$(j,(a,f)=>o(F,{key:f,name:f.toString(),title:a},null,8,["name","title"])),64))]),_:1},8,["active"]),o(s,{class:"filter",icon:"calendar-o",label:w(d.value),border:!1,onClick:t[3]||(t[3]=H(a=>e.calendar=!0,["stop"]))},{title:l(()=>[W]),value:l(()=>[o(U,{modelValue:e.type,"onUpdate:modelValue":t[2]||(t[2]=a=>e.type=a),size:"14"},null,8,["modelValue"]),i("div",X,p(e.type?"单":"多")+"日",1)]),_:1},8,["label"]),o(s,{class:"stat",icon:"chart-trending-o"},{title:l(()=>[v("共 "+p(e.record.total||0)+" 笔，合计 "+p(e.record.amount||0)+" 元",1)]),_:1})]),_:1}),(m(!0),h(k,null,$(e.record.list,(a,f)=>(m(),J(s,{class:"item",key:f,title:a.dt,label:a.remark,onClick:le=>n.$copy(a.remark)},{value:l(()=>[i("div",Z,[ee,v(p(a.amount),1)]),i("div",te,p(B(a)),1)]),_:2},1032,["title","label","onClick"]))),128)),V(o(T,null,{default:l(()=>[v("暂无记录")]),_:1},512),[[z,!e.record||e.record.total==0]])]),o(q,{show:e.calendar,"onUpdate:show":t[4]||(t[4]=a=>e.calendar=a),type:e.type?"single":"range","max-range":366,"min-date":new Date("2022/01/01"),"max-date":new Date,"default-date":d.value,"show-confirm":!1,onConfirm:t[5]||(t[5]=a=>d.value=a)},null,8,["show","type","min-date","max-date","default-date"])],64)}}},ce=Q(ae,[["__scopeId","data-v-6c51eaeb"]]);export{ce as default};
