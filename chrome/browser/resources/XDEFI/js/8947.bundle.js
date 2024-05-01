!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="937ed991-acfc-4288-a1b7-1b188439335e",e._sentryDebugIdIdentifier="sentry-dbid-937ed991-acfc-4288-a1b7-1b188439335e")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[8947],{862083:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>w});var a=n(785893),s=n(667294),i=n(771341),o=n(308787),l=n(165852),d=n(356808),c=n(458038),u=n(876777),p=n(818117),g=n(949753),x=e([o]);o=(x.then?(await x)():x)[0];const h={[g.s.Error]:{Icon:i.$u,color:u.Bl.text.error_text,bgColor:u.Bl.backgrounds.surface_error},[g.s.Info]:{Icon:i.sz,color:u.Bl.hover.accent_hover,bgColor:u.Bl.backgrounds.surface_info},[g.s.Warning]:{Icon:i.aN,color:u.wL.yellow,bgColor:u.Bl.backgrounds.surface_warning}},f=({description:e,title:t,type:n,withoutIcon:r,links:s})=>{const p=h[n].Icon;return(0,a.jsx)(m,{children:(0,a.jsxs)(v,{flexDirection:"row",type:n,children:[!r&&(0,a.jsx)(o.FlexBox,{"data-testid":"messageIcon",children:(0,a.jsx)(p,{width:20,height:20,color:h[n].color})}),(0,a.jsxs)(o.FlexBox,{children:[t&&(0,a.jsx)(o.FlexBox,{mb:8,children:(0,a.jsx)(d.Z,{children:t})}),(0,a.jsx)(c.Z,{children:e}),s&&(0,a.jsx)(o.FlexBox,{flexDirection:"row",mt:8,gridGap:16,children:s.items.map((e=>(0,a.jsx)(o.FlexBox,{onClick:()=>s.handleLinkClick(e.url),children:(0,a.jsx)(l.Z,{children:(0,a.jsxs)(o.FlexBox,{flexDirection:"row",alignItems:"center",children:[(0,a.jsx)(o.FlexBox,{mr:5,children:e.text}),(0,a.jsx)(i.xP,{color:u.wL.babyBlue})]})})},e.url)))})]})]})})},m=(0,p.ZP)(o.FlexBox)`
  border-radius: 8px;
  width: 100%;
`,v=(0,p.ZP)(o.FlexBox)`
  background: ${({type:e})=>h[e].bgColor};
  padding: 16px;
  border-radius: 8px;
  gap: 16px;
`,w=(0,s.memo)(f);r()}catch(e){r(e)}}))},404136:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>x});var a=n(785893),s=n(667294),i=n(230811),o=n(308787),l=n(458038),d=n(818117),c=n(876777),u=n(892496),p=e([o,u]);[o,u]=p.then?(await p)():p;const g=({message:e})=>{const{t}=(0,i.$G)("app");return(0,a.jsxs)(f,{children:[(0,a.jsx)(h,{children:(0,a.jsx)(l.Z,{children:t("general.message")})}),(0,a.jsx)(o.FlexBox,{p:"24px 16px",children:(0,a.jsx)(u.Z,{jsonObj:e})})]})},x=(0,s.memo)(g),h=(0,d.ZP)(o.FlexBox)`
  background: ${c.wL.darkSteel};
  position: absolute;
  left: 50%;
  top: -12px;
  transform: translateX(-50%);
  width: 154px;
  border-radius: 8px;
  justify-content: center;
  flex-direction: row;
  padding: 2px;
  text-transform: uppercase;
`,f=(0,d.ZP)(o.FlexBox)`
  position: relative;
  margin-top: 40px;
  background: ${c.wL.mineShaft};
  border-radius: 4px;
  width: 100%;
`;r()}catch(e){r(e)}}))},892496:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>f});var a=n(785893),s=n(667294),i=n(308787),o=n(561277),l=n(818117),d=n(356808),c=n(559755),u=e([i]);i=(u.then?(await u)():u)[0];const p={simple:({jsonObj:e})=>(0,a.jsx)(h,{children:(0,a.jsx)(o.Z,{children:e})}),array:({jsonObj:e})=>(0,a.jsx)(o.Z,{children:e.map((e=>(0,a.jsx)("div",{children:(0,a.jsx)(g,{jsonObj:e})},`item-${e}`)))}),object:({jsonObj:e})=>(0,a.jsx)("div",{children:Object.keys(e).map(((t,n)=>(0,a.jsx)("div",{children:"simple"===(0,c.$)(e[t])?(0,a.jsxs)(i.FlexBox,{flexDirection:"row",alignItems:"top",gridGap:8,width:"100%",maxWidth:"100%",children:[(0,a.jsxs)(d.Z,{children:[t,":"]}),(0,a.jsx)(g,{jsonObj:e[t]})]}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(d.Z,{children:[t,":"]}),(0,a.jsx)(g,{jsonObj:e[t]})]})},n)))})},g=({jsonObj:e})=>{const t=(0,c.$)(e),n=p[t];return(0,a.jsx)(x,{"data-testid":"txMsg",children:(0,a.jsx)(n,{jsonObj:e})})},x=l.ZP.div`
  width: 100%;
  & & {
    margin-left: 16px;
    width: 90%;
  }
`,h=l.ZP.div`
  box-sizing: border-box;
  height: auto;
  word-break: break-all;
`,f=(0,s.memo)(g);r()}catch(e){r(e)}}))},559755:(e,t,n)=>{n.d(t,{$:()=>a});const r=e=>e===Object(e),a=e=>r(e)?Array.isArray(e)?"array":r(e)?"object":"unknown":"simple"},130456:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>Z});var a=n(785893),s=n(302204),i=n(862083),o=n(967174),l=n(874360),d=n(404136),c=n(308787),u=n(132077),p=n(876777),g=n(818117),x=n(652682),h=e([s,i,o,d,c,u,x]);[s,i,o,d,c,u,x]=h.then?(await h)():h;var f=Object.defineProperty,m=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,b=(e,t,n)=>t in e?f(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))v.call(t,n)&&b(e,n,t[n]);if(m)for(var n of m(t))w.call(t,n)&&b(e,n,t[n]);return e};const j=({messageBody:e,containerRef:t,messageData:n})=>{const{activeWallet:r,chain:p,dappData:g}=(0,x.P)();return(0,a.jsx)(_,{children:(0,a.jsx)(c.ScrollingContainer,{children:(0,a.jsx)(c.FlexBox,{width:"100%",height:"100%",justifyContent:"center",flexDirection:"row",children:(0,a.jsx)(c.FlexBox,{height:560,children:(0,a.jsxs)(c.FlexBox,{px:16,ref:t,flexGrow:1,children:[(0,a.jsx)(s.V,{accountName:r.label,address:r.chainData[p.getConfig().id].address}),(0,a.jsx)(c.FlexBox,{mt:8,height:134,width:"100%",justifyContent:"center",alignItems:"center",children:(0,a.jsx)(u.Z,{items:[{src:p.getConfig().image}]})}),(0,a.jsx)(o.X,{sender:g.name,type:l.P.Sign}),n&&(0,a.jsx)(c.FlexBox,{mt:32,children:(0,a.jsx)(i.Z,y({},n))}),(0,a.jsx)(c.FlexBox,{mb:32,children:(0,a.jsx)(d.Z,{message:e})})]})})})})})},_=(0,g.ZP)(c.FlexBox).attrs({justifyContent:"space-between"})`
  height: 100%;
  width: 100%;
  background: ${p.wL.black};
`,Z=j;r()}catch(e){r(e)}}))},652682:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{P:()=>d});var a=n(667294),s=n(50533),i=n(281672),o=n(457279),l=e([i]);i=(l.then?(await l)():l)[0];const d=()=>{const{dappData:e,message:t}=(0,o.n)(),n=(0,i.fU)(),r=(0,s.v9)((e=>e.wallets)),l=r.wallets[r.activeWalletId],d=(0,a.useMemo)((()=>n.getChainControllerById(t.chainId)),[t]);return{activeWallet:l,dappData:e,message:t,chain:d}};r()}catch(e){r(e)}}))},969283:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{ZP:()=>j});var a=n(785893),s=n(646284),i=n(18544),o=n(824670),l=n(716053),d=n(308787),c=n(270448),u=n(256974),p=n(818117),g=n(876777),x=n(216558),h=n(50533),f=n(850442),m=e([s,i,o,l,d,c,f]);[s,i,o,l,d,c,f]=m.then?(await m)():m;const v=({children:e,isLoading:t,onSubmit:n})=>{const r=(0,h.v9)((e=>e.wallets.wallets[e.wallets.activeWalletId])),{dappData:p,messages:g,onSubmitWrapped:m,loading:v,handleReject:j,t:_,isDangerousSignMessage:Z,dappMessage:I}=(0,f.Y)(n,!0),{openDialog:P,onCloseDialog:S,handleConfirm:k}=(0,i.Z)(m),B=Z||"eth_sign"===I.raw.method;return 0===g.length?(0,a.jsx)(w,{children:(0,a.jsx)("div",{children:_("dapp_requested_template.no_signature_request")})}):(0,a.jsxs)(w,{children:[(0,a.jsx)(s.ConfirmDialog,{open:P,onClose:S,onSubmit:k}),(0,a.jsxs)("div",{children:[(0,a.jsx)(l.Z,{dappName:p.name,dappIconSrc:p.icon,url:p.url,time:Date.now()}),(0,a.jsx)(c.Z,{type:p.status||u.$.Warning})]}),(0,a.jsxs)(y,{children:[(0,a.jsx)(b,{children:e}),(0,a.jsx)(d.FlexBox,{flex:"1",alignSelf:"flex-end",width:"100%",justifyContent:"end",position:"fixed",bottom:0,pb:v&&(0,x.C)(r.walletInfo.type)?30:0,children:(0,a.jsx)(o.Z,{leftButton:{title:"general.cancel",onClick:j,dataTestId:"cancelBtn"},rightButton:{title:B?"multi_tx_msg_sign.sign_anyway":"multi_tx_msg_sign.sign",onClick:m,variant:B?"danger":"primary",dataTestId:"signBtn",loading:t},noOptions:!0,withoutAnyData:!0})})]}),v&&(0,a.jsx)(d.FlexBox,{pb:30,children:(0,a.jsx)(d.ConfirmLedger,{show:v})})]})},w=p.ZP.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${g.wL.black};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,b=(0,p.ZP)(d.FlexBox)`
  flex-direction: column;
  width: 100%;
  padding-top: 10px;
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  flex: 1 1 auto;
  overflow: auto;
  row-gap: 24px;

  li {
    margin-left: 0;

    &:first-child {
      margin-top: 10px;
    }
  }
`,y=p.ZP.div`
  background: ${g.wL.black};
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  overflow: auto;
`,j=v;r()}catch(e){r(e)}}))},716792:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{l:()=>f});n(785893),n(739989),n(814401),n(561277),n(458038);var a=n(667294),s=(n(230811),n(50533)),i=n(996974),o=n(646284),l=n(18544),d=n(972819),c=n(835534),u=(n(522933),n(281672)),p=(n(771341),n(308787)),g=(n(729154),n(876777),n(519416),n(851892),n(935527)),x=e([o,l,d,c,u,p,g]);[o,l,d,c,u,p,g]=x.then?(await x)():x;const h=["https://dashboard.xdefi.io","https://staking.xdefi.io","https://app.xdefi.io","https://app-beta.xdefi.io"],f=()=>{var e;const t=(0,i.TH)(),n=(0,u.UW)(),r=(0,s.v9)((e=>e.dappsMessages.messages)),o=(0,a.useMemo)((()=>{if(!t.search)return r[0];const e=new URLSearchParams(t.search).get("xdefiId");return r.find((t=>t.xdefiId.toString()===e))||r[0]}),[r,t]),l=(0,a.useMemo)((()=>{var e,t;return!(null==(t=null==(e=null==o?void 0:o.origin)?void 0:e.tab)?void 0:t.url)||!h.some((e=>{var t,n,r;return null==(r=null==(n=null==(t=null==o?void 0:o.origin)?void 0:t.tab)?void 0:n.url)?void 0:r.startsWith(e)}))}),[o]),d=o&&(null==(e=n.chains.getChainControllerById(null==o?void 0:o.chainId))?void 0:e.isSignMessage(o))&&l&&["eth_sign","signMessage"].includes(o.raw.method);return{dappMessage:o,messages:r,isDangerousSignMessage:d,isDangerousDomain:l}};r()}catch(e){r(e)}}))},278947:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.r(t),n.d(t,{default:()=>d});var a=n(785893),s=n(130456),i=n(969283),o=n(96054),l=e([s,i,o]);[s,i,o]=l.then?(await l)():l;const d=()=>{const{handleApprove:e,decodedData:t,rows:n,messageData:r,isLoading:l}=(0,o.C)();return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(i.ZP,{onSubmit:e,isLoading:l,children:(0,a.jsx)(s.Z,{handleApprove:e,messageBody:t||n[0].value,messageData:r})})})};r()}catch(e){r(e)}}))},96054:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{C:()=>w});var a=n(739989),s=n(667294),i=n(230811),o=n(50533),l=n(996974),d=n(949753),c=n(835534),u=n(691438),p=n(25022),g=n(716792),x=n(281672),h=n(488049),f=n(519416),Buffer=n(348764).Buffer,m=e([c,g,x,h]);[c,g,x,h]=m.then?(await m)():m;const v=e=>{try{const t=e.startsWith("0x")?e.substring(2):e,n=Buffer.from(t,"hex");return 32===n.length?e:n.toString("utf8")}catch(t){return e}},w=()=>{var e,t,n;const{t:r}=(0,i.$G)("app"),m=(0,l.s0)(),w=(0,l.TH)(),b=null!=(t=null==(e=null==w?void 0:w.state)?void 0:e.singleElement)&&t,y=(0,x.UW)(),j=(0,x.Ni)(),{messages:_}=(0,o.v9)((e=>e.dappsMessages)),{wallets:Z}=(0,o.v9)((e=>e.wallets)),[I,P]=(0,s.useState)(!1);(0,h.C)();const{dappMessage:S,isDangerousSignMessage:k,isDangerousDomain:B}=(0,g.l)(),D=(0,s.useMemo)((()=>{var e,t,n,r,a;return(null==(t=null==(e=null==S?void 0:S.raw)?void 0:e.params[0])?void 0:t.data)||(null==(r=null==(n=null==S?void 0:S.raw)?void 0:n.params)?void 0:r.data)||(null==(a=null==S?void 0:S.raw)?void 0:a.params)||[]}),[null==(n=null==S?void 0:S.raw)?void 0:n.params]),C=(0,s.useMemo)((()=>{var e,t,n;if("personal_sign"===S.raw.method)return[{name:"Message",value:v(D)||D}];if("eth_sign"===S.raw.method)return[{name:"Message",value:D}];if(null==(t=null==(e=S.raw.method)?void 0:e.startsWith)?void 0:t.call(e,"eth_signTypedData"))return D;if("sign"===S.raw.method)return Object.keys(null==(n=null==S?void 0:S.raw)?void 0:n.params).reduce(((e,t)=>{var n;return-1===["msgs","fee"].indexOf(t)?e:[...e,{name:t,value:null==(n=null==S?void 0:S.raw)?void 0:n.params[t]}]}),[]);if(S.chainId===u.J.Solana){if(D.message)return[{value:D.message}];if(D.messages)return D.messages.map((e=>({value:e})))}return Array.isArray(D)?D:[{value:JSON.stringify(D)}]}),[S,D]),M=(0,s.useMemo)((()=>{a.Z.debug(`orgMessage: ${D}`);try{return Array.isArray(D)?D.map((e=>e.value)):JSON.parse(D)}catch(e){a.Z.debug("orgMessage is not object")}finally{a.Z.debug(`orgMessage: ${D}`)}}),[D]);(0,s.useEffect)((()=>{_.length>1&&b&&m(-1)}),[_,b,m]);return{handleApprove:(0,s.useCallback)((e=>{return t=void 0,n=null,r=function*(){P(!0);const t=Z[c.Z.getWalletIdWithMessage(S)],n=yield y.approveDappsTransaction(S,t.id,p.GG.Approve,{walletPassword:e||j.masterPassword});P(!1),f.browser.runtime.sendMessage(void 0,{xdefiId:S.xdefiId,raw:{id:S.xdefiId,result:n}})},new Promise(((e,a)=>{var s=e=>{try{o(r.next(e))}catch(e){a(e)}},i=e=>{try{o(r.throw(e))}catch(e){a(e)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,i);o((r=r.apply(t,n)).next())}));var t,n,r}),[Z,S,y,j]),decodedData:M,rows:C,messageData:(0,s.useMemo)((()=>B?"eth_sign"===S.raw.method||k?{type:d.s.Error,description:r("message_signing.error")}:{type:d.s.Info,description:r("message_signing.info")}:null),[S,r]),isLoading:I}};r()}catch(e){r(e)}}))},949753:(e,t,n)=>{n.d(t,{s:()=>r});var r=(e=>(e.Info="info",e.Warning="warning",e.Error="error",e))(r||{})},874360:(e,t,n)=>{n.d(t,{P:()=>r});var r=(e=>(e.Swap="Swap",e.Spend="Spend",e.Sign="Sign",e))(r||{})},850442:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{Y:()=>m});var a=n(667294),s=n(281672),i=n(457279),o=n(972819),l=n(996974),d=n(230811),c=n(50533),u=n(739989),p=n(519416),g=n(835534),x=n(851892),h=n(716792),f=e([s,o,g,h]);[s,o,g,h]=f.then?(await f)():f;const m=(e,t=!0)=>{var n,r;const[f,m]=(0,a.useState)(!1),{dappData:v}=(0,i.n)(),{addNotification:w}=(0,o.Z)(),b=(0,s.nl)(),{dappMessage:y,messages:j,isDangerousSignMessage:_}=(0,h.l)(),Z=(0,l.s0)(),{t:I}=(0,d.$G)("app"),P=(0,s.fU)(),S=(0,a.useMemo)((()=>{if(null==y?void 0:y.chainId)return P.getChainControllerById(null==y?void 0:y.chainId)}),[P]),k=(0,a.useCallback)((()=>{j.length>1?Z(-1):window.close()}),[Z,j]);(0,a.useEffect)((()=>{0===j.length&&window.close()}),[j]);const B=(null==(r=null==(n=null==y?void 0:y.origin)?void 0:n.tab)?void 0:r.url)||"",D=(0,c.v9)((e=>e.wallets.activeWalletId)),C=(0,c.v9)((e=>e.wallets.wallets)),[M,$]=(0,a.useState)(void 0),F=(0,a.useCallback)(((e=I("dapp_requested_template.errors.reject_message"))=>{u.Z.info("handleReject",y),p.browser.runtime.sendMessage(null,{xdefiId:null==y?void 0:y.xdefiId,raw:{id:null==y?void 0:y.xdefiId,error:e}}).finally((()=>{k()})),b.removeMessageById(null==y?void 0:y.xdefiId)}),[k,y,b,I]);(0,a.useEffect)((()=>{const e=C[t?g.Z.getWalletIdWithMessage(y):D];e?$(e):(w({title:I("dapp_requested_template.errors.wallet_required"),type:"warning",message:I("dapp_requested_template.errors.wallet_required_description")}),F(I("dapp_requested_template.errors.wallet_not_found")))}),[F,$,D,y,C,t,I]);const L=(0,s.Ni)(),{requireTxPassword:W}=(0,c.v9)((e=>e.settings)),O=(0,a.useCallback)((t=>{return n=void 0,r=null,a=function*(){if(y&&t){m(!0);try{yield e(t),b.removeMessageById(y.xdefiId),k()}catch(e){const t=e;if(t.message.includes("Invalid password"))return w({title:I("dapp_requested_template.errors.invalid_password"),type:"error",message:I("alert.wallet.password.error.incorrect.messages.try_again")});u.Z.error({e:t}),w({title:I("dapp_requested_template.errors.tx_error"),type:"error",message:I("dapp_requested_template.errors.tx_error_short_description",{message:I((0,x.ZP)(t,null==S?void 0:S.getType()))})})}finally{m(!1)}}},new Promise(((e,t)=>{var s=e=>{try{o(a.next(e))}catch(e){t(e)}},i=e=>{try{o(a.throw(e))}catch(e){t(e)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,i);o((a=a.apply(n,r)).next())}));var n,r,a}),[k,e,m,F,W,b,L,y,C,t,I]);return{dappData:v,dappMessage:y,messages:j,isDangerousSignMessage:_,url:B,wallet:M,keysController:L,requireTxPassword:W,onSubmitWrapped:O,loading:f,handleReject:F,t:I}};r()}catch(e){r(e)}}))},935527:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var r=n(818117),a=n(308787),s=n(876777),i=e([a]);a=(i.then?(await i)():i)[0];r.ZP.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${s.wL.black};
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,(0,r.ZP)(a.FlexBox)`
  flex-direction: column;
  width: 100%;
  padding-top: 10px;
  list-style: none;
  margin: 0;
  box-sizing: border-box;
  flex: 1 1 auto;
  overflow: auto;
  row-gap: 24px;

  li {
    margin-left: 0;

    &:first-child {
      margin-top: 10px;
    }
  }
`,r.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  padding: 20px;
  position: relative;
  overflow: hidden;
