<template>
  <div class="circle-container">
    <img src="../assets/circle-scatter-primary.svg" class="blurry-circle a" />
    <img src="../assets/circle-scatter-secondary.svg" class="blurry-circle b" />
    <img src="../assets/circle-scatter-primary.svg" class="blurry-circle c" />
    <img src="../assets/circle-scatter-secondary.svg" class="blurry-circle d" />
    <img src="../assets/circle-scatter-primary.svg" class="blurry-circle e" />
  </div>
</template>

<style scoped>
.circle-container {
  @apply h-[100vh] w-full absolute blur-3xl top-0 left-0 -z-10;
}

.blurry-circle {
  @apply opacity-50 w-1/2 h-1/2 min-w-60 max-w-[20rem] absolute;
}

.blurry-circle.a {
  @apply top-0 left-0 -translate-x-10 -translate-y-10;
}

.blurry-circle.b {
  @apply top-96 right-0 translate-x-20;
}

.blurry-circle.c {
  @apply top-[50rem] left-0;
}

.blurry-circle.d {
  @apply top-[72rem] right-0;
}

.blurry-circle.e {
  @apply top-[100rem] left-0;
}
</style>
