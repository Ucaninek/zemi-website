<script setup lang="ts">
import PillButton from '@/components/PillButton.vue'
import ShapeSeven from '@/components/shapes/ShapeSeven.vue'
import ShapeEight from '@/components/shapes/ShapeEight.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'

import { ref, onMounted, onUnmounted } from 'vue'
import ShapeTwelve from '@/components/shapes/ShapeTwelve.vue'
import ShapeSix from '@/components/shapes/ShapeSix.vue'

var windowWidth = ref(window.innerWidth)

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<template>
  <main>
    <section class="hero">
      <div class="divider">
        <h1>High School Coder Turning Dreams Into Digital Realites</h1>
        <ShapeSeven class="shape" />
        <ShapeSix v-show="windowWidth >= 1024" class="second shape" />
      </div>
      <p>
        I'm Zemi, a high school programmer driven by a lifelong passion for crafting digital
        solutions.
      </p>
      <div class="button-container">
        <PillButton :primary="true">learn more</PillButton>
        <PillButton :secondary="true">contact me</PillButton>
      </div>
    </section>
    <section class="section-one">
      <ShapeEight class="shape" />
      <ShapeTwelve v-show="windowWidth >= 1024" class="second shape" />
      <div class="divider">
        <h2>Stepping Up To The Professional Side</h2>
        <p>
          After exploring a variety of non-serious projects for learning and experimentation, I'm
          now eager to shift towards the professional realm. With plenty of experience and a strong
          foundation, I'm excited to contribute my skills to impactful projects.
        </p>
      </div>
    </section>
    <section class="skills">
      <h2>my skills</h2>
      <div class="skill-icons">
        <img alt="C#" src="https://skillicons.dev/icons?i=cs" />
        <img alt="Visual Studio" src="https://skillicons.dev/icons?i=visualstudio" />
        <img alt=".NET" src="https://skillicons.dev/icons?i=dotnet" />
        <img alt="Python" src="https://skillicons.dev/icons?i=python" />
        <img alt="NodeJS" src="https://skillicons.dev/icons?i=nodejs" />
        <img alt="Express.js" src="https://skillicons.dev/icons?i=express" />
        <img alt="HTML" src="https://skillicons.dev/icons?i=html" />
        <img alt="CSS" src="https://skillicons.dev/icons?i=css" />
        <img alt="Tailwind CSS" src="https://skillicons.dev/icons?i=tailwind" />
        <img alt="JavaScript" src="https://skillicons.dev/icons?i=js" />
        <img alt="Webpack" src="https://skillicons.dev/icons?i=webpack" />
        <img alt="Vue" src="https://skillicons.dev/icons?i=vue" />
      </div>
    </section>
    <section class="highlighted-projects">
      <h2>highlighted projects</h2>
      <div class="projects-grid">
        <ProjectCard title="Hello World"
          >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
        >
        <ProjectCard title="Hello World"
          >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
        >
        <ProjectCard title="Hello World"
          >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
        >
        <ProjectCard title="Hello World"
          >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
        >
      </div>
    </section>
    <section class="reviews">
      <h2>reviews</h2>
      <h3>Read What Others Have To Say</h3>
      <div class="review-container">
        <ReviewCard author="Wheatley"
          >I wish I could take it all back. I honestly do. I honestly do wish I could take it all
          back. And not just 'cause I'm stranded in space.</ReviewCard
        >
        <ReviewCard author="Wheatley"
          >I wish I could take it all back. I honestly do. I honestly do wish I could take it all
          back. And not just 'cause I'm stranded in space.</ReviewCard
        >
        <ReviewCard author="Wheatley"
          >I wish I could take it all back. I honestly do. I honestly do wish I could take it all
          back. And not just 'cause I'm stranded in space.</ReviewCard
        >
      </div>
    </section>
    <section class="call-to-action">
      <div class="inner"></div>
      <div class="center">
        <div class="contact-card">
          <p>ready to turn ideas into reality?</p>
          <h2>Let's Stop Scrolling And Start Creating</h2>
          <PillButton>contact me</PillButton>
        </div>
      </div>
    </section>
  </main>
</template>
