import React from 'react'
import { CloudUploadOutlined, StarFilled } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Layout, Menu, theme } from 'antd'
import { Link, Outlet } from 'react-router-dom'

const { Header } = Layout

const features: MenuProps['items'] = [
  {
    key: 'rating',
    label: <Link to={'rating'}>评分</Link>,
    icon: <StarFilled />,
  },
  {
    key: 'upload',
    label: <Link to={'upload'}>上传</Link>,
    icon: <CloudUploadOutlined />,
  },
]

const App: React.FC = () => {
  return (
    <Layout style={{ height: '100vh' }}>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={features}
        />
      </Header>

      <Layout>
        <Outlet />
      </Layout>
    </Layout>
  )
}

export default App
