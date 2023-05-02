<template>
  <nav class="p-4 pb-0 flex flex-row sm:hidden justify-between font-montserrat items-center" ref="nav">
    <a href="#" class="hoverA hoverATransition"><img src="../assets/img/logo.png" class="h-16"></a>
    <div class="flex items-center gap-16 [&>a]:p-4">
      <button @click="$emit('scrollTo', 'about')" class="hoverA hoverATransition underline underline-offset-4">About</button>
      <button @click="$emit('scrollTo', 'cases')" class="hoverA hoverATransition underline underline-offset-4">Cases</button>
      <button @click="$emit('scrollTo', 'contact')" class="hoverA hoverATransition underline underline-offset-4">Contact</button>
    </div>
    <div class="flex items-center gap-8">
      <a href="https://github.com/amir-skoric/" target=”_blank” class="hoverA hoverATransition"><font-awesome-icon
          icon="fa-brands fa-github" size="2xl"></font-awesome-icon></a>
      <a href="https://dk.linkedin.com/in/amir-skoric-926119162" target=”_blank”
        class="hoverA hoverATransition"><font-awesome-icon icon="fa-brands fa-linkedin"
          size="2xl"></font-awesome-icon></a>
    </div>
  </nav>
</template>

<script>
//anime js (animations)
import anime from 'animejs'

export default {
  async mounted() {
    anime({
      targets: await this.$refs.nav,
      opacity: [0, 1],
      duration: 6000
    })
  }
}

</script>

<style>
.hoverA:hover {
  filter: drop-shadow(0 -5px 0.75rem #FF9C40) drop-shadow(0 5px 0.75rem #0072A3);
}

.hoverATransition {
  @apply transition-all ease-in-out duration-200
}</style>