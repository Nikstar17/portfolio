<template>
  <div class="relative min-h-screen">
    <!-- Meta-Tags Component -->
    <MetaTags
      :meta="{
        title: 'Webseiten-Erstellung Goslar | Professionelle Websites für lokale Unternehmen',
        description:
          'Professionelle Webseiten-Erstellung in Goslar und im Harz. Moderne, responsive Websites mit SEO-Optimierung speziell für lokale Unternehmen und Dienstleister.',
        keywords:
          'webseiten-erstellung goslar, website entwicklung harz, responsive webdesign, lokale webentwicklung, seo-optimierte webseiten',
        ogTitle: 'Webseiten-Erstellung für lokale Unternehmen im Harz',
        ogDescription:
          'Maßgeschneiderte Webseitenentwicklung mit persönlicher Beratung vor Ort. Moderne Technologien für Ihren digitalen Erfolg.',
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
          class="flex flex-col-reverse items-center gap-6 md:flex-row md:justify-around md:gap-10"
        >
          <!-- Text Content -->
          <div class="w-full text-center md:max-w-xl md:text-left">
            <h1
              class="bg-gradient-to-r from-white to-blue-400 bg-clip-text text-2xl font-bold tracking-tight text-transparent sm:text-3xl md:text-5xl lg:text-6xl"
            >
              Professionelle Webseiten für Ihr Business
            </h1>
            <p class="mt-4 text-base font-medium text-blue-400 sm:text-lg md:text-xl">
              Maßgeschneiderte Webseiten für Unternehmen im Harz und deutschlandweit
            </p>
            <p class="mt-5 text-sm leading-relaxed text-gray-300 sm:mt-6 sm:text-base md:text-lg">
              Ich gestalte und entwickle moderne, responsive Webseiten, die perfekt auf Ihr
              Unternehmen abgestimmt sind. Mit meiner Erfahrung als Full-Stack Entwickler in Goslar
              und dem Harz sorge ich dafür, dass Ihre Online-Präsenz nicht nur optisch überzeugt,
              sondern auch technisch einwandfrei funktioniert. Besonders Unternehmen aus Goslar, dem
              Harz, Salzgitter und Bad Harzburg profitieren von meiner lokalen Expertise und
              persönlichen Betreuung vor Ort.
            </p>
            <div
              class="mt-6 flex flex-col flex-wrap items-center justify-center gap-4 sm:mt-8 sm:flex-row md:justify-start"
            >
              <RouterLink to="/kontakt" class="w-full sm:w-auto">
                <button
                  class="w-full min-w-[220px] rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
                >
                  Kostenfreies Beratungsgespräch
                </button>
              </RouterLink>
              <a href="#leistungen" class="w-full sm:w-auto">
                <button
                  class="w-full min-w-[220px] rounded-full border border-gray-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:border-blue-400 hover:text-blue-400"
                >
                  Leistungen entdecken
                </button>
              </a>
            </div>
          </div>

          <!-- Image -->
          <div class="w-full max-w-[160px] sm:max-w-[200px] md:max-w-md">
            <img
              src="/dominik-kasten-transparent.png"
              alt="Dominik Kasten Webentwickler"
              class="h-auto w-full rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- Leistungen Section -->
    <section id="leistungen" class="bg-slate-900/50 py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold text-white">Meine Leistungen</h2>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <!-- Leistung 1 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div class="mb-4 text-3xl text-blue-500">
              <i class="fas fa-laptop-code"></i>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Webdesign & Entwicklung</h3>
            <p class="text-gray-300">
              Von der Konzeption bis zur Umsetzung – ich entwickle für Sie eine maßgeschneiderte
              Webseite, die perfekt zu Ihrem Unternehmen passt und auf allen Geräten optimal
              dargestellt wird.
            </p>
          </div>

          <!-- Leistung 2 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div class="mb-4 text-3xl text-blue-500">
              <i class="fas fa-search"></i>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">SEO-Optimierung</h3>
            <p class="text-gray-300">
              Ihre Webseite wird für Suchmaschinen optimiert, damit potenzielle Kunden Sie besser
              finden können. Ich sorge für die richtigen Inhalte und technische SEO-Maßnahmen.
            </p>
          </div>

          <!-- Leistung 3 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div class="mb-4 text-3xl text-blue-500">
              <i class="fas fa-mobile-alt"></i>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Responsive Design</h3>
            <p class="text-gray-300">
              Ihre Webseite wird für alle Geräte optimiert – vom Smartphone bis zum Desktop. So
              erreichen Sie Ihre Kunden optimal, unabhängig davon, welches Gerät sie nutzen.
            </p>
          </div>

          <!-- Leistung 4 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div class="mb-4 text-3xl text-blue-500">
              <i class="fas fa-server"></i>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Hosting & Wartung</h3>
            <p class="text-gray-300">
              Ich kümmere mich um das Hosting Ihrer Webseite und sorge für regelmäßige Updates und
              Wartungsarbeiten, damit Ihre Seite immer sicher und auf dem neuesten Stand ist.
            </p>
          </div>

          <!-- Leistung 5 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div class="mb-4 text-3xl text-blue-500">
              <i class="fas fa-pen-fancy"></i>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Content-Erstellung</h3>
            <p class="text-gray-300">
              Professionelle Texte und Inhalte für Ihre Webseite, die Ihre Botschaft optimal
              vermitteln und gleichzeitig für Suchmaschinen optimiert sind.
            </p>
          </div>

          <!-- Leistung 6 -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 shadow-lg transition-all hover:-translate-y-1 hover:shadow-blue-600/10"
          >
            <div class="mb-4 text-3xl text-blue-500">
              <i class="fas fa-chart-line"></i>
            </div>
            <h3 class="mb-3 text-xl font-semibold text-white">Analytics & Tracking</h3>
            <p class="text-gray-300">
              Ich implementiere Tools zur Analyse des Besucherverhaltens auf Ihrer Webseite, damit
              Sie genau wissen, wie Ihre Seite genutzt wird und wo Verbesserungspotenzial besteht.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Prozess Section -->
    <section class="py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold text-white">Mein Arbeitsprozess</h2>

        <div class="relative">
          <!-- Timeline Line (hidden on mobile, visible on md+) -->
          <div
            class="absolute left-1/2 hidden h-full w-0.5 -translate-x-1/2 bg-blue-600/30 md:block"
          ></div>

          <!-- Timeline Items -->
          <div class="space-y-12">
            <!-- Step 1 -->
            <div class="relative flex flex-col md:flex-row">
              <!-- Mobile timeline marker -->
              <div class="mb-4 flex items-center md:hidden">
                <div
                  class="mr-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-blue-600 bg-slate-900"
                ></div>
                <h3 class="text-xl font-semibold text-white">1. Erstgespräch & Beratung</h3>
              </div>

              <div class="md:w-1/2 md:pr-8 md:text-right">
                <!-- Desktop heading (hidden on mobile) -->
                <h3 class="mb-2 hidden text-xl font-semibold text-white md:block">
                  1. Erstgespräch & Beratung
                </h3>
                <p class="text-gray-300">
                  Im kostenlosen Erstgespräch lernen wir uns kennen und ich verstehe Ihre
                  Anforderungen und Ziele. Gemeinsam entwickeln wir eine Strategie für Ihre
                  Webseite.
                </p>
              </div>
              <!-- Desktop timeline marker -->
              <div
                class="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center md:flex"
              >
                <div class="h-8 w-8 rounded-full border-4 border-blue-600 bg-slate-900"></div>
              </div>
              <div class="pt-0 md:w-1/2 md:pt-0 md:pl-8"></div>
            </div>

            <!-- Step 2 -->
            <div class="relative flex flex-col md:flex-row">
              <!-- Mobile timeline marker -->
              <div class="mb-4 flex items-center md:hidden">
                <div
                  class="mr-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-blue-600 bg-slate-900"
                ></div>
                <h3 class="text-xl font-semibold text-white">2. Konzeption & Design</h3>
              </div>

              <div class="md:w-1/2 md:pr-8"></div>
              <!-- Desktop timeline marker -->
              <div
                class="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center md:flex"
              >
                <div class="h-8 w-8 rounded-full border-4 border-blue-600 bg-slate-900"></div>
              </div>
              <div class="pt-0 md:w-1/2 md:pt-0 md:pl-8 md:text-left">
                <!-- Desktop heading (hidden on mobile) -->
                <h3 class="mb-2 hidden text-xl font-semibold text-white md:block">
                  2. Konzeption & Design
                </h3>
                <p class="text-gray-300">
                  Ich erstelle ein maßgeschneidertes Konzept für Ihre Webseite und entwickle erste
                  Designentwürfe, die wir gemeinsam besprechen und anpassen.
                </p>
              </div>
            </div>

            <!-- Step 3 -->
            <div class="relative flex flex-col md:flex-row">
              <!-- Mobile timeline marker -->
              <div class="mb-4 flex items-center md:hidden">
                <div
                  class="mr-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-blue-600 bg-slate-900"
                ></div>
                <h3 class="text-xl font-semibold text-white">3. Entwicklung</h3>
              </div>

              <div class="md:w-1/2 md:pr-8 md:text-right">
                <!-- Desktop heading (hidden on mobile) -->
                <h3 class="mb-2 hidden text-xl font-semibold text-white md:block">
                  3. Entwicklung
                </h3>
                <p class="text-gray-300">
                  Nach Ihrer Freigabe beginne ich mit der technischen Umsetzung Ihrer Webseite. Ich
                  achte dabei auf Qualität, Performance und Sicherheit.
                </p>
              </div>
              <!-- Desktop timeline marker -->
              <div
                class="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center md:flex"
              >
                <div class="h-8 w-8 rounded-full border-4 border-blue-600 bg-slate-900"></div>
              </div>
              <div class="pt-0 md:w-1/2 md:pt-0 md:pl-8"></div>
            </div>

            <!-- Step 4 -->
            <div class="relative flex flex-col md:flex-row">
              <!-- Mobile timeline marker -->
              <div class="mb-4 flex items-center md:hidden">
                <div
                  class="mr-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-blue-600 bg-slate-900"
                ></div>
                <h3 class="text-xl font-semibold text-white">4. Test & Optimierung</h3>
              </div>

              <div class="md:w-1/2 md:pr-8"></div>
              <!-- Desktop timeline marker -->
              <div
                class="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center md:flex"
              >
                <div class="h-8 w-8 rounded-full border-4 border-blue-600 bg-slate-900"></div>
              </div>
              <div class="pt-0 md:w-1/2 md:pt-0 md:pl-8 md:text-left">
                <!-- Desktop heading (hidden on mobile) -->
                <h3 class="mb-2 hidden text-xl font-semibold text-white md:block">
                  4. Test & Optimierung
                </h3>
                <p class="text-gray-300">
                  Ich teste Ihre Webseite gründlich auf verschiedenen Geräten und Browsern und
                  optimiere sie für maximale Performance und Benutzerfreundlichkeit.
                </p>
              </div>
            </div>

            <!-- Step 5 -->
            <div class="relative flex flex-col md:flex-row">
              <!-- Mobile timeline marker -->
              <div class="mb-4 flex items-center md:hidden">
                <div
                  class="mr-4 flex h-8 w-8 items-center justify-center rounded-full border-4 border-blue-600 bg-slate-900"
                ></div>
                <h3 class="text-xl font-semibold text-white">5. Launch & Support</h3>
              </div>

              <div class="md:w-1/2 md:pr-8 md:text-right">
                <!-- Desktop heading (hidden on mobile) -->
                <h3 class="mb-2 hidden text-xl font-semibold text-white md:block">
                  5. Launch & Support
                </h3>
                <p class="text-gray-300">
                  Nach Ihrer finalen Freigabe geht Ihre Webseite online. Ich stehe Ihnen auch danach
                  für Support, Wartung und Weiterentwicklung zur Verfügung.
                </p>
              </div>
              <!-- Desktop timeline marker -->
              <div
                class="absolute left-1/2 hidden -translate-x-1/2 items-center justify-center md:flex"
              >
                <div class="h-8 w-8 rounded-full border-4 border-blue-600 bg-slate-900"></div>
              </div>
              <div class="pt-0 md:w-1/2 md:pt-0 md:pl-8"></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="bg-gradient-to-b from-slate-900/50 to-blue-900/20 py-12 sm:py-16">
      <div class="container mx-auto max-w-4xl px-4 text-center sm:px-6">
        <h2 class="mb-4 text-2xl font-bold text-white sm:text-3xl">
          Bereit für Ihren professionellen Webauftritt?
        </h2>
        <p class="mb-6 text-base text-gray-300 sm:mb-8 sm:text-xl">
          Lassen Sie uns gemeinsam Ihre digitale Präsenz auf das nächste Level heben. Kontaktieren
          Sie mich für ein unverbindliches Beratungsgespräch.
        </p>
        <div class="flex flex-col flex-wrap items-center justify-center gap-4 sm:flex-row">
          <RouterLink to="/kontakt" class="w-full sm:w-auto">
            <button
              class="w-full rounded-full bg-blue-600 px-6 py-3 text-base font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20 sm:w-[240px] sm:text-lg"
            >
              Jetzt Kontakt aufnehmen
            </button>
          </RouterLink>
          <RouterLink to="/preise" class="w-full sm:w-auto">
            <button
              class="w-full rounded-full border border-blue-500 px-6 py-3 text-base font-medium text-white transition-all hover:bg-blue-500 hover:shadow-lg hover:shadow-blue-600/20 sm:w-[240px] sm:text-lg"
            >
              Preise ansehen
            </button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-12 text-center text-3xl font-bold text-white">Häufig gestellte Fragen</h2>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- Mobile: Collapsible, Desktop: Always expanded -->
          <div class="rounded-lg bg-slate-800/70 p-6">
            <button
              @click="toggleFaq('faq1')"
              class="flex w-full items-center justify-between text-left md:cursor-default"
            >
              <h3 class="text-xl font-semibold text-white">Was kostet eine Webseite?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform text-blue-400 transition-transform duration-200 md:hidden"
                :class="openFaqs.faq1 ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="overflow-hidden transition-all duration-300 md:block"
              :class="[openFaqs.faq1 ? 'mt-3 max-h-96' : 'max-h-0 md:mt-3 md:max-h-96']"
            >
              <p class="text-gray-300">
                Die Kosten für eine Webseite hängen von verschiedenen Faktoren ab, wie Umfang,
                Funktionen und Design-Ansprüchen. Ich biete maßgeschneiderte Lösungen für jedes
                Budget. Auf meiner
                <RouterLink to="/preise" class="text-blue-400 hover:underline"
                  >Preisseite</RouterLink
                >
                finden Sie Orientierungspreise, oder kontaktieren Sie mich für ein individuelles
                Angebot.
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-slate-800/70 p-6">
            <button
              @click="toggleFaq('faq2')"
              class="flex w-full items-center justify-between text-left md:cursor-default"
            >
              <h3 class="text-xl font-semibold text-white">Wie lange dauert die Erstellung?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform text-blue-400 transition-transform duration-200 md:hidden"
                :class="openFaqs.faq2 ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="overflow-hidden transition-all duration-300 md:block"
              :class="[openFaqs.faq2 ? 'mt-3 max-h-96' : 'max-h-0 md:mt-3 md:max-h-96']"
            >
              <p class="text-gray-300">
                Die Entwicklungszeit hängt vom Umfang des Projekts ab. Eine einfache Webseite kann
                innerhalb von 2-3 Wochen erstellt werden, komplexere Projekte benötigen entsprechend
                mehr Zeit.
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-slate-800/70 p-6">
            <button
              @click="toggleFaq('faq3')"
              class="flex w-full items-center justify-between text-left md:cursor-default"
            >
              <h3 class="text-xl font-semibold text-white">Brauche ich technisches Vorwissen?</h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform text-blue-400 transition-transform duration-200 md:hidden"
                :class="openFaqs.faq3 ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="overflow-hidden transition-all duration-300 md:block"
              :class="[openFaqs.faq3 ? 'mt-3 max-h-96' : 'max-h-0 md:mt-3 md:max-h-96']"
            >
              <p class="text-gray-300">
                Nein, Sie benötigen kein technisches Vorwissen. Ich kümmere mich um alle technischen
                Aspekte und erkläre Ihnen alles Wichtige in einer für Sie verständlichen Sprache.
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-slate-800/70 p-6">
            <button
              @click="toggleFaq('faq4')"
              class="flex w-full items-center justify-between text-left md:cursor-default"
            >
              <h3 class="text-xl font-semibold text-white">
                Kann ich meine Webseite selbst pflegen?
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform text-blue-400 transition-transform duration-200 md:hidden"
                :class="openFaqs.faq4 ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="overflow-hidden transition-all duration-300 md:block"
              :class="[openFaqs.faq4 ? 'mt-3 max-h-96' : 'max-h-0 md:mt-3 md:max-h-96']"
            >
              <p class="text-gray-300">
                Ja, auf Wunsch implementiere ich ein benutzerfreundliches Content-Management-System,
                mit dem Sie Ihre Inhalte selbstständig aktualisieren können. Ich biete auch
                Schulungen dazu an.
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-slate-800/70 p-6">
            <button
              @click="toggleFaq('faq5')"
              class="flex w-full items-center justify-between text-left md:cursor-default"
            >
              <h3 class="text-xl font-semibold text-white">
                Unterstützen Sie auch nach dem Launch?
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform text-blue-400 transition-transform duration-200 md:hidden"
                :class="openFaqs.faq5 ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="overflow-hidden transition-all duration-300 md:block"
              :class="[openFaqs.faq5 ? 'mt-3 max-h-96' : 'max-h-0 md:mt-3 md:max-h-96']"
            >
              <p class="text-gray-300">
                Selbstverständlich! Ich stehe Ihnen auch nach der Fertigstellung Ihrer Webseite für
                Wartung, Updates und Erweiterungen zur Verfügung. Je nach Bedarf kann ich ein
                individuelles Support-Paket für Sie zusammenstellen.
              </p>
            </div>
          </div>

          <div class="rounded-lg bg-slate-800/70 p-6">
            <button
              @click="toggleFaq('faq6')"
              class="flex w-full items-center justify-between text-left md:cursor-default"
            >
              <h3 class="text-xl font-semibold text-white">
                Arbeiten Sie mit lokalen Unternehmen zusammen?
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transform text-blue-400 transition-transform duration-200 md:hidden"
                :class="openFaqs.faq6 ? 'rotate-180' : ''"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
            <div
              class="overflow-hidden transition-all duration-300 md:block"
              :class="[openFaqs.faq6 ? 'mt-3 max-h-96' : 'max-h-0 md:mt-3 md:max-h-96']"
            >
              <p class="text-gray-300">
                Ja, ich arbeite bevorzugt mit Unternehmen aus Goslar, dem Harz, Salzgitter und Bad
                Harzburg zusammen. Durch persönliche Treffen vor Ort können wir Ihre Webseite
                optimal auf Ihre lokalen Bedürfnisse abstimmen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Lokale Präsenz Section -->
    <section class="bg-slate-900/50 py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-8 text-center text-3xl font-bold text-white">
          Ihr lokaler Webentwickler im Harz
        </h2>

        <div class="mb-8 text-center">
          <p class="mx-auto max-w-4xl text-lg text-gray-300">
            Als Webentwickler mit Sitz in Goslar biete ich maßgeschneiderte Webseiten-Entwicklung
            für Unternehmen und Selbstständige im gesamten Harzgebiet und darüber hinaus an.
          </p>
        </div>

        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <!-- Goslar -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 text-center shadow-lg transition-all hover:-translate-y-1"
          >
            <div class="mb-4 inline-block rounded-full bg-blue-600/20 p-3">
              <i class="fas fa-map-marker-alt text-2xl text-blue-500"></i>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-white">Goslar</h3>
            <p class="text-gray-300">
              Professionelle Webentwicklung für Unternehmen und Dienstleister in der historischen
              Kaiserstadt Goslar.
            </p>
          </div>

          <!-- Harz -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 text-center shadow-lg transition-all hover:-translate-y-1"
          >
            <div class="mb-4 inline-block rounded-full bg-blue-600/20 p-3">
              <i class="fas fa-mountain text-2xl text-blue-500"></i>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-white">Harz</h3>
            <p class="text-gray-300">
              Digitale Lösungen für Tourismusbetriebe, Hotels und regionale Unternehmen im gesamten
              Harz.
            </p>
          </div>

          <!-- Salzgitter -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 text-center shadow-lg transition-all hover:-translate-y-1"
          >
            <div class="mb-4 inline-block rounded-full bg-blue-600/20 p-3">
              <i class="fas fa-industry text-2xl text-blue-500"></i>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-white">Salzgitter</h3>
            <p class="text-gray-300">
              Moderne Webseiten für Industrieunternehmen und Dienstleister in Salzgitter und
              Umgebung.
            </p>
          </div>

          <!-- Bad Harzburg -->
          <div
            class="rounded-lg bg-slate-800/70 p-6 text-center shadow-lg transition-all hover:-translate-y-1"
          >
            <div class="mb-4 inline-block rounded-full bg-blue-600/20 p-3">
              <i class="fas fa-spa text-2xl text-blue-500"></i>
            </div>
            <h3 class="mb-2 text-xl font-semibold text-white">Bad Harzburg</h3>
            <p class="text-gray-300">
              Ansprechende Online-Präsenzen für Kur- und Wellnessbetriebe sowie lokale Geschäfte in
              Bad Harzburg.
            </p>
          </div>
        </div>

        <div class="mt-10 text-center">
          <p class="mx-auto mb-6 max-w-3xl text-lg text-gray-300">
            Durch meine lokale Präsenz kann ich Sie persönlich vor Ort beraten und Ihre
            individuellen Bedürfnisse optimal verstehen – für eine maßgeschneiderte Webseite, die
            perfekt zu Ihrem Unternehmen passt.
          </p>
          <RouterLink to="/kontakt">
            <button
              class="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Lokalen Termin vereinbaren
            </button>
          </RouterLink>
        </div>
      </div>
    </section>

    <!-- Portfolio Section -->
    <section class="py-16">
      <div class="container mx-auto max-w-6xl px-6">
        <h2 class="mb-8 text-center text-3xl font-bold text-white">Meine bisherigen Projekte</h2>
        <p class="mx-auto mb-12 max-w-3xl text-center text-lg text-gray-300">
          Hier finden Sie eine Auswahl meiner bereits umgesetzten Webprojekte. Jedes dieser Projekte
          wurde individuell auf die Bedürfnisse des Kunden zugeschnitten.
        </p>

        <div class="grid grid-cols-1 gap-8 md:grid-cols-3">
          <!-- EditorFolio Projekt -->
          <div
            class="group overflow-hidden rounded-xl bg-slate-800/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-600/20"
          >
            <div class="relative overflow-hidden">
              <img
                src="@/assets/webp/Editorfolio.webp"
                alt="EditorFolio - Portfolio für Video-Editoren"
                class="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
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

          <!-- Dinkelspelz24 Projekt -->
          <div
            class="group overflow-hidden rounded-xl bg-slate-800/70 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-blue-600/20"
          >
            <div class="relative overflow-hidden">
              <img
                src="@/assets/webp/dinkelspelz24.webp"
                alt="Dinkelspelz24 - Regionale Bio-Produkte"
                class="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
              />
              <div
                class="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"
              ></div>
            </div>
            <div class="p-6">
              <h3 class="mb-3 text-xl font-semibold text-white">Dinkelspelz24</h3>
              <p class="mb-4 text-gray-300">
                Eine responsive E-Commerce-Website für regionale Bio-Produkte mit integriertem
                Shop-System und benutzerfreundlicher Navigation.
              </p>
              <a
                href="https://www.dinkelspelz24.de"
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
                class="h-48 w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
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
        </div>

        <div class="mt-10 text-center">
          <p class="mx-auto mb-6 max-w-3xl text-lg text-gray-300">
            Interesse an einer ähnlichen Website oder einem individuellen Webprojekt? Kontaktieren
            Sie mich für ein unverbindliches Beratungsgespräch.
          </p>
          <RouterLink to="/kontakt">
            <button
              class="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Projekt anfragen
            </button>
          </RouterLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive } from 'vue'
