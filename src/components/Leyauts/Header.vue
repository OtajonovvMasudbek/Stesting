<template>
    <div>
      <router-link 
        v-for="studio in studios.list"
        :key="studio.order" 
        :to="studio.slug"
      >
    
        <div>
          <img :src="studio.logo_url" :alt="studio.title">
        </div>

      </router-link>
    </div>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  
  const studios = ref({
    list: [],
  });
  
  const getStudios = () => {
    fetch('https://qlapi.stesting.uz/api/v1/menu/')
      .then((res) => res.json())
      .then((data) => {
        studios.list = data.header_menu;
      });
  };
  
  onMounted(() => {
    getStudios();
  });
  </script>
  