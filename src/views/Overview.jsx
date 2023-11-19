import React from 'react'
import DataTable from 'react-data-table-component'
import Dashboard from '../layouts/dashboard'

import { customStyles, paginationOptions } from '../components/Tables/Config'
import { Doughnut, Line } from 'react-chartjs-2'
import 'chart.js/auto'
import './overview.css'

const columns = [
  {
    name: 'Title',
    selector: row => row.title
  },
  {
    name: 'Year',
    selector: row => row.year
  }
]

const data = [
  {
    id: 1,
    title: 'Beetlejuice',
    year: '1988'
  },
  {
    id: 2,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 3,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 4,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 5,
    title: 'Ghostbusters',
    year: '1984'
  },
  {
    id: 6,
    title: 'Ghostbusters',
    year: '1984'
  }
]

const chartData = {
  labels: ['Citas pendientes', 'Citas realizadas'],
  datasets: [
    {
      data: [5, 1], // Reemplaza estos valores con la cantidad real de citas pendientes y realizadas
      backgroundColor: ['#FF6384', '#36A2EB'],
      hoverBackgroundColor: ['#FF6384', '#36A2EB']
    }
  ]
}

function Overview () {
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
        <DataTable columns={columns} data={data} customStyles={customStyles} pagination paginationPerPage={5} paginationRowsPerPageOptions={[5, 10, 15, 20]} paginationComponentOptions={paginationOptions} />
      </div>
    </Dashboard>
  )
}
export default Overview
