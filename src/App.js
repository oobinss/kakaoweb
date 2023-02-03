import * as React from 'react'
import GlobalStyles from './components/layout/GlobalStyles'
import LoginPage from './pages/Login'
import MyPage from './pages/Home'
import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <React.Fragment>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<MyPage />} />
    </React.Fragment>
  )
)
function App() {
  return (
    <React.Fragment>
      <GlobalStyles />
      <RouterProvider router={router} />
    </React.Fragment>
  )
}

export default App
