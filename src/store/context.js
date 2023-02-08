import React, { useState, useEffect, useCallback } from 'react'

const FormContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
})

export const ContextProvider = (props) => {
  const [token, setToken] = useState(null)

  const userIsLoggedIn = !!token

  const loginHandler = (token) => {
    setToken(token)
  }

  const logoutHandler = () => {
    setToken(null)
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
