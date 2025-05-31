<template>
  <div class="relative min-h-screen">
    <section class="relative flex min-h-[80vh] items-center justify-center py-16">
      <div class="absolute inset-0 z-0 opacity-10">
        <div class="h-full w-full"></div>
      </div>

      <div class="relative z-10 container mx-auto max-w-3xl px-6 text-center">
        <div class="mb-8">
          <!-- 404 mit Glow-Effekt -->
          <div class="relative inline-block">
            <div
              class="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 opacity-70 blur-xl"
            ></div>
            <h1
              class="relative bg-gradient-to-r from-white to-blue-400 bg-clip-text text-8xl font-bold tracking-tight text-transparent sm:text-9xl"
            >
              404
            </h1>
          </div>
        </div>

        <h2 class="mb-4 text-2xl font-semibold text-white md:text-3xl">Seite nicht gefunden</h2>

        <p class="mb-8 text-lg leading-relaxed text-gray-300">
          Die gesuchte Seite existiert nicht oder wurde verschoben. Nutzen Sie die Navigation, um
          zur Startseite zurückzukehren.
        </p>

        <div class="flex flex-wrap items-center justify-center gap-4">
          <RouterLink to="/">
            <button
              class="rounded-full bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/20"
            >
              Zurück zur Startseite
            </button>
          </RouterLink>
        </div>

        <!-- Dekorativer Hintergrund-Effekt -->
        <div
          class="absolute -right-10 -bottom-10 size-64 rounded-full bg-gradient-to-r from-blue-600/20 to-indigo-600/20 blur-3xl"
        ></div>
        <div
          class="absolute -top-10 -left-10 size-64 rounded-full bg-gradient-to-r from-indigo-600/20 to-blue-600/20 blur-3xl"
        ></div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