`,r.ZP.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  padding-left: 12px;
  width: calc(100% - 15vw);
`,r.ZP.span`
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`,(0,r.ZP)(a.Link)`
  text-align: unset;
`,r.ZP.i`
  width: 44px;
  height: 44px;
  background: ${s.wL.deepSea};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`,r.ZP.div`
  background: ${s.wL.black};
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  overflow: auto;
`,r.ZP.section`
  letter-spacing: 0.35px;
  padding: 10px;
  border-bottom: 1px solid ${s.wL.black};
  border-top: 1px solid ${s.wL.black};
  display: flex;
  flex-direction: row-reverse;
`,(0,r.ZP)(a.FlexBox)`
  min-width: 72px;
  height: 21px;
  background-color: ${s.wL.darkGrey};
  border-radius: 54px;
  align-items: center;
  justify-content: center;
`,(0,r.ZP)(a.FlexBox)`
  flex: 1;
  text-align: right;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`,r.ZP.img`
  width: 17px;
  height: 17px;
  margin-right: 3px;
`,r.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;

  svg {
    margin-right: 5px;
  }
`,r.ZP.div`
  display: flex;
  flex-direction: row;
  z-index: 3;
`,(0,r.ZP)(a.SecondaryButton)`
  margin-right: 10px;
`,(0,r.ZP)(a.PrimaryButton)``,r.ZP.div`
  margin-left: 10px;
  overflow-x: auto;

  > .react-json-view {
    word-break: break-all;
  }
