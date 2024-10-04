<template>
  <div class="relative inline-block text-left pt-[4px]">
    <div>
      <button
        @click="toggleDropdown"
        type="button"
        class="inline-flex justify-center w-full rounded-md px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:text-blue-600 transform inset-4 focus:outline-none"
        aria-expanded="true"
        aria-haspopup="true"
      >
        {{ selectedLanguage }}
        <i :class="['indicator w-10 ri-arrow-up-s-line', { 'rotate-180': isOpen }]"></i>
      </button>
    </div>

    <div
      v-if="isOpen"
      class="origin-top-center absolute right-0 mt-2 w-28 bg-white ring-opacity-5"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabindex="-1"
    >
      <div class="py-1" role="none">
        <a
          v-for="(language, index) in languages"
          :key="index"
          href="#"
          @click.prevent="selectLanguage(language)"
          class="block px-4 py-2 text-sm text-gray-700 hover:text-blue-600 hover:bg-gray-100"
          role="menuitem"
          tabindex="-1"
        >
          {{ language }}
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const selectedLanguage = ref('Oʻzbekcha');
const languages = ref(['Oʻzbekcha', 'Русский', 'English']);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectLanguage(language) {
  selectedLanguage.value = language;
  isOpen.value = false;
}
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
  transition: transform 0.3s ease-in-out;
}
</style>
