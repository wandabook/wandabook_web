<template>
    <div class="single-scroll-container">
        <!-- Conteneur pour le défilement horizontal -->
        <div class="single-scroll-wrapper scrollbar-hide" ref="scrollContainer">
            <!-- Contenu défilant -->
            <div class="single-scroll-content">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';
onMounted(() => {
    scrollContainer.value.addEventListener('wheel', (e: any) => {
        e.preventDefault();
        scrollContainer.value.scrollLeft += e.deltaY;
    });
})
const scrollContainer = ref();

</script>

<style scoped>
.single-scroll-container {
    /* Dimension pour l'encapsulation */
    width: 100%;
    overflow: hidden;
}

.single-scroll-wrapper {
    /* Activer le défilement horizontal */
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    scroll-behavior: smooth;
    /* Défilement fluide */
}

.single-scroll-content {
    display: flex;
    gap: 0.5rem;
    /* Espace entre les éléments */
}
</style>
