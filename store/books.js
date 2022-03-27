import { SEARCH } from "~/constants/endpoints";


export const state = () => ({
  booksSearch: []
})

export const mutations = {
  setBooksSearch( state, payload) {
    state.booksSearch = payload
  }
}

export const getters = {
  getBooks ( state ) {
    return state.booksSearch
  }
}

export const actions = {
  async searchBooks ({commit}, {optionFilter, search} ) {

    console.log(optionFilter, search)
    const url = `${SEARCH}?${optionFilter}=${search}`

    const res = await this.$api.$get(url)
    commit('setBooksSearch', res)
  },

}


