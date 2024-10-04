<template>
  <div class="mx-5 lg:mx-10 max-w-full lg:max-w-[1000px] flex flex-col lg:flex-row justify-between my-10 items-center">
    <div class="mb-6 lg:mb-0 lg:mr-10 w-full lg:w-auto">
      <div class="relative w-full h-0 pb-[56.25%]">
        <iframe 
          v-if="videoUrl" 
          :src="videoUrl" 
          frameborder="0" 
          class="absolute top-0 left-0 w-full h-full" 
          allow="autoplay; encrypted-media; fullscreen"
          sandbox="allow-same-origin allow-scripts allow-presentation"
        ></iframe>
        <p v-else class="text-center">Video not available.</p>
      </div>
    </div>

    <div class="text-center lg:text-left">
      <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold text-slate-900">Videodarslar</h2>
      <p class="text-[16px] md:text-[18px] lg:text-[19px] py-6 md:py-8 lg:py-10">
        Foydalanuvchilarga qulaylik yaratish maqsadida <br />
        Stesting loyihasida videodarsliklar ham joylashtirilgan
      </p>

      <AlweysButton class="pb-5" buttonText="Barcha Videodarslar" />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from 'axios';
import AlweysButton from "../Common/AlwaysButton.vue";

const videoUrl = ref("");

const fetchApiData = async () => {
  try {
    const response = await axios.get("https://qlapi.stesting.uz/api/v1/index/");

    console.log("API Response:", response.data);
    
    const data = response.data?.main_video?.video;
    
    if (data) {
      videoUrl.value = data.startsWith("http") ? data : `https://www.youtube.com/embed/${data}`;
      console.log("Video URL:", videoUrl.value); 
    } else {
      console.error("Video URL not found in API response");
    }

  } catch (error) {
    console.error("Error fetching API data:", error);
  }
};

onMounted(() => {
  fetchApiData();
});
</script>
