import{B as f}from"./BaseLayout-f5ba0607.js";import{_ as h}from"./_plugin-vue_export-helper-c27b6911.js";import{g as v,a as r,o as l,e as m,d as a,b as n,f as d,h as b,c as g,i as x,F as k}from"./index-23b488d2.js";const y={components:{BaseLayout:f},setup(){return{list:v([])}},mounted(){this.$http.get("/hwmall/config").then(e=>{this.$share("优惠点单"),this.list=e})},methods:{open(e){this.$http.post("/hwmall/auth?type="+e).then(t=>this.forward(t.url,t.name))},forward(e,t){this.$forward(e)}}},B={class:"list"};function $(e,t,C,p,E,_){const s=r("van-icon"),c=r("van-cell"),u=r("BaseLayout");return l(),m(u,{bg:"linear-gradient(180deg, var(--van-primary-color), var(--van-primary-color) 100px, #EEE 100px, #EEE)",fg:"#FFF",navbar:"auto",height:"100px",noback:"",onClickBack:t[1]||(t[1]=o=>e.$router.push("/"))},{more:a(()=>[n(s,{name:"question-o",onClick:t[0]||(t[0]=()=>{})})]),head:a(()=>[n(c,{class:"head",border:!1},{title:a(()=>[d("优惠点单")]),label:a(()=>[d("在线下单享优惠，最低 5 折起")]),_:1}),n(s,{class:"face",name:"discount"})]),default:a(()=>[b("div",B,[(l(!0),g(k,null,x(p.list,(o,i)=>(l(),m(c,{class:"item",key:i,border:!1,title:o[0],label:o[1],onClick:w=>_.open(i)},{icon:a(()=>[n(s,{class:"icon",name:o[4],size:"48"},null,8,["name"])]),extra:a(()=>[n(s,{class:"extra",name:o[5],size:"64"},null,8,["name"])]),_:2},1032,["title","label","onClick"]))),128))])]),_:1})}const V=h(y,[["render",$],["__scopeId","data-v-fb481ced"]]);export{V as default};
