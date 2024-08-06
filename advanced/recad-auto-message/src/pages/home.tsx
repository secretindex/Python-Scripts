import { Box, TextField, Typography } from "@mui/material"
// import CheckboxLabels from "../components/Clickbox"
import CheckboxLabelsAnt from "../components/alt-antui/ClickboxAnt"
import { BaseSyntheticEvent, useContext } from "react"
import { TextFieldContext } from "../contexts/TextfieldContext"

import { Input } from "antd"

const { TextArea } = Input

const App: React.FC = () => (
  <>
    <TextArea rows={4} />
    <br />
    <br />
    <TextArea rows={4} placeholder="maxLength is 6" maxLength={6} />
  </>
)

// TODO: Implement useContext to send generated message from checkbox component to text result component

function Home() {
  const textField = useContext(TextFieldContext)
  const { text } = textField

  const handleTextFieldChange = (e: BaseSyntheticEvent) => {
    console.log(e.target.value)
    textField?.setText(e.target.value)
  }

  return (
    <section className="app-container">
      <div className="checkbox-container">
        <CheckboxLabelsAnt />
      </div>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          justifyContent: "center",
          padding: 2,
        }}
      >
        <Typography textAlign={"left"}>Result</Typography>
        <TextArea
          aria-multiline
          value={text.trim()}
          onChange={handleTextFieldChange}
          style={{ height: "500px", resize: "none" }}
        />
        {/* <TextField
          variant="outlined"
          multiline
          minRows={20}
          maxRows={30}
          fullWidth
          value={text}
          onChange={handleTextFieldChange}
          sx={{
            height: "100%",
            "& .MuiInputBase-root": {
              height: "100%",
              alignItems: "start",
            },
          }}
        /> */}
      </Box>
    </section>
  )
}

export default Home
