import Home from "./pages/home"
// import ComponentTwo from "./components/alt-antui/ComponentAnt"
import ComponentThree from "./components/alt-antui/ComponentTwo"
import MenuAnt from "./components/alt-antui/MenuUp"
// import ComponentDois from "./components/ComponentDois"
import About from "./pages/About"
import { SecondCheckboxContextProvider } from "./contexts/SecondCheckboxContext"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckboxContextProvider from "./contexts/CheckboxContext"
import TextFieldContextProvider from "./contexts/TextfieldContext"

import "./App.css"

function App() {
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
              </section>
            </TextFieldContextProvider>
          </SecondCheckboxContextProvider>
        </CheckboxContextProvider>
      </Router>
    </main>
  )
}

export default App
