/**
 * GA4 Analytics Helper Functions
 * 
 * Usage:
 * - trackEvent('button_click', { button_name: 'Sign Up' })
 * - trackPageView('/my-page', 'My Page Title')
 * - trackException('error_message', true)
 * - setUserProperties({ user_type: 'premium' })
 */

export interface EventParams {
  [key: string]: string | number | boolean | string[] | number[] | any;
}

/**
 * Track custom events in GA4
 * @param eventName - Name of the event
 * @param params - Event parameters
 */
export function trackEvent(eventName: string, params?: EventParams): void {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', eventName, params || {});
  }
}

/**
 * Track page views (useful for SPA navigation)
 * @param path - Page path (e.g., '/about')
 * @param title - Page title
 */
export function trackPageView(path: string, title?: string): void {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('config', (window as any).GA_MEASUREMENT_ID || 'G-XXXXXXXXXX', {
      page_path: path,
      page_title: title || document.title,
    });
  }
}

/**
 * Track exceptions/errors
 * @param description - Error description
 * @param fatal - Whether the exception is fatal
 */
export function trackException(description: string, fatal: boolean = false): void {
  trackEvent('exception', {
    description,
    fatal,
  });
}

/**
 * Set user properties
 * @param properties - User properties object
 */
export function setUserProperties(properties: EventParams): void {
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('set', { 'user_properties': properties });
  }
}

/**
 * Track e-commerce purchase
 * @param items - Array of purchased items
 * @param value - Total purchase value
 * @param currency - Currency code (e.g., 'USD', 'INR')
 */
export function trackPurchase(
  items: Array<{ id: string; name: string; price: number; quantity: number }>,
  value: number,
  currency: string = 'USD'
): void {
  trackEvent('purchase', {
    items,
    value,
    currency,
    transaction_id: `txn_${Date.now()}`,
  });
}

/**
 * Get GA4 Measurement ID from window
 */
export function getGAMeasurementId(): string {
  return (window as any).GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';
}

// Declare gtag types for TypeScript
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    GA_MEASUREMENT_ID?: string;
    trackEvent: (name: string, params?: EventParams) => void;
  }
}
