import React from 'react'
import Link from 'next/link'
const Login = () => {
  return (
    <div class="wrapper">
      <div class="logo">
        <img src="data:image/png;base64,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" alt="logo here"/>
              </div>
      <div class="title">
        <p>Sign in to Jobit</p>
      </div>
      <div class="form">
        <div class="input_field">
          <label>Username or email address</label>
          <input type="text" class="input"/>
        </div>
        <div class="input_field">
          <label>Password</label>
          <input type="password" class="input"/>
          <a href="#" class="forgot">Forgot password?</a>
        </div>
        <div class="btn">
          <input type="submit" value="Sign in" class="sign_btn"/>
        </div>
      </div>
      <div class="create_act">
        <p>New to jobit? <Link href="/create">Create an account.</Link></p>
      </div>
      
    </div>
  )
}

export default Login