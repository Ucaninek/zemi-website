<script setup lang="ts">
import PillButton from '@/components/PillButton.vue'
</script>

<template>
  <section class="call-to-action hover:scale-105 hover:-translate-y-6">
    <div
      class="inner absolute opacity-5 top-0 left-0 w-full h-full bg-gradient-to-r to-primary from-secondary rounded-xl blur-3xl -z-10">
    </div>
    <div class="center">
      <div class="contact-card">
        <p>ready to turn ideas into reality?</p>
        <h2 class="max-w-96 relative">Let's Stop Scrolling And Start Creating</h2>
        <PillButton>contact me</PillButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.call-to-action:hover .inner {
  opacity: .2;
}
</style>
