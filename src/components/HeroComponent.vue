<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CtaComponent from './CtaComponent.vue'
import SingleScroll from './SingleScroll.vue'
import { getDocumentsGlobal } from '../lib/appwrite';
import { bookCollection, } from '../utilities/constants';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const books = ref();

const fetchBooks = async () => {
  const result = await getDocumentsGlobal(bookCollection);
  if (result.documents != null && result.documents.length > 0) {
    books.value = result.documents;
  } else {
    books.value = [];
  }
  console.log(result);
}
const isMobile = ref(false)
fetchBooks();
onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

const onResize = () => {
  if (window.screen.width <= 425) {
    isMobile.value = true
  }
}
const goto = (link: string) => {
  window.location.href = link;
}
</script>

<template><!--
  <section
    class="hidden md:flex relative w-full pb-30  lg:h-[100vh] px-6 md:px-20 lg:px-0  flex-col-reverse lg:flex-row lg:justify-between items-center overflow-x-clip overflow-hidden">
    <div class="absolute top-0 bottom-0 right-0 left-0 bg-brand-default -z-30"></div>

    <div class="lg:ml-20 xl:ml-40 2xl:ml-52 lg:w-4/12">
      <h2 class=" xl:text-5xl text-white leading-[3rem] xl:leading-[4.5rem] text-center lg:text-left mb-6 text-2xl">
        {{ t('title_1') }} <br class="hidden lg:block" />
        {{ t('title_2') }}
      </h2>
      <p class="text-white text-md lg:text-body font-normal text-center lg:text-left mb-8 hidden md:block">
        {{ t('title_description') }}
      </p>
      <div class="flex justify-center lg:justify-start mb-10">
        <CtaComponent />
      </div>
    </div>
    <div class="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
      <img src="@/assets/default/im.png" class="rounded-2xl shadow-lg w-full max-w-md" alt="mockups" />
    </div>
  </section>-->
  <section
    class=" hidden md:flex relative  flex-col-reverse lg:flex-row items-center justify-between bg-brand-default px-16 xl:p-5 min-h-screen">

    <!-- Texte à gauche -->
    <div class="text-white lg:w-1/2 space-y-6 px-10">
      <h1 class="text-4xl lg:text-5xl font-bold leading-tight">
        {{ t('title_1') }} {{ t('title_2') }}
      </h1>
      <p class="text-lg lg:text-xl">
        {{ t('title_description') }}
      </p>
      <a href="https://www.libib.com/u/wandabook"
        class="inline-block bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-full text-lg transition duration-300">
        {{ t('visiteCatalogue') }}
      </a>
    </div>

    <!-- Image à droite -->
    <div class="lg:w-1/2 mb-10 lg:mb-0 flex justify-center">
      <img src="@/assets/default/avatar-removebg-preview.png" alt="Bâtiment Wandabook"
        class="rounded-2xl w-full max-w-md">
    </div>

  </section>
  <section class=" md:hidden relative w-full pt-20 mb-2">

    <SingleScroll>
      <div class="w-80 h-36">
        <img src="@/assets/default/im.png" class="h-32 w-full object-cover" alt="mockups" />
        <div class="pb-5">
          <h2 class=" text-black text-center lg:text-left text-sm">
            {{ t('find') }}
          </h2>
        </div>
      </div>
      <div class="w-80 h-32">
        <img src="@/assets/default/bbl.jpg" class="h-32 w-full object-cover" alt="mockups" />

      </div>
      <div class="w-80 h-32">
        <img src="@/assets/default/acca.jpg" class="h-32 w-full object-cover" alt="mockups" />

      </div>

    </SingleScroll>

  </section>
  <section>
    <div class=" pt-2 pb-4 md:hidden">
      <h3 class="text-xl px-4  text-left mb-2 font-heading uppercase font-extrabold">
        {{ t('weekChoice') }}
      </h3>
      <SingleScroll>
        <!-- Contenu pour le défilement horizontal -->
        <div v-for="item in books" :key="item" :style="{ backgroundImage: `url(${item.image})` }"
          @click="goto(item.link)"
          class="  shadow-lime-100 shadow-2xl w-52 h-32 py-2 font-extrabold rounded-md flex flex-col items-center justify-end  text-brand-default  bg-cover bg-center ">
          {{ item.title }}

        </div>
      </SingleScroll>
    </div>
  </section>
</template>
