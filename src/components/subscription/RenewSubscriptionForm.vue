<script setup lang="ts">
import { ref } from 'vue';
import WInput from '../ui/WInput.vue';
import { editDocumentGlobal, getDocumentsWithFilerGlobal } from '../../lib/appwrite';
import { bookCollection, patronCollection } from '../../utilities/constants';
import { Query } from 'appwrite';
import showAlert from '../../helpers/alert';
import { useI18n } from "vue-i18n";
import PricingComponent from '../PricingComponent.vue';
import PricingOption from './PricingOption.vue';
const { t } = useI18n({ useScope: "global" });
const patronInfo = ref<any>();
const foundUser = ref(false);
const isSuccess = ref(false)
const emit = defineEmits(['close'])
const user = ref({
    barcode: '',
    email: "",
})
const isLoading = ref(false);
const isChange = ref(false);
const findAccount = async () => {
    let users = <any>[];
    isLoading.value = true;
    const result = await getDocumentsWithFilerGlobal(patronCollection, [Query.or([Query.equal('barcode', user.value.barcode), Query.equal('email', user.value.email)])]);
    if (result.documents != null && result.documents.length > 0) {
        users = result.documents;
    }
    if (users.length == 0) {
        showAlert('warning', t("no_user_found"));
    } else {
        foundUser.value = true;
        patronInfo.value = users[0];
    }
    console.log(result);

    isLoading.value = false;
}

const pay = () => {
    // console.log('import.meta.env.VITE_APP_CINET_PAY_SITE_Id', import.meta.env.VITE_APP_CINET_PAY_SITE_Id);
    window.CinetPay.setConfig({
        apikey: import.meta.env.VITE_APP_CINET_PAY_KEY, // Votre APIKEY
        site_id: parseInt(import.meta.env.VITE_APP_CINET_PAY_SITE_Id), // Votre Site ID
        notify_url: 'http://mondomaine.com/notify/',
        mode: 'PRODUCTION',
    });
    window.CinetPay.getCheckout({
        transaction_id: Math.floor(Math.random() * 100000000).toString(),
        amount: patronInfo.value.subscriptionPlan?.isAnnual ? patronInfo.value.subscriptionPlan.yearly_amount : patronInfo.value.subscriptionPlan.monthly_amount,
        currency: 'XAF',
        channels: 'ALL',
        description: `Paiement of ${patronInfo.value.subscriptionPlan.description}`,
        customer_name: patronInfo.value.last_name,
        customer_surname: patronInfo.value.first_name,
        customer_email: patronInfo.value.email,
        customer_phone_number: patronInfo.value.phone,
        customer_address: patronInfo.value.address1,
        customer_city: patronInfo.value.city,
        customer_country: 'CM',
        customer_state: 'CM',
        // customer_zip_code: '06510',
    });

    window.CinetPay.waitResponse((data: { status: string }) => {
        console.log('data value', data);
        if (data.status === 'REFUSED') {
            showAlert("error", 'Votre paiement a échoué');
            renewUser()
        } else if (data.status === 'ACCEPTED') {
            showAlert('success', "payment effectué")
            renewUser()
        }
    });

    window.CinetPay.onError((data: any) => {
        console.error('Erreur CinetPay:', data);
    });

}

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
        endSubscriptionDate: patronInfo.value.isAnnual ? oneYearLater : oneMonthLater,
        readCondition: true,
        isAnnual: patronInfo.value.isAnnual
    };

    const result = await editDocumentGlobal(patronCollection, patronInfo.value.$id, userRecord);
    console.log('result', result)
    cancel();
}
const cancel = () => {
    emit('close')
}
const done = () => {
    isChange.value = false;
    isSuccess.value = true;
    foundUser.value = false
}
const redirectToLogin = () => {
    window.location.href = 'https://www.libib.com/u/wandabook' // Assuming your login route is named "login"
};
</script>

