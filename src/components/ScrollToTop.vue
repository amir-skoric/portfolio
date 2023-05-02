<template>
        <button @click="$emit('scrollTo', 'header')" class="p-4 bg-primary btnHover btnHoverTransition sticky float-right right-10 bottom-10 rounded-md font-montserrat drop-shadow-md md:hidden">Scroll to top!</button>
</template>

<style>

.btnHover:hover {
        filter: drop-shadow(0 -3px 0.75rem #FF9C40) drop-shadow(0 3px 0.75rem #0072A3);
}

.btnHoverTransition {
  @apply transition-all ease-in-out duration-200

}

</style>