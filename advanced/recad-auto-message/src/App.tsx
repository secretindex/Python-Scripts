// import restart from "./assets/restart.svg";
import "./App.css";
import Home from "./pages/home";
import { IconButton } from "@mui/material";
import { RestartAlt } from "@mui/icons-material";

function App() {
  return (
    <section className="app-container">
      <Home />
      <div className="bottom-right">
        <IconButton
          className="IconButton"
          sx={{ backgroundColor: "#405D72", color: "#fefefe" }}
        >
          <RestartAlt fontSize="inherit" />
        </IconButton>
      </div>
    </section>
  );
}

export default App;
