import React from 'react'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { Breadcrumb, Layout, Menu, theme } from 'antd'

const { Header, Content, Sider } = Layout

const features: MenuProps['items'] = ['评分', '上传'].map((key) => ({
  key,
  label: `${key}`,
}))

const images: MenuProps['items'] = [
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
].map((icon, index) => {
  const key = String(index + 1)

  return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `子项${key}`,

    children: new Array(4).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1
      return {
        key: subKey,
        label: `option${subKey}`,
      }
    }),
  }
})

const App: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

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
        <Sider width={200} style={{ background: colorBgContainer }}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%', borderRight: 0 }}
            items={images}
          />
        </Sider>
        <Layout style={{ padding: '1.5rem' }}>
          {/* // TODO: work with react-router-dom */}
          {/* <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}

          <Content
            style={{
              padding: 24,
              margin: 0,
              minHeight: '280px',
              background: colorBgContainer,
            }}
          >
            Content
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default App
