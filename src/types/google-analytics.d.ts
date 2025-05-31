// Type definitions for Google Analytics 4 with Consent Mode v2
interface Window {
  'ga-disable-G-Y2MBSY2W6B': boolean
  dataLayer: Array<{
    event?: string
    [key: string]: unknown
  }>
  gtag: (...args: unknown[]) => void
}

// Consent status types
type ConsentType = 'granted' | 'denied'
type ConsentPurpose =
  | 'ad_storage'
  | 'analytics_storage'
  | 'functionality_storage'
  | 'personalization_storage'
  | 'security_storage'

// Global gtag function
declare function gtag(...args: unknown[]): void

// Declaration for gtag consent commands
interface GtagConsentUpdate {
  (
    command: 'consent',
    update: 'default' | 'update',
    consentOptions: Record<ConsentPurpose, ConsentType>,
  ): void
}
