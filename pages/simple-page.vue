<template>
  <div>
    <div class="flex justify-center items-center">
      <div>
        <input
          type="text"
          name=""
          id=""
          v-model="search"
          class="border border-gray-500 px-4 py-2 my-8 mr-4"
          placeholder="Type something here"
          @keypress="showEmpty = false"
          @keypress.enter="debounceClick"
        />
      </div>
      <div>
        <button
          @click.prevent="debounceClick"
          :disabled="search.length == 0 || loading"
          class="bg-blue-200 rounded px-4 py-2"
          :class="{
            'hover:bg-red-200': search.length == 0 || loading,
          }"
        >
          {{ searchLabel }}
        </button>
      </div>
    </div>
    <div class="container px-4">
      <ul v-if="books.docs.length > 0">
        <li v-for="book in books.docs" :key="book.key">{{ book.title }}</li>
      </ul>
      <div v-if="showEmpty" class="text-center text-2xl">
        There isn't any books with this name.
      </div>
    </div>
  </div>
</template>
<script>
import { debounce } from "lodash";
export default {
  data() {
    return {
      search: "",
      books: {
        docs: [],
      },
      searchLabel: "Search",
      loading: false,
      showEmpty: false,
    };
  },

  head() {
    return {
      title: "A simple title",
    };
  },

  methods: {
    async doSearch() {
      this.loading = true;
      this.searchLabel = "Searching...";
      const url = "http://openlibrary.org/search.json";
      const params = {
        params: {
          q: this.search,
        },
      };

      try {
        const { data: books } = await this.$axios.get(url, params);
        this.searchLabel = "Search";
        this.books = books;
        if (this.books.numFound == 0) {
          this.showEmpty = true;
          this.loading = false;
          return;
        }
        this.showEmpty = false;
      } catch (error) {
        alert(error);
      }
      this.loading = false;
    },

    debounceClick: debounce(function () {
      this.doSearch();
    }, 500),
  },
};
</script>
