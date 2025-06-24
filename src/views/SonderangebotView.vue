<template>
  <div class="relative min-h-screen">
    <!-- Meta-Tags Component -->
    <MetaTags
      :meta="{
        title: 'Express-Webseite für nur 299€ – Blitzschnell in 2 Tagen online',
        description:
          'Limitiertes Sonderangebot: Professionelle Express-Webseite für nur 299€! Inkl. Landingpage, Datenschutz & Impressum. In nur 2 Tagen erstellt. Responsiv & SEO-optimiert.',
        keywords:
          'express-webseite, günstige webseite, schnelle webseitenerstellung, webseite in 2 tagen, webseite 299€, webdesign sonderangebot',
        ogTitle: 'Express-Webseite für nur 299€ – In nur 2 Tagen online',
        ogDescription:
          'Limitiertes Sonderangebot: Professionelle Express-Webseite für nur 299€! Komplett responsiv, superschnell, mit Datenschutz & Impressum in nur 2 Tagen erstellt.',
        ogImage: 'https://dominik-kasten.de/social-preview-webseiten.png',
        robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
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
            <div
              class="mb-6 inline-block rounded-full bg-blue-600/80 px-4 py-1 text-sm font-semibold text-white"
            >
              ⚡ LIMITIERTES SONDERANGEBOT
            </div>
            <h1
              class="bg-gradient-to-r from-white to-blue-400 bg-clip-text pb-3 text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Ihre professionelle Webseite für nur 299€
            </h1>
            <p class="mt-4 text-base font-medium text-blue-400 sm:text-lg md:text-xl">
              Komplett in nur 2 Tagen erstellt
            </p>
            <p class="mt-5 text-sm leading-relaxed text-gray-300 sm:mt-6 sm:text-base md:text-lg">
              Starten Sie jetzt mit einer professionellen Webpräsenz! Mein Express-Service bietet
              Ihnen eine maßgeschneiderte Landingpage mit Datenschutz und Impressum – vollständig
              responsiv und SEO-optimiert. Ideal für Selbstständige und Kleinunternehmen, die
              schnell und kostengünstig online gehen wollen.
            </p>
            <div
              class="mt-6 flex flex-col flex-wrap items-center justify-center gap-3 sm:mt-8 sm:flex-row md:justify-start"
            >
              <RouterLink to="/kontakt" class="w-full sm:w-auto">
                <button
                  class="w-full min-w-[200px] rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30"
                >
                  Jetzt Angebot sichern
                </button>
              </RouterLink>
              <a href="#details" class="w-full sm:w-auto">
                <button
                  class="w-full min-w-[200px] rounded-full border-2 border-blue-400/40 px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-blue-400 hover:bg-slate-800/50 hover:text-blue-300"
                >
                  Details anzeigen
                </button>
              </a>
            </div>

            <!-- Timer - Optional: Könnte für Dringlichkeit sorgen -->
            <div class="mt-8 inline-block rounded-lg bg-gray-800/70 px-6 py-3">
              <p class="text-sm font-medium text-yellow-400">
                ⏰ Limitiertes Angebot - Nur für kurze Zeit!
              </p>
            </div>
          </div>

          <!-- Image -->
          <div class="flex w-2/3 items-center justify-center sm:w-1/2 md:w-2/5">
            <img
              src="@/assets/webp/website.webp"
              alt="Express-Webseite Sonderangebot"
              class="h-auto w-full max-w-[150px] sm:max-w-[220px] md:max-w-xs lg:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Was ist enthalten Section -->
    <section id="details" class="bg-slate-900/50 py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-4 text-center text-3xl font-bold text-white">
          Ihr Express-Angebot für nur 299€
        </h2>
        <p class="mb-12 text-center text-gray-300">
          Alles inklusive für Ihren schnellen und professionellen Webauftritt
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          <!-- Leistung 1 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500"
            >
              <GlobeAltIcon class="h-6 w-6" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Professionelle Landingpage</h3>
            <p class="text-gray-300">
              Eine maßgeschneiderte Landingpage, die perfekt Ihr Geschäft oder Ihre Dienstleistung
              präsentiert. Modern gestaltet und auf Ihre Zielgruppe ausgerichtet.
            </p>
          </div>

          <!-- Leistung 2 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500"
            >
              <DocumentTextIcon class="h-6 w-6" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Rechtssichere Dokumente</h3>
            <p class="text-gray-300">
              Rechtlich notwendige Seiten wie Datenschutz und Impressum sind im Angebot enthalten
              und werden DSGVO-konform für Sie erstellt.
            </p>
          </div>

          <!-- Leistung 3 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500"
            >
              <DevicePhoneMobileIcon class="h-6 w-6" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Responsive Design</h3>
            <p class="text-gray-300">
              Ihre Website wird auf allen Geräten perfekt dargestellt – vom Smartphone über Tablets
              bis zum Desktop-Computer.
            </p>
          </div>

          <!-- Leistung 4 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/10 text-blue-500"
            >
              <BoltIcon class="h-6 w-6" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Blitzschnelle Umsetzung</h3>
            <p class="text-gray-300">
              Express-Service: Ihre fertige Webseite in nur 2 Tagen – perfekt, wenn Sie schnell
              online gehen müssen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Preissektion -->
    <section class="py-16">
      <div class="container mx-auto max-w-4xl px-6">
        <div
          class="overflow-hidden rounded-2xl bg-gradient-to-br from-blue-900/30 to-gray-900/90 p-2"
        >
          <div class="rounded-xl bg-gray-800/50 p-6 sm:p-8">
            <div class="text-center">
              <h2 class="text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Express-Webseite für nur
              </h2>
              <div class="my-6 flex items-center justify-center">
                <span class="text-4xl font-bold text-gray-400 line-through sm:text-5xl">599€</span>
                <span class="ml-6 text-5xl font-bold text-blue-400 sm:text-6xl">299€</span>
              </div>
              <p class="mb-8 text-lg text-gray-300">Einmalige Zahlung, keine versteckten Kosten</p>

              <RouterLink to="/kontakt">
                <button
                  class="rounded-lg bg-blue-600 px-8 py-4 text-lg font-semibold text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  Jetzt Angebot sichern
                </button>
              </RouterLink>

              <p class="mt-4 text-sm text-gray-400">
                * Angebot zeitlich begrenzt. Hosting und Domain nicht enthalten.
              </p>
            </div>

            <div class="mt-8 grid grid-cols-1 gap-4 border-t border-gray-700 pt-8 sm:grid-cols-2">
              <div class="flex items-start">
                <CheckCircleIcon class="mt-1 h-5 w-5 text-blue-400" />
                <span class="ml-2 text-gray-300">Landingpage nach Ihren Wünschen</span>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="mt-1 h-5 w-5 text-blue-400" />
                <span class="ml-2 text-gray-300">Datenschutz & Impressum</span>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="mt-1 h-5 w-5 text-blue-400" />
                <span class="ml-2 text-gray-300">Responsive Design</span>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="mt-1 h-5 w-5 text-blue-400" />
                <span class="ml-2 text-gray-300">SEO-Grundoptimierung</span>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="mt-1 h-5 w-5 text-blue-400" />
                <span class="ml-2 text-gray-300">Fertigstellung in 2 Tagen</span>
              </div>
              <div class="flex items-start">
                <CheckCircleIcon class="mt-1 h-5 w-5 text-blue-400" />
                <span class="ml-2 text-gray-300">Kontaktformular</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="bg-slate-900/50 py-16">
      <div class="container mx-auto max-w-4xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold text-white">Häufig gestellte Fragen</h2>

        <div class="space-y-6">
          <div class="rounded-lg bg-slate-800/70 p-6">
            <h3 class="text-xl font-semibold text-white">Was ist im Angebot genau enthalten?</h3>
            <p class="mt-3 text-gray-300">
              Das Express-Angebot umfasst eine responsive Landingpage mit Ihren Inhalten, ein
              Kontaktformular sowie rechtlich konforme Datenschutz- und Impressumsseiten. Die
              Website wird für Suchmaschinen optimiert und ist auf allen Geräten perfekt
              darstellbar.
            </p>
          </div>

          <div class="rounded-lg bg-slate-800/70 p-6">
            <h3 class="text-xl font-semibold text-white">Wie läuft der Prozess ab?</h3>
            <p class="mt-3 text-gray-300">
              Nach Ihrer Anfrage führen wir ein kurzes Beratungsgespräch (telefonisch oder online),
              in dem wir Ihre Wünsche besprechen. Sie stellen mir Ihre Texte und Bilder zur
              Verfügung, und innerhalb von 2 Werktagen erhalten Sie Ihre fertige Website zur Ansicht
              und Freigabe.
            </p>
          </div>

          <div class="rounded-lg bg-slate-800/70 p-6">
            <h3 class="text-xl font-semibold text-white">Was ist nicht im Preis enthalten?</h3>
            <p class="mt-3 text-gray-300">
              Domain-Registrierung und Hosting sind nicht im Preis enthalten. Ich kann Ihnen jedoch
              gerne bei der Einrichtung helfen oder ein passendes Hosting-Paket empfehlen, das Ihren
              Anforderungen entspricht.
            </p>
          </div>

          <div class="rounded-lg bg-slate-800/70 p-6">
            <h3 class="text-xl font-semibold text-white">
              Kann die Website später erweitert werden?
            </h3>
            <p class="mt-3 text-gray-300">
              Ja, die Website kann jederzeit um weitere Seiten oder Funktionen erweitert werden.
              Erweiterungen werden nach Aufwand berechnet oder können im Rahmen eines
              Wartungsvertrags vereinbart werden.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16">
      <div class="container mx-auto max-w-4xl px-6">
        <div class="rounded-2xl bg-gradient-to-r from-blue-900/40 to-blue-600/40 p-8 text-center">
          <h2 class="text-2xl font-bold text-white sm:text-3xl">
            Bereit für Ihren professionellen Webauftritt?
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-gray-300">
            Sichern Sie sich jetzt dieses limitierte Angebot und gehen Sie in nur 2 Tagen online!
          </p>
          <div class="mt-8">
            <RouterLink to="/kontakt">
              <button
                class="rounded-full bg-white px-8 py-3 text-lg font-semibold text-blue-900 transition-all hover:bg-blue-50 hover:shadow-lg hover:shadow-white/10"
              >
                Jetzt zum Sonderpreis starten
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import {
  GlobeAltIcon,
  DocumentTextIcon,
  DevicePhoneMobileIcon,
  BoltIcon,
  CheckCircleIcon,
} from '@heroicons/vue/24/outline'
import MetaTags from '@/components/MetaTags.vue'
</script>
