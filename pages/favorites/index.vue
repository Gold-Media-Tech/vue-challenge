<template>
  <section>
    <shared-list-books-view
      :books="getFavorites"
      v-if="hasFavorites"
    />
  </section>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "my-favorities",
  computed: {
    ...mapGetters('books', ["getFavorites"]),
    hasFavorites () {
      return !!this.getFavorites.length
    }
  }

}
</script>

<style scoped>

</style>
