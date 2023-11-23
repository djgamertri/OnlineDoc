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

function scheduler ({ schedulerData }) {
  return (
    <Scheduler
      data={schedulerData}
    >
      <ViewState
        currentDate={currentDate}
      />
      <WeekView
        startDayHour={0}
        endDayHour={24}
      />
      <MonthView />
      <DayView
        startDayHour={0}
        endDayHour={24}
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
