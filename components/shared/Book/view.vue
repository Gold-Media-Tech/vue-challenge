<template>
  <div class="flex items-center justify-center">
    <div class="bg-white rounded-xl overflow-hidden shadow-2xl cursor-pointer hover:scale-110 hover:shadow-3xl transform duration-500">
      <div class="relative">
        <img
          class="w-48 h-48"
           :src="cover"
           alt="imagen"
        />

        <p class="absolute text-lg transform translate-x-5 -translate-y-20 bg-pink-600 text-white py-3 px-3 rounded-full cursor-pointer hover:scale-105 duration-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import imageNotFound from "~/static/image-not-found.png"
export default {
  name: "view-book",
  props: {
    book: {
      type : [Array, Object],
      required: true
    }
  },
  computed: {
    cover () {
      const { isbn = null ,oclc = null ,lccn = null, cover_i = null } = this.book

      if (cover_i)
        return `https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`

      const covers =  Object.entries({isbn,oclc,lccn})
                            .filter(([_, v]) => v != null)[0]
      console.log('--->>', covers)
      return covers ? `https://covers.openlibrary.org/b/${covers[0]}/${covers[1][0]}-M.jpg`
                    : imageNotFound
    }
  }
}
</script>

<style scoped>

</style>
