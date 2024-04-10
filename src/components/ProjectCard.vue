<script setup lang="ts">
defineProps(['src', 'title', 'desc'])
</script>

<template>
  <div class="project-card">
    <img src="../assets/SHAPE_FOCUS_DARK.png" />
    <h3>{{ title }}</h3>
    <p><slot></slot></p>
  </div>
</template>

<style scoped>
.project-card {
  @apply bg-white bg-opacity-10 flex flex-col gap-4 p-4 rounded-xl;
}

.project-card h3 {
  font-family: 'Outfit';
  @apply text-2xl font-bold rounded-xl;
}
</style>
