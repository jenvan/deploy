import{B as _}from"./BaseLayout-a4fff5ca.js";import{a,o as h,e as p,d,x as g,w as r,v as c,h as m,y as u,b as f}from"./index-6075ad5f.js";import{_ as v}from"./_plugin-vue_export-helper-c27b6911.js";const y={components:{BaseLayout:_},props:{page:String},data(){return{title:"",content:""}},created(){this.title={help:"帮助",about:"关于我们",contact:"联系我们",terms:"服务条款"}[this.page]||"",this.content=this.config[this.page]||""},computed:{style(){return{bg:"linear-gradient(180deg, #EEE, #F9F9F9 10%, #F9F9F9)",fg:"#000",height:"60px",notitle:!this.hasTitle}},hasTitle(){return this.title.length>0},hasContent(){return this.content.length>0}},methods:{onMore(){console.log("More")}}},x=["innerHTML"];function B(e,n,o,C,s,t){const i=a("van-empty"),l=a("BaseLayout");return h(),p(l,g({title:s.title},t.style),{default:d(()=>[r(m("div",{class:u(["content",o.page]),innerHTML:s.content},null,10,x),[[c,t.hasContent]]),r(f(i,{description:"暂无内容"},null,512),[[c,!t.hasContent]])]),_:1},16,["title"])}const w=v(y,[["render",B],["__scopeId","data-v-0dad7384"]]);export{w as default};
