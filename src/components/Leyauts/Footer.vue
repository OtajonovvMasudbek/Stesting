<template>
    <div class="bg-slate-900 flex flex-col-reverse lg:flex-row items-center justify-around py-10">
      <div class="text-center lg:text-left lg:mr-10">
        <h2 class="text-white text-4xl font-bold pb-8 lg:pb-20">Bog'laning</h2>
  
        <div v-if="loading" class="text-white text-lg">Loading...</div>
        <div v-else>
          <div class="pb-4 text-left pl-7">
            <label class="font-semibold text-slate-500 text-[15px]">Manzil</label>
            <p class="text-white text-xl font-semibold">{{ menuItems.address || 'Not available' }}</p>
          </div>
  
          <div class="flex lg:block items-center lg:pl-7 justify-around">
            <div class="pb-4 text-left">
              <label class="font-semibold text-slate-500 text-[15px]">Elektron Pochta</label>
              <p class="text-white text-xl font-semibold">{{ menuItems.email || 'Not available' }}</p>
            </div>
  
            <div class="pb-4 text-left">
              <label class="font-semibold text-slate-500 text-[15px]">Telefon Raqami</label>
              <p class="text-white text-xl font-semibold">{{ menuItems.phone || 'Not available' }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <div class="w-full lg:w-1/2">
        <div v-if="loading" class="text-white text-lg">Loading map...</div>
        <iframe
          v-else
          :src="menuItems.location"
          frameborder="0"
          class="w-full h-64 lg:h-96 px-5"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const menuItems = ref({});
  const loading = ref(true);
  
  const fetchMenuData = async () => {
    try {
      const response = await fetch("https://qlapi.stesting.uz/api/v1/menu/");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      menuItems.value = data.footer.footer_info;
    } catch (error) {
      console.error("Error fetching menu data:", error);
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchMenuData();
  });
  </script>
  
  <style scoped>
  iframe {
    border: none;
  }
  </style>
  