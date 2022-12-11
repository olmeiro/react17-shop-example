import React from 'react'

import '../styles/RecoveryPassword.scss'

import logo from '../../public/logos/logo_yard_sale.svg'
import emailsvg from '../../public/icons/email.svg'

const RecoveryPassword = () => {
  return (
    <div class="recovery">
      <div class="form-container">
        <img src={logo} alt="logo" class="recovery-logo" />

        <h1 class="title">Email has been sent!</h1>
        <p class="subtitle">Please check your inbox for instructions on how to reset the password</p>

        <div class="email-image">
          <img src={emailsvg} />
        </div>

        <button class="primary-button login-button">Login</button>

        <p class="resend">
          <span>Didn't receive the email?</span>
          <a href="/">Resend</a>
        </p>
      </div>
    </div>
  )
}
export default RecoveryPassword