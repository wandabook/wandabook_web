<script setup lang="ts">
import { onMounted, ref } from 'vue'
import MobileMenuComponent from './MobileMenuComponent.vue'
import LanguageButton from './LanguageButton.vue';
import RenewSubscriptionForm from '@/components/subscription/RenewSubscriptionForm.vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const showMenu = ref(false)
const showRenew = ref(false);
const links = [
  { label: "home", link: "/" },
  { label: "about_us", link: "/about_us" },
  { label: "contact", link: "/contact_us" },
];
const renew = () => {
  showRenew.value = true;
}
const close = () => {
  showRenew.value = false
  location.href = location.href.replace('ac=renew', "");
}

const init = () => {
  if (location.href.includes('ac=renew')) {
    renew();
  }
}
onMounted(() => {
  init();
})
init();
</script>

<template>
  <MobileMenuComponent :showMenu="showMenu" @close-menu="() => (showMenu = false)" />
  <header class="w-full h-16 lg:h-[84px] fixed z-50 bg-brand-default">
    <div class="flex justify-between items-center w-full max-w-[1440px]  h-full px-2 md:px-20 xl:px-10">
      <button v-if="showMenu" class="md:hidden" @click="() => (showMenu = false)">
        <img src="/images/icon-close.svg" alt="close" class="fill-white w-4" />
      </button>
      <button v-else class="md:hidden" @click="() => (showMenu = true)">
        <img src="/images/icon-hamburger.svg" alt="close" class="fill-whitew-52" />
      </button>
      <router-link to="/">
        <img src="@/assets/images/logo18.png" alt="logo" class="md:w-52 w-52" />
      </router-link>
      <div class="flex gap-x-4">
        <nav class="hidden md:flex items-center h-full gap-7 ">
          <router-link v-for="link in links" :key="link.label" :to="link.link"
            class=" uppercase hover:text-gray-50 font-heading flex items-center h-full text-md  transition-all duration-200 ease border-b-4 border-b-transparent text-white">{{
              t(link.label) }}</router-link>
        </nav>
      </div>
      <div class="flex gap-x-4">
        <div class="gap-x-4 flex uppercase justify-center align-middle self-center  ">
          <!--<a class="uppercase md:text-sm text-xs font-heading hover:text-gray-50 text-white  md:block"
          href="https://www.libib.com/login">{{
            t('connexion') }}</a>-->
          <a class="uppercase hover:text-gray-50 font-heading text-wrap flex items-center h-full text-xs md:text-md  transition-all duration-200 ease border-b-4 border-b-transparent text-white md:block cursor-pointer"
            href="#pricing">{{
              t('signUp')
            }}</a>
          <a class="uppercase hover:text-gray-50 font-heading flex items-center h-full text-xs md:text-md  transition-all duration-200 ease border-b-4 border-b-transparent text-white md:block cursor-pointer"
            @click="renew">{{
              t('renew_subscription') }}</a>
        </div>
        <template v-if="showRenew">
          <RenewSubscriptionForm @close="close" />
        </template>

        <LanguageButton class="" />
      </div>
    </div>

  </header>
</template>
