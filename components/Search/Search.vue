<template>
  <div class="flex flex-col justify-evenly flex-grow items-center p-6 bg-white rounded-xl shadow-lg lg:flex-row">
    <div class="flex w-3/4 ml-6 items-center bg-gray-100 text-gray-700 placeholder-gray-400 transition-all duration-150 ease-linear p-4 space-x-4">
      <input class="bg-gray-100 outline-none" type="text" placeholder="Search..." />

    </div>
    <v-select class="bg-white w-32"></v-select>
    <div class="md:flex space-x-6 py-3 px-4 rounded-lg">
      <button class="bg-gray-800 py-2 px-8 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer">
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search"
}
</script>

<style scoped>

</style>
