import axios from './axios.js'

export const RegisterAppoiment = appoiment => axios.post('/appointment', appoiment)
export const GetAllBook = () => axios.get('/appointments')
export const GetOneBookPatient = (id) => axios.get('/appointment/patient/' + id)
