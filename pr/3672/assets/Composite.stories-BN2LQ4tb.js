import{a0 as e}from"./iframe-C8fQ-xtn.js";import{C as t,s as f,b as l,m as v,a as i}from"./_data-xYQxt4mP.js";import{r as n}from"./referenceLine-BehtAc2j.js";import{b as x}from"./band-Cvyh5pLs.js";import{b as c}from"./bar-D2kKfTzH.js";import{e as y}from"./errorBar-BsA23w1K.js";import{l as d}from"./line-58qam1P9.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-NDfdbw_g.js";import"./ChartSwatch-Cd5SY14q.js";import"./HStack-Cu0jN-Pi.js";import"./Stack-Dke1vo_X.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-62xqq9Y7.js";import"./index-DB0IE9kF.js";import"./index-DErwPu5P.js";import"./area-Yte8cOEo.js";import"./monotone-DS2qxjW1.js";import"./markColor-BBrpQ2Vv.js";import"./step-fxRLXcQr.js";const N={title:"Charts/Composite",component:t},p=e.jsxs(e.Fragment,{children:[e.jsx(i,{position:"bottom"}),e.jsx(i,{position:"left"})]}),r={render:()=>e.jsx(t,{data:v,xKey:"month",title:"Revenue vs trend",subtitle:"Bars with a trendline overlay",series:[c("revenue",{color:"#3b82f6",label:"Revenue"}),d("trend",{color:"#f59e0b",label:"Trend"})],tooltip:!0,legend:!0,grid:e.jsx(l,{}),axes:p,height:320})},o={render:()=>{const m=f.map((h,s,u)=>{const a=u.slice(0,s+1).reduce((b,g)=>b+g.sales,0)/(s+1);return{...h,runAvg:Math.round(a*10)/10,upper:Math.round((a+8)*10)/10,lower:Math.round((a-8)*10)/10}});return e.jsx(t,{data:m,xKey:"month",title:"Kitchen sink",series:[n({y:40,y2:60,color:"#22c55e",bandOpacity:.08}),n({y:50,label:"Target",color:"#ef4444"}),x({upper:"upper",lower:"lower",color:"#f59e0b",opacity:.15}),c("sales",{color:"#3b82f6",label:"Sales"}),y({high:"errorHigh",low:"errorLow",color:"#1e3a5f"}),d("runAvg",{color:"#f59e0b",strokeWidth:2,label:"Run avg"})],grid:e.jsx(l,{}),axes:p,height:400})}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={monthlyData} xKey="month" title="Revenue vs trend" subtitle="Bars with a trendline overlay" series={[bar('revenue', {
    color: '#3b82f6',
    label: 'Revenue'
  }), line('trend', {
    color: '#f59e0b',
    label: 'Trend'
  })]} tooltip legend grid={<ChartGrid />} axes={axes} height={320} />
}`,...r.parameters?.docs?.source},description:{story:"Bars + a trendline overlay sharing one scale.",...r.parameters?.docs?.description}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = salesData.map((d, i, arr) => {
      const avg = arr.slice(0, i + 1).reduce((s, v) => s + v.sales, 0) / (i + 1);
      return {
        ...d,
        runAvg: Math.round(avg * 10) / 10,
        upper: Math.round((avg + 8) * 10) / 10,
        lower: Math.round((avg - 8) * 10) / 10
      };
    });
    return <Chart data={data} xKey="month" title="Kitchen sink" series={[referenceLine({
      y: 40,
      y2: 60,
      color: '#22c55e',
      bandOpacity: 0.08
    }), referenceLine({
      y: 50,
      label: 'Target',
      color: '#ef4444'
    }), band({
      upper: 'upper',
      lower: 'lower',
      color: '#f59e0b',
      opacity: 0.15
    }), bar('sales', {
      color: '#3b82f6',
      label: 'Sales'
    }), errorBar({
      high: 'errorHigh',
      low: 'errorLow',
      color: '#1e3a5f'
    }), line('runAvg', {
      color: '#f59e0b',
      strokeWidth: 2,
      label: 'Run avg'
    })]} grid={<ChartGrid />} axes={axes} height={400} />;
  }
}`,...o.parameters?.docs?.source},description:{story:"Many marks at once: reference band + line, confidence band, bars, error bars, line.",...o.parameters?.docs?.description}}};const P=["MixedMarks","KitchenSink"];export{o as KitchenSink,r as MixedMarks,P as __namedExportsOrder,N as default};
