import {mapGetters} from "vuex";

export default {
  computed: mapGetters('books',[ "getFavorites"]),

  methods: {
    isFavorite ( key ) {
      console.log('isFavorite', key)
      if (this.getFavorites.length)
        return this.getFavorites.some( favority => favority === key )

      return false
    }
  }
}



