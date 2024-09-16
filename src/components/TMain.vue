<template>
  <section class="px-24">
    <div class="flex justify-between mt-5">
      <div class="w-1.5/12 " style="height:60vh;">
        <Simple_Menu></Simple_Menu>
      </div>
      <div class="lg:w-7/12 justify-center ">
        <div>
          <carousel></carousel>
        </div>
      </div>
      <div class="lg:w-2/12 flex flex-col justify-between">
        <div class="custom-home-block">
          <div class="custom-banner-inner"><a class="cms-image" href="#"> <img
                src="https://templates-demo.in/prestashop/naomi//img/cms/home-block-1.jpg" alt="banner"></a>
          </div>
        </div>
        <div class="custom-home-block mt-auto">
          <div class="custom-banner-inner"><a class="cms-image" href="#"> <img
                src="https://templates-demo.in/prestashop/naomi//img/cms/home-block-1.jpg" alt="banner"></a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mx-24 mt-5">
    <div class="bg-[#24303F]">
      <div class="mx-20">
        <div class="flex justify-between">
          <div class="flex text-white my-4 px-10 border-e border-gray-700" v-for="i in 4">
            <div class="services-inner flex">
              <span class="items-center justify-center me-4"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
                </svg>
              </span>
              <div class="service-description">
                <div class="h1 uppercase font-heading"><a href="#">free world delivery</a></div>
                <div class="text-sm opacity-20">on your $100 order</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <WCategorySection />
  <WProductSection title="Top Products" />
  <WProductSection title="Products En ventes" class="mt-14 mb-20" />
</template>

<script setup>
import carousel from "../components/carousel.vue";
import Simple_Menu from "./Simple_Menu.vue";

/*importation des livres*/
import apologie_socrate from "../assets/livres/apologie_socrate.jpg";
import livre_damso from "../assets/livres/dictionnaire_critique.jpg";
import B_dames from "../assets/livres/zola.jpg";
import towa from "../assets/livres/essai.jpg";

import inconnue1 from "../assets/livres/premiereExpo/livre1.jpg";
import inconnue2 from "../assets/livres/premiereExpo/livre2.jpg";
import inconnue3 from "../assets/livres/premiereExpo/livre3.jpg";
import inconnue4 from "../assets/livres/premiereExpo/livre4.jpg";
import inconnue5 from "../assets/livres/premiereExpo/livre5.jpg";
import inconnue6 from "../assets/livres/premiereExpo/livre6.jpg";
import WProductSection from "./products/WProductSection.vue";
import WCategorySection from "./products/WCategorySection.vue";

const Livre = [
  {
    Title: "MON LIVRE1",
    image: apologie_socrate,
    description: "Marcel DEV",
    price: "200fcfa",
  },
  {
    Title: "MON LIVRE2",
    image: livre_damso,
    description: "Marcel DEV",
    price: "200fcfa",
  },
  {
    Title: "MON LIVRE3",
    image: B_dames,
    description: "Marcel DEV",
    price: "200fcfa",
  },
  {
    Title: "MON LIVRE4",
    image: towa,
    description: "Marcel DEV",
    price: "200fcfa",
  },
];

const Expo_livres = [
  {
    Title: "Inconnue1",
    image: inconnue1,
    description: "Marcel Dev",
    price: "500fcfa",
  },
  {
    Title: "Inconnue2",
    image: inconnue2,
    description: "Marcel Dev",
    price: "800fcfa",
  },
  {
    Title: "Inconnue3",
    image: inconnue3,
    description: "Marcel Dev",
    price: "2200fcfa",
  },
  {
    Title: "Iconnue4",
    image: inconnue4,
    description: "Marcel Dev",
    price: "3200fcfa",
  },
  {
    Title: "Iconnue5",
    image: inconnue5,
    description: "Marcel Dev",
    price: "2000fcfa",
  },
  {
    Title: "Iconnue6",
    image: inconnue6,
    description: "Marcel Dev",
    price: "2500fcfa",
  },
];

console.log(Expo_livres.value);
</script>

<style scoped>
.custom-home-block .custom-description {
  text-transform: uppercase;
  position: absolute;
  left: auto;
  right: 25px;
  top: 30%;
  bottom: auto;
  text-align: center
}
</style>
