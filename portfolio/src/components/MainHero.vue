<script setup>
/*
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
*/
</script>

<template>
    <section class="container mx-auto px-12 flex justify-center items-center h-[90vh] z-50 mb-32">
        <div class="flex flex-col gap-4">
            <h1 class="[word-spacing:100vw] text-8xl text-primary font-bold font-montserrat leading-snug">Amir Skoric</h1>
            <h2 class="underline underline-offset-4 text-6xl font-roboto">Web developer.</h2>
            <h3 class="text-xl font-roboto font-light">HTML, CSS and JavaScript</h3>
        </div>
        <div class="flex flex-col justify-center items-center">
            <div class="p-2 rounded-full bg-gradient-to-b from-primary/50 to-secondary/50 ">
                <img src="../assets/img/person.png" class="rounded-full">
            </div>
            <h2 class="font-montserrat mt-4 text-xl">Hello there! 😊</h2>
        </div>
    </section>
    <img src="../assets/img/graphic-1.svg" class="absolute -z-10 top-0 left-0">
</template>

<style></style>