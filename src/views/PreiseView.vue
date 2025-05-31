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
    <section class="relative py-8 md:py-16">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="h-full w-full"></div>
      </div>

      <div class="relative z-10 container mx-auto max-w-6xl px-6">
        <div class="text-center">
          <h1 class="text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            Transparente Preise für IT- und Web-Dienstleistungen in Goslar
          </h1>
          <p class="mx-auto mt-6 max-w-4xl text-lg text-gray-300">
            Als freiberuflicher IT-Dienstleister biete ich Ihnen in Goslar und Umgebung persönliche
            Unterstützung bei technischen Herausforderungen sowie die professionelle Erstellung
            moderner Webseiten. Mein Anspruch: klare Kommunikation, faire Preise und
            nachvollziehbare Leistungen – ohne versteckte Kosten oder undurchsichtige Pauschalen.
          </p>
        </div>
      </div>
    </section>

    <!-- IT-Service Preise Section -->
    <section class="py-8 md:py-12">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-8 flex items-center">
          <ComputerDesktopIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-2xl font-bold text-white md:text-3xl">IT-Service vor Ort</h2>
        </div>

        <!-- Preistabelle für IT-Service -->
        <div class="overflow-hidden rounded-lg bg-slate-800/60 shadow-xl">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-700 bg-slate-900/70">
                <th class="px-4 py-3 text-left text-lg font-medium text-white md:px-6 md:py-4">
                  Leistung
                </th>
                <th class="px-4 py-3 text-right text-lg font-medium text-white md:px-6 md:py-4">
                  Preis (inkl. MwSt)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Erstberatung (bis 15 Minuten)
                </td>
                <td class="px-4 py-3 text-right font-medium text-green-400 md:px-6 md:py-4">
                  kostenfrei
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">Stundensatz IT-Service</td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  70 €/Stunde
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">Mindestaufwand vor Ort</td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  1 Stunde / 70 € pauschal
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Fernwartung (nach Terminvereinbarung)
                </td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  <span class="block">bis 15 Minuten: 20 €</span>
                  <span class="block">bis 30 Minuten: 35 €</span>
                  <span class="block">je weitere 15 Minuten: 15 €</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-6 space-y-4">
          <div class="rounded-lg bg-blue-900/20 p-4 text-gray-300">
            <div class="flex">
              <MapPinIcon class="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
              <p>
                Fahrtzeiten sind im Stundensatz enthalten und werden als reguläre Arbeitszeit
                abgerechnet. Einsätze erfolgen ausschließlich vor Ort in Goslar und umliegenden
                Orten, wie z. B. Vienenburg, Bad Harzburg, Langelsheim oder Seesen.
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-blue-900/20 p-4 text-gray-300">
            <div class="flex">
              <ComputerDesktopIcon class="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
              <p>
                Hinweis: Fernwartung ist nur bei stabiler Internetverbindung möglich. Für Neukunden
                ist vorab ggf. ein kurzer Telefoncheck erforderlich.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Webseiten Preise Section -->
    <section class="bg-slate-900/30 py-8 md:py-12">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-8 flex items-center">
          <GlobeAltIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-2xl font-bold text-white md:text-3xl">
            Webseiten-Erstellung – Preisbeispiele
          </h2>
        </div>

        <p class="mb-6 text-gray-300">
          Ich erstelle moderne, funktionale Webseiten für Selbstständige, Unternehmen und
          Privatkunden – individuell auf Ihre Anforderungen abgestimmt.
        </p>

        <!-- Preistabelle für Webseiten -->
        <div class="overflow-hidden rounded-lg bg-slate-800/60 shadow-xl">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-700 bg-slate-900/70">
                <th class="px-4 py-3 text-left text-lg font-medium text-white md:px-6 md:py-4">
                  Paket
                </th>
                <th class="px-4 py-3 text-right text-lg font-medium text-white md:px-6 md:py-4">
                  Preis
                </th>
                <th class="px-4 py-3 text-left text-lg font-medium text-white md:px-6 md:py-4">
                  Beschreibung
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">Web-Visitenkarte (1 Seite)</td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  349 €
                </td>
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Statische Website mit Impressum & Datenschutz – bei gelieferten Texten
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">+ Texterstellung</td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  +200 €
                </td>
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Erstellung kurzer Texte nach Absprache
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">WordPress-Onepager</td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  790 €
                </td>
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Mit CMS, Kontaktformular, Impressum, Datenschutz, mobil optimiert
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">Kleine Website (3–5 Seiten)</td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  990 €
                </td>
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Startseite, Leistungen, Über mich, Kontakt – inkl. Design & SEO-Basics, wenn Texte
                  vorhanden sind
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">+ komplette Texterstellung</td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  +250 €
                </td>
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Auf Basis von Stichpunkten, Gespräch oder groben Entwürfen
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">Individuelle Weblösungen</td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  nach Aufwand
                </td>
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  z. B. Online-Buchung, Mitgliederbereich, erweiterte Funktionalität
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Zusatzleistungen Tabelle -->
        <h3 class="mt-10 mb-6 text-xl font-semibold text-white">🔧 Zusatzleistungen</h3>
        <div class="overflow-hidden rounded-lg bg-slate-800/60 shadow-xl">
          <table class="w-full border-collapse">
            <thead>
              <tr class="border-b border-gray-700 bg-slate-900/70">
                <th class="px-4 py-3 text-left text-lg font-medium text-white md:px-6 md:py-4">
                  Leistung
                </th>
                <th class="px-4 py-3 text-right text-lg font-medium text-white md:px-6 md:py-4">
                  Preis
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Domain- & Hosting-Einrichtung
                </td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  59 € pauschal
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Technische Einweisung (z. B. WordPress nutzen)
                </td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  49 € (ca. 45 Minuten)
                </td>
              </tr>
              <tr class="border-b border-gray-700/30">
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">Webseitenpflege / Support</td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  49 €/Stunde
                </td>
              </tr>
              <tr>
                <td class="px-4 py-3 text-gray-300 md:px-6 md:py-4">
                  Wartungspaket (z. B. Updates, Backups)
                </td>
                <td class="px-4 py-3 text-right font-medium text-gray-300 md:px-6 md:py-4">
                  ab 29 €/Monat
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="mt-6 rounded-lg bg-blue-900/20 p-4 text-gray-300">
          <div class="flex">
            <CheckBadgeIcon class="mt-1 mr-2 h-5 w-5 flex-shrink-0 text-blue-500" />
            <p>Alle Webseiten werden mobil optimiert und DSGVO-konform umgesetzt.</p>
          </div>
        </div>

        <div class="mt-8 rounded-lg bg-slate-800/40 p-6">
          <p class="text-center text-lg text-white">
            Sie sind sich nicht sicher, welches Paket passt?<br />
            <span class="mt-2 block text-gray-300">Ich berate Sie gerne persönlich –</span>
          </p>
          <div class="mt-4 flex justify-center">
            <RouterLink to="/kontakt">
              <button
                class="rounded-lg bg-blue-600 px-6 py-2 text-white transition-all hover:bg-blue-700"
              >
                jetzt Kontakt aufnehmen »
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
    </section>

    <!-- Individuelle Lösungen Section -->
    <section class="py-8 md:py-12">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-8 flex items-center">
          <LightBulbIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-2xl font-bold text-white md:text-3xl">Individuelle Lösungen</h2>
        </div>

        <div class="rounded-xl bg-slate-800/40 p-6 shadow-lg">
          <p class="mb-4 text-gray-300">Sie benötigen eine komplexere Lösung, etwa mit:</p>

          <ul class="mb-6 space-y-3">
            <li class="flex items-start">
              <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
              <span class="text-gray-300">Online-Terminbuchung</span>
            </li>
            <li class="flex items-start">
              <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
              <span class="text-gray-300">Kundenbereich oder Mitgliederzugang</span>
            </li>
            <li class="flex items-start">
              <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
              <span class="text-gray-300">Mehrsprachigkeit</span>
            </li>
            <li class="flex items-start">
              <div class="mt-1 mr-2 flex-shrink-0 text-blue-400">•</div>
              <span class="text-gray-300">oder besonderen Funktionen?</span>
            </li>
          </ul>

          <p class="text-gray-300">
            Gerne bespreche ich Ihr Vorhaben mit Ihnen und erstelle ein maßgeschneidertes Angebot.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-b from-slate-900/50 to-blue-900/20 py-10 md:py-16">
      <div class="container mx-auto max-w-4xl px-6 text-center">
        <h2 class="mb-4 text-2xl font-bold text-white md:text-3xl">Kontakt & Angebot</h2>
        <p class="mb-6 text-lg text-gray-300">
          Sie wünschen ein persönliches Angebot oder haben Fragen?<br />
          Ich berate Sie gern – telefonisch, per E-Mail oder über das Kontaktformular.
        </p>
        <RouterLink to="/kontakt">
          <button
            class="rounded-full bg-blue-600 px-8 py-3 text-lg font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
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
