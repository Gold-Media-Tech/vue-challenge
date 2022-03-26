<template>
  <section>
    <Search/>
    <shared-list-books-view/>

  </section>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  mounted() {
    this.$store.dispatch('prueba')
  },
  computed: mapGetters('books', ["getBooks"])
}
</script>
