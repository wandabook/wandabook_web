<template>
    <div class="min-h-screen  pt-16 ">
        <div class=" pt-20 p-6 bg-brand-default">
            <h2 class="text-2xl font-semibold text-center  uppercase text-white pb-4">{{ $t('contact.title') }}
            </h2>
            <p class="text-center text-gray-600 mt-2">{{ $t('contact.subtitle') }}</p>
            <p class="text-center text-gray-600">{{ $t('contact.opening_hours') }}</p>
        </div>
        <div class="flex items-center justify-center">
            <div class="w-full max-w-4xl bg-white p-6  ">

                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    <p class="text-gray-700"><strong>{{ $t('contact.description_label') }}</strong> {{
                        $t('contact.description') }}</p>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3980.854068068936!2d11.485873075859022!3d3.8414877485049197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x108bcfcf1afa0af5%3A0xad041dcc8c6d883!2sMarch%C3%A9%20Acacias!5e0!3m2!1sfr!2sde!4v1738575229069!5m2!1sfr!2sde"
                        class="h-36 w-full object-cover" style="border:0;" loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div class="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <p class="text-gray-700"><strong>{{ $t('contact.address_label') }}</strong> {{
                            $t('contact.address')
                        }}</p>
                        <p class="text-gray-700"><strong>{{ $t('contact.phone_label') }}</strong> {{ $t('contact.phone')
                        }}
                        </p>
                        <p class="text-gray-700"><strong>{{ $t('contact.email_label') }}</strong> {{ $t('contact.email')
                        }}
                        </p>
                    </div>
                    <form class="space-y-4">
                        <div>
                            <label class="block text-gray-700">{{ $t('contact.name_label') }}</label>
                            <input type="text" class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                                :placeholder="$t('contact.name_placeholder')" />
                        </div>
                        <div>
                            <label class="block text-gray-700">{{ $t('contact.email_label') }}</label>
                            <input type="email" class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300"
                                :placeholder="$t('contact.email_placeholder')" />
                        </div>
                        <div>
                            <label class="block text-gray-700">{{ $t('contact.message_label') }}</label>
                            <textarea class="w-full mt-1 p-2 border rounded-lg focus:ring focus:ring-blue-300" rows="4"
                                :placeholder="$t('contact.message_placeholder')"></textarea>
                        </div>
                        <button type="submit"
                            class="w-full bg-brand-default text-white p-2 rounded-lg hover:bg-blue-600">{{
                                $t('contact.submit') }}</button>
                    </form>
                </div>


            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<style scoped></style>
