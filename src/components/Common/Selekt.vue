<template>
  <div class="relative w-64 mx-auto">
    <button
      @click="toggleDropdown"
      class="w-full flex justify-between items-center border border-spacing-1 hover:border-blue-500 px-4 py-2 bg-white text-lg font-medium text-gray-700 focus:outline-none focus:ring-2"
    >
      <span>{{ selectedOption }}</span>
      <i
        :class="
          isOpen
            ? 'ri-arrow-up-s-line transform rotate-180 transition-transform duration-300'
            : 'ri-arrow-up-s-line transform transition-transform duration-300'
        "
      ></i>
    </button>

    <transition name="option">
      <div
        v-show="isOpen"
        class="absolute mt-2 w-full bg-white rounded-lg shadow-lg z-10"
      >
        <a
          v-for="option in options"
          :key="option.id"
          @click="selectOption(option)"
          href="#"
          class="block text-le px-4 py-2 text-gray-700 hover:bg-gray-100"
        >
          {{ option.title }}
        </a>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";


const emit = defineEmits(["optionSelected"]);

const isOpen = ref(false);
const selectedOption = ref("Tanlang");
const options = ref([]);

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectOption(option) {
  selectedOption.value = option.title;
  isOpen.value = false;
  emit("optionSelected", option.slug);
}

async function fetchOptions() {
  try {
    const response = await axios.get(
      "https://qlapi.stesting.uz/api/v1/research/research-category"
    );
    options.value = response.data;
  } catch (error) {
    console.error("Error fetching options:", error);
  }
}

onMounted(() => {
  fetchOptions();
});
</script>
