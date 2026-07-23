import{ag as s,aN as _,a0 as d,a5 as B,ax as F}from"./iframe-C8XmfRPK.js";import{F as z}from"./Field-ElIt52VC.js";import{L as U}from"./List-Do6sCaTM.js";import{a as W,C as X}from"./CheckboxInput-D_8XFo0y.js";import{L as Y,a as $}from"./ListItem-CGtxVbbh.js";const G=[];function O({label:c,isLabelHidden:t=!1,description:u,status:n,value:y,onChange:g,changeAction:a,density:v="balanced",hasDividers:L=!1,isDisabled:o=!1,disabledMessage:x,isReadOnly:k=!1,children:T,ref:e,width:D,xstyle:R,className:I,style:l,"data-testid":r}){const m=s.useId(),i=s.useId(),C=s.useId(),p=s.useId(),[,w]=s.useTransition(),h=y!==void 0,j=y??G,[E,M]=s.useOptimistic(j),[S,V]=s.useOptimistic(null),f=o&&!!x,q=_({placement:"above",focusTrigger:"always",isEnabled:f}),A=s.useCallback((b,N)=>{g?.(b),a&&w(async()=>{M(b),N!==void 0&&V(N),await a(b)})},[g,a,w,M,V]),H=s.useMemo(()=>({value:h?E:void 0,onChange:h?A:void 0,isDisabled:o,hasDisabledMessage:f,isReadOnly:k,loadingValue:S}),[h,E,A,o,f,k,S]);return d.jsxs(z,{ref:e,"data-testid":r,label:c,isLabelHidden:t,description:u,inputID:m,labelID:i,isGroupLabel:!0,descriptionID:u?C:void 0,isDisabled:o,status:n?{type:n.type,message:n.message,messageID:n.message?p:void 0}:void 0,statusVariant:"detached",width:D,xstyle:R,...B(F("checkbox-list"),{className:I,style:l}),children:[d.jsx(W,{value:H,children:d.jsx("div",{ref:b=>{q.ref(b)},role:"group","aria-labelledby":i,"aria-describedby":[u?C:null,n?.message?p:null,f?q.describedBy:null].filter(Boolean).join(" ")||void 0,children:d.jsx(U,{density:v,hasDividers:L,children:T})})}),f&&q.renderTooltip(x)]})}O.displayName="CheckboxList";O.__docgenInfo={description:`A checkbox group component for multi-value selection.

Composes Field (for label, description, status) and List
(for density, dividers) with a context provider for collection mode.

@example
\`\`\`
<CheckboxList
  label="Notifications"
  value={selected}
  onChange={setSelected}>
  <CheckboxListItem label="Email" value="email" />
  <CheckboxListItem label="SMS" value="sms" />
  <CheckboxListItem label="Push" value="push" />
</CheckboxList>
\`\`\``,methods:[],displayName:"CheckboxList",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},label:{required:!0,tsType:{name:"string"},description:"Label text for the checkbox group (always rendered for accessibility)."},isLabelHidden:{required:!1,tsType:{name:"boolean"},description:`Whether to visually hide the label (still accessible to screen readers).
@default false`,defaultValue:{value:"false",computed:!1}},description:{required:!1,tsType:{name:"string"},description:"Description text displayed below the label."},status:{required:!1,tsType:{name:"InputStatus"},description:`Status indicator for the checkbox group.
When set with a message, displays a colored message box below the group.`},value:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:"The currently selected values (collection mode)."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"void"}}},description:"Callback fired when the selected values change (collection mode)."},changeAction:{required:!1,tsType:{name:"signature",type:"function",raw:"(values: string[]) => void | Promise<void>",signature:{arguments:[{type:{name:"Array",elements:[{name:"string"}],raw:"string[]"},name:"values"}],return:{name:"union",raw:"void | Promise<void>",elements:[{name:"void"},{name:"Promise",elements:[{name:"void"}],raw:"Promise<void>"}]}}},description:`Async action on change. Fires after onChange.
While the returned promise is pending, the toggled item shows a spinner
inside its checkbox and is marked \`aria-busy\`, and re-toggling it is
blocked. Other items remain interactive.`},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'balanced' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'balanced'"},{name:"literal",value:"'spacious'"}]},description:`Spacing density for list items.
@default 'balanced'`,defaultValue:{value:"'balanced'",computed:!1}},hasDividers:{required:!1,tsType:{name:"boolean"},description:`Whether to show dividers between list items.
@default false`,defaultValue:{value:"false",computed:!1}},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether all checkbox items are disabled.
@default false`,defaultValue:{value:"false",computed:!1}},disabledMessage:{required:!1,tsType:{name:"string"},description:"Explains why the checkbox group is disabled. Applies to the whole-group\ndisabled state (`isDisabled`), not individual items. When set together with\n`isDisabled`, the group shows a tooltip with this text on hover and keyboard\nfocus, and its checkboxes stay focusable (via `aria-disabled`) so the reason\nis discoverable by keyboard and assistive technology. Toggling stays\nblocked.\n\nUse this instead of wrapping a disabled group in `Tooltip` — disabled\ncontrols don't emit the pointer events an external tooltip needs."},isReadOnly:{required:!1,tsType:{name:"boolean"},description:`Whether all checkbox items are read-only.
Displays the current state at full opacity but prevents interaction.
Unlike \`isDisabled\`, read-only checkboxes are not visually dimmed.
@default false`,defaultValue:{value:"false",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:"Width of the field. Numbers are treated as pixels, strings are used as-is\n(e.g. `'100%'`). Sizes the whole field (label, control, and status) so they\nstay aligned, unlike setting width via `xstyle`/`className`/`style`."},children:{required:!0,tsType:{name:"ReactNode"},description:"Checkbox list items to render."}},composes:["Omit"]};const Q={selected:{kWkggS:"astryxgcxg3y",$$css:!0}};function P({label:c,value:t,description:u,endContent:n,isDisabled:y=!1,isLoading:g=!1,isChecked:a,onCheck:v,ref:L,xstyle:o,className:x,style:k,...T}){const e=s.use(W);if(e&&e.value!==void 0&&t===void 0)throw new Error("CheckboxListItem requires a `value` prop when used inside CheckboxList with a value array.");const I=(s.use(Y)?.density??"balanced")==="compact"?"sm":"md",l=(e?.isDisabled??!1)||y,r=e?.isReadOnly??!1,m=g||(e?.loadingValue!=null&&t!==void 0?e.loadingValue===t:!1);let i=!1;e&&e.value!==void 0&&t!==void 0?i=e.value.includes(t):a!==void 0&&(i=a);const C=!r&&(e!=null||v!=null),p=()=>{l||r||m||(e&&e.value!==void 0&&t!==void 0?e.value.includes(t)?e.onChange?.(e.value.filter(h=>h!==t),t):e.onChange?.([...e.value,t],t):v?.(i!==!0))};return d.jsx($,{...T,ref:L,label:c,description:u,endContent:n,isDisabled:l,onClick:C?p:void 0,"aria-busy":m||void 0,xstyle:[i===!0&&!l&&!r&&Q.selected,o],className:x,style:k,startContent:d.jsx(X,{label:typeof c=="string"?c:"Checkbox",isLabelHidden:!0,value:i,onChange:()=>p(),isDisabled:l,isReadOnly:r,isLoading:m,size:I})})}P.displayName="CheckboxListItem";P.__docgenInfo={description:`A checkbox item for use within CheckboxList (collection mode)
or List (standalone mode).

In collection mode, checked state is derived from the parent's value array.
In standalone mode, uses isChecked/onCheck props directly.

Composes ListItem internally — gets density, dividers, hover/press,
focus, and container alignment for free.

@example
\`\`\`
<CheckboxListItem label="Email" value="email" />
<CheckboxListItem
  label="Accept terms"
  isChecked={accepted}
  onCheck={setAccepted}
/>
\`\`\``,methods:[],displayName:"CheckboxListItem",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},label:{required:!0,tsType:{name:"ReactNode"},description:`Primary text label for the item.

Accepts a plain string (single-line truncation applied automatically)
or a ReactNode for rich content (no truncation constraints —
child components control their own text behavior).`},value:{required:!1,tsType:{name:"string"},description:`Identity key for collection mode (REQUIRED inside CheckboxList).
Throws a runtime error if missing when used inside CheckboxList.`},description:{required:!1,tsType:{name:"string"},description:"Secondary text below the label."},endContent:{required:!1,tsType:{name:"ReactNode"},description:"Content rendered after the label area."},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether this individual item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},isLoading:{required:!1,tsType:{name:"boolean"},description:`Whether this item is in a loading state. Renders a spinner inside the
checkbox and blocks interaction on this item only.

In collection mode, this is also driven automatically: when the parent
\`CheckboxList\` has a \`changeAction\`, the toggled item shows its
spinner while that promise is pending.
@default false`,defaultValue:{value:"false",computed:!1}},isChecked:{required:!1,tsType:{name:"union",raw:"boolean | 'indeterminate'",elements:[{name:"boolean"},{name:"literal",value:"'indeterminate'"}]},description:`Direct checked state (standalone mode only).
Ignored when inside CheckboxList.`},onCheck:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:`Direct check handler (standalone mode only).
Ignored when inside CheckboxList.`},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLLIElement>",elements:[{name:"HTMLLIElement"}]},description:"Ref forwarded to the root element"}},composes:["Omit"]};export{O as C,P as a};
