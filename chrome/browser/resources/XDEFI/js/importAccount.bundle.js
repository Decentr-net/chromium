!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="0f7d1338-22d9-4661-8c9e-18e36de796da",e._sentryDebugIdIdentifier="sentry-dbid-0f7d1338-22d9-4661-8c9e-18e36de796da")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(()=>{"use strict";var e,t,a,r,s,n,o,i,l,c={234130:(e,t,a)=>{a.d(t,{_:()=>i});var r=a(876777),s=a(818117),n=a(667294);const o=s.ZP.a`
  color: ${r.wL.white};
`,i={b:n.createElement("strong",null),strong:n.createElement("strong",null),ol:n.createElement("ol",null),li:n.createElement("li",null),h3:n.createElement("h3",null),h4:n.createElement("h4",null),p:n.createElement("p",null),Link:n.createElement(o,null),u:n.createElement("u",null)}},50727:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Z:()=>C});var s=a(785893),n=a(308787),o=a(771341),i=a(818117),l=a(561277),c=a(458038),d=a(230811),p=a(287536),u=a(783251),h=e([n]);n=(h.then?(await h)():h)[0];var g=Object.defineProperty,m=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,w=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,x=(e,t)=>{for(var a in t||(t={}))y.call(t,a)&&w(e,a,t[a]);if(m)for(var a of m(t))f.call(t,a)&&w(e,a,t[a]);return e};const b=({open:e,description:t,labelPassword:a,labelCustomPassword:r,onClose:i,onSubmit:h})=>{var g,w;const{register:b,handleSubmit:C,errors:S,submitHandler:k,handleChangePassword:F,changePassword:I,passwordRef:$,control:Z}=(0,u.Z)(h,i,e),{t:T}=(0,d.$G)("app");return(0,s.jsx)(n.FloatingDialog,{open:e,onClose:i,Icon:(0,s.jsx)(o.zM,{}),iconLabel:t||T("backup_dialog.icon_label"),submitForm:"backup_form",children:(0,s.jsx)(n.FlexBox,{children:(0,s.jsxs)(v,{onSubmit:e=>{e.preventDefault(),C(k)(e)},id:"backup_form",children:[(0,s.jsx)(n.FlexBox,{mb:16,px:8,children:(0,s.jsx)(l.Z,{children:T("backup_dialog.text")})}),(0,s.jsx)(n.FlexBox,{mb:16,children:(0,s.jsx)(p.Qr,{name:"password",control:Z,render:e=>{var t,{field:r}=e,o=r,{ref:i}=o,l=((e,t)=>{var a={};for(var r in e)y.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&f.call(e,r)&&(a[r]=e[r]);return a})(o,["ref"]);return(0,s.jsx)(n.InputField,x({label:a||T("backup_dialog.default_password_label"),dataTestId:"pwdFld",type:"password",ref:e=>{i(e),$.current=e},errorMsg:null==(t=S.password)?void 0:t.message},l))}})}),(0,s.jsx)(p.Qr,{name:"changePassword",control:Z,render:({field:e})=>(0,s.jsxs)(P,{children:[(0,s.jsx)(n.MultiSelectCheckbox,{dataTestId:"changePwdCheckbox",name:"changePassword",checked:e.value,inputRef:e.ref,onChange:t=>{e.onChange(t),F()}}),(0,s.jsx)("div",{onClick:()=>{F(),e.onChange(!e.value)},children:(0,s.jsx)(c.Z,{children:T("backup_dialog.export_label")})})]})}),I&&(0,s.jsxs)(n.FlexBox,{pt:16,children:[(0,s.jsx)(n.FlexBox,{children:(0,s.jsx)(n.InputField,x({label:r||T("backup_dialog.default_new_wallet_label"),dataTestId:"newPwd",type:"password",errorMsg:null==(g=S.customPassword)?void 0:g.message},b("customPassword")))}),(0,s.jsx)(n.FlexBox,{pt:16,children:(0,s.jsx)(n.InputField,x({label:`${T("general.confirm")} ${r||T("backup_dialog.default_new_wallet_label")}`,dataTestId:"confirmPwd",type:"password",errorMsg:null==(w=S.confirmCustomPassword)?void 0:w.message},b("confirmCustomPassword")))})]})]})})})},v=i.ZP.form`
  width: 100%;
`,P=(0,i.ZP)(n.FlexBox).attrs({mt:8,alignItems:"flex-start",flexDirection:"row"})`
  cursor: pointer;
`,C=b;r()}catch(e){r(e)}}))},457817:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(785893),s=a(667294),n=a(771341),o=a(308787),i=a(165852),l=a(561277),c=a(108363),d=a(876777),p=a(818117),u=a(191140),h=e([o,u]);[o,u]=h.then?(await h)():h;var g=Object.defineProperty,m=Object.defineProperties,y=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))w.call(t,a)&&b(e,a,t[a]);if(f)for(var a of f(t))x.call(t,a)&&b(e,a,t[a]);return e},P=(e,t)=>m(e,y(t)),C=(e,t)=>{var a={};for(var r in e)w.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&x.call(e,r)&&(a[r]=e[r]);return a};const S=({Icon:e,notification:t,onClose:a})=>{const{title:s,message:d,link:p,id:h,linkName:g}=t,{isClosing:m,setIsClosing:y,doNotClose:f,ref:w}=(0,u.Z)(a);return(0,r.jsx)(o.Portal,{id:`notification-${h}`,children:(0,r.jsxs)(B,{isClosing:m,"data-testid":"notificationBar",ref:w,children:[!f&&(0,r.jsx)(O,{start:!m}),(0,r.jsxs)(D,{children:[(0,r.jsxs)(o.FlexBox,{flexDirection:"row",alignItems:"center",gridGap:8,children:[e,(0,r.jsx)(o.FlexBox,{maxWidth:"92%",children:(0,r.jsx)(c.Z,{dataTestId:"notificationBar__title",children:s})})]}),(0,r.jsx)(_,{onClick:()=>{y(!0)},"data-testid":"closeIconContainer",children:(0,r.jsx)(n.Tw,{})})]}),(!!d||!!p)&&(0,r.jsxs)(o.FlexBox,{flexDirection:"column",children:[d&&(0,r.jsx)(l.Z,{dataTestId:"notificationBar__message",overflow:"hidden",wordWrap:"break-word",children:d}),p&&(0,r.jsx)(N,{onClick:()=>window.open(p,"_blank","noopener,noreferrer"),children:(0,r.jsx)(i.Z,{dataTestId:"notificationBar__link",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:null!=g?g:p})})]})]})})},k=e=>{var t=C(e,[]);return(0,r.jsx)(S,P(v({},t),{Icon:(0,r.jsx)(n.IG,{})}))},F=e=>{var t=C(e,[]);return(0,r.jsx)(S,P(v({},t),{Icon:(0,r.jsx)(n.$u,{})}))},I=e=>{var t=C(e,[]);return(0,r.jsx)(S,P(v({},t),{Icon:(0,r.jsx)(o.CircularProgress,{color:d.wL.babyBlue,width:16,height:16})}))},$=e=>{var t=C(e,[]);return(0,r.jsx)(S,P(v({},t),{Icon:(0,r.jsx)(n.vU,{width:16,height:16})}))},Z=e=>{var t=e,{type:a="success"}=t,s=C(t,["type"]);switch(a){case"success":default:return(0,r.jsx)(k,v({},s));case"error":return(0,r.jsx)(F,v({},s));case"loading":return(0,r.jsx)(I,v({},s));case"warning":return(0,r.jsx)($,v({},s))}};(0,s.memo)(Z);const T=p.F4`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`,A=p.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,j=p.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,D=p.ZP.div`
  position: sticky;
  top: 0;
  background-color: ${d.wL.nightOcean};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,B=(0,p.ZP)(o.FlexBox).attrs({gridGap:8})`
  width: 100vw;
  max-height: 240px;
  overflow: auto;
  background-color: ${d.wL.nightOcean};
  animation: ${({isClosing:e})=>e?p.iv`
          ${j} 0.2s cubic-bezier(0.3, 0.0, 0.8, 0.15)
        `:p.iv`
          ${A} 0.4s  cubic-bezier(0.05, 0.7, 0.1, 1)
        `};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  padding: 16px;
  padding-left: 8px;
`,O=p.ZP.div`
  position: absolute;
  height: 2px;
  background-color: ${d.wL.babyBlue};
  width: 100%;
  top: 0;
  left: 0;
  animation: ${({start:e})=>e?p.iv`
          ${T} 5s linear;
        `:void 0};
`,_=(0,p.ZP)(o.FlexBox)`
  cursor: pointer;
`,N=p.ZP.div`
  cursor: pointer;
  max-width: 360px;
