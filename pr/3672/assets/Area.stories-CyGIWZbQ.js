import{a0 as e}from"./iframe-C8fQ-xtn.js";import{x as E,C as v,m as G,b as F,a as k}from"./_data-xYQxt4mP.js";import{s as O}from"./markColor-BBrpQ2Vv.js";import{d as I}from"./area-Yte8cOEo.js";import{a as K,c as L}from"./step-fxRLXcQr.js";import{m as R,c as M,d as P}from"./monotone-DS2qxjW1.js";import{l as Z}from"./line-58qam1P9.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-NDfdbw_g.js";import"./ChartSwatch-Cd5SY14q.js";import"./HStack-Cu0jN-Pi.js";import"./Stack-Dke1vo_X.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-62xqq9Y7.js";import"./index-DB0IE9kF.js";import"./index-DErwPu5P.js";const $={linear:M,monotone:R,natural:L,step:K};function N(o){return Number.isFinite(o.px)&&Number.isFinite(o.py)&&Number.isFinite(o.py0)}function g(o,a={}){const b=a.color,C=typeof a.opacity=="number"&&Number.isFinite(a.opacity)?Math.min(1,Math.max(0,a.opacity)):.3,D=a.curve??"monotone",d=a.gradient??!1,A=a.stroke??!0,u={type:"area",key:o,dataKeys:[o],color:b,label:a.label??o,layout:{stack:a.stack,includeZero:!0},resolve(i,c){const{data:x,xKey:f,xScale:j,yScale:n}=i,l=[];for(let r=0;r<x.length;r++){const t=x[r];let h,y;if(c){const s=c[r];h=s?n(s.y1):NaN,y=s?n(s.y0):NaN}else{const s=t[o],_=typeof s=="number"&&Number.isFinite(s)?s:NaN;h=n(_),y=n(0)}l.push({px:E(t,f,j),py:h,py0:y,dataIndex:r})}return l},render(i){if(i.length===0)return null;const c=$[D]??R,f=I().defined(N).x(t=>t.px).y0(t=>t.py0).y1(t=>t.py).curve(c)(i)??"",n=P().defined(N).x(t=>t.px).y(t=>t.py).curve(c)(i)??"",l=`area-grad-${(u._uid??o).replace(/[^a-zA-Z0-9_-]/g,"-")}`,r=O(u,b);return e.jsxs("g",{children:[d&&e.jsx("defs",{children:e.jsxs("linearGradient",{id:l,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:r,stopOpacity:C}),e.jsx("stop",{offset:"100%",stopColor:r,stopOpacity:0})]})}),e.jsx("path",{d:f,fill:d?`url(#${l})`:r,fillOpacity:d?1:C,stroke:"none"}),A&&e.jsx("path",{d:n,fill:"none",stroke:r,strokeWidth:2})]})}};return u}const ie={title:"Charts/Area",component:v},S=e.jsxs(e.Fragment,{children:[e.jsx(k,{position:"bottom"}),e.jsx(k,{position:"left"})]}),m={render:()=>e.jsx(v,{data:G,xKey:"month",title:"Revenue over time",series:[g("revenue",{color:"#3b82f6",gradient:!0}),Z("revenue",{color:"#3b82f6"})],grid:e.jsx(F,{}),axes:S,height:300})},p={render:()=>e.jsx(v,{data:G,xKey:"month",title:"Revenue & Costs",series:[g("revenue",{color:"#3b82f6",stack:"total",label:"Revenue"}),g("costs",{color:"#ef4444",stack:"total",label:"Costs"})],legend:!0,grid:e.jsx(F,{}),axes:S,height:300})};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Revenue over time" series={[area('revenue', {
    color: '#3b82f6',
    gradient: true
  }), line('revenue', {
    color: '#3b82f6'
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Revenue & Costs" series={[area('revenue', {
    color: '#3b82f6',
    stack: 'total',
    label: 'Revenue'
  }), area('costs', {
    color: '#ef4444',
    stack: 'total',
    label: 'Costs'
  })]} legend grid={<ChartGrid />} axes={axes} height={300} />
}`,...p.parameters?.docs?.source}}};const ce=["Gradient","Stacked"];export{m as Gradient,p as Stacked,ce as __namedExportsOrder,ie as default};
