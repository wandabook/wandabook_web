<script setup>
import { ref } from 'vue';

const changeImage = () => {
    isFirst.value = false;
}
const changeOut = () => {
    isFirst.value = true;
}
const isFirst = ref(true);
</script>

<template>
    <article class="border-b border-[#E01520] pb-2 flex flex-col cursor-pointer min-w-max salesitem"
        @mouseover="changeImage" @mouseout="changeOut">
        <div class="bg-gray-50 px-0 py-0 relative">
            <img src="https://templates-demo.in/prestashop/naomi/img/p/1/5/8/158-home_default.jpg" height="400"
                v-if="isFirst" width="245">
            <img src="https://templates-demo.in/prestashop/naomi/img/p/1/7/0/170-home_default.jpg" v-else height="400"
                width="245">
        </div>
        <div class="text-center mt-3 font-display  title">
            Book title
        </div>
        <div class="text-center mt-3">
            <span class="text-gray-200 text-sm line-through">33,80 $</span>
            <span class="font-bold"> 3999 $</span>
        </div>
        <div class="absolute flex flex-col">
            <button class="ms-2" v-if="!isFirst">add</button>
        </div>

    </article>
</template>

<style scoped>
.salesitem:hover .title {
    color: #E01520;
}
</style>