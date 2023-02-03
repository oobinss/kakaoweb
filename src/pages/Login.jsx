import React, { useState, useRef } from 'react'
import Welcome from '../components/Login/Welcome'
import Header from '../components/layout/Header'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import styled from 'styled-components'
import Footer from '../components/Login/Footer'

const LoginPage = () => {
  const [isIdFocus, setIsIdFocus] = useState(false)
  const [isPasswordFocus, setIsPasswordFocus] = useState(false)
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const idInputRef = useRef()
  const passwordInputRef = useRef()

  const inputFocusHandler = (event) => {
    if (event.target.id === 'email') {
      setIsIdFocus(true)
    }
    if (event.target.id === 'password') {
      setIsPasswordFocus(true)
    }
  }

  const inputBlurHandler = (event) => {
    if (event.target.id === 'email' && userId === '') {
      setIsIdFocus(false)
    }
    if (event.target.id === 'password' && userPassword === '') {
      setIsPasswordFocus(false)
    }
  }
  const submitHandler = (event) => {
    event.preventDefault()
    const enteredId = idInputRef.current.value
    const enteredPassword = passwordInputRef.current.value
  }

  const idChangeHandler = (event) => {
    setUserId(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setUserPassword(event.target.value)
  }
  return (
    <LoginBox>
      <Header />
      <Welcome />
      <StyleForm onSubmit={submitHandler}>
        <Input
          id='email'
          type='email'
          value={userId}
          label={isIdFocus ? '' : 'Email or phone number'}
          name='email'
          required
          ref={idInputRef}
          onFocus={inputFocusHandler}
          onChange={idChangeHandler}
          onBlur={inputBlurHandler}
        />
        <Input
          id='password'
          label={isPasswordFocus ? '' : 'Password'}
          type='password'
          name='password'
          minLength={8}
          required
          ref={passwordInputRef}
          onFocus={inputFocusHandler}
          value={userPassword}
          onChange={passwordChangeHandler}
          onBlur={inputBlurHandler}
        />

        <Button>Log In</Button>
        <Button type='submit'>Sign Up</Button>
      </StyleForm>
      <Footer />
    </LoginBox>
  )
}

export default LoginPage
const LoginBox = styled.div`
  display: grid;
  align-content: space-between;
  margin: 3rem auto;
  width: 95%;
  max-width: 35rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 60vh;
  justify-items: center;
`

const StyleForm = styled.form`
  display: grid;
  width: 80%;
`
