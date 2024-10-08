<template>
    <div>
      <h2>Video Courses</h2>
      <ul class="grid grid-cols-3 gap-10" v-if="videoCourses.length">
        <li class="" v-for="course in videoCourses" :key="course.id">
          <h3>{{ course.title }}</h3>
          <p>{{ course.description }}</p>
        </li>
      </ul>
      <p v-else>Loading courses...</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const videoCourses = ref([]);
  
  const fetchVideoCourses = async () => {
    try {
      const response = await fetch('https://qlapi.stesting.uz/api/v1/videocourse/?page=1');
      const data = await response.json();
      videoCourses.value = data.results; 
    } catch (error) {
      console.error('Error fetching video courses:', error);
    }
  };
  
  onMounted(() => {
    fetchVideoCourses();
  });
  </script>
  