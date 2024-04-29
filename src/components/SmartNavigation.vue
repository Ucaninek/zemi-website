<script setup lang="ts">
import BurgerMenu from './BurgerMenu.vue'
import NavigationBar from './NavigationBar.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

var windowWidth = ref(window.innerWidth)
</script>

<template>
  <NavigationBar v-if="windowWidth >= 640" />
  <BurgerMenu v-else />
</template>
