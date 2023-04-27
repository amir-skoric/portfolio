<template>
  <nav class="p-4 flex justify-between font-montserrat items-center">
    <a href="#" class="hoverA hoverATransition"><img src="../assets/img/logo.png" class="h-16"></a>
    <div class="flex items-center gap-8 [&>a]:p-4">
        <a href="#" class="hoverA hoverATransition underline underline-offset-4">Portfolio</a>
        <a href="#" class="hoverA hoverATransition underline underline-offset-4">About</a>
        <a href="#" class="hoverA hoverATransition underline underline-offset-4">Contact</a>
    </div>
    <div class="flex items-center gap-8">
      <a href="https://github.com/amir-skoric/" target=”_blank” class="hoverA hoverATransition"><font-awesome-icon icon="fa-brands fa-github" size="2xl"></font-awesome-icon></a>
      <a href="https://dk.linkedin.com/in/amir-skoric-926119162" target=”_blank” class="hoverA hoverATransition"><font-awesome-icon icon="fa-brands fa-linkedin" size="2xl"></font-awesome-icon></a> 
    </div>
  </nav>
</template>

<style>
    .hoverA:hover {
        filter: drop-shadow(0 -5px 0.75rem #FF9C40) drop-shadow(0 5px 0.75rem #0072A3);
    }
    .hoverATransition {
      @apply transition-all ease-in-out duration-200
    }
    
</style>