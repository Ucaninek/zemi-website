<template>
  <div class="circle-container">
    <img alt="" src="../assets/circle-scatter-primary.svg" class="blurry-circle a" />
    <img alt="" src="../assets/circle-scatter-secondary.svg" class="blurry-circle b" />
    <img alt="" src="../assets/circle-scatter-primary.svg" class="blurry-circle c" />
    <img alt="" src="../assets/circle-scatter-secondary.svg" class="blurry-circle d" />
    <img alt="" src="../assets/circle-scatter-primary.svg" class="blurry-circle e" />
    <img alt="" src="../assets/circle-scatter-secondary.svg" class="blurry-circle f" />
    <img alt="" src="../assets/circle-scatter-primary.svg" class="blurry-circle g" />
  </div>
</template>

<style scoped>
.circle-container {
  @apply h-[100vh] w-full absolute blur-[100px] top-0 left-0 -z-10;
}

.blurry-circle {
  @apply opacity-50 w-1/2 h-1/2 min-w-64 max-w-[25rem] absolute blur-2xl;
}

.blurry-circle.a {
  @apply top-0 left-0 -translate-x-10 -translate-y-10;
}

.blurry-circle.b {
  @apply top-96 right-0 translate-x-20;
}

.blurry-circle.c {
  @apply -translate-x-20 top-[50rem] sm:top-[45rem] left-0;
}

.blurry-circle.d {
  @apply translate-x-20 top-[72rem] sm:top-[64rem] right-0;
}

.blurry-circle.e {
  @apply top-[100rem] left-0;
}

.blurry-circle.f {
  @apply top-[220rem] sm:top-[160rem] left-0 opacity-75 -translate-x-16;
}

.blurry-circle.g {
  @apply top-[220rem] sm:top-[160rem] right-0 opacity-75 translate-x-16;
}

@media screen and (min-width: 530px) and (max-width: 639px) {
  .blurry-circle.f {
    @apply top-[160rem] !important;
  }

  .blurry-circle.g {
    @apply top-[160rem] !important;
  }
}
</style>
