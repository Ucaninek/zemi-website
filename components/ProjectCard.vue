<script setup lang="ts">
defineProps<{
  title: string
  src: string
}>()
</script>

<template>
  <div
    class="project-card bg-white bg-opacity-10 flex flex-col gap-4 rounded-xl hover:scale-105 hover:-translate-y-6 shadow-xl hover:shadow-2xl">
    <img class="rounded-t-xl" :src="src" />
    <div class="p-4 pt-0">
      <h3 class="text-2xl xl:text-3xl font-bold">{{ title }}</h3>
      <p>
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<style scoped>
.project-card h3 {
  font-family: 'Outfit';
}
</style>
