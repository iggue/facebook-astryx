import{ag as s,a0 as n}from"./iframe-C8fQ-xtn.js";import{D as r}from"./DateInput-CXic6nO5.js";import{L as R,b as T}from"./LayoutContent-BCOy7aII.js";import"./preload-helper-Ct5FWWRu.js";import"./Field-ZmtLWXQ0.js";import"./FieldStatus-Bsg85LbU.js";import"./Tooltip-UPeljs0G.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./InputGroupContext-DpLKxCB8.js";import"./Calendar-DJZuSedx.js";import"./plainDate-C-ANv9VG.js";import"./usePopover-BJ9khqJg.js";import"./useFocusTrap-JlWaSuDz.js";import"./dateParser-XTIqkafj.js";import"./stack.stylex-BlarxY2N.js";import"./stackItem.stylex-CgqrJM4N.js";import"./padding.stylex-Dl2_Pyt1.js";const ee={title:"Core/DateInput",component:r,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text displayed between the label and input"},isOptional:{control:"boolean",description:"Whether the field is optional (mutually exclusive with isRequired)"},isRequired:{control:"boolean",description:"Whether the field is required (mutually exclusive with isOptional)"},isDisabled:{control:"boolean",description:"Whether the input is disabled"},disabledMessage:{control:"text",description:"Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the field focusable via aria-disabled (activation stays blocked). Use this instead of wrapping a disabled DateInput in Tooltip."},size:{control:"radio",options:["sm","md","lg"],description:"Size of the input"},numberOfMonths:{control:"radio",options:[1,2],description:"Number of months to display in calendar"}}},l={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Date",placeholder:"Select a date"}},o={render:e=>{const[a,t]=s.useState("2026-01-25");return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Event date"}},u={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Birthday",description:"Enter your date of birth",placeholder:"Select your birthday"}},i={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Date",isLabelHidden:!0,placeholder:"Select a date"}},d={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Preferred date",isOptional:!0,placeholder:"Select a date (optional)"}},c={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Start date",isRequired:!0,placeholder:"Select a start date"}},p={render:e=>{const[a,t]=s.useState("2026-01-25");return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Locked date",isDisabled:!0}},g={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Event date",isDisabled:!0,disabledMessage:"You need the Editor role to change this"}},S={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Date",size:"sm",placeholder:"Select a date"}},h={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Booking date",min:"2026-01-15",max:"2026-02-15",description:"Available dates: Jan 15 - Feb 15, 2026",placeholder:"Select a booking date"}},v={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(R,{height:"auto",content:n.jsx(T,{children:n.jsx(r,{...e,value:a,onChange:t})})})},args:{label:"End date",max:new Date().toISOString().slice(0,10),description:"Max is today; open the calendar to verify the label does not turn grey when nav buttons are disabled",placeholder:"Select an end date"}},m={render:e=>{const[a,t]=s.useState(void 0);return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Travel date",numberOfMonths:2,placeholder:"Select a travel date"}},b={render:e=>{const[a,t]=s.useState("2026-01-25");return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Event date",status:{type:"error",message:"This date is not available"}}},D={render:e=>{const[a,t]=s.useState("2026-01-01");return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Meeting date",status:{type:"warning",message:"This is a holiday - are you sure?"}}},V={render:e=>{const[a,t]=s.useState("2026-02-10");return n.jsx(r,{...e,value:a,onChange:t})},args:{label:"Appointment date",status:{type:"success",message:"Date is available"}}},f={render:()=>{const[e,a]=s.useState(void 0),[t,C]=s.useState("2026-01-25"),[O,y]=s.useState(void 0),[W,j]=s.useState(void 0),[E,M]=s.useState(void 0),[L,w]=s.useState("2026-03-10"),[q,k]=s.useState("2026-01-25");return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"300px"},children:[n.jsx(r,{label:"Default",value:e,onChange:a,placeholder:"Select a date"}),n.jsx(r,{label:"With value",value:t,onChange:C}),n.jsx(r,{label:"With description",description:"Pick your preferred date",value:O,onChange:y,placeholder:"Select a date"}),n.jsx(r,{label:"Optional field",isOptional:!0,value:W,onChange:j,placeholder:"Select a date (optional)"}),n.jsx(r,{label:"Required field",isRequired:!0,value:E,onChange:M,placeholder:"Select a date"}),n.jsx(r,{label:"Disabled",isDisabled:!0,value:L,onChange:w}),n.jsx(r,{label:"With error",value:q,onChange:k,status:{type:"error",message:"Invalid date selection"}})]})}},I={render:e=>{const[a,t]=s.useState("2026-04-06");return n.jsx(r,{...e,value:a,onChange:t,hasClear:!0})},args:{label:"Event date",placeholder:"Select a date"}},x={render:e=>{const[a,t]=s.useState("2026-04-06");return n.jsx(r,{...e,value:a,onChange:t,hasClear:!0})},args:{label:"Deadline",status:{type:"error",message:"Date is in the past"}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date',
    placeholder: 'Select a date'
  }
}`,...l.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>('2026-01-25' as ISODateString);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Event date'
  }
}`,...o.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Birthday',
    description: 'Enter your date of birth',
    placeholder: 'Select your birthday'
  }
}`,...u.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date',
    isLabelHidden: true,
    placeholder: 'Select a date'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Preferred date',
    isOptional: true,
    placeholder: 'Select a date (optional)'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Start date',
    isRequired: true,
    placeholder: 'Select a start date'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>('2026-01-25' as ISODateString);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Locked date',
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Event date',
    isDisabled: true,
    disabledMessage: 'You need the Editor role to change this'
  }
}`,...g.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Date',
    size: 'sm',
    placeholder: 'Select a date'
  }
}`,...S.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Booking date',
    min: '2026-01-15' as ISODateString,
    max: '2026-02-15' as ISODateString,
    description: 'Available dates: Jan 15 - Feb 15, 2026',
    placeholder: 'Select a booking date'
  }
}`,...h.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <Layout height="auto" content={<LayoutContent>
            <DateInput {...args} value={value} onChange={setValue} />
          </LayoutContent>} />;
  },
  args: {
    label: 'End date',
    max: new Date().toISOString().slice(0, 10) as ISODateString,
    description: 'Max is today; open the calendar to verify the label does not turn grey when nav buttons are disabled',
    placeholder: 'Select an end date'
  }
}`,...v.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>(undefined);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Travel date',
    numberOfMonths: 2,
    placeholder: 'Select a travel date'
  }
}`,...m.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>('2026-01-25' as ISODateString);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Event date',
    status: {
      type: 'error',
      message: 'This date is not available'
    }
  }
}`,...b.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>('2026-01-01' as ISODateString);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Meeting date',
    status: {
      type: 'warning',
      message: 'This is a holiday - are you sure?'
    }
  }
}`,...D.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>('2026-02-10' as ISODateString);
    return <DateInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Appointment date',
    status: {
      type: 'success',
      message: 'Date is available'
    }
  }
}`,...V.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<ISODateString | undefined>(undefined);
    const [value2, setValue2] = useState<ISODateString | undefined>('2026-01-25' as ISODateString);
    const [value3, setValue3] = useState<ISODateString | undefined>(undefined);
    const [value4, setValue4] = useState<ISODateString | undefined>(undefined);
    const [value5, setValue5] = useState<ISODateString | undefined>(undefined);
    const [value6, setValue6] = useState<ISODateString | undefined>('2026-03-10' as ISODateString);
    const [value7, setValue7] = useState<ISODateString | undefined>('2026-01-25' as ISODateString);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '300px'
    }}>
        <DateInput label="Default" value={value1} onChange={setValue1} placeholder="Select a date" />
        <DateInput label="With value" value={value2} onChange={setValue2} />
        <DateInput label="With description" description="Pick your preferred date" value={value3} onChange={setValue3} placeholder="Select a date" />
        <DateInput label="Optional field" isOptional value={value4} onChange={setValue4} placeholder="Select a date (optional)" />
        <DateInput label="Required field" isRequired value={value5} onChange={setValue5} placeholder="Select a date" />
        <DateInput label="Disabled" isDisabled value={value6} onChange={setValue6} />
        <DateInput label="With error" value={value7} onChange={setValue7} status={{
        type: 'error',
        message: 'Invalid date selection'
      }} />
      </div>;
  }
}`,...f.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>('2026-04-06');
    return <DateInput {...args} value={value} onChange={setValue} hasClear />;
  },
  args: {
    label: 'Event date',
    placeholder: 'Select a date'
  }
}`,...I.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<ISODateString | undefined>('2026-04-06');
    return <DateInput {...args} value={value} onChange={setValue} hasClear />;
  },
  args: {
    label: 'Deadline',
    status: {
      type: 'error',
      message: 'Date is in the past'
    }
  }
}`,...x.parameters?.docs?.source}}};const ae=["Default","WithValue","WithDescription","WithHiddenLabel","Optional","Required","Disabled","DisabledWithMessage","SmallSize","WithMinMax","WithMaxDateInLayout","TwoMonthCalendar","WithErrorStatus","WithWarningStatus","WithSuccessStatus","AllVariations","Clearable","ClearableWithStatus"];export{f as AllVariations,I as Clearable,x as ClearableWithStatus,l as Default,p as Disabled,g as DisabledWithMessage,d as Optional,c as Required,S as SmallSize,m as TwoMonthCalendar,u as WithDescription,b as WithErrorStatus,i as WithHiddenLabel,v as WithMaxDateInLayout,h as WithMinMax,V as WithSuccessStatus,o as WithValue,D as WithWarningStatus,ae as __namedExportsOrder,ee as default};
