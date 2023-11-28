import React from 'react'
import './login.css'
import Elf_Logo from '../../elf_logo.png'


const LoginSignup = () => {
    return (
        <div className='container'>
            <div className='header'>
                <img src={Elf_Logo} />
                <div className='underline'></div>
                </div> 
            <div className='inputs'>
                <div className='input'>
                    <input type="email" placeholder='email хаяг' />
            </div>
                <div className='input'>
                    <input type="password" placeholder='Нууц үг' />
            </div>
            </div>
            <div className="forgot-password">Lost Passwor? <span>Click here</span></div>
            <div className="submit-container">
                <div className="submit">Sign Up</div>
                <div className="submit">Login</div>
            </div>
        </div>
    )
}

export default LoginSignup