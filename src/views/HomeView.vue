<script setup lang="ts">
import PillButton from '@/components/PillButton.vue'
import ShapeSeven from '@/components/shapes/ShapeSeven.vue'
import ShapeEight from '@/components/shapes/ShapeEight.vue'
</script>

<template>
  <main>
    <section class="hero">
      <div class="divider">
        <h1>High School Coder Turning Dreams Into Digital Realites</h1>
        <ShapeSeven class="shape" />
      </div>
      <p>
        I'm Zemi, a high school programmer driven by a lifelong passion for crafting digital
        solutions.
      </p>
      <PillButton :primary="true">learn more</PillButton>
      <PillButton :secondary="true">contact me</PillButton>
    </section>
    <section class="section-one">
      <div class="divider">
        <ShapeEight class="shape" />
        <h2>Stepping Up To The Professional Side</h2>
      </div>
      <p>
        After exploring a variety of non-serious projects for learning and experimentation, I'm now
        eager to shift towards the professional realm. With ample experience and a strong
        foundation, I'm excited to contribute my skills to impactful projects.
      </p>
    </section>
    <section class="skills"></section>
  </main>
</template>
