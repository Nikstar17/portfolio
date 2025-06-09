<template>
  <div class="relative min-h-screen">
    <!-- Meta-Tags Component -->
    <MetaTags
      :meta="{
        title: 'Fullstack-Entwicklung | Modern, performant & maßgeschneidert',
        description:
          'Individuelle Fullstack-Webapplikationen mit Vue.js, Flask & PostgreSQL. Maßgeschneiderte Lösungen für Ihr Business – reaktiv, sicher und zukunftsorientiert.',
        keywords:
          'fullstack-entwicklung, vue.js, flask, postgresql, webapplikationen, api-entwicklung, datenmodellierung, business-anwendungen',
        ogTitle: 'Fullstack-Entwicklung für moderne Webanwendungen',
        ogDescription:
          'Maßgeschneiderte Fullstack-Lösungen mit Vue.js, Flask & PostgreSQL – reaktiv, performant und skalierbar für Ihren Unternehmenserfolg.',
        ogImage: 'https://dominik-kasten.de/social-preview.png',
        robots: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
      }"
    />

    <!-- Hero Section -->
    <section class="relative py-6 sm:py-12 md:py-16 lg:py-20">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="h-full w-full"></div>
      </div>

      <div class="relative z-10 container mx-auto max-w-6xl px-4 sm:px-6">
        <div
          class="flex flex-col-reverse items-center gap-0 md:flex-row md:justify-between md:gap-12"
        >
          <!-- Text Content -->
          <div class="mt-4 text-center sm:mt-6 md:mt-0 md:w-3/5 md:text-left">
            <h1 class="text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
              Fullstack-Entwicklung für moderne Webanwendungen
            </h1>
            <p class="mt-4 text-xl text-gray-300">
              Individuelle Lösungen mit Vue.js, Flask & PostgreSQL – performant, sicher und
              zukunftssicher.
            </p>
            <p class="mt-5 text-lg text-gray-300">
              Ob internes Tool, Kundenportal oder Business-Webapp – ich entwickle schlanke,
              performante Fullstack-Anwendungen, die exakt zu Ihrem Bedarf passen.
            </p>
            <div class="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
              <RouterLink
                to="/kontakt"
                class="rounded-lg bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
              >
                🔹 Jetzt unverbindlich anfragen
              </RouterLink>
              <a
                href="#technologie"
                class="rounded-lg bg-slate-700 px-6 py-3 text-base font-medium text-white shadow-lg transition-all hover:bg-slate-600 hover:shadow-xl"
              >
                🔹 Technologien entdecken
              </a>
            </div>
          </div>

          <!-- Image -->
          <div class="flex w-2/3 items-center justify-center sm:w-1/2 md:w-2/5">
            <img
              src="@/assets/webp/digi.webp"
              alt="Fullstack Entwicklung Visualisierung"
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
            <div class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-900/20">
              <ExclamationTriangleIcon class="h-6 w-6 text-red-500" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Die Herausforderung</h3>
            <p class="text-gray-300">
              Standardlösungen stoßen schnell an ihre Grenzen: Langsame Workflows, fehlende
              Schnittstellen, unflexible Anpassungen. Oft führt dies zu Ineffizienz und Frustration
              in Ihrem Unternehmen.
            </p>
            <ul class="mt-4 space-y-2 text-gray-300">
              <li class="flex items-start">
                <span class="mr-2 text-red-400">✖</span>
                <span>Unflexible, vorgefertigte Systeme</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-red-400">✖</span>
                <span>Fehlende Schnittstellen zu bestehenden Tools</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-red-400">✖</span>
                <span>Hohe laufende Kosten für überdimensionierte Lösungen</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-red-400">✖</span>
                <span>Lange Wartezeiten bei Anpassungen</span>
              </li>
            </ul>
          </div>

          <!-- Lösung -->
          <div
            class="rounded-xl border border-green-900/30 bg-gradient-to-b from-slate-800/90 to-slate-900/90 p-7 shadow-xl transition-all hover:-translate-y-1 hover:shadow-green-600/10"
          >
            <div
              class="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-green-900/20"
            >
              <LightBulbIcon class="h-6 w-6 text-green-500" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Meine Lösung</h3>
            <p class="text-gray-300">
              Individuell entwickelte Anwendungen mit einem leistungsfähigen Technologie-Stack:
              Vue.js für reaktive Frontends, Flask für skalierbare APIs und PostgreSQL für
              leistungsstarke Datenspeicherung.
            </p>
            <ul class="mt-4 space-y-2 text-gray-300">
              <li class="flex items-start">
                <span class="mr-2 text-green-400">✔</span>
                <span>Maßgeschneiderte Anwendungen nach Ihren Anforderungen</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-green-400">✔</span>
                <span>Nahtlose Integration mit bestehenden Systemen</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-green-400">✔</span>
                <span>Zukunftssichere Technologien mit geringen Betriebskosten</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2 text-green-400">✔</span>
                <span>Schnelle Reaktionszeiten und agile Entwicklung</span>
              </li>
            </ul>
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
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-900/20 text-blue-400 transition-colors group-hover:bg-blue-900/30 group-hover:text-blue-300"
            >
              <DevicePhoneMobileIcon class="h-8 w-8" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Individuelle Webapps</h3>
            <p class="text-gray-300">
              Maßgeschneiderte Anwendungen für interne und externe Prozesse. Von Dashboards über
              CRMs bis hin zu komplexen Business-Anwendungen – alles nach Ihren Anforderungen.
            </p>
          </div>

          <!-- Leistung 2 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-900/20 text-blue-400 transition-colors group-hover:bg-blue-900/30 group-hover:text-blue-300"
            >
              <CodeBracketIcon class="h-8 w-8" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">API-Entwicklung</h3>
            <p class="text-gray-300">
              Sichere, dokumentierte REST APIs mit Flask und JWT. Optimiert für Geschwindigkeit,
              Skalierbarkeit und einfache Integration mit bestehenden Systemen.
            </p>
          </div>

          <!-- Leistung 3 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-900/20 text-blue-400 transition-colors group-hover:bg-blue-900/30 group-hover:text-blue-300"
            >
              <ServerIcon class="h-8 w-8" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Datenmodellierung</h3>
            <p class="text-gray-300">
              Strukturierte Planung und Umsetzung mit PostgreSQL – relational & robust. Optimierte
              Datenbankstrukturen für schnelle und zuverlässige Applikationen.
            </p>
          </div>

          <!-- Leistung 4 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-900/20 text-blue-400 transition-colors group-hover:bg-blue-900/30 group-hover:text-blue-300"
            >
              <SparklesIcon class="h-8 w-8" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">UI/UX mit Vue 3</h3>
            <p class="text-gray-300">
              Moderne, reaktive Benutzeroberflächen mit Tailwind CSS und Pinia. Intuitive Bedienung,
              schnelle Ladezeiten und optimale User Experience auf allen Geräten.
            </p>
          </div>

          <!-- Leistung 5 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-900/20 text-blue-400 transition-colors group-hover:bg-blue-900/30 group-hover:text-blue-300"
            >
              <CloudIcon class="h-8 w-8" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Deployment & Hosting</h3>
            <p class="text-gray-300">
              CI/CD, Docker, Vercel, Hetzner oder kundeneigene Server. Zuverlässiger Betrieb mit
              minimalem Wartungsaufwand und maximaler Verfügbarkeit.
            </p>
          </div>

          <!-- Leistung 6 -->
          <div
            class="group rounded-lg border border-blue-900/20 bg-gradient-to-b from-slate-800/80 to-slate-900/80 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-500/20"
          >
            <div
              class="mb-6 flex h-14 w-14 items-center justify-center rounded-md bg-blue-900/20 text-blue-400 transition-colors group-hover:bg-blue-900/30 group-hover:text-blue-300"
            >
              <ShieldCheckIcon class="h-8 w-8" />
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Schnittstellen & Auth</h3>
            <p class="text-gray-300">
              Anbindung externer Systeme, Nutzerrollen, Authentifizierung & Sicherheit. Zuverlässige
              Integration und sichere Zugriffssteuerung für Ihre Anwendungen.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Projektablauf Section -->
    <section class="bg-gradient-to-b from-slate-900/80 to-slate-800/50 py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold text-white">Mein Arbeitsprozess</h2>

        <div class="relative">
          <!-- Desktop Process Timeline (hidden on mobile) -->
          <div class="hidden md:block">
            <div
              class="absolute top-0 left-1/2 h-full w-1 -translate-x-1/2 transform bg-blue-500/20"
            ></div>

            <!-- Step 1 -->
            <div class="relative mb-20">
              <div class="flex items-center">
                <div class="w-1/2 pr-12 text-right">
                  <h3 class="text-xl font-semibold text-white">Beratung & Planung</h3>
                  <p class="mt-2 text-gray-300">
                    Gemeinsame Analyse Ihrer Anforderungen und Ziele. Definition des Projektumfangs,
                    Zeitplans und Budgets.
                  </p>
                </div>
                <div class="absolute left-1/2 -translate-x-1/2 transform">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  >
                    <span class="text-lg font-semibold">1</span>
                  </div>
                </div>
                <div class="w-1/2 pl-12"></div>
              </div>
            </div>

            <!-- Step 2 -->
            <div class="relative mb-20">
              <div class="flex items-center">
                <div class="w-1/2 pr-12"></div>
                <div class="absolute left-1/2 -translate-x-1/2 transform">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  >
                    <span class="text-lg font-semibold">2</span>
                  </div>
                </div>
                <div class="w-1/2 pl-12">
                  <h3 class="text-xl font-semibold text-white">Konzeption & Architektur</h3>
                  <p class="mt-2 text-gray-300">
                    Ausarbeitung der technischen Architektur, Datenmodelle und UI/UX-Konzepte.
                    Erstellung eines detaillierten Entwicklungsplans.
                  </p>
                </div>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative mb-20">
              <div class="flex items-center">
                <div class="w-1/2 pr-12 text-right">
                  <h3 class="text-xl font-semibold text-white">Entwicklung & Testing</h3>
                  <p class="mt-2 text-gray-300">
                    Agile Entwicklung mit regelmäßigen Feedback-Schleifen. Kontinuierliches Testing
                    und Qualitätssicherung.
                  </p>
                </div>
                <div class="absolute left-1/2 -translate-x-1/2 transform">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  >
                    <span class="text-lg font-semibold">3</span>
                  </div>
                </div>
                <div class="w-1/2 pl-12"></div>
              </div>
            </div>

            <!-- Step 4 -->
            <div class="relative mb-20">
              <div class="flex items-center">
                <div class="w-1/2 pr-12"></div>
                <div class="absolute left-1/2 -translate-x-1/2 transform">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  >
                    <span class="text-lg font-semibold">4</span>
                  </div>
                </div>
                <div class="w-1/2 pl-12">
                  <h3 class="text-xl font-semibold text-white">Go-Live & Übergabe</h3>
                  <p class="mt-2 text-gray-300">
                    Deployment der Anwendung, umfassende Dokumentation und Schulung der Benutzer.
                    Sicherer Launch mit minimalem Risiko.
                  </p>
                </div>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="relative">
              <div class="flex items-center">
                <div class="w-1/2 pr-12 text-right">
                  <h3 class="text-xl font-semibold text-white">Support & Weiterentwicklung</h3>
                  <p class="mt-2 text-gray-300">
                    Kontinuierlicher Support, Wartung und iterative Weiterentwicklung nach Bedarf.
                    Langfristige Betreuung Ihres Projekts.
                  </p>
                </div>
                <div class="absolute left-1/2 -translate-x-1/2 transform">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                  >
                    <span class="text-lg font-semibold">5</span>
                  </div>
                </div>
                <div class="w-1/2 pl-12"></div>
              </div>
            </div>
          </div>

          <!-- Mobile Process Steps (shown only on mobile) -->
          <div class="space-y-8 md:hidden">
            <!-- Step 1 -->
            <div class="relative pl-10">
              <div
                class="absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
              >
                <span class="text-sm font-semibold">1</span>
              </div>
              <h3 class="text-lg font-semibold text-white">Beratung & Planung</h3>
              <p class="mt-1 text-sm text-gray-300">
                Gemeinsame Analyse Ihrer Anforderungen und Ziele. Definition des Projektumfangs,
                Zeitplans und Budgets.
              </p>
            </div>

            <!-- Step 2 -->
            <div class="relative pl-10">
              <div
                class="absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
              >
                <span class="text-sm font-semibold">2</span>
              </div>
              <h3 class="text-lg font-semibold text-white">Konzeption & Architektur</h3>
              <p class="mt-1 text-sm text-gray-300">
                Ausarbeitung der technischen Architektur, Datenmodelle und UI/UX-Konzepte.
                Erstellung eines detaillierten Entwicklungsplans.
              </p>
            </div>

            <!-- Step 3 -->
            <div class="relative pl-10">
              <div
                class="absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
              >
                <span class="text-sm font-semibold">3</span>
              </div>
              <h3 class="text-lg font-semibold text-white">Entwicklung & Testing</h3>
              <p class="mt-1 text-sm text-gray-300">
                Agile Entwicklung mit regelmäßigen Feedback-Schleifen. Kontinuierliches Testing und
                Qualitätssicherung.
              </p>
            </div>

            <!-- Step 4 -->
            <div class="relative pl-10">
              <div
                class="absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
              >
                <span class="text-sm font-semibold">4</span>
              </div>
              <h3 class="text-lg font-semibold text-white">Go-Live & Übergabe</h3>
              <p class="mt-1 text-sm text-gray-300">
                Deployment der Anwendung, umfassende Dokumentation und Schulung der Benutzer.
                Sicherer Launch mit minimalem Risiko.
              </p>
            </div>

            <!-- Step 5 -->
            <div class="relative pl-10">
              <div
                class="absolute top-0 left-0 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-white"
              >
                <span class="text-sm font-semibold">5</span>
              </div>
              <h3 class="text-lg font-semibold text-white">Support & Weiterentwicklung</h3>
              <p class="mt-1 text-sm text-gray-300">
                Kontinuierlicher Support, Wartung und iterative Weiterentwicklung nach Bedarf.
                Langfristige Betreuung Ihres Projekts.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack Section -->
    <section id="technologie" class="bg-slate-900/50 py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-8 text-center text-3xl font-bold text-white">Technologien im Einsatz</h2>
        <p class="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-300">
          Ein moderner, leistungsstarker und zukunftssicherer Technologie-Stack für Ihre
          individuelle Webanwendung
        </p>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <!-- Frontend Stack -->
          <div class="rounded-lg border border-blue-900/30 bg-slate-800/50 p-6 shadow-lg">
            <h3 class="mb-4 text-xl font-semibold text-white">Frontend</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <img src="@/assets/webp/vue_icon.webp" alt="Vue.js" class="mr-3 h-6 w-6" />
                <div>
                  <span class="font-medium text-white">Vue 3</span>
                  <p class="text-sm text-gray-300">
                    Moderne, reaktive UI-Komponenten für optimale Benutzerfreundlichkeit
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <img
                  src="@/assets/webp/typescript_icon.webp"
                  alt="TypeScript"
                  class="mr-3 h-6 w-6"
                />
                <div>
                  <span class="font-medium text-white">TypeScript</span>
                  <p class="text-sm text-gray-300">
                    Typsicheres JavaScript für robuste und wartbare Anwendungen
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <img
                  src="@/assets/webp/tailwind_icon.webp"
                  alt="Tailwind CSS"
                  class="mr-3 h-6 w-6"
                />
                <div>
                  <span class="font-medium text-white">Tailwind CSS & Pinia</span>
                  <p class="text-sm text-gray-300">
                    Effizientes UI-Design und zuverlässiges State-Management
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Backend Stack -->
          <div class="rounded-lg border border-blue-900/30 bg-slate-800/50 p-6 shadow-lg">
            <h3 class="mb-4 text-xl font-semibold text-white">Backend</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <img src="@/assets/webp/flask_icon.webp" alt="Flask" class="mr-3 h-6 w-6" />
                <div>
                  <span class="font-medium text-white">Flask</span>
                  <p class="text-sm text-gray-300">
                    Leichtgewichtiges und flexibles Python-Framework für APIs
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <img src="@/assets/webp/pyhton_icon.webp" alt="Python" class="mr-3 h-6 w-6" />
                <div>
                  <span class="font-medium text-white">Python</span>
                  <p class="text-sm text-gray-300">
                    Vielseitige und bewährte Programmiersprache für Backend-Logik
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <div
                  class="mr-3 flex h-6 w-6 items-center justify-center rounded-full bg-blue-600/20"
                >
                  <CodeBracketIcon class="h-4 w-4 text-blue-400" />
                </div>
                <div>
                  <span class="font-medium text-white">Flask-RESTful & SQLAlchemy</span>
                  <p class="text-sm text-gray-300">
                    Standards für REST-APIs und ORM für effiziente Datenbankoperationen
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Database & DevOps -->
          <div class="rounded-lg border border-blue-900/30 bg-slate-800/50 p-6 shadow-lg">
            <h3 class="mb-4 text-xl font-semibold text-white">Datenbank & DevOps</h3>
            <ul class="space-y-4">
              <li class="flex items-start">
                <img src="@/assets/webp/postgres_icon.webp" alt="PostgreSQL" class="mr-3 h-6 w-6" />
                <div>
                  <span class="font-medium text-white">PostgreSQL</span>
                  <p class="text-sm text-gray-300">
                    Leistungsstarke, zuverlässige und erweiterbare SQL-Datenbank
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <img src="@/assets/webp/docker_icon.webp" alt="Docker" class="mr-3 h-6 w-6" />
                <div>
                  <span class="font-medium text-white">Docker & CI/CD</span>
                  <p class="text-sm text-gray-300">
                    Containerisierung und automatisierte Deployment-Prozesse
                  </p>
                </div>
              </li>
              <li class="flex items-start">
                <img src="@/assets/webp/vercel_icon.webp" alt="Vercel" class="mr-3 h-6 w-6" />
                <div>
                  <span class="font-medium text-white">Vercel/Hetzner</span>
                  <p class="text-sm text-gray-300">
                    Zuverlässige Hosting-Lösungen mit exzellenter Performance
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Security -->
          <div class="rounded-lg border border-blue-900/30 bg-slate-800/50 p-6 shadow-lg">
            <div class="flex items-center gap-3">
              <ShieldCheckIcon class="h-6 w-6 text-blue-400" />
              <h3 class="text-xl font-semibold text-white">Sicherheit</h3>
            </div>
            <ul class="mt-4 space-y-2 pl-4">
              <li class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                <span class="text-gray-300">HTTPS-Verschlüsselung</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                <span class="text-gray-300">JWT-basierte Authentifizierung</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                <span class="text-gray-300">OAuth2-Integration</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                <span class="text-gray-300">Granulare Zugriffskontrolle</span>
              </li>
            </ul>
          </div>

          <!-- Version Control -->
          <div class="rounded-lg border border-blue-900/30 bg-slate-800/50 p-6 shadow-lg">
            <div class="flex items-center gap-3">
              <img src="@/assets/webp/git_icon.webp" alt="Git" class="h-6 w-6" />
              <h3 class="text-xl font-semibold text-white">Versionskontrolle & Qualität</h3>
            </div>
            <ul class="mt-4 space-y-2 pl-4">
              <li class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                <span class="text-gray-300">Git & GitHub/GitLab</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                <span class="text-gray-300">Automatisierte Tests & Code-Reviews</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                <span class="text-gray-300">Linting & Code-Standards</span>
              </li>
              <li class="flex items-center gap-2">
                <div class="h-1.5 w-1.5 rounded-full bg-blue-400"></div>
                <span class="text-gray-300">Agile Entwicklungsmethoden</span>
              </li>
            </ul>
          </div>
        </div>

        <div class="mt-12 text-center">
          <RouterLink
            to="/kontakt"
            class="inline-flex items-center rounded-lg bg-blue-600 px-8 py-3 text-base font-medium text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40"
          >
            Über Ihr Projekt sprechen
            <ArrowRightIcon class="ml-2 h-5 w-5" />
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="bg-gradient-to-b from-slate-900 to-blue-900/20 py-20">
      <div class="relative container mx-auto max-w-4xl px-6 text-center">
        <div class="absolute inset-0 rounded-full bg-blue-500/5 blur-3xl"></div>
        <div class="relative z-10">
          <h2 class="text-3xl font-bold text-white sm:text-4xl">
            Bereit für Ihre individuelle Webanwendung?
          </h2>
          <p class="mx-auto mt-4 max-w-2xl text-xl text-gray-300">
            Lassen Sie uns gemeinsam Ihre Ideen in eine leistungsstarke Fullstack-Anwendung
            verwandeln.
          </p>
          <div class="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <RouterLink
              to="/kontakt"
              class="w-full rounded-lg bg-blue-600 px-8 py-3 text-center text-base font-medium text-white shadow-lg shadow-blue-600/30 transition-all hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/40 sm:w-auto"
            >
              Unverbindlich anfragen
            </RouterLink>
            <a
              href="tel:+4917621173947"
              class="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-600 bg-transparent px-6 py-3 text-base font-medium text-white transition-all hover:bg-slate-800 sm:w-auto"
            >
              <PhoneIcon class="h-5 w-5" />
              <span>+49 176 56723879</span>
            </a>
          </div>
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
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ServerIcon,
  PhoneIcon,
  ShieldCheckIcon,
  ExclamationTriangleIcon,
  LightBulbIcon,
  CloudIcon,
  ArrowRightIcon,
  SparklesIcon,
} from '@heroicons/vue/24/outline'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
