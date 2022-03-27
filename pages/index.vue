<template>
  <section>
    <Search
      class="mb-12"
      ref="refsearch"
      v-model="search"
      @update="search = $event"
    />

    <shared-list-books-view
      :books="docs"
      v-if="hasBooks"
    />
    <shared-titles-view
      v-else
      title="Welcome to the Open Library"
      sub-title="search for the book"
    />
  </section>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
  name: 'Index',
  data: () =>  ({
    search : '',
    optionFilter: ''
  }),
  watch: {
    search (newVal) {
      this.optionFilter = this.$refs.refsearch.filter
      console.log('newVal', newVal, this.optionFilter)
      this.searchBooks({optionFilter: this.optionFilter, search: newVal})
    }
  },
  computed: {
    ...mapGetters('books', ["getBooks"]),

    hasBooks() {
      return !!this.getBooks.docs?.length
    },
    docs () {
      return this.getBooks.docs
    }

  },
  methods: {
    ...mapActions('books', ["searchBooks"])
  }
}
</script>
