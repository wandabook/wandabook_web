<template>
  <div class="relative">
    <div class="flex space-x-3">
      <div v-for="(it, i) in languages" :class="(selectLanguage.code === it.code ? 'bg-brand-white ' : ' ') + 'p-0.5'"
        :key="i" @click="setLanguage(it)">
        <img :src="it.icon" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
      </div>
    </div>
    <!--  <button @click="show = !show" type="button"
      class="relative w-full cursor-default rounded-md bg-white dark:bg-boxdark py-1 pl-3 pr-10 text-left text-white-900   ring-gray-300  sm:text-sm sm:leading-6"
      aria-haspopup="listbox" aria-expanded="true" aria-labelledby="listbox-label">
      <span class="flex items-center">
       <img :src="selectLanguage.icon" alt="" class="h-6 w-6 flex-shrink-0 rounded-full" />
    <span class="ml-3 block truncate text-graydark dark:text-white">{{
      selectLanguage.name
      }}</span>
    </span>
    <span class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
      <svg class="h-5 w-5 text-graydark dark:text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd"
          d="M10 3a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02L10 4.852 7.3 7.76a.75.75 0 01-1.1-1.02l3.25-3.5A.75.75 0 0110 3zm-3.76 9.2a.75.75 0 011.06.04l2.7 2.908 2.7-2.908a.75.75 0 111.1 1.02l-3.25 3.5a.75.75 0 01-1.1 0l-3.25-3.5a.75.75 0 01.04-1.06z"
          clip-rule="evenodd" />
      </svg>
    </span>
    </button>-->

    <ul v-if="show"
      class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white dark:bg-boxdark py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
      tabindex="-1" role="listbox" aria-labelledby="listbox-label" aria-activedescendant="listbox-option-3">
      <!--
        Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

        Highlighted: "bg-indigo-600 text-white", Not Highlighted: "text-gray-900"
      -->
      <li v-for="(language, i) in languages" :key="i"
        class="relative cursor-pointer select-none py-2 pl-3 pr-9 text-graydark dark:text-white" id="listbox-option-0"
        role="option" @click="setLanguage(language)">
        <div class="flex items-center">
          <img :src="language.icon" alt="" class="h-5 w-5 flex-shrink-0 rounded-full" />
          <!-- Selected: "font-semibold", Not Selected: "font-normal" -->
          <span class="ml-3 block truncate font-normal">{{
            language.name
          }}</span>
        </div>
        <span class="absolute inset-y-0 right-0 flex items-center pr-4 text-indigo-600"
          v-if="selectLanguage.code === language.code">
          <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd"
              d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
              clip-rule="evenodd" />
          </svg>
        </span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import sw from '@/assets/images/home/united-kingdom_551844.png'
import cm from '@/assets/images/home/Flag_of_France.png'
import { useI18n } from 'vue-i18n'
import { useLanguageStore } from '../lang/language'
const t = useI18n({ useScope: 'global' })

const languages = [
  {
    code: 'en',
    name: 'English',
    icon: sw,
  },
  {
    code: 'fr',
    name: 'French',
    icon: cm,
  },
]
const show = ref(false)
const useLanguage = useLanguageStore()
const selectLanguage: any = computed(() => {
  return languages.filter((e) => e.code === useLanguage.locale)[0]
})
const setLanguage = (lg: any) => {
  console.log('setLanguage', lg)
  show.value = !show
  if (lg.code !== t.locale.value) {
    t.locale.value = lg.code
    useLanguage.set(t.locale.value)
  }
  console.log('useLanguage', useLanguage.locale)
}
</script>
