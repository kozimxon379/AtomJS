// atomjs service worker — qo'lda yozilgan, kutubxonasiz (Workbox yo'q).
//
// Maqsad ikkita va ataylab tor:
//   1) ilovani telefonga o'rnatish mumkin bo'lsin (PWA talabi);
//   2) bir marta ochilgan sahifa internet uzilganda ham ochilsin.
//
// Strategiya:
//   • Navigatsiya (index.html) — NETWORK-FIRST. Yangi deploy darhol keladi,
//     `watchDeploy` ham odatdagidek ishlaydi; tarmoq bo'lmasagina keshdagi
//     nusxa beriladi. SPA bo'lgani uchun bitta nusxa ("/") yetadi.
//   • `/assets/*` — CACHE-FIRST. Nomlarida hash bor (`immutable`), ya'ni
//     keshdagi fayl hech qachon eskirmaydi. Oldindan hech narsa yuklanmaydi
//     (Monaco 3.6 MB, ts.worker 6.9 MB — o'quvchi telefoniga bekorga
//     tushmasin); faqat ochilgan sahifalar keshlanadi va soni cheklanadi.
//   • `/api/*`, Supabase, Telegram va boshqa domenlar — TEGILMAYDI.
//
// Kesh tuzilishini o'zgartirsangiz versiyani oshiring — eski keshlar
// `activate` da o'chiriladi.
const SHELL = "atomjs-shell-v1";
const ASSETS = "atomjs-assets-v1";
const MAX_ASSETS = 120;

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches
      .open(SHELL)
      .then((c) => c.addAll(["/", "/manifest.webmanifest", "/favicon.svg"]))
      .then(() => self.skipWaiting()),
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(
          keys
            .filter((k) => k !== SHELL && k !== ASSETS)
            .map((k) => caches.delete(k)),
        ),
      )
      .then(() => self.clients.claim()),
  );
});

/** Eng eskilaridan boshlab o'chiradi (`keys()` qo'shilish tartibida). */
async function trim(cache) {
  const keys = await cache.keys();
  for (let i = 0; i < keys.length - MAX_ASSETS; i++)
    await cache.delete(keys[i]);
}

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/api/")) return;

  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res.ok) {
            const copy = res.clone();
            void caches.open(SHELL).then((c) => c.put("/", copy));
          }
          return res;
        })
        .catch(async () => (await caches.match("/")) || Response.error()),
    );
    return;
  }

  if (url.pathname.startsWith("/assets/")) {
    event.respondWith(
      caches.open(ASSETS).then(async (cache) => {
        const hit = await cache.match(req);
        if (hit) return hit;
        const res = await fetch(req);
        if (res.ok) {
          await cache.put(req, res.clone());
          void trim(cache);
        }
        return res;
      }),
    );
  }
});
