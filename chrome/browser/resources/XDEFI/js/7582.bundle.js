!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="45e376c0-0998-48df-beb8-28c5b87a2219",e._sentryDebugIdIdentifier="sentry-dbid-45e376c0-0998-48df-beb8-28c5b87a2219")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"29.0.3"},(self.webpackChunkxdefi_extension=self.webpackChunkxdefi_extension||[]).push([[7582],{878020:(e,t,n)=>{n.d(t,{Z:()=>f});var r=n(924262),o=n(619013),a=n(13882);function s(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}var i=n(504958),u=6e4,l=1440,c=30*l,d=365*l;function h(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};(0,a.Z)(2,arguments);var h=n.locale||i.Z;if(!h.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var f=function(e,t){(0,a.Z)(2,arguments);var n=(0,o.Z)(e),r=(0,o.Z)(t),s=n.getTime()-r.getTime();return s<0?-1:s>0?1:s}(e,t);if(isNaN(f))throw new RangeError("Invalid time value");var m,p,x=s(n);x.addSuffix=Boolean(n.addSuffix),x.comparison=f,f>0?(m=(0,o.Z)(t),p=(0,o.Z)(e)):(m=(0,o.Z)(e),p=(0,o.Z)(t));var g,b=null==n.roundingMethod?"round":String(n.roundingMethod);if("floor"===b)g=Math.floor;else if("ceil"===b)g=Math.ceil;else{if("round"!==b)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");g=Math.round}var y,v=p.getTime()-m.getTime(),w=v/u,S=(v-((0,r.Z)(p)-(0,r.Z)(m)))/u;if("second"===(y=null==n.unit?w<1?"second":w<60?"minute":w<l?"hour":S<c?"day":S<d?"month":"year":String(n.unit))){var Z=g(v/1e3);return h.formatDistance("xSeconds",Z,x)}if("minute"===y){var $=g(w);return h.formatDistance("xMinutes",$,x)}if("hour"===y){var j=g(w/60);return h.formatDistance("xHours",j,x)}if("day"===y){var D=g(S/l);return h.formatDistance("xDays",D,x)}if("month"===y){var X=g(S/c);return 12===X&&"month"!==n.unit?h.formatDistance("xYears",1,x):h.formatDistance("xMonths",X,x)}if("year"===y){var k=g(S/d);return h.formatDistance("xYears",k,x)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}function f(e,t){return(0,a.Z)(1,arguments),h(e,Date.now(),t)}},132077:(e,t,n)=>{n.a(e,(async(e,r)=>{try{n.d(t,{Z:()=>k});var o=n(785893),a=n(886597),s=n(506559),i=n(38187),u=n(458038),l=n(667294),c=n(771341),d=n(818117),h=n(950367),f=n(453251),m=n(150787),p=e([a]);a=(p.then?(await p)():p)[0];const x=({items:e,size:t,chainSrc:n,tokenImgSize:r,inlineChainWithToken:i=!0})=>{const{data:l,_size:c,restAmount:d,type:f}=(0,m.Y)(e,t,n);return(0,o.jsxs)(g,{$size:c,$length:l.length,children:[l.map(((t,u)=>(0,o.jsx)(S,{$step:u*h.Ss[c],$z_index:e.length-u,$size:c,"data-testid":"assetItem",children:n?(0,o.jsx)(a.Z,{img:t.src,chain:n,variant:r||s.e.Medium,withoutChain:0!==u,inlineWithToken:i,dataTestId:"tokenItem"}):(0,o.jsx)(D,{src:t.src,dataTestid:"nftItem"})},u))),d>0&&(0,o.jsx)($,{id:"rest",$size:c,children:(0,o.jsx)(u.Z,{children:`+${d} ${h.Cg[f]}`})})]})},g=d.ZP.div`
  height: ${({$size:e})=>e===f.X.Small?"48px":"72px"};
  position: relative;
  width: ${({$size:e,$length:t})=>e===f.X.Small?48+15*(t-1)+"px":72+30*(t-1)+"px"};
`,b=d.iv`
  width: 48px;
  height: 48px;
`,y=d.iv`
  width: 72px;
  height: 72px;
`,v=d.iv`
  bottom: -10px;
  left: 68px;
`,w=d.iv`
  bottom: -7px;
  left: 80px;
`,S=(0,d.ZP)(i.Z).attrs({flexDirections:"row",alignItems:"center",justifyContent:"center"})`
  position: absolute;
  ${({$size:e})=>e===f.X.Small?b:y}

  border-radius: 8px;
  top: 0;
  left: ${({$step:e})=>e}px;

  ${({$z_index:e})=>d.iv`
      z-index: ${e};
    `}
`,Z=d.ZP.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`,$=(0,d.ZP)(i.Z).attrs({flexDirections:"row",flexWrap:"nowrap",justifyContent:"center",alignItems:"center"})`
  position: absolute;
  ${({$size:e})=>e===f.X.Small?v:w}

  padding: 8px;
  min-width: 74px;
  width: fit-content;
  border-radius: 8px;
  z-index: 10;
  background: ${({theme:e})=>e.colors.steel};
`,j=(0,d.ZP)(i.Z).attrs({alignItems:"center",justifyContent:"center"})``,D=({src:e,dataTestid:t})=>{const n=(0,l.useCallback)((()=>{return t=void 0,n=null,r=function*(){return new Promise((t=>{const n=new Image;n.onload=()=>t(!0),n.onerror=()=>t(!1),n.src=e}))},new Promise(((e,o)=>{var a=e=>{try{i(r.next(e))}catch(e){o(e)}},s=e=>{try{i(r.throw(e))}catch(e){o(e)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(a,s);i((r=r.apply(t,n)).next())}));var t,n,r}),[e]),[r,a]=(0,l.useState)(!0);return(0,l.useEffect)((()=>{e&&n().then(a)}),[e,n]),r?(0,o.jsx)(Z,{src:e,"data-testid":t}):(0,o.jsx)(X,{})},X=()=>(0,o.jsx)(j,{children:(0,o.jsx)(c.Lo,{})}),k=x;r()}catch(e){r(e)}}))},950367:(e,t,n)=>{n.d(t,{Cg:()=>o,Ss:()=>a,aA:()=>s});var r=n(453251);const o={nft:"NFTs",asset:"Assets"},a={[r.X.Small]:16,[r.X.Large]:24},s={[r.X.Small]:6,[r.X.Large]:4}},453251:(e,t,n)=>{n.d(t,{X:()=>r});var r=(e=>(e.Small="Small",e.Large="Large",e))(r||{})},150787:(e,t,n)=>{n.d(t,{Y:()=>a});var r=n(453251),o=n(950367);const a=(e,t,n)=>{const a=t||(n||e.length>4?r.X.Small:r.X.Large),s=o.aA[a],i=n?"asset":"nft",{data:u,restAmount:l}=e.length>s?{data:e.slice(0,s),restAmount:e.length-s}:{data:e,restAmount:0};return{_size:a,type:i,data:u,restAmount:l,maxItems:s}}},529373:(e,t,n)=>{n.d(t,{j:()=>p});var r=n(504958),o=n(878020),a=Object.defineProperty,s=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))c.call(t,n)&&d(e,n,t[n]);return e};const f={lessThanXSeconds:{one:"less than a sec",other:"less than {{count}} secs"},xSeconds:{one:"1 sec",other:"{{count}} secs"},halfAMinute:"30 secs",lessThanXMinutes:{one:"less than a min",other:"less than {{count}} mins"},xMinutes:{one:"1 min",other:"{{count}} mins"},aboutXHours:{one:"about 1 hr",other:"about {{count}} hrs"},xHours:{one:"1 hr",other:"{{count}} hrs"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},m=(e,t,n={})=>{let r;const o=f[e];return r="string"==typeof o?o:1===t?o.one:o.other.replace("{{count}}",t.toString()),(null==n?void 0:n.addSuffix)?r+" ago":r},p=e=>{return(0,o.Z)(e,{addSuffix:!0,locale:(t=h({},r.Z),n={formatDistance:m},s(t,i(n)))});var t,n}}}]);