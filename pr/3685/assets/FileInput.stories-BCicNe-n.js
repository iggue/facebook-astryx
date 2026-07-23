import{ag as s,aN as Ce,a0 as a,a6 as Ie,a5 as De,ae as Me,ax as Te,e as te,I as J}from"./iframe-CouMrHD9.js";import{F as We}from"./Field-BYvVLN_n.js";import{I as qe}from"./InputClearButton-CnOgm6ZE.js";import{u as Ue}from"./useAnnounce-BYx_vHS_.js";import"./preload-helper-Ct5FWWRu.js";import"./FieldStatus-BS_HeSvI.js";import"./Tooltip-B-PiHtaw.js";function Ae(e){return e<1024?`${e} B`:e<1024*1024?`${(e/1024).toFixed(1)} KB`:`${(e/(1024*1024)).toFixed(1)} MB`}function Pe(e,r,t,u,h){const m=[];let i=e;if(r){const y=r.split(",").map(c=>c.trim().toLowerCase());i=i.filter(c=>{const n=y.some(x=>x.startsWith(".")?c.name.toLowerCase().endsWith(x):x.endsWith("/*")?c.type.startsWith(x.slice(0,-1)):c.type.toLowerCase()===x);return n||m.push(`"${c.name}" is not an accepted file type`),n})}return t!=null&&(i=i.filter(y=>y.size>t?(m.push(`"${y.name}" exceeds ${Ae(t)} limit`),!1):!0)),h&&u!=null&&i.length>u&&(m.push(`Maximum ${u} files allowed`),i=i.slice(0,u)),{valid:i,errors:m}}const b={dropzone:{kB7OPa:"astryx9f619",kVAEAm:"astryx1n2onr6",kY2c9j:"astryx1vjfegm",k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kGNEyG:"astryx6s0dn4",kjj79g:"astryxl56j7k",kOIVth:"astryx1txdalj",k8WAf4:"astryxq6koh6",kg3NbH:"astryx1pzlopt",kMzoRj:"astryx1litavf",ksu8eU:"astryxbsl7fq",kVAM5u:"astryxvy26l8 astryx6q1khz",kaIpWk:"astryxh6dtrn",kWkggS:"astryx10xzikg",k1ekBW:"astryx1tv3a4w",kIyJzY:"astryxuedmi6 astryx12w9bfk",kAMwcw:"astryxlr8y92",kkrTdU:"astryx1ypdohk",kI3sdo:"astryx1a2a7pz",$$css:!0},dropzoneHover:{kGVxlE:"astryxw6ruzt",$$css:!0},dropzoneActive:{kVAM5u:"astryxad5do",kWkggS:"astryxgcxg3y",$$css:!0},dropzoneDisabled:{kkrTdU:"astryx1h6gzvc",kSiTet:"astryxbyyjgo",kVAM5u:"astryxvy26l8",$$css:!0},compact:{kB7OPa:"astryx9f619",kVAEAm:"astryx1n2onr6",kY2c9j:"astryx1vjfegm",k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryx1txdalj",k8WAf4:"astryxu0wf1k",kg3NbH:"astryxf314gf",kMzoRj:"astryx1litavf",ksu8eU:"astryx1y0btm7",kVAM5u:"astryxvy26l8 astryx6q1khz",kaIpWk:"astryxh6dtrn",kWkggS:"astryx10xzikg",k1ekBW:"astryx12zzom9",kIyJzY:"astryxuedmi6 astryx12w9bfk",kAMwcw:"astryxlr8y92",kGVxlE:"astryx1gnnqk1 astryx70dsy8",kkrTdU:"astryx1ypdohk",kZKoxP:"astryx1ueg155",kI3sdo:"astryx1a2a7pz",$$css:!0},compactDisabled:{kkrTdU:"astryx1h6gzvc",kSiTet:"astryxbyyjgo",kVAM5u:"astryxvy26l8",$$css:!0}},Re={warning:{kVAM5u:"astryx8wg1ba",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},error:{kVAM5u:"astryx1ofxpqo",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0},success:{kVAM5u:"astryx16m2moy",kzOINU:null,kGJrpR:null,kaZRDh:null,kBCPoo:null,k26BEO:null,k5QoK5:null,kLZC3w:null,kL6WhQ:null,$$css:!0}};function o({label:e,isLabelHidden:r=!1,value:t,onChange:u,changeAction:h,accept:m,isMultiple:i=!1,maxSize:y,maxFiles:c,isDisabled:n=!1,disabledMessage:x,isRequired:K=!1,isLoading:w=!1,status:se,description:$,placeholder:re,mode:g="input",isOptional:le=!1,labelTooltip:ne,width:oe,xstyle:ie,className:ue,style:de,ref:ce,...pe}){const Z=s.useId(),Q=s.useId(),Y=s.useId(),me=s.useId(),f=s.useRef(null),[_,V]=s.useState(!1),[E,O]=s.useState(null),[,X]=s.useTransition(),ee=Ue(),k=n&&!!x,N=Ce({placement:"above",focusTrigger:"always",isEnabled:k}),d=se??(E?{type:"error",message:E}:void 0),ye={warning:"warning",error:"error",success:"success"},xe={warning:"warning",error:"error",success:"success"},ge=[$?Q:null,d?.message?Y:null,k?N.describedBy:null].filter(Boolean).join(" ")||void 0,L=re??(i?"Choose files":"Choose file"),j=s.useCallback(l=>{if(n)return;const{valid:p,errors:H}=Pe(l,m,y,c,i);if(H.length>0?O(H[0]):O(null),p.length===0){u(null);return}const ae=i?p:p[0];u(ae),H.length===0&&ee(p.length===1?`1 file selected: ${p[0].name}`:`${p.length} files selected`),h&&X(async()=>{await h(ae)})},[m,n,i,c,y,u,h,X,ee]),fe=s.useCallback(l=>{const p=Array.from(l.target.files??[]);j(p),f.current&&(f.current.value="")},[j]),he=s.useCallback(l=>{l.stopPropagation(),O(null),u(null),f.current&&(f.current.value="",f.current.focus())},[u]),ve=s.useCallback(()=>{n||f.current?.click()},[n]),be=s.useCallback(l=>{(l.key==="Enter"||l.key===" ")&&!n&&(l.preventDefault(),f.current?.click())},[n]),ke=s.useCallback(l=>{l.preventDefault(),l.stopPropagation(),!n&&g==="dropzone"&&V(!0)},[n,g]),Fe=s.useCallback(l=>{l.preventDefault(),l.stopPropagation(),!n&&g==="dropzone"&&V(!0)},[n,g]),we=s.useCallback(l=>{l.preventDefault(),l.stopPropagation(),V(!1)},[]),Ve=s.useCallback(l=>{if(l.preventDefault(),l.stopPropagation(),V(!1),n||g!=="dropzone")return;const p=Array.from(l.dataTransfer.files);p.length>0&&j(p)},[n,g,j]),F=t!=null&&(Array.isArray(t)?t.length>0:!0),G=F?Array.isArray(t)?t.map(l=>l.name).join(", "):t?.name??"":null,je=()=>w?a.jsx(te,{size:"md"}):F?a.jsx("div",{className:"astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxb3r6kr astryxlyipyv astryx98rzlu astryxeuugli astryx2b8uid astryxeaf4i8",children:G}):a.jsxs(a.Fragment,{children:[a.jsx(J,{icon:"arrowUp",size:"md",color:"secondary"}),a.jsx("span",{className:"astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxv1l7n4 astryx2b8uid astryx87ps6o",children:_?"Drop files here":L})]}),ze=()=>w?a.jsxs(a.Fragment,{children:[a.jsx("span",{className:"astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxb3r6kr astryxlyipyv astryxuxw1ft astryx98rzlu astryxeuugli",children:G??L}),a.jsx(te,{size:"sm"})]}):a.jsxs(a.Fragment,{children:[a.jsx(J,{icon:"arrowUp",size:"sm",color:"secondary"}),a.jsx("span",{...{0:{className:"astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxv1l7n4 astryx87ps6o astryx1yc453h astryx98rzlu astryxeuugli"},2:{className:"astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxb3r6kr astryxlyipyv astryxuxw1ft astryx1yc453h astryx98rzlu astryxeuugli"},1:{className:"astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryxv1l7n4 astryx87ps6o astryx1yc453h"},3:{className:"astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1tgivj0 astryxb3r6kr astryxlyipyv astryxuxw1ft astryx98rzlu astryxeuugli astryx1yc453h"}}[!!F<<1|!!F<<0],children:G??L}),d&&a.jsx(J,{icon:ye[d.type],size:"md",color:xe[d.type]})]}),v=g==="dropzone",Se=v?{onDragEnter:ke,onDragOver:Fe,onDragLeave:we,onDrop:Ve}:{};return a.jsxs(We,{label:e,isLabelHidden:r,description:$,inputID:Z,descriptionID:$?Q:void 0,isOptional:le,isRequired:K,isDisabled:n,status:d?{type:d.type,message:d.message,messageID:d.message?Y:void 0}:void 0,labelTooltip:ne,width:oe,children:[a.jsxs("div",{ref:l=>{N.ref(l)},role:"button",tabIndex:n&&!k?-1:0,"aria-disabled":k?"true":void 0,onClick:ve,onKeyDown:be,"aria-label":e,"aria-busy":w||void 0,"aria-describedby":ge,"aria-required":K?"true":void 0,"aria-invalid":d?.type==="error"?"true":void 0,...Se,...De(Te("file-input",{mode:g,status:d?.type??null}),Me(v?b.dropzone:b.compact,v&&!n&&b.dropzoneHover,v&&_&&b.dropzoneActive,v&&n&&b.dropzoneDisabled,!v&&n&&b.compactDisabled,d&&Re[d.type],ie),ue,de),children:[a.jsx("input",{...pe,ref:Ie(ce,f),id:Z,type:"file",accept:m,multiple:i,disabled:n,onChange:fe,"aria-hidden":"true",tabIndex:-1,className:"astryx10l6tqk astryx1i1rx1s astryxjm9jq1 astryx1717udv astryxkdpibf astryxb3r6kr astryxzpqnlu astryxuxw1ft astryxc342km"}),v?je():ze(),F&&!n&&!w&&a.jsx(qe,{label:`Clear ${e}`,onClick:he})]}),a.jsx("div",{id:me,role:"status","aria-live":"polite",className:"astryx10l6tqk astryx1i1rx1s astryxjm9jq1 astryx1717udv astryxkdpibf astryxb3r6kr astryxzpqnlu astryxuxw1ft astryxc342km",children:E}),k&&N.renderTooltip(x)]})}o.displayName="FileInput";o.__docgenInfo={description:'A file input component with optional drag-and-drop support.\n\n@example\n```\n<FileInput label="Resume" value={file} onChange={setFile} accept=".pdf" />\n```',methods:[],displayName:"FileInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:""},label:{required:!0,tsType:{name:"string"},description:"Accessible label for the file input."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},value:{required:!0,tsType:{name:"union",raw:"File | File[] | null",elements:[{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"}]},description:"Currently selected file(s). Controlled component."},onChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(files: File | File[] | null) => void",signature:{arguments:[{type:{name:"union",raw:"File | File[] | null",elements:[{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"}]},name:"files"}],return:{name:"void"}}},description:"Callback fired when files are selected or removed."},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(files: File | File[] | null) => Promise<void>",signature:{arguments:[{type:{name:"union",raw:"File | File[] | null",elements:[{name:"File"},{name:"Array",elements:[{name:"File"}],raw:"File[]"},{name:"null"}]},name:"files"}],return:{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}}},description:`Async change action (React 19 transitions pattern).
Use for immediate upload on file selection.`},accept:{required:!1,tsType:{name:"string"},description:`Accepted file types. Uses the HTML accept attribute format.
Examples: "image/*", ".pdf,.doc,.docx", "image/png,image/jpeg"`},isMultiple:{required:!1,tsType:{name:"boolean"},description:"Whether multiple files can be selected.\nWhen true, `value` and `onChange` use `File[]` instead of `File`.\n@default false",defaultValue:{value:"false",computed:!1}},maxSize:{required:!1,tsType:{name:"number"},description:`Maximum file size in bytes. Files exceeding this are rejected
with an error status.`},maxFiles:{required:!1,tsType:{name:"number"},description:"Maximum number of files (only applies when `isMultiple` is true)."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the input is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},disabledMessage:{required:!1,tsType:{name:"string"},description:`Explains why the input is disabled. When set together with \`isDisabled\`,
the file input shows a tooltip with this text on hover and keyboard focus,
and its trigger stays focusable (via \`aria-disabled\`) so the reason is
discoverable by keyboard and assistive technology. Opening the file picker
stays blocked.

Use this instead of wrapping a disabled input in \`Tooltip\` — disabled
controls don't emit the pointer events an external tooltip needs.

@example
\`\`\`
<FileInput
  label="Resume"
  value={file}
  isDisabled
  disabledMessage="Uploads are locked until your profile is verified"
/>
\`\`\``},isRequired:{required:!1,tsType:{name:"boolean"},description:`Whether the input is required.
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether the input is in a loading state (e.g. uploading).
@default false`,defaultValue:{value:"false",computed:!1}},status:{required:!1,tsType:{name:"InputStatus"},description:"Validation status for the input."},description:{required:!1,tsType:{name:"string"},description:"Description text displayed below the label."},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text shown when no file is selected.
@default "Choose file" or "Choose files"`},mode:{required:!1,tsType:{name:"union",raw:"'dropzone' | 'input'",elements:[{name:"literal",value:"'dropzone'"},{name:"literal",value:"'input'"}]},description:`Visual mode for the file input.
- 'input': compact inline style, similar to a text input
- 'dropzone': larger area with dashed border and drag-and-drop support
@default 'input'`,defaultValue:{value:"'input'",computed:!1}},isOptional:{required:!1,tsType:{name:"boolean"},description:`Whether the field is optional. Mutually exclusive with isRequired.
@default false`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},labelTooltip:{required:!1,tsType:{name:"string"},description:"Tooltip text to display in an info icon at the end of the label."}},composes:["Omit"]};const Je={title:"Core/FileInput",component:o,tags:["autodocs"],argTypes:{label:{control:"text",description:"Label text (required)"},isLabelHidden:{control:"boolean",description:"Visually hide the label (still accessible to screen readers)"},placeholder:{control:"text",description:"Placeholder text"},description:{control:"text",description:"Description text displayed between the label and input"},accept:{control:"text",description:'Accepted file types (e.g. "image/*", ".pdf,.doc")'},isMultiple:{control:"boolean",description:"Whether multiple files can be selected"},isOptional:{control:"boolean",description:"Whether the field is optional (mutually exclusive with isRequired)"},isRequired:{control:"boolean",description:"Whether the field is required (mutually exclusive with isOptional)"},isDisabled:{control:"boolean",description:"Whether the input is disabled"},disabledMessage:{control:"text",description:"Explains why the input is disabled. With isDisabled, shows a tooltip on hover/keyboard focus and keeps the trigger focusable via aria-disabled (opening the file picker stays blocked). Use this instead of wrapping a disabled FileInput in Tooltip."},isLoading:{control:"boolean",description:"Whether the input is in a loading state"},mode:{control:"select",options:["input","dropzone"],description:"Visual mode: compact input or drag-and-drop dropzone"},status:{control:"object",description:"Status indicator with type (warning/error/success) and optional message"},labelTooltip:{control:"text",description:"Tooltip text to display in an info icon at the end of the label"}}},z={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Upload file",placeholder:"Drag files here or click to browse"}},S={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Resume",description:"Upload your resume in PDF or Word format. Max 5MB.",accept:".pdf,.doc,.docx"}},C={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Attachments",isMultiple:!0,description:"Upload up to 10 files. Max 5MB each.",maxFiles:10,maxSize:5*1024*1024}},I={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Profile photo",accept:"image/png,image/jpeg",description:"PNG or JPEG, max 2MB.",maxSize:2*1024*1024}},D={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Upload files",mode:"dropzone",placeholder:"Drag files here or click to browse"}},M={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Supporting document",isRequired:!0}},T={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Cover letter",isOptional:!0}},W={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Upload locked",isDisabled:!0,placeholder:"Upload is currently disabled"}},q={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Resume",isDisabled:!0,disabledMessage:"Uploads are locked until your profile is verified",placeholder:"Upload is currently disabled"}},U={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Uploading...",isLoading:!0}},A={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Upload document",status:{type:"error",message:"File must be under 10MB"}}},P={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Upload document",status:{type:"success",message:"File uploaded successfully"}}},R={render:e=>{const[r,t]=s.useState(null);return a.jsx(o,{...e,value:r,onChange:t})},args:{label:"Tax documents",labelTooltip:"Upload W-2 forms, 1099s, or other tax-related documents."}},B={render:()=>{const[e,r]=s.useState(null),[t,u]=s.useState(null),[h,m]=s.useState(null),[i,y]=s.useState(null),[c,n]=s.useState(null);return a.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"24px",maxWidth:"400px"},children:[a.jsx(o,{label:"Default (input mode)",value:e,onChange:r}),a.jsx(o,{label:"Dropzone with constraints",value:t,onChange:u,mode:"dropzone",isMultiple:!0,accept:"image/*",maxSize:5*1024*1024,maxFiles:5,description:"Up to 5 images, max 5MB each"}),a.jsx(o,{label:"Dropzone mode",value:h,onChange:m,mode:"dropzone",placeholder:"Drag files here or click to browse"}),a.jsx(o,{label:"Disabled",value:i,onChange:y,isDisabled:!0}),a.jsx(o,{label:"With error",value:c,onChange:n,status:{type:"error",message:"Please upload a valid file"}})]})}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload file',
    placeholder: 'Drag files here or click to browse'
  }
}`,...z.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Resume',
    description: 'Upload your resume in PDF or Word format. Max 5MB.',
    accept: '.pdf,.doc,.docx'
  }
}`,...S.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Attachments',
    isMultiple: true,
    description: 'Upload up to 10 files. Max 5MB each.',
    maxFiles: 10,
    maxSize: 5 * 1024 * 1024
  }
}`,...C.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Profile photo',
    accept: 'image/png,image/jpeg',
    description: 'PNG or JPEG, max 2MB.',
    maxSize: 2 * 1024 * 1024
  }
}`,...I.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload files',
    mode: 'dropzone',
    placeholder: 'Drag files here or click to browse'
  }
}`,...D.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Supporting document',
    isRequired: true
  }
}`,...M.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Cover letter',
    isOptional: true
  }
}`,...T.parameters?.docs?.source}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload locked',
    isDisabled: true,
    placeholder: 'Upload is currently disabled'
  }
}`,...W.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Resume',
    isDisabled: true,
    disabledMessage: 'Uploads are locked until your profile is verified',
    placeholder: 'Upload is currently disabled'
  }
}`,...q.parameters?.docs?.source}}};U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Uploading...',
    isLoading: true
  }
}`,...U.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload document',
    status: {
      type: 'error',
      message: 'File must be under 10MB'
    }
  }
}`,...A.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Upload document',
    status: {
      type: 'success',
      message: 'File uploaded successfully'
    }
  }
}`,...P.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  render: args => {
    const [value, setValue] = useState<File | File[] | null>(null);
    return <FileInput {...args} value={value} onChange={setValue} />;
  },
  args: {
    label: 'Tax documents',
    labelTooltip: 'Upload W-2 forms, 1099s, or other tax-related documents.'
  }
}`,...R.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [v1, setV1] = useState<File | File[] | null>(null);
    const [v2, setV2] = useState<File | File[] | null>(null);
    const [v3, setV3] = useState<File | File[] | null>(null);
    const [v4, setV4] = useState<File | File[] | null>(null);
    const [v5, setV5] = useState<File | File[] | null>(null);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '24px',
      maxWidth: '400px'
    }}>
        <FileInput label="Default (input mode)" value={v1} onChange={setV1} />
        <FileInput label="Dropzone with constraints" value={v2} onChange={setV2} mode="dropzone" isMultiple accept="image/*" maxSize={5 * 1024 * 1024} maxFiles={5} description="Up to 5 images, max 5MB each" />
        <FileInput label="Dropzone mode" value={v3} onChange={setV3} mode="dropzone" placeholder="Drag files here or click to browse" />
        <FileInput label="Disabled" value={v4} onChange={setV4} isDisabled />
        <FileInput label="With error" value={v5} onChange={setV5} status={{
        type: 'error',
        message: 'Please upload a valid file'
      }} />
      </div>;
  }
}`,...B.parameters?.docs?.source}}};const Ke=["Default","WithDescription","MultipleFiles","ImagesOnly","DropzoneMode","Required","Optional","Disabled","DisabledWithMessage","Loading","WithErrorStatus","WithSuccessStatus","WithTooltip","AllVariations"];export{B as AllVariations,z as Default,W as Disabled,q as DisabledWithMessage,D as DropzoneMode,I as ImagesOnly,U as Loading,C as MultipleFiles,T as Optional,M as Required,S as WithDescription,A as WithErrorStatus,P as WithSuccessStatus,R as WithTooltip,Ke as __namedExportsOrder,Je as default};
