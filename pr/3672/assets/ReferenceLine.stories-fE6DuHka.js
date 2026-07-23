import{a0 as e}from"./iframe-C8fQ-xtn.js";import{C as s,s as l,b as o,p,a as n}from"./_data-xYQxt4mP.js";import{b as d}from"./bar-D2kKfTzH.js";import{r as i}from"./referenceLine-BehtAc2j.js";import{l as m}from"./line-58qam1P9.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-NDfdbw_g.js";import"./ChartSwatch-Cd5SY14q.js";import"./HStack-Cu0jN-Pi.js";import"./Stack-Dke1vo_X.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-62xqq9Y7.js";import"./index-DB0IE9kF.js";import"./index-DErwPu5P.js";import"./markColor-BBrpQ2Vv.js";import"./monotone-DS2qxjW1.js";import"./step-fxRLXcQr.js";const B={title:"Charts/Reference Line",component:s},c=e.jsxs(e.Fragment,{children:[e.jsx(n,{position:"bottom"}),e.jsx(n,{position:"left"})]}),r={render:()=>e.jsx(s,{data:l,xKey:"month",title:"Sales vs target",series:[d("sales",{color:"#3b82f6"}),i({y:50,label:"Target",color:"#ef4444"})],grid:e.jsx(o,{}),axes:c,height:300})},a={render:()=>e.jsx(s,{data:l,xKey:"month",title:"Acceptable range",series:[d("sales",{color:"#3b82f6"}),i({y:40,y2:60,label:"Acceptable",color:"#22c55e",bandOpacity:.12})],grid:e.jsx(o,{}),axes:c,height:300})},t={render:()=>e.jsx(s,{data:p,xKey:"x",title:"Event marker",series:[m("mean",{color:"#3b82f6"}),i({x:10,label:"Launch",color:"#6b1efd"})],grid:e.jsx(o,{}),axes:c,height:300})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={salesData} xKey="month" title="Sales vs target" series={[bar('sales', {
    color: '#3b82f6'
  }), referenceLine({
    y: 50,
    label: 'Target',
    color: '#ef4444'
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...r.parameters?.docs?.source},description:{story:"A single horizontal reference line at a fixed y value.",...r.parameters?.docs?.description}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={salesData} xKey="month" title="Acceptable range" series={[bar('sales', {
    color: '#3b82f6'
  }), referenceLine({
    y: 40,
    y2: 60,
    label: 'Acceptable',
    color: '#22c55e',
    bandOpacity: 0.12
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...a.parameters?.docs?.source},description:{story:"A shaded band between two y values (y + y2).",...a.parameters?.docs?.description}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={predictionData} xKey="x" title="Event marker" series={[line('mean', {
    color: '#3b82f6'
  }), referenceLine({
    x: 10,
    label: 'Launch',
    color: '#6b1efd'
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...t.parameters?.docs?.source},description:{story:"A vertical reference line at a fixed x value (linear x scale only).",...t.parameters?.docs?.description}}};const H=["Horizontal","Band","Vertical"];export{a as Band,r as Horizontal,t as Vertical,H as __namedExportsOrder,B as default};
