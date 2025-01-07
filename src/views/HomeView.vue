<script setup lang="ts">
import FeaturesComponent from '@/components/FeaturesComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import LatestArticlesComponent from '@/components/LatestArticlesComponent.vue'
import PricingComponent from '../components/PricingComponent.vue'
import ComplaintSuggestion from '@/components/ComplaintSuggestion.vue'
</script>

<template>
  <HeaderComponent />
  <HeroComponent />
  <LatestArticlesComponent />
  <PricingComponent id="" />
  <FeaturesComponent />
  <section>
    <div class="w-full px-6 md:px-5 xl:px-40 py-16 lg:py-10 max-w-[1440px] mx-auto">
      <div class="bg-gray-100 p-6 rounded-lg shadow-md text-center">
        <h2 class="text-md md:text-lg font-semibold text-gray-800">{{ $t('questions.title') }}</h2>
        <p class="mt-2 text-gray-600 text-sm md:text-lg">
          {{ $t('questions.subtitle') }}
          <a href="/common-questions" class="text-blue-500 hover:underline font-medium">
            {{ $t('questions.linkText') }}
          </a>
          {{ $t('questions.page') }}
        </p>
      </div>
    </div>
  </section>

  <ComplaintSuggestion />
  <FooterComponent />
</template>
