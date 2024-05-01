!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="a0c4bb60-b4ff-4ed5-beca-0c99cb232edf",e._sentryDebugIdIdentifier="sentry-dbid-a0c4bb60-b4ff-4ed5-beca-0c99cb232edf")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[6773],{641124:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>D});var n=r(785893),o=r(667294),i=r(771341),s=r(308787),l=r(556138),c=r(876777),d=r(218006),p=r(729154),x=r(108363),h=r(586686),f=r(230811),g=r(348849),u=r(598331),m=r(918988),b=r(316708),w=r(319685),j=r(50727),y=r(104183),v=r(113863),C=r(55108),P=r(338231),F=r(627172),k=r(313226),_=r(31665),Z=r(447782),O=r(596199),S=e([s,h,g,u,m,b,w,j,y,v,C,P,k,_,Z,O]);[s,h,g,u,m,b,w,j,y,v,C,P,k,_,Z,O]=S.then?(await S)():S;const B=[{label:"account_select.hot_wallets",dataTestId:"hotWallets"},{label:"account_select.hardware_wallets",dataTestId:"hardwareWallets"}],I=[l.WalletType.Keystore,l.WalletType.PkKeystore],G=({handleSelect:e,handleRowClick:t,isClosing:r})=>{var a;const{handleBackup:l,handleCloseGenericDialog:S,toggleManageAccount:G,handleSubmitDialogAction:D,handleCloseShowDappConnectionModal:$,seed:T,tabValue:A,setTabValue:L,handleAccountOption:V,manageAccount:H,walletList:M,activeDialog:W,showDappConnectionModal:E,dappConnectModalWalletId:z,errors:N,register:R,handleSubmit:U,submitHandler:K,toggledWalletId:Y,handleToggle:X,walletNames:J,navigateToOnboarding:q,hasAccounts:Q,toggleSearchActive:ee,handleViewSeedPhrase:te,handleDeleteWallet:re,moreThanOneHWWallet:ae,handlePFPChange:ne,hasImageNft:oe,walletsManager:ie,activeNewAccountRoot:se,handleNewAccountClose:le,handleNewAccountClick:ce,handleNewAccountSubmit:de,selectedRootWalletID:pe,deleteWalletDialogTitle:xe,deleteWalletTitle:he,deleteWalletWarning:fe}=(0,k.Z)(),{t:ge}=(0,f.$G)("app"),ue=(0,o.useRef)(null);return(0,o.useEffect)((()=>{ue.current&&ue.current.resetScroll()}),[A]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.TopSheet,{isClosing:r,children:[(!Q||!H)&&(0,n.jsx)(s.FlexBox,{margin:"16px 8px 0",children:(0,n.jsx)(s.SegmentedPicker,{activeTab:A,onChangeTab:L,tabsData:B})}),Q?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.FlexBox,{flexDirection:"row",justifyContent:"space-between",children:H?(0,n.jsx)(s.FlexBox,{mx:8,mt:16,width:380,flexDirection:"column",alignItems:"flex-start",children:(0,n.jsxs)(s.FlexBox,{width:"100%",flexDirection:"row",alignItems:"center",children:[(0,n.jsx)(C.Z,{tabValue:A}),(0,n.jsx)(s.FlexBox,{flexDirection:"row",children:(0,n.jsxs)(P.o,{gridGap:8,children:[0===A&&M.length>1&&F.bF.map((({Icon:e,title:t,actionType:r})=>(0,n.jsx)(s.HoverButton,{dataTestId:`${(0,d.lk)(t)}Btn`,onClick:V(r),Icon:(0,n.jsx)(e,{}),label:`${ge(t)}`,disabled:r===F._O.NftChangePfp&&!oe},r))),1===A&&!ae&&F.rm.map((({Icon:e,title:t,actionType:r})=>(0,n.jsx)(s.HoverButton,{dataTestId:`${(0,d.lk)(t)}Btn`,onClick:V(r),Icon:(0,n.jsx)(e,{}),label:`${ge(t)}`},r))),(0,n.jsx)(s.PrimaryButton,{type:"submit",form:"account-form",children:ge("general.done")})]})})]})}):(0,n.jsx)(s.FlexBox,{width:380,height:40,mx:8,mt:16,mb:8,flexDirection:"column",alignItems:"flex-start","data-testid":"walletsToolbar",children:(0,n.jsx)(s.FlexBox,{width:"100%",flexDirection:"row",alignItems:"center",children:(0,n.jsx)(v.Q,{searchValue:ie.walletSearch,handleSearchChange:ie.handleWalletSearchChange,toggleSearchCallback:ee,hideHoverButton:!1,children:(0,n.jsxs)(s.FlexBox,{width:"100%",flexDirection:"row",justifyContent:"space-between",alignItems:"center",children:[(0,n.jsx)(C.Z,{tabValue:A}),(0,n.jsxs)(s.FlexBox,{flexDirection:"row",justifyContent:"space-between",gridGap:8,alignItems:"center",children:[(0,n.jsx)(s.SecondaryButton,{onClick:G,px:8,dataTestId:"manageBtn",children:(0,n.jsxs)(s.FlexBox,{flexDirection:"row",gridGap:4,alignItems:"center",children:[(0,n.jsx)(i.o,{width:14,height:10}),(0,n.jsx)(p.Z,{children:ge("account_select.manage_label")})]})}),0===A&&(0,n.jsx)(s.HoverButton,{onClick:V(F._O.ImportWallet),Icon:(0,n.jsx)(i._8,{}),label:ge("import_wallet.import_wallet")}),1===A&&(0,n.jsx)(s.HoverButton,{dataTestId:"Connect wallet Btn",onClick:V(F._O.ConnectWallet),Icon:(0,n.jsx)(i.E4,{}),label:ge("account_select.connect_wallet")})]})]})})})})}),H&&1===ie.walletNodesByVariant.length&&0===A&&(0,n.jsx)(P.o,{ml:8,gridGap:8,children:F.nC.map((({Icon:e,title:t,actionType:r})=>(0,n.jsx)(s.HoverButton,{dataTestId:`${(0,d.lk)(t)}Btn`,onClick:V(r),Icon:(0,n.jsx)(e,{}),label:`${ge(t)}`,disabled:r===F._O.NftChangePfp&&!oe},r)))}),(0,n.jsx)(s.FlexBox,{"data-testid":"divider",mx:8,zIndex:O.VB+1,height:"1px",bg:c.wL.black}),(0,n.jsx)(P.J,{ref:ue,children:ie.walletNodesByVariant.length?H?ie.walletNodesByVariant.length>1?(0===A?I.map((e=>ie.walletNodesByType[e])).flat():ie.walletNodesByVariant).map((e=>(0,n.jsx)(m.T,{rootWallet:e,onSubmit:K,handleSubmit:U,register:R,onNewAccountClick:ce,errors:N,onDelete:re,onViewSeedPhrase:te},e.parent.id))):ie.walletNodesByVariant.map((e=>(0,n.jsx)(Z.d,{walletNode:e,errors:N,register:R,handleSubmit:U,onSubmit:K},e.parent.id))):ie.visibleWalletNodes.map((r=>(0,n.jsx)(O.qK,{rootWallet:r,children:(0,n.jsx)(u.L,{walletNode:r,onNonConnectedDappRowClick:t,manageAccount:H,onSelect:e,toggledWalletId:Y,onToggle:X,top:O.be},r.parent.id)},r.parent.id))):(0,n.jsx)(s.FlexBox,{alignItems:"center",justifyContent:"center",p:16,children:(0,n.jsx)(x.Z,{children:ge("account_select.not_found")})})})]}):(0,n.jsx)(_.F,{navigate:q,type:A?"hardware":"hot"})]}),!!se&&(0,n.jsx)(g.c,{rootWallet:se,existedNames:J,onClose:le,onSubmit:de}),W===F._O.NftChangePfp&&(0,n.jsx)(h.z,{onSelect:ne,onClose:S}),W===F._O.BackupAccounts&&(0,n.jsx)(j.Z,{open:!0,onSubmit:l,onClose:S,description:ge("account_select.backup_description"),labelPassword:ge("account_select.label_password")}),W===F._O.DeleteWallet&&(0,n.jsx)(b.QH,{open:!0,onClose:S,onSubmit:D,dialogTitle:xe,warning:fe,title:he}),!!z&&(0,n.jsx)(w.J,{open:E,onClose:$,walletId:z}),W===F._O.SecretPhrase&&(T?(0,n.jsx)(y.g,{seed:T,onClose:S}):(0,n.jsx)(b.QH,{open:!0,onClose:S,onSubmit:D,title:ge("account_select.secret_phrase.confirm_password.title",{value:null==(a=ie.walletsRec[pe])?void 0:a.label}),dialogType:b.KO.Secret}))]})},D=(0,o.memo)(G);a()}catch(e){a(e)}}))},435729:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>g});var n=r(785893),o=r(308787),i=r(878948),s=e([o]);o=(s.then?(await s)():s)[0];var l=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const g=e=>{return(0,n.jsx)(o.Dialog,(t=((e,t)=>{for(var r in t||(t={}))x.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&f(e,r,t[r]);return e})({showFooter:!1,noPaddingInBody:!0,fullHeight:!0,titleVariant:i.D},e),r={children:e.children},c(t,d(r))));var t,r};a()}catch(e){a(e)}}))},878948:(e,t,r)=>{r.d(t,{D:()=>g});var a=r(785893),n=r(814302),o=r(840592),i=r(772794),s=r(431188),l=r(818117),c=r(771341),d=r(79295);const p=(0,l.ZP)(d.h).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between"})`
  background-color: transparent;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  gap: 8px;
  padding: 24px 16px 16px;
`,x=(0,l.ZP)(d.h).attrs({flexDirection:"row",alignItems:"center",justifyContent:"center"})`
  position: absolute;
  left: 0;
  right: 0;
  margin: auto;
  width: 320px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  gap: 8px;
`,h=(0,l.ZP)(c.Tw)`
  cursor: pointer;
`,f=l.ZP.div`
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  flex-shrink: 0;
  width: 32;
  height: 32;
  margin-left: auto;
`,g=({title:e,onClose:t=(()=>null),onBack:r,titleProps:l})=>{const{showCloseIcon:c=!0}=l||{};return(0,a.jsxs)(p,{children:[r&&(0,a.jsx)(o.Z,{onClick:r}),(0,a.jsx)(x,{children:(0,a.jsx)(n.Z,{children:e})}),c&&(0,a.jsx)(f,{children:(0,a.jsx)(i.Z,{onClick:t,variant:s.gZ.Rounded,icon:(0,a.jsx)(h,{}),containedWithinCicle:!0,"data-testid":"closePopupBtn"})})]})}},780555:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>j});var n=r(785893),o=r(878559),i=r(281672),s=r(327754),l=r(561277),c=r(458038),d=r(230811),p=r(50533),x=r(739989),h=r(771341),f=r(308787),g=r(729154),u=r(876777),m=r(234130),b=r(594390),w=e([i,f,b]);[i,f,b]=w.then?(await w)():w;const j=()=>{var e;const t=(0,i.nl)(),r=(0,i.i_)(),{wallets:a,activeWalletId:w}=(0,p.v9)((e=>e.wallets)),{connected:j,currentTab:y}=(0,p.v9)((e=>e.dapps)),{t:v}=(0,d.$G)("app"),C=null==(e=null==j?void 0:j[null==y?void 0:y.id])?void 0:e.walletIds,P=()=>[a[w]].concat(Object.values(a).filter((e=>C.includes(e.id)&&e.id!==w))),F=()=>C&&C.length?C.includes(w)?(0,n.jsxs)("span",{children:[(0,n.jsx)(b.xv,{children:(0,n.jsx)(c.Z,{children:(0,n.jsx)(d.cC,{t:v,i18nKey:"acc_permission_module.accounts_connected_other",components:m._,count:C.length})})}),(0,n.jsx)(b.gN,{children:(0,n.jsx)(f.DashLine,{})})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(b.xv,{children:(0,n.jsx)(c.Z,{children:v("acc_permission_module.your_current_account_is_not_connected")})}),(0,n.jsx)(b.gN,{children:(0,n.jsx)(f.DashLine,{})})]}):(0,n.jsx)(b.IS,{children:(0,n.jsx)(c.Z,{children:v("acc_permission_module.dapp_description")})}),k=(0,s.F)({[u.$T.Dark]:"lime"}),_=()=>(0,n.jsx)(b.W2,{children:P().map((e=>(0,n.jsxs)("div",{children:[(0,n.jsxs)(b.X2,{children:[(0,n.jsxs)(f.FlexBox,{width:150,children:[(0,n.jsx)(b.$G,{children:(0,n.jsx)(l.Z,{children:e.label})}),e.id!==w&&(0,n.jsx)(b.U3,{onClick:()=>{return a=e.id,r.selectWallet(a),void t.updateActiveAddressesForDApp(a);var a},children:(0,n.jsx)(c.Z,{children:v("acc_permission_module.switch_to_this_account")})})]}),(0,n.jsx)(b.Tw,{children:C.includes(e.id)?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(f.FlexBox,{mr:20,flexDirection:"row",alignItems:"center",children:[(0,n.jsx)(b.Y8,{children:(0,n.jsx)(f.FlexBox,{backgroundColor:k,width:7,height:7})}),(0,n.jsx)(f.FlexBox,{ml:4,children:(0,n.jsx)(c.Z,{children:v("acc_permission_module.connected")})})]}),(0,n.jsx)(h.XH,{width:"12",onClick:()=>(e=>{const a=P();if(e===w){const t=a.find((t=>t.id!==e));t&&r.selectWallet(t.id)}t.removeWalletFromDApp(e)})(e.id)})]}):(0,n.jsx)(f.SecondaryButton,{onClick:()=>(e=>{x.Z.debug({msg:"handleAddAcc",currentTab:y,walletId:e});const r=a[e].selectedChainId;t.addRequstedDApp(y.id,r,[...C,e],y.favicon,y.title),t.updateActiveAddressesForDApp(e)})(e.id),children:(0,n.jsx)(g.Z,{children:v("general.connect")})})})]}),(0,n.jsx)(f.DashLine,{})]},e.id)))}),Z=()=>(null==y?void 0:y.domain)?(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"unset"},children:[(0,n.jsx)("img",{src:y.favicon||o.toString(),style:{marginRight:"10px"},alt:"site-logo",crossOrigin:"anonymous",width:"20"}),(0,n.jsx)(l.Z,{children:null==y?void 0:y.domain})]}):(0,n.jsx)(f.FlexBox,{justifyContent:"center",children:(0,n.jsx)(l.Z,{"data-testid":"visitWeb3Msg",children:v("acc_permission_module.title")})});return(0,n.jsx)(b.A9,{title:(0,n.jsx)(Z,{}),children:(null==y?void 0:y.domain)&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(F,{}),C&&!!P().length&&(0,n.jsx)(_,{})]})})};a()}catch(e){a(e)}}))},239605:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{ZP:()=>u});var n=r(785893),o=r(818117),i=r(308787),s=r(814401),l=r(876777),c=e([i]);i=(c.then?(await c)():c)[0];const d=({size:e,children:t,title:r,style:a,dataTestId:o})=>(0,n.jsx)(p,{noContent:!t,$size:e,style:a,"data-testid":o||void 0,children:(0,n.jsxs)(x,{children:[(0,n.jsx)(h,{border:!!t,children:(0,n.jsx)(f,{children:(0,n.jsx)(s.Z,{children:r})})}),t&&(0,n.jsx)(g,{children:t})]})}),p=(0,o.ZP)(i.FlexBox).attrs({flexDirection:"row",alignContent:"start",flexWrap:"wrap"})`
  background: ${({theme:e})=>e.colors.white};
  z-index: 100;
  box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.3);
  border-radius: 7px;
  box-sizing: border-box;
  transition: ${l.uT.A3};
  pointer-events: initial;

  width: 366px;
  transform: translateY(0);
  opacity: 1;
  height: fit-content;
  margin: 10px 5px 0;
  ${({noContent:e})=>e&&o.iv`
      padding-bottom: 0;
    `}
  ${({$size:e})=>"small"===e?o.iv`
          width: 134px;
        `:o.iv`
          width: 380px;
        `}
