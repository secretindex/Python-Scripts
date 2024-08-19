import { Box, IconButton } from "@mui/material"
import { Typography } from "antd"
import CheckboxLabelsAnt from "../components/alt-antui/ClickboxAnt"
import { BaseSyntheticEvent, useContext } from "react"
import { RestartAlt } from "@mui/icons-material"

import { Input } from "antd"
import { TextFieldContext } from "../contexts/TextfieldContext"
import { CheckboxContext } from "../contexts/CheckboxContext"
import { RequiredDocs } from "../utils/docsInterface"

const { TextArea } = Input

function Home() {
  const textField = useContext(TextFieldContext)
  const checkboxes = useContext(CheckboxContext)
  const text = textField?.text

  const handleTextFieldChange = (e: BaseSyntheticEvent) => {
    textField?.setText(e.target.value)
  }

  const restartAction = () => {
    textField?.setText("");
    checkboxes?.setDocs((prev: RequiredDocs) => {
      console.log(prev)
      for (let i in prev) {
        prev[i] = false
      }

      return prev
    })
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
          padding: "0 2rem",
        }}
      >
        <Typography.Title level={3} style={{ fontSize: "1.2rem", margin: "0" }}>
          Result
        </Typography.Title>
        <TextArea
          aria-multiline
          value={text}
          onChange={handleTextFieldChange}
          style={{ height: "500px", resize: "none" }}
        />
      </Box>
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
  )
}

export default Home
