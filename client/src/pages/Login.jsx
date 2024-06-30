import { useState } from 'react'
import axios from 'axios'

import React from 'react'

const Login = () => {
    const [data, setData] = useState({
        email: '',
        password: '',
      })  
    
      const loginUser = (e) => {
        e.preventDefault()
        axios.get('/')
      }
    
      return (
        <div>
            <form onSubmit={loginUser}>
                <label>Email</label>
                <input type='text' placeholder='Email' value={data.email} onChange={(e) => setData({...data, email: e.target.value})}/>
                <label>Password</label>
                <input type='password' placeholder='password' value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/>
                <button type='submit'>Login</button>
            </form>
        </div>
      )
}

export default Login