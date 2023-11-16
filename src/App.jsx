import { Route, Routes } from 'react-router-dom'
import './App.css'
import Overview from './views/Overview'

function App () {
  return (
    <Routes>
      <Route path='/dashboard' element={<Overview />} />
    </Routes>
  )
}

export default App
