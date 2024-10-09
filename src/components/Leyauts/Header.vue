<template>
  <div class="w-full bg-white z-10 fixed top-0 lg:py-5 py-4">
    <div
      class="flex justify-between items-center item max-w-[1200px] mx-auto gap-5 px-4"
    >
      <router-link to="/" aria-label="Homepage">
        <img
          src="/src/assets/img/svg/logo.svg"
          alt="Stesting"
          class="w-[150px] md:w-32 lg:w-auto max-w-full h-auto"
        />
      </router-link>

      <div class="md:hidden" @click="toggleMenu">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="w-8 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      <div
        :class="`fixed top-0 right-0 h-screen bg-white w-64 transform transition-transform duration-300 ease-in-out md:hidden ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`"
      >
        <div @click="toggleMenu" class="flex justify-end p-5">
          <img class="w-7" src="/src/assets/img/svg/Exit.svg" alt="" />
        </div>

        <div class="flex flex-col gap-5 py-5 px-6">
          <router-link
            v-for="studio in studios"
            :key="studio.id"
            :to="`/${studio.slug}`"
            class="font-semibold hover:text-slate-700 focus:text-sky-800 text-center py-2"
          >
            {{ studio.title }}
          </router-link>
        </div>
        <div class="mt-auto flex justify-center mb-5">
          <always-button buttonText="Kirish" />
        </div>
      </div>

      <div class="hidden md:flex gap-10">
        <router-link
          v-for="studio in studios"
          :key="studio.id"
          :to="`/${studio.slug}`"
          class="font-semibold hover:text-slate-700 focus:text-sky-500 "
        >
          {{ studio.title }}
        </router-link>
      </div>

      <div class="hidden md:flex gap-5">
        <language-selector />
        <always-button buttonText="Kirish" />
      </div>
    </div>
  </div>
</template>

<script setup>
import AlwaysButton from "../index/Common/AlwaysButton.vue";
import LanguageSelector from "../Common/LanguageSelector.vue";
import { onMounted, ref } from "vue";

const studios = ref([]);
const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};

const getStudios = () => {
  fetch("https://qlapi.stesting.uz/api/v1/menu/")
    .then((res) => res.json())
    .then((data) => {
      studios.value = data.header_menu;
    });
};

onMounted(() => {
  getStudios();
});
</script>

<style scoped>
.item {
  margin-left: auto;
  margin-right: auto;
}
</style>
