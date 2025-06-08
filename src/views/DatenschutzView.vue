<script setup lang="ts">
import CookieSettings from '../components/CookieSettings.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="py-12">
    <div class="container mx-auto max-w-4xl px-6">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-white md:text-4xl">Datenschutzerklärung</h1>
        <div class="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400"></div>
        <p class="mt-4 text-sm text-gray-400">Letzte Aktualisierung: 08.06.2025</p>
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
            <h3 class="mt-4 mb-2 text-lg font-medium text-white">Externes Hosting durch Vercel</h3>
            <p>
              Diese Website wird extern gehostet. Der Anbieter ist:
              <br />
              <strong>Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA</strong>.
            </p>
            <p class="mt-2">
              Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den
              Servern von Vercel gespeichert. Hierbei kann es sich insbesondere um IP-Adressen,
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

      <div
        class="mt-8 rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">3. Analyse-Tools und Werbung</h2>

        <div class="space-y-6 text-gray-300">
          <div>
            <h3 class="mb-2 text-lg font-medium text-white">Google Analytics</h3>
            <p>
              Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist
              die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p class="mt-2">
              Google Analytics verwendet sog. „Cookies". Das sind Textdateien, die auf Ihrem
              Computer gespeichert werden und die eine Analyse der Benutzung der Website durch Sie
              ermöglichen. Die durch den Cookie erzeugten Informationen über Ihre Benutzung dieser
              Website werden in der Regel an einen Server von Google in den USA übertragen und dort
              gespeichert.
            </p>
            <p class="mt-2">
              Die Nutzung von Google Analytics erfolgt nur mit Ihrer Einwilligung gemäß Art. 6 Abs.
              1 lit. a DSGVO. Diese Einwilligung können Sie jederzeit widerrufen. Die
              Datenverarbeitung erfolgt dabei auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1
              lit. a DSGVO. Sie können Ihre Einwilligung jederzeit widerrufen, indem Sie die
              Cookie-Einstellungen anpassen.
            </p>
            <p class="mt-2">
              <strong>IP-Anonymisierung</strong>
            </p>
            <p class="mt-1">
              Wir haben auf dieser Website die Funktion IP-Anonymisierung aktiviert. Dadurch wird
              Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder
              in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der
              Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an
              einen Server von Google in den USA übertragen und dort gekürzt.
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-8 rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">4. Einwilligungsmanagement</h2>

        <div class="space-y-6 text-gray-300">
          <div>
            <p>
              Auf unserer Website verwenden wir ein selbst entwickeltes Cookie-Einwilligungs-Tool,
              um Ihre Zustimmung zur Speicherung bestimmter Cookies auf Ihrem Endgerät oder zum
              Einsatz bestimmter Technologien einzuholen und datenschutzkonform zu dokumentieren.
              Grundlage hierfür ist Art. 6 Abs. 1 lit. c DSGVO.
            </p>
            <p class="mt-2">
              Sie können Ihre Einwilligung jederzeit über die Schaltfläche „Cookie-Einstellungen" am
              unteren Rand der Website widerrufen oder anpassen.
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-8 rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">5. Kontaktaufnahme</h2>

        <div class="space-y-6 text-gray-300">
          <div>
            <p>
              Wenn Sie uns per E-Mail oder über ein Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben inklusive der von Ihnen dort angegebenen Kontaktdaten zur Bearbeitung der
              Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
            </p>
            <p class="mt-2">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
              sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
              Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
              beruht die Verarbeitung auf unserem berechtigten Interesse (Art. 6 Abs. 1 lit. f
              DSGVO).
            </p>
          </div>
        </div>
      </div>

      <div
        class="mt-8 rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">6. Cookie-Einstellungen</h2>

        <CookieSettings />
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
