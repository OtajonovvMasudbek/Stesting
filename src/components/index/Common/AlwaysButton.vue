<template>
  <div>
    <button
      class="bg-blue-600 hover:bg-blue-700 py-3 px-20 text-white font-semibold transform hover:scale-95 transition duration-200 ease-in-out"
    >
      {{ buttonText }}
    </button>
  </div>
</template>
  
  <script setup>
import { defineProps } from "vue";

const props = defineProps({
  buttonText: {
    type: String,
    required: true,
  },
});
</script>
  