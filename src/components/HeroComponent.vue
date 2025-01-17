<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CtaComponent from './CtaComponent.vue'
import SingleScroll from './SingleScroll.vue'
import { getDocumentsGlobal } from '../lib/appwrite';
import { bookCollection, } from '../utilities/constants';
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

<template>
  <section
    class="hidden md:flex relative w-full pb-30  lg:h-[100vh] px-6 md:px-20 lg:px-0  flex-col-reverse lg:flex-row lg:justify-between items-center overflow-x-clip">
    <div class="absolute top-0 bottom-0 right-0 left-0 bg-brand-default -z-30"></div>

    <div class="lg:ml-20 xl:ml-40 2xl:ml-52 lg:w-4/12">
      <h2 class=" xl:text-5xl text-white leading-[3rem] xl:leading-[4.5rem] text-center lg:text-left mb-6 text-2xl">
        {{ $t('title_1') }} <br class="hidden lg:block" />
        {{ $t('title_2') }}
      </h2>
      <p class="text-white text-md lg:text-body font-normal text-center lg:text-left mb-8 hidden md:block">
        {{ $t('title_description') }}
      </p>
      <div class="flex justify-center lg:justify-start mb-10">
        <CtaComponent />
      </div>
    </div>
    <img src="@/assets/default/lib.png"
      class="lg:w-7/12 -z-10 lg:-mr-32 relative top-[30px] md:top-[-8px] lg:top-0 lg:h-[140%] xl:h-auto lg:right-[30px] xl:right-0"
      alt="mockups" />
  </section>
  <section class=" md:hidden relative w-full pt-14 px-6 md:px-20 lg:px-0 bg-brand-default">

    <img src="@/assets/default/lib.png" class="" alt="mockups" />
    <div class="pb-5">
      <h2 class=" text-white text-center lg:text-left text-xl">
        {{ $t('find') }}
      </h2>
    </div>
  </section>
  <section>
    <div class=" pt-2 pb-4 md:hidden">
      <h3 class="text-xl px-4  text-left mb-2 font-heading uppercase font-extrabold">
        {{ $t('weekChoice') }}
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
