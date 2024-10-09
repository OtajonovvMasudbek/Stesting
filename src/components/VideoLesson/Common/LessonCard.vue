<template>
  <div>
    <ul
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      v-if="videoCourses.length"
    >
      <li
        class="my-7 flex max-w-[300px] flex-col items-center justify-between shadow-md rounded-lg overflow-hidden transform transition-transform hover:shadow-lg cursor-pointer"
        v-for="course in videoCourses"
        :key="course.id"
        @click="openModal(course.video)"
      >
        <div class="flex-grow relative">
          <p
            class="font-semibold text-white bg-slate-300 text-center py-1 max-w-14 translate-x-4 translate-y-4"
          >
            {{ course.direction }}
          </p>
          <div
            class="absolute inset-0 bg-gradient-to-t from-white to-gray-900 opacity-30"
          ></div>

          <i
            class="absolute text-2xl bg-slate-300 px-2 py-1 rounded-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white ri-play-large-fill"
          ></i>

          <img
            class="w-full bg-cover"
            src="/src/assets/img/png/img.jpg"
            alt="Course Image"
          />
        </div>

        <div class="p-4 text-left">
          <h3 class="text-lg text-left font-semibold line-clamp-2">
            {{ course.title }}
          </h3>
          <p class="text-gray-600">{{ course.description }}</p>
        </div>
        <div class="flex items-center gap-24 pb-5">
          <div class="flex items-center gap-1">
            <i class="text-lg text-slate-600 ri-eye-line"></i>
            <p class="text-sm">
              {{ course.views }}
            </p>
          </div>
          <div class="flex items-center gap-1">
            <i class="text-lg text-slate-600 ri-calendar-2-line"></i>
            <p class="text-sm">
              {{ course.date }}
            </p>
          </div>
        </div>
      </li>
    </ul>
    <p v-else>Loading courses...</p>

    <div class="flex justify-center items-center gap-4 my-4">
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="px-1 py-1 border border-spacing-[1px] text-slate-900"
      >
      <i class=" text-xl ri-arrow-left-s-line"></i>
      </button>
      <span>Page {{ currentPage }}</span>
      <button
        @click="changePage(currentPage + 1)"
        :disabled="!hasMore"
        class="px-1 py-1 border border-spacing-[1px] text-slate-900"
      >
      <i class=" text-xl ri-arrow-right-s-line"></i>

      </button>
    </div>

    <div
      v-if="isModalOpen"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
    >
      <div class=" p-4 rounded-lg shadow-lg max-w-2xl w-full relative">
        <button
          @click="closeModal"
          class="absolute top-10 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white hover:text-gray-300 transition-all"
        >
          &times;
        </button>

        <iframe
          v-if="currentVideoLink"
          :src="currentVideoLink"
          class="w-full h-64 md:h-96"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const videoCourses = ref([]);
const isModalOpen = ref(false);
const currentVideoLink = ref("");
const currentPage = ref(1);
const hasMore = ref(true);

const fetchVideoCourses = async (page = 1) => {
  try {
    const response = await fetch(
      `https://qlapi.stesting.uz/api/v1/videocourse/?page=${page}`
    );
    const data = await response.json();
    videoCourses.value = data.results;

    hasMore.value = data.next !== null; 
  } catch (error) {
    console.error("Error fetching video courses:", error);
  }
};

const openModal = (videoLink) => {
  currentVideoLink.value = `https://www.youtube.com/embed/${extractVideoId(videoLink)}?autoplay=1`;
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
  currentVideoLink.value = "";
};

const extractVideoId = (url) => {
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const changePage = (page) => {
  if (page < 1) return;
  currentPage.value = page;
  fetchVideoCourses(currentPage.value);
};

onMounted(() => {
  fetchVideoCourses(currentPage.value);
});
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.modal-open {
  overflow: hidden;
}
</style>