`,x=o.ZP.div`
  width: 100%;
`,h=(0,o.ZP)(i.FlexBox)`
  height: 40px;
  ${({border:e})=>e&&o.iv`
      height: 40px;
      margin-right: 12px;
      margin-left: 12px;
      border-bottom: 1px solid ${({theme:e})=>e.colors.black};
    `}
`,f=(0,o.ZP)(i.FlexBox).attrs({alignItems:"center",flexDirection:"row",justifyContent:"space-between"})`
  width: 100%;
  margin-left: 4.5px;
`,g=o.ZP.div`
  padding: 0;
`,u=d;a()}catch(e){a(e)}}))},227617:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>j});var n=r(785893),o=r(239605),i=r(281672),s=r(667294),l=r(230811),c=r(50533),d=r(646284),p=r(691438),x=r(771341),h=r(308787),f=r(818117),g=e([o,i,d,h]);[o,i,d,h]=g.then?(await g)():g;const u=()=>{const e=(0,i.Iq)(),t=(0,c.v9)((e=>e.dappsProviders)),{settings:r}=t,{t:a}=(0,l.$G)("app"),f=(0,s.useCallback)((t=>{e.setWindowEthereumChain(t)}),[e,t]),g=(0,i.fU)().getChainControllersByType(p.J.Evm).map((e=>e.getId()));return(0,n.jsx)(o.ZP,{style:{zIndex:101,flex:1,minHeight:90,margin:"0 10px 0 0"},title:(0,n.jsxs)(m,{children:[(0,n.jsx)(b,{children:a("injected_module.network_label")}),(0,n.jsx)(w,{arrow:!0,title:(0,n.jsx)("span",{"data-testid":"networkTooltip",children:a("injected_module.tooltip")}),fitContent:!0,placement:"bottom",children:(0,n.jsx)(x.sz,{width:13,height:13,"data-testid":"networkTooltipIcon"})})]}),dataTestId:"networkComponent",children:(0,n.jsx)(h.FlexBox,{pl:7,pb:3,minWidth:350,mt:12,children:(0,n.jsx)(d.FullWidthSelectChain,{value:r.ethereumProvider.windowEthereumChain,onSelect:f,includeAll:!1,chains:g})})})},m=f.ZP.div`
  justify-content: flex-start !important;
  margin-left: 0 !important;

  > div > div {
    margin-left: 0 !important;
  }
`,b=f.ZP.div`
  width: unset !important;
  margin-right: 9px !important;
  margin-left: 0 !important;
`,w=(0,f.ZP)(h.Tooltip)`
  & > div:nth-child(2) {
    left: calc(100% - 110px);
  }

  z-index: 1012;
`,j=u;a()}catch(e){a(e)}}))},147735:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>p});var n=r(785893),o=r(780555),i=r(227617),s=r(308787),l=r(221379),c=r(222340),d=e([o,i,s,c]);[o,i,s,c]=d.then?(await d)():d;const p=({open:e,close:t})=>e?(0,n.jsx)(l.Z,{onClickOutside:t,children:(0,n.jsxs)(c.W,{children:[(0,n.jsx)(c.a,{onClick:t}),(0,n.jsx)(s.FlexBox,{children:(0,n.jsx)(i.Z,{})}),(0,n.jsx)(o.Z,{})]})}):null;a()}catch(e){a(e)}}))},911058:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{J:()=>g});var n=r(785893),o=r(667294),i=r(308787),s=r(50533),l=r(483875),c=r(474906),d=r(256539),p=e([i,l,c,d]);[i,l,c,d]=p.then?(await p)():p;const x=[{label:"dapp_pick_tabs.dapps"},{label:"dapp_pick_tabs.connections"}],h=()=>{const[e,t]=(0,o.useState)(0),[r,a]=(0,o.useState)(null),{connected:p}=(0,s.v9)((e=>e.dapps));return r&&p[r]?(0,n.jsx)(l.D,{dappID:r,dapp:p[r],onClose:()=>a(null)}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.FlexBox,{mt:16,mx:8,children:(0,n.jsx)(i.SegmentedPicker,{activeTab:e,onChangeTab:t,tabsData:x})}),0===e&&(0,n.jsx)(c.l,{}),1===e&&(0,n.jsx)(d.T,{onManageDapp:a})]})},f=({isClosing:e})=>(0,n.jsx)(i.TopSheet,{isClosing:e,children:(0,n.jsx)(h,{})}),g=(0,o.memo)(f);a()}catch(e){a(e)}}))},725634:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>g});var n=r(785893),o=r(230811),i=r(308787),s=r(771341),l=r(849721),c=r(458038),d=r(667294),p=r(299246),x=r(834392),h=r(900296),f=e([i,h]);[i,h]=f.then?(await f)():f;const g=({isClosing:e,isActive:t,balance:r,pendingBalance:a,currencySymbol:f,onDeposit:g,onSwitch:u,disabled:m})=>{const{t:b}=(0,o.$G)("app"),w=b(t?"gastank.active_label":"gastank.inactive_label"),j=(0,d.useMemo)((()=>`${f}${(0,p.pF)(r,x.UX,{trimTrailingZero:!0})}`),[r,f]),y=(0,d.useMemo)((()=>{if(a)return`${f}${(0,p.pF)(a,x.UX,{trimTrailingZero:!0})} ${b("gastank.pending_balance_postfix")}*`}),[f,a,b]);return(0,n.jsx)(i.TopSheet,{isClosing:e,height:"auto",children:(0,n.jsxs)(h.im,{children:[(0,n.jsxs)(h.NN,{children:[(0,n.jsx)(h.__,{children:b("gastank.balance")}),(0,n.jsxs)(h.H6,{children:[(0,n.jsxs)("div",{children:[(0,n.jsx)(h.yo,{children:j}),a?(0,n.jsx)(h.zG,{children:y}):null]}),(0,n.jsx)(h.Ls,{children:(0,n.jsx)(i.PrimaryButton,{fullWidth:!0,onClick:g,disabled:m,children:b("general.deposit")})})]})]}),(0,n.jsx)(h.iz,{}),(0,n.jsxs)(h.Ri,{children:[(0,n.jsxs)(h.jz,{active:t,children:[t?(0,n.jsx)(s.FF,{}):(0,n.jsx)(s.Um,{}),t?(0,n.jsx)(h.Hv,{}):null]}),(0,n.jsxs)(h.yd,{children:[(0,n.jsx)(l.Z,{children:w}),(0,n.jsx)(h.Zm,{children:b("gastank.description")})]}),(0,n.jsx)(h.rs,{checked:t,onChange:e=>u(null!=e&&e)})]}),(0,n.jsxs)(h.Ct,{children:[(0,n.jsx)(h.kI,{}),(0,n.jsx)(c.Z,{children:(0,n.jsx)(o.cC,{t:b,i18nKey:"gastank.beta_badge_description",components:{href:(0,n.jsx)(h.Ll,{target:"_blank",rel:"noreferrer",href:"https://discord.gg/xdefi"})}})})]})]})})};a()}catch(e){a(e)}}))},429290:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>w});var n=r(785893),o=r(345873),i=r(308787),s=r(561277),l=r(876777),c=r(818117),d=r(650511),p=r(771341),x=r(65856),h=r(299246),f=r(834392),g=e([o,i,x]);[o,i,x]=g.then?(await g)():g;const u=(0,c.ZP)(i.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between",p:8,pl:12})`
  position: relative;
  width: 100%;
  cursor: pointer;
  height: ${x.f}px;
  border-bottom: ${({isRow:e})=>e?"1px dotted":"none"};
  border-color: ${l.wL.cynicalBlack};

  &:hover {
    background-color: ${({isRow:e})=>e?l.wL.nightOcean:"unset"};
  }
