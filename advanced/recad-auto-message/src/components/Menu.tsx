import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import Typography from "@mui/material/Typography"
import TemporaryDrawer from "./Sidebar"

export default function Menu() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <TemporaryDrawer />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Aucad
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
