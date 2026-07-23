import{aL as Q,ag as s,a0 as e,c as ee,a5 as M,ae as z,ax as F,I as te}from"./iframe-C8XmfRPK.js";import{F as re}from"./Field-ElIt52VC.js";import{I as ae}from"./InputGroupContext-DWaAjvY2.js";import{T as o}from"./TextInput-V5QbRkVe.js";import{N as se}from"./NumberInput-BwmHd_AI.js";import{T as ne}from"./TimeInput-DTZ02zUE.js";import{D as le}from"./DateInput-CfDwIBEQ.js";import{T as N}from"./Typeahead-DIVLbwIP.js";import{S as U}from"./Selector-vQ6m2S7q.js";import{M as oe}from"./MultiSelector-vSBlRbwq.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldStatus-CSyf9kYq.js";import"./Tooltip-DQyY8hI2.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./useInputContainer-kPGvgujL.js";import"./timeParser-DHsJNTm3.js";import"./Calendar-Bw0s1AUn.js";import"./plainDate-C-ANv9VG.js";import"./usePopover-BB9kWVWg.js";import"./useFocusTrap-CWBKSEY3.js";import"./dateParser-XTIqkafj.js";import"./BaseTypeahead-CshdBQL7.js";import"./useAnnounce-C_HAQML5.js";import"./TypeaheadItem-eJ6Wd-3f.js";import"./getKey-DyRdrWhf.js";import"./InputClearButton-ohPpISPE.js";import"./Token-BmeOybpC.js";import"./useInteractiveRole-Dqs2OSxq.js";import"./Divider-Ox4e8wv4.js";import"./utils-_uNaBhDK.js";import"./hooks-JnWvdiQj.js";import"./Item-CPDFvBrl.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./CheckboxInput-D_8XFo0y.js";import"./Badge-CGtGYobd.js";const O={group:{k1xSpc:"astryx3nfvp2",kGNEyG:"astryx1qjc9v5",kWkggS:"astryxjbqb8w",$$css:!0},disabled:{kkrTdU:"astryx1h6gzvc",kSiTet:"astryxbyyjgo",$$css:!0}},ue={sm:{kZKoxP:"astryx6k0iem",$$css:!0},md:{kZKoxP:"astryx1ueg155",$$css:!0},lg:{kZKoxP:"astryxssyfek",$$css:!0}};function l({children:t,label:r,isLabelHidden:a=!1,description:u,isDisabled:i=!1,isOptional:d=!1,isRequired:H=!1,size:W,status:p,labelTooltip:D,xstyle:w,className:k,style:B,ref:X,"data-testid":Y,...K}){const P=Q(W,"md"),Z=s.useId(),c=s.useId(),R=s.useId(),$=s.useId(),A=[u?R:null,p?.message?$:null].filter(Boolean).join(" ")||void 0,J=s.useMemo(()=>({isInGroup:!0,labelID:c,describedByIDs:A}),[c,A]);return e.jsx(ae,{value:J,children:e.jsx(ee,{value:P,children:e.jsx(re,{label:r,isLabelHidden:a,description:u,inputID:Z,labelID:c,descriptionID:u?R:void 0,isGroupLabel:!0,isOptional:d,isRequired:H,isDisabled:i,status:p?{type:p.type,message:p.message,messageID:p.message?$:void 0}:void 0,statusVariant:"detached",labelTooltip:D,children:e.jsx("div",{ref:X,role:"group","aria-labelledby":c,"aria-describedby":A,"data-testid":Y,...K,...M(F("input-group",{size:P,status:p?.type??null}),z(O.group,ue[P],i&&O.disabled,w),k,B),children:t})})})})}l.displayName="InputGroup";l.__docgenInfo={description:`Groups an input with prefix/suffix addons in a visually connected
container with shared border and focus ring.

@example
\`\`\`
<InputGroup label="Price">
  <InputGroupText>$</InputGroupText>
  <TextInput label="Price" isLabelHidden value={price} onChange={setPrice} />
</InputGroup>
\`\`\``,methods:[],displayName:"InputGroup",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the group container element"},children:{required:!0,tsType:{name:"ReactNode"},description:"Input and addon children."},label:{required:!0,tsType:{name:"string"},description:"Label text for the group (required for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label.
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed between the label and input group."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the group is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required.
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`Default size for inputs in the group.
@default 'md'`},status:{required:!1,tsType:{name:"InputStatus"},description:"Status indicator applied to the group border."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text at the end of the label."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for testing frameworks."}},composes:["Omit"]};const ie={text:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kg3NbH:"astryxf314gf",kWkggS:"astryxwmxj5m",kMv6JI:"astryx9ynric",kGuDYH:"astryxjm74w1",kLWn49:"astryxw6l6zx",kMwMTN:"astryxv1l7n4",khDVqt:"astryxuxw1ft",kmuXW:"astryx2lah0s",kMzoRj:"astryx1litavf",ksu8eU:"astryx1y0btm7",kVAM5u:"astryxvy26l8",keTefX:"astryxd10s4z astryx1pwwqoy",krdFHd:"astryx15mokao astryx8eehn2",kVL7Gh:"astryxbiv7yw astryx1xrp5p4",kfmiAY:"astryx1ga7v0g astryx11xp8u1",kT0f0o:"astryx16uus16 astryx747jw7",$$css:!0}};function n({ref:t,children:r,xstyle:a,className:u,style:i,...d}){return e.jsx("div",{ref:t,...d,...M(F("input-group-text"),z(ie.text,a),u,i),children:r})}n.displayName="InputGroupText";n.__docgenInfo={description:`A prefix or suffix text element for use inside InputGroup.

@example
\`\`\`
<InputGroup label="URL">
  <InputGroupText>https://</InputGroupText>
  <TextInput label="URL" isLabelHidden value={url} onChange={setUrl} />
</InputGroup>
\`\`\``,methods:[],displayName:"InputGroupText",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:`Content to render in the text slot.
Can be text or an icon.`}},composes:["Omit"]};const E=[{id:"1",label:"Apple"},{id:"2",label:"Banana"},{id:"3",label:"Cherry"},{id:"4",label:"Date"},{id:"5",label:"Elderberry"},{id:"6",label:"Fig"},{id:"7",label:"Grape"}],_={search:t=>E.filter(r=>r.label.toLowerCase().includes(t.toLowerCase())),bootstrap:()=>E.slice(0,5)},Ue={title:"Core/InputGroup",component:l,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label"},description:{control:"text",description:"Description text"},isDisabled:{control:"boolean",description:"Disable the group"},size:{control:"radio",options:["sm","md","lg"],description:"Input size"}}},q=["Design Systems","Infrastructure","Product"],m={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"$"}),e.jsx(o,{label:"Amount",isLabelHidden:!0,value:r,onChange:a,placeholder:"0.00"})]})},args:{label:"Price"}},h={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(o,{label:"Weight",isLabelHidden:!0,value:r,onChange:a,placeholder:"0"}),e.jsx(n,{children:"kg"})]})},args:{label:"Weight"}},x={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"https://"}),e.jsx(o,{label:"URL",isLabelHidden:!0,value:r,onChange:a,placeholder:"example"}),e.jsx(n,{children:".com"})]})},args:{label:"Website"}},b={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:e.jsx(te,{icon:"search",size:"sm",color:"secondary"})}),e.jsx(o,{label:"Search",isLabelHidden:!0,value:r,onChange:a,placeholder:"Search..."})]})},args:{label:"Search",isLabelHidden:!0}},g={render:t=>{const[r,a]=s.useState(null);return e.jsxs(l,{...t,children:[e.jsx(n,{children:"Fruit"}),e.jsx(N,{label:"Selection",isLabelHidden:!0,searchSource:_,value:r,onChange:a,placeholder:"Search fruits...",hasEntriesOnFocus:!0})]})},args:{label:"Favorite fruit",description:"Select one fruit from the list"}},I={render:t=>{const[r,a]=s.useState(void 0);return e.jsxs(l,{...t,children:[e.jsx(n,{children:"$"}),e.jsx(se,{label:"Amount",isLabelHidden:!0,value:r,onChange:a,placeholder:"0.00"})]})},args:{label:"Budget"}},f={render:t=>{const[r,a]=s.useState("09:00");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"Starts"}),e.jsx(ne,{label:"Start time",isLabelHidden:!0,value:r,onChange:a,hourFormat:"24h",placeholder:"09:00"})]})},args:{label:"Schedule",description:"Use local time"}},v={render:t=>{const[r,a]=s.useState(void 0);return e.jsxs(l,{...t,children:[e.jsx(n,{children:"Due"}),e.jsx(le,{label:"Date",isLabelHidden:!0,value:r,onChange:a,placeholder:"Select date"})]})},args:{label:"Deadline",description:"Pick the due date"}},S={render:t=>{const[r,a]=s.useState(void 0);return e.jsxs(l,{...t,children:[e.jsx(n,{children:"Team"}),e.jsx(U,{label:"Owner",isLabelHidden:!0,options:q,value:r,onChange:a,placeholder:"Choose owner"})]})},args:{label:"Default owner"}},T={render:t=>{const[r,a]=s.useState([]);return e.jsxs(l,{...t,children:[e.jsx(n,{children:"Teams"}),e.jsx(oe,{label:"Owners",isLabelHidden:!0,options:q,value:r,onChange:a,placeholder:"Choose owners"})]})},args:{label:"Default owners",description:"Select one or more teams"}},G={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"@"}),e.jsx(o,{label:"Username",isLabelHidden:!0,value:r,onChange:a,placeholder:"username"})]})},args:{label:"Username",description:"Your public display name"}},y={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"$"}),e.jsx(o,{label:"Amount",isLabelHidden:!0,value:r,onChange:a,placeholder:"0.00"})]})},args:{label:"Price",status:{type:"error",message:"Price is required"}}},j={render:t=>{const[r,a]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(n,{children:"$"}),e.jsx(o,{label:"Amount",isLabelHidden:!0,value:r,onChange:a,placeholder:"0.00"})]})},args:{label:"Price",size:"sm"}},L={render:t=>{const[r,a]=s.useState("");return e.jsx("div",{style:{maxWidth:500},children:e.jsxs(l,{...t,children:[e.jsx(n,{children:"https://"}),e.jsx(o,{label:"URL",isLabelHidden:!0,value:r,onChange:a,placeholder:"example.com"})]})})},args:{label:"Website URL"}},V={render:t=>{const[r,a]=s.useState(""),[u,i]=s.useState("");return e.jsxs(l,{...t,children:[e.jsx(o,{label:"Address",isLabelHidden:!0,value:r,onChange:a,placeholder:"Address"}),e.jsx(n,{children:"@"}),e.jsx(o,{label:"Domain",isLabelHidden:!0,value:u,onChange:i,placeholder:"Domain"})]})},args:{label:"Email"}},C={render:()=>{const[t,r]=s.useState(""),[a,u]=s.useState(""),[i,d]=s.useState(""),[H,W]=s.useState(""),[p,D]=s.useState(null),[w,k]=s.useState(void 0);return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[e.jsxs(l,{label:"Price",children:[e.jsx(n,{children:"$"}),e.jsx(o,{label:"Amount",isLabelHidden:!0,value:t,onChange:r,placeholder:"0.00"})]}),e.jsxs(l,{label:"Website",children:[e.jsx(n,{children:"https://"}),e.jsx(o,{label:"URL",isLabelHidden:!0,value:a,onChange:u,placeholder:"example"}),e.jsx(n,{children:".com"})]}),e.jsxs(l,{label:"Favorite fruit",children:[e.jsx(n,{children:"Fruit"}),e.jsx(N,{label:"Selection",isLabelHidden:!0,searchSource:_,value:p,onChange:D,placeholder:"Search fruits...",hasEntriesOnFocus:!0})]}),e.jsxs(l,{label:"Weight",children:[e.jsx(o,{label:"Weight",isLabelHidden:!0,value:i,onChange:d,placeholder:"0"}),e.jsx(n,{children:"kg"})]}),e.jsxs(l,{label:"Price",status:{type:"error",message:"Price is required"},children:[e.jsx(n,{children:"$"}),e.jsx(o,{label:"Amount",isLabelHidden:!0,value:H,onChange:W,placeholder:"0.00"})]}),e.jsxs(l,{label:"Default owner",children:[e.jsx(n,{children:"Team"}),e.jsx(U,{label:"Owner",isLabelHidden:!0,options:q,value:w,onChange:k,placeholder:"Choose owner"})]})]})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <TextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Price'
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <TextInput label="Weight" isLabelHidden value={value} onChange={setValue} placeholder="0" />
        <InputGroupText>kg</InputGroupText>
      </InputGroup>;
  },
  args: {
    label: 'Weight'
  }
}`,...h.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>https://</InputGroupText>
        <TextInput label="URL" isLabelHidden value={value} onChange={setValue} placeholder="example" />
        <InputGroupText>.com</InputGroupText>
      </InputGroup>;
  },
  args: {
    label: 'Website'
  }
}`,...x.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>
          <Icon icon="search" size="sm" color="secondary" />
        </InputGroupText>
        <TextInput label="Search" isLabelHidden value={value} onChange={setValue} placeholder="Search..." />
      </InputGroup>;
  },
  args: {
    label: 'Search',
    isLabelHidden: true
  }
}`,...b.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<SearchableItem | null>(null);
    return <InputGroup {...args}>
        <InputGroupText>Fruit</InputGroupText>
        <Typeahead label="Selection" isLabelHidden searchSource={fruitSource} value={value} onChange={setValue} placeholder="Search fruits..." hasEntriesOnFocus />
      </InputGroup>;
  },
  args: {
    label: 'Favorite fruit',
    description: 'Select one fruit from the list'
  }
}`,...g.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<number | undefined>(undefined);
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <NumberInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Budget'
  }
}`,...I.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISOTimeString | undefined>('09:00' as ISOTimeString);
    return <InputGroup {...args}>
        <InputGroupText>Starts</InputGroupText>
        <TimeInput label="Start time" isLabelHidden value={value} onChange={setValue} hourFormat="24h" placeholder="09:00" />
      </InputGroup>;
  },
  args: {
    label: 'Schedule',
    description: 'Use local time'
  }
}`,...f.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <InputGroup {...args}>
        <InputGroupText>Due</InputGroupText>
        <DateInput label="Date" isLabelHidden value={value} onChange={setValue} placeholder="Select date" />
      </InputGroup>;
  },
  args: {
    label: 'Deadline',
    description: 'Pick the due date'
  }
}`,...v.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string | undefined>(undefined);
    return <InputGroup {...args}>
        <InputGroupText>Team</InputGroupText>
        <Selector label="Owner" isLabelHidden options={TEAM_OPTIONS} value={value} onChange={setValue} placeholder="Choose owner" />
      </InputGroup>;
  },
  args: {
    label: 'Default owner'
  }
}`,...S.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<string[]>([]);
    return <InputGroup {...args}>
        <InputGroupText>Teams</InputGroupText>
        <MultiSelector label="Owners" isLabelHidden options={TEAM_OPTIONS} value={value} onChange={setValue} placeholder="Choose owners" />
      </InputGroup>;
  },
  args: {
    label: 'Default owners',
    description: 'Select one or more teams'
  }
}`,...T.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>@</InputGroupText>
        <TextInput label="Username" isLabelHidden value={value} onChange={setValue} placeholder="username" />
      </InputGroup>;
  },
  args: {
    label: 'Username',
    description: 'Your public display name'
  }
}`,...G.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <TextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Price',
    status: {
      type: 'error',
      message: 'Price is required'
    }
  }
}`,...y.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <InputGroup {...args}>
        <InputGroupText>$</InputGroupText>
        <TextInput label="Amount" isLabelHidden value={value} onChange={setValue} placeholder="0.00" />
      </InputGroup>;
  },
  args: {
    label: 'Price',
    size: 'sm'
  }
}`,...j.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: 500
    }}>
        <InputGroup {...args}>
          <InputGroupText>https://</InputGroupText>
          <TextInput label="URL" isLabelHidden value={value} onChange={setValue} placeholder="example.com" />
        </InputGroup>
      </div>;
  },
  args: {
    label: 'Website URL'
  }
}`,...L.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [left, setLeft] = useState('');
    const [right, setRight] = useState('');
    return <InputGroup {...args}>
        <TextInput label="Address" isLabelHidden value={left} onChange={setLeft} placeholder="Address" />
        <InputGroupText>@</InputGroupText>
        <TextInput label="Domain" isLabelHidden value={right} onChange={setRight} placeholder="Domain" />
      </InputGroup>;
  },
  args: {
    label: 'Email'
  }
}`,...V.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState('');
    const [v2, setV2] = useState('');
    const [v3, setV3] = useState('');
    const [v4, setV4] = useState('');
    const [v5, setV5] = useState<SearchableItem | null>(null);
    const [v6, setV6] = useState<string | undefined>(undefined);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <InputGroup label="Price">
          <InputGroupText>$</InputGroupText>
          <TextInput label="Amount" isLabelHidden value={v1} onChange={setV1} placeholder="0.00" />
        </InputGroup>
        <InputGroup label="Website">
          <InputGroupText>https://</InputGroupText>
          <TextInput label="URL" isLabelHidden value={v2} onChange={setV2} placeholder="example" />
          <InputGroupText>.com</InputGroupText>
        </InputGroup>
        <InputGroup label="Favorite fruit">
          <InputGroupText>Fruit</InputGroupText>
          <Typeahead label="Selection" isLabelHidden searchSource={fruitSource} value={v5} onChange={setV5} placeholder="Search fruits..." hasEntriesOnFocus />
        </InputGroup>
        <InputGroup label="Weight">
          <TextInput label="Weight" isLabelHidden value={v3} onChange={setV3} placeholder="0" />
          <InputGroupText>kg</InputGroupText>
        </InputGroup>
        <InputGroup label="Price" status={{
        type: 'error',
        message: 'Price is required'
      }}>
          <InputGroupText>$</InputGroupText>
          <TextInput label="Amount" isLabelHidden value={v4} onChange={setV4} placeholder="0.00" />
        </InputGroup>
        <InputGroup label="Default owner">
          <InputGroupText>Team</InputGroupText>
          <Selector label="Owner" isLabelHidden options={TEAM_OPTIONS} value={v6} onChange={setV6} placeholder="Choose owner" />
        </InputGroup>
      </div>;
  }
}`,...C.parameters?.docs?.source}}};const _e=["WithPrefix","WithSuffix","WithPrefixAndSuffix","WithIconPrefix","WithTypeahead","WithNumberInput","WithTimeInput","WithDateInput","WithSelector","WithMultiSelector","WithDescription","WithErrorStatus","SmallSize","FullWidth","TwoInputs","AllVariations"];export{C as AllVariations,L as FullWidth,j as SmallSize,V as TwoInputs,v as WithDateInput,G as WithDescription,y as WithErrorStatus,b as WithIconPrefix,T as WithMultiSelector,I as WithNumberInput,m as WithPrefix,x as WithPrefixAndSuffix,S as WithSelector,h as WithSuffix,f as WithTimeInput,g as WithTypeahead,_e as __namedExportsOrder,Ue as default};
