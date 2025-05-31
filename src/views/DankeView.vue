<template>
  <div class="py-12">
    <div class="container mx-auto max-w-4xl px-6">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-white md:text-4xl">Vielen Dank!</h1>
        <div class="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400"></div>
      </div>

      <div
        class="rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <div class="mb-6 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 text-green-400"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <h2 class="mb-4 text-center text-xl font-semibold text-blue-400">
          Ihre Nachricht wurde erfolgreich gesendet
        </h2>
        <p class="mb-6 text-center text-gray-300">
          Vielen Dank für Ihre Kontaktanfrage. Ich werde mich zeitnah bei Ihnen melden.
        </p>
        <div class="text-center">
          <RouterLink
            to="/"
            class="group inline-flex items-center rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-center font-medium text-white transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-600/20"
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
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
