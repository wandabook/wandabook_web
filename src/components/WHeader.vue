<script setup>
import Lang_Devise from "../components/Lang_Devise.vue";
var languages = [
  { langue: "Français", value: "French" },
  { langue: "Anglais ", value: "english" },
  { langue: "Espagnol", value: "spanish" },
  { langue: "Italien", value: "Italien" },
  { langue: "Chinois", value: "chinois" },
  { langue: "Arabe", value: "Arabe" },
  { langue: "Allemand", value: "Allemand" },
];

var monnaies = [
  { monnaie: "EUR", value: "EUR" },
  { monnaie: "USD", value: "USD" },
  { monnaie: "XAF", value: "XAF" },
];


</script>

<template>

  <header class="">
    <section class="bg-gray-100">
      <div class="justify-between flex py-2 container mx-auto">
        <div class="flex flex-row">
          <Lang_Devise :langues="languages" :monnaies="monnaies"> </Lang_Devise>
        </div>
        <div class="gap-x-4 flex uppercase justify-center align-middle self-center">
          <a class="uppercase text-sm font-heading" href="/login">Connexion</a>
          <a class="uppercase text-sm font-heading" href="/sign_up">S'inscrire</a>

        </div>
      </div>
    </section>

    <section class="bg-white ">
      <div class="py-14 container mx-auto">
        <div class="flex flex-row justify-center text-center items-center">
          <div class="w-2/12 flex justify-start">
            <img src="../assets/images/logo16.png" alt="" height="0" width="225" />
          </div>
          <div class="flex w-1/12 "></div>
          <div class="flex border w-6/12 justify-center ">
            <div class=" flex bg-gray-100 w-full">
              <select class="outline-none rounded-none  w-3/12 ps-2  bg-gray-100">
                <option value="categories">All Category</option>
              </select>
              <div class="border border-gray- my-2 mx-2 "></div>
              <input type="search" class="grow outline-none bg-gray-100 text-black placeholder:text-black"
                placeholder="Search here ..." />
              <button
                class="btn btn-xssm:btn-sm md:btn-md lg:w-[20%] bg-[#E01520] rounded-none text-white uppercase hover:bg-black  py-2">
                Search
              </button>
            </div>
          </div>

          <div class="flex ms-8 gap-5 w-3/12 justify-end">
            <div class="flex flex-row  hover:text-[#E01520]  cursor-pointer ">
              <div class="border border-gray-100 rounded-full py-2 text-center justify-center items-center  h-12 w-12 ">
                <svg class="flex flex-row overflow-hidden fill-current mx-auto my-auto "
                  xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="30px" fill="#5f6368">
                  <path
                    d="M795-120q-116 0-236.5-56T335-335Q232-438 176-558.5T120-795q0-19.29 12.86-32.14Q145.71-840 165-840h140q14 0 24 10t14 25l26.93 125.64Q372-665 369.5-653.5t-10.73 19.73L259-533q26 44 55 82t64 72q37 38 78 69.5t86 55.5l95-98q10-11 23.15-15 13.15-4 25.85-2l119 26q15 4 25 16.04 10 12.05 10 26.96v135q0 19.29-12.86 32.14Q814.29-120 795-120ZM229-588l81-82-23-110H180q2 42 13.5 88.5T229-588Zm369 363q41 19 89 31t93 14v-107l-103-21-79 83ZM229-588Zm369 363Z" />
                </svg>
              </div>
              <div class="text-sm ms-4">
                <p class=" text-left mt-2">CALL</p>
                <p class="">657-779-342</p>
              </div>

            </div>
            <div class="flex flex-row hover:text-[#E01520] cursor-pointer">
              <div
                class=" flex border border-gray-100 rounded-full py-2 text-center justify-center  h-12 w-12 hover:text-black ">
                <svg class="fill-current " xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960"
                  width="30px" fill="#5f6368">
                  <path
                    d="M286.79-81Q257-81 236-102.21t-21-51Q215-183 236.21-204t51-21Q317-225 338-203.79t21 51Q359-123 337.79-102t-51 21Zm400 0Q657-81 636-102.21t-21-51Q615-183 636.21-204t51-21Q717-225 738-203.79t21 51Q759-123 737.79-102t-51 21ZM235-741l110 228h288l125-228H235Zm-30-60h589.07q22.97 0 34.95 21 11.98 21-.02 42L694-495q-11 19-28.56 30.5T627-453H324l-56 104h491v60H277q-42 0-60.5-28t.5-63l64-118-152-322H51v-60h117l37 79Zm140 288h288-288Z" />
                </svg>
              </div>
              <div class="text-sm ms-4">
                <p class="text-left mt-2">Chariot</p>
                <p class="text-left font-bold">0 articles</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>

    <section>
      <div class="bg-[#24303F]">
        <div class="container flex flex-row  md:container md:mx-auto">
          <div class="flex justify-center bg-[#E01520] items-center uppercase py-2 w-60">
            <span class="text-white me-10">
              Categories
            </span>
            <svg class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="40px" viewBox="0 -960 960 960"
              width="30px" fill="#FFFFFF">
              <path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
            </svg>
          </div>

          <div class=" flex text-white items-center justify-center ms-5 top-menu">
            <div class="py-1  border-e border-gray-800">
              <a href="" class="dropdown-item" data-depth="0">ACCUEIL</a>
            </div>
            <div class=" py-1 border-e border-gray-800"><a href="" class="dropdown-item" data-depth="0">LIVRAISON</a>
            </div>
            <div class="py-1 border-e border-gray-800"><a href="" class="dropdown-item" data-depth="0">A
                PROPOS</a></div>
            <div class="py-1 border-e border-gray-800"><a href="" class="dropdown-item" data-depth="0">BLOG</a></div>
          </div>
        </div>
      </div>

    </section>
  </header>

</template>

<style scoped>
.top-menu a[data-depth="0"] {
  color: #fff;
  padding: 30px 20px 19px;
  text-transform: uppercase;
  font-size: 13px;
  position: relative;
  transition: all 0.45s ease 0s;
  -webkit-transition: all 0.45s ease 0s;
  -moz-transition: all 0.45s ease 0s;
  -o-transition: all 0.45s ease 0s
}

.top-menu a[data-depth="0"]::before {
  content: "";
  position: absolute;
  left: auto;
  right: -9px;
  bottom: 0;
  top: 0;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 10px 0 0 10px;
  border-color: transparent transparent transparent #E01520;
  transition: all 0.45s ease 0s;
  -webkit-transition: all 0.45s ease 0s;
  -moz-transition: all 0.45s ease 0s;
  -o-transition: all 0.45s ease 0s;
  opacity: 0
}

.top-menu a[data-depth="0"]:hover {
  background: #E01520;
  color: #fff;
  transition: all 0.45s ease 0s;
  -webkit-transition: all 0.45s ease 0s;
  -moz-transition: all 0.45s ease 0s;
  -o-transition: all 0.45s ease 0s
}

.top-menu a[data-depth="0"]:hover:before {
  opacity: 1;
  transition: all 0.45s ease 0s;
  -webkit-transition: all 0.45s ease 0s;
  -moz-transition: all 0.45s ease 0s;
  -o-transition: all 0.45s ease 0s
}
</style>
