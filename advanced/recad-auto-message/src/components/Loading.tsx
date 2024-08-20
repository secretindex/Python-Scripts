import { Layout, Spin } from 'antd';
import { LoadingOutlined } from "@ant-design/icons"

const { Content } = Layout

interface LoadingProps {
  children: React.ReactNode
  isLoading: boolean
}

const Loading: React.FC<LoadingProps> = ({ children, isLoading = true }) => {
  return (
    <>
      {isLoading ? (
        <Content className="w-full h-full flex justify-center items-center">
          <Spin indicator={<LoadingOutlined spin />} size='large'/>
        </Content>
      ) : (
        <>
          {children}
        </>
      )}
    </>
  );
}

export default Loading