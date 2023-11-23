import axios from './axios.js'

export const GetAllService = () => axios.get('/service')
export const GetOneService = (id) => axios.get('/service/' + id)
