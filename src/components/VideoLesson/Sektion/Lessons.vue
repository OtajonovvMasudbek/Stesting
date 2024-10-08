<template>
    <div>
        <div class="bg-sky-50 shadow-lg mx-20 my-20">
          <h2 class="px-10 pt-10 text-slate-900 text-4xl font-bold mt-20">
            Videodarslar
          </h2>
          <div class="flex justify-between items-center px-10">
            <div class="flex gap-5 py-5">
              <button
                class="border bg-sky-100 py-3 px-10 font-semibold hover:text-slate-900 text-sky-500 focus:border-spacing-1 focus:border-sky-500 transform transition-all ease-in-out duration-300"
              >
                O'quvchilar uchun
              </button>
              <button
                class="border bg-sky-100 py-3 px-10 font-semibold hover:text-slate-900 text-sky-500 focus:border-spacing-1 focus:border-sky-500 transform transition-all ease-in-out duration-300"
              >
                O'qtuvchilar uchun
              </button>
            </div>
            <div>
              <Select />
            </div>
          </div>
        </div>
        <div class="grid grid-cols-3">
          <LessonCard/>
        </div>
    </div>
</template>

<script setup>
import LessonCard from "../Common/LessonCard.vue";
import Select from "../Common/Select.vue";


</script>