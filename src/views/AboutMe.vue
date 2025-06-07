<template>
  <div class="relative min-h-screen">
    <!-- Meta-Tags Component -->
    <MetaTags
      :meta="{
        title: 'Über mich – Dominik Kasten | IT-Service & Weblösungen in Goslar',
        description:
          'Ich bin Dominik Kasten, freiberuflicher IT-Dienstleister in Goslar. Persönlich, zuverlässig und verständlich – für IT-Service, Webseiten & Technik-Hilfe in der Region.',
        keywords:
          'dominik kasten, it-dienstleister goslar, it-service harz, webseiten goslar, it-freelancer, it-hilfe, technik-support',
        ogTitle: 'Über mich – Dominik Kasten | IT-Service & Weblösungen in Goslar',
        ogDescription:
          'Persönlicher IT-Service aus Goslar: Technik verständlich gemacht – für Privatkunden und Unternehmen in der Region Harz.',
      }"
    />

    <!-- Hero Section -->
    <section class="relative py-6 sm:py-10 md:py-20">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="h-full w-full"></div>
      </div>

      <div class="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">
        <div class="flex flex-col-reverse items-center gap-10 lg:flex-row lg:justify-between">
          <!-- Text Content -->
          <div class="w-full text-center lg:max-w-3xl lg:text-left">
            <h1
              class="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl lg:text-6xl"
            >
              Dominik Kasten – Ihr persönlicher IT-Dienstleister aus Goslar
            </h1>
            <p class="mt-4 text-base font-medium text-blue-400 sm:text-lg md:text-xl">
              Technik verständlich gemacht – persönlich & direkt aus der Region
            </p>
            <p class="mt-5 text-sm leading-relaxed text-gray-300 sm:mt-6 sm:text-base md:text-lg">
              Ich bin Dominik Kasten, freiberuflicher Informatiker aus Goslar. Schon seit vielen
              Jahren beschäftige ich mich leidenschaftlich mit Computern, Netzwerken und allem, was
              dazugehört. Mein Ziel: Technik einfach machen – für Menschen, die keine Lust auf
              komplizierte Fachsprache und unübersichtliche Technik haben.
            </p>
            <div
              class="mt-6 flex flex-col flex-wrap items-center justify-center gap-4 sm:mt-8 sm:flex-row lg:justify-start"
            >
              <RouterLink to="/kontakt" class="w-full sm:w-auto">
                <button
                  class="w-full rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 sm:w-[220px]"
                >
                  Kontakt aufnehmen
                </button>
              </RouterLink>
            </div>
          </div>

          <!-- Profile Image mit Overlay-Effekt -->
          <div class="relative w-40 sm:w-48 md:w-64 lg:w-80">
            <div
              class="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-75 blur-sm"
            ></div>
            <div class="relative rounded-full border-2 border-blue-500/20 p-1 backdrop-blur-sm">
              <img
                src="@/assets/webp/me2.webp"
                alt="IT-Freelancer Dominik Kasten aus Goslar im Harz - Ihr Experte für Webseiten und IT-Dienstleistungen"
                class="h-auto w-full rounded-full object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Über mich Section mit Card Design -->
    <section class="py-4 lg:py-8">
      <div class="container mx-auto max-w-6xl px-5">
        <div class="mb-4 flex items-center">
          <UserIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-3xl font-bold text-white md:text-4xl">Was mich auszeichnet</h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <h3 class="mb-2 text-xl font-semibold text-blue-400">Persönliche Betreuung</h3>
            <p class="text-gray-300">
              Keine anonyme Hotline, sondern direkte Ansprechbarkeit und individuelle Betreuung für
              Ihre IT-Anliegen.
            </p>
          </div>

          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <h3 class="mb-2 text-xl font-semibold text-blue-400">Verständliche Beratung</h3>
            <p class="text-gray-300">
              Komplexe Technik einfach erklärt – ohne Fachchinesisch und technische Hürden. Sie
              verstehen, was ich tue und warum.
            </p>
          </div>

          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <h3 class="mb-2 text-xl font-semibold text-blue-400">Langjährige Erfahrung</h3>
            <p class="text-gray-300">
              Fundiertes Wissen im Umgang mit Technik & Webprojekten. Ich verbinde theoretisches
              Fachwissen mit praktischer Projekterfahrung.
            </p>
          </div>

          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <h3 class="mb-2 text-xl font-semibold text-blue-400">Schnelle Hilfe</h3>
            <p class="text-gray-300">
              Support vor Ort oder per Fernwartung – je nach Bedarf. Flexibel, effizient und
              lösungsorientiert für Ihre Anforderungen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Mein Einsatzgebiet Section -->
    <section class="py-4 lg:py-8">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-4 flex items-center">
          <LightBulbIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-3xl font-bold text-white md:text-4xl">Mein Einsatzgebiet</h2>
        </div>

        <div class="mb-4">
          <p class="mb-4 text-gray-300">
            Ich bin in Goslar zuhause und betreue Kundinnen und Kunden in der gesamten Region –
            darunter:
          </p>

          <div class="mt-4 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            <div
              class="rounded-lg bg-gray-800/40 p-4 text-center transition-all hover:bg-gray-800/60"
            >
              <p class="font-medium text-blue-400">Goslar</p>
            </div>
            <div
              class="rounded-lg bg-gray-800/40 p-4 text-center transition-all hover:bg-gray-800/60"
            >
              <p class="font-medium text-blue-400">Bad Harzburg</p>
            </div>
            <div
              class="rounded-lg bg-gray-800/40 p-4 text-center transition-all hover:bg-gray-800/60"
            >
              <p class="font-medium text-blue-400">Vienenburg</p>
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
              <p class="font-medium text-blue-400">Clausthal-Zellerfeld</p>
            </div>
          </div>
        </div>

        <div class="mt-0 rounded-xl border border-gray-700 bg-gray-800/30 p-6">
          <h3 class="mb-3 text-xl font-semibold text-white">
            Ein Ansprechpartner für alles Digitale
          </h3>
          <p class="text-gray-300">
            Neben klassischem IT-Service biete ich auch die Erstellung von Webseiten, Hilfe bei
            Domains, E-Mail-Einrichtung und allgemeinen digitalen Fragen an – immer verständlich,
            ehrlich und transparent.
          </p>
        </div>
      </div>
    </section>

    <!-- Fähigkeiten Section -->
    <section class="py-4 lg:py-8">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-4 flex items-center">
          <LightBulbIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-3xl font-bold text-white md:text-4xl">Fähigkeiten</h2>
        </div>

        <div class="grid gap-6 sm:grid-cols-2">
          <div
            class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
          >
            <h3 class="mb-3 text-lg font-medium text-white">Frontend Entwicklung</h3>
            <div class="mb-4 h-1 w-full rounded-full bg-gray-700">
              <div
                class="h-1 w-[90%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
              ></div>
            </div>
            <p class="text-sm text-gray-400">Vue.js, TypeScript, Tailwind CSS</p>
          </div>

          <div
            class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
          >
            <h3 class="mb-3 text-lg font-medium text-white">Backend Entwicklung</h3>
            <div class="mb-4 h-1 w-full rounded-full bg-gray-700">
              <div
                class="h-1 w-[85%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
              ></div>
            </div>
            <p class="text-sm text-gray-400">Node.js, Python, REST APIs</p>
          </div>

          <div
            class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
          >
            <h3 class="mb-3 text-lg font-medium text-white">Datenbanken</h3>
            <div class="mb-4 h-1 w-full rounded-full bg-gray-700">
              <div
                class="h-1 w-[85%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
              ></div>
            </div>
            <p class="text-sm text-gray-400">PostgreSQL, SQLite</p>
          </div>

          <div
            class="rounded-xl border border-gray-700 bg-gray-800/30 p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
          >
            <h3 class="mb-3 text-lg font-medium text-white">DevOps & Automatisierung</h3>
            <div class="mb-4 h-1 w-full rounded-full bg-gray-700">
              <div
                class="h-1 w-[75%] rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"
              ></div>
            </div>
            <p class="text-sm text-gray-400">CI/CD, Cloud Services</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projekte Section -->
    <section class="px-3 py-4 lg:py-8">
      <div class="container mx-auto max-w-6xl px-6">
        <div class="mb-4 flex items-center">
          <FolderIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-3xl font-bold text-white md:text-4xl">Meine Projekte</h2>
        </div>

        <div class="grid gap-8 md:grid-cols-2">
          <!-- Dinkelspelz24 Projekt -->
          <div
            class="group overflow-hidden rounded-xl bg-slate-800/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-600/20"
          >
            <div class="relative overflow-hidden">
              <img
                src="@/assets/webp/dinkelspelz24.webp"
                alt="Dinkelspelz24 - Regionale Bio-Produkte"
                class="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"
              ></div>
            </div>
            <div class="p-6">
              <h3 class="mb-3 text-xl font-semibold text-white">Dinkelspelz24</h3>
              <p class="mb-4 text-gray-300">
                Ein moderner Onlineshop mit WordPress und WooCommerce – benutzerfreundlich und
                leicht erweiterbar.
              </p>
              <a
                href="https://dinkelspelz24.de"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
              >
                Website besuchen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Chronixly Projekt -->
          <div
            class="group overflow-hidden rounded-xl bg-slate-800/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-600/20"
          >
            <div class="relative overflow-hidden">
              <img
                src="@/assets/webp/chronixly.webp"
                alt="Chronixly - Zeiterfassungssoftware"
                class="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"
              ></div>
            </div>
            <div class="p-6">
              <h3 class="mb-3 text-xl font-semibold text-white">Chronixly</h3>
              <p class="mb-4 text-gray-300">
                Eine moderne Web-App zur Zeiterfassung mit intuitiver Benutzeroberfläche,
                responsivem Design und umfangreichen Analyse-Funktionen.
              </p>
              <a
                href="https://www.chronixly.com"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
              >
                Website besuchen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- KatrinCompanera Projekt -->
          <div
            class="group overflow-hidden rounded-xl bg-slate-800/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-600/20"
          >
            <div class="relative overflow-hidden">
              <img
                src="@/assets/webp/katrincompanera.webp"
                alt="KatrinCompanera - Gesellschaftsleisterin in Wolfsburg"
                class="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"
              ></div>
            </div>
            <div class="p-6">
              <h3 class="mb-3 text-xl font-semibold text-white">KatrinCompanera</h3>
              <p class="mb-4 text-gray-300">
                Eine Website für eine Gesellschaftsleisterin mit Kontaktformular und responsivem
                Design.
              </p>
              <a
                href="https://www.katrincompanera.de/"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
              >
                Website besuchen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            </div>
          </div>

          <!-- Editorfolio Projekt -->
          <div
            class="group overflow-hidden rounded-xl bg-slate-800/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-600/20"
          >
            <div class="relative overflow-hidden">
              <img
                src="@/assets/webp/Editorfolio.webp"
                alt="EditorFolio - Portfolio für Video-Editoren"
                class="h-64 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"
              ></div>
            </div>
            <div class="p-6">
              <h3 class="mb-3 text-xl font-semibold text-white">EditorFolio</h3>
              <p class="mb-4 text-gray-300">
                Ein modernes Portfolio-Template für Video-Editoren und Content-Creator mit
                interaktiven Elementen und optimaler Darstellung von Showreels.
              </p>
              <RouterLink
                to="/editorfolio"
                class="inline-flex items-center text-blue-400 transition-colors hover:text-blue-300"
              >
                Projekt ansehen
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="ml-2 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </RouterLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontakt Section -->
    <section class="px-3 pb-10">
      <div class="container mx-auto max-w-6xl px-6">
        <div
          class="overflow-hidden rounded-2xl bg-gradient-to-br from-[#334488]/50 to-[#3a3f8f]/30 px-4 py-8 shadow-xl"
        >
          <div class="text-center">
            <h2 class="text-3xl font-bold text-white md:text-4xl">
              Lernen Sie mich persönlich kennen
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-gray-300">
              Ich arbeite lösungsorientiert, effizient und mit Blick auf das Wesentliche. Ob
              Privatkunde, Selbstständiger oder Betrieb – Sie erhalten bei mir maßgeschneiderte
              Unterstützung ohne unnötigen Ballast. Ich freue mich auf Ihre Anfrage!
            </p>
            <RouterLink to="/kontakt">
              <button
                class="mt-8 cursor-pointer rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
              >
                Kontakt aufnehmen
              </button></RouterLink
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { UserIcon } from '@heroicons/vue/24/outline'
import { LightBulbIcon } from '@heroicons/vue/24/outline'
import { FolderIcon } from '@heroicons/vue/24/outline'
import { onMounted } from 'vue'
import MetaTags from '@/components/MetaTags.vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
