// ProClaVet-core · Service Worker PWA
const CACHE="proclavet-core-v1";
const DATA=["data/sistemas/sistema_articular.json","data/sistemas/sistema_cardiovascular.json","data/sistemas/sistema_digestivo.json","data/sistemas/sistema_endocrino.json","data/sistemas/sistema_esqueletico.json","data/sistemas/sistema_muscular.json","data/sistemas/sistema_nervioso.json","data/sistemas/sistema_reproductor.json","data/sistemas/sistema_respiratorio.json","data/sistemas/sistema_sensorial.json","data/sistemas/sistema_tegumentario.json","data/sistemas/sistema_urinario.json"];
const CORE=["./","index.html","css/styles.css","js/app.js","manifest.webmanifest","icons/icon-192.png","assets/laminas/atlas-equino-c1.svg","assets/laminas/axis-equino-c2.svg",...DATA];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("proclavet-core-")&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{const r=e.request;if(r.method!=="GET")return;const u=new URL(r.url);if(u.origin!==self.location.origin)return;
 const fresh=["/index.html","/js/app.js",...DATA.map(p=>"/"+p)].some(p=>u.pathname.endsWith(p));
 e.respondWith(caches.open(CACHE).then(async c=>{const hit=await c.match(r);if(fresh){try{const n=await fetch(r,{cache:"no-store"});if(n.ok)await c.put(r,n.clone());if(!n.ok&&hit)return hit;return n}catch(err){if(hit)return hit;throw err}}
 if(hit)return hit;const n=await fetch(r);if(n.ok||n.type==="opaque")await c.put(r,n.clone());return n}))});
