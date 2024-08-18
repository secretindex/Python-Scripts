// import AppBar from "@mui/material/AppBar"
// import Box from "@mui/material/Box"
// import Toolbar from "@mui/material/Toolbar"
// import Typography from "@mui/material/Typography"

import { Layout, Menu, Typography } from "antd"
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const { Header } = Layout

const { Title } = Typography

export default function MenuAnt() {
  return (
    <Layout>
      <Header className="p-0 m-0 h-full">
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          className="flex items-center gap-1 px-2 m-0"
          style={{
            lineHeight: "3rem",
          }}
        >
          <Title
            level={1}
            style={{ fontSize: "1.1rem", fontWeight: "bold", margin: "0" }}
          >
            Aucad
          </Title>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/" className="text-inherit">
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/aposentados" className="text-inherit">
              Aposentados
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="/pensionistas" className="text-inherit">
              Pensionistas
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}
