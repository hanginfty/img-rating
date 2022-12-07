import React from 'react'
import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
import { message, Upload, Layout, theme } from 'antd'

const { Dragger } = Upload

const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: import.meta.env.url,
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}

export const UploadPage: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken()

  return (
    <Layout
      style={{
        height: '100vh',
        margin: '1.5rem',
        background: colorBgContainer,
      }}
    >
      <div
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Dragger {...props} style={{ width: '500px' }}>
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">点击或拖拽来上传</p>
          <p className="ant-upload-hint">支持多个文件</p>
        </Dragger>
      </div>
    </Layout>
  )
}
