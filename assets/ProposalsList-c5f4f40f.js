import{aX as de,aY as ue,aZ as T,b as a,s as n,a_ as pe,a$ as J,b0 as F,b1 as H,b2 as x,I as b,b3 as ge,b4 as he,b5 as me,j as u,b6 as fe,b7 as Se,a2 as K,f as L,a1 as O,C as P,T as m,S as ye,aQ as w,b8 as ve,aK as xe,a6 as Ce,B as be,P as C,b9 as W,c as _,ba as Le,l as Pe,u as X,k as we,d as Y,p as j,t as $e,bb as Ie,o as Ae,K as G,a as ee,aJ as Te,J as Me,ar as ke,Z as ze,_ as te,X as Re,F as Oe,a4 as We}from"./index-978b2a1b.js";import{L as Be}from"./List-bf136ca2.js";import{L as Ee,u as k}from"./components-6b2a60e2.js";import{S as _e}from"./Status-2e7acb8b.js";function Ue(e){return ue("MuiAlert",e)}const De=de("MuiAlert",["root","action","icon","message","filled","filledSuccess","filledInfo","filledWarning","filledError","outlined","outlinedSuccess","outlinedInfo","outlinedWarning","outlinedError","standard","standardSuccess","standardInfo","standardWarning","standardError"]),V=De,Ne=T(a("path",{d:"M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"}),"SuccessOutlined"),Fe=T(a("path",{d:"M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"}),"ReportProblemOutlined"),He=T(a("path",{d:"M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"}),"ErrorOutline"),je=T(a("path",{d:"M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"}),"InfoOutlined"),Ve=T(a("path",{d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close"),Qe=["action","children","className","closeText","color","components","componentsProps","icon","iconMapping","onClose","role","severity","slotProps","slots","variant"],Ze=e=>{const{variant:t,color:o,severity:l,classes:s}=e,i={root:["root",`${t}${J(o||l)}`,`${t}`],icon:["icon"],message:["message"],action:["action"]};return Se(i,Ue,s)},qe=n(pe,{name:"MuiAlert",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:o}=e;return[t.root,t[o.variant],t[`${o.variant}${J(o.color||o.severity)}`]]}})(({theme:e,ownerState:t})=>{const o=e.palette.mode==="light"?F:H,l=e.palette.mode==="light"?H:F,s=t.color||t.severity;return x({},e.typography.body2,{backgroundColor:"transparent",display:"flex",padding:"6px 16px"},s&&t.variant==="standard"&&{color:e.vars?e.vars.palette.Alert[`${s}Color`]:o(e.palette[s].light,.6),backgroundColor:e.vars?e.vars.palette.Alert[`${s}StandardBg`]:l(e.palette[s].light,.9),[`& .${V.icon}`]:e.vars?{color:e.vars.palette.Alert[`${s}IconColor`]}:{color:e.palette[s].main}},s&&t.variant==="outlined"&&{color:e.vars?e.vars.palette.Alert[`${s}Color`]:o(e.palette[s].light,.6),border:`1px solid ${(e.vars||e).palette[s].light}`,[`& .${V.icon}`]:e.vars?{color:e.vars.palette.Alert[`${s}IconColor`]}:{color:e.palette[s].main}},s&&t.variant==="filled"&&x({fontWeight:e.typography.fontWeightMedium},e.vars?{color:e.vars.palette.Alert[`${s}FilledColor`],backgroundColor:e.vars.palette.Alert[`${s}FilledBg`]}:{backgroundColor:e.palette.mode==="dark"?e.palette[s].dark:e.palette[s].main,color:e.palette.getContrastText(e.palette[s].main)}))}),Je=n("div",{name:"MuiAlert",slot:"Icon",overridesResolver:(e,t)=>t.icon})({marginRight:12,padding:"7px 0",display:"flex",fontSize:22,opacity:.9}),Ke=n("div",{name:"MuiAlert",slot:"Message",overridesResolver:(e,t)=>t.message})({padding:"8px 0",minWidth:0,overflow:"auto"}),Q=n("div",{name:"MuiAlert",slot:"Action",overridesResolver:(e,t)=>t.action})({display:"flex",alignItems:"flex-start",padding:"4px 0 0 16px",marginLeft:"auto",marginRight:-8}),Z={success:a(Ne,{fontSize:"inherit"}),warning:a(Fe,{fontSize:"inherit"}),error:a(He,{fontSize:"inherit"}),info:a(je,{fontSize:"inherit"})},Xe=b.forwardRef(function(t,o){var l,s,i,c,r,d;const p=ge({props:t,name:"MuiAlert"}),{action:g,children:S,className:y,closeText:h="Close",color:z,components:M={},componentsProps:$={},icon:I,iconMapping:f=Z,onClose:U,role:ae="alert",severity:R="success",slotProps:D={},slots:N={},variant:se="standard"}=p,re=he(p,Qe),v=x({},p,{color:z,severity:R,variant:se}),A=Ze(v),ne=(l=(s=N.closeButton)!=null?s:M.CloseButton)!=null?l:me,le=(i=(c=N.closeIcon)!=null?c:M.CloseIcon)!=null?i:Ve,ie=(r=D.closeButton)!=null?r:$.closeButton,ce=(d=D.closeIcon)!=null?d:$.closeIcon;return u(qe,x({role:ae,elevation:0,ownerState:v,className:fe(A.root,y),ref:o},re,{children:[I!==!1?a(Je,{ownerState:v,className:A.icon,children:I||f[R]||Z[R]}):null,a(Ke,{ownerState:v,className:A.message,children:S}),g!=null?a(Q,{ownerState:v,className:A.action,children:g}):null,g==null&&U?a(Q,{ownerState:v,className:A.action,children:a(ne,x({size:"small","aria-label":h,title:h,color:"inherit",onClick:U},ie,{children:a(le,x({fontSize:"small"},ce))}))}):null]}))}),Ye=Xe;function oe(){return a(Ge,{children:u(L,{alignItems:"flex-start",children:[a(O,{width:"30%"}),a(O,{width:"90%"}),a(O,{width:"50%"})]})})}const Ge=n(K)({width:"100%"});var et=function(e,t){t=t||{},t.listUnicodeChar=t.hasOwnProperty("listUnicodeChar")?t.listUnicodeChar:!1,t.stripListLeaders=t.hasOwnProperty("stripListLeaders")?t.stripListLeaders:!0,t.gfm=t.hasOwnProperty("gfm")?t.gfm:!0,t.useImgAltText=t.hasOwnProperty("useImgAltText")?t.useImgAltText:!0,t.abbr=t.hasOwnProperty("abbr")?t.abbr:!1,t.replaceLinksWithURL=t.hasOwnProperty("replaceLinksWithURL")?t.replaceLinksWithURL:!1,t.htmlTagsToSkip=t.hasOwnProperty("htmlTagsToSkip")?t.htmlTagsToSkip:[];var o=e||"";o=o.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm,"");try{t.stripListLeaders&&(t.listUnicodeChar?o=o.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,t.listUnicodeChar+" $1"):o=o.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm,"$1")),t.gfm&&(o=o.replace(/\n={2,}/g,`
`).replace(/~{3}.*\n/g,"").replace(/~~/g,"").replace(/`{3}.*\n/g,"")),t.abbr&&(o=o.replace(/\*\[.*\]:.*\n/,"")),o=o.replace(/<[^>]*>/g,"");var l=new RegExp("<[^>]*>","g");if(t.htmlTagsToSkip.length>0){var s="(?!"+t.htmlTagsToSkip.join("|")+")";l=new RegExp("<"+s+"[^>]*>","ig")}o=o.replace(l,"").replace(/^[=\-]{2,}\s*$/g,"").replace(/\[\^.+?\](\: .*?$)?/g,"").replace(/\s{0,2}\[.*?\]: .*?$/g,"").replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g,t.useImgAltText?"$1":"").replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g,t.replaceLinksWithURL?"$2":"$1").replace(/^\s{0,3}>\s?/gm,"").replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g,"").replace(/^(\n)?\s{0,}#{1,6}\s+| {0,}(\n)?\s{0,}#{0,} #{0,}(\n)?\s{0,}$/gm,"$1$2$3").replace(/([\*]+)(\S)(.*?\S)??\1/g,"$2$3").replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g,"$1$3$4$5").replace(/(`{3,})(.*?)\1/gm,"$2").replace(/`(.+?)`/g,"$1").replace(/~(.*?)~/g,"$1")}catch(i){return console.error(i),e}return o};const tt=n("div")(({theme:e})=>({height:"100%",background:e.palette.primary.main,position:"absolute",top:0,left:0,borderRadius:5,opacity:.07})),ot=n(P)({position:"relative",justifyContent:"space-between"}),at=n(P)(({theme:e})=>({position:"relative",justifyContent:"flex-start",padding:10,background:e.palette.mode==="light"?"#F8F9FB":"#2B303B",boxShadow:e.palette.mode==="light"?"rgb(114 138 150 / 8%) 0px 2px 16px":"unset",borderRadius:10}));n(m)({fontSize:15,fontWeight:600});const st=n(ye)(({theme:e})=>({".title":{fontSize:18},transition:"border-color 0.2s",width:"100%",cursor:"pointer",".description":{fontSize:16},"&:hover":{border:e.palette.mode==="light"?`1px solid ${e.palette.primary.main}`:"1px solid rgba(255,255,255, 0.7)"}})),B=n(m)({fontSize:14,fontWeight:600,opacity:.7,marginTop:10});n(m)({display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:2});const rt=n(m)({fontWeight:600,fontSize:16,marginBottom:10,[`@media (max-width: ${w}px)`]:{fontSize:15}}),nt=n(m)({fontSize:20,fontWeight:800,lineHeight:"28px",[`@media (max-width: ${w}px)`]:{fontSize:17,lineHeight:"26px"}}),lt=n(Ye)({width:"100%",borderRadius:10});n(P)({".header":{marginBottom:0}});const it=n(ve)(({theme:e})=>({maxWidth:360,width:"100%",input:{borderRight:`1px solid ${xe(e.palette.mode)}`},[`@media (max-width: ${w}px)`]:{maxWidth:"unset"}})),ct=n(K)({position:"absolute",width:"100%",top:0}),dt=n(Ce)({p:{fontWeight:600}}),ut=n(Ee)({".header":{marginBottom:16}}),pt=n(m)({fontSize:13,whiteSpace:"nowrap",[`@media (max-width: ${w}px)`]:{fontSize:11}}),gt=n(be)({fontSize:16,[`@media (max-width: ${w}px)`]:{fontSize:14}}),ht=n(m)({fontSize:14,[`@media (max-width: ${w}px)`]:{fontSize:12}}),mt=({proposalMetadata:e,status:t})=>{const o=k();return!t||!e?null:t===C.NOT_STARTED?a(B,{children:o.startIn(W(e.proposalStartTime))}):t===C.CLOSED?a(B,{children:o.proposalEnded(W(e.proposalEndTime,!0))}):a(B,{children:o.endIn(W(e.proposalEndTime))})},ft=({proposalAddress:e})=>{const{data:t}=_(e),o=t==null?void 0:t.proposalResult.totalWeight,l=k(),s=Le(e);return Number(o)===0?a(lt,{severity:"warning",children:a(m,{children:l.endedAndDidntPassedQuorum})}):a(yt,{gap:10,children:s.map(i=>a(St,{title:i.choice,percent:i.percent,amount:i.amount},i.choice))})},St=({title:e,percent:t=0,amount:o=""})=>u(at,{children:[a(tt,{style:{width:`${t}%`}}),u(ot,{children:[u(P,{justifyContent:"flex-start",children:[a(gt,{text:e}),a(pt,{children:o})]}),u(ht,{children:[t,"%"]})]})]}),yt=n(L)({width:"100%"}),vt=e=>{var g,S,y;const{query:t}=G(),{data:o}=_(e),{data:l}=ee((o==null?void 0:o.daoAddress)||""),{proposalStatus:s}=Y(e),i=(g=o==null?void 0:o.metadata)==null?void 0:g.title.toLowerCase(),c=(S=o==null?void 0:o.metadata)==null?void 0:S.description.toLowerCase(),{isProposalPublisher:r,isOwner:d}=Te(l==null?void 0:l.daoRoles),p=b.useMemo(()=>[i,c,e],[i,c,e]);return t.proposalState&&t.proposalState!==s||t.search&&!p.some(h=>h==null?void 0:h.toLowerCase().includes(t.search.toLowerCase()))?!0:(y=o==null?void 0:o.metadata)!=null&&y.hide?!r||!d:!1},xt=({proposalAddress:e})=>{var $,I;const{proposalPage:t}=Pe(),{daoAddress:o}=X(),[l,{entry:s}]=we(),i=s&&s.isIntersecting,c=_(e,{disabled:!i}),{data:r,isLoading:d,error:p}=c,{proposalStatus:g,proposalStatusText:S}=Y(e),y=vt(e),h=b.useMemo(()=>{var f;return j((f=r==null?void 0:r.metadata)==null?void 0:f.description,"en")},[($=r==null?void 0:r.metadata)==null?void 0:$.description]),z=b.useMemo(()=>{var f;return j((f=r==null?void 0:r.metadata)==null?void 0:f.title)},[(I=r==null?void 0:r.metadata)==null?void 0:I.title]),M=()=>{o&&e&&t.root(o,e)};return p||y?null:a("div",{onClick:M,ref:l,style:{width:"100%"},children:d?a(oe,{}):r?a(st,{children:u(L,{alignItems:"flex-start",gap:20,children:[u(P,{justifyContent:"space-between",children:[a($e,{text:"Proposal address",placement:"right",children:a(Ct,{address:e,padding:10})}),u(P,{style:{width:"auto"},gap:15,children:[a(Ie,{proposal:r}),a(_e,{status:S})]})]}),u(L,{alignItems:"flex-start",children:[u(nt,{variant:"h4",children:[z,Ae.isMockProposal(e)&&a("small",{style:{opacity:.5},children:" (Mock)"})]}),a(rt,{sx:{display:"-webkit-box",overflow:"hidden",WebkitBoxOrient:"vertical",WebkitLineClamp:3},children:et(h||"",{useImgAltText:!0})})]}),g===C.CLOSED&&r&&a(ft,{proposalAddress:e}),a(mt,{proposalMetadata:r==null?void 0:r.metadata,status:g})]})}):null})},Ct=n(dt)({opacity:.7,p:{fontSize:14}}),E=10,bt=()=>{const e=We();return[{text:e.all,value:"all"},{text:e.active,value:C.ACTIVE},{text:e.ended,value:C.CLOSED},{text:e.notStarted,value:C.NOT_STARTED}]},q=()=>{const e=bt(),{query:t,setProposalState:o,setSearch:l}=G(),s=d=>{l(d)},[i,c]=b.useState(t.proposalState||e[0].value);return a(it,{filterOptions:e,filterValue:i,onFilterSelect:d=>{c(d),o(d==="all"?void 0:d)},initialValue:t.search||"",onChange:s})};function Tt(){var d;const[e,t]=b.useState(E),o=k(),l=Me(),s=()=>{t(p=>p+E)},{daoAddress:i}=X(),{data:c,isLoading:r}=ee(i);return u(ut,{title:o.proposals,headerChildren:l?void 0:a(q,{}),children:[l&&a(q,{}),u(ke,{style:{position:"relative",width:"100%"},children:[!r&&a(Lt,{}),a(L,{gap:15,style:{zIndex:10,position:"relative"},children:a(Be,{isLoading:r,loader:a(Pt,{}),children:(d=c==null?void 0:c.daoProposals)==null?void 0:d.map((p,g)=>g>=e?null:a(xt,{proposalAddress:p},p))})})]}),a(ze,{totalItems:te.size(c==null?void 0:c.daoProposals),amountToShow:e,showMore:s,limit:E})]})}const Lt=()=>{const e=k();return a(ct,{children:a(L,{children:a(Re,{children:e.emptyProposals})})})},Pt=()=>a(Oe,{children:te.range(0,2).map((e,t)=>a(oe,{},t))});export{Tt as ProposalsList,Tt as default};
