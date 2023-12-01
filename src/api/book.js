import axios from './axios.js'

export const RegisterAppoiment = appoiment => axios.post('/appointment', appoiment)
export const UpdateAppointment = (id, appoiment) => axios.patch('/appointment/' + id, appoiment)
export const GetAllBook = () => axios.get('/appointments')
export const GetOne = (id) => axios.get('/appointment/' + id)
export const GetOneByDoctor = (id) => axios.get('/appointment/doctor/' + id)
export const GetOneBookPatient = (id) => axios.get('/appointment/patient/' + id)
