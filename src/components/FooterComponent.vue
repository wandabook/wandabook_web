<script setup lang="ts">
import CtaComponent from './CtaComponent.vue'
import FacebookIcon from './icons/FacebookIcon.vue'
import InstagramIcon from './icons/InstagramIcon.vue'
import LogoIcon from './icons/LogoIcon.vue'
import PinterestIcon from './icons/PinterestIcon.vue'
import TwitterIcon from './icons/TwitterIcon.vue'
import YoutubeIcon from './icons/YoutubeIcon.vue'
</script>

<template>
  <footer class="w-full bg-brand-default">
    <div
      class="flex flex-col lg:flex-row lg:justify-between items-center lg:items-start gap-6 lg:gap-0 w-full px-6 md:px-20 xl:px-40 py-10 max-w-[1440px] mx-auto">
      <div class="flex flex-col lg:flex-row items-center lg:items-start gap-0 lg:gap-20 xl:gap-32 h-full">
        <div class="flex flex-col justify-between items-center lg:items-start gap-8 lg:gap-14">
          <LogoIcon class="text-brand-white" />
          <div class="flex gap-4">
            <router-link to="/">
              <FacebookIcon class="text-brand-white hover:text-brand-lime-green" />
            </router-link>
            <router-link to="/">
              <YoutubeIcon class="text-brand-white hover:text-brand-lime-green" />
            </router-link>
            <router-link to="/">
              <TwitterIcon class="text-brand-white hover:text-brand-lime-green" />
            </router-link>
            <router-link to="/">
              <PinterestIcon class="text-brand-white hover:text-brand-lime-green" />
            </router-link>
            <router-link to="/">
              <InstagramIcon class="text-brand-white hover:text-brand-lime-green" />
            </router-link>
          </div>
        </div>
        <div class="flex flex-col items-center lg:items-start gap-3 mt-8 lg:mt-0">
          <router-link v-for="link in ['home', 'about', 'contact']" :key="link"
            class="capitalize text-brand-light-grayish-blue font-light transition-all duration-200 ease hover:text-brand-lime-green"
            to="/">
            {{ $t(link) }}
          </router-link>
        </div>
        <div class="flex flex-col items-center lg:items-start gap-3 mt-3 lg:mt-0">
          <router-link v-for="link in ['careers', 'support', 'privacy policy']" :key="link"
            class="capitalize text-brand-light-grayish-blue font-light transition-all duration-200 ease hover:text-brand-lime-green"
            to="/">
            {{ $t(link) }}
          </router-link>
        </div>
      </div>
      <div class="flex flex-col justify-between items-center lg:items-end gap-6 lg:gap-7 mt-3 lg:mt-0">
        <CtaComponent />
        <h6 class="text-white font-normal">
          &copy wandabook. All Rights Reserved
        </h6>
      </div>
    </div>
  </footer>
</template>
