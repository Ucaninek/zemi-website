<script setup lang="ts">
defineProps(['src', 'author', 'content'])
</script>

<template>
  <div class="review-card">
    <img :src="src" />
    <span>{{ author }}</span>
    <p><slot></slot></p>
  </div>
</template>

<style scoped>
.review-card {
  @apply bg-white bg-opacity-10 mt-[72px] pt-[80px] flex flex-col gap-4 p-4 rounded-xl relative;
}

.review-card span {
  font-family: 'Outfit';
  @apply text-2xl font-bold rounded-xl;
}

.review-card img {
  @apply rounded-full w-36 self-center absolute top-0 -translate-y-1/2;
}
</style>
