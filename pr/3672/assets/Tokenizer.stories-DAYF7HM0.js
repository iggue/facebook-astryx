import{ag as c,a0 as a,B as V}from"./iframe-C8fQ-xtn.js";import{T as l}from"./Tokenizer-MF-rXGfU.js";import{F as E}from"./MagnifyingGlassIcon-C2ZuLOEn.js";import"./preload-helper-Ct5FWWRu.js";import"./BaseTypeahead-CgBC1Hhe.js";import"./usePopover-BJ9khqJg.js";import"./useFocusTrap-JlWaSuDz.js";import"./useAnnounce-h7Asv1dB.js";import"./TypeaheadItem-DMP1JkM8.js";import"./getKey-DyRdrWhf.js";import"./Field-ZmtLWXQ0.js";import"./FieldStatus-Bsg85LbU.js";import"./Tooltip-UPeljs0G.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./InputClearButton-Bc1VttBB.js";import"./Token-DglUm9RP.js";import"./useInteractiveRole-BPTzNaze.js";import"./OverflowList-CtIbbwT7.js";const s=[{id:"1",label:"Alice Johnson"},{id:"2",label:"Bob Smith"},{id:"3",label:"Charlie Brown"},{id:"4",label:"Diana Prince"},{id:"5",label:"Eve Williams"},{id:"6",label:"Frank Miller"},{id:"7",label:"Grace Lee"},{id:"8",label:"Henry Davis"}],u={search:e=>s.filter(r=>r.label.toLowerCase().includes(e.toLowerCase())),bootstrap:()=>s.slice(0,5)},$={title:"Core/Tokenizer",component:l,tags:["autodocs"],argTypes:{label:{control:"text"},placeholder:{control:"text"},isDisabled:{control:"boolean"},disabledMessage:{control:"text",description:"Explains why the tokenizer is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the input focusable via aria-disabled (input stays blocked). Use this instead of wrapping a disabled Tokenizer in Tooltip."},isRequired:{control:"boolean"},isOptional:{control:"boolean"},hasClear:{control:"boolean"},maxEntries:{control:"number"},size:{control:"radio",options:["sm","md","lg"],description:"Input size"}},decorators:[e=>a.jsx("div",{style:{width:400},children:a.jsx(e,{})})]},t={render:e=>{const[r,n]=c.useState([]);return a.jsx(l,{...e,searchSource:u,value:r,onChange:o=>n(o)})},args:{label:"Team Members",placeholder:"Search people..."}},m={render:e=>{const[r,n]=c.useState([s[0],s[2]]);return a.jsx(l,{...e,searchSource:u,value:r,onChange:o=>n(o)})},args:{label:"Team Members",placeholder:"Add more..."},name:"Pre-selected Items"},d={...t,args:{...t.args,hasClear:!0},name:"With Clear All Button"},h={...t,args:{...t.args,maxEntries:3},name:"Max 3 Entries"},p={...t,args:{...t.args,isRequired:!0}},g={...t,args:{...t.args,description:"Select up to 5 team members for this project"}},S={...t,args:{...t.args,status:{type:"error",message:"At least one member is required"}}},b={...t,args:{...t.args,status:{type:"warning",message:"Some members may not have access"}}},v={...t,args:{...t.args,status:{type:"success",message:"Team is ready!"}}},C={render:e=>{const[r]=c.useState([s[0],s[1]]);return a.jsx(l,{...e,searchSource:u,value:r,onChange:()=>{}})},args:{label:"Team Members",isDisabled:!0}},T={...t,args:{...t.args,startIcon:E},name:"With Start Icon"},f={render:e=>{const[r,n]=c.useState([s[0],s[2]]);return a.jsx(l,{...e,searchSource:u,value:r,onChange:o=>n(o)})},args:{label:"Team Members",startIcon:E},name:"With Start Icon and Tokens"},x={render:e=>{const[r,n]=c.useState([]);return a.jsx(l,{...e,searchSource:u,value:r,onChange:o=>n(o),hasEntriesOnFocus:!0})},args:{label:"Team Members",placeholder:"Click to see suggestions..."},name:"With Entries On Focus"},y={render:e=>{const[r,n]=c.useState([s[0],s[1],s[2],s[3],s[4],s[5]]);return a.jsxs("div",{children:[a.jsx(l,{...e,searchSource:u,value:r,onChange:o=>n(o),tokenOverflowBehavior:"unfocusedInline"}),a.jsx("p",{style:{marginTop:8},children:"This text will shift down when the tokenizer expands on focus."})]})},args:{label:"Team Members",placeholder:"Add more..."},name:"Overflow Inline"},z={render:e=>{const[r,n]=c.useState([s[0],s[1],s[2],s[3],s[4],s[5]]);return a.jsxs("div",{children:[a.jsx(l,{...e,searchSource:u,value:r,onChange:o=>n(o),tokenOverflowBehavior:"unfocusedLayer"}),a.jsx("p",{style:{marginTop:8},children:"This text should not shift when the tokenizer expands on focus."})]})},args:{label:"Team Members",placeholder:"Add more..."},name:"Overflow Layer"},M={render:e=>{const[r,n]=c.useState([s[0],s[2]]);return a.jsx(l,{...e,searchSource:u,value:r,onChange:o=>n(o),endContent:a.jsx(V,{label:"Apply",variant:"primary",size:"sm"})})},args:{label:"Team Members"},name:"With End Content"},O={search:()=>[],bootstrap:()=>[]},W={render:e=>{const[r,n]=c.useState([]);return a.jsxs("div",{children:[a.jsx(l,{...e,searchSource:O,value:r,onChange:(o,w)=>{n(o)},hasCreate:!0,placeholder:"Type a tag and press Enter..."}),a.jsxs("p",{style:{marginTop:8,fontSize:14,color:"#666"},children:[r.length," tag",r.length!==1?"s":""," added"]})]})},args:{label:"Tags"},name:"Creatable (Free Text)"},k={render:()=>{const[e,r]=c.useState([]),[n,o]=c.useState([s[0],s[2]]),[w,j]=c.useState([]);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[a.jsx(l,{label:"Small (28px)",searchSource:u,value:e,onChange:i=>r(i),placeholder:"Small size",size:"sm",hasClear:!0}),a.jsx(l,{label:"Medium (32px)",searchSource:u,value:n,onChange:i=>o(i),placeholder:"Medium size (default)",size:"md",hasClear:!0}),a.jsx(l,{label:"Large (36px)",searchSource:u,value:w,onChange:i=>j(i),placeholder:"Large size",size:"lg",hasClear:!0})]})}},D={render:e=>{const[r,n]=c.useState([]);return a.jsx(l,{...e,searchSource:u,value:r,onChange:(o,w)=>{n(o)},hasCreate:!0,hasEntriesOnFocus:!0,placeholder:"Search or type a new name..."})},args:{label:"Team Members"},name:"Creatable + Search"},I={render:e=>{const[r]=c.useState([s[0],s[1]]);return a.jsx(l,{...e,searchSource:u,value:r,onChange:()=>{}})},args:{label:"Team Members",isDisabled:!0,disabledMessage:"You need edit access to change members"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} />;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Search people...'
  }
}`,...t.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState([users[0], users[2]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} />;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Add more...'
  },
  name: 'Pre-selected Items'
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    hasClear: true
  },
  name: 'With Clear All Button'
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    maxEntries: 3
  },
  name: 'Max 3 Entries'
}`,...h.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    isRequired: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    description: 'Select up to 5 team members for this project'
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'error',
      message: 'At least one member is required'
    }
  }
}`,...S.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'warning',
      message: 'Some members may not have access'
    }
  }
}`,...b.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    status: {
      type: 'success',
      message: 'Team is ready!'
    }
  }
}`,...v.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value] = useState([users[0], users[1]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={() => {}} />;
  },
  args: {
    label: 'Team Members',
    isDisabled: true
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  ...Default,
  args: {
    ...Default.args,
    startIcon: MagnifyingGlassIcon
  },
  name: 'With Start Icon'
}`,...T.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState([users[0], users[2]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} />;
  },
  args: {
    label: 'Team Members',
    startIcon: MagnifyingGlassIcon
  },
  name: 'With Start Icon and Tokens'
}`,...f.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} hasEntriesOnFocus />;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Click to see suggestions...'
  },
  name: 'With Entries On Focus'
}`,...x.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([users[0], users[1], users[2], users[3], users[4], users[5]]);
    return <div>
        <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} tokenOverflowBehavior="unfocusedInline" />
        <p style={{
        marginTop: 8
      }}>
          This text will shift down when the tokenizer expands on focus.
        </p>
      </div>;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Add more...'
  },
  name: 'Overflow Inline'
}`,...y.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([users[0], users[1], users[2], users[3], users[4], users[5]]);
    return <div>
        <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} tokenOverflowBehavior="unfocusedLayer" />
        <p style={{
        marginTop: 8
      }}>
          This text should not shift when the tokenizer expands on focus.
        </p>
      </div>;
  },
  args: {
    label: 'Team Members',
    placeholder: 'Add more...'
  },
  name: 'Overflow Layer'
}`,...z.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([users[0], users[2]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={items => setValue(items)} endContent={<Button label="Apply" variant="primary" size="sm" />} />;
  },
  args: {
    label: 'Team Members'
  },
  name: 'With End Content'
}`,...M.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [tags, setTags] = useState<SearchableItem[]>([]);
    return <div>
        <Tokenizer {...args} searchSource={emptySource} value={tags} onChange={(items, _change) => {
        setTags(items);
      }} hasCreate placeholder="Type a tag and press Enter..." />
        <p style={{
        marginTop: 8,
        fontSize: 14,
        color: '#666'
      }}>
          {tags.length} tag{tags.length !== 1 ? 's' : ''} added
        </p>
      </div>;
  },
  args: {
    label: 'Tags'
  },
  name: 'Creatable (Free Text)'
}`,...W.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<SearchableItem[]>([]);
    const [md, setMd] = useState<SearchableItem[]>([users[0], users[2]]);
    const [lg, setLg] = useState<SearchableItem[]>([]);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <Tokenizer label="Small (28px)" searchSource={userSource} value={sm} onChange={items => setSm(items)} placeholder="Small size" size="sm" hasClear />
        <Tokenizer label="Medium (32px)" searchSource={userSource} value={md} onChange={items => setMd(items)} placeholder="Medium size (default)" size="md" hasClear />
        <Tokenizer label="Large (36px)" searchSource={userSource} value={lg} onChange={items => setLg(items)} placeholder="Large size" size="lg" hasClear />
      </div>;
  }
}`,...k.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem[]>([]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={(items, _change) => {
      setValue(items);
    }} hasCreate hasEntriesOnFocus placeholder="Search or type a new name..." />;
  },
  args: {
    label: 'Team Members'
  },
  name: 'Creatable + Search'
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value] = useState([users[0], users[1]]);
    return <Tokenizer {...args} searchSource={userSource} value={value} onChange={() => {}} />;
  },
  args: {
    label: 'Team Members',
    isDisabled: true,
    disabledMessage: 'You need edit access to change members'
  }
}`,...I.parameters?.docs?.source}}};const ee=["Default","WithPreselected","WithClear","MaxEntries","Required","WithDescription","WithError","WithWarning","WithSuccess","Disabled","WithStartIcon","WithStartIconAndTokens","WithEntriesOnFocus","OverflowInline","OverflowLayer","WithEndContent","Creatable","SizeVariants","CreatableWithSearch","DisabledWithMessage"];export{W as Creatable,D as CreatableWithSearch,t as Default,C as Disabled,I as DisabledWithMessage,h as MaxEntries,y as OverflowInline,z as OverflowLayer,p as Required,k as SizeVariants,d as WithClear,g as WithDescription,M as WithEndContent,x as WithEntriesOnFocus,S as WithError,m as WithPreselected,T as WithStartIcon,f as WithStartIconAndTokens,v as WithSuccess,b as WithWarning,ee as __namedExportsOrder,$ as default};
