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
  async prueba ({commit}) {
    const res = await this.$api.$get('search.json?q=The+Lord+of+the+Rings')
    commit('setBooksSearch', res)
  },

}


