import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './SignupValidation'
import { useState } from 'react'
import axios from 'axios'


const Signup = () => {
  const [values, setValues] = useState ({
    name:'',
    email:'',
    password:''
})

const navigate = useNavigate()
const [errors, setErrors] = useState({})

const handleInput = (event) => {
    setValues(prev => ({...prev, [event.target.name]: [event.target.value]}))

}


const handleSubmit = (event) => {
    event.preventDefault()
    setErrors(validation(values))
    if(errors.name === "" && errors.email === "" && errors.password === ""){
      axios.post('http://localhost:8081/signup', values)
      .then(res => {
        navigate('/')
      })
      .catch(err => console.log(err))
    }
}

  return (
    <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
    <div className='bg-white p-3 rounded w-25'>
        <h2 className='d-flex justify-content-center mb-3'>Sign Up</h2>
  <form action='' onSubmit={handleSubmit}>
  <div className='mb-3'>
    <label htmlFor='name'><strong>Name</strong></label>
    <input type='text' name='name' onChange={handleInput} placeholder='Enter Name' className='form-control'/>
    {errors.name && <span className='text-danger'>{errors.name}</span>}
    </div>
    <div className='mb-3'>
    <label htmlFor='email'><strong>Email</strong></label>
    <input type='email'  name='email' onChange={handleInput} placeholder='Enter Email' className='form-control'/>
    {errors.email && <span className='text-danger'>{errors.email}</span>}
    </div>
    <div className='mb-3'>
    <label htmlFor='password'><strong>Password</strong></label>
    <input type='password' name='password' onChange={handleInput} placeholder='Enter Password' className='form-control '/>
    {errors.password && <span className='text-danger'>{errors.password}</span>}
    </div>
    <button type='submit' className='btn btn-primary w-100 mb-3'><strong>Sign up</strong></button>
    
    <p>Already have an account? <span className='text-primary text-decoration-none'><Link className='text-decoration-none' to="/">Login</Link></span></p>
  </form>
  </div>
</div>
  )
}

export default Signup
