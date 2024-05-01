<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue'
</script>

<template>
  <section class="highlighted-projects">
    <h2>highlighted projects</h2>
    <div class="projects-grid">
      <ProjectCard title="Hello World" src="https://placehold.co/600x400"
        >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
      >
      <ProjectCard title="Hello World" src="https://placehold.co/600x400"
        >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
      >
      <ProjectCard title="Hello World" src="https://placehold.co/600x400"
        >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
      >
      <ProjectCard title="Hello World" src="https://placehold.co/600x400"
        >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
      >
    </div>
  </section>
</template>

<style scoped>
@media screen and (min-width: 530px) and (max-width: 639px) {
  .projects-grid {
    @apply grid-cols-2 !important;
  }
}

.projects-grid {
  @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6;
}
</style>
