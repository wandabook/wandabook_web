<script setup lang="ts" type="module">
import axios from 'axios'
import { ref } from 'vue';
import router from '../router';
import { useI18n } from "vue-i18n";
import { addNewUser, createNewUser, deletePatron, getPatron } from '../lib/appwrite';

const { t } = useI18n()
const isAnnual = ref(false);
const isCreation = ref(false);
const isSuccess = ref(false);
const errorMessage = ref("");
const isLoading = ref(false);
const message = ref('Recuperation des données du serveur')
const transactionId = router.currentRoute.value.params.transaction_id
const checkPaymentStatus = async () => {
    isLoading.value = true;
    const payload = {
        transaction_id: transactionId,// "62876125", // Entrez votre transaction_id
        apikey: import.meta.env.VITE_APP_CINET_PAY_KEY, // Votre APIKEY
        site_id: parseInt(import.meta.env.VITE_APP_CINET_PAY_SITE_Id), // Votre Site ID
    }
    try {
        axios.post(
            'https://api-checkout.cinetpay.com/v2/payment/check',
            payload,
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        ).then(async function (response) {
            console.log(JSON.stringify(response.data));
            console.log('response.data', response.data);

            const cinetInformation = response.data;
            if (cinetInformation.data.status === "ACCEPTED") {
                const jsonString = decodeURIComponent(escape(atob(cinetInformation.data.metadata)));
                const userRecord = JSON.parse(jsonString);
                console.log('userRecord', userRecord);
                await createUserAccount(userRecord);
            } else {
                message.value = t("PAYMENT_FAILED");
                isLoading.value = false
            }

        })
            .catch(function (error) {
                console.log(error);
                isLoading.value = false;
            });

    } catch (error) {
        console.error("Erreur lors de la vérification :", error)
    }
}

const createUserAccount = async (userInfo: any) => {
    message.value = "Creating patron"
    const user = {
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
        notification_email: userInfo.notification_email,
        password: userInfo.password,
        phone: userInfo.phone,
        address1: userInfo.address1,
        city: userInfo.city,
        cni: userInfo.cni,
        patron_id: userInfo.patron_id,
        tags: userInfo.tags,

    };
    isLoading.value = true;

    const result = await addNewUser(JSON.stringify(user));
    if (result.status === 'failed') {
        message.value = t('error_occur');
        console.log('executions', result);
    } else if (result.status === 'completed') {
        const response = JSON.parse(result.responseBody);
        if (response.result && response.result.error) {
            message.value = t('error_occur');
            console.log("error", response.result.error);
            if (response.result.error.includes('email duplicate')) {
                message.value = t('has_account');
                isLoading.value = false;
                return
            }
        } else {
            await createWandaUser(response.result.barcode, userInfo);
        }
    }
    isLoading.value = false;
}

const createWandaUser = async (barcode: any, userInfo: any) => {
    message.value = "Creating user"
    let userRecord = {
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
        email: userInfo.email,
        phone: userInfo.phone,
        address: userInfo.address,
        city: userInfo.city,
        freeze: false,
        barcode: barcode,
        cni: userInfo.cni,
        subscriptionPlan: userInfo.subscriptionPlan,
        lastSubcriptionDate: userInfo.lastSubcriptionDate,
        endSubscriptionDate: userInfo.endSubscriptionDate,
        readCondition: userInfo.readCondition,
        isAnnual: userInfo.isAnnual
    };
    try {
        const userResult = await createNewUser(userRecord);
        console.log(userResult);
        window.open("https://www.libib.com/u/wandabook")
    } catch (e) {
        console.log("error", e);
        message.value = t('error_occur');
        const result = await deletePatron(JSON.stringify({
            barcode: barcode
        }));
        isLoading.value = false;
    }


}
checkPaymentStatus();
</script>

<template>
    <div class="flex items-center justify-center h-screen w-full bg-white flex-col" v-if="isLoading">
        <!-- Spinner -->
        <div class="animate-spin rounded-full h-16 w-16 border-4 bg-brand-default border-t-transparent"></div>

        <!-- Message -->
        <p class="mt-4 text-gray-600 text-lg">{{ message }}</p>
    </div>
    <div class="flex items-center justify-center h-screen w-full bg-white flex-col ">
        <img src="@/assets/default/failed.png" class="h-20" />
        <p class="mt-4 text-lg text-red-600 w-96 text-center">{{ message }}</p>
        <a href="https://www.libib.com/u/wandabook" class="text-brand-default">{{ t('navigate_to') }}</a>
    </div>
</template>

<style></style>