(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60bff932"],{"0815":function(e,t,n){e.exports=n.p+"asset/img/bg4.37543eca.jpg"},2048:function(e,t,n){"use strict";n.r(t);var o=n("7a23");const i=["innerHTML"];function c(e,t,n,c,s,a){const r=Object(o["resolveComponent"])("van-empty"),p=Object(o["resolveComponent"])("BaseLayout");return Object(o["openBlock"])(),Object(o["createBlock"])(p,Object(o["mergeProps"])({title:s.title},a.style),{default:Object(o["withCtx"])(()=>[Object(o["withDirectives"])(Object(o["createElementVNode"])("div",{class:Object(o["normalizeClass"])(["content",n.page]),innerHTML:s.content},null,10,i),[[o["vShow"],!s.show]]),Object(o["withDirectives"])(Object(o["createVNode"])(r,{description:"暂无内容"},null,512),[[o["vShow"],s.show]])]),_:1},16,["title"])}var s=n("5502"),a=n("2824"),r={components:{BaseLayout:a["a"]},props:{page:String},data(){const e="",t="",n=!1;return{title:e,content:t,show:n}},mounted(){"undefined"!=typeof this.config[this.page]?(this.title=this.config[this.page]["name"],this.content=this.config[this.page]["value"],this.$store.commit("changeSticky",!1)):this.show=!0},computed:{style(){let e="linear-gradient(180deg, #EEE, #F9F9F9 10%, #F9F9F9)",t="#000",o="60px";return"help".indexOf(this.page)>-1&&(e="url('"+n("890f")+"') top right no-repeat",t="#FFF"),"intro,guide".indexOf(this.page)>-1&&(e="url('"+n("0815")+"') top right no-repeat",t="#FFF"),"feature"==this.page&&(e="#FFF",t="#FFF",o=0),{bg:e,fg:t,height:o}},...Object(s["d"])(["config"])},methods:{onMore(){console.log("More")}}},p=(n("75b6"),n("6b0d")),h=n.n(p);const g=h()(r,[["render",c],["__scopeId","data-v-a4c3a3f2"]]);t["default"]=g},2450:function(e,t,n){},"75b6":function(e,t,n){"use strict";n("2450")},"890f":function(e,t,n){e.exports=n.p+"asset/img/bg3.37fc0344.jpg"}}]);
//# sourceMappingURL=chunk-60bff932.42d91f2a.js.map