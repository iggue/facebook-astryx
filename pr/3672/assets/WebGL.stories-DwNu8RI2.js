import{a0 as v,ag as o}from"./iframe-C8fQ-xtn.js";import{u as de,C as Z,h as pe,d as fe,b as re,a as se}from"./_data-xYQxt4mP.js";import{b as me}from"./band-B4lqwueb.js";import"./preload-helper-Ct5FWWRu.js";import"./linear-gs3faI6G.js";import"./array-2GBN5xbU.js";import"./ChartLegend-NDfdbw_g.js";import"./ChartSwatch-Cd5SY14q.js";import"./HStack-Cu0jN-Pi.js";import"./Stack-Dke1vo_X.js";import"./stack.stylex-BlarxY2N.js";import"./padding.stylex-Dl2_Pyt1.js";import"./VStack-62xqq9Y7.js";import"./index-DB0IE9kF.js";import"./index-DErwPu5P.js";function ue(t,n,u){const s=t.createShader(n);return s?(t.shaderSource(s,u),t.compileShader(s),t.getShaderParameter(s,t.COMPILE_STATUS)?s:(t.deleteShader(s),null)):null}function $(t,n,u){const s=ue(t,t.VERTEX_SHADER,n),i=ue(t,t.FRAGMENT_SHADER,u);if(!s||!i)return null;const c=t.createProgram();return c?(t.attachShader(c,s),t.attachShader(c,i),t.linkProgram(c),t.getProgramParameter(c,t.LINK_STATUS)?c:(t.deleteProgram(c),null)):null}const le=[.5,.5,.5];function J(t){if(typeof t!="string")return le;let n=t.trim().replace(/^#/,"");if((n.length===3||n.length===4)&&(n=n.replace(/./g,s=>s+s)),n.length===8&&(n=n.slice(0,6)),!/^[0-9a-fA-F]{6}$/.test(n))return le;const u=parseInt(n,16);return[(u>>16)/255,(u>>8&255)/255,(u&255)/255]}function xe(){return((typeof window<"u"?window.devicePixelRatio:0)||2)*2}function ne(t){return t.getContext("webgl",{alpha:!0,premultipliedAlpha:!0,antialias:!0})}function oe(t){t.clearColor(0,0,0,0),t.clear(t.COLOR_BUFFER_BIT),t.enable(t.BLEND),t.blendFunc(t.ONE,t.ONE_MINUS_SRC_ALPHA)}function ce(t,n,u){const s=xe();return t.width=Math.max(1,Math.round(n*s)),t.height=Math.max(1,Math.round(u*s)),t.style.width=`${Math.max(0,n)}px`,t.style.height=`${Math.max(0,u)}px`,s}function ie(t,n,u,s){const i=t.ownerSVGElement;if(!i)return;const c=i.parentElement;if(!c)return;getComputedStyle(c).position==="static"&&(c.style.position="relative"),n.style.position="absolute",n.style.pointerEvents="none";const y=c.getBoundingClientRect(),d=t.getScreenCTM();return d?(n.style.left=`${d.e-y.left}px`,n.style.top=`${d.f-y.top}px`):(n.style.left="0",n.style.top="0"),n.style.width=`${u}px`,n.style.height=`${s}px`,c.appendChild(n),()=>{n.parentElement===c&&c.removeChild(n)}}function X(t,n,u){const s=i=>{i.preventDefault(),n()};return t.addEventListener("webglcontextlost",s,!1),t.addEventListener("webglcontextrestored",u,!1),()=>{t.removeEventListener("webglcontextlost",s,!1),t.removeEventListener("webglcontextrestored",u,!1)}}function q(t){const n=t.getExtension("WEBGL_lose_context");n&&n.loseContext()}const he=1/.96,ge=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  uniform float u_size;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size * ${he.toFixed(6)};
  }
`,Re=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);
    if (dist > 0.5) discard;
    float edge = 1.0 - smoothstep(0.48, 0.5, dist);
    float a = u_opacity * edge;
    gl_FragColor = vec4(u_color * a, a);
  }
`;function ve({resolved:t,color:n,size:u,opacity:s,width:i,height:c}){const y=o.useRef(null),d=o.useRef(null),_=o.useRef(null),h=o.useRef(null),x=o.useRef(null),b=o.useRef(null),[R,E]=o.useState(0),T=o.useMemo(()=>{const p=[];for(const I of t)Number.isFinite(I.px)&&Number.isFinite(I.py)&&p.push(I.px,I.py);return new Float32Array(p)},[t]);return o.useEffect(()=>{const p=b.current;if(!p)return;y.current||(y.current=document.createElement("canvas"));const I=y.current,m=ie(p,I,i,c),B=X(I,()=>{d.current=null,_.current=null,h.current=null,x.current=null},()=>E(M=>M+1));return()=>{B(),m?.()}},[i,c]),o.useEffect(()=>{const p=y.current;if(!p||i<=0||c<=0)return;const I=ce(p,i,c);d.current||(d.current=ne(p));const m=d.current;if(!m||m.isContextLost())return;_.current||(_.current=$(m,ge,Re),x.current=null);const B=_.current;if(!B)return;h.current||(h.current=m.createBuffer());const M=h.current;if(!M)return;x.current||(x.current={aPosition:m.getAttribLocation(B,"a_position"),uResolution:m.getUniformLocation(B,"u_resolution"),uColor:m.getUniformLocation(B,"u_color"),uSize:m.getUniformLocation(B,"u_size"),uOpacity:m.getUniformLocation(B,"u_opacity")});const w=x.current;m.viewport(0,0,p.width,p.height),oe(m),m.useProgram(B),m.bindBuffer(m.ARRAY_BUFFER,M),m.bufferData(m.ARRAY_BUFFER,T,m.STATIC_DRAW),m.enableVertexAttribArray(w.aPosition),m.vertexAttribPointer(w.aPosition,2,m.FLOAT,!1,0,0);const[G,O,a]=J(n);m.uniform2f(w.uResolution,i,c),m.uniform3f(w.uColor,G,O,a),m.uniform1f(w.uSize,u*I),m.uniform1f(w.uOpacity,s),m.drawArrays(m.POINTS,0,T.length/2)},[i,c,n,u,s,T,R]),o.useEffect(()=>()=>{const p=d.current;p&&(h.current&&p.deleteBuffer(h.current),_.current&&p.deleteProgram(_.current),q(p)),d.current=null,_.current=null,h.current=null,x.current=null},[]),i<=0||c<=0?null:v.jsx("g",{ref:b})}function ye(t,n){const{color:u}=n,s=n.size??6,i=n.opacity??.8;return{type:"dotGL",key:t,dataKeys:[t],layout:{},resolve(c){const{data:y,xKey:d,xScale:_,yScale:h}=c,x=[];for(let b=0;b<y.length;b++){const R=y[b];let E;"bandwidth"in _?E=(_(String(R[d]))??0)+_.bandwidth()/2:E=_(R[d]);const T=typeof R[t]=="number"?R[t]:0;x.push({px:E,py:h(T),py0:h(0),dataIndex:b})}return x},render(c,y){return v.jsx(ve,{resolved:c,color:u,size:s,opacity:i,width:y.width,height:y.height})}}}const _e=16;function be(t){const n=t+1;return[(n>>16&255)/255,(n>>8&255)/255,(n&255)/255]}function Ae(t,n,u){return t===0&&n===0&&u===0?-1:(t<<16|n<<8|u)-1}const Ee=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  uniform float u_size;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size;
  }
