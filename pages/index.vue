<template>
  <div class="container mx-auto">
    <div class="flex justify-center mt-4">
      <h1 class="text-3xl">Search by Faber Vergara</h1>
    </div>
    <div class="flex justify-center mt-12">
      <form @submit="getBooks">
        <input
          type="text"
          class="border border-gray-700 focus:border-blue-400 rounded h-10 w-64"
          placeholder="Type a book name"
          v-model="search"
        />
        <button
          class="bg-blue-600 text-white h-10 w-32 rounded disabled:bg-gray-600"
          :disabled="isButtonDisabled"
          type="submit"
        >
          Search
        </button>
      </form>
    </div>
    <div class="flex justify-center mt-8">
      <ul class="list-disc">
        <li v-for="book in books.docs" :key="book.key">{{ book.title }}</li>
      </ul>

      <p v-if="loading">Loading</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      books: {},
      loading: false,
    };
  },
  computed: {
    isButtonDisabled() {
      return this.search === "";
    },
  },
  methods: {
    getBooks(e) {
      e.preventDefault();
      let self = this;
      this.loading = true;

      this.$axios
        .get(
          "http://openlibrary.org/search.json?q=" + this.search + "&limit=20"
        )
        .then((res) => {
          self.books = res.data;
          self.loading = false;
        });
    },
  },
};
</script>
