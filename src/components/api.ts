import axios, { AxiosResponse } from 'axios'

// ここの export axios のインスタンス

// export default axios.create({
//   baseURL: 'https://jsonplaceholder.typicode.com',
// })

const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
})


export { api }
export type { AxiosResponse }