`,(0,r.ZP)(a.FlexBox).attrs({padding:"22px 8px 8px 8px",alignItems:"center"})`
  background: ${s.wL.mineShaft};
  border-radius: 8px;
  row-gap: 16px;
`,(0,r.ZP)(a.ConfirmLedger)`
  position: fixed;
  height: 90px;
`;t()}catch(e){t(e)}}))},457279:(e,t,n)=>{n.d(t,{n:()=>u});var r=n(667294),a=n(50533),s=n(996974),i=n(459457);const o=n(265142).Ps`
  query Dapp($app: DAppReputationInput!) {
    dapp(app: $app) {
      status
      chains
    }
  }
`;const l=e=>{return t=void 0,n=null,r=function*(){return i.Lp.query({query:o,fetchPolicy:"no-cache",variables:{app:{url:e}}})},new Promise(((e,a)=>{var s=e=>{try{o(r.next(e))}catch(e){a(e)}},i=e=>{try{o(r.throw(e))}catch(e){a(e)}},o=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,i);o((r=r.apply(t,n)).next())}));var t,n,r};var d=n(256974);const c={Verified:d.$.Success,Malicious:d.$.Error,Unknown:d.$.Warning},u=()=>{const{xdefiId:e}=(0,s.UO)(),{messages:t}=(0,a.v9)((e=>e.dappsMessages)),[n,i]=(0,r.useState)(),o=(0,r.useMemo)((()=>t.find((t=>{var n;return(null==(n=t.xdefiId)?void 0:n.toString())===e}))||t[0]),[t,e]),u=(0,r.useMemo)((()=>{var e,t,r,a,s;const i=(null==(t=null==(e=null==o?void 0:o.origin)?void 0:e.tab)?void 0:t.url)||"http://localhost";return{name:new URL(i).hostname.replace("www.","")||"",icon:(null==(a=null==(r=null==o?void 0:o.origin)?void 0:r.tab)?void 0:a.favIconUrl)||"",url:(null==(s=null==o?void 0:o.origin)?void 0:s.origin)||"",status:null==n?void 0:n.status}}),[o,n]);return(0,r.useEffect)((()=>{if(!o||!(null==o?void 0:o.origin))return;var e,t,n;e=void 0,t=null,n=function*(){var e;try{const t=yield l(null==(e=o.origin)?void 0:e.origin),n={chains:t.data.dapp.chains,status:c[t.data.dapp.status]||d.$.Warning};i(n)}catch(e){i({chains:[],status:d.$.Warning})}},new Promise(((r,a)=>{var s=e=>{try{o(n.next(e))}catch(e){a(e)}},i=e=>{try{o(n.throw(e))}catch(e){a(e)}},o=e=>e.done?r(e.value):Promise.resolve(e.value).then(s,i);o((n=n.apply(e,t)).next())}))}),[o]),{dappData:u,message:o}}},256974:(e,t,n)=>{n.d(t,{$:()=>a,h:()=>s});var r=n(771341),a=(e=>(e.Success="Success",e.SuccessShort="SuccessShort",e.Error="Error",e.Warning="Warning",e))(a||{});const s={Success:{title:"suspicious_banner.success_title",label:"suspicious_banner.success_label",Icon:r.MC,tooltipText:"suspicious_banner.success_tooltip"},SuccessShort:{title:"suspicious_banner.success_short_title",label:"suspicious_banner.success_short_label",Icon:r.MC,tooltipText:"suspicious_banner.success_short_tooltip"},Error:{title:"suspicious_banner.error_title",label:"suspicious_banner.error_label",Icon:r.UB,tooltipText:"suspicious_banner.error_tooltip"},Warning:{title:"suspicious_banner.warning_title",label:"suspicious_banner.warning_label",Icon:r.hS,tooltipText:"suspicious_banner.warning_tooltip"}}}}]);