`,m=(0,c.ZP)(i.FlexBox).attrs({flexDirection:"row"})`
  div {
    background-color: unset;
  }
`,b=(0,c.ZP)(p._Q)`
  width: 28px;
  padding: 0 4px;
`,w=({asset:e,onSelect:t,isRow:r=!0})=>{const{balance:a,fiatBalanceFormatted:l,token:c,chainName:p}=e,{image:x,symbol:g}=c,w=(0,h.pF)(a,f.DF,{trimTrailingZero:!0});return(0,n.jsxs)(u,{isRow:r,onClick:()=>null==t?void 0:t(e),children:[(0,n.jsxs)(m,{children:[(0,n.jsx)(o.q,{chainId:e.chainId,icon:null!=x?x:""}),(0,n.jsxs)(i.FlexBox,{children:[(0,n.jsx)(s.Z,{children:g}),(0,n.jsx)(d.Z,{dataTestId:"chainName",children:p})]})]}),(0,n.jsxs)(i.FlexBox,{alignItems:"flex-end",ml:"auto",mr:16,children:[(0,n.jsx)(s.Z,{dataTestId:"assetBalance",children:w}),(0,n.jsx)(d.Z,{dataTestId:"assetFiatBalance",whiteSpace:"nowrap",children:l})]}),r?(0,n.jsx)(b,{}):null]})};a()}catch(e){a(e)}}))},298243:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>O});var n=r(785893),o=r(458038),i=r(530825),s=r(849721),l=r(308787),c=r(818117),d=r(876777),p=r(53880),x=r(230811),h=r(299246),f=r(834392),g=r(771341),u=e([l]);l=(u.then?(await u)():u)[0];const m=(0,c.ZP)(l.FlexBox)`
  gap: 4px;
  align-self: center;
  align-items: center;
  margin: 24px 0 40px;
`,b=c.ZP.img`
  width: 72px;
  height: 72px;
  flex-shrink: 0;
`,w=(0,c.ZP)(o.Z)`
  color: ${d.wL.darkGrey};
`,j=(0,c.ZP)(i.Z)`
  font-size: 40px;
  font-weight: 600;
  line-height: 120%;
`,y=(0,c.ZP)(l.FlexBox)`
  flex-direction: row;
  gap: 16px;
  padding: 16px;
  margin: 0px 16px;
  border-radius: 8px;
  align-items: center;
  background: ${d.Bl.backgrounds.surface_info};
`,v=(0,c.ZP)(y)`
  margin: 16px 16px 0px;
  align-items: flex-start;
  color: ${d.wL.white};
`,C=(0,c.ZP)(g.sz).attrs({color:d.Bl.hover.accent_hover})`
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`,P=c.ZP.img`
  width: 72px;
  height: 72px;
  flex-shrink: 0;
`,F=(0,c.ZP)(l.FlexBox)`
  gap: 8px;
`,k=64,_=(0,c.ZP)(l.FlexBox)`
  height: ${k}px;
  padding: 16px;
  margin-top: auto;
  box-shadow: 0px -1px 2px 0px rgba(0, 0, 0, 0.3),
    0px -1px 3px 1px rgba(0, 0, 0, 0.15);
`,Z=(0,c.ZP)(l.ConfirmLedger)`
  position: absolute;
  bottom: ${k}px;
`,O=({asset:e,amount:t,onConfirm:r,isLoading:a})=>{var i;const{t:c}=(0,x.$G)("app"),d=(0,h.pF)(t,f.DF,{trimTrailingZero:!0}),g="Evm_1"!==e.chainId&&"XDEFI"===e.token.symbol?424:312;return(0,n.jsxs)("div",{children:[(0,n.jsxs)(l.FlexBox,{mb:24,height:g,children:[(0,n.jsxs)(m,{children:[(0,n.jsx)(b,{src:null!=(i=e.token.image)?i:void 0,alt:"Token"}),(0,n.jsx)(w,{children:e.chainName}),(0,n.jsx)(j,{children:`${d} ${e.token.symbol}`})]}),"Evm_1"!==e.chainId&&(0,n.jsxs)(y,{children:[(0,n.jsx)(P,{src:p,alt:"Glass"}),(0,n.jsxs)(F,{children:[(0,n.jsx)(s.Z,{children:c("gastank.deposit_confirm_banner_title")}),(0,n.jsx)(o.Z,{children:c("gastank.deposit_confirm_banner")})]})]}),"XDEFI"===e.token.symbol?(0,n.jsxs)(v,{children:[(0,n.jsx)(C,{}),(0,n.jsx)(o.Z,{children:c("gastank.xdefi_price_fluctuation")})]}):null]}),(0,n.jsx)(Z,{show:a}),(0,n.jsx)(_,{children:(0,n.jsx)(l.PrimaryButton,{fullWidth:!0,onClick:r,loading:a,disabled:a,children:c("general.deposit")})})]})};a()}catch(e){a(e)}}))},533204:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{ZP:()=>P});var n=r(785893),o=r(308787),i=r(346539),s=r(818117),l=r(669525),c=r(667294),d=r(230811),p=r(876777),x=r(429290),h=e([o,x]);[o,x]=h.then?(await h)():h;const f=(0,s.ZP)(o.FlexBox)`
  padding-top: 70px;
  gap: 24px;
  flex-grow: 1;
  height: 400px;
`,g=(0,s.ZP)(o.InputField)`
  flex-grow: 1;
  max-width: 375px;

  ${l.fv} {
    padding: 11px 16px;
    height: unset;
  }

  input {
    font-size: 16px;
    line-height: 22px;
    font-weight: 400;
  }
`,u=(0,s.ZP)(o.BaseButton)`
  height: 44px;
  padding: 0 16px;
  font-size: 16px;
  line-height: 20px;
  align-self: flex-start;
`,m=(0,s.ZP)(o.FlexBox)`
  flex-direction: row;
  gap: 18px;
  padding: 0 16px;
`,b=(0,s.ZP)(m)`
  gap: 8px;
`,w=(0,s.ZP)(b)`
  justify-content: center;
`,j=s.ZP.div`
  margin-top: auto;
  padding: 24px 16px;
  border-top: 1px solid ${p.wL.black};
