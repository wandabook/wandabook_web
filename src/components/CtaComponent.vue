<script setup lang="ts">
const gotoWandaBook = () => {
  window.location.href = "https://www.libib.com/u/wandabook"
}
</script>

<template>
  <button @click="gotoWandaBook"
    class="h-11 px-8 rounded-full bg-brand-lime-red text-brand-white font-normal capitalize transition-all duration-200 ease hover:opacity-60">
    Visite Catalogue
  </button>
</template>
