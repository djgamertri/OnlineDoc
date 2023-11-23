import axios from './axios.js'

export const GetUsers = () => axios.get('/users')

export const GetDoctors = () => axios.get('/doctor')
