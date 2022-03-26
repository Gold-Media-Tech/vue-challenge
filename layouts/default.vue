<template>
  <body class="bg-white">
  <header>
    <nav class="p-6">
      <div class="flex justify-between items-center">
        <h1 class="pr-6 border-r-2 text-2xl font-bold text-gray-800">Books search</h1>
      </div>
    </nav>
    <!-- Section Hero -->
    <!--    <div class="container mx-auto bg-gray-400 h-96 rounded-md flex items-center">
          <div class="sm:ml-20 text-gray-50 text-center sm:text-left">
            <h1 class="text-5xl font-bold mb-4">
              Book saunas <br />
              everywhere.
            </h1>
            <p class="text-lg inline-block sm:block">The largest online community to rent saunas in Finland.</p>
            <button class="mt-8 px-4 py-2 bg-gray-600 rounded">Browse saunas</button>
          </div>
        </div>-->
  </header>
  <main class="py-16 container mx-auto px-6 md:px-0">
    <Nuxt/>
  </main>

  </body>
</template>

<script>
export default {
  name: "default"
}
</script>

<style scoped>

</style>
