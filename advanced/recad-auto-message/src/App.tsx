// import restart from "./assets/restart.svg";
import "./App.css";
import Home from "./pages/home";
import { IconButton } from "@mui/material";
import { RestartAlt } from "@mui/icons-material";
import TemporaryDrawer from "./components/Sidebar";

function App() {
  return (
    <section className="app-container">
      <Home />
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
  );
}

export default App;
