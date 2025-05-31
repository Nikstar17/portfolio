interface Window {
  [key: string]: unknown // Erlaubt dynamische Zugriffe auf Window-Eigenschaften - sicherer als 'any'
  dataLayer: Array<Record<string, unknown>> // Für Google Analytics, spezifischere Array-Definition
}
