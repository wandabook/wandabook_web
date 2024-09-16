<script setup>
import { defineAsyncComponent } from 'vue';
const WProductSection = defineAsyncComponent(() => import('./WProductSection.vue'));
</script>

<template>
    <div class="flex justify-center">
        <div class="container align-middle mt-5">
            <div class="flex">
                <div class="w-6/12">
                    <img id="zoom" class="js-qv-product-cover"
                        src="https://templates-demo.in/prestashop/naomi/img/p/1/7/5/175-medium_default.jpg" alt=""
                        title="" style="width:100%;" itemprop="image">
                </div>
                <div class="w-6/12 px-5">
                    <div class="font-heading text-3xl font-bold">Salesforce</div>
                    <div class="font-display text-gray-400">Authors</div>
                    <div class="mt-2 font-display font-bold text-2xl">
                        7000 XAF
                    </div>
                    <div class="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eros sapien,
                        tempus
                        non odio ac, egestas fringilla nulla. Mauris non felis sed velit lacinia mollis. Sed vel elit
                        commodo, pulvinar mi vel</div>
                    <button class="btn btn-primary w-2/3 bg-red-500 py-2 text-white uppercase font-heading mt-5"
                        data-button-action="add-to-cart" type="submit">
                        Ajouter au panier
                    </button>
                    <div class="px-5 py-4 bg-red-600 w-3/12 text-center uppercase text-white font-bold mt-20">
                        Description
                    </div>
                    <div class="bg-gray-100 py-3 px-5 text-justify">
                        Fusce sem risus, faucibus a ligula id, egestas suscipit turpis. Ut cursus elementum mattis.
                        Quisque bibendum massa non rhoncus luctus. In scelerisque at metus sit amet faucibus. Integer
                        facilisis magna nisl, convallis lacinia est imperdiet sit amet. Aenean gravida tristique nisl,
                        congue sodales mi sodales in. Suspendisse fermentum massa vel molestie molestie. Quisque et
                        ullamcorper nibh, eu condimentum tortor. Nulla non augue maximus, facilisis sapien a, molestie
                        orci. Pellentesque sit amet mauris a orci tempor tincidunt. Vivamus elit elit, volutpat vel
                        bibendum ac, tempor a est. Vivamus aliquam sollicitudin vestibulum. Etiam ac nisi a tortor
                        tincidunt viverra id sit amet libero Ut ullamcorper ipsum sed fermentum dictum. Morbi nulla
                        eleifend bibendum aliquet
                    </div>
                </div>
            </div>
        </div>
    </div>
    <WProductSection title="Vous aimerez aussi" class="mt-14 mb-20" data-aos="fade-right" />


</template>

<style></style>