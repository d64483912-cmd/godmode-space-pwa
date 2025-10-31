const CACHE_NAME = 'godmode-space-pwa-v1'
const urlsToCache = [
  '/',
  '/manifest.json',
  '/pwa-icon-192.png',
  '/pwa-icon-512.png'
]

// Install service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Service Worker: Cache opened')
        return cache.addAll(urlsToCache)
      })
      .catch((error) => {
        console.log('Service Worker: Cache failed', error)
      })
  )
})

// Fetch event - serve from cache when offline with network first strategy
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests and chrome-extension requests
  if (event.request.method !== 'GET' || event.request.url.startsWith('chrome-extension')) {
    return
  }

  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // Return cached version if available
        if (response) {
          return response
        }

        // Otherwise fetch from network
        return fetch(event.request).then((response) => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response
          }

          // Clone the response for caching
          const responseToCache = response.clone()

          // Cache the new resource
          caches.open(CACHE_NAME)
            .then((cache) => {
              // Only cache same-origin requests
              if (event.request.url.startsWith(self.location.origin)) {
                cache.put(event.request, responseToCache)
              }
            })

          return response
        })
      })
      .catch(() => {
        // If both cache and network fail, return offline fallback
        if (event.request.destination === 'document') {
          return caches.match('/')
        }
      })
  )
})

// Activate service worker
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            console.log('Service Worker: Clearing old cache')
            return caches.delete(cacheName)
          }
        })
      )
    })
  )
})

// Background sync for offline task submission
self.addEventListener('sync', (event) => {
  if (event.tag === 'background-sync') {
    event.waitUntil(
      // Handle offline task queue
      handleOfflineQueue()
    )
  }
})

async function handleOfflineQueue() {
  try {
    // Get stored offline requests from IndexedDB or localStorage
    const offlineRequests = await getStoredOfflineRequests()
    
    for (const request of offlineRequests) {
      try {
        await fetch(request.url, {
          method: request.method,
          headers: request.headers,
          body: request.body
        })
        // Remove successfully processed request from queue
        await removeFromOfflineQueue(request.id)
      } catch (error) {
        console.log('Failed to process offline request:', error)
        // Keep failed requests in queue for next sync
      }
    }
  } catch (error) {
    console.log('Service Worker: Error handling offline queue', error)
  }
}

async function getStoredOfflineRequests() {
  // Simple implementation - in production, use IndexedDB for better storage
  const stored = localStorage.getItem('offlineRequests')
  return stored ? JSON.parse(stored) : []
}

async function removeFromOfflineQueue(requestId) {
  const requests = await getStoredOfflineRequests()
  const updated = requests.filter(req => req.id !== requestId)
  localStorage.setItem('offlineRequests', JSON.stringify(updated))
}