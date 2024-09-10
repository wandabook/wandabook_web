<template>
  <div class="lg:inline-flex space-x-2 hidden ">
    <div>
      <select class=" w-32 border-none focus:outline-none hover:font-semibold lg:text-lg bg-gray-50">
        <option v-for="(item, i) in langues" :key="i" :value="item.value">{{ item.langue }}</option>
      </select>
    </div>
    <div>
      <select class=" w-32 border-none focus:outline-none  hover:font-semibold lg:text-lg bg-gray-50">
        <option v-for="(item, i) in monnaies" :key="i" :value="item.value">{{ item.monnaie }}</option>
      </select>

    </div>

  </div>

</template>


<script setup>
const props = defineProps({
  langues: Array,
  monnaies: Array,
  Required: true
});

console.log(props.value);
</script>

<style scoped></style>