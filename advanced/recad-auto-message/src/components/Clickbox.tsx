import { useContext } from "react"
import FormGroup from "@mui/material/FormGroup"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import { BaseSyntheticEvent } from "react"
import { Box, Button, Typography } from "@mui/material"
import { CheckboxContext } from "../contexts/CheckboxContext"
import { TextFieldContext } from "../contexts/TextfieldContext"
import TextField from "@mui/material/TextField"
import EndText from "../utils/endTextGen"

export default function CheckboxLabels() {
  // const [_checkboxes, _setCheckboxes] = useState<Array<string>>([])
  const reqDocs = useContext(CheckboxContext)
  const textField = useContext(TextFieldContext)

  const handleChange = (e: BaseSyntheticEvent) => {
    console.log(e.target)
    const name: string | any = e.target.name

    reqDocs?.setDocs({
      ...reqDocs.docs,
      [name]: reqDocs.docs[name] === true ? false : true,
    })
  }

  const submitCheckboxes = (_e: BaseSyntheticEvent) => {
    const endText = new EndText(reqDocs!.docs)
    const fullText: string = endText.returnFullText()

    console.log(fullText)
    // console.log(reqDocs?.docs)

    textField?.setText(fullText || "")
  }

  return (
    <div>
      <Box display={"flex"} flexDirection={"column"} gap={"10px"}>
        <TextField id="outlined-basic" label="Nome" variant="outlined" />
        <Typography variant="h2" sx={{ fontSize: "1.5rem", textAlign: "left" }}>
          Documentos
        </Typography>
      </Box>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.foto}
              onChange={handleChange}
              name="foto"
            />
          }
          label="Foto + ID"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.id}
              onChange={handleChange}
              name="id"
            />
          }
          label="Identidade"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.pis}
              onChange={handleChange}
              name="pis"
            />
          }
          label="PIS/PASEP ou NIT"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.residencia}
              onChange={handleChange}
              name="residencia"
            />
          }
          label="C. Residência"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.uniao}
              onChange={handleChange}
              name="uniao"
            />
          }
          label="D. União estável"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.casamento}
              onChange={handleChange}
              name="casamento"
            />
          }
          label="Certidão de Casamento"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.contracheque}
              onChange={handleChange}
              name="contracheque"
            />
          }
          label="Contracheque"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.posse}
              onChange={handleChange}
              name="posse"
            />
          }
          label="Termo de Posse"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.veracidade}
              onChange={handleChange}
              name="veracidade"
            />
          }
          label="Termo de Veracidade"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.estadoc}
              onChange={handleChange}
              name="estadoc"
            />
          }
          label="Declaração de Estado Civil"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.depid}
              onChange={handleChange}
              name="depid"
            />
          }
          label="ID do Dependente"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={reqDocs?.docs.decres}
              onChange={handleChange}
              name="decres"
            />
          }
          label="Declaração de Residência"
        />
        <Box width={"40%"}>
          <Button
            type="submit"
            variant="contained"
            onClick={(e: BaseSyntheticEvent) => submitCheckboxes(e)}
          >
            Generate Message
          </Button>
        </Box>
      </FormGroup>
    </div>
  )
}
