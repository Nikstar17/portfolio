<template>
  <div class="relative min-h-screen">
    <!-- Hero Section mit verbessertem Layout -->
    <section class="relative py-4 md:py-20">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="h-full w-full"></div>
      </div>

      <div class="relative z-10 container mx-auto max-w-6xl px-6">
        <div class="flex flex-col-reverse items-center gap-10 md:flex-row md:justify-around">
          <!-- Text Content -->
          <div class="w-full text-center md:max-w-xl md:text-left">
            <h1
              class="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-3xl font-bold tracking-tight text-transparent md:text-5xl lg:text-6xl"
            >
              Dominik Kasten
            </h1>
            <p class="mt-4 text-lg font-medium text-blue-400 md:text-xl">
              Full-Stack Entwicklung | IT-Dienstleistungen
            </p>
            <p class="mt-6 text-base leading-relaxed text-gray-300 md:text-lg">
              Ich bin freiberuflicher Full-Stack Entwickler und begleite Unternehmen bei der
              Umsetzung digitaler Lösungen – von performanten Webanwendungen bis hin zur
              Automatisierung interner Prozesse.
            </p>
            <div class="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
              <a href="/kontakt"
                ><button
                  class="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  Kontakt aufnehmen
                </button></a
              >
            </div>
          </div>

          <!-- Profile Image mit Overlay-Effekt -->
          <div class="relative">
            <div
              class="absolute -inset-0.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 opacity-75 blur-sm"
            ></div>
            <div class="relative rounded-full border-2 border-blue-500/20 p-1 backdrop-blur-sm">
              <img
                src="/src/assets/webp/me2.webp"
                alt="Profile picture"
                class="size-48 rounded-full object-cover shadow-xl md:size-56 lg:size-64"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Über mich Section mit Card Design -->
    <section class="py-4">
      <div class="container mx-auto max-w-6xl px-5">
        <div class="mb-4 flex items-center">
          <UserIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-3xl font-bold text-white md:text-4xl">Über mich</h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <h3 class="mb-2 text-xl font-semibold text-blue-400">Expertise & Erfahrung</h3>
            <p class="text-gray-300">
              Durch mein Informatikstudium im Fernstudium an der IU verbinde ich theoretisches
              Fachwissen mit praktischer Projekterfahrung. So kann ich technische Anforderungen
              nicht nur verstehen, sondern auch effizient und zielgerichtet umsetzen.
            </p>
          </div>

          <div
            class="rounded-xl bg-gray-800/50 p-6 backdrop-blur-sm transition-transform hover:-translate-y-1"
          >
            <h3 class="mb-2 text-xl font-semibold text-blue-400">Vision & Ziele</h3>
            <p class="text-gray-300">
              Ich möchte digitale Lösungen entwickeln, die echten Mehrwert schaffen – effizient,
              nachhaltig und individuell. Mein Ziel ist es, Unternehmen bei der Digitalisierung
              aktiv zu begleiten und moderne Technologien gezielt einzusetzen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Skills Section -->
    <section class="py-4">
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
    <section class="px-3 py-4">
      <div class="container mx-auto max-w-6xl">
        <div class="mb-4 flex items-center">
          <FolderIcon class="mr-3 size-7 text-blue-500" />
          <h2 class="text-3xl font-bold text-white md:text-4xl">Meine Projekte</h2>
        </div>

        <div class="grid gap-4 md:grid-cols-2">
          <!-- Projekt Card 1 mit verbesserten Effekten -->
          <div
            class="group relative overflow-hidden rounded-xl bg-gray-800/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity group-hover:opacity-100"
            ></div>

            <div class="relative p-6">
              <h3 class="mb-4 text-center text-2xl font-semibold text-white">Editorfolio</h3>

              <div class="overflow-hidden rounded-lg border border-gray-700 shadow-lg">
                <img
                  src="/src/assets/webp/screenshot1.webp"
                  alt="Projekt 1 Vorschau"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div class="mt-6">
                <p class="mb-4 text-gray-300">
                  Ein modernes Onepage-Portfolio für Cutter und Videocreator – ideal zur
                  Präsentation von Projekten und Showreels.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >Vue.js</span
                  >
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >Tailwind</span
                  >
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >Node.js</span
                  >
                </div>
              </div>
              <a href="/editorfolio" target="_blank">
                <button
                  class="mt-6 flex w-full cursor-pointer items-center justify-center rounded-lg bg-blue-600/80 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Projekt ansehen
                  <ArrowRightIcon class="ml-1 size-4" /></button
              ></a>
            </div>
          </div>

          <!-- Projekt Card 2 -->
          <div
            class="group relative overflow-hidden rounded-xl bg-gray-800/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity group-hover:opacity-100"
            ></div>

            <div class="relative p-6">
              <h3 class="mb-4 text-center text-2xl font-semibold text-white">Dinkelspelz24.de</h3>

              <div class="overflow-hidden rounded-lg border border-gray-700 shadow-lg">
                <img
                  src="/src/assets/webp/screenshot3.webp"
                  alt="Projekt 2 Vorschau"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div class="mt-6">
                <p class="mb-4 text-gray-300">
                  Ein moderner Onlineshop mit WordPress und WooCommerce – benutzerfreundlich und
                  leicht erweiterbar.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >WordPress</span
                  >
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >WooCommerce</span
                  >
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >Elementor</span
                  >
                </div>
              </div>

              <a href="https://dinkelspelz24.de/" target="_blank" rel="noopener noreferrer">
                <button
                  class="mt-6 flex w-full cursor-pointer items-center justify-center rounded-lg bg-blue-600/80 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Projekt ansehen
                  <ArrowRightIcon class="ml-1 size-4" />
                </button>
              </a>
            </div>
          </div>

          <!-- Projekt Card 3 -->
          <div
            class="group relative overflow-hidden rounded-xl bg-gray-800/40 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-blue-900/20"
          >
            <div
              class="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 opacity-0 transition-opacity group-hover:opacity-100"
            ></div>

            <div class="relative p-6">
              <h3 class="mb-4 text-center text-2xl font-semibold text-white">Chronixly.com</h3>

              <div class="overflow-hidden rounded-lg border border-gray-700 shadow-lg">
                <img
                  src="/src/assets/webp/chronixlyScreenshot.webp"
                  alt="Projekt 2 Vorschau"
                  class="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              <div class="mt-6">
                <p class="mb-4 text-gray-300">
                  Chronixly ist eine Web-App zur projektbasierten Zeiterfassung mit Fokus auf
                  Benutzerfreundlichkeit, Übersichtlichkeit und smarter Teamverwaltung.
                </p>
                <div class="flex flex-wrap gap-2">
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >Vue 3</span
                  >
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >Flask</span
                  >
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >PostgreSQL</span
                  >
                  <span class="rounded-full bg-blue-900/50 px-3 py-1 text-xs text-blue-300"
                    >Tailwind CSS</span
                  >
                </div>
              </div>

              <a href="https://chronixly.com/" target="_blank" rel="noopener noreferrer">
                <button
                  class="mt-6 flex w-full cursor-pointer items-center justify-center rounded-lg bg-blue-600/80 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
                >
                  Projekt ansehen
                  <ArrowRightIcon class="ml-1 size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Kontakt Section -->
    <section class="px-3 pb-10">
      <div class="container mx-auto max-w-4xl">
        <div
          class="overflow-hidden rounded-2xl bg-gradient-to-br from-[#334488]/50 to-[#3a3f8f]/30 p-8 shadow-xl"
        >
          <div class="text-center">
            <h2 class="text-3xl font-bold text-white md:text-4xl">
              Bereit für das nächste Projekt?
            </h2>
            <p class="mx-auto mt-4 max-w-2xl text-gray-300">
              Lassen Sie uns gemeinsam an Ihren digitalen Herausforderungen arbeiten und innovative
              Lösungen entwickeln.
            </p>
            <a href="/kontakt">
              <button
                class="mt-8 rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
              >
                Kontakt aufnehmen
              </button></a
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
import { ArrowRightIcon } from '@heroicons/vue/24/outline'
</script>
