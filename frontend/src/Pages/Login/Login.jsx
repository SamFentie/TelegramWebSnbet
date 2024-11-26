import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
const Login = () => {
  return (
    <>
    <div className="logo-div">
      <img src={logo} alt="" className='logo'/>
    </div>
    <div className='login-div'>
      
        <input type="text" placeholder='Password'/>
        <button><Link to='home'>Login</Link></button>
    </div>
    </>
  )
}

export default Login