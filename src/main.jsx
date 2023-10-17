import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Layout from './Layout/Layout.jsx'
import AuthProvider from './Component/Authentication/AuthProvider'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={Layout}></RouterProvider></AuthProvider>
  </React.StrictMode>,
)