`;t()}catch(e){t(e)}}))},982107:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{n:()=>u});var s=a(785893),n=a(667294),o=a(818117),i=a(308787),l=a(882935),c=e([i,l]);[i,l]=c.then?(await c)():c;const d=({loading:e})=>e?(0,s.jsx)(p,{children:(0,s.jsx)(l.Z,{})}):null,p=(0,o.ZP)(i.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`,u=(0,n.memo)(d);r()}catch(e){r(e)}}))},347227:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{F:()=>d});var s=a(785893),n=a(667294),o=a(385167),i=a(745808),l=a(582242),c=e([o]);o=(c.then?(await c)():c)[0];const d=({children:e})=>{const t=(0,n.useRef)({}),[a,r]=(0,n.useState)(!1),c=(0,n.useCallback)((()=>{r(!0)}),[]),d=(0,n.useCallback)((()=>{r(!1)}),[]);return t.current={show:c,hide:d},(0,s.jsxs)(i.Z.Provider,{value:t,children:[e,(0,s.jsx)(o.n,{loading:a}),(0,s.jsx)(l.Z,{})]})};r()}catch(e){r(e)}}))},312259:(e,t,a)=>{var r=a(265142);const s=r.Ps`
  fragment AssetDetailsFragment on TokenResponse {
    page {
      edges {
        node {
          id
          marketCap
          priceHistory {
            day {
              prices {
                price
                timestamp
              }
            }
            week {
              prices {
                price
                timestamp
              }
            }
            month {
              prices {
                price
                timestamp
              }
            }
            year {
              prices {
                price
                timestamp
              }
            }
          }
          price {
            amount
            fdv
            scalingFactor
            allTimeHigh
            allTimeLow
            dailyLow
            dailyHigh
            marketCapRank
            dayPriceChange
            weekPriceChange
            monthPriceChange
            yearPriceChange
          }
        }
      }
    }
  }
`,n=r.Ps`
  fragment AssetDetailsCurrenciesFragment on CryptoCurrencyResponse {
    page {
      edges {
        node {
          id
          marketCap
          priceHistory {
            day {
              prices {
                price
                timestamp
              }
            }
            week {
              prices {
                price
                timestamp
              }
            }
            month {
              prices {
                price
                timestamp
              }
            }
            year {
              prices {
                price
                timestamp
              }
            }
          }
          price {
            amount
            fdv
            scalingFactor
            allTimeHigh
            allTimeLow
            dailyLow
            dailyHigh
            marketCapRank
            dayPriceChange
            weekPriceChange
            monthPriceChange
            yearPriceChange
          }
        }
      }
    }
  }
`,o=r.Ps`
  fragment Amount on AssetAmountType {
    __typename
    amount
    scalingFactor
  }
`,i=(r.Ps`
  fragment CompositeToken on AssetCompositeTokenType {
    __typename
    id
    name
    icon
    price {
      ...Amount
    }
    scalingFactor
    address
    chain
    protocol {
      __typename
      name
      icon
    }
    contract {
      __typename
      scalingFactor
      address
      chain
    }
  }
  ${o}
`,r.Ps`
  fragment CryptoCurrency on AssetCryptoCurrencyType {
    __typename
    id
    name
    symbol
    icon
    price {
      ...Amount
    }
    marketCap
    scalingFactor
    chain
  }
  ${o}
`,r.Ps`
  fragment Fee on AssetFeeType {
    __typename
    value
    scalingFactor
  }
`,r.Ps`
  fragment FiatCurrency on AssetFiatCurrencyType {
    __typename
    id
    name
    symbol
    price {
      ...Amount
    }
    scalingFactor
    character
  }
  ${o}
`,r.Ps`
  fragment NftDataV2 on NFTv2 {
    collection {
      address
    }
    balance {
      value
      scalingFactor
    }
    description
    id
    lastSale {
      fiatPrice {
        value
        scalingFactor
      }
      cryptoPrice {
        value
        scalingFactor
      }
      quantity {
        value
        scalingFactor
      }
    }
    media {
      type
      url
    }
    name
  }
`),l=r.Ps`
  fragment LegacyNftData on NFTv3 {
    collection {
      address
    }
    attributes {
      displayType
      traitType
      value
    }
    balance {
      scalingFactor
      value
    }
    description
    id
    media {
      contentType
      type
      url
    }
    name
    owner
    location
    symbol
    lastSale {
      fiatPrice {
        value
        scalingFactor
      }
      cryptoPrice {
        value
        scalingFactor
      }
      quantity {
        value
        scalingFactor
      }
    }
    contractType
    isNftSpam
  }
`,c=(r.Ps`
  fragment Token on AssetTokenType {
    __typename
    id
    name
    symbol
    icon
    marketCap
    price {
      ...Amount
    }
    contracts {
      __typename
      id
      symbol
      scalingFactor
      address
      chain
    }
  }
  ${o}
`,r.Ps`
  fragment OldToken on TokenType {
    __typename
    id
    name
    symbol
    icon {
      data
      format
    }
    price {
      amount
      scalingFactor
    }
    contracts {
      __typename
      symbol
      scalingFactor
      address {
        address
        chain {
          name
        }
      }
    }
  }
`);r.Ps`
  query NFTS(
    $evmAddress: String!
    $stargazeAddress: String!
    $junoAddress: String!
    $bitcoinAddress: String!
    $solanaAddress: String!
    $hasEVM: Boolean!
    $hasStargaze: Boolean!
    $hasJuno: Boolean!
    $hasBitcoin: Boolean!
    $hasSolana: Boolean!
  ) {
    arbitrum @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    aurora @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    avalanche @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    fantom @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    binanceSmartChain @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    cronosEVM @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    ethereum @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    polygon @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    cantoEVM @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    optimism @include(if: $hasEVM) {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    stargaze @include(if: $hasStargaze) {
      nfts(address: $stargazeAddress) {
        ...NftDataV2
      }
    }
    juno @include(if: $hasJuno) {
      nfts(address: $junoAddress) {
        ...NftDataV2
      }
    }
    bitcoin @include(if: $hasBitcoin) {
      legacyNFTs(address: $bitcoinAddress) {
        ...LegacyNftData
      }
    }
    solana @include(if: $hasSolana) {
      legacyNFTs(address: $solanaAddress) {
        ...LegacyNftData
      }
    }
  }
  ${l}
  ${i}
`,r.Ps`
  query EvmNFTS($evmAddress: String!) {
    arbitrum {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    aurora {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    avalanche {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    fantom {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    binanceSmartChain {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    cronosEVM {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    ethereum {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    polygon {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    cantoEVM {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    optimism {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
    gnosis {
      legacyNFTs(address: $evmAddress) {
        ...LegacyNftData
      }
    }
  }
  ${l}
`,r.Ps`
  query BtcNFTS($bitcoinAddress: String!) {
    bitcoin {
      legacyNFTs(address: $bitcoinAddress) {
        ...LegacyNftData
      }
    }
  }
  ${l}
`,r.Ps`
  query JunoNFTS($junoAddress: String!) {
    juno {
      nfts(address: $junoAddress) {
        ...NftDataV2
      }
    }
  }
  ${i}
`,r.Ps`
  query StargazeNFTS($stargazeAddress: String!) {
    stargaze {
      nfts(address: $stargazeAddress) {
        ...NftDataV2
      }
    }
  }
  ${i}
`,r.Ps`
  query SolanaNFTS($solanaAddress: String!) {
    solana {
      legacyNFTs(address: $solanaAddress) {
        ...LegacyNftData
      }
    }
  }
  ${l}
`,r.Ps`
  query getEthereumBalance($address: String!) {
    ethereum {
      balances(address: $address) {
        asset {
          symbol
          name
          id
          contract
          chain
        }
        amount {
          value
          scalingFactor
        }
        address
      }
      name
      status {
        lastBlock
      }
    }
  }
`,r.Ps`
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
`,r.Ps`
  query ThorchainFees {
    thorchain {
      fee {
        nativeTransactionFee
        outboundTransactionFee
      }
    }
  }
`,r.Ps`
  query AllAssets($page: ConnectionArgs!, $filter: AllAssetsFilter) {
    assets {
      allAssets(page: $page, filter: $filter) {
        page {
          edges {
            node {
              id
              symbol
              price {
                amount
                scalingFactor
              }
              type
            }
          }
        }
      }
    }
  }
`,r.Ps`
  query AssetDetailsCryptoCurrencies(
    $page: ConnectionArgs!
    $filter: CryptoCurrencyFilter
  ) {
    assets {
      cryptoCurrencies(page: $page, filter: $filter) {
        ...AssetDetailsCurrenciesFragment
      }
    }
  }
  ${n}
`,r.Ps`
  query AssetDetailsLpTokens($page: ConnectionArgs!, $filter: TokenFilter) {
    assets {
      lpTokens(page: $page, filter: $filter) {
        ...AssetDetailsFragment
      }
    }
  }
  ${s}
`,r.Ps`
  query AssetDetailsTokens($page: ConnectionArgs!, $filter: TokenFilter) {
    assets {
      tokens(page: $page, filter: $filter) {
        ...AssetDetailsFragment
      }
    }
  }
  ${s}
`,r.Ps`
  query Tokens1(
    $page: ConnectionArgs!
    $after: DateTime
    $filter: TokenFilter
  ) {
    assets {
      tokens(page: $page, after: $after, filter: $filter) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              icon
              marketCap
              price {
                amount
                scalingFactor
              }
              type
              contracts {
                symbol
                scalingFactor
                address
                chain
                id
              }
            }
          }
        }
      }
    }
  }
`,r.Ps`
  query LpTokens(
    $page: ConnectionArgs!
    $after: DateTime
    $filter: TokenFilter
  ) {
    assets {
      lpTokens(page: $page, after: $after, filter: $filter) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              icon
              marketCap
              price {
                amount
                scalingFactor
              }
              type
              contracts {
                symbol
                scalingFactor
                address
                chain
                id
              }
            }
          }
        }
      }
    }
  }
`,r.Ps`
  query CryptoCurrencies(
    $page: ConnectionArgs!
    $after: DateTime
    $filter: CryptoCurrencyFilter
  ) {
    assets {
      cryptoCurrencies(page: $page, after: $after, filter: $filter) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              icon
              price {
                amount
                scalingFactor
              }
              type
              marketCap
              scalingFactor
              chain
            }
          }
        }
      }
    }
  }
`,r.Ps`
  query FiatCurrencies(
    $filter: FiatCurrencyFilter
    $after: DateTime
    $page: ConnectionArgs!
  ) {
    assets {
      fiatCurrencies(filter: $filter, after: $after, page: $page) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              scalingFactor
              character
              price {
                amount
                scalingFactor
              }
            }
          }
        }
      }
    }
  }
`,r.Ps`
  query CompositeTokens(
    $page: ConnectionArgs!
    $after: DateTime
    $filter: CompositeTokenFilter
  ) {
    assets {
      compositeTokens(page: $page, after: $after, filter: $filter) {
        pageData {
          count
          limit
          offset
        }
        page {
          pageInfo {
            endCursor
            hasNextPage
          }
          edges {
            node {
              id
              name
              symbol
              icon
              price {
                amount
                scalingFactor
              }
              scalingFactor
              address
              chain
              protocol {
                name
                icon
              }
              contract {
                symbol
                scalingFactor
                address
                chain
              }
            }
          }
        }
      }
    }
  }
`,r.Ps`
  query BridgeableTokens($bridgeToken: BridgeTokenInput, $tokenId: String) {
    routingV2 {
      bridgeableTokens(bridgeToken: $bridgeToken, tokenId: $tokenId) {
        asset {
          chain
          contract
          id
          name
          symbol
        }
        id
      }
    }
  }
`,r.Ps`
  query Dapp($app: DAppReputationInput!) {
    dapp(app: $app) {
      status
      chains
    }
  }
`,r.Ps`
  query getOwnedAuroraAssets($address: String!) {
    aurora {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedAvalancheAssets($address: String!) {
    avalanche {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedCronosAssets($address: String!) {
    cronosEVM {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedArbitrumAssets($address: String!) {
    arbitrum {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedFantomAssets($address: String!) {
    fantom {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedBinanceSmartChainAssets($address: String!) {
    binanceSmartChain {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedEthereumAssets($address: String!) {
    ethereum {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedPolygonAssets($address: String!) {
    polygon {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedStargazeAssets($address: String!) {
    stargaze {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedBitcoinAssets($address: String!) {
    bitcoin {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getOwnedSolanaAssets($address: String!) {
    solana {
      balances(address: $address) {
        asset {
          contract
        }
        amount {
          value
        }
      }
    }
  }
`,r.Ps`
  query getTokens($filter: GetTokensArgs) @connection(key: "tokens") {
    tokens(filter: $filter) {
      ...OldToken
    }
  }
  ${c}
`,r.Ps`
  query ClassifyV3($payload: EVMTransactionPayloadV2!) {
    txClassifier {
      explainTransactionV3(payload: $payload) {
        args {
          name
          standardisedName
          type
          value
        }
        inputAssets {
          address
          assetId
          decimals
          icon
          id
          isERC721
          name
          symbol
          value
        }
        outputAssets {
          address
          assetId
          decimals
          icon
          id
          isERC721
          name
          symbol
          value
        }
        type
      }
    }
  }
`,r.Ps`
  mutation postTransactonHash(
    $routeId: String!
    $tradeId: String!
    $transactionHash: String!
  ) {
    transactionHashV2(
      routeId: $routeId
      tradeId: $tradeId
      transactionHash: $transactionHash
    )
  }
`,r.Ps`
  mutation postTransactions($routeData: RouteInputTypeV2!) {
    transactionsV2(routeData: $routeData) {
      routeId
    }
  }
`,r.Ps`
  query getRoute(
    $srcToken: String!
    $destToken: String!
    $slippage: String!
    $addresses: [AddressRouteInputTypeV2!]!
    $destAddress: String!
    $amountSource: String!
    $infiniteApproval: Boolean
    $referral: ReferralInputType
    $isOptedIn: Boolean
  ) {
    routingV2 {
      routeV2(
        srcToken: $srcToken
        destToken: $destToken
        slippage: $slippage
        addresses: $addresses
        destAddress: $destAddress
        amountSource: $amountSource
        infiniteApproval: $infiniteApproval
        referral: $referral
        isOptedIn: $isOptedIn
      ) {
        addresses {
          chain
          address
        }
        isOptIn
        destAddress
        priceRate
        priceRateText
        priceImpact
        amountIn
        slippage
        gasPrices
        feeTier
        tradesRoute {
          provider {
            id
            name
            time
            icon
          }
          amountIn
          amountOut
          minAmountReceived
          assetIn {
            listProviders
            id
            asset {
              id
              name
              symbol
              contract
              image
              chain
            }
          }
          assetOut {
            listProviders
            id
            asset {
              id
              name
              symbol
              contract
              image
              chain
            }
          }
          fee {
            networkFeeDollar
            networkFeeAsset
            inboundFeeDollar
            inboundFeeAsset
            xdefiSwapFee
            xdefiSwapFeeDollar
            swapFee
            feeRateTransaction
          }
          reward {
            amount
            amountUsd
            asset {
              id
              listProviders
              asset {
                chain
                contract
                decimals
                symbol
                image
                id
              }
            }
          }
          referral {
            medium
            link
          }
          priceRateUsdAssetOut
          priceRateUsdAssetIn
          tradeType
        }
        errorBuildingRoute
      }
    }
  }
`,r.Ps`
  query getSwapTokens {
    routingV2 {
      chainsV2 {
        name
        tokens {
          listProviders
          asset {
            id
            name
            symbol
            contract
            price {
              amount
              scalingFactor
            }
          }
        }
      }
    }
  }
`,r.Ps`
  query Routing($routeId: String!) {
    routingV2 {
      tradesV2(routeId: $routeId) {
        transaction {
          unsignedStdTx
          txType
          tradeId
          signerId
          routeId
          recipient
          receiverId
          memo
          gasPrice
          gasLimit
          feeRate
          data
          chain
          amount
          actions
        }
        tradeRoute {
          tradeType
          priceRateUsdAssetIn
          priceRateUsdAssetOut
          fee {
            feeRateTransaction
            swapFee
            inboundFeeAsset
            inboundFeeDollar
            networkFeeAsset
            networkFeeDollar
          }
          reward {
            amount
            amountUsd
            asset {
              id
              listProviders
              asset {
                chain
                contract
                decimals
                symbol
                image
                id
              }
            }
          }
          assetOut {
            listProviders
            asset {
              symbol
              contract
              id
              name
              image
              chain
              price {
                amount
                scalingFactor
              }
            }
          }
          minAmountReceived
          amountOut
          amountIn
          provider {
            id
            name
            time
            icon
          }
          assetIn {
            listProviders
            asset {
              contract
              symbol
              id
              name
              image
              chain
              price {
                amount
                scalingFactor
              }
            }
          }
        }
        status {
          txHash
          status
        }
      }
    }
  }
`},914963:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893),a(667294),a(230811);var r=a(281672),s=a(308787),n=a(876777),o=a(818117),i=(a(458038),e([r,s]));[r,s]=i.then?(await i)():i;(0,o.ZP)(s.FlexBox).attrs({alignItems:"center",padding:"5px 8px",background:n.wL.black,borderRadius:"54px",marginRight:"11px",flexDirection:"row",marginLeft:"auto"})``,o.ZP.img`
  margin-right: 6px;
  width: 10px;
  height: 10px;
`;t()}catch(e){t(e)}}))},65856:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{f:()=>g});a(785893),a(691438),a(834392),a(299246),a(111897),a(25022);var s=a(281672),n=(a(561277),a(667294),a(230811),a(50533),a(972819)),o=(a(522933),a(518949)),i=a(771341),l=a(308787),c=(a(650511),a(818117)),d=(a(218006),a(876777)),p=(a(312259),a(914963)),u=a(345873),h=e([s,n,o,l,p,u]);[s,n,o,l,p,u]=h.then?(await h)():h;(0,c.ZP)(l.FlexBox).attrs({alignContent:"center",justifyContent:"center",alignItems:"center"})`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;

  &:hover {
    background: ${d.wL.solidBlack};
    opacity: ${({onceCopied:e})=>e?1:.8};
  }

  & > * {
    display: none;
  }

  &:hover > * {
    display: flex;
  }
`;const g=57;(0,c.ZP)(l.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between",p:8})`
  position: relative;
  width: 100%;
  cursor: pointer;
  height: ${g}px;
  border-bottom: 1px dotted ${d.wL.cynicalBlack};
  ${({isSubAsset:e})=>e&&`background-color: ${d.wL.ash};`};
  ${({isHovered:e,noSelect:t})=>e&&!t&&`background-color: ${d.wL.nightOcean};`};
  ${({withLeftPadding:e})=>e&&"padding-left: 16px;"};
  ${({noSelect:e})=>e&&c.iv`
      cursor: default;
      pointer-events: none;
    `};
`,(0,c.ZP)(i.qQ).attrs({color:d.wL.white})`
  position: absolute;
  top: 2px;
  left: 2px;
`,c.ZP.div`
  position: relative;
`;r()}catch(e){r(e)}}))},345873:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{q:()=>p});var s=a(785893),n=a(308787),o=a(818117),i=a(876777),l=(a(771341),a(458038),a(281672)),c=a(807132),d=e([n,l]);[n,l]=d.then?(await d)():d;const p=({icon:e,chainId:t})=>{const a=(0,l.fU)().getChainControllerById(t),{isValidImage:r}=(0,c.Z)({image:e});return(0,s.jsxs)(h,{children:[(0,s.jsx)(g,{src:r?e:a.getConfig().fallbackImage}),(0,s.jsx)(u,{children:(0,s.jsx)(n.BorderedChainIcon,{chainId:t})})]})},u=(0,o.ZP)(n.FlexBox)`
  position: absolute;
  bottom: 5px;
  left: 5px;
`,h=(0,o.ZP)(n.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: relative;
  width: 44px;
  height: 40px;
  padding: 6px 8px;
  background-color: ${i.wL.charcoal};
  border-radius: 8px;
`,g=((0,o.ZP)(n.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: relative;
  width: 44px;
  height: 48px;
  padding-bottom: 12px;
`,(0,o.ZP)(n.FlexBox).attrs({alignItems:"center",justifyContent:"space-between",flexDirection:"row"})`
  position: absolute;
  z-index: 2;
  width: 37px;
  height: 16px;
  background-color: ${i.wL.charcoal};
  border-radius: 8px;
  bottom: 6px;
  padding-left: 8px;
  padding-right: 4px;
  box-shadow: 0px 4px 8px 3px rgba(0, 0, 0, 0.15),
    0px 1px 3px rgba(0, 0, 0, 0.3);
`,o.ZP.img.attrs({alt:"Icon"})`
  width: 28px;
  height: 28px;
`);r()}catch(e){r(e)}}))},213415:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(785893),a(667294);var r=a(646284),s=a(308787),n=a(281672),o=(a(680528),a(686133)),i=(a(814302),a(561277),a(371006)),l=e([r,s,n,o,i]);[r,s,n,o,i]=l.then?(await l)():l;t()}catch(e){t(e)}}))},686133:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(785893),s=a(667294),n=a(147735),o=a(646284),i=a(771341),l=a(308787),c=a(230811),d=a(556138),p=a(559860),u=a(379134),h=a(465142),g=e([n,o,l,p,u,h]);[n,o,l,p,u,h]=g.then?(await g)():g;const m=({hasControls:e=!0})=>{var t,a,s,g,m,y;const{handleCloseShowDappConnectionModal:f,dappConnectModalWalletId:w,showDappConnectionModal:x,handleSelect:b,handleRowClick:v,showDappsScreen:P,hasControlAndIsAuthenticated:C,activeWalletId:S,wallets:k,showAccountSelect:F,handleClickShowDappsScreen:I,handleClickAccountSelect:$,handleStopPropagation:Z,currentDapp:T,showControlPanel:A,setShowControlPanel:j,setShowGasTankPanel:D,chainIcon:B,profilePic:O,isAccountSelectClosing:_,isDappsScreenClosing:N,activeWallet:L,showGasTankPanel:E,isGasTankPanelClosing:G,handleClickShowGasTankPanel:R}=(0,h.Z)({hasControls:e}),{t:K}=(0,c.$G)("app");return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.Pz,{children:[(0,r.jsx)(u.gM,{children:C&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Qc,{children:(0,r.jsx)(l.AvatarButton,{walletIcon:(0,r.jsx)(l.WalletIcon,{type:null!=(a=null==(t=null==L?void 0:L.walletInfo)?void 0:t.type)?a:d.WalletType.Keystore,imported:null!=(m=null==(g=null==(s=null==L?void 0:L.walletInfo)?void 0:s.data)?void 0:g.imported)&&m,size:24}),image:O,label:null==(y=k[S])?void 0:y.label,open:F,onMouseDown:Z,onClick:$,dataTestId:"accountBtn"})}),(0,r.jsxs)(u.LI,{children:[(0,r.jsx)(l.AvatarButton,{image:(null==T?void 0:T.favicon)||null,label:K("top_header.dapps"),open:P,onMouseDown:Z,onClick:I,dataTestId:"dappsBtn",chainIcon:B}),(0,r.jsx)(l.IconButton,{onClick:R,icon:E?(0,r.jsx)(i.Tw,{}):(0,r.jsx)(i.w0,{}),variant:l.IconButtonVariant.Rounded})]})]})}),(0,r.jsx)(n.Z,{open:A,close:()=>j(!1)}),w&&(0,r.jsx)(o.DappNotConnectedDialog,{open:x,onClose:f,walletId:w})]}),F&&(0,r.jsx)(o.AccountSelect,{handleSelect:b,handleRowClick:v,isClosing:_}),P&&(0,r.jsx)(o.DappScreen,{isClosing:N}),(0,r.jsx)(p.Z,{showGasTankPanel:E,setShowGasTankPanel:e=>D(e),isGasTankPanelClosing:G})]})};(0,s.memo)(m);t()}catch(e){t(e)}}))},115105:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Z:()=>w});var s=a(785893),n=a(305381),o=a(278155),i=a(945192),l=a(818117),c=a(308787),d=a(646284),p=a(876777),u=e([c,d]);[c,d]=u.then?(await u)():u;const h=(0,l.ZP)(c.FlexBox).attrs({alignItems:"center",justifyContent:"space-evenly",alignContent:"center"})`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${p.wL.black};
  overflow: hidden;
`,g=(0,l.ZP)(c.FlexBox).attrs({alignItems:"center",justifyContent:"flex-start",flexDirection:"column"})`
  width: 400px;
  height: 100%;
  max-height: 600px;
  overflow: hidden;
  padding: 0 8px;
  box-sizing: border-box;
  display: flex;
  text-align: center;
  overflow: hidden;
`,m=(0,l.ZP)(c.FlexBox).attrs({alignItems:"center",flexDirection:"column"})`
  width: 100%;
  box-sizing: border-box;
  flex: 1;
  z-index: 1;
`,y=l.ZP.img`
  position: absolute;
`,f=l.ZP.img.attrs({src:n.toString(),alt:"logo",dataTestid:"logo"})`
  margin-top: 28px;
  width: 187px;
  height: 88px;
  z-index: 1;
`,w=({children:e,loading:t=!1})=>(0,s.jsx)(h,{children:(0,s.jsx)(g,{children:t?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{src:i.toString()}),(0,s.jsx)(f,{}),(0,s.jsx)(d.Loader,{})]}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(y,{src:o.toString()}),(0,s.jsx)(f,{}),(0,s.jsx)(m,{children:e})]})})});r()}catch(e){r(e)}}))},716792:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{l:()=>y});a(785893),a(739989),a(814401),a(561277),a(458038);var s=a(667294),n=(a(230811),a(50533)),o=a(996974),i=a(646284),l=a(18544),c=a(972819),d=a(835534),p=(a(522933),a(281672)),u=(a(771341),a(308787)),h=(a(729154),a(876777),a(519416),a(851892),a(935527)),g=e([i,l,c,d,p,u,h]);[i,l,c,d,p,u,h]=g.then?(await g)():g;const m=["https://dashboard.xdefi.io","https://staking.xdefi.io","https://app.xdefi.io","https://app-beta.xdefi.io"],y=()=>{var e;const t=(0,o.TH)(),a=(0,p.UW)(),r=(0,n.v9)((e=>e.dappsMessages.messages)),i=(0,s.useMemo)((()=>{if(!t.search)return r[0];const e=new URLSearchParams(t.search).get("xdefiId");return r.find((t=>t.xdefiId.toString()===e))||r[0]}),[r,t]),l=(0,s.useMemo)((()=>{var e,t;return!(null==(t=null==(e=null==i?void 0:i.origin)?void 0:e.tab)?void 0:t.url)||!m.some((e=>{var t,a,r;return null==(r=null==(a=null==(t=null==i?void 0:i.origin)?void 0:t.tab)?void 0:a.url)?void 0:r.startsWith(e)}))}),[i]),c=i&&(null==(e=a.chains.getChainControllerById(null==i?void 0:i.chainId))?void 0:e.isSignMessage(i))&&l&&["eth_sign","signMessage"].includes(i.raw.method);return{dappMessage:i,messages:r,isDangerousSignMessage:c,isDangerousDomain:l}};r()}catch(e){r(e)}}))},280760:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Z:()=>k});var s=a(785893),n=a(667294),o=a(230811),i=a(646284),l=a(18544),c=a(972819),d=a(628790),p=a(281672),u=a(308787),h=a(876777),g=a(818117),m=a(519416),y=a(716792),f=a(164778),w=a(941106),x=a(450784),b=a(814237),v=e([i,l,c,p,u,y,f,w,x,b]);[i,l,c,p,u,y,f,w,x,b]=v.then?(await v)():v;const P=()=>{const{addNotification:e}=(0,c.Z)(),t=(0,p.nl)(),a=(0,p.i_)(),r=(0,p.fU)(),{dappMessage:h}=(0,y.l)(),[g,v]=(0,n.useState)(!1),{t:P}=(0,o.$G)("app"),k=null==h?void 0:h.raw.params.accounts;(0,n.useEffect)((()=>{h&&k||setTimeout((()=>window.close()),1e3)}),[h]);const F=(0,n.useCallback)((()=>{return s=void 0,n=null,o=function*(){v(!0);try{for(const e of k){const s=new d.Si({chain:r.getChainControllerById(h.chainId).getType(),value:{pk:e.privateKey}});yield a.addPkWallet(e.accountId,s),t.removeMessageById(null==h?void 0:h.xdefiId),r.getChainControllerById(h.chainId).updateAllBalance()}window.close()}catch(t){e({title:P("import_account.failed_import_account"),type:"error"}),v(!1)}},new Promise(((e,t)=>{var a=e=>{try{i(o.next(e))}catch(e){t(e)}},r=e=>{try{i(o.throw(e))}catch(e){t(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,r);i((o=o.apply(s,n)).next())}));var s,n,o}),[v,r,a,h,e]),I=(0,n.useCallback)((()=>{m.browser.runtime.sendMessage(null,{xdefiId:null==h?void 0:h.xdefiId,raw:{id:null==h?void 0:h.xdefiId,error:"XDEFI: user rejected account import"}}).finally((()=>{window.close(),t.removeMessageById(null==h?void 0:h.xdefiId)}))}),[t]),{openDialog:$,onCloseDialog:Z,handleConfirm:T}=(0,l.Z)(F);return h&&k?(0,s.jsxs)(C,{children:[(0,s.jsx)(i.ConfirmDialog,{open:$,onClose:Z,onSubmit:F}),(0,s.jsx)(x.h,{message:h}),(0,s.jsx)(S,{children:k.map((({accountId:e,privateKey:t},a)=>(0,s.jsx)(f.m,{accountId:e,privateKey:t},a)))}),(0,s.jsx)(w.$_,{loading:g,onApprove:()=>T(),onDecline:()=>I()})]}):(0,s.jsxs)(b.g,{children:[(0,s.jsx)("span",{children:P("import_account.no_pending_account_imports")}),(0,s.jsx)(u.CircularProgress,{})]})},C=(0,g.ZP)(u.FlexBox).attrs({flexDirection:"column",justifyContent:"space-between"})`
  width: 100%;
  height: 100%;
  position: fixed;
  color: ${h.wL.white};
  background-color: ${h.wL.black};
  box-sizing: border-box;
`,S=(0,g.ZP)(u.FlexBox).attrs({flexDirection:"column",flex:"1 1 auto"})`
  row-gap: 24px;
  padding: 0px 12px 24px 12px;
  overflow: auto;
`,k=P;r()}catch(e){r(e)}}))},164778:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{m:()=>d});var s=a(785893),n=a(308787),o=a(818117),i=a(108363),l=a(561277),c=e([n]);n=(c.then?(await c)():c)[0];const d=({accountId:e,privateKey:t})=>(0,s.jsxs)(p,{children:[(0,s.jsx)(i.Z,{children:e}),(0,s.jsx)(l.Z,{children:t})]}),p=(0,o.ZP)(n.FlexBox).attrs({flexDirection:"column",flex:"0 0 auto"})`
  background: ${({theme:e})=>e.colors.mineShaft};
  padding: 8px 16px;
  width: 100%;
  gap: 8px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.15),
    0px 1px 2px rgba(0, 0, 0, 0.3);
  word-break: break-all;
`;r()}catch(e){r(e)}}))},941106:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{$_:()=>d});var s=a(785893),n=a(308787),o=a(818117),i=a(729154),l=a(230811),c=e([n]);n=(c.then?(await c)():c)[0];const d=({loading:e,onApprove:t,onDecline:a})=>{const{t:r}=(0,l.$G)("app");return(0,s.jsxs)(p,{children:[(0,s.jsx)(u,{onClick:a,fullWidth:!0,children:(0,s.jsx)(i.Z,{children:r("general.reject")})}),(0,s.jsx)(h,{disabled:e,onClick:t,fullWidth:!0,children:(0,s.jsx)(i.Z,{children:r("import_account.import_account")})})]})},p=(0,o.ZP)(n.FlexBox).attrs({flexDirection:"row"})`
  gap: 16px;
  padding: 16px;
  background: #252829;
  box-shadow: 0px -1px 3px 1px rgba(0, 0, 0, 0.15),
    0px -1px 2px rgba(0, 0, 0, 0.3);
`,u=(0,o.ZP)(n.SecondaryButton)``,h=(0,o.ZP)(n.PrimaryButton)``;r()}catch(e){r(e)}}))},450784:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{h:()=>h});var s=a(785893),n=a(667294),o=a(230811),i=a(281672),l=a(308787),c=a(818117),d=a(108363),p=a(346539),u=e([i,l]);[i,l]=u.then?(await u)():u;const h=({message:e})=>{const t=(0,i.fU)(),a=(0,n.useMemo)((()=>t.getChainControllerById(e.chainId)),[t,e.chainId]),{t:r}=(0,o.$G)("app");return(0,s.jsxs)(g,{children:[(0,s.jsxs)(m,{children:[(0,s.jsx)("img",{src:a.getConfig().image,height:"44"}),(0,s.jsx)(d.Z,{textAlign:"center",children:a.getConfig().shortName})]}),(0,s.jsxs)(p.Z,{children:[r("import_account.message")," "]})]})},g=(0,c.ZP)(l.FlexBox).attrs({alignItems:"center"})`
  row-gap: 16px;
  margin: 32px 70px 24px 70px;
  padding: 12px 12px 0px 12px;
`,m=(0,c.ZP)(l.FlexBox).attrs({})`
  row-gap: 8px;
`;r()}catch(e){r(e)}}))},814237:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{g:()=>i});var s=a(308787),n=a(818117),o=e([s]);s=(o.then?(await o)():o)[0];const i=(0,n.ZP)(s.FlexBox).attrs({display:"flex",alignItems:"center",justifyContent:"center"})`
  position: fixed;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: 1300;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(4px);
`;r()}catch(e){r(e)}}))},11351:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(785893),s=(a(324889),a(870446),a(353789)),n=a(667294),o=a(712439),i=a(257865),l=a(620745),c=a(50533),d=a(639711),p=a(42763),u=a(678603),h=a(753894),g=a(646284),m=a(876777),y=a(17045),f=a(818117),w=a(280760),x=e([s,p,g,w]);[s,p,g,w]=x.then?(await x)():x;const b=document.getElementById("app-import-account-root"),v=(0,l.s)(b),P=[h.Z],C=new y.yh({portName:"XDEFI-EXTENSION"});(0,y.md)(C,...P);const S=f.vJ`
 body * {
    box-sizing: border-box;
    transition: background-color 300ms;
    
    &::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
    };
   
    &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
    height: 30px;
  };
  
  &::-webkit-scrollbar-corner {
    background-color: transparent;
  }
}
  
  body input[type='range'] {
    width: 100%;
    height: 2px;
    cursor: pointer;
    accent-color: ${m.wL.blue};
  }
