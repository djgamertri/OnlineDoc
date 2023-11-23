import React from 'react'
import { useForm } from 'react-hook-form'
import Modal from '../../layouts/Modal'

function createBook ({ CloseModal }) {
  const { register, handleSubmit } = useForm()

  const sendData = handleSubmit((data) => {
    console.log(data)
  })

  return (
    <Modal CloseModal={CloseModal}>
      <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
        <h1>Realiza solicitud</h1>
        <input className='form-input' disabled placeholder='Nombre' type='text' value='Erick Rodriguez' {...register('Email', { required: true })} />
        <input className='form-input' type='datetime-local' {...register('Pass', { required: true })} />
        <select className='form-input' value='' {...register('Pass', { required: true })}>
          <option hidden value=''>Selecciona una opción</option>
          <option value='3i12op3i12po'>Servicio1</option>
          <option value='3i12op3i12po'>Servicio1</option>
          <option value='3i12op3i12po'>Servicio1</option>
          <option value='3i12op3i12po'>Servicio1</option>
        </select>
        <button className='Button' type='submit'>Solicitar</button>
      </form>
    </Modal>
  )
}

export default createBook
