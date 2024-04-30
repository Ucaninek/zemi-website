<script setup lang="ts">
defineProps(['src', 'title', 'desc'])
</script>

<template>
  <div class="project-card">
    <img src="https://placehold.co/600x400" />
    <div>
      <h3>{{ title }}</h3>
      <p><slot></slot></p>
    </div>
  </div>
</template>

<style scoped>
.project-card {
  @apply bg-white bg-opacity-10 flex flex-col gap-4 rounded-xl hover:scale-95 shadow-2xl hover:shadow-sm;
}

.project-card img {
  @apply rounded-t-xl;
}

.project-card h3 {
  font-family: 'Outfit';
  @apply text-2xl xl:text-3xl font-bold;
}

.project-card div {
  @apply p-4 pt-0;
}
</style>