`;C.ready().then((()=>{v.render((0,r.jsx)(c.zt,{store:C,children:(0,r.jsx)(u.r,{loading:(0,r.jsx)(s.og,{loading:!0}),persistor:p.D,children:(0,r.jsx)(k,{})})}))}));const k=()=>{const e=(0,c.v9)((e=>{var t,a;return null!=(a=null==(t=null==e?void 0:e.settings)?void 0:t.theme)?a:m.$T.Dark}));return(0,n.useEffect)((()=>{document.body.classList.toggle("theme-dark",!0)}),[]),(0,r.jsx)(f.f6,{theme:(0,m.Q2)(e),children:(0,r.jsx)(g.ScreenSpinnerProvider,{children:(0,r.jsx)(o.W,{backend:i.PD,children:(0,r.jsx)(n.Suspense,{fallback:(0,r.jsx)(s.og,{loading:!0}),children:(0,r.jsxs)(d.UT,{children:[(0,r.jsx)(S,{}),(0,r.jsx)(w.Z,{})]})})})})})};t()}catch(e){t(e)}}))},677914:(e,t,a)=>{a.d(t,{Z:()=>m});var r=a(785893),s=a(667294),n=a(876777),o=a(327754),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,a)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const g=s.forwardRef((function(e,t){const a=(0,o.F)({[n.$T.Dark]:n.wL.darkGrey}),s=e.color||a;return(0,r.jsx)("svg",(i=((e,t)=>{for(var a in t||(t={}))p.call(t,a)&&h(e,a,t[a]);if(d)for(var a of d(t))u.call(t,a)&&h(e,a,t[a]);return e})({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(i,c({children:(0,r.jsx)("path",{d:"M6.00098 13.9991L9.81608 8.27647C9.92804 8.10852 9.92804 7.88971 9.81608 7.72176L6.00098 1.99911",stroke:s,strokeLinecap:"round"})}))));var i})),m=s.memo(g)},725317:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(785893),s=a(300286),n=a(241164),o=a(412252),i=a(667294),l=a(771341),c=a(876777),d=a(38187),p=a(356308),u=a(674990),h=a(669525),g=Object.defineProperty,m=Object.defineProperties,y=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,w=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,b=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const v=(0,i.memo)((0,i.forwardRef)(((e,t)=>{var a=e,{type:g,label:v,errorMsg:P,warningMsg:C,startAdornment:S,endAdornment:k,tipInfo:F,dataTestId:I,placeholder:$,inputRef:Z,defaultValue:T,onChange:A,onKeyPress:j,autoFocus:D,isWebapp:B=!1,spellCheck:O,name:_,tipError:N,min:L,disabled:E,value:G,tipPlacement:R="left",autoComplete:K="off",onFocus:W,textAlign:M=u.P.Left,className:J,variant:V="md",readOnly:z=!1,step:U=.1}=a,q=((e,t)=>{var a={};for(var r in e)w.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&f)for(var r of f(e))t.indexOf(r)<0&&x.call(e,r)&&(a[r]=e[r]);return a})(a,["type","label","errorMsg","warningMsg","startAdornment","endAdornment","tipInfo","dataTestId","placeholder","inputRef","defaultValue","onChange","onKeyPress","autoFocus","isWebapp","spellCheck","name","tipError","min","disabled","value","tipPlacement","autoComplete","onFocus","textAlign","className","variant","readOnly","step"]);const[H,Q]=(0,i.useState)(g),X=(0,i.useMemo)((()=>S?(0,r.jsx)(d.Z,{mr:10,"data-testid":"startAdornment",children:S}):null),[S]),Y=(0,i.useMemo)((()=>k?(0,r.jsx)(d.Z,{ml:5,"data-testid":"endAdornment",children:k}):"password"===g?(0,r.jsx)(h.iT,{onClick:()=>Q("password"===H?"text":"password"),children:"password"===H?(0,r.jsx)(l.tE,{width:16,height:16,color:c.wL.darkGrey}):(0,r.jsx)(l.JP,{width:16,height:16,color:c.wL.darkGrey})}):N||F?(0,r.jsx)(p.ZP,{title:N||F,arrow:!0,fitContent:!0,placement:R,children:(0,r.jsx)(h.Oq,{"data-testid":"tipIcon",children:(0,r.jsx)(h.ag,{$error:!!N})})}):null),[k,H,B,N,F,R,g]);return(0,r.jsxs)(d.Z,(ee=((e,t)=>{for(var a in t||(t={}))w.call(t,a)&&b(e,a,t[a]);if(f)for(var a of f(t))x.call(t,a)&&b(e,a,t[a]);return e})({},q),te={className:J,children:[v&&(0,r.jsx)(d.Z,{pb:8,ml:8,children:(0,r.jsx)(o.Z,{children:v})}),(0,r.jsxs)(h.fv,{$isWebapp:B,$error:!!P||!!N,onClick:W,"data-testid":"inputContainer",children:[X,(0,r.jsx)(h.II,{style:{textAlign:M},name:_,type:H,placeholder:$,"data-testid":I,$error:!!P,ref:t||Z,autoComplete:K,defaultValue:T,onChange:A,onKeyPress:j,autoFocus:D,spellCheck:O,min:L,disabled:E,value:G,$isWebapp:B,onFocus:W,$variant:V,readOnly:z,step:"number"===g?U:void 0}),Y]}),(0,r.jsx)(h.CV,{$animateIn:!!P,children:(0,r.jsx)(s.Z,{children:P})}),C&&(0,r.jsx)(h.iC,{children:(0,r.jsx)(n.Z,{dataTestId:"warningMsg",children:C})})]},m(ee,y(te))));var ee,te})))},670585:(e,t,a)=>{var r=a(785893),s=a(667294),n=a(771341),o=a(38187),i=a(876777),l=a(412252),c=a(300286),d=a(669525),p=Object.defineProperty,u=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))g.call(t,a)&&m(e,a,t[a]);return e};const f=({showPassword:e,setShowPassword:t})=>(0,r.jsx)(d.Ym,{onClick:()=>t(!e),"data-testid":"eyeContainer",children:(0,r.jsx)(d.iT,{children:e?(0,r.jsx)(n.JP,{width:16,height:16,color:i.wL.darkGrey,"data-testid":"closedEyeIcon"}):(0,r.jsx)(n.tE,{width:16,height:16,color:i.wL.darkGrey,"data-testid":"eyeIcon"})})});(0,s.memo)((0,s.forwardRef)(((e,t)=>{var a=e,{label:n,errorMsg:i,dataTestId:p,placeholder:m,inputRef:w,defaultValue:x,onChange:b,autoFocus:v,spellCheck:P,name:C,className:S,disabled:k,value:F,type:I="text"}=a,$=((e,t)=>{var a={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&g.call(e,r)&&(a[r]=e[r]);return a})(a,["label","errorMsg","dataTestId","placeholder","inputRef","defaultValue","onChange","autoFocus","spellCheck","name","className","disabled","value","type"]);const[Z,T]=(0,s.useState)(!1);return(0,r.jsxs)(o.Z,{className:S,gridGap:"8px",children:[n&&(0,r.jsx)(o.Z,{ml:8,children:(0,r.jsx)(l.Z,{children:n})}),(0,r.jsxs)(d.Bt,{children:[(0,r.jsx)(d.Kx,y({name:C,placeholder:m,"data-testid":p,ref:w||t,defaultValue:x,onChange:b,autoFocus:v,spellCheck:P,autoComplete:"off",disabled:k,value:F,$error:!!i,$type:"text"===I||Z?"text":"password"},$)),"password"===I&&(0,r.jsx)(f,{showPassword:Z,setShowPassword:T})]}),(0,r.jsx)(d.CV,{$animateIn:!!i,children:(0,r.jsx)(c.Z,{children:i})})]})})))},179145:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(785893),s=a(876777),n=a(233884);const o=a(818117).ZP.svg`
  animation: ${n.O2} 1s linear infinite;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;

  & circle {
    stroke: ${({color:e})=>e};
    stroke-linecap: round;
    animation: ${n.P2} 1.5s ease-in-out infinite;
  }
