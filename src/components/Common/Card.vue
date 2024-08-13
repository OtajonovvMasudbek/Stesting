<template>
  <div>
    <div
      class="shadow-lg max-h-[300px] hover:shadow-2xl  cursor-pointer backdrop-blur-sm bg-white/30"
    >
      <div class="relative">
        <img class="pb-5 h-[150px] w-full" :src="data.image_url" alt="image" />
        <div class="absolute translate-y-[-65px] backdrop-blur w-full flex gap-12 mx-auto  bg-white/20">
          <div class="block px-4 py-2">
            <i class="ri-eye-line text-[20px] text-white"></i>
            <p class="text-white">{{ data.views }}</p>    
          </div>

          <div class="block px-4 py-2">
            <i class="ri-calendar-line text-[20px] text-white"></i>
            <p class="text-white text-[15px]">{{ data.date }}</p>
          </div>
        </div>
      </div>
      <p class="font-bold text-lg px-5 py-5 line-clamp-1">{{ data.title }}</p>
      <p class="font-bold text-sm px-5 pb-4 text-slate-500 line-clamp-1">
        {{ data.title }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Data {
  image_url: string;
  title: string;
  views: number; 
  date: number;   
}

interface Props {
  data: Data;
}

defineProps<Props>();
</script>
