<script setup lang="ts">
import { ref } from 'vue';
import { createUser } from '@/views/service';
const isLoading = ref(false);
const adddNewUser = () => {

    if (confirm_pass.value === user.value.password) {
        isLoading.value = true;
        user.value.notification_email = user.value.email;
        createUser({});
        isLoading.value = false;
    }

}
const confirm_pass = ref('');
const user = ref({
    first_name: '',
    last_name: '',
    email: '',
    notification_email: '',
    password: ''
});
</script>

<template>
    <div class="bg-white w-screen font-sans text-gray-900 mb-8 mt-8">

        <div
            class="md:w-2/3 mx-auto w-full pb-0 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl mt-5 bg-gray-100">
            <p class="px-8 pt-5">Vous avez déjà un compte ? <a href="/login" class="hover:text-red-700">Connectez-vous
                    !</a></p>
            <form class=" mb-4 rounded-lg border border-gray-100 py-5 px-8" @submit.prevent="adddNewUser">
                <div class="flex justify-between">
                    <div class="mb-4 w-6/12"><label class="mb-2 block text-sm font-bold" for="email">First
                            Name</label><input
                            class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                            id="firstName" type="text" placeholder="First Name" required=""
                            v-model="user.first_name" /><span class="my-2 block"></span>
                    </div>
                    <div class="mb-4 w-6/12"><label class="mb-2 block text-sm font-bold" for="email">Last
                            Name</label><input
                            class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                            id="lastName" type="text" placeholder="Last Name" required=""
                            v-model="user.last_name" /><span class="my-2 block"></span>
                    </div>
                </div>
                <div class="mb-4"><label class=" mb-2 block text-sm font-bold" for="email">E-mail</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="email" type="email" placeholder="email" required="" v-model="user.email" /><span
                        class="my-2 block"></span></div>
                <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="password">Password</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="password" type="password" placeholder="******************" required=""
                        v-model="user.password" /></div>
                <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="password">Confirm
                        Password</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="confirm_pass" type="password" placeholder="******************" required=""
                        v-model="confirm_pass" /></div>

                <div class="mb-6">
                    <label class="mb-2 flex text-sm"><input type="checkbox" name="accept" class="mr-2" required="" />
                        <div class="text-gray-800">
                            <p class="">
                                I accept the
                                <a href="#" class="cursor-pointer text-blue-500 underline">terms of use</a>
                                and
                                <a href="#" class="cursor-pointer text-blue-500 underline">privacy policy</a>
                            </p>
                        </div>
                    </label>
                </div>
                <div class="flex items-center">
                    <div class="flex-1"></div>
                    <button
                        class="cursor-pointer rounded bg-[#E01520]  py-2 px-8 text-center text-lg font-bold  text-white flex self-center items-center align-middle justify-center"
                        type="submit">

                        <svg class="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg"
                            v-if="isLoading" fill="none" viewBox="0 0 24 24">
                            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4">
                            </circle>
                            <path class="opacity-75" fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z">
                            </path>
                        </svg>
                        <span>Create account</span></button>
                </div>
            </form>
        </div>
    </div>

</template>

<style>
.page-header h1 {
    padding: 15px;
    color: #000;
    background-color: #f4f4f4;
    margin: 0
}
</style>