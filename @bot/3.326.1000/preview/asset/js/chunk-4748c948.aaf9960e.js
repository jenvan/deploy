(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4748c948"],{"2d14":function(e,t,o){},"73a9":function(e,t,o){"use strict";o.r(t);var s=o("7a23");function n(e,t,o,n,i,a){const l=Object(s["resolveComponent"])("van-cell"),c=Object(s["resolveComponent"])("van-cell-group"),d=Object(s["resolveComponent"])("van-list"),r=Object(s["resolveComponent"])("van-pull-refresh"),h=Object(s["resolveComponent"])("BaseLayout");return Object(s["openBlock"])(),Object(s["createBlock"])(h,{title:"交易动态"},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(r,{modelValue:n.state.refreshing,"onUpdate:modelValue":t[1]||(t[1]=e=>n.state.refreshing=e),onRefresh:a.onRefresh},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(d,{class:"list",loading:n.state.loading,"onUpdate:loading":t[0]||(t[0]=e=>n.state.loading=e),finished:n.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:a.onLoad},{default:Object(s["withCtx"])(()=>[(Object(s["openBlock"])(!0),Object(s["createElementBlock"])(s["Fragment"],null,Object(s["renderList"])(n.state.list,(e,t)=>(Object(s["openBlock"])(),Object(s["createBlock"])(c,{class:"block",border:!1,key:t},{default:Object(s["withCtx"])(()=>[Object(s["createVNode"])(l,{class:"dt",title:e.dt,value:e.type},null,8,["title","value"]),Object(s["createVNode"])(l,{class:"item","icon-prefix":"icon-symbol",icon:e.symbol.toLowerCase(),border:!1,title:e.symbol.toUpperCase()+" / USDT",label:e.info},null,8,["icon","title","label"])]),_:2},1024))),128))]),_:1},8,["loading","finished","onLoad"])]),_:1},8,["modelValue","onRefresh"])]),_:1})}o("14d9");var i=o("2824"),a={components:{BaseLayout:i["a"]},setup(){const e=Object(s["reactive"])({refreshing:!1,loading:!1,finished:!1,list:[],offset:0,limit:20});return{state:e}},mounted(){this.onRefresh()},methods:{onRefresh(){this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad()},onLoad(){this.$http.get("/exchange/recent?mine=1&offset="+this.state.offset+"&limit="+this.state.limit).then(e=>{if(this.state.refreshing=!1,0==e.length)return this.state.finished=!0;this.state.loading=!1,this.state.offset+=e.length;for(let t in e){let o=e[t];this.state.list.push({symbol:o.symbol.replace(/usdt$/,""),type:"「"+["清仓","建仓","加仓","补仓"][o.type]+"」",info:"$"+o.amount.replace(/(\.\d\d)(\d+)$/,"$1")+" / $"+o.price,dt:o.dt})}})}}},l=(o("d2e9"),o("6b0d")),c=o.n(l);const d=c()(a,[["render",n],["__scopeId","data-v-117eaa40"]]);t["default"]=d},d2e9:function(e,t,o){"use strict";o("2d14")}}]);
//# sourceMappingURL=chunk-4748c948.aaf9960e.js.map