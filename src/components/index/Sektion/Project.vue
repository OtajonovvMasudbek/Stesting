<template>
  <div>
    <div
      class="lg:flex justify-between items-center mt-20 item max-w-[1000px] mx-auto gap-5 px-4"
    >
      <div>
        <h2 class="text-3xl lg:pl-0 pl-3 font-bold text-slate-900">
          Stesting <br />
          loyihasi haqida
        </h2>
        <img
          src="https://stesting.uz/wrap2.png"
          alt="wrap2"
          class="hidden max-w-xs md:max-w-md lg:max-w-[100px] translate-x-20 pt-3 sm:hidden md:block"
        />
      </div>
      <p class="max-w-[500px] mx-3 font-semibold pt-5  text-[18px] lg:mx-0">{{ item }}</p>

      <AlwaysButton class="py-10 lg:pl-0 pl-3 " buttonText="Batafsil" />
    </div>
  </div>
</template>
  
  <script setup>
import { ref, onMounted } from "vue";
import AlwaysButton from "../Common/AlwaysButton.vue";
import axios from "axios";

const item = ref("");

const fetchApiData = async () => {
  try {
    const response = await axios.get("https://qlapi.stesting.uz/api/v1/index/");
    item.value = response.data.short_description;
  } catch (error) {
    console.error("Error fetching API data:", error);
  }
};

onMounted(() => {
  fetchApiData();
});
</script>
  