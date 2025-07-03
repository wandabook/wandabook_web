<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
defineProps(['showMenu'])

defineEmits(['closeMenu'])
</script>

<template>
  <div v-if="showMenu" class="fixed top-16 left-0 w-full h-screen z-50 bg-[#0000006c] drop-shadow-md md:hidden"
    @click.self="$emit('closeMenu')">
    <div class="w-full p-6">
      <div class="flex flex-col items-center gap-6 p-8 bg-brand-white rounded">
        <router-link to="/" class="text-body text-brand-dark-blue font-normal hover:text-brand-default"
          @click="$emit('closeMenu')">{{ t('home') }}</router-link>
        <router-link to="/about_us" class="text-body text-brand-dark-blue font-normal hover:text-brand-default"
          @click="$emit('closeMenu')">{{ t('about_us') }}</router-link>
        <router-link to="/contact_us" class="text-body text-brand-dark-blue font-normal hover:text-brand-default"
          @click="$emit('closeMenu')">{{ t('Contact') }}</router-link>
      </div>
    </div>
  </div>
</template>
