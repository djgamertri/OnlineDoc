import React from 'react'
import Dashboard from '../../layouts/dashboard'
import Scheduler from '../../components/Scheduler/Scheduler'
import CreateBook from './createBook'
import { useModal } from '../../Hooks/useModal'

function Book () {
  const { Open: RegisterOpen, ToggleState: toggleRegister } = useModal()

  return (
    <Dashboard>
      <div className='header'>
        <h1>Agenda</h1>
        <a className='Button' onClick={() => toggleRegister()}>Add</a>
      </div>
      <div className='tables'>

        <Scheduler className='notStatick' />

      </div>
      {RegisterOpen && <CreateBook CloseModal={toggleRegister} />}

    </Dashboard>
  )
}

export default Book
