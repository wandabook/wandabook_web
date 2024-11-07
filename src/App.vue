<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useI18n } from "vue-i18n";
import { useLanguageStore } from './lang/language';
const useLanguage = useLanguageStore();
const t = useI18n({ useScope: "global" });
console.log('useLanguage.language', useLanguage.language)
if (useLanguage.language) {
  t.locale.value = useLanguage.language;
} else {
  useLanguage.set(t.locale.value)
}
</script>

<template>
  <RouterView />
</template>
