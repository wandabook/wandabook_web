<template>



    <section class="w-full">
        <div class="w-full px-6 md:px-20 xl:px-40 py-24 max-w-[1440px] mx-auto">
            <h3
                class="text-[32px] lg:text-[42px] text-brand-dark-blu capitalize text-center lg:text-left mb-8 lg:mb-12 font-thin">
                Pricing
            </h3>
            <p class="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl font-heading">The right price for
                you, whoever
                you are</p>
            <div class="flex justify-center max-w-[14rem] m-auto mb-8 lg:mb-5 mt-10">
                <div class="relative flex w-full p-1 bg-brand-default dark:bg-slate-900 rounded-full">
                    <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                        <span
                            class="absolute inset-0 w-1/2 bg-red-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"
                            :class="isAnnual ? 'translate-x-0' : 'translate-x-full'"></span>
                    </span>
                    <button
                        class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                        :class="isAnnual ? 'text-white' : 'text-white dark:text-slate-400'" @click="isAnnual = true"
                        :aria-pressed="isAnnual">Yearly <span
                            :class="isAnnual ? 'text-indigo-200' : 'text-white dark:text-slate-500'">-20%</span></button>
                    <button
                        class="relative flex-1 text-sm font-medium h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                        :class="isAnnual ? 'text-white dark:text-slate-400' : 'text-white'" @click="isAnnual = false"
                        :aria-pressed="isAnnual">Monthly</button>
                </div>
            </div>
            <div class="relative isolate bg-white md:px-6 py-5 sm:py-10 lg:px-8">
                <div
                    class="mx-auto mt-1 grid max-w-lg grid-cols-2 items-center gap-y-6 lg:mt-1 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 space-x-3">
                    <div v-for="(tier, tierIdx) in tiers" :key="tier.id"
                        :class="['relative shadow-2xl md:mx-5', 'lg:rounded-t-3xl lg:rounded-tr-3xl', 'rounded-3xl md:p-8 p-3 ring-1 ring-gray-900/10 sm:p-10']">
                        <h3 :id="tier.id"
                            :class="[tier.featured ? 'text-indigo-400' : 'text-indigo-600', 'text-base font-semibold leading-7']">
                            {{ tier.name }}</h3>
                        <p class="mt-4 flex items-baseline gap-x-2" v-if="isAnnual">
                            <span :class="['text-gray-900', 'md:text-5xl text-sm font-bold tracking-tight']">{{
                                tier.priceYearly }}</span>
                            <span :class="['text-gray-500', 'md:text-base text-sm']">/year</span>
                        </p>
                        <p class="mt-4 flex items-baseline gap-x-2" v-else>
                            <span :class="['text-gray-900', 'lg:text-5xl text-sm font-bold tracking-tight']">{{
                                tier.priceMonthly }}</span>
                            <span :class="['text-gray-500', 'md:text-base  text-sm']">/month</span>
                        </p>
                        <p :class="['text-gray-600', 'md:mt-6 mt-2 md:text-base text-sm leading-7']">{{
                            tier.description }}</p>
                        <ul role="list"
                            :class="['text-gray-600', 'md:mt-8 mt-2 md:space-y-3 space-x-1 text-sm leading-6 sm:mt-10']">
                            <li v-for="feature in tier.features" :key="feature" class="flex gap-x-3">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                    stroke-width="1.5" stroke="currentColor" class="w-3 md:w-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                                </svg>

                                {{ feature }}
                            </li>
                        </ul>
                        <a :aria-describedby="tier.id" @click="isCreation = true"
                            :class="['bg-red-600 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline-indigo-500', 'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10']">Get
                            started today</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="isCreation">
        <!--
    Background backdrop, show/hide based on modal state.

    Entering: "ease-out duration-300"
      From: "opacity-0"
      To: "opacity-100"
    Leaving: "ease-in duration-200"
      From: "opacity-100"
      To: "opacity-0"
  -->
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <!--
        Modal panel, show/hide based on modal state.

        Entering: "ease-out duration-300"
          From: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          To: "opacity-100 translate-y-0 sm:scale-100"
        Leaving: "ease-in duration-200"
          From: "opacity-100 translate-y-0 sm:scale-100"
          To: "opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      -->
                <div
                    class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <form @submit.prevent="createUserAccount">
                        <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                            <div class="sm:flex sm:items-start">

                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-heading leading-6 text-gray-900" id="modal-title">Create
                                        account</h3>
                                    <div class="mt-3">
                                        <div v-if="errorMessage" class="text-red-700">
                                            {{ errorMessage }}
                                        </div>
                                    </div>
                                    <div class="mt-10">
                                        <div class=" mb-4 rounded-lg px-0 text-left">
                                            <div class="flex justify-between flex-wrap">
                                                <div class="mb-4 w-full md:w-5/12"><label
                                                        class="mb-2 block text-sm font-bold" for="firstname">First
                                                        Name</label>
                                                    <WInput :required="true" id="firstname" v-model="user.first_name" />
                                                </div>
                                                <div class="mb-4 md:w-6/12 w-full"><label
                                                        class="mb-2 block text-sm font-bold" for="lastname">Last
                                                        Name</label>
                                                    <WInput :required="true" id="lastname" v-model="user.last_name" />
                                                </div>
                                            </div>
                                            <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                    for="email">E-mail</label>
                                                <WInput type="email" :required="true" id="email" v-model="user.email" />
                                            </div>
                                            <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                    for="phone">Phone</label>
                                                <WInput type="text" :required="true" id="phone" v-model="user.phone" />
                                            </div>
                                            <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                    for="address">Address</label>
                                                <WInput type="text" :required="true" id="address"
                                                    v-model="user.address1" />
                                            </div>
                                            <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                    for="city">City</label>
                                                <WInput type="text" :required="true" id="city" v-model="user.city" />
                                            </div>
                                            <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                    for="cni">CNI</label>
                                                <WInput type="text" :required="true" id="cni" v-model="user.cni" />
                                            </div>

                                            <div class="mb-4"><label class="mb-2 block text-sm font-bold"
                                                    for="password">Password</label>
                                                <WInput type="password" :required="true"
                                                    placeholder="******************" id="password"
                                                    v-model="user.password" />
                                            </div>
                                            <div class="mb-4"><label class="mb-2 block text-sm font-bold"
                                                    for="confirm_password">Confirm
                                                    Password</label>
                                                <WInput type="password" :required="true"
                                                    placeholder="******************" v-model="confirm_pass"
                                                    id="confirm_password" />
                                            </div>

                                            <div class="mb-6">
                                                <label class="mb-2 flex text-sm"><input type="checkbox" name="accept"
                                                        class="mr-2" :required="true" />
                                                    <div class="text-gray-800">
                                                        <p class="">
                                                            I accept the
                                                            <a href="#"
                                                                class="cursor-pointer text-blue-500 underline">terms
                                                                of use</a>
                                                            and
                                                            <a href="#"
                                                                class="cursor-pointer text-blue-500 underline">privacy
                                                                policy</a>
                                                        </p>
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                            <button type="submit"
                                class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
                                <svg aria-hidden="true" role="status" v-if="isLoading"
                                    class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101"
                                    fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                        fill="#E5E7EB" />
                                    <path
                                        d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                        fill="currentColor" />
                                </svg>
                                Create account</button>
                            <button type="button" @click="isCreation = false"
                                class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                                Cancel</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>


