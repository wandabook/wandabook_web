<script setup lang="ts">
const features = [
  {
    id: 1,
    title: 'Create account',
    content:
      'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.',
    icon: 'icon-online.svg',
  },
  {
    id: 2,
    title: 'Visite catalogue',
    content:
      "See exactly where you money goes each month. Receive notifications when you're close to hitting your limits.",
    icon: 'icon-budgeting.svg',
  },
  {
    id: 3,
    title: 'hold books',
    content:
      "We don't do branches. Open your account in minutes online and start taking control of your finances right away.",
    icon: 'icon-onboarding.svg',
  },
  {
    id: 4,
    title: 'Checkout book',
    content:
      'Manage your savings, investments, pension, and more much from one account. Tracking your money has never been easier.',
    icon: 'icon-api.svg',
  },
]
</script>

<template>
  <section class="w-full  relative -z-20">
    <div class="w-full px-6 md:px-20 xl:px-40 py-16 lg:py-24 max-w-[1440px] mx-auto">
      <h3
        class="text-[34px] lg:text-[42px] text-brand-dark-blue text-center lg:text-left leading-tight mb-5 font-heading">
        How it works?
      </h3>
      <p class="text-md lg:text-body text-brand-grayish-blue font-normal text-center lg:text-left mb-14 lg:mb-20">
        We leverage Open Banking to turn your account into your financial hub.
        <br />
        Control your finances like never before.
      </p>
      <div class="grid grid-cols-2 justify-between md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <div v-for="feature in features" :key="feature.id"
          class="flex flex-col items-center lg:items-center text-center lg:text-left">
          <img :src="`/images/${feature.icon}`" class="mb-8" alt="online" />
          <h4 class="text-xl xl:text-2xl font-normal text-brand-dark-blue mb-4 lg:mb-6 text-center">
            {{ feature.title }}
          </h4>
          <p class="text-brand-grayish-blue font-normal text-center">
            {{ feature.content }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>