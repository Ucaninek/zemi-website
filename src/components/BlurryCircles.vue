<template>
  <div class="blurry-circle primary"></div>
  <div class="blurry-circle secondary"></div>
</template>

<style scoped>
.blurry-circle {
  @apply opacity-50 w-full h-screen fixed blur-3xl top-0 left-0 -z-10;
}

.blurry-circle.primary {
  background: url('../assets/circle-scatter-primary.svg');
  @apply bg-cover bg-no-repeat;
}

.blurry-circle.secondary {
  background: url('../assets/circle-scatter-secondary.svg');
  @apply bg-cover bg-no-repeat;
}
</style>
