<template>
  <footer
    class="mt-auto border-t border-gray-800 py-8 md:py-10"
    style="height: auto; min-height: 160px"
  >
    <div class="container mx-auto max-w-6xl px-4 md:px-6">
      <div class="flex flex-col items-center justify-between gap-8 md:flex-row md:gap-6">
        <!-- Logo/Branding Side -->
        <div class="flex flex-col items-center md:items-start">
          <h2 class="text-xl font-bold text-white">Dominik Kasten</h2>
          <p class="mt-2 text-sm text-gray-400">Full-Stack Entwicklung & IT-Dienstleistungen</p>
        </div>

        <!-- Links Side -->
        <div class="flex flex-col items-center gap-6 md:flex-row md:items-center md:gap-4">
          <!-- Social Media Links -->
          <div class="flex items-center gap-6 md:gap-4">
            <a
              href="https://github.com/Nikstar17"
              target="_blank"
              class="group text-gray-400 transition-all duration-200 hover:text-blue-500"
              aria-label="GitHub"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/dominik-kasten-6b52b3228/"
              target="_blank"
              class="group text-gray-400 transition-all duration-200 hover:text-blue-500"
              aria-label="LinkedIn"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 transition-transform group-hover:scale-110"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                />
              </svg>
            </a>
          </div>

          <!-- Legal Links -->
          <div class="flex flex-wrap justify-center gap-3 md:gap-4">
            <RouterLink
              to="/kontakt"
              class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-blue-500"
            >
              Kontakt
            </RouterLink>
            <RouterLink
              to="/webseiten-erstellung"
              class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-blue-500"
            >
              Webseiten
            </RouterLink>
            <RouterLink
              to="/preise"
              class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-blue-500"
            >
              Preise
            </RouterLink>
            <RouterLink
              to="/ueber-mich"
              class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-blue-500"
            >
              Über mich
            </RouterLink>
            <RouterLink
              to="/impressum"
              class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-blue-500"
            >
              Impressum
            </RouterLink>
            <RouterLink
              to="/datenschutz"
              class="text-sm font-medium text-gray-400 transition-all duration-200 hover:text-blue-500"
            >
              Datenschutz
            </RouterLink>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-8 text-center">
        <p class="text-sm text-gray-500">
          &copy; {{ new Date().getFullYear() }} Dominik Kasten. Alle Rechte vorbehalten.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<style scoped>
/* Ensuring proper spacing and responsive behavior */
@media (max-width: 768px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }
}

/* Improve link spacing on very small screens */
@media (max-width: 360px) {
  .flex-wrap a {
    margin-bottom: 0.5rem;
  }
}
</style>
