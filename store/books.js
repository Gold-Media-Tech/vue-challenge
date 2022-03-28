import {SEARCH, WORKS} from "~/constants/endpoints";


export const state = () => ({
  booksCache: [],
  booksSearch: [],
  keyBookView: null,
  infoBookView: {},
  bookFavorites: []
})

export const mutations = {
  setBooksSearch( state, payload) {
    state.booksSearch = payload
  },
  setKeyBookSearch (state, payload) {
    state.keyBookView = payload
  },
  setBookInfoView ( state, payload ) {
    state.infoBookView = payload
  },
  setFavoriteBook ( state, payload ) {
    const exist = state.bookFavorites.some( book =>  book.key === payload.key )
    if (exist)
      state.bookFavorites = state.bookFavorites.filter( book => book.key !== payload.key )
    else
      state.bookFavorites.push( payload )
  },
  clearSearch ( state ) {
    state.booksSearch = []
  },
  clearInfoBook ( state ) {
    state.infoBookView = {}
    state.keyBookView = null
  }
}

export const getters = {
  getBooks ( state ) {
    return state.booksSearch
  },
  getBookInfo ( state ) {
    return state.infoBookView
  },
  getFavorites ( state ) {
    return state.bookFavorites
  }
}

export const actions = {
  async searchBooks ({commit}, {optionFilter, search} ) {

    try {
      const url = `${SEARCH}?${optionFilter}=${search}`
      const res = await this.$api.$get(url)
      commit('setBooksSearch', res)
    } catch (error) {
      commit('setError', { point: 'searchInCache' , error }, { root: true })
    }

  },

  async searchBookByKey({ dispatch, state } ) {

    const key = state.keyBookView

    if (state.booksSearch.docs?.length)
      await dispatch("searchInCache", key)
    else
      await dispatch("searchInApi", key)

  },

  async searchInCache({ commit, state }, key) {

    try {
      const bookInState = state.booksSearch.docs.filter( book => book.key.includes( key ))
      commit('setBookInfoView', bookInState[0])
    } catch (error) {
      commit('setError', { point: 'searchInCache' , error }, { root: true })
    }


  },

  async searchInApi ({ commit }, key) {

    try {
      const url = `${WORKS}${key}.json`
      const res = await this.$api.$get(url)
      commit('setBookInfoView', res)
    } catch (error) {
      commit('setError', { point: 'searchInApi' , error }, { root: true })
    }

  }

}


