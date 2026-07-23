import{ag as p,Q as _,a0 as e,ae as M,a5 as B,ax as L}from"./iframe-C8XmfRPK.js";import{C as a}from"./Card-ByB7PYS6.js";import{V as h}from"./VStack-D9ybmAxh.js";import"./preload-helper-Ct5FWWRu.js";import"./container.stylex-uilBL6DE.js";import"./padding.stylex-Dl2_Pyt1.js";import"./Stack-Co7vHO3y.js";import"./stack.stylex-BlarxY2N.js";const R=p.createContext(null);R.displayName="CollapsibleGroupContext";const $=p.createContext(null);$.displayName="CollapsibleGroupPresentationContext";function K(t){const{isCollapsible:i,value:l}=t,o=p.use(R),n=o!=null&&l!=null,r=i===!0?{}:i||null,C=r!=null,[b,f]=p.useState(()=>n?!0:r?.isOpen!==void 0?r.isOpen:r?.defaultIsOpen??!0);let u;return n&&l!=null?u=o.isOpen(l):r?.isOpen!==void 0?u=r.isOpen:u=b,{isEnabled:C,isOpen:u,toggle:()=>{n&&l!=null?o.toggle(l):r?.onOpenChange?r.onOpenChange(!u):f(j=>!j)}}}const S={root:{kzqmXN:"astryxh8yej3",$$css:!0},trigger:{kB7OPa:"astryx9f619",k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kjj79g:"astryx1qughib",kzqmXN:"astryxh8yej3",kkrTdU:"astryx1ypdohk",kMv6JI:"astryx9ynric",kGuDYH:"astryx18juvz8",k63SB2:"astryx2mo6ok",kMwMTN:"astryx1tgivj0",k9WMMc:"astryx1yc453h",k8WAf4:"astryxt970qd",$$css:!0},contentHidden:{k1xSpc:"astryx1s85apg",$$css:!0},content:{kLKAdn:"astryxfsso4q",$$css:!0},divided:{kEafiO:"astryx11xkdxz astryx1g31smg",kPef9Z:"astryx13fuv20",kLZC3w:"astryx1pc3f07",$$css:!0}},v={triggerCompact:{k8WAf4:"astryxu0wf1k",kLKAdn:null,kGO01o:null,$$css:!0},triggerBalanced:{k8WAf4:"astryxce4md1",kLKAdn:null,kGO01o:null,$$css:!0},triggerSpacious:{k8WAf4:"astryx8o8v82",kLKAdn:null,kGO01o:null,$$css:!0},contentCompact:{kGO01o:"astryxy143xn",$$css:!0},contentBalanced:{kGO01o:"astryx1wesfrj",$$css:!0},contentSpacious:{kGO01o:"astryxvmdzux",$$css:!0}},X={compact:v.triggerCompact,balanced:v.triggerBalanced,spacious:v.triggerSpacious},Z={compact:v.contentCompact,balanced:v.contentBalanced,spacious:v.contentSpacious};function s({trigger:t,children:i,defaultIsOpen:l,isOpen:o,onOpenChange:n,value:r,ref:C,xstyle:b,className:f,style:u,...k}){const j=o!==void 0?{isOpen:o,onOpenChange:n}:{defaultIsOpen:l??!0,onOpenChange:n},{isOpen:y,toggle:W}=K({isCollapsible:j,value:r}),x=p.use($),d=x!=null&&x.dividers!=="none",g=x?.density??null,q=_("chevronDown");return e.jsxs("div",{ref:C,...B(L("collapsible",{dividers:d?x.dividers:void 0,density:g??void 0}),M(S.root,d&&S.divided,b),f,u),...k,children:[e.jsxs("button",{type:"button",onClick:W,"aria-expanded":y,...M(S.trigger,g!=null&&X[g]),children:[e.jsx("span",{className:"astryx1b2iylo astryxwgcxoh",children:t}),e.jsx("span",{...{0:{className:"astryx3nfvp2 astryx6s0dn4 astryxl56j7k astryx2lah0s astryx11xpdln astryxuedmi6 astryxlr8y92 astryxv9yike astryx7p49u4"},1:{className:"astryx3nfvp2 astryx6s0dn4 astryxl56j7k astryx2lah0s astryx11xpdln astryxuedmi6 astryxlr8y92 astryxv9yike astryx19jd1h0"}}[!!y<<0],children:q})]}),e.jsx("div",{...M(S.content,g!=null&&Z[g],!y&&S.contentHidden),children:x!=null?e.jsx($,{value:null,children:i}):i})]})}s.displayName="Collapsible";s.__docgenInfo={description:`A primitive that makes any content collapsible.

Renders a trigger area (always visible) with a chevron indicator,
and a content area that toggles visibility on click.
Handles its own state by default, or defers to CollapsibleGroup
when a \`value\` prop is provided and a group is present.

Use inside Card for elevated collapsible sections.
Wrap multiple instances in CollapsibleGroup for accordion behavior.

@example
\`\`\`
<Collapsible trigger="Details">
  <Text type="body">Collapsible content</Text>
</Collapsible>
<Card>
  <Collapsible trigger="Settings">
    <SettingsForm />
  </Collapsible>
</Card>
<CollapsibleGroup type="single" defaultValue="general">
  <VStack gap={2}>
    <Card>
      <Collapsible trigger="General" value="general">
        <GeneralSettings />
      </Collapsible>
    </Card>
    <Card>
      <Collapsible trigger="Advanced" value="advanced">
        <AdvancedSettings />
      </Collapsible>
    </Card>
  </VStack>
</CollapsibleGroup>
\`\`\``,methods:[],displayName:"Collapsible",props:{xstyle:{required:!1,tsType:{name:"StyleXStyles"},description:"StyleX styles created via `stylex.create()`. Merged with the component's\nbase styles inside a single `stylex.props()` call for optimal deduplication.\n\n@example\n```\nconst overrides = stylex.create({ root: { marginBottom: 8 } });\n<Component xstyle={overrides.root} />\n```"},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLDivElement>",elements:[{name:"HTMLDivElement"}]},description:"Ref forwarded to the root element"},trigger:{required:!0,tsType:{name:"ReactNode"},description:`Content shown in the trigger area (always visible).
Rendered inside a button with aria-expanded and a chevron indicator.`},children:{required:!1,tsType:{name:"ReactNode"},description:"Content that collapses/expands when the trigger is clicked."},defaultIsOpen:{required:!1,tsType:{name:"boolean"},description:`Default open state for uncontrolled usage.
@default true`},isOpen:{required:!1,tsType:{name:"boolean"},description:"Controlled open state. When provided, the component is fully controlled."},onOpenChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(isOpen: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"isOpen"}],return:{name:"void"}}},description:"Callback when the open state changes."},value:{required:!1,tsType:{name:"string"},description:`Unique identifier for this collapsible within an CollapsibleGroup.
Required when using inside a group for coordination.`},"data-testid":{required:!1,tsType:{name:"string"},description:"Test ID for the collapsible element."}},composes:["Omit"]};const J={wrapperAll:{kEafiO:"astryx11xkdxz",kPef9Z:"astryx13fuv20",kLZC3w:"astryx1pc3f07",kt9PQ7:"astryx92x3c3",kfdmCh:"astryx1q0q8m5",kL6WhQ:"astryxw8gpjh",$$css:!0}};function E(t){return t==null?[]:Array.isArray(t)?t:[t]}function c({type:t="single",defaultValue:i,value:l,onChange:o,dividers:n="none",density:r,children:C,ref:b,xstyle:f,className:u,style:k,...j}){const y=l!==void 0,[W,x]=p.useState(()=>E(i)),d=y?E(l):W,g=p.useCallback(m=>d.includes(m),[d]),q=p.useCallback(m=>{let w;t==="single"?w=d.includes(m)?[]:[m]:w=d.includes(m)?d.filter(U=>U!==m):[...d,m],y||x(w),o&&o(t==="single"?w[0]??"":w)},[t,d,y,o]),Y=p.useMemo(()=>({isOpen:g,toggle:q}),[g,q]),P=n!=="none",H=r??(P?"balanced":null),F=p.useMemo(()=>({dividers:n,density:H}),[n,H]),Q=P?e.jsx("div",{ref:b,...B(L("collapsible-group",{dividers:n,density:H??void 0}),M(n==="all"&&J.wrapperAll,f),u,k),...j,children:C}):C;return e.jsx(R,{value:Y,children:e.jsx($,{value:F,children:Q})})}c.displayName="CollapsibleGroup";c.__docgenInfo={description:`Groups collapsible components with coordinated open/close behavior.
Renders no wrapper DOM unless \`dividers\` is enabled.

In "single" mode (default), opening one item closes the others.
In "multiple" mode, items toggle independently.

@compositionHint Wrap Collapsible instances to coordinate their open/close state.
Each Collapsible needs a \`value\` prop to participate. For FAQ-style lists,
use \`dividers\` with bare Collapsible children instead of wrapping each item
in Card.

@example
\`\`\`
<CollapsibleGroup type="single" dividers="between" defaultValue="faq1">
  <Collapsible trigger="What is Astryx?" value="faq1">
    Astryx is a design system for building internal tools.
  </Collapsible>
  <Collapsible trigger="How do I start?" value="faq2">
    Install the package and import components.
  </Collapsible>
</CollapsibleGroup>
<CollapsibleGroup type="single" defaultValue="faq1">
  <VStack gap={2}>
    <Card>
      <Collapsible trigger="What is Astryx?" value="faq1">
        Astryx is a design system for building internal tools.
      </Collapsible>
    </Card>
    <Card>
      <Collapsible trigger="How do I start?" value="faq2">
        Install the package and import components.
      </Collapsible>
    </Card>
  </VStack>
</CollapsibleGroup>
\`\`\``,methods:[],displayName:"CollapsibleGroup",props:{ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<HTMLElement>",elements:[{name:"HTMLElement"}]},description:""},type:{required:!1,tsType:{name:"union",raw:"'single' | 'multiple'",elements:[{name:"literal",value:"'single'"},{name:"literal",value:"'multiple'"}]},description:`Whether only one item can be open at a time, or multiple.
@default "single"`,defaultValue:{value:"'single'",computed:!1}},defaultValue:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:`Default open item(s) — uncontrolled mode.
Use a string for single mode, string[] for multiple mode.`},value:{required:!1,tsType:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},description:`Controlled open item(s).
When provided, the group is fully controlled externally.`},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string | string[]) => void",signature:{arguments:[{type:{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},name:"value"}],return:{name:"void"}}},description:"Callback when the open item(s) change."},dividers:{required:!1,tsType:{name:"union",raw:"'between' | 'all' | 'none'",elements:[{name:"literal",value:"'between'"},{name:"literal",value:"'all'"},{name:"literal",value:"'none'"}]},description:`Divider style rendered around the group's items — the accordion row
chrome. 'between' draws hairlines between adjacent items; 'all' adds the
group's top and bottom edges. When enabled, the group renders a wrapper
div (it otherwise renders no DOM) and items get 'balanced' density unless
\`density\` says otherwise. Pair with bare Collapsible children; Card-wrapped
items provide their own separation.
@default "none"`,defaultValue:{value:"'none'",computed:!1}},density:{required:!1,tsType:{name:"union",raw:"'compact' | 'balanced' | 'spacious'",elements:[{name:"literal",value:"'compact'"},{name:"literal",value:"'balanced'"},{name:"literal",value:"'spacious'"}]},description:`Row density controlling trigger and content block padding on the group's
items. Defaults to 'balanced' when dividers are shown; otherwise items
keep their default unpadded look.`},children:{required:!0,tsType:{name:"ReactNode"},description:`Children — any components that support isCollapsible + value.

@compositionHint Wrap Collapsible instances (typically inside Card).
Each Collapsible needs a \`value\` prop to participate in the group.

@example
\`\`\`
<CollapsibleGroup type="single" defaultValue="general">
  <VStack gap={2}>
    <Card>
      <Collapsible trigger="General" value="general">
        <p>General settings content</p>
      </Collapsible>
    </Card>
    <Card>
      <Collapsible trigger="Advanced" value="advanced">
        <p>Advanced settings content</p>
      </Collapsible>
    </Card>
  </VStack>
</CollapsibleGroup>
\`\`\``}},composes:["Omit"]};const ee={dividedContainer:{ks0D6T:"x17fpy1y",$$css:!0}},pe={title:"Core/Collapsible",component:c,tags:["autodocs"],argTypes:{dividers:{control:"select",options:["between","all","none"],description:"Divider style around the group's items"},density:{control:"select",options:["compact","balanced","spacious"],description:"Row density for trigger and content padding"}},decorators:[t=>e.jsx("div",{className:"x1eiddq6 x1gt495",children:e.jsx(t,{})})]},G={name:"Single Mode (default)",render:()=>e.jsx(c,{type:"single",defaultValue:"general",children:e.jsxs(h,{gap:2,children:[e.jsx(a,{children:e.jsx(s,{trigger:"General Settings",value:"general",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Configure your general preferences including language, timezone, and display options."})})}),e.jsx(a,{children:e.jsx(s,{trigger:"Privacy Settings",value:"privacy",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Manage who can see your profile, activity, and personal information."})})}),e.jsx(a,{children:e.jsx(s,{trigger:"Notification Settings",value:"notifications",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Choose which notifications you receive and how they are delivered."})})})]})})},A={name:"Multiple Mode",render:()=>e.jsx(c,{type:"multiple",defaultValue:["faq1","faq3"],children:e.jsxs(h,{gap:2,children:[e.jsx(a,{children:e.jsx(s,{trigger:"What is Astryx?",value:"faq1",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Astryx is a design system for building internal tools and products."})})}),e.jsx(a,{children:e.jsx(s,{trigger:"How do I install it?",value:"faq2",children:e.jsxs("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:["Run ",e.jsx("code",{children:"npm install @astryxdesign/core"})," to get started."]})})}),e.jsx(a,{children:e.jsx(s,{trigger:"Is it open source?",value:"faq3",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Yes! Astryx is open source and available on GitHub."})})})]})})},N={name:"Controlled",render:function(){const[i,l]=p.useState("section1");return e.jsxs("div",{children:[e.jsxs("p",{className:"xv1l7n4 xif65rj x9ynric x1ghz6dp",children:["Currently open: ",e.jsx("strong",{children:String(i)||"(none)"})]}),e.jsx(c,{type:"single",value:i,onChange:l,children:e.jsxs(h,{gap:2,children:[e.jsx(a,{children:e.jsx(s,{trigger:"Section 1",value:"section1",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content for section 1."})})}),e.jsx(a,{children:e.jsx(s,{trigger:"Section 2",value:"section2",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content for section 2."})})}),e.jsx(a,{children:e.jsx(s,{trigger:"Section 3",value:"section3",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Content for section 3."})})})]})})]})}},V={name:"Standalone Collapsible",render:()=>e.jsxs(h,{gap:2,children:[e.jsx(a,{children:e.jsx(s,{trigger:"Starts open (default)",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"This collapsible manages its own state. Click the trigger to toggle."})})}),e.jsx(a,{children:e.jsx(s,{trigger:"Starts collapsed",defaultIsOpen:!1,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"This collapsible starts collapsed. Click to reveal."})})})]})},D={name:"Without Card (standalone)",render:()=>e.jsxs(h,{gap:2,children:[e.jsx(s,{trigger:"Show more details",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Collapsible works anywhere; it doesn't require a card wrapper."})}),e.jsx(s,{trigger:"Another section",defaultIsOpen:!1,children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"This section starts collapsed."})})]})},O={name:"Dividers — Between",args:{type:"single",dividers:"between",defaultValue:"q1"},render:t=>e.jsx("div",{className:"x17fpy1y",children:e.jsxs(c,{...t,children:[e.jsx(s,{trigger:"How do I reset my password?",value:"q1",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Go to Settings → Security → Change Password. You'll receive a confirmation email."})}),e.jsx(s,{trigger:"Can I change my username?",value:"q2",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Usernames can be changed once every 30 days from your profile settings."})}),e.jsx(s,{trigger:"How do I delete my account?",value:"q3",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Account deletion is permanent. Your data will be removed within 30 days."})})]})})},I={name:"Dividers — All",args:{type:"multiple",dividers:"all",defaultValue:["a"]},render:t=>e.jsx("div",{className:"x17fpy1y",children:e.jsxs(c,{...t,children:[e.jsx(s,{trigger:"Deployment Details",value:"a",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Deployed 2 hours ago from the main branch."})}),e.jsx(s,{trigger:"Environment Variables",value:"b",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"12 variables configured for this environment."})}),e.jsx(s,{trigger:"Build Logs",value:"c",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Build completed in 43 seconds."})})]})})},z={name:"Dividers — Density",render:()=>e.jsx(h,{gap:6,xstyle:ee.dividedContainer,children:["compact","balanced","spacious"].map(t=>e.jsxs(c,{type:"multiple",dividers:"between",density:t,defaultValue:["one"],children:[e.jsx(s,{trigger:`First section (${t})`,value:"one",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Row padding scales with density."})}),e.jsx(s,{trigger:"Second section",value:"two",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Collapsed by default."})})]},t))})},T={name:"FAQ Page",render:()=>e.jsx(c,{type:"single",children:e.jsxs(h,{gap:2,children:[e.jsx(a,{children:e.jsx(s,{trigger:"How do I reset my password?",value:"q1",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Go to Settings → Security → Change Password. You'll receive a confirmation email."})})}),e.jsx(a,{children:e.jsx(s,{trigger:"Can I change my username?",value:"q2",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Usernames can be changed once every 30 days from your profile settings."})})}),e.jsx(a,{children:e.jsx(s,{trigger:"How do I delete my account?",value:"q3",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"Account deletion is permanent. Go to Settings → Account → Delete Account. Your data will be removed within 30 days."})})}),e.jsx(a,{children:e.jsx(s,{trigger:"What payment methods are accepted?",value:"q4",children:e.jsx("p",{className:"x9ynric x1tgivj0 x1ghz6dp",children:"We accept Visa, Mastercard, American Express, and PayPal."})})})]})})};G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
  name: 'Single Mode (default)',
  render: () => <CollapsibleGroup type="single" defaultValue="general">
      <VStack gap={2}>
        <Card>
          <Collapsible trigger="General Settings" value="general">
            <p {...stylex.props(styles.text)}>
              Configure your general preferences including language, timezone,
              and display options.
            </p>
          </Collapsible>
        </Card>
        <Card>
          <Collapsible trigger="Privacy Settings" value="privacy">
            <p {...stylex.props(styles.text)}>
              Manage who can see your profile, activity, and personal
              information.
            </p>
          </Collapsible>
        </Card>
        <Card>
          <Collapsible trigger="Notification Settings" value="notifications">
            <p {...stylex.props(styles.text)}>
              Choose which notifications you receive and how they are delivered.
            </p>
          </Collapsible>
        </Card>
      </VStack>
    </CollapsibleGroup>
}`,...G.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Multiple Mode',
  render: () => <CollapsibleGroup type="multiple" defaultValue={['faq1', 'faq3']}>
      <VStack gap={2}>
        <Card>
          <Collapsible trigger="What is Astryx?" value="faq1">
            <p {...stylex.props(styles.text)}>
              Astryx is a design system for building internal tools and
              products.
            </p>
          </Collapsible>
        </Card>
        <Card>
          <Collapsible trigger="How do I install it?" value="faq2">
            <p {...stylex.props(styles.text)}>
              Run <code>npm install @astryxdesign/core</code> to get started.
            </p>
          </Collapsible>
        </Card>
        <Card>
          <Collapsible trigger="Is it open source?" value="faq3">
            <p {...stylex.props(styles.text)}>
              Yes! Astryx is open source and available on GitHub.
            </p>
          </Collapsible>
        </Card>
      </VStack>
    </CollapsibleGroup>
}`,...A.parameters?.docs?.source}}};N.parameters={...N.parameters,docs:{...N.parameters?.docs,source:{originalSource:`{
  name: 'Controlled',
  render: function ControlledStory() {
    const [open, setOpen] = useState<string | string[]>('section1');
    return <div>
        <p {...stylex.props(styles.textSecondary)}>
          Currently open: <strong>{String(open) || '(none)'}</strong>
        </p>
        <CollapsibleGroup type="single" value={open} onChange={setOpen}>
          <VStack gap={2}>
            <Card>
              <Collapsible trigger="Section 1" value="section1">
                <p {...stylex.props(styles.text)}>Content for section 1.</p>
              </Collapsible>
            </Card>
            <Card>
              <Collapsible trigger="Section 2" value="section2">
                <p {...stylex.props(styles.text)}>Content for section 2.</p>
              </Collapsible>
            </Card>
            <Card>
              <Collapsible trigger="Section 3" value="section3">
                <p {...stylex.props(styles.text)}>Content for section 3.</p>
              </Collapsible>
            </Card>
          </VStack>
        </CollapsibleGroup>
      </div>;
  }
}`,...N.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Standalone Collapsible',
  render: () => <VStack gap={2}>
      <Card>
        <Collapsible trigger="Starts open (default)">
          <p {...stylex.props(styles.text)}>
            This collapsible manages its own state. Click the trigger to toggle.
          </p>
        </Collapsible>
      </Card>
      <Card>
        <Collapsible trigger="Starts collapsed" defaultIsOpen={false}>
          <p {...stylex.props(styles.text)}>
            This collapsible starts collapsed. Click to reveal.
          </p>
        </Collapsible>
      </Card>
    </VStack>
}`,...V.parameters?.docs?.source}}};D.parameters={...D.parameters,docs:{...D.parameters?.docs,source:{originalSource:`{
  name: 'Without Card (standalone)',
  render: () => <VStack gap={2}>
      <Collapsible trigger="Show more details">
        <p {...stylex.props(styles.text)}>
          Collapsible works anywhere; it doesn't require a card wrapper.
        </p>
      </Collapsible>
      <Collapsible trigger="Another section" defaultIsOpen={false}>
        <p {...stylex.props(styles.text)}>This section starts collapsed.</p>
      </Collapsible>
    </VStack>
}`,...D.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Dividers — Between',
  args: {
    type: 'single',
    dividers: 'between',
    defaultValue: 'q1'
  },
  render: args => <div {...stylex.props(styles.dividedContainer)}>
      <CollapsibleGroup {...args}>
        <Collapsible trigger="How do I reset my password?" value="q1">
          <p {...stylex.props(styles.text)}>
            Go to Settings → Security → Change Password. You'll receive a
            confirmation email.
          </p>
        </Collapsible>
        <Collapsible trigger="Can I change my username?" value="q2">
          <p {...stylex.props(styles.text)}>
            Usernames can be changed once every 30 days from your profile
            settings.
          </p>
        </Collapsible>
        <Collapsible trigger="How do I delete my account?" value="q3">
          <p {...stylex.props(styles.text)}>
            Account deletion is permanent. Your data will be removed within 30
            days.
          </p>
        </Collapsible>
      </CollapsibleGroup>
    </div>
}`,...O.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Dividers — All',
  args: {
    type: 'multiple',
    dividers: 'all',
    defaultValue: ['a']
  },
  render: args => <div {...stylex.props(styles.dividedContainer)}>
      <CollapsibleGroup {...args}>
        <Collapsible trigger="Deployment Details" value="a">
          <p {...stylex.props(styles.text)}>
            Deployed 2 hours ago from the main branch.
          </p>
        </Collapsible>
        <Collapsible trigger="Environment Variables" value="b">
          <p {...stylex.props(styles.text)}>
            12 variables configured for this environment.
          </p>
        </Collapsible>
        <Collapsible trigger="Build Logs" value="c">
          <p {...stylex.props(styles.text)}>Build completed in 43 seconds.</p>
        </Collapsible>
      </CollapsibleGroup>
    </div>
}`,...I.parameters?.docs?.source}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Dividers — Density',
  render: () => <VStack gap={6} xstyle={styles.dividedContainer}>
      {(['compact', 'balanced', 'spacious'] as const).map(density => <CollapsibleGroup key={density} type="multiple" dividers="between" density={density} defaultValue={['one']}>
          <Collapsible trigger={\`First section (\${density})\`} value="one">
            <p {...stylex.props(styles.text)}>
              Row padding scales with density.
            </p>
          </Collapsible>
          <Collapsible trigger="Second section" value="two">
            <p {...stylex.props(styles.text)}>Collapsed by default.</p>
          </Collapsible>
        </CollapsibleGroup>)}
    </VStack>
}`,...z.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'FAQ Page',
  render: () => <CollapsibleGroup type="single">
      <VStack gap={2}>
        <Card>
          <Collapsible trigger="How do I reset my password?" value="q1">
            <p {...stylex.props(styles.text)}>
              Go to Settings → Security → Change Password. You'll receive a
              confirmation email.
            </p>
          </Collapsible>
        </Card>
        <Card>
          <Collapsible trigger="Can I change my username?" value="q2">
            <p {...stylex.props(styles.text)}>
              Usernames can be changed once every 30 days from your profile
              settings.
            </p>
          </Collapsible>
        </Card>
        <Card>
          <Collapsible trigger="How do I delete my account?" value="q3">
            <p {...stylex.props(styles.text)}>
              Account deletion is permanent. Go to Settings → Account → Delete
              Account. Your data will be removed within 30 days.
            </p>
          </Collapsible>
        </Card>
        <Card>
          <Collapsible trigger="What payment methods are accepted?" value="q4">
            <p {...stylex.props(styles.text)}>
              We accept Visa, Mastercard, American Express, and PayPal.
            </p>
          </Collapsible>
        </Card>
      </VStack>
    </CollapsibleGroup>
}`,...T.parameters?.docs?.source}}};const de=["SingleMode","MultipleMode","Controlled","StandaloneCollapsible","WithoutCard","DividersBetween","DividersAll","DividersDensity","FAQ"];export{N as Controlled,I as DividersAll,O as DividersBetween,z as DividersDensity,T as FAQ,A as MultipleMode,G as SingleMode,V as StandaloneCollapsible,D as WithoutCard,de as __namedExportsOrder,pe as default};