`,y=[10,25,50],v=y[0],C=1e3,P=({asset:e,onSelectAmount:t})=>{const{t:r}=(0,d.$G)("app"),[a,s]=(0,c.useState)(),l=(0,c.useMemo)((()=>a&&a>e.fiatBalance?r("gastank.deposit_insufficient_funds"):a&&a<v?r("gastank.deposit_min_amount",{amount:y[0]}):a&&a>C?r("gastank.deposit_max_amount",{amount:C}):""),[a,e.fiatBalance,r]);return(0,n.jsxs)(f,{children:[(0,n.jsx)(m,{children:y.map((e=>(0,n.jsx)(o.SecondaryButton,{fullWidth:!0,onClick:()=>s(e),children:`$${e}`},e)))}),(0,n.jsx)(w,{children:(0,n.jsx)(i.Z,{children:r("general.or")})}),(0,n.jsxs)(b,{children:[(0,n.jsx)(g,{value:a,type:"number",step:1,errorMsg:l,placeholder:r("gastank.deposit_amount_placeholder"),onChange:e=>s(parseFloat(e.target.value))}),(0,n.jsx)(u,{onClick:()=>t(null!=a?a:0),disabled:!a||a>e.fiatBalance||a<v||a>C,children:r("general.deposit")})]}),(0,n.jsx)(j,{children:(0,n.jsx)(x.Z,{asset:e,isRow:!1,onSelect:e=>{s(e.fiatBalance)}})})]})};a()}catch(e){a(e)}}))},984179:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>f});var n=r(785893),o=r(308787),i=r(646284),s=r(667294),l=r(246858),c=r(230811),d=r(691438),p=r(429290),x=r(467837),h=e([o,i,p,x]);[o,i,p,x]=h.then?(await h)():h;const f=({onSelect:e,onGetChainType:t,assets:r})=>{const{t:a}=(0,c.$G)("app"),[h,f]=(0,s.useState)(""),[g,u]=(0,s.useState)("all"),[m,b]=(0,s.useState)(l.n.Down),[w,j]=(0,s.useState)(l.n.Off),y=(0,s.useCallback)((e=>{f(e)}),[]),v=(0,s.useMemo)((()=>({value:g,onSelect:e=>{u(e)},chains:[...new Set(r.map((e=>e.chainId)))],combineCosmosChains:!0,combineEVMChains:!0})),[r,g]),C=(0,s.useMemo)((()=>(e,t)=>m===l.n.Up?e.balance-t.balance:t.balance-e.balance),[m]),P=(0,s.useMemo)((()=>(e,t)=>w===l.n.Up?e.token.symbol<t.token.symbol?-1:1:t.token.symbol<e.token.symbol?-1:1),[w]),F=(0,s.useMemo)((()=>w!==l.n.Off?P:(l.n.Off,C)),[w,m,P,C]),k=(0,s.useMemo)((()=>[...r].sort(F)),[r,F]),_=(0,s.useMemo)((()=>"all"===g?k:g===d.J.Evm||g===d.J.Cosmos?k.filter((({chainId:e})=>t(e)===g)):r.filter((e=>e.chainId===g))),[r,t,g,k]),Z=(0,s.useMemo)((()=>_.filter((e=>{var t;return null==(t=e.token.name)?void 0:t.toLowerCase().includes(h.toLowerCase())}))),[_,h]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(x.h4,{children:[(0,n.jsx)(i.ExpandableSearchContainer,{searchValue:h,handleSearchChange:y,singleChainSelection:v,hideHoverButton:!0}),(0,n.jsxs)(x.cZ,{children:[(0,n.jsx)(o.SortingRowLabel,{label:a("chain_assets.asset"),onSortChange:j,sortStatus:w,dataTestId:"assetSortBtn"}),(0,n.jsx)(o.SortingRowLabel,{label:a("chain_assets.balance"),onSortChange:b,sortStatus:m,inverseSorting:!0,dataTestId:"balanceSortBtn"})]})]}),(0,n.jsx)(x.No,{children:Z.map((t=>(0,n.jsx)(p.Z,{asset:t,onSelect:e},t.token.id+t.chainId)))})]})};a()}catch(e){a(e)}}))},587160:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>f});var n=r(785893),o=r(667294),i=r(230811),s=r(435729),l=r(467837),c=r(984179),d=r(533204),p=r(298243),x=e([s,l,c,d,p]);[s,l,c,d,p]=x.then?(await x)():x;const h=[{next:1,previous:!1,title:"gastank.deposit_select_asset_title"},{next:2,previous:0,title:"gastank.deposit_amount_title"},{next:!1,previous:1,title:"gastank.deposit_confirm_title"}],f=({onClose:e,onDeposit:t,onGetChainType:r,open:a,assets:x,isDepositLoading:f})=>{const{t:g}=(0,i.$G)("app"),[u,m]=(0,o.useState)(0),[b,w]=(0,o.useState)(null),[j,y]=(0,o.useState)(),v=(0,o.useCallback)((()=>{!1!==h[u].previous?m(h[u].previous):e()}),[e,u]),C=(0,o.useCallback)((e=>{w(e),m(h[u].next)}),[u]),P=(0,o.useCallback)((e=>{y(e),m(h[u].next)}),[u]),F=(0,o.useCallback)((()=>{t(b,j,e)}),[j,e,t,b]),k=(0,o.useMemo)((()=>[(0,n.jsx)(c.Z,{onSelect:C,onGetChainType:r,assets:x},"select-asset"),(0,n.jsx)(d.ZP,{asset:b,onSelectAmount:P},"deposit-amount"),(0,n.jsx)(p.Z,{asset:b,amount:j,onConfirm:F,isLoading:f},"confirmation")]),[C,r,x,b,P,j,F,f]);return(0,n.jsx)(s.Z,{open:a,onClose:e,onBack:v,title:g(h[u].title),fullHeight:!1,dynamicHeight:!0,fullWidth:!0,children:(0,n.jsx)(l.im,{children:k[u]})})};a()}catch(e){a(e)}}))},559860:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>F});var n=r(785893),o=r(667294),i=r(725634),s=r(587160),l=r(741797),c=r(518949),d=r(281672),p=r(947050),x=r(50533),h=r(972819),f=r(230811),g=r(25167),u=e([i,s,l,c,d,p,h]);[i,s,l,c,d,p,h]=u.then?(await u)():u;var m=Object.defineProperty,b=Object.defineProperties,w=Object.getOwnPropertyDescriptors,j=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,C=Math.pow,P=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const F=({isGasTankPanelClosing:e,showGasTankPanel:t,setShowGasTankPanel:r})=>{const{enabled:a,isGastankDepositOpen:u,isDepositLoading:m,tokens:F,handleDeposit:k,handleInitDeposit:_,handleUpdateGastank:Z,balance:O,pendingBalance:S}=(0,p.Q1)(),{t:B}=(0,f.$G)("app"),I=(0,d.fU)(),{addNotification:G}=(0,h.Z)(),D=(0,x.v9)((e=>e.wallets.activeWalletId)),{getAssetFiatBalance:$}=(0,l.Aw)(),T=(0,x.v9)((e=>e.settings.gastank.walletId)),A=(0,x.v9)(g.ao),{getFormatedPriceStr:L,currency:V}=(0,c.j)(),H=(0,o.useMemo)((()=>F.map((e=>{var t,r,a;const{longName:n,decimals:o}=I.getChainControllerById(e.chainId).getConfig(),i=$(e);let s=I.getBalance(e.chainId,e.token.symbol,null!=(t=e.token.address)?t:e.token.id,D);s="string"==typeof s?parseInt(s,16):s;const l=s/C(10,null!=(a=null==(r=e.token)?void 0:r.decimals)?a:o),c=L(i);return d=((e,t)=>{for(var r in t||(t={}))y.call(t,r)&&P(e,r,t[r]);if(j)for(var r of j(t))v.call(t,r)&&P(e,r,t[r]);return e})({},e),b(d,w({chainName:n,balance:l,fiatBalance:i,fiatBalanceFormatted:c}));var d}))),[F,I,$,D,L]),M=(0,o.useCallback)((e=>I.getChainControllerById(e).getType()),[I]),W=!T||!A.length;return(0,n.jsxs)(n.Fragment,{children:[t&&(0,n.jsx)(i.Z,{onDeposit:()=>_(!0),onSwitch:e=>{T||A.length?Z({enabled:e}):G({type:"warning",title:B("gastank.notification_need_keystore_title"),message:B("gastank.notification_need_keystore_body")})},isActive:a,isClosing:e,balance:O,pendingBalance:S,currencySymbol:V.symbol,disabled:W}),(0,n.jsx)(s.Z,{open:u,onClose:()=>{_(!1),r&&r(!1)},onDeposit:k,onGetChainType:M,assets:H,isDepositLoading:m},`${u}`)]})};a()}catch(e){a(e)}}))},728847:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(785893);var a=r(646284),n=r(213415),o=e([a,n]);[a,n]=o.then?(await o)():o;Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;t()}catch(e){t(e)}}))},753420:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(785893),n=r(667294),o=r(327754),i=r(876777),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const f=n.forwardRef((function(e,t){const r=(0,o.F)({[i.$T.Dark]:"#FFC400"}),n=e.color||r;return(0,a.jsxs)("svg",(s=((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))x.call(t,r)&&h(e,r,t[r]);return e})({width:40,height:38,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(s,c({children:[(0,a.jsx)("circle",{cx:20,cy:31,r:1,fill:n||"url(#alert_svg__paint0_linear)"}),(0,a.jsx)("path",{d:"M17.345 7.191c1.125-2.137 4.185-2.137 5.31 0l13.374 25.412C37.081 34.6 35.632 37 33.374 37H6.625c-2.257 0-3.706-2.4-2.654-4.397L17.345 7.19z",stroke:n||"url(#alert_svg__paint1_linear)",strokeWidth:2}),(0,a.jsx)("rect",{x:19,y:13,width:2,height:15,rx:1,fill:n||"url(#alert_svg__paint2_linear)"}),(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"alert_svg__paint0_linear",x1:19.861,y1:29.759,x2:18.276,y2:31.207,gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4476F2"}),(0,a.jsx)("stop",{offset:1,stopColor:"#2041E0"})]}),(0,a.jsxs)("linearGradient",{id:"alert_svg__paint1_linear",x1:17.22,y1:-4.58,x2:-12.999,y2:24.485,gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4476F2"}),(0,a.jsx)("stop",{offset:1,stopColor:"#2041E0"})]}),(0,a.jsxs)("linearGradient",{id:"alert_svg__paint2_linear",x1:19.861,y1:11.192,x2:16.995,y2:11.541,gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{stopColor:"#4476F2"}),(0,a.jsx)("stop",{offset:1,stopColor:"#2041E0"})]})]})]}))));var s})),g=n.memo(f)},77411:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(785893),n=r(667294),o=r(327754),i=r(876777),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const f=n.forwardRef((function(e,t){const r=(0,o.F)({[i.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsx)("svg",(s=((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))x.call(t,r)&&h(e,r,t[r]);return e})({width:16,height:16,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(s,c({children:(0,a.jsx)("path",{d:"M2 5.99902L7.72265 9.81412C7.8906 9.92609 8.1094 9.92609 8.27735 9.81412L14 5.99902",stroke:n||"white",strokeLinecap:"round"})}))));var s})),g=n.memo(f)},153780:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(785893),n=r(667294),o=r(876777),i=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=n.forwardRef((function(e,t){const r=e.color||o.wL.white;return(0,a.jsxs)("svg",(n=((e,t)=>{for(var r in t||(t={}))d.call(t,r)&&x(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&x(e,r,t[r]);return e})({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),s(n,l({children:[(0,a.jsx)("path",{d:"M3.22917 11.5C3.63187 11.5 3.95833 11.8134 3.95833 12.2V13.6H12.7083V12.2C12.7083 11.8134 13.0348 11.5 13.4375 11.5C13.8402 11.5 14.1667 11.8134 14.1667 12.2V13.6C14.1667 14.3732 13.5137 15 12.7083 15H3.95833C3.15292 15 2.5 14.3732 2.5 13.6V12.2C2.5 11.8134 2.82646 11.5 3.22917 11.5Z",fill:r}),(0,a.jsx)("path",{d:"M8.96974 11.295C8.68498 11.5683 8.2233 11.5683 7.93854 11.295L5.02188 8.49497C4.73712 8.22161 4.73712 7.77839 5.02188 7.50503C5.30663 7.23166 5.76832 7.23166 6.05307 7.50503L7.72498 9.11005V1.7C7.72498 1.3134 8.05143 1 8.45414 1C8.85685 1 9.18331 1.3134 9.18331 1.7V9.11005L10.8552 7.50503C11.14 7.23166 11.6017 7.23166 11.8864 7.50503C12.1712 7.77839 12.1712 8.22161 11.8864 8.49497L8.96974 11.295Z",fill:r})]}))));var n})),f=n.memo(h)},881164:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(785893),n=r(667294),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const x=n.forwardRef((function(e,t){return(0,a.jsxs)("svg",(r=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e})({xmlns:"http://www.w3.org/2000/svg",width:"22",height:"24",viewBox:"0 0 22 24",fill:"none",ref:t},e),i(r,s({children:[(0,a.jsx)("g",{id:"GasTank",children:(0,a.jsx)("g",{id:"Vector",filter:"url(#filter0_d_25149_16442)",children:(0,a.jsx)("path",{d:"M15.5635 9.21257L14.4519 8.44267C14.2803 8.32827 14.0484 8.37001 13.9263 8.53698C13.8026 8.70549 13.8351 8.94048 13.999 9.07034L14.3484 9.36872C14.5262 9.52023 14.6282 9.7413 14.6282 9.97475V10.9735C14.6282 11.3028 14.8555 11.5795 15.1616 11.6552C15.2528 11.6908 15.2992 11.8052 15.2992 11.8408V13.5939C15.2992 13.9201 15.0348 14.1845 14.7086 14.1845H13.2291C13.1054 14.1845 13.0064 14.1056 13.0064 13.9619V6.98325C13.0064 6.44061 12.5658 6 12.0232 6H6.98325C6.44061 6 6 6.44061 6 6.98325V17.5377C6 17.7928 6.20716 18 6.46225 18H12.5457C12.8008 18 13.008 17.7928 13.008 17.5377V15.1817C13.008 15.0379 13.1069 14.959 13.2306 14.959H14.7086C15.4615 14.959 16.0737 14.3468 16.0737 13.5939V11.9498C16.0737 11.8803 16.0764 11.8093 16.1056 11.7462C16.1229 11.7089 16.1485 11.6693 16.1853 11.6437C16.1892 11.641 16.1927 11.6367 16.1974 11.6367C16.1989 11.6367 16.1998 11.6347 16.201 11.6339C16.2033 11.6323 16.2055 11.6302 16.2066 11.629C16.2608 11.5872 16.2948 11.5238 16.2948 11.4512V10.6117C16.2948 10.0536 16.0211 9.53105 15.5635 9.21257ZM12.0139 10.7292C12.0139 10.8714 11.898 10.9874 11.7557 10.9874H7.25225C7.11002 10.9874 6.99407 10.8714 6.99407 10.7292V7.25689C6.99407 7.11466 7.11002 6.99871 7.25225 6.99871H11.7557C11.898 6.99871 12.0139 7.11466 12.0139 7.25689V10.7292Z",fill:"#6BAEFF"})})}),(0,a.jsx)("defs",{children:(0,a.jsxs)("filter",{id:"filter0_d_25149_16442",x:"0.743884",y:"0.743884",width:"20.8072",height:"22.5122",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,a.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,a.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,a.jsx)("feMorphology",{radius:"0.404317",operator:"dilate",in:"SourceAlpha",result:"effect1_dropShadow_25149_16442"}),(0,a.jsx)("feOffset",{}),(0,a.jsx)("feGaussianBlur",{stdDeviation:"2.4259"}),(0,a.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,a.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.619608 0 0 0 0 0.792157 0 0 0 0 1 0 0 0 0.5 0"}),(0,a.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_25149_16442"}),(0,a.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_25149_16442",result:"shape"})]})})]}))));var r})),h=n.memo(x)},629796:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(785893),n=r(667294),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const x=n.forwardRef((function(e,t){return(0,a.jsx)("svg",(r=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e})({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",ref:t},e),i(r,s({children:(0,a.jsx)("g",{id:"GasTank",children:(0,a.jsx)("path",{id:"Vector",opacity:"0.5",d:"M13.5635 5.21257L12.4519 4.44267C12.2803 4.32827 12.0484 4.37001 11.9263 4.53698C11.8026 4.70549 11.8351 4.94048 11.999 5.07034L12.3484 5.36872C12.5262 5.52023 12.6282 5.7413 12.6282 5.97475V6.97346C12.6282 7.30276 12.8555 7.57949 13.1616 7.65524C13.2528 7.6908 13.2992 7.80521 13.2992 7.84076V9.59392C13.2992 9.92012 13.0348 10.1845 12.7086 10.1845H11.2291C11.1054 10.1845 11.0064 10.1056 11.0064 9.96187V2.98325C11.0064 2.44061 10.5658 2 10.0232 2H4.98325C4.44061 2 4 2.44061 4 2.98325V13.5377C4 13.7928 4.20716 14 4.46225 14H10.5457C10.8008 14 11.008 13.7928 11.008 13.5377V11.1817C11.008 11.0379 11.1069 10.959 11.2306 10.959H12.7086C13.4615 10.959 14.0737 10.3468 14.0737 9.59392V7.94983C14.0737 7.88033 14.0764 7.80932 14.1056 7.74624C14.1229 7.70889 14.1485 7.66928 14.1853 7.64367C14.1892 7.64101 14.1927 7.63669 14.1974 7.63669C14.1989 7.63669 14.1998 7.63474 14.201 7.63388C14.2033 7.63227 14.2055 7.63016 14.2066 7.62896C14.2608 7.58722 14.2948 7.52383 14.2948 7.45117V6.6117C14.2948 6.0536 14.0211 5.53105 13.5635 5.21257ZM10.0139 6.72919C10.0139 6.87143 9.89796 6.98737 9.75573 6.98737H5.25225C5.11002 6.98737 4.99407 6.87143 4.99407 6.72919V3.25689C4.99407 3.11466 5.11002 2.99871 5.25225 2.99871H9.75573C9.89796 2.99871 10.0139 3.11466 10.0139 3.25689V6.72919Z",fill:"#6BAEFF"})})}))));var r})),h=n.memo(x)},881473:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(785893),n=r(667294),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const x=n.forwardRef((function(e,t){const r=e.color;return(0,a.jsx)("svg",(n=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e})({ref:t},e),i(n,s({xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",children:(0,a.jsx)("g",{id:"Small/Gas",children:(0,a.jsx)("path",{id:"Union",fillRule:"evenodd",clipRule:"evenodd",d:"M5.2959 2C3.77712 2 2.5459 3.23122 2.5459 4.75V12.5294C2.23088 12.6183 2 12.9079 2 13.2513C2 13.6655 2.33579 14.0013 2.75 14.0013H10.3868C10.801 14.0013 11.1368 13.6655 11.1368 13.2513C11.1368 12.9082 10.9063 12.6188 10.5917 12.5297V8.75046H10.8643V9.20514C10.8643 9.42808 10.9323 9.64572 11.0592 9.829C11.9602 11.13 14.0007 10.4924 14.0007 8.90986V6.42521C14.0007 6.30487 13.9717 6.18629 13.9163 6.0795L13.3708 5.02933C13.1799 4.66175 12.7271 4.51854 12.3595 4.70948C11.9919 4.90041 11.8487 5.35317 12.0396 5.72076L12.5007 6.60838V8.90986C12.5007 8.95322 12.4891 8.97066 12.4822 8.97947C12.4716 8.99303 12.4511 9.00945 12.4205 9.01902C12.3989 9.02575 12.3796 9.02684 12.3643 9.02512V8.00046C12.3643 7.58625 12.0285 7.25046 11.6143 7.25046H10.5917V4.75C10.5917 3.23122 9.36049 2 7.8417 2H5.2959ZM9.0917 12.5013V7.70029H4.0459V12.5013H9.0917ZM9.0917 6.20029H4.0459V4.75C4.0459 4.05964 4.60554 3.5 5.2959 3.5H7.8417C8.53206 3.5 9.0917 4.05964 9.0917 4.75V6.20029Z",fill:r||"white"})})}))));var n})),h=n.memo(x)},338391:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(785893),n=r(667294),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const x=n.forwardRef((function(e,t){return(0,a.jsxs)("svg",(r=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e})({xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",ref:t},e),i(r,s({children:[(0,a.jsx)("g",{id:"Ellipse 214",filter:"url(#filter0_d_25149_16444)",children:(0,a.jsx)("circle",{cx:"6.99907",cy:"7.01079",r:"1.01079",fill:"#6BAEFF"})}),(0,a.jsx)("defs",{children:(0,a.jsxs)("filter",{id:"filter0_d_25149_16444",x:"0.136482",y:"0.148201",width:"13.7251",height:"13.7252",filterUnits:"userSpaceOnUse",colorInterpolationFilters:"sRGB",children:[(0,a.jsx)("feFlood",{floodOpacity:"0",result:"BackgroundImageFix"}),(0,a.jsx)("feColorMatrix",{in:"SourceAlpha",type:"matrix",values:"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",result:"hardAlpha"}),(0,a.jsx)("feMorphology",{radius:"1",operator:"dilate",in:"SourceAlpha",result:"effect1_dropShadow_25149_16444"}),(0,a.jsx)("feOffset",{}),(0,a.jsx)("feGaussianBlur",{stdDeviation:"2.4259"}),(0,a.jsx)("feComposite",{in2:"hardAlpha",operator:"out"}),(0,a.jsx)("feColorMatrix",{type:"matrix",values:"0 0 0 0 0.619608 0 0 0 0 0.792157 0 0 0 0 1 0 0 0 0.5 0"}),(0,a.jsx)("feBlend",{mode:"normal",in2:"BackgroundImageFix",result:"effect1_dropShadow_25149_16444"}),(0,a.jsx)("feBlend",{mode:"normal",in:"SourceGraphic",in2:"effect1_dropShadow_25149_16444",result:"shape"})]})})]}))));var r})),h=n.memo(x)},540186:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(785893),n=r(667294),o=r(327754),i=r(876777),s=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const f=n.forwardRef((function(e,t){const r=(0,o.F)({[i.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsxs)("svg",(s=((e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(d)for(var r of d(t))x.call(t,r)&&h(e,r,t[r]);return e})({width:"18",height:"22",viewBox:"0 0 18 22",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(s,c({children:[(0,a.jsx)("path",{d:"M17 6.995H15C14.45 6.995 14 7.445 14 7.995V9.985C14 10.535 14.45 10.985 15 10.985V12.985H10V3.405L11.88 5.285C12.27 5.675 12.9 5.675 13.29 5.285C13.68 4.895 13.68 4.265 13.29 3.875L9.71 0.285C9.61 0.195 9.5 0.125 9.38 0.075C9.14 -0.025 8.86 -0.025 8.62 0.075C8.5 0.125 8.39 0.195 8.29 0.285L4.71 3.875C4.32 4.265 4.32 4.895 4.71 5.285C5.1 5.675 5.73 5.675 6.12 5.285L8 3.405V12.995H3V10.715C3.6 10.365 4 9.735 4 8.995C4 7.895 3.1 6.995 2 6.995C0.9 6.995 0 7.895 0 8.995C0 9.735 0.4 10.375 1 10.715V13.995C1 14.545 1.45 14.995 2 14.995H8V18.275C7.4 18.615 7 19.255 7 19.995C7 21.095 7.9 21.995 9 21.995C10.1 21.995 11 21.095 11 19.995C11 19.255 10.6 18.615 10 18.275V14.995H16C16.55 14.995 17 14.545 17 13.995V10.995C17.55 10.995 18 10.545 18 9.995V7.995C18 7.445 17.55 6.995 17 6.995Z",fill:n||"url(#paint0_linear)"}),(0,a.jsx)("defs",{children:(0,a.jsxs)("linearGradient",{id:"paint0_linear",x1:"3.31579",y1:"19.1009",x2:"17.8241",y2:"5.80299",gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:"0.407986",stopColor:"#2041E0"}),(0,a.jsx)("stop",{offset:"1",stopColor:"#4476F2"})]})})]}))));var s})),g=n.memo(f)},684546:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(785893),n=r(667294),o=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const x=n.forwardRef((function(e,t){const r=e.color;return(0,a.jsxs)("svg",(n=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&p(e,r,t[r]);return e})({width:"13",height:"15",viewBox:"0 0 13 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),i(n,s({"data-testid":"pinIcon",children:[(0,a.jsx)("g",{clipPath:"url(#pin_svg__clip0)",children:(0,a.jsx)("path",{d:"M9.281 5.317a1.003 1.003 0 00-1.366-.366l-.216.125-2.15-2.223.866-.5a1.003 1.003 0 00-1.366-.366l-.866.5-.866.5-.866.5c-.476.275-.641.89-.366 1.366l.866-.5.85 2.973-.216.125c-.476.275-.641.89-.366 1.366l1 1.732 2.598-1.5 1.75 3.031c.135.234.44.323.683.183a.501.501 0 00.183-.683L7.683 8.55l2.598-1.5-1-1.732zm-5.37-1.241l-.034-.12-.06-.103.866-.5.06.104.086.089L6.807 5.59l-2.114 1.22-.782-2.735zm5.004 2.607l-4.33 2.5-.5-.866 4.33-2.5.5.866z",fill:"url(#pin_svg__paint0_linear)"})}),(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"pin_svg__paint0_linear",x1:3.469,y1:9.25,x2:9.531,y2:5.75,gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:.364,stopColor:r||"#2041E0"}),(0,a.jsx)("stop",{offset:.529,stopColor:r||"#2549E3"}),(0,a.jsx)("stop",{offset:.781,stopColor:r||"#345EEA"}),(0,a.jsx)("stop",{offset:1,stopColor:r||"#4476F2"})]}),(0,a.jsx)("clipPath",{id:"pin_svg__clip0",children:(0,a.jsx)("path",{fill:"#fff",transform:"rotate(-30 8.732 .902)",d:"M0 0h7v11H0z"})})]})]}))));var n})),h=n.memo(x)},799719:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(785893),n=r(667294),o=r(247412),i=r(327754),s=r(876777),l=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,g=(e,t)=>{for(var r in t||(t={}))x.call(t,r)&&f(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&f(e,r,t[r]);return e};const u=n.forwardRef((function(e,t){const r=(0,i.F)({[s.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsx)(o.YJ,{children:(0,a.jsxs)("svg",(l=g({width:"20",height:"16",viewBox:"0 0 20 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),p={"data-testid":"WalletIcon",children:[(0,a.jsx)("g",{clipPath:"url(#Frame_svg__clip0)",children:(0,a.jsx)("path",{d:"M19 4.1V2.8C19 1.2 17.8 0 16.2 0H2.8C1.2 0 0 1.2 0 2.8v10.5C0 14.8 1.2 16 2.7 16h14.5c1.5 0 2.7-1.2 2.7-2.7v-7c.1-.9-.3-1.7-.9-2.2zM2.8 2h13.5c.4 0 .7.3.7.8v.8H2.8c-.5-.1-.8-.4-.8-.8 0-.5.3-.8.8-.8zm14.5 12H2.7c-.4 0-.7-.3-.7-.7V5.4c.2.1.5.1.7.1h14.5c.4 0 .7.3.7.7V7h-1.6c-1.5 0-2.8 1.2-2.8 2.8 0 1.5 1.2 2.8 2.8 2.8H18v.8c0 .3-.3.6-.7.6zm.7-5v1.5h-1.6c-.4 0-.8-.3-.8-.8 0-.4.4-.7.8-.7H18z",fill:"url(#Frame_svg__paint0_linear)"})}),(0,a.jsxs)("defs",{children:[(0,a.jsxs)("linearGradient",{id:"Frame_svg__paint0_linear",x1:3.669,y1:13.895,x2:13.704,y2:-.095,gradientUnits:"userSpaceOnUse",children:[(0,a.jsx)("stop",{offset:.408,stopColor:n||"#2041E0"}),(0,a.jsx)("stop",{offset:1,stopColor:n||"#4476F2"})]}),(0,a.jsx)("clipPath",{id:"Frame_svg__clip0",children:(0,a.jsx)("path",{fill:"#fff",d:"M0 0h20v16H0z"})})]})]},c(l,d(p))))});var l,p})),m=n.memo(u)},604275:(e,t,r)=>{r.d(t,{Z:()=>j});var a=r(785893);const n=r.p+"9b28ad52c56be27dfd7a.svg";var o=r(771341),i=r(876777),s=r(818117),l=r(458038),c=r(585331),d=r(79295),p=r(976829);const x=(0,s.ZP)(p.zx)`
  padding: 0px 8px;
  max-width: 170px;
  height: 32px;
  background: ${({$open:e})=>e?`${i.wL.black}`:`${i.wL.darkSteel}`};
  border-radius: 8px;
  cursor: pointer;
  transition: max-width ${i.uT.A5};

  &:hover {
    background-color: ${i.wL.solidBlack};
  }

  &:focus {
    border: 1px solid transparent;
  }

  ${({$open:e})=>e&&"max-width: 255px;"}
