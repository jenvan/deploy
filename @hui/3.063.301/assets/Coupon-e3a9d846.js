import{B as i}from"./BaseLayout-a4fff5ca.js";import{_ as u}from"./_plugin-vue_export-helper-c27b6911.js";import{r as m,a as s,o as t,e as r,d as p,h as _,c as d,i as g,F as h}from"./index-6075ad5f.js";const f={components:{BaseLayout:i},data(){return{state:m({list:[{img:"banner.png",url:""},{img:"way.png",url:""},{img:"meituan1.png",url:"http://dpurl.cn/4k5sn28z"},{img:"meituan2.png",url:"http://dpurl.cn/x4UHLYQz"},{img:"eleme1.png",url:""},{img:"eleme2.png",url:""}]})}},methods:{getPath(e){return new URL("../assets/coupon/"+e,import.meta.url).href},onClick(e){return this.$forward(e)}}},v={class:"list"};function k(e,B,C,y,o,n){const c=s("van-image"),l=s("BaseLayout");return t(),r(l,{navbar:"hide"},{default:p(()=>[_("div",v,[(t(!0),d(h,null,g(o.state.list,(a,x)=>(t(),r(c,{class:"item",src:n.getPath(a.img),onClick:L=>n.onClick(a.url)},null,8,["src","onClick"]))),256))])]),_:1})}const z=u(f,[["render",k],["__scopeId","data-v-e23ee321"]]);export{z as default};
