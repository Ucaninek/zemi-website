<template>
  <section class="skills">
    <h2>my skills</h2>
    <div class="skill-icons">
      <img alt="C#" src="https://skillicons.dev/icons?light=true&i=cs" />
      <img alt="Visual Studio" src="https://skillicons.dev/icons?light=true&i=visualstudio" />
      <img alt=".NET" src="https://skillicons.dev/icons?light=true&i=dotnet" />
      <img alt="Python" src="https://skillicons.dev/icons?light=true&i=python" />
      <img alt="NodeJS" src="https://skillicons.dev/icons?light=true&i=nodejs" />
      <img alt="Express.js" src="https://skillicons.dev/icons?light=true&i=express" />
      <img alt="HTML" src="https://skillicons.dev/icons?light=true&i=html" />
      <img alt="CSS" src="https://skillicons.dev/icons?light=true&i=css" />
      <img alt="Tailwind CSS" src="https://skillicons.dev/icons?light=true&i=tailwind" />
      <img alt="JavaScript" src="https://skillicons.dev/icons?light=true&i=js" />
      <img alt="Webpack" src="https://skillicons.dev/icons?light=true&i=webpack" />
      <img alt="Vue" src="https://skillicons.dev/icons?light=true&i=vue" />
    </div>
  </section>
</template>

<style scoped>
.skill-icons {
  @apply bg-white bg-opacity-10 rounded-xl backdrop-blur-lg p-4 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 shadow-2xl gap-4 lg:gap-6;
}

.skill-icons img {
  @apply min-w-8 w-full max-w-20 xl:max-w-24;
}

.skill-icons img:hover {
  transform: scale(1.1);
}

.skill-icons img:active {
  transform: scale(0.95);
}

@media only screen and (min-width: 530px) and (max-width: 639px) {
  .skill-icons {
    @apply grid-cols-6;
  }
}

@media screen and (max-width: 370px) {
  .skill-icons {
    @apply grid-cols-3;
  }
}
</style>
