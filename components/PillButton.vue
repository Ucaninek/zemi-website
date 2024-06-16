<script setup lang="ts">
defineProps(['primary', 'secondary'])
</script>
<template>
  <div v-bind:class="primary ? 'primary' : secondary ? 'secondary' : ''" class="w-fit py-3 px-6 rounded-full">
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  font-family: 'Outfit';
  letter-spacing: 2px;
  user-select: none;
  cursor: pointer;
  @apply uppercase font-semibold bg-black;
}

div:hover {
  transform: scale(1.05);
}

div:active {
  transform: scale(0.95);
}

.primary {
  @apply bg-primary;
}

.secondary {
  @apply border-2 border-secondary bg-transparent;
}

.secondary:active {
  @apply bg-secondary text-black;
}
</style>
