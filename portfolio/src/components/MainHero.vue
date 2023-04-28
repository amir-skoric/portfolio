<template>
    <main class="hero bg-[url('../src/assets/img/graphic-1.svg')] bg-cover bg-no-repeat bg-center">
        <section class="container mx-auto px-12 flex justify-center items-center z-50 mb-32 h-[90vh]">
            <div class="flex flex-col gap-4" ref="bigText">
                <h1 class="[word-spacing:100vw] text-8xl text-primary font-bold font-montserrat leading-snug">Amir Skoric
                </h1>
                <h2 class="underline underline-offset-4 text-6xl font-roboto">Web developer.</h2>
                <h3 class="text-xl font-roboto font-light">HTML, CSS and JavaScript</h3>
            </div>
            <div class="flex flex-col justify-center items-center">
                <div class="p-4 rounded-full bg-gradient-to-b from-primary to-secondary drop-shadow-xl" ref="picture">
                    <img src="../assets/img/person.png" class="rounded-full">
                </div>
                <h2 class="font-montserrat mt-4 text-xl">Hello there! 😊</h2>
            </div>
        </section>
    </main>
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
    mask-image: linear-gradient(to bottom, black 80%, transparent 100%);
}
</style>