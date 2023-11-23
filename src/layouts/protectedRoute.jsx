import { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

function ProtectedRoute ({ Doctor, login, redirectPath = '/' }) {
  const { User } = useContext(UserContext)
  if (User.role !== 'Doctor' && Doctor) {
    return <Navigate to={redirectPath} replace />
  }
  if (!User && login) {
    return <Navigate to={redirectPath} replace />
  }
  return <Outlet />
}

export default ProtectedRoute
