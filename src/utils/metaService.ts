// Meta-Tags Service für dynamische Seitenmetadaten
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'

// Meta-Informationen Interface
export interface MetaInfo {
  title?: string
  description?: string
  keywords?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  ogUrl?: string
  canonical?: string
  structuredData?: object // Schema.org JSON-LD Daten
  robots?: string // robots meta tag content
}

// Standardwerte für Meta-Tags
const defaultMeta: MetaInfo = {
  title: 'Dominik Kasten – Full-Stack Webentwickler aus Goslar | IT-Dienstleistungen',
  description:
    'Ich bin Dominik Kasten, Full-Stack Entwickler aus Goslar. Ich entwickle moderne Weblösungen für Unternehmen in Niedersachsen und darüber hinaus.',
  ogTitle: 'Dominik Kasten – Full-Stack Webentwickler aus Goslar',
  ogDescription:
    'Moderne Webentwicklung und IT-Dienstleistungen für Unternehmen aus Niedersachsen.',
  ogImage: 'https://dominik-kasten.de/social-preview.png',
  ogUrl: 'https://dominik-kasten.de',
  canonical: 'https://dominik-kasten.de/',
}

// Aktuelles Meta-Objekt
export const currentMeta = ref<MetaInfo>({ ...defaultMeta })

// Meta-Tags aktualisieren
export function updateMetaTags(meta: MetaInfo) {
  // Titel aktualisieren
  if (meta.title) {
    document.title = meta.title
  } else {
    document.title = defaultMeta.title || ''
  }

  // Meta Description aktualisieren
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', meta.description || defaultMeta.description || '')
  }

  // Meta Keywords aktualisieren (falls vorhanden)
  let metaKeywords = document.querySelector('meta[name="keywords"]')
  if (meta.keywords) {
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta')
      metaKeywords.setAttribute('name', 'keywords')
      document.head.appendChild(metaKeywords)
    }
    metaKeywords.setAttribute('content', meta.keywords)
  }

  // Robots Meta Tag aktualisieren (falls vorhanden)
  let metaRobots = document.querySelector('meta[name="robots"]')
  if (meta.robots) {
    if (!metaRobots) {
      metaRobots = document.createElement('meta')
      metaRobots.setAttribute('name', 'robots')
      document.head.appendChild(metaRobots)
    }
    metaRobots.setAttribute('content', meta.robots)
  }

  // OpenGraph Tags aktualisieren
  const ogTags = {
    'og:title': meta.ogTitle || meta.title || defaultMeta.ogTitle || '',
    'og:description': meta.ogDescription || meta.description || defaultMeta.ogDescription || '',
    'og:image': meta.ogImage || defaultMeta.ogImage || '',
    'og:url': meta.ogUrl || defaultMeta.ogUrl || '',
  }

  // Alle OG-Tags durchgehen und aktualisieren
  Object.entries(ogTags).forEach(([property, content]) => {
    const tag = document.querySelector(`meta[property="${property}"]`)
    if (tag) {
      tag.setAttribute('content', content)
    }
  })
  // Canonical Link aktualisieren
  const canonicalLink = document.querySelector('link[rel="canonical"]')
  if (canonicalLink && meta.canonical) {
    canonicalLink.setAttribute('href', meta.canonical)
  }

  // Strukturierte Daten aktualisieren
  if (meta.structuredData) {
    // Zuerst alte JSON-LD entfernen, falls vorhanden
    const existingScripts = document.querySelectorAll(
      'script[type="application/ld+json"][data-meta="true"]',
    )
    existingScripts.forEach((script) => script.remove())

    // Neues Script-Element erstellen
    const script = document.createElement('script')
    script.setAttribute('type', 'application/ld+json')
    script.setAttribute('data-meta', 'true')
    script.textContent = JSON.stringify(meta.structuredData)
    document.head.appendChild(script)
  }

  // Aktuelles Meta-Objekt aktualisieren
  currentMeta.value = { ...defaultMeta, ...meta }
}

// Composition function für einfache Verwendung in Vue-Komponenten
export function useMeta() {
  const route = useRoute()
  // Wenn die Route sich ändert und Meta-Informationen hat, aktualisieren
  watch(
    () => route.meta,
    (meta) => {
      if (meta && meta.metaInfo) {
        const metaInfo = meta.metaInfo as MetaInfo

        // Die Canonical-URL basierend auf der aktuellen Route erstellen, falls nicht explizit gesetzt
        if (!metaInfo.canonical) {
          metaInfo.canonical = `https://dominik-kasten.de${route.path}`
        }

        // Die OG-URL basierend auf der aktuellen Route erstellen, falls nicht explizit gesetzt
        if (!metaInfo.ogUrl) {
          metaInfo.ogUrl = `https://dominik-kasten.de${route.path}`
        }

        updateMetaTags(metaInfo)
      }
    },
    { immediate: true },
  )

  // Für manuelle Updates von Meta-Tags in Komponenten
  return {
    setMeta: updateMetaTags,
    currentMeta,
  }
}
