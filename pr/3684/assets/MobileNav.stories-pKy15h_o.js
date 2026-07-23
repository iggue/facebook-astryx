import{ag as r,a0 as e,B as c,I as j,aK as C}from"./iframe-CouMrHD9.js";import{M as s}from"./navItemStyles.stylex-BejoPVF2.js";import{a as n,S as M}from"./SideNavItem-jOnjZ34q.js";import{b as i,F as O,a as g,S as y}from"./FolderIcon-CMEcBoyK.js";import{N as F}from"./NavIcon-D7XB5njU.js";import{F as v}from"./HomeIcon-BjAsMCmS.js";import{F as l}from"./HomeIcon-STCNGzZk.js";import{F as d}from"./FolderIcon-D-X0vCfm.js";import{F as N}from"./ChartBarIcon-DaoTJotL.js";import{F as f}from"./Cog6ToothIcon-CyQOM_bx.js";import{F as w}from"./CubeIcon-CvJ5H7FD.js";import"./preload-helper-Ct5FWWRu.js";import"./Heading-uPyb5ObC.js";import"./AppShellMobileContext-D4vIKdNC.js";import"./SideNavRenderContext-CHARa6NJ.js";import"./ResizeHandle-154GIfY0.js";import"./usePopover-BudNQH3o.js";import"./useFocusTrap-DCnkc9xw.js";import"./Tooltip-B-PiHtaw.js";import"./Link-D-3fstm2.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./useInteractiveRole-DgPclqhZ.js";import"./useListFocus-rHi2gpOd.js";const Z={title:"Core/MobileNav",component:s,tags:["autodocs"],parameters:{layout:"centered"}},h={render:()=>{const[a,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open Navigation",icon:e.jsx(j,{icon:"menu",color:"inherit"}),variant:"ghost",onClick:()=>t(!0),isIconOnly:!0}),e.jsxs(s,{isOpen:a,onOpenChange:o=>t(o),header:"Navigation",children:[e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,selectedIcon:v,isSelected:!0,href:"/dashboard"}),e.jsx(n,{label:"Projects",icon:d,selectedIcon:O,href:"/projects"}),e.jsx(n,{label:"Analytics",icon:N,href:"/analytics"})]}),e.jsxs(i,{title:"Settings",children:[e.jsx(n,{label:"General",icon:f,href:"/settings"}),e.jsx(n,{label:"Team",icon:g,href:"/team"})]})]})]})}},m={name:"With SideNav Children",render:()=>{const[a,t]=r.useState(!1),o=e.jsxs(e.Fragment,{children:[e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,selectedIcon:v,isSelected:!0,href:"/dashboard"}),e.jsx(n,{label:"Projects",icon:d,selectedIcon:O,href:"/projects"}),e.jsx(n,{label:"Analytics",icon:N,href:"/analytics"})]}),e.jsx(i,{title:"Settings",children:e.jsx(n,{label:"General",icon:f,href:"/settings"})})]});return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open Drawer",onClick:()=>t(!0)}),e.jsx(s,{isOpen:a,onOpenChange:p=>t(p),header:"My App",children:o})]})}},S={name:"Responsive Pattern",render:()=>{const a=C("(max-width: 768px)"),[t,o]=r.useState(!1),p=e.jsxs(e.Fragment,{children:[e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,selectedIcon:v,isSelected:!0,href:"/"}),e.jsx(n,{label:"Projects",icon:d,selectedIcon:O,href:"/projects"}),e.jsx(n,{label:"Analytics",icon:N,href:"/analytics"})]}),e.jsxs(i,{title:"Settings",children:[e.jsx(n,{label:"General",icon:f,href:"/settings"}),e.jsx(n,{label:"Team",icon:g,href:"/team"})]})]});return a?e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Menu",icon:e.jsx(j,{icon:"menu",color:"inherit"}),variant:"ghost",onClick:()=>o(!0),isIconOnly:!0}),e.jsx(s,{isOpen:t,onOpenChange:x=>o(x),header:"My App",children:p})]}):e.jsx("div",{style:{width:280,height:600,border:"1px solid #e5e7eb"},children:e.jsx(M,{header:e.jsx(y,{icon:e.jsx(F,{icon:e.jsx(w,{style:{width:16,height:16}})}),heading:"My App",headingHref:"/"}),children:p})})}},u={name:"End Side",render:()=>{const[a,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open from Right",onClick:()=>t(!0)}),e.jsx(s,{isOpen:a,onOpenChange:o=>t(o),header:"Settings",side:"end",children:e.jsxs(i,{title:"Settings",children:[e.jsx(n,{label:"General",icon:f,href:"/settings"}),e.jsx(n,{label:"Team",icon:g,href:"/team"})]})})]})}},I={name:"Custom Width",render:()=>{const[a,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open Wide Drawer",onClick:()=>t(!0)}),e.jsx(s,{isOpen:a,onOpenChange:o=>t(o),header:"Wide Navigation",width:360,children:e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,selectedIcon:v,isSelected:!0,href:"/dashboard"}),e.jsx(n,{label:"Projects",icon:d,href:"/projects"})]})})]})}},b={name:"Without Title",render:()=>{const[a,t]=r.useState(!1);return e.jsxs(e.Fragment,{children:[e.jsx(c,{label:"Open Navigation",icon:e.jsx(j,{icon:"menu",color:"inherit"}),variant:"ghost",onClick:()=>t(!0),isIconOnly:!0}),e.jsx(s,{isOpen:a,onOpenChange:o=>t(o),children:e.jsxs(i,{title:"Main",children:[e.jsx(n,{label:"Dashboard",icon:l,isSelected:!0,href:"/dashboard"}),e.jsx(n,{label:"Projects",icon:d,href:"/projects"})]})})]})}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Open Navigation" icon={<Icon icon="menu" color="inherit" />} variant="ghost" onClick={() => setIsOpen(true)} isIconOnly />
        <MobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)} header="Navigation">
          <SideNavSection title="Main">
            <SideNavItem label="Dashboard" icon={HomeIcon} selectedIcon={HomeIconSolid} isSelected href="/dashboard" />
            <SideNavItem label="Projects" icon={FolderIcon} selectedIcon={FolderIconSolid} href="/projects" />
            <SideNavItem label="Analytics" icon={ChartBarIcon} href="/analytics" />
          </SideNavSection>
          <SideNavSection title="Settings">
            <SideNavItem label="General" icon={Cog6ToothIcon} href="/settings" />
            <SideNavItem label="Team" icon={UserGroupIcon} href="/team" />
          </SideNavSection>
        </MobileNav>
      </>;
  }
}`,...h.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'With SideNav Children',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    const navSections = <>
        <SideNavSection title="Main">
          <SideNavItem label="Dashboard" icon={HomeIcon} selectedIcon={HomeIconSolid} isSelected href="/dashboard" />
          <SideNavItem label="Projects" icon={FolderIcon} selectedIcon={FolderIconSolid} href="/projects" />
          <SideNavItem label="Analytics" icon={ChartBarIcon} href="/analytics" />
        </SideNavSection>
        <SideNavSection title="Settings">
          <SideNavItem label="General" icon={Cog6ToothIcon} href="/settings" />
        </SideNavSection>
      </>;
    return <>
        <Button label="Open Drawer" onClick={() => setIsOpen(true)} />
        <MobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)} header="My App">
          {navSections}
        </MobileNav>
      </>;
  }
}`,...m.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Responsive Pattern',
  render: () => {
    const isMobile = useMediaQuery('(max-width: 768px)');
    const [drawerOpen, setDrawerOpen] = useState(false);
    const navSections = <>
        <SideNavSection title="Main">
          <SideNavItem label="Dashboard" icon={HomeIcon} selectedIcon={HomeIconSolid} isSelected href="/" />
          <SideNavItem label="Projects" icon={FolderIcon} selectedIcon={FolderIconSolid} href="/projects" />
          <SideNavItem label="Analytics" icon={ChartBarIcon} href="/analytics" />
        </SideNavSection>
        <SideNavSection title="Settings">
          <SideNavItem label="General" icon={Cog6ToothIcon} href="/settings" />
          <SideNavItem label="Team" icon={UserGroupIcon} href="/team" />
        </SideNavSection>
      </>;
    if (isMobile) {
      return <>
          <Button label="Menu" icon={<Icon icon="menu" color="inherit" />} variant="ghost" onClick={() => setDrawerOpen(true)} isIconOnly />
          <MobileNav isOpen={drawerOpen} onOpenChange={open => setDrawerOpen(open)} header="My App">
            {navSections}
          </MobileNav>
        </>;
    }
    return <div style={{
      width: 280,
      height: 600,
      border: '1px solid #e5e7eb'
    }}>
        <SideNav header={<SideNavHeading icon={<NavIcon icon={<CubeIcon style={{
        width: 16,
        height: 16
      }} />} />} heading="My App" headingHref="/" />}>
          {navSections}
        </SideNav>
      </div>;
  }
}`,...S.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'End Side',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Open from Right" onClick={() => setIsOpen(true)} />
        <MobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)} header="Settings" side="end">
          <SideNavSection title="Settings">
            <SideNavItem label="General" icon={Cog6ToothIcon} href="/settings" />
            <SideNavItem label="Team" icon={UserGroupIcon} href="/team" />
          </SideNavSection>
        </MobileNav>
      </>;
  }
}`,...u.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
  name: 'Custom Width',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Open Wide Drawer" onClick={() => setIsOpen(true)} />
        <MobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)} header="Wide Navigation" width={360}>
          <SideNavSection title="Main">
            <SideNavItem label="Dashboard" icon={HomeIcon} selectedIcon={HomeIconSolid} isSelected href="/dashboard" />
            <SideNavItem label="Projects" icon={FolderIcon} href="/projects" />
          </SideNavSection>
        </MobileNav>
      </>;
  }
}`,...I.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Without Title',
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    return <>
        <Button label="Open Navigation" icon={<Icon icon="menu" color="inherit" />} variant="ghost" onClick={() => setIsOpen(true)} isIconOnly />
        <MobileNav isOpen={isOpen} onOpenChange={open => setIsOpen(open)}>
          <SideNavSection title="Main">
            <SideNavItem label="Dashboard" icon={HomeIcon} isSelected href="/dashboard" />
            <SideNavItem label="Projects" icon={FolderIcon} href="/projects" />
          </SideNavSection>
        </MobileNav>
      </>;
  }
}`,...b.parameters?.docs?.source}}};const ee=["Default","WithSideNavChildren","ResponsivePattern","EndSide","CustomWidth","WithoutTitle"];export{I as CustomWidth,h as Default,u as EndSide,S as ResponsivePattern,m as WithSideNavChildren,b as WithoutTitle,ee as __namedExportsOrder,Z as default};
