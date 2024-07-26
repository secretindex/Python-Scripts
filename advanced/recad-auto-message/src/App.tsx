// import restart from "./assets/restart.svg";
import "./App.css"
import Home from "./pages/home"
import { IconButton } from "@mui/material"
import { RestartAlt } from "@mui/icons-material"
import Menu from "./components/Menu"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckboxContextProvider from "./contexts/CheckboxContext"

function App() {
  return (
    <main>
      <Router>
        <CheckboxContextProvider>
          <Menu />
          <section className="app-container">
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/ativos" element={<Home />}></Route>
              <Route path="/aposentados" element={<h1>Aposentados</h1>}></Route>
              <Route
                path="/pensionistas"
                element={<h1>Pensionistas</h1>}
              ></Route>
            </Routes>
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
        </CheckboxContextProvider>
      </Router>
    </main>
  )
}

export default App
