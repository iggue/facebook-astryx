import{ag as i,aH as w,a0 as o,a5 as k,ae as P,ax as R,a2 as A}from"./iframe-C8fQ-xtn.js";import{u as U}from"./usePopover-BJ9khqJg.js";import{I as V}from"./useInteractiveRole-BPTzNaze.js";const O='button, [role="button"]';function j(n){return n.matches(O)?n:n.querySelector(O)}const s={contentPadding:{kLKAdn:"astryx1vlblms",kGO01o:"astryxvmdzux",kZCmMZ:"astryx126nfab",kwRFfy:"astryx1t818jl",$$css:!0},gap:{keoZOQ:"astryxcsaf9d",k1K539:"astryx14cgwvg",$$css:!0},customWidth:n=>[{kzqmXN:(typeof n=="number"?`${n}px`:n)!=null?"astryx5lhr3w":typeof n=="number"?`${n}px`:n,$$css:!0},{"--x-width":(r=>typeof r=="number"?r+"px":r??void 0)(typeof n=="number"?`${n}px`:n)}],matchTrigger:{k7Eaqz:"astryxrzjruh",$$css:!0}};function I({children:n,anchorRef:r,content:m,placement:l="below",alignment:f="start",isOpen:u,onOpenChange:d,isEnabled:C=!0,width:q,label:F,hasCloseButton:W,closeButtonLabel:N,hasAutoFocus:$,hasLightDismiss:B=!0,hasEscapeDismiss:D=!0,xstyle:h,className:g,style:v,"data-testid":b}){const E=i.useRef(null),S=u!==void 0,L=i.useRef(0),H=i.useCallback(()=>{d?.(!0)},[d]),M=i.useCallback(()=>{L.current=Date.now(),d?.(!1)},[d]),t=U({dialogLabel:F,hasLightDismiss:B,hasEscapeDismiss:D,hasCloseButton:W,closeButtonLabel:N,hasAutoFocus:$,onShow:H,onHide:M}),p=i.useCallback(()=>{C&&(Date.now()-L.current<50||t.toggle())},[C,t]),y=i.useCallback(e=>{(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),p())},[p]),c=i.useCallback(e=>{e.setAttribute("aria-haspopup",t.triggerProps["aria-haspopup"]),e.setAttribute("aria-expanded",String(t.triggerProps["aria-expanded"])),e.setAttribute("aria-controls",t.triggerProps["aria-controls"]),e.addEventListener("click",p);const a=e.tagName!=="BUTTON"&&e.getAttribute("role")==="button";return a&&e.addEventListener("keydown",y),()=>{e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded"),e.removeAttribute("aria-controls"),e.removeEventListener("click",p),a&&e.removeEventListener("keydown",y)}},[t,p,y]);w(()=>{if(!r)return;const e=r.current;if(!e)return;const a=j(e);if(a||console.warn('Popover: anchorRef must reference a <button> or [role="button"] element. The popover trigger implements the button + dialog ARIA pattern.'),!a)return;t.triggerRef(e);const T=c(a);return()=>{t.triggerRef(null),T()}},[r,t,c]),w(()=>{if(r||typeof n=="function")return;const e=E.current;if(!e)return;t.triggerRef(e);const a=j(e);if(a||console.warn('Popover: children must contain a <button> or [role="button"] element. The popover trigger implements the button + dialog ARIA pattern.'),!a)return;const T=c(a);return()=>{t.triggerRef(null),T()}},[r,t,c]),w(()=>{S&&(u&&!t.isOpen?t.show():!u&&t.isOpen&&t.hide())},[u,S,t]);const x=q?s.customWidth(q):s.matchTrigger;if(r&&n==null)return o.jsx(o.Fragment,{children:t.render(o.jsx("div",{"data-testid":b,...k(R("popover"),P(s.contentPadding,h),g,v),children:m}),{placement:l,alignment:f,xstyle:[x,s.gap,A[l]]})});if(typeof n=="function"){const e={ref:t.triggerRef,onClick:p,"aria-haspopup":"dialog","aria-expanded":t.isOpen,"aria-controls":t.id};return o.jsxs(o.Fragment,{children:[n(e),t.render(o.jsx("div",{"data-testid":b,...k(R("popover"),P(s.contentPadding,h),g,v),children:m}),{placement:l,alignment:f,xstyle:[x,s.gap,A[l]]})]})}return o.jsxs(o.Fragment,{children:[o.jsx(V,{value:"button",children:o.jsx("div",{ref:E,className:"astryx3nfvp2",children:n})}),t.render(o.jsx("div",{"data-testid":b,...k(R("popover"),P(s.contentPadding,h),g,v),children:m}),{placement:l,alignment:f,xstyle:[x,s.gap,A[l]]})]})}I.displayName="Popover";I.__docgenInfo={description:`A click-triggered popover for displaying interactive content anchored to a trigger.

Implements the button + dialog ARIA pattern. The trigger must contain a
\`<button>\` or \`[role="button"]\` element — the popover finds it and applies
click/keydown handlers and ARIA attributes automatically.

Uses an inline-flex wrapper as the CSS anchor for stable positioning
(immune to pressed-state transforms like \`:active { scale(0.98) }\`).

Focus is trapped inside the popover when open.
Supports light dismiss by default (click outside or Escape to close).

For hover-triggered overlays, use {@link HoverCard} instead.

@example
\`\`\`
<Popover label="Settings" content={<SettingsPanel />} placement="below">
  <Button label="Settings" />
</Popover>
<Popover
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  label="Filter"
  content={<FilterForm />}>
  <Button label="Filter" />
</Popover>
<Popover
  anchorRef={myButtonRef}
  label="Actions"
  content={<ActionMenu />}
  placement="below"
/>
\`\`\``,methods:[],displayName:"Popover",props:{children:{required:!1,tsType:{name:"union",raw:"ReactNode | ((props: PopoverTriggerRenderProps) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:`The trigger element. Accepts either:

**ReactNode (automatic mode):** Must contain a \`<button>\` or
\`[role="button"]\` element — the popover locates it and applies
click/keydown handlers and ARIA attributes automatically.
Components that consume \`InteractiveRoleContext\` (e.g., Token)
will render as a button automatically when placed here.

**Render function (explicit mode):** Receives \`PopoverTriggerRenderProps\`
with ref, onClick, and ARIA attributes. The consumer is responsible
for attaching these to their trigger element. Use this for custom
triggers or third-party components.

The trigger is rendered inside an anchor wrapper used for CSS anchor
positioning. The wrapper is stable (no pressed-state transforms),
preventing popover position jitter.

When \`anchorRef\` is provided, children can be omitted and the popover
attaches to the external ref element as a sibling.

@example
\`\`\`
<Popover content={...}><Button label="Open" /></Popover>
<Popover content={...}><Token label="Filter" /></Popover>
<Popover content={...}>
  {(triggerProps) => <MyCustomTrigger {...triggerProps} />}
</Popover>
\`\`\``},anchorRef:{required:!1,tsType:{name:"ReactRefObject",raw:"React.RefObject<HTMLElement>",elements:[{name:"HTMLElement"}]},description:'External ref to use as the popover anchor.\nWhen provided (and no children), the popover attaches to this element\ninstead of wrapping children. The referenced element must be a\n`<button>` or `[role="button"]` — the popover applies click/keydown\nhandlers and ARIA attributes to it directly.'},content:{required:!0,tsType:{name:"ReactNode"},description:"Content to display inside the popover."},placement:{required:!1,tsType:{name:"union",raw:"'above' | 'below' | 'start' | 'end'",elements:[{name:"literal",value:"'above'"},{name:"literal",value:"'below'"},{name:"literal",value:"'start'"},{name:"literal",value:"'end'"}]},description:`Position placement relative to the trigger.
Uses CSS anchor positioning via useLayer.
@default 'below'`,defaultValue:{value:"'below'",computed:!1}},alignment:{required:!1,tsType:{name:"union",raw:"'start' | 'center' | 'end'",elements:[{name:"literal",value:"'start'"},{name:"literal",value:"'center'"},{name:"literal",value:"'end'"}]},description:`Alignment along the placement axis.
@default 'start'`,defaultValue:{value:"'start'",computed:!1}},isOpen:{required:!1,tsType:{name:"boolean"},description:`Whether the popover is open (controlled mode).
Omit for uncontrolled behavior.`},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback fired when the popover visibility changes."},isEnabled:{required:!1,tsType:{name:"boolean"},description:`Whether the popover is enabled.
When false, trigger interactions are ignored.
@default true`,defaultValue:{value:"true",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the popover container.
Numbers are px, strings used as-is.
@default 'auto'`},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the popover dialog.
Recommended for accessibility (used as aria-label on the dialog).`},hasCloseButton:{required:!1,tsType:{name:"boolean"},description:`Whether to include a hidden close button for accessibility.
The button appears when keyboard users tab past the last element.
@default true`},closeButtonLabel:{required:!1,tsType:{name:"string"},description:`Label for the hidden close button.
@default "Close popover"`},hasAutoFocus:{required:!1,tsType:{name:"boolean"},description:"Whether to auto-focus the first focusable element when the popover opens.\nSet to `false` for inline showcases or documentation previews.\n@default true"},hasLightDismiss:{required:!1,tsType:{name:"boolean"},description:`Whether clicking outside dismisses the popover.
Set to \`false\` for surfaces that should stay open until explicitly
dismissed, like onboarding coachmarks or multi-step flows.
@default true`,defaultValue:{value:"true",computed:!1}},hasEscapeDismiss:{required:!1,tsType:{name:"boolean"},description:`Whether pressing Escape dismisses the popover.

Only takes full effect together with \`hasLightDismiss={false}\`: with
light dismiss on, the browser's native light dismiss also closes on
Escape. Set both to \`false\` for explicit-dismiss-only surfaces.
@default true`,defaultValue:{value:"true",computed:!1}},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for the popover container."}},composes:["Pick"]};export{I as P};
