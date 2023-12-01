import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import Dashboard from '../../layouts/dashboard'

import { customStyles, paginationOptions } from '../../components/Tables/Config'
import { Doughnut, Line } from 'react-chartjs-2'
import 'chart.js/auto'
import './overview.css'
import { GetAllBook } from '../../api/book'
import { GetCounters } from '../../api/utils'

function Overview () {
  const [Data, setData] = useState([])
  const [Counters, setCounters] = useState([])

  useEffect(() => {
    GetAllBook()
      .then(response => {
        setData(response.data)
        console.log(response.data)
      })
      .catch(error => {
        console.error('Error al obtener los book:', error)
      })

    GetCounters()
      .then(response => {
        setCounters(response.data)
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
      name: 'Patient',
      selector: row => row.patient.name
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

  const chartData = {
    labels: ['Pending Appointments', 'Completed Appointments', 'Canceled Appointments'],
    datasets: [
      {
        data: [Counters.appointmentsInProgress, Counters.completedAppointments, Counters.canceledAppointments],
        backgroundColor: ['#FF6384', '#36A2EB', '#36eb5d'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#36eb5d']
      }
    ]
  }

  return (
    <Dashboard>
      <h1>Overview</h1>
      <div className='graph'>
        <div>
          <Line data={chartData} height={400} width={700} options={{ maintainAspectRatio: false }} />
        </div>
        <hr />
        <div>
          <Doughnut data={chartData} width={400} height={400} options={{ maintainAspectRatio: false }} />
        </div>
      </div>
      <div className='tables'>
        <h1>Last Orders</h1>
        <DataTable columns={columns} data={Data} customStyles={customStyles} pagination paginationPerPage={5} paginationRowsPerPageOptions={[5, 10, 15, 20]} paginationComponentOptions={paginationOptions} />
      </div>
    </Dashboard>
  )
}
export default Overview
