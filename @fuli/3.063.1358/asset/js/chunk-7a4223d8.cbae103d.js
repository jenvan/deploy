(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7a4223d8"],{2824:function(t,e,c){"use strict";var n=c("7a23"),o=Object(n["X"])("data-v-77ef1cb4");Object(n["D"])("data-v-77ef1cb4");var a={class:"container"},i={class:"back"},s={class:"head"},r={class:"more"},u={class:"subtitle"},b={class:"extra"};Object(n["B"])();var l=o((function(t,e,c,l,d,j){var O=Object(n["I"])("van-icon"),p=Object(n["I"])("van-nav-bar"),f=Object(n["I"])("van-sticky"),v=Object(n["I"])("van-col"),h=Object(n["I"])("van-row");return Object(n["A"])(),Object(n["g"])("div",a,[Object(n["U"])(Object(n["k"])(f,{onChange:e[1]||(e[1]=function(t){return l.state.isTop=!l.state.isTop})},{default:o((function(){return[Object(n["k"])(p,{class:["navbar",{notTop:!l.state.isTop,autoNav:"auto"==c.navbar}],border:!1,onClickLeft:j.onClickLeft,onClickRight:j.onClickRight},{left:o((function(){return[Object(n["U"])(Object(n["k"])("div",i,[Object(n["H"])(t.$slots,"back",{},(function(){return[Object(n["k"])(O,{name:"arrow-left"})]}),{},!0)],512),[[n["Q"],!c.noback]])]})),title:o((function(){return[Object(n["k"])("div",s,[Object(n["H"])(t.$slots,"head",{},(function(){return[Object(n["k"])("div",{style:{width:"100%",color:l.state.isTop?c.fg:"inherit"}},Object(n["M"])(l.state.isTop&&"0"!=c.height?"":c.title),5)]}),{},!0)])]})),right:o((function(){return[Object(n["k"])("div",r,[Object(n["H"])(t.$slots,"more",{},void 0,!0)])]})),_:1},8,["class","onClickLeft","onClickRight"])]})),_:1},512),[[n["Q"],"hide"!=c.navbar]]),Object(n["k"])("div",{class:["page",{notTop:!l.state.isTop,hideNav:"hide"==c.navbar,autoNav:"auto"==c.navbar,hasBar:t.$store.state.showTabbar}],style:{background:c.bg}},[Object(n["k"])(n["d"],{name:"van-slide-down"},{default:o((function(){return[Object(n["U"])(Object(n["k"])(h,{justify:"space-between",align:"center",class:"outline",style:{height:c.height+"px",color:c.fg}},{default:o((function(){return[Object(n["k"])(v,{span:"16"},{default:o((function(){return[Object(n["k"])("div",{class:"title",style:{color:c.fg},onClick:e[2]||(e[2]=function(e){return t.$emit("click-title")})},[Object(n["H"])(t.$slots,"title",{},(function(){return[Object(n["j"])(Object(n["M"])(c.title),1)]}),{},!0),Object(n["k"])("div",u,Object(n["M"])(c.subtitle),1)],4)]})),_:3}),Object(n["k"])(v,{span:"8"},{default:o((function(){return[Object(n["k"])("div",b,[Object(n["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[n["Q"],l.state.isTop&&"show"==c.navbar]])]})),_:1}),Object(n["H"])(t.$slots,"default",{},void 0,!0)],6)])})),d={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(n["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){var t=this;this.noback||(this.$emit("click-back"),setTimeout((function(e){if(e==t.$route)return window&&window.history.length>1?t.$router.back():t.$router.push("/")}),200,this.$route))},onClickRight:function(){return this.$emit("click-more")}}},j=(c("8710"),c("d959")),O=c.n(j);const p=O()(d,[["render",l],["__scopeId","data-v-77ef1cb4"]]);e["a"]=p},8710:function(t,e,c){"use strict";c("994b")},"994b":function(t,e,c){},"9f0e":function(t,e,c){t.exports=c.p+"asset/img/coupon.f9819eb2.png"},a7ed:function(t,e,c){"use strict";c.r(e);var n=c("7a23"),o=Object(n["X"])("data-v-f2160c96");Object(n["D"])("data-v-f2160c96");var a=Object(n["k"])("div",{class:"header"}," ·  领券中心  · ",-1),i={key:0,class:"coupon"},s={class:"content"},r={class:"price"},u={class:"unit"},b={class:"intro"},l={class:"limit"},d=Object(n["k"])("br",null,null,-1),j=Object(n["k"])("div",{class:"spliter"},[Object(n["k"])("div",{class:"circle left"}),Object(n["k"])("div",{class:"line"},[Object(n["k"])("hr")]),Object(n["k"])("div",{class:"circle right"})],-1),O={class:"toolbar"},p=Object(n["j"])("优惠券领取成功"),f=Object(n["k"])("br",null,null,-1),v={class:"mine"},h=Object(n["j"])("一键领取"),k=Object(n["j"])("查看我的优惠券");Object(n["B"])();var g=o((function(t,e,c,g,m,y){var w=Object(n["I"])("van-button"),C=Object(n["I"])("van-coupon-list"),_=Object(n["I"])("van-empty"),$=Object(n["I"])("BaseLayout");return Object(n["A"])(),Object(n["g"])($,{navbar:"auto",bg:y.bg,onClickBack:e[4]||(e[4]=function(e){return t.$router.push("/my")})},{default:o((function(){return[a,m.coupon&&m.coupon.id?(Object(n["A"])(),Object(n["g"])("div",i,[Object(n["k"])("div",s,[Object(n["k"])("div",r,[Object(n["j"])(Object(n["M"])(parseFloat(m.coupon.discount))+" ",1),Object(n["k"])("span",u,Object(n["M"])(1==m.coupon.type?"元":"折"),1)]),Object(n["k"])("div",b,"满 "+Object(n["M"])(m.coupon.amount)+" 元可用",1),Object(n["k"])("div",l,[Object(n["j"])("限"+Object(n["M"])(m.coupon.tag_name),1),d,Object(n["j"])("有效期从 "+Object(n["M"])(m.coupon.dt_start.substring(0,10))+" 至 "+Object(n["M"])(m.coupon.dt_end.substring(0,10)),1)])]),j,Object(n["k"])("div",O,[0==m.code.length?(Object(n["A"])(),Object(n["g"])(w,{key:0,class:"btn",disabled:!y.enabled,onClick:y.onGain},{default:o((function(){return[Object(n["j"])(Object(n["M"])(y.enabled?"立即领取":1==m.coupon.invalid?"活动已失效":"券已被领完"),1)]})),_:1},8,["disabled","onClick"])):(Object(n["A"])(),Object(n["g"])("div",{key:1,class:"code",onClick:e[1]||(e[1]=function(e){return t.$copy(m.code)})},[p,f,Object(n["j"])("【 "+Object(n["M"])(m.code)+" 】",1)]))])])):m.coupons&&m.coupons.length>0?(Object(n["A"])(),Object(n["g"])(C,{key:1,class:"list",code:m.code,"onUpdate:code":e[2]||(e[2]=function(t){return m.code=t}),"displayed-coupon-index":0,coupons:m.coupons,"show-exchange-bar":!1,"show-close-button":!1},null,8,["code","coupons"])):(Object(n["A"])(),Object(n["g"])(_,{key:2,class:"error",image:"error",description:"优惠活动不存在"})),Object(n["k"])("div",v,[Object(n["U"])(Object(n["k"])(w,{type:"primary",icon:"certificate",block:"",onClick:y.onGain},{default:o((function(){return[h]})),_:1},8,["onClick"]),[[n["Q"],m.coupons&&m.coupons.length>0]]),Object(n["k"])(w,{icon:"coupon",block:"",plain:"",onClick:e[3]||(e[3]=function(e){return t.$router.push("/my/coupon")})},{default:o((function(){return[k]})),_:1})])]})),_:1},8,["bg"])})),m=c("5530"),y=c("53ca"),w=(c("ac1f"),c("5319"),c("5502")),C=c("2824"),_={components:{BaseLayout:C["a"]},props:{param:{type:String,default:""}},data:function(){var t=Object(n["F"])([]),e=Object(n["F"])({}),c=Object(n["F"])("");return{coupons:t,coupon:e,code:c}},created:function(){var t=this;this.$http.post("coupon/gain?param="+this.param+"&view=1").then((function(e){if("object"!=Object(y["a"])(e[0]))t.coupon=e;else for(var c in e){var n=e[c];n=Object(m["a"])(Object(m["a"])({},n),{name:n.title,valueDesc:Math.round(n.discount,2),unitDesc:1==n.type?"元":"折",condition:"满 ￥"+Math.round(n.amount,2)+" 可用",startAt:new Date(n.dt_start.replace(/-/g,"/")).getTime()/1e3,endAt:new Date(n.dt_end.replace(/-/g,"/")).getTime()/1e3,editable:!1}),t.coupons.push(n)}}))},mounted:function(){this.toggleChat(!1)},unmounted:function(){this.toggleChat(!0)},computed:Object(m["a"])({bg:function(){return"#FC3 url('"+c("9f0e")+"') repeat"},enabled:function(){return this.coupon&&this.coupon["id"]&&0==!this.coupon["invalid"]&&this.coupon["num_total"]-this.coupon["num_provide"]>0}},Object(w["d"])(["profile"])),methods:Object(m["a"])({onGain:function(){var t=this;this.$http.post("coupon/gain?param="+this.param).then((function(e){t.code=e.code}))}},Object(w["c"])(["toggleChat"]))},$=(c("bd88"),c("d959")),T=c.n($);const M=T()(_,[["render",g],["__scopeId","data-v-f2160c96"]]);e["default"]=M},bd88:function(t,e,c){"use strict";c("fa28")},fa28:function(t,e,c){}}]);