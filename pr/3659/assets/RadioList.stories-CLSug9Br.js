import{ag as r,aN as oe,a0 as e,a5 as _,ax as W,ae as R}from"./iframe-l2Ww7LcQ.js";import{F as ue}from"./Field-CgnxQX5t.js";import{I as de}from"./Item-DkSyR5qI.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldStatus-BBUOmWx1.js";import"./Tooltip-CGQJXpSM.js";import"./computeTargetAndRel-BlG0ENK0.js";const O=r.createContext(null);O.displayName="RadioListContext";function u({ref:s,label:i,isLabelHidden:t=!1,description:n,value:o,onChange:l,orientation:x="vertical",isDisabled:v=!1,disabledMessage:m,isRequired:g=!1,isOptional:S=!1,size:d="md",status:c,labelTooltip:b,width:h,xstyle:L,className:P,style:J,"data-testid":ee,htmlName:ae,children:se}){const te=r.useId(),B=ae??te,le=r.useId(),U=r.useId(),F=r.useId(),H=r.useId(),G=r.useRef(null),k=v&&!!m,$=oe({placement:"above",focusTrigger:"always",isEnabled:k}),ie=r.useMemo(()=>({name:B,value:o,onChange:l,isDisabled:v,hasDisabledMessage:k,isRequired:g,size:d,status:c}),[B,o,l,v,k,g,d,c]),re=r.useCallback(f=>{if(o!=="")return;const C=G.current;if(!C)return;const X=f.relatedTarget;if(X){if(C.contains(X))return}else if(document.activeElement&&document.activeElement!==f.target&&C.contains(document.activeElement))return;const y=Array.from(C.querySelectorAll('input[type="radio"]:not([disabled])'));if(y.length===0)return;const Z=f.target,K=y.findIndex(ne=>ne===Z);if(K===-1)return;const Q=K===y.length-1?y[y.length-1]:y[0];Z!==Q&&Q.focus()},[o]);return e.jsxs(ue,{ref:s,"data-testid":ee,label:i,isLabelHidden:t,description:n,inputID:le,labelID:U,isGroupLabel:!0,descriptionID:n?F:void 0,isOptional:S,isRequired:g,isDisabled:v,status:c?{type:c.type,message:c.message,messageID:c.message?H:void 0}:void 0,labelTooltip:b,statusVariant:"detached",width:h,xstyle:L,className:P,style:J,children:[e.jsx("div",{ref:f=>{G.current=f,$.ref(f)},role:"radiogroup","aria-labelledby":U,onFocus:re,"aria-describedby":[n?F:null,c?.message?H:null,k?$.describedBy:null].filter(Boolean).join(" ")||void 0,"aria-invalid":c?.type==="error"?!0:void 0,"aria-required":g||void 0,..._(W("radio-list",{orientation:x,size:d}),{0:{className:"astryx78zum5 astryx1q0g3np astryx9mgr7n"},1:{className:"astryx78zum5 astryxdt5ytf astryx1txdalj"}}[(x==="vertical")<<0]),children:e.jsx(O,{value:ie,children:se})}),k&&$.renderTooltip(m)]})}u.displayName="RadioList";u.__docgenInfo={description:`A radio group component for single-value selection.

@example
\`\`\`
<RadioList
  label="Notification preference"
  value={selected}
  onChange={setSelected}>
  <RadioListItem label="Email" value="email" />
  <RadioListItem label="SMS" value="sms" />
  <RadioListItem label="Push" value="push" />
</RadioList>
\`\`\``,methods:[],displayName:"RadioList",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:"Label text for the radio group (always rendered for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed below the label."},value:{required:!0,tsType:{name:"string"},description:"The currently selected value."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Callback fired when the selected value changes."},orientation:{required:!1,tsType:{name:"union",raw:"'vertical' | 'horizontal'",elements:[{name:"literal",value:"'vertical'"},{name:"literal",value:"'horizontal'"}]},description:`Layout direction of the radio items.
@default "vertical"`,defaultValue:{value:"'vertical'",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether all radio items are disabled.
@default false`,defaultValue:{value:"false",computed:!1}},htmlName:{required:!1,tsType:{name:"string"},description:`The HTML name attribute shared by the radio inputs in the group.
Useful for form submissions; when omitted, a unique internal name is
generated so the group still roves correctly.`},disabledMessage:{required:!1,tsType:{name:"string"},description:"Explains why the radio group is disabled. Applies to the whole-group\ndisabled state (`isDisabled`), not individual items. When set together with\n`isDisabled`, the group shows a tooltip with this text on hover and keyboard\nfocus, and its radios stay focusable (via `aria-disabled`) so the reason is\ndiscoverable by keyboard and assistive technology. Selection stays blocked.\n\nUse this instead of wrapping a disabled group in `Tooltip` — disabled\ncontrols don't emit the pointer events an external tooltip needs."},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the radio group is required.
@default false`,defaultValue:{value:"false",computed:!1}},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"InputStatus"},description:`Status indicator for the radio group.
When set with a message, displays a colored message box below the group.`},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"}]},description:`The size of the radio controls.
- 'sm': Compact size (18px radio, 20px wrapper)
- 'md': Default size (22px radio, 24px wrapper)
@default 'md'`,defaultValue:{value:"'md'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for the outer container."},children:{required:!0,tsType:{name:"ReactNode"},description:"Radio list items to render."}},composes:["Omit"]};const ce={astryxklqth5:"astryxklqth5",$$css:!0},p={container:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryx1txdalj",$$css:!0},radioWrapper:{kVAEAm:"astryx1n2onr6",k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kjj79g:"astryxl56j7k",kmuXW:"astryx2lah0s",kHBbk8:"astryxc8icb0",$$css:!0},input:{kVAEAm:"astryx10l6tqk",kogj98:"astryx1ghz6dp",kmVPX3:"astryx1717udv",kSiTet:"astryxg01cxk",kkrTdU:"astryx1ypdohk",kY2c9j:"astryx1vjfegm",$$css:!0},inputDisabled:{kkrTdU:"astryx1h6gzvc",$$css:!0},radio:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kjj79g:"astryxl56j7k",kMzoRj:"astryx1litavf",ksu8eU:"astryx1y0btm7",kaIpWk:"astryx16rqkct",k1ekBW:"astryxts7igz",kIyJzY:"astryxuedmi6",kAMwcw:"astryxlr8y92",kB7OPa:"astryx9f619",$$css:!0},radioUnchecked:{kVAM5u:"astryxvy26l8 astryx1qgvwc6",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:"astryx10xzikg astryx49hlbq",$$css:!0},radioChecked:{kVAM5u:"astryxad5do astryx1k21oa1",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,kWkggS:"astryx1ewilqj astryx1y6as5r",$$css:!0},radioWrapperFocus:{kI3sdo:"astryx1a2a7pz astryx1irc7jg",kjBf7l:null,k3XXqK:null,kMeerF:null,kInvED:"astryx1wfwxd8 astryxdjuwb3",kaIpWk:"astryx16rqkct",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,$$css:!0},radioDisabled:{kSiTet:"astryxbyyjgo",kVAM5u:"astryx14i3s5s",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},radioDisabledUnchecked:{kWkggS:"astryxwmxj5m",$$css:!0},innerDot:{kaIpWk:"astryx16rqkct",kWkggS:"astryx1azo05",$$css:!0}},Y={sm:{kzqmXN:"astryxw4jnvo",kZKoxP:"astryx1qx5ct2",$$css:!0},md:{kzqmXN:"astryxvy4d1p",kZKoxP:"astryxxk0z11",$$css:!0}},me={sm:{kzqmXN:"astryx1xp8n7a",kZKoxP:"astryxmix8c7",$$css:!0},md:{kzqmXN:"astryx17z2i9w",kZKoxP:"astryx17rw0jw",$$css:!0}},pe={sm:{kzqmXN:"astryx1xc55vz",kZKoxP:"astryxdk7pt",$$css:!0},md:{kzqmXN:"astryx1fsd2vl",kZKoxP:"astryx170jfvy",$$css:!0}},ve={root:{k8WAf4:"astryxt970qd",kLKAdn:null,kGO01o:null,kg3NbH:"astryxnjsko4",kuDDbn:null,kE3dHu:null,kP0aTx:null,kpe85a:null,kaIpWk:"astryx2u8bby",krdFHd:null,kfmiAY:null,kVL7Gh:null,kT0f0o:null,kIxVMA:null,ksF3WI:null,kqGeR4:null,kYm2EN:null,kUk6DE:"astryx98rzlu",kzQI83:null,kmuXW:null,kCS8Yb:null,k7Eaqz:"astryxeuugli",$$css:!0}};function a({ref:s,label:i,value:t,description:n,isDisabled:o=!1,startContent:l,endContent:x,"data-testid":v}){const m=r.use(O);if(!m)throw new Error("RadioListItem must be used within an RadioList");const g=r.useId(),S=r.useId(),d=m.isDisabled||o,c=m.hasDisabledMessage&&!o,b=m.value===t,h=m.size,L=e.jsxs("div",{...R(p.radioWrapper,Y[h],!d&&p.radioWrapperFocus),children:[e.jsx("input",{id:g,type:"radio",name:m.name,value:t,checked:b,disabled:d&&!c,"aria-disabled":c?"true":void 0,form:c?"":void 0,required:m.isRequired,onChange:()=>{d||m.onChange(t)},"aria-describedby":n?S:void 0,...R(p.input,Y[h],d&&p.inputDisabled)}),e.jsx("div",{"aria-hidden":"true",..._(W("radio",{size:h,checked:b?"checked":null,disabled:d?"disabled":null}),R(p.radio,me[h],b?p.radioChecked:p.radioUnchecked,d&&p.radioDisabled,d&&!b&&p.radioDisabledUnchecked)),children:b&&e.jsx("div",{..._(W("radio-dot",{size:h}),R(p.innerDot,pe[h]))})})]}),P=l!=null?e.jsxs(e.Fragment,{children:[L,l]}):L;return e.jsx("div",{ref:s,"data-testid":v,..._(W("radio-list-item"),R(p.container,!d&&ce)),children:e.jsx(de,{startContent:P,label:e.jsx("label",{htmlFor:g,...{0:{},1:{className:"astryxnbbluu astryx1h6gzvc"}}[!!d<<0],children:i}),description:n!=null?e.jsx("span",{id:S,children:n}):void 0,endContent:x,xstyle:ve.root})})}a.displayName="RadioListItem";a.__docgenInfo={description:`An individual radio item within an RadioList.

