<template>

    <div class="mx-0">
        <div class="title-block mt-20 ">
            <h1 class="products-section-title uppercase font-heading font-bold">
                Categories
            </h1>
        </div>
        <div class="">
            <div class="">
                <div class="text-center flex justify-center bg-white space-x-4 px-2 py-12">
                    <button @click="previous" :disabled="currentPage === 0"
                        class=" text-white text-center cursor-pointer  px-2 h-12 mt-24">
                        <svg class="fill-red-600 ml-2 hover:translate-x-1" xmlns="http://www.w3.org/2000/svg"
                            height="24px" viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="M400-240 160-480l240-240 56 58-142 142h486v80H314l142 142-56 58Z" />
                        </svg>
                    </button>

                    <template v-for="(product, i) in visibleProducts" :key="i">
                        <WCategoryItem :cat="product"></WCategoryItem>
                    </template>
                    <button @click="next" :disabled="currentPage >= maxPage"
                        class="bg-blue text-white px-4  h-12 mt-24">Next
                        <svg class="fill-red-600 hover:translate-x-1" xmlns="http://www.w3.org/2000/svg" height="24px"
                            viewBox="0 -960 960 960" width="24px" fill="#5f6368">
                            <path d="m700-300-57-56 84-84H120v-80h607l-83-84 57-56 179 180-180 180Z" />
                        </svg>
                    </button>

                </div>
            </div>
        </div>
    </div>

</template>

<script setup>
import { ref, computed } from 'vue';
import WCategoryItem from './WCategoryItem.vue';

const produits = [
    { title: "COOKBOOKS", img: 'https://templates-demo.in/prestashop/naomi//img/cms/feature1.jpg', description: "Chefs, Famous, ethnic, Professional, Diet, Kitchen, Meal", link: '' },
    { title: "Travel", img: 'https://templates-demo.in/prestashop/naomi//img/cms/feature3.jpg', description: "Chefs, Famous, ethnic, Professional, Diet, Kitchen, Meal", link: '' },
    { title: "Horror", img: 'https://templates-demo.in/prestashop/naomi//img/cms/feature2.jpg', description: "Chefs, Famous, ethnic, Professional, Diet, Kitchen, Meal", link: '' },
    { title: "COOKBOOKS", img: 'https://templates-demo.in/prestashop/naomi//img/cms/feature1.jpg', description: "Chefs, Famous, ethnic, Professional, Diet, Kitchen, Meal", link: '' },
    { title: "COOKBOOKS", img: 'https://templates-demo.in/prestashop/naomi//img/cms/feature1.jpg', description: "Chefs, Famous, ethnic, Professional, Diet, Kitchen, Meal", link: '' },
    { title: "COOKBOOKS", img: 'https://templates-demo.in/prestashop/naomi//img/cms/feature1.jpg', description: "Chefs, Famous, ethnic, Professional, Diet, Kitchen, Meal", link: '' },
    { title: "COOKBOOKS", img: 'https://templates-demo.in/prestashop/naomi//img/cms/feature1.jpg', description: "Chefs, Famous, ethnic, Professional, Diet, Kitchen, Meal", link: '' },


];

const currentPage = ref(0);
const itemsPerPage = 5;
const maxPage = Math.ceil(produits.length / itemsPerPage) - 1;
console.log(produits.length)

const visibleProducts = computed(() => {
    const start = currentPage.value * itemsPerPage;
    return produits.slice(start, start + itemsPerPage);
});

function next() {
    if (currentPage.value < maxPage) {
        currentPage.value++;
    }
}

function previous() {
    if (currentPage.value > 0) {
        currentPage.value--;
    }
}
</script>

<style scoped></style>