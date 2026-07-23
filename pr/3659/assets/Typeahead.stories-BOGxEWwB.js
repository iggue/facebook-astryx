import{ag as b,a0 as s}from"./iframe-l2Ww7LcQ.js";import{T as t}from"./Typeahead-CeHgzd1D.js";import{F as M}from"./MagnifyingGlassIcon-UL8_ZV1j.js";import"./preload-helper-Ct5FWWRu.js";import"./BaseTypeahead-vZNvjTeg.js";import"./usePopover-BW3cbU8H.js";import"./useFocusTrap-CIGRN-dd.js";import"./useAnnounce-CbcN7vW0.js";import"./TypeaheadItem-C55NJAB7.js";import"./getKey-DyRdrWhf.js";import"./Field-CgnxQX5t.js";import"./FieldStatus-BBUOmWx1.js";import"./Tooltip-CGQJXpSM.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./InputClearButton-BrQRYrTE.js";import"./Token-D-tpo6j2.js";import"./useInteractiveRole-CSTqStMs.js";import"./InputGroupContext-_t7LIRgj.js";const y=[{id:"1",label:"Apple"},{id:"2",label:"Banana"},{id:"3",label:"Cherry"},{id:"4",label:"Date"},{id:"5",label:"Elderberry"},{id:"6",label:"Fig"},{id:"7",label:"Grape"},{id:"8",label:"Honeydew"}],D={search:a=>y.filter(r=>r.label.toLowerCase().includes(a.toLowerCase())),bootstrap:()=>y.slice(0,5)},_={title:"Core/Typeahead",component:t,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},isDisabled:{control:"boolean"},disabledMessage:{control:"text",description:"Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled Typeahead in Tooltip."},isRequired:{control:"boolean"},isOptional:{control:"boolean"},hasEntriesOnFocus:{control:"boolean"},hasClear:{control:"boolean"},maxMenuItems:{control:"number"},size:{control:"radio",options:["sm","md","lg"],description:"Input size"}},decorators:[a=>s.jsx("div",{style:{width:320},children:s.jsx(a,{})})]},e={render:a=>{const[r,x]=b.useState(null);return s.jsx(t,{...a,searchSource:D,value:r,onChange:x})},args:{label:"Fruit",placeholder:"Search fruits..."}},o={...e,args:{...e.args,hasEntriesOnFocus:!0},name:"With Bootstrap Results"},n={...e,args:{...e.args,isRequired:!0}},l={...e,args:{...e.args,isOptional:!0}},i={...e,args:{...e.args,description:"Pick your favorite fruit from the list"}},c={...e,args:{...e.args,status:{type:"error",message:"Please select a fruit"}}},u={...e,args:{...e.args,status:{type:"warning",message:"This fruit may be out of season"}}},d={...e,args:{...e.args,status:{type:"success",message:"Great choice!"}}},p={...e,args:{...e.args,isDisabled:!0}},m={...e,args:{...e.args,isDisabled:!0,disabledMessage:"You need the Editor role to change this"}},g={...e,args:{...e.args,hasClear:!1},name:"Without Clear Button"},h={...e,args:{...e.args,hasEntriesOnFocus:!0,maxMenuItems:3},name:"Max 3 Results"},f={render:()=>{const[a,r]=b.useState(null),[x,W]=b.useState(null),[v,C]=b.useState(null);return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[s.jsx(t,{label:"Small (28px)",searchSource:D,value:a,onChange:r,placeholder:"Small size",size:"sm"}),s.jsx(t,{label:"Medium (32px)",searchSource:D,value:x,onChange:W,placeholder:"Medium size (default)",size:"md"}),s.jsx(t,{label:"Large (36px)",searchSource:D,value:v,onChange:C,placeholder:"Large size",size:"lg"})]})}},S={...e,args:{...e.args,startIcon:M,hasEntriesOnFocus:!0},name:"With Start Icon"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem | null>(null);
    return <Typeahead {...args} searchSource={fruitSource} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Fruit',
    placeholder: 'Search fruits...'
  }
}`,...e.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    hasEntriesOnFocus: true
  },
  name: 'With Bootstrap Results'
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isRequired: true
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isOptional: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    description: 'Pick your favorite fruit from the list'
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'error',
      message: 'Please select a fruit'
    }
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'warning',
      message: 'This fruit may be out of season'
    }
  }
}`,...u.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'success',
      message: 'Great choice!'
    }
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isDisabled: true,
    disabledMessage: 'You need the Editor role to change this'
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    hasClear: false
  },
  name: 'Without Clear Button'
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    hasEntriesOnFocus: true,
    maxMenuItems: 3
  },
  name: 'Max 3 Results'
}`,...h.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<SearchableItem | null>(null);
    const [md, setMd] = useState<SearchableItem | null>(null);
    const [lg, setLg] = useState<SearchableItem | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Typeahead label="Small (28px)" searchSource={fruitSource} value={sm} onChange={setSm} placeholder="Small size" size="sm" />
        <Typeahead label="Medium (32px)" searchSource={fruitSource} value={md} onChange={setMd} placeholder="Medium size (default)" size="md" />
        <Typeahead label="Large (36px)" searchSource={fruitSource} value={lg} onChange={setLg} placeholder="Large size" size="lg" />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    startIcon: MagnifyingGlassIcon,
    hasEntriesOnFocus: true
  },
  name: 'With Start Icon'
}`,...S.parameters?.docs?.source}}};const A=["Default","WithBootstrap","Required","Optional","WithDescription","WithError","WithWarning","WithSuccess","Disabled","DisabledWithMessage","NoClear","LimitedResults","SizeVariants","WithStartIcon"];export{e as Default,p as Disabled,m as DisabledWithMessage,h as LimitedResults,g as NoClear,l as Optional,n as Required,f as SizeVariants,o as WithBootstrap,i as WithDescription,c as WithError,S as WithStartIcon,d as WithSuccess,u as WithWarning,A as __namedExportsOrder,_ as default};
