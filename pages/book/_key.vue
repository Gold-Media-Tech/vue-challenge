<template>
  <section>
    <div class="container mx-auto my-5 p-5">
      <h2
        class="text-2xl text-center pb-3 font-bold border-b-4 border-gray-800"
        v-text="getBookInfo.title"
      />

      <div class="md:flex no-wrap md:-mx-2">
        <div class="w-full md:w-3/12 md:mx-2">
          <div class="bg-white p-3">
            <h3 class="text-gray-600 font-lg text-semibold leading-6">{{ getBookInfo.title_suggest }}</h3>
            <div class="image overflow-hidden">
              <img
                class="h-128 w-128 mx-auto"
                :src="bookCover"
                alt="bookcover"
              >
            </div>

            <ul
              class="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
              <li class="flex items-center py-3">
                <span>First publish year</span>
                <span class="ml-auto">
                  {{ getBookInfo.first_publish_date || getBookInfo.first_publish_year }}
                </span>
              </li>
              <li class="flex items-center py-3">
                <shared-add-favorities
                  :is-favorite="verifyFavorite"
                  @add="setFavoriteBook(getBookInfo)"
                />
              </li>
            </ul>
          </div>
          <div class="my-4"></div>
        </div>
        <div class="w-full md:w-9/12 mx-2 h-64">

          <div class="my-4"></div>

          <div class="bg-white p-3 shadow-sm rounded-sm">

            <div class="grid grid-cols-1">
              <div>
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6">
                  {{ getBookInfo.description }}
                </p>
              </div>

              <div v-if="getBookInfo.subject">
                <li
                  v-for="sub in getBookInfo.subject"
                  :key="sub"
                  class="py-3">
                  <span
                    class="ml-auto">{{ sub }}</span>
                </li>
              </div>
          </div>
        </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script>
import {mapActions, mapGetters, mapMutations, mapState} from "vuex";
import generatedCovers from "~/mixins/generatedCovers";
import verifyFavorities from "~/mixins/verifyFavorities";

export default {
  name: "view-book",
  mixins: [generatedCovers, verifyFavorities],
  data: () => ({
    bookCover: ''
  }),
  mounted() {
    this.setKeyBookSearch(this.$route.params.key)
  },
  methods: {
    ...mapMutations('books', ["setKeyBookSearch", "clearInfoBook", "setFavoriteBook"]),
    ...mapActions("books",["searchBookByKey"]),
    cover () {
      this.bookCover = this.generatedCover( this.getBookInfo )
    },
  },
  computed: {
    ...mapState("books", ["keyBookView", "infoBookView"]),
    ...mapGetters('books',["getBookInfo"]),
    verifyFavorite () {
     return this.isFavorite( this.getBookInfo.key )
    }

},
  watch: {
    keyBookView () {
      this.searchBookByKey()
    },
    infoBookView () {
      this.cover()
    }
  },
  beforeDestroy() {
    this.clearInfoBook()
  }
}
</script>
