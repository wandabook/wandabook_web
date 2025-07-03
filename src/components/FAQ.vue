<template>
    <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div class="max-w-2xl mx-auto text-center">
                <h2 class="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
                    {{ t('faqTitle') }}
                </h2>
            </div>
            <div class="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
                <div v-for="(que, index) in (tm('faq') as Array<{ question: string; response: string }>)" :key="index"
                    class="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
                    <button type="button" id="question" data-state="closed" data-id="question"
                        class="flex items-center justify-between w-full px-4 py-5 sm:p-6">
                        <span class="flex text-lg font-semibold text-black">{{ que.question }}</span>
                        <svg :id="'arrow' + (index + 1)" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor" class="w-6 h-6 text-gray-400">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7">
                            </path>
                        </svg>
                    </button>
                    <div :id="'answer' + (index + 1)" style="display:none" class="px-4 pb-5 sm:px-6 sm:pb-6">
                        <p>{{ que.response }}</p>
                    </div>
                </div>
            </div>
            <p class="text-center text-gray-600 textbase mt-9">
                {{ t('stillHaveQuestion') }}
                <span
                    class="cursor-pointer font-medium text-tertiary transition-all duration-200 hover:text-tertiary focus:text-tertiary hover-underline">{{
                        t('contactOurSupport') }}
                </span>
            </p>
        </div>

    </section>
</template>
<script lang="ts" setup>
import { onMounted } from 'vue';
import { useI18n } from "vue-i18n";

const { tm, rt,t } = useI18n()
onMounted(() => {
    // JavaScript to toggle the answers and rotate the arrows
    document.querySelectorAll('[data-id="question"]').forEach(function (button, index) {
        console.log(button);
        button.addEventListener('click', function () {
            var answer = document.getElementById('answer' + (index + 1));
            var arrow = document.getElementById('arrow' + (index + 1));
            if (answer != null && arrow != null) {
                if (answer.style.display === 'none' || answer.style.display === '') {
                    answer.style.display = 'block';
                    arrow.style.transform = 'rotate(0deg)';
                } else {
                    answer.style.display = 'none';
                    arrow.style.transform = 'rotate(-180deg)';
                }
            }

        });
    });
})
</script>