<script setup lang="ts">
import ArrowUpRight from './ArrowUpRight.vue'
import BurgerIcon from './BurgerIcon.vue'
import { ref } from 'vue'

let isBurgerOpen = ref(false)
</script>

<template>
  <div>
    <nav class="px-6 py-3 sm:px-8 flex justify-between">
      <p class="font-bold text-lg">ZEMI</p>
      <BurgerIcon
        class="cursor-pointer"
        v-bind:class="isBurgerOpen ? 'close' : ''"
        @click="isBurgerOpen = !isBurgerOpen"
      />
    </nav>
    <div class="burger" v-bind:class="isBurgerOpen ? 'burger-open' : 'burger-closed'">
      <p>home<ArrowUpRight /></p>
      <p>blog<ArrowUpRight /></p>
      <p>contact<ArrowUpRight /></p>
    </div>
    <div class="outside" v-if="isBurgerOpen" @click="isBurgerOpen = false"></div>
  </div>
</template>

<style scoped>
.burger {
  @apply absolute right-0 bg-neutral-400 bg-blend-soft-light rounded-xl flex flex-col gap-8 bg-opacity-10 mx-4 text-white overflow-hidden backdrop-blur-xl;
  z-index: 2;
}

.burger p {
  @apply cursor-pointer;
}

.burger p svg {
  display: inline;
  margin-bottom: 3px;
  margin-left: 3px;
}

.burger p:hover svg {
  @apply -translate-y-1;
}

.burger p:hover {
  @apply translate-x-2;
}

.burger-open {
  @apply w-auto h-auto p-8;
}

.burger-closed {
  @apply opacity-0 pointer-events-none;
}

.burger-closed p {
  @apply -translate-y-5;
}

.outside {
  @apply w-full h-full fixed;
  z-index: 1;
}
</style>
