<script setup>

</script>

<template>
    <div class="bg-white w-screen font-sans text-gray-900 container md:mx-auto">
        <header class="page-header pt-5 font-bold text-xl">
            <h1>
                Connection
            </h1>
        </header>
        <div
            class="md:w-2/3 mx-auto w-full pb-0 sm:max-w-screen-sm md:max-w-screen-md lg:w-1/3 lg:max-w-screen-lg xl:max-w-screen-xl mt-5 bg-gray-100">
            <p class="px-8 pt-5">Vous n'avez pas de compte ? <a href="/sign_up" class="hover:text-red-700">Creez votre
                    compte
                    !</a></p>
            <form class=" mb-4 rounded-lg border border-gray-100 py-5 px-8">

                <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="email">E-mail</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="email" type="email" placeholder="email" required="" /><span class="my-2 block"></span></div>
                <div class="mb-4"><label class="mb-2 block text-sm font-bold" for="password">Password</label><input
                        class="shadow-sm w-full cursor-text appearance-none rounded border border-gray-300 py-2 px-3 leading-tight outline-none ring-blue-500 focus:ring"
                        id="password" type="password" placeholder="******************" required="" /></div>

                <div class="flex items-center">
                    <div class="flex-1"></div>
                    <button
                        class="cursor-pointer rounded bg-[#E01520]  py-2 px-8 text-center text-lg font-bold  text-white"
                        type="submit">Connection</button>
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