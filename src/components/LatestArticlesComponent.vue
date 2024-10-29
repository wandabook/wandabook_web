<script setup lang="ts">
import comics from "@/assets/categories/comics.jpg";
import harlequin from "@/assets/categories/harlequin.jpg"
import hot_romance from "@/assets/categories/hot_romance.jpeg"
import romance_thriller from "@/assets/categories/romance_thriller.jpg"
import marvel from "@/assets/categories/marvel.webp"
import manga from "@/assets/categories/manga.jpg"

const articles = [
  {
    id: 1,
    title: 'harlequin',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: manga,
  },
  {
    id: 2,
    title: 'hot romance + 18 ans/years',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: hot_romance,
  },
  {
    id: 3,
    title: 'romans thriller',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: romance_thriller,
  },
  {
    id: 4,
    title: 'marvel',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: marvel,
  },
  {
    id: 4,
    title: 'comics',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: comics,
  },

  {
    id: 4,
    title: 'mangas',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: manga,
  },
  {
    id: 4,
    title: 'japan heroes',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: manga,
  },
  {
    id: 4,
    title: 'classic',
    author: 'Claire Robinson',
    content:
      "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
    cover: manga,
  },
  /*{
  id: 4,
  title: 'litterature',
  author: 'Claire Robinson',
  content:
    "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  cover: 'image-confetti.jpg',
},
{
  id: 4,
  title: 'prix nobel literature',
  author: 'Claire Robinson',
  content:
    "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  cover: 'image-confetti.jpg',
},
{
  id: 4,
  title: 'jeunesse/youth',
  author: 'Claire Robinson',
  content:
    "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  cover: 'image-confetti.jpg',
},
{
  id: 4,
  title: 'adventures',
  author: 'Claire Robinson',
  content:
    "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  cover: 'image-confetti.jpg',
},
{
  id: 4,
  title: 'jeunesse/youth academic',
  author: 'Claire Robinson',
  content:
    "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  cover: 'image-confetti.jpg',
},
{
  id: 4,
  title: 'enfants/kids 1-7 ans/years',
  author: 'Claire Robinson',
  content:
    "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  cover: 'image-confetti.jpg',
},
{
  id: 4,
  title: '7-14 ans/years',
  author: 'Claire Robinson',
  content:
    "The world is getting smaller and we're becoming more mobile. So why should you be forced to only receive money in a single ...",
  cover: 'image-confetti.jpg',
},*/
]
</script>

<template>
  <section class="w-full bg-brand-lighter-gray">
    <div class="w-full px-6 md:px-20 xl:px-40 py-24 max-w-[1440px] mx-auto">
      <h3
        class="text-[32px] lg:text-[42px] text-brand-dark-blue font-normal capitalize text-center lg:text-left mb-8 lg:mb-12 font-heading">
        Categories
      </h3>
      <div class="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        <article v-for="article in articles" :key="article.id"
          class="w-full h-auto rounded-md bg-brand-white overflow-hidden">
          <img :src="article.cover" class="w-full h-[100px] md:h-[200px] object-cover" alt="cover" />
          <div class="p-2 md:p-6">
            <h4
              class="text-sm text-body text-brand-dark-blue leading-snug font-heading mb-2 transition-all duration-200 ease hover:text-red-600 uppercase">
              <a href="https://www.libib.com/u/wandabook ">
                {{ article.title }}
              </a>
            </h4>
            <p class="text-brand-grayish-blue text-sm hidden md:block">{{ article.content }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
