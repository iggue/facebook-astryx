import{a0 as t}from"./iframe-C8fQ-xtn.js";import{C as a,m as s,a as o,b as i}from"./_data-xYQxt4mP.js";import{c as m}from"./formatters-CSwX9-qx.js";import{b as e}from"./bar-D2kKfTzH.js";import{l as p}from"./line-58qam1P9.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-NDfdbw_g.js";import"./ChartSwatch-Cd5SY14q.js";import"./HStack-Cu0jN-Pi.js";import"./Stack-Dke1vo_X.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-62xqq9Y7.js";import"./index-DB0IE9kF.js";import"./index-DErwPu5P.js";import"./markColor-BBrpQ2Vv.js";import"./monotone-DS2qxjW1.js";import"./step-fxRLXcQr.js";const E={title:"Charts/Chrome/Tooltip",component:a},r={render:()=>t.jsx(a,{data:s,xKey:"month",series:[e("revenue",{color:"#3b82f6",label:"Revenue",stack:"x"}),e("costs",{color:"#ef4444",label:"Costs",stack:"x"}),p("trend",{color:"#f59e0b",label:"Trend"})],tooltip:!0,grid:t.jsx(i,{}),axes:t.jsxs(t.Fragment,{children:[t.jsx(o,{position:"bottom"}),t.jsx(o,{position:"left",tickFormat:m()})]}),height:320})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" series={[bar('revenue', {
    color: '#3b82f6',
    label: 'Revenue',
    stack: 'x'
  }), bar('costs', {
    color: '#ef4444',
    label: 'Costs',
    stack: 'x'
  }), line('trend', {
    color: '#f59e0b',
    label: 'Trend'
  })]} tooltip grid={<ChartGrid />} axes={<>
          <ChartAxis position="bottom" />
          <ChartAxis position="left" tickFormat={currency()} />
        </>} height={320} />
}`,...r.parameters?.docs?.source},description:{story:`Hover the chart: a grouped tooltip shows every series value at that x, with a
 column highlight for bars and hover dots on lines.`,...r.parameters?.docs?.description}}};const G=["Default"];export{r as Default,G as __namedExportsOrder,E as default};
