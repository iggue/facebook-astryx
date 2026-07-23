import{a0 as r}from"./iframe-C8fQ-xtn.js";import{C as n}from"./ChartSwatch-Cd5SY14q.js";import"./preload-helper-Ct5FWWRu.js";const l={title:"Charts/Chrome/Swatch",component:n,argTypes:{color:{control:"color"},variant:{control:"inline-radio",options:["square","line"]}},args:{color:"#3b82f6",variant:"square"}},t=["#3b82f6","#eb6e00","#6b1efd","#0b991f","#f351c0","#f5394f"],a={render:()=>r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[r.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:t.map(e=>r.jsx(n,{color:e,variant:"square"},`sq-${e}`))}),r.jsx("div",{style:{display:"flex",gap:12,alignItems:"center"},children:t.map(e=>r.jsx(n,{color:e,variant:"line"},`ln-${e}`))})]})},s={};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        {COLORS.map(c => <ChartSwatch key={\`sq-\${c}\`} color={c} variant="square" />)}
      </div>
      <div style={{
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }}>
        {COLORS.map(c => <ChartSwatch key={\`ln-\${c}\`} color={c} variant="line" />)}
      </div>
    </div>
}`,...a.parameters?.docs?.source},description:{story:"The color swatch primitive — `square` for bar series, `line` for others.",...a.parameters?.docs?.description}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:"{}",...s.parameters?.docs?.source},description:{story:"Interactive single swatch.",...s.parameters?.docs?.description}}};const p=["Gallery","Playground"];export{a as Gallery,s as Playground,p as __namedExportsOrder,l as default};
