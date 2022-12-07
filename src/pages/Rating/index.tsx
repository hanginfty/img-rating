import React from 'react'
import type { MenuProps } from 'antd'
import {
  LaptopOutlined,
  NotificationOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { Breadcrumb, Layout, Menu, theme } from 'antd'

const { Content, Sider } = Layout

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

export const RatingPage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <>
      <Sider width={200}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{
            height: '100%',
            borderRight: 0,
            background: colorBgContainer,
          }}
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
            padding: '1.5rem',
            margin: 0,
            borderRadius: '.8rem',
            background: colorBgContainer,
          }}
        >
          Content
        </Content>
      </Layout>
    </>
  )
}
