<template>



    <section class="w-full">
        <div class="w-full px-6 md:px-20 xl:px-40 py-24 max-w-[1440px] mx-auto">
            <h3
                class="text-[32px] lg:text-[42px] text-brand-dark-blue font-normal capitalize text-center lg:text-left mb-8 lg:mb-12">
                Pricing
            </h3>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading">The right price for
                you, whoever
                you are</p>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                <article v-for="article in articles" :key="article.id"
                    class="w-full h-auto rounded-md bg-brand-white overflow-hidden">
                    <img :src="`/images/${article.cover}`" class="w-full h-[200px]" alt="cover" />
                    <div class="p-6">
                        <h6 class="text-[11px] text-brand-grayish-blue mb-2">
                            By {{ article.author }}
                        </h6>
                        <h4
                            class="text-body text-brand-dark-blue leading-snug font-normal mb-2 transition-all duration-200 ease hover:text-brand-lime-green">
                            <router-link to="/">
                                {{ article.title }}
                            </router-link>
                        </h4>
                        <p class="text-brand-grayish-blue text-sm">{{ article.content }}</p>
                    </div>
                </article>
            </div>
            <div class="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-5 mt-10">
                <div class="relative flex w-full p-1 bg-red-400 dark:bg-slate-900 rounded-full">
                    <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                        <span
                            class="absolute inset-0 w-1/2 bg-indigo-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"
                            :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
                    </span>
                    <button
                        class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                        :class="isAnnual ? 'text-white' : 'text-slate-500 dark:text-slate-400'" @click="isAnnual = true"
                        :aria-pressed="isAnnual">Yearly <span
                            :class="isAnnual ? 'text-indigo-200' : 'text-slate-400 dark:text-slate-500'">-20%</span></button>
                    <button
                        class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                        :class="isAnnual ? 'text-slate-500 dark:text-slate-400' : 'text-white'"
                        @click="isAnnual = false" :aria-pressed="isAnnual">Monthly</button>
                </div>
            </div>
            <div class="relative isolate bg-white px-6 py-5 sm:py-10 lg:px-8">
                <div
                    class="mx-auto mt-1 grid max-w-lg grid-cols-1 items-center gap-y-6 lg:mt-1 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
                    <div v-for="(tier, tierIdx) in tiers" :key="tier.id"
                        :class="['relative bg-gray-900 shadow-2xl mx-5', 'lg:rounded-t-3xl lg:rounded-tr-3xl', 'rounded-3xl p-8 ring-1 ring-gray-900/10 sm:p-10']">
                        <h3 :id="tier.id"
                            :class="[tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base font-semibold leading-7']">
                            {{ tier.name }}</h3>
                        <p class="mt-4 flex items-baseline gap-x-2" v-if="isAnnual">
                            <span
                                :class="[tier.featured ? 'text-white' : 'text-gray-900', 'text-5xl font-bold tracking-tight']">{{
                                    tier.priceYearly }}</span>
                            <span :class="[tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base']">/year</span>
                        </p>
                        <p class="mt-4 flex items-baseline gap-x-2" v-else>
                            <span
                                :class="[tier.featured ? 'text-white' : 'text-gray-900', 'text-5xl font-bold tracking-tight']">{{
                                    tier.priceMonthly }}</span>
                            <span
                                :class="[tier.featured ? 'text-gray-400' : 'text-gray-500', 'text-base']">/month</span>
                        </p>
                        <p :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-6 text-base leading-7']">{{
                            tier.description }}</p>
                        <ul role="list"
                            :class="[tier.featured ? 'text-gray-300' : 'text-gray-600', 'mt-8 space-y-3 text-sm leading-6 sm:mt-10']">
                            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>

                                {{ feature }}
                            </li>
                        </ul>
                        <a :href="tier.href" :aria-describedby="tier.id"
                            :class="[tier.featured ? 'bg-indigo-500 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500' : 'text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300 focus-visible:outline-indigo-600', 'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10']">Get
                            started today</a>
                    </div>
                </div>
            </div>
        </div>
    </section>


</template>

<script setup lang="ts">
import { ref } from 'vue';

const isAnnual = ref(false)
const tiers = [
    {
        name: 'Basic',
        id: 'tier-basic',
        href: '/create_account',
        priceMonthly: 'XAF 2000',
        priceYearly: 'XAF 20000',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Book limit per loan: 1',
            'Unlimited borrowing',
            '24/24 assistance ',
        ],
        featured: true,
    },
    {
        name: 'Standard',
        id: 'tier-standard',
        href: '/create_account',
        priceMonthly: 'XAF 5000',
        priceYearly: 'XAF 50000',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Book limit per loan: 3',
            'Unlimited borrowing',
            '24/24 assistance ',
        ],
        featured: true,
    },

]
</script>