"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[691],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function p(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,p=function(e,t){if(null==e)return{};var r,n,p={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(p[r]=e[r]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(p[r]=e[r])}return p}var l=n.createContext({}),a=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=a(e.components);return n.createElement(l.Provider,{value:t},e.children)},s="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,p=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=a(r),m=p,d=s["".concat(l,".").concat(m)]||s[m]||y[m]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:p,i[1]=c;for(var a=2;a<o;a++)i[a]=r[a];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3087:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>y,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var n=r(7462),p=(r(7294),r(3905));const o={title:"TypeScript 5.0 Deopt Explorer",description:"my hello page description"},i="TypeScript 5.0 Deopt Explorer",c={unversionedId:"typescript/TypeScript-Deopt-Explorer",id:"typescript/TypeScript-Deopt-Explorer",title:"TypeScript 5.0 Deopt Explorer",description:"my hello page description",source:"@site/docs/typescript/TypeScript-Deopt-Explorer.md",sourceDirName:"typescript",slug:"/typescript/TypeScript-Deopt-Explorer",permalink:"/LinHeMaIsCrusing/docs/typescript/TypeScript-Deopt-Explorer",draft:!1,editUrl:"https://github.com/LinHeMa/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/typescript/TypeScript-Deopt-Explorer.md",tags:[],version:"current",frontMatter:{title:"TypeScript 5.0 Deopt Explorer",description:"my hello page description"},sidebar:"tutorialSidebar",previous:{title:"\u52d5\u624b\u505aJavascript promise\u5143\u4ef6",permalink:"/LinHeMaIsCrusing/docs/typescript/BuildAPromise"},next:{title:"debounce \u8ddf throttle \u90a3\u4e9b\u524d\u7aef\u53ef\u4ee5\u512a\u5316\u7684\u90e8\u5206",permalink:"/LinHeMaIsCrusing/docs/typescript/debounceAndThrottle"}},l={},a=[{value:"Inline Cache",id:"inline-cache",level:2},{value:"Megamorphic",id:"megamorphic",level:2},{value:"Example 1 : \u56e0\u70ba\u9806\u5e8f\u800c\u5c0e\u81f4\u7684\u591a\u614b\u6027",id:"example-1--\u56e0\u70ba\u9806\u5e8f\u800c\u5c0e\u81f4\u7684\u591a\u614b\u6027",level:3},{value:"Example 2 : \u56e0\u7232\u689d\u4ef6\u521d\u59cb\u5316\u3001\u8ce6\u503c\u800c\u5c0e\u81f4\u7684\u591a\u614b",id:"example-2--\u56e0\u7232\u689d\u4ef6\u521d\u59cb\u5316\u8ce6\u503c\u800c\u5c0e\u81f4\u7684\u591a\u614b",level:3},{value:"\u8b58\u5225Megamorphic",id:"\u8b58\u5225megamorphic",level:2},{value:"Deopt Explorer",id:"deopt-explorer",level:2}],u={toc:a},s="wrapper";function y(e){let{components:t,...r}=e;return(0,p.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("h1",{id:"typescript-50-deopt-explorer"},"TypeScript 5.0 Deopt Explorer"),(0,p.kt)("h2",{id:"inline-cache"},"Inline Cache"),(0,p.kt)("p",null,"\u5728\u975c\u614b\u578b\u5225\uff08statically typed\uff09\u8207\u52d5\u614b\u578b\u5225\uff08dynamically typed\uff09\u8a9e\u8a00\u4e2d\uff0c\u900f\u904ecache\u5148\u524d\u7684\u7de8\u8b6f\u7d50\u679c\uff0c\u6e1b\u5c11runtime\u4ee5\u9054\u5230\u512a\u5316\u7684\u65b9\u6cd5\u8abf\u7528\uff08methods calling \uff09\u8ddf\u5c6c\u6027\u67e5\u627e\uff08property lookup\uff09\u3002\u900f\u904e\u904d\u6b77\u4e00\u500b\u7269\u4ef6\u7684\u539f\u578b\u934a\uff08prototype chain\uff09\uff0c\u4e26\u4e14\u5efa\u7acbcache\uff0c\u53ef\u4ee5\u5728\u4e4b\u5f8c\u5c0d\u65bc\u76f8\u540c\u7684\u67e5\u627e\u6e1b\u5c11\u67e5\u8a62\u6642\u9593\u3002\u88dc\u5145\uff1ajavascript VM"),(0,p.kt)("p",null,"\u900f\u904einline cache\uff0c\u7576\u865b\u64ec\u6a5f\u89c0\u5bdf\u5230\u53ea\u6709\u55ae\u614b\uff08Monomorphic\uff09\u6642\uff0c\u6548\u80fd\u6703\u986f\u8457\u7684\u63d0\u5347\u3002\u4f46\u662f\u7576\u865b\u64ec\u6a5f\u540c\u6642\u89c0\u5bdf\u5230\u8f03\u591a\u578b\u614b\uff08Polymorphic\u3001Megamorphic\uff09\u56e0\u70ba\u8986\u5beb\u3001\u91cd\u65b0\u6bd4\u8f03\u7684\u95dc\u4fc2\uff0c\u56e0\u6b64\u6703\u5c0e\u81f4cache\u7684\u529f\u6548\u958b\u59cb\u964d\u4f4e\u3002"),(0,p.kt)("h2",{id:"megamorphic"},"Megamorphic"),(0,p.kt)("p",null,"\u5728TypeScript\u4e2d\uff0c\u5927\u591a\u6578\u7684\u578b\u5225\u90fd\u662f\u8d85\u591a\u614b\uff08Megamorphic\uff09\uff0c\u7531\u65bc\u7a0b\u5f0f\u8a9e\u8a00\u7684\u6a39\u72c0\u7d50\u69cb\uff0c\u7406\u60f3\u7684\u60c5\u6cc1\u662f\u9032\u5165\u4e86\u8d8a\u4f86\u8d8a\u7d30\u7684\u7bc0\u9ede\uff0c\u578b\u614b\u7531\u591a\u614b\u6162\u6162\u8b8a\u6210\u55ae\u614b\u9032\u800c\u53ef\u4ee5\u900f\u904ecache\u7684\u5efa\u7acb\uff0c\u6e1b\u5c11\u6bcf\u6b21\u7684runtime\u3002"),(0,p.kt)("p",null,"\u4f46\u662f\u73fe\u5be6\u4e2d\u7e3d\u662f\u6709\u7279\u4f8b\uff0c\u7531\u65bcJavaScript\u8a9e\u8a00\u7684\u7279\u6027\uff0c\u5373\u6642\u662f\u7531\u540c\u4e00\u500bconstructor\u5efa\u69cb\u51fa\u4f86\u7684\u5169\u500bobjects\uff0c\u4ecd\u7136\u53ef\u80fd\u662f\u5169\u7a2e\u622a\u7136\u4e0d\u540c\u7684\u578b\u5225\uff08\u4f8b\u5982\uff1a\u521d\u59cb\u5316\u7684\u9806\u5e8f\u4e0d\u540c\u3001\u6709\u689d\u4ef6\u7684\u521d\u59cb\u5316\uff09\uff0c\u5c0e\u81f4\u5f88\u5e38\u767c\u751f\u975e\u9810\u671f\u7684Polymorphic\u3002"),(0,p.kt)("h3",{id:"example-1--\u56e0\u70ba\u9806\u5e8f\u800c\u5c0e\u81f4\u7684\u591a\u614b\u6027"},"Example 1 : \u56e0\u70ba\u9806\u5e8f\u800c\u5c0e\u81f4\u7684\u591a\u614b\u6027"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function f(x, y) {\n  if (x <= y) {\n    return { x, y };\n  }\n  else {\n    return { y, x };\n  }\n}\n\nfunction g(p) {\n  const x = p.x; // polymorphic\n}\n\ng(f(0, 1));\ng(f(1, 0));\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"\u56e0\u70bax, y\u7684\u4e0d\u540c\uff0c\u5c0e\u81f4\u5c6c\u6027\u9806\u5e8f\u7684\u4e0d\u540c\uff0c\u7121\u610f\u9593\u9020\u6210\u4e86\u591a\u614b\u3002")),(0,p.kt)("h3",{id:"example-2--\u56e0\u7232\u689d\u4ef6\u521d\u59cb\u5316\u8ce6\u503c\u800c\u5c0e\u81f4\u7684\u591a\u614b"},"Example 2 : \u56e0\u7232\u689d\u4ef6\u521d\u59cb\u5316\u3001\u8ce6\u503c\u800c\u5c0e\u81f4\u7684\u591a\u614b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function f(x, y) {\n  const p = {};\n  p.x = x;\n  if (y !== undefined) {\n    p.y = y;\n  }\n  return p;\n}\n\nfunction g(p) {\n  const x = p.x; // polymorphic\n}\n\ng(f(1));\ng(f(1, 0));\n")),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},"y\u7684\u5b58\u6709\u662f\u900f\u904ey\u7684\u503c\u689d\u4ef6\u8ce6\u4e88\u7684\uff0c\u9019\u6a23\u7684\u884c\u70ba\u4e5f\u6703\u5c0e\u81f4\u591a\u614b\u3002")),(0,p.kt)("h2",{id:"\u8b58\u5225megamorphic"},"\u8b58\u5225Megamorphic"),(0,p.kt)("p",null,"\u5728\u4e00\u500b\u9f90\u5927\u7684JavaScript\u7a0b\u5f0f\u78bclibrary\u4e2d\uff0c\u5224\u65b7\u662f\u5426\u5177\u6709Megamorphic\u4ee5\u53ca\u5224\u65b7\u8a72Megamorphic\u662f\u5426\u5c0d\u65bc\u6548\u80fd\u6709\u8ca0\u9762\u7684\u5f71\u97ff\u662f\u56f0\u96e3\u7684\u4e8b\uff0c\u56e0\u70ba\u6548\u7387\u4ee5\u53ca\u6a5f\u6703\u6210\u672c\uff0c\u6211\u5011\u61c9\u8a72\u9078\u64c7\u512a\u5148\u512a\u5316\u771f\u6b63\u5c0d\u65bc\u6574\u9ad4\u904b\u884c\u6548\u7387\u7522\u751f\u8ca0\u9762\u5f71\u97ff\u7684\u7a0b\u5f0f\u78bc\u3002"),(0,p.kt)("h2",{id:"deopt-explorer"},"Deopt Explorer"),(0,p.kt)("p",null,"\u4f7f\u7528Deopt Explorer\u7b49\u5de5\u5177\u80fd\u5920\u5e6b\u52a9\u958b\u767c\u4eba\u54e1\u5206\u6790\u548c\u89e3\u6c7aMegamorphic\u554f\u984c\u3002\u900f\u904e\u53ef\u8996\u5316\u7684\u5716\u8868\u548c\u5206\u6790V8\u5f15\u64ce\u7684\u53bb\u512a\u5316\u7a0b\u5f0f\u78bc\u5167\u90e8\u7684\u95dc\u806f\u60c5\u6cc1\u3001incline caches\uff0c\u6211\u5011\u80fd\u5920\u6df1\u5165\u4e86\u89e3\u7a0b\u5f0f\u78bc\u4e2d\u8d85\u591a\u614b\u6027\u554f\u984c\u7684\u6839\u6e90\uff0c\u4e26\u9032\u884c\u5fc5\u8981\u7684\u512a\u5316\u3002"))}y.isMDXComponent=!0}}]);