`,i=({color:e=s.wL.blue,width:t=50,height:a=50,dataTestId:n="circleLoader"})=>(0,r.jsx)(o,{color:e,width:t,height:a,"data-testid":n,viewBox:"0 0 50 50",children:(0,r.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4","data-testid":"circularProgressCircle"})})},691292:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{c:()=>l});a(785893);var s=a(667294),n=(a(50533),a(457817)),o=a(281672),i=e([n,o]);[n,o]=i.then?(await i)():i;Object.defineProperty,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;const l=(0,s.createContext)({});r()}catch(e){r(e)}}))},493730:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{AccountBalance:()=>s.r});var s=a(358156),n=a(533448);a.o(n,"ConfirmDialog")&&a.d(t,{ConfirmDialog:function(){return n.ConfirmDialog}}),a.o(n,"DappNotConnectedDialog")&&a.d(t,{DappNotConnectedDialog:function(){return n.DappNotConnectedDialog}}),a.o(n,"DappScreen")&&a.d(t,{DappScreen:function(){return n.DappScreen}}),a.o(n,"ExpandableSearchContainer")&&a.d(t,{ExpandableSearchContainer:function(){return n.ExpandableSearchContainer}}),a.o(n,"FullWidthSelectChain")&&a.d(t,{FullWidthSelectChain:function(){return n.FullWidthSelectChain}}),a.o(n,"ScreenSpinnerProvider")&&a.d(t,{ScreenSpinnerProvider:function(){return n.ScreenSpinnerProvider}});var o=e([s]);s=(o.then?(await o)():o)[0],r()}catch(e){r(e)}}))},385167:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{n:()=>s.n});var s=a(982107),n=e([s]);s=(n.then?(await n)():n)[0],r()}catch(e){r(e)}}))},582242:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(818117);const s="?popup=true"===window.location.search,n=r.vJ`
  ${!s&&r.iv`
      html {
        height: 100% !important;
      }
    `}
