import { useEffect, useState } from "react"
import {
  Box,
  // TextField,
} from "@mui/material"
import { Typography } from "antd"
// import CheckboxLabels from "../components/Clickbox"
import CheckboxLabelsAnt from "../components/alt-antui/ClickboxAnt"
import { BaseSyntheticEvent, useContext } from "react"
import { TextFieldContext } from "../contexts/TextfieldContext"

import { Input } from "antd"
import Loading from "../components/Loading"

const { TextArea } = Input

// TODO: Implement useContext to send generated message from checkbox component to text result component

function Home() {
  const textField = useContext(TextFieldContext)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const text = textField!.text

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleTextFieldChange = (e: BaseSyntheticEvent) => {
    console.log(e.target.value)
    textField?.setText(e.target.value)
  }

  return (
    <Loading isLoading={isLoading}>
      <section className="app-container w-full">
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
            padding: "0 2rem"
          }}
        >
          <Typography.Title level={3} style={{ fontSize: "1.2rem", margin: "0" }}>Result</Typography.Title>
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
    </Loading>
  )
}

export default Home
