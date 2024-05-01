!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="e3e6fc1d-e62a-4505-8ea9-973bd3f74c20",e._sentryDebugIdIdentifier="sentry-dbid-e3e6fc1d-e62a-4505-8ea9-973bd3f74c20")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[3919],{457817:(e,r,t)=>{t.a(e,(async(e,a)=>{try{t.d(r,{ZP:()=>F});var n=t(785893),i=t(667294),o=t(771341),l=t(308787),s=t(165852),d=t(561277),c=t(108363),p=t(876777),u=t(818117),f=t(191140),x=e([l,f]);[l,f]=x.then?(await x)():x;var h=Object.defineProperty,b=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,y=(e,r,t)=>r in e?h(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,v=(e,r)=>{for(var t in r||(r={}))j.call(r,t)&&y(e,t,r[t]);if(g)for(var t of g(r))w.call(r,t)&&y(e,t,r[t]);return e},k=(e,r)=>b(e,m(r)),O=(e,r)=>{var t={};for(var a in e)j.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&g)for(var a of g(e))r.indexOf(a)<0&&w.call(e,a)&&(t[a]=e[a]);return t};const P=({Icon:e,notification:r,onClose:t})=>{const{title:a,message:i,link:p,id:u,linkName:x}=r,{isClosing:h,setIsClosing:b,doNotClose:m,ref:g}=(0,f.Z)(t);return(0,n.jsx)(l.Portal,{id:`notification-${u}`,children:(0,n.jsxs)(L,{isClosing:h,"data-testid":"notificationBar",ref:g,children:[!m&&(0,n.jsx)(D,{start:!h}),(0,n.jsxs)(E,{children:[(0,n.jsxs)(l.FlexBox,{flexDirection:"row",alignItems:"center",gridGap:8,children:[e,(0,n.jsx)(l.FlexBox,{maxWidth:"92%",children:(0,n.jsx)(c.Z,{dataTestId:"notificationBar__title",children:a})})]}),(0,n.jsx)(G,{onClick:()=>{b(!0)},"data-testid":"closeIconContainer",children:(0,n.jsx)(o.Tw,{})})]}),(!!i||!!p)&&(0,n.jsxs)(l.FlexBox,{flexDirection:"column",children:[i&&(0,n.jsx)(d.Z,{dataTestId:"notificationBar__message",overflow:"hidden",wordWrap:"break-word",children:i}),p&&(0,n.jsx)(A,{onClick:()=>window.open(p,"_blank","noopener,noreferrer"),children:(0,n.jsx)(s.Z,{dataTestId:"notificationBar__link",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:null!=x?x:p})})]})]})})},Z=e=>{var r=O(e,[]);return(0,n.jsx)(P,k(v({},r),{Icon:(0,n.jsx)(o.IG,{})}))},I=e=>{var r=O(e,[]);return(0,n.jsx)(P,k(v({},r),{Icon:(0,n.jsx)(o.$u,{})}))},_=e=>{var r=O(e,[]);return(0,n.jsx)(P,k(v({},r),{Icon:(0,n.jsx)(l.CircularProgress,{color:p.wL.babyBlue,width:16,height:16})}))},C=e=>{var r=O(e,[]);return(0,n.jsx)(P,k(v({},r),{Icon:(0,n.jsx)(o.vU,{width:16,height:16})}))},$=e=>{var r=e,{type:t="success"}=r,a=O(r,["type"]);switch(t){case"success":default:return(0,n.jsx)(Z,v({},a));case"error":return(0,n.jsx)(I,v({},a));case"loading":return(0,n.jsx)(_,v({},a));case"warning":return(0,n.jsx)(C,v({},a))}},F=(0,i.memo)($),S=u.F4`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`,B=u.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,T=u.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,E=u.ZP.div`
  position: sticky;
  top: 0;
  background-color: ${p.wL.nightOcean};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,L=(0,u.ZP)(l.FlexBox).attrs({gridGap:8})`
  width: 100vw;
  max-height: 240px;
  overflow: auto;
  background-color: ${p.wL.nightOcean};
  animation: ${({isClosing:e})=>e?u.iv`
          ${T} 0.2s cubic-bezier(0.3, 0.0, 0.8, 0.15)
        `:u.iv`
          ${B} 0.4s  cubic-bezier(0.05, 0.7, 0.1, 1)
        `};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  padding: 16px;
  padding-left: 8px;
`,D=u.ZP.div`
  position: absolute;
  height: 2px;
  background-color: ${p.wL.babyBlue};
  width: 100%;
  top: 0;
  left: 0;
  animation: ${({start:e})=>e?u.iv`
          ${S} 5s linear;
        `:void 0};
`,G=(0,u.ZP)(l.FlexBox)`
  cursor: pointer;
`,A=u.ZP.div`
  cursor: pointer;
  max-width: 360px;
`;a()}catch(e){a(e)}}))},155794:(e,r,t)=>{t.a(e,(async(e,a)=>{try{t.d(r,{Z:()=>S});var n=t(785893),i=t(308787),o=t(287536),l=t(802305),s=t(264487),d=t(616310),c=t(847001),p=t(818117),u=t(876777),f=t(814302),x=t(561277),h=t(230811),b=t(729154),m=t(519416),g=t(281672),j=t(645564),w=t(739989),y=e([i,g]);[i,g]=y.then?(await y)():y;var v=Object.defineProperty,k=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable,Z=(e,r,t)=>r in e?v(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,I=(e,r)=>{for(var t in r||(r={}))O.call(r,t)&&Z(e,t,r[t]);if(k)for(var t of k(r))P.call(r,t)&&Z(e,t,r[t]);return e};const _=p.ZP.div`
  padding: 8px;
  background: ${u.wL.mineShaft};
`,C=p.ZP.div`
  margin: 0 auto;
  background: ${u.wL.mineShaft};
  height: 100%;
  padding: 26px 20px 20px 20px;
  max-width: 700px;
  overflow: auto;
`,$=(0,p.ZP)(i.FlexBox).attrs({py:16})`
  //bullet point disc should be white
  ul {
    color: ${u.wL.white};
    li {
      margin-left: 8px;
    }
  }

  a {
    text-decoration: none;
  }
`,F=p.ZP.ul`
  display: flex;
  flex-direction: column;
  gap: 8px;
  li::marker {
    font-size: 8px;
  }
`,S=({eventId:e,error:r})=>{var t,a,p;const{t:u}=(0,h.$G)("app"),y=(0,g.UW)(),{register:v,handleSubmit:k,formState:{errors:O}}=(0,o.cI)({resolver:(0,l.X)(d.Ry({name:d.Z_(),comment:d.Z_().required(u("user_feedback.errors.comment_required")),email:d.Z_().email(u("user_feedback.errors.email_required"))}))});return(0,n.jsx)(_,{children:(0,n.jsxs)(C,{children:[(0,n.jsxs)(i.FlexBox,{gridGap:8,pb:12,children:[(0,n.jsx)(f.Z,{children:u("user_feedback.title")}),(0,n.jsx)(x.Z,{children:u("user_feedback.text")}),(0,n.jsxs)(x.Z,{children:["ID:",e]})]}),(0,n.jsxs)("form",{onSubmit:k((t=>{(0,s.Tb)(new Error("User Feedback Form Submitted"),{tags:{page:"Feedback page",feedback_related_to_event:e},extra:{user_feedback:{user:t.name||"Anonymous",email:t.email||"anonymousUser@xdefi.io",comments:t.comment,event_id:e},error:r},user:{email:t.email||""}}),(0,s.yl)(5e3).then((()=>{w.Z.info("Sentry events flushed")})).catch((e=>{w.Z.error("Error flushing Sentry events:",e)})).finally((()=>{y.resetData().finally((()=>m.browser.runtime.reload()))}))})),children:[(0,n.jsxs)(i.FlexBox,{gridGap:16,children:[(0,n.jsx)(i.InputField,I({type:"text",label:u("user_feedback.name"),errorMsg:null==(t=O.name)?void 0:t.message},v("name"))),(0,n.jsx)(i.InputField,I({type:"text",label:u("user_feedback.email"),errorMsg:null==(a=O.email)?void 0:a.message},v("email"))),(0,n.jsx)(i.TextArea,I({style:{height:"48px"},type:"text",label:u("user_feedback.what_happened"),errorMsg:null==(p=O.comment)?void 0:p.message},v("comment")))]}),(0,n.jsxs)(i.FlexBox,{flexDirection:"row",gridGap:8,pt:8,children:[(0,n.jsx)(i.PrimaryButton,{type:"submit",fullWidth:!0,children:(0,n.jsx)(b.Z,{children:u("general.submit")})}),(0,n.jsx)(i.SecondaryButton,{fullWidth:!0,onClick:()=>{(0,s.Tb)(r,{level:"fatal",tags:{page:"Feedback page"}}),y.resetData().finally((()=>m.browser.runtime.reload()))},children:u("general.close")})]}),(0,n.jsxs)($,{children:[(0,n.jsx)(x.Z,{children:u("user_feedback.description")}),(0,n.jsxs)(F,{children:[(0,n.jsx)("li",{children:(0,n.jsxs)(i.FlexBox,{flexDirection:"row",gridGap:4,children:[(0,n.jsx)(x.Z,{children:u("user_feedback.our_intercom")}),(0,n.jsx)("a",{href:"https://xdefi.io",target:"__blank",children:(0,n.jsx)(j.Z,{children:u("user_feedback.link")})})]})}),(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:c.Z.get("DISCORD_LINK"),target:"__blank",children:(0,n.jsx)(j.Z,{children:u("user_feedback.discord")})})})]})]})]})]})})};a()}catch(e){a(e)}}))},725317:(e,r,t)=>{t.d(r,{Z:()=>y});var a=t(785893),n=t(300286),i=t(241164),o=t(412252),l=t(667294),s=t(771341),d=t(876777),c=t(38187),p=t(356308),u=t(674990),f=t(669525),x=Object.defineProperty,h=Object.defineProperties,b=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable,w=(e,r,t)=>r in e?x(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const y=(0,l.memo)((0,l.forwardRef)(((e,r)=>{var t=e,{type:x,label:y,errorMsg:v,warningMsg:k,startAdornment:O,endAdornment:P,tipInfo:Z,dataTestId:I,placeholder:_,inputRef:C,defaultValue:$,onChange:F,onKeyPress:S,autoFocus:B,isWebapp:T=!1,spellCheck:E,name:L,tipError:D,min:G,disabled:A,value:M,tipPlacement:W="left",autoComplete:N="off",onFocus:R,textAlign:V=u.P.Left,className:z,variant:K="md",readOnly:q=!1,step:U=.1}=t,J=((e,r)=>{var t={};for(var a in e)g.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&m)for(var a of m(e))r.indexOf(a)<0&&j.call(e,a)&&(t[a]=e[a]);return t})(t,["type","label","errorMsg","warningMsg","startAdornment","endAdornment","tipInfo","dataTestId","placeholder","inputRef","defaultValue","onChange","onKeyPress","autoFocus","isWebapp","spellCheck","name","tipError","min","disabled","value","tipPlacement","autoComplete","onFocus","textAlign","className","variant","readOnly","step"]);const[Y,H]=(0,l.useState)(x),X=(0,l.useMemo)((()=>O?(0,a.jsx)(c.Z,{mr:10,"data-testid":"startAdornment",children:O}):null),[O]),Q=(0,l.useMemo)((()=>P?(0,a.jsx)(c.Z,{ml:5,"data-testid":"endAdornment",children:P}):"password"===x?(0,a.jsx)(f.iT,{onClick:()=>H("password"===Y?"text":"password"),children:"password"===Y?(0,a.jsx)(s.tE,{width:16,height:16,color:d.wL.darkGrey}):(0,a.jsx)(s.JP,{width:16,height:16,color:d.wL.darkGrey})}):D||Z?(0,a.jsx)(p.ZP,{title:D||Z,arrow:!0,fitContent:!0,placement:W,children:(0,a.jsx)(f.Oq,{"data-testid":"tipIcon",children:(0,a.jsx)(f.ag,{$error:!!D})})}):null),[P,Y,T,D,Z,W,x]);return(0,a.jsxs)(c.Z,(ee=((e,r)=>{for(var t in r||(r={}))g.call(r,t)&&w(e,t,r[t]);if(m)for(var t of m(r))j.call(r,t)&&w(e,t,r[t]);return e})({},J),re={className:z,children:[y&&(0,a.jsx)(c.Z,{pb:8,ml:8,children:(0,a.jsx)(o.Z,{children:y})}),(0,a.jsxs)(f.fv,{$isWebapp:T,$error:!!v||!!D,onClick:R,"data-testid":"inputContainer",children:[X,(0,a.jsx)(f.II,{style:{textAlign:V},name:L,type:Y,placeholder:_,"data-testid":I,$error:!!v,ref:r||C,autoComplete:N,defaultValue:$,onChange:F,onKeyPress:S,autoFocus:B,spellCheck:E,min:G,disabled:A,value:M,$isWebapp:T,onFocus:R,$variant:K,readOnly:q,step:"number"===x?U:void 0}),Q]}),(0,a.jsx)(f.CV,{$animateIn:!!v,children:(0,a.jsx)(n.Z,{children:v})}),k&&(0,a.jsx)(f.iC,{children:(0,a.jsx)(i.Z,{dataTestId:"warningMsg",children:k})})]},h(ee,b(re))));var ee,re})))},670585:(e,r,t)=>{t.d(r,{Z:()=>g});var a=t(785893),n=t(667294),i=t(771341),o=t(38187),l=t(876777),s=t(412252),d=t(300286),c=t(669525),p=Object.defineProperty,u=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,h=(e,r,t)=>r in e?p(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,b=(e,r)=>{for(var t in r||(r={}))f.call(r,t)&&h(e,t,r[t]);if(u)for(var t of u(r))x.call(r,t)&&h(e,t,r[t]);return e};const m=({showPassword:e,setShowPassword:r})=>(0,a.jsx)(c.Ym,{onClick:()=>r(!e),"data-testid":"eyeContainer",children:(0,a.jsx)(c.iT,{children:e?(0,a.jsx)(i.JP,{width:16,height:16,color:l.wL.darkGrey,"data-testid":"closedEyeIcon"}):(0,a.jsx)(i.tE,{width:16,height:16,color:l.wL.darkGrey,"data-testid":"eyeIcon"})})}),g=(0,n.memo)((0,n.forwardRef)(((e,r)=>{var t=e,{label:i,errorMsg:l,dataTestId:p,placeholder:h,inputRef:g,defaultValue:j,onChange:w,autoFocus:y,spellCheck:v,name:k,className:O,disabled:P,value:Z,type:I="text"}=t,_=((e,r)=>{var t={};for(var a in e)f.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))r.indexOf(a)<0&&x.call(e,a)&&(t[a]=e[a]);return t})(t,["label","errorMsg","dataTestId","placeholder","inputRef","defaultValue","onChange","autoFocus","spellCheck","name","className","disabled","value","type"]);const[C,$]=(0,n.useState)(!1);return(0,a.jsxs)(o.Z,{className:O,gridGap:"8px",children:[i&&(0,a.jsx)(o.Z,{ml:8,children:(0,a.jsx)(s.Z,{children:i})}),(0,a.jsxs)(c.Bt,{children:[(0,a.jsx)(c.Kx,b({name:k,placeholder:h,"data-testid":p,ref:g||r,defaultValue:j,onChange:w,autoFocus:y,spellCheck:v,autoComplete:"off",disabled:P,value:Z,$error:!!l,$type:"text"===I||C?"text":"password"},_)),"password"===I&&(0,a.jsx)(m,{showPassword:C,setShowPassword:$})]}),(0,a.jsx)(c.CV,{$animateIn:!!l,children:(0,a.jsx)(d.Z,{children:l})})]})})))},179145:(e,r,t)=>{t.d(r,{Z:()=>l});var a=t(785893),n=t(876777),i=t(233884);const o=t(818117).ZP.svg`
  animation: ${i.O2} 1s linear infinite;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;

  & circle {
    stroke: ${({color:e})=>e};
    stroke-linecap: round;
    animation: ${i.P2} 1.5s ease-in-out infinite;
  }
`,l=({color:e=n.wL.blue,width:r=50,height:t=50,dataTestId:i="circleLoader"})=>(0,a.jsx)(o,{color:e,width:r,height:t,"data-testid":i,viewBox:"0 0 50 50",children:(0,a.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4","data-testid":"circularProgressCircle"})})},645564:(e,r,t)=>{t.d(r,{Z:()=>p});var a=t(785893),n=t(876777),i=t(15145),o=Object.defineProperty,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t;const p=e=>{var r=e,{dataTestId:t}=r,o=((e,r)=>{var t={};for(var a in e)s.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))r.indexOf(a)<0&&d.call(e,a)&&(t[a]=e[a]);return t})(r,["dataTestId"]);return(0,a.jsx)(i.Z,((e,r)=>{for(var t in r||(r={}))s.call(r,t)&&c(e,t,r[t]);if(l)for(var t of l(r))d.call(r,t)&&c(e,t,r[t]);return e})({fontSize:14,lineHeight:"20px",color:n.wL.babyBlue,fontWeight:400,"data-testid":t},o))}}}]);