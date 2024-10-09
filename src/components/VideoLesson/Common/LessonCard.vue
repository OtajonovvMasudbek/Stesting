<template>
  <div>
    <ul
      class="grid grid-cols-2 md:grid-cols-2 mx-auto max-w-[1100px] lg:grid-cols-3 gap-10"
      v-if="videoCourses.length"
    >
      <li
        class="bg-white my-7 flex max-w-[300px] flex-col items-center justify-between shadow-md rounded-lg overflow-hidden transform transition-transform hover:shadow-lg cursor-pointer"
        v-for="course in videoCourses"
        :key="course.id"
      >
        <div class="flex-grow">
          <img
            class="w-full bg-cover"
            src="/src/assets/img/png/img.jpg"
            alt="Course Image"
          />
        </div>
        <div class="p-4 text-left">
          <h3
            class="lg:text-lg text-[10px] text-left font-semibold line-clamp-2"
          >
            {{ course.title }}
          </h3>
          <p class="text-gray-600">{{ course.description }}</p>
        </div>
        <div class="flex items-center gap-20 pb-5 ">
          <div class="flex items-center gap-1">
            <i class="text-lg ri-eye-line"></i>
            <p>
              {{ course.views }}
            </p>
          </div>
          <div class="flex items-center gap-1">
            <i class="ri-calendar-2-line"></i>
            <p>
              {{ course.date }}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>Loading courses...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const videoCourses = ref([]);

const fetchVideoCourses = async () => {
  try {
    const response = await fetch(
      "https://qlapi.stesting.uz/api/v1/videocourse/?page=1"
    );
    const data = await response.json();
    videoCourses.value = data.results;
  } catch (error) {
    console.error("Error fetching video courses:", error);
  }
};

onMounted(() => {
  fetchVideoCourses();
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
