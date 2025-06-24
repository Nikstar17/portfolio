import { createRouter, createWebHistory } from 'vue-router'
import { sendPageView } from '@/utils/analytics'
// Use dynamic imports for code-splitting
const HomePage = () => import('@/views/HomePage.vue')
const AboutMe = () => import('@/views/AboutMe.vue')
const EditorFolio = () => import('@/views/EditorFolio.vue')
const Impressum = () => import('@/views/ImpressumView.vue')
const Datenschutz = () => import('@/views/DatenschutzView.vue')
const Kontakt = () => import('@/views/KontaktView.vue')
const Danke = () => import('@/views/DankeView.vue')
const WebseitenErstellung = () => import('@/views/WebseitenErstellung.vue')
const PreiseView = () => import('@/views/PreiseView.vue')
const LandingpageDigitalisierung = () => import('@/views/LandingpageDigitalisierung.vue')
const FullstackEntwicklung = () => import('@/views/FullstackEntwicklung.vue')
const SonderangebotView = () => import('@/views/SonderangebotView.vue')
import type { MetaInfo } from '@/utils/metaService'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'IT-Dienstleister Goslar – Webseiten & PC-Hilfe vom Profi vor Ort',
          description:
            'Persönlicher IT-Service in Goslar: Hilfe bei PC-Problemen, Netzwerken & Webseitenerstellung. Verständlich, zuverlässig & schnell – jetzt Kontakt aufnehmen!',
          keywords:
            'it-dienstleister goslar, pc-hilfe, webseiten erstellen, it-service, netzwerk, wlan, computer reparatur, it hilfe vor ort',
          canonical: 'https://dominik-kasten.de/',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'ProfessionalService',
            name: 'Dominik Kasten IT-Dienstleistungen',
            description: 'IT-Service und Webseiten aus Goslar – Persönlich. Verständlich. Vor Ort.',
            url: 'https://dominik-kasten.de/',
          },
        } as MetaInfo,
      },
    },
    {
      path: '/ueber-mich',
      name: 'about-me',
      component: AboutMe,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Über mich – Dominik Kasten | IT-Service & Weblösungen in Goslar',
          description:
            'Ich bin Dominik Kasten, freiberuflicher IT-Dienstleister in Goslar. Persönlich, zuverlässig und verständlich – für IT-Service, Webseiten & Technik-Hilfe in der Region.',
          keywords:
            'dominik kasten, it-dienstleister goslar, it-service harz, webseiten goslar, it-freelancer, it-hilfe, technik-support',
          canonical: 'https://dominik-kasten.de/ueber-mich',
        } as MetaInfo,
      },
    },
    {
      path: '/editorfolio',
      name: 'editorfolio',
      component: EditorFolio,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'EditorFolio - Video & Audio Projekte | Dominik Kasten',
          description:
            'Entdecken Sie meine Arbeit als EditorFolio - professionelle Video- und Audio-Editierung für kreative Projekte.',
          keywords: 'editorfolio, video editing, audio bearbeitung, medienproduktion, goslar',
        } as MetaInfo,
      },
    },
    {
      path: '/webseiten-erstellung',
      name: 'webseiten-erstellung',
      component: WebseitenErstellung,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Webseiten-Erstellung Goslar | Professionelle Websites für Ihr Unternehmen',
          description:
            'Professionelle Webseiten-Erstellung für Unternehmen in Goslar und dem Harz. Responsive Design, SEO-Optimierung und individuelle Lösungen für Ihren Online-Erfolg.',
          keywords:
            'webseiten-erstellung, webdesign, homepage erstellen, webentwicklung, goslar, harz, responsive design, seo',
          ogTitle: 'Professionelle Webseiten für Ihr Business im Harz und deutschlandweit',
          ogDescription:
            'Maßgeschneiderte Webseiten-Entwicklung mit modernster Technologie. Responsive Design, SEO-Optimierung und individuelle Lösungen für Ihren Online-Erfolg.',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Webseiten-Erstellung',
            serviceType: 'Webdesign und Entwicklung',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dominik Kasten IT-Dienstleistungen',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Grauhöfer Str. 9',
                addressLocality: 'Goslar',
                postalCode: '38640',
                addressCountry: 'DE',
              },
            },
            description:
              'Professionelle Webseiten-Erstellung für Unternehmen in Goslar und dem Harz. Responsive Design, SEO-Optimierung und individuelle Lösungen für Ihren Online-Erfolg.',
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 51.9081,
                longitude: 10.4304,
              },
              geoRadius: '50000',
            },
            offers: {
              '@type': 'Offer',
              price: '1000.00',
              priceCurrency: 'EUR',
              priceSpecification: {
                '@type': 'PriceSpecification',
                price: '1000.00',
                priceCurrency: 'EUR',
                minPrice: '1000.00',
              },
            },
          },
        } as MetaInfo,
      },
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Impressum | Dominik Kasten',
          description:
            'Impressum von Dominik Kasten - IT-Dienstleistungen und Webentwicklung aus Goslar.',
          ogTitle: 'Impressum | Dominik Kasten',
        } as MetaInfo,
      },
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: Datenschutz,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Datenschutz | Dominik Kasten',
          description:
            'Datenschutzerklärung von Dominik Kasten - IT-Dienstleistungen und Webentwicklung aus Goslar.',
          ogTitle: 'Datenschutz | Dominik Kasten',
        } as MetaInfo,
      },
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: Kontakt,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Kontakt | Dominik Kasten - IT-Dienstleistungen Goslar',
          description:
            'Kontaktieren Sie Dominik Kasten für IT-Dienstleistungen und Webentwicklung in Goslar und Umgebung. Schnelle und kompetente Beratung für Ihr digitales Projekt.',
          keywords: 'kontakt, anfrage, beratung, it-dienstleistungen, webentwicklung, goslar',
        } as MetaInfo,
      },
    },
    {
      path: '/danke',
      name: 'danke',
      component: Danke,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Vielen Dank für Ihre Nachricht | Dominik Kasten',
          description:
            'Danke für Ihre Kontaktanfrage. Ich werde mich schnellstmöglich mit Ihnen in Verbindung setzen.',
        } as MetaInfo,
      },
    },
    {
      path: '/preise',
      name: 'preise',
      component: PreiseView,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Preise – IT-Service & Webseitenerstellung in Goslar | Transparent & fair',
          description:
            'Faire Preise für professionelle IT-Dienstleistungen und Webseiten-Erstellung in Goslar. Persönlich, transparent und zuverlässig – jetzt informieren.',
          keywords:
            'it-preise goslar, webseiten kosten, it-service preise, webdesign kosten harz, it-dienstleistung preisliste',
          canonical: 'https://dominik-kasten.de/preise',
        } as MetaInfo,
      },
    },
    {
      path: '/digitalisierung',
      name: 'digitalisierung',
      component: LandingpageDigitalisierung,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Digitalisierung für Unternehmen | Einfache & effiziente Lösungen',
          description:
            'Professionelle Digitalisierungslösungen für Unternehmen im Harz. Prozessoptimierung, Cloud-Einführung und IT-Support aus einer Hand – persönlich, verständlich und vor Ort.',
          keywords:
            'digitalisierung unternehmen, prozessoptimierung, cloud-lösungen, it-support, webentwicklung, automatisierung, digitale transformation',
          ogTitle: 'Digitalisierung für Ihr Unternehmen – einfach, effizient, zukunftssicher',
          ogDescription:
            'Maßgeschneiderte Digitalisierungslösungen für Ihr Unternehmen. Optimieren Sie Ihre Prozesse und steigern Sie Ihre Effizienz mit professioneller Unterstützung.',
          ogImage: 'https://dominik-kasten.de/social-preview.png',
          canonical: 'https://dominik-kasten.de/digitalisierung',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Digitalisierungslösungen',
            serviceType: 'Digitale Transformation',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dominik Kasten IT-Dienstleistungen',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Grauhöfer Str. 9',
                addressLocality: 'Goslar',
                postalCode: '38640',
                addressCountry: 'DE',
              },
            },
            description:
              'Professionelle Digitalisierungslösungen für Unternehmen im Harz. Prozessoptimierung, Cloud-Einführung und IT-Support aus einer Hand.',
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 51.9081,
                longitude: 10.4304,
              },
              geoRadius: '30000',
            },
          },
        } as MetaInfo,
      },
    },
    {
      path: '/fullstack-entwicklung',
      name: 'fullstack-entwicklung',
      component: FullstackEntwicklung,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Fullstack-Entwicklung | Modern, performant & maßgeschneidert',
          description:
            'Individuelle Fullstack-Webapplikationen mit Vue.js, Flask & PostgreSQL. Maßgeschneiderte Lösungen für Ihr Business – reaktiv, sicher und zukunftsorientiert.',
          keywords:
            'fullstack-entwicklung, vue.js, flask, postgresql, webapplikationen, api-entwicklung, datenmodellierung, business-anwendungen',
          ogTitle: 'Fullstack-Entwicklung für moderne Webanwendungen',
          ogDescription:
            'Maßgeschneiderte Fullstack-Lösungen mit Vue.js, Flask & PostgreSQL – reaktiv, performant und skalierbar für Ihren Unternehmenserfolg.',
          ogImage: 'https://dominik-kasten.de/social-preview.png',
          canonical: 'https://dominik-kasten.de/fullstack-entwicklung',
          structuredData: {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: 'Fullstack-Entwicklung',
            serviceType: 'Webapplikation-Entwicklung',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Dominik Kasten IT-Dienstleistungen',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'Grauhöfer Str. 9',
                addressLocality: 'Goslar',
                postalCode: '38640',
                addressCountry: 'DE',
              },
            },
            description:
              'Individuelle Fullstack-Webapplikationen mit Vue.js, Flask & PostgreSQL. Maßgeschneiderte Lösungen für moderne Unternehmen.',
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 51.9081,
                longitude: 10.4304,
              },
              geoRadius: '50000',
            },
          },
        } as MetaInfo,
      },
    },
    {
      path: '/sonderangebot',
      name: 'sonderangebot',
      component: SonderangebotView,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Sonderangebote | Dominik Kasten - IT-Dienstleistungen Goslar',
          description:
            'Entdecken Sie unsere aktuellen Sonderangebote für IT-Dienstleistungen und Webseiten-Erstellung in Goslar. Jetzt sparen und profitieren!',
          keywords:
            'sonderangebote, rabatte, it-dienstleistungen, webseiten-erstellung, goslar, harz, it-service angebote',
          canonical: 'https://dominik-kasten.de/sonderangebot',
        } as MetaInfo,
      },
    },
    {
      path: '/sonderangebot-webseite',
      name: 'sonderangebot-webseite',
      component: SonderangebotView,
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Express-Webseite für nur 299€ – Blitzschnell in 2 Tagen online',
          description:
            'Limitiertes Sonderangebot: Professionelle Express-Webseite für nur 299€! Inkl. Landingpage, Datenschutz & Impressum. In nur 2 Tagen erstellt. Responsiv & SEO-optimiert.',
          keywords:
            'express-webseite, günstige webseite, schnelle webseitenerstellung, webseite in 2 tagen, webseite 299€, webdesign sonderangebot',
          canonical: 'https://dominik-kasten.de/sonderangebot-webseite',
          ogTitle: 'Express-Webseite für nur 299€ – In nur 2 Tagen online',
          ogDescription:
            'Limitiertes Sonderangebot: Professionelle Express-Webseite für nur 299€! Komplett responsiv, superschnell, mit Datenschutz & Impressum in nur 2 Tagen erstellt.',
        } as MetaInfo,
      },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFound.vue'),
      meta: {
        transition: 'fade',
        metaInfo: {
          title: 'Seite nicht gefunden | Dominik Kasten',
          description:
            'Die gesuchte Seite wurde nicht gefunden. Kehren Sie zur Startseite zurück, um fortzufahren.',
        } as MetaInfo,
      },
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  },
})

// ✅ Automatischer Redirect von z. B. /kontakt/ zu /kontakt
router.beforeEach((to, from, next) => {
  if (to.path !== '/' && to.path.endsWith('/')) {
    next({
      path: to.path.replace(/\/+$/, ''),
      query: to.query,
      hash: to.hash,
    })
  } else {
    next()
  }
})

// Track page views with GA4 after each route change if consent is granted
router.afterEach(() => {
  // Only sends if consent has been granted (checked within the function)
  sendPageView()
})

export default router
