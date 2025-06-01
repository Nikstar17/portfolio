<template>
  <div class="relative min-h-screen">
    <!-- Meta-Tags Component -->
    <MetaTags
      :meta="{
        title: 'Preise – IT-Service & Webseitenerstellung in Goslar | Transparent & fair',
        description:
          'Faire Preise für professionelle IT-Dienstleistungen und Webseiten-Erstellung in Goslar. Persönlich, transparent und zuverlässig – jetzt informieren.',
        keywords:
          'it-service preise goslar, webseiten erstellung kosten, it-dienstleister preise harz, it-hilfe kosten, webdesign goslar preise',
        ogTitle: 'Preise für IT-Service & Webseiten-Erstellung in Goslar',
        ogDescription:
          'Transparente Preisübersicht für IT-Dienstleistungen und Webseiten-Erstellung in Goslar und Umgebung. Persönlich, fair und ohne versteckte Kosten.',
      }"
    />

    <!-- Hero Section -->
    <section class="relative py-6 md:py-16">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="h-full w-full"></div>
      </div>

      <div class="relative z-10 container mx-auto max-w-6xl px-4 md:px-6">
        <div class="text-center">
          <h1 class="text-2xl font-bold text-white md:text-4xl lg:text-5xl">
            Transparente Preise für IT- und Web-Dienstleistungen in Goslar
          </h1>
          <p class="mx-auto mt-4 max-w-4xl text-base text-gray-300 md:mt-6 md:text-lg">
            Als freiberuflicher IT-Dienstleister biete ich Ihnen in Goslar und Umgebung persönliche
            Unterstützung bei technischen Herausforderungen sowie die professionelle Erstellung
            moderner Webseiten. Mein Anspruch: klare Kommunikation, faire Preise und
            nachvollziehbare Leistungen – ohne versteckte Kosten oder undurchsichtige Pauschalen.
          </p>
        </div>
      </div>
    </section>

    <!-- IT-Service Preise Section -->
    <section class="py-6 md:py-12">
      <div class="container mx-auto max-w-6xl px-4 md:px-6">
        <div class="mb-6 flex items-center md:mb-8">
          <ComputerDesktopIcon class="mr-2 size-6 text-blue-500 md:mr-3 md:size-7" />
          <h2 class="text-xl font-bold text-white md:text-2xl lg:text-3xl">IT-Service vor Ort</h2>
        </div>

        <!-- Preistabelle für IT-Service -->
        <div class="overflow-hidden overflow-x-auto rounded-lg bg-slate-800/60 shadow-xl">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-700 bg-slate-900/70">
                <th
                  class="px-3 py-2 text-left text-base font-medium text-white md:px-6 md:py-4 md:text-lg"
                >
                  Leistung
                </th>
                <th
                  class="px-3 py-2 text-right text-base font-medium text-white md:px-6 md:py-4 md:text-lg"
                >
                  Preis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Erstberatung (bis 15 Min)
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-green-400 md:px-6 md:py-4 md:text-base"
                >
                  kostenfrei
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Stundensatz IT-Service
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  70 €/Stunde
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Mindestaufwand vor Ort
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  1 Stunde / 70 € pauschal
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Fernwartung (nach Terminvereinbarung)
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  <div class="flex flex-wrap justify-end gap-x-4 gap-y-1">
                    <span>bis 15 Min: 20 €</span>
                    <span>bis 30 Min: 35 €</span>
                    <span>je weitere 15 Min: 15 €</span>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-4 space-y-3 md:mt-6 md:space-y-4">
          <div class="rounded-lg bg-blue-900/20 p-3 text-gray-300 md:p-4">
            <div class="flex items-start">
              <MapPinIcon class="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
              <p class="text-sm md:text-base">
                Fahrtzeiten sind im Stundensatz enthalten und werden als reguläre Arbeitszeit
                abgerechnet. Einsätze erfolgen ausschließlich vor Ort in Goslar und umliegenden
                Orten, wie z. B. Vienenburg, Bad Harzburg, Langelsheim oder Seesen.
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-blue-900/20 p-3 text-gray-300 md:p-4">
            <div class="flex items-start">
              <ComputerDesktopIcon class="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
              <p class="text-sm md:text-base">
                Hinweis: Fernwartung ist nur bei stabiler Internetverbindung möglich. Für Neukunden
                ist vorab ggf. ein kurzer Telefoncheck erforderlich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Webseiten Preise Section -->
    <section class="bg-slate-900/30 py-6 md:py-12">
      <div class="container mx-auto max-w-6xl px-4 md:px-6">
        <div class="mb-6 flex items-center md:mb-8">
          <GlobeAltIcon class="mr-2 size-6 text-blue-500 md:mr-3 md:size-7" />
          <h2 class="text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Webseiten-Erstellung – Preisbeispiele
          </h2>
        </div>

        <p class="mb-4 text-base text-gray-300 md:mb-6 md:text-lg">
          Ich erstelle moderne, funktionale Webseiten für Selbstständige, Unternehmen und
          Privatkunden – individuell auf Ihre Anforderungen abgestimmt.
        </p>

        <!-- Preistabelle für Webseiten -->
        <div class="overflow-hidden overflow-x-auto rounded-lg bg-slate-800/60 shadow-xl">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-700 bg-slate-900/70">
                <th
                  class="px-3 py-2 text-left text-base font-medium text-white md:px-6 md:py-4 md:text-lg"
                >
                  Paket
                </th>
                <th
                  class="px-3 py-2 text-right text-base font-medium text-white md:px-6 md:py-4 md:text-lg"
                >
                  Preis
                </th>
                <th
                  class="hidden px-3 py-2 text-left text-base font-medium text-white sm:table-cell md:px-6 md:py-4 md:text-lg"
                >
                  Beschreibung
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Web-Visitenkarte (1 Seite)
                  <div class="mt-1 text-xs text-gray-400 sm:hidden">
                    Statische Website mit Impressum & Datenschutz – bei gelieferten Texten
                  </div>
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  349 €
                </td>
                <td
                  class="hidden px-3 py-2 text-sm text-gray-300 sm:table-cell md:px-6 md:py-4 md:text-base"
                >
                  Statische Website mit Impressum & Datenschutz – bei gelieferten Texten
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  + Texterstellung
                  <div class="mt-1 text-xs text-gray-400 sm:hidden">
                    Erstellung kurzer Texte nach Absprache
                  </div>
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  +200 €
                </td>
                <td
                  class="hidden px-3 py-2 text-sm text-gray-300 sm:table-cell md:px-6 md:py-4 md:text-base"
                >
                  Erstellung kurzer Texte nach Absprache
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  WordPress-Onepager
                  <div class="mt-1 text-xs text-gray-400 sm:hidden">
                    Mit CMS, Kontaktformular, Impressum, Datenschutz, mobil optimiert
                  </div>
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  790 €
                </td>
                <td
                  class="hidden px-3 py-2 text-sm text-gray-300 sm:table-cell md:px-6 md:py-4 md:text-base"
                >
                  Mit CMS, Kontaktformular, Impressum, Datenschutz, mobil optimiert
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Kleine Website (3–5 Seiten)
                  <div class="mt-1 text-xs text-gray-400 sm:hidden">
                    Startseite, Leistungen, Über mich, Kontakt – inkl. Design & SEO-Basics, wenn
                    Texte vorhanden sind
                  </div>
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  990 €
                </td>
                <td
                  class="hidden px-3 py-2 text-sm text-gray-300 sm:table-cell md:px-6 md:py-4 md:text-base"
                >
                  Startseite, Leistungen, Über mich, Kontakt – inkl. Design & SEO-Basics, wenn Texte
                  vorhanden sind
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  + komplette Texterstellung
                  <div class="mt-1 text-xs text-gray-400 sm:hidden">
                    Auf Basis von Stichpunkten, Gespräch oder groben Entwürfen
                  </div>
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  +250 €
                </td>
                <td
                  class="hidden px-3 py-2 text-sm text-gray-300 sm:table-cell md:px-6 md:py-4 md:text-base"
                >
                  Auf Basis von Stichpunkten, Gespräch oder groben Entwürfen
                </td>
              </tr>
              <tr>
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Individuelle Weblösungen
                  <div class="mt-1 text-xs text-gray-400 sm:hidden">
                    z. B. Online-Buchung, Mitgliederbereich, erweiterte Funktionalität
                  </div>
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  nach Aufwand
                </td>
                <td
                  class="hidden px-3 py-2 text-sm text-gray-300 sm:table-cell md:px-6 md:py-4 md:text-base"
                >
                  z. B. Online-Buchung, Mitgliederbereich, erweiterte Funktionalität
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Zusatzleistungen Tabelle -->
        <h3 class="mt-10 mb-6 text-xl font-semibold text-white">🔧 Zusatzleistungen</h3>
        <div class="overflow-hidden overflow-x-auto rounded-lg bg-slate-800/60 shadow-xl">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-700 bg-slate-900/70">
                <th
                  class="px-3 py-2 text-left text-base font-medium text-white md:px-6 md:py-4 md:text-lg"
                >
                  Leistung
                </th>
                <th
                  class="px-3 py-2 text-right text-base font-medium text-white md:px-6 md:py-4 md:text-lg"
                >
                  Preis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Domain- & Hosting-Einrichtung
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  59 € pauschal
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Technische Einweisung (z. B. WordPress nutzen)
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  49 € (ca. 45 Minuten)
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Webseitenpflege / Support
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  49 €/Stunde
                </td>
              </tr>
              <tr>
                <td class="px-3 py-2 text-sm text-gray-300 md:px-6 md:py-4 md:text-base">
                  Wartungspaket (z. B. Updates, Backups)
                </td>
                <td
                  class="px-3 py-2 text-right text-sm font-medium text-gray-300 md:px-6 md:py-4 md:text-base"
                >
                  ab 29 €/Monat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-6 rounded-lg bg-blue-900/20 p-4 text-gray-300">
          <div class="flex items-start">
            <CheckBadgeIcon class="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
            <p class="text-sm md:text-base">
              Alle Webseiten werden mobil optimiert und DSGVO-konform umgesetzt.
            </p>
          </div>
        </div>

        <div class="mt-8 rounded-lg bg-slate-800/40 p-6">
          <p class="text-center text-lg text-white">
            Sie sind sich nicht sicher, welches Paket passt?<br />
            <span class="mt-2 block text-sm text-gray-300 md:text-base"
              >Ich berate Sie gerne persönlich –</span
            >
          </p>
          <div class="mt-4 flex justify-center">
            <RouterLink to="/kontakt" class="w-full sm:w-auto">
              <button
                class="w-full rounded-lg bg-blue-600 px-5 py-2 text-sm text-white transition-all hover:bg-blue-700 md:text-base"
              >
                jetzt Kontakt aufnehmen »
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Individuelle Lösungen Section -->
    <section class="py-6 md:py-12">
      <div class="container mx-auto max-w-6xl px-4 md:px-6">
        <div class="mb-6 flex items-center md:mb-8">
          <LightBulbIcon class="mr-2 size-6 text-blue-500 md:mr-3 md:size-7" />
          <h2 class="text-xl font-bold text-white md:text-2xl lg:text-3xl">
            Individuelle Lösungen
          </h2>
        </div>

        <div class="rounded-xl bg-slate-800/40 p-4 shadow-lg md:p-6">
          <p class="mb-3 text-sm text-gray-300 md:mb-4 md:text-base">
            Sie benötigen eine komplexere Lösung, etwa mit:
          </p>

          <ul class="mb-4 space-y-2 md:mb-6 md:space-y-3">
            <li class="flex items-start">
              <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
              <span class="text-sm text-gray-300 md:text-base">Online-Terminbuchung</span>
            </li>
            <li class="flex items-start">
              <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
              <span class="text-sm text-gray-300 md:text-base"
                >Kundenbereich oder Mitgliederzugang</span
              >
            </li>
            <li class="flex items-start">
              <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
              <span class="text-sm text-gray-300 md:text-base">Mehrsprachigkeit</span>
            </li>
            <li class="flex items-start">
              <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
              <span class="text-sm text-gray-300 md:text-base">oder besonderen Funktionen?</span>
            </li>
          </ul>

          <p class="text-sm text-gray-300 md:text-base">
            Gerne bespreche ich Ihr Vorhaben mit Ihnen und erstelle ein maßgeschneidertes Angebot.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-b from-slate-900/50 to-blue-900/20 py-8 md:py-16">
      <div class="container mx-auto max-w-4xl px-4 text-center md:px-6">
        <h2 class="mb-3 text-xl font-bold text-white md:mb-4 md:text-2xl lg:text-3xl">
          Kontakt & Angebot
        </h2>
        <p class="mb-5 text-base text-gray-300 md:mb-6 md:text-lg">
          Sie wünschen ein persönliches Angebot oder haben Fragen?<br />
          Ich berate Sie gern – telefonisch, per E-Mail oder über das Kontaktformular.
        </p>
        <RouterLink to="/kontakt">
          <button
            class="w-full rounded-full bg-blue-600 px-6 py-2.5 text-base font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 sm:w-auto md:px-8 md:py-3 md:text-lg"
          >
            Jetzt Kontakt aufnehmen
          </button>
        </RouterLink>
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
  CheckBadgeIcon,
} from '@heroicons/vue/24/outline'
import MetaTags from '@/components/MetaTags.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
