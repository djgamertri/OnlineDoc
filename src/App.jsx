import { Route, Routes } from 'react-router-dom'
import './App.css'
import Overview from './views/Overview/Overview'
import Book from './views/book/Book'
import Doctor from './views/Doctor/Doctor'
import Login from './views/Login/Login'
import Home from './views/Home/Home'
import Logout from './views/Logout/Logout'
import Register from './views/Register/Register'
import MyBook from './views/Mybook/MyBook'
import ProtectedRoute from './layouts/ProtectedRoute'
import { Toaster } from 'sonner'
import Agenda from './views/Agenda/Agenda'

function App () {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/logout' element={<Logout />} />
        <Route element={<ProtectedRoute Doctor Login notlogin={false} />}>
          <Route path='/dashboard' element={<Overview />} />
          <Route path='/doctor' element={<Doctor />} />
        </Route>
        <Route element={<ProtectedRoute Doctor={false} Login />}>
          <Route path='/book' element={<Book />} />
          <Route path='/My-book' element={<MyBook />} />
          <Route path='/Agenda' element={<Agenda />} />
        </Route>
      </Routes>
      <Toaster
        theme='system'
        richColors
        duration={3000}
        closeButton
        visibleToasts={3}
      />
    </>
  )
}

export default App
