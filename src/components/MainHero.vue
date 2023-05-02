<template>
    <section class="hero bg-[url('../src/assets/img/graphic-1.svg')] bg-cover bg-no-repeat bg-center justify-center items-center flex flex-col">
        <img src="../assets/img/logo.png" class="h-32 xl:hidden md:block mt-8">
        <div class="container mx-auto px-12 py-36 flex flex-row sm:flex-col justify-center items-center space-y-8 z-50 mb-32 sm:mb-16 ">
            <div class="flex flex-col space-y-4 sm:justify-center sm:items-center" ref="bigText">
                <h1 class="[word-spacing:100vw] text-8xl sm:text-6xl text-primary font-bold font-montserrat leading-snug sm:text-center">Amir Skoric
                </h1>
                <h2 class="underline underline-offset-4 text-6xl font-roboto sm:text-4xl">Web developer.</h2>
                <h3 class="text-xl font-roboto font-light text-start">HTML, CSS and JavaScript</h3>
            </div>
            <div class="flex flex-col justify-center items-center h-1/2 sm:w-2/3" ref="picture">
                <div class="p-4 sm:p-2 rounded-full bg-gradient-to-b from-primary to-secondary drop-shadow-xl">
                    <img src="../assets/img/person.jpg" class="rounded-full">
                </div>
                <h2 class="font-montserrat mt-4 text-xl">Hello there! 😊</h2>
            </div>
        </div>
    </section>
</template>

<script>
//anime js (animations)
import anime from 'animejs'

export default {
    async mounted() {
        anime({
            targets: await this.$refs.picture,
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 2000
        })
        anime({
            targets: await this.$refs.bigText,
            opacity: [0, 1],
            translateY: [-50, 0],
            duration: 2000
        })
    }
}

</script>

<style>
/* fade bg to black*/
.hero {
    mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
    --webkit-mask-image: linear-gradient(to bottom, black 90%, transparent 100%);
}
</style>