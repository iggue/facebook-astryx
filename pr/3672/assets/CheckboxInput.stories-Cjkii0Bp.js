import{ag as o,a0 as n}from"./iframe-C8fQ-xtn.js";import{C as l}from"./CheckboxInput-BqeMHVTP.js";import{F as D}from"./BellIcon-9qienRMk.js";import{F as w}from"./EnvelopeIcon-C2zv7J-5.js";import{F as z}from"./ShieldCheckIcon-B1Wmqt_k.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldStatus-Bsg85LbU.js";import"./Tooltip-UPeljs0G.js";const U={title:"Core/CheckboxInput",component:l,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},description:{control:"text",description:"Description text displayed below the label"},value:{control:"select",options:[!0,!1,"indeterminate"],description:"Whether the checkbox is checked, unchecked, or indeterminate"},isDisabled:{control:"boolean",description:"Whether the checkbox is disabled"},disabledMessage:{control:"text",description:"Explains why the checkbox is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the checkbox focusable via aria-disabled (toggling stays blocked). Use this instead of wrapping a disabled CheckboxInput in Tooltip."},isRequired:{control:"boolean",description:"Whether the checkbox is required"},size:{control:"select",options:["sm","md"],description:"Size of the checkbox"}}},i={render:e=>{const[a,s]=o.useState(e.value??!1),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Accept terms and conditions"}},d={render:e=>{const[a,s]=o.useState(e.value??!0),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"I agree to the terms",value:!0}},h={render:e=>{const[a,s]=o.useState(e.value??!1),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Subscribe to newsletter",description:"Receive weekly updates about new features and announcements."}},g={render:e=>{const[a,s]=o.useState(e.value??!1),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Select row",isLabelHidden:!0}},m={render:e=>{const[a,s]=o.useState(e.value??"indeterminate"),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Select all items",description:"Some items are selected",value:"indeterminate"}},p={render:e=>{const[a,s]=o.useState(e.value??!1),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Premium feature",description:"Upgrade to enable this option",isDisabled:!0}},v={render:e=>{const[a,s]=o.useState(e.value??!0),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Feature enabled",value:!0,isDisabled:!0}},b={render:()=>{const[e,a]=o.useState(!1),[s,u]=o.useState(!0),[c,t]=o.useState("indeterminate"),[r,A]=o.useState(!1),[j,W]=o.useState(!0);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[n.jsx(l,{label:"Unchecked",value:e,onChange:a}),n.jsx(l,{label:"Checked",value:s,onChange:u}),n.jsx(l,{label:"Indeterminate",description:"Some items are selected",value:c,onChange:t}),n.jsx(l,{label:"Disabled unchecked",value:r,onChange:A,isDisabled:!0}),n.jsx(l,{label:"Disabled checked",value:j,onChange:W,isDisabled:!0})]})}},C={render:e=>{const[a,s]=o.useState(e.value??!1),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Compact checkbox",size:"sm"}},x={render:()=>{const[e,a]=o.useState(!1),[s,u]=o.useState(!1),[c,t]=o.useState(!0),[r,A]=o.useState(!0);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[n.jsx(l,{label:"Medium size (default)",value:e,onChange:a,size:"md"}),n.jsx(l,{label:"Small size",value:s,onChange:u,size:"sm"}),n.jsx(l,{label:"Medium size checked",value:c,onChange:t,size:"md"}),n.jsx(l,{label:"Small size checked",value:r,onChange:A,size:"sm"})]})}},S={render:e=>{const[a,s]=o.useState(e.value??!1),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Enable notifications",description:"Receive alerts when important events occur",labelIcon:D}},V={render:()=>{const[e,a]=o.useState(!1),[s,u]=o.useState(!0),[c,t]=o.useState(!1);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[n.jsx(l,{label:"Email notifications",description:"Receive updates via email",value:e,onChange:a,labelIcon:w}),n.jsx(l,{label:"Push notifications",description:"Get instant alerts on your device",value:s,onChange:u,labelIcon:D}),n.jsx(l,{label:"Two-factor authentication",description:"Add an extra layer of security",value:c,onChange:t,labelIcon:z,isDisabled:!0})]})}},k={render:e=>{const[a,s]=o.useState(e.value??!1),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Accept terms and conditions",status:{type:"error",message:"You must accept the terms to continue"}}},f={render:e=>{const[a,s]=o.useState(e.value??!0),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Share usage data",description:"Help us improve by sharing anonymous usage statistics",status:{type:"warning",message:"This data may be shared with partners"}}},_={render:e=>{const[a,s]=o.useState(e.value??!0),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Email verified",status:{type:"success",message:"Your email has been verified"}}},y={render:()=>{const[e,a]=o.useState(!1),[s,u]=o.useState(!0),[c,t]=o.useState(!0);return n.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[n.jsx(l,{label:"Accept terms and conditions",value:e,onChange:a,status:{type:"error",message:"You must accept the terms to continue"}}),n.jsx(l,{label:"Share usage data",description:"Help us improve by sharing anonymous usage statistics",value:s,onChange:u,status:{type:"warning",message:"This data may be shared with partners"}}),n.jsx(l,{label:"Email verified",value:c,onChange:t,status:{type:"success",message:"Your email has been verified"}})]})}},I={render:e=>{const[a,s]=o.useState(e.value??!1),{value:u,onChange:c,...t}=e;return n.jsx(l,{...t,value:a,onChange:r=>s(r)})},args:{label:"Accept terms",isDisabled:!0,disabledMessage:"Terms are managed by your administrator"}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? false);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Accept terms and conditions'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? true);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'I agree to the terms',
    value: true
  }
}`,...d.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? false);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Subscribe to newsletter',
    description: 'Receive weekly updates about new features and announcements.'
  }
}`,...h.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? false);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Select row',
    isLabelHidden: true
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? 'indeterminate');
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Select all items',
    description: 'Some items are selected',
    value: 'indeterminate'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? false);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Premium feature',
    description: 'Upgrade to enable this option',
    isDisabled: true
  }
}`,...p.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? true);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Feature enabled',
    value: true,
    isDisabled: true
  }
}`,...v.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<boolean | 'indeterminate'>(false);
    const [value2, setValue2] = useState<boolean | 'indeterminate'>(true);
    const [value3, setValue3] = useState<boolean | 'indeterminate'>('indeterminate');
    const [value4, setValue4] = useState<boolean | 'indeterminate'>(false);
    const [value5, setValue5] = useState<boolean | 'indeterminate'>(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <CheckboxInput label="Unchecked" value={value1} onChange={setValue1} />
        <CheckboxInput label="Checked" value={value2} onChange={setValue2} />
        <CheckboxInput label="Indeterminate" description="Some items are selected" value={value3} onChange={setValue3} />
        <CheckboxInput label="Disabled unchecked" value={value4} onChange={setValue4} isDisabled />
        <CheckboxInput label="Disabled checked" value={value5} onChange={setValue5} isDisabled />
      </div>;
  }
}`,...b.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? false);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Compact checkbox',
    size: 'sm'
  }
}`,...C.parameters?.docs?.source}}};x.parameters={...x.parameters,docs:{...x.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<boolean | 'indeterminate'>(false);
    const [value2, setValue2] = useState<boolean | 'indeterminate'>(false);
    const [value3, setValue3] = useState<boolean | 'indeterminate'>(true);
    const [value4, setValue4] = useState<boolean | 'indeterminate'>(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <CheckboxInput label="Medium size (default)" value={value1} onChange={setValue1} size="md" />
        <CheckboxInput label="Small size" value={value2} onChange={setValue2} size="sm" />
        <CheckboxInput label="Medium size checked" value={value3} onChange={setValue3} size="md" />
        <CheckboxInput label="Small size checked" value={value4} onChange={setValue4} size="sm" />
      </div>;
  }
}`,...x.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? false);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Enable notifications',
    description: 'Receive alerts when important events occur',
    labelIcon: BellIcon
  }
}`,...S.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<boolean | 'indeterminate'>(false);
    const [value2, setValue2] = useState<boolean | 'indeterminate'>(true);
    const [value3, setValue3] = useState<boolean | 'indeterminate'>(false);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <CheckboxInput label="Email notifications" description="Receive updates via email" value={value1} onChange={setValue1} labelIcon={EnvelopeIcon} />
        <CheckboxInput label="Push notifications" description="Get instant alerts on your device" value={value2} onChange={setValue2} labelIcon={BellIcon} />
        <CheckboxInput label="Two-factor authentication" description="Add an extra layer of security" value={value3} onChange={setValue3} labelIcon={ShieldCheckIcon} isDisabled />
      </div>;
  }
}`,...V.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? false);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Accept terms and conditions',
    status: {
      type: 'error',
      message: 'You must accept the terms to continue'
    }
  }
}`,...k.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? true);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Share usage data',
    description: 'Help us improve by sharing anonymous usage statistics',
    status: {
      type: 'warning',
      message: 'This data may be shared with partners'
    }
  }
}`,...f.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? true);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Email verified',
    status: {
      type: 'success',
      message: 'Your email has been verified'
    }
  }
}`,..._.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState<boolean | 'indeterminate'>(false);
    const [value2, setValue2] = useState<boolean | 'indeterminate'>(true);
    const [value3, setValue3] = useState<boolean | 'indeterminate'>(true);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <CheckboxInput label="Accept terms and conditions" value={value1} onChange={setValue1} status={{
        type: 'error',
        message: 'You must accept the terms to continue'
      }} />
        <CheckboxInput label="Share usage data" description="Help us improve by sharing anonymous usage statistics" value={value2} onChange={setValue2} status={{
        type: 'warning',
        message: 'This data may be shared with partners'
      }} />
        <CheckboxInput label="Email verified" value={value3} onChange={setValue3} status={{
        type: 'success',
        message: 'Your email has been verified'
      }} />
      </div>;
  }
}`,...y.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<boolean | 'indeterminate'>(args.value ?? false);
    const {
      value: _,
      onChange: __,
      ...restArgs
    } = args;
    return <CheckboxInput {...restArgs} value={value} onChange={checked => setValue(checked)} />;
  },
  args: {
    label: 'Accept terms',
    isDisabled: true,
    disabledMessage: 'Terms are managed by your administrator'
  }
}`,...I.parameters?.docs?.source}}};const P=["Default","Checked","WithDescription","WithHiddenLabel","Indeterminate","Disabled","DisabledChecked","AllVariations","SmallSize","SizeComparison","WithStartIcon","StartIconVariations","WithErrorStatus","WithWarningStatus","WithSuccessStatus","StatusVariations","DisabledWithMessage"];export{b as AllVariations,d as Checked,i as Default,p as Disabled,v as DisabledChecked,I as DisabledWithMessage,m as Indeterminate,x as SizeComparison,C as SmallSize,V as StartIconVariations,y as StatusVariations,h as WithDescription,k as WithErrorStatus,g as WithHiddenLabel,S as WithStartIcon,_ as WithSuccessStatus,f as WithWarningStatus,P as __namedExportsOrder,U as default};
