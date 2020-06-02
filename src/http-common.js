import axios from 'axios'

export default axios.create({
  baseURL: 'https://us-central1-forage-basket-7a7ed.cloudfunctions.net/',
  headers: {
    'Content-type': 'application/json',
  },
})
