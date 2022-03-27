<template>
  <section>
    <h2> Hola Key </h2>
    <pre>
      {{ getBookInfo }}
    </pre>

  </section>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";

export default {
  name: "view-book",
  mounted() {
    this.setKeyBookSearch(this.$route.params.key)
  },
  methods: {
    ...mapMutations('books', ["setKeyBookSearch"]),
    ...mapActions("books",["searchBookByKey"])
  },
  computed: {
    ...mapState("books", ["keyBookView"]),
    ...mapGetters('books',["getBookInfo"])
},
  watch: {
    keyBookView () {
      this.searchBookByKey()
    }
  }
}
</script>

<style scoped>

</style>
