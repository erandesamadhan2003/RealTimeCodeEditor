import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Login } from './pages/auth/Login.jsx'
import { Home } from './pages/Home.jsx'
import { Signup } from './pages/auth/Signup.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
