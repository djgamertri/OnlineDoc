import React, { useContext, useEffect, useState } from 'react'
import Dashboard from '../../layouts/dashboard'
import DataTable from 'react-data-table-component'
import { customStyles, paginationOptions } from '../../components/Tables/Config'
import { GetOneBookPatient } from '../../api/book'
import { UserContext } from '../../Context/UserContext'

function MyBook () {
  const [Data, setData] = useState([])
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
    }
  ]
  return (
    <Dashboard>
      <div className='header'>
        <h1>Agenda</h1>
      </div>
      <div className='tables'>

        <DataTable columns={columns} data={Data} customStyles={customStyles} pagination paginationPerPage={5} paginationRowsPerPageOptions={[5, 10, 15, 20]} paginationComponentOptions={paginationOptions} />

      </div>

    </Dashboard>
  )
}

export default MyBook
