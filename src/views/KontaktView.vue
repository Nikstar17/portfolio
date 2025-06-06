<template>
  <div class="py-8 sm:py-12">
    <!-- Meta-Tags Component -->
    <MetaTags
      :meta="{
        title: 'Kontakt | IT-Dienstleistungen & Webentwicklung in Goslar',
        description:
          'Nehmen Sie Kontakt mit Dominik Kasten auf für professionelle IT-Dienstleistungen und Webentwicklung in Goslar und dem Harz. Schnelle und persönliche Beratung für Ihr Projekt.',
        keywords: 'kontakt, anfrage, beratung, webentwicklung goslar, it-support harz',
        ogTitle: 'Kontakt für IT-Dienstleistungen im Harz',
        ogDescription:
          'Schnelle und unkomplizierte Hilfe bei allen Fragen rund um Webentwicklung, IT-Support und digitale Lösungen für Ihr Unternehmen.',
      }"
    />

    <div class="container mx-auto w-full max-w-2xl px-4 sm:px-6">
      <div class="mb-8 text-center">
        <h1 class="text-3xl font-bold text-white md:text-4xl">Kontakt</h1>
        <div class="mx-auto mt-2 h-1 w-20 bg-gradient-to-r from-blue-500 to-blue-400"></div>
      </div>

      <div
        class="rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">Nehmen Sie Kontakt auf</h2>
        <p class="mb-4 text-gray-300">
          Sie haben Fragen zu meinen Dienstleistungen oder möchten ein Projekt besprechen? Füllen
          Sie das Formular aus und ich melde mich schnellstmöglich bei Ihnen.
        </p>
        <p class="mb-6 text-gray-300">
          Sie möchten vorab meine Preise sehen?
          <RouterLink to="/preise" class="text-blue-400 hover:underline">
            Hier finden Sie meine transparente Preisübersicht
          </RouterLink>
          für IT-Service und Webseiten-Erstellung.
        </p>

        <form @submit.prevent="submitForm" class="space-y-6">
          <div class="grid gap-6 gap-y-4 md:grid-cols-2">
            <div>
              <label for="name" class="mb-2 block text-sm font-medium text-white">Name</label>
              <input
                type="text"
                id="name"
                v-model="formData.name"
                class="w-full rounded-lg border border-gray-700 bg-gray-900/50 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="Ihr Name"
                required
              />
            </div>
            <div>
              <label for="email" class="mb-2 block text-sm font-medium text-white">E-Mail</label>
              <input
                type="email"
                id="email"
                v-model="formData.email"
                class="w-full rounded-lg border border-gray-700 bg-gray-900/50 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
                placeholder="ihre.email@beispiel.de"
                required
              />
            </div>
          </div>

          <div>
            <label for="subject" class="mb-2 block text-sm font-medium text-white">Betreff</label>
            <input
              type="text"
              id="subject"
              v-model="formData.subject"
              class="w-full rounded-lg border border-gray-700 bg-gray-900/50 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Worum geht es?"
              required
            />
          </div>

          <div>
            <label for="message" class="mb-2 block text-sm font-medium text-white">Nachricht</label>
            <textarea
              id="message"
              v-model="formData.message"
              rows="5"
              class="w-full rounded-lg border border-gray-700 bg-gray-900/50 p-3 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:outline-none"
              placeholder="Ihre Nachricht..."
              required
            ></textarea>
          </div>

          <div class="flex items-start">
            <input
              id="privacy"
              type="checkbox"
              v-model="formData.privacy"
              class="mt-1 h-4 w-4 rounded border-gray-600 bg-gray-700 text-blue-600 focus:ring-2 focus:ring-blue-500"
              required
            />
            <label for="privacy" class="ml-2 text-sm text-gray-300">
              Ich habe die
              <RouterLink to="/datenschutz" class="text-blue-400 hover:text-blue-300">
                Datenschutzerklärung
              </RouterLink>
              gelesen und akzeptiere diese
            </label>
          </div>

          <div>
            <button
              type="submit"
              class="group w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3 text-center text-sm font-medium text-white transition-all duration-300 hover:from-blue-700 hover:to-blue-600 hover:shadow-lg hover:shadow-blue-600/20 sm:text-base"
              :disabled="isSubmitting"
            >
              <span v-if="isSubmitting" class="flex items-center justify-center">
                <svg
                  class="mr-2 h-5 w-5 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    class="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    stroke-width="4"
                  />
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Wird gesendet...
              </span>
              <span v-else>Nachricht senden</span>
            </button>
          </div>
        </form>

        <div v-if="formError" class="mt-6 rounded-lg bg-red-900/30 p-4 text-red-300">
          <p class="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="mr-2 h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clip-rule="evenodd"
              />
            </svg>
            {{ formError }}
          </p>
        </div>
      </div>

      <!-- Kontaktdaten -->
      <div
        class="mt-8 rounded-xl border border-gray-800/50 bg-gray-800/30 p-6 shadow-lg backdrop-blur-sm"
      >
        <h2 class="mb-4 text-xl font-semibold text-blue-400">Kontaktdaten</h2>

        <div class="space-y-4 text-gray-300">
          <div class="flex items-center">
            <svg
              class="mr-3 h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div>
              <h3 class="text-lg font-medium text-white">E-Mail</h3>
              <a href="mailto:info@dominik-kasten.de" class="hover:text-blue-400">
                info@dominik-kasten.de
              </a>
            </div>
          </div>

          <div class="flex items-center">
            <svg
              class="mr-3 h-6 w-6 text-blue-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div>
              <h3 class="text-lg font-medium text-white">Telefon</h3>
              <a href="tel:+4917656723879" class="hover:text-blue-400"> +49 176 56723879 </a>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-6 text-center sm:mt-8">
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
import { ref, reactive } from 'vue'
import { RouterLink, useRouter } from 'vue-router'

// Formular-Daten
const formData = reactive({
  name: '',
  email: '',
  subject: '',
  message: '',
  privacy: false,
})

// Router für die Navigation
const router = useRouter()

// Status-Variablen
const isSubmitting = ref(false)
const formError = ref('')

// Funktion zum Absenden des Formulars
const submitForm = async () => {
  formError.value = ''

  // Prüfe ob Datenschutz akzeptiert wurde
  if (!formData.privacy) {
    formError.value = 'Bitte akzeptieren Sie die Datenschutzerklärung.'
    return
  }

  isSubmitting.value = true

  try {
    const response = await fetch('/api/submitContactForm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }),
    })

    if (!response.ok) {
      throw new Error('Fehler beim Senden des Formulars.')
    }

    // Formular zurücksetzen
    formData.name = ''
    formData.email = ''
    formData.subject = ''
    formData.message = ''
    formData.privacy = false

    // Zur Danke-Seite navigieren
    router.push('/danke')
  } catch (error) {
    formError.value = 'Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.'
    console.error('Form submission error:', error)
  } finally {
    isSubmitting.value = false
  }
}

// Importiere MetaTags-Komponente
import MetaTags from '@/components/MetaTags.vue'
</script>
