<template>
  <div class=" bg-gray-100 flex items-center justify-center">
    <div class="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer">
      <div class="relative">
        <img class="w-48" src="https://covers.openlibrary.org/b/ISBN/1869504917-M.jpg" alt="imagen"/>
        <p class="absolute text-lg transform translate-x-5 -translate-y-20 bg-pink-600 text-white py-3 px-3 rounded-full cursor-pointer hover:scale-105 duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "view"
}
</script>

<style scoped>

</style>
