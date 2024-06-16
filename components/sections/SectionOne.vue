<script setup lang="ts">
import useWindowResize from '~/composables/windowResize'
import ShapeEight from '../shapes/ShapeEight.vue'
import ShapeTwelve from '../shapes/ShapeTwelve.vue'

const { windowWidth } = useWindowResize()
</script>

<template>
  <section class="section-one">
    <ShapeEight class="shape" />
    <ShapeTwelve v-show="windowWidth >= 1024" class="second shape" />
    <div class="divider">
      <h2>Stepping Up To The Professional Side</h2>
      <p>
        After exploring a variety of non-serious projects for learning and experimentation, I'm now
        eager to shift towards the professional realm. With plenty of experience and a strong
        foundation, I'm excited to contribute my skills to impactful projects.
      </p>
    </div>
  </section>
</template>

<style scoped>
.section-one {
  @apply text-right;
}

.divider {
  @apply justify-end;
}

h2 {
  @apply font-bold max-w-[75%] lg:max-w-[55%] self-end w-full;
}

p {
  @apply self-end max-w-[75%] lg:max-w-[70%];
}

.divider {
  padding-left: 0 !important;
}

.shape {
  @apply -translate-y-2 sm:-translate-y-10 lg:translate-y-10 left-[1rem] sm:left-[3rem];
}

.shape.second {
  @apply -translate-y-[5.5rem] -translate-x-2 left-[40%];
}

@media screen and (max-width: 370px) {
  .section-one .divider p {
    @apply self-end max-w-full;
  }
}
</style>
