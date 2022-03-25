<template>
  <div class="mb-10">
    <img
      class="py-2 px-4"
      src="https://openlibrary.org/static/images/openlibrary-logo-tighter.svg"
    />

    <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
      <h2 class="text-2xl leading-7 font-semibold text-center">
        Welcome to OpenLibrary
      </h2>
      <p class="mt-3 text-gray-600 text-center">
        Search any book in the world.
      </p>
      <div class="flex border-2 border-opacity-20 rounded mt-5">
        <input
          type="text"
          class="px-4 py-2 w-full"
          placeholder="Search..."
          v-model="term"
        />
        <button
          class="
            flex
            items-center
            justify-center
            px-4
            border-l
            bg-green-400
            hover:bg-green-700
            disabled:opacity-50
          "
          :disabled="term.length == 0"
          v-on:click="searchBooks"
        >
          <svg
            class="w-6 h-6 text-white"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path
              d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"
            />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return { term: "" };
  },
  methods: {
    searchBooks() {
      this.$axios
        .$get(`https://openlibrary.org/search.json?q=${this.term}`)
        .then((response) => {
          this.$emit("getBooks", response.docs);
        });
    },
  },
};
</script>