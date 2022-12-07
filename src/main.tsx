import ReactDOM from 'react-dom/client'
import 'antd/dist/reset.css'
import './index.css'
import { ConfigProvider, theme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { RouterProvider } from 'react-router-dom'

import { router } from './routes'

const globalTheme = {
  algorithm: theme.defaultAlgorithm,
  borderRadius: 10,
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ConfigProvider theme={globalTheme} locale={zhCN}>
    <RouterProvider router={router} />
  </ConfigProvider>
)
