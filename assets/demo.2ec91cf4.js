import{c as t}from"./mobile.e87bbe6b.js";import{x as e,y as o,r,o as a,c as p,f as l,s as i,j as n}from"./vendor.96954379.js";import"./index.89b78ef3.js";const{createDemo:s}=t("drag");var d=s({setup:()=>({right:function(){return document.documentElement.clientWidth-300-9},bottom:function(){return document.documentElement.clientHeight-559}})});const u=i();e("data-v-54433304");const c={class:"demo full"},f=l("h2",null,"基础用法",-1),y=n("触摸移动"),m=l("h2",{style:{top:"30px",position:"relative"}},"限制拖拽方向",-1),x=n("只能X轴拖拽"),b=n("只能Y轴拖拽"),_=l("h2",{style:{top:"60px",position:"relative"}},"自动吸边",-1),h=n("拖动我"),v=l("h2",{style:{top:"90px",position:"relative"}},"限制拖动边界",-1),g=l("div",{class:"drag-boundary"},null,-1),j=n("限制拖拽边界");o();const E=u(((t,e,o,i,n,s)=>{const d=r("nut-button"),E=r("nut-drag");return a(),p("div",c,[f,l(E,{style:{top:"120px",left:"8px"}},{default:u((()=>[l(d,{type:"primary"},{default:u((()=>[y])),_:1})])),_:1}),m,l(E,{direction:"x",style:{top:"200px",left:"8px"}},{default:u((()=>[l(d,{type:"primary"},{default:u((()=>[x])),_:1})])),_:1}),l(E,{direction:"y",style:{top:"200px",right:"50px"}},{default:u((()=>[l(d,{type:"primary"},{default:u((()=>[b])),_:1})])),_:1}),_,l(E,{direction:"x",attract:!0,style:{top:"275px",left:"8px"}},{default:u((()=>[l(d,{type:"primary"},{default:u((()=>[h])),_:1})])),_:1}),v,g,l(E,{boundary:{top:361,left:9,bottom:t.bottom(),right:t.right()},style:{top:"400px",left:"50px"}},{default:u((()=>[l(d,{type:"primary"},{default:u((()=>[j])),_:1})])),_:1},8,["boundary"])])}));d.render=E,d.__scopeId="data-v-54433304";export default d;
