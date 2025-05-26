<template>
  <div class="py-12">
    <div class="container mx-auto max-w-4xl px-6">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-white md:text-4xl">Datenschutzerklärung</h1>
        <div class="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400"></div>
      </div>

      <div
        class="rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">1. Datenschutz auf einen Blick</h2>

        <div class="space-y-6 text-gray-300">
          <div>
            <h3 class="mb-2 text-lg font-medium text-white">Allgemeine Hinweise</h3>
            <p>
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem
              Text aufgeführten Datenschutzerklärung.
            </p>
          </div>

          <div>
            <h3 class="mb-2 text-lg font-medium text-white">Datenerfassung auf dieser Website</h3>
            <p class="font-medium">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </p>
            <p class="mt-1">
              Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
              Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
            </p>

            <p class="mt-4 font-medium">Wie erfassen wir Ihre Daten?</p>
            <p class="mt-1">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei
              kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
            </p>
            <p class="mt-2">
              Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
              durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
              Daten erfolgt automatisch, sobald Sie diese Website betreten.
            </p>

            <p class="mt-4 font-medium">Wofür nutzen wir Ihre Daten?</p>
            <p class="mt-1">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
              gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet
              werden.
            </p>

            <p class="mt-4 font-medium">Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
            <p class="mt-1">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
              Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
              Recht, die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine
              Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung
              jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten
              Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
              verlangen.
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-8 rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">2. Hosting</h2>

        <div class="space-y-6 text-gray-300">
          <div>
            <h3 class="mt-4 mb-2 text-lg font-medium text-white">
              Externes Hosting durch Amazon Web Services (AWS)
            </h3>
            <p>
              Diese Website wird extern gehostet. Der Anbieter ist:
              <br />
              <strong
                >Amazon Web Services EMEA SARL, 38 Avenue John F. Kennedy, L-1855 Luxemburg</strong
              >.
            </p>
            <p class="mt-2">
              Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
              Servern von AWS gespeichert. Hierbei kann es sich insbesondere um IP-Adressen,
              Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Websitezugriffe sowie sonstige über eine Website generierte Daten handeln.
            </p>
            <p class="mt-2">
              Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
              potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) sowie im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres Online-Angebots durch
              einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
          </div>
        </div>
      </div>

      <div class="mt-6 text-center">
        <RouterLink
          to="/"
          class="group inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Zurück zur Startseite
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
