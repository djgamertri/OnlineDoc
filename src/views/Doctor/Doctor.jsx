import React, { useEffect, useState } from 'react'
import Dashboard from '../../layouts/dashboard'
import DataTable from 'react-data-table-component'
import { customStyles, paginationOptions } from '../../components/Tables/Config'
import { GetDoctors } from '../../api/user'
import { useModal } from '../../Hooks/useModal'
import CreateDoctor from './CreateDoctor'

function Doctor () {
  const { Open: RegisterOpen, ToggleState: toggleRegister } = useModal()

  const columns = [
    {
      name: 'Name',
      selector: row => row.name
    },
    {
      name: 'Email',
      selector: row => row.email
    },
    {
      name: 'Rol',
      selector: row => row.role
    }
  ]

  const [Users, setUsers] = useState([])

  useEffect(() => {
    GetDoctors()
      .then(response => {
        setUsers(response.data)
        console.log(response)
      })
      .catch(error => {
        console.error('Error al obtener usuarios:', error)
      })
  }, [])

  return (
    <Dashboard>
      <div className='header'>
        <h1>Doctors</h1>
        <a className='Button' onClick={() => toggleRegister()}>Add</a>
      </div>
      <DataTable columns={columns} data={Users} customStyles={customStyles} pagination paginationPerPage={5} paginationRowsPerPageOptions={[5, 10, 15, 20]} paginationComponentOptions={paginationOptions} />
      {RegisterOpen && <CreateDoctor CloseModal={toggleRegister} />}
    </Dashboard>

  )
}

export default Doctor
