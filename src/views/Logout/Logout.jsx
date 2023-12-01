import React, { useContext, useEffect } from 'react'
import { UserContext } from '../../Context/UserContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'sonner'

function Logout () {
  const { Logout, User } = useContext(UserContext)
  const navigate = useNavigate()

  useEffect(() => {
    console.log('Cerrando session')
    Logout()
    navigate('/')
    toast.success('Logout succes')
  }, [User])

  return (
    <div>Logout</div>
  )
}

export default Logout
