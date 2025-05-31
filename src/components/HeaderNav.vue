<template>
  <header class="relative z-40 py-4 md:py-5">
    <div class="container mx-auto max-w-6xl px-6">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-center">
          <h1 class="text-xl font-bold text-white md:text-2xl">Dominik Kasten</h1>
        </RouterLink>

        <!-- Mobile Menu Button -->
        <button @click="isMenuOpen = !isMenuOpen" class="z-50 block md:hidden" aria-label="Menu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-white"
            v-if="!isMenuOpen"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="h-6 w-6 text-white"
            v-else
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block">
          <ul class="flex space-x-8">
            <li>
              <RouterLink
                to="/"
                class="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
                :class="{ 'text-blue-400': $route.path === '/' }"
              >
                Startseite
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/webseiten-erstellung"
                class="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
                :class="{ 'text-blue-400': $route.path === '/webseiten-erstellung' }"
              >
                Webseiten
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/preise"
                class="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
                :class="{ 'text-blue-400': $route.path === '/preise' }"
              >
                Preise
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/ueber-mich"
                class="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
                :class="{ 'text-blue-400': $route.path === '/ueber-mich' }"
              >
                Über mich
              </RouterLink>
            </li>
            <li>
              <RouterLink
                to="/kontakt"
                class="text-sm font-medium text-gray-300 transition-colors hover:text-blue-400"
                :class="{ 'text-blue-400': $route.path === '/kontakt' }"
              >
                Kontakt
              </RouterLink>
            </li>
          </ul>
        </nav>

        <!-- Mobile Navigation Menu -->
        <div v-show="isMenuOpen" class="fixed inset-0 z-40 bg-gray-900">
          <div class="flex h-full flex-col items-center justify-center">
            <nav class="w-full text-center">
              <ul class="space-y-8">
                <li>
                  <RouterLink
                    @click="closeMenu"
                    to="/"
                    class="text-2xl font-medium text-white transition-colors hover:text-blue-400"
                    :class="{ 'text-blue-400': $route.path === '/' }"
                  >
                    Startseite
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    @click="closeMenu"
                    to="/webseiten-erstellung"
                    class="text-2xl font-medium text-white transition-colors hover:text-blue-400"
                    :class="{ 'text-blue-400': $route.path === '/webseiten-erstellung' }"
                  >
                    Webseiten
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    @click="closeMenu"
                    to="/preise"
                    class="text-2xl font-medium text-white transition-colors hover:text-blue-400"
                    :class="{ 'text-blue-400': $route.path === '/preise' }"
                  >
                    Preise
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    @click="closeMenu"
                    to="/ueber-mich"
                    class="text-2xl font-medium text-white transition-colors hover:text-blue-400"
                    :class="{ 'text-blue-400': $route.path === '/ueber-mich' }"
                  >
                    Über mich
                  </RouterLink>
                </li>
                <li>
                  <RouterLink
                    @click="closeMenu"
                    to="/kontakt"
                    class="text-2xl font-medium text-white transition-colors hover:text-blue-400"
                    :class="{ 'text-blue-400': $route.path === '/kontakt' }"
                  >
                    Kontakt
                  </RouterLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

const isMenuOpen = ref(false)
const route = useRoute()

const closeMenu = () => {
  isMenuOpen.value = false
}

const handleEscKey = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    isMenuOpen.value = false
  }
}

watch(
  () => route.path,
  () => {
    isMenuOpen.value = false
  },
)

onMounted(() => {
  document.addEventListener('keydown', handleEscKey)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscKey)
})
</script>

<style scoped>
/* Disable body scroll when menu is open */
:global(body.menu-open) {
  overflow: hidden;
}
</style>
