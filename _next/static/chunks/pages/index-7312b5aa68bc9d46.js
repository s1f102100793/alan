(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{9208:function(e,s,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(1155)}])},1155:function(e,s,t){"use strict";t.r(s),t.d(s,{default:function(){return eR}});var i=t(5893),a=t(8583),n=t(1163),r=t(7294),l=t(5103);let o=(0,l.cn)([]);var c=t(5371),d=t(5832),x=t(3377),h=t(1664),p=t.n(h);let u={themeFontColor:"var(--theme-font-color)",borderColor:"var(--border-color)",primitive:"var(--primitive)",warning:"var(--warning)"},j="どんなアプリが欲しいですか？";var f=t(7112),m=t.n(f);let v=e=>(0,i.jsx)("button",{className:m().button,style:!0===e.isDark?{background:"white",color:u.themeFontColor,width:e.width}:{background:"#fff1",borderColor:u.primitive,color:"white",width:e.width},disabled:e.disabled,onClick:e.onClick,children:e.label});var _=t(7602);let g=e=>{let{axis:s,size:t}=e;return"x"===s?1:t},w=e=>{let{axis:s,size:t}=e;return"y"===s?1:t},y=e=>(0,i.jsx)("span",{style:{display:"".concat("x"===e.axis?"inline-":"","block"),width:"".concat(w(e),"px"),minWidth:"".concat(w(e),"px"),height:"".concat(g(e),"px"),minHeight:"".concat(g(e),"px")}});var C=t(1961),b=t.n(C);let k=e=>(0,i.jsx)("div",{className:b().modalHeader,style:{borderBottom:"1px solid ".concat(u.borderColor,"33")},children:e.text}),L=e=>(0,i.jsx)("div",{className:b().body,children:e.content}),z=e=>{var s;return(0,i.jsxs)("div",{className:b().footer,children:[void 0!==e.okText&&!0===e.disabledOk&&void 0!==e.disabledText&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:b().warning,style:{color:u.warning},children:e.disabledText}),(0,i.jsx)(y,{axis:"y",size:12})]}),void 0!==e.headerText&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:b().header,children:e.headerText}),(0,i.jsx)(y,{axis:"y",size:12})]}),e.cancel&&(0,i.jsx)(v,{label:null!==(s=e.cancelText)&&void 0!==s?s:"キャンセル",onClick:e.cancel}),void 0!==e.okText&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(y,{axis:"x",size:16}),(0,i.jsx)(v,{label:e.okText,disabled:e.disabledOk,onClick:e.ok})]})]})},N=e=>(0,i.jsx)(_.h,{children:e.open&&(0,i.jsxs)("div",{className:b().container,children:[(0,i.jsx)("div",{className:b().background,onClick:e.onClose}),(0,i.jsx)("div",{className:b().card,children:e.children})]})});var B=t(2297),M=t.n(B);let I=e=>{var s;return(0,i.jsx)("input",{type:"text",className:M().textInput,style:{width:null!==(s=e.width)&&void 0!==s?s:"100%"},value:e.value,onChange:s=>e.onChange(s.target.value)})},A=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2.5",width:e.size,height:e.size,stroke:e.fill,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"}),(0,i.jsx)("path",{d:"M21 21l-6 -6"})]}),T=e=>{switch(e.conclusion){case null:return"running";case"cancelled":case"failure":case"timed_out":return"failure";case"skipped":case"stale":case"success":return"success";case"action_required":case"neutral":return"waiting";default:throw Error(e.conclusion)}},S=e=>{switch(e.status){case"QUEUED":case"WAITING":return"waiting";case"BUILDING":case"DEPLOYING":case"INITIALIZING":case"REMOVING":return"running";case"CRASHED":case"FAILED":case"REMOVED":case"SKIPPED":return"failure";case"SUCCESS":return"success";default:throw Error(e.status)}},E=e=>(0,r.useMemo)(()=>{var s;if("running"!==e.status)return e.status;let t=e.bubbles.flatMap(e=>"railway"===e.type?S(e.content):"github"===e.type?T(e.content):[]);return t.some(e=>"running"===e)?"running":null!==(s=t.at(-1))&&void 0!==s?s:e.status},[e]);var H=t(3601);let U=(0,l.cn)(0),G=(0,l.cn)(e=>e(U)>0),O=()=>{let[e,s]=(0,a.KO)(U),[t]=(0,a.KO)(G),n=(0,r.useCallback)(()=>s(e+1),[e,s]),l=(0,r.useCallback)(()=>s(e-1),[e,s]);return{loadingElm:(0,i.jsx)(H.g,{visible:t}),addLoading:n,removeLoading:l}},R={images:{iphone_png:"/images/iphone.png"}};var D=t(8870),F=t.n(D);let P=e=>{let s=E(e.app);return(0,i.jsx)("div",{className:F().statusCircle,style:{background:{waiting:"#aaa",init:"#ff0",running:"#ff0",success:"#14b869",failure:"#ec0000",closed:"#ec0000"}[s]}})},V=e=>{let{addLoading:s,removeLoading:t}=O(),[a,n]=(0,r.useState)(!1),[l,o]=(0,r.useState)(""),[c,x]=(0,r.useState)(""),[h,u]=(0,r.useState)(""),f=(0,r.useMemo)(()=>e.sortedApps.filter(s=>""===h?e.sortedApps:h.replace(/\u3000/g," ").split(" ").every(e=>[s.displayId,"No.".concat(s.index),s.author.name,s.name].join(" ").includes(e))),[h,e.sortedApps]),m=async()=>{s(),await d.x.apps.$post({body:{name:l,similarName:c}}).then(e.append),t(),o(""),x(""),n(!1)};return(0,i.jsxs)("div",{className:F().container,children:[e.user&&(0,i.jsx)("div",{className:F().createBtn,children:(0,i.jsx)(v,{label:"アプリ新規生成",width:"100%",onClick:()=>n(!0)})}),(0,i.jsxs)("div",{className:F().searchBox,children:[(0,i.jsx)("input",{className:F().searchInput,type:"text",placeholder:"スペースで絞り込み",value:h,onChange:e=>u(e.target.value)}),(0,i.jsx)("div",{className:F().searchIcon,children:(0,i.jsx)(A,{size:18,fill:"#fff"})})]}),(0,i.jsx)("div",{className:F().itemContainer,children:f.map(s=>{var t,a;return(0,i.jsx)(p(),{href:{pathname:"/",query:(a={query:{id:s.displayId}},a.query),hash:null==a?void 0:a.hash},shallow:!0,children:(0,i.jsxs)("div",{className:F().appItem,style:(null===(t=e.currentApp)||void 0===t?void 0:t.id)===s.id?{background:"#fff2",borderColor:"#fff"}:void 0,children:[(0,i.jsxs)("div",{className:F().itemHeader,children:[(0,i.jsx)(P,{app:s}),(0,i.jsx)("div",{}),(0,i.jsxs)("span",{children:["No.",s.index]}),(0,i.jsx)(y,{axis:"x",size:6}),(0,i.jsx)("span",{className:F().author,children:s.author.name})]}),(0,i.jsx)(y,{axis:"y",size:6}),(0,i.jsx)("div",{className:F().title,children:s.name})]})},s.id)})}),(0,i.jsxs)(N,{open:a,children:[(0,i.jsx)(k,{text:j}),(0,i.jsx)(L,{content:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{children:"アプリ名"}),(0,i.jsx)(y,{axis:"y",size:8}),(0,i.jsx)(I,{value:l,width:"400px",onChange:o}),(0,i.jsx)(y,{axis:"y",size:24}),(0,i.jsx)("div",{children:"類似サービス名"}),(0,i.jsx)(y,{axis:"y",size:8}),(0,i.jsx)(I,{value:c,width:"400px",onChange:x}),(0,i.jsx)(y,{axis:"y",size:24})]})}),(0,i.jsx)(z,{okText:"新規生成",ok:m,cancel:()=>n(!1)})]})]})},W=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:e.size,height:e.size,fill:e.fill,children:(0,i.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})});var q=t(4857),Z=t(328);let K=async()=>{let e=new q.GH;e.addScope("read:user"),await (0,q.rh)((0,Z.l)(),e).catch(x.F)},Y=async()=>{await (0,Z.l)().signOut()},J=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,stroke:e.fill,viewBox:"2 2 20 20",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"}),(0,i.jsx)("path",{d:"M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"}),(0,i.jsx)("path",{d:"M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855"})]}),X=e=>void 0!==e.photoURL?(0,i.jsx)("div",{style:{width:"".concat(e.size,"px"),height:"".concat(e.size,"px"),borderRadius:"50%",overflow:"hidden"},children:(0,i.jsx)("img",{src:e.photoURL,style:{width:"100%"}})}):(0,i.jsx)(J,{size:e.size,fill:"#fff"});var Q=t(1219),$=t.n(Q);let ee=e=>{let{loadingElm:s,addLoading:t,removeLoading:a}=O(),n=async()=>{t(),await K(),a()},r=async()=>{confirm("Logout?")&&await Y()};return(0,i.jsxs)("div",{className:$().container,children:[(0,i.jsxs)("div",{className:$().main,children:[(0,i.jsx)("div",{className:$().logo,children:"Deus Creatio"}),null===e.user?(0,i.jsx)("div",{onClick:n,children:(0,i.jsxs)("div",{className:$().loginBtn,children:[(0,i.jsx)(W,{size:18,fill:"#fff"}),(0,i.jsx)("span",{children:"Login with GitHub"})]})}):(0,i.jsxs)("div",{className:$().userBtn,onClick:r,children:[(0,i.jsx)(X,{size:24,photoURL:e.user.photoURL}),(0,i.jsx)("span",{className:$().userName,children:e.user.displayName})]})]}),s]})};var es=t(4161);let et=e=>(0,i.jsx)("svg",{viewBox:"0 0 320 320",width:e.size,height:e.size,fill:e.fill,xmlns:"http://www.w3.org/2000/svg",children:(0,i.jsx)("path",{d:"m297.06 130.97c7.26-21.79 4.76-45.66-6.85-65.48-17.46-30.4-52.56-46.04-86.84-38.68-15.25-17.18-37.16-26.95-60.13-26.81-35.04-.08-66.13 22.48-76.91 55.82-22.51 4.61-41.94 18.7-53.31 38.67-17.59 30.32-13.58 68.54 9.92 94.54-7.26 21.79-4.76 45.66 6.85 65.48 17.46 30.4 52.56 46.04 86.84 38.68 15.24 17.18 37.16 26.95 60.13 26.8 35.06.09 66.16-22.49 76.94-55.86 22.51-4.61 41.94-18.7 53.31-38.67 17.57-30.32 13.55-68.51-9.94-94.51zm-120.28 168.11c-14.03.02-27.62-4.89-38.39-13.88.49-.26 1.34-.73 1.89-1.07l63.72-36.8c3.26-1.85 5.26-5.32 5.24-9.07v-89.83l26.93 15.55c.29.14.48.42.52.74v74.39c-.04 33.08-26.83 59.9-59.91 59.97zm-128.84-55.03c-7.03-12.14-9.56-26.37-7.15-40.18.47.28 1.3.79 1.89 1.13l63.72 36.8c3.23 1.89 7.23 1.89 10.47 0l77.79-44.92v31.1c.02.32-.13.63-.38.83l-64.41 37.19c-28.69 16.52-65.33 6.7-81.92-21.95zm-16.77-139.09c7-12.16 18.05-21.46 31.21-26.29 0 .55-.03 1.52-.03 2.2v73.61c-.02 3.74 1.98 7.21 5.23 9.06l77.79 44.91-26.93 15.55c-.27.18-.61.21-.91.08l-64.42-37.22c-28.63-16.58-38.45-53.21-21.95-81.89zm221.26 51.49-77.79-44.92 26.93-15.54c.27-.18.61-.21.91-.08l64.42 37.19c28.68 16.57 38.51 53.26 21.94 81.94-7.01 12.14-18.05 21.44-31.2 26.28v-75.81c.03-3.74-1.96-7.2-5.2-9.06zm26.8-40.34c-.47-.29-1.3-.79-1.89-1.13l-63.72-36.8c-3.23-1.89-7.23-1.89-10.47 0l-77.79 44.92v-31.1c-.02-.32.13-.63.38-.83l64.41-37.16c28.69-16.55 65.37-6.7 81.91 22 6.99 12.12 9.52 26.31 7.15 40.1zm-168.51 55.43-26.94-15.55c-.29-.14-.48-.42-.52-.74v-74.39c.02-33.12 26.89-59.96 60.01-59.94 14.01 0 27.57 4.92 38.34 13.88-.49.26-1.33.73-1.89 1.07l-63.72 36.8c-3.26 1.85-5.26 5.31-5.24 9.06l-.04 89.79zm14.63-31.54 34.65-20.01 34.65 20v40.01l-34.65 20-34.65-20z"})}),ei=e=>(0,i.jsxs)("svg",{width:e.size,height:e.size,viewBox:"0 0 1024 1024",fill:e.fill,xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("path",{d:"M4.756 438.175A520.713 520.713 0 0 0 0 489.735h777.799c-2.716-5.306-6.365-10.09-10.045-14.772-132.97-171.791-204.498-156.896-306.819-161.26-34.114-1.403-57.249-1.967-193.037-1.967-72.677 0-151.688.185-228.628.39-9.96 26.884-19.566 52.942-24.243 74.14h398.571v51.909H4.756ZM783.93 541.696H.399c.82 13.851 2.112 27.517 3.978 40.999h723.39c32.248 0 50.299-18.297 56.162-40.999ZM45.017 724.306S164.941 1018.77 511.46 1024c207.112 0 385.071-123.006 465.907-299.694H45.017Z",fill:"#fff"}),(0,i.jsx)("path",{d:"M511.454 0C319.953 0 153.311 105.16 65.31 260.612c68.771-.144 202.704-.226 202.704-.226h.031v-.051c158.309 0 164.193.707 195.118 1.998l19.149.706c66.7 2.224 148.683 9.384 213.19 58.19 35.015 26.471 85.571 84.896 115.708 126.52 27.861 38.499 35.876 82.756 16.933 125.158-17.436 38.97-54.952 62.215-100.383 62.215H16.69s4.233 17.944 10.58 37.751h970.632A510.385 510.385 0 0 0 1024 512.218C1024.01 229.355 794.532 0 511.454 0Z",fill:"#fff"})]});var ea=t(7376),en=t.n(ea);let er=()=>(0,i.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("circle",{cx:"10",cy:"10",r:"10",fill:"#14b869"}),(0,i.jsx)("path",{d:"M5 9L9 13L15 7",stroke:"white",strokeWidth:"2"})]}),el=()=>(0,i.jsxs)("svg",{width:"20",height:"20",viewBox:"0 0 20 20",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("circle",{cx:"10",cy:"10",r:"10",fill:"#ec0000"}),(0,i.jsx)("path",{d:"M14.1355 6.46454L7.06445 13.5356",stroke:"white",strokeWidth:"2"}),(0,i.jsx)("path",{d:"M14.1355 13.5356L7.06445 6.46452",stroke:"white",strokeWidth:"2"})]}),eo=e=>({waiting:(0,i.jsx)("div",{className:en().loader}),init:(0,i.jsx)("div",{className:en().loader}),running:(0,i.jsx)("div",{className:en().loader}),success:(0,i.jsx)(er,{}),failure:(0,i.jsx)(el,{}),closed:(0,i.jsx)(el,{})})[e.status],ec=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,stroke:e.fill,viewBox:"0 0 24 24",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M7 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}),(0,i.jsx)("path",{d:"M7 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}),(0,i.jsx)("path",{d:"M17 6m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}),(0,i.jsx)("path",{d:"M7 8l0 8"}),(0,i.jsx)("path",{d:"M9 18h6a2 2 0 0 0 2 -2v-5"}),(0,i.jsx)("path",{d:"M14 14l3 -3l3 3"})]});var ed=t(7484),ex=t.n(ed),eh=t(6831),ep=t.n(eh);ex().locale(ep());let eu=e=>ex()(e).format("YYYY/MM/DD HH:mm:ss"),ej=(e,s)=>ex()(s).diff(e,"s"),ef=e=>{var s;let[t,a]=(0,r.useState)(null!==(s=e.end)&&void 0!==s?s:e.start),n=ej(e.start,t),l=n%60,o=(n-l)/60%60,c=(n-60*o-l)/3600;return(0,r.useEffect)(()=>{if(void 0!==e.end){a(e.end);return}let s=window.setInterval(()=>{a(Date.now())},1e3);return()=>{clearInterval(s)}},[e.end]),(0,i.jsxs)("span",{children:[c>0?"".concat(c,"h"):"",o>0?"".concat(o,"m"):"",l,"s"]})};var em=t(7943),ev=t.n(em);let e_=e=>(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("span",{className:ev().nameLabel,children:e.name}),(0,i.jsx)(y,{axis:"x",size:8}),(0,i.jsx)("span",{className:ev().sentTime,children:eu(e.createdTime)})]}),eg=e=>(0,i.jsxs)(es.v0,{model:{type:"custom"},avatarPosition:"tl",children:[(0,i.jsxs)(es.qE,{children:[(0,i.jsx)(y,{axis:"y",size:26}),(0,i.jsx)(y,{axis:"x",size:4}),e.icon]}),(0,i.jsxs)(es.v0.CustomContent,{children:[(0,i.jsx)(e_,{name:"github"===e.content.model?"GitHub Actions":"Railway",createdTime:e.content.createdTime}),(0,i.jsx)(y,{axis:"y",size:8}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(eo,{status:e.status}),(0,i.jsx)(y,{axis:"x",size:10}),(0,i.jsx)(p(),{href:e.content.url,target:"_brank",style:{flex:1},children:(0,i.jsx)("div",{className:ev().contentTitle,children:e.title})})]}),(0,i.jsx)(y,{axis:"y",size:6}),(0,i.jsxs)("div",{style:{display:"flex",alignItems:"center"},children:[(0,i.jsx)(y,{axis:"x",size:2}),(0,i.jsxs)("div",{style:{height:"20px"},children:[(0,i.jsx)(y,{axis:"y",size:2}),(0,i.jsx)(ec,{size:20,fill:"#fff"})]}),(0,i.jsx)(y,{axis:"x",size:8}),(0,i.jsx)(p(),{href:e.content.branchUrl,target:"_brank",className:ev().commitLink,children:e.content.branch}),(0,i.jsx)(y,{axis:"x",size:6}),(0,i.jsx)("div",{children:"-"}),(0,i.jsx)(y,{axis:"x",size:6}),(0,i.jsx)(p(),{href:e.content.commitUrl,target:"_brank",className:ev().commitLink,children:e.content.commitId.slice(0,7)}),(0,i.jsx)(y,{axis:"x",size:40}),(0,i.jsx)("div",{style:{marginLeft:"auto"},children:(0,i.jsx)(ef,{start:e.content.createdTime,end:"failure"===e.status||"success"===e.status?e.content.updatedTime:void 0})})]})]})]}),ew=e=>(0,i.jsxs)(es.v0,{model:{type:"custom"},avatarPosition:"tl",children:[(0,i.jsxs)(es.qE,{children:[(0,i.jsx)(y,{axis:"y",size:26}),(0,i.jsx)(y,{axis:"x",size:4}),(0,i.jsx)(et,{size:32,fill:"#fff"})]}),(0,i.jsxs)(es.v0.CustomContent,{children:[(0,i.jsx)(e_,{name:"GPT4-turbo",createdTime:e.bubble.createdTime}),(0,i.jsx)(y,{axis:"y",size:6}),(()=>{switch(e.bubble.content){case"first_question":return j;case"waiting_init":var s;return"API制限回避のため順番にインフラを構築します。\n開始まで残り".concat(null!==(s=e.app.waitingOrder)&&void 0!==s?s:0,"人です。");case"completed_github":return"GitHubリポジトリを作成しました。";case"init_infra":return"インフラのセットアップを開始しています。";case"creating_schema":return"DBスキーマを作成しています。";case"creating_api_def":return"REST API定義ファイルを作成しています。";case"creating_client_code":return"フロントエンドの開発を開始しています。";case"creating_server_code":return"バックエンドの開発を開始しています。";case"fixing_client_code":return"フロントエンドのエラーを修正しています。";case"fixing_server_code":return"バックエンドのエラーを修正しています。";default:throw Error(e.bubble.content)}})()]})]}),ey=e=>{let s="closed"===e.app.status,t=E(e.app);return(0,i.jsxs)("div",{className:ev().container,children:[(0,i.jsxs)("div",{className:ev().header,children:[(0,i.jsx)(eo,{status:t}),(0,i.jsx)(y,{axis:"x",size:12}),(0,i.jsxs)("span",{className:ev().indexLabel,children:["No.",e.app.index]}),(0,i.jsxs)(p(),{className:ev().authorLink,href:"https://github.com/".concat(e.app.author.githubId),target:"_brank",children:[(0,i.jsx)(X,{size:24,photoURL:e.app.author.photoURL}),e.app.author.name]})]}),(0,i.jsx)("div",{style:{flex:1,position:"relative"},children:(0,i.jsx)(es.tz,{className:ev().mainContainer,children:(0,i.jsxs)(es.uU,{style:{background:"transparent"},children:[(0,i.jsx)(es.rN,{style:{background:"transparent"},typingIndicator:"running"===e.app.status&&s&&(0,i.jsx)(es.c2,{style:{background:"transparent"},content:"ChatGPTが思考中"}),children:e.app.bubbles.map(s=>{switch(s.type){case"github":return(0,i.jsx)(eg,{title:s.content.type===s.content.title?s.content.type:"".concat(s.content.type," - ").concat(s.content.title),content:s.content,status:T(s.content),icon:(0,i.jsx)(W,{size:32,fill:"#fff"})},s.id);case"railway":return(0,i.jsx)(eg,{title:"Server Deployment - ".concat(s.content.title),content:s.content,status:S(s.content),icon:(0,i.jsx)(ei,{size:32,fill:"#fff"})},s.id);case"system":return(0,i.jsx)(ew,{app:e.app,bubble:s},s.id);case"ai":return(0,i.jsxs)(es.v0,{model:{type:"custom"},avatarPosition:"tl",children:[(0,i.jsxs)(es.qE,{children:[(0,i.jsx)(y,{axis:"y",size:26}),(0,i.jsx)(y,{axis:"x",size:4}),(0,i.jsx)(et,{size:32,fill:"#fff"})]}),(0,i.jsxs)(es.v0.CustomContent,{children:[(0,i.jsx)(e_,{name:"GPT4-turbo",createdTime:s.createdTime}),(0,i.jsx)(y,{axis:"y",size:6}),(0,i.jsx)("div",{children:s.content})]})]},s.id);case"human":return(0,i.jsxs)(es.v0,{model:{type:"custom",direction:"outgoing"},avatarPosition:"tr",children:[(0,i.jsxs)(es.qE,{children:[(0,i.jsx)(y,{axis:"y",size:26}),(0,i.jsx)(y,{axis:"x",size:4}),(0,i.jsx)(X,{size:32,photoURL:e.app.author.photoURL})]}),(0,i.jsxs)(es.v0.CustomContent,{children:[(0,i.jsx)(e_,{name:e.app.author.name,createdTime:s.createdTime}),(0,i.jsx)(y,{axis:"y",size:6}),(0,i.jsx)("div",{children:s.content})]})]},s.id);default:throw Error(s)}})}),(0,i.jsx)(es.Ru,{style:{background:"#fff2",borderTopColor:u.borderColor},placeholder:"変更要望を入力",sendButton:!1,attachButton:!1,disabled:"running"!==e.app.status})]})})})]})},eC=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 13",fill:"none",stroke:e.fill,strokeWidth:"1",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("rect",{x:"0.5",y:"0",width:"22",height:"12",rx:"3",ry:"3",stroke:e.fill}),(0,i.jsx)("rect",{x:"2.5",y:"2.5",width:"18",height:"7",rx:"1",ry:"1",fill:e.fill}),(0,i.jsx)("rect",{x:"23",y:"4.5",width:"1",height:"3",fill:e.fill})]}),eb=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:e.fill,children:[(0,i.jsx)("rect",{x:"3",y:14,width:3,height:3,rx:1,ry:1}),(0,i.jsx)("rect",{x:"8",y:12,width:3,height:5,rx:1,ry:1}),(0,i.jsx)("rect",{x:"13",y:10,width:3,height:7,rx:1,ry:1}),(0,i.jsx)("rect",{x:"18",y:8,width:3,height:9,rx:1,ry:1})]}),ek=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 28 28",fill:"none",stroke:e.fill,strokeWidth:"2.5",children:[(0,i.jsx)("path",{d:"M5 12.5C10 7 17 7 23 12.5"}),(0,i.jsx)("path",{d:"M8 15.75C11 12 17 12 20 15.75"}),(0,i.jsx)("path",{d:"M11.15 18.5C12 17 16 17 16.85 18.5"}),(0,i.jsx)("polygon",{points:"14,20 13,19 15,19"})]});var eL=t(6236),ez=t.n(eL);let eN=e=>{var s;return(0,i.jsx)("textarea",{className:ez().textarea,rows:e.rows,style:{width:null!==(s=e.width)&&void 0!==s?s:"100%"},value:e.value,onChange:s=>e.onChange(s.target.value)})},eB=e=>(0,i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,fill:e.fill,viewBox:"0 0 512 512",children:(0,i.jsx)("g",{children:(0,i.jsx)("path",{d:"M407.813,212.719h-9.5v-70.406c0.016-39.203-15.984-74.969-41.688-100.625C330.969,15.969,295.203-0.016,256,0 c-39.203-0.016-74.969,15.969-100.625,41.688c-25.703,25.656-41.703,61.422-41.672,100.625v70.406h-9.516 c-34.453,0-62.375,27.938-62.375,62.375v174.531c0,34.438,27.922,62.375,62.375,62.375h303.625 c34.453,0,62.375-27.938,62.375-62.375V275.094C470.188,240.656,442.266,212.719,407.813,212.719z M175.313,142.313 c0.016-22.391,8.984-42.375,23.625-57.063C213.641,70.594,233.625,61.625,256,61.625s42.359,8.969,57.047,23.625 c14.656,14.688,23.625,34.672,23.641,57.063v70.406H175.313V142.313z"})})}),eM=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,stroke:e.fill,viewBox:"0 0 24 24",strokeWidth:"1.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M19.933 13.041a8 8 0 1 1 -9.925 -8.788c3.899 -1 7.935 1.007 9.425 4.747"}),(0,i.jsx)("path",{d:"M20 4v5h-5"})]}),eI=e=>(0,i.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:e.size,height:e.size,viewBox:"1 1 22 22",strokeWidth:"1.5",stroke:e.fill,fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[(0,i.jsx)("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),(0,i.jsx)("path",{d:"M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4"}),(0,i.jsx)("path",{d:"M11.5 3a16.989 16.989 0 0 0 -1.826 4"}),(0,i.jsx)("path",{d:"M12.5 3a16.989 16.989 0 0 1 1.828 4"}),(0,i.jsx)("path",{d:"M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4"}),(0,i.jsx)("path",{d:"M11.5 21a16.989 16.989 0 0 1 -1.826 -4"}),(0,i.jsx)("path",{d:"M12.5 21a16.989 16.989 0 0 0 1.828 -4"}),(0,i.jsx)("path",{d:"M2 10l1 4l1.5 -4l1.5 4l1 -4"}),(0,i.jsx)("path",{d:"M17 10l1 4l1.5 -4l1.5 4l1 -4"}),(0,i.jsx)("path",{d:"M9.5 10l1 4l1.5 -4l1.5 4l1 -4"})]}),eA=e=>(0,i.jsxs)("svg",{width:e.size,height:e.size,viewBox:"0 0 100 100",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,i.jsx)("g",{clipPath:"url(#clip0)",children:(0,i.jsxs)("g",{filter:"url(#filter0_d)",children:[(0,i.jsx)("mask",{id:"mask0",maskUnits:"userSpaceOnUse",x:"0",y:"0",width:"100",height:"100",style:{maskType:"alpha"},children:(0,i.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M70.9119 99.5723C72.4869 100.189 74.2828 100.15 75.8725 99.3807L96.4604 89.4231C98.624 88.3771 100 86.1762 100 83.7616V16.2392C100 13.8247 98.624 11.6238 96.4604 10.5774L75.8725 0.619067C73.7862 -0.389991 71.3446 -0.142885 69.5135 1.19527C69.252 1.38636 69.0028 1.59985 68.769 1.83502L29.3551 37.9795L12.1872 24.88C10.5891 23.6607 8.35365 23.7606 6.86938 25.1178L1.36302 30.1525C-0.452603 31.8127 -0.454583 34.6837 1.35854 36.3466L16.2471 50.0001L1.35854 63.6536C-0.454583 65.3164 -0.452603 68.1876 1.36302 69.8477L6.86938 74.8824C8.35365 76.2395 10.5891 76.34 12.1872 75.1201L29.3551 62.0207L68.769 98.1651C69.3925 98.7923 70.1246 99.2645 70.9119 99.5723ZM75.0152 27.1813L45.1092 50.0001L75.0152 72.8189V27.1813Z",fill:"white"})}),(0,i.jsxs)("g",{mask:"url(#mask0)",children:[(0,i.jsx)("path",{d:"M96.4614 10.593L75.8567 0.62085C73.4717 -0.533437 70.6215 -0.0465506 68.7498 1.83492L1.29834 63.6535C-0.515935 65.3164 -0.513852 68.1875 1.30281 69.8476L6.8125 74.8823C8.29771 76.2395 10.5345 76.339 12.1335 75.1201L93.3604 13.18C96.0854 11.102 100 13.0557 100 16.4939V16.2535C100 13.84 98.6239 11.64 96.4614 10.593Z",fill:"#D9D9D9"}),(0,i.jsx)("g",{filter:"url(#filter1_d)",children:(0,i.jsx)("path",{d:"M96.4614 89.4074L75.8567 99.3797C73.4717 100.534 70.6215 100.047 68.7498 98.1651L1.29834 36.3464C-0.515935 34.6837 -0.513852 31.8125 1.30281 30.1524L6.8125 25.1177C8.29771 23.7605 10.5345 23.6606 12.1335 24.88L93.3604 86.8201C96.0854 88.8985 100 86.9447 100 83.5061V83.747C100 86.1604 98.6239 88.3603 96.4614 89.4074Z",fill:"#E6E6E6"})}),(0,i.jsx)("g",{filter:"url(#filter2_d)",children:(0,i.jsx)("path",{d:"M75.8578 99.3807C73.4721 100.535 70.6219 100.047 68.75 98.1651C71.0564 100.483 75 98.8415 75 95.5631V4.43709C75 1.15852 71.0565 -0.483493 68.75 1.83492C70.6219 -0.0467614 73.4721 -0.534276 75.8578 0.618963L96.4583 10.5773C98.6229 11.6237 100 13.8246 100 16.2391V83.7616C100 86.1762 98.6229 88.3761 96.4583 89.4231L75.8578 99.3807Z",fill:"white"})}),(0,i.jsx)("g",{style:{mixBlendMode:"overlay"},opacity:"0.25",children:(0,i.jsx)("path",{style:{mixBlendMode:"overlay"},opacity:"0.25",fillRule:"evenodd",clipRule:"evenodd",d:"M70.8508 99.5723C72.4258 100.189 74.2218 100.15 75.8115 99.3807L96.4 89.4231C98.5635 88.3771 99.9386 86.1762 99.9386 83.7616V16.2391C99.9386 13.8247 98.5635 11.6239 96.4 10.5774L75.8115 0.618974C73.7252 -0.390085 71.2835 -0.142871 69.4525 1.19518C69.1909 1.38637 68.9418 1.59976 68.7079 1.83493L29.2941 37.9795L12.1261 24.88C10.528 23.6606 8.2926 23.7605 6.80833 25.1177L1.30198 30.1524C-0.51354 31.8126 -0.515625 34.6837 1.2975 36.3465L16.186 50L1.2975 63.6536C-0.515625 65.3164 -0.51354 68.1875 1.30198 69.8476L6.80833 74.8824C8.2926 76.2395 10.528 76.339 12.1261 75.1201L29.2941 62.0207L68.7079 98.1651C69.3315 98.7923 70.0635 99.2645 70.8508 99.5723ZM74.9542 27.1812L45.0481 50L74.9542 72.8188V27.1812Z",fill:"url(#paint0_linear)"})})]})]})}),(0,i.jsxs)("defs",{children:[(0,i.jsxs)("filter",{id:"filter0_d",x:"-6.25",y:"-4.16667",width:"112.5",height:"112.5",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(0,i.jsx)("feOffset",{dy:"2.08333"}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"3.125"}),(0,i.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"}),(0,i.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),(0,i.jsxs)("filter",{id:"filter1_d",x:"-8.39436",y:"15.6951",width:"116.728",height:"92.6376",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(0,i.jsx)("feOffset",{}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"4.16667"}),(0,i.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,i.jsx)("feBlend",{mode:"overlay",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),(0,i.jsxs)("filter",{id:"filter2_d",x:"60.4167",y:"-8.33346",width:"47.9167",height:"116.667",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,i.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,i.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(0,i.jsx)("feOffset",{}),(0,i.jsx)("feGaussianBlur",{stdDeviation:"4.16667"}),(0,i.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"}),(0,i.jsx)("feBlend",{mode:"overlay",in2:"BackgroundImageFix",result:"effect1_dropShadow"}),(0,i.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow",result:"shape"})]}),(0,i.jsxs)("linearGradient",{id:"paint0_linear",x1:"49.939",y1:"-5.19792e-05",x2:"49.939",y2:"100.001",gradientUnits:"userSpaceOnUse",children:[(0,i.jsx)("stop",{stopColor:"white"}),(0,i.jsx)("stop",{offset:"1",stopColor:"white",stopOpacity:"0"})]}),(0,i.jsx)("clipPath",{id:"clip0",children:(0,i.jsx)("rect",{width:"100",height:"100",fill:"white"})})]})]}),eT=()=>{let[e,s]=(0,r.useState)(new Date);return(0,r.useEffect)(()=>{let e=setInterval(()=>{s(new Date)},1e3);return()=>clearInterval(e)},[]),(0,i.jsxs)("span",{children:[e.getHours().toString().padStart(2,"0"),":",e.getMinutes().toString().padStart(2,"0")]})};var eS=t(136),eE=t.n(eS);let eH="(100vh - 48px - 48px)",eU=e=>{let s=(0,r.useRef)(null);return(0,i.jsxs)("div",{className:eE().container,children:[(0,i.jsx)("div",{className:eE().appName,children:(0,i.jsx)("span",{children:e.app.name})}),e.app.urls?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:eE().leftContent,children:[(0,i.jsx)("img",{src:R.images.iphone_png,style:{height:"calc".concat(eH)}}),(0,i.jsx)("iframe",{ref:s,src:e.app.urls.site,className:eE().iframe,allow:"fullscreen",style:{borderRadius:"0 0 calc(".concat(eH," * 0.055) calc(").concat(eH," * 0.055)")}}),(0,i.jsx)("div",{className:eE().header,children:(0,i.jsxs)("div",{className:eE().addressBar,children:[(0,i.jsx)(eB,{size:10,fill:"#222"}),(0,i.jsx)(y,{axis:"x",size:4}),(0,i.jsx)("span",{children:new URL(e.app.urls.site).host}),(0,i.jsx)("div",{className:eE().reload,onClick:()=>{var t,i;s.current&&(s.current.src=null!==(i=null===(t=e.app.urls)||void 0===t?void 0:t.site)&&void 0!==i?i:"")},children:(0,i.jsx)(eM,{fill:"#222",size:20})})]})}),(0,i.jsx)("div",{className:eE().notch,children:(0,i.jsx)("img",{src:R.images.iphone_png,style:{width:"100%"}})}),(0,i.jsxs)("div",{className:eE().notchContent,children:[(0,i.jsx)("div",{className:eE().notchGroup,children:(0,i.jsx)(eT,{})}),(0,i.jsxs)("div",{className:eE().notchGroup,children:[(0,i.jsx)(eb,{fill:"#BDBDBD"}),(0,i.jsx)(ek,{fill:"#222"}),(0,i.jsx)(eC,{fill:"#222"})]})]})]}),(0,i.jsxs)("div",{className:eE().rightContent,children:[(0,i.jsx)(y,{axis:"y",size:10}),(0,i.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold"},children:"Dev Tools"}),(0,i.jsx)(y,{axis:"y",size:8}),(0,i.jsx)("div",{className:eE().linkContainer,children:[{icon:(0,i.jsx)(eI,{size:24,fill:"#fff"}),label:"Web App",href:e.app.urls.site},{icon:(0,i.jsx)(W,{size:24,fill:"#fff"}),label:"GitHub",href:e.app.urls.github},{icon:(0,i.jsx)(eA,{size:24}),label:"VSCode",href:e.app.urls.vscode},{icon:(0,i.jsx)(ei,{size:24,fill:"#fff"}),label:"Railway",href:e.app.railway.url}].map(e=>(0,i.jsx)("div",{children:(0,i.jsx)(p(),{href:e.href,target:"_brank",children:(0,i.jsxs)("div",{className:eE().linkCard,children:[(0,i.jsx)("div",{className:eE().linkIcon,children:e.icon}),(0,i.jsxs)("div",{className:eE().linkTexts,children:[(0,i.jsx)("div",{className:eE().linkLabel,children:e.label}),(0,i.jsx)(y,{axis:"y",size:2}),(0,i.jsx)("div",{className:eE().linkHref,children:e.href})]})]})})},e.label))}),(0,i.jsx)(y,{axis:"y",size:24}),(0,i.jsx)("div",{style:{fontSize:"18px",fontWeight:"bold"},children:"OGP Image"}),(0,i.jsx)(y,{axis:"y",size:8}),(0,i.jsx)(eN,{rows:8,value:e.app.ogpImage.prompt,onChange:()=>null}),(0,i.jsx)(y,{axis:"y",size:16}),(0,i.jsx)("img",{src:e.app.ogpImage.url,style:{width:"100%"}})]})]}):(0,i.jsx)("div",{children:"インフラ構築待機中..."})]})};var eG=t(2729),eO=t.n(eG),eR=()=>{let e=(0,n.useRouter)(),[s]=(0,a.KO)(c.L),[t,l]=(0,a.KO)(o),h=(0,r.useMemo)(()=>t.sort((e,s)=>s.createdTime-e.createdTime),[t]),p=(0,r.useMemo)(()=>{var s;return null===(s=h.find(s=>s.displayId===e.query.id))||void 0===s?void 0:s.id},[h,e.query.id]),u=(0,r.useMemo)(()=>h.find(e=>e.id===p),[p,h]),j=(0,r.useCallback)(()=>(null===s?d.x.public.cachedApps:d.x.apps).$get().then(e=>l(s=>JSON.stringify(s)===JSON.stringify(e)?s:e)).catch(x.F),[s,l]);return(0,r.useEffect)(()=>{j();let e=window.setInterval(j,5e3);return()=>clearInterval(e)},[j]),(0,r.useEffect)(()=>{if(t.length>0&&void 0===u){var s;e.push("/?id=".concat(null===(s=t[0])||void 0===s?void 0:s.displayId),void 0,{shallow:!0})}},[t,u,e]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(ee,{user:s}),(0,i.jsx)("div",{className:eO().main,children:(0,i.jsxs)("div",{children:[(0,i.jsx)("div",{className:eO().appList,children:(0,i.jsx)(V,{user:s,sortedApps:h,currentApp:u,append:s=>{l(e=>[...e,s]),e.push("/?id=".concat(s.displayId),void 0,{shallow:!0})}})}),u&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("div",{className:eO().chatArea,children:(0,i.jsx)(ey,{app:u})}),(0,i.jsx)("div",{className:eO().infoArea,children:(0,i.jsx)(eU,{app:u})})]})]})})]})}},7112:function(e){e.exports={button:"buttons_button__pbUCN"}},1961:function(e){e.exports={container:"modal_container__W1NFn",background:"modal_background__aJ2gF",card:"modal_card__h9WIR",modalHeader:"modal_modalHeader__87gSB",header:"modal_header__EHUVV",body:"modal_body__MI_Xu",footer:"modal_footer__1wUv0",warning:"modal_warning__jSakT"}},2297:function(e){e.exports={textInput:"textInput_textInput__4PLzK"}},6236:function(e){e.exports={textarea:"textarea_textarea__36o0Z"}},8870:function(e){e.exports={container:"appList_container__D5JPC",createBtn:"appList_createBtn__qn3cK",searchBox:"appList_searchBox__4XYEr",searchInput:"appList_searchInput__a1XUK",searchIcon:"appList_searchIcon__6KakG",itemContainer:"appList_itemContainer__UAEnC",appItem:"appList_appItem__UhEZf",title:"appList_title__QmpUq",itemHeader:"appList_itemHeader__J4cfE",statusCircle:"appList_statusCircle__dki1x",modelLabel:"appList_modelLabel__pExat",author:"appList_author__nuuPT"}},1219:function(e){e.exports={container:"basicHeader_container__8dnqJ",main:"basicHeader_main__vj7PT",logo:"basicHeader_logo__Y8x_e",loginBtn:"basicHeader_loginBtn__GBeDx",userBtn:"basicHeader_userBtn__bV3RG",userIcon:"basicHeader_userIcon__ShXHp",userName:"basicHeader_userName__qSKKe"}},7943:function(e){e.exports={container:"chatArea_container__MNe_y",header:"chatArea_header__aiNE1",authorLink:"chatArea_authorLink__40o0O",indexLabel:"chatArea_indexLabel__4blc5",mainContainer:"chatArea_mainContainer__FUsFY",nameLabel:"chatArea_nameLabel__aJWny",sentTime:"chatArea_sentTime__k56fY",contentTitle:"chatArea_contentTitle__uG1gB",commitLink:"chatArea_commitLink__GTUVB"}},136:function(e){e.exports={container:"infoArea_container__QEtlV",appName:"infoArea_appName__34YaH",leftContent:"infoArea_leftContent__sjvt7",rightContent:"infoArea_rightContent__O5RXK",iframe:"infoArea_iframe__OdFAW",header:"infoArea_header__bDBRQ",addressBar:"infoArea_addressBar__ks_Ct",reload:"infoArea_reload__JVSbB",notch:"infoArea_notch__0WBf_",notchContent:"infoArea_notchContent__PU0GL",notchGroup:"infoArea_notchGroup__uAsk_",linkContainer:"infoArea_linkContainer__V1ZBu",linkCard:"infoArea_linkCard___NjUb",linkIcon:"infoArea_linkIcon__hzqbL",linkTexts:"infoArea_linkTexts__ewfMB",linkLabel:"infoArea_linkLabel__P5g8l",linkHref:"infoArea_linkHref__n1_Ic"}},7376:function(e){e.exports={loader:"statusIcon_loader__BCsrT",load:"statusIcon_load___1HcE"}},2729:function(e){e.exports={main:"index_main__OmNu0",strategyList:"index_strategyList__K9i61",appList:"index_appList__yYQcb",chatArea:"index_chatArea__E_CvK",infoArea:"index_infoArea__rZVBa"}}},function(e){e.O(0,[523,610,774,888,179],function(){return e(e.s=9208)}),_N_E=e.O()}]);