(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[332],{1026:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let i=r(4232);function n(e,t){let r=(0,i.useRef)(null),n=(0,i.useRef)(null);return(0,i.useCallback)(i=>{if(null===i){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=o(e,i)),t&&(n.current=o(t,i))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2439:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return w}});let i=r(4252),n=r(8365),o=r(7876),l=n._(r(4232)),s=i._(r(8477)),a=i._(r(9836)),u=r(4915),d=r(6904),c=r(72);r(546);let f=r(8265),p=i._(r(3829)),g=r(1026),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/p5-repository/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function h(e,t,r,i,n,o,l){let s=null==e?void 0:e.src;e&&e["data-loaded-src"]!==s&&(e["data-loaded-src"]=s,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&n(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,n=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>n,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{n=!0,t.stopPropagation()}})}(null==i?void 0:i.current)&&i.current(e)}}))}function v(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}let b=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:i,sizes:n,height:s,width:a,decoding:u,className:d,style:c,fetchPriority:f,placeholder:p,loading:m,unoptimized:b,fill:_,onLoadRef:w,onLoadingCompleteRef:y,setBlurComplete:j,setShowAltText:x,sizesInput:E,onLoad:S,onError:O,...C}=e,P=(0,l.useCallback)(e=>{e&&(O&&(e.src=e.src),e.complete&&h(e,p,w,y,j,b,E))},[r,p,w,y,j,O,b,E]),R=(0,g.useMergedRef)(t,P);return(0,o.jsx)("img",{...C,...v(f),loading:m,width:a,height:s,decoding:u,"data-nimg":_?"fill":"1",className:d,style:c,sizes:n,srcSet:i,src:r,ref:R,onLoad:e=>{h(e.currentTarget,p,w,y,j,b,E)},onError:e=>{x(!0),"empty"!==p&&j(!0),O&&O(e)}})});function _(e){let{isAppRouter:t,imgAttributes:r}=e,i={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...v(r.fetchPriority)};return t&&s.default.preload?(s.default.preload(r.src,i),null):(0,o.jsx)(a.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...i},"__nimg-"+r.src+r.srcSet+r.sizes)})}let w=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(f.RouterContext),i=(0,l.useContext)(c.ImageConfigContext),n=(0,l.useMemo)(()=>{var e;let t=m||i||d.imageConfigDefault,r=[...t.deviceSizes,...t.imageSizes].sort((e,t)=>e-t),n=t.deviceSizes.sort((e,t)=>e-t),o=null==(e=t.qualities)?void 0:e.sort((e,t)=>e-t);return{...t,allSizes:r,deviceSizes:n,qualities:o}},[i]),{onLoad:s,onLoadingComplete:a}=e,g=(0,l.useRef)(s);(0,l.useEffect)(()=>{g.current=s},[s]);let h=(0,l.useRef)(a);(0,l.useEffect)(()=>{h.current=a},[a]);let[v,w]=(0,l.useState)(!1),[y,j]=(0,l.useState)(!1),{props:x,meta:E}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:n,blurComplete:v,showAltText:y});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(b,{...x,unoptimized:E.unoptimized,placeholder:E.placeholder,fill:E.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:w,setShowAltText:j,sizesInput:e.sizes,ref:t}),E.priority?(0,o.jsx)(_,{isAppRouter:!r,imgAttributes:x}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3657:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),!function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return a},getImageProps:function(){return s}});let i=r(4252),n=r(4915),o=r(2439),l=i._(r(3829));function s(e){let{props:t}=(0,n.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/p5-repository/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let a=o.Image},3757:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var i=r(7876),n=r(4232),o=r(4587),l=r.n(o);function s(){let[e,t]=(0,n.useState)([]);(0,n.useEffect)(()=>{console.log("Base path:",window.location.pathname)},[]);let r="/p5-repository";return(0,n.useEffect)(()=>{let e="".concat(r,"/manifest.json");console.log("Manifest path:",e),fetch(e).then(e=>e.json()).then(e=>t(e)).catch(e=>console.error("Failed to load sketches:",e))},[]),(0,i.jsx)("div",{className:"min-h-screen bg-purple-900",children:(0,i.jsx)("div",{className:"flex flex-wrap justify-center gap-6 p-4",children:e.map(e=>(0,i.jsxs)("a",{href:r+"/"+e.path,className:"flex flex-col items-center bg-gray-700 rounded-2xl shadow-lg p-4 hover:scale-105 hover:shadow-2xl transition-transform max-w-xs",children:[(0,i.jsx)(l(),{src:r+"/"+e.preview,alt:e.name,width:300,height:200,className:"object-cover"}),(0,i.jsx)("span",{className:"mt-2 text-center w-full",children:e.name})," "]},r+"/"+e.path))})})}},3829:(e,t)=>{"use strict";function r(e){var t;let{config:r,src:i,width:n,quality:o}=e,l=o||(null==(t=r.qualities)?void 0:t.reduce((e,t)=>Math.abs(t-75)<Math.abs(e-75)?t:e))||75;return r.path+"?url="+encodeURIComponent(i)+"&w="+n+"&q="+l+(i.startsWith("/_next/static/media/"),"")}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return i}}),r.__next_img_default=!0;let i=r},4587:(e,t,r)=>{e.exports=r(3657)},4915:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return s}}),r(546);let i=r(5284),n=r(6904);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function s(e,t){var r,s;let a,u,d,{src:c,sizes:f,unoptimized:p=!1,priority:g=!1,loading:m,className:h,quality:v,width:b,height:_,fill:w=!1,style:y,overrideSrc:j,onLoad:x,onLoadingComplete:E,placeholder:S="empty",blurDataURL:O,fetchPriority:C,decoding:P="async",layout:R,objectFit:z,objectPosition:M,lazyBoundary:N,lazyRoot:I,...k}=e,{imgConf:D,showAltText:A,blurComplete:T,defaultLoader:B}=t,F=D||n.imageConfigDefault;if("allSizes"in F)a=F;else{let e=[...F.deviceSizes,...F.imageSizes].sort((e,t)=>e-t),t=F.deviceSizes.sort((e,t)=>e-t),i=null==(r=F.qualities)?void 0:r.sort((e,t)=>e-t);a={...F,allSizes:e,deviceSizes:t,qualities:i}}if(void 0===B)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let G=k.loader||B;delete k.loader,delete k.srcSet;let L="__next_img_default"in G;if(L){if("custom"===a.loader)throw Object.defineProperty(Error('Image with src "'+c+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=G;G=t=>{let{config:r,...i}=t;return e(i)}}if(R){"fill"===R&&(w=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[R];e&&(y={...y,...e});let t={responsive:"100vw",fill:"100vw"}[R];t&&!f&&(f=t)}let W="",X=l(b),q=l(_);if((s=c)&&"object"==typeof s&&(o(s)||void 0!==s.src)){let e=o(c)?c.default:c;if(!e.src)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!e.height||!e.width)throw Object.defineProperty(Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e)),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(u=e.blurWidth,d=e.blurHeight,O=O||e.blurDataURL,W=e.src,!w){if(X||q){if(X&&!q){let t=X/e.width;q=Math.round(e.height*t)}else if(!X&&q){let t=q/e.height;X=Math.round(e.width*t)}}else X=e.width,q=e.height}}let U=!g&&("lazy"===m||void 0===m);(!(c="string"==typeof c?c:W)||c.startsWith("data:")||c.startsWith("blob:"))&&(p=!0,U=!1),a.unoptimized&&(p=!0),L&&!a.dangerouslyAllowSVG&&c.split("?",1)[0].endsWith(".svg")&&(p=!0);let V=l(v),J=Object.assign(w?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:z,objectPosition:M}:{},A?{}:{color:"transparent"},y),Y=T||"empty"===S?null:"blur"===S?'url("data:image/svg+xml;charset=utf-8,'+(0,i.getImageBlurSvg)({widthInt:X,heightInt:q,blurWidth:u,blurHeight:d,blurDataURL:O||"",objectFit:J.objectFit})+'")':'url("'+S+'")',H=Y?{backgroundSize:J.objectFit||"cover",backgroundPosition:J.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:Y}:{},$=function(e){let{config:t,src:r,unoptimized:i,width:n,quality:o,sizes:l,loader:s}=e;if(i)return{src:r,srcSet:void 0,sizes:void 0};let{widths:a,kind:u}=function(e,t,r){let{deviceSizes:i,allSizes:n}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let i;i=e.exec(r);i)t.push(parseInt(i[2]));if(t.length){let e=.01*Math.min(...t);return{widths:n.filter(t=>t>=i[0]*e),kind:"w"}}return{widths:n,kind:"w"}}return"number"!=typeof t?{widths:i,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>n.find(t=>t>=e)||n[n.length-1]))],kind:"x"}}(t,n,l),d=a.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:a.map((e,i)=>s({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:i+1)+u).join(", "),src:s({config:t,src:r,quality:o,width:a[d]})}}({config:a,src:c,unoptimized:p,width:X,quality:V,sizes:f,loader:G});return{props:{...k,loading:U?"lazy":m,fetchPriority:C,width:X,height:q,decoding:P,className:h,style:{...J,...H},sizes:$.sizes,srcSet:$.srcSet,src:j||$.src},meta:{unoptimized:p,priority:g,placeholder:S,fill:w}}}},5284:(e,t)=>{"use strict";function r(e){let{widthInt:t,heightInt:r,blurWidth:i,blurHeight:n,blurDataURL:o,objectFit:l}=e,s=i?40*i:t,a=n?40*n:r,u=s&&a?"viewBox='0 0 "+s+" "+a+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},6760:(e,t,r)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(3757)}])}},e=>{var t=t=>e(e.s=t);e.O(0,[636,593,792],()=>t(6760)),_N_E=e.O()}]);