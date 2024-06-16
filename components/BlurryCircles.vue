<template>
  <div class="circle-container">
    <img alt="" src="../assets/circle-scatter-primary.svg" class="blurry-circle a" />
    <img alt="" src="../assets/circle-scatter-secondary.svg" class="blurry-circle b" />
  </div>
</template>

<style scoped>
.circle-container {
  @apply h-full opacity-60 w-full fixed top-0 left-0 -z-10 blur-[100px];
}

.blurry-circle {
  @apply w-1/2 h-1/2 min-w-64 max-w-[25rem] absolute blur-[100px];
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
  @apply top-[210rem] sm:top-[160rem] lg:top-[120rem] left-0 opacity-75 -translate-x-16;
}

.blurry-circle.g {
  @apply top-[210rem] sm:top-[160rem] lg:top-[120rem] right-0 opacity-75 translate-x-16;
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