</template>

<script setup lang="ts">
import { ref } from 'vue';

const isAnnual = ref(false);
const isCreation = ref(false);
const errorMessage = ref("");
const tiers = [
    {
        name: 'Basic',
        id: 'tier-basic',
        href: '/create_account',
        priceMonthly: 'XAF 2000',
        priceYearly: 'XAF 20000',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Book limit per loan: 1',
            'Unlimited borrowing',
            '24/24 assistance ',
        ],
        featured: true,
    },
    {
        name: 'Standard',
        id: 'tier-standard',
        href: '/create_account',
        priceMonthly: 'XAF 5000',
        priceYearly: 'XAF 50000',
        description: 'Dedicated support and infrastructure for your company.',
        features: [
            'Book limit per loan: 3',
            'Unlimited borrowing',
            '24/24 assistance ',
        ],
        featured: true,
    },

]
import WInput from '../components/ui/WInput.vue';
import { startPayment } from '../cinetpays_service';
import type { PaymentData } from 'cinetpay-node-sdk';
import { addNewUser } from '../lib/appwrite';
const isLoading = ref(false);
const createUserAccount = async () => {
    console.log('information about the users', user.value);
    errorMessage.value = "";
    if (confirm_pass.value === user.value.password) {
        isLoading.value = true;
        user.value.notification_email = user.value.email;
        console.log('This is the user information', user.value);
        const result = await addNewUser(JSON.stringify(user.value));
        console.log("Models.Execution: ", result.responseBody);
        console.log("result.errors: ", result.errors);
        console.log("result.status: ", result.status);
        if (result.status === 'failed') {
            errorMessage.value = 'an error occur. please try again or contact the support'
        } else if (result.status === 'completed') {
            const response = JSON.parse(result.responseBody);
            if (response.result && response.result.error) {
                errorMessage.value = 'an error occur. please try again or contact the support'
            } else {
                // Present the popup
                window.location.href = 'https://www.libib.com/u/wandabook'
            }
            // if the user is created succesfully, you I have to duisplay the record
        }
        console.log('message ', result);
        isLoading.value = false;
    }
}
const confirm_pass = ref('');
const user = ref({
    first_name: 'user',
    last_name: '',
    email: '',
    notification_email: '',
    password: '',
    phone: "",
    address1: "",
    city: '',
    cni: "",

});

const paymentData = <PaymentData>{
    transaction_id: '123456789',
    amount: 1000,
    currency: 'XAF',
    description: 'Achat de produits',
    notify_url: 'https://votresite.com/notify',
    return_url: 'https://votresite.com/return',
    customer_name: 'John Doe',
    customer_surname: 'Doe',
    customer_phone_number: '+123456789',
    customer_email: 'john.doe@example.com',
    customer_address: '123 Rue Exemple',
    customer_city: 'Abidjan',
    customer_country: 'CI',
    customer_state: 'État',
    customer_zip_code: '00000',
    channels: 'ALL', // ou 'CREDIT_CARD', 'MOBILE_MONEY', 'WALLET'
};
const pay = () => {
    startPayment(paymentData);
}
</script>