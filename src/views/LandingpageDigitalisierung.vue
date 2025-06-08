<template>
  <div class="relative min-h-screen">
    <!-- Meta-Tags Component -->
    <MetaTags
      :meta="{
        title: 'Digitalisierung für Unternehmen | Einfache & effiziente Lösungen',
        description:
          'Professionelle Digitalisierungslösungen für Unternehmen im Harz. Prozessoptimierung, Cloud-Einführung und IT-Support aus einer Hand – persönlich, verständlich und vor Ort.',
        keywords:
          'digitalisierung unternehmen, prozessoptimierung, cloud-lösungen, it-support, webentwicklung, automatisierung, digitale transformation',
        ogTitle: 'Digitalisierung für Ihr Unternehmen – einfach, effizient, zukunftssicher',
        ogDescription:
          'Maßgeschneiderte Digitalisierungslösungen für Ihr Unternehmen. Optimieren Sie Ihre Prozesse und steigern Sie Ihre Effizienz mit professioneller Unterstützung.',
        ogImage: 'https://dominik-kasten.de/social-preview.png',
        robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      }"
    />

    <!-- Hero Section -->
    <section class="relative py-6 sm:py-12 md:py-16 lg:py-20">
      <div class="relative z-10 container mx-auto max-w-6xl px-4">
        <div
          class="flex flex-col-reverse items-center gap-0 md:flex-row md:justify-between md:gap-12"
        >
          <!-- Text Content -->
          <div class="mt-4 text-center sm:mt-6 md:mt-0 md:w-3/5 md:text-left">
            <h1
              class="bg-gradient-to-r from-white to-blue-400 bg-clip-text pb-3 text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-4xl lg:text-5xl"
            >
              Digitalisierung für Ihr Unternehmen
            </h1>
            <h2 class="mt-2 text-xl font-semibold text-white sm:text-2xl md:text-3xl">
              Einfach. Effizient. Zukunftssicher.
            </h2>
            <p class="mt-3 text-base font-medium sm:text-lg md:text-xl">
              <span
                class="text-blue-300 underline decoration-blue-500/30 decoration-2 underline-offset-4 transition-colors hover:text-blue-200"
              >
                Maßgeschneiderte Digitalisierungslösungen
              </span>
              <span class="text-blue-400">für Ihr Unternehmen im Harz und deutschlandweit</span>
            </p>
            <p class="mt-4 text-sm leading-relaxed text-gray-300 sm:mt-5 sm:text-base md:text-lg">
              Machen Sie Ihr Unternehmen fit für die digitale Zukunft! Mit meiner Erfahrung als
              IT-Dienstleister unterstütze ich Sie bei der Optimierung Ihrer Prozesse durch moderne
              Digitalisierungslösungen - persönlich, verständlich und mit lokaler Expertise für den
              Harz und Umgebung.
            </p>
            <div
              class="mt-6 flex flex-col flex-wrap items-center justify-center gap-3 sm:mt-8 sm:flex-row md:justify-start"
            >
              <RouterLink to="/kontakt" class="w-full sm:w-auto">
                <button
                  class="w-full min-w-[200px] rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-lg hover:shadow-blue-600/30"
                >
                  Kostenfreies Strategiegespräch
                </button>
              </RouterLink>
              <a href="#vorteile" class="w-full sm:w-auto">
                <button
                  class="w-full min-w-[200px] rounded-full border-2 border-blue-400/40 px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-blue-400 hover:bg-slate-800/50 hover:text-blue-300"
                >
                  Mehr erfahren
                </button>
              </a>
            </div>
          </div>

          <!-- Image -->
          <div class="flex w-2/3 items-center justify-center sm:w-1/2 md:w-2/5">
            <img
              src="@/assets/webp/digi.webp"
              alt="Digitalisierungslösungen für Unternehmen"
              class="h-auto w-full max-w-[150px] sm:max-w-[220px] md:max-w-xs lg:max-w-sm"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Problem & Lösung Section -->
    <section class="bg-slate-900/50 py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold text-white">Problem & Lösung</h2>

        <div class="grid grid-cols-1 gap-10 md:grid-cols-2">
          <!-- Problem -->
          <div
            class="rounded-xl border border-red-900/30 bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-7 shadow-xl transition-all hover:-translate-y-1 hover:shadow-red-600/10"
          >
            <div class="mb-5 flex items-center">
              <ExclamationTriangleIcon class="mr-3 h-7 w-7 text-red-500" />
              <h3 class="text-xl font-semibold text-white">Die Herausforderungen</h3>
            </div>
            <p class="leading-relaxed text-gray-300">
              <strong class="text-red-400/90">Ineffiziente Prozesse:</strong> Fehlende
              Digitalisierung führt zu erhöhtem manuellen Aufwand, Ineffizienzen und Zeitverlusten
              in Ihrem Unternehmen. Mitarbeiter verbringen wertvolle Zeit mit wiederholenden
              Aufgaben, während der Wettbewerb durch moderne Technologien bereits Kosten spart und
              schneller agiert. Ohne digitale Prozesse entstehen häufiger Fehler und wichtige
              Geschäftsdaten sind schwerer zugänglich oder gehen verloren.
            </p>
          </div>

          <!-- Lösung -->
          <div
            class="rounded-xl border border-green-900/30 bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-7 shadow-xl transition-all hover:-translate-y-1 hover:shadow-green-600/10"
          >
            <div class="mb-5 flex items-center">
              <LightBulbIcon class="mr-3 h-7 w-7 text-green-500" />
              <h3 class="text-xl font-semibold text-white">Meine Lösung</h3>
            </div>
            <p class="leading-relaxed text-gray-300">
              <strong class="text-green-400/90">Maßgeschneiderte Prozessoptimierung:</strong> Ich
              analysiere Ihre bestehenden Prozesse und identifiziere Potenziale für Digitalisierung
              und Automatisierung. Mit maßgeschneiderten Lösungen schaffe ich digitale Workflows,
              die Zeit und Kosten sparen. Durch intelligente Cloud-Integration bleiben Ihre Daten
              sicher und sind überall verfügbar. Alle Lösungen werden dabei so gestaltet, dass sie
              für Ihr Team leicht zu verstehen und anzuwenden sind – für eine nachhaltige digitale
              Transformation ohne Frustration.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Leistungen Section -->
    <section id="leistungen" class="py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold text-white">Meine Leistungen</h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Leistung 1 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 p-3 transition-colors group-hover:bg-blue-800/40"
            >
              <ArrowPathIcon
                class="h-8 w-8 text-blue-400 transition-colors group-hover:text-blue-300"
              />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Prozessoptimierung</h3>
            <p class="text-gray-300">
              Analyse und Digitalisierung Ihrer Geschäftsprozesse für mehr Effizienz und weniger
              manuelle Arbeit. Identifikation von Schwachstellen und Entwicklung digitaler
              Workflows.
            </p>
          </div>

          <!-- Leistung 2 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 p-3 transition-colors group-hover:bg-blue-800/40"
            >
              <CloudIcon
                class="h-8 w-8 text-blue-400 transition-colors group-hover:text-blue-300"
              />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Cloud-Einführung</h3>
            <p class="text-gray-300">
              Sichere Migration Ihrer Daten und Anwendungen in die Cloud. Einrichtung von Microsoft
              365, Google Workspace oder anderen Cloud-Lösungen für ortsunabhängiges Arbeiten und
              höhere Datensicherheit.
            </p>
          </div>

          <!-- Leistung 3 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 p-3 transition-colors group-hover:bg-blue-800/40"
            >
              <CpuChipIcon
                class="h-8 w-8 text-blue-400 transition-colors group-hover:text-blue-300"
              />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Automatisierung</h3>
            <p class="text-gray-300">
              Entwicklung automatisierter Lösungen für wiederkehrende Aufgaben, von einfachen
              Dateioperationen bis hin zu komplexen Geschäftsprozessen. Zeitersparnis durch
              intelligente Automatisierung.
            </p>
          </div>

          <!-- Leistung 4 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 p-3 transition-colors group-hover:bg-blue-800/40"
            >
              <PhoneIcon
                class="h-8 w-8 text-blue-400 transition-colors group-hover:text-blue-300"
              />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">IT-Support</h3>
            <p class="text-gray-300">
              Zuverlässiger IT-Support für alle technischen Fragen und Herausforderungen. Schnelle
              Problemlösung, Fernwartung und persönliche Vor-Ort-Betreuung für optimale
              Systemverfügbarkeit.
            </p>
          </div>

          <!-- Leistung 5 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 p-3 transition-colors group-hover:bg-blue-800/40"
            >
              <CodeBracketIcon
                class="h-8 w-8 text-blue-400 transition-colors group-hover:text-blue-300"
              />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Webentwicklung</h3>
            <p class="text-gray-300">
              Entwicklung moderner, responsive Websites und Webapplikationen für Ihre digitale
              Präsenz. Von der einfachen Firmenseite bis hin zu komplexen Web-Anwendungen mit
              Kundenverwaltung.
            </p>
          </div>

          <!-- Leistung 6 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-900/30 p-3 transition-colors group-hover:bg-blue-800/40"
            >
              <ShieldCheckIcon
                class="h-8 w-8 text-blue-400 transition-colors group-hover:text-blue-300"
              />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Datenschutz</h3>
            <p class="text-gray-300">
              Implementierung datenschutzkonformer Lösungen nach DSGVO. Beratung zu sicheren
              Systemen, Verschlüsselungstechnologien und rechtskonformer Datenverarbeitung im
              digitalen Umfeld.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Vorteile Section -->
    <section id="vorteile" class="bg-gradient-to-b from-slate-900/80 to-slate-800/50 py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold text-white">Ihre Vorteile</h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2">
          <!-- Vorteil 1 -->
          <div
            class="flex items-start gap-5 rounded-lg p-4 transition-colors hover:bg-slate-800/30"
          >
            <div
              class="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-900/30"
            >
              <UserGroupIcon class="h-6 w-6 text-blue-300" />
            </div>
            <div>
              <h3 class="mb-2 text-xl font-medium text-white">
                <span class="border-b-2 border-blue-500/30 pb-1">Persönliche Beratung</span>
              </h3>
              <p class="text-gray-300">
                <strong class="text-blue-300"
                  >Keine Standardlösungen, sondern individuelle Konzepte.</strong
                >
                Individuelle und verständliche Beratung vor Ort für Ihre spezifischen Anforderungen.
              </p>
            </div>
          </div>

          <!-- Vorteil 2 -->
          <div
            class="flex items-start gap-5 rounded-lg p-4 transition-colors hover:bg-slate-800/30"
          >
            <div
              class="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-900/30"
            >
              <TagIcon class="h-6 w-6 text-blue-300" />
            </div>
            <div>
              <h3 class="mb-2 text-xl font-medium text-white">
                <span class="border-b-2 border-blue-500/30 pb-1">Transparente Preise</span>
              </h3>
              <p class="text-gray-300">
                <strong class="text-blue-300"
                  >Klare und nachvollziehbare Preisgestaltung ohne versteckte Kosten.</strong
                >
                Detaillierte Angebote und regelmäßige Updates zum Projektfortschritt.
              </p>
            </div>
          </div>

          <!-- Vorteil 3 -->
          <div
            class="flex items-start gap-5 rounded-lg p-4 transition-colors hover:bg-slate-800/30"
          >
            <div
              class="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-900/30"
            >
              <RocketLaunchIcon class="h-6 w-6 text-blue-300" />
            </div>
            <div>
              <h3 class="mb-2 text-xl font-medium text-white">
                <span class="border-b-2 border-blue-500/30 pb-1">Schnelle Umsetzung</span>
              </h3>
              <p class="text-gray-300">
                <strong class="text-blue-300"
                  >Effiziente Projektumsetzung mit realistischen Zeitplänen.</strong
                >
                Agile Arbeitsweise für flexible Anpassungen und zügige Implementierung.
              </p>
            </div>
          </div>

          <!-- Vorteil 4 -->
          <div
            class="flex items-start gap-5 rounded-lg p-4 transition-colors hover:bg-slate-800/30"
          >
            <div
              class="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-900/30"
            >
              <MapPinIcon class="h-6 w-6 text-blue-300" />
            </div>
            <div>
              <h3 class="mb-2 text-xl font-medium text-white">
                <span class="border-b-2 border-blue-500/30 pb-1">Lokale Nähe</span>
              </h3>
              <p class="text-gray-300">
                <strong class="text-blue-300"
                  >Direkt vor Ort im Harz für persönliche Termine.</strong
                >
                Kein anonymer Dienstleister, sondern ein verlässlicher Partner in Ihrer Region.
              </p>
            </div>
          </div>

          <!-- Vorteil 5 -->
          <div
            class="flex items-start gap-5 rounded-lg p-4 transition-colors hover:bg-slate-800/30"
          >
            <div
              class="mt-1 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-blue-900/30"
            >
              <HandRaisedIcon class="h-6 w-6 text-blue-300" />
            </div>
            <div>
              <h3 class="mb-2 text-xl font-medium text-white">
                <span class="border-b-2 border-blue-500/30 pb-1">Langfristiger Support</span>
              </h3>
              <p class="text-gray-300">
                <strong class="text-blue-300"
                  >Kontinuierliche Betreuung auch nach Projektabschluss.</strong
                >
                Regelmäßige Updates, Wartung und Weiterentwicklung Ihrer digitalen Lösungen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack Section -->
    <section class="bg-slate-900/50 py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-8 text-center text-3xl font-bold text-white">
          Moderne Technologien für Ihre Digitalisierung
        </h2>
        <p class="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-300">
          Ich setze auf einen modernen Full-Stack-Technologie-Stack, um Ihnen skalierbare, sichere
          und effiziente Lösungen zu bieten.
        </p>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Vue.js -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-green-500/10"
            >
              <img src="/src/assets/webp/vue_icon.webp" alt="Vue Icon" class="p-2" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Vue.js Frontend</h3>
            <p class="text-gray-300">
              Ein modernes JavaScript-Framework für reaktionsschnelle Benutzeroberflächen. Ideal für
              komplexe Geschäftsanwendungen mit hoher Benutzerfreundlichkeit.
            </p>
          </div>

          <!-- Flask -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-slate-100/30"
            >
              <img src="/src/assets/webp/flask_icon.webp" alt="Vue Icon" class="p-2" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Flask Backend</h3>
            <p class="text-gray-300">
              Ein leichtgewichtiges und flexibles Python-Framework für die Backend-Entwicklung.
              Perfekt für REST-APIs, Datenverarbeitung und Geschäftslogik.
            </p>
          </div>

          <!-- PostgreSQL -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10"
            >
              <img src="/src/assets/webp/postgres_icon.webp" alt="Vue Icon" class="p-2" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">PostgreSQL Datenbank</h3>
            <p class="text-gray-300">
              Eine robuste, skalierbare SQL-Datenbank für Ihre Geschäftsdaten. Bietet erweiterte
              Features wie JSON-Unterstützung und hervorragende Performance.
            </p>
          </div>

          <!-- Python -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-yellow-500/10"
            >
              <img src="/src/assets/webp/pyhton_icon.webp" alt="Vue Icon" class="p-2" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Python</h3>
            <p class="text-gray-300">
              Eine vielseitige und leistungsstarke Programmiersprache für Backend-Logik,
              Datenverarbeitung und Automatisierung. Ideal für KI und maschinelles Lernen.
            </p>
          </div>

          <!-- Docker -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10"
            >
              <img src="/src/assets/webp/docker_icon.webp" alt="Vue Icon" class="p-2" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Docker</h3>
            <p class="text-gray-300">
              Container-Virtualisierung für einfaches Deployment und Skalierung. Garantiert
              konsistente Entwicklungs- und Produktionsumgebungen.
            </p>
          </div>

          <!-- REST APIs -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-600/10"
          >
            <div
              class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-500/10"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-8 w-8 text-indigo-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">REST APIs</h3>
            <p class="text-gray-300">
              Moderne API-Architekturen für nahtlose Systemintegration. Ermöglicht sichere und
              effiziente Kommunikation zwischen verschiedenen Anwendungen.
            </p>
          </div>
        </div>

        <div class="mt-12 text-center">
          <p class="mx-auto max-w-3xl text-lg text-gray-300">
            Diese leistungsstarke Technologie-Kombination ermöglicht es mir, Ihnen skalierbare,
            sichere und wartbare Digitalisierungslösungen zu erstellen, die sich optimal an Ihre
            Geschäftsprozesse anpassen.
          </p>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="bg-gradient-to-b from-slate-900 to-blue-900/20 py-20">
      <div class="relative container mx-auto max-w-4xl px-6 text-center">
        <div class="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div class="relative z-10">
          <h2
            class="mb-6 bg-gradient-to-r from-white to-blue-300 bg-clip-text pb-2 text-3xl font-bold text-transparent sm:text-4xl"
          >
            Bereit für den digitalen Wandel?
          </h2>
          <p class="mx-auto mb-10 max-w-2xl text-lg text-gray-200">
            Machen Sie jetzt den ersten Schritt zu effizienteren Prozessen und einer
            zukunftssicheren IT-Infrastruktur. Kontaktieren Sie mich für ein
            <span class="font-medium text-blue-300">unverbindliches Strategiegespräch</span>, in dem
            wir gemeinsam Ihre Digitalisierungspotenziale identifizieren.
          </p>
          <RouterLink to="/kontakt">
            <button
              class="rounded-full bg-blue-500 px-10 py-4 text-lg font-medium text-white transition-all hover:scale-105 hover:bg-blue-600 hover:shadow-xl hover:shadow-blue-600/20"
            >
              Jetzt Kontakt aufnehmen
            </button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import MetaTags from '@/components/MetaTags.vue'
import {
  UserGroupIcon,
  TagIcon,
  RocketLaunchIcon,
  MapPinIcon,
  HandRaisedIcon,
  ArrowPathIcon,
  CloudIcon,
  CpuChipIcon,
  PhoneIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
} from '@heroicons/vue/24/outline'

onMounted(() => {
  // Hier könnten Initialisierungen stattfinden, falls nötig
})
</script>
