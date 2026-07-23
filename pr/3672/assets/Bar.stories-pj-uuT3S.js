import{a0 as e}from"./iframe-C8fQ-xtn.js";import{C as r,m as l,b as o,g as d,c as u,a as p}from"./_data-xYQxt4mP.js";import{c as g}from"./formatters-CSwX9-qx.js";import{b as t}from"./bar-D2kKfTzH.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-NDfdbw_g.js";import"./ChartSwatch-Cd5SY14q.js";import"./HStack-Cu0jN-Pi.js";import"./Stack-Dke1vo_X.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-62xqq9Y7.js";import"./index-DB0IE9kF.js";import"./index-DErwPu5P.js";import"./markColor-BBrpQ2Vv.js";const E={title:"Charts/Bar",component:r},m=e.jsxs(e.Fragment,{children:[e.jsx(p,{position:"bottom"}),e.jsx(p,{position:"left"})]}),a={render:()=>e.jsx(r,{data:l,xKey:"month",title:"Monthly Revenue",series:[t("revenue",{color:"#3b82f6"})],tooltip:!0,grid:e.jsx(o,{}),axes:e.jsxs(e.Fragment,{children:[e.jsx(p,{position:"bottom"}),e.jsx(p,{position:"left",tickFormat:g()})]}),height:300})},s={render:()=>e.jsx(r,{data:l,xKey:"month",title:"Revenue & Costs",subtitle:"Stacked by category",series:[t("revenue",{color:"#3b82f6",stack:"totals",label:"Revenue"}),t("costs",{color:"#ef4444",stack:"totals",label:"Costs"})],legend:{position:"bottom",alignment:"center"},grid:e.jsx(o,{}),axes:m,height:300})},i={render:()=>e.jsx(r,{data:l,xKey:"month",title:"Revenue vs Costs",series:[t("revenue",{color:"#3b82f6",group:"compare",label:"Revenue"}),t("costs",{color:"#ef4444",group:"compare",label:"Costs"})],legend:{position:"top",alignment:"end"},grid:e.jsx(o,{}),axes:m,height:300})},c={render:()=>e.jsx(r,{data:d,xKey:"month",title:"Grouped + stacked",series:[t("revenueA",{color:"#3b82f6",stack:"a",group:"cmp"}),t("costsA",{color:"#93c5fd",stack:"a",group:"cmp"}),t("revenueB",{color:"#ef4444",stack:"b",group:"cmp"}),t("costsB",{color:"#fca5a5",stack:"b",group:"cmp"})],grid:e.jsx(o,{}),axes:m,height:300})},n={render:()=>e.jsx(r,{data:u,xKey:"month",title:"Profit / Loss",series:[t("profit",{color:"#3b82f6"})],grid:e.jsx(o,{}),axes:m,height:300})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Monthly Revenue" series={[bar('revenue', {
    color: '#3b82f6'
  })]} tooltip grid={<ChartGrid />} axes={<>
          <ChartAxis position="bottom" />
          <ChartAxis position="left" tickFormat={currency()} />
        </>} height={300} />
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Revenue & Costs" subtitle="Stacked by category" series={[bar('revenue', {
    color: '#3b82f6',
    stack: 'totals',
    label: 'Revenue'
  }), bar('costs', {
    color: '#ef4444',
    stack: 'totals',
    label: 'Costs'
  })]} legend={{
    position: 'bottom',
    alignment: 'center'
  }} grid={<ChartGrid />} axes={axes} height={300} />
}`,...s.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Revenue vs Costs" series={[bar('revenue', {
    color: '#3b82f6',
    group: 'compare',
    label: 'Revenue'
  }), bar('costs', {
    color: '#ef4444',
    group: 'compare',
    label: 'Costs'
  })]} legend={{
    position: 'top',
    alignment: 'end'
  }} grid={<ChartGrid />} axes={axes} height={300} />
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={groupedStackData} xKey="month" title="Grouped + stacked" series={[bar('revenueA', {
    color: '#3b82f6',
    stack: 'a',
    group: 'cmp'
  }), bar('costsA', {
    color: '#93c5fd',
    stack: 'a',
    group: 'cmp'
  }), bar('revenueB', {
    color: '#ef4444',
    stack: 'b',
    group: 'cmp'
  }), bar('costsB', {
    color: '#fca5a5',
    stack: 'b',
    group: 'cmp'
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...c.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={profitLossData} xKey="month" title="Profit / Loss" series={[bar('profit', {
    color: '#3b82f6'
  })]} grid={<ChartGrid />} axes={axes} height={300} />
}`,...n.parameters?.docs?.source}}};const M=["Simple","Stacked","Grouped","GroupedStacked","NegativeValues"];export{i as Grouped,c as GroupedStacked,n as NegativeValues,a as Simple,s as Stacked,M as __namedExportsOrder,E as default};
