import{a0 as e}from"./iframe-C8fQ-xtn.js";import{C as t,m as n,b as l,a as d}from"./_data-xYQxt4mP.js";import{l as r}from"./line-58qam1P9.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-NDfdbw_g.js";import"./ChartSwatch-Cd5SY14q.js";import"./HStack-Cu0jN-Pi.js";import"./Stack-Dke1vo_X.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-62xqq9Y7.js";import"./index-DB0IE9kF.js";import"./index-DErwPu5P.js";import"./markColor-BBrpQ2Vv.js";import"./monotone-DS2qxjW1.js";import"./step-fxRLXcQr.js";const k={title:"Charts/Line",component:t},m=e.jsxs(e.Fragment,{children:[e.jsx(d,{position:"bottom"}),e.jsx(d,{position:"left"})]}),o={render:()=>e.jsx(t,{data:n,xKey:"month",title:"Trend",series:[r("trend",{color:"#3b82f6"})],tooltip:!0,grid:e.jsx(l,{}),axes:m,height:300})},s={render:()=>e.jsx(t,{data:n,xKey:"month",series:[r("trend",{color:"#3b82f6",dots:!0,strokeWidth:2})],grid:e.jsx(l,{}),axes:m,height:300})},a={render:()=>e.jsx(t,{data:n,xKey:"month",series:[r("revenue",{color:"#3b82f6",label:"Revenue"}),r("costs",{color:"#ef4444",label:"Costs"}),r("trend",{color:"#f59e0b",label:"Trend"})],legend:!0,grid:e.jsx(l,{}),axes:m,height:300})},i={render:()=>e.jsx(t,{data:n,xKey:"month",subtitle:"linear vs monotone vs step",series:[r("revenue",{color:"#3b82f6",curve:"linear",label:"linear"}),r("costs",{color:"#22c55e",curve:"monotone",label:"monotone"}),r("trend",{color:"#f59e0b",curve:"step",label:"step"})],legend:!0,grid:e.jsx(l,{}),axes:m,height:300})};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Trend" series={[line('trend', {
    color: '#3b82f6'
  })]} tooltip grid={<ChartGrid />} axes={axes} height={300} />
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" series={[line('trend', {
    color: '#3b82f6',
    dots: true,
    strokeWidth: 2
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" series={[line('revenue', {
    color: '#3b82f6',
    label: 'Revenue'
  }), line('costs', {
    color: '#ef4444',
    label: 'Costs'
  }), line('trend', {
    color: '#f59e0b',
    label: 'Trend'
  })]} legend grid={<ChartGrid />} axes={axes} height={300} />
}`,...a.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" subtitle="linear vs monotone vs step" series={[line('revenue', {
    color: '#3b82f6',
    curve: 'linear',
    label: 'linear'
  }), line('costs', {
    color: '#22c55e',
    curve: 'monotone',
    label: 'monotone'
  }), line('trend', {
    color: '#f59e0b',
    curve: 'step',
    label: 'step'
  })]} legend grid={<ChartGrid />} axes={axes} height={300} />
}`,...i.parameters?.docs?.source}}};const E=["Simple","WithDots","MultiSeries","Curves"];export{i as Curves,a as MultiSeries,o as Simple,s as WithDots,E as __namedExportsOrder,k as default};
