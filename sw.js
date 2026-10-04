// Hisaab service worker: works offline, picks up new versions when online, and checks due dates in the background.
const CACHE = 'hisaab-v1.7.0';
const LIBS = 'hisaab-libs-1';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE && k !== LIBS).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  // App pages (including ?sms= / ?text= share links): network first, cached copy when offline.
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req).then(res => { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); return res; })
        .catch(() => caches.match('./index.html', { ignoreSearch: true }))
    );
    return;
  }
  // The bill reader (fixed versions on jsDelivr): download once, then work offline.
  if (url.hostname === 'cdn.jsdelivr.net' && /\/npm\/(tesseract\.js|tesseract\.js-core|@tesseract\.js-data|pdfjs-dist)@\d/.test(url.pathname)) {
    e.respondWith(caches.open(LIBS).then(c => c.match(req).then(hit => hit || fetch(req).then(res => { if (res.ok) c.put(req, res.clone()); return res; }))));
    return;
  }
  // Same-origin files and Google Fonts: cache first, refresh in the background.
  if (url.origin === location.origin || /fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(
      caches.match(req, { ignoreSearch: url.origin === location.origin }).then(hit => {
        const net = fetch(req).then(res => {
          if (res && (res.ok || res.type === 'opaque')) { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
          return res;
        }).catch(() => hit);
        return hit || net;
      })
    );
  }
});

/* ---- due-date alerts while the app is closed (Chrome on Android, installed app) ---- */
function idb(mode, fn) {
  return new Promise(res => {
    const r = indexedDB.open('hisaab', 1);
    r.onupgradeneeded = () => { r.transaction.abort(); res(null); };
    r.onerror = () => res(null);
    r.onsuccess = () => {
      try { const t = r.result.transaction('kv', mode); const out = fn(t.objectStore('kv')); t.oncomplete = () => res(out && out.result); t.onerror = () => res(null); }
      catch (e) { res(null); }
    };
  });
}
const pad = n => String(n).padStart(2, '0');
const ymd = d => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
async function checkDues() {
  const alerts = await idb('readonly', s => s.get('alerts'));
  if (!alerts || !alerts.enabled || !Array.isArray(alerts.items)) return;
  const td = ymd(new Date());
  const sent = (await idb('readonly', s => s.get('notified'))) || {};
  for (const al of alerts.items) {
    if (al.from > td || sent[al.key] === td) continue;
    const days = Math.round((new Date(al.due + 'T00:00') - new Date(td + 'T00:00')) / 864e5);
    const title = days < 0 ? `${al.name} is overdue` : days === 0 ? `${al.name} is due today` : days === 1 ? `${al.name} is due tomorrow` : `${al.name} is due in ${days} days`;
    await self.registration.showNotification(title, { body: al.amount ? `Amount ${al.amount}. Tap to open Hisaab.` : 'Tap to open Hisaab.', tag: al.key, icon: 'icon-192.png', badge: 'icon-192.png' });
    sent[al.key] = td;
  }
  await idb('readwrite', s => s.put(sent, 'notified'));
}
self.addEventListener('periodicsync', e => { if (e.tag === 'hisaab-dues') e.waitUntil(checkDues()); });
self.addEventListener('notificationclick', e => {
  e.notification.close();
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then(list => {
    for (const c of list) if ('focus' in c) return c.focus();
    return self.clients.openWindow('./');
  }));
});
