<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const gotoWandaBook = () => {
  window.location.href = "https://www.libib.com/u/wandabook"
}
</script>

<template>
  <button @click="gotoWandaBook"
    class=" md:block hidden  w-56 py-4 px-8 rounded-full bg-brand-lime-red text-brand-white font-bold capitalize transition-all duration-200 ease hover:opacity-60">
    {{ t('visiteCatalogue') }}
  </button>
  <button @click="gotoWandaBook"
    class=" w-full md:hidden text-sm mx-4 py-2 my-2 mb-3 rounded-full bg-brand-lime-red text-brand-white font-bold capitalize transition-all duration-200 ease hover:opacity-60">
    {{ t('visiteCatalogue') }}
  </button>
</template>