`},409061:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{F:()=>s.F,a:()=>n.a});var s=a(347227),n=a(255942),o=e([s]);s=(o.then?(await o)():o)[0],r()}catch(e){r(e)}}))},465438:(e,t,a)=>{a.a(e,(async(e,r)=>{try{var s=a(919020),n=a(632649);a.o(n,"ConfirmDialog")&&a.d(t,{ConfirmDialog:function(){return n.ConfirmDialog}}),a.o(n,"DappNotConnectedDialog")&&a.d(t,{DappNotConnectedDialog:function(){return n.DappNotConnectedDialog}}),a.o(n,"ExpandableSearchContainer")&&a.d(t,{ExpandableSearchContainer:function(){return n.ExpandableSearchContainer}}),a.o(n,"FullWidthSelectChain")&&a.d(t,{FullWidthSelectChain:function(){return n.FullWidthSelectChain}}),a.o(n,"ScreenSpinnerProvider")&&a.d(t,{ScreenSpinnerProvider:function(){return n.ScreenSpinnerProvider}});var o=e([s]);s=(o.then?(await o)():o)[0],r()}catch(e){r(e)}}))},646284:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{AccountSelect:()=>n.Z,ConfirmDialog:()=>W.QH,DappNotConnectedDialog:()=>M.J,DappScreen:()=>j.J,ExpandableSearchContainer:()=>_.Q,FullWidthSelectChain:()=>O.Z,Loader:()=>d.Z,ScreenSpinnerProvider:()=>E.F});var s=a(599527),n=a(641124),o=a(170166),i=a(50727),l=a(398357),c=(a(875930),a(343634)),d=a(882935),p=a(744238),u=a(663856),h=a(345058),g=a(33961),m=a(310666),y=(a(221379),a(21723)),f=a(204255),w=a(143747),x=a(430648),b=a(926182),v=a(679896),P=a(537896),C=a(83668),S=a(493730),k=a(340134),F=a(463193),I=a(136303),$=a(715413),Z=a(179060),T=a(372950),A=a(104183),j=a(230679),D=a(465438),B=a(292098),O=a(228819),_=a(113863),N=a(781850),L=a(385167),E=a(409061),G=a(17349),R=a(366013),K=a(882478),W=a(316708),M=a(319685),J=e([s,n,o,i,l,c,d,p,u,h,g,m,y,f,w,x,b,v,P,C,S,k,F,I,$,Z,T,A,j,D,B,O,_,N,L,E,G,R,K,W,M]);[s,n,o,i,l,c,d,p,u,h,g,m,y,f,w,x,b,v,P,C,S,k,F,I,$,Z,T,A,j,D,B,O,_,N,L,E,G,R,K,W,M]=J.then?(await J)():J,a.o(S,"ConfirmDialog")&&a.d(t,{ConfirmDialog:function(){return S.ConfirmDialog}}),a.o(S,"DappNotConnectedDialog")&&a.d(t,{DappNotConnectedDialog:function(){return S.DappNotConnectedDialog}}),a.o(S,"DappScreen")&&a.d(t,{DappScreen:function(){return S.DappScreen}}),a.o(S,"ExpandableSearchContainer")&&a.d(t,{ExpandableSearchContainer:function(){return S.ExpandableSearchContainer}}),a.o(S,"FullWidthSelectChain")&&a.d(t,{FullWidthSelectChain:function(){return S.FullWidthSelectChain}}),a.o(S,"ScreenSpinnerProvider")&&a.d(t,{ScreenSpinnerProvider:function(){return S.ScreenSpinnerProvider}}),a.o(D,"ConfirmDialog")&&a.d(t,{ConfirmDialog:function(){return D.ConfirmDialog}}),a.o(D,"DappNotConnectedDialog")&&a.d(t,{DappNotConnectedDialog:function(){return D.DappNotConnectedDialog}}),a.o(D,"ExpandableSearchContainer")&&a.d(t,{ExpandableSearchContainer:function(){return D.ExpandableSearchContainer}}),a.o(D,"FullWidthSelectChain")&&a.d(t,{FullWidthSelectChain:function(){return D.FullWidthSelectChain}}),a.o(D,"ScreenSpinnerProvider")&&a.d(t,{ScreenSpinnerProvider:function(){return D.ScreenSpinnerProvider}}),r()}catch(e){r(e)}}))},835534:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(264487),s=a(914096),n=a(698858),o=a(409669),i=a.n(o),l=a(135974),c=a(244431),d=a.n(c),p=a(379372),u=a(133156),h=a(539441),g=a(209030),m=a(972335),y=a(705891),f=a(834392),w=a(569252),x=a(406253),b=a(173431),v=a(350144),P=a(324104),C=a(739989),S=a(299246),k=a(626423),F=a(46461),I=a(496486),$=a(435161),Z=a.n($),T=a(478718),A=a.n(T),j=a(50533),D=a(519416),B=a(42763),O=a(556138),_=a(691438),N=a(628790),L=a(847001),E=a(831352),G=a(603874),R=a(680528),K=a(25022),W=a(427504),M=a(640610),J=a(270900),V=a(905479),z=a(572574),U=a(993150),q=a(446010),H=a(358892),Q=a(316683),X=a(693246),Y=a(605930),ee=a(244586),te=a(620531),ae=a(855192),re=a(667730),se=a(703033),ne=a(820813),oe=a(630292),ie=a(81331),le=a(730876),ce=a(159655),de=a(943333),pe=a(803418),ue=a(167643),he=a(177011),ge=e([p,u,x,B,te,ae,ne,oe,ie,ce,de,ue,he]);[p,u,x,B,te,ae,ne,oe,ie,ce,de,ue,he]=ge.then?(await ge)():ge;var me=Object.defineProperty,ye=Object.defineProperties,fe=Object.getOwnPropertyDescriptors,we=Object.getOwnPropertySymbols,xe=Object.prototype.hasOwnProperty,be=Object.prototype.propertyIsEnumerable,ve=Math.pow,Pe=(e,t,a)=>t in e?me(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,Ce=(e,t)=>{for(var a in t||(t={}))xe.call(t,a)&&Pe(e,a,t[a]);if(we)for(var a of we(t))be.call(t,a)&&Pe(e,a,t[a]);return e},Se=(e,t)=>ye(e,fe(t)),ke=(e,t,a)=>(Pe(e,"symbol"!=typeof t?t+"":t,a),a),Fe=(e,t,a)=>new Promise(((r,s)=>{var n=e=>{try{i(a.next(e))}catch(e){s(e)}},o=e=>{try{i(a.throw(e))}catch(e){s(e)}},i=e=>e.done?r(e.value):Promise.resolve(e.value).then(n,o);i((a=a.apply(e,t)).next())}));class Ie{constructor(){ke(this,"unsubscribe"),ke(this,"masterKeys"),ke(this,"wallets"),ke(this,"chains"),ke(this,"dapps"),ke(this,"dappsProviders"),ke(this,"assets"),ke(this,"analytics"),ke(this,"api"),ke(this,"populateWalletData",((e,t)=>Fe(this,null,(function*(){yield this.wallets.initWalletData((a=>this.chains.getAllAddresses({seed:a.seed?{seed:a.seed.seed,walletIndex:null!=e?e:0}:void 0,pk:a.pk?a.pk:void 0},t)))})))),ke(this,"verifyMasterPhrase",(()=>{B.Z.dispatch((0,z.S9)())})),ke(this,"populateSubAccount",(e=>Fe(this,[e],(function*({seedOrPK:e,masterPassword:t,withInitialTokens:a=!0,keystoreId:r,label:s,imported:n}){if(!e)throw(0,F.t)("app:controller_errors.invalid_seed_or_pk");if(!(yield this.wallets.addSubAccountByPhraseOrPK({seedOrPK:e,password:t,keystoreId:r,imported:n})))throw(0,F.t)("app:controller_errors.account_allready_exists");const o=a?G.bK:this.chains.getAllChainNetworkIds();yield this.populateWalletData(0,o),this.wallets.addKeystoreWallet(s),a&&this.postRestore(),this.masterKeys.clearTemporaryPhrase()})))),ke(this,"updateCurrency",((e,t,a,r)=>{B.Z.dispatch((0,q.SI)({name:e,symbol:t,title:a,scale:r}))})),ke(this,"updateMinBalance",(e=>{B.Z.dispatch((0,q.He)(e))})),ke(this,"addWalletBalance",((e,t)=>{B.Z.dispatch((0,Q.l$)({activeWalletId:e,wallets:t})),B.Z.dispatch((0,M.HK)({walletIds:Object.values(t).map((e=>e.id))}))})),ke(this,"restoreWallets",((e,t,a,r,s,n)=>Fe(this,null,(function*(){return this.addWalletBalance(a,e),this.assets.upgradeTokens(),yield this.masterKeys.unlock(t),(0,j.dC)((()=>{B.Z.dispatch((0,Q.EA)(n)),B.Z.dispatch((0,q.dt)(r)),B.Z.dispatch((0,M.Jx)(s))})),yield this.chains.addChainItems(),this.chains.updateBalancesForAllWallets(),{success:!0,message:"You have been restored master keystore, wallets, and settings successfully! Hold on..."}})))),ke(this,"logger",((e,t)=>C.Z.info(`CONTROLLER: ${e}`,t))),ke(this,"getAssetBalanceStr",(({chainId:e,symbol:t,address:a,decimals:r,showSymbol:s=!0,showTilde:n=!1,balance:o="0",walletId:i})=>{try{const l=this.chains.getChainControllerById(e),c=Number(o)?o:this.chains.getBalance(e,t,a,i),p=(0,W.R6)(l,c,t,null!=r?r:l.getConfig().decimals);return s?(0,W.zr)(new(d())(p),t,n):(0,W.Cb)(new(d())(p),n)}catch(e){return C.Z.error(e),"0"}})),ke(this,"getFee",((e,t,a)=>Fe(this,null,(function*(){let r,s;const n=this.chains.getChainControllerById(e);switch(n.getType()){case _.J.Binance:const o=yield(0,ae.cj)();r=new(d())(o);break;case _.J.Bitcoin:case _.J.Litecoin:case _.J.Dogecoin:case _.J.BitcoinCash:{s=(yield n.selfCast().getFeesWithRates(a.memo,a.fromAddress)).rates[t];const e=(yield n.selfCast().getTransactionFee({speed:t,txData:Se(Ce({},a),{feeRate:s})})).toString();r=new(d())(e)}break;case _.J.Thorchain:{const e=(yield n.selfCast().getFee()).fastest;r=e.amount().dividedBy(ve(10,e.decimal))}break;case _.J.Terra:{const e=n.selfCast(),r=(null==a?void 0:a.gasPrice)?null==a?void 0:a.gasPrice:void 0,s=yield e.getFee(Se(Ce({},a),{gasPrice:r}));return{fee:new(d())(s.amount.toData()[0].amount).dividedBy(ve(10,e.getConfig().decimals)),speed:t}}case _.J.Near:{const e=yield n.selfCast().getFee(a);r=e.dividedBy(Math.pow(10,n.selfCast().getConfig().decimals))}break;case _.J.Evm:{const e=new(d())(a.gasPrice||0),t=new(d())(a.gasLimit),s=new(d())(a.maxFeePerGas||0),n=new(d())(a.maxPriorityFeePerGas||0);e.gt(0)&&(r=e.multipliedBy(t).dividedBy(1e9).decimalPlaces(18)),n.gt(0)&&s.gt(0)&&(r=s.multipliedBy(t).dividedBy(p.uR))}break;case _.J.Solana:{const e=n.selfCast(),t=yield e.getFee(a);r=new(d())(t).dividedBy(ve(10,9))}break;case _.J.Tron:{const e=n.selfCast();r=yield e.getFee(a)}break;case _.J.Cosmos:const i=n.selfCast();r=yield i.getFee();break;default:C.Z.warn(`getFee not implemented for chainId ${e}`),r=new(d())("0")}return new Promise((e=>e({fee:r,feeRate:s,speed:t})))})))),ke(this,"getAssetAddressDecimals",((e,t)=>{var a,r;const s=this.chains.getChainControllerById(e);let n,o;return s.getType()===_.J.Binance?(n=t.address||"",o=t.decimals||R.KV.A18):s.getType()===_.J.Terra?(n=t.address||"",o=t.decimals||R.KV.A6):s.getType()===_.J.Solana?(n=null!=(a=t.address)?a:"",o=null!=(r=t.decimals)?r:R.KV.A9):s.getType()===_.J.Near?(n=t.address||"",o=t.decimals||R.KV.A24):(n=t.address||"",o=t.decimals||s.getConfig().decimals),{address:n,decimals:o}})),ke(this,"getFormattedBalance",((e,t,a)=>{var r,s;const n=this.chains.getBalance(e.chainId,e.symbol,null!=(r=e.address)?r:e.id,t),o=null!=(s=null!=a?a:null==e?void 0:e.decimals)?s:this.chains.getChainControllerById(e.chainId).getConfig().decimals;return(0,W.R6)(this.chains.getChainControllerById(e.chainId),n,e.symbol,o)})),ke(this,"updateTxChain",(e=>{B.Z.dispatch((0,q.G3)({activeChain:e}))})),ke(this,"createIndexedDB",(()=>Fe(this,null,(function*(){try{yield(0,g.ng)()}catch(e){C.Z.error(`Failed to create indexed db: ${e}`),r.Tb(e)}})))),ke(this,"initJsonPatchTemplates",(()=>Fe(this,null,(function*(){try{try{if(yield(0,g.i9)())return void C.Z.info("Templates: Already have templates")}catch(e){C.Z.info("Templates: Need to fetch templates")}const e=yield fetch(`${L.Z.get("REST_API")}/static/templates.json`),t=yield e.text();yield(0,g.JD)(t)}catch(e){C.Z.error(`Failed to init json templates: ${e}`),r.Tb(e);try{if(yield(0,g.i9)())return}catch(e){C.Z.error(`Failed to read json patch templates from the store: ${e}`)}finally{setTimeout((()=>{this.initJsonPatchTemplates()}),1e3)}}})))),ke(this,"fetchAssets",(()=>Fe(this,null,(function*(){try{const e=yield(0,g.zF)("assets"),t=yield(0,re.V)({after:e,fetchPolicy:"no-cache"});yield this.assets.update(t);const a=new Date;a.setSeconds(0),a.setMilliseconds(0),(0,g.tp)("assets",a).catch(r.Tb);const{loadingAllAssets:s}=B.Z.getState().wallets;s&&B.Z.dispatch((0,Q.SM)({loadingAllAssets:!1}))}catch(e){C.Z.error(`Failed to fetch assets: ${e}`)}})))),ke(this,"deleteRoute",((e=!0,t,a,r,s)=>{if(this.addSwapToken(t,a,r),window.localStorage.removeItem("inputToken"),window.localStorage.removeItem("outputToken"),t[0]){const r={fromChainId:t[0].inputChainId,fromTokenAddress:t[0].inputAddress,fromTokenSymbol:t[0].inputSymbol,fromAmount:t[0].inputAmount,fromAmountUSD:t[0].inputAmountFiat,toChainId:t[a].outputChainId,toTokenAddress:t[a].outputAddress,toTokenSymbol:t[a].outputSymbol,toAmount:t[a].outputAmount,toAmountUSD:t[a].outputAmountFiat,provider:t[a].name};e&&this.analytics.track(K.uT.SwapCanceledSwap,r)}r===w.BA.Pending?e&&this.addWalletNotification({title:(0,F.t)("swap.alert.delete.pending.title"),message:(0,F.t)("swap.alert.delete.pending.message"),linkName:s,link:s?`${this.chains.getChainControllerById(t[a].inputChainId).getConfig().network.transaction}/${s}`:void 0}):e&&this.addWalletNotification({title:(0,F.t)("swap.alert.delete.title"),message:r===w.BA.Idle?(0,F.t)("swap.alert.delete.message"):void 0}),this.setActiveSwap(void 0),this.updateSwaps(void 0),this.setSwapPending(!1)})),ke(this,"addSwapToken",((e,t,a)=>Fe(this,null,(function*(){const{activeWalletId:r}=B.Z.getState().wallets,s=B.Z.getState()[O.StoreKeys.Settings].history,n=this.assets.getAllTopAssets().find((a=>a.chainId===e[t].outputChainId&&a.token.id===e[t].outputId));if(n&&a===w.BA.Successful&&n){this.assets.addTokenToWallet(e[t].outputChainId,n.token,r)&&this.addWalletNotification({title:(0,F.t)("swap.alert.added_asset.title",{symbol:n.token.symbol,chainId:this.chains.getChainControllerById(e[t].outputChainId).getConfig().longName}),message:(0,F.t)("swap.alert.added_asset.message"),persisted:!0})}yield this.chains.updateAllChainsBalanceForActiveWallet(),s&&R.N7.find((e=>null==s?void 0:s.location.pathname.includes(e)))&&this.rememberLocation(Se(Ce({},s.location),{pathname:R.ft}),!0)})))),ke(this,"getFormatedPriceStr",(e=>{const{name:t,symbol:a}=B.Z.getState().settings.currency;if(isNaN(e))return"N/A";const r=(0,S.pF)(e,f.UX);return isNaN(e)?"N/A":e>0&&e<.001?`< ${a}0.001 ${t}`:`${a}${r} ${t}`})),ke(this,"getTransactionProp",((e,t)=>{var a,r;let s=e.tradeRoute.provider.time;"multichain"===(null==(a=e.tradeRoute.provider.name)?void 0:a.toLowerCase())&&(s=600),e.tradeRoute.tradeType===x.j4.Approval&&(s=60);const n=Number(e.tradeRoute.amountIn),o=Number(e.tradeRoute.amountOut),i=Number(e.tradeRoute.fee.inboundFeeDollar),l=Number(e.tradeRoute.fee.networkFeeDollar),c=Number(e.tradeRoute.priceRateUsdAssetIn),d=Number(e.tradeRoute.priceRateUsdAssetOut),p=s%60,u=Math.floor(s/60),h=(0,b.j6)((0,b.SO)(e.tradeRoute.assetIn.asset.chain),e.tradeRoute.assetIn.asset.chain,this.chains),g=(0,b.j6)((0,b.SO)(e.tradeRoute.assetOut.asset.chain),e.tradeRoute.assetOut.asset.chain,this.chains);let m=`~${u}min ${p}sec`;u?p||(m=`~${u}min`):m=`~${p}sec`;const y={networkFee:`${parseFloat(Number(e.tradeRoute.fee.inboundFeeAsset).toFixed(6))} ${h.getConfig().tokenSymbol}`,networkFeeDollar:this.getFormatedPriceStr(i),providerFeeDollar:this.getFormatedPriceStr(l),inputAmount:n,inputAmountFiat:this.getFormatedPriceStr(n*c),outputAmount:o,outputAmountFiat:this.getFormatedPriceStr(o*d),outputImage:e.tradeRoute.assetOut.asset.image,inputImage:e.tradeRoute.assetIn.asset.image,outputChainId:g.getId(),inputChainId:h.getId(),outputId:t,tradeId:(null==(r=e.transaction)?void 0:r.tradeId)||1,tradeType:e.tradeRoute.tradeType,inputSymbol:e.tradeRoute.assetIn.asset.symbol.split("-")[0],inputAddress:e.tradeRoute.assetIn.asset.contract,outputSymbol:e.tradeRoute.assetOut.asset.symbol.split("-")[0],outputAddress:e.tradeRoute.assetOut.asset.contract,name:e.tradeRoute.provider.name,icon:e.tradeRoute.provider.icon,time:m,minAmountReceived:e.tradeRoute.minAmountReceived,reward:e.tradeRoute.reward};return e.tradeRoute.tradeType===x.j4.Redeem&&(y.inputChainId=y.outputChainId),y})),ke(this,"updateSwapStatus",((e,t)=>{var a;const r=null==(a=B.Z.getState()[O.StoreKeys.Swaps].swaps)?void 0:a.output.id,s=()=>Fe(this,null,(function*(){return(0,m.J)(e).then((e=>{var a;if(!e.data.routingV2)return!1;if(null==e?void 0:e.error)throw new Error(e.error.message);if(!r)throw new Error("no output token");const s=e.data.routingV2.tradesV2.map((e=>this.getTransactionProp(e,r)));let n=e.data.routingV2.tradesV2.length-1;t&&(n=e.data.routingV2.tradesV2.findIndex((e=>{var a;return(null==(a=e.status)?void 0:a.txHash)===t})));const o=e.data.routingV2.tradesV2[n],i=e.data.routingV2.tradesV2.every((e=>{var t;return(null==(t=e.status)?void 0:t.status)===w.BA.Successful}));if(null==(a=null==o?void 0:o.status)?void 0:a.status){if(o.status.status===w.BA.Pending)return!1;if(o.status.status===w.BA.Successful)if(s.length>1){const e={title:(0,F.t)("swap.alert.completed.multi.title",{index:n+1,total:s.length}),type:"success",message:(0,F.t)("swap.alert.completed.multi.message",{tradeType:(0,I.capitalize)(s[n].tradeType)}),persisted:!0};n===s.length-1&&(e.linkName=(0,F.t)("swap.click_to_view_txn"),e.link=`${this.chains.getChainControllerById(s[n].outputChainId).getConfig().network.transaction}/${t}`),this.addWalletNotification(e)}else this.addWalletNotification({title:(0,F.t)("swap.alert.completed.single.title"),type:"success",message:(0,F.t)("swap.alert.completed.single.message",{tradeType:(0,I.capitalize)(s[n].tradeType)}),linkName:(0,F.t)("swap.click_to_view_txn"),link:`${this.chains.getChainControllerById(s[n].outputChainId).getConfig().network.transaction}/${t}`,persisted:!0});else o.status.status===w.BA.Revert&&this.addWalletNotification({title:(0,F.t)("swap.alert.revert.title"),type:"warning",persisted:!0});return i&&this.deleteRoute(!1,s,s.length-1,w.BA.Successful,""),B.Z.dispatch((0,H.Zk)({swapPending:!1})),!0}return!1})).catch((e=>(C.Z.info("updateSwapStatus",e),!1)))})),n=()=>s().then((e=>{e||setTimeout(n,5e3)}));n()})),ke(this,"checkSwapOnStartup",(()=>{var e;try{const t=null==(e=B.Z.getState().swaps.activeSwap)?void 0:e.routeId;t&&this.updateSwapStatus(t)}catch(e){C.Z.error("Failed to check swap on startup:",e)}})),ke(this,"swap",((e,t,a,r)=>Fe(this,null,(function*(){C.Z.info("MasterController - swap",e);const{wallets:s,activeWalletId:n}=B.Z.getState().wallets,o=s[n],i=o.walletInfo.data,l=o.walletInfo.type;switch(l){case X.c.Keystore:case X.c.PkKeystore:if(!r)throw"Must pass walletCredentials";const e=yield this.masterKeys.generatePasswordFromKeystore(i.keystore,r.walletPassword);r.walletPassword=e;break;case X.c.Ledger:case X.c.Trezor:break;default:throw`swap pre-processing not implemented for ${l}`}const c=e.chainId,d=yield this._swap(c,e,n,r);return yield(0,y.r)({tradeId:a,routeId:t,transactionHash:d}),this.updateSwapStatus(t,d),C.Z.info("swap res",{txHash:d}),d})))),ke(this,"getCachedCurrencies",(()=>Fe(this,null,(function*(){return yield(0,se.D)()})))),ke(this,"rememberLocation",((e,t=!1)=>{B.Z.dispatch((0,q.l6)({location:e,force:t}))})),ke(this,"setActiveSwap",(e=>{B.Z.dispatch((0,H.MA)({activeSwap:e}))})),ke(this,"setReleaseNotesVersion",(e=>{B.Z.dispatch((0,q.xz)({releaseNotesVersion:e}))})),ke(this,"updateSwaps",(e=>{B.Z.dispatch((0,H.tJ)({swaps:e}))})),ke(this,"setReferralInfo",(e=>{B.Z.dispatch((0,q.Kr)(e))})),ke(this,"addWalletNotification",(e=>{B.Z.dispatch((0,U.We)(Se(Ce({},e),{id:(0,ee.Z)()})))})),ke(this,"addDappNotification",(e=>{B.Z.dispatch((0,U.gq)(Se(Ce({},e),{id:(0,ee.Z)()})))})),ke(this,"removeWalletNotification",(()=>{B.Z.dispatch((0,U.Mz)())})),ke(this,"removeDappNotification",(()=>{B.Z.dispatch((0,U.Om)())})),ke(this,"resetNonPersistedNotifications",(()=>{B.Z.dispatch((0,U.Ln)())})),ke(this,"updateDailyAnalyticsDate",(()=>{B.Z.dispatch((0,q.s1)())})),ke(this,"updateGastank",(e=>{B.Z.dispatch((0,q.rZ)(e))})),ke(this,"updateGastankBalance",(e=>{B.Z.dispatch((0,q.Lc)(e))})),ke(this,"setWalletForCampaign",(e=>Fe(this,null,(function*(){try{const t=Object.keys(B.Z.getState().wallets.wallets[e].chainData).reduce(((t,a)=>{const r=this.chains.getChainControllerById(a);return k.mY.hasOwnProperty(r.getConfig().network.chainId)&&(t[k.mY[r.getConfig().network.chainId]]=B.Z.getState().wallets.wallets[e].chainData[a].address),t}),{}),a=Object.entries(t).map((([e,t])=>({chain:e,address:t}))),r=B.Z.getState().settings.userId;yield this.api.post(`${L.Z.get("CAMPAINGS_API")}/campaigns/opt-in`,{userId:r,addresses:a}),B.Z.dispatch((0,J.GC)({walletId:e,chainAddresses:t}))}catch(e){r.Tb(e),C.Z.error("setWalletForCampaign error",{e})}})))),ke(this,"removeWalletFromCampaign",(()=>Fe(this,null,(function*(){const e=B.Z.getState().settings.userId;try{yield this.api.post(`${L.Z.get("CAMPAINGS_API")}/campaigns/opt-out`,{userId:e}),B.Z.dispatch((0,J.eo)())}catch(e){r.Tb(e),C.Z.error("setWalletForCampaign error",{e})}})))),ke(this,"removeRootWallets",(()=>{this.wallets.getRootWallets().forEach((e=>{this.wallets.removeRootWallet(e.id),this.masterKeys.removeAccountKey(e.id)}))})),ke(this,"resetData",(()=>Fe(this,null,(function*(){try{const{activeWalletId:e}=B.Z.getState().wallets;return Object.keys(B.Z.getState().wallets.wallets).includes(e)||this.wallets.selectWallet(Object.keys(B.Z.getState().wallets.wallets)[0]),this.updateTxChain("all"),this.assets.updateActiveAssetChain("all"),this.assets.updateActiveNFTChain("all"),Promise.resolve(!0)}catch(e){return C.Z.error("resetData error",{e}),Promise.reject(!1)}})))),this.wallets=Object.freeze(new he.Z(this)),this.chains=new ie.Z(this),this.masterKeys=Object.freeze(new ue.Z(this.chains)),this.dappsProviders=Object.freeze(new de.Z),this.dapps=Object.freeze(new ce.Z(this.dappsProviders)),this.assets=new ne.Z(this),this.analytics=new te.Z;const e=(0,l.setupCache)({maxAge:6e4});this.api=i().create({adapter:e.adapter}),this.unsubscribe=null,this.createIndexedDB(),setTimeout(this.checkSwapOnStartup,3e3)}restoreBackupCriticalData(e,t){return Fe(this,arguments,(function*({masterKey:e,accountKeys:t},{type:a,password:r,seed:s}){try{let n=s;a===h.J.ByPassword&&(n=yield(0,N.WR)(e,r));const o={masterKey:yield(0,N.sB)(n,r,0),accountKeys:t};return B.Z.dispatch((0,z.Bp)(o)),yield Promise.all(Z()(t,(e=>Fe(this,[e],(function*({keystore:e}){const t=yield this.masterKeys.generatePasswordFromKeystore(e,r),a=yield(0,N.WR)(e,t);return this.wallets.addSubAccountByPhraseOrPK({seedOrPK:a,password:r})}))))),this.postRestore(),!0}catch(e){return C.Z.error(e),!1}}))}postRestore(){this.assets.addTokenToAllWallets()}restoreBackup(e,t){return Fe(this,null,(function*(){const{type:a}=e;if(a!==R.ys.All)return{success:!1,message:"Invalid keystore or password"};let r;try{if(r=(0,u.gb)(e),!r)throw(0,F.t)("app:controller_errors.invalid_backup_data");const{criticalData:a,accounts:s,settings:n,contacts:o,chainConfigs:i}=r,l=A()(r.nftBalances,Object.keys(s.wallets)),{activeWalletId:c,wallets:d}=s,{masterKey:p,accountKeys:h}=a;yield(0,N.WR)(p,t);const g={masterKey:p,accountKeys:h};B.Z.dispatch((0,z.Bp)(g));const m=Object.keys(i),y=this.chains.getAllChainControllers().map((e=>e.getId())),f=m.filter((e=>!y.includes(e)));for(const e of f)B.Z.dispatch((0,V.ws)(i[e])),this.chains.addChainController(i[e]);const w=yield this.restoreWallets(d,t,c,n,l,o);return this.postRestore(),w}catch(a){if("Invalid password"===a)return{success:!1,message:a};const s=r?r.criticalData:(0,u.JC)(e),n=yield this.restoreBackupCriticalData(s,{type:h.J.ByPassword,password:t});return{success:n,message:n?"There were some problems in your backup data! But you have been restored master keystore and wallets successfully! Hold on...":"Invalid backup file or password"}}finally{this.wallets.init(!1)}}))}restoreBackupWithMasterPhrase(e,t,a){return Fe(this,null,(function*(){const{type:r}=a;if(r!==R.ys.All)return{success:!1,message:"Invalid XDEFI Seed phrase"};let s,n;try{s=new le.H(ue.Z.getPhraseFromInput(e))}catch(e){return{success:!1,message:"Invalid XDEFI Recovery code"}}try{if(n=(0,u.gb)(a),!n)throw(0,F.t)("app:controller_errors.invalid_backup_data");const{accounts:e,settings:r,criticalData:o,contacts:i,chainConfigs:l}=n,c=A()(n.nftBalances,Object.keys(e.wallets)),{activeWalletId:d,wallets:p}=e,h=p[d];if(h.walletInfo.type!==X.c.Keystore)throw(0,F.t)("app:controller_errors.wallet_type_is_not_keystore");const g=h.walletInfo.data;if(!g.publickeys)throw(0,F.t)("app:controller_errors.incorrect_wallet_data");const m=(0,N.UL)(g.publickeys),y=(0,Y.Jz)(`${s.toString()}${m.toString()}`);if(!g.keystore)throw(0,F.t)("app:controller_errors.no_keystore");const f=g.keystore;try{yield(0,N.WR)(f,y)}catch(e){return{success:!1,message:"Invalid XDEFI Recovery code"}}const{accountKeys:w}=o,x={masterKey:yield(0,N.sB)(s,t,0),accountKeys:w};B.Z.dispatch((0,z.Bp)(x));const b=Object.keys(l),v=this.chains.getAllChainControllers().map((e=>e.getId())),P=b.filter((e=>!v.includes(e)));for(const e of P)B.Z.dispatch((0,V.ws)(l[e])),this.chains.addChainController(l[e]);return yield this.restoreWallets(p,t,d,r,c,i)}catch(e){if("Invalid password"===e)return{success:!1,message:e};const r=n?n.criticalData:(0,u.JC)(a),o=yield this.restoreBackupCriticalData(r,{type:h.J.ByPassword,password:t,seed:s});return{success:o,message:o?(0,F.t)("app:controller_errors.there_were_some_problems_in_your_data"):(0,F.t)("app:controller_errors.invalid_backup_file_or_password")}}finally{this.wallets.init(!1)}}))}generatePasswordFromKeystore(e){const{wallets:t}=B.Z.getState().wallets,a=t[e];if(!a)return Promise.reject(`Wallet id ${e} not found`);if(a.walletInfo.type!==X.c.Keystore&&a.walletInfo.type!==X.c.PkKeystore)return null;const r=a.walletInfo.data;return this.masterKeys.generatePasswordFromKeystore(r.keystore,this.masterKeys.masterPassword)}decrypt(e,t){return Fe(this,null,(function*(){return C.Z.debug({method:"decrypt",dappMessage:e}),new Promise(((a,r)=>Fe(this,null,(function*(){try{const{wallets:s,activeWalletId:n}=B.Z.getState().wallets,o=s[n];if(!o)return r(`Wallet id ${n} not found`);const i=o.walletInfo.data,l=e.raw.params.params[0],c=(0,N.NS)(l),d=e.chainId,p=o.walletInfo.type;let u="";switch(p){case X.c.Keystore:case X.c.PkKeystore:const e=yield this.masterKeys.getAccountSeedPhrase(n,t);e&&(u=this.chains.getPrivateKey(d,{seed:e,walletIndex:i.walletIndex||0}));break;case X.c.Ledger:case X.c.Trezor:u=yield(0,pe.D)(p).getEIP1024SharedSecret(c.ephemPublicKey,i.walletIndex||0,i.derivationPath);break;default:throw`decrypt: Wallet type not supported ${p}`}const h=(0,v.decrypt)(c,u);return C.Z.debug({msg:"decrypt",decryptedMsg:h}),a(h)}catch(e){return C.Z.error({method:"decrypt: not handled",error:e}),r(e)}}))))}))}getEncryptionPublicKey(e,t){return Fe(this,null,(function*(){return C.Z.debug({method:"getEncryptionPublicKey",dappMessage:e}),new Promise(((a,r)=>Fe(this,null,(function*(){try{const{wallets:s,activeWalletId:n}=B.Z.getState().wallets,o=s[n];if(!o)return r(`Wallet id ${n} not found`);const i=o.walletInfo.data,l=this.chains.getChainControllerById(e.chainId),c=o.walletInfo.type;let d="";switch(c){case X.c.Keystore:case X.c.PkKeystore:const e=yield this.masterKeys.getAccountSeedPhrase(n,t);if(e){const t=this.chains.getPrivateKey(l.getId(),{seed:e,walletIndex:i.walletIndex||0});d=(0,v.getEncryptionPublicKey)(t)}break;case X.c.Ledger:case X.c.Trezor:d=yield(0,pe.D)(c).getEIP1024PublicEncryptionKey(i.walletIndex||0,i.derivationPath);break;default:throw`getEncryptionPublicKey: Wallet type not supported ${c}`}return C.Z.debug({msg:"getEncryptionPublicKey",pubKey:d}),a(d)}catch(e){return C.Z.error({method:"getEncryptionPublicKey: not handled",error:e}),r(e)}}))))}))}approveDappsTransaction(e,t,a,r,s){return Fe(this,null,(function*(){return C.Z.debug({method:"approveDappsTransaction",dappMessage:e}),new Promise(((n,o)=>Fe(this,null,(function*(){var i,l;try{const{wallets:c}=B.Z.getState().wallets,d=c[t],p=d.walletInfo.data;if(!d)return o(`Wallet id ${t} not found`);const u=d.walletInfo.type;let h="",g="";switch(u){case X.c.Keystore:case X.c.PkKeystore:if(!r)throw"Must pass walletCredentials";h=yield this.masterKeys.generatePasswordFromKeystore(p.keystore,r.walletPassword),r.walletPassword=h,g=X.c.PkKeystore===u?"PKKEYSTORE":"KEYSTORE";break;case X.c.Ledger:case X.c.Trezor:g="LEDGER";break;default:throw`approveDappTransaction: Wallet type not supported ${u}`}const m=yield this.chains.getChainControllerById(e.chainId).approveDappTransaction(e,t,r,s);C.Z.debug({msg:"approveDappsTransaction",result:m}),this.analytics.track(K.uT.ApproveDappTransaction,{chainId:e.chainId,dappId:new URL((null==(l=null==(i=null==e?void 0:e.origin)?void 0:i.tab)?void 0:l.url)||"http://localhost").hostname,type:a,walletTypeStr:g});const y=Se(Ce({},e),{xdefiId:e.xdefiId,raw:{id:e.xdefiId,result:m}});return D.browser.extension.getBackgroundPage().processor.reply(y),n(m)}catch(e){return C.Z.error({method:"approveDappsTransaction: not handled",error:e}),o(e)}}))))}))}validateTx(e,t){return C.Z.info("validating Tx for chain: ",e),this.chains.getChainControllerById(e).validateTx(t)}sendTx(e,t,a,r,s){return Fe(this,null,(function*(){var n;C.Z.info("sending Tx for chain: ",e);const{wallets:o}=B.Z.getState().wallets,i=o[a],l=i.walletInfo.data,c=i.walletInfo.type;let d="";switch(c){case X.c.Keystore:case X.c.PkKeystore:if(!s)throw"Must pass walletCredentials";d=yield this.masterKeys.generatePasswordFromKeystore(l.keystore,s.walletPassword),s.walletPassword=d;break;case X.c.Ledger:case X.c.Trezor:break;default:throw`sendTx pre-processing not imeplemented for ${c}`}try{const n=yield this.chains.getChainControllerById(e).sendTx(t,a,s);return this.analytics.track(K.uT.SendAssetSuccess,Se(Ce({},r),{txHash:n})),n}catch(e){throw this.analytics.track(K.uT.SendAssetFailed,Se(Ce({},r),{error:null!=(n=null==e?void 0:e.message)?n:JSON.stringify(e)})),e}}))}signPsbt(e,t,a,r){return Fe(this,null,(function*(){const{wallets:s}=B.Z.getState().wallets,n=s[a],o=n.walletInfo.data,i=n.walletInfo.type;let l="";switch(i){case X.c.Keystore:case X.c.PkKeystore:if(!r)throw"Must pass walletCredentials";l=yield this.masterKeys.generatePasswordFromKeystore(o.keystore,r.walletPassword),r.walletPassword=l;break;case X.c.Ledger:case X.c.Trezor:break;default:throw`sendTx pre-processing not imeplemented for ${i}`}try{return yield this.chains.getChainControllerById(t).signPsbt(e,a,r)}catch(e){throw e}}))}setLoading(e){B.Z.dispatch((0,q.Xt)({loading:e}))}setOnBoarding(e){B.Z.dispatch((0,q.K$)({onBoarding:e}))}setInternalUpgradeRequired(e){B.Z.dispatch((0,q.h5)({internalUpgradeRequired:e}))}toggleInfiniteApproval(){B.Z.dispatch((0,H.t7)())}toggleCustomRecipient(){B.Z.dispatch((0,H.h7)())}setSlippage(e){B.Z.dispatch((0,H.Zj)({slippage:e}))}setPreferedPayMethod(e){B.Z.dispatch((0,H.OZ)(e))}setSwapPending(e){B.Z.dispatch((0,H.Zk)({swapPending:e}))}_swap(e,t,a,r){return Fe(this,null,(function*(){const{activeWalletId:o}=B.Z.getState().wallets,i=t,l=this.chains.getChainControllerById(e);switch(l.getType()){case _.J.Binance:{const e=Se(Ce({},t),{address:t.address||""});return l.selfCast().sendTx(e,a,r)}case _.J.Bitcoin:case _.J.Litecoin:case _.J.BitcoinCash:return l.selfCast().sendTx(i,a,r);case _.J.Dogecoin:{const e=l.selfCast(),s=yield e.getFeesWithRates(t.memo);return i.feeRate=s.rates[n.aK.Average],e.sendTx(i,a,r)}case _.J.Thorchain:if(t.unsignedStdTx)return yield l.selfCast().signAndBroadcastTx(t.unsignedStdTx,t.fromAddress,o,r);throw"Tx failed";case _.J.Terra:if(t.unsignedStdTx){let e,n=t.memo;if("core/StdTx"===t.unsignedStdTx.type){const{from_address:a,to_address:r,amount:o}=t.unsignedStdTx.value.msg[0].value;e=new s.MsgSend(a,r,null==o?void 0:o.map((e=>s.Coin.fromData(e)))),n=t.unsignedStdTx.value.memo}else{const{sender:a,contract:r,execute_msg:n,coins:o}=t.unsignedStdTx.value;e=new s.MsgExecuteContract(a,r,n,null==o?void 0:o.map((e=>s.Coin.fromData(e))))}const o={memo:n,msgs:[e]};return(yield l.selfCast().signAndBroadcastTx(o,a,t.fromAddress,t.toAddress,r)).txhash}throw"Tx failed";case _.J.Evm:{const e=l.selfCast();let s=yield(0,ae.X7)(e);const n=yield e.getNonce(t.fromAddress),o=Se(Ce({address:"",isToken:!1,decimals:e.getConfig().decimals},t),{nonce:n,gasLimit:t.gasLimit||1e6});if(e.support(_.B.Eip1559)){const{maxFeePerGas:e,maxPriorityFeePerGas:a}=s;if(o.maxFeePerGas=Number(e.toFixed(9)),o.maxPriorityFeePerGas=Number(a.toFixed(9)),!t.gasLimit)try{const e=yield l.selfCast().estimateTx(o.fromAddress,o.toAddress,P.parseUnits(o.amount).toString(),o.data),t=Number(e.toString());t<o.gasLimit&&(o.gasLimit=t)}catch(e){}}else s&&(o.gasPrice=Number(s.fast.toFixed(9))||0);return e.sendTx(o,a,r,!0)}case _.J.Solana:return l.selfCast().swap(t,a,r);case _.J.Near:{const e=t.data,s={signerId:t.signerId,receiverId:t.receiverId,actions:e.map((e=>({params:e,type:"FunctionCall"})))},n={chainType:_.J.Near,chainId:E.yp.Near,time:0,xdefiId:"0",raw:{params:{transaction:s},method:"signAndSendTransaction"}};return(yield l.approveDappTransaction(n,a,r)).toString()}case _.J.Cosmos:return l.selfCast().swap(t.unsignedStdTx,a,r);default:throw C.Z.error("swap error",{swapObj:t}),`${e} not supported yet`}}))}}ke(Ie,"getWalletIdWithMessage",(e=>{var t,a;const{wallets:r,activeWalletId:s}=B.Z.getState().wallets,n=oe.j8.getFromAccountIMessage(e);if(!n)return s;const o=null==(t=String(n))?void 0:t.toLowerCase(),i=Object.values(r);C.Z.debug({fromAddr:n,walletsArr:i,wallets:r});const l=i.findIndex((t=>{var a,r;return null==(r=null==(a=t.chainData[e.chainId])?void 0:a.address)?void 0:r.toLowerCase().includes(o)}));if(C.Z.debug({res:l}),l<0)throw`Could not find the wallet attached with the dApp message's address: "${o}"`;return null==(a=i[l])?void 0:a.id}));t()}catch(e){t(e)}}))},845826:(e,t,a)=>{a.d(t,{Eq:()=>h,Fs:()=>y,Zy:()=>m,zS:()=>g});var r=a(409669),s=a.n(r),n=a(244431),o=a.n(n),i=a(939789),l=a.n(i),c=a(739989),d=a(496486),p=a(834392),u=a(46461);const h=e=>{return t=void 0,a=null,r=function*(){return new Promise(((t,a)=>{try{s().get(e).then((e=>{var t;return(null==(t=null==e?void 0:e.data)?void 0:t.result)||[]})).then((e=>{if(c.Z.debug({transactions:e}),!(0,d.isArray)(e))return t([]);const a=(0,d.uniqBy)(e.map((e=>({address:e.contractAddress,name:e.tokenSymbol,symbol:e.tokenSymbol,decimals:e.tokenDecimal,id:e.contractAddress,image:null}))).filter((e=>!!Number(e.decimals))),"address");return c.Z.debug({tokens:a}),t(a)}))}catch(e){c.Z.error({error:e}),a(e)}}))},new Promise(((e,s)=>{var n=e=>{try{i(r.next(e))}catch(e){s(e)}},o=e=>{try{i(r.throw(e))}catch(e){s(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,o);i((r=r.apply(t,a)).next())}));var t,a,r},g=e=>!e.isZero()&&e.lt(p.Ju),m=(e,t,a)=>`${e}_${t}_${a}`,y=(e,t)=>{if(!isFinite(l().uintOrNaN(t)))throw(0,u.t)("app:controller_errors.invalid_fee_rate");let a=0;for(let r=0;r<e.length;++r){const s=e[r],n=t*l().inputBytes(s),o=l().uintOrNaN(s.value);n>s.value&&(a+=o)}return new(o())(a).dividedBy(1e8)}},7524:(e,t,a)=>{a.d(t,{$:()=>c});var r=a(855835),s=a(450780),n=a.n(s),Buffer=a(348764).Buffer,o=Object.defineProperty,i=(e,t,a)=>(((e,t,a)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);class l{constructor(e){i(this,"pubKey"),this.pubKey=e}getAddress(){return r.createHash("sha256").update(this.pubKey).digest().subarray(0,20)}verify(e){return null!==n().sign.open(new Uint8Array(e),new Uint8Array(this.pubKey))}toBuffer(){return Buffer.from(this.pubKey)}toBase64(){return this.pubKey.toString("base64")}toJSONInCodec(){return this.toBase64()}static fromBase64(e){const t=Buffer.from(e,"base64");return new l(t)}static fromJSON(e){return l.fromBase64(e)}}class c{constructor(e){i(this,"pubKey"),i(this,"privKey");const t=n().sign.keyPair.fromSeed(new Uint8Array(e));this.pubKey=new l(Buffer.from(t.publicKey)),this.privKey=e}getPubKey(){return this.pubKey}sign(e){const t=n().sign.keyPair.fromSeed(new Uint8Array(this.privKey));return Buffer.from(n().sign(new Uint8Array(e),new Uint8Array(t.secretKey)))}toBuffer(){return Buffer.from(this.privKey)}toBase64(){return this.privKey.toString("base64")}toJSONInCodec(){return this.toBase64()}static fromBase64(e){const t=Buffer.from(e,"base64");return new c(t)}static fromJSON(e){return c.fromBase64(e)}}},730876:(e,t,a)=>{a.d(t,{H:()=>i});var r=a(202153),s=a(46461),n=Object.defineProperty,o=(e,t,a)=>(((e,t,a)=>{t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a})(e,"symbol"!=typeof t?t+"":t,a),a);class i{constructor(e){if(o(this,"entropy"),o(this,"__isSeed"),!i.isValid(e))throw(0,s.t)("app:controller_errors.mnemonic_phrase_is_not_valid");this.entropy=(0,r.oy)(e),this.__isSeed=!0}static isValid(e){return(0,r._I)(e)}toEntropy(){return this.entropy}toBuffer(){return(0,r.Z1)(this.toString())}toString(){return(0,r.JJ)(this.entropy)}static fromEntropy(e){return new i((0,r.JJ)(e))}static isSeed(e){return!(!e||!e.__isSeed)}}},750231:(e,t,a)=>{a.d(t,{C:()=>s});var r=a(556138);const s=e=>-1!==[r.WalletType.Ledger,r.WalletType.Trezor].indexOf(e)},459457:(e,t,a)=>{a.d(t,{Lp:()=>F});var r=a(393581),s=a(235367),n=a(285497),o=a(22307),i=a(265142),l=a(138066),c=a(862457),d=a(595210),p=a(636765),u=a(456169),h=a(158042),g=a(369483),m=a.n(g),y=a(847001),f=a(264487),w=a(739989),x=a(204147),b=a(867885);const v=new d.GraphQLWsLink((0,h.eI)({url:y.Z.get("GQL_WS_ENDPOINT"),on:{closed:()=>{(0,f.eN)({message:"WebSocket closed"}),w.Z.info("WebSocket closed")},error:e=>{(0,f.Tb)(e),w.Z.error("WebSocket error:",e)}},shouldRetry:()=>!0})),P=new l.A({uri:y.Z.get("GQL_HTTP_ENDPOINT"),batchMax:20,batchInterval:50}),C=new c.W({delay:{initial:300,max:1/0,jitter:!0},attempts:{max:3,retryIf:(e,t)=>!!e}}),S=r.i.from([C,(0,s.V)((({query:e})=>{const t=(0,p.p$)(e);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),v,P)]),k=new n.h({dataIdFromObject:e=>e.id,possibleTypes:b,typePolicies:{Query:{fields:{assets:{merge:!0}}},AmountType:{keyFields:!1},ImageType:{keyFields:!1},TokenContractType:{keyFields:!1},AssetTokenContractType:{keyFields:!1},AddressType:{keyFields:!1}}});m().config({driver:m().INDEXEDDB,storeName:"cache",name:"xdefi-gql"});new u.cA({cache:k,storage:new u.xm(m()),debug:!1,trigger:"write",maxSize:!1,persistenceMapper:e=>{return t=void 0,a=null,r=function*(){const t=JSON.parse(e),a={},r=[],s=t.ROOT_QUERY;return s&&(a.ROOT_QUERY=Object.keys(s).reduce(((e,t)=>{if("__typename"===t)return e;if(e[t]=s[t],Array.isArray(s[t])){const e=s[t].map((e=>e.__ref));r.push(...e)}else{const e=s[t].__ref;r.push(e)}return e}),{__typename:"Query"}),r.reduce(((e,a)=>(e[a]=t[a],e)),a)),JSON.stringify(a)},new Promise(((e,s)=>{var n=e=>{try{i(r.next(e))}catch(e){s(e)}},o=e=>{try{i(r.throw(e))}catch(e){s(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,o);i((r=r.apply(t,a)).next())}));var t,a,r}});const F=new o.f({link:S,cache:k,name:"extension_app",version:x.i8});window.__APOLLO_CLIENT__=F,window.__APOLLO_GQL__=i.Ps},189556:(e,t,a)=>{a.d(t,{m:()=>s});var r=a(831352),s=(e=>(e.High="high",e.Medium="medium",e.Low="low",e))(s||{});r.yp.Ethereum,r.yp.Avalanche,r.yp.CantoEvm,r.yp.CronosEvm,r.yp.Fantom,r.yp.Gnosis,r.yp.Klaytn,r.yp.Optimism,r.yp.Polygon},834392:(e,t,a)=>{a.d(t,{DF:()=>i,Ju:()=>d,UX:()=>l,uO:()=>c});var r=a(244431),s=a.n(r),n=a(771341),o=Math.pow;const i=6,l=2,c=6,d=new(s())(1).div(o(10,i));n.JE,n.k0,n.kf,n.JP,n.TI},680528:(e,t,a)=>{a.d(t,{Df:()=>p,Ds:()=>d,KV:()=>u,N7:()=>l,SR:()=>c,ZN:()=>s,ft:()=>n,hX:()=>i,iA:()=>o,lo:()=>h,ys:()=>r});var r=(e=>(e.Single="single",e.All="all",e))(r||{}),s=(e=>(e.None="",e.Create="create",e.Import="import",e.ViewOnly="view-only",e.SubAccount="sub-account",e.Hardware="hardware",e.Confirm="confirm",e))(s||{});const n="/";const o="/import-wallet",i="/details",l=["/swapAssets","/swapTransactions","/swap"],c=75e5;const d="safeTransferFrom(address,address,uint256)",p="safeTransferFrom(address,address,uint256,uint256,bytes)",u=Object.freeze({A0:0,A6:6,A8:8,A9:9,A18:18,A24:24}),h=8},741797:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Aw:()=>u});var s=a(667294),n=a(281672),o=a(505403),i=a(50533),l=a(831352),c=e([n,o]);[n,o]=c.then?(await c)():c;var d=Math.pow;const p=e=>{const t=(0,n.UW)(),a=(0,i.v9)((t=>{var a;return t.balances[e||(null==(a=t.wallets)?void 0:a.activeWalletId)]})),{getFiatPriceForAmount:r}=(0,o.Z)();return(0,s.useCallback)((()=>{var e;const s=t.chains.getChainControllerById(l.yp.Bitcoin).getConfig(),n=null==(e=null==a?void 0:a.chains)?void 0:e[s.id],o=Number((null==n?void 0:n.ordinalBalance)||"0")/d(10,s.decimals);return{balance:o,fiat:r(s.id,o,s.chainSymbol)}}),[a.chains,r,t.chains])},u=e=>{const t=(0,n.UW)(),a=p(e),{getAssetFiatBalanceStr:r}=(0,o.Z)(),i=(0,s.useCallback)((a=>{var r;const{address:s,decimals:n}=t.getAssetAddressDecimals(a.chainId,a.token);return Number(t.getFormattedBalance({address:s,chainId:a.chainId,symbol:a.token.symbol,asset:null==(r=a.token)?void 0:r.asset,decimals:n},e))}),[e,t]);return{getAssetFiatBalance:(0,s.useCallback)((a=>{const{address:s,decimals:n}=t.getAssetAddressDecimals(a.chainId,a.token);return Number(r(a.chainId,a.token.symbol,s,n,a.token.id,!1,e))}),[t,r,e]),getAssetBalance:i,getAssetFiatBalanceStr:r,getOrdinalBalance:a}};r()}catch(e){r(e)}}))},371006:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(308787),s=a(876777),n=a(818117),o=e([r]);r=(o.then?(await o)():o)[0];n.ZP.div`
  position: absolute;
  left: 10px;
