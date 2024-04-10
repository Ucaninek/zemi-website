<template>
  <div class="burger-icon">
    <div class="bar"></div>
    <div class="bar"></div>
    <div class="bar"></div>
  </div>
</template>

<style scoped>
.burger-icon {
  @apply w-7 h-7 flex flex-col justify-center items-center;
  gap: 5px;
}

.burger-icon .bar {
  width: 1.5rem;
  height: 2px;
  background: #fff;
  transition:
    margin 0.2s,
    transform 0.2s;
  transform-origin: center;
  transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
}

.burger-icon:not(.close):hover {
  gap: 7px;
}

.burger-icon.close .bar:first-child {
  transform: translateY(7px) rotate(45deg);
}

.burger-icon.close .bar:nth-child(2) {
  opacity: 0;
}

.burger-icon.close .bar:last-child {
  transform: translateY(-7px) rotate(-45deg);
}
</style>
