<template>
  <div class="relative overflow-auto" style="height:60vh; ">
    <div class="flex flex-row relative " v-for="(it, i ) in CATEGORIES">
      <div
        class="flex w-full justify-between bg-gray-50 py-2 px-2 cursor-pointer hover:opacity-50 hover:text-orange-400"
        :class="i % 2 === 0 ? 'bg-gray-500 bg-opacity-30' : ''">
        <span> {{ it.name }} </span>

        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368"
          v-if="it.subcategories && it.subcategories.length > 0">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>


    </div>
  </div>


</template>

<script setup>
import { ref, onMounted } from "vue";
import { CATEGORIES } from "./products/categories";
const active1 = ref(true);


</script>

<style scoped></style>