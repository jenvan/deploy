import{B as _}from"./BaseLayout-9374784f.js";import{f as h,b as p,m as g,h as a,o as d,w as c,v as r,j as m,x as u,a as f}from"./index-72cc1122.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const y={components:{BaseLayout:_},props:{page:String},data(){return{title:"",content:""}},created(){this.title={help:"帮助",about:"关于我们",contact:"联系我们",terms:"服务条款"}[this.page]||"",this.content=this.config[this.page]||""},computed:{style(){return{bg:"linear-gradient(180deg, #EEE, #F9F9F9 10%, #F9F9F9)",fg:"#000",height:"60px",notitle:!this.hasTitle}},hasTitle(){return this.title.length>0},hasContent(){return this.content.length>0}},methods:{onMore(){console.log("More")}}},x=["innerHTML"];function B(e,n,o,b,s,t){const i=a("van-empty"),l=a("BaseLayout");return d(),h(l,g({title:s.title},t.style),{default:p(()=>[c(m("div",{class:u(["content",o.page]),innerHTML:s.content},null,10,x),[[r,t.hasContent]]),c(f(i,{description:"暂无内容"},null,512),[[r,!t.hasContent]])]),_:1},16,["title"])}const w=v(y,[["render",B],["__scopeId","data-v-b4df0cf0"]]);export{w as default};
