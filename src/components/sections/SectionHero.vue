<script setup lang="ts">
import PillButton from '../PillButton.vue'
import ShapeSeven from '../shapes/ShapeSeven.vue'
import ShapeSix from '../shapes/ShapeSix.vue'
import { ref, onMounted, onUnmounted } from 'vue'

const windowWidth = ref(window.innerWidth)

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
}
</script>

<template>
  <section class="hero">
    <div class="divider">
      <h1>High School Coder Turning Dreams Into Digital Realites</h1>
      <ShapeSeven class="shape" />
      <ShapeSix v-show="windowWidth >= 1024" class="second shape" />
    </div>
    <p>
      I'm Zemi, a high school programmer driven by a lifelong passion for crafting digital
      solutions.
    </p>
    <div class="button-container">
      <PillButton :primary="true">learn more</PillButton>
      <PillButton :secondary="true">contact me</PillButton>
    </div>
  </section>
</template>

<style scoped>
.shape.second {
  @apply translate-y-10 left-[60%] xl:left-[65%];
}

@media screen and (min-width: 405px) and (max-width: 446px) {
  .hero .divider .shape {
    left: calc(100% - 7rem);
  }
}

@media screen and (min-width: 500px) and (max-width: 550px) {
  .hero .divider .shape {
    left: calc(100% - 11rem);
  }
}

@media screen and (min-width: 749px) and (max-width: 820px) {
  .hero .divider .shape {
    @apply -translate-x-[20%];
  }
}

@media screen and (min-width: 970px) and (max-width: 1023px) {
  .shape {
    @apply rotate-12;
  }
}

@media screen and (min-width: 1196px) and (max-width: 1279px) {
  .shape.second {
    @apply translate-x-0;
  }
  h1 {
    font-family: 'Outfit';
    @apply w-[65%];
  }
}

@media screen and (min-width: 1136px) and (max-width: 1195px) {
  .shape.second {
    @apply translate-y-20 -translate-x-36;
  }
}

@media screen and (min-width: 448px) and (max-width: 640px) {
  .shape {
    @apply translate-x-8;
  }
}

.hero {
  @apply mb-4;
}

h1 {
  @apply font-bold adaptive-h1 w-[85%] lg:w-[70%] mb-4;
}

.shape {
  @apply w-32 sm:w-44 sm:-translate-x-[40%];
  left: calc(100% - 9.5rem);
}

@media screen and (max-width: 370px) {
  h1 {
    @apply w-full max-w-full;
  }
}
</style>
