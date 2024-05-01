<script setup lang="ts">
import PillButton from '@/components/PillButton.vue'
import ShapeEight from '@/components/shapes/ShapeEight.vue'
import ShapeTwelve from '@/components/shapes/ShapeTwelve.vue'
import ProjectCard from '@/components/ProjectCard.vue'
import ReviewCard from '@/components/ReviewCard.vue'
import SectionHero from '@/components/sections/SectionHero.vue'

import { ref, onMounted, onUnmounted } from 'vue'

import { ScrollComponent } from 'potiah'
import SectionOne from '@/components/sections/SectionOne.vue'
import SectionSkills from '@/components/sections/SectionSkills.vue'

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
    <SectionHero />
    <SectionOne />
    <SectionSkills />
    <section class="highlighted-projects">
      <h2>highlighted projects</h2>
      <div class="projects-grid">
        <ProjectCard title="Hello World" src="https://placehold.co/600x400"
          >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
        >
        <ProjectCard title="Hello World" src="https://placehold.co/600x400"
          >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
        >
        <ProjectCard title="Hello World" src="https://placehold.co/600x400"
          >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
        >
        <ProjectCard title="Hello World" src="https://placehold.co/600x400"
          >hello guys its me flying gorilla welcome back to my flying gorilla simulator</ProjectCard
        >
      </div>
    </section>
    <section class="reviews">
      <h2>reviews</h2>
      <h3>Read What Others Have To Say</h3>
      <div class="review-container">
        <ReviewCard author="Wheatley" src="src\assets\wheatley.png"
          >I wish I could take it all back. I honestly do. I honestly do wish I could take it all
          back. And not just 'cause I'm stranded in space.</ReviewCard
        >
        <ReviewCard author="Wheatley" src="src\assets\wheatley.png"
          >I wish I could take it all back. I honestly do. I honestly do wish I could take it all
          back. And not just 'cause I'm stranded in space.</ReviewCard
        >
        <ReviewCard author="Wheatley" src="src\assets\wheatley.png"
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
