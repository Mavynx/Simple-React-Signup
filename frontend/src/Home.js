import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
  return (
    <div>
      <h1>Welcome</h1>
      <Link to="/" type='submit' className='btn btn-danger m-4'>Logout</Link>
    </div>
  )
}

export default Home
