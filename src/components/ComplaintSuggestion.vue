<template>
    <section class="mb-10">
        <div class="w-full px-6 md:px-20 xl:px-40 py-6 lg:py-2 max-w-[1440px] mx-auto">
            <div class="text-center">
                <h2 class="text-lg font-semibold text-gray-800">
                    {{ t('feedback.title') }}
                </h2>
                <p class="mt-2 text-gray-600">
                    {{ t('feedback.subtitle') }}
                </p>
                <button
                    class="  capitalize mt-4 px-4 py-2 bg-brand-default text-white rounded-lg shadow hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                    @click="openModal">
                    {{ t('feedback.button') }}
                </button>

                <!-- Modal -->
                <div v-if="showModal" class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                    <div class="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h3 class="text-lg font-semibold text-gray-800">
                            {{ t('feedback.modalTitle') }}
                        </h3>
                        <form @submit.prevent="submitFeedback" class="mt-4 space-y-4 text-left">
                            <!-- Name -->
                            <div>
                                <label for="name" class="block text-gray-700">{{ t('feedback.name') }}</label>
                                <WInput :required="true" id="firstname" v-model="formData.name" />
                            </div>
                            <!-- Subject -->
                            <div>
                                <label for="subject" class="block text-gray-700">{{ t('feedback.subject') }}</label>
                                <WInput :required="true" id="firstname" v-model="formData.subject" />
                            </div>
                            <!-- Description -->
                            <div>
                                <label for="description" class="block text-gray-700">{{ t('feedback.description')
                                }}</label>
                                <textarea id="description" v-model="formData.description"
                                    class="flex  w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    rows="4" required></textarea>
                            </div>
                            <!-- Submit Button -->
                            <div class="flex justify-end">
                                <button type="button"
                                    class="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg shadow hover:bg-gray-300"
                                    @click="closeModal">
                                    {{ t('feedback.cancel') }}
                                </button>
                                <button type="submit" :disabled="isCreation"
                                    class="ml-2 px-4 py-2 bg-brand-default text-white rounded-lg shadow hover:bg-brand-default flex gap-1">
                                    <svg aria-hidden="true" role="status" v-if="isCreation"
                                        class="inline w-4 h-4 me-3 text-white animate-spin" viewBox="0 0 100 101"
                                        fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                            fill="#E5E7EB" />
                                        <path
                                            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                            fill="currentColor" />
                                    </svg>
                                    {{ t('feedback.submit') }}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    </section>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import WInput from './ui/WInput.vue';
import { createDocumentGlobal } from '../lib/appwrite';
import { feedBackCollection } from '../utilities/constants';

// i18n instance
const { t } = useI18n();

// State
const showModal = ref(false);
const formData = ref({
    name: '',
    subject: '',
    description: '',
});

// Methods
const openModal = () => {
    showModal.value = true;
};

const closeModal = () => {
    showModal.value = false;
};
const isCreation = ref(false);
const submitFeedback = async () => {
    isCreation.value = true;
    try {
        await createDocumentGlobal(feedBackCollection, formData.value);
        // Reset form data and close modal
        formData.value = { name: '', subject: '', description: '' };
        showModal.value = false;
        alert(t('feedback.successMessage'));

    } catch (e) {
        console.error('Error creating feedback:', e);
        alert(t('feedback.successMessage'));
    } finally {
        isCreation.value = false;
    }


    // Notify user (optional)
};
</script>

<style scoped>
/* Optional: Add your styles here */
</style>
