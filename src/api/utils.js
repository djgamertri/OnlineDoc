import axios from './axios.js'

export const GetCounters = () => axios.get('/count')
