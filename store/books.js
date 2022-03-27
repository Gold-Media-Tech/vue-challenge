import { SEARCH, WORKS } from "~/constants/endpoints";


export const state = () => ({
  booksSearch: [],
  keyBookView: null,
  infoBookView: {}
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
  }
}

export const getters = {
  getBooks ( state ) {
    return state.booksSearch
  },
  getBookInfo ( state ) {
    return state.infoBookView
  }

}

export const actions = {
  async searchBooks ({commit}, {optionFilter, search} ) {

    const url = `${SEARCH}?${optionFilter}=${search}`
    const res = await this.$api.$get(url)
    commit('setBooksSearch', res)

  },

  async searchBookByKey({ dispatch, state } ) {

    const key = state.keyBookView

    if (state.booksSearch.docs?.length)
      await dispatch("searchInCache", key)
    else
      await dispatch("searchInApi", key)

  },

  async searchInCache({ commit, state }, key) {
    console.info('For cache search')

    const bookInState = state.booksSearch.docs.filter( book => book.key.includes( key ))
    commit('setBookInfoView', bookInState[0])

  },

  async searchInApi ({ commit }, key) {
    console.info('For API search')

    const url = `${WORKS}${key}.json`
    const res = await this.$api.$get(url)
    commit('setBookInfoView', res)

  }

}


