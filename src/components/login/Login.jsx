import React from 'react'
import './login.css'
import Elf_Logo from '../../elf_logo.png'



const LoginSignup = () => {
    return (
        <div className='container'>
            
            <div className='header'>
                <img src={Elf_Logo} alt="" />
                <div className='underline'></div>
            </div> 
            <div className= "login">
                <div className='inputs'>
                    <div className='input'>
                        <input type="email" placeholder='email хаяг' />
                    </div>
                    <div className='input'>
                        <input type="password" placeholder='Нууц үг' />
                    </div>
                </div>
                <div className="bottom-text">
                    <div>
                    <input type='checkbox' id='check' />
                    <label for='check'>Сануулах</label>
                    </div>
                    
                    <div className="forgot-password">Нууц үгээ мартсан уу? </div>
                </div>
                <div className="submit-container">
                        <div className="submit">Нэвтрэх</div>
                    </div>
            </div>
        </div>
    )
}

export default LoginSignup