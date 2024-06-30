import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })  

  const registerUser = (e) => {
    e.preventDefault()
    axios.get('/register')

  }

  return (
    <div>
        <form onSubmit={registerUser}>
            <label>Name</label>
            <input type='text' placeholder='name' value={data.name} onChange={(e) => setData({...data, name: e.target.value})}/>
            <label>Email</label>
            <input type='text' placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
            <label>Password</label>
            <input type='password' placeholder='password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Register