<template>
    <div
        class="border border-pain w-[20%] h-[250px] flex-col flex justify-center py-1 hover:border-orange-300 cursor-pointer">
        <div class=" h-[50%] mx-auto bg-white px-2 -translate-y-12">
            <img :src="cat.img" alt="" class="h-full">
        </div>
        <div class=" text-center">
            <h2 class="text-xl font-bold">{{ cat.title }}</h2><br>
            <p>{{ cat.description }}</p>
            <a href="#" class="text-blue-500" :link="cat.link"></a>
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

<style scoped></style>