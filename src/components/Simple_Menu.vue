<template>
  <div class="relative overflow-auto" style="height:60vh; ">
    <div class="flex flex-row  " v-for="(it, i ) in 11">
      <div
        class="flex w-full justify-between bg-gray-50 py-2 px-2 cursor-pointer hover:opacity-50 hover:text-orange-400"
        :class="i % 2 === 0 ? 'bg-gray-500 bg-opacity-30' : ''">
        <span> Fiction </span>
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
          <path d="M504-480 320-664l56-56 240 240-240 240-56-56 184-184Z" />
        </svg>
      </div>

      <div v-show="active1" class="relative start-1">
        <tr>
          <td>Roman</td>
        </tr>
        <tr>
          <td>Science-fiction</td>
        </tr>
        <tr>
          <td>Fantaisy</td>
        </tr>
        <tr>
          <td>Thriller</td>
        </tr>
        <tr>
          <td>Romance</td>
        </tr>
        <tr>
          <td>Littérature contemporaine</td>
        </tr>
      </div>
    </div>

  </div>


</template>

<script setup>
import { ref, onMounted } from "vue";

const active1 = ref(false);


</script>

<style scoped></style>