`,h=(0,s.ZP)(d.h).attrs({flexDirection:"row",justifyContent:"space-between"})`
  gap: 8px;
`,f=(0,s.ZP)(d.h).attrs({justifyContent:"center"})`
  position: relative;
`,g=s.ZP.img`
  width: 16px;
  height: 16px;
`,u=s.ZP.img`
  width: 12px;
  height: 12px;
`,m=(0,s.ZP)(d.h).attrs({flex:"none"})`
  max-width: 120px;
`,b=(0,s.ZP)(o.Tw)`
  width: 12px;
  height: 12px;
`,w=(0,s.ZP)(d.h)`
  position: absolute;
  top: -2px;
  right: -5px;
`,j=({open:e,label:t,onClick:r,image:o,onMouseDown:i,dataTestId:s,chainIcon:d,walletIcon:p})=>(0,a.jsx)(x,{$open:e,onClick:r,onMouseDown:i,dataTestId:s,children:(0,a.jsxs)(h,{children:[(0,a.jsxs)(f,{children:[o?(0,a.jsx)(c.qE,{image:o,size:"sm",dataTestId:"buttonAvatarImage"}):p||(0,a.jsx)(g,{src:n.toString(),"data-testid":"buttonAvatarImage"}),d&&(0,a.jsx)(w,{children:(0,a.jsx)(u,{src:d,"data-testid":"buttonAvatarChainIcon"})})]}),(0,a.jsx)(f,{children:(0,a.jsx)(m,{children:(0,a.jsx)(l.Z,{textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:t})})}),e&&(0,a.jsx)(f,{"data-testid":"avatarButtonClose",children:(0,a.jsx)(b,{})})]})})},802615:(e,t,r)=>{r.d(t,{Z:()=>w});var a=r(785893),n=r(561277),o=r(667294),i=r(230811),s=r(50533),l=r(216558),c=r(556138),d=r(38187),p=r(712354),x=Object.defineProperty,h=Object.defineProperties,f=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,b=(e,t,r)=>t in e?x(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const w=(0,o.memo)((e=>{var t,r=e,{wallet:o,show:x}=r,w=((e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&g)for(var a of g(e))t.indexOf(a)<0&&m.call(e,a)&&(r[a]=e[a]);return r})(r,["wallet","show"]);const{t:j}=(0,i.$G)("app"),y=(0,s.v9)((e=>e.wallets.wallets[e.wallets.activeWalletId])),v=o||y;return(0,l.C)(null==(t=null==v?void 0:v.walletInfo)?void 0:t.type)?(0,a.jsx)(p.Z,(C=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&b(e,r,t[r]);if(g)for(var r of g(t))m.call(t,r)&&b(e,r,t[r]);return e})({show:x},w),P={children:(0,a.jsx)(d.Z,{flexDirection:"row",alignItems:"center",justifyContent:"center",minHeight:35,gridGap:4,children:(0,a.jsx)(n.Z,{textAlign:"center",children:j("confirm_ledger.please_confirm",{device:v.walletInfo.type===c.WalletType.Ledger?"Ledger":"Trezor"})})})},h(C,f(P)))):null;var C,P}))},102964:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(785893),n=r(818117),o=r(618884);const i=(0,n.ZP)(o.Z)`
  text-decoration: underline;
  cursor: pointer;
