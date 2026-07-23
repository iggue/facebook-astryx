import{aL as De,ag as t,aN as Ie,a0 as a,ai as Me,a6 as Ee,e as We,I as qe,a5 as Le,ae as ke,ax as Ne,V as ze}from"./iframe-CouMrHD9.js";import{F as Re}from"./Field-BYvVLN_n.js";import{a as He,b as Oe,i as Fe,c as ue}from"./inputStyles.stylex-Bpqcd25J.js";import{u as Pe}from"./useInputContainer-BO6E45by.js";import{T as Ge}from"./TextInput-aRlVVZ4J.js";import{F as ee}from"./DocumentTextIcon-CsSNxlcg.js";import{a as Be,F as $e}from"./PencilSquareIcon-C9cwKmO7.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldStatus-BS_HeSvI.js";import"./Tooltip-B-PiHtaw.js";import"./InputGroupContext-Bxpp3ZEG.js";const Ue=.8,_e={wrapper:{kY2c9j:"astryx1vjfegm",kGNEyG:"astryx1cy8zhl",k8WAf4:"astryxu0wf1k",kLKAdn:null,kGO01o:null,$$css:!0}},Ye={sm:{$$css:!0},md:{$$css:!0},lg:{k8WAf4:"astryxce4md1",kLKAdn:null,kGO01o:null,$$css:!0}};function n({label:e,isLabelHidden:s=!1,description:r,isOptional:o=!1,isRequired:i=!1,onChange:d,changeAction:h,isLoading:g=!1,value:v,placeholder:T,rows:S=3,isDisabled:c=!1,disabledMessage:p,status:l,labelTooltip:y,startIcon:b,hasSpellCheck:w=!0,onPaste:C,maxLength:u,hasAutoFocus:ae=!1,size:de,htmlName:ce,onFocus:pe,onBlur:me,width:he,xstyle:ge,className:xe,style:ve,ref:ye,...be}){const te=De(de,"md"),se=t.useId(),re=t.useId(),ne=t.useId(),le=t.useId(),oe=t.useRef(null),ie=t.useRef(null),[,fe]=t.useTransition(),[m,Te]=t.useOptimistic(v),J=g||m!==v,f=c&&!!p,Q=Ie({placement:"above",focusTrigger:"always",isEnabled:f}),Se={warning:"warning",error:"error",success:"success"},we={warning:"warning",error:"error",success:"success"},Ce=[r?re:null,l?.message?ne:null,u!=null?le:null,f?Q.describedBy:null].filter(Boolean).join(" ")||void 0,Ve=x=>{if(c)return;const Z=x.target.value;d?.(Z,x),h&&!x.defaultPrevented&&fe(async()=>{Te(Z),await h(Z,x)})},X=c||J,{onClick:Ae,onMouseUp:je}=Pe({containerRef:ie,inputRef:oe,disabled:X});return a.jsxs(Re,{label:e,isLabelHidden:s,description:r,inputID:se,descriptionID:r?re:void 0,isOptional:o,isRequired:i,isDisabled:c,status:l?{type:l.type,message:l.message,messageID:l.message?ne:void 0}:void 0,labelTooltip:y,width:he,children:[a.jsxs("div",{ref:x=>{ie.current=x,Q.ref(x)},onClick:Ae,onMouseUp:je,...Le(Ne("textarea",{size:te,status:l?.type??null}),ke(ue.base,_e.wrapper,Ye[te],X&&ue.disabled,l&&Fe[l.type],l&&Oe[l.type],l&&He[l.type],ge),xe,ve),children:[b&&Me(b,{size:"sm",color:"secondary"}),a.jsx("textarea",{...be,ref:Ee(ye,oe),id:se,name:ce,value:m,onChange:Ve,onPaste:C,onFocus:pe,onBlur:me,placeholder:T,rows:S,disabled:c&&!f,"aria-disabled":f?"true":void 0,readOnly:f||void 0,spellCheck:w,autoFocus:ae,"data-autofocus":ae||void 0,"aria-describedby":Ce,"aria-required":i&&!o?"true":void 0,"aria-invalid":l?.type==="error"||u!=null&&m.length>u?"true":void 0,"aria-busy":J||void 0,...{0:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx288g5"},2:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx288g5 astryx1h6gzvc"},1:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx288g5 astryx1we12cn"},3:{className:"astryx1lliihq astryx98rzlu astryxeuugli astryxc342km astryxng3xce astryx1717udv astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxjbqb8w astryx1a2a7pz astryxeyghm5 astryx288g5 astryx1h6gzvc astryx1we12cn"}}[!!X<<1|!!l<<0]}),J&&a.jsx(We,{size:"sm"}),l&&a.jsx("span",{className:"astryx10l6tqk astryxctzyg astryx72tfeb astryx47corl astryx78zum5",children:a.jsx(qe,{icon:Se[l.type],size:"md",color:we[l.type]})})]}),u!=null&&a.jsxs("div",{id:le,...{0:{className:"astryx78zum5 astryx13a6bvl astryxcsaf9d astryx9ynric astryx141an7d astryxv1l7n4"},1:{className:"astryx78zum5 astryx13a6bvl astryxcsaf9d astryx9ynric astryx141an7d astryxjt36v0"}}[(m.length>u)<<0],children:[m.length,"/",u,a.jsx(ze,{"aria-live":"polite",children:m.length>=u*Ue?m.length>u?`${m.length-u} characters over limit`:`${u-m.length} characters remaining`:""})]}),f&&Q.renderTooltip(p)]})}n.displayName="TextArea";n.__docgenInfo={description:'A multi-line text input component for collecting longer user input.\n\n@example\n```\n<TextArea label="Description" value={description} onChange={setDescription} />\n<TextArea label="Notes" rows={5} value={notes} onChange={setNotes} />\n```',methods:[],displayName:"TextArea",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLTextAreaElement>",elements:[{name:"HTMLTextAreaElement"}]},description:"Ref forwarded to the root element"},label:{required:!0,tsType:{name:"string"},description:"Label text for the textarea (always rendered for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed between the label and textarea."},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the field is required. Mutually exclusive with isOptional.
@default false`,defaultValue:{value:"false",computed:!1}},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string, e: ChangeEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:"Callback fired when the textarea value changes."},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:`(
  value: string,
  e: ChangeEvent<HTMLTextAreaElement>,
) => void | Promise<void>`,signature:{arguments:[{type:{name:"string"},name:"value"},{type:{name:"ChangeEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ChangeEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:"Async action on change. Fires after onChange if not prevented."},isLoading:{required:!1,tsType:{name:"boolean"},description:"Whether the input is in a loading state. @default false",defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"string"},description:"The current value of the textarea."},placeholder:{required:!1,tsType:{name:"string"},description:"Placeholder text shown when the textarea is empty."},rows:{required:!1,tsType:{name:"number"},description:`The number of visible text rows.
@default 3`,defaultValue:{value:"3",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the textarea is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},disabledMessage:{required:!1,tsType:{name:"string"},description:`Explains why the textarea is disabled. When set together with
\`isDisabled\`, the textarea shows a tooltip with this text on hover and
keyboard focus, and stays focusable (via \`aria-disabled\`) so the reason is
discoverable by keyboard and assistive technology. The field cannot be
edited (it becomes read-only) while disabled.

Use this instead of wrapping a disabled textarea in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<TextArea
  label="Notes"
  value={notes}
  isDisabled
  disabledMessage="Notes are locked after submission"
/>
\`\`\``},status:{required:!1,tsType:{name:"TextAreaStatus"},description:`Status indicator for the textarea.
When set, displays a colored border and status icon.
If message is provided, displays a floating message box below the textarea.`},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."},startIcon:{required:!1,tsType:{name:"union",raw:"ReactNode | IconType",elements:[{name:"ReactNode"},{name:"ComponentType",elements:[{name:"SVGProps",elements:[{name:"SVGSVGElement"}],raw:"SVGProps<SVGSVGElement>"}],raw:"ComponentType<SVGProps<SVGSVGElement>>"}]},description:"Icon to display at the start of the textarea.\nAccepts a ReactNode (e.g. `<Icon icon={SearchIcon} />`) or an SVG icon component directly."},hasSpellCheck:{required:!1,tsType:{name:"boolean"},description:`Whether to enable browser spell checking.
@default true`,defaultValue:{value:"true",computed:!1}},onPaste:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ClipboardEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"ClipboardEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"ClipboardEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:"Callback fired when content is pasted into the textarea."},maxLength:{required:!1,tsType:{name:"number"},description:`Maximum number of characters allowed.
When set, displays a character counter below the textarea.
Does not enforce the limit natively — the counter shows error styling
when exceeded, and the consumer can validate via onChange.`},hasAutoFocus:{required:!1,tsType:{name:"boolean"},description:`Whether to automatically focus the textarea on mount.
@default false`,defaultValue:{value:"false",computed:!1}},size:{required:!1,tsType:{name:"union",raw:"'sm' | 'md' | 'lg'",elements:[{name:"literal",value:"'sm'"},{name:"literal",value:"'md'"},{name:"literal",value:"'lg'"}]},description:"The size of the textarea, affecting internal padding.\nHeight is controlled by `rows`, not size.\n@default 'md'"},htmlName:{required:!1,tsType:{name:"string"},description:`The HTML name attribute for the textarea.
Useful for form submissions.`},onFocus:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:"Callback fired when the textarea receives focus."},onBlur:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FocusEvent<HTMLTextAreaElement>) => void",signature:{arguments:[{type:{name:"FocusEvent",elements:[{name:"HTMLTextAreaElement"}],raw:"FocusEvent<HTMLTextAreaElement>"},name:"e"}],return:{name:"void"}}},description:"Callback fired when the textarea loses focus."}},composes:["Omit"]};const la={title:"Core/TextArea",component:n,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text displayed between the label and textarea"},value:{control:"text",description:"Current textarea value (required)"},isOptional:{control:"boolean",description:"Whether the field is optional (mutually exclusive with isRequired)"},isRequired:{control:"boolean",description:"Whether the field is required (mutually exclusive with isOptional)"},rows:{control:"number",description:"Number of visible text rows (default: 3)"},isDisabled:{control:"boolean",description:"Whether the textarea is disabled"},disabledMessage:{control:"text",description:"Explains why the textarea is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the textarea focusable via aria-disabled (the field becomes read-only). Use this instead of wrapping a disabled TextArea in Tooltip."},status:{control:"object",description:"Status indicator with type (warning/error/success) and optional message"},labelTooltip:{control:"text",description:"Tooltip text to display in an info icon at the end of the label"},hasSpellCheck:{control:"boolean",description:"Whether to enable browser spell checking (default: true)"},maxLength:{control:"number",description:"Maximum number of characters allowed. Displays a counter when set."},size:{control:"radio",options:["sm","md","lg"],description:"Textarea size (affects padding, not height)"}}},V={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Description",placeholder:"Enter a description..."}},A={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Bio",description:"Tell us about yourself in a few sentences.",placeholder:"Write your bio here..."}},j={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Comments",isLabelHidden:!0,placeholder:"Add a comment..."}},D={render:e=>{const[s,r]=t.useState(e.value??"This is a pre-filled textarea with some content that demonstrates how the component handles existing text.");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Notes",value:"This is a pre-filled textarea with some content that demonstrates how the component handles existing text."}},I={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Message",rows:6,placeholder:"Write a longer message..."}},M={render:()=>{const[e,s]=t.useState(""),[r,o]=t.useState(""),[i,d]=t.useState("Pre-filled content in the textarea."),[h,g]=t.useState(""),[v,T]=t.useState(""),[S,c]=t.useState(""),[p,l]=t.useState(""),[y,b]=t.useState(""),[w,C]=t.useState("This field is disabled");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[a.jsx(n,{label:"Visible label",value:e,onChange:s,placeholder:"Enter text..."}),a.jsx(n,{label:"With description",description:"Helpful description text",value:h,onChange:g,placeholder:"Enter text..."}),a.jsx(n,{label:"Hidden label",isLabelHidden:!0,value:r,onChange:o,placeholder:"Hidden label textarea"}),a.jsx(n,{label:"With value",value:i,onChange:d}),a.jsx(n,{label:"Optional field",isOptional:!0,value:v,onChange:T,placeholder:"Optional..."}),a.jsx(n,{label:"Required field",isRequired:!0,value:S,onChange:c,placeholder:"Required..."}),a.jsx(n,{label:"Description with optional",description:"Additional notes",isOptional:!0,value:p,onChange:l,placeholder:"Notes..."}),a.jsx(n,{label:"Custom rows (6)",rows:6,value:y,onChange:b,placeholder:"Larger textarea..."}),a.jsx(n,{label:"Disabled field",isDisabled:!0,value:w,onChange:C})]})}},E={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Additional Notes",isOptional:!0,placeholder:"Any additional notes..."}},W={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Feedback",isRequired:!0,placeholder:"Please provide your feedback..."}},q={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Comments",description:"Share any additional thoughts or comments",isOptional:!0,placeholder:"Your comments here..."}},L={render:e=>{const[s,r]=t.useState(e.value??"This textarea is disabled and cannot be edited.");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Disabled Field",isDisabled:!0,value:"This textarea is disabled and cannot be edited."}},k={render:e=>{const[s,r]=t.useState(e.value??"These notes are locked after submission.");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Notes",isDisabled:!0,disabledMessage:"Notes are locked after submission",value:"These notes are locked after submission."}},N={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Notes",placeholder:"Enter your notes...",startIcon:ee}},z={render:()=>{const[e,s]=t.useState(""),[r,o]=t.useState(""),[i,d]=t.useState("");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[a.jsx(n,{label:"Notes",value:e,onChange:s,placeholder:"Enter your notes...",startIcon:ee}),a.jsx(n,{label:"Message",value:r,onChange:o,placeholder:"Type your message...",startIcon:Be}),a.jsx(n,{label:"Draft",value:i,onChange:d,placeholder:"Write your draft...",startIcon:$e})]})}},R={render:e=>{const[s,r]=t.useState(e.value??"Too short");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Description",placeholder:"Enter a description...",status:{type:"error",message:"Description must be at least 50 characters"}}},H={render:e=>{const[s,r]=t.useState(e.value??"This content may contain issues");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Content",placeholder:"Enter content...",status:{type:"warning",message:"Content may need review before publishing"}}},O={render:e=>{const[s,r]=t.useState(e.value??"This is a valid description that meets all requirements.");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Description",placeholder:"Enter a description...",status:{type:"success",message:"Description looks good!"}}},F={render:e=>{const[s,r]=t.useState(e.value??"Invalid content");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Field",placeholder:"Enter value",status:{type:"error"}}},P={render:()=>{const[e,s]=t.useState("Too short"),[r,o]=t.useState("This may need review"),[i,d]=t.useState("This description meets all the requirements perfectly."),[h,g]=t.useState("Invalid");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[a.jsx(n,{label:"Error with message",value:e,onChange:s,status:{type:"error",message:"Must be at least 50 characters"}}),a.jsx(n,{label:"Warning with message",value:r,onChange:o,status:{type:"warning",message:"Content may need review"}}),a.jsx(n,{label:"Success with message",value:i,onChange:d,status:{type:"success",message:"Description is valid"}}),a.jsx(n,{label:"Error without message",value:h,onChange:g,status:{type:"error"}})]})}},G={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"API Documentation",placeholder:"Describe your API endpoint...",labelTooltip:"Provide a detailed description of what this API endpoint does, including expected inputs and outputs."}},B={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Additional Notes",placeholder:"Any additional information...",labelTooltip:"Include any extra details that might be helpful for reviewers.",isOptional:!0}},$={render:()=>{const[e,s]=t.useState("");return a.jsx("div",{style:{maxWidth:"400px"},children:a.jsx(n,{label:"Detailed Description",description:"Provide a comprehensive description of your project",value:e,onChange:s,placeholder:"Enter description...",startIcon:ee,labelTooltip:"This description will be visible to all team members",isRequired:!0,status:e.length>0&&e.length<20?{type:"warning",message:"Consider adding more detail"}:e.length>=20?{type:"success",message:"Description looks good!"}:void 0})})}},U={render:()=>{const[e,s]=t.useState(""),[r,o]=t.useState(""),[i,d]=t.useState(""),[h,g]=t.useState(""),[v,T]=t.useState(""),[S,c]=t.useState("");return a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:["sm","md","lg"].map((p,l)=>{const y={sm:"Small (28px)",md:"Medium (32px)",lg:"Large (36px)"}[p],[b,w]=[[e,s],[r,o],[i,d]][l],[C,u]=[[h,g],[v,T],[S,c]][l];return a.jsxs("div",{style:{display:"flex",gap:"16px"},children:[a.jsx("div",{style:{flex:1},children:a.jsx(n,{label:y,value:b,onChange:w,placeholder:"TextArea",size:p})}),a.jsx("div",{style:{flex:1},children:a.jsx(Ge,{label:y,value:C,onChange:u,placeholder:"TextInput",size:p})})]},p)})})}},_={render:e=>{const[s,r]=t.useState(e.value??"");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Bio",placeholder:"Tell us about yourself...",maxLength:150}},Y={render:e=>{const[s,r]=t.useState(e.value??"This is a pre-filled bio that demonstrates the character counter.");return a.jsx(n,{...e,value:s,onChange:r})},args:{label:"Bio",maxLength:100}},K={render:()=>{const[e,s]=t.useState(""),[r,o]=t.useState("Some text here"),[i,d]=t.useState("This is a longer text that approaches the maximum length limit.");return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px",maxWidth:"400px"},children:[a.jsx(n,{label:"Short limit",value:e,onChange:s,placeholder:"Max 50 characters",maxLength:50}),a.jsx(n,{label:"Medium limit",value:r,onChange:o,placeholder:"Max 100 characters",maxLength:100}),a.jsx(n,{label:"Long limit",value:i,onChange:d,placeholder:"Max 200 characters",maxLength:200})]})}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...'
  }
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Bio',
    description: 'Tell us about yourself in a few sentences.',
    placeholder: 'Write your bio here...'
  }
}`,...A.parameters?.docs?.source}}};j.parameters={...j.parameters,docs:{...j.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Comments',
    isLabelHidden: true,
    placeholder: 'Add a comment...'
  }
}`,...j.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This is a pre-filled textarea with some content that demonstrates how the component handles existing text.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Notes',
    value: 'This is a pre-filled textarea with some content that demonstrates how the component handles existing text.'
  }
}`,...D.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Message',
    rows: 6,
    placeholder: 'Write a longer message...'
  }
}`,...I.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('Pre-filled content in the textarea.');
    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');
    const [value7, setValue7] = useState('');
    const [value8, setValue8] = useState('');
    const [value9, setValue9] = useState('This field is disabled');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <TextArea label="Visible label" value={value1} onChange={setValue1} placeholder="Enter text..." />
        <TextArea label="With description" description="Helpful description text" value={value4} onChange={setValue4} placeholder="Enter text..." />
        <TextArea label="Hidden label" isLabelHidden value={value2} onChange={setValue2} placeholder="Hidden label textarea" />
        <TextArea label="With value" value={value3} onChange={setValue3} />
        <TextArea label="Optional field" isOptional value={value5} onChange={setValue5} placeholder="Optional..." />
        <TextArea label="Required field" isRequired value={value6} onChange={setValue6} placeholder="Required..." />
        <TextArea label="Description with optional" description="Additional notes" isOptional value={value7} onChange={setValue7} placeholder="Notes..." />
        <TextArea label="Custom rows (6)" rows={6} value={value8} onChange={setValue8} placeholder="Larger textarea..." />
        <TextArea label="Disabled field" isDisabled value={value9} onChange={setValue9} />
      </div>;
  }
}`,...M.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Additional Notes',
    isOptional: true,
    placeholder: 'Any additional notes...'
  }
}`,...E.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Feedback',
    isRequired: true,
    placeholder: 'Please provide your feedback...'
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Comments',
    description: 'Share any additional thoughts or comments',
    isOptional: true,
    placeholder: 'Your comments here...'
  }
}`,...q.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This textarea is disabled and cannot be edited.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Disabled Field',
    isDisabled: true,
    value: 'This textarea is disabled and cannot be edited.'
  }
}`,...L.parameters?.docs?.source}}};k.parameters={...k.parameters,docs:{...k.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'These notes are locked after submission.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Notes',
    isDisabled: true,
    disabledMessage: 'Notes are locked after submission',
    value: 'These notes are locked after submission.'
  }
}`,...k.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Notes',
    placeholder: 'Enter your notes...',
    startIcon: DocumentTextIcon
  }
}`,...N.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [notes, setNotes] = useState('');
    const [message, setMessage] = useState('');
    const [draft, setDraft] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <TextArea label="Notes" value={notes} onChange={setNotes} placeholder="Enter your notes..." startIcon={DocumentTextIcon} />
        <TextArea label="Message" value={message} onChange={setMessage} placeholder="Type your message..." startIcon={ChatBubbleLeftIcon} />
        <TextArea label="Draft" value={draft} onChange={setDraft} placeholder="Write your draft..." startIcon={PencilSquareIcon} />
      </div>;
  }
}`,...z.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'Too short');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    status: {
      type: 'error',
      message: 'Description must be at least 50 characters'
    }
  }
}`,...R.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This content may contain issues');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Content',
    placeholder: 'Enter content...',
    status: {
      type: 'warning',
      message: 'Content may need review before publishing'
    }
  }
}`,...H.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This is a valid description that meets all requirements.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Description',
    placeholder: 'Enter a description...',
    status: {
      type: 'success',
      message: 'Description looks good!'
    }
  }
}`,...O.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'Invalid content');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Field',
    placeholder: 'Enter value',
    status: {
      type: 'error'
    }
  }
}`,...F.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [error, setError] = useState('Too short');
    const [warning, setWarning] = useState('This may need review');
    const [success, setSuccess] = useState('This description meets all the requirements perfectly.');
    const [errorNoMsg, setErrorNoMsg] = useState('Invalid');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <TextArea label="Error with message" value={error} onChange={setError} status={{
        type: 'error',
        message: 'Must be at least 50 characters'
      }} />
        <TextArea label="Warning with message" value={warning} onChange={setWarning} status={{
        type: 'warning',
        message: 'Content may need review'
      }} />
        <TextArea label="Success with message" value={success} onChange={setSuccess} status={{
        type: 'success',
        message: 'Description is valid'
      }} />
        <TextArea label="Error without message" value={errorNoMsg} onChange={setErrorNoMsg} status={{
        type: 'error'
      }} />
      </div>;
  }
}`,...P.parameters?.docs?.source}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'API Documentation',
    placeholder: 'Describe your API endpoint...',
    labelTooltip: 'Provide a detailed description of what this API endpoint does, including expected inputs and outputs.'
  }
}`,...G.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Additional Notes',
    placeholder: 'Any additional information...',
    labelTooltip: 'Include any extra details that might be helpful for reviewers.',
    isOptional: true
  }
}`,...B.parameters?.docs?.source}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [value, setValue] = useState('');
    return <div style={{
      maxWidth: '400px'
    }}>
        <TextArea label="Detailed Description" description="Provide a comprehensive description of your project" value={value} onChange={setValue} placeholder="Enter description..." startIcon={DocumentTextIcon} labelTooltip="This description will be visible to all team members" isRequired status={value.length > 0 && value.length < 20 ? {
        type: 'warning',
        message: 'Consider adding more detail'
      } : value.length >= 20 ? {
        type: 'success',
        message: 'Description looks good!'
      } : undefined} />
      </div>;
  }
}`,...$.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [smArea, setSmArea] = useState('');
    const [mdArea, setMdArea] = useState('');
    const [lgArea, setLgArea] = useState('');
    const [smInput, setSmInput] = useState('');
    const [mdInput, setMdInput] = useState('');
    const [lgInput, setLgInput] = useState('');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        {(['sm', 'md', 'lg'] as const).map((sz, i) => {
        const label = {
          sm: 'Small (28px)',
          md: 'Medium (32px)',
          lg: 'Large (36px)'
        }[sz];
        const [area, setArea] = [[smArea, setSmArea], [mdArea, setMdArea], [lgArea, setLgArea]][i] as [string, (v: string) => void];
        const [input, setInput] = [[smInput, setSmInput], [mdInput, setMdInput], [lgInput, setLgInput]][i] as [string, (v: string) => void];
        return <div key={sz} style={{
          display: 'flex',
          gap: '16px'
        }}>
              <div style={{
            flex: 1
          }}>
                <TextArea label={label} value={area} onChange={setArea} placeholder="TextArea" size={sz} />
              </div>
              <div style={{
            flex: 1
          }}>
                <TextInput label={label} value={input} onChange={setInput} placeholder="TextInput" size={sz} />
              </div>
            </div>;
      })}
      </div>;
  }
}`,...U.parameters?.docs?.source}}};_.parameters={..._.parameters,docs:{..._.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? '');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Bio',
    placeholder: 'Tell us about yourself...',
    maxLength: 150
  }
}`,..._.parameters?.docs?.source}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState(args.value ?? 'This is a pre-filled bio that demonstrates the character counter.');
    return <TextArea {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Bio',
    maxLength: 100
  }
}`,...Y.parameters?.docs?.source}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [short, setShort] = useState('');
    const [medium, setMedium] = useState('Some text here');
    const [long, setLong] = useState('This is a longer text that approaches the maximum length limit.');
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px',
      maxWidth: '400px'
    }}>
        <TextArea label="Short limit" value={short} onChange={setShort} placeholder="Max 50 characters" maxLength={50} />
        <TextArea label="Medium limit" value={medium} onChange={setMedium} placeholder="Max 100 characters" maxLength={100} />
        <TextArea label="Long limit" value={long} onChange={setLong} placeholder="Max 200 characters" maxLength={200} />
      </div>;
  }
}`,...K.parameters?.docs?.source}}};const oa=["Default","WithDescription","WithHiddenLabel","WithValue","CustomRows","AllVariations","OptionalField","RequiredField","DescriptionWithOptional","Disabled","DisabledWithMessage","WithStartIcon","StartIconVariations","ErrorStatus","WarningStatus","SuccessStatus","StatusWithoutMessage","StatusVariations","WithTooltip","TooltipWithOptional","CombinedFeatures","SizeVariants","WithMaxLength","MaxLengthWithValue","MaxLengthVariations"];export{M as AllVariations,$ as CombinedFeatures,I as CustomRows,V as Default,q as DescriptionWithOptional,L as Disabled,k as DisabledWithMessage,R as ErrorStatus,K as MaxLengthVariations,Y as MaxLengthWithValue,E as OptionalField,W as RequiredField,U as SizeVariants,z as StartIconVariations,P as StatusVariations,F as StatusWithoutMessage,O as SuccessStatus,B as TooltipWithOptional,H as WarningStatus,A as WithDescription,j as WithHiddenLabel,_ as WithMaxLength,N as WithStartIcon,G as WithTooltip,D as WithValue,oa as __namedExportsOrder,la as default};
