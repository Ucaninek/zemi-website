<script setup lang="ts">
import SectionHero from '@/components/sections/SectionHero.vue'
import SectionOne from '@/components/sections/SectionOne.vue'
import SectionSkills from '@/components/sections/SectionSkills.vue'
import SectionReviews from '@/components/sections/SectionReviews.vue'
import SectionProjects from '@/components/sections/SectionProjects.vue'
import SectionCallToAction from '@/components/sections/SectionCallToAction.vue'

import { ref, onMounted, onUnmounted } from 'vue'

var windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <main>
    <SectionHero />
    <SectionOne />
    <SectionSkills />
    <SectionReviews />
    <SectionProjects />
    <SectionCallToAction />
  </main>
</template>
