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
  <section class=" md:hidden relative w-full pt-20 mb-3">

    <SingleScroll>
      <div class="w-80 h-32">
        <img src="@/assets/default/im.png" class="h-36 w-full object-cover" alt="mockups" />
        <div class="pb-5">
          <h2 class=" text-black text-center lg:text-left text-sm">
            {{ $t('find') }}
          </h2>
        </div>
      </div>
      <div class="w-80 h-32">
        <img src="@/assets/default/bbl.jpg" class="h-36 w-full object-cover" alt="mockups" />

      </div>
      <div class="w-80 h-40">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.854068068936!2d11.485873075859022!3d3.8414877485049197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfcf1afa0af5%3A0xad041dcc8c6d883!2sMarch%C3%A9%20Acacias!5e0!3m2!1sfr!2sde!4v1738575229069!5m2!1sfr!2sde"
          class="h-36 w-full object-cover" style="border:0;" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>


    </SingleScroll>

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
