import React from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd'
import { useRequest } from 'ahooks'
import { getImageList } from '../../api'
import { genGroupList } from './utils'
import { ItemType } from 'antd/es/menu/hooks/useItems'

const { Content, Sider } = Layout

export const RatingPage = () => {
  const [groupList, setGroupList] = React.useState<ItemType[]>([])

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const { loading } = useRequest(getImageList, {
    onSuccess(res) {
      setGroupList(genGroupList(res) as ItemType[])
    },
  })

  return (
    <>
      <Sider width={200}>
        {!loading && (
          <Menu
            mode="inline"
            style={{
              height: '100%',
              borderRight: 0,
              background: colorBgContainer,
            }}
            items={groupList}
          />
        )}
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
