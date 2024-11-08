<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useI18n } from "vue-i18n";
import { useLanguageStore } from './lang/language';
import { onMounted } from 'vue';
const useLanguage = useLanguageStore();
const t = useI18n({ useScope: "global" });
console.log('useLanguage.language', useLanguage.language)
if (useLanguage.language) {
  t.locale.value = useLanguage.language;
} else {
  useLanguage.set(t.locale.value)
}
onMounted(() => {
  const script = document.createElement('script');
  script.src = 'https://cdn.cinetpay.com/seamless/main.js'; // Replace with your script path
  script.async = true;
  document.body.appendChild(script);
});
</script>

<template>
  <RouterView />
</template>
