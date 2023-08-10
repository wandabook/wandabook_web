<script setup lang="ts">
defineProps(['showMenu'])

defineEmits(['closeMenu'])
</script>

<template>
  <div
    v-if="showMenu"
    class="fixed top-16 left-0 w-full h-screen z-50 bg-[#0000006c] drop-shadow-md md:hidden"
    @click.self="$emit('closeMenu')"
  >
    <div class="w-full p-6">
      <div class="flex flex-col items-center gap-6 p-8 bg-brand-white rounded">
        <router-link
          to="/"
          class="text-body text-brand-dark-blue font-normal hover:text-brand-lime-green"
          @click="$emit('closeMenu')"
          >Home</router-link
        >
        <router-link
          to="/"
          class="text-body text-brand-dark-blue font-normal hover:text-brand-lime-green"
          @click="$emit('closeMenu')"
          >About</router-link
        >
        <router-link
          to="/"
          class="text-body text-brand-dark-blue font-normal hover:text-brand-lime-green"
          @click="$emit('closeMenu')"
          >Contact</router-link
        >
        <router-link
          to="/"
          class="text-body text-brand-dark-blue font-normal hover:text-brand-lime-green"
          @click="$emit('closeMenu')"
          >Blog</router-link
        >
        <router-link
          to="/"
          class="text-body text-brand-dark-blue font-normal hover:text-brand-lime-green"
          @click="$emit('closeMenu')"
          >Careers</router-link
        >
      </div>
    </div>
  </div>
</template>
