<template>
  <div
    class="flex items-center justify-center"
    @click="viewBook"
  >
    <div class="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer hover:scale-110 hover:shadow-3xl transform duration-500">
      <div class="relative">
        <img
          class="w-48 h-48"
           :src="cover"
           alt="imagen"
        />

        <p
          class="favorites">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import generatedCovers from "~/mixins/generatedCovers";

export default {
  name: "view-book",
  mixins: [generatedCovers],
  props: {
    book: {
      type : [Array, Object],
      required: true
    }
  },
  computed: {
    cover () {
      return this.generatedCover( this.book )
    }
  },
  methods: {
    viewBook () {
      const key = this.book.key.split('/')[2]
      console.log('key', key , this.book.key.split('/'))
      this.$emit('view', key)
    }
  }
}
</script>
