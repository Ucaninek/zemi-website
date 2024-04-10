<script setup lang="ts">
defineProps(['primary', 'secondary'])
</script>
<template>
  <div
    v-bind:class="primary ? 'primary' : secondary ? 'secondary' : ''"
    class="w-fit py-3 px-6 rounded-full"
  >
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  font-family: 'Outfit';
  letter-spacing: 2px;
  user-select: none;
  @apply uppercase font-semibold;
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

.primary:active {
  @apply saturate-150;
}

.secondary {
  @apply border-2 border-secondary;
}

.secondary:active {
  @apply bg-secondary text-black;
}
</style>
