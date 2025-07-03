<template>
    <div class="min-h-screen bg-white text-gray-800 pt-16">
        <div class=" pt-20 p-6 bg-brand-default">
            <h1 class="text-4xl font-bold mb-4 text-white text-center">{{ t('about.title') }}</h1>
        </div>
        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start pt-10 pb-10 ">

            <!-- Text content -->
            <div class="p-3 md:p-1">

                <p class="mb-4 text-lg leading-relaxed">
                    {{ t('about.intro1') }}
                </p>

                <p class="mb-4 text-lg leading-relaxed">
                    {{ t('about.intro2') }}
                </p>

                <ul class="list-disc list-inside mb-6 text-lg">
                    <li><strong>{{ t('about.feature1Title') }}:</strong> {{ t('about.feature1Desc') }}</li>
                    <li><strong>{{ t('about.feature2Title') }}:</strong> {{ t('about.feature2Desc') }}</li>
                    <li><strong>{{ t('about.feature3Title') }}:</strong> {{ t('about.feature3Desc') }}</li>
                    <li><strong>{{ t('about.feature4Title') }}:</strong> {{ t('about.feature4Desc') }}</li>
                </ul>

                <div class="mt-6 text-lg">
                    <p><strong>{{ t('about.addressLabel') }}</strong> {{ t('about.address') }}</p>
                    <p><strong>{{ t('about.phoneLabel') }}</strong> +237 699 99 99 99</p>
                    <p><strong>{{ t('about.emailLabel') }}</strong> contact@wandabook.cm</p>
                </div>
            </div>

            <!-- Image (hidden on mobile) -->
            <div class="hidden md:block">
                <img src="@/assets/default/im.png" />
            </div>

        </div>
    </div>
</template>

<script setup lang="ts">
// Vue i18n will be used to handle translations
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<style>
/* Tailwind handles most styling */
</style>
