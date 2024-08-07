import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import validation from './LoginValidation'
import axios from 'axios'


const Login = () => {
    const [values, setValues] = useState ({
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
        if(errors.email === "" && errors.password === ""){
          axios.post('http://localhost:8081/login', values)
          .then(res => {
            if(res.data === "Success"){
              navigate('/home')
            }else{
              alert("No records found")
            }
          })
          .catch(err => console.log(err))
        }
    }
  return (
    <div className='d-flex justify-content-center align-items-center bg-info vh-100'>
        <div className='bg-white p-3 rounded w-25'>
            <h2 className='d-flex justify-content-center mb-3'>Login</h2>
      <form action='' onSubmit={handleSubmit}>
        <div className='mb-3'>
        <label htmlFor='email'><strong>Email</strong></label>
        <input type='email' onChange={handleInput} name='email' placeholder='Enter Email' className='form-control'/>
        {errors.email && <span className='text-danger'>{errors.email}</span>}
        </div>
        <div className='mb-3'>
        <label htmlFor='password'><strong>Password</strong></label>
        <input type='password' onChange={handleInput} name='password' placeholder='Enter Password' className='form-control '/>
        {errors.password && <span className='text-danger'>{errors.password}</span>}
        </div>
        <button type='submit' className='btn btn-primary w-100 mb-3'><strong>Login</strong></button>
        
       
       <p>New user? <span className='text-primary text-decoration-none'><Link className='text-decoration-none' to="/signup">Signup</Link></span></p>
      </form>
      </div>
    </div>
  )
}

export default Login
