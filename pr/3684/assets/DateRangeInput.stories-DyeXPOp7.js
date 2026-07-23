import{aL as Ce,ag as n,aN as we,a0 as s,I as B,e as Ve,a5 as ke,ae as Ie,ax as je}from"./iframe-CouMrHD9.js";import{k as X,y as qe,i as ee,b as ze,c as Te}from"./plainDate-C-ANv9VG.js";import{F as Oe}from"./Field-BYvVLN_n.js";import{a as We,b as Me,i as $e,c as ae}from"./inputStyles.stylex-Bpqcd25J.js";import{C as Pe}from"./Calendar-By1ntV_m.js";import{u as Ae}from"./usePopover-BudNQH3o.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldStatus-BS_HeSvI.js";import"./Tooltip-B-PiHtaw.js";import"./useFocusTrap-DCnkc9xw.js";const Le={sm:{kZKoxP:"astryx6k0iem",k7Eaqz:"astryxfb3i0g",$$css:!0},md:{kZKoxP:"astryx1ueg155",k7Eaqz:"astryxfb3i0g",$$css:!0},lg:{kZKoxP:"astryxssyfek",k7Eaqz:"astryxfb3i0g",$$css:!0}};function Ee(e){if(!e)return"";const a=X(e.start),t=X(e.end),g=qe().year,u=a.year===t.year&&a.year===g?ze:Te;return`${ee(a,u)} – ${ee(t,u)}`}function Ne(e,a){return e===a?!0:!e||!a?!1:e.start===a.start&&e.end===a.end}function r({label:e,isLabelHidden:a=!1,description:t,isOptional:g=!1,isRequired:p=!1,isDisabled:u=!1,disabledMessage:f,value:c,onChange:D,changeAction:h,isLoading:te=!1,min:se,max:ne,dateConstraints:re,presets:A,hasClear:le=!0,placeholder:_="Select date range",size:oe,status:o,labelTooltip:ie,numberOfMonths:ue=2,width:de,xstyle:ce,className:ge,style:pe,ref:ye,...me}){const H=Ce(oe,"md"),Y=n.useId(),K=n.useId(),Z=n.useId(),[,J]=n.useTransition(),[L,U]=n.useOptimistic(c),b=te||L!==c,d=u||b,v=u&&!!f,E=we({placement:"above",focusTrigger:"always",isEnabled:v}),xe={warning:"warning",error:"error",success:"success"},he={warning:"warning",error:"error",success:"success"},be=[t?K:null,o?.message?Z:null,v?E.describedBy:null].filter(Boolean).join(" ")||void 0,N=n.useMemo(()=>Ee(L),[L]),i=Ae({dialogLabel:"Choose date range",closeButtonLabel:"Close calendar"}),m=n.useCallback(l=>{b||(D(l),h&&J(async()=>{U(l),await h(l)}))},[b,D,h,J,U]),G=n.useCallback(()=>{d||(i.isOpen?i.hide():i.show())},[d,i]),ve=n.useCallback(l=>{m(l),i.hide()},[m,i]),fe=n.useCallback(l=>{m(l.getRange()),i.hide()},[m,i]),De=n.useCallback(l=>{l.stopPropagation(),m(null)},[m]),Se=c?`${e}: ${N}`:`${e}: ${_}`;return s.jsxs(Oe,{label:e,isLabelHidden:a,description:t,inputID:Y,descriptionID:t?K:void 0,isOptional:g,isRequired:p,isDisabled:d,status:o?{type:o.type,message:o.message,messageID:o.message?Z:void 0}:void 0,labelTooltip:ie,width:de,children:[s.jsxs("div",{ref:l=>{i.triggerRef(l),E.ref(l)},...me,...ke(je("date-range-input",{size:H,status:o?.type??null}),Ie(ae.base,Le[H],d&&ae.disabled,o&&$e[o.type],o&&Me[o.type],o&&We[o.type],ce),ge,pe),children:[s.jsx("button",{type:"button",onClick:G,disabled:d,"aria-label":i.isOpen?"Close calendar":"Open calendar",tabIndex:-1,...{0:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto"},1:{className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto astryx1h6gzvc"}}[!!d<<0],children:s.jsx(B,{icon:"calendar",size:"sm",color:"secondary"})}),s.jsx("button",{ref:ye,id:Y,type:"button",onClick:G,disabled:d&&!v,"aria-disabled":v?"true":void 0,"aria-label":Se,"aria-describedby":be,"aria-required":p===!0?"true":void 0,"aria-invalid":o?.type==="error"?"true":void 0,"aria-busy":b||void 0,"aria-expanded":i.isOpen,"aria-haspopup":"dialog","aria-controls":i.isOpen?i.id:void 0,...{0:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryx1ypdohk astryx1yc453h astryxuxw1ft astryxb3r6kr astryxlyipyv"},2:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryx1ypdohk astryx1yc453h astryxuxw1ft astryxb3r6kr astryxlyipyv astryxv1l7n4"},1:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryx1yc453h astryxuxw1ft astryxb3r6kr astryxlyipyv astryx1h6gzvc"},3:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxjbqb8w astryx1a2a7pz astryx1yc453h astryxuxw1ft astryxb3r6kr astryxlyipyv astryxv1l7n4 astryx1h6gzvc"}}[!N<<1|!!d<<0],children:N||_}),le&&c!==null&&!d&&s.jsx("button",{type:"button",onClick:De,"aria-label":`Clear ${e}`,className:"astryx78zum5 astryx6s0dn4 astryxl56j7k astryx1717udv astryx1ghz6dp astryxc342km astryxng3xce astryxjbqb8w astryx1ypdohk astryxh6dtrn astryx1a2a7pz astryx1p25gnr astryx1y3gkto",children:s.jsx(B,{icon:"close",size:"sm",color:"secondary"})}),b&&s.jsx(Ve,{size:"sm"}),o&&s.jsx(B,{icon:xe[o.type],size:"md",color:he[o.type]})]}),i.render(s.jsxs("div",{className:"astryx78zum5",children:[A&&A.length>0&&s.jsx("div",{role:"group","aria-label":"Preset date ranges",className:"astryx78zum5 astryxdt5ytf astryxzye2dw astryx1b2ylru astryx1pcaw5z astryx32b0ac astryxdz7fjg astryx1d77m7x",children:A.map(l=>{const Re=l.getRange(),Q=Ne(c,Re);return s.jsx("button",{type:"button","aria-current":Q?"true":void 0,onClick:()=>fe(l),...{0:{className:"astryx1lliihq astryxh8yej3 astryxtozwh astryx1ghz6dp astryxc342km astryxng3xce astryxh6dtrn astryxjbqb8w astryxe9uy6x astryx9ynric astryxcr08ib astryx1kq96og astryx1tgivj0 astryx1ypdohk astryx1yc453h astryx1a2a7pz astryx1p25gnr"},1:{className:"astryx1lliihq astryxh8yej3 astryxtozwh astryx1ghz6dp astryxc342km astryxng3xce astryxh6dtrn astryx9ynric astryxcr08ib astryx1kq96og astryx1ypdohk astryx1yc453h astryx1a2a7pz astryx1p25gnr astryxgcxg3y astryxqwr325"}}[!!Q<<0],children:l.label},l.label)})}),s.jsx(Pe,{mode:"range",value:c??void 0,onChange:ve,min:se,max:ne,dateConstraints:re,numberOfMonths:ue})]}),{placement:"below",alignment:"start"}),v&&E.renderTooltip(f)]})}r.displayName="DateRangeInput";r.__docgenInfo={description:`A date range picker with a button trigger that opens a popover
containing a dual-month calendar and optional preset ranges.

@example
\`\`\`
<DateRangeInput
  label="Date range"
  value={range}
  onChange={setRange}
  presets={[
    { label: "Last 7 days", getRange: () => ({start: "...", end: "..."}) },
  ]}
/>
\`\`\``,methods:[],displayName:"DateRangeInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLButtonElement>",elements:[{name:"HTMLButtonElement"}]},description:"Ref forwarded to the trigger button"},label:{required:!0,tsType:{name:"string"},description:"Label text for the input (required for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed between the label and input."},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the input is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},disabledMessage:{required:!1,tsType:{name:"string"},description:`Explains why the input is disabled. When set together with
\`isDisabled\`, the input shows a tooltip with this text on hover and
keyboard focus, and the trigger stays focusable (via \`aria-disabled\`)
so the reason is discoverable by keyboard and assistive technology.
Activation stays blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<DateRangeInput
  label="Reporting period"
  value={range}
  onChange={setRange}
  isDisabled
  disabledMessage="You need the Editor role to change this"
/>
\`\`\``},value:{required:!0,tsType:{name:"union",raw:"DateRange | null",elements:[{name:"DateRange"},{name:"null"}]},description:"The selected date range, or null if no range is selected."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(value: DateRange | null) => void",signature:{arguments:[{type:{name:"union",raw:"DateRange | null",elements:[{name:"DateRange"},{name:"null"}]},name:"value"}],return:{name:"void"}}},description:`Callback fired when the date range changes.
Called with null when the range is cleared.`},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: DateRange | null) => void | Promise<void>",signature:{arguments:[{type:{name:"union",raw:"DateRange | null",elements:[{name:"DateRange"},{name:"null"}]},name:"value"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Async action on change. Fires after onChange."},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether the input is in a loading state.
@default false`,defaultValue:{value:"false",computed:!1}},min:{required:!1,tsType:{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:"Minimum selectable date in ISO format."},max:{required:!1,tsType:{name:"literal",value:"`${number}${number}${number}${number}-${number}${number}-${number}${number}`"},description:"Maximum selectable date in ISO format."},dateConstraints:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"signature",type:"function",raw:"(date: Date) => boolean",signature:{arguments:[{type:{name:"Date"},name:"date"}],return:{name:"boolean"}}}],raw:"ReadonlyArray<(date: Date) => boolean>"},description:`Custom date constraint functions.
A date is disabled if ANY function returns false.`},presets:{required:!1,tsType:{name:"ReadonlyArray",elements:[{name:"DateRangePreset"}],raw:"ReadonlyArray<DateRangePreset>"},description:"Preset date ranges shown as quick-select options beside the calendar."},hasClear:{required:!1,tsType:{name:"boolean"},description:`Whether to show a clear button when a range is selected.
@default true`,defaultValue:{value:"true",computed:!1}},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown when no range is selected.
@default "Select date range"`,defaultValue:{value:"'Select date range'",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:`The size of the trigger.
@default 'md'`},status:{required:!1,tsType:{name:"InputStatus"},description:"Status indicator for the input."},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."},numberOfMonths:{required:!1,tsType:{name:"union",raw:"1 | 2",elements:[{name:"literal",value:"1"},{name:"literal",value:"2"}]},description:`Number of months to display in the calendar.
@default 2`,defaultValue:{value:"2",computed:!1}}},composes:["Omit"]};function x(e){const a=new Date;return a.setDate(a.getDate()-e),a.toISOString().slice(0,10)}function y(){return new Date().toISOString().slice(0,10)}function Be(){const e=new Date;return e.setDate(1),e.toISOString().slice(0,10)}const F=[{label:"Last 1 day",getRange:()=>({start:x(1),end:y()})},{label:"Last 3 days",getRange:()=>({start:x(3),end:y()})},{label:"Last 7 days",getRange:()=>({start:x(7),end:y()})},{label:"Last 14 days",getRange:()=>({start:x(14),end:y()})},{label:"Last 30 days",getRange:()=>({start:x(30),end:y()})},{label:"This month",getRange:()=>({start:Be(),end:y()})}],Xe={title:"Core/DateRangeInput",component:r,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text"},isOptional:{control:"boolean",description:"Show optional indicator"},isRequired:{control:"boolean",description:"Mark as required"},isDisabled:{control:"boolean",description:"Disable the picker"},disabledMessage:{control:"text",description:"Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled DateRangeInput in Tooltip."},size:{control:"radio",options:["sm","md","lg"]},hasClear:{control:"boolean",description:"Show clear button"},numberOfMonths:{control:"radio",options:[1,2],description:"Calendar months"}}},S={render:e=>{const[a,t]=n.useState(null);return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Date range"}},R={render:e=>{const[a,t]=n.useState({start:"2026-03-10",end:"2026-03-20"});return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Report period"}},C={render:e=>{const[a,t]=n.useState(null);return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Date range",presets:F}},w={render:e=>{const[a,t]=n.useState({start:x(7),end:y()});return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Analytics period",presets:F}},V={render:e=>{const[a,t]=n.useState(null);return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Coverage period",description:"Select the start and end dates for the report"}},k={render:e=>{const[a,t]=n.useState(null);return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Booking dates",min:"2026-03-01",max:"2026-06-30",description:"Available: Mar 1 – Jun 30, 2026"}},I={render:e=>{const[a,t]=n.useState(null);return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Filter by date",isOptional:!0}},j={render:e=>{const[a,t]=n.useState(null);return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Coverage period",isRequired:!0}},q={render:e=>{const[a,t]=n.useState({start:"2026-03-10",end:"2026-03-20"});return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Locked range",isDisabled:!0}},z={render:e=>{const[a,t]=n.useState(null);return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Reporting period",isDisabled:!0,disabledMessage:"You need the Editor role to change this"}},T={render:()=>{const[e,a]=n.useState(null),[t,g]=n.useState(null),[p,u]=n.useState(null);return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"340px"},children:[s.jsx(r,{label:"Small (28px)",value:e,onChange:a,size:"sm"}),s.jsx(r,{label:"Medium (32px)",value:t,onChange:g,size:"md"}),s.jsx(r,{label:"Large (36px)",value:p,onChange:u,size:"lg"})]})}},O={render:e=>{const[a,t]=n.useState(null);return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Date range",numberOfMonths:1}},W={render:e=>{const[a,t]=n.useState(null);return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Date range",status:{type:"error",message:"Please select a date range"}}},M={render:e=>{const[a,t]=n.useState({start:"2026-03-01",end:"2026-06-30"});return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Date range",status:{type:"warning",message:"Range exceeds 90 days"}}},$={render:e=>{const[a,t]=n.useState({start:"2026-03-10",end:"2026-03-20"});return s.jsx(r,{...e,value:a,onChange:t})},args:{label:"Required range",hasClear:!1}},P={render:()=>{const[e,a]=n.useState(null),[t,g]=n.useState({start:"2026-03-10",end:"2026-03-20"}),[p,u]=n.useState(null),[f,c]=n.useState({start:"2026-03-10",end:"2026-03-20"}),[D,h]=n.useState(null);return s.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"340px"},children:[s.jsx(r,{label:"Default",value:e,onChange:a}),s.jsx(r,{label:"With value",value:t,onChange:g}),s.jsx(r,{label:"With presets",value:p,onChange:u,presets:F}),s.jsx(r,{label:"Disabled",isDisabled:!0,value:f,onChange:c}),s.jsx(r,{label:"With error",value:D,onChange:h,status:{type:"error",message:"Date range is required"}})]})}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range'
  }
}`,...S.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Report period'
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    presets: defaultPresets
  }
}`,...C.parameters?.docs?.source}}};w.parameters={...w.parameters,docs:{...w.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: daysAgo(7),
      end: today()
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Analytics period',
    presets: defaultPresets
  }
}`,...w.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Coverage period',
    description: 'Select the start and end dates for the report'
  }
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Booking dates',
    min: '2026-03-01' as ISODateString,
    max: '2026-06-30' as ISODateString,
    description: 'Available: Mar 1 – Jun 30, 2026'
  }
}`,...k.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Filter by date',
    isOptional: true
  }
}`,...I.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Coverage period',
    isRequired: true
  }
}`,...j.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Locked range',
    isDisabled: true
  }
}`,...q.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Reporting period',
    isDisabled: true,
    disabledMessage: 'You need the Editor role to change this'
  }
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [sm, setSm] = useState<DateRange | null>(null);
    const [md, setMd] = useState<DateRange | null>(null);
    const [lg, setLg] = useState<DateRange | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '340px'
    }}>
        <DateRangeInput label="Small (28px)" value={sm} onChange={setSm} size="sm" />
        <DateRangeInput label="Medium (32px)" value={md} onChange={setMd} size="md" />
        <DateRangeInput label="Large (36px)" value={lg} onChange={setLg} size="lg" />
      </div>;
  }
}`,...T.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    numberOfMonths: 1
  }
}`,...O.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>(null);
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    status: {
      type: 'error',
      message: 'Please select a date range'
    }
  }
}`,...W.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-01' as ISODateString,
      end: '2026-06-30' as ISODateString
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date range',
    status: {
      type: 'warning',
      message: 'Range exceeds 90 days'
    }
  }
}`,...M.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    return <DateRangeInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Required range',
    hasClear: false
  }
}`,...$.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState<DateRange | null>(null);
    const [v2, setV2] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    const [v3, setV3] = useState<DateRange | null>(null);
    const [v4, setV4] = useState<DateRange | null>({
      start: '2026-03-10' as ISODateString,
      end: '2026-03-20' as ISODateString
    });
    const [v5, setV5] = useState<DateRange | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '340px'
    }}>
        <DateRangeInput label="Default" value={v1} onChange={setV1} />
        <DateRangeInput label="With value" value={v2} onChange={setV2} />
        <DateRangeInput label="With presets" value={v3} onChange={setV3} presets={defaultPresets} />
        <DateRangeInput label="Disabled" isDisabled value={v4} onChange={setV4} />
        <DateRangeInput label="With error" value={v5} onChange={setV5} status={{
        type: 'error',
        message: 'Date range is required'
      }} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}};const ea=["Default","WithValue","WithPresets","WithPresetsAndValue","WithDescription","WithMinMax","Optional","Required","Disabled","DisabledWithMessage","SizeVariants","SingleMonth","WithErrorStatus","WithWarningStatus","NoClear","AllVariations"];export{P as AllVariations,S as Default,q as Disabled,z as DisabledWithMessage,$ as NoClear,I as Optional,j as Required,O as SingleMonth,T as SizeVariants,V as WithDescription,W as WithErrorStatus,k as WithMinMax,C as WithPresets,w as WithPresetsAndValue,R as WithValue,M as WithWarningStatus,ea as __namedExportsOrder,Xe as default};
