<script setup lang="ts">
import { ref } from 'vue';
import { createUser } from '@/views/service';
import WInput from '../components/ui/WInput.vue';
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

    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
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
                    <div class="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                        <div class="sm:flex sm:items-start">

                            <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                                <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate
                                    account</h3>
                                <div class="mt-10">
                                    <form class=" mb-4 rounded-lg px-0" @submit.prevent="adddNewUser">
                                        <div class="flex justify-between">
                                            <div class="mb-4 w-5/12"><label class="mb-2 block text-sm font-bold"
                                                    for="firstname">First
                                                    Name</label>
                                                <WInput :required="true" id="firstname" />
                                            </div>
                                            <div class="mb-4 w-6/12"><label class="mb-2 block text-sm font-bold"
                                                    for="lastname">Last
                                                    Name</label>
                                                <WInput :required="true" id="lastname" />
                                            </div>
                                        </div>
                                        <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                for="email">E-mail</label>
                                            <WInput type="email" :required="true" id="email" />
                                        </div>
                                        <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                for="phone">Phone</label>
                                            <WInput type="text" :required="true" id="phone" />
                                        </div>
                                        <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                for="address">Address</label>
                                            <WInput type="text" :required="true" id="address" />
                                        </div>
                                        <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                for="city">City</label>
                                            <WInput type="text" :required="true" id="city" />
                                        </div>
                                        <div class="mb-4"><label class=" mb-2 block text-sm font-bold"
                                                for="cni">CNI</label>
                                            <WInput type="text" :required="true" id="cni" />
                                        </div>

                                        <div class="mb-4"><label class="mb-2 block text-sm font-bold"
                                                for="password">Password</label>
                                            <WInput type="password" :required="true" placeholder="******************"
                                                id="password" />
                                        </div>
                                        <div class="mb-4"><label class="mb-2 block text-sm font-bold"
                                                for="confirm_password">Confirm
                                                Password</label>
                                            <WInput type="password" :required="true" placeholder="******************"
                                                id="confirm_password" />
                                        </div>

                                        <div class="mb-6">
                                            <label class="mb-2 flex text-sm"><input type="checkbox" name="accept"
                                                    class="mr-2" :required="true" />
                                                <div class="text-gray-800">
                                                    <p class="">
                                                        I accept the
                                                        <a href="#" class="cursor-pointer text-blue-500 underline">terms
                                                            of use</a>
                                                        and
                                                        <a href="#"
                                                            class="cursor-pointer text-blue-500 underline">privacy
                                                            policy</a>
                                                    </p>
                                                </div>
                                            </label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                        <button type="button"
                            class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Create
                            account</button>
                        <button type="button"
                            class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                            Cancel</button>
                    </div>
                </div>
            </div>
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