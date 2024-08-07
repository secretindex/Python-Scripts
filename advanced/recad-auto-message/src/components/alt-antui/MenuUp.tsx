// import AppBar from "@mui/material/AppBar"
// import Box from "@mui/material/Box"
// import Toolbar from "@mui/material/Toolbar"
// import Typography from "@mui/material/Typography"

import { Layout, Menu, Typography } from "antd"
import { HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"

const { Header } = Layout

// const TopBarMenu = () => {
//   return (
//     <>
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             Aucad
//           </Typography>
//         </Toolbar>
//       </AppBar>
//     </Box>
//     <Layout>
//       <Header>
//         <div className="logo" style={{ float: 'left', color: 'white', fontSize: '20px' }}>
//           MyApp
//         </div>
//         <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} style={{ lineHeight: '64px' }}>
//           <Menu.Item key="1" icon={<HomeOutlined />}>
//             Home
//           </Menu.Item>
//           <Menu.Item key="2" icon={<UserOutlined />}>
//             Profile
//           </Menu.Item>
//           <Menu.Item key="3" icon={<SettingOutlined />}>
//             Settings
//           </Menu.Item>
//         </Menu>
//       </Header>
//     </Layout>
//     </>
//   );
// };

const { Title } = Typography

export default function MenuAnt() {
  return (
    <Layout>
      <Header style={{ padding: 0, margin: 0, height: "100%" }}>
        <Menu
          mode="horizontal"
          defaultSelectedKeys={["1"]}
          style={{
            lineHeight: "3rem",
            margin: "0",
            display: "flex",
            alignItems: "center",
            padding: "0 0.7rem",
          }}
        >
          <Title
            level={1}
            style={{ fontSize: "1.1rem", fontWeight: "bold", margin: "0" }}
          >
            Aucad
          </Title>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <Link to="/" style={{ color: "inherit" }}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            <Link to="/aposentados" style={{ color: "inherit" }}>
              Aposentados
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<SettingOutlined />}>
            <Link to="/pensionistas" style={{ color: "inherit" }}>
              Pensionistas
            </Link>
          </Menu.Item>
        </Menu>
      </Header>
    </Layout>
  )
}