`,Fe=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    if (dot(coord, coord) > 0.25) discard;
    gl_FragColor = vec4(u_color, u_opacity);
  }
`,Ce=`
  attribute vec2 a_position;
  attribute vec3 a_pickColor;
  uniform vec2 u_resolution;
  uniform float u_size;
  varying vec3 v_pickColor;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    gl_PointSize = u_size;
    v_pickColor = a_pickColor;
  }
`,Le=`
  precision mediump float;
  varying vec3 v_pickColor;
  void main() {
    vec2 coord = gl_PointCoord - vec2(0.5);
    if (dot(coord, coord) > 0.25) discard;
    gl_FragColor = vec4(v_pickColor, 1.0);
  }
`;function Se({resolved:t,color:n,size:u,opacity:s,width:i,height:c,data:y,renderTooltip:d}){const _=o.useRef(null),h=o.useRef(null),[x,b]=o.useState(-1),[R,E]=o.useState(null),[T,p]=o.useState(0),I=o.useRef(null),m=o.useRef(null),B=o.useRef(null),M=o.useRef(null),w=o.useRef(null),G=o.useMemo(()=>{const l=new Float32Array(t.length*2);for(let f=0;f<t.length;f++)l[f*2]=t[f].px,l[f*2+1]=t[f].py;return l},[t]),O=o.useMemo(()=>{const l=new Float32Array(t.length*3);for(let f=0;f<t.length;f++){const[F,A,C]=be(f);l[f*3]=F,l[f*3+1]=A,l[f*3+2]=C}return l},[t.length]);o.useEffect(()=>{if(i<=0||c<=0)return;const l=window.devicePixelRatio||1,f=Math.max(1,Math.round(i*l)),F=Math.max(1,Math.round(c*l)),A=_.current;if(A){if(A.width!==f&&(A.width=f),A.height!==F&&(A.height=F),!I.current){const e=A.getContext("webgl",{alpha:!0,premultipliedAlpha:!1,antialias:!0}),L=e?$(e,Ee,Fe):null;e&&L&&(I.current={gl:e,prog:L},m.current=null)}const S=I.current;if(S&&!S.gl.isContextLost()){const{gl:e,prog:L}=S;m.current||(m.current=e.createBuffer());const N=m.current;if(N){e.viewport(0,0,A.width,A.height),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.enable(e.BLEND),e.blendFunc(e.SRC_ALPHA,e.ONE_MINUS_SRC_ALPHA),e.useProgram(L),e.bindBuffer(e.ARRAY_BUFFER,N),e.bufferData(e.ARRAY_BUFFER,G,e.STATIC_DRAW);const U=e.getAttribLocation(L,"a_position");e.enableVertexAttribArray(U),e.vertexAttribPointer(U,2,e.FLOAT,!1,0,0);const[D,k,W]=J(n);e.uniform2f(e.getUniformLocation(L,"u_resolution"),i,c),e.uniform3f(e.getUniformLocation(L,"u_color"),D,k,W),e.uniform1f(e.getUniformLocation(L,"u_size"),u*l),e.uniform1f(e.getUniformLocation(L,"u_opacity"),s),e.drawArrays(e.POINTS,0,G.length/2)}}}const C=h.current;if(C){if(C.width!==f&&(C.width=f),C.height!==F&&(C.height=F),!B.current){const e=C.getContext("webgl",{alpha:!1,premultipliedAlpha:!1,antialias:!1,preserveDrawingBuffer:!0});if(e){const L=$(e,Ce,Le),N=e.createFramebuffer(),U=e.createTexture();L&&N&&U&&(e.bindTexture(e.TEXTURE_2D,U),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.NEAREST),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.NEAREST),e.bindFramebuffer(e.FRAMEBUFFER,N),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,U,0),e.bindFramebuffer(e.FRAMEBUFFER,null),B.current={gl:e,prog:L,fb:N,tex:U,texW:0,texH:0,dpr:l},M.current=null,w.current=null)}}const S=B.current;if(S&&!S.gl.isContextLost()){const{gl:e,prog:L,fb:N,tex:U}=S;S.dpr=l,(S.texW!==C.width||S.texH!==C.height)&&(e.bindTexture(e.TEXTURE_2D,U),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,C.width,C.height,0,e.RGBA,e.UNSIGNED_BYTE,null),S.texW=C.width,S.texH=C.height),M.current||(M.current=e.createBuffer()),w.current||(w.current=e.createBuffer());const D=M.current,k=w.current;if(D&&k){e.bindFramebuffer(e.FRAMEBUFFER,N),e.viewport(0,0,C.width,C.height),e.clearColor(0,0,0,1),e.clear(e.COLOR_BUFFER_BIT),e.disable(e.BLEND),e.useProgram(L),e.bindBuffer(e.ARRAY_BUFFER,D),e.bufferData(e.ARRAY_BUFFER,G,e.STATIC_DRAW);const W=e.getAttribLocation(L,"a_position");e.enableVertexAttribArray(W),e.vertexAttribPointer(W,2,e.FLOAT,!1,0,0),e.bindBuffer(e.ARRAY_BUFFER,k),e.bufferData(e.ARRAY_BUFFER,O,e.STATIC_DRAW);const j=e.getAttribLocation(L,"a_pickColor");e.enableVertexAttribArray(j),e.vertexAttribPointer(j,3,e.FLOAT,!1,0,0),e.uniform2f(e.getUniformLocation(L,"u_resolution"),i,c),e.uniform1f(e.getUniformLocation(L,"u_size"),(u+_e)*l),e.drawArrays(e.POINTS,0,G.length/2),e.bindFramebuffer(e.FRAMEBUFFER,null)}}}},[i,c,G,O,n,u,s,T]),o.useEffect(()=>{const l=[],f=_.current;f&&l.push(X(f,()=>{I.current=null,m.current=null},()=>p(A=>A+1)));const F=h.current;return F&&l.push(X(F,()=>{B.current=null,M.current=null,w.current=null},()=>p(A=>A+1))),()=>{for(const A of l)A()}},[]),o.useEffect(()=>()=>{const l=I.current;if(l){const{gl:F,prog:A}=l;m.current&&F.deleteBuffer(m.current),F.deleteProgram(A),q(F)}const f=B.current;if(f){const{gl:F,prog:A,fb:C,tex:S}=f;M.current&&F.deleteBuffer(M.current),w.current&&F.deleteBuffer(w.current),F.deleteFramebuffer(C),F.deleteTexture(S),F.deleteProgram(A),q(F)}I.current=null,m.current=null,B.current=null,M.current=null,w.current=null},[]);const a=o.useCallback(l=>{const f=B.current;if(!f||f.gl.isContextLost())return;const F=l.currentTarget.ownerSVGElement;if(!F)return;const A=l.currentTarget.getScreenCTM();if(!A)return;const C=F.createSVGPoint();C.x=l.clientX,C.y=l.clientY;const S=C.matrixTransform(A.inverse()),{gl:e,fb:L,dpr:N,texW:U,texH:D}=f,k=Math.floor(S.x*N),W=Math.floor(S.y*N);if(k<0||W<0||k>=U||W>=D){b(-1),E(null);return}e.bindFramebuffer(e.FRAMEBUFFER,L);const j=new Uint8Array(4);e.readPixels(k,D-W,1,1,e.RGBA,e.UNSIGNED_BYTE,j),e.bindFramebuffer(e.FRAMEBUFFER,null);const H=Ae(j[0],j[1],j[2]);b(H),E(H>=0?{x:S.x,y:S.y}:null)},[]),r=o.useCallback(()=>{b(-1),E(null)},[]),g=x>=0&&x<y.length?y[x]:null,P=(l,f)=>v.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:2,fontSize:12},children:[v.jsxs("div",{style:{fontWeight:600,color:"var(--color-text-primary)"},children:["Point ",f]}),Object.entries(l).map(([F,A])=>v.jsxs("div",{children:[v.jsxs("span",{style:{color:"var(--color-text-secondary)"},children:[F,":"]})," ",v.jsx("span",{style:{fontWeight:500},children:String(A)})]},F))]});return v.jsxs("g",{children:[v.jsx("foreignObject",{x:0,y:0,width:i,height:c,style:{overflow:"hidden"},children:v.jsx("canvas",{ref:_,style:{width:i,height:c,pointerEvents:"none"}})}),v.jsx("foreignObject",{x:0,y:0,width:0,height:0,style:{overflow:"hidden"},children:v.jsx("canvas",{ref:h,style:{display:"none"}})}),v.jsx("rect",{x:0,y:0,width:i,height:c,fill:"transparent",onMouseMove:a,onMouseLeave:r}),g&&x>=0&&v.jsxs("g",{pointerEvents:"none",children:[v.jsx("circle",{cx:G[x*2],cy:G[x*2+1],r:u/2+7,fill:"none",stroke:n,strokeWidth:2,strokeOpacity:.35}),v.jsx("circle",{cx:G[x*2],cy:G[x*2+1],r:u/2+2.5,fill:n,stroke:"var(--color-background-body, #fff)",strokeWidth:2})]}),g&&R&&v.jsx("foreignObject",{x:R.x+12,y:Math.max(0,R.y-40),width:200,height:120,pointerEvents:"none",style:{overflow:"visible"},children:v.jsx("div",{style:{background:"var(--color-background-popover)",border:"1px solid var(--color-border)",borderRadius:8,padding:"8px 12px",boxShadow:"var(--shadow-med)",whiteSpace:"nowrap",width:"fit-content"},children:d?d(g,x):P(g,x)})})]})}function Te(t,n){const{color:u}=n,s=n.size??6,i=n.opacity??.8,c=n.renderTooltip;return{type:"dotGLInteractive",key:t,dataKeys:[t],layout:{},resolve(y){const{data:d,xKey:_,xScale:h,yScale:x}=y,b=[];for(let R=0;R<d.length;R++){const E=d[R];let T;"bandwidth"in h?T=(h(String(E[_]))??0)+h.bandwidth()/2:T=h(E[_]);const p=typeof E[t]=="number"?E[t]:0;b.push({px:T,py:x(p),py0:x(0),dataIndex:R})}return b},render(y,d){return v.jsx(Se,{resolved:y,color:u,size:s,opacity:i,width:d.width,height:d.height,data:d.data,renderTooltip:c})}}}const Be=`
  attribute vec2 a_position;
  attribute vec3 a_color;
  uniform vec2 u_resolution;
  varying vec3 v_color;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
    v_color = a_color;
  }
`,we=`
  precision mediump float;
  varying vec3 v_color;
  void main() {
    gl_FragColor = vec4(v_color, 1.0);
  }
`;function Pe(t,n){if(t.length===0)return[0,0,0];const u=Math.max(0,Math.min(1,Number.isFinite(n)?n:0));if(t.length===1)return t[0];const s=u*(t.length-1),i=Math.floor(s),c=Math.min(i+1,t.length-1),y=s-i;return[t[i][0]+y*(t[c][0]-t[i][0]),t[i][1]+y*(t[c][1]-t[i][1]),t[i][2]+y*(t[c][2]-t[i][2])]}function Ie({data:t,xKey:n,yKey:u,valueKey:s,xScale:i,colorRange:c,domain:y,cellGap:d,width:_,height:h}){const x=o.useRef(null),b=o.useRef(null),R=o.useRef(null),E=o.useRef(null),T=o.useRef(null),p=o.useRef(null),I=o.useRef(null),[m,B]=o.useState(0),M=o.useMemo(()=>c.map(J),[c]),w=o.useMemo(()=>{const a=[...new Set(t.map(r=>String(r[u])))];return me().domain(a).range([0,h]).padding(.05)},[t,u,h]),G=o.useMemo(()=>{if(y)return y;let a=1/0,r=-1/0;for(const g of t){const P=g[s];typeof P=="number"&&Number.isFinite(P)&&(P<a&&(a=P),P>r&&(r=P))}return!Number.isFinite(a)||!Number.isFinite(r)?[0,1]:[a,r]},[t,s,y]),O=o.useMemo(()=>{const a=[],r=[],[g,P]=G,l=P-g||1,f=d,F=i.bandwidth(),A=w.bandwidth();for(const C of t){const S=i(String(C[n])),e=w(String(C[u]));if(S==null||e==null)continue;const L=C[s],U=((typeof L=="number"&&Number.isFinite(L)?L:0)-g)/l,[D,k,W]=Pe(M,U),j=S+f/2,H=S+F-f/2,ee=e+f/2,te=e+A-f/2;a.push(j,ee,H,ee,j,te,H,ee,H,te,j,te);for(let ae=0;ae<6;ae++)r.push(D,k,W)}return{positions:new Float32Array(a),colors:new Float32Array(r),vertexCount:a.length/2}},[t,n,u,s,i,w,G,M,d]);return o.useEffect(()=>{const a=I.current;if(!a)return;x.current||(x.current=document.createElement("canvas"));const r=x.current,g=ie(a,r,_,h),P=X(r,()=>{b.current=null,R.current=null,E.current=null,T.current=null,p.current=null},()=>B(l=>l+1));return()=>{P(),g?.()}},[_,h]),o.useEffect(()=>{const a=x.current;if(!a||_<=0||h<=0)return;ce(a,_,h),b.current||(b.current=ne(a));const r=b.current;if(!r||r.isContextLost())return;R.current||(R.current=$(r,Be,we),p.current=null);const g=R.current;if(!g)return;E.current||(E.current=r.createBuffer()),T.current||(T.current=r.createBuffer());const P=E.current,l=T.current;if(!P||!l)return;p.current||(p.current={aPosition:r.getAttribLocation(g,"a_position"),aColor:r.getAttribLocation(g,"a_color"),uResolution:r.getUniformLocation(g,"u_resolution")});const f=p.current;r.viewport(0,0,a.width,a.height),oe(r),r.useProgram(g),r.bindBuffer(r.ARRAY_BUFFER,P),r.bufferData(r.ARRAY_BUFFER,O.positions,r.STATIC_DRAW),r.enableVertexAttribArray(f.aPosition),r.vertexAttribPointer(f.aPosition,2,r.FLOAT,!1,0,0),r.bindBuffer(r.ARRAY_BUFFER,l),r.bufferData(r.ARRAY_BUFFER,O.colors,r.STATIC_DRAW),r.enableVertexAttribArray(f.aColor),r.vertexAttribPointer(f.aColor,3,r.FLOAT,!1,0,0),r.uniform2f(f.uResolution,_,h),r.drawArrays(r.TRIANGLES,0,O.vertexCount)},[O,_,h,m]),o.useEffect(()=>()=>{const a=b.current;a&&(E.current&&a.deleteBuffer(E.current),T.current&&a.deleteBuffer(T.current),R.current&&a.deleteProgram(R.current),q(a)),b.current=null,R.current=null,E.current=null,T.current=null,p.current=null},[]),_<=0||h<=0?null:v.jsx("g",{ref:I})}function Me(t){const{xKey:n,yKey:u,valueKey:s,colorRange:i}=t,c=t.cellGap??1;return{type:"heatmapGL",key:`heatmap-${s}`,dataKeys:[s],layout:{},resolve(y){const{data:d,xScale:_,yScale:h}=y,x=[];if(!("bandwidth"in _))return x;for(let b=0;b<d.length;b++){const R=d[b],E=(_(String(R[n]))??0)+_.bandwidth()/2,T=typeof R[s]=="number"?R[s]:0;x.push({px:E,py:h(T),py0:h(0),dataIndex:b})}return x},render(y,d){return"bandwidth"in d.xScale?v.jsx(Ie,{data:d.data,xKey:n,yKey:u,valueKey:s,xScale:d.xScale,colorRange:i,domain:t.domain,cellGap:c,width:d.width,height:d.height}):null}}}const Ge=`
  attribute vec2 a_position;
  uniform vec2 u_resolution;
  void main() {
    vec2 clip = (a_position / u_resolution) * 2.0 - 1.0;
    gl_Position = vec4(clip.x, -clip.y, 0.0, 1.0);
  }
`,Ue=`
  precision mediump float;
  uniform vec3 u_color;
  uniform float u_opacity;
  void main() {
    float a = u_opacity;
    gl_FragColor = vec4(u_color * a, a);
  }
`;function De({color:t,bufferSize:n,lineWidth:u,opacity:s,width:i,height:c,handleRef:y}){const{xScale:d,yScale:_}=de(),h=o.useRef(null),x=o.useRef(null),b=o.useRef(null),R=o.useRef(null),E=o.useRef(null),T=o.useRef(null),p=o.useRef(null),[I,m]=o.useState(0),B=o.useRef({data:new Float32Array(n*2),head:0,count:0,capacity:n}),M=o.useRef(new Float32Array(n*2));o.useEffect(()=>{const a=B.current;a.capacity!==n&&(a.data=new Float32Array(n*2),a.head=0,a.count=0,a.capacity=n,M.current=new Float32Array(n*2))},[n]);const w=o.useCallback(()=>{const a=h.current;if(!a||i<=0||c<=0)return;x.current||(x.current=ne(a));const r=x.current;if(!r||r.isContextLost())return;b.current||(b.current=$(r,Ge,Ue),E.current=null);const g=b.current;if(!g)return;R.current||(R.current=r.createBuffer());const P=R.current;if(!P)return;E.current||(E.current={aPosition:r.getAttribLocation(g,"a_position"),uResolution:r.getUniformLocation(g,"u_resolution"),uColor:r.getUniformLocation(g,"u_color"),uOpacity:r.getUniformLocation(g,"u_opacity")});const l=E.current;r.viewport(0,0,a.width,a.height),oe(r);const{data:f,head:F,count:A,capacity:C}=B.current;if(A<2)return;const S=d,e=M.current;for(let D=0;D<A;D++){const k=(F-A+D+C)%C*2;e[D*2]=S(f[k]),e[D*2+1]=_(f[k+1])}r.useProgram(g),r.bindBuffer(r.ARRAY_BUFFER,P),r.bufferData(r.ARRAY_BUFFER,e.subarray(0,A*2),r.DYNAMIC_DRAW),r.enableVertexAttribArray(l.aPosition),r.vertexAttribPointer(l.aPosition,2,r.FLOAT,!1,0,0);const[L,N,U]=J(t);r.uniform2f(l.uResolution,i,c),r.uniform3f(l.uColor,L,N,U),r.uniform1f(l.uOpacity,s),r.lineWidth(u),r.drawArrays(r.LINE_STRIP,0,A)},[i,c,t,u,s,d,_]),G=o.useRef(w);o.useEffect(()=>{G.current=w},[w]);const O=o.useCallback(()=>{p.current==null&&(p.current=requestAnimationFrame(()=>{p.current=null,G.current()}))},[]);return o.useEffect(()=>{const a=T.current;if(!a)return;h.current||(h.current=document.createElement("canvas"));const r=h.current,g=ie(a,r,i,c),P=X(r,()=>{p.current!=null&&(cancelAnimationFrame(p.current),p.current=null),x.current=null,b.current=null,R.current=null,E.current=null},()=>m(l=>l+1));return()=>{P(),g?.()}},[i,c]),o.useEffect(()=>{const a=h.current;!a||i<=0||c<=0||ce(a,i,c)},[i,c]),o.useEffect(()=>{O()},[w,O,I]),o.useImperativeHandle(y,()=>({push(a,r){if(!Number.isFinite(a)||!Number.isFinite(r))return;const g=B.current,P=g.head*2;g.data[P]=a,g.data[P+1]=r,g.head=(g.head+1)%g.capacity,g.count=Math.min(g.count+1,g.capacity),O()},clear(){const a=B.current;a.head=0,a.count=0,p.current!=null&&(cancelAnimationFrame(p.current),p.current=null);const r=x.current;r&&!r.isContextLost()&&(r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT))}}),[O]),o.useEffect(()=>()=>{p.current!=null&&(cancelAnimationFrame(p.current),p.current=null);const a=x.current;a&&(R.current&&a.deleteBuffer(R.current),b.current&&a.deleteProgram(b.current),q(a)),x.current=null,b.current=null,R.current=null,E.current=null},[]),i<=0||c<=0?null:v.jsx("g",{ref:T})}function Oe(t){const{color:n}=t,u=t.bufferSize??500,s=t.lineWidth??2,i=t.opacity??1,c=t.handleRef;return{type:"streamGL",key:"stream",dataKeys:[],layout:{},resolve(){return[]},render(y,d){return v.jsx(De,{color:n,bufferSize:u,lineWidth:s,opacity:i,width:d.width,height:d.height,handleRef:c})}}}const et={title:"Charts/WebGL",component:Z},Q=v.jsxs(v.Fragment,{children:[v.jsx(se,{position:"bottom"}),v.jsx(se,{position:"left"})]}),V={name:"Scatter — static (high-performance)",render:()=>v.jsx(Z,{data:fe,xKey:"x",title:"WebGL scatter — static (dotGL)",series:[ye("y",{color:"#3b82f6",size:5})],grid:v.jsx(re,{horizontal:!0,vertical:!0}),axes:Q,height:400})},z={name:"Interactive scatter — hover + tooltip",render:()=>v.jsx(Z,{data:fe,xKey:"x",title:"WebGL scatter — interactive hover (dotGLInteractive)",series:[Te("y",{color:"#6b1efd",size:6,renderTooltip:t=>v.jsxs("span",{children:["x: ",Math.round(t.x),", y: ",Math.round(t.y)]})})],grid:v.jsx(re,{horizontal:!0,vertical:!0}),axes:Q,height:400})},Y={render:()=>v.jsx(Z,{data:pe,xKey:"hour",title:"Traffic heatmap",series:[Me({xKey:"hour",yKey:"day",valueKey:"traffic",colorRange:["#eff6ff","#1e40af"]})],axes:Q,height:280})},K={render:()=>{const t=o.useRef(null),n=60,[u,s]=o.useState(n);return o.useEffect(()=>{let i=0;const c=setInterval(()=>{t.current?.push(i,50+Math.sin(i/10)*30+Math.random()*10),i++,s(Math.max(n,i))},200);return()=>clearInterval(c)},[]),v.jsx(Z,{data:[],xKey:"x",title:"Live stream (streamGL)",xDomain:[Math.max(0,u-n),u],yDomain:[0,100],series:[Oe({handleRef:t,color:"#3b82f6"})],grid:v.jsx(re,{}),axes:Q,height:300})}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Scatter — static (high-performance)',
  render: () => <Chart data={scatterData} xKey="x" title="WebGL scatter — static (dotGL)" series={[dotGL('y', {
    color: '#3b82f6',
    size: 5
  })]} grid={<ChartGrid horizontal vertical />} axes={axes} height={400} />
}`,...V.parameters?.docs?.source},description:{story:'Static, high-performance GPU scatter (`dotGL`) — one draw call, scales to\ntens of thousands of points. Intentionally has NO hover/tooltip; for\ninteractivity see "Interactive scatter" below.',...V.parameters?.docs?.description}}};z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  name: 'Interactive scatter — hover + tooltip',
  render: () => <Chart data={scatterData} xKey="x" title="WebGL scatter — interactive hover (dotGLInteractive)" series={[dotGLInteractive('y', {
    color: '#6b1efd',
    size: 6,
    renderTooltip: (d: Record<string, unknown>) => <span>
              x: {Math.round(d.x as number)}, y: {Math.round(d.y as number)}
            </span>
  })]} grid={<ChartGrid horizontal vertical />} axes={axes} height={400} />
}`,...z.parameters?.docs?.source},description:{story:"GPU scatter with color-picking hover (`dotGLInteractive`) — hover any point\nfor a highlight + tooltip. O(1) hit detection regardless of point count.",...z.parameters?.docs?.description}}};Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
  render: () => <Chart data={heatmapData} xKey="hour" title="Traffic heatmap" series={[heatmapGL({
    xKey: 'hour',
    yKey: 'day',
    valueKey: 'traffic',
    colorRange: ['#eff6ff', '#1e40af']
  })]} axes={axes} height={280} />
}`,...Y.parameters?.docs?.source},description:{story:"GPU heatmap — a 2D grid of colored cells (traffic by hour x day).",...Y.parameters?.docs?.description}}};K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
  render: () => {
    const handleRef = useRef<StreamGLHandle | null>(null) as MutableRefObject<StreamGLHandle | null>;
    const WINDOW = 60;
    const [windowEnd, setWindowEnd] = useState(WINDOW);
    useEffect(() => {
      let t = 0;
      const interval = setInterval(() => {
        handleRef.current?.push(t, 50 + Math.sin(t / 10) * 30 + Math.random() * 10);
        t++;
        setWindowEnd(Math.max(WINDOW, t));
      }, 200);
      return () => clearInterval(interval);
    }, []);
    return <Chart data={[]} xKey="x" title="Live stream (streamGL)" xDomain={[Math.max(0, windowEnd - WINDOW), windowEnd]} yDomain={[0, 100]} series={[streamGL({
      handleRef,
      color: '#3b82f6'
    })]} grid={<ChartGrid />} axes={axes} height={300} />;
  }
}`,...K.parameters?.docs?.source},description:{story:"Streaming line via an imperative push handle + a sliding domain window.",...K.parameters?.docs?.description}}};const tt=["Scatter","InteractiveScatter","Heatmap","Streaming"];export{Y as Heatmap,z as InteractiveScatter,V as Scatter,K as Streaming,tt as __namedExportsOrder,et as default};
