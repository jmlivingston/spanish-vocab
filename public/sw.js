if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const r=e=>a(e,c),o={module:{uri:c},exports:i,require:r};s[c]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(t(...e),i)))}}define(["./workbox-2e6be583"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"087e4a4f16967993db7d95ee29195e9e"},{url:"/_next/static/Hc8ueRjayrwq9lRQlqFlo/_buildManifest.js",revision:"b6fc51db79e459a6353e4883e9703874"},{url:"/_next/static/Hc8ueRjayrwq9lRQlqFlo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/381-8be58ee1b9e289f8.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/77-9045a1b8d59ddd0c.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/8766613a-622830e7b7c96917.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/app/_not-found-6a359adce55a69d3.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/app/layout-94ee77b6f46fafe5.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/app/page-51a729feda5c896b.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/app/review/%5BtestGroupId%5D/%5BtestId%5D/page-7156d264cd63b980.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/app/test/%5BtestGroupId%5D/%5BtestId%5D/page-11a0b2cbd268fa81.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/framework-510ec8ffd65e1d01.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/main-app-6311ba84ceaff007.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/main-f19f88d34be2f152.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/pages/_app-91c0f0ca9ee3ca62.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/pages/_error-746015e13a7aa5e8.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-9b927f2bda59d115.js",revision:"Hc8ueRjayrwq9lRQlqFlo"},{url:"/_next/static/css/35d179c09ede244f.css",revision:"35d179c09ede244f"},{url:"/_next/static/css/4b5f2075c7bb57fa.css",revision:"4b5f2075c7bb57fa"},{url:"/_next/static/css/9a7494da3686f7e9.css",revision:"9a7494da3686f7e9"},{url:"/_next/static/css/a3d466ac208dd9f4.css",revision:"a3d466ac208dd9f4"},{url:"/github.svg",revision:"8dcc6b5262f3b6138b1566b357ba89a9"},{url:"/logo192.png",revision:"33dbdd0177549353eeeb785d02c294af"},{url:"/logo512.png",revision:"917515db74ea8d1aee6a246cfbcc0b45"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));