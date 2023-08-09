<script setup lang="ts">
const articles = [
  {
    id: 1,
    title: 'Receive money in any currency with no fees',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: 'image-currency.jpg',
  },
  {
    id: 2,
    title: 'Treat yourself without worrying about money',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: 'image-restaurant.jpg',
  },
  {
    id: 3,
    title: 'Take your Easybank card wherever you go',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: 'image-plane.jpg',
  },
  {
    id: 4,
    title: 'Our invite-only Beta accounts are live now!',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: 'image-confetti.jpg',
  },
]
</script>

<template>
  <section class="w-full bg-brand-lighter-gray">
    <div class="w-full px-6 md:px-20 xl:px-40 py-24 max-w-[1440px] mx-auto">
      <h3
        class="text-[32px] lg:text-[42px] text-brand-dark-blue font-normal capitalize text-center lg:text-left mb-8 lg:mb-12"
      >
        latest articles
      </h3>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
      >
        <article
          v-for="article in articles"
          :key="article.id"
          class="w-full h-auto rounded-md bg-brand-white overflow-hidden"
        >
          <img
            :src="`/images/${article.cover}`"
            class="w-full h-[200px]"
            alt="cover"
          />
          <div class="p-6">
            <h6 class="text-[11px] text-brand-grayish-blue mb-2">
              By {{ article.author }}
            </h6>
            <h4
              class="text-body text-brand-dark-blue leading-snug font-normal mb-2 transition-all duration-200 ease hover:text-brand-lime-green"
            >
              <router-link to="/">
                {{ article.title }}
              </router-link>
            </h4>
            <p class="text-brand-grayish-blue text-sm">{{ article.content }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
