<script setup lang="ts">
import { RouterView } from 'vue-router'
import FooterView from './views/FooterView.vue'
import HeaderNav from './components/HeaderNav.vue'
import CookieBanner from './components/CookieBanner.vue'
import { useMeta } from '@/utils/metaService'

// Meta-Tags initialisieren
useMeta()
</script>

<template>
  <!-- Add noise texture overlay -->
  <div class="noise-overlay"></div>

  <!-- Header Navigation -->
  <HeaderNav />

  <!-- Main content -->
  <main>
    <RouterView v-slot="{ Component, route }">
      <transition
        :name="typeof route.meta.transition === 'string' ? route.meta.transition : 'fade'"
        mode="out-in"
      >
        <component :is="Component" />
      </transition>
    </RouterView>
  </main>
  <FooterView />
  <CookieBanner />
</template>

<style>
body {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

:root {
  --scrollbar-track: rgba(31, 41, 55, 0.1);
  --scrollbar-thumb: rgba(59, 130, 246, 0.5);
  --scrollbar-thumb-hover: rgba(59, 130, 246, 0.7);
}

/* Custom scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: var(--scrollbar-track);
}

::-webkit-scrollbar-thumb {
  background: var(--scrollbar-thumb);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--scrollbar-thumb-hover);
}

/* Global transition for all links and buttons */
a,
button {
  transition: all 0.2s ease-in-out;
}

/* Page transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
