(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1568d2c"],{"109d":function(t,e,n){"use strict";(function(t){var c=n("5530"),i=(n("4de4"),n("7a23")),a=n("5502"),r=n("2efe"),o=n("2824");e["a"]={components:{BaseLayout:o["a"],Block:r["a"]},data:function(){var t=Object(i["E"])({list:[]});return{state:t}},created:function(){var e=this;this.$http.get("/mall/category?channel=service&deep=2").then((function(n){e.state.list=t.filter(n,{status:"1"})}))},computed:Object(c["a"])({},Object(a["d"])(["profile"])),methods:Object(c["a"])({color:function(){return"rgb("+t.random(100,200)+","+t.random(100,250)+","+t.random(100,250)+")"},handleClick:function(t){return t?this.$forward(t):this.$toast("内测中，敬请期待！")}},Object(a["c"])(["auth"]))}}).call(this,n("81b0"))},"18cd":function(t,e,n){"use strict";n("230d")},"230d":function(t,e,n){},2824:function(t,e,n){"use strict";var c=n("7a23"),i=Object(c["X"])("data-v-77ef1cb4");Object(c["D"])("data-v-77ef1cb4");var a={class:"container"},r={class:"back"},o={class:"head"},s={class:"more"},u={class:"subtitle"},l={class:"extra"};Object(c["B"])();var b=i((function(t,e,n,b,d,f){var j=Object(c["I"])("van-icon"),O=Object(c["I"])("van-nav-bar"),v=Object(c["I"])("van-sticky"),k=Object(c["I"])("van-col"),g=Object(c["I"])("van-row");return Object(c["A"])(),Object(c["g"])("div",a,[Object(c["U"])(Object(c["k"])(v,{onChange:e[1]||(e[1]=function(t){return b.state.isTop=!b.state.isTop})},{default:i((function(){return[Object(c["k"])(O,{class:["navbar",{notTop:!b.state.isTop,autoNav:"auto"==n.navbar}],border:!1,onClickLeft:f.onClickLeft,onClickRight:f.onClickRight},{left:i((function(){return[Object(c["U"])(Object(c["k"])("div",r,[Object(c["H"])(t.$slots,"back",{},(function(){return[Object(c["k"])(j,{name:"arrow-left"})]}),{},!0)],512),[[c["Q"],!n.noback]])]})),title:i((function(){return[Object(c["k"])("div",o,[Object(c["H"])(t.$slots,"head",{},(function(){return[Object(c["k"])("div",{style:{width:"100%",color:b.state.isTop?n.fg:"inherit"}},Object(c["M"])(b.state.isTop&&"0"!=n.height?"":n.title),5)]}),{},!0)])]})),right:i((function(){return[Object(c["k"])("div",s,[Object(c["H"])(t.$slots,"more",{},void 0,!0)])]})),_:1},8,["class","onClickLeft","onClickRight"])]})),_:1},512),[[c["Q"],"hide"!=n.navbar]]),Object(c["k"])("div",{class:["page",{notTop:!b.state.isTop,hideNav:"hide"==n.navbar,autoNav:"auto"==n.navbar,hasBar:t.$store.state.showTabbar}],style:{background:n.bg}},[Object(c["k"])(c["d"],{name:"van-slide-down"},{default:i((function(){return[Object(c["U"])(Object(c["k"])(g,{justify:"space-between",align:"center",class:"outline",style:{height:n.height+"px",color:n.fg}},{default:i((function(){return[Object(c["k"])(k,{span:"16"},{default:i((function(){return[Object(c["k"])("div",{class:"title",style:{color:n.fg},onClick:e[2]||(e[2]=function(e){return t.$emit("click-title")})},[Object(c["H"])(t.$slots,"title",{},(function(){return[Object(c["j"])(Object(c["M"])(n.title),1)]}),{},!0),Object(c["k"])("div",u,Object(c["M"])(n.subtitle),1)],4)]})),_:3}),Object(c["k"])(k,{span:"8"},{default:i((function(){return[Object(c["k"])("div",l,[Object(c["H"])(t.$slots,"extra",{},void 0,!0)])]})),_:3})]})),_:1},8,["style"]),[[c["Q"],b.state.isTop&&"show"==n.navbar]])]})),_:1}),Object(c["H"])(t.$slots,"default",{},void 0,!0)],6)])})),d={props:{navbar:{type:String,default:"show"},noback:{type:Boolean,default:!1},title:String,subtitle:String,height:String,bg:String,fg:String},setup:function(){var t=Object(c["E"])({isTop:!0});return{state:t}},methods:{onClickLeft:function(){var t=this;this.noback||(this.$emit("click-back"),setTimeout((function(e){if(e==t.$route)return window&&window.history.length>1?t.$router.back():t.$router.push("/")}),200,this.$route))},onClickRight:function(){return this.$emit("click-more")}}},f=(n("8710"),n("d959")),j=n.n(f);const O=j()(d,[["render",b],["__scopeId","data-v-77ef1cb4"]]);e["a"]=O},"2efe":function(t,e,n){"use strict";var c=n("7a23"),i=Object(c["X"])("data-v-58a92998");Object(c["D"])("data-v-58a92998");var a={class:"title"},r={class:"label"};Object(c["B"])();var o=i((function(t,e,n,o,s,u){var l=Object(c["I"])("van-icon"),b=Object(c["I"])("van-cell"),d=Object(c["I"])("van-row");return Object(c["A"])(),Object(c["g"])("div",{class:"block",style:{background:n.bg,color:n.fg}},[Object(c["k"])(b,{center:"",onClick:e[1]||(e[1]=function(e){return t.$emit("click")})},{title:i((function(){return[Object(c["k"])("div",a,Object(c["M"])(n.title),1)]})),label:i((function(){return[Object(c["k"])("div",r,Object(c["M"])(n.subtitle),1)]})),icon:i((function(){return[Object(c["k"])(l,{class:"icon",name:n.icon||"gem-o"},null,8,["name"])]})),extra:i((function(){return[Object(c["H"])(t.$slots,"more",{},(function(){return[Object(c["k"])(l,{name:"arrow-down"})]}),{},!0)]})),_:1}),Object(c["k"])(d,{class:"content",align:"center",justify:"space-around"},{default:i((function(){return[Object(c["H"])(t.$slots,"default",{},void 0,!0)]})),_:3})],4)})),s={props:{title:{type:String,default:""},subtitle:{type:String,default:""},fg:{type:String,default:"#666"},bg:{type:String,default:"#FFF"},icon:{type:String,default:"gem-o"}}},u=(n("517d"),n("d959")),l=n.n(u);const b=l()(s,[["render",o],["__scopeId","data-v-58a92998"]]);e["a"]=b},"517d":function(t,e,n){"use strict";n("5590")},5590:function(t,e,n){},"857a":function(t,e,n){var c=n("1d80"),i=/"/g;t.exports=function(t,e,n,a){var r=String(c(t)),o="<"+e;return""!==n&&(o+=" "+n+'="'+String(a).replace(i,"&quot;")+'"'),o+">"+r+"</"+e+">"}},8710:function(t,e,n){"use strict";n("994b")},9911:function(t,e,n){"use strict";var c=n("23e7"),i=n("857a"),a=n("af03");c({target:"String",proto:!0,forced:a("link")},{link:function(t){return i(this,"a","href",t)}})},"994b":function(t,e,n){},af03:function(t,e,n){var c=n("d039");t.exports=function(t){return c((function(){var e=""[t]('"');return e!==e.toLowerCase()||e.split('"').length>3}))}},e2f8:function(t,e,n){"use strict";n.r(e);n("b0c0"),n("9911");var c=n("7a23"),i=Object(c["X"])("data-v-2d6a3c64");Object(c["D"])("data-v-2d6a3c64");var a={class:"list"};Object(c["B"])();var r=i((function(t,e,n,r,o,s){var u=Object(c["I"])("van-grid-item"),l=Object(c["I"])("van-grid"),b=Object(c["I"])("block"),d=Object(c["I"])("BaseLayout");return Object(c["A"])(),Object(c["g"])(d,{title:"服务",navbar:"hide"},{default:i((function(){return[Object(c["k"])("div",a,[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(o.state.list,(function(t,e){return Object(c["A"])(),Object(c["g"])(b,{class:"block",key:e,title:t.name,subtitle:"",icon:t.icon},{default:i((function(){return[Object(c["k"])(l,{class:"grid","column-num":"4","icon-size":"32",gutter:"10",border:!1,center:"",square:"",clickable:""},{default:i((function(){return[(Object(c["A"])(!0),Object(c["g"])(c["a"],null,Object(c["G"])(t.children,(function(t,e){return Object(c["U"])((Object(c["A"])(),Object(c["g"])(u,{key:e,icon:t.icon||"diamond-o","icon-color":s.color(),text:t.name,onClick:function(e){return s.handleClick(t.link)}},null,8,["icon","icon-color","text","onClick"])),[[c["Q"],t.status>0]])})),128))]})),_:2},1024)]})),_:2},1032,["title","icon"])})),128))])]})),_:1})})),o=n("109d"),s=(n("18cd"),n("d959")),u=n.n(s);const l=u()(o["a"],[["render",r],["__scopeId","data-v-2d6a3c64"]]);e["default"]=l}}]);