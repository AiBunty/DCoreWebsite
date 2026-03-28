/**
 * Form and Asset Cache Utility
 * Preloads and caches embedded forms and scroll sequence frames when the website loads
 */

export const CRM_CONTACT_FORM_URL = "https://admin.aibunty.com/widget/form/699acdf5d46f8";
export const BOOK_DEMO_FORM_URL =
  "https://admin.aibunty.com/u2/76998/appointment-booking-from-website?isEmbeded=1";

export const EMBEDDED_FORM_URLS = [
  CRM_CONTACT_FORM_URL, // CRM Contact Form
  BOOK_DEMO_FORM_URL, // Appointment Booking Form
];

export const FORM_DOMAIN = "https://admin.aibunty.com";

// Scroll sequence frame images (from ScrollImageSequenceSection)
export const SCROLL_SEQUENCE_FRAMES = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13].map(
  (num) => `/${num}.webp`
);

/**
 * Preload form resources using Cache API
 */
export async function cacheEmbeddedForms(): Promise<void> {
  if (!("caches" in window)) {
    console.warn("Cache API not supported in this browser");
    return;
  }

  try {
    const cache = await caches.open("dcore-forms-v1");
    
    // Cache all form URLs
    for (const formUrl of EMBEDDED_FORM_URLS) {
      try {
        // Check if already cached
        const cachedResponse = await cache.match(formUrl);
        
        if (!cachedResponse) {
          // Fetch and cache the form
          await cache.add(formUrl);
          console.log(`✓ Cached form: ${formUrl}`);
        } else {
          console.log(`✓ Form already cached: ${formUrl}`);
        }
      } catch (error) {
        console.warn(`Failed to cache form ${formUrl}:`, error);
      }
    }
  } catch (error) {
    console.error("Form caching error:", error);
  }
}

/**
 * Cache scroll sequence frames for instant loading
 */
export async function cacheScrollFrames(): Promise<void> {
  if (!("caches" in window)) {
    console.warn("Cache API not supported in this browser");
    return;
  }

  try {
    const cache = await caches.open("dcore-scroll-frames-v1");
    
    // Get the base URL for frames (they're served from the root)
    const baseUrl = window.location.origin;
    
    // Cache all frame images
    for (const framePath of SCROLL_SEQUENCE_FRAMES) {
      try {
        const frameUrl = `${baseUrl}${framePath}`;
        const cachedResponse = await cache.match(frameUrl);
        
        if (!cachedResponse) {
          // Fetch and cache the frame
          await cache.add(frameUrl);
          console.log(`✓ Cached frame: ${framePath}`);
        } else {
          console.log(`✓ Frame already cached: ${framePath}`);
        }
      } catch (error) {
        console.warn(`Failed to cache frame ${framePath}:`, error);
      }
    }
  } catch (error) {
    console.error("Scroll frame caching error:", error);
  }
}

/**
 * Prefetch form resources using link prefetch
 */
export function prefetchFormResources(): void {
  // Add DNS prefetch for form domain
  addLinkTag("dns-prefetch", FORM_DOMAIN);
  
  // Add preconnect for faster connection
  addLinkTag("preconnect", FORM_DOMAIN, true);
  
  // Prefetch each form URL
  EMBEDDED_FORM_URLS.forEach((url) => {
    addLinkTag("prefetch", url);
  });
}

/**
 * Prefetch scroll sequence frames
 */
export function prefetchScrollFrames(): void {
  const baseUrl = window.location.origin;
  
  // Prefetch each frame image
  SCROLL_SEQUENCE_FRAMES.forEach((framePath) => {
    const frameUrl = `${baseUrl}${framePath}`;
    addLinkTag("prefetch", frameUrl, false, "image");
  });
}

/**
 * Helper to add link tags to document head
 */
function addLinkTag(
  rel: string,
  href: string,
  crossorigin: boolean = false,
  asType?: string
): void {
  // Check if link already exists
  const existing = document.querySelector(`link[rel="${rel}"][href="${href}"]`);
  if (existing) return;

  const link = document.createElement("link");
  link.rel = rel;
  link.href = href;
  
  if (crossorigin) {
    link.crossOrigin = "anonymous";
  }
  
  if (asType) {
    link.setAttribute("as", asType);
  }
  
  document.head.appendChild(link);
}

/**
 * Initialize form and asset caching on app load
 */
export function initializeFormCache(): void {
  // Use requestIdleCallback for better performance
  if ("requestIdleCallback" in window) {
    requestIdleCallback(
      () => {
        prefetchFormResources();
        prefetchScrollFrames();
        cacheEmbeddedForms();
        cacheScrollFrames();
      },
      { timeout: 2000 }
    );
  } else {
    // Fallback for browsers without requestIdleCallback
    setTimeout(() => {
      prefetchFormResources();
      prefetchScrollFrames();
      cacheEmbeddedForms();
      cacheScrollFrames();
    }, 1000);
  }
}