`,s=({to:e,children:t,dataTestId:r})=>(0,a.jsx)("div",{onClick:()=>{window.open(e,"_blank")},children:(0,a.jsx)(i,{"data-testid":r,children:t})})},215862:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(785893),n=r(667294),o=r(818117),i=r(771341),s=r(876777),l=r(412252),c=r(38187),d=r(246858);const p=(0,o.ZP)(c.Z).attrs({flexDirection:"row",alignItems:"center"})`
  cursor: pointer;
`,x=(0,o.ZP)(i.FE).attrs((e=>({color:e.$active?s.wL.white:s.wL.darkGrey})))`
  &:hover {
    color: ${s.wL.white};
  }
`,h=(0,o.ZP)(x)`
  transform: rotateX(180deg);
  margin-top: 1px;
`,f=(0,n.memo)((({label:e,onSortChange:t,dataTestId:r,sortStatus:o,inverseSorting:i=!1})=>{const s=(0,n.useCallback)((()=>{switch(o){case d.n.Up:return void t(d.n.Down);case d.n.Down:return void t(d.n.Off);case d.n.Off:return void t(d.n.Up)}}),[t,o]),f=(0,n.useCallback)((()=>{switch(o){case d.n.Up:return void t(d.n.Off);case d.n.Down:return void t(d.n.Up);case d.n.Off:return void t(d.n.Down)}}),[t,o]);return(0,a.jsxs)(p,{onClick:i?f:s,"data-testid":r,children:[(0,a.jsx)(l.Z,{withHover:!0,children:e}),(0,a.jsxs)(c.Z,{ml:4,children:[(0,a.jsx)(x,{$active:o===d.n.Up,"data-testid":"triangleUp"}),(0,a.jsx)(h,{$active:o===d.n.Down,"data-testid":"triangleDown"})]})]},e)}))},530825:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(785893),n=r(876777),o=r(15145),i=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const p=e=>{var t=e,{dataTestId:r}=t,i=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(t,["dataTestId"]);return(0,a.jsx)(o.Z,((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&d(e,r,t[r]);return e})({fontSize:24,lineHeight:"32px",color:n.wL.white,fontWeight:700,"data-testid":r},i))}},849721:(e,t,r)=>{r.d(t,{Z:()=>p});var a=r(785893),n=r(876777),o=r(15145),i=Object.defineProperty,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const p=e=>{var t=e,{dataTestId:r}=t,i=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(t,["dataTestId"]);return(0,a.jsx)(o.Z,((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(s)for(var r of s(t))c.call(t,r)&&d(e,r,t[r]);return e})({fontSize:14,lineHeight:"20px",color:n.wL.white,fontWeight:700,"data-testid":r},i))}},533448:()=>{},18544:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>d});var n=r(667294),o=r(230811),i=r(50533),s=r(972819),l=r(281672),c=e([s,l]);[s,l]=c.then?(await c)():c;const d=(e,t)=>{const{t:r}=(0,o.$G)(),[a,c]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>c(!1)),[c]),p=(0,n.useCallback)((()=>c(!0)),[c]),x=(0,l.UW)(),{addNotification:h}=(0,s.Z)(),f=(0,l.Ni)(),{requireTxPassword:g}=(0,i.v9)((e=>e.settings));return{handleConfirm:(0,n.useCallback)((a=>{return n=void 0,o=null,i=function*(){const n=a||x.masterKeys.masterPassword;if(!n||!a&&g)p();else if(n)try{(yield f.validateMasterPassword(n))?(d(),e&&(yield e(n))):h({title:r("alert.wallet.password.error.incorrect.title"),type:"error",message:r("alert.wallet.password.error.incorrect.messages.enter_password")})}catch(e){h({title:r("alert.transaction.errors.transaction.title"),type:"error"})}finally{t&&t()}else p()},new Promise(((e,t)=>{var r=e=>{try{s(i.next(e))}catch(e){t(e)}},a=e=>{try{s(i.throw(e))}catch(e){t(e)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,a);s((i=i.apply(n,o)).next())}));var n,o,i}),[f,e,x,x.masterKeys.masterPassword,g]),openDialog:a,onCloseDialog:d,onOpenDialog:p}};a()}catch(e){a(e)}}))},594390:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{$G:()=>f,A9:()=>l,IS:()=>h,Tw:()=>m,U3:()=>c,W2:()=>p,X2:()=>u,Y8:()=>d,gN:()=>g,xv:()=>x});var n=r(818117),o=r(308787),i=r(239605),s=e([o,i]);[o,i]=s.then?(await s)():s;const l=(0,n.ZP)(i.ZP)`
  margin: 8px 0 0 !important;
