<script setup>

</script>

<template>
    <div class="bg-white w-screen font-sans text-gray-900 mb-8 mt-8">
        <header class="page-header px-24 font-bold text-xl">
            <h1>
                Créez votre compte
            </h1>
        </header>
        <div
            class="md:w-2/3 mx-auto w-full pb-0 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl mt-5 bg-gray-100">
            <p class="px-8 pt-5">Vous avez déjà un compte ? <a href="/login" class="hover:text-red-700">Connectez-vous
                    !</a></p>
            <form class=" mb-4 rounded-lg border border-gray-100 py-5 px-8">
                <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="email">Prénom</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="firstName" type="email" placeholder="email" required="" /><span class="my-2 block"></span>
                </div>
                <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="email">Nom</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="lastName" type="email" placeholder="email" required="" /><span class="my-2 block"></span>
                </div>
                <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="email">E-mail</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="email" type="email" placeholder="email" required="" /><span class="my-2 block"></span></div>
                <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="password">Password</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="password" type="password" placeholder="******************" required="" /></div>
                <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="password">Confirm
                        Password</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="confirm_pass" type="password" placeholder="******************" required="" /></div>

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
                        class="cursor-pointer rounded bg-[#E01520]  py-2 px-8 text-center text-lg font-bold  text-white"
                        type="submit">Create account</button>
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