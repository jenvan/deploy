(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1ac075e8"],{"043e":function(t,e,i){},"0d48":function(t,e,i){"use strict";i("043e")},2175:function(t,e,i){"use strict";i.r(e);var n=i("7a23"),s=Object(n["P"])("data-v-44889887");Object(n["z"])("data-v-44889887");var a={class:"fields"},o=Object(n["h"])("legend",null,"所选方案参数设置",-1),l=Object(n["g"])("保存"),c=Object(n["h"])("div",{class:"notice"},"温馨提示：BTC 价格暴跌则立即暂停自动建仓30分钟；如果系统内置的自动建仓推荐方案不能满足您的要求，请升级钻石会员后按照自己的指标要求进行自定义。",-1);Object(n["x"])();var r=s((function(t,e,i,r,u,h){var f=Object(n["E"])("van-picker"),d=Object(n["E"])("van-popup"),m=Object(n["E"])("van-cell"),p=Object(n["E"])("van-stepper"),b=Object(n["E"])("van-field"),g=Object(n["E"])("van-button"),w=Object(n["E"])("van-form"),O=Object(n["E"])("BaseLayout");return Object(n["w"])(),Object(n["f"])(O,{title:"自动建仓"},{default:s((function(){return[Object(n["h"])(d,{show:r.state.showPicker1,"onUpdate:show":e[2]||(e[2]=function(t){return r.state.showPicker1=t}),round:"",position:"bottom"},{default:s((function(){return[Object(n["h"])(f,{title:"选择推荐方案",columns:r.state.list1,"columns-field-names":{text:"name"},onCancel:e[1]||(e[1]=function(t){return r.state.showPicker1=!1}),onConfirm:h.onConfirm1},null,8,["columns","onConfirm"])]})),_:1},8,["show"]),Object(n["h"])(d,{show:r.state.showPicker2,"onUpdate:show":e[4]||(e[4]=function(t){return r.state.showPicker2=t}),round:"",position:"bottom"},{default:s((function(){return[Object(n["h"])(f,{title:"选择策略模板",columns:r.state.list2,"columns-field-names":{text:"name"},onCancel:e[3]||(e[3]=function(t){return r.state.showPicker2=!1}),onConfirm:h.onConfirm2},null,8,["columns","onConfirm"])]})),_:1},8,["show"]),Object(n["h"])(w,{class:"form"},{default:s((function(){return[Object(n["h"])(m,{class:["chooser",r.state.list1.length>0?"animate__animated animate__flash":""],border:!1,title:h.title1,label:"共有 "+r.state.list1.length+" 个推荐方案","is-link":"",onClick:e[5]||(e[5]=function(t){return r.state.showPicker1=!0})},null,8,["class","title","label"]),Object(n["h"])(m,{class:["chooser",r.state.list2.length>0?"animate__animated animate__flash":""],border:!1,title:h.title2,label:"共有 "+r.state.list2.length+" 个策略模板","is-link":"",onClick:e[6]||(e[6]=function(t){return r.state.showPicker2=!0})},null,8,["class","title","label"]),Object(n["O"])(Object(n["h"])("fieldset",a,[o,Object(n["h"])(b,{class:"stepper",label:"限制最大任务数","label-width":"200","right-icon":"warning-o",onClickRightIcon:e[8]||(e[8]=function(t){return h.showTip("该方案允许同时进行的最大监控任务数量（持仓币种数量）")})},{input:s((function(){return[Object(n["h"])(p,{modelValue:r.state.config.limit_task,"onUpdate:modelValue":e[7]||(e[7]=function(t){return r.state.config.limit_task=t}),step:"1",min:"1",max:"100","button-size":"18"},null,8,["modelValue"])]})),_:1}),Object(n["h"])(b,{class:"stepper",label:"限制补仓率（补仓/建仓）","label-width":"200","right-icon":"warning-o",onClickRightIcon:e[10]||(e[10]=function(t){return h.showTip("待推荐币种的历史补仓次数与建仓次数的比值 < 设置比值时推荐（根据整个系统历史成交数据统计）")})},{input:s((function(){return[Object(n["h"])(p,{modelValue:r.state.config.limit_rate,"onUpdate:modelValue":e[9]||(e[9]=function(t){return r.state.config.limit_rate=t}),step:"0.1",min:"0.1",max:"10","button-size":"18"},null,8,["modelValue"])]})),_:1}),Object(n["h"])(b,{class:"stepper",label:"相同币种推荐间隔（分钟）","label-width":"200","right-icon":"warning-o",onClickRightIcon:e[12]||(e[12]=function(t){return h.showTip("同一方案下同一币种推荐的最小时间间隔")})},{input:s((function(){return[Object(n["h"])(p,{modelValue:r.state.config.limit_interval,"onUpdate:modelValue":e[11]||(e[11]=function(t){return r.state.config.limit_interval=t}),step:"1",min:"3",max:"1440","button-size":"18"},null,8,["modelValue"])]})),_:1}),Object(n["h"])(b,{class:"stepper",label:"相同币种的监控任务数","label-width":"200","right-icon":"warning-o",onClickRightIcon:e[14]||(e[14]=function(t){return h.showTip("同一方案下同一币种允许的最大监控（持仓）任务数量")})},{input:s((function(){return[Object(n["h"])(p,{modelValue:r.state.config.limit_number,"onUpdate:modelValue":e[13]||(e[13]=function(t){return r.state.config.limit_number=t}),step:"1",min:"1",max:"10","button-size":"18"},null,8,["modelValue"])]})),_:1}),Object(n["h"])(b,{class:"stepper",label:"限制买入价1（买入/上次买入）","label-width":"200","right-icon":"warning-o",onClickRightIcon:e[16]||(e[16]=function(t){return h.showTip("同一方案下待推荐币种的买入价和正在持仓的同一币种的买入价格的比值 < 设置的比值时推荐；若无持仓则忽略此规则")})},{input:s((function(){return[Object(n["h"])(p,{modelValue:r.state.config.limit_price1,"onUpdate:modelValue":e[15]||(e[15]=function(t){return r.state.config.limit_price1=t}),step:"0.01",min:"0.01",max:"10","button-size":"18"},null,8,["modelValue"])]})),_:1}),Object(n["h"])(b,{class:"stepper",label:"限制买入价2（买入/上次卖出）","label-width":"200","right-icon":"warning-o",onClickRightIcon:e[18]||(e[18]=function(t){return h.showTip("同一方案下待推荐币种的买入价与该币种最近60分钟内卖出价的比值 < 设置比值时推荐，最近60分钟内没卖出则忽略此规则")})},{input:s((function(){return[Object(n["h"])(p,{modelValue:r.state.config.limit_price2,"onUpdate:modelValue":e[17]||(e[17]=function(t){return r.state.config.limit_price2=t}),step:"0.01",min:"0.01",max:"10","button-size":"18"},null,8,["modelValue"])]})),_:1})],512),[[n["L"],r.state.sid>0]]),Object(n["h"])(g,{block:"",class:"submit",type:"primary",onClick:h.onSubmit},{default:s((function(){return[l]})),_:1},8,["onClick"]),c]})),_:1})]})),_:1})})),u=i("5530"),h=(i("99af"),i("b0c0"),i("2824")),f={components:{BaseLayout:h["a"]},setup:function(){var t=Object(n["A"])({showPicker1:!1,showPicker2:!1,list:[],list1:[{id:1,name:"快线：低位急速下跌时买入"},{id:2,name:"短线：低位上涨趋势时买入"}],list2:[],pid:0,sid:0,config:{limit_task:10,limit_rate:2,limit_interval:3,limit_number:2,limit_price1:.9,limit_price2:1.1}});return{state:t}},created:function(){var t=this;this.initPlan(),this.$http.post("/exchange/strategylist").then((function(e){if(0==e.length)return t.$toast("还没有策略模板，请先增加"),t.$router.push("/my/strategy/create");t.state.list2=[{id:0,name:"【不使用选择的方案】"}].concat(e)}))},computed:{name1:function(){var t="";for(var e in this.state.list1)if(this.state.list1[e].id==this.state.pid){t=this.state.list1[e].name;break}return t},name2:function(){var t="";for(var e in this.state.list2)if(this.state.list2[e].id==this.state.sid){t=this.state.list2[e].name;break}return t},title1:function(){return 0==this.state.pid?"请选择系统内置的自动建仓推荐方案":"符合【 "+this.name1+" 】方案时"},title2:function(){return 0==this.state.pid?"请先选择推荐方案，再选择量化策略":0==this.state.sid?"【暂停推荐】":"使用【 "+this.name2+" 】策略逢低建仓"}},methods:{initPlan:function(){var t=this;this.$http.get("/exchange/planlist").then((function(e){return t.state.list=e}))},showTip:function(t){this.$toast({message:t,duration:0,closeOnClick:!0})},onConfirm1:function(t){if(this.state.showPicker1=!1,this.state.pid=t.id,0!=this.state.list.length)for(var e in this.state.list)if(this.state.list[e].pid==this.state.pid){this.state.sid=this.state.list[e].sid,this.state.config=Object(u["a"])(Object(u["a"])({},this.state.config),JSON.parse(this.state.list[e].config));break}},onConfirm2:function(t){if(this.state.showPicker2=!1,0==this.state.pid)return this.state.sid=0,this.$toast("请先选择方案");this.state.sid=t.id,this.state.name2=t.name},onSubmit:function(){var t=this;if(0==this.state.pid)return this.$toast("请先选择方案");this.$http.post("/exchange/plansave",{pid:this.state.pid,sid:this.state.sid,config:JSON.stringify(this.state.config)}).then((function(){t.initPlan()}))}}};i("0d48");f.render=r,f.__scopeId="data-v-44889887";e["default"]=f},"99af":function(t,e,i){"use strict";var n=i("23e7"),s=i("d039"),a=i("e8b5"),o=i("861d"),l=i("7b0b"),c=i("50c4"),r=i("8418"),u=i("65f0"),h=i("1dde"),f=i("b622"),d=i("2d00"),m=f("isConcatSpreadable"),p=9007199254740991,b="Maximum allowed index exceeded",g=d>=51||!s((function(){var t=[];return t[m]=!1,t.concat()[0]!==t})),w=h("concat"),O=function(t){if(!o(t))return!1;var e=t[m];return void 0!==e?!!e:a(t)},j=!g||!w;n({target:"Array",proto:!0,forced:j},{concat:function(t){var e,i,n,s,a,o=l(this),h=u(o,0),f=0;for(e=-1,n=arguments.length;e<n;e++)if(a=-1===e?o:arguments[e],O(a)){if(s=c(a.length),f+s>p)throw TypeError(b);for(i=0;i<s;i++,f++)i in a&&r(h,f,a[i])}else{if(f>=p)throw TypeError(b);r(h,f++,a)}return h.length=f,h}})}}]);
//# sourceMappingURL=chunk-1ac075e8.a26c9f7f.js.map