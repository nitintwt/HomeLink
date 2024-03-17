import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Devices from './components/Devices/Devices.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'
import UserContextProvider from './context/UserContextProvider.jsx'

const router = createBrowserRouter([
  {
    path:'',
    element:<Layout/>,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/devices',
        element:<Devices/>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <UserContextProvider>
  <Auth0Provider
    domain="dev-ei7n27pbjy8zkcl7.us.auth0.com"
    clientId="Vb6f5rkxDXeC3bfroLTu1dbglyPMJd6s"
    redirectUri= {window.location.origin} >
    <RouterProvider router={router}/>
  </Auth0Provider>,
  </UserContextProvider>
  </React.StrictMode>,
)
