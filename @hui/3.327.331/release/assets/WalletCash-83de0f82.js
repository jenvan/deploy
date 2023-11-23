import{o as r,c as f,j as c,l as q,n as m,F,k as V,t as p,r as P,s as D,f as B,b as o,h as i,a as s,w as g,v as y,i as u,u as N,p as Q,q as H}from"./index-3fe47f94.js";import{B as J}from"./BaseLayout-175dd473.js";import{_ as E}from"./_plugin-vue_export-helper-c27b6911.js";const A={props:{number:{type:[String,Number],default:0},fg:{type:String,default:"#666"},bg:{type:String,default:"transparent"},size:String},data(){return{list:[]}},mounted(){this.scroll()},watch:{number(t,n){this.scroll()}},methods:{scroll(){let t=[];this.number.toString().split("").forEach(e=>{t.push(e)});let n=setInterval(()=>{let e=t.length;if(e==0){clearInterval(n);return}let a=t.pop();if(this.list[e-1]=a,a==".")return;let v=setInterval(()=>{this.list[e-1]++,this.list[e-1]>=10&&(this.list[e-1]=0),this.list[e-1]==a&&clearInterval(v)},30)},100)}}};function G(t,n,e,a,v,h){return r(),f("ul",{class:"card",style:m({background:e.bg,color:e.fg})},[c("li",{class:"slot",style:m({fontSize:e.size})},[q(t.$slots,"prepend",{},void 0,!0)],4),(r(!0),f(F,null,V(v.list,(b,k)=>(r(),f("li",{key:k,style:m({fontSize:e.size})},p(b),5))),128)),c("li",{class:"slot",style:m({fontSize:e.size})},[q(t.$slots,"default",{},void 0,!0)],4)],4)}const K=E(A,[["render",G],["__scopeId","data-v-dd96cdd8"]]);const O={components:{BaseLayout:J,NumberRoll:K},props:{action:{type:String,default:"deposit"}},setup(){const t=P({stat:{balance:0,freez:0,transfer:0,deposit:0,withdrawal:0,consume:0,reward:0},num:100,remark:"微信充值",account:"",amount:0,tabs:["充值","提现"],active:0,type:"",loading:!1,finished:!1,list:[],offset:0,limit:20}),n=D(null);return{state:t,timer:n}},created(){this.state.account=this.$store.openid,this.state.active=/withdraw/.test(this.action)?1:0,this.onChange()},unmounted(){!_.isEmpty(this.timer)&&clearInterval(this.timer)},methods:{onChange(){this.state.type=["deposit","withdrawal"][this.state.active],this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad(),this.$http.get("/property/summary?subject=cash").then(t=>this.state.stat=t)},onLoad(){this.$http.get("/property/cashlist?type="+this.state.type+"&offset="+this.state.offset+"&limit="+this.state.limit).then(t=>{(t.length==0||t.length<this.state.limit)&&(this.state.finished=!0),this.state.loading=!1,this.state.offset+=t.length;for(let n in t){let e=t[n];this.state.list.push({...e,amount:e.amount.replace(/(\.\d\d)(\d+)$/,"$1"),result:["待付款","交易完成","交易取消"][e.status],color:["#999","#090","#F66"][e.status]})}})},onQuery(){this.$http.post("/property/cashRequest?type=deposit&amount="+this.state.num+"&remark="+this.state.remark).then(t=>{if(t.code)return this.$dialog.alert({title:"请用微信扫码付款",message:"<img src='"+this.$host+"/util/qr?data="+t.code+"' width='250'>",theme:"round-button",showCancelButton:!0,confirmButtonText:"我已完成付款",cancelButtonText:"取消",allowHtml:!0}).then(this.onChange).catch(this.onCancel);if(!this.$store.inWechat)return this.$toast("当前环境不支持微信支付");if(!this.$mini)return WeixinJSBridge.invoke("getBrandWCPayRequest",t,e=>this.showResult(e.err_msg=="get_brand_wcpay_request:ok"));let n=Math.random().toString(26).substr(3,8);return this.$http.post("/user/status?key="+n,t).then(()=>{this.timer=setInterval(()=>{this.$http.get("/user/status?key="+n).then(e=>{if(!(typeof e!="object"||_.isEmpty(e)||_.isEmpty(e.errMsg)))return clearInterval(this.timer),this.showResult(e.errMsg=="requestPayment:ok")})},3e3),wx.miniProgram.navigateTo({url:"/pages/index/proxy?type=pay&key="+n})})}).catch(this.onChange)},onSubmit(){if(!/[\w]{10,}/.test(this.state.account))return this.$toast("提现账号不合要求");this.$http.post("/property/cashRequest?type=withdrawal&amount="+this.state.amount+"&detail="+this.state.account+"&remark=提现到微信零钱").then(this.onChange)},onCancel(t){!/^\d+$/.test(t)&&(t=0),this.$http.post("/property/cashCancel?id="+t).then(this.onChange)},showResult(t){let n="充值失败",e=this.onCancel;return t&&(n="充值成功",e=this.onChange),this.$dialog.alert({message:n}).then(e)}}},X=t=>(Q("data-v-5748345f"),t=t(),H(),t),Y=X(()=>c("div",{class:"title"},"账户余额 (元)",-1)),Z={class:"title"},tt={class:"info"},et={class:"deposit"},at={class:"slider-btn"},st=["onClick"];function nt(t,n,e,a,v,h){const b=i("van-tab"),k=i("van-tabs"),z=i("number-roll"),d=i("van-col"),w=i("van-row"),I=i("van-field"),L=i("van-button"),R=i("van-icon"),U=i("van-slider"),W=i("van-form"),$=i("van-empty"),C=i("van-cell"),M=i("van-cell-group"),T=i("van-list"),j=i("BaseLayout");return r(),B(j,{title:"充值提现",bg:"#F9F9F9",height:"0"},{head:o(()=>[s(k,{active:a.state.active,"onUpdate:active":n[0]||(n[0]=l=>a.state.active=l),background:"transparent",color:"var(--van-primary-color)",type:"line",swipeable:"",animated:"",onChange:h.onChange},{default:o(()=>[(r(!0),f(F,null,V(a.state.tabs,(l,S)=>(r(),B(b,{key:S,title:l},null,8,["title"]))),128))]),_:1},8,["active","onChange"])]),default:o(()=>[s(w,{class:"stat"},{default:o(()=>[s(d,{span:"12"},{default:o(()=>[Y,s(z,{number:a.state.stat.balance,fg:"#FFF",size:"32px"},null,8,["number"])]),_:1}),s(d,{span:"12"},{default:o(()=>[c("div",Z,"累计"+p(a.state.tabs[a.state.active])+" (元)",1),s(z,{number:a.state.active?a.state.stat.withdrawal*-1:a.state.stat.deposit,fg:"#FFF",size:"32px"},null,8,["number"])]),_:1})]),_:1}),c("div",tt,[g(c("div",et,[s(I,{type:"number",min:"1",border:!0,modelValue:a.state.num,"onUpdate:modelValue":n[1]||(n[1]=l=>a.state.num=l),"input-align":"right",clearable:"",label:"金额",placeholder:"请输入充值金额"},{extra:o(()=>[u(" 元")]),_:1},8,["modelValue"]),s(I,{modelValue:a.state.remark,"onUpdate:modelValue":n[2]||(n[2]=l=>a.state.remark=l),type:"text",maxlength:"20","input-align":"right",label:"备注",placeholder:"可以不填"},null,8,["modelValue"]),s(L,{round:"",block:"",type:"primary",onClick:h.onQuery},{default:o(()=>[u("立即充值")]),_:1},8,["onClick"])],512),[[y,!a.state.active]]),g(s(W,{class:"withdrawal",onSubmit:h.onSubmit},{default:o(()=>[s(w,{align:"center"},{default:o(()=>[s(d,{span:"7"},{default:o(()=>[u(" 收款账号： ")]),_:1}),s(d,{span:"17",class:"account"},{default:o(()=>[s(R,{name:t.$store.avatar,class:"avatar"},null,8,["name"]),u(" "+p(t.$store.nickname),1)]),_:1})]),_:1}),s(w,{align:"center"},{default:o(()=>[s(d,{span:"7"},{default:o(()=>[u(" 提现金额： ")]),_:1}),s(d,{span:"17"},{default:o(()=>[s(U,{class:"slider",modelValue:a.state.amount,"onUpdate:modelValue":n[3]||(n[3]=l=>a.state.amount=l),min:"10",max:"200",step:"1","active-color":"#0C6"},{button:o(()=>[c("div",at,p(a.state.amount),1)]),_:1},8,["modelValue"])]),_:1}),s(d,{span:"24"},{default:o(()=>[s(L,{round:"",block:"",type:"primary","native-type":"submit"},{default:o(()=>[u("申请提现")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]),[[y,a.state.active]]),s(T,{loading:a.state.loading,"onUpdate:loading":n[4]||(n[4]=l=>a.state.loading=l),finished:a.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:h.onLoad},{default:o(()=>[g(s($,null,null,512),[[y,a.state.list.length==0]]),(r(!0),f(F,null,V(a.state.list,(l,S)=>(r(),B(M,{class:"block",border:!1,key:S,onClick:x=>t.$toast(l.remark)},{default:o(()=>[s(C,{class:"dt",border:!1,title:l.dt},{extra:o(()=>[c("span",{style:m({color:l.color}),onClick:N(x=>t.$toast("#"+l.id),["stop"])},p(l.result),13,st),u("   "),g(s(R,{class:"close",name:"close",size:"21",color:"#F00",onClick:x=>h.onCancel(l.id)},null,8,["onClick"]),[[y,l.status==0]])]),_:2},1032,["title"]),s(C,{class:"item",border:!1,title:l.remark,value:l.amount+" 元"},null,8,["title","value"]),s(C,{class:"detail",border:!1,title:l.detail,"is-link":"",onClick:N(x=>t.$copy(l.detail),["stop"])},null,8,["title","onClick"])]),_:2},1032,["onClick"]))),128))]),_:1},8,["loading","finished","onLoad"])])]),_:1})}const rt=E(O,[["render",nt],["__scopeId","data-v-5748345f"]]);export{rt as default};
