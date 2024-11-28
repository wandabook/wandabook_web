<script setup lang="ts">
const features = [
  {
    id: 1,
    title: 'howItWorks_d.l1',
    content:
      'howItWorks_d.l1_des',
    icon: 'icon-online.svg',
  },
  {
    id: 2,
    title: 'howItWorks_d.l2',
    content:
      'howItWorks_d.l2_des',
    icon: 'icon-budgeting.svg',
  },
  {
    id: 3,
    title: 'howItWorks_d.l3',
    content:
      'howItWorks_d.l3_des',
    icon: 'icon-onboarding.svg',
  },
  {
    id: 4, title: 'howItWorks_d.l4',
    content:
      'howItWorks_d.l4_des',
    icon: 'icon-api.svg',
  },
]
</script>

<template>
  <section class="w-full hidden md:block relative -z-20">
    <div class="w-full px-6 md:px-20 xl:px-40 py-16 lg:py-24 max-w-[1440px] mx-auto">
      <h3
        class="text-[34px] lg:text-[42px] text-brand-dark-blue text-center lg:text-left leading-tight mb-5 font-heading">
        {{ $t('howItWorks') }}
      </h3>
      <p class="text-md lg:text-body text-brand-grayish-blue font-normal text-center lg:text-left mb-14 lg:mb-20">
        {{ $t('howItWorks_desciption') }}
      </p>
      <div class="grid grid-cols-2 justify-between md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-8">
        <div v-for="feature in features" :key="feature.id"
          class="flex flex-col items-center lg:items-center text-center lg:text-left">
          <img :src="`/images/${feature.icon}`" class="mb-8" alt="online" />
          <h4 class="text-lg md:text-xl xl:text-2xl font-normal text-brand-dark-blue mb-4 lg:mb-6 text-center">
            {{ $t(feature.title) }}
          </h4>
          <p class="text-brand-grayish-blue font-normal text-center hidden md:block">
            {{ $t(feature.content) }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <!--Mobile-->
  <section class="w-full  relative -z-20 md:hidden">
    <div class="w-full px-5  lg:py-24 max-w-[1440px] mx-auto">
      <h3 class="text-xl  text-brand-dark-blue text-left mb-5 font-heading uppercase pt-5">
        {{ $t('howItWorks') }}
      </h3>
      <p class="text-sm lg:text-body text-brand-grayish-blue font-normal text-center mb-10">
        {{ $t('howItWorks_desciption') }}
      </p>
      <div class="grid grid-cols-2 justify-between ">
        <div v-for="feature in features" :key="feature.id"
          class="flex flex-col items-center lg:items-center text-center lg:text-left">
          <div
            class="relative w-10 h-10 rounded-full bg-brand-default flex items-center justify-center text-white text-lg font-bold shadow-lg">
            <span>{{ feature.id }}</span> <!-- Remplacez 42 par le nombre souhaité -->
          </div>
          <h4 class="text-sm mt-2  mb-4 lg:mb-6 text-center w-24">
            {{ $t(feature.title) }}
          </h4>
          <p class="text-brand-grayish-blue font-normal text-center hidden md:block">
            {{ $t(feature.content) }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>