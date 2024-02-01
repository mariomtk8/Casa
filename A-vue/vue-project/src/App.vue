<script setup lang="ts">
import Index from './views/Index.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import {RouterView} from 'vue-router'
</script>

<template>
  <Header></Header>
  <RouterView></RouterView>
  <main>
    <Index></Index>
  </main>
  <Footer></Footer>
</template>


