<script setup>
import WProductSaleItem from './WProductSaleItem.vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
})
</script>

<template>
    <div class="mx-20">
        <div class="title-block mt-1 ">
            <h1 class="products-section-title uppercase font-heading">
                {{ title }}
            </h1>
        </div>
        <div class="flex overflow-hidden  gap-10 mt-5">
            <template v-for="i in 30">
                <div>
                    <WProductSaleItem />
                </div>
            </template>

        </div>
    </div>
</template>

<style>
.title-block {
    width: 100%;
    text-align: center;
}
</style>