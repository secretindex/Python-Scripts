import { useEffect, useState, BaseSyntheticEvent, useContext } from "react"

import {
  Box,
  IconButton
} from "@mui/material"
import { Typography } from "antd"
import CheckboxLabelsAnt from "../components/alt-antui/ClickboxAnt"
import { TextFieldContext } from "../contexts/TextfieldContext"
import { RestartAlt } from "@mui/icons-material"

import { Input } from "antd"
import Loading from "../components/Loading"
import { RequiredDocs } from "../utils/docsInterface"
import { CheckboxContext } from "../contexts/CheckboxContext"

const { TextArea } = Input

function Home() {
  const textField = useContext(TextFieldContext)
  const docs = useContext(CheckboxContext);
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const text = textField!.text

  useEffect(() => {
    setIsLoading(false)
  }, [docs!.docs]);

  const handleTextFieldChange = (e: BaseSyntheticEvent) => {
    console.log(e.target.value)
    textField?.setText(e.target.value)
  }

  const restartAction = () => {
    textField?.setText("")
    docs?.setDocs((prev: RequiredDocs) => {
      for (let i in prev) {
        prev[i] = false
      }

      return prev
    });
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
    </Loading>
  )
}

export default Home
