import React, { useState, useRef, useContext } from 'react'
import Welcome from '../components/Login/Welcome'
import Header from '../components/layout/Header'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import styled from 'styled-components'
import Footer from '../components/Login/Footer'
import FormContext from '../store/context'
import { useNavigate } from 'react-router-dom'
const LoginPage = () => {
  const [isIdFocus, setIsIdFocus] = useState(false)
  const [isPasswordFocus, setIsPasswordFocus] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [userId, setUserId] = useState('')
  const [userPassword, setUserPassword] = useState('')
  const idInputRef = useRef()
  const passwordInputRef = useRef()
  const firebaseKey = process.env.REACT_APP_FIREBASE_KEY
  const Ctx = useContext(FormContext)
  const navigate = useNavigate()

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

  const submitHandler = async (event) => {
    event.preventDefault()

    const enteredEmail = idInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    setIsLoading(true)
    await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseKey}`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    setIsLoading(false)
    setUserId('')
    setUserPassword('')
  }

  const idChangeHandler = (event) => {
    setUserId(event.target.value)
  }

  const passwordChangeHandler = (event) => {
    setUserPassword(event.target.value)
  }

  const loginHandler = async () => {
    const enteredId = idInputRef.current.value
    const enteredPassword = passwordInputRef.current.value

    const response = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseKey}`,
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredId,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    const data = await response.json()
    Ctx.login(data.idToken)
    navigate('/home')
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

        <Button onClick={loginHandler}>Log In</Button>
        {!isLoading && <Button type='submit'>Sign Up</Button>}
        {isLoading && <p>Sending request...</p>}
      </StyleForm>
      <Footer />
    </LoginBox>
  )
}

export default LoginPage
const LoginBox = styled.div`
  display: grid;
  margin: 3rem auto;
  width: 95%;
  max-width: 35rem;
  border-radius: 6px;
  background-color: white;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
  text-align: center;
  height: 60vh;
  justify-items: center;
  align-content: stretch;
`

const StyleForm = styled.form`
  display: grid;
  width: 80%;
`