import { RouterLink } from 'vue-router'
import MetaTags from '@/components/MetaTags.vue'

// Define a type for the FAQ state
interface FaqState {
  [key: string]: boolean
}

// Reactive state for FAQs
const openFaqs = reactive<FaqState>({
  faq1: window.innerWidth >= 768, // Open by default on desktop
  faq2: window.innerWidth >= 768,
  faq3: window.innerWidth >= 768,
  faq4: window.innerWidth >= 768,
  faq5: window.innerWidth >= 768,
  faq6: window.innerWidth >= 768,
})

// Toggle FAQ open/close
const toggleFaq = (id: string) => {
  if (window.innerWidth < 768) {
    // Only toggle on mobile
    openFaqs[id] = !openFaqs[id]
  }
}

onMounted(() => {
  window.scrollTo(0, 0)

  // Add event listener for window resize to handle desktop vs mobile view
  const handleResize = () => {
    const isDesktop = window.innerWidth >= 768
    if (isDesktop) {
      // On desktop, all FAQs should be open
      Object.keys(openFaqs).forEach((key) => {
        openFaqs[key] = true
      })
    } else {
      // On mobile, all FAQs should be closed by default
      Object.keys(openFaqs).forEach((key) => {
        openFaqs[key] = false
      })
    }
  }

  // Initial resize handler call to set correct state
  handleResize()

  window.addEventListener('resize', handleResize)

  // Clean up event listener
  return () => {
    window.removeEventListener('resize', handleResize)
  }
})
</script>
