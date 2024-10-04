<template>
    <div>
      <div
        class="container max-w-[900px] flex items-center  justify-between mx-auto py-10 shadow-lg p-10 my-10"
      >
        <div>
          <h1
            class="py-2 text-slate-900 border-b-[1px] mr-1 hover:text-slate-500 cursor-pointer text-xl font-semibold"
            v-for="(instruction, index) in instructions"
            :key="index"
            @click="selectInstruction(instruction)"
          >
            {{ instruction.title }}
          </h1>
        </div>
  
        <div v-if="selectedInstruction">
          <iframe
            class="mt-5 w-[600px] h-[400px]"
            :src="getVideoUrl(selectedInstruction.video)"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from "vue";
  
  const instructions = ref([]);
  const selectedInstruction = ref(null);
  
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://qlapi.stesting.uz/api/v1/instruction/"
      );
      const data = await response.json();
      instructions.value = data;
    } catch (error) {
      console.error("Error fetching data:", error);
      instructions.value = [{ title: "Failed to load instructions." }];
    }
  };
  
  const selectInstruction = (instruction) => {
    if (instruction.video) {
      selectedInstruction.value = instruction;
    } else {
      selectedInstruction.value = null;
      console.warn("Video URL is missing for this instruction");
    }
  };
  
  const getVideoUrl = (videoUrl) => {
    if (videoUrl.includes("watch?v=")) {
      return videoUrl.replace("watch?v=", "embed/");
    }
    return videoUrl;
  };
  
  onMounted(() => {
    fetchData();
  });
  </script>
  