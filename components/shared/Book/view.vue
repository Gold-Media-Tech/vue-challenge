<template>
  <div
    class="flex items-center justify-center"

  >
    <div class="bg-white rounded-xl shadow-2xl cursor-pointer hover:scale-105 hover:shadow-3xl transform duration-500">
      <div class="relative" @click="viewBook">
        <img
          class="w-48 h-48"
           :src="cover"
           alt="imagen"
        />

      </div>
      <shared-add-favorities
        :is-favorite="verifyFavorite"
        @add="setFavoriteBook(book)"
      />
    </div>
  </div>
</template>

<script>
import generatedCovers from "~/mixins/generatedCovers";
import {mapMutations} from "vuex";
import verifyFavorities from "~/mixins/verifyFavorities";

export default {
  name: "view-book",
  mixins: [generatedCovers,verifyFavorities],
  props: {
    book: {
      type : [Array, Object],
      required: true
    }
  },
  computed: {
    cover () {
      return this.generatedCover( this.book )
    },
    verifyFavorite () {
      return this.isFavorite( this.book.key )
    }
  },
  methods: {
    ...mapMutations('books', ["setFavoriteBook"]),
    viewBook () {
      const key = this.book.key.split('/')[2]
      this.$emit('view', key)
    }
  }
}
</script>
