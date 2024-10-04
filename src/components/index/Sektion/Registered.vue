<template>
    <div class="grid lg:grid-cols-3 gap-10 max-w-[900px] mx-5 lg:mx-auto py-20">
      <Counter :end="1100" text="O'quvchilar" />
      <Counter :end="146" text="Topshiriqlar" />
      <Counter :end="1205" text="Maktablar" />


    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  import axios from "axios";
  import Counter from "../Common/Counter.vue";
  
  const data = ref(0); 
  
  const fetchApiData = async () => {
    try {
      const response = await axios.get("https://qlapi.stesting.uz/api/v1/index/");
      const participants = response.data.statistics;
  
      data.value = participants.participants; 
    } catch (error) {
      console.error("Error fetching API data:", error);
    }
  };
  
  onMounted(() => {
    fetchApiData();
  });
  </script>
  