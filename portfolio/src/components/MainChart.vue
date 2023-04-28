<template>
    <div class="gradient-bg w-full bg-gradient-to-b from-primary to-secondary p-2 mt-16 rounded-md drop-shadow-xl">
        <div class="chart font-roboto flex flex-col w-full p-8  bg-black">
            <div class="flex flex-col justify-center items-center mb-8">
                <h1 class="font-montserrat font-bold text-3xl">My skills</h1>
                <h2 class="font-montserrat text-xl">How I would rate them from 0-10 </h2>
            </div>
            <div class="scale flex justify-between font-montserrat text-sm">
                <p>0</p>
                <p>1</p>
                <p>2</p>
                <p>3</p>
                <p>4</p>
                <p>5</p>
                <p>6</p>
                <p>7</p>
                <p>8</p>
                <p>9</p>
                <p>10</p>
            </div>
            <div class="bars">
                <div class="bar w-[95%]">HTML</div>
                <div class="bar w-[75%]">JavaScript</div>
                <div class="bar w-[85%]">CSS</div>
                <div class="bar w-[90%]">Photoshop</div>
                <div class="bar w-[85%]">Music production</div>
                <div class="bar w-[100%]">"Tech Savvy-ness"</div>
            </div>
        </div>
    </div>
</template>

<style>
.bar {
    @apply bg-primary my-2 py-3 pl-2 font-roboto font-light rounded-lg
}
</style>