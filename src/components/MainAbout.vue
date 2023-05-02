<template>
    <section class="bg-[url('../src/assets/img/graphic-2.svg')] bg-cover bg-no-repeat bg-top">
        <div class="container mx-auto px-32 md:px-8 flex flex-col justify-center items-center z-50 my-32 sm:my-16 md:my-8">
            <h1 class="underline text-6xl md:text-2xl text-center font-montserrat font-bold my-[5%]">Welcome to my webpage!</h1>
            <div>
                <h2 class="text-2xl md:text-xl font-montserrat font-bold mb-8">About me</h2>
                <p class="text-md font-roboto font-light text-justify">Hello there. My name is Amir Skoric and I am 22 years old. I
                    come from Bornholm,
                    which might surprise some of you. I study at “IBA Erhvervsakademi Kolding”, where I am studying for the
                    “Webdeveloper” education. I am already a “Multimediedesigner” graduate.<br><br>

                    I consider myself to be a reasonable person. I may be on the quiet side, but that doesn’t mean that I
                    don’t
                    want to talk to you, It’s just that I’ve been suffering from social anxiety ever since I was a kid
                    🙃. Once you get to know me, I will be more comfortable talking to you.<br><br>

                    My favorite hobbies include playing video games and producing music, although I have many more. Most of
                    my
                    free time is spent in front of a computer, and I would consider myself to be fluent in both the
                    Microsoft
                    Windows and Apples MacOS operating system.</p>
            </div>
        </div>
        <MainChart v-motion-fade-visible />
    </section>
</template>

<script setup>
    import MainChart from './MainChart.vue';
</script>

<style>

</style>