<script setup>
const WHeader = defineAsyncComponent(() => import('./components/WHeader.vue'));
const TFooter = defineAsyncComponent(() => import('./components/TFooter.vue'))
import Aos from "aos";
import { defineAsyncComponent } from 'vue';
Aos.init({ once: true });
</script>

<template>
  <WHeader>
  </WHeader>
  <router-view></router-view>
  <TFooter> </TFooter>

</template>

<style scoped></style>
