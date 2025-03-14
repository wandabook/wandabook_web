<script setup lang="ts">
import comics from "@/assets/categories/comics.jpg";
import hot_romance from "@/assets/categories/hot_romance.jpeg"
import romance_thriller from "@/assets/categories/romance_thriller.jpg"
import marvel from "@/assets/categories/marvel.webp"
import manga from "@/assets/categories/manga.jpg"
import ado_15_21 from "@/assets/images/categories/ado_15_21.jpg"
import african from "@/assets/images/categories/african.jpg"
import Comics from "@/assets/images/categories/Comics.jpg"
import enfant_1_7 from "@/assets/images/categories/enfant_1_7.jpg"
import harlequins from "@/assets/images/categories/harlequins.jpg"
import kid_8_14 from "@/assets/images/categories/kid_8_14.jpg"
import literrature from "@/assets/images/categories/literrature.png"
import mangas from "@/assets/images/categories/mangas.jpg"
import medecine from "@/assets/images/categories/medecine.jpg"
import nobel_price from "@/assets/images/categories/nobel_price.jpg"
import police_thriller from "@/assets/images/categories/police_thriller.jpg"
import tchnologie from "@/assets/images/categories/tchnologie.jpg"
import { getDocumentsWithFilerGlobal } from "../lib/appwrite";
import { catalogueCollection } from "../utilities/constants";
import { Query } from "appwrite";
import { ref } from "vue";

const articles = ref();
const fetchCatague = async () => {
  const result = await getDocumentsWithFilerGlobal(catalogueCollection, [Query.equal('status', "active")]);
  if (result.documents != null && result.documents.length > 0) {
    articles.value = result.documents;
  } else {
    articles.value = [];
  }
  console.log(result);
}
fetchCatague();
</script>

<template>
  <section class="w-full bg-brand-lighter-gray hidden md:block">
    <div class="w-full px-6 md:px-20 xl:px-40 py-24 max-w-[1440px] mx-auto">
      <h3
        class="text-[32px] uppercase lg:text-[42px] text-brand-dark-blue font-normal text-center lg:text-left mb-8 lg:mb-12 font-heading">
        {{ $t('categories') }}
      </h3>
      <div class="md:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 hidden">
        <article v-for="article in articles" :key="article.id"
          class="w-full h-auto rounded-md bg-brand-white overflow-hidden">
          <img :src="article.image" class="w-full h-[100px] md:h-[200px] object-cover" alt="cover" />
          <div class="p-2 md:p-6">
            <h4
              class="text-sm text-body text-brand-dark-blue leading-snug font-heading mb-2 transition-all duration-200 ease hover:text-red-600 uppercase">
              <a :href="article.url">
                {{ article.title }}
              </a>
            </h4> <template v-if="article.description">
              <p class="text-brand-grayish-blue text-sm hidden md:block">{{ $t(article.description) }}</p>
            </template>
          </div>
        </article>
      </div>
    </div>
  </section>
  <section class="w-full md:hidden mb-0">
    <div class="w-full max-w-[1440px] mx-auto">
      <h3 class="text-xl px-4  text-left mb-4 font-heading uppercase font-extrabold">
        {{ $t('categories') }}
      </h3>
      <div class="grid grid-cols-3  gap-1 px-4 ">
        <article v-for="article in articles" :key="article.id"
          class="w-full h-auto rounded-md bg-brand-white overflow-hidden">
          <img :src="article.image" class="w-full h-[100px] md:h-[200px] object-cover" alt="cover" />
          <div class="p-2 md:p-6">
            <h4
              class="text-sm text-body text-brand-dark-blue leading-snug font-heading mb-2 transition-all duration-200 ease hover:text-red-600 uppercase">
              <a :href="article.url">
                {{ article.title }}
              </a>
            </h4>
            <template v-if="article.description">
              <p class="text-brand-grayish-blue text-sm hidden md:block">{{ $t(article.description) }}</p>
            </template>
          </div>
        </article>
      </div>
      <!--   <SingleScroll>
      <article v-for="article in articles" :key="article.id"
        class="w-36 h-auto rounded-md bg-brand-white overflow-hidden">
        <img :src="article.cover" class="w-full h-[100px] md:h-[200px] object-cover" alt="cover" />
        <div class="p-2 md:p-6">
          <h4
            class="text-sm text-body text-brand-dark-blue leading-snug font-heading mb-2 transition-all duration-200 ease hover:text-red-600 uppercase">
            <a href="https://www.libib.com/u/wandabook ">
              {{ article.title }}
            </a>
          </h4>
          <p class="text-brand-grayish-blue text-sm hidden md:block">{{ $t(article.content) }}</p>
        </div>
      </article>
      </SingleScroll>-->
    </div>
  </section>
</template>
