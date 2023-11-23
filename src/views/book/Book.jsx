import React, { useEffect, useState } from 'react'
import Dashboard from '../../layouts/dashboard'
import Scheduler from '../../components/Scheduler/scheduler'
import CreateBook from './createBook'
import { useModal } from '../../Hooks/useModal'
import { GetAllBook } from '../../api/book'

function Book () {
  const { Open: RegisterOpen, ToggleState: toggleRegister } = useModal()

  const [Data, setData] = useState([])

  useEffect(() => {
    GetAllBook()
      .then(response => {
        setData(response.data)
        // console.log(response.data)
      })
      .catch(error => {
        console.error('Error al obtener los book:', error)
      })
  }, [Data])

  const schedulerData = Data.map(appointment => {
    const { _id, dateStart, dateEnd, doctor } = appointment
    return {
      id: _id,
      startDate: dateStart,
      endDate: dateEnd,
      title: doctor.name,
      subject: doctor.name
    }
  })

  return (
    <Dashboard>
      <div className='header'>
        <h1>Agenda</h1>
        <a className='Button' onClick={() => toggleRegister()}>Add</a>
      </div>
      <div className='tables'>
        <Scheduler schedulerData={schedulerData} className='notStatick' />
      </div>
      {RegisterOpen && <CreateBook CloseModal={toggleRegister} />}

    </Dashboard>
  )
}

export default Book