`,(0,n.ZP)(r.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-evenly"})`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${s.wL.ash};
`,n.ZP.img`
  position: absolute;
  inset: 0;
  width: inherit;
  height: inherit;
`,(0,n.ZP)(r.FlexBox)`
  width: 400px;
  height: 600px;
  background: ${s.wL.black};
  z-index: 2;
  position: relative;
  overflow: hidden;
  ${({$isPopup:e})=>e&&"width: 100%;"}
`,n.ZP.div`
  position: relative;
  height: 48px;
`,n.ZP.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`,(0,n.ZP)(r.FlexBox).attrs((({contentVariant:e})=>({flex:1,m:e?"0":"0 10px 10px"})))`
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.3);
  overflow-x: hidden;
  background: ${({theme:e})=>e.colors.mineShaft};

  ${({contentVariant:e})=>e&&n.iv`
      background: ${({theme:e})=>e.colors.black};

      overflow-y: hidden !important;
      flex-direction: column;
      justify-content: space-between;
    `}
`,(0,n.ZP)(r.FlexBox).attrs({m:"0 10px",flexDirection:"row",alignItems:"center"})`
  height: 40px;

  border-bottom: 1px solid ${({theme:e})=>e.colors.black};
`,(0,n.ZP)(r.FlexBox).attrs({alignItems:"center"})`
  heiht: 40px;
`;t()}catch(e){t(e)}}))},353789:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{og:()=>o.Z});var s=a(213415),n=a(728847),o=a(115105),i=(a(936352),e([s,n,o]));[s,n,o]=i.then?(await i)():i,r()}catch(e){r(e)}}))},935527:(e,t,a)=>{a.a(e,(async(e,t)=>{try{var r=a(818117),s=a(308787),n=a(876777),o=e([s]);s=(o.then?(await o)():o)[0];r.ZP.div`
  height: 100%;
  width: 100%;
  position: fixed;
  background-color: ${n.wL.black};
  padding: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
`,(0,r.ZP)(s.FlexBox)`
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
`,(0,r.ZP)(s.Link)`
  text-align: unset;
`,r.ZP.i`
  width: 44px;
  height: 44px;
  background: ${n.wL.deepSea};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`,r.ZP.div`
  background: ${n.wL.black};
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
  border-bottom: 1px solid ${n.wL.black};
  border-top: 1px solid ${n.wL.black};
  display: flex;
  flex-direction: row-reverse;
`,(0,r.ZP)(s.FlexBox)`
  min-width: 72px;
  height: 21px;
  background-color: ${n.wL.darkGrey};
  border-radius: 54px;
  align-items: center;
  justify-content: center;
`,(0,r.ZP)(s.FlexBox)`
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
`,(0,r.ZP)(s.SecondaryButton)`
  margin-right: 10px;
`,(0,r.ZP)(s.PrimaryButton)``,r.ZP.div`
  margin-left: 10px;
  overflow-x: auto;

  > .react-json-view {
    word-break: break-all;
  }
`,(0,r.ZP)(s.FlexBox).attrs({padding:"22px 8px 8px 8px",alignItems:"center"})`
  background: ${n.wL.mineShaft};
  border-radius: 8px;
  row-gap: 16px;
`,(0,r.ZP)(s.ConfirmLedger)`
  position: fixed;
  height: 90px;
`;t()}catch(e){t(e)}}))},851892:(e,t,a)=>{a.d(t,{vy:()=>r});a(409669),a(691438),a(179826),a(936609),a(522933);var r=(e=>(e.GasLimit="GasLimit",e))(r||{});const s={DUST:"error_helper.DUST",INSUFFICIENT_FUNDS:"error_helper.INSUFFICIENT_FUNDS",GasLimit:"error_helper.GUS_LIMIT","-32601":"error_helper.-32601","-32003":"error_helper.-32003","-32004":"error_helper.-32004","-32005":"error_helper.-32005",4001:"error_helper.4001",4100:"error_helper.4100",4200:"error_helper.4200",4900:"error_helper.4900",4901:"error_helper.4901"};Object.keys(s)},427504:(e,t,a)=>{a.d(t,{Cb:()=>d,R6:()=>u,zr:()=>p});var r=a(256371),s=a(680528),n=a(691438),o=a(845826),i=a(834392),l=a(339729),c=a(299246);function d(e,t=!1){return e.isNaN()?"0":`${t&&(0,o.zS)(e)?"~":""}${(0,c.pF)(e,i.DF,{trimTrailingZero:!0})}`}function p(e,t,a=!1){return e.isNaN()?`0 ${t}`:`${a&&(0,o.zS)(e)?"~":""}${(0,c.pF)(e,i.DF,{trimTrailingZero:!0})} ${t}`}function u(e,t,a,o){const i=e.getType();switch(i){case n.J.Binance:return String(t);case n.J.Bitcoin:case n.J.BitcoinCash:case n.J.Litecoin:case n.J.Dogecoin:return a===l.kV.symbol?(0,r.formatUnits)(String(t),e.getConfig().decimals):(0,r.formatUnits)(String(t),8);case n.J.Thorchain:return a===l.kV.symbol?(0,r.formatUnits)(String(t),e.getConfig().decimals):(0,r.formatUnits)(String(t),o);case n.J.Terra:case n.J.Near:case n.J.Solana:return(0,r.formatUnits)(String(t),null!=o?o:s.KV.A6);case n.J.Tron:return String(t);default:if(i===n.J.Evm)try{return e.getConfig().tokenSymbol===a?String(t):(0,r.formatUnits)(String(t),o)}catch(e){return"0"}if(i===n.J.Cosmos)return(0,r.formatUnits)(String(t),null!=o?o:s.KV.A6);throw`getAssetAmount not handled for ${e.getType()}`}}},626423:(e,t,a)=>{a.d(t,{Bw:()=>R,C6:()=>I,Hy:()=>S,J$:()=>W,NU:()=>Z,WG:()=>L,WU:()=>j,XL:()=>T,YO:()=>k,Zb:()=>K,bg:()=>_,c4:()=>D,dk:()=>J,hv:()=>E,hz:()=>F,ix:()=>B,mY:()=>G,pr:()=>$,qN:()=>N,r0:()=>O});var r=a(698858),s=a(831352),n=a(435161),o=a.n(n),i=a(556138),l=a(216558),c=a(489396),d=a(691438),p=a(222751),u=a(977710),Buffer=a(348764).Buffer,h=Object.defineProperty,g=Object.defineProperties,m=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=(e,t,a)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,b=(e,t)=>{for(var a in t||(t={}))f.call(t,a)&&x(e,a,t[a]);if(y)for(var a of y(t))w.call(t,a)&&x(e,a,t[a]);return e},v=(e,t)=>g(e,m(t));const P="https://imaginary.xdefi.services",C=`${P}/insecure/resize:fit:500:500:0/gravity:ce/plain/`;function S(e,t){const a=`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(e))}`,r=document.createElement("a");r.setAttribute("href",a),r.setAttribute("download",`${t}.json`),document.body.appendChild(r),r.click(),r.remove()}function k(e){let t="";const a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let r=0;r<e;r++)t+=a.charAt(Math.floor(62*Math.random()));return t}const F=e=>{let t=0;return o()(e,(({label:e})=>{const a=e.match(/Account (\d+)$/);if(a){const e=Number(a[1]);t=Math.max(t,e)}})),t+1},I=e=>{const t=[];return o()(Object.keys(e),(a=>{const r=e[a];if(r.walletInfo.type===i.WalletType.Keystore){0===r.walletInfo.data.walletIndex&&t.push(r)}else if((0,l.C)(r.walletInfo.type)){0===r.walletInfo.data.walletIndex&&t.push(r)}})),t.length+1},$=e=>e.split(".").pop(),Z=e=>{const t=$(e);switch(null==t?void 0:t.toLowerCase()){case"m4v":case"avi":case"mpg":case"mp4":return!0}return!1};function T(e){switch(e){case s.g5.Mainnet:return r.Zc.Mainnet;case s.g5.Testnet:return r.Zc.Testnet;default:throw"Network not supported"}}const A=(e,t)=>Object.keys(e).filter((a=>e[a]===t));const j=e=>e&&JSON.parse(JSON.stringify(e)),D=e=>{const t=t=>Object.values(e.chainData[t].tokens).reduce(((e,t)=>(e[t.id]=t,e)),{}),a=Object.keys(e.chainData).reduce(((a,r)=>(e.chainData[r]&&(a[r]=v(b({},e.chainData[r]),{tokens:t(r)})),a)),{});return v(b({},e),{chainData:a})},B=e=>{let t=e;return/^https?:\/\//i.test(t)||(t=`http://${t}`),t},O=e=>e.replace(/^https?:\/\//,""),_=e=>Z(e)?e:e.startsWith("http")?e.startsWith(P)?e:`${C}${encodeURIComponent(e)}`:e,N=e=>(0,l.C)(e.walletInfo.type),L=(e,t)=>{let a;return A(E,e.getId()).map((e=>isNaN(Number(e))?e:Number(e)))&&e.support(d.B.Nft)&&(a=t.length||0),a},E={1:s.yp.Ethereum,10:s.yp.Optimism,25:s.yp.CronosEvm,56:s.yp.BinanceSmartChain,100:s.yp.Gnosis,137:s.yp.Polygon,250:s.yp.Fantom,7700:s.yp.CantoEvm,8217:s.yp.Klaytn,42161:s.yp.Arbitrum,43114:s.yp.Avalanche,1313161554:s.yp.Aurora,"cosmoshub-4":s.yp.Cosmoshub,"akashnet-2":s.yp.Akash,"axelar-dojo-1":s.yp.Axelar,"crescent-1":s.yp.Crescent,"crypto-org-chain-mainnet-1":s.yp.Cronos,"juno-1":s.yp.Juno,"kava_2222-10":s.yp.Kava,"kaiyo-1":s.yp.Kujira,"mars-1":s.yp.Mars,"osmosis-1":s.yp.Osmosis,"stargaze-1":s.yp.Stargaze,"atlantic-2":s.yp.SeiTestnet,"stride-1":s.yp.Stride,"bitcoin-mainnet":s.yp.Bitcoin,"bitcoin-testnet":s.yp.BitcoinTestnet,litecoin:s.yp.Litecoin,dogecoin:s.yp.Dogecoin,bitcoincash:s.yp.BitcoinCash,binance:s.yp.Binance,thorchain:s.yp.Thorchain,"mainnet-beta":s.yp.Solana,"phoenix-1":s.yp.Terra,near:s.yp.Near,tron:s.yp.Tron,mayachain:s.yp.Mayachain},G=v(b({},E),{7e3:"zetachain"}),R=e=>{const t=A(E,e);if(0===t.length)throw`ChainId ${e} is not supported`;return t[0]},K=(e,t)=>{const a=u.tP[e];c.Z.config.setBech32Prefix({accAddr:a,accPub:a+"pub",valAddr:a+"valoper",valPub:a+"valoperpub",consAddr:a+"valcons",consPub:a+"valconspub"});const r=new c.Z.proto.cosmos.crypto.secp256k1.PubKey({key:Uint8Array.from(Buffer.from(t,"hex"))});return c.Z.AccAddress.fromPublicKey(r).toAccAddress().toString()};const W=e=>e.reduce(((e,t)=>(e[t]=!0,e)),{}),M=(e,t)=>{let a=e;for(;a.length<t;)a=`0${a}`;return a},J=({v:e,r:t,s:a})=>{const r=(0,p.fromSigned)(t),s=(0,p.fromSigned)(a),n=M((0,p.toUnsigned)(r).toString("hex"),64),o=M((0,p.toUnsigned)(s).toString("hex"),64),i=(0,p.stripHexPrefix)((0,p.intToHex)(e));return(0,p.addHexPrefix)(n.concat(o,i)).toString()}},281672:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Iq:()=>u,JB:()=>h,Ni:()=>l,UW:()=>i,fU:()=>d,i_:()=>c,nl:()=>p});a(667294);var s=a(519416),n=(a(311428),a(893600)),o=e([n]);function i(){return s.browser.extension.getBackgroundPage().masterController}function l(){const{masterKeys:e}=i();return e}function c(){const{wallets:e}=i();return e}function d(){const{chains:e}=i();return e}function p(){const{dapps:e}=i();return e}function u(){const{dappsProviders:e}=i();return e}function h(){const{assets:e}=i();return e}n=(o.then?(await o)():o)[0];r()}catch(g){r(g)}}))},771341:(e,t,a)=>{a.d(t,{$Y:()=>z.Z,$u:()=>k.Z,Aq:()=>A.Z,C8:()=>G.Z,Cg:()=>D.Z,DV:()=>P.Z,E4:()=>I.Z,FE:()=>E.Z,FF:()=>te.Z,Hv:()=>re.Z,I1:()=>X.Z,IG:()=>F.Z,JE:()=>K.Z,JP:()=>x.Z,KL:()=>m.Z,Lo:()=>R.Z,Oh:()=>J.Z,RN:()=>Q.Z,T0:()=>T.Z,TI:()=>y.Z,Tw:()=>S.Z,Um:()=>ae.Z,V_:()=>q.Z,W1:()=>v.Z,Wz:()=>U.Z,XH:()=>h.Z,Ye:()=>B.Z,_$:()=>V.Z,_8:()=>p.Z,_Q:()=>l.Z,_V:()=>$.Z,_m:()=>C.Z,aM:()=>c.Z,aN:()=>L.Z,dY:()=>i.Z,dt:()=>d.Z,fw:()=>H.Z,hO:()=>Y.Z,k0:()=>s.Z,kF:()=>o.Z,kf:()=>W.Z,o:()=>n.Z,o0:()=>b.Z,pO:()=>_.Z,pu:()=>N.Z,qQ:()=>u.Z,qm:()=>j.Z,sz:()=>g.Z,tE:()=>w.Z,vU:()=>M.Z,w0:()=>ee.Z,wM:()=>Z.Z,xP:()=>f.Z,xk:()=>r.Z,zM:()=>O.Z});a(594508),a(818360),a(32447),a(660296);var r=a(376874),s=(a(515780),a(952068),a(253756),a(265192)),n=(a(236354),a(799719)),o=(a(12127),a(213671),a(680105)),i=a(592717),l=a(677914),c=a(443455),d=a(152903),p=(a(639381),a(153780)),u=(a(318500),a(684546)),h=(a(150086),a(295943),a(26190),a(139874)),g=(a(903493),a(424372),a(579497)),m=(a(707560),a(77411)),y=a(327665),f=(a(927547),a(175075)),w=(a(144962),a(741690)),x=a(63880),b=a(460868),v=(a(143831),a(168021)),P=(a(903983),a(896102),a(939869),a(273798),a(13268)),C=a(38707),S=(a(960057),a(241335),a(489733),a(57802),a(596724)),k=a(979433),F=(a(42288),a(782415)),I=(a(638946),a(768892),a(540186)),$=(a(561639),a(100206),a(658242),a(855437),a(28677),a(667342)),Z=(a(379172),a(731188),a(120360),a(888819),a(389460)),T=a(38760),A=(a(825655),a(802177),a(206242),a(807784),a(388557)),j=a(668607),D=(a(857963),a(237942)),B=(a(375037),a(8810),a(119933),a(556364),a(317632)),O=(a(606232),a(739381),a(966520),a(738152),a(753420)),_=(a(832509),a(922751),a(576843),a(537426)),N=(a(518190),a(669185)),L=a(575704),E=(a(293677),a(249162),a(182218),a(844265),a(131410),a(386205)),G=(a(591272),a(533725),a(386663),a(360997)),R=(a(876524),a(255078),a(969355)),K=(a(475940),a(642357)),W=(a(388899),a(238555),a(531627),a(158947),a(102152),a(511569),a(633324)),M=(a(870150),a(795992),a(381877)),J=(a(140901),a(828244),a(617916)),V=a(360990),z=a(85373),U=(a(997792),a(616618),a(513376),a(431399),a(672833)),q=a(365370),H=a(773466),Q=a(205093),X=a(259390),Y=a(727691),ee=(a(454656),a(16051),a(477843),a(80638),a(14752),a(881473)),te=a(881164),ae=a(629796),re=a(338391);a(842133)},431188:(e,t,a)=>{a.d(t,{BM:()=>r.BM,KM:()=>r.KM,gZ:()=>s.g,kq:()=>r.kq,zx:()=>r.zx});var r=a(976829),s=a(889159)},442977:(e,t,a)=>{a.d(t,{U:()=>r.Z});var r=a(725317);a(638531)},308787:(e,t,a)=>{a.a(e,(async(e,r)=>{try{a.d(t,{Avatar:()=>S.qE,AvatarButton:()=>h.Z,BackButton:()=>p.Z,BaseButton:()=>C.zx,BorderedChainIcon:()=>P.Z,CanvasText:()=>Z.m,CircularProgress:()=>x.Z,ClipboardButton:()=>g.Z,ConfirmLedger:()=>s.Z,DashLine:()=>l.Z,Dialog:()=>k.Dialog,FlexBox:()=>D.h,FloatingDialog:()=>k.FloatingDialog,HoverButton:()=>u.Z,IconButton:()=>d.Z,IconButtonVariant:()=>C.gZ,InputField:()=>F.U,Link:()=>c.Z,Menu:()=>f.ZP,MultiSelectCheckbox:()=>$.t,Portal:()=>w.Z,PrimaryButton:()=>C.KM,QRCode:()=>I.s,ScrollingContainer:()=>b.Z,SearchInput:()=>m.Z,SecondaryButton:()=>C.kq,SegmentedPicker:()=>v.Z,SingleSelectCheckbox:()=>$.m,SortingRowLabel:()=>y.Z,Switch:()=>n.Z,Tooltip:()=>o.ZP,TopSheet:()=>j.V,WalletIcon:()=>B.o,WarningButton:()=>C.BM,useDelayClose:()=>A.n});a(234331),a(680409),a(44687),a(15145);var s=a(802615),n=(a(712354),a(414928)),o=(a(91933),a(356308)),i=a(856310),l=(a(743773),a(934834)),c=a(102964),d=(a(348329),a(772794)),p=a(840592),u=(a(754937),a(946969)),h=a(604275),g=a(220138),m=a(507263),y=(a(670585),a(23985),a(459251),a(215862)),f=a(404268),w=a(302767),x=a(179145),b=(a(316284),a(861634),a(826705),a(894900)),v=a(519246),P=(a(880465),a(139610)),C=(a(789185),a(431188)),S=a(585331),k=a(123206);a.o(k,"CanvasText")&&a.d(t,{CanvasText:function(){return k.CanvasText}}),a.o(k,"FlexBox")&&a.d(t,{FlexBox:function(){return k.FlexBox}}),a.o(k,"InputField")&&a.d(t,{InputField:function(){return k.InputField}}),a.o(k,"MultiSelectCheckbox")&&a.d(t,{MultiSelectCheckbox:function(){return k.MultiSelectCheckbox}}),a.o(k,"QRCode")&&a.d(t,{QRCode:function(){return k.QRCode}}),a.o(k,"SingleSelectCheckbox")&&a.d(t,{SingleSelectCheckbox:function(){return k.SingleSelectCheckbox}}),a.o(k,"TopSheet")&&a.d(t,{TopSheet:function(){return k.TopSheet}}),a.o(k,"WalletIcon")&&a.d(t,{WalletIcon:function(){return k.WalletIcon}}),a.o(k,"useDelayClose")&&a.d(t,{useDelayClose:function(){return k.useDelayClose}});var F=a(442977),I=a(189157),$=a(2846),Z=a(525922),T=a(462906);a.o(T,"FlexBox")&&a.d(t,{FlexBox:function(){return T.FlexBox}}),a.o(T,"TopSheet")&&a.d(t,{TopSheet:function(){return T.TopSheet}}),a.o(T,"WalletIcon")&&a.d(t,{WalletIcon:function(){return T.WalletIcon}}),a.o(T,"useDelayClose")&&a.d(t,{useDelayClose:function(){return T.useDelayClose}});var A=a(459221),j=a(124358),D=a(79295),B=a(444644),O=e([i,P]);[i,P]=O.then?(await O)():O,r()}catch(e){r(e)}}))},605930:(e,t,a)=>{a.d(t,{Jz:()=>n,Ot:()=>l,RP:()=>o,lA:()=>i});a(847001);var r=a(581354),s=a.n(r);a(691438);const n=e=>s().SHA256(e).toString(s().enc.Hex),o=(e,t)=>{if(e===t)return!0;const a=e.split("."),r=t.split("."),s=Math.min(a.length,r.length);for(let e=0;e<s;e++){if(parseInt(a[e])>parseInt(r[e]))return!0;if(parseInt(a[e])<parseInt(r[e]))return!1}return a.length>r.length||!(a.length<r.length)},i=(e,t)=>(null==e?void 0:e.symbol.toUpperCase())===(null==t?void 0:t.symbol.toUpperCase())&&(null==e?void 0:e.ticker.toUpperCase())===(null==t?void 0:t.ticker.toUpperCase())&&(null==e?void 0:e.chain.toUpperCase())===(null==t?void 0:t.chain.toUpperCase()),l=(e,t)=>{if(!t)throw"Network ID is required";return`${e}_${t}`}},218006:(e,t,a)=>{a.d(t,{O1:()=>s,Zp:()=>n,kw:()=>o,lk:()=>r});a(496486);const r=e=>null==e?void 0:e.toLowerCase().split(" ").reduce(((e,t)=>{var a;return e+((null==(a=t[0])?void 0:a.toUpperCase())+t.slice(1))})),s=e=>/^[A-HJ-NP-Za-km-z1-9]*$/.test(e),n=e=>{try{return!!window.atob(e)}catch(e){return!1}},o=e=>e.replace(/[']/g,"")},862828:(e,t,a)=>{e.exports=a.p+"4ed302b26a0b4acc7a20.svg"},919029:(e,t,a)=>{e.exports=a.p+"073e8874151075700917.svg"},258416:(e,t,a)=>{e.exports=a.p+"203348e1c90f4d62be3d.svg"},931748:(e,t,a)=>{e.exports=a.p+"1cc18714402100e1dec6.svg"}},d={};function p(e){var t=d[e];if(void 0!==t)return t.exports;var a=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(a.exports,a,a.exports,p),a.loaded=!0,a.exports}p.m=c,p.amdO={},e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",r=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},p.a=(s,n,o)=>{var i;o&&((i=[]).d=-1);var l,c,d,p=new Set,u=s.exports,h=new Promise(((e,t)=>{d=t,c=e}));h[t]=u,h[e]=e=>(i&&e(i),p.forEach(e),h.catch((e=>{}))),s.exports=h,n((s=>{var n;l=(s=>s.map((s=>{if(null!==s&&"object"==typeof s){if(s[e])return s;if(s.then){var n=[];n.d=0,s.then((e=>{o[t]=e,r(n)}),(e=>{o[a]=e,r(n)}));var o={};return o[e]=e=>e(n),o}}var i={};return i[e]=e=>{},i[t]=s,i})))(s);var o=()=>l.map((e=>{if(e[a])throw e[a];return e[t]})),c=new Promise((t=>{(n=()=>t(o)).r=0;var a=e=>e!==i&&!p.has(e)&&(p.add(e),e&&!e.d&&(n.r++,e.push(n)));l.map((t=>t[e](a)))}));return n.r?c:o()}),(e=>(e?d(h[a]=e):c(u),r(i)))),i&&i.d<0&&(i.d=0)},s=[],p.O=(e,t,a,r)=>{if(!t){var n=1/0;for(c=0;c<s.length;c++){for(var[t,a,r]=s[c],o=!0,i=0;i<t.length;i++)(!1&r||n>=r)&&Object.keys(p.O).every((e=>p.O[e](t[i])))?t.splice(i--,1):(o=!1,r<n&&(n=r));if(o){s.splice(c--,1);var l=a();void 0!==l&&(e=l)}}return e}r=r||0;for(var c=s.length;c>0&&s[c-1][2]>r;c--)s[c]=s[c-1];s[c]=[t,a,r]},p.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return p.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,p.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var a=Object.create(null);p.r(a);var r={};n=n||[null,o({}),o([]),o(o)];for(var s=2&t&&e;"object"==typeof s&&!~n.indexOf(s);s=o(s))Object.getOwnPropertyNames(s).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,p.d(a,r),a},p.d=(e,t)=>{for(var a in t)p.o(t,a)&&!p.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},p.f={},p.e=e=>Promise.all(Object.keys(p.f).reduce(((t,a)=>(p.f[a](e,t),t)),[])),p.u=e=>"js/"+({3096:"queryString",4604:"tsub-middleware",7493:"schemaFilter",8119:"auto-track",8150:"legacyVideos",9214:"remoteMiddleware",9464:"ajs-destination"}[e]||e)+".bundle.js",p.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),p.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),p.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},l="xdefi-extension:",p.l=(e,t,a,r)=>{if(i[e])i[e].push(t);else{var s,n;if(void 0!==a)for(var o=document.getElementsByTagName("script"),c=0;c<o.length;c++){var d=o[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==l+a){s=d;break}}s||(n=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,p.nc&&s.setAttribute("nonce",p.nc),s.setAttribute("data-webpack",l+a),s.src=e),i[e]=[t];var u=(t,a)=>{s.onerror=s.onload=null,clearTimeout(h);var r=i[e];if(delete i[e],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((e=>e(a))),t)return t(a)},h=setTimeout(u.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=u.bind(null,s.onerror),s.onload=u.bind(null,s.onload),n&&document.head.appendChild(s)}},p.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},p.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),p.v=(e,t,a,r)=>{var s=fetch(p.p+""+a+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(s,r).then((t=>Object.assign(e,t.instance.exports))):s.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,r))).then((t=>Object.assign(e,t.instance.exports)))},p.p="",(()=>{var e={4042:0,5534:0};p.f.j=(t,a)=>{var r=p.o(e,t)?e[t]:void 0;if(0!==r)if(r)a.push(r[2]);else{var s=new Promise(((a,s)=>r=e[t]=[a,s]));a.push(r[2]=s);var n=p.p+p.u(t),o=new Error;p.l(n,(a=>{if(p.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var s=a&&("load"===a.type?"missing":a.type),n=a&&a.target&&a.target.src;o.message="Loading chunk "+t+" failed.\n("+s+": "+n+")",o.name="ChunkLoadError",o.type=s,o.request=n,r[1](o)}}),"chunk-"+t,t)}},p.O.j=t=>0===e[t];var t=(t,a)=>{var r,s,[n,o,i]=a,l=0;if(n.some((t=>0!==e[t]))){for(r in o)p.o(o,r)&&(p.m[r]=o[r]);if(i)var c=i(p)}for(t&&t(a);l<n.length;l++)s=n[l],p.o(e,s)&&e[s]&&e[s][0](),e[s]=0;return p.O(c)},a=self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[];a.forEach(t.bind(null,0)),a.push=t.bind(null,a.push.bind(a))})();var u=p.O(void 0,[8671,2996,1651,7892,793,2818,8887,6087,8447,9938,9664,114,103,9711,1816,998,7361,9011,3441,9706,9149,1641,8601,5274,7573,7011,6885,9142,6773,9521,9352,7750],(()=>p(11351)));u=p.O(u)})();