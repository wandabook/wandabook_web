<template>
    <div
        class="border border-pain w-[20%] h-[200px] flex-col flex justify-center hover:border-[#E01520] cursor-pointer mt-16 cat-item">
        <div class="  h-40 mx-auto bg-white px-2 -translate-y-16">
            <img :src="cat.img" alt="" class="h-full w-40">
        </div>
        <div class=" text-center -translate-y-10">
            <h2 class="text-xl font-bold font-heading uppercase mb-5">{{ cat.title }}</h2>
            <p class="font-display text-gray-400">{{ cat.description }}</p>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(
    {
        cat: {
            String: Object,
            required: true,
        }
    }
)
</script>

<style scoped>
.cat-item:hover .font-heading {
    color: #E01520;
}
</style>