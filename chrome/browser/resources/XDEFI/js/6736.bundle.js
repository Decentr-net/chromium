!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="74cef941-96a4-4ee7-aefc-51325d8dacaf",e._sentryDebugIdIdentifier="sentry-dbid-74cef941-96a4-4ee7-aefc-51325d8dacaf")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[6736],{778286:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893),a(667294);var r=a(308787),n=a(771341),o=(a(230811),a(378241)),s=a(980486),i=a(426307),d=a(158053),l=e([r,o,s,i,d]);[r,o,s,i,d]=l.then?(await l)():l;n._g,n.o,n.xC;t()}catch(e){t(e)}}))},158053:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(785893),n=a(667294),o=a(308787),s=a(646284),i=a(818117),d=a(230811),l=a(992782),c=a(811601),h=a(994396),x=e([o,s,l,c,h]);[o,s,l,c,h]=x.then?(await x)():x;const p=(0,i.ZP)(o.FlexBox).attrs({px:8})`
  transition: background-color 300ms;

  &:hover {
    background-color: ${({theme:{palette:e}})=>e.container.hover};
  }
`,g=({chainId:e,onSelectAddress:t})=>{const{t:a}=(0,d.$G)("app"),{accounts:n,keyword:i,handleChangeKeyword:x,onSortChange:g,accountSortingOptions:m,sortAccountNameStatus:u,sortBalanceStatus:y,inputRef:f}=(0,c.x)(e);return(0,r.jsxs)(o.FlexBox,{pb:24,children:[(0,r.jsxs)(o.FlexBox,{pl:8,pr:12,py:8,gridGap:8,children:[(0,r.jsx)(h.Mj,{value:i,onChange:x,placeholder:a("general.search"),inputRef:f}),(0,r.jsx)(h.Cd,{children:(0,r.jsx)(s.SortingHeader,{options:m,onSortChange:g,sortStatus:[u,y]})})]}),(0,r.jsx)(o.FlexBox,{maxHeight:"300px",children:(0,r.jsx)(h.QZ,{children:n.map((a=>(0,r.jsx)(p,{children:(0,r.jsx)(l.Z,{chainId:e,account:a,onClick:t})},a.id)))})})]})};(0,n.memo)(g);t()}catch(e){t(e)}}))},980486:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(785893),n=a(646284),o=a(522933),s=a(561277),i=a(650511),d=a(308787),l=a(667294),c=a(230811),h=a(818117),x=a(728071),p=a(994396),g=e([n,d,p]);[n,d,p]=g.then?(await g)():g;const m=({address:e,onClick:t})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(y,{onClick:t,children:(0,r.jsx)(s.Z,{"data-testid":"recentyEnteredAddressRow",children:(0,o.fL)(e,32,4)})}),(0,r.jsx)(d.DashLine,{})]}),u=({chainId:e,toAddress:t,onChangeAddress:a,error:o,onSelectAddress:s,recentSentAddresses:h})=>{const{t:g}=(0,c.$G)("app"),u=(0,l.useCallback)((e=>{a(e.target.value)}),[a]),y=(0,l.useRef)(null);return(0,l.useEffect)((()=>{y.current&&y.current.focus()}),[]),(0,x.E)((()=>{y.current&&y.current.focus()})),(0,r.jsxs)(d.FlexBox,{children:[(0,r.jsx)(d.FlexBox,{my:24,mx:8,children:(0,r.jsx)(n.AddressInput,{chainId:e,value:t,onChange:u,tipError:o,label:"TO",placeholder:"Recipient address",dataTestId:"recipientAddressFld",inputRef:y})}),h.length>0&&(0,r.jsx)(d.FlexBox,{ml:16,mb:8,children:(0,r.jsx)(i.Z,{children:g("address_tab.recently_entered_addresses")})}),(0,r.jsx)(d.FlexBox,{maxHeight:o?"240px":"260px",children:(0,r.jsx)(p.QZ,{children:h.map((e=>(0,r.jsx)(m,{address:e,onClick:()=>s({toAddress:e})},e)))})})]})},y=(0,h.ZP)(d.FlexBox).attrs({justifyContent:"center",p:16})`
  cursor: pointer;
  height: 48px;
  transition: background-color 300ms;

  &:hover {
    background-color: ${({theme:{palette:e}})=>e.container.hover};
  }
`;(0,l.memo)(u);t()}catch(e){t(e)}}))},512948:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(785893),n=a(818117),o=a(308787),s=a(876777),i=a(561277),d=a(665710),l=a(650511),c=a(667294),h=a(522933),x=e([o]);o=(x.then?(await x)():x)[0];const p=n.ZP.div`
  cursor: pointer;

  :hover {
    background: ${s.wL.nightOcean};
  }

  &:not(:last-of-type) > * {
    border-bottom: 1px dashed ${s.wL.cynicalBlack};
  }
`,g=(0,n.ZP)(o.FlexBox).attrs({flexDirection:"row",alignItems:"center",gridGap:8})`
  height: 56px;
  padding: 0 16px;
`,m=n.ZP.div``,u=n.ZP.div`
  flex: 1;
  overflow: hidden;
`,y=n.ZP.div`
  width: 110px;
  text-align: right;
`,f=(0,n.ZP)(o.FlexBox).attrs({flexDirection:"row",alignItems:"center"})`
  white-space: nowrap;
`,w=({item:e,onClick:t})=>(0,r.jsx)(p,{onClick:()=>t(e),"data-testid":"contactRow",children:(0,r.jsxs)(g,{children:[(0,r.jsx)(m,{children:(0,r.jsx)(o.Avatar,{text:e.name,image:e.profileImage,size:"md",dataTestId:"contactImage"})}),(0,r.jsxs)(u,{children:[(0,r.jsx)(i.Z,{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",dataTestId:"contactName",children:e.name}),(0,r.jsxs)(f,{children:[(0,r.jsx)(l.Z,{textOverflow:"ellipsis",overflow:"hidden",dataTestId:"addressLabel",children:e.addressItem.label}),(0,r.jsx)(o.FlexBox,{flex:1,"data-testid":"address","data-chain":e.addressItem.chainId,children:(0,r.jsx)(l.Z,{children:`: ${(0,h.fL)(e.addressItem.address,5,6)}`})})]})]}),(0,r.jsx)(y,{children:(0,r.jsx)(l.Z,{dataTestId:"updatedAt",children:(0,d.Z)(e.updatedAt,"yyyy/MM/dd HH:mm")})})]})});(0,c.memo)(w);t()}catch(e){t(e)}}))},796441:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893);var r=a(308787),n=a(646284),o=(a(667294),a(246858),a(169937),a(876777)),s=a(818117),i=a(130201),d=(a(230811),a(723140)),l=e([r,n,i,d]);[r,n,i,d]=l.then?(await l)():l;s.ZP.div`
  padding-bottom: 8px;
  border-bottom: 1px solid ${o.wL.black};
`;t()}catch(e){t(e)}}))},479611:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893);var r=a(471955),n=a(41947),o=(a(667294),a(50533),a(691438),a(281672)),s=a(568847),i=e([r,n,o,s]);[r,n,o,s]=i.then?(await i)():i;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;t()}catch(e){t(e)}}))},24261:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(785893),n=a(308787),o=a(667294),s=a(58987),i=a(864195),d=a(281672),l=a(972819),c=a(230811),h=e([n,s,d,l]);[n,s,d,l]=h.then?(await h)():h;const x=({onClose:e,defaultValues:t})=>{const{t:a}=(0,c.$G)("app"),{addNotification:h}=(0,l.Z)(),x=(0,d.i_)(),p=(0,o.useCallback)((t=>{return r=void 0,n=null,o=function*(){const r=yield(0,i.l)(t);x.createContact(r),h({title:a("alert.general.contact.added.title"),message:a("alert.general.contact.added.message",{name:r.name})}),e()},new Promise(((e,t)=>{var a=e=>{try{i(o.next(e))}catch(e){t(e)}},s=e=>{try{i(o.throw(e))}catch(e){t(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,s);i((o=o.apply(r,n)).next())}));var r,n,o}),[x,h,a,e]);return(0,r.jsx)(n.Dialog,{title:a("general.add_new_contact"),open:!0,onClose:e,showFooter:!1,dataTestId:"addNewContactPopup",noPaddingInBody:!0,highOpacityBackground:!1,children:(0,r.jsx)(s.t,{defaultValues:t,onSubmit:p,onClose:e,type:"create"})})};(0,o.memo)(x);t()}catch(e){t(e)}}))},623188:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893),a(230811),a(771341);var r=a(308787),n=(a(814302),a(995928),e([r]));r=(n.then?(await n)():n)[0];t()}catch(e){t(e)}}))},983144:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893),a(771341);var r=a(308787),n=(a(814302),a(346539),a(230811),e([r]));r=(n.then?(await n)():n)[0];t()}catch(e){t(e)}}))},106964:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Z:()=>m});var n=a(785893),o=a(667294),s=a(308787),i=a(818117),d=a(650511),l=a(230811),c=e([s]);s=(c.then?(await c)():c)[0];const h=({functionType:e,dashedLine:t=!1})=>{const{t:a}=(0,l.$G)("app");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(p,{shorter:t,children:[(0,n.jsx)(d.Z,{children:a("function_type.transaction_type")}),(0,n.jsx)(x,{children:(0,n.jsx)(d.Z,{children:e})})]}),t&&(0,n.jsx)(g,{children:(0,n.jsx)(s.DashLine,{})})]})},x=i.ZP.div`
  text-align: right;
`,p=(0,i.ZP)(s.FlexBox).attrs({flexDirection:"row",justifyContent:"space-between",alignItems:"center"})`
  padding: 0 20px;
  height: 50px;

  ${({shorter:e})=>e&&i.iv`
      height: 49px;
    `}
`,g=i.ZP.div`
  margin: 0 10px;
`,m=(0,o.memo)(h);r()}catch(e){r(e)}}))},545455:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(785893),n=a(667294),o=a(694441),s=a(847384),i=a(308787),d=a(303108),l=e([o,s,i,d]);[o,s,i,d]=l.then?(await l)():l;const c=({currentAsset:e,getBalance:t,disabled:a,onChangeAmount:n,amount:l,amountError:c,onMaxClicked:h,contactName:x,chainId:p,toAddress:g,accountId:m,detrimentalUTXORemove:u})=>(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d.W,{children:(0,r.jsx)(o.Z,{contactName:x,accountId:m,chainId:p,currentAsset:e,toAddress:g})}),(null==e?void 0:e.collectible)?(0,r.jsx)(i.FlexBox,{height:"100px",py:"8px"}):(0,r.jsx)(s.Z,{detrimentalUTXORemove:u,currentAsset:e,getBalance:t,disabled:a,onChangeAmount:n,amount:l,amountError:c,onMaxClicked:h,chainId:p})]});(0,n.memo)(c);t()}catch(e){t(e)}}))},817795:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Z:()=>u});var n=a(785893),o=a(667294),s=a(308787),i=a(818117),d=a(300286),l=a(230811),c=a(556071),h=e([s,c]);[s,c]=h.then?(await h)():h;const x=({memo:e,setMemo:t,dashedLine:a=!1,errors:r,disabled:o})=>{const{t:i}=(0,l.$G)("app");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(p,{shorter:a,children:(0,n.jsx)(c.n,{type:"text",label:i("general.memo"),value:e,onChange:e=>t&&t(e.target.value),disabled:o})}),r.memo&&(0,n.jsx)(g,{children:(0,n.jsx)(d.Z,{children:r.memo})}),a&&(0,n.jsx)(m,{children:(0,n.jsx)(s.DashLine,{})})]})},p=i.ZP.div`
  padding-top: 10px;
  width: 100%;

  ${({shorter:e})=>e&&i.iv`
      height: 49px;
    `}
`,g=i.ZP.div`
  display: block;
  align-self: flex-start;
  margin-top: -20px;
  margin-bottom: 20px;
`,m=i.ZP.div`
  margin: 0 10px;
`,u=(0,o.memo)(x);r()}catch(e){r(e)}}))},845565:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893),a(667294);var r=a(308787),n=(a(218006),a(646284)),o=(a(59854),a(252746),a(230811),a(650511),a(421753),a(561277),a(412252),a(814401),a(729154),a(834392),a(257525),a(769364)),s=e([r,n,o]);[r,n,o]=s.then?(await s)():s;t()}catch(e){t(e)}}))},900009:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893),a(667294);var r=a(308787),n=(a(771341),a(889159),a(458038),a(561277),a(230811),a(857109)),o=a(848799),s=e([r,n,o]);[r,n,o]=s.then?(await s)():s;t()}catch(e){t(e)}}))},186736:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.r(t),a.d(t,{default:()=>F});var n=a(785893),o=a(646284),s=a(691438),i=a(835534),d=a(847001),l=a(831352),c=a(324104),h=a(202593),x=a(739989),p=a(281672),g=a(667294),m=a(230811),u=a(50533),y=a(972819),f=a(25022),w=a(162318),v=a(184698),b=a(284755),j=a(308787),Z=a(519416),P=a(851892),I=a(91058),C=a(901176),B=a(24296),k=a(123226),S=e([o,i,p,y,w,v,b,j,I,C,B]);[o,i,p,y,w,v,b,j,I,C,B]=S.then?(await S)():S;const F=({transactionMsg:e})=>{var t;const{onRequestPermission:a}=(0,v.gI)(),[r,S]=(0,g.useState)(!1),{t:F}=(0,m.$G)("app"),{addNotification:$}=(0,y.Z)(),_=(0,p.UW)(),O=(0,p.fU)(),A=(0,p.nl)(),T=(0,p.Ni)(),{requireTxPassword:D,activeWallet:L}=(0,u.v9)((e=>({requireTxPassword:e.settings.requireTxPassword,activeWallet:e.wallets.wallets[e.wallets.activeWalletId]}))),M=(0,g.useMemo)((()=>O.getChainControllerById(e.chainId)),[e]),E=(0,g.useMemo)((()=>e.raw.params.length?e.raw.params[0]:e.raw.params),[e]),R=(0,g.useMemo)((()=>{var t;return(null==(t=e.origin)?void 0:t.url)||""}),[null==(t=e.origin)?void 0:t.url]),W=(0,g.useMemo)((()=>{var e,t;if(!(null==E?void 0:E.amount))return"0";if((null==E?void 0:E.amount)||(null==E?void 0:E.value)||"0"){if((0,l.ym)(E.amount))return c.formatUnits(null==(e=null==E?void 0:E.amount)?void 0:e.amount,null==(t=null==E?void 0:E.amount)?void 0:t.decimals).toString()}return c.formatUnits(h.O$.from(null==E?void 0:E.amount).toString()).toString()}),[E.amount,E.value]),{fee:G,feeSymbol:N}=(0,C.g)({chain:M,params:E}),U=(0,B.z)({chain:M,params:E}),z=(0,g.useCallback)((t=>{return r=void 0,n=null,o=function*(){if(x.Z.debug({method:"handleApprove"}),x.Z.debug({msg:"preMP",requireTxPassword:D}),D&&!t)return;const r=t||T.masterPassword;if(r){S(!0);try{const t=i.Z.getWalletIdWithMessage(e);yield _.approveDappsTransaction(e,t,f.GG.Transaction,{walletPassword:r},{}),A.removeMessageById(e.xdefiId),window.close()}catch(t){if("TransportOpenUserCancelled"===(null==t?void 0:t.name))return $({title:F("dapp_transaction.errors.hardware_error"),type:"error",message:F("dapp_transaction.errors.hardware_error_description")}),a();if(null==t?void 0:t.message.includes("Invalid password"))return $({title:F("dapp_transaction.errors.invalid_password"),type:"error",message:F("dapp_transaction.errors.invalid_password_try_again")});const r=(0,P.sJ)(t);x.Z.error("Transfer error",{error:r}),$({title:F("dapp_transaction.errors.transfer_error"),type:"error",message:F((0,P.ZP)(r,s.J.Terra))}),x.Z.error({transactionMsg:"Error in message approval",e:t}),Z.browser.runtime.sendMessage(void 0,{xdefiId:e.xdefiId,raw:{id:e.xdefiId,error:JSON.stringify(t)}})}finally{S(!1)}x.Z.info("end handleApprove")}},new Promise(((e,t)=>{var a=e=>{try{i(o.next(e))}catch(e){t(e)}},s=e=>{try{i(o.throw(e))}catch(e){t(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,s);i((o=o.apply(r,n)).next())}));var r,n,o}),[L,_,A,T.masterPassword,a,D,e,F]),q=(0,g.useCallback)((()=>{x.Z.info("handleReject ",e),Z.browser.runtime.sendMessage(null,{xdefiId:e.xdefiId,raw:{id:e.xdefiId,error:F("dapp_transaction.errors.reject_message")}}),A.removeMessageById(e.xdefiId),window.close()}),[A,e,F]),{openDialog:H,onCloseDialog:J,handleConfirm:V}=(0,o.useConfirmDialog)(z);return(0,n.jsx)(k.k,{body:(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(j.ScrollBars,{autoHide:!0,children:(0,n.jsxs)(j.FlexBox,{height:"100%",children:[(0,n.jsx)(o.ConfirmDialog,{open:H,onClose:J,onSubmit:V}),(0,n.jsx)(w.Z,{url:R,action:"approve",fee:Number(G),displayAmount:W,from:E.from,to:E.to,assetSymbol:U,defaultIcon:M.getConfig().image,isTokenTransfer:!1,chainId:M.getId(),hasHeader:!1,hideBack:!0}),(0,n.jsx)(I.Z,{params:E,method:e.raw.method}),(0,n.jsx)(b.Z,{handleConfirm:()=>V(),fee:Number(G),feeSymbol:N||U,chainId:M.getId(),assetSymbol:U,errors:{},handleReject:q,loading:r,selectedWallet:L}),d.Z.get("ISDEBUG")&&!1]})})})})};r()}catch(e){r(e)}}))},284755:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Z:()=>P});var n=a(785893),o=a(244431),s=a.n(o),i=a(379372),d=a(281672),l=a(300286),c=a(667294),h=a(230811),x=a(996974),p=a(427504),g=a(308787),m=a(952480),u=a(729154),y=a(412252),f=a(556138),w=a(505403),v=a(691438),b=a(565420),j=e([i,d,g,w,b]);[i,d,g,w,b]=j.then?(await j)():j;const Z=({chainId:e,handleConfirm:t,fee:a,feeSymbol:r,errors:o,handleReject:j,selectedWallet:Z,loading:P,baseFee:I=0,maxPriorityFeePerGas:C=0,gasLimit:B=21e3})=>{const k=(0,d.fU)().getChainControllerById(e),S=(0,x.s0)(),{getFiat:F,getFiatStr:$}=(0,w.Z)(),_=k.getConfig().tokenSymbol,{t:O}=(0,h.$G)("app"),A=(0,c.useMemo)((()=>(I+C)*B/i.uR),[I,B,C]),T=(0,c.useCallback)((()=>$(e,A,k.getConfig().tokenSymbol)),[$,e,A]),D=(0,c.useCallback)((()=>(0,p.zr)(new(s())(A),_)),[A,_]),L=(0,c.useMemo)((()=>k.support(v.B.Eip1559)?T():F(e,a,r||_).toString()),[k,T,F,e,a,r,_]),M=(0,c.useMemo)((()=>k.support(v.B.Eip1559)?D():(0,p.zr)(new(s())(a),r||_)),[D,k,_,a,r]),[E,R]=(0,c.useState)(!1);return(0,n.jsxs)(b.e$,{noShadow:!0,"data-testid":"screenFooter",children:[(0,n.jsx)(b.qP,{}),(0,n.jsxs)(b.X2,{$error:!!o.fee,children:[(0,n.jsx)(b.hB,{children:o.fee?(0,n.jsx)(m.Z,{children:O("send_footer.network_fee")}):(0,n.jsx)(y.Z,{children:O("send_footer.network_fee")})}),(0,n.jsx)(b.$d,{children:(0,n.jsx)(g.FiatAssetPair,{alignItems:"flex-end",justifyContent:"center",minWidth:0,fiat:L,asset:M})})]}),(0,n.jsx)(b.CV,{$animateIn:!!(null==o?void 0:o.fee),children:(0,n.jsx)(l.Z,{children:null==o?void 0:o.fee})}),(0,n.jsx)("div",{children:(0,n.jsxs)(b.VY,{children:[(0,n.jsx)(g.SecondaryButton,{dataTestId:"rejectBtn",fullWidth:!0,onClick:()=>{j?j():S(-1)},disabled:P,children:(0,n.jsx)(u.Z,{children:O("general.reject")})}),(0,n.jsx)(g.PrimaryButton,{fullWidth:!0,dataTestId:"confirmBtn",onClick:()=>{R(!0),t(!0)},loading:P,children:(0,n.jsx)(u.Z,{children:O("general.confirm")})})]})}),P&&E&&(null==Z?void 0:Z.walletInfo.type)===f.WalletType.Ledger&&(0,n.jsx)(g.FlexBox,{height:35,mt:-10,children:(0,n.jsx)(g.ConfirmLedger,{show:P,wallet:Z})})]})},P=(0,c.memo)(Z);r()}catch(e){r(e)}}))},91058:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Z:()=>y});var n=a(785893),o=a(831352),s=a(667294),i=a(206508),d=a(308787),l=a(561277),c=a(876777),h=a(818117),Buffer=a(348764).Buffer,x=e([i,d]);[i,d]=x.then?(await x)():x;const p=h.ZP.div`
  width: 100%;
  border-top: 1px solid ${c.wL.black};
  padding-bottom: 20px;
  border-bottom: 1px solid ${c.wL.black};
`,g=(0,h.ZP)(d.FlexBox)`
  width: 100%;
  height: 162px;
  overflow: overlay;
`,m=(0,h.ZP)(d.FlexBox).attrs({alignItems:"center",flexDirection:"row",justifyContent:"space-between"})`
  padding: 0px 10px;
  box-sizing: border-box;
`,u=(0,h.ZP)(d.FlexBox).attrs({alignItems:"flex-start"})`
  box-sizing: border-box;
  padding: 20px 10px;
  line-break: anywhere;
`,y=({params:e,method:t})=>{const a=(0,s.useMemo)((()=>o.e5.SignBytes&&e.bytes?[Buffer.from(Object.values(e.bytes)).toString("hex")]:e.msgs?e.msgs:[]),[e,t]);return(0,n.jsxs)(p,{children:[(0,n.jsx)(i.xZ,{dashedLine:!0,functionType:t}),(0,n.jsx)(m,{children:(0,n.jsx)(g,{children:a.map(((e,t)=>(0,n.jsx)(u,{children:(0,n.jsx)(l.Z,{children:e})},t)))})}),e.memo&&(0,n.jsx)(i.ot,{errors:{},memo:e.memo,disabled:!0})]})};r()}catch(e){r(e)}}))},723140:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(512948),n=e([r]);r=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},568847:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(796441),n=e([r]);r=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},426307:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(479611),n=e([r]);r=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},378241:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(281672),n=(a(667294),a(50533),a(230811),e([r]));r=(n.then?(await n)():n)[0];t()}catch(e){t(e)}}))},857109:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(778286),n=e([r]);r=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},471955:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(24261),n=e([r]);r=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},41947:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(623188),n=e([r]);r=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},130201:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(983144),n=e([r]);r=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},769364:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(818117),n=a(308787),o=a(834166),s=e([n]);n=(s.then?(await s)():s)[0];(0,r.ZP)(n.FlexBox).attrs({mt:4,flexDirection:"row",alignItems:"center",p:2})`
  background-color: ${({theme:e})=>e.colors.black};
  ${({theme:{palette:e}})=>(0,o.m4)(e.base.contrary,.2)};
  border-radius: 8px;
  ${e=>e.disabled&&"pointer-events: none;"}
`,(0,r.ZP)(n.BaseButton)`
  border-radius: 8px;
  padding: 0;
  height: 32px;
  background-color: transparent;
  background: ${e=>e.active?e.theme.colors.darkSteel:"transparent"};

  &:hover {
    box-shadow: none;
  }
`,r.ZP.div`
  margin: 0 10px;
`,r.ZP.div`
  text-align: right;
  margin: 2.5px 0 2px 0;
  mix-blend-mode: normal;
`,(0,r.ZP)(n.FlexBox).attrs({justifyContent:"space-around"})`
  ${({shorter:e})=>e&&r.iv`
      height: 74px;
    `}
`,(0,r.ZP)(n.FlexBox).attrs({flexDirection:"row",justifyContent:"space-between",alignItems:"center"})`
  width: 100%;
`,r.ZP.div`
  width: 100%;
  height: 32px;
`,(0,r.ZP)(n.FlexBox)`
  ${({textAlign:e})=>e&&r.iv`
      text-align: ${e};
    `}
`;t()}catch(e){t(e)}}))},848799:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(818117),n=a(308787),o=a(557109),s=a(876777),i=e([n,o]);[n,o]=i.then?(await i)():i;(0,r.ZP)(n.Card).attrs({round:!0})`
  z-index: 2;
  padding: 8px 8px 8px 16px;
  height: 60px;
  width: 376px;
`,r.ZP.div`
  position: relative;

  &:after {
    content: '${e=>e.descritpiton}';
    position: absolute;
    display: none;
    align-items: center;
    width: 0;
    height: 0;
    right: 0px;
    top: 35px;
    background: ${s.wL.nightOcean};

    z-index: 3;

    box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15),
      0px 4px 4px rgba(0, 0, 0, 0.3);
    border-radius: 8px;
    color: ${s.wL.white};

    white-space: nowrap;
    padding: 2px 8px;
  }
  transition: background-color 300ms;
  &:hover {
    &:after {
      display: flex;
      width: fit-content;
      height: 20px;
    }
  }
`,(0,r.ZP)(n.FlexBox).attrs({allignItems:"center"})`
  position: absolute;
  right: 0px;
  top: 40px;
  background: ${s.wL.nightOcean};
  width: fit-content;
  height: 20px;
  z-index: 3;

  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15),
    0px 4px 4px rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  color: ${s.wL.white};

  white-space: nowrap;
  padding: 2px 8px;
`,(0,r.ZP)(n.FlexBox).attrs({justifyContent:"center",alignItems:"center"})`
  border-radius: 8px;
  height: 32px;
  width: 32px;
  padding: 10px;
  box-shadow: none;
  transition: background-color 300ms;
  &:hover div button {
    background-color: ${s.wL.nightOcean};
    box-shadow: none;
  }
`,r.ZP.div`
  position: ${e=>e.hasAddress?"absolute":"static"};
  top: ${e=>e.hasAddress?"-2px":"0"};

  letter-spacing: 0.25px;
  color: ${s.wL.darkGrey};
`,(0,r.ZP)(o.B)`
  display: flex;
  height: 100%;
  width: 304px;
  margin-right: auto;

  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`,(0,r.ZP)(n.FlexBox).attrs({justifyContent:"end"})`
  width: 230px;
  height: 32px;
  margin-left: auto;
`;t()}catch(e){t(e)}}))},257525:(e,t,a)=>{var r=a(698858);r.aK.Average,r.aK.Fast,r.aK.Fastest},206508:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{ot:()=>o.Z,xZ:()=>c.Z});var n=a(545455),o=a(817795),s=a(726546),i=a(639923),d=a(845565),l=a(293709),c=a(106964),h=a(900009),x=e([n,o,s,i,d,l,c,h]);[n,o,s,i,d,l,c,h]=x.then?(await x)():x,r()}catch(e){r(e)}}))},708943:(e,t,a)=>{},184698:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{gI:()=>o.g});var n=a(989424),o=(a(733246),a(114829)),s=e([n]);n=(s.then?(await s)():s)[0],r()}catch(e){r(e)}}))},989424:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(522933);var r=a(281672),n=(a(667294),a(230811),a(50533),a(693246),a(972819)),o=(a(977710),a(691438),a(721892),a(473821),a(739989),a(427504),a(626423),a(605930),a(142020),e([r,n]));[r,n]=o.then?(await o)():o;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;t()}catch(e){t(e)}}))},114829:(e,t,a)=>{a.d(t,{g:()=>s});var r=a(667294),n=a(721892),o=a(556138);const s=e=>{const[t,a]=(0,r.useState)(!1),[s,i]=(0,r.useState)(!1);return{loading:t,hasPermission:s,onRequestPermission:()=>{return t=void 0,r=null,s=function*(){if(e===o.WalletType.Ledger){let e=yield(new n.Z).hasPermission();e?i(e):(a(!0),e=yield(new n.Z).requestPermission(),i(e),e&&window.location.reload(),a(!1))}else i(!0)},new Promise(((e,a)=>{var n=e=>{try{i(s.next(e))}catch(e){a(e)}},o=e=>{try{i(s.throw(e))}catch(e){a(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,o);i((s=s.apply(t,r)).next())}));var t,r,s}}}},733246:(e,t,a)=>{a(667294),a(458233),a(708943)},123226:(e,t,a)=>{a.d(t,{k:()=>s});var r=a(785893),n=a(818117);const o={Wrapper:n.ZP.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${({theme:{palette:e}})=>e.container.section};
`,Header:n.ZP.div`
  margin: 0;
`,Body:n.ZP.div`
  height: 100%;
  padding: 10px;
`,Actions:n.ZP.div`
  padding: 10px;
`},s=({header:e,body:t,actions:a})=>(0,r.jsxs)(o.Wrapper,{children:[e&&(0,r.jsx)(o.Header,{children:e}),t&&(0,r.jsx)(o.Body,{children:t}),a&&(0,r.jsx)(o.Actions,{children:a})]})},565420:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{$d:()=>x,CV:()=>g,VY:()=>p,X2:()=>l,e$:()=>d,hB:()=>h,qP:()=>c});var n=a(308787),o=a(876777),s=a(818117),i=e([n]);n=(i.then?(await i)():i)[0];const d=(0,s.ZP)(n.Card)`
  margin: 5px 0;
  box-shadow: none;
  justify-content: flex-end;
  height: 100%;

  :first-child {
    margin-top: 0;
  }
  :last-child {
    margin-bottom: 0;
  }
`,l=(0,s.ZP)(n.FlexBox).attrs({justifyContent:"space-between",alignItems:"flex-start",flexDirection:"row"})`
  height: 50px;
  margin: 0 10px;
  padding: 0 10px;
  ${({$error:e})=>e&&"padding-bottom: 10px;"}
`,c=s.ZP.div`
  border-top: 1px solid ${o.wL.black};
  margin-bottom: 10px;
`,h=(0,s.ZP)(n.FlexBox).attrs({alignSelf:"flex-start",flexDirection:"row",alignItems:"center"})``,x=(0,s.ZP)(n.FlexBox)`
  text-align: right;
`,p=(0,s.ZP)(n.FlexBox).attrs({justifyContent:"space-between",alignItems:"center",flexDirection:"row",gridGap:10})``,g=s.ZP.div.attrs({"data-testid":"validationErr"})`
  position: absolute;
  bottom: -16px;
  opacity: 0;
  transition-property: margin-top, margin-bottom, opacity;
  transition-duration: 300ms;
  ${({$animateIn:e})=>e&&"opacity: 1;"}
`;r()}catch(e){r(e)}}))},24296:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{z:()=>c});var n=a(739989),o=a(667294),s=a(691438),i=a(626423),d=a(281672),l=e([d]);d=(l.then?(await l)():l)[0];const c=({chain:e,params:t})=>{const a=(0,d.UW)();return(0,o.useMemo)((()=>{var a,r,o;try{switch(e.getType()){case s.J.Binance:return null==(a=null==t?void 0:t.asset)?void 0:a.symbol;case s.J.Terra:{const a=e.selfCast(),{msgs:r}=a.selfCast().parseCreateTxOptions(t);return a.getSymbolFromMsg(r[0])}case s.J.Thorchain:return null!=(o=(null==(r=null==t?void 0:t.asset)?void 0:r.symbol)&&(0,i.Sy)(String(t.asset.symbol)))?o:e.getConfig().tokenSymbol;default:return e.getConfig().tokenSymbol}}catch(t){return n.Z.warn(" Error retrieving symbol, using chain symbol instead"),e.getConfig().tokenSymbol}}),[e,a.chains,t])};r()}catch(e){r(e)}}))},458233:(e,t,a)=>{a.d(t,{I:()=>n});var r=a(667294);const n=e=>{const t=(0,r.useRef)(e);return t.current!==e&&(t.current=e),t}},169937:(e,t,a)=>{var r=a(246858);a(875472),a(496486);r.n.Up,r.n.Down}}]);