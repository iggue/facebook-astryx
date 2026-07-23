import{a0 as o,ag as F}from"./iframe-C8fQ-xtn.js";import{C as f,e as y,b as k,a as C}from"./_data-xYQxt4mP.js";import{l as S}from"./line-58qam1P9.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./band-B4lqwueb.js";import"./array-2GBN5xbU.js";import"./ChartLegend-NDfdbw_g.js";import"./ChartSwatch-Cd5SY14q.js";import"./HStack-Cu0jN-Pi.js";import"./Stack-Dke1vo_X.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-62xqq9Y7.js";import"./index-DB0IE9kF.js";import"./index-DErwPu5P.js";import"./markColor-BBrpQ2Vv.js";import"./monotone-DS2qxjW1.js";import"./step-fxRLXcQr.js";function p(t,l){const s=t[l];return typeof s=="number"&&Number.isFinite(s)?s:NaN}function K(t,l){const{xScale:s,width:n}=l;if("bandwidth"in s)return s.bandwidth();const r=t.map(e=>e.px).filter(e=>Number.isFinite(e)).sort((e,i)=>e-i);let a=1/0;for(let e=1;e<r.length;e++){const i=r[e]-r[e-1];i>0&&i<a&&(a=i)}return Number.isFinite(a)?a:Math.min(n,40)}function v(t){const l=t.upColor??"var(--color-success)",s=t.downColor??"var(--color-error)";return{type:"candlestick",key:`ohlc-${t.close}`,dataKeys:[t.open,t.high,t.low,t.close],layout:{},resolve(n){const{data:r,xKey:a,xScale:e,yScale:i}=n,c=[];for(let d=0;d<r.length;d++){const m=r[d];let h;"bandwidth"in e?h=(e(String(m[a]))??0)+e.bandwidth()/2:h=e(m[a]);const g=p(m,t.close);c.push({px:h,py:i(g),py0:i(0),dataIndex:d})}return c},render(n,r){const{data:a,yScale:e}=r,i=Math.max(1,K(n,r)*.6);return o.jsx("g",{children:n.map(c=>{const d=a[c.dataIndex],m=p(d,t.open),h=p(d,t.close),g=p(d,t.high),b=p(d,t.low);if(!Number.isFinite(c.px)||!Number.isFinite(m)||!Number.isFinite(h)||!Number.isFinite(g)||!Number.isFinite(b))return null;const w=h>=m?l:s,j=e(Math.max(m,h)),N=Math.max(1,Math.abs(e(m)-e(h)));return o.jsxs("g",{children:[o.jsx("line",{x1:c.px,x2:c.px,y1:e(g),y2:e(b),stroke:w,strokeWidth:1}),o.jsx("rect",{x:c.px-i/2,y:j,width:i,height:N,fill:w})]},c.dataIndex)})})}}}const Q={title:"Charts/Candlestick",component:f},M=o.jsxs(o.Fragment,{children:[o.jsx(C,{position:"bottom"}),o.jsx(C,{position:"left"})]}),u={render:()=>o.jsx(f,{data:y,xKey:"day",title:"Price (OHLC)",series:[v({open:"open",high:"high",low:"low",close:"close"})],grid:o.jsx(k,{}),axes:M,height:360})},x={render:()=>{const t=F.useMemo(()=>{let l=0;return y.map((s,n)=>{l+=s.close;const r=n>=4?(l-y.slice(0,n-4).reduce((a,e)=>a+e.close,0))/5:void 0;return{...s,ma5:r==null?void 0:Math.round(r*10)/10}})},[]);return o.jsx(f,{data:t,xKey:"day",title:"Price + 5-day MA",series:[v({open:"open",high:"high",low:"low",close:"close"}),S("ma5",{color:"#f59e0b",strokeWidth:1.5})],grid:o.jsx(k,{}),axes:M,height:360})}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={stockData} xKey="day" title="Price (OHLC)" series={[candlestick({
    open: 'open',
    high: 'high',
    low: 'low',
    close: 'close'
  })]} grid={<ChartGrid />} axes={axes} height={360} />
}`,...u.parameters?.docs?.source},description:{story:"OHLC candlesticks. Up/down default to the theme's success/error colors.",...u.parameters?.docs?.description}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const data = useMemo(() => {
      let sum = 0;
      return stockData.map((d, i) => {
        sum += d.close;
        const ma = i >= 4 ? (sum - stockData.slice(0, i - 4).reduce((s, v) => s + v.close, 0)) / 5 : undefined;
        return {
          ...d,
          ma5: ma == null ? undefined : Math.round(ma * 10) / 10
        };
      });
    }, []);
    return <Chart data={data} xKey="day" title="Price + 5-day MA" series={[candlestick({
      open: 'open',
      high: 'high',
      low: 'low',
      close: 'close'
    }), line('ma5', {
      color: '#f59e0b',
      strokeWidth: 1.5
    })]} grid={<ChartGrid />} axes={axes} height={360} />;
  }
}`,...x.parameters?.docs?.source},description:{story:"Candlesticks + a moving-average line overlay on the shared price scale.",...x.parameters?.docs?.description}}};const V=["Basic","WithMovingAverage"];export{u as Basic,x as WithMovingAverage,V as __namedExportsOrder,Q as default};
