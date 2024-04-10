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
    <section class="skills">
      <h2>My Skills</h2>
      <div class="skill-icons">
        <img src="https://skillicons.dev/icons?i=cs" />
        <img src="https://skillicons.dev/icons?i=visualstudio" />
        <img src="https://skillicons.dev/icons?i=dotnet" />
        <img src="https://skillicons.dev/icons?i=python" />
        <img src="https://skillicons.dev/icons?i=nodejs" />
        <img src="https://skillicons.dev/icons?i=express" />
        <img src="https://skillicons.dev/icons?i=html" />
        <img src="https://skillicons.dev/icons?i=css" />
        <img src="https://skillicons.dev/icons?i=tailwind" />
        <img src="https://skillicons.dev/icons?i=js" />
        <img src="https://skillicons.dev/icons?i=webpack" />
        <img src="https://skillicons.dev/icons?i=vue" />
      </div>
    </section>
  </main>
</template>
