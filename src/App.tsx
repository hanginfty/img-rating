import React from "react"
import { InboxOutlined } from "@ant-design/icons"
import type { UploadProps } from "antd"
import { message, Upload } from "antd"

const { Dragger } = Upload

const url = "http://124.223.90.145:8081/fileUpload"

const props: UploadProps = {
  name: "file",
  multiple: true,
  action: url,
  onChange(info) {
    const { status } = info.file
    if (status !== "uploading") {
      console.log(info.file, info.fileList)
    }
    if (status === "done") {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === "error") {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log("Dropped files", e.dataTransfer.files)
  },
}

const App: React.FC = () => (
  <Dragger {...props}>
    <p className="ant-upload-drag-icon">
      <InboxOutlined />
    </p>
    <p className="ant-upload-text">点击或拖拽来上传</p>
    <p className="ant-upload-hint">支持多个文件</p>
  </Dragger>
)

export default App
