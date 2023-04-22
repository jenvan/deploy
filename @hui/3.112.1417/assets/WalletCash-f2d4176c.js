import{o as r,c as p,g as c,h as q,n as _,F as x,i as z,t as m,r as H,a as i,e as S,d as n,b as a,w as v,v as g,f as u,p as J,j as M}from"./index-fec0a343.js";import{B as Q}from"./BaseLayout-e28c9bd8.js";import{_ as N}from"./_plugin-vue_export-helper-c27b6911.js";const T={props:{number:{type:[String,Number],default:0},fg:{type:String,default:"#666"},bg:{type:String,default:"transparent"},size:String},data(){return{list:[]}},mounted(){this.scroll()},watch:{number(t,o){this.scroll()}},methods:{scroll(){let t=[];this.number.toString().split("").forEach(l=>{t.push(l)});let o=setInterval(()=>{let l=t.length;if(l==0){clearInterval(o);return}let e=t.pop();if(this.list[l-1]=e,e==".")return;let f=setInterval(()=>{this.list[l-1]++,this.list[l-1]>=10&&(this.list[l-1]=0),this.list[l-1]==e&&clearInterval(f)},30)},100)}}};function P(t,o,l,e,f,h){return r(),p("ul",{class:"card",style:_({background:l.bg,color:l.fg})},[c("li",{class:"slot",style:_({fontSize:l.size})},[q(t.$slots,"prepend",{},void 0,!0)],4),(r(!0),p(x,null,z(f.list,(b,y)=>(r(),p("li",{key:y,style:_({fontSize:l.size})},m(b),5))),128)),c("li",{class:"slot",style:_({fontSize:l.size})},[q(t.$slots,"default",{},void 0,!0)],4)],4)}const A=N(T,[["render",P],["__scopeId","data-v-dd96cdd8"]]);const G={components:{BaseLayout:Q,NumberRoll:A},props:{action:{type:String,default:"deposit"}},setup(){return{state:H({stat:{balance:0,freez:0,transfer:0,deposit:0,withdrawal:0,consume:0,reward:0},num:100,remark:"微信充值",account:"",amount:0,tabs:["充值","提现"],active:0,type:"",loading:!1,finished:!1,list:[],offset:0,limit:20})}},created(){this.state.account=this.$store.openid,this.state.active=/withdraw/.test(this.action)?1:0,this.onChange()},methods:{onChange(){this.state.type=["deposit","withdrawal"][this.state.active],this.state.loading=!0,this.state.finished=!1,this.state.offset=0,this.state.list=[],this.onLoad(),this.$http.get("/property/summary?subject=cash").then(t=>this.state.stat=t)},onLoad(){this.$http.get("/property/cashlist?type="+this.state.type+"&offset="+this.state.offset+"&limit="+this.state.limit).then(t=>{(t.length==0||t.length<this.state.limit)&&(this.state.finished=!0),this.state.loading=!1,this.state.offset+=t.length;for(let o in t){let l=t[o];this.state.list.push({...l,amount:l.amount.replace(/(\.\d\d)(\d+)$/,"$1"),result:["待付款","交易完成","交易取消"][l.status],color:["#999","#090","#F66"][l.status]})}})},onQuery(){this.$http.post("/property/cashRequest?type=deposit&amount="+this.state.num+"&remark="+this.state.remark).then(t=>{t.code&&this.$dialog.alert({title:"请用微信扫码付款",message:"<img src='http://api.qrserver.com/v1/create-qr-code/?size=250x250&ecc=H&margin=10&data="+t.code+"'>",theme:"round-button",confirmButtonText:"我已完成付款",allowHtml:!0}).then(this.onChange)||WeixinJSBridge&&WeixinJSBridge.invoke("getBrandWCPayRequest",t,o=>{if(o.err_msg=="get_brand_wcpay_request:ok")return this.$dialog.alert({message:"充值成功"}).then(this.onChange);this.$toast("充值失败"),this.onChange()})}).catch(this.onChange)},onSubmit(){if(!/[\w]{10,}/.test(this.state.account))return this.$toast("提现账号不合要求");this.$http.post("/property/cashRequest?type=withdrawal&amount="+this.state.amount+"&detail="+this.state.account+"&remark=提现到微信零钱").then(this.onChange)},onCancel(t){this.$http.post("/property/cashCancel?id="+t).then(this.onChange)}}},K=t=>(J("data-v-80a737eb"),t=t(),M(),t),O=K(()=>c("div",{class:"title"},"账户余额 (元)",-1)),X={class:"title"},Y={class:"info"},Z={class:"deposit"},$={class:"slider-btn"};function tt(t,o,l,e,f,h){const b=i("van-tab"),y=i("van-tabs"),F=i("number-roll"),d=i("van-col"),k=i("van-row"),V=i("van-field"),B=i("van-button"),I=i("van-icon"),R=i("van-slider"),U=i("van-form"),W=i("van-empty"),C=i("van-cell"),j=i("van-cell-group"),D=i("van-list"),E=i("BaseLayout");return r(),S(E,{title:"充值提现",bg:"#F9F9F9",height:0},{head:n(()=>[a(y,{active:e.state.active,"onUpdate:active":o[0]||(o[0]=s=>e.state.active=s),background:"transparent",color:"var(--van-primary-color)",type:"line",swipeable:"",animated:"",onChange:h.onChange},{default:n(()=>[(r(!0),p(x,null,z(e.state.tabs,(s,w)=>(r(),S(b,{key:w,title:s},null,8,["title"]))),128))]),_:1},8,["active","onChange"])]),default:n(()=>[a(k,{class:"stat"},{default:n(()=>[a(d,{span:"12"},{default:n(()=>[O,a(F,{number:e.state.stat.balance,fg:"#FFF",size:"32px"},null,8,["number"])]),_:1}),a(d,{span:"12"},{default:n(()=>[c("div",X,"累计"+m(e.state.tabs[e.state.active])+" (元)",1),a(F,{number:e.state.active?Math.abs(e.state.stat.withdrawal):Math.abs(e.state.stat.deposit),fg:"#FFF",size:"32px"},null,8,["number"])]),_:1})]),_:1}),c("div",Y,[v(c("div",Z,[a(V,{type:"number",min:"1",border:1,modelValue:e.state.num,"onUpdate:modelValue":o[1]||(o[1]=s=>e.state.num=s),"input-align":"right",clearable:"",label:"金额",placeholder:"请输入充值金额"},{extra:n(()=>[u(" 元")]),_:1},8,["modelValue"]),a(V,{modelValue:e.state.remark,"onUpdate:modelValue":o[2]||(o[2]=s=>e.state.remark=s),type:"text",maxlength:"20","input-align":"right",label:"备注",placeholder:"可以不填"},null,8,["modelValue"]),a(B,{round:"",block:"",color:"#0C6",onClick:h.onQuery},{default:n(()=>[u("立即充值")]),_:1},8,["onClick"])],512),[[g,!e.state.active]]),v(a(U,{class:"withdrawal",onSubmit:h.onSubmit},{default:n(()=>[a(k,{align:"center"},{default:n(()=>[a(d,{span:"7"},{default:n(()=>[u(" 收款账号： ")]),_:1}),a(d,{span:"17",class:"account"},{default:n(()=>[a(I,{name:t.$store.avatar,class:"avatar"},null,8,["name"]),u(" "+m(t.$store.nickname),1)]),_:1})]),_:1}),a(k,{align:"center"},{default:n(()=>[a(d,{span:"7"},{default:n(()=>[u(" 提现金额： ")]),_:1}),a(d,{span:"17"},{default:n(()=>[a(R,{class:"slider",modelValue:e.state.amount,"onUpdate:modelValue":o[3]||(o[3]=s=>e.state.amount=s),min:"10",max:"200",step:"1","active-color":"#0C6"},{button:n(()=>[c("div",$,m(e.state.amount),1)]),_:1},8,["modelValue"])]),_:1}),a(d,{span:"24"},{default:n(()=>[a(B,{round:"",block:"",color:"#0C6","native-type":"submit"},{default:n(()=>[u("申请提现")]),_:1})]),_:1})]),_:1})]),_:1},8,["onSubmit"]),[[g,e.state.active]]),a(D,{loading:e.state.loading,"onUpdate:loading":o[4]||(o[4]=s=>e.state.loading=s),finished:e.state.finished,"loading-text":"正在请求数据 ...","finished-text":"没有更多了","immediate-check":!1,onLoad:h.onLoad},{default:n(()=>[v(a(W,null,null,512),[[g,e.state.list.length==0]]),(r(!0),p(x,null,z(e.state.list,(s,w)=>(r(),S(j,{class:"block",border:!1,key:w,onClick:L=>t.$toast(s.remark)},{default:n(()=>[a(C,{class:"dt",border:!1,title:s.dt},{extra:n(()=>[c("span",{style:_({color:s.color})},m(s.result),5),u("   #"+m(s.id)+" ",1),v(a(I,{class:"close",name:"close",size:"21",color:"#F00",onClick:L=>h.onCancel(s.id)},null,8,["onClick"]),[[g,s.status==0]])]),_:2},1032,["title"]),a(C,{class:"item",border:!1,title:s.remark,value:s.amount+" 元"},null,8,["title","value"]),a(C,{class:"detail",border:!1,value:s.detail,"is-link":"",onClick:L=>t.$copy(s.detail)},null,8,["value","onClick"])]),_:2},1032,["onClick"]))),128))]),_:1},8,["loading","finished","onLoad"])])]),_:1})}const nt=N(G,[["render",tt],["__scopeId","data-v-80a737eb"]]);export{nt as default};
