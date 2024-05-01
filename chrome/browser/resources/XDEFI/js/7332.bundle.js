!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="2de42937-b95d-4e48-9f9a-e77e4d3cd67c",e._sentryDebugIdIdentifier="sentry-dbid-2de42937-b95d-4e48-9f9a-e77e4d3cd67c")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[7332],{716792:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{l:()=>g});n(785893),n(739989),n(814401),n(561277),n(458038);var i=n(667294),s=(n(230811),n(50533)),r=n(996974),l=n(646284),o=n(18544),d=n(972819),c=n(835534),u=(n(522933),n(281672)),p=(n(771341),n(308787)),x=(n(729154),n(876777),n(519416),n(851892),n(935527)),h=e([l,o,d,c,u,p,x]);[l,o,d,c,u,p,x]=h.then?(await h)():h;const f=["https://dashboard.xdefi.io","https://staking.xdefi.io","https://app.xdefi.io","https://app-beta.xdefi.io"],g=()=>{var e;const t=(0,r.TH)(),n=(0,u.UW)(),a=(0,s.v9)((e=>e.dappsMessages.messages)),l=(0,i.useMemo)((()=>{if(!t.search)return a[0];const e=new URLSearchParams(t.search).get("xdefiId");return a.find((t=>t.xdefiId.toString()===e))||a[0]}),[a,t]),o=(0,i.useMemo)((()=>{var e,t;return!(null==(t=null==(e=null==l?void 0:l.origin)?void 0:e.tab)?void 0:t.url)||!f.some((e=>{var t,n,a;return null==(a=null==(n=null==(t=null==l?void 0:l.origin)?void 0:t.tab)?void 0:n.url)?void 0:a.startsWith(e)}))}),[l]),d=l&&(null==(e=n.chains.getChainControllerById(null==l?void 0:l.chainId))?void 0:e.isSignMessage(l))&&o&&["eth_sign","signMessage"].includes(l.raw.method);return{dappMessage:l,messages:a,isDangerousSignMessage:d,isDangerousDomain:o}};a()}catch(e){a(e)}}))},258067:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>h});var i=n(785893),s=n(667294),r=n(158911),l=n(308787),o=n(108363),d=n(412252),c=n(458038),u=n(88512),p=e([l,u]);[l,u]=p.then?(await p)():p;const x=({message:e})=>{const{url:t,domain:n,logo:a,title:s,timeStamp:p}=(0,r.Z)(e);return(0,i.jsxs)(u.VY,{children:[(0,i.jsxs)(l.FlexBox,{flexDirection:"row",width:"100%",children:[a?(0,i.jsx)(u.TR,{src:a,height:"40",alt:"dapp"}):(0,i.jsx)(l.Avatar,{text:n[0],size:"lg"}),(0,i.jsxs)(l.FlexBox,{ml:8,width:230,children:[(0,i.jsx)(o.Z,{"data-testid":"dappName",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:s}),(0,i.jsx)(u.zU,{to:t,dataTestId:"dappDomain",children:n})]})]}),(0,i.jsxs)(l.FlexBox,{alignItems:"flex-end",gridGap:4,children:[(0,i.jsx)(d.Z,{children:"TIMESTAMP"}),(0,i.jsx)(c.Z,{children:p})]})]})},h=(0,s.memo)(x);a()}catch(e){a(e)}}))},720300:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{Z:()=>x});var i=n(785893),s=n(667294),r=n(258067),l=n(308787),o=n(818117),d=n(978410),c=e([r,l,d]);[r,l,d]=c.then?(await c)():c;const u=(0,o.ZP)(l.FlexBox).attrs({flex:1})`
  overflow: overlay;
`,p=({children:e,footer:t,message:n})=>(0,i.jsxs)(d.W,{children:[(0,i.jsx)(r.Z,{message:n}),(0,i.jsx)(u,{children:e}),t&&t]}),x=(0,s.memo)(p);a()}catch(e){a(e)}}))},577332:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.r(t),n.d(t,{default:()=>F});var i=n(785893),s=n(308787),r=n(522933),l=n(561277),o=n(108363),d=n(995928),c=n(132077),u=n(453251),p=n(667294),x=n(824670),h=n(646284),f=n(818117),g=n(230811),v=n(281672),m=n(720300),w=n(726372),b=e([s,c,x,h,v,m,w]);[s,c,x,h,v,m,w]=b.then?(await b)():b;var y=Object.defineProperty,j=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,P=(e,t,n)=>t in e?y(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))I.call(t,n)&&P(e,n,t[n]);if(j)for(var n of j(t))B.call(t,n)&&P(e,n,t[n]);return e};const Z=(0,f.ZP)(s.FlexBox).attrs({my:40,width:"100%"})`
  min-height: 120px;
`,S=({title:e,data:t,getAssetStr:n,chainId:a})=>{const r=(0,v.JB)(),d=(0,v.fU)(),x=(0,p.useMemo)((()=>{const e=[];return t.ordinals.forEach((t=>{e.push({src:r.getNFTIcons(a,t)[0]||""})})),t.value>0&&e.push({src:d.getChainControllerById(a).getConfig().image}),e}),[a,t]),h=(0,p.useMemo)((()=>{const e=[];return t.ordinals.forEach((t=>{var n;return e.push((null==(n=t.nftData.externalData)?void 0:n.name)||t.contractName||t.id)})),t.value>0&&e.push(n(t.value)),e}),[t,n]);return(0,i.jsxs)(s.FlexBox,{width:144,flexDirection:"column",justifyContent:"flex-start",alignItems:"center",children:[(0,i.jsx)(s.FlexBox,{mb:8,children:(0,i.jsx)(o.Z,{children:e})}),(0,i.jsx)(s.FlexBox,{height:48,width:48,m:8,children:(0,i.jsx)(c.Z,{items:x,size:u.X.Small})}),(0,i.jsx)(s.FlexBox,{mt:8,children:h.map((e=>(0,i.jsxs)(l.Z,{children:[" ",e]},e)))})]})},D=e=>{const{t}=(0,g.$G)("app");return(0,i.jsx)(S,k({title:t("general.send")},e))},C=e=>{const{t}=(0,g.$G)("app");return(0,i.jsx)(S,k({title:t("general.receive")},e))},F=()=>{const{signInMsg:e,accountData:t,inputs:n,outputs:a,handleApprove:l,handleReject:c,signerMessage:u,txData:p,rawPBST:f,getAssetStr:g}=(0,w.i)();return(0,i.jsx)(m.Z,{message:e,footer:(0,i.jsx)(x.Z,{leftButton:{title:"general.reject",onClick:c,dataTestId:"regectBtn"},rightButton:{title:"general.approve",onClick:l,dataTestId:"approveBtn"}}),children:(0,i.jsxs)(s.FlexBox,{alignItems:"center",children:[(0,i.jsxs)(s.FlexBox,{mt:32,alignItems:"center",children:[(0,i.jsx)(o.Z,{children:t.label}),(0,i.jsx)(d.Z,{children:(0,r.fL)(t.address)})]}),(0,i.jsx)(Z,{children:n&&a?(0,i.jsxs)(s.FlexBox,{px:8,justifyContent:"space-between",flexDirection:"row",children:[(0,i.jsx)(D,{data:n,chainId:e.chainId,getAssetStr:g}),(0,i.jsx)(C,{data:a,chainId:e.chainId,getAssetStr:g})]}):(0,i.jsx)(s.FlexBox,{justifyContent:"center",alignItems:"center",children:(0,i.jsx)(h.Loader,{})})}),(0,i.jsx)(s.FlexBox,{children:(0,i.jsx)(d.Z,{children:u})}),(0,i.jsx)(s.FlexBox,{m:16,mb:40,children:(0,i.jsx)(s.TxData,{data:p,footerLabel:f})})]})})};a()}catch(e){a(e)}}))},935527:(e,t,n)=>{n.a(e,(async(e,t)=>{try{var a=n(818117),i=n(308787),s=n(876777),r=e([i]);i=(r.then?(await r)():r)[0];a.ZP.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${s.wL.black};
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,(0,a.ZP)(i.FlexBox)`
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
`,a.ZP.div`
  display: flex;
  align-items: center;
  margin-bottom: 13px;
  padding: 20px;
  position: relative;
  overflow: hidden;
`,a.ZP.div`
  display: flex;
  flex-direction: column;
  justify-self: flex-start;
  padding-left: 12px;
  width: calc(100% - 15vw);
`,a.ZP.span`
  margin-top: 9px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  display: inline-block;
`,(0,a.ZP)(i.Link)`
  text-align: unset;
`,a.ZP.i`
  width: 44px;
  height: 44px;
  background: ${s.wL.deepSea};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`,a.ZP.div`
  background: ${s.wL.black};
  width: 100%;
  box-sizing: border-box;
  height: 100%;
  flex-direction: column;
  justify-content: space-between;
  display: flex;
  overflow: auto;
`,a.ZP.section`
  letter-spacing: 0.35px;
  padding: 10px;
  border-bottom: 1px solid ${s.wL.black};
  border-top: 1px solid ${s.wL.black};
  display: flex;
  flex-direction: row-reverse;
`,(0,a.ZP)(i.FlexBox)`
  min-width: 72px;
  height: 21px;
  background-color: ${s.wL.darkGrey};
  border-radius: 54px;
  align-items: center;
  justify-content: center;
`,(0,a.ZP)(i.FlexBox)`
  flex: 1;
  text-align: right;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
`,a.ZP.img`
  width: 17px;
  height: 17px;
  margin-right: 3px;
`,a.ZP.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-bottom: 15px;

  svg {
    margin-right: 5px;
  }
`,a.ZP.div`
  display: flex;
  flex-direction: row;
  z-index: 3;
`,(0,a.ZP)(i.SecondaryButton)`
  margin-right: 10px;
`,(0,a.ZP)(i.PrimaryButton)``,a.ZP.div`
  margin-left: 10px;
  overflow-x: auto;

  > .react-json-view {
    word-break: break-all;
  }
`,(0,a.ZP)(i.FlexBox).attrs({padding:"22px 8px 8px 8px",alignItems:"center"})`
  background: ${s.wL.mineShaft};
  border-radius: 8px;
  row-gap: 16px;
`,(0,a.ZP)(i.ConfirmLedger)`
  position: fixed;
  height: 90px;
`;t()}catch(e){t(e)}}))},158911:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(667294),i=n(529373);const s=e=>{var t,n,s,r,l,o,d;const c=(null==(n=null==(t=null==e?void 0:e.origin)?void 0:t.tab)?void 0:n.url)||"http://localhost",u=new URL(c).hostname,p=(null==(r=null==(s=null==e?void 0:e.origin)?void 0:s.tab)?void 0:r.favIconUrl)||"",x=(null==(o=null==(l=null==e?void 0:e.origin)?void 0:l.tab)?void 0:o.title)||"",[h,f]=(0,a.useState)((0,i.j)(new Date(null!=(d=null==e?void 0:e.time)?d:0)));return(0,a.useEffect)((()=>{const t=setInterval((()=>{f((0,i.j)(new Date(e.time)))}),1e3);return()=>clearInterval(t)}),[e.time]),{timeStamp:h,url:c,domain:u,logo:p,title:x}}},88512:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{TR:()=>c,VY:()=>d,zU:()=>u});var i=n(818117),s=n(308787),r=n(834166),l=n(876777),o=e([s]);s=(o.then?(await o)():o)[0];const d=(0,i.ZP)(s.FlexBox).attrs({flexDirection:"row",alignItems:"space-between",backgroundColor:l.wL.mineShaft,p:16})``,c=i.ZP.img`
  border-radius: 4px;
`,u=(0,i.ZP)(s.Link)`
  text-align: left;
  ${(0,r.LH)()}
`;a()}catch(e){a(e)}}))},978410:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{W:()=>o});var i=n(818117),s=n(308787),r=n(876777),l=e([s]);s=(l.then?(await l)():l)[0];const o=(0,i.ZP)(s.FlexBox)`
  height: 100%;
  width: 100%;
  background: ${r.wL.black};
`;a()}catch(e){a(e)}}))},726372:(e,t,n)=>{n.a(e,(async(e,a)=>{try{n.d(t,{i:()=>M});var i=n(244431),s=n.n(i),r=n(617656),l=n(23064),o=n(831352),d=n(522933),c=n(281672),u=n(488049),p=n(667294),x=n(230811),h=n(50533),f=n(996974),g=n(691438),v=n(716792),m=n(427504),w=n(377443),b=n(519416),y=e([c,u,v,w]);[c,u,v,w]=y.then?(await y)():y;var j=Object.defineProperty,I=Object.defineProperties,B=Object.getOwnPropertyDescriptors,P=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,Z=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?j(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,D=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&S(e,n,t[n]);if(P)for(var n of P(t))Z.call(t,n)&&S(e,n,t[n]);return e},C=(e,t)=>I(e,B(t)),F=(e,t,n)=>new Promise(((a,i)=>{var s=e=>{try{l(n.next(e))}catch(e){i(e)}},r=e=>{try{l(n.throw(e))}catch(e){i(e)}},l=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,r);l((n=n.apply(e,t)).next())}));const O=e=>{const t=(0,c.fU)(),n=t.getChainControllerById(o.yp.Bitcoin),{t:a}=(0,x.$G)("app"),[i,s]=(0,p.useState)({inputs:{},outputs:{}}),{activeWalletId:d,wallets:u}=(0,h.v9)((e=>e.wallets)),f=(0,h.v9)((e=>e.wallets.wallets[d].chainData[n.getId()].address)),g=(0,p.useCallback)((e=>F(void 0,null,(function*(){const a=u[d].chainData[n.getId()];a.address=e;return t.getNFTBalanceRequests({[n.getId()]:a})[0].then((e=>Object.values(e[n.getId()]))).catch((()=>[]))}))),[]),v=(0,p.useCallback)((()=>F(void 0,null,(function*(){r.Wi(w);let t=new r._B;try{t=r._B.fromBase64(e,{network:r.QW.bitcoin})}catch(e){}try{t=r._B.fromHex(e,{network:r.QW.bitcoin})}catch(e){}if(0===t.txInputs.length)throw a("controller_errors.no_valid_inputs");const n=[],i=[],s={inputs:{},outputs:{}};yield t.txInputs.reduce(((e,a,i)=>F(void 0,null,(function*(){var o,d,c;yield e;let u="",p=0;const{witnessUtxo:x,nonWitnessUtxo:h,finalScriptWitness:v,partialSig:m,tapInternalKey:w}=t.data.inputs[i];if(x)u=w&&(0,l.isTaprootInput)(t.data.inputs[i])?r.PP.p2tr({internalPubkey:w,network:r.QW.bitcoin}).address||"":r.Lk.fromOutputScript(x.script,r.QW.bitcoin),p=x.value;else if(h){const e=r.YW.fromBuffer(h).outs[t.txInputs[i].index];u=r.Lk.fromOutputScript(e.script,r.QW.bitcoin),p=e.value}const b=yield g(u),y=a.hash.reverse().toString("hex"),j=b.find((e=>{if(!e.nftData.location)return!1;const[t,n,i]=e.nftData.location.split(":");return t===y&&a.index===Number(n)})),I=!!v||!!m,B=u==f;j?s.inputs[u]=C(D({},s.inputs[u]),{ordinals:(null==(o=s.inputs[u])?void 0:o.ordinals)?[...s.inputs[u].ordinals,j]:[j]}):s.inputs[u]?s.inputs[u]={ordinals:(null==(d=s.inputs[u||""])?void 0:d.ordinals)||[],value:s.inputs[u].value+p}:s.inputs[u]={ordinals:(null==(c=s.inputs[u||""])?void 0:c.ordinals)||[],value:p},n.push({address:u,ordinal:j,isSigned:I,myInput:B,value:p})}))),Promise.resolve());let o=n.slice();const d=n.reduce(((e,t)=>e+t.value),0);t.txOutputs.forEach((e=>{let t=e.value;const n=[];o.find((e=>t-e.value>=0?(n.push(e),t-=e.value,o=o.slice(1),0===t):!(t-e.value<0)||(n.push(C(D({},e),{value:t})),e.value-=t,!0)),[]);const a=n.find((e=>e.ordinal)),s=null==a?void 0:a.ordinal;i.push({address:e.address||"",value:e.value,ordinal:s})}));const c=i.reduce(((e,t)=>e+t.value),0),u=i.some((e=>e.address!==i[0].address));return i.forEach((e=>{var t,n,a,i,r;const l=null==e?void 0:e.ordinal;s.outputs=C(D({},s.outputs),u&&l&&d>c?{[e.address||""]:C(D({},s.outputs[e.address||""]),{ordinals:(null==(t=s.outputs[e.address||""])?void 0:t.ordinals)?[...s.outputs[e.address||""].ordinals,l]:[l]})}:{[e.address||""]:{ordinals:(null==(n=s.outputs[e.address||""])?void 0:n.ordinals)||[],value:(null!=(r=null==(i=null==(a=s.outputs)?void 0:a[e.address||""])?void 0:i.value)?r:0)+e.value}})})),s}))),[e,r.QW.bitcoin,g,f]);return(0,p.useEffect)((()=>{v().then((e=>{s(e)}))}),[v]),{pSBTData:i}},M=()=>{var e,t,n;const{t:a}=(0,x.$G)("app"),i=(0,f.s0)(),r=(0,f.TH)(),l=null!=(t=null==(e=null==r?void 0:r.state)?void 0:e.singleElement)&&t,o=(0,c.UW)(),w=(0,c.Ni)(),{messages:y}=(0,h.v9)((e=>e.dappsMessages)),{wallets:j,activeWalletId:I}=(0,h.v9)((e=>e.wallets));(0,u.C)();const{dappMessage:B}=(0,v.l)(),P=(0,p.useMemo)((()=>{var e;return{address:null==(e=j[I].chainData)?void 0:e[B.chainId].address,label:j[I].label}}),[j,I,B]),k=null==(n=null==B?void 0:B.raw)?void 0:n.params[0],Z=(null==k?void 0:k.psbtBase64)||(null==k?void 0:k.psbtHex),{pSBTData:S}=O(Z);(0,p.useEffect)((()=>{y.length>1&&l&&i(-1)}),[y,l,i]);const M=(0,p.useCallback)((e=>{const t=o.chains.getChainControllersByType(g.J.Bitcoin)[0];return(0,m.zr)(new(s())((0,m.R6)(t,e,t.getConfig().tokenSymbol,t.getConfig().decimals)),t.getConfig().tokenSymbol)}),[o]),L=(0,p.useCallback)(((e="XDEFI: user rejected the transaction")=>{b.browser.runtime.sendMessage(null,{xdefiId:null==B?void 0:B.xdefiId,raw:{id:null==B?void 0:B.xdefiId,error:e}}).finally((()=>{window.close()})),o.dapps.removeMessageById(null==B?void 0:B.xdefiId)}),[B,o.dapps]),T=(0,p.useCallback)((e=>F(void 0,null,(function*(){const t=j[I],n=yield o.signPsbt(k,B.chainId,t.id,{walletPassword:e||w.masterPassword});b.browser.runtime.sendMessage(void 0,{xdefiId:B.xdefiId,raw:{id:B.xdefiId,result:n}}).finally((()=>{window.close()}))}))),[j,I,o,k,w.masterPassword,B.xdefiId]),_=(0,p.useCallback)((e=>{const t="FROM"===e?S.inputs:S.outputs;return Object.keys(t).reduce(((n,a)=>{const i=[];return t[a].value>0&&i.push(M(t[a].value)),t[a].ordinals.forEach((e=>{var t;const n=(null==(t=e.nftData.externalData)?void 0:t.name)||e.contractName||e.id;i.push(n)})),n=C(D({},n),{[`${e}: ${(0,d.fL)(a)}`]:i})}),{})}),[M,S]),E=_("FROM"),W=_("TO"),$=(0,p.useMemo)((()=>{const e=Object.keys(S.inputs).length;return e<=1?a("utxo_popup.creating_tx"):a("utxo_popup.multiple_tx",{participantCount:e})}),[a,S]);return{signInMsg:B,rawPBST:Z,pSBTData:S,handleReject:L,handleApprove:T,getAssetStr:M,signerMessage:$,inputs:S.inputs[P.address],outputs:S.outputs[P.address],txData:{"function type":"PSBT",inputs:E,outputs:W,"data format":(null==k?void 0:k.psbtBase64)?"Base 64":(null==k?void 0:k.psbtHex)?"Hex":"Unknown"},accountData:P}};a()}catch(e){a(e)}}))}}]);