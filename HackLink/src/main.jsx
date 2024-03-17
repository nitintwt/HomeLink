import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Auth0Provider
    domain="dev-ei7n27pbjy8zkcl7.us.auth0.com"
    clientId="Vb6f5rkxDXeC3bfroLTu1dbglyPMJd6s"
    redirectUri= {window.location.origin} >
    <App />
  </Auth0Provider>,
  </React.StrictMode>,
)