`,c=n.ZP.div`
  cursor: pointer;
  text-decoration: underline;
  opacity: 0.6;
`,d=((0,n.ZP)(o.FlexBox)`
  cursor: pointer;
`,(0,n.ZP)(o.FlexBox).attrs({width:9,height:9,alignItems:"center",justifyContent:"center"})`
  background-color: ${({theme:{palette:e}})=>e.container.background};

  &,
  div {
    border-radius: 50%;
  }

  div {
    border: 1px solid ${({theme:{palette:e}})=>e.container.section};
  }
`),p=n.ZP.div`
  max-height: 255px;
  overflow-y: auto;
  padding-left: 10px;
  padding-right: 10px;
`,x=(0,n.ZP)(o.FlexBox).attrs({textAlign:"center",flexDirection:"row",justifyContent:"center",alignItems:"center",py:20})`
  width: 100%;
  height: 50px;
`,h=(0,n.ZP)(o.FlexBox).attrs({flexDirection:"row",justifyContent:"center",alignItems:"center"})`
  padding: 20px;
`,f=n.ZP.div`
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-break: break-word;
  white-space: nowrap;
`,g=n.ZP.div`
  margin-left: 10px;
  margin-right: 10px;
`,u=(0,n.ZP)(o.FlexBox).attrs({alignItems:"center",justifyContent:"space-between",flexDirection:"row"})`
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  padding-left: 10px;
`,m=(0,n.ZP)(o.FlexBox).attrs({alignItems:"center",flexDirection:"row"})`
  margin-right: 10px;
  margin-left: 5px;
`;a()}catch(e){a(e)}}))},222340:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{W:()=>c,a:()=>d});var n=r(818117),o=r(834166),i=r(308787),s=r(876777),l=e([i]);i=(l.then?(await l)():l)[0];const c=(0,n.ZP)(i.FlexBox)`
  position: fixed;
  z-index: 1102;
  padding: 12px 17px 0;
  transition: ${s.uT.A3};
  width: 400px;
  height: 550px;
  background: ${({theme:{colors:e}})=>(0,o.m4)(e.solidBlack,.8)};
`,d=(0,n.ZP)(i.FlexBox)`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
`;a()}catch(e){a(e)}}))},230679:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{J:()=>n.J});var n=r(911058),o=e([n]);n=(o.then?(await o)():o)[0],a()}catch(e){a(e)}}))},900296:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Ct:()=>k,H6:()=>f,Hv:()=>P,Ll:()=>Z,Ls:()=>b,NN:()=>h,Ri:()=>j,Zm:()=>y,__:()=>m,im:()=>x,iz:()=>w,jz:()=>F,kI:()=>_,rs:()=>C,yd:()=>v,yo:()=>g,zG:()=>u});var n=r(818117),o=r(412252),i=r(530825),s=r(458038),l=r(876777),c=r(308787),d=r(771341),p=e([c]);c=(p.then?(await p)():p)[0];const x=(0,n.ZP)(c.FlexBox)``,h=(0,n.ZP)(c.FlexBox)`
  padding: 24px;
`,f=(0,n.ZP)(c.FlexBox)`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
`,g=(0,n.ZP)(i.Z)`
  font-size: 28px;
  font-weight: 600;
  line-height: 32px;
`,u=(0,n.ZP)(s.Z)`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0.25px;
  margin-top: 8px;
  color: ${l.wL.warningYellow};
`,m=(0,n.ZP)(o.Z)`
  color: ${l.wL.darkGrey};
  margin-bottom: 8px;
`,b=n.ZP.div`
  width: 162px;
`,w=n.ZP.div`
  height: 1px;
  margin: 0 10px;
  border-top: 1px solid ${l.wL.black};
`,j=(0,n.ZP)(c.FlexBox)`
  flex-direction: row;
  gap: 16px;
  padding: 24px 24px 16px;
`,y=(0,n.ZP)(s.Z)`
  color: ${l.wL.midGrey};
`,v=(0,n.ZP)(c.FlexBox)`
  gap: 4px;
  flex-grow: 1;
`,C=(0,n.ZP)(c.Switch)`
  margin: 0;
  flex-shrink: 0;
`,P=(0,n.ZP)(d.Hv)`
  position: absolute;
  top: 6px;
  left: -6px;
`,F=(0,n.ZP)(c.FlexBox)`
  justify-content: center;
  flex-direction: row;
  align-items: center;
  align-self: flex-start;
  flex-shrink: 0;
  width: 38px;
  height: 38px;
  border-radius: 100%;
  background-image: linear-gradient(
    to right,
    ${l.wL.scorpion},
    ${l.wL.charcoal}
  );
  position: relative;
  z-index: 1;

  ${({active:e})=>e?`\n    &::before {\n    content: '';\n    display: block;\n    background-color: ${l.wL.mineShaft};\n    position: absolute;\n    border-radius: 100%;\n    height: 94%;\n    width: 94%;\n    z-index: -1;\n  }\n  `:"\n      border: 1px solid #2E3133;\n      background-image:unset;\n      "}
`,k=n.ZP.div`
  background: #32404d;
  padding: 8px 16px;
  gap: 9px;
  display: flex;
  margin-bottom: 24px;
`,_=(0,n.ZP)(d.sz).attrs((({theme:e})=>({color:e.colors.midGrey})))`
  width: 16px;
  height: 16px;
  flex-shrink: 0;
`,Z=n.ZP.a`
  color: #9ecaff;
  text-decoration: none;
`;a()}catch(e){a(e)}}))},467837:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{No:()=>d,cZ:()=>p,h4:()=>l,im:()=>c});var n=r(818117),o=r(308787),i=r(876777),s=e([o]);o=(s.then?(await s)():s)[0];const l=(0,n.ZP)(o.FlexBox).attrs({justifyContent:"space-between",alignItems:"center",px:16,py:8})`
  border-bottom: 1px solid ${i.wL.black};
  gap: 16px;
`,c=(0,n.ZP)(o.FlexBox)`
  overflow: hidden;
`,d=(0,n.ZP)(o.ScrollingContainer)`
  height: 319px;
`,p=(0,n.ZP)(o.FlexBox).attrs({justifyContent:"space-between",flexDirection:"row",alignItems:"center",pl:8})`
  width: 100%;
  user-select: none;
  padding-right: 36px;
