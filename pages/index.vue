<template>
  <div
    class="
      relative
      flex
      items-top
      justify-center
      min-h-screen
      bg-gray-100
      sm:items-center sm:pt-0
    "
  >
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8 mb-96">
      <SearchHeader @getBooks="setBooks" />
      <div class="w-full" v-show="books.length > 0">
        <h3 class="font-bold text-gray-600 text-left px-4">Search results</h3>
        <div class="mt-5 w-full">
          <Book v-for="book in books" :key="book.key" :book="book" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: [],
    };
  },
  methods: {
    setBooks(books) {
      this.books = books;
    },
  },
};
</script>
