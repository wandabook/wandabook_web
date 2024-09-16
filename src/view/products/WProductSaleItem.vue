<script setup>
import { ref } from 'vue';
import router from '../../routes/route';

const changeImage = () => {
    isFirst.value = false;
}
const changeOut = () => {
    isFirst.value = true;
}
const isFirst = ref(true);
const addToCart = () => {

}
const quickview = () => {
    router.push({ name: "bookDetail", params: { id: "0001244577" } })
}
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
        <div class="absolute flex flex-col justify-end self-center add-to-cart-block h-[235px]">
            <div class="flex gap-4 " data-aos="zoom-in" data-aos-anchor-placement="top-bottom" data-aos-duration="1000"
                v-if="!isFirst">
                <button class="btn btn-primary add-to-cart" data-button-action="add-to-cart" @click="addToCart">
                    Ajouter au panier
                    <em>Ajouter au panier</em>
                </button>
                <div class="quickview">
                    <a class="quick-view" data-link-action="quickview" @click="quickview">
                        <!-- <i class="material-icons search">&#xE8F4;</i>  -->
                        Aperçu rapide
                        <em>Aperçu rapide</em>
                    </a>
                </div>
            </div>

        </div>

    </article>
</template>

<style scoped>
.salesitem:hover .title {
    color: #E01520;
}

.add-to-cart-block .add-to-cart {
    font-size: 0;
    padding: 0;
    background: #363a42 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAADVCAYAAAC4/7siAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMbSURBVHja7JtLSFVRFIY/j0akIRWUvSBpIkg2CKSgmgSFkEGvQdADjBKsqIyKalAUJSU5aRgOpGkEUtgggiSSMnIS2KAGDSyCsAd6faDp38BlbU/Hx70pNVgLNvecf6393XP32vte/EEkEYw2SWUxLe0RMTbWAHP5y8iJ3Q8CK4CVwKw0WVmAgM4sSWHiI7AI+AzkpgEUMAxkAx1xaA9wG3gE5KUJ7QXOA0VxqIByoCnD5WwHnsQbNQzMzxBYBBQDj6JxPkomsRNIAS0R0xdbgffAlzg0ss5nEiWjvYjv0xSwF1icRvdTQCmQDzQCJO3TAqDLmjaVyAbmAfeA3UlQARVAAzDHwFk2EWAo2OTDwSmKgL5fRysG7QM+AJ+Ahbahu4AFNrnbjm8+MGD3EbAH6AgbE8Y+oBDYCLywxV8HPLZTtgxYC7Tacd4AvAJ+jN2Uf351fZZ0zq6PSOoNcs2S6u26VCOxJM7ISVj0DqDSXo8Cr4P8G2A/0Gyv322dmexJl0t6ak/xTFJBkMuVdNdy7yStT/qSjjdqWiJiBsKhDnWoQx3qUIc61KEOdahDHepQhzo0I2gbUDbdUDe63ejOLNzodqMbN7rd6HaoQx3qUIc61KEOdahDHepQhzr0X0JnJPxP83FjEyOOWIoR+0iM+Kv3gc0TUhM8kGJJLeaTfJN0RdJ2G5clfbXcc0mrkjyUuHDQJvRI2mXaUknnJV0w0wZJOyR1W+3hiaBXreiOpGzTrpnWHUCuWy6S1GBaTRK01pJng+Qx044GWpVpJwPtjGl1IfS4iaeCwkjSgKSmhDV7IGnIaka16vDNsJu3sYmzTa9IgB6wXF5Mbzed8F2qg4IsSYPjPGmj1UcJS3U2XNM6E08HhSdMqwy0Qwl1o8t3K6n7NZZsCJ7iRtD9lF3fDD5NvWm1E+3TSivqss2OpBWSLtkoNG2bpO9WWzXZ5kdSiaRWm/DFYOU2LkrqtNxLSauncqLCscUa1a/f0S/p4WT/nOHhv1EOdahDHepQhzrUoQ51qEMd6lCH/p9Qtzrd6nSr063OtKzOnwMAoyikYrHQL94AAAAASUVORK5CYII=) no-repeat center 5px;
    padding: 0;
    height: 30px;
    width: 30px;
    line-height: 18px;
    color: #fff;
    float: left;
    position: relative;
    font-weight: 400;
    text-transform: capitalize;
    border: none;
    transition: all 0.45s ease 0s;
    -webkit-transition: all 0.45s ease 0s;
    -moz-transition: all 0.45s ease 0s;
    -o-transition: all 0.45s ease 0s
}

.add-to-cart-block .add-to-cart:hover {
    background-color: #E01520
}

