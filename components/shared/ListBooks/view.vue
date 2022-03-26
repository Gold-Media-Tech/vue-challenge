<template>
  <section>
    <div class="grid sm:grid-cols-5 gap-1 grid-cols-2">
      <div v-for="q in 11" :key="q">
        <shared-book-view/>
        <!--          <div class="bg-gray-300 h-44"></div>-->
        <!--          <h3 class="text-lg font-semibold text-gray-500 mt-2">Saunas in <span class="text-gray-700">Helsinki</span></h3>-->
      </div>

    </div>
  </section>
</template>
<script>
export default {
  name: 'list-books'
}
</script>