`;a()}catch(e){a(e)}}))},632649:()=>{},623638:(e,t,r)=>{r.d(t,{O:()=>o});const a=r(265142).Ps`
  query Fee {
    polygon {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    optimism {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    avalanche {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    ethereum {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    cantoEVM {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    cronosEVM {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    fantom {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    gnosis {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
    klaytn {
      fee {
        high {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        medium {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
        low {
          baseFeePerGas
          priorityFeePerGas
          maxFeePerGas
        }
      }
    }
  }
`;var n=r(459457);const o=e=>n.Lp.query({query:a,fetchPolicy:e})},832774:(e,t,r)=>{r.d(t,{n:()=>n});var a=r(265142);const n=e=>a.Ps`
  query getFee {
    ${e} {
      fee {
        low
        medium
        high
      }
    }
  }
`},465142:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>p});var n=r(680528),o=r(667294),i=r(50533),s=r(996974),l=r(281672),c=r(308787),d=e([l,c]);[l,c]=d.then?(await d)():d;const p=({hasControls:e=!0})=>{const[t,r]=(0,o.useState)(!1),a=(0,l.i_)(),d=(0,l.nl)(),p=(0,l.Ni)(),x=(0,l.fU)(),[h,f]=(0,o.useState)(!1),[g,u]=(0,o.useState)(!1),{isClosing:m,setIsClosing:b}=(0,c.useDelayClose)({onClose:()=>u(!1)}),[w,j]=(0,o.useState)(!1),{isClosing:y,setIsClosing:v}=(0,c.useDelayClose)({onClose:()=>j(!1)}),[C,P]=(0,o.useState)(!1),{isClosing:F,setIsClosing:k}=(0,c.useDelayClose)({onClose:()=>P(!1)}),[_,Z]=(0,o.useState)(null),{activeWalletId:O,wallets:S,pfp:B}=(0,i.v9)((e=>e.wallets)),I=(0,s.s0)(),G=(0,s.TH)(),{connected:D,currentTab:$}=(0,i.v9)((e=>e.dapps)),T=(0,o.useMemo)((()=>$&&Object.keys(D).includes($.id)?$:null),[$,D]),A=O&&Object.keys(S).length&&!p.isLocked&&!a.isCreating,L=(0,o.useCallback)((e=>{e.stopPropagation(),e.nativeEvent.stopImmediatePropagation()}),[]),V=(0,o.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),h&&f(!1),v(!0),k(!0),g?b(!0):u(!0)}),[h,g,b]),H=(0,o.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),b(!0),k(!0),w?v(!0):j(!0)}),[w]),M=(0,o.useCallback)((e=>{e.stopPropagation(),e.preventDefault(),b(!0),v(!0),C?k(!0):P(!0)}),[b,v,k,C]),W=(0,o.useMemo)((()=>e&&A),[e,A]),E=(0,o.useMemo)((()=>{var e;return null==(e=null==D?void 0:D[null==$?void 0:$.id])?void 0:e.walletIds}),[D,null==$?void 0:$.id]),z=(0,o.useCallback)((e=>{G.pathname.indexOf(n.hX)>-1&&I(n.ft),a.selectWallet(e);const t=!!(null==E?void 0:E.includes(e));d.updateActiveAddressesForDApp(e,!t),b(!0)}),[E,d,a,I,G.pathname]),N=(0,o.useCallback)((e=>{r(!0),Z(e),a.selectWallet(e);const t=!!(null==E?void 0:E.includes(e));d.updateActiveAddressesForDApp(e,!t),b(!0)}),[r,Z,E,d,a,u]),R=(0,o.useCallback)((()=>{r(!1),Z(null)}),[r]),U=(0,o.useMemo)((()=>{var e,t;const r=null==(e=null==D?void 0:D[null==$?void 0:$.id])?void 0:e.chains;return(null==r?void 0:r.length)?null!=(t=x.getChainControllerById(r[0]).getConfig().image)?t:x.getChainControllerById(r[0]).getConfig().fallbackImage:void 0}),[D,null==$?void 0:$.id,x]);return{handleCloseShowDappConnectionModal:R,dappConnectModalWalletId:_,showDappConnectionModal:t,handleSelect:z,handleRowClick:N,hasControlAndIsAuthenticated:W,activeWalletId:O,wallets:S,showAccountSelect:g,handleClickShowDappsScreen:H,handleClickAccountSelect:V,handleStopPropagation:L,currentDapp:T,showDappsScreen:w,showControlPanel:h,setShowControlPanel:f,setShowAccountSelect:u,setShowGasTankPanel:P,chainIcon:U,profilePic:B,isAccountSelectClosing:m,isDappsScreenClosing:y,activeWallet:S[O],showGasTankPanel:C,isGasTankPanelClosing:F,handleClickShowGasTankPanel:M}};a()}catch(e){a(e)}}))},379134:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{LI:()=>p,Pz:()=>l,Qc:()=>d,gM:()=>c});var n=r(818117),o=r(308787),i=r(876777),s=e([o]);o=(s.then?(await s)():s)[0];const l=(0,n.ZP)(o.FlexBox)`
  padding: 8px;
  height: 48px;
  background-color: ${i.wL.mineShaft};
  box-shadow: inset 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.3);
  position: absolute;
  z-index: ${i.ki.topBar};
  width: 100%;
`,c=(0,n.ZP)(o.FlexBox).attrs({flexDirection:"row"})`
  position: relative;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
`,d=(0,n.ZP)(o.FlexBox).attrs({flexDirection:"row"})`
  pointer-events: all;
  z-index: 1;
`,p=(0,n.ZP)(o.FlexBox).attrs({justifyContent:"center",flexDirection:"row",alignItems:"center"})`
  gap: 8px;
  z-index: 1;
`;(0,n.ZP)(o.FlexBox)`
  width: 5px;
  height: 5px;
  border-radius: 50%;
  margin-right: 4px;
`,n.ZP.img.attrs({alt:"Chain-Icon"})`
  width: 24px;
`,(0,n.ZP)(o.FlexBox).attrs({mx:4,my:2,width:"1px",alignSelf:"stretch"})`
  background-color: ${({theme:e})=>e.palette.container.background};
`,n.ZP.div`
  text-transform: uppercase;
  margin-left: 2px;
`;a()}catch(e){a(e)}}))},42763:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{D:()=>w,Z:()=>j});var n=r(346307),o=r(581106),i=r(548264),s=r(751865),l=r(102998),c=r(676734),d=r(501937),p=r(204147),x=r(843655),h=r(556138),f=e([s]);s=(f.then?(await f)():f)[0];const g={key:"primary",version:Number(p.gj),storage:c.Z,whitelist:[h.StoreKeys.Settings,h.StoreKeys.Balances,h.StoreKeys.Wallets,h.StoreKeys.Swaps,h.StoreKeys.MasterKeystore,h.StoreKeys.Dapps,h.StoreKeys.Dappsproviders,h.StoreKeys.Campaigns,h.StoreKeys.Fiat,h.StoreKeys.Notifications,h.StoreKeys.Chains],migrate:s.e},u=!1,m=(0,l.OJ)(g,(0,n.UY)(x.Z)),b=(0,o.xC)({reducer:m,middleware:[...(0,o.Bx)({thunk:!0,serializableCheck:!1}),i.k],devTools:u,enhancers:u?[(0,d.ZP)({realtime:!0,port:8e3,hostname:"localhost"})]:[]}),w=(0,l.p5)(b),j=b;a()}catch(e){a(e)}}))},233884:(e,t,r)=>{r.d(t,{Ji:()=>o,O2:()=>s,OK:()=>f,P2:()=>d,PB:()=>p,U6:()=>i,xX:()=>c});var a=r(818117),n=r(744736);const o=(e=1)=>a.F4` 
  from {
    opacity: 0;
  }

  to {
    opacity: ${e};
  }
`,i=(e=1)=>a.F4`
from {
    opacity: ${e};
  }

  to {
    opacity: 0;
  }
`,s=(a.F4`
  0%, 80%, 100% { 
    transform: scale(0);
  } 40% { 
    transform: scale(1.0);
  }
`,a.F4`
    100%{
        transform: rotate(360deg);
    }
`),l=a.F4`
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
`,c=a.F4`
  from {
      transform: translateY(100%)
    }
    to {
      transform: translateY(0)
    }
  `,d=a.F4`
  0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
`,p=a.F4`
    0% {
      transform: translateX(0%);
    }

    60% {
      transform: translateX(60%);
    }

    100% {
      transform: translateX(100%);
    }
`,x=a.F4`
  0% {
    opacity: 1;
    transform: translateX(0);
  }
  50% {
    opacity: 0.5;
    transform: translateX(-50%);
  }
  100% {
    opacity: 0;
    transform: translateX(-100%);
  }
`,h=a.F4`
  0% {

    padding: 16px 0;
   
  }
  
  100% {
    height: 0;
    padding: 0;
    visibility: hidden;
  }
`,f={A1:()=>a.iv`
    ${a.F4`
  from {
    transform: translateY(100%)
  }
  to {
    transform: translateY(0)
  }
`} 0.4s ${n.k.A2}
  `,A2:()=>a.iv`
    ${a.F4`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(100%)
  }
`} 0.2s ${n.k.A3}
  `,A3:a.iv`
    ${l} ${n.u.A3}
  `,A4:e=>a.iv`
    ${o(e)} 0.4s ${n.k.A2}
  `,A5:e=>a.iv`
    ${i(e)} 0.2s ${n.k.A3}
  `,A6:()=>a.iv`
    ${a.F4`
  from {
    transform: translateY(-100%)
  }
  to {
    transform: translateY(0)
  }
`} 0.4s ${n.k.A2}
  `,A7:()=>a.iv`
    ${a.F4`
  from {
    transform: translateY(0)
  }
  to {
    transform: translateY(-100%)
  }
`} 0.2s ${n.k.A3}
  `,A8:a.iv`
    ${x} 0.3s  ${n.k.A3} 0s forwards
  `,A9:a.iv`
    ${h} 0.3s ${n.k.A3} 0.3s forwards
  `}},137720:(e,t,r)=>{r.d(t,{B:()=>n,w:()=>a});const a={darkBlue:"#071a58",deepSea:"#172777",blue:"#2041E0",oceanBlue:"#4476F2",babyBlue:"#9ECAFF",blueHue:"#ecf1fd",solidBlack:"#000000",cynicalBlack:"#111314",black:"#1c1e1f",mineShaft:"#252829",charcoal:"#2e3133",ash:"#383b3d",scorpion:"#4b4f52",darkGrey:"#969da3",midGrey:"#c0c5cc",white:"#ffffff",nightOcean:"#0b1114",darkSteel:"#30363B",steel:"#32404D",darkRed:"#890505",wineRed:"#b92500",red:"#de350b",midRed:"#ff7452",lightRed:"#ffbdad",redHue:"#ffbdad",deepYellow:"#ff8b00",yellow:"#ffc400",warningYellow:"#fff78a",banana:"#ffe380",lightYellow:"#fff0b3",yellowHue:"#fffae6",deepGreen:"#006644",green:"#00875a",lime:"#36b37e",lightGreen:"#79f2c0",greenHue:"#e3fcef"},n={primary:{colors:{active_dark:"rgba(158,202,255,0.10)"},states:{secondary_hover:"var(--primary-states-secondary-hover, linear-gradient(0deg, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.45) 100%), #1C2C3B)"}},border:{green:"rgba(54,179,126,0.50)",yellow:"rgba(255,196,0,0.50)",blue:"rgba(158,202,255,0.50)"},text:{midGrey:"rgba(255,255,255,0.80)",error_text:"#FF99A0"},hover:{accent_hover:"#CCDEFF"},backgrounds:{surface_warning:"#575532",surface_error:"var(--new-bg-surface-error, linear-gradient(0deg, rgba(255, 128, 136, 0.30) 0%, rgba(255, 128, 136, 0.30) 100%), #15151A)",surface_info:"var(--new-bg-surface-info, linear-gradient(0deg, rgba(144, 168, 213, 0.32) 0%, rgba(144, 168, 213, 0.32) 100%), #15151A)"}}},876777:(e,t,r)=>{r.d(t,{$T:()=>s.$,Bl:()=>a.B,MI:()=>l.M,O2:()=>d.O2,OK:()=>d.OK,Q2:()=>n.Q,fo:()=>o.f,kV:()=>i.k,ki:()=>c.k,uT:()=>i.u,wL:()=>a.w});var a=r(137720),n=r(296588),o=r(398709),i=r(744736),s=r(660439),l=r(634047),c=r(791572),d=r(233884)},945192:(e,t,r)=>{e.exports=r.p+"d325d1f81485894ab506.svg"},278155:(e,t,r)=>{e.exports=r.p+"7526221f74d746f7a00f.svg"},53880:(e,t,r)=>{e.exports=r.p+"8926f60b904410363b80.png"},878559:(e,t,r)=>{e.exports=r.p+"6b9d2a1a64abe0e40b5e.png"}}]);