<template>
    <div
        class="w-1/2 md:w-[90%] lg:w-[90%] bg-gradient-to-b from-primary to-secondary p-2 rounded-md drop-shadow-xl container mx-auto mb-32">
        <div class="chart font-roboto flex flex-col w-full p-8  bg-black">
            <div class="flex flex-col justify-center items-center mb-8">
                <h1 class="font-montserrat font-bold text-3xl">My skills</h1>
                <h2 class="font-montserrat text-xl">How I would rate them from 1-10 </h2>
            </div>
            <div class="scale flex justify-between font-montserrat text-sm border-b-2 pb-2 mb-8">
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
                <div>
                    <p>HTML</p>
                    <div class="bar w-[100%]"></div>
                </div>
                <div>
                    <p>CSS</p>
                    <div class="bar w-[90%]"></div>
                </div>
                <div>
                    <p>JavaScript</p>
                    <div class="bar w-[80%]"></div>
                </div>
                <div>
                    <p>Music Production</p>
                    <div class="bar w-[80%]"></div>
                </div>
                <div>
                    <p>Graphics Design</p>
                    <div class="bar w-[90%]"></div>
                </div>
                <div>
                    <p>"Tech-savyness"</p>
                    <div class="bar w-[100%]"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.bar {
    @apply bg-primary my-4 py-4 font-roboto font-light rounded-sm
}
</style>