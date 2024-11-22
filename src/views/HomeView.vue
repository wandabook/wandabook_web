<script setup lang="ts">
import FeaturesComponent from '@/components/FeaturesComponent.vue'
import FooterComponent from '@/components/FooterComponent.vue'
import HeaderComponent from '@/components/HeaderComponent.vue'
import HeroComponent from '@/components/HeroComponent.vue'
import LatestArticlesComponent from '@/components/LatestArticlesComponent.vue'
import PricingComponent from '../components/PricingComponent.vue'
import FAQ from '@/components/FAQ.vue'
import SingleScroll from '../components/SingleScroll.vue'

</script>

<template>
  <HeaderComponent />
  <div class="p-4">
    <SingleScroll>
      <!-- Contenu pour le défilement horizontal -->
      <div v-for="item in 10" :key="item"
        class="w-64 h-40 bg-blue-500 rounded-md flex items-center justify-center text-white">
        Item {{ item }}
      </div>
    </SingleScroll>
  </div>
  <HeroComponent />
  <FeaturesComponent />
  <LatestArticlesComponent />
  <PricingComponent id="" />
  <FAQ></FAQ>
  <FooterComponent />
</template>
