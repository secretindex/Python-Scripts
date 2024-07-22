// import restart from "./assets/restart.svg";
import "./App.css"
import Home from "./pages/home"
import { IconButton } from "@mui/material"
import { RestartAlt } from "@mui/icons-material"
import Menu from "./components/Menu"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { createContext } from "react"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

function App() {
  return (
    <main>
      <Menu />
      <section className="app-container">
        <RouterProvider router={router} />
        <div className="bottom-right">
          <IconButton
            className="IconButton"
            color="primary"
            sx={{ border: "1px solid #adadad" }}
          >
            <RestartAlt fontSize="inherit" />
          </IconButton>
        </div>
      </section>
    </main>
  )
}

export default App
