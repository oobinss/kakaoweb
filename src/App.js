import React, { useContext } from 'react'
import GlobalStyles from './components/layout/GlobalStyles'
import LoginPage from './pages/Login'
import MyPage from './pages/Home'
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'
import FormContext from './store/context'

function App() {
  const Ctx = useContext(FormContext)
  const isLoggedIn = Ctx.isLoggedIn

  const router = createBrowserRouter(
    createRoutesFromElements(
      <React.Fragment>
        <Route path='/' element={<LoginPage />} />
        {isLoggedIn && <Route path='/home' element={<MyPage />} />}
        <Route path='/*' element={<LoginPage />} />
      </React.Fragment>
    )
  )
  return (
    <React.Fragment>
      <GlobalStyles />
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
