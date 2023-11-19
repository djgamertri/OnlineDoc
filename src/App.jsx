import { Route, Routes } from 'react-router-dom'
import './App.css'
import Overview from './views/Overview'
import Book from './views/book/Book'

function App () {
  return (
    <Routes>
      <Route path='/dashboard' element={<Overview />} />
      <Route path='/book' element={<Book />} />
    </Routes>
  )
}

export default App
