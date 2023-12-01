import React, { useContext, useEffect, useState } from 'react'
import Dashboard from '../../layouts/dashboard'
import DataTable from 'react-data-table-component'
import { customStyles, paginationOptions } from '../../components/Tables/Config'
import { GetOneBookPatient } from '../../api/book'
import { UserContext } from '../../Context/UserContext'
import { useModal } from '../../Hooks/useModal'
import Modal from '../../layouts/Modal'
import UpdateAppoimentUser from '../../Form/UpdateAppoimentUser'

function MyBook () {
  const [Data, setData] = useState([])
  const [IdUser, setIdUser] = useState(null)
  const { Open: RegisterOpen, ToggleState: toggleRegister } = useModal()

  const { User } = useContext(UserContext)

  useEffect(() => {
    GetOneBookPatient(User._id)
      .then(response => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error al obtener los book:', error)
      })
  }, [])

  const columns = [
    {
      name: 'Doctor',
      selector: row => row.doctor.name
    },
    {
      name: 'Date Start',
      selector: row => row.dateStart
    },
    {
      name: 'Date End',
      selector: row => row.dateEnd
    },
    {
      name: 'Status',
      selector: row => row.status
    },
    {
      name: 'Modificar',
      button: 'true',
      cell: (row) => (
        <a className='Button' onClick={(e) => handleEdit(e, row._id)}>
          Editar
        </a>
      )
    }
  ]
  const handleEdit = (e, id) => {
    console.log(id)
    setIdUser(id)
    toggleRegister(true)
  }

  return (
    <Dashboard>
      <div className='header'>
        <h1>Agenda</h1>
      </div>
      <div className='tables'>
        <DataTable columns={columns} data={Data} customStyles={customStyles} pagination paginationPerPage={5} paginationRowsPerPageOptions={[5, 10, 15, 20]} paginationComponentOptions={paginationOptions} />
      </div>
      {RegisterOpen && <Modal CloseModal={toggleRegister}><UpdateAppoimentUser CloseModal={toggleRegister} id={IdUser} /></Modal>}

    </Dashboard>
  )
}

export default MyBook
