!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="8edffccf-799f-44bf-af2f-77054399c86c",e._sentryDebugIdIdentifier="sentry-dbid-8edffccf-799f-44bf-af2f-77054399c86c")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(()=>{"use strict";var e,t,r,a,n,s,o,i,l,c={21723:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{X:()=>u,Z:()=>h});var n=r(785893),s=r(667294),o=r(308787),i=r(458038),l=r(590434),c=r(121421),d=e([o]);o=(d.then?(await d)():d)[0];var u=(e=>(e.Small="small",e.Medium="medium",e))(u||{});const p={small:12,medium:16},g=({message:e,dataTestId:t,iconColor:r,noIndents:a,placement:d="top",containerSize:u=l.T.Medium,iconSize:g="small"})=>{const h=(0,s.useMemo)((()=>"string"==typeof e?(0,n.jsx)(i.Z,{children:e}):e),[e]);return(0,n.jsx)(o.Tooltip,{arrow:!0,fitContent:!0,title:h||"",placement:d,noIndents:a,containerSize:u,children:(0,n.jsx)(c.J,{"data-testid":t,color:r,width:p[g],height:p[g]})})},h=(0,s.memo)(g);a()}catch(e){a(e)}}))},457817:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{ZP:()=>$});var n=r(785893),s=r(667294),o=r(771341),i=r(308787),l=r(165852),c=r(561277),d=r(108363),u=r(876777),p=r(818117),g=r(191140),h=e([i,g]);[i,g]=h.then?(await h)():h;var m=Object.defineProperty,f=Object.defineProperties,y=Object.getOwnPropertyDescriptors,b=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,C=(e,t)=>{for(var r in t||(t={}))v.call(t,r)&&x(e,r,t[r]);if(b)for(var r of b(t))w.call(t,r)&&x(e,r,t[r]);return e},P=(e,t)=>f(e,y(t)),S=(e,t)=>{var r={};for(var a in e)v.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&b)for(var a of b(e))t.indexOf(a)<0&&w.call(e,a)&&(r[a]=e[a]);return r};const T=({Icon:e,notification:t,onClose:r})=>{const{title:a,message:s,link:u,id:p,linkName:h}=t,{isClosing:m,setIsClosing:f,doNotClose:y,ref:b}=(0,g.Z)(r);return(0,n.jsx)(i.Portal,{id:`notification-${p}`,children:(0,n.jsxs)(_,{isClosing:m,"data-testid":"notificationBar",ref:b,children:[!y&&(0,n.jsx)(E,{start:!m}),(0,n.jsxs)(Z,{children:[(0,n.jsxs)(i.FlexBox,{flexDirection:"row",alignItems:"center",gridGap:8,children:[e,(0,n.jsx)(i.FlexBox,{maxWidth:"92%",children:(0,n.jsx)(d.Z,{dataTestId:"notificationBar__title",children:a})})]}),(0,n.jsx)(B,{onClick:()=>{f(!0)},"data-testid":"closeIconContainer",children:(0,n.jsx)(o.Tw,{})})]}),(!!s||!!u)&&(0,n.jsxs)(i.FlexBox,{flexDirection:"column",children:[s&&(0,n.jsx)(c.Z,{dataTestId:"notificationBar__message",overflow:"hidden",wordWrap:"break-word",children:s}),u&&(0,n.jsx)(L,{onClick:()=>window.open(u,"_blank","noopener,noreferrer"),children:(0,n.jsx)(l.Z,{dataTestId:"notificationBar__link",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",children:null!=h?h:u})})]})]})})},F=e=>{var t=S(e,[]);return(0,n.jsx)(T,P(C({},t),{Icon:(0,n.jsx)(o.IG,{})}))},j=e=>{var t=S(e,[]);return(0,n.jsx)(T,P(C({},t),{Icon:(0,n.jsx)(o.$u,{})}))},k=e=>{var t=S(e,[]);return(0,n.jsx)(T,P(C({},t),{Icon:(0,n.jsx)(i.CircularProgress,{color:u.wL.babyBlue,width:16,height:16})}))},A=e=>{var t=S(e,[]);return(0,n.jsx)(T,P(C({},t),{Icon:(0,n.jsx)(o.vU,{width:16,height:16})}))},O=e=>{var t=e,{type:r="success"}=t,a=S(t,["type"]);switch(r){case"success":default:return(0,n.jsx)(F,C({},a));case"error":return(0,n.jsx)(j,C({},a));case"loading":return(0,n.jsx)(k,C({},a));case"warning":return(0,n.jsx)(A,C({},a))}},$=(0,s.memo)(O),I=p.F4`
  from {
    width: 0%;
  }

  to {
    width: 100%;
  }
`,N=p.F4`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,D=p.F4`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,Z=p.ZP.div`
  position: sticky;
  top: 0;
  background-color: ${u.wL.nightOcean};
  display: flex;
  justify-content: space-between;
  align-items: center;
`,_=(0,p.ZP)(i.FlexBox).attrs({gridGap:8})`
  width: 100vw;
  max-height: 240px;
  overflow: auto;
  background-color: ${u.wL.nightOcean};
  animation: ${({isClosing:e})=>e?p.iv`
          ${D} 0.2s cubic-bezier(0.3, 0.0, 0.8, 0.15)
        `:p.iv`
          ${N} 0.4s  cubic-bezier(0.05, 0.7, 0.1, 1)
        `};
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  padding: 16px;
  padding-left: 8px;
`,E=p.ZP.div`
  position: absolute;
  height: 2px;
  background-color: ${u.wL.babyBlue};
  width: 100%;
  top: 0;
  left: 0;
  animation: ${({start:e})=>e?p.iv`
          ${I} 5s linear;
        `:void 0};
`,B=(0,p.ZP)(i.FlexBox)`
  cursor: pointer;
`,L=p.ZP.div`
  cursor: pointer;
  max-width: 360px;
`;a()}catch(e){a(e)}}))},982107:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var a=r(785893),n=r(667294),s=r(818117),o=r(308787),i=r(882935),l=e([o,i]);[o,i]=l.then?(await l)():l;const c=({loading:e})=>e?(0,a.jsx)(d,{children:(0,a.jsx)(i.Z,{})}):null,d=(0,s.ZP)(o.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`;(0,n.memo)(c);t()}catch(e){t(e)}}))},347227:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(785893),r(667294);var a=r(385167),n=(r(745808),r(582242),e([a]));a=(n.then?(await n)():n)[0];t()}catch(e){t(e)}}))},312259:(e,t,r)=>{r.d(t,{h6:()=>n,iU:()=>s});var a=r(265142),n=(e=>(e.Arbitrum="Arbitrum",e.Avalanche="Avalanche",e.BinanceSmartChain="BinanceSmartChain",e.Ethereum="Ethereum",e.Fantom="Fantom",e.Polygon="Polygon",e))(n||{}),s=(e=>(e.CLAIM="CLAIM",e.DEPOSIT="DEPOSIT",e.MINT="MINT",e.STAKE="STAKE",e.SWAP="SWAP",e.UNCLASSIFIED="UNCLASSIFIED",e.WITHDRAW="WITHDRAW",e))(s||{});const o=a.Ps`
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
`,i=a.Ps`
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
`,l=a.Ps`
  fragment Amount on AssetAmountType {
    __typename
    amount
    scalingFactor
  }
`,c=(a.Ps`
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
  ${l}
`,a.Ps`
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
  ${l}
`,a.Ps`
  fragment Fee on AssetFeeType {
    __typename
    value
    scalingFactor
  }
`,a.Ps`
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
  ${l}
`,a.Ps`
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
`),d=a.Ps`
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
`,u=(a.Ps`
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
  ${l}
`,a.Ps`
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
`);a.Ps`
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
  ${d}
  ${c}
`,a.Ps`
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
  ${d}
`,a.Ps`
  query BtcNFTS($bitcoinAddress: String!) {
    bitcoin {
      legacyNFTs(address: $bitcoinAddress) {
        ...LegacyNftData
      }
    }
  }
  ${d}
`,a.Ps`
  query JunoNFTS($junoAddress: String!) {
    juno {
      nfts(address: $junoAddress) {
        ...NftDataV2
      }
    }
  }
  ${c}
`,a.Ps`
  query StargazeNFTS($stargazeAddress: String!) {
    stargaze {
      nfts(address: $stargazeAddress) {
        ...NftDataV2
      }
    }
  }
  ${c}
`,a.Ps`
  query SolanaNFTS($solanaAddress: String!) {
    solana {
      legacyNFTs(address: $solanaAddress) {
        ...LegacyNftData
      }
    }
  }
  ${d}
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
  query ThorchainFees {
    thorchain {
      fee {
        nativeTransactionFee
        outboundTransactionFee
      }
    }
  }
`,a.Ps`
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
`,a.Ps`
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
  ${i}
`,a.Ps`
  query AssetDetailsLpTokens($page: ConnectionArgs!, $filter: TokenFilter) {
    assets {
      lpTokens(page: $page, filter: $filter) {
        ...AssetDetailsFragment
      }
    }
  }
  ${o}
`,a.Ps`
  query AssetDetailsTokens($page: ConnectionArgs!, $filter: TokenFilter) {
    assets {
      tokens(page: $page, filter: $filter) {
        ...AssetDetailsFragment
      }
    }
  }
  ${o}
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
  query Dapp($app: DAppReputationInput!) {
    dapp(app: $app) {
      status
      chains
    }
  }
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
  query getTokens($filter: GetTokensArgs) @connection(key: "tokens") {
    tokens(filter: $filter) {
      ...OldToken
    }
  }
  ${u}
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
  mutation postTransactions($routeData: RouteInputTypeV2!) {
    transactionsV2(routeData: $routeData) {
      routeId
    }
  }
`,a.Ps`
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
`,a.Ps`
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
`,a.Ps`
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
`},914963:(e,t,r)=>{r.a(e,(async(e,t)=>{try{r(785893),r(667294),r(230811);var a=r(281672),n=r(308787),s=r(876777),o=r(818117),i=(r(458038),e([a,n]));[a,n]=i.then?(await i)():i;(0,o.ZP)(n.FlexBox).attrs({alignItems:"center",padding:"5px 8px",background:s.wL.black,borderRadius:"54px",marginRight:"11px",flexDirection:"row",marginLeft:"auto"})``,o.ZP.img`
  margin-right: 6px;
  width: 10px;
  height: 10px;
`;t()}catch(e){t(e)}}))},65856:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{f:()=>h});r(785893),r(691438),r(834392),r(299246),r(111897),r(25022);var n=r(281672),s=(r(561277),r(667294),r(230811),r(50533),r(972819)),o=(r(522933),r(518949)),i=r(771341),l=r(308787),c=(r(650511),r(818117)),d=(r(218006),r(876777)),u=(r(312259),r(914963)),p=r(345873),g=e([n,s,o,l,u,p]);[n,s,o,l,u,p]=g.then?(await g)():g;(0,c.ZP)(l.FlexBox).attrs({alignContent:"center",justifyContent:"center",alignItems:"center"})`
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
`;const h=57;(0,c.ZP)(l.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between",p:8})`
  position: relative;
  width: 100%;
  cursor: pointer;
  height: ${h}px;
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
`;a()}catch(e){a(e)}}))},345873:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{q:()=>u});var n=r(785893),s=r(308787),o=r(818117),i=r(876777),l=(r(771341),r(458038),r(281672)),c=r(807132),d=e([s,l]);[s,l]=d.then?(await d)():d;const u=({icon:e,chainId:t})=>{const r=(0,l.fU)().getChainControllerById(t),{isValidImage:a}=(0,c.Z)({image:e});return(0,n.jsxs)(g,{children:[(0,n.jsx)(h,{src:a?e:r.getConfig().fallbackImage}),(0,n.jsx)(p,{children:(0,n.jsx)(s.BorderedChainIcon,{chainId:t})})]})},p=(0,o.ZP)(s.FlexBox)`
  position: absolute;
  bottom: 5px;
  left: 5px;
`,g=(0,o.ZP)(s.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: relative;
  width: 44px;
  height: 40px;
  padding: 6px 8px;
  background-color: ${i.wL.charcoal};
  border-radius: 8px;
`,h=((0,o.ZP)(s.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: relative;
  width: 44px;
  height: 48px;
  padding-bottom: 12px;
`,(0,o.ZP)(s.FlexBox).attrs({alignItems:"center",justifyContent:"space-between",flexDirection:"row"})`
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
`);a()}catch(e){a(e)}}))},115105:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>b});var n=r(785893),s=r(305381),o=r(278155),i=r(945192),l=r(818117),c=r(308787),d=r(646284),u=r(876777),p=e([c,d]);[c,d]=p.then?(await p)():p;const g=(0,l.ZP)(c.FlexBox).attrs({alignItems:"center",justifyContent:"space-evenly",alignContent:"center"})`
  height: 100%;
  width: 100%;
  position: absolute;
  background-color: ${u.wL.black};
  overflow: hidden;
`,h=(0,l.ZP)(c.FlexBox).attrs({alignItems:"center",justifyContent:"flex-start",flexDirection:"column"})`
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
`,f=l.ZP.img`
  position: absolute;
`,y=l.ZP.img.attrs({src:s.toString(),alt:"logo",dataTestid:"logo"})`
  margin-top: 28px;
  width: 187px;
  height: 88px;
  z-index: 1;
`,b=({children:e,loading:t=!1})=>(0,n.jsx)(g,{children:(0,n.jsx)(h,{children:t?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{src:i.toString()}),(0,n.jsx)(y,{}),(0,n.jsx)(d.Loader,{})]}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f,{src:o.toString()}),(0,n.jsx)(y,{}),(0,n.jsx)(m,{children:e})]})})});a()}catch(e){a(e)}}))},862374:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>T});var n=r(785893),s=r(667294),o=r(996974),i=r(50533),l=r(179826),c=r(115105),d=r(230811),u=r(646284),p=r(691438),g=r(281672),h=r(308787),m=r(108363),f=r(519416),y=r(25593),b=e([c,u,g,h,y]);[c,u,g,h,y]=b.then?(await b)():b;const v=(0,s.lazy)((()=>Promise.all([r.e(7892),r.e(8887),r.e(7011),r.e(3395),r.e(3903)]).then(r.bind(r,233903)))),w=(0,s.lazy)((()=>Promise.all([r.e(8671),r.e(1651),r.e(7892),r.e(8887),r.e(9706),r.e(1641),r.e(7011),r.e(5534),r.e(4670),r.e(7582),r.e(8194),r.e(3395),r.e(8947)]).then(r.bind(r,278947)))),x=(0,s.lazy)((()=>Promise.all([r.e(8671),r.e(1651),r.e(7892),r.e(8887),r.e(9706),r.e(1641),r.e(7011),r.e(5534),r.e(4670),r.e(7582),r.e(3395),r.e(7332)]).then(r.bind(r,577332)))),C=({chainType:e})=>e!==p.J.Bitcoin?(0,n.jsx)(w,{}):(0,n.jsx)(x,{}),P=({chainType:e})=>(0,n.jsxs)(o.Z5,{children:[(0,n.jsx)(o.AW,{path:"/transactional/:xdefiId",element:(0,n.jsx)(v,{})}),(0,n.jsx)(o.AW,{path:"/sign-in/:xdefiId",element:(0,n.jsx)(C,{chainType:e})})]}),S=(0,s.memo)(P),T=()=>{var e;const{t}=(0,d.$G)("app"),r=(0,g.nl)(),a=(0,g.fU)(),b=(0,o.s0)(),v=(0,i.v9)((e=>{var t;return null==(t=null==e?void 0:e.wallets)?void 0:t.activeWalletId}))||"",[w]=(0,s.useState)(v),x=null==(e=(0,i.v9)((e=>{var t;return null==(t=null==e?void 0:e.masterKeystore)?void 0:t.locked})))||e,{messages:C}=(0,i.v9)((e=>e.dappsMessages)),P=(0,s.useCallback)((()=>{var e,n;if(!C.length)return;const s=a.getChainControllerById(null==(e=C[0])?void 0:e.chainId);r.removeMessageById(null==(n=C[0])?void 0:n.xdefiId),f.browser.runtime.sendMessage(void 0,{xdefiId:C[0].xdefiId,raw:{id:C[0].xdefiId,error:s.getType()===p.J.Evm?l.ethErrors.provider.userRejectedRequest():t("multi_tx_msg_sign.error")}})}),[a,r,C,t]);(0,s.useEffect)((()=>(window.addEventListener("unload",P),()=>{window.removeEventListener("unload",P)})),[P]),(0,s.useEffect)((()=>{if(!x||!C.length)if(C.length){const e=a.getChainControllerById(C[0].chainId);b(e.isSignMessage(C[0])?"/sign-in/:xdefiId":"/transactional/:xdefiId")}else window.close()}),[b,C,a]);const T=(0,s.useMemo)((()=>C.length?a.getChainControllerById(C[0].chainId).getType():void 0),[C]);return C.length?(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(c.Z,{loading:!0}),children:w&&T&&!x?(0,n.jsx)(S,{chainType:T}):(0,n.jsx)(y.Z,{isLocked:!0})}):(0,n.jsxs)(h.FlexBox,{alignItems:"center",justifyContent:"center",gridGap:16,pt:32,width:"100%",children:[(0,n.jsx)(m.Z,{children:t("multi_tx_msg_sign.no_pending")}),(0,n.jsx)(u.Loader,{}),(0,n.jsx)("br",{})]})};a()}catch(e){a(e)}}))},634376:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var a=r(785893),n=r(115105),s=r(667294),o=r(620745),i=r(50533),l=r(639711),c=r(42763),d=r(678603),u=r(753894),p=(r(324889),r(281672)),g=r(348776),h=r(348365),m=r(691292),f=r(818117),y=(r(870446),r(876777)),b=r(17045),v=(r(46461),r(947050)),w=r(862374),x=e([n,c,p,g,h,m,v,w]);[n,c,p,g,h,m,v,w]=x.then?(await x)():x;const C=document.getElementById("app-multi-tx-msg-sign-root"),P=(0,o.s)(C),S=[u.Z],T=new b.yh({portName:"XDEFI-EXTENSION"});(0,b.md)(T,...S),T.ready().then((()=>{Object.defineProperty(window,"reduxStore",{get:()=>T.getState()}),P.render((0,a.jsx)(i.zt,{store:T,children:(0,a.jsx)(d.r,{loading:(0,a.jsx)(n.Z,{loading:!0}),persistor:c.D,children:(0,a.jsx)(j,{})})}))}));const F=f.vJ`
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
  body {
    overflow: hidden;
    ::-webkit-scrollbar-thumb {
      background-color: rgba(255, 255, 255, 0.2);
      border-radius: 5px;
      height: 30px;
    }

    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }
    
    ::-webkit-scrollbar {
    background-color: transparent;
    width: 5px;
    };
  }

  body input[type='range'] {
    width: 100%;
    height: 2px;
    cursor: pointer;
    accent-color: ${y.wL.blue};
  }
`,j=()=>{const e=(0,i.v9)((e=>{var t,r;return null!=(r=null==(t=null==e?void 0:e.settings)?void 0:t.theme)?r:y.$T.Dark})),t=(0,p.UW)();return(0,s.useEffect)((()=>{document.body.classList.toggle("theme-dark",!0),t.resetNonPersistedNotifications()}),[]),(0,a.jsx)(f.f6,{theme:(0,y.Q2)(e),children:(0,a.jsx)(g.Z,{children:(0,a.jsx)(m.Z,{type:"dapp",children:(0,a.jsx)(h.x,{children:(0,a.jsxs)(v.Rm,{children:[(0,a.jsx)(F,{}),(0,a.jsx)(l.UT,{children:(0,a.jsx)(w.Z,{})})]})})})})})};t()}catch(e){t(e)}}))},738152:(e,t,r)=>{var a=r(785893),n=r(667294),s=r(247412),o=r(327754),i=r(876777),l=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))g.call(t,r)&&h(e,r,t[r]);return e};const f=n.forwardRef((function(e,t){const r=(0,o.F)({[i.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsx)(s.YJ,{children:(0,a.jsx)("svg",(l=m({width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),u={children:(0,a.jsx)("path",{d:"M9.00334 11.7727L7.68715 13.2765C6.84275 14.2412 5.47661 14.2412 4.63257 13.2765C4.22423 12.8107 4 12.1907 4 11.5315C4 10.8723 4.22423 10.2523 4.63221 9.78601L6.40633 7.75887C7.26495 6.77759 8.63546 6.81634 9.46054 7.75887C9.6257 7.94762 9.75586 8.1643 9.85758 8.39514L9.27678 9.05849C9.21116 8.80307 9.09448 8.56306 8.92531 8.37014C8.39738 7.76678 7.49245 7.74095 6.94228 8.36972L6.94192 8.37055L5.16743 10.3977C4.62054 11.0223 4.62054 12.0398 5.16743 12.6644C5.72052 13.2965 6.6105 13.2845 7.15156 12.6644L8.0357 11.6544C8.39774 11.7727 8.68869 11.794 9.00334 11.7727V11.7727ZM9.06204 4.72336L7.75897 6.2134C8.06779 6.19257 8.36238 6.2134 8.72624 6.33132L9.59872 5.33588C10.1449 4.71002 11.0352 4.71086 11.5821 5.33546C12.1352 5.96798 12.1239 6.98509 11.5821 7.60303L9.82076 9.61601L9.81966 9.61684C9.29538 10.2156 8.40285 10.2635 7.83663 9.61601C7.66418 9.4185 7.55043 9.18183 7.48808 8.9314L7.45745 8.95974L6.90436 9.59101C7.00645 9.82268 7.13588 10.0389 7.30104 10.2277C8.11956 11.1631 9.49007 11.2169 10.3556 10.2277L12.1173 8.21472C12.961 7.24969 12.9617 5.6888 12.117 4.72419C11.2722 3.75708 9.90498 3.76041 9.06204 4.72336V4.72336Z",fill:n})},c(l,d(u))))});var l,u}));n.memo(f)},143831:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(785893),n=r(667294),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const p=n.forwardRef((function(e,t){const r=e.color;return(0,a.jsx)("svg",(n=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e})({width:"14",height:"11",viewBox:"0 0 14 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"data-testid":"checkIcon"},e),o(n,i({children:(0,a.jsx)("path",{d:"M4.79079 9.84954L12.8808 1.75955C12.9855 1.6699 13.0705 1.55958 13.1305 1.43552C13.1905 1.31145 13.2243 1.17632 13.2296 1.0386C13.2349 0.90088 13.2117 0.763548 13.1614 0.635223C13.1112 0.506898 13.0349 0.39035 12.9374 0.292896C12.84 0.195441 12.7234 0.119183 12.5951 0.0689079C12.4668 0.0186333 12.3295 -0.00457215 12.1917 0.000747323C12.054 0.00606679 11.9189 0.0397964 11.7948 0.0998197C11.6708 0.159843 11.5604 0.244864 11.4708 0.349545L4.09079 7.72954L1.71079 5.34954C1.61783 5.25581 1.50723 5.18142 1.38537 5.13065C1.26351 5.07988 1.1328 5.05374 1.00079 5.05374C0.868779 5.05374 0.738074 5.07988 0.616215 5.13065C0.494356 5.18142 0.383755 5.25581 0.290792 5.34954C0.104541 5.53691 -1.01242e-06 5.79036 -1.05861e-06 6.05454C-1.1048e-06 6.31873 0.10454 6.57218 0.290791 6.75954L3.38079 9.84954C3.56815 10.0358 3.82161 10.1403 4.08579 10.1403C4.34998 10.1403 4.60343 10.0358 4.79079 9.84954Z",fill:r||"white"})}))));var n})),g=n.memo(p)},616618:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(785893),n=r(667294),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e};const g=n.forwardRef(((e,t)=>{return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("svg",(r=p({width:"15",height:"16",viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"ErrorBanner",ref:t},e),n={children:[(0,a.jsx)("path",{d:"M7.26531 15.9998C6.98321 16.0042 6.70488 15.9343 6.45806 15.7969L6.21588 15.659C4.32956 14.5862 2.76026 13.0295 1.66822 11.1477C0.576187 9.26598 0.000540894 7.12661 6.47025e-05 4.94808V4.83448C-0.00249422 4.54714 0.0708915 4.26427 0.212721 4.01478C0.354551 3.7653 0.559739 3.55813 0.807314 3.41447L6.45806 0.217423C6.70349 0.0749867 6.9819 0 7.26531 0C7.54871 0 7.82712 0.0749867 8.07256 0.217423L13.7233 3.41447C13.9709 3.55813 14.1761 3.7653 14.3179 4.01478C14.4597 4.26427 14.5331 4.54714 14.5305 4.83448V4.94808C14.5285 7.12821 13.9504 9.26867 12.8554 11.1506C11.7605 13.0325 10.1879 14.5883 8.29859 15.659L8.05641 15.7969C7.81435 15.9316 7.54194 16.0014 7.26531 15.9998Z",fill:"#DE350B"}),(0,a.jsx)("path",{d:"M6.80273 10.4419C6.80273 10.5745 6.85541 10.7017 6.94918 10.7954C7.04295 10.8892 7.17013 10.9419 7.30273 10.9419C7.43534 10.9419 7.56252 10.8892 7.65629 10.7954C7.75006 10.7017 7.80273 10.5745 7.80273 10.4419C7.80273 10.3093 7.75006 10.1821 7.65629 10.0883C7.56252 9.99457 7.43534 9.94189 7.30273 9.94189C7.17013 9.94189 7.04295 9.99457 6.94918 10.0883C6.85541 10.1821 6.80273 10.3093 6.80273 10.4419Z",fill:"white"}),(0,a.jsx)("path",{d:"M7.13275 9.30854C7.18672 9.32484 7.24455 9.33322 7.30295 9.33317C7.54845 9.33317 7.74702 9.18773 7.74702 9.00836V4.99114C7.74702 4.90504 7.70021 4.82247 7.61689 4.76159C7.53356 4.70071 7.42055 4.6665 7.30271 4.6665C7.18487 4.6665 7.07186 4.70071 6.98854 4.76159C6.90521 4.82247 6.8584 4.90504 6.8584 4.99114V9.00836C6.85834 9.05103 6.86979 9.09328 6.89211 9.13271C6.91443 9.17214 6.94717 9.20797 6.98847 9.23814C7.02976 9.26831 7.07879 9.29223 7.13275 9.30854Z",fill:"white"})]},o(r,i(n))))});var r,n})),h=n.memo(g)},579497:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(785893),n=r(667294),s=r(327754),o=r(876777),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=n.forwardRef((function(e,t){const r=(0,s.F)({[o.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsxs)("svg",(i=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&g(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&g(e,r,t[r]);return e})({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(i,c({children:[(0,a.jsx)("path",{d:"M8 2.4C11.087 2.4 13.6 4.913 13.6 8C13.6 11.087 11.087 13.6 8 13.6C4.913 13.6 2.4 11.087 2.4 8C2.4 4.913 4.913 2.4 8 2.4ZM8 1C4.136 1 1 4.136 1 8C1 11.864 4.136 15 8 15C11.864 15 15 11.864 15 8C15 4.136 11.864 1 8 1Z",fill:n||"#969DA3"}),(0,a.jsx)("path",{d:"M8.00005 12.2001C7.61505 12.2001 7.30005 11.8851 7.30005 11.5001V7.3001C7.30005 6.9151 7.61505 6.6001 8.00005 6.6001C8.38505 6.6001 8.70005 6.9151 8.70005 7.3001V11.5001C8.70005 11.8851 8.38505 12.2001 8.00005 12.2001Z",fill:n||"#969DA3"}),(0,a.jsx)("path",{d:"M8.00005 5.1998C8.38665 5.1998 8.70005 4.8864 8.70005 4.4998C8.70005 4.11321 8.38665 3.7998 8.00005 3.7998C7.61345 3.7998 7.30005 4.11321 7.30005 4.4998C7.30005 4.8864 7.61345 5.1998 8.00005 5.1998Z",fill:n||"#969DA3"})]}))));var i})),m=n.memo(h)},175075:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(785893),n=r(667294),s=r(327754),o=r(876777),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,g=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=n.forwardRef((function(e,t){const r=(0,s.F)({[o.$T.Dark]:"white"}),n=e.color||r;return(0,a.jsxs)("svg",(i=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&g(e,r,t[r]);if(d)for(var r of d(t))p.call(t,r)&&g(e,r,t[r]);return e})({width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(i,c({children:[(0,a.jsx)("path",{d:"M2.5 1C1.67157 1 1 1.67157 1 2.5V8.5C1 9.32843 1.67157 10 2.5 10H8.5C9.32843 10 10 9.32843 10 8.5V7.5C10 7.22386 10.2239 7 10.5 7C10.7761 7 11 7.22386 11 7.5V8.5C11 9.88071 9.88071 11 8.5 11H2.5C1.11929 11 0 9.88071 0 8.5V2.5C0 1.11929 1.11929 0 2.5 0H3.5C3.77614 0 4 0.223858 4 0.5C4 0.776142 3.77614 1 3.5 1H2.5Z",fill:n||"#2041E0"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.00001 0.5C6.00001 0.223858 6.22387 0 6.50001 0H10.5C10.7761 0 11 0.223858 11 0.5V4.5C11 4.77614 10.7761 5 10.5 5C10.2239 5 10 4.77614 10 4.5V1.69208L4.85001 6.84207C4.65475 7.03733 4.33817 7.03733 4.14291 6.84207C3.94764 6.64681 3.94764 6.33023 4.14291 6.13496L9.27787 1H6.50001C6.22387 1 6.00001 0.776142 6.00001 0.5Z",fill:n||"#2041E0"})]}))));var i})),m=n.memo(h)},32447:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(785893),n=r(667294),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const p=n.forwardRef((function(e,t){return(0,a.jsxs)("svg",(r=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e})({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),o(r,i({"data-testid":"speedAverageIcon",children:[(0,a.jsxs)("g",{clipPath:"url(#clip0_11768_3385)",children:[(0,a.jsx)("rect",{width:"2",height:"8",rx:"1",transform:"matrix(-4.23454e-08 -1 -1 4.51214e-08 8 15)",fill:"#C0C5CC"}),(0,a.jsx)("rect",{width:"4",height:"12",rx:"2",transform:"matrix(-4.23454e-08 -1 -1 4.51214e-08 12 10)",fill:"#FFC400"}),(0,a.jsx)("rect",{width:"2",height:"16",rx:"1",transform:"matrix(-4.23454e-08 -1 -1 4.51214e-08 16 3)",fill:"#C0C5CC"})]}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_11768_3385",children:(0,a.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]}))));var r})),g=n.memo(p)},818360:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(785893),n=r(667294),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const p=n.forwardRef((function(e,t){return(0,a.jsxs)("svg",(r=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e})({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),o(r,i({"data-testid":"speedFastIcon",children:[(0,a.jsxs)("g",{clipPath:"url(#clip0_11768_3369)",children:[(0,a.jsx)("rect",{width:"2",height:"8",rx:"1",transform:"matrix(-4.23454e-08 -1 -1 4.51214e-08 8 15)",fill:"#C0C5CC"}),(0,a.jsx)("rect",{width:"2",height:"12",rx:"1",transform:"matrix(-4.23454e-08 -1 -1 4.51214e-08 12 10)",fill:"#C0C5CC"}),(0,a.jsx)("rect",{width:"4",height:"16",rx:"2",transform:"matrix(-4.23454e-08 -1 -1 4.51214e-08 16 5)",fill:"#00875A"})]}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_11768_3369",children:(0,a.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]}))));var r})),g=n.memo(p)},594508:(e,t,r)=>{r.d(t,{Z:()=>g});var a=r(785893),n=r(667294),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const p=n.forwardRef((function(e,t){return(0,a.jsxs)("svg",(r=((e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e})({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),o(r,i({"data-testid":"speedSlowIcon",children:[(0,a.jsxs)("g",{clipPath:"url(#clip0_11768_3400)",children:[(0,a.jsx)("rect",{width:"4",height:"8",rx:"2",transform:"matrix(-4.23454e-08 -1 -1 4.51214e-08 8 15)",fill:"#9ECAFF"}),(0,a.jsx)("rect",{width:"2",height:"12",rx:"1",transform:"matrix(-4.23454e-08 -1 -1 4.51214e-08 12 8)",fill:"#C0C5CC"}),(0,a.jsx)("rect",{width:"2",height:"16",rx:"1",transform:"matrix(-4.23454e-08 -1 -1 4.51214e-08 16 3)",fill:"#C0C5CC"})]}),(0,a.jsx)("defs",{children:(0,a.jsx)("clipPath",{id:"clip0_11768_3400",children:(0,a.jsx)("rect",{width:"16",height:"16",fill:"white"})})})]}))));var r})),g=n.memo(p)},997792:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(785893),n=r(667294),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e};const g=n.forwardRef(((e,t)=>{return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("svg",(r=p({width:"15",height:"16",viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"successBanner",ref:t},e),n={children:[(0,a.jsx)("path",{d:"M7.26531 15.9998C6.98321 16.0042 6.70489 15.9343 6.45806 15.7969L6.21588 15.659C4.32956 14.5862 2.76026 13.0295 1.66822 11.1477C0.576187 9.26598 0.000540894 7.12661 6.47025e-05 4.94808V4.83448C-0.00249422 4.54714 0.0708915 4.26427 0.212721 4.01478C0.354551 3.7653 0.559739 3.55813 0.807314 3.41447L6.45806 0.217423C6.70349 0.0749867 6.9819 0 7.26531 0C7.54871 0 7.82712 0.0749867 8.07256 0.217423L13.7233 3.41447C13.9709 3.55813 14.1761 3.7653 14.3179 4.01478C14.4597 4.26427 14.5331 4.54714 14.5305 4.83448V4.94808C14.5285 7.12821 13.9504 9.26867 12.8554 11.1506C11.7605 13.0325 10.1879 14.5883 8.29858 15.659L8.05641 15.7969C7.81435 15.9316 7.54194 16.0014 7.26531 15.9998Z",fill:"#36B37E"}),(0,a.jsx)("path",{d:"M7.01314 9.97041L10.1074 6.79674C10.1608 6.74991 10.2041 6.69227 10.2347 6.62745C10.2653 6.56263 10.2825 6.49203 10.2852 6.42007C10.2879 6.34812 10.2761 6.27637 10.2505 6.20932C10.2248 6.14228 10.186 6.08139 10.1363 6.03047C10.0866 5.97955 10.0272 5.93971 9.9618 5.91344C9.8964 5.88718 9.8264 5.87505 9.75621 5.87783C9.68601 5.88061 9.61713 5.89823 9.5539 5.92959C9.49066 5.96095 9.43443 6.00537 9.38874 6.06007L6.65635 8.86278L5.44327 7.61931C5.39589 7.57035 5.33952 7.53148 5.27741 7.50495C5.2153 7.47843 5.14868 7.46477 5.08139 7.46477C5.0141 7.46477 4.94748 7.47843 4.88537 7.50495C4.82326 7.53148 4.76689 7.57035 4.7195 7.61931C4.62457 7.71721 4.57129 7.84963 4.57129 7.98765C4.57129 8.12568 4.62457 8.2581 4.7195 8.35599L6.29447 9.97041C6.38997 10.0677 6.51915 10.1223 6.6538 10.1223C6.78846 10.1223 6.91764 10.0677 7.01314 9.97041Z",fill:"white"})]},o(r,i(n))))});var r,n})),h=n.memo(g)},513376:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(785893),n=r(667294),s=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))d.call(t,r)&&u(e,r,t[r]);return e};const g=n.forwardRef(((e,t)=>{return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)("svg",(r=p({width:"15",height:"16",viewBox:"0 0 15 16",fill:"none",xmlns:"http://www.w3.org/2000/svg","data-testid":"WarningBanner",ref:t},e),n={children:[(0,a.jsx)("path",{d:"M7.26531 15.9998C6.98321 16.0042 6.70488 15.9343 6.45806 15.7969L6.21588 15.659C4.32956 14.5862 2.76026 13.0295 1.66822 11.1477C0.576187 9.26598 0.000540894 7.12661 6.47025e-05 4.94808V4.83448C-0.00249422 4.54714 0.0708915 4.26427 0.212721 4.01478C0.354551 3.7653 0.559739 3.55813 0.807314 3.41447L6.45806 0.217423C6.70349 0.0749867 6.9819 0 7.26531 0C7.54871 0 7.82712 0.0749867 8.07256 0.217423L13.7233 3.41447C13.9709 3.55813 14.1761 3.7653 14.3179 4.01478C14.4597 4.26427 14.5331 4.54714 14.5305 4.83448V4.94808C14.5285 7.12821 13.9504 9.26867 12.8554 11.1506C11.7605 13.0325 10.1879 14.5883 8.29859 15.659L8.05641 15.7969C7.81435 15.9316 7.54194 16.0014 7.26531 15.9998Z",fill:"#969DA3"}),(0,a.jsx)("path",{d:"M7.2808 9.42309C7.05926 9.42309 6.87883 9.2438 6.87883 9.02113V8.71509C6.86627 8.4433 6.90281 8.20235 6.99074 7.99223C7.07753 7.78212 7.25111 7.59255 7.51033 7.42469H7.50005C7.72615 7.24997 7.91686 7.09467 8.07216 6.95878C8.22747 6.82288 8.34052 6.70641 8.41132 6.60934C8.54036 6.44148 8.6123 6.2188 8.62486 5.94016C8.63172 5.77801 8.60317 5.63184 8.54264 5.49823C8.48326 5.36919 8.39762 5.24243 8.28571 5.11682C8.27886 5.10997 8.272 5.10198 8.26515 5.09512C8.02763 4.86331 7.72387 4.74683 7.35388 4.74683C6.99874 4.74683 6.70754 4.88729 6.48144 5.16935C6.30672 5.38632 6.19024 5.69579 6.13086 6.09889C6.10003 6.31244 5.90361 6.46203 5.69007 6.43805C5.46853 6.41293 5.30866 6.21309 5.33607 5.99155C5.36347 5.77001 5.41029 5.5656 5.47767 5.37718C5.58387 5.08028 5.72775 4.82905 5.90932 4.62579C6.09089 4.42252 6.30444 4.26721 6.54995 4.15987C6.79547 4.05367 7.06383 4 7.35502 4C7.96939 4 8.46728 4.18157 8.84869 4.54357C9.24266 4.91812 9.44021 5.38404 9.44021 5.94016C9.44021 6.14685 9.41281 6.33984 9.35799 6.51684C9.30318 6.69499 9.23009 6.85486 9.13988 6.99646C9.04282 7.14491 8.90007 7.30707 8.71279 7.48179C8.52552 7.6565 8.29256 7.84036 8.01507 8.03449C7.88603 8.1247 7.80152 8.21377 7.7627 8.3017C7.72387 8.38849 7.70446 8.52324 7.70446 8.70481V9.02113C7.70446 9.24266 7.52517 9.42309 7.30249 9.42309H7.2808Z",fill:"white"}),(0,a.jsx)("path",{d:"M6.82754 10.5C6.82754 10.6326 6.88022 10.7598 6.97399 10.8536C7.06775 10.9473 7.19493 11 7.32754 11C7.46015 11 7.58732 10.9473 7.68109 10.8536C7.77486 10.7598 7.82754 10.6326 7.82754 10.5C7.82754 10.3674 7.77486 10.2402 7.68109 10.1464C7.58732 10.0527 7.46015 10 7.32754 10C7.19493 10 7.06775 10.0527 6.97399 10.1464C6.88022 10.2402 6.82754 10.3674 6.82754 10.5Z",fill:"white"})]},o(r,i(n))))});var r,n})),h=n.memo(g)},725317:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(785893),n=r(300286),s=r(241164),o=r(412252),i=r(667294),l=r(771341),c=r(876777),d=r(38187),u=r(356308),p=r(674990),g=r(669525),h=Object.defineProperty,m=Object.defineProperties,f=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const x=(0,i.memo)((0,i.forwardRef)(((e,t)=>{var r=e,{type:h,label:x,errorMsg:C,warningMsg:P,startAdornment:S,endAdornment:T,tipInfo:F,dataTestId:j,placeholder:k,inputRef:A,defaultValue:O,onChange:$,onKeyPress:I,autoFocus:N,isWebapp:D=!1,spellCheck:Z,name:_,tipError:E,min:B,disabled:L,value:G,tipPlacement:M="left",autoComplete:R="off",onFocus:U,textAlign:K=p.P.Left,className:V,variant:W="md",readOnly:J=!1,step:q=.1}=r,z=((e,t)=>{var r={};for(var a in e)b.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&y)for(var a of y(e))t.indexOf(a)<0&&v.call(e,a)&&(r[a]=e[a]);return r})(r,["type","label","errorMsg","warningMsg","startAdornment","endAdornment","tipInfo","dataTestId","placeholder","inputRef","defaultValue","onChange","onKeyPress","autoFocus","isWebapp","spellCheck","name","tipError","min","disabled","value","tipPlacement","autoComplete","onFocus","textAlign","className","variant","readOnly","step"]);const[H,X]=(0,i.useState)(h),Q=(0,i.useMemo)((()=>S?(0,a.jsx)(d.Z,{mr:10,"data-testid":"startAdornment",children:S}):null),[S]),Y=(0,i.useMemo)((()=>T?(0,a.jsx)(d.Z,{ml:5,"data-testid":"endAdornment",children:T}):"password"===h?(0,a.jsx)(g.iT,{onClick:()=>X("password"===H?"text":"password"),children:"password"===H?(0,a.jsx)(l.tE,{width:16,height:16,color:c.wL.darkGrey}):(0,a.jsx)(l.JP,{width:16,height:16,color:c.wL.darkGrey})}):E||F?(0,a.jsx)(u.ZP,{title:E||F,arrow:!0,fitContent:!0,placement:M,children:(0,a.jsx)(g.Oq,{"data-testid":"tipIcon",children:(0,a.jsx)(g.ag,{$error:!!E})})}):null),[T,H,D,E,F,M,h]);return(0,a.jsxs)(d.Z,(ee=((e,t)=>{for(var r in t||(t={}))b.call(t,r)&&w(e,r,t[r]);if(y)for(var r of y(t))v.call(t,r)&&w(e,r,t[r]);return e})({},z),te={className:V,children:[x&&(0,a.jsx)(d.Z,{pb:8,ml:8,children:(0,a.jsx)(o.Z,{children:x})}),(0,a.jsxs)(g.fv,{$isWebapp:D,$error:!!C||!!E,onClick:U,"data-testid":"inputContainer",children:[Q,(0,a.jsx)(g.II,{style:{textAlign:K},name:_,type:H,placeholder:k,"data-testid":j,$error:!!C,ref:t||A,autoComplete:R,defaultValue:O,onChange:$,onKeyPress:I,autoFocus:N,spellCheck:Z,min:B,disabled:L,value:G,$isWebapp:D,onFocus:U,$variant:W,readOnly:J,step:"number"===h?q:void 0}),Y]}),(0,a.jsx)(g.CV,{$animateIn:!!C,children:(0,a.jsx)(n.Z,{children:C})}),P&&(0,a.jsx)(g.iC,{children:(0,a.jsx)(s.Z,{dataTestId:"warningMsg",children:P})})]},m(ee,f(te))));var ee,te})))},670585:(e,t,r)=>{r.d(t,{Z:()=>b});var a=r(785893),n=r(667294),s=r(771341),o=r(38187),i=r(876777),l=r(412252),c=r(300286),d=r(669525),u=Object.defineProperty,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&m(e,r,t[r]);if(p)for(var r of p(t))h.call(t,r)&&m(e,r,t[r]);return e};const y=({showPassword:e,setShowPassword:t})=>(0,a.jsx)(d.Ym,{onClick:()=>t(!e),"data-testid":"eyeContainer",children:(0,a.jsx)(d.iT,{children:e?(0,a.jsx)(s.JP,{width:16,height:16,color:i.wL.darkGrey,"data-testid":"closedEyeIcon"}):(0,a.jsx)(s.tE,{width:16,height:16,color:i.wL.darkGrey,"data-testid":"eyeIcon"})})}),b=(0,n.memo)((0,n.forwardRef)(((e,t)=>{var r=e,{label:s,errorMsg:i,dataTestId:u,placeholder:m,inputRef:b,defaultValue:v,onChange:w,autoFocus:x,spellCheck:C,name:P,className:S,disabled:T,value:F,type:j="text"}=r,k=((e,t)=>{var r={};for(var a in e)g.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&h.call(e,a)&&(r[a]=e[a]);return r})(r,["label","errorMsg","dataTestId","placeholder","inputRef","defaultValue","onChange","autoFocus","spellCheck","name","className","disabled","value","type"]);const[A,O]=(0,n.useState)(!1);return(0,a.jsxs)(o.Z,{className:S,gridGap:"8px",children:[s&&(0,a.jsx)(o.Z,{ml:8,children:(0,a.jsx)(l.Z,{children:s})}),(0,a.jsxs)(d.Bt,{children:[(0,a.jsx)(d.Kx,f({name:P,placeholder:m,"data-testid":u,ref:b||t,defaultValue:v,onChange:w,autoFocus:x,spellCheck:C,autoComplete:"off",disabled:T,value:F,$error:!!i,$type:"text"===j||A?"text":"password"},k)),"password"===j&&(0,a.jsx)(y,{showPassword:A,setShowPassword:O})]}),(0,a.jsx)(d.CV,{$animateIn:!!i,children:(0,a.jsx)(c.Z,{children:i})})]})})))},179145:(e,t,r)=>{r.d(t,{Z:()=>i});var a=r(785893),n=r(876777),s=r(233884);const o=r(818117).ZP.svg`
  animation: ${s.O2} 1s linear infinite;
  width: ${({width:e})=>e}px;
  height: ${({height:e})=>e}px;

  & circle {
    stroke: ${({color:e})=>e};
    stroke-linecap: round;
    animation: ${s.P2} 1.5s ease-in-out infinite;
  }
`,i=({color:e=n.wL.blue,width:t=50,height:r=50,dataTestId:s="circleLoader"})=>(0,a.jsx)(o,{color:e,width:t,height:r,"data-testid":s,viewBox:"0 0 50 50",children:(0,a.jsx)("circle",{cx:"25",cy:"25",r:"20",fill:"none",strokeWidth:"4","data-testid":"circularProgressCircle"})})},348329:(e,t,r)=>{r.d(t,{Z:()=>h});var a=r(785893),n=r(667294),s=r(776315),o=r(225179),i=r(225758),l=r(650511),c=r(38187),d=r(818117),u=r(230811);const p=(e,t)=>t||e?15:0,g=(0,d.ZP)(c.Z).attrs({width:"100%",maxWidth:"380px",p:16,flexDirection:"row",flexWrap:"wrap",alignItems:"center"})`
  word-break: break-all;
`,h=(0,n.memo)((({data:e,footerLabel:t,alwaysIndents:r})=>{const{t:n}=(0,u.$G)("app"),{open:d,handleToggle:h,ref:m}=(0,o.H)();return(0,a.jsx)(c.Z,{width:"100%","data-testid":"txDataContainer",pb:p(d,r),ref:m,children:(0,a.jsxs)(s.Z,{title:n("tx_data.title"),isOpen:d,onClick:h,children:[Object.entries(e).map((([e,t])=>(0,a.jsx)(i.Z,{name:e,value:t},e))),t&&(0,a.jsx)(g,{children:(0,a.jsx)(l.Z,{children:t})})]})})}))},995928:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(785893),n=r(876777),s=r(15145),o=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const u=e=>{var t=e,{dataTestId:r}=t,o=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(t,["dataTestId"]);return(0,a.jsx)(s.Z,((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&d(e,r,t[r]);return e})({fontSize:14,lineHeight:"20px",color:n.wL.midGrey,fontWeight:400,"data-testid":r},o))}},579296:(e,t,r)=>{r.d(t,{f:()=>n});r(785893);var a=r(667294);r(25022),r(847001),r(739989),r(446010),r(50533),r(693246),Object.defineProperty,Object.defineProperties,Object.getOwnPropertyDescriptors,Object.getOwnPropertySymbols,Object.prototype.hasOwnProperty,Object.prototype.propertyIsEnumerable;const n=(0,a.createContext)({})},764079:(e,t,r)=>{r.d(t,{FD:()=>l,Jb:()=>c,Np:()=>u,Wj:()=>s,XV:()=>i,df:()=>d,id:()=>p,m:()=>a,sv:()=>n,yF:()=>o});r(927289),r(844929),r(377538),r(150985),r(325051),r(133849),r(911614),r(655013),r(314523),r(909177),r(184464),r(269549),r(547450),r(651752),r(78116),r(832751),r(589398),r(677404),r(135153),r(579057),r(712090),r(246231),r(920705),r(60763),r(793281),r(683269),r(985383),r(384276),r(596534),r(567771),r(330797),r(725863),r(954638),r(508020),r(50902),r(968664),r(571432),r(581264),r(115174),r(167468),r(90507),r(993850),r(118041),r(786730),r(669678),r(603148),r(465479),r(638012),r(677770),r(515583),r(413749),r(975740),r(477030),r(230260),r(558012),r(944685),r(413937),r(497228),r(351602),r(390164),r(749184),r(676051),r(225912),r(190556),r(738021),r(941123),r(527923),r(522505),r(560718),r(471066),r(420686),r(67239),r(711372),r(360636),r(407025),r(90210);var a=r(950035),n=(r(310270),r(492406)),s=r(969154),o=r(962020),i=(r(334113),r(684352),r(29083),r(641912),r(564962),r(774743),r(460601)),l=(r(177184),r(282766)),c=(r(161953),r(812823),r(181063),r(875506),r(965735),r(290847),r(772774),r(691448),r(919029)),d=r(258416),u=r(931748),p=r(862828)},493730:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{AccountBalance:()=>n.r});var n=r(358156),s=r(533448);r.o(s,"ConfirmDialog")&&r.d(t,{ConfirmDialog:function(){return s.ConfirmDialog}}),r.o(s,"DappNotConnectedDialog")&&r.d(t,{DappNotConnectedDialog:function(){return s.DappNotConnectedDialog}}),r.o(s,"DappScreen")&&r.d(t,{DappScreen:function(){return s.DappScreen}}),r.o(s,"ExpandableSearchContainer")&&r.d(t,{ExpandableSearchContainer:function(){return s.ExpandableSearchContainer}}),r.o(s,"FullWidthSelectChain")&&r.d(t,{FullWidthSelectChain:function(){return s.FullWidthSelectChain}}),r.o(s,"SortingHeader")&&r.d(t,{SortingHeader:function(){return s.SortingHeader}}),r.o(s,"useConfirmDialog")&&r.d(t,{useConfirmDialog:function(){return s.useConfirmDialog}});var o=e([n]);n=(o.then?(await o)():o)[0],a()}catch(e){a(e)}}))},385167:(e,t,r)=>{r.a(e,(async(e,t)=>{try{var a=r(982107),n=e([a]);a=(n.then?(await n)():n)[0],t()}catch(e){t(e)}}))},582242:(e,t,r)=>{var a=r(818117);const n="?popup=true"===window.location.search;a.vJ`
  ${!n&&a.iv`
      html {
        height: 100% !important;
      }
    `}
`},409061:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{a:()=>s.a});var n=r(347227),s=r(255942),o=e([n]);n=(o.then?(await o)():o)[0],a()}catch(e){a(e)}}))},465438:(e,t,r)=>{r.a(e,(async(e,a)=>{try{var n=r(919020),s=r(632649);r.o(s,"ConfirmDialog")&&r.d(t,{ConfirmDialog:function(){return s.ConfirmDialog}}),r.o(s,"DappNotConnectedDialog")&&r.d(t,{DappNotConnectedDialog:function(){return s.DappNotConnectedDialog}}),r.o(s,"ExpandableSearchContainer")&&r.d(t,{ExpandableSearchContainer:function(){return s.ExpandableSearchContainer}}),r.o(s,"FullWidthSelectChain")&&r.d(t,{FullWidthSelectChain:function(){return s.FullWidthSelectChain}}),r.o(s,"useConfirmDialog")&&r.d(t,{useConfirmDialog:function(){return s.useConfirmDialog}});var o=e([n]);n=(o.then?(await o)():o)[0],a()}catch(e){a(e)}}))},646284:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{AccountSelect:()=>s.Z,AddressInput:()=>x.J,AgreeTerms:()=>o.Z,AssetIcon:()=>v.Y,ConfirmDialog:()=>U.QH,DappNotConnectedDialog:()=>K.J,DappScreen:()=>I.J,ExpandableSearchContainer:()=>_.Q,FormField:()=>P.W,FormHeader:()=>y.ph,FullWidthSelectChain:()=>Z.Z,InfoHelper:()=>f.Z,Loader:()=>d.Z,RenameDialog:()=>g.Z,SortingHeader:()=>j.c,useConfirmDialog:()=>U.WK});var n=r(599527),s=r(641124),o=r(170166),i=r(50727),l=r(398357),c=(r(875930),r(343634)),d=r(882935),u=r(744238),p=r(663856),g=r(345058),h=r(33961),m=r(310666),f=(r(221379),r(21723)),y=r(204255),b=r(143747),v=r(430648),w=r(926182),x=r(679896),C=r(537896),P=r(83668),S=r(493730),T=r(340134),F=r(463193),j=r(136303),k=r(715413),A=r(179060),O=r(372950),$=r(104183),I=r(230679),N=r(465438),D=r(292098),Z=r(228819),_=r(113863),E=r(781850),B=r(385167),L=r(409061),G=r(17349),M=r(366013),R=r(882478),U=r(316708),K=r(319685),V=e([n,s,o,i,l,c,d,u,p,g,h,m,f,y,b,v,w,x,C,P,S,T,F,j,k,A,O,$,I,N,D,Z,_,E,B,L,G,M,R,U,K]);[n,s,o,i,l,c,d,u,p,g,h,m,f,y,b,v,w,x,C,P,S,T,F,j,k,A,O,$,I,N,D,Z,_,E,B,L,G,M,R,U,K]=V.then?(await V)():V,r.o(S,"ConfirmDialog")&&r.d(t,{ConfirmDialog:function(){return S.ConfirmDialog}}),r.o(S,"DappNotConnectedDialog")&&r.d(t,{DappNotConnectedDialog:function(){return S.DappNotConnectedDialog}}),r.o(S,"DappScreen")&&r.d(t,{DappScreen:function(){return S.DappScreen}}),r.o(S,"ExpandableSearchContainer")&&r.d(t,{ExpandableSearchContainer:function(){return S.ExpandableSearchContainer}}),r.o(S,"FullWidthSelectChain")&&r.d(t,{FullWidthSelectChain:function(){return S.FullWidthSelectChain}}),r.o(S,"SortingHeader")&&r.d(t,{SortingHeader:function(){return S.SortingHeader}}),r.o(S,"useConfirmDialog")&&r.d(t,{useConfirmDialog:function(){return S.useConfirmDialog}}),r.o(N,"ConfirmDialog")&&r.d(t,{ConfirmDialog:function(){return N.ConfirmDialog}}),r.o(N,"DappNotConnectedDialog")&&r.d(t,{DappNotConnectedDialog:function(){return N.DappNotConnectedDialog}}),r.o(N,"ExpandableSearchContainer")&&r.d(t,{ExpandableSearchContainer:function(){return N.ExpandableSearchContainer}}),r.o(N,"FullWidthSelectChain")&&r.d(t,{FullWidthSelectChain:function(){return N.FullWidthSelectChain}}),r.o(N,"useConfirmDialog")&&r.d(t,{useConfirmDialog:function(){return N.useConfirmDialog}}),a()}catch(e){a(e)}}))},855192:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{BR:()=>ee,CV:()=>D,FU:()=>ne,GP:()=>W,Se:()=>z,X7:()=>J,Y9:()=>X,cj:()=>Y,di:()=>V,mp:()=>re,o3:()=>te,oi:()=>q,zh:()=>ae});var n=r(409669),s=r.n(n),o=r(623638),i=r(189556),l=r(847001),c=r(831352),d=r(834392),u=r(324104),p=r(739989),g=r(59854),h=r.n(g),m=r(101668),f=r(626423),y=r(330101),b=r(379372),v=r(691438),w=r(882591),x=r(439742),C=e([b]);b=(C.then?(await C)():C)[0];var P=Object.defineProperty,S=Object.defineProperties,T=Object.getOwnPropertyDescriptors,F=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,A=Math.pow,O=(e,t,r)=>t in e?P(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,$=(e,t)=>{for(var r in t||(t={}))j.call(t,r)&&O(e,r,t[r]);if(F)for(var r of F(t))k.call(t,r)&&O(e,r,t[r]);return e},I=(e,t)=>S(e,T(t)),N=(e,t,r)=>new Promise(((a,n)=>{var s=e=>{try{i(r.next(e))}catch(e){n(e)}},o=e=>{try{i(r.throw(e))}catch(e){n(e)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,o);i((r=r.apply(e,t)).next())}));const D=["< 15 Seconds","30 Seconds","> 30 Seconds"],Z=["Fast","Average","Low"],_=["high","medium","low"],E=[99,85,70],B=e=>{const{high:t,medium:r,low:a}=e;return[t,r,a].map(((e,t)=>({label:Z[t],fiat:"",maxFeePerGas:0,baseFee:0,gweiUnit:e||0,maxPriorityFeePerGas:0,processingTime:D[t],value:E[t]})))},L=e=>{switch(e){case c.yp.Avalanche:case c.yp.BinanceSmartChain:return.05;case c.yp.Arbitrum:return 15/60;case c.yp.Fantom:return 1/60;case c.yp.CronosEvm:return.1;case c.yp.Klaytn:return 1/60;case c.yp.Gnosis:return 5/60;case c.yp.CantoEvm:return.1;case c.yp.Optimism:return 2/60;default:return.25}},G=2,M=2,R=3,U=5,K=e=>!!(null==e?void 0:e.msg_type)&&void 0!==(null==e?void 0:e.fee)&&void 0!==(null==e?void 0:e.fee_for),V=e=>K(null==e?void 0:e.fixed_fee_params)&&!!(null==e?void 0:e.multi_transfer_fee),W=e=>N(void 0,null,(function*(){const t=yield J(e);if("gasPriceRange"in t){const e=Object.keys(null==t?void 0:t.gasPriceRange).sort(((e,t)=>Number(t)-Number(e))),r=_.reduce(((t,r,a)=>I($({},t),{[r]:Number(e[a])})),{});return B(r)}return[]})),J=(e,t=!1)=>N(void 0,null,(function*(){p.Z.debug({msg:"getEVMGasPrice",chainId:e.getId()});try{if(t||e.support(v.B.Eip1559)){if(e.support(v.B.NativeSupport)){const t=f.hv[e.getConfig().network.chainId],r=yield X(t);if(!Array.isArray(r))return r;{const e=r.find((e=>"Fast"===e.label));if(e)return e}}else{const t=yield Q(e);if(!Array.isArray(t))return t;{const e=t.find((e=>"Fast"===e.label));if(e)return e}}if(e.support(v.B.NativeSupport)){const t=f.hv[e.getConfig().network.chainId];return re(e.getConfig().network.jsonRpcProviderUrl[m.GI.Rpc],L(t))}throw`getEVMGasPrice not implemented for ${e.getId()} `}return re(e.getConfig().network.jsonRpcProviderUrl[m.GI.Rpc],L(e.getId()))}catch(t){return p.Z.error("getEVMGasPrice",{e:t,chainId:e.getId()}),Promise.reject(t)}})),q=(e,t=!1)=>N(void 0,null,(function*(){p.Z.debug({msg:"getGasPrice",chain:e.getType()});try{return(t||e.support(v.B.Eip1559))&&e.support(v.B.NativeSupport)?yield X(f.hv[e.getConfig().network.chainId]):yield Q(e)}catch(t){return p.Z.error("getEVMGasPrice",{e:t,chain:e.getType()}),Promise.reject(t)}})),z=e=>N(void 0,null,(function*(){p.Z.debug({msg:"getDefaultGasPrices",chain:e.getType()});try{const t=w.u[f.hv[e.getConfig().network.chainId]];return yield H(t||f.hv[e.getConfig().network.chainId])}catch(t){return p.Z.error("getDefaultGasPrices",{e:t,chain:e.getType()}),Promise.reject(t)}})),H=e=>N(void 0,null,(function*(){try{const t=yield(0,x.D)(e);return t?B(t):Promise.resolve(ne(ae(e)))}catch(t){return p.Z.error(`fetch gas price error: ${t}`),Promise.resolve(ne(ae(e)))}})),X=e=>N(void 0,null,(function*(){try{return yield te(e)}catch(t){return p.Z.error(`fetch gas price error: ${t}`),Promise.resolve(ne(ae(e)))}})),Q=e=>N(void 0,null,(function*(){try{const t=yield e.selfCast().getProvider().getFeeData();return[i.m.High,i.m.Medium,i.m.Low].reduce(((e,r)=>{const{lastBaseFeePerGas:a,maxFeePerGas:n,maxPriorityFeePerGas:s}=t,o=_.findIndex((e=>e===r));if(o<0)return e;const i={label:Z[o],fiat:"",maxFeePerGas:n?Number(u.formatUnits(n.toNumber(),"gwei")):0,baseFee:a?Number(u.formatUnits(a.toNumber(),"gwei")):0,maxPriorityFeePerGas:s?Number(u.formatUnits(s.toNumber(),"gwei")):0,processingTime:D[o],value:E[o]};return e.push(i),e}),[])}catch(e){return p.Z.error(`fetch gas price error: ${e}`),Promise.reject(e)}})),Y=()=>N(void 0,null,(function*(){const e=(yield(0,y.Io)("https://bbc-dex.xdefiservices.com/api/v1/fees")).find((e=>V(e)&&"send"===(null==e?void 0:e.fixed_fee_params.msg_type)))||void 0;return((null==e?void 0:e.fixed_fee_params.fee)||0)/A(10,8)})),ee=e=>N(void 0,null,(function*(){const t=e.getConfig(),r=Number(t.defaultGasPrice),a=1.3*r,n=[1.3*a,a,r],s=_.reduce(((e,t,r)=>I($({},e),{[t]:Number(n[r])})),{});return B(s)})),te=e=>N(void 0,null,(function*(){const{data:t}=yield(0,o.O)("network-only");return[i.m.High,i.m.Medium,i.m.Low].reduce(((r,a)=>{const{baseFeePerGas:n,priorityFeePerGas:s,maxFeePerGas:o}=t[e].fee[a],i=_.findIndex((e=>e===a));if(i<0)return r;const l={label:Z[i],fiat:"",maxFeePerGas:o,baseFee:n,maxPriorityFeePerGas:s,processingTime:D[i],value:E[i],gweiUnit:0};return r.push(l),r}),[])})),re=(e,t)=>N(void 0,null,(function*(){const r=JSON.stringify({jsonrpc:"2.0",method:"eth_gasPrice",params:[],id:1}),a={method:"POST",url:e,headers:{"Content-Type":"application/json"},data:r};return s()(a).then((e=>{var r;p.Z.info(e.data);try{const a=null==(r=e.data)?void 0:r.result;p.Z.debug({response:e,res:a});const n=Math.max(Number(a)/b.uR,1/d.uO),s=1.1*n,o=1.5*n,i=1.2*n,l={safeLow:s,average:o,fast:i,fastest:i,gasPriceRange:{[s]:1.4*t,[o]:1.2*t,[i]:t}};return Promise.resolve(l)}catch(e){return p.Z.error(`Failed to parse: ${e}, defaults to 10`),Promise.reject(e)}})).catch((e=>(p.Z.error({msg:`fetchEthJsonRpcGasPrice error: ${e} `,error:e}),Promise.reject(e))))})),ae=e=>{switch(e){case c.yp.Ethereum:case c.yp.Avalanche:return 50;case c.yp.Polygon:return 205;default:throw"Not defined default base fee for "+e}},ne=(e=0)=>{const t=h()(1.125*e*1.125*1.125,G)||+l.Z.get("DEFAULT_MAX_FEE_RATE");return[{label:"Ape",fiat:"",maxFeePerGas:t,baseFee:e,maxPriorityFeePerGas:U,processingTime:"15 Seconds",value:95,fallback:!0},{label:"Fast",fiat:"",maxFeePerGas:t,baseFee:e,maxPriorityFeePerGas:R,processingTime:"30 Seconds",value:80,fallback:!0},{label:"Average",fiat:"",maxFeePerGas:t,baseFee:e,maxPriorityFeePerGas:M,processingTime:"> 30 Seconds",value:70,fallback:!0}]};a()}catch(e){a(e)}}))},845826:(e,t,r)=>{r.d(t,{Eq:()=>g,Fs:()=>f,Zy:()=>m,zS:()=>h});var a=r(409669),n=r.n(a),s=r(244431),o=r.n(s),i=r(939789),l=r.n(i),c=r(739989),d=r(496486),u=r(834392),p=r(46461);const g=e=>{return t=void 0,r=null,a=function*(){return new Promise(((t,r)=>{try{n().get(e).then((e=>{var t;return(null==(t=null==e?void 0:e.data)?void 0:t.result)||[]})).then((e=>{if(c.Z.debug({transactions:e}),!(0,d.isArray)(e))return t([]);const r=(0,d.uniqBy)(e.map((e=>({address:e.contractAddress,name:e.tokenSymbol,symbol:e.tokenSymbol,decimals:e.tokenDecimal,id:e.contractAddress,image:null}))).filter((e=>!!Number(e.decimals))),"address");return c.Z.debug({tokens:r}),t(r)}))}catch(e){c.Z.error({error:e}),r(e)}}))},new Promise(((e,n)=>{var s=e=>{try{i(a.next(e))}catch(e){n(e)}},o=e=>{try{i(a.throw(e))}catch(e){n(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,o);i((a=a.apply(t,r)).next())}));var t,r,a},h=e=>!e.isZero()&&e.lt(u.Ju),m=(e,t,r)=>`${e}_${t}_${r}`,f=(e,t)=>{if(!isFinite(l().uintOrNaN(t)))throw(0,p.t)("app:controller_errors.invalid_fee_rate");let r=0;for(let a=0;a<e.length;++a){const n=e[a],s=t*l().inputBytes(n),o=l().uintOrNaN(n.value);s>n.value&&(r+=o)}return new(o())(r).dividedBy(1e8)}},7524:(e,t,r)=>{r.d(t,{$:()=>c});var a=r(855835),n=r(450780),s=r.n(n),Buffer=r(348764).Buffer,o=Object.defineProperty,i=(e,t,r)=>(((e,t,r)=>{t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!=typeof t?t+"":t,r),r);class l{constructor(e){i(this,"pubKey"),this.pubKey=e}getAddress(){return a.createHash("sha256").update(this.pubKey).digest().subarray(0,20)}verify(e){return null!==s().sign.open(new Uint8Array(e),new Uint8Array(this.pubKey))}toBuffer(){return Buffer.from(this.pubKey)}toBase64(){return this.pubKey.toString("base64")}toJSONInCodec(){return this.toBase64()}static fromBase64(e){const t=Buffer.from(e,"base64");return new l(t)}static fromJSON(e){return l.fromBase64(e)}}class c{constructor(e){i(this,"pubKey"),i(this,"privKey");const t=s().sign.keyPair.fromSeed(new Uint8Array(e));this.pubKey=new l(Buffer.from(t.publicKey)),this.privKey=e}getPubKey(){return this.pubKey}sign(e){const t=s().sign.keyPair.fromSeed(new Uint8Array(this.privKey));return Buffer.from(s().sign(new Uint8Array(e),new Uint8Array(t.secretKey)))}toBuffer(){return Buffer.from(this.privKey)}toBase64(){return this.privKey.toString("base64")}toJSONInCodec(){return this.toBase64()}static fromBase64(e){const t=Buffer.from(e,"base64");return new c(t)}static fromJSON(e){return c.fromBase64(e)}}},473821:(e,t,r)=>{r.d(t,{Z:()=>x});var a=r(348764),n=r(848469),s=r.n(n),o=r(381449),i=r.n(o),l=r(878638),c=r(222751),d=r(202593),u=r(256371),p=r(739989),g=r(369943),h=r(46461),m=r(831352),f=r(617656),y=r(691438),b=r(845826),v=r(995920),w=(e,t,r)=>new Promise(((a,n)=>{var s=e=>{try{i(r.next(e))}catch(e){n(e)}},o=e=>{try{i(r.throw(e))}catch(e){n(e)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(s,o);i((r=r.apply(e,t)).next())}));class x extends v.Z{constructor(){super(),this.init()}init(){return w(this,null,(function*(){try{yield i().init({debug:!1,env:"web",lazyLoad:!0,manifest:{email:"support@xdefi.io",appUrl:"https://www.xdefi.io/"}})}catch(e){p.Z.error("Failed to init trezor",e)}}))}getChainTypes(){return[y.J.Evm,y.J.Bitcoin,y.J.Litecoin,y.J.BitcoinCash,y.J.Dogecoin,y.J.Binance]}splitDerivationPath(e){const t=e.split("/").filter((e=>-1!==e.indexOf("'"))).join("/");return{basePath:t,accountPath:e.replace(`${t}/`,"")}}getEVMAddresses(e,t,r,a="44'/60'/0'/0/X"){return w(this,null,(function*(){const n=e.getConfig().tokenSymbol,s=[];t>0&&s.push({path:`m/${a.replace("X","0")}`,showOnTrezor:!1});for(let e=t;e<t+r;e++)s.push({path:`m/${a.replace("X",e.toString())}`,showOnTrezor:!1});const o=yield i().ethereumGetAddress({bundle:s});if(!o.success)return Promise.reject(o.payload.error);const l=(0,b.Zy)(e.getType(),a,o.payload[0].address);return o.payload.filter(((e,r)=>!(t>0&&0===r))).map(((r,s)=>{const o=s+t;return{id:`${n}-${r.serializedPath}`,derivation:a,address:r.address,publicKey:"",testnetDerivation:a,testnetPublicKey:"",testnetAddress:r.address,label:`Account ${o}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:o,rootWalletId:l}}))}))}getEIP1024PublicEncryptionKey(e,t){throw"Method not implemented."}getEIP1024SharedSecret(e,t,r){throw"Method not implemented."}hexlify(e){return e?(0,c.isHexString)(e)?e:(0,u.hexlify)(e):"0x0"}signEVMTransaction(e,t,r){return w(this,null,(function*(){const a=e.replace("X",t.toString()),n={to:r.to,value:this.hexlify(r.value),data:r.data?this.hexlify(r.data):void 0,chainId:r.chainId,nonce:this.hexlify(r.nonce),gasPrice:r.gasPrice?this.hexlify(r.gasPrice):void 0,gasLimit:this.hexlify(r.gasLimit)};r.maxFeePerGas&&r.maxPriorityFeePerGas?(n.maxFeePerGas=this.hexlify(r.maxFeePerGas),n.maxPriorityFeePerGas=this.hexlify(r.maxPriorityFeePerGas)):n.gasPrice=this.hexlify(r.gasPrice);const s=yield i().ethereumSignTransaction({path:`m/${a}`,transaction:n});return s.success?{v:d.O$.from(s.payload.v).toNumber(),r:s.payload.r,s:s.payload.s}:Promise.reject(s.payload.error)}))}signETHPersonalMessage(e,t,r){return w(this,null,(function*(){const a=e.replace("X",t.toString()),n=r.startsWith("0x")?r.substring(2):r,s=yield i().ethereumSignMessage({path:`m/${a}`,message:n,hex:!0});return s.success?"0x"+s.payload.signature:Promise.reject(s.payload.error)}))}signEIP712MessageLegacy(e,t,r){const a=(0,g.e)(r);return this.signETHPersonalMessage(e,t,a)}signEIP712Message(e,t,r,a){return w(this,null,(function*(){const n=e.replace("X",t.toString()),{message_hash:o,domain_separator_hash:l}=s()(r,!0),c=yield i().ethereumSignTypedData({path:`m/${n}`,metamask_v4_compat:a,data:r,message_hash:null!=o?o:void 0,domain_separator_hash:null!=l?l:void 0});return c.success?c.payload.signature:Promise.reject(c.payload.error)}))}signEIP712HashedMessage(e,t,r,a){throw"Method not implemented."}getTHORChainAddresses(e,t,r,a){throw"Method not implemented."}signTHORTransaction(e,t,r){throw"Method not implemented."}getUTXOAddresses(e,t,r,a){return w(this,null,(function*(){const n=e.getConfig().tokenSymbol,s=[];t>0&&s.push({path:`m/${a.replace("X","0")}`,showOnTrezor:!1});for(let n=t;n<t+r;n++){const t={path:`m/${a.replace("X",n.toString())}`,showOnTrezor:!1};e.getType()===y.J.Bitcoin&&e.selfCast().getConfig().network.activeNetwork===m.g5.Testnet&&(t.coin="Testnet"),s.push(t)}const o=yield i().getAddress({bundle:s});if(!o.success)return Promise.reject(o.payload.error);const l=(0,b.Zy)(e.getType(),a,o.payload[0].address);return o.payload.filter(((e,r)=>!(t>0&&0===r))).map(((r,s)=>{const o=s+t;return{id:`${n}-${r.serializedPath}`,derivation:a,address:r.address,publicKey:"",testnetDerivation:a,testnetPublicKey:"",testnetAddress:r.address,label:`Account ${o}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:o,rootWalletId:l}}))}))}signUTXOTransaction(e,t,r,n){return w(this,null,(function*(){let s=e.getConfig().tokenSymbol;e.getType()===y.J.Bitcoin&&e.selfCast().getConfig().network.activeNetwork===m.g5.Testnet&&(s="Testnet");const o=`m/${t}`.replace("X",r.toString()),c=n.inputs.map((e=>{var t;const r=f.YW.fromHex(null!=(t=e.txHex)?t:e.tx_hex);return{hash:e.hash,version:r.version,inputs:r.ins.map((e=>({prev_hash:e.hash.reverse().toString("hex"),prev_index:e.index,script_sig:e.script.toString("hex"),sequence:e.sequence}))),bin_outputs:r.outs.map((e=>({amount:e.value,script_pubkey:e.script.toString("hex")}))),lock_time:r.locktime}})),d={inputs:n.inputs.map((e=>{const t=(0,l.o$)(o),r=(0,l._0)(t);return{prev_index:e.index,prev_hash:e.hash,amount:e.value.toString(),address_n:t,script_type:r}})),outputs:n.outputs.map((e=>{var t;if(0===e.value){let r=e.script.toString("hex");if("6a"===r.substr(0,2)){r=r.substr(2);const e=f._v.decompile(a.Buffer.from(r,"hex")),n=null==(t=null==e?void 0:e[0])?void 0:t.toString("utf8"),s=a.Buffer.from(n,"utf8");r=f._v.compile(s).toString("hex")}return{script_type:"PAYTOOPRETURN",op_return_data:r,amount:e.value.toString()}}if(void 0===e.address)throw(0,h.t)("app:controller_errors.trezor.missing_output_address");return{script_type:"PAYTOADDRESS",address:e.address,amount:e.value.toString()}})),refTxs:c,coin:s},u=yield i().signTransaction(d);return u.success?u.payload.serializedTx:Promise.reject(u.payload.error)}))}getTerraAddresses(e,t,r,a,n){throw"Method not implemented."}signTerraTransaction(e,t,r){throw"Method not implemented."}getNearAddresses(e,t,r,a){throw"Method not implemented."}signNearTransaction(e,t,r){throw"Method not implemented."}getSolanaAddresses(e,t,r,a){throw"Method not implemented."}solanaSignTransaction(e,t){throw"Method not implemented."}getCosmosAddresses(e,t,r,a,n){throw"Method not implemented."}cosmosSignTransaction(e,t,r,a){throw"Method not implemented."}signFantomTransaction(e,t){throw"Method not implemented."}getBinanceAddresses(e,t,r,a){return w(this,null,(function*(){const n=e.getConfig().tokenSymbol,s=[];t>0&&s.push({path:`m/${a.replace("X","0")}`,showOnTrezor:!1});for(let e=t;e<t+r;e++)s.push({path:`m/${a.replace("X",e.toString())}`,showOnTrezor:!1});const o=yield i().binanceGetAddress({bundle:s});if(!o.success)return Promise.reject(o.payload.error);const l=(0,b.Zy)(e.getType(),a,o.payload[0].address);return o.payload.filter(((e,r)=>!(t>0&&0===r))).map(((r,s)=>{const o=s+t;return{id:`${n}-${r.serializedPath}`,derivation:a,address:r.address,publicKey:"",testnetDerivation:a,testnetPublicKey:"",testnetAddress:r.address,label:`Account ${o}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:o,rootWalletId:l}}))}))}signBinanceTransaction(e,t){return w(this,null,(function*(){throw"Method not implemented."}))}getTronAddresses(e,t,r){return Promise.resolve([])}}},459457:(e,t,r)=>{r.d(t,{Lp:()=>F});var a=r(393581),n=r(235367),s=r(285497),o=r(22307),i=r(265142),l=r(138066),c=r(862457),d=r(595210),u=r(636765),p=r(456169),g=r(158042),h=r(369483),m=r.n(h),f=r(847001),y=r(264487),b=r(739989),v=r(204147),w=r(867885);const x=new d.GraphQLWsLink((0,g.eI)({url:f.Z.get("GQL_WS_ENDPOINT"),on:{closed:()=>{(0,y.eN)({message:"WebSocket closed"}),b.Z.info("WebSocket closed")},error:e=>{(0,y.Tb)(e),b.Z.error("WebSocket error:",e)}},shouldRetry:()=>!0})),C=new l.A({uri:f.Z.get("GQL_HTTP_ENDPOINT"),batchMax:20,batchInterval:50}),P=new c.W({delay:{initial:300,max:1/0,jitter:!0},attempts:{max:3,retryIf:(e,t)=>!!e}}),S=a.i.from([P,(0,n.V)((({query:e})=>{const t=(0,u.p$)(e);return"OperationDefinition"===t.kind&&"subscription"===t.operation}),x,C)]),T=new s.h({dataIdFromObject:e=>e.id,possibleTypes:w,typePolicies:{Query:{fields:{assets:{merge:!0}}},AmountType:{keyFields:!1},ImageType:{keyFields:!1},TokenContractType:{keyFields:!1},AssetTokenContractType:{keyFields:!1},AddressType:{keyFields:!1}}});m().config({driver:m().INDEXEDDB,storeName:"cache",name:"xdefi-gql"});new p.cA({cache:T,storage:new p.xm(m()),debug:!1,trigger:"write",maxSize:!1,persistenceMapper:e=>{return t=void 0,r=null,a=function*(){const t=JSON.parse(e),r={},a=[],n=t.ROOT_QUERY;return n&&(r.ROOT_QUERY=Object.keys(n).reduce(((e,t)=>{if("__typename"===t)return e;if(e[t]=n[t],Array.isArray(n[t])){const e=n[t].map((e=>e.__ref));a.push(...e)}else{const e=n[t].__ref;a.push(e)}return e}),{__typename:"Query"}),a.reduce(((e,r)=>(e[r]=t[r],e)),r)),JSON.stringify(r)},new Promise(((e,n)=>{var s=e=>{try{i(a.next(e))}catch(e){n(e)}},o=e=>{try{i(a.throw(e))}catch(e){n(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,o);i((a=a.apply(t,r)).next())}));var t,r,a}});const F=new o.f({link:S,cache:T,name:"extension_app",version:v.i8});window.__APOLLO_CLIENT__=F,window.__APOLLO_GQL__=i.Ps},189556:(e,t,r)=>{r.d(t,{m:()=>n,x:()=>s});var a=r(831352),n=(e=>(e.High="high",e.Medium="medium",e.Low="low",e))(n||{});const s=[a.yp.Ethereum,a.yp.Avalanche,a.yp.CantoEvm,a.yp.CronosEvm,a.yp.Fantom,a.yp.Gnosis,a.yp.Klaytn,a.yp.Optimism,a.yp.Polygon]},831352:(e,t,r)=>{r.d(t,{GK:()=>h,MS:()=>f,OH:()=>u,VO:()=>l,VX:()=>n,Yn:()=>y,c$:()=>i,e5:()=>c,g5:()=>p,hq:()=>o,pD:()=>d,tV:()=>s,ym:()=>m,yp:()=>g});var a=r(148771),n=(e=>(e.RequestAccounts="request_accounts",e))(n||{}),s=(e=>(e.SignTransaction="sign_transaction",e.RequestAccountsAndKeys="request_accounts_and_keys",e.GetUnspentUtxos="get_unspent_utxos",e.SignPsbt="sign_psbt",e.Transfer="transfer",e))(s||{}),o=(e=>(e.Transfer="transfer",e.SignTransaction="sign_transaction",e))(o||{}),i=(e=>(e.SignTransaction="sign_transaction",e.Transfer="transfer",e))(i||{}),l=(e=>(e.Deposit="deposit",e.Transfer="transfer",e.SignTransaction="sign_transaction",e))(l||{}),c=(e=>(e.Info="info",e.Connect="connect",e.Sign="sign",e.SignBytes="sign-bytes",e.Post="post",e))(c||{}),d=(e=>(e.Transfer="transfer",e.SignTransaction="sign_transaction",e))(d||{}),u=(e=>(e.Transfer="transfer",e.SignTransaction="sign_transaction",e))(u||{}),p=(e=>(e.Mainnet="mainnet",e.Testnet="testnet",e))(p||{}),g=(e=>(e.Ethereum="ethereum",e.Avalanche="avalanche",e.Fantom="fantom",e.Arbitrum="arbitrum",e.Binance="binance",e.BinanceSmartChain="binancesmartchain",e.Polygon="polygon",e.Bitcoin="bitcoin",e.Litecoin="litecoin",e.BitcoinCash="bitcoincash",e.Thorchain="thorchain",e.Terra="terra",e.Dogecoin="dogecoin",e.Solana="solana",e.Aurora="aurora",e.Near="near",e.Cosmoshub="cosmoshub",e.Osmosis="osmosis",e.Axelar="axelar",e.Juno="juno",e.Crescent="crescent",e.Cronos="cronos",e.CronosEvm="cronosEVM",e.Kava="kava",e.Akash="akash",e.Stargaze="stargaze",e.Kujira="kujira",e.SeiTestnet="seitestnet",e.Stride="stride",e.Mars="mars",e.Optimism="optimism",e.CantoEvm="cantoEVM",e.Klaytn="klaytn",e.Gnosis="gnosis",e.BitcoinTestnet="bitcointestnet",e.Tron="tron",e.Mayachain="mayachain",e))(g||{});const h={ethereum:"Ethereum",avalanche:"Avalanche",fantom:"Fantom",arbitrum:"Arbitrum",binance:"BinanceChain",binancesmartchain:"BinanceSmartChain",polygon:"Polygon",bitcoin:"Bitcoin",litecoin:"Litecoin",bitcoincash:"BitcoinCash",thorchain:"THORChain",terra:"Terra",dogecoin:"Dogecoin",solana:"Solana",aurora:"Aurora",near:"Near",cosmoshub:"Cosmos",osmosis:"Osmosis",axelar:"Axelar",juno:"JUNO",crescent:"Crescent",cronos:"Cronos",kava:"Kava",akash:"Akash",stargaze:"Stargaze",kujira:"Kujira",cronosEVM:"CronosEVM",seitestnet:"SeiTestnet",stride:"Stride",mars:"MarsProtocol",optimism:"Optimism",cantoEVM:"CantoEVM",klaytn:"Klaytn",gnosis:"Gnosis",bitcointestnet:"BitcoinTestnet",tron:"Tron",mayachain:"Mayachain"},m=e=>e&&e.hasOwnProperty("amount")&&e.hasOwnProperty("decimals"),f=e=>(0,a.baseAmount)(e.amount,e.decimals);var y=(e=>(e.Erc20="ERC20",e.Erc721="ERC721",e.Erc1155="ERC1155",e))(y||{})},834392:(e,t,r)=>{r.d(t,{DF:()=>i,Ju:()=>u,UX:()=>l,j5:()=>d,uO:()=>c});var a=r(244431),n=r.n(a),s=r(771341),o=Math.pow;const i=6,l=2,c=6,d=4,u=new(n())(1).div(o(10,i));s.JE,s.k0,s.kf,s.JP,s.TI},680528:(e,t,r)=>{r.d(t,{Df:()=>m,Ds:()=>h,Ji:()=>y,KV:()=>f,N7:()=>d,SR:()=>u,YN:()=>o,ZN:()=>n,dn:()=>p,ft:()=>s,hX:()=>c,iA:()=>i,ie:()=>l,lo:()=>b,p9:()=>g,ys:()=>a});var a=(e=>(e.Single="single",e.All="all",e))(a||{}),n=(e=>(e.None="",e.Create="create",e.Import="import",e.ViewOnly="view-only",e.SubAccount="sub-account",e.Hardware="hardware",e.Confirm="confirm",e))(n||{});const s="/";const o="/intro",i="/import-wallet",l="/manage-wallet",c="/details",d=["/swapAssets","/swapTransactions","/swap"],u=75e5,p=1e-6;const g={"/sendAsset":"Send Asset","/home/assets":"Home","/swap":"Swap","/add-token":"Add Token","/swapTransactions":"Swap Transactions","/wallets":"Accounts","/nft":"NFT","/home/activity":"Recent Activity"},h="safeTransferFrom(address,address,uint256)",m="safeTransferFrom(address,address,uint256,uint256,bytes)",f=Object.freeze({A0:0,A6:6,A8:8,A9:9,A18:18,A24:24}),y=/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/,b=8},25022:(e,t,r)=>{r.d(t,{GG:()=>n,uT:()=>a});var a=(e=>(e.TokensInWallets="tokens in wallets",e.MainBalancesInWallet="Main balances in wallet",e.SendAssetSuccess="send asset success",e.SendAssetFailed="send asset failed",e.SwapSucceeded="swap broadcast succeeded",e.SwapFailed="swap broadcast failed",e.SwapCanceledSwap="Swap Canceled Swap",e.SwapQuoteRequested="Swap Quote Received",e.SwapQuoteRequestFailed="Swap Quote Request Failed",e.SwapSourceTokenSelected="Swap Source Token Selected",e.SwapDestTokenSelected="Swap Destination Token Selected",e.SwapTradesRequestSucceeded="Swap Trades Request Succeeded",e.SwapTradesRequestFailed="Swap Trades Request Failed",e.SwapModalOpened="Swap Modal Opened",e.OpenedExtension="open extension",e.Installed="extension installed",e.RestoreByRecoveryCode="restored wallet by recovery code",e.RestoreBySecretPhrase="restored wallet by seed phrase",e.RestoreByKeystore="restored wallet by keystore json",e.RestoreByPk="restored wallet by private key",e.CreateNewWallet="create new wallet",e.AddTokenToWallet="add tokens to wallet",e.ConnectToDapp="connected to dapp",e.ApproveDappTransaction="approve dapp transaction",e.MainSendClicked="main send clicked",e.MainAddressesClicked="main addresses clicked",e.MainBuyClicked="main buy clicked",e.AssetSendClicked="asset send clicked",e.AssetReceiveClicked="asset receive clicked",e.AssetBuyClicked="asset buy clicked",e.CopyAddress="wallet address copied",e.ToggledPrioritise="toggled prioritise",e.ToggledAnonMetrcs="toggled anonymous metrics",e.ChangedSlippage="changed slippage",e.ToggledSwapSettings="toggled swap settings",e.ReleaseNotesLinkClicked="release notes link clicked",e.OnboardingTc="t & c checked",e.OnboardingHardwareWallet="onboarding hardware wallet",e.OnboardingNewHotWallet="onboarding  new hot wallet",e.OnboardingLegacyWallet="onboarding legacy wallet",e.OnboardingComplete="onboarding complete",e.AssetsRefined="assets refined",e.CustomChainAdded="custom chain added",e.Locked="wallet locked",e.DetailsClicked="asset details clicked",e))(a||{}),n=(e=>(e.Sign="sign",e.Approve="approve",e.Transaction="transaction",e))(n||{})},175177:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{V:()=>i});var n=r(308787),s=r(818117),o=e([n]);n=(o.then?(await o)():o)[0];s.ZP.div`
  overflow-wrap: break-word;
`;const i=(0,s.ZP)(n.FlexBox).attrs({alignItems:"center",flexDirection:"row",gridGap:8})`
  width: 100%;
`;a()}catch(e){a(e)}}))},636154:(e,t,r)=>{r.d(t,{V8:()=>n,Xx:()=>a});var a=(e=>(e.Alphabetical="Alphabetical",e))(a||{}),n=(e=>(e["2x2"]="2x2",e["3x3"]="3x3",e["4x4"]="4x4",e))(n||{})},741797:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Aw:()=>p,te:()=>g});var n=r(667294),s=r(281672),o=r(505403),i=r(50533),l=r(831352),c=e([s,o]);[s,o]=c.then?(await c)():c;var d=Math.pow;const u=e=>{const t=(0,s.UW)(),r=(0,i.v9)((t=>{var r;return t.balances[e||(null==(r=t.wallets)?void 0:r.activeWalletId)]})),{getFiatPriceForAmount:a}=(0,o.Z)();return(0,n.useCallback)((()=>{var e;const n=t.chains.getChainControllerById(l.yp.Bitcoin).getConfig(),s=null==(e=null==r?void 0:r.chains)?void 0:e[n.id],o=Number((null==s?void 0:s.ordinalBalance)||"0")/d(10,n.decimals);return{balance:o,fiat:a(n.id,o,n.chainSymbol)}}),[r.chains,a,t.chains])},p=e=>{const t=(0,s.UW)(),r=u(e),{getAssetFiatBalanceStr:a}=(0,o.Z)(),i=(0,n.useCallback)((r=>{var a;const{address:n,decimals:s}=t.getAssetAddressDecimals(r.chainId,r.token);return Number(t.getFormattedBalance({address:n,chainId:r.chainId,symbol:r.token.symbol,asset:null==(a=r.token)?void 0:a.asset,decimals:s},e))}),[e,t]);return{getAssetFiatBalance:(0,n.useCallback)((r=>{const{address:n,decimals:s}=t.getAssetAddressDecimals(r.chainId,r.token);return Number(a(r.chainId,r.token.symbol,n,s,r.token.id,!1,e))}),[t,a,e]),getAssetBalance:i,getAssetFiatBalanceStr:a,getOrdinalBalance:r}},g=(e,t,r)=>{const{getAssetFiatBalance:a,getAssetBalance:o,getOrdinalBalance:i}=p(t),c=(0,s.fU)(),[d,u]=(0,n.useState)({}),g=(0,n.useCallback)((()=>{const t=c.getChainControllerById(l.yp.Bitcoin),n=e.reduce(((e,n)=>{var s;const l=n.token.symbol?n.token.symbol.toUpperCase():"";if((null==(s=e[l])?void 0:s.assets)?(e[l].assets.push(n),e[l].fiat+=a(n),e[l].balance+=o(n)):e[l]={assets:[n],fiat:a(n),balance:o(n)},(null==r?void 0:r.withOrdinalBalance)&&n.isNativeAsset&&"BTC"===n.token.symbol&&t.getId()===n.chainId){const{balance:t,fiat:r}=i();e[l].balance+=t,e[l].fiat+=r}return e}),{});u(n)}),[e,c,o,a,i,null==r?void 0:r.withOrdinalBalance]);return(0,n.useEffect)((()=>{g();const e=setInterval(g,c.refreshRate.balances);return()=>clearInterval(e)}),[c.refreshRate.balances,g]),{groupedAsset:Object.values(d)}};a()}catch(e){a(e)}}))},353789:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{W2:()=>n.Z});var n=r(213415),s=r(728847),o=r(115105),i=(r(936352),e([n,s,o]));[n,s,o]=i.then?(await i)():i,a()}catch(e){a(e)}}))},851892:(e,t,r)=>{r.d(t,{ZP:()=>w,sJ:()=>v,vy:()=>d});var a=r(409669),n=r.n(a),s=r(691438),o=r(264487),i=r(179826),l=r(936609),c=r(522933);var d=(e=>(e.GasLimit="GasLimit",e))(d||{});const u={DUST:"error_helper.DUST",INSUFFICIENT_FUNDS:"error_helper.INSUFFICIENT_FUNDS",GasLimit:"error_helper.GUS_LIMIT","-32601":"error_helper.-32601","-32003":"error_helper.-32003","-32004":"error_helper.-32004","-32005":"error_helper.-32005",4001:"error_helper.4001",4100:"error_helper.4100",4200:"error_helper.4200",4900:"error_helper.4900",4901:"error_helper.4901"},p=Object.keys(u),g=["TransportOpenUserCancelled","TransportStatusError","LockedDeviceError","Unknown Status Code: 28161","27906","28161","27013","11"],h={27906:"error_helper.ledger_errors.27906",28160:"error_helper.ledger_errors.28160",27013:"error_helper.ledger_errors.27013",11:"error_helper.ledger_errors.11"},m=e=>{var t,r;return n().isAxiosError(e)?null!=(r=null==(t=e.response)?void 0:t.data.message)?r:e.message:(null==e?void 0:e.message)?null==e?void 0:e.message:((0,o.Tb)(e,{tags:{type:"UndefinedError"}}),JSON.stringify(e))},f=e=>p.includes(String(e))||g.includes(String(e)),y="-32603",b=["Unknown Status Code",y,"App Version is not supported","Open the Terra app in your Ledger.","Execution Error"],v=e=>{try{return(0,c.Q4)(e,["dust","Dust","DUST"])?{code:"DUST"}:"string"==typeof e?{code:e}:e.message in d?{code:e.message}:(0,i.serializeError)(e)}catch(t){return(0,i.serializeError)(e)}},w=(e,t,r)=>{var a,n,o,i,c,d,v,w,x,C,P,S,T,F,j;if("SERVER_ERROR"===(null==e?void 0:e.code))return"error_helper.error_while_connecting_to_server";if("Attempting to use a disconnected port object"===(null==e?void 0:e.message))return"error_helper.lost_dapp_connection";const k=String(null!=(o=null==(n=null==(a=null==e?void 0:e.data)?void 0:a.originalError)?void 0:n.statusCode)?o:null==e?void 0:e.code),A=f(null==(c=null==(i=null==e?void 0:e.data)?void 0:i.originalError)?void 0:c.name)?String(null==(v=null==(d=null==e?void 0:e.data)?void 0:d.originalError)?void 0:v.name):f(null==(x=null==(w=null==e?void 0:e.data)?void 0:w.originalError)?void 0:x.code)?String(null==(P=null==(C=null==e?void 0:e.data)?void 0:C.originalError)?void 0:P.code):f(null==e?void 0:e.name)?String(null==e?void 0:e.statusCode):k;if(b.some((e=>k.includes(e)))&&"LEDGER"===r)return l.ZP.t("app:error_helper.ledger_errors.-32603",{chain:t});if(A===y)return m(e);if(!t)return p.includes(A)?u[A]:m(e);switch(t){case s.J.Bitcoin:case s.J.BitcoinCash:case s.J.Litecoin:case s.J.Dogecoin:return(null==(j=null==(F=null==(T=null==(S=null==e?void 0:e.data)?void 0:S.originalError)?void 0:T.response)?void 0:F.data)?void 0:j.includes("dust"))?u.DUST:p.includes(A)?u[String(A)]:m(e);case s.J.Evm:case s.J.Terra:case s.J.Solana:case s.J.Binance:case s.J.Thorchain:case s.J.Cosmos:case s.J.Near:default:return p.includes(A)?u[String(A)]:"LEDGER"===r&&g.includes(A)?(e=>{var t,r,a,n,s;const o=null!=(s=null!=(n=null!=(a=null==(r=null==(t=null==e?void 0:e.data)?void 0:t.originalError)?void 0:r.statusCode)?a:null==e?void 0:e.code)?n:e.statusCode)?s:null==e?void 0:e.name;return h[o]?h[o]:"error_helper.ledger_errors.error_while_connecting_ledger"})(e):m(e)}}},427504:(e,t,r)=>{r.d(t,{Cb:()=>d,R6:()=>p,zr:()=>u});var a=r(256371),n=r(680528),s=r(691438),o=r(845826),i=r(834392),l=r(339729),c=r(299246);function d(e,t=!1){return e.isNaN()?"0":`${t&&(0,o.zS)(e)?"~":""}${(0,c.pF)(e,i.DF,{trimTrailingZero:!0})}`}function u(e,t,r=!1){return e.isNaN()?`0 ${t}`:`${r&&(0,o.zS)(e)?"~":""}${(0,c.pF)(e,i.DF,{trimTrailingZero:!0})} ${t}`}function p(e,t,r,o){const i=e.getType();switch(i){case s.J.Binance:return String(t);case s.J.Bitcoin:case s.J.BitcoinCash:case s.J.Litecoin:case s.J.Dogecoin:return r===l.kV.symbol?(0,a.formatUnits)(String(t),e.getConfig().decimals):(0,a.formatUnits)(String(t),8);case s.J.Thorchain:return r===l.kV.symbol?(0,a.formatUnits)(String(t),e.getConfig().decimals):(0,a.formatUnits)(String(t),o);case s.J.Terra:case s.J.Near:case s.J.Solana:return(0,a.formatUnits)(String(t),null!=o?o:n.KV.A6);case s.J.Tron:return String(t);default:if(i===s.J.Evm)try{return e.getConfig().tokenSymbol===r?String(t):(0,a.formatUnits)(String(t),o)}catch(e){return"0"}if(i===s.J.Cosmos)return(0,a.formatUnits)(String(t),null!=o?o:n.KV.A6);throw`getAssetAmount not handled for ${e.getType()}`}}},522933:(e,t,r)=>{r.d(t,{Q4:()=>i,eP:()=>s,fL:()=>n,fm:()=>l,fp:()=>o});var a=r(739989);const n=(e,t=5,r=3)=>e?e.length<=t+r?e:`${e.substr(0,t)}...${e.substr(e.length-r,r)}`:(a.Z.debug({msg:"strHShortAddress: argument passed",org:e}),""),s=e=>{var t;return(null==(t=null==e?void 0:e.charAt(0))?void 0:t.toUpperCase())+(null==e?void 0:e.slice(1))},o=e=>!e||/^\s*$/.test(e),i=(e,t)=>{for(const r in e)if("string"==typeof e[r]){for(const a of t)if(e[r].includes(a))return!0}else if("object"==typeof e[r]&&null!==e[r]&&i(e[r],t))return!0;return!1},l=e=>{var t;return(null==(t=e.charAt(0))?void 0:t.toUpperCase())+e.slice(1)}},626423:(e,t,r)=>{r.d(t,{Bw:()=>U,C6:()=>k,Hy:()=>T,J$:()=>W,NU:()=>O,Sy:()=>V,WG:()=>G,WU:()=>N,XL:()=>$,YO:()=>F,Zb:()=>K,_6:()=>B,bg:()=>E,c4:()=>D,dk:()=>q,hv:()=>M,hz:()=>j,ix:()=>Z,mY:()=>R,pr:()=>A,qN:()=>L,r0:()=>_});var a=r(698858),n=r(831352),s=r(374221),o=r(435161),i=r.n(o),l=r(556138),c=r(216558),d=r(489396),u=r(691438),p=r(222751),g=r(977710),Buffer=r(348764).Buffer,h=Object.defineProperty,m=Object.defineProperties,f=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,w=(e,t,r)=>t in e?h(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,x=(e,t)=>{for(var r in t||(t={}))b.call(t,r)&&w(e,r,t[r]);if(y)for(var r of y(t))v.call(t,r)&&w(e,r,t[r]);return e},C=(e,t)=>m(e,f(t));const P="https://imaginary.xdefi.services",S=`${P}/insecure/resize:fit:500:500:0/gravity:ce/plain/`;function T(e,t){const r=`data:text/json;charset=utf-8,${encodeURIComponent(JSON.stringify(e))}`,a=document.createElement("a");a.setAttribute("href",r),a.setAttribute("download",`${t}.json`),document.body.appendChild(a),a.click(),a.remove()}function F(e){let t="";const r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";for(let a=0;a<e;a++)t+=r.charAt(Math.floor(62*Math.random()));return t}const j=e=>{let t=0;return i()(e,(({label:e})=>{const r=e.match(/Account (\d+)$/);if(r){const e=Number(r[1]);t=Math.max(t,e)}})),t+1},k=e=>{const t=[];return i()(Object.keys(e),(r=>{const a=e[r];if(a.walletInfo.type===l.WalletType.Keystore){0===a.walletInfo.data.walletIndex&&t.push(a)}else if((0,c.C)(a.walletInfo.type)){0===a.walletInfo.data.walletIndex&&t.push(a)}})),t.length+1},A=e=>e.split(".").pop(),O=e=>{const t=A(e);switch(null==t?void 0:t.toLowerCase()){case"m4v":case"avi":case"mpg":case"mp4":return!0}return!1};function $(e){switch(e){case n.g5.Mainnet:return a.Zc.Mainnet;case n.g5.Testnet:return a.Zc.Testnet;default:throw"Network not supported"}}const I=(e,t)=>Object.keys(e).filter((r=>e[r]===t));const N=e=>e&&JSON.parse(JSON.stringify(e)),D=e=>{const t=t=>Object.values(e.chainData[t].tokens).reduce(((e,t)=>(e[t.id]=t,e)),{}),r=Object.keys(e.chainData).reduce(((r,a)=>(e.chainData[a]&&(r[a]=C(x({},e.chainData[a]),{tokens:t(a)})),r)),{});return C(x({},e),{chainData:r})},Z=e=>{let t=e;return/^https?:\/\//i.test(t)||(t=`http://${t}`),t},_=e=>e.replace(/^https?:\/\//,""),E=e=>O(e)?e:e.startsWith("http")?e.startsWith(P)?e:`${S}${encodeURIComponent(e)}`:e,B=e=>new s.Z(e,{threshold:.2,shouldSort:!0,keys:[{name:"token.symbol",weight:.7},{name:"token.name",weight:.3},{name:"token.address",weight:.3}]}),L=e=>(0,c.C)(e.walletInfo.type),G=(e,t)=>{let r;return I(M,e.getId()).map((e=>isNaN(Number(e))?e:Number(e)))&&e.support(u.B.Nft)&&(r=t.length||0),r},M={1:n.yp.Ethereum,10:n.yp.Optimism,25:n.yp.CronosEvm,56:n.yp.BinanceSmartChain,100:n.yp.Gnosis,137:n.yp.Polygon,250:n.yp.Fantom,7700:n.yp.CantoEvm,8217:n.yp.Klaytn,42161:n.yp.Arbitrum,43114:n.yp.Avalanche,1313161554:n.yp.Aurora,"cosmoshub-4":n.yp.Cosmoshub,"akashnet-2":n.yp.Akash,"axelar-dojo-1":n.yp.Axelar,"crescent-1":n.yp.Crescent,"crypto-org-chain-mainnet-1":n.yp.Cronos,"juno-1":n.yp.Juno,"kava_2222-10":n.yp.Kava,"kaiyo-1":n.yp.Kujira,"mars-1":n.yp.Mars,"osmosis-1":n.yp.Osmosis,"stargaze-1":n.yp.Stargaze,"atlantic-2":n.yp.SeiTestnet,"stride-1":n.yp.Stride,"bitcoin-mainnet":n.yp.Bitcoin,"bitcoin-testnet":n.yp.BitcoinTestnet,litecoin:n.yp.Litecoin,dogecoin:n.yp.Dogecoin,bitcoincash:n.yp.BitcoinCash,binance:n.yp.Binance,thorchain:n.yp.Thorchain,"mainnet-beta":n.yp.Solana,"phoenix-1":n.yp.Terra,near:n.yp.Near,tron:n.yp.Tron,mayachain:n.yp.Mayachain},R=C(x({},M),{7e3:"zetachain"}),U=e=>{const t=I(M,e);if(0===t.length)throw`ChainId ${e} is not supported`;return t[0]},K=(e,t)=>{const r=g.tP[e];d.Z.config.setBech32Prefix({accAddr:r,accPub:r+"pub",valAddr:r+"valoper",valPub:r+"valoperpub",consAddr:r+"valcons",consPub:r+"valconspub"});const a=new d.Z.proto.cosmos.crypto.secp256k1.PubKey({key:Uint8Array.from(Buffer.from(t,"hex"))});return d.Z.AccAddress.fromPublicKey(a).toAccAddress().toString()};function V(e,t=14,r=6){return e.length>t?`${e.substring(0,r+2)}...${e.substring(e.length-r)}`:e}const W=e=>e.reduce(((e,t)=>(e[t]=!0,e)),{}),J=(e,t)=>{let r=e;for(;r.length<t;)r=`0${r}`;return r},q=({v:e,r:t,s:r})=>{const a=(0,p.fromSigned)(t),n=(0,p.fromSigned)(r),s=J((0,p.toUnsigned)(a).toString("hex"),64),o=J((0,p.toUnsigned)(n).toString("hex"),64),i=(0,p.stripHexPrefix)((0,p.intToHex)(e));return(0,p.addHexPrefix)(s.concat(o,i)).toString()}},281672:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Iq:()=>g,JB:()=>h,Ni:()=>c,UW:()=>l,WG:()=>o.Z,fU:()=>u,i_:()=>d,nl:()=>p,z$:()=>s.Z});r(667294);var n=r(519416),s=r(311428),o=r(893600),i=e([o]);function l(){return n.browser.extension.getBackgroundPage().masterController}function c(){const{masterKeys:e}=l();return e}function d(){const{wallets:e}=l();return e}function u(){const{chains:e}=l();return e}function p(){const{dapps:e}=l();return e}function g(){const{dappsProviders:e}=l();return e}function h(){const{assets:e}=l();return e}o=(i.then?(await i)():i)[0];a()}catch(m){a(m)}}))},771341:(e,t,r)=>{r.d(t,{$Y:()=>te.Z,$u:()=>A.Z,Aq:()=>Z.Z,C8:()=>J.Z,Cg:()=>E.Z,DV:()=>F.Z,E4:()=>$.Z,FE:()=>V.Z,FF:()=>ge.Z,Hv:()=>me.Z,I1:()=>de.Z,IG:()=>O.Z,JE:()=>H.Z,JP:()=>C.Z,KL:()=>b.Z,Kq:()=>se.Z,Lo:()=>z.Z,MC:()=>re.Z,Oh:()=>Y.Z,RN:()=>ce.Z,T0:()=>D.Z,TI:()=>v.Z,Tw:()=>k.Z,UB:()=>ae.Z,Um:()=>he.Z,V_:()=>ie.Z,Ve:()=>a.Z,W1:()=>T.Z,Wd:()=>s.Z,Wz:()=>oe.Z,XH:()=>f.Z,Ye:()=>L.Z,Zj:()=>n.Z,_$:()=>ee.Z,_8:()=>h.Z,_Q:()=>u.Z,_V:()=>I.Z,_g:()=>W.Z,_m:()=>j.Z,aM:()=>p.Z,aN:()=>U.Z,dY:()=>d.Z,dt:()=>g.Z,fw:()=>le.Z,hO:()=>ue.Z,hS:()=>ne.Z,k0:()=>i.Z,kF:()=>c.Z,kf:()=>X.Z,nQ:()=>S.Z,o:()=>l.Z,o0:()=>P.Z,pN:()=>B.Z,pO:()=>M.Z,pu:()=>R.Z,qQ:()=>m.Z,qm:()=>_.Z,sz:()=>y.Z,tE:()=>x.Z,vU:()=>Q.Z,w0:()=>pe.Z,wM:()=>N.Z,wz:()=>q.Z,xC:()=>K.Z,xP:()=>w.Z,xk:()=>o.Z,zM:()=>G.Z});var a=r(594508),n=r(818360),s=r(32447),o=(r(660296),r(376874)),i=(r(515780),r(952068),r(253756),r(265192)),l=(r(236354),r(799719)),c=(r(12127),r(213671),r(680105)),d=r(592717),u=r(677914),p=r(443455),g=r(152903),h=(r(639381),r(153780)),m=(r(318500),r(684546)),f=(r(150086),r(295943),r(26190),r(139874)),y=(r(903493),r(424372),r(579497)),b=(r(707560),r(77411)),v=r(327665),w=(r(927547),r(175075)),x=(r(144962),r(741690)),C=r(63880),P=r(460868),S=r(143831),T=r(168021),F=(r(903983),r(896102),r(939869),r(273798),r(13268)),j=r(38707),k=(r(960057),r(241335),r(489733),r(57802),r(596724)),A=r(979433),O=(r(42288),r(782415)),$=(r(638946),r(768892),r(540186)),I=(r(561639),r(100206),r(658242),r(855437),r(28677),r(667342)),N=(r(379172),r(731188),r(120360),r(888819),r(389460)),D=r(38760),Z=(r(825655),r(802177),r(206242),r(807784),r(388557)),_=r(668607),E=(r(857963),r(237942)),B=(r(375037),r(8810),r(119933)),L=(r(556364),r(317632)),G=(r(606232),r(739381),r(966520),r(738152),r(753420)),M=(r(832509),r(922751),r(576843),r(537426)),R=(r(518190),r(669185)),U=r(575704),K=r(293677),V=(r(249162),r(182218),r(844265),r(131410),r(386205)),W=r(591272),J=(r(533725),r(386663),r(360997)),q=r(876524),z=(r(255078),r(969355)),H=(r(475940),r(642357)),X=(r(388899),r(238555),r(531627),r(158947),r(102152),r(511569),r(633324)),Q=(r(870150),r(795992),r(381877)),Y=(r(140901),r(828244),r(617916)),ee=r(360990),te=r(85373),re=r(997792),ae=r(616618),ne=r(513376),se=r(431399),oe=r(672833),ie=r(365370),le=r(773466),ce=r(205093),de=r(259390),ue=r(727691),pe=(r(454656),r(16051),r(477843),r(80638),r(14752),r(881473)),ge=r(881164),he=r(629796),me=r(338391);r(842133)},431188:(e,t,r)=>{r.d(t,{BM:()=>a.BM,KM:()=>a.KM,gZ:()=>n.g,kq:()=>a.kq,zx:()=>a.zx});var a=r(976829),n=r(889159)},442977:(e,t,r)=>{r.d(t,{U:()=>a.Z,j:()=>n.j});var a=r(725317),n=r(638531)},246858:(e,t,r)=>{r.d(t,{n:()=>a});var a=(e=>(e.Up="Up",e.Down="Down",e.Off="Off",e))(a||{})},308787:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Avatar:()=>I.qE,AvatarButton:()=>f.Z,BackButton:()=>h.Z,BaseButton:()=>$.zx,BorderedChainIcon:()=>O.Z,CanvasText:()=>E.m,Card:()=>n.Z,CircularProgress:()=>T.Z,ClipboardButton:()=>y.Z,ConfirmLedger:()=>o.Z,DashLine:()=>d.Z,Dialog:()=>N.Dialog,FiatAssetPair:()=>s.Z,FlexBox:()=>M.h,FloatingDialog:()=>N.FloatingDialog,HoverButton:()=>m.Z,IconButton:()=>g.Z,IconButtonVariant:()=>$.gZ,InputField:()=>D.U,LinearProgress:()=>F.Z,Link:()=>u.Z,Menu:()=>P.ZP,MultiSelectCheckbox:()=>_.t,Portal:()=>S.Z,PrimaryButton:()=>$.KM,QRCode:()=>Z.s,ScrollBars:()=>j.Z,ScrollingContainer:()=>k.Z,SearchInput:()=>b.Z,SecondaryButton:()=>$.kq,SegmentedPicker:()=>A.Z,SingleSelectCheckbox:()=>_.m,SmallInputField:()=>D.j,SortingRowLabel:()=>C.Z,Switch:()=>i.Z,Tab:()=>x.Z,Tabs:()=>w.Z,TextArea:()=>v.Z,Tooltip:()=>l.ZP,TopSheet:()=>G.V,TxData:()=>p.Z,WalletIcon:()=>R.o,WarningButton:()=>$.BM,useDelayClose:()=>L.n});r(234331);var n=r(680409),s=r(44687),o=(r(15145),r(802615)),i=(r(712354),r(414928)),l=(r(91933),r(356308)),c=r(856310),d=(r(743773),r(934834)),u=r(102964),p=r(348329),g=r(772794),h=r(840592),m=(r(754937),r(946969)),f=r(604275),y=r(220138),b=r(507263),v=r(670585),w=r(23985),x=r(459251),C=r(215862),P=r(404268),S=r(302767),T=r(179145),F=r(316284),j=(r(861634),r(826705)),k=r(894900),A=r(519246),O=(r(880465),r(139610)),$=(r(789185),r(431188)),I=r(585331),N=r(123206);r.o(N,"CanvasText")&&r.d(t,{CanvasText:function(){return N.CanvasText}}),r.o(N,"FlexBox")&&r.d(t,{FlexBox:function(){return N.FlexBox}}),r.o(N,"InputField")&&r.d(t,{InputField:function(){return N.InputField}}),r.o(N,"MultiSelectCheckbox")&&r.d(t,{MultiSelectCheckbox:function(){return N.MultiSelectCheckbox}}),r.o(N,"QRCode")&&r.d(t,{QRCode:function(){return N.QRCode}}),r.o(N,"SingleSelectCheckbox")&&r.d(t,{SingleSelectCheckbox:function(){return N.SingleSelectCheckbox}}),r.o(N,"SmallInputField")&&r.d(t,{SmallInputField:function(){return N.SmallInputField}}),r.o(N,"TopSheet")&&r.d(t,{TopSheet:function(){return N.TopSheet}}),r.o(N,"WalletIcon")&&r.d(t,{WalletIcon:function(){return N.WalletIcon}}),r.o(N,"useDelayClose")&&r.d(t,{useDelayClose:function(){return N.useDelayClose}});var D=r(442977),Z=r(189157),_=r(2846),E=r(525922),B=r(462906);r.o(B,"FlexBox")&&r.d(t,{FlexBox:function(){return B.FlexBox}}),r.o(B,"TopSheet")&&r.d(t,{TopSheet:function(){return B.TopSheet}}),r.o(B,"WalletIcon")&&r.d(t,{WalletIcon:function(){return B.WalletIcon}}),r.o(B,"useDelayClose")&&r.d(t,{useDelayClose:function(){return B.useDelayClose}});var L=r(459221),G=r(124358),M=r(79295),R=r(444644),U=e([c,O]);[c,O]=U.then?(await U)():U,a()}catch(e){a(e)}}))},505403:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>i});var n=r(667294),s=r(348365),o=e([s]);s=(o.then?(await o)():o)[0];const i=()=>{const e=(0,n.useContext)(s.O);if(!e)throw"useFiat must be used within a FiatProvider";return e};a()}catch(e){a(e)}}))},101668:(e,t,r)=>{r.d(t,{GI:()=>n,qY:()=>a});const a={name:"USD",symbol:"$",title:"US Dollar",scale:1};var n=(e=>(e.Node="node",e.Rpc="rpc",e))(n||{})},556138:(e,t,r)=>{r.d(t,{NetworkSettingsKeys:()=>m.h,NodeUrlKey:()=>c.GI,PayVariants:()=>u.B,StoreKeys:()=>d.S,USD:()=>c.qY,WalletType:()=>d.c});var a=r(689616);r.o(a,"NetworkSettingsKeys")&&r.d(t,{NetworkSettingsKeys:function(){return a.NetworkSettingsKeys}}),r.o(a,"NodeUrlKey")&&r.d(t,{NodeUrlKey:function(){return a.NodeUrlKey}}),r.o(a,"PayVariants")&&r.d(t,{PayVariants:function(){return a.PayVariants}}),r.o(a,"StoreKeys")&&r.d(t,{StoreKeys:function(){return a.StoreKeys}}),r.o(a,"USD")&&r.d(t,{USD:function(){return a.USD}}),r.o(a,"WalletType")&&r.d(t,{WalletType:function(){return a.WalletType}});var n=r(25365);r.o(n,"NetworkSettingsKeys")&&r.d(t,{NetworkSettingsKeys:function(){return n.NetworkSettingsKeys}}),r.o(n,"NodeUrlKey")&&r.d(t,{NodeUrlKey:function(){return n.NodeUrlKey}}),r.o(n,"PayVariants")&&r.d(t,{PayVariants:function(){return n.PayVariants}}),r.o(n,"StoreKeys")&&r.d(t,{StoreKeys:function(){return n.StoreKeys}}),r.o(n,"USD")&&r.d(t,{USD:function(){return n.USD}}),r.o(n,"WalletType")&&r.d(t,{WalletType:function(){return n.WalletType}});var s=r(586194);r.o(s,"NetworkSettingsKeys")&&r.d(t,{NetworkSettingsKeys:function(){return s.NetworkSettingsKeys}}),r.o(s,"NodeUrlKey")&&r.d(t,{NodeUrlKey:function(){return s.NodeUrlKey}}),r.o(s,"PayVariants")&&r.d(t,{PayVariants:function(){return s.PayVariants}}),r.o(s,"StoreKeys")&&r.d(t,{StoreKeys:function(){return s.StoreKeys}}),r.o(s,"USD")&&r.d(t,{USD:function(){return s.USD}}),r.o(s,"WalletType")&&r.d(t,{WalletType:function(){return s.WalletType}});var o=r(790970);r.o(o,"NetworkSettingsKeys")&&r.d(t,{NetworkSettingsKeys:function(){return o.NetworkSettingsKeys}}),r.o(o,"NodeUrlKey")&&r.d(t,{NodeUrlKey:function(){return o.NodeUrlKey}}),r.o(o,"PayVariants")&&r.d(t,{PayVariants:function(){return o.PayVariants}}),r.o(o,"StoreKeys")&&r.d(t,{StoreKeys:function(){return o.StoreKeys}}),r.o(o,"USD")&&r.d(t,{USD:function(){return o.USD}}),r.o(o,"WalletType")&&r.d(t,{WalletType:function(){return o.WalletType}});var i=r(704895);r.o(i,"NetworkSettingsKeys")&&r.d(t,{NetworkSettingsKeys:function(){return i.NetworkSettingsKeys}}),r.o(i,"NodeUrlKey")&&r.d(t,{NodeUrlKey:function(){return i.NodeUrlKey}}),r.o(i,"PayVariants")&&r.d(t,{PayVariants:function(){return i.PayVariants}}),r.o(i,"StoreKeys")&&r.d(t,{StoreKeys:function(){return i.StoreKeys}}),r.o(i,"USD")&&r.d(t,{USD:function(){return i.USD}}),r.o(i,"WalletType")&&r.d(t,{WalletType:function(){return i.WalletType}});var l=r(740336);r.o(l,"NetworkSettingsKeys")&&r.d(t,{NetworkSettingsKeys:function(){return l.NetworkSettingsKeys}}),r.o(l,"NodeUrlKey")&&r.d(t,{NodeUrlKey:function(){return l.NodeUrlKey}}),r.o(l,"PayVariants")&&r.d(t,{PayVariants:function(){return l.PayVariants}}),r.o(l,"StoreKeys")&&r.d(t,{StoreKeys:function(){return l.StoreKeys}}),r.o(l,"USD")&&r.d(t,{USD:function(){return l.USD}}),r.o(l,"WalletType")&&r.d(t,{WalletType:function(){return l.WalletType}});var c=r(101668),d=r(693246),u=r(315221),p=r(573232);r.o(p,"NetworkSettingsKeys")&&r.d(t,{NetworkSettingsKeys:function(){return p.NetworkSettingsKeys}});var g=r(217285);r.o(g,"NetworkSettingsKeys")&&r.d(t,{NetworkSettingsKeys:function(){return g.NetworkSettingsKeys}});var h=r(136354);r.o(h,"NetworkSettingsKeys")&&r.d(t,{NetworkSettingsKeys:function(){return h.NetworkSettingsKeys}});var m=r(941963)},111897:(e,t,r)=>{r.d(t,{$B:()=>o,H:()=>c,KE:()=>i,Kw:()=>s});r(517563);var a=r(693246),n=r(691438);const s=(e,t)=>{const r=e.getConfig().network.address;return r?`${r}${t}`:null},o=e=>{switch(e){case a.c.Keystore:return"KEYSTORE";case a.c.Ledger:return"LEDGER";case a.c.PkKeystore:return"PKKEYSTORE";case a.c.Trezor:return"TREZOR"}},i=(e,t)=>{var r,a,n;const s=null==t?void 0:t.toLowerCase();return(null==(r=e.getConfig().shortName)?void 0:r.toLowerCase().includes(s))||(null==(a=e.getConfig().tokenSymbol)?void 0:a.toLowerCase().includes(s))||(null==(n=e.getConfig().chainSymbol)?void 0:n.toLowerCase().includes(s))},l=[n.J.Bitcoin,n.J.BitcoinCash,n.J.Litecoin,n.J.Dogecoin],c=e=>l.includes(e.getConfig().type)},605930:(e,t,r)=>{r.d(t,{Jz:()=>i,Ot:()=>u,RP:()=>c,Ug:()=>l,lA:()=>d});var a=r(847001),n=r(581354),s=r.n(n),o=r(691438);const i=e=>s().SHA256(e).toString(s().enc.Hex),l=(e,t,r="")=>{switch(t){case o.J.Bitcoin:case o.J.Litecoin:case o.J.Dogecoin:return e-a.Z.get("BITCOIN_MAX_TRANSACTION_BUFFER");case o.J.BitcoinCash:return e-a.Z.get("BITCOINCASH_MAX_TRANSACTION_BUFFER");case o.J.Terra:return e-a.Z.get("TERRA_MAX_TRANSACTION_BUFFER");case o.J.Solana:return e-a.Z.get("SOLANA_MAX_TRANSACTION_BUFFER");case o.J.Evm:return"42161"===r?e-a.Z.get("ARB_MAX_TRANSACTION_BUFFER"):e-a.Z.get("BITCOIN_MAX_TRANSACTION_BUFFER");default:return e}},c=(e,t)=>{if(e===t)return!0;const r=e.split("."),a=t.split("."),n=Math.min(r.length,a.length);for(let e=0;e<n;e++){if(parseInt(r[e])>parseInt(a[e]))return!0;if(parseInt(r[e])<parseInt(a[e]))return!1}return r.length>a.length||!(r.length<a.length)},d=(e,t)=>(null==e?void 0:e.symbol.toUpperCase())===(null==t?void 0:t.symbol.toUpperCase())&&(null==e?void 0:e.ticker.toUpperCase())===(null==t?void 0:t.ticker.toUpperCase())&&(null==e?void 0:e.chain.toUpperCase())===(null==t?void 0:t.chain.toUpperCase()),u=(e,t)=>{if(!t)throw"Network ID is required";return`${e}_${t}`}},218006:(e,t,r)=>{r.d(t,{O1:()=>o,Qp:()=>s,Zp:()=>i,dh:()=>a,kw:()=>l,lk:()=>n});r(496486);const a=(e,t)=>{if(isNaN(Number(e)))return!1;const r=e.toString().split(".");return!(t&&r.length>1&&r[1].length>t)},n=e=>null==e?void 0:e.toLowerCase().split(" ").reduce(((e,t)=>{var r;return e+((null==(r=t[0])?void 0:r.toUpperCase())+t.slice(1))})),s=e=>e.reduce(((e,t)=>e+t.toString(16).padStart(2,"0")),""),o=e=>/^[A-HJ-NP-Za-km-z1-9]*$/.test(e),i=e=>{try{return!!window.atob(e)}catch(e){return!1}},l=e=>e.replace(/[']/g,"")},691448:(e,t,r)=>{e.exports=r.p+"1b9f300bedf5ca595d2e.png"},965735:(e,t,r)=>{e.exports=r.p+"91cf7d04b352f3092790.png"},290847:(e,t,r)=>{e.exports=r.p+"189754df38c341b6be48.png"},772774:(e,t,r)=>{e.exports=r.p+"94cb9136f69717efc930.png"}},d={};function u(e){var t=d[e];if(void 0!==t)return t.exports;var r=d[e]={id:e,loaded:!1,exports:{}};return c[e].call(r.exports,r,r.exports,u),r.loaded=!0,r.exports}u.m=c,u.amdO={},e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",r="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",a=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},u.a=(n,s,o)=>{var i;o&&((i=[]).d=-1);var l,c,d,u=new Set,p=n.exports,g=new Promise(((e,t)=>{d=t,c=e}));g[t]=p,g[e]=e=>(i&&e(i),u.forEach(e),g.catch((e=>{}))),n.exports=g,s((n=>{var s;l=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var s=[];s.d=0,n.then((e=>{o[t]=e,a(s)}),(e=>{o[r]=e,a(s)}));var o={};return o[e]=e=>e(s),o}}var i={};return i[e]=e=>{},i[t]=n,i})))(n);var o=()=>l.map((e=>{if(e[r])throw e[r];return e[t]})),c=new Promise((t=>{(s=()=>t(o)).r=0;var r=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(s.r++,e.push(s)));l.map((t=>t[e](r)))}));return s.r?c:o()}),(e=>(e?d(g[r]=e):c(p),a(i)))),i&&i.d<0&&(i.d=0)},n=[],u.O=(e,t,r,a)=>{if(!t){var s=1/0;for(c=0;c<n.length;c++){for(var[t,r,a]=n[c],o=!0,i=0;i<t.length;i++)(!1&a||s>=a)&&Object.keys(u.O).every((e=>u.O[e](t[i])))?t.splice(i--,1):(o=!1,a<s&&(s=a));if(o){n.splice(c--,1);var l=r();void 0!==l&&(e=l)}}return e}a=a||0;for(var c=n.length;c>0&&n[c-1][2]>a;c--)n[c]=n[c-1];n[c]=[t,r,a]},u.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return u.d(t,{a:t}),t},o=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,u.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var r=Object.create(null);u.r(r);var a={};s=s||[null,o({}),o([]),o(o)];for(var n=2&t&&e;"object"==typeof n&&!~s.indexOf(n);n=o(n))Object.getOwnPropertyNames(n).forEach((t=>a[t]=()=>e[t]));return a.default=()=>e,u.d(r,a),r},u.d=(e,t)=>{for(var r in t)u.o(t,r)&&!u.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},u.f={},u.e=e=>Promise.all(Object.keys(u.f).reduce(((t,r)=>(u.f[r](e,t),t)),[])),u.u=e=>"js/"+({3096:"queryString",4604:"tsub-middleware",7493:"schemaFilter",8119:"auto-track",8150:"legacyVideos",9214:"remoteMiddleware",9464:"ajs-destination"}[e]||e)+".bundle.js",u.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),u.hmd=e=>((e=Object.create(e)).children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:()=>{throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e),u.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i={},l="xdefi-extension:",u.l=(e,t,r,a)=>{if(i[e])i[e].push(t);else{var n,s;if(void 0!==r)for(var o=document.getElementsByTagName("script"),c=0;c<o.length;c++){var d=o[c];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==l+r){n=d;break}}n||(s=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,u.nc&&n.setAttribute("nonce",u.nc),n.setAttribute("data-webpack",l+r),n.src=e),i[e]=[t];var p=(t,r)=>{n.onerror=n.onload=null,clearTimeout(g);var a=i[e];if(delete i[e],n.parentNode&&n.parentNode.removeChild(n),a&&a.forEach((e=>e(r))),t)return t(r)},g=setTimeout(p.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=p.bind(null,n.onerror),n.onload=p.bind(null,n.onload),s&&document.head.appendChild(n)}},u.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),u.v=(e,t,r,a)=>{var n=fetch(u.p+""+r+".module.wasm");return"function"==typeof WebAssembly.instantiateStreaming?WebAssembly.instantiateStreaming(n,a).then((t=>Object.assign(e,t.instance.exports))):n.then((e=>e.arrayBuffer())).then((e=>WebAssembly.instantiate(e,a))).then((t=>Object.assign(e,t.instance.exports)))},u.p="",(()=>{var e={6098:0,5274:0};u.f.j=(t,r)=>{var a=u.o(e,t)?e[t]:void 0;if(0!==a)if(a)r.push(a[2]);else{var n=new Promise(((r,n)=>a=e[t]=[r,n]));r.push(a[2]=n);var s=u.p+u.u(t),o=new Error;u.l(s,(r=>{if(u.o(e,t)&&(0!==(a=e[t])&&(e[t]=void 0),a)){var n=r&&("load"===r.type?"missing":r.type),s=r&&r.target&&r.target.src;o.message="Loading chunk "+t+" failed.\n("+n+": "+s+")",o.name="ChunkLoadError",o.type=n,o.request=s,a[1](o)}}),"chunk-"+t,t)}},u.O.j=t=>0===e[t];var t=(t,r)=>{var a,n,[s,o,i]=r,l=0;if(s.some((t=>0!==e[t]))){for(a in o)u.o(o,a)&&(u.m[a]=o[a]);if(i)var c=i(u)}for(t&&t(r);l<s.length;l++)n=s[l],u.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return u.O(c)},r=self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})();var p=u.O(void 0,[2996,2818,729,6087,9938,9664,9711,1816,998,2699,1282,976,9011,9099,9149,8601,9142,9971,6773,9521,1892,929,9220],(()=>u(634376)));p=u.O(p)})();