<template>
    <template v-if="!isChange && !isSuccess">
        <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="!foundUser">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-7 sm:w-full sm:max-w-lg">
                        <form @submit.prevent="findAccount">
                            <div class="bg-white px-4 sm:p-6 sm:pb-2">
                                <div class="sm:flex sm:items-start">
                                    <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                        <h3 class="text-base font-heading leading-6 text-gray-900 mb-5"
                                            id="modal-title">{{
                                                $t('renew_subscription') }}</h3>
                                        <div class="mt-1">
                                            <div class="mb-1 rounded-lg px-0 text-left">

                                                <div class="flex justify-between flex-wrap">
                                                    <div class="mb-2  w-5/12"><label
                                                            class="mb-2 block text-sm font-bold" for="barcode">{{
                                                                $t('barcode') }}</label>
                                                        <WInput :required="true" id="barcode" v-model="user.barcode" />
                                                    </div>
                                                    <div class="mb-2 w-6/12"><label class="mb-2 block text-sm font-bold"
                                                            for="email">{{
                                                                $t('email') }}</label>
                                                        <WInput :required="false" id="email" v-model="user.email" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="md:bg-gray-50 px-4 py-3 flex flex-row sm:px-6 justify-between w-full">
                                <button type="button" @click="cancel"
                                    class="mt-2 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                                    {{ $t('cancel') }}</button>
                                <button type="submit"
                                    class=" justify-center rounded-md bg-brand-default px-3 py- text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
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
                                    {{ $t('find_account') }}</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true" v-if="foundUser">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-7 sm:w-full sm:max-w-lg">
                        <div class="bg-white px-4 sm:p-6 sm:pb-2">
                            <div class="sm:flex sm:items-start">
                                <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                    <h3 class="text-base font-heading leading-6 text-gray-900 mb-5" id="modal-title">{{
                                        $t('renew_subscription') }}</h3>
                                    <div class="mt-1">
                                        <div class="mb-1 rounded-lg px-0 text-left">
                                            <div class="grid grid-cols-2 gap-6">
                                                <div><strong>{{ $t('barcode') }}:</strong> {{ patronInfo.barcode }}
                                                </div>
                                                <div><strong>{{ $t('first_name') }}:</strong> {{ patronInfo.first_name
                                                    }}
                                                </div>
                                                <div><strong>{{ $t('last_name') }}:</strong> {{ patronInfo.last_name }}
                                                </div>
                                                <div><strong>{{ $t('email') }}:</strong> {{ patronInfo.email }}</div>
                                                <div><strong>{{ $t('phone') }}:</strong> {{ patronInfo.phone }}</div>
                                                <div><strong>{{ $t('subcription_Plan') }}:</strong> {{
                                                    patronInfo.subscriptionPlan?.title }}</div>
                                                <div><strong>{{ $t('duration_plan') }}:</strong> {{ patronInfo.isAnnual
                                                    ?
                                                    "Year" : "Month" }}</div>
                                                <div><strong>{{ $t('price') }}:</strong> {{ patronInfo.isAnnual
                                                    ?
                                                    new Intl.NumberFormat('fr-CM', {
                                                        style: 'currency', currency: 'XAF'
                                                    }).format(
                                                        patronInfo.subscriptionPlan?.yearly_amount,
                                                    ) :


                                                    new Intl.NumberFormat('fr-CM', {
                                                        style: 'currency', currency: 'XAF'
                                                    }).format(
                                                        patronInfo.subscriptionPlan?.monthly_amount,
                                                    )
                                                    }}</div>
                                                <div><strong>{{ $t('last_subscription') }}</strong> {{
                                                    new Intl.DateTimeFormat('fr-CM',

                                                    ).format(new Date(patronInfo.lastSubcriptionDate))

                                                }}</div>
                                                <div><strong>{{ $t('expired_date') }}:</strong>{{
                                                    new Intl.DateTimeFormat('fr-CM',

                                                    ).format(new Date(patronInfo.endSubscriptionDate))

                                                }} </div>
                                                <div><strong>{{ $t('address') }}:</strong> {{ patronInfo.address }}
                                                </div>
                                                <div><strong>{{ $t('NIC') }}:</strong> {{ patronInfo.cni }}</div>
                                                <div>
                                                    <strong>{{ $t('status') }}:</strong>
                                                    <span
                                                        :class="patronInfo.freeze ? 'text-red-500' : 'text-green-500'">
                                                        {{ patronInfo.freeze ? 'Frozen' : 'Active' }}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="md:bg-gray-50 px-4 py-3 flex flex-row sm:px-6 justify-between w-full">
                            <button type="button" @click="cancel"
                                class="mt-2 inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                                {{ $t('cancel') }}</button>
                            <button type="button" @click="isChange = true"
                                class=" justify-center rounded-md bg-brand-default px-3 py- text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
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
                                {{ $t('change_subscription_plan') }}</button>
                            <button type="button" @click="pay"
                                class=" justify-center rounded-md bg-brand-default px-3 py- text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">
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
                                {{ $t('renew') }}</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <template v-if="isChange">
        <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-7 sm:w-full sm:max-w-lg">
                        <div class="flex justify-end px-3" @click="isChange = false">
                            <button class="text-black w-8"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div class="bg-white py-3">
                            <PricingOption :user="patronInfo" @close="done" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
    <template v-if="isSuccess">
        <div class="relative z-50" aria-labelledby="modal-title" role="dialog" aria-modal="true">

            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div
                        class="relative transform overflow-hidden  text-left  transition-all sm:my-7 sm:w-full sm:max-w-lg">
                        <div class="min-h-screen flex items-center justify-center ">
                            <div class=" p-8 rounded-lg shadow-lg w-full max-w-md bg-white">
                                <!-- Success alert with Happy SVG -->
                                <div class="flex items-center space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-green-500"
                                        viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fill-rule="evenodd"
                                            d="M9 1a8 8 0 110 16A8 8 0 019 1zm0 14a6 6 0 100-12 6 6 0 000 12zm3.293-4.707a1 1 0 00-1.414 1.414L9 11.414l-2.879 2.879a1 1 0 00-1.414-1.414L9 9.707l4.293 4.293z"
                                            clip-rule="evenodd" />
                                    </svg>
                                    <div>
                                        <h1 class="text-xl font-semibold text-green-700">{{ $t('paymentSuccess') }}</h1>
                                        <p class="text-green-500 mt-2">{{ $t('paymentSuccessMessage') }}</p>
                                    </div>
                                </div>

                                <!-- Redirection Button -->
                                <div class="mt-6">
                                    <button @click="redirectToLogin"
                                        class="w-full bg-brand-default text-white py-2 rounded-lg hover:bg-brand-default/80 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                                        {{ $t('gotoLoginPage') }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<style></style>