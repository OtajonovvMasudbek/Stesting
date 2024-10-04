<template>
  <div>
    <div>
      <div
        class="bg-cover bg-center"
        style="background-image: url(https://stesting.uz/stestinglandingbg.png)"
      >
        <div class="mx-5 sm:mx-40 flex flex-col lg:flex-row pt-[80px] lg:pt-[110px] justify-around relative">
          <div class="text-left lg:text-left">
            <h2
              class="relative text-[32px] sm:text-[26px] lg:text-6xl text-slate-900 lg:max-w-[500px] font-bold pt-12 lg:pt-24 whitespace-pre-wrap"
            >
              {{ title }}
              <img
                class="absolute inset-0 max-w-[400px] hidden mx-auto z-0 -translate-y-10"
                src="https://stesting.uz/wrap1.png"
                alt="wrap1"
              />
            </h2>
            <div v-html="description" class="description"></div>
            <router-link to="/tutorials">
              <button class="mt-5 sm:mt-10 py-2 my-10 sm:py-3 px-8 sm:px-10 text-white font-bold bg-[#3bbecabc] hover:bg-[#5a7c80a7]">
                Video yoriq noma 
              </button>
            </router-link>
          </div>
          <div class="pt-20 lg:mt-0 max-w-[300px] sm:max-w-[400px] lg:block hidden">
            <img src="https://stesting.uz/focused-man.png" alt="focused-man" class="w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

const title = ref("");
const description = ref("");
const focusedManImage = ref("");

const fetchApiData = async () => {
  try {
    const response = await axios.get("https://qlapi.stesting.uz/api/v1/index/");
    const data = response.data.registration;

    title.value = data.title;
    description.value = data.description;
    focusedManImage.value = data.focused_man_image_url;
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
};

onMounted(fetchApiData);
</script>

<style scoped>
.description {
  max-width: 490px;
  font-size: 18px;
  color: #4a5568;
  margin-top: 1rem;
}
</style>
