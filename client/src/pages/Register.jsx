import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
  })  

  const navigate = useNavigate()

  const registerUser = async (e) => {
    e.preventDefault()
    const {name, email, password} = data
    try {
      const {data} = await axios.post('/register', {
        name, email, password
      })  
    if(data.error){
      toast(data.error)
    } else {
      setData({})
      toast.success('Register successful! Welcome')
      navigate('/login')
    }
    } catch (error) {
      console.log(error)
    }
    
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