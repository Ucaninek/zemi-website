<script setup lang="ts">
import PillButton from '@/components/PillButton.vue'
</script>

<template>
  <section class="call-to-action">
    <div class="inner"></div>
    <div class="center">
      <div class="contact-card">
        <p>ready to turn ideas into reality?</p>
        <h2>Let's Stop Scrolling And Start Creating</h2>
        <PillButton>contact me</PillButton>
      </div>
    </div>
  </section>
</template>

<style scoped>
.call-to-action h2 {
  @apply max-w-96 relative;
}

.call-to-action .inner {
  @apply absolute opacity-50 top-0 left-0 w-full h-full bg-gradient-to-r to-primary from-secondary rounded-xl blur-3xl -z-10;
}
</style>
