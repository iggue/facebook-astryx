import{ag as d,a0 as r}from"./iframe-C8XmfRPK.js";import{P as u}from"./PowerSearch-d0dIpt9J.js";import{u as m}from"./usePowerSearchConfig-CjapV7AO.js";import{T as h,f as p,p as c}from"./Table-DK4YhkXn.js";import"./preload-helper-Ct5FWWRu.js";import"./Tokenizer-DcKPe6xc.js";import"./BaseTypeahead-CshdBQL7.js";import"./usePopover-BB9kWVWg.js";import"./useFocusTrap-CWBKSEY3.js";import"./useAnnounce-C_HAQML5.js";import"./TypeaheadItem-eJ6Wd-3f.js";import"./getKey-DyRdrWhf.js";import"./Field-ElIt52VC.js";import"./FieldStatus-CSyf9kYq.js";import"./Tooltip-DQyY8hI2.js";import"./inputStyles.stylex-Bpqcd25J.js";import"./InputClearButton-ohPpISPE.js";import"./Token-BmeOybpC.js";import"./useInteractiveRole-Dqs2OSxq.js";import"./OverflowList-DcLqb6Oi.js";import"./Avatar-DDeY-W_C.js";import"./Selector-vQ6m2S7q.js";import"./Divider-Ox4e8wv4.js";import"./utils-_uNaBhDK.js";import"./hooks-JnWvdiQj.js";import"./Item-CPDFvBrl.js";import"./computeTargetAndRel-BlG0ENK0.js";import"./InputGroupContext-DWaAjvY2.js";import"./TreeList-DApuRCyu.js";import"./TextInput-V5QbRkVe.js";import"./useInputContainer-kPGvgujL.js";import"./NumberInput-BwmHd_AI.js";import"./DateInput-CfDwIBEQ.js";import"./Calendar-Bw0s1AUn.js";import"./plainDate-C-ANv9VG.js";import"./dateParser-XTIqkafj.js";import"./TimeInput-DTZ02zUE.js";import"./timeParser-DHsJNTm3.js";import"./Typeahead-DIVLbwIP.js";import"./VStack-D9ybmAxh.js";import"./Stack-Co7vHO3y.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./HStack-Bg2W5wxV.js";import"./ContextMenu-D5esnE3j.js";import"./renderDropdownItems-m8On2ZiL.js";import"./useListFocus-DcjvoEb5.js";import"./useTypeahead-BIUjmnU-.js";import"./EmptyState-C3aXlncS.js";const y=[{value:"fiction",label:"Fiction"},{value:"non-fiction",label:"Non-Fiction"},{value:"sci-fi",label:"Science Fiction"},{value:"fantasy",label:"Fantasy"},{value:"mystery",label:"Mystery"},{value:"romance",label:"Romance"},{value:"biography",label:"Biography"},{value:"history",label:"History"}],f=[{key:"title",type:"string",label:"Title"},{key:"author",type:"string",label:"Author"},{key:"year",type:"number",label:"Publication Year"},{key:"genre",type:"enum",label:"Genre",enumValues:y}],g=[{id:"1",title:"Dune",author:"Frank Herbert",year:1965,genre:"sci-fi"},{id:"2",title:"Pride and Prejudice",author:"Jane Austen",year:1813,genre:"romance"},{id:"3",title:"The Great Gatsby",author:"F. Scott Fitzgerald",year:1925,genre:"fiction"},{id:"4",title:"1984",author:"George Orwell",year:1949,genre:"sci-fi"},{id:"5",title:"To Kill a Mockingbird",author:"Harper Lee",year:1960,genre:"fiction"},{id:"6",title:"The Hobbit",author:"J.R.R. Tolkien",year:1937,genre:"fantasy"},{id:"7",title:"Sapiens",author:"Yuval Noah Harari",year:2011,genre:"non-fiction"},{id:"8",title:"The Name of the Wind",author:"Patrick Rothfuss",year:2007,genre:"fantasy"},{id:"9",title:"Gone Girl",author:"Gillian Flynn",year:2012,genre:"mystery"},{id:"10",title:"Steve Jobs",author:"Walter Isaacson",year:2011,genre:"biography"},{id:"11",title:"A Brief History of Time",author:"Stephen Hawking",year:1988,genre:"non-fiction"},{id:"12",title:"The Shining",author:"Stephen King",year:1977,genre:"mystery"},{id:"13",title:"The Handmaid's Tale",author:"Margaret Atwood",year:1985,genre:"sci-fi"},{id:"14",title:"Outlander",author:"Diana Gabaldon",year:1991,genre:"romance"},{id:"15",title:"The Guns of August",author:"Barbara Tuchman",year:1962,genre:"history"}],b=[{key:"title",header:"Title",width:p(2)},{key:"author",header:"Author",width:p(2)},{key:"year",header:"Year",width:c(100)},{key:"genre",header:"Genre",width:c(140),renderCell:e=>y.find(t=>t.value===e.genre)?.label??e.genre}],he={title:"Core/PowerSearchWithTable",tags:["autodocs"],decorators:[e=>r.jsx("div",{style:{width:800},children:r.jsx(e,{})})]},o={render:()=>{const[e,t]=d.useState([]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books by title, author, year, genre...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0})]})}},a={render:()=>{const[e,t]=d.useState([{field:"genre",operator:"is",value:{type:"enum",value:"sci-fi"}}]),{config:l,applyFilters:s}=m(f,"Books"),i=s(e,g);return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:16},children:[r.jsx(u,{config:l,filters:e,onChange:n=>t([...n]),placeholder:"Filter books...",resultCount:i.length}),r.jsx(h,{data:i,columns:b,idKey:"id",hasHover:!0,isStriped:!0})]})}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books by title, author, year, genre..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover />
      </div>;
  }
}`,...o.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  render: () => {
    const [filters, setFilters] = useState<PowerSearchFilter[]>([{
      field: 'genre',
      operator: 'is',
      value: {
        type: 'enum',
        value: 'sci-fi'
      }
    }]);
    const {
      config,
      applyFilters
    } = usePowerSearchConfig(fieldDefs, 'Books');
    const filteredBooks = applyFilters(filters, books);
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }}>
        <PowerSearch config={config} filters={filters} onChange={newFilters => setFilters([...newFilters])} placeholder="Filter books..." resultCount={filteredBooks.length} />
        <Table data={filteredBooks} columns={columns} idKey="id" hasHover isStriped />
      </div>;
  }
}`,...a.parameters?.docs?.source}}};const ye=["Default","WithPresetFilters"];export{o as Default,a as WithPresetFilters,ye as __namedExportsOrder,he as default};
