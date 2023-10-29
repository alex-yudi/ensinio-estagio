import axios from 'axios'

const localHost = 'http://localhost:3000'
const alternativeApi = 'https://cute-tan-leopard-shoe.cyclic.app';

export const api = axios.create({
  baseURL: alternativeApi,
})
