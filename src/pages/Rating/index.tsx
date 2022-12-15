import React from 'react'
import {
  Breadcrumb,
  Layout,
  Menu,
  theme,
  Carousel,
  Image,
  Rate,
  Button,
} from 'antd'
import { useRequest } from 'ahooks'
import { getImageList } from '../../api'
import { genGroupList } from './utils'
import { ItemType } from 'antd/es/menu/hooks/useItems'

const { Content, Sider } = Layout

export const RatingPage = () => {
  const [groupList, setGroupList] = React.useState<ItemType[]>([])

  const [score, setScore] = React.useState<number>(5)

  const carouselRef = React.useRef(null)

  const {
    token: { colorBgContainer },
  } = theme.useToken()

  const { loading } = useRequest(getImageList, {
    onSuccess(res) {
      setGroupList(genGroupList(res) as ItemType[])
    },
  })

  function onChange(currentSlide: number) {
    console.log(currentSlide)
  }

  function onRate() {}

  const contentStyle: React.CSSProperties = {
    margin: 0,
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  }

  return (
    <>
      <Sider width={250}>
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
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb> */}

        <Content
          style={{
            padding: '1.5rem',
            margin: 0,
            borderRadius: '.8rem',
            background: colorBgContainer,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Carousel
            dotPosition="right"
            afterChange={onChange}
            draggable
            ref={carouselRef}
          >
            {/* <Image src="https://picsum.photos/seed/picsum/200/300" /> */}
            <div>
              <h3 style={contentStyle}>1</h3>
            </div>
            <div>
              <h3 style={contentStyle}>2</h3>
            </div>
            <div>
              <h3 style={contentStyle}>3</h3>
            </div>
            <div>
              <h3 style={contentStyle}>4</h3>
            </div>
          </Carousel>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginTop: '1rem',
            }}
          >
            <Button
              onClick={() => {
                // @ts-ignore
                carouselRef.current.prev()
              }}
            >
              {' '}
              {'<'}{' '}
            </Button>
            <Button
              onClick={() => {
                // @ts-ignore
                carouselRef.current.next()
              }}
              style={{ marginLeft: '2rem' }}
            >
              {' '}
              {'>'}{' '}
            </Button>
          </div>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Rate
              count={10}
              style={{ fontSize: '2rem' }}
              onChange={setScore}
              value={score}
            />
            <p
              style={{
                fontSize: '1.5rem',
                color: '#555',
                marginTop: '1.2rem',
                marginLeft: '1.2rem',
              }}
            >
              {score}
            </p>
            <Button
              type="primary"
              size="large"
              onClick={onRate}
              style={{ marginLeft: '2rem' }}
            >
              评分
            </Button>
          </div>
        </Content>
      </Layout>
    </>
  )
}
