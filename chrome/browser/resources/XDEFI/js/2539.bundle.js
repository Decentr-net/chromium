!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="cb8a4c8f-d79c-4c04-a261-c5dbf0dbc843",e._sentryDebugIdIdentifier="sentry-dbid-cb8a4c8f-d79c-4c04-a261-c5dbf0dbc843")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[2539],{944362:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(785893),r=a(50533),i=a(764079),o=a(556138),s=a(771341);const l=({walletId:e,scale:t=1})=>{var a,l;const{wallets:d}=(0,r.v9)((e=>e.wallets));switch(null==(l=null==(a=d[e])?void 0:a.walletInfo)?void 0:l.type){case o.WalletType.Ledger:return(0,n.jsx)(s.pN,{width:11*t,height:17*t,color:"white"});case o.WalletType.Trezor:return(0,n.jsx)("img",{src:i.sv.toString(),style:{width:14*t,height:14*t},alt:"Wallet Icon"});case o.WalletType.Keystore:default:{const e=i.m.toString();return(0,n.jsx)("img",{src:e,style:{width:11*t,height:16*t},alt:"Wallet Icon"})}}}},996176:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>h});var r=a(785893),i=a(50533),o=a(475799),s=a(308787),l=a(818117),d=a(944362),c=e([s]);s=(c.then?(await c)():c)[0];const h=({walletId:e,scale:t=1,dotSize:a=8})=>{const{wallets:n}=(0,i.v9)((e=>e.wallets));return(0,r.jsxs)(s.FlexBox,{position:"relative",pl:3,children:[(0,r.jsx)(u,{width:a,height:a,"data-testid":"walletDot",bg:(0,o.AI)(n,e)}),(0,r.jsx)(d.Z,{walletId:e,scale:t})]})},u=(0,l.ZP)(s.FlexBox)`
  left: 0;
  position: absolute;
  border-radius: 50%;
`;n()}catch(e){n(e)}}))},992782:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>v});var r=a(785893),i=a(996176),o=a(626423),s=a(561277),l=a(458038),d=a(667294),c=a(308787),h=a(818117),u=a(281672),x=a(463193),p=e([i,c,u,x]);[i,c,u,x]=p.then?(await p)():p;const g=({account:e,chainId:t,onClick:a})=>{var n,h;const p=(0,u.fU)(),g=(0,d.useMemo)((()=>{var a;return null==(a=e.chainData[t])?void 0:a.address}),[e.chainData,t]),v=(0,o.WG)(p.getChainControllerById(t),Object.keys(null!=(h=(null==(n=e.chainData[t])?void 0:n.nft)||{})?h:{})),w=(0,d.useMemo)((()=>v?`${v} NFT${v>1?"s":""}`:null),[v]);return(0,r.jsxs)(m,{onClick:()=>a({toAddress:g,accountId:e.id}),"data-testid":"accountRow",children:[(0,r.jsx)(i.Z,{walletId:e.id,scale:1.5,dotSize:9}),(0,r.jsx)(f,{"data-testid":"accountName",children:(0,r.jsx)(s.Z,{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",children:e.label})}),(0,r.jsxs)(c.FlexBox,{alignItems:"flex-end",ml:3,children:[(0,r.jsx)(s.Z,{children:(0,r.jsx)(x.p,{chainId:t,walletId:e.id,withCurrencyName:!1})}),w&&(0,r.jsx)(l.Z,{children:w})]})]})},m=(0,h.ZP)(c.FlexBox).attrs({justifyContent:"space-between",flexDirection:"row",alignItems:"center"})`
  cursor: pointer;
  height: 48px;
  padding: 0 8px;
  border-bottom: 1px dashed ${({theme:e})=>e.palette.container.divider};
`,f=(0,h.ZP)(c.FlexBox).attrs({ml:12,flex:1})`
  overflow: hidden;
  text-align: left;
`,v=(0,d.memo)(g);n()}catch(e){n(e)}}))},386032:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>h});var r=a(785893),i=a(667294),o=a(281672),s=a(818117),l=e([o]);o=(l.then?(await l)():l)[0];const d=({chainId:e})=>{const t=(0,o.fU)(),a=(0,i.useMemo)((()=>t.getChainControllerById(e)),[t,e]);return(0,r.jsx)(c,{src:a.getConfig().image,"data-testid":"chainIcon"})},c=s.ZP.img`
  width: ${({$small:e})=>e?12:22}px;
  height: ${({$small:e})=>e?12:22}px;
`,h=d;n()}catch(e){n(e)}}))},98875:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{U:()=>k});var r=a(785893),i=a(496486),o=a(308787),s=a(667294),l=a(287536),d=a(230811),c=a(646284),h=a(771341),u=a(818117),x=a(304904),p=e([o,c]);[o,c]=p.then?(await p)():p;var g=Object.defineProperty,m=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&w(e,a,t[a]);if(m)for(var a of m(t))v.call(t,a)&&w(e,a,t[a]);return e};const y=(0,u.ZP)(o.FlexBox).attrs({flexDirection:"row",gridGap:8})`
  margin-top: 8px;
`,j=(0,u.ZP)(o.SmallInputField)`
  width: 96px;
`,I=(0,u.ZP)(o.SmallInputField)`
  flex: 1;
  overflow: hidden;
`,C=(0,u.ZP)(c.AddressInput)`
  flex: 1;
  overflow: hidden;
`,Z=u.ZP.div`
  margin-top: 24px;
`,P=(0,u.ZP)(o.FlexBox).attrs({flexDirection:"row",alignItems:"end",gridGap:8})`
  margin-top: 8px;
  margin-left: 104px;
`,k=({index:e,defaultValue:t,chainFieldIndex:a,errors:n,onDelete:c,supportsMemo:u,chainId:p})=>{var g,m;const{register:f,setValue:v,control:w}=(0,l.Gc)(),{t:k}=(0,d.$G)("app"),{checkAddress:B}=(0,x.n)(),[_,F]=(0,s.useState)(),[L,S]=(0,s.useState)(!!t.memo),$=`chainList[${a}].addressList[${e}]`,A=(0,s.useCallback)((0,i.debounce)((e=>{F(B(e.target.value,p))}),500),[B,p]),T=(0,s.useCallback)((()=>{S(!0)}),[]),D=(0,s.useCallback)((()=>{c(e)}),[e,c]),O=(0,s.useCallback)((()=>{v(`${$}.memo`,void 0,{shouldDirty:!0}),S(!1)}),[$,v]);return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(y,{"data-testid":"addressRow",children:[(0,r.jsx)(j,b({type:"text",label:k("contact_address_item.label"),errorMsg:null==(g=null==n?void 0:n.label)?void 0:g.message,dataTestId:"labelFld"},f(`${$}.label`))),(0,r.jsx)(l.Qr,{name:`${$}.address`,control:w,render:({field:{onChange:e,onBlur:t,value:a,name:i,ref:o}})=>{var s;return(0,r.jsx)(C,{type:"text",name:i,label:k("contact_address_item.address_label"),inputRef:o,autoFocus:!0,errorMsg:null==(s=null==n?void 0:n.address)?void 0:s.message,warningMsg:_,value:a,onChange:t=>{e(t),A(t)},onBlur:t,dataTestId:"addressFld",chainId:p,variant:"sm"})}}),(0,r.jsx)(Z,{children:(0,r.jsx)(o.HoverButton,{onClick:D,Icon:(0,r.jsx)(h.XH,{}),dataTestId:"deleteBtn",label:k("general.delete")})})]}),u&&(0,r.jsx)(P,{children:L?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(I,b({type:"text",dataTestId:"memoInput",autoFocus:!0,errorMsg:null==(m=null==n?void 0:n.memo)?void 0:m.message,defaultValue:t.memo},f(`${$}.memo`))),(0,r.jsx)(o.HoverButton,{onClick:O,dataTestId:"deleteMemoBtn",Icon:(0,r.jsx)(h.XH,{}),label:k("general.delete_memo")})]}):(0,r.jsx)(o.SecondaryButton,{onClick:T,StartIcon:h.pO,dataTestId:"addMemoBtn",children:k("contact_address_item.add_memo")})})]})};n()}catch(e){n(e)}}))},646817:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{o:()=>p});var r=a(785893),i=a(876777),o=a(308787),s=a(818117),l=a(771341),d=a(399922),c=a(667294),h=e([o]);o=(h.then?(await h)():h)[0];const u=(0,s.ZP)(o.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  border-radius: 100%;
  height: 38px;
  width: 38px;
  background: ${i.wL.charcoal};
  box-shadow: 0 1px 3px 1px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
  cursor: pointer;
  position: relative;
  margin-top: 22px;
  margin-right: 2px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({$imageUrl:e})=>e});

  :hover {
    background-color: ${i.wL.solidBlack};
  }
`,x=(0,s.ZP)(o.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  border-radius: 100%;
  height: 16px;
  width: 16px;
  background: ${i.wL.darkSteel};
  box-shadow: 0 4px 8px 3px rgba(0, 0, 0, 0.15), 0 1px 3px rgba(0, 0, 0, 0.3);
  position: absolute;
  top: -2px;
  right: -2px;
`,p=({value:e,onChange:t})=>{const[a,n]=(0,c.useState)(!1);return(0,r.jsxs)(u,{onClick:()=>{return e=void 0,a=null,n=function*(){try{const e=yield(0,d.nL)(),a=yield(0,d.Mb)(256,256,e);t(a)}catch(e){}},new Promise(((t,r)=>{var i=e=>{try{s(n.next(e))}catch(e){r(e)}},o=e=>{try{s(n.throw(e))}catch(e){r(e)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(i,o);s((n=n.apply(e,a)).next())}));var e,a,n},$imageUrl:a?"":e,onMouseEnter:()=>n(!0),onMouseLeave:()=>n(!1),children:[!a&&(0,r.jsx)(x,{children:(0,r.jsx)(l.dY,{color:i.wL.white,width:12,height:12})}),a?(0,r.jsx)(l.dY,{color:i.wL.white}):e?null:(0,r.jsx)(l.Kq,{color:i.wL.white})]})};n()}catch(e){n(e)}}))},451605:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>C});var r=a(785893),i=a(458233),o=a(108363),s=a(308787),l=a(667294),d=a(287536),c=a(230811),h=a(281672),u=a(771341),x=a(818117),p=a(244586),g=a(691438),m=a(764079),f=a(522933),v=a(697211),w=e([s,h,v]);[s,h,v]=w.then?(await w)():w;const b=x.ZP.div`
  margin-top: 32px;
`,y=(0,x.ZP)(s.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between"})``,j=x.ZP.img`
  height: 20px;
  width: 20px;
  margin-right: 8px;
`,I=(0,x.ZP)(s.FlexBox).attrs({flexDirection:"row"})``,C=({chainFieldIndex:e,chainId:t,onDelete:a})=>{const{t:n}=(0,c.$G)("app"),x=(0,h.fU)().getChainControllerById(t),w=x.getType()===g.J.Evm,{control:C,formState:{errors:Z}}=(0,d.Gc)(),{fields:P,append:k,remove:B}=(0,d.Dq)({control:C,name:`chainList[${e}].addressList`,shouldUnregister:!0}),_=(0,i.I)(P),F=(0,l.useCallback)((()=>{k({uuid:(0,p.Z)(),label:`${w?"EVM":x.getConfig().chainSymbol} ${_.current.length+1}`,address:"",chainId:t},{shouldFocus:!1})}),[k,w,x,_,t]),L=(0,l.useCallback)((t=>{B(t),1===_.current.length&&a(e)}),[B,_,a,e]);return(0,r.jsxs)(b,{"data-testid":"chainBlock",children:[(0,r.jsxs)(y,{children:[(0,r.jsxs)(I,{children:[(0,r.jsx)(j,{src:w?m.yF.toString():x.getConfig().image,alt:x.getConfig().shortName}),(0,r.jsx)(o.Z,{dataTestId:"chainName",children:w?n("select_chains.ethereum_and_evms"):(0,f.fm)(x.getConfig().longName)})]}),(0,r.jsx)(s.HoverButton,{onClick:F,Icon:(0,r.jsx)(u.pO,{}),label:n("general.add"),dataTestId:"addBtn"})]}),P.map(((a,n)=>{var i,o,s;return(0,r.jsx)(v.U,{index:n,chainFieldIndex:e,defaultValue:a,errors:null==(s=null==(o=null==(i=Z.chainList)?void 0:i[e])?void 0:o.addressList)?void 0:s[n],onDelete:L,supportsMemo:x.support(g.B.Memo),chainId:t},a.id)}))]})};n()}catch(e){n(e)}}))},49563:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{o:()=>g});var r=a(785893),i=a(831352),o=a(667294),s=a(783150),l=a(230811),d=a(764079),c=a(691438),h=a(281672),u=a(626423),x=a(24854),p=e([s,h]);[s,h]=p.then?(await p)():p;const g=({onChange:e,chainList:t,combineEVM:a=!0})=>{const n=(0,h.fU)(),{t:p}=(0,l.$G)("app"),g=(0,o.useMemo)((()=>{if(t&&t.length>0)return t.map((e=>{const t=n.getChainControllerById(e);return{key:t.getId(),label:t.getConfig().longName,logo:t.getConfig().image}}));let e=[];if(a){e=[{key:n.getChainControllerById((0,u.Bw)(i.yp.Ethereum)).getId(),label:p("select_chains.ethereum_and_evms"),logo:d.XV.toString()},...n.getAllChainControllers().filter((e=>e.getType()!==c.J.Evm)).map((e=>({key:e.getId(),label:e.getConfig().longName,logo:e.getConfig().image})))]}else e=n.getAllChainControllers().map((e=>({key:e.getId(),label:e.getConfig().longName,logo:e.getConfig().image})));return e}),[t,n,a,p]);return(0,r.jsx)(s.Z,{items:g,onSelect:t=>e(t.key),placeholder:p("contact_form.choose_network"),openFromModal:!0,dataTestId:"chainFilter",triggerBgColor:x.A.Black})};n()}catch(e){n(e)}}))},531520:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{t:()=>A});var r=a(785893),i=a(616310),o=a(287536),s=a(818117),l=a(308787),d=a(108363),c=a(304904),h=a(894900),u=a(591757),x=a(230811),p=a(878612),g=a(501605),m=a(417455),f=e([l,u,p,g,m]);[l,u,p,g,m]=f.then?(await f)():f;var v=Object.defineProperty,w=Object.defineProperties,b=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable,C=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Z=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&C(e,a,t[a]);if(y)for(var a of y(t))I.call(t,a)&&C(e,a,t[a]);return e};i.kM(i.IX,"unique",(function(e,t){return this.test("unique",t,(function(a){if(!a||!a.length)return!0;const n=Array.from(new Set(a.map((t=>{var a;return null==(a=t[e])?void 0:a.toLowerCase()}))));if(a.length===n.length)return!0;const r=a.findIndex(((t,a)=>{var r;return(null==(r=t[e])?void 0:r.toLowerCase())!==n[a]}));return""===a[r][e]||this.createError({path:`${this.path}.${r}.${e}`,message:t})}))}));const P=(0,s.ZP)(h.Z)`
  padding: 8px 8px 0 8px;
  margin-bottom: 8px;
  flex: 1;
  min-height: 462px;
  max-height: 462px;
`,k=s.ZP.div`
  padding-bottom: 8px;

  :last-child {
    padding-bottom: 16px;
  }
`,B=s.ZP.form`
  display: flex;
  flex-direction: column;
  height: 100%;
`,_=(0,s.ZP)(l.FlexBox).attrs({alignItems:"start",flexDirection:"row",justifyContent:"space-between",gridGap:16,p:"12.5px 10px 30px 0px"})``,F=(0,s.ZP)(l.InputField)`
  flex: 1;
`,L=s.ZP.div`
  margin-left: 8px;
`,S=s.ZP.div`
  margin-top: 6px;
`,$=(0,s.ZP)(l.FlexBox).attrs({alignItems:"center",flexDirection:"row",justifyContent:"space-between",gridGap:8})`
  width: 100%;
  padding: 16px 8px;
  box-shadow: 0px -1px 3px 1px rgba(0, 0, 0, 0.15),
    0px -1px 2px rgba(0, 0, 0, 0.3);
`,A=({onClose:e,onSubmit:t,defaultValues:a})=>{const{t:n}=(0,x.$G)("app"),{formMethods:i,processedContactList:s,handleChainSelect:h,fields:f,handleDeleteChainItem:v}=(0,u.u)(a);return(0,r.jsx)(o.RV,(y=Z({},i),j={children:(0,r.jsx)(c.G,{contactList:s,children:(0,r.jsxs)(B,{onSubmit:i.handleSubmit(t),children:[(0,r.jsxs)(P,{children:[(0,r.jsxs)(_,{children:[(0,r.jsx)(o.Qr,{name:"name",control:i.control,render:({field:e,fieldState:t})=>{var a;return(0,r.jsx)(F,Z({type:"text",label:n("contact_form.name"),autoFocus:!0,errorMsg:null==(a=t.error)?void 0:a.message,dataTestId:"nameFld"},e))}}),(0,r.jsx)(o.Qr,{name:"profileImage",control:i.control,render:({field:e})=>(0,r.jsx)(m.o,{onChange:e.onChange,value:e.value})})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)(L,{children:(0,r.jsx)(d.Z,{children:n("contact_form.title")})}),(0,r.jsx)(S,{children:(0,r.jsx)(p.o,{placeholder:n("contact_form.choose_network"),onChange:h})})]}),(0,r.jsx)(k,{children:f.map(((e,t)=>(0,r.jsx)(g.Z,{chainFieldIndex:t,chainId:e.chainId,onDelete:v},e.id)))})]}),(0,r.jsxs)($,{children:[(0,r.jsx)(l.SecondaryButton,{onClick:e,disabled:i.formState.isSubmitting,dataTestId:"cancelBtn",fullWidth:!0,children:n("general.cancel")}),(0,r.jsx)(l.PrimaryButton,{disabled:!i.formState.isValid||i.formState.isSubmitting,type:"submit",dataTestId:"saveBtn",fullWidth:!0,children:n("general.save")})]})]})})},w(y,b(j))));var y,j};n()}catch(e){n(e)}}))},293709:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893),a(667294),a(230811);var n=a(556071),r=e([n]);n=(r.then?(await r)():r)[0];t()}catch(e){t(e)}}))},847384:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>j});var r=a(785893),i=a(834392),o=a(789529),s=a(299246),l=a(667294),d=a(230811),c=a(50533),h=a(308787),u=a(674990),x=a(412252),p=a(650511),g=a(561277),m=a(646284),f=a(605930),v=a(281672),w=a(883660),b=e([o,h,m,v,w]);[o,h,m,v,w]=b.then?(await b)():b;const y=({currentAsset:e,getBalance:t,disabled:a,onChangeAmount:n,amount:b,amountError:y,onMaxClicked:j,chainId:I,detrimentalUTXORemove:C})=>{const{fiatValue:Z}=(0,o.Z)(I,e,b),P=(0,c.v9)((t=>{const a=t.wallets.activeWalletId;return t.balances[a].chains[e.chainId]})),k=(0,v.fU)(),{t:B}=(0,d.$G)("app"),[_,F]=(0,l.useState)(0),L=(0,l.useMemo)((()=>k.getChainControllerById(e.chainId)),[k,e.chainId]);return(0,l.useEffect)((()=>{var a,n;let r=Number(t(e));(null==e?void 0:e.isToken)||(r=(0,f.Ug)(Number(r),L.getType(),null==(n=null==(a=L.getConfig())?void 0:a.network)?void 0:n.chainId)),r<0&&(r=0),F(r)}),[t,e,P]),(0,r.jsxs)(h.FlexBox,{pb:8,pt:8,children:[(0,r.jsxs)(h.FlexBox,{pl:16,pr:8,height:32,flexDirection:"row",alignItems:"center",justifyContent:"space-between",children:[(0,r.jsxs)(h.FlexBox,{flexDirection:"row",alignItems:"center",children:[(0,r.jsx)(x.Z,{children:B("amount_input.amount")}),C&&(0,r.jsx)(m.InfoHelper,{message:B("amount_input.detrimental_utxo")})]}),(0,r.jsx)(w.E,{disabled:a,onClick:j,dataTestId:"maxBtn",children:(0,r.jsx)(g.Z,{children:B("amount_input.max_amount",{amount:(0,s.pF)(_,i.j5,{trimTrailingZero:!0})})})})]}),(0,r.jsx)(w._,{autoFocus:!0,textAlign:u.P.Right,value:b,onChange:n,disabled:a,tipError:y,placeholder:"0.0",dataTestId:"amountFld"}),(0,r.jsx)(h.FlexBox,{mt:4,ml:16,"data-testid":"fiatAmount",children:(0,r.jsx)(p.Z,{children:Z})})]})},j=(0,l.memo)(y);n()}catch(e){n(e)}}))},694441:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>P});var r=a(785893),i=a(667294),o=a(996176),s=a(386032),l=a(103821),d=a(356308),c=a(561277),h=a(458038),u=a(650511),x=a(412252),p=a(230811),g=a(615735),m=a(281672),f=a(771341),v=a(308787),w=a(876777),b=a(930319),y=e([o,s,m,v,b]);[o,s,m,v,b]=y.then?(await y)():y;const j=({toAddress:e,accountId:t,contactName:a,chainId:n})=>{const{accountLabel:i}=(0,l.Z)(t);return t?(0,r.jsxs)(b.Uo,{children:[(0,r.jsx)(o.Z,{walletId:t,scale:1.5,dotSize:9}),(0,r.jsx)(v.FlexBox,{ml:16,maxWidth:260,children:(0,r.jsx)(h.Z,{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",dataTestId:"accountName",children:i})})]}):a?(0,r.jsx)(b.Uo,{children:(0,r.jsxs)(v.FlexBox,{ml:16,flexDirection:"row",gridGap:8,alignItems:"center",maxWidth:280,children:[(0,r.jsx)(h.Z,{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",dataTestId:"contactName",children:a}),(0,r.jsx)(d.ZP,{title:e,placement:"bottom",wordBreak:!0,arrow:!1,children:(0,r.jsx)(f.sz,{color:w.wL.darkGrey,"data-testid":"contactInfoIcon"})}),(0,r.jsx)(s.Z,{chainId:n})]})}):(0,r.jsx)(v.FlexBox,{ml:16,maxWidth:320,children:(0,r.jsx)(h.Z,{textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden",dataTestId:"toAddress",children:e})})},I=({currentAsset:e})=>{const t=(0,i.useMemo)((()=>e.image),[e.image,e.symbol]);return(0,r.jsx)(b.Y_,{dataTestId:"tokenIcon",icons:t?[t]:[],symbol:e.symbol})},C=({currentAsset:e})=>{const t=(0,m.JB)().getNFTIcons(e.chainId,e.collectible.nftItem),{icon:a}=(0,g.K)(t);return a?(0,r.jsx)(b.Ee,{src:a,alt:"image"}):(0,r.jsx)(f.Lo,{height:16,width:16})},Z=({chainId:e,toAddress:t,currentAsset:a,accountId:n,contactName:o})=>{var s;const{t:l}=(0,p.$G)("app"),d=(0,m.fU)(),h=(0,i.useMemo)((()=>d.getChainControllerById(e)),[d,e]);return(0,r.jsxs)(v.FlexBox,{children:[(0,r.jsxs)(b.MA,{children:[(0,r.jsxs)(x.Z,{children:[" ",l("asset_info.to")]}),(0,r.jsx)(j,{toAddress:t,accountId:n,contactName:o,chainId:e})]}),(0,r.jsxs)(b.MA,{children:[(0,r.jsx)(x.Z,{children:l("asset_info.asset")}),(0,r.jsxs)(v.FlexBox,{flexDirection:"row",children:[a.collectible?(0,r.jsx)(C,{currentAsset:a}):(0,r.jsx)(I,{currentAsset:a}),(0,r.jsxs)(v.FlexBox,{ml:12,children:[(0,r.jsx)(c.Z,{children:a.symbol}),(0,r.jsx)(u.Z,{children:null==(s=h.getConfig().longName||h.getConfig().shortName)?void 0:s.toUpperCase()})]})]})]})]})},P=(0,i.memo)(Z);n()}catch(e){n(e)}}))},726546:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893),a(230811);var n=a(556071),r=e([n]);n=(r.then?(await r)():r)[0];t()}catch(e){t(e)}}))},639923:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893);var n=a(308787),r=a(818117),i=(a(230811),a(556071)),o=e([n,i]);[n,i]=o.then?(await o)():o;r.ZP.div`
  padding-top: 10px;
  width: 100%;
  ${({shorter:e})=>e&&r.iv`
      height: 49px;
    `}
`,r.ZP.div`
  margin: 0 10px;
`;t()}catch(e){t(e)}}))},162318:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>P});var r=a(785893),i=a(225071),o=a(244431),s=a(177011),l=a(834392),d=a(299246),c=a(522933),h=a(281672),u=a(458038),x=a(650511),p=a(394294),g=a(421753),m=a(667294),f=a(230811),v=a(50533),w=a(308787),b=a(729154),y=a(111897),j=a(505403),I=a(446527),C=e([s,h,w,j,I]);[s,h,w,j,I]=C.then?(await C)():C;const Z=({action:e,displayAmount:t,from:a,to:n,defaultIcon:C,isTokenTransfer:Z,chainId:P,assetSymbol:k="ETH",children:B,height:_="fit-content",hasExplorer:F=!1,txId:L,footer:S,fee:$,url:A,visibleTransactionAmount:T=!0,withPaddings:D})=>{var O,M,N,E;const{t:U}=(0,f.$G)("app"),R=(0,h.fU)(),G=(0,m.useMemo)((()=>R.getChainControllerById(P)),[P]),{getFiat:W}=(0,j.Z)(),{activeWalletId:V,wallets:q}=(0,v.v9)((e=>e.wallets)),z=a||(null==(M=null==(O=q[V])?void 0:O.chainData[P])?void 0:M.address),H=(null==(E=null==(N=q[V])?void 0:N.chainData[P])?void 0:E.tokens)||{},X=Z&&H[null==k?void 0:k.toUpperCase()]||{},J=(0,m.useCallback)((e=>{const t=(0,y.Kw)(G,e);t&&window.open(t,"_blank")}),[G]);return(0,r.jsxs)(I.W2,{withPaddings:D,children:[(0,r.jsxs)(I.rg,{noShadow:!0,withPaddings:D,variant:"default",children:[(0,r.jsxs)(I.X2,{children:[(0,r.jsxs)(w.FlexBox,{justifyContent:"center",flexDirection:"row",alignItems:"center",gridGap:8,children:[Z||C?(0,r.jsx)(I.Y_,{"data-testid":"chainImg",src:Z?i.toString():C}):(0,r.jsx)(w.Avatar,{text:G.getConfig().longName,size:"xs"}),(0,r.jsxs)(u.Z,{children:[(0,c.eP)(X.name||G.getConfig().longName)," "]})]}),(0,r.jsx)(I.aU,{children:(0,r.jsx)(g.Z,{children:e})})]}),(0,r.jsxs)(I.kI,{children:[(0,r.jsxs)(I.Rd,{children:[(0,r.jsx)(I.Dx,{children:(0,r.jsx)(p.Z,{children:U("tx_layout.from")})}),(0,r.jsx)(I.mR,{"data-testid":"fromAccount",children:(0,r.jsx)(u.Z,{dataTestId:"fromAccount",children:(0,c.fL)(s.Z.getLabel(z,P),4,4)})}),z&&(0,r.jsx)(I.kb,{"data-testid":"fromAddress",onClick:()=>J(z),children:(0,r.jsx)(x.Z,{children:(0,c.fL)(z,4,4)})})]}),(0,r.jsxs)(I.xN,{children:[(0,r.jsx)(I.Dx,{children:(0,r.jsx)(p.Z,{children:U("tx_layout.with")})}),n&&(0,r.jsx)(I.kL,{"data-testid":"withAddress",onClick:()=>J(n),children:(0,r.jsx)(u.Z,{children:(0,c.fL)(n||"",4,4)})}),(0,r.jsx)(I.Jx,{onClick:()=>window.open(A,"_blank"),children:(0,r.jsx)(I.rU,{dataTestId:"withUrl",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",children:A})})]}),(0,r.jsxs)(I.jp,{visible:T,children:[(0,r.jsx)(I.Dx,{children:(0,r.jsx)(p.Z,{children:U("tx_layout.tx_amount")})}),(0,r.jsx)(I.xR,{children:(0,r.jsx)(u.Z,{dataTestId:"txAmountCrypto",children:`${(0,d.pF)(""!==t?Number(t):$,l.DF,{trimTrailingZero:!0})} ${k}`})}),(0,r.jsx)(x.Z,{dataTestId:"txAmountFiat",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",children:W(P,new o.BigNumber(""!==t?Number(t):$),k)})]})]}),F&&(0,r.jsx)(I.fN,{onClick:()=>{const e=`${G.getConfig("network.transaction")}${L}`;window.open(e,"_blank")},dataTestId:"viewOnExplorerBtn",children:(0,r.jsx)(b.Z,{children:U("tx_layout.view_on_explorer")})})]}),B&&(0,r.jsx)(I.rg,{variant:"content",cardHeight:_,children:B}),S&&(0,r.jsx)(I.rg,{variant:"content",children:S})]})},P=(0,m.memo)(Z);n()}catch(e){n(e)}}))},557109:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{B:()=>w});var r=a(785893),i=a(818117),o=a(667294),s=a(308787),l=e([s]);s=(l.then?(await l)():l)[0];var d=Object.defineProperty,c=Object.defineProperties,h=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,x=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const m=(0,i.ZP)(s.FlexBox).attrs({flexDirection:"row"})``,f=i.ZP.div`
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  // ellipsis add extra space at end
  margin-right: -2px;
`,v=i.ZP.div`
  white-space: nowrap;
`,w=({end:e,value:t,className:a,alignItems:n,dataTestId:i})=>{const[s,l]=(0,o.useMemo)((()=>t?t.length<=e?[t,""]:[t.slice(0,-e),t.slice(-e)]:["",""]),[e,t]);return(0,r.jsxs)(m,(d=((e,t)=>{for(var a in t||(t={}))x.call(t,a)&&g(e,a,t[a]);if(u)for(var a of u(t))p.call(t,a)&&g(e,a,t[a]);return e})({className:a,"data-testid":i},{alignItems:n}),c(d,h({children:[(0,r.jsx)(f,{"data-testid":"left-part",children:s}),(0,r.jsx)(v,{"data-testid":"right-part",children:l})]}))));var d};n()}catch(e){n(e)}}))},994396:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Cd:()=>c,Mj:()=>d,QZ:()=>l});var r=a(818117),i=a(308787),o=a(876777),s=e([i]);i=(s.then?(await s)():s)[0];const l=r.ZP.div`
  overflow: overlay;
`,d=(0,r.ZP)(i.SearchInput)`
  padding: 8px 0;
  width: 100%;
  border-radius: 8px;
  font-size: 14px;
`,c=((0,r.ZP)(i.FlexBox).attrs({px:16})`
  transition: ${o.uT.A4};
  &:hover {
    background-color: ${({theme:{palette:e}})=>e.container.hover};
  }
`,r.ZP.div`
  padding-bottom: 8px;
  border-bottom: 1px solid ${o.wL.black};
`);n()}catch(e){n(e)}}))},811601:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{x:()=>u});var r=a(75224),i=a(252746),o=a(664837),s=a(239216),l=a(246858),d=a(667294),c=a(230811),h=e([o,s]);[o,s]=h.then?(await h)():h;const u=e=>{const{t}=(0,c.$G)("app"),a=(0,s.h)(e),n=(0,o.Z)(),[h,u]=(0,d.useState)(""),[x,p]=(0,d.useState)(l.n.Off),[g,m]=(0,d.useState)(l.n.Off),[f,v]=(0,d.useState)(a),w=(0,d.useMemo)((()=>{switch(x){case l.n.Off:return()=>0;case l.n.Up:return(e,t)=>{var a,n;return(null==(a=e.label)?void 0:a.toLowerCase())>(null==(n=t.label)?void 0:n.toLowerCase())?1:-1};case l.n.Down:return(e,t)=>{var a,n;return(null==(a=e.label)?void 0:a.toLowerCase())<(null==(n=t.label)?void 0:n.toLowerCase())?1:-1}}}),[x]),b=(0,d.useMemo)((()=>{switch(g){case l.n.Off:return()=>0;case l.n.Up:return(t,a)=>n.calcFiat(e,t.id)>n.calcFiat(e,a.id)?1:-1;case l.n.Down:return(t,a)=>n.calcFiat(e,t.id)<n.calcFiat(e,a.id)?1:-1}}),[n,e,g]),y=(0,d.useCallback)((t=>{let n=a.filter((e=>{var a;return null==(a=e.label)?void 0:a.toLowerCase().includes(null==t?void 0:t.toLowerCase())}));n=n.filter((t=>!!Object.keys(t.chainData).find((t=>t===e)))),v(n)}),[a,e]);(0,i.b)((()=>{y(h)}),r.l,[h]);const j=(0,d.useMemo)((()=>[{value:"account name",label:t("account.account_name")},{value:"balance",label:t("account.balance")}]),[t]),I=(0,d.useRef)(null);return{accountSortingOptions:j,accounts:f.sort(w).sort(b),keyword:h,handleChangeKeyword:({target:{value:e}})=>{u(e)},onSortChange:(e,t)=>{j[0].label===t?p(e):m(e)},sortAccountNameStatus:x,sortBalanceStatus:g,inputRef:I}};n()}catch(e){n(e)}}))},697211:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{U:()=>r.U});var r=a(98875),i=e([r]);r=(i.then?(await i)():i)[0],n()}catch(e){n(e)}}))},417455:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{o:()=>r.o});var r=a(646817),i=e([r]);r=(i.then?(await i)():i)[0],n()}catch(e){n(e)}}))},501605:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>r.Z});var r=a(451605),i=e([r]);r=(i.then?(await i)():i)[0],n()}catch(e){n(e)}}))},878612:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{o:()=>r.o});var r=a(49563),i=e([r]);r=(i.then?(await i)():i)[0],n()}catch(e){n(e)}}))},304904:(e,t,a)=>{a.d(t,{G:()=>o,n:()=>s});var n=a(785893),r=a(667294);const i=(0,r.createContext)({checkAddress:()=>{}}),o=({contactList:e,children:t})=>{const a=(0,r.useCallback)(((t,a)=>{const n=null==t?void 0:t.trim().toLowerCase(),r=e.find((e=>e.chainList.some((e=>e.addressList.some((e=>{var t;return(null==(t=e.address)?void 0:t.toLowerCase())===n&&a===e.chainId}))))));if(r)return`This address is already saved in your contacts under ${r.name}.`}),[e]),o=(0,r.useMemo)((()=>({checkAddress:a})),[a]);return(0,n.jsx)(i.Provider,{value:o,children:t})},s=()=>(0,r.useContext)(i)},58987:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{t:()=>r.t});var r=a(531520),i=e([r]);r=(i.then?(await i)():i)[0],n()}catch(e){n(e)}}))},591757:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{u:()=>m});var r=a(281672),i=a(287536),o=a(50533),s=a(667294),l=a(616310),d=a(802305),c=a(244586),h=a(670852),u=a(230811),x=a(691438),p=e([r]);r=(p.then?(await p)():p)[0];const g={name:"",profileImage:"",chainList:[]},m=e=>{const{t}=(0,u.$G)("app"),a=(0,h.I)(),n=(0,o.v9)((e=>e.wallets.contacts)),p=(0,s.useMemo)((()=>n.filter((t=>t.uuid!==(null==e?void 0:e.uuid)))),[n,null==e?void 0:e.uuid]),m=(0,r.fU)(),f=(0,s.useMemo)((()=>l.Ry({name:a.stringRequired("Name").test({test:e=>!p.some((t=>t.name===e)),message:t("validation.name_already_exists")}),profileImage:l.Z_(),chainList:l.IX(l.Ry({chainId:l.nK().oneOf(m.getAllChainControllerIds()).required(),addressList:l.IX(l.Ry({uuid:l.Z_().required(),chainId:l.nK().oneOf(m.getAllChainControllerIds()).required(),label:a.stringRequired("Label"),memo:l.Z_(),ENSName:l.Z_().nullable(),address:a.stringRequired("Address").test(((e,a)=>{if(!e)return!0;const n=m.getChainControllerById(a.parent.chainId);return!!n.validateAddress(e)||a.createError({message:t("validation.not_correct_chain_address",{chain:n.getConfig().shortName})})}))})).unique("label",t("validation.provide_a_unique_label")).unique("address",t("validation.provide_a_unique_address"))})).min(1,t("validation.add_at_least_1_network"))})),[m,p]),v=(0,i.cI)({mode:"onChange",resolver:(0,d.X)(f),defaultValues:e||g,shouldUnregister:!1}),{append:w,fields:b,remove:y}=(0,i.Dq)({control:v.control,name:"chainList",shouldUnregister:!0}),j=(0,s.useCallback)((e=>{const t=m.getChainControllerById(e),a=v.getValues("chainList"),n=a.findIndex((t=>t.chainId===e));if(-1===n)w({chainId:e,addressList:[{uuid:(0,c.Z)(),label:`${t.getType()===x.J.Evm?"EVM":t.getConfig().chainSymbol} 1`,address:"",chainId:e}]},{shouldFocus:!1});else{const r=a[n],i=`chainList[${n}].addressList`;v.setValue(i,[...r.addressList,{uuid:(0,c.Z)(),label:`${t.getType()===x.J.Evm?"EVM":t.getConfig().chainSymbol} ${r.addressList.length+1}`,address:"",chainId:e}])}}),[w,v.setValue]);return{formMethods:v,processedContactList:p,handleChainSelect:j,fields:b,handleDeleteChainItem:y}};n()}catch(e){n(e)}}))},864195:(e,t,a)=>{a.d(t,{l:()=>r});var n=a(244586);const r=(e,t)=>{return a=void 0,r=null,i=function*(){const a=Date.now();return{uuid:(null==t?void 0:t.uuid)||(0,n.Z)(),name:e.name.trim(),profileImage:e.profileImage,chainList:e.chainList,createdAt:(null==t?void 0:t.createdAt)||a,updatedAt:a}},new Promise(((e,t)=>{var n=e=>{try{s(i.next(e))}catch(e){t(e)}},o=e=>{try{s(i.throw(e))}catch(e){t(e)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,o);s((i=i.apply(a,r)).next())}));var a,r,i}},75224:(e,t,a)=>{a.d(t,{l:()=>n});const n=300},883660:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{E:()=>l,_:()=>d});var r=a(818117),i=a(308787),o=a(876777),s=e([i]);i=(s.then?(await s)():s)[0];const l=(0,r.ZP)(i.BaseButton)`
  border-radius: 8px;
  height: 100%;
  background: unset;
  transition: ${o.uT.A4};
`,d=(0,r.ZP)(i.InputField)`
  border-radius: 8px;
  text-align: right;
  height: 48px;
  padding-left: 8px;
  padding-right: 8px;
`;n()}catch(e){n(e)}}))},789529:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Z:()=>s});var r=a(667294),i=a(505403),o=e([i]);i=(o.then?(await o)():o)[0];const s=(e,t,a)=>{const{getFiat:n}=(0,i.Z)();return{fiatValue:(0,r.useMemo)((()=>n(e,a,t.symbol,t.address,t.id)),[a,t,e,n])}};n()}catch(e){n(e)}}))},930319:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Ee:()=>c,MA:()=>d,Uo:()=>u,Y_:()=>h});var r=a(818117),i=a(646284),o=a(308787),s=a(876777),l=e([i,o]);[i,o]=l.then?(await l)():l;const d=(0,r.ZP)(o.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between",height:50,px:8})`
  border-bottom: 1px dashed ${s.wL.black};
`,c=r.ZP.img`
  width: 24px;
  height: 24px;
`,h=(0,r.ZP)(i.AssetIcon)`
  width: 24px;
  height: 24px;
`,u=(0,r.ZP)(o.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"flex-end",flex:1,minWidth:0})``;(0,r.ZP)(o.FlexBox)`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;n()}catch(e){n(e)}}))},103821:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(50533);const r=e=>{var t;const{wallets:a}=(0,n.v9)((e=>e.wallets));return{accountLabel:e&&(null==(t=a[e])?void 0:t.label)}}},303108:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{W:()=>s});var r=a(818117),i=a(308787),o=e([i]);i=(o.then?(await o)():o)[0];const s=(0,r.ZP)(i.FlexBox)`
  padding: 8px;
  width: 100%;
`;n()}catch(e){n(e)}}))},556071:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{n:()=>s});var r=a(818117),i=a(308787),o=e([i]);i=(o.then?(await o)():o)[0];const s=(0,r.ZP)(i.InputField)`
  flex: 1;
  margin-left: ${({noIndents:e})=>e?0:"15px"};
  input[type='number'] {
    width: 60px;
  }
`;n()}catch(e){n(e)}}))},446527:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{Dx:()=>l,Jx:()=>x,Rd:()=>v,W2:()=>Z,X2:()=>g,Y_:()=>y,aU:()=>b,fN:()=>P,jp:()=>w,kI:()=>m,kL:()=>h,kb:()=>d,mR:()=>u,rU:()=>p,rg:()=>C,xN:()=>f,xR:()=>c});var r=a(818117),i=a(308787),o=a(458038),s=e([i]);i=(s.then?(await s)():s)[0];const l=r.ZP.div`
  text-transform: uppercase;
`,d=r.ZP.div`
  cursor: pointer;
`,c=r.ZP.div`
  width: max-content;
`,h=((0,r.ZP)(d)`
  white-space: nowrap;
`,r.ZP.div`
  cursor: pointer;
`),u=r.ZP.div`
  white-space: nowrap;
  width: calc(33vw - 44%);
  text-overflow: ellipsis;
  overflow: hidden;
`,x=r.ZP.div`
  width: calc(33vw - 9%);
`,p=(0,r.ZP)(o.Z)`
  text-decoration-line: underline;
  cursor: pointer;
`,g=(0,r.ZP)(i.FlexBox).attrs({justifyContent:"space-between",alignItems:"center",flexDirection:"row"})`
  width: 100%;
  height: 49px;
  border-bottom: 1px solid
    ${({theme:{palette:e}})=>e.container.divider};
`,m=(0,r.ZP)(g)`
  height: 72px;
`,f=(0,r.ZP)(i.FlexBox).attrs({justifyContent:"space-between",alignItems:"flex-start"})`
  padding-left: 10px;
  width: calc(80px + 10vw);
`,v=(0,r.ZP)(f)`
  width: calc(60px + 9vw);
  padding: 0;
`,w=(0,r.ZP)(f)`
  padding: 0;
  align-items: flex-end;
  flex: 2;
  display: ${({visible:e})=>e?"inherit":"none"};
`,b=r.ZP.div`
  text-transform: uppercase;
`,y=r.ZP.img.attrs({width:"17px",height:"17px",alt:"AssetIcon"})``,j=r.iv`
  margin-top: 10px;
  width: 100%;
  box-sizing: border-box;
  padding: 0 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  height: fit-content;
  position: relative;
`,I={content:j,default:r.iv`
  width: 100%;
  margin-top: 1px;
  box-sizing: border-box;
`},C=(0,r.ZP)(i.Card)`
  ${({variant:e})=>I[e]}

  ${({cardHeight:e})=>e&&"string"==typeof e?`height: ${e};`:`height: ${e}px;`}
  ${({withPaddings:e})=>e&&"padding: 0 10px;"}
`,Z=r.ZP.div`
  ${({withPaddings:e})=>e&&"padding: 0 10px 10px;"}
`,P=(0,r.ZP)(i.SecondaryButton)`
  margin: 25px 0;
  align-self: stretch;
`;n()}catch(e){n(e)}}))},252746:(e,t,a)=>{a.d(t,{b:()=>r});var n=a(667294);const r=(e,t=100,a)=>{const r=(0,n.useCallback)(e,a);(0,n.useEffect)((()=>{const e=setTimeout((()=>{r(a[0])}),t);return()=>{clearTimeout(e)}}),[r,t])}},239216:(e,t,a)=>{a.a(e,(async(e,n)=>{try{a.d(t,{h:()=>d});var r=a(281672),i=a(354061),o=a.n(i),s=a(50533),l=e([r]);r=(l.then?(await l)():l)[0];const d=e=>{const t=(0,s.v9)((e=>e.wallets.wallets)),a=(0,r.i_)();if(!e)return Object.values(t);const n=a.getRootWallets();return o()(n,((e,n)=>{const r=a.getAccountsWalletsIdByWallet(n.id);return e.concat(r.map((({walletId:e})=>t[e])))}),[])};n()}catch(e){n(e)}}))},399922:(e,t,a)=>{a.d(t,{Mb:()=>i,nL:()=>r});const n=["png","jpg","jpeg","gif"],r=(new RegExp(n.join("|"),"gi"),(...e)=>{return t=void 0,a=[...e],r=function*(e=n){const t=document.createElement("input");return t.type="file",t.accept=e.map((e=>`.${e}`)).join(","),new Promise(((e,a)=>{t.onchange=t=>{const n=t.target.files;if(!n)return void a();const r=Array.from(n);if(!r.length)return void a();const i=r[0];e(i)},t.click()}))},new Promise(((e,n)=>{var i=e=>{try{s(r.next(e))}catch(e){n(e)}},o=e=>{try{s(r.throw(e))}catch(e){n(e)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(i,o);s((r=r.apply(t,a)).next())}));var t,a,r}),i=(e,t,a)=>new Promise(((r,i)=>{if(n.includes(a.type))return void i("unsupported type");const o=new Image;o.src=URL.createObjectURL(a);const s=document.createElement("canvas"),l=s.getContext("2d");o.addEventListener("load",(()=>{const a=o.naturalWidth/o.naturalHeight;let n,d;if(a>1?(n=t,d=t/a):(d=e,n=e*a),s.width=n,s.height=d,!l)return void i("no context");l.drawImage(o,0,0,n,d);const c=s.toDataURL("image/jpeg");r(c)}))}))}}]);