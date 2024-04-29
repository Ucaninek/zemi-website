<script setup lang="ts">
import '@/assets/main.css'
import 'locomotive-scroll/locomotive-scroll.css'
import SmartNavigation from './components/SmartNavigation.vue'
import BlurryCircles from './components/BlurryCircles.vue'
import { ScrollView } from 'potiah'
import SimpleFooter from './components/SimpleFooter.vue'
</script>

<template>
  <ScrollView root>
    <SmartNavigation />
    <RouterView />
    <BlurryCircles />
    <SimpleFooter />
  </ScrollView>
</template>
