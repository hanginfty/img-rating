// import React from 'react'
import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'

import App from './App'
import { LoginPage } from './pages/Login'
import { UploadPage } from './pages/Upload'
import NotFoundPage from './pages/404'

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <NotFoundPage /> },
  { path: '/login', element: <LoginPage /> },
  { path: '/upload', element: <UploadPage /> },
])

const globalTheme = {
  algorithm: theme.defaultAlgorithm,
  borderRadius: 10,
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider theme={globalTheme} locale={zhCN}>
    <RouterProvider router={router} />
  </ConfigProvider>
)
