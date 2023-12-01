import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import Modal from '../../layouts/Modal'
import { UserContext } from '../../Context/UserContext'
import { GetAllService } from '../../api/service'
import { GetDoctors } from '../../api/user'
import { RegisterAppoiment } from '../../api/book'
import { toast } from 'sonner'

function createBook ({ CloseModal }) {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const Register = async (appoiment) => {
    try {
      console.log(appoiment)
      const res = await RegisterAppoiment(appoiment)
      if (res.data) {
        CloseModal(true)
      }
      console.log(res)
      toast.success('Successfully registered appointment')
    } catch (err) {
      console.error(err.response.data.message)
      toast.error(err.response.data.message)
    }
  }

  const sendData = handleSubmit(async (data) => {
    const res = data
    Register(res)
  })

  const [Services, setServices] = useState([])
  const [Doctors, setDoctors] = useState([])

  const { User } = useContext(UserContext)

  useEffect(() => {
    GetAllService(User._id)
      .then(response => {
        setServices(response.data)
      })
      .catch(error => {
        console.error('Error al obtener los book:', error)
      })
    GetDoctors()
      .then(response => {
        setDoctors(response.data)
      })
      .catch(error => {
        console.error('Error al obtener los book:', error)
      })
  }, [User._id]) // Agregué User._id como dependencia del efecto

  const validateDate = (value) => {
    const currentDateTime = new Date().toISOString().slice(0, 16)
    if (value < currentDateTime) {
      return 'Fecha no valida'
    }
    return true
  }

  return (
    <Modal CloseModal={CloseModal}>
      <form className='form-disposition' onSubmit={sendData}>
        <h1>Realiza solicitud</h1>

        <input className='form-input' readOnly placeholder='Nombre' type='text' value={User.name} {...register('name', { required: 'Name required' })} />
        {errors.name && <p>{errors.name.message}</p>}

        <input className='form-input' readOnly hidden placeholder='Nombre' type='text' value={User._id} {...register('patient', { required: 'Patient required' })} />
        {errors.patient && <p>{errors.patient.message}</p>}

        <input className='form-input' type='datetime-local' {...register('dateStart', { required: 'Date required', validate: validateDate })} />
        {errors.dateStart && <p>{errors.dateStart.message}</p>}

        <select className='form-input' {...register('doctor', { required: 'Doctor required' })}>
          <option hidden value=''>Selecciona un doctor</option>
          {Doctors.map((Doctor) => (
            <option key={Doctor._id} value={Doctor._id}>
              {Doctor.name}
            </option>
          ))}
        </select>
        {errors.doctor && <p>{errors.doctor.message}</p>}

        <select className='form-input' {...register('service', { required: 'Service required' })}>
          <option hidden value=''>Selecciona un servicio</option>
          {Services.map((service) => (
            <option key={service._id} value={service._id}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service && <p>{errors.service.message}</p>}

        <button className='Button' type='submit'>Solicitar</button>
      </form>
    </Modal>
  )
}

export default createBook
