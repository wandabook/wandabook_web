<script setup lang="ts">
const gotoWandaBook = () => {
  window.location.href = "https://www.libib.com/u/wandabook"
}
</script>

<template>
  <button @click="gotoWandaBook"
    class=" md:block hidden  w-56 py-4 px-8 rounded-full bg-brand-lime-red text-brand-white font-normal capitalize transition-all duration-200 ease hover:opacity-60">
    {{ $t('visiteCatalogue') }}
  </button>
  <button @click="gotoWandaBook"
    class=" w-full md:hidden text-sm mx-4 py-2 my-2 rounded-full bg-brand-lime-red text-brand-white font-normal capitalize transition-all duration-200 ease hover:opacity-60">
    {{ $t('visiteCatalogue') }}
  </button>
</template>
