// import restart from "./assets/restart.svg";
import "./App.css"
import Home from "./pages/home"
import { IconButton } from "@mui/material"
import { RestartAlt } from "@mui/icons-material"
import Menu from "./components/Menu"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import CheckboxContextProvider from "./contexts/CheckboxContext"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/ativos",
    element: <Home />,
  },
  {
    path: "/aposentados",
    element: <h1>APosentados</h1>,
  },
  {
    path: "/pensionistas",
    element: <h1>Pensionistas</h1>,
  },
])

function App() {
  return (
    <main>
      <Menu />
      <section className="app-container">
        <CheckboxContextProvider>
          <RouterProvider router={router} />
        </CheckboxContextProvider>
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
