interface Window {
  [key: string]: unknown // Erlaubt dynamische Zugriffe auf Window-Eigenschaften - sicherer als 'any'
  dataLayer: Array<Record<string, unknown>> // Für Google Analytics, spezifischere Array-Definition
  gtag: (...args: unknown[]) => void // Google Analytics Tag function
  loadGA: () => void // Function to lazily load Google Analytics
  GA_CONFIG: {
    id: string
    options: {
      anonymize_ip: boolean
      cookie_flags: string
      send_page_view: boolean
    }
  }
}
