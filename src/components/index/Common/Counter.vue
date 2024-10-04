<template>
  <div class="border hover:shadow-lg border-spacing-[1px]">
    <h1 class="text-[55px] text-center text-sky-500 pt-6 font-bold">
      {{ count }}
    </h1>
    <p class="text-[20px] font-bold text-center pb-4 pt-10">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';

const props = defineProps({
  start: {
    type: Number,
    default: 0
  },
  end: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    default: 50 
  },
  text: {
    type: String,
    required: true
  }
});

const count = ref(props.start);

const startCounter = () => {
  const totalSteps = props.end - props.start; 
  const stepDuration = props.duration / totalSteps; 

  let current = props.start;

  const interval = setInterval(() => {
    if (current < props.end) {
      current++;
      count.value = current;
    }

    if (current >= props.end) {
      clearInterval(interval);
    }
  }, stepDuration);
};

onMounted(() => {
  startCounter();
});

watch(() => props.end, (newVal) => {
  count.value = props.start; 
  startCounter(); 
});
</script>
