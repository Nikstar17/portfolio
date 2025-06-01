<template>
  <!-- This component doesn't render anything visible, it only manages meta tags -->
  <div class="hidden"></div>
</template>

<script setup lang="ts">
import { watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { updateMetaTags, type MetaInfo } from '@/utils/metaService'

const props = defineProps<{
  meta?: MetaInfo
}>()

const route = useRoute()

// Überwache Props und Route-Änderungen
watch(
  () => props.meta,
  (newMeta) => {
    if (newMeta) {
      updateMetaTags(newMeta)
    }
  },
  { immediate: true },
)

// Bei Komponenten-Montierung sicherstellen, dass die Meta-Tags aus der Route verwendet werden
onMounted(() => {
  // Wenn keine Props-Meta aber Route-Meta vorhanden ist, Route-Meta verwenden
  if (!props.meta && route.meta.metaInfo) {
    updateMetaTags(route.meta.metaInfo as MetaInfo)
  }
})
</script>
