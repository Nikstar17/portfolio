// Google Analytics 4 integration with Consent Mode v2
// This file handles GA4 initialization and consent management

// GA4 Measurement ID
const GA4_ID = 'G-Y2MBSY2W6B'

// Consent status constants
export const CONSENT_GRANTED = 'granted'
export const CONSENT_DENIED = 'denied'

/**
 * Helper function to get cookie value
 * @param name Cookie name
 * @returns Cookie value or null if not found
 */
function getCookie(name: string): string | null {
  const nameEQ = name + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') c = c.substring(1, c.length)
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length)
  }
  return null
}

/**
 * Initialize Google Analytics with Consent Mode v2
 * Since we're now initializing GA4 directly in the HTML <head>, this function
 * is kept for backward compatibility but doesn't duplicate the initialization
 *
 * GDPR COMPLIANCE NOTE:
 * - GA4 is initialized with consent denied for all storage purposes
 * - No cookies are set until user explicitly grants consent
 * - All data collection respects user choices per GDPR requirements
 */
export function initializeGA() {
  // GA4 is already initialized in the HTML <head> with Consent Mode v2
  // This function is kept for backward compatibility

  // Read existing consent and apply if available
  const cookieConsent = getCookie('cookie-consent')
  if (cookieConsent === 'ga-consent-granted') {
    updateGAConsent(CONSENT_GRANTED)
  } else if (cookieConsent === 'ga-consent-denied') {
    updateGAConsent(CONSENT_DENIED)
  }
}

/**
 * Update consent status in GA4 with Consent Mode v2
 * @param status - 'granted' or 'denied'
 */
export function updateGAConsent(status: typeof CONSENT_GRANTED | typeof CONSENT_DENIED) {
  if (typeof window === 'undefined') return

  if (status === CONSENT_GRANTED) {
    // When consent is granted, load GA if not already loaded
    if (window.loadGA && typeof window.loadGA === 'function') {
      window.loadGA()
    }

    // If gtag is available, update consent
    if (window.gtag) {
      // Update consent state using Consent Mode v2
      window.gtag('consent', 'update', {
        ad_storage: status,
        analytics_storage: status,
        functionality_storage: status,
        personalization_storage: status,
        // security_storage always remains granted for essential functionality
      })

      // Enable GA and send the initial page view
      window['ga-disable-' + GA4_ID] = false
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: window.location.pathname,
      })
    }
  } else {
    // When consent is denied, disable GA if loaded and remove cookies
    if (window.gtag) {
      window.gtag('consent', 'update', {
        ad_storage: status,
        analytics_storage: status,
        functionality_storage: status,
        personalization_storage: status,
      })

      window['ga-disable-' + GA4_ID] = true
    }

    removeCookie('_ga')
    removeCookie('_ga_' + GA4_ID.replace('G-', ''))
  }
}

/**
 * Send GA4 page view event
 * Only sends if analytics consent is granted and gtag is loaded
 */
export function sendPageView() {
  // Do nothing if gtag isn't available or consent hasn't been granted
  if (!window.gtag || getCookie('cookie-consent') !== 'ga-consent-granted') return

  // Only send the minimum required data
  window.gtag('event', 'page_view', {
    page_path: window.location.pathname,
  })
}

/**
 * Explicitly disable Google Analytics
 * Removes GA cookies and sets opt-out flag
 */
export function disableGA() {
  // Set the GA opt-out flag
  window['ga-disable-' + GA4_ID] = true

  // Remove Google Analytics cookies
  removeCookie('_ga')
  removeCookie('_ga_' + GA4_ID.replace('G-', ''))
}

/**
 * Helper function to remove a cookie
 */
function removeCookie(name: string) {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT; SameSite=Lax; Secure`
}
