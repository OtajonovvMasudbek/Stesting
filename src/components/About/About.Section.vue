<template>
    <div class="mt-20">
      <div
        class="bg-cover bg-no-repeat mx-auto bg-[url('https://stesting.uz/_nuxt/img/guide-bg.79378ab.png')] max-w-[600px] h-[200px]"
      >
        <h2 class="text-slate-900 text-center pt-3 text-3xl font-bold">
          Stesting nima?
        </h2>
        <p class="text-slate-500 text-xl text-center pt-7">
          Biroz pastga suring va Stesting haqida batafsil ma’lumotga ega bo‘ling
        </p>
      </div>
  
      <div
        class="bg-cover bg-no-repeat mx-auto bg-[url('https://stesting.uz/aboutlandingbg.png')] px-3 lg:px-10"
      >
        <div class="z-20 hidden lg:grid  custom-grid gap-4 mt-5">
          <img
            :src="about.image_url"
            alt="qizbola"
            class="w-full h-auto object-cover img1"
          />
          <img
            :src="about.image1_url"
            alt="bollar"
            class="w-full h-auto object-cover img2"
          />
          <img
            :src="about.image2_url"
            alt="o'gilbollar"
            class="w-full h-auto object-cover img3"
          />
          <img
            :src="about.image3_url"
            alt="pisa"
            class="w-full h-auto object-cover img4"
          />
        </div>
  
        <h1 class="text-5xl text-slate-900 font-bold py-5">
          {{ about.title }}
        </h1>
  
        <p v-if="error">{{ error }}</p>
        <div v-else>
          <p v-html="about.description"></p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const about = ref({});
  const error = ref(null);
  
  onMounted(async () => {
    try {
      const response = await fetch("https://qlapi.stesting.uz/api/v1/aboutus/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      about.value = data;
    } catch (err) {
      error.value = "Failed to fetch data: " + err.message;
    }
  });
  </script>
  
  <style scoped>
  .custom-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    grid-template-areas: 
      "left img1 img2 right";
  }
  
  .img1 {
    grid-area: img1;
  }
  
  .img2 {
    grid-area: img2;
  }
  
  .img3 {
    grid-area: left;
  }
  
  .img4 {
    grid-area: right;
  }
  
  img {
    object-fit: cover;
    aspect-ratio: 1 / 1;
    width: 100%;
    height: auto;
  }
  </style>
  