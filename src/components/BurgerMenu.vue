<script setup lang="ts">
import ArrowUpRight from './ArrowUpRight.vue'
import BurgerIcon from './BurgerIcon.vue'
import { ref } from 'vue'

let isBurgerOpen = ref(false)
</script>

<template>
  <header>
    <div>
      <nav class="w-full px-6 py-3 flex justify-between">
        <p class="font-bold text-lg">ZEMI</p>
        <BurgerIcon
          class="cursor-pointer"
          v-bind:class="isBurgerOpen ? 'close' : ''"
          @click="isBurgerOpen = !isBurgerOpen"
        />
      </nav>
      <div class="burger" v-bind:class="isBurgerOpen ? 'burger-open' : 'burger-closed'">
        <p>home<ArrowUpRight /></p>
        <p>projects<ArrowUpRight /></p>
        <p>contact<ArrowUpRight /></p>
      </div>
      <div class="outside" v-if="isBurgerOpen" @click="isBurgerOpen = false"></div>
    </div>
  </header>
</template>
