<script setup lang="ts">
import { ref } from 'vue'
import CtaComponent from './CtaComponent.vue'
import MobileMenuComponent from './MobileMenuComponent.vue'

const showMenu = ref(false)

const links = ['home', 'about', 'contact', 'blog',]
</script>

<template>
  <MobileMenuComponent :showMenu="showMenu" @close-menu="() => (showMenu = false)" />
  <header class="w-full h-16 lg:h-[84px] bg-brand-white">
    <div class="flex justify-between items-center w-full max-w-[1440px] h-full px-6 md:px-20 xl:px-40 mx-auto">
      <router-link to="/">
        <img src="@/assets/images/logo16.png" alt="logo" class="w-52" />
      </router-link>
      <nav class="hidden md:flex items-center h-full gap-8">
        <router-link v-for="link in links" :key="link" to="/"
          class="flex items-center h-full capitalize text-md font-normal text-brand-grayish-blue transition-all duration-200 ease border-b-4 border-b-transparent hover:border-b-brand-lime-red hover:text-brand-dark-blue">{{
            link }}</router-link>
      </nav>
      <div data-v-a59126d0="" class="gap-x-4 lg:flex uppercase justify-center align-middle self-center hidden ">
        <a data-v-a59126d0="" class="uppercase text-sm font-heading" href="https://www.libib.com/login">Connexion</a><a
          data-v-a59126d0="" class="uppercase text-sm font-heading" href="#pricing">S'inscrire</a>
      </div>
      <button v-if="showMenu" class="md:hidden" @click="() => (showMenu = false)">
        <img src="/images/icon-close.svg" alt="close" />
      </button>

      <button v-else class="md:hidden" @click="() => (showMenu = true)">
        <img src="/images/icon-hamburger.svg" alt="close" />
      </button>
    </div>
  </header>
</template>
