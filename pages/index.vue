<template>
  <section>
    <core-search
      class="mb-12"
      ref="refsearch"
      v-model="search"
      @update="searchIn"
    />

    <div v-show="!isLoading">
      <shared-list-books-view
        :books="docs"
        v-if="hasBooks"
      />
      <shared-titles-view
        v-else
        title="Welcome to the Open Library"
        sub-title="search for the book"
      />
    </div>
    <core-loading v-show="isLoading" />

  </section>
</template>

<script>
import {mapGetters, mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'Index',
  data: () =>  ({
    search : '',
    optionFilter: ''
  }),
  mounted() {
    this.clearSearch()
  },

  computed: {
    ...mapGetters('books', ["getBooks"]),
    ...mapState(["isLoading"]),
    hasBooks() {
      return !!this.getBooks.docs?.length
    },
    docs () {
      return this.getBooks.docs
    }

  },
  methods: {
    ...mapActions('books', ["searchBooks"]),
    ...mapMutations('books', ["clearSearch"]),
    searchIn ( newVal) {
      this.optionFilter = this.$refs.refsearch.filter
      this.searchBooks({optionFilter: this.optionFilter, search: newVal})
    }
  }
}
</script>
