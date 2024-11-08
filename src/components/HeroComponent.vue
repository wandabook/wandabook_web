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
    class="relative w-full pb-30 pt-30 lg:h-[80vh] px-6 md:px-20 lg:px-0 flex flex-col-reverse lg:flex-row lg:justify-between items-center overflow-x-clip">
    <div class="absolute top-0 bottom-0 right-0 left-0 bg-brand-lighter-gray -z-30"></div>

    <div class="lg:ml-20 xl:ml-40 2xl:ml-52 lg:w-4/12">
      <h2
        class=" xl:text-6xl text-brand-dark-blue leading-[3rem] xl:leading-[4.5rem] text-center lg:text-left mb-6 text-2xl">
        {{ $t('title_1') }} <br class="hidden lg:block" />
        {{ $t('title_2') }}
      </h2>
      <p class="text-brand-grayish-blue text-md lg:text-body font-normal text-center lg:text-left mb-8">
        {{ $t('title_description') }}
      </p>
      <div class="flex justify-center lg:justify-start">
        <CtaComponent />
      </div>
    </div>
    <img src="@/assets/default/lib.png"
      class="lg:w-7/12 -z-10 lg:-mr-32 relative top-[30px] md:top-[-8px] lg:top-0 lg:h-[140%] xl:h-auto lg:right-[30px] xl:right-0"
      alt="mockups" />
  </section>
</template>
