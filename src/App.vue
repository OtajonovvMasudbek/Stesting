<template>
  <div>
    <router-view/>
    <Header/>
    <Studies/>
  </div>
</template>


<script setup>

import Header from './components/Leyauts/Header.vue'
import Studies from './components/Pages/Studies.vue';
</script>