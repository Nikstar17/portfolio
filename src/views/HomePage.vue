<template>
  <div class="relative min-h-screen">
    <!-- Meta-Tags Component -->
    <MetaTags
      :meta="{
        title: 'IT-Dienstleister Goslar – Webseiten & PC-Hilfe vom Profi vor Ort',
        description:
          'Persönlicher IT-Service in Goslar: Hilfe bei PC-Problemen, Netzwerken & Webseitenerstellung. Verständlich, zuverlässig & schnell – jetzt Kontakt aufnehmen!',
        keywords:
          'it-dienstleister goslar, pc-hilfe, webseiten erstellen, it-service, netzwerk, wlan, computer reparatur, it hilfe vor ort',
        ogTitle: 'IT-Dienstleister Goslar – Webseiten & PC-Hilfe vom Profi vor Ort',
        ogDescription:
          'Persönlicher IT-Service in Goslar: Hilfe bei PC-Problemen, Netzwerken & Webseitenerstellung. Verständlich, zuverlässig & schnell!',
        structuredData: {
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Dominik Kasten IT-Dienstleistungen',
          description: 'IT-Service und Webseiten aus Goslar – Persönlich. Verständlich. Vor Ort.',
          url: 'https://dominik-kasten.de/',
          telephone: '+4917621173947',
          email: 'info@dominik-kasten.de',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Grauhöfer Str. 9',
            addressLocality: 'Goslar',
            postalCode: '38640',
            addressCountry: 'DE',
          },
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 51.9081,
            longitude: 10.4304,
          },
          areaServed: {
            '@type': 'GeoCircle',
            geoMidpoint: {
              '@type': 'GeoCoordinates',
              latitude: 51.9081,
              longitude: 10.4304,
            },
            geoRadius: '30000',
          },
          priceRange: '$$',
          openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          serviceType: ['IT-Service', 'Webentwicklung', 'PC-Reparatur', 'Netzwerklösungen'],
        },
      }"
    />

    <!-- Hero Section -->
    <section class="relative py-6 sm:py-10 md:py-16 lg:py-20">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="h-full w-full"></div>
      </div>

      <div class="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">
        <div
          class="flex flex-col-reverse items-center gap-0 md:flex-row md:justify-between md:gap-12"
        >
          <!-- Text Content -->
          <div class="mt-4 text-center sm:mt-6 md:mt-0 md:w-3/5 md:text-left">
            <h1
              class="bg-gradient-to-r from-white to-blue-400 bg-clip-text pb-2 text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Ihr persönlicher IT-Partner
            </h1>
            <h2 class="mt-2 text-xl font-semibold text-blue-400 sm:text-2xl">
              Webseiten erstellen. Prozesse digitalisieren. Technik verstehen – persönlich & lokal
              in Goslar.
            </h2>
            <p class="mt-4 text-sm leading-relaxed text-gray-300 sm:text-base md:text-lg">
              Ich helfe Ihnen bei der Erstellung moderner Webseiten, der Optimierung digitaler
              Prozesse und biete transparente Unterstützung bei technischen Fragen – lokal,
              zuverlässig und individuell.
            </p>
            <div
              class="mt-6 flex flex-row flex-wrap items-center justify-center gap-4 md:justify-start"
            >
              <RouterLink to="/kontakt">
                <button
                  class="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  Kontakt aufnehmen
                </button>
              </RouterLink>
              <a href="#leistungen">
                <button
                  class="rounded-full border border-blue-500 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-500/20"
                >
                  Was ich anbiete
                </button></a
              >
            </div>
          </div>

          <!-- Image -->
          <div class="flex w-2/3 items-center justify-center sm:w-1/2 md:w-2/5">
            <img
              src="@/assets/webp/home.webp"
              alt="IT-Service und Webseiten aus Goslar"
              class="h-auto w-full max-w-[150px] sm:max-w-[220px] md:max-w-xs lg:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Zielgruppen Section -->
    <section class="py-6 sm:py-10">
      <div class="container mx-auto max-w-6xl px-4 sm:px-6">
        <p class="mb-6 text-center text-lg text-gray-300 sm:text-xl">
          Meine Leistungen richten sich an:
        </p>
        <div class="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          <div
            class="transform rounded-xl bg-gray-800/40 p-5 text-center transition-all hover:-translate-y-1 hover:bg-gray-800/60 sm:p-6"
          >
            <div class="mb-3 flex justify-center">
              <UserIcon class="h-10 w-10 text-blue-400 sm:h-12 sm:w-12" />
            </div>
            <h3 class="text-lg font-semibold text-white sm:text-xl">Privatpersonen</h3>
          </div>
          <div
            class="transform rounded-xl bg-gray-800/40 p-5 text-center transition-all hover:-translate-y-1 hover:bg-gray-800/60 sm:p-6"
          >
            <div class="mb-3 flex justify-center">
              <UserGroupIcon class="h-10 w-10 text-blue-400 sm:h-12 sm:w-12" />
            </div>
            <h3 class="text-lg font-semibold text-white sm:text-xl">
              Selbstständige & Freiberufler
            </h3>
          </div>
          <div
            class="transform rounded-xl bg-gray-800/40 p-5 text-center transition-all hover:-translate-y-1 hover:bg-gray-800/60 sm:p-6"
          >
            <div class="mb-3 flex justify-center">
              <BuildingOfficeIcon class="h-10 w-10 text-blue-400 sm:h-12 sm:w-12" />
            </div>
            <h3 class="text-lg font-semibold text-white sm:text-xl">Unternehmen</h3>
          </div>
        </div>
        <p class="mt-6 text-center text-base text-gray-300 sm:mt-8 sm:text-lg">
          Dabei stehe ich für Verständlichkeit, Zuverlässigkeit und faire Preise.
        </p>
      </div>
    </section>

    <!-- Leistungen Section -->
    <section class="py-4" id="leistungen">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-4 flex items-center">
          <WrenchIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-3xl font-bold text-white md:text-4xl">Was ich anbiete:</h2>
        </div>

        <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          <!-- Digitalisierung Card -->
          <div
            class="flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/20"
          >
            <h3 class="mb-4 flex items-center text-xl font-bold text-white">
              <RocketLaunchIcon class="mr-2 size-6 text-blue-400" />
              Digitalisierung für Unternehmen
            </h3>
            <ul class="flex-grow space-y-3 text-gray-300">
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Prozessoptimierung & Workflow-Automatisierung
              </li>
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Cloud-Einführung & sichere Datenmigration
              </li>
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Maßgeschneiderte digitale Lösungen
              </li>
            </ul>
            <div class="mt-auto pt-6">
              <RouterLink to="/digitalisierung" class="block">
                <button
                  class="w-full rounded-lg bg-blue-600/60 py-2 text-sm font-medium text-white transition-all hover:bg-blue-600"
                >
                  Digitalisierung starten
                </button>
              </RouterLink>
            </div>
          </div>

          <!-- Webseiten Card -->
          <div
            class="flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/20"
          >
            <h3 class="mb-4 flex items-center text-xl font-bold text-white">
              <GlobeAltIcon class="mr-2 size-6 text-blue-400" />
              Webseiten-Erstellung
            </h3>
            <ul class="flex-grow space-y-3 text-gray-300">
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Von kleinen Onepagern bis zu umfangreichen Geschäftswebseiten
              </li>
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Schnell, responsiv & für alle Geräte optimiert
              </li>
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                DSGVO-konform, technisch sauber & SEO-optimiert
              </li>
            </ul>
            <div class="mt-auto pt-6">
              <RouterLink to="/webseiten-erstellung" class="block">
                <button
                  class="w-full rounded-lg bg-blue-600/60 py-2 text-sm font-medium text-white transition-all hover:bg-blue-600"
                >
                  Webseite erstellen lassen
                </button>
              </RouterLink>
            </div>
          </div>

          <!-- IT-Beratung Card -->
          <div
            class="flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/20"
          >
            <h3 class="mb-4 flex items-center text-xl font-bold text-white">
              <LightBulbIcon class="mr-2 size-6 text-blue-400" />
              IT-Beratung & Einrichtung
            </h3>
            <ul class="flex-grow space-y-3 text-gray-300">
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Hilfe bei Domain, Hosting, E-Mail & Cloud
              </li>
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Schulung & Erklärung (auch für Technik-Einsteiger:innen)
              </li>
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Individuelle Lösungen für Ihren Bedarf
              </li>
            </ul>
            <div class="mt-auto pt-6">
              <RouterLink to="/kontakt" class="block">
                <button
                  class="w-full rounded-lg bg-blue-600/60 py-2 text-sm font-medium text-white transition-all hover:bg-blue-600"
                >
                  Beratung anfordern
                </button>
              </RouterLink>
            </div>
          </div>

          <!-- IT-Service Card -->
          <div
            class="flex flex-col overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/80 to-gray-900/80 p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-blue-900/20"
          >
            <h3 class="mb-4 flex items-center text-xl font-bold text-white">
              <ComputerDesktopIcon class="mr-2 size-6 text-blue-400" />
              IT-Service vor Ort & per Fernwartung
            </h3>
            <ul class="flex-grow space-y-3 text-gray-300">
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                PC-Reparatur, Fehleranalyse, Systemoptimierung
              </li>
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                WLAN- & Netzwerkprobleme lösen
              </li>
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Drucker, Scanner, NAS & Co. einrichten
              </li>
              <li class="flex items-start">
                <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
                Softwarehilfe, Virenschutz, Backups
              </li>
            </ul>
            <div class="mt-auto pt-6">
              <RouterLink to="/kontakt" class="block">
                <button
                  class="w-full rounded-lg bg-blue-600/60 py-2 text-sm font-medium text-white transition-all hover:bg-blue-600"
                >
                  IT-Service anfragen
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Einsatzgebiet Section -->
    <section class="py-4">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-4 flex items-center">
          <MapPinIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-3xl font-bold text-white md:text-4xl">Mein Einsatzgebiet</h2>
        </div>

        <p class="mb-6 text-gray-300">
          Ich arbeite lokal und persönlich – in Goslar und Umgebung, darunter:
        </p>

        <div class="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
          <div
            class="rounded-lg bg-gray-800/40 p-4 text-center transition-all hover:bg-gray-800/60"
          >
            <p class="font-medium text-blue-400">Goslar</p>
          </div>
          <div
            class="rounded-lg bg-gray-800/40 p-4 text-center transition-all hover:bg-gray-800/60"
          >
            <p class="font-medium text-blue-400">Vienenburg</p>
          </div>
          <div
            class="rounded-lg bg-gray-800/40 p-4 text-center transition-all hover:bg-gray-800/60"
          >
            <p class="font-medium text-blue-400">Bad Harzburg</p>
          </div>
          <div
            class="rounded-lg bg-gray-800/40 p-4 text-center transition-all hover:bg-gray-800/60"
          >
            <p class="font-medium text-blue-400">Langelsheim</p>
          </div>
          <div
            class="rounded-lg bg-gray-800/40 p-4 text-center transition-all hover:bg-gray-800/60"
          >
            <p class="font-medium text-blue-400">Seesen</p>
          </div>
          <div
            class="rounded-lg bg-gray-800/40 p-4 text-center transition-all hover:bg-gray-800/60"
          >
            <p class="font-medium text-blue-400">Clausthal-Z.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vorteile Section -->
    <section class="py-4">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-4 flex items-center">
          <StarIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-3xl font-bold text-white md:text-4xl">Warum ich?</h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <div class="mb-3 text-2xl text-blue-400">🔒</div>
            <h3 class="mb-2 text-xl font-semibold text-white">Persönlich & vertraulich</h3>
            <p class="text-gray-300">
              Direkter Kontakt zu Ihrem Ansprechpartner ohne Hotlines und Warteschleifen.
            </p>
          </div>

          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <div class="mb-3 text-2xl text-blue-400">🧠</div>
            <h3 class="mb-2 text-xl font-semibold text-white">Fachlich kompetent</h3>
            <p class="text-gray-300">
              Informatiker mit langjähriger Erfahrung und fundiertem technischen Know-how.
            </p>
          </div>

          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <div class="mb-3 text-2xl text-blue-400">🧰</div>
            <h3 class="mb-2 text-xl font-semibold text-white">Technik aus einer Hand</h3>
            <p class="text-gray-300">
              Von der Fehlerbehebung bis zur Webseite - alle IT-Dienste von einem Anbieter.
            </p>
          </div>

          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <div class="mb-3 text-2xl text-blue-400">🕒</div>
            <h3 class="mb-2 text-xl font-semibold text-white">Flexibel & schnell verfügbar</h3>
            <p class="text-gray-300">
              Kurze Reaktionszeiten und flexible Terminvereinbarung nach Ihrem Bedarf.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Persönliche Vorstellung -->
    <section class="py-4">
      <div class="container mx-auto max-w-6xl px-6">
        <div
          class="overflow-hidden rounded-xl bg-gradient-to-br from-gray-800/70 to-gray-900/70 p-6 md:p-8"
        >
          <div class="flex flex-col items-center gap-6 md:flex-row">
            <div
              class="h-32 w-32 flex-shrink-0 overflow-hidden rounded-full border-2 border-blue-500/30 md:h-40 md:w-40"
            >
              <img
                src="@/assets/webp/me2.webp"
                alt="Dominik Kasten - IT-Dienstleister aus Goslar"
                class="h-full w-full object-cover"
              />
            </div>
            <div>
              <h3 class="mb-3 text-2xl font-bold text-white">Ein echter Mensch, kein Konzern</h3>
              <p class="mb-4 text-gray-300">
                Dominik Kasten – IT-Dienstleister aus Leidenschaft. Mein Ziel ist es, Technik für
                Sie einfach und zugänglich zu machen. Mit mir haben Sie einen lokalen
                Ansprechpartner, der Ihre Bedürfnisse versteht und maßgeschneiderte Lösungen bietet
                – ohne komplizierte Fachsprache und überflüssige Extras.
              </p>
              <RouterLink to="/ueber-mich">
                <button
                  class="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
                >
                  Mehr über mich erfahren
                  <ArrowRightIcon class="ml-1 size-4" />
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="px-3 pt-4 pb-10">
      <div class="container mx-auto max-w-4xl">
        <div
          class="overflow-hidden rounded-2xl bg-gradient-to-br from-[#334488]/50 to-[#3a3f8f]/30 p-8 shadow-xl"
        >
          <div class="text-center">
            <h2 class="text-3xl font-bold text-white md:text-4xl">
              Jetzt Kontakt aufnehmen – ganz unkompliziert
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-gray-300">
              Ich freue mich über Ihre Anfrage – telefonisch, per Mail oder über das
              Kontaktformular. Beschreiben Sie einfach kurz Ihr Anliegen, und ich melde mich zeitnah
              bei Ihnen zurück.
            </p>
            <div class="mt-8 flex flex-wrap items-center justify-center gap-4">
              <RouterLink to="/kontakt">
                <button
                  class="cursor-pointer rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
                >
                  Kontakt aufnehmen
                </button>
              </RouterLink>
              <RouterLink to="/preise">
                <button
                  class="cursor-pointer rounded-lg border border-blue-500 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-blue-600/20 hover:shadow-xl hover:shadow-blue-600/20"
                >
                  Preisübersicht ansehen
                </button>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import {
  ComputerDesktopIcon,
  GlobeAltIcon,
  LightBulbIcon,
  MapPinIcon,
  StarIcon,
  ArrowRightIcon,
  UserIcon,
  UserGroupIcon,
  BuildingOfficeIcon,
  WrenchIcon,
  RocketLaunchIcon,
} from '@heroicons/vue/24/outline'
import MetaTags from '@/components/MetaTags.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
