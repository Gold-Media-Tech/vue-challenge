<template>
  <div class="flex flex-col justify-evenly flex-grow items-center p-6 bg-white rounded-xl shadow-lg lg:flex-row">
    <div class="flex  ml-6 items-center bg-gray-600 text-gray-700 p-4">
      <input
        class="placeholder-gray-500 w-11/12 rounded-full px-3 pl-8 py-1 outline-none transition-all duration-700 ease-in-out focus:shadow-outline hover:w-11/12 hover:w-11/12"
        placeholder="Search..."
        type="text"
        v-model.lazy="inputSearch"
      />

    </div>
    <v-select
      class="bg-white w-32"
      v-model="filter"
      :options="[ 'title', 'author','subject']"
    />
    <div class="md:flex space-x-6 py-3 px-4 rounded-lg">
      <button
        class="bg-gray-800 py-2 px-8 text-white font-semibold rounded-lg hover:shadow-lg transition duration-3000 cursor-pointer"
        @click="emitAction"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    inputSearch: '',
    filter: 'title'
  }),
  watch: {
    inputSearch (val) {
      if (val)
        this.$emit('update', val)
    }
  },
  methods: {
    emitAction () {
      this.$emit('update', this.inputSearch)
    }
  }
}
</script>

<style scoped>

</style>
