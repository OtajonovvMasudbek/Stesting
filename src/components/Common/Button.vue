<template>
  
  <div class="lg:flex pb-5 pl-5 pt-6 gap-5">
    <button
      @click="selectOption('Xalqaro', 1)"
      :class="getButtonClass('Xalqaro')"
      class="px-6 py-2 text-2xl font-semibold focus:outline-none"
    >
      Xalqaro
    </button>
    <button
      @click="selectOption('Milliy', 2)"
      :class="getButtonClass('Milliy')"
      class="px-6 py-2 text-2xl font-semibold focus:outline-none"
    >
      Milliy
    </button>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';

const selectedOption = ref('Xalqaro');

const selectOption = async (option, area) => {
  selectedOption.value = option;
  try {
    const response = await fetch(`https://qlapi.stesting.uz/api/v1/research/?area=${area}&category__slug=`, {
      method: 'GET',
    });
    const data = await response.json();
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const getButtonClass = (option) => {
  return selectedOption.value === option
    ? 'bg-sky-500 text-white'
    : 'bg-blue-50 text-blue-500 hover:bg-blue-100';
};

onMounted(() => {
  selectOption(selectedOption.value, 1); 
});
</script>

<style scoped>
</style>
