import { Button, Result } from 'antd'

export default () => {
  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，找不到该页面"
      extra={
        <Button
          type="primary"
          onClick={() => {
            window.history.back()
          }} 
        >
          回到上一页
        </Button>
      }
    />
  )
}
