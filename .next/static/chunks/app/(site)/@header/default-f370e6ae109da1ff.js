(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[258],{1750:function(e,t,r){"use strict";r.d(t,{Z:function(){return s}});var n=r(2310),l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),s=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:s=24,strokeWidth:i=2,absoluteStrokeWidth:o,children:c,...d},m)=>(0,n.createElement)("svg",{ref:m,...l,width:s,height:s,stroke:r,strokeWidth:o?24*Number(i)/Number(s):i,className:`lucide lucide-${a(e)}`,...d},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...(Array.isArray(c)?c:[c])||[]]));return r.displayName=`${e}`,r}},8709:function(e,t,r){"use strict";r.d(t,{F:function(){return c},f:function(){return d}});var n=r(2310);let l=["light","dark"],a="(prefers-color-scheme: dark)",s="undefined"==typeof window,i=(0,n.createContext)(void 0),o={setTheme:e=>{},themes:[]},c=()=>{var e;return null!==(e=(0,n.useContext)(i))&&void 0!==e?e:o},d=e=>(0,n.useContext)(i)?n.createElement(n.Fragment,null,e.children):n.createElement(h,e),m=["light","dark"],h=({forcedTheme:e,disableTransitionOnChange:t=!1,enableSystem:r=!0,enableColorScheme:s=!0,storageKey:o="theme",themes:c=m,defaultTheme:d=r?"system":"light",attribute:h="data-theme",value:g,children:y,nonce:v})=>{let[w,k]=(0,n.useState)(()=>f(o,d)),[b,j]=(0,n.useState)(()=>f(o)),N=g?Object.values(g):c,S=(0,n.useCallback)(e=>{let n=e;if(!n)return;"system"===e&&r&&(n=x());let a=g?g[n]:n,i=t?p():null,o=document.documentElement;if("class"===h?(o.classList.remove(...N),a&&o.classList.add(a)):a?o.setAttribute(h,a):o.removeAttribute(h),s){let e=l.includes(d)?d:null,t=l.includes(n)?n:e;o.style.colorScheme=t}null==i||i()},[]),$=(0,n.useCallback)(e=>{k(e);try{localStorage.setItem(o,e)}catch(e){}},[e]),T=(0,n.useCallback)(t=>{let n=x(t);j(n),"system"===w&&r&&!e&&S("system")},[w,e]);(0,n.useEffect)(()=>{let e=window.matchMedia(a);return e.addListener(T),T(e),()=>e.removeListener(T)},[T]),(0,n.useEffect)(()=>{let e=e=>{e.key===o&&$(e.newValue||d)};return window.addEventListener("storage",e),()=>window.removeEventListener("storage",e)},[$]),(0,n.useEffect)(()=>{S(null!=e?e:w)},[e,w]);let E=(0,n.useMemo)(()=>({theme:w,setTheme:$,forcedTheme:e,resolvedTheme:"system"===w?b:w,themes:r?[...c,"system"]:c,systemTheme:r?b:void 0}),[w,$,e,b,r,c]);return n.createElement(i.Provider,{value:E},n.createElement(u,{forcedTheme:e,disableTransitionOnChange:t,enableSystem:r,enableColorScheme:s,storageKey:o,themes:c,defaultTheme:d,attribute:h,value:g,children:y,attrs:N,nonce:v}),y)},u=(0,n.memo)(({forcedTheme:e,storageKey:t,attribute:r,enableSystem:s,enableColorScheme:i,defaultTheme:o,value:c,attrs:d,nonce:m})=>{let h="system"===o,u="class"===r?`var d=document.documentElement,c=d.classList;c.remove(${d.map(e=>`'${e}'`).join(",")});`:`var d=document.documentElement,n='${r}',s='setAttribute';`,f=i?l.includes(o)&&o?`if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${o}'`:"if(e==='light'||e==='dark')d.style.colorScheme=e":"",p=(e,t=!1,n=!0)=>{let a=c?c[e]:e,s=t?e+"|| ''":`'${a}'`,o="";return i&&n&&!t&&l.includes(e)&&(o+=`d.style.colorScheme = '${e}';`),"class"===r?o+=t||a?`c.add(${s})`:"null":a&&(o+=`d[s](n,${s})`),o},x=e?`!function(){${u}${p(e)}}()`:s?`!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${h})){var t='${a}',m=window.matchMedia(t);if(m.media!==t||m.matches){${p("dark")}}else{${p("light")}}}else if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}${h?"":"else{"+p(o,!1,!1)+"}"}${f}}catch(e){}}()`:`!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${c?`var x=${JSON.stringify(c)};`:""}${p(c?"x[e]":"e",!0)}}else{${p(o,!1,!1)};}${f}}catch(t){}}();`;return n.createElement("script",{nonce:m,dangerouslySetInnerHTML:{__html:x}})},()=>!0),f=(e,t)=>{let r;if(!s){try{r=localStorage.getItem(e)||void 0}catch(e){}return r||t}},p=()=>{let e=document.createElement("style");return e.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(e),()=>{window.getComputedStyle(document.body),setTimeout(()=>{document.head.removeChild(e)},1)}},x=e=>(e||(e=window.matchMedia(a)),e.matches?"dark":"light")},1781:function(e,t,r){Promise.resolve().then(r.bind(r,1659))},1659:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(3955),l=r(7147),a=r(9791),s=r(6008),i=r(5363),o=r(9708),c=r(5846),d=r.n(c),m=r(1750);let h=(0,m.Z)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]),u=(0,m.Z)("Presentation",[["path",{d:"M2 3h20",key:"91anmk"}],["path",{d:"M21 3v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3",key:"2k9sn8"}],["path",{d:"m7 21 5-5 5 5",key:"bip4we"}]]),f=(0,m.Z)("Box",[["path",{d:"M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z",key:"yt0hxn"}],["polyline",{points:"3.29 7 12 12 20.71 7",key:"ousv84"}],["line",{x1:"12",x2:"12",y1:"22",y2:"12",key:"a4e8g8"}]]),p=(0,m.Z)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),x=(0,m.Z)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);var g=r(8709),y=r(2310);let v=()=>{let{theme:e,setTheme:t}=(0,g.F)(),r=(0,y.useMemo)(()=>({dark:"light",light:"dark"}),[]),l="dark"===e?p:x;return(0,n.jsx)(l,{className:"w-4 h-4 cursor-pointer",onClick:()=>t((null==r?void 0:r[e])||"dark")})},w=e=>{let{...t}=e;return(0,n.jsx)(o.g7,{...t,className:"font-medium dark:text-gray-50 uppercase text-sm"})};var k=()=>(0,n.jsxs)(i.Z,{className:"relative flex gap-4",children:[(0,n.jsx)("h1",{className:"font-bold tracking-widest text-2xl whitespace-nowrap",children:(0,n.jsx)(d(),{href:"/",children:"Duy Nghia."})}),(0,n.jsxs)("div",{className:"ml-auto flex items-center gap-6",children:[(0,n.jsx)(w,{children:(0,n.jsxs)(d(),{href:"/about-me",children:[(0,n.jsx)("span",{className:"hidden md:inline-block",children:"About me"}),(0,n.jsx)(h,{className:"inline-block md:hidden w-5 h-5"})]})}),(0,n.jsx)(w,{children:(0,n.jsxs)(d(),{href:"/projects",children:[(0,n.jsx)("span",{className:"hidden md:inline-block",children:"Projects"}),(0,n.jsx)(u,{className:"inline-block md:hidden w-5 h-5"})]})}),(0,n.jsx)(w,{children:(0,n.jsxs)("a",{target:"_blank",href:"/LeNguyenDuyNghia%20-%20Software%20Engineer.pdf",children:[(0,n.jsx)("span",{className:"hidden md:inline-block",children:"Resume"}),(0,n.jsx)(f,{className:"inline-block md:hidden w-5 h-5"})]})}),(0,n.jsx)(v,{})]})]}),b=()=>{let e=(0,s.usePathname)(),t=/\/projects\/*./g.test(e);return(0,n.jsx)(l.default.ScrollSection,{className:(0,a.Z)("h-[72px] flex items-center",{"bg-gray-100 dark:bg-[#0045fa]":t}),children:(0,n.jsx)(k,{})})}},5363:function(e,t,r){"use strict";var n=r(3955),l=r(8917);let a=(0,l.j)("w-full px-6",{variants:{variant:{base:"max-w-[1140px] mx-auto"}},defaultVariants:{variant:"base"}});t.Z=e=>{let{className:t,...r}=e;return(0,n.jsx)("div",{...r,className:a({className:t}),children:r.children})}},7147:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(3955),l=r(6762),a=r.n(l),s=r(2310),i=r(8675),o=function(){let[e,t]=(0,s.useState)("desktop"),[r,n]=(0,s.useState)(0),l=a()(()=>{let e="";window.innerWidth>768&&(e="desktop"),window.innerWidth>525&&window.innerWidth<=768&&(e="tablet"),window.innerWidth<=525&&(e="mobile"),n(window.innerWidth),t(e)},200);return(0,s.useEffect)(()=>{l()},[]),(0,i.Z)("resize",l),{device:e,screenSize:r}},c=r(9708),d=r(226),m=r(9128),h=r(4474),u=r(4835),f=r(6008),p=r(8975),x=r(9791),g=r(4181),y=e=>{let{active:t}=e;return(0,n.jsx)("div",{className:(0,x.Z)("text-foreground bg-background fixed top-0 left-0 w-full h-screen pointer-events-none","grid place-items-center","z-[999]",t?"opacity-1":"opacity-0 -z-[999] transition-all duration-300 ease-linear"),children:(0,n.jsx)(g.Z,{className:"animate-spin-slow",enableLogo:!0})})};let v={desktop:.1,tablet:.2,mobile:.2},w=(0,s.forwardRef)((e,t)=>{let{children:r,sectionInnerProps:l,asChild:a,asStackedScroll:i,asHorizontalScroll:o,enableSectionInner:d=!0,...m}=e,h=a?c.g7:"div",u=d?"div":s.Fragment;return(0,n.jsx)(h,{...m,ref:t,className:(0,x.Z)(m.className,"smoother-scroll-section",{"!max-h-fit":o}),"data-scroll-horizontal":o?"true":void 0,"data-scroll-stacked":i?"true":void 0,"data-scroll-section":!0,children:(0,n.jsx)(u,{...d?{className:(0,x.Z)(null==l?void 0:l.className,"section-inner w-full max-h-fit")}:{},children:(0,s.cloneElement)(r,{"data-scroll-in-section":o||i,className:(0,x.Z)(r.props.className,"w-full h-full")})})})});w.displayName="SmootherScrollSection",d.p8.registerPlugin(m.ScrollTrigger);let k=e=>{let{asChild:t,options:r,children:l}=e,a=(0,f.usePathname)(),{device:i}=o(),x=(0,s.useRef)(null),g=t?c.g7:"div",[w,k]=(0,s.useState)(!1),b=(0,s.useCallback)(e=>{if(e){let t=v[i];return new h.ZP({lerp:t,smooth:!0,...r,smartphone:{smooth:!0},tablet:{breakpoint:768.5,smooth:!0},resetNativeScroll:!0,el:e})}return null},[JSON.stringify(r),i]),j=e=>{e.on("scroll",(0,u.debounce)(()=>{k(!0)},200))};return(0,s.useLayoutEffect)(()=>{if(x.current){k(!1);let e=x.current,t=b(e);if(t){j(t),t.on("scroll",m.ScrollTrigger.update);let r=e.style.transform?"transform":"fixed";m.ScrollTrigger.scrollerProxy(e,{scrollTop(e){var r;return arguments.length?t.scrollTo(e,0,0):null===(r=t.scroll)||void 0===r?void 0:r.instance.scroll.y},getBoundingClientRect:()=>({top:0,left:0,width:window.innerWidth,height:window.innerHeight}),pinType:r});let n=document.querySelectorAll(".smoother-scroll-section");n.forEach(r=>{let n=r.querySelector(".section-inner");if(r.hasAttribute("data-scroll-horizontal")){let t=r.querySelector("[data-scroll-in-section]");m.ScrollTrigger.create({scroller:e,trigger:r,start:"center center",end:()=>"+=".concat(r.scrollWidth+window.innerHeight),pin:n,pinSpacing:!0,anticipatePin:1,pinType:"transform"}),d.p8.to(t,{x:()=>"".concat(-(r.scrollWidth-document.documentElement.clientWidth),"px"),ease:"none",scrollTrigger:{trigger:t,scroller:e,start:"center center",end:()=>"+=".concat(r.scrollWidth+800),scrub:!0}})}r.hasAttribute("data-scroll-stacked"),m.ScrollTrigger.addEventListener("refresh",()=>{t.update()}),m.ScrollTrigger.refresh()})}return()=>{null==t||t.destroy()}}},[a,x,b]),(0,p.Z)(()=>{m.ScrollTrigger.refresh()},300,[a,i]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{ref:x,"data-scroll-container":!0,style:{perspective:"1px"},children:l}),(0,n.jsx)(y,{active:!w})]})};k.ScrollSection=w;var b=k},4181:function(e,t,r){"use strict";var n=r(3955),l=r(9791),a=r(6394),s=r.n(a),i=r(1607);t.Z=e=>{let{enableLogo:t,...r}=e;return(0,i.Z)(),(0,n.jsx)("div",{...r,className:(0,l.Z)(r.className),children:(0,n.jsxs)("div",{className:"w-full h-full relative",children:[t?(0,n.jsx)("div",{className:(0,l.Z)("w-[100px] md:w-[170px] h-[100px] md:h-[170px] rounded-full bg-background","flex items-center justify-center text-3xl font-bold"),children:"T"}):(0,n.jsx)(s(),{width:170,height:170,className:"rounded-full max-w-[100px] md:max-w-[170px] max-h-[100px] md:max-h-[170px] object-cover",src:"/avatar-small.jpg",alt:"Personal"}),(0,n.jsxs)("svg",{viewBox:"0 0 100 100",width:"280",height:"280",className:"absolute w-[180px] md:w-[280px] h-[180px] md:h-[280px] -top-[40px] md:-top-[56px] -left-[40px] md:-left-[56px] rotate-90",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:"circle",d:"   M 50, 50   m -37, 0   a 37,37 0 1,1 74,0   a 37,37 0 1,1 -74,0"})}),(0,n.jsx)("text",{fontSize:"11.5",className:"text-gray-950 dark:fill-gray-50",children:(0,n.jsx)("textPath",{xlinkHref:"#circle",children:"- Le Nguyen Duy Nghia - Front-end Developer"})})]})]})})}}},function(e){e.O(0,[180,224,533,110,704,801,744],function(){return e(e.s=1781)}),_N_E=e.O()}]);