a.quick-view {
    font-size: 0;
    background: #363a42 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAADVCAYAAAC4/7siAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMbSURBVHja7JtLSFVRFIY/j0akIRWUvSBpIkg2CKSgmgSFkEGvQdADjBKsqIyKalAUJSU5aRgOpGkEUtgggiSSMnIS2KAGDSyCsAd6faDp38BlbU/Hx70pNVgLNvecf6393XP32vte/EEkEYw2SWUxLe0RMTbWAHP5y8iJ3Q8CK4CVwKw0WVmAgM4sSWHiI7AI+AzkpgEUMAxkAx1xaA9wG3gE5KUJ7QXOA0VxqIByoCnD5WwHnsQbNQzMzxBYBBQDj6JxPkomsRNIAS0R0xdbgffAlzg0ss5nEiWjvYjv0xSwF1icRvdTQCmQDzQCJO3TAqDLmjaVyAbmAfeA3UlQARVAAzDHwFk2EWAo2OTDwSmKgL5fRysG7QM+AJ+Ahbahu4AFNrnbjm8+MGD3EbAH6AgbE8Y+oBDYCLywxV8HPLZTtgxYC7Tacd4AvAJ+jN2Uf351fZZ0zq6PSOoNcs2S6u26VCOxJM7ISVj0DqDSXo8Cr4P8G2A/0Gyv322dmexJl0t6ak/xTFJBkMuVdNdy7yStT/qSjjdqWiJiBsKhDnWoQx3qUIc61KEOdahDHepQhzo0I2gbUDbdUDe63ejOLNzodqMbN7rd6HaoQx3qUIc61KEOdahDHepQhzr0X0JnJPxP83FjEyOOWIoR+0iM+Kv3gc0TUhM8kGJJLeaTfJN0RdJ2G5clfbXcc0mrkjyUuHDQJvRI2mXaUknnJV0w0wZJOyR1W+3hiaBXreiOpGzTrpnWHUCuWy6S1GBaTRK01pJng+Qx044GWpVpJwPtjGl1IfS4iaeCwkjSgKSmhDV7IGnIaka16vDNsJu3sYmzTa9IgB6wXF5Mbzed8F2qg4IsSYPjPGmj1UcJS3U2XNM6E08HhSdMqwy0Qwl1o8t3K6n7NZZsCJ7iRtD9lF3fDD5NvWm1E+3TSivqss2OpBWSLtkoNG2bpO9WWzXZ5kdSiaRWm/DFYOU2LkrqtNxLSauncqLCscUa1a/f0S/p4WT/nOHhv1EOdahDHepQhzrUoQ51qEMd6lCH/p9Qtzrd6nSr063OtKzOnwMAoyikYrHQL94AAAAASUVORK5CYII=) no-repeat center -129px;
    float: left;
    color: #fff;
    padding: 0;
    height: 30px;
    width: 30px;
    text-transform: capitalize;
    cursor: pointer;
    text-decoration: none;
    position: relative;
    font-weight: 400;
    line-height: 18px;
    float: left;
    transition: all 0.45s ease 0s;
    -webkit-transition: all 0.45s ease 0s;
    -moz-transition: all 0.45s ease 0s;
    -o-transition: all 0.45s ease 0s
}

a.quick-view:hover {
    background-color: #E01520
}

a.quick-view em,
.add-to-cart em {
    font-size: 11px;
    font-weight: 400;
    color: #fff;
    background: #E01520;
    float: left;
    text-align: center;
    font-style: unset;
    position: absolute;
    padding: 2px 0;
    right: auto;
    left: -25px;
    top: -30px;
    bottom: auto;
    min-width: 80px;
    text-transform: capitalize;
    white-space: nowrap;
    z-index: 9;
    opacity: 0;
    transition: all 0.45s ease 0s;
    -webkit-transition: all 0.45s ease 0s;
    -moz-transition: all 0.45s ease 0s;
    -o-transition: all 0.45s ease 0s
}

a.quick-view em::before {
    display: none;
    position: absolute;
    content: "";
    top: auto;
    bottom: 0;
    left: auto;
    right: -12px;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 9px 10px 9px 0;
    border-color: transparent #ffb85f transparent transparent;
    transition: all 0.45s ease 0s;
    -webkit-transition: all 0.45s ease 0s;
    -moz-transition: all 0.45s ease 0s;
    -o-transition: all 0.45s ease 0s
}

.add-to-cart:hover em,
.add-to-cart:hover em::before,
a.quick-view:hover em,
a.quick-view:hover em::before {
    opacity: 1;
    transition: all 0.45s ease 0s;
    -webkit-transition: all 0.45s ease 0s;
    -moz-transition: all 0.45s ease 0s;
    -o-transition: all 0.45s ease 0s
}
</style>