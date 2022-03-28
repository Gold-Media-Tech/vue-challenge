export default function ({ $axios , store, redirect}, inject) {
  console.log('Im in the axios plugin', process)

  const api = $axios.create({
    baseURL: 'http://openlibrary.org/',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  })

  // api.setBaseURL(process.env.API_URL)

  api.onRequest(() => {
    store.commit("setLoading")
  })

  api.onResponse(() => {
    store.commit("setLoading")
  })

  api.onError( error => {
    const code = parseInt(error.response && error.response.status)
    console.log('code error axios', code, error)
    if (code === 400 || code === 500) {
      store.commit('setError', { point: 'searchInCache' , error })
      redirect('/')
    }
  })

  inject('api', api)
}
