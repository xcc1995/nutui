System.register(["./mobile-legacy.d70f4bec.js","./vendor-legacy.d2a5cd34.js","./index-legacy.3b57dd3a.js"],(function(e){"use strict";var t,l,c,i,n,s,d,u;return{setters:[function(e){t=e.c},function(e){l=e.m,c=e.r,i=e.o,n=e.e,s=e.j,d=e.k,u=e.g},function(){}],execute:function(){const{createDemo:o}=t("cell");var a=e("default",o({setup:()=>({testClick:e=>{console.log("点击事件")},switchChecked:l(!0)})}));const r={class:"demo"},h=u("h2",null,"基本用法",-1),f=u("h2",null,"直接使用插槽(slot)",-1),k=u("div",null,"自定义内容",-1),m=u("h2",null,"展示图标",-1),g=u("h2",null,"只展示 desc ，可通过 desc-text-align 调整内容位置",-1);a.render=function(e,t,l,u,o,a){const C=c("nut-cell"),j=c("nut-cell-group"),p=c("nut-switch");return i(),n("div",r,[h,s(C,{title:"我是标题",desc:"描述文字"}),s(C,{title:"我是标题","sub-title":"副标题描述",desc:"描述文字"}),s(C,{title:"点击测试",onClick:e.testClick},null,8,["onClick"]),s(C,{title:"圆角设置 0","round-radius":"0"}),f,s(C,{title:"我是标题",desc:"描述文字"},{default:d((()=>[k])),_:1}),s(j,{title:"链接 | 分组用法"},{default:d((()=>[s(C,{title:"链接","is-link":""}),s(C,{title:"URL 跳转",desc:"https://jd.com","is-link":"",url:"https://jd.com"}),s(C,{title:"路由跳转 ’/‘ ",to:"/"})])),_:1}),s(j,{title:"自定义右侧箭头区域"},{default:d((()=>[s(C,{title:"Switch"},{link:d((()=>[s(p,{modelValue:e.switchChecked,"onUpdate:modelValue":t[0]||(t[0]=t=>e.switchChecked=t)},null,8,["modelValue"])])),_:1})])),_:1}),m,s(C,{title:"姓名",icon:"my",desc:"张三",isLink:""}),g,s(C,{"desc-text-align":"left",desc:"张三"})])}}}}));