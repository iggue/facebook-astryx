import{ag as t,a0 as e,a5 as D,ae as N,ax as M,a6 as be,I as oe,e as we,B as S}from"./iframe-CouMrHD9.js";import{u as Ce,D as Pe}from"./Dialog-DfIwm5BY.js";import{L as Te,b as Re}from"./LayoutContent-CUnRJKBt.js";import{L as je}from"./LayoutHeader-YRWU6082.js";import{L as De}from"./LayoutFooter-D1DtkVvz.js";import{u as Ne}from"./hooks-DKASINcB.js";import{K as Y}from"./Kbd-C1T6FQgS.js";import{c as O}from"./createStaticSource-6dLwtoO2.js";import"./preload-helper-Ct5FWWRu.js";import"./useScrollLock-D7yuEHUJ.js";import"./useFocusTrap-DCnkc9xw.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-Dl2_Pyt1.js";import"./stack.stylex-BlarxY2N.js";import"./stackItem.stylex-CgqrJM4N.js";const ie=t.createContext(null);ie.displayName="CommandPaletteContext";function le(){return t.use(ie)}const Me={list:{kORKVm:"astryx1odjw0f",kskxy:"astryxmz0i5r",kmVPX3:"astryx9epnlk",kUk6DE:"astryx98rzlu",k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kOIVth:"astryx1lsbc85",$$css:!0}};function ce({children:o,label:r="Commands",ref:a,xstyle:n,className:s,style:i,...l}){const c=le();return e.jsx("div",{ref:a,id:c?.listId,role:"listbox","aria-label":r,...D(M("command-palette-list"),N(Me.list,n),s,i),...l,children:o})}ce.displayName="CommandPaletteList";ce.__docgenInfo={description:`Scrollable results container for the command palette.
Renders as a listbox for ARIA compliance.

When used inside CommandPalette, automatically gets the correct
ID for aria-controls linking with the input.

@compositionHint Place inside CommandPalette, after CommandPaletteInput.
  Contains CommandPaletteItem and CommandPaletteGroup children.

@example
\`\`\`
<CommandPaletteList>
  <CommandPaletteItem value="home" onSelect={goHome}>
    Go Home
  </CommandPaletteItem>
</CommandPaletteList>
\`\`\``,methods:[],displayName:"CommandPaletteList",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element."},children:{required:!0,tsType:{name:"ReactNode"},description:"Command palette items, groups, empty states, etc."},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the listbox.
@default 'Commands'`,defaultValue:{value:"'Commands'",computed:!1}}},composes:["Omit"]};const q={item:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryx1txdalj",kzqmXN:"astryxh8yej3",kg3NbH:"astryxrrkdod",k8WAf4:"astryxce4md1",kaIpWk:"astryxx3sua9",kMv6JI:"astryx9ynric",kGuDYH:"astryxcr08ib",kMwMTN:"astryx1tgivj0",kWkggS:"astryxjbqb8w",kQgIW9:"astryx1gs6z28",kkrTdU:"astryx1ypdohk",k9WMMc:"astryxdpxx8g",kI3sdo:"astryx1a2a7pz",kfSwDN:"astryx87ps6o",$$css:!0},itemHover:{kHE3J0:"astryxe9uy6x",kSReZ0:"astryxyxi2l3",$$css:!0},itemHighlighted:{kWkggS:"astryx1lmrjuc",$$css:!0},itemDisabled:{kSiTet:"astryxbyyjgo",kkrTdU:"astryx1h6gzvc",$$css:!0},itemSelected:{kWkggS:"astryxgcxg3y",$$css:!0}};function de({value:o,onSelect:r,isHighlighted:a,isSelected:n,isDisabled:s=!1,children:i,ref:l,xstyle:c,className:m,style:g,...u}){const p=le(),P=Ce()?.isInline===!0,k=t.useRef(null),b=t.useRef(!1),h=t.useMemo(()=>p?.selectableItems.findIndex(R=>R.value===o)??-1,[p?.selectableItems,o]),y=a??(p?p.highlightedIndex===h&&h>=0:!1),B=n??(p?p.value===o:!1);t.useEffect(()=>{const R=P&&!b.current;b.current=!0,!R&&y&&k.current&&k.current.scrollIntoView?.({block:"nearest"})},[y,P]);const _=t.useCallback(()=>{s||(r?.(o),p&&(p.selectItem(o),p.onClose()))},[s,o,r,p]),T=t.useCallback(()=>{s||!p||h<0||p.setHighlightedIndex(h)},[s,h,p]);return e.jsx("div",{ref:be(l,k),id:p&&h>=0?p.getItemId(h):void 0,role:"option","aria-selected":B,"aria-disabled":s||void 0,"data-value":o,onClick:_,onMouseEnter:T,...D(M("command-palette-item"),N(q.item,!s&&q.itemHover,y&&q.itemHighlighted,B&&q.itemSelected,s&&q.itemDisabled,c),m,g),...u,children:i})}de.displayName="CommandPaletteItem";de.__docgenInfo={description:`A selectable item in the command palette.
Accepts arbitrary children for full rendering control.

When used inside CommandPalette, registers with context for
keyboard navigation and selection. Can also be used
standalone with explicit isHighlighted/isSelected props.

@compositionHint Place inside CommandPaletteList or CommandPaletteGroup.

@example
\`\`\`
<CommandPaletteItem value="settings" onSelect={() => navigate('/settings')}>
  Settings
</CommandPaletteItem>
\`\`\``,methods:[],displayName:"CommandPaletteItem",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element."},value:{required:!0,tsType:{name:"string"},description:"Unique value for identification and selection."},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when this item is selected (via click or Enter)."},isHighlighted:{required:!1,tsType:{name:"boolean"},description:`Whether this item is visually highlighted (keyboard focus).
When omitted inside CommandPalette, derived from context.
@default false`},isSelected:{required:!1,tsType:{name:"boolean"},description:`Whether this item is currently selected (picker mode).
@default false`},isDisabled:{required:!1,tsType:{name:"boolean"},description:`Whether the item is disabled.
@default false`,defaultValue:{value:"false",computed:!1}},children:{required:!0,tsType:{name:"ReactNode"},description:"Item content. Fully custom — render icons, descriptions, shortcuts, etc."}},composes:["Omit"]};const He={group:{k1xSpc:"astryx78zum5",kXwgrk:"astryxdt5ytf",kOIVth:"astryx1lsbc85",k8WAf4:"astryxu0wf1k",$$css:!0}};function me({heading:o,children:r,ref:a,xstyle:n,className:s,style:i,...l}){return e.jsxs("div",{ref:a,role:"group","aria-label":o,...D(M("command-palette-group"),N(He.group,n),s,i),...l,children:[e.jsx("div",{"aria-hidden":"true",className:"astryxrrkdod astryxu0wf1k astryx9ynric astryx141an7d astryx1ltkj2j astryxv1l7n4 astryx87ps6o",children:o}),r]})}me.displayName="CommandPaletteGroup";me.__docgenInfo={description:`Visual grouping for command palette items with a heading label.

Heading style matches DropdownMenu section headings:
supporting-size (12px), secondary color, no uppercase/letterSpacing.

@compositionHint Place inside CommandPaletteList.
  Contains CommandPaletteItem children.

@example
\`\`\`
<CommandPaletteGroup heading="Navigation">
  <CommandPaletteItem value="home" onSelect={goHome}>
    Home
  </CommandPaletteItem>
</CommandPaletteGroup>
\`\`\``,methods:[],displayName:"CommandPaletteGroup",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element."},heading:{required:!0,tsType:{name:"string"},description:"Group heading text."},children:{required:!0,tsType:{name:"ReactNode"},description:"Items within this group."}},composes:["Omit"]};const Ee={wrapper:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryx1txdalj",kg3NbH:"astryx1pzlopt",k8WAf4:"astryx8o8v82",kmuXW:"astryx2lah0s",$$css:!0}};function ee({value:o,onValueChange:r,placeholder:a="Search...",hasAutoFocus:n=!0,endContent:s,onChange:i,onKeyDown:l,ref:c,xstyle:m,...g}){const u=le(),p=Ce(),w=t.useRef(null),P=o??u?.search,k=r??u?.setSearch,b=n&&p?.isInline!==!0;t.useEffect(()=>{b&&w.current&&requestAnimationFrame(()=>{w.current?.focus()})},[b]);const h=t.useCallback(y=>{l?.(y),!y.defaultPrevented&&u?.onKeyDown(y)},[u,l]);return e.jsxs("div",{...D(M("command-palette-input"),N(Ee.wrapper,m)),children:[e.jsx("span",{className:"astryx78zum5 astryx6s0dn4 astryx2lah0s astryxv1l7n4",children:e.jsx(oe,{icon:"search",size:"sm",color:"inherit"})}),e.jsx("input",{ref:be(c,w),type:"text",role:"combobox","aria-expanded":u?.isOpen??!0,"aria-autocomplete":"list","aria-controls":u?.listId,"aria-activedescendant":u&&u.highlightedIndex>=0?u.getItemId(u.highlightedIndex):void 0,placeholder:a,value:P,"data-autofocus":b||void 0,onChange:y=>{k?.(y.target.value),i?.(y)},onKeyDown:h,className:"astryx98rzlu astryxeuugli astryx1gs6z28 astryx1a2a7pz astryxjbqb8w astryx1tgivj0 astryx9ynric astryxjm74w1 astryx6pjikd astryxw6l6zx astryx1717udv astryxeyghm5",...g}),(u?.isBusy||s)&&e.jsxs("span",{className:"astryx78zum5 astryx6s0dn4 astryxzye2dw astryx2lah0s",children:[u?.isBusy&&e.jsx("span",{className:"astryx78zum5 astryx6s0dn4 astryx2lah0s astryxv1l7n4 astryx1hc1fzr astryx19991ni astryxjd9b36 astryx5h36tt astryx4itv7f",children:e.jsx(we,{size:"sm"})}),s]})," "]})}ee.displayName="CommandPaletteInput";ee.__docgenInfo={description:`Search input for the command palette.

Renders a search icon and a text input. Auto-focuses when mounted
so users can start typing immediately.

When used inside CommandPalette, automatically wires to the
context for search state and keyboard navigation (via useCombobox).
Can also be used standalone with explicit value/onValueChange props.

@compositionHint Place as the first child of CommandPalette.

@example
\`\`\`
<CommandPalette isOpen={isOpen} onOpenChange={setIsOpen}>
  <CommandPaletteInput placeholder="Search commands..." />
</CommandPalette>
\`\`\``,methods:[],displayName:"CommandPaletteInput",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Ref forwarded to the input element (for focus management)."},value:{required:!1,tsType:{name:"string"},description:`The current search value.
When omitted inside CommandPalette, reads from context.`},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:`Called when the search value changes.
When omitted inside CommandPalette, writes to context.`},placeholder:{required:!1,tsType:{name:"string"},description:`Placeholder text for the input.
@default 'Search...'`,defaultValue:{value:"'Search...'",computed:!1}},hasAutoFocus:{required:!1,tsType:{name:"boolean"},description:`Whether to auto-focus the input when mounted.
@default true`,defaultValue:{value:"true",computed:!1}},endContent:{required:!1,tsType:{name:"ReactNode"},description:`Content rendered at the trailing end of the input, after the spinner.
Use for clear buttons, keyboard shortcuts, or other trailing actions.
The spinner (when busy) appears immediately before this content with a 4px gap.`},onChange:{required:!1,tsType:{name:"ReactChangeEventHandler",raw:"React.ChangeEventHandler<HTMLInputElement>",elements:[{name:"HTMLInputElement"}]},description:"Native onChange handler for the input element."}},composes:["Omit"]};const qe={footer:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryx18g69wz",kg3NbH:"astryx1pzlopt",k8WAf4:"astryxce4md1",kmuXW:"astryx2lah0s",kMv6JI:"astryx9ynric",kGuDYH:"astryx141an7d",kLWn49:"astryx1ltkj2j",kMwMTN:"astryxv1l7n4",$$css:!0}};function te({children:o,ref:r,xstyle:a,className:n,style:s,...i}){return e.jsx("div",{ref:r,...D(M("command-palette-footer"),N(qe.footer,a),n,s),...i,children:o??e.jsxs(e.Fragment,{children:[e.jsxs("span",{className:"astryx78zum5 astryx6s0dn4 astryxzye2dw",children:[e.jsx(Y,{keys:"up"}),e.jsx(Y,{keys:"down"}),"Navigate"]}),e.jsxs("span",{className:"astryx78zum5 astryx6s0dn4 astryxzye2dw",children:[e.jsx(Y,{keys:"enter"}),"Select"]}),e.jsxs("span",{className:"astryx78zum5 astryx6s0dn4 astryxzye2dw",children:[e.jsx(Y,{keys:"escape"}),"Close"]})]})})}te.displayName="CommandPaletteFooter";te.__docgenInfo={description:`Footer for the command palette showing keyboard navigation hints.

When no children are provided, renders default hints using Kbd
for arrow keys, Enter to select, and Escape to close.

@compositionHint Pass to CommandPalette's \`footer\` slot.

@example
\`\`\`
<CommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  input={<CommandPaletteInput />}
  footer={<CommandPaletteFooter />}>
  <CommandPaletteList>...</CommandPaletteList>
</CommandPalette>
\`\`\``,methods:[],displayName:"CommandPaletteFooter",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the footer element."},children:{required:!1,tsType:{name:"ReactNode"},description:`Footer content. When provided, renders custom content instead of default hints.
Custom children inherit the footer font treatment (supporting/12px, secondary color).
When omitted, renders default keyboard navigation hints using Kbd.`}},composes:["Omit"]};const ze={empty:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kjj79g:"astryxl56j7k",k8WAf4:"astryxmfvnks",kg3NbH:"astryx1pzlopt",kMv6JI:"astryx9ynric",kGuDYH:"astryx141an7d",kLWn49:"astryx1ltkj2j",kMwMTN:"astryxv1l7n4",k9WMMc:"astryx2b8uid",$$css:!0}};function Q({ref:o,children:r,xstyle:a,className:n,style:s,...i}){return e.jsx("div",{ref:o,...D(M("command-palette-empty"),N(ze.empty,a),n,s),...i,children:r})}Q.displayName="CommandPaletteEmpty";Q.__docgenInfo={description:`Empty state for the command palette list area.

Rendered automatically by CommandPalette in two situations:
- \`emptyBootstrapText\`: no search term and bootstrap() returns nothing
- \`emptySearchText\`: a search query returned no results

Can also be composed manually inside a custom render function.

@example
\`\`\`
<CommandPalette
  emptyBootstrapText={<CommandPaletteEmpty>Start typing to search</CommandPaletteEmpty>}
  emptySearchText={<CommandPaletteEmpty>No results found</CommandPaletteEmpty>}
  searchSource={source}
/>
\`\`\``,methods:[],displayName:"CommandPaletteEmpty",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:""},children:{required:!0,tsType:{name:"ReactNode"},description:"The message or content to display."}},composes:["Omit"]};function Z(o){const r=o.auxiliaryData;return typeof r?.group=="string"?r.group:void 0}function Ae(o){if(!o.some(l=>Z(l)!=null))return o.map(l=>({value:l.id,label:l.label}));const a=[],n=new Map,s=[];for(const l of o){const c=Z(l);c!=null?(n.has(c)||(a.push(c),n.set(c,[])),n.get(c)?.push(l)):s.push(l)}const i=[];for(const l of a)for(const c of n.get(l)??[])i.push({value:c.id,label:c.label});for(const l of s)i.push({value:l.id,label:l.label});return i}function Fe({items:o,value:r,renderItem:a}){const n=m=>e.jsx(de,{value:m.id,children:a?a(m,m.id===r):m.label},m.id);if(!o.some(m=>Z(m)!=null))return e.jsx(e.Fragment,{children:o.map(n)});const i=[],l=new Map,c=[];for(const m of o){const g=Z(m);g!=null?(l.has(g)||(i.push(g),l.set(g,[])),l.get(g)?.push(m)):c.push(m)}return e.jsxs(e.Fragment,{children:[i.map(m=>e.jsx(me,{heading:m,children:(l.get(m)??[]).map(n)},m)),c.map(n)]})}function x({ref:o,isOpen:r,isInline:a,onOpenChange:n,searchSource:s,input:i,footer:l,renderItem:c,emptySearchText:m="No results",emptyBootstrapText:g="Type to search",value:u,onValueChange:p,label:w="Command palette",width:P=640,maxHeight:k=480}){const b=t.useId(),[h,y]=t.useState(""),[B,_]=t.useState(""),[T,R]=t.useState([]),[Se,ue]=t.useTransition(),[pe,he]=t.useOptimistic(h),[v,ae]=t.useOptimistic(T),ye=Se,fe=t.useRef(0),C=u??B,K=t.useCallback(d=>{u===void 0&&_(d),p?.(d)},[u,p]),j=t.useMemo(()=>Ae(v),[v]),I=t.useCallback(()=>{y(""),R([]),u===void 0&&_(""),s.cancel?.(),n(!1)},[n,s,u]),H=t.useCallback(d=>{K(d)},[K]),f=Ne({selectableItems:j,value:C,isOpen:!0,onOpen:()=>{},onClose:()=>{},onSelect:d=>{H(d),I()},listboxId:b}),X=t.useCallback(d=>{s.cancel?.();const E=++fe.current;ue(async()=>{const ne=d==="";if(!ne&&T.length>0){const J=d.toLowerCase().trim();ae(T.filter(re=>re.label.toLowerCase().includes(J)))}const Oe=ne?s.bootstrap():s.search(d),se=await Promise.resolve(Oe);if(fe.current===E&&(y(d),ae(se),R(se),ne&&C!=null&&C!=="")){const J=se.findIndex(re=>re.id===C);J>=0&&f.setHighlightedIndex(J)}})},[s,T,ue,C,f,ae]),ge=t.useRef(X);ge.current=X,t.useEffect(()=>{r&&ge.current("")},[r]);const xe=t.useCallback(d=>{if(d.key==="Escape"){d.preventDefault(),I();return}if(d.key==="Enter"){if(d.preventDefault(),f.highlightedIndex>=0&&f.highlightedIndex<j.length){const E=j[f.highlightedIndex];E&&!E.disabled&&(H(E.value),I())}return}d.key!==" "&&f.onKeyDown(d)},[f,I,j,H]),ke=t.useMemo(()=>({search:pe,setSearch:d=>{he(d),X(d)},value:C,setValue:K,listId:b,highlightedIndex:f.highlightedIndex,setHighlightedIndex:f.setHighlightedIndex,getItemId:f.getItemId,selectableItems:j,searchResults:v,selectItem:H,onKeyDown:xe,onClose:I,isOpen:r,isBusy:ye}),[pe,he,X,C,K,b,f.highlightedIndex,f.setHighlightedIndex,f.getItemId,j,v,H,xe,I,r,ye]),ve=h===""&&v.length===0,Ie=h!==""&&v.length===0;let U;return ve?U=e.jsx(Q,{children:g}):Ie?U=e.jsx(Q,{children:m}):U=e.jsx(Fe,{items:v,value:C,renderItem:c}),e.jsx(Pe,{ref:o,isOpen:r,isInline:a,onOpenChange:d=>{d?n(!0):I()},width:P,maxHeight:k,purpose:"info","aria-label":w,children:e.jsx(ie,{value:ke,children:e.jsx(Te,{defaultHasDividers:!0,header:e.jsx(je,{hasDivider:!0,padding:0,children:i??e.jsx(ee,{})}),content:e.jsx(Re,{padding:0,children:e.jsx(ce,{children:U})}),footer:e.jsx(De,{hasDivider:!0,padding:0,children:l??e.jsx(te,{})})})})})}x.displayName="CommandPalette";x.__docgenInfo={description:`Command palette root component.

Uses \`searchSource\` for all search logic — same interface as Typeahead.
For static lists, use \`createStaticSource\` from \`@astryxdesign/core/Typeahead\`.

Keyboard navigation is handled by \`useCombobox\` from Selector,
ensuring consistent arrow key, Home/End, Enter, and Escape behavior
across all combobox-pattern components.

Input and footer are rendered by default — only pass them to replace the defaults.

@compositionHint
  - \`input\` slot: CommandPaletteInput (default)
  - \`footer\` slot: CommandPaletteFooter (default)
  - \`renderItem(item, isSelected)\`: custom per-item content (grouping preserved)

@example
\`\`\`
<CommandPalette
  isOpen={isOpen}
  onOpenChange={setIsOpen}
  searchSource={createStaticSource(commands)}
/>
\`\`\``,methods:[],displayName:"CommandPalette",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDialogElement>",elements:[{name:"HTMLDialogElement"}]},description:""},isOpen:{required:!0,tsType:{name:"boolean"},description:"Whether the command palette is open."},isInline:{required:!1,tsType:{name:"boolean"},description:`Renders command palette content inline without modal behavior.
Suppresses input auto-focus and initial highlighted-item auto-scroll.
For documentation previews and showcases only.
@default false`},onOpenChange:{required:!0,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Called when the command palette visibility changes."},searchSource:{required:!0,tsType:{name:"SearchSource",elements:[{name:"T"}],raw:"SearchSource<T>"},description:"Search source providing items. Implements `search(query)` and `bootstrap()`.\nSame interface as Typeahead's searchSource.\nUse `createStaticSource` for simple static lists."},input:{required:!1,tsType:{name:"ReactNode"},description:`The search input slot.
@default <CommandPaletteInput />`},footer:{required:!1,tsType:{name:"ReactNode"},description:`The footer slot.
@default <CommandPaletteFooter />`},renderItem:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: T, isSelected: boolean) => ReactNode",signature:{arguments:[{type:{name:"T"},name:"item"},{type:{name:"boolean"},name:"isSelected"}],return:{name:"ReactNode"}}},description:"Per-item render function. Receives the item and whether it is currently selected.\nAuto-grouping by `auxiliaryData.group` is preserved.\nWhen omitted, renders each item's `label` text."},emptySearchText:{required:!1,tsType:{name:"ReactNode"},description:`Content shown when a search query returns no results.
@default 'No results'`,defaultValue:{value:"'No results'",computed:!1}},emptyBootstrapText:{required:!1,tsType:{name:"ReactNode"},description:`Content shown when there is no search query and bootstrap() returns nothing.
@default 'Type to search'`,defaultValue:{value:"'Type to search'",computed:!1}},value:{required:!1,tsType:{name:"string"},description:"Controlled selected value (for picker mode)."},onValueChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"Called when the selected value changes."},label:{required:!1,tsType:{name:"string"},description:`Accessible label for the command palette dialog.
@default 'Command palette'`,defaultValue:{value:"'Command palette'",computed:!1}},width:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Width of the command palette dialog.
@default 640`,defaultValue:{value:"640",computed:!1}},maxHeight:{required:!1,tsType:{name:"union",raw:"number | string",elements:[{name:"number"},{name:"string"}]},description:`Maximum height of the command palette dialog.
@default 480`,defaultValue:{value:"480",computed:!1}}},composes:["Omit"]};const tt={title:"Core/CommandPalette",component:x,tags:["autodocs"]},z={render:function(){const[r,a]=t.useState(!1),n=t.useMemo(()=>O([{id:"home",label:"Home"},{id:"settings",label:"Settings"},{id:"profile",label:"Profile"},{id:"dashboard",label:"Dashboard"},{id:"help",label:"Help"}]),[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{label:"Open Command Palette",onClick:()=>a(!0)}),e.jsx(x,{isOpen:r,onOpenChange:a,searchSource:n})]})}},A={render:function(){const[r,a]=t.useState(!1),n=t.useMemo(()=>O([{id:"home",label:"Home",auxiliaryData:{group:"Navigation"}},{id:"settings",label:"Settings",auxiliaryData:{group:"Navigation"}},{id:"profile",label:"Profile",auxiliaryData:{group:"Navigation"}},{id:"new-file",label:"New File",auxiliaryData:{group:"Actions"}},{id:"save",label:"Save",auxiliaryData:{group:"Actions"}},{id:"export",label:"Export",auxiliaryData:{group:"Actions"}}]),[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{label:"Open Grouped",onClick:()=>a(!0)}),e.jsx(x,{isOpen:r,onOpenChange:a,searchSource:n})]})}},F={render:function(){const[r,a]=t.useState(!1),n=[{id:"dashboard",label:"Go to Dashboard",auxiliaryData:{icon:"menu",group:"Navigation"}},{id:"settings",label:"Open Settings",auxiliaryData:{icon:"wrench",group:"Navigation",shortcut:"⌘,"}},{id:"profile",label:"View Profile",auxiliaryData:{icon:"info",group:"Navigation"}},{id:"dark-mode",label:"Toggle Dark Mode",auxiliaryData:{group:"Actions",keywords:["theme","appearance"]}},{id:"new-file",label:"Create New File",auxiliaryData:{group:"Actions",shortcut:"⌘N"}},{id:"search",label:"Search Files",auxiliaryData:{icon:"search",group:"Actions",shortcut:"⌘P"}}],s=t.useMemo(()=>O(n,{keywords:i=>i.auxiliaryData?.keywords??[]}),[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{label:"Open Rich Palette",onClick:()=>a(!0)}),e.jsx(x,{isOpen:r,onOpenChange:a,searchSource:s,renderItem:i=>e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8,flex:1},children:[i.auxiliaryData?.icon&&e.jsx(oe,{icon:i.auxiliaryData.icon,size:"sm"}),e.jsx("span",{style:{flex:1},children:i.label}),i.auxiliaryData?.shortcut&&e.jsx("span",{style:{fontSize:12,opacity:.5},children:i.auxiliaryData.shortcut})]})})]})}},L={render:function(){const[r,a]=t.useState(!1),[n,s]=t.useState("light"),i=t.useMemo(()=>O([{id:"light",label:"Light"},{id:"dark",label:"Dark"},{id:"system",label:"System"}]),[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{label:`Theme: ${n}`,onClick:()=>a(!0)}),e.jsx(x,{isOpen:r,onOpenChange:a,searchSource:i,value:n,onValueChange:l=>{s(l),a(!1)},renderItem:(l,c)=>e.jsxs("span",{style:{display:"flex",alignItems:"center",gap:8,flex:1},children:[e.jsx("span",{style:{flex:1},children:l.label}),c&&e.jsx(oe,{icon:"check",size:"sm"})]})})]})}},W={render:function(){const[r,a]=t.useState(!1),n=t.useMemo(()=>{let s=null;return{cancel(){s?.abort()},async search(i){return s?.abort(),s=new AbortController,await new Promise(c=>setTimeout(c,400)),[{id:"readme",label:"README.md"},{id:"package",label:"package.json"},{id:"tsconfig",label:"tsconfig.json"},{id:"index",label:"src/index.ts"},{id:"app",label:"src/App.tsx"}].filter(c=>c.label.toLowerCase().includes(i.toLowerCase()))},bootstrap(){return[]}}},[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{label:"Open File Search",onClick:()=>a(!0)}),e.jsx(x,{isOpen:r,onOpenChange:a,searchSource:n,input:e.jsx(ee,{placeholder:"Search files..."}),emptyBootstrapText:"Type a filename to search",emptySearchText:"No files found"})]})}},G={render:function(){const[r,a]=t.useState(!1),n=[{id:"home",label:"Home"},{id:"dark-mode",label:"Toggle Dark Mode",auxiliaryData:{aliases:["theme","appearance"]}},{id:"font-size",label:"Change Font Size",auxiliaryData:{aliases:["text","zoom"]}}],s=t.useMemo(()=>O(n,{keywords:i=>i.auxiliaryData?.aliases??[]}),[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{label:"Open (try 'theme')",onClick:()=>a(!0)}),e.jsx(x,{isOpen:r,onOpenChange:a,searchSource:s})]})}},$={render:function(){const[r,a]=t.useState(!1),n=["Files","Actions","Navigation","Settings","Recent"],s=Array.from({length:50},(l,c)=>({id:`item-${c}`,label:`Item ${c+1}`,auxiliaryData:{group:n[c%n.length]}})),i=t.useMemo(()=>O(s),[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{label:"Open (50 items)",onClick:()=>a(!0)}),e.jsx(x,{isOpen:r,onOpenChange:a,searchSource:i})]})}},V={render:function(){const[r,a]=t.useState(!1),n=t.useMemo(()=>O([{id:"home",label:"Home"},{id:"settings",label:"Settings"}]),[]);return e.jsxs(e.Fragment,{children:[e.jsx(S,{label:"Open",onClick:()=>a(!0)}),e.jsx(x,{isOpen:r,onOpenChange:a,searchSource:n,footer:e.jsx(te,{children:e.jsx("span",{children:"Pro tip: use ⌘K to open anywhere"})})})]})}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo(() => createStaticSource([{
      id: 'home',
      label: 'Home'
    }, {
      id: 'settings',
      label: 'Settings'
    }, {
      id: 'profile',
      label: 'Profile'
    }, {
      id: 'dashboard',
      label: 'Dashboard'
    }, {
      id: 'help',
      label: 'Help'
    }]), []);
    return <>
        <Button label="Open Command Palette" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...z.parameters?.docs?.source},description:{story:"Simplest case — no input/footer/renderItem needed.",...z.parameters?.docs?.description}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo(() => createStaticSource([{
      id: 'home',
      label: 'Home',
      auxiliaryData: {
        group: 'Navigation'
      }
    }, {
      id: 'settings',
      label: 'Settings',
      auxiliaryData: {
        group: 'Navigation'
      }
    }, {
      id: 'profile',
      label: 'Profile',
      auxiliaryData: {
        group: 'Navigation'
      }
    }, {
      id: 'new-file',
      label: 'New File',
      auxiliaryData: {
        group: 'Actions'
      }
    }, {
      id: 'save',
      label: 'Save',
      auxiliaryData: {
        group: 'Actions'
      }
    }, {
      id: 'export',
      label: 'Export',
      auxiliaryData: {
        group: 'Actions'
      }
    }]), []);
    return <>
        <Button label="Open Grouped" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...A.parameters?.docs?.source},description:{story:"Groups detected automatically from auxiliaryData.group. No custom rendering needed.",...A.parameters?.docs?.description}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const commands: RichCommand[] = [{
      id: 'dashboard',
      label: 'Go to Dashboard',
      auxiliaryData: {
        icon: 'menu',
        group: 'Navigation'
      }
    }, {
      id: 'settings',
      label: 'Open Settings',
      auxiliaryData: {
        icon: 'wrench',
        group: 'Navigation',
        shortcut: '⌘,'
      }
    }, {
      id: 'profile',
      label: 'View Profile',
      auxiliaryData: {
        icon: 'info',
        group: 'Navigation'
      }
    }, {
      id: 'dark-mode',
      label: 'Toggle Dark Mode',
      auxiliaryData: {
        group: 'Actions',
        keywords: ['theme', 'appearance']
      }
    }, {
      id: 'new-file',
      label: 'Create New File',
      auxiliaryData: {
        group: 'Actions',
        shortcut: '⌘N'
      }
    }, {
      id: 'search',
      label: 'Search Files',
      auxiliaryData: {
        icon: 'search',
        group: 'Actions',
        shortcut: '⌘P'
      }
    }];
    const source = useMemo(() => createStaticSource(commands, {
      keywords: item => item.auxiliaryData?.keywords ?? []
    }), []);
    return <>
        <Button label="Open Rich Palette" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} renderItem={(item: RichCommand) => <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: 1
      }}>
              {item.auxiliaryData?.icon && <Icon icon={item.auxiliaryData.icon} size="sm" />}
              <span style={{
          flex: 1
        }}>{item.label}</span>
              {item.auxiliaryData?.shortcut && <span style={{
          fontSize: 12,
          opacity: 0.5
        }}>
                  {item.auxiliaryData.shortcut}
                </span>}
            </span>} />
      </>;
  }
}`,...F.parameters?.docs?.source},description:{story:`Custom item content via renderItem — icons and shortcuts.
Grouping remains automatic via auxiliaryData.group.`,...F.parameters?.docs?.description}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState('light');
    const source = useMemo(() => createStaticSource([{
      id: 'light',
      label: 'Light'
    }, {
      id: 'dark',
      label: 'Dark'
    }, {
      id: 'system',
      label: 'System'
    }]), []);
    return <>
        <Button label={\`Theme: \${theme}\`} onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} value={theme} onValueChange={v => {
        setTheme(v);
        setIsOpen(false);
      }} renderItem={(item, isSelected) => <span style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        flex: 1
      }}>
              <span style={{
          flex: 1
        }}>{item.label}</span>
              {isSelected && <Icon icon="check" size="sm" />}
            </span>} />
      </>;
  }
}`,...L.parameters?.docs?.source},description:{story:"Selection persists across opens. isSelected passed to renderItem.",...L.parameters?.docs?.description}}};W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo<SearchSource>(() => {
      let controller: AbortController | null = null;
      return {
        cancel() {
          controller?.abort();
        },
        async search(query: string) {
          controller?.abort();
          controller = new AbortController();
          await new Promise(r => setTimeout(r, 400));
          const all = [{
            id: 'readme',
            label: 'README.md'
          }, {
            id: 'package',
            label: 'package.json'
          }, {
            id: 'tsconfig',
            label: 'tsconfig.json'
          }, {
            id: 'index',
            label: 'src/index.ts'
          }, {
            id: 'app',
            label: 'src/App.tsx'
          }];
          return all.filter(f => f.label.toLowerCase().includes(query.toLowerCase()));
        },
        bootstrap() {
          return [];
        }
      };
    }, []);
    return <>
        <Button label="Open File Search" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} input={<CommandPaletteInput placeholder="Search files..." />} emptyBootstrapText="Type a filename to search" emptySearchText="No files found" />
      </>;
  }
}`,...W.parameters?.docs?.source},description:{story:"Server-side search. Spinner shown while pending. Empty state on no results.",...W.parameters?.docs?.description}}};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const commands: SearchableItem<{
      aliases?: string[];
    }>[] = [{
      id: 'home',
      label: 'Home'
    }, {
      id: 'dark-mode',
      label: 'Toggle Dark Mode',
      auxiliaryData: {
        aliases: ['theme', 'appearance']
      }
    }, {
      id: 'font-size',
      label: 'Change Font Size',
      auxiliaryData: {
        aliases: ['text', 'zoom']
      }
    }];
    const source = useMemo(() => createStaticSource(commands, {
      keywords: item => item.auxiliaryData?.aliases ?? []
    }), []);
    return <>
        <Button label="Open (try 'theme')" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...G.parameters?.docs?.source},description:{story:'Type "theme" or "appearance" to find "Toggle Dark Mode".',...G.parameters?.docs?.description}}};$.parameters={...$.parameters,docs:{...$.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const groups = ['Files', 'Actions', 'Navigation', 'Settings', 'Recent'];
    const items = Array.from({
      length: 50
    }, (_, i) => ({
      id: \`item-\${i}\`,
      label: \`Item \${i + 1}\`,
      auxiliaryData: {
        group: groups[i % groups.length]
      }
    }));
    const source = useMemo(() => createStaticSource(items), []);
    return <>
        <Button label="Open (50 items)" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} />
      </>;
  }
}`,...$.parameters?.docs?.source},description:{story:`50 items across 5 groups. Verifies the list scrolls within the dialog
rather than expanding it past maxHeight.`,...$.parameters?.docs?.description}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  render: function Render() {
    const [isOpen, setIsOpen] = useState(false);
    const source = useMemo(() => createStaticSource([{
      id: 'home',
      label: 'Home'
    }, {
      id: 'settings',
      label: 'Settings'
    }]), []);
    return <>
        <Button label="Open" onClick={() => setIsOpen(true)} />
        <CommandPalette isOpen={isOpen} onOpenChange={setIsOpen} searchSource={source} footer={<CommandPaletteFooter>
              <span>Pro tip: use ⌘K to open anywhere</span>
            </CommandPaletteFooter>} />
      </>;
  }
}`,...V.parameters?.docs?.source},description:{story:"Replacing the footer with custom content.",...V.parameters?.docs?.description}}};const at=["Default","AutoGrouped","WithRenderItem","Picker","AsyncSearch","WithKeywords","ManyItems","CustomFooter"];export{W as AsyncSearch,A as AutoGrouped,V as CustomFooter,z as Default,$ as ManyItems,L as Picker,G as WithKeywords,F as WithRenderItem,at as __namedExportsOrder,tt as default};
