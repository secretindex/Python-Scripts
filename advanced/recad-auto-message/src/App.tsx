import "./App.css"
import Home from "./pages/home"
import MenuAnt from "./components/alt-antui/MenuUp"
import About from "./pages/About"
import { SecondCheckboxContextProvider } from "./contexts/SecondCheckboxContext"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CheckboxContextProvider from "./contexts/CheckboxContext"
import TextFieldContextProvider from "./contexts/TextfieldContext"
import ComponentThree from "./components/alt-antui/ComponentTwo"

function App() {
  return (
    <main className="min-h-full">
      <Router>
        <CheckboxContextProvider>
          <SecondCheckboxContextProvider>
            <TextFieldContextProvider>
              <MenuAnt />
              <section className="h-full px-6">
                <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/ativos" element={<Home />}></Route>
                  <Route
                    path="/aposentados"
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
