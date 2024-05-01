!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="aae752ad-a0cf-44ff-be34-aaeaa6bcaae8",e._sentryDebugIdIdentifier="sentry-dbid-aae752ad-a0cf-44ff-be34-aaeaa6bcaae8")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[550],{982107:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{n:()=>g});var s=r(785893),n=r(667294),o=r(818117),i=r(308787),l=r(882935),c=e([i,l]);[i,l]=c.then?(await c)():c;const d=({loading:e})=>e?(0,s.jsx)(u,{children:(0,s.jsx)(l.Z,{})}):null,u=(0,o.ZP)(i.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 9999;
`,g=(0,n.memo)(d);a()}catch(e){a(e)}}))},347227:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{F:()=>d});var s=r(785893),n=r(667294),o=r(385167),i=r(745808),l=r(582242),c=e([o]);o=(c.then?(await c)():c)[0];const d=({children:e})=>{const t=(0,n.useRef)({}),[r,a]=(0,n.useState)(!1),c=(0,n.useCallback)((()=>{a(!0)}),[]),d=(0,n.useCallback)((()=>{a(!1)}),[]);return t.current={show:c,hide:d},(0,s.jsxs)(i.Z.Provider,{value:t,children:[e,(0,s.jsx)(o.n,{loading:r}),(0,s.jsx)(l.Z,{})]})};a()}catch(e){a(e)}}))},312259:(e,t,r)=>{r.d(t,{AV:()=>s});var a=r(265142),s=(e=>(e.CRYPTOCURRENCY="CRYPTOCURRENCY",e.LP_TOKEN="LP_TOKEN",e.TOKEN="TOKEN",e))(s||{});const n=a.Ps`
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
`,o=a.Ps`
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
`,i=a.Ps`
  fragment Amount on AssetAmountType {
    __typename
    amount
    scalingFactor
  }
`,l=(a.Ps`
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
  ${i}
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
  ${i}
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
  ${i}
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
`),c=a.Ps`
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
`,d=(a.Ps`
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
  ${i}
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
  ${c}
  ${l}
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
  ${c}
`,a.Ps`
  query BtcNFTS($bitcoinAddress: String!) {
    bitcoin {
      legacyNFTs(address: $bitcoinAddress) {
        ...LegacyNftData
      }
    }
  }
  ${c}
`,a.Ps`
  query JunoNFTS($junoAddress: String!) {
    juno {
      nfts(address: $junoAddress) {
        ...NftDataV2
      }
    }
  }
  ${l}
`,a.Ps`
  query StargazeNFTS($stargazeAddress: String!) {
    stargaze {
      nfts(address: $stargazeAddress) {
        ...NftDataV2
      }
    }
  }
  ${l}
`,a.Ps`
  query SolanaNFTS($solanaAddress: String!) {
    solana {
      legacyNFTs(address: $solanaAddress) {
        ...LegacyNftData
      }
    }
  }
  ${c}
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
  ${o}
`,a.Ps`
  query AssetDetailsLpTokens($page: ConnectionArgs!, $filter: TokenFilter) {
    assets {
      lpTokens(page: $page, filter: $filter) {
        ...AssetDetailsFragment
      }
    }
  }
  ${n}
`,a.Ps`
  query AssetDetailsTokens($page: ConnectionArgs!, $filter: TokenFilter) {
    assets {
      tokens(page: $page, filter: $filter) {
        ...AssetDetailsFragment
      }
    }
  }
  ${n}
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
  ${d}
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
`},557938:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>T});var s=r(785893),n=r(230811),o=r(646284),i=r(308787),l=r(876777),c=r(818117),d=r(729154),u=r(593159),g=e([o,i,u]);[o,i,u]=g.then?(await g)():g;var p=Object.defineProperty,h=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,f=(e,t,r)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,b=(e,t)=>{for(var r in t||(t={}))m.call(t,r)&&f(e,r,t[r]);if(h)for(var r of h(t))y.call(t,r)&&f(e,r,t[r]);return e};const v=(0,c.ZP)(i.InputField)`
  > div:nth-child(2) {
    ${({$asDappPage:e})=>e&&"border: 1px solid white;"}
  }
`,x=c.ZP.div`
  display: flex;
  flex-direction: column;
  padding: 10px 20px;
  flex: 1;
  margin-top: 17px;
  margin-bottom: 10px;
`,w=(0,c.ZP)(i.FlexBox)`
  margin-bottom: 20px;

  ${({$asDappPage:e})=>e&&`   border-radius: 8px;\n        border: 1px solid ${l.wL.white};`}
  li {
    align-items: flex-start !important;
    height: 50px;

    div:first-child {
      ${({$asDappPage:e})=>e&&`background-color: ${l.wL.mineShaft};`}
      &:hover {
        background-color: ${({theme:{palette:e}})=>e.container.hover};
      }
    }
  }
`,P=c.ZP.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  ${({$asDappPage:e})=>e&&"flex-basis: 350px;"}
  & div > div {
    & > div {
      & > input {
        margin-bottom: 0;
      }
    }
  }
`,C=(0,c.ZP)(i.BaseButton)`
  margin-top: auto !important;
`,F=c.ZP.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1300;
  background: ${"rgba(8, 8, 8, 0.5)"};
  backdrop-filter: blur(4px);
`,T=({asDappPage:e=!1})=>{var t,r,a;const{submitHandler:l,setSelectedChain:c,selectedChain:g,availableChains:p,register:h,handleSubmit:m,errors:y,loading:f}=(0,u.Z)(e),{t:T}=(0,n.$G)("app");return(0,s.jsxs)(s.Fragment,{children:[f&&(0,s.jsx)(F,{children:(0,s.jsx)(o.Loader,{})}),(0,s.jsx)(x,{children:(0,s.jsxs)(P,{$asDappPage:e,onSubmit:m(l),children:[(0,s.jsxs)(i.FlexBox,{gridGap:8,children:[(0,s.jsx)(w,{$asDappPage:e,children:(0,s.jsx)(o.FullWidthSelectChain,{onSelect:e=>c(e),value:g,chains:p,includeAll:!1})}),(0,s.jsx)(v,b({$asDappPage:e,type:"text",label:T("custom_token.address_label"),placeholder:T("custom_token.address_placeholder"),errorMsg:null==(t=y.address)?void 0:t.message,dataTestId:"addressFld"},h("address"))),(0,s.jsx)(v,b({$asDappPage:e,type:"text",label:T("custom_token.symbol_label"),dataTestId:"symbolFld",errorMsg:null==(r=y.symbol)?void 0:r.message,placeholder:T("custom_token.symbol_placeholder"),mt:10},h("symbol"))),(0,s.jsx)(v,b({$asDappPage:e,type:"number",label:T("custom_token.decimals_label"),errorMsg:null==(a=y.decimals)?void 0:a.message,dataTestId:"precisionFld",placeholder:T("custom_token.decimals_placeholder"),mt:10},h("decimals")))]}),(0,s.jsx)(C,{type:"submit",fullWidth:!0,dataTestId:"nextBtn",children:(0,s.jsx)(d.Z,{children:T("general.next")})})]})})]})};a()}catch(e){a(e)}}))},830162:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>y});var s=r(785893),n=r(230811),o=r(764079),i=r(308787),l=r(561277),c=r(818117),d=r(412252),u=r(109349),g=e([i,u]);[i,u]=g.then?(await g)():g;const p=(0,c.ZP)(i.FlexBox).attrs({height:412,alignItems:"center"})``,h=(0,c.ZP)(i.FlexBox)`
  row-gap: 8px;

  & button:first-child {
    margin-right: 4px;
  }
`,m=[{name:"OpenSea",url:"https://opensea.io",favIcon:o._e.toString()},{name:"Stargaze",url:"https://stargaze.zone/",favIcon:o.R9.toString()},{name:"Gamma",url:"https://gamma.io/",favIcon:o.cc.toString()},{name:"LooksRare",url:"https://looksrare.org",favIcon:o._4.toString()}],y=()=>{const{t:e}=(0,n.$G)("app");return(0,s.jsxs)(p,{children:[(0,s.jsx)(i.FlexBox,{paddingBottom:"48px",paddingTop:"32px",width:300,children:(0,s.jsx)(l.Z,{textAlign:"center",children:e("empty_nft.header")})}),(0,s.jsxs)(h,{children:[(0,s.jsx)(i.FlexBox,{ml:8,children:(0,s.jsx)(d.Z,{children:e("empty_nft.recommended_market_places")})}),(0,s.jsx)(i.FlexBox,{flexDirection:"row",justifyContent:"space-evenly",width:"100%",gridGap:8,flexWrap:"wrap",children:m.map((({name:e,url:t,favIcon:r})=>(0,s.jsx)(i.FlexBox,{width:180,height:120,children:(0,s.jsx)(u.ZP,{name:e,url:t,favIcon:r})},e)))})]})]})};a()}catch(e){a(e)}}))},914963:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>m});var s=r(785893),n=r(667294),o=r(230811),i=r(281672),l=r(308787),c=r(876777),d=r(818117),u=r(458038),g=e([i,l]);[i,l]=g.then?(await g)():g;const p=(0,d.ZP)(l.FlexBox).attrs({alignItems:"center",padding:"5px 8px",background:c.wL.black,borderRadius:"54px",marginRight:"11px",flexDirection:"row",marginLeft:"auto"})``,h=d.ZP.img`
  margin-right: 6px;
  width: 10px;
  height: 10px;
`,m=({chainId:e})=>{const{t}=(0,o.$G)("app"),r=(0,i.fU)(),a=(0,n.useMemo)((()=>r.getChainControllerById(e)),[r,e]);return(0,s.jsxs)(p,{children:[(0,s.jsx)(h,{src:a.getConfig().image,alt:a.getConfig().shortName}),(0,s.jsx)(u.Z,{children:t("lp_token_info.lp")})]})};a()}catch(e){a(e)}}))},65856:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>N,f:()=>_});var s=r(785893),n=r(691438),o=r(834392),i=r(299246),l=r(111897),c=r(25022),d=r(281672),u=r(561277),g=r(667294),p=r(230811),h=r(50533),m=r(972819),y=r(522933),f=r(518949),b=r(771341),v=r(308787),x=r(650511),w=r(818117),P=r(218006),C=r(876777),F=r(312259),T=r(914963),I=r(345873),A=e([d,m,f,v,T,I]);[d,m,f,v,T,I]=A.then?(await A)():A;const $=({asset:e,setPin:t,isSubAsset:r=!1,balance:a,fiat:w,isSendFlow:A,onSelect:$,refetchAssets:_,noRightButton:N})=>{var j;const{t:B}=(0,p.$G)(),{chainInfo:E,activeWalletId:O}=(0,h.v9)((t=>{const{activeWalletId:r,wallets:a}=t.wallets;return{chainInfo:a[r].chainData[e.chainId],activeWalletId:r}})),L=(0,g.useMemo)((()=>e.token.isPinned||e.isNativeTokenPinned),[e]),{getFormatedPriceStr:G}=(0,f.j)(),{addNotification:M}=(0,m.Z)(),R=(0,d.z$)(),V=(0,d.JB)(),[K,q]=(0,g.useState)(!1),[H,U]=(0,g.useState)(!1),W=null!=(j=null==E?void 0:E.address)?j:"",[X,J]=(0,g.useState)(!1),z=(0,d.fU)(),Y=(0,g.useMemo)((()=>G(w)),[G,w]),Q=(0,g.useMemo)((()=>a.toString().replace(".","").length<=8?a.toLocaleString(navigator.language,{minimumFractionDigits:0,maximumFractionDigits:o.DF}):(0,i.pF)(a,o.DF,{trimTrailingZero:!0})),[a]),ee=o.CF.filter((e=>e.action!==(L?o.V9.PinToTop:o.V9.UnPinFromTop))),te=(0,g.useCallback)((r=>{var a,s;const i=z.getChainControllerById(null==E?void 0:E.chainId);switch(r){case o.V9.BlockExplorer:const r=(0,l.Kw)(i,W);r?window.open(r,"_blank"):M({title:B("general.error"),type:"error",message:B("assets.errors.no_explorer",{chainId:(0,y.fm)(i.getConfig().longName),type:i.getType()===n.J.Cosmos?B("general.address"):B("general.explorer")})});break;case o.V9.PinToTop:t(!0);break;case o.V9.UnPinFromTop:t(!1);break;case o.V9.DeleteToken:1===V.getAllAssets(O).length?M({title:B("general.error"),type:"error",message:B("assets.errors.at_least_one")}):(V.removeTokenFromWallet(e.chainId,e.token.contractId,null!=(s=null==(a=e.token)?void 0:a.address)?s:"",O,e.isNativeAsset),_());break;case o.V9.CopyAddress:R.track(c.uT.CopyAddress,{method:"menu option"}),navigator.clipboard.writeText(W),M({title:B("general.copy"),message:B("assets.short_description_copy_address",{chainId:(0,y.fm)(z.getChainControllerById(e.chainId).getConfig().longName),shortAddress:(0,y.fL)(W,10,5)})})}}),[O,W,R,e.chainId,e.isNativeAsset,e.token,V,null==E?void 0:E.chainId,t,B]),re=(0,g.useMemo)((()=>ee.map((({Icon:e,label:t,action:r})=>({dataTestId:`${(0,P.lk)(t)}Option`,ref:r,action:()=>te(r),title:B(t),Icon:()=>(0,s.jsx)(e,{color:C.wL.white,width:16,height:16})})))),[ee,te,B]),ae=z.getAllChainControllers().map((e=>e.getConfig().tokenSymbol)),se=e.token.type===F.AV.LP_TOKEN,ne=(0,g.useMemo)((()=>[...ae,"USDC"]),[ae]);return(0,s.jsxs)(S,{isHovered:K&&!H,onMouseEnter:()=>q(!0),onMouseLeave:()=>q(!1),onClick:()=>null==$?void 0:$(e),isSubAsset:r,withLeftPadding:A,"data-testid":"assetRow",noSelect:!$,children:[!r&&L&&(0,s.jsx)(Z,{}),(0,s.jsxs)(v.FlexBox,{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gridGap:16,children:[(0,s.jsxs)(D,{onMouseEnter:()=>q(!1),onMouseLeave:()=>q(!0),"data-testid":"tokenIcon",children:[(0,s.jsx)(I.q,{chainId:e.chainId,icon:V.getIcon(e.chainId,e.token,e.isNativeAsset)}),(0,s.jsx)(k,{onClick:t=>{t.stopPropagation(),t.preventDefault(),X||(J(!0),setTimeout((()=>{J(!1)}),2500)),R.track(c.uT.CopyAddress,{method:"logo"}),navigator.clipboard.writeText(W),M({title:B("general.copy"),message:B("assets.short_description_copy_address",{chainId:(0,y.fm)(z.getChainControllerById(e.chainId).getConfig().longName),shortAddress:(0,y.fL)(W,10,5)})})},onceCopied:X,children:X?(0,s.jsx)(b.Ye,{color:C.wL.white}):(0,s.jsx)(b.TI,{color:C.wL.white})})]}),(0,s.jsxs)(v.FlexBox,{width:160,children:[(0,s.jsx)(u.Z,{dataTestId:ne.some((t=>{var r;return null==(r=e.token.symbol)?void 0:r.toUpperCase().includes(t)}))?"tokenCode":e.token.name?"tokenName":"tokenCode",whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis",children:ne.some((t=>{var r;return null==(r=e.token.symbol)?void 0:r.toUpperCase().includes(t)}))?e.token.symbol:e.token.name||e.token.symbol}),(0,s.jsx)(v.FlexBox,{width:160,children:(0,s.jsx)(x.Z,{dataTestId:"chainName",children:(0,y.fm)(z.getChainControllerById(e.chainId).getConfig().longName)})})]})]}),(0,s.jsx)(v.FlexBox,{flexDirection:"row",alignItems:"center",justifyContent:"flex-end",flex:1,children:se&&(0,s.jsx)(T.Z,{chainId:e.chainId})}),(0,s.jsxs)(v.FlexBox,{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gridGap:16,children:[(0,s.jsxs)(v.FlexBox,{flexDirection:"column",alignItems:"flex-end",justifyContent:"flex-end",paddingRight:A?21:0,children:[(0,s.jsx)(u.Z,{dataTestId:"assetBalance",children:Q}),(0,s.jsx)(x.Z,{dataTestId:"assetFiatBalance",whiteSpace:"nowrap",children:Y})]}),!A&&!N&&(0,s.jsx)(v.FlexBox,{onMouseEnter:()=>U(!0),onMouseLeave:()=>U(!1),children:(0,s.jsx)(v.Menu,{options:re,hideTooltip:!K,dataTestId:"tokenOptionsBtn"})})]}),A&&!N&&(0,s.jsx)(b._Q,{})]})},k=(0,w.ZP)(v.FlexBox).attrs({alignContent:"center",justifyContent:"center",alignItems:"center"})`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 8px;

  &:hover {
    background: ${C.wL.solidBlack};
    opacity: ${({onceCopied:e})=>e?1:.8};
  }

  & > * {
    display: none;
  }

  &:hover > * {
    display: flex;
  }
`,_=57,S=(0,w.ZP)(v.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between",p:8})`
  position: relative;
  width: 100%;
  cursor: pointer;
  height: ${_}px;
  border-bottom: 1px dotted ${C.wL.cynicalBlack};
  ${({isSubAsset:e})=>e&&`background-color: ${C.wL.ash};`};
  ${({isHovered:e,noSelect:t})=>e&&!t&&`background-color: ${C.wL.nightOcean};`};
  ${({withLeftPadding:e})=>e&&"padding-left: 16px;"};
  ${({noSelect:e})=>e&&w.iv`
      cursor: default;
      pointer-events: none;
    `};
`,Z=(0,w.ZP)(b.qQ).attrs({color:C.wL.white})`
  position: absolute;
  top: 2px;
  left: 2px;
`,D=w.ZP.div`
  position: relative;
`,N=$;a()}catch(e){a(e)}}))},170875:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>$,d:()=>F});var s=r(785893),n=r(834392),o=r(299246),i=r(561277),l=r(412252),c=r(667294),d=r(230811),u=r(281672),g=r(518949),p=r(771341),h=r(308787),m=r(818117),y=r(876777),f=r(831352),b=r(741797),v=r(65856),x=r(345873),w=e([u,g,h,b,v,x]);[u,g,h,b,v,x]=w.then?(await w)():w;const P=({assets:e,setPin:t,fiat:r,balance:a,isSendFlow:m,onSelect:y,refetchAssets:w,isExpanded:P,setExpanded:F,noRightButton:$})=>{const{t:k}=(0,d.$G)("app"),{getAssetFiatBalance:_,getAssetBalance:S}=(0,b.Aw)(),Z=(0,u.JB)(),D=(0,u.fU)().getChainControllerById(f.yp.Bitcoin),{getFormatedPriceStr:N}=(0,g.j)(),j=(0,b.z_)(),B=(0,c.useCallback)((()=>{F()}),[F]),E=(0,c.useMemo)((()=>!!e.find((e=>e.token.isPinned||e.isNativeTokenPinned))),[e]),O=(0,c.useMemo)((()=>(0,o.pF)(a,n.DF,{trimTrailingZero:!0})),[a]),L=(0,c.useMemo)((()=>N(r)),[r,N]);return(0,s.jsxs)(s.Fragment,{children:[!m&&(0,s.jsxs)(T,{isHovered:!1,onClick:B,withLeftPadding:m,children:[E&&(0,s.jsx)(A,{}),(0,s.jsxs)(h.FlexBox,{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gridGap:16,children:[(0,s.jsx)(x.d,{icon:Z.getIcon(e[0].chainId,e[0].token,e[0].isNativeAsset),numberOfChains:e.length,chainId:e[0].chainId}),(0,s.jsx)(i.Z,{children:e[0].token.symbol})]}),(0,s.jsxs)(h.FlexBox,{flexDirection:"row",alignItems:"center",justifyContent:"flex-start",gridGap:16,children:[(0,s.jsxs)(h.FlexBox,{flexDirection:"column",alignItems:"flex-end",justifyContent:"flex-end",children:[(0,s.jsx)(i.Z,{children:O}),(0,s.jsx)(l.Z,{children:L})]}),!$&&(0,s.jsx)(h.HoverButton,{onClick:()=>null,Icon:P?(0,s.jsx)(I,{}):(0,s.jsx)(p.KL,{}),label:k(P?"general.close":"general.open"),dataTestId:P?"closeBtn":"openBtn"})]})]}),(0,s.jsx)(C,{$active:m||P,children:e.map(((r,a)=>{const{assetFiatBalance:n,assetBalance:o}=(e=>{let t=_(e),r=S(e);if(!m&&e.isNativeAsset&&"BTC"===e.token.symbol&&D.getId()===e.chainId){const{balance:e,fiat:a}=j();t+=a,r+=e}return{assetFiatBalance:t,assetBalance:r}})(r);return(0,s.jsx)(v.Z,{fiat:n,balance:o,asset:r,setPin:r=>{e.forEach((e=>t(r,e)))},isSubAsset:!m,isSendFlow:m,onSelect:y,refetchAssets:w,noRightButton:$},`${r.chainId}_${r.token.id}_${a}`)}))})]})},C=(0,m.ZP)(h.FlexBox)`
  overflow: hidden;
  padding: 0;
  opacity: 0;
  max-height: 0;
  transition: opacity 0.1s, max-height 0.4s cubic-bezier(0, 1, 0, 1) -0.01s;

  ${({$active:e})=>e&&m.iv`
      opacity: 1;
      max-height: 9999px;
      transition-timing-function: cubic-bezier(0.5, 0, 1, 0);
      transition-delay: 0s;
    `}
`,F=65,T=(0,m.ZP)(h.FlexBox).attrs({flexDirection:"row",alignItems:"center",justifyContent:"space-between",p:8})`
  position: relative;
  width: 100%;
  height: ${F}px;
  cursor: pointer;
  border-bottom: 1px dashed ${y.wL.cynicalBlack};
  ${({isHovered:e})=>e&&`background-color: ${y.wL.nightOcean};`};
  ${({withLeftPadding:e})=>e&&"padding-left: 16px;"};

  :last-child {
    border: none;
  }
`,I=(0,m.ZP)(p.KL)`
  width: 16px;
  height: auto;
  transition: ${y.uT.A3};
  transform: rotateX(180deg);
`,A=(0,m.ZP)(p.qQ).attrs({color:y.wL.white})`
  position: absolute;
  top: 2px;
  left: 2px;
`,$=P;a()}catch(e){a(e)}}))},345873:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{d:()=>h,q:()=>p});var s=r(785893),n=r(308787),o=r(818117),i=r(876777),l=r(771341),c=r(458038),d=r(281672),u=r(807132),g=e([n,d]);[n,d]=g.then?(await g)():g;const p=({icon:e,chainId:t})=>{const r=(0,d.fU)().getChainControllerById(t),{isValidImage:a}=(0,u.Z)({image:e});return(0,s.jsxs)(y,{children:[(0,s.jsx)(v,{src:a?e:r.getConfig().fallbackImage}),(0,s.jsx)(m,{children:(0,s.jsx)(n.BorderedChainIcon,{chainId:t})})]})},h=({icon:e,numberOfChains:t,chainId:r})=>{const a=(0,d.fU)().getChainControllerById(r),{isValidImage:n}=(0,u.Z)({image:e});return(0,s.jsxs)(f,{children:[(0,s.jsx)(v,{src:n?e:a.getConfig().fallbackImage}),(0,s.jsxs)(b,{children:[(0,s.jsx)(c.Z,{children:t}),(0,s.jsx)(l.fq,{})]}),(0,s.jsx)(l.fq,{})]})},m=(0,o.ZP)(n.FlexBox)`
  position: absolute;
  bottom: 5px;
  left: 5px;
`,y=(0,o.ZP)(n.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: relative;
  width: 44px;
  height: 40px;
  padding: 6px 8px;
  background-color: ${i.wL.charcoal};
  border-radius: 8px;
`,f=(0,o.ZP)(n.FlexBox).attrs({alignItems:"center",justifyContent:"center"})`
  position: relative;
  width: 44px;
  height: 48px;
  padding-bottom: 12px;
`,b=(0,o.ZP)(n.FlexBox).attrs({alignItems:"center",justifyContent:"space-between",flexDirection:"row"})`
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
`,v=o.ZP.img.attrs({alt:"Icon"})`
  width: 28px;
  height: 28px;
`;a()}catch(e){a(e)}}))},738152:(e,t,r)=>{r.d(t,{Z:()=>f});var a=r(785893),s=r(667294),n=r(247412),o=r(327754),i=r(876777),l=Object.defineProperty,c=Object.defineProperties,d=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&h(e,r,t[r]);if(u)for(var r of u(t))p.call(t,r)&&h(e,r,t[r]);return e};const y=s.forwardRef((function(e,t){const r=(0,o.F)({[i.$T.Dark]:"white"}),s=e.color||r;return(0,a.jsx)(n.YJ,{children:(0,a.jsx)("svg",(l=m({width:"16",height:"17",viewBox:"0 0 16 17",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),u={children:(0,a.jsx)("path",{d:"M9.00334 11.7727L7.68715 13.2765C6.84275 14.2412 5.47661 14.2412 4.63257 13.2765C4.22423 12.8107 4 12.1907 4 11.5315C4 10.8723 4.22423 10.2523 4.63221 9.78601L6.40633 7.75887C7.26495 6.77759 8.63546 6.81634 9.46054 7.75887C9.6257 7.94762 9.75586 8.1643 9.85758 8.39514L9.27678 9.05849C9.21116 8.80307 9.09448 8.56306 8.92531 8.37014C8.39738 7.76678 7.49245 7.74095 6.94228 8.36972L6.94192 8.37055L5.16743 10.3977C4.62054 11.0223 4.62054 12.0398 5.16743 12.6644C5.72052 13.2965 6.6105 13.2845 7.15156 12.6644L8.0357 11.6544C8.39774 11.7727 8.68869 11.794 9.00334 11.7727V11.7727ZM9.06204 4.72336L7.75897 6.2134C8.06779 6.19257 8.36238 6.2134 8.72624 6.33132L9.59872 5.33588C10.1449 4.71002 11.0352 4.71086 11.5821 5.33546C12.1352 5.96798 12.1239 6.98509 11.5821 7.60303L9.82076 9.61601L9.81966 9.61684C9.29538 10.2156 8.40285 10.2635 7.83663 9.61601C7.66418 9.4185 7.55043 9.18183 7.48808 8.9314L7.45745 8.95974L6.90436 9.59101C7.00645 9.82268 7.13588 10.0389 7.30104 10.2277C8.11956 11.1631 9.49007 11.2169 10.3556 10.2277L12.1173 8.21472C12.961 7.24969 12.9617 5.6888 12.117 4.72419C11.2722 3.75708 9.90498 3.76041 9.06204 4.72336V4.72336Z",fill:s})},c(l,d(u))))});var l,u})),f=s.memo(y)},579497:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(785893),s=r(667294),n=r(327754),o=r(876777),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=s.forwardRef((function(e,t){const r=(0,n.F)({[o.$T.Dark]:"white"}),s=e.color||r;return(0,a.jsxs)("svg",(i=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))g.call(t,r)&&p(e,r,t[r]);return e})({width:"16",height:"16",viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(i,c({children:[(0,a.jsx)("path",{d:"M8 2.4C11.087 2.4 13.6 4.913 13.6 8C13.6 11.087 11.087 13.6 8 13.6C4.913 13.6 2.4 11.087 2.4 8C2.4 4.913 4.913 2.4 8 2.4ZM8 1C4.136 1 1 4.136 1 8C1 11.864 4.136 15 8 15C11.864 15 15 11.864 15 8C15 4.136 11.864 1 8 1Z",fill:s||"#969DA3"}),(0,a.jsx)("path",{d:"M8.00005 12.2001C7.61505 12.2001 7.30005 11.8851 7.30005 11.5001V7.3001C7.30005 6.9151 7.61505 6.6001 8.00005 6.6001C8.38505 6.6001 8.70005 6.9151 8.70005 7.3001V11.5001C8.70005 11.8851 8.38505 12.2001 8.00005 12.2001Z",fill:s||"#969DA3"}),(0,a.jsx)("path",{d:"M8.00005 5.1998C8.38665 5.1998 8.70005 4.8864 8.70005 4.4998C8.70005 4.11321 8.38665 3.7998 8.00005 3.7998C7.61345 3.7998 7.30005 4.11321 7.30005 4.4998C7.30005 4.8864 7.61345 5.1998 8.00005 5.1998Z",fill:s||"#969DA3"})]}))));var i})),m=s.memo(h)},175075:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(785893),s=r(667294),n=r(327754),o=r(876777),i=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const h=s.forwardRef((function(e,t){const r=(0,n.F)({[o.$T.Dark]:"white"}),s=e.color||r;return(0,a.jsxs)("svg",(i=((e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(d)for(var r of d(t))g.call(t,r)&&p(e,r,t[r]);return e})({width:"11",height:"11",viewBox:"0 0 11 11",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t},e),l(i,c({children:[(0,a.jsx)("path",{d:"M2.5 1C1.67157 1 1 1.67157 1 2.5V8.5C1 9.32843 1.67157 10 2.5 10H8.5C9.32843 10 10 9.32843 10 8.5V7.5C10 7.22386 10.2239 7 10.5 7C10.7761 7 11 7.22386 11 7.5V8.5C11 9.88071 9.88071 11 8.5 11H2.5C1.11929 11 0 9.88071 0 8.5V2.5C0 1.11929 1.11929 0 2.5 0H3.5C3.77614 0 4 0.223858 4 0.5C4 0.776142 3.77614 1 3.5 1H2.5Z",fill:s||"#2041E0"}),(0,a.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.00001 0.5C6.00001 0.223858 6.22387 0 6.50001 0H10.5C10.7761 0 11 0.223858 11 0.5V4.5C11 4.77614 10.7761 5 10.5 5C10.2239 5 10 4.77614 10 4.5V1.69208L4.85001 6.84207C4.65475 7.03733 4.33817 7.03733 4.14291 6.84207C3.94764 6.64681 3.94764 6.33023 4.14291 6.13496L9.27787 1H6.50001C6.22387 1 6.00001 0.776142 6.00001 0.5Z",fill:s||"#2041E0"})]}))));var i})),m=s.memo(h)},557972:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(785893),s=r(876777),n=r(15145),o=Object.defineProperty,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;const u=e=>{var t=e,{dataTestId:r}=t,o=((e,t)=>{var r={};for(var a in e)l.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&c.call(e,a)&&(r[a]=e[a]);return r})(t,["dataTestId"]);return(0,a.jsx)(n.Z,((e,t)=>{for(var r in t||(t={}))l.call(t,r)&&d(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&d(e,r,t[r]);return e})({fontSize:28,lineHeight:"32px",color:s.wL.white,fontWeight:600,"data-testid":r},o))}},385167:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{n:()=>s.n});var s=r(982107),n=e([s]);s=(n.then?(await n)():n)[0],a()}catch(e){a(e)}}))},582242:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(818117);const s="?popup=true"===window.location.search,n=a.vJ`
  ${!s&&a.iv`
      html {
        height: 100% !important;
      }
    `}
`},409061:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{F:()=>s.F,a:()=>n.a});var s=r(347227),n=r(255942),o=e([s]);s=(o.then?(await o)():o)[0],a()}catch(e){a(e)}}))},721892:(e,t,r)=>{r.d(t,{Z:()=>q});var a=r(379562),s=r(778121),n=r(822485),o=r(907377),i=r(45612),l=r(321214),c=r(880754),d=r(582119),u=r(59917),g=r(871190),p=r.n(g),h=r(661820),m=r(679742),y=r(617656),f=r(592479),b=r(446366),v=r(702617),x=r(202593),w=r(125217),P=r(968447),C=r(208004),F=r(117221),T=r(739989),I=r(369943),A=r(605930),$=r(256371),k=r(46461),_=r(684448),S=r(691438),Z=r(845826),D=r(995920),Buffer=r(348764).Buffer,N=Object.defineProperty,j=Object.defineProperties,B=Object.getOwnPropertyDescriptors,E=Object.getOwnPropertySymbols,O=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,G=(e,t,r)=>t in e?N(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,M=(e,t)=>{for(var r in t||(t={}))O.call(t,r)&&G(e,r,t[r]);if(E)for(var r of E(t))L.call(t,r)&&G(e,r,t[r]);return e},R=(e,t,r)=>(G(e,"symbol"!=typeof t?t+"":t,r),r),V=(e,t,r)=>new Promise(((a,s)=>{var n=e=>{try{i(r.next(e))}catch(e){s(e)}},o=e=>{try{i(r.throw(e))}catch(e){s(e)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,o);i((r=r.apply(e,t)).next())}));const K="44'/60'/0'/0/X";class q extends D.Z{constructor(){super(...arguments),R(this,"checkETHAppVersion",(e=>V(this,null,(function*(){const{version:t}=yield e.getAppConfiguration();if(!(0,A.RP)(t,"1.9.6"))throw(0,k.t)("app:controller_errors.ledger.please_upgrade_ethereum_on_ledger")})))),R(this,"getTronAddresses",((e,t,r)=>V(this,null,(function*(){const a=yield d.Z.create(),s="m/44'/195'/X'/0/0";try{const n=new l.Z(a),o=yield n.getAddress(s.replace("X","0")),i=(0,Z.Zy)(e.getType(),s,Buffer.from(o.address).toString("base64")),c=[];for(let a=t;a<t+r;a++){const t=s.replace("X",a.toString()),r=yield n.getAddress(t,!1);T.Z.info(M({x:Buffer.from(r.address).toString("base64"),rootWalletId:i},r)),c.push({id:`tron-${t}`,derivation:s,address:r.address,publicKey:r.publicKey,testnetDerivation:s,testnetAddress:r.address,testnetPublicKey:r.publicKey,label:`Account ${a}`,balances:[],selected:!1,chainId:e.getId(),walletIndex:a,rootWalletId:i,chainType:e.getType()})}return T.Z.debug({results:c}),c}catch(e){throw T.Z.debug({err:e}),e}finally{a.close()}}))))}getChainTypes(){return Object.values(S.J)}getEIP1024PublicEncryptionKey(e){return V(this,arguments,(function*(e,t=K){const r=this.getDerivationPathWithOffset(t,e),a=yield d.Z.create();try{const e=new i.ZP(a);yield this.checkETHAppVersion(e);const t=yield e.getEIP1024PublicEncryptionKey(r);return T.Z.debug({res:t}),t.publicKey}catch(e){throw T.Z.debug({err:e}),e}finally{a.close()}}))}getEIP1024SharedSecret(e,t,r="44'/60'/0'/0/X"){return V(this,null,(function*(){const a=r.replace("X",t.toString()),s=yield d.Z.create();try{const t=new i.ZP(s);yield this.checkETHAppVersion(t);const r=yield t.getEIP1024SharedSecret(a,e);return T.Z.debug({res:r}),r.sharedSecret}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}getEVMAddresses(e){return V(this,arguments,(function*(e,t=0,r=5,a){const s=a||K;let n;try{n=yield d.Z.create();const a=new i.ZP(n),o=e.getConfig().tokenSymbol,l=yield a.getAddress(s.replace("X","0")),c=(0,Z.Zy)(e.getType(),s,l.address),u=[];for(let n=t;n<t+r;n++){const t=s.replace("X",n.toString());try{const r=yield a.getAddress(t);u.push({id:`${o}-${t}`,derivation:s,address:r.address,publicKey:r.publicKey,testnetDerivation:s,testnetAddress:r.address,testnetPublicKey:r.publicKey,label:`Account ${n}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:n,rootWalletId:c})}catch(e){T.Z.error(`Error: on getting adddress from path ${t}`,e)}}return u}catch(e){throw T.Z.debug({err:e}),e}finally{n.close()}}))}static getFantomAddress(e,t=0,r){return V(this,null,(function*(){const a=yield this.getFantomAddresses(e,t,1,r);if(a.length)return a[0];throw(0,k.t)("app:controller_errors.no_account_found")}))}static getFantomAddresses(e){return V(this,arguments,(function*(e,t=0,r=5,a){let s;const n=[];try{s=yield d.Z.create();const o=new _.ZP(s),i=yield o.listAddresses(t,t,r);if(i.length>0)for(let r=0;r<i.length;r++){const s=i[r],l=r+t,c=a||K,d=c.replace("X",l.toString()),u=yield o.getPublicKey(l);u&&n.push({id:`fantom-${d}-${l}`,derivation:c,address:s,publicKey:b.hexlify(u.publicKey),testnetDerivation:c,testnetAddress:s,testnetPublicKey:b.hexlify(u.publicKey),label:`Account ${l}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:l})}return T.Z.debug({results:n}),n}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}signEVMTransaction(e,t,r){return V(this,null,(function*(){const a=v.serialize(r).substring(2),s=e.replace("X",t.toString()),n=yield d.Z.create();try{const e=new i.ZP(n);yield this.checkETHAppVersion(e);const t=yield e.signTransaction(s,a);return T.Z.debug({sig:t}),{v:x.O$.from("0x"+t.v).toNumber(),r:"0x"+t.r,s:"0x"+t.s}}catch(e){throw T.Z.debug({err:e}),e}finally{n.close()}}))}rejectTransaction(){return V(this,null,(function*(){const e=yield d.Z.openConnected();try{const t=new i.ZP(e);yield this.checkETHAppVersion(t).then((e=>T.Z.info("then",e))).catch((e=>T.Z.info("catch",e))),yield t.signTransaction("","")}catch(e){throw T.Z.info("🚀 ~ file: LedgerController.ts:396 ~ LedgerController ~ rejectTransaction ~ err",e),e}finally{e.close()}}))}signETHPersonalMessage(e,t,r){return V(this,null,(function*(){T.Z.info({derivPath:e,msgHash:r});const a=e.replace("X",t.toString()),s=yield d.Z.create();try{const e=new i.ZP(s),t=r.startsWith("0x")?r.substring(2):r,n=yield e.signPersonalMessage(a,t);T.Z.info({result:n});const o={v:x.O$.from("0x"+n.v).toNumber(),r:"0x"+n.r,s:"0x"+n.s};return b.joinSignature(o)}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}signEIP712MessageLegacy(e,t,r){return V(this,null,(function*(){const a=(0,I.e)(r);return this.signETHPersonalMessage(e,t,a)}))}signEIP712Message(e,t,r,a=!0){return V(this,null,(function*(){const{message:s,domain:n}=(0,I.M)(r,a);return this.signEIP712HashedMessage(e,t,n.toString("hex"),s.toString("hex"))}))}signEIP712HashedMessage(e,t,r,a){return V(this,null,(function*(){T.Z.info({derivPath:e,domainSeparatorHex:r,hashStructMessageHex:a});const s=e.replace("X",t.toString()),n=yield d.Z.create();try{const e=new i.ZP(n);let t=yield e.signEIP712HashedMessage(s,r,a);return o=M({},t),l={r:"0x"===t.r.substring(0,2)?t.r:"0x"+t.r,s:"0x"===t.s.substring(0,2)?t.s:"0x"+t.s},t=j(o,B(l)),T.Z.debug({res:t}),(0,$.joinSignature)(t)}catch(e){throw T.Z.debug({err:e}),e}finally{n.close()}var o,l}))}static signAVAXTransaction(e,t,r){return V(this,null,(function*(){const a=e.replace("X",t.toString()),s=yield d.Z.create();try{const e=new i.ZP(s),t=yield e.signTransaction(`m/${a}`,r);return T.Z.debug({res:t}),t}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}signFantomTransaction(e,t){return V(this,null,(function*(){const r=w.getDefaultProvider(),a=new f.Z(r,e);try{const e=yield a.signTransaction(t);return T.Z.debug({res:e}),e}catch(e){throw T.Z.debug({err:e}),e}finally{yield a.closeTransport()}}))}getTHORChainAddresses(e){return V(this,arguments,(function*(e,t=0,r=5,a){const s=yield d.Z.create();try{const n=new h.ZP(s),o=e.getConfig().tokenSymbol,i=a||"44'/931'/0'/0/X",l=yield n.getAddressAndPubKey(i.replace("X","0").replaceAll("'","").split("/").map((e=>Number(e))),"tthor"),c=(0,Z.Zy)(e.getType(),i,l.bech32Address),d=[];for(let a=t;a<t+r;a++){const t=i.replace("X",a.toString()),r=t.replace("'","").split("/").map((e=>parseInt(e,10))),s=yield n.getAddressAndPubKey(r,"tthor"),l=yield n.getAddressAndPubKey(r,"thor");T.Z.info({testnetRes:s,mainnetRes:l});const u=[s,l].find((e=>"No errors"!==e.errorMessage));if(u)throw`Error [${u.returnCode}] ${u.errorMessage}`;d.push({id:`${o}-${t}`,derivation:i,address:l.bech32Address,publicKey:l.compressedPk.toString("hex"),testnetDerivation:i,testnetAddress:s.bech32Address,testnetPublicKey:s.compressedPk.toString("hex"),label:`Account ${a}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:a,rootWalletId:c})}return T.Z.debug({results:d}),d}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}signTHORTransaction(e,t,r){return V(this,null,(function*(){const a=e.replace("X",t.toString()).replace("'","").split("/").map((e=>parseInt(e,10)));T.Z.info({derivPath:e,currentPathArr:a,rawTxHex:r});const s=yield d.Z.create();try{const e=new h.ZP(s),t=yield e.sign(a,r);return T.Z.debug({res:t}),this.getNormalizedSignature(t.signature)}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}getUTXOAddresses(e,t,r,a){if(e.getType()===S.J.Bitcoin)return this.getBtcAddresses(e.selfCast(),t,r,a);throw(0,k.t)("app:controller_errors.not_supported_chain_type",{chainType:e.getType()})}signUTXOTransaction(e,t,r,a){if(e.getType()===S.J.Bitcoin)return this.signBtcTransaction(e,t,r,a);throw(0,k.t)("app:controller_errors.not_supported_chain_type",{chainType:e.getType()})}getBtcAddresses(e){return V(this,arguments,(function*(e,t=0,r=5,a){var s,o,i,l;const c=a||"84'/0'/0'/0/X",u=yield d.Z.create(),g=null!=(i=null==(o=null==(s=e.getConfig().derivationPath)?void 0:s.find((e=>e.value===c)))?void 0:o.format)?i:"bech32";try{const a=new n.Z({transport:u,currency:null==(l=e.getType())?void 0:l.toLowerCase()}),s=yield a.getWalletPublicKey(c.replace("X","0"),{format:g}),o=(0,Z.Zy)(e.getType(),c,s.bitcoinAddress),i=[];for(let s=t;s<t+r;s++){const t=c.replace("X",s.toString()),r=yield a.getWalletPublicKey(t,{format:g});T.Z.info({res:r}),i.push({id:`btc-${t}`,derivation:c,address:r.bitcoinAddress,publicKey:r.publicKey,testnetDerivation:c,testnetPublicKey:r.publicKey,testnetAddress:r.bitcoinAddress,label:`Account ${s}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:s,rootWalletId:o})}return T.Z.debug({results:i}),i}catch(e){throw T.Z.debug({err:e}),e}finally{u.close()}}))}signBtcTransaction(e,t,r,a){return V(this,null,(function*(){var s,o,i,l;T.Z.debug({function:"signBtcTransaction",derivPath:t,walletIndex:r,tx:a});const c=yield d.Z.create(),u=new n.Z({transport:c,currency:null==(s=S.J.Bitcoin)?void 0:s.toLowerCase()});try{const s=[],n=a.inputs.map((e=>{const a=t.replace("X",r.toString());s.push(a);const n=y.YW.fromHex(e.txHex);return[u.splitTransaction(e.txHex,n.hasWitnesses()),e.index,null,null]})),c=a.psbt.data.globalMap.unsignedTx.toBuffer().toString("hex"),d=u.splitTransaction(c,!0),g=u.serializeTransactionOutputs(d).toString("hex"),p=null!=(l=null==(i=null==(o=e.getConfig().derivationPath)?void 0:o.find((e=>e.value===t)))?void 0:i.format)?l:"bech32",h={inputs:n,associatedKeysets:s,outputScriptHex:g,additionals:(e=>{switch(e){case"bech32":case"bech32m":return[e];case"p2sh":case"legacy":return[];default:throw(0,k.t)("app:controller_errors.unkwon_derivation_path_format")}})(p),segwit:"legacy"!==p,useTrustedInputForSegwit:!0};T.Z.debug({params:h});return yield u.createPaymentTransaction(h)}catch(e){throw T.Z.debug({err:e}),e}finally{c.close()}}))}getTerraAddresses(e){return V(this,arguments,(function*(e,t=0,r=5,a){let s;try{s=yield d.Z.create();const n=new(p())(s),o=yield n.initialize();try{this.checkLedgerErrors("Terra",o)}catch(e){console.log(e)}const i=a||"44'/330'/0'/0/X",l=yield n.getAddressAndPubKey(i.replace("X","0").replaceAll("'","").split("/").map((e=>Number(e))),"terra"),c=(0,Z.Zy)(e.getType(),i,l.bech32_address),u=[];for(let a=t;a<t+r;a++){const t=i.replace("X",a.toString());try{const r=t.replace("'","").split("/").map((e=>parseInt(e,10))),s=yield n.getAddressAndPubKey(r,"terra");this.checkLedgerErrors("Terra",s),u.push({id:`terra-${t}`,derivation:i,address:s.bech32_address,publicKey:Buffer.from(s.compressed_pk).toString("base64"),testnetDerivation:i,testnetAddress:s.bech32_address,testnetPublicKey:Buffer.from(s.compressed_pk).toString("base64"),label:`Account ${a}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:a,rootWalletId:c})}catch(e){console.error(`Error: on getting address from path ${t}`,e)}}return T.Z.debug({results:u}),u}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}signTerraTransaction(e,t,r){return V(this,null,(function*(){const a=e.replace("X",t.toString()).replace("'","").split("/").map((e=>parseInt(e,10)));T.Z.info({derivPath:e,currentPathArr:a,message:r});const s=yield d.Z.create();try{const e=new(p())(s),t=yield e.initialize();this.checkLedgerErrors("Terra",t);const n=yield e.sign(a,r.toString());return this.checkLedgerErrors("Terra",n),Buffer.from((0,F.signatureImport)(Buffer.from(n.signature)))}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}getNearAddresses(e){return V(this,arguments,(function*(e,t=0,r=5,a){let s;try{s=yield d.Z.create();const n=yield(0,C.eI)(s),o=a||"44'/397'/0'/0'/X'",i=yield n.getPublicKey(o.replace("X","0")),l=Buffer.from(i).toString("hex"),c=(0,Z.Zy)(e.getType(),o,l),u=[];for(let a=t;a<t+r;a++){const t=o.replace("X",a.toString());try{const r=yield n.getPublicKey(t),s=Buffer.from(r).toString("hex"),i=new P.utils.PublicKey({keyType:P.utils.key_pair.KeyType.ED25519,data:r});u.push({id:`near-${t}`,derivation:o,address:s,publicKey:i.toString(),testnetDerivation:o,testnetAddress:s,testnetPublicKey:i.toString(),label:`Account ${a}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:a,rootWalletId:c})}catch(e){console.error(`Error: on getting address from path ${t}`,e)}}return T.Z.debug({results:u}),u}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}signNearTransaction(e,t,r){return V(this,null,(function*(){const a=e.replace("X",t.toString()),s=yield d.Z.create();try{const e=yield(0,C.eI)(s);return yield e.sign(r,a)}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}solanaSignTransaction(e,t){return V(this,null,(function*(){const r=yield d.Z.create();try{const a=new c.Z(r);return(yield a.signTransaction(e,t)).signature}catch(e){throw T.Z.debug({err:e}),e}finally{r.close()}}))}getSolanaAddresses(e){return V(this,arguments,(function*(e,t=0,r=5,a){const s=yield d.Z.create();try{const n=new c.Z(s),o=a||"44'/501'/X'/0",i=yield n.getAddress(o.replace("X","0")),l=(0,Z.Zy)(e.getType(),o,Buffer.from(i.address).toString("base64")),d=[];for(let a=t;a<t+r;a++){const t=o.replace("X",a.toString()),r=yield n.getAddress(t,!1);T.Z.info({mainnetRes:r});const s=new u.nh(r.address).toString();d.push({id:`solana-${t}`,derivation:o,address:s,publicKey:s,testnetDerivation:o,testnetAddress:s,testnetPublicKey:s,label:`Account ${a}`,selected:!1,chainId:e.getId(),chainType:e.getType(),balances:[],walletIndex:a,rootWalletId:l})}return T.Z.debug({results:d}),d}catch(e){throw T.Z.debug({err:e}),e}finally{s.close()}}))}getNormalizedSignature(e){if(e.length<64)throw Error((0,k.t)("app:controller_errors.ledger.too_short"));if(48!==e[0])throw Error((0,k.t)("app:controller_errors.ledger.encoding_expected_first_byte"));if(e[1]+2!==e.length)throw Error((0,k.t)("app:controller_errors.ledger.length_does_not_match_tlv"));if(2!==e[2])throw Error((0,k.t)("app:controller_errors.ledger.expected_length_type"));const t=e[3];let r=e.slice(4,t+4);if(33===r.length&&0===r[0])r=r.slice(1,33);else if(33===r.length)throw Error((0,k.t)("app:controller_errors.ledger.r_too_long"));for(;r.length<32;)r.unshift(0);if(2!==e[t+4])throw Error((0,k.t)("app:controller_errors.ledger.expected_length_type"));if(4+t+2+e[t+5]!==e.length)throw Error((0,k.t)("app:controller_errors.ledger.byte_length_not_match_length"));let a=e.slice(t+6,e.length);if(33===a.length&&0===a[0])a=a.slice(1,33);else if(33===a.length)throw Error((0,k.t)("app:controller_errors.ledger.s_too_long"));for(;a.length<32;)a.unshift(0);if(32!==r.length||32!==a.length)throw Error((0,k.t)("app:controller_errors.ledger.must_be_32_bytes_each"));return(0,m.fromByteArray)(Buffer.concat([r,a]))}getCosmosAddresses(){return V(this,arguments,(function*(e=0,t=5,r,a="cosmos",s){const n=yield d.Z.create();try{const i=s||"44'/118'/X'/0/0",l=new o.Z(n),c=yield l.getAddress(i.replace("X","0"),a,!1),d=(0,Z.Zy)(r.getType(),i,c.address),u=[];for(let s=e;s<e+t;s++){const e=i.replace("X",s.toString()),t=yield l.getAddress(e,a,!1);T.Z.debug({mainnetRes:t}),u.push({id:`${a}-${e}`,derivation:i,address:t.address,publicKey:t.publicKey,testnetDerivation:i,testnetAddress:t.address,testnetPublicKey:t.publicKey,label:`Account ${s}`,selected:!1,chainId:r.getId(),chainType:r.getType(),balances:[],walletIndex:s,rootWalletId:d})}return T.Z.debug({results:u}),u}catch(e){throw T.Z.debug({err:e}),e}finally{n.close()}}))}cosmosSignTransaction(e,t,r,n){return V(this,null,(function*(){T.Z.debug({path:r,message:n});const o=yield d.Z.create();T.Z.debug("transport",o);try{const i=new s.IM(o,{testModeAllowed:!0,hdPaths:[(0,a.stringToPath)(`m/${r}`)],prefix:e}),l=yield i.signAmino(t,n),c=l.signature;if(T.Z.debug({res:l}),!c)throw"signCosmos failed: signature is empty";return Buffer.from(c.signature,"base64")}catch(e){throw T.Z.debug({err:e}),e}finally{o.close()}}))}getBinanceAddresses(e,t,r,a){throw"Method not implemented."}signBinanceTransaction(e,t){return V(this,null,(function*(){throw"Method not implemented."}))}checkLedgerErrors(e,t){if(t){if(t.device_locked)throw(0,k.t)("app:controller_errors.ledger.ledger_screen_saver");if(t.error_message.startsWith("TransportRaceCondition"))throw(0,k.t)("app:controller_errors.ledger.please_finish_previous_action");if(t.error_message.startsWith("DisconnectedDeviceDuringOperation"))throw(0,k.t)("app:controller_errors.ledger.open_the_app_in_your_ledger",{app:e});switch(t.error_message){case"U2F: Timeout":throw(0,k.t)("app:controller_errors.ledger.could_not_find_a_connected_ledger");case"App does not seem to be open":throw(0,k.t)("app:controller_errors.ledger.open_the_app_in_your_ledger",{app:e});case"Command not allowed":throw(0,k.t)("app:controller_errors.ledger.transaction_rejected");case"Transaction rejected":throw(0,k.t)("app:controller_errors.ledger.user_rejected_transaction");case"Unknown Status Code: 26628":throw(0,k.t)("app:controller_errors.ledger.ledger_screen_saver");case"Instruction not supported":throw(0,k.t)("app:controller_errors.ledger.please_check_your_ledger_is_latest_version",{app:e});case"No errors":break;default:throw t.error_message}}}hasPermission(){return V(this,null,(function*(){return(yield d.Z.list()).length>0}))}requestPermission(){return V(this,null,(function*(){try{return yield d.Z.request(),!0}catch(e){return!1}}))}getTronAddress(e,t){return V(this,null,(function*(){const r=yield this.getTronAddresses(e,t,5);if(r.length)return r[0];throw(0,k.t)("app:controller_errors.no_account_found")}))}}},189556:(e,t,r)=>{r.d(t,{m:()=>s});var a=r(831352),s=(e=>(e.High="high",e.Medium="medium",e.Low="low",e))(s||{});a.yp.Ethereum,a.yp.Avalanche,a.yp.CantoEvm,a.yp.CronosEvm,a.yp.Fantom,a.yp.Gnosis,a.yp.Klaytn,a.yp.Optimism,a.yp.Polygon},593159:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>$});var s=r(802305),n=r(831352),o=r(564586),i=r(968945),l=r(458233),c=r(667294),d=r(287536),u=r(230811),g=r(50533),p=r(996974),h=r(972819),m=r(691438),y=r(680528),f=r(739989),b=r(244586),v=r(281672),x=r(330101),w=r(616310),P=r(626423),C=r(87029),F=e([h,v]);[h,v]=F.then?(await F)():F;var T=(e,t,r)=>new Promise(((a,s)=>{var n=e=>{try{i(r.next(e))}catch(e){s(e)}},o=e=>{try{i(r.throw(e))}catch(e){s(e)}},i=e=>e.done?a(e.value):Promise.resolve(e.value).then(n,o);i((r=r.apply(e,t)).next())}));const I=(e,t,r)=>T(void 0,null,(function*(){var a;if(r)try{const s=(yield(0,x.Io)(r)).result[0],l=null!=(a=s.ABI)?a:o;return{mainContract:new i.CH(e,l,t),isProxy:(null==s?void 0:s.Proxy)===(0,P.Bw)(n.yp.Ethereum)}}catch(e){f.Z.error(e)}return{mainContract:new i.CH(e,o,t),isProxy:!1}})),A=(e,t)=>{var r,a,s;if(e&&t&&t.length>0){const e=t[t.length-1];if(null==(s=null==(a=null==(r=e.raw)?void 0:r.params)?void 0:a.params)?void 0:s.options){const{symbol:t,decimals:r,address:a,image:s}=e.raw.params.params.options;return{symbol:t,address:a,image:s,decimals:r,chainId:e.chainId}}}},$=e=>{const{t}=(0,u.$G)("app"),r=(0,p.s0)(),a=(0,v.fU)(),n=(0,v.JB)(),{addNotification:o}=(0,h.Z)(),i=(0,g.v9)((e=>e.dappsMessages.messages)),{wallets:x,activeWalletId:P}=(0,g.v9)((e=>({wallets:e.wallets.wallets,activeWalletId:e.wallets.activeWalletId}))),F=x[P],$=(0,c.useMemo)((()=>a.getAllChainControllerIds().filter((e=>{var t,r;return a.getChainControllerById(e).support(m.B.CustomToken)&&void 0!==(null==(r=null==(t=x[P])?void 0:t.chainData)?void 0:r[e])}))),[P,a,x]),{ethereumProvider:k}=(0,g.v9)((e=>({ethereumProvider:e.dappsProviders.settings.ethereumProvider}))),_=(0,c.useRef)(A(e,i));(0,c.useEffect)((()=>{e&&!_.current&&window.close()}),[e]);const[S,Z]=(0,c.useState)((()=>_.current?_.current.chainId:e&&k&&k.windowEthereumChain?k.windowEthereumChain:$[0])),D=(0,c.useMemo)((()=>S?a.getChainControllerById(S):null),[a,S]),N=(0,l.I)(S),j=(0,c.useMemo)((()=>w.Ry({address:w.Z_().required(t("custom_token.validation.address_required")).test(((e,r)=>T(void 0,null,(function*(){if(!e||!N.current||!D)return!0;if(D.getType()===m.J.Cosmos){return!!(yield D.isToken(e))||r.createError({message:t("validation.not_a_valid_cosmos_address")})}return!!D.validateAddress(e,{inclTokenAddress:!0})||r.createError({message:t("validation.not_a_valid_address")})})))),symbol:w.Z_().required(t("custom_token.validation.symbol_required")).matches(/^\S*$/,t("custom_token.validation.symbol_whitespace")).min(2,t("custom_token.validation.symbol_required")).max(15,t("custom_token.validation.symbol_required")),decimals:w.Z_().required(t("custom_token.validation.precision_required")).test({test:e=>{const t=Number(e);return Number.isInteger(t)&&t>=0&&t<=256},message:t("validation.invalid_precision_0_256")})})),[N,t,D]),{register:B,handleSubmit:E,formState:{errors:O},setValue:L,watch:G}=(0,d.cI)({defaultValues:_.current,resolver:(0,s.X)(j),reValidateMode:"onChange"}),M=G("address"),[R,V]=(0,c.useState)(!1);(0,c.useEffect)((()=>{$.includes(S)||Z($[0])}),[S,$,Z]);const K=(0,c.useCallback)((e=>T(void 0,null,(function*(){var s,i,l;V(!0);try{const c=F.chainData[S].address,d=yield a.getChainControllerById(S).getTokenBalance(e.address,c),u=Object.values(F.chainData[S].tokens);if(Object.values(u||{}).filter((t=>{var r,a;return(null==(r=t.address)?void 0:r.toUpperCase())===(null==(a=e.address)?void 0:a.toUpperCase())})).length>0)return void o({title:t("alert.general.token.error.add_token.title"),type:"error",message:t("alert.general.token.error.add_token.messages.added")});if((null==(s=null==D?void 0:D.getConfig().tokenSymbol)?void 0:s.toLowerCase())===(null==(i=e.symbol)?void 0:i.toLowerCase()))return void o({title:t("alert.general.token.error.add_token.title"),type:"error",message:t("alert.general.token.error.add_token.messages.chain_symbol")});const g=n.getAssetToken(S,e.symbol,e.address);if(g)n.addTokenToWallet(S,g,P);else{const t=(0,b.Z)();n.addTokenToWallet(S,{contractId:t,address:e.address,balance:d.toString(),id:t,symbol:e.symbol,name:e.symbol,image:(null==(l=_.current)?void 0:l.image)||"",decimals:Number(e.decimals),isCustom:!0},P)}r(y.ft)}catch(e){f.Z.error({err:e}),o({title:t("alert.general.token.error.invalid_token.title"),type:"error",message:t("alert.general.token.error.invalid_token.message")})}V(!1)}))),[F.chainData,P,o,n,a,r,S,D,t]);return(0,c.useEffect)((()=>{T(void 0,null,(function*(){if(!M)return;const e=a.getChainControllerById(S);if(e.getType()===m.J.Evm&&!e.validateAddress(M))return;V(!0);let r="",s="";const i=n.getTokenByAddress(S,M);try{if(i)r=i.symbol,i.decimals&&(s=i.decimals);else if(e.getType()===m.J.Evm){const t=e.getProvider(),n=e.selfCast().getConfig().network.explorer,o=n?`${n}/api?module=contract&action=getsourcecode&address=${M}`:void 0,{mainContract:i,isProxy:l}=yield I(M,t,o);if((0,C.w)(i,l)){const e=yield(0,C.h)(i,a,S,M,t);r=yield e.symbol(),s=yield e.decimals()}else{r=yield i.symbol();try{s=yield i.decimals()}catch(e){s=y.KV.A18.toString()}}}else if(e.getType()===m.J.Terra){const t=yield e.getTokenInfo(M);r=t.symbol,s=t.decimals}}catch(e){f.Z.error("Error ocurred while fetching token data",{error:e}),o({title:t("general.error"),type:"error",message:t("alert.general.token.error.while_fetching_token_data.message")})}L("symbol",r,{shouldValidate:!!r}),L("decimals",s.toString(),{shouldValidate:!!s}),V(!1)}))}),[M,S]),{submitHandler:K,setSelectedChain:Z,selectedChain:S,availableChains:$,register:B,handleSubmit:E,errors:O,loading:R}};a()}catch(e){a(e)}}))},87029:(e,t,r)=>{r.d(t,{h:()=>l,w:()=>i});var a=r(831352),s=r(968945),n=r(330101);const o={[a.yp.BinanceSmartChain]:"0xBA5Fe23f8a3a24BEd3236F05F2FcF35fd0BF0B5C",[a.yp.Ethereum]:"NO_DEFAULT_ADDRESS",[a.yp.Polygon]:"NO_DEFAULT_ADDRESS",[a.yp.Avalanche]:"NO_DEFAULT_ADDRESS",[a.yp.Arbitrum]:"0x3f770ac673856f105b586bb393d122721265ad46",[a.yp.Fantom]:"NO_DEFAULT_ADDRESS",[a.yp.Aurora]:"NO_DEFAULT_ADDRESS",[a.yp.CronosEvm]:"NO_DEFAULT_ADDRESS",[a.yp.Optimism]:"NO_DEFAULT_ADDRESS",[a.yp.Klaytn]:"NO_DEFAULT_ADDRESS",[a.yp.CantoEvm]:"NO_DEFAULT_ADDRESS",[a.yp.Gnosis]:"NO_DEFAULT_ADDRESS"},i=(e,t)=>e.hasOwnProperty("implementation")||t,l=(e,t,r,a,i)=>{return l=void 0,c=null,d=function*(){try{const o=yield e.implementation(),l=(yield(0,n.Io)(`${t.getChainControllerById(r).getConfig().network.explorer}/api?module=contract&action=getsourcecode&address=${o}`)).result[0].ABI;return new s.CH(a,l,i)}catch(e){const l=(yield(0,n.Io)(`${t.getChainControllerById(r).getConfig().network.explorer}/api?module=contract&action=getsourcecode&address=${o[r]}`)).result[0].ABI;return new s.CH(a,l,i)}},new Promise(((e,t)=>{var r=e=>{try{s(d.next(e))}catch(e){t(e)}},a=e=>{try{s(d.throw(e))}catch(e){t(e)}},s=t=>t.done?e(t.value):Promise.resolve(t.value).then(r,a);s((d=d.apply(l,c)).next())}));var l,c,d}},869741:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>m});var s=r(496486),n=r(667294),o=r(50533),i=r(691438),l=r(281672),c=r(578100),d=r(556138),u=r(636154),g=r(144191),p=r(194025),h=e([l,p]);[l,p]=h.then?(await h)():h;const m=(e,t)=>{const{wallets:r,activeWalletId:a,filterOptions:h}=(0,o.v9)((e=>e.wallets)),m=t||a,{activeNFTChain:y}=(0,o.v9)((e=>e.settings)),f=(0,l.fU)(),b=(0,l.JB)(),v=r[m],[x,w]=(0,n.useState)([]),[P,C]=(0,n.useState)(""),[F,T]=(0,n.useState)(!1),[I]=(0,p.o)(t),{nftLoading:A,nftIdOrders:$,hiddenNFTIDs:k}=null!=v?v:{},_=(0,n.useMemo)((()=>(null==h?void 0:h.collectibleFilter)||{}),[null==h?void 0:h.collectibleFilter]),[S,Z]=(0,n.useState)(null!=y?y:"all"),[D,N]=(0,c.m)({initial:m,reference:"nftOldWalletId",rememberForFiveMin:!0});(0,n.useEffect)((()=>{f.updateNFTData(m)}),[m,f]),(0,n.useEffect)((()=>{A||T(!0)}),[A]);const j=(0,n.useRef)((0,s.debounce)(((e,t,r)=>{w((0,g.K)(e,t,r))}),u.l0));(0,n.useEffect)((()=>{let e=(0,s.map)(I,(e=>e)).flat(1);e=(0,g.K)(P,e,$),w(e)}),[I,P,$]),(0,n.useEffect)((()=>{if(0===Object.keys(I).length)return;const e=(0,s.map)(I,(e=>e)).flat(1);j.current(P,e,$)}),[I,$,P]);const B=(0,n.useCallback)((e=>{Z(e),b.updateActiveNFTChain(e)}),[b]),E=(0,n.useMemo)((()=>{if(e)return f.getChainControllerByFeature(i.B.NftSend).map((e=>e.getId()));if(v.walletInfo.type===d.WalletType.PkKeystore){const e=f.getChainControllerById(v.selectedChainId);if([i.J.Evm,i.J.Cosmos].includes(e.getType())){const t=e.getType();return f.getChainControllersByType(t).filter((e=>e.support(i.B.Nft))).map((e=>e.getId()))}return[e.getId()]}return f.getChainControllerByFeature(i.B.Nft).map((e=>e.getId()))}),[v.selectedChainId,v.walletInfo.type,e]),O=(0,n.useMemo)((()=>"all"===S?x.filter((e=>E.includes(e.chainId))):S===i.J.Evm?x.filter((e=>f.getChainControllerById(e.chainId).getType()===i.J.Evm)):S===i.J.Cosmos?x.filter((e=>f.getChainControllerById(e.chainId).getType()===i.J.Cosmos)):x.filter((e=>e.chainId===S))),[S,x,E]),L=(0,n.useMemo)((()=>O.filter((e=>!k.includes(e.nftItem.id)))),[O,k]),G=(0,n.useMemo)((()=>O.filter((e=>k.includes(e.nftItem.id)))),[O,k]);(0,n.useEffect)((()=>{D!==m&&(B("all"),N(m))}),[m,E,B,D,N]);const M=(0,n.useCallback)((e=>{f.hideNFT(m,e)}),[m,f]),R=(0,n.useCallback)((e=>{f.unhideNFT(m,e)}),[m,f]);return{currentItems:O,isLoaded:F,setSearchKeyword:C,searchKeyword:P,filterOption:_,hiddenNFTIDs:k,nftLoading:A,selectedChain:S,changeCurrentItems:w,selectChain:Z,setIsLoaded:T,handleSelectChains:B,chains:E,visibleNFTs:L,hiddenNFTs:G,hideNFT:M,unhideNFT:R}};a()}catch(e){a(e)}}))},194025:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{o:()=>c});var s=r(496486),n=r(667294),o=r(50533),i=r(281672),l=e([i]);i=(l.then?(await l)():l)[0];const c=e=>{const{wallets:t,activeWalletId:r}=(0,o.v9)((e=>e.wallets)),a=e||r,l=(0,i.fU)();return(0,n.useMemo)((()=>{var e;const r=(null==(e=t[a])?void 0:e.chainData)||{};return[l.getAllChainControllers().reduce(((e,t)=>{const a=r[t.getId()];return a?(e[t.getId()]=(0,s.reduce)(a.nft||{},((e,r)=>(e.push({nftItem:r,chainId:t.getId()}),e)),[]),e):e}),{})]}),[r,l,t])};a()}catch(e){a(e)}}))},741797:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Aw:()=>g,te:()=>p,z_:()=>u});var s=r(667294),n=r(281672),o=r(505403),i=r(50533),l=r(831352),c=e([n,o]);[n,o]=c.then?(await c)():c;var d=Math.pow;const u=e=>{const t=(0,n.UW)(),r=(0,i.v9)((t=>{var r;return t.balances[e||(null==(r=t.wallets)?void 0:r.activeWalletId)]})),{getFiatPriceForAmount:a}=(0,o.Z)();return(0,s.useCallback)((()=>{var e;const s=t.chains.getChainControllerById(l.yp.Bitcoin).getConfig(),n=null==(e=null==r?void 0:r.chains)?void 0:e[s.id],o=Number((null==n?void 0:n.ordinalBalance)||"0")/d(10,s.decimals);return{balance:o,fiat:a(s.id,o,s.chainSymbol)}}),[r.chains,a,t.chains])},g=e=>{const t=(0,n.UW)(),r=u(e),{getAssetFiatBalanceStr:a}=(0,o.Z)(),i=(0,s.useCallback)((r=>{var a;const{address:s,decimals:n}=t.getAssetAddressDecimals(r.chainId,r.token);return Number(t.getFormattedBalance({address:s,chainId:r.chainId,symbol:r.token.symbol,asset:null==(a=r.token)?void 0:a.asset,decimals:n},e))}),[e,t]);return{getAssetFiatBalance:(0,s.useCallback)((r=>{const{address:s,decimals:n}=t.getAssetAddressDecimals(r.chainId,r.token);return Number(a(r.chainId,r.token.symbol,s,n,r.token.id,!1,e))}),[t,a,e]),getAssetBalance:i,getAssetFiatBalanceStr:a,getOrdinalBalance:r}},p=(e,t,r)=>{const{getAssetFiatBalance:a,getAssetBalance:o,getOrdinalBalance:i}=g(t),c=(0,n.fU)(),[d,u]=(0,s.useState)({}),p=(0,s.useCallback)((()=>{const t=c.getChainControllerById(l.yp.Bitcoin),s=e.reduce(((e,s)=>{var n;const l=s.token.symbol?s.token.symbol.toUpperCase():"";if((null==(n=e[l])?void 0:n.assets)?(e[l].assets.push(s),e[l].fiat+=a(s),e[l].balance+=o(s)):e[l]={assets:[s],fiat:a(s),balance:o(s)},(null==r?void 0:r.withOrdinalBalance)&&s.isNativeAsset&&"BTC"===s.token.symbol&&t.getId()===s.chainId){const{balance:t,fiat:r}=i();e[l].balance+=t,e[l].fiat+=r}return e}),{});u(s)}),[e,c,o,a,i,null==r?void 0:r.withOrdinalBalance]);return(0,s.useEffect)((()=>{p();const e=setInterval(p,c.refreshRate.balances);return()=>clearInterval(e)}),[c.refreshRate.balances,p]),{groupedAsset:Object.values(d)}};a()}catch(e){a(e)}}))},437035:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{Z:()=>l});var s=r(667294),n=r(246858),o=r(741797),i=e([o]);o=(i.then?(await i)():i)[0];const l=e=>{const{getAssetFiatBalance:t}=(0,o.Aw)(),[r,a]=(0,s.useState)(n.n.Down),[i,l]=(0,s.useState)(n.n.Off),c=(0,s.useCallback)((e=>e.assets[0].token.isPinned||e.assets[0].isNativeTokenPinned?-1:1),[]),d=(0,s.useCallback)(((e,t)=>isNaN(e.fiat)?1:isNaN(t.fiat)?-1:1),[]),u=(0,s.useMemo)((()=>{switch(r){case n.n.Off:return()=>0;case n.n.Up:return(e,t)=>isNaN(e)?1:isNaN(t)||e<t?-1:e>t?1:0;case n.n.Down:return(e,t)=>isNaN(e)?-1:isNaN(t)||e<t?1:e>t?-1:0}}),[r]),g=(0,s.useMemo)((()=>{switch(r){case n.n.Off:return()=>0;case n.n.Up:return(e,t)=>{var r;return isNaN(e.fiat)?1:isNaN(t.fiat)||e.fiat<t.fiat?-1:e.fiat>t.fiat?1:"XDEFI"===(null==(r=e.assets[0].token.symbol)?void 0:r.toUpperCase())?-1:1};case n.n.Down:return(e,t)=>{var r;return isNaN(e.fiat)?-1:isNaN(t.fiat)||e.fiat<t.fiat?1:e.fiat>t.fiat||"XDEFI"===(null==(r=e.assets[0].token.symbol)?void 0:r.toUpperCase())?-1:1}}}),[r]),p=(0,s.useMemo)((()=>{switch(i){case n.n.Off:return()=>0;case n.n.Up:return(e,t)=>e.assets[0].token.symbol<t.assets[0].token.symbol?-1:1;case n.n.Down:return(e,t)=>t.assets[0].token.symbol<e.assets[0].token.symbol?-1:1}}),[i]);(0,s.useEffect)((()=>{i!==n.n.Off&&a(n.n.Off)}),[i]),(0,s.useEffect)((()=>{r!==n.n.Off&&l(n.n.Off)}),[r]);const h=(0,s.useMemo)((()=>i!==n.n.Off?p:(n.n.Off,g)),[p,g,i,r]);return{sortedAssets:(0,s.useMemo)((()=>(e.length>1&&e.map((e=>{e.assets.sort(((e,r)=>u(t(e),t(r))))})),e.sort(h).sort(d).sort(c))),[e,h,d,c,u,t]),setSortAssetStatus:l,setSortBalanceStatus:a,sortBalanceStatus:r,sortAssetStatus:i}};a()}catch(e){a(e)}}))},721746:(e,t,r)=>{r.a(e,(async(e,a)=>{try{r.d(t,{L:()=>m});var s=r(281672),n=r(667294),o=r(50533),i=r(680528),l=r(626423),c=r(691438),d=r(505403),u=r(739989),g=r(664837),p=r(578100),h=e([s,d,g]);[s,d,g]=h.then?(await h)():h;const m=(e,t)=>{const r=(0,s.fU)(),{activeWallet:a,activeWalletId:h}=(0,o.v9)((e=>{const{wallets:t,activeWalletId:r}=e.wallets;return{wallets:t,activeWalletId:r,activeWallet:t[r]}})),m=t||h,y=(0,s.UW)(),f=(0,s.JB)(),{currency:b,minBalance:v,activeAssetChain:x}=(0,o.v9)((e=>e.settings)),{getAssetFiatBalance:w}=(0,d.Z)(),[P,C]=(0,n.useState)(""),[F,T]=(0,n.useState)(x),[I,A]=(0,n.useState)([]),$=()=>{const e=f.getAllAssets(m);A(e)},k=(0,g.Z)(),_=(0,n.useMemo)((()=>k.calcTotal(!0)),[k]),[S,Z]=(0,p.m)({initial:m,reference:"assetsOldWalletId",rememberForFiveMin:!0});(0,n.useEffect)((()=>{$()}),[_,m,f]);const D=(0,n.useMemo)((()=>{const t=e&&i.dn>v?i.dn:v;return I.filter((a=>{try{const s=w(a.chainId,a.token);if(e&&0===s){const e=r.getBalance(a.chainId,a.token.symbol,a.token.address);return Number(e)>v}return s>=t}catch(e){return!0}}))}),[I,y,e,v,b]),N=(0,n.useMemo)((()=>(0,l._6)(D)),[D]),j=(0,n.useMemo)((()=>P?N.search(P).map((e=>e.item)):D),[D,N,P]),B=(0,s.fU)(),E=(0,n.useMemo)((()=>B.getAllChainControllers().map((e=>e.getId())).filter((e=>{var t;return Object.keys(null!=(t=null==a?void 0:a.chainData)?t:{}).includes(e)}))),[B,null==a?void 0:a.chainData]),O=(0,n.useMemo)((()=>"all"===F?j:[c.J.Evm,c.J.Cosmos].includes(F)?j.filter((e=>r.getChainControllersByType(F).map((e=>e.getId())).includes(e.chainId))):j.filter((e=>e.chainId===F))),[r,j,F]),L=(0,n.useMemo)((()=>{if(!e)return E;const t=D.reduce(((e,t)=>(e[t.chainId]=!0,e)),{});return"all"!==x&&(t[x]=!0),E.filter((e=>t[e]))}),[e,E,D,x]),G=(0,n.useCallback)((e=>{T(e),f.updateActiveAssetChain(e),y.updateTxChain(e);try{if("all"!==e){r.getChainControllerById(e).getType()===c.J.Evm&&y.dappsProviders.setWindowEthereumChain(e)}}catch(e){u.Z.error("chain is not value")}}),[f,y]),M=(0,n.useCallback)(((e,t)=>{f.togglePinnedToken(e.chainId,e.token.symbol,m,e.isNativeAsset,t),$()}),[m,f]);return(0,n.useEffect)((()=>{S!==m&&(G("all"),Z(m))}),[m,E,G,S,Z]),{assets:O,chains:L,handleSearch:C,selectedChain:F,handleSelectChain:G,togglePinnedToken:M,searchKeyword:P,refetchAssets:$,assetList:I}};a()}catch(e){a(e)}}))},458233:(e,t,r)=>{r.d(t,{I:()=>s});var a=r(667294);const s=e=>{const t=(0,a.useRef)(e);return t.current!==e&&(t.current=e),t}},578100:(e,t,r)=>{r.d(t,{m:()=>n});var a=r(667294);const s=e=>{const t=+Number(e);if(t)return+t;return{null:null,true:!0,false:!1}[e]},n=({initial:e,reference:t,rememberForFiveMin:r=!1})=>{const[n,o]=(0,a.useState)((()=>{const a=window.localStorage.getItem(t);if(r){const r=window.localStorage.getItem(`${t}-time`);if(r){const t=Date.parse(r.replaceAll('"',"").replaceAll("'","")),a=new Date(t);if((new Date).getTime()-a.getTime()>3e5)return e}}return a?(e=>{try{JSON.parse(e)}catch(e){return!1}return!0})(a)?JSON.parse(a):void 0!==s(a)?s(a):void 0:e}));return(0,a.useEffect)((()=>{const e=JSON.stringify(n);return window.localStorage.setItem(t,e),()=>{r?window.localStorage.setItem(`${t}-time`,JSON.stringify(new Date)):window.localStorage.removeItem(t)}}),[r,t,n]),[n,o]}},691448:(e,t,r)=>{e.exports=r.p+"1b9f300bedf5ca595d2e.png"},965735:(e,t,r)=>{e.exports=r.p+"91cf7d04b352f3092790.png"},290847:(e,t,r)=>{e.exports=r.p+"189754df38c341b6be48.png"},772774:(e,t,r)=>{e.exports=r.p+"94cb9136f69717efc930.png"}}]);