<template>



    <section class="w-full hidden md:block bg-white">
        <div class="w-full max-w-[1440px] mx-auto">
            <h3 class="text-xl px-5 text-left capitalize font-heading">
                {{ t('price') }}
            </h3>
            <div class="flex justify-center max-w-[14rem] m-auto mb-2  mt-2">
                <div class="relative flex w-full p-1 bg-brand-default dark:bg-slate-900 rounded-full">
                    <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                        <span
                            class="absolute inset-0 w-1/2 bg-red-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"
                            :class="isAnnual ? 'translate-x-full' : 'translate-x-0'"></span>
                    </span>
                    <button
                        class="relative uppercase font-bold flex-1 text-sm h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                        :class="isAnnual ? 'text-white dark:text-slate-400 ' : 'text-white'" @click="isAnnual = false"
                        :aria-pressed="isAnnual">{{ t('monthly') }}</button>
                    <button
                        class="  uppercase font-bold relative flex-1 text-sm h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                        :class="isAnnual ? 'text-white' : 'text-white dark:text-slate-400 '" @click="isAnnual = true"
                        :aria-pressed="isAnnual">{{ t('yearly') }}</button>
                </div>
            </div>
            <div class="relative isolate bg-white md:px-6 py-5 px-5">
                <div class="mx-auto mt-1 grid  grid-cols-3 items-center gap-1">
                    <div v-for="(tier, tierIdx) in subscriptions" :key="tier.id" @click="onSelectSubscription(tier)"
                        :class="['relative md:mx-5 cursor-pointer', 'rounded-3xl p-3 ring-1 ring-gray-900/10 ']">
                        <h3 :id="tier.id" :class="['text-brand-default font-extrabold uppercase  text-sm']">
                            {{ t(tier.title) }}</h3>
                        <div class="mt-2">{{ t('unlimited') }}</div>
                        <p class="mt-2 flex items-baseline" v-if="isAnnual">
                            <span :class="['text-gray-900', ' text-sm font-bold tracking-tight']">{{
                                new Intl.NumberFormat('fr-CM', { style: 'currency', currency: 'XAF' }).format(
                                    tier.yearly_amount,
                                )
                            }}</span>
                        </p>
                        <p class="mt-2 flex items-baseline" v-else>
                            <span :class="['text-gray-900', '  text-sm font-bold tracking-tight']">{{
                                new Intl.NumberFormat('fr-CM', { style: 'currency', currency: 'XAF' }).format(
                                    tier.monthly_amount,
                                )
                            }}</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <!--Mobile app-->
    <section class="w-full md:hidden bg-white">
        <div class="w-full max-w-[1440px] mx-auto">
            <h3 class="text-xl px-5 text-left capitalize font-heading">
                {{ t('price') }}
            </h3>
            <div class="flex justify-center max-w-[14rem] m-auto mb-2  mt-2">
                <div class="relative flex w-full p-1 bg-brand-default dark:bg-slate-900 rounded-full">
                    <span class="absolute inset-0 m-1 pointer-events-none" aria-hidden="true">
                        <span
                            class="absolute inset-0 w-1/2 bg-red-500 rounded-full shadow-sm shadow-indigo-950/10 transform transition-transform duration-150 ease-in-out"
                            :class="isAnnual ? 'translate-x-full' : 'translate-x-0'"></span>
                    </span>
                    <button
                        class="relative uppercase font-bold flex-1 text-sm h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                        :class="isAnnual ? 'text-white dark:text-slate-400 ' : 'text-white'" @click="isAnnual = false"
                        :aria-pressed="isAnnual">{{ t('monthly') }}</button>
                    <button
                        class="  uppercase font-bold relative flex-1 text-sm h-8 rounded-full focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150 ease-in-out"
                        :class="isAnnual ? 'text-white' : 'text-white dark:text-slate-400 '" @click="isAnnual = true"
                        :aria-pressed="isAnnual">{{ t('yearly') }}</button>
                </div>
            </div>
            <div class="relative isolate bg-white md:px-6 py-5 px-5">
                <div
                    class="mx-auto mt-1 grid max-w-lg grid-cols-3 items-center gap-y-6 lg:mt-1 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2 space-x-2">
                    <div v-for="(tier, tierIdx) in subscriptions" :key="tier.id" @click="onSelectSubscription(tier)"
                        :class="['relative md:mx-5', 'rounded-3xl p-3 ring-1 ring-gray-900/10 sm:p-10']">
                        <h3 :id="tier.id" :class="['text-brand-default font-extrabold uppercase  text-sm']">
                            {{ t(tier.title) }}</h3>
                        <div class="mt-2">{{ t('unlimited') }}</div>
                        <p class="mt-2 flex items-baseline gap-x-2" v-if="isAnnual">
                            <span :class="['text-gray-900', 'md:text-5xl text-sm font-bold tracking-tight']">{{
                                new Intl.NumberFormat('fr-CM', { style: 'currency', currency: 'XAF' }).format(
                                    tier.yearly_amount,
                                )
                            }}</span>
                        </p>
                        <p class="mt-2 flex items-baseline gap-x-2" v-else>
                            <span :class="['text-gray-900', 'lg:text-5xl text-sm font-bold tracking-tight']">{{
                                new Intl.NumberFormat('fr-CM', { style: 'currency', currency: 'XAF' }).format(
                                    tier.monthly_amount,
                                )
                            }}</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </section>

