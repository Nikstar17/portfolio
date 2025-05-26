<template>
  <div class="py-12">
    <div class="container mx-auto max-w-4xl px-6">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-white md:text-4xl">Impressum</h1>
        <div class="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400"></div>
      </div>

      <div
        class="rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">Angaben gemäß § 5 TMG</h2>

        <div class="space-y-6 text-gray-300">
          <div>
            <p>Dominik Kasten</p>
            <p>Grauhöfer Str. 9</p>
            <p>38640 Goslar</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h3 class="mb-2 text-lg font-medium text-white">Kontakt</h3>
            <p>Telefon: +49 176 56723879</p>
            <p>E-Mail: dominik.k276@gmail.com</p>
          </div>

          <div>
            <h3 class="mb-2 text-lg font-medium text-white">Umsatzsteuer-ID</h3>
            <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:</p>
            <p>DE323104082</p>
          </div>

          <div>
            <h3 class="mb-2 text-lg font-medium text-white">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h3>
            <p>Dominik Kasten</p>
            <p>Grauhöfer Str. 9</p>
            <p>38640 Goslar</p>
            <p>Deutschland</p>
          </div>
        </div>
      </div>

      <div
        class="mt-8 rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">Haftungsausschluss</h2>

        <div class="space-y-6 text-gray-300">
          <div>
            <h3 class="mb-2 text-lg font-medium text-white">Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine
              rechtswidrige Tätigkeit hinweisen.
            </p>
            <p class="mt-2">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
              allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
              Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend
              entfernen.
            </p>
          </div>

          <div>
            <h3 class="mb-2 text-lg font-medium text-white">Haftung für Links</h3>
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
              oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt
              der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum
              Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p class="mt-2">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
              Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werden wir derartige Links umgehend entfernen.
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
