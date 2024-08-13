// import restart from "./assets/restart.svg";
import "./App.css"
import Home from "./pages/home"
import { IconButton } from "@mui/material"
import { RestartAlt } from "@mui/icons-material"
// import Menu from "./components/Menu"
// import ComponentTwo from "./components/alt-antui/ComponentAnt"
import ComponentThree from "./components/alt-antui/ComponentTwo"
import MenuAnt from "./components/alt-antui/MenuUp"
import ComponentDois from "./components/ComponentDois"
import About from "./pages/About"
import { SecondCheckboxContextProvider } from "./contexts/SecondCheckboxContext"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckboxContextProvider from "./contexts/CheckboxContext"
import TextFieldContextProvider from "./contexts/TextfieldContext"

function App() {
  const restartAction = () => {
    console.log("restarted")
  }

  return (
    <main>
      <Router>
        <CheckboxContextProvider>
          <SecondCheckboxContextProvider>
            <TextFieldContextProvider>
              <MenuAnt />
              <section className="app-container">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/ativos" element={<Home />}></Route>
                  <Route
                    path="/aposentados"
                    // element={<ComponentDois />}
                    element={<ComponentThree />}
                  ></Route>
                  <Route
                    path="/pensionistas"
                    element={<h1>Pensionistas</h1>}
                  ></Route>
                  <Route path="/about" element={<About />}></Route>
                </Routes>
                <div className="bottom-right">
                  <IconButton
                    className="IconButton"
                    color="primary"
                    sx={{ border: "1px solid #adadad" }}
                    onClick={() => restartAction()}
                  >
                    <RestartAlt fontSize="inherit" />
                  </IconButton>
                </div>
              </section>
            </TextFieldContextProvider>
          </SecondCheckboxContextProvider>
        </CheckboxContextProvider>
      </Router>
    </main>
  )
}

export default App
