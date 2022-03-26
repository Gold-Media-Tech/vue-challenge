export default function ({ $axios }, inject) {
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
    console.log('Making request to api' + config)
  })

  api.onResponse((info) => console.log('onResponse -> Axios', info) )

  inject('api', api)
}
