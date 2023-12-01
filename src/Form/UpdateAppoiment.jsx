import React, { useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { GetOne, UpdateAppointment } from '../api/book'
import { UserContext } from '../Context/UserContext'
import { GetAllService } from '../api/service'

function UpdateAppoiment ({ id, CloseModal }) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm()
  const [Agenda, setAgenda] = useState([])
  const [Services, setServices] = useState([])

  const { User } = useContext(UserContext)

  useEffect(() => {
    GetOne(id)
      .then(response => {
        console.log(response.data)
        setAgenda(response.data)
      })
      .catch(error => {
        console.error('Error al obtener los book:', error)
      })
    GetAllService(User._id)
      .then(response => {
        setServices(response.data)
      })
      .catch(error => {
        console.error('Error al obtener los book:', error)
      })
  }, [id])

  useEffect(() => {
    // Configura los valores iniciales después de que se haya cargado la agenda
    setValue('doctor', User.name)
    setValue('idDoctor', Agenda.doctor?.id)
    setValue('patient', Agenda.patient?.name)
    setValue('idpatient', Agenda.patient?.id)
    setValue('dateStart', Agenda.dateStart)
    setValue('service', Agenda.service)
    setValue('status', Agenda.status)
  }, [Agenda, User, setValue])

  const Register = async (appoiment) => {
    try {
      console.log(appoiment)
      const res = await UpdateAppointment(id, appoiment)
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
    const res = {
      dateStart: data.dateStart,
      doctor: {
        name: data.doctor,
        id: data.idDoctor
      },
      patient: {
        name: data.patient,
        id: data.idpatient
      },
      service: data.service,
      status: data.status
    }
    Register(res)
  })

  const validateDate = (value) => {
    const currentDateTime = new Date().toISOString().slice(0, 16)
    if (value < currentDateTime) {
      return 'Fecha no valida'
    }
    return true
  }

  return (
    <form className='form-disposition' onSubmit={sendData}>
      <h1>Update appointment</h1>

      <input className='form-input' readOnly placeholder='Nombre' type='text' {...register('doctor', { required: 'Name required' })} />
      {errors.doctor && <p>{errors.doctor.message}</p>}

      <input className='form-input' hidden readOnly placeholder='Nombre' type='text' {...register('idDoctor', { required: 'IdDoctor required' })} />
      {errors.idDoctor && <p>{errors.idDoctor.message}</p>}

      <input className='form-input' readOnly placeholder='Nombre' type='text' {...register('patient', { required: 'patient required' })} />
      {errors.patient && <p>{errors.patient.message}</p>}

      <input className='form-input' hidden readOnly placeholder='Nombre' type='text' {...register('idpatient', { required: 'IdPatient required' })} />
      {errors.idpatient && <p>{errors.idpatient.message}</p>}

      <input className='form-input' type='datetime-local' {...register('dateStart', { required: 'Date required', validate: validateDate })} />
      {errors.dateStart && <p>{errors.dateStart.message}</p>}

      <select className='form-input' {...register('service', { required: 'Service required' })}>
        <option hidden value=''>Selecciona un servicio</option>
        {Services.map((service) => (
          <option key={service._id} value={service._id}>
            {service.title}
          </option>
        ))}
      </select>
      {errors.service && <p>{errors.service.message}</p>}

      <select className='form-input' {...register('status', { required: 'Status required' })}>
        <option value='Completed'>Completed</option>
        <option value='Pending'>Pending</option>
        <option value='Canceled'>Canceled</option>
      </select>
      {errors.status && <p>{errors.status.message}</p>}

      <button className='Button' type='submit'>Solicitar</button>
    </form>
  )
}

export default UpdateAppoiment
