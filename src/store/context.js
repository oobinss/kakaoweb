import React, { useState, useEffect, useCallback } from 'react'

const FormContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
})

export const ContextProvider = (props) => {
  const initialToken = localStorage.getItem('token')
  const [token, setToken] = useState(initialToken)

  const userIsLoggedIn = !!token

  const loginHandler = (token) => {
    setToken(token)
    localStorage.setItem('token', token)
  }

  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  }

  return (
    <FormContext.Provider value={contextValue}>
      {props.children}
    </FormContext.Provider>
  )
}

export default FormContext
