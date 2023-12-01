import { useForm } from 'react-hook-form'
import { register as registerFetch } from '../../api/auth.js'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Modal from '../../layouts/Modal.jsx'
import { toast } from 'sonner'

function CreateDoctor ({ CloseModal }) {
  const { register, handleSubmit, formState: { errors } } = useForm()
  const [Message, setMessage] = useState('')

  const SignUp = async (user) => {
    try {
      const res = await registerFetch(user)
      if (res.data) {
        CloseModal(true)
      }
      toast.success('Successfully registered doctor')
    } catch (err) {
      console.error(err.response.data)
      setMessage(err.response.data.message)
      toast.error(err.response.data.message)
    }
  }

  const sendData = handleSubmit((data) => {
    const res = data
    SignUp(res)
  })

  return (
    <Modal CloseModal={CloseModal}>
      <h1>Sign Up</h1>
      <form className='form-disposition' onSubmit={handleSubmit(sendData)}>
        <input className='form-input' placeholder='Enter name' type='text' {...register('name', { required: 'Name required' })} />
        {errors.name && <p>{errors.name.message}</p>}

        <input className='form-input' placeholder='Enter email' type='email' {...register('email', { required: 'Email required' })} />
        {errors.email && <p>{errors.email.message}</p>}

        <input className='form-input' readOnly hidden placeholder='Enter a role' type='text' value='Doctor' {...register('role', { required: 'Email required' })} />
        {errors.role && <p>{errors.role.message}</p>}

        <input className='form-input' placeholder='Enter password' type='password' {...register('password', { required: 'Password required' })} />
        {errors.password && <p>{errors.password.message}</p>}

        <button className='Button' type='submit'>Sign Up</button>
      </form>
      <Link />
      {Message ? (<div className='Alert'> {Message} </div>) : null}
    </Modal>

  )
}

export default CreateDoctor
