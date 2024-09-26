<template>
  <div class="flex justify-center items-center top-0 bg-white z-10 fixed py-5 w-full mx-auto  gap-5">
    <router-link to="/" aria-label="Homepage">
      <img src="file:///C:/Users/hp/Desktop/Stesting/img/Stesting.svg" alt="Stesting">
    </router-link>

    <div class="flex gap-10">
      <router-link 
        v-for="studio in studios" 
        :key="studio.id" 
        :to="`/${studio.slug}`"
        class="font-semibold hover:text-slate-700 "
      >
        <p>{{ studio.title }}</p>
      </router-link>
    </div>
    
    <language-selector/>
    <always-button buttonText="Kirish" />
  </div>
</template>

<script setup>
import AlwaysButton from '../Common/AlwaysButton.vue'
import LanguageSelector from '../Common/LanguageSelector.vue';
import { onMounted, ref } from 'vue';

const studios = ref([]);

const getStudios = () => {
  fetch('https://qlapi.stesting.uz/api/v1/menu/')
    .then((res) => res.json())
    .then((data) => {
      studios.value = data.header_menu;
    });
};

onMounted(() => {
  getStudios();
});
</script>
