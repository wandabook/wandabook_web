<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CtaComponent from './CtaComponent.vue'

const isMobile = ref(false)

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

const onResize = () => {
  if (window.screen.width <= 425) {
    isMobile.value = true
  }
}
</script>

<template>
  <section
    class="relative w-full h-[80vh] pb-20 lg:h-[66vh] px-6 md:px-20 lg:px-0 flex flex-col-reverse lg:flex-row lg:justify-between items-center overflow-x-clip"
  >
    <div
      class="absolute top-0 bottom-0 right-0 left-0 bg-brand-lighter-gray -z-30"
    ></div>
    <img
      v-if="isMobile"
      src="/images/bg-intro-mobile.svg"
      class="absolute -top-16 -z-20 w-full"
      alt="mobile-intro"
    />
    <img
      v-else
      src="/images/bg-intro-desktop.svg"
      class="absolute md:h-full lg:h-[130%] xl:h-[155%] top-[-40%] right-[-29%] -z-20"
      alt="bg-intro"
    />
    <div class="lg:ml-20 xl:ml-40 2xl:ml-96">
      <h2
        class="text-[40px] xl:text-6xl text-brand-dark-blue leading-[3rem] xl:leading-[4.5rem] text-center lg:text-left mb-6"
      >
        Next generation <br class="hidden lg:block" />
        digital banking
      </h2>
      <p
        class="text-brand-grayish-blue text-md lg:text-body font-normal text-center lg:text-left mb-8"
      >
        Take your financial life online. Your Easybank account
        <br class="hidden lg:block" />
        will be a one-stop-shop for spending, saving,
        <br class="hidden lg:block" />
        budgeting, investing, and much more.
      </p>
      <div class="flex justify-center lg:justify-start">
        <CtaComponent />
      </div>
    </div>
    <img
      src="/images/image-mockups.png"
      class="-z-10 lg:-mr-32 relative top-[-62px] md:top-[-8px] lg:top-0 lg:h-[140%] xl:h-auto lg:right-[30px] xl:right-0"
      alt="mockups"
    />
  </section>
</template>