@example
\`\`\`
<RadioListItem label="Email" value="email" />
<RadioListItem
  label="SMS"
  value="sms"
  description="Standard messaging rates apply"
/>
\`\`\``,methods:[],displayName:"RadioListItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:"Label text for the radio item."},value:{required:!0,tsType:{name:"string"},description:"Value of this radio item."},description:{required:!1,tsType:{name:"string"},description:"Description text displayed below the label."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether this individual radio item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},startContent:{required:!1,tsType:{name:"ReactNode"},description:"Content to render before the radio circle."},endContent:{required:!1,tsType:{name:"ReactNode"},description:"Content to render after the label."}},composes:["Omit"]};const Se={title:"Core/RadioList",component:u,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},description:{control:"text",description:"Description text displayed below the label"},value:{control:"text",description:"The currently selected value"},orientation:{control:"select",options:["vertical","horizontal"],description:"Layout direction of the radio items"},isDisabled:{control:"boolean",description:"Whether all radio items are disabled"},disabledMessage:{control:"text",description:"Explains why the group is disabled (whole-group state, not per item). With isDisabled, shows a tooltip on hover/keyboard focus and keeps the radios focusable via aria-disabled (selection stays blocked). Use this instead of wrapping a disabled RadioList in Tooltip."},isRequired:{control:"boolean",description:"Whether the radio group is required"},isOptional:{control:"boolean",description:"Whether the field is optional"}}},j={render:s=>{const[i,t]=r.useState(s.value??""),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference"}},I={render:s=>{const[i,t]=r.useState(s.value??""),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email",description:"Receive notifications via email"}),e.jsx(a,{label:"SMS",value:"sms",description:"Standard messaging rates apply"}),e.jsx(a,{label:"Push notification",value:"push",description:"Instant alerts on your device"})]})},args:{label:"Notification preference",description:"Choose how you would like to be notified"}},V={render:s=>{const[i,t]=r.useState(s.value??""),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Small",value:"sm"}),e.jsx(a,{label:"Medium",value:"md"}),e.jsx(a,{label:"Large",value:"lg"})]})},args:{label:"Size",orientation:"horizontal"}},D={render:s=>{const[i,t]=r.useState(s.value??"email"),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference",isDisabled:!0}},q={render:s=>{const[i,t]=r.useState(s.value??""),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms",isDisabled:!0}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference"}},E={render:s=>{const[i,t]=r.useState(s.value??""),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference",isRequired:!0}},A={render:s=>{const[i,t]=r.useState(s.value??""),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference",isOptional:!0}},w={render:s=>{const[i,t]=r.useState(s.value??""),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference",isRequired:!0,status:{type:"error",message:"Please select a notification method"}}},M={render:s=>{const[i,t]=r.useState(s.value??""),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email",startContent:e.jsx("span",{children:"📧"})}),e.jsx(a,{label:"SMS",value:"sms",startContent:e.jsx("span",{children:"💬"})}),e.jsx(a,{label:"Push notification",value:"push",startContent:e.jsx("span",{children:"🔔"})})]})},args:{label:"Notification preference"}},T={render:s=>{const[i,t]=r.useState(s.value??""),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Free",value:"free",endContent:e.jsx("span",{style:{color:"#0D8626"},children:"$0/mo"})}),e.jsx(a,{label:"Pro",value:"pro",endContent:e.jsx("span",{style:{color:"#0064E0"},children:"$9/mo"})}),e.jsx(a,{label:"Enterprise",value:"enterprise",endContent:e.jsx("span",{style:{color:"#5B08D8"},children:"Custom"})})]})},args:{label:"Plan"}},z={render:()=>{const[s,i]=r.useState(""),[t,n]=r.useState("email"),[o,l]=r.useState(""),[x,v]=r.useState("sm");return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[e.jsxs(u,{label:"Unselected",value:s,onChange:i,children:[e.jsx(a,{label:"Option A",value:"a"}),e.jsx(a,{label:"Option B",value:"b"})]}),e.jsxs(u,{label:"Pre-selected",value:t,onChange:n,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"})]}),e.jsxs(u,{label:"Disabled group",value:"",onChange:()=>{},isDisabled:!0,children:[e.jsx(a,{label:"Option A",value:"a"}),e.jsx(a,{label:"Option B",value:"b"})]}),e.jsxs(u,{label:"With descriptions",value:o,onChange:l,children:[e.jsx(a,{label:"Email",value:"email",description:"Delivered to your inbox"}),e.jsx(a,{label:"SMS",value:"sms",description:"Standard rates apply"})]}),e.jsxs(u,{label:"Horizontal",value:x,onChange:v,orientation:"horizontal",children:[e.jsx(a,{label:"S",value:"sm"}),e.jsx(a,{label:"M",value:"md"}),e.jsx(a,{label:"L",value:"lg"})]}),e.jsxs(u,{label:"With error",value:"",onChange:()=>{},isRequired:!0,status:{type:"error",message:"Please select an option"},children:[e.jsx(a,{label:"Option A",value:"a"}),e.jsx(a,{label:"Option B",value:"b"})]})]})}},N={render:s=>{const[i,t]=r.useState(s.value??"email"),{value:n,onChange:o,...l}=s;return e.jsxs(u,{...l,value:i,onChange:t,children:[e.jsx(a,{label:"Email",value:"email"}),e.jsx(a,{label:"SMS",value:"sms"}),e.jsx(a,{label:"Push notification",value:"push"})]})},args:{label:"Notification preference",isDisabled:!0,disabledMessage:"Upgrade your account to change preferences"}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference'
  }
}`,...j.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" description="Receive notifications via email" />
        <RadioListItem label="SMS" value="sms" description="Standard messaging rates apply" />
        <RadioListItem label="Push notification" value="push" description="Instant alerts on your device" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    description: 'Choose how you would like to be notified'
  }
}`,...I.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Small" value="sm" />
        <RadioListItem label="Medium" value="md" />
        <RadioListItem label="Large" value="lg" />
      </RadioList>;
  },
  args: {
    label: 'Size',
    orientation: 'horizontal'
  }
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'email');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isDisabled: true
  }
}`,...D.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" isDisabled />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference'
  }
}`,...q.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isRequired: true
  }
}`,...E.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isOptional: true
  }
}`,...A.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isRequired: true,
    status: {
      type: 'error',
      message: 'Please select a notification method'
    }
  }
}`,...w.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" startContent={<span>📧</span>} />
        <RadioListItem label="SMS" value="sms" startContent={<span>💬</span>} />
        <RadioListItem label="Push notification" value="push" startContent={<span>🔔</span>} />
      </RadioList>;
  },
  args: {
    label: 'Notification preference'
  }
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Free" value="free" endContent={<span style={{
        color: '#0D8626'
      }}>$0/mo</span>} />
        <RadioListItem label="Pro" value="pro" endContent={<span style={{
        color: '#0064E0'
      }}>$9/mo</span>} />
        <RadioListItem label="Enterprise" value="enterprise" endContent={<span style={{
        color: '#5B08D8'
      }}>Custom</span>} />
      </RadioList>;
  },
  args: {
    label: 'Plan'
  }
}`,...T.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('email');
    const [value3, setValue3] = useState('');
    const [value4, setValue4] = useState('sm');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <RadioList label="Unselected" value={value1} onChange={setValue1}>
          <RadioListItem label="Option A" value="a" />
          <RadioListItem label="Option B" value="b" />
        </RadioList>
        <RadioList label="Pre-selected" value={value2} onChange={setValue2}>
          <RadioListItem label="Email" value="email" />
          <RadioListItem label="SMS" value="sms" />
        </RadioList>
        <RadioList label="Disabled group" value="" onChange={() => {}} isDisabled>
          <RadioListItem label="Option A" value="a" />
          <RadioListItem label="Option B" value="b" />
        </RadioList>
        <RadioList label="With descriptions" value={value3} onChange={setValue3}>
          <RadioListItem label="Email" value="email" description="Delivered to your inbox" />
          <RadioListItem label="SMS" value="sms" description="Standard rates apply" />
        </RadioList>
        <RadioList label="Horizontal" value={value4} onChange={setValue4} orientation="horizontal">
          <RadioListItem label="S" value="sm" />
          <RadioListItem label="M" value="md" />
          <RadioListItem label="L" value="lg" />
        </RadioList>
        <RadioList label="With error" value="" onChange={() => {}} isRequired status={{
        type: 'error',
        message: 'Please select an option'
      }}>
          <RadioListItem label="Option A" value="a" />
          <RadioListItem label="Option B" value="b" />
        </RadioList>
      </div>;
  }
}`,...z.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'email');
    const {
      value: _value,
      onChange: _onChange,
      ...restArgs
    } = args;
    return <RadioList {...restArgs} value={value} onChange={setValue}>
        <RadioListItem label="Email" value="email" />
        <RadioListItem label="SMS" value="sms" />
        <RadioListItem label="Push notification" value="push" />
      </RadioList>;
  },
  args: {
    label: 'Notification preference',
    isDisabled: true,
    disabledMessage: 'Upgrade your account to change preferences'
  }
}`,...N.parameters?.docs?.source}}};const Le=["Default","WithDescription","Horizontal","Disabled","DisabledItem","Required","Optional","WithErrorStatus","WithStartContent","WithEndContent","AllVariations","DisabledWithMessage"];export{z as AllVariations,j as Default,D as Disabled,q as DisabledItem,N as DisabledWithMessage,V as Horizontal,A as Optional,E as Required,I as WithDescription,T as WithEndContent,w as WithErrorStatus,M as WithStartContent,Le as __namedExportsOrder,Se as default};
