<script setup lang="ts">
import CtaComponent from './CtaComponent.vue'

const links = ['home', 'about', 'contact', 'blog', 'careers']
</script>

<template>
  <header class="w-full h-16 lg:h-[84px] bg-brand-white">
    <div
      class="flex justify-between items-center w-full max-w-[1440px] h-full px-6 md:px-20 xl:px-40 mx-auto"
    >
      <router-link to="/">
        <img src="/images/logo.svg" alt="logo" />
      </router-link>
      <nav class="hidden md:flex items-center h-full gap-8">
        <router-link
          v-for="link in links"
          :key="link"
          to="/"
          class="flex items-center h-full capitalize text-md font-normal text-brand-grayish-blue transition-all duration-200 ease border-b-4 border-b-transparent hover:border-b-brand-lime-green hover:text-brand-dark-blue"
          >{{ link }}</router-link
        >
      </nav>
      <CtaComponent class="hidden lg:block" />
      <button class="md:hidden">
        <img src="/images/icon-hamburger.svg" alt="" />
      </button>
    </div>
  </header>
</template>
