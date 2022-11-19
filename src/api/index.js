import axios from "axios"
import { BASE_URL } from "src/utils/api"

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
})

api.interceptors.request()
api.interceptors.response()

export const postFetcher = (route, data = {}, config = {}) =>
  api
    .post(route, data, config)
    .then(({ data, status }) => ({ status, data }))
    .catch(({ response }) => console.log('response :>> ', response))

export const getFetcher = (route, config = {}) =>
  api
    .get(route, config)
    .then(({ data, status }) => ({ status, data }))
    .catch(({ response }) => console.log('response :>> ', response))

export const putFetcher = (route, data = {}, config = {}) =>
  api
    .put(route, data, config)
    .then(({ data, status }) => ({ status, data }))
    .catch(({ response }) => console.log('response :>> ', response))

export const deleteFetcher = (route, data = {}, config = {}) =>
  api
    .delete(route, data, config)
    .then(({ data, status }) => ({ status, data }))
    .catch(({ response }) => console.log('response :>> ', response))