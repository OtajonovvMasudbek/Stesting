<template>
  <div class="bg-white max-w-[1000px] mx-auto w-full">
    <div class="bg-slate-100 max-w-[994px] mt-10 shadow-lg">
      <h2 class="text-4xl bottom-5 pl-10 pb-2 pt-10 font-bold text-slate-900">
        Tadqiqotlar
      </h2>
      <div class="flex justify-between items-center">
        <div>
          <Button />
        </div>

        <div class="text-right pr-5">
          <Selekt @optionSelected="getStudios" />
        </div>
      </div>
    </div>

    <div class="grid grid-cols-4 gap-5 mt-10">
      <Card v-for="item in studios.list" :key="item.id" :data="item" />
    </div>
  </div>
</template>

<script setup>
import Button from "../Common/Button.vue";
import Selekt from "../Common/Selekt.vue";
import Card from "../Common/Card.vue";

const router = useRoute();

import { useRoute } from "vue-router";

import { onMounted, ref, watch } from "vue";

const studios = ref({
  list: [],
  loading: true,
});

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

watch(
  () => studios.value.slug,
  (newSlug) => {
    router.push({ query: { studios: newSlug } });
  }
);

onMounted(() => {
  getStudios();
});
</script>
