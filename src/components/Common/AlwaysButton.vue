<template>
    <div>
      <button class="bg-blue-600 hover:bg-blue-700 py-2 px-10 text-white font-semibold">
        {{ buttonText }}
      </button>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    buttonText: {
      type: String,
      required: true,
    },
  });
  </script>
  