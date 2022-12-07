import type { MenuProps } from 'antd'
import {
  FolderOutlined,
  FolderOpenOutlined,
  FileImageOutlined,
} from '@ant-design/icons'
import React from 'react'

// generate image list for sidebar
export function genGroupList(imgs: Image[]): MenuProps['items'] {
  const s = new Set<string>()

  imgs.forEach((img) => {
    s.add(img.imageGroup)
  })

  return Array.from(s).map((groupId) => ({
    key: `group:${groupId}`,
    icon: React.createElement(FolderOutlined),
    label: `第 ${groupId} 组`,
    children: imgs.map((img) => {
      if (img.imageGroup != groupId) return
      return {
        key: `img:${img.id}`,
        label: `${pathtoName(img.imagePath)}`,
        icon: React.createElement(FileImageOutlined),
      }
    }),
  }))
}

// convert image path to fileName without ext
function pathtoName(path: string) {
  const strAry = path.split('/')
  return strAry[strAry.length - 1].split('.')[0]
}
