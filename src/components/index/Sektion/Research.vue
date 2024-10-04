<template>
  <div class="px-5 sm:px-10">
    <div
      class="flex flex-col lg:flex-row items-center justify-between max-w-[1000px] mx-auto"
    >
      <div class="relative mb-10 lg:mb-0 text-slate-900 p-5 pt-5">
        <h2 class="text-3xl md:text-3xl lg:text-4xl font-bold">
          <span class="inline lg:block">So'ngi</span>
          <span class="inline lg:block pl-3">Tadqiqotlar</span>
        </h2>

        <img
          class="mt-5 hidden lg:block lg:max-w-[150px] md:max-w-[200px]"
          src="https://stesting.uz/wrap3.png"
          alt="wrap3"
        />
      </div>
      <div class="flex justify-center lg:justify-end">
        <AlwaysButton buttonText="Barcha Tadqiqotlar" />
      </div>
    </div>

    <!-- Card Grid Section -->
    <div
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 py-10 md:py-20 mx-auto max-w-full px-5"
    >
      <Card
        v-for="item in studios.list"
        :key="item.id"
        :data="item"
        @cardClicked="handleCardClick"
      />
    </div>
  </div>
</template>

<script setup>
import AlwaysButton from "../Common/AlwaysButton.vue";
import Card from "@/components/Common/Card.vue";
import { onMounted, ref } from "vue";

const studios = ref({
  list: [],
  loading: true,
});

const onOptionSelected = (slug) => {
  getStudios(slug);
};

const getStudios = (slug = "") => {
  fetch(
    `https://qlapi.stesting.uz/api/v1/research/?page=1&category__slug=${slug}`
  )
    .then((res) => res.json())
    .then((data) => {
      studios.value.list = data.results;
      studios.value.loading = false;
    });
};

const handleCardClick = (id) => {
  const apiUrl = `https://qlapi.stesting.uz/api/v1/research/${id}/`;
  fetch(apiUrl, { method: "POST" })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
};

onMounted(() => {
  getStudios();
});
</script>
