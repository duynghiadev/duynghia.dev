(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[457],{5832:function(e,t,r){var n=r(6762),l=r(4331);e.exports=function(e,t,r){var i=!0,o=!0;if("function"!=typeof e)throw TypeError("Expected a function");return l(r)&&(i="leading"in r?!!r.leading:i,o="trailing"in r?!!r.trailing:o),n(e,t,{leading:i,maxWait:t,trailing:o})}},1750:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(2310),l={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),o=(e,t)=>{let r=(0,n.forwardRef)(({color:r="currentColor",size:o=24,strokeWidth:s=2,absoluteStrokeWidth:a,children:c,...d},u)=>(0,n.createElement)("svg",{ref:u,...l,width:o,height:o,stroke:r,strokeWidth:a?24*Number(s)/Number(o):s,className:`lucide lucide-${i(e)}`,...d},[...t.map(([e,t])=>(0,n.createElement)(e,t)),...(Array.isArray(c)?c:[c])||[]]));return r.displayName=`${e}`,r}},1641:function(e,t,r){"use strict";r.d(t,{Z:function(){return l}});var n=r(1750);let l=(0,n.Z)("ArrowRight",[["line",{x1:"5",x2:"19",y1:"12",y2:"12",key:"13b5wn"}],["polyline",{points:"12 5 19 12 12 19",key:"sfr3i6"}]])},2114:function(e,t,r){Promise.resolve().then(r.t.bind(r,3238,23)),Promise.resolve().then(r.bind(r,6812)),Promise.resolve().then(r.bind(r,7147))},3238:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{suspense:function(){return l},NoSSR:function(){return i}}),r(6927),r(2310);let n=r(5978);function l(){let e=Error(n.NEXT_DYNAMIC_NO_SSR_CODE);throw e.digest=n.NEXT_DYNAMIC_NO_SSR_CODE,e}function i(e){let{children:t}=e;return t}},7147:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return b}});var n=r(3955),l=r(6762),i=r.n(l),o=r(2310),s=r(8675),a=function(){let[e,t]=(0,o.useState)("desktop"),[r,n]=(0,o.useState)(0),l=i()(()=>{let e="";window.innerWidth>768&&(e="desktop"),window.innerWidth>525&&window.innerWidth<=768&&(e="tablet"),window.innerWidth<=525&&(e="mobile"),n(window.innerWidth),t(e)},200);return(0,o.useEffect)(()=>{l()},[]),(0,s.Z)("resize",l),{device:e,screenSize:r}},c=r(9708),d=r(226),u=r(9128),f=r(4474),m=r(4835),h=r(6008),p=r(8975),x=r(9791),g=r(4181),w=e=>{let{active:t}=e;return(0,n.jsx)("div",{className:(0,x.Z)("text-foreground bg-background fixed top-0 left-0 w-full h-screen pointer-events-none","grid place-items-center","z-[999]",t?"opacity-1":"opacity-0 -z-[999] transition-all duration-300 ease-linear"),children:(0,n.jsx)(g.Z,{className:"animate-spin-slow",enableLogo:!0})})};let v={desktop:.1,tablet:.2,mobile:.2},y=(0,o.forwardRef)((e,t)=>{let{children:r,sectionInnerProps:l,asChild:i,asStackedScroll:s,asHorizontalScroll:a,enableSectionInner:d=!0,...u}=e,f=i?c.g7:"div",m=d?"div":o.Fragment;return(0,n.jsx)(f,{...u,ref:t,className:(0,x.Z)(u.className,"smoother-scroll-section",{"!max-h-fit":a}),"data-scroll-horizontal":a?"true":void 0,"data-scroll-stacked":s?"true":void 0,"data-scroll-section":!0,children:(0,n.jsx)(m,{...d?{className:(0,x.Z)(null==l?void 0:l.className,"section-inner w-full max-h-fit")}:{},children:(0,o.cloneElement)(r,{"data-scroll-in-section":a||s,className:(0,x.Z)(r.props.className,"w-full h-full")})})})});y.displayName="SmootherScrollSection",d.p8.registerPlugin(u.ScrollTrigger);let N=e=>{let{asChild:t,options:r,children:l}=e,i=(0,h.usePathname)(),{device:s}=a(),x=(0,o.useRef)(null),g=t?c.g7:"div",[y,N]=(0,o.useState)(!1),b=(0,o.useCallback)(e=>{if(e){let t=v[s];return new f.ZP({lerp:t,smooth:!0,...r,smartphone:{smooth:!0},tablet:{breakpoint:768.5,smooth:!0},resetNativeScroll:!0,el:e})}return null},[JSON.stringify(r),s]),S=e=>{e.on("scroll",(0,m.debounce)(()=>{N(!0)},200))};return(0,o.useLayoutEffect)(()=>{if(x.current){N(!1);let e=x.current,t=b(e);if(t){S(t),t.on("scroll",u.ScrollTrigger.update);let r=e.style.transform?"transform":"fixed";u.ScrollTrigger.scrollerProxy(e,{scrollTop(e){var r;return arguments.length?t.scrollTo(e,0,0):null===(r=t.scroll)||void 0===r?void 0:r.instance.scroll.y},getBoundingClientRect:()=>({top:0,left:0,width:window.innerWidth,height:window.innerHeight}),pinType:r});let n=document.querySelectorAll(".smoother-scroll-section");n.forEach(r=>{let n=r.querySelector(".section-inner");if(r.hasAttribute("data-scroll-horizontal")){let t=r.querySelector("[data-scroll-in-section]");u.ScrollTrigger.create({scroller:e,trigger:r,start:"center center",end:()=>"+=".concat(r.scrollWidth+window.innerHeight),pin:n,pinSpacing:!0,anticipatePin:1,pinType:"transform"}),d.p8.to(t,{x:()=>"".concat(-(r.scrollWidth-document.documentElement.clientWidth),"px"),ease:"none",scrollTrigger:{trigger:t,scroller:e,start:"center center",end:()=>"+=".concat(r.scrollWidth+800),scrub:!0}})}r.hasAttribute("data-scroll-stacked"),u.ScrollTrigger.addEventListener("refresh",()=>{t.update()}),u.ScrollTrigger.refresh()})}return()=>{null==t||t.destroy()}}},[i,x,b]),(0,p.Z)(()=>{u.ScrollTrigger.refresh()},300,[i,s]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(g,{ref:x,"data-scroll-container":!0,style:{perspective:"1px"},children:l}),(0,n.jsx)(w,{active:!y})]})};N.ScrollSection=y;var b=N},6812:function(e,t,r){"use strict";r.r(t);var n=r(3955),l=r(9791),i=r(5832),o=r.n(i),s=r(1641),a=r(8675);t.default=()=>((0,a.Z)("mousemove",o()(e=>{let t=e.target,r=t.nodeName,n={BUTTON:!0,A:!0},l=null==n?void 0:n[r],[i,o]=[e.clientX,e.clientY];document.documentElement.style.setProperty("--pursuer-x","".concat(i-16,"px")),document.documentElement.style.setProperty("--pursuer-y","".concat(o-16,"px")),document.documentElement.style.setProperty("--pursuer-scale",l?"10":"1")},1)),(0,n.jsx)("div",{className:(0,l.Z)("w-8 h-8 rounded-full border border-gray-50/20 z-10 absolute top-0 left-0 transition-transform duration-300 ease-out pointer-events-none","hidden md:flex items-center justify-center"),style:{mixBlendMode:"difference",transform:"translateX(var(--pursuer-x)) translateY(var(--pursuer-y)) translateZ(0)"},children:(0,n.jsx)("div",{className:"relative w-2 h-2 rounded-full bg-white dark:bg-white transition duration-300 ease-out",style:{transform:"scale(var(--pursuer-scale))",transformOrigin:"center center"},children:(0,n.jsx)("span",{className:"text-[2px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black",children:(0,n.jsx)(s.Z,{className:"w-[4px] h-[4px]"})})})}))},4181:function(e,t,r){"use strict";var n=r(3955),l=r(9791),i=r(6394),o=r.n(i),s=r(1607);t.Z=e=>{let{enableLogo:t,...r}=e;return(0,s.Z)(),(0,n.jsx)("div",{...r,className:(0,l.Z)(r.className),children:(0,n.jsxs)("div",{className:"w-full h-full relative",children:[t?(0,n.jsx)("div",{className:(0,l.Z)("w-[100px] md:w-[170px] h-[100px] md:h-[170px] rounded-full bg-background","flex items-center justify-center text-3xl font-bold"),children:"T"}):(0,n.jsx)(o(),{width:170,height:170,className:"rounded-full max-w-[100px] md:max-w-[170px] max-h-[100px] md:max-h-[170px] object-cover",src:"/avatar-small.jpg",alt:"Personal"}),(0,n.jsxs)("svg",{viewBox:"0 0 100 100",width:"280",height:"280",className:"absolute w-[180px] md:w-[280px] h-[180px] md:h-[280px] -top-[40px] md:-top-[56px] -left-[40px] md:-left-[56px] rotate-90",children:[(0,n.jsx)("defs",{children:(0,n.jsx)("path",{id:"circle",d:"   M 50, 50   m -37, 0   a 37,37 0 1,1 74,0   a 37,37 0 1,1 -74,0"})}),(0,n.jsx)("text",{fontSize:"11.5",className:"text-gray-950 dark:fill-gray-50",children:(0,n.jsx)("textPath",{xlinkHref:"#circle",children:"- Le Nguyen Duy Nghia - Front-end Developer"})})]})]})})}}},function(e){e.O(0,[180,224,533,704,801,744],function(){return e(e.s=2114)}),_N_E=e.O()}]);