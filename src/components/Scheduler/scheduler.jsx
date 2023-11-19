import React from 'react'
import { ViewState } from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  DayView,
  WeekView,
  MonthView,
  Appointments,
  AllDayPanel,
  DateNavigator,
  Toolbar,
  ViewSwitcher
} from '@devexpress/dx-react-scheduler-material-ui'

const currentDate = new Date().toDateString()
const schedulerData = [
  { startDate: '2018-11-01T09:45', endDate: '2018-11-01T11:00', title: 'Meeting' },
  { startDate: '2023-11-18T15:46', endDate: '2023-11-18T19:46', title: 'Go to a gym' }
]

function scheduler () {
  return (
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <WeekView
        startDayHour={9}
        endDayHour={19}
      />
      <MonthView />
      <DayView
        startDayHour={9}
        endDayHour={19}
      />
      <Toolbar />
      <DateNavigator />
      <ViewSwitcher />
      <AllDayPanel />
      <Appointments />
    </Scheduler>
  )
}

export default scheduler
