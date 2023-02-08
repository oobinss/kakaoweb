import React from 'react'
import ReactDOM from 'react-dom/client'
import { ContextProvider } from './store/context'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ContextProvider>
)
