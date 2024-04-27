<script setup lang="ts">
import '@/assets/main.css'
import 'locomotive-scroll/locomotive-scroll.css'
import BurgerMenu from './components/BurgerMenu.vue'
import NavigationBar from './components/NavigationBar.vue'
import BlurryCircles from './components/BlurryCircles.vue'

import { ScrollView } from 'potiah'
import SimpleFooter from './components/SimpleFooter.vue'
</script>

<template>
  <ScrollView root>
    <NavigationBar />
    <RouterView />
    <BlurryCircles />
    <SimpleFooter />
  </ScrollView>
</template>
