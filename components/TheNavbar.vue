<template>
  <div>
    <nav class="px-6 py-3 lg:mb-12 lg:pt-5 xl:pt-12 sm:px-8 flex justify-between">
      <p class="font-bold text-lg cursor-wait">ZEMI</p>
      <div class="links flex w-1/2 gap-4 justify-between">
        <p>home</p>
        <p>blog</p>
        <p>contact</p>
        <DarkModeToggle />
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav .links p {
  cursor: pointer;
  @apply hover:scale-110 active:scale-95;
}
</style>
