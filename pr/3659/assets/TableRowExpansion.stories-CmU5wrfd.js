import{ag as p,a0 as x,I as K,ae as I}from"./iframe-l2Ww7LcQ.js";import{r as O,T as R,f as $,p as T}from"./Table-CJbPHwr8.js";import"./preload-helper-Ct5FWWRu.js";import"./ContextMenu-zRZl-J9E.js";import"./renderDropdownItems-BGZu9QpZ.js";import"./Divider-CeBUv9Tz.js";import"./Item-DkSyR5qI.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./useListFocus-sc1gAGAB.js";import"./useTypeahead-BJrIYgJo.js";import"./EmptyState-XGmGzQpA.js";function j({baseData:l,getChildren:n,getRowKey:s,getIsItemExpandable:i,expandedKeys:o,setExpandedKeys:t}){const u=p.useCallback(e=>i?i(e):n(e).length>0,[i,n]),g=p.useMemo(()=>{const e=new Map;function r(d,y){for(const h of d){const C=s(h);e.set(C,y),o.has(C)&&r(n(h),y+1)}}return r(l,0),e},[l,n,s,o]),k=p.useMemo(()=>{const e=[];function r(d){for(const y of d){e.push(y);const h=s(y);o.has(h)&&r(n(y))}}return r(l),e},[l,n,s,o]),m=p.useMemo(()=>{const e=[];function r(d){for(const y of d)u(y)&&(e.push(s(y)),r(n(y)))}return r(l),e},[l,n,s,u]),b=p.useCallback(e=>g.get(s(e))??0,[g,s]),w=p.useCallback(e=>{t(r=>{const d=new Set(r);return d.has(e)?d.delete(e):d.add(e),d})},[t]),a=p.useMemo(()=>{if(m.length===0)return!1;const e=m.filter(r=>o.has(r)).length;return e===0?!1:e===m.length?!0:"indeterminate"},[m,o]),f=p.useCallback(e=>{t(e?new Set(m):new Set)},[t,m]),c=p.useMemo(()=>({expandedKeys:o,onToggle:w,getRowKey:s,getChildren:n,getDepth:b,getIsItemExpandable:i,isAllExpanded:a,onToggleExpandAll:f}),[o,w,s,n,b,i,a,f]);return{data:k,expansionConfig:c}}const P={type:"pixel",value:40},L=24,q={kZCmMZ:"astryxnvo3vl",kE3dHu:"",kpe85a:"",$$css:!0},S={indentedCell:{k1xSpc:"astryx78zum5",kGNEyG:"astryx6s0dn4",kOIVth:"astryxzye2dw",$$css:!0},indent:l=>[q,{"--x-paddingInlineStart":(n=>typeof n=="number"?n+"px":n??void 0)(`${l}px`)}],clickableRow:{kkrTdU:"astryx1ypdohk",$$css:!0}};function A({isExpanded:l,onToggle:n,ariaLabel:s}){return x.jsx("button",{type:"button",className:"astryx3nfvp2 astryx6s0dn4 astryxl56j7k astryxvy4d1p astryxxk0z11 astryx1md70p1 astryx1gs6z28 astryxx3sua9 astryx1ypdohk astryxv9yike astryxefglzl astryxx6bhzk astryx1717udv astryx2lah0s astryx1ilzqfv astryx1cqbx0l",onClick:i=>{i.stopPropagation(),n()},"aria-label":s,"aria-expanded":l,children:x.jsx("span",{...{0:{className:"astryx3nfvp2 astryx11xpdln astryxx6bhzk"},1:{className:"astryx3nfvp2 astryx11xpdln astryxx6bhzk astryx1iffjtl"}}[!!l<<0],children:x.jsx(K,{icon:"chevronRight",size:"xsm"})})})}function N(l){const{expandedKeys:n,onToggle:s,getRowKey:i,getChildren:o,getDepth:t,getIsItemExpandable:u,hasRowClickExpansion:g=!1,isAllExpanded:k,onToggleExpandAll:m}=l,b=p.useRef(null),w=p.useMemo(()=>({key:"__expansion",header:"",width:P,resizable:!1,renderCell:a=>{if((t?t(a):0)>0)return null;const c=i(a);if(!(u?u(a):o(a).length>0))return null;const r=n.has(c);return x.jsx(A,{isExpanded:r,onToggle:()=>s(c),ariaLabel:r?"Collapse row":"Expand row"})}}),[n,s,i,o,u,t]);return p.useMemo(()=>({transformColumns(a){const f=a.find(e=>!e.key.startsWith("__"));b.current=f?.key??null;const c=a.map(e=>{if(e.key!==b.current)return e;const r=e.renderCell;return{...e,renderCell:d=>{const y=t?t(d):0,h=r?r(d):String(d[e.key]??"");if(y===0)return h;const C=(y-1)*L,_=i(d),H=n.has(_),D=(u?u(d):o(d).length>0)?x.jsx(A,{isExpanded:H,onToggle:()=>s(_),ariaLabel:H?"Collapse row":"Expand row"}):x.jsx("span",{className:"astryx1rg5ohu astryxvy4d1p astryxxk0z11 astryx2lah0s"});return x.jsxs("div",{...I(S.indentedCell,C>0&&S.indent(C)),children:[D,h]})}}});return[w,...c]},transformHeaderCell(a,f){if(f.key!=="__expansion")return a;if(k!==void 0&&m){const c=k===!0;return{...a,content:x.jsx("button",{type:"button",className:"astryx3nfvp2 astryx6s0dn4 astryxl56j7k astryxvy4d1p astryxxk0z11 astryx1md70p1 astryx1gs6z28 astryxx3sua9 astryx1ypdohk astryxv9yike astryxefglzl astryxx6bhzk astryx1717udv astryx2lah0s astryx1ilzqfv astryx1cqbx0l",onClick:()=>m(!c),"aria-label":c?"Collapse all rows":"Expand all rows",children:x.jsx("span",{...{0:{className:"astryx3nfvp2 astryx11xpdln astryxx6bhzk"},1:{className:"astryx3nfvp2 astryx11xpdln astryxx6bhzk astryx1iffjtl"}}[!!c<<0],children:x.jsx(K,{icon:"chevronRight",size:"xsm"})})})}}return{...a,content:null}},transformBodyCell(a,f,c){if(!(u?u(c):o(c).length>0))return a;const r=i(c),d=n.has(r);return{...a,contextMenuActions:()=>[...O(a.contextMenuActions),{id:"row-expansion-toggle",group:"row-expansion",label:d?"Collapse row":"Expand row",icon:x.jsx(K,{icon:d?"chevronDown":"chevronRight",size:"xsm","aria-hidden":!0}),onSelect:()=>s(r)}]}},transformBodyRow(a,f){if(!g||!(u?u(f):o(f).length>0))return a;const e=i(f);return{...a,htmlProps:{...a.htmlProps,onClick:()=>s(e)},styles:[...a.styles,S.clickableRow]}}}),[n,i,s,o,t,u,g,k,m,w])}const M=[{id:"src",name:"src",type:"folder",size:"—",modified:"2026-06-20",children:[{id:"src/components",name:"components",type:"folder",size:"—",modified:"2026-06-19",children:[{id:"src/components/Button.tsx",name:"Button.tsx",type:"file",size:"4.2 KB",modified:"2026-06-18",children:[]},{id:"src/components/Table.tsx",name:"Table.tsx",type:"file",size:"12.8 KB",modified:"2026-06-20",children:[]},{id:"src/components/Dialog.tsx",name:"Dialog.tsx",type:"file",size:"6.1 KB",modified:"2026-06-15",children:[]}]},{id:"src/utils",name:"utils",type:"folder",size:"—",modified:"2026-06-17",children:[{id:"src/utils/format.ts",name:"format.ts",type:"file",size:"1.3 KB",modified:"2026-06-17",children:[]},{id:"src/utils/merge.ts",name:"merge.ts",type:"file",size:"0.8 KB",modified:"2026-06-10",children:[]}]},{id:"src/index.ts",name:"index.ts",type:"file",size:"0.4 KB",modified:"2026-06-20",children:[]}]},{id:"public",name:"public",type:"folder",size:"—",modified:"2026-06-01",children:[{id:"public/favicon.ico",name:"favicon.ico",type:"file",size:"15 KB",modified:"2026-05-20",children:[]}]},{id:"package.json",name:"package.json",type:"file",size:"1.8 KB",modified:"2026-06-22",children:[]},{id:"tsconfig.json",name:"tsconfig.json",type:"file",size:"0.6 KB",modified:"2026-06-01",children:[]}],B=[{key:"name",header:"Name",width:$(2)},{key:"type",header:"Type",width:T(80)},{key:"size",header:"Size",width:T(90)},{key:"modified",header:"Modified",width:T(120)}],se={title:"Core/TableRowExpansion",tags:["autodocs"]},E={render:()=>{const[l,n]=p.useState(new Set(["src"])),{data:s,expansionConfig:i}=j({baseData:M,getChildren:t=>t.children??[],getRowKey:t=>t.id,expandedKeys:l,setExpandedKeys:n}),o=N(i);return x.jsx(R,{data:s,columns:B,idKey:"id",hasHover:!0,plugins:{expansion:o}})}},v={render:()=>{const[l,n]=p.useState(new Set(["src","src/components"])),{data:s,expansionConfig:i}=j({baseData:M,getChildren:t=>t.children??[],getRowKey:t=>t.id,getIsItemExpandable:t=>t.type==="folder",expandedKeys:l,setExpandedKeys:n}),o=N(i);return x.jsx(R,{data:s,columns:B,idKey:"id",hasHover:!0,plugins:{expansion:o}})}},z={render:()=>{const[l,n]=p.useState(new Set),{data:s,expansionConfig:i}=j({baseData:M,getChildren:t=>t.children??[],getRowKey:t=>t.id,expandedKeys:l,setExpandedKeys:n}),o=N({...i,hasRowClickExpansion:!0});return x.jsx(R,{data:s,columns:B,idKey:"id",hasHover:!0,plugins:{expansion:o}})}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(['src']));

    // The state hook flattens the tree, tracks depth, and derives the
    // expand/collapse + expand-all handlers — no boilerplate in the consumer.
    const {
      data,
      expansionConfig
    } = useTableRowExpansionState<FileNode>({
      baseData: fileTree,
      getChildren: item => item.children ?? [],
      getRowKey: item => item.id,
      expandedKeys,
      setExpandedKeys
    });
    const expansion = useTableRowExpansion(expansionConfig);
    return <Table data={data} columns={columns} idKey="id" hasHover plugins={{
      expansion
    }} />;
  }
}`,...E.parameters?.docs?.source},description:{story:`A file tree rendered as a table with expandable folder rows. Child rows
inherit the parent's columns and are indented based on depth. Click the
chevron (or right-click → "Expand/Collapse row") to expand a folder.`,...E.parameters?.docs?.description}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set(['src', 'src/components']));

    // \`getIsItemExpandable\` restricts expandability (and expand-all) to folders.
    const {
      data,
      expansionConfig
    } = useTableRowExpansionState<FileNode>({
      baseData: fileTree,
      getChildren: item => item.children ?? [],
      getRowKey: item => item.id,
      getIsItemExpandable: item => item.type === 'folder',
      expandedKeys,
      setExpandedKeys
    });
    const expansion = useTableRowExpansion(expansionConfig);
    return <Table data={data} columns={columns} idKey="id" hasHover plugins={{
      expansion
    }} />;
  }
}`,...v.parameters?.docs?.source},description:{story:`Only folders are expandable (files have no children). The chevron and
context-menu action are hidden for leaf nodes.`,...v.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [expandedKeys, setExpandedKeys] = useState<Set<string>>(new Set());
    const {
      data,
      expansionConfig
    } = useTableRowExpansionState<FileNode>({
      baseData: fileTree,
      getChildren: item => item.children ?? [],
      getRowKey: item => item.id,
      expandedKeys,
      setExpandedKeys
    });

    // Opt into row-click expansion by extending the derived config.
    const expansion = useTableRowExpansion({
      ...expansionConfig,
      hasRowClickExpansion: true
    });
    return <Table data={data} columns={columns} idKey="id" hasHover plugins={{
      expansion
    }} />;
  }
}`,...z.parameters?.docs?.source},description:{story:"`hasRowClickExpansion: true` — clicking anywhere on the row toggles expansion\n(in addition to the chevron). The row shows a pointer cursor.",...z.parameters?.docs?.description}}};const te=["InheritedColumns","LeafNodesNotExpandable","ExpandOnRowClick"];export{z as ExpandOnRowClick,E as InheritedColumns,v as LeafNodesNotExpandable,te as __namedExportsOrder,se as default};
