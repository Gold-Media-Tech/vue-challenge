export const state = () => ({
  isLoading: false,
  errors: []
})

export const mutations = {
  setLoading ( state ) {
    state.isLoading = !state.isLoading
  },
  setError ( state, payload) {
    state.errors.push(payload)
  }

}

export const getters = {
  isLoading ( state ) {
    return state.isLoading
  }
}

export const actions = {}