</template>
<script setup lang="ts" type="module">
import { ref } from 'vue';
import { editDocumentGlobal, getDocumentsGlobal } from '@/lib/appwrite';
import { patronCollection, subscriptionCollection } from '@/utilities/constants';
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
const isAnnual = ref(false);


const subscriptions = ref();

const fetchSubscriptions = async () => {
    const result = await getDocumentsGlobal(subscriptionCollection);
    if (result.documents != null && result.documents.length > 0) {
        subscriptions.value = result.documents;
    } else {
        subscriptions.value = [];
    }
    console.log(result);
}
const selectedSubscription = ref();
declare global {
    interface Window {
        CinetPay: any; // Typage de CinetPay si le SDK est chargé dans window
    }
}

const props = defineProps({
    user: {
        type: Object,
        required: true
    }
});
const emits = defineEmits(['close'])
const renewUser = async () => {
    // Get the current date
    const now = new Date();

    // Now + 1 month
    const oneMonthLater = new Date(now);
    oneMonthLater.setMonth(now.getMonth() + 1);

    // Now + 1 year
    const oneYearLater = new Date(now);
    oneYearLater.setFullYear(now.getFullYear() + 1);
    let userRecord = {
        freeze: false,
        lastSubcriptionDate: new Date(now),
        endSubscriptionDate: isAnnual.value ? oneYearLater : oneMonthLater,
        readCondition: true,
        isAnnual: isAnnual.value,
        subscriptionPlan: selectedSubscription.value.$id,
    };
    const result = await editDocumentGlobal(patronCollection, props.user.$id, userRecord);
    emits('close');
}
const onSelectSubscription = (tier: any) => {
    selectedSubscription.value = tier;
    pay();
}

fetchSubscriptions();

const pay = () => {
    window.CinetPay.setConfig({
        apikey: import.meta.env.VITE_APP_CINET_PAY_KEY, // Votre APIKEY
        site_id: parseInt(import.meta.env.VITE_APP_CINET_PAY_SITE_Id), // Votre Site ID
        notify_url: 'http://mondomaine.com/notify/',
        mode: 'PRODUCTION',
    });
    window.CinetPay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(),
        amount: isAnnual.value ? selectedSubscription.value.yearly_amount : selectedSubscription.value.monthly_amount,
        currency: 'XAF',
        channels: 'ALL',
        description: `change sucrption plan to ${selectedSubscription.value.description}`,
        customer_name: props.user?.last_name,
        customer_surname: props.user.first_name,
        customer_email: props.user.email,
        customer_phone_number: props.user.phone,
        customer_address: props.user.address1,
        customer_city: props.user.city,
        customer_country: 'CM',
        customer_state: 'CM',
        // customer_zip_code: '06510',
    });

    window.CinetPay.waitResponse((data: { status: string }) => {
        console.log('data value', data);
        if (data.status === 'REFUSED') {
            renewUser();
        } else if (data.status === 'ACCEPTED') {
            renewUser();;
        }
    });

    window.CinetPay.onError((data: any) => {
        console.error('Erreur CinetPay:', data);
    });

}
</script>