import { TextareaAutosize } from "@mui/material";
import CheckboxLabels from "../components/Clickbox";

function Home() {
  return (
    <section className="app-container">
      <div className="checkbox-container">
        <CheckboxLabels />
      </div>
      <div className="text-gen">
        <TextareaAutosize className="text-result" />
      </div>
    </section>
  );
}

export default Home;

