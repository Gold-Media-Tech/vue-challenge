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

  api.onRequest((config) => {
    store.commit("setLoading")
    console.log('Making request to api' + config)
  })

  api.onResponse((info) => {
    console.log('onResponse -> Axios', info)
    // store.commit("setLoading")
  })

  api.onError( error => {
    const code = parseInt(error.response && error.response.status)
    if (code === 400) {
      redirect('/')
    }
  })

  inject('api', api)
}
