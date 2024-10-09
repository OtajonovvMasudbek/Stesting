<template>
    <div>
        <div class="bg-sky-50 shadow-lg mx-5 md:mx-20 my-10 md:my-20">
            <h2 class="px-5 pt-5 md:px-10 md:pt-10 text-slate-900 text-3xl md:text-4xl font-bold mt-10 md:mt-20">
                Videodarslar
            </h2>
            <div class="flex flex-col md:flex-row justify-between items-center px-5 md:px-10">
                <div class="lg:flex gap-5 py-5">
                    <button
                        class="border w-full bg-sky-100 py-3 px-5 md:px-10 font-semibold hover:text-slate-900 text-sky-500 focus:border-spacing-1 focus:border-sky-500 transform transition-all ease-in-out duration-300"
                    >
                        O'quvchilar uchun
                    </button>
                    <button
                        class="border w-full mt-5 bg-sky-100 py-3 px-5 md:px-10 font-semibold hover:text-slate-900 text-sky-500 focus:border-spacing-1 focus:border-sky-500 transform transition-all ease-in-out duration-300"
                    >
                        O'qtuvchilar uchun
                    </button>
                </div>
                <div class="w-full md:w-auto">
                    <Select />
                </div>
            </div>
        </div>
        <div class="lg:mx-auto mx-0 max-w-[1100px] px-5 md:px-0">
            <LessonCard />
        </div>
    </div>
</template>

<script setup>
import LessonCard from "../Common/LessonCard.vue";
import Select from "../Common/Select.vue";
</script>
