import{aj as A,p as S,aD as f,s as C,C as L,u as c,a as g,aE as j,ax as b,b as r,aA as w,m as V,_ as D,a9 as F,aF as P,aG as I,aH as M,T as v,aw as R,aI as T,aJ as x,j as y,F as O}from"./index-978b2a1b.js";import{u as B,L as _}from"./components-6b2a60e2.js";import{C as Q}from"./index.esm-d79d4c21.js";import{u as N,a as U,b as k}from"./dao-form-85d4c243.js";const J=()=>({title:"Metadata",subTitle:"",inputs:[...N(),{label:"Hide DAO",name:"hide",type:"checkbox"}]}),H=s=>({title:"Roles",subTitle:"",inputs:U(s)}),Z=s=>({name:(s==null?void 0:s.name)||"",telegram:(s==null?void 0:s.telegram)||"",website:(s==null?void 0:s.website)||"",github:(s==null?void 0:s.github)||"",about:(s==null?void 0:s.about)||"",terms:(s==null?void 0:s.terms)||"",avatar:(s==null?void 0:s.avatar)||"",hide:(s==null?void 0:s.hide)||!1,jetton:A(s==null?void 0:s.jetton)?"":(s==null?void 0:s.jetton)||"",nft:A(s==null?void 0:s.nft)?"":(s==null?void 0:s.nft)||"",dns:(s==null?void 0:s.dns)||"",about_en:S(s==null?void 0:s.about)||"",name_en:S(s==null?void 0:s.name)||""}),q=s=>({about:JSON.stringify({en:s.about_en}),avatar:s.avatar||"",github:s.github||"",hide:s.hide,name:JSON.stringify({en:s.name_en}),terms:"",telegram:s.telegram||"",website:s.website||"",jetton:s.jetton||f,nft:s.nft||f,dns:s.dns||""});function z(){const s=k(),e=J(),{daoAddress:n}=c(),o=g(n).data,{mutate:l,isLoading:i}=j(),u=b({initialValues:Z(o==null?void 0:o.daoMetadata.metadataArgs),validationSchema:s,validateOnChange:!1,validateOnBlur:!0,onSubmit:t=>{l({metadata:q(t),daoAddress:n})}});return r(w,{form:e,formik:u,children:r(G,{isLoading:i,formik:u})})}const G=({isLoading:s,formik:e})=>{const n=V();return D.isEqual(e.values,e.initialValues)?null:r($,{children:n?r(F,{isLoading:s,onClick:e.submitForm,children:"Update Metadata"}):r(Q,{})})},$=C(L)({marginTop:40,button:{width:"100%"}});function K(){const s=H(W),{daoAddress:e}=c(),n=g(e).data,o=b({initialValues:{ownerAddress:(n==null?void 0:n.daoRoles.owner)||"",proposalOwner:(n==null?void 0:n.daoRoles.proposalOwner)||""},validateOnChange:!1,validateOnBlur:!0,onSubmit:()=>{}});return r(w,{form:s,formik:o})}const W=({name:s,formik:e})=>{const{mutateAsync:n,isLoading:o}=P(),{mutateAsync:l,isLoading:i}=I(),u=e.values[s],t=e.initialValues[s],p=()=>{const d={newOwner:u,onError:E=>e.setFieldError(s,E)};if(s==="ownerAddress")return n(d);if(s==="proposalOwner")return l(d)},h=s==="ownerAddress"?o:i;return t===u?null:r(M,{children:r(F,{onClick:p,isLoading:h,children:r(v,{children:"Update"})})})},X=()=>({title:"Dao Admin Settings",inputs:[{name:"fwdMsgFee",label:"Forward Message Fee",type:"number",EndAdornment:a}]});function Y(){const s=X(),{daoAddress:e}=c(),{data:n}=R(e),o=b({enableReinitialize:!0,initialValues:{fwdMsgFee:Number(n==null?void 0:n.fwdMsgFee)},validateOnChange:!1,validateOnBlur:!0,onSubmit:()=>{}});return r(w,{form:s,formik:o})}const a=({name:s,formik:e})=>{const{daoAddress:n}=c(),o=e.values[s],l=e.initialValues[s],i=g(n).data,{mutate:u,isLoading:t}=T(),{refetch:p}=R(i==null?void 0:i.daoAddress),h=()=>{if(s==="fwdMsgFee")return u({daoIds:[i.daoId],amount:o,onError:d=>e.setFieldError(s,d),onSuccess:p})};return!D.isNumber(o)||l===o?null:r(M,{children:r(F,{onClick:h,isLoading:t,children:r(v,{children:"Update"})})})};function os(){const s=B(),{daoAddress:e}=c(),{isLoading:n,data:o}=g(e),{isOwner:l,isProposalPublisher:i}=x(o==null?void 0:o.daoRoles),u=l||i;return r(_,{title:s.settings,isLoading:n,children:y(O,{children:[r(Y,{}),u&&y(O,{children:[r(K,{}),r(z,{})]})]})})}export{os as DaoSettings,os as default};
